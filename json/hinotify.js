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
        "word": "hinotify"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Haskell binding to INotify.\n See \u003ca\u003ehttp://www.kernel.org/pub/linux/kernel/people/rml/inotify/\u003c/a\u003e and \u003ccode\u003eman\n inotify\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003einitINotify\u003c/a\u003e\u003c/code\u003e to get a \u003ccode\u003e\u003ca\u003eINotify\u003c/a\u003e\u003c/code\u003e, then use \u003ccode\u003e\u003ca\u003eaddWatch\u003c/a\u003e\u003c/code\u003e to\n add a watch on a file or directory. Select which events you're interested\n in with \u003ccode\u003e\u003ca\u003eEventVariety\u003c/a\u003e\u003c/code\u003e, which corresponds to the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e events.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eremoveWatch\u003c/a\u003e\u003c/code\u003e once you don't want to watch a file any more.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.INotify",
          "name": "INotify",
          "package": "hinotify",
          "source": "src/System-INotify.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell binding to INotify See http www.kernel.org pub linux kernel people rml inotify and man inotify Use initINotify to get INotify then use addWatch to add watch on file or directory Select which events you re interested in with EventVariety which corresponds to the Event events Use removeWatch once you don want to watch file any more",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "INotify",
          "package": "hinotify",
          "partial": "INotify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "Cookie",
          "package": "hinotify",
          "source": "src/System-INotify.html#Cookie",
          "type": "data"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Cookie",
          "package": "hinotify",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "Event",
          "package": "hinotify",
          "source": "src/System-INotify.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Event",
          "package": "hinotify",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "EventVariety",
          "package": "hinotify",
          "source": "src/System-INotify.html#EventVariety",
          "type": "data"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "EventVariety",
          "package": "hinotify",
          "partial": "Event Variety",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#t:EventVariety"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "INotify",
          "package": "hinotify",
          "source": "src/System-INotify.html#INotify",
          "type": "data"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "INotify",
          "package": "hinotify",
          "partial": "INotify",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#t:INotify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "WatchDescriptor",
          "package": "hinotify",
          "source": "src/System-INotify.html#WatchDescriptor",
          "type": "data"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "WatchDescriptor",
          "package": "hinotify",
          "partial": "Watch Descriptor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#t:WatchDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "Access",
          "package": "hinotify",
          "signature": "Access",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Access",
          "package": "hinotify",
          "partial": "Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Access"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file was accessed. \u003ccode\u003eAccessed isDirectory file\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "Accessed",
          "package": "hinotify",
          "signature": "Accessed",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "file was accessed Accessed isDirectory file",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Accessed",
          "package": "hinotify",
          "partial": "Accessed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Accessed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "AllEvents",
          "package": "hinotify",
          "signature": "AllEvents",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "AllEvents",
          "package": "hinotify",
          "partial": "All Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:AllEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "Attrib",
          "package": "hinotify",
          "signature": "Attrib",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Attrib",
          "package": "hinotify",
          "partial": "Attrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Attrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA files attributes where changed. \u003ccode\u003eAttributes isDirectory file\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "Attributes",
          "package": "hinotify",
          "signature": "Attributes",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "files attributes where changed Attributes isDirectory file",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Attributes",
          "package": "hinotify",
          "partial": "Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "Close",
          "package": "hinotify",
          "signature": "Close",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Close",
          "package": "hinotify",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "CloseNoWrite",
          "package": "hinotify",
          "signature": "CloseNoWrite",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "CloseNoWrite",
          "package": "hinotify",
          "partial": "Close No Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:CloseNoWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "CloseWrite",
          "package": "hinotify",
          "signature": "CloseWrite",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "CloseWrite",
          "package": "hinotify",
          "partial": "Close Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:CloseWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file was closed. \u003ccode\u003eClosed isDirectory file wasWriteable\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "Closed",
          "package": "hinotify",
          "signature": "Closed",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "file was closed Closed isDirectory file wasWriteable",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Closed",
          "package": "hinotify",
          "partial": "Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Closed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "Create",
          "package": "hinotify",
          "signature": "Create",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Create",
          "package": "hinotify",
          "partial": "Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file was created. \u003ccode\u003eCreated isDirectory file\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "Created",
          "package": "hinotify",
          "signature": "Created",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "file was created Created isDirectory file",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Created",
          "package": "hinotify",
          "partial": "Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Created"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "Delete",
          "package": "hinotify",
          "signature": "Delete",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Delete",
          "package": "hinotify",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "DeleteSelf",
          "package": "hinotify",
          "signature": "DeleteSelf",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "DeleteSelf",
          "package": "hinotify",
          "partial": "Delete Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:DeleteSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file was deleted. \u003ccode\u003eDeleted isDirectory file\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "Deleted",
          "package": "hinotify",
          "signature": "Deleted",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "file was deleted Deleted isDirectory file",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Deleted",
          "package": "hinotify",
          "partial": "Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Deleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file watched was deleted.\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "DeletedSelf",
          "package": "hinotify",
          "signature": "DeletedSelf",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The file watched was deleted",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "DeletedSelf",
          "package": "hinotify",
          "partial": "Deleted Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:DeletedSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "Ignored",
          "package": "hinotify",
          "signature": "Ignored",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Ignored",
          "package": "hinotify",
          "partial": "Ignored",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Ignored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "MaskAdd",
          "package": "hinotify",
          "signature": "MaskAdd",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "MaskAdd",
          "package": "hinotify",
          "partial": "Mask Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:MaskAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file was modified. \u003ccode\u003eModified isDirectory file\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "Modified",
          "package": "hinotify",
          "signature": "Modified",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "file was modified Modified isDirectory file",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Modified",
          "package": "hinotify",
          "partial": "Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Modified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "Modify",
          "package": "hinotify",
          "signature": "Modify",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Modify",
          "package": "hinotify",
          "partial": "Modify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "Move",
          "package": "hinotify",
          "signature": "Move",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Move",
          "package": "hinotify",
          "partial": "Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "MoveIn",
          "package": "hinotify",
          "signature": "MoveIn",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "MoveIn",
          "package": "hinotify",
          "partial": "Move In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:MoveIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "MoveOut",
          "package": "hinotify",
          "signature": "MoveOut",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "MoveOut",
          "package": "hinotify",
          "partial": "Move Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:MoveOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "MoveSelf",
          "package": "hinotify",
          "signature": "MoveSelf",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "MoveSelf",
          "package": "hinotify",
          "partial": "Move Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:MoveSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file was moved into the watched dir. \u003ccode\u003eMovedTo isDirectory to cookie\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "MovedIn",
          "package": "hinotify",
          "signature": "MovedIn",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "file was moved into the watched dir MovedTo isDirectory to cookie",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "MovedIn",
          "package": "hinotify",
          "partial": "Moved In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:MovedIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file was moved away from the watched dir. \u003ccode\u003eMovedFrom isDirectory from cookie\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "MovedOut",
          "package": "hinotify",
          "signature": "MovedOut",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "file was moved away from the watched dir MovedFrom isDirectory from cookie",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "MovedOut",
          "package": "hinotify",
          "partial": "Moved Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:MovedOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe watched file was moved. \u003ccode\u003eMovedSelf isDirectory\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "MovedSelf",
          "package": "hinotify",
          "signature": "MovedSelf",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The watched file was moved MovedSelf isDirectory",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "MovedSelf",
          "package": "hinotify",
          "partial": "Moved Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:MovedSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "NoSymlink",
          "package": "hinotify",
          "signature": "NoSymlink",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "NoSymlink",
          "package": "hinotify",
          "partial": "No Symlink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:NoSymlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "OneShot",
          "package": "hinotify",
          "signature": "OneShot",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "OneShot",
          "package": "hinotify",
          "partial": "One Shot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:OneShot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "OnlyDir",
          "package": "hinotify",
          "signature": "OnlyDir",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "OnlyDir",
          "package": "hinotify",
          "partial": "Only Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:OnlyDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "Open",
          "package": "hinotify",
          "signature": "Open",
          "source": "src/System-INotify.html#EventVariety",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Open",
          "package": "hinotify",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file was opened. \u003ccode\u003eOpened isDirectory maybeFilePath\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "Opened",
          "package": "hinotify",
          "signature": "Opened",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "file was opened Opened isDirectory maybeFilePath",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Opened",
          "package": "hinotify",
          "partial": "Opened",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Opened"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe queue overflowed.\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "QOverflow",
          "package": "hinotify",
          "signature": "QOverflow",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The queue overflowed",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "QOverflow",
          "package": "hinotify",
          "partial": "QOverflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:QOverflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "Unknown",
          "package": "hinotify",
          "signature": "Unknown FDEvent",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Unknown",
          "package": "hinotify",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file watched was unmounted.\n\u003c/p\u003e",
          "module": "System.INotify",
          "name": "Unmounted",
          "package": "hinotify",
          "signature": "Unmounted",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The file watched was unmounted",
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "Unmounted",
          "package": "hinotify",
          "partial": "Unmounted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:Unmounted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "addWatch",
          "package": "hinotify",
          "signature": "INotify -\u003e [EventVariety] -\u003e FilePath -\u003e (Event -\u003e IO ()) -\u003e IO WatchDescriptor",
          "source": "src/System-INotify.html#addWatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "addWatch",
          "normalized": "INotify-\u003e[EventVariety]-\u003eFilePath-\u003e(Event-\u003eIO())-\u003eIO WatchDescriptor",
          "package": "hinotify",
          "partial": "Watch",
          "signature": "INotify-\u003e[EventVariety]-\u003eFilePath-\u003e(Event-\u003eIO())-\u003eIO WatchDescriptor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:addWatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "filePath",
          "package": "hinotify",
          "signature": "FilePath",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "filePath",
          "package": "hinotify",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:filePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "initINotify",
          "package": "hinotify",
          "signature": "IO INotify",
          "source": "src/System-INotify.html#initINotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "initINotify",
          "package": "hinotify",
          "partial": "INotify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:initINotify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "isDirectory",
          "package": "hinotify",
          "signature": "Bool",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "isDirectory",
          "package": "hinotify",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:isDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "killINotify",
          "package": "hinotify",
          "signature": "INotify -\u003e IO ()",
          "source": "src/System-INotify.html#killINotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "killINotify",
          "normalized": "INotify-\u003eIO()",
          "package": "hinotify",
          "partial": "INotify",
          "signature": "INotify-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:killINotify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "maybeFilePath",
          "package": "hinotify",
          "signature": "Maybe FilePath",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "maybeFilePath",
          "package": "hinotify",
          "partial": "File Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:maybeFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "moveCookie",
          "package": "hinotify",
          "signature": "Cookie",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "moveCookie",
          "package": "hinotify",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:moveCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "removeWatch",
          "package": "hinotify",
          "signature": "WatchDescriptor -\u003e IO ()",
          "source": "src/System-INotify.html#removeWatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "removeWatch",
          "normalized": "WatchDescriptor-\u003eIO()",
          "package": "hinotify",
          "partial": "Watch",
          "signature": "WatchDescriptor-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:removeWatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "wasWriteable",
          "package": "hinotify",
          "signature": "Bool",
          "source": "src/System-INotify.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "wasWriteable",
          "package": "hinotify",
          "partial": "Writeable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:wasWriteable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.INotify",
          "name": "withINotify",
          "package": "hinotify",
          "signature": "(INotify -\u003e IO a) -\u003e IO a",
          "source": "src/System-INotify.html#withINotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "System INotify",
          "module": "System.INotify",
          "name": "withINotify",
          "normalized": "(INotify-\u003eIO a)-\u003eIO a",
          "package": "hinotify",
          "partial": "INotify",
          "signature": "(INotify-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinotify/docs/System-INotify.html#v:withINotify"
      }
    }
  ]
]