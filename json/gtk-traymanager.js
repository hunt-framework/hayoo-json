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
        "word": "gtk-traymanager"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a TrayManager - an integral part of a\n Linux system tray widget, though it is not itself a widget.  This\n package exports a single GObject (for use with gtk2hs) that\n implements the freedesktop.org system tray specification (it\n handles receiving events and translating them into convenient\n signals, along with the messy work of dealing with XEMBED).\n\u003c/p\u003e\u003cp\u003eThe basic usage of the object is to:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Instantiate the object with \u003ccode\u003e\u003ca\u003etrayManagerNew\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Have it manage a specific screen with \u003ccode\u003e\u003ca\u003etrayManagerManageScreen\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Set up handlers for the events exposed by the tray (e.g., \u003ccode\u003e\u003ca\u003etrayIconAdded\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eAs an example, a functional system tray widget looks something like:\n\u003c/p\u003e\u003cpre\u003e import Graphics.UI.Gtk\n import Graphics.UI.Gtk.Misc.TrayManager\n systrayNew = do\n   box \u003c- hBoxNew False 5\n   trayManager \u003c- rayManagerNew\n   Just screen \u003c- screenGetDefault\n   trayManagerManageScreen trayManager screen\n   on trayManager trayIconAdded $ \\w -\u003e do\n     widgetShowAll w\n     boxPackStart box w PackNatural 0\n\u003c/pre\u003e\u003cp\u003eNote that the widgets made available in the event handlers are not\n shown by default; you need to explicitly show them if you want that\n (and you probably do).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "TrayManager",
          "package": "gtk-traymanager",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements TrayManager an integral part of Linux system tray widget though it is not itself widget This package exports single GObject for use with gtk2hs that implements the freedesktop.org system tray specification it handles receiving events and translating them into convenient signals along with the messy work of dealing with XEMBED The basic usage of the object is to Instantiate the object with trayManagerNew Have it manage specific screen with trayManagerManageScreen Set up handlers for the events exposed by the tray e.g trayIconAdded As an example functional system tray widget looks something like import Graphics.UI.Gtk import Graphics.UI.Gtk.Misc.TrayManager systrayNew do box hBoxNew False trayManager rayManagerNew Just screen screenGetDefault trayManagerManageScreen trayManager screen on trayManager trayIconAdded do widgetShowAll boxPackStart box PackNatural Note that the widgets made available in the event handlers are not shown by default you need to explicitly show them if you want that and you probably do",
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "TrayManager",
          "package": "gtk-traymanager",
          "partial": "Tray Manager",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "TrayManager",
          "package": "gtk-traymanager",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#TrayManager",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "TrayManager",
          "package": "gtk-traymanager",
          "partial": "Tray Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#t:TrayManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "TrayManagerChild",
          "package": "gtk-traymanager",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#TrayManagerChild",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "TrayManagerChild",
          "package": "gtk-traymanager",
          "partial": "Tray Manager Child",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#t:TrayManagerChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "TrayManagerClass",
          "package": "gtk-traymanager",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#TrayManagerClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "TrayManagerClass",
          "package": "gtk-traymanager",
          "partial": "Tray Manager Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#t:TrayManagerClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "castToTrayManager",
          "package": "gtk-traymanager",
          "signature": "o -\u003e TrayManager",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#castToTrayManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "castToTrayManager",
          "normalized": "a-\u003eTrayManager",
          "package": "gtk-traymanager",
          "partial": "To Tray Manager",
          "signature": "o-\u003eTrayManager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:castToTrayManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "gTypeTrayManager",
          "package": "gtk-traymanager",
          "signature": "GType",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#gTypeTrayManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "gTypeTrayManager",
          "package": "gtk-traymanager",
          "partial": "Type Tray Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:gTypeTrayManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "toTrayManager",
          "package": "gtk-traymanager",
          "signature": "o -\u003e TrayManager",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#toTrayManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "toTrayManager",
          "normalized": "a-\u003eTrayManager",
          "package": "gtk-traymanager",
          "partial": "Tray Manager",
          "signature": "o-\u003eTrayManager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:toTrayManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe signal emitted when a new tray icon is added.  These are\n delivered even for systray icons that already exist when the tray\n manager is created.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayIconAdded",
          "package": "gtk-traymanager",
          "signature": "Signal self (Widget -\u003e IO ())",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayIconAdded",
          "type": "function"
        },
        "index": {
          "description": "The signal emitted when new tray icon is added These are delivered even for systray icons that already exist when the tray manager is created",
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayIconAdded",
          "normalized": "Signal a(Widget-\u003eIO())",
          "package": "gtk-traymanager",
          "partial": "Icon Added",
          "signature": "Signal self(Widget-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayIconAdded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis signal is emitted when a tray icon is removed by its parent\n application.  No action is really necessary here (the icon is\n removed without any intervention).  You could do something here if\n you wanted, though.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayIconRemoved",
          "package": "gtk-traymanager",
          "signature": "Signal self (Widget -\u003e IO ())",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayIconRemoved",
          "type": "function"
        },
        "index": {
          "description": "This signal is emitted when tray icon is removed by its parent application No action is really necessary here the icon is removed without any intervention You could do something here if you wanted though",
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayIconRemoved",
          "normalized": "Signal a(Widget-\u003eIO())",
          "package": "gtk-traymanager",
          "partial": "Icon Removed",
          "signature": "Signal self(Widget-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayIconRemoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e??\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayLostSelection",
          "package": "gtk-traymanager",
          "signature": "Signal self (IO ())",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayLostSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayLostSelection",
          "normalized": "Signal a(IO())",
          "package": "gtk-traymanager",
          "partial": "Lost Selection",
          "signature": "Signal self(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayLostSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayManagerCheckRunning",
          "package": "gtk-traymanager",
          "signature": "Screen -\u003e IO Bool",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayManagerCheckRunning",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayManagerCheckRunning",
          "normalized": "Screen-\u003eIO Bool",
          "package": "gtk-traymanager",
          "partial": "Manager Check Running",
          "signature": "Screen-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayManagerCheckRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayManagerGetChildTitle",
          "package": "gtk-traymanager",
          "signature": "TrayManager -\u003e TrayManagerChild -\u003e IO String",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayManagerGetChildTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayManagerGetChildTitle",
          "normalized": "TrayManager-\u003eTrayManagerChild-\u003eIO String",
          "package": "gtk-traymanager",
          "partial": "Manager Get Child Title",
          "signature": "TrayManager-\u003eTrayManagerChild-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayManagerGetChildTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayManagerManageScreen",
          "package": "gtk-traymanager",
          "signature": "TrayManager -\u003e Screen -\u003e IO Bool",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayManagerManageScreen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayManagerManageScreen",
          "normalized": "TrayManager-\u003eScreen-\u003eIO Bool",
          "package": "gtk-traymanager",
          "partial": "Manager Manage Screen",
          "signature": "TrayManager-\u003eScreen-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayManagerManageScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayManagerNew",
          "package": "gtk-traymanager",
          "signature": "IO TrayManager",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayManagerNew",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayManagerNew",
          "package": "gtk-traymanager",
          "partial": "Manager New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayManagerNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilarly, the applciation can send this to cancel a previous\n persistent message.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayMessageCanceled",
          "package": "gtk-traymanager",
          "signature": "Signal self (Widget -\u003e Int64 -\u003e IO ())",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayMessageCanceled",
          "type": "function"
        },
        "index": {
          "description": "Similarly the applciation can send this to cancel previous persistent message",
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayMessageCanceled",
          "normalized": "Signal a(Widget-\u003eInt-\u003eIO())",
          "package": "gtk-traymanager",
          "partial": "Message Canceled",
          "signature": "Signal self(Widget-\u003eInt-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayMessageCanceled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis signal is emitted when the application that displayed an\n icon wants a semi-persistent notification displayed for its icon.\n The standard doesn't seem to require that these be honored.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayMessageSent",
          "package": "gtk-traymanager",
          "signature": "Signal self (Widget -\u003e String -\u003e Int64 -\u003e Int64 -\u003e IO ())",
          "source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayMessageSent",
          "type": "function"
        },
        "index": {
          "description": "This signal is emitted when the application that displayed an icon wants semi-persistent notification displayed for its icon The standard doesn seem to require that these be honored",
          "hierarchy": "Graphics UI Gtk Misc TrayManager",
          "module": "Graphics.UI.Gtk.Misc.TrayManager",
          "name": "trayMessageSent",
          "normalized": "Signal a(Widget-\u003eString-\u003eInt-\u003eInt-\u003eIO())",
          "package": "gtk-traymanager",
          "partial": "Message Sent",
          "signature": "Signal self(Widget-\u003eString-\u003eInt-\u003eInt-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayMessageSent"
      }
    }
  ]
]