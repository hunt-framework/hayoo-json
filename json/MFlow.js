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
        "word": "MFlow"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Cookies",
          "name": "Cookies",
          "package": "MFlow",
          "source": "src/MFlow-Cookies.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MFlow Cookies",
          "module": "MFlow.Cookies",
          "name": "Cookies",
          "package": "MFlow",
          "partial": "Cookies",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Cookies.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Cookies",
          "name": "Cookie",
          "package": "MFlow",
          "source": "src/MFlow-Cookies.html#Cookie",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow Cookies",
          "module": "MFlow.Cookies",
          "name": "Cookie",
          "package": "MFlow",
          "partial": "Cookie",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Cookies.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Cookies",
          "name": "contentHtml",
          "package": "MFlow",
          "signature": "(ByteString, ByteString)",
          "source": "src/MFlow-Cookies.html#contentHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Cookies",
          "module": "MFlow.Cookies",
          "name": "contentHtml",
          "normalized": "(ByteString,ByteString)",
          "package": "MFlow",
          "partial": "Html",
          "signature": "(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Cookies.html#v:contentHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Cookies",
          "name": "cookieHeaders",
          "package": "MFlow",
          "signature": "[Cookie] -\u003e [(t, ByteString)]",
          "source": "src/MFlow-Cookies.html#cookieHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Cookies",
          "module": "MFlow.Cookies",
          "name": "cookieHeaders",
          "normalized": "[Cookie]-\u003e[(a,ByteString)]",
          "package": "MFlow",
          "partial": "Headers",
          "signature": "[Cookie]-\u003e[(t,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Cookies.html#v:cookieHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Cookies",
          "name": "cookieuser",
          "package": "MFlow",
          "signature": "String",
          "source": "src/MFlow-Cookies.html#cookieuser",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Cookies",
          "module": "MFlow.Cookies",
          "name": "cookieuser",
          "package": "MFlow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Cookies.html#v:cookieuser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Cookies",
          "name": "getCookies",
          "package": "MFlow",
          "signature": "[(a, ByteString)] -\u003e [(ByteString, ByteString)]",
          "source": "src/MFlow-Cookies.html#getCookies",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Cookies",
          "module": "MFlow.Cookies",
          "name": "getCookies",
          "normalized": "[(a,ByteString)]-\u003e[(ByteString,ByteString)]",
          "package": "MFlow",
          "partial": "Cookies",
          "signature": "[(a,ByteString)]-\u003e[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Cookies.html#v:getCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Admin",
          "name": "Admin",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Admin.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MFlow Forms Admin",
          "module": "MFlow.Forms.Admin",
          "name": "Admin",
          "package": "MFlow",
          "partial": "Admin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Admin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall the admin flow in the list of flows handled by \u003ccode\u003eHackMessageFlow\u003c/code\u003e\n this gives access to an administrator page. It is necessary to\n create an admin user with \u003ccode\u003e\u003ca\u003esetAdminUser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe administration page is reached with the path \"adminserv\"\n\u003c/p\u003e",
          "module": "MFlow.Forms.Admin",
          "name": "addAdminWF",
          "package": "MFlow",
          "signature": "IO ()",
          "source": "src/MFlow-Forms-Admin.html#addAdminWF",
          "type": "function"
        },
        "index": {
          "description": "Install the admin flow in the list of flows handled by HackMessageFlow this gives access to an administrator page It is necessary to create an admin user with setAdminUser The administration page is reached with the path adminserv",
          "hierarchy": "MFlow Forms Admin",
          "module": "MFlow.Forms.Admin",
          "name": "addAdminWF",
          "normalized": "IO()",
          "package": "MFlow",
          "partial": "Admin WF",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Admin.html#v:addAdminWF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA small console interpreter with some commands:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003esync\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Synchronize the cache with persistent storage (see \u003ccode\u003e\u003ca\u003esyncCache\u003c/a\u003e\u003c/code\u003e)\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eflush\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Flush the cache\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eend\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Synchronize and exit\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eabort\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Exit. Do not synchronize\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eon exception, for example Control-c, it sync and exits.\n It must be used as the last statement of the main procedure.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Admin",
          "name": "adminLoop",
          "package": "MFlow",
          "signature": "IO ()",
          "source": "src/MFlow-Forms-Admin.html#adminLoop",
          "type": "function"
        },
        "index": {
          "description": "small console interpreter with some commands sync Synchronize the cache with persistent storage see syncCache flush Flush the cache end Synchronize and exit abort Exit Do not synchronize on exception for example Control-c it sync and exits It must be used as the last statement of the main procedure",
          "hierarchy": "MFlow Forms Admin",
          "module": "MFlow.Forms.Admin",
          "name": "adminLoop",
          "normalized": "IO()",
          "package": "MFlow",
          "partial": "Loop",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Admin.html#v:adminLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexecute the process and wait for its finalization.\n  then it synchronizes the cache\n\u003c/p\u003e",
          "module": "MFlow.Forms.Admin",
          "name": "wait",
          "package": "MFlow",
          "signature": "IO a -\u003e IO Bool",
          "source": "src/MFlow-Forms-Admin.html#wait",
          "type": "function"
        },
        "index": {
          "description": "execute the process and wait for its finalization then it synchronizes the cache",
          "hierarchy": "MFlow Forms Admin",
          "module": "MFlow.Forms.Admin",
          "name": "wait",
          "normalized": "IO a-\u003eIO Bool",
          "package": "MFlow",
          "signature": "IO a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Admin.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstantiation of the \u003ccode\u003e\u003ca\u003eFormInput\u003c/a\u003e\u003c/code\u003e class for blaze-html \u003ca\u003ehttp://hackage.haskell.org/package/blaze-html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis package is included in \u003ca\u003eMFlow.Wai.Blaze.Hml.All\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eUse it to create applicaitons with this kind of formatting.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MFlow.Forms.Blaze.Html",
          "name": "Html",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Blaze-Html.html",
          "type": "module"
        },
        "index": {
          "description": "Instantiation of the FormInput class for blaze-html http hackage.haskell.org package blaze-html This package is included in MFlow.Wai.Blaze.Hml.All Use it to create applicaitons with this kind of formatting",
          "hierarchy": "MFlow Forms Blaze Html",
          "module": "MFlow.Forms.Blaze.Html",
          "name": "Html",
          "package": "MFlow",
          "partial": "Html",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Blaze-Html.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused to insert html elements within a tag with the appropriate infix priority for the\n other operators used in MFlow. Also it can be used for adding markup to\n widgets with this signature such are \u003ccode\u003e\u003ca\u003ewlink\u003c/a\u003e\u003c/code\u003e ad \u003ccode\u003e\u003ca\u003esetOption\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms.Blaze.Html",
          "name": "(\u003c\u003c)",
          "package": "MFlow",
          "signature": "(Markup -\u003e t) -\u003e a -\u003e t",
          "source": "src/MFlow-Forms-Blaze-Html.html#%3C%3C",
          "type": "function"
        },
        "index": {
          "description": "used to insert html elements within tag with the appropriate infix priority for the other operators used in MFlow Also it can be used for adding markup to widgets with this signature such are wlink ad setOption",
          "hierarchy": "MFlow Forms Blaze Html",
          "module": "MFlow.Forms.Blaze.Html",
          "name": "(\u003c\u003c) \u003c\u003c",
          "normalized": "(Markup-\u003ea)-\u003eb-\u003ea",
          "package": "MFlow",
          "signature": "(Markup-\u003et)-\u003ea-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Blaze-Html.html#v:-60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Internals",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Internals",
          "package": "MFlow",
          "partial": "Internals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Checked",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#Checked",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Checked",
          "package": "MFlow",
          "partial": "Checked",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:Checked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "FailBack",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#FailBack",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "FailBack",
          "package": "MFlow",
          "partial": "Fail Back",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:FailBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe FlowM monad executes the page navigation. It perform Backtracking when necessary to syncronize\n when the user press the back button or when the user enter an arbitrary URL. The instruction pointer\n is moved to the right position within the procedure to handle the request.\n\u003c/p\u003e\u003cp\u003eHowever this is transparent to the programmer, who codify in the style of a console application.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Internals",
          "name": "FlowM",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#FlowM",
          "type": "newtype"
        },
        "index": {
          "description": "the FlowM monad executes the page navigation It perform Backtracking when necessary to syncronize when the user press the back button or when the user enter an arbitrary URL The instruction pointer is moved to the right position within the procedure to handle the request However this is transparent to the programmer who codify in the style of console application",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "FlowM",
          "package": "MFlow",
          "partial": "Flow",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:FlowM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "FlowMM",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#FlowMM",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "FlowMM",
          "package": "MFlow",
          "partial": "Flow MM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:FlowMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "FormElm",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#FormElm",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "FormElm",
          "package": "MFlow",
          "partial": "Form Elm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:FormElm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "FormInput",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#FormInput",
          "type": "class"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "FormInput",
          "package": "MFlow",
          "partial": "Form Input",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:FormInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Lang",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#Lang",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Lang",
          "package": "MFlow",
          "partial": "Lang",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:Lang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "MFlowState",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "MFlowState",
          "package": "MFlow",
          "partial": "MFlow State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:MFlowState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Name",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Name",
          "package": "MFlow",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "OnClick",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#OnClick",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "OnClick",
          "package": "MFlow",
          "partial": "On Click",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:OnClick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "ParamResult",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#ParamResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "ParamResult",
          "package": "MFlow",
          "partial": "Param Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:ParamResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Requirement",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#Requirement",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Requirement",
          "package": "MFlow",
          "partial": "Requirement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:Requirement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Requirements",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#Requirements",
          "type": "class"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Requirements",
          "package": "MFlow",
          "partial": "Requirements",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:Requirements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Sup",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#Sup",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Sup",
          "package": "MFlow",
          "partial": "Sup",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:Sup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Supervise",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#Supervise",
          "type": "class"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Supervise",
          "package": "MFlow",
          "partial": "Supervise",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:Supervise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Type",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#Type",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Type",
          "package": "MFlow",
          "partial": "Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Value",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#Value",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Value",
          "package": "MFlow",
          "partial": "Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eView v m a\u003c/code\u003e is a widget (formlet)  with formatting \u003ccode\u003ev\u003c/code\u003e  running the monad \u003ccode\u003em\u003c/code\u003e (usually \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e) and which return a value of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIt has \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003cp\u003eThings to know about these instances:\n\u003c/p\u003e\u003cp\u003eIf the View expression does not validate, ask will present the page again.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAlternative instance\u003c/em\u003e: Both alternatives are executed. The rest is as usual\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eMonad Instance\u003c/em\u003e:\n\u003c/p\u003e\u003cp\u003eThe rendering of each statement is added to the previous. If you want to avoid this, use \u003ccode\u003e\u003ca\u003ewcallback\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe execution is stopped when the statement has a formlet-widget that does not validate and\n return an invalid response (So it will present the page again if no other widget in the expression validates).\n\u003c/p\u003e\u003cp\u003eThe monadic code is executed from the beginning each time the page is presented or refreshed\n\u003c/p\u003e\u003cp\u003euse \u003ccode\u003epageFlow\u003c/code\u003e if your page has more than one monadic computation with dynamic behaviour\n\u003c/p\u003e\u003cp\u003euse \u003ccode\u003epageFlow\u003c/code\u003e to identify each subflow branch of a conditional\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e pageFlow \"myid\" $ do\n      r \u003c- formlet1\n      liftIO $ ioaction1 r\n      s \u003c- formlet2\n      liftIO $ ioaction2 s\n      case s of\n       True  -\u003e pageFlow \"idtrue\" $ do ....\n       False -\u003e paeFlow \"idfalse\" $ do ...\n      ...\n\u003c/pre\u003e\u003cp\u003eHere if  \u003ccode\u003eformlet2\u003c/code\u003e do not validate, \u003ccode\u003eioaction2\u003c/code\u003e is not executed. But if \u003ccode\u003eformLet1\u003c/code\u003e validates and the\n  page is refreshed two times (because \u003ccode\u003eformlet2\u003c/code\u003e has failed, see above),then \u003ccode\u003eioaction1\u003c/code\u003e is executed two times.\n  use \u003ccode\u003e\u003ca\u003ecachedByKey\u003c/a\u003e\u003c/code\u003e if you want to avoid repeated IO executions.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Internals",
          "name": "View",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#View",
          "type": "newtype"
        },
        "index": {
          "description": "View is widget formlet with formatting running the monad usually IO and which return value of type It has Applicative Alternative and Monad instances Things to know about these instances If the View expression does not validate ask will present the page again Alternative instance Both alternatives are executed The rest is as usual Monad Instance The rendering of each statement is added to the previous If you want to avoid this use wcallback The execution is stopped when the statement has formlet-widget that does not validate and return an invalid response So it will present the page again if no other widget in the expression validates The monadic code is executed from the beginning each time the page is presented or refreshed use pageFlow if your page has more than one monadic computation with dynamic behaviour use pageFlow to identify each subflow branch of conditional For example pageFlow myid do formlet1 liftIO ioaction1 formlet2 liftIO ioaction2 case of True pageFlow idtrue do False paeFlow idfalse do Here if formlet2 do not validate ioaction2 is not executed But if formLet1 validates and the page is refreshed two times because formlet2 has failed see above then ioaction1 is executed two times use cachedByKey if you want to avoid repeated IO executions",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "View",
          "package": "MFlow",
          "partial": "View",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Void",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#Void",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Void",
          "package": "MFlow",
          "partial": "Void",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "WState",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#WState",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "WState",
          "package": "MFlow",
          "partial": "WState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:WState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "WebRequirement",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#WebRequirement",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "WebRequirement",
          "package": "MFlow",
          "partial": "Web Requirement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#t:WebRequirement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "BackPoint",
          "package": "MFlow",
          "signature": "BackPoint a",
          "source": "src/MFlow-Forms-Internals.html#FailBack",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "BackPoint",
          "package": "MFlow",
          "partial": "Back Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:BackPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea String with a CSS description\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "CSS",
          "package": "MFlow",
          "signature": "CSS String",
          "source": "src/MFlow-Forms-Internals.html#WebRequirement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:CSS\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:CSS\"]"
        },
        "index": {
          "description": "String with CSS description",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "CSS",
          "package": "MFlow",
          "partial": "CSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:CSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea CSS file URL\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "CSSFile",
          "package": "MFlow",
          "signature": "CSSFile String",
          "source": "src/MFlow-Forms-Internals.html#WebRequirement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:CSSFile\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:CSSFile\"]"
        },
        "index": {
          "description": "CSS file URL",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "CSSFile",
          "package": "MFlow",
          "partial": "CSSFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:CSSFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "FlowM",
          "package": "MFlow",
          "signature": "FlowM",
          "source": "src/MFlow-Forms-Internals.html#FlowM",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "FlowM",
          "package": "MFlow",
          "partial": "Flow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:FlowM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "FormElm",
          "package": "MFlow",
          "signature": "FormElm [view] (Maybe a)",
          "source": "src/MFlow-Forms-Internals.html#FormElm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:FormElm\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:FormElm\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "FormElm",
          "normalized": "FormElm[a](Maybe b)",
          "package": "MFlow",
          "partial": "Form Elm",
          "signature": "FormElm[view](Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:FormElm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "GoBack",
          "package": "MFlow",
          "signature": "GoBack",
          "source": "src/MFlow-Forms-Internals.html#FailBack",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "GoBack",
          "package": "MFlow",
          "partial": "Go Back",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:GoBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea string with a valid JavaScript\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "JScript",
          "package": "MFlow",
          "signature": "JScript String",
          "source": "src/MFlow-Forms-Internals.html#WebRequirement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:JScript\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:JScript\"]"
        },
        "index": {
          "description": "string with valid JavaScript",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "JScript",
          "package": "MFlow",
          "partial": "JScript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:JScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScript URL and the list of scripts to be executed when loaded\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "JScriptFile",
          "package": "MFlow",
          "signature": "JScriptFile String [String]",
          "source": "src/MFlow-Forms-Internals.html#WebRequirement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:JScriptFile\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:JScriptFile\"]"
        },
        "index": {
          "description": "Script URL and the list of scripts to be executed when loaded",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "JScriptFile",
          "normalized": "JScriptFile String[String]",
          "package": "MFlow",
          "partial": "JScript File",
          "signature": "JScriptFile String[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:JScriptFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "MFlowState",
          "package": "MFlow",
          "signature": "MFlowState",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "MFlowState",
          "package": "MFlow",
          "partial": "MFlow State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:MFlowState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "NoBack",
          "package": "MFlow",
          "signature": "NoBack a",
          "source": "src/MFlow-Forms-Internals.html#FailBack",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "NoBack",
          "package": "MFlow",
          "partial": "No Back",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:NoBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "NoParam",
          "package": "MFlow",
          "signature": "NoParam",
          "source": "src/MFlow-Forms-Internals.html#ParamResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "NoParam",
          "package": "MFlow",
          "partial": "No Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:NoParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "NotValidated",
          "package": "MFlow",
          "signature": "NotValidated String v",
          "source": "src/MFlow-Forms-Internals.html#ParamResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "NotValidated",
          "package": "MFlow",
          "partial": "Not Validated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:NotValidated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Requirement",
          "package": "MFlow",
          "signature": "Requirement a",
          "source": "src/MFlow-Forms-Internals.html#Requirement",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Requirement",
          "package": "MFlow",
          "partial": "Requirement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:Requirement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea server procedure\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "ServerProc",
          "package": "MFlow",
          "signature": "ServerProc (String, Flow)",
          "source": "src/MFlow-Forms-Internals.html#WebRequirement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:ServerProc\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:ServerProc\"]"
        },
        "index": {
          "description": "server procedure",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "ServerProc",
          "normalized": "ServerProc(String,Flow)",
          "package": "MFlow",
          "partial": "Server Proc",
          "signature": "ServerProc(String,Flow)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:ServerProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Sup",
          "package": "MFlow",
          "signature": "Sup",
          "source": "src/MFlow-Forms-Internals.html#Sup",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Sup",
          "package": "MFlow",
          "partial": "Sup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:Sup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "Validated",
          "package": "MFlow",
          "signature": "Validated a",
          "source": "src/MFlow-Forms-Internals.html#ParamResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "Validated",
          "package": "MFlow",
          "partial": "Validated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:Validated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "View",
          "package": "MFlow",
          "signature": "View",
          "source": "src/MFlow-Forms-Internals.html#View",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:View\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:View\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "View",
          "package": "MFlow",
          "partial": "View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd another header embedded in the previous one\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "addHeader",
          "package": "MFlow",
          "signature": "(view -\u003e view) -\u003e FlowM view m ()",
          "source": "src/MFlow-Forms-Internals.html#addHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:addHeader\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:addHeader\"]"
        },
        "index": {
          "description": "Add another header embedded in the previous one",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "addHeader",
          "normalized": "(a-\u003ea)-\u003eFlowM a b()",
          "package": "MFlow",
          "partial": "Header",
          "signature": "(view-\u003eview)-\u003eFlowM view m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:addHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "ajaxScript",
          "package": "MFlow",
          "signature": "[Char]",
          "source": "src/MFlow-Forms-Internals.html#ajaxScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "ajaxScript",
          "normalized": "[Char]",
          "package": "MFlow",
          "partial": "Script",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:ajaxScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "attrs",
          "package": "MFlow",
          "signature": "view -\u003e Attribs -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#attrs",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "attrs",
          "normalized": "a-\u003eAttribs-\u003ea",
          "package": "MFlow",
          "signature": "view-\u003eAttribs-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:attrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this instead of return to return from a computation with ask statements\n\u003c/p\u003e\u003cp\u003eThis way when the user press the back button, the computation will execute back, to\n the returned code, according with the user navigation.\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "breturn",
          "package": "MFlow",
          "signature": "a -\u003e FlowM v m a",
          "source": "src/MFlow-Forms-Internals.html#breturn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:breturn\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:breturn\"]"
        },
        "index": {
          "description": "Use this instead of return to return from computation with ask statements This way when the user press the back button the computation will execute back to the returned code according with the user navigation",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "breturn",
          "normalized": "a-\u003eFlowM b c a",
          "package": "MFlow",
          "signature": "a-\u003eFlowM v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:breturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCached widgets operate with widgets in the Identity monad, but they may perform IO using the execute instance\n of the monad m, which is usually the IO monad. execute basically \"sanctifies\" the use of unsafePerformIO for a transient purpose\n such is caching. This is defined in \u003ca\u003eData.TCache.Memoization\u003c/a\u003e. The programmer can create his\n own instance for his monad.\n\u003c/p\u003e\u003cp\u003eWith \u003ccode\u003e\u003ca\u003ecachedWidget\u003c/a\u003e\u003c/code\u003e it is possible to cache the rendering of a widget as a ByteString (maintaining type safety)\n, permanently or for a certain time. this is very useful for complex widgets that present information. Specially it they must access to databases.\n\u003c/p\u003e\u003cpre\u003e\n import MFlow.Wai.Blaze.Html.All\n import Some.Time.Library\n addMessageFlows [(noscript, time)]\n main= run 80 waiMessageFlow\n time=do  ask $ cachedWidget \"time\" 5\n              $ wlink () b \u003c\u003c \"the time is \" ++ show (execute giveTheTime) ++ \" click here\"\n              time\n\u003c/pre\u003e\u003cp\u003ethis pseudocode would update the time every 5 seconds. The execution of the IO computation\n giveTheTime must be executed inside the cached widget to avoid unnecesary IO executions.\n\u003c/p\u003e\u003cp\u003eNOTE: the rendering of cached widgets are shared by all users\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "cachedWidget",
          "package": "MFlow",
          "signature": "String-\u003e Int-\u003e View view Identity a-\u003e View view m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:cachedWidget\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:cachedWidget\"]"
        },
        "index": {
          "description": "Cached widgets operate with widgets in the Identity monad but they may perform IO using the execute instance of the monad which is usually the IO monad execute basically sanctifies the use of unsafePerformIO for transient purpose such is caching This is defined in Data.TCache.Memoization The programmer can create his own instance for his monad With cachedWidget it is possible to cache the rendering of widget as ByteString maintaining type safety permanently or for certain time this is very useful for complex widgets that present information Specially it they must access to databases import MFlow.Wai.Blaze.Html.All import Some.Time.Library addMessageFlows noscript time main run waiMessageFlow time do ask cachedWidget time wlink the time is show execute giveTheTime click here time this pseudocode would update the time every seconds The execution of the IO computation giveTheTime must be executed inside the cached widget to avoid unnecesary IO executions NOTE the rendering of cached widgets are shared by all users",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "cachedWidget",
          "normalized": "String-\u003eInt-\u003eView a Identity b-\u003eView a c b",
          "package": "MFlow",
          "partial": "Widget",
          "signature": "String-\u003eInt-\u003eView view Identity a-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:cachedWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the widget in a monad and return the result in another.\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "changeMonad",
          "package": "MFlow",
          "signature": "View v m1 a -\u003e View v m a",
          "source": "src/MFlow-Forms-Internals.html#changeMonad",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:changeMonad\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:changeMonad\"]"
        },
        "index": {
          "description": "Execute the widget in monad and return the result in another",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "changeMonad",
          "normalized": "View a b c-\u003eView a b c",
          "package": "MFlow",
          "partial": "Monad",
          "signature": "View v m a-\u003eView v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:changeMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "clear",
          "package": "MFlow",
          "signature": "View v m ()",
          "source": "src/MFlow-Forms-Internals.html#clear",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:clear\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:clear\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "clear",
          "normalized": "View a b()",
          "package": "MFlow",
          "signature": "View v m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears the environment\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "clearEnv",
          "package": "MFlow",
          "signature": "m ()",
          "source": "src/MFlow-Forms-Internals.html#clearEnv",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:clearEnv\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:clearEnv\"]"
        },
        "index": {
          "description": "Clears the environment",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "clearEnv",
          "normalized": "a()",
          "package": "MFlow",
          "partial": "Env",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:clearEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "currentPath",
          "package": "MFlow",
          "signature": "Bool -\u003e Int -\u003e [[Char]] -\u003e [Char] -\u003e [Char]",
          "source": "src/MFlow-Forms-Internals.html#currentPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "currentPath",
          "normalized": "Bool-\u003eInt-\u003e[[Char]]-\u003e[Char]-\u003e[Char]",
          "package": "MFlow",
          "partial": "Path",
          "signature": "Bool-\u003eInt-\u003e[[Char]]-\u003e[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:currentPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "delSessionData",
          "package": "MFlow",
          "signature": "a -\u003e m ()",
          "source": "src/MFlow-Forms-Internals.html#delSessionData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:delSessionData\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:delSessionData\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "delSessionData",
          "normalized": "a-\u003eb()",
          "package": "MFlow",
          "partial": "Session Data",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:delSessionData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "finput",
          "package": "MFlow",
          "signature": "Name -\u003e Type -\u003e Value -\u003e Checked -\u003e OnClick -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#finput",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "finput",
          "normalized": "Name-\u003eType-\u003eValue-\u003eChecked-\u003eOnClick-\u003ea",
          "package": "MFlow",
          "signature": "Name-\u003eType-\u003eValue-\u003eChecked-\u003eOnClick-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:finput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "flink",
          "package": "MFlow",
          "signature": "String -\u003e view -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#flink",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "flink",
          "normalized": "String-\u003ea-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eview-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:flink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "flink1",
          "package": "MFlow",
          "signature": "String -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#flink1",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "flink1",
          "normalized": "String-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:flink1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "flowM",
          "package": "MFlow",
          "signature": "FlowMM v m a -\u003e FlowM v m a",
          "source": "src/MFlow-Forms-Internals.html#flowM",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "flowM",
          "normalized": "FlowMM a b c-\u003eFlowM a b c",
          "package": "MFlow",
          "signature": "FlowMM v m a-\u003eFlowM v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:flowM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "foption",
          "package": "MFlow",
          "signature": "String -\u003e view -\u003e Bool -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#foption",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "foption",
          "normalized": "String-\u003ea-\u003eBool-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eview-\u003eBool-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:foption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "foption1",
          "package": "MFlow",
          "signature": "String -\u003e Bool -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#foption1",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "foption1",
          "normalized": "String-\u003eBool-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eBool-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:foption1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "formAction",
          "package": "MFlow",
          "signature": "String -\u003e view -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#formAction",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "formAction",
          "normalized": "String-\u003ea-\u003ea",
          "package": "MFlow",
          "partial": "Action",
          "signature": "String-\u003eview-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:formAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "formPrefix",
          "package": "MFlow",
          "signature": "Int -\u003e [Char] -\u003e MFlowState view -\u003e [b] -\u003e Bool -\u003e m b",
          "source": "src/MFlow-Forms-Internals.html#formPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "formPrefix",
          "normalized": "Int-\u003e[Char]-\u003eMFlowState a-\u003e[b]-\u003eBool-\u003ec b",
          "package": "MFlow",
          "partial": "Prefix",
          "signature": "Int-\u003e[Char]-\u003eMFlowState view-\u003e[b]-\u003eBool-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:formPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "fromFailBack",
          "package": "MFlow",
          "signature": "FailBack t -\u003e t",
          "source": "src/MFlow-Forms-Internals.html#fromFailBack",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:fromFailBack\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:fromFailBack\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "fromFailBack",
          "normalized": "FailBack a-\u003ea",
          "package": "MFlow",
          "partial": "Fail Back",
          "signature": "FailBack t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:fromFailBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "fromStr",
          "package": "MFlow",
          "signature": "String -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#fromStr",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "fromStr",
          "normalized": "String-\u003ea",
          "package": "MFlow",
          "partial": "Str",
          "signature": "String-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:fromStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "fromStrNoEncode",
          "package": "MFlow",
          "signature": "String -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#fromStrNoEncode",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "fromStrNoEncode",
          "normalized": "String-\u003ea",
          "package": "MFlow",
          "partial": "Str No Encode",
          "signature": "String-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:fromStrNoEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "fromValidated",
          "package": "MFlow",
          "signature": "ParamResult t t1 -\u003e t1",
          "source": "src/MFlow-Forms-Internals.html#fromValidated",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "fromValidated",
          "normalized": "ParamResult a a-\u003ea",
          "package": "MFlow",
          "partial": "Validated",
          "signature": "ParamResult t t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:fromValidated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "fselect",
          "package": "MFlow",
          "signature": "String -\u003e view -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#fselect",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "fselect",
          "normalized": "String-\u003ea-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eview-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:fselect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "ftag",
          "package": "MFlow",
          "signature": "String -\u003e view -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#ftag",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "ftag",
          "normalized": "String-\u003ea-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eview-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:ftag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "ftextarea",
          "package": "MFlow",
          "signature": "String -\u003e Text -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#ftextarea",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "ftextarea",
          "normalized": "String-\u003eText-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eText-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:ftextarea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new string. Useful for creating tag identifiers and other attributes.\n\u003c/p\u003e\u003cp\u003eif the page is refreshed, the identifiers generated are the same.\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "genNewId",
          "package": "MFlow",
          "signature": "m String",
          "source": "src/MFlow-Forms-Internals.html#genNewId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:genNewId\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:genNewId\"]"
        },
        "index": {
          "description": "Generate new string Useful for creating tag identifiers and other attributes if the page is refreshed the identifiers generated are the same",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "genNewId",
          "package": "MFlow",
          "partial": "New Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:genNewId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "getCurrentUser",
          "package": "MFlow",
          "signature": "m String",
          "source": "src/MFlow-Forms-Internals.html#getCurrentUser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getCurrentUser\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getCurrentUser\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "getCurrentUser",
          "package": "MFlow",
          "partial": "Current User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getCurrentUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "getEnv",
          "package": "MFlow",
          "signature": "m Params",
          "source": "src/MFlow-Forms-Internals.html#getEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "getEnv",
          "package": "MFlow",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current header\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "getHeader",
          "package": "MFlow",
          "signature": "FlowM view m (view -\u003e view)",
          "source": "src/MFlow-Forms-Internals.html#getHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getHeader\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getHeader\"]"
        },
        "index": {
          "description": "Return the current header",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "getHeader",
          "normalized": "FlowM a b(a-\u003ea)",
          "package": "MFlow",
          "partial": "Header",
          "signature": "FlowM view m(view-\u003eview)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the user language. Now it is fixed to \u003ca\u003een\u003c/a\u003e\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "getLang",
          "package": "MFlow",
          "signature": "m String",
          "source": "src/MFlow-Forms-Internals.html#getLang",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getLang\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getLang\"]"
        },
        "index": {
          "description": "Return the user language Now it is fixed to en",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "getLang",
          "package": "MFlow",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getLang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the next ideitifier that will be created by genNewId\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "getNextId",
          "package": "MFlow",
          "signature": "m String",
          "source": "src/MFlow-Forms-Internals.html#getNextId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getNextId\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getNextId\"]"
        },
        "index": {
          "description": "get the next ideitifier that will be created by genNewId",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "getNextId",
          "package": "MFlow",
          "partial": "Next Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getNextId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "getParam1",
          "package": "MFlow",
          "signature": "String -\u003e Params -\u003e m (ParamResult v a)",
          "source": "src/MFlow-Forms-Internals.html#getParam1",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "getParam1",
          "normalized": "String-\u003eParams-\u003ea(ParamResult b c)",
          "package": "MFlow",
          "partial": "Param",
          "signature": "String-\u003eParams-\u003em(ParamResult v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getParam1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the session data of the desired type if there is any.\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "getSessionData",
          "package": "MFlow",
          "signature": "m (Maybe a)",
          "source": "src/MFlow-Forms-Internals.html#getSessionData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getSessionData\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getSessionData\"]"
        },
        "index": {
          "description": "Get the session data of the desired type if there is any",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "getSessionData",
          "package": "MFlow",
          "partial": "Session Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getSessionData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "getToken",
          "package": "MFlow",
          "signature": "m Token",
          "source": "src/MFlow-Forms-Internals.html#getToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "getToken",
          "package": "MFlow",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "getWFName",
          "package": "MFlow",
          "signature": "m String",
          "source": "src/MFlow-Forms-Internals.html#getWFName",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "getWFName",
          "package": "MFlow",
          "partial": "WFName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:getWFName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the flow is going back (as a result of the back button pressed in the web browser).\n  Usually this check is nos necessary unless conditional code make it necessary\n\u003c/p\u003e\u003cpre\u003emenu= do\n       mop \u003c- getGoStraighTo \n       case mop of\n        Just goop -\u003e goop\n        Nothing -\u003e do\n               r \u003c- \u003ccode\u003eask\u003c/code\u003e option1 \u003c|\u003e option2\n               case r of\n                op1 -\u003e setGoStraighTo (Just goop1) \u003e\u003e goop1\n                op2 -\u003e setGoStraighTo (Just goop2) \u003e\u003e goop2\u003c/pre\u003e\u003cp\u003eThis pseudocode below would execute the ask of the menu once. But the user will never have\n the possibility to see the menu again. To let him choose other option, the code\n has to be change to\n\u003c/p\u003e\u003cpre\u003emenu= do\n       mop \u003c- getGoStraighTo\n       back \u003c- \u003ccode\u003e\u003ca\u003egoingBack\u003c/a\u003e\u003c/code\u003e\n       case (mop,back) of\n        (Just goop,False) -\u003e goop\n        _ -\u003e do\n               r \u003c- \u003ccode\u003eask\u003c/code\u003e option1 \u003c|\u003e option2\n               case r of\n                op1 -\u003e setGoStraighTo (Just goop1) \u003e\u003e goop1\n                op2 -\u003e setGoStraighTo (Just goop2) \u003e\u003e goop2\u003c/pre\u003e\u003cp\u003eHowever this is very specialized. Normally the back button detection is not necessary.\n In a persistent flow (with step) even this default entry option would be completely automatic,\n since the process would restart at the last page visited.\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "goingBack",
          "package": "MFlow",
          "signature": "m Bool",
          "source": "src/MFlow-Forms-Internals.html#goingBack",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:goingBack\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:goingBack\"]"
        },
        "index": {
          "description": "True if the flow is going back as result of the back button pressed in the web browser Usually this check is nos necessary unless conditional code make it necessary menu do mop getGoStraighTo case mop of Just goop goop Nothing do ask option1 option2 case of op1 setGoStraighTo Just goop1 goop1 op2 setGoStraighTo Just goop2 goop2 This pseudocode below would execute the ask of the menu once But the user will never have the possibility to see the menu again To let him choose other option the code has to be change to menu do mop getGoStraighTo back goingBack case mop back of Just goop False goop do ask option1 option2 case of op1 setGoStraighTo Just goop1 goop1 op2 setGoStraighTo Just goop2 goop2 However this is very specialized Normally the back button detection is not necessary In persistent flow with step even this default entry option would be completely automatic since the process would restart at the last page visited",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "goingBack",
          "package": "MFlow",
          "partial": "Back",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:goingBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "iCanFailBack",
          "package": "MFlow",
          "signature": "[Char]",
          "source": "src/MFlow-Forms-Internals.html#iCanFailBack",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "iCanFailBack",
          "normalized": "[Char]",
          "package": "MFlow",
          "partial": "Can Fail Back",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:iCanFailBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "inSync",
          "package": "MFlow",
          "signature": "Bool",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "inSync",
          "package": "MFlow",
          "partial": "Sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:inSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "inred",
          "package": "MFlow",
          "signature": "view -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#inred",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "inred",
          "normalized": "a-\u003ea",
          "package": "MFlow",
          "signature": "view-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:inred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einsert a form tag if the widget has form input fields. If not, it does nothing\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms.Widgets\"]",
          "name": "insertForm",
          "package": "MFlow",
          "signature": "View view m a -\u003e View view m a",
          "source": "src/MFlow-Forms-Internals.html#insertForm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:insertForm\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:insertForm\"]"
        },
        "index": {
          "description": "insert form tag if the widget has form input fields If not it does nothing",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "insertForm",
          "normalized": "View a b c-\u003eView a b c",
          "package": "MFlow",
          "partial": "Form",
          "signature": "View view m a-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:insertForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "installAllRequirements",
          "package": "MFlow",
          "signature": "WState view m view",
          "source": "src/MFlow-Forms-Internals.html#installAllRequirements",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "installAllRequirements",
          "package": "MFlow",
          "partial": "All Requirements",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:installAllRequirements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "installRequirements",
          "package": "MFlow",
          "signature": "[a] -\u003e m view",
          "source": "src/MFlow-Forms-Internals.html#installRequirements",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "installRequirements",
          "normalized": "[a]-\u003eb c",
          "package": "MFlow",
          "partial": "Requirements",
          "signature": "[a]-\u003em view",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:installRequirements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "installWebRequirements",
          "package": "MFlow",
          "signature": "[WebRequirement] -\u003e m view",
          "source": "src/MFlow-Forms-Internals.html#installWebRequirements",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "installWebRequirements",
          "normalized": "[WebRequirement]-\u003ea b",
          "package": "MFlow",
          "partial": "Web Requirements",
          "signature": "[WebRequirement]-\u003em view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:installWebRequirements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "isValidated",
          "package": "MFlow",
          "signature": "ParamResult t t1 -\u003e Bool",
          "source": "src/MFlow-Forms-Internals.html#isValidated",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "isValidated",
          "normalized": "ParamResult a a-\u003eBool",
          "package": "MFlow",
          "partial": "Validated",
          "signature": "ParamResult t t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:isValidated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "jsRequirements",
          "package": "MFlow",
          "signature": "[WebRequirement] -\u003e [Char]",
          "source": "src/MFlow-Forms-Internals.html#jsRequirements",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "jsRequirements",
          "normalized": "[WebRequirement]-\u003e[Char]",
          "package": "MFlow",
          "partial": "Requirements",
          "signature": "[WebRequirement]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:jsRequirements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "liftSup",
          "package": "MFlow",
          "signature": "m a -\u003e Sup m a",
          "source": "src/MFlow-Forms-Internals.html#liftSup",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "liftSup",
          "normalized": "a b-\u003eSup a b",
          "package": "MFlow",
          "partial": "Sup",
          "signature": "m a-\u003eSup m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:liftSup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "linkMatched",
          "package": "MFlow",
          "signature": "Bool",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "linkMatched",
          "package": "MFlow",
          "partial": "Matched",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:linkMatched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "loadcss",
          "package": "MFlow",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/MFlow-Forms-Internals.html#loadcss",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "loadcss",
          "normalized": "[Char]-\u003e[Char]",
          "package": "MFlow",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:loadcss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "loadcssfile",
          "package": "MFlow",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/MFlow-Forms-Internals.html#loadcssfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "loadcssfile",
          "normalized": "[Char]-\u003e[Char]",
          "package": "MFlow",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:loadcssfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "loadjs",
          "package": "MFlow",
          "signature": "t -\u003e t",
          "source": "src/MFlow-Forms-Internals.html#loadjs",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "loadjs",
          "normalized": "a-\u003ea",
          "package": "MFlow",
          "signature": "t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:loadjs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "loadjsfile",
          "package": "MFlow",
          "signature": "[Char] -\u003e [[Char]] -\u003e [Char]",
          "source": "src/MFlow-Forms-Internals.html#loadjsfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "loadjsfile",
          "normalized": "[Char]-\u003e[[Char]]-\u003e[Char]",
          "package": "MFlow",
          "signature": "[Char]-\u003e[[Char]]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:loadjsfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mFlowState0",
          "package": "MFlow",
          "signature": "MFlowState view",
          "source": "src/MFlow-Forms-Internals.html#mFlowState0",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mFlowState0",
          "package": "MFlow",
          "partial": "Flow State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mFlowState0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfAjax",
          "package": "MFlow",
          "signature": "Maybe (Map String Void)",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfAjax",
          "package": "MFlow",
          "partial": "Ajax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfAjax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfAutorefresh",
          "package": "MFlow",
          "signature": "Bool",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfAutorefresh",
          "package": "MFlow",
          "partial": "Autorefresh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfAutorefresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfCached",
          "package": "MFlow",
          "signature": "Bool",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfCached",
          "package": "MFlow",
          "partial": "Cached",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfCached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfClear",
          "package": "MFlow",
          "signature": "Bool",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfClear",
          "package": "MFlow",
          "partial": "Clear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfCookies",
          "package": "MFlow",
          "signature": "[Cookie]",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfCookies",
          "normalized": "[Cookie]",
          "package": "MFlow",
          "partial": "Cookies",
          "signature": "[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfData",
          "package": "MFlow",
          "signature": "Map TypeRep Void",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfData",
          "package": "MFlow",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfDebug",
          "package": "MFlow",
          "signature": "Bool",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfDebug",
          "package": "MFlow",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfEnv",
          "package": "MFlow",
          "signature": "Params",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfEnv",
          "package": "MFlow",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfHeader",
          "package": "MFlow",
          "signature": "view -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfHeader",
          "normalized": "a-\u003ea",
          "package": "MFlow",
          "partial": "Header",
          "signature": "view-\u003eview",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfHttpHeaders",
          "package": "MFlow",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfHttpHeaders",
          "normalized": "[(ByteString,ByteString)]",
          "package": "MFlow",
          "partial": "Http Headers",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfHttpHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfLang",
          "package": "MFlow",
          "signature": "Lang",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfLang",
          "package": "MFlow",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfLang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfLinks",
          "package": "MFlow",
          "signature": "Map String Int",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfLinks",
          "package": "MFlow",
          "partial": "Links",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfPIndex",
          "package": "MFlow",
          "signature": "Int",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfPIndex",
          "package": "MFlow",
          "partial": "PIndex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfPIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfPageIndex",
          "package": "MFlow",
          "signature": "Maybe Int",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfPageIndex",
          "package": "MFlow",
          "partial": "Page Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfPageIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfPath",
          "package": "MFlow",
          "signature": "[String]",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfPath",
          "normalized": "[String]",
          "package": "MFlow",
          "partial": "Path",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfPrefix",
          "package": "MFlow",
          "signature": "String",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfPrefix",
          "package": "MFlow",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfRequirements",
          "package": "MFlow",
          "signature": "[Requirement]",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfRequirements",
          "normalized": "[Requirement]",
          "package": "MFlow",
          "partial": "Requirements",
          "signature": "[Requirement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfRequirements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfSeqCache",
          "package": "MFlow",
          "signature": "Int",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfSeqCache",
          "package": "MFlow",
          "partial": "Seq Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfSeqCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfSequence",
          "package": "MFlow",
          "signature": "Int",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfSequence",
          "package": "MFlow",
          "partial": "Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfSessionTime",
          "package": "MFlow",
          "signature": "Integer",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfSessionTime",
          "package": "MFlow",
          "partial": "Session Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfSessionTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfToken",
          "package": "MFlow",
          "signature": "Token",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfToken",
          "package": "MFlow",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfTrace",
          "package": "MFlow",
          "signature": "[String]",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfTrace",
          "normalized": "[String]",
          "package": "MFlow",
          "partial": "Trace",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "mfkillTime",
          "package": "MFlow",
          "signature": "Int",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "mfkillTime",
          "package": "MFlow",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:mfkillTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "needForm",
          "package": "MFlow",
          "signature": "Bool",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "needForm",
          "package": "MFlow",
          "partial": "Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:needForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "newAsk",
          "package": "MFlow",
          "signature": "Bool",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "newAsk",
          "package": "MFlow",
          "partial": "Ask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:newAsk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "noFailBack",
          "package": "MFlow",
          "signature": "[Char]",
          "source": "src/MFlow-Forms-Internals.html#noFailBack",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "noFailBack",
          "normalized": "[Char]",
          "package": "MFlow",
          "partial": "Fail Back",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:noFailBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "normalize",
          "package": "MFlow",
          "signature": "View v m a -\u003e View ByteString m a",
          "source": "src/MFlow-Forms-Internals.html#normalize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:normalize\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:normalize\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "normalize",
          "normalized": "View a b c-\u003eView ByteString b c",
          "package": "MFlow",
          "signature": "View v m a-\u003eView ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "notSyncInAction",
          "package": "MFlow",
          "signature": "Bool",
          "source": "src/MFlow-Forms-Internals.html#MFlowState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "notSyncInAction",
          "package": "MFlow",
          "partial": "Sync In Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:notSyncInAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWill prevent the Suprack beyond the point where \u003ccode\u003e\u003ca\u003epreventGoingBack\u003c/a\u003e\u003c/code\u003e is located.\n If the  user press the back button beyond that point, the flow parameter is executed, usually\n it is an ask statement with a message. If the flow is not going back, it does nothing. It is a cut in Supracking\n\u003c/p\u003e\u003cp\u003eIt is useful when an undoable transaction has been commited. For example, after a payment.\n\u003c/p\u003e\u003cp\u003eThis example show a message when the user go back and press again to pay\n\u003c/p\u003e\u003cpre\u003e   ask $ wlink () \u003c\u003c b \u003c\u003c \"press here to pay 100000 $ \"\n   payIt\n   preventGoingBack . ask $   b \u003c\u003c \"You  paid 10000 $ one time\"\n                          ++\u003e wlink () \u003c\u003c b \u003c\u003c \" Please press here to complete the proccess\"\n   ask $ wlink () \u003c\u003c b \u003c\u003c \"OK, press here to go to the menu or press the back button to verify that you can not pay again\"\n   where\n   payIt= liftIO $ print \"paying\"\n\u003c/pre\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "preventGoingBack",
          "package": "MFlow",
          "signature": "FlowM v m () -\u003e FlowM v m ()",
          "source": "src/MFlow-Forms-Internals.html#preventGoingBack",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:preventGoingBack\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:preventGoingBack\"]"
        },
        "index": {
          "description": "Will prevent the Suprack beyond the point where preventGoingBack is located If the user press the back button beyond that point the flow parameter is executed usually it is an ask statement with message If the flow is not going back it does nothing It is cut in Supracking It is useful when an undoable transaction has been commited For example after payment This example show message when the user go back and press again to pay ask wlink press here to pay payIt preventGoingBack ask You paid one time wlink Please press here to complete the proccess ask wlink OK press here to go to the menu or press the back button to verify that you can not pay again where payIt liftIO print paying",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "preventGoingBack",
          "normalized": "FlowM a b()-\u003eFlowM a b()",
          "package": "MFlow",
          "partial": "Going Back",
          "signature": "FlowM v m()-\u003eFlowM v m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:preventGoingBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "readParam",
          "package": "MFlow",
          "signature": "String -\u003e m (ParamResult v a)",
          "source": "src/MFlow-Forms-Internals.html#readParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "readParam",
          "normalized": "String-\u003ea(ParamResult b c)",
          "package": "MFlow",
          "partial": "Param",
          "signature": "String-\u003em(ParamResult v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:readParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "repeatPlease",
          "package": "MFlow",
          "signature": "[Char]",
          "source": "src/MFlow-Forms-Internals.html#repeatPlease",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "repeatPlease",
          "normalized": "[Char]",
          "package": "MFlow",
          "partial": "Please",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:repeatPlease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequirements are javascripts, Stylesheets or server processes (or any instance of the \u003ccode\u003e\u003ca\u003eRequirement\u003c/a\u003e\u003c/code\u003e class) that are included in the\n Web page or in the server when a widget specifies this. \u003ccode\u003erequires\u003c/code\u003e is the\n procedure to be called with the list of requirements.\n Varios widgets in the page can require the same element, MFlow will install it once.\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "requires",
          "package": "MFlow",
          "signature": "[a] -\u003e m ()",
          "source": "src/MFlow-Forms-Internals.html#requires",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:requires\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:requires\"]"
        },
        "index": {
          "description": "Requirements are javascripts Stylesheets or server processes or any instance of the Requirement class that are included in the Web page or in the server when widget specifies this requires is the procedure to be called with the list of requirements Varios widgets in the page can require the same element MFlow will install it once",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "requires",
          "normalized": "[a]-\u003eb()",
          "package": "MFlow",
          "signature": "[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:requires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the Flow, in the \u003ccode\u003eFlowM view m\u003c/code\u003e monad. It is used as parameter of \u003ccode\u003ehackMessageFlow\u003c/code\u003e\n\u003ccode\u003ewaiMessageFlow\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eaddMessageFlows\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe flow is executed in a loop. When the flow is finished, it is started again\n\u003c/p\u003e\u003cpre\u003emain= do\n   addMessageFlows [(\"noscript\",transient $ runFlow mainf)]\n   forkIO . run 80 $ waiMessageFlow\n   adminLoop\n\u003c/pre\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "runFlow",
          "package": "MFlow",
          "signature": "FlowM view m () -\u003e Token -\u003e m ()",
          "source": "src/MFlow-Forms-Internals.html#runFlow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runFlow\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:runFlow\"]"
        },
        "index": {
          "description": "Execute the Flow in the FlowM view monad It is used as parameter of hackMessageFlow waiMessageFlow or addMessageFlows The flow is executed in loop When the flow is finished it is started again main do addMessageFlows noscript transient runFlow mainf forkIO run waiMessageFlow adminLoop",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "runFlow",
          "normalized": "FlowM a b()-\u003eToken-\u003eb()",
          "package": "MFlow",
          "partial": "Flow",
          "signature": "FlowM view m()-\u003eToken-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransfer control to another flow. (experimental)\ntransfer :: MonadIO m =\u003e String -\u003e FlowM v m ()\ntransfer flowname = do\n         t \u003c- gets mfToken\n         let t'= t{twfname= flowname}\n         liftIO  $ do\n             (r,_) \u003c- msgScheduler t'\n             sendFlush t r\n\u003c/p\u003e\u003cp\u003eto unlift a FlowM computation. useful for executing the configuration generated by runFLowIn\n outside of the web flow (FlowM) monad\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "runFlowConf",
          "package": "MFlow",
          "signature": "FlowM view m a -\u003e m a",
          "source": "src/MFlow-Forms-Internals.html#runFlowConf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runFlowConf\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:runFlowConf\"]"
        },
        "index": {
          "description": "transfer control to another flow experimental transfer MonadIO String FlowM transfer flowname do gets mfToken let twfname flowname liftIO do msgScheduler sendFlush to unlift FlowM computation useful for executing the configuration generated by runFLowIn outside of the web flow FlowM monad",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "runFlowConf",
          "normalized": "FlowM a b c-\u003eb c",
          "package": "MFlow",
          "partial": "Flow Conf",
          "signature": "FlowM view m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runFlowConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a persistent flow inside the current flow. It is identified by the procedure and\n the string identifier.\n unlike the normal flows, that run within infinite loops, runFlowIn executes once.\n In subsequent executions, the flow will get the intermediate responses from te log\n and will return the result\n without asking again. This is useful for asking\u003cem\u003estoring\u003c/em\u003eretrieving user defined configurations by\n means of web formularies.\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "runFlowIn",
          "package": "MFlow",
          "signature": "String -\u003e FlowM view (Workflow IO) b -\u003e FlowM view m b",
          "source": "src/MFlow-Forms-Internals.html#runFlowIn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runFlowIn\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:runFlowIn\"]"
        },
        "index": {
          "description": "Run persistent flow inside the current flow It is identified by the procedure and the string identifier unlike the normal flows that run within infinite loops runFlowIn executes once In subsequent executions the flow will get the intermediate responses from te log and will return the result without asking again This is useful for asking storing retrieving user defined configurations by means of web formularies",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "runFlowIn",
          "normalized": "String-\u003eFlowM a(Workflow IO)b-\u003eFlowM a c b",
          "package": "MFlow",
          "partial": "Flow In",
          "signature": "String-\u003eFlowM view(Workflow IO)b-\u003eFlowM view m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runFlowIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "runFlowM",
          "package": "MFlow",
          "signature": "FlowMM v m a",
          "source": "src/MFlow-Forms-Internals.html#FlowM",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "runFlowM",
          "package": "MFlow",
          "partial": "Flow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runFlowM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "runFlowOnce",
          "package": "MFlow",
          "signature": "FlowM view m () -\u003e Token -\u003e m ()",
          "source": "src/MFlow-Forms-Internals.html#runFlowOnce",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runFlowOnce\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:runFlowOnce\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "runFlowOnce",
          "normalized": "FlowM a b()-\u003eToken-\u003eb()",
          "package": "MFlow",
          "partial": "Flow Once",
          "signature": "FlowM view m()-\u003eToken-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runFlowOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "runFlowOnce1",
          "package": "MFlow",
          "signature": "FlowM v m a -\u003e Token -\u003e m Token",
          "source": "src/MFlow-Forms-Internals.html#runFlowOnce1",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "runFlowOnce1",
          "normalized": "FlowM a b c-\u003eToken-\u003eb Token",
          "package": "MFlow",
          "partial": "Flow Once",
          "signature": "FlowM v m a-\u003eToken-\u003em Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runFlowOnce1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "runSup",
          "package": "MFlow",
          "signature": "m (FailBack a)",
          "source": "src/MFlow-Forms-Internals.html#Sup",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "runSup",
          "package": "MFlow",
          "partial": "Sup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runSup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "runView",
          "package": "MFlow",
          "signature": "WState v m (FormElm v a)",
          "source": "src/MFlow-Forms-Internals.html#View",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runView\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:runView\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "runView",
          "package": "MFlow",
          "partial": "View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:runView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an HTTP cookie\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "setCookie",
          "package": "MFlow",
          "signature": "String-\u003e String-\u003e String-\u003e Maybe Integer-\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:setCookie\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setCookie\"]"
        },
        "index": {
          "description": "Set an HTTP cookie",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "setCookie",
          "normalized": "String-\u003eString-\u003eString-\u003eMaybe Integer-\u003ea()",
          "package": "MFlow",
          "partial": "Cookie",
          "signature": "String-\u003eString-\u003eString-\u003eMaybe Integer-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:setCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the header-footer that will enclose the widgets. It must be provided in the\n same formatting than them, altrough with normalization to byteStrings any formatting can be used\n\u003c/p\u003e\u003cp\u003eThis header uses XML trough Haskell Server Pages (\u003ca\u003ehttp://hackage.haskell.org/package/hsp\u003c/a\u003e)\n\u003c/p\u003e\u003cpre\u003e\n setHeader $ c -\u003e\n            \u003chtml\u003e\n                 \u003chead\u003e\n                      \u003ctitle\u003e  my title \u003c/title\u003e\n                      \u003cmeta name= \"Keywords\" content= \"sci-fi\" /\u003e)\n                 \u003c/head\u003e\n                  \u003cbody style= \"margin-left:5%;margin-right:5%\"\u003e\n                       \u003c% c %\u003e\n                  \u003c/body\u003e\n            \u003c/html\u003e\n\u003c/pre\u003e\u003cp\u003eThis header uses \u003ca\u003eText.XHtml\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n setHeader $ c -\u003e\n           \u003ccode\u003ethehtml\u003c/code\u003e\n               \u003c\u003c (\u003ccode\u003eheader\u003c/code\u003e\n                   \u003c\u003c (\u003ccode\u003ethetitle\u003c/code\u003e \u003c\u003c title +++\n                       \u003ccode\u003emeta\u003c/code\u003e ! [\u003ccode\u003ename\u003c/code\u003e \"Keywords\",content \"sci-fi\"])) +++\n                  \u003ccode\u003ebody\u003c/code\u003e ! [\u003ccode\u003estyle\u003c/code\u003e \"margin-left:5%;margin-right:5%\"] c\n\u003c/pre\u003e\u003cp\u003eThis header uses both. It uses byteString tags\n\u003c/p\u003e\u003cpre\u003e\n setHeader $ c -\u003e\n          \u003ccode\u003e\u003ca\u003ebhtml\u003c/a\u003e\u003c/code\u003e [] $\n               \u003ccode\u003e\u003ca\u003ebtag\u003c/a\u003e\u003c/code\u003e \u003ca\u003ehead\u003c/a\u003e [] $\n                     (\u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e (thetitle \u003c\u003c title) \u003ccode\u003eappend\u003c/code\u003e\n                     \u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e \u003ca\u003ename= \\\"Keywords\\\" content= \\\"sci-fi\\\" /\u003c/a\u003e) \u003ccode\u003eappend\u003c/code\u003e\n                  \u003ccode\u003e\u003ca\u003ebbody\u003c/a\u003e\u003c/code\u003e [(\"style\", \"margin-left:5%;margin-right:5%\")] c\n\u003c/pre\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "setHeader",
          "package": "MFlow",
          "signature": "(view -\u003e view) -\u003e m ()",
          "source": "src/MFlow-Forms-Internals.html#setHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:setHeader\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setHeader\"]"
        },
        "index": {
          "description": "Set the header-footer that will enclose the widgets It must be provided in the same formatting than them altrough with normalization to byteStrings any formatting can be used This header uses XML trough Haskell Server Pages http hackage.haskell.org package hsp setHeader html head title my title title meta name Keywords content sci-fi head body style margin-left margin-right body html This header uses Text.XHtml setHeader thehtml header thetitle title meta name Keywords content sci-fi body style margin-left margin-right This header uses both It uses byteString tags setHeader bhtml btag head toByteString thetitle title append toByteString name Keywords content sci-fi append bbody style margin-left margin-right",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "setHeader",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "MFlow",
          "partial": "Header",
          "signature": "(view-\u003eview)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:setHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an HTTP Response header\n\u003c/p\u003e",
          "module": "MFlow.Forms.Internals",
          "name": "setHttpHeader",
          "package": "MFlow",
          "signature": "ByteString-\u003e ByteString-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Set an HTTP Response header",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "setHttpHeader",
          "normalized": "ByteString-\u003eByteString-\u003ea()",
          "package": "MFlow",
          "partial": "Http Header",
          "signature": "ByteString-\u003eByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:setHttpHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet user-defined data in the context of the session.\n\u003c/p\u003e\u003cp\u003eThe data is indexed by  type in a map. So the user can insert-retrieve different kinds of data\n in the session context.\n\u003c/p\u003e\u003cp\u003eThis example define \u003ccode\u003eaddHistory\u003c/code\u003e and \u003ccode\u003egetHistory\u003c/code\u003e to maintain a Html log in the session of a Flow:\n\u003c/p\u003e\u003cpre\u003e newtype History = History ( Html) deriving Typeable\n setHistory html= setSessionData $ History html\n getHistory= getSessionData `onNothing` return (History mempty) \u003e\u003e= \\(History h) -\u003e return h\n addHistory html= do\n      html' \u003c- getHistory\n      setHistory $ html' `mappend` html\n\u003c/pre\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "setSessionData",
          "package": "MFlow",
          "signature": "a -\u003e m ()",
          "source": "src/MFlow-Forms-Internals.html#setSessionData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:setSessionData\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setSessionData\"]"
        },
        "index": {
          "description": "Set user-defined data in the context of the session The data is indexed by type in map So the user can insert-retrieve different kinds of data in the session context This example define addHistory and getHistory to maintain Html log in the session of Flow newtype History History Html deriving Typeable setHistory html setSessionData History html getHistory getSessionData onNothing return History mempty History return addHistory html do html getHistory setHistory html mappend html",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "setSessionData",
          "normalized": "a-\u003eb()",
          "package": "MFlow",
          "partial": "Session Data",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:setSessionData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet\n  1) the timeout of the flow execution since the last user interaction.\n Once passed, the flow executes from the begining.\n\u003c/p\u003e\u003cp\u003e2) In persistent flows\n it set the session state timeout for the flow, that is persistent. If the\n flow is not persistent, it has no effect.\n\u003c/p\u003e\u003cp\u003eAs the other state primitives, it can be run in the Flow and in the View monad\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etransient\u003c/a\u003e\u003c/code\u003e flows restart anew.\n persistent flows (that use \u003ccode\u003e\u003ca\u003estep\u003c/a\u003e\u003c/code\u003e) restart at the las saved execution point, unless\n the session time has expired for the user.\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "setTimeouts",
          "package": "MFlow",
          "signature": "Int -\u003e Integer -\u003e m ()",
          "source": "src/MFlow-Forms-Internals.html#setTimeouts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:setTimeouts\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setTimeouts\"]"
        },
        "index": {
          "description": "Set the timeout of the flow execution since the last user interaction Once passed the flow executes from the begining In persistent flows it set the session state timeout for the flow that is persistent If the flow is not persistent it has no effect As the other state primitives it can be run in the Flow and in the View monad transient flows restart anew persistent flows that use step restart at the las saved execution point unless the session time has expired for the user",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "setTimeouts",
          "normalized": "Int-\u003eInteger-\u003ea()",
          "package": "MFlow",
          "partial": "Timeouts",
          "signature": "Int-\u003eInteger-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:setTimeouts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "stdHeader",
          "package": "MFlow",
          "signature": "t -\u003e t",
          "source": "src/MFlow-Forms-Internals.html#stdHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "stdHeader",
          "normalized": "a-\u003ea",
          "package": "MFlow",
          "partial": "Header",
          "signature": "t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:stdHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estores the result of the flow in a  persistent log. When restarted, it get the result\n from the log and it does not execute it again. When no results are in the log, the computation\n is executed. It is equivalent to \u003ccode\u003e\u003ca\u003estep\u003c/a\u003e\u003c/code\u003e but in the FlowM monad.\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "step",
          "package": "MFlow",
          "signature": "FlowM view m a -\u003e FlowM view (Workflow m) a",
          "source": "src/MFlow-Forms-Internals.html#step",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:step\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:step\"]"
        },
        "index": {
          "description": "stores the result of the flow in persistent log When restarted it get the result from the log and it does not execute it again When no results are in the log the computation is executed It is equivalent to step but in the FlowM monad",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "step",
          "normalized": "FlowM a b c-\u003eFlowM a(Workflow b)c",
          "package": "MFlow",
          "signature": "FlowM view m a-\u003eFlowM view(Workflow m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "strRequirement",
          "package": "MFlow",
          "signature": "WebRequirement -\u003e [Char]",
          "source": "src/MFlow-Forms-Internals.html#strRequirement",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "strRequirement",
          "normalized": "WebRequirement-\u003e[Char]",
          "package": "MFlow",
          "partial": "Requirement",
          "signature": "WebRequirement-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:strRequirement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "supBack",
          "package": "MFlow",
          "signature": "s -\u003e m ()",
          "source": "src/MFlow-Forms-Internals.html#supBack",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "supBack",
          "normalized": "a-\u003eb()",
          "package": "MFlow",
          "partial": "Back",
          "signature": "s-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:supBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "supervise",
          "package": "MFlow",
          "signature": "m (FailBack a) -\u003e m (FailBack a)",
          "source": "src/MFlow-Forms-Internals.html#supervise",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "supervise",
          "normalized": "a(FailBack b)-\u003ea(FailBack b)",
          "package": "MFlow",
          "signature": "m(FailBack a)-\u003em(FailBack a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:supervise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "toByteString",
          "package": "MFlow",
          "signature": "view -\u003e ByteString",
          "source": "src/MFlow-Forms-Internals.html#toByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "toByteString",
          "normalized": "a-\u003eByteString",
          "package": "MFlow",
          "partial": "Byte String",
          "signature": "view-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "toFailBack",
          "package": "MFlow",
          "signature": "a -\u003e FailBack a",
          "source": "src/MFlow-Forms-Internals.html#toFailBack",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:toFailBack\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:toFailBack\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "toFailBack",
          "normalized": "a-\u003eFailBack a",
          "package": "MFlow",
          "partial": "Fail Back",
          "signature": "a-\u003eFailBack a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:toFailBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "toHttpData",
          "package": "MFlow",
          "signature": "view -\u003e HttpData",
          "source": "src/MFlow-Forms-Internals.html#toHttpData",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "toHttpData",
          "normalized": "a-\u003eHttpData",
          "package": "MFlow",
          "partial": "Http Data",
          "signature": "view-\u003eHttpData",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:toHttpData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eto execute transient flows as if they were persistent\n it can be used instead of step, but it does not log the response. it ever executes the computation\n\u003c/p\u003e\u003cpre\u003e transient $ runFlow f === runFlow $ transientNav f\n\u003c/pre\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "transientNav",
          "package": "MFlow",
          "signature": "FlowM view IO a -\u003e FlowM view (Workflow IO) a",
          "source": "src/MFlow-Forms-Internals.html#transientNav",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:transientNav\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:transientNav\"]"
        },
        "index": {
          "description": "to execute transient flows as if they were persistent it can be used instead of step but it does not log the response it ever executes the computation transient runFlow runFlow transientNav",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "transientNav",
          "normalized": "FlowM a IO b-\u003eFlowM a(Workflow IO)b",
          "package": "MFlow",
          "partial": "Nav",
          "signature": "FlowM view IO a-\u003eFlowM view(Workflow IO)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:transientNav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Internals",
          "name": "valToMaybe",
          "package": "MFlow",
          "signature": "ParamResult t a -\u003e Maybe a",
          "source": "src/MFlow-Forms-Internals.html#valToMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "valToMaybe",
          "normalized": "ParamResult a b-\u003eMaybe b",
          "package": "MFlow",
          "partial": "To Maybe",
          "signature": "ParamResult t a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:valToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shorter name for \u003ccode\u003e\u003ca\u003ecachedWidget\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "wcached",
          "package": "MFlow",
          "signature": "String-\u003e Int-\u003e View view Identity a-\u003e View view m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:wcached\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:wcached\"]"
        },
        "index": {
          "description": "shorter name for cachedWidget",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "wcached",
          "normalized": "String-\u003eInt-\u003eView a Identity b-\u003eView a c b",
          "package": "MFlow",
          "signature": "String-\u003eInt-\u003eView view Identity a-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:wcached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is a callback in the view monad. The callback rendering substitutes the widget rendering\n when the latter is validated, without afecting the rendering of other widgets. This allow\n the simultaneous execution of different behaviours in different widgets in the\n same page. The inspiration is the callback primitive in the Seaside Web Framework\n that allows similar functionality (See \u003ca\u003ehttp://www.seaside.st\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eThis is the visible difference with \u003ccode\u003ewaction\u003c/code\u003e callbacks, which execute a\n a flow in the FlowM monad that takes complete control of the navigation, while wactions are\n executed whithin the same page.\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "wcallback",
          "package": "MFlow",
          "signature": "View view m a -\u003e (a -\u003e View view m b) -\u003e View view m b",
          "source": "src/MFlow-Forms-Internals.html#wcallback",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:wcallback\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:wcallback\"]"
        },
        "index": {
          "description": "It is callback in the view monad The callback rendering substitutes the widget rendering when the latter is validated without afecting the rendering of other widgets This allow the simultaneous execution of different behaviours in different widgets in the same page The inspiration is the callback primitive in the Seaside Web Framework that allows similar functionality See http www.seaside.st This is the visible difference with waction callbacks which execute flow in the FlowM monad that takes complete control of the navigation while wactions are executed whithin the same page",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "wcallback",
          "normalized": "View a b c-\u003e(c-\u003eView a b d)-\u003eView a b d",
          "package": "MFlow",
          "signature": "View view m a-\u003e(a-\u003eView view m b)-\u003eView view m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:wcallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003ecachedWidget\u003c/a\u003e\u003c/code\u003e, which cache the rendering but not the user response, \u003ccode\u003ewfreeze\u003c/code\u003e\n cache also the user response. This is useful for pseudo-widgets which just show information\n while the controls are in other non freezed widgets. A freezed widget ever return the first user response\n It is faster than \u003ccode\u003e\u003ca\u003ecachedWidget\u003c/a\u003e\u003c/code\u003e.\n It is not restricted to the Identity monad.\n\u003c/p\u003e\u003cp\u003eNOTE: the content of freezed widgets are shared by all users\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms.Internals\",\"MFlow.Forms\"]",
          "name": "wfreeze",
          "package": "MFlow",
          "signature": "String-\u003e Int-\u003e View view m a-\u003e View view m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:wfreeze\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:wfreeze\"]"
        },
        "index": {
          "description": "Unlike cachedWidget which cache the rendering but not the user response wfreeze cache also the user response This is useful for pseudo-widgets which just show information while the controls are in other non freezed widgets freezed widget ever return the first user response It is faster than cachedWidget It is not restricted to the Identity monad NOTE the content of freezed widgets are shared by all users",
          "hierarchy": "MFlow Forms Internals",
          "module": "MFlow.Forms.Internals",
          "name": "wfreeze",
          "normalized": "String-\u003eInt-\u003eView a b c-\u003eView a b c",
          "package": "MFlow",
          "signature": "String-\u003eInt-\u003eView view m a-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Internals.html#v:wfreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Test",
          "name": "Test",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Test.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MFlow Forms Test",
          "module": "MFlow.Forms.Test",
          "name": "Test",
          "package": "MFlow",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Test",
          "name": "Generate",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Test.html#Generate",
          "type": "class"
        },
        "index": {
          "hierarchy": "MFlow Forms Test",
          "module": "MFlow.Forms.Test",
          "name": "Generate",
          "package": "MFlow",
          "partial": "Generate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Test.html#t:Generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea simulated ask that generate  simulated user input of the type expected.\n\u003c/p\u003e\u003cp\u003eIt forces the web page rendering, since it is monadic and can contain\n side effects and load effects to be tested.\n\u003c/p\u003e\u003cp\u003eit is a substitute of \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eMFlow.Forms\u003c/a\u003e for testing purposes.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Test",
          "name": "ask",
          "package": "MFlow",
          "signature": "View v m a -\u003e FlowM v m a",
          "source": "src/MFlow-Forms-Test.html#ask",
          "type": "function"
        },
        "index": {
          "description": "simulated ask that generate simulated user input of the type expected It forces the web page rendering since it is monadic and can contain side effects and load effects to be tested it is substitute of ask from MFlow.Forms for testing purposes",
          "hierarchy": "MFlow Forms Test",
          "module": "MFlow.Forms.Test",
          "name": "ask",
          "normalized": "View a b c-\u003eFlowM a b c",
          "package": "MFlow",
          "signature": "View v m a-\u003eFlowM v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Test.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einstead of generating a result like \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e, the result is given as the first parameter\n so it does not need a Generate instance.\n\u003c/p\u003e\u003cp\u003eIt forces the web page rendering, since it is monadic so it can contain\n side effects and load effects to be tested.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Test",
          "name": "askt",
          "package": "MFlow",
          "signature": "(Int -\u003e a) -\u003e View v m a -\u003e FlowM v m a",
          "source": "src/MFlow-Forms-Test.html#askt",
          "type": "function"
        },
        "index": {
          "description": "instead of generating result like ask the result is given as the first parameter so it does not need Generate instance It forces the web page rendering since it is monadic so it can contain side effects and load effects to be tested",
          "hierarchy": "MFlow Forms Test",
          "module": "MFlow.Forms.Test",
          "name": "askt",
          "normalized": "(Int-\u003ea)-\u003eView b c a-\u003eFlowM b c a",
          "package": "MFlow",
          "signature": "(Int-\u003ea)-\u003eView v m a-\u003eFlowM v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Test.html#v:askt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Test",
          "name": "generate",
          "package": "MFlow",
          "signature": "IO a",
          "source": "src/MFlow-Forms-Test.html#generate",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms Test",
          "module": "MFlow.Forms.Test",
          "name": "generate",
          "package": "MFlow",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Test.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Test",
          "name": "getUser",
          "package": "MFlow",
          "signature": "Maybe String -\u003e View view m (Maybe (String, String), Maybe String) -\u003e FlowM view m String",
          "source": "src/MFlow-Forms-Test.html#getUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Test",
          "module": "MFlow.Forms.Test",
          "name": "getUser",
          "normalized": "Maybe String-\u003eView a b(Maybe(String,String),Maybe String)-\u003eFlowM a b String",
          "package": "MFlow",
          "partial": "User",
          "signature": "Maybe String-\u003eView view m(Maybe(String,String),Maybe String)-\u003eFlowM view m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Test.html#v:getUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Test",
          "name": "getUserSimple",
          "package": "MFlow",
          "signature": "FlowM view m String",
          "source": "src/MFlow-Forms-Test.html#getUserSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Test",
          "module": "MFlow.Forms.Test",
          "name": "getUserSimple",
          "package": "MFlow",
          "partial": "User Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Test.html#v:getUserSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einject substitutes an expression by other. It may be used to override\n ask interaction with the user. It should bee used infix for greater readability:\n\u003c/p\u003e\u003cpre\u003e ask something    `inject` const someother\n\u003c/pre\u003e\u003cp\u003eThe parameter passed is the test number\n if the flow has not been executed by runTest, inject return the original\n\u003c/p\u003e",
          "module": "MFlow.Forms.Test",
          "name": "inject",
          "package": "MFlow",
          "signature": "m b -\u003e (Int -\u003e b) -\u003e m b",
          "source": "src/MFlow-Forms-Test.html#inject",
          "type": "function"
        },
        "index": {
          "description": "inject substitutes an expression by other It may be used to override ask interaction with the user It should bee used infix for greater readability ask something inject const someother The parameter passed is the test number if the flow has not been executed by runTest inject return the original",
          "hierarchy": "MFlow Forms Test",
          "module": "MFlow.Forms.Test",
          "name": "inject",
          "normalized": "a b-\u003e(Int-\u003eb)-\u003ea b",
          "package": "MFlow",
          "signature": "m b-\u003e(Int-\u003eb)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Test.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun a list of flows with a number of simultaneous threads\n\u003c/p\u003e",
          "module": "MFlow.Forms.Test",
          "name": "runTest",
          "package": "MFlow",
          "signature": "[(Int, Flow)] -\u003e IO ()",
          "source": "src/MFlow-Forms-Test.html#runTest",
          "type": "function"
        },
        "index": {
          "description": "run list of flows with number of simultaneous threads",
          "hierarchy": "MFlow Forms Test",
          "module": "MFlow.Forms.Test",
          "name": "runTest",
          "normalized": "[(Int,Flow)]-\u003eIO()",
          "package": "MFlow",
          "partial": "Test",
          "signature": "[(Int,Flow)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Test.html#v:runTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Test",
          "name": "runTest1",
          "package": "MFlow",
          "signature": "(Token -\u003e Workflow IO b) -\u003e IO (Either WFErrors b)",
          "source": "src/MFlow-Forms-Test.html#runTest1",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Test",
          "module": "MFlow.Forms.Test",
          "name": "runTest1",
          "normalized": "(Token-\u003eWorkflow IO a)-\u003eIO(Either WFErrors a)",
          "package": "MFlow",
          "partial": "Test",
          "signature": "(Token-\u003eWorkflow IO b)-\u003eIO(Either WFErrors b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Test.html#v:runTest1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Test",
          "name": "userWidget",
          "package": "MFlow",
          "signature": "Maybe String -\u003e View view m (Maybe (String, String), Maybe String) -\u003e View view m String",
          "source": "src/MFlow-Forms-Test.html#userWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Test",
          "module": "MFlow.Forms.Test",
          "name": "userWidget",
          "normalized": "Maybe String-\u003eView a b(Maybe(String,String),Maybe String)-\u003eView a b String",
          "package": "MFlow",
          "partial": "Widget",
          "signature": "Maybe String-\u003eView view m(Maybe(String,String),Maybe String)-\u003eView view m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Test.html#v:userWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea pure version of verifyM\n\u003c/p\u003e",
          "module": "MFlow.Forms.Test",
          "name": "verify",
          "package": "MFlow",
          "signature": "a -\u003e (Bool, String) -\u003e a",
          "source": "src/MFlow-Forms-Test.html#verify",
          "type": "function"
        },
        "index": {
          "description": "pure version of verifyM",
          "hierarchy": "MFlow Forms Test",
          "module": "MFlow.Forms.Test",
          "name": "verify",
          "normalized": "a-\u003e(Bool,String)-\u003ea",
          "package": "MFlow",
          "signature": "a-\u003e(Bool,String)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Test.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome dynamic widgets, widgets that dynamically edit content in other widgets,\nwidgets for templating, content management and multilanguage. And some primitives\nto create other active widgets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "Widgets",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Widgets.html",
          "type": "module"
        },
        "index": {
          "description": "Some dynamic widgets widgets that dynamically edit content in other widgets widgets for templating content management and multilanguage And some primitives to create other active widgets",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "Widgets",
          "package": "MFlow",
          "partial": "Widgets",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Widgets",
          "name": "UpdateMethod",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Widgets.html#UpdateMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "UpdateMethod",
          "package": "MFlow",
          "partial": "Update Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#t:UpdateMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Widgets",
          "name": "Append",
          "package": "MFlow",
          "signature": "Append",
          "source": "src/MFlow-Forms-Widgets.html#UpdateMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "Append",
          "package": "MFlow",
          "partial": "Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:Append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Widgets",
          "name": "Html",
          "package": "MFlow",
          "signature": "Html",
          "source": "src/MFlow-Forms-Widgets.html#UpdateMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "Html",
          "package": "MFlow",
          "partial": "Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:Html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Widgets",
          "name": "Prepend",
          "package": "MFlow",
          "signature": "Prepend",
          "source": "src/MFlow-Forms-Widgets.html#UpdateMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "Prepend",
          "package": "MFlow",
          "partial": "Prepend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:Prepend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoes the same than autoRefresh but append the result of each request to the bottom of the widget\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "appendUpdate",
          "package": "MFlow",
          "signature": "View v m a -\u003e View v m a",
          "source": "src/MFlow-Forms-Widgets.html#appendUpdate",
          "type": "function"
        },
        "index": {
          "description": "does the same than autoRefresh but append the result of each request to the bottom of the widget",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "appendUpdate",
          "normalized": "View a b c-\u003eView a b c",
          "package": "MFlow",
          "partial": "Update",
          "signature": "View v m a-\u003eView v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:appendUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eprependWidget\u003c/a\u003e\u003c/code\u003e but append the widget instead of prepend.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "appendWidget",
          "package": "MFlow",
          "signature": "ByteString -\u003e View v Identity a -\u003e View v m ByteString",
          "source": "src/MFlow-Forms-Widgets.html#appendWidget",
          "type": "function"
        },
        "index": {
          "description": "Like prependWidget but append the widget instead of prepend",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "appendWidget",
          "normalized": "ByteString-\u003eView a Identity b-\u003eView a c ByteString",
          "package": "MFlow",
          "partial": "Widget",
          "signature": "ByteString-\u003eView v Identity a-\u003eView v m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:appendWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture the form submissions and the links of the enclosed widget and send them via jQuery AJAX.\n The response is the new presentation of the widget, that is updated. No new page is generated\n but the functionality is equivalent. Only the activated widget is executed in the server and updated\n in the client, so a widget with autoRefresh can be used in heavyweight pages.\n If AJAX/JavaScript are not available, the widget is refreshed normally, via a new page.\n If has form elements, the enclosed widget must be a complete form and it must include the form action tag.\n For this purpose, autoRefresh encloses the widget in a form tag if there are form elements on it\n and the programmer has not enclosed them in a \u003ccode\u003e\u003ca\u003ewform\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "autoRefresh",
          "package": "MFlow",
          "signature": "View v m a -\u003e View v m a",
          "source": "src/MFlow-Forms-Widgets.html#autoRefresh",
          "type": "function"
        },
        "index": {
          "description": "Capture the form submissions and the links of the enclosed widget and send them via jQuery AJAX The response is the new presentation of the widget that is updated No new page is generated but the functionality is equivalent Only the activated widget is executed in the server and updated in the client so widget with autoRefresh can be used in heavyweight pages If AJAX JavaScript are not available the widget is refreshed normally via new page If has form elements the enclosed widget must be complete form and it must include the form action tag For this purpose autoRefresh encloses the widget in form tag if there are form elements on it and the programmer has not enclosed them in wform element",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "autoRefresh",
          "normalized": "View a b c-\u003eView a b c",
          "package": "MFlow",
          "partial": "Refresh",
          "signature": "View v m a-\u003eView v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:autoRefresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Widgets",
          "name": "dField",
          "package": "MFlow",
          "signature": "View view m b -\u003e View view m b",
          "source": "src/MFlow-Forms-Widgets.html#dField",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "dField",
          "normalized": "View a b c-\u003eView a b c",
          "package": "MFlow",
          "partial": "Field",
          "signature": "View view m b-\u003eView view m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:dField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epresent the JQuery datepicker calendar to choose a date.\n The second parameter is the configuration. Use \"()\" by default.\n See http:\u003cem/\u003ejqueryui.com\u003cem\u003edatepicker\u003c/em\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "datePicker",
          "package": "MFlow",
          "signature": "String -\u003e Maybe String -\u003e View v m (Int, Int, Int)",
          "source": "src/MFlow-Forms-Widgets.html#datePicker",
          "type": "function"
        },
        "index": {
          "description": "present the JQuery datepicker calendar to choose date The second parameter is the configuration Use by default See http jqueryui.com datepicker",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "datePicker",
          "normalized": "String-\u003eMaybe String-\u003eView a b(Int,Int,Int)",
          "package": "MFlow",
          "partial": "Picker",
          "signature": "String-\u003eMaybe String-\u003eView v m(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:datePicker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes the list of edited widgets for a certain identifier and with the type of the witness widget parameter\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "delEdited",
          "package": "MFlow",
          "signature": "ByteString-\u003e [View v m1 a]-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Deletes the list of edited widgets for certain identifier and with the type of the witness widget parameter",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "delEdited",
          "normalized": "ByteString-\u003e[View a b c]-\u003eb()",
          "package": "MFlow",
          "partial": "Edited",
          "signature": "ByteString-\u003e[View v m a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:delEdited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eload a template with the name equal to the second parameter in the texts folder. If no template\n exist, it uses the widget rendering. If the first parameter match the name of the logged user,\n the template will be editable at runtime. edTemplate will present an edition bar on the top of\n the template. The changes in the template will be effective inmediately for all the users.\n\u003c/p\u003e\u003cp\u003eThe return value is the one returned by the internal widget each time it is executed.\n\u003c/p\u003e\u003cp\u003eedTemplate can be used to enrich the content and layout of a widget, for example, by adding\n extra links, text and formatting. Widgets with form fields work well with an \u003ccode\u003e\u003ca\u003eedTemplate\u003c/a\u003e\u003c/code\u003e mask\n as long as the tags created by the widget are not deleted, but the validation messages will not appear\n\u003c/p\u003e\u003cp\u003eTo add dynamic elements to the template for data presentation and\u003cem/\u003eor input field validation\n messages, combine it with \u003ccode\u003e\u003ca\u003ewiterate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edField\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "edTemplate",
          "package": "MFlow",
          "signature": "UserStr -\u003e Key -\u003e View v m a -\u003e View v m a",
          "source": "src/MFlow-Forms-Widgets.html#edTemplate",
          "type": "function"
        },
        "index": {
          "description": "load template with the name equal to the second parameter in the texts folder If no template exist it uses the widget rendering If the first parameter match the name of the logged user the template will be editable at runtime edTemplate will present an edition bar on the top of the template The changes in the template will be effective inmediately for all the users The return value is the one returned by the internal widget each time it is executed edTemplate can be used to enrich the content and layout of widget for example by adding extra links text and formatting Widgets with form fields work well with an edTemplate mask as long as the tags created by the widget are not deleted but the validation messages will not appear To add dynamic elements to the template for data presentation and or input field validation messages combine it with witerate and dField",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "edTemplate",
          "normalized": "UserStr-\u003eKey-\u003eView a b c-\u003eView a b c",
          "package": "MFlow",
          "partial": "Template",
          "signature": "UserStr-\u003eKey-\u003eView v m a-\u003eView v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:edTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the list of edited widgets (added by the active widgets) for a given identifier\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "getEdited",
          "package": "MFlow",
          "signature": "ByteString -\u003e m [View v m1 a]",
          "source": "src/MFlow-Forms-Widgets.html#getEdited",
          "type": "function"
        },
        "index": {
          "description": "Return the list of edited widgets added by the active widgets for given identifier",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "getEdited",
          "normalized": "ByteString-\u003ea[View b a c]",
          "package": "MFlow",
          "partial": "Edited",
          "signature": "ByteString-\u003em[View v m a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:getEdited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshow the jQuery spinner widget. the first parameter is the configuration . Use \"()\" by default.\n See http:\u003cem/\u003ejqueryui.com/spinner\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "getSpinner",
          "package": "MFlow",
          "signature": "String -\u003e Maybe a -\u003e View view m a",
          "source": "src/MFlow-Forms-Widgets.html#getSpinner",
          "type": "function"
        },
        "index": {
          "description": "show the jQuery spinner widget the first parameter is the configuration Use by default See http jqueryui.com spinner",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "getSpinner",
          "normalized": "String-\u003eMaybe a-\u003eView b c a",
          "package": "MFlow",
          "partial": "Spinner",
          "signature": "String-\u003eMaybe a-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:getSpinner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Widgets",
          "name": "htmlEdit",
          "package": "MFlow",
          "signature": "[String] -\u003e UserStr -\u003e View v m a -\u003e View v m a",
          "source": "src/MFlow-Forms-Widgets.html#htmlEdit",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "htmlEdit",
          "normalized": "[String]-\u003eUserStr-\u003eView a b c-\u003eView a b c",
          "package": "MFlow",
          "partial": "Edit",
          "signature": "[String]-\u003eUserStr-\u003eView v m a-\u003eView v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:htmlEdit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multilanguage version of tField\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "mField",
          "package": "MFlow",
          "signature": "[Char] -\u003e View v m ()",
          "source": "src/MFlow-Forms-Widgets.html#mField",
          "type": "function"
        },
        "index": {
          "description": "multilanguage version of tField",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "mField",
          "normalized": "[Char]-\u003eView a b()",
          "package": "MFlow",
          "partial": "Field",
          "signature": "[Char]-\u003eView v m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:mField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multilanguage version of tFieldEd. For a field with \u003ccode\u003ekey\u003c/code\u003e it add a suffix with the\n two characters of the language used.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "mFieldEd",
          "package": "MFlow",
          "signature": "UserStr -\u003e [Char] -\u003e v -\u003e View v m ()",
          "source": "src/MFlow-Forms-Widgets.html#mFieldEd",
          "type": "function"
        },
        "index": {
          "description": "multilanguage version of tFieldEd For field with key it add suffix with the two characters of the language used",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "mFieldEd",
          "normalized": "UserStr-\u003e[Char]-\u003ea-\u003eView a b()",
          "package": "MFlow",
          "partial": "Field Ed",
          "signature": "UserStr-\u003e[Char]-\u003ev-\u003eView v m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:mFieldEd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a logout link if the user is logged. Nothing otherwise\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "maybeLogout",
          "package": "MFlow",
          "signature": "View v m ()",
          "source": "src/MFlow-Forms-Widgets.html#maybeLogout",
          "type": "function"
        },
        "index": {
          "description": "Display logout link if the user is logged Nothing otherwise",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "maybeLogout",
          "normalized": "View a b()",
          "package": "MFlow",
          "partial": "Logout",
          "signature": "View v m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:maybeLogout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn some cases, it is neccessary that a link or form inside a \u003ccode\u003e\u003ca\u003eautoRefresh\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003eupdate\u003c/code\u003e block\n should not be autorefreshed, since it produces side effects in the rest of the page that\n affect to the rendering of the whole. If you like to refresh the whole page, simply add\n noAutoRefresh attribute to the widget to force the refresh of the whole page when it is activated.\n\u003c/p\u003e\u003cp\u003eThat behaviour is common at the last sentence of the \u003ccode\u003e\u003ca\u003eautoRefresh\u003c/a\u003e\u003c/code\u003e block.\n\u003c/p\u003e\u003cp\u003eThis is a cascade menu example.\n\u003c/p\u003e\u003cpre\u003e r \u003c- page $ autoRefresh $ ul \u003c\u003c\u003c do\n        li \u003c\u003c\u003c wlink OptionA \u003c\u003c \"option A\"\n        ul \u003c\u003c\u003c li \u003c\u003c\u003c (wlink OptionA1 \u003c\u003c \"Option A1\" \u003c! noAutoRefresh)\n           \u003c|\u003e li \u003c\u003c\u003c (wlink OptionA2 \u003c\u003c \"Option A2\" \u003c! noAutoRefresh)\n        \u003c|\u003e...\n           maybe other content\n\n case r of\n    OptionA1 -\u003e pageA1\n    OptionA2 -\u003e pageA2\n\u003c/pre\u003e\u003cp\u003ewhen \u003ccode\u003eoption A\u003c/code\u003e is clicked, the two sub-options appear with autorefresh. Only the two\n lines are returned by the server using AJAX. but when Option A1-2 is pressed we want to\n present other pages, so we add the noAutorefresh attribute.\n\u003c/p\u003e\u003cp\u003eNOTE: the noAutoRefresh attribute should be added to the \u003ca\u003ea/\u003c/a\u003e or \u003ca\u003eform/\u003c/a\u003e tags.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "noAutoRefresh",
          "package": "MFlow",
          "signature": "[(String, String)]",
          "source": "src/MFlow-Forms-Widgets.html#noAutoRefresh",
          "type": "function"
        },
        "index": {
          "description": "In some cases it is neccessary that link or form inside autoRefresh or update block should not be autorefreshed since it produces side effects in the rest of the page that affect to the rendering of the whole If you like to refresh the whole page simply add noAutoRefresh attribute to the widget to force the refresh of the whole page when it is activated That behaviour is common at the last sentence of the autoRefresh block This is cascade menu example page autoRefresh ul do li wlink OptionA option ul li wlink OptionA1 Option A1 noAutoRefresh li wlink OptionA2 Option A2 noAutoRefresh maybe other content case of OptionA1 pageA1 OptionA2 pageA2 when option is clicked the two sub-options appear with autorefresh Only the two lines are returned by the server using AJAX but when Option A1-2 is pressed we want to present other pages so we add the noAutorefresh attribute NOTE the noAutoRefresh attribute should be added to the or form tags",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "noAutoRefresh",
          "normalized": "[(String,String)]",
          "package": "MFlow",
          "partial": "Auto Refresh",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:noAutoRefresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoes the same than autoRefresh but prepend the result of each request before the current widget content\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "prependUpdate",
          "package": "MFlow",
          "signature": "View v m a -\u003e View v m a",
          "source": "src/MFlow-Forms-Widgets.html#prependUpdate",
          "type": "function"
        },
        "index": {
          "description": "does the same than autoRefresh but prepend the result of each request before the current widget content",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "prependUpdate",
          "normalized": "View a b c-\u003eView a b c",
          "package": "MFlow",
          "partial": "Update",
          "signature": "View v m a-\u003eView v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:prependUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the javascript to be executed on the browser to prepend a widget to the location\n identified by the selector (the bytestring parameter), The selector must have the form of a jquery expression\n . It stores the added widgets in the edited list, that is accessed with \u003ccode\u003e\u003ca\u003egetEdited\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe resulting string can be executed in the browser. \u003ccode\u003e\u003ca\u003eajax\u003c/a\u003e\u003c/code\u003e will return the code to\n execute the complete ajax roundtrip. This code returned by ajax must be in an eventhabdler.\n\u003c/p\u003e\u003cp\u003eThis example  will insert a widget in the div  when the element with identifier\n \u003cem\u003eclickelem\u003c/em\u003e  is clicked. when the form is sbmitted, the widget values are returned\n and the list of edited widgets are deleted.\n\u003c/p\u003e\u003cpre\u003e    id1\u003c- genNewId\n    let sel= \"$('#\" \u003c\u003e  B.pack id1 \u003c\u003e \"')\"\n    callAjax \u003c- ajax . const $ prependWidget sel wn\n    let installevents= \"$(document).ready(function(){\\\n              \\$('#clickelem').click(function(){\"++callAjax \"''\"++\"});})\"\n\n    requires [JScriptFile jqueryScript [installevents] ]\n    ws \u003c- getEdited sel\n    r \u003c-  (div \u003c\u003c\u003c manyOf ws) \u003c! [(\"id\",id1)]\n    delEdited sel ws'\n    return  r\n\u003c/pre\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "prependWidget",
          "package": "MFlow",
          "signature": "ByteString-\u003e View v Identity a-\u003e View v m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Return the javascript to be executed on the browser to prepend widget to the location identified by the selector the bytestring parameter The selector must have the form of jquery expression It stores the added widgets in the edited list that is accessed with getEdited The resulting string can be executed in the browser ajax will return the code to execute the complete ajax roundtrip This code returned by ajax must be in an eventhabdler This example will insert widget in the div when the element with identifier clickelem is clicked when the form is sbmitted the widget values are returned and the list of edited widgets are deleted id1 genNewId let sel B.pack id1 callAjax ajax const prependWidget sel wn let installevents document ready function clickelem click function callAjax requires JScriptFile jqueryScript installevents ws getEdited sel div manyOf ws id id1 delEdited sel ws return",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "prependWidget",
          "normalized": "ByteString-\u003eView a Identity b-\u003eView a c ByteString",
          "package": "MFlow",
          "partial": "Widget",
          "signature": "ByteString-\u003eView v Identity a-\u003eView v m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:prependWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtinously execute a widget and update the content.\n The update method specify how the update is done. \u003ccode\u003e\u003ca\u003eHtml\u003c/a\u003e\u003c/code\u003e means a substitution of content.\n The second parameter is the delay for the next retry in case of disconnection, in milliseconds.\n\u003c/p\u003e\u003cp\u003eIt can be used to show data updates in the server. The widget is executed in a different process than\n  the one of the rest of the page. Although the process is initiated with the session context,\n updates in the session context are not seen by the push widget\n To communicate with te widget, use DBRef's or TVar and the\n STM semantics for waiting updates using \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWidgets in a push can have links and forms, but since they are asunchonous, they can not\n return inputs. but they can modify the server state.\n push ever return an invalid response to the calling widget, so it never\n triggers the advance of the navigation.\n\u003c/p\u003e\u003cp\u003eThis example is a counter increased each second:\n\u003c/p\u003e\u003cpre\u003e pushIncrease= do\n   tv \u003c- liftIO $ newTVarIO 0\n   page $ push 0 Html $ do\n       n \u003c- atomic $ readTVar tv\n       atomic $ writeTVar tv $ n + 1\n       liftIO $ threadDelay 1000000\n       b \u003c\u003c (show n) ++\u003e noWidget\n\u003c/pre\u003e\u003cp\u003eThis other  simulates a console output that echoes what is entered in a text box\n below. It has two widgets: a push output in append mode and a text box input.\n The communication it uses a TVar. The push widget wait for updates in the TVar.\n because the second widget uses autoRefresh, all happens in the same page.\n\u003c/p\u003e\u003cp\u003eIt is recommended to add a timeout to the push widget, like in the example:\n\u003c/p\u003e\u003cpre\u003e  pushSample=  do\n   tv \u003c- liftIO $ newTVarIO $ Just \"init\"\n   page $ push Append 1000 (disp tv) \u003c** input tv\n\n   where\n   disp tv= do\n       setTimeouts 100 0\n       line \u003c- tget tv\n       p \u003c\u003c  line ++\u003e noWidget\n\n   input tv= autoRefresh $ do\n       line \u003c- getString Nothing \u003c** submitButton \"Enter\"\n       tput tv line\n\n   tput tv x = atomic $ writeTVar  tv ( Just x)  !\u003e \"WRITE\"\n\n   tget tv= atomic $ do\n       mr \u003c- readTVar tv\n       case mr of\n          Nothing -\u003e retry\n          Just r -\u003e do\n           writeTVar tv Nothing\n           return r\n\u003c/pre\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "push",
          "package": "MFlow",
          "signature": "UpdateMethod -\u003e Int -\u003e View v IO () -\u003e View v IO ()",
          "source": "src/MFlow-Forms-Widgets.html#push",
          "type": "function"
        },
        "index": {
          "description": "continously execute widget and update the content The update method specify how the update is done Html means substitution of content The second parameter is the delay for the next retry in case of disconnection in milliseconds It can be used to show data updates in the server The widget is executed in different process than the one of the rest of the page Although the process is initiated with the session context updates in the session context are not seen by the push widget To communicate with te widget use DBRef or TVar and the STM semantics for waiting updates using retry Widgets in push can have links and forms but since they are asunchonous they can not return inputs but they can modify the server state push ever return an invalid response to the calling widget so it never triggers the advance of the navigation This example is counter increased each second pushIncrease do tv liftIO newTVarIO page push Html do atomic readTVar tv atomic writeTVar tv liftIO threadDelay show noWidget This other simulates console output that echoes what is entered in text box below It has two widgets push output in append mode and text box input The communication it uses TVar The push widget wait for updates in the TVar because the second widget uses autoRefresh all happens in the same page It is recommended to add timeout to the push widget like in the example pushSample do tv liftIO newTVarIO Just init page push Append disp tv input tv where disp tv do setTimeouts line tget tv line noWidget input tv autoRefresh do line getString Nothing submitButton Enter tput tv line tput tv atomic writeTVar tv Just WRITE tget tv atomic do mr readTVar tv case mr of Nothing retry Just do writeTVar tv Nothing return",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "push",
          "normalized": "UpdateMethod-\u003eInt-\u003eView a IO()-\u003eView a IO()",
          "package": "MFlow",
          "signature": "UpdateMethod-\u003eInt-\u003eView v IO()-\u003eView v IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eL  ike \u003ccode\u003e\u003ca\u003eprependWidget\u003c/a\u003e\u003c/code\u003e but set the entire content of the selector instead of prepending an element\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "setWidget",
          "package": "MFlow",
          "signature": "ByteString -\u003e View v Identity a -\u003e View v m ByteString",
          "source": "src/MFlow-Forms-Widgets.html#setWidget",
          "type": "function"
        },
        "index": {
          "description": "ike prependWidget but set the entire content of the selector instead of prepending an element",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "setWidget",
          "normalized": "ByteString-\u003eView a Identity b-\u003eView a c ByteString",
          "package": "MFlow",
          "partial": "Widget",
          "signature": "ByteString-\u003eView v Identity a-\u003eView v m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:setWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea text field. Read the cached  field value and present it without edition.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "tField",
          "package": "MFlow",
          "signature": "Key -\u003e View v m ()",
          "source": "src/MFlow-Forms-Widgets.html#tField",
          "type": "function"
        },
        "index": {
          "description": "text field Read the cached field value and present it without edition",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "tField",
          "normalized": "Key-\u003eView a b()",
          "package": "MFlow",
          "partial": "Field",
          "signature": "Key-\u003eView v m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:tField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA widget that display the content of an  html, But if the user has edition privileges,\n it permits to edit it in place. So the editor could see the final appearance\n of what he writes.\n\u003c/p\u003e\u003cp\u003eWhen the user  click the save, the content is saved and\n identified by the key. Then, from now on, all the users will see the saved\n content instead of the code content.\n\u003c/p\u003e\u003cp\u003eThe content is saved in a file by default (\u003cem\u003etexts\u003c/em\u003e in this versions), but there is\n a configurable version (\u003ccode\u003etFieldGen\u003c/code\u003e). The content of the element and the formatting\n is cached in memory, so the display is, theoretically, very fast.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "tFieldEd",
          "package": "MFlow",
          "signature": "UserStr -\u003e Key -\u003e v -\u003e View v m ()",
          "source": "src/MFlow-Forms-Widgets.html#tFieldEd",
          "type": "function"
        },
        "index": {
          "description": "widget that display the content of an html But if the user has edition privileges it permits to edit it in place So the editor could see the final appearance of what he writes When the user click the save the content is saved and identified by the key Then from now on all the users will see the saved content instead of the code content The content is saved in file by default texts in this versions but there is configurable version tFieldGen The content of the element and the formatting is cached in memory so the display is theoretically very fast",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "tFieldEd",
          "normalized": "UserStr-\u003eKey-\u003ea-\u003eView a b()",
          "package": "MFlow",
          "partial": "Field Ed",
          "signature": "UserStr-\u003eKey-\u003ev-\u003eView v m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:tFieldEd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the same than template but without the edition facility\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "template",
          "package": "MFlow",
          "signature": "[Char] -\u003e View view m a -\u003e View view m a",
          "source": "src/MFlow-Forms-Widgets.html#template",
          "type": "function"
        },
        "index": {
          "description": "Does the same than template but without the edition facility",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "template",
          "normalized": "[Char]-\u003eView a b c-\u003eView a b c",
          "package": "MFlow",
          "signature": "[Char]-\u003eView view m a-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Widgets",
          "name": "tfieldKey",
          "package": "MFlow",
          "signature": "TField -\u003e Key",
          "source": "src/MFlow-Forms-Widgets.html#tfieldKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "tfieldKey",
          "normalized": "TField-\u003eKey",
          "package": "MFlow",
          "partial": "Key",
          "signature": "TField-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:tfieldKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePresent a user form if not logged in. Otherwise, the user name and a logout link is presented.\n The paremeters and the behaviour are the same as \u003ccode\u003e\u003ca\u003euserWidget\u003c/a\u003e\u003c/code\u003e.\n Only the display is different\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "userFormOrName",
          "package": "MFlow",
          "signature": "Maybe String -\u003e View view m (Maybe (UserStr, PasswdStr), Maybe String) -\u003e View view m String",
          "source": "src/MFlow-Forms-Widgets.html#userFormOrName",
          "type": "function"
        },
        "index": {
          "description": "Present user form if not logged in Otherwise the user name and logout link is presented The paremeters and the behaviour are the same as userWidget Only the display is different",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "userFormOrName",
          "normalized": "Maybe String-\u003eView a b(Maybe(UserStr,PasswdStr),Maybe String)-\u003eView a b String",
          "package": "MFlow",
          "partial": "Form Or Name",
          "signature": "Maybe String-\u003eView view m(Maybe(UserStr,PasswdStr),Maybe String)-\u003eView view m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:userFormOrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInside a tag, it add and delete widgets of the same type. When the form is submitted\n or a wlink is pressed, this widget return the list of validated widgets.\n the event for adding a new widget is attached , as a click event to the element of the page with the identifier \u003cem\u003ewEditListAdd\u003c/em\u003e\n that the user will choose.\n\u003c/p\u003e\u003cp\u003eThis example add or delete editable text boxes, with two initial boxes   with\n \u003cem\u003ehi\u003c/em\u003e, \u003cem\u003ehow are you\u003c/em\u003e as values. Tt uses blaze-html:\n\u003c/p\u003e\u003cpre\u003e  r \u003c-  ask  $   addLink\n              ++\u003e br\n              ++\u003e (El.div `wEditList`  getString1 $  [\"hi\", \"how are you\"]) \"addid\"\n              \u003c++ br\n              \u003c** submitButton \"send\"\n\n  ask $   p \u003c\u003c (show r ++ \" returned\")\n      ++\u003e wlink () (p \u003c\u003c text \" back to menu\")\n  mainmenu\n  where\n  addLink = a ! At.id  \"addid\"\n              ! href \"#\"\n              $ text \"add\"\n  delBox  =  input ! type_   \"checkbox\"\n                   ! checked \"\"\n                   ! onclick \"this.parentNode.parentNode.removeChild(this.parentNode)\"\n  getString1 mx= El.div  \u003c\u003c\u003c delBox ++\u003e getString  mx \u003c++ br\n\u003c/pre\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "wEditList",
          "package": "MFlow",
          "signature": "(view -\u003e view)-\u003e (Maybe String -\u003e View view Identity a)-\u003e [String]-\u003e String-\u003e View view m [a]",
          "type": "function"
        },
        "index": {
          "description": "Inside tag it add and delete widgets of the same type When the form is submitted or wlink is pressed this widget return the list of validated widgets the event for adding new widget is attached as click event to the element of the page with the identifier wEditListAdd that the user will choose This example add or delete editable text boxes with two initial boxes with hi how are you as values Tt uses blaze-html ask addLink br El.div wEditList getString1 hi how are you addid br submitButton send ask show returned wlink text back to menu mainmenu where addLink At.id addid href text add delBox input type checkbox checked onclick this.parentNode.parentNode.removeChild this.parentNode getString1 mx El.div delBox getString mx br",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "wEditList",
          "normalized": "(a-\u003ea)-\u003e(Maybe String-\u003eView a Identity b)-\u003e[String]-\u003eString-\u003eView a c[b]",
          "package": "MFlow",
          "partial": "Edit List",
          "signature": "(view-\u003eview)-\u003e(Maybe String-\u003eView view Identity a)-\u003e[String]-\u003eString-\u003eView view m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:wEditList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePresent the JQuery autocompletion list, from a procedure defined by the programmer, to a text box.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "wautocomplete",
          "package": "MFlow",
          "signature": "Maybe String-\u003e (String -\u003e IO a)-\u003e View v m String",
          "type": "function"
        },
        "index": {
          "description": "Present the JQuery autocompletion list from procedure defined by the programmer to text box",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "wautocomplete",
          "normalized": "Maybe String-\u003e(String-\u003eIO a)-\u003eView b c String",
          "package": "MFlow",
          "signature": "Maybe String-\u003e(String-\u003eIO a)-\u003eView v m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:wautocomplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a text box. It gives a autocompletion list to the textbox. When return\n is pressed in the textbox, the box content is used to create a widget of a kind defined\n by the user, which will be situated above of the textbox. When submitted, the result is the content\n of the created widgets (the validated ones).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ewautocompleteList\u003c/a\u003e\u003c/code\u003e is an specialization of this widget, where\n the widget parameter is fixed, with a checkbox that delete the eleement when unselected\n . This fixed widget is as such (using generic \u003ccode\u003eFormElem\u003c/code\u003e class tags):\n\u003c/p\u003e\u003cpre\u003e ftag \"div\"    \u003c\u003c\u003c ftag \"input\" mempty\n                               `attrs` [(\"type\",\"checkbox\")\n                                       ,(\"checked\",\"\")\n                                       ,(\"onclick\",\"this.parentNode.parentNode.removeChild(this.parentNode)\")]\n               ++\u003e ftag \"span\" (fromStr $ fromJust x )\n               ++\u003e whidden( fromJust x)\n\u003c/pre\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "wautocompleteEdit",
          "package": "MFlow",
          "signature": "String-\u003e (String -\u003e IO [String])-\u003e (Maybe String -\u003e View v Identity a)-\u003e [String]-\u003e View v m [a]",
          "type": "function"
        },
        "index": {
          "description": "Produces text box It gives autocompletion list to the textbox When return is pressed in the textbox the box content is used to create widget of kind defined by the user which will be situated above of the textbox When submitted the result is the content of the created widgets the validated ones wautocompleteList is an specialization of this widget where the widget parameter is fixed with checkbox that delete the eleement when unselected This fixed widget is as such using generic FormElem class tags ftag div ftag input mempty attrs type checkbox checked onclick this.parentNode.parentNode.removeChild this.parentNode ftag span fromStr fromJust whidden fromJust",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "wautocompleteEdit",
          "normalized": "String-\u003e(String-\u003eIO[String])-\u003e(Maybe String-\u003eView a Identity b)-\u003e[String]-\u003eView a c[b]",
          "package": "MFlow",
          "partial": "Edit",
          "signature": "String-\u003e(String-\u003eIO[String])-\u003e(Maybe String-\u003eView v Identity a)-\u003e[String]-\u003eView v m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:wautocompleteEdit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialization of \u003ccode\u003ewutocompleteEdit\u003c/code\u003e which make appear each chosen option with\n a checkbox that deletes the element when uncheched. The result, when submitted, is the list of selected elements.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "wautocompleteList",
          "package": "MFlow",
          "signature": "String -\u003e (String -\u003e IO [String]) -\u003e [String] -\u003e View v m [String]",
          "source": "src/MFlow-Forms-Widgets.html#wautocompleteList",
          "type": "function"
        },
        "index": {
          "description": "specialization of wutocompleteEdit which make appear each chosen option with checkbox that deletes the element when uncheched The result when submitted is the list of selected elements",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "wautocompleteList",
          "normalized": "String-\u003e(String-\u003eIO[String])-\u003e[String]-\u003eView a b[String]",
          "package": "MFlow",
          "partial": "List",
          "signature": "String-\u003e(String-\u003eIO[String])-\u003e[String]-\u003eView v m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:wautocompleteList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms.Widgets",
          "name": "wdialog",
          "package": "MFlow",
          "signature": "String -\u003e String -\u003e View v m a -\u003e View v m a",
          "source": "src/MFlow-Forms-Widgets.html#wdialog",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "wdialog",
          "normalized": "String-\u003eString-\u003eView a b c-\u003eView a b c",
          "package": "MFlow",
          "signature": "String-\u003eString-\u003eView v m a-\u003eView v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:wdialog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePermits to iterate the presentation of data and\u003cem/\u003eor input fields and widgets within\n a web page that does not change. The placeholders are created with dField.  Both are widget\n modifiers: The latter gets a widget and create a placeholder in the page that is updated\n via ajax. The content of the update is the rendering of the widget at each iteration.\n The former gets a wider widget which contains dField elements and permit the iteration.\n Whenever a link or a form within the witerate widget is activated, the result is the\n placeholders filled with the new  html content.  This content can be data, a input field,\n a link or a widget. No navigation happens.\n\u003c/p\u003e\u003cp\u003eThis permits even faster updates than autoRefresh.  since the latter refresh the whole\n widget and it does not permits modifications of the layout at runtime.\n\u003c/p\u003e\u003cp\u003eWhen edTemplate or template is used on top of witerate, the result is editable at runtime,\n and the span placeholders generated, that are updated via ajax can be relocated within\n the layout of the template.\n\u003c/p\u003e\u003cp\u003eAdditionally, contrary to some javascript frameworks, the pages generated with this\n mechanism are searchable by web crawlers.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "witerate",
          "package": "MFlow",
          "signature": "View v m a -\u003e View v m a",
          "source": "src/MFlow-Forms-Widgets.html#witerate",
          "type": "function"
        },
        "index": {
          "description": "Permits to iterate the presentation of data and or input fields and widgets within web page that does not change The placeholders are created with dField Both are widget modifiers The latter gets widget and create placeholder in the page that is updated via ajax The content of the update is the rendering of the widget at each iteration The former gets wider widget which contains dField elements and permit the iteration Whenever link or form within the witerate widget is activated the result is the placeholders filled with the new html content This content can be data input field link or widget No navigation happens This permits even faster updates than autoRefresh since the latter refresh the whole widget and it does not permits modifications of the layout at runtime When edTemplate or template is used on top of witerate the result is editable at runtime and the span placeholders generated that are updated via ajax can be relocated within the layout of the template Additionally contrary to some javascript frameworks the pages generated with this mechanism are searchable by web crawlers",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "witerate",
          "normalized": "View a b c-\u003eView a b c",
          "package": "MFlow",
          "signature": "View v m a-\u003eView v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:witerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf not logged, it present a page flow which askm  for the user name, then the password if not logged\n\u003c/p\u003e\u003cp\u003eIf logged, it present the user name and a link to logout\n\u003c/p\u003e\u003cp\u003enormally to be used with autoRefresh and pageFlow when used with other widgets.\n\u003c/p\u003e",
          "module": "MFlow.Forms.Widgets",
          "name": "wlogin",
          "package": "MFlow",
          "signature": "View v m ()",
          "source": "src/MFlow-Forms-Widgets.html#wlogin",
          "type": "function"
        },
        "index": {
          "description": "If not logged it present page flow which askm for the user name then the password if not logged If logged it present the user name and link to logout normally to be used with autoRefresh and pageFlow when used with other widgets",
          "hierarchy": "MFlow Forms Widgets",
          "module": "MFlow.Forms.Widgets",
          "name": "wlogin",
          "normalized": "View a b()",
          "package": "MFlow",
          "signature": "View v m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-Widgets.html#v:wlogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eFormInput\u003c/a\u003e\u003c/code\u003e  for  the \u003ccode\u003e\u003ca\u003eXHtml\u003c/a\u003e\u003c/code\u003e module of the xhtml package\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MFlow.Forms.XHtml",
          "name": "XHtml",
          "package": "MFlow",
          "source": "src/MFlow-Forms-XHtml.html",
          "type": "module"
        },
        "index": {
          "description": "Instances of FormInput for the XHtml module of the xhtml package",
          "hierarchy": "MFlow Forms XHtml",
          "module": "MFlow.Forms.XHtml",
          "name": "XHtml",
          "package": "MFlow",
          "partial": "XHtml",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms-XHtml.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMFlow run stateful server processes. This version is the first stateful web framework\nthat is as RESTful as a web framework can be.\n\u003c/p\u003e\u003cp\u003eThe routes are expressed as normal, monadic haskell code in the FlowM monad. Local links\npoint to alternative routes within this monadic computation just like a textual menu\nin a console application. Any GET page is directly reachable by means of a RESTful URL.\n\u003c/p\u003e\u003cp\u003eAt any moment the flow can respond to the back button or to any RESTful path that the user may paste in the navigation bar.\nIf the procedure is waiting for another different page, the FlowM monad backtrack until the path partially match\n. From this position the execution goes forward until the rest of the path match. This way the\nstatelessness is optional. However, it is possible to store a session state, which may backtrack or\nnot when the navigation goes back and forth. It is upto the programmer.\n\u003c/p\u003e\u003cp\u003eAll the flow of requests and responses are coded by the programmer in a single procedure.\nAllthoug single request-response flows are possible. Therefore, the code is\nmore understandable. It is not continuation based. It uses a log for thread state persistence and backtracking for\nhandling the back button. Back button state syncronization is supported out-of-the-box\n\u003c/p\u003e\u003cp\u003eThe MFlow architecture is scalable, since the state is serializable and small\n\u003c/p\u003e\u003cp\u003eThe processes are stopped and restarted by the\napplication server on demand, including the execution state (if the Wokflow monad is used).\nTherefore session management is automatic. State consistence and transactions are given by the TCache package.\n\u003c/p\u003e\u003cp\u003eThe processes interact trough widgets, that are an extension of formlets with\nadditional applicative combinators, formatting, link management, callbacks, modifiers, caching,\nbyteString conversion and AJAX. All is coded in pure haskell.\n\u003c/p\u003e\u003cp\u003eThe interfaces and communications are abstract, but there are bindings for blaze-html, HSP, Text.XHtml and byteString\n, Hack and WAI but it can be extended to non Web based architectures.\n\u003c/p\u003e\u003cp\u003eBindings for hack, and hsp \u003e= 0.8,  are not compiled by Hackage, and do not appear, but are included in the package files.\nTo use them, add then to the exported modules and execute cabal install\n\u003c/p\u003e\u003cp\u003eIt is designed for applications that can be run with no deployment with runghc in order\nto speed up the development process. see \u003ca\u003ehttp://haskell-web.blogspot.com.es/2013/05/a-web-application-in-tweet.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis module implement  stateful processes (flows) that are optionally persistent.\nThis means that they automatically store and recover his execution state. They are executed by the MFlow app server.\ndefined in the \u003ca\u003eMFlow\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eThese processses interact with the user trough user interfaces made of widgets (see below) that return back statically typed responses to\nthe calling process. Because flows are stateful, not request-response, the code is more understandable, because\nall the flow of request and responses is coded by the programmer in a single procedure in the FlowM monad. Allthoug\nsingle request-response flows and callbacks are possible.\n\u003c/p\u003e\u003cp\u003eThis module is abstract with respect to the formatting (here referred with the type variable \u003ccode\u003eview\u003c/code\u003e) . For an\ninstantiation for \u003ca\u003eText.XHtml\u003c/a\u003e  import \u003ca\u003eMFlow.Forms.XHtml\u003c/a\u003e, \u003ca\u003eMFlow.Hack.XHtml.All\u003c/a\u003e  or \u003ca\u003eMFlow.Wai.XHtml.All\u003c/a\u003e .\nTo use Haskell Server Pages import \u003ca\u003eMFlow.Forms.HSP\u003c/a\u003e. However the functionalities are documented here.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e is the only method for user interaction. It run in the \u003ccode\u003eMFlow view m\u003c/code\u003e monad, with \u003ccode\u003em\u003c/code\u003e the monad chosen by the user, usually IO.\nIt send user interfaces (in the \u003ccode\u003eView view m\u003c/code\u003e monad) and return statically\ntyped responses. The user interface definitions are  based on a extension of\nformLets (\u003ca\u003ehttp://www.haskell.org/haskellwiki/Formlets\u003c/a\u003e) with the addition of caching, links, formatting, attributes,\n extra combinators, callbaks and modifiers.\nThe interaction with the user is  stateful. In the same computation there may be  many\nrequest-response interactions, in the same way than in the case of a console applications. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e APPLICATION SERVER\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTherefore, session and state management is simple and transparent: it is in the haskell\nstructures in the scope of the computation. \u003ccode\u003e\u003ca\u003etransient\u003c/a\u003e\u003c/code\u003e (normal) procedures have no persistent session state\nand \u003ccode\u003e\u003ca\u003estateless\u003c/a\u003e\u003c/code\u003e procedures accept a single request and return a single response.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003estep\u003c/a\u003e\u003c/code\u003e is a lifting monad transformer that permit persistent server procedures that\nremember the execution state even after system shutdowns by using the package workflow (\u003ca\u003ehttp://hackage.haskell.org/package/Workflow\u003c/a\u003e) internally.\nThis state management is transparent. There is no programer interface for session management.\n\u003c/p\u003e\u003cp\u003eThe programmer set the process timeout and the session timeout with \u003ccode\u003e\u003ca\u003esetTimeouts\u003c/a\u003e\u003c/code\u003e.\nIf the procedure has been stopped due to the process timeout or due to a system shutdowm,\nthe procedure restart in the last state when a request for this procedure arrives\n(if the procedure uses the \u003ccode\u003e\u003ca\u003estep\u003c/a\u003e\u003c/code\u003e monad transformer)\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e WIDGETS\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe correctness of the web responses is assured by the use of formLets.\nBut unlike formLets in its current form, it permits the definition of widgets.\n\u003cem\u003eA widget is a combination of formLets and links within its own formatting template\u003c/em\u003e, all in\nthe same definition in the same source file, in plain declarative Haskell style.\n\u003c/p\u003e\u003cp\u003eThe formatting is abstract. It has to implement the \u003ccode\u003e\u003ca\u003eFormInput\u003c/a\u003e\u003c/code\u003e class.\nThere are instances for Text.XHtml (\u003ca\u003eMFlow.Forms.XHtml\u003c/a\u003e), Haskell Server Pages (\u003ca\u003eMFlow.Forms.HSP\u003c/a\u003e)\nand ByteString. So widgets\ncan use any formatting that is instance of \u003ccode\u003e\u003ca\u003eFormInput\u003c/a\u003e\u003c/code\u003e.\nIt is possible to use more than one format in the same widget.\n\u003c/p\u003e\u003cp\u003eLinks defined with \u003ccode\u003e\u003ca\u003ewlink\u003c/a\u003e\u003c/code\u003e are treated the same way than forms. They are type safe and return values\n to the same flow of execution.\nIt is posssible to combine links and forms in the same widget by using applicative combinators  but also\nadditional applicative combinators like  \u003c+\u003e !*\u003e , |*|. Widgets are also monoids, so they can\nbe combined as such.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e NEW IN THIS RELEASE\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eRuntime templates\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  \u003ccode\u003etemplate\u003c/code\u003e, \u003ccode\u003eedTemplate\u003c/code\u003e, \u003ccode\u003ewiterate\u003c/code\u003e and \u003ccode\u003edField\u003c/code\u003e permit the edition of\nthe widget content at runtime, and the management of placeholders with input fields and data fields\nwithin the template with no navigation in the client, little bandwidth usage and little server load. Enven less\nthan using \u003ccode\u003eautoRefresh\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e IN PREVIOUS RELEASES\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e{\u003ccode\u003eAutoRefresh\u003c/code\u003e] Using \u003ccode\u003eautoRefresh\u003c/code\u003e, Dynamic widgets can refresh themselves with new information without forcing a refresh of the whole page\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ePush\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  With \u003ccode\u003epush\u003c/code\u003e a widget can push new content to the browser when something in the server happens\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eError traces\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e using the monadloc package, now each runtime error (in a monadic statement) has a complete execution trace.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eRESTful URLs\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Now each page is directly reachable by means of a intuitive, RESTful url, whose path is composed by the sucession\nof links clicked to reach such page and such point in the procedure. Just what you would expect.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ePage flows\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e each widget-formlet can have its own independent behaviour within the page. They can\nrefresh independently trough AJAX by means of \u003ccode\u003eautoRefresh\u003c/code\u003e. Additionally, \u003ccode\u003e\u003ca\u003epageFlow\u003c/a\u003e\u003c/code\u003e initiates the page flow mode or a\nsubpage flow by adding a well know indetifier prefix for links and form parameters.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eModal Dialogs\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003ewdialog\u003c/code\u003e present a widget within a modal or non modal jQuery dialog. while a monadic\nwidget-formlet can add different form elements depending on the user responses, \u003ccode\u003e\u003ca\u003ewcallback\u003c/a\u003e\u003c/code\u003e can\nsubstitute the widget by other. (See 'Demos/demos.blaze.hs' for some examples)\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJQuery widgets\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e with MFlow interface: \u003ccode\u003egetSpinner\u003c/code\u003e, \u003ccode\u003edatePicker\u003c/code\u003e, \u003ccode\u003ewdialog\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eWAI interface\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Now MFlow works with Snap and other WAI developments. Include \u003ca\u003eMFlow.Wai\u003c/a\u003e or \u003ca\u003eMFlow.Wai.Blaze.Html.All\u003c/a\u003e to use it.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eblaze-html support\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e see \u003ca\u003ehttp://hackage.haskell.org/package/blaze-html\u003c/a\u003e import \u003ca\u003eMFlow.Forms.Blaze.Html\u003c/a\u003e or \u003ca\u003eMFlow.Wai.Blaze.Html.All\u003c/a\u003e to use Blaze-Html\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eAJAX\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Now an ajax procedures (defined with \u003ccode\u003e\u003ca\u003eajax\u003c/a\u003e\u003c/code\u003e can perform many interactions with the browser widgets, instead\nof a single request-response (see \u003ccode\u003e\u003ca\u003eajaxSend\u003c/a\u003e\u003c/code\u003e).\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eActive widgets\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ca\u003eMFlow.Forms.Widgets\u003c/a\u003e contains active widgets that interact with the\nserver via Ajax and dynamically control other widgets: \u003ccode\u003ewEditList\u003c/code\u003e, \u003ccode\u003eautocomplete\u003c/code\u003e \u003ccode\u003eautocompleteEdit\u003c/code\u003e and others.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eRequirements\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e a widget can specify javaScript files, JavasScript online scipts, CSS files, online CSS and server processes\n and any other instance of the \u003ccode\u003eRequrement\u003c/code\u003e class. See \u003ccode\u003e\u003ca\u003erequires\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eWebRequirements\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003econtent-management\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e for templating and online edition of the content template. See \u003ccode\u003etFieldEd\u003c/code\u003e \u003ccode\u003etFieldGen\u003c/code\u003e and \u003ccode\u003etField\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003emultilanguage\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e see \u003ccode\u003emField\u003c/code\u003e and \u003ccode\u003emFieldEd\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eURLs to internal states\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e if the web navigation is trough GET forms or links,\n an URL can express a direct path to the n-th step of a flow, So this URL can be shared with other users.\nJust like in the case of an ordinary stateless application.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eBack Button\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e This is probably the first implementation in any language where the navigation\ncan be expressed procedurally and still it works well with the back button, thanks\nto monad magic. (See \u003ca\u003ehttp://haskell-web.blogspot.com.es/2012/03//failback-monad.html\u003c/a\u003e)\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eCached widgets\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e with \u003ccode\u003e\u003ca\u003ecachedWidget\u003c/a\u003e\u003c/code\u003e it is possible to cache the rendering of a widget as a ByteString (maintaining type safety)\n, the caching can be permanent or for a certain time. this is very useful for complex widgets that present information. Specially if\nthe widget content comes from a database and it is  shared by all users.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eCallbacks\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003ewaction\u003c/a\u003e\u003c/code\u003e add a callback to a widget. It is executed when its input is validated.\nThe callback may initate a flow of interactions with the user or simply executes an internal computation.\nCallbacks are necessary for the creation of abstract container\nwidgets that may not know the behaviour of its content. with callbacks, the widget manages its content as  black boxes.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eModifiers\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003ewmodify\u003c/a\u003e\u003c/code\u003e change the visualization and result returned by the widget. For example it may hide a\nlogin form and substitute it by the username if already logged.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e ask $ wform userloginform `\u003ccode\u003e\u003ca\u003evalidate\u003c/a\u003e\u003c/code\u003e` valdateProc `\u003ccode\u003e\u003ca\u003ewaction\u003c/a\u003e\u003c/code\u003e` loginProc `\u003ccode\u003e\u003ca\u003ewmodify\u003c/a\u003e\u003c/code\u003e` hideIfLogged\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eattributes for formLet elements\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  to add atributes to widgets. See the  \u003ccode\u003e\u003ca\u003e\u003c!\u003c/a\u003e\u003c/code\u003e op&#232;rator\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eByteString normalization and hetereogeneous formatting\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e For caching the rendering of widgets at the\n ByteString level, and to permit many formatring styles\nin the same page, there are operators that combine different formats which are converted to ByteStrings.\nFor example the header and footer may be coded in XML, while the formlets may be formatted using Text.XHtml.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eFile Server\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e With file caching. See \u003ca\u003eMFlow.FileServer\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "MFlow.Forms",
          "name": "Forms",
          "package": "MFlow",
          "source": "src/MFlow-Forms.html",
          "type": "module"
        },
        "index": {
          "description": "MFlow run stateful server processes This version is the first stateful web framework that is as RESTful as web framework can be The routes are expressed as normal monadic haskell code in the FlowM monad Local links point to alternative routes within this monadic computation just like textual menu in console application Any GET page is directly reachable by means of RESTful URL At any moment the flow can respond to the back button or to any RESTful path that the user may paste in the navigation bar If the procedure is waiting for another different page the FlowM monad backtrack until the path partially match From this position the execution goes forward until the rest of the path match This way the statelessness is optional However it is possible to store session state which may backtrack or not when the navigation goes back and forth It is upto the programmer All the flow of requests and responses are coded by the programmer in single procedure Allthoug single request-response flows are possible Therefore the code is more understandable It is not continuation based It uses log for thread state persistence and backtracking for handling the back button Back button state syncronization is supported out-of-the-box The MFlow architecture is scalable since the state is serializable and small The processes are stopped and restarted by the application server on demand including the execution state if the Wokflow monad is used Therefore session management is automatic State consistence and transactions are given by the TCache package The processes interact trough widgets that are an extension of formlets with additional applicative combinators formatting link management callbacks modifiers caching byteString conversion and AJAX All is coded in pure haskell The interfaces and communications are abstract but there are bindings for blaze-html HSP Text.XHtml and byteString Hack and WAI but it can be extended to non Web based architectures Bindings for hack and hsp are not compiled by Hackage and do not appear but are included in the package files To use them add then to the exported modules and execute cabal install It is designed for applications that can be run with no deployment with runghc in order to speed up the development process see http haskell-web.blogspot.com.es a-web-application-in-tweet.html This module implement stateful processes flows that are optionally persistent This means that they automatically store and recover his execution state They are executed by the MFlow app server defined in the MFlow module These processses interact with the user trough user interfaces made of widgets see below that return back statically typed responses to the calling process Because flows are stateful not request-response the code is more understandable because all the flow of request and responses is coded by the programmer in single procedure in the FlowM monad Allthoug single request-response flows and callbacks are possible This module is abstract with respect to the formatting here referred with the type variable view For an instantiation for Text.XHtml import MFlow.Forms.XHtml MFlow.Hack.XHtml.All or MFlow.Wai.XHtml.All To use Haskell Server Pages import MFlow.Forms.HSP However the functionalities are documented here ask is the only method for user interaction It run in the MFlow view monad with the monad chosen by the user usually IO It send user interfaces in the View view monad and return statically typed responses The user interface definitions are based on extension of formLets http www.haskell.org haskellwiki Formlets with the addition of caching links formatting attributes extra combinators callbaks and modifiers The interaction with the user is stateful In the same computation there may be many request-response interactions in the same way than in the case of console applications APPLICATION SERVER Therefore session and state management is simple and transparent it is in the haskell structures in the scope of the computation transient normal procedures have no persistent session state and stateless procedures accept single request and return single response step is lifting monad transformer that permit persistent server procedures that remember the execution state even after system shutdowns by using the package workflow http hackage.haskell.org package Workflow internally This state management is transparent There is no programer interface for session management The programmer set the process timeout and the session timeout with setTimeouts If the procedure has been stopped due to the process timeout or due to system shutdowm the procedure restart in the last state when request for this procedure arrives if the procedure uses the step monad transformer WIDGETS The correctness of the web responses is assured by the use of formLets But unlike formLets in its current form it permits the definition of widgets widget is combination of formLets and links within its own formatting template all in the same definition in the same source file in plain declarative Haskell style The formatting is abstract It has to implement the FormInput class There are instances for Text.XHtml MFlow.Forms.XHtml Haskell Server Pages MFlow.Forms.HSP and ByteString So widgets can use any formatting that is instance of FormInput It is possible to use more than one format in the same widget Links defined with wlink are treated the same way than forms They are type safe and return values to the same flow of execution It is posssible to combine links and forms in the same widget by using applicative combinators but also additional applicative combinators like Widgets are also monoids so they can be combined as such NEW IN THIS RELEASE Runtime templates template edTemplate witerate and dField permit the edition of the widget content at runtime and the management of placeholders with input fields and data fields within the template with no navigation in the client little bandwidth usage and little server load Enven less than using autoRefresh IN PREVIOUS RELEASES AutoRefresh Using autoRefresh Dynamic widgets can refresh themselves with new information without forcing refresh of the whole page Push With push widget can push new content to the browser when something in the server happens Error traces using the monadloc package now each runtime error in monadic statement has complete execution trace RESTful URLs Now each page is directly reachable by means of intuitive RESTful url whose path is composed by the sucession of links clicked to reach such page and such point in the procedure Just what you would expect Page flows each widget-formlet can have its own independent behaviour within the page They can refresh independently trough AJAX by means of autoRefresh Additionally pageFlow initiates the page flow mode or subpage flow by adding well know indetifier prefix for links and form parameters Modal Dialogs wdialog present widget within modal or non modal jQuery dialog while monadic widget-formlet can add different form elements depending on the user responses wcallback can substitute the widget by other See Demos demos.blaze.hs for some examples JQuery widgets with MFlow interface getSpinner datePicker wdialog WAI interface Now MFlow works with Snap and other WAI developments Include MFlow.Wai or MFlow.Wai.Blaze.Html.All to use it blaze-html support see http hackage.haskell.org package blaze-html import MFlow.Forms.Blaze.Html or MFlow.Wai.Blaze.Html.All to use Blaze-Html AJAX Now an ajax procedures defined with ajax can perform many interactions with the browser widgets instead of single request-response see ajaxSend Active widgets MFlow.Forms.Widgets contains active widgets that interact with the server via Ajax and dynamically control other widgets wEditList autocomplete autocompleteEdit and others Requirements widget can specify javaScript files JavasScript online scipts CSS files online CSS and server processes and any other instance of the Requrement class See requires and WebRequirements content-management for templating and online edition of the content template See tFieldEd tFieldGen and tField multilanguage see mField and mFieldEd URLs to internal states if the web navigation is trough GET forms or links an URL can express direct path to the n-th step of flow So this URL can be shared with other users Just like in the case of an ordinary stateless application Back Button This is probably the first implementation in any language where the navigation can be expressed procedurally and still it works well with the back button thanks to monad magic See http haskell-web.blogspot.com.es failback-monad.html Cached widgets with cachedWidget it is possible to cache the rendering of widget as ByteString maintaining type safety the caching can be permanent or for certain time this is very useful for complex widgets that present information Specially if the widget content comes from database and it is shared by all users Callbacks waction add callback to widget It is executed when its input is validated The callback may initate flow of interactions with the user or simply executes an internal computation Callbacks are necessary for the creation of abstract container widgets that may not know the behaviour of its content with callbacks the widget manages its content as black boxes Modifiers wmodify change the visualization and result returned by the widget For example it may hide login form and substitute it by the username if already logged Example ask wform userloginform validate valdateProc waction loginProc wmodify hideIfLogged attributes for formLet elements to add atributes to widgets See the op rator ByteString normalization and hetereogeneous formatting For caching the rendering of widgets at the ByteString level and to permit many formatring styles in the same page there are operators that combine different formats which are converted to ByteStrings For example the header and footer may be coded in XML while the formlets may be formatted using Text.XHtml File Server With file caching See MFlow.FileServer",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "Forms",
          "package": "MFlow",
          "partial": "Forms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "Auth",
          "package": "MFlow",
          "source": "src/MFlow.html#Auth",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "Auth",
          "package": "MFlow",
          "partial": "Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#t:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "FailBack",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#FailBack",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "FailBack",
          "package": "MFlow",
          "partial": "Fail Back",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#t:FailBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe FlowM monad executes the page navigation. It perform Backtracking when necessary to syncronize\n when the user press the back button or when the user enter an arbitrary URL. The instruction pointer\n is moved to the right position within the procedure to handle the request.\n\u003c/p\u003e\u003cp\u003eHowever this is transparent to the programmer, who codify in the style of a console application.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "FlowM",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#FlowM",
          "type": "data"
        },
        "index": {
          "description": "the FlowM monad executes the page navigation It perform Backtracking when necessary to syncronize when the user press the back button or when the user enter an arbitrary URL The instruction pointer is moved to the right position within the procedure to handle the request However this is transparent to the programmer who codify in the style of console application",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "FlowM",
          "package": "MFlow",
          "partial": "Flow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#t:FlowM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "FormElm",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#FormElm",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "FormElm",
          "package": "MFlow",
          "partial": "Form Elm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#t:FormElm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "FormInput",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#FormInput",
          "type": "class"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "FormInput",
          "package": "MFlow",
          "partial": "Form Input",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#t:FormInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "Requirements",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#Requirements",
          "type": "class"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "Requirements",
          "package": "MFlow",
          "partial": "Requirements",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#t:Requirements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eView v m a\u003c/code\u003e is a widget (formlet)  with formatting \u003ccode\u003ev\u003c/code\u003e  running the monad \u003ccode\u003em\u003c/code\u003e (usually \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e) and which return a value of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIt has \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003cp\u003eThings to know about these instances:\n\u003c/p\u003e\u003cp\u003eIf the View expression does not validate, ask will present the page again.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eAlternative instance\u003c/em\u003e: Both alternatives are executed. The rest is as usual\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eMonad Instance\u003c/em\u003e:\n\u003c/p\u003e\u003cp\u003eThe rendering of each statement is added to the previous. If you want to avoid this, use \u003ccode\u003e\u003ca\u003ewcallback\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe execution is stopped when the statement has a formlet-widget that does not validate and\n return an invalid response (So it will present the page again if no other widget in the expression validates).\n\u003c/p\u003e\u003cp\u003eThe monadic code is executed from the beginning each time the page is presented or refreshed\n\u003c/p\u003e\u003cp\u003euse \u003ccode\u003epageFlow\u003c/code\u003e if your page has more than one monadic computation with dynamic behaviour\n\u003c/p\u003e\u003cp\u003euse \u003ccode\u003epageFlow\u003c/code\u003e to identify each subflow branch of a conditional\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e pageFlow \"myid\" $ do\n      r \u003c- formlet1\n      liftIO $ ioaction1 r\n      s \u003c- formlet2\n      liftIO $ ioaction2 s\n      case s of\n       True  -\u003e pageFlow \"idtrue\" $ do ....\n       False -\u003e paeFlow \"idfalse\" $ do ...\n      ...\n\u003c/pre\u003e\u003cp\u003eHere if  \u003ccode\u003eformlet2\u003c/code\u003e do not validate, \u003ccode\u003eioaction2\u003c/code\u003e is not executed. But if \u003ccode\u003eformLet1\u003c/code\u003e validates and the\n  page is refreshed two times (because \u003ccode\u003eformlet2\u003c/code\u003e has failed, see above),then \u003ccode\u003eioaction1\u003c/code\u003e is executed two times.\n  use \u003ccode\u003e\u003ca\u003ecachedByKey\u003c/a\u003e\u003c/code\u003e if you want to avoid repeated IO executions.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "View",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#View",
          "type": "newtype"
        },
        "index": {
          "description": "View is widget formlet with formatting running the monad usually IO and which return value of type It has Applicative Alternative and Monad instances Things to know about these instances If the View expression does not validate ask will present the page again Alternative instance Both alternatives are executed The rest is as usual Monad Instance The rendering of each statement is added to the previous If you want to avoid this use wcallback The execution is stopped when the statement has formlet-widget that does not validate and return an invalid response So it will present the page again if no other widget in the expression validates The monadic code is executed from the beginning each time the page is presented or refreshed use pageFlow if your page has more than one monadic computation with dynamic behaviour use pageFlow to identify each subflow branch of conditional For example pageFlow myid do formlet1 liftIO ioaction1 formlet2 liftIO ioaction2 case of True pageFlow idtrue do False paeFlow idfalse do Here if formlet2 do not validate ioaction2 is not executed But if formLet1 validates and the page is refreshed two times because formlet2 has failed see above then ioaction1 is executed two times use cachedByKey if you want to avoid repeated IO executions",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "View",
          "package": "MFlow",
          "partial": "View",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "WebRequirement",
          "package": "MFlow",
          "source": "src/MFlow-Forms-Internals.html#WebRequirement",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "WebRequirement",
          "package": "MFlow",
          "partial": "Web Requirement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#t:WebRequirement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersperse a widget in a list of widgets. the results is a 2-tuple of both types.\n\u003c/p\u003e\u003cp\u003eit has a infix priority \u003ccode\u003einfixr 5\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "(|*\u003e)",
          "package": "MFlow",
          "signature": "View view m r -\u003e [View view m r'] -\u003e View view m (Maybe r, Maybe r')",
          "source": "src/MFlow-Forms.html#%7C%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "Intersperse widget in list of widgets the results is tuple of both types it has infix priority infixr",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(|*\u003e) |*\u003e",
          "normalized": "View a b c-\u003e[View a b d]-\u003eView a b(Maybe c,Maybe d)",
          "package": "MFlow",
          "signature": "View view m r-\u003e[View view m r']-\u003eView view m(Maybe r,Maybe r')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-124--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a widget before and after other. Useful for navigation links in a page that appears at toAdd\n and at the bottom of a page.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "(|+|)",
          "package": "MFlow",
          "signature": "View view m r -\u003e View view m r' -\u003e View view m (Maybe r, Maybe r')",
          "source": "src/MFlow-Forms.html#%7C%2B%7C",
          "type": "function"
        },
        "index": {
          "description": "Put widget before and after other Useful for navigation links in page that appears at toAdd and at the bottom of page",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(|+|) |+|",
          "normalized": "View a b c-\u003eView a b d-\u003eView a b(Maybe c,Maybe d)",
          "package": "MFlow",
          "signature": "View view m r-\u003eView view m r'-\u003eView view m(Maybe r,Maybe r')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-124--43--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first elem result (even if it is not validated) is discarded, and the secod is returned\n . This contrast with the applicative operator \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e which fails the whole validation if\n the validation of the first elem fails.\n\u003c/p\u003e\u003cp\u003eThe first element is displayed however, as happens in the case of \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e\u003cp\u003eHere \u003ccode\u003ew's\u003c/code\u003e are widgets and \u003ccode\u003er's\u003c/code\u003e are returned values\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(w1 \u003c* w2)\u003c/code\u003e  will return \u003ccode\u003eJust r1\u003c/code\u003e only if w1 and w2 are validated\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(w1 \u003c** w2)\u003c/code\u003e will return \u003ccode\u003eJust r1\u003c/code\u003e even if w2 is not validated\n\u003c/p\u003e\u003cp\u003eit has a low infix priority: \u003ccode\u003einfixr 1\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "(**\u003e)",
          "package": "MFlow",
          "signature": "View view m a -\u003e View view m b -\u003e View view m b",
          "source": "src/MFlow-Forms.html#%2A%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "The first elem result even if it is not validated is discarded and the secod is returned This contrast with the applicative operator which fails the whole validation if the validation of the first elem fails The first element is displayed however as happens in the case of Here are widgets and are returned values w1 w2 will return Just r1 only if w1 and w2 are validated w1 w2 will return Just r1 even if w2 is not validated it has low infix priority infixr",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(**\u003e) **\u003e",
          "normalized": "View a b c-\u003eView a b d-\u003eView a b d",
          "package": "MFlow",
          "signature": "View view m a-\u003eView view m b-\u003eView view m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-42--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend formatting code to a widget\n\u003c/p\u003e\u003cpre\u003ebold \u003ca\u003e\"enter name\" ++\u003c/a\u003e getString Nothing\u003c/pre\u003e\u003cp\u003eIt has a infix prority: \u003ccode\u003einfixr 6\u003c/code\u003e higuer that \u003ccode\u003e\u003ca\u003e\u003c\u003c\u003c\u003c/a\u003e\u003c/code\u003e and most other operators\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "(++\u003e)",
          "package": "MFlow",
          "signature": "view -\u003e View view m a -\u003e View view m a",
          "source": "src/MFlow-Forms.html#%2B%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Prepend formatting code to widget bold enter name getString Nothing It has infix prority infixr higuer that and most other operators",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(++\u003e) ++\u003e",
          "normalized": "a-\u003eView a b c-\u003eView a b c",
          "package": "MFlow",
          "signature": "view-\u003eView view m a-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-43--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative binary operation\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "(\u003c|\u003e)",
          "package": "MFlow",
          "signature": "forall a.  f a -\u003e f a -\u003e f a",
          "type": "function"
        },
        "index": {
          "description": "An associative binary operation",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "a b c d-\u003ec d-\u003ec d",
          "package": "MFlow",
          "signature": "forall a. f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd attributes to the topmost tag of a widget\n\u003c/p\u003e\u003cp\u003eit has a fixity \u003ccode\u003einfix 8\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "(\u003c!)",
          "package": "MFlow",
          "signature": "View view m a -\u003e Attribs -\u003e View view m a",
          "source": "src/MFlow-Forms.html#%3C%21",
          "type": "function"
        },
        "index": {
          "description": "Add attributes to the topmost tag of widget it has fixity infix",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(\u003c!) \u003c!",
          "normalized": "View a b c-\u003eAttribs-\u003eView a b c",
          "package": "MFlow",
          "signature": "View view m a-\u003eAttribs-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-60--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "(\u003c$\u003e)",
          "package": "MFlow",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for fmap",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "MFlow",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence actions, discarding the value of the second argument.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "(\u003c*)",
          "package": "MFlow",
          "signature": "forall a b.  f a -\u003e f b -\u003e f a",
          "type": "function"
        },
        "index": {
          "description": "Sequence actions discarding the value of the second argument",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(\u003c*) \u003c*",
          "normalized": "a b c d b-\u003ed e-\u003ed b",
          "package": "MFlow",
          "signature": "forall a b. f a-\u003ef b-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-60--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe second elem result (even if it is not validated) is discarded, and the first is returned\n . This contrast with the applicative operator \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e which fails the whole validation if\n the validation of the second elem fails.\n The second element is displayed however, as in the case of \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e.\n see the \u003ccode\u003e\u003ca\u003e\u003c**\u003c/a\u003e\u003c/code\u003e examples\n\u003c/p\u003e\u003cp\u003eit has a low infix priority: \u003ccode\u003einfixr 1\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "(\u003c**)",
          "package": "MFlow",
          "signature": "View view m a -\u003e View view m b -\u003e View view m a",
          "source": "src/MFlow-Forms.html#%3C%2A%2A",
          "type": "function"
        },
        "index": {
          "description": "The second elem result even if it is not validated is discarded and the first is returned This contrast with the applicative operator which fails the whole validation if the validation of the second elem fails The second element is displayed however as in the case of see the examples it has low infix priority infixr",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(\u003c**) \u003c**",
          "normalized": "View a b c-\u003eView a b d-\u003eView a b c",
          "package": "MFlow",
          "signature": "View view m a-\u003eView view m b-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-60--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential application.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "(\u003c*\u003e)",
          "package": "MFlow",
          "signature": "forall a b.  f (a -\u003e b) -\u003e f a -\u003e f b",
          "type": "function"
        },
        "index": {
          "description": "Sequential application",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "a b c d(b-\u003ee)-\u003ed b-\u003ed e",
          "package": "MFlow",
          "signature": "forall a b. f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend formatting code to a widget\n\u003c/p\u003e\u003cpre\u003e getString \u003ca\u003ehi\u003c/a\u003e \u003c++ H1 \u003c\u003c \u003ca\u003ehi there\u003c/a\u003e\u003c/pre\u003e\u003cp\u003eIt has a infix prority: \u003ccode\u003einfixr 6\u003c/code\u003e higuer that \u003ccode\u003e\u003ca\u003e\u003c\u003c\u003c\u003c/a\u003e\u003c/code\u003e and most other operators\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "(\u003c++)",
          "package": "MFlow",
          "signature": "View v m a -\u003e v -\u003e View v m a",
          "source": "src/MFlow-Forms.html#%3C%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Append formatting code to widget getString hi H1 hi there It has infix prority infixr higuer that and most other operators",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(\u003c++) \u003c++",
          "normalized": "View a b c-\u003ea-\u003eView a b c",
          "package": "MFlow",
          "signature": "View v m a-\u003ev-\u003eView v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-60--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin two widgets in the same page\n the resulting widget, when \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003eed with it, return a 2 tuple of their validation results\n if both return Noting, the widget return \u003ccode\u003eNothing\u003c/code\u003e (invalid).\n\u003c/p\u003e\u003cp\u003eit has a low infix priority: \u003ccode\u003einfixr 2\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e r \u003c- ask  widget1 \u003c+\u003e  widget2\n case r of (Just x, Nothing) -\u003e ..\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "(\u003c+\u003e)",
          "package": "MFlow",
          "signature": "View view m a -\u003e View view m b -\u003e View view m (Maybe a, Maybe b)",
          "source": "src/MFlow-Forms.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Join two widgets in the same page the resulting widget when ask ed with it return tuple of their validation results if both return Noting the widget return Nothing invalid it has low infix priority infixr ask widget1 widget2 case of Just Nothing",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "View a b c-\u003eView a b d-\u003eView a b(Maybe c,Maybe d)",
          "package": "MFlow",
          "signature": "View view m a-\u003eView view m b-\u003eView view m(Maybe a,Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnclose Widgets within some formating.\n \u003ccode\u003eview\u003c/code\u003e is intended to be instantiated to a particular format\n\u003c/p\u003e\u003cp\u003eNOTE: It has a infix priority : \u003ccode\u003einfixr 5\u003c/code\u003e less than the one of \u003ccode\u003e++\u003e\u003c/code\u003e and \u003ccode\u003e\u003c++\u003c/code\u003e of the operators, so use parentheses when appropriate,\n unless the we want to enclose all the widgets in the right side.\n Most of the type errors in the DSL are due to the low priority of this operator.\n\u003c/p\u003e\u003cp\u003eThis is a widget, which is a table with some links. it returns an Int\n\u003c/p\u003e\u003cpre\u003e import MFlow.Forms.Blaze.Html\n\n tableLinks :: View Html Int\n table ! At.style \"border:1;width:20%;margin-left:auto;margin-right:auto\"\n            \u003c\u003c\u003c caption \u003c\u003c text \"choose an item\"\n            ++\u003e thead \u003c\u003c tr \u003c\u003c ( th \u003c\u003c b \u003c\u003c text  \"item\" \u003c\u003e th \u003c\u003c b \u003c\u003c text \"times chosen\")\n            ++\u003e (tbody\n                 \u003c\u003c\u003c tr ! rowspan \"2\" \u003c\u003c td \u003c\u003c linkHome\n                 ++\u003e (tr \u003c\u003c\u003c td \u003c\u003c\u003c wlink  IPhone (b \u003c\u003c text \"iphone\") \u003c++  td \u003c\u003c ( b \u003c\u003c text (fromString $ show ( cart V.! 0)))\n                 \u003c|\u003e  tr \u003c\u003c\u003c td \u003c\u003c\u003c wlink  IPod (b \u003c\u003c text \"ipad\")     \u003c++  td \u003c\u003c ( b \u003c\u003c text (fromString $ show ( cart V.! 1)))\n                 \u003c|\u003e  tr \u003c\u003c\u003c td \u003c\u003c\u003c wlink  IPad (b \u003c\u003c text \"ipod\")     \u003c++  td \u003c\u003c ( b \u003c\u003c text (fromString $ show ( cart V.! 2))))\n                 )\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "(\u003c\u003c\u003c)",
          "package": "MFlow",
          "signature": "(view -\u003e view) -\u003e View view m a -\u003e View view m a",
          "source": "src/MFlow-Forms.html#%3C%3C%3C",
          "type": "function"
        },
        "index": {
          "description": "Enclose Widgets within some formating view is intended to be instantiated to particular format NOTE It has infix priority infixr less than the one of and of the operators so use parentheses when appropriate unless the we want to enclose all the widgets in the right side Most of the type errors in the DSL are due to the low priority of this operator This is widget which is table with some links it returns an Int import MFlow.Forms.Blaze.Html tableLinks View Html Int table At.style border width margin-left auto margin-right auto caption text choose an item thead tr th text item th text times chosen tbody tr rowspan td linkHome tr td wlink IPhone text iphone td text fromString show cart tr td wlink IPod text ipad td text fromString show cart tr td wlink IPad text ipod td text fromString show cart",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(\u003c\u003c\u003c) \u003c\u003c\u003c",
          "normalized": "(a-\u003ea)-\u003eView a b c-\u003eView a b c",
          "package": "MFlow",
          "signature": "(view-\u003eview)-\u003eView view m a-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-60--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "(\u003e:\u003e)",
          "package": "MFlow",
          "signature": "View v m a -\u003e View v m [a] -\u003e View v m [a]",
          "source": "src/MFlow-Forms.html#%3E%3A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(\u003e:\u003e) \u003e:\u003e",
          "normalized": "View a b c-\u003eView a b[c]-\u003eView a b[c]",
          "package": "MFlow",
          "signature": "View v m a-\u003eView v m[a]-\u003eView v m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:-62-:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e (.|*\u003e.) x y = normalize x |*\u003e map normalize y\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "(.|*\u003e.)",
          "package": "MFlow",
          "signature": "View v m r -\u003e [View v1 m r'] -\u003e View ByteString m (Maybe r, Maybe r')",
          "source": "src/MFlow-Forms.html#.%7C%2A%3E.",
          "type": "function"
        },
        "index": {
          "description": "normalize map normalize",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(.|*\u003e.) .|*\u003e.",
          "normalized": "View a b c-\u003e[View a b d]-\u003eView ByteString b(Maybe c,Maybe d)",
          "package": "MFlow",
          "signature": "View v m r-\u003e[View v m r']-\u003eView ByteString m(Maybe r,Maybe r')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:.-124--42--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e (.|+|.) x y = normalize x |+| normalize y\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "(.|+|.)",
          "package": "MFlow",
          "signature": "View v m r -\u003e View v1 m r' -\u003e View ByteString m (Maybe r, Maybe r')",
          "source": "src/MFlow-Forms.html#.%7C%2B%7C.",
          "type": "function"
        },
        "index": {
          "description": "normalize normalize",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(.|+|.) .|+|.",
          "normalized": "View a b c-\u003eView a b d-\u003eView ByteString b(Maybe c,Maybe d)",
          "package": "MFlow",
          "signature": "View v m r-\u003eView v m r'-\u003eView ByteString m(Maybe r,Maybe r')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:.-124--43--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e (.**\u003e.) x y = normalize x **\u003e normalize y\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "(.**\u003e.)",
          "package": "MFlow",
          "signature": "View v m a -\u003e View v1 m b -\u003e View ByteString m b",
          "source": "src/MFlow-Forms.html#.%2A%2A%3E.",
          "type": "function"
        },
        "index": {
          "description": "normalize normalize",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(.**\u003e.) .**\u003e.",
          "normalized": "View a b c-\u003eView a b d-\u003eView ByteString b d",
          "package": "MFlow",
          "signature": "View v m a-\u003eView v m b-\u003eView ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:.-42--42--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e (.++\u003e.) v x= toByteString v ++\u003e normalize x\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "(.++\u003e.)",
          "package": "MFlow",
          "signature": "v -\u003e View v' m a -\u003e View ByteString m a",
          "source": "src/MFlow-Forms.html#.%2B%2B%3E.",
          "type": "function"
        },
        "index": {
          "description": "toByteString normalize",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(.++\u003e.) .++\u003e.",
          "normalized": "a-\u003eView b c d-\u003eView ByteString c d",
          "package": "MFlow",
          "signature": "v-\u003eView v' m a-\u003eView ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:.-43--43--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e (.\u003c|\u003e.) x y= normalize x \u003c|\u003e normalize y\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "(.\u003c|\u003e.)",
          "package": "MFlow",
          "signature": "View v m a -\u003e View v1 m a -\u003e View ByteString m a",
          "source": "src/MFlow-Forms.html#.%3C%7C%3E.",
          "type": "function"
        },
        "index": {
          "description": "normalize normalize",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(.\u003c|\u003e.) .\u003c|\u003e.",
          "normalized": "View a b c-\u003eView a b c-\u003eView ByteString b c",
          "package": "MFlow",
          "signature": "View v m a-\u003eView v m a-\u003eView ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:.-60--124--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e (.\u003c**.) x y = normalize x \u003c** normalize y\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "(.\u003c**.)",
          "package": "MFlow",
          "signature": "View v m a -\u003e View v1 m b -\u003e View ByteString m a",
          "source": "src/MFlow-Forms.html#.%3C%2A%2A.",
          "type": "function"
        },
        "index": {
          "description": "normalize normalize",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(.\u003c**.) .\u003c**.",
          "normalized": "View a b c-\u003eView a b d-\u003eView ByteString b c",
          "package": "MFlow",
          "signature": "View v m a-\u003eView v m b-\u003eView ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:.-60--42--42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e (.\u003c++.) x v= normalize x \u003c++ toByteString v\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "(.\u003c++.)",
          "package": "MFlow",
          "signature": "View v m a -\u003e v' -\u003e View ByteString m a",
          "source": "src/MFlow-Forms.html#.%3C%2B%2B.",
          "type": "function"
        },
        "index": {
          "description": "normalize toByteString",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(.\u003c++.) .\u003c++.",
          "normalized": "View a b c-\u003ed-\u003eView ByteString b c",
          "package": "MFlow",
          "signature": "View v m a-\u003ev'-\u003eView ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:.-60--43--43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e (.\u003c+\u003e.) x y = normalize x \u003c+\u003e normalize y\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "(.\u003c+\u003e.)",
          "package": "MFlow",
          "signature": "View v m a -\u003e View v1 m b -\u003e View ByteString m (Maybe a, Maybe b)",
          "source": "src/MFlow-Forms.html#.%3C%2B%3E.",
          "type": "function"
        },
        "index": {
          "description": "normalize normalize",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(.\u003c+\u003e.) .\u003c+\u003e.",
          "normalized": "View a b c-\u003eView a b d-\u003eView ByteString b(Maybe c,Maybe d)",
          "package": "MFlow",
          "signature": "View v m a-\u003eView v m b-\u003eView ByteString m(Maybe a,Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:.-60--43--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e (.\u003c\u003c.) w x = w $ toByteString x\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "(.\u003c\u003c.)",
          "package": "MFlow",
          "signature": "(ByteString -\u003e ByteString) -\u003e view -\u003e ByteString",
          "source": "src/MFlow-Forms.html#.%3C%3C.",
          "type": "function"
        },
        "index": {
          "description": "toByteString",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "(.\u003c\u003c.) .\u003c\u003c.",
          "normalized": "(ByteString-\u003eByteString)-\u003ea-\u003eByteString",
          "package": "MFlow",
          "signature": "(ByteString-\u003eByteString)-\u003eview-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:.-60--60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms\",\"MFlow\"]",
          "name": "Auth",
          "package": "MFlow",
          "signature": "Auth",
          "source": "src/MFlow.html#Auth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:Auth\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:Auth\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "Auth",
          "package": "MFlow",
          "partial": "Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall the server code and return the client code for an AJAX interaction.\n It is very lightweight, It does no t need jQuery.\n\u003c/p\u003e\u003cp\u003eThis example increases the value of a text box each time the box is clicked\n\u003c/p\u003e\u003cpre\u003e  ask $ do\n        let elemval= \"document.getElementById('text1').value\"\n        ajaxc \u003c- ajax $ \\n -\u003e return $ elemval \u003c\u003e \"='\" \u003c\u003e B.pack(show(read  n +1)) \u003c\u003e \"'\"\n        b \u003c\u003c  text \"click the box\"\n          ++\u003e getInt (Just 0) \u003c! [(\"id\",\"text1\"),(\"onclick\", ajaxc elemval)]\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "ajax",
          "package": "MFlow",
          "signature": "(String -\u003e View v m ByteString)-\u003e View v m (String -\u003e String)",
          "type": "function"
        },
        "index": {
          "description": "Install the server code and return the client code for an AJAX interaction It is very lightweight It does no need jQuery This example increases the value of text box each time the box is clicked ask do let elemval document.getElementById text1 value ajaxc ajax return elemval B.pack show read text click the box getInt Just id text1 onclick ajaxc elemval",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "ajax",
          "normalized": "(String-\u003eView a b ByteString)-\u003eView a b(String-\u003eString)",
          "package": "MFlow",
          "signature": "(String-\u003eView v m ByteString)-\u003eView v m(String-\u003eString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:ajax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the javascript expression, generated by the procedure parameter as a ByteString, execute it in the browser and the result is returned back\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eajaxSend\u003c/code\u003e invocation must be inside a ajax procedure or else a \u003cem\u003eNo ajax session set\u003c/em\u003e error will be produced\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "ajaxSend",
          "package": "MFlow",
          "signature": "View v m ByteString -\u003e View v m a",
          "source": "src/MFlow-Forms.html#ajaxSend",
          "type": "function"
        },
        "index": {
          "description": "Send the javascript expression generated by the procedure parameter as ByteString execute it in the browser and the result is returned back The ajaxSend invocation must be inside ajax procedure or else No ajax session set error will be produced",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "ajaxSend",
          "normalized": "View a b ByteString-\u003eView a b c",
          "package": "MFlow",
          "partial": "Send",
          "signature": "View v m ByteString-\u003eView v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:ajaxSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eajaxSend\u003c/code\u003e but the result is ignored\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "ajaxSend_",
          "package": "MFlow",
          "signature": "View v m ByteString -\u003e View v m ()",
          "source": "src/MFlow-Forms.html#ajaxSend_",
          "type": "function"
        },
        "index": {
          "description": "Like ajaxSend but the result is ignored",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "ajaxSend_",
          "normalized": "View a b ByteString-\u003eView a b()",
          "package": "MFlow",
          "partial": "Send",
          "signature": "View v m ByteString-\u003eView v m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:ajaxSend_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "ask",
          "package": "MFlow",
          "signature": "View view IO a -\u003e FlowM view IO a",
          "source": "src/MFlow-Forms.html#ask",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "ask",
          "normalized": "View a IO b-\u003eFlowM a IO b",
          "package": "MFlow",
          "signature": "View view IO a-\u003eFlowM view IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor compatibility with the same procedure in \u003ccode\u003e\u003ca\u003easkt\u003c/a\u003e\u003c/code\u003e.\n This is the non testing version\n\u003c/p\u003e\u003cpre\u003e askt v w= ask w\n\u003c/pre\u003e\u003cp\u003ehide one or the other\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "askt",
          "package": "MFlow",
          "signature": "(Int -\u003e a) -\u003e View v IO a -\u003e FlowM v IO a",
          "source": "src/MFlow-Forms.html#askt",
          "type": "function"
        },
        "index": {
          "description": "for compatibility with the same procedure in askt This is the non testing version askt ask hide one or the other",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "askt",
          "normalized": "(Int-\u003ea)-\u003eView b IO a-\u003eFlowM b IO a",
          "package": "MFlow",
          "signature": "(Int-\u003ea)-\u003eView v IO a-\u003eFlowM v IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:askt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "attrs",
          "package": "MFlow",
          "signature": "view -\u003e Attribs -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#attrs",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "attrs",
          "normalized": "a-\u003eAttribs-\u003ea",
          "package": "MFlow",
          "signature": "view-\u003eAttribs-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:attrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e bbody ats v= btag \"body\" ats v\n\u003c/pre\u003e",
          "module": "[\"MFlow.Forms\",\"MFlow\"]",
          "name": "bbody",
          "package": "MFlow",
          "signature": "Attribs -\u003e ByteString -\u003e ByteString",
          "source": "src/MFlow.html#bbody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:bbody\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:bbody\"]"
        },
        "index": {
          "description": "bbody ats btag body ats",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "bbody",
          "normalized": "Attribs-\u003eByteString-\u003eByteString",
          "package": "MFlow",
          "signature": "Attribs-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:bbody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e bhtml ats v= btag \"html\" ats v\n\u003c/pre\u003e",
          "module": "[\"MFlow.Forms\",\"MFlow\"]",
          "name": "bhtml",
          "package": "MFlow",
          "signature": "Attribs -\u003e ByteString -\u003e ByteString",
          "source": "src/MFlow.html#bhtml",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:bhtml\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:bhtml\"]"
        },
        "index": {
          "description": "bhtml ats btag html ats",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "bhtml",
          "normalized": "Attribs-\u003eByteString-\u003eByteString",
          "package": "MFlow",
          "signature": "Attribs-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:bhtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a XML tag in a ByteString. It is the most basic form of formatting. For\n more sophisticated formatting , use \u003ca\u003eMFlow.Forms.XHtml\u003c/a\u003e or \u003ca\u003eMFlow.Forms.HSP\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms\",\"MFlow\"]",
          "name": "btag",
          "package": "MFlow",
          "signature": "String -\u003e Attribs -\u003e ByteString -\u003e ByteString",
          "source": "src/MFlow.html#btag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:btag\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:btag\"]"
        },
        "index": {
          "description": "Writes XML tag in ByteString It is the most basic form of formatting For more sophisticated formatting use MFlow.Forms.XHtml or MFlow.Forms.HSP",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "btag",
          "normalized": "String-\u003eAttribs-\u003eByteString-\u003eByteString",
          "package": "MFlow",
          "signature": "String-\u003eAttribs-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:btag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "finput",
          "package": "MFlow",
          "signature": "Name -\u003e Type -\u003e Value -\u003e Checked -\u003e OnClick -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#finput",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "finput",
          "normalized": "Name-\u003eType-\u003eValue-\u003eChecked-\u003eOnClick-\u003ea",
          "package": "MFlow",
          "signature": "Name-\u003eType-\u003eValue-\u003eChecked-\u003eOnClick-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:finput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcat a list of widgets of the same type, return a the first validated result\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "firstOf",
          "package": "MFlow",
          "signature": "[View view m a] -\u003e View view m a",
          "source": "src/MFlow-Forms.html#firstOf",
          "type": "function"
        },
        "index": {
          "description": "Concat list of widgets of the same type return the first validated result",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "firstOf",
          "normalized": "[View a b c]-\u003eView a b c",
          "package": "MFlow",
          "partial": "Of",
          "signature": "[View view m a]-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:firstOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a binary tree of tuples of Maybe results produced by the \u003c+\u003e operator\n into a single tuple with the same elements in the same order.\n This is useful for easing matching. For example:\n\u003c/p\u003e\u003cpre\u003e res \u003c- ask $ wlink1 \u003c+\u003e wlink2 wform \u003c+\u003e wlink3 \u003c+\u003e wlink4\u003c/pre\u003e\u003cp\u003e\u003ccode\u003eres\u003c/code\u003e  has type:\n\u003c/p\u003e\u003cpre\u003eMaybe (Maybe (Maybe (Maybe (Maybe a,Maybe b),Maybe c),Maybe d),Maybe e)\u003c/pre\u003e\u003cp\u003ebut \u003ccode\u003eflatten res\u003c/code\u003e has type:\n\u003c/p\u003e\u003cpre\u003e (Maybe a, Maybe b, Maybe c, Maybe d, Maybe e)\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "flatten",
          "package": "MFlow",
          "signature": "tree -\u003e list",
          "source": "src/MFlow-Forms.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Flatten binary tree of tuples of Maybe results produced by the operator into single tuple with the same elements in the same order This is useful for easing matching For example res ask wlink1 wlink2 wform wlink3 wlink4 res has type Maybe Maybe Maybe Maybe Maybe Maybe Maybe Maybe Maybe but flatten res has type Maybe Maybe Maybe Maybe Maybe",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "flatten",
          "normalized": "a-\u003eb",
          "package": "MFlow",
          "signature": "tree-\u003elist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "flink",
          "package": "MFlow",
          "signature": "String -\u003e view -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#flink",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "flink",
          "normalized": "String-\u003ea-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eview-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:flink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "flink1",
          "package": "MFlow",
          "signature": "String -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#flink1",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "flink1",
          "normalized": "String-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:flink1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "foption",
          "package": "MFlow",
          "signature": "String -\u003e view -\u003e Bool -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#foption",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "foption",
          "normalized": "String-\u003ea-\u003eBool-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eview-\u003eBool-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:foption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "foption1",
          "package": "MFlow",
          "signature": "String -\u003e Bool -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#foption1",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "foption1",
          "normalized": "String-\u003eBool-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eBool-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:foption1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "formAction",
          "package": "MFlow",
          "signature": "String -\u003e view -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#formAction",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "formAction",
          "normalized": "String-\u003ea-\u003ea",
          "package": "MFlow",
          "partial": "Action",
          "signature": "String-\u003eview-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:formAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "fromStr",
          "package": "MFlow",
          "signature": "String -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#fromStr",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "fromStr",
          "normalized": "String-\u003ea",
          "package": "MFlow",
          "partial": "Str",
          "signature": "String-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:fromStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "fromStrNoEncode",
          "package": "MFlow",
          "signature": "String -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#fromStrNoEncode",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "fromStrNoEncode",
          "normalized": "String-\u003ea",
          "package": "MFlow",
          "partial": "Str No Encode",
          "signature": "String-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:fromStrNoEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "fselect",
          "package": "MFlow",
          "signature": "String -\u003e view -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#fselect",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "fselect",
          "normalized": "String-\u003ea-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eview-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:fselect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "ftag",
          "package": "MFlow",
          "signature": "String -\u003e view -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#ftag",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "ftag",
          "normalized": "String-\u003ea-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eview-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:ftag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "ftextarea",
          "package": "MFlow",
          "signature": "String -\u003e Text -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#ftextarea",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "ftextarea",
          "normalized": "String-\u003eText-\u003ea",
          "package": "MFlow",
          "signature": "String-\u003eText-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:ftextarea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the checkboxes dinamically created by JavaScript within the view parameter\n see for example \u003ccode\u003eselectAutocomplete\u003c/code\u003e in \u003ca\u003eMFlow.Forms.Widgets\u003c/a\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "genCheckBoxes",
          "package": "MFlow",
          "signature": "view -\u003e View view m CheckBoxes",
          "source": "src/MFlow-Forms.html#genCheckBoxes",
          "type": "function"
        },
        "index": {
          "description": "Read the checkboxes dinamically created by JavaScript within the view parameter see for example selectAutocomplete in MFlow.Forms.Widgets",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "genCheckBoxes",
          "normalized": "a-\u003eView a b CheckBoxes",
          "package": "MFlow",
          "partial": "Check Boxes",
          "signature": "view-\u003eView view m CheckBoxes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:genCheckBoxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms\",\"MFlow\"]",
          "name": "getAdminName",
          "package": "MFlow",
          "signature": "m UserStr",
          "source": "src/MFlow.html#getAdminName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getAdminName\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:getAdminName\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getAdminName",
          "package": "MFlow",
          "partial": "Admin Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getAdminName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a dropdown box with the two values (second (true) and third parameter(false))\n . With the value of the first parameter selected.                  \n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "getBool",
          "package": "MFlow",
          "signature": "Bool -\u003e String -\u003e String -\u003e View view m Bool",
          "source": "src/MFlow-Forms.html#getBool",
          "type": "function"
        },
        "index": {
          "description": "Display dropdown box with the two values second true and third parameter false With the value of the first parameter selected",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getBool",
          "normalized": "Bool-\u003eString-\u003eString-\u003eView a b Bool",
          "package": "MFlow",
          "partial": "Bool",
          "signature": "Bool-\u003eString-\u003eString-\u003eView view m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "getCheckBoxes",
          "package": "MFlow",
          "signature": "View view m CheckBoxes -\u003e View view m [String]",
          "source": "src/MFlow-Forms.html#getCheckBoxes",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getCheckBoxes",
          "normalized": "View a b CheckBoxes-\u003eView a b[String]",
          "package": "MFlow",
          "partial": "Check Boxes",
          "signature": "View view m CheckBoxes-\u003eView view m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getCheckBoxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a text box and return a Int (if the value entered is not an Int, fails the validation)\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "getInt",
          "package": "MFlow",
          "signature": "Maybe Int -\u003e View view m Int",
          "source": "src/MFlow-Forms.html#getInt",
          "type": "function"
        },
        "index": {
          "description": "Display text box and return Int if the value entered is not an Int fails the validation",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getInt",
          "normalized": "Maybe Int-\u003eView a b Int",
          "package": "MFlow",
          "partial": "Int",
          "signature": "Maybe Int-\u003eView view m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a text box and return an Integer (if the value entered is not an Integer, fails the validation)\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "getInteger",
          "package": "MFlow",
          "signature": "Maybe Integer -\u003e View view m Integer",
          "source": "src/MFlow-Forms.html#getInteger",
          "type": "function"
        },
        "index": {
          "description": "Display text box and return an Integer if the value entered is not an Integer fails the validation",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getInteger",
          "normalized": "Maybe Integer-\u003eView a b Integer",
          "package": "MFlow",
          "partial": "Integer",
          "signature": "Maybe Integer-\u003eView view m Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a multiline text box and return its content\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "getMultilineText",
          "package": "MFlow",
          "signature": "Text -\u003e View view m Text",
          "source": "src/MFlow-Forms.html#getMultilineText",
          "type": "function"
        },
        "index": {
          "description": "Display multiline text box and return its content",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getMultilineText",
          "normalized": "Text-\u003eView a b Text",
          "package": "MFlow",
          "partial": "Multiline Text",
          "signature": "Text-\u003eView view m Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getMultilineText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a password box \n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "getPassword",
          "package": "MFlow",
          "signature": "View view m String",
          "source": "src/MFlow-Forms.html#getPassword",
          "type": "function"
        },
        "index": {
          "description": "Display password box",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getPassword",
          "package": "MFlow",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencloses a set of Radio boxes. Return the option selected\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "getRadio",
          "package": "MFlow",
          "signature": "[String -\u003e View view m (Radio a)] -\u003e View view m a",
          "source": "src/MFlow-Forms.html#getRadio",
          "type": "function"
        },
        "index": {
          "description": "encloses set of Radio boxes Return the option selected",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getRadio",
          "normalized": "[String-\u003eView a b(Radio c)]-\u003eView a b c",
          "package": "MFlow",
          "partial": "Radio",
          "signature": "[String-\u003eView view m(Radio a)]-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the value of a parameter from the environment\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "getRawParam",
          "package": "MFlow",
          "signature": "String -\u003e m (Maybe a)",
          "source": "src/MFlow-Forms.html#getRawParam",
          "type": "function"
        },
        "index": {
          "description": "return the value of parameter from the environment",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getRawParam",
          "normalized": "String-\u003ea(Maybe b)",
          "package": "MFlow",
          "partial": "Raw Param",
          "signature": "String-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getRawParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "getRestParam",
          "package": "MFlow",
          "signature": "FlowM v m (Maybe a)",
          "source": "src/MFlow-Forms.html#getRestParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getRestParam",
          "package": "MFlow",
          "partial": "Rest Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getRestParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a dropdown box with the options in the first parameter is optionally selected\n . It returns the selected option. \n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "getSelect",
          "package": "MFlow",
          "signature": "View view m (MFOption a) -\u003e View view m a",
          "source": "src/MFlow-Forms.html#getSelect",
          "type": "function"
        },
        "index": {
          "description": "Display dropdown box with the options in the first parameter is optionally selected It returns the selected option",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getSelect",
          "normalized": "View a b(MFOption c)-\u003eView a b c",
          "package": "MFlow",
          "partial": "Select",
          "signature": "View view m(MFOption a)-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a text box and return a non empty String\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "getString",
          "package": "MFlow",
          "signature": "Maybe String -\u003e View view m String",
          "source": "src/MFlow-Forms.html#getString",
          "type": "function"
        },
        "index": {
          "description": "Display text box and return non empty String",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getString",
          "normalized": "Maybe String-\u003eView a b String",
          "package": "MFlow",
          "partial": "String",
          "signature": "Maybe String-\u003eView view m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "getTextBox",
          "package": "MFlow",
          "signature": "Maybe a -\u003e View view m a",
          "source": "src/MFlow-Forms.html#getTextBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getTextBox",
          "normalized": "Maybe a-\u003eView b c a",
          "package": "MFlow",
          "partial": "Text Box",
          "signature": "Maybe a-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getTextBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVery basic user authentication. The user is stored in a cookie.\n it looks for the cookie. If no cookie, it ask to the user for a \u003ccode\u003e\u003ca\u003euserRegister\u003c/a\u003e\u003c/code\u003eed\n user-password combination.\n The user-password combination is only asked if the user has not logged already\n otherwise, the stored username is returned.\n\u003c/p\u003e\u003cpre\u003egetUser mu form= ask $ userWidget mu form\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "getUser",
          "package": "MFlow",
          "signature": "Maybe String -\u003e View view IO (Maybe (UserStr, PasswdStr), Maybe String) -\u003e FlowM view IO String",
          "source": "src/MFlow-Forms.html#getUser",
          "type": "function"
        },
        "index": {
          "description": "Very basic user authentication The user is stored in cookie it looks for the cookie If no cookie it ask to the user for userRegister ed user-password combination The user-password combination is only asked if the user has not logged already otherwise the stored username is returned getUser mu form ask userWidget mu form",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getUser",
          "normalized": "Maybe String-\u003eView a IO(Maybe(UserStr,PasswdStr),Maybe String)-\u003eFlowM a IO String",
          "package": "MFlow",
          "partial": "User",
          "signature": "Maybe String-\u003eView view IO(Maybe(UserStr,PasswdStr),Maybe String)-\u003eFlowM view IO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf not logged, perform login. otherwise return the user\n\u003c/p\u003e\u003cpre\u003egetUserSimple= getUser Nothing userFormLine\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "getUserSimple",
          "package": "MFlow",
          "signature": "FlowM view IO String",
          "source": "src/MFlow-Forms.html#getUserSimple",
          "type": "function"
        },
        "index": {
          "description": "If not logged perform login otherwise return the user getUserSimple getUser Nothing userFormLine",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "getUserSimple",
          "package": "MFlow",
          "partial": "User Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:getUserSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "inred",
          "package": "MFlow",
          "signature": "view -\u003e view",
          "source": "src/MFlow-Forms-Internals.html#inred",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "inred",
          "normalized": "a-\u003ea",
          "package": "MFlow",
          "signature": "view-\u003eview",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:inred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "installRequirements",
          "package": "MFlow",
          "signature": "[a] -\u003e m view",
          "source": "src/MFlow-Forms-Internals.html#installRequirements",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "installRequirements",
          "normalized": "[a]-\u003eb c",
          "package": "MFlow",
          "partial": "Requirements",
          "signature": "[a]-\u003em view",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:installRequirements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWether the user is logged or is anonymous\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "isLogged",
          "package": "MFlow",
          "signature": "m Bool",
          "source": "src/MFlow-Forms.html#isLogged",
          "type": "function"
        },
        "index": {
          "description": "Wether the user is logged or is anonymous",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "isLogged",
          "package": "MFlow",
          "partial": "Logged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:isLogged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the user\n\u003c/p\u003e\u003cp\u003eIt is supposed that the user has been validated\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "login",
          "package": "MFlow",
          "signature": "String -\u003e m ()",
          "source": "src/MFlow-Forms.html#login",
          "type": "function"
        },
        "index": {
          "description": "change the user It is supposed that the user has been validated",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "login",
          "normalized": "String-\u003ea()",
          "package": "MFlow",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:login"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elogout. The user is reset to the \u003ccode\u003e\u003ca\u003eanonymous\u003c/a\u003e\u003c/code\u003e user\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "logout",
          "package": "MFlow",
          "signature": "m ()",
          "source": "src/MFlow-Forms.html#logout",
          "type": "function"
        },
        "index": {
          "description": "logout The user is reset to the anonymous user",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "logout",
          "normalized": "a()",
          "package": "MFlow",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:logout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efrom a list of widgets, it return the validated ones.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "manyOf",
          "package": "MFlow",
          "signature": "[View view m a] -\u003e View view m [a]",
          "source": "src/MFlow-Forms.html#manyOf",
          "type": "function"
        },
        "index": {
          "description": "from list of widgets it return the validated ones",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "manyOf",
          "normalized": "[View a b c]-\u003eView a b[c]",
          "package": "MFlow",
          "partial": "Of",
          "signature": "[View view m a]-\u003eView view m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:manyOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty widget that return Nothing. May be used as \"empty boxes\" inside larger widgets.\n\u003c/p\u003e\u003cp\u003eIt returns a non valid value.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "noWidget",
          "package": "MFlow",
          "signature": "View view m a",
          "source": "src/MFlow-Forms.html#noWidget",
          "type": "function"
        },
        "index": {
          "description": "Empty widget that return Nothing May be used as empty boxes inside larger widgets It returns non valid value",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "noWidget",
          "package": "MFlow",
          "partial": "Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:noWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "notValid",
          "package": "MFlow",
          "signature": "view -\u003e View view m a",
          "source": "src/MFlow-Forms.html#notValid",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "notValid",
          "normalized": "a-\u003eView a b c",
          "package": "MFlow",
          "partial": "Valid",
          "signature": "view-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:notValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym of ask.\n\u003c/p\u003e\u003cp\u003eMaybe more appropiate for pages with long interactions with the user\n while the result has little importance.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "page",
          "package": "MFlow",
          "signature": "View view IO a -\u003e FlowM view IO a",
          "source": "src/MFlow-Forms.html#page",
          "type": "function"
        },
        "index": {
          "description": "synonym of ask Maybe more appropiate for pages with long interactions with the user while the result has little importance",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "page",
          "normalized": "View a IO b-\u003eFlowM a IO b",
          "package": "MFlow",
          "signature": "View view IO a-\u003eFlowM view IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "pageFlow",
          "package": "MFlow",
          "signature": "String -\u003e View view m a -\u003e View view m a",
          "source": "src/MFlow-Forms.html#pageFlow",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "pageFlow",
          "normalized": "String-\u003eView a b c-\u003eView a b c",
          "package": "MFlow",
          "partial": "Flow",
          "signature": "String-\u003eView view m a-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:pageFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "resetButton",
          "package": "MFlow",
          "signature": "String -\u003e View view m ()",
          "source": "src/MFlow-Forms.html#resetButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "resetButton",
          "normalized": "String-\u003eView a b()",
          "package": "MFlow",
          "partial": "Button",
          "signature": "String-\u003eView view m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:resetButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eforces backtracking if the widget validates, because a previous page handle this widget response\n . This is useful for recurrent cached widgets that are present in multiple pages. For example\n in the case of menus or common options. The active elements of this widget must be cached with no timeout.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "retry",
          "package": "MFlow",
          "signature": "View v m a -\u003e View v m ()",
          "source": "src/MFlow-Forms.html#retry",
          "type": "function"
        },
        "index": {
          "description": "forces backtracking if the widget validates because previous page handle this widget response This is useful for recurrent cached widgets that are present in multiple pages For example in the case of menus or common options The active elements of this widget must be cached with no timeout",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "retry",
          "normalized": "View a b c-\u003eView a b()",
          "package": "MFlow",
          "signature": "View v m a-\u003eView v m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the result if going forward\n\u003c/p\u003e\u003cp\u003eIf the process is backtraking, it does not validate,\n in order to continue the backtracking\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "returnIfForward",
          "package": "MFlow",
          "signature": "b -\u003e View view m b",
          "source": "src/MFlow-Forms.html#returnIfForward",
          "type": "function"
        },
        "index": {
          "description": "return the result if going forward If the process is backtraking it does not validate in order to continue the backtracking",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "returnIfForward",
          "normalized": "a-\u003eView b c a",
          "package": "MFlow",
          "partial": "If Forward",
          "signature": "b-\u003eView view m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:returnIfForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen some user interface return some response to the server, but it is not produced by\n a form or a link, but for example by an script, \u003ccode\u003ereturning\u003c/code\u003e  convert this code into a\n widget.\n\u003c/p\u003e\u003cp\u003eAt runtime the parameter is read from the environment and validated.\n\u003c/p\u003e\u003cp\u003e. The parameter is the visualization code, that accept a serialization function that generate\n the server invocation string, used by the visualization to return the value by means\n of an script, usually.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "returning",
          "package": "MFlow",
          "signature": "((a -\u003e String) -\u003e view) -\u003e View view m a",
          "source": "src/MFlow-Forms.html#returning",
          "type": "function"
        },
        "index": {
          "description": "When some user interface return some response to the server but it is not produced by form or link but for example by an script returning convert this code into widget At runtime the parameter is read from the environment and validated The parameter is the visualization code that accept serialization function that generate the server invocation string used by the visualization to return the value by means of an script usually",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "returning",
          "normalized": "((a-\u003eString)-\u003eb)-\u003eView b c a",
          "package": "MFlow",
          "signature": "((a-\u003eString)-\u003eview)-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:returning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms\",\"MFlow\"]",
          "name": "setAdminUser",
          "package": "MFlow",
          "signature": "UserStr -\u003e PasswdStr -\u003e m ()",
          "source": "src/MFlow.html#setAdminUser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setAdminUser\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:setAdminUser\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "setAdminUser",
          "normalized": "UserStr-\u003ePasswdStr-\u003ea()",
          "package": "MFlow",
          "partial": "Admin User",
          "signature": "UserStr-\u003ePasswdStr-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setAdminUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset an authentication method\n\u003c/p\u003e",
          "module": "[\"MFlow.Forms\",\"MFlow\"]",
          "name": "setAuthMethod",
          "package": "MFlow",
          "signature": "Auth -\u003e IO ()",
          "source": "src/MFlow.html#setAuthMethod",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setAuthMethod\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:setAuthMethod\"]"
        },
        "index": {
          "description": "set an authentication method",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "setAuthMethod",
          "normalized": "Auth-\u003eIO()",
          "package": "MFlow",
          "partial": "Auth Method",
          "signature": "Auth-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setAuthMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a text box and return the value entered if it is readable( Otherwise, fail the validation)\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "setCheckBox",
          "package": "MFlow",
          "signature": "Bool -\u003e String -\u003e View view m CheckBoxes",
          "source": "src/MFlow-Forms.html#setCheckBox",
          "type": "function"
        },
        "index": {
          "description": "Display text box and return the value entered if it is readable Otherwise fail the validation",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "setCheckBox",
          "normalized": "Bool-\u003eString-\u003eView a b CheckBoxes",
          "package": "MFlow",
          "partial": "Check Box",
          "signature": "Bool-\u003eString-\u003eView view m CheckBoxes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setCheckBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the option for getSelect. Options are concatenated with \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "setOption",
          "package": "MFlow",
          "signature": "a -\u003e view -\u003e View view m (MFOption a)",
          "source": "src/MFlow-Forms.html#setOption",
          "type": "function"
        },
        "index": {
          "description": "Set the option for getSelect Options are concatenated with",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "setOption",
          "normalized": "a-\u003eb-\u003eView b c(MFOption a)",
          "package": "MFlow",
          "partial": "Option",
          "signature": "a-\u003eview-\u003eView view m(MFOption a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplement a radio button\n the parameter is the name of the radio group\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "setRadio",
          "package": "MFlow",
          "signature": "a -\u003e String -\u003e View view m (Radio a)",
          "source": "src/MFlow-Forms.html#setRadio",
          "type": "function"
        },
        "index": {
          "description": "Implement radio button the parameter is the name of the radio group",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "setRadio",
          "normalized": "a-\u003eString-\u003eView b c(Radio a)",
          "package": "MFlow",
          "partial": "Radio",
          "signature": "a-\u003eString-\u003eView view m(Radio a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplement a radio button that perform a submit when pressed.\n the parameter is the name of the radio group\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "setRadioActive",
          "package": "MFlow",
          "signature": "a -\u003e String -\u003e View view m (Radio a)",
          "source": "src/MFlow-Forms.html#setRadioActive",
          "type": "function"
        },
        "index": {
          "description": "Implement radio button that perform submit when pressed the parameter is the name of the radio group",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "setRadioActive",
          "normalized": "a-\u003eString-\u003eView b c(Radio a)",
          "package": "MFlow",
          "partial": "Radio Active",
          "signature": "a-\u003eString-\u003eView view m(Radio a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setRadioActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the selected option for getSelect. Options are concatenated with \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "setSelectedOption",
          "package": "MFlow",
          "signature": "a -\u003e view -\u003e View view m (MFOption a)",
          "source": "src/MFlow-Forms.html#setSelectedOption",
          "type": "function"
        },
        "index": {
          "description": "Set the selected option for getSelect Options are concatenated with",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "setSelectedOption",
          "normalized": "a-\u003eb-\u003eView b c(MFOption a)",
          "package": "MFlow",
          "partial": "Selected Option",
          "signature": "a-\u003eview-\u003eView view m(MFOption a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:setSelectedOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "submitButton",
          "package": "MFlow",
          "signature": "String -\u003e View view m String",
          "source": "src/MFlow-Forms.html#submitButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "submitButton",
          "normalized": "String-\u003eView a b String",
          "package": "MFlow",
          "partial": "Button",
          "signature": "String-\u003eView view m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:submitButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "toByteString",
          "package": "MFlow",
          "signature": "view -\u003e ByteString",
          "source": "src/MFlow-Forms-Internals.html#toByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "toByteString",
          "normalized": "a-\u003eByteString",
          "package": "MFlow",
          "partial": "Byte String",
          "signature": "view-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "toHttpData",
          "package": "MFlow",
          "signature": "view -\u003e HttpData",
          "source": "src/MFlow-Forms-Internals.html#toHttpData",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "toHttpData",
          "normalized": "a-\u003eHttpData",
          "package": "MFlow",
          "partial": "Http Data",
          "signature": "view-\u003eHttpData",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:toHttpData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms\",\"MFlow\"]",
          "name": "uregister",
          "package": "MFlow",
          "signature": "UserStr -\u003e PasswdStr -\u003e IO (Maybe String)",
          "source": "src/MFlow.html#Auth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:uregister\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:uregister\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "uregister",
          "normalized": "UserStr-\u003ePasswdStr-\u003eIO(Maybe String)",
          "package": "MFlow",
          "signature": "UserStr-\u003ePasswdStr-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:uregister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs an example of login/register validation form needed by \u003ccode\u003e\u003ca\u003euserWidget\u003c/a\u003e\u003c/code\u003e. In this case\n the form field appears in a single line. it shows, in sequence, entries for the username,\n password, a button for loging, a entry to repeat password necesary for registering\n and a button for registering.\n The user can build its own user login/validation forms by modifying this example\n\u003c/p\u003e\u003cpre\u003e userFormLine=\n     (User \u003c$\u003e getString (Just \"enter user\") \u003c*\u003e getPassword \u003c+\u003e submitButton \"login\")\n     \u003c+\u003e fromStr \"  password again\" +\u003e getPassword \u003c* submitButton \"register\"\n\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "userFormLine",
          "package": "MFlow",
          "signature": "View view m (Maybe (UserStr, PasswdStr), Maybe PasswdStr)",
          "source": "src/MFlow-Forms.html#userFormLine",
          "type": "function"
        },
        "index": {
          "description": "Is an example of login register validation form needed by userWidget In this case the form field appears in single line it shows in sequence entries for the username password button for loging entry to repeat password necesary for registering and button for registering The user can build its own user login validation forms by modifying this example userFormLine User getString Just enter user getPassword submitButton login fromStr password again getPassword submitButton register",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "userFormLine",
          "normalized": "View a b(Maybe(UserStr,PasswdStr),Maybe PasswdStr)",
          "package": "MFlow",
          "partial": "Form Line",
          "signature": "View view m(Maybe(UserStr,PasswdStr),Maybe PasswdStr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:userFormLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExample of user/password form (no validation) to be used with \u003ccode\u003e\u003ca\u003euserWidget\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "userLogin",
          "package": "MFlow",
          "signature": "View view m (Maybe (UserStr, PasswdStr), Maybe String)",
          "source": "src/MFlow-Forms.html#userLogin",
          "type": "function"
        },
        "index": {
          "description": "Example of user password form no validation to be used with userWidget",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "userLogin",
          "normalized": "View a b(Maybe(UserStr,PasswdStr),Maybe String)",
          "package": "MFlow",
          "partial": "Login",
          "signature": "View view m(Maybe(UserStr,PasswdStr),Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:userLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "userName",
          "package": "MFlow",
          "signature": "User -\u003e String",
          "source": "src/MFlow.html#userName",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "userName",
          "normalized": "User-\u003eString",
          "package": "MFlow",
          "partial": "Name",
          "signature": "User-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:userName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms\",\"MFlow\"]",
          "name": "userRegister",
          "package": "MFlow",
          "signature": "UserStr -\u003e PasswdStr -\u003e m (Maybe String)",
          "source": "src/MFlow.html#userRegister",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:userRegister\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:userRegister\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "userRegister",
          "normalized": "UserStr-\u003ePasswdStr-\u003ea(Maybe String)",
          "package": "MFlow",
          "partial": "Register",
          "signature": "UserStr-\u003ePasswdStr-\u003em(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:userRegister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthentication against \u003ccode\u003e\u003ca\u003euserRegister\u003c/a\u003e\u003c/code\u003eed users.\n to be used with \u003ccode\u003e\u003ca\u003evalidate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "userValidate",
          "package": "MFlow",
          "signature": "(UserStr, PasswdStr) -\u003e m (Maybe view)",
          "source": "src/MFlow-Forms.html#userValidate",
          "type": "function"
        },
        "index": {
          "description": "Authentication against userRegister ed users to be used with validate",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "userValidate",
          "normalized": "(UserStr,PasswdStr)-\u003ea(Maybe b)",
          "package": "MFlow",
          "partial": "Validate",
          "signature": "(UserStr,PasswdStr)-\u003em(Maybe view)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:userValidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt creates a widget for user login/registering. If a user name is specified\n in the first parameter, it is forced to login/password as this specific user.\n If this user was already logged, the widget return the user without asking.\n If the user press the register button, the new user-password is registered and the\n user logged.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "userWidget",
          "package": "MFlow",
          "signature": "Maybe String -\u003e View view m (Maybe (UserStr, PasswdStr), Maybe String) -\u003e View view m String",
          "source": "src/MFlow-Forms.html#userWidget",
          "type": "function"
        },
        "index": {
          "description": "It creates widget for user login registering If user name is specified in the first parameter it is forced to login password as this specific user If this user was already logged the widget return the user without asking If the user press the register button the new user-password is registered and the user logged",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "userWidget",
          "normalized": "Maybe String-\u003eView a b(Maybe(UserStr,PasswdStr),Maybe String)-\u003eView a b String",
          "package": "MFlow",
          "partial": "Widget",
          "signature": "Maybe String-\u003eView view m(Maybe(UserStr,PasswdStr),Maybe String)-\u003eView view m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:userWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"MFlow.Forms\",\"MFlow\"]",
          "name": "uvalidate",
          "package": "MFlow",
          "signature": "UserStr -\u003e PasswdStr -\u003e IO (Maybe String)",
          "source": "src/MFlow.html#Auth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:uvalidate\",\"http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:uvalidate\"]"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "uvalidate",
          "normalized": "UserStr-\u003ePasswdStr-\u003eIO(Maybe String)",
          "package": "MFlow",
          "signature": "UserStr-\u003ePasswdStr-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:uvalidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates a form or widget result against a validating procedure\n\u003c/p\u003e\u003cpre\u003egetOdd= getInt Nothing \u003ccode\u003e\u003ca\u003evalidate\u003c/a\u003e\u003c/code\u003e (x -\u003e return $ if mod x 2==0 then  Nothing else Just \u003ca\u003eonly odd numbers, please\u003c/a\u003e)\u003c/pre\u003e",
          "module": "MFlow.Forms",
          "name": "validate",
          "package": "MFlow",
          "signature": "View view m a -\u003e (a -\u003e WState view m (Maybe view)) -\u003e View view m a",
          "source": "src/MFlow-Forms.html#validate",
          "type": "function"
        },
        "index": {
          "description": "Validates form or widget result against validating procedure getOdd getInt Nothing validate return if mod then Nothing else Just only odd numbers please",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "validate",
          "normalized": "View a b c-\u003e(c-\u003eWState a b(Maybe a))-\u003eView a b c",
          "package": "MFlow",
          "signature": "View view m a-\u003e(a-\u003eWState view m(Maybe view))-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:validate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActions are callbacks that are executed when a widget is validated.\n A action may be a complete flow in the flowM monad. It takes complete control of the navigation\n while it is executed. At the end it return the result to the caller and display the original\n calling page.\n It is useful when the widget is inside widget containers that may treat it as a black box.\n\u003c/p\u003e\u003cp\u003eIt returns a result  that can be significative or, else, be ignored with \u003ccode\u003e\u003ca\u003e\u003c**\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e**\u003e\u003c/a\u003e\u003c/code\u003e.\n An action may or may not initiate his own dialog with the user via \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "waction",
          "package": "MFlow",
          "signature": "View view m a -\u003e (a -\u003e FlowM view m b) -\u003e View view m b",
          "source": "src/MFlow-Forms.html#waction",
          "type": "function"
        },
        "index": {
          "description": "Actions are callbacks that are executed when widget is validated action may be complete flow in the flowM monad It takes complete control of the navigation while it is executed At the end it return the result to the caller and display the original calling page It is useful when the widget is inside widget containers that may treat it as black box It returns result that can be significative or else be ignored with and An action may or may not initiate his own dialog with the user via ask",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "waction",
          "normalized": "View a b c-\u003e(c-\u003eFlowM a b d)-\u003eView a b d",
          "package": "MFlow",
          "signature": "View view m a-\u003e(a-\u003eFlowM view m b)-\u003eView view m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:waction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a widget with form element within a form-action element.\n Usually this is not necessary since this wrapping is done automatically by the \u003ccode\u003eWiew\u003c/code\u003e monad, unless\n there are more than one form in the page.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "wform",
          "package": "MFlow",
          "signature": "View view m b -\u003e View view m b",
          "source": "src/MFlow-Forms.html#wform",
          "type": "function"
        },
        "index": {
          "description": "Wrap widget with form element within form-action element Usually this is not necessary since this wrapping is done automatically by the Wiew monad unless there are more than one form in the page",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "wform",
          "normalized": "View a b c-\u003eView a b c",
          "package": "MFlow",
          "signature": "View view m b-\u003eView view m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:wform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "whidden",
          "package": "MFlow",
          "signature": "a -\u003e View v m a",
          "source": "src/MFlow-Forms.html#whidden",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "whidden",
          "normalized": "a-\u003eView b c a",
          "package": "MFlow",
          "signature": "a-\u003eView v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:whidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Forms",
          "name": "wlabel",
          "package": "MFlow",
          "signature": "view -\u003e View view m a -\u003e View view m a",
          "source": "src/MFlow-Forms.html#wlabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "wlabel",
          "normalized": "a-\u003eView a b c-\u003eView a b c",
          "package": "MFlow",
          "signature": "view-\u003eView view m a-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:wlabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a link wiget. A link can be composed with other widget elements,\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "wlink",
          "package": "MFlow",
          "signature": "a -\u003e view -\u003e View view m a",
          "source": "src/MFlow-Forms.html#wlink",
          "type": "function"
        },
        "index": {
          "description": "Creates link wiget link can be composed with other widget elements",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "wlink",
          "normalized": "a-\u003eb-\u003eView b c a",
          "package": "MFlow",
          "signature": "a-\u003eview-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:wlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the rendering and the return value of a page. This is superseeded by page flows.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "wmodify",
          "package": "MFlow",
          "signature": "View v m a -\u003e ([v] -\u003e Maybe a -\u003e WState v m ([v], Maybe b)) -\u003e View v m b",
          "source": "src/MFlow-Forms.html#wmodify",
          "type": "function"
        },
        "index": {
          "description": "change the rendering and the return value of page This is superseeded by page flows",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "wmodify",
          "normalized": "View a b c-\u003e([a]-\u003eMaybe c-\u003eWState a b([a],Maybe d))-\u003eView a b d",
          "package": "MFlow",
          "signature": "View v m a-\u003e([v]-\u003eMaybe a-\u003eWState v m([v],Maybe b))-\u003eView v m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:wmodify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender raw view formatting. It is useful for displaying information.\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "wraw",
          "package": "MFlow",
          "signature": "view -\u003e View view m ()",
          "source": "src/MFlow-Forms.html#wraw",
          "type": "function"
        },
        "index": {
          "description": "Render raw view formatting It is useful for displaying information",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "wraw",
          "normalized": "a-\u003eView a b()",
          "package": "MFlow",
          "signature": "view-\u003eView view m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:wraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a Show-able  value and return it\n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "wrender",
          "package": "MFlow",
          "signature": "a -\u003e View view m a",
          "source": "src/MFlow-Forms.html#wrender",
          "type": "function"
        },
        "index": {
          "description": "Render Show-able value and return it",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "wrender",
          "normalized": "a-\u003eView b c a",
          "package": "MFlow",
          "signature": "a-\u003eView view m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:wrender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a stateless flow (see \u003ccode\u003e\u003ca\u003estateless\u003c/a\u003e\u003c/code\u003e) whose behaviour is defined as a widget. It is a\n higuer level form of the latter \n\u003c/p\u003e",
          "module": "MFlow.Forms",
          "name": "wstateless",
          "package": "MFlow",
          "signature": "View view IO () -\u003e Flow",
          "source": "src/MFlow-Forms.html#wstateless",
          "type": "function"
        },
        "index": {
          "description": "Creates stateless flow see stateless whose behaviour is defined as widget It is higuer level form of the latter",
          "hierarchy": "MFlow Forms",
          "module": "MFlow.Forms",
          "name": "wstateless",
          "normalized": "View a IO()-\u003eFlow",
          "package": "MFlow",
          "signature": "View view IO()-\u003eFlow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Forms.html#v:wstateless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Wai.Blaze.Html.All",
          "name": "All",
          "package": "MFlow",
          "source": "src/MFlow-Wai-Blaze-Html-All.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MFlow Wai Blaze Html All",
          "module": "MFlow.Wai.Blaze.Html.All",
          "name": "All",
          "package": "MFlow",
          "partial": "All",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Wai-Blaze-Html-All.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun a persistent flow. It uses \u003ccode\u003egetPort\u003c/code\u003e to get the port\n The first parameter is the first element in the URL path.\n It also set the home page\n\u003c/p\u003e",
          "module": "MFlow.Wai.Blaze.Html.All",
          "name": "runNavigation",
          "package": "MFlow",
          "signature": "String -\u003e FlowM Html (Workflow IO) () -\u003e IO Bool",
          "source": "src/MFlow-Wai-Blaze-Html-All.html#runNavigation",
          "type": "function"
        },
        "index": {
          "description": "run persistent flow It uses getPort to get the port The first parameter is the first element in the URL path It also set the home page",
          "hierarchy": "MFlow Wai Blaze Html All",
          "module": "MFlow.Wai.Blaze.Html.All",
          "name": "runNavigation",
          "normalized": "String-\u003eFlowM Html(Workflow IO)()-\u003eIO Bool",
          "package": "MFlow",
          "partial": "Navigation",
          "signature": "String-\u003eFlowM Html(Workflow IO)()-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Wai-Blaze-Html-All.html#v:runNavigation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Wai.XHtml.All",
          "name": "All",
          "package": "MFlow",
          "source": "src/MFlow-Wai-XHtml-All.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MFlow Wai XHtml All",
          "module": "MFlow.Wai.XHtml.All",
          "name": "All",
          "package": "MFlow",
          "partial": "All",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Wai-XHtml-All.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Wai",
          "name": "Wai",
          "package": "MFlow",
          "source": "src/MFlow-Wai.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "MFlow Wai",
          "module": "MFlow.Wai",
          "name": "Wai",
          "package": "MFlow",
          "partial": "Wai",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Wai.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow.Wai",
          "name": "waiMessageFlow",
          "package": "MFlow",
          "signature": "Application",
          "source": "src/MFlow-Wai.html#waiMessageFlow",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow Wai",
          "module": "MFlow.Wai",
          "name": "waiMessageFlow",
          "package": "MFlow",
          "partial": "Message Flow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow-Wai.html#v:waiMessageFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNon monadic low level primitives that implement the MFlow application server.\nSee \u003ca\u003eMFlow.Form\u003c/a\u003e for the higher level interface that you may use.\n\u003c/p\u003e\u003cp\u003eit implements an scheduler of  \u003ccode\u003e\u003ca\u003eProcessable\u003c/a\u003e\u003c/code\u003e  messages that are served according with\nthe source identification and the verb invoked.\nThe scheduler executed the appropriate workflow (using the workflow package).\nThe workflow will send additional messages to the source and wait for the responses.\nThe diaglog is identified by a \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e, which is associated to the flow.\n. The computation state is optionally logged. On timeout, the process is killed. When invoked again,\nthe execution state is recovered as if no interruption took place.\n\u003c/p\u003e\u003cp\u003eThere is no asumption about message codification, so instantiations\nof this scheduler for different infrastructures is possible,\nincluding non-Web based ones as long as they support or emulate cookies.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eMFlow.Hack\u003c/a\u003e is an instantiation for the Hack interface in a Web context.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eMFlow.Wai\u003c/a\u003e is a instantiation for the WAI interface.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eMFlow.Forms\u003c/a\u003e implements a monadic type safe interface with composabe widgets and and applicative\ncombinator as well as an higher comunication interface.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eMFlow.Forms.XHtml\u003c/a\u003e is an instantiation for the Text.XHtml format\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eMFlow.Forms.Blaze.Html\u003c/a\u003e is an instantaiation for  blaze-html\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eMFlow.Forms.HSP\u003c/a\u003e  is an instantiation for the Haskell Server Pages  format\n\u003c/p\u003e\u003cp\u003eThere are some \u003ccode\u003e*.All\u003c/code\u003e packages that contain a mix of these instantiations.\nFor exmaple, \u003ca\u003eMFlow.Wai.Blaze.Html.All\u003c/a\u003e includes most of all necessary for using MFlow with\nWai \u003ca\u003ehttp://hackage.haskell.org/package/wai\u003c/a\u003e and\nBlaze-html \u003ca\u003ehttp://hackage.haskell.org/package/blaze-html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eIn order to manage resources, there are primitives that kill the process and its state after a timeout.\n\u003c/p\u003e\u003cp\u003eAll these details are hidden in the monad of \u003ca\u003eMFlow.Forms\u003c/a\u003e that provides an higher level interface.\n\u003c/p\u003e\u003cp\u003eFragment based streaming: \u003ccode\u003e\u003ca\u003esendFragment\u003c/a\u003e\u003c/code\u003e  are  provided only at this level.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003estateless\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etransient\u003c/a\u003e\u003c/code\u003e server processeses are also possible. the first are request-response\n . \u003ccode\u003e\u003ca\u003etransient\u003c/a\u003e\u003c/code\u003e processes do not persist after timeout, so they restart anew after a timeout or a crash.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MFlow",
          "name": "MFlow",
          "package": "MFlow",
          "source": "src/MFlow.html",
          "type": "module"
        },
        "index": {
          "description": "Non monadic low level primitives that implement the MFlow application server See MFlow.Form for the higher level interface that you may use it implements an scheduler of Processable messages that are served according with the source identification and the verb invoked The scheduler executed the appropriate workflow using the workflow package The workflow will send additional messages to the source and wait for the responses The diaglog is identified by Token which is associated to the flow The computation state is optionally logged On timeout the process is killed When invoked again the execution state is recovered as if no interruption took place There is no asumption about message codification so instantiations of this scheduler for different infrastructures is possible including non-Web based ones as long as they support or emulate cookies MFlow.Hack is an instantiation for the Hack interface in Web context MFlow.Wai is instantiation for the WAI interface MFlow.Forms implements monadic type safe interface with composabe widgets and and applicative combinator as well as an higher comunication interface MFlow.Forms.XHtml is an instantiation for the Text.XHtml format MFlow.Forms.Blaze.Html is an instantaiation for blaze-html MFlow.Forms.HSP is an instantiation for the Haskell Server Pages format There are some All packages that contain mix of these instantiations For exmaple MFlow.Wai.Blaze.Html.All includes most of all necessary for using MFlow with Wai http hackage.haskell.org package wai and Blaze-html http hackage.haskell.org package blaze-html In order to manage resources there are primitives that kill the process and its state after timeout All these details are hidden in the monad of MFlow.Forms that provides an higher level interface Fragment based streaming sendFragment are provided only at this level stateless and transient server processeses are also possible the first are request-response transient processes do not persist after timeout so they restart anew after timeout or crash",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "MFlow",
          "package": "MFlow",
          "partial": "MFlow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "Attribs",
          "package": "MFlow",
          "source": "src/MFlow.html#Attribs",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "Attribs",
          "package": "MFlow",
          "partial": "Attribs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#t:Attribs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "Auth",
          "package": "MFlow",
          "source": "src/MFlow.html#Auth",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "Auth",
          "package": "MFlow",
          "partial": "Auth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#t:Auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "Flow",
          "package": "MFlow",
          "source": "src/MFlow.html#Flow",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "Flow",
          "package": "MFlow",
          "partial": "Flow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#t:Flow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "HttpData",
          "package": "MFlow",
          "source": "src/MFlow.html#HttpData",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "HttpData",
          "package": "MFlow",
          "partial": "Http Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#t:HttpData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "Params",
          "package": "MFlow",
          "source": "src/MFlow.html#Params",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "Params",
          "package": "MFlow",
          "partial": "Params",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#t:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "PasswdStr",
          "package": "MFlow",
          "source": "src/MFlow.html#PasswdStr",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "PasswdStr",
          "package": "MFlow",
          "partial": "Passwd Str",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#t:PasswdStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of (wfname, workflow) pairs, to be scheduled depending on the message's pwfname\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "ProcList",
          "package": "MFlow",
          "source": "src/MFlow.html#ProcList",
          "type": "type"
        },
        "index": {
          "description": "List of wfname workflow pairs to be scheduled depending on the message pwfname",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "ProcList",
          "package": "MFlow",
          "partial": "Proc List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#t:ProcList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "Processable",
          "package": "MFlow",
          "source": "src/MFlow.html#Processable",
          "type": "class"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "Processable",
          "package": "MFlow",
          "partial": "Processable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#t:Processable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea Token identifies a flow that handle messages. The scheduler compose a Token with every \u003ccode\u003e\u003ca\u003eProcessable\u003c/a\u003e\u003c/code\u003e\n message that arrives and send the mesage to the appropriate flow.\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "Token",
          "package": "MFlow",
          "source": "src/MFlow.html#Token",
          "type": "data"
        },
        "index": {
          "description": "Token identifies flow that handle messages The scheduler compose Token with every Processable message that arrives and send the mesage to the appropriate flow",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "Token",
          "package": "MFlow",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "User",
          "package": "MFlow",
          "source": "src/MFlow.html#User",
          "type": "data"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "User",
          "package": "MFlow",
          "partial": "User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#t:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "UserStr",
          "package": "MFlow",
          "source": "src/MFlow.html#UserStr",
          "type": "type"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "UserStr",
          "package": "MFlow",
          "partial": "User Str",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#t:UserStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "Error",
          "package": "MFlow",
          "signature": "Error ByteString",
          "source": "src/MFlow.html#HttpData",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "Error",
          "package": "MFlow",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "HttpData",
          "package": "MFlow",
          "signature": "HttpData [(ByteString, ByteString)] [Cookie] ByteString",
          "source": "src/MFlow.html#HttpData",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "HttpData",
          "normalized": "HttpData[(ByteString,ByteString)][Cookie]ByteString",
          "package": "MFlow",
          "partial": "Http Data",
          "signature": "HttpData[(ByteString,ByteString)][Cookie]ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:HttpData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "Token",
          "package": "MFlow",
          "signature": "Token",
          "source": "src/MFlow.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "Token",
          "package": "MFlow",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "User",
          "package": "MFlow",
          "signature": "User",
          "source": "src/MFlow.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "User",
          "package": "MFlow",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "addAttrs",
          "package": "MFlow",
          "signature": "ByteString -\u003e Attribs -\u003e ByteString",
          "source": "src/MFlow.html#addAttrs",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "addAttrs",
          "normalized": "ByteString-\u003eAttribs-\u003eByteString",
          "package": "MFlow",
          "partial": "Attrs",
          "signature": "ByteString-\u003eAttribs-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:addAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a list of flows to be scheduled. Each entry in the list is a pair \u003ccode\u003e(path, flow)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "addMessageFlows",
          "package": "MFlow",
          "signature": "[([Char], Token -\u003e Workflow IO ())] -\u003e IO ()",
          "source": "src/MFlow.html#addMessageFlows",
          "type": "function"
        },
        "index": {
          "description": "add list of flows to be scheduled Each entry in the list is pair path flow",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "addMessageFlows",
          "normalized": "[([Char],Token-\u003eWorkflow IO())]-\u003eIO()",
          "package": "MFlow",
          "partial": "Message Flows",
          "signature": "[([Char],Token-\u003eWorkflow IO())]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:addMessageFlows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "addTokenToList",
          "package": "MFlow",
          "signature": "Token -\u003e IO ()",
          "source": "src/MFlow.html#addTokenToList",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "addTokenToList",
          "normalized": "Token-\u003eIO()",
          "package": "MFlow",
          "partial": "Token To List",
          "signature": "Token-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:addTokenToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe anonymous user\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "anonymous",
          "package": "MFlow",
          "signature": "[Char]",
          "source": "src/MFlow.html#anonymous",
          "type": "function"
        },
        "index": {
          "description": "The anonymous user",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "anonymous",
          "normalized": "[Char]",
          "package": "MFlow",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:anonymous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "delMessageFlow",
          "package": "MFlow",
          "signature": "String -\u003e IO ()",
          "source": "src/MFlow.html#delMessageFlow",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "delMessageFlow",
          "normalized": "String-\u003eIO()",
          "package": "MFlow",
          "partial": "Message Flow",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:delMessageFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "deleteTokenInList",
          "package": "MFlow",
          "signature": "Token -\u003e IO ()",
          "source": "src/MFlow.html#deleteTokenInList",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "deleteTokenInList",
          "normalized": "Token-\u003eIO()",
          "package": "MFlow",
          "partial": "Token In List",
          "signature": "Token-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:deleteTokenInList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "eUser",
          "package": "MFlow",
          "signature": "User",
          "source": "src/MFlow.html#eUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "eUser",
          "package": "MFlow",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:eUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "flushRec",
          "package": "MFlow",
          "signature": "Token -\u003e IO ()",
          "source": "src/MFlow.html#flushRec",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "flushRec",
          "normalized": "Token-\u003eIO()",
          "package": "MFlow",
          "partial": "Rec",
          "signature": "Token-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:flushRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "getAuthMethod",
          "package": "MFlow",
          "signature": "IO Auth",
          "source": "src/MFlow.html#getAuthMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "getAuthMethod",
          "package": "MFlow",
          "partial": "Auth Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:getAuthMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the list of the scheduler\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "getMessageFlows",
          "package": "MFlow",
          "signature": "IO (WorkflowList IO Token ())",
          "source": "src/MFlow.html#getMessageFlows",
          "type": "function"
        },
        "index": {
          "description": "return the list of the scheduler",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "getMessageFlows",
          "normalized": "IO(WorkflowList IO Token())",
          "package": "MFlow",
          "partial": "Message Flows",
          "signature": "IO(WorkflowList IO Token())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:getMessageFlows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "getNotFoundResponse",
          "package": "MFlow",
          "signature": "IO (Bool -\u003e [Char] -\u003e ByteString)",
          "source": "src/MFlow.html#getNotFoundResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "getNotFoundResponse",
          "normalized": "IO(Bool-\u003e[Char]-\u003eByteString)",
          "package": "MFlow",
          "partial": "Not Found Response",
          "signature": "IO(Bool-\u003e[Char]-\u003eByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:getNotFoundResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "getParams",
          "package": "MFlow",
          "signature": "a -\u003e Params",
          "source": "src/MFlow.html#getParams",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "getParams",
          "normalized": "a-\u003eParams",
          "package": "MFlow",
          "partial": "Params",
          "signature": "a-\u003eParams",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:getParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe handler of the error log\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "hlog",
          "package": "MFlow",
          "signature": "Handle",
          "source": "src/MFlow.html#hlog",
          "type": "function"
        },
        "index": {
          "description": "The handler of the error log",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "hlog",
          "package": "MFlow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:hlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe scheduler creates a Token with every \u003ccode\u003e\u003ca\u003eProcessable\u003c/a\u003e\u003c/code\u003e\n message that arrives and send the mesage to the appropriate flow, then waht for the response\n and return it.\n\u003c/p\u003e\u003cp\u003eIt is the core of the application server. \u003ca\u003eMFLow.Wai\u003c/a\u003e and \u003ca\u003eMFlow.Hack\u003c/a\u003e use it\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "msgScheduler",
          "package": "MFlow",
          "signature": "a -\u003e IO (HttpData, ThreadId)",
          "source": "src/MFlow.html#msgScheduler",
          "type": "function"
        },
        "index": {
          "description": "The scheduler creates Token with every Processable message that arrives and send the mesage to the appropriate flow then waht for the response and return it It is the core of the application server MFLow.Wai and MFlow.Hack use it",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "msgScheduler",
          "normalized": "a-\u003eIO(HttpData,ThreadId)",
          "package": "MFlow",
          "partial": "Scheduler",
          "signature": "a-\u003eIO(HttpData,ThreadId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:msgScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "newFlow",
          "package": "MFlow",
          "signature": "IO ByteString",
          "source": "src/MFlow.html#newFlow",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "newFlow",
          "package": "MFlow",
          "partial": "Flow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:newFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "noScript",
          "package": "MFlow",
          "signature": "[Char]",
          "source": "src/MFlow.html#noScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "noScript",
          "normalized": "[Char]",
          "package": "MFlow",
          "partial": "Script",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:noScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "pind",
          "package": "MFlow",
          "signature": "a -\u003e String",
          "source": "src/MFlow.html#pind",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "pind",
          "normalized": "a-\u003eString",
          "package": "MFlow",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:pind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "puser",
          "package": "MFlow",
          "signature": "a -\u003e String",
          "source": "src/MFlow.html#puser",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "puser",
          "normalized": "a-\u003eString",
          "package": "MFlow",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:puser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "pwfPath",
          "package": "MFlow",
          "signature": "a -\u003e [String]",
          "source": "src/MFlow.html#pwfPath",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "pwfPath",
          "normalized": "a-\u003e[String]",
          "package": "MFlow",
          "partial": "Path",
          "signature": "a-\u003e[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:pwfPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "pwfname",
          "package": "MFlow",
          "signature": "a -\u003e String",
          "source": "src/MFlow.html#pwfname",
          "type": "method"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "pwfname",
          "normalized": "a-\u003eString",
          "package": "MFlow",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:pwfname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "receive",
          "package": "MFlow",
          "signature": "Token -\u003e IO a",
          "source": "src/MFlow.html#receive",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "receive",
          "normalized": "Token-\u003eIO a",
          "package": "MFlow",
          "signature": "Token-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "receiveReq",
          "package": "MFlow",
          "signature": "Token -\u003e IO Req",
          "source": "src/MFlow.html#receiveReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "receiveReq",
          "normalized": "Token-\u003eIO Req",
          "package": "MFlow",
          "partial": "Req",
          "signature": "Token-\u003eIO Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:receiveReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "receiveReqTimeout",
          "package": "MFlow",
          "signature": "Int -\u003e Integer -\u003e Token -\u003e IO Req",
          "source": "src/MFlow.html#receiveReqTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "receiveReqTimeout",
          "normalized": "Int-\u003eInteger-\u003eToken-\u003eIO Req",
          "package": "MFlow",
          "partial": "Req Timeout",
          "signature": "Int-\u003eInteger-\u003eToken-\u003eIO Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:receiveReqTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend a complete response \nsend ::   Token  -\u003e HttpData -\u003e IO()\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "send",
          "package": "MFlow",
          "signature": "Token -\u003e HttpData -\u003e IO ()",
          "source": "src/MFlow.html#send",
          "type": "function"
        },
        "index": {
          "description": "send complete response send Token HttpData IO",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "send",
          "normalized": "Token-\u003eHttpData-\u003eIO()",
          "package": "MFlow",
          "signature": "Token-\u003eHttpData-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use \u003ca\u003esend\u003c/a\u003e to end a fragmented response instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MFlow",
          "name": "sendEndFragment",
          "package": "MFlow",
          "signature": "Token -\u003e HttpData -\u003e IO ()",
          "source": "src/MFlow.html#sendEndFragment",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use send to end fragmented response instead",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "sendEndFragment",
          "normalized": "Token-\u003eHttpData-\u003eIO()",
          "package": "MFlow",
          "partial": "End Fragment",
          "signature": "Token-\u003eHttpData-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:sendEndFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "sendFlush",
          "package": "MFlow",
          "signature": "Token -\u003e HttpData -\u003e IO ()",
          "source": "src/MFlow.html#sendFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "sendFlush",
          "normalized": "Token-\u003eHttpData-\u003eIO()",
          "package": "MFlow",
          "partial": "Flush",
          "signature": "Token-\u003eHttpData-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:sendFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend a response fragment. Useful for streaming. the last packet must sent trough \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "sendFragment",
          "package": "MFlow",
          "signature": "Token -\u003e HttpData -\u003e IO ()",
          "source": "src/MFlow.html#sendFragment",
          "type": "function"
        },
        "index": {
          "description": "send response fragment Useful for streaming the last packet must sent trough send",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "sendFragment",
          "normalized": "Token-\u003eHttpData-\u003eIO()",
          "package": "MFlow",
          "partial": "Fragment",
          "signature": "Token-\u003eHttpData-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:sendFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "sendToMF",
          "package": "MFlow",
          "signature": "Token -\u003e a -\u003e IO ()",
          "source": "src/MFlow.html#sendToMF",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "sendToMF",
          "normalized": "Token-\u003ea-\u003eIO()",
          "package": "MFlow",
          "partial": "To MF",
          "signature": "Token-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:sendToMF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "serveFile",
          "package": "MFlow",
          "signature": "[Char] -\u003e IO HttpData",
          "source": "src/MFlow.html#serveFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "serveFile",
          "normalized": "[Char]-\u003eIO HttpData",
          "package": "MFlow",
          "partial": "File",
          "signature": "[Char]-\u003eIO HttpData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:serveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the path of the files in the web server. The links to the files are relative to it.\n The files are cached (memoized) according with the \u003ca\u003eData.TCache\u003c/a\u003e policies in the program space. This avoid the blocking of\n the efficient GHC threads by frequent IO calls.So it enhances the performance\n in the context of heavy concurrence.\n It uses \u003ccode\u003e\u003ca\u003eMemoization\u003c/a\u003e\u003c/code\u003e. \n The caching-uncaching follows the \u003ccode\u003e\u003ca\u003esetPersist\u003c/a\u003e\u003c/code\u003e criteria\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "setFilesPath",
          "package": "MFlow",
          "signature": "String -\u003e m ()",
          "source": "src/MFlow.html#setFilesPath",
          "type": "function"
        },
        "index": {
          "description": "Set the path of the files in the web server The links to the files are relative to it The files are cached memoized according with the Data.TCache policies in the program space This avoid the blocking of the efficient GHC threads by frequent IO calls.So it enhances the performance in the context of heavy concurrence It uses Memoization The caching-uncaching follows the setPersist criteria",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "setFilesPath",
          "normalized": "String-\u003ea()",
          "package": "MFlow",
          "partial": "Files Path",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:setFilesPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the flow to be executed when the URL has no path. The home page.\n\u003c/p\u003e\u003cp\u003eBy default it is \u003ca\u003enoscript\u003c/a\u003e.\n Although it is changed by \u003ccode\u003erunNavigation\u003c/code\u003e to his own flow name.\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "setNoScript",
          "package": "MFlow",
          "signature": "[Char] -\u003e IO ()",
          "source": "src/MFlow.html#setNoScript",
          "type": "function"
        },
        "index": {
          "description": "set the flow to be executed when the URL has no path The home page By default it is noscript Although it is changed by runNavigation to his own flow name",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "setNoScript",
          "normalized": "[Char]-\u003eIO()",
          "package": "MFlow",
          "partial": "No Script",
          "signature": "[Char]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:setNoScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the  404 \u003ca\u003enot found\u003c/a\u003e response.\n\u003c/p\u003e\u003cp\u003eThe parameter is as follows:\n    (Bool        Either if the user is Administrator or not\n  -\u003e String      The error string\n  -\u003e HttpData)   The response. See \u003ccode\u003edefNotFoundResponse\u003c/code\u003e code for an example\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "setNotFoundResponse",
          "package": "MFlow",
          "signature": "(Bool -\u003e String -\u003e ByteString) -\u003e IO ()",
          "source": "src/MFlow.html#setNotFoundResponse",
          "type": "function"
        },
        "index": {
          "description": "set the not found response The parameter is as follows Bool Either if the user is Administrator or not String The error string HttpData The response See defNotFoundResponse code for an example",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "setNotFoundResponse",
          "normalized": "(Bool-\u003eString-\u003eByteString)-\u003eIO()",
          "package": "MFlow",
          "partial": "Not Found Response",
          "signature": "(Bool-\u003eString-\u003eByteString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:setNotFoundResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexecutes a simple request-response computation that receive the params and return a response\n\u003c/p\u003e\u003cp\u003eIt is used with \u003ccode\u003e\u003ca\u003eaddMessageFlows\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThere is a higuer level version \u003ccode\u003ewstateless\u003c/code\u003e in \u003ca\u003eMFLow.Forms\u003c/a\u003e\n\u003c/p\u003e",
          "module": "MFlow",
          "name": "stateless",
          "package": "MFlow",
          "signature": "(Params -\u003e IO HttpData) -\u003e Flow",
          "source": "src/MFlow.html#stateless",
          "type": "function"
        },
        "index": {
          "description": "executes simple request-response computation that receive the params and return response It is used with addMessageFlows There is higuer level version wstateless in MFLow.Forms",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "stateless",
          "normalized": "(Params-\u003eIO HttpData)-\u003eFlow",
          "package": "MFlow",
          "signature": "(Params-\u003eIO HttpData)-\u003eFlow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:stateless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "tenv",
          "package": "MFlow",
          "signature": "Params",
          "source": "src/MFlow.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "tenv",
          "package": "MFlow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:tenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "tind",
          "package": "MFlow",
          "signature": "String",
          "source": "src/MFlow.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "tind",
          "package": "MFlow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:tind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "tpath",
          "package": "MFlow",
          "signature": "[String]",
          "source": "src/MFlow.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "tpath",
          "normalized": "[String]",
          "package": "MFlow",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:tpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a monadic computation that send and receive messages, but does\n not store its state in permanent storage. The process once stopped, will restart anew \n\u003c/p\u003e",
          "module": "MFlow",
          "name": "transient",
          "package": "MFlow",
          "signature": "(Token -\u003e IO ()) -\u003e Flow",
          "source": "src/MFlow.html#transient",
          "type": "function"
        },
        "index": {
          "description": "Executes monadic computation that send and receive messages but does not store its state in permanent storage The process once stopped will restart anew",
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "transient",
          "normalized": "(Token-\u003eIO())-\u003eFlow",
          "package": "MFlow",
          "signature": "(Token-\u003eIO())-\u003eFlow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:transient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "trecq",
          "package": "MFlow",
          "signature": "MVar Resp",
          "source": "src/MFlow.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "trecq",
          "package": "MFlow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:trecq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "tsendq",
          "package": "MFlow",
          "signature": "MVar Req",
          "source": "src/MFlow.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "tsendq",
          "package": "MFlow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:tsendq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "tuser",
          "package": "MFlow",
          "signature": "String",
          "source": "src/MFlow.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "tuser",
          "package": "MFlow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:tuser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "twfname",
          "package": "MFlow",
          "signature": "String",
          "source": "src/MFlow.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "twfname",
          "package": "MFlow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:twfname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "upassword",
          "package": "MFlow",
          "signature": "String",
          "source": "src/MFlow.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "upassword",
          "package": "MFlow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:upassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MFlow",
          "name": "userName",
          "package": "MFlow",
          "signature": "String",
          "source": "src/MFlow.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "MFlow",
          "module": "MFlow",
          "name": "userName",
          "package": "MFlow",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MFlow/docs/MFlow.html#v:userName"
      }
    }
  ]
]