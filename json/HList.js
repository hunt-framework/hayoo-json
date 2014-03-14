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
        "word": "HList"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003eThis module re-exports everything needed to use HList.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.CommonMain",
          "name": "CommonMain",
          "package": "HList",
          "source": "src/Data-HList-CommonMain.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library This module re-exports everything needed to use HList",
          "hierarchy": "Data HList CommonMain",
          "module": "Data.HList.CommonMain",
          "name": "CommonMain",
          "package": "HList",
          "partial": "Common Main",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.CommonMain",
          "name": "ErrReqdArgNotFound",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#ErrReqdArgNotFound",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList CommonMain",
          "module": "Data.HList.CommonMain",
          "name": "ErrReqdArgNotFound",
          "package": "HList",
          "partial": "Err Reqd Arg Not Found",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#t:ErrReqdArgNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.CommonMain",
          "name": "ErrUnexpectedKW",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#ErrUnexpectedKW",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList CommonMain",
          "module": "Data.HList.CommonMain",
          "name": "ErrUnexpectedKW",
          "package": "HList",
          "partial": "Err Unexpected KW",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#t:ErrUnexpectedKW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll our keywords must be registered\n\u003c/p\u003e",
          "module": "Data.HList.CommonMain",
          "name": "IsKeyFN",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#IsKeyFN",
          "type": "class"
        },
        "index": {
          "description": "All our keywords must be registered",
          "hierarchy": "Data HList CommonMain",
          "module": "Data.HList.CommonMain",
          "name": "IsKeyFN",
          "package": "HList",
          "partial": "Is Key FN",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#t:IsKeyFN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.CommonMain",
          "name": "K",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#K",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList CommonMain",
          "module": "Data.HList.CommonMain",
          "name": "K",
          "package": "HList",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#t:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ekw\u003c/code\u003e takes a \u003ccode\u003e\u003ca\u003eHList\u003c/a\u003e\u003c/code\u003e whose first element is a function, and the rest\nof the elements are default values.\nA useful trick is to have a final argument \u003ccode\u003e()\u003c/code\u003e which is not\neaten up by a label (A only takes 1 argument). That way when you supply\nthe () it knows there are no more arguments (?).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edata A = A\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einstance IsKeyFN (A -\u003e a -\u003e b) True\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f A a () = a + 1\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f' = f .*. A .*. 1 .*. HNil\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' A 0 ()\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' ()\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e",
          "module": "Data.HList.CommonMain",
          "name": "Kw",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#Kw",
          "type": "class"
        },
        "index": {
          "description": "kw takes HList whose first element is function and the rest of the elements are default values useful trick is to have final argument which is not eaten up by label only takes argument That way when you supply the it knows there are no more arguments data instance IsKeyFN True let let HNil kw kw",
          "hierarchy": "Data HList CommonMain",
          "module": "Data.HList.CommonMain",
          "name": "Kw",
          "package": "HList",
          "partial": "Kw",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#t:Kw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.CommonMain",
          "name": "kw",
          "package": "HList",
          "signature": "HList (fn : arg_def) -\u003e r",
          "source": "src/Data-HList-Keyword.html#kw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList CommonMain",
          "module": "Data.HList.CommonMain",
          "name": "kw",
          "normalized": "HList(a b)-\u003ec",
          "package": "HList",
          "signature": "HList(fn arg_def)-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#v:kw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e into a list that can supply\ndefault arguments for \u003ccode\u003e\u003ca\u003ekw\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA bit of setup:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XQuasiQuotes\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.HList.RecordPuns\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f (_ :: Label \"a\") a (_ :: Label \"b\") b () = a `div` b\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet a = 2; b = 1; f' = f .*. recToKW [pun| a b |]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' ()\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' (Label :: Label \"a\") 10 ()\n\u003c/code\u003e\u003c/strong\u003e10\n\u003c/pre\u003e",
          "module": "[\"Data.HList.CommonMain\",\"Data.HList.Keyword\"]",
          "name": "recToKW",
          "package": "HList",
          "signature": "Record a -\u003e HList (HConcatR b)",
          "source": "src/Data-HList-Keyword.html#recToKW",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#v:recToKW\",\"http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:recToKW\"]"
        },
        "index": {
          "description": "convert Record into list that can supply default arguments for kw bit of setup set XQuasiQuotes import Data.HList.RecordPuns let Label Label div let recToKW pun kw kw Label Label",
          "hierarchy": "Data HList CommonMain",
          "module": "Data.HList.CommonMain",
          "name": "recToKW",
          "normalized": "Record a-\u003eHList(HConcatR b)",
          "package": "HList",
          "partial": "To KW",
          "signature": "Record a-\u003eHList(HConcatR b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-CommonMain.html#v:recToKW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eHListFlat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e which pretend\nto be flat data structures. The \u003ccode\u003eData\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eHList\u003c/a\u003e\u003c/code\u003e gives a nested\nstructure.\n\u003c/p\u003e\u003cp\u003eNOTE: these instances do not work with ghc-7.8 because of\n\u003ca\u003ehttp://ghc.haskell.org/trac/ghc/ticket/8486\u003c/a\u003e\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eHList\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe data instance for\n\u003c/p\u003e\u003cpre\u003e a :: HList '[Int, Double, b]\n\u003c/pre\u003e\u003cp\u003eLooks like the same instance for\n\u003c/p\u003e\u003cpre\u003e type T b = (Int, (Double, (b, ())))\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eHListFlat\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Data instance for\n\u003c/p\u003e\u003cpre\u003e a :: Data b =\u003e HListFlat '[Int,Double,b]\n\u003c/pre\u003e\u003cp\u003ewill look like the Data instance for:\n\u003c/p\u003e\u003cpre\u003e data A b = A Int Double b\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eRecord\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e similar ideas apply. An\n\u003c/p\u003e\u003cpre\u003e a :: Record '[ LVPair \"x\" Int, LVPair \"y\" Double ]\n\u003c/pre\u003e\u003cp\u003eshould behave like a:\n\u003c/p\u003e\u003cpre\u003e data A = A { x :: Int, y :: Double } deriving (Data)\n\u003c/pre\u003e\u003cp\u003eMany unsafecoerces are necessary here because the Data class includes type\nparameters \u003ccode\u003ec\u003c/code\u003e that cannot be used in the class context for the instance.\nPerhaps there is another way.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.Data",
          "name": "Data",
          "package": "HList",
          "source": "src/Data-HList-Data.html",
          "type": "module"
        },
        "index": {
          "description": "Data instances for HListFlat and Record which pretend to be flat data structures The Data instance for HList gives nested structure NOTE these instances do not work with ghc-7.8 because of http ghc.haskell.org trac ghc ticket HList The data instance for HList Int Double Looks like the same instance for type Int Double HListFlat The Data instance for Data HListFlat Int Double will look like the Data instance for data Int Double Record For Record similar ideas apply An Record LVPair Int LVPair Double should behave like data Int Double deriving Data Many unsafecoerces are necessary here because the Data class includes type parameters that cannot be used in the class context for the instance Perhaps there is another way",
          "hierarchy": "Data HList Data",
          "module": "Data.HList.Data",
          "name": "Data",
          "package": "HList",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Data",
          "name": "DataHListFlatCxt",
          "package": "HList",
          "source": "src/Data-HList-Data.html#DataHListFlatCxt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data HList Data",
          "module": "Data.HList.Data",
          "name": "DataHListFlatCxt",
          "package": "HList",
          "partial": "Data HList Flat Cxt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:DataHListFlatCxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Data",
          "name": "DataRecordCxt",
          "package": "HList",
          "source": "src/Data-HList-Data.html#DataRecordCxt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data HList Data",
          "module": "Data.HList.Data",
          "name": "DataRecordCxt",
          "package": "HList",
          "partial": "Data Record Cxt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:DataRecordCxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewraps up the first argument to \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.Data",
          "name": "GfoldlK",
          "package": "HList",
          "source": "src/Data-HList-Data.html#GfoldlK",
          "type": "data"
        },
        "index": {
          "description": "wraps up the first argument to gfoldl",
          "hierarchy": "Data HList Data",
          "module": "Data.HList.Data",
          "name": "GfoldlK",
          "package": "HList",
          "partial": "Gfoldl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:GfoldlK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Data",
          "name": "GunfoldK",
          "package": "HList",
          "source": "src/Data-HList-Data.html#GunfoldK",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList Data",
          "module": "Data.HList.Data",
          "name": "GunfoldK",
          "package": "HList",
          "partial": "Gunfold",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:GunfoldK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis data type only exists to have Data instance\n\u003c/p\u003e",
          "module": "Data.HList.Data",
          "name": "HListFlat",
          "package": "HList",
          "source": "src/Data-HList-Data.html#HListFlat",
          "type": "newtype"
        },
        "index": {
          "description": "this data type only exists to have Data instance",
          "hierarchy": "Data HList Data",
          "module": "Data.HList.Data",
          "name": "HListFlat",
          "package": "HList",
          "partial": "HList Flat",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:HListFlat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Data",
          "name": "RecordLabelsStr",
          "package": "HList",
          "source": "src/Data-HList-Data.html#RecordLabelsStr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Data",
          "module": "Data.HList.Data",
          "name": "RecordLabelsStr",
          "package": "HList",
          "partial": "Record Labels Str",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:RecordLabelsStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Data",
          "name": "TypeRepsList",
          "package": "HList",
          "source": "src/Data-HList-Data.html#TypeRepsList",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Data",
          "module": "Data.HList.Data",
          "name": "TypeRepsList",
          "package": "HList",
          "partial": "Type Reps List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#t:TypeRepsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Data",
          "name": "GfoldlK",
          "package": "HList",
          "signature": "c (d -\u003e b) -\u003e d -\u003e c b) -\u003e GfoldlK c",
          "source": "src/Data-HList-Data.html#GfoldlK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Data",
          "module": "Data.HList.Data",
          "name": "GfoldlK",
          "normalized": "a(b-\u003ec)-\u003eb-\u003ea c)-\u003eGfoldlK a",
          "package": "HList",
          "partial": "Gfoldl",
          "signature": "c(d-\u003eb)-\u003ed-\u003ec b)-\u003eGfoldlK c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#v:GfoldlK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Data",
          "name": "GunfoldK",
          "package": "HList",
          "signature": "c (b -\u003e r) -\u003e c r) -\u003e GunfoldK c",
          "source": "src/Data-HList-Data.html#GunfoldK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Data",
          "module": "Data.HList.Data",
          "name": "GunfoldK",
          "normalized": "a(b-\u003ec)-\u003ea c)-\u003eGunfoldK a",
          "package": "HList",
          "partial": "Gunfold",
          "signature": "c(b-\u003er)-\u003ec r)-\u003eGunfoldK c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#v:GunfoldK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Data",
          "name": "HListFlat",
          "package": "HList",
          "signature": "HListFlat (HList a)",
          "source": "src/Data-HList-Data.html#HListFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Data",
          "module": "Data.HList.Data",
          "name": "HListFlat",
          "package": "HList",
          "partial": "HList Flat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#v:HListFlat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Data",
          "name": "recordLabelsStr",
          "package": "HList",
          "signature": "Record xs -\u003e [String]",
          "source": "src/Data-HList-Data.html#recordLabelsStr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Data",
          "module": "Data.HList.Data",
          "name": "recordLabelsStr",
          "normalized": "Record a-\u003e[String]",
          "package": "HList",
          "partial": "Labels Str",
          "signature": "Record xs-\u003e[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Data.html#v:recordLabelsStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eSome very basic technology for faking dependent types in Haskell.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "FakePrelude",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Some very basic technology for faking dependent types in Haskell",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "FakePrelude",
          "package": "HList",
          "partial": "Fake Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimpler/weaker version where type information only propagates forward\n with this one. \u003ccode\u003eapp\u003c/code\u003e defined below, is more complicated / verbose to define,\n but it offers better type inference. Most uses have been converted to\n \u003ccode\u003eapp\u003c/code\u003e, so there is not much that can be done with \u003ccode\u003e\u003ca\u003eApply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "Apply",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#Apply",
          "type": "class"
        },
        "index": {
          "description": "simpler weaker version where type information only propagates forward with this one app defined below is more complicated verbose to define but it offers better type inference Most uses have been converted to app so there is not much that can be done with Apply",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "Apply",
          "package": "HList",
          "partial": "Apply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo constraints on result and argument types\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "ApplyAB",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#ApplyAB",
          "type": "class"
        },
        "index": {
          "description": "No constraints on result and argument types",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "ApplyAB",
          "package": "HList",
          "partial": "Apply AB",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:ApplyAB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eapp Comp (f,g) = g . f\u003c/code\u003e. Works like:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eapplyAB Comp (succ, pred) 'a'\n\u003c/code\u003e\u003c/strong\u003e'a'\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eapplyAB Comp (toEnum :: Int -\u003e Char, fromEnum) 10\n\u003c/code\u003e\u003c/strong\u003e10\n\u003c/pre\u003e\u003cp\u003eNote that defaulting will sometimes give you the wrong thing\n\u003c/p\u003e\u003cpre\u003e used to work (with associated types calculating result/argument types)\n \u003e\u003e\u003e applyAB Comp (fromEnum, toEnum) 'a'\n *** Exception: Prelude.Enum.().toEnum: bad argument\n\u003c/pre\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "Comp",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#Comp",
          "type": "data"
        },
        "index": {
          "description": "app Comp Works like applyAB Comp succ pred applyAB Comp toEnum Int Char fromEnum Note that defaulting will sometimes give you the wrong thing used to work with associated types calculating result argument types applyAB Comp fromEnum toEnum Exception Prelude.Enum toEnum bad argument",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "Comp",
          "package": "HList",
          "partial": "Comp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class without instances for explicit failure\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "Fail",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#Fail",
          "type": "class"
        },
        "index": {
          "description": "class without instances for explicit failure",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "Fail",
          "package": "HList",
          "partial": "Fail",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "Fun",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#Fun",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "Fun",
          "package": "HList",
          "partial": "Fun",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eFun\u003c/a\u003e\u003c/code\u003e. The only difference here is that the argument\ntype is calculated from the result type.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet rd = Fun' read :: Fun' Read String\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t applyAB rd\n\u003c/code\u003e\u003c/strong\u003eapplyAB rd :: Read b =\u003e [Char] -\u003e b\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet fromJust' = Fun' (\\(Just a) -\u003e a) :: Fun' '[] Maybe\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t applyAB fromJust'\n\u003c/code\u003e\u003c/strong\u003eapplyAB fromJust' :: Maybe b -\u003e b\n\u003c/pre\u003e\u003cp\u003eNote this use of Fun' means we don't have to get the b out of \u003ccode\u003eMaybe b\u003c/code\u003e,\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "Fun'",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#Fun%27",
          "type": "data"
        },
        "index": {
          "description": "see Fun The only difference here is that the argument type is calculated from the result type let rd Fun read Fun Read String applyAB rd applyAB rd Read Char let fromJust Fun Just Fun Maybe applyAB fromJust applyAB fromJust Maybe Note this use of Fun means we don have to get the out of Maybe",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "Fun'",
          "package": "HList",
          "partial": "Fun'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:Fun-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "FunApp",
          "package": "HList",
          "signature": "FunApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "FunApp",
          "package": "HList",
          "partial": "Fun App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:FunApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "FunCxt",
          "package": "HList",
          "signature": "FunCxt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "FunCxt",
          "package": "HList",
          "partial": "Fun Cxt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:FunCxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HAnd",
          "package": "HList",
          "signature": "HAnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HAnd",
          "package": "HList",
          "partial": "HAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HBoolEQ",
          "package": "HList",
          "signature": "HBoolEQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HBoolEQ",
          "package": "HList",
          "partial": "HBool EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HBoolEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two instances of \u003ccode\u003e\u003ca\u003eApplyAB\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eapplyAB (HComp HRead HShow) (5::Double) :: Double\n\u003c/code\u003e\u003c/strong\u003e5.0\n\u003c/pre\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "HComp",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#HComp",
          "type": "data"
        },
        "index": {
          "description": "Compose two instances of ApplyAB applyAB HComp HRead HShow Double Double",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HComp",
          "package": "HList",
          "partial": "HComp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HCond",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#HCond",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HCond",
          "package": "HList",
          "partial": "HCond",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HCond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe have to use Functional dependencies for now,\n for the sake of the generic equality.\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "HEq",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#HEq",
          "type": "class"
        },
        "index": {
          "description": "We have to use Functional dependencies for now for the sake of the generic equality",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HEq",
          "package": "HList",
          "partial": "HEq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "HFlip",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#HFlip",
          "type": "data"
        },
        "index": {
          "description": "flip",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HFlip",
          "package": "HList",
          "partial": "HFlip",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HFlip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HJust",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#HJust",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HJust",
          "package": "HList",
          "partial": "HJust",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess than\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "HLt",
          "package": "HList",
          "signature": "HLt",
          "type": "function"
        },
        "index": {
          "description": "Less than",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HLt",
          "package": "HList",
          "partial": "HLt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HLt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type to be lifted to the type level\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "HNat",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#HNat",
          "type": "data"
        },
        "index": {
          "description": "The data type to be lifted to the type level",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HNat",
          "package": "HList",
          "partial": "HNat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HNat2Integral",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#HNat2Integral",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HNat2Integral",
          "package": "HList",
          "partial": "HNat Integral",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HNat2Integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality on natural numbers\n (eventually to be subsumed by the universal polykinded HEq)\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "HNatEq",
          "package": "HList",
          "signature": "HNatEq",
          "type": "function"
        },
        "index": {
          "description": "Equality on natural numbers eventually to be subsumed by the universal polykinded HEq",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HNatEq",
          "package": "HList",
          "partial": "HNat Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HNatEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HNothing",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#HNothing",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HNothing",
          "package": "HList",
          "partial": "HNothing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HOr",
          "package": "HList",
          "signature": "HOr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HOr",
          "package": "HList",
          "partial": "HOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprint. An alternative implementation could be:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet hPrint = Fun print :: Fun Show (IO ())\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eThis produces:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t applyAB hPrint\n\u003c/code\u003e\u003c/strong\u003eapplyAB hPrint :: Show a =\u003e a -\u003e IO ()\n\u003c/pre\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "HPrint",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#HPrint",
          "type": "data"
        },
        "index": {
          "description": "print An alternative implementation could be let hPrint Fun print Fun Show IO This produces applyAB hPrint applyAB hPrint Show IO",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HPrint",
          "package": "HList",
          "partial": "HPrint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eapplyAB HRead \"5.0\" :: Double\n\u003c/code\u003e\u003c/strong\u003e5.0\n\u003c/pre\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "HRead",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#HRead",
          "type": "data"
        },
        "index": {
          "description": "read applyAB HRead Double",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HRead",
          "package": "HList",
          "partial": "HRead",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e((a,b) -\u003e f a \u003e\u003e b)\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "HSeq",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#HSeq",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HSeq",
          "package": "HList",
          "partial": "HSeq",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshow\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "HShow",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#HShow",
          "type": "data"
        },
        "index": {
          "description": "show",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HShow",
          "package": "HList",
          "partial": "HShow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:HShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e for record labels, polykinded\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "Label",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#Label",
          "type": "data"
        },
        "index": {
          "description": "special Proxy for record labels polykinded",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "Label",
          "package": "HList",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "ShowLabel",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#ShowLabel",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "ShowLabel",
          "package": "HList",
          "partial": "Show Label",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#t:ShowLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "Comp",
          "package": "HList",
          "signature": "Comp",
          "source": "src/Data-HList-FakePrelude.html#Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "Comp",
          "package": "HList",
          "partial": "Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "Fun",
          "package": "HList",
          "signature": "a -\u003e FunApp getb a)",
          "source": "src/Data-HList-FakePrelude.html#Fun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "Fun",
          "normalized": "a-\u003eFunApp b a)",
          "package": "HList",
          "partial": "Fun",
          "signature": "a-\u003eFunApp getb a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "Fun'",
          "package": "HList",
          "signature": "FunApp geta b -\u003e b)",
          "source": "src/Data-HList-FakePrelude.html#Fun%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "Fun'",
          "normalized": "FunApp a b-\u003eb)",
          "package": "HList",
          "partial": "Fun'",
          "signature": "FunApp geta b-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:Fun-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eg . f\u003c/pre\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "HComp",
          "package": "HList",
          "signature": "HComp g f",
          "source": "src/Data-HList-FakePrelude.html#HComp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HComp",
          "package": "HList",
          "partial": "HComp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HFlip",
          "package": "HList",
          "signature": "HFlip",
          "source": "src/Data-HList-FakePrelude.html#HFlip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HFlip",
          "package": "HList",
          "partial": "HFlip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HFlip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HJust",
          "package": "HList",
          "signature": "HJust x",
          "source": "src/Data-HList-FakePrelude.html#HJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HJust",
          "package": "HList",
          "partial": "HJust",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HNothing",
          "package": "HList",
          "signature": "HNothing",
          "source": "src/Data-HList-FakePrelude.html#HNothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HNothing",
          "package": "HList",
          "partial": "HNothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HPrint",
          "package": "HList",
          "signature": "HPrint",
          "source": "src/Data-HList-FakePrelude.html#HPrint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HPrint",
          "package": "HList",
          "partial": "HPrint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HRead",
          "package": "HList",
          "signature": "HRead",
          "source": "src/Data-HList-FakePrelude.html#HRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HRead",
          "package": "HList",
          "partial": "HRead",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HSeq",
          "package": "HList",
          "signature": "HSeq x",
          "source": "src/Data-HList-FakePrelude.html#HSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HSeq",
          "package": "HList",
          "partial": "HSeq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HShow",
          "package": "HList",
          "signature": "HShow",
          "source": "src/Data-HList-FakePrelude.html#HShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HShow",
          "package": "HList",
          "partial": "HShow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HSucc",
          "package": "HList",
          "signature": "HSucc HNat",
          "source": "src/Data-HList-FakePrelude.html#HNat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HSucc",
          "package": "HList",
          "partial": "HSucc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HSucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "HZero",
          "package": "HList",
          "signature": "HZero",
          "source": "src/Data-HList-FakePrelude.html#HNat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "HZero",
          "package": "HList",
          "partial": "HZero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:HZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "Label",
          "package": "HList",
          "signature": "Label",
          "source": "src/Data-HList-FakePrelude.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "Label",
          "package": "HList",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "apply",
          "package": "HList",
          "signature": "f -\u003e a -\u003e ApplyR f a",
          "source": "src/Data-HList-FakePrelude.html#apply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "apply",
          "normalized": "a-\u003eb-\u003eApplyR a b",
          "package": "HList",
          "signature": "f-\u003ea-\u003eApplyR f a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "applyAB",
          "package": "HList",
          "signature": "f -\u003e a -\u003e b",
          "source": "src/Data-HList-FakePrelude.html#applyAB",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "applyAB",
          "normalized": "a-\u003eb-\u003ec",
          "package": "HList",
          "partial": "AB",
          "signature": "f-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:applyAB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edemote\u003c/code\u003e to values\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "hAnd",
          "package": "HList",
          "signature": "Proxy t1 -\u003e Proxy t2 -\u003e Proxy (HAnd t1 t2)",
          "source": "src/Data-HList-FakePrelude.html#hAnd",
          "type": "function"
        },
        "index": {
          "description": "demote to values",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "hAnd",
          "normalized": "Proxy a-\u003eProxy a-\u003eProxy(HAnd a a)",
          "package": "HList",
          "partial": "And",
          "signature": "Proxy t-\u003eProxy t-\u003eProxy(HAnd t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "hCond",
          "package": "HList",
          "signature": "Proxy t -\u003e x -\u003e y -\u003e z",
          "source": "src/Data-HList-FakePrelude.html#hCond",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "hCond",
          "normalized": "Proxy a-\u003eb-\u003ec-\u003ed",
          "package": "HList",
          "partial": "Cond",
          "signature": "Proxy t-\u003ex-\u003ey-\u003ez",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hCond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "hEq",
          "package": "HList",
          "signature": "x -\u003e y -\u003e Proxy b",
          "source": "src/Data-HList-FakePrelude.html#hEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "hEq",
          "normalized": "a-\u003eb-\u003eProxy c",
          "package": "HList",
          "partial": "Eq",
          "signature": "x-\u003ey-\u003eProxy b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "hFalse",
          "package": "HList",
          "signature": "Proxy False",
          "source": "src/Data-HList-FakePrelude.html#hFalse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "hFalse",
          "package": "HList",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "hLt",
          "package": "HList",
          "signature": "Proxy x -\u003e Proxy y -\u003e Proxy (HLt x y)",
          "source": "src/Data-HList-FakePrelude.html#hLt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "hLt",
          "normalized": "Proxy a-\u003eProxy b-\u003eProxy(HLt a b)",
          "package": "HList",
          "partial": "Lt",
          "signature": "Proxy x-\u003eProxy y-\u003eProxy(HLt x y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hLt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "hNat2Integral",
          "package": "HList",
          "signature": "Proxy n -\u003e i",
          "source": "src/Data-HList-FakePrelude.html#hNat2Integral",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "hNat2Integral",
          "normalized": "Proxy a-\u003eb",
          "package": "HList",
          "partial": "Nat Integral",
          "signature": "Proxy n-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hNat2Integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edemote\u003c/code\u003e to values\n\u003c/p\u003e",
          "module": "Data.HList.FakePrelude",
          "name": "hOr",
          "package": "HList",
          "signature": "Proxy t1 -\u003e Proxy t2 -\u003e Proxy (HOr t1 t2)",
          "source": "src/Data-HList-FakePrelude.html#hOr",
          "type": "function"
        },
        "index": {
          "description": "demote to values",
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "hOr",
          "normalized": "Proxy a-\u003eProxy a-\u003eProxy(HOr a a)",
          "package": "HList",
          "partial": "Or",
          "signature": "Proxy t-\u003eProxy t-\u003eProxy(HOr t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "hPred",
          "package": "HList",
          "signature": "Proxy (HSucc n) -\u003e Proxy n",
          "source": "src/Data-HList-FakePrelude.html#hPred",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "hPred",
          "normalized": "Proxy(HSucc a)-\u003eProxy a",
          "package": "HList",
          "partial": "Pred",
          "signature": "Proxy(HSucc n)-\u003eProxy n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "hSucc",
          "package": "HList",
          "signature": "HNat) -\u003e Proxy (HSucc n)",
          "source": "src/Data-HList-FakePrelude.html#hSucc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "hSucc",
          "normalized": "HNat)-\u003eProxy(HSucc a)",
          "package": "HList",
          "partial": "Succ",
          "signature": "HNat)-\u003eProxy(HSucc n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hSucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "hTrue",
          "package": "HList",
          "signature": "Proxy True",
          "source": "src/Data-HList-FakePrelude.html#hTrue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "hTrue",
          "package": "HList",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "hZero",
          "package": "HList",
          "signature": "Proxy HZero",
          "source": "src/Data-HList-FakePrelude.html#hZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "hZero",
          "package": "HList",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:hZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "labelToProxy",
          "package": "HList",
          "signature": "Label l -\u003e Proxy l",
          "source": "src/Data-HList-FakePrelude.html#labelToProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "labelToProxy",
          "normalized": "Label a-\u003eProxy a",
          "package": "HList",
          "partial": "To Proxy",
          "signature": "Label l-\u003eProxy l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:labelToProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.FakePrelude",
          "name": "showLabel",
          "package": "HList",
          "signature": "Label l -\u003e String",
          "source": "src/Data-HList-FakePrelude.html#showLabel",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList FakePrelude",
          "module": "Data.HList.FakePrelude",
          "name": "showLabel",
          "normalized": "Label a-\u003eString",
          "package": "HList",
          "partial": "Label",
          "signature": "Label l-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-FakePrelude.html#v:showLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eArray-like access to HLists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.HArray",
          "name": "HArray",
          "package": "HList",
          "source": "src/Data-HList-HArray.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Array-like access to HLists",
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "HArray",
          "package": "HList",
          "partial": "HArray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "FHLookupByHNat",
          "package": "HList",
          "source": "src/Data-HList-HArray.html#FHLookupByHNat",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "FHLookupByHNat",
          "package": "HList",
          "partial": "FHLookup By HNat",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:FHLookupByHNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "FHUProj",
          "package": "HList",
          "source": "src/Data-HList-HArray.html#FHUProj",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "FHUProj",
          "package": "HList",
          "partial": "FHUProj",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:FHUProj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "HDeleteAtHNat",
          "package": "HList",
          "source": "src/Data-HList-HArray.html#HDeleteAtHNat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "HDeleteAtHNat",
          "package": "HList",
          "partial": "HDelete At HNat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HDeleteAtHNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "HLookupByHNat",
          "package": "HList",
          "source": "src/Data-HList-HArray.html#HLookupByHNat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "HLookupByHNat",
          "package": "HList",
          "partial": "HLookup By HNat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HLookupByHNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "HProjectAwayByHNatsCtx",
          "package": "HList",
          "source": "src/Data-HList-HArray.html#HProjectAwayByHNatsCtx",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "HProjectAwayByHNatsCtx",
          "package": "HList",
          "partial": "HProject Away By HNats Ctx",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HProjectAwayByHNatsCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "HProjectAwayByHNatsR",
          "package": "HList",
          "source": "src/Data-HList-HArray.html#HProjectAwayByHNatsR",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "HProjectAwayByHNatsR",
          "package": "HList",
          "partial": "HProject Away By HNats",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HProjectAwayByHNatsR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "HProjectByHNatsCtx",
          "package": "HList",
          "source": "src/Data-HList-HArray.html#HProjectByHNatsCtx",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "HProjectByHNatsCtx",
          "package": "HList",
          "partial": "HProject By HNats Ctx",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HProjectByHNatsCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "HProjectByHNatsR",
          "package": "HList",
          "source": "src/Data-HList-HArray.html#HProjectByHNatsR",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "HProjectByHNatsR",
          "package": "HList",
          "partial": "HProject By HNats",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HProjectByHNatsR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "HUpdateAtHNat",
          "package": "HList",
          "source": "src/Data-HList-HArray.html#HUpdateAtHNat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "HUpdateAtHNat",
          "package": "HList",
          "partial": "HUpdate At HNat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:HUpdateAtHNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "KMember",
          "package": "HList",
          "signature": "KMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "KMember",
          "package": "HList",
          "partial": "KMember",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#t:KMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "FHLookupByHNat",
          "package": "HList",
          "signature": "FHLookupByHNat (HList l)",
          "source": "src/Data-HList-HArray.html#FHLookupByHNat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "FHLookupByHNat",
          "package": "HList",
          "partial": "FHLookup By HNat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:FHLookupByHNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "FHUProj",
          "package": "HList",
          "signature": "FHUProj",
          "source": "src/Data-HList-HArray.html#FHUProj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "FHUProj",
          "package": "HList",
          "partial": "FHUProj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:FHUProj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "hDeleteAtHNat",
          "package": "HList",
          "signature": "Proxy n -\u003e HList l -\u003e HList (HDeleteAtHNatR n l)",
          "source": "src/Data-HList-HArray.html#hDeleteAtHNat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "hDeleteAtHNat",
          "normalized": "Proxy a-\u003eHList b-\u003eHList(HDeleteAtHNatR a b)",
          "package": "HList",
          "partial": "Delete At HNat",
          "signature": "Proxy n-\u003eHList l-\u003eHList(HDeleteAtHNatR n l)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hDeleteAtHNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "hLookupByHNat",
          "package": "HList",
          "signature": "Proxy n -\u003e HList l -\u003e HLookupByHNatR n l",
          "source": "src/Data-HList-HArray.html#hLookupByHNat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "hLookupByHNat",
          "normalized": "Proxy a-\u003eHList b-\u003eHLookupByHNatR a b",
          "package": "HList",
          "partial": "Lookup By HNat",
          "signature": "Proxy n-\u003eHList l-\u003eHLookupByHNatR n l",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hLookupByHNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "hProjectAwayByHNats",
          "package": "HList",
          "signature": "Proxy [HNat] ns -\u003e t -\u003e HList (HUnfold (FHUProj False ns) (t, Proxy HNat HZero))",
          "source": "src/Data-HList-HArray.html#hProjectAwayByHNats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "hProjectAwayByHNats",
          "normalized": "Proxy[HNat]a-\u003eb-\u003eHList(HUnfold(FHUProj False a)(b,Proxy HNat HZero))",
          "package": "HList",
          "partial": "Project Away By HNats",
          "signature": "Proxy[HNat]ns-\u003et-\u003eHList(HUnfold(FHUProj False ns)(t,Proxy HNat HZero))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hProjectAwayByHNats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "hProjectByHNats",
          "package": "HList",
          "signature": "Proxy [HNat] ns -\u003e t -\u003e HList (HUnfold (FHUProj True ns) (t, Proxy HNat HZero))",
          "source": "src/Data-HList-HArray.html#hProjectByHNats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "hProjectByHNats",
          "normalized": "Proxy[HNat]a-\u003eb-\u003eHList(HUnfold(FHUProj True a)(b,Proxy HNat HZero))",
          "package": "HList",
          "partial": "Project By HNats",
          "signature": "Proxy[HNat]ns-\u003et-\u003eHList(HUnfold(FHUProj True ns)(t,Proxy HNat HZero))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hProjectByHNats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "hProjectByHNats'",
          "package": "HList",
          "signature": "HList as' -\u003e HList l -\u003e HList bs'",
          "source": "src/Data-HList-HArray.html#hProjectByHNats%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "hProjectByHNats'",
          "normalized": "HList a-\u003eHList b-\u003eHList c",
          "package": "HList",
          "partial": "Project By HNats'",
          "signature": "HList as'-\u003eHList l-\u003eHList bs'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hProjectByHNats-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting an array according to indices\n\u003c/p\u003e",
          "module": "Data.HList.HArray",
          "name": "hSplitByHNats",
          "package": "HList",
          "signature": "Proxy [HNat] ns -\u003e t -\u003e (HList (HUnfold (FHUProj True ns) (t, Proxy HNat HZero)), HList (HUnfold (FHUProj False ns) (t, Proxy HNat HZero)))",
          "source": "src/Data-HList-HArray.html#hSplitByHNats",
          "type": "function"
        },
        "index": {
          "description": "Splitting an array according to indices",
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "hSplitByHNats",
          "normalized": "Proxy[HNat]a-\u003eb-\u003e(HList(HUnfold(FHUProj True a)(b,Proxy HNat HZero)),HList(HUnfold(FHUProj False a)(b,Proxy HNat HZero)))",
          "package": "HList",
          "partial": "Split By HNats",
          "signature": "Proxy[HNat]ns-\u003et-\u003e(HList(HUnfold(FHUProj True ns)(t,Proxy HNat HZero)),HList(HUnfold(FHUProj False ns)(t,Proxy HNat HZero)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hSplitByHNats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HArray",
          "name": "hUpdateAtHNat",
          "package": "HList",
          "signature": "Proxy n -\u003e e -\u003e HList l -\u003e HList (HUpdateAtHNatR n e l)",
          "source": "src/Data-HList-HArray.html#hUpdateAtHNat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HArray",
          "module": "Data.HList.HArray",
          "name": "hUpdateAtHNat",
          "normalized": "Proxy a-\u003eb-\u003eHList c-\u003eHList(HUpdateAtHNatR a b c)",
          "package": "HList",
          "partial": "Update At HNat",
          "signature": "Proxy n-\u003ee-\u003eHList l-\u003eHList(HUpdateAtHNatR n e l)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HArray.html#v:hUpdateAtHNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eBasic declarations for typeful heterogeneous lists.\n\u003c/p\u003e\u003cp\u003eExcuse the unstructured haddocks: while there are many declarations here\n   some are alternative implementations should be grouped, and the definitions\n   here are analgous to many list functions in the \u003ca\u003ePrelude\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.HList",
          "name": "HList",
          "package": "HList",
          "source": "src/Data-HList-HList.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Basic declarations for typeful heterogeneous lists Excuse the unstructured haddocks while there are many declarations here some are alternative implementations should be grouped and the definitions here are analgous to many list functions in the Prelude",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HList",
          "package": "HList",
          "partial": "HList",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion between GADT (\u003ccode\u003e\u003ca\u003eHList\u003c/a\u003e\u003c/code\u003e) and ADT (\u003ccode\u003e\u003ca\u003eHNil'\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eHCons'\u003c/a\u003e\u003c/code\u003e)\n representations\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "ConvHList",
          "package": "HList",
          "source": "src/Data-HList-HList.html#ConvHList",
          "type": "class"
        },
        "index": {
          "description": "conversion between GADT HList and ADT HNil HCons representations",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "ConvHList",
          "package": "HList",
          "partial": "Conv HList",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:ConvHList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "FHCons",
          "package": "HList",
          "source": "src/Data-HList-HList.html#FHCons",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "FHCons",
          "package": "HList",
          "partial": "FHCons",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:FHCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "FromHJust",
          "package": "HList",
          "source": "src/Data-HList-HList.html#FromHJust",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "FromHJust",
          "package": "HList",
          "partial": "From HJust",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:FromHJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HAddTag",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HAddTag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HAddTag",
          "package": "HList",
          "partial": "HAdd Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HAddTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HAppendList",
          "package": "HList",
          "signature": "HAppendList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HAppendList",
          "package": "HList",
          "partial": "HAppend List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HAppendList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HBuild'",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HBuild%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HBuild'",
          "package": "HList",
          "partial": "HBuild'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HBuild-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e but for HLists of HLists.\n\u003c/p\u003e\u003cp\u003eWorks in ghci... puzzling as what is different in doctest (it isn't\n\u003ccode\u003e-XExtendedDefaultRules\u003c/code\u003e)\n\u003c/p\u003e\u003cpre\u003e hConcat $ hBuild (hBuild 1 2 3) (hBuild 'a' \"abc\")\n\u003c/pre\u003e\u003cp\u003eH[1, 2, 3, \u003ccode\u003ea\u003c/code\u003e, \u003ca\u003eabc\u003c/a\u003e]\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "HConcat",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HConcat",
          "type": "class"
        },
        "index": {
          "description": "Like concat but for HLists of HLists Works in ghci puzzling as what is different in doctest it isn XExtendedDefaultRules hConcat hBuild hBuild hBuild abc abc",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HConcat",
          "package": "HList",
          "partial": "HConcat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HCons'",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HCons%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HCons'",
          "package": "HList",
          "partial": "HCons'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HCons-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is a pure type-level operation\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "HFind",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HFind",
          "type": "class"
        },
        "index": {
          "description": "It is pure type-level operation",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HFind",
          "package": "HList",
          "partial": "HFind",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HFind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HFind'",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HFind%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HFind'",
          "package": "HList",
          "partial": "HFind'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HFind-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehFoldl (uncurry $ flip (:)) [] (1 `HCons` 2 `HCons` HNil)\n\u003c/code\u003e\u003c/strong\u003e[2,1]\n\u003c/pre\u003e",
          "module": "Data.HList.HList",
          "name": "HFoldl",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HFoldl",
          "type": "class"
        },
        "index": {
          "description": "like foldl hFoldl uncurry flip HCons HCons HNil",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HFoldl",
          "package": "HList",
          "partial": "HFoldl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HFoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HFoldr",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HFoldr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HFoldr",
          "package": "HList",
          "partial": "HFoldr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HFoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HFoldr1",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HFoldr1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HFoldr1",
          "package": "HList",
          "partial": "HFoldr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HFoldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HFromJust",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HFromJust",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HFromJust",
          "package": "HList",
          "partial": "HFrom Just",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HFromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "HLength",
          "package": "HList",
          "signature": "HLength",
          "type": "function"
        },
        "index": {
          "description": "Length",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HLength",
          "package": "HList",
          "partial": "HLength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HList",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HList",
          "package": "HList",
          "partial": "HList",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003ehMapOut Id\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "HList2List",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HList2List",
          "type": "class"
        },
        "index": {
          "description": "Same as hMapOut Id",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HList2List",
          "package": "HList",
          "partial": "HList List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HList2List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HMap",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HMap",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HMap",
          "package": "HList",
          "partial": "HMap",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HMapAux",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HMapAux",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HMapAux",
          "package": "HList",
          "partial": "HMap Aux",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMapAux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HMapCxt",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HMapCxt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HMapCxt",
          "package": "HList",
          "partial": "HMap Cxt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMapCxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HMapOut",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HMapOut",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HMapOut",
          "package": "HList",
          "partial": "HMap Out",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMapOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck to see if an HList contains an element with a given type\n This is a type-level only test\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "HMember",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HMember",
          "type": "class"
        },
        "index": {
          "description": "Check to see if an HList contains an element with given type This is type-level only test",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HMember",
          "package": "HList",
          "partial": "HMember",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HMember'",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HMember%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HMember'",
          "package": "HList",
          "partial": "HMember'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMember-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck to see if an element e occurs in a list l\n If not, return 'Nothing\n If the element does occur, return 'Just l1\n where l1 is a type-level list without e\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "HMemberM",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HMemberM",
          "type": "class"
        },
        "index": {
          "description": "Check to see if an element occurs in list If not return Nothing If the element does occur return Just l1 where l1 is type-level list without",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HMemberM",
          "package": "HList",
          "partial": "HMember",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMemberM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HMemberM1",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HMemberM1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HMemberM1",
          "package": "HList",
          "partial": "HMember",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMemberM1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HMemberM2",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HMemberM2",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HMemberM2",
          "package": "HList",
          "partial": "HMember",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMemberM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HMemberP",
          "package": "HList",
          "signature": "HMemberP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HMemberP",
          "package": "HList",
          "partial": "HMember",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMemberP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HMemberP'",
          "package": "HList",
          "signature": "HMemberP'",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HMemberP'",
          "package": "HList",
          "partial": "HMember P'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HMemberP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe do so constructively, converting the HList whose elements\n are Proxy HNat to [HNat]. The latter kind is unpopulated and\n is present only at the type level.\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "HNats",
          "package": "HList",
          "signature": "HNats",
          "type": "function"
        },
        "index": {
          "description": "We do so constructively converting the HList whose elements are Proxy HNat to HNat The latter kind is unpopulated and is present only at the type level",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HNats",
          "package": "HList",
          "partial": "HNats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HNats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HNil'",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HNil%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HNil'",
          "package": "HList",
          "partial": "HNil'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HNil-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HReplicate",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HReplicate",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HReplicate",
          "package": "HList",
          "partial": "HReplicate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewould be associated with \u003ccode\u003e\u003ca\u003eHReplicate\u003c/a\u003e\u003c/code\u003e except we want\n it to work with \u003ccode\u003ee\u003c/code\u003e of any kind, not just \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e that you can\n put into a HList. An \"inverse\" of \u003ccode\u003e\u003ca\u003eHLength\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "HReplicateR",
          "package": "HList",
          "signature": "HReplicateR",
          "type": "function"
        },
        "index": {
          "description": "would be associated with HReplicate except we want it to work with of any kind not just that you can put into HList An inverse of HLength",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HReplicateR",
          "package": "HList",
          "partial": "HReplicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HReplicateR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HRevApp",
          "package": "HList",
          "signature": "HRevApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HRevApp",
          "package": "HList",
          "partial": "HRev App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HRevApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HRmTag",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HRmTag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HRmTag",
          "package": "HList",
          "partial": "HRm Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HRmTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HScanr",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HScanr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HScanr",
          "package": "HList",
          "partial": "HScanr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HScanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA heterogeneous version of\n\u003c/p\u003e\u003cpre\u003e sequenceA :: (Applicative m) =\u003e [m a] -\u003e m [a]\n\u003c/pre\u003e\u003cp\u003eOnly now we operate on heterogeneous lists, where different elements\n   may have different types \u003ccode\u003ea\u003c/code\u003e.\n   In the argument list of monadic values (m a_i),\n   although a_i may differ, the monad \u003ccode\u003em\u003c/code\u003e must be the same for all\n   elements. That's why we needed \u003ca\u003eData.HList.TypeCastGeneric2\u003c/a\u003e (currently (~)).\n   The typechecker will complain\n   if we attempt to use hSequence on a HList of monadic values with different\n   monads.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehSequence\u003c/a\u003e\u003c/code\u003e problem was posed by Matthias Fischmann\n   in his message on the Haskell-Cafe list on Oct 8, 2006\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.haskell.org/pipermail/haskell-cafe/2006-October/018708.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.haskell.org/pipermail/haskell-cafe/2006-October/018784.html\u003c/a\u003e\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eMaybe\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehSequence $ Just (1 :: Integer) `HCons` (Just 'c') `HCons` HNil\n\u003c/code\u003e\u003c/strong\u003eJust H[1, 'c']\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehSequence $  return 1 `HCons` Just  'c' `HCons` HNil\n\u003c/code\u003e\u003c/strong\u003eJust H[1, 'c']\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eList\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehSequence $ [1] `HCons` ['c'] `HCons` HNil\n\u003c/code\u003e\u003c/strong\u003e[H[1, 'c']]\n\u003c/pre\u003e",
          "module": "Data.HList.HList",
          "name": "HSequence",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HSequence",
          "type": "class"
        },
        "index": {
          "description": "heterogeneous version of sequenceA Applicative Only now we operate on heterogeneous lists where different elements may have different types In the argument list of monadic values although may differ the monad must be the same for all elements That why we needed Data.HList.TypeCastGeneric2 currently The typechecker will complain if we attempt to use hSequence on HList of monadic values with different monads The hSequence problem was posed by Matthias Fischmann in his message on the Haskell-Cafe list on Oct http www.haskell.org pipermail haskell-cafe October html http www.haskell.org pipermail haskell-cafe October html Maybe hSequence Just Integer HCons Just HCons HNil Just hSequence return HCons Just HCons HNil Just List hSequence HCons HCons HNil",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HSequence",
          "package": "HList",
          "partial": "HSequence",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogus to Data.List.\u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehSplit $ (2,hTrue) .*. (3,hTrue) .*. (1,hFalse) .*. HNil\n\u003c/code\u003e\u003c/strong\u003e(H[2, 3],H[1])\n\u003c/pre\u003e\u003cp\u003eit might make more sense to instead have \u003ccode\u003eLVPair Bool e\u003c/code\u003e\n instead of \u003ccode\u003e(e, Proxy Bool)\u003c/code\u003e since the former has the same\n runtime representation as \u003ccode\u003ee\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "HSplit",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HSplit",
          "type": "class"
        },
        "index": {
          "description": "Analogus to Data.List partition snd hSplit hTrue hTrue hFalse HNil it might make more sense to instead have LVPair Bool instead of Proxy Bool since the former has the same runtime representation as",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HSplit",
          "package": "HList",
          "partial": "HSplit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HTIntersect",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HTIntersect",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HTIntersect",
          "package": "HList",
          "partial": "HTIntersect",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HTIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HTIntersectBool",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HTIntersectBool",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HTIntersectBool",
          "package": "HList",
          "partial": "HTIntersect Bool",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HTIntersectBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecould be an associated type if HEq had one\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "HTMember",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HTMember",
          "type": "class"
        },
        "index": {
          "description": "could be an associated type if HEq had one",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HTMember",
          "package": "HList",
          "partial": "HTMember",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HTMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HUnfold",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HUnfold",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HUnfold",
          "package": "HList",
          "partial": "HUnfold",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HUnfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HUnfold'",
          "package": "HList",
          "source": "src/Data-HList-HList.html#HUnfold%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HUnfold'",
          "package": "HList",
          "partial": "HUnfold'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:HUnfold-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "LiftA2",
          "package": "HList",
          "source": "src/Data-HList-HList.html#LiftA2",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "LiftA2",
          "package": "HList",
          "partial": "Lift",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:LiftA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "MapCar",
          "package": "HList",
          "source": "src/Data-HList-HList.html#MapCar",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "MapCar",
          "package": "HList",
          "partial": "Map Car",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:MapCar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "Mapcar",
          "package": "HList",
          "source": "src/Data-HList-HList.html#Mapcar",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "Mapcar",
          "package": "HList",
          "partial": "Mapcar",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:Mapcar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esymmetrical version of \u003ccode\u003e\u003ca\u003eSameLength'\u003c/a\u003e\u003c/code\u003e. Written as a class instead of\n\u003c/p\u003e\u003cpre\u003e type SameLength a b = (SameLength' a b, SameLength' b a)\n\u003c/pre\u003e\u003cp\u003esince ghc expands type synonyms, but not classes (and it seems to have the same\nresult)\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "SameLength",
          "package": "HList",
          "source": "src/Data-HList-HList.html#SameLength",
          "type": "class"
        },
        "index": {
          "description": "symmetrical version of SameLength Written as class instead of type SameLength SameLength SameLength since ghc expands type synonyms but not classes and it seems to have the same result",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "SameLength",
          "package": "HList",
          "partial": "Same Length",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:SameLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure two lists have the same length. We do case analysis on the\n first one (hence the type must be known to the type checker).\n In contrast, the second list may be a type variable.\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "SameLength'",
          "package": "HList",
          "source": "src/Data-HList-HList.html#SameLength%27",
          "type": "class"
        },
        "index": {
          "description": "Ensure two lists have the same length We do case analysis on the first one hence the type must be known to the type checker In contrast the second list may be type variable",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "SameLength'",
          "package": "HList",
          "partial": "Same Length'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:SameLength-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe same as \u003ccode\u003emap Just\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoHJust (2 .*. 'a' .*. HNil)\n\u003c/code\u003e\u003c/strong\u003eH[HJust 2, HJust 'a']\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoHJust2 (2 .*. 'a' .*. HNil)\n\u003c/code\u003e\u003c/strong\u003eH[HJust 2, HJust 'a']\n\u003c/pre\u003e",
          "module": "Data.HList.HList",
          "name": "ToHJust",
          "package": "HList",
          "source": "src/Data-HList-HList.html#ToHJust",
          "type": "class"
        },
        "index": {
          "description": "the same as map Just toHJust HNil HJust HJust toHJust2 HNil HJust HJust",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "ToHJust",
          "package": "HList",
          "partial": "To HJust",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:ToHJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "UnHList",
          "package": "HList",
          "signature": "UnHList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "UnHList",
          "package": "HList",
          "partial": "Un HList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#t:UnHList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "FHCons",
          "package": "HList",
          "signature": "FHCons",
          "source": "src/Data-HList-HList.html#FHCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "FHCons",
          "package": "HList",
          "partial": "FHCons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:FHCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HAddTag",
          "package": "HList",
          "signature": "HAddTag t",
          "source": "src/Data-HList-HList.html#HAddTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HAddTag",
          "package": "HList",
          "partial": "HAdd Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HAddTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HCons",
          "package": "HList",
          "signature": "e -\u003e HList l -\u003e HList (e : l)",
          "source": "src/Data-HList-HList.html#HList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HCons",
          "normalized": "a-\u003eHList b-\u003eHList(a b)",
          "package": "HList",
          "partial": "HCons",
          "signature": "e-\u003eHList l-\u003eHList(e l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HCons'",
          "package": "HList",
          "signature": "HCons' a b",
          "source": "src/Data-HList-HList.html#HCons%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HCons'",
          "package": "HList",
          "partial": "HCons'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HCons-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HFromJust",
          "package": "HList",
          "signature": "HFromJust",
          "source": "src/Data-HList-HList.html#HFromJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HFromJust",
          "package": "HList",
          "partial": "HFrom Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HFromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HMap",
          "package": "HList",
          "signature": "HMap f",
          "source": "src/Data-HList-HList.html#HMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HMap",
          "package": "HList",
          "partial": "HMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HNil",
          "package": "HList",
          "signature": "HList `[]`",
          "source": "src/Data-HList-HList.html#HList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HNil",
          "normalized": "HList[]",
          "package": "HList",
          "partial": "HNil",
          "signature": "HList[]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HNil'",
          "package": "HList",
          "signature": "HNil'",
          "source": "src/Data-HList-HList.html#HNil%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HNil'",
          "package": "HList",
          "partial": "HNil'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HNil-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "HRmTag",
          "package": "HList",
          "signature": "HRmTag",
          "source": "src/Data-HList-HList.html#HRmTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "HRmTag",
          "package": "HList",
          "partial": "HRm Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:HRmTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "LiftA2",
          "package": "HList",
          "signature": "LiftA2 f",
          "source": "src/Data-HList-HList.html#LiftA2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "LiftA2",
          "package": "HList",
          "partial": "Lift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:LiftA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "MapCar",
          "package": "HList",
          "signature": "MapCar f",
          "source": "src/Data-HList-HList.html#MapCar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "MapCar",
          "package": "HList",
          "partial": "Map Car",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:MapCar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "Mapcar",
          "package": "HList",
          "signature": "Mapcar f",
          "source": "src/Data-HList-HList.html#Mapcar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "Mapcar",
          "package": "HList",
          "partial": "Mapcar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:Mapcar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehAppend'\u003c/a\u003e\u003c/code\u003e below is implemented using the same idea\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "append'",
          "package": "HList",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-HList-HList.html#append%27",
          "type": "function"
        },
        "index": {
          "description": "hAppend below is implemented using the same idea",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "append'",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "HList",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:append-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "fromHJust",
          "package": "HList",
          "signature": "HList l -\u003e HList (FromHJustR l)",
          "source": "src/Data-HList-HList.html#fromHJust",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "fromHJust",
          "normalized": "HList a-\u003eHList(FromHJustR a)",
          "package": "HList",
          "partial": "HJust",
          "signature": "HList l-\u003eHList(FromHJustR l)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:fromHJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA longer type could be inferred.\n fromHJust2 :: (HMap' HFromJust a b) =\u003e HList a -\u003e HList b\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "fromHJust2",
          "package": "HList",
          "signature": "HList as' -\u003e HList bs'",
          "source": "src/Data-HList-HList.html#fromHJust2",
          "type": "function"
        },
        "index": {
          "description": "longer type could be inferred fromHJust2 HMap HFromJust HList HList",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "fromHJust2",
          "normalized": "HList a-\u003eHList b",
          "package": "HList",
          "partial": "HJust",
          "signature": "HList as'-\u003eHList bs'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:fromHJust2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hAddTag",
          "package": "HList",
          "signature": "t -\u003e HList as' -\u003e HList bs'",
          "source": "src/Data-HList-HList.html#hAddTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hAddTag",
          "normalized": "a-\u003eHList b-\u003eHList c",
          "package": "HList",
          "partial": "Add Tag",
          "signature": "t-\u003eHList as'-\u003eHList bs'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hAddTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative implementation of \u003ccode\u003e\u003ca\u003ehAppend\u003c/a\u003e\u003c/code\u003e. Demonstrates \u003ccode\u003e\u003ca\u003eHFoldr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "hAppend'",
          "package": "HList",
          "signature": "HList l -\u003e v -\u003e r",
          "source": "src/Data-HList-HList.html#hAppend%27",
          "type": "function"
        },
        "index": {
          "description": "Alternative implementation of hAppend Demonstrates HFoldr",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hAppend'",
          "normalized": "HList a-\u003eb-\u003ec",
          "package": "HList",
          "partial": "Append'",
          "signature": "HList l-\u003ev-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hAppend-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe same as \u003ccode\u003e\u003ca\u003ehAppend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "hAppendList",
          "package": "HList",
          "signature": "HList l1 -\u003e HList l2 -\u003e HList (HAppendList l1 l2)",
          "source": "src/Data-HList-HList.html#hAppendList",
          "type": "function"
        },
        "index": {
          "description": "the same as hAppend",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hAppendList",
          "normalized": "HList a-\u003eHList a-\u003eHList(HAppendList a a)",
          "package": "HList",
          "partial": "Append List",
          "signature": "HList l-\u003eHList l-\u003eHList(HAppendList l l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hAppendList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilding lists\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "hBuild",
          "package": "HList",
          "signature": "r",
          "source": "src/Data-HList-HList.html#hBuild",
          "type": "function"
        },
        "index": {
          "description": "Building lists",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hBuild",
          "package": "HList",
          "partial": "Build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hBuild'",
          "package": "HList",
          "signature": "HList l -\u003e r",
          "source": "src/Data-HList-HList.html#hBuild%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hBuild'",
          "normalized": "HList a-\u003eb",
          "package": "HList",
          "partial": "Build'",
          "signature": "HList l-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hBuild-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet xs = length .*. (+1) .*. (*2) .*. HNil\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehComposeList xs \"abc\"\n\u003c/code\u003e\u003c/strong\u003e8\n\u003c/pre\u003e",
          "module": "Data.HList.HList",
          "name": "hComposeList",
          "package": "HList",
          "signature": "HList l -\u003e t -\u003e a",
          "source": "src/Data-HList-HList.html#hComposeList",
          "type": "function"
        },
        "index": {
          "description": "let xs length HNil hComposeList xs abc",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hComposeList",
          "normalized": "HList a-\u003eb-\u003ec",
          "package": "HList",
          "partial": "Compose List",
          "signature": "HList l-\u003et-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hComposeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hConcat",
          "package": "HList",
          "signature": "HList a -\u003e HList (HConcatR a)",
          "source": "src/Data-HList-HList.html#hConcat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hConcat",
          "normalized": "HList a-\u003eHList(HConcatR a)",
          "package": "HList",
          "partial": "Concat",
          "signature": "HList a-\u003eHList(HConcatR a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ex :: HList a\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e means: \u003ccode\u003eforall a. x :: HList a\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ehEnd x\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e means: \u003ccode\u003eexists a. x :: HList a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eList termination\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "hEnd",
          "package": "HList",
          "signature": "HList l -\u003e HList l",
          "source": "src/Data-HList-HList.html#hEnd",
          "type": "function"
        },
        "index": {
          "description": "Note HList means forall HList hEnd means exists HList List termination",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hEnd",
          "normalized": "HList a-\u003eHList a",
          "package": "HList",
          "partial": "End",
          "signature": "HList l-\u003eHList l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate list with a type-level Boolean\n hFlag :: HMap' (HAddTag (Proxy True)) l r =\u003e HList l -\u003e HList r\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "hFlag",
          "package": "HList",
          "signature": "HList as' -\u003e HList bs'",
          "source": "src/Data-HList-HList.html#hFlag",
          "type": "function"
        },
        "index": {
          "description": "Annotate list with type-level Boolean hFlag HMap HAddTag Proxy True HList HList",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hFlag",
          "normalized": "HList a-\u003eHList b",
          "package": "HList",
          "partial": "Flag",
          "signature": "HList as'-\u003eHList bs'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hFoldl",
          "package": "HList",
          "signature": "f -\u003e z -\u003e HList xs -\u003e r",
          "source": "src/Data-HList-HList.html#hFoldl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hFoldl",
          "normalized": "a-\u003eb-\u003eHList c-\u003ed",
          "package": "HList",
          "partial": "Foldl",
          "signature": "f-\u003ez-\u003eHList xs-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hFoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hFoldr",
          "package": "HList",
          "signature": "f -\u003e v -\u003e HList l -\u003e r",
          "source": "src/Data-HList-HList.html#hFoldr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hFoldr",
          "normalized": "a-\u003eb-\u003eHList c-\u003ed",
          "package": "HList",
          "partial": "Foldr",
          "signature": "f-\u003ev-\u003eHList l-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hFoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hFoldr1",
          "package": "HList",
          "signature": "f -\u003e HList l -\u003e r",
          "source": "src/Data-HList-HList.html#hFoldr1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hFoldr1",
          "normalized": "a-\u003eHList b-\u003ec",
          "package": "HList",
          "partial": "Foldr",
          "signature": "f-\u003eHList l-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hFoldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "hHead",
          "package": "HList",
          "signature": "HList (e : l) -\u003e e",
          "source": "src/Data-HList-HList.html#hHead",
          "type": "function"
        },
        "index": {
          "description": "head",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hHead",
          "normalized": "HList(a b)-\u003ea",
          "package": "HList",
          "partial": "Head",
          "signature": "HList(e l)-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hLength",
          "package": "HList",
          "signature": "HList l -\u003e Proxy (HLength l)",
          "source": "src/Data-HList-HList.html#hLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hLength",
          "normalized": "HList a-\u003eProxy(HLength a)",
          "package": "HList",
          "partial": "Length",
          "signature": "HList l-\u003eProxy(HLength l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hList2List",
          "package": "HList",
          "signature": "HList l -\u003e [e]",
          "source": "src/Data-HList-HList.html#hList2List",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hList2List",
          "normalized": "HList a-\u003e[b]",
          "package": "HList",
          "partial": "List List",
          "signature": "HList l-\u003e[e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hList2List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehMap is written such that the length of the result list\ncan be determined from the length of the argument list (and\nthe other way around). Similarly, the type of the elements\nof the list is propagated in both directions too.\n\u003c/p\u003e\u003cp\u003eExcuse the ugly types printed. Unfortunately ghc (still?)\nshows types like \u003ccode\u003e'[a,b]\u003c/code\u003e using the actual constructors involved\n\u003ccode\u003e(':) a ((':) b '[])\u003c/code\u003e (or even worse when the kind variables are printed).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XNoMonomorphismRestriction\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet xs = 1 .*. 'c' .*. HNil\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t hMap (HJust ()) xs\n\u003c/code\u003e\u003c/strong\u003ehMap (HJust ()) xs\n  :: Num y =\u003e HList ((':) * (HJust y) ((':) * (HJust Char) ('[] *)))\n\u003c/pre\u003e\u003cp\u003eThese 4 examples show that the constraint on the length (2 in this cae)\ncan be applied before or after the \u003ccode\u003e\u003ca\u003ehMap\u003c/a\u003e\u003c/code\u003e. That inference is independent of the\ndirection that type information is propagated for the individual elements.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet asLen2 xs = xs `asTypeOf` (undefined :: HList '[a,b])\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet lr xs = asLen2 (applyAB (HMap HRead) xs)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet ls xs = asLen2 (applyAB (HMap HShow) xs)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet rl xs = applyAB (HMap HRead) (asLen2 xs)\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet sl xs = applyAB (HMap HShow) (asLen2 xs)\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t lr\n\u003c/code\u003e\u003c/strong\u003elr\n  :: (Read y, Read y1) =\u003e\n     HList ((':) * String ((':) * String ('[] *)))\n     -\u003e HList ((':) * y ((':) * y1 ('[] *)))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t rl\n\u003c/code\u003e\u003c/strong\u003erl\n  :: (Read y, Read y1) =\u003e\n     HList ((':) * String ((':) * String ('[] *)))\n     -\u003e HList ((':) * y ((':) * y1 ('[] *)))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t ls\n\u003c/code\u003e\u003c/strong\u003els\n  :: (Show y, Show y1) =\u003e\n     HList ((':) * y ((':) * y1 ('[] *)))\n     -\u003e HList ((':) * String ((':) * String ('[] *)))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t sl\n\u003c/code\u003e\u003c/strong\u003esl\n  :: (Show y, Show y1) =\u003e\n     HList ((':) * y ((':) * y1 ('[] *)))\n     -\u003e HList ((':) * String ((':) * String ('[] *)))\n\u003c/pre\u003e",
          "module": "Data.HList.HList",
          "name": "hMap",
          "package": "HList",
          "signature": "f -\u003e HList as' -\u003e HList bs'",
          "source": "src/Data-HList-HList.html#hMap",
          "type": "function"
        },
        "index": {
          "description": "hMap is written such that the length of the result list can be determined from the length of the argument list and the other way around Similarly the type of the elements of the list is propagated in both directions too Excuse the ugly types printed Unfortunately ghc still shows types like using the actual constructors involved or even worse when the kind variables are printed set XNoMonomorphismRestriction let xs HNil hMap HJust xs hMap HJust xs Num HList HJust HJust Char These examples show that the constraint on the length in this cae can be applied before or after the hMap That inference is independent of the direction that type information is propagated for the individual elements let asLen2 xs xs asTypeOf undefined HList let lr xs asLen2 applyAB HMap HRead xs let ls xs asLen2 applyAB HMap HShow xs let rl xs applyAB HMap HRead asLen2 xs let sl xs applyAB HMap HShow asLen2 xs lr lr Read Read y1 HList String String HList y1 rl rl Read Read y1 HList String String HList y1 ls ls Show Show y1 HList y1 HList String String sl sl Show Show y1 HList y1 HList String String",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hMap",
          "normalized": "a-\u003eHList b-\u003eHList c",
          "package": "HList",
          "partial": "Map",
          "signature": "f-\u003eHList as'-\u003eHList bs'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hMapAux",
          "package": "HList",
          "signature": "f -\u003e HList l -\u003e HList r",
          "source": "src/Data-HList-HList.html#hMapAux",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hMapAux",
          "normalized": "a-\u003eHList b-\u003eHList c",
          "package": "HList",
          "partial": "Map Aux",
          "signature": "f-\u003eHList l-\u003eHList r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMapAux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e mapM :: forall b m a. (Monad m) =\u003e (a -\u003e m b) -\u003e [a] -\u003e m [b]\n\u003c/pre\u003e\u003cp\u003eLikewise for mapM_.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ehSequence\u003c/a\u003e\u003c/code\u003e if the result list should also be heterogenous.\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "hMapM",
          "package": "HList",
          "signature": "f -\u003e HList l -\u003e [m e]",
          "source": "src/Data-HList-HList.html#hMapM",
          "type": "function"
        },
        "index": {
          "description": "mapM forall Monad Likewise for mapM See hSequence if the result list should also be heterogenous",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hMapM",
          "normalized": "a-\u003eHList b-\u003e[c d]",
          "package": "HList",
          "partial": "Map",
          "signature": "f-\u003eHList l-\u003e[m e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGHC doesn't like its own type.\n hMapM_  :: forall m a f e. (Monad m, HMapOut f a (m e)) =\u003e f -\u003e a -\u003e m ()\n Without explicit type signature, it's Ok. Sigh.\n Anyway, Hugs does insist on a better type. So we restrict as follows:\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "hMapM_",
          "package": "HList",
          "signature": "f -\u003e HList l -\u003e m ()",
          "source": "src/Data-HList-HList.html#hMapM_",
          "type": "function"
        },
        "index": {
          "description": "GHC doesn like its own type hMapM forall Monad HMapOut Without explicit type signature it Ok Sigh Anyway Hugs does insist on better type So we restrict as follows",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hMapM_",
          "normalized": "a-\u003eHList b-\u003ec()",
          "package": "HList",
          "partial": "Map",
          "signature": "f-\u003eHList l-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ehMap\u003c/a\u003e\u003c/code\u003e only a different implementation.\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "hMapMapCar",
          "package": "HList",
          "signature": "f -\u003e HList l -\u003e l'",
          "source": "src/Data-HList-HList.html#hMapMapCar",
          "type": "function"
        },
        "index": {
          "description": "Same as hMap only different implementation",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hMapMapCar",
          "normalized": "a-\u003eHList b-\u003ec",
          "package": "HList",
          "partial": "Map Map Car",
          "signature": "f-\u003eHList l-\u003el'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMapMapCar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hMapOut",
          "package": "HList",
          "signature": "f -\u003e HList l -\u003e [e]",
          "source": "src/Data-HList-HList.html#hMapOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hMapOut",
          "normalized": "a-\u003eHList b-\u003e[c]",
          "package": "HList",
          "partial": "Map Out",
          "signature": "f-\u003eHList l-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMapOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hMember",
          "package": "HList",
          "signature": "Proxy e -\u003e Proxy l -\u003e Proxy b",
          "source": "src/Data-HList-HList.html#hMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hMember",
          "normalized": "Proxy a-\u003eProxy b-\u003eProxy c",
          "package": "HList",
          "partial": "Member",
          "signature": "Proxy e-\u003eProxy l-\u003eProxy b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hNats",
          "package": "HList",
          "signature": "HList l -\u003e Proxy (HNats l)",
          "source": "src/Data-HList-HList.html#hNats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hNats",
          "normalized": "HList a-\u003eProxy(HNats a)",
          "package": "HList",
          "partial": "Nats",
          "signature": "HList l-\u003eProxy(HNats l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hNats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hReplicate",
          "package": "HList",
          "signature": "Proxy n -\u003e e -\u003e HList (HReplicateR n e)",
          "source": "src/Data-HList-HList.html#hReplicate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hReplicate",
          "normalized": "Proxy a-\u003eb-\u003eHList(HReplicateR a b)",
          "package": "HList",
          "partial": "Replicate",
          "signature": "Proxy n-\u003ee-\u003eHList(HReplicateR n e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hRevApp",
          "package": "HList",
          "signature": "HList l1 -\u003e HList l2 -\u003e HList (HRevApp l1 l2)",
          "source": "src/Data-HList-HList.html#hRevApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hRevApp",
          "normalized": "HList a-\u003eHList a-\u003eHList(HRevApp a a)",
          "package": "HList",
          "partial": "Rev App",
          "signature": "HList l-\u003eHList l-\u003eHList(HRevApp l l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hRevApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hReverse",
          "package": "HList",
          "signature": "HList l1 -\u003e HList (HRevApp * l1 ([] *))",
          "source": "src/Data-HList-HList.html#hReverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hReverse",
          "normalized": "HList a-\u003eHList(HRevApp*a([]*))",
          "package": "HList",
          "partial": "Reverse",
          "signature": "HList l-\u003eHList(HRevApp*l([]*))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hReverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hRmTag",
          "package": "HList",
          "signature": "HList as' -\u003e HList bs'",
          "source": "src/Data-HList-HList.html#hRmTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hRmTag",
          "normalized": "HList a-\u003eHList b",
          "package": "HList",
          "partial": "Rm Tag",
          "signature": "HList as'-\u003eHList bs'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hRmTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hScanr",
          "package": "HList",
          "signature": "f -\u003e z -\u003e HList ls -\u003e HList rs",
          "source": "src/Data-HList-HList.html#hScanr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hScanr",
          "normalized": "a-\u003eb-\u003eHList c-\u003eHList d",
          "package": "HList",
          "partial": "Scanr",
          "signature": "f-\u003ez-\u003eHList ls-\u003eHList rs",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hScanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hSequence",
          "package": "HList",
          "signature": "HList a -\u003e m (HList b)",
          "source": "src/Data-HList-HList.html#hSequence",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hSequence",
          "normalized": "HList a-\u003eb(HList c)",
          "package": "HList",
          "partial": "Sequence",
          "signature": "HList a-\u003em(HList b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hSplit",
          "package": "HList",
          "signature": "HList l -\u003e (HList (HSplitT l), HList (HSplitF l))",
          "source": "src/Data-HList-HList.html#hSplit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hSplit",
          "normalized": "HList a-\u003e(HList(HSplitT a),HList(HSplitF a))",
          "package": "HList",
          "partial": "Split",
          "signature": "HList l-\u003e(HList(HSplitT l),HList(HSplitF l))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "hTIntersect",
          "package": "HList",
          "signature": "HList l1 -\u003e HList l2 -\u003e HList l3",
          "source": "src/Data-HList-HList.html#hTIntersect",
          "type": "method"
        },
        "index": {
          "description": "Like intersect",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hTIntersect",
          "normalized": "HList a-\u003eHList a-\u003eHList a",
          "package": "HList",
          "partial": "TIntersect",
          "signature": "HList l-\u003eHList l-\u003eHList l",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hTIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hTIntersectBool",
          "package": "HList",
          "signature": "Proxy b -\u003e h -\u003e HList t -\u003e HList l1 -\u003e HList l2",
          "source": "src/Data-HList-HList.html#hTIntersectBool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hTIntersectBool",
          "normalized": "Proxy a-\u003eb-\u003eHList c-\u003eHList d-\u003eHList d",
          "package": "HList",
          "partial": "TIntersect Bool",
          "signature": "Proxy b-\u003eh-\u003eHList t-\u003eHList l-\u003eHList l",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hTIntersectBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hTMember",
          "package": "HList",
          "signature": "e -\u003e HList l -\u003e Proxy b",
          "source": "src/Data-HList-HList.html#hTMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hTMember",
          "normalized": "a-\u003eHList b-\u003eProxy c",
          "package": "HList",
          "partial": "TMember",
          "signature": "e-\u003eHList l-\u003eProxy b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hTMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "hTail",
          "package": "HList",
          "signature": "HList (e : l) -\u003e HList l",
          "source": "src/Data-HList-HList.html#hTail",
          "type": "function"
        },
        "index": {
          "description": "tail",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hTail",
          "normalized": "HList(a b)-\u003eHList b",
          "package": "HList",
          "partial": "Tail",
          "signature": "HList(e l)-\u003eHList l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hUnfold",
          "package": "HList",
          "signature": "p -\u003e s -\u003e HList (HUnfold p s)",
          "source": "src/Data-HList-HList.html#hUnfold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hUnfold",
          "normalized": "a-\u003eb-\u003eHList(HUnfold a b)",
          "package": "HList",
          "partial": "Unfold",
          "signature": "p-\u003es-\u003eHList(HUnfold p s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hUnfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "hUnfold'",
          "package": "HList",
          "signature": "p -\u003e res -\u003e HList (HUnfoldR p res)",
          "source": "src/Data-HList-HList.html#hUnfold%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "hUnfold'",
          "normalized": "a-\u003eb-\u003eHList(HUnfoldR a b)",
          "package": "HList",
          "partial": "Unfold'",
          "signature": "p-\u003eres-\u003eHList(HUnfoldR p res)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:hUnfold-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "prime",
          "package": "HList",
          "signature": "HList a -\u003e Prime a",
          "source": "src/Data-HList-HList.html#prime",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "prime",
          "normalized": "HList a-\u003ePrime a",
          "package": "HList",
          "signature": "HList a-\u003ePrime a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:prime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "toHJust",
          "package": "HList",
          "signature": "HList l -\u003e HList l'",
          "source": "src/Data-HList-HList.html#toHJust",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "toHJust",
          "normalized": "HList a-\u003eHList b",
          "package": "HList",
          "partial": "HJust",
          "signature": "HList l-\u003eHList l'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:toHJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealternative implementation. The Apply instance is in \u003ca\u003eData.HList.FakePrelude\u003c/a\u003e.\n A longer type could be inferred.\n toHJust2 :: (HMap' (HJust ()) a b) =\u003e HList a -\u003e HList b\n\u003c/p\u003e",
          "module": "Data.HList.HList",
          "name": "toHJust2",
          "package": "HList",
          "signature": "HList as' -\u003e HList bs'",
          "source": "src/Data-HList-HList.html#toHJust2",
          "type": "function"
        },
        "index": {
          "description": "alternative implementation The Apply instance is in Data.HList.FakePrelude longer type could be inferred toHJust2 HMap HJust HList HList",
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "toHJust2",
          "normalized": "HList a-\u003eHList b",
          "package": "HList",
          "partial": "HJust",
          "signature": "HList as'-\u003eHList bs'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:toHJust2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HList",
          "name": "unPrime",
          "package": "HList",
          "signature": "Prime a -\u003e HList a",
          "source": "src/Data-HList-HList.html#unPrime",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HList",
          "module": "Data.HList.HList",
          "name": "unPrime",
          "normalized": "Prime a-\u003eHList a",
          "package": "HList",
          "partial": "Prime",
          "signature": "Prime a-\u003eHList a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HList.html#v:unPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eDeclarations for various classes and functions that\n   apply for the whole range of heterogeneous collections\n   (HList, TIP, records, etc).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.HListPrelude",
          "name": "HListPrelude",
          "package": "HList",
          "source": "src/Data-HList-HListPrelude.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Declarations for various classes and functions that apply for the whole range of heterogeneous collections HList TIP records etc",
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "HListPrelude",
          "package": "HList",
          "partial": "HList Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HListPrelude",
          "name": "HAppend",
          "package": "HList",
          "source": "src/Data-HList-HListPrelude.html#HAppend",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "HAppend",
          "package": "HList",
          "partial": "HAppend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epoly-kinded, but \u003ccode\u003e\u003ca\u003ehAppend\u003c/a\u003e\u003c/code\u003e only works in cases where the kind variable\n \u003ccode\u003ek\u003c/code\u003e is \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.HListPrelude",
          "name": "HAppendR",
          "package": "HList",
          "signature": "HAppendR",
          "type": "function"
        },
        "index": {
          "description": "poly-kinded but hAppend only works in cases where the kind variable is",
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "HAppendR",
          "package": "HList",
          "partial": "HAppend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HAppendR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all elements with the type-level key e from the\n collection l. Since the key is type-level, it is represented\n by a Proxy.\n (polykinded)\n\u003c/p\u003e",
          "module": "Data.HList.HListPrelude",
          "name": "HDeleteMany",
          "package": "HList",
          "source": "src/Data-HList-HListPrelude.html#HDeleteMany",
          "type": "class"
        },
        "index": {
          "description": "Delete all elements with the type-level key from the collection Since the key is type-level it is represented by Proxy polykinded",
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "HDeleteMany",
          "package": "HList",
          "partial": "HDelete Many",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HDeleteMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HListPrelude",
          "name": "HExtend",
          "package": "HList",
          "source": "src/Data-HList-HListPrelude.html#HExtend",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "HExtend",
          "package": "HList",
          "partial": "HExtend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HExtend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HListPrelude",
          "name": "HOccurs",
          "package": "HList",
          "source": "src/Data-HList-HListPrelude.html#HOccurs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "HOccurs",
          "package": "HList",
          "partial": "HOccurs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HOccurs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HListPrelude",
          "name": "HOccursNot",
          "package": "HList",
          "source": "src/Data-HList-HListPrelude.html#HOccursNot",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "HOccursNot",
          "package": "HList",
          "partial": "HOccurs Not",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HOccursNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HListPrelude",
          "name": "HProject",
          "package": "HList",
          "source": "src/Data-HList-HListPrelude.html#HProject",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "HProject",
          "package": "HList",
          "partial": "HProject",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a type (key) to a natural (index) within the collection\n This is a purely type-level computation\n\u003c/p\u003e",
          "module": "Data.HList.HListPrelude",
          "name": "HType2HNat",
          "package": "HList",
          "source": "src/Data-HList-HListPrelude.html#HType2HNat",
          "type": "class"
        },
        "index": {
          "description": "Map type key to natural index within the collection This is purely type-level computation",
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "HType2HNat",
          "package": "HList",
          "partial": "HType HNat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HType2HNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HListPrelude",
          "name": "HTypes2HNats",
          "package": "HList",
          "source": "src/Data-HList-HListPrelude.html#HTypes2HNats",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "HTypes2HNats",
          "package": "HList",
          "partial": "HTypes HNats",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:HTypes2HNats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HListPrelude",
          "name": "SubType",
          "package": "HList",
          "source": "src/Data-HList-HListPrelude.html#SubType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "SubType",
          "package": "HList",
          "partial": "Sub Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#t:SubType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HListPrelude",
          "name": "(.*.)",
          "package": "HList",
          "signature": "e -\u003e l -\u003e HExtendR e l",
          "source": "src/Data-HList-HListPrelude.html#.%2A.",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "(.*.) .*.",
          "normalized": "a-\u003eb-\u003eHExtendR a b",
          "package": "HList",
          "signature": "e-\u003el-\u003eHExtendR e l",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#v:.-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HListPrelude",
          "name": "hAppend",
          "package": "HList",
          "signature": "l1 -\u003e l2 -\u003e HAppendR l1 l2",
          "source": "src/Data-HList-HListPrelude.html#hAppend",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "hAppend",
          "normalized": "a-\u003ea-\u003eHAppendR a a",
          "package": "HList",
          "partial": "Append",
          "signature": "l-\u003el-\u003eHAppendR l l",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#v:hAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HListPrelude",
          "name": "hDeleteMany",
          "package": "HList",
          "signature": "Proxy e -\u003e l -\u003e l'",
          "source": "src/Data-HList-HListPrelude.html#hDeleteMany",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "hDeleteMany",
          "normalized": "Proxy a-\u003eb-\u003ec",
          "package": "HList",
          "partial": "Delete Many",
          "signature": "Proxy e-\u003el-\u003el'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#v:hDeleteMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HListPrelude",
          "name": "hOccurs",
          "package": "HList",
          "signature": "l -\u003e e",
          "source": "src/Data-HList-HListPrelude.html#hOccurs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "hOccurs",
          "normalized": "a-\u003eb",
          "package": "HList",
          "partial": "Occurs",
          "signature": "l-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#v:hOccurs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HListPrelude",
          "name": "hProject",
          "package": "HList",
          "signature": "l -\u003e l'",
          "source": "src/Data-HList-HListPrelude.html#hProject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HListPrelude",
          "module": "Data.HList.HListPrelude",
          "name": "hProject",
          "normalized": "a-\u003eb",
          "package": "HList",
          "partial": "Project",
          "signature": "l-\u003el'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HListPrelude.html#v:hProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eResult-type-driven operations on typeful heterogeneous lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.HOccurs",
          "name": "HOccurs",
          "package": "HList",
          "source": "src/Data-HList-HOccurs.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Result-type-driven operations on typeful heterogeneous lists",
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "HOccurs",
          "package": "HList",
          "partial": "HOccurs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "HOccurrence",
          "package": "HList",
          "source": "src/Data-HList-HOccurs.html#HOccurrence",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "HOccurrence",
          "package": "HList",
          "partial": "HOccurrence",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccurrence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "HOccurrence'",
          "package": "HList",
          "source": "src/Data-HList-HOccurs.html#HOccurrence%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "HOccurrence'",
          "package": "HList",
          "partial": "HOccurrence'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccurrence-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "HOccurs'",
          "package": "HList",
          "source": "src/Data-HList-HOccurs.html#HOccurs%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "HOccurs'",
          "package": "HList",
          "partial": "HOccurs'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccurs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "HOccursMany",
          "package": "HList",
          "source": "src/Data-HList-HOccurs.html#HOccursMany",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "HOccursMany",
          "package": "HList",
          "partial": "HOccurs Many",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccursMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "HOccursMany'",
          "package": "HList",
          "source": "src/Data-HList-HOccurs.html#HOccursMany%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "HOccursMany'",
          "package": "HList",
          "partial": "HOccurs Many'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccursMany-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "HOccursNot'",
          "package": "HList",
          "source": "src/Data-HList-HOccurs.html#HOccursNot%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "HOccursNot'",
          "package": "HList",
          "partial": "HOccurs Not'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccursNot-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "HOccursOpt'",
          "package": "HList",
          "source": "src/Data-HList-HOccurs.html#HOccursOpt%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "HOccursOpt'",
          "package": "HList",
          "partial": "HOccurs Opt'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:HOccursOpt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "TypeFound",
          "package": "HList",
          "source": "src/Data-HList-HOccurs.html#TypeFound",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "TypeFound",
          "package": "HList",
          "partial": "Type Found",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:TypeFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "TypeNotFound",
          "package": "HList",
          "source": "src/Data-HList-HOccurs.html#TypeNotFound",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "TypeNotFound",
          "package": "HList",
          "partial": "Type Not Found",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#t:TypeNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "hOccurrence",
          "package": "HList",
          "signature": "e1 -\u003e HList l -\u003e HList l'",
          "source": "src/Data-HList-HOccurs.html#hOccurrence",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "hOccurrence",
          "normalized": "a-\u003eHList b-\u003eHList c",
          "package": "HList",
          "partial": "Occurrence",
          "signature": "e-\u003eHList l-\u003eHList l'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccurrence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "hOccurrence'",
          "package": "HList",
          "signature": "Proxy b -\u003e e1 -\u003e HList l -\u003e HList l'",
          "source": "src/Data-HList-HOccurs.html#hOccurrence%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "hOccurrence'",
          "normalized": "Proxy a-\u003eb-\u003eHList c-\u003eHList d",
          "package": "HList",
          "partial": "Occurrence'",
          "signature": "Proxy b-\u003ee-\u003eHList l-\u003eHList l'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccurrence-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "hOccurs'",
          "package": "HList",
          "signature": "HList l -\u003e e",
          "source": "src/Data-HList-HOccurs.html#hOccurs%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "hOccurs'",
          "normalized": "HList a-\u003eb",
          "package": "HList",
          "partial": "Occurs'",
          "signature": "HList l-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccurs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "hOccursFst",
          "package": "HList",
          "signature": "HList l -\u003e e",
          "source": "src/Data-HList-HOccurs.html#hOccursFst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "hOccursFst",
          "normalized": "HList a-\u003eb",
          "package": "HList",
          "partial": "Occurs Fst",
          "signature": "HList l-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccursFst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "hOccursMany",
          "package": "HList",
          "signature": "HList l -\u003e [e]",
          "source": "src/Data-HList-HOccurs.html#hOccursMany",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "hOccursMany",
          "normalized": "HList a-\u003e[b]",
          "package": "HList",
          "partial": "Occurs Many",
          "signature": "HList l-\u003e[e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccursMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "hOccursMany'",
          "package": "HList",
          "signature": "HList l -\u003e [e]",
          "source": "src/Data-HList-HOccurs.html#hOccursMany%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "hOccursMany'",
          "normalized": "HList a-\u003e[b]",
          "package": "HList",
          "partial": "Occurs Many'",
          "signature": "HList l-\u003e[e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccursMany-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "hOccursMany1",
          "package": "HList",
          "signature": "HList l -\u003e (e, [e])",
          "source": "src/Data-HList-HOccurs.html#hOccursMany1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "hOccursMany1",
          "normalized": "HList a-\u003e(b,[b])",
          "package": "HList",
          "partial": "Occurs Many",
          "signature": "HList l-\u003e(e,[e])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccursMany1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "hOccursOpt",
          "package": "HList",
          "signature": "HList l -\u003e Maybe e",
          "source": "src/Data-HList-HOccurs.html#hOccursOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "hOccursOpt",
          "normalized": "HList a-\u003eMaybe b",
          "package": "HList",
          "partial": "Occurs Opt",
          "signature": "HList l-\u003eMaybe e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccursOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HOccurs",
          "name": "hOccursOpt'",
          "package": "HList",
          "signature": "HList l -\u003e Maybe e",
          "source": "src/Data-HList-HOccurs.html#hOccursOpt%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HOccurs",
          "module": "Data.HList.HOccurs",
          "name": "hOccursOpt'",
          "normalized": "HList a-\u003eMaybe b",
          "package": "HList",
          "partial": "Occurs Opt'",
          "signature": "HList l-\u003eMaybe e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HOccurs.html#v:hOccursOpt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eType-indexed operations on typeful heterogeneous lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.HTypeIndexed",
          "name": "HTypeIndexed",
          "package": "HList",
          "source": "src/Data-HList-HTypeIndexed.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Type-indexed operations on typeful heterogeneous lists",
          "hierarchy": "Data HList HTypeIndexed",
          "module": "Data.HList.HTypeIndexed",
          "name": "HTypeIndexed",
          "package": "HList",
          "partial": "HType Indexed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HTypeIndexed",
          "name": "HDeleteManyCase",
          "package": "HList",
          "source": "src/Data-HList-HTypeIndexed.html#HDeleteManyCase",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HTypeIndexed",
          "module": "Data.HList.HTypeIndexed",
          "name": "HDeleteManyCase",
          "package": "HList",
          "partial": "HDelete Many Case",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#t:HDeleteManyCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper class\n\u003c/p\u003e",
          "module": "Data.HList.HTypeIndexed",
          "name": "HType2HNatCase",
          "package": "HList",
          "source": "src/Data-HList-HTypeIndexed.html#HType2HNatCase",
          "type": "class"
        },
        "index": {
          "description": "Helper class",
          "hierarchy": "Data HList HTypeIndexed",
          "module": "Data.HList.HTypeIndexed",
          "name": "HType2HNatCase",
          "package": "HList",
          "partial": "HType HNat Case",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#t:HType2HNatCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HTypeIndexed",
          "name": "hDeleteAt",
          "package": "HList",
          "signature": "Proxy e -\u003e HList l -\u003e HList (HDeleteAtHNatR n l)",
          "source": "src/Data-HList-HTypeIndexed.html#hDeleteAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HTypeIndexed",
          "module": "Data.HList.HTypeIndexed",
          "name": "hDeleteAt",
          "normalized": "Proxy a-\u003eHList b-\u003eHList(HDeleteAtHNatR c b)",
          "package": "HList",
          "partial": "Delete At",
          "signature": "Proxy e-\u003eHList l-\u003eHList(HDeleteAtHNatR n l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hDeleteAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HTypeIndexed",
          "name": "hDeleteManyCase",
          "package": "HList",
          "signature": "Proxy b -\u003e Proxy e1 -\u003e e -\u003e HList l -\u003e HList l1",
          "source": "src/Data-HList-HTypeIndexed.html#hDeleteManyCase",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HTypeIndexed",
          "module": "Data.HList.HTypeIndexed",
          "name": "hDeleteManyCase",
          "normalized": "Proxy a-\u003eProxy b-\u003eb-\u003eHList c-\u003eHList c",
          "package": "HList",
          "partial": "Delete Many Case",
          "signature": "Proxy b-\u003eProxy e-\u003ee-\u003eHList l-\u003eHList l",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hDeleteManyCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HTypeIndexed",
          "name": "hProjectBy",
          "package": "HList",
          "signature": "Proxy ps -\u003e HList l -\u003e HList ps",
          "source": "src/Data-HList-HTypeIndexed.html#hProjectBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HTypeIndexed",
          "module": "Data.HList.HTypeIndexed",
          "name": "hProjectBy",
          "normalized": "Proxy a-\u003eHList b-\u003eHList a",
          "package": "HList",
          "partial": "Project By",
          "signature": "Proxy ps-\u003eHList l-\u003eHList ps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hProjectBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HTypeIndexed",
          "name": "hSplitBy",
          "package": "HList",
          "signature": "Proxy ps -\u003e HList l -\u003e (HList (HProjectByHNatsR ns l), HList (HProjectAwayByHNatsR ns l))",
          "source": "src/Data-HList-HTypeIndexed.html#hSplitBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HTypeIndexed",
          "module": "Data.HList.HTypeIndexed",
          "name": "hSplitBy",
          "normalized": "Proxy a-\u003eHList b-\u003e(HList(HProjectByHNatsR c b),HList(HProjectAwayByHNatsR c b))",
          "package": "HList",
          "partial": "Split By",
          "signature": "Proxy ps-\u003eHList l-\u003e(HList(HProjectByHNatsR ns l),HList(HProjectAwayByHNatsR ns l))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hSplitBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HTypeIndexed",
          "name": "hType2HNat",
          "package": "HList",
          "signature": "Proxy e -\u003e l -\u003e Proxy n",
          "source": "src/Data-HList-HTypeIndexed.html#hType2HNat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HTypeIndexed",
          "module": "Data.HList.HTypeIndexed",
          "name": "hType2HNat",
          "normalized": "Proxy a-\u003eb-\u003eProxy c",
          "package": "HList",
          "partial": "Type HNat",
          "signature": "Proxy e-\u003el-\u003eProxy n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hType2HNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HTypeIndexed",
          "name": "hTypes2HNats",
          "package": "HList",
          "signature": "[HNat])",
          "source": "src/Data-HList-HTypeIndexed.html#hTypes2HNats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HTypeIndexed",
          "module": "Data.HList.HTypeIndexed",
          "name": "hTypes2HNats",
          "normalized": "[HNat])",
          "package": "HList",
          "partial": "Types HNats",
          "signature": "[HNat])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hTypes2HNats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HTypeIndexed",
          "name": "hUpdateAt",
          "package": "HList",
          "signature": "e -\u003e HList l -\u003e HList (HUpdateAtHNatR n e l)",
          "source": "src/Data-HList-HTypeIndexed.html#hUpdateAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HTypeIndexed",
          "module": "Data.HList.HTypeIndexed",
          "name": "hUpdateAt",
          "normalized": "a-\u003eHList b-\u003eHList(HUpdateAtHNatR c a b)",
          "package": "HList",
          "partial": "Update At",
          "signature": "e-\u003eHList l-\u003eHList(HUpdateAtHNatR n e l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HTypeIndexed.html#v:hUpdateAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eZipping and unzipping for (conceptually) lists of pairs.\n\u003c/p\u003e\u003cp\u003eProvides two alternative implementations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.HZip",
          "name": "HZip",
          "package": "HList",
          "source": "src/Data-HList-HZip.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Zipping and unzipping for conceptually lists of pairs Provides two alternative implementations",
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "HZip",
          "package": "HList",
          "partial": "HZip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HZip",
          "name": "Fst",
          "package": "HList",
          "signature": "Fst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "Fst",
          "package": "HList",
          "partial": "Fst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:Fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHZipR in the superclass constraint doesn't hurt, but it doesn't seem to be\n necessary\n\u003c/p\u003e",
          "module": "Data.HList.HZip",
          "name": "HUnZip",
          "package": "HList",
          "source": "src/Data-HList-HZip.html#HUnZip",
          "type": "class"
        },
        "index": {
          "description": "HZipR in the superclass constraint doesn hurt but it doesn seem to be necessary",
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "HUnZip",
          "package": "HList",
          "partial": "HUn Zip",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:HUnZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HZip",
          "name": "HZip",
          "package": "HList",
          "source": "src/Data-HList-HZip.html#HZip",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "HZip",
          "package": "HList",
          "partial": "HZip",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:HZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003eHZip\u003c/a\u003e\u003c/code\u003e but HCons the elements of x onto y. This might be doable as\n a \u003ccode\u003ehMap f (hZip x y)\u003c/code\u003e, but that one doesn't propagate types as easily it\n seems.\n\u003c/p\u003e",
          "module": "Data.HList.HZip",
          "name": "HZip3",
          "package": "HList",
          "source": "src/Data-HList-HZip.html#HZip3",
          "type": "class"
        },
        "index": {
          "description": "same as HZip but HCons the elements of onto This might be doable as hMap hZip but that one doesn propagate types as easily it seems",
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "HZip3",
          "package": "HList",
          "partial": "HZip",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:HZip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HZip",
          "name": "HZipF",
          "package": "HList",
          "source": "src/Data-HList-HZip.html#HZipF",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "HZipF",
          "package": "HList",
          "partial": "HZip",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:HZipF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculates something like:\n\u003c/p\u003e\u003cpre\u003e [a] -\u003e [b] -\u003e [(a,b)]\n\u003c/pre\u003e\u003cp\u003ecan be used to give another type for \u003ccode\u003e\u003ca\u003ehZip2\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e hZip2 :: HList a -\u003e HList b -\u003e HList (HZipR a b)\n\u003c/pre\u003e",
          "module": "Data.HList.HZip",
          "name": "HZipR",
          "package": "HList",
          "signature": "HZipR",
          "type": "function"
        },
        "index": {
          "description": "calculates something like can be used to give another type for hZip2 hZip2 HList HList HList HZipR",
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "HZipR",
          "package": "HList",
          "partial": "HZip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:HZipR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HZip",
          "name": "Snd",
          "package": "HList",
          "signature": "Snd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "Snd",
          "package": "HList",
          "partial": "Snd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#t:Snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HZip",
          "name": "HZipF",
          "package": "HList",
          "signature": "HZipF",
          "source": "src/Data-HList-HZip.html#HZipF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "HZipF",
          "package": "HList",
          "partial": "HZip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:HZipF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis transpose requires equal-length HLists inside a HList:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.HList.HListPrelude\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet ex = (1 .*. 2 .*. HNil) .*. ('a' .*. 'b' .*. HNil) .*. ( 3 .*. 5 .*. HNil) .*. HNil\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eThe original list:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eex\n\u003c/code\u003e\u003c/strong\u003eH[H[1, 2], H['a', 'b'], H[3, 5]]\n\u003c/pre\u003e\u003cp\u003eAnd transposed:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehTranspose ex\n\u003c/code\u003e\u003c/strong\u003eH[H[1, 'a', 3], H[2, 'b', 5]]\n\u003c/pre\u003e",
          "module": "Data.HList.HZip",
          "name": "hTranspose",
          "package": "HList",
          "signature": "HList (: * (HList a) l) -\u003e HList c",
          "source": "src/Data-HList-HZip.html#hTranspose",
          "type": "function"
        },
        "index": {
          "description": "this transpose requires equal-length HLists inside HList import Data.HList.HListPrelude let ex HNil HNil HNil HNil The original list ex And transposed hTranspose ex",
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "hTranspose",
          "normalized": "HList(*(HList a)b)-\u003eHList c",
          "package": "HList",
          "partial": "Transpose",
          "signature": "HList(*(HList a)l)-\u003eHList c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:hTranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HZip",
          "name": "hUnzip",
          "package": "HList",
          "signature": "HList l -\u003e (HList x, HList y)",
          "source": "src/Data-HList-HZip.html#hUnzip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "hUnzip",
          "normalized": "HList a-\u003e(HList b,HList c)",
          "package": "HList",
          "partial": "Unzip",
          "signature": "HList l-\u003e(HList x,HList y)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:hUnzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HZip",
          "name": "hUnzip2",
          "package": "HList",
          "signature": "HList z -\u003e (HList (MapFst z), HList (MapSnd z))",
          "source": "src/Data-HList-HZip.html#hUnzip2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "hUnzip2",
          "normalized": "HList a-\u003e(HList(MapFst a),HList(MapSnd a))",
          "package": "HList",
          "partial": "Unzip",
          "signature": "HList z-\u003e(HList(MapFst z),HList(MapSnd z))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:hUnzip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HZip",
          "name": "hZip",
          "package": "HList",
          "signature": "HList x -\u003e HList y -\u003e HList l",
          "source": "src/Data-HList-HZip.html#hZip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "hZip",
          "normalized": "HList a-\u003eHList b-\u003eHList c",
          "package": "HList",
          "partial": "Zip",
          "signature": "HList x-\u003eHList y-\u003eHList l",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:hZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HZip",
          "name": "hZip2",
          "package": "HList",
          "signature": "HList (MapFst z) -\u003e HList (MapSnd z) -\u003e HList z",
          "source": "src/Data-HList-HZip.html#hZip2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "hZip2",
          "normalized": "HList(MapFst a)-\u003eHList(MapSnd a)-\u003eHList a",
          "package": "HList",
          "partial": "Zip",
          "signature": "HList(MapFst z)-\u003eHList(MapSnd z)-\u003eHList z",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:hZip2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.HZip",
          "name": "hZip3",
          "package": "HList",
          "signature": "HList x -\u003e HList y -\u003e HList l",
          "source": "src/Data-HList-HZip.html#hZip3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList HZip",
          "module": "Data.HList.HZip",
          "name": "hZip3",
          "normalized": "HList a-\u003eHList b-\u003eHList c",
          "package": "HList",
          "partial": "Zip",
          "signature": "HList x-\u003eHList y-\u003eHList l",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-HZip.html#v:hZip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ekeyword functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.Keyword",
          "name": "Keyword",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html",
          "type": "module"
        },
        "index": {
          "description": "keyword functions",
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "Keyword",
          "package": "HList",
          "partial": "Keyword",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe datatype Arg below is to maintain the state of keyword\naccumulation: which keywords we need, and which keyword and values we\nhave already got.\narg_types is the phantom HList of keywords that are yet to be satisfied.\narg_values is the \u003ccode\u003eHList (kw .*. kw_value .*. etc)\u003c/code\u003e\nof already found keywords and their values.\n\u003c/p\u003e",
          "module": "Data.HList.Keyword",
          "name": "Arg",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#Arg",
          "type": "newtype"
        },
        "index": {
          "description": "The datatype Arg below is to maintain the state of keyword accumulation which keywords we need and which keyword and values we have already got arg types is the phantom HList of keywords that are yet to be satisfied arg values is the HList kw kw value etc of already found keywords and their values",
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "Arg",
          "package": "HList",
          "partial": "Arg",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "ErrReqdArgNotFound",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#ErrReqdArgNotFound",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "ErrReqdArgNotFound",
          "package": "HList",
          "partial": "Err Reqd Arg Not Found",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:ErrReqdArgNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "ErrUnexpectedKW",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#ErrUnexpectedKW",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "ErrUnexpectedKW",
          "package": "HList",
          "partial": "Err Unexpected KW",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:ErrUnexpectedKW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete e from l to yield l' The element e must occur in l\n\u003c/p\u003e",
          "module": "Data.HList.Keyword",
          "name": "HDelete",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#HDelete",
          "type": "class"
        },
        "index": {
          "description": "Delete from to yield The element must occur in",
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "HDelete",
          "package": "HList",
          "partial": "HDelete",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:HDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "HDelete'",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#HDelete%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "HDelete'",
          "package": "HList",
          "partial": "HDelete'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:HDelete-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll our keywords must be registered\n\u003c/p\u003e",
          "module": "Data.HList.Keyword",
          "name": "IsKeyFN",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#IsKeyFN",
          "type": "class"
        },
        "index": {
          "description": "All our keywords must be registered",
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "IsKeyFN",
          "package": "HList",
          "partial": "Is Key FN",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:IsKeyFN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "K",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#K",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "K",
          "package": "HList",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main class: collect and apply the keyword arguments\n\u003c/p\u003e",
          "module": "Data.HList.Keyword",
          "name": "KW",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#KW",
          "type": "class"
        },
        "index": {
          "description": "The main class collect and apply the keyword arguments",
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "KW",
          "package": "HList",
          "partial": "KW",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "KW'",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#KW%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "KW'",
          "package": "HList",
          "partial": "KW'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KW-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the real argument to the Arg structure, and continue\n\u003c/p\u003e",
          "module": "Data.HList.Keyword",
          "name": "KWAcc",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#KWAcc",
          "type": "class"
        },
        "index": {
          "description": "Add the real argument to the Arg structure and continue",
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "KWAcc",
          "package": "HList",
          "partial": "KWAcc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KWAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "KWApply",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#KWApply",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "KWApply",
          "package": "HList",
          "partial": "KWApply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KWApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "KWApply'",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#KWApply%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "KWApply'",
          "package": "HList",
          "partial": "KWApply'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KWApply-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the needed arguments from arg_def to arg_values and continue\nwith kwapply.\n\u003c/p\u003e\u003cp\u003eThat is, we try to satisfy the missing arguments from the defaults.\nIt will be a type error if some required arguments are missing \n\u003c/p\u003e",
          "module": "Data.HList.Keyword",
          "name": "KWMerge",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#KWMerge",
          "type": "class"
        },
        "index": {
          "description": "Add the needed arguments from arg def to arg values and continue with kwapply That is we try to satisfy the missing arguments from the defaults It will be type error if some required arguments are missing",
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "KWMerge",
          "package": "HList",
          "partial": "KWMerge",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KWMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "KWMerge'",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#KWMerge%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "KWMerge'",
          "package": "HList",
          "partial": "KWMerge'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KWMerge-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "KWMerge''",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#KWMerge%27%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "KWMerge''",
          "package": "HList",
          "partial": "KWMerge''",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:KWMerge-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ekw\u003c/code\u003e takes a \u003ccode\u003e\u003ca\u003eHList\u003c/a\u003e\u003c/code\u003e whose first element is a function, and the rest\nof the elements are default values.\nA useful trick is to have a final argument \u003ccode\u003e()\u003c/code\u003e which is not\neaten up by a label (A only takes 1 argument). That way when you supply\nthe () it knows there are no more arguments (?).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edata A = A\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einstance IsKeyFN (A -\u003e a -\u003e b) True\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f A a () = a + 1\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f' = f .*. A .*. 1 .*. HNil\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' A 0 ()\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekw f' ()\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e",
          "module": "Data.HList.Keyword",
          "name": "Kw",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#Kw",
          "type": "class"
        },
        "index": {
          "description": "kw takes HList whose first element is function and the rest of the elements are default values useful trick is to have final argument which is not eaten up by label only takes argument That way when you supply the it knows there are no more arguments data instance IsKeyFN True let let HNil kw kw",
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "Kw",
          "package": "HList",
          "partial": "Kw",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:Kw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflection on a function:\nGiven a function, return the type list of its keywords\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t reflect_fk (undefined::Size-\u003eInt-\u003eColor-\u003eCommonColor-\u003eString)\n\u003c/code\u003e\u003c/strong\u003ereflect_fk (undefined::Size-\u003eInt-\u003eColor-\u003eCommonColor-\u003eString)\n  :: Arg [*] ((':) * Size ((':) * Color ('[] *))) ('[] *)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t reflect_fk (undefined::Size-\u003eInt-\u003e()-\u003eInt)\n\u003c/code\u003e\u003c/strong\u003ereflect_fk (undefined::Size-\u003eInt-\u003e()-\u003eInt)\n  :: Arg [*] ((':) * Size ('[] *)) ('[] *)\n\u003c/pre\u003e",
          "module": "Data.HList.Keyword",
          "name": "ReflectFK",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#ReflectFK",
          "type": "class"
        },
        "index": {
          "description": "Reflection on function Given function return the type list of its keywords reflect fk undefined Size Int Color CommonColor String reflect fk undefined Size Int Color CommonColor String Arg Size Color reflect fk undefined Size Int Int reflect fk undefined Size Int Int Arg Size",
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "ReflectFK",
          "package": "HList",
          "partial": "Reflect FK",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:ReflectFK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "ReflectFK'",
          "package": "HList",
          "source": "src/Data-HList-Keyword.html#ReflectFK%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "ReflectFK'",
          "package": "HList",
          "partial": "Reflect FK'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#t:ReflectFK-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "Arg",
          "package": "HList",
          "signature": "Arg (HList arg_values)",
          "source": "src/Data-HList-Keyword.html#Arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "Arg",
          "package": "HList",
          "partial": "Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "K",
          "package": "HList",
          "signature": "K",
          "source": "src/Data-HList-Keyword.html#K",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "K",
          "package": "HList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "kw",
          "package": "HList",
          "signature": "HList (fn : arg_def) -\u003e r",
          "source": "src/Data-HList-Keyword.html#kw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "kw",
          "normalized": "HList(a b)-\u003ec",
          "package": "HList",
          "signature": "HList(fn arg_def)-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "kw'",
          "package": "HList",
          "signature": "Proxy rflag -\u003e f -\u003e arg_desc -\u003e HList arg_def -\u003e r",
          "source": "src/Data-HList-Keyword.html#kw%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "kw'",
          "normalized": "Proxy a-\u003eb-\u003ec-\u003eHList d-\u003ee",
          "package": "HList",
          "signature": "Proxy rflag-\u003ef-\u003earg_desc-\u003eHList arg_def-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kw-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "kwaccum",
          "package": "HList",
          "signature": "arg_desc -\u003e kw -\u003e a -\u003e f -\u003e HList arg_def -\u003e r",
          "source": "src/Data-HList-Keyword.html#kwaccum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "kwaccum",
          "normalized": "a-\u003eb-\u003ec-\u003ed-\u003eHList e-\u003ef",
          "package": "HList",
          "signature": "arg_desc-\u003ekw-\u003ea-\u003ef-\u003eHList arg_def-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwaccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "kwapply",
          "package": "HList",
          "signature": "f -\u003e HList arg_values -\u003e r",
          "source": "src/Data-HList-Keyword.html#kwapply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "kwapply",
          "normalized": "a-\u003eHList b-\u003ec",
          "package": "HList",
          "signature": "f-\u003eHList arg_values-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwapply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "kwapply'",
          "package": "HList",
          "signature": "Proxy flag -\u003e f -\u003e HList arg_values -\u003e r",
          "source": "src/Data-HList-Keyword.html#kwapply%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "kwapply'",
          "normalized": "Proxy a-\u003eb-\u003eHList c-\u003ed",
          "package": "HList",
          "signature": "Proxy flag-\u003ef-\u003eHList arg_values-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwapply-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "kwdo",
          "package": "HList",
          "signature": "f -\u003e arg_desc -\u003e HList arg_def -\u003e r",
          "source": "src/Data-HList-Keyword.html#kwdo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "kwdo",
          "normalized": "a-\u003eb-\u003eHList c-\u003ed",
          "package": "HList",
          "signature": "f-\u003earg_desc-\u003eHList arg_def-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwdo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "kwmerge",
          "package": "HList",
          "signature": "Arg arg_needed arg_values -\u003e HList arg_def -\u003e f -\u003e r",
          "source": "src/Data-HList-Keyword.html#kwmerge",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "kwmerge",
          "normalized": "Arg a b-\u003eHList c-\u003ed-\u003ee",
          "package": "HList",
          "signature": "Arg arg_needed arg_values-\u003eHList arg_def-\u003ef-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwmerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "kwmerge'",
          "package": "HList",
          "signature": "kw -\u003e HList list -\u003e Arg atail arg_values -\u003e HList arg_def -\u003e f -\u003e r",
          "source": "src/Data-HList-Keyword.html#kwmerge%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "kwmerge'",
          "normalized": "a-\u003eHList b-\u003eArg c d-\u003eHList e-\u003ef-\u003eg",
          "package": "HList",
          "signature": "kw-\u003eHList list-\u003eArg atail arg_values-\u003eHList arg_def-\u003ef-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwmerge-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Keyword",
          "name": "kwmerge''",
          "package": "HList",
          "signature": "Proxy flag -\u003e kw -\u003e HList list -\u003e Arg atail arg_values -\u003e HList arg_def -\u003e f -\u003e r",
          "source": "src/Data-HList-Keyword.html#kwmerge%27%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "kwmerge''",
          "normalized": "Proxy a-\u003eb-\u003eHList c-\u003eArg d e-\u003eHList f-\u003eg-\u003eh",
          "package": "HList",
          "signature": "Proxy flag-\u003ekw-\u003eHList list-\u003eArg atail arg_values-\u003eHList arg_def-\u003ef-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:kwmerge-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethat reflects on a user-supplied function. It converts the *type* of a\nuser function to a collection of keywords required by that\nfunction. This and the previous contraptions may be used to define an\n\u003ccode\u003eextended\u003c/code\u003e version of some user function that takes more arguments --\nwithout the need to enumerate all arguments of the original\nfunction. We thus infringe on the area of object and module systems.\n\u003c/p\u003e\u003cp\u003eThe rest of the implementation is just to convert `kw fn defaults'\ninto the application of kwapply.\n\u003c/p\u003e\u003cp\u003eAnother key contraption is\n\u003c/p\u003e",
          "module": "Data.HList.Keyword",
          "name": "reflect_fk",
          "package": "HList",
          "signature": "fn -\u003e Arg kws `[]`",
          "source": "src/Data-HList-Keyword.html#reflect_fk",
          "type": "function"
        },
        "index": {
          "description": "that reflects on user-supplied function It converts the type of user function to collection of keywords required by that function This and the previous contraptions may be used to define an extended version of some user function that takes more arguments without the need to enumerate all arguments of the original function We thus infringe on the area of object and module systems The rest of the implementation is just to convert kw fn defaults into the application of kwapply Another key contraption is",
          "hierarchy": "Data HList Keyword",
          "module": "Data.HList.Keyword",
          "name": "reflect_fk",
          "normalized": "a-\u003eArg b[]",
          "package": "HList",
          "signature": "fn-\u003eArg kws[]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Keyword.html#v:reflect_fk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004-2006, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eA model of labels as needed for extensible records. As before,\n   all the information about labels is recorded in their type, so\n   the labels of records may be purely phantom. In general,\n   Labels are exclusively type-level entities and have no run-time\n   representation.\n\u003c/p\u003e\u003cp\u003eRecord labels are triplets of type-level naturals, namespace,\n   and description. The namespace part helps avoid confusions between\n   labels from different Haskell modules. The description is\n   an arbitrary nullary type constructor.\n\u003c/p\u003e\u003cp\u003eFor the sake of printing, the description is required to be the\n   instance of Show. One must make sure that the show functions does\n   not examine the value, as descr is purely phantom. Here's an\n   example of the good Label description:\n\u003c/p\u003e\u003cpre\u003e     data MyLabelDescr; instance Show MyLabelDescr where show _ = \"descr\"\n\u003c/pre\u003e\u003cp\u003ewhich are automated by makeLabels3 from \u003ca\u003eData.HList.MakeLabel\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis model even allows the labels in a record to belong to different\n   namespaces. To this end, the model employs the predicate for type\n   equality.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.Label3",
          "name": "Label3",
          "package": "HList",
          "source": "src/Data-HList-Label3.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke model of labels as needed for extensible records As before all the information about labels is recorded in their type so the labels of records may be purely phantom In general Labels are exclusively type-level entities and have no run-time representation Record labels are triplets of type-level naturals namespace and description The namespace part helps avoid confusions between labels from different Haskell modules The description is an arbitrary nullary type constructor For the sake of printing the description is required to be the instance of Show One must make sure that the show functions does not examine the value as descr is purely phantom Here an example of the good Label description data MyLabelDescr instance Show MyLabelDescr where show descr which are automated by makeLabels3 from Data.HList.MakeLabel This model even allows the labels in record to belong to different namespaces To this end the model employs the predicate for type equality",
          "hierarchy": "Data HList Label3",
          "module": "Data.HList.Label3",
          "name": "Label3",
          "package": "HList",
          "partial": "Label",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Label3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Label3",
          "name": "Lbl",
          "package": "HList",
          "source": "src/Data-HList-Label3.html#Lbl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList Label3",
          "module": "Data.HList.Label3",
          "name": "Lbl",
          "package": "HList",
          "partial": "Lbl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Label3.html#t:Lbl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the first label\n\u003c/p\u003e",
          "module": "Data.HList.Label3",
          "name": "firstLabel",
          "package": "HList",
          "signature": "ns -\u003e desc -\u003e Label (Lbl HZero ns desc)",
          "source": "src/Data-HList-Label3.html#firstLabel",
          "type": "function"
        },
        "index": {
          "description": "Construct the first label",
          "hierarchy": "Data HList Label3",
          "module": "Data.HList.Label3",
          "name": "firstLabel",
          "normalized": "a-\u003eb-\u003eLabel(Lbl HZero a b)",
          "package": "HList",
          "partial": "Label",
          "signature": "ns-\u003edesc-\u003eLabel(Lbl HZero ns desc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Label3.html#v:firstLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the next label\n\u003c/p\u003e",
          "module": "Data.HList.Label3",
          "name": "nextLabel",
          "package": "HList",
          "signature": "Label (Lbl x ns desc) -\u003e desc' -\u003e Label (Lbl (HSucc x) ns desc')",
          "source": "src/Data-HList-Label3.html#nextLabel",
          "type": "function"
        },
        "index": {
          "description": "Construct the next label",
          "hierarchy": "Data HList Label3",
          "module": "Data.HList.Label3",
          "name": "nextLabel",
          "normalized": "Label(Lbl a b c)-\u003ed-\u003eLabel(Lbl(HSucc a)b d)",
          "package": "HList",
          "partial": "Label",
          "signature": "Label(Lbl x ns desc)-\u003edesc'-\u003eLabel(Lbl(HSucc x)ns desc')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Label3.html#v:nextLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eYet another model of labels.\n\u003c/p\u003e\u003cp\u003eLabels are promoted Strings or Integers \u003ca\u003eGHC.TypeLits\u003c/a\u003e inside the\n   \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e. Needs ghc7.6 or higher.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.HList.CommonMain\u003c/a\u003e for an example.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.Label6",
          "name": "Label6",
          "package": "HList",
          "source": "src/Data-HList-Label6.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Yet another model of labels Labels are promoted Strings or Integers GHC.TypeLits inside the Label Needs ghc7.6 or higher See Data.HList.CommonMain for an example",
          "hierarchy": "Data HList Label6",
          "module": "Data.HList.Label6",
          "name": "Label6",
          "package": "HList",
          "partial": "Label",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Label6.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple problem is being solved here, but unfortunately it\nis a bit involved. The idea is to use the same haskell identifier \nfor a lens and for other purposes. In other words, get the same\nbehavior as:\n\u003c/p\u003e\u003cpre\u003e x = hLens (Label :: Label \"x\")\n r ^. x\n\u003c/pre\u003e\u003cp\u003eWhile still being able to extract the symbol \"x\" from x, so that things\nlike \u003ccode\u003ex .=. 123\u003c/code\u003e could be acceptable. In this case we don't overload \u003ccode\u003e\u003ca\u003e.=.\u003c/a\u003e\u003c/code\u003e,\nso instead you have to write \u003ccode\u003ex .==. 123\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eElaboration of some ideas from edwardk.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.Labelable",
          "name": "Labelable",
          "package": "HList",
          "source": "src/Data-HList-Labelable.html",
          "type": "module"
        },
        "index": {
          "description": "simple problem is being solved here but unfortunately it is bit involved The idea is to use the same haskell identifier for lens and for other purposes In other words get the same behavior as hLens Label Label While still being able to extract the symbol from so that things like could be acceptable In this case we don overload so instead you have to write Elaboration of some ideas from edwardk",
          "hierarchy": "Data HList Labelable",
          "module": "Data.HList.Labelable",
          "name": "Labelable",
          "package": "HList",
          "partial": "Labelable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity functor and monad.\n\u003c/p\u003e",
          "module": "Data.HList.Labelable",
          "name": "Identity",
          "package": "HList",
          "type": "data"
        },
        "index": {
          "description": "Identity functor and monad",
          "hierarchy": "Data HList Labelable",
          "module": "Data.HList.Labelable",
          "name": "Identity",
          "package": "HList",
          "partial": "Identity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#t:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ef s t a b\u003c/code\u003e type parameters are the same as those that make\n\u003ca\u003eControl.Lens\u003c/a\u003e work.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003en\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is the index in the HList at which the value will be found\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003el\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is the label for the field (tends to be \u003ccode\u003e\u003ca\u003eSymbol\u003c/a\u003e\u003c/code\u003e)\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ep\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e is \u003ccode\u003e-\u003e\u003c/code\u003e when the result is used as a lens, or \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e when used\n      as an argument to \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Data.HList.Labelable",
          "name": "Labelable",
          "package": "HList",
          "source": "src/Data-HList-Labelable.html#Labelable",
          "type": "class"
        },
        "index": {
          "description": "type parameters are the same as those that make Control.Lens work is the index in the HList at which the value will be found is the label for the field tends to be Symbol is when the result is used as lens or Labeled when used as an argument to",
          "hierarchy": "Data HList Labelable",
          "module": "Data.HList.Labelable",
          "name": "Labelable",
          "package": "HList",
          "partial": "Labelable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#t:Labelable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Labelable",
          "name": "Labeled",
          "package": "HList",
          "source": "src/Data-HList-Labelable.html#Labeled",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList Labelable",
          "module": "Data.HList.Labelable",
          "name": "Labeled",
          "package": "HList",
          "partial": "Labeled",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#t:Labeled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextracts the type that is actually the label in \u003ccode\u003ea\u003c/code\u003e and puts it in \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.Labelable",
          "name": "ToSym",
          "package": "HList",
          "source": "src/Data-HList-Labelable.html#ToSym",
          "type": "class"
        },
        "index": {
          "description": "extracts the type that is actually the label in and puts it in",
          "hierarchy": "Data HList Labelable",
          "module": "Data.HList.Labelable",
          "name": "ToSym",
          "package": "HList",
          "partial": "To Sym",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#t:ToSym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodification of \u003ccode\u003e\u003ca\u003e.=.\u003c/a\u003e\u003c/code\u003e which works with the labels from this module,\n and those from \u003ca\u003eData.HList.Label6\u003c/a\u003e. Note that this is not strictly a\n generalization of \u003ccode\u003e\u003ca\u003e.=.\u003c/a\u003e\u003c/code\u003e, since it does not work with labels like\n \u003ca\u003eData.HList.Label3\u003c/a\u003e which have the wrong kind.\n\u003c/p\u003e",
          "module": "Data.HList.Labelable",
          "name": "(.==.)",
          "package": "HList",
          "signature": "t -\u003e v -\u003e Tagged Symbol l v",
          "source": "src/Data-HList-Labelable.html#.%3D%3D.",
          "type": "function"
        },
        "index": {
          "description": "modification of which works with the labels from this module and those from Data.HList.Label6 Note that this is not strictly generalization of since it does not work with labels like Data.HList.Label3 which have the wrong kind",
          "hierarchy": "Data HList Labelable",
          "module": "Data.HList.Labelable",
          "name": "(.==.) .==.",
          "normalized": "a-\u003eb-\u003eTagged Symbol c b",
          "package": "HList",
          "signature": "t-\u003ev-\u003eTagged Symbol l v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#v:.-61--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Labelable",
          "name": "Labeled",
          "package": "HList",
          "signature": "Labeled",
          "source": "src/Data-HList-Labelable.html#Labeled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Labelable",
          "module": "Data.HList.Labelable",
          "name": "Labeled",
          "package": "HList",
          "partial": "Labeled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#v:Labeled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Labelable",
          "name": "hLens'",
          "package": "HList",
          "signature": "Label l -\u003e p (a -\u003e f b) (Record s -\u003e f (Record t))",
          "source": "src/Data-HList-Labelable.html#hLens%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Labelable",
          "module": "Data.HList.Labelable",
          "name": "hLens'",
          "normalized": "Label a-\u003eb(c-\u003ed e)(Record f-\u003ed(Record g))",
          "package": "HList",
          "partial": "Lens'",
          "signature": "Label l-\u003ep(a-\u003ef b)(Record s-\u003ef(Record t))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#v:hLens-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emakeLabelable \"x y z\"\u003c/code\u003e will generate haskell identifiers that work with \u003ccode\u003e\u003ca\u003e.==.\u003c/a\u003e\u003c/code\u003e and\nare also lenses.\n\u003c/p\u003e\u003cpre\u003e x = hLens' (Label :: Label \"x\")\n y = hLens' (Label :: Label \"y\")\n z = hLens' (Label :: Label \"z\")\n\u003c/pre\u003e",
          "module": "Data.HList.Labelable",
          "name": "makeLabelable",
          "package": "HList",
          "signature": "String -\u003e Q [Dec]",
          "source": "src/Data-HList-Labelable.html#makeLabelable",
          "type": "function"
        },
        "index": {
          "description": "makeLabelable will generate haskell identifiers that work with and are also lenses hLens Label Label hLens Label Label hLens Label Label",
          "hierarchy": "Data HList Labelable",
          "module": "Data.HList.Labelable",
          "name": "makeLabelable",
          "normalized": "String-\u003eQ[Dec]",
          "package": "HList",
          "partial": "Labelable",
          "signature": "String-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#v:makeLabelable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Labelable",
          "name": "toLabel",
          "package": "HList",
          "signature": "Symbol)",
          "source": "src/Data-HList-Labelable.html#toLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Labelable",
          "module": "Data.HList.Labelable",
          "name": "toLabel",
          "package": "HList",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Labelable.html#v:toLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.MakeLabels",
          "name": "MakeLabels",
          "package": "HList",
          "source": "src/Data-HList-MakeLabels.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data HList MakeLabels",
          "module": "Data.HList.MakeLabels",
          "name": "MakeLabels",
          "package": "HList",
          "partial": "Make Labels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-MakeLabels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabels like \u003ca\u003eData.HList.Label4\u003c/a\u003e used to provide (only no Typeable).\n\u003c/p\u003e\u003cp\u003eThe following TH declaration splice should be placed at top-level, before the\n created values are used. Enable \u003ccode\u003e-XTemplateHaskell\u003c/code\u003e too.\n\u003c/p\u003e\u003cpre\u003e  makeLabels [\"getX\",\"getY\",\"draw\",\"X\"]\n\u003c/pre\u003e\u003cp\u003eshould expand into the following declarations\n\u003c/p\u003e\u003cpre\u003e data LabelGetX\n data LabelGetY\n data LabelDraw\n data LabelX\n\u003c/pre\u003e\u003cpre\u003e getX = Label :: Label LabelGetX\n getY = Label :: Label LabelGetY\n draw = Label :: Label LabelDraw\n x    = Label :: Label LabelX\n\u003c/pre\u003e\u003cpre\u003e instance ShowLabel LabelGetX where showLabel = \\_ -\u003e \"getX\"\n instance ShowLabel LabelGetY where showLabel = \\_ -\u003e \"getY\"\n instance ShowLabel LabelDraw where showLabel = \\_ -\u003e \"draw\"\n\u003c/pre\u003e",
          "module": "Data.HList.MakeLabels",
          "name": "makeLabels",
          "package": "HList",
          "signature": "[String] -\u003e Q [Dec]",
          "source": "src/Data-HList-MakeLabels.html#makeLabels",
          "type": "function"
        },
        "index": {
          "description": "Labels like Data.HList.Label4 used to provide only no Typeable The following TH declaration splice should be placed at top-level before the created values are used Enable XTemplateHaskell too makeLabels getX getY draw should expand into the following declarations data LabelGetX data LabelGetY data LabelDraw data LabelX getX Label Label LabelGetX getY Label Label LabelGetY draw Label Label LabelDraw Label Label LabelX instance ShowLabel LabelGetX where showLabel getX instance ShowLabel LabelGetY where showLabel getY instance ShowLabel LabelDraw where showLabel draw",
          "hierarchy": "Data HList MakeLabels",
          "module": "Data.HList.MakeLabels",
          "name": "makeLabels",
          "normalized": "[String]-\u003eQ[Dec]",
          "package": "HList",
          "partial": "Labels",
          "signature": "[String]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-MakeLabels.html#v:makeLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor \u003ca\u003eData.HList.Label3\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.HList.MakeLabels",
          "name": "makeLabels3",
          "package": "HList",
          "signature": "String-\u003e [String]-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "for Data.HList.Label3",
          "hierarchy": "Data HList MakeLabels",
          "module": "Data.HList.MakeLabels",
          "name": "makeLabels3",
          "normalized": "String-\u003e[String]-\u003eQ[Dec]",
          "package": "HList",
          "partial": "Labels",
          "signature": "String-\u003e[String]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-MakeLabels.html#v:makeLabels3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor \u003ca\u003eData.HList.Label6\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.HList.MakeLabels",
          "name": "makeLabels6",
          "package": "HList",
          "signature": "[String] -\u003e Q [Dec]",
          "source": "src/Data-HList-MakeLabels.html#makeLabels6",
          "type": "function"
        },
        "index": {
          "description": "for Data.HList.Label6",
          "hierarchy": "Data HList MakeLabels",
          "module": "Data.HList.MakeLabels",
          "name": "makeLabels6",
          "normalized": "[String]-\u003eQ[Dec]",
          "package": "HList",
          "partial": "Labels",
          "signature": "[String]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-MakeLabels.html#v:makeLabels6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004-2006, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eExtensible records\n\u003c/p\u003e\u003cp\u003eThe three-ish models of labels that go with this module;\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.HList.Label3\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.HList.MakeLabels\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese used to work:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.HList.Label1\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.HList.Label2\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.HList.Label4\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.HList.Label5\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.HList.Record",
          "name": "Record",
          "package": "HList",
          "source": "src/Data-HList-Record.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Extensible records The three-ish models of labels that go with this module Data.HList.Label3 Data.HList.MakeLabels These used to work Data.HList.Label1 Data.HList.Label2 Data.HList.Label4 Data.HList.Label5",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "Record",
          "package": "HList",
          "partial": "Record",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropery of a proper label set for a record: no duplication of labels\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "DuplicatedLabel",
          "package": "HList",
          "source": "src/Data-HList-Record.html#DuplicatedLabel",
          "type": "data"
        },
        "index": {
          "description": "Propery of proper label set for record no duplication of labels",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "DuplicatedLabel",
          "package": "HList",
          "partial": "Duplicated Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:DuplicatedLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "ExtraField",
          "package": "HList",
          "source": "src/Data-HList-Record.html#ExtraField",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "ExtraField",
          "package": "HList",
          "partial": "Extra Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:ExtraField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "FieldNotFound",
          "package": "HList",
          "source": "src/Data-HList-Record.html#FieldNotFound",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "FieldNotFound",
          "package": "HList",
          "partial": "Field Not Found",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:FieldNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eInvariant\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003e r === rin `disjoint-union` rout\n labels rin === ls\n     where (rin,rout) = hProjectByLabels ls r\n\u003c/pre\u003e",
          "module": "Data.HList.Record",
          "name": "H2ProjectByLabels",
          "package": "HList",
          "source": "src/Data-HList-Record.html#H2ProjectByLabels",
          "type": "class"
        },
        "index": {
          "description": "Invariant rin disjoint-union rout labels rin ls where rin rout hProjectByLabels ls",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "H2ProjectByLabels",
          "package": "HList",
          "partial": "Project By Labels",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:H2ProjectByLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "H2ProjectByLabels'",
          "package": "HList",
          "source": "src/Data-HList-Record.html#H2ProjectByLabels%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "H2ProjectByLabels'",
          "package": "HList",
          "partial": "Project By Labels'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:H2ProjectByLabels-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelation between HLabelSet and HRLabelSet\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "HLabelSet",
          "package": "HList",
          "source": "src/Data-HList-Record.html#HLabelSet",
          "type": "class"
        },
        "index": {
          "description": "Relation between HLabelSet and HRLabelSet",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "HLabelSet",
          "package": "HList",
          "partial": "HLabel Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HLabelSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "HLabelSet'",
          "package": "HList",
          "source": "src/Data-HList-Record.html#HLabelSet%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "HLabelSet'",
          "package": "HList",
          "partial": "HLabel Set'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HLabelSet-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "HLeftUnion",
          "package": "HList",
          "source": "src/Data-HList-Record.html#HLeftUnion",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "HLeftUnion",
          "package": "HList",
          "partial": "HLeft Union",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HLeftUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "HLeftUnionBool",
          "package": "HList",
          "source": "src/Data-HList-Record.html#HLeftUnionBool",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "HLeftUnionBool",
          "package": "HList",
          "partial": "HLeft Union Bool",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HLeftUnionBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "HRLabelSet",
          "package": "HList",
          "source": "src/Data-HList-Record.html#HRLabelSet",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "HRLabelSet",
          "package": "HList",
          "partial": "HRLabel Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HRLabelSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "HRLabelSet'",
          "package": "HList",
          "source": "src/Data-HList-Record.html#HRLabelSet%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "HRLabelSet'",
          "package": "HList",
          "partial": "HRLabel Set'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HRLabelSet-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper class for \u003ccode\u003e\u003ca\u003ehRearrange\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "HRearrange",
          "package": "HList",
          "source": "src/Data-HList-Record.html#HRearrange",
          "type": "class"
        },
        "index": {
          "description": "Helper class for hRearrange",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "HRearrange",
          "package": "HList",
          "partial": "HRearrange",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HRearrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper class 2 for \u003ccode\u003e\u003ca\u003ehRearrange\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "HRearrange'",
          "package": "HList",
          "source": "src/Data-HList-Record.html#HRearrange%27",
          "type": "class"
        },
        "index": {
          "description": "Helper class for hRearrange",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "HRearrange'",
          "package": "HList",
          "partial": "HRearrange'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HRearrange-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a baseline implementation.\n We use a helper class, HasField, to abstract from the implementation.\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003e\u003ca\u003ehLookupByLabel\u003c/a\u003e\u003c/code\u003e is so frequent and important, we implement\n it separately, more efficiently. The algorithm is familiar assq, only\n the comparison operation is done at compile-time\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "HasField",
          "package": "HList",
          "source": "src/Data-HList-Record.html#HasField",
          "type": "class"
        },
        "index": {
          "description": "This is baseline implementation We use helper class HasField to abstract from the implementation Because hLookupByLabel is so frequent and important we implement it separately more efficiently The algorithm is familiar assq only the comparison operation is done at compile-time",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "HasField",
          "package": "HList",
          "partial": "Has Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HasField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "HasField'",
          "package": "HList",
          "source": "src/Data-HList-Record.html#HasField%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "HasField'",
          "package": "HList",
          "partial": "Has Field'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:HasField-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaking this ls::[*] and [k] breaks the MainGhcGeneric1.hs...\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "LabelsOf",
          "package": "HList",
          "signature": "LabelsOf",
          "type": "function"
        },
        "index": {
          "description": "Making this ls and breaks the MainGhcGeneric1.hs",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "LabelsOf",
          "package": "HList",
          "partial": "Labels Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:LabelsOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "Record",
          "package": "HList",
          "source": "src/Data-HList-Record.html#Record",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "Record",
          "package": "HList",
          "partial": "Record",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the (phantom) list of labels of the record.\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "RecordLabels",
          "package": "HList",
          "signature": "RecordLabels",
          "type": "function"
        },
        "index": {
          "description": "Construct the phantom list of labels of the record",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "RecordLabels",
          "package": "HList",
          "partial": "Record Labels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:RecordLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the HList of values of the record.\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "RecordValues",
          "package": "HList",
          "source": "src/Data-HList-Record.html#RecordValues",
          "type": "class"
        },
        "index": {
          "description": "Construct the HList of values of the record",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "RecordValues",
          "package": "HList",
          "partial": "Record Values",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:RecordValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "ShowComponents",
          "package": "HList",
          "source": "src/Data-HList-Record.html#ShowComponents",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "ShowComponents",
          "package": "HList",
          "partial": "Show Components",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:ShowComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "ShowLabel",
          "package": "HList",
          "source": "src/Data-HList-FakePrelude.html#ShowLabel",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "ShowLabel",
          "package": "HList",
          "partial": "Show Label",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:ShowLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "UnionSymRec",
          "package": "HList",
          "source": "src/Data-HList-Record.html#UnionSymRec",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "UnionSymRec",
          "package": "HList",
          "partial": "Union Sym Rec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:UnionSymRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "UnionSymRec'",
          "package": "HList",
          "source": "src/Data-HList-Record.html#UnionSymRec%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "UnionSymRec'",
          "package": "HList",
          "partial": "Union Sym Rec'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#t:UnionSymRec-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a value in a record by its label. Analagous to (!!), the\n  list indexing operation. Highest fixity, like (\u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:{\n\u003c/code\u003e\u003c/strong\u003elet record1 = x .=. 3 .*.\n              y .=. 'y' .*.\n              emptyRecord\n:}\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erecord1 .!. x\n\u003c/code\u003e\u003c/strong\u003e3\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erecord1 .!. y\n\u003c/code\u003e\u003c/strong\u003e'y'\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:{\n\u003c/code\u003e\u003c/strong\u003elet r2 = y .=. record1 .!. x .*.\n         z .=. record1 .!. y .*.\n         emptyRecord\n:}\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003er2\n\u003c/code\u003e\u003c/strong\u003eRecord{y=3,z='y'}\n\u003c/pre\u003e\u003cp\u003eNote that labels made following \u003ca\u003eData.HList.Labelable\u003c/a\u003e allow\n  using \u003ca\u003eControl.Lens.^.\u003c/a\u003e instead.\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "(.!.)",
          "package": "HList",
          "signature": "r -\u003e Label l -\u003e v",
          "source": "src/Data-HList-Record.html#.%21.",
          "type": "function"
        },
        "index": {
          "description": "Lookup value in record by its label Analagous to the list indexing operation Highest fixity like let record1 emptyRecord record1 record1 let r2 record1 record1 emptyRecord r2 Record Note that labels made following Data.HList.Labelable allow using Control.Lens instead",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "(.!.) .!.",
          "normalized": "a-\u003eLabel b-\u003ec",
          "package": "HList",
          "signature": "r-\u003eLabel l-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-33-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "(.*.)",
          "package": "HList",
          "signature": "e -\u003e l -\u003e HExtendR e l",
          "source": "src/Data-HList-HListPrelude.html#.%2A.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "(.*.) .*.",
          "normalized": "a-\u003eb-\u003eHExtendR a b",
          "package": "HList",
          "signature": "e-\u003el-\u003eHExtendR e l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a field from a record. At the same\n  level as other record modification options (\u003ccode\u003e\u003ca\u003e.*.\u003c/a\u003e\u003c/code\u003e). Analagous\n  to (\u003ccode\u003e\\\\\u003c/code\u003e) in lists.\n\u003c/p\u003e\u003cpre\u003e record1 .-. label1\n\u003c/pre\u003e\u003cpre\u003e label1 .=. value1 .*.\n label2 .=. value2 .-.\n label2 .*.\n emptyRecord\n\u003c/pre\u003e\u003cpre\u003e label1 .=. value1 .-.\n label1 .*.\n label2 .=. value2 .*.\n emptyRecord\n\u003c/pre\u003e\u003cpre\u003e record1 .*. label1 .=. record2 .!. label1\n         .*. label2 .=. record2 .!. label2\n         .-. label1\n\u003c/pre\u003e",
          "module": "Data.HList.Record",
          "name": "(.-.)",
          "package": "HList",
          "signature": "Record r -\u003e Label l -\u003e Record r'",
          "source": "src/Data-HList-Record.html#.-.",
          "type": "function"
        },
        "index": {
          "description": "Remove field from record At the same level as other record modification options Analagous to in lists record1 label1 label1 value1 label2 value2 label2 emptyRecord label1 value1 label1 label2 value2 emptyRecord record1 label1 record2 label1 label2 record2 label2 label1",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "(.-.) .-.",
          "normalized": "Record a-\u003eLabel b-\u003eRecord c",
          "package": "HList",
          "signature": "Record r-\u003eLabel l-\u003eRecord r'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to list append, so give this slightly lower fixity than\n  (.*.), so we can write:\n\u003c/p\u003e\u003cpre\u003e field1 .=. value .*. record1 .\u003c++. record2\n\u003c/pre\u003e",
          "module": "Data.HList.Record",
          "name": "(.\u003c++.)",
          "package": "HList",
          "signature": "Record r -\u003e Record r' -\u003e Record r''",
          "source": "src/Data-HList-Record.html#.%3C%2B%2B.",
          "type": "function"
        },
        "index": {
          "description": "Similar to list append so give this slightly lower fixity than so we can write field1 value record1 record2",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "(.\u003c++.) .\u003c++.",
          "normalized": "Record a-\u003eRecord b-\u003eRecord c",
          "package": "HList",
          "signature": "Record r-\u003eRecord r'-\u003eRecord r''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-60--43--43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003e.@.\u003c/a\u003e\u003c/code\u003e, except type preserving. It has the same fixity as (.@.).\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "(.\u003c.)",
          "package": "HList",
          "signature": "Tagged k l v -\u003e Record r -\u003e Record (HUpdateAtHNatR n (Tagged k l v) r)",
          "source": "src/Data-HList-Record.html#.%3C.",
          "type": "function"
        },
        "index": {
          "description": "The same as except type preserving It has the same fixity as",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "(.\u003c.) .\u003c.",
          "normalized": "Tagged a b c-\u003eRecord d-\u003eRecord(HUpdateAtHNatR e(Tagged a b c)d)",
          "package": "HList",
          "signature": "Tagged k l v-\u003eRecord r-\u003eRecord(HUpdateAtHNatR n(Tagged k l v)r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a value with the given label. Analagous to a data\n  constructor such as \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e. Higher fixity\n  than record-modification operations like (\u003ccode\u003e\u003ca\u003e.*.\u003c/a\u003e\u003c/code\u003e), (\u003ccode\u003e\u003ca\u003e.-.\u003c/a\u003e\u003c/code\u003e), etc. to\n  support expression like the below w/o parentheses:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ex .=. \"v1\" .*. y .=. '2' .*. emptyRecord\n\u003c/code\u003e\u003c/strong\u003eRecord{x=\"v1\",y='2'}\n\u003c/pre\u003e",
          "module": "Data.HList.Record",
          "name": "(.=.)",
          "package": "HList",
          "signature": "Label l -\u003e v -\u003e Tagged l v",
          "source": "src/Data-HList-Record.html#.%3D.",
          "type": "function"
        },
        "index": {
          "description": "Create value with the given label Analagous to data constructor such as Just Left or Right Higher fixity than record-modification operations like etc to support expression like the below parentheses v1 emptyRecord Record v1",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "(.=.) .=.",
          "normalized": "Label a-\u003eb-\u003eTagged a b",
          "package": "HList",
          "signature": "Label l-\u003ev-\u003eTagged l v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate a field with a particular value.\n  Same fixity as (.*.) so that extensions and updates can be chained.\n  There is no real list analogue, since there is no Prelude defined\n  update.\n\u003c/p\u003e\u003cpre\u003e label1 .=. value1 .@. record1\n\u003c/pre\u003e",
          "module": "Data.HList.Record",
          "name": "(.@.)",
          "package": "HList",
          "signature": "Tagged k l v -\u003e Record r -\u003e Record (HUpdateAtHNatR n (Tagged k l v) r)",
          "source": "src/Data-HList-Record.html#.%40.",
          "type": "function"
        },
        "index": {
          "description": "Update field with particular value Same fixity as so that extensions and updates can be chained There is no real list analogue since there is no Prelude defined update label1 value1 record1",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "(.@.) .@.",
          "normalized": "Tagged a b c-\u003eRecord d-\u003eRecord(HUpdateAtHNatR e(Tagged a b c)d)",
          "package": "HList",
          "signature": "Tagged k l v-\u003eRecord r-\u003eRecord(HUpdateAtHNatR n(Tagged k l v)r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:.-64-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "ExtraField",
          "package": "HList",
          "signature": "ExtraField",
          "source": "src/Data-HList-Record.html#ExtraField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "ExtraField",
          "package": "HList",
          "partial": "Extra Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:ExtraField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "FieldNotFound",
          "package": "HList",
          "signature": "FieldNotFound",
          "source": "src/Data-HList-Record.html#FieldNotFound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "FieldNotFound",
          "package": "HList",
          "partial": "Field Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:FieldNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "Record",
          "package": "HList",
          "signature": "Record (HList r)",
          "source": "src/Data-HList-Record.html#Record",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "Record",
          "package": "HList",
          "partial": "Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an empty record\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "emptyRecord",
          "package": "HList",
          "signature": "Record `[]`",
          "source": "src/Data-HList-Record.html#emptyRecord",
          "type": "function"
        },
        "index": {
          "description": "Build an empty record",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "emptyRecord",
          "normalized": "Record[]",
          "package": "HList",
          "partial": "Record",
          "signature": "Record[]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:emptyRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "h2projectByLabels",
          "package": "HList",
          "signature": "Proxy ls -\u003e HList r -\u003e (HList rin, HList rout)",
          "source": "src/Data-HList-Record.html#h2projectByLabels",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "h2projectByLabels",
          "normalized": "Proxy a-\u003eHList b-\u003e(HList c,HList d)",
          "package": "HList",
          "partial": "By Labels",
          "signature": "Proxy ls-\u003eHList r-\u003e(HList rin,HList rout)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:h2projectByLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "h2projectByLabels'",
          "package": "HList",
          "signature": "Proxy b -\u003e Proxy ls -\u003e HList r -\u003e (HList rin, HList rout)",
          "source": "src/Data-HList-Record.html#h2projectByLabels%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "h2projectByLabels'",
          "normalized": "Proxy a-\u003eProxy b-\u003eHList c-\u003e(HList d,HList e)",
          "package": "HList",
          "partial": "By Labels'",
          "signature": "Proxy b-\u003eProxy ls-\u003eHList r-\u003e(HList rin,HList rout)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:h2projectByLabels-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "hDeleteAtLabel",
          "package": "HList",
          "signature": "Label l -\u003e Record t -\u003e Record t2",
          "source": "src/Data-HList-Record.html#hDeleteAtLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hDeleteAtLabel",
          "normalized": "Label a-\u003eRecord b-\u003eRecord b",
          "package": "HList",
          "partial": "Delete At Label",
          "signature": "Label l-\u003eRecord t-\u003eRecord t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hDeleteAtLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "hLabels",
          "package": "HList",
          "signature": "HList l -\u003e Proxy (LabelsOf l)",
          "source": "src/Data-HList-Record.html#hLabels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hLabels",
          "normalized": "HList a-\u003eProxy(LabelsOf a)",
          "package": "HList",
          "partial": "Labels",
          "signature": "HList l-\u003eProxy(LabelsOf l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "hLeftUnion",
          "package": "HList",
          "signature": "Record r -\u003e Record r' -\u003e Record r''",
          "source": "src/Data-HList-Record.html#hLeftUnion",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hLeftUnion",
          "normalized": "Record a-\u003eRecord b-\u003eRecord c",
          "package": "HList",
          "partial": "Left Union",
          "signature": "Record r-\u003eRecord r'-\u003eRecord r''",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hLeftUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "hLeftUnionBool",
          "package": "HList",
          "signature": "Proxy b -\u003e Record r -\u003e f -\u003e Record r'",
          "source": "src/Data-HList-Record.html#hLeftUnionBool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hLeftUnionBool",
          "normalized": "Proxy a-\u003eRecord b-\u003ec-\u003eRecord d",
          "package": "HList",
          "partial": "Left Union Bool",
          "signature": "Proxy b-\u003eRecord r-\u003ef-\u003eRecord r'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hLeftUnionBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "hLens",
          "package": "HList",
          "signature": "Label k l -\u003e (v1 -\u003e f v) -\u003e Record r -\u003e f (Record (HUpdateAtHNatR n (Tagged k l v) r))",
          "source": "src/Data-HList-Record.html#hLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hLens",
          "normalized": "Label a b-\u003e(c-\u003ed c)-\u003eRecord e-\u003ed(Record(HUpdateAtHNatR f(Tagged a b c)e))",
          "package": "HList",
          "partial": "Lens",
          "signature": "Label k l-\u003e(v-\u003ef v)-\u003eRecord r-\u003ef(Record(HUpdateAtHNatR n(Tagged k l v)r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "hLookupByLabel",
          "package": "HList",
          "signature": "Label l -\u003e r -\u003e v",
          "source": "src/Data-HList-Record.html#hLookupByLabel",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hLookupByLabel",
          "normalized": "Label a-\u003eb-\u003ec",
          "package": "HList",
          "partial": "Lookup By Label",
          "signature": "Label l-\u003er-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hLookupByLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "hLookupByLabel'",
          "package": "HList",
          "signature": "Proxy b -\u003e Label l -\u003e HList r -\u003e v",
          "source": "src/Data-HList-Record.html#hLookupByLabel%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hLookupByLabel'",
          "normalized": "Proxy a-\u003eLabel b-\u003eHList c-\u003ed",
          "package": "HList",
          "partial": "Lookup By Label'",
          "signature": "Proxy b-\u003eLabel l-\u003eHList r-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hLookupByLabel-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ehProjectByLabels ls r\u003c/code\u003e returns \u003ccode\u003er\u003c/code\u003e with only the labels in \u003ccode\u003els\u003c/code\u003e remaining\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "hProjectByLabels",
          "package": "HList",
          "signature": "Proxy ls -\u003e Record t -\u003e Record a",
          "source": "src/Data-HList-Record.html#hProjectByLabels",
          "type": "function"
        },
        "index": {
          "description": "hProjectByLabels ls returns with only the labels in ls remaining",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hProjectByLabels",
          "normalized": "Proxy a-\u003eRecord b-\u003eRecord c",
          "package": "HList",
          "partial": "Project By Labels",
          "signature": "Proxy ls-\u003eRecord t-\u003eRecord a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hProjectByLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eH2ProjectByLabels\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "hProjectByLabels2",
          "package": "HList",
          "signature": "Proxy ls -\u003e Record t -\u003e (Record t1, Record t2)",
          "source": "src/Data-HList-Record.html#hProjectByLabels2",
          "type": "function"
        },
        "index": {
          "description": "See H2ProjectByLabels",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hProjectByLabels2",
          "normalized": "Proxy a-\u003eRecord b-\u003e(Record b,Record b)",
          "package": "HList",
          "partial": "Project By Labels",
          "signature": "Proxy ls-\u003eRecord t-\u003e(Record t,Record t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hProjectByLabels2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRearranges a record by labels. Returns the record r, rearranged such that\n the labels are in the order given by ls. (recordLabels r) must be a\n permutation of ls.\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "hRearrange",
          "package": "HList",
          "signature": "Proxy ls -\u003e Record r -\u003e Record r'",
          "source": "src/Data-HList-Record.html#hRearrange",
          "type": "function"
        },
        "index": {
          "description": "Rearranges record by labels Returns the record rearranged such that the labels are in the order given by ls recordLabels must be permutation of ls",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hRearrange",
          "normalized": "Proxy a-\u003eRecord b-\u003eRecord c",
          "package": "HList",
          "partial": "Rearrange",
          "signature": "Proxy ls-\u003eRecord r-\u003eRecord r'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hRearrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "hRearrange2",
          "package": "HList",
          "signature": "Proxy ls -\u003e HList r -\u003e r'",
          "source": "src/Data-HList-Record.html#hRearrange2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hRearrange2",
          "normalized": "Proxy a-\u003eHList b-\u003ec",
          "package": "HList",
          "partial": "Rearrange",
          "signature": "Proxy ls-\u003eHList r-\u003er'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hRearrange2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "hRearrange2'",
          "package": "HList",
          "signature": "Proxy l -\u003e Proxy ls -\u003e HList rin -\u003e HList rout -\u003e r'",
          "source": "src/Data-HList-Record.html#hRearrange2%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hRearrange2'",
          "normalized": "Proxy a-\u003eProxy b-\u003eHList c-\u003eHList d-\u003ee",
          "package": "HList",
          "partial": "Rearrange",
          "signature": "Proxy l-\u003eProxy ls-\u003eHList rin-\u003eHList rout-\u003er'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hRearrange2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename the label of record\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehRenameLabel x y (x .=. () .*. emptyRecord)\n\u003c/code\u003e\u003c/strong\u003eRecord{y=()}\n\u003c/pre\u003e",
          "module": "Data.HList.Record",
          "name": "hRenameLabel",
          "package": "HList",
          "signature": "Label k l -\u003e Label k1 l1 -\u003e Record t -\u003e Record (: * (Tagged k1 l1 v) t2)",
          "source": "src/Data-HList-Record.html#hRenameLabel",
          "type": "function"
        },
        "index": {
          "description": "Rename the label of record hRenameLabel emptyRecord Record",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hRenameLabel",
          "normalized": "Label a b-\u003eLabel a b-\u003eRecord c-\u003eRecord(*(Tagged a b d)c)",
          "package": "HList",
          "partial": "Rename Label",
          "signature": "Label k l-\u003eLabel k l-\u003eRecord t-\u003eRecord(*(Tagged k l v)t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hRenameLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variation on \u003ccode\u003e\u003ca\u003ehUpdateAtLabel\u003c/a\u003e\u003c/code\u003e: type-preserving update.\n\u003c/p\u003e\u003cp\u003eWe could also say:\n\u003c/p\u003e\u003cpre\u003e hTPupdateAtLabel l v r = hUpdateAtLabel l v r `asTypeOf` r\n\u003c/pre\u003e\u003cp\u003eThen we were taking a dependency on Haskell's type equivalence.\nThis would also constrain the actual implementation of hUpdateAtLabel.\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "hTPupdateAtLabel",
          "package": "HList",
          "signature": "Label k l -\u003e v -\u003e Record r -\u003e Record (HUpdateAtHNatR n (Tagged k l v) r)",
          "source": "src/Data-HList-Record.html#hTPupdateAtLabel",
          "type": "function"
        },
        "index": {
          "description": "variation on hUpdateAtLabel type-preserving update We could also say hTPupdateAtLabel hUpdateAtLabel asTypeOf Then we were taking dependency on Haskell type equivalence This would also constrain the actual implementation of hUpdateAtLabel",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hTPupdateAtLabel",
          "normalized": "Label a b-\u003ec-\u003eRecord d-\u003eRecord(HUpdateAtHNatR e(Tagged a b c)d)",
          "package": "HList",
          "partial": "TPupdate At Label",
          "signature": "Label k l-\u003ev-\u003eRecord r-\u003eRecord(HUpdateAtHNatR n(Tagged k l v)r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hTPupdateAtLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehUpdateAtLabel\u003c/a\u003e\u003c/code\u003e \u003ccode\u003elabel value record\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "hUpdateAtLabel",
          "package": "HList",
          "signature": "Label l -\u003e v -\u003e Record r -\u003e Record (HUpdateAtHNatR n (Tagged l v) r)",
          "source": "src/Data-HList-Record.html#hUpdateAtLabel",
          "type": "function"
        },
        "index": {
          "description": "hUpdateAtLabel label value record",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "hUpdateAtLabel",
          "normalized": "Label a-\u003eb-\u003eRecord c-\u003eRecord(HUpdateAtHNatR d(Tagged a b)c)",
          "package": "HList",
          "partial": "Update At Label",
          "signature": "Label l-\u003ev-\u003eRecord r-\u003eRecord(HUpdateAtHNatR n(Tagged l v)r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:hUpdateAtLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel accessor\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "labelLVPair",
          "package": "HList",
          "signature": "Tagged l v -\u003e Label l",
          "source": "src/Data-HList-Record.html#labelLVPair",
          "type": "function"
        },
        "index": {
          "description": "Label accessor",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "labelLVPair",
          "normalized": "Tagged a b-\u003eLabel a",
          "package": "HList",
          "partial": "LVPair",
          "signature": "Tagged l v-\u003eLabel l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:labelLVPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a record\n\u003c/p\u003e",
          "module": "Data.HList.Record",
          "name": "mkRecord",
          "package": "HList",
          "signature": "HList r -\u003e Record r",
          "source": "src/Data-HList-Record.html#mkRecord",
          "type": "function"
        },
        "index": {
          "description": "Build record",
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "mkRecord",
          "normalized": "HList a-\u003eRecord a",
          "package": "HList",
          "partial": "Record",
          "signature": "HList r-\u003eRecord r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:mkRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "newLVPair",
          "package": "HList",
          "signature": "Label l -\u003e v -\u003e Tagged l v",
          "source": "src/Data-HList-Record.html#newLVPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "newLVPair",
          "normalized": "Label a-\u003eb-\u003eTagged a b",
          "package": "HList",
          "partial": "LVPair",
          "signature": "Label l-\u003ev-\u003eTagged l v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:newLVPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "recordLabels",
          "package": "HList",
          "signature": "Record r -\u003e Proxy (RecordLabels r)",
          "source": "src/Data-HList-Record.html#recordLabels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "recordLabels",
          "normalized": "Record a-\u003eProxy(RecordLabels a)",
          "package": "HList",
          "partial": "Labels",
          "signature": "Record r-\u003eProxy(RecordLabels r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:recordLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "recordValues",
          "package": "HList",
          "signature": "Record r -\u003e HList (RecordValuesR r)",
          "source": "src/Data-HList-Record.html#recordValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "recordValues",
          "normalized": "Record a-\u003eHList(RecordValuesR a)",
          "package": "HList",
          "partial": "Values",
          "signature": "Record r-\u003eHList(RecordValuesR r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:recordValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "recordValues'",
          "package": "HList",
          "signature": "HList r -\u003e HList (RecordValuesR r)",
          "source": "src/Data-HList-Record.html#recordValues%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "recordValues'",
          "normalized": "HList a-\u003eHList(RecordValuesR a)",
          "package": "HList",
          "partial": "Values'",
          "signature": "HList r-\u003eHList(RecordValuesR r)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:recordValues-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "showComponents",
          "package": "HList",
          "signature": "String -\u003e HList l -\u003e String",
          "source": "src/Data-HList-Record.html#showComponents",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "showComponents",
          "normalized": "String-\u003eHList a-\u003eString",
          "package": "HList",
          "partial": "Components",
          "signature": "String-\u003eHList l-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:showComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "showLabel",
          "package": "HList",
          "signature": "Label l -\u003e String",
          "source": "src/Data-HList-FakePrelude.html#showLabel",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "showLabel",
          "normalized": "Label a-\u003eString",
          "package": "HList",
          "partial": "Label",
          "signature": "Label l-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:showLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "unionSR",
          "package": "HList",
          "signature": "Record r1 -\u003e Record r2 -\u003e (Record ru, Record ru)",
          "source": "src/Data-HList-Record.html#unionSR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "unionSR",
          "normalized": "Record a-\u003eRecord a-\u003e(Record b,Record b)",
          "package": "HList",
          "partial": "SR",
          "signature": "Record r-\u003eRecord r-\u003e(Record ru,Record ru)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:unionSR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Record",
          "name": "unionSR'",
          "package": "HList",
          "signature": "Proxy b -\u003e Record r1 -\u003e f2 -\u003e Record r2' -\u003e (Record ru, Record ru)",
          "source": "src/Data-HList-Record.html#unionSR%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data HList Record",
          "module": "Data.HList.Record",
          "name": "unionSR'",
          "normalized": "Proxy a-\u003eRecord b-\u003ec-\u003eRecord b-\u003e(Record d,Record d)",
          "package": "HList",
          "partial": "SR'",
          "signature": "Proxy b-\u003eRecord r-\u003ef-\u003eRecord r-\u003e(Record ru,Record ru)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Record.html#v:unionSR-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.RecordPuns",
          "name": "RecordPuns",
          "package": "HList",
          "source": "src/Data-HList-RecordPuns.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data HList RecordPuns",
          "module": "Data.HList.RecordPuns",
          "name": "RecordPuns",
          "package": "HList",
          "partial": "Record Puns",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-RecordPuns.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequires the use of \u003ca\u003eData.HList.Label6\u003c/a\u003e (ie. the label for foo is \u003ccode\u003eLabel :: Label \"foo\"\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.HList.RecordPuns",
          "name": "pun",
          "package": "HList",
          "signature": "QuasiQuoter",
          "source": "src/Data-HList-RecordPuns.html#pun",
          "type": "function"
        },
        "index": {
          "description": "requires the use of Data.HList.Label6 ie the label for foo is Label Label foo",
          "hierarchy": "Data HList RecordPuns",
          "module": "Data.HList.RecordPuns",
          "name": "pun",
          "package": "HList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-RecordPuns.html#v:pun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eType-indexed co-products.\n\u003c/p\u003e\u003cp\u003e(There are other ways: see ConsUnion.hs, for example)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.TIC",
          "name": "TIC",
          "package": "HList",
          "source": "src/Data-HList-TIC.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Type-indexed co-products There are other ways see ConsUnion.hs for example",
          "hierarchy": "Data HList TIC",
          "module": "Data.HList.TIC",
          "name": "TIC",
          "package": "HList",
          "partial": "TIC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA datatype for type-indexed co-products\n\u003c/p\u003e",
          "module": "Data.HList.TIC",
          "name": "TIC",
          "package": "HList",
          "source": "src/Data-HList-TIC.html#TIC",
          "type": "newtype"
        },
        "index": {
          "description": "datatype for type-indexed co-products",
          "hierarchy": "Data HList TIC",
          "module": "Data.HList.TIC",
          "name": "TIC",
          "package": "HList",
          "partial": "TIC",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIC.html#t:TIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.TIC",
          "name": "TIC",
          "package": "HList",
          "signature": "TIC Dynamic",
          "source": "src/Data-HList-TIC.html#TIC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList TIC",
          "module": "Data.HList.TIC",
          "name": "TIC",
          "package": "HList",
          "partial": "TIC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIC.html#v:TIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublic constructor (or, open union's injection function)\n\u003c/p\u003e",
          "module": "Data.HList.TIC",
          "name": "mkTIC",
          "package": "HList",
          "signature": "i -\u003e TIC l",
          "source": "src/Data-HList-TIC.html#mkTIC",
          "type": "function"
        },
        "index": {
          "description": "Public constructor or open union injection function",
          "hierarchy": "Data HList TIC",
          "module": "Data.HList.TIC",
          "name": "mkTIC",
          "normalized": "a-\u003eTIC b",
          "package": "HList",
          "partial": "TIC",
          "signature": "i-\u003eTIC l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIC.html#v:mkTIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublic destructor (or, open union's projection function)\n\u003c/p\u003e",
          "module": "Data.HList.TIC",
          "name": "unTIC",
          "package": "HList",
          "signature": "TIC l -\u003e Maybe o",
          "source": "src/Data-HList-TIC.html#unTIC",
          "type": "function"
        },
        "index": {
          "description": "Public destructor or open union projection function",
          "hierarchy": "Data HList TIC",
          "module": "Data.HList.TIC",
          "name": "unTIC",
          "normalized": "TIC a-\u003eMaybe b",
          "package": "HList",
          "partial": "TIC",
          "signature": "TIC l-\u003eMaybe o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIC.html#v:unTIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eType-indexed products.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.TIP",
          "name": "TIP",
          "package": "HList",
          "source": "src/Data-HList-TIP.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Type-indexed products",
          "hierarchy": "Data HList TIP",
          "module": "Data.HList.TIP",
          "name": "TIP",
          "package": "HList",
          "partial": "TIP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.TIP",
          "name": "HTypeIndexed",
          "package": "HList",
          "source": "src/Data-HList-TIP.html#HTypeIndexed",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList TIP",
          "module": "Data.HList.TIP",
          "name": "HTypeIndexed",
          "package": "HList",
          "partial": "HType Indexed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#t:HTypeIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.TIP",
          "name": "TIP",
          "package": "HList",
          "source": "src/Data-HList-TIP.html#TIP",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data HList TIP",
          "module": "Data.HList.TIP",
          "name": "TIP",
          "package": "HList",
          "partial": "TIP",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#t:TIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.TIP",
          "name": "TIP",
          "package": "HList",
          "signature": "TIP",
          "source": "src/Data-HList-TIP.html#TIP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList TIP",
          "module": "Data.HList.TIP",
          "name": "TIP",
          "package": "HList",
          "partial": "TIP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:TIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.TIP",
          "name": "emptyTIP",
          "package": "HList",
          "signature": "TIP `[]`",
          "source": "src/Data-HList-TIP.html#emptyTIP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList TIP",
          "module": "Data.HList.TIP",
          "name": "emptyTIP",
          "normalized": "TIP[]",
          "package": "HList",
          "partial": "TIP",
          "signature": "TIP[]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:emptyTIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.TIP",
          "name": "mkTIP",
          "package": "HList",
          "signature": "HList l -\u003e TIP l",
          "source": "src/Data-HList-TIP.html#mkTIP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList TIP",
          "module": "Data.HList.TIP",
          "name": "mkTIP",
          "normalized": "HList a-\u003eTIP a",
          "package": "HList",
          "partial": "TIP",
          "signature": "HList l-\u003eTIP l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:mkTIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.TIP",
          "name": "onTIP",
          "package": "HList",
          "signature": "(HList t -\u003e HList l) -\u003e TIP t -\u003e TIP l",
          "source": "src/Data-HList-TIP.html#onTIP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList TIP",
          "module": "Data.HList.TIP",
          "name": "onTIP",
          "normalized": "(HList a-\u003eHList b)-\u003eTIP a-\u003eTIP b",
          "package": "HList",
          "partial": "TIP",
          "signature": "(HList t-\u003eHList l)-\u003eTIP t-\u003eTIP l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:onTIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.TIP",
          "name": "tipyDelete",
          "package": "HList",
          "signature": "Proxy k e -\u003e TIP t -\u003e TIP (HDeleteAtHNatR n t)",
          "source": "src/Data-HList-TIP.html#tipyDelete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList TIP",
          "module": "Data.HList.TIP",
          "name": "tipyDelete",
          "normalized": "Proxy a b-\u003eTIP c-\u003eTIP(HDeleteAtHNatR d c)",
          "package": "HList",
          "partial": "Delete",
          "signature": "Proxy k e-\u003eTIP t-\u003eTIP(HDeleteAtHNatR n t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:tipyDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.TIP",
          "name": "tipyProject",
          "package": "HList",
          "signature": "Proxy [*] (HProjectByHNatsR ns t) -\u003e TIP t -\u003e TIP (HProjectByHNatsR ns t)",
          "source": "src/Data-HList-TIP.html#tipyProject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList TIP",
          "module": "Data.HList.TIP",
          "name": "tipyProject",
          "normalized": "Proxy[*](HProjectByHNatsR a b)-\u003eTIP b-\u003eTIP(HProjectByHNatsR a b)",
          "package": "HList",
          "partial": "Project",
          "signature": "Proxy[*](HProjectByHNatsR ns t)-\u003eTIP t-\u003eTIP(HProjectByHNatsR ns t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:tipyProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit produces two TIPs\n\u003c/p\u003e",
          "module": "Data.HList.TIP",
          "name": "tipySplit",
          "package": "HList",
          "signature": "Proxy [*] ps -\u003e TIP l -\u003e (TIP (HProjectByHNatsR ns l), TIP (HProjectAwayByHNatsR ns l))",
          "source": "src/Data-HList-TIP.html#tipySplit",
          "type": "function"
        },
        "index": {
          "description": "Split produces two TIPs",
          "hierarchy": "Data HList TIP",
          "module": "Data.HList.TIP",
          "name": "tipySplit",
          "normalized": "Proxy[*]a-\u003eTIP b-\u003e(TIP(HProjectByHNatsR c b),TIP(HProjectAwayByHNatsR c b))",
          "package": "HList",
          "partial": "Split",
          "signature": "Proxy[*]ps-\u003eTIP l-\u003e(TIP(HProjectByHNatsR ns l),TIP(HProjectAwayByHNatsR ns l))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:tipySplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.TIP",
          "name": "tipyUpdate",
          "package": "HList",
          "signature": "e -\u003e TIP t -\u003e TIP (HUpdateAtHNatR n e t)",
          "source": "src/Data-HList-TIP.html#tipyUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList TIP",
          "module": "Data.HList.TIP",
          "name": "tipyUpdate",
          "normalized": "a-\u003eTIP b-\u003eTIP(HUpdateAtHNatR c a b)",
          "package": "HList",
          "partial": "Update",
          "signature": "e-\u003eTIP t-\u003eTIP(HUpdateAtHNatR n e t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:tipyUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.TIP",
          "name": "unTIP",
          "package": "HList",
          "signature": "HList l",
          "source": "src/Data-HList-TIP.html#TIP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList TIP",
          "module": "Data.HList.TIP",
          "name": "unTIP",
          "package": "HList",
          "partial": "TIP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TIP.html#v:unTIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eGeneric type equality predicate: \n   The implementation based on overlapping instances\n   The only place where overlapping instances are really used\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.TypeEqO",
          "name": "TypeEqO",
          "package": "HList",
          "source": "src/Data-HList-TypeEqO.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Generic type equality predicate The implementation based on overlapping instances The only place where overlapping instances are really used",
          "hierarchy": "Data HList TypeEqO",
          "module": "Data.HList.TypeEqO",
          "name": "TypeEqO",
          "package": "HList",
          "partial": "Type Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TypeEqO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.TypeEqO",
          "name": "TupleType",
          "package": "HList",
          "source": "src/Data-HList-TypeEqO.html#TupleType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HList TypeEqO",
          "module": "Data.HList.TypeEqO",
          "name": "TupleType",
          "package": "HList",
          "partial": "Tuple Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-TypeEqO.html#t:TupleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe HList library\n\u003c/p\u003e\u003cp\u003e(C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eVariants, i.e., labelled sums.\n\u003c/p\u003e\u003cp\u003eOne approach to their implementation would be to consider both\n   the favoured label and the corresponding value as dynamics upon\n   variant construction. Since we are too lazy to programme some\n   Typeable instances for non-ghc systems (NB: in GHC, Typeable\n   is derivable), we rather model variants as (opaque) records\n   with maybies for the values. Only one value will actually hold\n   non-Nothing, as guaranteed by the constructor.\n\u003c/p\u003e\u003cp\u003eSee VariantP.hs for a different approach to open sums.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList.Variant",
          "name": "Variant",
          "package": "HList",
          "source": "src/Data-HList-Variant.html",
          "type": "module"
        },
        "index": {
          "description": "The HList library Oleg Kiselyov Ralf Laemmel Keean Schupke Variants i.e labelled sums One approach to their implementation would be to consider both the favoured label and the corresponding value as dynamics upon variant construction Since we are too lazy to programme some Typeable instances for non-ghc systems NB in GHC Typeable is derivable we rather model variants as opaque records with maybies for the values Only one value will actually hold non-Nothing as guaranteed by the constructor See VariantP.hs for different approach to open sums",
          "hierarchy": "Data HList Variant",
          "module": "Data.HList.Variant",
          "name": "Variant",
          "package": "HList",
          "partial": "Variant",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn proxy sequence into sequence of Nothings\n\u003c/p\u003e",
          "module": "Data.HList.Variant",
          "name": "HMaybeF",
          "package": "HList",
          "source": "src/Data-HList-Variant.html#HMaybeF",
          "type": "data"
        },
        "index": {
          "description": "Turn proxy sequence into sequence of Nothings",
          "hierarchy": "Data HList Variant",
          "module": "Data.HList.Variant",
          "name": "HMaybeF",
          "package": "HList",
          "partial": "HMaybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#t:HMaybeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant types on the basis of label-maybe pairs.\n\u003c/p\u003e",
          "module": "Data.HList.Variant",
          "name": "Variant",
          "package": "HList",
          "source": "src/Data-HList-Variant.html#Variant",
          "type": "newtype"
        },
        "index": {
          "description": "Variant types on the basis of label-maybe pairs",
          "hierarchy": "Data HList Variant",
          "module": "Data.HList.Variant",
          "name": "Variant",
          "package": "HList",
          "partial": "Variant",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#t:Variant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Variant",
          "name": "HMaybeF",
          "package": "HList",
          "signature": "HMaybeF",
          "source": "src/Data-HList-Variant.html#HMaybeF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Variant",
          "module": "Data.HList.Variant",
          "name": "HMaybeF",
          "package": "HList",
          "partial": "HMaybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#v:HMaybeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Variant",
          "name": "Variant",
          "package": "HList",
          "signature": "Variant mr",
          "source": "src/Data-HList-Variant.html#Variant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Variant",
          "module": "Data.HList.Variant",
          "name": "Variant",
          "package": "HList",
          "partial": "Variant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#v:Variant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList.Variant",
          "name": "hMaybied",
          "package": "HList",
          "signature": "HList as' -\u003e HList bs'",
          "source": "src/Data-HList-Variant.html#hMaybied",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList Variant",
          "module": "Data.HList.Variant",
          "name": "hMaybied",
          "normalized": "HList a-\u003eHList b",
          "package": "HList",
          "partial": "Maybied",
          "signature": "HList as'-\u003eHList bs'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#v:hMaybied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublic constructor\n it seems we can blame \u003ccode\u003e\u003ca\u003ehUpdateAtLabel\u003c/a\u003e\u003c/code\u003e (not \u003ccode\u003e\u003ca\u003eHMap\u003c/a\u003e\u003c/code\u003e) for needing the asTypeOf?\n\u003c/p\u003e",
          "module": "Data.HList.Variant",
          "name": "mkVariant",
          "package": "HList",
          "signature": "Label k l -\u003e a -\u003e Record as' -\u003e Variant (HList r)",
          "source": "src/Data-HList-Variant.html#mkVariant",
          "type": "function"
        },
        "index": {
          "description": "Public constructor it seems we can blame hUpdateAtLabel not HMap for needing the asTypeOf",
          "hierarchy": "Data HList Variant",
          "module": "Data.HList.Variant",
          "name": "mkVariant",
          "normalized": "Label a b-\u003ec-\u003eRecord d-\u003eVariant(HList e)",
          "package": "HList",
          "partial": "Variant",
          "signature": "Label k l-\u003ea-\u003eRecord as'-\u003eVariant(HList r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#v:mkVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublic destructor\n\u003c/p\u003e",
          "module": "Data.HList.Variant",
          "name": "unVariant",
          "package": "HList",
          "signature": "Label k l -\u003e Variant (HList r) -\u003e v",
          "source": "src/Data-HList-Variant.html#unVariant",
          "type": "function"
        },
        "index": {
          "description": "Public destructor",
          "hierarchy": "Data HList Variant",
          "module": "Data.HList.Variant",
          "name": "unVariant",
          "normalized": "Label a b-\u003eVariant(HList c)-\u003ed",
          "package": "HList",
          "partial": "Variant",
          "signature": "Label k l-\u003eVariant(HList r)-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList-Variant.html#v:unVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOOHaskell (C) 2004, Oleg Kiselyov, Ralf Laemmel, Keean Schupke\n\u003c/p\u003e\u003cp\u003eThis module gathers the API that we need for OOP in Haskell.  We\nbasically select a certain configuration of the HList library, and we\nalso import modules that are needed for mutable data and monads. Note\non overlapping: Needed for the chosen model of labels. Other models\ncan be used instead, but the chosen look better in types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HList",
          "name": "HList",
          "package": "HList",
          "source": "src/Data-HList.html",
          "type": "module"
        },
        "index": {
          "description": "OOHaskell Oleg Kiselyov Ralf Laemmel Keean Schupke This module gathers the API that we need for OOP in Haskell We basically select certain configuration of the HList library and we also import modules that are needed for mutable data and monads Note on overlapping Needed for the chosen model of labels Other models can be used instead but the chosen look better in types",
          "hierarchy": "Data HList",
          "module": "Data.HList",
          "name": "HList",
          "package": "HList",
          "partial": "HList",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList",
          "name": "(#)",
          "package": "HList",
          "signature": "r -\u003e Label l -\u003e v",
          "source": "src/Data-HList.html#%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList",
          "module": "Data.HList",
          "name": "(#) #",
          "normalized": "a-\u003eLabel b-\u003ec",
          "package": "HList",
          "signature": "r-\u003eLabel l-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HList",
          "name": "concrete",
          "package": "HList",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Data-HList.html#concrete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HList",
          "module": "Data.HList",
          "name": "concrete",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "HList",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HList/docs/Data-HList.html#v:concrete"
      }
    }
  ]
]