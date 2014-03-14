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
        "word": "spreadsheet"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Spreadsheet",
          "name": "Spreadsheet",
          "package": "spreadsheet",
          "source": "src/Data-Spreadsheet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Spreadsheet",
          "module": "Data.Spreadsheet",
          "name": "Spreadsheet",
          "package": "spreadsheet",
          "partial": "Spreadsheet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA spreadsheet is a list of lines,\neach line consists of cells,\nand each cell is a string.\nIdeally, spreadsheets read from a CSV file\nhave lines with the same number of cells per line.\nHowever, we cannot assert this,\nand thus we parse the lines as they come in.\n\u003c/p\u003e",
          "module": "Data.Spreadsheet",
          "name": "T",
          "package": "spreadsheet",
          "source": "src/Data-Spreadsheet.html#T",
          "type": "type"
        },
        "index": {
          "description": "spreadsheet is list of lines each line consists of cells and each cell is string Ideally spreadsheets read from CSV file have lines with the same number of cells per line However we cannot assert this and thus we parse the lines as they come in",
          "hierarchy": "Data Spreadsheet",
          "module": "Data.Spreadsheet",
          "name": "T",
          "package": "spreadsheet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Spreadsheet",
          "name": "UserMessage",
          "package": "spreadsheet",
          "source": "src/Data-Spreadsheet-Parser.html#UserMessage",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Spreadsheet",
          "module": "Data.Spreadsheet",
          "name": "UserMessage",
          "package": "spreadsheet",
          "partial": "User Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#t:UserMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromString qm sep text\u003c/code\u003e parses \u003ccode\u003etext\u003c/code\u003e into a spreadsheet,\nusing the quotation character \u003ccode\u003eqm\u003c/code\u003e and the separator character \u003ccode\u003esep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Spreadsheet",
          "name": "fromString",
          "package": "spreadsheet",
          "signature": "Char -\u003e Char -\u003e String -\u003e Exceptional UserMessage T",
          "source": "src/Data-Spreadsheet.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "fromString qm sep text parses text into spreadsheet using the quotation character qm and the separator character sep",
          "hierarchy": "Data Spreadsheet",
          "module": "Data.Spreadsheet",
          "name": "fromString",
          "normalized": "Char-\u003eChar-\u003eString-\u003eExceptional UserMessage T",
          "package": "spreadsheet",
          "partial": "String",
          "signature": "Char-\u003eChar-\u003eString-\u003eExceptional UserMessage T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a quick hack.\nIt does neither handle field nor line separators within quoted fields.\nYou must provide well-formed CSV content\nwithout field and line separators within quotations.\nEverything else yields an error.\n\u003c/p\u003e",
          "module": "Data.Spreadsheet",
          "name": "fromStringSimple",
          "package": "spreadsheet",
          "signature": "Char -\u003e Char -\u003e String -\u003e T",
          "source": "src/Data-Spreadsheet.html#fromStringSimple",
          "type": "function"
        },
        "index": {
          "description": "This is quick hack It does neither handle field nor line separators within quoted fields You must provide well-formed CSV content without field and line separators within quotations Everything else yields an error",
          "hierarchy": "Data Spreadsheet",
          "module": "Data.Spreadsheet",
          "name": "fromStringSimple",
          "normalized": "Char-\u003eChar-\u003eString-\u003eT",
          "package": "spreadsheet",
          "partial": "String Simple",
          "signature": "Char-\u003eChar-\u003eString-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#v:fromStringSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromString qm sep text\u003c/code\u003e parses \u003ccode\u003etext\u003c/code\u003e into a spreadsheet\nand additionally returns text that follows after CSV formatted data.\n\u003c/p\u003e",
          "module": "Data.Spreadsheet",
          "name": "fromStringWithRemainder",
          "package": "spreadsheet",
          "signature": "Char -\u003e Char -\u003e String -\u003e Exceptional UserMessage (T, String)",
          "source": "src/Data-Spreadsheet.html#fromStringWithRemainder",
          "type": "function"
        },
        "index": {
          "description": "fromString qm sep text parses text into spreadsheet and additionally returns text that follows after CSV formatted data",
          "hierarchy": "Data Spreadsheet",
          "module": "Data.Spreadsheet",
          "name": "fromStringWithRemainder",
          "normalized": "Char-\u003eChar-\u003eString-\u003eExceptional UserMessage(T,String)",
          "package": "spreadsheet",
          "partial": "String With Remainder",
          "signature": "Char-\u003eChar-\u003eString-\u003eExceptional UserMessage(T,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#v:fromStringWithRemainder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Spreadsheet",
          "name": "toString",
          "package": "spreadsheet",
          "signature": "Char -\u003e Char -\u003e T -\u003e String",
          "source": "src/Data-Spreadsheet.html#toString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Spreadsheet",
          "module": "Data.Spreadsheet",
          "name": "toString",
          "normalized": "Char-\u003eChar-\u003eT-\u003eString",
          "package": "spreadsheet",
          "partial": "String",
          "signature": "Char-\u003eChar-\u003eT-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Spreadsheet",
          "name": "toStringSimple",
          "package": "spreadsheet",
          "signature": "Char -\u003e Char -\u003e T -\u003e String",
          "source": "src/Data-Spreadsheet.html#toStringSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Spreadsheet",
          "module": "Data.Spreadsheet",
          "name": "toStringSimple",
          "normalized": "Char-\u003eChar-\u003eT-\u003eString",
          "package": "spreadsheet",
          "partial": "String Simple",
          "signature": "Char-\u003eChar-\u003eT-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#v:toStringSimple"
      }
    }
  ]
]