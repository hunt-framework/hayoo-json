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
        "word": "fsnotify"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify.Devel",
          "name": "Devel",
          "package": "fsnotify",
          "source": "src/System-FSNotify-Devel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FSNotify Devel",
          "module": "System.FSNotify.Devel",
          "name": "Devel",
          "package": "fsnotify",
          "partial": "Devel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify-Devel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify.Devel",
          "name": "allEvents",
          "package": "fsnotify",
          "signature": "(FilePath -\u003e Bool) -\u003e Event -\u003e Bool",
          "source": "src/System-FSNotify-Devel.html#allEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FSNotify Devel",
          "module": "System.FSNotify.Devel",
          "name": "allEvents",
          "normalized": "(FilePath-\u003eBool)-\u003eEvent-\u003eBool",
          "package": "fsnotify",
          "partial": "Events",
          "signature": "(FilePath-\u003eBool)-\u003eEvent-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify-Devel.html#v:allEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify.Devel",
          "name": "doAllEvents",
          "package": "fsnotify",
          "signature": "(FilePath -\u003e m ()) -\u003e Event -\u003e m ()",
          "source": "src/System-FSNotify-Devel.html#doAllEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FSNotify Devel",
          "module": "System.FSNotify.Devel",
          "name": "doAllEvents",
          "normalized": "(FilePath-\u003ea())-\u003eEvent-\u003ea()",
          "package": "fsnotify",
          "partial": "All Events",
          "signature": "(FilePath-\u003em())-\u003eEvent-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify-Devel.html#v:doAllEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify.Devel",
          "name": "existsEvents",
          "package": "fsnotify",
          "signature": "(FilePath -\u003e Bool) -\u003e Event -\u003e Bool",
          "source": "src/System-FSNotify-Devel.html#existsEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FSNotify Devel",
          "module": "System.FSNotify.Devel",
          "name": "existsEvents",
          "normalized": "(FilePath-\u003eBool)-\u003eEvent-\u003eBool",
          "package": "fsnotify",
          "partial": "Events",
          "signature": "(FilePath-\u003eBool)-\u003eEvent-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify-Devel.html#v:existsEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn the given directory tree,\n for files with the given file extension\n perform the given action\n\u003c/p\u003e",
          "module": "System.FSNotify.Devel",
          "name": "treeExtAny",
          "package": "fsnotify",
          "signature": "WatchManager-\u003e FilePath-\u003e Text-\u003e (FilePath -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "In the given directory tree for files with the given file extension perform the given action",
          "hierarchy": "System FSNotify Devel",
          "module": "System.FSNotify.Devel",
          "name": "treeExtAny",
          "normalized": "WatchManager-\u003eFilePath-\u003eText-\u003e(FilePath-\u003eIO())-\u003eIO()",
          "package": "fsnotify",
          "partial": "Ext Any",
          "signature": "WatchManager-\u003eFilePath-\u003eText-\u003e(FilePath-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify-Devel.html#v:treeExtAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExample of compiling scss files with compass\n\u003c/p\u003e\u003cpre\u003e\n compass :: WatchManager -\u003e FilePath -\u003e IO ()\n compass man dir = do\n  putStrLn $ \u003ca\u003ecompass \u003c/a\u003e ++ encodeString dir\n  treeExtExists man dir \u003ca\u003escss\u003c/a\u003e $ fp -\u003e\n    when (\u003ca\u003edeploy\u003c/a\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e splitDirectories fp) $ do\n     let d = encodeString $ head (splitDirectories rel)\n     system \u003ca\u003ecd \u003c/a\u003e ++ d ++ \u003ca\u003e&& bundle exec compass compile\u003c/a\u003e\n  return ()\n\u003c/pre\u003e\u003cp\u003eIn the given directory tree,\n watch for any Added and Modified events (but ignore Removed events)\n for files with the given file extension\n perform the given action\n\u003c/p\u003e",
          "module": "System.FSNotify.Devel",
          "name": "treeExtExists",
          "package": "fsnotify",
          "signature": "WatchManager-\u003e FilePath-\u003e Text-\u003e (FilePath -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Example of compiling scss files with compass compass WatchManager FilePath IO compass man dir do putStrLn compass encodeString dir treeExtExists man dir scss fp when deploy notElem splitDirectories fp do let encodeString head splitDirectories rel system cd bundle exec compass compile return In the given directory tree watch for any Added and Modified events but ignore Removed events for files with the given file extension perform the given action",
          "hierarchy": "System FSNotify Devel",
          "module": "System.FSNotify.Devel",
          "name": "treeExtExists",
          "normalized": "WatchManager-\u003eFilePath-\u003eText-\u003e(FilePath-\u003eIO())-\u003eIO()",
          "package": "fsnotify",
          "partial": "Ext Exists",
          "signature": "WatchManager-\u003eFilePath-\u003eText-\u003e(FilePath-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify-Devel.html#v:treeExtExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ecross-platform file watching.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.FSNotify",
          "name": "FSNotify",
          "package": "fsnotify",
          "source": "src/System-FSNotify.html",
          "type": "module"
        },
        "index": {
          "description": "cross-platform file watching",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "FSNotify",
          "package": "fsnotify",
          "partial": "FSNotify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action to be performed in response to an event.\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "Action",
          "package": "fsnotify",
          "source": "src/System-FSNotify-Types.html#Action",
          "type": "type"
        },
        "index": {
          "description": "An action to be performed in response to an event",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "Action",
          "package": "fsnotify",
          "partial": "Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate used to determine whether to act on an event.\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "ActionPredicate",
          "package": "fsnotify",
          "source": "src/System-FSNotify-Types.html#ActionPredicate",
          "type": "type"
        },
        "index": {
          "description": "predicate used to determine whether to act on an event",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "ActionPredicate",
          "package": "fsnotify",
          "partial": "Action Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#t:ActionPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file event reported by a file watcher. Each event contains the\n canonical path for the file and a timestamp guaranteed to be after the\n event occurred (timestamps represent current time when FSEvents receives\n it from the OS and/or platform-specific Haskell modules).\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "Event",
          "package": "fsnotify",
          "source": "src/System-FSNotify-Types.html#Event",
          "type": "data"
        },
        "index": {
          "description": "file event reported by file watcher Each event contains the canonical path for the file and timestamp guaranteed to be after the event occurred timestamps represent current time when FSEvents receives it from the OS and or platform-specific Haskell modules",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "Event",
          "package": "fsnotify",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify",
          "name": "EventChannel",
          "package": "fsnotify",
          "source": "src/System-FSNotify-Types.html#EventChannel",
          "type": "type"
        },
        "index": {
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "EventChannel",
          "package": "fsnotify",
          "partial": "Event Channel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#t:EventChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfig object, currently used just for debouncing events.\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "WatchConfig",
          "package": "fsnotify",
          "source": "src/System-FSNotify-Types.html#WatchConfig",
          "type": "data"
        },
        "index": {
          "description": "Config object currently used just for debouncing events",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "WatchConfig",
          "package": "fsnotify",
          "partial": "Watch Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#t:WatchConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify",
          "name": "WatchManager",
          "package": "fsnotify",
          "source": "src/System-FSNotify.html#WatchManager",
          "type": "data"
        },
        "index": {
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "WatchManager",
          "package": "fsnotify",
          "partial": "Watch Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#t:WatchManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify",
          "name": "Added",
          "package": "fsnotify",
          "signature": "Added FilePath UTCTime",
          "source": "src/System-FSNotify-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "Added",
          "package": "fsnotify",
          "partial": "Added",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:Added"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify",
          "name": "Debounce",
          "package": "fsnotify",
          "signature": "Debounce NominalDiffTime",
          "source": "src/System-FSNotify-Types.html#WatchConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "Debounce",
          "package": "fsnotify",
          "partial": "Debounce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:Debounce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify",
          "name": "DebounceDefault",
          "package": "fsnotify",
          "signature": "DebounceDefault",
          "source": "src/System-FSNotify-Types.html#WatchConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "DebounceDefault",
          "package": "fsnotify",
          "partial": "Debounce Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:DebounceDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify",
          "name": "Modified",
          "package": "fsnotify",
          "signature": "Modified FilePath UTCTime",
          "source": "src/System-FSNotify-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "Modified",
          "package": "fsnotify",
          "partial": "Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:Modified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify",
          "name": "NoDebounce",
          "package": "fsnotify",
          "signature": "NoDebounce",
          "source": "src/System-FSNotify-Types.html#WatchConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "NoDebounce",
          "package": "fsnotify",
          "partial": "No Debounce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:NoDebounce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify",
          "name": "Removed",
          "package": "fsnotify",
          "signature": "Removed FilePath UTCTime",
          "source": "src/System-FSNotify-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "Removed",
          "package": "fsnotify",
          "partial": "Removed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:Removed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify",
          "name": "defaultConfig",
          "package": "fsnotify",
          "signature": "WatchConfig",
          "source": "src/System-FSNotify.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "defaultConfig",
          "package": "fsnotify",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for extracting the path associated with an event.\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "eventPath",
          "package": "fsnotify",
          "signature": "Event -\u003e FilePath",
          "source": "src/System-FSNotify-Types.html#eventPath",
          "type": "function"
        },
        "index": {
          "description": "Helper for extracting the path associated with an event",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "eventPath",
          "normalized": "Event-\u003eFilePath",
          "package": "fsnotify",
          "partial": "Path",
          "signature": "Event-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:eventPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for extracting the time associated with an event.\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "eventTime",
          "package": "fsnotify",
          "signature": "Event -\u003e UTCTime",
          "source": "src/System-FSNotify-Types.html#eventTime",
          "type": "function"
        },
        "index": {
          "description": "Helper for extracting the time associated with an event",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "eventTime",
          "normalized": "Event-\u003eUTCTime",
          "package": "fsnotify",
          "partial": "Time",
          "signature": "Event-\u003eUTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:eventTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a file watch manager.\n Directories can only be watched when they are managed by a started watch\n watch manager.\n When finished watching. you must release resources via \u003ccode\u003e\u003ca\u003estopManager\u003c/a\u003e\u003c/code\u003e.\n It is preferrable if possible to use \u003ccode\u003e\u003ca\u003ewithManager\u003c/a\u003e\u003c/code\u003e to handle this\n automatically.\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "startManager",
          "package": "fsnotify",
          "signature": "IO WatchManager",
          "source": "src/System-FSNotify.html#startManager",
          "type": "function"
        },
        "index": {
          "description": "Start file watch manager Directories can only be watched when they are managed by started watch watch manager When finished watching you must release resources via stopManager It is preferrable if possible to use withManager to handle this automatically",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "startManager",
          "package": "fsnotify",
          "partial": "Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:startManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify",
          "name": "startManagerConf",
          "package": "fsnotify",
          "signature": "WatchConfig -\u003e IO WatchManager",
          "source": "src/System-FSNotify.html#startManagerConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "startManagerConf",
          "normalized": "WatchConfig-\u003eIO WatchManager",
          "package": "fsnotify",
          "partial": "Manager Conf",
          "signature": "WatchConfig-\u003eIO WatchManager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:startManagerConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop a file watch manager.\n Stopping a watch manager will immediately stop\n watching for files and free resources.\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "stopManager",
          "package": "fsnotify",
          "signature": "WatchManager -\u003e IO ()",
          "source": "src/System-FSNotify.html#stopManager",
          "type": "function"
        },
        "index": {
          "description": "Stop file watch manager Stopping watch manager will immediately stop watching for files and free resources",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "stopManager",
          "normalized": "WatchManager-\u003eIO()",
          "package": "fsnotify",
          "partial": "Manager",
          "signature": "WatchManager-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:stopManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWatch the immediate contents of a directory by committing an Action for each event.\n Watching the immediate contents of a directory will only report events\n associated with files within the specified directory, and not files\n within its subdirectories. No two events pertaining to the same FilePath will\n be executed concurrently.\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "watchDir",
          "package": "fsnotify",
          "signature": "WatchManager -\u003e FilePath -\u003e ActionPredicate -\u003e Action -\u003e IO ()",
          "source": "src/System-FSNotify.html#watchDir",
          "type": "function"
        },
        "index": {
          "description": "Watch the immediate contents of directory by committing an Action for each event Watching the immediate contents of directory will only report events associated with files within the specified directory and not files within its subdirectories No two events pertaining to the same FilePath will be executed concurrently",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "watchDir",
          "normalized": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eAction-\u003eIO()",
          "package": "fsnotify",
          "partial": "Dir",
          "signature": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eAction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:watchDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWatch the immediate contents of a directory by streaming events to a Chan.\n Watching the immediate contents of a directory will only report events\n associated with files within the specified directory, and not files\n within its subdirectories.\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "watchDirChan",
          "package": "fsnotify",
          "signature": "WatchManager -\u003e FilePath -\u003e ActionPredicate -\u003e EventChannel -\u003e IO ()",
          "source": "src/System-FSNotify.html#watchDirChan",
          "type": "function"
        },
        "index": {
          "description": "Watch the immediate contents of directory by streaming events to Chan Watching the immediate contents of directory will only report events associated with files within the specified directory and not files within its subdirectories",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "watchDirChan",
          "normalized": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eEventChannel-\u003eIO()",
          "package": "fsnotify",
          "partial": "Dir Chan",
          "signature": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eEventChannel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:watchDirChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWatch all the contents of a directory by committing an Action for each event.\n Watching all the contents of a directory will report events associated with\n files within the specified directory and its subdirectories. No two events\n pertaining to the same FilePath will be executed concurrently.\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "watchTree",
          "package": "fsnotify",
          "signature": "WatchManager -\u003e FilePath -\u003e ActionPredicate -\u003e Action -\u003e IO ()",
          "source": "src/System-FSNotify.html#watchTree",
          "type": "function"
        },
        "index": {
          "description": "Watch all the contents of directory by committing an Action for each event Watching all the contents of directory will report events associated with files within the specified directory and its subdirectories No two events pertaining to the same FilePath will be executed concurrently",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "watchTree",
          "normalized": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eAction-\u003eIO()",
          "package": "fsnotify",
          "partial": "Tree",
          "signature": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eAction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:watchTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWatch all the contents of a directory by streaming events to a Chan.\n Watching all the contents of a directory will report events associated with\n files within the specified directory and its subdirectories.\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "watchTreeChan",
          "package": "fsnotify",
          "signature": "WatchManager -\u003e FilePath -\u003e ActionPredicate -\u003e EventChannel -\u003e IO ()",
          "source": "src/System-FSNotify.html#watchTreeChan",
          "type": "function"
        },
        "index": {
          "description": "Watch all the contents of directory by streaming events to Chan Watching all the contents of directory will report events associated with files within the specified directory and its subdirectories",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "watchTreeChan",
          "normalized": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eEventChannel-\u003eIO()",
          "package": "fsnotify",
          "partial": "Tree Chan",
          "signature": "WatchManager-\u003eFilePath-\u003eActionPredicate-\u003eEventChannel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:watchTreeChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an IO action with a WatchManager in place.\n Tear down the WatchManager after the action is complete.\n\u003c/p\u003e",
          "module": "System.FSNotify",
          "name": "withManager",
          "package": "fsnotify",
          "signature": "(WatchManager -\u003e IO a) -\u003e IO a",
          "source": "src/System-FSNotify.html#withManager",
          "type": "function"
        },
        "index": {
          "description": "Perform an IO action with WatchManager in place Tear down the WatchManager after the action is complete",
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "withManager",
          "normalized": "(WatchManager-\u003eIO a)-\u003eIO a",
          "package": "fsnotify",
          "partial": "Manager",
          "signature": "(WatchManager-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:withManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FSNotify",
          "name": "withManagerConf",
          "package": "fsnotify",
          "signature": "WatchConfig -\u003e (WatchManager -\u003e IO a) -\u003e IO a",
          "source": "src/System-FSNotify.html#withManagerConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FSNotify",
          "module": "System.FSNotify",
          "name": "withManagerConf",
          "normalized": "WatchConfig-\u003e(WatchManager-\u003eIO a)-\u003eIO a",
          "package": "fsnotify",
          "partial": "Manager Conf",
          "signature": "WatchConfig-\u003e(WatchManager-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fsnotify/docs/System-FSNotify.html#v:withManagerConf"
      }
    }
  ]
]