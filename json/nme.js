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
        "word": "nme"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "NME",
          "package": "nme",
          "source": "src/Text-NME.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "NME",
          "package": "nme",
          "partial": "NME",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "Err",
          "package": "nme",
          "source": "src/Text-NME.html#Err",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "Err",
          "package": "nme",
          "partial": "Err",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#t:Err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "OutputFormat",
          "package": "nme",
          "source": "src/Text-NME.html#OutputFormat",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "OutputFormat",
          "package": "nme",
          "partial": "Output Format",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#t:OutputFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "ProcessOpt",
          "package": "nme",
          "source": "src/Text-NME.html#ProcessOpt",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "ProcessOpt",
          "package": "nme",
          "partial": "Process Opt",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#t:ProcessOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "Err",
          "package": "nme",
          "signature": "Err CInt",
          "source": "src/Text-NME.html#Err",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "Err",
          "package": "nme",
          "partial": "Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:Err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "OutputFormat",
          "package": "nme",
          "signature": "OutputFormat (Ptr OutputFormat)",
          "source": "src/Text-NME.html#OutputFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "OutputFormat",
          "package": "nme",
          "partial": "Output Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:OutputFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "ProcessOpt",
          "package": "nme",
          "signature": "ProcessOpt CInt",
          "source": "src/Text-NME.html#ProcessOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "ProcessOpt",
          "package": "nme",
          "partial": "Process Opt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:ProcessOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "c_nmeProcess",
          "package": "nme",
          "signature": "CString -\u003e CInt -\u003e CString -\u003e CInt -\u003e CInt -\u003e CString -\u003e Ptr OutputFormat -\u003e CInt -\u003e Ptr CString -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO Err",
          "source": "src/Text-NME.html#c_nmeProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "c_nmeProcess",
          "normalized": "CString-\u003eCInt-\u003eCString-\u003eCInt-\u003eCInt-\u003eCString-\u003ePtr OutputFormat-\u003eCInt-\u003ePtr CString-\u003ePtr CInt-\u003ePtr CInt-\u003eIO Err",
          "package": "nme",
          "partial": "Process",
          "signature": "CString-\u003eCInt-\u003eCString-\u003eCInt-\u003eCInt-\u003eCString-\u003ePtr OutputFormat-\u003eCInt-\u003ePtr CString-\u003ePtr CInt-\u003ePtr CInt-\u003eIO Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:c_nmeProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "io_process",
          "package": "nme",
          "signature": "String -\u003e [ProcessOpt] -\u003e String -\u003e Ptr OutputFormat -\u003e Int -\u003e IO (Either Err String)",
          "source": "src/Text-NME.html#io_process",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "io_process",
          "normalized": "String-\u003e[ProcessOpt]-\u003eString-\u003ePtr OutputFormat-\u003eInt-\u003eIO(Either Err String)",
          "package": "nme",
          "signature": "String-\u003e[ProcessOpt]-\u003eString-\u003ePtr OutputFormat-\u003eInt-\u003eIO(Either Err String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:io_process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEErr1stNMEOpt",
          "package": "nme",
          "signature": "Err",
          "source": "src/Text-NME.html#kNMEErr1stNMEOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEErr1stNMEOpt",
          "package": "nme",
          "partial": "NMEErr NMEOpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEErr1stNMEOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEErr1stUser",
          "package": "nme",
          "signature": "Err",
          "source": "src/Text-NME.html#kNMEErr1stUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEErr1stUser",
          "package": "nme",
          "partial": "NMEErr User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEErr1stUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEErrBadMarkup",
          "package": "nme",
          "signature": "Err",
          "source": "src/Text-NME.html#kNMEErrBadMarkup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEErrBadMarkup",
          "package": "nme",
          "partial": "NMEErr Bad Markup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEErrBadMarkup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEErrInternal",
          "package": "nme",
          "signature": "Err",
          "source": "src/Text-NME.html#kNMEErrInternal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEErrInternal",
          "package": "nme",
          "partial": "NMEErr Internal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEErrInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEErrNotEnoughMemory",
          "package": "nme",
          "signature": "Err",
          "source": "src/Text-NME.html#kNMEErrNotEnoughMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEErrNotEnoughMemory",
          "package": "nme",
          "partial": "NMEErr Not Enough Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEErrNotEnoughMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEErrOk",
          "package": "nme",
          "signature": "Err",
          "source": "src/Text-NME.html#kNMEErrOk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEErrOk",
          "package": "nme",
          "partial": "NMEErr Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEErrOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptDefault",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptDefault",
          "package": "nme",
          "partial": "NMEProcess Opt Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptH1Num",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptH1Num",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptH1Num",
          "package": "nme",
          "partial": "NMEProcess Opt Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptH1Num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptH2Num",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptH2Num",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptH2Num",
          "package": "nme",
          "partial": "NMEProcess Opt Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptH2Num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoBold",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoBold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoBold",
          "package": "nme",
          "partial": "NMEProcess Opt No Bold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoBold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoDL",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoDL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoDL",
          "package": "nme",
          "partial": "NMEProcess Opt No DL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoEscape",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoEscape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoEscape",
          "package": "nme",
          "partial": "NMEProcess Opt No Escape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoH1",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoH1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoH1",
          "package": "nme",
          "partial": "NMEProcess Opt No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoH1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoHRule",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoHRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoHRule",
          "package": "nme",
          "partial": "NMEProcess Opt No HRule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoHRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoImage",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoImage",
          "package": "nme",
          "partial": "NMEProcess Opt No Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoIndentedPar",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoIndentedPar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoIndentedPar",
          "package": "nme",
          "partial": "NMEProcess Opt No Indented Par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoIndentedPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoItalic",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoItalic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoItalic",
          "package": "nme",
          "partial": "NMEProcess Opt No Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoItalic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoLink",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoLink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoLink",
          "package": "nme",
          "partial": "NMEProcess Opt No Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoMonospace",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoMonospace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoMonospace",
          "package": "nme",
          "partial": "NMEProcess Opt No Monospace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoMonospace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoMultilinePar",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoMultilinePar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoMultilinePar",
          "package": "nme",
          "partial": "NMEProcess Opt No Multiline Par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoMultilinePar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoPlugin",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoPlugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoPlugin",
          "package": "nme",
          "partial": "NMEProcess Opt No Plugin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoPreAndPost",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoPreAndPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoPreAndPost",
          "package": "nme",
          "partial": "NMEProcess Opt No Pre And Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoPreAndPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoSubSuperscript",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoSubSuperscript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoSubSuperscript",
          "package": "nme",
          "partial": "NMEProcess Opt No Sub Superscript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoSubSuperscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoTable",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoTable",
          "package": "nme",
          "partial": "NMEProcess Opt No Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptNoUnderline",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptNoUnderline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptNoUnderline",
          "package": "nme",
          "partial": "NMEProcess Opt No Underline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptNoUnderline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptVerbatimMono",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptVerbatimMono",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptVerbatimMono",
          "package": "nme",
          "partial": "NMEProcess Opt Verbatim Mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptVerbatimMono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "kNMEProcessOptXRef",
          "package": "nme",
          "signature": "ProcessOpt",
          "source": "src/Text-NME.html#kNMEProcessOptXRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "kNMEProcessOptXRef",
          "package": "nme",
          "partial": "NMEProcess Opt XRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:kNMEProcessOptXRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "outputFormatDebug",
          "package": "nme",
          "signature": "Ptr OutputFormat",
          "source": "src/Text-NME.html#outputFormatDebug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "outputFormatDebug",
          "package": "nme",
          "partial": "Format Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:outputFormatDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "outputFormatHTML",
          "package": "nme",
          "signature": "Ptr OutputFormat",
          "source": "src/Text-NME.html#outputFormatHTML",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "outputFormatHTML",
          "package": "nme",
          "partial": "Format HTML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:outputFormatHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "outputFormatLaTeX",
          "package": "nme",
          "signature": "Ptr OutputFormat",
          "source": "src/Text-NME.html#outputFormatLaTeX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "outputFormatLaTeX",
          "package": "nme",
          "partial": "Format La Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:outputFormatLaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "outputFormatMan",
          "package": "nme",
          "signature": "Ptr OutputFormat",
          "source": "src/Text-NME.html#outputFormatMan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "outputFormatMan",
          "package": "nme",
          "partial": "Format Man",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:outputFormatMan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "outputFormatNME",
          "package": "nme",
          "signature": "Ptr OutputFormat",
          "source": "src/Text-NME.html#outputFormatNME",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "outputFormatNME",
          "package": "nme",
          "partial": "Format NME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:outputFormatNME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "outputFormatNull",
          "package": "nme",
          "signature": "Ptr OutputFormat",
          "source": "src/Text-NME.html#outputFormatNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "outputFormatNull",
          "package": "nme",
          "partial": "Format Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:outputFormatNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "outputFormatRTF",
          "package": "nme",
          "signature": "Ptr OutputFormat",
          "source": "src/Text-NME.html#outputFormatRTF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "outputFormatRTF",
          "package": "nme",
          "partial": "Format RTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:outputFormatRTF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "outputFormatText",
          "package": "nme",
          "signature": "Ptr OutputFormat",
          "source": "src/Text-NME.html#outputFormatText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "outputFormatText",
          "package": "nme",
          "partial": "Format Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:outputFormatText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.NME",
          "name": "outputFormatTextCompact",
          "package": "nme",
          "signature": "Ptr OutputFormat",
          "source": "src/Text-NME.html#outputFormatTextCompact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "outputFormatTextCompact",
          "package": "nme",
          "partial": "Format Text Compact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:outputFormatTextCompact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a string and options, returns Either an error code or a string\n   in the specified format\n\u003c/p\u003e",
          "module": "Text.NME",
          "name": "process",
          "package": "nme",
          "signature": "String -\u003e [ProcessOpt] -\u003e String -\u003e Ptr OutputFormat -\u003e Int -\u003e Either Err String",
          "source": "src/Text-NME.html#process",
          "type": "function"
        },
        "index": {
          "description": "Takes string and options returns Either an error code or string in the specified format",
          "hierarchy": "Text NME",
          "module": "Text.NME",
          "name": "process",
          "normalized": "String-\u003e[ProcessOpt]-\u003eString-\u003ePtr OutputFormat-\u003eInt-\u003eEither Err String",
          "package": "nme",
          "signature": "String-\u003e[ProcessOpt]-\u003eString-\u003ePtr OutputFormat-\u003eInt-\u003eEither Err String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nme/docs/Text-NME.html#v:process"
      }
    }
  ]
]