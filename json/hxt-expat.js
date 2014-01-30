[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-expat/docs/Text-XML-HXT-Expat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface for Expat XML Parser\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.XML.HXT.Expat",
        "fct-package": "hxt-expat",
        "fct-signature": "module",
        "fct-source": "src/Text-XML-HXT-Expat.html",
        "fct-type": "module",
        "title": "Expat"
      },
      "index": {
        "description": "Interface for Expat XML Parser",
        "hierarchy": "Text XML HXT Expat",
        "module": "Text.XML.HXT.Expat",
        "name": "Expat",
        "normalized": "",
        "package": "hxt-expat",
        "partial": "Expat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-expat/docs/Text-XML-HXT-Expat.html#v:issueExpatErr",
      "description": {
        "fct-descr": "\u003cp\u003eIn case of lazy parsing check for possible errors\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Expat",
        "fct-package": "hxt-expat",
        "fct-signature": "IOStateArrow s b b",
        "fct-source": "src/Text-XML-HXT-Arrow-ExpatInterface.html#issueExpatErr",
        "fct-type": "function",
        "title": "issueExpatErr"
      },
      "index": {
        "description": "In case of lazy parsing check for possible errors",
        "hierarchy": "Text XML HXT Expat",
        "module": "Text.XML.HXT.Expat",
        "name": "issueExpatErr",
        "normalized": "",
        "package": "hxt-expat",
        "partial": "Expat Err",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-expat/docs/Text-XML-HXT-Expat.html#v:withExpat",
      "description": {
        "fct-descr": "\u003cp\u003eThe system config option to enable the expat parser\n\u003c/p\u003e\u003cp\u003eHere is an example, how to use it:\n\u003c/p\u003e\u003cpre\u003e ...\n import Text.HXT.XML.Core\n import Text.HXT.XML.Expat\n ...\n\n readDocument [ withExpat True ] \"some-file.xml\"\n ...\n\u003c/pre\u003e\u003cp\u003ereads the given document and parses it with the expat parser.\nThere is no validation enabled. The parameter to \u003ccode\u003ewithExpat\u003c/code\u003e determines, whether parsing\nis done strict. Here strict parsing is enabled. When strict parsing is used,\nthe parse is immediately checked for parser errors, and possible errors are issued.\nWhen set to non-strict parsing, error checking is delayed and may be done later \nwith the \u003ccode\u003eissueExpatErr\u003c/code\u003e arrow.\n\u003c/p\u003e\u003cp\u003eWhen HTML parsing is enabled, the expat parser will be configured with the HTML enitity reference\nresolver, else only the predefined XML enitities will be substituted.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Expat",
        "fct-package": "hxt-expat",
        "fct-signature": "Bool -\u003e SysConfig",
        "fct-source": "src/Text-XML-HXT-Arrow-ExpatInterface.html#withExpat",
        "fct-type": "function",
        "title": "withExpat"
      },
      "index": {
        "description": "The system config option to enable the expat parser Here is an example how to use it import Text.HXT.XML.Core import Text.HXT.XML.Expat readDocument withExpat True some-file.xml reads the given document and parses it with the expat parser There is no validation enabled The parameter to withExpat determines whether parsing is done strict Here strict parsing is enabled When strict parsing is used the parse is immediately checked for parser errors and possible errors are issued When set to non-strict parsing error checking is delayed and may be done later with the issueExpatErr arrow When HTML parsing is enabled the expat parser will be configured with the HTML enitity reference resolver else only the predefined XML enitities will be substituted",
        "hierarchy": "Text XML HXT Expat",
        "module": "Text.XML.HXT.Expat",
        "name": "withExpat",
        "normalized": "Bool-\u003eSysConfig",
        "package": "hxt-expat",
        "partial": "Expat",
        "signature": "Bool-\u003eSysConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hxt-expat/docs/Text-XML-HXT-Expat.html#v:withoutExpat",
      "description": {
        "fct-descr": "\u003cp\u003eTurns off expat parsing. The build in HXT parsers will be used.\n\u003c/p\u003e",
        "fct-module": "Text.XML.HXT.Expat",
        "fct-package": "hxt-expat",
        "fct-signature": "SysConfig",
        "fct-source": "src/Text-XML-HXT-Arrow-ExpatInterface.html#withoutExpat",
        "fct-type": "function",
        "title": "withoutExpat"
      },
      "index": {
        "description": "Turns off expat parsing The build in HXT parsers will be used",
        "hierarchy": "Text XML HXT Expat",
        "module": "Text.XML.HXT.Expat",
        "name": "withoutExpat",
        "normalized": "",
        "package": "hxt-expat",
        "partial": "Expat",
        "signature": ""
      }
    }
  }
]