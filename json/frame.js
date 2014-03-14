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
        "word": "frame"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule to define a configuration to be provided when launching framework\n      applications\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frame.Config",
          "name": "Config",
          "package": "frame",
          "source": "src/Frame-Config.html",
          "type": "module"
        },
        "index": {
          "description": "Module to define configuration to be provided when launching framework applications",
          "hierarchy": "Frame Config",
          "module": "Frame.Config",
          "name": "Config",
          "package": "frame",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Config",
          "name": "Config",
          "package": "frame",
          "source": "src/Frame-Config.html#Config",
          "type": "data"
        },
        "index": {
          "hierarchy": "Frame Config",
          "module": "Frame.Config",
          "name": "Config",
          "package": "frame",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Config.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Config",
          "name": "FrameConfig",
          "package": "frame",
          "source": "src/Frame-Config.html#FrameConfig",
          "type": "class"
        },
        "index": {
          "hierarchy": "Frame Config",
          "module": "Frame.Config",
          "name": "FrameConfig",
          "package": "frame",
          "partial": "Frame Config",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Config.html#t:FrameConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Config",
          "name": "Config",
          "package": "frame",
          "signature": "Config",
          "source": "src/Frame-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame Config",
          "module": "Frame.Config",
          "name": "Config",
          "package": "frame",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Config.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a function of the current environment. Parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The selector function to apply to the environment.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee an example in \u003ca\u003eControl.Monad.Reader\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Frame.Config",
          "name": "asks",
          "package": "frame",
          "signature": "(r -\u003e a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Retrieves function of the current environment Parameters The selector function to apply to the environment See an example in Control.Monad.Reader",
          "hierarchy": "Frame Config",
          "module": "Frame.Config",
          "name": "asks",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "frame",
          "signature": "(r-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Config.html#v:asks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStylesheets to attach to the view\n\u003c/p\u003e",
          "module": "Frame.Config",
          "name": "css",
          "package": "frame",
          "signature": "[String]",
          "source": "src/Frame-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Stylesheets to attach to the view",
          "hierarchy": "Frame Config",
          "module": "Frame.Config",
          "name": "css",
          "normalized": "[String]",
          "package": "frame",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Config.html#v:css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe database info\n\u003c/p\u003e",
          "module": "Frame.Config",
          "name": "database",
          "package": "frame",
          "signature": "DBInfo",
          "source": "src/Frame-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "The database info",
          "hierarchy": "Frame Config",
          "module": "Frame.Config",
          "name": "database",
          "package": "frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Config.html#v:database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name for the database\n\u003c/p\u003e",
          "module": "Frame.Config",
          "name": "dbName",
          "package": "frame",
          "signature": "String",
          "source": "src/Frame-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "The name for the database",
          "hierarchy": "Frame Config",
          "module": "Frame.Config",
          "name": "dbName",
          "package": "frame",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Config.html#v:dbName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ODBC URL for the database\n\u003c/p\u003e",
          "module": "Frame.Config",
          "name": "dbURL",
          "package": "frame",
          "signature": "String",
          "source": "src/Frame-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "The ODBC URL for the database",
          "hierarchy": "Frame Config",
          "module": "Frame.Config",
          "name": "dbURL",
          "package": "frame",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Config.html#v:dbURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession ID\n\u003c/p\u003e",
          "module": "Frame.Config",
          "name": "sessionId",
          "package": "frame",
          "signature": "String",
          "source": "src/Frame-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Session ID",
          "hierarchy": "Frame Config",
          "module": "Frame.Config",
          "name": "sessionId",
          "package": "frame",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Config.html#v:sessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile system path to sessions\n\u003c/p\u003e",
          "module": "Frame.Config",
          "name": "sessionPath",
          "package": "frame",
          "signature": "String",
          "source": "src/Frame-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "File system path to sessions",
          "hierarchy": "Frame Config",
          "module": "Frame.Config",
          "name": "sessionPath",
          "package": "frame",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Config.html#v:sessionPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Data",
          "name": "Data",
          "package": "frame",
          "source": "src/Frame-Data.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Frame Data",
          "module": "Frame.Data",
          "name": "Data",
          "package": "frame",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection of views which can be streamed to the client by the server\n\u003c/p\u003e",
          "module": "Frame.Data",
          "name": "Data",
          "package": "frame",
          "source": "src/Frame-Data.html#Data",
          "type": "data"
        },
        "index": {
          "description": "collection of views which can be streamed to the client by the server",
          "hierarchy": "Frame Data",
          "module": "Frame.Data",
          "name": "Data",
          "package": "frame",
          "partial": "Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Data.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile not found, 404 HTTP response\n\u003c/p\u003e",
          "module": "Frame.Data",
          "name": "Error404",
          "package": "frame",
          "signature": "Error404",
          "source": "src/Frame-Data.html#Data",
          "type": "function"
        },
        "index": {
          "description": "File not found HTTP response",
          "hierarchy": "Frame Data",
          "module": "Frame.Data",
          "name": "Error404",
          "package": "frame",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Data.html#v:Error404"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file\n\u003c/p\u003e",
          "module": "Frame.Data",
          "name": "File",
          "package": "frame",
          "signature": "File ByteString",
          "source": "src/Frame-Data.html#Data",
          "type": "function"
        },
        "index": {
          "description": "file",
          "hierarchy": "Frame Data",
          "module": "Frame.Data",
          "name": "File",
          "package": "frame",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Data.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirection\n\u003c/p\u003e",
          "module": "Frame.Data",
          "name": "Redirect",
          "package": "frame",
          "signature": "Redirect URL",
          "source": "src/Frame-Data.html#Data",
          "type": "function"
        },
        "index": {
          "description": "Redirection",
          "hierarchy": "Frame Data",
          "module": "Frame.Data",
          "name": "Redirect",
          "package": "frame",
          "partial": "Redirect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Data.html#v:Redirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA full view\n\u003c/p\u003e",
          "module": "Frame.Data",
          "name": "View",
          "package": "frame",
          "signature": "View GUI",
          "source": "src/Frame-Data.html#Data",
          "type": "function"
        },
        "index": {
          "description": "full view",
          "hierarchy": "Frame Data",
          "module": "Frame.Data",
          "name": "View",
          "package": "frame",
          "partial": "View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Data.html#v:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA partial view\n\u003c/p\u003e",
          "module": "Frame.Data",
          "name": "ViewPart",
          "package": "frame",
          "signature": "ViewPart [Container]",
          "source": "src/Frame-Data.html#Data",
          "type": "function"
        },
        "index": {
          "description": "partial view",
          "hierarchy": "Frame Data",
          "module": "Frame.Data",
          "name": "ViewPart",
          "normalized": "ViewPart[Container]",
          "package": "frame",
          "partial": "View Part",
          "signature": "ViewPart[Container]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Data.html#v:ViewPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA subset of the GUI required to build a useful view\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frame.GUI",
          "name": "GUI",
          "package": "frame",
          "source": "src/Frame-GUI.html",
          "type": "module"
        },
        "index": {
          "description": "subset of the GUI required to build useful view",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "GUI",
          "package": "frame",
          "partial": "GUI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.GUI",
          "name": "Class",
          "package": "frame",
          "source": "src/Frame-GUI.html#Class",
          "type": "type"
        },
        "index": {
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Class",
          "package": "frame",
          "partial": "Class",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#t:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.GUI",
          "name": "Composable",
          "package": "frame",
          "source": "src/Frame-GUI.html#Composable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Composable",
          "package": "frame",
          "partial": "Composable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#t:Composable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains various 'block level' elements\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Container",
          "package": "frame",
          "source": "src/Frame-GUI.html#Container",
          "type": "data"
        },
        "index": {
          "description": "Contains various block level elements",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Container",
          "package": "frame",
          "partial": "Container",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#t:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.GUI",
          "name": "Element",
          "package": "frame",
          "source": "src/Frame-GUI.html#Element",
          "type": "data"
        },
        "index": {
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Element",
          "package": "frame",
          "partial": "Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.GUI",
          "name": "Element'",
          "package": "frame",
          "source": "src/Frame-GUI.html#Element%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Element'",
          "package": "frame",
          "partial": "Element'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#t:Element-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.GUI",
          "name": "FormElement",
          "package": "frame",
          "source": "src/Frame-GUI.html#FormElement",
          "type": "data"
        },
        "index": {
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "FormElement",
          "package": "frame",
          "partial": "Form Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#t:FormElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm values are just wrapped types\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "FormValue",
          "package": "frame",
          "source": "src/Frame-GUI.html#FormValue",
          "type": "type"
        },
        "index": {
          "description": "Form values are just wrapped types",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "FormValue",
          "package": "frame",
          "partial": "Form Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#t:FormValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic GUI whose various instances define how it should be output (e.g. Show outputs HTML).\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "GUI",
          "package": "frame",
          "source": "src/Frame-GUI.html#GUI",
          "type": "data"
        },
        "index": {
          "description": "generic GUI whose various instances define how it should be output e.g Show outputs HTML",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "GUI",
          "package": "frame",
          "partial": "GUI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#t:GUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA label\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Label",
          "package": "frame",
          "source": "src/Frame-GUI.html#Label",
          "type": "type"
        },
        "index": {
          "description": "label",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Label",
          "package": "frame",
          "partial": "Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA URL\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "URL",
          "package": "frame",
          "source": "src/Frame-GUI.html#URL",
          "type": "type"
        },
        "index": {
          "description": "URL",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "URL",
          "package": "frame",
          "partial": "URL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#t:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.GUI",
          "name": "(+\u003e)",
          "package": "frame",
          "signature": "Container -\u003e a -\u003e a",
          "source": "src/Frame-GUI.html#%2B%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "(+\u003e) +\u003e",
          "normalized": "Container-\u003ea-\u003ea",
          "package": "frame",
          "signature": "Container-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:-43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.GUI",
          "name": "(\u003c+)",
          "package": "frame",
          "signature": "a -\u003e Container -\u003e a",
          "source": "src/Frame-GUI.html#%3C%2B",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "(\u003c+) \u003c+",
          "normalized": "a-\u003eContainer-\u003ea",
          "package": "frame",
          "signature": "a-\u003eContainer-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:-60--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine break\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Break",
          "package": "frame",
          "signature": "Break",
          "source": "src/Frame-GUI.html#Element",
          "type": "function"
        },
        "index": {
          "description": "Line break",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Break",
          "package": "frame",
          "partial": "Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmit button\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Button",
          "package": "frame",
          "signature": "Button FieldName FormValue",
          "source": "src/Frame-GUI.html#FormElement",
          "type": "function"
        },
        "index": {
          "description": "Submit button",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Button",
          "package": "frame",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial textual button\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "ButtonLink",
          "package": "frame",
          "signature": "ButtonLink Label URL",
          "source": "src/Frame-GUI.html#FormElement",
          "type": "function"
        },
        "index": {
          "description": "Special textual button",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "ButtonLink",
          "package": "frame",
          "partial": "Button Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:ButtonLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Code",
          "package": "frame",
          "signature": "Code String",
          "source": "src/Frame-GUI.html#Container",
          "type": "function"
        },
        "index": {
          "description": "Code",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Code",
          "package": "frame",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlain element\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Element",
          "package": "frame",
          "signature": "Element Element'",
          "source": "src/Frame-GUI.html#Element",
          "type": "function"
        },
        "index": {
          "description": "Plain element",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Element",
          "package": "frame",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement wrapped in a link\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Emphasis",
          "package": "frame",
          "signature": "Emphasis [Element]",
          "source": "src/Frame-GUI.html#Element",
          "type": "function"
        },
        "index": {
          "description": "Element wrapped in link",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Emphasis",
          "normalized": "Emphasis[Element]",
          "package": "frame",
          "partial": "Emphasis",
          "signature": "Emphasis[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Emphasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.GUI",
          "name": "Empty",
          "package": "frame",
          "signature": "Empty",
          "source": "src/Frame-GUI.html#Container",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Empty",
          "package": "frame",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError pane\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Error",
          "package": "frame",
          "signature": "Error [Container]",
          "source": "src/Frame-GUI.html#Container",
          "type": "function"
        },
        "index": {
          "description": "Error pane",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Error",
          "normalized": "Error[Container]",
          "package": "frame",
          "partial": "Error",
          "signature": "Error[Container]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA form\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Form",
          "package": "frame",
          "signature": "Form [FormElement] [Class]",
          "source": "src/Frame-GUI.html#Container",
          "type": "function"
        },
        "index": {
          "description": "form",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Form",
          "normalized": "Form[FormElement][Class]",
          "package": "frame",
          "partial": "Form",
          "signature": "Form[FormElement][Class]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor grouping elements\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "FormGroup",
          "package": "frame",
          "signature": "FormGroup [FormElement] Label",
          "source": "src/Frame-GUI.html#FormElement",
          "type": "function"
        },
        "index": {
          "description": "For grouping elements",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "FormGroup",
          "normalized": "FormGroup[FormElement]Label",
          "package": "frame",
          "partial": "Form Group",
          "signature": "FormGroup[FormElement]Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:FormGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA frame with a title, some style and a set of containers\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Frame",
          "package": "frame",
          "signature": "Frame String [URL] [Container]",
          "source": "src/Frame-GUI.html#GUI",
          "type": "function"
        },
        "index": {
          "description": "frame with title some style and set of containers",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Frame",
          "normalized": "Frame String[URL][Container]",
          "package": "frame",
          "partial": "Frame",
          "signature": "Frame String[URL][Container]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader (int is size)\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Header",
          "package": "frame",
          "signature": "Header Int [Element]",
          "source": "src/Frame-GUI.html#Container",
          "type": "function"
        },
        "index": {
          "description": "Header int is size",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Header",
          "normalized": "Header Int[Element]",
          "package": "frame",
          "partial": "Header",
          "signature": "Header Int[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHidden field\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "HiddenField",
          "package": "frame",
          "signature": "HiddenField FieldName FormValue",
          "source": "src/Frame-GUI.html#FormElement",
          "type": "function"
        },
        "index": {
          "description": "Hidden field",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "HiddenField",
          "package": "frame",
          "partial": "Hidden Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:HiddenField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage element\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Image",
          "package": "frame",
          "signature": "Image URL String",
          "source": "src/Frame-GUI.html#Element%27",
          "type": "function"
        },
        "index": {
          "description": "Image element",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Image",
          "package": "frame",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.GUI",
          "name": "Line",
          "package": "frame",
          "signature": "Line",
          "source": "src/Frame-GUI.html#Container",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Line",
          "package": "frame",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement wrapped in a link\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Link",
          "package": "frame",
          "signature": "Link URL Element'",
          "source": "src/Frame-GUI.html#Element",
          "type": "function"
        },
        "index": {
          "description": "Element wrapped in link",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Link",
          "package": "frame",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists contain list items\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "List",
          "package": "frame",
          "signature": "List [[Container]] [Class]",
          "source": "src/Frame-GUI.html#Container",
          "type": "function"
        },
        "index": {
          "description": "Lists contain list items",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "List",
          "normalized": "List[[Container]][Class]",
          "package": "frame",
          "partial": "List",
          "signature": "List[[Container]][Class]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists contain list items\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "NumList",
          "package": "frame",
          "signature": "NumList [[Container]] [Class]",
          "source": "src/Frame-GUI.html#Container",
          "type": "function"
        },
        "index": {
          "description": "Lists contain list items",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "NumList",
          "normalized": "NumList[[Container]][Class]",
          "package": "frame",
          "partial": "Num List",
          "signature": "NumList[[Container]][Class]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:NumList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePanel matches up with a div when output as HTML\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Panel",
          "package": "frame",
          "signature": "Panel [Container] [Class]",
          "source": "src/Frame-GUI.html#Container",
          "type": "function"
        },
        "index": {
          "description": "Panel matches up with div when output as HTML",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Panel",
          "normalized": "Panel[Container][Class]",
          "package": "frame",
          "partial": "Panel",
          "signature": "Panel[Container][Class]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Panel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParagraphs can only only contain elements\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Paragraph",
          "package": "frame",
          "signature": "Paragraph [Element] [Class]",
          "source": "src/Frame-GUI.html#Container",
          "type": "function"
        },
        "index": {
          "description": "Paragraphs can only only contain elements",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Paragraph",
          "normalized": "Paragraph[Element][Class]",
          "package": "frame",
          "partial": "Paragraph",
          "signature": "Paragraph[Element][Class]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Paragraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Quote",
          "package": "frame",
          "signature": "Quote [Container]",
          "source": "src/Frame-GUI.html#Container",
          "type": "function"
        },
        "index": {
          "description": "Quote",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Quote",
          "normalized": "Quote[Container]",
          "package": "frame",
          "partial": "Quote",
          "signature": "Quote[Container]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement wrapped in a link\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Strong",
          "package": "frame",
          "signature": "Strong [Element]",
          "source": "src/Frame-GUI.html#Element",
          "type": "function"
        },
        "index": {
          "description": "Element wrapped in link",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Strong",
          "normalized": "Strong[Element]",
          "package": "frame",
          "partial": "Strong",
          "signature": "Strong[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Strong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTextual element\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "Text",
          "package": "frame",
          "signature": "Text String",
          "source": "src/Frame-GUI.html#Element%27",
          "type": "function"
        },
        "index": {
          "description": "Textual element",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "Text",
          "package": "frame",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLarger text box\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "TextArea",
          "package": "frame",
          "signature": "TextArea FieldName Label FormValue (Maybe Container)",
          "source": "src/Frame-GUI.html#FormElement",
          "type": "function"
        },
        "index": {
          "description": "Larger text box",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "TextArea",
          "package": "frame",
          "partial": "Text Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:TextArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard text box\n\u003c/p\u003e",
          "module": "Frame.GUI",
          "name": "TextField",
          "package": "frame",
          "signature": "TextField FieldName Label FormValue (Maybe Int) (Maybe Container)",
          "source": "src/Frame-GUI.html#FormElement",
          "type": "function"
        },
        "index": {
          "description": "Standard text box",
          "hierarchy": "Frame GUI",
          "module": "Frame.GUI",
          "name": "TextField",
          "package": "frame",
          "partial": "Text Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-GUI.html#v:TextField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigh level model helpers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frame.Model",
          "name": "Model",
          "package": "frame",
          "source": "src/Frame-Model.html",
          "type": "module"
        },
        "index": {
          "description": "High level model helpers",
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "Model",
          "package": "frame",
          "partial": "Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Model",
          "name": "FrameIO",
          "package": "frame",
          "source": "src/Frame-Model.html#FrameIO",
          "type": "class"
        },
        "index": {
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "FrameIO",
          "package": "frame",
          "partial": "Frame IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#t:FrameIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Model",
          "name": "FrameModel",
          "package": "frame",
          "source": "src/Frame-Model.html#FrameModel",
          "type": "class"
        },
        "index": {
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "FrameModel",
          "package": "frame",
          "partial": "Frame Model",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#t:FrameModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for a stringed representation fo a table and attribute\n\u003c/p\u003e",
          "module": "[\"Frame.Model\",\"Frame.View\",\"Frame\"]",
          "name": "(-.-)",
          "package": "frame",
          "signature": "Table r-\u003e Attr f a-\u003e String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:-45-.-45-\",\"http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:-45-.-45-\",\"http://hackage.haskell.org/package/frame/docs/Frame.html#v:-45-.-45-\"]"
        },
        "index": {
          "description": "Convenience function for stringed representation fo table and attribute",
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "(-.-) -.-",
          "normalized": "Table a-\u003eAttr b c-\u003eString",
          "package": "frame",
          "signature": "Table r-\u003eAttr f a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:-45-.-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Model",
          "name": "field",
          "package": "frame",
          "signature": "DBInfo -\u003e FieldName -\u003e a -\u003e (FieldName, WrapperType)",
          "source": "src/Frame-Model.html#field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "field",
          "normalized": "DBInfo-\u003eFieldName-\u003ea-\u003e(FieldName,WrapperType)",
          "package": "frame",
          "signature": "DBInfo-\u003eFieldName-\u003ea-\u003e(FieldName,WrapperType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for creating a qualified attribute name\n\u003c/p\u003e",
          "module": "Frame.Model",
          "name": "fieldName",
          "package": "frame",
          "signature": "String-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for creating qualified attribute name",
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "fieldName",
          "normalized": "String-\u003eString-\u003eString",
          "package": "frame",
          "partial": "Name",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:fieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Model",
          "name": "liftIO",
          "package": "frame",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "frame",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the fields updated by some model action and merge them in to the state\n\u003c/p\u003e",
          "module": "Frame.Model",
          "name": "merge",
          "package": "frame",
          "signature": "m (Maybe Fields) -\u003e m (Maybe Fields)",
          "source": "src/Frame-Model.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Take the fields updated by some model action and merge them in to the state",
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "merge",
          "normalized": "a(Maybe Fields)-\u003ea(Maybe Fields)",
          "package": "frame",
          "signature": "m(Maybe Fields)-\u003em(Maybe Fields)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould a form have been posted and all of the fields validate, run some\n      computation which maps fields to a model (with an empty return type)\n\u003c/p\u003e",
          "module": "Frame.Model",
          "name": "posted",
          "package": "frame",
          "signature": "(Fields -\u003e m a)-\u003e m Bool",
          "type": "function"
        },
        "index": {
          "description": "Should form have been posted and all of the fields validate run some computation which maps fields to model with an empty return type",
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "posted",
          "normalized": "(Fields-\u003ea b)-\u003ea Bool",
          "package": "frame",
          "signature": "(Fields-\u003em a)-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:posted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a database function against the DB\n\u003c/p\u003e",
          "module": "Frame.Model",
          "name": "run",
          "package": "frame",
          "signature": "(Database -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Execute database function against the DB",
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "run",
          "normalized": "(Database-\u003ea b)-\u003ea b",
          "package": "frame",
          "signature": "(Database-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the name of a table.\n\u003c/p\u003e",
          "module": "Frame.Model",
          "name": "tableName",
          "package": "frame",
          "signature": "Table t -\u003e TableName",
          "type": "function"
        },
        "index": {
          "description": "Get the name of table",
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "tableName",
          "normalized": "Table a-\u003eTableName",
          "package": "frame",
          "partial": "Name",
          "signature": "Table t-\u003eTableName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:tableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Model",
          "name": "wrapBoolField",
          "package": "frame",
          "signature": "FieldName -\u003e Bool -\u003e (FieldName, WrapperType)",
          "source": "src/Frame-Model.html#wrapBoolField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "wrapBoolField",
          "normalized": "FieldName-\u003eBool-\u003e(FieldName,WrapperType)",
          "package": "frame",
          "partial": "Bool Field",
          "signature": "FieldName-\u003eBool-\u003e(FieldName,WrapperType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:wrapBoolField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Model",
          "name": "wrapIntField",
          "package": "frame",
          "signature": "FieldName -\u003e Int -\u003e (FieldName, WrapperType)",
          "source": "src/Frame-Model.html#wrapIntField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "wrapIntField",
          "normalized": "FieldName-\u003eInt-\u003e(FieldName,WrapperType)",
          "package": "frame",
          "partial": "Int Field",
          "signature": "FieldName-\u003eInt-\u003e(FieldName,WrapperType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:wrapIntField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Model",
          "name": "wrapMaybeIntField",
          "package": "frame",
          "signature": "FieldName -\u003e Maybe Int -\u003e (FieldName, WrapperType)",
          "source": "src/Frame-Model.html#wrapMaybeIntField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "wrapMaybeIntField",
          "normalized": "FieldName-\u003eMaybe Int-\u003e(FieldName,WrapperType)",
          "package": "frame",
          "partial": "Maybe Int Field",
          "signature": "FieldName-\u003eMaybe Int-\u003e(FieldName,WrapperType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:wrapMaybeIntField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Model",
          "name": "wrapStringField",
          "package": "frame",
          "signature": "FieldName -\u003e BoundedList Char n -\u003e (FieldName, WrapperType)",
          "source": "src/Frame-Model.html#wrapStringField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame Model",
          "module": "Frame.Model",
          "name": "wrapStringField",
          "normalized": "FieldName-\u003eBoundedList Char a-\u003e(FieldName,WrapperType)",
          "package": "frame",
          "partial": "String Field",
          "signature": "FieldName-\u003eBoundedList Char n-\u003e(FieldName,WrapperType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Model.html#v:wrapStringField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions and functions for building a router\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frame.Router",
          "name": "Router",
          "package": "frame",
          "source": "src/Frame-Router.html",
          "type": "module"
        },
        "index": {
          "description": "Definitions and functions for building router",
          "hierarchy": "Frame Router",
          "module": "Frame.Router",
          "name": "Router",
          "package": "frame",
          "partial": "Router",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Router.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Router",
          "name": "FrameRouter",
          "package": "frame",
          "source": "src/Frame-Router.html#FrameRouter",
          "type": "class"
        },
        "index": {
          "hierarchy": "Frame Router",
          "module": "Frame.Router",
          "name": "FrameRouter",
          "package": "frame",
          "partial": "Frame Router",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Router.html#t:FrameRouter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA router maps from a path (list of URL parts) to some \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Frame.Router",
          "name": "Router",
          "package": "frame",
          "source": "src/Frame-Router.html#Router",
          "type": "type"
        },
        "index": {
          "description": "router maps from path list of URL parts to some Data",
          "hierarchy": "Frame Router",
          "module": "Frame.Router",
          "name": "Router",
          "package": "frame",
          "partial": "Router",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Router.html#t:Router"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efileFolder\u003c/a\u003e\u003c/code\u003e function maps a URL to a filesystem folder\n\u003c/p\u003e",
          "module": "Frame.Router",
          "name": "fileFolder",
          "package": "frame",
          "signature": "String-\u003e [String]-\u003e m Data",
          "type": "function"
        },
        "index": {
          "description": "The fileFolder function maps URL to filesystem folder",
          "hierarchy": "Frame Router",
          "module": "Frame.Router",
          "name": "fileFolder",
          "normalized": "String-\u003e[String]-\u003ea Data",
          "package": "frame",
          "partial": "Folder",
          "signature": "String-\u003e[String]-\u003em Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Router.html#v:fileFolder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a given router and validators against request information from the\n      server\n\u003c/p\u003e",
          "module": "Frame.Router",
          "name": "startRouter",
          "package": "frame",
          "signature": "Router-\u003e Config-\u003e Validators-\u003e [(FieldName, String)]-\u003e String-\u003e String-\u003e Bool-\u003e IO Data",
          "type": "function"
        },
        "index": {
          "description": "Executes given router and validators against request information from the server",
          "hierarchy": "Frame Router",
          "module": "Frame.Router",
          "name": "startRouter",
          "normalized": "Router-\u003eConfig-\u003eValidators-\u003e[(FieldName,String)]-\u003eString-\u003eString-\u003eBool-\u003eIO Data",
          "package": "frame",
          "partial": "Router",
          "signature": "Router-\u003eConfig-\u003eValidators-\u003e[(FieldName,String)]-\u003eString-\u003eString-\u003eBool-\u003eIO Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Router.html#v:startRouter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Server",
          "name": "Server",
          "package": "frame",
          "source": "src/Frame-Server.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Frame Server",
          "module": "Frame.Server",
          "name": "Server",
          "package": "frame",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart Frame using FastCGI\n\u003c/p\u003e",
          "module": "Frame.Server",
          "name": "server",
          "package": "frame",
          "signature": "Router-\u003e Config-\u003e Validators-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Start Frame using FastCGI",
          "hierarchy": "Frame Server",
          "module": "Frame.Server",
          "name": "server",
          "normalized": "Router-\u003eConfig-\u003eValidators-\u003eIO()",
          "package": "frame",
          "signature": "Router-\u003eConfig-\u003eValidators-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Server.html#v:server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a test server\n\u003c/p\u003e",
          "module": "Frame.Server",
          "name": "testServer",
          "package": "frame",
          "signature": "Router-\u003e Config-\u003e Validators-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Start test server",
          "hierarchy": "Frame Server",
          "module": "Frame.Server",
          "name": "testServer",
          "normalized": "Router-\u003eConfig-\u003eValidators-\u003eIO()",
          "package": "frame",
          "partial": "Server",
          "signature": "Router-\u003eConfig-\u003eValidators-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Server.html#v:testServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines functions for state that can persist accross server requests\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frame.Session",
          "name": "Session",
          "package": "frame",
          "source": "src/Frame-Session.html",
          "type": "module"
        },
        "index": {
          "description": "Defines functions for state that can persist accross server requests",
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "Session",
          "package": "frame",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a particular field to the session from the fields in the state\n\u003c/p\u003e",
          "module": "Frame.Session",
          "name": "copyFromSession",
          "package": "frame",
          "signature": "FieldName-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Copy particular field to the session from the fields in the state",
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "copyFromSession",
          "normalized": "FieldName-\u003ea()",
          "package": "frame",
          "partial": "From Session",
          "signature": "FieldName-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#v:copyFromSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a particular field to the session from the fields in the state\n\u003c/p\u003e",
          "module": "Frame.Session",
          "name": "copyToSession",
          "package": "frame",
          "signature": "FieldName-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Copy particular field to the session from the fields in the state",
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "copyToSession",
          "normalized": "FieldName-\u003ea()",
          "package": "frame",
          "partial": "To Session",
          "signature": "FieldName-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#v:copyToSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes a specific field in the session by the given field name\n\u003c/p\u003e",
          "module": "Frame.Session",
          "name": "delSessionField",
          "package": "frame",
          "signature": "FieldName-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Deletes specific field in the session by the given field name",
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "delSessionField",
          "normalized": "FieldName-\u003ea()",
          "package": "frame",
          "partial": "Session Field",
          "signature": "FieldName-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#v:delSessionField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes a session from persistent storage\n\u003c/p\u003e",
          "module": "Frame.Session",
          "name": "deleteSession",
          "package": "frame",
          "signature": "m ()",
          "source": "src/Frame-Session.html#deleteSession",
          "type": "function"
        },
        "index": {
          "description": "Deletes session from persistent storage",
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "deleteSession",
          "normalized": "a()",
          "package": "frame",
          "partial": "Session",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#v:deleteSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a router, flashes the current message to screen before deleting it\n\u003c/p\u003e",
          "module": "Frame.Session",
          "name": "flash",
          "package": "frame",
          "signature": "m Data-\u003e m Data",
          "type": "function"
        },
        "index": {
          "description": "Given router flashes the current message to screen before deleting it",
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "flash",
          "normalized": "a Data-\u003ea Data",
          "package": "frame",
          "signature": "m Data-\u003em Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#v:flash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a unique session ID \n\u003c/p\u003e",
          "module": "Frame.Session",
          "name": "genSessionId",
          "package": "frame",
          "signature": "IO String",
          "source": "src/Frame-Session.html#genSessionId",
          "type": "function"
        },
        "index": {
          "description": "Generate unique session ID",
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "genSessionId",
          "package": "frame",
          "partial": "Session Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#v:genSessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Session",
          "name": "getDelFlash",
          "package": "frame",
          "signature": "m (Maybe String)",
          "source": "src/Frame-Session.html#getDelFlash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "getDelFlash",
          "package": "frame",
          "partial": "Del Flash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#v:getDelFlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a field from the session by FieldName\n\u003c/p\u003e",
          "module": "Frame.Session",
          "name": "getSessionField",
          "package": "frame",
          "signature": "FieldName-\u003e m (Maybe WrapperType)",
          "type": "function"
        },
        "index": {
          "description": "Get field from the session by FieldName",
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "getSessionField",
          "normalized": "FieldName-\u003ea(Maybe WrapperType)",
          "package": "frame",
          "partial": "Session Field",
          "signature": "FieldName-\u003em(Maybe WrapperType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#v:getSessionField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaves a session to persistent storage\n\u003c/p\u003e",
          "module": "Frame.Session",
          "name": "saveSession",
          "package": "frame",
          "signature": "m ()",
          "source": "src/Frame-Session.html#saveSession",
          "type": "function"
        },
        "index": {
          "description": "Saves session to persistent storage",
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "saveSession",
          "normalized": "a()",
          "package": "frame",
          "partial": "Session",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#v:saveSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecovers a session from persistent storage\n\u003c/p\u003e",
          "module": "Frame.Session",
          "name": "startSession",
          "package": "frame",
          "signature": "m Fields",
          "source": "src/Frame-Session.html#startSession",
          "type": "function"
        },
        "index": {
          "description": "Recovers session from persistent storage",
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "startSession",
          "package": "frame",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#v:startSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverwrite a message to be flashed to the screen (persisting across requests)\n\u003c/p\u003e",
          "module": "Frame.Session",
          "name": "updateFlash",
          "package": "frame",
          "signature": "String-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Overwrite message to be flashed to the screen persisting across requests",
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "updateFlash",
          "normalized": "String-\u003ea()",
          "package": "frame",
          "partial": "Flash",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#v:updateFlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function when running a router, starting and saving a function before\n      and after the router is run\n\u003c/p\u003e",
          "module": "Frame.Session",
          "name": "withSession",
          "package": "frame",
          "signature": "([String] -\u003e m a)-\u003e [String] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "convenience function when running router starting and saving function before and after the router is run",
          "hierarchy": "Frame Session",
          "module": "Frame.Session",
          "name": "withSession",
          "normalized": "([String]-\u003ea b)-\u003e[String]-\u003ea b",
          "package": "frame",
          "partial": "Session",
          "signature": "([String]-\u003em a)-\u003e[String]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Session.html#v:withSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe state contains mutable environmental variables such as posted form fields,\n      field validators and the session\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frame.State",
          "name": "State",
          "package": "frame",
          "source": "src/Frame-State.html",
          "type": "module"
        },
        "index": {
          "description": "The state contains mutable environmental variables such as posted form fields field validators and the session",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "State",
          "package": "frame",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.State",
          "name": "FrameReader",
          "package": "frame",
          "source": "src/Frame-State.html#FrameReader",
          "type": "class"
        },
        "index": {
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "FrameReader",
          "package": "frame",
          "partial": "Frame Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#t:FrameReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.State",
          "name": "FrameState",
          "package": "frame",
          "source": "src/Frame-State.html#FrameState",
          "type": "class"
        },
        "index": {
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "FrameState",
          "package": "frame",
          "partial": "Frame State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#t:FrameState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state record\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "Vars",
          "package": "frame",
          "source": "src/Frame-State.html#Vars",
          "type": "data"
        },
        "index": {
          "description": "The state record",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "Vars",
          "package": "frame",
          "partial": "Vars",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#t:Vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.State",
          "name": "Vars",
          "package": "frame",
          "signature": "Vars",
          "source": "src/Frame-State.html#Vars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "Vars",
          "package": "frame",
          "partial": "Vars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:Vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this an AJAX request?\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "ajax",
          "package": "frame",
          "signature": "Bool",
          "source": "src/Frame-State.html#Vars",
          "type": "function"
        },
        "index": {
          "description": "Is this an AJAX request",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "ajax",
          "package": "frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:ajax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes a specific field in the state by the given field name\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "delField",
          "package": "frame",
          "signature": "FieldName-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Deletes specific field in the state by the given field name",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "delField",
          "normalized": "FieldName-\u003ea()",
          "package": "frame",
          "partial": "Field",
          "signature": "FieldName-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:delField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosted fields\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "fields",
          "package": "frame",
          "signature": "Fields",
          "source": "src/Frame-State.html#Vars",
          "type": "function"
        },
        "index": {
          "description": "Posted fields",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "fields",
          "package": "frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides get access to the state, mirroring Control.Monad.State.get\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "get",
          "package": "frame",
          "signature": "m s",
          "source": "src/Frame-State.html#get",
          "type": "function"
        },
        "index": {
          "description": "Provides get access to the state mirroring Control.Monad.State.get",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "get",
          "package": "frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up a specific field in the state by the given field name\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "getField",
          "package": "frame",
          "signature": "FieldName-\u003e m (Maybe WrapperType)",
          "type": "function"
        },
        "index": {
          "description": "Looks up specific field in the state by the given field name",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "getField",
          "normalized": "FieldName-\u003ea(Maybe WrapperType)",
          "package": "frame",
          "partial": "Field",
          "signature": "FieldName-\u003em(Maybe WrapperType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:getField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up validators functions for a particular field\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "getValidator",
          "package": "frame",
          "signature": "FieldName-\u003e m (Maybe [WrapperType -\u003e Maybe String])",
          "type": "function"
        },
        "index": {
          "description": "Look up validators functions for particular field",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "getValidator",
          "normalized": "FieldName-\u003ea(Maybe[WrapperType-\u003eMaybe String])",
          "package": "frame",
          "partial": "Validator",
          "signature": "FieldName-\u003em(Maybe[WrapperType-\u003eMaybe String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:getValidator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a specific component from the state, using the supplied projection function\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "gets",
          "package": "frame",
          "signature": "(s -\u003e a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Gets specific component from the state using the supplied projection function",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "gets",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "frame",
          "signature": "(s-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges the given fields with the existing state (existing state fields are favoured)\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "mergeFields",
          "package": "frame",
          "signature": "Maybe Fields-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Merges the given fields with the existing state existing state fields are favoured",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "mergeFields",
          "normalized": "Maybe Fields-\u003ea()",
          "package": "frame",
          "partial": "Fields",
          "signature": "Maybe Fields-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:mergeFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHas a form been posted?\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "post",
          "package": "frame",
          "signature": "Bool",
          "source": "src/Frame-State.html#Vars",
          "type": "function"
        },
        "index": {
          "description": "Has form been posted",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "post",
          "package": "frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides get access to the state, mirroring Control.Monad.State.put\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "put",
          "package": "frame",
          "signature": "s -\u003e m ()",
          "source": "src/Frame-State.html#put",
          "type": "function"
        },
        "index": {
          "description": "Provides get access to the state mirroring Control.Monad.State.put",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "frame",
          "signature": "s-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociate a value with a FieldName in the state\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "putField",
          "package": "frame",
          "signature": "FieldName-\u003e a-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Associate value with FieldName in the state",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "putField",
          "normalized": "FieldName-\u003ea-\u003eb()",
          "package": "frame",
          "partial": "Field",
          "signature": "FieldName-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:putField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces the fields in the state\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "putFields",
          "package": "frame",
          "signature": "Fields-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Replaces the fields in the state",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "putFields",
          "normalized": "Fields-\u003ea()",
          "package": "frame",
          "partial": "Fields",
          "signature": "Fields-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:putFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociate a set of validator functions with a FieldName in the state\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "putValidator",
          "package": "frame",
          "signature": "FieldName-\u003e [WrapperType -\u003e Maybe String]-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Associate set of validator functions with FieldName in the state",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "putValidator",
          "normalized": "FieldName-\u003e[WrapperType-\u003eMaybe String]-\u003ea()",
          "package": "frame",
          "partial": "Validator",
          "signature": "FieldName-\u003e[WrapperType-\u003eMaybe String]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:putValidator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces the Validators in the state\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "putValidators",
          "package": "frame",
          "signature": "Validators-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Replaces the Validators in the state",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "putValidators",
          "normalized": "Validators-\u003ea()",
          "package": "frame",
          "partial": "Validators",
          "signature": "Validators-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:putValidators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession fields\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "session",
          "package": "frame",
          "signature": "Fields",
          "source": "src/Frame-State.html#Vars",
          "type": "function"
        },
        "index": {
          "description": "Session fields",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "session",
          "package": "frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.State",
          "name": "setPost",
          "package": "frame",
          "signature": "Bool -\u003e m ()",
          "source": "src/Frame-State.html#setPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "setPost",
          "normalized": "Bool-\u003ea()",
          "package": "frame",
          "partial": "Post",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:setPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default empty start state\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "startState",
          "package": "frame",
          "signature": "Vars",
          "source": "src/Frame-State.html#startState",
          "type": "function"
        },
        "index": {
          "description": "default empty start state",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "startState",
          "package": "frame",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:startState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField validation functions\n\u003c/p\u003e",
          "module": "Frame.State",
          "name": "validators",
          "package": "frame",
          "signature": "Validators",
          "source": "src/Frame-State.html#Vars",
          "type": "function"
        },
        "index": {
          "description": "Field validation functions",
          "hierarchy": "Frame State",
          "module": "Frame.State",
          "name": "validators",
          "package": "frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-State.html#v:validators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines a homogenous collection of field types to interface typeless\n      HTTP and HTML with the application and with HaskellDB\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frame.Types",
          "name": "Types",
          "package": "frame",
          "source": "src/Frame-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Defines homogenous collection of field types to interface typeless HTTP and HTML with the application and with HaskellDB",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "Types",
          "package": "frame",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel for a specific field\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "FieldName",
          "package": "frame",
          "source": "src/Frame-Types.html#FieldName",
          "type": "type"
        },
        "index": {
          "description": "Label for specific field",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "FieldName",
          "package": "frame",
          "partial": "Field Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#t:FieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollection of heterogenous fields associated by \u003ccode\u003e\u003ca\u003eFieldName\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "Fields",
          "package": "frame",
          "source": "src/Frame-Types.html#Fields",
          "type": "type"
        },
        "index": {
          "description": "Collection of heterogenous fields associated by FieldName",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "Fields",
          "package": "frame",
          "partial": "Fields",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#t:Fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Types",
          "name": "Wrappable",
          "package": "frame",
          "source": "src/Frame-Types.html#Wrappable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "Wrappable",
          "package": "frame",
          "partial": "Wrappable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#t:Wrappable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeterogeneous type wrapper\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "WrapperType",
          "package": "frame",
          "source": "src/Frame-Types.html#WrapperType",
          "type": "data"
        },
        "index": {
          "description": "Heterogeneous type wrapper",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "WrapperType",
          "package": "frame",
          "partial": "Wrapper Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#t:WrapperType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBool wrapper\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "WrapBool",
          "package": "frame",
          "signature": "WrapBool Bool",
          "source": "src/Frame-Types.html#WrapperType",
          "type": "function"
        },
        "index": {
          "description": "Bool wrapper",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "WrapBool",
          "package": "frame",
          "partial": "Wrap Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:WrapBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty type\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "WrapEmpty",
          "package": "frame",
          "signature": "WrapEmpty FieldType",
          "source": "src/Frame-Types.html#WrapperType",
          "type": "function"
        },
        "index": {
          "description": "Empty type",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "WrapEmpty",
          "package": "frame",
          "partial": "Wrap Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:WrapEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType error (specific case of error)\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "WrapError",
          "package": "frame",
          "signature": "WrapError FieldType String",
          "source": "src/Frame-Types.html#WrapperType",
          "type": "function"
        },
        "index": {
          "description": "Type error specific case of error",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "WrapError",
          "package": "frame",
          "partial": "Wrap Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:WrapError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInt wrappr\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "WrapInt",
          "package": "frame",
          "signature": "WrapInt Int",
          "source": "src/Frame-Types.html#WrapperType",
          "type": "function"
        },
        "index": {
          "description": "Int wrappr",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "WrapInt",
          "package": "frame",
          "partial": "Wrap Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:WrapInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString wrapper\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "WrapString",
          "package": "frame",
          "signature": "WrapString (Maybe Int) String",
          "source": "src/Frame-Types.html#WrapperType",
          "type": "function"
        },
        "index": {
          "description": "String wrapper",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "WrapString",
          "package": "frame",
          "partial": "Wrap String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:WrapString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial version of \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e that also wraps fields as it goes\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "fromList'",
          "package": "frame",
          "signature": "DBInfo-\u003e [(FieldName, String)]-\u003e Map FieldName WrapperType",
          "type": "function"
        },
        "index": {
          "description": "Special version of fromList that also wraps fields as it goes",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "fromList'",
          "normalized": "DBInfo-\u003e[(FieldName,String)]-\u003eMap FieldName WrapperType",
          "package": "frame",
          "partial": "List'",
          "signature": "DBInfo-\u003e[(FieldName,String)]-\u003eMap FieldName WrapperType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:fromList-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Types",
          "name": "isMandatory",
          "package": "frame",
          "signature": "DBInfo -\u003e FieldName -\u003e Maybe Bool",
          "source": "src/Frame-Types.html#isMandatory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "isMandatory",
          "normalized": "DBInfo-\u003eFieldName-\u003eMaybe Bool",
          "package": "frame",
          "partial": "Mandatory",
          "signature": "DBInfo-\u003eFieldName-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:isMandatory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA potential \u003ccode\u003e\u003ca\u003eWrapperType\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eWrapEmpty\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "maybeUnwrap",
          "package": "frame",
          "signature": "Maybe WrapperType-\u003e WrapperType",
          "type": "function"
        },
        "index": {
          "description": "potential WrapperType is WrapEmpty if Nothing",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "maybeUnwrap",
          "normalized": "Maybe WrapperType-\u003eWrapperType",
          "package": "frame",
          "partial": "Unwrap",
          "signature": "Maybe WrapperType-\u003eWrapperType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:maybeUnwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePurge non mandatory empty fields \n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "purge",
          "package": "frame",
          "signature": "DBInfo-\u003e Fields-\u003e Fields",
          "type": "function"
        },
        "index": {
          "description": "Purge non mandatory empty fields",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "purge",
          "normalized": "DBInfo-\u003eFields-\u003eFields",
          "package": "frame",
          "signature": "DBInfo-\u003eFields-\u003eFields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:purge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCasts the \u003ccode\u003e\u003ca\u003eFieldName\u003c/a\u003e\u003c/code\u003e in fields to string\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "showField",
          "package": "frame",
          "signature": "FieldName-\u003e Fields-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Casts the FieldName in fields to string",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "showField",
          "normalized": "FieldName-\u003eFields-\u003eString",
          "package": "frame",
          "partial": "Field",
          "signature": "FieldName-\u003eFields-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:showField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to unwrap a \u003ccode\u003e\u003ca\u003eWrapperType\u003c/a\u003e\u003c/code\u003e to its original type\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "unwrap",
          "package": "frame",
          "signature": "unwrap",
          "source": "src/Frame-Types.html#unwrap",
          "type": "method"
        },
        "index": {
          "description": "Function to unwrap WrapperType to its original type",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "unwrap",
          "package": "frame",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.Types",
          "name": "unwrapField",
          "package": "frame",
          "signature": "FieldName -\u003e Fields -\u003e Maybe a",
          "source": "src/Frame-Types.html#unwrapField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "unwrapField",
          "normalized": "FieldName-\u003eFields-\u003eMaybe a",
          "package": "frame",
          "partial": "Field",
          "signature": "FieldName-\u003eFields-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:unwrapField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to wrap a value associated with a given \u003ccode\u003e\u003ca\u003eFieldName\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "wrap",
          "package": "frame",
          "signature": "wrap",
          "source": "src/Frame-Types.html#wrap",
          "type": "method"
        },
        "index": {
          "description": "Function to wrap value associated with given FieldName",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "wrap",
          "package": "frame",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "wrapBool",
          "package": "frame",
          "signature": "String -\u003e WrapperType",
          "source": "src/Frame-Types.html#wrapBool",
          "type": "function"
        },
        "index": {
          "description": "Wrap String representation of Bool",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "wrapBool",
          "normalized": "String-\u003eWrapperType",
          "package": "frame",
          "partial": "Bool",
          "signature": "String-\u003eWrapperType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:wrapBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an error message if there has been a wrapping error\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "wrapError",
          "package": "frame",
          "signature": "WrapperType-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Returns an error message if there has been wrapping error",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "wrapError",
          "normalized": "WrapperType-\u003eString",
          "package": "frame",
          "partial": "Error",
          "signature": "WrapperType-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:wrapError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Frame.Types",
          "name": "wrapInt",
          "package": "frame",
          "signature": "String -\u003e WrapperType",
          "source": "src/Frame-Types.html#wrapInt",
          "type": "function"
        },
        "index": {
          "description": "Wrap String representation of an Int",
          "hierarchy": "Frame Types",
          "module": "Frame.Types",
          "name": "wrapInt",
          "normalized": "String-\u003eWrapperType",
          "package": "frame",
          "partial": "Int",
          "signature": "String-\u003eWrapperType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Types.html#v:wrapInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon helper functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frame.Utilities",
          "name": "Utilities",
          "package": "frame",
          "source": "src/Frame-Utilities.html",
          "type": "module"
        },
        "index": {
          "description": "Common helper functions",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "Utilities",
          "package": "frame",
          "partial": "Utilities",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCaptures failure\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "(?)",
          "package": "frame",
          "signature": "Bool-\u003e String-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Captures failure",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "(?) ?",
          "normalized": "Bool-\u003eString-\u003eMaybe String",
          "package": "frame",
          "signature": "Bool-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as (?), always returns a string ('''' on success)\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "(??)",
          "package": "frame",
          "signature": "Bool -\u003e String -\u003e String",
          "source": "src/Frame-Utilities.html#%3F%3F",
          "type": "function"
        },
        "index": {
          "description": "Same as always returns string on success",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "(??) ??",
          "normalized": "Bool-\u003eString-\u003eString",
          "package": "frame",
          "signature": "Bool-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:-63--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e == True\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "allNothing",
          "package": "frame",
          "signature": "[Maybe a] -\u003e Bool",
          "source": "src/Frame-Utilities.html#allNothing",
          "type": "function"
        },
        "index": {
          "description": "List of Nothing True",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "allNothing",
          "normalized": "[Maybe a]-\u003eBool",
          "package": "frame",
          "partial": "Nothing",
          "signature": "[Maybe a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:allNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction application within \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "appMaybe",
          "package": "frame",
          "signature": "(a -\u003e b) -\u003e Maybe a -\u003e Maybe b",
          "source": "src/Frame-Utilities.html#appMaybe",
          "type": "function"
        },
        "index": {
          "description": "Function application within Maybe",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "appMaybe",
          "normalized": "(a-\u003eb)-\u003eMaybe a-\u003eMaybe b",
          "package": "frame",
          "partial": "Maybe",
          "signature": "(a-\u003eb)-\u003eMaybe a-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:appMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e except splitting against arbitrary \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "explode",
          "package": "frame",
          "signature": "Char-\u003e String-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "Similar to words except splitting against arbitrary Char",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "explode",
          "normalized": "Char-\u003eString-\u003e[String]",
          "package": "frame",
          "signature": "Char-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:explode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplode for field names\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "explodeFieldName",
          "package": "frame",
          "signature": "String-\u003e (Int, [String])",
          "type": "function"
        },
        "index": {
          "description": "Explode for field names",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "explodeFieldName",
          "normalized": "String-\u003e(Int,[String])",
          "package": "frame",
          "partial": "Field Name",
          "signature": "String-\u003e(Int,[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:explodeFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplode for URLs\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "explodeURL",
          "package": "frame",
          "signature": "String -\u003e [String]",
          "source": "src/Frame-Utilities.html#explodeURL",
          "type": "function"
        },
        "index": {
          "description": "Explode for URLs",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "explodeURL",
          "normalized": "String-\u003e[String]",
          "package": "frame",
          "partial": "URL",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:explodeURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafe head\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "headMaybe",
          "package": "frame",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Frame-Utilities.html#headMaybe",
          "type": "function"
        },
        "index": {
          "description": "Safe head",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "headMaybe",
          "normalized": "[a]-\u003eMaybe a",
          "package": "frame",
          "partial": "Maybe",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:headMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e''hi there'' to ''Hi There''\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "humanise",
          "package": "frame",
          "signature": "String -\u003e String",
          "source": "src/Frame-Utilities.html#humanise",
          "type": "function"
        },
        "index": {
          "description": "hi there to Hi There",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "humanise",
          "normalized": "String-\u003eString",
          "package": "frame",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:humanise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e''camelCase'' to ''Camel Case''\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "humaniseCamel",
          "package": "frame",
          "signature": "String -\u003e String",
          "source": "src/Frame-Utilities.html#humaniseCamel",
          "type": "function"
        },
        "index": {
          "description": "camelCase to Camel Case",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "humaniseCamel",
          "normalized": "String-\u003eString",
          "package": "frame",
          "partial": "Camel",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:humaniseCamel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e[''a'', ''url''] to ''A Url''\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "humanisePath",
          "package": "frame",
          "signature": "[String] -\u003e String -\u003e String",
          "source": "src/Frame-Utilities.html#humanisePath",
          "type": "function"
        },
        "index": {
          "description": "url to Url",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "humanisePath",
          "normalized": "[String]-\u003eString-\u003eString",
          "package": "frame",
          "partial": "Path",
          "signature": "[String]-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:humanisePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e''/a/url'' to ''A Url''\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "humaniseUrl",
          "package": "frame",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Frame-Utilities.html#humaniseUrl",
          "type": "function"
        },
        "index": {
          "description": "url to Url",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "humaniseUrl",
          "normalized": "String-\u003eString-\u003eString",
          "package": "frame",
          "partial": "Url",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:humaniseUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpposite of explode\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "implode",
          "package": "frame",
          "signature": "Char -\u003e [String] -\u003e String",
          "source": "src/Frame-Utilities.html#implode",
          "type": "function"
        },
        "index": {
          "description": "Opposite of explode",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "implode",
          "normalized": "Char-\u003e[String]-\u003eString",
          "package": "frame",
          "signature": "Char-\u003e[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:implode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplode for URLs\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "implodeUrl",
          "package": "frame",
          "signature": "[String] -\u003e String",
          "source": "src/Frame-Utilities.html#implodeUrl",
          "type": "function"
        },
        "index": {
          "description": "Implode for URLs",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "implodeUrl",
          "normalized": "[String]-\u003eString",
          "package": "frame",
          "partial": "Url",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:implodeUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "maybeMaybe",
          "package": "frame",
          "signature": "Maybe (Maybe a) -\u003e Maybe a",
          "source": "src/Frame-Utilities.html#maybeMaybe",
          "type": "function"
        },
        "index": {
          "description": "Maybe Maybe Maybe",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "maybeMaybe",
          "normalized": "Maybe(Maybe a)-\u003eMaybe a",
          "package": "frame",
          "partial": "Maybe",
          "signature": "Maybe(Maybe a)-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:maybeMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic safe head\n\u003c/p\u003e",
          "module": "Frame.Utilities",
          "name": "pop",
          "package": "frame",
          "signature": "m [a] -\u003e m (Maybe a)",
          "source": "src/Frame-Utilities.html#pop",
          "type": "function"
        },
        "index": {
          "description": "Monadic safe head",
          "hierarchy": "Frame Utilities",
          "module": "Frame.Utilities",
          "name": "pop",
          "normalized": "a[b]-\u003ea(Maybe b)",
          "package": "frame",
          "signature": "m[a]-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Utilities.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for validation of fields\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frame.Validation",
          "name": "Validation",
          "package": "frame",
          "source": "src/Frame-Validation.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for validation of fields",
          "hierarchy": "Frame Validation",
          "module": "Frame.Validation",
          "name": "Validation",
          "package": "frame",
          "partial": "Validation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Validation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA validator is a map associating field names to a list of functions taking a\n      wrapped type to a potential (error) string\n\u003c/p\u003e",
          "module": "Frame.Validation",
          "name": "Validators",
          "package": "frame",
          "source": "src/Frame-Validation.html#Validators",
          "type": "type"
        },
        "index": {
          "description": "validator is map associating field names to list of functions taking wrapped type to potential error string",
          "hierarchy": "Frame Validation",
          "module": "Frame.Validation",
          "name": "Validators",
          "package": "frame",
          "partial": "Validators",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Validation.html#t:Validators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if all fields validate against a set of validators\n\u003c/p\u003e",
          "module": "Frame.Validation",
          "name": "allValidated",
          "package": "frame",
          "signature": "Validators -\u003e Fields -\u003e Bool",
          "source": "src/Frame-Validation.html#allValidated",
          "type": "function"
        },
        "index": {
          "description": "True if all fields validate against set of validators",
          "hierarchy": "Frame Validation",
          "module": "Frame.Validation",
          "name": "allValidated",
          "normalized": "Validators-\u003eFields-\u003eBool",
          "package": "frame",
          "partial": "Validated",
          "signature": "Validators-\u003eFields-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Validation.html#v:allValidated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMust be greater than a given number\n\u003c/p\u003e",
          "module": "Frame.Validation",
          "name": "greaterThan",
          "package": "frame",
          "signature": "Int-\u003e WrapperType-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Must be greater than given number",
          "hierarchy": "Frame Validation",
          "module": "Frame.Validation",
          "name": "greaterThan",
          "normalized": "Int-\u003eWrapperType-\u003eMaybe String",
          "package": "frame",
          "partial": "Than",
          "signature": "Int-\u003eWrapperType-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Validation.html#v:greaterThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCannot be empty\n\u003c/p\u003e",
          "module": "Frame.Validation",
          "name": "notEmpty",
          "package": "frame",
          "signature": "WrapperType-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Cannot be empty",
          "hierarchy": "Frame Validation",
          "module": "Frame.Validation",
          "name": "notEmpty",
          "normalized": "WrapperType-\u003eMaybe String",
          "package": "frame",
          "partial": "Empty",
          "signature": "WrapperType-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Validation.html#v:notEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMust be shorter than a given length\n\u003c/p\u003e",
          "module": "Frame.Validation",
          "name": "shorterThan",
          "package": "frame",
          "signature": "Int-\u003e WrapperType-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "Must be shorter than given length",
          "hierarchy": "Frame Validation",
          "module": "Frame.Validation",
          "name": "shorterThan",
          "normalized": "Int-\u003eWrapperType-\u003eMaybe String",
          "package": "frame",
          "partial": "Than",
          "signature": "Int-\u003eWrapperType-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Validation.html#v:shorterThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate a whole set of fields against a set of validators\n\u003c/p\u003e",
          "module": "Frame.Validation",
          "name": "validate",
          "package": "frame",
          "signature": "Validators -\u003e Fields -\u003e Map FieldName [Maybe String]",
          "source": "src/Frame-Validation.html#validate",
          "type": "function"
        },
        "index": {
          "description": "Validate whole set of fields against set of validators",
          "hierarchy": "Frame Validation",
          "module": "Frame.Validation",
          "name": "validate",
          "normalized": "Validators-\u003eFields-\u003eMap FieldName[Maybe String]",
          "package": "frame",
          "signature": "Validators-\u003eFields-\u003eMap FieldName[Maybe String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Validation.html#v:validate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate a particular field against a list of validators\n\u003c/p\u003e",
          "module": "Frame.Validation",
          "name": "validateField",
          "package": "frame",
          "signature": "[WrapperType -\u003e Maybe String] -\u003e WrapperType -\u003e [Maybe String]",
          "source": "src/Frame-Validation.html#validateField",
          "type": "function"
        },
        "index": {
          "description": "Validate particular field against list of validators",
          "hierarchy": "Frame Validation",
          "module": "Frame.Validation",
          "name": "validateField",
          "normalized": "[WrapperType-\u003eMaybe String]-\u003eWrapperType-\u003e[Maybe String]",
          "package": "frame",
          "partial": "Field",
          "signature": "[WrapperType-\u003eMaybe String]-\u003eWrapperType-\u003e[Maybe String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Validation.html#v:validateField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type level check to make sure a string is within the bounds defined\n\u003c/p\u003e",
          "module": "Frame.Validation",
          "name": "withinBounds",
          "package": "frame",
          "signature": "WrapperType-\u003e Maybe String",
          "type": "function"
        },
        "index": {
          "description": "type level check to make sure string is within the bounds defined",
          "hierarchy": "Frame Validation",
          "module": "Frame.Validation",
          "name": "withinBounds",
          "normalized": "WrapperType-\u003eMaybe String",
          "package": "frame",
          "partial": "Bounds",
          "signature": "WrapperType-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-Validation.html#v:withinBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigh level view helpers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frame.View",
          "name": "View",
          "package": "frame",
          "source": "src/Frame-View.html",
          "type": "module"
        },
        "index": {
          "description": "High level view helpers",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "View",
          "package": "frame",
          "partial": "View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame.View",
          "name": "FrameView",
          "package": "frame",
          "source": "src/Frame-View.html#FrameView",
          "type": "class"
        },
        "index": {
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "FrameView",
          "package": "frame",
          "partial": "Frame View",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#t:FrameView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for a cancel link\n\u003c/p\u003e",
          "module": "Frame.View",
          "name": "cancelLink",
          "package": "frame",
          "signature": "URL-\u003e FormElement",
          "type": "function"
        },
        "index": {
          "description": "Helper function for cancel link",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "cancelLink",
          "normalized": "URL-\u003eFormElement",
          "package": "frame",
          "partial": "Link",
          "signature": "URL-\u003eFormElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:cancelLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for a delete link\n\u003c/p\u003e",
          "module": "Frame.View",
          "name": "deleteLink",
          "package": "frame",
          "signature": "URL-\u003e FormElement",
          "type": "function"
        },
        "index": {
          "description": "Helper function for delete link",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "deleteLink",
          "normalized": "URL-\u003eFormElement",
          "package": "frame",
          "partial": "Link",
          "signature": "URL-\u003eFormElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:deleteLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for generating a potential error list\n\u003c/p\u003e",
          "module": "Frame.View",
          "name": "errorList",
          "package": "frame",
          "signature": "[String]-\u003e Maybe Container",
          "type": "function"
        },
        "index": {
          "description": "Helper function for generating potential error list",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "errorList",
          "normalized": "[String]-\u003eMaybe Container",
          "package": "frame",
          "partial": "List",
          "signature": "[String]-\u003eMaybe Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:errorList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to create a simple form with a single group\n\u003c/p\u003e",
          "module": "Frame.View",
          "name": "form",
          "package": "frame",
          "signature": "Label-\u003e [FormElement]-\u003e [String]-\u003e Container",
          "type": "function"
        },
        "index": {
          "description": "Helper function to create simple form with single group",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "form",
          "normalized": "Label-\u003e[FormElement]-\u003e[String]-\u003eContainer",
          "package": "frame",
          "signature": "Label-\u003e[FormElement]-\u003e[String]-\u003eContainer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for creating a form field\n\u003c/p\u003e",
          "module": "Frame.View",
          "name": "formField",
          "package": "frame",
          "signature": "FieldName-\u003e Label-\u003e FormValue-\u003e Maybe Int-\u003e [String]-\u003e Bool-\u003e FormElement",
          "type": "function"
        },
        "index": {
          "description": "Helper function for creating form field",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "formField",
          "normalized": "FieldName-\u003eLabel-\u003eFormValue-\u003eMaybe Int-\u003e[String]-\u003eBool-\u003eFormElement",
          "package": "frame",
          "partial": "Field",
          "signature": "FieldName-\u003eLabel-\u003eFormValue-\u003eMaybe Int-\u003e[String]-\u003eBool-\u003eFormElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:formField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a form based on a database description\n\u003c/p\u003e",
          "module": "Frame.View",
          "name": "formGen",
          "package": "frame",
          "signature": "Table r-\u003e [FormElement]-\u003e [String]-\u003e m Container",
          "type": "function"
        },
        "index": {
          "description": "Generates form based on database description",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "formGen",
          "normalized": "Table a-\u003e[FormElement]-\u003e[String]-\u003eb Container",
          "package": "frame",
          "partial": "Gen",
          "signature": "Table r-\u003e[FormElement]-\u003e[String]-\u003em Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:formGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a link with just a text element\n\u003c/p\u003e",
          "module": "Frame.View",
          "name": "link",
          "package": "frame",
          "signature": "URL-\u003e String-\u003e Element",
          "type": "function"
        },
        "index": {
          "description": "Creates link with just text element",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "link",
          "normalized": "URL-\u003eString-\u003eElement",
          "package": "frame",
          "signature": "URL-\u003eString-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract list generator\n\u003c/p\u003e",
          "module": "Frame.View",
          "name": "list",
          "package": "frame",
          "signature": "(a -\u003e Container)-\u003e [a]-\u003e [Class]-\u003e Container",
          "type": "function"
        },
        "index": {
          "description": "Abstract list generator",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "list",
          "normalized": "(a-\u003eContainer)-\u003e[a]-\u003e[Class]-\u003eContainer",
          "package": "frame",
          "signature": "(a-\u003eContainer)-\u003e[a]-\u003e[Class]-\u003eContainer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to create a single simple element paragraph\n\u003c/p\u003e",
          "module": "Frame.View",
          "name": "paragraph",
          "package": "frame",
          "signature": "Element-\u003e Container",
          "type": "function"
        },
        "index": {
          "description": "Helper function to create single simple element paragraph",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "paragraph",
          "normalized": "Element-\u003eContainer",
          "package": "frame",
          "signature": "Element-\u003eContainer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:paragraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for a submit button\n\u003c/p\u003e",
          "module": "Frame.View",
          "name": "submitButton",
          "package": "frame",
          "signature": "FormElement",
          "source": "src/Frame-View.html#submitButton",
          "type": "function"
        },
        "index": {
          "description": "Helper function for submit button",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "submitButton",
          "package": "frame",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:submitButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates element level text\n\u003c/p\u003e",
          "module": "Frame.View",
          "name": "text",
          "package": "frame",
          "signature": "String-\u003e Element",
          "type": "function"
        },
        "index": {
          "description": "Creates element level text",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "text",
          "normalized": "String-\u003eElement",
          "package": "frame",
          "signature": "String-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etitle\u003c/a\u003e\u003c/code\u003e function wraps a ViewPart in a View if not an Ajax request\n\u003c/p\u003e",
          "module": "Frame.View",
          "name": "title",
          "package": "frame",
          "signature": "String-\u003e m Data-\u003e m Data",
          "type": "function"
        },
        "index": {
          "description": "The title function wraps ViewPart in View if not an Ajax request",
          "hierarchy": "Frame View",
          "module": "Frame.View",
          "name": "title",
          "normalized": "String-\u003ea Data-\u003ea Data",
          "package": "frame",
          "signature": "String-\u003em Data-\u003em Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame-View.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frame",
          "name": "Frame",
          "package": "frame",
          "source": "src/Frame.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Frame",
          "module": "Frame",
          "name": "Frame",
          "package": "frame",
          "partial": "Frame",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/frame/docs/Frame.html#"
      }
    }
  ]
]