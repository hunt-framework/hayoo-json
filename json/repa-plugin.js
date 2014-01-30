[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-plugin/docs/Data-Array-Repa-Plugin.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis GHC plugin performs Data Flow Fusion as described in the following paper:\n\u003c/p\u003e\u003cpre\u003e Data Flow Fusion with Series Expressions in Haskell\n Ben Lippmeier, Manuel Chakravarty, Gabriele Keller, Amos Robinson.\n Haskell Sympoium, 2013.\n\u003c/pre\u003e\u003cp\u003e\u003ca\u003ehttp://www.cse.unsw.edu.au/~benl/papers/flow/flow-Haskell2013.pdf\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe user-facing API is defined by the repa-series package.\n\u003c/p\u003e\u003cp\u003eTo run the transform on a program do something like:\n\u003c/p\u003e\u003cpre\u003e ghc -O2 -fplugin=Data.Array.Repa.Plugin --make Main.hs\n\u003c/pre\u003e\u003cp\u003eTo see intermediate code as it is transformed, pass the \u003ccode\u003edump\u003c/code\u003e flag to the plugin.\n\u003c/p\u003e\u003cpre\u003e ghc -O2 -fplugin=Data.Array.Repa.Plugin -fplugin-opt Data.Array.Repa.Plugin:dump --make Main.hs\n\u003c/pre\u003e\u003cp\u003eThere is example code at: \u003ca\u003ehttp://code.ouroborus.net/repa/repa-head/repa-plugin/test/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis is an EXPERIMENTAL implementation that some CURRENT LIMITATIONS:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Only supports Series of element types \u003ccode\u003eInt\u003c/code\u003e and (\u003ccode\u003eInt\u003c/code\u003e, \u003ccode\u003eInt\u003c/code\u003e). \n     You can't yet fuse code using the \u003ccode\u003eFloat\u003c/code\u003e type, or anything else.\n\u003c/li\u003e\u003cli\u003e You can't use case-expressions in the worker functions passed\n     to combinators like \u003ccode\u003emap\u003c/code\u003e and \u003ccode\u003efold\u003c/code\u003e. \n\u003c/li\u003e\u003cli\u003e The plugin lacks support for many common list functions, \n     such as \u003ccode\u003eappend\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your code cannot be fused then you may get an unhelpful error message.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Repa.Plugin",
        "fct-package": "repa-plugin",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Repa-Plugin.html",
        "fct-type": "module",
        "title": "Plugin"
      },
      "index": {
        "description": "This GHC plugin performs Data Flow Fusion as described in the following paper Data Flow Fusion with Series Expressions in Haskell Ben Lippmeier Manuel Chakravarty Gabriele Keller Amos Robinson Haskell Sympoium http www.cse.unsw.edu.au benl papers flow flow-Haskell2013.pdf The user-facing API is defined by the repa-series package To run the transform on program do something like ghc O2 fplugin Data.Array.Repa.Plugin make Main.hs To see intermediate code as it is transformed pass the dump flag to the plugin ghc O2 fplugin Data.Array.Repa.Plugin fplugin-opt Data.Array.Repa.Plugin dump make Main.hs There is example code at http code.ouroborus.net repa repa-head repa-plugin test This is an EXPERIMENTAL implementation that some CURRENT LIMITATIONS Only supports Series of element types Int and Int Int You can yet fuse code using the Float type or anything else You can use case-expressions in the worker functions passed to combinators like map and fold The plugin lacks support for many common list functions such as append If your code cannot be fused then you may get an unhelpful error message",
        "hierarchy": "Data Array Repa Plugin",
        "module": "Data.Array.Repa.Plugin",
        "name": "Plugin",
        "normalized": "",
        "package": "repa-plugin",
        "partial": "Plugin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/repa-plugin/docs/Data-Array-Repa-Plugin.html#v:plugin",
      "description": {
        "fct-descr": "\u003cp\u003eThe Data Flow Fusion plugin.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Repa.Plugin",
        "fct-package": "repa-plugin",
        "fct-signature": "Plugin",
        "fct-source": "src/Data-Array-Repa-Plugin.html#plugin",
        "fct-type": "function",
        "title": "plugin"
      },
      "index": {
        "description": "The Data Flow Fusion plugin",
        "hierarchy": "Data Array Repa Plugin",
        "module": "Data.Array.Repa.Plugin",
        "name": "plugin",
        "normalized": "",
        "package": "repa-plugin",
        "partial": "",
        "signature": ""
      }
    }
  }
]