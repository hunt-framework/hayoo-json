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
        "word": "xml-picklers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides XML picklers that plug into the xml tree of the\n \u003cem\u003exml-types\u003c/em\u003e package.\n This module was \"inspired\" by hexpat-pickle.\n\u003c/p\u003e\u003cp\u003eThe API differences between \u003cem\u003ehexpat-pickle\u003c/em\u003e and this module include:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When unpickling, picklers will \u003cem\u003econsume\u003c/em\u003e matching elmements so that they will be ignored by sucessive picklers.\n  To circumvent this behaviour, use \u003ccode\u003e\u003ccode\u003e\u003ca\u003expPeek\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e wrappers like \u003ccode\u003e\u003ca\u003expWrap\u003c/a\u003e\u003c/code\u003e are uncurried\n\u003c/li\u003e\u003cli\u003e There are no lazy unpicklers\n\u003c/li\u003e\u003cli\u003e Most unpicklers will produce an error when their child unpicklers fail to consume all elements.\n Use \u003ccode\u003e\u003ca\u003expClean\u003c/a\u003e\u003c/code\u003e to discard those elements\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe data type \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e t a\u003c/code\u003e represents both a pickler (converting Haskell data\n to XML) and an unpickler (XML to Haskell data), so your code only needs to be\n written once for both serialization and deserialization.  The \u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e primitives, such\n as \u003ccode\u003e\u003ca\u003expElem\u003c/a\u003e\u003c/code\u003e for XML elements, may be composed into complex arrangements using\n \u003ccode\u003e\u003ca\u003expPair\u003c/a\u003e\u003c/code\u003e and other combinators.\n\u003c/p\u003e\u003cp\u003eMost picklers will try to find the \u003cem\u003efirst match\u003c/em\u003e rather than failing when\n the first element doesn't match. This is why the target type often ist\n a list. To prevent this behaviour and commit the pickler to the first\n element available, use \u003ccode\u003e\u003ca\u003expIsolate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe top level of the document does not follow this rule, because it is a single\n node type.  \u003ccode\u003e\u003ca\u003expRoot\u003c/a\u003e\u003c/code\u003e is needed to adapt this to type [\u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e] for your\n pickler to use.  You would typically define a pickler for a whole document with\n \u003ccode\u003e\u003ca\u003expElem\u003c/a\u003e\u003c/code\u003e, then pickle it to a single \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ccode\u003e\u003ca\u003epickleTree\u003c/a\u003e\u003c/code\u003e (xpRoot myDocPickler) value\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNB\u003c/em\u003e: Unresolved entities are considered an error and will trigger an exception\n\u003c/p\u003e\u003cp\u003eWhen unpickling, the folowing invariant regarding the list of remaining elements should be observed:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The returned list should be a subset of or the initial list itself, that is, no elements should be added\n or changed\n\u003c/li\u003e\u003cli\u003e The relative order of elements should be preserved\n\u003c/li\u003e\u003cli\u003e Elements may, however, be removed from anywhere in the list\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHere is a simple example to get you started:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import Data.Text\n import Data.XML.Types\n import Data.XML.Pickle\n\n -- Person name, age and description\n data Person = Person Text Int Text\n\n xpPerson :: PU [Node] Person\n xpPerson =\n     -- How to wrap and unwrap a Person\n     xpWrap (\\((name, age), descr) -\u003e Person name age descr)\n            (\\(Person name age descr) -\u003e ((name, age), descr)) $\n     xpElem \"person\"\n         (xpPair\n             (xpAttr \"name\" xpId)\n             (xpAttr \"age\" xpPrim))\n         (xpContent xpId)\n\n people = [\n     Person \"Dave\" 27 \"A fat thin man with long short hair\",\n     Person \"Jane\" 21 \"Lives in a white house with green windows\"]\n\n main = do\n     print $ pickle (xpRoot $ xpElemNodes \"people\" $ xpAll xpPerson) people\n\u003c/pre\u003e\u003cp\u003eProgram output would be an xml-value equivalent to:\n\u003c/p\u003e\u003cpre\u003e \u003cpeople\u003e\u003cperson name=\"Dave\" age=\"27\"\u003eA fat thin man with long short hair\u003c/person\u003e\n \u003cperson name=\"Jane\" age=\"21\"\u003eLives in a white house with green windows\u003c/person\u003e\u003c/people\u003e\n\u003c/pre\u003e\u003cp\u003eFunctions marked with \u003cem\u003ecompat\u003c/em\u003e are included for compatibility with hexpat-pickle\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.XML.Pickle",
          "name": "Pickle",
          "package": "xml-picklers",
          "source": "src/Data-XML-Pickle.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides XML picklers that plug into the xml tree of the xml-types package This module was inspired by hexpat-pickle The API differences between hexpat-pickle and this module include When unpickling picklers will consume matching elmements so that they will be ignored by sucessive picklers To circumvent this behaviour use xpPeek wrappers like xpWrap are uncurried There are no lazy unpicklers Most unpicklers will produce an error when their child unpicklers fail to consume all elements Use xpClean to discard those elements The data type PU represents both pickler converting Haskell data to XML and an unpickler XML to Haskell data so your code only needs to be written once for both serialization and deserialization The PU primitives such as xpElem for XML elements may be composed into complex arrangements using xpPair and other combinators Most picklers will try to find the first match rather than failing when the first element doesn match This is why the target type often ist list To prevent this behaviour and commit the pickler to the first element available use xpIsolate The top level of the document does not follow this rule because it is single node type xpRoot is needed to adapt this to type Node for your pickler to use You would typically define pickler for whole document with xpElem then pickle it to single Node with pickleTree xpRoot myDocPickler value NB Unresolved entities are considered an error and will trigger an exception When unpickling the folowing invariant regarding the list of remaining elements should be observed The returned list should be subset of or the initial list itself that is no elements should be added or changed The relative order of elements should be preserved Elements may however be removed from anywhere in the list Here is simple example to get you started LANGUAGE OverloadedStrings import Data.Text import Data.XML.Types import Data.XML.Pickle Person name age and description data Person Person Text Int Text xpPerson PU Node Person xpPerson How to wrap and unwrap Person xpWrap name age descr Person name age descr Person name age descr name age descr xpElem person xpPair xpAttr name xpId xpAttr age xpPrim xpContent xpId people Person Dave fat thin man with long short hair Person Jane Lives in white house with green windows main do print pickle xpRoot xpElemNodes people xpAll xpPerson people Program output would be an xml-value equivalent to people person name Dave age fat thin man with long short hair person person name Jane age Lives in white house with green windows person people Functions marked with compat are included for compatibility with hexpat-pickle",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "Pickle",
          "package": "xml-picklers",
          "partial": "Pickle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "Attribute",
          "package": "xml-picklers",
          "source": "src/Data-XML-Pickle.html#Attribute",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "Attribute",
          "package": "xml-picklers",
          "partial": "Attribute",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "PU",
          "package": "xml-picklers",
          "source": "src/Data-XML-Pickle-Basic.html#PU",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "PU",
          "package": "xml-picklers",
          "partial": "PU",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#t:PU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "UnpickleError",
          "package": "xml-picklers",
          "source": "src/Data-XML-Pickle-Basic.html#UnpickleError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "UnpickleError",
          "package": "xml-picklers",
          "partial": "Unpickle Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#t:UnpickleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "UnpickleResult",
          "package": "xml-picklers",
          "source": "src/Data-XML-Pickle-Basic.html#UnpickleResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "UnpickleResult",
          "package": "xml-picklers",
          "partial": "Unpickle Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#t:UnpickleResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "UnresolvedEntityException",
          "package": "xml-picklers",
          "source": "src/Data-XML-Pickle-Basic.html#UnresolvedEntityException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "UnresolvedEntityException",
          "package": "xml-picklers",
          "partial": "Unresolved Entity Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#t:UnresolvedEntityException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003exp2Tuple\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "(\u003c#\u003e)",
          "package": "xml-picklers",
          "signature": "PU [a] b1 -\u003e PU [a] b2 -\u003e PU [a] (b1, b2)",
          "source": "src/Data-XML-Pickle.html#%3C%23%3E",
          "type": "function"
        },
        "index": {
          "description": "xp2Tuple",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "(\u003c#\u003e) \u003c#\u003e",
          "normalized": "PU[a]b-\u003ePU[a]b-\u003ePU[a](b,b)",
          "package": "xml-picklers",
          "signature": "PU[a]b-\u003ePU[a]b-\u003ePU[a](b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:-60--35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "(\u003c++\u003e)",
          "package": "xml-picklers",
          "signature": "(Text, Text) -\u003e UnpickleError -\u003e UnpickleError",
          "source": "src/Data-XML-Pickle-Basic.html#%3C%2B%2B%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "(\u003c++\u003e) \u003c++\u003e",
          "normalized": "(Text,Text)-\u003eUnpickleError-\u003eUnpickleError",
          "package": "xml-picklers",
          "signature": "(Text,Text)-\u003eUnpickleError-\u003eUnpickleError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:-60--43--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a back trace level to the error report\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "(\u003c?+\u003e)",
          "package": "xml-picklers",
          "signature": "(Text, Text) -\u003e PU t a -\u003e PU t a",
          "source": "src/Data-XML-Pickle-Basic.html#%3C%3F%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Add back trace level to the error report",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "(\u003c?+\u003e) \u003c?+\u003e",
          "normalized": "(Text,Text)-\u003ePU a b-\u003ePU a b",
          "package": "xml-picklers",
          "signature": "(Text,Text)-\u003ePU t a-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:-60--63--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverride the last backtrace level in the error report\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "(\u003c?\u003e)",
          "package": "xml-picklers",
          "signature": "(Text, Text) -\u003e PU t a -\u003e PU t a",
          "source": "src/Data-XML-Pickle-Basic.html#%3C%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "Override the last backtrace level in the error report",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "(Text,Text)-\u003ePU a b-\u003ePU a b",
          "package": "xml-picklers",
          "signature": "(Text,Text)-\u003ePU t a-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "(\u003c??\u003e)",
          "package": "xml-picklers",
          "signature": "Text -\u003e PU t a -\u003e PU t a",
          "source": "src/Data-XML-Pickle-Basic.html#%3C%3F%3F%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "(\u003c??\u003e) \u003c??\u003e",
          "normalized": "Text-\u003ePU a b-\u003ePU a b",
          "package": "xml-picklers",
          "signature": "Text-\u003ePU t a-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:-60--63--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "ErrorMessage",
          "package": "xml-picklers",
          "signature": "ErrorMessage Text",
          "source": "src/Data-XML-Pickle-Basic.html#UnpickleError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "ErrorMessage",
          "package": "xml-picklers",
          "partial": "Error Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:ErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot found, description of element\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "NoResult",
          "package": "xml-picklers",
          "signature": "NoResult Text",
          "source": "src/Data-XML-Pickle-Basic.html#UnpickleResult",
          "type": "function"
        },
        "index": {
          "description": "Not found description of element",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "NoResult",
          "package": "xml-picklers",
          "partial": "No Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:NoResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "PU",
          "package": "xml-picklers",
          "signature": "PU",
          "source": "src/Data-XML-Pickle-Basic.html#PU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "PU",
          "package": "xml-picklers",
          "partial": "PU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:PU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult and remainder. The\n remainder is wrapped in Maybe to\n avoid a Monoid constraint on t.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eInvariant\u003c/em\u003e: When t is a\n Monoid, the empty remainder should\n always be \u003ccode\u003eNothing\u003c/code\u003e instead of\n \u003ccode\u003eJust mempty\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "Result",
          "package": "xml-picklers",
          "signature": "Result a (Maybe t)",
          "source": "src/Data-XML-Pickle-Basic.html#UnpickleResult",
          "type": "function"
        },
        "index": {
          "description": "Result and remainder The remainder is wrapped in Maybe to avoid Monoid constraint on Invariant When is Monoid the empty remainder should always be Nothing instead of Just mempty",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "Result",
          "package": "xml-picklers",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "TraceStep",
          "package": "xml-picklers",
          "signature": "TraceStep (Text, Text) UnpickleError",
          "source": "src/Data-XML-Pickle-Basic.html#UnpickleError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "TraceStep",
          "normalized": "TraceStep(Text,Text)UnpickleError",
          "package": "xml-picklers",
          "partial": "Trace Step",
          "signature": "TraceStep(Text,Text)UnpickleError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:TraceStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "UnpickleError",
          "package": "xml-picklers",
          "signature": "UnpickleError UnpickleError",
          "source": "src/Data-XML-Pickle-Basic.html#UnpickleResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "UnpickleError",
          "package": "xml-picklers",
          "partial": "Unpickle Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:UnpickleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "UnresolvedEntityException",
          "package": "xml-picklers",
          "signature": "UnresolvedEntityException",
          "source": "src/Data-XML-Pickle-Basic.html#UnresolvedEntityException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "UnresolvedEntityException",
          "package": "xml-picklers",
          "partial": "Unresolved Entity Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:UnresolvedEntityException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "Variants",
          "package": "xml-picklers",
          "signature": "Variants [UnpickleError]",
          "source": "src/Data-XML-Pickle-Basic.html#UnpickleError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "Variants",
          "normalized": "Variants[UnpickleError]",
          "package": "xml-picklers",
          "partial": "Variants",
          "signature": "Variants[UnpickleError]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:Variants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "flattenContent",
          "package": "xml-picklers",
          "signature": "[Node] -\u003e [Node]",
          "source": "src/Data-XML-Pickle.html#flattenContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "flattenContent",
          "normalized": "[Node]-\u003e[Node]",
          "package": "xml-picklers",
          "partial": "Content",
          "signature": "[Node]-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:flattenContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to extract the remainig elements, fail if there are none\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "getRest",
          "package": "xml-picklers",
          "signature": "UnpickleResult [a] b -\u003e UnpickleResult [a] (b, [a])",
          "source": "src/Data-XML-Pickle-Tuples.html#getRest",
          "type": "function"
        },
        "index": {
          "description": "Try to extract the remainig elements fail if there are none",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "getRest",
          "normalized": "UnpickleResult[a]b-\u003eUnpickleResult[a](b,[a])",
          "package": "xml-picklers",
          "partial": "Rest",
          "signature": "UnpickleResult[a]b-\u003eUnpickleResult[a](b,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:getRest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epickle a Tree\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "pickle",
          "package": "xml-picklers",
          "signature": "PU t a -\u003e a -\u003e t",
          "source": "src/Data-XML-Pickle.html#pickle",
          "type": "function"
        },
        "index": {
          "description": "pickle Tree",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "pickle",
          "normalized": "PU a b-\u003eb-\u003ea",
          "package": "xml-picklers",
          "signature": "PU t a-\u003ea-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:pickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "pickleTree",
          "package": "xml-picklers",
          "signature": "a -\u003e t",
          "source": "src/Data-XML-Pickle-Basic.html#PU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "pickleTree",
          "normalized": "a-\u003eb",
          "package": "xml-picklers",
          "partial": "Tree",
          "signature": "a-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:pickleTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "ppUnpickleError",
          "package": "xml-picklers",
          "signature": "UnpickleError -\u003e String",
          "source": "src/Data-XML-Pickle-Basic.html#ppUnpickleError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "ppUnpickleError",
          "normalized": "UnpickleError-\u003eString",
          "package": "xml-picklers",
          "partial": "Unpickle Error",
          "signature": "UnpickleError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:ppUnpickleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "tErr",
          "package": "xml-picklers",
          "signature": "Text -\u003e UnpickleResult t a -\u003e UnpickleResult t a",
          "source": "src/Data-XML-Pickle-Tuples.html#tErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "tErr",
          "normalized": "Text-\u003eUnpickleResult a b-\u003eUnpickleResult a b",
          "package": "xml-picklers",
          "partial": "Err",
          "signature": "Text-\u003eUnpickleResult t a-\u003eUnpickleResult t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:tErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunpickle a tree\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "unpickle",
          "package": "xml-picklers",
          "signature": "PU t a -\u003e t -\u003e Either UnpickleError a",
          "source": "src/Data-XML-Pickle.html#unpickle",
          "type": "function"
        },
        "index": {
          "description": "unpickle tree",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "unpickle",
          "normalized": "PU a b-\u003ea-\u003eEither UnpickleError b",
          "package": "xml-picklers",
          "signature": "PU t a-\u003et-\u003eEither UnpickleError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:unpickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "unpickleTree",
          "package": "xml-picklers",
          "signature": "t -\u003e UnpickleResult t a",
          "source": "src/Data-XML-Pickle-Basic.html#PU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "unpickleTree",
          "normalized": "a-\u003eUnpickleResult a b",
          "package": "xml-picklers",
          "partial": "Tree",
          "signature": "t-\u003eUnpickleResult t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:unpickleTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines 2 picklers\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xp2Tuple",
          "package": "xml-picklers",
          "signature": "PU [a] b1 -\u003e PU [a] b2 -\u003e PU [a] (b1, b2)",
          "source": "src/Data-XML-Pickle-Tuples.html#xp2Tuple",
          "type": "function"
        },
        "index": {
          "description": "Combines picklers",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xp2Tuple",
          "normalized": "PU[a]b-\u003ePU[a]b-\u003ePU[a](b,b)",
          "package": "xml-picklers",
          "partial": "Tuple",
          "signature": "PU[a]b-\u003ePU[a]b-\u003ePU[a](b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xp2Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines 3 picklers\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xp3Tuple",
          "package": "xml-picklers",
          "signature": "PU [a] a1 -\u003e PU [a] a2 -\u003e PU [a] a3 -\u003e PU [a] (a1, a2, a3)",
          "source": "src/Data-XML-Pickle-Tuples.html#xp3Tuple",
          "type": "function"
        },
        "index": {
          "description": "Combines picklers",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xp3Tuple",
          "normalized": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a)",
          "package": "xml-picklers",
          "partial": "Tuple",
          "signature": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xp3Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines 4 picklers\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xp4Tuple",
          "package": "xml-picklers",
          "signature": "PU [a] a1 -\u003e PU [a] a2 -\u003e PU [a] a3 -\u003e PU [a] a4 -\u003e PU [a] (a1, a2, a3, a4)",
          "source": "src/Data-XML-Pickle-Tuples.html#xp4Tuple",
          "type": "function"
        },
        "index": {
          "description": "Combines picklers",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xp4Tuple",
          "normalized": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a,a)",
          "package": "xml-picklers",
          "partial": "Tuple",
          "signature": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xp4Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines 5 picklers\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xp5Tuple",
          "package": "xml-picklers",
          "signature": "PU [a] a1 -\u003e PU [a] a2 -\u003e PU [a] a3 -\u003e PU [a] a4 -\u003e PU [a] a5 -\u003e PU [a] (a1, a2, a3, a4, a5)",
          "source": "src/Data-XML-Pickle-Tuples.html#xp5Tuple",
          "type": "function"
        },
        "index": {
          "description": "Combines picklers",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xp5Tuple",
          "normalized": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a,a,a)",
          "package": "xml-picklers",
          "partial": "Tuple",
          "signature": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xp5Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou guessed it ... Combines 6 picklers\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xp6Tuple",
          "package": "xml-picklers",
          "signature": "PU [a] a1 -\u003e PU [a] a2 -\u003e PU [a] a3 -\u003e PU [a] a4 -\u003e PU [a] a5 -\u003e PU [a] a6 -\u003e PU [a] (a1, a2, a3, a4, a5, a6)",
          "source": "src/Data-XML-Pickle-Tuples.html#xp6Tuple",
          "type": "function"
        },
        "index": {
          "description": "You guessed it Combines picklers",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xp6Tuple",
          "normalized": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a,a,a,a)",
          "package": "xml-picklers",
          "partial": "Tuple",
          "signature": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xp6Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an attribute with a fixed value.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpAddFixedAttr",
          "package": "xml-picklers",
          "signature": "Name -\u003e Text -\u003e PU [Attribute] b -\u003e PU [Attribute] b",
          "source": "src/Data-XML-Pickle.html#xpAddFixedAttr",
          "type": "function"
        },
        "index": {
          "description": "Add an attribute with fixed value",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpAddFixedAttr",
          "normalized": "Name-\u003eText-\u003ePU[Attribute]a-\u003ePU[Attribute]a",
          "package": "xml-picklers",
          "partial": "Add Fixed Attr",
          "signature": "Name-\u003eText-\u003ePU[Attribute]b-\u003ePU[Attribute]b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAddFixedAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to apply the pickler to all the remaining elements;\n fails if any of them don't match\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpAll",
          "package": "xml-picklers",
          "signature": "PU [a] b -\u003e PU [a] [b]",
          "source": "src/Data-XML-Pickle.html#xpAll",
          "type": "function"
        },
        "index": {
          "description": "Tries to apply the pickler to all the remaining elements fails if any of them don match",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpAll",
          "normalized": "PU[a]b-\u003ePU[a][b]",
          "package": "xml-picklers",
          "partial": "All",
          "signature": "PU[a]b-\u003ePU[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply unpickler to all elements with the given namespace.\n\u003c/p\u003e\u003cp\u003ePickles like \u003ccode\u003e\u003ca\u003expAll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpAllByNamespace",
          "package": "xml-picklers",
          "signature": "Text -\u003e PU [Node] b -\u003e PU [Node] [b]",
          "source": "src/Data-XML-Pickle.html#xpAllByNamespace",
          "type": "function"
        },
        "index": {
          "description": "Apply unpickler to all elements with the given namespace Pickles like xpAll",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpAllByNamespace",
          "normalized": "Text-\u003ePU[Node]a-\u003ePU[Node][a]",
          "package": "xml-picklers",
          "partial": "All By Namespace",
          "signature": "Text-\u003ePU[Node]b-\u003ePU[Node][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAllByNamespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute one of a list of picklers. The \u003cem\u003eselector function\u003c/em\u003e is used during\n pickling, and the integer returned is taken as a 0-based index to select a\n pickler from \u003cem\u003epickler options\u003c/em\u003e.  Unpickling is done by trying each list\n element in order until one returns a Result.  (the \u003cem\u003eselector\u003c/em\u003e is not used).\n\u003c/p\u003e\u003cp\u003eThis is typically used to handle each constructor of a data type. However, it\n can be used wherever multiple serialization strategies apply to a single type.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNB\u003c/em\u003e This function will ignore all errors as long as one of the branches\n returns a result. Also, it will produce an error when all branches return\n NoResult.  Use \u003ccode\u003e\u003ca\u003expChoice\u003c/a\u003e\u003c/code\u003e for a saner version of this function.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpAlt",
          "package": "xml-picklers",
          "signature": "(a -\u003e Int)-\u003e [PU t a]-\u003e PU t a",
          "type": "function"
        },
        "index": {
          "description": "Execute one of list of picklers The selector function is used during pickling and the integer returned is taken as based index to select pickler from pickler options Unpickling is done by trying each list element in order until one returns Result the selector is not used This is typically used to handle each constructor of data type However it can be used wherever multiple serialization strategies apply to single type NB This function will ignore all errors as long as one of the branches returns result Also it will produce an error when all branches return NoResult Use xpChoice for saner version of this function",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpAlt",
          "normalized": "(a-\u003eInt)-\u003e[PU b a]-\u003ePU b a",
          "package": "xml-picklers",
          "partial": "Alt",
          "signature": "(a-\u003eInt)-\u003e[PU t a]-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest predicate when unpickling. Fails with given error message when the\n predicate return false.\n\u003c/p\u003e\u003cp\u003eN.B.: The predicate will only be tested while \u003cem\u003eunpickling\u003c/em\u003e. When pickling,\n this is a noop.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpAssert",
          "package": "xml-picklers",
          "signature": "Text -\u003e (a -\u003e Bool) -\u003e PU t a -\u003e PU t a",
          "source": "src/Data-XML-Pickle.html#xpAssert",
          "type": "function"
        },
        "index": {
          "description": "Test predicate when unpickling Fails with given error message when the predicate return false N.B The predicate will only be tested while unpickling When pickling this is noop",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpAssert",
          "normalized": "Text-\u003e(a-\u003eBool)-\u003ePU b a-\u003ePU b a",
          "package": "xml-picklers",
          "partial": "Assert",
          "signature": "Text-\u003e(a-\u003eBool)-\u003ePU t a-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAssert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpAttr",
          "package": "xml-picklers",
          "signature": "Name -\u003e PU Text a -\u003e PU [Attribute] a",
          "source": "src/Data-XML-Pickle.html#xpAttr",
          "type": "function"
        },
        "index": {
          "description": "compat",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpAttr",
          "normalized": "Name-\u003ePU Text a-\u003ePU[Attribute]a",
          "package": "xml-picklers",
          "partial": "Attr",
          "signature": "Name-\u003ePU Text a-\u003ePU[Attribute]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "xpAttrFixed",
          "package": "xml-picklers",
          "signature": "Name -\u003e Text -\u003e PU [Attribute] ()",
          "source": "src/Data-XML-Pickle.html#xpAttrFixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpAttrFixed",
          "normalized": "Name-\u003eText-\u003ePU[Attribute]()",
          "package": "xml-picklers",
          "partial": "Attr Fixed",
          "signature": "Name-\u003eText-\u003ePU[Attribute]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAttrFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "xpAttrImplied",
          "package": "xml-picklers",
          "signature": "Name -\u003e PU Text a -\u003e PU [Attribute] (Maybe a)",
          "source": "src/Data-XML-Pickle.html#xpAttrImplied",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpAttrImplied",
          "normalized": "Name-\u003ePU Text a-\u003ePU[Attribute](Maybe a)",
          "package": "xml-picklers",
          "partial": "Attr Implied",
          "signature": "Name-\u003ePU Text a-\u003ePU[Attribute](Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAttrImplied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epickle to/from attribute\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpAttribute",
          "package": "xml-picklers",
          "signature": "Name -\u003e PU Text a -\u003e PU [Attribute] a",
          "source": "src/Data-XML-Pickle.html#xpAttribute",
          "type": "function"
        },
        "index": {
          "description": "pickle to from attribute",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpAttribute",
          "normalized": "Name-\u003ePU Text a-\u003ePU[Attribute]a",
          "package": "xml-picklers",
          "partial": "Attribute",
          "signature": "Name-\u003ePU Text a-\u003ePU[Attribute]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePickle attribute if Just is given, on unpickling return Just \u003ca\u003eval\u003c/a\u003e when\n the attribute is found, Nothing otherwise\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpAttribute'",
          "package": "xml-picklers",
          "signature": "Name -\u003e PU Text a -\u003e PU [Attribute] (Maybe a)",
          "source": "src/Data-XML-Pickle.html#xpAttribute%27",
          "type": "function"
        },
        "index": {
          "description": "Pickle attribute if Just is given on unpickling return Just val when the attribute is found Nothing otherwise",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpAttribute'",
          "normalized": "Name-\u003ePU Text a-\u003ePU[Attribute](Maybe a)",
          "package": "xml-picklers",
          "partial": "Attribute'",
          "signature": "Name-\u003ePU Text a-\u003ePU[Attribute](Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAttribute-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePickle an attribute with the specified name and value, fail if the same attribute is\n not present on unpickle.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpAttribute_",
          "package": "xml-picklers",
          "signature": "Name -\u003e Text -\u003e PU [Attribute] ()",
          "source": "src/Data-XML-Pickle.html#xpAttribute_",
          "type": "function"
        },
        "index": {
          "description": "Pickle an attribute with the specified name and value fail if the same attribute is not present on unpickle",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpAttribute_",
          "normalized": "Name-\u003eText-\u003ePU[Attribute]()",
          "package": "xml-picklers",
          "partial": "Attribute",
          "signature": "Name-\u003eText-\u003ePU[Attribute]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAttribute_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts Booleans to XML boolean values\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e true and 1 are read as True\n\u003c/li\u003e\u003cli\u003e false and 0 are read as False\n\u003c/li\u003e\u003cli\u003e all other values generate an unpickle error\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWill always generate true or false (not 0 or 1) when pickling\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpBool",
          "package": "xml-picklers",
          "signature": "PU Text Bool",
          "source": "src/Data-XML-Pickle.html#xpBool",
          "type": "function"
        },
        "index": {
          "description": "Converts Booleans to XML boolean values true and are read as True false and are read as False all other values generate an unpickle error Will always generate true or false not or when pickling",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpBool",
          "package": "xml-picklers",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute one of a list of picklers. The \u003cem\u003eselector function\u003c/em\u003e is used during\n pickling, and the integer returned is taken as a 0-based index to select a\n pickler from \u003cem\u003epickler options\u003c/em\u003e.  Unpickling is done by trying each list\n element in order until one returns a Result or an Error.\n\u003c/p\u003e\u003cp\u003eThis is typically used to handle each constructor of a data type. However, it\n can be used wherever multiple serialization strategies apply to a single type.\n\u003c/p\u003e\u003cp\u003eThis function is similar to \u003ccode\u003e\u003ca\u003expAlt\u003c/a\u003e\u003c/code\u003e but it will stop unpickling on the first\n error. It will return NoResult iff all of the picklers return NoResult (or\n the list of picklers is empty).\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpChoice",
          "package": "xml-picklers",
          "signature": "(a -\u003e Int)-\u003e [PU t a]-\u003e PU t a",
          "type": "function"
        },
        "index": {
          "description": "Execute one of list of picklers The selector function is used during pickling and the integer returned is taken as based index to select pickler from pickler options Unpickling is done by trying each list element in order until one returns Result or an Error This is typically used to handle each constructor of data type However it can be used wherever multiple serialization strategies apply to single type This function is similar to xpAlt but it will stop unpickling on the first error It will return NoResult iff all of the picklers return NoResult or the list of picklers is empty",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpChoice",
          "normalized": "(a-\u003eInt)-\u003e[PU b a]-\u003ePU b a",
          "package": "xml-picklers",
          "partial": "Choice",
          "signature": "(a-\u003eInt)-\u003e[PU t a]-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun unpickler and consume and discard remaining elements\n\u003c/p\u003e\u003cp\u003eWhen pickling, this is a noop\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpClean",
          "package": "xml-picklers",
          "signature": "PU t a -\u003e PU t a",
          "source": "src/Data-XML-Pickle.html#xpClean",
          "type": "function"
        },
        "index": {
          "description": "Run unpickler and consume and discard remaining elements When pickling this is noop",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpClean",
          "normalized": "PU a b-\u003ePU a b",
          "package": "xml-picklers",
          "partial": "Clean",
          "signature": "PU t a-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpClean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore input/output and replace with constant values\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpConst",
          "package": "xml-picklers",
          "signature": "a -\u003e PU t () -\u003e PU t a",
          "source": "src/Data-XML-Pickle.html#xpConst",
          "type": "function"
        },
        "index": {
          "description": "Ignore input output and replace with constant values",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpConst",
          "normalized": "a-\u003ePU b()-\u003ePU b a",
          "package": "xml-picklers",
          "partial": "Const",
          "signature": "a-\u003ePU t()-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first non-element NodeContent from a node\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpContent",
          "package": "xml-picklers",
          "signature": "PU Text a -\u003e PU [Node] a",
          "source": "src/Data-XML-Pickle.html#xpContent",
          "type": "function"
        },
        "index": {
          "description": "Get the first non-element NodeContent from node",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpContent",
          "normalized": "PU Text a-\u003ePU[Node]a",
          "package": "xml-picklers",
          "partial": "Content",
          "signature": "PU Text a-\u003ePU[Node]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional conversion with default value\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003expWithDefault\u003c/a\u003e\u003c/code\u003e the default value is not encoded in the XML document,\n during unpickling the default value is inserted if the pickler doesn't\n returna a value\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpDefault",
          "package": "xml-picklers",
          "signature": "a -\u003e PU [t] a -\u003e PU [t] a",
          "source": "src/Data-XML-Pickle.html#xpDefault",
          "type": "function"
        },
        "index": {
          "description": "Optional conversion with default value Unlike xpWithDefault the default value is not encoded in the XML document during unpickling the default value is inserted if the pickler doesn returna value",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpDefault",
          "normalized": "a-\u003ePU[b]a-\u003ePU[b]a",
          "package": "xml-picklers",
          "partial": "Default",
          "signature": "a-\u003ePU[t]a-\u003ePU[t]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry the left pickler first and if that doesn't produce anything the right\n one.  wrapping the result in Left or Right, respectively\n\u003c/p\u003e\u003cp\u003eNot to be confued with \u003ccode\u003e\u003ca\u003expWrapEither\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpEither",
          "package": "xml-picklers",
          "signature": "PU n t1 -\u003e PU n t2 -\u003e PU n (Either t1 t2)",
          "source": "src/Data-XML-Pickle.html#xpEither",
          "type": "function"
        },
        "index": {
          "description": "Try the left pickler first and if that doesn produce anything the right one wrapping the result in Left or Right respectively Not to be confued with xpWrapEither",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpEither",
          "normalized": "PU a b-\u003ePU a b-\u003ePU a(Either b b)",
          "package": "xml-picklers",
          "partial": "Either",
          "signature": "PU n t-\u003ePU n t-\u003ePU n(Either t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen unpickling, tries to find the first element with the supplied name.\n Once such an element is found, it will commit to it and \u003cem\u003efail\u003c/em\u003e if any of the\n picklers don't match.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpElem",
          "package": "xml-picklers",
          "signature": "Name-\u003e PU [Attribute] a-\u003e PU [Node] n-\u003e PU [Node] (a, n)",
          "type": "function"
        },
        "index": {
          "description": "When unpickling tries to find the first element with the supplied name Once such an element is found it will commit to it and fail if any of the picklers don match",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpElem",
          "normalized": "Name-\u003ePU[Attribute]a-\u003ePU[Node]b-\u003ePU[Node](a,b)",
          "package": "xml-picklers",
          "partial": "Elem",
          "signature": "Name-\u003ePU[Attribute]a-\u003ePU[Node]n-\u003ePU[Node](a,n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper variant of xpElem for elements that contain attributes but no child tags.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpElemAttrs",
          "package": "xml-picklers",
          "signature": "Name -\u003e PU [Attribute] b -\u003e PU [Node] b",
          "source": "src/Data-XML-Pickle.html#xpElemAttrs",
          "type": "function"
        },
        "index": {
          "description": "helper variant of xpElem for elements that contain attributes but no child tags",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpElemAttrs",
          "normalized": "Name-\u003ePU[Attribute]a-\u003ePU[Node]a",
          "package": "xml-picklers",
          "partial": "Elem Attrs",
          "signature": "Name-\u003ePU[Attribute]b-\u003ePU[Node]b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for Elements that don't contain anything\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpElemBlank",
          "package": "xml-picklers",
          "signature": "Name -\u003e PU [Node] ()",
          "source": "src/Data-XML-Pickle.html#xpElemBlank",
          "type": "function"
        },
        "index": {
          "description": "Helper for Elements that don contain anything",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpElemBlank",
          "normalized": "Name-\u003ePU[Node]()",
          "package": "xml-picklers",
          "partial": "Elem Blank",
          "signature": "Name-\u003ePU[Node]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efind element by name space, prefixes are ignored\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpElemByNamespace",
          "package": "xml-picklers",
          "signature": "Text-\u003e PU Text name-\u003e PU [Attribute] a-\u003e PU [Node] n-\u003e PU [Node] (name, a, n)",
          "type": "function"
        },
        "index": {
          "description": "find element by name space prefixes are ignored",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpElemByNamespace",
          "normalized": "Text-\u003ePU Text a-\u003ePU[Attribute]b-\u003ePU[Node]c-\u003ePU[Node](a,b,c)",
          "package": "xml-picklers",
          "partial": "Elem By Namespace",
          "signature": "Text-\u003ePU Text name-\u003ePU[Attribute]a-\u003ePU[Node]n-\u003ePU[Node](name,a,n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemByNamespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen pickling, creates an empty element iff parameter is True\n\u003c/p\u003e\u003cp\u003eWhen unpickling, checks whether element exists. Generates an error when the\n element is not empty\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpElemExists",
          "package": "xml-picklers",
          "signature": "Name -\u003e PU [Node] Bool",
          "source": "src/Data-XML-Pickle.html#xpElemExists",
          "type": "function"
        },
        "index": {
          "description": "When pickling creates an empty element iff parameter is True When unpickling checks whether element exists Generates an error when the element is not empty",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpElemExists",
          "normalized": "Name-\u003ePU[Node]Bool",
          "package": "xml-picklers",
          "partial": "Elem Exists",
          "signature": "Name-\u003ePU[Node]Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper variant of xpElem for elements that contain child nodes but no attributes.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpElemNodes",
          "package": "xml-picklers",
          "signature": "Name -\u003e PU [Node] b -\u003e PU [Node] b",
          "source": "src/Data-XML-Pickle.html#xpElemNodes",
          "type": "function"
        },
        "index": {
          "description": "helper variant of xpElem for elements that contain child nodes but no attributes",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpElemNodes",
          "normalized": "Name-\u003ePU[Node]a-\u003ePU[Node]a",
          "package": "xml-picklers",
          "partial": "Elem Nodes",
          "signature": "Name-\u003ePU[Node]b-\u003ePU[Node]b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper variant of xpElem for elements that contain only character data\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpElemText",
          "package": "xml-picklers",
          "signature": "Name -\u003e PU [Node] Text",
          "source": "src/Data-XML-Pickle.html#xpElemText",
          "type": "function"
        },
        "index": {
          "description": "helper variant of xpElem for elements that contain only character data",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpElemText",
          "normalized": "Name-\u003ePU[Node]Text",
          "package": "xml-picklers",
          "partial": "Elem Text",
          "signature": "Name-\u003ePU[Node]Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePickler Returns the first found Element untouched\n\u003c/p\u003e\u003cp\u003eUnpickler wraps element in \u003ccode\u003e\u003ca\u003eNodeElement\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpElemVerbatim",
          "package": "xml-picklers",
          "signature": "PU [Node] Element",
          "source": "src/Data-XML-Pickle.html#xpElemVerbatim",
          "type": "function"
        },
        "index": {
          "description": "Pickler Returns the first found Element untouched Unpickler wraps element in NodeElement",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpElemVerbatim",
          "normalized": "PU[Node]Element",
          "package": "xml-picklers",
          "partial": "Elem Verbatim",
          "signature": "PU[Node]Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemVerbatim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epickle Element without restriction on the name.\n the name as taken / returned as the first element of the triple\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpElemWithName",
          "package": "xml-picklers",
          "signature": "PU [Attribute] a-\u003e PU [Node] n-\u003e PU [Node] (Name, a, n)",
          "type": "function"
        },
        "index": {
          "description": "pickle Element without restriction on the name the name as taken returned as the first element of the triple",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpElemWithName",
          "normalized": "PU[Attribute]a-\u003ePU[Node]b-\u003ePU[Node](Name,a,b)",
          "package": "xml-picklers",
          "partial": "Elem With Name",
          "signature": "PU[Attribute]a-\u003ePU[Node]n-\u003ePU[Node](Name,a,n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemWithName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle all elements with a given name. The unpickler will fail when any of\n the elements fails to unpickle.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpElems",
          "package": "xml-picklers",
          "signature": "Name-\u003e PU [Attribute] a-\u003e PU [Node] n-\u003e PU [Node] [(a, n)]",
          "type": "function"
        },
        "index": {
          "description": "Handle all elements with given name The unpickler will fail when any of the elements fails to unpickle",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpElems",
          "normalized": "Name-\u003ePU[Attribute]a-\u003ePU[Node]b-\u003ePU[Node][(a,b)]",
          "package": "xml-picklers",
          "partial": "Elems",
          "signature": "Name-\u003ePU[Attribute]a-\u003ePU[Node]n-\u003ePU[Node][(a,n)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a single element from the list and apply unpickler to it.\n\u003c/p\u003e\u003cp\u003eReturns no value when no element matches the predicate\n\u003c/p\u003e\u003cp\u003eFails when the unpickler doesn't return a value\n\u003c/p\u003e\u003cp\u003eWhen pickling, this is a noop\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpFindFirst",
          "package": "xml-picklers",
          "signature": "(t -\u003e Bool) -\u003e PU [t] a -\u003e PU [t] a",
          "source": "src/Data-XML-Pickle.html#xpFindFirst",
          "type": "function"
        },
        "index": {
          "description": "Select single element from the list and apply unpickler to it Returns no value when no element matches the predicate Fails when the unpickler doesn return value When pickling this is noop",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpFindFirst",
          "normalized": "(a-\u003eBool)-\u003ePU[a]b-\u003ePU[a]b",
          "package": "xml-picklers",
          "partial": "Find First",
          "signature": "(t-\u003eBool)-\u003ePU[t]a-\u003ePU[t]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpFindFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen unpickling, tries to apply the pickler to all elements\n returning and consuming only matched elements\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpFindMatches",
          "package": "xml-picklers",
          "signature": "PU [b] a -\u003e PU [b] [a]",
          "source": "src/Data-XML-Pickle.html#xpFindMatches",
          "type": "function"
        },
        "index": {
          "description": "When unpickling tries to apply the pickler to all elements returning and consuming only matched elements",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpFindMatches",
          "normalized": "PU[a]b-\u003ePU[a][b]",
          "package": "xml-picklers",
          "partial": "Find Matches",
          "signature": "PU[b]a-\u003ePU[b][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpFindMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "xpFst",
          "package": "xml-picklers",
          "signature": "PU t (a, b) -\u003e PU t a",
          "source": "src/Data-XML-Pickle.html#xpFst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpFst",
          "normalized": "PU a(b,c)-\u003ePU a b",
          "package": "xml-picklers",
          "partial": "Fst",
          "signature": "PU t(a,b)-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpFst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn one element, untouched\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpHead",
          "package": "xml-picklers",
          "signature": "PU [a] a",
          "source": "src/Data-XML-Pickle.html#xpHead",
          "type": "function"
        },
        "index": {
          "description": "return one element untouched",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpHead",
          "normalized": "PU[a]a",
          "package": "xml-picklers",
          "partial": "Head",
          "signature": "PU[a]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns everything (remaining), untouched.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpId",
          "package": "xml-picklers",
          "signature": "PU a a",
          "source": "src/Data-XML-Pickle.html#xpId",
          "type": "function"
        },
        "index": {
          "description": "Returns everything remaining untouched",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpId",
          "package": "xml-picklers",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsomorphic pickler\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpIso",
          "package": "xml-picklers",
          "signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e PU a b",
          "source": "src/Data-XML-Pickle.html#xpIso",
          "type": "function"
        },
        "index": {
          "description": "Isomorphic pickler",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpIso",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ePU a b",
          "package": "xml-picklers",
          "partial": "Iso",
          "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ePU a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpIso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNoop when pickling\n\u003c/p\u003e\u003cp\u003eWhen unpickling, only give access to the first element\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpIsolate",
          "package": "xml-picklers",
          "signature": "PU [t] a -\u003e PU [t] a",
          "source": "src/Data-XML-Pickle.html#xpIsolate",
          "type": "function"
        },
        "index": {
          "description": "Noop when pickling When unpickling only give access to the first element",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpIsolate",
          "normalized": "PU[a]b-\u003ePU[a]b",
          "package": "xml-picklers",
          "partial": "Isolate",
          "signature": "PU[t]a-\u003ePU[t]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpIsolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003expSeqWhile\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpList",
          "package": "xml-picklers",
          "signature": "PU [a] b -\u003e PU [a] [b]",
          "source": "src/Data-XML-Pickle.html#xpList",
          "type": "function"
        },
        "index": {
          "description": "xpSeqWhile compat",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpList",
          "normalized": "PU[a]b-\u003ePU[a][b]",
          "package": "xml-picklers",
          "partial": "List",
          "signature": "PU[a]b-\u003ePU[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003expAll\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpList0",
          "package": "xml-picklers",
          "signature": "PU [a] b -\u003e PU [a] [b]",
          "source": "src/Data-XML-Pickle.html#xpList0",
          "type": "function"
        },
        "index": {
          "description": "xpAll compat",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpList0",
          "normalized": "PU[a]b-\u003ePU[a][b]",
          "package": "xml-picklers",
          "partial": "List",
          "signature": "PU[a]b-\u003ePU[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpList0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike xpList, but only succeed during unpickling if at least a\n minimum number of elements are unpickled.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpListMinLen",
          "package": "xml-picklers",
          "signature": "Int -\u003e PU [a] b -\u003e PU [a] [b]",
          "source": "src/Data-XML-Pickle.html#xpListMinLen",
          "type": "function"
        },
        "index": {
          "description": "Like xpList but only succeed during unpickling if at least minimum number of elements are unpickled",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpListMinLen",
          "normalized": "Int-\u003ePU[a]b-\u003ePU[a][b]",
          "package": "xml-picklers",
          "partial": "List Min Len",
          "signature": "Int-\u003ePU[a]b-\u003ePU[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpListMinLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard pickler for maps\n\u003c/p\u003e\u003cp\u003eThis pickler converts a map into a list of pairs of the form\n\u003c/p\u003e\u003cpre\u003e \u003celt attr=\"key\"\u003evalue\u003c/elt\u003e\n\u003c/pre\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpMap",
          "package": "xml-picklers",
          "signature": "Name-\u003e Name-\u003e PU Text k-\u003e PU [Node] a-\u003e PU [Node] (Map k a)",
          "type": "function"
        },
        "index": {
          "description": "Standard pickler for maps This pickler converts map into list of pairs of the form elt attr key value elt",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpMap",
          "normalized": "Name-\u003eName-\u003ePU Text a-\u003ePU[Node]b-\u003ePU[Node](Map a b)",
          "package": "xml-picklers",
          "partial": "Map",
          "signature": "Name-\u003eName-\u003ePU Text k-\u003ePU[Node]a-\u003ePU[Node](Map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstead of failing the pickler will return no result\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpMayFail",
          "package": "xml-picklers",
          "signature": "PU t a -\u003e PU t a",
          "source": "src/Data-XML-Pickle.html#xpMayFail",
          "type": "function"
        },
        "index": {
          "description": "Instead of failing the pickler will return no result",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpMayFail",
          "normalized": "PU a b-\u003ePU a b",
          "package": "xml-picklers",
          "partial": "May Fail",
          "signature": "PU t a-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpMayFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a pickler. Nothing is returned when the given pickler\n doesn't return a value (e.g. the element isn't found). Does not affect\n unpickling errors.\n Nothing is pickled to mempty\n\u003c/p\u003e\u003cp\u003eA typical example is:\n\u003c/p\u003e\u003cpre\u003e xpElemAttributes \"score\" $ xpOption $ xpAttribute \"value\" xpPrim\n\u003c/pre\u003e\u003cp\u003ein which \u003ccode\u003eJust 5\u003c/code\u003e is encoded as \u003ccode\u003e\u003cscore value=\"5\"/\u003e\u003c/code\u003e and \u003ccode\u003eNothing\u003c/code\u003e\n as \u003ccode\u003e\u003cscore/\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpOption",
          "package": "xml-picklers",
          "signature": "PU [t] a -\u003e PU [t] (Maybe a)",
          "source": "src/Data-XML-Pickle.html#xpOption",
          "type": "function"
        },
        "index": {
          "description": "Lift pickler Nothing is returned when the given pickler doesn return value e.g the element isn found Does not affect unpickling errors Nothing is pickled to mempty typical example is xpElemAttributes score xpOption xpAttribute value xpPrim in which Just is encoded as score value and Nothing as score",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpOption",
          "normalized": "PU[a]b-\u003ePU[a](Maybe b)",
          "package": "xml-picklers",
          "partial": "Option",
          "signature": "PU[t]a-\u003ePU[t](Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003exp2Tuple\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpPair",
          "package": "xml-picklers",
          "signature": "PU [a] b1 -\u003e PU [a] b2 -\u003e PU [a] (b1, b2)",
          "source": "src/Data-XML-Pickle.html#xpPair",
          "type": "function"
        },
        "index": {
          "description": "xp2Tuple compat",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpPair",
          "normalized": "PU[a]b-\u003ePU[a]b-\u003ePU[a](b,b)",
          "package": "xml-picklers",
          "partial": "Pair",
          "signature": "PU[a]b-\u003ePU[a]b-\u003ePU[a](b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "xpPartial",
          "package": "xml-picklers",
          "signature": "(a -\u003e Either Text b) -\u003e (b -\u003e a) -\u003e PU a b",
          "source": "src/Data-XML-Pickle.html#xpPartial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpPartial",
          "normalized": "(a-\u003eEither Text b)-\u003e(b-\u003ea)-\u003ePU a b",
          "package": "xml-picklers",
          "partial": "Partial",
          "signature": "(a-\u003eEither Text b)-\u003e(b-\u003ea)-\u003ePU a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpPartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen unpickling, don't consume the matched element(s), noop when pickling\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpPeek",
          "package": "xml-picklers",
          "signature": "PU t a -\u003e PU t a",
          "source": "src/Data-XML-Pickle.html#xpPeek",
          "type": "function"
        },
        "index": {
          "description": "When unpickling don consume the matched element noop when pickling",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpPeek",
          "normalized": "PU a b-\u003ePU a b",
          "package": "xml-picklers",
          "partial": "Peek",
          "signature": "PU t a-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpPeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert text to/from any type that implements \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n Fails on unpickle if \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpPrim",
          "package": "xml-picklers",
          "signature": "PU Text a",
          "source": "src/Data-XML-Pickle.html#xpPrim",
          "type": "function"
        },
        "index": {
          "description": "Convert text to from any type that implements Read and Show Fails on unpickle if read fails",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpPrim",
          "package": "xml-picklers",
          "partial": "Prim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a pickler on Lists to a pickler on single elements.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.\u003c/em\u003e Will error when the given pickler doesn't produce exactly one element\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpRoot",
          "package": "xml-picklers",
          "signature": "PU [a] b -\u003e PU a b",
          "source": "src/Data-XML-Pickle.html#xpRoot",
          "type": "function"
        },
        "index": {
          "description": "Transforms pickler on Lists to pickler on single elements N.B Will error when the given pickler doesn produce exactly one element",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpRoot",
          "normalized": "PU[a]b-\u003ePU a b",
          "package": "xml-picklers",
          "partial": "Root",
          "signature": "PU[a]b-\u003ePU a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen unpickling, sucessively applies pickler to single elements until it\n doesn't return anything; returns all matched elements.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpSeqWhile",
          "package": "xml-picklers",
          "signature": "PU [a] b -\u003e PU [a] [b]",
          "source": "src/Data-XML-Pickle.html#xpSeqWhile",
          "type": "function"
        },
        "index": {
          "description": "When unpickling sucessively applies pickler to single elements until it doesn return anything returns all matched elements",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpSeqWhile",
          "normalized": "PU[a]b-\u003ePU[a][b]",
          "package": "xml-picklers",
          "partial": "Seq While",
          "signature": "PU[a]b-\u003ePU[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpSeqWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.XML.Pickle",
          "name": "xpSnd",
          "package": "xml-picklers",
          "signature": "PU t (a, b) -\u003e PU t b",
          "source": "src/Data-XML-Pickle.html#xpSnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpSnd",
          "normalized": "PU a(b,c)-\u003ePU a c",
          "package": "xml-picklers",
          "partial": "Snd",
          "signature": "PU t(a,b)-\u003ePU t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpSnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert text to/from String\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpString",
          "package": "xml-picklers",
          "signature": "PU Text String",
          "source": "src/Data-XML-Pickle.html#xpString",
          "type": "function"
        },
        "index": {
          "description": "Convert text to from String",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpString",
          "package": "xml-picklers",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor unpickling, apply the given pickler to a subset of the elements\n determined by a given predicate\n\u003c/p\u003e\u003cp\u003ePickles like \u003ccode\u003e\u003ca\u003expAll\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpSubsetAll",
          "package": "xml-picklers",
          "signature": "(a -\u003e Bool)-\u003e PU [a] b-\u003e PU [a] [b]",
          "type": "function"
        },
        "index": {
          "description": "For unpickling apply the given pickler to subset of the elements determined by given predicate Pickles like xpAll",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpSubsetAll",
          "normalized": "(a-\u003eBool)-\u003ePU[a]b-\u003ePU[a][b]",
          "package": "xml-picklers",
          "partial": "Subset All",
          "signature": "(a-\u003eBool)-\u003ePU[a]b-\u003ePU[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpSubsetAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003expText0\u003c/a\u003e\u003c/code\u003e, but fails on non-empty input.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpText",
          "package": "xml-picklers",
          "signature": "PU Text Text",
          "source": "src/Data-XML-Pickle.html#xpText",
          "type": "function"
        },
        "index": {
          "description": "Like xpText0 but fails on non-empty input",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpText",
          "package": "xml-picklers",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003especialised version of \u003ccode\u003e\u003ca\u003expId\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpText0",
          "package": "xml-picklers",
          "signature": "PU Text Text",
          "source": "src/Data-XML-Pickle.html#xpText0",
          "type": "function"
        },
        "index": {
          "description": "specialised version of xpId compat",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpText0",
          "package": "xml-picklers",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpText0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo output when pickling, always generates an error with the specified message on unpickling.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpThrow",
          "package": "xml-picklers",
          "signature": "String-\u003e PU m a",
          "type": "function"
        },
        "index": {
          "description": "No output when pickling always generates an error with the specified message on unpickling",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpThrow",
          "normalized": "String-\u003ePU a b",
          "package": "xml-picklers",
          "partial": "Throw",
          "signature": "String-\u003ePU m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpThrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003expHead\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpTree",
          "package": "xml-picklers",
          "signature": "PU [a] a",
          "source": "src/Data-XML-Pickle.html#xpTree",
          "type": "function"
        },
        "index": {
          "description": "xpHead compat",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpTree",
          "normalized": "PU[a]a",
          "package": "xml-picklers",
          "partial": "Tree",
          "signature": "PU[a]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003expId\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpTrees",
          "package": "xml-picklers",
          "signature": "PU a a",
          "source": "src/Data-XML-Pickle.html#xpTrees",
          "type": "function"
        },
        "index": {
          "description": "xpId compat",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpTrees",
          "package": "xml-picklers",
          "partial": "Trees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003exp3Tuple\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpTriple",
          "package": "xml-picklers",
          "signature": "PU [a] a1 -\u003e PU [a] a2 -\u003e PU [a] a3 -\u003e PU [a] (a1, a2, a3)",
          "source": "src/Data-XML-Pickle.html#xpTriple",
          "type": "function"
        },
        "index": {
          "description": "xp3Tuple compat",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpTriple",
          "normalized": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a)",
          "package": "xml-picklers",
          "partial": "Triple",
          "signature": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePickler that during pickling always uses the first pickler, and during\n unpickling tries the first, and on failure then tries the second.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpTryCatch",
          "package": "xml-picklers",
          "signature": "PU t a -\u003e PU t a -\u003e PU t a",
          "source": "src/Data-XML-Pickle.html#xpTryCatch",
          "type": "function"
        },
        "index": {
          "description": "Pickler that during pickling always uses the first pickler and during unpickling tries the first and on failure then tries the second",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpTryCatch",
          "normalized": "PU a b-\u003ePU a b-\u003ePU a b",
          "package": "xml-picklers",
          "partial": "Try Catch",
          "signature": "PU t a-\u003ePU t a-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpTryCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoesn't create or consume anything, always succeeds\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpUnit",
          "package": "xml-picklers",
          "signature": "PU [a] ()",
          "source": "src/Data-XML-Pickle.html#xpUnit",
          "type": "function"
        },
        "index": {
          "description": "Doesn create or consume anything always succeeds",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpUnit",
          "normalized": "PU[a]()",
          "package": "xml-picklers",
          "partial": "Unit",
          "signature": "PU[a]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlift a pickler on Nodes to a Pickler on Elements. Nodes generated during\n pickling that are not Elements will be silently discarded\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpUnliftElems",
          "package": "xml-picklers",
          "signature": "PU [Node] a -\u003e PU [Element] a",
          "source": "src/Data-XML-Pickle.html#xpUnliftElems",
          "type": "function"
        },
        "index": {
          "description": "Unlift pickler on Nodes to Pickler on Elements Nodes generated during pickling that are not Elements will be silently discarded",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpUnliftElems",
          "normalized": "PU[Node]a-\u003ePU[Element]a",
          "package": "xml-picklers",
          "partial": "Unlift Elems",
          "signature": "PU[Node]a-\u003ePU[Element]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpUnliftElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to use a pickler. Return a default value when the pickler doesn't\n return anything (Doesn't touch on UnpickleError)\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003expDefault\u003c/a\u003e\u003c/code\u003e, the default value \u003cem\u003eis\u003c/em\u003e encoded in the XML document.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpWithDefault",
          "package": "xml-picklers",
          "signature": "a -\u003e PU t a -\u003e PU t a",
          "source": "src/Data-XML-Pickle.html#xpWithDefault",
          "type": "function"
        },
        "index": {
          "description": "Attempt to use pickler Return default value when the pickler doesn return anything Doesn touch on UnpickleError Unlike xpDefault the default value is encoded in the XML document",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpWithDefault",
          "normalized": "a-\u003ePU b a-\u003ePU b a",
          "package": "xml-picklers",
          "partial": "With Default",
          "signature": "a-\u003ePU t a-\u003ePU t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a bijection before pickling / after unpickling\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpWrap",
          "package": "xml-picklers",
          "signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e PU t a -\u003e PU t b",
          "source": "src/Data-XML-Pickle.html#xpWrap",
          "type": "function"
        },
        "index": {
          "description": "Apply bijection before pickling after unpickling",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpWrap",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ePU c a-\u003ePU c b",
          "package": "xml-picklers",
          "partial": "Wrap",
          "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ePU t a-\u003ePU t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike xpWrap, except it strips Right (and treats Left as a failure) during unpickling.\n xpWrapEither :: (a -\u003e Either String b, b -\u003e a) -\u003e PU t a -\u003e PU t b\n\u003c/p\u003e\u003cp\u003enot to be confuesd with \u003ccode\u003e\u003ca\u003expEither\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpWrapEither",
          "package": "xml-picklers",
          "signature": "(a -\u003e Either e b) -\u003e (b -\u003e a) -\u003e PU t a -\u003e PU t b",
          "source": "src/Data-XML-Pickle.html#xpWrapEither",
          "type": "function"
        },
        "index": {
          "description": "Like xpWrap except it strips Right and treats Left as failure during unpickling xpWrapEither Either String PU PU not to be confuesd with xpEither",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpWrapEither",
          "normalized": "(a-\u003eEither b c)-\u003e(c-\u003ea)-\u003ePU d a-\u003ePU d c",
          "package": "xml-picklers",
          "partial": "Wrap Either",
          "signature": "(a-\u003eEither e b)-\u003e(b-\u003ea)-\u003ePU t a-\u003ePU t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpWrapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike xpWrap, but strips Just (and treats Nothing as a failure) during unpickling.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpWrapMaybe",
          "package": "xml-picklers",
          "signature": "(a -\u003e Maybe b) -\u003e (b -\u003e a) -\u003e PU t a -\u003e PU t b",
          "source": "src/Data-XML-Pickle.html#xpWrapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Like xpWrap but strips Just and treats Nothing as failure during unpickling",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpWrapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003ea)-\u003ePU c a-\u003ePU c b",
          "package": "xml-picklers",
          "partial": "Wrap Maybe",
          "signature": "(a-\u003eMaybe b)-\u003e(b-\u003ea)-\u003ePU t a-\u003ePU t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpWrapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike xpWrap, but strips Just (and treats Nothing as a failure) during unpickling,\n with specified error message for Nothing value.\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpWrapMaybe_",
          "package": "xml-picklers",
          "signature": "String -\u003e (a -\u003e Maybe b) -\u003e (b -\u003e a) -\u003e PU t a -\u003e PU t b",
          "source": "src/Data-XML-Pickle.html#xpWrapMaybe_",
          "type": "function"
        },
        "index": {
          "description": "Like xpWrap but strips Just and treats Nothing as failure during unpickling with specified error message for Nothing value",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpWrapMaybe_",
          "normalized": "String-\u003e(a-\u003eMaybe b)-\u003e(b-\u003ea)-\u003ePU c a-\u003ePU c b",
          "package": "xml-picklers",
          "partial": "Wrap Maybe",
          "signature": "String-\u003e(a-\u003eMaybe b)-\u003e(b-\u003ea)-\u003ePU t a-\u003ePU t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpWrapMaybe_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe zero pickler\n\u003c/p\u003e\u003cp\u003eEncodes nothing, always fails during unpickling. (Same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003expThrow\u003c/a\u003e\u003c/code\u003e \"got xpZero\"\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.XML.Pickle",
          "name": "xpZero",
          "package": "xml-picklers",
          "signature": "PU [t] a",
          "source": "src/Data-XML-Pickle.html#xpZero",
          "type": "function"
        },
        "index": {
          "description": "The zero pickler Encodes nothing always fails during unpickling Same as xpThrow got xpZero",
          "hierarchy": "Data XML Pickle",
          "module": "Data.XML.Pickle",
          "name": "xpZero",
          "normalized": "PU[a]b",
          "package": "xml-picklers",
          "partial": "Zero",
          "signature": "PU[t]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpZero"
      }
    }
  ]
]