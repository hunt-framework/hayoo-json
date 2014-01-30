[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/glade/docs/Graphics-UI-Gtk-Glade.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibglade facilitates loading of XML specifications of whole widget trees\n that have been interactively designed with the GUI builder Glade. The\n present module exports operations for manipulating \u003ccode\u003e\u003ca\u003eGladeXML\u003c/a\u003e\u003c/code\u003e objects.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This binding does not support Libglade functionality that is exclusively\n meant for extending Libglade with new widgets. Like new widgets, such\n functionality is currently expected to be implemented in C.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Graphics.UI.Gtk.Glade",
        "fct-package": "glade",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Gtk-Glade.html",
        "fct-type": "module",
        "title": "Glade"
      },
      "index": {
        "description": "Libglade facilitates loading of XML specifications of whole widget trees that have been interactively designed with the GUI builder Glade The present module exports operations for manipulating GladeXML objects This binding does not support Libglade functionality that is exclusively meant for extending Libglade with new widgets Like new widgets such functionality is currently expected to be implemented in",
        "hierarchy": "Graphics UI Gtk Glade",
        "module": "Graphics.UI.Gtk.Glade",
        "name": "Glade",
        "normalized": "",
        "package": "glade",
        "partial": "Glade",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/glade/docs/Graphics-UI-Gtk-Glade.html#t:GladeXML",
      "description": {
        "fct-module": "Graphics.UI.Gtk.Glade",
        "fct-package": "glade",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Gtk-Glade-Types.html#GladeXML",
        "fct-type": "data",
        "title": "GladeXML"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Glade",
        "module": "Graphics.UI.Gtk.Glade",
        "name": "GladeXML",
        "normalized": "",
        "package": "glade",
        "partial": "Glade XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/glade/docs/Graphics-UI-Gtk-Glade.html#t:GladeXMLClass",
      "description": {
        "fct-module": "Graphics.UI.Gtk.Glade",
        "fct-package": "glade",
        "fct-signature": "class",
        "fct-source": "src/Graphics-UI-Gtk-Glade-Types.html#GladeXMLClass",
        "fct-type": "class",
        "title": "GladeXMLClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Gtk Glade",
        "module": "Graphics.UI.Gtk.Glade",
        "name": "GladeXMLClass",
        "normalized": "",
        "package": "glade",
        "partial": "Glade XMLClass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/glade/docs/Graphics-UI-Gtk-Glade.html#v:xmlGetWidget",
      "description": {
        "fct-descr": "\u003cp\u003eGet the widget that has the given name in\n the interface description. If the named widget cannot be found\n or is of the wrong type the result is an error.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Gtk.Glade",
        "fct-package": "glade",
        "fct-signature": "GladeXML-\u003e (GObject -\u003e widget)-\u003e String-\u003e IO widget",
        "fct-type": "function",
        "title": "xmlGetWidget"
      },
      "index": {
        "description": "Get the widget that has the given name in the interface description If the named widget cannot be found or is of the wrong type the result is an error",
        "hierarchy": "Graphics UI Gtk Glade",
        "module": "Graphics.UI.Gtk.Glade",
        "name": "xmlGetWidget",
        "normalized": "GladeXML-\u003e(GObject-\u003ea)-\u003eString-\u003eIO a",
        "package": "glade",
        "partial": "Get Widget",
        "signature": "GladeXML-\u003e(GObject-\u003ewidget)-\u003eString-\u003eIO widget"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/glade/docs/Graphics-UI-Gtk-Glade.html#v:xmlGetWidgetRaw",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003exmlGetWidget\u003c/a\u003e\u003c/code\u003e but it does not do any casting and if the named\n widget is not found then the result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e rather than an error.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Gtk.Glade",
        "fct-package": "glade",
        "fct-signature": "GladeXML -\u003e String -\u003e IO (Maybe Widget)",
        "fct-source": "src/Graphics-UI-Gtk-Glade.html#xmlGetWidgetRaw",
        "fct-type": "function",
        "title": "xmlGetWidgetRaw"
      },
      "index": {
        "description": "Like xmlGetWidget but it does not do any casting and if the named widget is not found then the result is Nothing rather than an error",
        "hierarchy": "Graphics UI Gtk Glade",
        "module": "Graphics.UI.Gtk.Glade",
        "name": "xmlGetWidgetRaw",
        "normalized": "GladeXML-\u003eString-\u003eIO(Maybe Widget)",
        "package": "glade",
        "partial": "Get Widget Raw",
        "signature": "GladeXML-\u003eString-\u003eIO(Maybe Widget)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/glade/docs/Graphics-UI-Gtk-Glade.html#v:xmlNew",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new XML object (and the corresponding widgets) from the given\n XML file.\n\u003c/p\u003e\u003cp\u003eThis corresponds to \u003ccode\u003e\u003ca\u003exmlNewWithRootAndDomain\u003c/a\u003e\u003c/code\u003e, but without the ability\n to specify a root widget or translation domain.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Gtk.Glade",
        "fct-package": "glade",
        "fct-signature": "FilePath -\u003e IO (Maybe GladeXML)",
        "fct-source": "src/Graphics-UI-Gtk-Glade.html#xmlNew",
        "fct-type": "function",
        "title": "xmlNew"
      },
      "index": {
        "description": "Create new XML object and the corresponding widgets from the given XML file This corresponds to xmlNewWithRootAndDomain but without the ability to specify root widget or translation domain",
        "hierarchy": "Graphics UI Gtk Glade",
        "module": "Graphics.UI.Gtk.Glade",
        "name": "xmlNew",
        "normalized": "FilePath-\u003eIO(Maybe GladeXML)",
        "package": "glade",
        "partial": "New",
        "signature": "FilePath-\u003eIO(Maybe GladeXML)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/glade/docs/Graphics-UI-Gtk-Glade.html#v:xmlNewWithRootAndDomain",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new GladeXML object (and the corresponding widgets) from the\n given XML file.\n\u003c/p\u003e\u003cp\u003eOptionally it will only build the interface from the widget\n node \u003ccode\u003eroot\u003c/code\u003e (if it is not \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e). This feature is useful if you only\n want to build say a toolbar or menu from the XML file, but not the window\n it is embedded in.\n\u003c/p\u003e\u003cp\u003eNote also that the XML parse tree is cached to speed up creating another\n \u003ccode\u003e\u003ca\u003eGladeXML\u003c/a\u003e\u003c/code\u003e object for the same file.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Gtk.Glade",
        "fct-package": "glade",
        "fct-signature": "FilePath-\u003e Maybe String-\u003e Maybe String-\u003e IO (Maybe GladeXML)",
        "fct-type": "function",
        "title": "xmlNewWithRootAndDomain"
      },
      "index": {
        "description": "Create new GladeXML object and the corresponding widgets from the given XML file Optionally it will only build the interface from the widget node root if it is not Nothing This feature is useful if you only want to build say toolbar or menu from the XML file but not the window it is embedded in Note also that the XML parse tree is cached to speed up creating another GladeXML object for the same file",
        "hierarchy": "Graphics UI Gtk Glade",
        "module": "Graphics.UI.Gtk.Glade",
        "name": "xmlNewWithRootAndDomain",
        "normalized": "FilePath-\u003eMaybe String-\u003eMaybe String-\u003eIO(Maybe GladeXML)",
        "package": "glade",
        "partial": "New With Root And Domain",
        "signature": "FilePath-\u003eMaybe String-\u003eMaybe String-\u003eIO(Maybe GladeXML)"
      }
    }
  }
]