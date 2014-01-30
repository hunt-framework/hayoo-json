[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003eThis module re-exports everything needed to use HList.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.CommonMain",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-CommonMain.html",
        "fct-type": "module",
        "title": "CommonMain"
      },
      "index": {
        "description": "The HList library This module re-exports everything needed to use HList",
        "hierarchy": "Data HList CommonMain",
        "module": "Data.HList.CommonMain",
        "name": "CommonMain",
        "normalized": "",
        "package": "HList",
        "partial": "Common Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#t:ErrReqdArgNotFound",
      "description": {
        "fct-module": "Data.HList.CommonMain",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Keyword.html#ErrReqdArgNotFound",
        "fct-type": "data",
        "title": "ErrReqdArgNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList CommonMain",
        "module": "Data.HList.CommonMain",
        "name": "ErrReqdArgNotFound",
        "normalized": "",
        "package": "HList",
        "partial": "Err Reqd Arg Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#t:ErrUnexpectedKW",
      "description": {
        "fct-module": "Data.HList.CommonMain",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Keyword.html#ErrUnexpectedKW",
        "fct-type": "data",
        "title": "ErrUnexpectedKW"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList CommonMain",
        "module": "Data.HList.CommonMain",
        "name": "ErrUnexpectedKW",
        "normalized": "",
        "package": "HList",
        "partial": "Err Unexpected KW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#t:IsKeyFN",
      "description": {
        "fct-descr": "\u003cp\u003eAll our keywords must be registered\n\u003c/p\u003e",
        "fct-module": "Data.HList.CommonMain",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#IsKeyFN",
        "fct-type": "class",
        "title": "IsKeyFN"
      },
      "index": {
        "description": "All our keywords must be registered",
        "hierarchy": "Data HList CommonMain",
        "module": "Data.HList.CommonMain",
        "name": "IsKeyFN",
        "normalized": "",
        "package": "HList",
        "partial": "Is Key FN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#t:K",
      "description": {
        "fct-module": "Data.HList.CommonMain",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Keyword.html#K",
        "fct-type": "data",
        "title": "K"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList CommonMain",
        "module": "Data.HList.CommonMain",
        "name": "K",
        "normalized": "",
        "package": "HList",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#t:Kw",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ekw\u003c/code\u003e takes a \u003ccode\u003e\u003ca\u003eHList\u003c/a\u003e\u003c/code\u003e whose first element is a function, and the rest\nof the elements are default values.\nA useful trick is to have a final argument \u003ccode\u003e()\u003c/code\u003e which is not\neaten up by a label (A only takes 1 argument). That way when you supply\nthe () it knows there are no more arguments (?).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edata A = A\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einstance IsKeyFN (A -\u003e a -\u003e b) True\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f A a () = a + 1\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f' = f .*. A .*. 1 .*. HNil\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' A 0 ()\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' ()\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e",
        "fct-module": "Data.HList.CommonMain",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#Kw",
        "fct-type": "class",
        "title": "Kw"
      },
      "index": {
        "description": "kw takes HList whose first element is function and the rest of the elements are default values useful trick is to have final argument which is not eaten up by label only takes argument That way when you supply the it knows there are no more arguments data instance IsKeyFN True let let HNil kw kw",
        "hierarchy": "Data HList CommonMain",
        "module": "Data.HList.CommonMain",
        "name": "Kw",
        "normalized": "",
        "package": "HList",
        "partial": "Kw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#v:kw",
      "description": {
        "fct-module": "Data.HList.CommonMain",
        "fct-package": "HList",
        "fct-signature": "HList (fn : arg_def) -\u003e r",
        "fct-source": "src/Data-HList-Keyword.html#kw",
        "fct-type": "method",
        "title": "kw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList CommonMain",
        "module": "Data.HList.CommonMain",
        "name": "kw",
        "normalized": "HList(a b)-\u003ec",
        "package": "HList",
        "partial": "",
        "signature": "HList(fn arg_def)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#v:recToKW",
      "description": {
        "fct-descr": "\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e into a list that can supply\ndefault arguments for \u003ccode\u003e\u003ca\u003ekw\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA bit of setup:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XQuasiQuotes\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f (_ :: Label \"a\") a (_ :: Label \"b\") b () = a `div` b\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet a = 2; b = 1; f' = f .*. recToKW [pun| a b |]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' ()\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' (Label :: Label \"a\") 10 ()\n\u003c/code\u003e\u003c/strong\u003e10\n\u003c/pre\u003e",
        "fct-module": "Data.HList.CommonMain",
        "fct-package": "HList",
        "fct-signature": "Record a -\u003e HList (HConcatR b)",
        "fct-source": "src/Data-HList-Keyword.html#recToKW",
        "fct-type": "function",
        "title": "recToKW"
      },
      "index": {
        "description": "convert Record into list that can supply default arguments for kw bit of setup set XQuasiQuotes let Label Label div let recToKW pun kw kw Label Label",
        "hierarchy": "Data HList CommonMain",
        "module": "Data.HList.CommonMain",
        "name": "recToKW",
        "normalized": "Record a-\u003eHList(HConcatR b)",
        "package": "HList",
        "partial": "To KW",
        "signature": "Record a-\u003eHList(HConcatR b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eHListFlat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e which pretend\nto be flat data structures. The \u003ccode\u003eData\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eHList\u003c/a\u003e\u003c/code\u003e gives a nested\nstructure.\n\u003c/p\u003e\u003cp\u003eNOTE: these instances do not work with ghc-7.8 because of\n\u003ca\u003ehttp://ghc.haskell.org/trac/ghc/ticket/8486\u003c/a\u003e\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eHList\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe data instance for\n\u003c/p\u003e\u003cpre\u003e a :: HList '[Int, Double, b]\n\u003c/pre\u003e\u003cp\u003eLooks like the same instance for\n\u003c/p\u003e\u003cpre\u003e type T b = (Int, (Double, (b, ())))\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eHListFlat\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Data instance for\n\u003c/p\u003e\u003cpre\u003e a :: Data b =\u003e HListFlat '[Int,Double,b]\n\u003c/pre\u003e\u003cp\u003ewill look like the Data instance for:\n\u003c/p\u003e\u003cpre\u003e data A b = A Int Double b\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eRecord\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e similar ideas apply. An\n\u003c/p\u003e\u003cpre\u003e a :: Record '[ LVPair \"x\" Int, LVPair \"y\" Double ]\n\u003c/pre\u003e\u003cp\u003eshould behave like a:\n\u003c/p\u003e\u003cpre\u003e data A = A { x :: Int, y :: Double } deriving (Data)\n\u003c/pre\u003e\u003cp\u003eMany unsafecoerces are necessary here because the Data class includes type\nparameters \u003ccode\u003ec\u003c/code\u003e that cannot be used in the class context for the instance.\nPerhaps there is another way.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.Data",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-Data.html",
        "fct-type": "module",
        "title": "Data"
      },
      "index": {
        "description": "Data instances for HListFlat and Record which pretend to be flat data structures The Data instance for HList gives nested structure NOTE these instances do not work with ghc-7.8 because of http ghc.haskell.org trac ghc ticket HList The data instance for HList Int Double Looks like the same instance for type Int Double HListFlat The Data instance for Data HListFlat Int Double will look like the Data instance for data Int Double Record For Record similar ideas apply An Record LVPair Int LVPair Double should behave like data Int Double deriving Data Many unsafecoerces are necessary here because the Data class includes type parameters that cannot be used in the class context for the instance Perhaps there is another way",
        "hierarchy": "Data HList Data",
        "module": "Data.HList.Data",
        "name": "Data",
        "normalized": "",
        "package": "HList",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:DataHListFlatCxt",
      "description": {
        "fct-module": "Data.HList.Data",
        "fct-package": "HList",
        "fct-signature": "type",
        "fct-source": "src/Data-HList-Data.html#DataHListFlatCxt",
        "fct-type": "type",
        "title": "DataHListFlatCxt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Data",
        "module": "Data.HList.Data",
        "name": "DataHListFlatCxt",
        "normalized": "",
        "package": "HList",
        "partial": "Data HList Flat Cxt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:DataRecordCxt",
      "description": {
        "fct-module": "Data.HList.Data",
        "fct-package": "HList",
        "fct-signature": "type",
        "fct-source": "src/Data-HList-Data.html#DataRecordCxt",
        "fct-type": "type",
        "title": "DataRecordCxt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Data",
        "module": "Data.HList.Data",
        "name": "DataRecordCxt",
        "normalized": "",
        "package": "HList",
        "partial": "Data Record Cxt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:GfoldlK",
      "description": {
        "fct-descr": "\u003cp\u003ewraps up the first argument to \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.Data",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Data.html#GfoldlK",
        "fct-type": "data",
        "title": "GfoldlK"
      },
      "index": {
        "description": "wraps up the first argument to gfoldl",
        "hierarchy": "Data HList Data",
        "module": "Data.HList.Data",
        "name": "GfoldlK",
        "normalized": "",
        "package": "HList",
        "partial": "Gfoldl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:GunfoldK",
      "description": {
        "fct-module": "Data.HList.Data",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Data.html#GunfoldK",
        "fct-type": "data",
        "title": "GunfoldK"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Data",
        "module": "Data.HList.Data",
        "name": "GunfoldK",
        "normalized": "",
        "package": "HList",
        "partial": "Gunfold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:HListFlat",
      "description": {
        "fct-descr": "\u003cp\u003ethis data type only exists to have Data instance\n\u003c/p\u003e",
        "fct-module": "Data.HList.Data",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-Data.html#HListFlat",
        "fct-type": "newtype",
        "title": "HListFlat"
      },
      "index": {
        "description": "this data type only exists to have Data instance",
        "hierarchy": "Data HList Data",
        "module": "Data.HList.Data",
        "name": "HListFlat",
        "normalized": "",
        "package": "HList",
        "partial": "HList Flat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:RecordLabelsStr",
      "description": {
        "fct-module": "Data.HList.Data",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Data.html#RecordLabelsStr",
        "fct-type": "class",
        "title": "RecordLabelsStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Data",
        "module": "Data.HList.Data",
        "name": "RecordLabelsStr",
        "normalized": "",
        "package": "HList",
        "partial": "Record Labels Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:TypeRepsList",
      "description": {
        "fct-module": "Data.HList.Data",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Data.html#TypeRepsList",
        "fct-type": "class",
        "title": "TypeRepsList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Data",
        "module": "Data.HList.Data",
        "name": "TypeRepsList",
        "normalized": "",
        "package": "HList",
        "partial": "Type Reps List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#v:GfoldlK",
      "description": {
        "fct-module": "Data.HList.Data",
        "fct-package": "HList",
        "fct-signature": "c (d -\u003e b) -\u003e d -\u003e c b) -\u003e GfoldlK c",
        "fct-source": "src/Data-HList-Data.html#GfoldlK",
        "fct-type": "function",
        "title": "GfoldlK"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Data",
        "module": "Data.HList.Data",
        "name": "GfoldlK",
        "normalized": "a(b-\u003ec)-\u003eb-\u003ea c)-\u003eGfoldlK a",
        "package": "HList",
        "partial": "Gfoldl",
        "signature": "c(d-\u003eb)-\u003ed-\u003ec b)-\u003eGfoldlK c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#v:GunfoldK",
      "description": {
        "fct-module": "Data.HList.Data",
        "fct-package": "HList",
        "fct-signature": "c (b -\u003e r) -\u003e c r) -\u003e GunfoldK c",
        "fct-source": "src/Data-HList-Data.html#GunfoldK",
        "fct-type": "function",
        "title": "GunfoldK"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Data",
        "module": "Data.HList.Data",
        "name": "GunfoldK",
        "normalized": "a(b-\u003ec)-\u003ea c)-\u003eGunfoldK a",
        "package": "HList",
        "partial": "Gunfold",
        "signature": "c(b-\u003er)-\u003ec r)-\u003eGunfoldK c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#v:HListFlat",
      "description": {
        "fct-module": "Data.HList.Data",
        "fct-package": "HList",
        "fct-signature": "HListFlat (HList a)",
        "fct-source": "src/Data-HList-Data.html#HListFlat",
        "fct-type": "function",
        "title": "HListFlat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Data",
        "module": "Data.HList.Data",
        "name": "HListFlat",
        "normalized": "",
        "package": "HList",
        "partial": "HList Flat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#v:recordLabelsStr",
      "description": {
        "fct-module": "Data.HList.Data",
        "fct-package": "HList",
        "fct-signature": "Record xs -\u003e [String]",
        "fct-source": "src/Data-HList-Data.html#recordLabelsStr",
        "fct-type": "method",
        "title": "recordLabelsStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Data",
        "module": "Data.HList.Data",
        "name": "recordLabelsStr",
        "normalized": "Record a-\u003e[String]",
        "package": "HList",
        "partial": "Labels Str",
        "signature": "Record xs-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude-Proxy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInjection from algebraic kinds to *\n\u003c/p\u003e\u003cp\u003eAlgebraic kinds like Nat are not populated and we can't use \nvalues of type Nat as function arguments. In contrast, we can use\n(undefined :: Proxy Z) as an argument, as a value proxy.\ndata Proxy (tp :: k) :: *\n\u003c/p\u003e\u003cp\u003ere-exports \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e if it exists\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.FakePrelude.Proxy",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-FakePrelude-Proxy.html",
        "fct-type": "module",
        "title": "Proxy"
      },
      "index": {
        "description": "Injection from algebraic kinds to Algebraic kinds like Nat are not populated and we can use values of type Nat as function arguments In contrast we can use undefined Proxy as an argument as value proxy data Proxy tp re-exports Proxy if it exists",
        "hierarchy": "Data HList FakePrelude Proxy",
        "module": "Data.HList.FakePrelude.Proxy",
        "name": "Proxy",
        "normalized": "",
        "package": "HList",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude-Proxy.html#t:Proxy",
      "description": {
        "fct-module": "Data.HList.FakePrelude.Proxy",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-FakePrelude-Proxy.html#Proxy",
        "fct-type": "data",
        "title": "Proxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude Proxy",
        "module": "Data.HList.FakePrelude.Proxy",
        "name": "Proxy",
        "normalized": "",
        "package": "HList",
        "partial": "Proxy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude-Proxy.html#v:proxy",
      "description": {
        "fct-module": "Data.HList.FakePrelude.Proxy",
        "fct-package": "HList",
        "fct-signature": "Proxy tp",
        "fct-source": "src/Data-HList-FakePrelude-Proxy.html#proxy",
        "fct-type": "function",
        "title": "proxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude Proxy",
        "module": "Data.HList.FakePrelude.Proxy",
        "name": "proxy",
        "normalized": "",
        "package": "HList",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eSome very basic technology for faking dependent types in Haskell.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-FakePrelude.html",
        "fct-type": "module",
        "title": "FakePrelude"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Some very basic technology for faking dependent types in Haskell",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "FakePrelude",
        "normalized": "",
        "package": "HList",
        "partial": "Fake Prelude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:Apply",
      "description": {
        "fct-descr": "\u003cp\u003esimpler/weaker version where type information only propagates forward\n with this one. \u003ccode\u003eapp\u003c/code\u003e defined below, is more complicated / verbose to define,\n but it offers better type inference. Most uses have been converted to\n \u003ccode\u003eapp\u003c/code\u003e, so there is not much that can be done with \u003ccode\u003e\u003ca\u003eApply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-FakePrelude.html#Apply",
        "fct-type": "class",
        "title": "Apply"
      },
      "index": {
        "description": "simpler weaker version where type information only propagates forward with this one app defined below is more complicated verbose to define but it offers better type inference Most uses have been converted to app so there is not much that can be done with Apply",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "Apply",
        "normalized": "",
        "package": "HList",
        "partial": "Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:ApplyAB",
      "description": {
        "fct-descr": "\u003cp\u003eNo constraints on result and argument types\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-FakePrelude.html#ApplyAB",
        "fct-type": "class",
        "title": "ApplyAB"
      },
      "index": {
        "description": "No constraints on result and argument types",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "ApplyAB",
        "normalized": "",
        "package": "HList",
        "partial": "Apply AB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:Comp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eapp Comp (f,g) = g . f\u003c/code\u003e. Works like:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eapplyAB Comp (succ, pred) 'a'\n\u003c/code\u003e\u003c/strong\u003e'a'\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eapplyAB Comp (toEnum :: Int -\u003e Char, fromEnum) 10\n\u003c/code\u003e\u003c/strong\u003e10\n\u003c/pre\u003e\u003cp\u003eNote that defaulting will sometimes give you the wrong thing\n\u003c/p\u003e\u003cpre\u003e used to work (with associated types calculating result/argument types)\n \u003e\u003e\u003e applyAB Comp (fromEnum, toEnum) 'a'\n *** Exception: Prelude.Enum.().toEnum: bad argument\n\u003c/pre\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-FakePrelude.html#Comp",
        "fct-type": "data",
        "title": "Comp"
      },
      "index": {
        "description": "app Comp Works like applyAB Comp succ pred applyAB Comp toEnum Int Char fromEnum Note that defaulting will sometimes give you the wrong thing used to work with associated types calculating result argument types applyAB Comp fromEnum toEnum Exception Prelude.Enum toEnum bad argument",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "Comp",
        "normalized": "",
        "package": "HList",
        "partial": "Comp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:Fail",
      "description": {
        "fct-descr": "\u003cp\u003eA class without instances for explicit failure\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-FakePrelude.html#Fail",
        "fct-type": "class",
        "title": "Fail"
      },
      "index": {
        "description": "class without instances for explicit failure",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "Fail",
        "normalized": "",
        "package": "HList",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:Fun",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-FakePrelude.html#Fun",
        "fct-type": "data",
        "title": "Fun"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "Fun",
        "normalized": "",
        "package": "HList",
        "partial": "Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:Fun-39-",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eFun\u003c/a\u003e\u003c/code\u003e. The only difference here is that the argument\ntype is calculated from the result type.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet rd = Fun' read :: Fun' Read String\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t applyAB rd\n\u003c/code\u003e\u003c/strong\u003eapplyAB rd :: Read b =\u003e [Char] -\u003e b\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet fromJust' = Fun' (\\(Just a) -\u003e a) :: Fun' '[] Maybe\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t applyAB fromJust'\n\u003c/code\u003e\u003c/strong\u003eapplyAB fromJust' :: Maybe b -\u003e b\n\u003c/pre\u003e\u003cp\u003eNote this use of Fun' means we don't have to get the b out of \u003ccode\u003eMaybe b\u003c/code\u003e,\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-FakePrelude.html#Fun%27",
        "fct-type": "data",
        "title": "Fun'"
      },
      "index": {
        "description": "see Fun The only difference here is that the argument type is calculated from the result type let rd Fun read Fun Read String applyAB rd applyAB rd Read Char let fromJust Fun Just Fun Maybe applyAB fromJust applyAB fromJust Maybe Note this use of Fun means we don have to get the out of Maybe",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "Fun'",
        "normalized": "",
        "package": "HList",
        "partial": "Fun'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:FunApp",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "FunApp",
        "fct-type": "function",
        "title": "FunApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "FunApp",
        "normalized": "",
        "package": "HList",
        "partial": "Fun App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:FunCxt",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "FunCxt",
        "fct-type": "function",
        "title": "FunCxt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "FunCxt",
        "normalized": "",
        "package": "HList",
        "partial": "Fun Cxt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HAnd",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HAnd",
        "fct-type": "function",
        "title": "HAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HAnd",
        "normalized": "",
        "package": "HList",
        "partial": "HAnd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HBoolEQ",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HBoolEQ",
        "fct-type": "function",
        "title": "HBoolEQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HBoolEQ",
        "normalized": "",
        "package": "HList",
        "partial": "HBool EQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HComp",
      "description": {
        "fct-descr": "\u003cp\u003eCompose two instances of \u003ccode\u003e\u003ca\u003eApplyAB\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eapplyAB (HComp HRead HShow) (5::Double) :: Double\n\u003c/code\u003e\u003c/strong\u003e5.0\n\u003c/pre\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-FakePrelude.html#HComp",
        "fct-type": "data",
        "title": "HComp"
      },
      "index": {
        "description": "Compose two instances of ApplyAB applyAB HComp HRead HShow Double Double",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HComp",
        "normalized": "",
        "package": "HList",
        "partial": "HComp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HCond",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-FakePrelude.html#HCond",
        "fct-type": "class",
        "title": "HCond"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HCond",
        "normalized": "",
        "package": "HList",
        "partial": "HCond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HEq",
      "description": {
        "fct-descr": "\u003cp\u003eWe have to use Functional dependencies for now,\n for the sake of the generic equality.\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-FakePrelude.html#HEq",
        "fct-type": "class",
        "title": "HEq"
      },
      "index": {
        "description": "We have to use Functional dependencies for now for the sake of the generic equality",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HEq",
        "normalized": "",
        "package": "HList",
        "partial": "HEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HFlip",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-FakePrelude.html#HFlip",
        "fct-type": "data",
        "title": "HFlip"
      },
      "index": {
        "description": "flip",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HFlip",
        "normalized": "",
        "package": "HList",
        "partial": "HFlip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HJust",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-FakePrelude.html#HJust",
        "fct-type": "newtype",
        "title": "HJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HJust",
        "normalized": "",
        "package": "HList",
        "partial": "HJust",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HLt",
      "description": {
        "fct-descr": "\u003cp\u003eLess than\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HLt",
        "fct-type": "function",
        "title": "HLt"
      },
      "index": {
        "description": "Less than",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HLt",
        "normalized": "",
        "package": "HList",
        "partial": "HLt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HNat",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type to be lifted to the type level\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-FakePrelude.html#HNat",
        "fct-type": "data",
        "title": "HNat"
      },
      "index": {
        "description": "The data type to be lifted to the type level",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HNat",
        "normalized": "",
        "package": "HList",
        "partial": "HNat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HNat2Integral",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-FakePrelude.html#HNat2Integral",
        "fct-type": "class",
        "title": "HNat2Integral"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HNat2Integral",
        "normalized": "",
        "package": "HList",
        "partial": "HNat Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HNatEq",
      "description": {
        "fct-descr": "\u003cp\u003eEquality on natural numbers\n (eventually to be subsumed by the universal polykinded HEq)\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HNatEq",
        "fct-type": "function",
        "title": "HNatEq"
      },
      "index": {
        "description": "Equality on natural numbers eventually to be subsumed by the universal polykinded HEq",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HNatEq",
        "normalized": "",
        "package": "HList",
        "partial": "HNat Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HNothing",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-FakePrelude.html#HNothing",
        "fct-type": "data",
        "title": "HNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HNothing",
        "normalized": "",
        "package": "HList",
        "partial": "HNothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HOr",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HOr",
        "fct-type": "function",
        "title": "HOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HOr",
        "normalized": "",
        "package": "HList",
        "partial": "HOr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HPrint",
      "description": {
        "fct-descr": "\u003cp\u003eprint. An alternative implementation could be:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hPrint = Fun print :: Fun Show (IO ())\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eThis produces:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t applyAB hPrint\n\u003c/code\u003e\u003c/strong\u003eapplyAB hPrint :: Show a =\u003e a -\u003e IO ()\n\u003c/pre\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-FakePrelude.html#HPrint",
        "fct-type": "data",
        "title": "HPrint"
      },
      "index": {
        "description": "print An alternative implementation could be let hPrint Fun print Fun Show IO This produces applyAB hPrint applyAB hPrint Show IO",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HPrint",
        "normalized": "",
        "package": "HList",
        "partial": "HPrint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HRead",
      "description": {
        "fct-descr": "\u003cp\u003eread\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eapplyAB HRead \"5.0\" :: Double\n\u003c/code\u003e\u003c/strong\u003e5.0\n\u003c/pre\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-FakePrelude.html#HRead",
        "fct-type": "data",
        "title": "HRead"
      },
      "index": {
        "description": "read applyAB HRead Double",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HRead",
        "normalized": "",
        "package": "HList",
        "partial": "HRead",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HSeq",
      "description": {
        "fct-descr": "\u003cp\u003e((a,b) -\u003e f a \u003e\u003e b)\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-FakePrelude.html#HSeq",
        "fct-type": "newtype",
        "title": "HSeq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HSeq",
        "normalized": "",
        "package": "HList",
        "partial": "HSeq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HShow",
      "description": {
        "fct-descr": "\u003cp\u003eshow\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-FakePrelude.html#HShow",
        "fct-type": "data",
        "title": "HShow"
      },
      "index": {
        "description": "show",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HShow",
        "normalized": "",
        "package": "HList",
        "partial": "HShow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eA special \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e for record labels, polykinded\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-FakePrelude.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "special Proxy for record labels polykinded",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "Label",
        "normalized": "",
        "package": "HList",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:ShowLabel",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-FakePrelude.html#ShowLabel",
        "fct-type": "class",
        "title": "ShowLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "ShowLabel",
        "normalized": "",
        "package": "HList",
        "partial": "Show Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:Comp",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Comp",
        "fct-source": "src/Data-HList-FakePrelude.html#Comp",
        "fct-type": "function",
        "title": "Comp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "Comp",
        "normalized": "",
        "package": "HList",
        "partial": "Comp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:Fun",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "a -\u003e FunApp getb a)",
        "fct-source": "src/Data-HList-FakePrelude.html#Fun",
        "fct-type": "function",
        "title": "Fun"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "Fun",
        "normalized": "a-\u003eFunApp b a)",
        "package": "HList",
        "partial": "Fun",
        "signature": "a-\u003eFunApp getb a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:Fun-39-",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "FunApp geta b -\u003e b)",
        "fct-source": "src/Data-HList-FakePrelude.html#Fun%27",
        "fct-type": "function",
        "title": "Fun'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "Fun'",
        "normalized": "FunApp a b-\u003eb)",
        "package": "HList",
        "partial": "Fun'",
        "signature": "FunApp geta b-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HComp",
      "description": {
        "fct-descr": "\u003cpre\u003eg . f\u003c/pre\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HComp g f",
        "fct-source": "src/Data-HList-FakePrelude.html#HComp",
        "fct-type": "function",
        "title": "HComp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HComp",
        "normalized": "",
        "package": "HList",
        "partial": "HComp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HFlip",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HFlip",
        "fct-source": "src/Data-HList-FakePrelude.html#HFlip",
        "fct-type": "function",
        "title": "HFlip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HFlip",
        "normalized": "",
        "package": "HList",
        "partial": "HFlip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HJust",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HJust x",
        "fct-source": "src/Data-HList-FakePrelude.html#HJust",
        "fct-type": "function",
        "title": "HJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HJust",
        "normalized": "",
        "package": "HList",
        "partial": "HJust",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HNothing",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HNothing",
        "fct-source": "src/Data-HList-FakePrelude.html#HNothing",
        "fct-type": "function",
        "title": "HNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HNothing",
        "normalized": "",
        "package": "HList",
        "partial": "HNothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HPrint",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HPrint",
        "fct-source": "src/Data-HList-FakePrelude.html#HPrint",
        "fct-type": "function",
        "title": "HPrint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HPrint",
        "normalized": "",
        "package": "HList",
        "partial": "HPrint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HRead",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HRead",
        "fct-source": "src/Data-HList-FakePrelude.html#HRead",
        "fct-type": "function",
        "title": "HRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HRead",
        "normalized": "",
        "package": "HList",
        "partial": "HRead",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HSeq",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HSeq x",
        "fct-source": "src/Data-HList-FakePrelude.html#HSeq",
        "fct-type": "function",
        "title": "HSeq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HSeq",
        "normalized": "",
        "package": "HList",
        "partial": "HSeq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HShow",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HShow",
        "fct-source": "src/Data-HList-FakePrelude.html#HShow",
        "fct-type": "function",
        "title": "HShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HShow",
        "normalized": "",
        "package": "HList",
        "partial": "HShow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HSucc",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HSucc HNat",
        "fct-source": "src/Data-HList-FakePrelude.html#HNat",
        "fct-type": "function",
        "title": "HSucc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HSucc",
        "normalized": "",
        "package": "HList",
        "partial": "HSucc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HZero",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HZero",
        "fct-source": "src/Data-HList-FakePrelude.html#HNat",
        "fct-type": "function",
        "title": "HZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "HZero",
        "normalized": "",
        "package": "HList",
        "partial": "HZero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:Label",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Label",
        "fct-source": "src/Data-HList-FakePrelude.html#Label",
        "fct-type": "function",
        "title": "Label"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "Label",
        "normalized": "",
        "package": "HList",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:apply",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "f -\u003e a -\u003e ApplyR f a",
        "fct-source": "src/Data-HList-FakePrelude.html#apply",
        "fct-type": "method",
        "title": "apply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "apply",
        "normalized": "a-\u003eb-\u003eApplyR a b",
        "package": "HList",
        "partial": "",
        "signature": "f-\u003ea-\u003eApplyR f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:applyAB",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "f -\u003e a -\u003e b",
        "fct-source": "src/Data-HList-FakePrelude.html#applyAB",
        "fct-type": "method",
        "title": "applyAB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "applyAB",
        "normalized": "a-\u003eb-\u003ec",
        "package": "HList",
        "partial": "AB",
        "signature": "f-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hAnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edemote\u003c/code\u003e to values\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Proxy t1 -\u003e Proxy t2 -\u003e Proxy (HAnd t1 t2)",
        "fct-source": "src/Data-HList-FakePrelude.html#hAnd",
        "fct-type": "function",
        "title": "hAnd"
      },
      "index": {
        "description": "demote to values",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "hAnd",
        "normalized": "Proxy a-\u003eProxy a-\u003eProxy(HAnd a a)",
        "package": "HList",
        "partial": "And",
        "signature": "Proxy t-\u003eProxy t-\u003eProxy(HAnd t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hCond",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Proxy t -\u003e x -\u003e y -\u003e z",
        "fct-source": "src/Data-HList-FakePrelude.html#hCond",
        "fct-type": "method",
        "title": "hCond"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "hCond",
        "normalized": "Proxy a-\u003eb-\u003ec-\u003ed",
        "package": "HList",
        "partial": "Cond",
        "signature": "Proxy t-\u003ex-\u003ey-\u003ez"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hEq",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "x -\u003e y -\u003e Proxy b",
        "fct-source": "src/Data-HList-FakePrelude.html#hEq",
        "fct-type": "function",
        "title": "hEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "hEq",
        "normalized": "a-\u003eb-\u003eProxy c",
        "package": "HList",
        "partial": "Eq",
        "signature": "x-\u003ey-\u003eProxy b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hFalse",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Proxy False",
        "fct-source": "src/Data-HList-FakePrelude.html#hFalse",
        "fct-type": "function",
        "title": "hFalse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "hFalse",
        "normalized": "",
        "package": "HList",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hLt",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Proxy x -\u003e Proxy y -\u003e Proxy (HLt x y)",
        "fct-source": "src/Data-HList-FakePrelude.html#hLt",
        "fct-type": "function",
        "title": "hLt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "hLt",
        "normalized": "Proxy a-\u003eProxy b-\u003eProxy(HLt a b)",
        "package": "HList",
        "partial": "Lt",
        "signature": "Proxy x-\u003eProxy y-\u003eProxy(HLt x y)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hNat2Integral",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Proxy n -\u003e i",
        "fct-source": "src/Data-HList-FakePrelude.html#hNat2Integral",
        "fct-type": "method",
        "title": "hNat2Integral"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "hNat2Integral",
        "normalized": "Proxy a-\u003eb",
        "package": "HList",
        "partial": "Nat Integral",
        "signature": "Proxy n-\u003ei"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hOr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edemote\u003c/code\u003e to values\n\u003c/p\u003e",
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Proxy t1 -\u003e Proxy t2 -\u003e Proxy (HOr t1 t2)",
        "fct-source": "src/Data-HList-FakePrelude.html#hOr",
        "fct-type": "function",
        "title": "hOr"
      },
      "index": {
        "description": "demote to values",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "hOr",
        "normalized": "Proxy a-\u003eProxy a-\u003eProxy(HOr a a)",
        "package": "HList",
        "partial": "Or",
        "signature": "Proxy t-\u003eProxy t-\u003eProxy(HOr t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hPred",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Proxy (HSucc n) -\u003e Proxy n",
        "fct-source": "src/Data-HList-FakePrelude.html#hPred",
        "fct-type": "function",
        "title": "hPred"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "hPred",
        "normalized": "Proxy(HSucc a)-\u003eProxy a",
        "package": "HList",
        "partial": "Pred",
        "signature": "Proxy(HSucc n)-\u003eProxy n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hSucc",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "HNat) -\u003e Proxy (HSucc n)",
        "fct-source": "src/Data-HList-FakePrelude.html#hSucc",
        "fct-type": "function",
        "title": "hSucc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "hSucc",
        "normalized": "HNat)-\u003eProxy(HSucc a)",
        "package": "HList",
        "partial": "Succ",
        "signature": "HNat)-\u003eProxy(HSucc n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hTrue",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Proxy True",
        "fct-source": "src/Data-HList-FakePrelude.html#hTrue",
        "fct-type": "function",
        "title": "hTrue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "hTrue",
        "normalized": "",
        "package": "HList",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hZero",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Proxy HZero",
        "fct-source": "src/Data-HList-FakePrelude.html#hZero",
        "fct-type": "function",
        "title": "hZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "hZero",
        "normalized": "",
        "package": "HList",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:labelToProxy",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Label l -\u003e Proxy l",
        "fct-source": "src/Data-HList-FakePrelude.html#labelToProxy",
        "fct-type": "function",
        "title": "labelToProxy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "labelToProxy",
        "normalized": "Label a-\u003eProxy a",
        "package": "HList",
        "partial": "To Proxy",
        "signature": "Label l-\u003eProxy l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:showLabel",
      "description": {
        "fct-module": "Data.HList.FakePrelude",
        "fct-package": "HList",
        "fct-signature": "Label l -\u003e String",
        "fct-source": "src/Data-HList-FakePrelude.html#showLabel",
        "fct-type": "method",
        "title": "showLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList FakePrelude",
        "module": "Data.HList.FakePrelude",
        "name": "showLabel",
        "normalized": "Label a-\u003eString",
        "package": "HList",
        "partial": "Label",
        "signature": "Label l-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eArray-like access to HLists.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-HArray.html",
        "fct-type": "module",
        "title": "HArray"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Array-like access to HLists",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "HArray",
        "normalized": "",
        "package": "HList",
        "partial": "HArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:FHLookupByHNat",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-HArray.html#FHLookupByHNat",
        "fct-type": "newtype",
        "title": "FHLookupByHNat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "FHLookupByHNat",
        "normalized": "",
        "package": "HList",
        "partial": "FHLookup By HNat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:FHUProj",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-HArray.html#FHUProj",
        "fct-type": "data",
        "title": "FHUProj"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "FHUProj",
        "normalized": "",
        "package": "HList",
        "partial": "FHUProj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HDeleteAtHNat",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HArray.html#HDeleteAtHNat",
        "fct-type": "class",
        "title": "HDeleteAtHNat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "HDeleteAtHNat",
        "normalized": "",
        "package": "HList",
        "partial": "HDelete At HNat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HLookupByHNat",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HArray.html#HLookupByHNat",
        "fct-type": "class",
        "title": "HLookupByHNat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "HLookupByHNat",
        "normalized": "",
        "package": "HList",
        "partial": "HLookup By HNat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HProjectAwayByHNatsCtx",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "type",
        "fct-source": "src/Data-HList-HArray.html#HProjectAwayByHNatsCtx",
        "fct-type": "type",
        "title": "HProjectAwayByHNatsCtx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "HProjectAwayByHNatsCtx",
        "normalized": "",
        "package": "HList",
        "partial": "HProject Away By HNats Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HProjectAwayByHNatsR",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "type",
        "fct-source": "src/Data-HList-HArray.html#HProjectAwayByHNatsR",
        "fct-type": "type",
        "title": "HProjectAwayByHNatsR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "HProjectAwayByHNatsR",
        "normalized": "",
        "package": "HList",
        "partial": "HProject Away By HNats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HProjectByHNatsCtx",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "type",
        "fct-source": "src/Data-HList-HArray.html#HProjectByHNatsCtx",
        "fct-type": "type",
        "title": "HProjectByHNatsCtx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "HProjectByHNatsCtx",
        "normalized": "",
        "package": "HList",
        "partial": "HProject By HNats Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HProjectByHNatsR",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "type",
        "fct-source": "src/Data-HList-HArray.html#HProjectByHNatsR",
        "fct-type": "type",
        "title": "HProjectByHNatsR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "HProjectByHNatsR",
        "normalized": "",
        "package": "HList",
        "partial": "HProject By HNats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HUpdateAtHNat",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HArray.html#HUpdateAtHNat",
        "fct-type": "class",
        "title": "HUpdateAtHNat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "HUpdateAtHNat",
        "normalized": "",
        "package": "HList",
        "partial": "HUpdate At HNat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:KMember",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "KMember",
        "fct-type": "function",
        "title": "KMember"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "KMember",
        "normalized": "",
        "package": "HList",
        "partial": "KMember",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:FHLookupByHNat",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "FHLookupByHNat (HList l)",
        "fct-source": "src/Data-HList-HArray.html#FHLookupByHNat",
        "fct-type": "function",
        "title": "FHLookupByHNat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "FHLookupByHNat",
        "normalized": "",
        "package": "HList",
        "partial": "FHLookup By HNat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:FHUProj",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "FHUProj",
        "fct-source": "src/Data-HList-HArray.html#FHUProj",
        "fct-type": "function",
        "title": "FHUProj"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "FHUProj",
        "normalized": "",
        "package": "HList",
        "partial": "FHUProj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hDeleteAtHNat",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "Proxy n -\u003e HList l -\u003e HList (HDeleteAtHNatR n l)",
        "fct-source": "src/Data-HList-HArray.html#hDeleteAtHNat",
        "fct-type": "method",
        "title": "hDeleteAtHNat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "hDeleteAtHNat",
        "normalized": "Proxy a-\u003eHList b-\u003eHList(HDeleteAtHNatR a b)",
        "package": "HList",
        "partial": "Delete At HNat",
        "signature": "Proxy n-\u003eHList l-\u003eHList(HDeleteAtHNatR n l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hLookupByHNat",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "Proxy n -\u003e HList l -\u003e HLookupByHNatR n l",
        "fct-source": "src/Data-HList-HArray.html#hLookupByHNat",
        "fct-type": "method",
        "title": "hLookupByHNat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "hLookupByHNat",
        "normalized": "Proxy a-\u003eHList b-\u003eHLookupByHNatR a b",
        "package": "HList",
        "partial": "Lookup By HNat",
        "signature": "Proxy n-\u003eHList l-\u003eHLookupByHNatR n l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hProjectAwayByHNats",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "Proxy [HNat] ns -\u003e t -\u003e HList (HUnfold (FHUProj False ns) (t, Proxy HNat HZero))",
        "fct-source": "src/Data-HList-HArray.html#hProjectAwayByHNats",
        "fct-type": "function",
        "title": "hProjectAwayByHNats"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "hProjectAwayByHNats",
        "normalized": "Proxy[HNat]a-\u003eb-\u003eHList(HUnfold(FHUProj False a)(b,Proxy HNat HZero))",
        "package": "HList",
        "partial": "Project Away By HNats",
        "signature": "Proxy[HNat]ns-\u003et-\u003eHList(HUnfold(FHUProj False ns)(t,Proxy HNat HZero))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hProjectByHNats",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "Proxy [HNat] ns -\u003e t -\u003e HList (HUnfold (FHUProj True ns) (t, Proxy HNat HZero))",
        "fct-source": "src/Data-HList-HArray.html#hProjectByHNats",
        "fct-type": "function",
        "title": "hProjectByHNats"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "hProjectByHNats",
        "normalized": "Proxy[HNat]a-\u003eb-\u003eHList(HUnfold(FHUProj True a)(b,Proxy HNat HZero))",
        "package": "HList",
        "partial": "Project By HNats",
        "signature": "Proxy[HNat]ns-\u003et-\u003eHList(HUnfold(FHUProj True ns)(t,Proxy HNat HZero))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hProjectByHNats-39-",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "HList as' -\u003e HList l -\u003e HList bs'",
        "fct-source": "src/Data-HList-HArray.html#hProjectByHNats%27",
        "fct-type": "function",
        "title": "hProjectByHNats'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "hProjectByHNats'",
        "normalized": "HList a-\u003eHList b-\u003eHList c",
        "package": "HList",
        "partial": "Project By HNats'",
        "signature": "HList as'-\u003eHList l-\u003eHList bs'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hSplitByHNats",
      "description": {
        "fct-descr": "\u003cp\u003eSplitting an array according to indices\n\u003c/p\u003e",
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "Proxy [HNat] ns -\u003e t -\u003e (HList (HUnfold (FHUProj True ns) (t, Proxy HNat HZero)), HList (HUnfold (FHUProj False ns) (t, Proxy HNat HZero)))",
        "fct-source": "src/Data-HList-HArray.html#hSplitByHNats",
        "fct-type": "function",
        "title": "hSplitByHNats"
      },
      "index": {
        "description": "Splitting an array according to indices",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "hSplitByHNats",
        "normalized": "Proxy[HNat]a-\u003eb-\u003e(HList(HUnfold(FHUProj True a)(b,Proxy HNat HZero)),HList(HUnfold(FHUProj False a)(b,Proxy HNat HZero)))",
        "package": "HList",
        "partial": "Split By HNats",
        "signature": "Proxy[HNat]ns-\u003et-\u003e(HList(HUnfold(FHUProj True ns)(t,Proxy HNat HZero)),HList(HUnfold(FHUProj False ns)(t,Proxy HNat HZero)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hUpdateAtHNat",
      "description": {
        "fct-module": "Data.HList.HArray",
        "fct-package": "HList",
        "fct-signature": "Proxy n -\u003e e -\u003e HList l -\u003e HList (HUpdateAtHNatR n e l)",
        "fct-source": "src/Data-HList-HArray.html#hUpdateAtHNat",
        "fct-type": "method",
        "title": "hUpdateAtHNat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HArray",
        "module": "Data.HList.HArray",
        "name": "hUpdateAtHNat",
        "normalized": "Proxy a-\u003eb-\u003eHList c-\u003eHList(HUpdateAtHNatR a b c)",
        "package": "HList",
        "partial": "Update At HNat",
        "signature": "Proxy n-\u003ee-\u003eHList l-\u003eHList(HUpdateAtHNatR n e l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eBasic declarations for typeful heterogeneous lists.\n\u003c/p\u003e\u003cp\u003eExcuse the unstructured haddocks: while there are many declarations here\n   some are alternative implementations should be grouped, and the definitions\n   here are analgous to many list functions in the \u003ca\u003ePrelude\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-HList.html",
        "fct-type": "module",
        "title": "HList"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Basic declarations for typeful heterogeneous lists Excuse the unstructured haddocks while there are many declarations here some are alternative implementations should be grouped and the definitions here are analgous to many list functions in the Prelude",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HList",
        "normalized": "",
        "package": "HList",
        "partial": "HList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:ConvHList",
      "description": {
        "fct-descr": "\u003cp\u003econversion between GADT (\u003ccode\u003e\u003ca\u003eHList\u003c/a\u003e\u003c/code\u003e) and ADT (\u003ccode\u003e\u003ca\u003eHNil'\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eHCons'\u003c/a\u003e\u003c/code\u003e)\n representations\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#ConvHList",
        "fct-type": "class",
        "title": "ConvHList"
      },
      "index": {
        "description": "conversion between GADT HList and ADT HNil HCons representations",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "ConvHList",
        "normalized": "",
        "package": "HList",
        "partial": "Conv HList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:FHCons",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-HList.html#FHCons",
        "fct-type": "data",
        "title": "FHCons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "FHCons",
        "normalized": "",
        "package": "HList",
        "partial": "FHCons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:FromHJust",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#FromHJust",
        "fct-type": "class",
        "title": "FromHJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "FromHJust",
        "normalized": "",
        "package": "HList",
        "partial": "From HJust",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HAddTag",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-HList.html#HAddTag",
        "fct-type": "data",
        "title": "HAddTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HAddTag",
        "normalized": "",
        "package": "HList",
        "partial": "HAdd Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HAppendList",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HAppendList",
        "fct-type": "function",
        "title": "HAppendList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HAppendList",
        "normalized": "",
        "package": "HList",
        "partial": "HAppend List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HBuild-39-",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HBuild%27",
        "fct-type": "class",
        "title": "HBuild'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HBuild'",
        "normalized": "",
        "package": "HList",
        "partial": "HBuild'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HConcat",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e but for HLists of HLists.\n\u003c/p\u003e\u003cp\u003eWorks in ghci... puzzling as what is different in doctest (it isn't\n\u003ccode\u003e-XExtendedDefaultRules\u003c/code\u003e)\n\u003c/p\u003e\u003cpre\u003e hConcat $ hBuild (hBuild 1 2 3) (hBuild 'a' \"abc\")\n\u003c/pre\u003e\u003cp\u003eH[1, 2, 3, \u003ccode\u003ea\u003c/code\u003e, \u003ca\u003eabc\u003c/a\u003e]\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HConcat",
        "fct-type": "class",
        "title": "HConcat"
      },
      "index": {
        "description": "Like concat but for HLists of HLists Works in ghci puzzling as what is different in doctest it isn XExtendedDefaultRules hConcat hBuild hBuild hBuild abc abc",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HConcat",
        "normalized": "",
        "package": "HList",
        "partial": "HConcat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HCons-39-",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-HList.html#HCons%27",
        "fct-type": "data",
        "title": "HCons'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HCons'",
        "normalized": "",
        "package": "HList",
        "partial": "HCons'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HFind",
      "description": {
        "fct-descr": "\u003cp\u003eIt is a pure type-level operation\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HFind",
        "fct-type": "class",
        "title": "HFind"
      },
      "index": {
        "description": "It is pure type-level operation",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HFind",
        "normalized": "",
        "package": "HList",
        "partial": "HFind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HFind-39-",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HFind%27",
        "fct-type": "class",
        "title": "HFind'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HFind'",
        "normalized": "",
        "package": "HList",
        "partial": "HFind'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HFoldl",
      "description": {
        "fct-descr": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehFoldl (uncurry $ flip (:)) [] (1 `HCons` 2 `HCons` HNil)\n\u003c/code\u003e\u003c/strong\u003e[2,1]\n\u003c/pre\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HFoldl",
        "fct-type": "class",
        "title": "HFoldl"
      },
      "index": {
        "description": "like foldl hFoldl uncurry flip HCons HCons HNil",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HFoldl",
        "normalized": "",
        "package": "HList",
        "partial": "HFoldl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HFoldr",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HFoldr",
        "fct-type": "class",
        "title": "HFoldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HFoldr",
        "normalized": "",
        "package": "HList",
        "partial": "HFoldr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HFoldr1",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HFoldr1",
        "fct-type": "class",
        "title": "HFoldr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HFoldr1",
        "normalized": "",
        "package": "HList",
        "partial": "HFoldr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HFromJust",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-HList.html#HFromJust",
        "fct-type": "data",
        "title": "HFromJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HFromJust",
        "normalized": "",
        "package": "HList",
        "partial": "HFrom Just",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HLength",
      "description": {
        "fct-descr": "\u003cp\u003eLength\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HLength",
        "fct-type": "function",
        "title": "HLength"
      },
      "index": {
        "description": "Length",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HLength",
        "normalized": "",
        "package": "HList",
        "partial": "HLength",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HList",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-HList.html#HList",
        "fct-type": "data",
        "title": "HList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HList",
        "normalized": "",
        "package": "HList",
        "partial": "HList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HList2List",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003ehMapOut Id\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HList2List",
        "fct-type": "class",
        "title": "HList2List"
      },
      "index": {
        "description": "Same as hMapOut Id",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HList2List",
        "normalized": "",
        "package": "HList",
        "partial": "HList List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMap",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-HList.html#HMap",
        "fct-type": "newtype",
        "title": "HMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HMap",
        "normalized": "",
        "package": "HList",
        "partial": "HMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMapAux",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HMapAux",
        "fct-type": "class",
        "title": "HMapAux"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HMapAux",
        "normalized": "",
        "package": "HList",
        "partial": "HMap Aux",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMapCxt",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "type",
        "fct-source": "src/Data-HList-HList.html#HMapCxt",
        "fct-type": "type",
        "title": "HMapCxt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HMapCxt",
        "normalized": "",
        "package": "HList",
        "partial": "HMap Cxt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMapOut",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "type",
        "fct-source": "src/Data-HList-HList.html#HMapOut",
        "fct-type": "type",
        "title": "HMapOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HMapOut",
        "normalized": "",
        "package": "HList",
        "partial": "HMap Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMember",
      "description": {
        "fct-descr": "\u003cp\u003eCheck to see if an HList contains an element with a given type\n This is a type-level only test\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HMember",
        "fct-type": "class",
        "title": "HMember"
      },
      "index": {
        "description": "Check to see if an HList contains an element with given type This is type-level only test",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HMember",
        "normalized": "",
        "package": "HList",
        "partial": "HMember",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMember-39-",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HMember%27",
        "fct-type": "class",
        "title": "HMember'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HMember'",
        "normalized": "",
        "package": "HList",
        "partial": "HMember'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMemberM",
      "description": {
        "fct-descr": "\u003cp\u003eCheck to see if an element e occurs in a list l\n If not, return 'Nothing\n If the element does occur, return 'Just l1\n where l1 is a type-level list without e\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HMemberM",
        "fct-type": "class",
        "title": "HMemberM"
      },
      "index": {
        "description": "Check to see if an element occurs in list If not return Nothing If the element does occur return Just l1 where l1 is type-level list without",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HMemberM",
        "normalized": "",
        "package": "HList",
        "partial": "HMember",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMemberM1",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HMemberM1",
        "fct-type": "class",
        "title": "HMemberM1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HMemberM1",
        "normalized": "",
        "package": "HList",
        "partial": "HMember",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMemberM2",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HMemberM2",
        "fct-type": "class",
        "title": "HMemberM2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HMemberM2",
        "normalized": "",
        "package": "HList",
        "partial": "HMember",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMemberP",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HMemberP",
        "fct-type": "function",
        "title": "HMemberP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HMemberP",
        "normalized": "",
        "package": "HList",
        "partial": "HMember",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMemberP-39-",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HMemberP'",
        "fct-type": "function",
        "title": "HMemberP'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HMemberP'",
        "normalized": "",
        "package": "HList",
        "partial": "HMember P'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HNats",
      "description": {
        "fct-descr": "\u003cp\u003eWe do so constructively, converting the HList whose elements\n are Proxy HNat to [HNat]. The latter kind is unpopulated and\n is present only at the type level.\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HNats",
        "fct-type": "function",
        "title": "HNats"
      },
      "index": {
        "description": "We do so constructively converting the HList whose elements are Proxy HNat to HNat The latter kind is unpopulated and is present only at the type level",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HNats",
        "normalized": "",
        "package": "HList",
        "partial": "HNats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HNil-39-",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-HList.html#HNil%27",
        "fct-type": "data",
        "title": "HNil'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HNil'",
        "normalized": "",
        "package": "HList",
        "partial": "HNil'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HReplicate",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HReplicate",
        "fct-type": "class",
        "title": "HReplicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HReplicate",
        "normalized": "",
        "package": "HList",
        "partial": "HReplicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HRevApp",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HRevApp",
        "fct-type": "function",
        "title": "HRevApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HRevApp",
        "normalized": "",
        "package": "HList",
        "partial": "HRev App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HRmTag",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-HList.html#HRmTag",
        "fct-type": "data",
        "title": "HRmTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HRmTag",
        "normalized": "",
        "package": "HList",
        "partial": "HRm Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HScanr",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HScanr",
        "fct-type": "class",
        "title": "HScanr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HScanr",
        "normalized": "",
        "package": "HList",
        "partial": "HScanr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HSequence",
      "description": {
        "fct-descr": "\u003cp\u003eA heterogeneous version of\n\u003c/p\u003e\u003cpre\u003e sequenceA :: (Applicative m) =\u003e [m a] -\u003e m [a]\n\u003c/pre\u003e\u003cp\u003eOnly now we operate on heterogeneous lists, where different elements\n   may have different types \u003ccode\u003ea\u003c/code\u003e.\n   In the argument list of monadic values (m a_i),\n   although a_i may differ, the monad \u003ccode\u003em\u003c/code\u003e must be the same for all\n   elements. That's why we needed \u003ca\u003eData.HList.TypeCastGeneric2\u003c/a\u003e (currently (~)).\n   The typechecker will complain\n   if we attempt to use hSequence on a HList of monadic values with different\n   monads.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehSequence\u003c/a\u003e\u003c/code\u003e problem was posed by Matthias Fischmann\n   in his message on the Haskell-Cafe list on Oct 8, 2006\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.haskell.org/pipermail/haskell-cafe/2006-October/018708.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.haskell.org/pipermail/haskell-cafe/2006-October/018784.html\u003c/a\u003e\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eMaybe\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehSequence $ Just (1 :: Integer) `HCons` (Just 'c') `HCons` HNil\n\u003c/code\u003e\u003c/strong\u003eJust H[1, 'c']\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehSequence $  return 1 `HCons` Just  'c' `HCons` HNil\n\u003c/code\u003e\u003c/strong\u003eJust H[1, 'c']\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eList\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehSequence $ [1] `HCons` ['c'] `HCons` HNil\n\u003c/code\u003e\u003c/strong\u003e[H[1, 'c']]\n\u003c/pre\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HSequence",
        "fct-type": "class",
        "title": "HSequence"
      },
      "index": {
        "description": "heterogeneous version of sequenceA Applicative Only now we operate on heterogeneous lists where different elements may have different types In the argument list of monadic values although may differ the monad must be the same for all elements That why we needed Data.HList.TypeCastGeneric2 currently The typechecker will complain if we attempt to use hSequence on HList of monadic values with different monads The hSequence problem was posed by Matthias Fischmann in his message on the Haskell-Cafe list on Oct http www.haskell.org pipermail haskell-cafe October html http www.haskell.org pipermail haskell-cafe October html Maybe hSequence Just Integer HCons Just HCons HNil Just hSequence return HCons Just HCons HNil Just List hSequence HCons HCons HNil",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HSequence",
        "normalized": "",
        "package": "HList",
        "partial": "HSequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HSplit",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogus to Data.List.\u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehSplit $ (2,hTrue) .*. (3,hTrue) .*. (1,hFalse) .*. HNil\n\u003c/code\u003e\u003c/strong\u003e(H[2, 3],H[1])\n\u003c/pre\u003e\u003cp\u003eit might make more sense to instead have \u003ccode\u003eLVPair Bool e\u003c/code\u003e\n instead of \u003ccode\u003e(e, Proxy Bool)\u003c/code\u003e since the former has the same\n runtime representation as \u003ccode\u003ee\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HSplit",
        "fct-type": "class",
        "title": "HSplit"
      },
      "index": {
        "description": "Analogus to Data.List partition snd hSplit hTrue hTrue hFalse HNil it might make more sense to instead have LVPair Bool instead of Proxy Bool since the former has the same runtime representation as",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HSplit",
        "normalized": "",
        "package": "HList",
        "partial": "HSplit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HTIntersect",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HTIntersect",
        "fct-type": "class",
        "title": "HTIntersect"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HTIntersect",
        "normalized": "",
        "package": "HList",
        "partial": "HTIntersect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HTIntersectBool",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HTIntersectBool",
        "fct-type": "class",
        "title": "HTIntersectBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HTIntersectBool",
        "normalized": "",
        "package": "HList",
        "partial": "HTIntersect Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HTMember",
      "description": {
        "fct-descr": "\u003cp\u003ecould be an associated type if HEq had one\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HTMember",
        "fct-type": "class",
        "title": "HTMember"
      },
      "index": {
        "description": "could be an associated type if HEq had one",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HTMember",
        "normalized": "",
        "package": "HList",
        "partial": "HTMember",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HUnfold",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "type",
        "fct-source": "src/Data-HList-HList.html#HUnfold",
        "fct-type": "type",
        "title": "HUnfold"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HUnfold",
        "normalized": "",
        "package": "HList",
        "partial": "HUnfold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HUnfold-39-",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#HUnfold%27",
        "fct-type": "class",
        "title": "HUnfold'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HUnfold'",
        "normalized": "",
        "package": "HList",
        "partial": "HUnfold'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:LiftA2",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-HList.html#LiftA2",
        "fct-type": "newtype",
        "title": "LiftA2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "LiftA2",
        "normalized": "",
        "package": "HList",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:MapCar",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-HList.html#MapCar",
        "fct-type": "newtype",
        "title": "MapCar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "MapCar",
        "normalized": "",
        "package": "HList",
        "partial": "Map Car",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:Mapcar",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-HList.html#Mapcar",
        "fct-type": "newtype",
        "title": "Mapcar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "Mapcar",
        "normalized": "",
        "package": "HList",
        "partial": "Mapcar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:SameLength",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure two lists have the same length. We do case analysis on the\n first one (hence the type must be known to the type checker).\n In contrast, the second list may be a type variable.\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#SameLength",
        "fct-type": "class",
        "title": "SameLength"
      },
      "index": {
        "description": "Ensure two lists have the same length We do case analysis on the first one hence the type must be known to the type checker In contrast the second list may be type variable",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "SameLength",
        "normalized": "",
        "package": "HList",
        "partial": "Same Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:ToHJust",
      "description": {
        "fct-descr": "\u003cp\u003ethe same as \u003ccode\u003emap Just\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoHJust (2 .*. 'a' .*. HNil)\n\u003c/code\u003e\u003c/strong\u003eH[HJust 2, HJust 'a']\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoHJust2 (2 .*. 'a' .*. HNil)\n\u003c/code\u003e\u003c/strong\u003eH[HJust 2, HJust 'a']\n\u003c/pre\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HList.html#ToHJust",
        "fct-type": "class",
        "title": "ToHJust"
      },
      "index": {
        "description": "the same as map Just toHJust HNil HJust HJust toHJust2 HNil HJust HJust",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "ToHJust",
        "normalized": "",
        "package": "HList",
        "partial": "To HJust",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:UnHList",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "UnHList",
        "fct-type": "function",
        "title": "UnHList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "UnHList",
        "normalized": "",
        "package": "HList",
        "partial": "Un HList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:FHCons",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "FHCons",
        "fct-source": "src/Data-HList-HList.html#FHCons",
        "fct-type": "function",
        "title": "FHCons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "FHCons",
        "normalized": "",
        "package": "HList",
        "partial": "FHCons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HAddTag",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HAddTag t",
        "fct-source": "src/Data-HList-HList.html#HAddTag",
        "fct-type": "function",
        "title": "HAddTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HAddTag",
        "normalized": "",
        "package": "HList",
        "partial": "HAdd Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HCons",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "e -\u003e HList l -\u003e HList (e : l)",
        "fct-source": "src/Data-HList-HList.html#HList",
        "fct-type": "function",
        "title": "HCons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HCons",
        "normalized": "a-\u003eHList b-\u003eHList(a b)",
        "package": "HList",
        "partial": "HCons",
        "signature": "e-\u003eHList l-\u003eHList(e l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HCons-39-",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HCons' a b",
        "fct-source": "src/Data-HList-HList.html#HCons%27",
        "fct-type": "function",
        "title": "HCons'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HCons'",
        "normalized": "",
        "package": "HList",
        "partial": "HCons'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HFromJust",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HFromJust",
        "fct-source": "src/Data-HList-HList.html#HFromJust",
        "fct-type": "function",
        "title": "HFromJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HFromJust",
        "normalized": "",
        "package": "HList",
        "partial": "HFrom Just",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HMap",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HMap f",
        "fct-source": "src/Data-HList-HList.html#HMap",
        "fct-type": "function",
        "title": "HMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HMap",
        "normalized": "",
        "package": "HList",
        "partial": "HMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HNil",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList `[]`",
        "fct-source": "src/Data-HList-HList.html#HList",
        "fct-type": "function",
        "title": "HNil"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HNil",
        "normalized": "HList[]",
        "package": "HList",
        "partial": "HNil",
        "signature": "HList[]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HNil-39-",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HNil'",
        "fct-source": "src/Data-HList-HList.html#HNil%27",
        "fct-type": "function",
        "title": "HNil'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HNil'",
        "normalized": "",
        "package": "HList",
        "partial": "HNil'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HRmTag",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HRmTag",
        "fct-source": "src/Data-HList-HList.html#HRmTag",
        "fct-type": "function",
        "title": "HRmTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "HRmTag",
        "normalized": "",
        "package": "HList",
        "partial": "HRm Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:LiftA2",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "LiftA2 f",
        "fct-source": "src/Data-HList-HList.html#LiftA2",
        "fct-type": "function",
        "title": "LiftA2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "LiftA2",
        "normalized": "",
        "package": "HList",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:MapCar",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "MapCar f",
        "fct-source": "src/Data-HList-HList.html#MapCar",
        "fct-type": "function",
        "title": "MapCar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "MapCar",
        "normalized": "",
        "package": "HList",
        "partial": "Map Car",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:Mapcar",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "Mapcar f",
        "fct-source": "src/Data-HList-HList.html#Mapcar",
        "fct-type": "function",
        "title": "Mapcar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "Mapcar",
        "normalized": "",
        "package": "HList",
        "partial": "Mapcar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:append-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehAppend'\u003c/a\u003e\u003c/code\u003e below is implemented using the same idea\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-HList-HList.html#append%27",
        "fct-type": "function",
        "title": "append'"
      },
      "index": {
        "description": "hAppend below is implemented using the same idea",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "append'",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "HList",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:fromHJust",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e HList (FromHJustR l)",
        "fct-source": "src/Data-HList-HList.html#fromHJust",
        "fct-type": "method",
        "title": "fromHJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "fromHJust",
        "normalized": "HList a-\u003eHList(FromHJustR a)",
        "package": "HList",
        "partial": "HJust",
        "signature": "HList l-\u003eHList(FromHJustR l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:fromHJust2",
      "description": {
        "fct-descr": "\u003cp\u003eA longer type could be inferred.\n fromHJust2 :: (HMap' HFromJust a b) =\u003e HList a -\u003e HList b\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList as' -\u003e HList bs'",
        "fct-source": "src/Data-HList-HList.html#fromHJust2",
        "fct-type": "function",
        "title": "fromHJust2"
      },
      "index": {
        "description": "longer type could be inferred fromHJust2 HMap HFromJust HList HList",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "fromHJust2",
        "normalized": "HList a-\u003eHList b",
        "package": "HList",
        "partial": "HJust",
        "signature": "HList as'-\u003eHList bs'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hAddTag",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "t -\u003e HList as' -\u003e HList bs'",
        "fct-source": "src/Data-HList-HList.html#hAddTag",
        "fct-type": "function",
        "title": "hAddTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hAddTag",
        "normalized": "a-\u003eHList b-\u003eHList c",
        "package": "HList",
        "partial": "Add Tag",
        "signature": "t-\u003eHList as'-\u003eHList bs'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hAppend-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAlternative implementation of \u003ccode\u003e\u003ca\u003ehAppend\u003c/a\u003e\u003c/code\u003e. Demonstrates \u003ccode\u003e\u003ca\u003eHFoldr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e v -\u003e r",
        "fct-source": "src/Data-HList-HList.html#hAppend%27",
        "fct-type": "function",
        "title": "hAppend'"
      },
      "index": {
        "description": "Alternative implementation of hAppend Demonstrates HFoldr",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hAppend'",
        "normalized": "HList a-\u003eb-\u003ec",
        "package": "HList",
        "partial": "Append'",
        "signature": "HList l-\u003ev-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hAppendList",
      "description": {
        "fct-descr": "\u003cp\u003ethe same as \u003ccode\u003e\u003ca\u003ehAppend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l1 -\u003e HList l2 -\u003e HList (HAppendList l1 l2)",
        "fct-source": "src/Data-HList-HList.html#hAppendList",
        "fct-type": "function",
        "title": "hAppendList"
      },
      "index": {
        "description": "the same as hAppend",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hAppendList",
        "normalized": "HList a-\u003eHList a-\u003eHList(HAppendList a a)",
        "package": "HList",
        "partial": "Append List",
        "signature": "HList l-\u003eHList l-\u003eHList(HAppendList l l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hBuild",
      "description": {
        "fct-descr": "\u003cp\u003eBuilding lists\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "r",
        "fct-source": "src/Data-HList-HList.html#hBuild",
        "fct-type": "function",
        "title": "hBuild"
      },
      "index": {
        "description": "Building lists",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hBuild",
        "normalized": "",
        "package": "HList",
        "partial": "Build",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hBuild-39-",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e r",
        "fct-source": "src/Data-HList-HList.html#hBuild%27",
        "fct-type": "method",
        "title": "hBuild'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hBuild'",
        "normalized": "HList a-\u003eb",
        "package": "HList",
        "partial": "Build'",
        "signature": "HList l-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hComposeList",
      "description": {
        "fct-descr": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet xs = length .*. (+1) .*. (*2) .*. HNil\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehComposeList xs \"abc\"\n\u003c/code\u003e\u003c/strong\u003e8\n\u003c/pre\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e t -\u003e a",
        "fct-source": "src/Data-HList-HList.html#hComposeList",
        "fct-type": "function",
        "title": "hComposeList"
      },
      "index": {
        "description": "let xs length HNil hComposeList xs abc",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hComposeList",
        "normalized": "HList a-\u003eb-\u003ec",
        "package": "HList",
        "partial": "Compose List",
        "signature": "HList l-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hConcat",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList a -\u003e HList (HConcatR a)",
        "fct-source": "src/Data-HList-HList.html#hConcat",
        "fct-type": "method",
        "title": "hConcat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hConcat",
        "normalized": "HList a-\u003eHList(HConcatR a)",
        "package": "HList",
        "partial": "Concat",
        "signature": "HList a-\u003eHList(HConcatR a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hEnd",
      "description": {
        "fct-descr": "\u003cp\u003eNote:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ex :: HList a\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e means: \u003ccode\u003eforall a. x :: HList a\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ehEnd x\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e means: \u003ccode\u003eexists a. x :: HList a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eList termination\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e HList l",
        "fct-source": "src/Data-HList-HList.html#hEnd",
        "fct-type": "function",
        "title": "hEnd"
      },
      "index": {
        "description": "Note HList means forall HList hEnd means exists HList List termination",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hEnd",
        "normalized": "HList a-\u003eHList a",
        "package": "HList",
        "partial": "End",
        "signature": "HList l-\u003eHList l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hFlag",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate list with a type-level Boolean\n hFlag :: HMap' (HAddTag (Proxy True)) l r =\u003e HList l -\u003e HList r\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList as' -\u003e HList bs'",
        "fct-source": "src/Data-HList-HList.html#hFlag",
        "fct-type": "function",
        "title": "hFlag"
      },
      "index": {
        "description": "Annotate list with type-level Boolean hFlag HMap HAddTag Proxy True HList HList",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hFlag",
        "normalized": "HList a-\u003eHList b",
        "package": "HList",
        "partial": "Flag",
        "signature": "HList as'-\u003eHList bs'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hFoldl",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "f -\u003e z -\u003e HList xs -\u003e r",
        "fct-source": "src/Data-HList-HList.html#hFoldl",
        "fct-type": "method",
        "title": "hFoldl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hFoldl",
        "normalized": "a-\u003eb-\u003eHList c-\u003ed",
        "package": "HList",
        "partial": "Foldl",
        "signature": "f-\u003ez-\u003eHList xs-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hFoldr",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "f -\u003e v -\u003e HList l -\u003e r",
        "fct-source": "src/Data-HList-HList.html#hFoldr",
        "fct-type": "method",
        "title": "hFoldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hFoldr",
        "normalized": "a-\u003eb-\u003eHList c-\u003ed",
        "package": "HList",
        "partial": "Foldr",
        "signature": "f-\u003ev-\u003eHList l-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hFoldr1",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "f -\u003e HList l -\u003e r",
        "fct-source": "src/Data-HList-HList.html#hFoldr1",
        "fct-type": "method",
        "title": "hFoldr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hFoldr1",
        "normalized": "a-\u003eHList b-\u003ec",
        "package": "HList",
        "partial": "Foldr",
        "signature": "f-\u003eHList l-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hHead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList (e : l) -\u003e e",
        "fct-source": "src/Data-HList-HList.html#hHead",
        "fct-type": "function",
        "title": "hHead"
      },
      "index": {
        "description": "head",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hHead",
        "normalized": "HList(a b)-\u003ea",
        "package": "HList",
        "partial": "Head",
        "signature": "HList(e l)-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hLength",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e Proxy (HLength l)",
        "fct-source": "src/Data-HList-HList.html#hLength",
        "fct-type": "function",
        "title": "hLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hLength",
        "normalized": "HList a-\u003eProxy(HLength a)",
        "package": "HList",
        "partial": "Length",
        "signature": "HList l-\u003eProxy(HLength l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hList2List",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e [e]",
        "fct-source": "src/Data-HList-HList.html#hList2List",
        "fct-type": "method",
        "title": "hList2List"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hList2List",
        "normalized": "HList a-\u003e[b]",
        "package": "HList",
        "partial": "List List",
        "signature": "HList l-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMap",
      "description": {
        "fct-descr": "\u003cp\u003ehMap is written such that the length of the result list\ncan be determined from the length of the argument list (and\nthe other way around). Similarly, the type of the elements\nof the list is propagated in both directions too.\n\u003c/p\u003e\u003cp\u003eExcuse the ugly types printed. Unfortunately ghc (still?)\nshows types like \u003ccode\u003e'[a,b]\u003c/code\u003e using the actual constructors involved\n\u003ccode\u003e(':) a ((':) b '[])\u003c/code\u003e (or even worse when the kind variables are printed).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XNoMonomorphismRestriction\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet xs = 1 .*. 'c' .*. HNil\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t hMap (HJust ()) xs\n\u003c/code\u003e\u003c/strong\u003ehMap (HJust ()) xs\n  :: Num y =\u003e HList ((':) * (HJust y) ((':) * (HJust Char) ('[] *)))\n\u003c/pre\u003e\u003cp\u003eThese 4 examples show that the constraint on the length (2 in this cae)\ncan be applied before or after the \u003ccode\u003e\u003ca\u003ehMap\u003c/a\u003e\u003c/code\u003e. That inference is independent of the\ndirection that type information is propagated for the individual elements.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet asLen2 xs = xs `asTypeOf` (undefined :: HList '[a,b])\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet lr xs = asLen2 (applyAB (HMap HRead) xs)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet ls xs = asLen2 (applyAB (HMap HShow) xs)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet rl xs = applyAB (HMap HRead) (asLen2 xs)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet sl xs = applyAB (HMap HShow) (asLen2 xs)\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t lr\n\u003c/code\u003e\u003c/strong\u003elr\n  :: (Read y, Read y1) =\u003e\n     HList ((':) * String ((':) * String ('[] *)))\n     -\u003e HList ((':) * y ((':) * y1 ('[] *)))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t rl\n\u003c/code\u003e\u003c/strong\u003erl\n  :: (Read y, Read y1) =\u003e\n     HList ((':) * String ((':) * String ('[] *)))\n     -\u003e HList ((':) * y ((':) * y1 ('[] *)))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t ls\n\u003c/code\u003e\u003c/strong\u003els\n  :: (Show y, Show y1) =\u003e\n     HList ((':) * y ((':) * y1 ('[] *)))\n     -\u003e HList ((':) * String ((':) * String ('[] *)))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t sl\n\u003c/code\u003e\u003c/strong\u003esl\n  :: (Show y, Show y1) =\u003e\n     HList ((':) * y ((':) * y1 ('[] *)))\n     -\u003e HList ((':) * String ((':) * String ('[] *)))\n\u003c/pre\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "f -\u003e HList as' -\u003e HList bs'",
        "fct-source": "src/Data-HList-HList.html#hMap",
        "fct-type": "function",
        "title": "hMap"
      },
      "index": {
        "description": "hMap is written such that the length of the result list can be determined from the length of the argument list and the other way around Similarly the type of the elements of the list is propagated in both directions too Excuse the ugly types printed Unfortunately ghc still shows types like using the actual constructors involved or even worse when the kind variables are printed set XNoMonomorphismRestriction let xs HNil hMap HJust xs hMap HJust xs Num HList HJust HJust Char These examples show that the constraint on the length in this cae can be applied before or after the hMap That inference is independent of the direction that type information is propagated for the individual elements let asLen2 xs xs asTypeOf undefined HList let lr xs asLen2 applyAB HMap HRead xs let ls xs asLen2 applyAB HMap HShow xs let rl xs applyAB HMap HRead asLen2 xs let sl xs applyAB HMap HShow asLen2 xs lr lr Read Read y1 HList String String HList y1 rl rl Read Read y1 HList String String HList y1 ls ls Show Show y1 HList y1 HList String String sl sl Show Show y1 HList y1 HList String String",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hMap",
        "normalized": "a-\u003eHList b-\u003eHList c",
        "package": "HList",
        "partial": "Map",
        "signature": "f-\u003eHList as'-\u003eHList bs'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMapAux",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "f -\u003e HList l -\u003e HList r",
        "fct-source": "src/Data-HList-HList.html#hMapAux",
        "fct-type": "method",
        "title": "hMapAux"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hMapAux",
        "normalized": "a-\u003eHList b-\u003eHList c",
        "package": "HList",
        "partial": "Map Aux",
        "signature": "f-\u003eHList l-\u003eHList r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMapM",
      "description": {
        "fct-descr": "\u003cpre\u003e mapM :: forall b m a. (Monad m) =\u003e (a -\u003e m b) -\u003e [a] -\u003e m [b]\n\u003c/pre\u003e\u003cp\u003eLikewise for mapM_.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ehSequence\u003c/a\u003e\u003c/code\u003e if the result list should also be heterogenous.\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "f -\u003e HList l -\u003e [m e]",
        "fct-source": "src/Data-HList-HList.html#hMapM",
        "fct-type": "function",
        "title": "hMapM"
      },
      "index": {
        "description": "mapM forall Monad Likewise for mapM See hSequence if the result list should also be heterogenous",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hMapM",
        "normalized": "a-\u003eHList b-\u003e[c d]",
        "package": "HList",
        "partial": "Map",
        "signature": "f-\u003eHList l-\u003e[m e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMapM_",
      "description": {
        "fct-descr": "\u003cp\u003eGHC doesn't like its own type.\n hMapM_  :: forall m a f e. (Monad m, HMapOut f a (m e)) =\u003e f -\u003e a -\u003e m ()\n Without explicit type signature, it's Ok. Sigh.\n Anyway, Hugs does insist on a better type. So we restrict as follows:\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "f -\u003e HList l -\u003e m ()",
        "fct-source": "src/Data-HList-HList.html#hMapM_",
        "fct-type": "function",
        "title": "hMapM_"
      },
      "index": {
        "description": "GHC doesn like its own type hMapM forall Monad HMapOut Without explicit type signature it Ok Sigh Anyway Hugs does insist on better type So we restrict as follows",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hMapM_",
        "normalized": "a-\u003eHList b-\u003ec()",
        "package": "HList",
        "partial": "Map",
        "signature": "f-\u003eHList l-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMapMapCar",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ehMap\u003c/a\u003e\u003c/code\u003e only a different implementation.\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "f -\u003e HList l -\u003e l'",
        "fct-source": "src/Data-HList-HList.html#hMapMapCar",
        "fct-type": "function",
        "title": "hMapMapCar"
      },
      "index": {
        "description": "Same as hMap only different implementation",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hMapMapCar",
        "normalized": "a-\u003eHList b-\u003ec",
        "package": "HList",
        "partial": "Map Map Car",
        "signature": "f-\u003eHList l-\u003el'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMapOut",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "f -\u003e HList l -\u003e [e]",
        "fct-source": "src/Data-HList-HList.html#hMapOut",
        "fct-type": "function",
        "title": "hMapOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hMapOut",
        "normalized": "a-\u003eHList b-\u003e[c]",
        "package": "HList",
        "partial": "Map Out",
        "signature": "f-\u003eHList l-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMember",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "Proxy e -\u003e Proxy l -\u003e Proxy b",
        "fct-source": "src/Data-HList-HList.html#hMember",
        "fct-type": "function",
        "title": "hMember"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hMember",
        "normalized": "Proxy a-\u003eProxy b-\u003eProxy c",
        "package": "HList",
        "partial": "Member",
        "signature": "Proxy e-\u003eProxy l-\u003eProxy b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hNats",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e Proxy (HNats l)",
        "fct-source": "src/Data-HList-HList.html#hNats",
        "fct-type": "function",
        "title": "hNats"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hNats",
        "normalized": "HList a-\u003eProxy(HNats a)",
        "package": "HList",
        "partial": "Nats",
        "signature": "HList l-\u003eProxy(HNats l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hReplicate",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "Proxy n -\u003e e -\u003e HList (HReplicateR n e)",
        "fct-source": "src/Data-HList-HList.html#hReplicate",
        "fct-type": "method",
        "title": "hReplicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hReplicate",
        "normalized": "Proxy a-\u003eb-\u003eHList(HReplicateR a b)",
        "package": "HList",
        "partial": "Replicate",
        "signature": "Proxy n-\u003ee-\u003eHList(HReplicateR n e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hRevApp",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l1 -\u003e HList l2 -\u003e HList (HRevApp l1 l2)",
        "fct-source": "src/Data-HList-HList.html#hRevApp",
        "fct-type": "function",
        "title": "hRevApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hRevApp",
        "normalized": "HList a-\u003eHList a-\u003eHList(HRevApp a a)",
        "package": "HList",
        "partial": "Rev App",
        "signature": "HList l-\u003eHList l-\u003eHList(HRevApp l l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hReverse",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l1 -\u003e HList (HRevApp l1 ([] *))",
        "fct-source": "src/Data-HList-HList.html#hReverse",
        "fct-type": "function",
        "title": "hReverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hReverse",
        "normalized": "HList a-\u003eHList(HRevApp a([]*))",
        "package": "HList",
        "partial": "Reverse",
        "signature": "HList l-\u003eHList(HRevApp l([]*))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hRmTag",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList as' -\u003e HList bs'",
        "fct-source": "src/Data-HList-HList.html#hRmTag",
        "fct-type": "function",
        "title": "hRmTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hRmTag",
        "normalized": "HList a-\u003eHList b",
        "package": "HList",
        "partial": "Rm Tag",
        "signature": "HList as'-\u003eHList bs'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hScanr",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "f -\u003e z -\u003e HList ls -\u003e HList rs",
        "fct-source": "src/Data-HList-HList.html#hScanr",
        "fct-type": "method",
        "title": "hScanr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hScanr",
        "normalized": "a-\u003eb-\u003eHList c-\u003eHList d",
        "package": "HList",
        "partial": "Scanr",
        "signature": "f-\u003ez-\u003eHList ls-\u003eHList rs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hSequence",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList a -\u003e m (HList b)",
        "fct-source": "src/Data-HList-HList.html#hSequence",
        "fct-type": "method",
        "title": "hSequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hSequence",
        "normalized": "HList a-\u003eb(HList c)",
        "package": "HList",
        "partial": "Sequence",
        "signature": "HList a-\u003em(HList b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hSplit",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e (HList (HSplitT l), HList (HSplitF l))",
        "fct-source": "src/Data-HList-HList.html#hSplit",
        "fct-type": "method",
        "title": "hSplit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hSplit",
        "normalized": "HList a-\u003e(HList(HSplitT a),HList(HSplitF a))",
        "package": "HList",
        "partial": "Split",
        "signature": "HList l-\u003e(HList(HSplitT l),HList(HSplitF l))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hTIntersect",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l1 -\u003e HList l2 -\u003e HList l3",
        "fct-source": "src/Data-HList-HList.html#hTIntersect",
        "fct-type": "method",
        "title": "hTIntersect"
      },
      "index": {
        "description": "Like intersect",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hTIntersect",
        "normalized": "HList a-\u003eHList a-\u003eHList a",
        "package": "HList",
        "partial": "TIntersect",
        "signature": "HList l-\u003eHList l-\u003eHList l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hTIntersectBool",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "Proxy b -\u003e h -\u003e HList t -\u003e HList l1 -\u003e HList l2",
        "fct-source": "src/Data-HList-HList.html#hTIntersectBool",
        "fct-type": "method",
        "title": "hTIntersectBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hTIntersectBool",
        "normalized": "Proxy a-\u003eb-\u003eHList c-\u003eHList d-\u003eHList d",
        "package": "HList",
        "partial": "TIntersect Bool",
        "signature": "Proxy b-\u003eh-\u003eHList t-\u003eHList l-\u003eHList l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hTMember",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "e -\u003e HList l -\u003e Proxy b",
        "fct-source": "src/Data-HList-HList.html#hTMember",
        "fct-type": "function",
        "title": "hTMember"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hTMember",
        "normalized": "a-\u003eHList b-\u003eProxy c",
        "package": "HList",
        "partial": "TMember",
        "signature": "e-\u003eHList l-\u003eProxy b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hTail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList (e : l) -\u003e HList l",
        "fct-source": "src/Data-HList-HList.html#hTail",
        "fct-type": "function",
        "title": "hTail"
      },
      "index": {
        "description": "tail",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hTail",
        "normalized": "HList(a b)-\u003eHList b",
        "package": "HList",
        "partial": "Tail",
        "signature": "HList(e l)-\u003eHList l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hUnfold",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "p -\u003e s -\u003e HList (HUnfold p s)",
        "fct-source": "src/Data-HList-HList.html#hUnfold",
        "fct-type": "function",
        "title": "hUnfold"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hUnfold",
        "normalized": "a-\u003eb-\u003eHList(HUnfold a b)",
        "package": "HList",
        "partial": "Unfold",
        "signature": "p-\u003es-\u003eHList(HUnfold p s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hUnfold-39-",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "p -\u003e res -\u003e HList (HUnfoldR p res)",
        "fct-source": "src/Data-HList-HList.html#hUnfold%27",
        "fct-type": "method",
        "title": "hUnfold'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "hUnfold'",
        "normalized": "a-\u003eb-\u003eHList(HUnfoldR a b)",
        "package": "HList",
        "partial": "Unfold'",
        "signature": "p-\u003eres-\u003eHList(HUnfoldR p res)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:prime",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList a -\u003e Prime a",
        "fct-source": "src/Data-HList-HList.html#prime",
        "fct-type": "method",
        "title": "prime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "prime",
        "normalized": "HList a-\u003ePrime a",
        "package": "HList",
        "partial": "",
        "signature": "HList a-\u003ePrime a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:toHJust",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e HList l'",
        "fct-source": "src/Data-HList-HList.html#toHJust",
        "fct-type": "method",
        "title": "toHJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "toHJust",
        "normalized": "HList a-\u003eHList b",
        "package": "HList",
        "partial": "HJust",
        "signature": "HList l-\u003eHList l'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:toHJust2",
      "description": {
        "fct-descr": "\u003cp\u003ealternative implementation. The Apply instance is in \u003ca\u003eData.HList.FakePrelude\u003c/a\u003e.\n A longer type could be inferred.\n toHJust2 :: (HMap' (HJust ()) a b) =\u003e HList a -\u003e HList b\n\u003c/p\u003e",
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "HList as' -\u003e HList bs'",
        "fct-source": "src/Data-HList-HList.html#toHJust2",
        "fct-type": "function",
        "title": "toHJust2"
      },
      "index": {
        "description": "alternative implementation The Apply instance is in Data.HList.FakePrelude longer type could be inferred toHJust2 HMap HJust HList HList",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "toHJust2",
        "normalized": "HList a-\u003eHList b",
        "package": "HList",
        "partial": "HJust",
        "signature": "HList as'-\u003eHList bs'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:unPrime",
      "description": {
        "fct-module": "Data.HList.HList",
        "fct-package": "HList",
        "fct-signature": "Prime a -\u003e HList a",
        "fct-source": "src/Data-HList-HList.html#unPrime",
        "fct-type": "method",
        "title": "unPrime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HList",
        "module": "Data.HList.HList",
        "name": "unPrime",
        "normalized": "Prime a-\u003eHList a",
        "package": "HList",
        "partial": "Prime",
        "signature": "Prime a-\u003eHList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eDeclarations for various classes and functions that\n   apply for the whole range of heterogeneous collections\n   (HList, TIP, records, etc).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-HListPrelude.html",
        "fct-type": "module",
        "title": "HListPrelude"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Declarations for various classes and functions that apply for the whole range of heterogeneous collections HList TIP records etc",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "HListPrelude",
        "normalized": "",
        "package": "HList",
        "partial": "HList Prelude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HAppend",
      "description": {
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HListPrelude.html#HAppend",
        "fct-type": "class",
        "title": "HAppend"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "HAppend",
        "normalized": "",
        "package": "HList",
        "partial": "HAppend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HDeleteMany",
      "description": {
        "fct-descr": "\u003cp\u003eDelete all elements with the type-level key e from the\n collection l. Since the key is type-level, it is represented\n by a Proxy.\n (polykinded)\n\u003c/p\u003e",
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HListPrelude.html#HDeleteMany",
        "fct-type": "class",
        "title": "HDeleteMany"
      },
      "index": {
        "description": "Delete all elements with the type-level key from the collection Since the key is type-level it is represented by Proxy polykinded",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "HDeleteMany",
        "normalized": "",
        "package": "HList",
        "partial": "HDelete Many",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HExtend",
      "description": {
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HListPrelude.html#HExtend",
        "fct-type": "class",
        "title": "HExtend"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "HExtend",
        "normalized": "",
        "package": "HList",
        "partial": "HExtend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HOccurs",
      "description": {
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HListPrelude.html#HOccurs",
        "fct-type": "class",
        "title": "HOccurs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "HOccurs",
        "normalized": "",
        "package": "HList",
        "partial": "HOccurs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HOccursNot",
      "description": {
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HListPrelude.html#HOccursNot",
        "fct-type": "class",
        "title": "HOccursNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "HOccursNot",
        "normalized": "",
        "package": "HList",
        "partial": "HOccurs Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HProject",
      "description": {
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HListPrelude.html#HProject",
        "fct-type": "class",
        "title": "HProject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "HProject",
        "normalized": "",
        "package": "HList",
        "partial": "HProject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HType2HNat",
      "description": {
        "fct-descr": "\u003cp\u003eMap a type (key) to a natural (index) within the collection\n This is a purely type-level computation\n\u003c/p\u003e",
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HListPrelude.html#HType2HNat",
        "fct-type": "class",
        "title": "HType2HNat"
      },
      "index": {
        "description": "Map type key to natural index within the collection This is purely type-level computation",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "HType2HNat",
        "normalized": "",
        "package": "HList",
        "partial": "HType HNat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HTypes2HNats",
      "description": {
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HListPrelude.html#HTypes2HNats",
        "fct-type": "class",
        "title": "HTypes2HNats"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "HTypes2HNats",
        "normalized": "",
        "package": "HList",
        "partial": "HTypes HNats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:SubType",
      "description": {
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HListPrelude.html#SubType",
        "fct-type": "class",
        "title": "SubType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "SubType",
        "normalized": "",
        "package": "HList",
        "partial": "Sub Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#v:.-42-.",
      "description": {
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "e -\u003e l -\u003e HExtendR e l",
        "fct-source": "src/Data-HList-HListPrelude.html#.%2A.",
        "fct-type": "method",
        "title": "(.*.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "(.*.) .*.",
        "normalized": "a-\u003eb-\u003eHExtendR a b",
        "package": "HList",
        "partial": "",
        "signature": "e-\u003el-\u003eHExtendR e l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#v:hAppend",
      "description": {
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "l1 -\u003e l2 -\u003e HAppendR l1 l2",
        "fct-source": "src/Data-HList-HListPrelude.html#hAppend",
        "fct-type": "method",
        "title": "hAppend"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "hAppend",
        "normalized": "a-\u003ea-\u003eHAppendR a a",
        "package": "HList",
        "partial": "Append",
        "signature": "l-\u003el-\u003eHAppendR l l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#v:hDeleteMany",
      "description": {
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "Proxy e -\u003e l -\u003e l'",
        "fct-source": "src/Data-HList-HListPrelude.html#hDeleteMany",
        "fct-type": "method",
        "title": "hDeleteMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "hDeleteMany",
        "normalized": "Proxy a-\u003eb-\u003ec",
        "package": "HList",
        "partial": "Delete Many",
        "signature": "Proxy e-\u003el-\u003el'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#v:hOccurs",
      "description": {
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "l -\u003e e",
        "fct-source": "src/Data-HList-HListPrelude.html#hOccurs",
        "fct-type": "method",
        "title": "hOccurs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "hOccurs",
        "normalized": "a-\u003eb",
        "package": "HList",
        "partial": "Occurs",
        "signature": "l-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#v:hProject",
      "description": {
        "fct-module": "Data.HList.HListPrelude",
        "fct-package": "HList",
        "fct-signature": "l -\u003e l'",
        "fct-source": "src/Data-HList-HListPrelude.html#hProject",
        "fct-type": "method",
        "title": "hProject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HListPrelude",
        "module": "Data.HList.HListPrelude",
        "name": "hProject",
        "normalized": "a-\u003eb",
        "package": "HList",
        "partial": "Project",
        "signature": "l-\u003el'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eResult-type-driven operations on typeful heterogeneous lists.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-HOccurs.html",
        "fct-type": "module",
        "title": "HOccurs"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Result-type-driven operations on typeful heterogeneous lists",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "HOccurs",
        "normalized": "",
        "package": "HList",
        "partial": "HOccurs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccurrence",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HOccurs.html#HOccurrence",
        "fct-type": "class",
        "title": "HOccurrence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "HOccurrence",
        "normalized": "",
        "package": "HList",
        "partial": "HOccurrence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccurrence-39-",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HOccurs.html#HOccurrence%27",
        "fct-type": "class",
        "title": "HOccurrence'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "HOccurrence'",
        "normalized": "",
        "package": "HList",
        "partial": "HOccurrence'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccurs-39-",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HOccurs.html#HOccurs%27",
        "fct-type": "class",
        "title": "HOccurs'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "HOccurs'",
        "normalized": "",
        "package": "HList",
        "partial": "HOccurs'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccursMany",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HOccurs.html#HOccursMany",
        "fct-type": "class",
        "title": "HOccursMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "HOccursMany",
        "normalized": "",
        "package": "HList",
        "partial": "HOccurs Many",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccursMany-39-",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HOccurs.html#HOccursMany%27",
        "fct-type": "class",
        "title": "HOccursMany'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "HOccursMany'",
        "normalized": "",
        "package": "HList",
        "partial": "HOccurs Many'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccursNot-39-",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HOccurs.html#HOccursNot%27",
        "fct-type": "class",
        "title": "HOccursNot'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "HOccursNot'",
        "normalized": "",
        "package": "HList",
        "partial": "HOccurs Not'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccursOpt-39-",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HOccurs.html#HOccursOpt%27",
        "fct-type": "class",
        "title": "HOccursOpt'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "HOccursOpt'",
        "normalized": "",
        "package": "HList",
        "partial": "HOccurs Opt'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:TypeFound",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-HOccurs.html#TypeFound",
        "fct-type": "data",
        "title": "TypeFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "TypeFound",
        "normalized": "",
        "package": "HList",
        "partial": "Type Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:TypeNotFound",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-HOccurs.html#TypeNotFound",
        "fct-type": "data",
        "title": "TypeNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "TypeNotFound",
        "normalized": "",
        "package": "HList",
        "partial": "Type Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccurrence",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "e1 -\u003e HList l -\u003e HList l'",
        "fct-source": "src/Data-HList-HOccurs.html#hOccurrence",
        "fct-type": "method",
        "title": "hOccurrence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "hOccurrence",
        "normalized": "a-\u003eHList b-\u003eHList c",
        "package": "HList",
        "partial": "Occurrence",
        "signature": "e-\u003eHList l-\u003eHList l'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccurrence-39-",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "Proxy b -\u003e e1 -\u003e HList l -\u003e HList l'",
        "fct-source": "src/Data-HList-HOccurs.html#hOccurrence%27",
        "fct-type": "method",
        "title": "hOccurrence'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "hOccurrence'",
        "normalized": "Proxy a-\u003eb-\u003eHList c-\u003eHList d",
        "package": "HList",
        "partial": "Occurrence'",
        "signature": "Proxy b-\u003ee-\u003eHList l-\u003eHList l'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccurs-39-",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e e",
        "fct-source": "src/Data-HList-HOccurs.html#hOccurs%27",
        "fct-type": "method",
        "title": "hOccurs'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "hOccurs'",
        "normalized": "HList a-\u003eb",
        "package": "HList",
        "partial": "Occurs'",
        "signature": "HList l-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccursFst",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e e",
        "fct-source": "src/Data-HList-HOccurs.html#hOccursFst",
        "fct-type": "function",
        "title": "hOccursFst"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "hOccursFst",
        "normalized": "HList a-\u003eb",
        "package": "HList",
        "partial": "Occurs Fst",
        "signature": "HList l-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccursMany",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e [e]",
        "fct-source": "src/Data-HList-HOccurs.html#hOccursMany",
        "fct-type": "method",
        "title": "hOccursMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "hOccursMany",
        "normalized": "HList a-\u003e[b]",
        "package": "HList",
        "partial": "Occurs Many",
        "signature": "HList l-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccursMany-39-",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e [e]",
        "fct-source": "src/Data-HList-HOccurs.html#hOccursMany%27",
        "fct-type": "method",
        "title": "hOccursMany'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "hOccursMany'",
        "normalized": "HList a-\u003e[b]",
        "package": "HList",
        "partial": "Occurs Many'",
        "signature": "HList l-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccursMany1",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e (e, [e])",
        "fct-source": "src/Data-HList-HOccurs.html#hOccursMany1",
        "fct-type": "function",
        "title": "hOccursMany1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "hOccursMany1",
        "normalized": "HList a-\u003e(b,[b])",
        "package": "HList",
        "partial": "Occurs Many",
        "signature": "HList l-\u003e(e,[e])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccursOpt",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e Maybe e",
        "fct-source": "src/Data-HList-HOccurs.html#hOccursOpt",
        "fct-type": "function",
        "title": "hOccursOpt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "hOccursOpt",
        "normalized": "HList a-\u003eMaybe b",
        "package": "HList",
        "partial": "Occurs Opt",
        "signature": "HList l-\u003eMaybe e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccursOpt-39-",
      "description": {
        "fct-module": "Data.HList.HOccurs",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e Maybe e",
        "fct-source": "src/Data-HList-HOccurs.html#hOccursOpt%27",
        "fct-type": "method",
        "title": "hOccursOpt'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HOccurs",
        "module": "Data.HList.HOccurs",
        "name": "hOccursOpt'",
        "normalized": "HList a-\u003eMaybe b",
        "package": "HList",
        "partial": "Occurs Opt'",
        "signature": "HList l-\u003eMaybe e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eType-indexed operations on typeful heterogeneous lists.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.HTypeIndexed",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-HTypeIndexed.html",
        "fct-type": "module",
        "title": "HTypeIndexed"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Type-indexed operations on typeful heterogeneous lists",
        "hierarchy": "Data HList HTypeIndexed",
        "module": "Data.HList.HTypeIndexed",
        "name": "HTypeIndexed",
        "normalized": "",
        "package": "HList",
        "partial": "HType Indexed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#t:HDeleteManyCase",
      "description": {
        "fct-module": "Data.HList.HTypeIndexed",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HTypeIndexed.html#HDeleteManyCase",
        "fct-type": "class",
        "title": "HDeleteManyCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HTypeIndexed",
        "module": "Data.HList.HTypeIndexed",
        "name": "HDeleteManyCase",
        "normalized": "",
        "package": "HList",
        "partial": "HDelete Many Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#t:HType2HNatCase",
      "description": {
        "fct-descr": "\u003cp\u003eHelper class\n\u003c/p\u003e",
        "fct-module": "Data.HList.HTypeIndexed",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HTypeIndexed.html#HType2HNatCase",
        "fct-type": "class",
        "title": "HType2HNatCase"
      },
      "index": {
        "description": "Helper class",
        "hierarchy": "Data HList HTypeIndexed",
        "module": "Data.HList.HTypeIndexed",
        "name": "HType2HNatCase",
        "normalized": "",
        "package": "HList",
        "partial": "HType HNat Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hDeleteAt",
      "description": {
        "fct-module": "Data.HList.HTypeIndexed",
        "fct-package": "HList",
        "fct-signature": "Proxy e -\u003e HList l -\u003e HList (HDeleteAtHNatR n l)",
        "fct-source": "src/Data-HList-HTypeIndexed.html#hDeleteAt",
        "fct-type": "function",
        "title": "hDeleteAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HTypeIndexed",
        "module": "Data.HList.HTypeIndexed",
        "name": "hDeleteAt",
        "normalized": "Proxy a-\u003eHList b-\u003eHList(HDeleteAtHNatR c b)",
        "package": "HList",
        "partial": "Delete At",
        "signature": "Proxy e-\u003eHList l-\u003eHList(HDeleteAtHNatR n l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hDeleteManyCase",
      "description": {
        "fct-module": "Data.HList.HTypeIndexed",
        "fct-package": "HList",
        "fct-signature": "Proxy b -\u003e Proxy e1 -\u003e e -\u003e HList l -\u003e HList l1",
        "fct-source": "src/Data-HList-HTypeIndexed.html#hDeleteManyCase",
        "fct-type": "method",
        "title": "hDeleteManyCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HTypeIndexed",
        "module": "Data.HList.HTypeIndexed",
        "name": "hDeleteManyCase",
        "normalized": "Proxy a-\u003eProxy b-\u003eb-\u003eHList c-\u003eHList c",
        "package": "HList",
        "partial": "Delete Many Case",
        "signature": "Proxy b-\u003eProxy e-\u003ee-\u003eHList l-\u003eHList l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hProjectBy",
      "description": {
        "fct-module": "Data.HList.HTypeIndexed",
        "fct-package": "HList",
        "fct-signature": "Proxy ps -\u003e HList l -\u003e HList ps",
        "fct-source": "src/Data-HList-HTypeIndexed.html#hProjectBy",
        "fct-type": "function",
        "title": "hProjectBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HTypeIndexed",
        "module": "Data.HList.HTypeIndexed",
        "name": "hProjectBy",
        "normalized": "Proxy a-\u003eHList b-\u003eHList a",
        "package": "HList",
        "partial": "Project By",
        "signature": "Proxy ps-\u003eHList l-\u003eHList ps"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hSplitBy",
      "description": {
        "fct-module": "Data.HList.HTypeIndexed",
        "fct-package": "HList",
        "fct-signature": "Proxy ps -\u003e HList l -\u003e (HList (HProjectByHNatsR ns l), HList (HProjectAwayByHNatsR ns l))",
        "fct-source": "src/Data-HList-HTypeIndexed.html#hSplitBy",
        "fct-type": "function",
        "title": "hSplitBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HTypeIndexed",
        "module": "Data.HList.HTypeIndexed",
        "name": "hSplitBy",
        "normalized": "Proxy a-\u003eHList b-\u003e(HList(HProjectByHNatsR c b),HList(HProjectAwayByHNatsR c b))",
        "package": "HList",
        "partial": "Split By",
        "signature": "Proxy ps-\u003eHList l-\u003e(HList(HProjectByHNatsR ns l),HList(HProjectAwayByHNatsR ns l))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hType2HNat",
      "description": {
        "fct-module": "Data.HList.HTypeIndexed",
        "fct-package": "HList",
        "fct-signature": "Proxy e -\u003e l -\u003e Proxy n",
        "fct-source": "src/Data-HList-HTypeIndexed.html#hType2HNat",
        "fct-type": "function",
        "title": "hType2HNat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HTypeIndexed",
        "module": "Data.HList.HTypeIndexed",
        "name": "hType2HNat",
        "normalized": "Proxy a-\u003eb-\u003eProxy c",
        "package": "HList",
        "partial": "Type HNat",
        "signature": "Proxy e-\u003el-\u003eProxy n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hTypes2HNats",
      "description": {
        "fct-module": "Data.HList.HTypeIndexed",
        "fct-package": "HList",
        "fct-signature": "[HNat])",
        "fct-source": "src/Data-HList-HTypeIndexed.html#hTypes2HNats",
        "fct-type": "function",
        "title": "hTypes2HNats"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HTypeIndexed",
        "module": "Data.HList.HTypeIndexed",
        "name": "hTypes2HNats",
        "normalized": "[HNat])",
        "package": "HList",
        "partial": "Types HNats",
        "signature": "[HNat])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hUpdateAt",
      "description": {
        "fct-module": "Data.HList.HTypeIndexed",
        "fct-package": "HList",
        "fct-signature": "e -\u003e HList l -\u003e HList (HUpdateAtHNatR n e l)",
        "fct-source": "src/Data-HList-HTypeIndexed.html#hUpdateAt",
        "fct-type": "function",
        "title": "hUpdateAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HTypeIndexed",
        "module": "Data.HList.HTypeIndexed",
        "name": "hUpdateAt",
        "normalized": "a-\u003eHList b-\u003eHList(HUpdateAtHNatR c a b)",
        "package": "HList",
        "partial": "Update At",
        "signature": "e-\u003eHList l-\u003eHList(HUpdateAtHNatR n e l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eZipping and unzipping for (conceptually) lists of pairs.\n\u003c/p\u003e\u003cp\u003eProvides two alternative implementations\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-HZip.html",
        "fct-type": "module",
        "title": "HZip"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Zipping and unzipping for conceptually lists of pairs Provides two alternative implementations",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "HZip",
        "normalized": "",
        "package": "HList",
        "partial": "HZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:Fst",
      "description": {
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "Fst",
        "fct-type": "function",
        "title": "Fst"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "Fst",
        "normalized": "",
        "package": "HList",
        "partial": "Fst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:HUnZip",
      "description": {
        "fct-descr": "\u003cp\u003eHZipR in the superclass constraint doesn't hurt, but it doesn't seem to be\n necessary\n\u003c/p\u003e",
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HZip.html#HUnZip",
        "fct-type": "class",
        "title": "HUnZip"
      },
      "index": {
        "description": "HZipR in the superclass constraint doesn hurt but it doesn seem to be necessary",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "HUnZip",
        "normalized": "",
        "package": "HList",
        "partial": "HUn Zip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:HZip",
      "description": {
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HZip.html#HZip",
        "fct-type": "class",
        "title": "HZip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "HZip",
        "normalized": "",
        "package": "HList",
        "partial": "HZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:HZip3",
      "description": {
        "fct-descr": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003eHZip\u003c/a\u003e\u003c/code\u003e but HCons the elements of x onto y. This might be doable as\n a \u003ccode\u003ehMap f (hZip x y)\u003c/code\u003e, but that one doesn't propagate types as easily it\n seems.\n\u003c/p\u003e",
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-HZip.html#HZip3",
        "fct-type": "class",
        "title": "HZip3"
      },
      "index": {
        "description": "same as HZip but HCons the elements of onto This might be doable as hMap hZip but that one doesn propagate types as easily it seems",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "HZip3",
        "normalized": "",
        "package": "HList",
        "partial": "HZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:HZipF",
      "description": {
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-HZip.html#HZipF",
        "fct-type": "data",
        "title": "HZipF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "HZipF",
        "normalized": "",
        "package": "HList",
        "partial": "HZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:HZipR",
      "description": {
        "fct-descr": "\u003cp\u003ecalculates something like:\n\u003c/p\u003e\u003cpre\u003e [a] -\u003e [b] -\u003e [(a,b)]\n\u003c/pre\u003e\u003cp\u003ecan be used to give another type for \u003ccode\u003e\u003ca\u003ehZip2\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e hZip2 :: HList a -\u003e HList b -\u003e HList (HZipR a b)\n\u003c/pre\u003e",
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "HZipR",
        "fct-type": "function",
        "title": "HZipR"
      },
      "index": {
        "description": "calculates something like can be used to give another type for hZip2 hZip2 HList HList HList HZipR",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "HZipR",
        "normalized": "",
        "package": "HList",
        "partial": "HZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:Snd",
      "description": {
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "Snd",
        "fct-type": "function",
        "title": "Snd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "Snd",
        "normalized": "",
        "package": "HList",
        "partial": "Snd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:HZipF",
      "description": {
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "HZipF",
        "fct-source": "src/Data-HList-HZip.html#HZipF",
        "fct-type": "function",
        "title": "HZipF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "HZipF",
        "normalized": "",
        "package": "HList",
        "partial": "HZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:hTranspose",
      "description": {
        "fct-descr": "\u003cp\u003ethis transpose requires equal-length HLists inside a HList:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.HList.HListPrelude\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet ex = (1 .*. 2 .*. HNil) .*. ('a' .*. 'b' .*. HNil) .*. ( 3 .*. 5 .*. HNil) .*. HNil\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eThe original list:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eex\n\u003c/code\u003e\u003c/strong\u003eH[H[1, 2], H['a', 'b'], H[3, 5]]\n\u003c/pre\u003e\u003cp\u003eAnd transposed:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehTranspose ex\n\u003c/code\u003e\u003c/strong\u003eH[H[1, 'a', 3], H[2, 'b', 5]]\n\u003c/pre\u003e",
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "HList (: * (HList a) l) -\u003e HList c",
        "fct-source": "src/Data-HList-HZip.html#hTranspose",
        "fct-type": "function",
        "title": "hTranspose"
      },
      "index": {
        "description": "this transpose requires equal-length HLists inside HList import Data.HList.HListPrelude let ex HNil HNil HNil HNil The original list ex And transposed hTranspose ex",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "hTranspose",
        "normalized": "HList(*(HList a)b)-\u003eHList c",
        "package": "HList",
        "partial": "Transpose",
        "signature": "HList(*(HList a)l)-\u003eHList c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:hUnzip",
      "description": {
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e (HList x, HList y)",
        "fct-source": "src/Data-HList-HZip.html#hUnzip",
        "fct-type": "method",
        "title": "hUnzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "hUnzip",
        "normalized": "HList a-\u003e(HList b,HList c)",
        "package": "HList",
        "partial": "Unzip",
        "signature": "HList l-\u003e(HList x,HList y)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:hUnzip2",
      "description": {
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "HList z -\u003e (HList (MapFst z), HList (MapSnd z))",
        "fct-source": "src/Data-HList-HZip.html#hUnzip2",
        "fct-type": "method",
        "title": "hUnzip2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "hUnzip2",
        "normalized": "HList a-\u003e(HList(MapFst a),HList(MapSnd a))",
        "package": "HList",
        "partial": "Unzip",
        "signature": "HList z-\u003e(HList(MapFst z),HList(MapSnd z))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:hZip",
      "description": {
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "HList x -\u003e HList y -\u003e HList l",
        "fct-source": "src/Data-HList-HZip.html#hZip",
        "fct-type": "method",
        "title": "hZip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "hZip",
        "normalized": "HList a-\u003eHList b-\u003eHList c",
        "package": "HList",
        "partial": "Zip",
        "signature": "HList x-\u003eHList y-\u003eHList l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:hZip2",
      "description": {
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "HList (MapFst z) -\u003e HList (MapSnd z) -\u003e HList z",
        "fct-source": "src/Data-HList-HZip.html#hZip2",
        "fct-type": "method",
        "title": "hZip2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "hZip2",
        "normalized": "HList(MapFst a)-\u003eHList(MapSnd a)-\u003eHList a",
        "package": "HList",
        "partial": "Zip",
        "signature": "HList(MapFst z)-\u003eHList(MapSnd z)-\u003eHList z"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:hZip3",
      "description": {
        "fct-module": "Data.HList.HZip",
        "fct-package": "HList",
        "fct-signature": "HList x -\u003e HList y -\u003e HList l",
        "fct-source": "src/Data-HList-HZip.html#hZip3",
        "fct-type": "method",
        "title": "hZip3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList HZip",
        "module": "Data.HList.HZip",
        "name": "hZip3",
        "normalized": "HList a-\u003eHList b-\u003eHList c",
        "package": "HList",
        "partial": "Zip",
        "signature": "HList x-\u003eHList y-\u003eHList l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ekeyword functions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-Keyword.html",
        "fct-type": "module",
        "title": "Keyword"
      },
      "index": {
        "description": "keyword functions",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "Keyword",
        "normalized": "",
        "package": "HList",
        "partial": "Keyword",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:Arg",
      "description": {
        "fct-descr": "\u003cp\u003eThe datatype Arg below is to maintain the state of keyword\naccumulation: which keywords we need, and which keyword and values we\nhave already got.\narg_types is the phantom HList of keywords that are yet to be satisfied.\narg_values is the \u003ccode\u003eHList (kw .*. kw_value .*. etc)\u003c/code\u003e\nof already found keywords and their values.\n\u003c/p\u003e",
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-Keyword.html#Arg",
        "fct-type": "newtype",
        "title": "Arg"
      },
      "index": {
        "description": "The datatype Arg below is to maintain the state of keyword accumulation which keywords we need and which keyword and values we have already got arg types is the phantom HList of keywords that are yet to be satisfied arg values is the HList kw kw value etc of already found keywords and their values",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "Arg",
        "normalized": "",
        "package": "HList",
        "partial": "Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:ErrReqdArgNotFound",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Keyword.html#ErrReqdArgNotFound",
        "fct-type": "data",
        "title": "ErrReqdArgNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "ErrReqdArgNotFound",
        "normalized": "",
        "package": "HList",
        "partial": "Err Reqd Arg Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:ErrUnexpectedKW",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Keyword.html#ErrUnexpectedKW",
        "fct-type": "data",
        "title": "ErrUnexpectedKW"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "ErrUnexpectedKW",
        "normalized": "",
        "package": "HList",
        "partial": "Err Unexpected KW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:HDelete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete e from l to yield l' The element e must occur in l\n\u003c/p\u003e",
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#HDelete",
        "fct-type": "class",
        "title": "HDelete"
      },
      "index": {
        "description": "Delete from to yield The element must occur in",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "HDelete",
        "normalized": "",
        "package": "HList",
        "partial": "HDelete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:HDelete-39-",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#HDelete%27",
        "fct-type": "class",
        "title": "HDelete'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "HDelete'",
        "normalized": "",
        "package": "HList",
        "partial": "HDelete'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:IsKeyFN",
      "description": {
        "fct-descr": "\u003cp\u003eAll our keywords must be registered\n\u003c/p\u003e",
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#IsKeyFN",
        "fct-type": "class",
        "title": "IsKeyFN"
      },
      "index": {
        "description": "All our keywords must be registered",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "IsKeyFN",
        "normalized": "",
        "package": "HList",
        "partial": "Is Key FN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:K",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Keyword.html#K",
        "fct-type": "data",
        "title": "K"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "K",
        "normalized": "",
        "package": "HList",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KW",
      "description": {
        "fct-descr": "\u003cp\u003eThe main class: collect and apply the keyword arguments\n\u003c/p\u003e",
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#KW",
        "fct-type": "class",
        "title": "KW"
      },
      "index": {
        "description": "The main class collect and apply the keyword arguments",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "KW",
        "normalized": "",
        "package": "HList",
        "partial": "KW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KW-39-",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#KW%27",
        "fct-type": "class",
        "title": "KW'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "KW'",
        "normalized": "",
        "package": "HList",
        "partial": "KW'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KWAcc",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the real argument to the Arg structure, and continue\n\u003c/p\u003e",
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#KWAcc",
        "fct-type": "class",
        "title": "KWAcc"
      },
      "index": {
        "description": "Add the real argument to the Arg structure and continue",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "KWAcc",
        "normalized": "",
        "package": "HList",
        "partial": "KWAcc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KWApply",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#KWApply",
        "fct-type": "class",
        "title": "KWApply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "KWApply",
        "normalized": "",
        "package": "HList",
        "partial": "KWApply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KWApply-39-",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#KWApply%27",
        "fct-type": "class",
        "title": "KWApply'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "KWApply'",
        "normalized": "",
        "package": "HList",
        "partial": "KWApply'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KWMerge",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the needed arguments from arg_def to arg_values and continue\nwith kwapply.\n\u003c/p\u003e\u003cp\u003eThat is, we try to satisfy the missing arguments from the defaults.\nIt will be a type error if some required arguments are missing \n\u003c/p\u003e",
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#KWMerge",
        "fct-type": "class",
        "title": "KWMerge"
      },
      "index": {
        "description": "Add the needed arguments from arg def to arg values and continue with kwapply That is we try to satisfy the missing arguments from the defaults It will be type error if some required arguments are missing",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "KWMerge",
        "normalized": "",
        "package": "HList",
        "partial": "KWMerge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KWMerge-39-",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#KWMerge%27",
        "fct-type": "class",
        "title": "KWMerge'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "KWMerge'",
        "normalized": "",
        "package": "HList",
        "partial": "KWMerge'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KWMerge-39--39-",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#KWMerge%27%27",
        "fct-type": "class",
        "title": "KWMerge''"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "KWMerge''",
        "normalized": "",
        "package": "HList",
        "partial": "KWMerge''",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:Kw",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ekw\u003c/code\u003e takes a \u003ccode\u003e\u003ca\u003eHList\u003c/a\u003e\u003c/code\u003e whose first element is a function, and the rest\nof the elements are default values.\nA useful trick is to have a final argument \u003ccode\u003e()\u003c/code\u003e which is not\neaten up by a label (A only takes 1 argument). That way when you supply\nthe () it knows there are no more arguments (?).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edata A = A\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einstance IsKeyFN (A -\u003e a -\u003e b) True\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f A a () = a + 1\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f' = f .*. A .*. 1 .*. HNil\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' A 0 ()\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' ()\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e",
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#Kw",
        "fct-type": "class",
        "title": "Kw"
      },
      "index": {
        "description": "kw takes HList whose first element is function and the rest of the elements are default values useful trick is to have final argument which is not eaten up by label only takes argument That way when you supply the it knows there are no more arguments data instance IsKeyFN True let let HNil kw kw",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "Kw",
        "normalized": "",
        "package": "HList",
        "partial": "Kw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:ReflectFK",
      "description": {
        "fct-descr": "\u003cp\u003eReflection on a function:\nGiven a function, return the type list of its keywords\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t reflect_fk (undefined::Size-\u003eInt-\u003eColor-\u003eCommonColor-\u003eString)\n\u003c/code\u003e\u003c/strong\u003ereflect_fk (undefined::Size-\u003eInt-\u003eColor-\u003eCommonColor-\u003eString)\n  :: Arg [*] ((':) * Size ((':) * Color ('[] *))) ('[] *)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t reflect_fk (undefined::Size-\u003eInt-\u003e()-\u003eInt)\n\u003c/code\u003e\u003c/strong\u003ereflect_fk (undefined::Size-\u003eInt-\u003e()-\u003eInt)\n  :: Arg [*] ((':) * Size ('[] *)) ('[] *)\n\u003c/pre\u003e",
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#ReflectFK",
        "fct-type": "class",
        "title": "ReflectFK"
      },
      "index": {
        "description": "Reflection on function Given function return the type list of its keywords reflect fk undefined Size Int Color CommonColor String reflect fk undefined Size Int Color CommonColor String Arg Size Color reflect fk undefined Size Int Int reflect fk undefined Size Int Int Arg Size",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "ReflectFK",
        "normalized": "",
        "package": "HList",
        "partial": "Reflect FK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:ReflectFK-39-",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Keyword.html#ReflectFK%27",
        "fct-type": "class",
        "title": "ReflectFK'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "ReflectFK'",
        "normalized": "",
        "package": "HList",
        "partial": "Reflect FK'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:Arg",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "Arg (HList arg_values)",
        "fct-source": "src/Data-HList-Keyword.html#Arg",
        "fct-type": "function",
        "title": "Arg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "Arg",
        "normalized": "",
        "package": "HList",
        "partial": "Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:K",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "K",
        "fct-source": "src/Data-HList-Keyword.html#K",
        "fct-type": "function",
        "title": "K"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "K",
        "normalized": "",
        "package": "HList",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kw",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "HList (fn : arg_def) -\u003e r",
        "fct-source": "src/Data-HList-Keyword.html#kw",
        "fct-type": "method",
        "title": "kw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "kw",
        "normalized": "HList(a b)-\u003ec",
        "package": "HList",
        "partial": "",
        "signature": "HList(fn arg_def)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kw-39-",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "Proxy rflag -\u003e f -\u003e arg_desc -\u003e HList arg_def -\u003e r",
        "fct-source": "src/Data-HList-Keyword.html#kw%27",
        "fct-type": "method",
        "title": "kw'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "kw'",
        "normalized": "Proxy a-\u003eb-\u003ec-\u003eHList d-\u003ee",
        "package": "HList",
        "partial": "",
        "signature": "Proxy rflag-\u003ef-\u003earg_desc-\u003eHList arg_def-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwaccum",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "arg_desc -\u003e kw -\u003e a -\u003e f -\u003e HList arg_def -\u003e r",
        "fct-source": "src/Data-HList-Keyword.html#kwaccum",
        "fct-type": "method",
        "title": "kwaccum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "kwaccum",
        "normalized": "a-\u003eb-\u003ec-\u003ed-\u003eHList e-\u003ef",
        "package": "HList",
        "partial": "",
        "signature": "arg_desc-\u003ekw-\u003ea-\u003ef-\u003eHList arg_def-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwapply",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "f -\u003e HList arg_values -\u003e r",
        "fct-source": "src/Data-HList-Keyword.html#kwapply",
        "fct-type": "method",
        "title": "kwapply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "kwapply",
        "normalized": "a-\u003eHList b-\u003ec",
        "package": "HList",
        "partial": "",
        "signature": "f-\u003eHList arg_values-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwapply-39-",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "Proxy flag -\u003e f -\u003e HList arg_values -\u003e r",
        "fct-source": "src/Data-HList-Keyword.html#kwapply%27",
        "fct-type": "method",
        "title": "kwapply'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "kwapply'",
        "normalized": "Proxy a-\u003eb-\u003eHList c-\u003ed",
        "package": "HList",
        "partial": "",
        "signature": "Proxy flag-\u003ef-\u003eHList arg_values-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwdo",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "f -\u003e arg_desc -\u003e HList arg_def -\u003e r",
        "fct-source": "src/Data-HList-Keyword.html#kwdo",
        "fct-type": "method",
        "title": "kwdo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "kwdo",
        "normalized": "a-\u003eb-\u003eHList c-\u003ed",
        "package": "HList",
        "partial": "",
        "signature": "f-\u003earg_desc-\u003eHList arg_def-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwmerge",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "Arg arg_needed arg_values -\u003e HList arg_def -\u003e f -\u003e r",
        "fct-source": "src/Data-HList-Keyword.html#kwmerge",
        "fct-type": "method",
        "title": "kwmerge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "kwmerge",
        "normalized": "Arg a b-\u003eHList c-\u003ed-\u003ee",
        "package": "HList",
        "partial": "",
        "signature": "Arg arg_needed arg_values-\u003eHList arg_def-\u003ef-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwmerge-39-",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "kw -\u003e HList list -\u003e Arg atail arg_values -\u003e HList arg_def -\u003e f -\u003e r",
        "fct-source": "src/Data-HList-Keyword.html#kwmerge%27",
        "fct-type": "method",
        "title": "kwmerge'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "kwmerge'",
        "normalized": "a-\u003eHList b-\u003eArg c d-\u003eHList e-\u003ef-\u003eg",
        "package": "HList",
        "partial": "",
        "signature": "kw-\u003eHList list-\u003eArg atail arg_values-\u003eHList arg_def-\u003ef-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwmerge-39--39-",
      "description": {
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "Proxy flag -\u003e kw -\u003e HList list -\u003e Arg atail arg_values -\u003e HList arg_def -\u003e f -\u003e r",
        "fct-source": "src/Data-HList-Keyword.html#kwmerge%27%27",
        "fct-type": "method",
        "title": "kwmerge''"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "kwmerge''",
        "normalized": "Proxy a-\u003eb-\u003eHList c-\u003eArg d e-\u003eHList f-\u003eg-\u003eh",
        "package": "HList",
        "partial": "",
        "signature": "Proxy flag-\u003ekw-\u003eHList list-\u003eArg atail arg_values-\u003eHList arg_def-\u003ef-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:recToKW",
      "description": {
        "fct-descr": "\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e into a list that can supply\ndefault arguments for \u003ccode\u003e\u003ca\u003ekw\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA bit of setup:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XQuasiQuotes\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f (_ :: Label \"a\") a (_ :: Label \"b\") b () = a `div` b\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet a = 2; b = 1; f' = f .*. recToKW [pun| a b |]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' ()\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' (Label :: Label \"a\") 10 ()\n\u003c/code\u003e\u003c/strong\u003e10\n\u003c/pre\u003e",
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "Record a -\u003e HList (HConcatR b)",
        "fct-source": "src/Data-HList-Keyword.html#recToKW",
        "fct-type": "function",
        "title": "recToKW"
      },
      "index": {
        "description": "convert Record into list that can supply default arguments for kw bit of setup set XQuasiQuotes let Label Label div let recToKW pun kw kw Label Label",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "recToKW",
        "normalized": "Record a-\u003eHList(HConcatR b)",
        "package": "HList",
        "partial": "To KW",
        "signature": "Record a-\u003eHList(HConcatR b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:reflect_fk",
      "description": {
        "fct-descr": "\u003cp\u003ethat reflects on a user-supplied function. It converts the *type* of a\nuser function to a collection of keywords required by that\nfunction. This and the previous contraptions may be used to define an\n\u003ccode\u003eextended\u003c/code\u003e version of some user function that takes more arguments --\nwithout the need to enumerate all arguments of the original\nfunction. We thus infringe on the area of object and module systems.\n\u003c/p\u003e\u003cp\u003eThe rest of the implementation is just to convert `kw fn defaults'\ninto the application of kwapply.\n\u003c/p\u003e\u003cp\u003eAnother key contraption is\n\u003c/p\u003e",
        "fct-module": "Data.HList.Keyword",
        "fct-package": "HList",
        "fct-signature": "fn -\u003e Arg kws `[]`",
        "fct-source": "src/Data-HList-Keyword.html#reflect_fk",
        "fct-type": "function",
        "title": "reflect_fk"
      },
      "index": {
        "description": "that reflects on user-supplied function It converts the type of user function to collection of keywords required by that function This and the previous contraptions may be used to define an extended version of some user function that takes more arguments without the need to enumerate all arguments of the original function We thus infringe on the area of object and module systems The rest of the implementation is just to convert kw fn defaults into the application of kwapply Another key contraption is",
        "hierarchy": "Data HList Keyword",
        "module": "Data.HList.Keyword",
        "name": "reflect_fk",
        "normalized": "a-\u003eArg b[]",
        "package": "HList",
        "partial": "",
        "signature": "fn-\u003eArg kws[]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Label3.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004-2006, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eA model of labels as needed for extensible records. As before,\n   all the information about labels is recorded in their type, so\n   the labels of records may be purely phantom. In general,\n   Labels are exclusively type-level entities and have no run-time\n   representation.\n\u003c/p\u003e\u003cp\u003eRecord labels are triplets of type-level naturals, namespace,\n   and description. The namespace part helps avoid confusions between\n   labels from different Haskell modules. The description is\n   an arbitrary nullary type constructor.\n\u003c/p\u003e\u003cp\u003eFor the sake of printing, the description is required to be the\n   instance of Show. One must make sure that the show functions does\n   not examine the value, as descr is purely phantom. Here's an\n   example of the good Label description:\n\u003c/p\u003e\u003cpre\u003e     data MyLabelDescr; instance Show MyLabelDescr where show _ = \"descr\"\n\u003c/pre\u003e\u003cp\u003ewhich are automated by makeLabels3 from \u003ca\u003eData.HList.MakeLabel\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis model even allows the labels in a record to belong to different\n   namespaces. To this end, the model employs the predicate for type\n   equality.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.Label3",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-Label3.html",
        "fct-type": "module",
        "title": "Label3"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke model of labels as needed for extensible records As before all the information about labels is recorded in their type so the labels of records may be purely phantom In general Labels are exclusively type-level entities and have no run-time representation Record labels are triplets of type-level naturals namespace and description The namespace part helps avoid confusions between labels from different Haskell modules The description is an arbitrary nullary type constructor For the sake of printing the description is required to be the instance of Show One must make sure that the show functions does not examine the value as descr is purely phantom Here an example of the good Label description data MyLabelDescr instance Show MyLabelDescr where show descr which are automated by makeLabels3 from Data.HList.MakeLabel This model even allows the labels in record to belong to different namespaces To this end the model employs the predicate for type equality",
        "hierarchy": "Data HList Label3",
        "module": "Data.HList.Label3",
        "name": "Label3",
        "normalized": "",
        "package": "HList",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Label3.html#t:Lbl",
      "description": {
        "fct-module": "Data.HList.Label3",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Label3.html#Lbl",
        "fct-type": "data",
        "title": "Lbl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Label3",
        "module": "Data.HList.Label3",
        "name": "Lbl",
        "normalized": "",
        "package": "HList",
        "partial": "Lbl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Label3.html#v:firstLabel",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the first label\n\u003c/p\u003e",
        "fct-module": "Data.HList.Label3",
        "fct-package": "HList",
        "fct-signature": "ns -\u003e desc -\u003e Label (Lbl HZero ns desc)",
        "fct-source": "src/Data-HList-Label3.html#firstLabel",
        "fct-type": "function",
        "title": "firstLabel"
      },
      "index": {
        "description": "Construct the first label",
        "hierarchy": "Data HList Label3",
        "module": "Data.HList.Label3",
        "name": "firstLabel",
        "normalized": "a-\u003eb-\u003eLabel(Lbl HZero a b)",
        "package": "HList",
        "partial": "Label",
        "signature": "ns-\u003edesc-\u003eLabel(Lbl HZero ns desc)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Label3.html#v:nextLabel",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the next label\n\u003c/p\u003e",
        "fct-module": "Data.HList.Label3",
        "fct-package": "HList",
        "fct-signature": "Label (Lbl x ns desc) -\u003e desc' -\u003e Label (Lbl (HSucc x) ns desc')",
        "fct-source": "src/Data-HList-Label3.html#nextLabel",
        "fct-type": "function",
        "title": "nextLabel"
      },
      "index": {
        "description": "Construct the next label",
        "hierarchy": "Data HList Label3",
        "module": "Data.HList.Label3",
        "name": "nextLabel",
        "normalized": "Label(Lbl a b c)-\u003ed-\u003eLabel(Lbl(HSucc a)b d)",
        "package": "HList",
        "partial": "Label",
        "signature": "Label(Lbl x ns desc)-\u003edesc'-\u003eLabel(Lbl(HSucc x)ns desc')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Label6.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eYet another model of labels.\n\u003c/p\u003e\u003cp\u003eLabels are promoted Strings or Integers \u003ca\u003eGHC.TypeLits\u003c/a\u003e inside the\n   \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e. Needs ghc7.6 or higher.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.HList.CommonMain\u003c/a\u003e for an example.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.Label6",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-Label6.html",
        "fct-type": "module",
        "title": "Label6"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Yet another model of labels Labels are promoted Strings or Integers GHC.TypeLits inside the Label Needs ghc7.6 or higher See Data.HList.CommonMain for an example",
        "hierarchy": "Data HList Label6",
        "module": "Data.HList.Label6",
        "name": "Label6",
        "normalized": "",
        "package": "HList",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple problem is being solved here, but unfortunately it\nis a bit involved. The idea is to use the same haskell identifier \nfor a lens and for other purposes. In other words, get the same\nbehavior as:\n\u003c/p\u003e\u003cpre\u003e x = hLens (Label :: Label \"x\")\n r ^. x\n\u003c/pre\u003e\u003cp\u003eWhile still being able to extract the symbol \"x\" from x, so that things\nlike \u003ccode\u003ex .=. 123\u003c/code\u003e could be acceptable. In this case we don't overload \u003ccode\u003e\u003ca\u003e.=.\u003c/a\u003e\u003c/code\u003e,\nso instead you have to write \u003ccode\u003ex .==. 123\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eElaboration of some ideas from edwardk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.Labelable",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-Labelable.html",
        "fct-type": "module",
        "title": "Labelable"
      },
      "index": {
        "description": "simple problem is being solved here but unfortunately it is bit involved The idea is to use the same haskell identifier for lens and for other purposes In other words get the same behavior as hLens Label Label While still being able to extract the symbol from so that things like could be acceptable In this case we don overload so instead you have to write Elaboration of some ideas from edwardk",
        "hierarchy": "Data HList Labelable",
        "module": "Data.HList.Labelable",
        "name": "Labelable",
        "normalized": "",
        "package": "HList",
        "partial": "Labelable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#t:Identity",
      "description": {
        "fct-module": "Data.HList.Labelable",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Identity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Labelable",
        "module": "Data.HList.Labelable",
        "name": "Identity",
        "normalized": "",
        "package": "HList",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#t:Labelable",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ef s t a b\u003c/code\u003e type parameters are the same as those that make\n\u003ca\u003eControl.Lens\u003c/a\u003e work.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003en\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is the index in the HList at which the value will be found\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003el\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is the label for the field (tends to be \u003ccode\u003e\u003ca\u003eSymbol\u003c/a\u003e\u003c/code\u003e)\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ep\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is \u003ccode\u003e-\u003e\u003c/code\u003e when the result is used as a lens, or \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e when used\n      as an argument to \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Data.HList.Labelable",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Labelable.html#Labelable",
        "fct-type": "class",
        "title": "Labelable"
      },
      "index": {
        "description": "type parameters are the same as those that make Control.Lens work is the index in the HList at which the value will be found is the label for the field tends to be Symbol is when the result is used as lens or Labeled when used as an argument to",
        "hierarchy": "Data HList Labelable",
        "module": "Data.HList.Labelable",
        "name": "Labelable",
        "normalized": "",
        "package": "HList",
        "partial": "Labelable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#t:Labeled",
      "description": {
        "fct-module": "Data.HList.Labelable",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Labelable.html#Labeled",
        "fct-type": "data",
        "title": "Labeled"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Labelable",
        "module": "Data.HList.Labelable",
        "name": "Labeled",
        "normalized": "",
        "package": "HList",
        "partial": "Labeled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#t:ToSym",
      "description": {
        "fct-descr": "\u003cp\u003eextracts the type that is actually the label in \u003ccode\u003ea\u003c/code\u003e and puts it in \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.Labelable",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Labelable.html#ToSym",
        "fct-type": "class",
        "title": "ToSym"
      },
      "index": {
        "description": "extracts the type that is actually the label in and puts it in",
        "hierarchy": "Data HList Labelable",
        "module": "Data.HList.Labelable",
        "name": "ToSym",
        "normalized": "",
        "package": "HList",
        "partial": "To Sym",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#v:.-61--61-.",
      "description": {
        "fct-descr": "\u003cp\u003emodification of \u003ccode\u003e\u003ca\u003e.=.\u003c/a\u003e\u003c/code\u003e which works with the labels from this module,\n and those from \u003ca\u003eData.HList.Label6\u003c/a\u003e. Note that this is not strictly a\n generalization of \u003ccode\u003e\u003ca\u003e.=.\u003c/a\u003e\u003c/code\u003e, since it does not work with labels like\n \u003ca\u003eData.HList.Label3\u003c/a\u003e which have the wrong kind.\n\u003c/p\u003e",
        "fct-module": "Data.HList.Labelable",
        "fct-package": "HList",
        "fct-signature": "t -\u003e v -\u003e LVPair Symbol l v",
        "fct-source": "src/Data-HList-Labelable.html#.%3D%3D.",
        "fct-type": "function",
        "title": "(.==.)"
      },
      "index": {
        "description": "modification of which works with the labels from this module and those from Data.HList.Label6 Note that this is not strictly generalization of since it does not work with labels like Data.HList.Label3 which have the wrong kind",
        "hierarchy": "Data HList Labelable",
        "module": "Data.HList.Labelable",
        "name": "(.==.) .==.",
        "normalized": "a-\u003eb-\u003eLVPair Symbol c b",
        "package": "HList",
        "partial": "",
        "signature": "t-\u003ev-\u003eLVPair Symbol l v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#v:Labeled",
      "description": {
        "fct-module": "Data.HList.Labelable",
        "fct-package": "HList",
        "fct-signature": "Labeled",
        "fct-source": "src/Data-HList-Labelable.html#Labeled",
        "fct-type": "function",
        "title": "Labeled"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Labelable",
        "module": "Data.HList.Labelable",
        "name": "Labeled",
        "normalized": "",
        "package": "HList",
        "partial": "Labeled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#v:hLens-39-",
      "description": {
        "fct-module": "Data.HList.Labelable",
        "fct-package": "HList",
        "fct-signature": "Label l -\u003e p (a -\u003e f b) (Record s -\u003e f (Record t))",
        "fct-source": "src/Data-HList-Labelable.html#hLens%27",
        "fct-type": "method",
        "title": "hLens'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Labelable",
        "module": "Data.HList.Labelable",
        "name": "hLens'",
        "normalized": "Label a-\u003eb(c-\u003ed e)(Record f-\u003ed(Record g))",
        "package": "HList",
        "partial": "Lens'",
        "signature": "Label l-\u003ep(a-\u003ef b)(Record s-\u003ef(Record t))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#v:makeLabelable",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emakeLabelable \"x y z\"\u003c/code\u003e will generate haskell identifiers that work with \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e and\nare also lenses.\n\u003c/p\u003e\u003cpre\u003e x = hLens' (Label :: Label \"x\")\n y = hLens' (Label :: Label \"y\")\n z = hLens' (Label :: Label \"z\")\n\u003c/pre\u003e",
        "fct-module": "Data.HList.Labelable",
        "fct-package": "HList",
        "fct-signature": "String -\u003e Q [Dec]",
        "fct-source": "src/Data-HList-Labelable.html#makeLabelable",
        "fct-type": "function",
        "title": "makeLabelable"
      },
      "index": {
        "description": "makeLabelable will generate haskell identifiers that work with and are also lenses hLens Label Label hLens Label Label hLens Label Label",
        "hierarchy": "Data HList Labelable",
        "module": "Data.HList.Labelable",
        "name": "makeLabelable",
        "normalized": "String-\u003eQ[Dec]",
        "package": "HList",
        "partial": "Labelable",
        "signature": "String-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#v:toLabel",
      "description": {
        "fct-module": "Data.HList.Labelable",
        "fct-package": "HList",
        "fct-signature": "Symbol)",
        "fct-source": "src/Data-HList-Labelable.html#toLabel",
        "fct-type": "function",
        "title": "toLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Labelable",
        "module": "Data.HList.Labelable",
        "name": "toLabel",
        "normalized": "",
        "package": "HList",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-MakeLabels.html#",
      "description": {
        "fct-module": "Data.HList.MakeLabels",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-MakeLabels.html",
        "fct-type": "module",
        "title": "MakeLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList MakeLabels",
        "module": "Data.HList.MakeLabels",
        "name": "MakeLabels",
        "normalized": "",
        "package": "HList",
        "partial": "Make Labels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-MakeLabels.html#v:makeLabels",
      "description": {
        "fct-descr": "\u003cp\u003eLabels like \u003ca\u003eData.HList.Label4\u003c/a\u003e used to provide (only no Typeable).\n\u003c/p\u003e\u003cp\u003eThe following TH declaration splice should be placed at top-level, before the\n created values are used. Enable \u003ccode\u003e-XTemplateHaskell\u003c/code\u003e too.\n\u003c/p\u003e\u003cpre\u003e  makeLabels [\"getX\",\"getY\",\"draw\",\"X\"]\n\u003c/pre\u003e\u003cp\u003eshould expand into the following declarations\n\u003c/p\u003e\u003cpre\u003e data LabelGetX\n data LabelGetY\n data LabelDraw\n data LabelX\n\u003c/pre\u003e\u003cpre\u003e getX = Label :: Label LabelGetX\n getY = Label :: Label LabelGetY\n draw = Label :: Label LabelDraw\n x    = Label :: Label LabelX\n\u003c/pre\u003e\u003cpre\u003e instance ShowLabel LabelGetX where showLabel = \\_ -\u003e \"getX\"\n instance ShowLabel LabelGetY where showLabel = \\_ -\u003e \"getY\"\n instance ShowLabel LabelDraw where showLabel = \\_ -\u003e \"draw\"\n\u003c/pre\u003e",
        "fct-module": "Data.HList.MakeLabels",
        "fct-package": "HList",
        "fct-signature": "[String] -\u003e Q [Dec]",
        "fct-source": "src/Data-HList-MakeLabels.html#makeLabels",
        "fct-type": "function",
        "title": "makeLabels"
      },
      "index": {
        "description": "Labels like Data.HList.Label4 used to provide only no Typeable The following TH declaration splice should be placed at top-level before the created values are used Enable XTemplateHaskell too makeLabels getX getY draw should expand into the following declarations data LabelGetX data LabelGetY data LabelDraw data LabelX getX Label Label LabelGetX getY Label Label LabelGetY draw Label Label LabelDraw Label Label LabelX instance ShowLabel LabelGetX where showLabel getX instance ShowLabel LabelGetY where showLabel getY instance ShowLabel LabelDraw where showLabel draw",
        "hierarchy": "Data HList MakeLabels",
        "module": "Data.HList.MakeLabels",
        "name": "makeLabels",
        "normalized": "[String]-\u003eQ[Dec]",
        "package": "HList",
        "partial": "Labels",
        "signature": "[String]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-MakeLabels.html#v:makeLabels3",
      "description": {
        "fct-descr": "\u003cp\u003efor \u003ca\u003eData.HList.Label3\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.MakeLabels",
        "fct-package": "HList",
        "fct-signature": "String-\u003e [String]-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "makeLabels3"
      },
      "index": {
        "description": "for Data.HList.Label3",
        "hierarchy": "Data HList MakeLabels",
        "module": "Data.HList.MakeLabels",
        "name": "makeLabels3",
        "normalized": "String-\u003e[String]-\u003eQ[Dec]",
        "package": "HList",
        "partial": "Labels",
        "signature": "String-\u003e[String]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-MakeLabels.html#v:makeLabels6",
      "description": {
        "fct-descr": "\u003cp\u003efor \u003ca\u003eData.HList.Label6\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.MakeLabels",
        "fct-package": "HList",
        "fct-signature": "[String] -\u003e Q [Dec]",
        "fct-source": "src/Data-HList-MakeLabels.html#makeLabels6",
        "fct-type": "function",
        "title": "makeLabels6"
      },
      "index": {
        "description": "for Data.HList.Label6",
        "hierarchy": "Data HList MakeLabels",
        "module": "Data.HList.MakeLabels",
        "name": "makeLabels6",
        "normalized": "[String]-\u003eQ[Dec]",
        "package": "HList",
        "partial": "Labels",
        "signature": "[String]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004-2006, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eExtensible records\n\u003c/p\u003e\u003cp\u003eThe three-ish models of labels that go with this module;\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.HList.Label3\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.HList.MakeLabels\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese used to work:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.HList.Label1\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.HList.Label2\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.HList.Label4\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.HList.Label5\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-Record.html",
        "fct-type": "module",
        "title": "Record"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Extensible records The three-ish models of labels that go with this module Data.HList.Label3 Data.HList.MakeLabels These used to work Data.HList.Label1 Data.HList.Label2 Data.HList.Label4 Data.HList.Label5",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "Record",
        "normalized": "",
        "package": "HList",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:DuplicatedLabel",
      "description": {
        "fct-descr": "\u003cp\u003ePropery of a proper label set for a record: no duplication of labels\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Record.html#DuplicatedLabel",
        "fct-type": "data",
        "title": "DuplicatedLabel"
      },
      "index": {
        "description": "Propery of proper label set for record no duplication of labels",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "DuplicatedLabel",
        "normalized": "",
        "package": "HList",
        "partial": "Duplicated Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:ExtraField",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Record.html#ExtraField",
        "fct-type": "data",
        "title": "ExtraField"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "ExtraField",
        "normalized": "",
        "package": "HList",
        "partial": "Extra Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:FieldNotFound",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Record.html#FieldNotFound",
        "fct-type": "data",
        "title": "FieldNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "FieldNotFound",
        "normalized": "",
        "package": "HList",
        "partial": "Field Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:H2ProjectByLabels",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eInvariant\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003e r === rin `disjoint-union` rout\n labels rin === ls\n     where (rin,rout) = hProjectByLabels ls r\n\u003c/pre\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#H2ProjectByLabels",
        "fct-type": "class",
        "title": "H2ProjectByLabels"
      },
      "index": {
        "description": "Invariant rin disjoint-union rout labels rin ls where rin rout hProjectByLabels ls",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "H2ProjectByLabels",
        "normalized": "",
        "package": "HList",
        "partial": "Project By Labels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:H2ProjectByLabels-39-",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#H2ProjectByLabels%27",
        "fct-type": "class",
        "title": "H2ProjectByLabels'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "H2ProjectByLabels'",
        "normalized": "",
        "package": "HList",
        "partial": "Project By Labels'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HLabelSet",
      "description": {
        "fct-descr": "\u003cp\u003eRelation between HLabelSet and HRLabelSet\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#HLabelSet",
        "fct-type": "class",
        "title": "HLabelSet"
      },
      "index": {
        "description": "Relation between HLabelSet and HRLabelSet",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "HLabelSet",
        "normalized": "",
        "package": "HList",
        "partial": "HLabel Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HLabelSet-39-",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#HLabelSet%27",
        "fct-type": "class",
        "title": "HLabelSet'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "HLabelSet'",
        "normalized": "",
        "package": "HList",
        "partial": "HLabel Set'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HLeftUnion",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#HLeftUnion",
        "fct-type": "class",
        "title": "HLeftUnion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "HLeftUnion",
        "normalized": "",
        "package": "HList",
        "partial": "HLeft Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HLeftUnionBool",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#HLeftUnionBool",
        "fct-type": "class",
        "title": "HLeftUnionBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "HLeftUnionBool",
        "normalized": "",
        "package": "HList",
        "partial": "HLeft Union Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HRLabelSet",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#HRLabelSet",
        "fct-type": "class",
        "title": "HRLabelSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "HRLabelSet",
        "normalized": "",
        "package": "HList",
        "partial": "HRLabel Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HRLabelSet-39-",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#HRLabelSet%27",
        "fct-type": "class",
        "title": "HRLabelSet'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "HRLabelSet'",
        "normalized": "",
        "package": "HList",
        "partial": "HRLabel Set'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HRearrange",
      "description": {
        "fct-descr": "\u003cp\u003eHelper class for \u003ccode\u003e\u003ca\u003ehRearrange\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#HRearrange",
        "fct-type": "class",
        "title": "HRearrange"
      },
      "index": {
        "description": "Helper class for hRearrange",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "HRearrange",
        "normalized": "",
        "package": "HList",
        "partial": "HRearrange",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HRearrange-39-",
      "description": {
        "fct-descr": "\u003cp\u003eHelper class 2 for \u003ccode\u003e\u003ca\u003ehRearrange\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#HRearrange%27",
        "fct-type": "class",
        "title": "HRearrange'"
      },
      "index": {
        "description": "Helper class for hRearrange",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "HRearrange'",
        "normalized": "",
        "package": "HList",
        "partial": "HRearrange'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HasField",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a baseline implementation.\n We use a helper class, HasField, to abstract from the implementation.\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003e\u003ca\u003ehLookupByLabel\u003c/a\u003e\u003c/code\u003e is so frequent and important, we implement\n it separately, more efficiently. The algorithm is familiar assq, only\n the comparison operation is done at compile-time\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#HasField",
        "fct-type": "class",
        "title": "HasField"
      },
      "index": {
        "description": "This is baseline implementation We use helper class HasField to abstract from the implementation Because hLookupByLabel is so frequent and important we implement it separately more efficiently The algorithm is familiar assq only the comparison operation is done at compile-time",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "HasField",
        "normalized": "",
        "package": "HList",
        "partial": "Has Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HasField-39-",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#HasField%27",
        "fct-type": "class",
        "title": "HasField'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "HasField'",
        "normalized": "",
        "package": "HList",
        "partial": "Has Field'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:LVPair",
      "description": {
        "fct-descr": "\u003cp\u003eField of label l with value type v\n Polykinded with respect to l: label may be a symbol, a nat, etc.\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-Record.html#LVPair",
        "fct-type": "newtype",
        "title": "LVPair"
      },
      "index": {
        "description": "Field of label with value type Polykinded with respect to label may be symbol nat etc",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "LVPair",
        "normalized": "",
        "package": "HList",
        "partial": "LVPair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:LabelsOf",
      "description": {
        "fct-descr": "\u003cp\u003eMaking this ls::[*] and [k] breaks the MainGhcGeneric1.hs...\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "LabelsOf",
        "fct-type": "function",
        "title": "LabelsOf"
      },
      "index": {
        "description": "Making this ls and breaks the MainGhcGeneric1.hs",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "LabelsOf",
        "normalized": "",
        "package": "HList",
        "partial": "Labels Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:Record",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-Record.html#Record",
        "fct-type": "newtype",
        "title": "Record"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "Record",
        "normalized": "",
        "package": "HList",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:RecordLabels",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the (phantom) list of labels of the record.\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "RecordLabels",
        "fct-type": "function",
        "title": "RecordLabels"
      },
      "index": {
        "description": "Construct the phantom list of labels of the record",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "RecordLabels",
        "normalized": "",
        "package": "HList",
        "partial": "Record Labels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:RecordValues",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the HList of values of the record.\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#RecordValues",
        "fct-type": "class",
        "title": "RecordValues"
      },
      "index": {
        "description": "Construct the HList of values of the record",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "RecordValues",
        "normalized": "",
        "package": "HList",
        "partial": "Record Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:ShowComponents",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#ShowComponents",
        "fct-type": "class",
        "title": "ShowComponents"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "ShowComponents",
        "normalized": "",
        "package": "HList",
        "partial": "Show Components",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:ShowLabel",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-FakePrelude.html#ShowLabel",
        "fct-type": "class",
        "title": "ShowLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "ShowLabel",
        "normalized": "",
        "package": "HList",
        "partial": "Show Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:UnionSymRec",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#UnionSymRec",
        "fct-type": "class",
        "title": "UnionSymRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "UnionSymRec",
        "normalized": "",
        "package": "HList",
        "partial": "Union Sym Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:UnionSymRec-39-",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-Record.html#UnionSymRec%27",
        "fct-type": "class",
        "title": "UnionSymRec'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "UnionSymRec'",
        "normalized": "",
        "package": "HList",
        "partial": "Union Sym Rec'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-33-.",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a value in a record by its label. Analagous to (!!), the\n  list indexing operation. Highest fixity, like (\u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:{\n\u003c/code\u003e\u003c/strong\u003elet record1 = x .=. 3 .*.\n              y .=. 'y' .*.\n              emptyRecord\n:}\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erecord1 .!. x\n\u003c/code\u003e\u003c/strong\u003e3\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erecord1 .!. y\n\u003c/code\u003e\u003c/strong\u003e'y'\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:{\n\u003c/code\u003e\u003c/strong\u003elet r2 = y .=. record1 .!. x .*.\n         z .=. record1 .!. y .*.\n         emptyRecord\n:}\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003er2\n\u003c/code\u003e\u003c/strong\u003eRecord{y=3,z='y'}\n\u003c/pre\u003e\u003cp\u003eNote that labels made following \u003ca\u003eData.HList.Labelable\u003c/a\u003e allow\n  using \u003ca\u003eControl.Lens.^.\u003c/a\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "r -\u003e Label l -\u003e v",
        "fct-source": "src/Data-HList-Record.html#.%21.",
        "fct-type": "function",
        "title": "(.!.)"
      },
      "index": {
        "description": "Lookup value in record by its label Analagous to the list indexing operation Highest fixity like let record1 emptyRecord record1 record1 let r2 record1 record1 emptyRecord r2 Record Note that labels made following Data.HList.Labelable allow using Control.Lens instead",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "(.!.) .!.",
        "normalized": "a-\u003eLabel b-\u003ec",
        "package": "HList",
        "partial": "",
        "signature": "r-\u003eLabel l-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-42-.",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "e -\u003e l -\u003e HExtendR e l",
        "fct-source": "src/Data-HList-HListPrelude.html#.%2A.",
        "fct-type": "function",
        "title": "(.*.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "(.*.) .*.",
        "normalized": "a-\u003eb-\u003eHExtendR a b",
        "package": "HList",
        "partial": "",
        "signature": "e-\u003el-\u003eHExtendR e l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-45-.",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a field from a record. At the same\n  level as other record modification options (\u003ccode\u003e\u003ca\u003e.*.\u003c/a\u003e\u003c/code\u003e). Analagous\n  to (\u003ccode\u003e\\\\\u003c/code\u003e) in lists.\n\u003c/p\u003e\u003cpre\u003e record1 .-. label1\n\u003c/pre\u003e\u003cpre\u003e label1 .=. value1 .*.\n label2 .=. value2 .-.\n label2 .*.\n emptyRecord\n\u003c/pre\u003e\u003cpre\u003e label1 .=. value1 .-.\n label1 .*.\n label2 .=. value2 .*.\n emptyRecord\n\u003c/pre\u003e\u003cpre\u003e record1 .*. label1 .=. record2 .!. label1\n         .*. label2 .=. record2 .!. label2\n         .-. label1\n\u003c/pre\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Record r -\u003e Label l -\u003e Record r'",
        "fct-source": "src/Data-HList-Record.html#.-.",
        "fct-type": "function",
        "title": "(.-.)"
      },
      "index": {
        "description": "Remove field from record At the same level as other record modification options Analagous to in lists record1 label1 label1 value1 label2 value2 label2 emptyRecord label1 value1 label1 label2 value2 emptyRecord record1 label1 record2 label1 label2 record2 label2 label1",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "(.-.) .-.",
        "normalized": "Record a-\u003eLabel b-\u003eRecord c",
        "package": "HList",
        "partial": "",
        "signature": "Record r-\u003eLabel l-\u003eRecord r'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-60--43--43-.",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to list append, so give this slightly lower fixity than\n  (.*.), so we can write:\n\u003c/p\u003e\u003cpre\u003e field1 .=. value .*. record1 .\u003c++. record2\n\u003c/pre\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Record r -\u003e Record r' -\u003e Record r''",
        "fct-source": "src/Data-HList-Record.html#.%3C%2B%2B.",
        "fct-type": "function",
        "title": "(.\u003c++.)"
      },
      "index": {
        "description": "Similar to list append so give this slightly lower fixity than so we can write field1 value record1 record2",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "(.\u003c++.) .\u003c++.",
        "normalized": "Record a-\u003eRecord b-\u003eRecord c",
        "package": "HList",
        "partial": "",
        "signature": "Record r-\u003eRecord r'-\u003eRecord r''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-60-.",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003e.@.\u003c/a\u003e\u003c/code\u003e, except type preserving. It has the same fixity as (.@.).\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "LVPair k l v -\u003e Record r -\u003e Record (HUpdateAtHNatR n (LVPair k l v) r)",
        "fct-source": "src/Data-HList-Record.html#.%3C.",
        "fct-type": "function",
        "title": "(.\u003c.)"
      },
      "index": {
        "description": "The same as except type preserving It has the same fixity as",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "(.\u003c.) .\u003c.",
        "normalized": "LVPair a b c-\u003eRecord d-\u003eRecord(HUpdateAtHNatR e(LVPair a b c)d)",
        "package": "HList",
        "partial": "",
        "signature": "LVPair k l v-\u003eRecord r-\u003eRecord(HUpdateAtHNatR n(LVPair k l v)r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-61-.",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a value with the given label. Analagous to a data\n  constructor such as \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e. Higher fixity\n  than record-modification operations like (\u003ccode\u003e\u003ca\u003e.*.\u003c/a\u003e\u003c/code\u003e), (\u003ccode\u003e\u003ca\u003e.-.\u003c/a\u003e\u003c/code\u003e), etc. to\n  support expression like the below w/o parentheses:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ex .=. \"v1\" .*. y .=. '2' .*. emptyRecord\n\u003c/code\u003e\u003c/strong\u003eRecord{x=\"v1\",y='2'}\n\u003c/pre\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Label l -\u003e v -\u003e LVPair l v",
        "fct-source": "src/Data-HList-Record.html#.%3D.",
        "fct-type": "function",
        "title": "(.=.)"
      },
      "index": {
        "description": "Create value with the given label Analagous to data constructor such as Just Left or Right Higher fixity than record-modification operations like etc to support expression like the below parentheses v1 emptyRecord Record v1",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "(.=.) .=.",
        "normalized": "Label a-\u003eb-\u003eLVPair a b",
        "package": "HList",
        "partial": "",
        "signature": "Label l-\u003ev-\u003eLVPair l v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-64-.",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate a field with a particular value.\n  Same fixity as (.*.) so that extensions and updates can be chained.\n  There is no real list analogue, since there is no Prelude defined\n  update.\n\u003c/p\u003e\u003cpre\u003e label1 .=. value1 .@. record1\n\u003c/pre\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "LVPair k l v -\u003e Record r -\u003e Record (HUpdateAtHNatR n (LVPair k l v) r)",
        "fct-source": "src/Data-HList-Record.html#.%40.",
        "fct-type": "function",
        "title": "(.@.)"
      },
      "index": {
        "description": "Update field with particular value Same fixity as so that extensions and updates can be chained There is no real list analogue since there is no Prelude defined update label1 value1 record1",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "(.@.) .@.",
        "normalized": "LVPair a b c-\u003eRecord d-\u003eRecord(HUpdateAtHNatR e(LVPair a b c)d)",
        "package": "HList",
        "partial": "",
        "signature": "LVPair k l v-\u003eRecord r-\u003eRecord(HUpdateAtHNatR n(LVPair k l v)r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:ExtraField",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "ExtraField",
        "fct-source": "src/Data-HList-Record.html#ExtraField",
        "fct-type": "function",
        "title": "ExtraField"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "ExtraField",
        "normalized": "",
        "package": "HList",
        "partial": "Extra Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:FieldNotFound",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "FieldNotFound",
        "fct-source": "src/Data-HList-Record.html#FieldNotFound",
        "fct-type": "function",
        "title": "FieldNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "FieldNotFound",
        "normalized": "",
        "package": "HList",
        "partial": "Field Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:LVPair",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "LVPair",
        "fct-source": "src/Data-HList-Record.html#LVPair",
        "fct-type": "function",
        "title": "LVPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "LVPair",
        "normalized": "",
        "package": "HList",
        "partial": "LVPair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:Record",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Record (HList r)",
        "fct-source": "src/Data-HList-Record.html#Record",
        "fct-type": "function",
        "title": "Record"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "Record",
        "normalized": "",
        "package": "HList",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:emptyRecord",
      "description": {
        "fct-descr": "\u003cp\u003eBuild an empty record\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Record `[]`",
        "fct-source": "src/Data-HList-Record.html#emptyRecord",
        "fct-type": "function",
        "title": "emptyRecord"
      },
      "index": {
        "description": "Build an empty record",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "emptyRecord",
        "normalized": "Record[]",
        "package": "HList",
        "partial": "Record",
        "signature": "Record[]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:h2projectByLabels",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Proxy ls -\u003e HList r -\u003e (HList rin, HList rout)",
        "fct-source": "src/Data-HList-Record.html#h2projectByLabels",
        "fct-type": "method",
        "title": "h2projectByLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "h2projectByLabels",
        "normalized": "Proxy a-\u003eHList b-\u003e(HList c,HList d)",
        "package": "HList",
        "partial": "By Labels",
        "signature": "Proxy ls-\u003eHList r-\u003e(HList rin,HList rout)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:h2projectByLabels-39-",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Proxy b -\u003e Proxy ls -\u003e HList r -\u003e (HList rin, HList rout)",
        "fct-source": "src/Data-HList-Record.html#h2projectByLabels%27",
        "fct-type": "method",
        "title": "h2projectByLabels'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "h2projectByLabels'",
        "normalized": "Proxy a-\u003eProxy b-\u003eHList c-\u003e(HList d,HList e)",
        "package": "HList",
        "partial": "By Labels'",
        "signature": "Proxy b-\u003eProxy ls-\u003eHList r-\u003e(HList rin,HList rout)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hDeleteAtLabel",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Label l -\u003e Record t -\u003e Record t2",
        "fct-source": "src/Data-HList-Record.html#hDeleteAtLabel",
        "fct-type": "function",
        "title": "hDeleteAtLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hDeleteAtLabel",
        "normalized": "Label a-\u003eRecord b-\u003eRecord b",
        "package": "HList",
        "partial": "Delete At Label",
        "signature": "Label l-\u003eRecord t-\u003eRecord t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hLabels",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e Proxy (LabelsOf l)",
        "fct-source": "src/Data-HList-Record.html#hLabels",
        "fct-type": "function",
        "title": "hLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hLabels",
        "normalized": "HList a-\u003eProxy(LabelsOf a)",
        "package": "HList",
        "partial": "Labels",
        "signature": "HList l-\u003eProxy(LabelsOf l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hLeftUnion",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Record r -\u003e Record r' -\u003e Record r''",
        "fct-source": "src/Data-HList-Record.html#hLeftUnion",
        "fct-type": "method",
        "title": "hLeftUnion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hLeftUnion",
        "normalized": "Record a-\u003eRecord b-\u003eRecord c",
        "package": "HList",
        "partial": "Left Union",
        "signature": "Record r-\u003eRecord r'-\u003eRecord r''"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hLeftUnionBool",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Proxy b -\u003e Record r -\u003e f -\u003e Record r'",
        "fct-source": "src/Data-HList-Record.html#hLeftUnionBool",
        "fct-type": "method",
        "title": "hLeftUnionBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hLeftUnionBool",
        "normalized": "Proxy a-\u003eRecord b-\u003ec-\u003eRecord d",
        "package": "HList",
        "partial": "Left Union Bool",
        "signature": "Proxy b-\u003eRecord r-\u003ef-\u003eRecord r'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hLens",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Label k l -\u003e (v1 -\u003e f v) -\u003e Record r -\u003e f (Record (HUpdateAtHNatR n (LVPair k l v) r))",
        "fct-source": "src/Data-HList-Record.html#hLens",
        "fct-type": "function",
        "title": "hLens"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hLens",
        "normalized": "Label a b-\u003e(c-\u003ed c)-\u003eRecord e-\u003ed(Record(HUpdateAtHNatR f(LVPair a b c)e))",
        "package": "HList",
        "partial": "Lens",
        "signature": "Label k l-\u003e(v-\u003ef v)-\u003eRecord r-\u003ef(Record(HUpdateAtHNatR n(LVPair k l v)r))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hLookupByLabel",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Label l -\u003e r -\u003e v",
        "fct-source": "src/Data-HList-Record.html#hLookupByLabel",
        "fct-type": "method",
        "title": "hLookupByLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hLookupByLabel",
        "normalized": "Label a-\u003eb-\u003ec",
        "package": "HList",
        "partial": "Lookup By Label",
        "signature": "Label l-\u003er-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hLookupByLabel-39-",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Proxy b -\u003e Label l -\u003e HList r -\u003e v",
        "fct-source": "src/Data-HList-Record.html#hLookupByLabel%27",
        "fct-type": "method",
        "title": "hLookupByLabel'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hLookupByLabel'",
        "normalized": "Proxy a-\u003eLabel b-\u003eHList c-\u003ed",
        "package": "HList",
        "partial": "Lookup By Label'",
        "signature": "Proxy b-\u003eLabel l-\u003eHList r-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hProjectByLabels",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ehProjectByLabels ls r\u003c/code\u003e returns \u003ccode\u003er\u003c/code\u003e with only the labels in \u003ccode\u003els\u003c/code\u003e remaining\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Proxy ls -\u003e Record t -\u003e Record a",
        "fct-source": "src/Data-HList-Record.html#hProjectByLabels",
        "fct-type": "function",
        "title": "hProjectByLabels"
      },
      "index": {
        "description": "hProjectByLabels ls returns with only the labels in ls remaining",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hProjectByLabels",
        "normalized": "Proxy a-\u003eRecord b-\u003eRecord c",
        "package": "HList",
        "partial": "Project By Labels",
        "signature": "Proxy ls-\u003eRecord t-\u003eRecord a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hProjectByLabels2",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eH2ProjectByLabels\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Proxy ls -\u003e Record t -\u003e (Record t1, Record t2)",
        "fct-source": "src/Data-HList-Record.html#hProjectByLabels2",
        "fct-type": "function",
        "title": "hProjectByLabels2"
      },
      "index": {
        "description": "See H2ProjectByLabels",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hProjectByLabels2",
        "normalized": "Proxy a-\u003eRecord b-\u003e(Record b,Record b)",
        "package": "HList",
        "partial": "Project By Labels",
        "signature": "Proxy ls-\u003eRecord t-\u003e(Record t,Record t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hRearrange",
      "description": {
        "fct-descr": "\u003cp\u003eRearranges a record by labels. Returns the record r, rearranged such that\n the labels are in the order given by ls. (recordLabels r) must be a\n permutation of ls.\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Proxy ls -\u003e Record r -\u003e Record r'",
        "fct-source": "src/Data-HList-Record.html#hRearrange",
        "fct-type": "function",
        "title": "hRearrange"
      },
      "index": {
        "description": "Rearranges record by labels Returns the record rearranged such that the labels are in the order given by ls recordLabels must be permutation of ls",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hRearrange",
        "normalized": "Proxy a-\u003eRecord b-\u003eRecord c",
        "package": "HList",
        "partial": "Rearrange",
        "signature": "Proxy ls-\u003eRecord r-\u003eRecord r'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hRearrange2",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Proxy ls -\u003e HList r -\u003e r'",
        "fct-source": "src/Data-HList-Record.html#hRearrange2",
        "fct-type": "method",
        "title": "hRearrange2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hRearrange2",
        "normalized": "Proxy a-\u003eHList b-\u003ec",
        "package": "HList",
        "partial": "Rearrange",
        "signature": "Proxy ls-\u003eHList r-\u003er'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hRearrange2-39-",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Proxy l -\u003e Proxy ls -\u003e HList rin -\u003e HList rout -\u003e r'",
        "fct-source": "src/Data-HList-Record.html#hRearrange2%27",
        "fct-type": "method",
        "title": "hRearrange2'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hRearrange2'",
        "normalized": "Proxy a-\u003eProxy b-\u003eHList c-\u003eHList d-\u003ee",
        "package": "HList",
        "partial": "Rearrange",
        "signature": "Proxy l-\u003eProxy ls-\u003eHList rin-\u003eHList rout-\u003er'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hRenameLabel",
      "description": {
        "fct-descr": "\u003cp\u003eRename the label of record\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehRenameLabel x y (x .=. () .*. emptyRecord)\n\u003c/code\u003e\u003c/strong\u003eRecord{y=()}\n\u003c/pre\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Label k l -\u003e Label k1 l1 -\u003e Record t -\u003e Record (: * (LVPair k1 l1 v) t2)",
        "fct-source": "src/Data-HList-Record.html#hRenameLabel",
        "fct-type": "function",
        "title": "hRenameLabel"
      },
      "index": {
        "description": "Rename the label of record hRenameLabel emptyRecord Record",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hRenameLabel",
        "normalized": "Label a b-\u003eLabel a b-\u003eRecord c-\u003eRecord(*(LVPair a b d)c)",
        "package": "HList",
        "partial": "Rename Label",
        "signature": "Label k l-\u003eLabel k l-\u003eRecord t-\u003eRecord(*(LVPair k l v)t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hTPupdateAtLabel",
      "description": {
        "fct-descr": "\u003cp\u003eA variation on \u003ccode\u003e\u003ca\u003ehUpdateAtLabel\u003c/a\u003e\u003c/code\u003e: type-preserving update.\n\u003c/p\u003e\u003cp\u003eWe could also say:\n\u003c/p\u003e\u003cpre\u003e hTPupdateAtLabel l v r = hUpdateAtLabel l v r `asTypeOf` r\n\u003c/pre\u003e\u003cp\u003eThen we were taking a dependency on Haskell's type equivalence.\nThis would also constrain the actual implementation of hUpdateAtLabel.\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Label k l -\u003e v -\u003e Record r -\u003e Record (HUpdateAtHNatR n (LVPair k l v) r)",
        "fct-source": "src/Data-HList-Record.html#hTPupdateAtLabel",
        "fct-type": "function",
        "title": "hTPupdateAtLabel"
      },
      "index": {
        "description": "variation on hUpdateAtLabel type-preserving update We could also say hTPupdateAtLabel hUpdateAtLabel asTypeOf Then we were taking dependency on Haskell type equivalence This would also constrain the actual implementation of hUpdateAtLabel",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hTPupdateAtLabel",
        "normalized": "Label a b-\u003ec-\u003eRecord d-\u003eRecord(HUpdateAtHNatR e(LVPair a b c)d)",
        "package": "HList",
        "partial": "TPupdate At Label",
        "signature": "Label k l-\u003ev-\u003eRecord r-\u003eRecord(HUpdateAtHNatR n(LVPair k l v)r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hUpdateAtLabel",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehUpdateAtLabel\u003c/a\u003e\u003c/code\u003e \u003ccode\u003elabel value record\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Label l -\u003e v -\u003e Record r -\u003e Record (HUpdateAtHNatR n (LVPair l v) r)",
        "fct-source": "src/Data-HList-Record.html#hUpdateAtLabel",
        "fct-type": "function",
        "title": "hUpdateAtLabel"
      },
      "index": {
        "description": "hUpdateAtLabel label value record",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "hUpdateAtLabel",
        "normalized": "Label a-\u003eb-\u003eRecord c-\u003eRecord(HUpdateAtHNatR d(LVPair a b)c)",
        "package": "HList",
        "partial": "Update At Label",
        "signature": "Label l-\u003ev-\u003eRecord r-\u003eRecord(HUpdateAtHNatR n(LVPair l v)r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:labelLVPair",
      "description": {
        "fct-descr": "\u003cp\u003eLabel accessor\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "LVPair l v -\u003e Label l",
        "fct-source": "src/Data-HList-Record.html#labelLVPair",
        "fct-type": "function",
        "title": "labelLVPair"
      },
      "index": {
        "description": "Label accessor",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "labelLVPair",
        "normalized": "LVPair a b-\u003eLabel a",
        "package": "HList",
        "partial": "LVPair",
        "signature": "LVPair l v-\u003eLabel l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:mkRecord",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a record\n\u003c/p\u003e",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "HList r -\u003e Record r",
        "fct-source": "src/Data-HList-Record.html#mkRecord",
        "fct-type": "function",
        "title": "mkRecord"
      },
      "index": {
        "description": "Build record",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "mkRecord",
        "normalized": "HList a-\u003eRecord a",
        "package": "HList",
        "partial": "Record",
        "signature": "HList r-\u003eRecord r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:newLVPair",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Label l -\u003e v -\u003e LVPair l v",
        "fct-source": "src/Data-HList-Record.html#newLVPair",
        "fct-type": "function",
        "title": "newLVPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "newLVPair",
        "normalized": "Label a-\u003eb-\u003eLVPair a b",
        "package": "HList",
        "partial": "LVPair",
        "signature": "Label l-\u003ev-\u003eLVPair l v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:recordLabels",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Record r -\u003e Proxy (RecordLabels r)",
        "fct-source": "src/Data-HList-Record.html#recordLabels",
        "fct-type": "function",
        "title": "recordLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "recordLabels",
        "normalized": "Record a-\u003eProxy(RecordLabels a)",
        "package": "HList",
        "partial": "Labels",
        "signature": "Record r-\u003eProxy(RecordLabels r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:recordValues",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Record r -\u003e HList (RecordValuesR r)",
        "fct-source": "src/Data-HList-Record.html#recordValues",
        "fct-type": "function",
        "title": "recordValues"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "recordValues",
        "normalized": "Record a-\u003eHList(RecordValuesR a)",
        "package": "HList",
        "partial": "Values",
        "signature": "Record r-\u003eHList(RecordValuesR r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:recordValues-39-",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "HList r -\u003e HList (RecordValuesR r)",
        "fct-source": "src/Data-HList-Record.html#recordValues%27",
        "fct-type": "method",
        "title": "recordValues'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "recordValues'",
        "normalized": "HList a-\u003eHList(RecordValuesR a)",
        "package": "HList",
        "partial": "Values'",
        "signature": "HList r-\u003eHList(RecordValuesR r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:showComponents",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "String -\u003e HList l -\u003e String",
        "fct-source": "src/Data-HList-Record.html#showComponents",
        "fct-type": "method",
        "title": "showComponents"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "showComponents",
        "normalized": "String-\u003eHList a-\u003eString",
        "package": "HList",
        "partial": "Components",
        "signature": "String-\u003eHList l-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:showLabel",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Label l -\u003e String",
        "fct-source": "src/Data-HList-FakePrelude.html#showLabel",
        "fct-type": "method",
        "title": "showLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "showLabel",
        "normalized": "Label a-\u003eString",
        "package": "HList",
        "partial": "Label",
        "signature": "Label l-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:unionSR",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Record r1 -\u003e Record r2 -\u003e (Record ru, Record ru)",
        "fct-source": "src/Data-HList-Record.html#unionSR",
        "fct-type": "method",
        "title": "unionSR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "unionSR",
        "normalized": "Record a-\u003eRecord a-\u003e(Record b,Record b)",
        "package": "HList",
        "partial": "SR",
        "signature": "Record r-\u003eRecord r-\u003e(Record ru,Record ru)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:unionSR-39-",
      "description": {
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "Proxy b -\u003e Record r1 -\u003e f2 -\u003e Record r2' -\u003e (Record ru, Record ru)",
        "fct-source": "src/Data-HList-Record.html#unionSR%27",
        "fct-type": "method",
        "title": "unionSR'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "unionSR'",
        "normalized": "Proxy a-\u003eRecord b-\u003ec-\u003eRecord b-\u003e(Record d,Record d)",
        "package": "HList",
        "partial": "SR'",
        "signature": "Proxy b-\u003eRecord r-\u003ef-\u003eRecord r-\u003e(Record ru,Record ru)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:valueLVPair",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.HList.Record",
        "fct-package": "HList",
        "fct-signature": "v",
        "fct-source": "src/Data-HList-Record.html#LVPair",
        "fct-type": "function",
        "title": "valueLVPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Record",
        "module": "Data.HList.Record",
        "name": "valueLVPair",
        "normalized": "",
        "package": "HList",
        "partial": "LVPair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-RecordPuns.html#",
      "description": {
        "fct-module": "Data.HList.RecordPuns",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-RecordPuns.html",
        "fct-type": "module",
        "title": "RecordPuns"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList RecordPuns",
        "module": "Data.HList.RecordPuns",
        "name": "RecordPuns",
        "normalized": "",
        "package": "HList",
        "partial": "Record Puns",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-RecordPuns.html#v:pun",
      "description": {
        "fct-descr": "\u003cp\u003erequires the use of \u003ca\u003eData.HList.Label6\u003c/a\u003e (ie. the label for foo is \u003ccode\u003eLabel :: Label \"foo\"\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.HList.RecordPuns",
        "fct-package": "HList",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Data-HList-RecordPuns.html#pun",
        "fct-type": "function",
        "title": "pun"
      },
      "index": {
        "description": "requires the use of Data.HList.Label6 ie the label for foo is Label Label foo",
        "hierarchy": "Data HList RecordPuns",
        "module": "Data.HList.RecordPuns",
        "name": "pun",
        "normalized": "",
        "package": "HList",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eType-indexed co-products.\n\u003c/p\u003e\u003cp\u003e(There are other ways: see ConsUnion.hs, for example)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.TIC",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-TIC.html",
        "fct-type": "module",
        "title": "TIC"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Type-indexed co-products There are other ways see ConsUnion.hs for example",
        "hierarchy": "Data HList TIC",
        "module": "Data.HList.TIC",
        "name": "TIC",
        "normalized": "",
        "package": "HList",
        "partial": "TIC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIC.html#t:TIC",
      "description": {
        "fct-descr": "\u003cp\u003eA datatype for type-indexed co-products\n\u003c/p\u003e",
        "fct-module": "Data.HList.TIC",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-TIC.html#TIC",
        "fct-type": "newtype",
        "title": "TIC"
      },
      "index": {
        "description": "datatype for type-indexed co-products",
        "hierarchy": "Data HList TIC",
        "module": "Data.HList.TIC",
        "name": "TIC",
        "normalized": "",
        "package": "HList",
        "partial": "TIC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIC.html#v:TIC",
      "description": {
        "fct-module": "Data.HList.TIC",
        "fct-package": "HList",
        "fct-signature": "TIC Dynamic",
        "fct-source": "src/Data-HList-TIC.html#TIC",
        "fct-type": "function",
        "title": "TIC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList TIC",
        "module": "Data.HList.TIC",
        "name": "TIC",
        "normalized": "",
        "package": "HList",
        "partial": "TIC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIC.html#v:mkTIC",
      "description": {
        "fct-descr": "\u003cp\u003ePublic constructor (or, open union's injection function)\n\u003c/p\u003e",
        "fct-module": "Data.HList.TIC",
        "fct-package": "HList",
        "fct-signature": "i -\u003e TIC l",
        "fct-source": "src/Data-HList-TIC.html#mkTIC",
        "fct-type": "function",
        "title": "mkTIC"
      },
      "index": {
        "description": "Public constructor or open union injection function",
        "hierarchy": "Data HList TIC",
        "module": "Data.HList.TIC",
        "name": "mkTIC",
        "normalized": "a-\u003eTIC b",
        "package": "HList",
        "partial": "TIC",
        "signature": "i-\u003eTIC l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIC.html#v:unTIC",
      "description": {
        "fct-descr": "\u003cp\u003ePublic destructor (or, open union's projection function)\n\u003c/p\u003e",
        "fct-module": "Data.HList.TIC",
        "fct-package": "HList",
        "fct-signature": "TIC l -\u003e Maybe o",
        "fct-source": "src/Data-HList-TIC.html#unTIC",
        "fct-type": "function",
        "title": "unTIC"
      },
      "index": {
        "description": "Public destructor or open union projection function",
        "hierarchy": "Data HList TIC",
        "module": "Data.HList.TIC",
        "name": "unTIC",
        "normalized": "TIC a-\u003eMaybe b",
        "package": "HList",
        "partial": "TIC",
        "signature": "TIC l-\u003eMaybe o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eType-indexed products.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.TIP",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-TIP.html",
        "fct-type": "module",
        "title": "TIP"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Type-indexed products",
        "hierarchy": "Data HList TIP",
        "module": "Data.HList.TIP",
        "name": "TIP",
        "normalized": "",
        "package": "HList",
        "partial": "TIP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#t:HTypeIndexed",
      "description": {
        "fct-module": "Data.HList.TIP",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-TIP.html#HTypeIndexed",
        "fct-type": "class",
        "title": "HTypeIndexed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList TIP",
        "module": "Data.HList.TIP",
        "name": "HTypeIndexed",
        "normalized": "",
        "package": "HList",
        "partial": "HType Indexed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#t:TIP",
      "description": {
        "fct-module": "Data.HList.TIP",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-TIP.html#TIP",
        "fct-type": "newtype",
        "title": "TIP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList TIP",
        "module": "Data.HList.TIP",
        "name": "TIP",
        "normalized": "",
        "package": "HList",
        "partial": "TIP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:TIP",
      "description": {
        "fct-module": "Data.HList.TIP",
        "fct-package": "HList",
        "fct-signature": "TIP",
        "fct-source": "src/Data-HList-TIP.html#TIP",
        "fct-type": "function",
        "title": "TIP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList TIP",
        "module": "Data.HList.TIP",
        "name": "TIP",
        "normalized": "",
        "package": "HList",
        "partial": "TIP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:emptyTIP",
      "description": {
        "fct-module": "Data.HList.TIP",
        "fct-package": "HList",
        "fct-signature": "TIP `[]`",
        "fct-source": "src/Data-HList-TIP.html#emptyTIP",
        "fct-type": "function",
        "title": "emptyTIP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList TIP",
        "module": "Data.HList.TIP",
        "name": "emptyTIP",
        "normalized": "TIP[]",
        "package": "HList",
        "partial": "TIP",
        "signature": "TIP[]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:mkTIP",
      "description": {
        "fct-module": "Data.HList.TIP",
        "fct-package": "HList",
        "fct-signature": "HList l -\u003e TIP l",
        "fct-source": "src/Data-HList-TIP.html#mkTIP",
        "fct-type": "function",
        "title": "mkTIP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList TIP",
        "module": "Data.HList.TIP",
        "name": "mkTIP",
        "normalized": "HList a-\u003eTIP a",
        "package": "HList",
        "partial": "TIP",
        "signature": "HList l-\u003eTIP l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:onTIP",
      "description": {
        "fct-module": "Data.HList.TIP",
        "fct-package": "HList",
        "fct-signature": "(HList t -\u003e HList l) -\u003e TIP t -\u003e TIP l",
        "fct-source": "src/Data-HList-TIP.html#onTIP",
        "fct-type": "function",
        "title": "onTIP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList TIP",
        "module": "Data.HList.TIP",
        "name": "onTIP",
        "normalized": "(HList a-\u003eHList b)-\u003eTIP a-\u003eTIP b",
        "package": "HList",
        "partial": "TIP",
        "signature": "(HList t-\u003eHList l)-\u003eTIP t-\u003eTIP l"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:tipyDelete",
      "description": {
        "fct-module": "Data.HList.TIP",
        "fct-package": "HList",
        "fct-signature": "Proxy k e -\u003e TIP t -\u003e TIP (HDeleteAtHNatR n t)",
        "fct-source": "src/Data-HList-TIP.html#tipyDelete",
        "fct-type": "function",
        "title": "tipyDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList TIP",
        "module": "Data.HList.TIP",
        "name": "tipyDelete",
        "normalized": "Proxy a b-\u003eTIP c-\u003eTIP(HDeleteAtHNatR d c)",
        "package": "HList",
        "partial": "Delete",
        "signature": "Proxy k e-\u003eTIP t-\u003eTIP(HDeleteAtHNatR n t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:tipyProject",
      "description": {
        "fct-module": "Data.HList.TIP",
        "fct-package": "HList",
        "fct-signature": "Proxy [*] (HProjectByHNatsR ns t) -\u003e TIP t -\u003e TIP (HProjectByHNatsR ns t)",
        "fct-source": "src/Data-HList-TIP.html#tipyProject",
        "fct-type": "function",
        "title": "tipyProject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList TIP",
        "module": "Data.HList.TIP",
        "name": "tipyProject",
        "normalized": "Proxy[*](HProjectByHNatsR a b)-\u003eTIP b-\u003eTIP(HProjectByHNatsR a b)",
        "package": "HList",
        "partial": "Project",
        "signature": "Proxy[*](HProjectByHNatsR ns t)-\u003eTIP t-\u003eTIP(HProjectByHNatsR ns t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:tipySplit",
      "description": {
        "fct-descr": "\u003cp\u003eSplit produces two TIPs\n\u003c/p\u003e",
        "fct-module": "Data.HList.TIP",
        "fct-package": "HList",
        "fct-signature": "Proxy [*] ps -\u003e TIP l -\u003e (TIP (HProjectByHNatsR ns l), TIP (HProjectAwayByHNatsR ns l))",
        "fct-source": "src/Data-HList-TIP.html#tipySplit",
        "fct-type": "function",
        "title": "tipySplit"
      },
      "index": {
        "description": "Split produces two TIPs",
        "hierarchy": "Data HList TIP",
        "module": "Data.HList.TIP",
        "name": "tipySplit",
        "normalized": "Proxy[*]a-\u003eTIP b-\u003e(TIP(HProjectByHNatsR c b),TIP(HProjectAwayByHNatsR c b))",
        "package": "HList",
        "partial": "Split",
        "signature": "Proxy[*]ps-\u003eTIP l-\u003e(TIP(HProjectByHNatsR ns l),TIP(HProjectAwayByHNatsR ns l))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:tipyUpdate",
      "description": {
        "fct-module": "Data.HList.TIP",
        "fct-package": "HList",
        "fct-signature": "e -\u003e TIP t -\u003e TIP (HUpdateAtHNatR n e t)",
        "fct-source": "src/Data-HList-TIP.html#tipyUpdate",
        "fct-type": "function",
        "title": "tipyUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList TIP",
        "module": "Data.HList.TIP",
        "name": "tipyUpdate",
        "normalized": "a-\u003eTIP b-\u003eTIP(HUpdateAtHNatR c a b)",
        "package": "HList",
        "partial": "Update",
        "signature": "e-\u003eTIP t-\u003eTIP(HUpdateAtHNatR n e t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:unTIP",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.HList.TIP",
        "fct-package": "HList",
        "fct-signature": "HList l",
        "fct-source": "src/Data-HList-TIP.html#TIP",
        "fct-type": "function",
        "title": "unTIP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList TIP",
        "module": "Data.HList.TIP",
        "name": "unTIP",
        "normalized": "",
        "package": "HList",
        "partial": "TIP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TypeEqO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eGeneric type equality predicate: \n   The implementation based on overlapping instances\n   The only place where overlapping instances are really used\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.TypeEqO",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-TypeEqO.html",
        "fct-type": "module",
        "title": "TypeEqO"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Generic type equality predicate The implementation based on overlapping instances The only place where overlapping instances are really used",
        "hierarchy": "Data HList TypeEqO",
        "module": "Data.HList.TypeEqO",
        "name": "TypeEqO",
        "normalized": "",
        "package": "HList",
        "partial": "Type Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TypeEqO.html#t:TupleType",
      "description": {
        "fct-module": "Data.HList.TypeEqO",
        "fct-package": "HList",
        "fct-signature": "class",
        "fct-source": "src/Data-HList-TypeEqO.html#TupleType",
        "fct-type": "class",
        "title": "TupleType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList TypeEqO",
        "module": "Data.HList.TypeEqO",
        "name": "TupleType",
        "normalized": "",
        "package": "HList",
        "partial": "Tuple Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eVariants, i.e., labelled sums.\n\u003c/p\u003e\u003cp\u003eOne approach to their implementation would be to consider both\n   the favoured label and the corresponding value as dynamics upon\n   variant construction. Since we are too lazy to programme some\n   Typeable instances for non-ghc systems (NB: in GHC, Typeable\n   is derivable), we rather model variants as (opaque) records\n   with maybies for the values. Only one value will actually hold\n   non-Nothing, as guaranteed by the constructor.\n\u003c/p\u003e\u003cp\u003eSee VariantP.hs for a different approach to open sums.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList.Variant",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList-Variant.html",
        "fct-type": "module",
        "title": "Variant"
      },
      "index": {
        "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Variants i.e labelled sums One approach to their implementation would be to consider both the favoured label and the corresponding value as dynamics upon variant construction Since we are too lazy to programme some Typeable instances for non-ghc systems NB in GHC Typeable is derivable we rather model variants as opaque records with maybies for the values Only one value will actually hold non-Nothing as guaranteed by the constructor See VariantP.hs for different approach to open sums",
        "hierarchy": "Data HList Variant",
        "module": "Data.HList.Variant",
        "name": "Variant",
        "normalized": "",
        "package": "HList",
        "partial": "Variant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#t:HMaybeF",
      "description": {
        "fct-descr": "\u003cp\u003eTurn proxy sequence into sequence of Nothings\n\u003c/p\u003e",
        "fct-module": "Data.HList.Variant",
        "fct-package": "HList",
        "fct-signature": "data",
        "fct-source": "src/Data-HList-Variant.html#HMaybeF",
        "fct-type": "data",
        "title": "HMaybeF"
      },
      "index": {
        "description": "Turn proxy sequence into sequence of Nothings",
        "hierarchy": "Data HList Variant",
        "module": "Data.HList.Variant",
        "name": "HMaybeF",
        "normalized": "",
        "package": "HList",
        "partial": "HMaybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#t:Variant",
      "description": {
        "fct-descr": "\u003cp\u003eVariant types on the basis of label-maybe pairs.\n\u003c/p\u003e",
        "fct-module": "Data.HList.Variant",
        "fct-package": "HList",
        "fct-signature": "newtype",
        "fct-source": "src/Data-HList-Variant.html#Variant",
        "fct-type": "newtype",
        "title": "Variant"
      },
      "index": {
        "description": "Variant types on the basis of label-maybe pairs",
        "hierarchy": "Data HList Variant",
        "module": "Data.HList.Variant",
        "name": "Variant",
        "normalized": "",
        "package": "HList",
        "partial": "Variant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#v:HMaybeF",
      "description": {
        "fct-module": "Data.HList.Variant",
        "fct-package": "HList",
        "fct-signature": "HMaybeF",
        "fct-source": "src/Data-HList-Variant.html#HMaybeF",
        "fct-type": "function",
        "title": "HMaybeF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Variant",
        "module": "Data.HList.Variant",
        "name": "HMaybeF",
        "normalized": "",
        "package": "HList",
        "partial": "HMaybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#v:Variant",
      "description": {
        "fct-module": "Data.HList.Variant",
        "fct-package": "HList",
        "fct-signature": "Variant mr",
        "fct-source": "src/Data-HList-Variant.html#Variant",
        "fct-type": "function",
        "title": "Variant"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Variant",
        "module": "Data.HList.Variant",
        "name": "Variant",
        "normalized": "",
        "package": "HList",
        "partial": "Variant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#v:hMaybied",
      "description": {
        "fct-module": "Data.HList.Variant",
        "fct-package": "HList",
        "fct-signature": "HList as' -\u003e HList bs'",
        "fct-source": "src/Data-HList-Variant.html#hMaybied",
        "fct-type": "function",
        "title": "hMaybied"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList Variant",
        "module": "Data.HList.Variant",
        "name": "hMaybied",
        "normalized": "HList a-\u003eHList b",
        "package": "HList",
        "partial": "Maybied",
        "signature": "HList as'-\u003eHList bs'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#v:mkVariant",
      "description": {
        "fct-descr": "\u003cp\u003ePublic constructor\n it seems we can blame \u003ccode\u003e\u003ca\u003ehUpdateAtLabel\u003c/a\u003e\u003c/code\u003e (not \u003ccode\u003e\u003ca\u003eHMap\u003c/a\u003e\u003c/code\u003e) for needing the asTypeOf?\n\u003c/p\u003e",
        "fct-module": "Data.HList.Variant",
        "fct-package": "HList",
        "fct-signature": "Label k l -\u003e a -\u003e Record as' -\u003e Variant (HList r)",
        "fct-source": "src/Data-HList-Variant.html#mkVariant",
        "fct-type": "function",
        "title": "mkVariant"
      },
      "index": {
        "description": "Public constructor it seems we can blame hUpdateAtLabel not HMap for needing the asTypeOf",
        "hierarchy": "Data HList Variant",
        "module": "Data.HList.Variant",
        "name": "mkVariant",
        "normalized": "Label a b-\u003ec-\u003eRecord d-\u003eVariant(HList e)",
        "package": "HList",
        "partial": "Variant",
        "signature": "Label k l-\u003ea-\u003eRecord as'-\u003eVariant(HList r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#v:unVariant",
      "description": {
        "fct-descr": "\u003cp\u003ePublic destructor\n\u003c/p\u003e",
        "fct-module": "Data.HList.Variant",
        "fct-package": "HList",
        "fct-signature": "Label k l -\u003e Variant (HList r) -\u003e v",
        "fct-source": "src/Data-HList-Variant.html#unVariant",
        "fct-type": "function",
        "title": "unVariant"
      },
      "index": {
        "description": "Public destructor",
        "hierarchy": "Data HList Variant",
        "module": "Data.HList.Variant",
        "name": "unVariant",
        "normalized": "Label a b-\u003eVariant(HList c)-\u003ed",
        "package": "HList",
        "partial": "Variant",
        "signature": "Label k l-\u003eVariant(HList r)-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOOHaskell (C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eThis module gathers the API that we need for OOP in Haskell.  We\nbasically select a certain configuration of the HList library, and we\nalso import modules that are needed for mutable data and monads. Note\non overlapping: Needed for the chosen model of labels. Other models\ncan be used instead, but the chosen look better in types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HList",
        "fct-package": "HList",
        "fct-signature": "module",
        "fct-source": "src/Data-HList.html",
        "fct-type": "module",
        "title": "HList"
      },
      "index": {
        "description": "OOHaskell Oleg Kiselyov Ralf Laemmel Keean Schupke This module gathers the API that we need for OOP in Haskell We basically select certain configuration of the HList library and we also import modules that are needed for mutable data and monads Note on overlapping Needed for the chosen model of labels Other models can be used instead but the chosen look better in types",
        "hierarchy": "Data HList",
        "module": "Data.HList",
        "name": "HList",
        "normalized": "",
        "package": "HList",
        "partial": "HList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList.html#v:-35-",
      "description": {
        "fct-module": "Data.HList",
        "fct-package": "HList",
        "fct-signature": "r -\u003e Label l -\u003e v",
        "fct-source": "src/Data-HList.html#%23",
        "fct-type": "function",
        "title": "(#)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList",
        "module": "Data.HList",
        "name": "(#) #",
        "normalized": "a-\u003eLabel b-\u003ec",
        "package": "HList",
        "partial": "",
        "signature": "r-\u003eLabel l-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList.html#v:concrete",
      "description": {
        "fct-module": "Data.HList",
        "fct-package": "HList",
        "fct-signature": "(a -\u003e m a) -\u003e a -\u003e m a",
        "fct-source": "src/Data-HList.html#concrete",
        "fct-type": "function",
        "title": "concrete"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HList",
        "module": "Data.HList",
        "name": "concrete",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
        "package": "HList",
        "partial": "",
        "signature": "(a-\u003em a)-\u003ea-\u003em a"
      }
    }
  }
]