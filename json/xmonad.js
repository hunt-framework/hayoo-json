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
        "word": "xmonad"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module specifies the default configuration values for xmonad.\n\u003c/p\u003e\u003cp\u003eDO NOT MODIFY THIS FILE!  It won't work.  You may configure xmonad\n by providing your own \u003ccode\u003e~/.xmonad/xmonad.hs\u003c/code\u003e that overrides\n specific fields in \u003ccode\u003e\u003ca\u003edefaultConfig\u003c/a\u003e\u003c/code\u003e.  For a starting point, you can\n copy the \u003ccode\u003exmonad.hs\u003c/code\u003e found in the \u003ccode\u003eman\u003c/code\u003e directory, or look at\n examples on the xmonad wiki.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XMonad.Config",
          "name": "Config",
          "package": "xmonad",
          "source": "src/XMonad-Config.html",
          "type": "module"
        },
        "index": {
          "description": "This module specifies the default configuration values for xmonad DO NOT MODIFY THIS FILE It won work You may configure xmonad by providing your own xmonad xmonad.hs that overrides specific fields in defaultConfig For starting point you can copy the xmonad.hs found in the man directory or look at examples on the xmonad wiki",
          "hierarchy": "XMonad Config",
          "module": "XMonad.Config",
          "name": "Config",
          "package": "xmonad",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default set of configuration values itself\n\u003c/p\u003e",
          "module": "XMonad.Config",
          "name": "defaultConfig",
          "package": "xmonad",
          "signature": "XConfig (Choose Tall (Choose (Mirror Tall) Full))",
          "source": "src/XMonad-Config.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "The default set of configuration values itself",
          "hierarchy": "XMonad Config",
          "module": "XMonad.Config",
          "name": "defaultConfig",
          "package": "xmonad",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Config.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad, a state monad transformer over \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, for the window\n manager state, and support routines.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XMonad.Core",
          "name": "Core",
          "package": "xmonad",
          "source": "src/XMonad-Core.html",
          "type": "module"
        },
        "index": {
          "description": "The monad state monad transformer over IO for the window manager state and support routines",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "Core",
          "package": "xmonad",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery module must make the data it wants to store\n an instance of this class.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: initialValue\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "ExtensionClass",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#ExtensionClass",
          "type": "class"
        },
        "index": {
          "description": "Every module must make the data it wants to store an instance of this class Minimal complete definition initialValue",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "ExtensionClass",
          "package": "xmonad",
          "partial": "Extension Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:ExtensionClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn existential type that can hold any object that is in \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003eLayoutClass\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "Layout",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#Layout",
          "type": "data"
        },
        "index": {
          "description": "An existential type that can hold any object that is in Read and LayoutClass",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "Layout",
          "package": "xmonad",
          "partial": "Layout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:Layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery layout must be an instance of \u003ccode\u003e\u003ca\u003eLayoutClass\u003c/a\u003e\u003c/code\u003e, which defines\n the basic layout operations along with a sensible default for each.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003erunLayout\u003c/a\u003e\u003c/code\u003e || ((\u003ccode\u003e\u003ca\u003edoLayout\u003c/a\u003e\u003c/code\u003e || \u003ccode\u003e\u003ca\u003epureLayout\u003c/a\u003e\u003c/code\u003e) && \u003ccode\u003e\u003ca\u003eemptyLayout\u003c/a\u003e\u003c/code\u003e), and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e || \u003ccode\u003e\u003ca\u003epureMessage\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eYou should also strongly consider implementing \u003ccode\u003e\u003ca\u003edescription\u003c/a\u003e\u003c/code\u003e,\n although it is not required.\n\u003c/p\u003e\u003cp\u003eNote that any code which \u003cem\u003euses\u003c/em\u003e \u003ccode\u003e\u003ca\u003eLayoutClass\u003c/a\u003e\u003c/code\u003e methods should only\n ever call \u003ccode\u003e\u003ca\u003erunLayout\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003edescription\u003c/a\u003e\u003c/code\u003e!  In\n other words, the only calls to \u003ccode\u003e\u003ca\u003edoLayout\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epureMessage\u003c/a\u003e\u003c/code\u003e, and other\n such methods should be from the default implementations of\n \u003ccode\u003e\u003ca\u003erunLayout\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e, and so on.  This ensures that the\n proper methods will be used, regardless of the particular methods\n that any \u003ccode\u003e\u003ca\u003eLayoutClass\u003c/a\u003e\u003c/code\u003e instance chooses to define.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "LayoutClass",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#LayoutClass",
          "type": "class"
        },
        "index": {
          "description": "Every layout must be an instance of LayoutClass which defines the basic layout operations along with sensible default for each Minimal complete definition runLayout doLayout pureLayout emptyLayout and handleMessage pureMessage You should also strongly consider implementing description although it is not required Note that any code which uses LayoutClass methods should only ever call runLayout handleMessage and description In other words the only calls to doLayout pureMessage and other such methods should be from the default implementations of runLayout handleMessage and so on This ensures that the proper methods will be used regardless of the particular methods that any LayoutClass instance chooses to define",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "LayoutClass",
          "package": "xmonad",
          "partial": "Layout Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:LayoutClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLayoutMessages\u003c/a\u003e\u003c/code\u003e are core messages that all layouts (especially stateful\n layouts) should consider handling.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "LayoutMessages",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#LayoutMessages",
          "type": "data"
        },
        "index": {
          "description": "LayoutMessages are core messages that all layouts especially stateful layouts should consider handling",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "LayoutMessages",
          "package": "xmonad",
          "partial": "Layout Messages",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:LayoutMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "ManageHook",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#ManageHook",
          "type": "type"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "ManageHook",
          "package": "xmonad",
          "partial": "Manage Hook",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:ManageHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBased on ideas in /An Extensible Dynamically-Typed Hierarchy of\n Exceptions/, Simon Marlow, 2006. Use extensible messages to the\n \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e handler.\n\u003c/p\u003e\u003cp\u003eUser-extensible messages must be a member of this class.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "Message",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#Message",
          "type": "class"
        },
        "index": {
          "description": "Based on ideas in An Extensible Dynamically-Typed Hierarchy of Exceptions Simon Marlow Use extensible messages to the handleMessage handler User-extensible messages must be member of this class",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "Message",
          "package": "xmonad",
          "partial": "Message",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "Query",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#Query",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "Query",
          "package": "xmonad",
          "partial": "Query",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRectangle\u003c/a\u003e\u003c/code\u003e with screen dimensions\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "ScreenDetail",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#ScreenDetail",
          "type": "data"
        },
        "index": {
          "description": "The Rectangle with screen dimensions",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "ScreenDetail",
          "package": "xmonad",
          "partial": "Screen Detail",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:ScreenDetail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhysical screen indices\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "ScreenId",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#ScreenId",
          "type": "newtype"
        },
        "index": {
          "description": "Physical screen indices",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "ScreenId",
          "package": "xmonad",
          "partial": "Screen Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:ScreenId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapped value of some type in the \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "SomeMessage",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#SomeMessage",
          "type": "data"
        },
        "index": {
          "description": "wrapped value of some type in the Message class",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "SomeMessage",
          "package": "xmonad",
          "partial": "Some Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:SomeMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential type to store a state extension.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "StateExtension",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#StateExtension",
          "type": "data"
        },
        "index": {
          "description": "Existential type to store state extension",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "StateExtension",
          "package": "xmonad",
          "partial": "State Extension",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:StateExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "Typeable",
          "package": "xmonad",
          "type": "class"
        },
        "index": {
          "description": "The class Typeable allows concrete representation of type to be calculated",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "Typeable",
          "package": "xmonad",
          "partial": "Typeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:Typeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "WindowSet",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#WindowSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "WindowSet",
          "package": "xmonad",
          "partial": "Window Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:WindowSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "WindowSpace",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#WindowSpace",
          "type": "type"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "WindowSpace",
          "package": "xmonad",
          "partial": "Window Space",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:WindowSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVirtual workspace indices\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "WorkspaceId",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#WorkspaceId",
          "type": "type"
        },
        "index": {
          "description": "Virtual workspace indices",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "WorkspaceId",
          "package": "xmonad",
          "partial": "Workspace Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:WorkspaceId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe X monad, \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e transformers over \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n encapsulating the window manager configuration and state,\n respectively.\n\u003c/p\u003e\u003cp\u003eDynamic components may be retrieved with \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, static components\n with \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e. With newtype deriving we get readers and state monads\n instantiated on \u003ccode\u003e\u003ca\u003eXConf\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eXState\u003c/a\u003e\u003c/code\u003e automatically.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "X",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#X",
          "type": "data"
        },
        "index": {
          "description": "The monad ReaderT and StateT transformers over IO encapsulating the window manager configuration and state respectively Dynamic components may be retrieved with get static components with ask With newtype deriving we get readers and state monads instantiated on XConf and XState automatically",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "X",
          "package": "xmonad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXConf, the (read-only) window manager configuration.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "XConf",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#XConf",
          "type": "data"
        },
        "index": {
          "description": "XConf the read-only window manager configuration",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "XConf",
          "package": "xmonad",
          "partial": "XConf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:XConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "XConfig",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "XConfig",
          "package": "xmonad",
          "partial": "XConfig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:XConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXState, the (mutable) window manager state.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "XState",
          "package": "xmonad",
          "source": "src/XMonad-Core.html#XState",
          "type": "data"
        },
        "index": {
          "description": "XState the mutable window manager state",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "XState",
          "package": "xmonad",
          "partial": "XState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#t:XState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esent when a layout becomes non-visible\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "Hide",
          "package": "xmonad",
          "signature": "Hide",
          "source": "src/XMonad-Core.html#LayoutMessages",
          "type": "function"
        },
        "index": {
          "description": "sent when layout becomes non-visible",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "Hide",
          "package": "xmonad",
          "partial": "Hide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:Hide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "Layout",
          "package": "xmonad",
          "signature": "Layout (l a)",
          "source": "src/XMonad-Core.html#Layout",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "Layout",
          "package": "xmonad",
          "partial": "Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:Layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePersistent extension\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "PersistentExtension",
          "package": "xmonad",
          "signature": "PersistentExtension a",
          "source": "src/XMonad-Core.html#StateExtension",
          "type": "function"
        },
        "index": {
          "description": "Persistent extension",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "PersistentExtension",
          "package": "xmonad",
          "partial": "Persistent Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:PersistentExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "Query",
          "package": "xmonad",
          "signature": "Query (ReaderT Window X a)",
          "source": "src/XMonad-Core.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "Query",
          "package": "xmonad",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esent when xmonad is exiting or restarting\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "ReleaseResources",
          "package": "xmonad",
          "signature": "ReleaseResources",
          "source": "src/XMonad-Core.html#LayoutMessages",
          "type": "function"
        },
        "index": {
          "description": "sent when xmonad is exiting or restarting",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "ReleaseResources",
          "package": "xmonad",
          "partial": "Release Resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:ReleaseResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "S",
          "package": "xmonad",
          "signature": "S Int",
          "source": "src/XMonad-Core.html#ScreenId",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "S",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "SD",
          "package": "xmonad",
          "signature": "SD",
          "source": "src/XMonad-Core.html#ScreenDetail",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "SD",
          "package": "xmonad",
          "partial": "SD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:SD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "SomeMessage",
          "package": "xmonad",
          "signature": "SomeMessage a",
          "source": "src/XMonad-Core.html#SomeMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "SomeMessage",
          "package": "xmonad",
          "partial": "Some Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:SomeMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-persistent state extension\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "StateExtension",
          "package": "xmonad",
          "signature": "StateExtension a",
          "source": "src/XMonad-Core.html#StateExtension",
          "type": "function"
        },
        "index": {
          "description": "Non-persistent state extension",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "StateExtension",
          "package": "xmonad",
          "partial": "State Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:StateExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "XConf",
          "package": "xmonad",
          "signature": "XConf",
          "source": "src/XMonad-Core.html#XConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "XConf",
          "package": "xmonad",
          "partial": "XConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:XConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "XConfig",
          "package": "xmonad",
          "signature": "XConfig",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "XConfig",
          "package": "xmonad",
          "partial": "XConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:XConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "XState",
          "package": "xmonad",
          "signature": "XState",
          "source": "src/XMonad-Core.html#XState",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "XState",
          "package": "xmonad",
          "partial": "XState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:XState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon non-predefined atoms\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "atom_WM_DELETE_WINDOW",
          "package": "xmonad",
          "signature": "X Atom",
          "source": "src/XMonad-Core.html#atom_WM_DELETE_WINDOW",
          "type": "function"
        },
        "index": {
          "description": "Common non-predefined atoms",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "atom_WM_DELETE_WINDOW",
          "package": "xmonad",
          "partial": "WM DELETE WINDOW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:atom_WM_DELETE_WINDOW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon non-predefined atoms\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "atom_WM_PROTOCOLS",
          "package": "xmonad",
          "signature": "X Atom",
          "source": "src/XMonad-Core.html#atom_WM_PROTOCOLS",
          "type": "function"
        },
        "index": {
          "description": "Common non-predefined atoms",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "atom_WM_PROTOCOLS",
          "package": "xmonad",
          "partial": "WM PROTOCOLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:atom_WM_PROTOCOLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon non-predefined atoms\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "atom_WM_STATE",
          "package": "xmonad",
          "signature": "X Atom",
          "source": "src/XMonad-Core.html#atom_WM_STATE",
          "type": "function"
        },
        "index": {
          "description": "Common non-predefined atoms",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "atom_WM_STATE",
          "package": "xmonad",
          "partial": "WM STATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:atom_WM_STATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon non-predefined atoms\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "atom_WM_TAKE_FOCUS",
          "package": "xmonad",
          "signature": "X Atom",
          "source": "src/XMonad-Core.html#atom_WM_TAKE_FOCUS",
          "type": "function"
        },
        "index": {
          "description": "Common non-predefined atoms",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "atom_WM_TAKE_FOCUS",
          "package": "xmonad",
          "partial": "WM TAKE FOCUS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:atom_WM_TAKE_FOCUS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe border width\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "borderWidth",
          "package": "xmonad",
          "signature": "Dimension",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "The border width",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "borderWidth",
          "package": "xmonad",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:borderWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea mapping of button presses to actions\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "buttonActions",
          "package": "xmonad",
          "signature": "(Map (KeyMask, Button) (Window -\u003e X ()))",
          "source": "src/XMonad-Core.html#XConf",
          "type": "function"
        },
        "index": {
          "description": "mapping of button presses to actions",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "buttonActions",
          "normalized": "(Map(KeyMask,Button)(Window-\u003eX()))",
          "package": "xmonad",
          "partial": "Actions",
          "signature": "(Map(KeyMask,Button)(Window-\u003eX()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:buttonActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action into the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad.  If the action results in an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n exception, log the exception to stderr and continue normal execution.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "catchIO",
          "package": "xmonad",
          "signature": "IO () -\u003e m ()",
          "source": "src/XMonad-Core.html#catchIO",
          "type": "function"
        },
        "index": {
          "description": "Lift an IO action into the monad If the action results in an IO exception log the exception to stderr and continue normal execution",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "catchIO",
          "normalized": "IO()-\u003ea()",
          "package": "xmonad",
          "partial": "IO",
          "signature": "IO()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:catchIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun in the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad, and in case of exception, and catch it and log it\n to stderr, and run the error case.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "catchX",
          "package": "xmonad",
          "signature": "X a -\u003e X a -\u003e X a",
          "source": "src/XMonad-Core.html#catchX",
          "type": "function"
        },
        "index": {
          "description": "Run in the monad and in case of exception and catch it and log it to stderr and run the error case",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "catchX",
          "normalized": "X a-\u003eX a-\u003eX a",
          "package": "xmonad",
          "signature": "X a-\u003eX a-\u003eX a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:catchX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFalse to make a click which changes focus to be additionally passed to the window\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "clickJustFocuses",
          "package": "xmonad",
          "signature": "Bool",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "False to make click which changes focus to be additionally passed to the window",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "clickJustFocuses",
          "package": "xmonad",
          "partial": "Just Focuses",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:clickJustFocuses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einitial user configuration\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "config",
          "package": "xmonad",
          "signature": "(XConfig Layout)",
          "source": "src/XMonad-Core.html#XConf",
          "type": "function"
        },
        "index": {
          "description": "initial user configuration",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "config",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eevent currently being processed\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "currentEvent",
          "package": "xmonad",
          "signature": "(Maybe Event)",
          "source": "src/XMonad-Core.html#XConf",
          "type": "function"
        },
        "index": {
          "description": "event currently being processed",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "currentEvent",
          "package": "xmonad",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:currentEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis should be a human-readable string that is used when\n selecting layouts by name.  The default implementation is\n \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e, which is in some cases a poor default.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "description",
          "package": "xmonad",
          "signature": "layout a -\u003e String",
          "source": "src/XMonad-Core.html#description",
          "type": "method"
        },
        "index": {
          "description": "This should be human-readable string that is used when selecting layouts by name The default implementation is show which is in some cases poor default",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "description",
          "normalized": "a b-\u003eString",
          "package": "xmonad",
          "signature": "layout a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe X11 display\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "display",
          "package": "xmonad",
          "signature": "Display",
          "source": "src/XMonad-Core.html#XConf",
          "type": "function"
        },
        "index": {
          "description": "the X11 display",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "display",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eRectangle\u003c/a\u003e\u003c/code\u003e in which to place the windows, and a \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e\n of windows, return a list of windows and their corresponding\n Rectangles.  If an element is not given a Rectangle by\n \u003ccode\u003e\u003ca\u003edoLayout\u003c/a\u003e\u003c/code\u003e, then it is not shown on screen.  The order of\n windows in this list should be the desired stacking order.\n\u003c/p\u003e\u003cp\u003eAlso possibly return a modified layout (by returning \u003ccode\u003eJust\n newLayout\u003c/code\u003e), if this layout needs to be modified (e.g. if it\n keeps track of some sort of state).  Return \u003ccode\u003eNothing\u003c/code\u003e if the\n layout does not need to be modified.\n\u003c/p\u003e\u003cp\u003eLayouts which do not need access to the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad (\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, window\n manager state, or configuration) and do not keep track of their\n own state should implement \u003ccode\u003e\u003ca\u003epureLayout\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003edoLayout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "doLayout",
          "package": "xmonad",
          "signature": "layout a -\u003e Rectangle -\u003e Stack a -\u003e X ([(a, Rectangle)], Maybe (layout a))",
          "source": "src/XMonad-Core.html#doLayout",
          "type": "method"
        },
        "index": {
          "description": "Given Rectangle in which to place the windows and Stack of windows return list of windows and their corresponding Rectangles If an element is not given Rectangle by doLayout then it is not shown on screen The order of windows in this list should be the desired stacking order Also possibly return modified layout by returning Just newLayout if this layout needs to be modified e.g if it keeps track of some sort of state Return Nothing if the layout does not need to be modified Layouts which do not need access to the monad IO window manager state or configuration and do not keep track of their own state should implement pureLayout instead of doLayout",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "doLayout",
          "normalized": "a b-\u003eRectangle-\u003eStack b-\u003eX([(b,Rectangle)],Maybe(a b))",
          "package": "xmonad",
          "partial": "Layout",
          "signature": "layout a-\u003eRectangle-\u003eStack a-\u003eX([(a,Rectangle)],Maybe(layout a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:doLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "dragging",
          "package": "xmonad",
          "signature": "(Maybe (Position -\u003e Position -\u003e X (), X ()))",
          "source": "src/XMonad-Core.html#XState",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "dragging",
          "normalized": "(Maybe(Position-\u003ePosition-\u003eX(),X()))",
          "package": "xmonad",
          "signature": "(Maybe(Position-\u003ePosition-\u003eX(),X()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:dragging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eemptyLayout\u003c/a\u003e\u003c/code\u003e is called when there are no windows.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "emptyLayout",
          "package": "xmonad",
          "signature": "layout a -\u003e Rectangle -\u003e X ([(a, Rectangle)], Maybe (layout a))",
          "source": "src/XMonad-Core.html#emptyLayout",
          "type": "method"
        },
        "index": {
          "description": "emptyLayout is called when there are no windows",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "emptyLayout",
          "normalized": "a b-\u003eRectangle-\u003eX([(b,Rectangle)],Maybe(a b))",
          "package": "xmonad",
          "partial": "Layout",
          "signature": "layout a-\u003eRectangle-\u003eX([(a,Rectangle)],Maybe(layout a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:emptyLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estores custom state information.\n\u003c/p\u003e\u003cp\u003eThe module \u003ca\u003eXMonad.Utils.ExtensibleState\u003c/a\u003e in xmonad-contrib\n provides additional information and a simple interface for using this.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "extensibleState",
          "package": "xmonad",
          "signature": "(Map String (Either String StateExtension))",
          "source": "src/XMonad-Core.html#XState",
          "type": "function"
        },
        "index": {
          "description": "stores custom state information The module XMonad.Utils.ExtensibleState in xmonad-contrib provides additional information and simple interface for using this",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "extensibleState",
          "package": "xmonad",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:extensibleState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies whether the state extension should be\n persistent. Setting this method to \u003ccode\u003e\u003ca\u003ePersistentExtension\u003c/a\u003e\u003c/code\u003e\n will make the stored data survive restarts, but\n requires a to be an instance of Read and Show.\n\u003c/p\u003e\u003cp\u003eIt defaults to \u003ccode\u003e\u003ca\u003eStateExtension\u003c/a\u003e\u003c/code\u003e, i.e. no persistence.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "extensionType",
          "package": "xmonad",
          "signature": "a -\u003e StateExtension",
          "source": "src/XMonad-Core.html#extensionType",
          "type": "method"
        },
        "index": {
          "description": "Specifies whether the state extension should be persistent Setting this method to PersistentExtension will make the stored data survive restarts but requires to be an instance of Read and Show It defaults to StateExtension i.e no persistence",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "extensionType",
          "normalized": "a-\u003eStateExtension",
          "package": "xmonad",
          "partial": "Type",
          "signature": "a-\u003eStateExtension",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:extensionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether window entry events can change focus\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "focusFollowsMouse",
          "package": "xmonad",
          "signature": "Bool",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "Whether window entry events can change focus",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "focusFollowsMouse",
          "package": "xmonad",
          "partial": "Follows Mouse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:focusFollowsMouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eborder color of the focused window\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "focusedBorder",
          "package": "xmonad",
          "signature": "Pixel",
          "source": "src/XMonad-Core.html#XConf",
          "type": "function"
        },
        "index": {
          "description": "border color of the focused window",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "focusedBorder",
          "package": "xmonad",
          "partial": "Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:focusedBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFocused windows border color. Default: \"#ff0000\"\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "focusedBorderColor",
          "package": "xmonad",
          "signature": "String",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "Focused windows border color Default ff0000",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "focusedBorderColor",
          "package": "xmonad",
          "partial": "Border Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:focusedBorderColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnd now, unwrap a given, unknown \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e type, performing a (dynamic)\n type check on the result.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "fromMessage",
          "package": "xmonad",
          "signature": "SomeMessage -\u003e Maybe m",
          "source": "src/XMonad-Core.html#fromMessage",
          "type": "function"
        },
        "index": {
          "description": "And now unwrap given unknown Message type performing dynamic type check on the result",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "fromMessage",
          "normalized": "SomeMessage-\u003eMaybe a",
          "package": "xmonad",
          "partial": "Message",
          "signature": "SomeMessage-\u003eMaybe m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:fromMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for the common case of atom internment\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "getAtom",
          "package": "xmonad",
          "signature": "String -\u003e X Atom",
          "source": "src/XMonad-Core.html#getAtom",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for the common case of atom internment",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "getAtom",
          "normalized": "String-\u003eX Atom",
          "package": "xmonad",
          "partial": "Atom",
          "signature": "String-\u003eX Atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:getAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the path to \u003ccode\u003e~/.xmonad\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "getXMonadDir",
          "package": "xmonad",
          "signature": "m String",
          "source": "src/XMonad-Core.html#getXMonadDir",
          "type": "function"
        },
        "index": {
          "description": "Return the path to xmonad",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "getXMonadDir",
          "package": "xmonad",
          "partial": "XMonad Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:getXMonadDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle an X event, returns (All True) if the default handler\n should also be run afterwards. mappend should be used for combining\n event hooks in most cases.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "handleEventHook",
          "package": "xmonad",
          "signature": "(Event -\u003e X All)",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "Handle an event returns All True if the default handler should also be run afterwards mappend should be used for combining event hooks in most cases",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "handleEventHook",
          "normalized": "(Event-\u003eX All)",
          "package": "xmonad",
          "partial": "Event Hook",
          "signature": "(Event-\u003eX All)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:handleEventHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e performs message handling.  If\n \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003eNothing\u003c/code\u003e, then the layout did not\n respond to the message and the screen is not refreshed.\n Otherwise, \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e returns an updated layout and the\n screen is refreshed.\n\u003c/p\u003e\u003cp\u003eLayouts which do not need access to the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad to decide how\n to handle messages should implement \u003ccode\u003e\u003ca\u003epureMessage\u003c/a\u003e\u003c/code\u003e instead of\n \u003ccode\u003e\u003ca\u003ehandleMessage\u003c/a\u003e\u003c/code\u003e (this restricts the risk of error, and makes\n testing much easier).\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "handleMessage",
          "package": "xmonad",
          "signature": "layout a -\u003e SomeMessage -\u003e X (Maybe (layout a))",
          "source": "src/XMonad-Core.html#handleMessage",
          "type": "method"
        },
        "index": {
          "description": "handleMessage performs message handling If handleMessage returns Nothing then the layout did not respond to the message and the screen is not refreshed Otherwise handleMessage returns an updated layout and the screen is refreshed Layouts which do not need access to the monad to decide how to handle messages should implement pureMessage instead of handleMessage this restricts the risk of error and makes testing much easier",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "handleMessage",
          "normalized": "a b-\u003eSomeMessage-\u003eX(Maybe(a b))",
          "package": "xmonad",
          "partial": "Message",
          "signature": "layout a-\u003eSomeMessage-\u003eX(Maybe(layout a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:handleMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines an initial value for the state extension\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "initialValue",
          "package": "xmonad",
          "signature": "a",
          "source": "src/XMonad-Core.html#initialValue",
          "type": "method"
        },
        "index": {
          "description": "Defines an initial value for the state extension",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "initialValue",
          "package": "xmonad",
          "partial": "Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:initialValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore SIGPIPE to avoid termination when a pipe is full, and SIGCHLD to\n avoid zombie processes, and clean up any extant zombie processes.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "installSignalHandlers",
          "package": "xmonad",
          "signature": "m ()",
          "source": "src/XMonad-Core.html#installSignalHandlers",
          "type": "function"
        },
        "index": {
          "description": "Ignore SIGPIPE to avoid termination when pipe is full and SIGCHLD to avoid zombie processes and clean up any extant zombie processes",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "installSignalHandlers",
          "normalized": "a()",
          "package": "xmonad",
          "partial": "Signal Handlers",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:installSignalHandlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral utilities\n\u003c/p\u003e\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action into the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "io",
          "package": "xmonad",
          "signature": "IO a -\u003e m a",
          "source": "src/XMonad-Core.html#io",
          "type": "function"
        },
        "index": {
          "description": "General utilities Lift an IO action into the monad",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "io",
          "normalized": "IO a-\u003eb a",
          "package": "xmonad",
          "signature": "IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the given window is the root window\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "isRoot",
          "package": "xmonad",
          "signature": "Window -\u003e X Bool",
          "source": "src/XMonad-Core.html#isRoot",
          "type": "function"
        },
        "index": {
          "description": "True if the given window is the root window",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "isRoot",
          "normalized": "Window-\u003eX Bool",
          "package": "xmonad",
          "partial": "Root",
          "signature": "Window-\u003eX Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:isRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea mapping of key presses to actions\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "keyActions",
          "package": "xmonad",
          "signature": "(Map (KeyMask, KeySym) (X ()))",
          "source": "src/XMonad-Core.html#XConf",
          "type": "function"
        },
        "index": {
          "description": "mapping of key presses to actions",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "keyActions",
          "normalized": "(Map(KeyMask,KeySym)(X()))",
          "package": "xmonad",
          "partial": "Actions",
          "signature": "(Map(KeyMask,KeySym)(X()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:keyActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe key binding: a map from key presses and actions\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "keys",
          "package": "xmonad",
          "signature": "(XConfig Layout -\u003e Map (ButtonMask, KeySym) (X ()))",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "The key binding map from key presses and actions",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "keys",
          "normalized": "(XConfig Layout-\u003eMap(ButtonMask,KeySym)(X()))",
          "package": "xmonad",
          "signature": "(XConfig Layout-\u003eMap(ButtonMask,KeySym)(X()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe available layouts\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "layoutHook",
          "package": "xmonad",
          "signature": "(l Window)",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "The available layouts",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "layoutHook",
          "package": "xmonad",
          "partial": "Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:layoutHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action to perform when the windows set is changed\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "logHook",
          "package": "xmonad",
          "signature": "(X ())",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "The action to perform when the windows set is changed",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "logHook",
          "normalized": "(X())",
          "package": "xmonad",
          "partial": "Hook",
          "signature": "(X())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:logHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action to run when a new window is opened\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "manageHook",
          "package": "xmonad",
          "signature": "ManageHook",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "The action to run when new window is opened",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "manageHook",
          "package": "xmonad",
          "partial": "Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:manageHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe Set of mapped windows\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "mapped",
          "package": "xmonad",
          "signature": "(Set Window)",
          "source": "src/XMonad-Core.html#XState",
          "type": "function"
        },
        "index": {
          "description": "the Set of mapped windows",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "mapped",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:mapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe mod modifier\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "modMask",
          "package": "xmonad",
          "signature": "KeyMask",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "the mod modifier",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "modMask",
          "package": "xmonad",
          "partial": "Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:modMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe mouse bindings\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "mouseBindings",
          "package": "xmonad",
          "signature": "(XConfig Layout -\u003e Map (ButtonMask, Button) (Window -\u003e X ()))",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "The mouse bindings",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "mouseBindings",
          "normalized": "(XConfig Layout-\u003eMap(ButtonMask,Button)(Window-\u003eX()))",
          "package": "xmonad",
          "partial": "Bindings",
          "signature": "(XConfig Layout-\u003eMap(ButtonMask,Button)(Window-\u003eX()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:mouseBindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewas refocus caused by mouse action?\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "mouseFocused",
          "package": "xmonad",
          "signature": "Bool",
          "source": "src/XMonad-Core.html#XConf",
          "type": "function"
        },
        "index": {
          "description": "was refocus caused by mouse action",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "mouseFocused",
          "package": "xmonad",
          "partial": "Focused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:mouseFocused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eposition of the mouse according to\n the event currently being processed\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "mousePosition",
          "package": "xmonad",
          "signature": "(Maybe (Position, Position))",
          "source": "src/XMonad-Core.html#XConf",
          "type": "function"
        },
        "index": {
          "description": "position of the mouse according to the event currently being processed",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "mousePosition",
          "normalized": "(Maybe(Position,Position))",
          "package": "xmonad",
          "partial": "Position",
          "signature": "(Maybe(Position,Position))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:mousePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eborder color of unfocused windows\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "normalBorder",
          "package": "xmonad",
          "signature": "Pixel",
          "source": "src/XMonad-Core.html#XConf",
          "type": "function"
        },
        "index": {
          "description": "border color of unfocused windows",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "normalBorder",
          "package": "xmonad",
          "partial": "Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:normalBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon focused windows border color. Default: \"#dddddd\"\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "normalBorderColor",
          "package": "xmonad",
          "signature": "String",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "Non focused windows border color Default dddddd",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "normalBorderColor",
          "package": "xmonad",
          "partial": "Border Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:normalBorderColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe numlock modifier\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "numberlockMask",
          "package": "xmonad",
          "signature": "KeyMask",
          "source": "src/XMonad-Core.html#XState",
          "type": "function"
        },
        "index": {
          "description": "The numlock modifier",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "numberlockMask",
          "package": "xmonad",
          "partial": "Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:numberlockMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a pure version of \u003ccode\u003e\u003ca\u003edoLayout\u003c/a\u003e\u003c/code\u003e, for cases where we\n don't need access to the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad to determine how to lay out\n the windows, and we don't need to modify the layout itself.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "pureLayout",
          "package": "xmonad",
          "signature": "layout a -\u003e Rectangle -\u003e Stack a -\u003e [(a, Rectangle)]",
          "source": "src/XMonad-Core.html#pureLayout",
          "type": "method"
        },
        "index": {
          "description": "This is pure version of doLayout for cases where we don need access to the monad to determine how to lay out the windows and we don need to modify the layout itself",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "pureLayout",
          "normalized": "a b-\u003eRectangle-\u003eStack b-\u003e[(b,Rectangle)]",
          "package": "xmonad",
          "partial": "Layout",
          "signature": "layout a-\u003eRectangle-\u003eStack a-\u003e[(a,Rectangle)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:pureLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond to a message by (possibly) changing our layout, but\n taking no other action.  If the layout changes, the screen will\n be refreshed.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "pureMessage",
          "package": "xmonad",
          "signature": "layout a -\u003e SomeMessage -\u003e Maybe (layout a)",
          "source": "src/XMonad-Core.html#pureMessage",
          "type": "method"
        },
        "index": {
          "description": "Respond to message by possibly changing our layout but taking no other action If the layout changes the screen will be refreshed",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "pureMessage",
          "normalized": "a b-\u003eSomeMessage-\u003eMaybe(a b)",
          "package": "xmonad",
          "partial": "Message",
          "signature": "layout a-\u003eSomeMessage-\u003eMaybe(layout a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:pureMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing the \u003ccode\u003e\u003ca\u003eLayout\u003c/a\u003e\u003c/code\u003e as a witness, parse existentially wrapped windows\n from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "readsLayout",
          "package": "xmonad",
          "signature": "Layout a -\u003e String -\u003e [(Layout a, String)]",
          "source": "src/XMonad-Core.html#readsLayout",
          "type": "function"
        },
        "index": {
          "description": "Using the Layout as witness parse existentially wrapped windows from String",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "readsLayout",
          "normalized": "Layout a-\u003eString-\u003e[(Layout a,String)]",
          "package": "xmonad",
          "partial": "Layout",
          "signature": "Layout a-\u003eString-\u003e[(Layout a,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:readsLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'recompile force', recompile \u003ccode\u003e~/.xmonad/xmonad.hs\u003c/code\u003e when any of the\n following apply:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e force is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e the xmonad executable does not exist\n\u003c/li\u003e\u003cli\u003e the xmonad executable is older than xmonad.hs or any file in\n        ~/.xmonad/lib\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe -i flag is used to restrict recompilation to the xmonad.hs file only,\n and any files in the ~/.xmonad/lib directory.\n\u003c/p\u003e\u003cp\u003eCompilation errors (if any) are logged to ~/.xmonad/xmonad.errors.  If\n GHC indicates failure with a non-zero exit code, an xmessage displaying\n that file is spawned.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e is returned if there are compilation errors.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "recompile",
          "package": "xmonad",
          "signature": "Bool -\u003e m Bool",
          "source": "src/XMonad-Core.html#recompile",
          "type": "function"
        },
        "index": {
          "description": "recompile force recompile xmonad xmonad.hs when any of the following apply force is True the xmonad executable does not exist the xmonad executable is older than xmonad.hs or any file in xmonad lib The flag is used to restrict recompilation to the xmonad.hs file only and any files in the xmonad lib directory Compilation errors if any are logged to xmonad xmonad.errors If GHC indicates failure with non-zero exit code an xmessage displaying that file is spawned False is returned if there are compilation errors",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "recompile",
          "normalized": "Bool-\u003ea Bool",
          "package": "xmonad",
          "signature": "Bool-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:recompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy default, \u003ccode\u003e\u003ca\u003erunLayout\u003c/a\u003e\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003edoLayout\u003c/a\u003e\u003c/code\u003e if there are any\n   windows to be laid out, and \u003ccode\u003e\u003ca\u003eemptyLayout\u003c/a\u003e\u003c/code\u003e otherwise.  Most\n   instances of \u003ccode\u003e\u003ca\u003eLayoutClass\u003c/a\u003e\u003c/code\u003e probably do not need to implement\n   \u003ccode\u003e\u003ca\u003erunLayout\u003c/a\u003e\u003c/code\u003e; it is only useful for layouts which wish to make\n   use of more of the \u003ccode\u003e\u003ca\u003eWorkspace\u003c/a\u003e\u003c/code\u003e information (for example,\n   \u003ca\u003eXMonad.Layout.PerWorkspace\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "runLayout",
          "package": "xmonad",
          "signature": "Workspace WorkspaceId (layout a) a -\u003e Rectangle -\u003e X ([(a, Rectangle)], Maybe (layout a))",
          "source": "src/XMonad-Core.html#runLayout",
          "type": "method"
        },
        "index": {
          "description": "By default runLayout calls doLayout if there are any windows to be laid out and emptyLayout otherwise Most instances of LayoutClass probably do not need to implement runLayout it is only useful for layouts which wish to make use of more of the Workspace information for example XMonad.Layout.PerWorkspace",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "runLayout",
          "normalized": "Workspace WorkspaceId(a b)b-\u003eRectangle-\u003eX([(b,Rectangle)],Maybe(a b))",
          "package": "xmonad",
          "partial": "Layout",
          "signature": "Workspace WorkspaceId(layout a)a-\u003eRectangle-\u003eX([(a,Rectangle)],Maybe(layout a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:runLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is basically a map function, running a function in the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad on\n each workspace with the output of that function being the modified workspace.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "runOnWorkspaces",
          "package": "xmonad",
          "signature": "(WindowSpace -\u003e X WindowSpace) -\u003e X ()",
          "source": "src/XMonad-Core.html#runOnWorkspaces",
          "type": "function"
        },
        "index": {
          "description": "This is basically map function running function in the monad on each workspace with the output of that function being the modified workspace",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "runOnWorkspaces",
          "normalized": "(WindowSpace-\u003eX WindowSpace)-\u003eX()",
          "package": "xmonad",
          "partial": "On Workspaces",
          "signature": "(WindowSpace-\u003eX WindowSpace)-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:runOnWorkspaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "runQuery",
          "package": "xmonad",
          "signature": "Query a -\u003e Window -\u003e X a",
          "source": "src/XMonad-Core.html#runQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "runQuery",
          "normalized": "Query a-\u003eWindow-\u003eX a",
          "package": "xmonad",
          "partial": "Query",
          "signature": "Query a-\u003eWindow-\u003eX a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:runQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad, given a chunk of \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad code, and an initial state\n Return the result, and final state\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "runX",
          "package": "xmonad",
          "signature": "XConf -\u003e XState -\u003e X a -\u003e IO (a, XState)",
          "source": "src/XMonad-Core.html#runX",
          "type": "function"
        },
        "index": {
          "description": "Run the monad given chunk of monad code and an initial state Return the result and final state",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "runX",
          "normalized": "XConf-\u003eXState-\u003eX a-\u003eIO(a,XState)",
          "package": "xmonad",
          "signature": "XConf-\u003eXState-\u003eX a-\u003eIO(a,XState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:runX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "screenRect",
          "package": "xmonad",
          "signature": "Rectangle",
          "source": "src/XMonad-Core.html#ScreenDetail",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "screenRect",
          "package": "xmonad",
          "partial": "Rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:screenRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003espawn. Launch an external application. Specifically, it double-forks and\n runs the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e you pass as a command to /bin/sh.\n\u003c/p\u003e\u003cp\u003eNote this function assumes your locale uses utf8.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "spawn",
          "package": "xmonad",
          "signature": "String -\u003e m ()",
          "source": "src/XMonad-Core.html#spawn",
          "type": "function"
        },
        "index": {
          "description": "spawn Launch an external application Specifically it double-forks and runs the String you pass as command to bin sh Note this function assumes your locale uses utf8",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "spawn",
          "normalized": "String-\u003ea()",
          "package": "xmonad",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e, but returns the \u003ccode\u003e\u003ca\u003eProcessID\u003c/a\u003e\u003c/code\u003e of the launched application\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "spawnPID",
          "package": "xmonad",
          "signature": "String -\u003e m ProcessID",
          "source": "src/XMonad-Core.html#spawnPID",
          "type": "function"
        },
        "index": {
          "description": "Like spawn but returns the ProcessID of the launched application",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "spawnPID",
          "normalized": "String-\u003ea ProcessID",
          "package": "xmonad",
          "partial": "PID",
          "signature": "String-\u003em ProcessID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:spawnPID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action to perform on startup\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "startupHook",
          "package": "xmonad",
          "signature": "(X ())",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "The action to perform on startup",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "startupHook",
          "normalized": "(X())",
          "package": "xmonad",
          "partial": "Hook",
          "signature": "(X())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:startupHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe preferred terminal application. Default: \"xterm\"\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "terminal",
          "package": "xmonad",
          "signature": "String",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "The preferred terminal application Default xterm",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "terminal",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:terminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe root window\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "theRoot",
          "package": "xmonad",
          "signature": "Window",
          "source": "src/XMonad-Core.html#XConf",
          "type": "function"
        },
        "index": {
          "description": "the root window",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "theRoot",
          "package": "xmonad",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:theRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e monad. Logs a string to stderr. The result may\n be found in your .xsession-errors file\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "trace",
          "package": "xmonad",
          "signature": "String -\u003e m ()",
          "source": "src/XMonad-Core.html#trace",
          "type": "function"
        },
        "index": {
          "description": "trace for the monad Logs string to stderr The result may be found in your xsession-errors file",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "trace",
          "normalized": "String-\u003ea()",
          "package": "xmonad",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Core",
          "name": "uninstallSignalHandlers",
          "package": "xmonad",
          "signature": "m ()",
          "source": "src/XMonad-Core.html#uninstallSignalHandlers",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "uninstallSignalHandlers",
          "normalized": "a()",
          "package": "xmonad",
          "partial": "Signal Handlers",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:uninstallSignalHandlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the argument, catching all exceptions.  Either this function or\n \u003ccode\u003e\u003ca\u003ecatchX\u003c/a\u003e\u003c/code\u003e should be used at all callsites of user customized code.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "userCode",
          "package": "xmonad",
          "signature": "X a -\u003e X (Maybe a)",
          "source": "src/XMonad-Core.html#userCode",
          "type": "function"
        },
        "index": {
          "description": "Execute the argument catching all exceptions Either this function or catchX should be used at all callsites of user customized code",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "userCode",
          "normalized": "X a-\u003eX(Maybe a)",
          "package": "xmonad",
          "partial": "Code",
          "signature": "X a-\u003eX(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:userCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as userCode but with a default argument to return instead of using\n Maybe, provided for convenience.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "userCodeDef",
          "package": "xmonad",
          "signature": "a -\u003e X a -\u003e X a",
          "source": "src/XMonad-Core.html#userCodeDef",
          "type": "function"
        },
        "index": {
          "description": "Same as userCode but with default argument to return instead of using Maybe provided for convenience",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "userCodeDef",
          "normalized": "a-\u003eX a-\u003eX a",
          "package": "xmonad",
          "partial": "Code Def",
          "signature": "a-\u003eX a-\u003eX a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:userCodeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of expected UnmapEvents\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "waitingUnmap",
          "package": "xmonad",
          "signature": "(Map Window Int)",
          "source": "src/XMonad-Core.html#XState",
          "type": "function"
        },
        "index": {
          "description": "the number of expected UnmapEvents",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "waitingUnmap",
          "package": "xmonad",
          "partial": "Unmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:waitingUnmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally run an action, using a \u003ccode\u003eMaybe a\u003c/code\u003e to decide.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "whenJust",
          "package": "xmonad",
          "signature": "Maybe a -\u003e (a -\u003e m ()) -\u003e m ()",
          "source": "src/XMonad-Core.html#whenJust",
          "type": "function"
        },
        "index": {
          "description": "Conditionally run an action using Maybe to decide",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "whenJust",
          "normalized": "Maybe a-\u003e(a-\u003eb())-\u003eb()",
          "package": "xmonad",
          "partial": "Just",
          "signature": "Maybe a-\u003e(a-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:whenJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally run an action, using a \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e event to decide\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "whenX",
          "package": "xmonad",
          "signature": "X Bool -\u003e X () -\u003e X ()",
          "source": "src/XMonad-Core.html#whenX",
          "type": "function"
        },
        "index": {
          "description": "Conditionally run an action using event to decide",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "whenX",
          "normalized": "X Bool-\u003eX()-\u003eX()",
          "package": "xmonad",
          "signature": "X Bool-\u003eX()-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:whenX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eworkspace list\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "windowset",
          "package": "xmonad",
          "signature": "WindowSet",
          "source": "src/XMonad-Core.html#XState",
          "type": "function"
        },
        "index": {
          "description": "workspace list",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "windowset",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:windowset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a monad action with the current display settings\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "withDisplay",
          "package": "xmonad",
          "signature": "(Display -\u003e X a) -\u003e X a",
          "source": "src/XMonad-Core.html#withDisplay",
          "type": "function"
        },
        "index": {
          "description": "Run monad action with the current display settings",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "withDisplay",
          "normalized": "(Display-\u003eX a)-\u003eX a",
          "package": "xmonad",
          "partial": "Display",
          "signature": "(Display-\u003eX a)-\u003eX a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:withDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a monadic action with the current stack set\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "withWindowSet",
          "package": "xmonad",
          "signature": "(WindowSet -\u003e X a) -\u003e X a",
          "source": "src/XMonad-Core.html#withWindowSet",
          "type": "function"
        },
        "index": {
          "description": "Run monadic action with the current stack set",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "withWindowSet",
          "normalized": "(WindowSet-\u003eX a)-\u003eX a",
          "package": "xmonad",
          "partial": "Window Set",
          "signature": "(WindowSet-\u003eX a)-\u003eX a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:withWindowSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of workspaces' names\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "workspaces",
          "package": "xmonad",
          "signature": "[String]",
          "source": "src/XMonad-Core.html#XConfig",
          "type": "function"
        },
        "index": {
          "description": "The list of workspaces names",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "workspaces",
          "normalized": "[String]",
          "package": "xmonad",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:workspaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA replacement for \u003ccode\u003e\u003ca\u003eforkProcess\u003c/a\u003e\u003c/code\u003e which resets default signal handlers.\n\u003c/p\u003e",
          "module": "XMonad.Core",
          "name": "xfork",
          "package": "xmonad",
          "signature": "IO () -\u003e m ProcessID",
          "source": "src/XMonad-Core.html#xfork",
          "type": "function"
        },
        "index": {
          "description": "replacement for forkProcess which resets default signal handlers",
          "hierarchy": "XMonad Core",
          "module": "XMonad.Core",
          "name": "xfork",
          "normalized": "IO()-\u003ea ProcessID",
          "package": "xmonad",
          "signature": "IO()-\u003em ProcessID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Core.html#v:xfork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe collection of core layouts.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XMonad.Layout",
          "name": "Layout",
          "package": "xmonad",
          "source": "src/XMonad-Layout.html",
          "type": "module"
        },
        "index": {
          "description": "The collection of core layouts",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "Layout",
          "package": "xmonad",
          "partial": "Layout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessages to change the current layout.\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "ChangeLayout",
          "package": "xmonad",
          "source": "src/XMonad-Layout.html#ChangeLayout",
          "type": "data"
        },
        "index": {
          "description": "Messages to change the current layout",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "ChangeLayout",
          "package": "xmonad",
          "partial": "Change Layout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:ChangeLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA layout that allows users to switch between various layout options.\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "Choose",
          "package": "xmonad",
          "source": "src/XMonad-Layout.html#Choose",
          "type": "data"
        },
        "index": {
          "description": "layout that allows users to switch between various layout options",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "Choose",
          "package": "xmonad",
          "partial": "Choose",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:Choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple fullscreen mode. Renders the focused window fullscreen.\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "Full",
          "package": "xmonad",
          "source": "src/XMonad-Layout.html#Full",
          "type": "data"
        },
        "index": {
          "description": "Simple fullscreen mode Renders the focused window fullscreen",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "Full",
          "package": "xmonad",
          "partial": "Full",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:Full"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease the number of clients in the master pane.\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "IncMasterN",
          "package": "xmonad",
          "source": "src/XMonad-Layout.html#IncMasterN",
          "type": "data"
        },
        "index": {
          "description": "Increase the number of clients in the master pane",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "IncMasterN",
          "package": "xmonad",
          "partial": "Inc Master",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:IncMasterN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMirror a layout, compute its 90 degree rotated form.\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "Mirror",
          "package": "xmonad",
          "source": "src/XMonad-Layout.html#Mirror",
          "type": "newtype"
        },
        "index": {
          "description": "Mirror layout compute its degree rotated form",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "Mirror",
          "package": "xmonad",
          "partial": "Mirror",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:Mirror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the size of the master pane.\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "Resize",
          "package": "xmonad",
          "source": "src/XMonad-Layout.html#Resize",
          "type": "data"
        },
        "index": {
          "description": "Change the size of the master pane",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "Resize",
          "package": "xmonad",
          "partial": "Resize",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:Resize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe builtin tiling mode of xmonad. Supports \u003ccode\u003e\u003ca\u003eShrink\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExpand\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eIncMasterN\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "Tall",
          "package": "xmonad",
          "source": "src/XMonad-Layout.html#Tall",
          "type": "data"
        },
        "index": {
          "description": "The builtin tiling mode of xmonad Supports Shrink Expand and IncMasterN",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "Tall",
          "package": "xmonad",
          "partial": "Tall",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#t:Tall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe layout choice combinator\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "(|||)",
          "package": "xmonad",
          "signature": "l a -\u003e r a -\u003e Choose l r a",
          "source": "src/XMonad-Layout.html#%7C%7C%7C",
          "type": "function"
        },
        "index": {
          "description": "The layout choice combinator",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "(|||) |||",
          "normalized": "a b-\u003ec b-\u003eChoose a c b",
          "package": "xmonad",
          "signature": "l a-\u003er a-\u003eChoose l r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Layout",
          "name": "Expand",
          "package": "xmonad",
          "signature": "Expand",
          "source": "src/XMonad-Layout.html#Resize",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "Expand",
          "package": "xmonad",
          "partial": "Expand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:Expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Layout",
          "name": "FirstLayout",
          "package": "xmonad",
          "signature": "FirstLayout",
          "source": "src/XMonad-Layout.html#ChangeLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "FirstLayout",
          "package": "xmonad",
          "partial": "First Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:FirstLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Layout",
          "name": "Full",
          "package": "xmonad",
          "signature": "Full",
          "source": "src/XMonad-Layout.html#Full",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "Full",
          "package": "xmonad",
          "partial": "Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:Full"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Layout",
          "name": "IncMasterN",
          "package": "xmonad",
          "signature": "IncMasterN !Int",
          "source": "src/XMonad-Layout.html#IncMasterN",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "IncMasterN",
          "package": "xmonad",
          "partial": "Inc Master",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:IncMasterN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Layout",
          "name": "Mirror",
          "package": "xmonad",
          "signature": "Mirror (l a)",
          "source": "src/XMonad-Layout.html#Mirror",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "Mirror",
          "package": "xmonad",
          "partial": "Mirror",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:Mirror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Layout",
          "name": "NextLayout",
          "package": "xmonad",
          "signature": "NextLayout",
          "source": "src/XMonad-Layout.html#ChangeLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "NextLayout",
          "package": "xmonad",
          "partial": "Next Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:NextLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Layout",
          "name": "Shrink",
          "package": "xmonad",
          "signature": "Shrink",
          "source": "src/XMonad-Layout.html#Resize",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "Shrink",
          "package": "xmonad",
          "partial": "Shrink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:Shrink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Layout",
          "name": "Tall",
          "package": "xmonad",
          "signature": "Tall",
          "source": "src/XMonad-Layout.html#Tall",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "Tall",
          "package": "xmonad",
          "partial": "Tall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:Tall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMirror a rectangle.\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "mirrorRect",
          "package": "xmonad",
          "signature": "Rectangle -\u003e Rectangle",
          "source": "src/XMonad-Layout.html#mirrorRect",
          "type": "function"
        },
        "index": {
          "description": "Mirror rectangle",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "mirrorRect",
          "normalized": "Rectangle-\u003eRectangle",
          "package": "xmonad",
          "partial": "Rect",
          "signature": "Rectangle-\u003eRectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:mirrorRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Layout",
          "name": "splitHorizontally",
          "package": "xmonad",
          "signature": "Int -\u003e Rectangle -\u003e [Rectangle]",
          "source": "src/XMonad-Layout.html#splitHorizontally",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "splitHorizontally",
          "normalized": "Int-\u003eRectangle-\u003e[Rectangle]",
          "package": "xmonad",
          "partial": "Horizontally",
          "signature": "Int-\u003eRectangle-\u003e[Rectangle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:splitHorizontally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Layout",
          "name": "splitHorizontallyBy",
          "package": "xmonad",
          "signature": "r -\u003e Rectangle -\u003e (Rectangle, Rectangle)",
          "source": "src/XMonad-Layout.html#splitHorizontallyBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "splitHorizontallyBy",
          "normalized": "a-\u003eRectangle-\u003e(Rectangle,Rectangle)",
          "package": "xmonad",
          "partial": "Horizontally By",
          "signature": "r-\u003eRectangle-\u003e(Rectangle,Rectangle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:splitHorizontallyBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Layout",
          "name": "splitVertically",
          "package": "xmonad",
          "signature": "Int -\u003e Rectangle -\u003e [Rectangle]",
          "source": "src/XMonad-Layout.html#splitVertically",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "splitVertically",
          "normalized": "Int-\u003eRectangle-\u003e[Rectangle]",
          "package": "xmonad",
          "partial": "Vertically",
          "signature": "Int-\u003eRectangle-\u003e[Rectangle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:splitVertically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Layout",
          "name": "splitVerticallyBy",
          "package": "xmonad",
          "signature": "r -\u003e Rectangle -\u003e (Rectangle, Rectangle)",
          "source": "src/XMonad-Layout.html#splitVerticallyBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "splitVerticallyBy",
          "normalized": "a-\u003eRectangle-\u003e(Rectangle,Rectangle)",
          "package": "xmonad",
          "partial": "Vertically By",
          "signature": "r-\u003eRectangle-\u003e(Rectangle,Rectangle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:splitVerticallyBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default number of windows in the master pane (default: 1)\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "tallNMaster",
          "package": "xmonad",
          "signature": "Int",
          "source": "src/XMonad-Layout.html#Tall",
          "type": "function"
        },
        "index": {
          "description": "The default number of windows in the master pane default",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "tallNMaster",
          "package": "xmonad",
          "partial": "NMaster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:tallNMaster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault proportion of screen occupied by master pane (default: 1/2)\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "tallRatio",
          "package": "xmonad",
          "signature": "Rational",
          "source": "src/XMonad-Layout.html#Tall",
          "type": "function"
        },
        "index": {
          "description": "Default proportion of screen occupied by master pane default",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "tallRatio",
          "package": "xmonad",
          "partial": "Ratio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:tallRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePercent of screen to increment by when resizing panes (default: 3/100)\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "tallRatioIncrement",
          "package": "xmonad",
          "signature": "Rational",
          "source": "src/XMonad-Layout.html#Tall",
          "type": "function"
        },
        "index": {
          "description": "Percent of screen to increment by when resizing panes default",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "tallRatioIncrement",
          "package": "xmonad",
          "partial": "Ratio Increment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:tallRatioIncrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the positions for windows using the default two-pane tiling\n algorithm.\n\u003c/p\u003e\u003cp\u003eThe screen is divided into two panes. All clients are\n then partioned between these two panes. One pane, the master, by\n convention has the least number of windows in it.\n\u003c/p\u003e",
          "module": "XMonad.Layout",
          "name": "tile",
          "package": "xmonad",
          "signature": "Rational-\u003e Rectangle-\u003e Int-\u003e Int-\u003e [Rectangle]",
          "type": "function"
        },
        "index": {
          "description": "Compute the positions for windows using the default two-pane tiling algorithm The screen is divided into two panes All clients are then partioned between these two panes One pane the master by convention has the least number of windows in it",
          "hierarchy": "XMonad Layout",
          "module": "XMonad.Layout",
          "name": "tile",
          "normalized": "Rational-\u003eRectangle-\u003eInt-\u003eInt-\u003e[Rectangle]",
          "package": "xmonad",
          "signature": "Rational-\u003eRectangle-\u003eInt-\u003eInt-\u003e[Rectangle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Layout.html#v:tile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003exmonad, a minimalist, tiling window manager for X11\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XMonad.Main",
          "name": "Main",
          "package": "xmonad",
          "source": "src/XMonad-Main.html",
          "type": "module"
        },
        "index": {
          "description": "xmonad minimalist tiling window manager for X11",
          "hierarchy": "XMonad Main",
          "module": "XMonad.Main",
          "name": "Main",
          "package": "xmonad",
          "partial": "Main",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Main.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main entry point\n\u003c/p\u003e",
          "module": "XMonad.Main",
          "name": "xmonad",
          "package": "xmonad",
          "signature": "XConfig l -\u003e IO ()",
          "source": "src/XMonad-Main.html#xmonad",
          "type": "function"
        },
        "index": {
          "description": "The main entry point",
          "hierarchy": "XMonad Main",
          "module": "XMonad.Main",
          "name": "xmonad",
          "normalized": "XConfig a-\u003eIO()",
          "package": "xmonad",
          "signature": "XConfig l-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Main.html#v:xmonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn EDSL for ManageHooks\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XMonad.ManageHook",
          "name": "ManageHook",
          "package": "xmonad",
          "source": "src/XMonad-ManageHook.html",
          "type": "module"
        },
        "index": {
          "description": "An EDSL for ManageHooks",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "ManageHook",
          "package": "xmonad",
          "partial": "Manage Hook",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ep --\u003e x\u003c/code\u003e.  If \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, execute the \u003ccode\u003e\u003ca\u003eManageHook\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e (--\u003e) :: Monoid m =\u003e Query Bool -\u003e Query m -\u003e Query m -- a simpler type\n\u003c/pre\u003e",
          "module": "XMonad.ManageHook",
          "name": "(--\u003e)",
          "package": "xmonad",
          "signature": "m Bool -\u003e m a -\u003e m a",
          "source": "src/XMonad-ManageHook.html#--%3E",
          "type": "function"
        },
        "index": {
          "description": "If returns True execute the ManageHook Monoid Query Bool Query Query simpler type",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "(--\u003e) --\u003e",
          "normalized": "a Bool-\u003ea b-\u003ea b",
          "package": "xmonad",
          "signature": "m Bool-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:-45--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e lifted to a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "(\u003c||\u003e)",
          "package": "xmonad",
          "signature": "m Bool -\u003e m Bool -\u003e m Bool",
          "source": "src/XMonad-ManageHook.html#%3C%7C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "lifted to Monad",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "(\u003c||\u003e) \u003c||\u003e",
          "normalized": "a Bool-\u003ea Bool-\u003ea Bool",
          "package": "xmonad",
          "signature": "m Bool-\u003em Bool-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:-60--124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e lifted to a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "(\u003c&&\u003e)",
          "package": "xmonad",
          "signature": "m Bool -\u003e m Bool -\u003e m Bool",
          "source": "src/XMonad-ManageHook.html#%3C%26%26%3E",
          "type": "function"
        },
        "index": {
          "description": "lifted to Monad",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "(\u003c&&\u003e) \u003c&&\u003e",
          "normalized": "a Bool-\u003ea Bool-\u003ea Bool",
          "package": "xmonad",
          "signature": "m Bool-\u003em Bool-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:-60--38--38--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e. Compose two \u003ccode\u003e\u003ca\u003eManageHook\u003c/a\u003e\u003c/code\u003e from right to left.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "(\u003c+\u003e)",
          "package": "xmonad",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/XMonad-ManageHook.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Infix mappend Compose two ManageHook from right to left",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "xmonad",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eq =? x\u003c/code\u003e. if the result of \u003ccode\u003eq\u003c/code\u003e equals \u003ccode\u003ex\u003c/code\u003e, return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "(=?)",
          "package": "xmonad",
          "signature": "Query a -\u003e a -\u003e Query Bool",
          "source": "src/XMonad-ManageHook.html#%3D%3F",
          "type": "function"
        },
        "index": {
          "description": "if the result of equals return True",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "(=?) =?",
          "normalized": "Query a-\u003ea-\u003eQuery Bool",
          "package": "xmonad",
          "signature": "Query a-\u003ea-\u003eQuery Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:-61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the application name.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "appName",
          "package": "xmonad",
          "signature": "Query String",
          "source": "src/XMonad-ManageHook.html#appName",
          "type": "function"
        },
        "index": {
          "description": "Return the application name",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "appName",
          "package": "xmonad",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:appName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the resource class.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "className",
          "package": "xmonad",
          "signature": "Query String",
          "source": "src/XMonad-ManageHook.html#className",
          "type": "function"
        },
        "index": {
          "description": "Return the resource class",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "className",
          "package": "xmonad",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:className"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose the list of \u003ccode\u003e\u003ca\u003eManageHook\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "composeAll",
          "package": "xmonad",
          "signature": "[m] -\u003e m",
          "source": "src/XMonad-ManageHook.html#composeAll",
          "type": "function"
        },
        "index": {
          "description": "Compose the list of ManageHook",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "composeAll",
          "normalized": "[a]-\u003ea",
          "package": "xmonad",
          "partial": "All",
          "signature": "[m]-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:composeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the \u003ccode\u003e\u003ca\u003eWindowSet\u003c/a\u003e\u003c/code\u003e with a pure function.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "doF",
          "package": "xmonad",
          "signature": "(s -\u003e s) -\u003e Query (Endo s)",
          "source": "src/XMonad-ManageHook.html#doF",
          "type": "function"
        },
        "index": {
          "description": "Modify the WindowSet with pure function",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "doF",
          "normalized": "(a-\u003ea)-\u003eQuery(Endo a)",
          "package": "xmonad",
          "signature": "(s-\u003es)-\u003eQuery(Endo s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:doF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the window to the floating layer.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "doFloat",
          "package": "xmonad",
          "signature": "ManageHook",
          "source": "src/XMonad-ManageHook.html#doFloat",
          "type": "function"
        },
        "index": {
          "description": "Move the window to the floating layer",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "doFloat",
          "package": "xmonad",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:doFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the window and remove it from the \u003ccode\u003e\u003ca\u003eWindowSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "doIgnore",
          "package": "xmonad",
          "signature": "ManageHook",
          "source": "src/XMonad-ManageHook.html#doIgnore",
          "type": "function"
        },
        "index": {
          "description": "Map the window and remove it from the WindowSet",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "doIgnore",
          "package": "xmonad",
          "partial": "Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:doIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the window to a given workspace\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "doShift",
          "package": "xmonad",
          "signature": "WorkspaceId -\u003e ManageHook",
          "source": "src/XMonad-ManageHook.html#doShift",
          "type": "function"
        },
        "index": {
          "description": "Move the window to given workspace",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "doShift",
          "normalized": "WorkspaceId-\u003eManageHook",
          "package": "xmonad",
          "partial": "Shift",
          "signature": "WorkspaceId-\u003eManageHook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:doShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.ManageHook",
          "name": "getStringProperty",
          "package": "xmonad",
          "signature": "Display -\u003e Window -\u003e String -\u003e X (Maybe String)",
          "source": "src/XMonad-ManageHook.html#getStringProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "getStringProperty",
          "normalized": "Display-\u003eWindow-\u003eString-\u003eX(Maybe String)",
          "package": "xmonad",
          "partial": "String Property",
          "signature": "Display-\u003eWindow-\u003eString-\u003eX(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:getStringProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity hook that returns the WindowSet unchanged.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "idHook",
          "package": "xmonad",
          "signature": "m",
          "source": "src/XMonad-ManageHook.html#idHook",
          "type": "function"
        },
        "index": {
          "description": "The identity hook that returns the WindowSet unchanged",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "idHook",
          "package": "xmonad",
          "partial": "Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:idHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e action to a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "liftX",
          "package": "xmonad",
          "signature": "X a -\u003e Query a",
          "source": "src/XMonad-ManageHook.html#liftX",
          "type": "function"
        },
        "index": {
          "description": "Lift an action to Query",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "liftX",
          "normalized": "X a-\u003eQuery a",
          "package": "xmonad",
          "signature": "X a-\u003eQuery a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:liftX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackwards compatible alias for \u003ccode\u003e\u003ca\u003eappName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "resource",
          "package": "xmonad",
          "signature": "Query String",
          "source": "src/XMonad-ManageHook.html#resource",
          "type": "function"
        },
        "index": {
          "description": "Backwards compatible alias for appName",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "resource",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query that can return an arbitrary X property of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e,\n   identified by name.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "stringProperty",
          "package": "xmonad",
          "signature": "String -\u003e Query String",
          "source": "src/XMonad-ManageHook.html#stringProperty",
          "type": "function"
        },
        "index": {
          "description": "query that can return an arbitrary property of type String identified by name",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "stringProperty",
          "normalized": "String-\u003eQuery String",
          "package": "xmonad",
          "partial": "Property",
          "signature": "String-\u003eQuery String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:stringProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the window title.\n\u003c/p\u003e",
          "module": "XMonad.ManageHook",
          "name": "title",
          "package": "xmonad",
          "signature": "Query String",
          "source": "src/XMonad-ManageHook.html#title",
          "type": "function"
        },
        "index": {
          "description": "Return the window title",
          "hierarchy": "XMonad ManageHook",
          "module": "XMonad.ManageHook",
          "name": "title",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-ManageHook.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XMonad.Operations",
          "name": "Operations",
          "package": "xmonad",
          "source": "src/XMonad-Operations.html",
          "type": "module"
        },
        "index": {
          "description": "Operations",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "Operations",
          "package": "xmonad",
          "partial": "Operations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupport for window size hints\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "D",
          "package": "xmonad",
          "source": "src/XMonad-Operations.html#D",
          "type": "type"
        },
        "index": {
          "description": "Support for window size hints",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "D",
          "package": "xmonad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce the dimensions so their aspect ratio falls between the two given aspect ratios.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "applyAspectHint",
          "package": "xmonad",
          "signature": "(D, D) -\u003e D -\u003e D",
          "source": "src/XMonad-Operations.html#applyAspectHint",
          "type": "function"
        },
        "index": {
          "description": "Reduce the dimensions so their aspect ratio falls between the two given aspect ratios",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "applyAspectHint",
          "normalized": "(D,D)-\u003eD-\u003eD",
          "package": "xmonad",
          "partial": "Aspect Hint",
          "signature": "(D,D)-\u003eD-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:applyAspectHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce the dimensions if they exceed the given maximum dimensions.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "applyMaxSizeHint",
          "package": "xmonad",
          "signature": "D -\u003e D -\u003e D",
          "source": "src/XMonad-Operations.html#applyMaxSizeHint",
          "type": "function"
        },
        "index": {
          "description": "Reduce the dimensions if they exceed the given maximum dimensions",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "applyMaxSizeHint",
          "normalized": "D-\u003eD-\u003eD",
          "package": "xmonad",
          "partial": "Max Size Hint",
          "signature": "D-\u003eD-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:applyMaxSizeHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce the dimensions so they are a multiple of the size increments.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "applyResizeIncHint",
          "package": "xmonad",
          "signature": "D -\u003e D -\u003e D",
          "source": "src/XMonad-Operations.html#applyResizeIncHint",
          "type": "function"
        },
        "index": {
          "description": "Reduce the dimensions so they are multiple of the size increments",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "applyResizeIncHint",
          "normalized": "D-\u003eD-\u003eD",
          "package": "xmonad",
          "partial": "Resize Inc Hint",
          "signature": "D-\u003eD-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:applyResizeIncHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce the dimensions if needed to comply to the given SizeHints, taking\n window borders into account.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "applySizeHints",
          "package": "xmonad",
          "signature": "Dimension -\u003e SizeHints -\u003e (a, a) -\u003e D",
          "source": "src/XMonad-Operations.html#applySizeHints",
          "type": "function"
        },
        "index": {
          "description": "Reduce the dimensions if needed to comply to the given SizeHints taking window borders into account",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "applySizeHints",
          "normalized": "Dimension-\u003eSizeHints-\u003e(a,a)-\u003eD",
          "package": "xmonad",
          "partial": "Size Hints",
          "signature": "Dimension-\u003eSizeHints-\u003e(a,a)-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:applySizeHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXXX comment me\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "applySizeHints'",
          "package": "xmonad",
          "signature": "SizeHints -\u003e D -\u003e D",
          "source": "src/XMonad-Operations.html#applySizeHints%27",
          "type": "function"
        },
        "index": {
          "description": "XXX comment me",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "applySizeHints'",
          "normalized": "SizeHints-\u003eD-\u003eD",
          "package": "xmonad",
          "partial": "Size Hints'",
          "signature": "SizeHints-\u003eD-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:applySizeHints-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce the dimensions if needed to comply to the given SizeHints.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "applySizeHintsContents",
          "package": "xmonad",
          "signature": "SizeHints -\u003e (a, a) -\u003e D",
          "source": "src/XMonad-Operations.html#applySizeHintsContents",
          "type": "function"
        },
        "index": {
          "description": "Reduce the dimensions if needed to comply to the given SizeHints",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "applySizeHintsContents",
          "normalized": "SizeHints-\u003e(a,a)-\u003eD",
          "package": "xmonad",
          "partial": "Size Hints Contents",
          "signature": "SizeHints-\u003e(a,a)-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:applySizeHintsContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a message to all layouts, without refreshing.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "broadcastMessage",
          "package": "xmonad",
          "signature": "a -\u003e X ()",
          "source": "src/XMonad-Operations.html#broadcastMessage",
          "type": "function"
        },
        "index": {
          "description": "Send message to all layouts without refreshing",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "broadcastMessage",
          "normalized": "a-\u003eX()",
          "package": "xmonad",
          "partial": "Message",
          "signature": "a-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:broadcastMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrip numlock/capslock from a mask\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "cleanMask",
          "package": "xmonad",
          "signature": "KeyMask -\u003e X KeyMask",
          "source": "src/XMonad-Operations.html#cleanMask",
          "type": "function"
        },
        "index": {
          "description": "Strip numlock capslock from mask",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "cleanMask",
          "normalized": "KeyMask-\u003eX KeyMask",
          "package": "xmonad",
          "partial": "Mask",
          "signature": "KeyMask-\u003eX KeyMask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:cleanMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclearEvents.  Remove all events of a given type from the event queue.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "clearEvents",
          "package": "xmonad",
          "signature": "EventMask -\u003e X ()",
          "source": "src/XMonad-Operations.html#clearEvents",
          "type": "function"
        },
        "index": {
          "description": "clearEvents Remove all events of given type from the event queue",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "clearEvents",
          "normalized": "EventMask-\u003eX()",
          "package": "xmonad",
          "partial": "Events",
          "signature": "EventMask-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:clearEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe client events that xmonad is interested in\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "clientMask",
          "package": "xmonad",
          "signature": "EventMask",
          "source": "src/XMonad-Operations.html#clientMask",
          "type": "function"
        },
        "index": {
          "description": "The client events that xmonad is interested in",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "clientMask",
          "package": "xmonad",
          "partial": "Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:clientMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the first rectangle is contained within, but not equal\n to the second.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "containedIn",
          "package": "xmonad",
          "signature": "Rectangle -\u003e Rectangle -\u003e Bool",
          "source": "src/XMonad-Operations.html#containedIn",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the first rectangle is contained within but not equal to the second",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "containedIn",
          "normalized": "Rectangle-\u003eRectangle-\u003eBool",
          "package": "xmonad",
          "partial": "In",
          "signature": "Rectangle-\u003eRectangle-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:containedIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinations of extra modifier masks we need to grab keys/buttons for.\n (numlock and capslock)\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "extraModifiers",
          "package": "xmonad",
          "signature": "X [KeyMask]",
          "source": "src/XMonad-Operations.html#extraModifiers",
          "type": "function"
        },
        "index": {
          "description": "Combinations of extra modifier masks we need to grab keys buttons for numlock and capslock",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "extraModifiers",
          "normalized": "X[KeyMask]",
          "package": "xmonad",
          "partial": "Modifiers",
          "signature": "X[KeyMask]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:extraModifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a tiled window floating, using its suggested rectangle\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "float",
          "package": "xmonad",
          "signature": "Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#float",
          "type": "function"
        },
        "index": {
          "description": "Make tiled window floating using its suggested rectangle",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "float",
          "normalized": "Window-\u003eX()",
          "package": "xmonad",
          "signature": "Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating layer support\n\u003c/p\u003e\u003cp\u003eGiven a window, find the screen it is located on, and compute\n the geometry of that window wrt. that screen.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "floatLocation",
          "package": "xmonad",
          "signature": "Window -\u003e X (ScreenId, RationalRect)",
          "source": "src/XMonad-Operations.html#floatLocation",
          "type": "function"
        },
        "index": {
          "description": "Floating layer support Given window find the screen it is located on and compute the geometry of that window wrt that screen",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "floatLocation",
          "normalized": "Window-\u003eX(ScreenId,RationalRect)",
          "package": "xmonad",
          "partial": "Location",
          "signature": "Window-\u003eX(ScreenId,RationalRect)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:floatLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet focus explicitly to window \u003ccode\u003ew\u003c/code\u003e if it is managed by us, or root.\n This happens if X notices we've moved the mouse (and perhaps moved\n the mouse to a new screen).\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "focus",
          "package": "xmonad",
          "signature": "Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#focus",
          "type": "function"
        },
        "index": {
          "description": "Set focus explicitly to window if it is managed by us or root This happens if notices we ve moved the mouse and perhaps moved the mouse to new screen",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "focus",
          "normalized": "Window-\u003eX()",
          "package": "xmonad",
          "signature": "Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCleans the list of screens according to the rules documented for\n nubScreens.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "getCleanedScreenInfo",
          "package": "xmonad",
          "signature": "Display -\u003e m [Rectangle]",
          "source": "src/XMonad-Operations.html#getCleanedScreenInfo",
          "type": "function"
        },
        "index": {
          "description": "Cleans the list of screens according to the rules documented for nubScreens",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "getCleanedScreenInfo",
          "normalized": "Display-\u003ea[Rectangle]",
          "package": "xmonad",
          "partial": "Cleaned Screen Info",
          "signature": "Display-\u003em[Rectangle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:getCleanedScreenInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehide. Hide a window by unmapping it, and setting Iconified.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "hide",
          "package": "xmonad",
          "signature": "Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#hide",
          "type": "function"
        },
        "index": {
          "description": "hide Hide window by unmapping it and setting Iconified",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "hide",
          "normalized": "Window-\u003eX()",
          "package": "xmonad",
          "signature": "Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:hide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003ePixel\u003c/a\u003e\u003c/code\u003e value for a named color\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "initColor",
          "package": "xmonad",
          "signature": "Display -\u003e String -\u003e IO (Maybe Pixel)",
          "source": "src/XMonad-Operations.html#initColor",
          "type": "function"
        },
        "index": {
          "description": "Get the Pixel value for named color",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "initColor",
          "normalized": "Display-\u003eString-\u003eIO(Maybe Pixel)",
          "package": "xmonad",
          "partial": "Color",
          "signature": "Display-\u003eString-\u003eIO(Maybe Pixel)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:initColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if window is under management by us\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "isClient",
          "package": "xmonad",
          "signature": "Window -\u003e X Bool",
          "source": "src/XMonad-Operations.html#isClient",
          "type": "function"
        },
        "index": {
          "description": "True if window is under management by us",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "isClient",
          "normalized": "Window-\u003eX Bool",
          "package": "xmonad",
          "partial": "Client",
          "signature": "Window-\u003eX Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:isClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill the currently focused client.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "kill",
          "package": "xmonad",
          "signature": "X ()",
          "source": "src/XMonad-Operations.html#kill",
          "type": "function"
        },
        "index": {
          "description": "Kill the currently focused client",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "kill",
          "normalized": "X()",
          "package": "xmonad",
          "signature": "X()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill the specified window. If we do kill it, we'll get a\n delete notify back from X.\n\u003c/p\u003e\u003cp\u003eThere are two ways to delete a window. Either just kill it, or if it\n supports the delete protocol, send a delete event (e.g. firefox)\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "killWindow",
          "package": "xmonad",
          "signature": "Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#killWindow",
          "type": "function"
        },
        "index": {
          "description": "Kill the specified window If we do kill it we ll get delete notify back from There are two ways to delete window Either just kill it or if it supports the delete protocol send delete event e.g firefox",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "killWindow",
          "normalized": "Window-\u003eX()",
          "package": "xmonad",
          "partial": "Window",
          "signature": "Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:killWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWindow manager operations\n manage. Add a new window to be managed in the current workspace.\n Bring it into focus.\n\u003c/p\u003e\u003cp\u003eWhether the window is already managed, or not, it is mapped, has its\n border set, and its event mask set.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "manage",
          "package": "xmonad",
          "signature": "Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#manage",
          "type": "function"
        },
        "index": {
          "description": "Window manager operations manage Add new window to be managed in the current workspace Bring it into focus Whether the window is already managed or not it is mapped has its border set and its event mask set",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "manage",
          "normalized": "Window-\u003eX()",
          "package": "xmonad",
          "signature": "Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:manage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a window, build an adjuster function that will reduce the given\n dimensions according to the window's border width and size hints.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "mkAdjust",
          "package": "xmonad",
          "signature": "Window -\u003e X (D -\u003e D)",
          "source": "src/XMonad-Operations.html#mkAdjust",
          "type": "function"
        },
        "index": {
          "description": "Given window build an adjuster function that will reduce the given dimensions according to the window border width and size hints",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "mkAdjust",
          "normalized": "Window-\u003eX(D-\u003eD)",
          "package": "xmonad",
          "partial": "Adjust",
          "signature": "Window-\u003eX(D-\u003eD)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:mkAdjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulate mouse motion events\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "mouseDrag",
          "package": "xmonad",
          "signature": "(Position -\u003e Position -\u003e X ()) -\u003e X () -\u003e X ()",
          "source": "src/XMonad-Operations.html#mouseDrag",
          "type": "function"
        },
        "index": {
          "description": "Accumulate mouse motion events",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "mouseDrag",
          "normalized": "(Position-\u003ePosition-\u003eX())-\u003eX()-\u003eX()",
          "package": "xmonad",
          "partial": "Drag",
          "signature": "(Position-\u003ePosition-\u003eX())-\u003eX()-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:mouseDrag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXXX comment me\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "mouseMoveWindow",
          "package": "xmonad",
          "signature": "Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#mouseMoveWindow",
          "type": "function"
        },
        "index": {
          "description": "XXX comment me",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "mouseMoveWindow",
          "normalized": "Window-\u003eX()",
          "package": "xmonad",
          "partial": "Move Window",
          "signature": "Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:mouseMoveWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXXX comment me\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "mouseResizeWindow",
          "package": "xmonad",
          "signature": "Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#mouseResizeWindow",
          "type": "function"
        },
        "index": {
          "description": "XXX comment me",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "mouseResizeWindow",
          "normalized": "Window-\u003eX()",
          "package": "xmonad",
          "partial": "Resize Window",
          "signature": "Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:mouseResizeWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of screens, remove all duplicated screens and screens that\n are entirely contained within another.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "nubScreens",
          "package": "xmonad",
          "signature": "[Rectangle] -\u003e [Rectangle]",
          "source": "src/XMonad-Operations.html#nubScreens",
          "type": "function"
        },
        "index": {
          "description": "Given list of screens remove all duplicated screens and screens that are entirely contained within another",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "nubScreens",
          "normalized": "[Rectangle]-\u003e[Rectangle]",
          "package": "xmonad",
          "partial": "Screens",
          "signature": "[Rectangle]-\u003e[Rectangle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:nubScreens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a point, determine the screen (if any) that contains it.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "pointScreen",
          "package": "xmonad",
          "signature": "Position -\u003e Position -\u003e X (Maybe (Screen WorkspaceId (Layout Window) Window ScreenId ScreenDetail))",
          "source": "src/XMonad-Operations.html#pointScreen",
          "type": "function"
        },
        "index": {
          "description": "Given point determine the screen if any that contains it",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "pointScreen",
          "normalized": "Position-\u003ePosition-\u003eX(Maybe(Screen WorkspaceId(Layout Window)Window ScreenId ScreenDetail))",
          "package": "xmonad",
          "partial": "Screen",
          "signature": "Position-\u003ePosition-\u003eX(Maybe(Screen WorkspaceId(Layout Window)Window ScreenId ScreenDetail))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:pointScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epointWithin x y r\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e(x, y)\u003c/code\u003e co-ordinate is within\n \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "pointWithin",
          "package": "xmonad",
          "signature": "Position -\u003e Position -\u003e Rectangle -\u003e Bool",
          "source": "src/XMonad-Operations.html#pointWithin",
          "type": "function"
        },
        "index": {
          "description": "pointWithin returns True if the co-ordinate is within",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "pointWithin",
          "normalized": "Position-\u003ePosition-\u003eRectangle-\u003eBool",
          "package": "xmonad",
          "partial": "Within",
          "signature": "Position-\u003ePosition-\u003eRectangle-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:pointWithin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erefresh. Render the currently visible workspaces, as determined by\n the \u003ccode\u003eStackSet\u003c/code\u003e. Also, set focus to the focused window.\n\u003c/p\u003e\u003cp\u003eThis is our \u003ccode\u003eview\u003c/code\u003e operation (MVC), in that it pretty prints our model\n with X calls.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "refresh",
          "package": "xmonad",
          "signature": "X ()",
          "source": "src/XMonad-Operations.html#refresh",
          "type": "function"
        },
        "index": {
          "description": "refresh Render the currently visible workspaces as determined by the StackSet Also set focus to the focused window This is our view operation MVC in that it pretty prints our model with calls",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "refresh",
          "normalized": "X()",
          "package": "xmonad",
          "signature": "X()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:refresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erescreen.  The screen configuration may have changed (due to\n xrandr), update the state and refresh the screen, and reset the gap.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "rescreen",
          "package": "xmonad",
          "signature": "X ()",
          "source": "src/XMonad-Operations.html#rescreen",
          "type": "function"
        },
        "index": {
          "description": "rescreen The screen configuration may have changed due to xrandr update the state and refresh the screen and reset the gap",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "rescreen",
          "normalized": "X()",
          "package": "xmonad",
          "signature": "X()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:rescreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erestart name resume\u003c/code\u003e. Attempt to restart xmonad by executing the program\n \u003ccode\u003ename\u003c/code\u003e.  If \u003ccode\u003eresume\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, restart with the current window state.\n When executing another window manager, \u003ccode\u003eresume\u003c/code\u003e should be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "restart",
          "package": "xmonad",
          "signature": "String -\u003e Bool -\u003e X ()",
          "source": "src/XMonad-Operations.html#restart",
          "type": "function"
        },
        "index": {
          "description": "restart name resume Attempt to restart xmonad by executing the program name If resume is True restart with the current window state When executing another window manager resume should be False",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "restart",
          "normalized": "String-\u003eBool-\u003eX()",
          "package": "xmonad",
          "signature": "String-\u003eBool-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:restart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereveal. Show a window by mapping it and setting Normal\n this is harmless if the window was already visible\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "reveal",
          "package": "xmonad",
          "signature": "Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#reveal",
          "type": "function"
        },
        "index": {
          "description": "reveal Show window by mapping it and setting Normal this is harmless if the window was already visible",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "reveal",
          "normalized": "Window-\u003eX()",
          "package": "xmonad",
          "signature": "Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:reveal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce the actual rectangle from a screen and a ratio on that screen.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "scaleRationalRect",
          "package": "xmonad",
          "signature": "Rectangle -\u003e RationalRect -\u003e Rectangle",
          "source": "src/XMonad-Operations.html#scaleRationalRect",
          "type": "function"
        },
        "index": {
          "description": "Produce the actual rectangle from screen and ratio on that screen",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "scaleRationalRect",
          "normalized": "Rectangle-\u003eRationalRect-\u003eRectangle",
          "package": "xmonad",
          "partial": "Rational Rect",
          "signature": "Rectangle-\u003eRationalRect-\u003eRectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:scaleRationalRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn workspace visible on screen \u003ccode\u003esc\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "screenWorkspace",
          "package": "xmonad",
          "signature": "ScreenId -\u003e X (Maybe WorkspaceId)",
          "source": "src/XMonad-Operations.html#screenWorkspace",
          "type": "function"
        },
        "index": {
          "description": "Return workspace visible on screen sc or Nothing",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "screenWorkspace",
          "normalized": "ScreenId-\u003eX(Maybe WorkspaceId)",
          "package": "xmonad",
          "partial": "Workspace",
          "signature": "ScreenId-\u003eX(Maybe WorkspaceId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:screenWorkspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow a message to the current \u003ccode\u003e\u003ca\u003eLayoutClass\u003c/a\u003e\u003c/code\u003e possibly modifying how we\n layout the windows, then refresh.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "sendMessage",
          "package": "xmonad",
          "signature": "a -\u003e X ()",
          "source": "src/XMonad-Operations.html#sendMessage",
          "type": "function"
        },
        "index": {
          "description": "Throw message to the current LayoutClass possibly modifying how we layout the windows then refresh",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "sendMessage",
          "normalized": "a-\u003eX()",
          "package": "xmonad",
          "partial": "Message",
          "signature": "a-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:sendMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a message to a layout, without refreshing.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "sendMessageWithNoRefresh",
          "package": "xmonad",
          "signature": "a -\u003e Workspace WorkspaceId (Layout Window) Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#sendMessageWithNoRefresh",
          "type": "function"
        },
        "index": {
          "description": "Send message to layout without refreshing",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "sendMessageWithNoRefresh",
          "normalized": "a-\u003eWorkspace WorkspaceId(Layout Window)Window-\u003eX()",
          "package": "xmonad",
          "partial": "Message With No Refresh",
          "signature": "a-\u003eWorkspace WorkspaceId(Layout Window)Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:sendMessageWithNoRefresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esetButtonGrab. Tell whether or not to intercept clicks on a given window\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "setButtonGrab",
          "package": "xmonad",
          "signature": "Bool -\u003e Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#setButtonGrab",
          "type": "function"
        },
        "index": {
          "description": "setButtonGrab Tell whether or not to intercept clicks on given window",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "setButtonGrab",
          "normalized": "Bool-\u003eWindow-\u003eX()",
          "package": "xmonad",
          "partial": "Button Grab",
          "signature": "Bool-\u003eWindow-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:setButtonGrab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall X to set the keyboard focus details.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "setFocusX",
          "package": "xmonad",
          "signature": "Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#setFocusX",
          "type": "function"
        },
        "index": {
          "description": "Call to set the keyboard focus details",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "setFocusX",
          "normalized": "Window-\u003eX()",
          "package": "xmonad",
          "partial": "Focus",
          "signature": "Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:setFocusX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet some properties when we initially gain control of a window\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "setInitialProperties",
          "package": "xmonad",
          "signature": "Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#setInitialProperties",
          "type": "function"
        },
        "index": {
          "description": "Set some properties when we initially gain control of window",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "setInitialProperties",
          "normalized": "Window-\u003eX()",
          "package": "xmonad",
          "partial": "Initial Properties",
          "signature": "Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:setInitialProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the layout of the currently viewed workspace\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "setLayout",
          "package": "xmonad",
          "signature": "Layout Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#setLayout",
          "type": "function"
        },
        "index": {
          "description": "Set the layout of the currently viewed workspace",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "setLayout",
          "normalized": "Layout Window-\u003eX()",
          "package": "xmonad",
          "partial": "Layout",
          "signature": "Layout Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:setLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the focus to the window on top of the stack, or root\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "setTopFocus",
          "package": "xmonad",
          "signature": "X ()",
          "source": "src/XMonad-Operations.html#setTopFocus",
          "type": "function"
        },
        "index": {
          "description": "Set the focus to the window on top of the stack or root",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "setTopFocus",
          "normalized": "X()",
          "package": "xmonad",
          "partial": "Top Focus",
          "signature": "X()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:setTopFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esetWMState.  set the WM_STATE property\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "setWMState",
          "package": "xmonad",
          "signature": "Window -\u003e Int -\u003e X ()",
          "source": "src/XMonad-Operations.html#setWMState",
          "type": "function"
        },
        "index": {
          "description": "setWMState set the WM STATE property",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "setWMState",
          "normalized": "Window-\u003eInt-\u003eX()",
          "package": "xmonad",
          "partial": "WMState",
          "signature": "Window-\u003eInt-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:setWMState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etileWindow. Moves and resizes w such that it fits inside the given\n rectangle, including its border.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "tileWindow",
          "package": "xmonad",
          "signature": "Window -\u003e Rectangle -\u003e X ()",
          "source": "src/XMonad-Operations.html#tileWindow",
          "type": "function"
        },
        "index": {
          "description": "tileWindow Moves and resizes such that it fits inside the given rectangle including its border",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "tileWindow",
          "normalized": "Window-\u003eRectangle-\u003eX()",
          "package": "xmonad",
          "partial": "Window",
          "signature": "Window-\u003eRectangle-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:tileWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunmanage. A window no longer exists, remove it from the window\n list, on whatever workspace it is.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "unmanage",
          "package": "xmonad",
          "signature": "Window -\u003e X ()",
          "source": "src/XMonad-Operations.html#unmanage",
          "type": "function"
        },
        "index": {
          "description": "unmanage window no longer exists remove it from the window list on whatever workspace it is",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "unmanage",
          "normalized": "Window-\u003eX()",
          "package": "xmonad",
          "signature": "Window-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:unmanage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the layout field of a workspace\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "updateLayout",
          "package": "xmonad",
          "signature": "WorkspaceId -\u003e Maybe (Layout Window) -\u003e X ()",
          "source": "src/XMonad-Operations.html#updateLayout",
          "type": "function"
        },
        "index": {
          "description": "Update the layout field of workspace",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "updateLayout",
          "normalized": "WorkspaceId-\u003eMaybe(Layout Window)-\u003eX()",
          "package": "xmonad",
          "partial": "Layout",
          "signature": "WorkspaceId-\u003eMaybe(Layout Window)-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:updateLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewindows. Modify the current window list with a pure function, and refresh\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "windows",
          "package": "xmonad",
          "signature": "(WindowSet -\u003e WindowSet) -\u003e X ()",
          "source": "src/XMonad-Operations.html#windows",
          "type": "function"
        },
        "index": {
          "description": "windows Modify the current window list with pure function and refresh",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "windows",
          "normalized": "(WindowSet-\u003eWindowSet)-\u003eX()",
          "package": "xmonad",
          "signature": "(WindowSet-\u003eWindowSet)-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:windows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e operation to the currently focused window, if there is one.\n\u003c/p\u003e",
          "module": "XMonad.Operations",
          "name": "withFocused",
          "package": "xmonad",
          "signature": "(Window -\u003e X ()) -\u003e X ()",
          "source": "src/XMonad-Operations.html#withFocused",
          "type": "function"
        },
        "index": {
          "description": "Apply an operation to the currently focused window if there is one",
          "hierarchy": "XMonad Operations",
          "module": "XMonad.Operations",
          "name": "withFocused",
          "normalized": "(Window-\u003eX())-\u003eX()",
          "package": "xmonad",
          "partial": "Focused",
          "signature": "(Window-\u003eX())-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-Operations.html#v:withFocused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "StackSet",
          "package": "xmonad",
          "source": "src/XMonad-StackSet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "StackSet",
          "package": "xmonad",
          "partial": "Stack Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure for window geometries\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "RationalRect",
          "package": "xmonad",
          "source": "src/XMonad-StackSet.html#RationalRect",
          "type": "data"
        },
        "index": {
          "description": "structure for window geometries",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "RationalRect",
          "package": "xmonad",
          "partial": "Rational Rect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#t:RationalRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisible workspaces, and their Xinerama screens.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "Screen",
          "package": "xmonad",
          "source": "src/XMonad-StackSet.html#Screen",
          "type": "data"
        },
        "index": {
          "description": "Visible workspaces and their Xinerama screens",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "Screen",
          "package": "xmonad",
          "partial": "Screen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#t:Screen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stack is a cursor onto a window list.\n The data structure tracks focus by construction, and\n the master window is by convention the top-most item.\n Focus operations will not reorder the list that results from\n flattening the cursor. The structure can be envisaged as:\n\u003c/p\u003e\u003cpre\u003e    +-- master:  \u003c '7' \u003e\n up |            [ '2' ]\n    +---------   [ '3' ]\n focus:          \u003c '4' \u003e\n dn +----------- [ '8' ]\n\u003c/pre\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e can be viewed as a list with a hole punched in it to make\n the focused position. Under the zipper/calculus view of such\n structures, it is the differentiation of a [a], and integrating it\n back has a natural implementation used in \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "Stack",
          "package": "xmonad",
          "source": "src/XMonad-StackSet.html#Stack",
          "type": "data"
        },
        "index": {
          "description": "stack is cursor onto window list The data structure tracks focus by construction and the master window is by convention the top-most item Focus operations will not reorder the list that results from flattening the cursor The structure can be envisaged as master up focus dn Stack can be viewed as list with hole punched in it to make the focused position Under the zipper calculus view of such structures it is the differentiation of and integrating it back has natural implementation used in index",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "Stack",
          "package": "xmonad",
          "partial": "Stack",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#t:Stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cursor into a non-empty list of workspaces.\n\u003c/p\u003e\u003cp\u003eWe puncture the workspace list, producing a hole in the structure\n used to track the currently focused workspace. The two other lists\n that are produced are used to track those workspaces visible as\n Xinerama screens, and those workspaces not visible anywhere.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "StackSet",
          "package": "xmonad",
          "source": "src/XMonad-StackSet.html#StackSet",
          "type": "data"
        },
        "index": {
          "description": "cursor into non-empty list of workspaces We puncture the workspace list producing hole in the structure used to track the currently focused workspace The two other lists that are produced are used to track those workspaces visible as Xinerama screens and those workspaces not visible anywhere",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "StackSet",
          "package": "xmonad",
          "partial": "Stack Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#t:StackSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA workspace is just a tag, a layout, and a stack.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "Workspace",
          "package": "xmonad",
          "source": "src/XMonad-StackSet.html#Workspace",
          "type": "data"
        },
        "index": {
          "description": "workspace is just tag layout and stack",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "Workspace",
          "package": "xmonad",
          "partial": "Workspace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#t:Workspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "RationalRect",
          "package": "xmonad",
          "signature": "RationalRect Rational Rational Rational Rational",
          "source": "src/XMonad-StackSet.html#RationalRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "RationalRect",
          "package": "xmonad",
          "partial": "Rational Rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:RationalRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "Screen",
          "package": "xmonad",
          "signature": "Screen",
          "source": "src/XMonad-StackSet.html#Screen",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "Screen",
          "package": "xmonad",
          "partial": "Screen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:Screen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "Stack",
          "package": "xmonad",
          "signature": "Stack",
          "source": "src/XMonad-StackSet.html#Stack",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "Stack",
          "package": "xmonad",
          "partial": "Stack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:Stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "StackSet",
          "package": "xmonad",
          "signature": "StackSet",
          "source": "src/XMonad-StackSet.html#StackSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "StackSet",
          "package": "xmonad",
          "partial": "Stack Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:StackSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "Workspace",
          "package": "xmonad",
          "signature": "Workspace",
          "source": "src/XMonad-StackSet.html#Workspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "Workspace",
          "package": "xmonad",
          "partial": "Workspace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:Workspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis function indicates to catch that an error is expected\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "abort",
          "package": "xmonad",
          "signature": "String -\u003e a",
          "source": "src/XMonad-StackSet.html#abort",
          "type": "function"
        },
        "index": {
          "description": "this function indicates to catch that an error is expected",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "abort",
          "normalized": "String-\u003ea",
          "package": "xmonad",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all windows in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e in no particular order\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "allWindows",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e [a]",
          "source": "src/XMonad-StackSet.html#allWindows",
          "type": "function"
        },
        "index": {
          "description": "Get list of all windows in the StackSet in no particular order",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "allWindows",
          "normalized": "StackSet a b c d e-\u003e[c]",
          "package": "xmonad",
          "partial": "Windows",
          "signature": "StackSet i l a s sd-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:allWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrently focused workspace\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "current",
          "package": "xmonad",
          "signature": "(Screen i l a sid sd)",
          "source": "src/XMonad-StackSet.html#StackSet",
          "type": "function"
        },
        "index": {
          "description": "currently focused workspace",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "current",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:current"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the tag of the currently focused workspace.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "currentTag",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e i",
          "source": "src/XMonad-StackSet.html#currentTag",
          "type": "function"
        },
        "index": {
          "description": "Get the tag of the currently focused workspace",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "currentTag",
          "normalized": "StackSet a b c d e-\u003ea",
          "package": "xmonad",
          "partial": "Tag",
          "signature": "StackSet i l a s sd-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:currentTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1) on current window, O(n) in general\u003c/em\u003e. Delete window \u003ccode\u003ew\u003c/code\u003e if it exists.\n There are 4 cases to consider:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e delete on an \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e workspace leaves it Nothing\n\u003c/li\u003e\u003cli\u003e otherwise, try to move focus to the down\n\u003c/li\u003e\u003cli\u003e otherwise, try to move focus to the up\n\u003c/li\u003e\u003cli\u003e otherwise, you've got an empty workspace, becomes \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBehaviour with respect to the master:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e deleting the master window resets it to the newly focused window\n\u003c/li\u003e\u003cli\u003e otherwise, delete doesn't affect the master.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "XMonad.StackSet",
          "name": "delete",
          "package": "xmonad",
          "signature": "a -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#delete",
          "type": "function"
        },
        "index": {
          "description": "on current window in general Delete window if it exists There are cases to consider delete on an Nothing workspace leaves it Nothing otherwise try to move focus to the down otherwise try to move focus to the up otherwise you ve got an empty workspace becomes Nothing Behaviour with respect to the master deleting the master window resets it to the newly focused window otherwise delete doesn affect the master",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "delete",
          "normalized": "a-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
          "package": "xmonad",
          "signature": "a-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly temporarily remove the window from the stack, thereby not destroying special\n information saved in the \u003ccode\u003eStackset\u003c/code\u003e\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "delete'",
          "package": "xmonad",
          "signature": "a -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#delete%27",
          "type": "function"
        },
        "index": {
          "description": "Only temporarily remove the window from the stack thereby not destroying special information saved in the Stackset",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "delete'",
          "normalized": "a-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
          "package": "xmonad",
          "signature": "a-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:delete-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Turn a list into a possibly empty stack (i.e., a zipper):\n the first element of the list is current, and the rest of the list\n is down.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "differentiate",
          "package": "xmonad",
          "signature": "[a] -\u003e Maybe (Stack a)",
          "source": "src/XMonad-StackSet.html#differentiate",
          "type": "function"
        },
        "index": {
          "description": "Turn list into possibly empty stack i.e zipper the first element of the list is current and the rest of the list is down",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "differentiate",
          "normalized": "[a]-\u003eMaybe(Stack a)",
          "package": "xmonad",
          "signature": "[a]-\u003eMaybe(Stack a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:differentiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "down",
          "package": "xmonad",
          "signature": "[a]",
          "source": "src/XMonad-StackSet.html#Stack",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "down",
          "normalized": "[a]",
          "package": "xmonad",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure that a given set of workspace tags is present by renaming\n existing workspaces and/or creating new hidden workspaces as\n necessary.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "ensureTags",
          "package": "xmonad",
          "signature": "l -\u003e [i] -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#ensureTags",
          "type": "function"
        },
        "index": {
          "description": "Ensure that given set of workspace tags is present by renaming existing workspaces and or creating new hidden workspaces as necessary",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "ensureTags",
          "normalized": "a-\u003e[b]-\u003eStackSet b a c d e-\u003eStackSet b a c d e",
          "package": "xmonad",
          "partial": "Tags",
          "signature": "l-\u003e[i]-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:ensureTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. 'filter p s' returns the elements of \u003ccode\u003es\u003c/code\u003e such that \u003ccode\u003ep\u003c/code\u003e evaluates to\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  Order is preserved, and focus moves as described for \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "filter",
          "package": "xmonad",
          "signature": "(a -\u003e Bool) -\u003e Stack a -\u003e Maybe (Stack a)",
          "source": "src/XMonad-StackSet.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter returns the elements of such that evaluates to True Order is preserved and focus moves as described for delete",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eStack a-\u003eMaybe(Stack a)",
          "package": "xmonad",
          "signature": "(a-\u003eBool)-\u003eStack a-\u003eMaybe(Stack a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1) on current window, O(n) in general\u003c/em\u003e.\n Return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the workspace tag of the given window, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if the window is not in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "findTag",
          "package": "xmonad",
          "signature": "a -\u003e StackSet i l a s sd -\u003e Maybe i",
          "source": "src/XMonad-StackSet.html#findTag",
          "type": "function"
        },
        "index": {
          "description": "on current window in general Return Just the workspace tag of the given window or Nothing if the window is not in the StackSet",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "findTag",
          "normalized": "a-\u003eStackSet b c a d e-\u003eMaybe b",
          "package": "xmonad",
          "partial": "Tag",
          "signature": "a-\u003eStackSet i l a s sd-\u003eMaybe i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:findTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a window, and its preferred rectangle, set it as floating\n A floating window should already be managed by the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "float",
          "package": "xmonad",
          "signature": "a -\u003e RationalRect -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#float",
          "type": "function"
        },
        "index": {
          "description": "Given window and its preferred rectangle set it as floating floating window should already be managed by the StackSet",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "float",
          "normalized": "a-\u003eRationalRect-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
          "package": "xmonad",
          "signature": "a-\u003eRationalRect-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efloating windows\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "floating",
          "package": "xmonad",
          "signature": "Map a RationalRect",
          "source": "src/XMonad-StackSet.html#StackSet",
          "type": "function"
        },
        "index": {
          "description": "floating windows",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "floating",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:floating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "focus",
          "package": "xmonad",
          "signature": "a",
          "source": "src/XMonad-StackSet.html#Stack",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "focus",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1), O(w) on the wrapping case\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003efocusUp, focusDown. Move the window focus up or down the stack,\n wrapping if we reach the end. The wrapping should model a \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e\n on the current stack. The \u003ccode\u003emaster\u003c/code\u003e window, and window order,\n are unaffected by movement of focus.\n\u003c/p\u003e\u003cp\u003eswapUp, swapDown, swap the neighbour in the stack ordering, wrapping\n if we reach the end. Again the wrapping model should \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e on\n the current stack.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "focusDown",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#focusDown",
          "type": "function"
        },
        "index": {
          "description": "on the wrapping case focusUp focusDown Move the window focus up or down the stack wrapping if we reach the end The wrapping should model cycle on the current stack The master window and window order are unaffected by movement of focus swapUp swapDown swap the neighbour in the stack ordering wrapping if we reach the end Again the wrapping model should cycle on the current stack",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "focusDown",
          "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
          "package": "xmonad",
          "partial": "Down",
          "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focusDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariants of \u003ccode\u003e\u003ca\u003efocusUp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efocusDown\u003c/a\u003e\u003c/code\u003e that work on a\n \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e rather than an entire \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "focusDown'",
          "package": "xmonad",
          "signature": "Stack a -\u003e Stack a",
          "source": "src/XMonad-StackSet.html#focusDown%27",
          "type": "function"
        },
        "index": {
          "description": "Variants of focusUp and focusDown that work on Stack rather than an entire StackSet",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "focusDown'",
          "normalized": "Stack a-\u003eStack a",
          "package": "xmonad",
          "partial": "Down'",
          "signature": "Stack a-\u003eStack a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focusDown-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(s)\u003c/em\u003e. Set focus to the master window.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "focusMaster",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#focusMaster",
          "type": "function"
        },
        "index": {
          "description": "Set focus to the master window",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "focusMaster",
          "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
          "package": "xmonad",
          "partial": "Master",
          "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focusMaster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1), O(w) on the wrapping case\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003efocusUp, focusDown. Move the window focus up or down the stack,\n wrapping if we reach the end. The wrapping should model a \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e\n on the current stack. The \u003ccode\u003emaster\u003c/code\u003e window, and window order,\n are unaffected by movement of focus.\n\u003c/p\u003e\u003cp\u003eswapUp, swapDown, swap the neighbour in the stack ordering, wrapping\n if we reach the end. Again the wrapping model should \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e on\n the current stack.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "focusUp",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#focusUp",
          "type": "function"
        },
        "index": {
          "description": "on the wrapping case focusUp focusDown Move the window focus up or down the stack wrapping if we reach the end The wrapping should model cycle on the current stack The master window and window order are unaffected by movement of focus swapUp swapDown swap the neighbour in the stack ordering wrapping if we reach the end Again the wrapping model should cycle on the current stack",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "focusUp",
          "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
          "package": "xmonad",
          "partial": "Up",
          "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focusUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariants of \u003ccode\u003e\u003ca\u003efocusUp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efocusDown\u003c/a\u003e\u003c/code\u003e that work on a\n \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e rather than an entire \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "focusUp'",
          "package": "xmonad",
          "signature": "Stack a -\u003e Stack a",
          "source": "src/XMonad-StackSet.html#focusUp%27",
          "type": "function"
        },
        "index": {
          "description": "Variants of focusUp and focusDown that work on Stack rather than an entire StackSet",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "focusUp'",
          "normalized": "Stack a-\u003eStack a",
          "package": "xmonad",
          "partial": "Up'",
          "signature": "Stack a-\u003eStack a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focusUp-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1) on current window, O(n) in general\u003c/em\u003e. Focus the window \u003ccode\u003ew\u003c/code\u003e,\n and set its workspace as current.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "focusWindow",
          "package": "xmonad",
          "signature": "a -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#focusWindow",
          "type": "function"
        },
        "index": {
          "description": "on current window in general Focus the window and set its workspace as current",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "focusWindow",
          "normalized": "a-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
          "package": "xmonad",
          "partial": "Window",
          "signature": "a-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:focusWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet focus to the given workspace.  If that workspace does not exist\n in the stackset, the original workspace is returned.  If that workspace is\n \u003ccode\u003e\u003ca\u003ehidden\u003c/a\u003e\u003c/code\u003e, then display that workspace on the current screen, and move the\n current workspace to \u003ccode\u003e\u003ca\u003ehidden\u003c/a\u003e\u003c/code\u003e.  If that workspace is \u003ccode\u003e\u003ca\u003evisible\u003c/a\u003e\u003c/code\u003e on another\n screen, the workspaces of the current screen and the other screen are\n swapped.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "greedyView",
          "package": "xmonad",
          "signature": "i -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#greedyView",
          "type": "function"
        },
        "index": {
          "description": "Set focus to the given workspace If that workspace does not exist in the stackset the original workspace is returned If that workspace is hidden then display that workspace on the current screen and move the current workspace to hidden If that workspace is visible on another screen the workspaces of the current screen and the other screen are swapped",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "greedyView",
          "normalized": "a-\u003eStackSet a b c d e-\u003eStackSet a b c d e",
          "package": "xmonad",
          "partial": "View",
          "signature": "i-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:greedyView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eworkspaces not visible anywhere\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "hidden",
          "package": "xmonad",
          "signature": "[Workspace i l a]",
          "source": "src/XMonad-StackSet.html#StackSet",
          "type": "function"
        },
        "index": {
          "description": "workspaces not visible anywhere",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "hidden",
          "normalized": "[Workspace a b c]",
          "package": "xmonad",
          "signature": "[Workspace i l a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:hidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(s)\u003c/em\u003e. Extract the stack on the current workspace, as a list.\n The order of the stack is determined by the master window -- it will be\n the head of the list. The implementation is given by the natural\n integration of a one-hole list cursor, back to a list.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "index",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e [a]",
          "source": "src/XMonad-StackSet.html#index",
          "type": "function"
        },
        "index": {
          "description": "Extract the stack on the current workspace as list The order of the stack is determined by the master window it will be the head of the list The implementation is given by the natural integration of one-hole list cursor back to list",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "index",
          "normalized": "StackSet a b c d e-\u003e[c]",
          "package": "xmonad",
          "signature": "StackSet i l a s sd-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. (Complexity due to duplicate check). Insert a new element\n into the stack, above the currently focused element. The new\n element is given focus; the previously focused element is moved\n down.\n\u003c/p\u003e\u003cp\u003eIf the element is already in the stackset, the original stackset is\n returned unmodified.\n\u003c/p\u003e\u003cp\u003eSemantics in Huet's paper is that insert doesn't move the cursor.\n However, we choose to insert above, and move the focus.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "insertUp",
          "package": "xmonad",
          "signature": "a -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#insertUp",
          "type": "function"
        },
        "index": {
          "description": "Complexity due to duplicate check Insert new element into the stack above the currently focused element The new element is given focus the previously focused element is moved down If the element is already in the stackset the original stackset is returned unmodified Semantics in Huet paper is that insert doesn move the cursor However we choose to insert above and move the focus",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "insertUp",
          "normalized": "a-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
          "package": "xmonad",
          "partial": "Up",
          "signature": "a-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:insertUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Flatten a \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e into a list.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "integrate",
          "package": "xmonad",
          "signature": "Stack a -\u003e [a]",
          "source": "src/XMonad-StackSet.html#integrate",
          "type": "function"
        },
        "index": {
          "description": "Flatten Stack into list",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "integrate",
          "normalized": "Stack a-\u003e[a]",
          "package": "xmonad",
          "signature": "Stack a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:integrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Flatten a possibly empty stack into a list.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "integrate'",
          "package": "xmonad",
          "signature": "Maybe (Stack a) -\u003e [a]",
          "source": "src/XMonad-StackSet.html#integrate%27",
          "type": "function"
        },
        "index": {
          "description": "Flatten possibly empty stack into list",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "integrate'",
          "normalized": "Maybe(Stack a)-\u003e[a]",
          "package": "xmonad",
          "signature": "Maybe(Stack a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:integrate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "layout",
          "package": "xmonad",
          "signature": "l",
          "source": "src/XMonad-StackSet.html#Workspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "layout",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the tag of the workspace visible on Xinerama screen \u003ccode\u003esc\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if screen is out of bounds.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "lookupWorkspace",
          "package": "xmonad",
          "signature": "s -\u003e StackSet i l a s sd -\u003e Maybe i",
          "source": "src/XMonad-StackSet.html#lookupWorkspace",
          "type": "function"
        },
        "index": {
          "description": "Find the tag of the workspace visible on Xinerama screen sc Nothing if screen is out of bounds",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "lookupWorkspace",
          "normalized": "a-\u003eStackSet b c d a e-\u003eMaybe b",
          "package": "xmonad",
          "partial": "Workspace",
          "signature": "s-\u003eStackSet i l a s sd-\u003eMaybe i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:lookupWorkspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function on all the layouts in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "mapLayout",
          "package": "xmonad",
          "signature": "(l -\u003e l') -\u003e StackSet i l a s sd -\u003e StackSet i l' a s sd",
          "source": "src/XMonad-StackSet.html#mapLayout",
          "type": "function"
        },
        "index": {
          "description": "Map function on all the layouts in the StackSet",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "mapLayout",
          "normalized": "(a-\u003eb)-\u003eStackSet c a d e f-\u003eStackSet c b d e f",
          "package": "xmonad",
          "partial": "Layout",
          "signature": "(l-\u003el')-\u003eStackSet i l a s sd-\u003eStackSet i l' a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:mapLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function on all the workspaces in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "mapWorkspace",
          "package": "xmonad",
          "signature": "(Workspace i l a -\u003e Workspace i l a) -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#mapWorkspace",
          "type": "function"
        },
        "index": {
          "description": "Map function on all the workspaces in the StackSet",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "mapWorkspace",
          "normalized": "(Workspace a b c-\u003eWorkspace a b c)-\u003eStackSet a b c d e-\u003eStackSet a b c d e",
          "package": "xmonad",
          "partial": "Workspace",
          "signature": "(Workspace i l a-\u003eWorkspace i l a)-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:mapWorkspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Is a window in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "member",
          "package": "xmonad",
          "signature": "a -\u003e StackSet i l a s sd -\u003e Bool",
          "source": "src/XMonad-StackSet.html#member",
          "type": "function"
        },
        "index": {
          "description": "Is window in the StackSet",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "member",
          "normalized": "a-\u003eStackSet b c a d e-\u003eBool",
          "package": "xmonad",
          "signature": "a-\u003eStackSet i l a s sd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function, and a default value for \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, to modify the current stack.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "modify",
          "package": "xmonad",
          "signature": "Maybe (Stack a) -\u003e (Stack a -\u003e Maybe (Stack a)) -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Apply function and default value for Nothing to modify the current stack",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "modify",
          "normalized": "Maybe(Stack a)-\u003e(Stack a-\u003eMaybe(Stack a))-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
          "package": "xmonad",
          "signature": "Maybe(Stack a)-\u003e(Stack a-\u003eMaybe(Stack a))-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to modify the current stack if it isn't empty, and we don't\n  want to empty it.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "modify'",
          "package": "xmonad",
          "signature": "(Stack a -\u003e Stack a) -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#modify%27",
          "type": "function"
        },
        "index": {
          "description": "Apply function to modify the current stack if it isn empty and we don want to empty it",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "modify'",
          "normalized": "(Stack a-\u003eStack a)-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
          "package": "xmonad",
          "signature": "(Stack a-\u003eStack a)-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:modify-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Create a new stackset, of empty stacks, with given tags,\n with physical screens whose descriptions are given by \u003ccode\u003em\u003c/code\u003e. The\n number of physical screens (\u003ccode\u003elength \u003ccode\u003em\u003c/code\u003e\u003c/code\u003e) should be less than or\n equal to the number of workspace tags.  The first workspace in the\n list will be current.\n\u003c/p\u003e\u003cp\u003eXinerama: Virtual workspaces are assigned to physical screens, starting at 0.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "new",
          "package": "xmonad",
          "signature": "l -\u003e [i] -\u003e [sd] -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new stackset of empty stacks with given tags with physical screens whose descriptions are given by The number of physical screens length should be less than or equal to the number of workspace tags The first workspace in the list will be current Xinerama Virtual workspaces are assigned to physical screens starting at",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "new",
          "normalized": "a-\u003e[b]-\u003e[c]-\u003eStackSet b a d e c",
          "package": "xmonad",
          "signature": "l-\u003e[i]-\u003e[sd]-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Extract the focused element of the current stack.\n Return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for an empty stack.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "peek",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e Maybe a",
          "source": "src/XMonad-StackSet.html#peek",
          "type": "function"
        },
        "index": {
          "description": "Extract the focused element of the current stack Return Just that element or Nothing for an empty stack",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "peek",
          "normalized": "StackSet a b c d e-\u003eMaybe c",
          "package": "xmonad",
          "signature": "StackSet i l a s sd-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename a given tag if present in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "renameTag",
          "package": "xmonad",
          "signature": "i -\u003e i -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#renameTag",
          "type": "function"
        },
        "index": {
          "description": "Rename given tag if present in the StackSet",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "renameTag",
          "normalized": "a-\u003ea-\u003eStackSet a b c d e-\u003eStackSet a b c d e",
          "package": "xmonad",
          "partial": "Tag",
          "signature": "i-\u003ei-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:renameTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "screen",
          "package": "xmonad",
          "signature": "sid",
          "source": "src/XMonad-StackSet.html#Screen",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "screen",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:screen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "screenDetail",
          "package": "xmonad",
          "signature": "sd",
          "source": "src/XMonad-StackSet.html#Screen",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "screenDetail",
          "package": "xmonad",
          "partial": "Detail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:screenDetail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all screens in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "screens",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e [Screen i l a s sd]",
          "source": "src/XMonad-StackSet.html#screens",
          "type": "function"
        },
        "index": {
          "description": "Get list of all screens in the StackSet",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "screens",
          "normalized": "StackSet a b c d e-\u003e[Screen a b c d e]",
          "package": "xmonad",
          "signature": "StackSet i l a s sd-\u003e[Screen i l a s sd]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:screens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(w)\u003c/em\u003e. shift. Move the focused element of the current stack to stack\n \u003ccode\u003en\u003c/code\u003e, leaving it as the focused element on that stack. The item is\n inserted above the currently focused element on that workspace.\n The actual focused workspace doesn't change. If there is no\n element on the current stack, the original stackSet is returned.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "shift",
          "package": "xmonad",
          "signature": "i -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#shift",
          "type": "function"
        },
        "index": {
          "description": "shift Move the focused element of the current stack to stack leaving it as the focused element on that stack The item is inserted above the currently focused element on that workspace The actual focused workspace doesn change If there is no element on the current stack the original stackSet is returned",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "shift",
          "normalized": "a-\u003eStackSet a b c d e-\u003eStackSet a b c d e",
          "package": "xmonad",
          "signature": "i-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(s)\u003c/em\u003e. Set the master window to the focused window.\n The other windows are kept in order and shifted down on the stack, as if you\n just hit mod-shift-k a bunch of times.\n Focus stays with the item moved.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "shiftMaster",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#shiftMaster",
          "type": "function"
        },
        "index": {
          "description": "Set the master window to the focused window The other windows are kept in order and shifted down on the stack as if you just hit mod-shift-k bunch of times Focus stays with the item moved",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "shiftMaster",
          "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
          "package": "xmonad",
          "partial": "Master",
          "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:shiftMaster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. shiftWin. Searches for the specified window \u003ccode\u003ew\u003c/code\u003e on all workspaces\n of the stackSet and moves it to stack \u003ccode\u003en\u003c/code\u003e, leaving it as the focused\n element on that stack. The item is inserted above the currently\n focused element on that workspace.\n The actual focused workspace doesn't change. If the window is not\n found in the stackSet, the original stackSet is returned.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "shiftWin",
          "package": "xmonad",
          "signature": "i -\u003e a -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#shiftWin",
          "type": "function"
        },
        "index": {
          "description": "shiftWin Searches for the specified window on all workspaces of the stackSet and moves it to stack leaving it as the focused element on that stack The item is inserted above the currently focused element on that workspace The actual focused workspace doesn change If the window is not found in the stackSet the original stackSet is returned",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "shiftWin",
          "normalized": "a-\u003eb-\u003eStackSet a c b d e-\u003eStackSet a c b d e",
          "package": "xmonad",
          "partial": "Win",
          "signature": "i-\u003ea-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:shiftWin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the floating status of a window\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "sink",
          "package": "xmonad",
          "signature": "a -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#sink",
          "type": "function"
        },
        "index": {
          "description": "Clear the floating status of window",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "sink",
          "normalized": "a-\u003eStackSet b c a d e-\u003eStackSet b c a d e",
          "package": "xmonad",
          "signature": "a-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "stack",
          "package": "xmonad",
          "signature": "Maybe (Stack a)",
          "source": "src/XMonad-StackSet.html#Workspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "stack",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1), O(w) on the wrapping case\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003efocusUp, focusDown. Move the window focus up or down the stack,\n wrapping if we reach the end. The wrapping should model a \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e\n on the current stack. The \u003ccode\u003emaster\u003c/code\u003e window, and window order,\n are unaffected by movement of focus.\n\u003c/p\u003e\u003cp\u003eswapUp, swapDown, swap the neighbour in the stack ordering, wrapping\n if we reach the end. Again the wrapping model should \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e on\n the current stack.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "swapDown",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#swapDown",
          "type": "function"
        },
        "index": {
          "description": "on the wrapping case focusUp focusDown Move the window focus up or down the stack wrapping if we reach the end The wrapping should model cycle on the current stack The master window and window order are unaffected by movement of focus swapUp swapDown swap the neighbour in the stack ordering wrapping if we reach the end Again the wrapping model should cycle on the current stack",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "swapDown",
          "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
          "package": "xmonad",
          "partial": "Down",
          "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:swapDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(s)\u003c/em\u003e. Set the master window to the focused window.\n The old master window is swapped in the tiling order with the focused window.\n Focus stays with the item moved.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "swapMaster",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#swapMaster",
          "type": "function"
        },
        "index": {
          "description": "Set the master window to the focused window The old master window is swapped in the tiling order with the focused window Focus stays with the item moved",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "swapMaster",
          "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
          "package": "xmonad",
          "partial": "Master",
          "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:swapMaster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1), O(w) on the wrapping case\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003efocusUp, focusDown. Move the window focus up or down the stack,\n wrapping if we reach the end. The wrapping should model a \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e\n on the current stack. The \u003ccode\u003emaster\u003c/code\u003e window, and window order,\n are unaffected by movement of focus.\n\u003c/p\u003e\u003cp\u003eswapUp, swapDown, swap the neighbour in the stack ordering, wrapping\n if we reach the end. Again the wrapping model should \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e on\n the current stack.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "swapUp",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#swapUp",
          "type": "function"
        },
        "index": {
          "description": "on the wrapping case focusUp focusDown Move the window focus up or down the stack wrapping if we reach the end The wrapping should model cycle on the current stack The master window and window order are unaffected by movement of focus swapUp swapDown swap the neighbour in the stack ordering wrapping if we reach the end Again the wrapping model should cycle on the current stack",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "swapUp",
          "normalized": "StackSet a b c d e-\u003eStackSet a b c d e",
          "package": "xmonad",
          "partial": "Up",
          "signature": "StackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:swapUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "tag",
          "package": "xmonad",
          "signature": "i",
          "source": "src/XMonad-StackSet.html#Workspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "tag",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the given tag present in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "tagMember",
          "package": "xmonad",
          "signature": "i -\u003e StackSet i l a s sd -\u003e Bool",
          "source": "src/XMonad-StackSet.html#tagMember",
          "type": "function"
        },
        "index": {
          "description": "Is the given tag present in the StackSet",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "tagMember",
          "normalized": "a-\u003eStackSet a b c d e-\u003eBool",
          "package": "xmonad",
          "partial": "Member",
          "signature": "i-\u003eStackSet i l a s sd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:tagMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "up",
          "package": "xmonad",
          "signature": "[a]",
          "source": "src/XMonad-StackSet.html#Stack",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "up",
          "normalized": "[a]",
          "package": "xmonad",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(w)\u003c/em\u003e. Set focus to the workspace with index 'i'.\n If the index is out of range, return the original \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eXinerama: If the workspace is not visible on any Xinerama screen, it\n becomes the current screen. If it is in the visible list, it becomes\n current.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "view",
          "package": "xmonad",
          "signature": "i -\u003e StackSet i l a s sd -\u003e StackSet i l a s sd",
          "source": "src/XMonad-StackSet.html#view",
          "type": "function"
        },
        "index": {
          "description": "Set focus to the workspace with index If the index is out of range return the original StackSet Xinerama If the workspace is not visible on any Xinerama screen it becomes the current screen If it is in the visible list it becomes current",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "view",
          "normalized": "a-\u003eStackSet a b c d e-\u003eStackSet a b c d e",
          "package": "xmonad",
          "signature": "i-\u003eStackSet i l a s sd-\u003eStackSet i l a s sd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enon-focused workspaces, visible in xinerama\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "visible",
          "package": "xmonad",
          "signature": "[Screen i l a sid sd]",
          "source": "src/XMonad-StackSet.html#StackSet",
          "type": "function"
        },
        "index": {
          "description": "non-focused workspaces visible in xinerama",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "visible",
          "normalized": "[Screen a b c d e]",
          "package": "xmonad",
          "signature": "[Screen i l a sid sd]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:visible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.StackSet",
          "name": "workspace",
          "package": "xmonad",
          "signature": "(Workspace i l a)",
          "source": "src/XMonad-StackSet.html#Screen",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "workspace",
          "package": "xmonad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:workspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all workspaces in the \u003ccode\u003e\u003ca\u003eStackSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "XMonad.StackSet",
          "name": "workspaces",
          "package": "xmonad",
          "signature": "StackSet i l a s sd -\u003e [Workspace i l a]",
          "source": "src/XMonad-StackSet.html#workspaces",
          "type": "function"
        },
        "index": {
          "description": "Get list of all workspaces in the StackSet",
          "hierarchy": "XMonad StackSet",
          "module": "XMonad.StackSet",
          "name": "workspaces",
          "normalized": "StackSet a b c d e-\u003e[Workspace a b c]",
          "package": "xmonad",
          "signature": "StackSet i l a s sd-\u003e[Workspace i l a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad-StackSet.html#v:workspaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad",
          "name": "XMonad",
          "package": "xmonad",
          "source": "src/XMonad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "XMonad",
          "package": "xmonad",
          "partial": "XMonad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "XMonad",
          "name": "MonadIO",
          "package": "xmonad",
          "type": "class"
        },
        "index": {
          "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "MonadIO",
          "package": "xmonad",
          "partial": "Monad IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#t:MonadIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee examples in \u003ca\u003eControl.Monad.Reader\u003c/a\u003e.\n Note, the partially applied function type \u003ccode\u003e(-\u003e) r\u003c/code\u003e is a simple reader monad.\n See the \u003ccode\u003einstance\u003c/code\u003e declaration below.\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "MonadReader",
          "package": "xmonad",
          "type": "class"
        },
        "index": {
          "description": "See examples in Control.Monad.Reader Note the partially applied function type is simple reader monad See the instance declaration below",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "MonadReader",
          "package": "xmonad",
          "partial": "Monad Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#t:MonadReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal definition is either both of \u003ccode\u003eget\u003c/code\u003e and \u003ccode\u003eput\u003c/code\u003e or just \u003ccode\u003estate\u003c/code\u003e\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "MonadState",
          "package": "xmonad",
          "type": "class"
        },
        "index": {
          "description": "Minimal definition is either both of get and put or just state",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "MonadState",
          "package": "xmonad",
          "partial": "Monad State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#t:MonadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise \"or\"\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "(.|.)",
          "package": "xmonad",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Bitwise or",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "(.|.) .|.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "xmonad",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:.-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the monad environment.\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "ask",
          "package": "xmonad",
          "signature": "m r",
          "type": "method"
        },
        "index": {
          "description": "Retrieves the monad environment",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "ask",
          "package": "xmonad",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "asks",
          "package": "xmonad",
          "signature": "(r -\u003e a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Retrieves function of the current environment",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "asks",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "xmonad",
          "signature": "(r-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:asks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the state from the internals of the monad.\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "get",
          "package": "xmonad",
          "signature": "m s",
          "type": "method"
        },
        "index": {
          "description": "Return the state from the internals of the monad",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "get",
          "package": "xmonad",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets specific component of the state, using a projection function\n supplied.\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "gets",
          "package": "xmonad",
          "signature": "(s -\u003e a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Gets specific component of the state using projection function supplied",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "gets",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "xmonad",
          "signature": "(s-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "liftIO",
          "package": "xmonad",
          "signature": "IO a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "liftIO",
          "normalized": "IO a-\u003eb a",
          "package": "xmonad",
          "partial": "IO",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a computation in a modified environment.\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "local",
          "package": "xmonad",
          "signature": "local",
          "type": "method"
        },
        "index": {
          "description": "Executes computation in modified environment",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "local",
          "package": "xmonad",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic state transformer.\n\u003c/p\u003e\u003cp\u003eMaps an old state to a new state inside a state monad.\n      The old state is thrown away.\n\u003c/p\u003e\u003cpre\u003e      Main\u003e :t modify ((+1) :: Int -\u003e Int)\n      modify (...) :: (MonadState Int a) =\u003e a ()\n\u003c/pre\u003e\u003cp\u003eThis says that \u003ccode\u003emodify (+1)\u003c/code\u003e acts over any\n    Monad that is a member of the \u003ccode\u003eMonadState\u003c/code\u003e class,\n    with an \u003ccode\u003eInt\u003c/code\u003e state.\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "modify",
          "package": "xmonad",
          "signature": "(s -\u003e s) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Monadic state transformer Maps an old state to new state inside state monad The old state is thrown away Main modify Int Int modify MonadState Int This says that modify acts over any Monad that is member of the MonadState class with an Int state",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "xmonad",
          "signature": "(s-\u003es)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the state inside the monad.\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "put",
          "package": "xmonad",
          "signature": "s -\u003e m ()",
          "type": "method"
        },
        "index": {
          "description": "Replace the state inside the monad",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "xmonad",
          "signature": "s-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "reader",
          "package": "xmonad",
          "signature": "reader",
          "type": "method"
        },
        "index": {
          "description": "Retrieves function of the current environment",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "reader",
          "package": "xmonad",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a simple state action into the monad.\n\u003c/p\u003e",
          "module": "XMonad",
          "name": "state",
          "package": "xmonad",
          "signature": "(s -\u003e (a, s)) -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Embed simple state action into the monad",
          "hierarchy": "XMonad",
          "module": "XMonad",
          "name": "state",
          "normalized": "(a-\u003e(b,a))-\u003ec b",
          "package": "xmonad",
          "signature": "(s-\u003e(a,s))-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/xmonad/docs/XMonad.html#v:state"
      }
    }
  ]
]