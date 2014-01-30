[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-loader-dynamic/docs/Snap-Loader-Dynamic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module includes the machinery necessary to use hint to load\n action code dynamically.  It includes a Template Haskell function\n to gather the necessary compile-time information about code\n location, compiler arguments, etc, and bind that information into\n the calls to the dynamic loader.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Loader.Dynamic",
        "fct-package": "snap-loader-dynamic",
        "fct-signature": "module",
        "fct-source": "src/Snap-Loader-Dynamic.html",
        "fct-type": "module",
        "title": "Dynamic"
      },
      "index": {
        "description": "This module includes the machinery necessary to use hint to load action code dynamically It includes Template Haskell function to gather the necessary compile-time information about code location compiler arguments etc and bind that information into the calls to the dynamic loader",
        "hierarchy": "Snap Loader Dynamic",
        "module": "Snap.Loader.Dynamic",
        "name": "Dynamic",
        "normalized": "",
        "package": "snap-loader-dynamic",
        "partial": "Dynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-loader-dynamic/docs/Snap-Loader-Dynamic.html#v:loadSnapTH",
      "description": {
        "fct-descr": "\u003cp\u003eThis function derives all the information necessary to use the interpreter\n from the compile-time environment, and compiles it in to the generated code.\n\u003c/p\u003e\u003cp\u003eThis could be considered a TH wrapper around a function\n\u003c/p\u003e\u003cpre\u003e loadSnap :: Typeable a =\u003e IO a -\u003e (a -\u003e IO (Snap (), IO ()))\n                        -\u003e [String] -\u003e IO (a, Snap (), IO ())\n\u003c/pre\u003e\u003cp\u003ewith a magical implementation. The [String] argument is a list of\n directories to watch for updates to trigger a reloading. Directories\n containing code should be automatically picked up by this splice.\n\u003c/p\u003e\u003cp\u003eThe generated splice executes the initialiser once, sets up the interpreter\n for the load function, and returns the initializer's result along with the\n interpreter's proxy handler and cleanup actions. The behavior of the proxy\n actions will change to reflect changes in the watched files, reinterpreting\n the load function as needed and applying it to the initializer result.\n\u003c/p\u003e\u003cp\u003eThis will handle reloading the application successfully in most cases. The\n cases in which it is certain to fail are those involving changing the types\n of the initializer or the load function, or changing the compiler options\n required, such as by changing/adding dependencies in the project's .cabal\n file. In those cases, a full recompile will be needed.\n\u003c/p\u003e",
        "fct-module": "Snap.Loader.Dynamic",
        "fct-package": "snap-loader-dynamic",
        "fct-signature": "Q Exp-\u003e Name-\u003e [String]-\u003e Q Exp",
        "fct-type": "function",
        "title": "loadSnapTH"
      },
      "index": {
        "description": "This function derives all the information necessary to use the interpreter from the compile-time environment and compiles it in to the generated code This could be considered TH wrapper around function loadSnap Typeable IO IO Snap IO String IO Snap IO with magical implementation The String argument is list of directories to watch for updates to trigger reloading Directories containing code should be automatically picked up by this splice The generated splice executes the initialiser once sets up the interpreter for the load function and returns the initializer result along with the interpreter proxy handler and cleanup actions The behavior of the proxy actions will change to reflect changes in the watched files reinterpreting the load function as needed and applying it to the initializer result This will handle reloading the application successfully in most cases The cases in which it is certain to fail are those involving changing the types of the initializer or the load function or changing the compiler options required such as by changing adding dependencies in the project cabal file In those cases full recompile will be needed",
        "hierarchy": "Snap Loader Dynamic",
        "module": "Snap.Loader.Dynamic",
        "name": "loadSnapTH",
        "normalized": "Q Exp-\u003eName-\u003e[String]-\u003eQ Exp",
        "package": "snap-loader-dynamic",
        "partial": "Snap TH",
        "signature": "Q Exp-\u003eName-\u003e[String]-\u003eQ Exp"
      }
    }
  }
]