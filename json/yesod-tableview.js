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
        "word": "yesod-tableview"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLittle form for selecting the number of entries to show.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.TableView.NumEntriesForm",
          "name": "NumEntriesForm",
          "package": "yesod-tableview",
          "source": "src/Yesod-TableView-NumEntriesForm.html",
          "type": "module"
        },
        "index": {
          "description": "Little form for selecting the number of entries to show",
          "hierarchy": "Yesod TableView NumEntriesForm",
          "module": "Yesod.TableView.NumEntriesForm",
          "name": "NumEntriesForm",
          "package": "yesod-tableview",
          "partial": "Num Entries Form",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView-NumEntriesForm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the number of entries form with the given prompt, options,\n initial value and route function.  If POST data is present, redirects\n to the given route with the specified limit, otherwise just returns\n the form widget.\n\u003c/p\u003e",
          "module": "Yesod.TableView.NumEntriesForm",
          "name": "runNumEntriesForm",
          "package": "yesod-tableview",
          "signature": "Bool -\u003e String -\u003e [Int] -\u003e Int -\u003e (Int -\u003e Route s) -\u003e GHandler sub s (GWidget sub s ())",
          "source": "src/Yesod-TableView-NumEntriesForm.html#runNumEntriesForm",
          "type": "function"
        },
        "index": {
          "description": "Run the number of entries form with the given prompt options initial value and route function If POST data is present redirects to the given route with the specified limit otherwise just returns the form widget",
          "hierarchy": "Yesod TableView NumEntriesForm",
          "module": "Yesod.TableView.NumEntriesForm",
          "name": "runNumEntriesForm",
          "normalized": "Bool-\u003eString-\u003e[Int]-\u003eInt-\u003e(Int-\u003eRoute a)-\u003eGHandler b a(GWidget b a())",
          "package": "yesod-tableview",
          "partial": "Num Entries Form",
          "signature": "Bool-\u003eString-\u003e[Int]-\u003eInt-\u003e(Int-\u003eRoute s)-\u003eGHandler sub s(GWidget sub s())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView-NumEntriesForm.html#v:runNumEntriesForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass for datatypes displayable in a table view as widgets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.TableView.Widget",
          "name": "Widget",
          "package": "yesod-tableview",
          "source": "src/Yesod-TableView-Widget.html",
          "type": "module"
        },
        "index": {
          "description": "Class for datatypes displayable in table view as widgets",
          "hierarchy": "Yesod TableView Widget",
          "module": "Yesod.TableView.Widget",
          "name": "Widget",
          "package": "yesod-tableview",
          "partial": "Widget",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView-Widget.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.TableView.Widget",
          "name": "GTableHandler",
          "package": "yesod-tableview",
          "source": "src/Yesod-TableView-Widget.html#GTableHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod TableView Widget",
          "module": "Yesod.TableView.Widget",
          "name": "GTableHandler",
          "package": "yesod-tableview",
          "partial": "GTable Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView-Widget.html#t:GTableHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.TableView.Widget",
          "name": "GTableWidget",
          "package": "yesod-tableview",
          "source": "src/Yesod-TableView-Widget.html#GTableWidget",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod TableView Widget",
          "module": "Yesod.TableView.Widget",
          "name": "GTableWidget",
          "package": "yesod-tableview",
          "partial": "GTable Widget",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView-Widget.html#t:GTableWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.TableView.Widget",
          "name": "TableHandler",
          "package": "yesod-tableview",
          "source": "src/Yesod-TableView-Widget.html#TableHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod TableView Widget",
          "module": "Yesod.TableView.Widget",
          "name": "TableHandler",
          "package": "yesod-tableview",
          "partial": "Table Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView-Widget.html#t:TableHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class defines how types will be rendered in the table view.\n\u003c/p\u003e",
          "module": "Yesod.TableView.Widget",
          "name": "TableViewWidget",
          "package": "yesod-tableview",
          "source": "src/Yesod-TableView-Widget.html#TableViewWidget",
          "type": "class"
        },
        "index": {
          "description": "This class defines how types will be rendered in the table view",
          "hierarchy": "Yesod TableView Widget",
          "module": "Yesod.TableView.Widget",
          "name": "TableViewWidget",
          "package": "yesod-tableview",
          "partial": "Table View Widget",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView-Widget.html#t:TableViewWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.TableView.Widget",
          "name": "TableWidget",
          "package": "yesod-tableview",
          "source": "src/Yesod-TableView-Widget.html#TableWidget",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod TableView Widget",
          "module": "Yesod.TableView.Widget",
          "name": "TableWidget",
          "package": "yesod-tableview",
          "partial": "Table Widget",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView-Widget.html#t:TableWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable header (wrapped in a \u003ccode\u003ethead\u003c/code\u003e element).  This function\n will be called once per table.\n\u003c/p\u003e",
          "module": "Yesod.TableView.Widget",
          "name": "tableHeader",
          "package": "yesod-tableview",
          "signature": "val -\u003e TableWidget val ()",
          "source": "src/Yesod-TableView-Widget.html#tableHeader",
          "type": "method"
        },
        "index": {
          "description": "Table header wrapped in thead element This function will be called once per table",
          "hierarchy": "Yesod TableView Widget",
          "module": "Yesod.TableView.Widget",
          "name": "tableHeader",
          "normalized": "a-\u003eTableWidget a()",
          "package": "yesod-tableview",
          "partial": "Header",
          "signature": "val-\u003eTableWidget val()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView-Widget.html#v:tableHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable row.  This function will be called once for each entry in\n the table.  All rows will be rendered inside of a \u003ccode\u003etbody\u003c/code\u003e\n element.\n\u003c/p\u003e",
          "module": "Yesod.TableView.Widget",
          "name": "tableRecord",
          "package": "yesod-tableview",
          "signature": "Int -\u003e Key val -\u003e val -\u003e TableWidget val ()",
          "source": "src/Yesod-TableView-Widget.html#tableRecord",
          "type": "method"
        },
        "index": {
          "description": "Table row This function will be called once for each entry in the table All rows will be rendered inside of tbody element",
          "hierarchy": "Yesod TableView Widget",
          "module": "Yesod.TableView.Widget",
          "name": "tableRecord",
          "normalized": "Int-\u003eKey a-\u003ea-\u003eTableWidget a()",
          "package": "yesod-tableview",
          "partial": "Record",
          "signature": "Int-\u003eKey val-\u003eval-\u003eTableWidget val()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView-Widget.html#v:tableRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTable-like view for tabular data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.TableView",
          "name": "TableView",
          "package": "yesod-tableview",
          "source": "src/Yesod-TableView.html",
          "type": "module"
        },
        "index": {
          "description": "Table-like view for tabular data",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "TableView",
          "package": "yesod-tableview",
          "partial": "Table View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable view settings.  Defaults are given in parentheses.\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "TableView",
          "package": "yesod-tableview",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "data"
        },
        "index": {
          "description": "Table view settings Defaults are given in parentheses",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "TableView",
          "package": "yesod-tableview",
          "partial": "Table View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#t:TableView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.TableView",
          "name": "TableView",
          "package": "yesod-tableview",
          "signature": "TableView",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "TableView",
          "package": "yesod-tableview",
          "partial": "Table View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:TableView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault values for most fields.  The following fields will be left\n undefined:  \u003ccode\u003e\u003ca\u003etableRoute\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etableCurrentLimit\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003etableCurrentOffset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "defTableView",
          "package": "yesod-tableview",
          "signature": "TableView val",
          "source": "src/Yesod-TableView.html#defTableView",
          "type": "function"
        },
        "index": {
          "description": "Default values for most fields The following fields will be left undefined tableRoute tableCurrentLimit and tableCurrentOffset",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "defTableView",
          "package": "yesod-tableview",
          "partial": "Table View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:defTableView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple smart constructor for common table view configurations.\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "makeTableView",
          "package": "yesod-tableview",
          "signature": "[Filter val] -\u003e [Order val] -\u003e Int -\u003e Int -\u003e (Int -\u003e Int -\u003e Route (TableSite val)) -\u003e TableView val",
          "source": "src/Yesod-TableView.html#makeTableView",
          "type": "function"
        },
        "index": {
          "description": "Simple smart constructor for common table view configurations",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "makeTableView",
          "normalized": "[Filter a]-\u003e[Order a]-\u003eInt-\u003eInt-\u003e(Int-\u003eInt-\u003eRoute(TableSite a))-\u003eTableView a",
          "package": "yesod-tableview",
          "partial": "Table View",
          "signature": "[Filter val]-\u003e[Order val]-\u003eInt-\u003eInt-\u003e(Int-\u003eInt-\u003eRoute(TableSite val))-\u003eTableView val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:makeTableView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent pager limit.\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableCurrentLimit",
          "package": "yesod-tableview",
          "signature": "Int",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "description": "Current pager limit",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableCurrentLimit",
          "package": "yesod-tableview",
          "partial": "Current Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableCurrentLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent offset.\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableCurrentOffset",
          "package": "yesod-tableview",
          "signature": "Int",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "description": "Current offset",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableCurrentOffset",
          "package": "yesod-tableview",
          "partial": "Current Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableCurrentOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable filter.\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableFilter",
          "package": "yesod-tableview",
          "signature": "[Filter val]",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "description": "Table filter",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableFilter",
          "normalized": "[Filter a]",
          "package": "yesod-tableview",
          "partial": "Filter",
          "signature": "[Filter val]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTML table id.\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableId",
          "package": "yesod-tableview",
          "signature": "Maybe String",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "description": "HTML table id",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableId",
          "package": "yesod-tableview",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrompt in limit form.\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableLimitPrompt",
          "package": "yesod-tableview",
          "signature": "String",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "description": "Prompt in limit form",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableLimitPrompt",
          "package": "yesod-tableview",
          "partial": "Limit Prompt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableLimitPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelectable limits (\u003ccode\u003e[10, 20, 50, 100]\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableLimits",
          "package": "yesod-tableview",
          "signature": "[Int]",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "description": "Selectable limits",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableLimits",
          "normalized": "[Int]",
          "package": "yesod-tableview",
          "partial": "Limits",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum pager limit (\u003ccode\u003eJust 100\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableMaxLimit",
          "package": "yesod-tableview",
          "signature": "Maybe Int",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "description": "Maximum pager limit Just",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableMaxLimit",
          "package": "yesod-tableview",
          "partial": "Max Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableMaxLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum pager limit (\u003ccode\u003eJust 10\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableMinLimit",
          "package": "yesod-tableview",
          "signature": "Maybe Int",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "description": "Minimum pager limit Just",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableMinLimit",
          "package": "yesod-tableview",
          "partial": "Min Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableMinLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable sorting order.\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableOrder",
          "package": "yesod-tableview",
          "signature": "[Order val]",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "description": "Table sorting order",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableOrder",
          "normalized": "[Order a]",
          "package": "yesod-tableview",
          "partial": "Order",
          "signature": "[Order val]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable route.\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableRoute",
          "package": "yesod-tableview",
          "signature": "Int -\u003e Int -\u003e Route (TableSite val)",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "description": "Table route",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableRoute",
          "normalized": "Int-\u003eInt-\u003eRoute(TableSite a)",
          "package": "yesod-tableview",
          "partial": "Route",
          "signature": "Int-\u003eInt-\u003eRoute(TableSite val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow table header?\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableShowHead",
          "package": "yesod-tableview",
          "signature": "Bool",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "description": "Show table header",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableShowHead",
          "package": "yesod-tableview",
          "partial": "Show Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableShowHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd CSS styles?\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableStyled",
          "package": "yesod-tableview",
          "signature": "Bool",
          "source": "src/Yesod-TableView.html#TableView",
          "type": "function"
        },
        "index": {
          "description": "Add CSS styles",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableStyled",
          "package": "yesod-tableview",
          "partial": "Styled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableStyled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a table view widget from the given configuration.\n\u003c/p\u003e",
          "module": "Yesod.TableView",
          "name": "tableView",
          "package": "yesod-tableview",
          "signature": "TableView val -\u003e TableHandler val (TableWidget val ())",
          "source": "src/Yesod-TableView.html#tableView",
          "type": "function"
        },
        "index": {
          "description": "Generate table view widget from the given configuration",
          "hierarchy": "Yesod TableView",
          "module": "Yesod.TableView",
          "name": "tableView",
          "normalized": "TableView a-\u003eTableHandler a(TableWidget a())",
          "package": "yesod-tableview",
          "partial": "View",
          "signature": "TableView val-\u003eTableHandler val(TableWidget val())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-tableview/docs/Yesod-TableView.html#v:tableView"
      }
    }
  ]
]