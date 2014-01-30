[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Config.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module specifies the default configuration values for xmonad.\n\u003c/p\u003e\u003cp\u003eDO NOT MODIFY THIS FILE!  It won't work.  You may configure xmonad\n by providing your own \u003ccode\u003e~/.xmonad/xmonad.hs\u003c/code\u003e that overrides\n specific fields in \u003ccode\u003e\u003ca\u003edefaultConfig\u003c/a\u003e\u003c/code\u003e.  For a starting point, you can\n copy the \u003ccode\u003exmonad.hs\u003c/code\u003e found in the \u003ccode\u003eman\u003c/code\u003e directory, or look at\n examples on the xmonad wiki.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "XMonad.Config",
        "fct-package": "xmonad",
        "fct-signature": "module",
        "fct-source": "src/XMonad-Config.html",
        "fct-type": "module",
        "title": "Config"
      },
      "index": {
        "description": "This module specifies the default configuration values for xmonad DO NOT MODIFY THIS FILE It won work You may configure xmonad by providing your own xmonad xmonad.hs that overrides specific fields in defaultConfig For starting point you can copy the xmonad.hs found in the man directory or look at examples on the xmonad wiki",
        "hierarchy": "XMonad Config",
        "module": "XMonad.Config",
        "name": "Config",
        "normalized": "",
        "package": "xmonad",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Config.html#v:defaultConfig",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of configuration values itself\n\u003c/p\u003e",
        "fct-module": "XMonad.Config",
        "fct-package": "xmonad",
        "fct-signature": "XConfig (Choose Tall (Choose (Mirror Tall) Full))",
        "fct-source": "src/XMonad-Config.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "The default set of configuration values itself",
        "hierarchy": "XMonad Config",
        "module": "XMonad.Config",
        "name": "defaultConfig",
        "normalized": "",
        "package": "xmonad",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad, a state monad transformer over \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, for the window\n manager state, and support routines.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "module",
        "fct-source": "src/XMonad-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "The monad state monad transformer over IO for the window manager state and support routines",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "Core",
        "normalized": "",
        "package": "xmonad",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:ExtensionClass",
      "description": {
        "fct-descr": "\u003cp\u003eEvery module must make the data it wants to store\n an instance of this class.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: initialValue\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "class",
        "fct-source": "src/XMonad-Core.html#ExtensionClass",
        "fct-type": "class",
        "title": "ExtensionClass"
      },
      "index": {
        "description": "Every module must make the data it wants to store an instance of this class Minimal complete definition initialValue",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "ExtensionClass",
        "normalized": "",
        "package": "xmonad",
        "partial": "Extension Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:Layout",
      "description": {
        "fct-descr": "\u003cp\u003eAn existential type that can hold any object that is in \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003eLayoutClass\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Core.html#Layout",
        "fct-type": "data",
        "title": "Layout"
      },
      "index": {
        "description": "An existential type that can hold any object that is in Read and LayoutClass",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "Layout",
        "normalized": "",
        "package": "xmonad",
        "partial": "Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:LayoutClass",
      "description": {
        "fct-descr": "\u003cp\u003eEvery layout must be an instance of \u003ccode\u003e\u003ca\u003eLayoutClass\u003c/a\u003e\u003c/code\u003e, which defines\n the basic layout operations along with a sensible default for each.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003erunLayout\u003c/a\u003e\u003c/code\u003e || ((\u003ccode\u003e\u003ca\u003edoLayout\u003c/a\u003e\u003c/code\u003e || \u003ccode\u003e\u003ca\u003epureLayout\u003c/a\u003e\u003c/code\u003e) && \u003ccode\u003e\u003ca\u003eemptyLayout\u003c/a\u003e\u003c/code\u003e), and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e || \u003ccode\u003e\u003ca\u003epureMessage\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eYou should also strongly consider implementing \u003ccode\u003e\u003ca\u003edescription\u003c/a\u003e\u003c/code\u003e,\n although it is not required.\n\u003c/p\u003e\u003cp\u003eNote that any code which \u003cem\u003euses\u003c/em\u003e \u003ccode\u003e\u003ca\u003eLayoutClass\u003c/a\u003e\u003c/code\u003e methods should only\n ever call \u003ccode\u003e\u003ca\u003erunLayout\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003edescription\u003c/a\u003e\u003c/code\u003e!  In\n other words, the only calls to \u003ccode\u003e\u003ca\u003edoLayout\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epureMessage\u003c/a\u003e\u003c/code\u003e, and other\n such methods should be from the default implementations of\n \u003ccode\u003e\u003ca\u003erunLayout\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e, and so on.  This ensures that the\n proper methods will be used, regardless of the particular methods\n that any \u003ccode\u003e\u003ca\u003eLayoutClass\u003c/a\u003e\u003c/code\u003e instance chooses to define.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "class",
        "fct-source": "src/XMonad-Core.html#LayoutClass",
        "fct-type": "class",
        "title": "LayoutClass"
      },
      "index": {
        "description": "Every layout must be an instance of LayoutClass which defines the basic layout operations along with sensible default for each Minimal complete definition runLayout doLayout pureLayout emptyLayout and handleMessage pureMessage You should also strongly consider implementing description although it is not required Note that any code which uses LayoutClass methods should only ever call runLayout handleMessage and description In other words the only calls to doLayout pureMessage and other such methods should be from the default implementations of runLayout handleMessage and so on This ensures that the proper methods will be used regardless of the particular methods that any LayoutClass instance chooses to define",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "LayoutClass",
        "normalized": "",
        "package": "xmonad",
        "partial": "Layout Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:LayoutMessages",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLayoutMessages\u003c/a\u003e\u003c/code\u003e are core messages that all layouts (especially stateful\n layouts) should consider handling.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Core.html#LayoutMessages",
        "fct-type": "data",
        "title": "LayoutMessages"
      },
      "index": {
        "description": "LayoutMessages are core messages that all layouts especially stateful layouts should consider handling",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "LayoutMessages",
        "normalized": "",
        "package": "xmonad",
        "partial": "Layout Messages",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:ManageHook",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "type",
        "fct-source": "src/XMonad-Core.html#ManageHook",
        "fct-type": "type",
        "title": "ManageHook"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "ManageHook",
        "normalized": "",
        "package": "xmonad",
        "partial": "Manage Hook",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003eBased on ideas in /An Extensible Dynamically-Typed Hierarchy of\n Exceptions/, Simon Marlow, 2006. Use extensible messages to the\n \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e handler.\n\u003c/p\u003e\u003cp\u003eUser-extensible messages must be a member of this class.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "class",
        "fct-source": "src/XMonad-Core.html#Message",
        "fct-type": "class",
        "title": "Message"
      },
      "index": {
        "description": "Based on ideas in An Extensible Dynamically-Typed Hierarchy of Exceptions Simon Marlow Use extensible messages to the handleMessage handler User-extensible messages must be member of this class",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "Message",
        "normalized": "",
        "package": "xmonad",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:Query",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "newtype",
        "fct-source": "src/XMonad-Core.html#Query",
        "fct-type": "newtype",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "Query",
        "normalized": "",
        "package": "xmonad",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:ScreenDetail",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRectangle\u003c/a\u003e\u003c/code\u003e with screen dimensions\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Core.html#ScreenDetail",
        "fct-type": "data",
        "title": "ScreenDetail"
      },
      "index": {
        "description": "The Rectangle with screen dimensions",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "ScreenDetail",
        "normalized": "",
        "package": "xmonad",
        "partial": "Screen Detail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:ScreenId",
      "description": {
        "fct-descr": "\u003cp\u003ePhysical screen indices\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "newtype",
        "fct-source": "src/XMonad-Core.html#ScreenId",
        "fct-type": "newtype",
        "title": "ScreenId"
      },
      "index": {
        "description": "Physical screen indices",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "ScreenId",
        "normalized": "",
        "package": "xmonad",
        "partial": "Screen Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:SomeMessage",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapped value of some type in the \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Core.html#SomeMessage",
        "fct-type": "data",
        "title": "SomeMessage"
      },
      "index": {
        "description": "wrapped value of some type in the Message class",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "SomeMessage",
        "normalized": "",
        "package": "xmonad",
        "partial": "Some Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:StateExtension",
      "description": {
        "fct-descr": "\u003cp\u003eExistential type to store a state extension.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Core.html#StateExtension",
        "fct-type": "data",
        "title": "StateExtension"
      },
      "index": {
        "description": "Existential type to store state extension",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "StateExtension",
        "normalized": "",
        "package": "xmonad",
        "partial": "State Extension",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:Typeable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Typeable"
      },
      "index": {
        "description": "The class Typeable allows concrete representation of type to be calculated",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "Typeable",
        "normalized": "",
        "package": "xmonad",
        "partial": "Typeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:WindowSet",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "type",
        "fct-source": "src/XMonad-Core.html#WindowSet",
        "fct-type": "type",
        "title": "WindowSet"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "WindowSet",
        "normalized": "",
        "package": "xmonad",
        "partial": "Window Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:WindowSpace",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "type",
        "fct-source": "src/XMonad-Core.html#WindowSpace",
        "fct-type": "type",
        "title": "WindowSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "WindowSpace",
        "normalized": "",
        "package": "xmonad",
        "partial": "Window Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:WorkspaceId",
      "description": {
        "fct-descr": "\u003cp\u003eVirtual workspace indices\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "type",
        "fct-source": "src/XMonad-Core.html#WorkspaceId",
        "fct-type": "type",
        "title": "WorkspaceId"
      },
      "index": {
        "description": "Virtual workspace indices",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "WorkspaceId",
        "normalized": "",
        "package": "xmonad",
        "partial": "Workspace Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:X",
      "description": {
        "fct-descr": "\u003cp\u003eThe X monad, \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e transformers over \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n encapsulating the window manager configuration and state,\n respectively.\n\u003c/p\u003e\u003cp\u003eDynamic components may be retrieved with \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, static components\n with \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e. With newtype deriving we get readers and state monads\n instantiated on \u003ccode\u003e\u003ca\u003eXConf\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eXState\u003c/a\u003e\u003c/code\u003e automatically.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Core.html#X",
        "fct-type": "data",
        "title": "X"
      },
      "index": {
        "description": "The monad ReaderT and StateT transformers over IO encapsulating the window manager configuration and state respectively Dynamic components may be retrieved with get static components with ask With newtype deriving we get readers and state monads instantiated on XConf and XState automatically",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "X",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:XConf",
      "description": {
        "fct-descr": "\u003cp\u003eXConf, the (read-only) window manager configuration.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Core.html#XConf",
        "fct-type": "data",
        "title": "XConf"
      },
      "index": {
        "description": "XConf the read-only window manager configuration",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "XConf",
        "normalized": "",
        "package": "xmonad",
        "partial": "XConf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:XConfig",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "data",
        "title": "XConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "XConfig",
        "normalized": "",
        "package": "xmonad",
        "partial": "XConfig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:XState",
      "description": {
        "fct-descr": "\u003cp\u003eXState, the (mutable) window manager state.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Core.html#XState",
        "fct-type": "data",
        "title": "XState"
      },
      "index": {
        "description": "XState the mutable window manager state",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "XState",
        "normalized": "",
        "package": "xmonad",
        "partial": "XState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:Hide",
      "description": {
        "fct-descr": "\u003cp\u003esent when a layout becomes non-visible\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "Hide",
        "fct-source": "src/XMonad-Core.html#LayoutMessages",
        "fct-type": "function",
        "title": "Hide"
      },
      "index": {
        "description": "sent when layout becomes non-visible",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "Hide",
        "normalized": "",
        "package": "xmonad",
        "partial": "Hide",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:Layout",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "Layout (l a)",
        "fct-source": "src/XMonad-Core.html#Layout",
        "fct-type": "function",
        "title": "Layout"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "Layout",
        "normalized": "",
        "package": "xmonad",
        "partial": "Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:PersistentExtension",
      "description": {
        "fct-descr": "\u003cp\u003ePersistent extension\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "PersistentExtension a",
        "fct-source": "src/XMonad-Core.html#StateExtension",
        "fct-type": "function",
        "title": "PersistentExtension"
      },
      "index": {
        "description": "Persistent extension",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "PersistentExtension",
        "normalized": "",
        "package": "xmonad",
        "partial": "Persistent Extension",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:Query",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "Query (ReaderT Window X a)",
        "fct-source": "src/XMonad-Core.html#Query",
        "fct-type": "function",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "Query",
        "normalized": "",
        "package": "xmonad",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:ReleaseResources",
      "description": {
        "fct-descr": "\u003cp\u003esent when xmonad is exiting or restarting\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "ReleaseResources",
        "fct-source": "src/XMonad-Core.html#LayoutMessages",
        "fct-type": "function",
        "title": "ReleaseResources"
      },
      "index": {
        "description": "sent when xmonad is exiting or restarting",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "ReleaseResources",
        "normalized": "",
        "package": "xmonad",
        "partial": "Release Resources",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:S",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "S Int",
        "fct-source": "src/XMonad-Core.html#ScreenId",
        "fct-type": "function",
        "title": "S"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "S",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:SD",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "SD",
        "fct-source": "src/XMonad-Core.html#ScreenDetail",
        "fct-type": "function",
        "title": "SD"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "SD",
        "normalized": "",
        "package": "xmonad",
        "partial": "SD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:SomeMessage",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "SomeMessage a",
        "fct-source": "src/XMonad-Core.html#SomeMessage",
        "fct-type": "function",
        "title": "SomeMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "SomeMessage",
        "normalized": "",
        "package": "xmonad",
        "partial": "Some Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:StateExtension",
      "description": {
        "fct-descr": "\u003cp\u003eNon-persistent state extension\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "StateExtension a",
        "fct-source": "src/XMonad-Core.html#StateExtension",
        "fct-type": "function",
        "title": "StateExtension"
      },
      "index": {
        "description": "Non-persistent state extension",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "StateExtension",
        "normalized": "",
        "package": "xmonad",
        "partial": "State Extension",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:XConf",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "XConf",
        "fct-source": "src/XMonad-Core.html#XConf",
        "fct-type": "function",
        "title": "XConf"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "XConf",
        "normalized": "",
        "package": "xmonad",
        "partial": "XConf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:XConfig",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "XConfig",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "XConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "XConfig",
        "normalized": "",
        "package": "xmonad",
        "partial": "XConfig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:XState",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "XState",
        "fct-source": "src/XMonad-Core.html#XState",
        "fct-type": "function",
        "title": "XState"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "XState",
        "normalized": "",
        "package": "xmonad",
        "partial": "XState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:atom_WM_DELETE_WINDOW",
      "description": {
        "fct-descr": "\u003cp\u003eCommon non-predefined atoms\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "X Atom",
        "fct-source": "src/XMonad-Core.html#atom_WM_DELETE_WINDOW",
        "fct-type": "function",
        "title": "atom_WM_DELETE_WINDOW"
      },
      "index": {
        "description": "Common non-predefined atoms",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "atom_WM_DELETE_WINDOW",
        "normalized": "",
        "package": "xmonad",
        "partial": "WM DELETE WINDOW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:atom_WM_PROTOCOLS",
      "description": {
        "fct-descr": "\u003cp\u003eCommon non-predefined atoms\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "X Atom",
        "fct-source": "src/XMonad-Core.html#atom_WM_PROTOCOLS",
        "fct-type": "function",
        "title": "atom_WM_PROTOCOLS"
      },
      "index": {
        "description": "Common non-predefined atoms",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "atom_WM_PROTOCOLS",
        "normalized": "",
        "package": "xmonad",
        "partial": "WM PROTOCOLS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:atom_WM_STATE",
      "description": {
        "fct-descr": "\u003cp\u003eCommon non-predefined atoms\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "X Atom",
        "fct-source": "src/XMonad-Core.html#atom_WM_STATE",
        "fct-type": "function",
        "title": "atom_WM_STATE"
      },
      "index": {
        "description": "Common non-predefined atoms",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "atom_WM_STATE",
        "normalized": "",
        "package": "xmonad",
        "partial": "WM STATE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:atom_WM_TAKE_FOCUS",
      "description": {
        "fct-descr": "\u003cp\u003eCommon non-predefined atoms\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "X Atom",
        "fct-source": "src/XMonad-Core.html#atom_WM_TAKE_FOCUS",
        "fct-type": "function",
        "title": "atom_WM_TAKE_FOCUS"
      },
      "index": {
        "description": "Common non-predefined atoms",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "atom_WM_TAKE_FOCUS",
        "normalized": "",
        "package": "xmonad",
        "partial": "WM TAKE FOCUS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:borderWidth",
      "description": {
        "fct-descr": "\u003cp\u003eThe border width\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!Dimension",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "borderWidth"
      },
      "index": {
        "description": "The border width",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "borderWidth",
        "normalized": "",
        "package": "xmonad",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:buttonActions",
      "description": {
        "fct-descr": "\u003cp\u003ea mapping of button presses to actions\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(Map (KeyMask, Button) (Window -\u003e X ()))",
        "fct-source": "src/XMonad-Core.html#XConf",
        "fct-type": "function",
        "title": "buttonActions"
      },
      "index": {
        "description": "mapping of button presses to actions",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "buttonActions",
        "normalized": "(Map(KeyMask,Button)(Window-\u003eX()))",
        "package": "xmonad",
        "partial": "Actions",
        "signature": "(Map(KeyMask,Button)(Window-\u003eX()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:catchIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action into the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad.  If the action results in an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n exception, log the exception to stderr and continue normal execution.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "IO () -\u003e m ()",
        "fct-source": "src/XMonad-Core.html#catchIO",
        "fct-type": "function",
        "title": "catchIO"
      },
      "index": {
        "description": "Lift an IO action into the monad If the action results in an IO exception log the exception to stderr and continue normal execution",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "catchIO",
        "normalized": "IO()-\u003ea()",
        "package": "xmonad",
        "partial": "IO",
        "signature": "IO()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:catchX",
      "description": {
        "fct-descr": "\u003cp\u003eRun in the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad, and in case of exception, and catch it and log it\n to stderr, and run the error case.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "X a -\u003e X a -\u003e X a",
        "fct-source": "src/XMonad-Core.html#catchX",
        "fct-type": "function",
        "title": "catchX"
      },
      "index": {
        "description": "Run in the monad and in case of exception and catch it and log it to stderr and run the error case",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "catchX",
        "normalized": "X a-\u003eX a-\u003eX a",
        "package": "xmonad",
        "partial": "",
        "signature": "X a-\u003eX a-\u003eX a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:clickJustFocuses",
      "description": {
        "fct-descr": "\u003cp\u003eFalse to make a click which changes focus to be additionally passed to the window\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!Bool",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "clickJustFocuses"
      },
      "index": {
        "description": "False to make click which changes focus to be additionally passed to the window",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "clickJustFocuses",
        "normalized": "",
        "package": "xmonad",
        "partial": "Just Focuses",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:config",
      "description": {
        "fct-descr": "\u003cp\u003einitial user configuration\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(XConfig Layout)",
        "fct-source": "src/XMonad-Core.html#XConf",
        "fct-type": "function",
        "title": "config"
      },
      "index": {
        "description": "initial user configuration",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "config",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:currentEvent",
      "description": {
        "fct-descr": "\u003cp\u003eevent currently being processed\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(Maybe Event)",
        "fct-source": "src/XMonad-Core.html#XConf",
        "fct-type": "function",
        "title": "currentEvent"
      },
      "index": {
        "description": "event currently being processed",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "currentEvent",
        "normalized": "",
        "package": "xmonad",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:description",
      "description": {
        "fct-descr": "\u003cp\u003eThis should be a human-readable string that is used when\n selecting layouts by name.  The default implementation is\n \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e, which is in some cases a poor default.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "layout a -\u003e String",
        "fct-source": "src/XMonad-Core.html#description",
        "fct-type": "method",
        "title": "description"
      },
      "index": {
        "description": "This should be human-readable string that is used when selecting layouts by name The default implementation is show which is in some cases poor default",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "description",
        "normalized": "a b-\u003eString",
        "package": "xmonad",
        "partial": "",
        "signature": "layout a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:display",
      "description": {
        "fct-descr": "\u003cp\u003ethe X11 display\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "Display",
        "fct-source": "src/XMonad-Core.html#XConf",
        "fct-type": "function",
        "title": "display"
      },
      "index": {
        "description": "the X11 display",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "display",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:doLayout",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eRectangle\u003c/a\u003e\u003c/code\u003e in which to place the windows, and a \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e\n of windows, return a list of windows and their corresponding\n Rectangles.  If an element is not given a Rectangle by\n \u003ccode\u003e\u003ca\u003edoLayout\u003c/a\u003e\u003c/code\u003e, then it is not shown on screen.  The order of\n windows in this list should be the desired stacking order.\n\u003c/p\u003e\u003cp\u003eAlso possibly return a modified layout (by returning \u003ccode\u003eJust\n newLayout\u003c/code\u003e), if this layout needs to be modified (e.g. if it\n keeps track of some sort of state).  Return \u003ccode\u003eNothing\u003c/code\u003e if the\n layout does not need to be modified.\n\u003c/p\u003e\u003cp\u003eLayouts which do not need access to the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad (\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, window\n manager state, or configuration) and do not keep track of their\n own state should implement \u003ccode\u003e\u003ca\u003epureLayout\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003edoLayout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "layout a -\u003e Rectangle -\u003e Stack a -\u003e X ([(a, Rectangle)], Maybe (layout a))",
        "fct-source": "src/XMonad-Core.html#doLayout",
        "fct-type": "method",
        "title": "doLayout"
      },
      "index": {
        "description": "Given Rectangle in which to place the windows and Stack of windows return list of windows and their corresponding Rectangles If an element is not given Rectangle by doLayout then it is not shown on screen The order of windows in this list should be the desired stacking order Also possibly return modified layout by returning Just newLayout if this layout needs to be modified e.g if it keeps track of some sort of state Return Nothing if the layout does not need to be modified Layouts which do not need access to the monad IO window manager state or configuration and do not keep track of their own state should implement pureLayout instead of doLayout",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "doLayout",
        "normalized": "a b-\u003eRectangle-\u003eStack b-\u003eX([(b,Rectangle)],Maybe(a b))",
        "package": "xmonad",
        "partial": "Layout",
        "signature": "layout a-\u003eRectangle-\u003eStack a-\u003eX([(a,Rectangle)],Maybe(layout a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:dragging",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(Maybe (Position -\u003e Position -\u003e X (), X ()))",
        "fct-source": "src/XMonad-Core.html#XState",
        "fct-type": "function",
        "title": "dragging"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "dragging",
        "normalized": "(Maybe(Position-\u003ePosition-\u003eX(),X()))",
        "package": "xmonad",
        "partial": "",
        "signature": "(Maybe(Position-\u003ePosition-\u003eX(),X()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:emptyLayout",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eemptyLayout\u003c/a\u003e\u003c/code\u003e is called when there are no windows.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "layout a -\u003e Rectangle -\u003e X ([(a, Rectangle)], Maybe (layout a))",
        "fct-source": "src/XMonad-Core.html#emptyLayout",
        "fct-type": "method",
        "title": "emptyLayout"
      },
      "index": {
        "description": "emptyLayout is called when there are no windows",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "emptyLayout",
        "normalized": "a b-\u003eRectangle-\u003eX([(b,Rectangle)],Maybe(a b))",
        "package": "xmonad",
        "partial": "Layout",
        "signature": "layout a-\u003eRectangle-\u003eX([(a,Rectangle)],Maybe(layout a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:extensibleState",
      "description": {
        "fct-descr": "\u003cp\u003estores custom state information.\n\u003c/p\u003e\u003cp\u003eThe module \u003ca\u003eXMonad.Utils.ExtensibleState\u003c/a\u003e in xmonad-contrib\n provides additional information and a simple interface for using this.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(Map String (Either String StateExtension))",
        "fct-source": "src/XMonad-Core.html#XState",
        "fct-type": "function",
        "title": "extensibleState"
      },
      "index": {
        "description": "stores custom state information The module XMonad.Utils.ExtensibleState in xmonad-contrib provides additional information and simple interface for using this",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "extensibleState",
        "normalized": "",
        "package": "xmonad",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:extensionType",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies whether the state extension should be\n persistent. Setting this method to \u003ccode\u003e\u003ca\u003ePersistentExtension\u003c/a\u003e\u003c/code\u003e\n will make the stored data survive restarts, but\n requires a to be an instance of Read and Show.\n\u003c/p\u003e\u003cp\u003eIt defaults to \u003ccode\u003e\u003ca\u003eStateExtension\u003c/a\u003e\u003c/code\u003e, i.e. no persistence.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e StateExtension",
        "fct-source": "src/XMonad-Core.html#extensionType",
        "fct-type": "method",
        "title": "extensionType"
      },
      "index": {
        "description": "Specifies whether the state extension should be persistent Setting this method to PersistentExtension will make the stored data survive restarts but requires to be an instance of Read and Show It defaults to StateExtension i.e no persistence",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "extensionType",
        "normalized": "a-\u003eStateExtension",
        "package": "xmonad",
        "partial": "Type",
        "signature": "a-\u003eStateExtension"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:focusFollowsMouse",
      "description": {
        "fct-descr": "\u003cp\u003eWhether window entry events can change focus\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!Bool",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "focusFollowsMouse"
      },
      "index": {
        "description": "Whether window entry events can change focus",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "focusFollowsMouse",
        "normalized": "",
        "package": "xmonad",
        "partial": "Follows Mouse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:focusedBorder",
      "description": {
        "fct-descr": "\u003cp\u003eborder color of the focused window\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!Pixel",
        "fct-source": "src/XMonad-Core.html#XConf",
        "fct-type": "function",
        "title": "focusedBorder"
      },
      "index": {
        "description": "border color of the focused window",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "focusedBorder",
        "normalized": "",
        "package": "xmonad",
        "partial": "Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:focusedBorderColor",
      "description": {
        "fct-descr": "\u003cp\u003eFocused windows border color. Default: \"#ff0000\"\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!String",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "focusedBorderColor"
      },
      "index": {
        "description": "Focused windows border color Default ff0000",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "focusedBorderColor",
        "normalized": "",
        "package": "xmonad",
        "partial": "Border Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:fromMessage",
      "description": {
        "fct-descr": "\u003cp\u003eAnd now, unwrap a given, unknown \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e type, performing a (dynamic)\n type check on the result.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "SomeMessage -\u003e Maybe m",
        "fct-source": "src/XMonad-Core.html#fromMessage",
        "fct-type": "function",
        "title": "fromMessage"
      },
      "index": {
        "description": "And now unwrap given unknown Message type performing dynamic type check on the result",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "fromMessage",
        "normalized": "SomeMessage-\u003eMaybe a",
        "package": "xmonad",
        "partial": "Message",
        "signature": "SomeMessage-\u003eMaybe m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:getAtom",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for the common case of atom internment\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "String -\u003e X Atom",
        "fct-source": "src/XMonad-Core.html#getAtom",
        "fct-type": "function",
        "title": "getAtom"
      },
      "index": {
        "description": "Wrapper for the common case of atom internment",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "getAtom",
        "normalized": "String-\u003eX Atom",
        "package": "xmonad",
        "partial": "Atom",
        "signature": "String-\u003eX Atom"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:getXMonadDir",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the path to \u003ccode\u003e~/.xmonad\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "m String",
        "fct-source": "src/XMonad-Core.html#getXMonadDir",
        "fct-type": "function",
        "title": "getXMonadDir"
      },
      "index": {
        "description": "Return the path to xmonad",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "getXMonadDir",
        "normalized": "",
        "package": "xmonad",
        "partial": "XMonad Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:handleEventHook",
      "description": {
        "fct-descr": "\u003cp\u003eHandle an X event, returns (All True) if the default handler\n should also be run afterwards. mappend should be used for combining\n event hooks in most cases.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(Event -\u003e X All)",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "handleEventHook"
      },
      "index": {
        "description": "Handle an event returns All True if the default handler should also be run afterwards mappend should be used for combining event hooks in most cases",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "handleEventHook",
        "normalized": "(Event-\u003eX All)",
        "package": "xmonad",
        "partial": "Event Hook",
        "signature": "(Event-\u003eX All)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:handleMessage",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e performs message handling.  If\n \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003eNothing\u003c/code\u003e, then the layout did not\n respond to the message and the screen is not refreshed.\n Otherwise, \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e returns an updated layout and the\n screen is refreshed.\n\u003c/p\u003e\u003cp\u003eLayouts which do not need access to the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad to decide how\n to handle messages should implement \u003ccode\u003e\u003ca\u003epureMessage\u003c/a\u003e\u003c/code\u003e instead of\n \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e (this restricts the risk of error, and makes\n testing much easier).\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "layout a -\u003e SomeMessage -\u003e X (Maybe (layout a))",
        "fct-source": "src/XMonad-Core.html#handleMessage",
        "fct-type": "method",
        "title": "handleMessage"
      },
      "index": {
        "description": "handleMessage performs message handling If handleMessage returns Nothing then the layout did not respond to the message and the screen is not refreshed Otherwise handleMessage returns an updated layout and the screen is refreshed Layouts which do not need access to the monad to decide how to handle messages should implement pureMessage instead of handleMessage this restricts the risk of error and makes testing much easier",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "handleMessage",
        "normalized": "a b-\u003eSomeMessage-\u003eX(Maybe(a b))",
        "package": "xmonad",
        "partial": "Message",
        "signature": "layout a-\u003eSomeMessage-\u003eX(Maybe(layout a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:initialValue",
      "description": {
        "fct-descr": "\u003cp\u003eDefines an initial value for the state extension\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "a",
        "fct-source": "src/XMonad-Core.html#initialValue",
        "fct-type": "method",
        "title": "initialValue"
      },
      "index": {
        "description": "Defines an initial value for the state extension",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "initialValue",
        "normalized": "",
        "package": "xmonad",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:installSignalHandlers",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore SIGPIPE to avoid termination when a pipe is full, and SIGCHLD to\n avoid zombie processes, and clean up any extant zombie processes.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "m ()",
        "fct-source": "src/XMonad-Core.html#installSignalHandlers",
        "fct-type": "function",
        "title": "installSignalHandlers"
      },
      "index": {
        "description": "Ignore SIGPIPE to avoid termination when pipe is full and SIGCHLD to avoid zombie processes and clean up any extant zombie processes",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "installSignalHandlers",
        "normalized": "a()",
        "package": "xmonad",
        "partial": "Signal Handlers",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:io",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral utilities\n\u003c/p\u003e\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action into the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/XMonad-Core.html#io",
        "fct-type": "function",
        "title": "io"
      },
      "index": {
        "description": "General utilities Lift an IO action into the monad",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "io",
        "normalized": "IO a-\u003eb a",
        "package": "xmonad",
        "partial": "",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:isRoot",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the given window is the root window\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X Bool",
        "fct-source": "src/XMonad-Core.html#isRoot",
        "fct-type": "function",
        "title": "isRoot"
      },
      "index": {
        "description": "True if the given window is the root window",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "isRoot",
        "normalized": "Window-\u003eX Bool",
        "package": "xmonad",
        "partial": "Root",
        "signature": "Window-\u003eX Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:keyActions",
      "description": {
        "fct-descr": "\u003cp\u003ea mapping of key presses to actions\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(Map (KeyMask, KeySym) (X ()))",
        "fct-source": "src/XMonad-Core.html#XConf",
        "fct-type": "function",
        "title": "keyActions"
      },
      "index": {
        "description": "mapping of key presses to actions",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "keyActions",
        "normalized": "(Map(KeyMask,KeySym)(X()))",
        "package": "xmonad",
        "partial": "Actions",
        "signature": "(Map(KeyMask,KeySym)(X()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003eThe key binding: a map from key presses and actions\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(XConfig Layout -\u003e Map (ButtonMask, KeySym) (X ()))",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "The key binding map from key presses and actions",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "keys",
        "normalized": "(XConfig Layout-\u003eMap(ButtonMask,KeySym)(X()))",
        "package": "xmonad",
        "partial": "",
        "signature": "(XConfig Layout-\u003eMap(ButtonMask,KeySym)(X()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:layoutHook",
      "description": {
        "fct-descr": "\u003cp\u003eThe available layouts\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(l Window)",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "layoutHook"
      },
      "index": {
        "description": "The available layouts",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "layoutHook",
        "normalized": "",
        "package": "xmonad",
        "partial": "Hook",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:logHook",
      "description": {
        "fct-descr": "\u003cp\u003eThe action to perform when the windows set is changed\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(X ())",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "logHook"
      },
      "index": {
        "description": "The action to perform when the windows set is changed",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "logHook",
        "normalized": "(X())",
        "package": "xmonad",
        "partial": "Hook",
        "signature": "(X())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:manageHook",
      "description": {
        "fct-descr": "\u003cp\u003eThe action to run when a new window is opened\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!ManageHook",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "manageHook"
      },
      "index": {
        "description": "The action to run when new window is opened",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "manageHook",
        "normalized": "",
        "package": "xmonad",
        "partial": "Hook",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:mapped",
      "description": {
        "fct-descr": "\u003cp\u003ethe Set of mapped windows\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(Set Window)",
        "fct-source": "src/XMonad-Core.html#XState",
        "fct-type": "function",
        "title": "mapped"
      },
      "index": {
        "description": "the Set of mapped windows",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "mapped",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:modMask",
      "description": {
        "fct-descr": "\u003cp\u003ethe mod modifier\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!KeyMask",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "modMask"
      },
      "index": {
        "description": "the mod modifier",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "modMask",
        "normalized": "",
        "package": "xmonad",
        "partial": "Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:mouseBindings",
      "description": {
        "fct-descr": "\u003cp\u003eThe mouse bindings\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(XConfig Layout -\u003e Map (ButtonMask, Button) (Window -\u003e X ()))",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "mouseBindings"
      },
      "index": {
        "description": "The mouse bindings",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "mouseBindings",
        "normalized": "(XConfig Layout-\u003eMap(ButtonMask,Button)(Window-\u003eX()))",
        "package": "xmonad",
        "partial": "Bindings",
        "signature": "(XConfig Layout-\u003eMap(ButtonMask,Button)(Window-\u003eX()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:mouseFocused",
      "description": {
        "fct-descr": "\u003cp\u003ewas refocus caused by mouse action?\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!Bool",
        "fct-source": "src/XMonad-Core.html#XConf",
        "fct-type": "function",
        "title": "mouseFocused"
      },
      "index": {
        "description": "was refocus caused by mouse action",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "mouseFocused",
        "normalized": "",
        "package": "xmonad",
        "partial": "Focused",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:mousePosition",
      "description": {
        "fct-descr": "\u003cp\u003eposition of the mouse according to\n the event currently being processed\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(Maybe (Position, Position))",
        "fct-source": "src/XMonad-Core.html#XConf",
        "fct-type": "function",
        "title": "mousePosition"
      },
      "index": {
        "description": "position of the mouse according to the event currently being processed",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "mousePosition",
        "normalized": "(Maybe(Position,Position))",
        "package": "xmonad",
        "partial": "Position",
        "signature": "(Maybe(Position,Position))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:normalBorder",
      "description": {
        "fct-descr": "\u003cp\u003eborder color of unfocused windows\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!Pixel",
        "fct-source": "src/XMonad-Core.html#XConf",
        "fct-type": "function",
        "title": "normalBorder"
      },
      "index": {
        "description": "border color of unfocused windows",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "normalBorder",
        "normalized": "",
        "package": "xmonad",
        "partial": "Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:normalBorderColor",
      "description": {
        "fct-descr": "\u003cp\u003eNon focused windows border color. Default: \"#dddddd\"\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!String",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "normalBorderColor"
      },
      "index": {
        "description": "Non focused windows border color Default dddddd",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "normalBorderColor",
        "normalized": "",
        "package": "xmonad",
        "partial": "Border Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:numberlockMask",
      "description": {
        "fct-descr": "\u003cp\u003eThe numlock modifier\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!KeyMask",
        "fct-source": "src/XMonad-Core.html#XState",
        "fct-type": "function",
        "title": "numberlockMask"
      },
      "index": {
        "description": "The numlock modifier",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "numberlockMask",
        "normalized": "",
        "package": "xmonad",
        "partial": "Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:pureLayout",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a pure version of \u003ccode\u003e\u003ca\u003edoLayout\u003c/a\u003e\u003c/code\u003e, for cases where we\n don't need access to the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad to determine how to lay out\n the windows, and we don't need to modify the layout itself.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "layout a -\u003e Rectangle -\u003e Stack a -\u003e [(a, Rectangle)]",
        "fct-source": "src/XMonad-Core.html#pureLayout",
        "fct-type": "method",
        "title": "pureLayout"
      },
      "index": {
        "description": "This is pure version of doLayout for cases where we don need access to the monad to determine how to lay out the windows and we don need to modify the layout itself",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "pureLayout",
        "normalized": "a b-\u003eRectangle-\u003eStack b-\u003e[(b,Rectangle)]",
        "package": "xmonad",
        "partial": "Layout",
        "signature": "layout a-\u003eRectangle-\u003eStack a-\u003e[(a,Rectangle)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:pureMessage",
      "description": {
        "fct-descr": "\u003cp\u003eRespond to a message by (possibly) changing our layout, but\n taking no other action.  If the layout changes, the screen will\n be refreshed.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "layout a -\u003e SomeMessage -\u003e Maybe (layout a)",
        "fct-source": "src/XMonad-Core.html#pureMessage",
        "fct-type": "method",
        "title": "pureMessage"
      },
      "index": {
        "description": "Respond to message by possibly changing our layout but taking no other action If the layout changes the screen will be refreshed",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "pureMessage",
        "normalized": "a b-\u003eSomeMessage-\u003eMaybe(a b)",
        "package": "xmonad",
        "partial": "Message",
        "signature": "layout a-\u003eSomeMessage-\u003eMaybe(layout a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:readsLayout",
      "description": {
        "fct-descr": "\u003cp\u003eUsing the \u003ccode\u003e\u003ca\u003eLayout\u003c/a\u003e\u003c/code\u003e as a witness, parse existentially wrapped windows\n from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "Layout a -\u003e String -\u003e [(Layout a, String)]",
        "fct-source": "src/XMonad-Core.html#readsLayout",
        "fct-type": "function",
        "title": "readsLayout"
      },
      "index": {
        "description": "Using the Layout as witness parse existentially wrapped windows from String",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "readsLayout",
        "normalized": "Layout a-\u003eString-\u003e[(Layout a,String)]",
        "package": "xmonad",
        "partial": "Layout",
        "signature": "Layout a-\u003eString-\u003e[(Layout a,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:recompile",
      "description": {
        "fct-descr": "\u003cp\u003e'recompile force', recompile \u003ccode\u003e~/.xmonad/xmonad.hs\u003c/code\u003e when any of the\n following apply:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e force is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e the xmonad executable does not exist\n\u003c/li\u003e\u003cli\u003e the xmonad executable is older than xmonad.hs or any file in\n        ~/.xmonad/lib\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe -i flag is used to restrict recompilation to the xmonad.hs file only,\n and any files in the ~/.xmonad/lib directory.\n\u003c/p\u003e\u003cp\u003eCompilation errors (if any) are logged to ~/.xmonad/xmonad.errors.  If\n GHC indicates failure with a non-zero exit code, an xmessage displaying\n that file is spawned.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e is returned if there are compilation errors.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "Bool -\u003e m Bool",
        "fct-source": "src/XMonad-Core.html#recompile",
        "fct-type": "function",
        "title": "recompile"
      },
      "index": {
        "description": "recompile force recompile xmonad xmonad.hs when any of the following apply force is True the xmonad executable does not exist the xmonad executable is older than xmonad.hs or any file in xmonad lib The flag is used to restrict recompilation to the xmonad.hs file only and any files in the xmonad lib directory Compilation errors if any are logged to xmonad xmonad.errors If GHC indicates failure with non-zero exit code an xmessage displaying that file is spawned False is returned if there are compilation errors",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "recompile",
        "normalized": "Bool-\u003ea Bool",
        "package": "xmonad",
        "partial": "",
        "signature": "Bool-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:runLayout",
      "description": {
        "fct-descr": "\u003cp\u003eBy default, \u003ccode\u003e\u003ca\u003erunLayout\u003c/a\u003e\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003edoLayout\u003c/a\u003e\u003c/code\u003e if there are any\n   windows to be laid out, and \u003ccode\u003e\u003ca\u003eemptyLayout\u003c/a\u003e\u003c/code\u003e otherwise.  Most\n   instances of \u003ccode\u003e\u003ca\u003eLayoutClass\u003c/a\u003e\u003c/code\u003e probably do not need to implement\n   \u003ccode\u003e\u003ca\u003erunLayout\u003c/a\u003e\u003c/code\u003e; it is only useful for layouts which wish to make\n   use of more of the \u003ccode\u003e\u003ca\u003eWorkspace\u003c/a\u003e\u003c/code\u003e information (for example,\n   \u003ca\u003eXMonad.Layout.PerWorkspace\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "Workspace WorkspaceId (layout a) a -\u003e Rectangle -\u003e X ([(a, Rectangle)], Maybe (layout a))",
        "fct-source": "src/XMonad-Core.html#runLayout",
        "fct-type": "method",
        "title": "runLayout"
      },
      "index": {
        "description": "By default runLayout calls doLayout if there are any windows to be laid out and emptyLayout otherwise Most instances of LayoutClass probably do not need to implement runLayout it is only useful for layouts which wish to make use of more of the Workspace information for example XMonad.Layout.PerWorkspace",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "runLayout",
        "normalized": "Workspace WorkspaceId(a b)b-\u003eRectangle-\u003eX([(b,Rectangle)],Maybe(a b))",
        "package": "xmonad",
        "partial": "Layout",
        "signature": "Workspace WorkspaceId(layout a)a-\u003eRectangle-\u003eX([(a,Rectangle)],Maybe(layout a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:runOnWorkspaces",
      "description": {
        "fct-descr": "\u003cp\u003eThis is basically a map function, running a function in the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad on\n each workspace with the output of that function being the modified workspace.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "(WindowSpace -\u003e X WindowSpace) -\u003e X ()",
        "fct-source": "src/XMonad-Core.html#runOnWorkspaces",
        "fct-type": "function",
        "title": "runOnWorkspaces"
      },
      "index": {
        "description": "This is basically map function running function in the monad on each workspace with the output of that function being the modified workspace",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "runOnWorkspaces",
        "normalized": "(WindowSpace-\u003eX WindowSpace)-\u003eX()",
        "package": "xmonad",
        "partial": "On Workspaces",
        "signature": "(WindowSpace-\u003eX WindowSpace)-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:runQuery",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "Query a -\u003e Window -\u003e X a",
        "fct-source": "src/XMonad-Core.html#runQuery",
        "fct-type": "function",
        "title": "runQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "runQuery",
        "normalized": "Query a-\u003eWindow-\u003eX a",
        "package": "xmonad",
        "partial": "Query",
        "signature": "Query a-\u003eWindow-\u003eX a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:runX",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad, given a chunk of \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad code, and an initial state\n Return the result, and final state\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "XConf -\u003e XState -\u003e X a -\u003e IO (a, XState)",
        "fct-source": "src/XMonad-Core.html#runX",
        "fct-type": "function",
        "title": "runX"
      },
      "index": {
        "description": "Run the monad given chunk of monad code and an initial state Return the result and final state",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "runX",
        "normalized": "XConf-\u003eXState-\u003eX a-\u003eIO(a,XState)",
        "package": "xmonad",
        "partial": "",
        "signature": "XConf-\u003eXState-\u003eX a-\u003eIO(a,XState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:screenRect",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!Rectangle",
        "fct-source": "src/XMonad-Core.html#ScreenDetail",
        "fct-type": "function",
        "title": "screenRect"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "screenRect",
        "normalized": "",
        "package": "xmonad",
        "partial": "Rect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:spawn",
      "description": {
        "fct-descr": "\u003cp\u003espawn. Launch an external application. Specifically, it double-forks and\n runs the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e you pass as a command to /bin/sh.\n\u003c/p\u003e\u003cp\u003eNote this function assumes your locale uses utf8.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/XMonad-Core.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "spawn Launch an external application Specifically it double-forks and runs the String you pass as command to bin sh Note this function assumes your locale uses utf8",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "spawn",
        "normalized": "String-\u003ea()",
        "package": "xmonad",
        "partial": "",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:spawnPID",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e, but returns the \u003ccode\u003e\u003ca\u003eProcessID\u003c/a\u003e\u003c/code\u003e of the launched application\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "String -\u003e m ProcessID",
        "fct-source": "src/XMonad-Core.html#spawnPID",
        "fct-type": "function",
        "title": "spawnPID"
      },
      "index": {
        "description": "Like spawn but returns the ProcessID of the launched application",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "spawnPID",
        "normalized": "String-\u003ea ProcessID",
        "package": "xmonad",
        "partial": "PID",
        "signature": "String-\u003em ProcessID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:startupHook",
      "description": {
        "fct-descr": "\u003cp\u003eThe action to perform on startup\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(X ())",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "startupHook"
      },
      "index": {
        "description": "The action to perform on startup",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "startupHook",
        "normalized": "(X())",
        "package": "xmonad",
        "partial": "Hook",
        "signature": "(X())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:terminal",
      "description": {
        "fct-descr": "\u003cp\u003eThe preferred terminal application. Default: \"xterm\"\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!String",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "terminal"
      },
      "index": {
        "description": "The preferred terminal application Default xterm",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "terminal",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:theRoot",
      "description": {
        "fct-descr": "\u003cp\u003ethe root window\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!Window",
        "fct-source": "src/XMonad-Core.html#XConf",
        "fct-type": "function",
        "title": "theRoot"
      },
      "index": {
        "description": "the root window",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "theRoot",
        "normalized": "",
        "package": "xmonad",
        "partial": "Root",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad. Logs a string to stderr. The result may\n be found in your .xsession-errors file\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/XMonad-Core.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "trace for the monad Logs string to stderr The result may be found in your xsession-errors file",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "trace",
        "normalized": "String-\u003ea()",
        "package": "xmonad",
        "partial": "",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:uninstallSignalHandlers",
      "description": {
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "m ()",
        "fct-source": "src/XMonad-Core.html#uninstallSignalHandlers",
        "fct-type": "function",
        "title": "uninstallSignalHandlers"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "uninstallSignalHandlers",
        "normalized": "a()",
        "package": "xmonad",
        "partial": "Signal Handlers",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:userCode",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the argument, catching all exceptions.  Either this function or\n \u003ccode\u003e\u003ca\u003ecatchX\u003c/a\u003e\u003c/code\u003e should be used at all callsites of user customized code.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "X a -\u003e X (Maybe a)",
        "fct-source": "src/XMonad-Core.html#userCode",
        "fct-type": "function",
        "title": "userCode"
      },
      "index": {
        "description": "Execute the argument catching all exceptions Either this function or catchX should be used at all callsites of user customized code",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "userCode",
        "normalized": "X a-\u003eX(Maybe a)",
        "package": "xmonad",
        "partial": "Code",
        "signature": "X a-\u003eX(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:userCodeDef",
      "description": {
        "fct-descr": "\u003cp\u003eSame as userCode but with a default argument to return instead of using\n Maybe, provided for convenience.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e X a -\u003e X a",
        "fct-source": "src/XMonad-Core.html#userCodeDef",
        "fct-type": "function",
        "title": "userCodeDef"
      },
      "index": {
        "description": "Same as userCode but with default argument to return instead of using Maybe provided for convenience",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "userCodeDef",
        "normalized": "a-\u003eX a-\u003eX a",
        "package": "xmonad",
        "partial": "Code Def",
        "signature": "a-\u003eX a-\u003eX a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:waitingUnmap",
      "description": {
        "fct-descr": "\u003cp\u003ethe number of expected UnmapEvents\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!(Map Window Int)",
        "fct-source": "src/XMonad-Core.html#XState",
        "fct-type": "function",
        "title": "waitingUnmap"
      },
      "index": {
        "description": "the number of expected UnmapEvents",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "waitingUnmap",
        "normalized": "",
        "package": "xmonad",
        "partial": "Unmap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:whenJust",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally run an action, using a \u003ccode\u003eMaybe a\u003c/code\u003e to decide.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "Maybe a -\u003e (a -\u003e m ()) -\u003e m ()",
        "fct-source": "src/XMonad-Core.html#whenJust",
        "fct-type": "function",
        "title": "whenJust"
      },
      "index": {
        "description": "Conditionally run an action using Maybe to decide",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "whenJust",
        "normalized": "Maybe a-\u003e(a-\u003eb())-\u003eb()",
        "package": "xmonad",
        "partial": "Just",
        "signature": "Maybe a-\u003e(a-\u003em())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:whenX",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally run an action, using a \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e event to decide\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "X Bool -\u003e X () -\u003e X ()",
        "fct-source": "src/XMonad-Core.html#whenX",
        "fct-type": "function",
        "title": "whenX"
      },
      "index": {
        "description": "Conditionally run an action using event to decide",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "whenX",
        "normalized": "X Bool-\u003eX()-\u003eX()",
        "package": "xmonad",
        "partial": "",
        "signature": "X Bool-\u003eX()-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:windowset",
      "description": {
        "fct-descr": "\u003cp\u003eworkspace list\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "!WindowSet",
        "fct-source": "src/XMonad-Core.html#XState",
        "fct-type": "function",
        "title": "windowset"
      },
      "index": {
        "description": "workspace list",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "windowset",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:withDisplay",
      "description": {
        "fct-descr": "\u003cp\u003eRun a monad action with the current display settings\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "(Display -\u003e X a) -\u003e X a",
        "fct-source": "src/XMonad-Core.html#withDisplay",
        "fct-type": "function",
        "title": "withDisplay"
      },
      "index": {
        "description": "Run monad action with the current display settings",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "withDisplay",
        "normalized": "(Display-\u003eX a)-\u003eX a",
        "package": "xmonad",
        "partial": "Display",
        "signature": "(Display-\u003eX a)-\u003eX a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:withWindowSet",
      "description": {
        "fct-descr": "\u003cp\u003eRun a monadic action with the current stack set\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "(WindowSet -\u003e X a) -\u003e X a",
        "fct-source": "src/XMonad-Core.html#withWindowSet",
        "fct-type": "function",
        "title": "withWindowSet"
      },
      "index": {
        "description": "Run monadic action with the current stack set",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "withWindowSet",
        "normalized": "(WindowSet-\u003eX a)-\u003eX a",
        "package": "xmonad",
        "partial": "Window Set",
        "signature": "(WindowSet-\u003eX a)-\u003eX a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:workspaces",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of workspaces' names\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "![String]",
        "fct-source": "src/XMonad-Core.html#XConfig",
        "fct-type": "function",
        "title": "workspaces"
      },
      "index": {
        "description": "The list of workspaces names",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "workspaces",
        "normalized": "[String]",
        "package": "xmonad",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:xfork",
      "description": {
        "fct-descr": "\u003cp\u003eA replacement for \u003ccode\u003e\u003ca\u003eforkProcess\u003c/a\u003e\u003c/code\u003e which resets default signal handlers.\n\u003c/p\u003e",
        "fct-module": "XMonad.Core",
        "fct-package": "xmonad",
        "fct-signature": "IO () -\u003e m ProcessID",
        "fct-source": "src/XMonad-Core.html#xfork",
        "fct-type": "function",
        "title": "xfork"
      },
      "index": {
        "description": "replacement for forkProcess which resets default signal handlers",
        "hierarchy": "XMonad Core",
        "module": "XMonad.Core",
        "name": "xfork",
        "normalized": "IO()-\u003ea ProcessID",
        "package": "xmonad",
        "partial": "",
        "signature": "IO()-\u003em ProcessID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe collection of core layouts.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "module",
        "fct-source": "src/XMonad-Layout.html",
        "fct-type": "module",
        "title": "Layout"
      },
      "index": {
        "description": "The collection of core layouts",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "Layout",
        "normalized": "",
        "package": "xmonad",
        "partial": "Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:ChangeLayout",
      "description": {
        "fct-descr": "\u003cp\u003eMessages to change the current layout.\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Layout.html#ChangeLayout",
        "fct-type": "data",
        "title": "ChangeLayout"
      },
      "index": {
        "description": "Messages to change the current layout",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "ChangeLayout",
        "normalized": "",
        "package": "xmonad",
        "partial": "Change Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:Choose",
      "description": {
        "fct-descr": "\u003cp\u003eA layout that allows users to switch between various layout options.\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Layout.html#Choose",
        "fct-type": "data",
        "title": "Choose"
      },
      "index": {
        "description": "layout that allows users to switch between various layout options",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "Choose",
        "normalized": "",
        "package": "xmonad",
        "partial": "Choose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:Full",
      "description": {
        "fct-descr": "\u003cp\u003eSimple fullscreen mode. Renders the focused window fullscreen.\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Layout.html#Full",
        "fct-type": "data",
        "title": "Full"
      },
      "index": {
        "description": "Simple fullscreen mode Renders the focused window fullscreen",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "Full",
        "normalized": "",
        "package": "xmonad",
        "partial": "Full",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:IncMasterN",
      "description": {
        "fct-descr": "\u003cp\u003eIncrease the number of clients in the master pane.\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Layout.html#IncMasterN",
        "fct-type": "data",
        "title": "IncMasterN"
      },
      "index": {
        "description": "Increase the number of clients in the master pane",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "IncMasterN",
        "normalized": "",
        "package": "xmonad",
        "partial": "Inc Master",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:Mirror",
      "description": {
        "fct-descr": "\u003cp\u003eMirror a layout, compute its 90 degree rotated form.\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "newtype",
        "fct-source": "src/XMonad-Layout.html#Mirror",
        "fct-type": "newtype",
        "title": "Mirror"
      },
      "index": {
        "description": "Mirror layout compute its degree rotated form",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "Mirror",
        "normalized": "",
        "package": "xmonad",
        "partial": "Mirror",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:Resize",
      "description": {
        "fct-descr": "\u003cp\u003eChange the size of the master pane.\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Layout.html#Resize",
        "fct-type": "data",
        "title": "Resize"
      },
      "index": {
        "description": "Change the size of the master pane",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "Resize",
        "normalized": "",
        "package": "xmonad",
        "partial": "Resize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:Tall",
      "description": {
        "fct-descr": "\u003cp\u003eThe builtin tiling mode of xmonad. Supports \u003ccode\u003e\u003ca\u003eShrink\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExpand\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eIncMasterN\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-Layout.html#Tall",
        "fct-type": "data",
        "title": "Tall"
      },
      "index": {
        "description": "The builtin tiling mode of xmonad Supports Shrink Expand and IncMasterN",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "Tall",
        "normalized": "",
        "package": "xmonad",
        "partial": "Tall",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:-124--124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eThe layout choice combinator\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "l a -\u003e r a -\u003e Choose l r a",
        "fct-source": "src/XMonad-Layout.html#%7C%7C%7C",
        "fct-type": "function",
        "title": "(|||)"
      },
      "index": {
        "description": "The layout choice combinator",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "(|||) |||",
        "normalized": "a b-\u003ec b-\u003eChoose a c b",
        "package": "xmonad",
        "partial": "",
        "signature": "l a-\u003er a-\u003eChoose l r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:Expand",
      "description": {
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "Expand",
        "fct-source": "src/XMonad-Layout.html#Resize",
        "fct-type": "function",
        "title": "Expand"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "Expand",
        "normalized": "",
        "package": "xmonad",
        "partial": "Expand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:FirstLayout",
      "description": {
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "FirstLayout",
        "fct-source": "src/XMonad-Layout.html#ChangeLayout",
        "fct-type": "function",
        "title": "FirstLayout"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "FirstLayout",
        "normalized": "",
        "package": "xmonad",
        "partial": "First Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:Full",
      "description": {
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "Full",
        "fct-source": "src/XMonad-Layout.html#Full",
        "fct-type": "function",
        "title": "Full"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "Full",
        "normalized": "",
        "package": "xmonad",
        "partial": "Full",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:IncMasterN",
      "description": {
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "IncMasterN !Int",
        "fct-source": "src/XMonad-Layout.html#IncMasterN",
        "fct-type": "function",
        "title": "IncMasterN"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "IncMasterN",
        "normalized": "",
        "package": "xmonad",
        "partial": "Inc Master",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:Mirror",
      "description": {
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "Mirror (l a)",
        "fct-source": "src/XMonad-Layout.html#Mirror",
        "fct-type": "function",
        "title": "Mirror"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "Mirror",
        "normalized": "",
        "package": "xmonad",
        "partial": "Mirror",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:NextLayout",
      "description": {
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "NextLayout",
        "fct-source": "src/XMonad-Layout.html#ChangeLayout",
        "fct-type": "function",
        "title": "NextLayout"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "NextLayout",
        "normalized": "",
        "package": "xmonad",
        "partial": "Next Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:Shrink",
      "description": {
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "Shrink",
        "fct-source": "src/XMonad-Layout.html#Resize",
        "fct-type": "function",
        "title": "Shrink"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "Shrink",
        "normalized": "",
        "package": "xmonad",
        "partial": "Shrink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:Tall",
      "description": {
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "Tall",
        "fct-source": "src/XMonad-Layout.html#Tall",
        "fct-type": "function",
        "title": "Tall"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "Tall",
        "normalized": "",
        "package": "xmonad",
        "partial": "Tall",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:mirrorRect",
      "description": {
        "fct-descr": "\u003cp\u003eMirror a rectangle.\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "Rectangle -\u003e Rectangle",
        "fct-source": "src/XMonad-Layout.html#mirrorRect",
        "fct-type": "function",
        "title": "mirrorRect"
      },
      "index": {
        "description": "Mirror rectangle",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "mirrorRect",
        "normalized": "Rectangle-\u003eRectangle",
        "package": "xmonad",
        "partial": "Rect",
        "signature": "Rectangle-\u003eRectangle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:splitHorizontally",
      "description": {
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "Int -\u003e Rectangle -\u003e [Rectangle]",
        "fct-source": "src/XMonad-Layout.html#splitHorizontally",
        "fct-type": "function",
        "title": "splitHorizontally"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "splitHorizontally",
        "normalized": "Int-\u003eRectangle-\u003e[Rectangle]",
        "package": "xmonad",
        "partial": "Horizontally",
        "signature": "Int-\u003eRectangle-\u003e[Rectangle]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:splitHorizontallyBy",
      "description": {
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "r -\u003e Rectangle -\u003e (Rectangle, Rectangle)",
        "fct-source": "src/XMonad-Layout.html#splitHorizontallyBy",
        "fct-type": "function",
        "title": "splitHorizontallyBy"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "splitHorizontallyBy",
        "normalized": "a-\u003eRectangle-\u003e(Rectangle,Rectangle)",
        "package": "xmonad",
        "partial": "Horizontally By",
        "signature": "r-\u003eRectangle-\u003e(Rectangle,Rectangle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:splitVertically",
      "description": {
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "Int -\u003e Rectangle -\u003e [Rectangle]",
        "fct-source": "src/XMonad-Layout.html#splitVertically",
        "fct-type": "function",
        "title": "splitVertically"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "splitVertically",
        "normalized": "Int-\u003eRectangle-\u003e[Rectangle]",
        "package": "xmonad",
        "partial": "Vertically",
        "signature": "Int-\u003eRectangle-\u003e[Rectangle]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:splitVerticallyBy",
      "description": {
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "r -\u003e Rectangle -\u003e (Rectangle, Rectangle)",
        "fct-source": "src/XMonad-Layout.html#splitVerticallyBy",
        "fct-type": "function",
        "title": "splitVerticallyBy"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "splitVerticallyBy",
        "normalized": "a-\u003eRectangle-\u003e(Rectangle,Rectangle)",
        "package": "xmonad",
        "partial": "Vertically By",
        "signature": "r-\u003eRectangle-\u003e(Rectangle,Rectangle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:tallNMaster",
      "description": {
        "fct-descr": "\u003cp\u003eThe default number of windows in the master pane (default: 1)\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "!Int",
        "fct-source": "src/XMonad-Layout.html#Tall",
        "fct-type": "function",
        "title": "tallNMaster"
      },
      "index": {
        "description": "The default number of windows in the master pane default",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "tallNMaster",
        "normalized": "",
        "package": "xmonad",
        "partial": "NMaster",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:tallRatio",
      "description": {
        "fct-descr": "\u003cp\u003eDefault proportion of screen occupied by master pane (default: 1/2)\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "!Rational",
        "fct-source": "src/XMonad-Layout.html#Tall",
        "fct-type": "function",
        "title": "tallRatio"
      },
      "index": {
        "description": "Default proportion of screen occupied by master pane default",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "tallRatio",
        "normalized": "",
        "package": "xmonad",
        "partial": "Ratio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:tallRatioIncrement",
      "description": {
        "fct-descr": "\u003cp\u003ePercent of screen to increment by when resizing panes (default: 3/100)\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "!Rational",
        "fct-source": "src/XMonad-Layout.html#Tall",
        "fct-type": "function",
        "title": "tallRatioIncrement"
      },
      "index": {
        "description": "Percent of screen to increment by when resizing panes default",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "tallRatioIncrement",
        "normalized": "",
        "package": "xmonad",
        "partial": "Ratio Increment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:tile",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the positions for windows using the default two-pane tiling\n algorithm.\n\u003c/p\u003e\u003cp\u003eThe screen is divided into two panes. All clients are\n then partioned between these two panes. One pane, the master, by\n convention has the least number of windows in it.\n\u003c/p\u003e",
        "fct-module": "XMonad.Layout",
        "fct-package": "xmonad",
        "fct-signature": "Rational-\u003e Rectangle-\u003e Int-\u003e Int-\u003e [Rectangle]",
        "fct-type": "function",
        "title": "tile"
      },
      "index": {
        "description": "Compute the positions for windows using the default two-pane tiling algorithm The screen is divided into two panes All clients are then partioned between these two panes One pane the master by convention has the least number of windows in it",
        "hierarchy": "XMonad Layout",
        "module": "XMonad.Layout",
        "name": "tile",
        "normalized": "Rational-\u003eRectangle-\u003eInt-\u003eInt-\u003e[Rectangle]",
        "package": "xmonad",
        "partial": "",
        "signature": "Rational-\u003eRectangle-\u003eInt-\u003eInt-\u003e[Rectangle]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Main.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003exmonad, a minimalist, tiling window manager for X11\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "XMonad.Main",
        "fct-package": "xmonad",
        "fct-signature": "module",
        "fct-source": "src/XMonad-Main.html",
        "fct-type": "module",
        "title": "Main"
      },
      "index": {
        "description": "xmonad minimalist tiling window manager for X11",
        "hierarchy": "XMonad Main",
        "module": "XMonad.Main",
        "name": "Main",
        "normalized": "",
        "package": "xmonad",
        "partial": "Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Main.html#v:xmonad",
      "description": {
        "fct-descr": "\u003cp\u003eThe main entry point\n\u003c/p\u003e",
        "fct-module": "XMonad.Main",
        "fct-package": "xmonad",
        "fct-signature": "XConfig l -\u003e IO ()",
        "fct-source": "src/XMonad-Main.html#xmonad",
        "fct-type": "function",
        "title": "xmonad"
      },
      "index": {
        "description": "The main entry point",
        "hierarchy": "XMonad Main",
        "module": "XMonad.Main",
        "name": "xmonad",
        "normalized": "XConfig a-\u003eIO()",
        "package": "xmonad",
        "partial": "",
        "signature": "XConfig l-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn EDSL for ManageHooks\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "module",
        "fct-source": "src/XMonad-ManageHook.html",
        "fct-type": "module",
        "title": "ManageHook"
      },
      "index": {
        "description": "An EDSL for ManageHooks",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "ManageHook",
        "normalized": "",
        "package": "xmonad",
        "partial": "Manage Hook",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:-45--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ep --\u003e x\u003c/code\u003e.  If \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, execute the \u003ccode\u003e\u003ca\u003eManageHook\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e (--\u003e) :: Monoid m =\u003e Query Bool -\u003e Query m -\u003e Query m -- a simpler type\n\u003c/pre\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "m Bool -\u003e m a -\u003e m a",
        "fct-source": "src/XMonad-ManageHook.html#--%3E",
        "fct-type": "function",
        "title": "(--\u003e)"
      },
      "index": {
        "description": "If returns True execute the ManageHook Monoid Query Bool Query Query simpler type",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "(--\u003e) --\u003e",
        "normalized": "a Bool-\u003ea b-\u003ea b",
        "package": "xmonad",
        "partial": "",
        "signature": "m Bool-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:-60--124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e lifted to a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "m Bool -\u003e m Bool -\u003e m Bool",
        "fct-source": "src/XMonad-ManageHook.html#%3C%7C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c||\u003e)"
      },
      "index": {
        "description": "lifted to Monad",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "(\u003c||\u003e) \u003c||\u003e",
        "normalized": "a Bool-\u003ea Bool-\u003ea Bool",
        "package": "xmonad",
        "partial": "",
        "signature": "m Bool-\u003em Bool-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:-60--38--38--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e lifted to a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "m Bool -\u003e m Bool -\u003e m Bool",
        "fct-source": "src/XMonad-ManageHook.html#%3C%26%26%3E",
        "fct-type": "function",
        "title": "(\u003c&&\u003e)"
      },
      "index": {
        "description": "lifted to Monad",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "(\u003c&&\u003e) \u003c&&\u003e",
        "normalized": "a Bool-\u003ea Bool-\u003ea Bool",
        "package": "xmonad",
        "partial": "",
        "signature": "m Bool-\u003em Bool-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e. Compose two \u003ccode\u003e\u003ca\u003eManageHook\u003c/a\u003e\u003c/code\u003e from right to left.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-source": "src/XMonad-ManageHook.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Infix mappend Compose two ManageHook from right to left",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "xmonad",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:-61--63-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eq =? x\u003c/code\u003e. if the result of \u003ccode\u003eq\u003c/code\u003e equals \u003ccode\u003ex\u003c/code\u003e, return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "Query a -\u003e a -\u003e Query Bool",
        "fct-source": "src/XMonad-ManageHook.html#%3D%3F",
        "fct-type": "function",
        "title": "(=?)"
      },
      "index": {
        "description": "if the result of equals return True",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "(=?) =?",
        "normalized": "Query a-\u003ea-\u003eQuery Bool",
        "package": "xmonad",
        "partial": "",
        "signature": "Query a-\u003ea-\u003eQuery Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:appName",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the application name.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "Query String",
        "fct-source": "src/XMonad-ManageHook.html#appName",
        "fct-type": "function",
        "title": "appName"
      },
      "index": {
        "description": "Return the application name",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "appName",
        "normalized": "",
        "package": "xmonad",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:className",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the resource class.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "Query String",
        "fct-source": "src/XMonad-ManageHook.html#className",
        "fct-type": "function",
        "title": "className"
      },
      "index": {
        "description": "Return the resource class",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "className",
        "normalized": "",
        "package": "xmonad",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:composeAll",
      "description": {
        "fct-descr": "\u003cp\u003eCompose the list of \u003ccode\u003e\u003ca\u003eManageHook\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "[m] -\u003e m",
        "fct-source": "src/XMonad-ManageHook.html#composeAll",
        "fct-type": "function",
        "title": "composeAll"
      },
      "index": {
        "description": "Compose the list of ManageHook",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "composeAll",
        "normalized": "[a]-\u003ea",
        "package": "xmonad",
        "partial": "All",
        "signature": "[m]-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:doF",
      "description": {
        "fct-descr": "\u003cp\u003eModify the \u003ccode\u003e\u003ca\u003eWindowSet\u003c/a\u003e\u003c/code\u003e with a pure function.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "(s -\u003e s) -\u003e Query (Endo s)",
        "fct-source": "src/XMonad-ManageHook.html#doF",
        "fct-type": "function",
        "title": "doF"
      },
      "index": {
        "description": "Modify the WindowSet with pure function",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "doF",
        "normalized": "(a-\u003ea)-\u003eQuery(Endo a)",
        "package": "xmonad",
        "partial": "",
        "signature": "(s-\u003es)-\u003eQuery(Endo s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:doFloat",
      "description": {
        "fct-descr": "\u003cp\u003eMove the window to the floating layer.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "ManageHook",
        "fct-source": "src/XMonad-ManageHook.html#doFloat",
        "fct-type": "function",
        "title": "doFloat"
      },
      "index": {
        "description": "Move the window to the floating layer",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "doFloat",
        "normalized": "",
        "package": "xmonad",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:doIgnore",
      "description": {
        "fct-descr": "\u003cp\u003eMap the window and remove it from the \u003ccode\u003e\u003ca\u003eWindowSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "ManageHook",
        "fct-source": "src/XMonad-ManageHook.html#doIgnore",
        "fct-type": "function",
        "title": "doIgnore"
      },
      "index": {
        "description": "Map the window and remove it from the WindowSet",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "doIgnore",
        "normalized": "",
        "package": "xmonad",
        "partial": "Ignore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:doShift",
      "description": {
        "fct-descr": "\u003cp\u003eMove the window to a given workspace\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "WorkspaceId -\u003e ManageHook",
        "fct-source": "src/XMonad-ManageHook.html#doShift",
        "fct-type": "function",
        "title": "doShift"
      },
      "index": {
        "description": "Move the window to given workspace",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "doShift",
        "normalized": "WorkspaceId-\u003eManageHook",
        "package": "xmonad",
        "partial": "Shift",
        "signature": "WorkspaceId-\u003eManageHook"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:getStringProperty",
      "description": {
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "Display -\u003e Window -\u003e String -\u003e X (Maybe String)",
        "fct-source": "src/XMonad-ManageHook.html#getStringProperty",
        "fct-type": "function",
        "title": "getStringProperty"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "getStringProperty",
        "normalized": "Display-\u003eWindow-\u003eString-\u003eX(Maybe String)",
        "package": "xmonad",
        "partial": "String Property",
        "signature": "Display-\u003eWindow-\u003eString-\u003eX(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:idHook",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity hook that returns the WindowSet unchanged.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "m",
        "fct-source": "src/XMonad-ManageHook.html#idHook",
        "fct-type": "function",
        "title": "idHook"
      },
      "index": {
        "description": "The identity hook that returns the WindowSet unchanged",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "idHook",
        "normalized": "",
        "package": "xmonad",
        "partial": "Hook",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:liftX",
      "description": {
        "fct-descr": "\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e action to a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "X a -\u003e Query a",
        "fct-source": "src/XMonad-ManageHook.html#liftX",
        "fct-type": "function",
        "title": "liftX"
      },
      "index": {
        "description": "Lift an action to Query",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "liftX",
        "normalized": "X a-\u003eQuery a",
        "package": "xmonad",
        "partial": "",
        "signature": "X a-\u003eQuery a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:resource",
      "description": {
        "fct-descr": "\u003cp\u003eBackwards compatible alias for \u003ccode\u003e\u003ca\u003eappName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "Query String",
        "fct-source": "src/XMonad-ManageHook.html#resource",
        "fct-type": "function",
        "title": "resource"
      },
      "index": {
        "description": "Backwards compatible alias for appName",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "resource",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:stringProperty",
      "description": {
        "fct-descr": "\u003cp\u003eA query that can return an arbitrary X property of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e,\n   identified by name.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "String -\u003e Query String",
        "fct-source": "src/XMonad-ManageHook.html#stringProperty",
        "fct-type": "function",
        "title": "stringProperty"
      },
      "index": {
        "description": "query that can return an arbitrary property of type String identified by name",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "stringProperty",
        "normalized": "String-\u003eQuery String",
        "package": "xmonad",
        "partial": "Property",
        "signature": "String-\u003eQuery String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:title",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the window title.\n\u003c/p\u003e",
        "fct-module": "XMonad.ManageHook",
        "fct-package": "xmonad",
        "fct-signature": "Query String",
        "fct-source": "src/XMonad-ManageHook.html#title",
        "fct-type": "function",
        "title": "title"
      },
      "index": {
        "description": "Return the window title",
        "hierarchy": "XMonad ManageHook",
        "module": "XMonad.ManageHook",
        "name": "title",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "module",
        "fct-source": "src/XMonad-Operations.html",
        "fct-type": "module",
        "title": "Operations"
      },
      "index": {
        "description": "Operations",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "Operations",
        "normalized": "",
        "package": "xmonad",
        "partial": "Operations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#t:D",
      "description": {
        "fct-descr": "\u003cp\u003eSupport for window size hints\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "type",
        "fct-source": "src/XMonad-Operations.html#D",
        "fct-type": "type",
        "title": "D"
      },
      "index": {
        "description": "Support for window size hints",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "D",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:applyAspectHint",
      "description": {
        "fct-descr": "\u003cp\u003eReduce the dimensions so their aspect ratio falls between the two given aspect ratios.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "(D, D) -\u003e D -\u003e D",
        "fct-source": "src/XMonad-Operations.html#applyAspectHint",
        "fct-type": "function",
        "title": "applyAspectHint"
      },
      "index": {
        "description": "Reduce the dimensions so their aspect ratio falls between the two given aspect ratios",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "applyAspectHint",
        "normalized": "(D,D)-\u003eD-\u003eD",
        "package": "xmonad",
        "partial": "Aspect Hint",
        "signature": "(D,D)-\u003eD-\u003eD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:applyMaxSizeHint",
      "description": {
        "fct-descr": "\u003cp\u003eReduce the dimensions if they exceed the given maximum dimensions.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "D -\u003e D -\u003e D",
        "fct-source": "src/XMonad-Operations.html#applyMaxSizeHint",
        "fct-type": "function",
        "title": "applyMaxSizeHint"
      },
      "index": {
        "description": "Reduce the dimensions if they exceed the given maximum dimensions",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "applyMaxSizeHint",
        "normalized": "D-\u003eD-\u003eD",
        "package": "xmonad",
        "partial": "Max Size Hint",
        "signature": "D-\u003eD-\u003eD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:applyResizeIncHint",
      "description": {
        "fct-descr": "\u003cp\u003eReduce the dimensions so they are a multiple of the size increments.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "D -\u003e D -\u003e D",
        "fct-source": "src/XMonad-Operations.html#applyResizeIncHint",
        "fct-type": "function",
        "title": "applyResizeIncHint"
      },
      "index": {
        "description": "Reduce the dimensions so they are multiple of the size increments",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "applyResizeIncHint",
        "normalized": "D-\u003eD-\u003eD",
        "package": "xmonad",
        "partial": "Resize Inc Hint",
        "signature": "D-\u003eD-\u003eD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:applySizeHints",
      "description": {
        "fct-descr": "\u003cp\u003eReduce the dimensions if needed to comply to the given SizeHints, taking\n window borders into account.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Dimension -\u003e SizeHints -\u003e (a, a) -\u003e D",
        "fct-source": "src/XMonad-Operations.html#applySizeHints",
        "fct-type": "function",
        "title": "applySizeHints"
      },
      "index": {
        "description": "Reduce the dimensions if needed to comply to the given SizeHints taking window borders into account",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "applySizeHints",
        "normalized": "Dimension-\u003eSizeHints-\u003e(a,a)-\u003eD",
        "package": "xmonad",
        "partial": "Size Hints",
        "signature": "Dimension-\u003eSizeHints-\u003e(a,a)-\u003eD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:applySizeHints-39-",
      "description": {
        "fct-descr": "\u003cp\u003eXXX comment me\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "SizeHints -\u003e D -\u003e D",
        "fct-source": "src/XMonad-Operations.html#applySizeHints%27",
        "fct-type": "function",
        "title": "applySizeHints'"
      },
      "index": {
        "description": "XXX comment me",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "applySizeHints'",
        "normalized": "SizeHints-\u003eD-\u003eD",
        "package": "xmonad",
        "partial": "Size Hints'",
        "signature": "SizeHints-\u003eD-\u003eD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:applySizeHintsContents",
      "description": {
        "fct-descr": "\u003cp\u003eReduce the dimensions if needed to comply to the given SizeHints.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "SizeHints -\u003e (a, a) -\u003e D",
        "fct-source": "src/XMonad-Operations.html#applySizeHintsContents",
        "fct-type": "function",
        "title": "applySizeHintsContents"
      },
      "index": {
        "description": "Reduce the dimensions if needed to comply to the given SizeHints",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "applySizeHintsContents",
        "normalized": "SizeHints-\u003e(a,a)-\u003eD",
        "package": "xmonad",
        "partial": "Size Hints Contents",
        "signature": "SizeHints-\u003e(a,a)-\u003eD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:broadcastMessage",
      "description": {
        "fct-descr": "\u003cp\u003eSend a message to all layouts, without refreshing.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#broadcastMessage",
        "fct-type": "function",
        "title": "broadcastMessage"
      },
      "index": {
        "description": "Send message to all layouts without refreshing",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "broadcastMessage",
        "normalized": "a-\u003eX()",
        "package": "xmonad",
        "partial": "Message",
        "signature": "a-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:cleanMask",
      "description": {
        "fct-descr": "\u003cp\u003eStrip numlock/capslock from a mask\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "KeyMask -\u003e X KeyMask",
        "fct-source": "src/XMonad-Operations.html#cleanMask",
        "fct-type": "function",
        "title": "cleanMask"
      },
      "index": {
        "description": "Strip numlock capslock from mask",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "cleanMask",
        "normalized": "KeyMask-\u003eX KeyMask",
        "package": "xmonad",
        "partial": "Mask",
        "signature": "KeyMask-\u003eX KeyMask"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:clearEvents",
      "description": {
        "fct-descr": "\u003cp\u003eclearEvents.  Remove all events of a given type from the event queue.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "EventMask -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#clearEvents",
        "fct-type": "function",
        "title": "clearEvents"
      },
      "index": {
        "description": "clearEvents Remove all events of given type from the event queue",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "clearEvents",
        "normalized": "EventMask-\u003eX()",
        "package": "xmonad",
        "partial": "Events",
        "signature": "EventMask-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:clientMask",
      "description": {
        "fct-descr": "\u003cp\u003eThe client events that xmonad is interested in\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "EventMask",
        "fct-source": "src/XMonad-Operations.html#clientMask",
        "fct-type": "function",
        "title": "clientMask"
      },
      "index": {
        "description": "The client events that xmonad is interested in",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "clientMask",
        "normalized": "",
        "package": "xmonad",
        "partial": "Mask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:containedIn",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the first rectangle is contained within, but not equal\n to the second.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Rectangle -\u003e Rectangle -\u003e Bool",
        "fct-source": "src/XMonad-Operations.html#containedIn",
        "fct-type": "function",
        "title": "containedIn"
      },
      "index": {
        "description": "Returns True if the first rectangle is contained within but not equal to the second",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "containedIn",
        "normalized": "Rectangle-\u003eRectangle-\u003eBool",
        "package": "xmonad",
        "partial": "In",
        "signature": "Rectangle-\u003eRectangle-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:extraModifiers",
      "description": {
        "fct-descr": "\u003cp\u003eCombinations of extra modifier masks we need to grab keys/buttons for.\n (numlock and capslock)\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "X [KeyMask]",
        "fct-source": "src/XMonad-Operations.html#extraModifiers",
        "fct-type": "function",
        "title": "extraModifiers"
      },
      "index": {
        "description": "Combinations of extra modifier masks we need to grab keys buttons for numlock and capslock",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "extraModifiers",
        "normalized": "X[KeyMask]",
        "package": "xmonad",
        "partial": "Modifiers",
        "signature": "X[KeyMask]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:float",
      "description": {
        "fct-descr": "\u003cp\u003eMake a tiled window floating, using its suggested rectangle\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#float",
        "fct-type": "function",
        "title": "float"
      },
      "index": {
        "description": "Make tiled window floating using its suggested rectangle",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "float",
        "normalized": "Window-\u003eX()",
        "package": "xmonad",
        "partial": "",
        "signature": "Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:floatLocation",
      "description": {
        "fct-descr": "\u003cp\u003eFloating layer support\n\u003c/p\u003e\u003cp\u003eGiven a window, find the screen it is located on, and compute\n the geometry of that window wrt. that screen.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X (ScreenId, RationalRect)",
        "fct-source": "src/XMonad-Operations.html#floatLocation",
        "fct-type": "function",
        "title": "floatLocation"
      },
      "index": {
        "description": "Floating layer support Given window find the screen it is located on and compute the geometry of that window wrt that screen",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "floatLocation",
        "normalized": "Window-\u003eX(ScreenId,RationalRect)",
        "package": "xmonad",
        "partial": "Location",
        "signature": "Window-\u003eX(ScreenId,RationalRect)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:focus",
      "description": {
        "fct-descr": "\u003cp\u003eSet focus explicitly to window \u003ccode\u003ew\u003c/code\u003e if it is managed by us, or root.\n This happens if X notices we've moved the mouse (and perhaps moved\n the mouse to a new screen).\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#focus",
        "fct-type": "function",
        "title": "focus"
      },
      "index": {
        "description": "Set focus explicitly to window if it is managed by us or root This happens if notices we ve moved the mouse and perhaps moved the mouse to new screen",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "focus",
        "normalized": "Window-\u003eX()",
        "package": "xmonad",
        "partial": "",
        "signature": "Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:getCleanedScreenInfo",
      "description": {
        "fct-descr": "\u003cp\u003eCleans the list of screens according to the rules documented for\n nubScreens.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Display -\u003e m [Rectangle]",
        "fct-source": "src/XMonad-Operations.html#getCleanedScreenInfo",
        "fct-type": "function",
        "title": "getCleanedScreenInfo"
      },
      "index": {
        "description": "Cleans the list of screens according to the rules documented for nubScreens",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "getCleanedScreenInfo",
        "normalized": "Display-\u003ea[Rectangle]",
        "package": "xmonad",
        "partial": "Cleaned Screen Info",
        "signature": "Display-\u003em[Rectangle]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:hide",
      "description": {
        "fct-descr": "\u003cp\u003ehide. Hide a window by unmapping it, and setting Iconified.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#hide",
        "fct-type": "function",
        "title": "hide"
      },
      "index": {
        "description": "hide Hide window by unmapping it and setting Iconified",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "hide",
        "normalized": "Window-\u003eX()",
        "package": "xmonad",
        "partial": "",
        "signature": "Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:initColor",
      "description": {
        "fct-descr": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003ePixel\u003c/a\u003e\u003c/code\u003e value for a named color\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Display -\u003e String -\u003e IO (Maybe Pixel)",
        "fct-source": "src/XMonad-Operations.html#initColor",
        "fct-type": "function",
        "title": "initColor"
      },
      "index": {
        "description": "Get the Pixel value for named color",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "initColor",
        "normalized": "Display-\u003eString-\u003eIO(Maybe Pixel)",
        "package": "xmonad",
        "partial": "Color",
        "signature": "Display-\u003eString-\u003eIO(Maybe Pixel)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:isClient",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if window is under management by us\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X Bool",
        "fct-source": "src/XMonad-Operations.html#isClient",
        "fct-type": "function",
        "title": "isClient"
      },
      "index": {
        "description": "True if window is under management by us",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "isClient",
        "normalized": "Window-\u003eX Bool",
        "package": "xmonad",
        "partial": "Client",
        "signature": "Window-\u003eX Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:kill",
      "description": {
        "fct-descr": "\u003cp\u003eKill the currently focused client.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "X ()",
        "fct-source": "src/XMonad-Operations.html#kill",
        "fct-type": "function",
        "title": "kill"
      },
      "index": {
        "description": "Kill the currently focused client",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "kill",
        "normalized": "X()",
        "package": "xmonad",
        "partial": "",
        "signature": "X()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:killWindow",
      "description": {
        "fct-descr": "\u003cp\u003eKill the specified window. If we do kill it, we'll get a\n delete notify back from X.\n\u003c/p\u003e\u003cp\u003eThere are two ways to delete a window. Either just kill it, or if it\n supports the delete protocol, send a delete event (e.g. firefox)\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#killWindow",
        "fct-type": "function",
        "title": "killWindow"
      },
      "index": {
        "description": "Kill the specified window If we do kill it we ll get delete notify back from There are two ways to delete window Either just kill it or if it supports the delete protocol send delete event e.g firefox",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "killWindow",
        "normalized": "Window-\u003eX()",
        "package": "xmonad",
        "partial": "Window",
        "signature": "Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:manage",
      "description": {
        "fct-descr": "\u003cp\u003eWindow manager operations\n manage. Add a new window to be managed in the current workspace.\n Bring it into focus.\n\u003c/p\u003e\u003cp\u003eWhether the window is already managed, or not, it is mapped, has its\n border set, and its event mask set.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#manage",
        "fct-type": "function",
        "title": "manage"
      },
      "index": {
        "description": "Window manager operations manage Add new window to be managed in the current workspace Bring it into focus Whether the window is already managed or not it is mapped has its border set and its event mask set",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "manage",
        "normalized": "Window-\u003eX()",
        "package": "xmonad",
        "partial": "",
        "signature": "Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:mkAdjust",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a window, build an adjuster function that will reduce the given\n dimensions according to the window's border width and size hints.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X (D -\u003e D)",
        "fct-source": "src/XMonad-Operations.html#mkAdjust",
        "fct-type": "function",
        "title": "mkAdjust"
      },
      "index": {
        "description": "Given window build an adjuster function that will reduce the given dimensions according to the window border width and size hints",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "mkAdjust",
        "normalized": "Window-\u003eX(D-\u003eD)",
        "package": "xmonad",
        "partial": "Adjust",
        "signature": "Window-\u003eX(D-\u003eD)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:mouseDrag",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulate mouse motion events\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "(Position -\u003e Position -\u003e X ()) -\u003e X () -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#mouseDrag",
        "fct-type": "function",
        "title": "mouseDrag"
      },
      "index": {
        "description": "Accumulate mouse motion events",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "mouseDrag",
        "normalized": "(Position-\u003ePosition-\u003eX())-\u003eX()-\u003eX()",
        "package": "xmonad",
        "partial": "Drag",
        "signature": "(Position-\u003ePosition-\u003eX())-\u003eX()-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:mouseMoveWindow",
      "description": {
        "fct-descr": "\u003cp\u003eXXX comment me\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#mouseMoveWindow",
        "fct-type": "function",
        "title": "mouseMoveWindow"
      },
      "index": {
        "description": "XXX comment me",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "mouseMoveWindow",
        "normalized": "Window-\u003eX()",
        "package": "xmonad",
        "partial": "Move Window",
        "signature": "Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:mouseResizeWindow",
      "description": {
        "fct-descr": "\u003cp\u003eXXX comment me\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#mouseResizeWindow",
        "fct-type": "function",
        "title": "mouseResizeWindow"
      },
      "index": {
        "description": "XXX comment me",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "mouseResizeWindow",
        "normalized": "Window-\u003eX()",
        "package": "xmonad",
        "partial": "Resize Window",
        "signature": "Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:nubScreens",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of screens, remove all duplicated screens and screens that\n are entirely contained within another.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "[Rectangle] -\u003e [Rectangle]",
        "fct-source": "src/XMonad-Operations.html#nubScreens",
        "fct-type": "function",
        "title": "nubScreens"
      },
      "index": {
        "description": "Given list of screens remove all duplicated screens and screens that are entirely contained within another",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "nubScreens",
        "normalized": "[Rectangle]-\u003e[Rectangle]",
        "package": "xmonad",
        "partial": "Screens",
        "signature": "[Rectangle]-\u003e[Rectangle]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:pointScreen",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a point, determine the screen (if any) that contains it.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Position -\u003e Position -\u003e X (Maybe (Screen WorkspaceId (Layout Window) Window ScreenId ScreenDetail))",
        "fct-source": "src/XMonad-Operations.html#pointScreen",
        "fct-type": "function",
        "title": "pointScreen"
      },
      "index": {
        "description": "Given point determine the screen if any that contains it",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "pointScreen",
        "normalized": "Position-\u003ePosition-\u003eX(Maybe(Screen WorkspaceId(Layout Window)Window ScreenId ScreenDetail))",
        "package": "xmonad",
        "partial": "Screen",
        "signature": "Position-\u003ePosition-\u003eX(Maybe(Screen WorkspaceId(Layout Window)Window ScreenId ScreenDetail))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:pointWithin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003epointWithin x y r\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e(x, y)\u003c/code\u003e co-ordinate is within\n \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Position -\u003e Position -\u003e Rectangle -\u003e Bool",
        "fct-source": "src/XMonad-Operations.html#pointWithin",
        "fct-type": "function",
        "title": "pointWithin"
      },
      "index": {
        "description": "pointWithin returns True if the co-ordinate is within",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "pointWithin",
        "normalized": "Position-\u003ePosition-\u003eRectangle-\u003eBool",
        "package": "xmonad",
        "partial": "Within",
        "signature": "Position-\u003ePosition-\u003eRectangle-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:refresh",
      "description": {
        "fct-descr": "\u003cp\u003erefresh. Render the currently visible workspaces, as determined by\n the \u003ccode\u003eStackSet\u003c/code\u003e. Also, set focus to the focused window.\n\u003c/p\u003e\u003cp\u003eThis is our \u003ccode\u003eview\u003c/code\u003e operation (MVC), in that it pretty prints our model\n with X calls.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "X ()",
        "fct-source": "src/XMonad-Operations.html#refresh",
        "fct-type": "function",
        "title": "refresh"
      },
      "index": {
        "description": "refresh Render the currently visible workspaces as determined by the StackSet Also set focus to the focused window This is our view operation MVC in that it pretty prints our model with calls",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "refresh",
        "normalized": "X()",
        "package": "xmonad",
        "partial": "",
        "signature": "X()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:rescreen",
      "description": {
        "fct-descr": "\u003cp\u003erescreen.  The screen configuration may have changed (due to\n xrandr), update the state and refresh the screen, and reset the gap.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "X ()",
        "fct-source": "src/XMonad-Operations.html#rescreen",
        "fct-type": "function",
        "title": "rescreen"
      },
      "index": {
        "description": "rescreen The screen configuration may have changed due to xrandr update the state and refresh the screen and reset the gap",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "rescreen",
        "normalized": "X()",
        "package": "xmonad",
        "partial": "",
        "signature": "X()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:restart",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erestart name resume\u003c/code\u003e. Attempt to restart xmonad by executing the program\n \u003ccode\u003ename\u003c/code\u003e.  If \u003ccode\u003eresume\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, restart with the current window state.\n When executing another window manager, \u003ccode\u003eresume\u003c/code\u003e should be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "String -\u003e Bool -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#restart",
        "fct-type": "function",
        "title": "restart"
      },
      "index": {
        "description": "restart name resume Attempt to restart xmonad by executing the program name If resume is True restart with the current window state When executing another window manager resume should be False",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "restart",
        "normalized": "String-\u003eBool-\u003eX()",
        "package": "xmonad",
        "partial": "",
        "signature": "String-\u003eBool-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:reveal",
      "description": {
        "fct-descr": "\u003cp\u003ereveal. Show a window by mapping it and setting Normal\n this is harmless if the window was already visible\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#reveal",
        "fct-type": "function",
        "title": "reveal"
      },
      "index": {
        "description": "reveal Show window by mapping it and setting Normal this is harmless if the window was already visible",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "reveal",
        "normalized": "Window-\u003eX()",
        "package": "xmonad",
        "partial": "",
        "signature": "Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:scaleRationalRect",
      "description": {
        "fct-descr": "\u003cp\u003eProduce the actual rectangle from a screen and a ratio on that screen.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Rectangle -\u003e RationalRect -\u003e Rectangle",
        "fct-source": "src/XMonad-Operations.html#scaleRationalRect",
        "fct-type": "function",
        "title": "scaleRationalRect"
      },
      "index": {
        "description": "Produce the actual rectangle from screen and ratio on that screen",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "scaleRationalRect",
        "normalized": "Rectangle-\u003eRationalRect-\u003eRectangle",
        "package": "xmonad",
        "partial": "Rational Rect",
        "signature": "Rectangle-\u003eRationalRect-\u003eRectangle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:screenWorkspace",
      "description": {
        "fct-descr": "\u003cp\u003eReturn workspace visible on screen \u003ccode\u003esc\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "ScreenId -\u003e X (Maybe WorkspaceId)",
        "fct-source": "src/XMonad-Operations.html#screenWorkspace",
        "fct-type": "function",
        "title": "screenWorkspace"
      },
      "index": {
        "description": "Return workspace visible on screen sc or Nothing",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "screenWorkspace",
        "normalized": "ScreenId-\u003eX(Maybe WorkspaceId)",
        "package": "xmonad",
        "partial": "Workspace",
        "signature": "ScreenId-\u003eX(Maybe WorkspaceId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:sendMessage",
      "description": {
        "fct-descr": "\u003cp\u003eThrow a message to the current \u003ccode\u003e\u003ca\u003eLayoutClass\u003c/a\u003e\u003c/code\u003e possibly modifying how we\n layout the windows, then refresh.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#sendMessage",
        "fct-type": "function",
        "title": "sendMessage"
      },
      "index": {
        "description": "Throw message to the current LayoutClass possibly modifying how we layout the windows then refresh",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "sendMessage",
        "normalized": "a-\u003eX()",
        "package": "xmonad",
        "partial": "Message",
        "signature": "a-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:sendMessageWithNoRefresh",
      "description": {
        "fct-descr": "\u003cp\u003eSend a message to a layout, without refreshing.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e Workspace WorkspaceId (Layout Window) Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#sendMessageWithNoRefresh",
        "fct-type": "function",
        "title": "sendMessageWithNoRefresh"
      },
      "index": {
        "description": "Send message to layout without refreshing",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "sendMessageWithNoRefresh",
        "normalized": "a-\u003eWorkspace WorkspaceId(Layout Window)Window-\u003eX()",
        "package": "xmonad",
        "partial": "Message With No Refresh",
        "signature": "a-\u003eWorkspace WorkspaceId(Layout Window)Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:setButtonGrab",
      "description": {
        "fct-descr": "\u003cp\u003esetButtonGrab. Tell whether or not to intercept clicks on a given window\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Bool -\u003e Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#setButtonGrab",
        "fct-type": "function",
        "title": "setButtonGrab"
      },
      "index": {
        "description": "setButtonGrab Tell whether or not to intercept clicks on given window",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "setButtonGrab",
        "normalized": "Bool-\u003eWindow-\u003eX()",
        "package": "xmonad",
        "partial": "Button Grab",
        "signature": "Bool-\u003eWindow-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:setFocusX",
      "description": {
        "fct-descr": "\u003cp\u003eCall X to set the keyboard focus details.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#setFocusX",
        "fct-type": "function",
        "title": "setFocusX"
      },
      "index": {
        "description": "Call to set the keyboard focus details",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "setFocusX",
        "normalized": "Window-\u003eX()",
        "package": "xmonad",
        "partial": "Focus",
        "signature": "Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:setInitialProperties",
      "description": {
        "fct-descr": "\u003cp\u003eSet some properties when we initially gain control of a window\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#setInitialProperties",
        "fct-type": "function",
        "title": "setInitialProperties"
      },
      "index": {
        "description": "Set some properties when we initially gain control of window",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "setInitialProperties",
        "normalized": "Window-\u003eX()",
        "package": "xmonad",
        "partial": "Initial Properties",
        "signature": "Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:setLayout",
      "description": {
        "fct-descr": "\u003cp\u003eSet the layout of the currently viewed workspace\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Layout Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#setLayout",
        "fct-type": "function",
        "title": "setLayout"
      },
      "index": {
        "description": "Set the layout of the currently viewed workspace",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "setLayout",
        "normalized": "Layout Window-\u003eX()",
        "package": "xmonad",
        "partial": "Layout",
        "signature": "Layout Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:setTopFocus",
      "description": {
        "fct-descr": "\u003cp\u003eSet the focus to the window on top of the stack, or root\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "X ()",
        "fct-source": "src/XMonad-Operations.html#setTopFocus",
        "fct-type": "function",
        "title": "setTopFocus"
      },
      "index": {
        "description": "Set the focus to the window on top of the stack or root",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "setTopFocus",
        "normalized": "X()",
        "package": "xmonad",
        "partial": "Top Focus",
        "signature": "X()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:setWMState",
      "description": {
        "fct-descr": "\u003cp\u003esetWMState.  set the WM_STATE property\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e Int -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#setWMState",
        "fct-type": "function",
        "title": "setWMState"
      },
      "index": {
        "description": "setWMState set the WM STATE property",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "setWMState",
        "normalized": "Window-\u003eInt-\u003eX()",
        "package": "xmonad",
        "partial": "WMState",
        "signature": "Window-\u003eInt-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:tileWindow",
      "description": {
        "fct-descr": "\u003cp\u003etileWindow. Moves and resizes w such that it fits inside the given\n rectangle, including its border.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e Rectangle -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#tileWindow",
        "fct-type": "function",
        "title": "tileWindow"
      },
      "index": {
        "description": "tileWindow Moves and resizes such that it fits inside the given rectangle including its border",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "tileWindow",
        "normalized": "Window-\u003eRectangle-\u003eX()",
        "package": "xmonad",
        "partial": "Window",
        "signature": "Window-\u003eRectangle-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:unmanage",
      "description": {
        "fct-descr": "\u003cp\u003eunmanage. A window no longer exists, remove it from the window\n list, on whatever workspace it is.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "Window -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#unmanage",
        "fct-type": "function",
        "title": "unmanage"
      },
      "index": {
        "description": "unmanage window no longer exists remove it from the window list on whatever workspace it is",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "unmanage",
        "normalized": "Window-\u003eX()",
        "package": "xmonad",
        "partial": "",
        "signature": "Window-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:updateLayout",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the layout field of a workspace\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "WorkspaceId -\u003e Maybe (Layout Window) -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#updateLayout",
        "fct-type": "function",
        "title": "updateLayout"
      },
      "index": {
        "description": "Update the layout field of workspace",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "updateLayout",
        "normalized": "WorkspaceId-\u003eMaybe(Layout Window)-\u003eX()",
        "package": "xmonad",
        "partial": "Layout",
        "signature": "WorkspaceId-\u003eMaybe(Layout Window)-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:windows",
      "description": {
        "fct-descr": "\u003cp\u003ewindows. Modify the current window list with a pure function, and refresh\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "(WindowSet -\u003e WindowSet) -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#windows",
        "fct-type": "function",
        "title": "windows"
      },
      "index": {
        "description": "windows Modify the current window list with pure function and refresh",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "windows",
        "normalized": "(WindowSet-\u003eWindowSet)-\u003eX()",
        "package": "xmonad",
        "partial": "",
        "signature": "(WindowSet-\u003eWindowSet)-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:withFocused",
      "description": {
        "fct-descr": "\u003cp\u003eApply an \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e operation to the currently focused window, if there is one.\n\u003c/p\u003e",
        "fct-module": "XMonad.Operations",
        "fct-package": "xmonad",
        "fct-signature": "(Window -\u003e X ()) -\u003e X ()",
        "fct-source": "src/XMonad-Operations.html#withFocused",
        "fct-type": "function",
        "title": "withFocused"
      },
      "index": {
        "description": "Apply an operation to the currently focused window if there is one",
        "hierarchy": "XMonad Operations",
        "module": "XMonad.Operations",
        "name": "withFocused",
        "normalized": "(Window-\u003eX())-\u003eX()",
        "package": "xmonad",
        "partial": "Focused",
        "signature": "(Window-\u003eX())-\u003eX()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#",
      "description": {
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "module",
        "fct-source": "src/XMonad-StackSet.html",
        "fct-type": "module",
        "title": "StackSet"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "StackSet",
        "normalized": "",
        "package": "xmonad",
        "partial": "Stack Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#t:RationalRect",
      "description": {
        "fct-descr": "\u003cp\u003eA structure for window geometries\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-StackSet.html#RationalRect",
        "fct-type": "data",
        "title": "RationalRect"
      },
      "index": {
        "description": "structure for window geometries",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "RationalRect",
        "normalized": "",
        "package": "xmonad",
        "partial": "Rational Rect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#t:Screen",
      "description": {
        "fct-descr": "\u003cp\u003eVisible workspaces, and their Xinerama screens.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-StackSet.html#Screen",
        "fct-type": "data",
        "title": "Screen"
      },
      "index": {
        "description": "Visible workspaces and their Xinerama screens",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "Screen",
        "normalized": "",
        "package": "xmonad",
        "partial": "Screen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#t:Stack",
      "description": {
        "fct-descr": "\u003cp\u003eA stack is a cursor onto a window list.\n The data structure tracks focus by construction, and\n the master window is by convention the top-most item.\n Focus operations will not reorder the list that results from\n flattening the cursor. The structure can be envisaged as:\n\u003c/p\u003e\u003cpre\u003e    +-- master:  \u003c '7' \u003e\n up |            [ '2' ]\n    +---------   [ '3' ]\n focus:          \u003c '4' \u003e\n dn +----------- [ '8' ]\n\u003c/pre\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e can be viewed as a list with a hole punched in it to make\n the focused position. Under the zipper/calculus view of such\n structures, it is the differentiation of a [a], and integrating it\n back has a natural implementation used in \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-StackSet.html#Stack",
        "fct-type": "data",
        "title": "Stack"
      },
      "index": {
        "description": "stack is cursor onto window list The data structure tracks focus by construction and the master window is by convention the top-most item Focus operations will not reorder the list that results from flattening the cursor The structure can be envisaged as master up focus dn Stack can be viewed as list with hole punched in it to make the focused position Under the zipper calculus view of such structures it is the differentiation of and integrating it back has natural implementation used in index",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "Stack",
        "normalized": "",
        "package": "xmonad",
        "partial": "Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#t:StackSet",
      "description": {
        "fct-descr": "\u003cp\u003eA cursor into a non-empty list of workspaces.\n\u003c/p\u003e\u003cp\u003eWe puncture the workspace list, producing a hole in the structure\n used to track the currently focused workspace. The two other lists\n that are produced are used to track those workspaces visible as\n Xinerama screens, and those workspaces not visible anywhere.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-StackSet.html#StackSet",
        "fct-type": "data",
        "title": "StackSet"
      },
      "index": {
        "description": "cursor into non-empty list of workspaces We puncture the workspace list producing hole in the structure used to track the currently focused workspace The two other lists that are produced are used to track those workspaces visible as Xinerama screens and those workspaces not visible anywhere",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "StackSet",
        "normalized": "",
        "package": "xmonad",
        "partial": "Stack Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#t:Workspace",
      "description": {
        "fct-descr": "\u003cp\u003eA workspace is just a tag, a layout, and a stack.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "data",
        "fct-source": "src/XMonad-StackSet.html#Workspace",
        "fct-type": "data",
        "title": "Workspace"
      },
      "index": {
        "description": "workspace is just tag layout and stack",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "Workspace",
        "normalized": "",
        "package": "xmonad",
        "partial": "Workspace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:RationalRect",
      "description": {
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "RationalRect Rational Rational Rational Rational",
        "fct-source": "src/XMonad-StackSet.html#RationalRect",
        "fct-type": "function",
        "title": "RationalRect"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "RationalRect",
        "normalized": "",
        "package": "xmonad",
        "partial": "Rational Rect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:Screen",
      "description": {
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "Screen",
        "fct-source": "src/XMonad-StackSet.html#Screen",
        "fct-type": "function",
        "title": "Screen"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "Screen",
        "normalized": "",
        "package": "xmonad",
        "partial": "Screen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:Stack",
      "description": {
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "Stack",
        "fct-source": "src/XMonad-StackSet.html#Stack",
        "fct-type": "function",
        "title": "Stack"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "Stack",
        "normalized": "",
        "package": "xmonad",
        "partial": "Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:StackSet",
      "description": {
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet",
        "fct-source": "src/XMonad-StackSet.html#StackSet",
        "fct-type": "function",
        "title": "StackSet"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "StackSet",
        "normalized": "",
        "package": "xmonad",
        "partial": "Stack Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:Workspace",
      "description": {
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "Workspace",
        "fct-source": "src/XMonad-StackSet.html#Workspace",
        "fct-type": "function",
        "title": "Workspace"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "Workspace",
        "normalized": "",
        "package": "xmonad",
        "partial": "Workspace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:abort",
      "description": {
        "fct-descr": "\u003cp\u003ethis function indicates to catch that an error is expected\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/XMonad-StackSet.html#abort",
        "fct-type": "function",
        "title": "abort"
      },
      "index": {
        "description": "this function indicates to catch that an error is expected",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "abort",
        "normalized": "String-\u003ea",
        "package": "xmonad",
        "partial": "",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:allWindows",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all windows in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e in no particular order\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e [a]",
        "fct-source": "src/XMonad-StackSet.html#allWindows",
        "fct-type": "function",
        "title": "allWindows"
      },
      "index": {
        "description": "Get list of all windows in the StackSet in no particular order",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "allWindows",
        "normalized": "StackSet a b c d e-\u003e[c]",
        "package": "xmonad",
        "partial": "Windows",
        "signature": "StackSet i l a s sd-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:current",
      "description": {
        "fct-descr": "\u003cp\u003ecurrently focused workspace\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "!(Screen i l a sid sd)",
        "fct-source": "src/XMonad-StackSet.html#StackSet",
        "fct-type": "function",
        "title": "current"
      },
      "index": {
        "description": "currently focused workspace",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "current",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:currentTag",
      "description": {
        "fct-descr": "\u003cp\u003eGet the tag of the currently focused workspace.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e i",
        "fct-source": "src/XMonad-StackSet.html#currentTag",
        "fct-type": "function",
        "title": "currentTag"
      },
      "index": {
        "description": "Get the tag of the currently focused workspace",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "currentTag",
        "normalized": "StackSet a b c d e-\u003ea",
        "package": "xmonad",
        "partial": "Tag",
        "signature": "StackSet i l a s sd-\u003ei"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1) on current window, O(n) in general\u003c/em\u003e. Delete window \u003ccode\u003ew\u003c/code\u003e if it exists.\n There are 4 cases to consider:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e delete on an \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e workspace leaves it Nothing\n\u003c/li\u003e\u003cli\u003e otherwise, try to move focus to the down\n\u003c/li\u003e\u003cli\u003e otherwise, try to move focus to the up\n\u003c/li\u003e\u003cli\u003e otherwise, you've got an empty workspace, becomes \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBehaviour with respect to the master:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e deleting the master window resets it to the newly focused window\n\u003c/li\u003e\u003cli\u003e otherwise, delete doesn't affect the master.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "on current window in general Delete window if it exists There are cases to consider delete on an Nothing workspace leaves it Nothing otherwise try to move focus to the down otherwise try to move focus to the up otherwise you ve got an empty workspace becomes Nothing Behaviour with respect to the master deleting the master window resets it to the newly focused window otherwise delete doesn affect the master",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "delete",
        "normalized": "a-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
        "package": "xmonad",
        "partial": "",
        "signature": "a-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:delete-39-",
      "description": {
        "fct-descr": "\u003cp\u003eOnly temporarily remove the window from the stack, thereby not destroying special\n information saved in the \u003ccode\u003eStackset\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#delete%27",
        "fct-type": "function",
        "title": "delete'"
      },
      "index": {
        "description": "Only temporarily remove the window from the stack thereby not destroying special information saved in the Stackset",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "delete'",
        "normalized": "a-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
        "package": "xmonad",
        "partial": "",
        "signature": "a-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:differentiate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Turn a list into a possibly empty stack (i.e., a zipper):\n the first element of the list is current, and the rest of the list\n is down.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "[a] -\u003e Maybe (Stack a)",
        "fct-source": "src/XMonad-StackSet.html#differentiate",
        "fct-type": "function",
        "title": "differentiate"
      },
      "index": {
        "description": "Turn list into possibly empty stack i.e zipper the first element of the list is current and the rest of the list is down",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "differentiate",
        "normalized": "[a]-\u003eMaybe(Stack a)",
        "package": "xmonad",
        "partial": "",
        "signature": "[a]-\u003eMaybe(Stack a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:down",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "[a]",
        "fct-source": "src/XMonad-StackSet.html#Stack",
        "fct-type": "function",
        "title": "down"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "down",
        "normalized": "[a]",
        "package": "xmonad",
        "partial": "",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:ensureTags",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure that a given set of workspace tags is present by renaming\n existing workspaces and/or creating new hidden workspaces as\n necessary.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "l -\u003e [i] -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#ensureTags",
        "fct-type": "function",
        "title": "ensureTags"
      },
      "index": {
        "description": "Ensure that given set of workspace tags is present by renaming existing workspaces and or creating new hidden workspaces as necessary",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "ensureTags",
        "normalized": "a-\u003e[b]-\u003eStackSet b a c d e-\u003eStackSet b a c d e",
        "package": "xmonad",
        "partial": "Tags",
        "signature": "l-\u003e[i]-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. 'filter p s' returns the elements of \u003ccode\u003es\u003c/code\u003e such that \u003ccode\u003ep\u003c/code\u003e evaluates to\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  Order is preserved, and focus moves as described for \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "(a -\u003e Bool) -\u003e Stack a -\u003e Maybe (Stack a)",
        "fct-source": "src/XMonad-StackSet.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "filter returns the elements of such that evaluates to True Order is preserved and focus moves as described for delete",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eStack a-\u003eMaybe(Stack a)",
        "package": "xmonad",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eStack a-\u003eMaybe(Stack a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:findTag",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1) on current window, O(n) in general\u003c/em\u003e.\n Return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the workspace tag of the given window, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if the window is not in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e StackSet i l a s sd -\u003e Maybe i",
        "fct-source": "src/XMonad-StackSet.html#findTag",
        "fct-type": "function",
        "title": "findTag"
      },
      "index": {
        "description": "on current window in general Return Just the workspace tag of the given window or Nothing if the window is not in the StackSet",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "findTag",
        "normalized": "a-\u003eStackSet b c a d e-\u003eMaybe b",
        "package": "xmonad",
        "partial": "Tag",
        "signature": "a-\u003eStackSet i l a s sd-\u003eMaybe i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:float",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a window, and its preferred rectangle, set it as floating\n A floating window should already be managed by the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e RationalRect -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#float",
        "fct-type": "function",
        "title": "float"
      },
      "index": {
        "description": "Given window and its preferred rectangle set it as floating floating window should already be managed by the StackSet",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "float",
        "normalized": "a-\u003eRationalRect-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
        "package": "xmonad",
        "partial": "",
        "signature": "a-\u003eRationalRect-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:floating",
      "description": {
        "fct-descr": "\u003cp\u003efloating windows\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "Map a RationalRect",
        "fct-source": "src/XMonad-StackSet.html#StackSet",
        "fct-type": "function",
        "title": "floating"
      },
      "index": {
        "description": "floating windows",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "floating",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "!a",
        "fct-source": "src/XMonad-StackSet.html#Stack",
        "fct-type": "function",
        "title": "focus"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "focus",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focusDown",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1), O(w) on the wrapping case\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003efocusUp, focusDown. Move the window focus up or down the stack,\n wrapping if we reach the end. The wrapping should model a \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e\n on the current stack. The \u003ccode\u003emaster\u003c/code\u003e window, and window order,\n are unaffected by movement of focus.\n\u003c/p\u003e\u003cp\u003eswapUp, swapDown, swap the neighbour in the stack ordering, wrapping\n if we reach the end. Again the wrapping model should \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e on\n the current stack.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#focusDown",
        "fct-type": "function",
        "title": "focusDown"
      },
      "index": {
        "description": "on the wrapping case focusUp focusDown Move the window focus up or down the stack wrapping if we reach the end The wrapping should model cycle on the current stack The master window and window order are unaffected by movement of focus swapUp swapDown swap the neighbour in the stack ordering wrapping if we reach the end Again the wrapping model should cycle on the current stack",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "focusDown",
        "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
        "package": "xmonad",
        "partial": "Down",
        "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focusDown-39-",
      "description": {
        "fct-descr": "\u003cp\u003eVariants of \u003ccode\u003e\u003ca\u003efocusUp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efocusDown\u003c/a\u003e\u003c/code\u003e that work on a\n \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e rather than an entire \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "Stack a -\u003e Stack a",
        "fct-source": "src/XMonad-StackSet.html#focusDown%27",
        "fct-type": "function",
        "title": "focusDown'"
      },
      "index": {
        "description": "Variants of focusUp and focusDown that work on Stack rather than an entire StackSet",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "focusDown'",
        "normalized": "Stack a-\u003eStack a",
        "package": "xmonad",
        "partial": "Down'",
        "signature": "Stack a-\u003eStack a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focusMaster",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(s)\u003c/em\u003e. Set focus to the master window.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#focusMaster",
        "fct-type": "function",
        "title": "focusMaster"
      },
      "index": {
        "description": "Set focus to the master window",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "focusMaster",
        "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
        "package": "xmonad",
        "partial": "Master",
        "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focusUp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1), O(w) on the wrapping case\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003efocusUp, focusDown. Move the window focus up or down the stack,\n wrapping if we reach the end. The wrapping should model a \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e\n on the current stack. The \u003ccode\u003emaster\u003c/code\u003e window, and window order,\n are unaffected by movement of focus.\n\u003c/p\u003e\u003cp\u003eswapUp, swapDown, swap the neighbour in the stack ordering, wrapping\n if we reach the end. Again the wrapping model should \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e on\n the current stack.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#focusUp",
        "fct-type": "function",
        "title": "focusUp"
      },
      "index": {
        "description": "on the wrapping case focusUp focusDown Move the window focus up or down the stack wrapping if we reach the end The wrapping should model cycle on the current stack The master window and window order are unaffected by movement of focus swapUp swapDown swap the neighbour in the stack ordering wrapping if we reach the end Again the wrapping model should cycle on the current stack",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "focusUp",
        "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
        "package": "xmonad",
        "partial": "Up",
        "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focusUp-39-",
      "description": {
        "fct-descr": "\u003cp\u003eVariants of \u003ccode\u003e\u003ca\u003efocusUp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efocusDown\u003c/a\u003e\u003c/code\u003e that work on a\n \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e rather than an entire \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "Stack a -\u003e Stack a",
        "fct-source": "src/XMonad-StackSet.html#focusUp%27",
        "fct-type": "function",
        "title": "focusUp'"
      },
      "index": {
        "description": "Variants of focusUp and focusDown that work on Stack rather than an entire StackSet",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "focusUp'",
        "normalized": "Stack a-\u003eStack a",
        "package": "xmonad",
        "partial": "Up'",
        "signature": "Stack a-\u003eStack a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focusWindow",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1) on current window, O(n) in general\u003c/em\u003e. Focus the window \u003ccode\u003ew\u003c/code\u003e,\n and set its workspace as current.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#focusWindow",
        "fct-type": "function",
        "title": "focusWindow"
      },
      "index": {
        "description": "on current window in general Focus the window and set its workspace as current",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "focusWindow",
        "normalized": "a-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
        "package": "xmonad",
        "partial": "Window",
        "signature": "a-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:greedyView",
      "description": {
        "fct-descr": "\u003cp\u003eSet focus to the given workspace.  If that workspace does not exist\n in the stackset, the original workspace is returned.  If that workspace is\n \u003ccode\u003e\u003ca\u003ehidden\u003c/a\u003e\u003c/code\u003e, then display that workspace on the current screen, and move the\n current workspace to \u003ccode\u003e\u003ca\u003ehidden\u003c/a\u003e\u003c/code\u003e.  If that workspace is \u003ccode\u003e\u003ca\u003evisible\u003c/a\u003e\u003c/code\u003e on another\n screen, the workspaces of the current screen and the other screen are\n swapped.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "i -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#greedyView",
        "fct-type": "function",
        "title": "greedyView"
      },
      "index": {
        "description": "Set focus to the given workspace If that workspace does not exist in the stackset the original workspace is returned If that workspace is hidden then display that workspace on the current screen and move the current workspace to hidden If that workspace is visible on another screen the workspaces of the current screen and the other screen are swapped",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "greedyView",
        "normalized": "a-\u003eStackSet a b c d e-\u003eStackSet a b c d e",
        "package": "xmonad",
        "partial": "View",
        "signature": "i-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:hidden",
      "description": {
        "fct-descr": "\u003cp\u003eworkspaces not visible anywhere\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "[Workspace i l a]",
        "fct-source": "src/XMonad-StackSet.html#StackSet",
        "fct-type": "function",
        "title": "hidden"
      },
      "index": {
        "description": "workspaces not visible anywhere",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "hidden",
        "normalized": "[Workspace a b c]",
        "package": "xmonad",
        "partial": "",
        "signature": "[Workspace i l a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(s)\u003c/em\u003e. Extract the stack on the current workspace, as a list.\n The order of the stack is determined by the master window -- it will be\n the head of the list. The implementation is given by the natural\n integration of a one-hole list cursor, back to a list.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e [a]",
        "fct-source": "src/XMonad-StackSet.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "Extract the stack on the current workspace as list The order of the stack is determined by the master window it will be the head of the list The implementation is given by the natural integration of one-hole list cursor back to list",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "index",
        "normalized": "StackSet a b c d e-\u003e[c]",
        "package": "xmonad",
        "partial": "",
        "signature": "StackSet i l a s sd-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:insertUp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. (Complexity due to duplicate check). Insert a new element\n into the stack, above the currently focused element. The new\n element is given focus; the previously focused element is moved\n down.\n\u003c/p\u003e\u003cp\u003eIf the element is already in the stackset, the original stackset is\n returned unmodified.\n\u003c/p\u003e\u003cp\u003eSemantics in Huet's paper is that insert doesn't move the cursor.\n However, we choose to insert above, and move the focus.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#insertUp",
        "fct-type": "function",
        "title": "insertUp"
      },
      "index": {
        "description": "Complexity due to duplicate check Insert new element into the stack above the currently focused element The new element is given focus the previously focused element is moved down If the element is already in the stackset the original stackset is returned unmodified Semantics in Huet paper is that insert doesn move the cursor However we choose to insert above and move the focus",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "insertUp",
        "normalized": "a-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
        "package": "xmonad",
        "partial": "Up",
        "signature": "a-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:integrate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Flatten a \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e into a list.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "Stack a -\u003e [a]",
        "fct-source": "src/XMonad-StackSet.html#integrate",
        "fct-type": "function",
        "title": "integrate"
      },
      "index": {
        "description": "Flatten Stack into list",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "integrate",
        "normalized": "Stack a-\u003e[a]",
        "package": "xmonad",
        "partial": "",
        "signature": "Stack a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:integrate-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Flatten a possibly empty stack into a list.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "Maybe (Stack a) -\u003e [a]",
        "fct-source": "src/XMonad-StackSet.html#integrate%27",
        "fct-type": "function",
        "title": "integrate'"
      },
      "index": {
        "description": "Flatten possibly empty stack into list",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "integrate'",
        "normalized": "Maybe(Stack a)-\u003e[a]",
        "package": "xmonad",
        "partial": "",
        "signature": "Maybe(Stack a)-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:layout",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "l",
        "fct-source": "src/XMonad-StackSet.html#Workspace",
        "fct-type": "function",
        "title": "layout"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "layout",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:lookupWorkspace",
      "description": {
        "fct-descr": "\u003cp\u003eFind the tag of the workspace visible on Xinerama screen \u003ccode\u003esc\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if screen is out of bounds.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "s -\u003e StackSet i l a s sd -\u003e Maybe i",
        "fct-source": "src/XMonad-StackSet.html#lookupWorkspace",
        "fct-type": "function",
        "title": "lookupWorkspace"
      },
      "index": {
        "description": "Find the tag of the workspace visible on Xinerama screen sc Nothing if screen is out of bounds",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "lookupWorkspace",
        "normalized": "a-\u003eStackSet b c d a e-\u003eMaybe b",
        "package": "xmonad",
        "partial": "Workspace",
        "signature": "s-\u003eStackSet i l a s sd-\u003eMaybe i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:mapLayout",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function on all the layouts in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "(l -\u003e l') -\u003e StackSet i l a s sd -\u003e StackSet i l' a s sd",
        "fct-source": "src/XMonad-StackSet.html#mapLayout",
        "fct-type": "function",
        "title": "mapLayout"
      },
      "index": {
        "description": "Map function on all the layouts in the StackSet",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "mapLayout",
        "normalized": "(a-\u003eb)-\u003eStackSet c a d e f-\u003eStackSet c b d e f",
        "package": "xmonad",
        "partial": "Layout",
        "signature": "(l-\u003el')-\u003eStackSet i l a s sd-\u003eStackSet i l' a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:mapWorkspace",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function on all the workspaces in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "(Workspace i l a -\u003e Workspace i l a) -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#mapWorkspace",
        "fct-type": "function",
        "title": "mapWorkspace"
      },
      "index": {
        "description": "Map function on all the workspaces in the StackSet",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "mapWorkspace",
        "normalized": "(Workspace a b c-\u003eWorkspace a b c)-\u003eStackSet a b c d e-\u003eStackSet a b c d e",
        "package": "xmonad",
        "partial": "Workspace",
        "signature": "(Workspace i l a-\u003eWorkspace i l a)-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Is a window in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e StackSet i l a s sd -\u003e Bool",
        "fct-source": "src/XMonad-StackSet.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Is window in the StackSet",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "member",
        "normalized": "a-\u003eStackSet b c a d e-\u003eBool",
        "package": "xmonad",
        "partial": "",
        "signature": "a-\u003eStackSet i l a s sd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function, and a default value for \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, to modify the current stack.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "Maybe (Stack a) -\u003e (Stack a -\u003e Maybe (Stack a)) -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Apply function and default value for Nothing to modify the current stack",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "modify",
        "normalized": "Maybe(Stack a)-\u003e(Stack a-\u003eMaybe(Stack a))-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
        "package": "xmonad",
        "partial": "",
        "signature": "Maybe(Stack a)-\u003e(Stack a-\u003eMaybe(Stack a))-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:modify-39-",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to modify the current stack if it isn't empty, and we don't\n  want to empty it.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "(Stack a -\u003e Stack a) -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#modify%27",
        "fct-type": "function",
        "title": "modify'"
      },
      "index": {
        "description": "Apply function to modify the current stack if it isn empty and we don want to empty it",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "modify'",
        "normalized": "(Stack a-\u003eStack a)-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
        "package": "xmonad",
        "partial": "",
        "signature": "(Stack a-\u003eStack a)-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Create a new stackset, of empty stacks, with given tags,\n with physical screens whose descriptions are given by \u003ccode\u003em\u003c/code\u003e. The\n number of physical screens (\u003ccode\u003elength \u003ccode\u003em\u003c/code\u003e\u003c/code\u003e) should be less than or\n equal to the number of workspace tags.  The first workspace in the\n list will be current.\n\u003c/p\u003e\u003cp\u003eXinerama: Virtual workspaces are assigned to physical screens, starting at 0.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "l -\u003e [i] -\u003e [sd] -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new stackset of empty stacks with given tags with physical screens whose descriptions are given by The number of physical screens length should be less than or equal to the number of workspace tags The first workspace in the list will be current Xinerama Virtual workspaces are assigned to physical screens starting at",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "new",
        "normalized": "a-\u003e[b]-\u003e[c]-\u003eStackSet b a d e c",
        "package": "xmonad",
        "partial": "",
        "signature": "l-\u003e[i]-\u003e[sd]-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:peek",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Extract the focused element of the current stack.\n Return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for an empty stack.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e Maybe a",
        "fct-source": "src/XMonad-StackSet.html#peek",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "Extract the focused element of the current stack Return Just that element or Nothing for an empty stack",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "peek",
        "normalized": "StackSet a b c d e-\u003eMaybe c",
        "package": "xmonad",
        "partial": "",
        "signature": "StackSet i l a s sd-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:renameTag",
      "description": {
        "fct-descr": "\u003cp\u003eRename a given tag if present in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "i -\u003e i -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#renameTag",
        "fct-type": "function",
        "title": "renameTag"
      },
      "index": {
        "description": "Rename given tag if present in the StackSet",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "renameTag",
        "normalized": "a-\u003ea-\u003eStackSet a b c d e-\u003eStackSet a b c d e",
        "package": "xmonad",
        "partial": "Tag",
        "signature": "i-\u003ei-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:screen",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "!sid",
        "fct-source": "src/XMonad-StackSet.html#Screen",
        "fct-type": "function",
        "title": "screen"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "screen",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:screenDetail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "!sd",
        "fct-source": "src/XMonad-StackSet.html#Screen",
        "fct-type": "function",
        "title": "screenDetail"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "screenDetail",
        "normalized": "",
        "package": "xmonad",
        "partial": "Detail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:screens",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all screens in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e [Screen i l a s sd]",
        "fct-source": "src/XMonad-StackSet.html#screens",
        "fct-type": "function",
        "title": "screens"
      },
      "index": {
        "description": "Get list of all screens in the StackSet",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "screens",
        "normalized": "StackSet a b c d e-\u003e[Screen a b c d e]",
        "package": "xmonad",
        "partial": "",
        "signature": "StackSet i l a s sd-\u003e[Screen i l a s sd]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:shift",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(w)\u003c/em\u003e. shift. Move the focused element of the current stack to stack\n \u003ccode\u003en\u003c/code\u003e, leaving it as the focused element on that stack. The item is\n inserted above the currently focused element on that workspace.\n The actual focused workspace doesn't change. If there is no\n element on the current stack, the original stackSet is returned.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "i -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#shift",
        "fct-type": "function",
        "title": "shift"
      },
      "index": {
        "description": "shift Move the focused element of the current stack to stack leaving it as the focused element on that stack The item is inserted above the currently focused element on that workspace The actual focused workspace doesn change If there is no element on the current stack the original stackSet is returned",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "shift",
        "normalized": "a-\u003eStackSet a b c d e-\u003eStackSet a b c d e",
        "package": "xmonad",
        "partial": "",
        "signature": "i-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:shiftMaster",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(s)\u003c/em\u003e. Set the master window to the focused window.\n The other windows are kept in order and shifted down on the stack, as if you\n just hit mod-shift-k a bunch of times.\n Focus stays with the item moved.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#shiftMaster",
        "fct-type": "function",
        "title": "shiftMaster"
      },
      "index": {
        "description": "Set the master window to the focused window The other windows are kept in order and shifted down on the stack as if you just hit mod-shift-k bunch of times Focus stays with the item moved",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "shiftMaster",
        "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
        "package": "xmonad",
        "partial": "Master",
        "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:shiftWin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. shiftWin. Searches for the specified window \u003ccode\u003ew\u003c/code\u003e on all workspaces\n of the stackSet and moves it to stack \u003ccode\u003en\u003c/code\u003e, leaving it as the focused\n element on that stack. The item is inserted above the currently\n focused element on that workspace.\n The actual focused workspace doesn't change. If the window is not\n found in the stackSet, the original stackSet is returned.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "i -\u003e a -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#shiftWin",
        "fct-type": "function",
        "title": "shiftWin"
      },
      "index": {
        "description": "shiftWin Searches for the specified window on all workspaces of the stackSet and moves it to stack leaving it as the focused element on that stack The item is inserted above the currently focused element on that workspace The actual focused workspace doesn change If the window is not found in the stackSet the original stackSet is returned",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "shiftWin",
        "normalized": "a-\u003eb-\u003eStackSet a c b d e-\u003eStackSet a c b d e",
        "package": "xmonad",
        "partial": "Win",
        "signature": "i-\u003ea-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:sink",
      "description": {
        "fct-descr": "\u003cp\u003eClear the floating status of a window\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#sink",
        "fct-type": "function",
        "title": "sink"
      },
      "index": {
        "description": "Clear the floating status of window",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "sink",
        "normalized": "a-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
        "package": "xmonad",
        "partial": "",
        "signature": "a-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:stack",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "Maybe (Stack a)",
        "fct-source": "src/XMonad-StackSet.html#Workspace",
        "fct-type": "function",
        "title": "stack"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "stack",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:swapDown",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1), O(w) on the wrapping case\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003efocusUp, focusDown. Move the window focus up or down the stack,\n wrapping if we reach the end. The wrapping should model a \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e\n on the current stack. The \u003ccode\u003emaster\u003c/code\u003e window, and window order,\n are unaffected by movement of focus.\n\u003c/p\u003e\u003cp\u003eswapUp, swapDown, swap the neighbour in the stack ordering, wrapping\n if we reach the end. Again the wrapping model should \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e on\n the current stack.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#swapDown",
        "fct-type": "function",
        "title": "swapDown"
      },
      "index": {
        "description": "on the wrapping case focusUp focusDown Move the window focus up or down the stack wrapping if we reach the end The wrapping should model cycle on the current stack The master window and window order are unaffected by movement of focus swapUp swapDown swap the neighbour in the stack ordering wrapping if we reach the end Again the wrapping model should cycle on the current stack",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "swapDown",
        "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
        "package": "xmonad",
        "partial": "Down",
        "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:swapMaster",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(s)\u003c/em\u003e. Set the master window to the focused window.\n The old master window is swapped in the tiling order with the focused window.\n Focus stays with the item moved.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#swapMaster",
        "fct-type": "function",
        "title": "swapMaster"
      },
      "index": {
        "description": "Set the master window to the focused window The old master window is swapped in the tiling order with the focused window Focus stays with the item moved",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "swapMaster",
        "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
        "package": "xmonad",
        "partial": "Master",
        "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:swapUp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1), O(w) on the wrapping case\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003efocusUp, focusDown. Move the window focus up or down the stack,\n wrapping if we reach the end. The wrapping should model a \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e\n on the current stack. The \u003ccode\u003emaster\u003c/code\u003e window, and window order,\n are unaffected by movement of focus.\n\u003c/p\u003e\u003cp\u003eswapUp, swapDown, swap the neighbour in the stack ordering, wrapping\n if we reach the end. Again the wrapping model should \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e on\n the current stack.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#swapUp",
        "fct-type": "function",
        "title": "swapUp"
      },
      "index": {
        "description": "on the wrapping case focusUp focusDown Move the window focus up or down the stack wrapping if we reach the end The wrapping should model cycle on the current stack The master window and window order are unaffected by movement of focus swapUp swapDown swap the neighbour in the stack ordering wrapping if we reach the end Again the wrapping model should cycle on the current stack",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "swapUp",
        "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
        "package": "xmonad",
        "partial": "Up",
        "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:tag",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "!i",
        "fct-source": "src/XMonad-StackSet.html#Workspace",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "tag",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:tagMember",
      "description": {
        "fct-descr": "\u003cp\u003eIs the given tag present in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "i -\u003e StackSet i l a s sd -\u003e Bool",
        "fct-source": "src/XMonad-StackSet.html#tagMember",
        "fct-type": "function",
        "title": "tagMember"
      },
      "index": {
        "description": "Is the given tag present in the StackSet",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "tagMember",
        "normalized": "a-\u003eStackSet a b c d e-\u003eBool",
        "package": "xmonad",
        "partial": "Member",
        "signature": "i-\u003eStackSet i l a s sd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:up",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "[a]",
        "fct-source": "src/XMonad-StackSet.html#Stack",
        "fct-type": "function",
        "title": "up"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "up",
        "normalized": "[a]",
        "package": "xmonad",
        "partial": "",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:view",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(w)\u003c/em\u003e. Set focus to the workspace with index 'i'.\n If the index is out of range, return the original \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eXinerama: If the workspace is not visible on any Xinerama screen, it\n becomes the current screen. If it is in the visible list, it becomes\n current.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "i -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
        "fct-source": "src/XMonad-StackSet.html#view",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "Set focus to the workspace with index If the index is out of range return the original StackSet Xinerama If the workspace is not visible on any Xinerama screen it becomes the current screen If it is in the visible list it becomes current",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "view",
        "normalized": "a-\u003eStackSet a b c d e-\u003eStackSet a b c d e",
        "package": "xmonad",
        "partial": "",
        "signature": "i-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:visible",
      "description": {
        "fct-descr": "\u003cp\u003enon-focused workspaces, visible in xinerama\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "[Screen i l a sid sd]",
        "fct-source": "src/XMonad-StackSet.html#StackSet",
        "fct-type": "function",
        "title": "visible"
      },
      "index": {
        "description": "non-focused workspaces visible in xinerama",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "visible",
        "normalized": "[Screen a b c d e]",
        "package": "xmonad",
        "partial": "",
        "signature": "[Screen i l a sid sd]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:workspace",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "!(Workspace i l a)",
        "fct-source": "src/XMonad-StackSet.html#Screen",
        "fct-type": "function",
        "title": "workspace"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "workspace",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:workspaces",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all workspaces in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "XMonad.StackSet",
        "fct-package": "xmonad",
        "fct-signature": "StackSet i l a s sd -\u003e [Workspace i l a]",
        "fct-source": "src/XMonad-StackSet.html#workspaces",
        "fct-type": "function",
        "title": "workspaces"
      },
      "index": {
        "description": "Get list of all workspaces in the StackSet",
        "hierarchy": "XMonad StackSet",
        "module": "XMonad.StackSet",
        "name": "workspaces",
        "normalized": "StackSet a b c d e-\u003e[Workspace a b c]",
        "package": "xmonad",
        "partial": "",
        "signature": "StackSet i l a s sd-\u003e[Workspace i l a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#",
      "description": {
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "module",
        "fct-source": "src/XMonad.html",
        "fct-type": "module",
        "title": "XMonad"
      },
      "index": {
        "description": "",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "XMonad",
        "normalized": "",
        "package": "xmonad",
        "partial": "XMonad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#t:MonadIO",
      "description": {
        "fct-descr": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadIO"
      },
      "index": {
        "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "MonadIO",
        "normalized": "",
        "package": "xmonad",
        "partial": "Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#t:MonadReader",
      "description": {
        "fct-descr": "\u003cp\u003eSee examples in \u003ca\u003eControl.Monad.Reader\u003c/a\u003e.\n Note, the partially applied function type \u003ccode\u003e(-\u003e) r\u003c/code\u003e is a simple reader monad.\n See the \u003ccode\u003einstance\u003c/code\u003e declaration below.\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadReader"
      },
      "index": {
        "description": "See examples in Control.Monad.Reader Note the partially applied function type is simple reader monad See the instance declaration below",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "MonadReader",
        "normalized": "",
        "package": "xmonad",
        "partial": "Monad Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#t:MonadState",
      "description": {
        "fct-descr": "\u003cp\u003eMinimal definition is either both of \u003ccode\u003eget\u003c/code\u003e and \u003ccode\u003eput\u003c/code\u003e or just \u003ccode\u003estate\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadState"
      },
      "index": {
        "description": "Minimal definition is either both of get and put or just state",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "MonadState",
        "normalized": "",
        "package": "xmonad",
        "partial": "Monad State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:.-124-.",
      "description": {
        "fct-descr": "\u003cp\u003eBitwise \"or\"\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "(.|.)"
      },
      "index": {
        "description": "Bitwise or",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "(.|.) .|.",
        "normalized": "a-\u003ea-\u003ea",
        "package": "xmonad",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:ask",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the monad environment.\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "m r",
        "fct-type": "method",
        "title": "ask"
      },
      "index": {
        "description": "Retrieves the monad environment",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "ask",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:asks",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "(r -\u003e a)-\u003e m a",
        "fct-type": "function",
        "title": "asks"
      },
      "index": {
        "description": "Retrieves function of the current environment",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "asks",
        "normalized": "(a-\u003eb)-\u003ec b",
        "package": "xmonad",
        "partial": "",
        "signature": "(r-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the state from the internals of the monad.\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "m s",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "Return the state from the internals of the monad",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "get",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:gets",
      "description": {
        "fct-descr": "\u003cp\u003eGets specific component of the state, using a projection function\n supplied.\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "(s -\u003e a) -\u003e m a",
        "fct-type": "function",
        "title": "gets"
      },
      "index": {
        "description": "Gets specific component of the state using projection function supplied",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "gets",
        "normalized": "(a-\u003eb)-\u003ec b",
        "package": "xmonad",
        "partial": "",
        "signature": "(s-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "IO a -\u003e m a",
        "fct-type": "method",
        "title": "liftIO"
      },
      "index": {
        "description": "Lift computation from the IO monad",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "liftIO",
        "normalized": "IO a-\u003eb a",
        "package": "xmonad",
        "partial": "IO",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:local",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a computation in a modified environment.\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "local",
        "fct-type": "method",
        "title": "local"
      },
      "index": {
        "description": "Executes computation in modified environment",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "local",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic state transformer.\n\u003c/p\u003e\u003cp\u003eMaps an old state to a new state inside a state monad.\n      The old state is thrown away.\n\u003c/p\u003e\u003cpre\u003e      Main\u003e :t modify ((+1) :: Int -\u003e Int)\n      modify (...) :: (MonadState Int a) =\u003e a ()\n\u003c/pre\u003e\u003cp\u003eThis says that \u003ccode\u003emodify (+1)\u003c/code\u003e acts over any\n    Monad that is a member of the \u003ccode\u003eMonadState\u003c/code\u003e class,\n    with an \u003ccode\u003eInt\u003c/code\u003e state.\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "(s -\u003e s) -\u003e m ()",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Monadic state transformer Maps an old state to new state inside state monad The old state is thrown away Main modify Int Int modify MonadState Int This says that modify acts over any Monad that is member of the MonadState class with an Int state",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "modify",
        "normalized": "(a-\u003ea)-\u003eb()",
        "package": "xmonad",
        "partial": "",
        "signature": "(s-\u003es)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the state inside the monad.\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "s -\u003e m ()",
        "fct-type": "method",
        "title": "put"
      },
      "index": {
        "description": "Replace the state inside the monad",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "put",
        "normalized": "a-\u003eb()",
        "package": "xmonad",
        "partial": "",
        "signature": "s-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:reader",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "reader",
        "fct-type": "method",
        "title": "reader"
      },
      "index": {
        "description": "Retrieves function of the current environment",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "reader",
        "normalized": "",
        "package": "xmonad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:state",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a simple state action into the monad.\n\u003c/p\u003e",
        "fct-module": "XMonad",
        "fct-package": "xmonad",
        "fct-signature": "(s -\u003e (a, s)) -\u003e m a",
        "fct-type": "method",
        "title": "state"
      },
      "index": {
        "description": "Embed simple state action into the monad",
        "hierarchy": "XMonad",
        "module": "XMonad",
        "name": "state",
        "normalized": "(a-\u003e(b,a))-\u003ec b",
        "package": "xmonad",
        "partial": "",
        "signature": "(s-\u003e(a,s))-\u003em a"
      }
    }
  }
]