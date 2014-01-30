[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides XML picklers that plug into the xml tree of the\n \u003cem\u003exml-types\u003c/em\u003e package.\n This module was \"inspired\" by hexpat-pickle.\n\u003c/p\u003e\u003cp\u003eThe API differences between \u003cem\u003ehexpat-pickle\u003c/em\u003e and this module include:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When unpickling, picklers will \u003cem\u003econsume\u003c/em\u003e matching elmements so that they will be ignored by sucessive picklers.\n  To circumvent this behaviour, use \u003ccode\u003e\u003ccode\u003e\u003ca\u003expPeek\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e wrappers like \u003ccode\u003e\u003ca\u003expWrap\u003c/a\u003e\u003c/code\u003e are uncurried\n\u003c/li\u003e\u003cli\u003e There are no lazy unpicklers\n\u003c/li\u003e\u003cli\u003e Most unpicklers will produce an error when their child unpicklers fail to consume all elements.\n Use \u003ccode\u003e\u003ca\u003expClean\u003c/a\u003e\u003c/code\u003e to discard those elements\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe data type \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e t a\u003c/code\u003e represents both a pickler (converting Haskell data\n to XML) and an unpickler (XML to Haskell data), so your code only needs to be\n written once for both serialization and deserialization.  The \u003ccode\u003e\u003ca\u003ePU\u003c/a\u003e\u003c/code\u003e primitives, such\n as \u003ccode\u003e\u003ca\u003expElem\u003c/a\u003e\u003c/code\u003e for XML elements, may be composed into complex arrangements using\n \u003ccode\u003e\u003ca\u003expPair\u003c/a\u003e\u003c/code\u003e and other combinators.\n\u003c/p\u003e\u003cp\u003eMost picklers will try to find the \u003cem\u003efirst match\u003c/em\u003e rather than failing when\n the first element doesn't match. This is why the target type often ist\n a list. To prevent this behaviour and commit the pickler to the first\n element available, use \u003ccode\u003e\u003ca\u003expIsolate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe top level of the document does not follow this rule, because it is a single\n node type.  \u003ccode\u003e\u003ca\u003expRoot\u003c/a\u003e\u003c/code\u003e is needed to adapt this to type [\u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e] for your\n pickler to use.  You would typically define a pickler for a whole document with\n \u003ccode\u003e\u003ca\u003expElem\u003c/a\u003e\u003c/code\u003e, then pickle it to a single \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ccode\u003e\u003ca\u003epickleTree\u003c/a\u003e\u003c/code\u003e (xpRoot myDocPickler) value\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNB\u003c/em\u003e: Unresolved entities are considered an error and will trigger an exception\n\u003c/p\u003e\u003cp\u003eWhen unpickling, the folowing invariant regarding the list of remaining elements should be observed:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The returned list should be a subset of or the initial list itself, that is, no elements should be added\n or changed\n\u003c/li\u003e\u003cli\u003e The relative order of elements should be preserved\n\u003c/li\u003e\u003cli\u003e Elements may, however, be removed from anywhere in the list\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHere is a simple example to get you started:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import Data.Text\n import Data.XML.Types\n import Data.XML.Pickle\n\n -- Person name, age and description\n data Person = Person Text Int Text\n\n xpPerson :: PU [Node] Person\n xpPerson =\n     -- How to wrap and unwrap a Person\n     xpWrap (\\((name, age), descr) -\u003e Person name age descr)\n            (\\(Person name age descr) -\u003e ((name, age), descr)) $\n     xpElem \"person\"\n         (xpPair\n             (xpAttr \"name\" xpId)\n             (xpAttr \"age\" xpPrim))\n         (xpContent xpId)\n\n people = [\n     Person \"Dave\" 27 \"A fat thin man with long short hair\",\n     Person \"Jane\" 21 \"Lives in a white house with green windows\"]\n\n main = do\n     print $ pickle (xpRoot $ xpElemNodes \"people\" $ xpAll xpPerson) people\n\u003c/pre\u003e\u003cp\u003eProgram output would be an xml-value equivalent to:\n\u003c/p\u003e\u003cpre\u003e \u003cpeople\u003e\u003cperson name=\"Dave\" age=\"27\"\u003eA fat thin man with long short hair\u003c/person\u003e\n \u003cperson name=\"Jane\" age=\"21\"\u003eLives in a white house with green windows\u003c/person\u003e\u003c/people\u003e\n\u003c/pre\u003e\u003cp\u003eFunctions marked with \u003cem\u003ecompat\u003c/em\u003e are included for compatibility with hexpat-pickle\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "module",
        "fct-source": "src/Data-XML-Pickle.html",
        "fct-type": "module",
        "title": "Pickle"
      },
      "index": {
        "description": "This module provides XML picklers that plug into the xml tree of the xml-types package This module was inspired by hexpat-pickle The API differences between hexpat-pickle and this module include When unpickling picklers will consume matching elmements so that they will be ignored by sucessive picklers To circumvent this behaviour use xpPeek wrappers like xpWrap are uncurried There are no lazy unpicklers Most unpicklers will produce an error when their child unpicklers fail to consume all elements Use xpClean to discard those elements The data type PU represents both pickler converting Haskell data to XML and an unpickler XML to Haskell data so your code only needs to be written once for both serialization and deserialization The PU primitives such as xpElem for XML elements may be composed into complex arrangements using xpPair and other combinators Most picklers will try to find the first match rather than failing when the first element doesn match This is why the target type often ist list To prevent this behaviour and commit the pickler to the first element available use xpIsolate The top level of the document does not follow this rule because it is single node type xpRoot is needed to adapt this to type Node for your pickler to use You would typically define pickler for whole document with xpElem then pickle it to single Node with pickleTree xpRoot myDocPickler value NB Unresolved entities are considered an error and will trigger an exception When unpickling the folowing invariant regarding the list of remaining elements should be observed The returned list should be subset of or the initial list itself that is no elements should be added or changed The relative order of elements should be preserved Elements may however be removed from anywhere in the list Here is simple example to get you started LANGUAGE OverloadedStrings import Data.Text import Data.XML.Types import Data.XML.Pickle Person name age and description data Person Person Text Int Text xpPerson PU Node Person xpPerson How to wrap and unwrap Person xpWrap name age descr Person name age descr Person name age descr name age descr xpElem person xpPair xpAttr name xpId xpAttr age xpPrim xpContent xpId people Person Dave fat thin man with long short hair Person Jane Lives in white house with green windows main do print pickle xpRoot xpElemNodes people xpAll xpPerson people Program output would be an xml-value equivalent to people person name Dave age fat thin man with long short hair person person name Jane age Lives in white house with green windows person people Functions marked with compat are included for compatibility with hexpat-pickle",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "Pickle",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Pickle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#t:Attribute",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "type",
        "fct-source": "src/Data-XML-Pickle.html#Attribute",
        "fct-type": "type",
        "title": "Attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "Attribute",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#t:PU",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Pickle-Basic.html#PU",
        "fct-type": "data",
        "title": "PU"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "PU",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "PU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#t:UnpickleError",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Pickle-Basic.html#UnpickleError",
        "fct-type": "data",
        "title": "UnpickleError"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "UnpickleError",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Unpickle Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#t:UnpickleResult",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Pickle-Basic.html#UnpickleResult",
        "fct-type": "data",
        "title": "UnpickleResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "UnpickleResult",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Unpickle Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#t:UnresolvedEntityException",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "data",
        "fct-source": "src/Data-XML-Pickle-Basic.html#UnresolvedEntityException",
        "fct-type": "data",
        "title": "UnresolvedEntityException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "UnresolvedEntityException",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Unresolved Entity Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:-60--35--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003exp2Tuple\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] b1 -\u003e PU [a] b2 -\u003e PU [a] (b1, b2)",
        "fct-source": "src/Data-XML-Pickle.html#%3C%23%3E",
        "fct-type": "function",
        "title": "(\u003c#\u003e)"
      },
      "index": {
        "description": "xp2Tuple",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "(\u003c#\u003e) \u003c#\u003e",
        "normalized": "PU[a]b-\u003ePU[a]b-\u003ePU[a](b,b)",
        "package": "xml-picklers",
        "partial": "",
        "signature": "PU[a]b-\u003ePU[a]b-\u003ePU[a](b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:-60--43--43--62-",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "(Text, Text) -\u003e UnpickleError -\u003e UnpickleError",
        "fct-source": "src/Data-XML-Pickle-Basic.html#%3C%2B%2B%3E",
        "fct-type": "function",
        "title": "(\u003c++\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "(\u003c++\u003e) \u003c++\u003e",
        "normalized": "(Text,Text)-\u003eUnpickleError-\u003eUnpickleError",
        "package": "xml-picklers",
        "partial": "",
        "signature": "(Text,Text)-\u003eUnpickleError-\u003eUnpickleError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:-60--63--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a back trace level to the error report\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "(Text, Text) -\u003e PU t a -\u003e PU t a",
        "fct-source": "src/Data-XML-Pickle-Basic.html#%3C%3F%2B%3E",
        "fct-type": "function",
        "title": "(\u003c?+\u003e)"
      },
      "index": {
        "description": "Add back trace level to the error report",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "(\u003c?+\u003e) \u003c?+\u003e",
        "normalized": "(Text,Text)-\u003ePU a b-\u003ePU a b",
        "package": "xml-picklers",
        "partial": "",
        "signature": "(Text,Text)-\u003ePU t a-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:-60--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eOverride the last backtrace level in the error report\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "(Text, Text) -\u003e PU t a -\u003e PU t a",
        "fct-source": "src/Data-XML-Pickle-Basic.html#%3C%3F%3E",
        "fct-type": "function",
        "title": "(\u003c?\u003e)"
      },
      "index": {
        "description": "Override the last backtrace level in the error report",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "(\u003c?\u003e) \u003c?\u003e",
        "normalized": "(Text,Text)-\u003ePU a b-\u003ePU a b",
        "package": "xml-picklers",
        "partial": "",
        "signature": "(Text,Text)-\u003ePU t a-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:-60--63--63--62-",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Text -\u003e PU t a -\u003e PU t a",
        "fct-source": "src/Data-XML-Pickle-Basic.html#%3C%3F%3F%3E",
        "fct-type": "function",
        "title": "(\u003c??\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "(\u003c??\u003e) \u003c??\u003e",
        "normalized": "Text-\u003ePU a b-\u003ePU a b",
        "package": "xml-picklers",
        "partial": "",
        "signature": "Text-\u003ePU t a-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:ErrorMessage",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "ErrorMessage Text",
        "fct-source": "src/Data-XML-Pickle-Basic.html#UnpickleError",
        "fct-type": "function",
        "title": "ErrorMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "ErrorMessage",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Error Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:NoResult",
      "description": {
        "fct-descr": "\u003cp\u003eNot found, description of element\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "NoResult Text",
        "fct-source": "src/Data-XML-Pickle-Basic.html#UnpickleResult",
        "fct-type": "function",
        "title": "NoResult"
      },
      "index": {
        "description": "Not found description of element",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "NoResult",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "No Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:PU",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU",
        "fct-source": "src/Data-XML-Pickle-Basic.html#PU",
        "fct-type": "function",
        "title": "PU"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "PU",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "PU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:Result",
      "description": {
        "fct-descr": "\u003cp\u003eResult and remainder. The\n remainder is wrapped in Maybe to\n avoid a Monoid constraint on t.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eInvariant\u003c/em\u003e: When t is a\n Monoid, the empty remainder should\n always be \u003ccode\u003eNothing\u003c/code\u003e instead of\n \u003ccode\u003eJust mempty\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Result a (Maybe t)",
        "fct-source": "src/Data-XML-Pickle-Basic.html#UnpickleResult",
        "fct-type": "function",
        "title": "Result"
      },
      "index": {
        "description": "Result and remainder The remainder is wrapped in Maybe to avoid Monoid constraint on Invariant When is Monoid the empty remainder should always be Nothing instead of Just mempty",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "Result",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:TraceStep",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "TraceStep (Text, Text) UnpickleError",
        "fct-source": "src/Data-XML-Pickle-Basic.html#UnpickleError",
        "fct-type": "function",
        "title": "TraceStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "TraceStep",
        "normalized": "TraceStep(Text,Text)UnpickleError",
        "package": "xml-picklers",
        "partial": "Trace Step",
        "signature": "TraceStep(Text,Text)UnpickleError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:UnpickleError",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "UnpickleError UnpickleError",
        "fct-source": "src/Data-XML-Pickle-Basic.html#UnpickleResult",
        "fct-type": "function",
        "title": "UnpickleError"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "UnpickleError",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Unpickle Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:UnresolvedEntityException",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "UnresolvedEntityException",
        "fct-source": "src/Data-XML-Pickle-Basic.html#UnresolvedEntityException",
        "fct-type": "function",
        "title": "UnresolvedEntityException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "UnresolvedEntityException",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Unresolved Entity Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:Variants",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Variants [UnpickleError]",
        "fct-source": "src/Data-XML-Pickle-Basic.html#UnpickleError",
        "fct-type": "function",
        "title": "Variants"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "Variants",
        "normalized": "Variants[UnpickleError]",
        "package": "xml-picklers",
        "partial": "Variants",
        "signature": "Variants[UnpickleError]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:flattenContent",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "[Node] -\u003e [Node]",
        "fct-source": "src/Data-XML-Pickle.html#flattenContent",
        "fct-type": "function",
        "title": "flattenContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "flattenContent",
        "normalized": "[Node]-\u003e[Node]",
        "package": "xml-picklers",
        "partial": "Content",
        "signature": "[Node]-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:getRest",
      "description": {
        "fct-descr": "\u003cp\u003eTry to extract the remainig elements, fail if there are none\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "UnpickleResult [a] b -\u003e UnpickleResult [a] (b, [a])",
        "fct-source": "src/Data-XML-Pickle-Tuples.html#getRest",
        "fct-type": "function",
        "title": "getRest"
      },
      "index": {
        "description": "Try to extract the remainig elements fail if there are none",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "getRest",
        "normalized": "UnpickleResult[a]b-\u003eUnpickleResult[a](b,[a])",
        "package": "xml-picklers",
        "partial": "Rest",
        "signature": "UnpickleResult[a]b-\u003eUnpickleResult[a](b,[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:pickle",
      "description": {
        "fct-descr": "\u003cp\u003epickle a Tree\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU t a -\u003e a -\u003e t",
        "fct-source": "src/Data-XML-Pickle.html#pickle",
        "fct-type": "function",
        "title": "pickle"
      },
      "index": {
        "description": "pickle Tree",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "pickle",
        "normalized": "PU a b-\u003eb-\u003ea",
        "package": "xml-picklers",
        "partial": "",
        "signature": "PU t a-\u003ea-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:pickleTree",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "a -\u003e t",
        "fct-source": "src/Data-XML-Pickle-Basic.html#PU",
        "fct-type": "function",
        "title": "pickleTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "pickleTree",
        "normalized": "a-\u003eb",
        "package": "xml-picklers",
        "partial": "Tree",
        "signature": "a-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:ppUnpickleError",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "UnpickleError -\u003e String",
        "fct-source": "src/Data-XML-Pickle-Basic.html#ppUnpickleError",
        "fct-type": "function",
        "title": "ppUnpickleError"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "ppUnpickleError",
        "normalized": "UnpickleError-\u003eString",
        "package": "xml-picklers",
        "partial": "Unpickle Error",
        "signature": "UnpickleError-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:tErr",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Text -\u003e UnpickleResult t a -\u003e UnpickleResult t a",
        "fct-source": "src/Data-XML-Pickle-Tuples.html#tErr",
        "fct-type": "function",
        "title": "tErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "tErr",
        "normalized": "Text-\u003eUnpickleResult a b-\u003eUnpickleResult a b",
        "package": "xml-picklers",
        "partial": "Err",
        "signature": "Text-\u003eUnpickleResult t a-\u003eUnpickleResult t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:unpickle",
      "description": {
        "fct-descr": "\u003cp\u003eunpickle a tree\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU t a -\u003e t -\u003e Either UnpickleError a",
        "fct-source": "src/Data-XML-Pickle.html#unpickle",
        "fct-type": "function",
        "title": "unpickle"
      },
      "index": {
        "description": "unpickle tree",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "unpickle",
        "normalized": "PU a b-\u003ea-\u003eEither UnpickleError b",
        "package": "xml-picklers",
        "partial": "",
        "signature": "PU t a-\u003et-\u003eEither UnpickleError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:unpickleTree",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "t -\u003e UnpickleResult t a",
        "fct-source": "src/Data-XML-Pickle-Basic.html#PU",
        "fct-type": "function",
        "title": "unpickleTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "unpickleTree",
        "normalized": "a-\u003eUnpickleResult a b",
        "package": "xml-picklers",
        "partial": "Tree",
        "signature": "t-\u003eUnpickleResult t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xp2Tuple",
      "description": {
        "fct-descr": "\u003cp\u003eCombines 2 picklers\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] b1 -\u003e PU [a] b2 -\u003e PU [a] (b1, b2)",
        "fct-source": "src/Data-XML-Pickle-Tuples.html#xp2Tuple",
        "fct-type": "function",
        "title": "xp2Tuple"
      },
      "index": {
        "description": "Combines picklers",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xp2Tuple",
        "normalized": "PU[a]b-\u003ePU[a]b-\u003ePU[a](b,b)",
        "package": "xml-picklers",
        "partial": "Tuple",
        "signature": "PU[a]b-\u003ePU[a]b-\u003ePU[a](b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xp3Tuple",
      "description": {
        "fct-descr": "\u003cp\u003eCombines 3 picklers\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] a1 -\u003e PU [a] a2 -\u003e PU [a] a3 -\u003e PU [a] (a1, a2, a3)",
        "fct-source": "src/Data-XML-Pickle-Tuples.html#xp3Tuple",
        "fct-type": "function",
        "title": "xp3Tuple"
      },
      "index": {
        "description": "Combines picklers",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xp3Tuple",
        "normalized": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a)",
        "package": "xml-picklers",
        "partial": "Tuple",
        "signature": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xp4Tuple",
      "description": {
        "fct-descr": "\u003cp\u003eCombines 4 picklers\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] a1 -\u003e PU [a] a2 -\u003e PU [a] a3 -\u003e PU [a] a4 -\u003e PU [a] (a1, a2, a3, a4)",
        "fct-source": "src/Data-XML-Pickle-Tuples.html#xp4Tuple",
        "fct-type": "function",
        "title": "xp4Tuple"
      },
      "index": {
        "description": "Combines picklers",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xp4Tuple",
        "normalized": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a,a)",
        "package": "xml-picklers",
        "partial": "Tuple",
        "signature": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xp5Tuple",
      "description": {
        "fct-descr": "\u003cp\u003eCombines 5 picklers\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] a1 -\u003e PU [a] a2 -\u003e PU [a] a3 -\u003e PU [a] a4 -\u003e PU [a] a5 -\u003e PU [a] (a1, a2, a3, a4, a5)",
        "fct-source": "src/Data-XML-Pickle-Tuples.html#xp5Tuple",
        "fct-type": "function",
        "title": "xp5Tuple"
      },
      "index": {
        "description": "Combines picklers",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xp5Tuple",
        "normalized": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a,a,a)",
        "package": "xml-picklers",
        "partial": "Tuple",
        "signature": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xp6Tuple",
      "description": {
        "fct-descr": "\u003cp\u003eYou guessed it ... Combines 6 picklers\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] a1 -\u003e PU [a] a2 -\u003e PU [a] a3 -\u003e PU [a] a4 -\u003e PU [a] a5 -\u003e PU [a] a6 -\u003e PU [a] (a1, a2, a3, a4, a5, a6)",
        "fct-source": "src/Data-XML-Pickle-Tuples.html#xp6Tuple",
        "fct-type": "function",
        "title": "xp6Tuple"
      },
      "index": {
        "description": "You guessed it Combines picklers",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xp6Tuple",
        "normalized": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a,a,a,a)",
        "package": "xml-picklers",
        "partial": "Tuple",
        "signature": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAddFixedAttr",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an attribute with a fixed value.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name -\u003e Text -\u003e PU [Attribute] b -\u003e PU [Attribute] b",
        "fct-source": "src/Data-XML-Pickle.html#xpAddFixedAttr",
        "fct-type": "function",
        "title": "xpAddFixedAttr"
      },
      "index": {
        "description": "Add an attribute with fixed value",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpAddFixedAttr",
        "normalized": "Name-\u003eText-\u003ePU[Attribute]a-\u003ePU[Attribute]a",
        "package": "xml-picklers",
        "partial": "Add Fixed Attr",
        "signature": "Name-\u003eText-\u003ePU[Attribute]b-\u003ePU[Attribute]b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAll",
      "description": {
        "fct-descr": "\u003cp\u003eTries to apply the pickler to all the remaining elements;\n fails if any of them don't match\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] b -\u003e PU [a] [b]",
        "fct-source": "src/Data-XML-Pickle.html#xpAll",
        "fct-type": "function",
        "title": "xpAll"
      },
      "index": {
        "description": "Tries to apply the pickler to all the remaining elements fails if any of them don match",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpAll",
        "normalized": "PU[a]b-\u003ePU[a][b]",
        "package": "xml-picklers",
        "partial": "All",
        "signature": "PU[a]b-\u003ePU[a][b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAllByNamespace",
      "description": {
        "fct-descr": "\u003cp\u003eApply unpickler to all elements with the given namespace.\n\u003c/p\u003e\u003cp\u003ePickles like \u003ccode\u003e\u003ca\u003expAll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Text -\u003e PU [Node] b -\u003e PU [Node] [b]",
        "fct-source": "src/Data-XML-Pickle.html#xpAllByNamespace",
        "fct-type": "function",
        "title": "xpAllByNamespace"
      },
      "index": {
        "description": "Apply unpickler to all elements with the given namespace Pickles like xpAll",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpAllByNamespace",
        "normalized": "Text-\u003ePU[Node]a-\u003ePU[Node][a]",
        "package": "xml-picklers",
        "partial": "All By Namespace",
        "signature": "Text-\u003ePU[Node]b-\u003ePU[Node][b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAlt",
      "description": {
        "fct-descr": "\u003cp\u003eExecute one of a list of picklers. The \u003cem\u003eselector function\u003c/em\u003e is used during\n pickling, and the integer returned is taken as a 0-based index to select a\n pickler from \u003cem\u003epickler options\u003c/em\u003e.  Unpickling is done by trying each list\n element in order until one returns a Result.  (the \u003cem\u003eselector\u003c/em\u003e is not used).\n\u003c/p\u003e\u003cp\u003eThis is typically used to handle each constructor of a data type. However, it\n can be used wherever multiple serialization strategies apply to a single type.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNB\u003c/em\u003e This function will ignore all errors as long as one of the branches\n returns a result. Also, it will produce an error when all branches return\n NoResult.  Use \u003ccode\u003e\u003ca\u003expChoice\u003c/a\u003e\u003c/code\u003e for a saner version of this function.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "(a -\u003e Int)-\u003e [PU t a]-\u003e PU t a",
        "fct-type": "function",
        "title": "xpAlt"
      },
      "index": {
        "description": "Execute one of list of picklers The selector function is used during pickling and the integer returned is taken as based index to select pickler from pickler options Unpickling is done by trying each list element in order until one returns Result the selector is not used This is typically used to handle each constructor of data type However it can be used wherever multiple serialization strategies apply to single type NB This function will ignore all errors as long as one of the branches returns result Also it will produce an error when all branches return NoResult Use xpChoice for saner version of this function",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpAlt",
        "normalized": "(a-\u003eInt)-\u003e[PU b a]-\u003ePU b a",
        "package": "xml-picklers",
        "partial": "Alt",
        "signature": "(a-\u003eInt)-\u003e[PU t a]-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAssert",
      "description": {
        "fct-descr": "\u003cp\u003eTest predicate when unpickling. Fails with given error message when the\n predicate return false.\n\u003c/p\u003e\u003cp\u003eN.B.: The predicate will only be tested while \u003cem\u003eunpickling\u003c/em\u003e. When pickling,\n this is a noop.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Text -\u003e (a -\u003e Bool) -\u003e PU t a -\u003e PU t a",
        "fct-source": "src/Data-XML-Pickle.html#xpAssert",
        "fct-type": "function",
        "title": "xpAssert"
      },
      "index": {
        "description": "Test predicate when unpickling Fails with given error message when the predicate return false N.B The predicate will only be tested while unpickling When pickling this is noop",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpAssert",
        "normalized": "Text-\u003e(a-\u003eBool)-\u003ePU b a-\u003ePU b a",
        "package": "xml-picklers",
        "partial": "Assert",
        "signature": "Text-\u003e(a-\u003eBool)-\u003ePU t a-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAttr",
      "description": {
        "fct-descr": "\u003cp\u003e(\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name -\u003e PU Text a -\u003e PU [Attribute] a",
        "fct-source": "src/Data-XML-Pickle.html#xpAttr",
        "fct-type": "function",
        "title": "xpAttr"
      },
      "index": {
        "description": "compat",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpAttr",
        "normalized": "Name-\u003ePU Text a-\u003ePU[Attribute]a",
        "package": "xml-picklers",
        "partial": "Attr",
        "signature": "Name-\u003ePU Text a-\u003ePU[Attribute]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAttrFixed",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name -\u003e Text -\u003e PU [Attribute] ()",
        "fct-source": "src/Data-XML-Pickle.html#xpAttrFixed",
        "fct-type": "function",
        "title": "xpAttrFixed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpAttrFixed",
        "normalized": "Name-\u003eText-\u003ePU[Attribute]()",
        "package": "xml-picklers",
        "partial": "Attr Fixed",
        "signature": "Name-\u003eText-\u003ePU[Attribute]()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAttrImplied",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name -\u003e PU Text a -\u003e PU [Attribute] (Maybe a)",
        "fct-source": "src/Data-XML-Pickle.html#xpAttrImplied",
        "fct-type": "function",
        "title": "xpAttrImplied"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpAttrImplied",
        "normalized": "Name-\u003ePU Text a-\u003ePU[Attribute](Maybe a)",
        "package": "xml-picklers",
        "partial": "Attr Implied",
        "signature": "Name-\u003ePU Text a-\u003ePU[Attribute](Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAttribute",
      "description": {
        "fct-descr": "\u003cp\u003epickle to/from attribute\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name -\u003e PU Text a -\u003e PU [Attribute] a",
        "fct-source": "src/Data-XML-Pickle.html#xpAttribute",
        "fct-type": "function",
        "title": "xpAttribute"
      },
      "index": {
        "description": "pickle to from attribute",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpAttribute",
        "normalized": "Name-\u003ePU Text a-\u003ePU[Attribute]a",
        "package": "xml-picklers",
        "partial": "Attribute",
        "signature": "Name-\u003ePU Text a-\u003ePU[Attribute]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAttribute-39-",
      "description": {
        "fct-descr": "\u003cp\u003ePickle attribute if Just is given, on unpickling return Just \u003ca\u003eval\u003c/a\u003e when\n the attribute is found, Nothing otherwise\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name -\u003e PU Text a -\u003e PU [Attribute] (Maybe a)",
        "fct-source": "src/Data-XML-Pickle.html#xpAttribute%27",
        "fct-type": "function",
        "title": "xpAttribute'"
      },
      "index": {
        "description": "Pickle attribute if Just is given on unpickling return Just val when the attribute is found Nothing otherwise",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpAttribute'",
        "normalized": "Name-\u003ePU Text a-\u003ePU[Attribute](Maybe a)",
        "package": "xml-picklers",
        "partial": "Attribute'",
        "signature": "Name-\u003ePU Text a-\u003ePU[Attribute](Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpAttribute_",
      "description": {
        "fct-descr": "\u003cp\u003ePickle an attribute with the specified name and value, fail if the same attribute is\n not present on unpickle.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name -\u003e Text -\u003e PU [Attribute] ()",
        "fct-source": "src/Data-XML-Pickle.html#xpAttribute_",
        "fct-type": "function",
        "title": "xpAttribute_"
      },
      "index": {
        "description": "Pickle an attribute with the specified name and value fail if the same attribute is not present on unpickle",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpAttribute_",
        "normalized": "Name-\u003eText-\u003ePU[Attribute]()",
        "package": "xml-picklers",
        "partial": "Attribute",
        "signature": "Name-\u003eText-\u003ePU[Attribute]()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpBool",
      "description": {
        "fct-descr": "\u003cp\u003eConverts Booleans to XML boolean values\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e true and 1 are read as True\n\u003c/li\u003e\u003cli\u003e false and 0 are read as False\n\u003c/li\u003e\u003cli\u003e all other values generate an unpickle error\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWill always generate true or false (not 0 or 1) when pickling\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU Text Bool",
        "fct-source": "src/Data-XML-Pickle.html#xpBool",
        "fct-type": "function",
        "title": "xpBool"
      },
      "index": {
        "description": "Converts Booleans to XML boolean values true and are read as True false and are read as False all other values generate an unpickle error Will always generate true or false not or when pickling",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpBool",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpChoice",
      "description": {
        "fct-descr": "\u003cp\u003eExecute one of a list of picklers. The \u003cem\u003eselector function\u003c/em\u003e is used during\n pickling, and the integer returned is taken as a 0-based index to select a\n pickler from \u003cem\u003epickler options\u003c/em\u003e.  Unpickling is done by trying each list\n element in order until one returns a Result or an Error.\n\u003c/p\u003e\u003cp\u003eThis is typically used to handle each constructor of a data type. However, it\n can be used wherever multiple serialization strategies apply to a single type.\n\u003c/p\u003e\u003cp\u003eThis function is similar to \u003ccode\u003e\u003ca\u003expAlt\u003c/a\u003e\u003c/code\u003e but it will stop unpickling on the first\n error. It will return NoResult iff all of the picklers return NoResult (or\n the list of picklers is empty).\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "(a -\u003e Int)-\u003e [PU t a]-\u003e PU t a",
        "fct-type": "function",
        "title": "xpChoice"
      },
      "index": {
        "description": "Execute one of list of picklers The selector function is used during pickling and the integer returned is taken as based index to select pickler from pickler options Unpickling is done by trying each list element in order until one returns Result or an Error This is typically used to handle each constructor of data type However it can be used wherever multiple serialization strategies apply to single type This function is similar to xpAlt but it will stop unpickling on the first error It will return NoResult iff all of the picklers return NoResult or the list of picklers is empty",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpChoice",
        "normalized": "(a-\u003eInt)-\u003e[PU b a]-\u003ePU b a",
        "package": "xml-picklers",
        "partial": "Choice",
        "signature": "(a-\u003eInt)-\u003e[PU t a]-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpClean",
      "description": {
        "fct-descr": "\u003cp\u003eRun unpickler and consume and discard remaining elements\n\u003c/p\u003e\u003cp\u003eWhen pickling, this is a noop\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU t a -\u003e PU t a",
        "fct-source": "src/Data-XML-Pickle.html#xpClean",
        "fct-type": "function",
        "title": "xpClean"
      },
      "index": {
        "description": "Run unpickler and consume and discard remaining elements When pickling this is noop",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpClean",
        "normalized": "PU a b-\u003ePU a b",
        "package": "xml-picklers",
        "partial": "Clean",
        "signature": "PU t a-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpConst",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore input/output and replace with constant values\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "a -\u003e PU t () -\u003e PU t a",
        "fct-source": "src/Data-XML-Pickle.html#xpConst",
        "fct-type": "function",
        "title": "xpConst"
      },
      "index": {
        "description": "Ignore input output and replace with constant values",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpConst",
        "normalized": "a-\u003ePU b()-\u003ePU b a",
        "package": "xml-picklers",
        "partial": "Const",
        "signature": "a-\u003ePU t()-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpContent",
      "description": {
        "fct-descr": "\u003cp\u003eGet the first non-element NodeContent from a node\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU Text a -\u003e PU [Node] a",
        "fct-source": "src/Data-XML-Pickle.html#xpContent",
        "fct-type": "function",
        "title": "xpContent"
      },
      "index": {
        "description": "Get the first non-element NodeContent from node",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpContent",
        "normalized": "PU Text a-\u003ePU[Node]a",
        "package": "xml-picklers",
        "partial": "Content",
        "signature": "PU Text a-\u003ePU[Node]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpDefault",
      "description": {
        "fct-descr": "\u003cp\u003eOptional conversion with default value\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003expWithDefault\u003c/a\u003e\u003c/code\u003e the default value is not encoded in the XML document,\n during unpickling the default value is inserted if the pickler doesn't\n returna a value\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "a -\u003e PU [t] a -\u003e PU [t] a",
        "fct-source": "src/Data-XML-Pickle.html#xpDefault",
        "fct-type": "function",
        "title": "xpDefault"
      },
      "index": {
        "description": "Optional conversion with default value Unlike xpWithDefault the default value is not encoded in the XML document during unpickling the default value is inserted if the pickler doesn returna value",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpDefault",
        "normalized": "a-\u003ePU[b]a-\u003ePU[b]a",
        "package": "xml-picklers",
        "partial": "Default",
        "signature": "a-\u003ePU[t]a-\u003ePU[t]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpEither",
      "description": {
        "fct-descr": "\u003cp\u003eTry the left pickler first and if that doesn't produce anything the right\n one.  wrapping the result in Left or Right, respectively\n\u003c/p\u003e\u003cp\u003eNot to be confued with \u003ccode\u003e\u003ca\u003expWrapEither\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU n t1 -\u003e PU n t2 -\u003e PU n (Either t1 t2)",
        "fct-source": "src/Data-XML-Pickle.html#xpEither",
        "fct-type": "function",
        "title": "xpEither"
      },
      "index": {
        "description": "Try the left pickler first and if that doesn produce anything the right one wrapping the result in Left or Right respectively Not to be confued with xpWrapEither",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpEither",
        "normalized": "PU a b-\u003ePU a b-\u003ePU a(Either b b)",
        "package": "xml-picklers",
        "partial": "Either",
        "signature": "PU n t-\u003ePU n t-\u003ePU n(Either t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElem",
      "description": {
        "fct-descr": "\u003cp\u003eWhen unpickling, tries to find the first element with the supplied name.\n Once such an element is found, it will commit to it and \u003cem\u003efail\u003c/em\u003e if any of the\n picklers don't match.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name-\u003e PU [Attribute] a-\u003e PU [Node] n-\u003e PU [Node] (a, n)",
        "fct-type": "function",
        "title": "xpElem"
      },
      "index": {
        "description": "When unpickling tries to find the first element with the supplied name Once such an element is found it will commit to it and fail if any of the picklers don match",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpElem",
        "normalized": "Name-\u003ePU[Attribute]a-\u003ePU[Node]b-\u003ePU[Node](a,b)",
        "package": "xml-picklers",
        "partial": "Elem",
        "signature": "Name-\u003ePU[Attribute]a-\u003ePU[Node]n-\u003ePU[Node](a,n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemAttrs",
      "description": {
        "fct-descr": "\u003cp\u003eA helper variant of xpElem for elements that contain attributes but no child tags.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name -\u003e PU [Attribute] b -\u003e PU [Node] b",
        "fct-source": "src/Data-XML-Pickle.html#xpElemAttrs",
        "fct-type": "function",
        "title": "xpElemAttrs"
      },
      "index": {
        "description": "helper variant of xpElem for elements that contain attributes but no child tags",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpElemAttrs",
        "normalized": "Name-\u003ePU[Attribute]a-\u003ePU[Node]a",
        "package": "xml-picklers",
        "partial": "Elem Attrs",
        "signature": "Name-\u003ePU[Attribute]b-\u003ePU[Node]b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemBlank",
      "description": {
        "fct-descr": "\u003cp\u003eHelper for Elements that don't contain anything\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name -\u003e PU [Node] ()",
        "fct-source": "src/Data-XML-Pickle.html#xpElemBlank",
        "fct-type": "function",
        "title": "xpElemBlank"
      },
      "index": {
        "description": "Helper for Elements that don contain anything",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpElemBlank",
        "normalized": "Name-\u003ePU[Node]()",
        "package": "xml-picklers",
        "partial": "Elem Blank",
        "signature": "Name-\u003ePU[Node]()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemByNamespace",
      "description": {
        "fct-descr": "\u003cp\u003efind element by name space, prefixes are ignored\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Text-\u003e PU Text name-\u003e PU [Attribute] a-\u003e PU [Node] n-\u003e PU [Node] (name, a, n)",
        "fct-type": "function",
        "title": "xpElemByNamespace"
      },
      "index": {
        "description": "find element by name space prefixes are ignored",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpElemByNamespace",
        "normalized": "Text-\u003ePU Text a-\u003ePU[Attribute]b-\u003ePU[Node]c-\u003ePU[Node](a,b,c)",
        "package": "xml-picklers",
        "partial": "Elem By Namespace",
        "signature": "Text-\u003ePU Text name-\u003ePU[Attribute]a-\u003ePU[Node]n-\u003ePU[Node](name,a,n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemExists",
      "description": {
        "fct-descr": "\u003cp\u003eWhen pickling, creates an empty element iff parameter is True\n\u003c/p\u003e\u003cp\u003eWhen unpickling, checks whether element exists. Generates an error when the\n element is not empty\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name -\u003e PU [Node] Bool",
        "fct-source": "src/Data-XML-Pickle.html#xpElemExists",
        "fct-type": "function",
        "title": "xpElemExists"
      },
      "index": {
        "description": "When pickling creates an empty element iff parameter is True When unpickling checks whether element exists Generates an error when the element is not empty",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpElemExists",
        "normalized": "Name-\u003ePU[Node]Bool",
        "package": "xml-picklers",
        "partial": "Elem Exists",
        "signature": "Name-\u003ePU[Node]Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemNodes",
      "description": {
        "fct-descr": "\u003cp\u003eA helper variant of xpElem for elements that contain child nodes but no attributes.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name -\u003e PU [Node] b -\u003e PU [Node] b",
        "fct-source": "src/Data-XML-Pickle.html#xpElemNodes",
        "fct-type": "function",
        "title": "xpElemNodes"
      },
      "index": {
        "description": "helper variant of xpElem for elements that contain child nodes but no attributes",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpElemNodes",
        "normalized": "Name-\u003ePU[Node]a-\u003ePU[Node]a",
        "package": "xml-picklers",
        "partial": "Elem Nodes",
        "signature": "Name-\u003ePU[Node]b-\u003ePU[Node]b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemText",
      "description": {
        "fct-descr": "\u003cp\u003eA helper variant of xpElem for elements that contain only character data\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name -\u003e PU [Node] Text",
        "fct-source": "src/Data-XML-Pickle.html#xpElemText",
        "fct-type": "function",
        "title": "xpElemText"
      },
      "index": {
        "description": "helper variant of xpElem for elements that contain only character data",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpElemText",
        "normalized": "Name-\u003ePU[Node]Text",
        "package": "xml-picklers",
        "partial": "Elem Text",
        "signature": "Name-\u003ePU[Node]Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemVerbatim",
      "description": {
        "fct-descr": "\u003cp\u003ePickler Returns the first found Element untouched\n\u003c/p\u003e\u003cp\u003eUnpickler wraps element in \u003ccode\u003e\u003ca\u003eNodeElement\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [Node] Element",
        "fct-source": "src/Data-XML-Pickle.html#xpElemVerbatim",
        "fct-type": "function",
        "title": "xpElemVerbatim"
      },
      "index": {
        "description": "Pickler Returns the first found Element untouched Unpickler wraps element in NodeElement",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpElemVerbatim",
        "normalized": "PU[Node]Element",
        "package": "xml-picklers",
        "partial": "Elem Verbatim",
        "signature": "PU[Node]Element"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElemWithName",
      "description": {
        "fct-descr": "\u003cp\u003epickle Element without restriction on the name.\n the name as taken / returned as the first element of the triple\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [Attribute] a-\u003e PU [Node] n-\u003e PU [Node] (Name, a, n)",
        "fct-type": "function",
        "title": "xpElemWithName"
      },
      "index": {
        "description": "pickle Element without restriction on the name the name as taken returned as the first element of the triple",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpElemWithName",
        "normalized": "PU[Attribute]a-\u003ePU[Node]b-\u003ePU[Node](Name,a,b)",
        "package": "xml-picklers",
        "partial": "Elem With Name",
        "signature": "PU[Attribute]a-\u003ePU[Node]n-\u003ePU[Node](Name,a,n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpElems",
      "description": {
        "fct-descr": "\u003cp\u003eHandle all elements with a given name. The unpickler will fail when any of\n the elements fails to unpickle.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name-\u003e PU [Attribute] a-\u003e PU [Node] n-\u003e PU [Node] [(a, n)]",
        "fct-type": "function",
        "title": "xpElems"
      },
      "index": {
        "description": "Handle all elements with given name The unpickler will fail when any of the elements fails to unpickle",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpElems",
        "normalized": "Name-\u003ePU[Attribute]a-\u003ePU[Node]b-\u003ePU[Node][(a,b)]",
        "package": "xml-picklers",
        "partial": "Elems",
        "signature": "Name-\u003ePU[Attribute]a-\u003ePU[Node]n-\u003ePU[Node][(a,n)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpFindFirst",
      "description": {
        "fct-descr": "\u003cp\u003eSelect a single element from the list and apply unpickler to it.\n\u003c/p\u003e\u003cp\u003eReturns no value when no element matches the predicate\n\u003c/p\u003e\u003cp\u003eFails when the unpickler doesn't return a value\n\u003c/p\u003e\u003cp\u003eWhen pickling, this is a noop\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "(t -\u003e Bool) -\u003e PU [t] a -\u003e PU [t] a",
        "fct-source": "src/Data-XML-Pickle.html#xpFindFirst",
        "fct-type": "function",
        "title": "xpFindFirst"
      },
      "index": {
        "description": "Select single element from the list and apply unpickler to it Returns no value when no element matches the predicate Fails when the unpickler doesn return value When pickling this is noop",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpFindFirst",
        "normalized": "(a-\u003eBool)-\u003ePU[a]b-\u003ePU[a]b",
        "package": "xml-picklers",
        "partial": "Find First",
        "signature": "(t-\u003eBool)-\u003ePU[t]a-\u003ePU[t]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpFindMatches",
      "description": {
        "fct-descr": "\u003cp\u003eWhen unpickling, tries to apply the pickler to all elements\n returning and consuming only matched elements\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [b] a -\u003e PU [b] [a]",
        "fct-source": "src/Data-XML-Pickle.html#xpFindMatches",
        "fct-type": "function",
        "title": "xpFindMatches"
      },
      "index": {
        "description": "When unpickling tries to apply the pickler to all elements returning and consuming only matched elements",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpFindMatches",
        "normalized": "PU[a]b-\u003ePU[a][b]",
        "package": "xml-picklers",
        "partial": "Find Matches",
        "signature": "PU[b]a-\u003ePU[b][a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpFst",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU t (a, b) -\u003e PU t a",
        "fct-source": "src/Data-XML-Pickle.html#xpFst",
        "fct-type": "function",
        "title": "xpFst"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpFst",
        "normalized": "PU a(b,c)-\u003ePU a b",
        "package": "xml-picklers",
        "partial": "Fst",
        "signature": "PU t(a,b)-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpHead",
      "description": {
        "fct-descr": "\u003cp\u003ereturn one element, untouched\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] a",
        "fct-source": "src/Data-XML-Pickle.html#xpHead",
        "fct-type": "function",
        "title": "xpHead"
      },
      "index": {
        "description": "return one element untouched",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpHead",
        "normalized": "PU[a]a",
        "package": "xml-picklers",
        "partial": "Head",
        "signature": "PU[a]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpId",
      "description": {
        "fct-descr": "\u003cp\u003eReturns everything (remaining), untouched.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU a a",
        "fct-source": "src/Data-XML-Pickle.html#xpId",
        "fct-type": "function",
        "title": "xpId"
      },
      "index": {
        "description": "Returns everything remaining untouched",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpId",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpIso",
      "description": {
        "fct-descr": "\u003cp\u003eIsomorphic pickler\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e PU a b",
        "fct-source": "src/Data-XML-Pickle.html#xpIso",
        "fct-type": "function",
        "title": "xpIso"
      },
      "index": {
        "description": "Isomorphic pickler",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpIso",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ePU a b",
        "package": "xml-picklers",
        "partial": "Iso",
        "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ePU a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpIsolate",
      "description": {
        "fct-descr": "\u003cp\u003eNoop when pickling\n\u003c/p\u003e\u003cp\u003eWhen unpickling, only give access to the first element\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [t] a -\u003e PU [t] a",
        "fct-source": "src/Data-XML-Pickle.html#xpIsolate",
        "fct-type": "function",
        "title": "xpIsolate"
      },
      "index": {
        "description": "Noop when pickling When unpickling only give access to the first element",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpIsolate",
        "normalized": "PU[a]b-\u003ePU[a]b",
        "package": "xml-picklers",
        "partial": "Isolate",
        "signature": "PU[t]a-\u003ePU[t]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003expSeqWhile\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] b -\u003e PU [a] [b]",
        "fct-source": "src/Data-XML-Pickle.html#xpList",
        "fct-type": "function",
        "title": "xpList"
      },
      "index": {
        "description": "xpSeqWhile compat",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpList",
        "normalized": "PU[a]b-\u003ePU[a][b]",
        "package": "xml-picklers",
        "partial": "List",
        "signature": "PU[a]b-\u003ePU[a][b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpList0",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003expAll\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] b -\u003e PU [a] [b]",
        "fct-source": "src/Data-XML-Pickle.html#xpList0",
        "fct-type": "function",
        "title": "xpList0"
      },
      "index": {
        "description": "xpAll compat",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpList0",
        "normalized": "PU[a]b-\u003ePU[a][b]",
        "package": "xml-picklers",
        "partial": "List",
        "signature": "PU[a]b-\u003ePU[a][b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpListMinLen",
      "description": {
        "fct-descr": "\u003cp\u003eLike xpList, but only succeed during unpickling if at least a\n minimum number of elements are unpickled.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Int -\u003e PU [a] b -\u003e PU [a] [b]",
        "fct-source": "src/Data-XML-Pickle.html#xpListMinLen",
        "fct-type": "function",
        "title": "xpListMinLen"
      },
      "index": {
        "description": "Like xpList but only succeed during unpickling if at least minimum number of elements are unpickled",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpListMinLen",
        "normalized": "Int-\u003ePU[a]b-\u003ePU[a][b]",
        "package": "xml-picklers",
        "partial": "List Min Len",
        "signature": "Int-\u003ePU[a]b-\u003ePU[a][b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpMap",
      "description": {
        "fct-descr": "\u003cp\u003eStandard pickler for maps\n\u003c/p\u003e\u003cp\u003eThis pickler converts a map into a list of pairs of the form\n\u003c/p\u003e\u003cpre\u003e \u003celt attr=\"key\"\u003evalue\u003c/elt\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "Name-\u003e Name-\u003e PU Text k-\u003e PU [Node] a-\u003e PU [Node] (Map k a)",
        "fct-type": "function",
        "title": "xpMap"
      },
      "index": {
        "description": "Standard pickler for maps This pickler converts map into list of pairs of the form elt attr key value elt",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpMap",
        "normalized": "Name-\u003eName-\u003ePU Text a-\u003ePU[Node]b-\u003ePU[Node](Map a b)",
        "package": "xml-picklers",
        "partial": "Map",
        "signature": "Name-\u003eName-\u003ePU Text k-\u003ePU[Node]a-\u003ePU[Node](Map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpMayFail",
      "description": {
        "fct-descr": "\u003cp\u003eInstead of failing the pickler will return no result\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU t a -\u003e PU t a",
        "fct-source": "src/Data-XML-Pickle.html#xpMayFail",
        "fct-type": "function",
        "title": "xpMayFail"
      },
      "index": {
        "description": "Instead of failing the pickler will return no result",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpMayFail",
        "normalized": "PU a b-\u003ePU a b",
        "package": "xml-picklers",
        "partial": "May Fail",
        "signature": "PU t a-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpOption",
      "description": {
        "fct-descr": "\u003cp\u003eLift a pickler. Nothing is returned when the given pickler\n doesn't return a value (e.g. the element isn't found). Does not affect\n unpickling errors.\n Nothing is pickled to mempty\n\u003c/p\u003e\u003cp\u003eA typical example is:\n\u003c/p\u003e\u003cpre\u003e xpElemAttributes \"score\" $ xpOption $ xpAttribute \"value\" xpPrim\n\u003c/pre\u003e\u003cp\u003ein which \u003ccode\u003eJust 5\u003c/code\u003e is encoded as \u003ccode\u003e\u003cscore value=\"5\"/\u003e\u003c/code\u003e and \u003ccode\u003eNothing\u003c/code\u003e\n as \u003ccode\u003e\u003cscore/\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [t] a -\u003e PU [t] (Maybe a)",
        "fct-source": "src/Data-XML-Pickle.html#xpOption",
        "fct-type": "function",
        "title": "xpOption"
      },
      "index": {
        "description": "Lift pickler Nothing is returned when the given pickler doesn return value e.g the element isn found Does not affect unpickling errors Nothing is pickled to mempty typical example is xpElemAttributes score xpOption xpAttribute value xpPrim in which Just is encoded as score value and Nothing as score",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpOption",
        "normalized": "PU[a]b-\u003ePU[a](Maybe b)",
        "package": "xml-picklers",
        "partial": "Option",
        "signature": "PU[t]a-\u003ePU[t](Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpPair",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003exp2Tuple\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] b1 -\u003e PU [a] b2 -\u003e PU [a] (b1, b2)",
        "fct-source": "src/Data-XML-Pickle.html#xpPair",
        "fct-type": "function",
        "title": "xpPair"
      },
      "index": {
        "description": "xp2Tuple compat",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpPair",
        "normalized": "PU[a]b-\u003ePU[a]b-\u003ePU[a](b,b)",
        "package": "xml-picklers",
        "partial": "Pair",
        "signature": "PU[a]b-\u003ePU[a]b-\u003ePU[a](b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpPartial",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "(a -\u003e Either Text b) -\u003e (b -\u003e a) -\u003e PU a b",
        "fct-source": "src/Data-XML-Pickle.html#xpPartial",
        "fct-type": "function",
        "title": "xpPartial"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpPartial",
        "normalized": "(a-\u003eEither Text b)-\u003e(b-\u003ea)-\u003ePU a b",
        "package": "xml-picklers",
        "partial": "Partial",
        "signature": "(a-\u003eEither Text b)-\u003e(b-\u003ea)-\u003ePU a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpPeek",
      "description": {
        "fct-descr": "\u003cp\u003eWhen unpickling, don't consume the matched element(s), noop when pickling\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU t a -\u003e PU t a",
        "fct-source": "src/Data-XML-Pickle.html#xpPeek",
        "fct-type": "function",
        "title": "xpPeek"
      },
      "index": {
        "description": "When unpickling don consume the matched element noop when pickling",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpPeek",
        "normalized": "PU a b-\u003ePU a b",
        "package": "xml-picklers",
        "partial": "Peek",
        "signature": "PU t a-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpPrim",
      "description": {
        "fct-descr": "\u003cp\u003eConvert text to/from any type that implements \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n Fails on unpickle if \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU Text a",
        "fct-source": "src/Data-XML-Pickle.html#xpPrim",
        "fct-type": "function",
        "title": "xpPrim"
      },
      "index": {
        "description": "Convert text to from any type that implements Read and Show Fails on unpickle if read fails",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpPrim",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpRoot",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a pickler on Lists to a pickler on single elements.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.\u003c/em\u003e Will error when the given pickler doesn't produce exactly one element\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] b -\u003e PU a b",
        "fct-source": "src/Data-XML-Pickle.html#xpRoot",
        "fct-type": "function",
        "title": "xpRoot"
      },
      "index": {
        "description": "Transforms pickler on Lists to pickler on single elements N.B Will error when the given pickler doesn produce exactly one element",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpRoot",
        "normalized": "PU[a]b-\u003ePU a b",
        "package": "xml-picklers",
        "partial": "Root",
        "signature": "PU[a]b-\u003ePU a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpSeqWhile",
      "description": {
        "fct-descr": "\u003cp\u003eWhen unpickling, sucessively applies pickler to single elements until it\n doesn't return anything; returns all matched elements.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] b -\u003e PU [a] [b]",
        "fct-source": "src/Data-XML-Pickle.html#xpSeqWhile",
        "fct-type": "function",
        "title": "xpSeqWhile"
      },
      "index": {
        "description": "When unpickling sucessively applies pickler to single elements until it doesn return anything returns all matched elements",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpSeqWhile",
        "normalized": "PU[a]b-\u003ePU[a][b]",
        "package": "xml-picklers",
        "partial": "Seq While",
        "signature": "PU[a]b-\u003ePU[a][b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpSnd",
      "description": {
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU t (a, b) -\u003e PU t b",
        "fct-source": "src/Data-XML-Pickle.html#xpSnd",
        "fct-type": "function",
        "title": "xpSnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpSnd",
        "normalized": "PU a(b,c)-\u003ePU a c",
        "package": "xml-picklers",
        "partial": "Snd",
        "signature": "PU t(a,b)-\u003ePU t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert text to/from String\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU Text String",
        "fct-source": "src/Data-XML-Pickle.html#xpString",
        "fct-type": "function",
        "title": "xpString"
      },
      "index": {
        "description": "Convert text to from String",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpString",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpSubsetAll",
      "description": {
        "fct-descr": "\u003cp\u003eFor unpickling, apply the given pickler to a subset of the elements\n determined by a given predicate\n\u003c/p\u003e\u003cp\u003ePickles like \u003ccode\u003e\u003ca\u003expAll\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "(a -\u003e Bool)-\u003e PU [a] b-\u003e PU [a] [b]",
        "fct-type": "function",
        "title": "xpSubsetAll"
      },
      "index": {
        "description": "For unpickling apply the given pickler to subset of the elements determined by given predicate Pickles like xpAll",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpSubsetAll",
        "normalized": "(a-\u003eBool)-\u003ePU[a]b-\u003ePU[a][b]",
        "package": "xml-picklers",
        "partial": "Subset All",
        "signature": "(a-\u003eBool)-\u003ePU[a]b-\u003ePU[a][b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpText",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003expText0\u003c/a\u003e\u003c/code\u003e, but fails on non-empty input.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU Text Text",
        "fct-source": "src/Data-XML-Pickle.html#xpText",
        "fct-type": "function",
        "title": "xpText"
      },
      "index": {
        "description": "Like xpText0 but fails on non-empty input",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpText",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpText0",
      "description": {
        "fct-descr": "\u003cp\u003especialised version of \u003ccode\u003e\u003ca\u003expId\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU Text Text",
        "fct-source": "src/Data-XML-Pickle.html#xpText0",
        "fct-type": "function",
        "title": "xpText0"
      },
      "index": {
        "description": "specialised version of xpId compat",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpText0",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpThrow",
      "description": {
        "fct-descr": "\u003cp\u003eNo output when pickling, always generates an error with the specified message on unpickling.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "String-\u003e PU m a",
        "fct-type": "function",
        "title": "xpThrow"
      },
      "index": {
        "description": "No output when pickling always generates an error with the specified message on unpickling",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpThrow",
        "normalized": "String-\u003ePU a b",
        "package": "xml-picklers",
        "partial": "Throw",
        "signature": "String-\u003ePU m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpTree",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003expHead\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] a",
        "fct-source": "src/Data-XML-Pickle.html#xpTree",
        "fct-type": "function",
        "title": "xpTree"
      },
      "index": {
        "description": "xpHead compat",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpTree",
        "normalized": "PU[a]a",
        "package": "xml-picklers",
        "partial": "Tree",
        "signature": "PU[a]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpTrees",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003expId\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU a a",
        "fct-source": "src/Data-XML-Pickle.html#xpTrees",
        "fct-type": "function",
        "title": "xpTrees"
      },
      "index": {
        "description": "xpId compat",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpTrees",
        "normalized": "",
        "package": "xml-picklers",
        "partial": "Trees",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpTriple",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003exp3Tuple\u003c/a\u003e\u003c/code\u003e (\u003cem\u003ecompat\u003c/em\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] a1 -\u003e PU [a] a2 -\u003e PU [a] a3 -\u003e PU [a] (a1, a2, a3)",
        "fct-source": "src/Data-XML-Pickle.html#xpTriple",
        "fct-type": "function",
        "title": "xpTriple"
      },
      "index": {
        "description": "xp3Tuple compat",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpTriple",
        "normalized": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a)",
        "package": "xml-picklers",
        "partial": "Triple",
        "signature": "PU[a]a-\u003ePU[a]a-\u003ePU[a]a-\u003ePU[a](a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpTryCatch",
      "description": {
        "fct-descr": "\u003cp\u003ePickler that during pickling always uses the first pickler, and during\n unpickling tries the first, and on failure then tries the second.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU t a -\u003e PU t a -\u003e PU t a",
        "fct-source": "src/Data-XML-Pickle.html#xpTryCatch",
        "fct-type": "function",
        "title": "xpTryCatch"
      },
      "index": {
        "description": "Pickler that during pickling always uses the first pickler and during unpickling tries the first and on failure then tries the second",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpTryCatch",
        "normalized": "PU a b-\u003ePU a b-\u003ePU a b",
        "package": "xml-picklers",
        "partial": "Try Catch",
        "signature": "PU t a-\u003ePU t a-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpUnit",
      "description": {
        "fct-descr": "\u003cp\u003eDoesn't create or consume anything, always succeeds\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [a] ()",
        "fct-source": "src/Data-XML-Pickle.html#xpUnit",
        "fct-type": "function",
        "title": "xpUnit"
      },
      "index": {
        "description": "Doesn create or consume anything always succeeds",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpUnit",
        "normalized": "PU[a]()",
        "package": "xml-picklers",
        "partial": "Unit",
        "signature": "PU[a]()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpUnliftElems",
      "description": {
        "fct-descr": "\u003cp\u003eUnlift a pickler on Nodes to a Pickler on Elements. Nodes generated during\n pickling that are not Elements will be silently discarded\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [Node] a -\u003e PU [Element] a",
        "fct-source": "src/Data-XML-Pickle.html#xpUnliftElems",
        "fct-type": "function",
        "title": "xpUnliftElems"
      },
      "index": {
        "description": "Unlift pickler on Nodes to Pickler on Elements Nodes generated during pickling that are not Elements will be silently discarded",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpUnliftElems",
        "normalized": "PU[Node]a-\u003ePU[Element]a",
        "package": "xml-picklers",
        "partial": "Unlift Elems",
        "signature": "PU[Node]a-\u003ePU[Element]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to use a pickler. Return a default value when the pickler doesn't\n return anything (Doesn't touch on UnpickleError)\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003expDefault\u003c/a\u003e\u003c/code\u003e, the default value \u003cem\u003eis\u003c/em\u003e encoded in the XML document.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "a -\u003e PU t a -\u003e PU t a",
        "fct-source": "src/Data-XML-Pickle.html#xpWithDefault",
        "fct-type": "function",
        "title": "xpWithDefault"
      },
      "index": {
        "description": "Attempt to use pickler Return default value when the pickler doesn return anything Doesn touch on UnpickleError Unlike xpDefault the default value is encoded in the XML document",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpWithDefault",
        "normalized": "a-\u003ePU b a-\u003ePU b a",
        "package": "xml-picklers",
        "partial": "With Default",
        "signature": "a-\u003ePU t a-\u003ePU t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpWrap",
      "description": {
        "fct-descr": "\u003cp\u003eApply a bijection before pickling / after unpickling\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e PU t a -\u003e PU t b",
        "fct-source": "src/Data-XML-Pickle.html#xpWrap",
        "fct-type": "function",
        "title": "xpWrap"
      },
      "index": {
        "description": "Apply bijection before pickling after unpickling",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpWrap",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ePU c a-\u003ePU c b",
        "package": "xml-picklers",
        "partial": "Wrap",
        "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ePU t a-\u003ePU t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpWrapEither",
      "description": {
        "fct-descr": "\u003cp\u003eLike xpWrap, except it strips Right (and treats Left as a failure) during unpickling.\n xpWrapEither :: (a -\u003e Either String b, b -\u003e a) -\u003e PU t a -\u003e PU t b\n\u003c/p\u003e\u003cp\u003enot to be confuesd with \u003ccode\u003e\u003ca\u003expEither\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "(a -\u003e Either e b) -\u003e (b -\u003e a) -\u003e PU t a -\u003e PU t b",
        "fct-source": "src/Data-XML-Pickle.html#xpWrapEither",
        "fct-type": "function",
        "title": "xpWrapEither"
      },
      "index": {
        "description": "Like xpWrap except it strips Right and treats Left as failure during unpickling xpWrapEither Either String PU PU not to be confuesd with xpEither",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpWrapEither",
        "normalized": "(a-\u003eEither b c)-\u003e(c-\u003ea)-\u003ePU d a-\u003ePU d c",
        "package": "xml-picklers",
        "partial": "Wrap Either",
        "signature": "(a-\u003eEither e b)-\u003e(b-\u003ea)-\u003ePU t a-\u003ePU t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpWrapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eLike xpWrap, but strips Just (and treats Nothing as a failure) during unpickling.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "(a -\u003e Maybe b) -\u003e (b -\u003e a) -\u003e PU t a -\u003e PU t b",
        "fct-source": "src/Data-XML-Pickle.html#xpWrapMaybe",
        "fct-type": "function",
        "title": "xpWrapMaybe"
      },
      "index": {
        "description": "Like xpWrap but strips Just and treats Nothing as failure during unpickling",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpWrapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003ea)-\u003ePU c a-\u003ePU c b",
        "package": "xml-picklers",
        "partial": "Wrap Maybe",
        "signature": "(a-\u003eMaybe b)-\u003e(b-\u003ea)-\u003ePU t a-\u003ePU t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpWrapMaybe_",
      "description": {
        "fct-descr": "\u003cp\u003eLike xpWrap, but strips Just (and treats Nothing as a failure) during unpickling,\n with specified error message for Nothing value.\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "String -\u003e (a -\u003e Maybe b) -\u003e (b -\u003e a) -\u003e PU t a -\u003e PU t b",
        "fct-source": "src/Data-XML-Pickle.html#xpWrapMaybe_",
        "fct-type": "function",
        "title": "xpWrapMaybe_"
      },
      "index": {
        "description": "Like xpWrap but strips Just and treats Nothing as failure during unpickling with specified error message for Nothing value",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpWrapMaybe_",
        "normalized": "String-\u003e(a-\u003eMaybe b)-\u003e(b-\u003ea)-\u003ePU c a-\u003ePU c b",
        "package": "xml-picklers",
        "partial": "Wrap Maybe",
        "signature": "String-\u003e(a-\u003eMaybe b)-\u003e(b-\u003ea)-\u003ePU t a-\u003ePU t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xml-picklers/docs/Data-XML-Pickle.html#v:xpZero",
      "description": {
        "fct-descr": "\u003cp\u003eThe zero pickler\n\u003c/p\u003e\u003cp\u003eEncodes nothing, always fails during unpickling. (Same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003expThrow\u003c/a\u003e\u003c/code\u003e \"got xpZero\"\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.XML.Pickle",
        "fct-package": "xml-picklers",
        "fct-signature": "PU [t] a",
        "fct-source": "src/Data-XML-Pickle.html#xpZero",
        "fct-type": "function",
        "title": "xpZero"
      },
      "index": {
        "description": "The zero pickler Encodes nothing always fails during unpickling Same as xpThrow got xpZero",
        "hierarchy": "Data XML Pickle",
        "module": "Data.XML.Pickle",
        "name": "xpZero",
        "normalized": "PU[a]b",
        "package": "xml-picklers",
        "partial": "Zero",
        "signature": "PU[t]a"
      }
    }
  }
]