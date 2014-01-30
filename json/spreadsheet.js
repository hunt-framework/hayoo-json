[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#",
      "description": {
        "fct-module": "Data.Spreadsheet",
        "fct-package": "spreadsheet",
        "fct-signature": "module",
        "fct-source": "src/Data-Spreadsheet.html",
        "fct-type": "module",
        "title": "Spreadsheet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Spreadsheet",
        "module": "Data.Spreadsheet",
        "name": "Spreadsheet",
        "normalized": "",
        "package": "spreadsheet",
        "partial": "Spreadsheet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#t:T",
      "description": {
        "fct-descr": "\u003cp\u003eA spreadsheet is a list of lines,\neach line consists of cells,\nand each cell is a string.\nIdeally, spreadsheets read from a CSV file\nhave lines with the same number of cells per line.\nHowever, we cannot assert this,\nand thus we parse the lines as they come in.\n\u003c/p\u003e",
        "fct-module": "Data.Spreadsheet",
        "fct-package": "spreadsheet",
        "fct-signature": "type",
        "fct-source": "src/Data-Spreadsheet.html#T",
        "fct-type": "type",
        "title": "T"
      },
      "index": {
        "description": "spreadsheet is list of lines each line consists of cells and each cell is string Ideally spreadsheets read from CSV file have lines with the same number of cells per line However we cannot assert this and thus we parse the lines as they come in",
        "hierarchy": "Data Spreadsheet",
        "module": "Data.Spreadsheet",
        "name": "T",
        "normalized": "",
        "package": "spreadsheet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#t:UserMessage",
      "description": {
        "fct-module": "Data.Spreadsheet",
        "fct-package": "spreadsheet",
        "fct-signature": "type",
        "fct-source": "src/Data-Spreadsheet-Parser.html#UserMessage",
        "fct-type": "type",
        "title": "UserMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Spreadsheet",
        "module": "Data.Spreadsheet",
        "name": "UserMessage",
        "normalized": "",
        "package": "spreadsheet",
        "partial": "User Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efromString qm sep text\u003c/code\u003e parses \u003ccode\u003etext\u003c/code\u003e into a spreadsheet,\nusing the quotation character \u003ccode\u003eqm\u003c/code\u003e and the separator character \u003ccode\u003esep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Spreadsheet",
        "fct-package": "spreadsheet",
        "fct-signature": "Char -\u003e Char -\u003e String -\u003e Exceptional UserMessage T",
        "fct-source": "src/Data-Spreadsheet.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "fromString qm sep text parses text into spreadsheet using the quotation character qm and the separator character sep",
        "hierarchy": "Data Spreadsheet",
        "module": "Data.Spreadsheet",
        "name": "fromString",
        "normalized": "Char-\u003eChar-\u003eString-\u003eExceptional UserMessage T",
        "package": "spreadsheet",
        "partial": "String",
        "signature": "Char-\u003eChar-\u003eString-\u003eExceptional UserMessage T"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#v:fromStringSimple",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a quick hack.\nIt does neither handle field nor line separators within quoted fields.\nYou must provide well-formed CSV content\nwithout field and line separators within quotations.\nEverything else yields an error.\n\u003c/p\u003e",
        "fct-module": "Data.Spreadsheet",
        "fct-package": "spreadsheet",
        "fct-signature": "Char -\u003e Char -\u003e String -\u003e T",
        "fct-source": "src/Data-Spreadsheet.html#fromStringSimple",
        "fct-type": "function",
        "title": "fromStringSimple"
      },
      "index": {
        "description": "This is quick hack It does neither handle field nor line separators within quoted fields You must provide well-formed CSV content without field and line separators within quotations Everything else yields an error",
        "hierarchy": "Data Spreadsheet",
        "module": "Data.Spreadsheet",
        "name": "fromStringSimple",
        "normalized": "Char-\u003eChar-\u003eString-\u003eT",
        "package": "spreadsheet",
        "partial": "String Simple",
        "signature": "Char-\u003eChar-\u003eString-\u003eT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#v:fromStringWithRemainder",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efromString qm sep text\u003c/code\u003e parses \u003ccode\u003etext\u003c/code\u003e into a spreadsheet\nand additionally returns text that follows after CSV formatted data.\n\u003c/p\u003e",
        "fct-module": "Data.Spreadsheet",
        "fct-package": "spreadsheet",
        "fct-signature": "Char -\u003e Char -\u003e String -\u003e Exceptional UserMessage (T, String)",
        "fct-source": "src/Data-Spreadsheet.html#fromStringWithRemainder",
        "fct-type": "function",
        "title": "fromStringWithRemainder"
      },
      "index": {
        "description": "fromString qm sep text parses text into spreadsheet and additionally returns text that follows after CSV formatted data",
        "hierarchy": "Data Spreadsheet",
        "module": "Data.Spreadsheet",
        "name": "fromStringWithRemainder",
        "normalized": "Char-\u003eChar-\u003eString-\u003eExceptional UserMessage(T,String)",
        "package": "spreadsheet",
        "partial": "String With Remainder",
        "signature": "Char-\u003eChar-\u003eString-\u003eExceptional UserMessage(T,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#v:toString",
      "description": {
        "fct-module": "Data.Spreadsheet",
        "fct-package": "spreadsheet",
        "fct-signature": "Char -\u003e Char -\u003e T -\u003e String",
        "fct-source": "src/Data-Spreadsheet.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Spreadsheet",
        "module": "Data.Spreadsheet",
        "name": "toString",
        "normalized": "Char-\u003eChar-\u003eT-\u003eString",
        "package": "spreadsheet",
        "partial": "String",
        "signature": "Char-\u003eChar-\u003eT-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/spreadsheet/docs/Data-Spreadsheet.html#v:toStringSimple",
      "description": {
        "fct-module": "Data.Spreadsheet",
        "fct-package": "spreadsheet",
        "fct-signature": "Char -\u003e Char -\u003e T -\u003e String",
        "fct-source": "src/Data-Spreadsheet.html#toStringSimple",
        "fct-type": "function",
        "title": "toStringSimple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Spreadsheet",
        "module": "Data.Spreadsheet",
        "name": "toStringSimple",
        "normalized": "Char-\u003eChar-\u003eT-\u003eString",
        "package": "spreadsheet",
        "partial": "String Simple",
        "signature": "Char-\u003eChar-\u003eT-\u003eString"
      }
    }
  }
]