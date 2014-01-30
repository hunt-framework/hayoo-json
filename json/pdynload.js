[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pdynload/docs/System-Plugin.html#",
      "description": {
        "fct-module": "System.Plugin",
        "fct-package": "pdynload",
        "fct-signature": "module",
        "fct-source": "src/System-Plugin.html",
        "fct-type": "module",
        "title": "Plugin"
      },
      "index": {
        "description": "",
        "hierarchy": "System Plugin",
        "module": "System.Plugin",
        "name": "Plugin",
        "normalized": "",
        "package": "pdynload",
        "partial": "Plugin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pdynload/docs/System-Plugin.html#v:pdynload",
      "description": {
        "fct-descr": "\u003cp\u003ePolymorphic dynamic loading.\n\u003c/p\u003e\u003cp\u003eResolves the specified symbol to any given type.  This means linking the package\n containing it if it is not already linked, extracting the value of that symbol,\n and returning that value. \n\u003c/p\u003e\u003cp\u003eHere has simplest demo for test:\n\u003c/p\u003e\u003cpre\u003e module Main where\n \n import System.Plugin\n import Unsafe.Coerce\n \n main = do\n   val \u003c- pdynload (\"Prelude\", \"reverse\") ([], \"String -\u003e String\")\n   let str = case val of\n               Just v  -\u003e (unsafeCoerce v :: String -\u003e String) \"hello\"\n               Nothing -\u003e \"Load failed.\"\n   print str\n\u003c/pre\u003e\u003cp\u003eBecause \u003ccode\u003e\u003ca\u003epdynload\u003c/a\u003e\u003c/code\u003e check type at runtime, so don't afraid \u003ccode\u003e\u003ca\u003eunsafeCoerce\u003c/a\u003e\u003c/code\u003e,\n it is perfect safety.\n\u003c/p\u003e",
        "fct-module": "System.Plugin",
        "fct-package": "pdynload",
        "fct-signature": "(String, String)-\u003e ([String], String)-\u003e IO (Maybe a)",
        "fct-type": "function",
        "title": "pdynload"
      },
      "index": {
        "description": "Polymorphic dynamic loading Resolves the specified symbol to any given type This means linking the package containing it if it is not already linked extracting the value of that symbol and returning that value Here has simplest demo for test module Main where import System.Plugin import Unsafe.Coerce main do val pdynload Prelude reverse String String let str case val of Just unsafeCoerce String String hello Nothing Load failed print str Because pdynload check type at runtime so don afraid unsafeCoerce it is perfect safety",
        "hierarchy": "System Plugin",
        "module": "System.Plugin",
        "name": "pdynload",
        "normalized": "(String,String)-\u003e([String],String)-\u003eIO(Maybe a)",
        "package": "pdynload",
        "partial": "",
        "signature": "(String,String)-\u003e([String],String)-\u003eIO(Maybe a)"
      }
    }
  }
]