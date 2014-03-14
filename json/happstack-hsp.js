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
        "word": "happstack-hsp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.Google.Analytics",
          "name": "Analytics",
          "package": "happstack-hsp",
          "source": "src/HSP-Google-Analytics.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HSP Google Analytics",
          "module": "HSP.Google.Analytics",
          "name": "Analytics",
          "package": "happstack-hsp",
          "partial": "Analytics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-hsp/docs/HSP-Google-Analytics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.Google.Analytics",
          "name": "UACCT",
          "package": "happstack-hsp",
          "source": "src/HSP-Google-Analytics.html#UACCT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "HSP Google Analytics",
          "module": "HSP.Google.Analytics",
          "name": "UACCT",
          "package": "happstack-hsp",
          "partial": "UACCT",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/happstack-hsp/docs/HSP-Google-Analytics.html#t:UACCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe UACCT provided to you by Google (looks like: \u003ccode\u003eUA-XXXXX-X\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "HSP.Google.Analytics",
          "name": "UACCT",
          "package": "happstack-hsp",
          "signature": "UACCT String",
          "source": "src/HSP-Google-Analytics.html#UACCT",
          "type": "function"
        },
        "index": {
          "description": "The UACCT provided to you by Google looks like UA-XXXXX-X",
          "hierarchy": "HSP Google Analytics",
          "module": "HSP.Google.Analytics",
          "name": "UACCT",
          "package": "happstack-hsp",
          "partial": "UACCT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-hsp/docs/HSP-Google-Analytics.html#v:UACCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate the (even older) google analytics script tags\n\u003c/p\u003e\u003cp\u003eNOTE: you must put the \u003ca\u003eanalytics yourUACCT %\u003c/a\u003e immediately before the \u003ca\u003e/body\u003c/a\u003e tag\n\u003c/p\u003e\u003cp\u003eYou probably want to use \u003ccode\u003e\u003ca\u003eanalyticsAsync\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003eaddAnalytics\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eanalyticsAsync\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euniversalAnalytics\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HSP.Google.Analytics",
          "name": "analytics",
          "package": "happstack-hsp",
          "signature": "UACCT -\u003e GenXMLList m",
          "source": "src/HSP-Google-Analytics.html#analytics",
          "type": "function"
        },
        "index": {
          "description": "create the even older google analytics script tags NOTE you must put the analytics yourUACCT immediately before the body tag You probably want to use analyticsAsync instead See also addAnalytics analyticsAsync universalAnalytics",
          "hierarchy": "HSP Google Analytics",
          "module": "HSP.Google.Analytics",
          "name": "analytics",
          "normalized": "UACCT-\u003eGenXMLList a",
          "package": "happstack-hsp",
          "signature": "UACCT-\u003eGenXMLList m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-hsp/docs/HSP-Google-Analytics.html#v:analytics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate the google analytics asynchronous tracking script tag\n\u003c/p\u003e\u003cp\u003eThis uses the now dubbed 'classic google analytics'\n\u003c/p\u003e\u003cp\u003eNOTE: you must put this right before the \u003c/head\u003e tag\n see also: universalAnalytics\n\u003c/p\u003e",
          "module": "HSP.Google.Analytics",
          "name": "analyticsAsync",
          "package": "happstack-hsp",
          "signature": "UACCT-\u003e GenXML m",
          "type": "function"
        },
        "index": {
          "description": "create the google analytics asynchronous tracking script tag This uses the now dubbed classic google analytics NOTE you must put this right before the head tag see also universalAnalytics",
          "hierarchy": "HSP Google Analytics",
          "module": "HSP.Google.Analytics",
          "name": "analyticsAsync",
          "normalized": "UACCT-\u003eGenXML a",
          "package": "happstack-hsp",
          "partial": "Async",
          "signature": "UACCT-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-hsp/docs/HSP-Google-Analytics.html#v:analyticsAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HSP.Google.Analytics",
          "name": "universalAnalytics",
          "package": "happstack-hsp",
          "signature": "UACCT-\u003e GenXML m",
          "type": "function"
        },
        "index": {
          "hierarchy": "HSP Google Analytics",
          "module": "HSP.Google.Analytics",
          "name": "universalAnalytics",
          "normalized": "UACCT-\u003eGenXML a",
          "package": "happstack-hsp",
          "partial": "Analytics",
          "signature": "UACCT-\u003eGenXML m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-hsp/docs/HSP-Google-Analytics.html#v:universalAnalytics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides, \u003ccode\u003einstance \u003ccode\u003e\u003ca\u003eXMLGenerator\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e m)\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HSP.ServerPartT",
          "name": "ServerPartT",
          "package": "happstack-hsp",
          "source": "src/HSP-ServerPartT.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides instance XMLGenerator ServerPartT",
          "hierarchy": "HSP ServerPartT",
          "module": "HSP.ServerPartT",
          "name": "ServerPartT",
          "package": "happstack-hsp",
          "partial": "Server Part",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-hsp/docs/HSP-ServerPartT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.HSP.HTML",
          "name": "HTML",
          "package": "happstack-hsp",
          "source": "src/Happstack-Server-HSP-HTML.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server HSP HTML",
          "module": "Happstack.Server.HSP.HTML",
          "name": "HTML",
          "package": "happstack-hsp",
          "partial": "HTML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-hsp/docs/Happstack-Server-HSP-HTML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.HSP.HTML",
          "name": "defaultTemplate",
          "package": "happstack-hsp",
          "signature": "Text -\u003e headers -\u003e body -\u003e m (XMLType m)",
          "source": "src/Happstack-Server-HSP-HTML.html#defaultTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server HSP HTML",
          "module": "Happstack.Server.HSP.HTML",
          "name": "defaultTemplate",
          "normalized": "Text-\u003ea-\u003eb-\u003ec(XMLType c)",
          "package": "happstack-hsp",
          "partial": "Template",
          "signature": "Text-\u003eheaders-\u003ebody-\u003em(XMLType m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-hsp/docs/Happstack-Server-HSP-HTML.html#v:defaultTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains orphan \u003ccode\u003e\u003ca\u003eXMLGenT\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eServerMonad\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFilterMonad\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWebMonad\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eHasRqData\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eHappstack\u003c/a\u003e\u003c/code\u003e. It does not export any functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.XMLGenT",
          "name": "XMLGenT",
          "package": "happstack-hsp",
          "source": "src/Happstack-Server-XMLGenT.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains orphan XMLGenT instances for ServerMonad FilterMonad WebMonad HasRqData and Happstack It does not export any functions",
          "hierarchy": "Happstack Server XMLGenT",
          "module": "Happstack.Server.XMLGenT",
          "name": "XMLGenT",
          "package": "happstack-hsp",
          "partial": "XMLGen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-hsp/docs/Happstack-Server-XMLGenT.html#"
      }
    }
  ]
]