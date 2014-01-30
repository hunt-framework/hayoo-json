[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify-Devel.html#",
      "description": {
        "fct-module": "System.FSNotify.Devel",
        "fct-package": "fsnotify",
        "fct-signature": "module",
        "fct-source": "src/System-FSNotify-Devel.html",
        "fct-type": "module",
        "title": "Devel"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify Devel",
        "module": "System.FSNotify.Devel",
        "name": "Devel",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Devel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify-Devel.html#v:allEvents",
      "description": {
        "fct-module": "System.FSNotify.Devel",
        "fct-package": "fsnotify",
        "fct-signature": "(FilePath -\u003e Bool) -\u003e Event -\u003e Bool",
        "fct-source": "src/System-FSNotify-Devel.html#allEvents",
        "fct-type": "function",
        "title": "allEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify Devel",
        "module": "System.FSNotify.Devel",
        "name": "allEvents",
        "normalized": "(FilePath-\u003eBool)-\u003eEvent-\u003eBool",
        "package": "fsnotify",
        "partial": "Events",
        "signature": "(FilePath-\u003eBool)-\u003eEvent-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify-Devel.html#v:doAllEvents",
      "description": {
        "fct-module": "System.FSNotify.Devel",
        "fct-package": "fsnotify",
        "fct-signature": "(FilePath -\u003e m ()) -\u003e Event -\u003e m ()",
        "fct-source": "src/System-FSNotify-Devel.html#doAllEvents",
        "fct-type": "function",
        "title": "doAllEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify Devel",
        "module": "System.FSNotify.Devel",
        "name": "doAllEvents",
        "normalized": "(FilePath-\u003ea())-\u003eEvent-\u003ea()",
        "package": "fsnotify",
        "partial": "All Events",
        "signature": "(FilePath-\u003em())-\u003eEvent-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify-Devel.html#v:existsEvents",
      "description": {
        "fct-module": "System.FSNotify.Devel",
        "fct-package": "fsnotify",
        "fct-signature": "(FilePath -\u003e Bool) -\u003e Event -\u003e Bool",
        "fct-source": "src/System-FSNotify-Devel.html#existsEvents",
        "fct-type": "function",
        "title": "existsEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify Devel",
        "module": "System.FSNotify.Devel",
        "name": "existsEvents",
        "normalized": "(FilePath-\u003eBool)-\u003eEvent-\u003eBool",
        "package": "fsnotify",
        "partial": "Events",
        "signature": "(FilePath-\u003eBool)-\u003eEvent-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify-Devel.html#v:treeExtAny",
      "description": {
        "fct-descr": "\u003cp\u003eIn the given directory tree,\n for files with the given file extension\n perform the given action\n\u003c/p\u003e",
        "fct-module": "System.FSNotify.Devel",
        "fct-package": "fsnotify",
        "fct-signature": "WatchManager-\u003e FilePath-\u003e Text-\u003e (FilePath -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "treeExtAny"
      },
      "index": {
        "description": "In the given directory tree for files with the given file extension perform the given action",
        "hierarchy": "System FSNotify Devel",
        "module": "System.FSNotify.Devel",
        "name": "treeExtAny",
        "normalized": "WatchManager-\u003eFilePath-\u003eText-\u003e(FilePath-\u003eIO())-\u003eIO()",
        "package": "fsnotify",
        "partial": "Ext Any",
        "signature": "WatchManager-\u003eFilePath-\u003eText-\u003e(FilePath-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify-Devel.html#v:treeExtExists",
      "description": {
        "fct-descr": "\u003cp\u003eExample of compiling scss files with compass\n\u003c/p\u003e\u003cpre\u003e\n compass :: WatchManager -\u003e FilePath -\u003e IO ()\n compass man dir = do\n  putStrLn $ \u003ca\u003ecompass \u003c/a\u003e ++ encodeString dir\n  treeExtExists man dir \u003ca\u003escss\u003c/a\u003e $ fp -\u003e\n    when (\u003ca\u003edeploy\u003c/a\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e splitDirectories fp) $ do\n     let d = encodeString $ head (splitDirectories rel)\n     system \u003ca\u003ecd \u003c/a\u003e ++ d ++ \u003ca\u003e&& bundle exec compass compile\u003c/a\u003e\n  return ()\n\u003c/pre\u003e\u003cp\u003eIn the given directory tree,\n watch for any Added and Modified events (but ignore Removed events)\n for files with the given file extension\n perform the given action\n\u003c/p\u003e",
        "fct-module": "System.FSNotify.Devel",
        "fct-package": "fsnotify",
        "fct-signature": "WatchManager-\u003e FilePath-\u003e Text-\u003e (FilePath -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "treeExtExists"
      },
      "index": {
        "description": "Example of compiling scss files with compass compass WatchManager FilePath IO compass man dir do putStrLn compass encodeString dir treeExtExists man dir scss fp when deploy notElem splitDirectories fp do let encodeString head splitDirectories rel system cd bundle exec compass compile return In the given directory tree watch for any Added and Modified events but ignore Removed events for files with the given file extension perform the given action",
        "hierarchy": "System FSNotify Devel",
        "module": "System.FSNotify.Devel",
        "name": "treeExtExists",
        "normalized": "WatchManager-\u003eFilePath-\u003eText-\u003e(FilePath-\u003eIO())-\u003eIO()",
        "package": "fsnotify",
        "partial": "Ext Exists",
        "signature": "WatchManager-\u003eFilePath-\u003eText-\u003e(FilePath-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ecross-platform file watching.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "module",
        "fct-source": "src/System-FSNotify.html",
        "fct-type": "module",
        "title": "FSNotify"
      },
      "index": {
        "description": "cross-platform file watching",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "FSNotify",
        "normalized": "",
        "package": "fsnotify",
        "partial": "FSNotify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eAn action to be performed in response to an event.\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "type",
        "fct-source": "src/System-FSNotify-Types.html#Action",
        "fct-type": "type",
        "title": "Action"
      },
      "index": {
        "description": "An action to be performed in response to an event",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "Action",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#t:ActionPredicate",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate used to determine whether to act on an event.\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "type",
        "fct-source": "src/System-FSNotify-Types.html#ActionPredicate",
        "fct-type": "type",
        "title": "ActionPredicate"
      },
      "index": {
        "description": "predicate used to determine whether to act on an event",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "ActionPredicate",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Action Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eA file event reported by a file watcher. Each event contains the\n canonical path for the file and a timestamp guaranteed to be after the\n event occurred (timestamps represent current time when FSEvents receives\n it from the OS and/or platform-specific Haskell modules).\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "data",
        "fct-source": "src/System-FSNotify-Types.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "file event reported by file watcher Each event contains the canonical path for the file and timestamp guaranteed to be after the event occurred timestamps represent current time when FSEvents receives it from the OS and or platform-specific Haskell modules",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "Event",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#t:EventChannel",
      "description": {
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "type",
        "fct-source": "src/System-FSNotify-Types.html#EventChannel",
        "fct-type": "type",
        "title": "EventChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "EventChannel",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Event Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#t:WatchConfig",
      "description": {
        "fct-descr": "\u003cp\u003eConfig object, currently used just for debouncing events.\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "data",
        "fct-source": "src/System-FSNotify-Types.html#WatchConfig",
        "fct-type": "data",
        "title": "WatchConfig"
      },
      "index": {
        "description": "Config object currently used just for debouncing events",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "WatchConfig",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Watch Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#t:WatchManager",
      "description": {
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "data",
        "fct-source": "src/System-FSNotify.html#WatchManager",
        "fct-type": "data",
        "title": "WatchManager"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "WatchManager",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Watch Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:Added",
      "description": {
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "Added FilePath UTCTime",
        "fct-source": "src/System-FSNotify-Types.html#Event",
        "fct-type": "function",
        "title": "Added"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "Added",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Added",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:Debounce",
      "description": {
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "Debounce NominalDiffTime",
        "fct-source": "src/System-FSNotify-Types.html#WatchConfig",
        "fct-type": "function",
        "title": "Debounce"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "Debounce",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Debounce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:DebounceDefault",
      "description": {
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "DebounceDefault",
        "fct-source": "src/System-FSNotify-Types.html#WatchConfig",
        "fct-type": "function",
        "title": "DebounceDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "DebounceDefault",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Debounce Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:Modified",
      "description": {
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "Modified FilePath UTCTime",
        "fct-source": "src/System-FSNotify-Types.html#Event",
        "fct-type": "function",
        "title": "Modified"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "Modified",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Modified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:NoDebounce",
      "description": {
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "NoDebounce",
        "fct-source": "src/System-FSNotify-Types.html#WatchConfig",
        "fct-type": "function",
        "title": "NoDebounce"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "NoDebounce",
        "normalized": "",
        "package": "fsnotify",
        "partial": "No Debounce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:Removed",
      "description": {
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "Removed FilePath UTCTime",
        "fct-source": "src/System-FSNotify-Types.html#Event",
        "fct-type": "function",
        "title": "Removed"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "Removed",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Removed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:defaultConfig",
      "description": {
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "WatchConfig",
        "fct-source": "src/System-FSNotify.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "defaultConfig",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:eventPath",
      "description": {
        "fct-descr": "\u003cp\u003eHelper for extracting the path associated with an event.\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "Event -\u003e FilePath",
        "fct-source": "src/System-FSNotify-Types.html#eventPath",
        "fct-type": "function",
        "title": "eventPath"
      },
      "index": {
        "description": "Helper for extracting the path associated with an event",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "eventPath",
        "normalized": "Event-\u003eFilePath",
        "package": "fsnotify",
        "partial": "Path",
        "signature": "Event-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:eventTime",
      "description": {
        "fct-descr": "\u003cp\u003eHelper for extracting the time associated with an event.\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "Event -\u003e UTCTime",
        "fct-source": "src/System-FSNotify-Types.html#eventTime",
        "fct-type": "function",
        "title": "eventTime"
      },
      "index": {
        "description": "Helper for extracting the time associated with an event",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "eventTime",
        "normalized": "Event-\u003eUTCTime",
        "package": "fsnotify",
        "partial": "Time",
        "signature": "Event-\u003eUTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:startManager",
      "description": {
        "fct-descr": "\u003cp\u003eStart a file watch manager.\n Directories can only be watched when they are managed by a started watch\n watch manager.\n When finished watching. you must release resources via \u003ccode\u003e\u003ca\u003estopManager\u003c/a\u003e\u003c/code\u003e.\n It is preferrable if possible to use \u003ccode\u003e\u003ca\u003ewithManager\u003c/a\u003e\u003c/code\u003e to handle this\n automatically.\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "IO WatchManager",
        "fct-source": "src/System-FSNotify.html#startManager",
        "fct-type": "function",
        "title": "startManager"
      },
      "index": {
        "description": "Start file watch manager Directories can only be watched when they are managed by started watch watch manager When finished watching you must release resources via stopManager It is preferrable if possible to use withManager to handle this automatically",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "startManager",
        "normalized": "",
        "package": "fsnotify",
        "partial": "Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:startManagerConf",
      "description": {
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "WatchConfig -\u003e IO WatchManager",
        "fct-source": "src/System-FSNotify.html#startManagerConf",
        "fct-type": "function",
        "title": "startManagerConf"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "startManagerConf",
        "normalized": "WatchConfig-\u003eIO WatchManager",
        "package": "fsnotify",
        "partial": "Manager Conf",
        "signature": "WatchConfig-\u003eIO WatchManager"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:stopManager",
      "description": {
        "fct-descr": "\u003cp\u003eStop a file watch manager.\n Stopping a watch manager will immediately stop\n watching for files and free resources.\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "WatchManager -\u003e IO ()",
        "fct-source": "src/System-FSNotify.html#stopManager",
        "fct-type": "function",
        "title": "stopManager"
      },
      "index": {
        "description": "Stop file watch manager Stopping watch manager will immediately stop watching for files and free resources",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "stopManager",
        "normalized": "WatchManager-\u003eIO()",
        "package": "fsnotify",
        "partial": "Manager",
        "signature": "WatchManager-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:watchDir",
      "description": {
        "fct-descr": "\u003cp\u003eWatch the immediate contents of a directory by committing an Action for each event.\n Watching the immediate contents of a directory will only report events\n associated with files within the specified directory, and not files\n within its subdirectories. No two events pertaining to the same FilePath will\n be executed concurrently.\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "WatchManager -\u003e FilePath -\u003e ActionPredicate -\u003e Action -\u003e IO ()",
        "fct-source": "src/System-FSNotify.html#watchDir",
        "fct-type": "function",
        "title": "watchDir"
      },
      "index": {
        "description": "Watch the immediate contents of directory by committing an Action for each event Watching the immediate contents of directory will only report events associated with files within the specified directory and not files within its subdirectories No two events pertaining to the same FilePath will be executed concurrently",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "watchDir",
        "normalized": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eAction-\u003eIO()",
        "package": "fsnotify",
        "partial": "Dir",
        "signature": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eAction-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:watchDirChan",
      "description": {
        "fct-descr": "\u003cp\u003eWatch the immediate contents of a directory by streaming events to a Chan.\n Watching the immediate contents of a directory will only report events\n associated with files within the specified directory, and not files\n within its subdirectories.\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "WatchManager -\u003e FilePath -\u003e ActionPredicate -\u003e EventChannel -\u003e IO ()",
        "fct-source": "src/System-FSNotify.html#watchDirChan",
        "fct-type": "function",
        "title": "watchDirChan"
      },
      "index": {
        "description": "Watch the immediate contents of directory by streaming events to Chan Watching the immediate contents of directory will only report events associated with files within the specified directory and not files within its subdirectories",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "watchDirChan",
        "normalized": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eEventChannel-\u003eIO()",
        "package": "fsnotify",
        "partial": "Dir Chan",
        "signature": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eEventChannel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:watchTree",
      "description": {
        "fct-descr": "\u003cp\u003eWatch all the contents of a directory by committing an Action for each event.\n Watching all the contents of a directory will report events associated with\n files within the specified directory and its subdirectories. No two events\n pertaining to the same FilePath will be executed concurrently.\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "WatchManager -\u003e FilePath -\u003e ActionPredicate -\u003e Action -\u003e IO ()",
        "fct-source": "src/System-FSNotify.html#watchTree",
        "fct-type": "function",
        "title": "watchTree"
      },
      "index": {
        "description": "Watch all the contents of directory by committing an Action for each event Watching all the contents of directory will report events associated with files within the specified directory and its subdirectories No two events pertaining to the same FilePath will be executed concurrently",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "watchTree",
        "normalized": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eAction-\u003eIO()",
        "package": "fsnotify",
        "partial": "Tree",
        "signature": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eAction-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:watchTreeChan",
      "description": {
        "fct-descr": "\u003cp\u003eWatch all the contents of a directory by streaming events to a Chan.\n Watching all the contents of a directory will report events associated with\n files within the specified directory and its subdirectories.\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "WatchManager -\u003e FilePath -\u003e ActionPredicate -\u003e EventChannel -\u003e IO ()",
        "fct-source": "src/System-FSNotify.html#watchTreeChan",
        "fct-type": "function",
        "title": "watchTreeChan"
      },
      "index": {
        "description": "Watch all the contents of directory by streaming events to Chan Watching all the contents of directory will report events associated with files within the specified directory and its subdirectories",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "watchTreeChan",
        "normalized": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eEventChannel-\u003eIO()",
        "package": "fsnotify",
        "partial": "Tree Chan",
        "signature": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eEventChannel-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:withManager",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an IO action with a WatchManager in place.\n Tear down the WatchManager after the action is complete.\n\u003c/p\u003e",
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "(WatchManager -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-FSNotify.html#withManager",
        "fct-type": "function",
        "title": "withManager"
      },
      "index": {
        "description": "Perform an IO action with WatchManager in place Tear down the WatchManager after the action is complete",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "withManager",
        "normalized": "(WatchManager-\u003eIO a)-\u003eIO a",
        "package": "fsnotify",
        "partial": "Manager",
        "signature": "(WatchManager-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:withManagerConf",
      "description": {
        "fct-module": "System.FSNotify",
        "fct-package": "fsnotify",
        "fct-signature": "WatchConfig -\u003e (WatchManager -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-FSNotify.html#withManagerConf",
        "fct-type": "function",
        "title": "withManagerConf"
      },
      "index": {
        "description": "",
        "hierarchy": "System FSNotify",
        "module": "System.FSNotify",
        "name": "withManagerConf",
        "normalized": "WatchConfig-\u003e(WatchManager-\u003eIO a)-\u003eIO a",
        "package": "fsnotify",
        "partial": "Manager Conf",
        "signature": "WatchConfig-\u003e(WatchManager-\u003eIO a)-\u003eIO a"
      }
    }
  }
]