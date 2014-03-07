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
        "word": "gtkimageview"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "AnimView",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-AnimView.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView AnimView",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "AnimView",
          "package": "gtkimageview",
          "partial": "Anim View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-AnimView.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "AnimView",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#AnimView",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView AnimView",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "AnimView",
          "package": "gtkimageview",
          "partial": "Anim View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-AnimView.html#t:AnimView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "AnimViewClass",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#AnimViewClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView AnimView",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "AnimViewClass",
          "package": "gtkimageview",
          "partial": "Anim View Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-AnimView.html#t:AnimViewClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eAnimView\u003c/a\u003e\u003c/code\u003e with default values. The default values are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e anim : \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n * \u003ccode\u003eisPlaying\u003c/code\u003e : \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReturns the current animation of the view.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "animViewGetAnim",
          "package": "gtkimageview",
          "signature": "view-\u003e IO PixbufAnimation",
          "type": "function"
        },
        "index": {
          "description": "Creates new AnimView with default values The default values are anim Nothing isPlaying False Returns the current animation of the view",
          "hierarchy": "Graphics UI Gtk ImageView AnimView",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "animViewGetAnim",
          "normalized": "a-\u003eIO PixbufAnimation",
          "package": "gtkimageview",
          "partial": "View Get Anim",
          "signature": "view-\u003eIO PixbufAnimation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-AnimView.html#v:animViewGetAnim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the animation is playing or not. If there is no current animation, this method will\n always returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "animViewGetIsPlaying",
          "package": "gtkimageview",
          "signature": "view-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the animation is playing or not If there is no current animation this method will always returns False",
          "hierarchy": "Graphics UI Gtk ImageView AnimView",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "animViewGetIsPlaying",
          "normalized": "a-\u003eIO Bool",
          "package": "gtkimageview",
          "partial": "View Get Is Playing",
          "signature": "view-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-AnimView.html#v:animViewGetIsPlaying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "animViewNew",
          "package": "gtkimageview",
          "signature": "IO AnimView",
          "source": "src/Graphics-UI-Gtk-ImageView-AnimView.html#animViewNew",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView AnimView",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "animViewNew",
          "package": "gtkimageview",
          "partial": "View New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-AnimView.html#v:animViewNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the pixbuf animation to play, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to not play any animation.\n\u003c/p\u003e\u003cp\u003eIf the animation is a static image or only has one frame, then the static image will be displayed\n instead. If more frames are loaded into the animation, then \u003ccode\u003e\u003ca\u003eAnimView\u003c/a\u003e\u003c/code\u003e will automatically animate\n to those frames.\n\u003c/p\u003e\u003cp\u003eThe effect of this method is analoguous to \u003ccode\u003eimageViewSetPixbuf\u003c/code\u003e. Fit mode is reset to\n \u003ccode\u003eFitSizeIfLarger\u003c/code\u003e so that the whole area of the animation fits in the view. Three signals are\n emitted, first the \u003ccode\u003e\u003ca\u003eImageView\u003c/a\u003e\u003c/code\u003e will emit \u003ccode\u003ezoomChanged\u003c/code\u003e and then \u003ccode\u003epixbufChanged\u003c/code\u003e, second,\n \u003ccode\u003e\u003ca\u003eAnimView\u003c/a\u003e\u003c/code\u003e itself will emit \u003ccode\u003eanimChanged\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default pixbuf animation is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "animViewSetAnim",
          "package": "gtkimageview",
          "signature": "view-\u003e Maybe PixbufAnimation-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the pixbuf animation to play or Nothing to not play any animation If the animation is static image or only has one frame then the static image will be displayed instead If more frames are loaded into the animation then AnimView will automatically animate to those frames The effect of this method is analoguous to imageViewSetPixbuf Fit mode is reset to FitSizeIfLarger so that the whole area of the animation fits in the view Three signals are emitted first the ImageView will emit zoomChanged and then pixbufChanged second AnimView itself will emit animChanged The default pixbuf animation is Nothing",
          "hierarchy": "Graphics UI Gtk ImageView AnimView",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "animViewSetAnim",
          "normalized": "a-\u003eMaybe PixbufAnimation-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Set Anim",
          "signature": "view-\u003eMaybe PixbufAnimation-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-AnimView.html#v:animViewSetAnim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets whether the animation should play or not. If there is no current animation this method does not\n have any effect.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "animViewSetIsPlaying",
          "package": "gtkimageview",
          "signature": "view-\u003e Bool-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets whether the animation should play or not If there is no current animation this method does not have any effect",
          "hierarchy": "Graphics UI Gtk ImageView AnimView",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "animViewSetIsPlaying",
          "normalized": "a-\u003eBool-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Set Is Playing",
          "signature": "view-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-AnimView.html#v:animViewSetIsPlaying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSteps the animation one frame forward. If the animation is playing it will be stopped. Will it wrap\n around if the animation is at its last frame?\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "animViewStep",
          "package": "gtkimageview",
          "signature": "view -\u003e IO ()",
          "source": "src/Graphics-UI-Gtk-ImageView-AnimView.html#animViewStep",
          "type": "function"
        },
        "index": {
          "description": "Steps the animation one frame forward If the animation is playing it will be stopped Will it wrap around if the animation is at its last frame",
          "hierarchy": "Graphics UI Gtk ImageView AnimView",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "animViewStep",
          "normalized": "a-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Step",
          "signature": "view-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-AnimView.html#v:animViewStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSteps the animation one frame forward. If the animation is playing it will first be stopped. \u003ccode\u003e\u003ca\u003estep\u003c/a\u003e\u003c/code\u003e\n is a keybinding signal emitted when GDK_j is pressed on the widget and should not be used by clients\n of this library.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "step",
          "package": "gtkimageview",
          "signature": "Signal view (IO ())",
          "source": "src/Graphics-UI-Gtk-ImageView-AnimView.html#step",
          "type": "function"
        },
        "index": {
          "description": "Steps the animation one frame forward If the animation is playing it will first be stopped step is keybinding signal emitted when GDK is pressed on the widget and should not be used by clients of this library",
          "hierarchy": "Graphics UI Gtk ImageView AnimView",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "step",
          "normalized": "Signal a(IO())",
          "package": "gtkimageview",
          "signature": "Signal view(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-AnimView.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops the animation if it was playing or resumes it, if it was playing. \u003ccode\u003e\u003ca\u003etoggleRunning\u003c/a\u003e\u003c/code\u003e is a\n keybinding signal emitted when GDK_p is pressed on the widget and should not be used by clients of\n this library.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "toggleRunning",
          "package": "gtkimageview",
          "signature": "Signal view (IO ())",
          "source": "src/Graphics-UI-Gtk-ImageView-AnimView.html#toggleRunning",
          "type": "function"
        },
        "index": {
          "description": "Stops the animation if it was playing or resumes it if it was playing toggleRunning is keybinding signal emitted when GDK is pressed on the widget and should not be used by clients of this library",
          "hierarchy": "Graphics UI Gtk ImageView AnimView",
          "module": "Graphics.UI.Gtk.ImageView.AnimView",
          "name": "toggleRunning",
          "normalized": "Signal a(IO())",
          "package": "gtkimageview",
          "partial": "Running",
          "signature": "Signal view(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-AnimView.html#v:toggleRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "Enums",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "Enums",
          "package": "gtkimageview",
          "partial": "Enums",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotType",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#HotspotType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotType",
          "package": "gtkimageview",
          "partial": "Hotspot Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#t:HotspotType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "ImageTransp",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#ImageTransp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "ImageTransp",
          "package": "gtkimageview",
          "partial": "Image Transp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#t:ImageTransp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotInside",
          "package": "gtkimageview",
          "signature": "HotspotInside",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#HotspotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotInside",
          "package": "gtkimageview",
          "partial": "Hotspot Inside",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:HotspotInside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotLast",
          "package": "gtkimageview",
          "signature": "HotspotLast",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#HotspotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotLast",
          "package": "gtkimageview",
          "partial": "Hotspot Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:HotspotLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotOutside",
          "package": "gtkimageview",
          "signature": "HotspotOutside",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#HotspotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotOutside",
          "package": "gtkimageview",
          "partial": "Hotspot Outside",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:HotspotOutside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeEast",
          "package": "gtkimageview",
          "signature": "HotspotResizeEast",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#HotspotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeEast",
          "package": "gtkimageview",
          "partial": "Hotspot Resize East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:HotspotResizeEast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeNorth",
          "package": "gtkimageview",
          "signature": "HotspotResizeNorth",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#HotspotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeNorth",
          "package": "gtkimageview",
          "partial": "Hotspot Resize North",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:HotspotResizeNorth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeNorthEast",
          "package": "gtkimageview",
          "signature": "HotspotResizeNorthEast",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#HotspotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeNorthEast",
          "package": "gtkimageview",
          "partial": "Hotspot Resize North East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:HotspotResizeNorthEast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeNorthWest",
          "package": "gtkimageview",
          "signature": "HotspotResizeNorthWest",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#HotspotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeNorthWest",
          "package": "gtkimageview",
          "partial": "Hotspot Resize North West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:HotspotResizeNorthWest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeSouth",
          "package": "gtkimageview",
          "signature": "HotspotResizeSouth",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#HotspotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeSouth",
          "package": "gtkimageview",
          "partial": "Hotspot Resize South",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:HotspotResizeSouth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeSouthEast",
          "package": "gtkimageview",
          "signature": "HotspotResizeSouthEast",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#HotspotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeSouthEast",
          "package": "gtkimageview",
          "partial": "Hotspot Resize South East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:HotspotResizeSouthEast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeSouthWest",
          "package": "gtkimageview",
          "signature": "HotspotResizeSouthWest",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#HotspotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeSouthWest",
          "package": "gtkimageview",
          "partial": "Hotspot Resize South West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:HotspotResizeSouthWest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeWest",
          "package": "gtkimageview",
          "signature": "HotspotResizeWest",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#HotspotType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "HotspotResizeWest",
          "package": "gtkimageview",
          "partial": "Hotspot Resize West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:HotspotResizeWest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "ImageTranspBackground",
          "package": "gtkimageview",
          "signature": "ImageTranspBackground",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#ImageTransp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "ImageTranspBackground",
          "package": "gtkimageview",
          "partial": "Image Transp Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:ImageTranspBackground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "ImageTranspColor",
          "package": "gtkimageview",
          "signature": "ImageTranspColor",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#ImageTransp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "ImageTranspColor",
          "package": "gtkimageview",
          "partial": "Image Transp Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:ImageTranspColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "ImageTranspGrid",
          "package": "gtkimageview",
          "signature": "ImageTranspGrid",
          "source": "src/Graphics-UI-Gtk-ImageView-Enums.html#ImageTransp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Enums",
          "module": "Graphics.UI.Gtk.ImageView.Enums",
          "name": "ImageTranspGrid",
          "package": "gtkimageview",
          "partial": "Image Transp Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Enums.html#v:ImageTranspGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.IImageTool",
          "name": "IImageTool",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-IImageTool.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView IImageTool",
          "module": "Graphics.UI.Gtk.ImageView.IImageTool",
          "name": "IImageTool",
          "package": "gtkimageview",
          "partial": "IImage Tool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-IImageTool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.IImageTool",
          "name": "IImageTool",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#IImageTool",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView IImageTool",
          "module": "Graphics.UI.Gtk.ImageView.IImageTool",
          "name": "IImageTool",
          "package": "gtkimageview",
          "partial": "IImage Tool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-IImageTool.html#t:IImageTool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.IImageTool",
          "name": "IImageToolClass",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#IImageToolClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView IImageTool",
          "module": "Graphics.UI.Gtk.ImageView.IImageTool",
          "name": "IImageToolClass",
          "package": "gtkimageview",
          "partial": "IImage Tool Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-IImageTool.html#t:IImageToolClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndiate to the tool that either a part of, or the whole pixbuf that the image view shows has\n changed. This method is called by the view whenever its pixbuf or its tool changes. That is, when\n any of the following methods are used:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eimageViewSetPixbuf\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the \u003ccode\u003eresetFit\u003c/code\u003e parameter is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, it means that a new pixbuf has been loaded into the view. rect\n is a rectangle in image space coordinates that indicates which rectangular region of the pixbufs\n pixels that is modified. If rect is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, then all of the pixbuf has changed. See also\n \u003ccode\u003epixbufChanged\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.IImageTool",
          "name": "iimageToolPixbufChanged",
          "package": "gtkimageview",
          "signature": "tool-\u003e Bool-\u003e Maybe Rectangle-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Indiate to the tool that either part of or the whole pixbuf that the image view shows has changed This method is called by the view whenever its pixbuf or its tool changes That is when any of the following methods are used imageViewSetPixbuf If the resetFit parameter is True it means that new pixbuf has been loaded into the view rect is rectangle in image space coordinates that indicates which rectangular region of the pixbufs pixels that is modified If rect is Nothing then all of the pixbuf has changed See also pixbufChanged",
          "hierarchy": "Graphics UI Gtk ImageView IImageTool",
          "module": "Graphics.UI.Gtk.ImageView.IImageTool",
          "name": "iimageToolPixbufChanged",
          "normalized": "a-\u003eBool-\u003eMaybe Rectangle-\u003eIO()",
          "package": "gtkimageview",
          "partial": "Tool Pixbuf Changed",
          "signature": "tool-\u003eBool-\u003eMaybe Rectangle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-IImageTool.html#v:iimageToolPixbufChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "ImageNav",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageNav.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageNav",
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "ImageNav",
          "package": "gtkimageview",
          "partial": "Image Nav",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageNav.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "ImageNav",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#ImageNav",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageNav",
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "ImageNav",
          "package": "gtkimageview",
          "partial": "Image Nav",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageNav.html#t:ImageNav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "ImageNavClass",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#ImageNavClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageNav",
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "ImageNavClass",
          "package": "gtkimageview",
          "partial": "Image Nav Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageNav.html#t:ImageNavClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the downscaled pixbuf of the views pixbuf that this \u003ccode\u003e\u003ca\u003eImageNav\u003c/a\u003e\u003c/code\u003e shows, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if that\n pixbuf has not been created yet.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "imageNavGetPixbuf",
          "package": "gtkimageview",
          "signature": "nav-\u003e IO (Maybe Pixbuf)",
          "type": "function"
        },
        "index": {
          "description": "Returns the downscaled pixbuf of the views pixbuf that this ImageNav shows or Nothing if that pixbuf has not been created yet",
          "hierarchy": "Graphics UI Gtk ImageView ImageNav",
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "imageNavGetPixbuf",
          "normalized": "a-\u003eIO(Maybe Pixbuf)",
          "package": "gtkimageview",
          "partial": "Nav Get Pixbuf",
          "signature": "nav-\u003eIO(Maybe Pixbuf)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageNav.html#v:imageNavGetPixbuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "imageNavGrab",
          "package": "gtkimageview",
          "signature": "nav -\u003e IO ()",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageNav.html#imageNavGrab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageNav",
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "imageNavGrab",
          "normalized": "a-\u003eIO()",
          "package": "gtkimageview",
          "partial": "Nav Grab",
          "signature": "nav-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageNav.html#v:imageNavGrab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eImageNav\u003c/a\u003e\u003c/code\u003e for showing thumbnails of the view.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "imageNavNew",
          "package": "gtkimageview",
          "signature": "view -\u003e IO ImageNav",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageNav.html#imageNavNew",
          "type": "function"
        },
        "index": {
          "description": "Creates new ImageNav for showing thumbnails of the view",
          "hierarchy": "Graphics UI Gtk ImageView ImageNav",
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "imageNavNew",
          "normalized": "a-\u003eIO ImageNav",
          "package": "gtkimageview",
          "partial": "Nav New",
          "signature": "view-\u003eIO ImageNav",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageNav.html#v:imageNavNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "imageNavRelease",
          "package": "gtkimageview",
          "signature": "nav -\u003e IO ()",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageNav.html#imageNavRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageNav",
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "imageNavRelease",
          "normalized": "a-\u003eIO()",
          "package": "gtkimageview",
          "partial": "Nav Release",
          "signature": "nav-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageNav.html#v:imageNavRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the \u003ccode\u003e\u003ca\u003eImageNav\u003c/a\u003e\u003c/code\u003e centered around the point (\u003ccode\u003ecenterX\u003c/code\u003e, \u003ccode\u003ecenterY\u003c/code\u003e) and grab mouse and keyboard\n events. The grab continues until a button release event is received which causes the widget to hide.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "imageNavShowAndGrab",
          "package": "gtkimageview",
          "signature": "nav-\u003e Int-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Show the ImageNav centered around the point centerX centerY and grab mouse and keyboard events The grab continues until button release event is received which causes the widget to hide",
          "hierarchy": "Graphics UI Gtk ImageView ImageNav",
          "module": "Graphics.UI.Gtk.ImageView.ImageNav",
          "name": "imageNavShowAndGrab",
          "normalized": "a-\u003eInt-\u003eInt-\u003eIO()",
          "package": "gtkimageview",
          "partial": "Nav Show And Grab",
          "signature": "nav-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageNav.html#v:imageNavShowAndGrab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageScrollWin",
          "name": "ImageScrollWin",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageScrollWin.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageScrollWin",
          "module": "Graphics.UI.Gtk.ImageView.ImageScrollWin",
          "name": "ImageScrollWin",
          "package": "gtkimageview",
          "partial": "Image Scroll Win",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageScrollWin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageScrollWin",
          "name": "ImageScrollWin",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#ImageScrollWin",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageScrollWin",
          "module": "Graphics.UI.Gtk.ImageView.ImageScrollWin",
          "name": "ImageScrollWin",
          "package": "gtkimageview",
          "partial": "Image Scroll Win",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageScrollWin.html#t:ImageScrollWin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageScrollWin",
          "name": "ImageScrollWinClass",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#ImageScrollWinClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageScrollWin",
          "module": "Graphics.UI.Gtk.ImageView.ImageScrollWin",
          "name": "ImageScrollWinClass",
          "package": "gtkimageview",
          "partial": "Image Scroll Win Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageScrollWin.html#t:ImageScrollWinClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eImageScrollWin\u003c/a\u003e\u003c/code\u003e containing the \u003ccode\u003e\u003ca\u003eImageView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe widget is built using four subwidgets arranged inside a \u003ccode\u003e\u003ca\u003eTable\u003c/a\u003e\u003c/code\u003e with two columns and two\n rows. Two scrollbars, one navigator button (the decorations) and one \u003ccode\u003e\u003ca\u003eImageView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen the \u003ccode\u003e\u003ca\u003eImageView\u003c/a\u003e\u003c/code\u003e fits inside the window, the decorations are hidden.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageScrollWin",
          "name": "imageScrollWinNew",
          "package": "gtkimageview",
          "signature": "view -\u003e IO ImageScrollWin",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageScrollWin.html#imageScrollWinNew",
          "type": "function"
        },
        "index": {
          "description": "Creates new ImageScrollWin containing the ImageView The widget is built using four subwidgets arranged inside Table with two columns and two rows Two scrollbars one navigator button the decorations and one ImageView When the ImageView fits inside the window the decorations are hidden",
          "hierarchy": "Graphics UI Gtk ImageView ImageScrollWin",
          "module": "Graphics.UI.Gtk.ImageView.ImageScrollWin",
          "name": "imageScrollWinNew",
          "normalized": "a-\u003eIO ImageScrollWin",
          "package": "gtkimageview",
          "partial": "Scroll Win New",
          "signature": "view-\u003eIO ImageScrollWin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageScrollWin.html#v:imageScrollWinNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageToolDragger",
          "name": "ImageToolDragger",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageToolDragger.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageToolDragger",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolDragger",
          "name": "ImageToolDragger",
          "package": "gtkimageview",
          "partial": "Image Tool Dragger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageToolDragger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageToolDragger",
          "name": "ImageToolDragger",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#ImageToolDragger",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageToolDragger",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolDragger",
          "name": "ImageToolDragger",
          "package": "gtkimageview",
          "partial": "Image Tool Dragger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageToolDragger.html#t:ImageToolDragger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageToolDragger",
          "name": "ImageToolDraggerClass",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#ImageToolDraggerClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageToolDragger",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolDragger",
          "name": "ImageToolDraggerClass",
          "package": "gtkimageview",
          "partial": "Image Tool Dragger Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageToolDragger.html#t:ImageToolDraggerClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "ImageToolSelector",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageToolSelector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageToolSelector",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "ImageToolSelector",
          "package": "gtkimageview",
          "partial": "Image Tool Selector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageToolSelector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "ImageToolSelector",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#ImageToolSelector",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageToolSelector",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "ImageToolSelector",
          "package": "gtkimageview",
          "partial": "Image Tool Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageToolSelector.html#t:ImageToolSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "ImageToolSelectorClass",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#ImageToolSelectorClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageToolSelector",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "ImageToolSelectorClass",
          "package": "gtkimageview",
          "partial": "Image Tool Selector Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageToolSelector.html#t:ImageToolSelectorClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFills in rect with the current selection rectangle. If either the width or the height of rect is\n zero, then nothing is selected and the selection should be considered inactive. See\n \u003ccode\u003e\u003ca\u003eselectionChanged\u003c/a\u003e\u003c/code\u003e for an example.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "imageToolSelectorGetSelection",
          "package": "gtkimageview",
          "signature": "selector -\u003e IO Rectangle",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageToolSelector.html#imageToolSelectorGetSelection",
          "type": "function"
        },
        "index": {
          "description": "Fills in rect with the current selection rectangle If either the width or the height of rect is zero then nothing is selected and the selection should be considered inactive See selectionChanged for an example",
          "hierarchy": "Graphics UI Gtk ImageView ImageToolSelector",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "imageToolSelectorGetSelection",
          "normalized": "a-\u003eIO Rectangle",
          "package": "gtkimageview",
          "partial": "Tool Selector Get Selection",
          "signature": "selector-\u003eIO Rectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageToolSelector.html#v:imageToolSelectorGetSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new selector tool for the specified view with default values. The default values are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e selection : (0, 0) - [0, 0]\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "imageToolSelectorNew",
          "package": "gtkimageview",
          "signature": "view -\u003e IO ImageToolSelector",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageToolSelector.html#imageToolSelectorNew",
          "type": "function"
        },
        "index": {
          "description": "Creates new selector tool for the specified view with default values The default values are selection",
          "hierarchy": "Graphics UI Gtk ImageView ImageToolSelector",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "imageToolSelectorNew",
          "normalized": "a-\u003eIO ImageToolSelector",
          "package": "gtkimageview",
          "partial": "Tool Selector New",
          "signature": "view-\u003eIO ImageToolSelector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageToolSelector.html#v:imageToolSelectorNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the selection rectangle for the tool. Setting this attribute will cause the widget to\n immediately repaint itself if its view is realized.\n\u003c/p\u003e\u003cp\u003eThis method does nothing under the following circumstances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the views pixbuf is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n * If rect is wider or taller than the size of the pixbuf\n * If rect equals the current selection rectangle.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the selection falls outside the pixbufs area, its position is moved so that it is within the\n pixbuf.\n\u003c/p\u003e\u003cp\u003eCalling this method causes the \u003ccode\u003e\u003ca\u003eselectionChanged\u003c/a\u003e\u003c/code\u003e signal to be emitted.\n\u003c/p\u003e\u003cp\u003eThe default selection is (0,0) - [0,0].\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "imageToolSelectorSetSelection",
          "package": "gtkimageview",
          "signature": "selector -\u003e Rectangle -\u003e IO ()",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageToolSelector.html#imageToolSelectorSetSelection",
          "type": "function"
        },
        "index": {
          "description": "Sets the selection rectangle for the tool Setting this attribute will cause the widget to immediately repaint itself if its view is realized This method does nothing under the following circumstances If the views pixbuf is Nothing If rect is wider or taller than the size of the pixbuf If rect equals the current selection rectangle If the selection falls outside the pixbufs area its position is moved so that it is within the pixbuf Calling this method causes the selectionChanged signal to be emitted The default selection is",
          "hierarchy": "Graphics UI Gtk ImageView ImageToolSelector",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "imageToolSelectorSetSelection",
          "normalized": "a-\u003eRectangle-\u003eIO()",
          "package": "gtkimageview",
          "partial": "Tool Selector Set Selection",
          "signature": "selector-\u003eRectangle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageToolSelector.html#v:imageToolSelectorSetSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eselectionChanged\u003c/a\u003e\u003c/code\u003e signal is emitted when the selection rectangle on the selector is moved or\n resized. It is inteded to be used by applications that wants to print status information.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "selectionChanged",
          "package": "gtkimageview",
          "signature": "Signal selector (IO ())",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageToolSelector.html#selectionChanged",
          "type": "function"
        },
        "index": {
          "description": "The selectionChanged signal is emitted when the selection rectangle on the selector is moved or resized It is inteded to be used by applications that wants to print status information",
          "hierarchy": "Graphics UI Gtk ImageView ImageToolSelector",
          "module": "Graphics.UI.Gtk.ImageView.ImageToolSelector",
          "name": "selectionChanged",
          "normalized": "Signal a(IO())",
          "package": "gtkimageview",
          "partial": "Changed",
          "signature": "Signal selector(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageToolSelector.html#v:selectionChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "ImageView",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "ImageView",
          "package": "gtkimageview",
          "partial": "Image View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "ImageView",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#ImageView",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "ImageView",
          "package": "gtkimageview",
          "partial": "Image View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#t:ImageView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "ImageViewClass",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Types.html#ImageViewClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "ImageViewClass",
          "package": "gtkimageview",
          "partial": "Image View Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#t:ImageViewClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark the pixels in the rectangle as damaged. That the pixels are damaged, means that they have been\n modified and that the view must redraw them to ensure that the visible part of the image corresponds\n to the pixels in that image. Calling this method emits the \u003ccode\u003e\u003ca\u003epixbufChanged\u003c/a\u003e\u003c/code\u003e signal.\n\u003c/p\u003e\u003cp\u003eThis method must be used when modifying the image data:\n\u003c/p\u003e\u003cp\u003e'imageViewDamagePixels (View, &(Gdkrectangle){20, 20, 60, 60})';\n\u003c/p\u003e\u003cp\u003eIf the whole pixbuf has been modified then rect should be \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to indicate that a total update is\n needed.\n | See also \u003ccode\u003e\u003ca\u003eimageViewSetPixbuf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewDamagePixels",
          "package": "gtkimageview",
          "signature": "view-\u003e Maybe Rectangle-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Mark the pixels in the rectangle as damaged That the pixels are damaged means that they have been modified and that the view must redraw them to ensure that the visible part of the image corresponds to the pixels in that image Calling this method emits the pixbufChanged signal This method must be used when modifying the image data imageViewDamagePixels View Gdkrectangle If the whole pixbuf has been modified then rect should be Nothing to indicate that total update is needed See also imageViewSetPixbuf",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewDamagePixels",
          "normalized": "a-\u003eMaybe Rectangle-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Damage Pixels",
          "signature": "view-\u003eMaybe Rectangle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewDamagePixels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the view renders the widget on a black background or not.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetBlackBg",
          "package": "gtkimageview",
          "signature": "view-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the view renders the widget on black background or not",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetBlackBg",
          "normalized": "a-\u003eIO Bool",
          "package": "gtkimageview",
          "partial": "View Get Black Bg",
          "signature": "view-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewGetBlackBg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the two colors used to draw transparent parts of images with an alpha channel. Note that if\n the transp setting of the view is \u003ccode\u003e\u003ca\u003eImageTranspBackground\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eImageTranspColor\u003c/a\u003e\u003c/code\u003e, then both\n colors will be equal.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetCheckColors",
          "package": "gtkimageview",
          "signature": "view -\u003e IO (Int, Int)",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#imageViewGetCheckColors",
          "type": "function"
        },
        "index": {
          "description": "Reads the two colors used to draw transparent parts of images with an alpha channel Note that if the transp setting of the view is ImageTranspBackground or ImageTranspColor then both colors will be equal",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetCheckColors",
          "normalized": "a-\u003eIO(Int,Int)",
          "package": "gtkimageview",
          "partial": "View Get Check Colors",
          "signature": "view-\u003eIO(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewGetCheckColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the rectangle in the widget where the pixbuf is painted.\n\u003c/p\u003e\u003cp\u003eFor example, if the widgets allocated size is 100, 100 and the pixbufs size is 50, 50 and the zoom\n factor is 1.0, then the pixbuf will be drawn centered on the widget. rect will then be\n (25,25)-[50,50].\n\u003c/p\u003e\u003cp\u003eIf the view is not allocated, then the rectangle will be set to (0,0)-[0,0] and \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cp\u003eThis method is useful when converting from widget to image or zoom space coordinates.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetDrawRect",
          "package": "gtkimageview",
          "signature": "view -\u003e IO (Maybe Rectangle)",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#imageViewGetDrawRect",
          "type": "function"
        },
        "index": {
          "description": "Get the rectangle in the widget where the pixbuf is painted For example if the widgets allocated size is and the pixbufs size is and the zoom factor is then the pixbuf will be drawn centered on the widget rect will then be If the view is not allocated then the rectangle will be set to and True is returned This method is useful when converting from widget to image or zoom space coordinates",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetDrawRect",
          "normalized": "a-\u003eIO(Maybe Rectangle)",
          "package": "gtkimageview",
          "partial": "View Get Draw Rect",
          "signature": "view-\u003eIO(Maybe Rectangle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewGetDrawRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the fitting setting of the view.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetFitting",
          "package": "gtkimageview",
          "signature": "view-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns the fitting setting of the view",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetFitting",
          "normalized": "a-\u003eIO Bool",
          "package": "gtkimageview",
          "partial": "View Get Fitting",
          "signature": "view-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewGetFitting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current interpolation mode of the view.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetInterpolation",
          "package": "gtkimageview",
          "signature": "view -\u003e IO InterpType",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#imageViewGetInterpolation",
          "type": "function"
        },
        "index": {
          "description": "Returns the current interpolation mode of the view",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetInterpolation",
          "normalized": "a-\u003eIO InterpType",
          "package": "gtkimageview",
          "partial": "View Get Interpolation",
          "signature": "view-\u003eIO InterpType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewGetInterpolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the pixbuf this view shows.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetPixbuf",
          "package": "gtkimageview",
          "signature": "view-\u003e IO Pixbuf",
          "type": "function"
        },
        "index": {
          "description": "Returns the pixbuf this view shows",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetPixbuf",
          "normalized": "a-\u003eIO Pixbuf",
          "package": "gtkimageview",
          "partial": "View Get Pixbuf",
          "signature": "view-\u003eIO Pixbuf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewGetPixbuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether to show the mouse cursor when the mouse is over the widget or not.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetShowCursor",
          "package": "gtkimageview",
          "signature": "view-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether to show the mouse cursor when the mouse is over the widget or not",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetShowCursor",
          "normalized": "a-\u003eIO Bool",
          "package": "gtkimageview",
          "partial": "View Get Show Cursor",
          "signature": "view-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewGetShowCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether a one pixel frame is drawn around the pixbuf or not.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetShowFrame",
          "package": "gtkimageview",
          "signature": "view -\u003e IO Bool",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#imageViewGetShowFrame",
          "type": "function"
        },
        "index": {
          "description": "Returns whether one pixel frame is drawn around the pixbuf or not",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetShowFrame",
          "normalized": "a-\u003eIO Bool",
          "package": "gtkimageview",
          "partial": "View Get Show Frame",
          "signature": "view-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewGetShowFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the image tool \u003ccode\u003e\u003ca\u003eImageView\u003c/a\u003e\u003c/code\u003e uses for rendering and handling input events.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetTool",
          "package": "gtkimageview",
          "signature": "view -\u003e IO IImageTool",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#imageViewGetTool",
          "type": "function"
        },
        "index": {
          "description": "Gets the image tool ImageView uses for rendering and handling input events",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetTool",
          "normalized": "a-\u003eIO IImageTool",
          "package": "gtkimageview",
          "partial": "View Get Tool",
          "signature": "view-\u003eIO IImageTool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewGetTool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFills in the rectangle with the current viewport. If pixbuf is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, there is no viewport, rect is\n left untouched and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e is returned. If the view is not allocated, the rectangles coordinates are\n set to the views offset and its width and height to zero.\n\u003c/p\u003e\u003cp\u003eThe current viewport is defined as the rectangle, in zoomspace coordinates as the area of the loaded\n pixbuf the \u003ccode\u003e\u003ca\u003eImageView\u003c/a\u003e\u003c/code\u003e is currently showing.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetViewport",
          "package": "gtkimageview",
          "signature": "view -\u003e IO (Maybe Rectangle)",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#imageViewGetViewport",
          "type": "function"
        },
        "index": {
          "description": "Fills in the rectangle with the current viewport If pixbuf is Nothing there is no viewport rect is left untouched and False is returned If the view is not allocated the rectangles coordinates are set to the views offset and its width and height to zero The current viewport is defined as the rectangle in zoomspace coordinates as the area of the loaded pixbuf the ImageView is currently showing",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetViewport",
          "normalized": "a-\u003eIO(Maybe Rectangle)",
          "package": "gtkimageview",
          "partial": "View Get Viewport",
          "signature": "view-\u003eIO(Maybe Rectangle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewGetViewport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current zoom factor of the view.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetZoom",
          "package": "gtkimageview",
          "signature": "view-\u003e IO Double",
          "type": "function"
        },
        "index": {
          "description": "Get the current zoom factor of the view",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewGetZoom",
          "normalized": "a-\u003eIO Double",
          "package": "gtkimageview",
          "partial": "View Get Zoom",
          "signature": "view-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewGetZoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a rectangle in image space coordinates to widget space coordinates. If the view is not\n realized, or if it contains no pixbuf, then the conversion was unsuccessful, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e is returned and\n \u003ccode\u003erectOut\u003c/code\u003e is left unmodified.\n\u003c/p\u003e\u003cp\u003eThe size of \u003ccode\u003erectOut\u003c/code\u003e is rounded up. For example, if the zoom factor is 0.25 and the width of the\n input rectangle is 2, then its with in widget space coordinates is 0.5 which is rounded up to 1.\n\u003c/p\u003e\u003cp\u003eNote that this function may return a rectangle that is not visible on the widget.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewImageToWidgetRect",
          "package": "gtkimageview",
          "signature": "view-\u003e Rectangle-\u003e Rectangle-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Convert rectangle in image space coordinates to widget space coordinates If the view is not realized or if it contains no pixbuf then the conversion was unsuccessful False is returned and rectOut is left unmodified The size of rectOut is rounded up For example if the zoom factor is and the width of the input rectangle is then its with in widget space coordinates is which is rounded up to Note that this function may return rectangle that is not visible on the widget",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewImageToWidgetRect",
          "normalized": "a-\u003eRectangle-\u003eRectangle-\u003eIO Bool",
          "package": "gtkimageview",
          "partial": "View Image To Widget Rect",
          "signature": "view-\u003eRectangle-\u003eRectangle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewImageToWidgetRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a string with the format \u003ca\u003emajor.minor.micro\u003c/a\u003e which denotes the runtime version of\n \u003ccode\u003e\u003ca\u003eImageView\u003c/a\u003e\u003c/code\u003e being used.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewLibraryVersion",
          "package": "gtkimageview",
          "signature": "IO String",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#imageViewLibraryVersion",
          "type": "function"
        },
        "index": {
          "description": "Returns string with the format major.minor.micro which denotes the runtime version of ImageView being used",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewLibraryVersion",
          "package": "gtkimageview",
          "partial": "View Library Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewLibraryVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new image view with default values. The default values are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e black bg : \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n * fitting : \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n * image tool : a \u003ccode\u003e\u003ca\u003eImageToolDragger\u003c/a\u003e\u003c/code\u003e instance\n * interpolation mode : \u003ccode\u003e\u003ca\u003eInterpBilinear\u003c/a\u003e\u003c/code\u003e\n * offset : (0, 0) * pixbuf : \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n * show cursor: \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n * show frame : \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n * transp : \u003ccode\u003e\u003ca\u003eImageTranspGrid\u003c/a\u003e\u003c/code\u003e\n * zoom : 1.0\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewNew",
          "package": "gtkimageview",
          "signature": "IO ImageView",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#imageViewNew",
          "type": "function"
        },
        "index": {
          "description": "Creates new image view with default values The default values are black bg False fitting True image tool ImageToolDragger instance interpolation mode InterpBilinear offset pixbuf Nothing show cursor True show frame True transp ImageTranspGrid zoom",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewNew",
          "package": "gtkimageview",
          "partial": "View New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the view uses a black background. If \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the view uses the default (normally gray)\n background.\n\u003c/p\u003e\u003cp\u003eThe default value is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetBlackBg",
          "package": "gtkimageview",
          "signature": "view-\u003e Bool-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "If True the view uses black background If False the view uses the default normally gray background The default value is False",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetBlackBg",
          "normalized": "a-\u003eBool-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Set Black Bg",
          "signature": "view-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewSetBlackBg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets whether to fit or not. If \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, then the view will adapt the zoom so that the whole pixbuf is\n visible.\n\u003c/p\u003e\u003cp\u003eSetting the fitting causes the widget to immediately repaint itself.\n\u003c/p\u003e\u003cp\u003eFitting is by default \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetFitting",
          "package": "gtkimageview",
          "signature": "view-\u003e Bool-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets whether to fit or not If True then the view will adapt the zoom so that the whole pixbuf is visible Setting the fitting causes the widget to immediately repaint itself Fitting is by default True",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetFitting",
          "normalized": "a-\u003eBool-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Set Fitting",
          "signature": "view-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewSetFitting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the interpolation mode of how the view. \u003ccode\u003e\u003ca\u003eInterpHyper\u003c/a\u003e\u003c/code\u003e is the slowest, but produces the best\n results. \u003ccode\u003e\u003ca\u003eInterpNearest\u003c/a\u003e\u003c/code\u003e is the fastest, but provides bad rendering quality. \u003ccode\u003e\u003ca\u003eInterpBilinear\u003c/a\u003e\u003c/code\u003e\n is a good compromise.\n\u003c/p\u003e\u003cp\u003eSetting the interpolation mode causes the widget to immediately repaint itself.\n\u003c/p\u003e\u003cp\u003eThe default interpolation mode is \u003ccode\u003e\u003ca\u003eInterpBilinear\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetInterpolation",
          "package": "gtkimageview",
          "signature": "view-\u003e InterpType-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the interpolation mode of how the view InterpHyper is the slowest but produces the best results InterpNearest is the fastest but provides bad rendering quality InterpBilinear is good compromise Setting the interpolation mode causes the widget to immediately repaint itself The default interpolation mode is InterpBilinear",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetInterpolation",
          "normalized": "a-\u003eInterpType-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Set Interpolation",
          "signature": "view-\u003eInterpType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewSetInterpolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the offset of where in the image the \u003ccode\u003e\u003ca\u003eImageView\u003c/a\u003e\u003c/code\u003e should begin displaying image data.\n\u003c/p\u003e\u003cp\u003eThe offset is clamped so that it will never cause the \u003ccode\u003e\u003ca\u003eImageView\u003c/a\u003e\u003c/code\u003e to display pixels outside the\n pixbuf. Setting this attribute causes the widget to repaint itself if it is realized.\n\u003c/p\u003e\u003cp\u003eIf invalidate is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the views entire area will be invalidated instead of redrawn immediately. The\n view is then queued for redraw, which means that additional operations can be performed on it before\n it is redrawn.\n\u003c/p\u003e\u003cp\u003eThe difference can sometimes be important like when you are overlaying data and get flicker or\n artifacts when setting the offset. If that happens, setting invalidate to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e could fix the\n problem. See the source code to \u003ccode\u003e\u003ca\u003eImageToolSelector\u003c/a\u003e\u003c/code\u003e for an example.\n\u003c/p\u003e\u003cp\u003eNormally, invalidate should always be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e because it is much faster to repaint immedately than\n invalidating.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetOffset",
          "package": "gtkimageview",
          "signature": "view-\u003e Double-\u003e Double-\u003e Bool-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the offset of where in the image the ImageView should begin displaying image data The offset is clamped so that it will never cause the ImageView to display pixels outside the pixbuf Setting this attribute causes the widget to repaint itself if it is realized If invalidate is True the views entire area will be invalidated instead of redrawn immediately The view is then queued for redraw which means that additional operations can be performed on it before it is redrawn The difference can sometimes be important like when you are overlaying data and get flicker or artifacts when setting the offset If that happens setting invalidate to True could fix the problem See the source code to ImageToolSelector for an example Normally invalidate should always be False because it is much faster to repaint immedately than invalidating",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetOffset",
          "normalized": "a-\u003eDouble-\u003eDouble-\u003eBool-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Set Offset",
          "signature": "view-\u003eDouble-\u003eDouble-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewSetOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the pixbuf to display, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to not display any pixbuf. Normally, \u003ccode\u003eresetFit\u003c/code\u003e should be \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n which enables fitting. Which means that, initially, the whole pixbuf will be shown.\n\u003c/p\u003e\u003cp\u003eSometimes, the fit mode should not be reset. For example, if \u003ccode\u003e\u003ca\u003eImageView\u003c/a\u003e\u003c/code\u003e is showing an animation,\n it would be bad to reset the fit mode for each new frame. The parameter should then be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e which\n leaves the fit mode of the view untouched.\n\u003c/p\u003e\u003cp\u003eThis method should not be used if merely the contents of the pixbuf has changed. See\n \u003ccode\u003e\u003ca\u003eimageViewDamagePixels\u003c/a\u003e\u003c/code\u003e for that.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eresetFit\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003ezoomChanged\u003c/a\u003e\u003c/code\u003e signal is emitted, otherwise not. The \u003ccode\u003e\u003ca\u003epixbufChanged\u003c/a\u003e\u003c/code\u003e\n signal is also emitted.\n\u003c/p\u003e\u003cp\u003eThe default pixbuf is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetPixbuf",
          "package": "gtkimageview",
          "signature": "view-\u003e Maybe Pixbuf-\u003e Bool-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the pixbuf to display or Nothing to not display any pixbuf Normally resetFit should be True which enables fitting Which means that initially the whole pixbuf will be shown Sometimes the fit mode should not be reset For example if ImageView is showing an animation it would be bad to reset the fit mode for each new frame The parameter should then be False which leaves the fit mode of the view untouched This method should not be used if merely the contents of the pixbuf has changed See imageViewDamagePixels for that If resetFit is True the zoomChanged signal is emitted otherwise not The pixbufChanged signal is also emitted The default pixbuf is Nothing",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetPixbuf",
          "normalized": "a-\u003eMaybe Pixbuf-\u003eBool-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Set Pixbuf",
          "signature": "view-\u003eMaybe Pixbuf-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewSetPixbuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets whether to show the mouse cursor when the mouse is over the widget or not. Hiding the cursor is\n useful when the widget is fullscreened.\n\u003c/p\u003e\u003cp\u003eThe default value is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetShowCursor",
          "package": "gtkimageview",
          "signature": "view-\u003e Bool-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets whether to show the mouse cursor when the mouse is over the widget or not Hiding the cursor is useful when the widget is fullscreened The default value is True",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetShowCursor",
          "normalized": "a-\u003eBool-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Set Show Cursor",
          "signature": "view-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewSetShowCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets whether to draw a frame around the image or not. When \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, a one pixel wide frame is shown\n around the image. Setting this attribute causes the widget to immediately repaint itself.\n\u003c/p\u003e\u003cp\u003eThe default value is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetShowFrame",
          "package": "gtkimageview",
          "signature": "view-\u003e Bool-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets whether to draw frame around the image or not When True one pixel wide frame is shown around the image Setting this attribute causes the widget to immediately repaint itself The default value is True",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetShowFrame",
          "normalized": "a-\u003eBool-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Set Show Frame",
          "signature": "view-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewSetShowFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the image tool to use. If the new tool is the same as the current tool, then nothing will be\n done. Otherwise \u003ccode\u003eiimageToolPixbufChanged\u003c/code\u003e is called so that the tool has a chance to generate\n initial data for the pixbuf.\n\u003c/p\u003e\u003cp\u003eSetting the tool causes the widget to immediately repaint itself.\n\u003c/p\u003e\u003cp\u003eThe default image tool is a \u003ccode\u003e\u003ca\u003eImageToolDragger\u003c/a\u003e\u003c/code\u003e instance. See also \u003ccode\u003e\u003ca\u003eIImageTool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetTool",
          "package": "gtkimageview",
          "signature": "view-\u003e IImageTool-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the image tool to use If the new tool is the same as the current tool then nothing will be done Otherwise iimageToolPixbufChanged is called so that the tool has chance to generate initial data for the pixbuf Setting the tool causes the widget to immediately repaint itself The default image tool is ImageToolDragger instance See also IImageTool",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetTool",
          "normalized": "a-\u003eIImageTool-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Set Tool",
          "signature": "view-\u003eIImageTool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewSetTool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets how the view should draw transparent parts of images with an alpha channel. If transp is\n \u003ccode\u003e\u003ca\u003eImageTranspColor\u003c/a\u003e\u003c/code\u003e, the specified color will be used. Otherwise the \u003ccode\u003etranspColor\u003c/code\u003e argument is\n ignored. If it is \u003ccode\u003e\u003ca\u003eImageTranspBackground\u003c/a\u003e\u003c/code\u003e, the background color of the widget will be used. If\n it is \u003ccode\u003e\u003ca\u003eImageTranspGrid\u003c/a\u003e\u003c/code\u003e, then a grid with light and dark gray boxes will be drawn on the\n transparent parts.\n\u003c/p\u003e\u003cp\u003eCalling this method causes the widget to immediately repaint. It also causes the \u003ccode\u003e\u003ca\u003epixbufChanged\u003c/a\u003e\u003c/code\u003e\n signal to be emitted. This is done so that other widgets (such as \u003ccode\u003e\u003ca\u003eImageNav\u003c/a\u003e\u003c/code\u003e) will have a chance to\n render a view of the pixbuf with the new transparency settings.\n\u003c/p\u003e\u003cp\u003eThe default values are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e transp : \u003ccode\u003e\u003ca\u003eImageTranspGrid\u003c/a\u003e\u003c/code\u003e\n * \u003ccode\u003etranspColor\u003c/code\u003e : 0x000000\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetTransp",
          "package": "gtkimageview",
          "signature": "view-\u003e ImageTransp-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets how the view should draw transparent parts of images with an alpha channel If transp is ImageTranspColor the specified color will be used Otherwise the transpColor argument is ignored If it is ImageTranspBackground the background color of the widget will be used If it is ImageTranspGrid then grid with light and dark gray boxes will be drawn on the transparent parts Calling this method causes the widget to immediately repaint It also causes the pixbufChanged signal to be emitted This is done so that other widgets such as ImageNav will have chance to render view of the pixbuf with the new transparency settings The default values are transp ImageTranspGrid transpColor x000000",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetTransp",
          "normalized": "a-\u003eImageTransp-\u003eInt-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Set Transp",
          "signature": "view-\u003eImageTransp-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewSetTransp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the zoom of the view.\n\u003c/p\u003e\u003cp\u003eFitting is always disabled after this method has run. The \u003ccode\u003e\u003ca\u003ezoomChanged\u003c/a\u003e\u003c/code\u003e signal is unconditionally\n emitted.\n\u003c/p\u003e\u003cp\u003eThe default value is 1.0.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetZoom",
          "package": "gtkimageview",
          "signature": "view-\u003e Double-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the zoom of the view Fitting is always disabled after this method has run The zoomChanged signal is unconditionally emitted The default value is",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewSetZoom",
          "normalized": "a-\u003eDouble-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Set Zoom",
          "signature": "view-\u003eDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewSetZoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZoom in the view one step. Calling this method causes the widget to immediately repaint itself.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewZoomIn",
          "package": "gtkimageview",
          "signature": "view -\u003e IO ()",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#imageViewZoomIn",
          "type": "function"
        },
        "index": {
          "description": "Zoom in the view one step Calling this method causes the widget to immediately repaint itself",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewZoomIn",
          "normalized": "a-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Zoom In",
          "signature": "view-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewZoomIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZoom out the view one step. Calling this method causes the widget to immediately repaint itself.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewZoomOut",
          "package": "gtkimageview",
          "signature": "view -\u003e IO ()",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#imageViewZoomOut",
          "type": "function"
        },
        "index": {
          "description": "Zoom out the view one step Calling this method causes the widget to immediately repaint itself",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "imageViewZoomOut",
          "normalized": "a-\u003eIO()",
          "package": "gtkimageview",
          "partial": "View Zoom Out",
          "signature": "view-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:imageViewZoomOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emouseWheelScroll\u003c/a\u003e\u003c/code\u003e signal is emitted when the mouse wheel is scrolled on the view and\n \u003ccode\u003eControlMask\u003c/code\u003e is not held down.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "mouseWheelScroll",
          "package": "gtkimageview",
          "signature": "Signal view (ScrollDirection -\u003e IO ())",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#mouseWheelScroll",
          "type": "function"
        },
        "index": {
          "description": "The mouseWheelScroll signal is emitted when the mouse wheel is scrolled on the view and ControlMask is not held down",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "mouseWheelScroll",
          "normalized": "Signal a(ScrollDirection-\u003eIO())",
          "package": "gtkimageview",
          "partial": "Wheel Scroll",
          "signature": "Signal view(ScrollDirection-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:mouseWheelScroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epixbufChanged\u003c/a\u003e\u003c/code\u003e signal is emitted when the pixbuf the image view shows is changed and when its\n image data is changed. Listening to this signal is useful if you, for example, have a label that\n displays the width and height of the pixbuf in the view.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "pixbufChanged",
          "package": "gtkimageview",
          "signature": "Signal view (IO ())",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#pixbufChanged",
          "type": "function"
        },
        "index": {
          "description": "The pixbufChanged signal is emitted when the pixbuf the image view shows is changed and when its image data is changed Listening to this signal is useful if you for example have label that displays the width and height of the pixbuf in the view",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "pixbufChanged",
          "normalized": "Signal a(IO())",
          "package": "gtkimageview",
          "partial": "Changed",
          "signature": "Signal view(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:pixbufChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003escroll\u003c/a\u003e\u003c/code\u003e signal is a keybinding signal emitted when a key is used to scroll the view. The signal\n should not be used by clients of this library.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "scroll",
          "package": "gtkimageview",
          "signature": "Signal view (ScrollType -\u003e ScrollType -\u003e IO ())",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#scroll",
          "type": "function"
        },
        "index": {
          "description": "The scroll signal is keybinding signal emitted when key is used to scroll the view The signal should not be used by clients of this library",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "scroll",
          "normalized": "Signal a(ScrollType-\u003eScrollType-\u003eIO())",
          "package": "gtkimageview",
          "signature": "Signal view(ScrollType-\u003eScrollType-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:scroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "setFitting",
          "package": "gtkimageview",
          "signature": "Signal view (Int -\u003e IO ())",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#setFitting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "setFitting",
          "normalized": "Signal a(Int-\u003eIO())",
          "package": "gtkimageview",
          "partial": "Fitting",
          "signature": "Signal view(Int-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:setFitting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "setScrollAdjustments",
          "package": "gtkimageview",
          "signature": "Signal view (Adjustment -\u003e Adjustment -\u003e IO ())",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#setScrollAdjustments",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "setScrollAdjustments",
          "normalized": "Signal a(Adjustment-\u003eAdjustment-\u003eIO())",
          "package": "gtkimageview",
          "partial": "Scroll Adjustments",
          "signature": "Signal view(Adjustment-\u003eAdjustment-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:setScrollAdjustments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esetZoom\u003c/a\u003e\u003c/code\u003e signal is a keybinding signal emitted when GDK_1, GDK_2 or GDK_3 is pressed on the\n widget which causes the zoom to be set to 100%, 200% or 300%. The signal should not be used by\n clients of this library.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "setZoom",
          "package": "gtkimageview",
          "signature": "Signal view (Double -\u003e IO ())",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#setZoom",
          "type": "function"
        },
        "index": {
          "description": "The setZoom signal is keybinding signal emitted when GDK GDK or GDK is pressed on the widget which causes the zoom to be set to or The signal should not be used by clients of this library",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "setZoom",
          "normalized": "Signal a(Double-\u003eIO())",
          "package": "gtkimageview",
          "partial": "Zoom",
          "signature": "Signal view(Double-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:setZoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezoomChanged\u003c/a\u003e\u003c/code\u003e signal is emitted when the zoom factor of the view changes. Listening to this\n signal is useful if, for example, you have a label that displays the zoom factor of the view. Use\n \u003ccode\u003e\u003ca\u003eimageViewGetZoom\u003c/a\u003e\u003c/code\u003e to retrieve the value.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "zoomChanged",
          "package": "gtkimageview",
          "signature": "Signal view (IO ())",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#zoomChanged",
          "type": "function"
        },
        "index": {
          "description": "The zoomChanged signal is emitted when the zoom factor of the view changes Listening to this signal is useful if for example you have label that displays the zoom factor of the view Use imageViewGetZoom to retrieve the value",
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "zoomChanged",
          "normalized": "Signal a(IO())",
          "package": "gtkimageview",
          "partial": "Changed",
          "signature": "Signal view(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:zoomChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "zoomIn",
          "package": "gtkimageview",
          "signature": "Signal view (IO ())",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#zoomIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "zoomIn",
          "normalized": "Signal a(IO())",
          "package": "gtkimageview",
          "partial": "In",
          "signature": "Signal view(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:zoomIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "zoomOut",
          "package": "gtkimageview",
          "signature": "Signal view (IO ())",
          "source": "src/Graphics-UI-Gtk-ImageView-ImageView.html#zoomOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView ImageView",
          "module": "Graphics.UI.Gtk.ImageView.ImageView",
          "name": "zoomOut",
          "normalized": "Signal a(IO())",
          "package": "gtkimageview",
          "partial": "Out",
          "signature": "Signal view(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-ImageView.html#v:zoomOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView.Zooms",
          "name": "Zooms",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView-Zooms.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView Zooms",
          "module": "Graphics.UI.Gtk.ImageView.Zooms",
          "name": "Zooms",
          "package": "gtkimageview",
          "partial": "Zooms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Zooms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the zoom factor clamped to the minumum and maximum allowed value.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.Zooms",
          "name": "zoomsClampZoom",
          "package": "gtkimageview",
          "signature": "Double-\u003e IO Double",
          "type": "function"
        },
        "index": {
          "description": "Returns the zoom factor clamped to the minumum and maximum allowed value",
          "hierarchy": "Graphics UI Gtk ImageView Zooms",
          "module": "Graphics.UI.Gtk.ImageView.Zooms",
          "name": "zoomsClampZoom",
          "normalized": "Double-\u003eIO Double",
          "package": "gtkimageview",
          "partial": "Clamp Zoom",
          "signature": "Double-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Zooms.html#v:zoomsClampZoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the maximum allowed zoom factor.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.Zooms",
          "name": "zoomsGetMaxZoom",
          "package": "gtkimageview",
          "signature": "IO Double",
          "type": "function"
        },
        "index": {
          "description": "Returns the maximum allowed zoom factor",
          "hierarchy": "Graphics UI Gtk ImageView Zooms",
          "module": "Graphics.UI.Gtk.ImageView.Zooms",
          "name": "zoomsGetMaxZoom",
          "package": "gtkimageview",
          "partial": "Get Max Zoom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Zooms.html#v:zoomsGetMaxZoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the minimum allowed zoom factor.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.Zooms",
          "name": "zoomsGetMinZoom",
          "package": "gtkimageview",
          "signature": "IO Double",
          "type": "function"
        },
        "index": {
          "description": "Returns the minimum allowed zoom factor",
          "hierarchy": "Graphics UI Gtk ImageView Zooms",
          "module": "Graphics.UI.Gtk.ImageView.Zooms",
          "name": "zoomsGetMinZoom",
          "package": "gtkimageview",
          "partial": "Get Min Zoom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Zooms.html#v:zoomsGetMinZoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the zoom factor that is one step larger than the supplied zoom factor.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.Zooms",
          "name": "zoomsGetZoomIn",
          "package": "gtkimageview",
          "signature": "Double-\u003e IO Double",
          "type": "function"
        },
        "index": {
          "description": "Returns the zoom factor that is one step larger than the supplied zoom factor",
          "hierarchy": "Graphics UI Gtk ImageView Zooms",
          "module": "Graphics.UI.Gtk.ImageView.Zooms",
          "name": "zoomsGetZoomIn",
          "normalized": "Double-\u003eIO Double",
          "package": "gtkimageview",
          "partial": "Get Zoom In",
          "signature": "Double-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Zooms.html#v:zoomsGetZoomIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the zoom factor that is one step smaller than the supplied zoom factor.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.ImageView.Zooms",
          "name": "zoomsGetZoomOut",
          "package": "gtkimageview",
          "signature": "Double-\u003e IO Double",
          "type": "function"
        },
        "index": {
          "description": "Returns the zoom factor that is one step smaller than the supplied zoom factor",
          "hierarchy": "Graphics UI Gtk ImageView Zooms",
          "module": "Graphics.UI.Gtk.ImageView.Zooms",
          "name": "zoomsGetZoomOut",
          "normalized": "Double-\u003eIO Double",
          "package": "gtkimageview",
          "partial": "Get Zoom Out",
          "signature": "Double-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView-Zooms.html#v:zoomsGetZoomOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.ImageView",
          "name": "ImageView",
          "package": "gtkimageview",
          "source": "src/Graphics-UI-Gtk-ImageView.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk ImageView",
          "module": "Graphics.UI.Gtk.ImageView",
          "name": "ImageView",
          "package": "gtkimageview",
          "partial": "Image View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtkimageview/docs/Graphics-UI-Gtk-ImageView.html#"
      }
    }
  ]
]