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
        "word": "PageIO"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "Area",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#Area",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "Area",
          "package": "PageIO",
          "partial": "Area",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#t:Area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "BlockResult",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#BlockResult",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "BlockResult",
          "package": "PageIO",
          "partial": "Block Result",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#t:BlockResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "Bound",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#Bound",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "Bound",
          "package": "PageIO",
          "partial": "Bound",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#t:Bound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "SheetResult",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#SheetResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "SheetResult",
          "package": "PageIO",
          "partial": "Sheet Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#t:SheetResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "checkPattern",
          "package": "PageIO",
          "signature": "Page -\u003e Pattern -\u003e Bool",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#checkPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "checkPattern",
          "normalized": "Page-\u003ePattern-\u003eBool",
          "package": "PageIO",
          "partial": "Pattern",
          "signature": "Page-\u003ePattern-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#v:checkPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "crop",
          "package": "PageIO",
          "signature": "Box -\u003e Page -\u003e Page",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#crop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "crop",
          "normalized": "Box-\u003ePage-\u003ePage",
          "package": "PageIO",
          "signature": "Box-\u003ePage-\u003ePage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#v:crop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "extractBlock",
          "package": "PageIO",
          "signature": "Block -\u003e Page -\u003e Maybe BlockResult",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#extractBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "extractBlock",
          "normalized": "Block-\u003ePage-\u003eMaybe BlockResult",
          "package": "PageIO",
          "partial": "Block",
          "signature": "Block-\u003ePage-\u003eMaybe BlockResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#v:extractBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "extractBlocks",
          "package": "PageIO",
          "signature": "LabelMap Block -\u003e Page -\u003e [(Label, BlockResult)]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#extractBlocks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "extractBlocks",
          "normalized": "LabelMap Block-\u003ePage-\u003e[(Label,BlockResult)]",
          "package": "PageIO",
          "partial": "Blocks",
          "signature": "LabelMap Block-\u003ePage-\u003e[(Label,BlockResult)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#v:extractBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "extractField",
          "package": "PageIO",
          "signature": "Page -\u003e Field -\u003e Bound",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#extractField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "extractField",
          "normalized": "Page-\u003eField-\u003eBound",
          "package": "PageIO",
          "partial": "Field",
          "signature": "Page-\u003eField-\u003eBound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#v:extractField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "extractPage",
          "package": "PageIO",
          "signature": "Sheet -\u003e Page -\u003e Maybe SheetResult",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#extractPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "extractPage",
          "normalized": "Sheet-\u003ePage-\u003eMaybe SheetResult",
          "package": "PageIO",
          "partial": "Page",
          "signature": "Sheet-\u003ePage-\u003eMaybe SheetResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#v:extractPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "fieldLen",
          "package": "PageIO",
          "signature": "Field -\u003e Int",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#fieldLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "fieldLen",
          "normalized": "Field-\u003eInt",
          "package": "PageIO",
          "partial": "Len",
          "signature": "Field-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#v:fieldLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "pageVal",
          "package": "PageIO",
          "signature": "Page -\u003e Value",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#pageVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "pageVal",
          "normalized": "Page-\u003eValue",
          "package": "PageIO",
          "partial": "Val",
          "signature": "Page-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#v:pageVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Extract",
          "name": "prettyEntry",
          "package": "PageIO",
          "signature": "(Label, a) -\u003e String",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Extract.html#prettyEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Extract",
          "module": "Text.PageIO.Extract",
          "name": "prettyEntry",
          "normalized": "(Label,a)-\u003eString",
          "package": "PageIO",
          "partial": "Entry",
          "signature": "(Label,a)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Extract.html#v:prettyEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Index",
          "name": "blockProduct",
          "package": "PageIO",
          "signature": "[(Area, LabelMap Bound)] -\u003e BlockResult -\u003e [(Area, LabelMap Bound)]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Index.html#blockProduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Index",
          "module": "Text.PageIO.Index",
          "name": "blockProduct",
          "normalized": "[(Area,LabelMap Bound)]-\u003eBlockResult-\u003e[(Area,LabelMap Bound)]",
          "package": "PageIO",
          "partial": "Product",
          "signature": "[(Area,LabelMap Bound)]-\u003eBlockResult-\u003e[(Area,LabelMap Bound)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Index.html#v:blockProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Index",
          "name": "fromYMD",
          "package": "PageIO",
          "signature": "Int -\u003e Int -\u003e Int -\u003e String",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Index.html#fromYMD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Index",
          "module": "Text.PageIO.Index",
          "name": "fromYMD",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eString",
          "package": "PageIO",
          "partial": "YMD",
          "signature": "Int-\u003eInt-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Index.html#v:fromYMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Index",
          "name": "indexDocs",
          "package": "PageIO",
          "signature": "Sheet -\u003e [Doc] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Index.html#indexDocs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Index",
          "module": "Text.PageIO.Index",
          "name": "indexDocs",
          "normalized": "Sheet-\u003e[Doc]-\u003eIO()",
          "package": "PageIO",
          "partial": "Docs",
          "signature": "Sheet-\u003e[Doc]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Index.html#v:indexDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Infer",
          "name": "DateMatch",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Infer.html#DateMatch",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Infer",
          "module": "Text.PageIO.Infer",
          "name": "DateMatch",
          "package": "PageIO",
          "partial": "Date Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Infer.html#t:DateMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Infer",
          "name": "dateMatchToFields",
          "package": "PageIO",
          "signature": "DateMatch -\u003e [(Label, Field)]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Infer.html#dateMatchToFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Infer",
          "module": "Text.PageIO.Infer",
          "name": "dateMatchToFields",
          "normalized": "DateMatch-\u003e[(Label,Field)]",
          "package": "PageIO",
          "partial": "Match To Fields",
          "signature": "DateMatch-\u003e[(Label,Field)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Infer.html#v:dateMatchToFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Infer",
          "name": "datePattern",
          "package": "PageIO",
          "signature": "Value",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Infer.html#datePattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Infer",
          "module": "Text.PageIO.Infer",
          "name": "datePattern",
          "package": "PageIO",
          "partial": "Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Infer.html#v:datePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Infer",
          "name": "inferPageDateFields",
          "package": "PageIO",
          "signature": "Page -\u003e [(Label, Field)]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Infer.html#inferPageDateFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Infer",
          "module": "Text.PageIO.Infer",
          "name": "inferPageDateFields",
          "normalized": "Page-\u003e[(Label,Field)]",
          "package": "PageIO",
          "partial": "Page Date Fields",
          "signature": "Page-\u003e[(Label,Field)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Infer.html#v:inferPageDateFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Infer",
          "name": "inferPageNameField",
          "package": "PageIO",
          "signature": "Page -\u003e (Label, Field)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Infer.html#inferPageNameField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Infer",
          "module": "Text.PageIO.Infer",
          "name": "inferPageNameField",
          "normalized": "Page-\u003e(Label,Field)",
          "package": "PageIO",
          "partial": "Page Name Field",
          "signature": "Page-\u003e(Label,Field)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Infer.html#v:inferPageNameField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Infer",
          "name": "inferSheet",
          "package": "PageIO",
          "signature": "FilePath -\u003e [Page] -\u003e Sheet",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Infer.html#inferSheet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Infer",
          "module": "Text.PageIO.Infer",
          "name": "inferSheet",
          "normalized": "FilePath-\u003e[Page]-\u003eSheet",
          "package": "PageIO",
          "partial": "Sheet",
          "signature": "FilePath-\u003e[Page]-\u003eSheet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Infer.html#v:inferSheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Infer",
          "name": "mkField",
          "package": "PageIO",
          "signature": "String -\u003e Col -\u003e Row -\u003e Col -\u003e Row -\u003e (Label, Field)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Infer.html#mkField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Infer",
          "module": "Text.PageIO.Infer",
          "name": "mkField",
          "normalized": "String-\u003eCol-\u003eRow-\u003eCol-\u003eRow-\u003e(Label,Field)",
          "package": "PageIO",
          "partial": "Field",
          "signature": "String-\u003eCol-\u003eRow-\u003eCol-\u003eRow-\u003e(Label,Field)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Infer.html#v:mkField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Infer",
          "name": "namePattern",
          "package": "PageIO",
          "signature": "Value",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Infer.html#namePattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Infer",
          "module": "Text.PageIO.Infer",
          "name": "namePattern",
          "package": "PageIO",
          "partial": "Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Infer.html#v:namePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Infer",
          "name": "tryMatchDate",
          "package": "PageIO",
          "signature": "(Int, Value) -\u003e [DateMatch]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Infer.html#tryMatchDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Infer",
          "module": "Text.PageIO.Infer",
          "name": "tryMatchDate",
          "normalized": "(Int,Value)-\u003e[DateMatch]",
          "package": "PageIO",
          "partial": "Match Date",
          "signature": "(Int,Value)-\u003e[DateMatch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Infer.html#v:tryMatchDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Infer",
          "name": "tryMatchName",
          "package": "PageIO",
          "signature": "(Int, Value) -\u003e [(Label, Field)]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Infer.html#tryMatchName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Infer",
          "module": "Text.PageIO.Infer",
          "name": "tryMatchName",
          "normalized": "(Int,Value)-\u003e[(Label,Field)]",
          "package": "PageIO",
          "partial": "Match Name",
          "signature": "(Int,Value)-\u003e[(Label,Field)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Infer.html#v:tryMatchName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Infer",
          "name": "validateMatch",
          "package": "PageIO",
          "signature": "MatchText Value -\u003e Maybe DateMatch",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Infer.html#validateMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Infer",
          "module": "Text.PageIO.Infer",
          "name": "validateMatch",
          "normalized": "MatchText Value-\u003eMaybe DateMatch",
          "package": "PageIO",
          "partial": "Match",
          "signature": "MatchText Value-\u003eMaybe DateMatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Infer.html#v:validateMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "Label",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#Label",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "Label",
          "package": "PageIO",
          "partial": "Label",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "LabelMap",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#LabelMap",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "LabelMap",
          "package": "PageIO",
          "partial": "Label Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#t:LabelMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "elems",
          "package": "PageIO",
          "signature": "LabelMap a -\u003e [a]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#elems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "elems",
          "normalized": "LabelMap a-\u003e[a]",
          "package": "PageIO",
          "signature": "LabelMap a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "filter",
          "package": "PageIO",
          "signature": "(a -\u003e Bool) -\u003e LabelMap a -\u003e LabelMap a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eLabelMap a-\u003eLabelMap a",
          "package": "PageIO",
          "signature": "(a-\u003eBool)-\u003eLabelMap a-\u003eLabelMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "fromLabel",
          "package": "PageIO",
          "signature": "Label -\u003e a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#fromLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "fromLabel",
          "normalized": "Label-\u003ea",
          "package": "PageIO",
          "partial": "Label",
          "signature": "Label-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:fromLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "fromList",
          "package": "PageIO",
          "signature": "[(Label, a)] -\u003e LabelMap a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "fromList",
          "normalized": "[(Label,a)]-\u003eLabelMap a",
          "package": "PageIO",
          "partial": "List",
          "signature": "[(Label,a)]-\u003eLabelMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "fromListWith",
          "package": "PageIO",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(Label, a)] -\u003e LabelMap a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#fromListWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(Label,a)]-\u003eLabelMap a",
          "package": "PageIO",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(Label,a)]-\u003eLabelMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "insert",
          "package": "PageIO",
          "signature": "Label -\u003e a -\u003e LabelMap a -\u003e LabelMap a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "insert",
          "normalized": "Label-\u003ea-\u003eLabelMap a-\u003eLabelMap a",
          "package": "PageIO",
          "signature": "Label-\u003ea-\u003eLabelMap a-\u003eLabelMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "insertWith",
          "package": "PageIO",
          "signature": "(a -\u003e a -\u003e a) -\u003e Label -\u003e a -\u003e LabelMap a -\u003e LabelMap a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#insertWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eLabel-\u003ea-\u003eLabelMap a-\u003eLabelMap a",
          "package": "PageIO",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eLabel-\u003ea-\u003eLabelMap a-\u003eLabelMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "intersection",
          "package": "PageIO",
          "signature": "LabelMap a -\u003e LabelMap b -\u003e LabelMap a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#intersection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "intersection",
          "normalized": "LabelMap a-\u003eLabelMap b-\u003eLabelMap a",
          "package": "PageIO",
          "signature": "LabelMap a-\u003eLabelMap b-\u003eLabelMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "keyToLabel",
          "package": "PageIO",
          "signature": "Key -\u003e Label",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#keyToLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "keyToLabel",
          "normalized": "Key-\u003eLabel",
          "package": "PageIO",
          "partial": "To Label",
          "signature": "Key-\u003eLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:keyToLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "keys",
          "package": "PageIO",
          "signature": "LabelMap a -\u003e [Label]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "keys",
          "normalized": "LabelMap a-\u003e[Label]",
          "package": "PageIO",
          "signature": "LabelMap a-\u003e[Label]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "lookup",
          "package": "PageIO",
          "signature": "Label -\u003e LabelMap a -\u003e Maybe a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#lookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "lookup",
          "normalized": "Label-\u003eLabelMap a-\u003eMaybe a",
          "package": "PageIO",
          "signature": "Label-\u003eLabelMap a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "mapMaybe",
          "package": "PageIO",
          "signature": "(a -\u003e Maybe b) -\u003e LabelMap a -\u003e LabelMap b",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eLabelMap a-\u003eLabelMap b",
          "package": "PageIO",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eLabelMap a-\u003eLabelMap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "mapMaybeWithKey",
          "package": "PageIO",
          "signature": "(Label -\u003e a -\u003e Maybe b) -\u003e LabelMap a -\u003e LabelMap b",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#mapMaybeWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "mapMaybeWithKey",
          "normalized": "(Label-\u003ea-\u003eMaybe b)-\u003eLabelMap a-\u003eLabelMap b",
          "package": "PageIO",
          "partial": "Maybe With Key",
          "signature": "(Label-\u003ea-\u003eMaybe b)-\u003eLabelMap a-\u003eLabelMap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:mapMaybeWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "mapWithKey",
          "package": "PageIO",
          "signature": "(Label -\u003e a -\u003e b) -\u003e LabelMap a -\u003e LabelMap b",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "mapWithKey",
          "normalized": "(Label-\u003ea-\u003eb)-\u003eLabelMap a-\u003eLabelMap b",
          "package": "PageIO",
          "partial": "With Key",
          "signature": "(Label-\u003ea-\u003eb)-\u003eLabelMap a-\u003eLabelMap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "member",
          "package": "PageIO",
          "signature": "Label -\u003e LabelMap a -\u003e Bool",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "member",
          "normalized": "Label-\u003eLabelMap a-\u003eBool",
          "package": "PageIO",
          "signature": "Label-\u003eLabelMap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "null",
          "package": "PageIO",
          "signature": "LabelMap a -\u003e Bool",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "null",
          "normalized": "LabelMap a-\u003eBool",
          "package": "PageIO",
          "signature": "LabelMap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "toLabel",
          "package": "PageIO",
          "signature": "a -\u003e Label",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#toLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "toLabel",
          "normalized": "a-\u003eLabel",
          "package": "PageIO",
          "partial": "Label",
          "signature": "a-\u003eLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:toLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "toList",
          "package": "PageIO",
          "signature": "LabelMap a -\u003e [(Label, a)]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "toList",
          "normalized": "LabelMap a-\u003e[(Label,a)]",
          "package": "PageIO",
          "partial": "List",
          "signature": "LabelMap a-\u003e[(Label,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "union",
          "package": "PageIO",
          "signature": "LabelMap a -\u003e LabelMap a -\u003e LabelMap a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "union",
          "normalized": "LabelMap a-\u003eLabelMap a-\u003eLabelMap a",
          "package": "PageIO",
          "signature": "LabelMap a-\u003eLabelMap a-\u003eLabelMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "unionWith",
          "package": "PageIO",
          "signature": "(a -\u003e a -\u003e a) -\u003e LabelMap a -\u003e LabelMap a -\u003e LabelMap a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#unionWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eLabelMap a-\u003eLabelMap a-\u003eLabelMap a",
          "package": "PageIO",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eLabelMap a-\u003eLabelMap a-\u003eLabelMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "unions",
          "package": "PageIO",
          "signature": "[LabelMap a] -\u003e LabelMap a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#unions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "unions",
          "normalized": "[LabelMap a]-\u003eLabelMap a",
          "package": "PageIO",
          "signature": "[LabelMap a]-\u003eLabelMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.LabelMap",
          "name": "unionsWith",
          "package": "PageIO",
          "signature": "(a -\u003e a -\u003e a) -\u003e [LabelMap a] -\u003e LabelMap a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-LabelMap.html#unionsWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO LabelMap",
          "module": "Text.PageIO.LabelMap",
          "name": "unionsWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[LabelMap a]-\u003eLabelMap a",
          "package": "PageIO",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[LabelMap a]-\u003eLabelMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-LabelMap.html#v:unionsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "\u003c$$\u003e",
          "package": "PageIO",
          "signature": "f a -\u003e (a -\u003e b) -\u003e f b",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#%3C%24%24%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "\u003c$$\u003e",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
          "package": "PageIO",
          "signature": "f a-\u003e(a-\u003eb)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:\u003c$$\u003e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "bareLabel",
          "package": "PageIO",
          "signature": "Parser Label",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#bareLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "bareLabel",
          "package": "PageIO",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:bareLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "between",
          "package": "PageIO",
          "signature": "Parser a -\u003e Parser b -\u003e Parser c -\u003e Parser c",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#between",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "between",
          "normalized": "Parser a-\u003eParser b-\u003eParser c-\u003eParser c",
          "package": "PageIO",
          "signature": "Parser a-\u003eParser b-\u003eParser c-\u003eParser c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "block",
          "package": "PageIO",
          "signature": "Parser (Label, Block)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "block",
          "normalized": "Parser(Label,Block)",
          "package": "PageIO",
          "signature": "Parser(Label,Block)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "boxNumbers",
          "package": "PageIO",
          "signature": "Parser Box",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#boxNumbers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "boxNumbers",
          "package": "PageIO",
          "partial": "Numbers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:boxNumbers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "choice",
          "package": "PageIO",
          "signature": "[f a] -\u003e f a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#choice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "choice",
          "normalized": "[a b]-\u003ea b",
          "package": "PageIO",
          "signature": "[f a]-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "commaSep",
          "package": "PageIO",
          "signature": "Parser a -\u003e Parser [a]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#commaSep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "commaSep",
          "normalized": "Parser a-\u003eParser[a]",
          "package": "PageIO",
          "partial": "Sep",
          "signature": "Parser a-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:commaSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "field",
          "package": "PageIO",
          "signature": "Parser (Label, Field)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "field",
          "normalized": "Parser(Label,Field)",
          "package": "PageIO",
          "signature": "Parser(Label,Field)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "frame",
          "package": "PageIO",
          "signature": "Parser Frame",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "frame",
          "package": "PageIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "functionVariable",
          "package": "PageIO",
          "signature": "Parser Variable",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#functionVariable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "functionVariable",
          "package": "PageIO",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:functionVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "labelStr",
          "package": "PageIO",
          "signature": "Parser Label",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#labelStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "labelStr",
          "package": "PageIO",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:labelStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "liftA4",
          "package": "PageIO",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e f a -\u003e f b -\u003e f c -\u003e f d -\u003e f e",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#liftA4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "liftA4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e",
          "package": "PageIO",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:liftA4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "liftA5",
          "package": "PageIO",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e result) -\u003e f a -\u003e f b -\u003e f c -\u003e f d -\u003e f e -\u003e f result",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#liftA5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "liftA5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eg a-\u003eg b-\u003eg c-\u003eg d-\u003eg e-\u003eg f",
          "package": "PageIO",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003eresult)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e-\u003ef result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:liftA5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "literalStr",
          "package": "PageIO",
          "signature": "Parser Value",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#literalStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "literalStr",
          "package": "PageIO",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:literalStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "literalVariable",
          "package": "PageIO",
          "signature": "Parser Variable",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#literalVariable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "literalVariable",
          "package": "PageIO",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:literalVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "many1",
          "package": "PageIO",
          "signature": "f a -\u003e f [a]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#many1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "many1",
          "normalized": "a b-\u003ea[b]",
          "package": "PageIO",
          "signature": "f a-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "matchStr",
          "package": "PageIO",
          "signature": "Parser Match",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#matchStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "matchStr",
          "package": "PageIO",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:matchStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "maybeBy",
          "package": "PageIO",
          "signature": "String -\u003e Parser (Maybe [Label])",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#maybeBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "maybeBy",
          "normalized": "String-\u003eParser(Maybe[Label])",
          "package": "PageIO",
          "partial": "By",
          "signature": "String-\u003eParser(Maybe[Label])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:maybeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "maybeFieldFormat",
          "package": "PageIO",
          "signature": "Parser (Maybe FieldFormat)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#maybeFieldFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "maybeFieldFormat",
          "package": "PageIO",
          "partial": "Field Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:maybeFieldFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "maybeFieldVariable",
          "package": "PageIO",
          "signature": "Parser (Maybe Variable)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#maybeFieldVariable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "maybeFieldVariable",
          "package": "PageIO",
          "partial": "Field Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:maybeFieldVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "maybeFilters",
          "package": "PageIO",
          "signature": "Parser (Maybe [Filter])",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#maybeFilters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "maybeFilters",
          "normalized": "Parser(Maybe[Filter])",
          "package": "PageIO",
          "partial": "Filters",
          "signature": "Parser(Maybe[Filter])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:maybeFilters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "maybeOrderBys",
          "package": "PageIO",
          "signature": "Parser (Maybe [OrderBy Label])",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#maybeOrderBys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "maybeOrderBys",
          "normalized": "Parser(Maybe[OrderBy Label])",
          "package": "PageIO",
          "partial": "Order Bys",
          "signature": "Parser(Maybe[OrderBy Label])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:maybeOrderBys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "maybeRule",
          "package": "PageIO",
          "signature": "Parser (Maybe a) -\u003e Parser (Maybe a)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#maybeRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "maybeRule",
          "normalized": "Parser(Maybe a)-\u003eParser(Maybe a)",
          "package": "PageIO",
          "partial": "Rule",
          "signature": "Parser(Maybe a)-\u003eParser(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:maybeRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "mkMatch",
          "package": "PageIO",
          "signature": "Value -\u003e Match",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#mkMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "mkMatch",
          "normalized": "Value-\u003eMatch",
          "package": "PageIO",
          "partial": "Match",
          "signature": "Value-\u003eMatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:mkMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "noneOf",
          "package": "PageIO",
          "signature": "[Char] -\u003e Parser Char",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#noneOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "noneOf",
          "normalized": "[Char]-\u003eParser Char",
          "package": "PageIO",
          "partial": "Of",
          "signature": "[Char]-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:noneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "num",
          "package": "PageIO",
          "signature": "Parser Int",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#num",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "num",
          "package": "PageIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "oneOf",
          "package": "PageIO",
          "signature": "[Char] -\u003e Parser Char",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#oneOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "oneOf",
          "normalized": "[Char]-\u003eParser Char",
          "package": "PageIO",
          "partial": "Of",
          "signature": "[Char]-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "operator",
          "package": "PageIO",
          "signature": "Parser Operator",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "operator",
          "package": "PageIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "packLBS",
          "package": "PageIO",
          "signature": "ByteString -\u003e ByteString",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#packLBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "packLBS",
          "normalized": "ByteString-\u003eByteString",
          "package": "PageIO",
          "partial": "LBS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:packLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "parseFilter",
          "package": "PageIO",
          "signature": "Parser Filter",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#parseFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "parseFilter",
          "package": "PageIO",
          "partial": "Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:parseFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "parseFromFile",
          "package": "PageIO",
          "signature": "Parser a -\u003e String -\u003e IO (Either ParseError a)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#parseFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "parseFromFile",
          "normalized": "Parser a-\u003eString-\u003eIO(Either ParseError a)",
          "package": "PageIO",
          "partial": "From File",
          "signature": "Parser a-\u003eString-\u003eIO(Either ParseError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:parseFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "parseLabel",
          "package": "PageIO",
          "signature": "Parser Label",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#parseLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "parseLabel",
          "package": "PageIO",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:parseLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "parseMaybe",
          "package": "PageIO",
          "signature": "Parser a -\u003e Parser (Maybe a)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#parseMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "parseMaybe",
          "normalized": "Parser a-\u003eParser(Maybe a)",
          "package": "PageIO",
          "partial": "Maybe",
          "signature": "Parser a-\u003eParser(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:parseMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "pattern",
          "package": "PageIO",
          "signature": "Parser (Label, Pattern)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "pattern",
          "normalized": "Parser(Label,Pattern)",
          "package": "PageIO",
          "signature": "Parser(Label,Pattern)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "quotedValue",
          "package": "PageIO",
          "signature": "Parser Value",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#quotedValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "quotedValue",
          "package": "PageIO",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:quotedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "r",
          "package": "PageIO",
          "signature": "Parser a -\u003e Parser a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#r",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "r",
          "normalized": "Parser a-\u003eParser a",
          "package": "PageIO",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "readSheet",
          "package": "PageIO",
          "signature": "FilePath -\u003e IO Sheet",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#readSheet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "readSheet",
          "normalized": "FilePath-\u003eIO Sheet",
          "package": "PageIO",
          "partial": "Sheet",
          "signature": "FilePath-\u003eIO Sheet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:readSheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "replaceVariable",
          "package": "PageIO",
          "signature": "Parser Variable",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#replaceVariable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "replaceVariable",
          "package": "PageIO",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:replaceVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "retLabel",
          "package": "PageIO",
          "signature": "Label -\u003e a -\u003e Parser (Label, a)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#retLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "retLabel",
          "normalized": "Label-\u003ea-\u003eParser(Label,a)",
          "package": "PageIO",
          "partial": "Label",
          "signature": "Label-\u003ea-\u003eParser(Label,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:retLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "sepEndBy",
          "package": "PageIO",
          "signature": "f a -\u003e f b -\u003e f [a]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#sepEndBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "sepEndBy",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "PageIO",
          "partial": "End By",
          "signature": "f a-\u003ef b-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:sepEndBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "sepEndBy1",
          "package": "PageIO",
          "signature": "f a -\u003e f b -\u003e f [a]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#sepEndBy1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "sepEndBy1",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "PageIO",
          "partial": "End By",
          "signature": "f a-\u003ef b-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:sepEndBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "sheet",
          "package": "PageIO",
          "signature": "Parser Sheet",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#sheet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "sheet",
          "package": "PageIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:sheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "sp",
          "package": "PageIO",
          "signature": "Parser ()",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#sp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "sp",
          "normalized": "Parser()",
          "package": "PageIO",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:sp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "str",
          "package": "PageIO",
          "signature": "Parser ByteString",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#str",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "str",
          "package": "PageIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "substrVariable",
          "package": "PageIO",
          "signature": "Parser Variable",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#substrVariable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "substrVariable",
          "package": "PageIO",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:substrVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Parser",
          "name": "sym",
          "package": "PageIO",
          "signature": "String -\u003e Parser ()",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Parser.html#sym",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Parser",
          "module": "Text.PageIO.Parser",
          "name": "sym",
          "normalized": "String-\u003eParser()",
          "package": "PageIO",
          "signature": "String-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Parser.html#v:sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Run",
          "name": "hReadPages",
          "package": "PageIO",
          "signature": "Handle -\u003e IO [Page]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Run.html#hReadPages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Run",
          "module": "Text.PageIO.Run",
          "name": "hReadPages",
          "normalized": "Handle-\u003eIO[Page]",
          "package": "PageIO",
          "partial": "Read Pages",
          "signature": "Handle-\u003eIO[Page]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Run.html#v:hReadPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Run",
          "name": "hReadPagesLazy",
          "package": "PageIO",
          "signature": "Handle -\u003e IO [Page]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Run.html#hReadPagesLazy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Run",
          "module": "Text.PageIO.Run",
          "name": "hReadPagesLazy",
          "normalized": "Handle-\u003eIO[Page]",
          "package": "PageIO",
          "partial": "Read Pages Lazy",
          "signature": "Handle-\u003eIO[Page]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Run.html#v:hReadPagesLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Run",
          "name": "hReadPagesStrict",
          "package": "PageIO",
          "signature": "Handle -\u003e Int -\u003e IO [Page]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Run.html#hReadPagesStrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Run",
          "module": "Text.PageIO.Run",
          "name": "hReadPagesStrict",
          "normalized": "Handle-\u003eInt-\u003eIO[Page]",
          "package": "PageIO",
          "partial": "Read Pages Strict",
          "signature": "Handle-\u003eInt-\u003eIO[Page]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Run.html#v:hReadPagesStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Run",
          "name": "putPage",
          "package": "PageIO",
          "signature": "Page -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Run.html#putPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Run",
          "module": "Text.PageIO.Run",
          "name": "putPage",
          "normalized": "Page-\u003eIO()",
          "package": "PageIO",
          "partial": "Page",
          "signature": "Page-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Run.html#v:putPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Run",
          "name": "readPages",
          "package": "PageIO",
          "signature": "FilePath -\u003e IO [Page]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Run.html#readPages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Run",
          "module": "Text.PageIO.Run",
          "name": "readPages",
          "normalized": "FilePath-\u003eIO[Page]",
          "package": "PageIO",
          "partial": "Pages",
          "signature": "FilePath-\u003eIO[Page]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Run.html#v:readPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "AppliedVariable",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#AppliedVariable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "AppliedVariable",
          "package": "PageIO",
          "partial": "Applied Variable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#t:AppliedVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "BlockData",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#BlockData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "BlockData",
          "package": "PageIO",
          "partial": "Block Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#t:BlockData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "Doc",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#Doc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "Doc",
          "package": "PageIO",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "DocBinding",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#DocBinding",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "DocBinding",
          "package": "PageIO",
          "partial": "Doc Binding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#t:DocBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "FieldBinding",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#FieldBinding",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "FieldBinding",
          "package": "PageIO",
          "partial": "Field Binding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#t:FieldBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "FitAttempt",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#FitAttempt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "FitAttempt",
          "package": "PageIO",
          "partial": "Fit Attempt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#t:FitAttempt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "Ordered",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#Ordered",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "Ordered",
          "package": "PageIO",
          "partial": "Ordered",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#t:Ordered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "PageBinding",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#PageBinding",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "PageBinding",
          "package": "PageIO",
          "partial": "Page Binding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#t:PageBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "PageCapacity",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#PageCapacity",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "PageCapacity",
          "package": "PageIO",
          "partial": "Page Capacity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#t:PageCapacity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "Slot",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#Slot",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "Slot",
          "package": "PageIO",
          "partial": "Slot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#t:Slot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "ValueMap",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#ValueMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "ValueMap",
          "package": "PageIO",
          "partial": "Value Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#t:ValueMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "areaRows",
          "package": "PageIO",
          "signature": "Area -\u003e Row",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#areaRows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "areaRows",
          "normalized": "Area-\u003eRow",
          "package": "PageIO",
          "partial": "Rows",
          "signature": "Area-\u003eRow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:areaRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "bindDoc",
          "package": "PageIO",
          "signature": "Sheet -\u003e [Page] -\u003e [SheetResult] -\u003e [DocBinding]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#bindDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "bindDoc",
          "normalized": "Sheet-\u003e[Page]-\u003e[SheetResult]-\u003e[DocBinding]",
          "package": "PageIO",
          "partial": "Doc",
          "signature": "Sheet-\u003e[Page]-\u003e[SheetResult]-\u003e[DocBinding]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:bindDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "clearArea",
          "package": "PageIO",
          "signature": "Box -\u003e Page -\u003e Page",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#clearArea",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "clearArea",
          "normalized": "Box-\u003ePage-\u003ePage",
          "package": "PageIO",
          "partial": "Area",
          "signature": "Box-\u003ePage-\u003ePage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:clearArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "constToPattern",
          "package": "PageIO",
          "signature": "Sheet -\u003e Sheet",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#constToPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "constToPattern",
          "normalized": "Sheet-\u003eSheet",
          "package": "PageIO",
          "partial": "To Pattern",
          "signature": "Sheet-\u003eSheet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:constToPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "doAttempt",
          "package": "PageIO",
          "signature": "LabelMap [OrderBy Label] -\u003e FitAttempt -\u003e SheetResult -\u003e FitAttempt",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#doAttempt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "doAttempt",
          "normalized": "LabelMap[OrderBy Label]-\u003eFitAttempt-\u003eSheetResult-\u003eFitAttempt",
          "package": "PageIO",
          "partial": "Attempt",
          "signature": "LabelMap[OrderBy Label]-\u003eFitAttempt-\u003eSheetResult-\u003eFitAttempt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:doAttempt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "doCapacity",
          "package": "PageIO",
          "signature": "Sheet -\u003e [PageCapacity] -\u003e SheetResult -\u003e [PageCapacity]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#doCapacity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "doCapacity",
          "normalized": "Sheet-\u003e[PageCapacity]-\u003eSheetResult-\u003e[PageCapacity]",
          "package": "PageIO",
          "partial": "Capacity",
          "signature": "Sheet-\u003e[PageCapacity]-\u003eSheetResult-\u003e[PageCapacity]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:doCapacity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "doExpandFields",
          "package": "PageIO",
          "signature": "LabelMap Field -\u003e Ordered FieldBinding -\u003e Ordered FieldBinding",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#doExpandFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "doExpandFields",
          "normalized": "LabelMap Field-\u003eOrdered FieldBinding-\u003eOrdered FieldBinding",
          "package": "PageIO",
          "partial": "Expand Fields",
          "signature": "LabelMap Field-\u003eOrdered FieldBinding-\u003eOrdered FieldBinding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:doExpandFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "doGroupArea",
          "package": "PageIO",
          "signature": "[Label] -\u003e LabelMap Field -\u003e [Ordered FieldBinding] -\u003e [Ordered FieldBinding]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#doGroupArea",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "doGroupArea",
          "normalized": "[Label]-\u003eLabelMap Field-\u003e[Ordered FieldBinding]-\u003e[Ordered FieldBinding]",
          "package": "PageIO",
          "partial": "Group Area",
          "signature": "[Label]-\u003eLabelMap Field-\u003e[Ordered FieldBinding]-\u003e[Ordered FieldBinding]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:doGroupArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "doGroupBlockData",
          "package": "PageIO",
          "signature": "LabelMap [Label] -\u003e LabelMap (LabelMap Field) -\u003e Label -\u003e BlockData -\u003e BlockData",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#doGroupBlockData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "doGroupBlockData",
          "normalized": "LabelMap[Label]-\u003eLabelMap(LabelMap Field)-\u003eLabel-\u003eBlockData-\u003eBlockData",
          "package": "PageIO",
          "partial": "Group Block Data",
          "signature": "LabelMap[Label]-\u003eLabelMap(LabelMap Field)-\u003eLabel-\u003eBlockData-\u003eBlockData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:doGroupBlockData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "doGroupBy",
          "package": "PageIO",
          "signature": "[(Block, LabelMap Bound)] -\u003e [(Block, LabelMap Bound)]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#doGroupBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "doGroupBy",
          "normalized": "[(Block,LabelMap Bound)]-\u003e[(Block,LabelMap Bound)]",
          "package": "PageIO",
          "partial": "Group By",
          "signature": "[(Block,LabelMap Bound)]-\u003e[(Block,LabelMap Bound)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:doGroupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "doGroupRows",
          "package": "PageIO",
          "signature": "LabelMap Field -\u003e [Ordered FieldBinding] -\u003e Ordered FieldBinding",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#doGroupRows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "doGroupRows",
          "normalized": "LabelMap Field-\u003e[Ordered FieldBinding]-\u003eOrdered FieldBinding",
          "package": "PageIO",
          "partial": "Group Rows",
          "signature": "LabelMap Field-\u003e[Ordered FieldBinding]-\u003eOrdered FieldBinding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:doGroupRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "emitDoc",
          "package": "PageIO",
          "signature": "[(SheetResult, Page)] -\u003e Doc",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#emitDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "emitDoc",
          "normalized": "[(SheetResult,Page)]-\u003eDoc",
          "package": "PageIO",
          "partial": "Doc",
          "signature": "[(SheetResult,Page)]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:emitDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "fillArea",
          "package": "PageIO",
          "signature": "Row -\u003e Col -\u003e Area -\u003e Page -\u003e Page",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#fillArea",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "fillArea",
          "normalized": "Row-\u003eCol-\u003eArea-\u003ePage-\u003ePage",
          "package": "PageIO",
          "partial": "Area",
          "signature": "Row-\u003eCol-\u003eArea-\u003ePage-\u003ePage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:fillArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "fillLine",
          "package": "PageIO",
          "signature": "Col -\u003e (Value, Value) -\u003e Value",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#fillLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "fillLine",
          "normalized": "Col-\u003e(Value,Value)-\u003eValue",
          "package": "PageIO",
          "partial": "Line",
          "signature": "Col-\u003e(Value,Value)-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:fillLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "fillPageVariables",
          "package": "PageIO",
          "signature": "LabelMap AppliedVariable -\u003e Page -\u003e Page",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#fillPageVariables",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "fillPageVariables",
          "normalized": "LabelMap AppliedVariable-\u003ePage-\u003ePage",
          "package": "PageIO",
          "partial": "Page Variables",
          "signature": "LabelMap AppliedVariable-\u003ePage-\u003ePage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:fillPageVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "fillVariables",
          "package": "PageIO",
          "signature": "Sheet -\u003e [SheetResult] -\u003e [Page] -\u003e [Page]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#fillVariables",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "fillVariables",
          "normalized": "Sheet-\u003e[SheetResult]-\u003e[Page]-\u003e[Page]",
          "package": "PageIO",
          "partial": "Variables",
          "signature": "Sheet-\u003e[SheetResult]-\u003e[Page]-\u003e[Page]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:fillVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "fitOnePage",
          "package": "PageIO",
          "signature": "[Slot] -\u003e (PageBinding, FitAttempt) -\u003e (PageBinding, FitAttempt)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#fitOnePage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "fitOnePage",
          "normalized": "[Slot]-\u003e(PageBinding,FitAttempt)-\u003e(PageBinding,FitAttempt)",
          "package": "PageIO",
          "partial": "One Page",
          "signature": "[Slot]-\u003e(PageBinding,FitAttempt)-\u003e(PageBinding,FitAttempt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:fitOnePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "fitOneSlot",
          "package": "PageIO",
          "signature": "Slot -\u003e (PageBinding, FitAttempt) -\u003e (PageBinding, FitAttempt)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#fitOneSlot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "fitOneSlot",
          "normalized": "Slot-\u003e(PageBinding,FitAttempt)-\u003e(PageBinding,FitAttempt)",
          "package": "PageIO",
          "partial": "One Slot",
          "signature": "Slot-\u003e(PageBinding,FitAttempt)-\u003e(PageBinding,FitAttempt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:fitOneSlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "formatFloat",
          "package": "PageIO",
          "signature": "Int -\u003e Int -\u003e Value",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#formatFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "formatFloat",
          "normalized": "Int-\u003eInt-\u003eValue",
          "package": "PageIO",
          "partial": "Float",
          "signature": "Int-\u003eInt-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:formatFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "formatInt",
          "package": "PageIO",
          "signature": "Int -\u003e Int -\u003e Value",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#formatInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "formatInt",
          "normalized": "Int-\u003eInt-\u003eValue",
          "package": "PageIO",
          "partial": "Int",
          "signature": "Int-\u003eInt-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:formatInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "gatherForSheetBlock",
          "package": "PageIO",
          "signature": "(Block -\u003e a) -\u003e Sheet -\u003e LabelMap a",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#gatherForSheetBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "gatherForSheetBlock",
          "normalized": "(Block-\u003ea)-\u003eSheet-\u003eLabelMap a",
          "package": "PageIO",
          "partial": "For Sheet Block",
          "signature": "(Block-\u003ea)-\u003eSheet-\u003eLabelMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:gatherForSheetBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "makeDoc",
          "package": "PageIO",
          "signature": "Sheet -\u003e [DocBinding] -\u003e Doc",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#makeDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "makeDoc",
          "normalized": "Sheet-\u003e[DocBinding]-\u003eDoc",
          "package": "PageIO",
          "partial": "Doc",
          "signature": "Sheet-\u003e[DocBinding]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:makeDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "makePage",
          "package": "PageIO",
          "signature": "Sheet -\u003e PageBinding -\u003e Page -\u003e Page",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#makePage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "makePage",
          "normalized": "Sheet-\u003ePageBinding-\u003ePage-\u003ePage",
          "package": "PageIO",
          "partial": "Page",
          "signature": "Sheet-\u003ePageBinding-\u003ePage-\u003ePage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:makePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "makeValueMap",
          "package": "PageIO",
          "signature": "SheetResult -\u003e ValueMap",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#makeValueMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "makeValueMap",
          "normalized": "SheetResult-\u003eValueMap",
          "package": "PageIO",
          "partial": "Value Map",
          "signature": "SheetResult-\u003eValueMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:makeValueMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "packPages",
          "package": "PageIO",
          "signature": "[Page] -\u003e ByteString",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#packPages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "packPages",
          "normalized": "[Page]-\u003eByteString",
          "package": "PageIO",
          "partial": "Pages",
          "signature": "[Page]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:packPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "parsePages",
          "package": "PageIO",
          "signature": "Sheet -\u003e [Page] -\u003e [Doc]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#parsePages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "parsePages",
          "normalized": "Sheet-\u003e[Page]-\u003e[Doc]",
          "package": "PageIO",
          "partial": "Pages",
          "signature": "Sheet-\u003e[Page]-\u003e[Doc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:parsePages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "repeatTails",
          "package": "PageIO",
          "signature": "[a] -\u003e [[a]]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#repeatTails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "repeatTails",
          "normalized": "[a]-\u003e[[a]]",
          "package": "PageIO",
          "partial": "Tails",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:repeatTails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "replaceArea",
          "package": "PageIO",
          "signature": "Box -\u003e [Area] -\u003e Page -\u003e Page",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#replaceArea",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "replaceArea",
          "normalized": "Box-\u003e[Area]-\u003ePage-\u003ePage",
          "package": "PageIO",
          "partial": "Area",
          "signature": "Box-\u003e[Area]-\u003ePage-\u003ePage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:replaceArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "replacePage",
          "package": "PageIO",
          "signature": "(Page, Box) -\u003e (Block, LabelMap Bound) -\u003e (Page, Box)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#replacePage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "replacePage",
          "normalized": "(Page,Box)-\u003e(Block,LabelMap Bound)-\u003e(Page,Box)",
          "package": "PageIO",
          "partial": "Page",
          "signature": "(Page,Box)-\u003e(Block,LabelMap Bound)-\u003e(Page,Box)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:replacePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "replaceWith",
          "package": "PageIO",
          "signature": "Value -\u003e Value -\u003e Value -\u003e Value",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#replaceWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "replaceWith",
          "normalized": "Value-\u003eValue-\u003eValue-\u003eValue",
          "package": "PageIO",
          "partial": "With",
          "signature": "Value-\u003eValue-\u003eValue-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:replaceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "sheetBlockFields",
          "package": "PageIO",
          "signature": "Sheet -\u003e LabelMap (LabelMap Field)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#sheetBlockFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "sheetBlockFields",
          "normalized": "Sheet-\u003eLabelMap(LabelMap Field)",
          "package": "PageIO",
          "partial": "Block Fields",
          "signature": "Sheet-\u003eLabelMap(LabelMap Field)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:sheetBlockFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "sheetBlockGroupBys",
          "package": "PageIO",
          "signature": "Sheet -\u003e LabelMap [Label]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#sheetBlockGroupBys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "sheetBlockGroupBys",
          "normalized": "Sheet-\u003eLabelMap[Label]",
          "package": "PageIO",
          "partial": "Block Group Bys",
          "signature": "Sheet-\u003eLabelMap[Label]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:sheetBlockGroupBys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "sheetBlockOrderBys",
          "package": "PageIO",
          "signature": "Sheet -\u003e LabelMap [OrderBy Label]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#sheetBlockOrderBys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "sheetBlockOrderBys",
          "normalized": "Sheet-\u003eLabelMap[OrderBy Label]",
          "package": "PageIO",
          "partial": "Block Order Bys",
          "signature": "Sheet-\u003eLabelMap[OrderBy Label]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:sheetBlockOrderBys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "sheetVariableFields",
          "package": "PageIO",
          "signature": "Sheet -\u003e (LabelMap Field, LabelMap Field)",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#sheetVariableFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "sheetVariableFields",
          "normalized": "Sheet-\u003e(LabelMap Field,LabelMap Field)",
          "package": "PageIO",
          "partial": "Variable Fields",
          "signature": "Sheet-\u003e(LabelMap Field,LabelMap Field)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:sheetVariableFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "transformPages",
          "package": "PageIO",
          "signature": "Sheet -\u003e [Page] -\u003e Sheet -\u003e [Page] -\u003e [Doc]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#transformPages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "transformPages",
          "normalized": "Sheet-\u003e[Page]-\u003eSheet-\u003e[Page]-\u003e[Doc]",
          "package": "PageIO",
          "partial": "Pages",
          "signature": "Sheet-\u003e[Page]-\u003eSheet-\u003e[Page]-\u003e[Doc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:transformPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "tryFit",
          "package": "PageIO",
          "signature": "[PageCapacity] -\u003e FitAttempt -\u003e Maybe [PageBinding]",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#tryFit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "tryFit",
          "normalized": "[PageCapacity]-\u003eFitAttempt-\u003eMaybe[PageBinding]",
          "package": "PageIO",
          "partial": "Fit",
          "signature": "[PageCapacity]-\u003eFitAttempt-\u003eMaybe[PageBinding]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:tryFit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Transform",
          "name": "valueToArea",
          "package": "PageIO",
          "signature": "Value -\u003e Area",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Transform.html#valueToArea",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Transform",
          "module": "Text.PageIO.Transform",
          "name": "valueToArea",
          "normalized": "Value-\u003eArea",
          "package": "PageIO",
          "partial": "To Area",
          "signature": "Value-\u003eArea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Transform.html#v:valueToArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Block",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Block",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Block",
          "package": "PageIO",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Box",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Box",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Box",
          "package": "PageIO",
          "partial": "Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Col",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Col",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Col",
          "package": "PageIO",
          "partial": "Col",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Col"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Field",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Field",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Field",
          "package": "PageIO",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "FieldFormat",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#FieldFormat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "FieldFormat",
          "package": "PageIO",
          "partial": "Field Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:FieldFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Filter",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Filter",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Filter",
          "package": "PageIO",
          "partial": "Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "FractionDigits",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#FractionDigits",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "FractionDigits",
          "package": "PageIO",
          "partial": "Fraction Digits",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:FractionDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Frame",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Frame",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Frame",
          "package": "PageIO",
          "partial": "Frame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Match",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Match",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Match",
          "package": "PageIO",
          "partial": "Match",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Operator",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Operator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Operator",
          "package": "PageIO",
          "partial": "Operator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "OrderBy",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#OrderBy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "OrderBy",
          "package": "PageIO",
          "partial": "Order By",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:OrderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Page",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Page",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Page",
          "package": "PageIO",
          "partial": "Page",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Pattern",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Pattern",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Pattern",
          "package": "PageIO",
          "partial": "Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Row",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Row",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Row",
          "package": "PageIO",
          "partial": "Row",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Scope",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Scope",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Scope",
          "package": "PageIO",
          "partial": "Scope",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Scope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Sheet",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Sheet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Sheet",
          "package": "PageIO",
          "partial": "Sheet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Sheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Value",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Value",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Value",
          "package": "PageIO",
          "partial": "Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "Variable",
          "package": "PageIO",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#Variable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "Variable",
          "package": "PageIO",
          "partial": "Variable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#t:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "matchSubstring",
          "package": "PageIO",
          "signature": "Value -\u003e Match -\u003e Maybe Int",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#matchSubstring",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "matchSubstring",
          "normalized": "Value-\u003eMatch-\u003eMaybe Int",
          "package": "PageIO",
          "partial": "Substring",
          "signature": "Value-\u003eMatch-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#v:matchSubstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "matches",
          "package": "PageIO",
          "signature": "Value -\u003e Match -\u003e Bool",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#matches",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "matches",
          "normalized": "Value-\u003eMatch-\u003eBool",
          "package": "PageIO",
          "signature": "Value-\u003eMatch-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#v:matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "valToInt",
          "package": "PageIO",
          "signature": "Value -\u003e Int",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#valToInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "valToInt",
          "normalized": "Value-\u003eInt",
          "package": "PageIO",
          "partial": "To Int",
          "signature": "Value-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#v:valToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PageIO.Types",
          "name": "valToIntVal",
          "package": "PageIO",
          "signature": "Value -\u003e Value",
          "source": "http://hackage.haskell.org/package/PageIO/docs/src/Text-PageIO-Types.html#valToIntVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PageIO Types",
          "module": "Text.PageIO.Types",
          "name": "valToIntVal",
          "normalized": "Value-\u003eValue",
          "package": "PageIO",
          "partial": "To Int Val",
          "signature": "Value-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PageIO/docs/Text-PageIO-Types.html#v:valToIntVal"
      }
    }
  ]
]