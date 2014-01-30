[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-plugins/docs/System-Plugins.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe recommended interface, because it is safer (guaranteed not to crash as long\n   as modules have not been mis-installed somehow), is \u003ccode\u003e\u003ca\u003eloadDynamic\u003c/a\u003e\u003c/code\u003e.  For\n   versatility's sake, \u003ccode\u003e\u003ca\u003eunsafeLoad\u003c/a\u003e\u003c/code\u003e is provided as well, but caveat codor!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Plugins",
        "fct-package": "direct-plugins",
        "fct-signature": "module",
        "fct-source": "src/System-Plugins.html",
        "fct-type": "module",
        "title": "Plugins"
      },
      "index": {
        "description": "The recommended interface because it is safer guaranteed not to crash as long as modules have not been mis-installed somehow is loadDynamic For versatility sake unsafeLoad is provided as well but caveat codor",
        "hierarchy": "System Plugins",
        "module": "System.Plugins",
        "name": "Plugins",
        "normalized": "",
        "package": "direct-plugins",
        "partial": "Plugins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-plugins/docs/System-Plugins.html#v:loadDynamic",
      "description": {
        "fct-descr": "\u003cp\u003eResolves the specified symbol to a Dynamic.  This means first parsing the installed\n   .hi file for the package containing the symbol to verify that the symbol is in fact\n   a Dynamic, then, if it is, linking the package if it is not already linked,\n   extracting the value of that symbol, and returning that value.  Unlike \u003ccode\u003eload\u003c/code\u003e, this\n   function should be \"perfectly safe\", not crashing even if the symbol is not\n   actually of the expected type.\n\u003c/p\u003e\u003cp\u003eFour error conditions are detected and handled nicely, returning\n   \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e:  The package does not exist; the package does not contain the given\n   module; the module does not contain a symbol by the given name; or the symbol's type\n   is not \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs a limitation which may be relaxed in a future version, note that re-exports are\n   not chased; thus for example it is not possible to find the symbol\n   \u003ccode\u003ebase:Prelude.sum\u003c/code\u003e, because that symbol is actually defined in \u003ccode\u003ebase:Data.List\u003c/code\u003e.\n   (Also because that symbol is not a \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "System.Plugins",
        "fct-package": "direct-plugins",
        "fct-signature": "(String, String, String)-\u003e IO (Maybe Dynamic)",
        "fct-type": "function",
        "title": "loadDynamic"
      },
      "index": {
        "description": "Resolves the specified symbol to Dynamic This means first parsing the installed hi file for the package containing the symbol to verify that the symbol is in fact Dynamic then if it is linking the package if it is not already linked extracting the value of that symbol and returning that value Unlike load this function should be perfectly safe not crashing even if the symbol is not actually of the expected type Four error conditions are detected and handled nicely returning Nothing The package does not exist the package does not contain the given module the module does not contain symbol by the given name or the symbol type is not Dynamic As limitation which may be relaxed in future version note that re-exports are not chased thus for example it is not possible to find the symbol base Prelude.sum because that symbol is actually defined in base Data.List Also because that symbol is not Dynamic",
        "hierarchy": "System Plugins",
        "module": "System.Plugins",
        "name": "loadDynamic",
        "normalized": "(String,String,String)-\u003eIO(Maybe Dynamic)",
        "package": "direct-plugins",
        "partial": "Dynamic",
        "signature": "(String,String,String)-\u003eIO(Maybe Dynamic)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/direct-plugins/docs/System-Plugins.html#v:unsafeLoad",
      "description": {
        "fct-descr": "\u003cp\u003eResolves the specified symbol to any given type.  This means linking the package\n   containing it if it is not already linked, extracting the value of that symbol,\n   and returning that value.  Because a call is made to \u003ccode\u003e\u003ca\u003eunsafeCoerce\u003c/a\u003e\u003c/code\u003e, the behavior\n   is unpredictable (most likely an immediate crash) if the symbol is not actually of\n   the expected type.  Because \u003ccode\u003eload\u003c/code\u003e has no a priori way to know the type, you must\n   be certain to provide adequate type information in the caller, ie by giving a\n   type signature.\n\u003c/p\u003e\u003cp\u003eThree error conditions are detected and handled nicely, returning\n   \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e:  The package does not exist; the package does not contain the given\n   module; or the module does not contain a symbol by the given name.\n\u003c/p\u003e\u003cp\u003eAs a limitation which may be relaxed in a future version, note that re-exports\n   are not chased; thus for example it is not possible to find the symbol\n   \u003ccode\u003ebase:Prelude.sum\u003c/code\u003e, because that symbol is actually defined in \u003ccode\u003ebase:Data.List\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Plugins",
        "fct-package": "direct-plugins",
        "fct-signature": "(String, String, String)-\u003e IO (Maybe a)",
        "fct-type": "function",
        "title": "unsafeLoad"
      },
      "index": {
        "description": "Resolves the specified symbol to any given type This means linking the package containing it if it is not already linked extracting the value of that symbol and returning that value Because call is made to unsafeCoerce the behavior is unpredictable most likely an immediate crash if the symbol is not actually of the expected type Because load has no priori way to know the type you must be certain to provide adequate type information in the caller ie by giving type signature Three error conditions are detected and handled nicely returning Nothing The package does not exist the package does not contain the given module or the module does not contain symbol by the given name As limitation which may be relaxed in future version note that re-exports are not chased thus for example it is not possible to find the symbol base Prelude.sum because that symbol is actually defined in base Data.List",
        "hierarchy": "System Plugins",
        "module": "System.Plugins",
        "name": "unsafeLoad",
        "normalized": "(String,String,String)-\u003eIO(Maybe a)",
        "package": "direct-plugins",
        "partial": "Load",
        "signature": "(String,String,String)-\u003eIO(Maybe a)"
      }
    }
  }
]