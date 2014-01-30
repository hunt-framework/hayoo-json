[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/string-qq/docs/Data-String-QQ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuasiQuoter for non-interpolated strings, texts and bytestrings.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003es\u003c/a\u003e quoter contains a multi-line string with no interpolation at all,\n except that the leading newline is trimmed and carriage returns stripped.\n\u003c/p\u003e\u003cpre\u003e\n {-# LANGUAGE QuasiQuotes #-}\n import Data.Text (Text)\n import Data.String.QQ\n foo :: Text -- \u003ca\u003eString\u003c/a\u003e, \u003ca\u003eByteString\u003c/a\u003e etc also works\n foo = [s|\n Well here is a\n     multi-line string!\n |]\n\u003c/pre\u003e\u003cp\u003eAny instance of the IsString type is permitted.\n\u003c/p\u003e\u003cp\u003e(For GHC versions 6, write \u003ca\u003e[$s||]\u003c/a\u003e instead of \u003ca\u003e[s||]\u003c/a\u003e.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.String.QQ",
        "fct-package": "string-qq",
        "fct-signature": "module",
        "fct-source": "src/Data-String-QQ.html",
        "fct-type": "module",
        "title": "QQ"
      },
      "index": {
        "description": "QuasiQuoter for non-interpolated strings texts and bytestrings The quoter contains multi-line string with no interpolation at all except that the leading newline is trimmed and carriage returns stripped LANGUAGE QuasiQuotes import Data.Text Text import Data.String.QQ foo Text String ByteString etc also works foo Well here is multi-line string Any instance of the IsString type is permitted For GHC versions write instead of",
        "hierarchy": "Data String QQ",
        "module": "Data.String.QQ",
        "name": "QQ",
        "normalized": "",
        "package": "string-qq",
        "partial": "QQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/string-qq/docs/Data-String-QQ.html#v:s",
      "description": {
        "fct-descr": "\u003cp\u003eQuasiQuoter for a non-interpolating IsString literal. The pattern portion is undefined.\n\u003c/p\u003e",
        "fct-module": "Data.String.QQ",
        "fct-package": "string-qq",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Data-String-QQ.html#s",
        "fct-type": "function",
        "title": "s"
      },
      "index": {
        "description": "QuasiQuoter for non-interpolating IsString literal The pattern portion is undefined",
        "hierarchy": "Data String QQ",
        "module": "Data.String.QQ",
        "name": "s",
        "normalized": "",
        "package": "string-qq",
        "partial": "",
        "signature": ""
      }
    }
  }
]