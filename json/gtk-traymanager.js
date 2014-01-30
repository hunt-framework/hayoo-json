[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a TrayManager - an integral part of a\n Linux system tray widget, though it is not itself a widget.  This\n package exports a single GObject (for use with gtk2hs) that\n implements the freedesktop.org system tray specification (it\n handles receiving events and translating them into convenient\n signals, along with the messy work of dealing with XEMBED).\n\u003c/p\u003e\u003cp\u003eThe basic usage of the object is to:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Instantiate the object with \u003ccode\u003e\u003ca\u003etrayManagerNew\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Have it manage a specific screen with \u003ccode\u003e\u003ca\u003etrayManagerManageScreen\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Set up handlers for the events exposed by the tray (e.g., \u003ccode\u003e\u003ca\u003etrayIconAdded\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eAs an example, a functional system tray widget looks something like:\n\u003c/p\u003e\u003cpre\u003e import Graphics.UI.Gtk\n import Graphics.UI.Gtk.Misc.TrayManager\n systrayNew = do\n   box \u003c- hBoxNew False 5\n   trayManager \u003c- rayManagerNew\n   Just screen \u003c- screenGetDefault\n   trayManagerManageScreen trayManager screen\n   on trayManager trayIconAdded $ \\w -\u003e do\n     widgetShowAll w\n     boxPackStart box w PackNatural 0\n\u003c/pre\u003e\u003cp\u003eNote that the widgets made available in the event handlers are not\n shown by default; you need to explicitly show them if you want that\n (and you probably do).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html",
        "fct-type": "module",
        "title": "TrayManager"
      },
      "index": {
        "description": "This module implements TrayManager an integral part of Linux system tray widget though it is not itself widget This package exports single GObject for use with gtk2hs that implements the freedesktop.org system tray specification it handles receiving events and translating them into convenient signals along with the messy work of dealing with XEMBED The basic usage of the object is to Instantiate the object with trayManagerNew Have it manage specific screen with trayManagerManageScreen Set up handlers for the events exposed by the tray e.g trayIconAdded As an example functional system tray widget looks something like import Graphics.UI.Gtk import Graphics.UI.Gtk.Misc.TrayManager systrayNew do box hBoxNew False trayManager rayManagerNew Just screen screenGetDefault trayManagerManageScreen trayManager screen on trayManager trayIconAdded do widgetShowAll boxPackStart box PackNatural Note that the widgets made available in the event handlers are not shown by default you need to explicitly show them if you want that and you probably do",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "TrayManager",
        "normalized": "",
        "package": "gtk-traymanager",
        "partial": "Tray Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#t:TrayManager",
      "description": {
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#TrayManager",
        "fct-type": "data",
        "title": "TrayManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "TrayManager",
        "normalized": "",
        "package": "gtk-traymanager",
        "partial": "Tray Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#t:TrayManagerChild",
      "description": {
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#TrayManagerChild",
        "fct-type": "type",
        "title": "TrayManagerChild"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "TrayManagerChild",
        "normalized": "",
        "package": "gtk-traymanager",
        "partial": "Tray Manager Child",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#t:TrayManagerClass",
      "description": {
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "class",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#TrayManagerClass",
        "fct-type": "class",
        "title": "TrayManagerClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "TrayManagerClass",
        "normalized": "",
        "package": "gtk-traymanager",
        "partial": "Tray Manager Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:castToTrayManager",
      "description": {
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "o -\u003e TrayManager",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#castToTrayManager",
        "fct-type": "function",
        "title": "castToTrayManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "castToTrayManager",
        "normalized": "a-\u003eTrayManager",
        "package": "gtk-traymanager",
        "partial": "To Tray Manager",
        "signature": "o-\u003eTrayManager"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:gTypeTrayManager",
      "description": {
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "GType",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#gTypeTrayManager",
        "fct-type": "function",
        "title": "gTypeTrayManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "gTypeTrayManager",
        "normalized": "",
        "package": "gtk-traymanager",
        "partial": "Type Tray Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:toTrayManager",
      "description": {
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "o -\u003e TrayManager",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#toTrayManager",
        "fct-type": "function",
        "title": "toTrayManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "toTrayManager",
        "normalized": "a-\u003eTrayManager",
        "package": "gtk-traymanager",
        "partial": "Tray Manager",
        "signature": "o-\u003eTrayManager"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayIconAdded",
      "description": {
        "fct-descr": "\u003cp\u003eThe signal emitted when a new tray icon is added.  These are\n delivered even for systray icons that already exist when the tray\n manager is created.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "Signal self (Widget -\u003e IO ())",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayIconAdded",
        "fct-type": "function",
        "title": "trayIconAdded"
      },
      "index": {
        "description": "The signal emitted when new tray icon is added These are delivered even for systray icons that already exist when the tray manager is created",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "trayIconAdded",
        "normalized": "Signal a(Widget-\u003eIO())",
        "package": "gtk-traymanager",
        "partial": "Icon Added",
        "signature": "Signal self(Widget-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayIconRemoved",
      "description": {
        "fct-descr": "\u003cp\u003eThis signal is emitted when a tray icon is removed by its parent\n application.  No action is really necessary here (the icon is\n removed without any intervention).  You could do something here if\n you wanted, though.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "Signal self (Widget -\u003e IO ())",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayIconRemoved",
        "fct-type": "function",
        "title": "trayIconRemoved"
      },
      "index": {
        "description": "This signal is emitted when tray icon is removed by its parent application No action is really necessary here the icon is removed without any intervention You could do something here if you wanted though",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "trayIconRemoved",
        "normalized": "Signal a(Widget-\u003eIO())",
        "package": "gtk-traymanager",
        "partial": "Icon Removed",
        "signature": "Signal self(Widget-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayLostSelection",
      "description": {
        "fct-descr": "\u003cp\u003e??\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "Signal self (IO ())",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayLostSelection",
        "fct-type": "function",
        "title": "trayLostSelection"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "trayLostSelection",
        "normalized": "Signal a(IO())",
        "package": "gtk-traymanager",
        "partial": "Lost Selection",
        "signature": "Signal self(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayManagerCheckRunning",
      "description": {
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "Screen -\u003e IO Bool",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayManagerCheckRunning",
        "fct-type": "function",
        "title": "trayManagerCheckRunning"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "trayManagerCheckRunning",
        "normalized": "Screen-\u003eIO Bool",
        "package": "gtk-traymanager",
        "partial": "Manager Check Running",
        "signature": "Screen-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayManagerGetChildTitle",
      "description": {
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "TrayManager -\u003e TrayManagerChild -\u003e IO String",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayManagerGetChildTitle",
        "fct-type": "function",
        "title": "trayManagerGetChildTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "trayManagerGetChildTitle",
        "normalized": "TrayManager-\u003eTrayManagerChild-\u003eIO String",
        "package": "gtk-traymanager",
        "partial": "Manager Get Child Title",
        "signature": "TrayManager-\u003eTrayManagerChild-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayManagerManageScreen",
      "description": {
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "TrayManager -\u003e Screen -\u003e IO Bool",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayManagerManageScreen",
        "fct-type": "function",
        "title": "trayManagerManageScreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "trayManagerManageScreen",
        "normalized": "TrayManager-\u003eScreen-\u003eIO Bool",
        "package": "gtk-traymanager",
        "partial": "Manager Manage Screen",
        "signature": "TrayManager-\u003eScreen-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayManagerNew",
      "description": {
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "IO TrayManager",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayManagerNew",
        "fct-type": "function",
        "title": "trayManagerNew"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "trayManagerNew",
        "normalized": "",
        "package": "gtk-traymanager",
        "partial": "Manager New",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayMessageCanceled",
      "description": {
        "fct-descr": "\u003cp\u003eSimilarly, the applciation can send this to cancel a previous\n persistent message.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "Signal self (Widget -\u003e Int64 -\u003e IO ())",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayMessageCanceled",
        "fct-type": "function",
        "title": "trayMessageCanceled"
      },
      "index": {
        "description": "Similarly the applciation can send this to cancel previous persistent message",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "trayMessageCanceled",
        "normalized": "Signal a(Widget-\u003eInt-\u003eIO())",
        "package": "gtk-traymanager",
        "partial": "Message Canceled",
        "signature": "Signal self(Widget-\u003eInt-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtk-traymanager/docs/Graphics-UI-Gtk-Misc-TrayManager.html#v:trayMessageSent",
      "description": {
        "fct-descr": "\u003cp\u003eThis signal is emitted when the application that displayed an\n icon wants a semi-persistent notification displayed for its icon.\n The standard doesn't seem to require that these be honored.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Gtk.Misc.TrayManager",
        "fct-package": "gtk-traymanager",
        "fct-signature": "Signal self (Widget -\u003e String -\u003e Int64 -\u003e Int64 -\u003e IO ())",
        "fct-source": "src/Graphics-UI-Gtk-Misc-TrayManager.html#trayMessageSent",
        "fct-type": "function",
        "title": "trayMessageSent"
      },
      "index": {
        "description": "This signal is emitted when the application that displayed an icon wants semi-persistent notification displayed for its icon The standard doesn seem to require that these be honored",
        "hierarchy": "Graphics UI Gtk Misc TrayManager",
        "module": "Graphics.UI.Gtk.Misc.TrayManager",
        "name": "trayMessageSent",
        "normalized": "Signal a(Widget-\u003eString-\u003eInt-\u003eInt-\u003eIO())",
        "package": "gtk-traymanager",
        "partial": "Message Sent",
        "signature": "Signal self(Widget-\u003eString-\u003eInt-\u003eInt-\u003eIO())"
      }
    }
  }
]