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
        "word": "hledger-web"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Application",
          "name": "Application",
          "package": "hledger-web",
          "source": "src/Application.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Application",
          "module": "Application",
          "name": "Application",
          "package": "hledger-web",
          "partial": "Application",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Application.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Application",
          "name": "getApplicationDev",
          "package": "hledger-web",
          "signature": "IO (Int, Application)",
          "source": "src/Application.html#getApplicationDev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Application",
          "module": "Application",
          "name": "getApplicationDev",
          "normalized": "IO(Int,Application)",
          "package": "hledger-web",
          "partial": "Application Dev",
          "signature": "IO(Int,Application)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Application.html#v:getApplicationDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Application",
          "name": "makeApplication",
          "package": "hledger-web",
          "signature": "WebOpts -\u003e Journal -\u003e AppConfig DefaultEnv Extra -\u003e IO Application",
          "source": "src/Application.html#makeApplication",
          "type": "function"
        },
        "index": {
          "hierarchy": "Application",
          "module": "Application",
          "name": "makeApplication",
          "normalized": "WebOpts-\u003eJournal-\u003eAppConfig DefaultEnv Extra-\u003eIO Application",
          "package": "hledger-web",
          "partial": "Application",
          "signature": "WebOpts-\u003eJournal-\u003eAppConfig DefaultEnv Extra-\u003eIO Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Application.html#v:makeApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Application",
          "name": "makeFoundation",
          "package": "hledger-web",
          "signature": "AppConfig DefaultEnv Extra -\u003e IO App",
          "source": "src/Application.html#makeFoundation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Application",
          "module": "Application",
          "name": "makeFoundation",
          "normalized": "AppConfig DefaultEnv Extra-\u003eIO App",
          "package": "hledger-web",
          "partial": "Foundation",
          "signature": "AppConfig DefaultEnv Extra-\u003eIO App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Application.html#v:makeFoundation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foundation",
          "name": "Foundation",
          "package": "hledger-web",
          "source": "src/Foundation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "Foundation",
          "package": "hledger-web",
          "partial": "Foundation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe site argument for your application. This can be a good place to\n keep settings and values requiring initialization before your application\n starts running, such as database connections. Every handler will have\n access to the data present here.\n\u003c/p\u003e",
          "module": "Foundation",
          "name": "App",
          "package": "hledger-web",
          "source": "src/Foundation.html#App",
          "type": "data"
        },
        "index": {
          "description": "The site argument for your application This can be good place to keep settings and values requiring initialization before your application starts running such as database connections Every handler will have access to the data present here",
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "App",
          "package": "hledger-web",
          "partial": "App",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#t:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foundation",
          "name": "AppMessage",
          "package": "hledger-web",
          "source": "src/Foundation.html#AppMessage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "AppMessage",
          "package": "hledger-web",
          "partial": "App Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#t:AppMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience alias.\n\u003c/p\u003e",
          "module": "Foundation",
          "name": "AppRoute",
          "package": "hledger-web",
          "source": "src/Foundation.html#AppRoute",
          "type": "type"
        },
        "index": {
          "description": "convenience alias",
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "AppRoute",
          "package": "hledger-web",
          "partial": "App Route",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#t:AppRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foundation",
          "name": "Form",
          "package": "hledger-web",
          "source": "src/Foundation.html#Form",
          "type": "type"
        },
        "index": {
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "Form",
          "package": "hledger-web",
          "partial": "Form",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#t:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foundation",
          "name": "Handler",
          "package": "hledger-web",
          "source": "src/Foundation.html#Handler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "Handler",
          "package": "hledger-web",
          "partial": "Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foundation",
          "name": "Widget",
          "package": "hledger-web",
          "source": "src/Foundation.html#Widget",
          "type": "type"
        },
        "index": {
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "Widget",
          "package": "hledger-web",
          "partial": "Widget",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#t:Widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foundation",
          "name": "App",
          "package": "hledger-web",
          "signature": "App",
          "source": "src/Foundation.html#App",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "App",
          "package": "hledger-web",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foundation",
          "name": "MsgHello",
          "package": "hledger-web",
          "signature": "MsgHello",
          "source": "src/Foundation.html#AppMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "MsgHello",
          "package": "hledger-web",
          "partial": "Msg Hello",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#v:MsgHello"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foundation",
          "name": "appJournal",
          "package": "hledger-web",
          "signature": "IORef Journal",
          "source": "src/Foundation.html#App",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "appJournal",
          "package": "hledger-web",
          "partial": "Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#v:appJournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foundation",
          "name": "appOpts",
          "package": "hledger-web",
          "signature": "WebOpts",
          "source": "src/Foundation.html#App",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "appOpts",
          "package": "hledger-web",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#v:appOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eExtra\u003c/a\u003e\u003c/code\u003e value, used to hold data from the settings.yml file.\n\u003c/p\u003e",
          "module": "Foundation",
          "name": "getExtra",
          "package": "hledger-web",
          "signature": "Handler Extra",
          "source": "src/Foundation.html#getExtra",
          "type": "function"
        },
        "index": {
          "description": "Get the Extra value used to hold data from the settings.yml file",
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "getExtra",
          "package": "hledger-web",
          "partial": "Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#v:getExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSettings for static file serving.\n\u003c/p\u003e",
          "module": "Foundation",
          "name": "getStatic",
          "package": "hledger-web",
          "signature": "Static",
          "source": "src/Foundation.html#App",
          "type": "function"
        },
        "index": {
          "description": "Settings for static file serving",
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "getStatic",
          "package": "hledger-web",
          "partial": "Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#v:getStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foundation",
          "name": "httpManager",
          "package": "hledger-web",
          "signature": "Manager",
          "source": "src/Foundation.html#App",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "httpManager",
          "package": "hledger-web",
          "partial": "Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#v:httpManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foundation",
          "name": "resourcesApp",
          "package": "hledger-web",
          "signature": "[ResourceTree String]",
          "source": "src/Foundation.html#resourcesApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "resourcesApp",
          "normalized": "[ResourceTree String]",
          "package": "hledger-web",
          "partial": "App",
          "signature": "[ResourceTree String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#v:resourcesApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foundation",
          "name": "settings",
          "package": "hledger-web",
          "signature": "AppConfig DefaultEnv Extra",
          "source": "src/Foundation.html#App",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foundation",
          "module": "Foundation",
          "name": "settings",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Foundation.html#v:settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon page components and rendering helpers.\n For global page layout, see Application.hs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Handler.Common",
          "name": "Common",
          "package": "hledger-web",
          "source": "src/Handler-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Common page components and rendering helpers For global page layout see Application.hs",
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "Common",
          "package": "hledger-web",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Common",
          "name": "accountOnlyQuery",
          "package": "hledger-web",
          "signature": "AccountName -\u003e String",
          "source": "src/Handler-Common.html#accountOnlyQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "accountOnlyQuery",
          "normalized": "AccountName-\u003eString",
          "package": "hledger-web",
          "partial": "Only Query",
          "signature": "AccountName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:accountOnlyQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Common",
          "name": "accountQuery",
          "package": "hledger-web",
          "signature": "AccountName -\u003e String",
          "source": "src/Handler-Common.html#accountQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "accountQuery",
          "normalized": "AccountName-\u003eString",
          "package": "hledger-web",
          "partial": "Query",
          "signature": "AccountName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:accountQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Common",
          "name": "accountUrl",
          "package": "hledger-web",
          "signature": "AppRoute -\u003e AccountName -\u003e (AppRoute, [(Text, Text)])",
          "source": "src/Handler-Common.html#accountUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "accountUrl",
          "normalized": "AppRoute-\u003eAccountName-\u003e(AppRoute,[(Text,Text)])",
          "package": "hledger-web",
          "partial": "Url",
          "signature": "AppRoute-\u003eAccountName-\u003e(AppRoute,[(Text,Text)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:accountUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd transaction form.\n\u003c/p\u003e",
          "module": "Handler.Common",
          "name": "addform",
          "package": "hledger-web",
          "signature": "Text -\u003e ViewData -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#addform",
          "type": "function"
        },
        "index": {
          "description": "Add transaction form",
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "addform",
          "normalized": "Text-\u003eViewData-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "signature": "Text-\u003eViewData-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:addform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender an \u003ca\u003eBalanceReport\u003c/a\u003e as html.\n\u003c/p\u003e",
          "module": "Handler.Common",
          "name": "balanceReportAsHtml",
          "package": "hledger-web",
          "signature": "WebOpts -\u003e ViewData -\u003e BalanceReport -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#balanceReportAsHtml",
          "type": "function"
        },
        "index": {
          "description": "Render an BalanceReport as html",
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "balanceReportAsHtml",
          "normalized": "WebOpts-\u003eViewData-\u003eBalanceReport-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "partial": "Report As Html",
          "signature": "WebOpts-\u003eViewData-\u003eBalanceReport-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:balanceReportAsHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEdit journal form.\n\u003c/p\u003e",
          "module": "Handler.Common",
          "name": "editform",
          "package": "hledger-web",
          "signature": "ViewData -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#editform",
          "type": "function"
        },
        "index": {
          "description": "Edit journal form",
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "editform",
          "normalized": "ViewData-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "signature": "ViewData-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:editform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender an \u003ca\u003eEntriesReport\u003c/a\u003e as html for the journal entries view.\n\u003c/p\u003e",
          "module": "Handler.Common",
          "name": "entriesReportAsHtml",
          "package": "hledger-web",
          "signature": "WebOpts -\u003e ViewData -\u003e EntriesReport -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#entriesReportAsHtml",
          "type": "function"
        },
        "index": {
          "description": "Render an EntriesReport as html for the journal entries view",
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "entriesReportAsHtml",
          "normalized": "WebOpts-\u003eViewData-\u003eEntriesReport-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "partial": "Report As Html",
          "signature": "WebOpts-\u003eViewData-\u003eEntriesReport-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:entriesReportAsHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink to a topic in the manual.\n\u003c/p\u003e",
          "module": "Handler.Common",
          "name": "helplink",
          "package": "hledger-web",
          "signature": "String -\u003e String -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#helplink",
          "type": "function"
        },
        "index": {
          "description": "Link to topic in the manual",
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "helplink",
          "normalized": "String-\u003eString-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "signature": "String-\u003eString-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:helplink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport journal form.\n\u003c/p\u003e",
          "module": "Handler.Common",
          "name": "importform",
          "package": "hledger-web",
          "signature": "HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#importform",
          "type": "function"
        },
        "index": {
          "description": "Import journal form",
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "importform",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:importform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a \u003ca\u003eTransactionsReport\u003c/a\u003e as html for the formatted journal view.\n\u003c/p\u003e",
          "module": "Handler.Common",
          "name": "journalTransactionsReportAsHtml",
          "package": "hledger-web",
          "signature": "WebOpts -\u003e ViewData -\u003e TransactionsReport -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#journalTransactionsReportAsHtml",
          "type": "function"
        },
        "index": {
          "description": "Render TransactionsReport as html for the formatted journal view",
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "journalTransactionsReportAsHtml",
          "normalized": "WebOpts-\u003eViewData-\u003eTransactionsReport-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "partial": "Transactions Report As Html",
          "signature": "WebOpts-\u003eViewData-\u003eTransactionsReport-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:journalTransactionsReportAsHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Common",
          "name": "journalselect",
          "package": "hledger-web",
          "signature": "[(FilePath, String)] -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#journalselect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "journalselect",
          "normalized": "[(FilePath,String)]-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "signature": "[(FilePath,String)]-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:journalselect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Common",
          "name": "mixedAmountAsHtml",
          "package": "hledger-web",
          "signature": "MixedAmount -\u003e Html",
          "source": "src/Handler-Common.html#mixedAmountAsHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "mixedAmountAsHtml",
          "normalized": "MixedAmount-\u003eHtml",
          "package": "hledger-web",
          "partial": "Amount As Html",
          "signature": "MixedAmount-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:mixedAmountAsHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Common",
          "name": "nulltemplate",
          "package": "hledger-web",
          "signature": "HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#nulltemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "nulltemplate",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:nulltemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Common",
          "name": "numberTransactionsReportItems",
          "package": "hledger-web",
          "signature": "[TransactionsReportItem] -\u003e [(Int, Bool, Bool, Bool, TransactionsReportItem)]",
          "source": "src/Handler-Common.html#numberTransactionsReportItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "numberTransactionsReportItems",
          "normalized": "[TransactionsReportItem]-\u003e[(Int,Bool,Bool,Bool,TransactionsReportItem)]",
          "package": "hledger-web",
          "partial": "Transactions Report Items",
          "signature": "[TransactionsReportItem]-\u003e[(Int,Bool,Bool,Bool,TransactionsReportItem)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:numberTransactionsReportItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate javascript/html for a register balance line chart based on\n the provided \u003ca\u003eTransactionsReportItem\u003c/a\u003es.\n registerChartHtml :: forall t (t1 :: * -\u003e *) t2 t3 t4 t5.\n                      Data.Foldable.Foldable t1 =\u003e\n                      t1 (Transaction, t2, t3, t4, t5, MixedAmount)\n                      -\u003e t -\u003e Text.Blaze.Internal.HtmlM ()\n\u003c/p\u003e",
          "module": "Handler.Common",
          "name": "registerChartHtml",
          "package": "hledger-web",
          "signature": "[[TransactionsReportItem]] -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#registerChartHtml",
          "type": "function"
        },
        "index": {
          "description": "Generate javascript html for register balance line chart based on the provided TransactionsReportItem registerChartHtml forall t1 t2 t3 t4 t5 Data.Foldable.Foldable t1 t1 Transaction t2 t3 t4 t5 MixedAmount Text.Blaze.Internal.HtmlM",
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "registerChartHtml",
          "normalized": "[[TransactionsReportItem]]-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "partial": "Chart Html",
          "signature": "[[TransactionsReportItem]]-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:registerChartHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Common",
          "name": "registerItemsHtml",
          "package": "hledger-web",
          "signature": "WebOpts -\u003e ViewData -\u003e TransactionsReport -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#registerItemsHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "registerItemsHtml",
          "normalized": "WebOpts-\u003eViewData-\u003eTransactionsReport-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "partial": "Items Html",
          "signature": "WebOpts-\u003eViewData-\u003eTransactionsReport-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:registerItemsHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Common",
          "name": "registerReportHtml",
          "package": "hledger-web",
          "signature": "WebOpts -\u003e ViewData -\u003e TransactionsReport -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#registerReportHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "registerReportHtml",
          "normalized": "WebOpts-\u003eViewData-\u003eTransactionsReport-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "partial": "Report Html",
          "signature": "WebOpts-\u003eViewData-\u003eTransactionsReport-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:registerReportHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e]\n   where u' = (dest, if null q then [] else [(\u003ca\u003eq\u003c/a\u003e, pack q)])\n         style | dest == here = \u003ca\u003enavlinkcurrent\u003c/a\u003e\n               | otherwise    = \u003ca\u003enavlink\u003c/a\u003e :: Text\n\u003c/p\u003e\u003cp\u003e]\n\u003c/p\u003e\u003cp\u003eSearch form for entering custom queries to filter journal data.\n\u003c/p\u003e",
          "module": "Handler.Common",
          "name": "searchform",
          "package": "hledger-web",
          "signature": "ViewData -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#searchform",
          "type": "function"
        },
        "index": {
          "description": "where dest if null then else pack style dest here navlinkcurrent otherwise navlink Text Search form for entering custom queries to filter journal data",
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "searchform",
          "normalized": "ViewData-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "signature": "ViewData-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:searchform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sidebar used on most views.\n\u003c/p\u003e",
          "module": "Handler.Common",
          "name": "sidebar",
          "package": "hledger-web",
          "signature": "ViewData -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#sidebar",
          "type": "function"
        },
        "index": {
          "description": "The sidebar used on most views",
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "sidebar",
          "normalized": "ViewData-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "signature": "ViewData-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:sidebar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal toolbar/heading area.\n\u003c/p\u003e",
          "module": "Handler.Common",
          "name": "topbar",
          "package": "hledger-web",
          "signature": "ViewData -\u003e HtmlUrl AppRoute",
          "source": "src/Handler-Common.html#topbar",
          "type": "function"
        },
        "index": {
          "description": "Global toolbar heading area",
          "hierarchy": "Handler Common",
          "module": "Handler.Common",
          "name": "topbar",
          "normalized": "ViewData-\u003eHtmlUrl AppRoute",
          "package": "hledger-web",
          "signature": "ViewData-\u003eHtmlUrl AppRoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Common.html#v:topbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003ejournal\u003c/em\u003eedit handlers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Handler.JournalEditR",
          "name": "JournalEditR",
          "package": "hledger-web",
          "source": "src/Handler-JournalEditR.html",
          "type": "module"
        },
        "index": {
          "description": "journal edit handlers",
          "hierarchy": "Handler JournalEditR",
          "module": "Handler.JournalEditR",
          "name": "JournalEditR",
          "package": "hledger-web",
          "partial": "Journal Edit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-JournalEditR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe journal editform, no sidebar.\n\u003c/p\u003e",
          "module": "Handler.JournalEditR",
          "name": "getJournalEditR",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-JournalEditR.html#getJournalEditR",
          "type": "function"
        },
        "index": {
          "description": "The journal editform no sidebar",
          "hierarchy": "Handler JournalEditR",
          "module": "Handler.JournalEditR",
          "name": "getJournalEditR",
          "package": "hledger-web",
          "partial": "Journal Edit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-JournalEditR.html#v:getJournalEditR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.JournalEditR",
          "name": "postJournalEditR",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-JournalEditR.html#postJournalEditR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler JournalEditR",
          "module": "Handler.JournalEditR",
          "name": "postJournalEditR",
          "package": "hledger-web",
          "partial": "Journal Edit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-JournalEditR.html#v:postJournalEditR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003ejournal\u003c/em\u003eentries handlers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Handler.JournalEntriesR",
          "name": "JournalEntriesR",
          "package": "hledger-web",
          "source": "src/Handler-JournalEntriesR.html",
          "type": "module"
        },
        "index": {
          "description": "journal entries handlers",
          "hierarchy": "Handler JournalEntriesR",
          "module": "Handler.JournalEntriesR",
          "name": "JournalEntriesR",
          "package": "hledger-web",
          "partial": "Journal Entries",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-JournalEntriesR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe journal entries view, with sidebar.\n\u003c/p\u003e",
          "module": "Handler.JournalEntriesR",
          "name": "getJournalEntriesR",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-JournalEntriesR.html#getJournalEntriesR",
          "type": "function"
        },
        "index": {
          "description": "The journal entries view with sidebar",
          "hierarchy": "Handler JournalEntriesR",
          "module": "Handler.JournalEntriesR",
          "name": "getJournalEntriesR",
          "package": "hledger-web",
          "partial": "Journal Entries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-JournalEntriesR.html#v:getJournalEntriesR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.JournalEntriesR",
          "name": "postJournalEntriesR",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-JournalEntriesR.html#postJournalEntriesR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler JournalEntriesR",
          "module": "Handler.JournalEntriesR",
          "name": "postJournalEntriesR",
          "package": "hledger-web",
          "partial": "Journal Entries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-JournalEntriesR.html#v:postJournalEntriesR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e/journal handlers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Handler.JournalR",
          "name": "JournalR",
          "package": "hledger-web",
          "source": "src/Handler-JournalR.html",
          "type": "module"
        },
        "index": {
          "description": "journal handlers",
          "hierarchy": "Handler JournalR",
          "module": "Handler.JournalR",
          "name": "JournalR",
          "package": "hledger-web",
          "partial": "Journal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-JournalR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe formatted journal view, with sidebar.\n\u003c/p\u003e",
          "module": "Handler.JournalR",
          "name": "getJournalR",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-JournalR.html#getJournalR",
          "type": "function"
        },
        "index": {
          "description": "The formatted journal view with sidebar",
          "hierarchy": "Handler JournalR",
          "module": "Handler.JournalR",
          "name": "getJournalR",
          "package": "hledger-web",
          "partial": "Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-JournalR.html#v:getJournalR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.JournalR",
          "name": "postJournalR",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-JournalR.html#postJournalR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler JournalR",
          "module": "Handler.JournalR",
          "name": "postJournalR",
          "package": "hledger-web",
          "partial": "Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-JournalR.html#v:postJournalR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOST helpers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Handler.Post",
          "name": "Post",
          "package": "hledger-web",
          "source": "src/Handler-Post.html",
          "type": "module"
        },
        "index": {
          "description": "POST helpers",
          "hierarchy": "Handler Post",
          "module": "Handler.Post",
          "name": "Post",
          "package": "hledger-web",
          "partial": "Post",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Post.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle a post from the transaction add form.\n\u003c/p\u003e",
          "module": "Handler.Post",
          "name": "handleAdd",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-Post.html#handleAdd",
          "type": "function"
        },
        "index": {
          "description": "Handle post from the transaction add form",
          "hierarchy": "Handler Post",
          "module": "Handler.Post",
          "name": "handleAdd",
          "package": "hledger-web",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Post.html#v:handleAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle a post from the journal edit form.\n\u003c/p\u003e",
          "module": "Handler.Post",
          "name": "handleEdit",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-Post.html#handleEdit",
          "type": "function"
        },
        "index": {
          "description": "Handle post from the journal edit form",
          "hierarchy": "Handler Post",
          "module": "Handler.Post",
          "name": "handleEdit",
          "package": "hledger-web",
          "partial": "Edit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Post.html#v:handleEdit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle a post from the journal import form.\n\u003c/p\u003e",
          "module": "Handler.Post",
          "name": "handleImport",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-Post.html#handleImport",
          "type": "function"
        },
        "index": {
          "description": "Handle post from the journal import form",
          "hierarchy": "Handler Post",
          "module": "Handler.Post",
          "name": "handleImport",
          "package": "hledger-web",
          "partial": "Import",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Post.html#v:handleImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle a post from any of the edit forms.\n\u003c/p\u003e",
          "module": "Handler.Post",
          "name": "handlePost",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-Post.html#handlePost",
          "type": "function"
        },
        "index": {
          "description": "Handle post from any of the edit forms",
          "hierarchy": "Handler Post",
          "module": "Handler.Post",
          "name": "handlePost",
          "package": "hledger-web",
          "partial": "Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Post.html#v:handlePost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e/register handlers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Handler.RegisterR",
          "name": "RegisterR",
          "package": "hledger-web",
          "source": "src/Handler-RegisterR.html",
          "type": "module"
        },
        "index": {
          "description": "register handlers",
          "hierarchy": "Handler RegisterR",
          "module": "Handler.RegisterR",
          "name": "RegisterR",
          "package": "hledger-web",
          "partial": "Register",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-RegisterR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main journal/account register view, with accounts sidebar.\n\u003c/p\u003e",
          "module": "Handler.RegisterR",
          "name": "getRegisterR",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-RegisterR.html#getRegisterR",
          "type": "function"
        },
        "index": {
          "description": "The main journal account register view with accounts sidebar",
          "hierarchy": "Handler RegisterR",
          "module": "Handler.RegisterR",
          "name": "getRegisterR",
          "package": "hledger-web",
          "partial": "Register",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-RegisterR.html#v:getRegisterR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.RegisterR",
          "name": "postRegisterR",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-RegisterR.html#postRegisterR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler RegisterR",
          "module": "Handler.RegisterR",
          "name": "postRegisterR",
          "package": "hledger-web",
          "partial": "Register",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-RegisterR.html#v:postRegisterR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSite root and misc. handlers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Handler.RootR",
          "name": "RootR",
          "package": "hledger-web",
          "source": "src/Handler-RootR.html",
          "type": "module"
        },
        "index": {
          "description": "Site root and misc handlers",
          "hierarchy": "Handler RootR",
          "module": "Handler.RootR",
          "name": "RootR",
          "package": "hledger-web",
          "partial": "Root",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-RootR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.RootR",
          "name": "getRootR",
          "package": "hledger-web",
          "signature": "Handler RepHtml",
          "source": "src/Handler-RootR.html#getRootR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler RootR",
          "module": "Handler.RootR",
          "name": "getRootR",
          "package": "hledger-web",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-RootR.html#v:getRootR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWeb handler utilities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Handler.Utils",
          "name": "Utils",
          "package": "hledger-web",
          "source": "src/Handler-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Web handler utilities",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "Utils",
          "package": "hledger-web",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bundle of data useful for hledger-web request handlers and templates.\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "ViewData",
          "package": "hledger-web",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "data"
        },
        "index": {
          "description": "bundle of data useful for hledger-web request handlers and templates",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "ViewData",
          "package": "hledger-web",
          "partial": "View Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#t:ViewData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Utils",
          "name": "VD",
          "package": "hledger-web",
          "signature": "VD",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "VD",
          "package": "hledger-web",
          "partial": "VD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:VD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea query parsed from the accounts sidebar query expr (\u003ca\u003ea\u003c/a\u003e parameter)\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "am",
          "package": "hledger-web",
          "signature": "Query",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "function"
        },
        "index": {
          "description": "query parsed from the accounts sidebar query expr parameter",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "am",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:am"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equery options parsed from the accounts sidebar query expr\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "aopts",
          "package": "hledger-web",
          "signature": "[QueryOpt]",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "function"
        },
        "index": {
          "description": "query options parsed from the accounts sidebar query expr",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "aopts",
          "normalized": "[QueryOpt]",
          "package": "hledger-web",
          "signature": "[QueryOpt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:aopts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Utils",
          "name": "chomp",
          "package": "hledger-web",
          "signature": "String -\u003e String",
          "source": "src/Handler-Utils.html#chomp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "chomp",
          "normalized": "String-\u003eString",
          "package": "hledger-web",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:chomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Utils",
          "name": "dayToJsTimestamp",
          "package": "hledger-web",
          "signature": "Day -\u003e Integer",
          "source": "src/Handler-Utils.html#dayToJsTimestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "dayToJsTimestamp",
          "normalized": "Day-\u003eInteger",
          "package": "hledger-web",
          "partial": "To Js Timestamp",
          "signature": "Day-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:dayToJsTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the message set by the last request, or the newer message provided, if any.\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "getMessageOr",
          "package": "hledger-web",
          "signature": "Maybe String -\u003e Handler (Maybe Html)",
          "source": "src/Handler-Utils.html#getMessageOr",
          "type": "function"
        },
        "index": {
          "description": "Get the message set by the last request or the newer message provided if any",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "getMessageOr",
          "normalized": "Maybe String-\u003eHandler(Maybe Html)",
          "package": "hledger-web",
          "partial": "Message Or",
          "signature": "Maybe String-\u003eHandler(Maybe Html)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:getMessageOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGather data used by handlers and templates in the current request.\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "getViewData",
          "package": "hledger-web",
          "signature": "Handler ViewData",
          "source": "src/Handler-Utils.html#getViewData",
          "type": "function"
        },
        "index": {
          "description": "Gather data used by handlers and templates in the current request",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "getViewData",
          "package": "hledger-web",
          "partial": "View Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:getViewData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current route\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "here",
          "package": "hledger-web",
          "signature": "AppRoute",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "function"
        },
        "index": {
          "description": "the current route",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "here",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:here"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe up-to-date parsed unfiltered journal\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "j",
          "package": "hledger-web",
          "signature": "Journal",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "function"
        },
        "index": {
          "description": "the up-to-date parsed unfiltered journal",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "j",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:j"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea query parsed from the q parameter\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "m",
          "package": "hledger-web",
          "signature": "Query",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "function"
        },
        "index": {
          "description": "query parsed from the parameter",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "m",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current UI message if any, possibly from the current request\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "msg",
          "package": "hledger-web",
          "signature": "Maybe Html",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "function"
        },
        "index": {
          "description": "the current UI message if any possibly from the current request",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "msg",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:msg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a default ViewData, using day 0 as today's date.\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "nullviewdata",
          "package": "hledger-web",
          "signature": "ViewData",
          "source": "src/Handler-Utils.html#nullviewdata",
          "type": "function"
        },
        "index": {
          "description": "Make default ViewData using day as today date",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "nullviewdata",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:nullviewdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Handler.Utils",
          "name": "numbered",
          "package": "hledger-web",
          "signature": "[a] -\u003e [(Int, a)]",
          "source": "src/Handler-Utils.html#numbered",
          "type": "function"
        },
        "index": {
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "numbered",
          "normalized": "[a]-\u003e[(Int,a)]",
          "package": "hledger-web",
          "signature": "[a]-\u003e[(Int,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:numbered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe command-line options at startup\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "opts",
          "package": "hledger-web",
          "signature": "WebOpts",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "function"
        },
        "index": {
          "description": "the command-line options at startup",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "opts",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:opts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current q parameter, the main query expression\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "q",
          "package": "hledger-web",
          "signature": "String",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "function"
        },
        "index": {
          "description": "the current parameter the main query expression",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "q",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equery options parsed from the q parameter\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "qopts",
          "package": "hledger-web",
          "signature": "[QueryOpt]",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "function"
        },
        "index": {
          "description": "query options parsed from the parameter",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "qopts",
          "normalized": "[QueryOpt]",
          "package": "hledger-web",
          "signature": "[QueryOpt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:qopts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrent p parameter, 1 or 0 shows/hides all postings where applicable\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "showpostings",
          "package": "hledger-web",
          "signature": "Bool",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "function"
        },
        "index": {
          "description": "current parameter or shows hides all postings where applicable",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "showpostings",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:showpostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etoday's date (for queries containing relative dates)\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "today",
          "package": "hledger-web",
          "signature": "Day",
          "source": "src/Handler-Utils.html#ViewData",
          "type": "function"
        },
        "index": {
          "description": "today date for queries containing relative dates",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "today",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:today"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a ViewData using the given date and request parameters, and defaults elsewhere.\n\u003c/p\u003e",
          "module": "Handler.Utils",
          "name": "viewdataWithDateAndParams",
          "package": "hledger-web",
          "signature": "Day -\u003e String -\u003e String -\u003e String -\u003e ViewData",
          "source": "src/Handler-Utils.html#viewdataWithDateAndParams",
          "type": "function"
        },
        "index": {
          "description": "Make ViewData using the given date and request parameters and defaults elsewhere",
          "hierarchy": "Handler Utils",
          "module": "Handler.Utils",
          "name": "viewdataWithDateAndParams",
          "normalized": "Day-\u003eString-\u003eString-\u003eString-\u003eViewData",
          "package": "hledger-web",
          "partial": "With Date And Params",
          "signature": "Day-\u003eString-\u003eString-\u003eString-\u003eViewData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Handler-Utils.html#v:viewdataWithDateAndParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Import",
          "name": "Import",
          "package": "hledger-web",
          "source": "src/Import.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Import",
          "module": "Import",
          "name": "Import",
          "package": "hledger-web",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.Development",
          "name": "Development",
          "package": "hledger-web",
          "source": "src/Settings-Development.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Settings Development",
          "module": "Settings.Development",
          "name": "Development",
          "package": "hledger-web",
          "partial": "Development",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-Development.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.Development",
          "name": "development",
          "package": "hledger-web",
          "signature": "Bool",
          "source": "src/Settings-Development.html#development",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings Development",
          "module": "Settings.Development",
          "name": "development",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-Development.html#v:development"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.Development",
          "name": "production",
          "package": "hledger-web",
          "signature": "Bool",
          "source": "src/Settings-Development.html#production",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings Development",
          "module": "Settings.Development",
          "name": "production",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-Development.html#v:production"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "StaticFiles",
          "package": "hledger-web",
          "source": "src/Settings-StaticFiles.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "StaticFiles",
          "package": "hledger-web",
          "partial": "Static Files",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "css_bootstrap_css",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#css_bootstrap_css",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "css_bootstrap_css",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:css_bootstrap_css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "excanvas_js",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#excanvas_js",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "excanvas_js",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:excanvas_js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "excanvas_min_js",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#excanvas_min_js",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "excanvas_min_js",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:excanvas_min_js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "favicon_ico",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#favicon_ico",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "favicon_ico",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:favicon_ico"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "hledger_js",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#hledger_js",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "hledger_js",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:hledger_js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "img_glyphicons_halflings_png",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#img_glyphicons_halflings_png",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "img_glyphicons_halflings_png",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:img_glyphicons_halflings_png"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "img_glyphicons_halflings_white_png",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#img_glyphicons_halflings_white_png",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "img_glyphicons_halflings_white_png",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:img_glyphicons_halflings_white_png"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "jquery_flot_js",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#jquery_flot_js",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "jquery_flot_js",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:jquery_flot_js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "jquery_flot_min_js",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#jquery_flot_min_js",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "jquery_flot_min_js",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:jquery_flot_min_js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "jquery_js",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#jquery_js",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "jquery_js",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:jquery_js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "jquery_min_js",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#jquery_min_js",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "jquery_min_js",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:jquery_min_js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "jquery_url_js",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#jquery_url_js",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "jquery_url_js",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:jquery_url_js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "select2_css",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#select2_css",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "select2_css",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:select2_css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "select2_js",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#select2_js",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "select2_js",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:select2_js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "select2_min_js",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#select2_min_js",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "select2_min_js",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:select2_min_js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "select2_png",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#select2_png",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "select2_png",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:select2_png"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "select2_spinner_gif",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#select2_spinner_gif",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "select2_spinner_gif",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:select2_spinner_gif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse this to create your static file serving site\n staticSite :: IO Static.Static\n staticSite = if development then Static.staticDevel staticDir\n                             else Static.static      staticDir\n\u003c/p\u003e\u003cp\u003e| This generates easy references to files in the static directory at compile time,\n   giving you compile-time verification that referenced files exist.\n   Warning: any files added to your static directory during run-time can't be\n   accessed this way. You'll have to use their FilePath or URL to access them.\n $(staticFiles Settings.staticDir)\n\u003c/p\u003e",
          "module": "Settings.StaticFiles",
          "name": "staticSite",
          "package": "hledger-web",
          "signature": "IO Static",
          "source": "src/Settings-StaticFiles.html#staticSite",
          "type": "function"
        },
        "index": {
          "description": "use this to create your static file serving site staticSite IO Static.Static staticSite if development then Static.staticDevel staticDir else Static.static staticDir This generates easy references to files in the static directory at compile time giving you compile-time verification that referenced files exist Warning any files added to your static directory during run-time can be accessed this way You ll have to use their FilePath or URL to access them staticFiles Settings.staticDir",
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "staticSite",
          "package": "hledger-web",
          "partial": "Site",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:staticSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings.StaticFiles",
          "name": "style_css",
          "package": "hledger-web",
          "signature": "StaticRoute",
          "source": "src/Settings-StaticFiles.html#style_css",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings StaticFiles",
          "module": "Settings.StaticFiles",
          "name": "style_css",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings-StaticFiles.html#v:style_css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSettings are centralized, as much as possible, into this file. This\n includes database connection settings, static file locations, etc.\n In addition, you can configure a number of different aspects of Yesod\n by overriding methods in the Yesod typeclass. That instance is\n declared in the Foundation.hs file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Settings",
          "name": "Settings",
          "package": "hledger-web",
          "source": "src/Settings.html",
          "type": "module"
        },
        "index": {
          "description": "Settings are centralized as much as possible into this file This includes database connection settings static file locations etc In addition you can configure number of different aspects of Yesod by overriding methods in the Yesod typeclass That instance is declared in the Foundation.hs file",
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "Settings",
          "package": "hledger-web",
          "partial": "Settings",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings",
          "name": "Extra",
          "package": "hledger-web",
          "source": "src/Settings.html#Extra",
          "type": "data"
        },
        "index": {
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "Extra",
          "package": "hledger-web",
          "partial": "Extra",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#t:Extra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings",
          "name": "Extra",
          "package": "hledger-web",
          "signature": "Extra",
          "source": "src/Settings.html#Extra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "Extra",
          "package": "hledger-web",
          "partial": "Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:Extra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings",
          "name": "defbaseurl",
          "package": "hledger-web",
          "signature": "Int -\u003e String",
          "source": "src/Settings.html#defbaseurl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "defbaseurl",
          "normalized": "Int-\u003eString",
          "package": "hledger-web",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:defbaseurl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default TCP port to listen on. May be overridden with --port.\n\u003c/p\u003e",
          "module": "Settings",
          "name": "defport",
          "package": "hledger-web",
          "signature": "Int",
          "source": "src/Settings.html#defport",
          "type": "function"
        },
        "index": {
          "description": "The default TCP port to listen on May be overridden with port",
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "defport",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:defport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGoogle Analytics\n\u003c/p\u003e",
          "module": "Settings",
          "name": "extraAnalytics",
          "package": "hledger-web",
          "signature": "Maybe Text",
          "source": "src/Settings.html#Extra",
          "type": "function"
        },
        "index": {
          "description": "Google Analytics",
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "extraAnalytics",
          "package": "hledger-web",
          "partial": "Analytics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:extraAnalytics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings",
          "name": "extraCopyright",
          "package": "hledger-web",
          "signature": "Text",
          "source": "src/Settings.html#Extra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "extraCopyright",
          "package": "hledger-web",
          "partial": "Copyright",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:extraCopyright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings",
          "name": "extraStaticRoot",
          "package": "hledger-web",
          "signature": "Maybe Text",
          "source": "src/Settings.html#Extra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "extraStaticRoot",
          "package": "hledger-web",
          "partial": "Static Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:extraStaticRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings",
          "name": "hledgerorgurl",
          "package": "hledger-web",
          "signature": "String",
          "source": "src/Settings.html#hledgerorgurl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "hledgerorgurl",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:hledgerorgurl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings",
          "name": "manualurl",
          "package": "hledger-web",
          "signature": "String",
          "source": "src/Settings.html#manualurl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "manualurl",
          "package": "hledger-web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:manualurl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings",
          "name": "parseExtra",
          "package": "hledger-web",
          "signature": "DefaultEnv -\u003e Object -\u003e Parser Extra",
          "source": "src/Settings.html#parseExtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "parseExtra",
          "normalized": "DefaultEnv-\u003eObject-\u003eParser Extra",
          "package": "hledger-web",
          "partial": "Extra",
          "signature": "DefaultEnv-\u003eObject-\u003eParser Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:parseExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe location of static files on your system. This is a file system\n path. The default value works properly with your scaffolded site.\n\u003c/p\u003e",
          "module": "Settings",
          "name": "staticDir",
          "package": "hledger-web",
          "signature": "FilePath",
          "source": "src/Settings.html#staticDir",
          "type": "function"
        },
        "index": {
          "description": "The location of static files on your system This is file system path The default value works properly with your scaffolded site",
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "staticDir",
          "package": "hledger-web",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:staticDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe base URL for your static files. As you can see by the default\n value, this can simply be \u003ca\u003estatic\u003c/a\u003e appended to your application root.\n A powerful optimization can be serving static files from a separate\n domain name. This allows you to use a web server optimized for static\n files, more easily set expires and cache values, and avoid possibly\n costly transference of cookies on static files. For more information,\n please see:\n   http:\u003cem/\u003ecode.google.com\u003cem\u003espeed\u003c/em\u003epage-speed\u003cem\u003edocs\u003c/em\u003erequest.html#ServeFromCookielessDomain\n\u003c/p\u003e\u003cp\u003eIf you change the resource pattern for StaticR in Foundation.hs, you will\n have to make a corresponding change here.\n\u003c/p\u003e\u003cp\u003eTo see how this value is used, see urlRenderOverride in Foundation.hs\n\u003c/p\u003e",
          "module": "Settings",
          "name": "staticRoot",
          "package": "hledger-web",
          "signature": "AppConfig DefaultEnv Extra -\u003e Text",
          "source": "src/Settings.html#staticRoot",
          "type": "function"
        },
        "index": {
          "description": "The base URL for your static files As you can see by the default value this can simply be static appended to your application root powerful optimization can be serving static files from separate domain name This allows you to use web server optimized for static files more easily set expires and cache values and avoid possibly costly transference of cookies on static files For more information please see http code.google.com speed page-speed docs request.html ServeFromCookielessDomain If you change the resource pattern for StaticR in Foundation.hs you will have to make corresponding change here To see how this value is used see urlRenderOverride in Foundation.hs",
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "staticRoot",
          "normalized": "AppConfig DefaultEnv Extra-\u003eText",
          "package": "hledger-web",
          "partial": "Root",
          "signature": "AppConfig DefaultEnv Extra-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:staticRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Settings",
          "name": "widgetFile",
          "package": "hledger-web",
          "signature": "String -\u003e Q Exp",
          "source": "src/Settings.html#widgetFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "widgetFile",
          "normalized": "String-\u003eQ Exp",
          "package": "hledger-web",
          "partial": "File",
          "signature": "String-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:widgetFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSettings for \u003ccode\u003e\u003ca\u003ewidgetFile\u003c/a\u003e\u003c/code\u003e, such as which template languages to support and\n default Hamlet settings.\n\u003c/p\u003e",
          "module": "Settings",
          "name": "widgetFileSettings",
          "package": "hledger-web",
          "signature": "WidgetFileSettings",
          "source": "src/Settings.html#widgetFileSettings",
          "type": "function"
        },
        "index": {
          "description": "Settings for widgetFile such as which template languages to support and default Hamlet settings",
          "hierarchy": "Settings",
          "module": "Settings",
          "name": "widgetFileSettings",
          "package": "hledger-web",
          "partial": "File Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-web/docs/Settings.html#v:widgetFileSettings"
      }
    }
  ]
]