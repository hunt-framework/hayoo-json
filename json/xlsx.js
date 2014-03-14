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
        "word": "xlsx"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx.Parser",
          "name": "Parser",
          "package": "xlsx",
          "source": "src/Codec-Xlsx-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Xlsx Parser",
          "module": "Codec.Xlsx.Parser",
          "name": "Parser",
          "package": "xlsx",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet data from specified worksheet as conduit source.\n\u003c/p\u003e",
          "module": "Codec.Xlsx.Parser",
          "name": "cellSource",
          "package": "xlsx",
          "signature": "Xlsx -\u003e Int -\u003e [Text] -\u003e Source m [Cell]",
          "source": "src/Codec-Xlsx-Parser.html#cellSource",
          "type": "function"
        },
        "index": {
          "description": "Get data from specified worksheet as conduit source",
          "hierarchy": "Codec Xlsx Parser",
          "module": "Codec.Xlsx.Parser",
          "name": "cellSource",
          "normalized": "Xlsx-\u003eInt-\u003e[Text]-\u003eSource a[Cell]",
          "package": "xlsx",
          "partial": "Source",
          "signature": "Xlsx-\u003eInt-\u003e[Text]-\u003eSource m[Cell]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx-Parser.html#v:cellSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx.Parser",
          "name": "sheet",
          "package": "xlsx",
          "signature": "Xlsx -\u003e Int -\u003e m Worksheet",
          "source": "src/Codec-Xlsx-Parser.html#sheet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx Parser",
          "module": "Codec.Xlsx.Parser",
          "name": "sheet",
          "normalized": "Xlsx-\u003eInt-\u003ea Worksheet",
          "package": "xlsx",
          "signature": "Xlsx-\u003eInt-\u003em Worksheet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx-Parser.html#v:sheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all rows from specified worksheet.\n\u003c/p\u003e",
          "module": "Codec.Xlsx.Parser",
          "name": "sheetRowSource",
          "package": "xlsx",
          "signature": "Xlsx -\u003e Int -\u003e Source m MapRow",
          "source": "src/Codec-Xlsx-Parser.html#sheetRowSource",
          "type": "function"
        },
        "index": {
          "description": "Get all rows from specified worksheet",
          "hierarchy": "Codec Xlsx Parser",
          "module": "Codec.Xlsx.Parser",
          "name": "sheetRowSource",
          "normalized": "Xlsx-\u003eInt-\u003eSource a MapRow",
          "package": "xlsx",
          "partial": "Row Source",
          "signature": "Xlsx-\u003eInt-\u003eSource m MapRow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx-Parser.html#v:sheetRowSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead archive and preload \u003ccode\u003e\u003ca\u003eXlsx\u003c/a\u003e\u003c/code\u003e fields\n\u003c/p\u003e",
          "module": "Codec.Xlsx.Parser",
          "name": "xlsx",
          "package": "xlsx",
          "signature": "FilePath -\u003e IO Xlsx",
          "source": "src/Codec-Xlsx-Parser.html#xlsx",
          "type": "function"
        },
        "index": {
          "description": "Read archive and preload Xlsx fields",
          "hierarchy": "Codec Xlsx Parser",
          "module": "Codec.Xlsx.Parser",
          "name": "xlsx",
          "normalized": "FilePath-\u003eIO Xlsx",
          "package": "xlsx",
          "signature": "FilePath-\u003eIO Xlsx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx-Parser.html#v:xlsx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx.Writer",
          "name": "Writer",
          "package": "xlsx",
          "source": "src/Codec-Xlsx-Writer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Xlsx Writer",
          "module": "Codec.Xlsx.Writer",
          "name": "Writer",
          "package": "xlsx",
          "partial": "Writer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx-Writer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrites list of worksheets as xlsx file\n\u003c/p\u003e",
          "module": "Codec.Xlsx.Writer",
          "name": "writeXlsx",
          "package": "xlsx",
          "signature": "FilePath -\u003e [Worksheet] -\u003e IO ()",
          "source": "src/Codec-Xlsx-Writer.html#writeXlsx",
          "type": "function"
        },
        "index": {
          "description": "writes list of worksheets as xlsx file",
          "hierarchy": "Codec Xlsx Writer",
          "module": "Codec.Xlsx.Writer",
          "name": "writeXlsx",
          "normalized": "FilePath-\u003e[Worksheet]-\u003eIO()",
          "package": "xlsx",
          "partial": "Xlsx",
          "signature": "FilePath-\u003e[Worksheet]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx-Writer.html#v:writeXlsx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrites list of worksheets and their styling as xlsx file\n\u003c/p\u003e",
          "module": "Codec.Xlsx.Writer",
          "name": "writeXlsxStyles",
          "package": "xlsx",
          "signature": "FilePath -\u003e ByteString -\u003e [Worksheet] -\u003e IO ()",
          "source": "src/Codec-Xlsx-Writer.html#writeXlsxStyles",
          "type": "function"
        },
        "index": {
          "description": "writes list of worksheets and their styling as xlsx file",
          "hierarchy": "Codec Xlsx Writer",
          "module": "Codec.Xlsx.Writer",
          "name": "writeXlsxStyles",
          "normalized": "FilePath-\u003eByteString-\u003e[Worksheet]-\u003eIO()",
          "package": "xlsx",
          "partial": "Xlsx Styles",
          "signature": "FilePath-\u003eByteString-\u003e[Worksheet]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx-Writer.html#v:writeXlsxStyles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "Xlsx",
          "package": "xlsx",
          "source": "src/Codec-Xlsx.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "Xlsx",
          "package": "xlsx",
          "partial": "Xlsx",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "Cell",
          "package": "xlsx",
          "source": "src/Codec-Xlsx.html#Cell",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "Cell",
          "package": "xlsx",
          "partial": "Cell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#t:Cell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "CellData",
          "package": "xlsx",
          "source": "src/Codec-Xlsx.html#CellData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "CellData",
          "package": "xlsx",
          "partial": "Cell Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#t:CellData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "CellValue",
          "package": "xlsx",
          "source": "src/Codec-Xlsx.html#CellValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "CellValue",
          "package": "xlsx",
          "partial": "Cell Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#t:CellValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColumn range (from cwMin to cwMax) width\n\u003c/p\u003e",
          "module": "Codec.Xlsx",
          "name": "ColumnsWidth",
          "package": "xlsx",
          "source": "src/Codec-Xlsx.html#ColumnsWidth",
          "type": "data"
        },
        "index": {
          "description": "Column range from cwMin to cwMax width",
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "ColumnsWidth",
          "package": "xlsx",
          "partial": "Columns Width",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#t:ColumnsWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "RowHeights",
          "package": "xlsx",
          "source": "src/Codec-Xlsx.html#RowHeights",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "RowHeights",
          "package": "xlsx",
          "partial": "Row Heights",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#t:RowHeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "Styles",
          "package": "xlsx",
          "source": "src/Codec-Xlsx.html#Styles",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "Styles",
          "package": "xlsx",
          "partial": "Styles",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#t:Styles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "Worksheet",
          "package": "xlsx",
          "source": "src/Codec-Xlsx.html#Worksheet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "Worksheet",
          "package": "xlsx",
          "partial": "Worksheet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#t:Worksheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "WorksheetFile",
          "package": "xlsx",
          "source": "src/Codec-Xlsx.html#WorksheetFile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "WorksheetFile",
          "package": "xlsx",
          "partial": "Worksheet File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#t:WorksheetFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "Xlsx",
          "package": "xlsx",
          "source": "src/Codec-Xlsx.html#Xlsx",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "Xlsx",
          "package": "xlsx",
          "partial": "Xlsx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#t:Xlsx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "Cell",
          "package": "xlsx",
          "signature": "Cell",
          "source": "src/Codec-Xlsx.html#Cell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "Cell",
          "package": "xlsx",
          "partial": "Cell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:Cell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "CellData",
          "package": "xlsx",
          "signature": "CellData",
          "source": "src/Codec-Xlsx.html#CellData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "CellData",
          "package": "xlsx",
          "partial": "Cell Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:CellData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "CellDouble",
          "package": "xlsx",
          "signature": "CellDouble Double",
          "source": "src/Codec-Xlsx.html#CellValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "CellDouble",
          "package": "xlsx",
          "partial": "Cell Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:CellDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "CellLocalTime",
          "package": "xlsx",
          "signature": "CellLocalTime LocalTime",
          "source": "src/Codec-Xlsx.html#CellValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "CellLocalTime",
          "package": "xlsx",
          "partial": "Cell Local Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:CellLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "CellText",
          "package": "xlsx",
          "signature": "CellText Text",
          "source": "src/Codec-Xlsx.html#CellValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "CellText",
          "package": "xlsx",
          "partial": "Cell Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:CellText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "ColumnsWidth",
          "package": "xlsx",
          "signature": "ColumnsWidth",
          "source": "src/Codec-Xlsx.html#ColumnsWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "ColumnsWidth",
          "package": "xlsx",
          "partial": "Columns Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:ColumnsWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "Styles",
          "package": "xlsx",
          "signature": "Styles ByteString",
          "source": "src/Codec-Xlsx.html#Styles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "Styles",
          "package": "xlsx",
          "partial": "Styles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:Styles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "Worksheet",
          "package": "xlsx",
          "signature": "Worksheet",
          "source": "src/Codec-Xlsx.html#Worksheet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "Worksheet",
          "package": "xlsx",
          "partial": "Worksheet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:Worksheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "WorksheetFile",
          "package": "xlsx",
          "signature": "WorksheetFile",
          "source": "src/Codec-Xlsx.html#WorksheetFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "WorksheetFile",
          "package": "xlsx",
          "partial": "Worksheet File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:WorksheetFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "Xlsx",
          "package": "xlsx",
          "signature": "Xlsx",
          "source": "src/Codec-Xlsx.html#Xlsx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "Xlsx",
          "package": "xlsx",
          "partial": "Xlsx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:Xlsx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "cdStyle",
          "package": "xlsx",
          "signature": "Maybe Int",
          "source": "src/Codec-Xlsx.html#CellData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "cdStyle",
          "package": "xlsx",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:cdStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "cdValue",
          "package": "xlsx",
          "signature": "Maybe CellValue",
          "source": "src/Codec-Xlsx.html#CellData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "cdValue",
          "package": "xlsx",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:cdValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "cellData",
          "package": "xlsx",
          "signature": "CellData",
          "source": "src/Codec-Xlsx.html#Cell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "cellData",
          "package": "xlsx",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:cellData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "cellIx",
          "package": "xlsx",
          "signature": "(Text, Int)",
          "source": "src/Codec-Xlsx.html#Cell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "cellIx",
          "normalized": "(Text,Int)",
          "package": "xlsx",
          "partial": "Ix",
          "signature": "(Text,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:cellIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereverse to \u003ccode\u003e\u003ca\u003eint2col\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Codec.Xlsx",
          "name": "col2int",
          "package": "xlsx",
          "signature": "Text -\u003e Int",
          "source": "src/Codec-Xlsx.html#col2int",
          "type": "function"
        },
        "index": {
          "description": "reverse to int2col",
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "col2int",
          "normalized": "Text-\u003eInt",
          "package": "xlsx",
          "signature": "Text-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:col2int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "cwMax",
          "package": "xlsx",
          "signature": "Int",
          "source": "src/Codec-Xlsx.html#ColumnsWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "cwMax",
          "package": "xlsx",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:cwMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "cwMin",
          "package": "xlsx",
          "signature": "Int",
          "source": "src/Codec-Xlsx.html#ColumnsWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "cwMin",
          "package": "xlsx",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:cwMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "cwWidth",
          "package": "xlsx",
          "signature": "Double",
          "source": "src/Codec-Xlsx.html#ColumnsWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "cwWidth",
          "package": "xlsx",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:cwWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efold worksheet by row, then by column, so for region A1:B2 you'll get fold order like A1, A2, B1, B2\n\u003c/p\u003e",
          "module": "Codec.Xlsx",
          "name": "foldRows",
          "package": "xlsx",
          "signature": "(Int -\u003e Int -\u003e Maybe CellData -\u003e a -\u003e a) -\u003e a -\u003e Worksheet -\u003e a",
          "source": "src/Codec-Xlsx.html#foldRows",
          "type": "function"
        },
        "index": {
          "description": "fold worksheet by row then by column so for region A1 B2 you ll get fold order like A1 A2 B1 B2",
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "foldRows",
          "normalized": "(Int-\u003eInt-\u003eMaybe CellData-\u003ea-\u003ea)-\u003ea-\u003eWorksheet-\u003ea",
          "package": "xlsx",
          "partial": "Rows",
          "signature": "(Int-\u003eInt-\u003eMaybe CellData-\u003ea-\u003ea)-\u003ea-\u003eWorksheet-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:foldRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "fromList",
          "package": "xlsx",
          "signature": "Text -\u003e [ColumnsWidth] -\u003e RowHeights -\u003e [[Maybe CellData]] -\u003e Worksheet",
          "source": "src/Codec-Xlsx.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "fromList",
          "normalized": "Text-\u003e[ColumnsWidth]-\u003eRowHeights-\u003e[[Maybe CellData]]-\u003eWorksheet",
          "package": "xlsx",
          "partial": "List",
          "signature": "Text-\u003e[ColumnsWidth]-\u003eRowHeights-\u003e[[Maybe CellData]]-\u003eWorksheet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert column number (starting from 1) to its textual form (e.g. 3 -\u003e \u003ca\u003eC\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "Codec.Xlsx",
          "name": "int2col",
          "package": "xlsx",
          "signature": "Int -\u003e Text",
          "source": "src/Codec-Xlsx.html#int2col",
          "type": "function"
        },
        "index": {
          "description": "convert column number starting from to its textual form e.g",
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "int2col",
          "normalized": "Int-\u003eText",
          "package": "xlsx",
          "signature": "Int-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:int2col"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "toList",
          "package": "xlsx",
          "signature": "Worksheet -\u003e [[Maybe CellData]]",
          "source": "src/Codec-Xlsx.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "toList",
          "normalized": "Worksheet-\u003e[[Maybe CellData]]",
          "package": "xlsx",
          "partial": "List",
          "signature": "Worksheet-\u003e[[Maybe CellData]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "wfName",
          "package": "xlsx",
          "signature": "Text",
          "source": "src/Codec-Xlsx.html#WorksheetFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "wfName",
          "package": "xlsx",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:wfName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "wfPath",
          "package": "xlsx",
          "signature": "FilePath",
          "source": "src/Codec-Xlsx.html#WorksheetFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "wfPath",
          "package": "xlsx",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:wfPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edata mapped by (column, row) pairs\n\u003c/p\u003e",
          "module": "Codec.Xlsx",
          "name": "wsCells",
          "package": "xlsx",
          "signature": "Map (Int, Int) CellData",
          "source": "src/Codec-Xlsx.html#Worksheet",
          "type": "function"
        },
        "index": {
          "description": "data mapped by column row pairs",
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "wsCells",
          "normalized": "Map(Int,Int)CellData",
          "package": "xlsx",
          "partial": "Cells",
          "signature": "Map(Int,Int)CellData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:wsCells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecolumn widths\n\u003c/p\u003e",
          "module": "Codec.Xlsx",
          "name": "wsColumns",
          "package": "xlsx",
          "signature": "[ColumnsWidth]",
          "source": "src/Codec-Xlsx.html#Worksheet",
          "type": "function"
        },
        "index": {
          "description": "column widths",
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "wsColumns",
          "normalized": "[ColumnsWidth]",
          "package": "xlsx",
          "partial": "Columns",
          "signature": "[ColumnsWidth]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:wsColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum non-empty column number (1-based)\n\u003c/p\u003e",
          "module": "Codec.Xlsx",
          "name": "wsMaxX",
          "package": "xlsx",
          "signature": "Int",
          "source": "src/Codec-Xlsx.html#Worksheet",
          "type": "function"
        },
        "index": {
          "description": "maximum non-empty column number based",
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "wsMaxX",
          "package": "xlsx",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:wsMaxX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum non-empty row number (1-based)\n\u003c/p\u003e",
          "module": "Codec.Xlsx",
          "name": "wsMaxY",
          "package": "xlsx",
          "signature": "Int",
          "source": "src/Codec-Xlsx.html#Worksheet",
          "type": "function"
        },
        "index": {
          "description": "maximum non-empty row number based",
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "wsMaxY",
          "package": "xlsx",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:wsMaxY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eminimum non-empty column number (1-based)\n\u003c/p\u003e",
          "module": "Codec.Xlsx",
          "name": "wsMinX",
          "package": "xlsx",
          "signature": "Int",
          "source": "src/Codec-Xlsx.html#Worksheet",
          "type": "function"
        },
        "index": {
          "description": "minimum non-empty column number based",
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "wsMinX",
          "package": "xlsx",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:wsMinX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eminimum non-empty row number (1-based)\n\u003c/p\u003e",
          "module": "Codec.Xlsx",
          "name": "wsMinY",
          "package": "xlsx",
          "signature": "Int",
          "source": "src/Codec-Xlsx.html#Worksheet",
          "type": "function"
        },
        "index": {
          "description": "minimum non-empty row number based",
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "wsMinY",
          "package": "xlsx",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:wsMinY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eworksheet name\n\u003c/p\u003e",
          "module": "Codec.Xlsx",
          "name": "wsName",
          "package": "xlsx",
          "signature": "Text",
          "source": "src/Codec-Xlsx.html#Worksheet",
          "type": "function"
        },
        "index": {
          "description": "worksheet name",
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "wsName",
          "package": "xlsx",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:wsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecustom row height map\n\u003c/p\u003e",
          "module": "Codec.Xlsx",
          "name": "wsRowHeights",
          "package": "xlsx",
          "signature": "RowHeights",
          "source": "src/Codec-Xlsx.html#Worksheet",
          "type": "function"
        },
        "index": {
          "description": "custom row height map",
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "wsRowHeights",
          "package": "xlsx",
          "partial": "Row Heights",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:wsRowHeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "xlArchive",
          "package": "xlsx",
          "signature": "Archive",
          "source": "src/Codec-Xlsx.html#Xlsx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "xlArchive",
          "package": "xlsx",
          "partial": "Archive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:xlArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "xlSharedStrings",
          "package": "xlsx",
          "signature": "IntMap Text",
          "source": "src/Codec-Xlsx.html#Xlsx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "xlSharedStrings",
          "package": "xlsx",
          "partial": "Shared Strings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:xlSharedStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "xlStyles",
          "package": "xlsx",
          "signature": "Styles",
          "source": "src/Codec-Xlsx.html#Xlsx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "xlStyles",
          "package": "xlsx",
          "partial": "Styles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:xlStyles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Xlsx",
          "name": "xlWorksheetFiles",
          "package": "xlsx",
          "signature": "[WorksheetFile]",
          "source": "src/Codec-Xlsx.html#Xlsx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Xlsx",
          "module": "Codec.Xlsx",
          "name": "xlWorksheetFiles",
          "normalized": "[WorksheetFile]",
          "package": "xlsx",
          "partial": "Worksheet Files",
          "signature": "[WorksheetFile]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xlsx/docs/Codec-Xlsx.html#v:xlWorksheetFiles"
      }
    }
  ]
]