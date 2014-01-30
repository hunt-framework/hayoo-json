[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 6.10, GHC 7.6\n\u003c/p\u003e\u003cp\u003eBindings to xosd, the X on-screen display library\n xosd is a library for displaying an on-screen display (like the one\n on many TVs) on your X display.\n\u003c/p\u003e\u003cp\u003eAn example using the lowest level C layer:\n\u003c/p\u003e\u003cpre\u003e do x \u003c- create 1\n    setFont x \"-adobe-helvetica-bold-r-*-*-34-*-*-*-*-*-*-*\"\n    setColor x \"LimeGreen\"\n    display x 0 (String \"Screen 1\")\n\u003c/pre\u003e\u003cp\u003erunXOSD [Timeout 10, VAlign VAlignMiddle, HAlign HAlignCenter, Font\n \u003ca\u003e-adobe-helvetica-bold-r-*-*-34-*-*-*-*-*-*-*\u003c/a\u003e, Color \u003ca\u003eLimeGreen\u003c/a\u003e,\n Display (String \u003ca\u003eTEST\u003c/a\u003e)] (x -\u003e sequence_ [ display x 0 (String (show\n i)) \u003e\u003e Control.Concurrent.threadDelay (10^4) | i \u003c- [1..] ])\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "module",
        "fct-source": "src/Graphics-XOSD-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Tested with GHC GHC Bindings to xosd the on-screen display library xosd is library for displaying an on-screen display like the one on many TVs on your display An example using the lowest level layer do create setFont adobe-helvetica-bold-r setColor LimeGreen display String Screen runXOSD Timeout VAlign VAlignMiddle HAlign HAlignCenter Font adobe-helvetica-bold-r Color LimeGreen Display String TEST sequence display String show Control.Concurrent.threadDelay",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "Base",
        "normalized": "",
        "package": "xosd",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#t:Format",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of possible display formats\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "data",
        "fct-source": "src/Graphics-XOSD-Base.html#Format",
        "fct-type": "data",
        "title": "Format"
      },
      "index": {
        "description": "The type of possible display formats",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "Format",
        "normalized": "",
        "package": "xosd",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#t:HAlign",
      "description": {
        "fct-descr": "\u003cp\u003eValid screen positions (vertical alignment)\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "data",
        "fct-source": "src/Graphics-XOSD-Base.html#HAlign",
        "fct-type": "data",
        "title": "HAlign"
      },
      "index": {
        "description": "Valid screen positions vertical alignment",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "HAlign",
        "normalized": "",
        "package": "xosd",
        "partial": "HAlign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#t:VAlign",
      "description": {
        "fct-descr": "\u003cp\u003eValid screen positions (vertical alignment)\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "data",
        "fct-source": "src/Graphics-XOSD-Base.html#VAlign",
        "fct-type": "data",
        "title": "VAlign"
      },
      "index": {
        "description": "Valid screen positions vertical alignment",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "VAlign",
        "normalized": "",
        "package": "xosd",
        "partial": "VAlign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#t:XOSD",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract X on-screen display \u003ca\u003eobject\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAn xosd window can be used to display textual or numerical data on a\n X11 display in a unmanaged, shaped window that appears to be\n transparent.  It  provides a similar effect to the on-screen display\n of many televisions and video recorders\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "type",
        "fct-source": "src/Graphics-XOSD-Base.html#XOSD",
        "fct-type": "type",
        "title": "XOSD"
      },
      "index": {
        "description": "An abstract on-screen display object An xosd window can be used to display textual or numerical data on X11 display in unmanaged shaped window that appears to be transparent It provides similar effect to the on-screen display of many televisions and video recorders",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "XOSD",
        "normalized": "",
        "package": "xosd",
        "partial": "XOSD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:HAlignCenter",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "HAlignCenter",
        "fct-source": "src/Graphics-XOSD-Base.html#HAlign",
        "fct-type": "function",
        "title": "HAlignCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "HAlignCenter",
        "normalized": "",
        "package": "xosd",
        "partial": "HAlign Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:HAlignLeft",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "HAlignLeft",
        "fct-source": "src/Graphics-XOSD-Base.html#HAlign",
        "fct-type": "function",
        "title": "HAlignLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "HAlignLeft",
        "normalized": "",
        "package": "xosd",
        "partial": "HAlign Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:HAlignRight",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "HAlignRight",
        "fct-source": "src/Graphics-XOSD-Base.html#HAlign",
        "fct-type": "function",
        "title": "HAlignRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "HAlignRight",
        "normalized": "",
        "package": "xosd",
        "partial": "HAlign Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:Percent",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "Percent !Int",
        "fct-source": "src/Graphics-XOSD-Base.html#Format",
        "fct-type": "function",
        "title": "Percent"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "Percent",
        "normalized": "",
        "package": "xosd",
        "partial": "Percent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:Slider",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "Slider !Int",
        "fct-source": "src/Graphics-XOSD-Base.html#Format",
        "fct-type": "function",
        "title": "Slider"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "Slider",
        "normalized": "",
        "package": "xosd",
        "partial": "Slider",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:String",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "String String",
        "fct-source": "src/Graphics-XOSD-Base.html#Format",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "String",
        "normalized": "",
        "package": "xosd",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:VAlignBottom",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "VAlignBottom",
        "fct-source": "src/Graphics-XOSD-Base.html#VAlign",
        "fct-type": "function",
        "title": "VAlignBottom"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "VAlignBottom",
        "normalized": "",
        "package": "xosd",
        "partial": "VAlign Bottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:VAlignMiddle",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "VAlignMiddle",
        "fct-source": "src/Graphics-XOSD-Base.html#VAlign",
        "fct-type": "function",
        "title": "VAlignMiddle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "VAlignMiddle",
        "normalized": "",
        "package": "xosd",
        "partial": "VAlign Middle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:VAlignTop",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "VAlignTop",
        "fct-source": "src/Graphics-XOSD-Base.html#VAlign",
        "fct-type": "function",
        "title": "VAlignTop"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "VAlignTop",
        "normalized": "",
        "package": "xosd",
        "partial": "VAlign Top",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:create",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new xosd window.\n The argument is the maximum number of lines of text that the window can display.\n Throw an exception on failure.\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "Int -\u003e IO XOSD",
        "fct-source": "src/Graphics-XOSD-Base.html#create",
        "fct-type": "function",
        "title": "create"
      },
      "index": {
        "description": "Create new xosd window The argument is the maximum number of lines of text that the window can display Throw an exception on failure",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "create",
        "normalized": "Int-\u003eIO XOSD",
        "package": "xosd",
        "partial": "",
        "signature": "Int-\u003eIO XOSD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:destroy",
      "description": {
        "fct-descr": "\u003cp\u003exosd_uninit destroys an existing xosd window, freeing the memory.\n This is an unsafe function: as destroying an xosd object twice will\n likely cause bad things to happen, so don't do that.\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#destroy",
        "fct-type": "function",
        "title": "destroy"
      },
      "index": {
        "description": "xosd uninit destroys an existing xosd window freeing the memory This is an unsafe function as destroying an xosd object twice will likely cause bad things to happen so don do that",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "destroy",
        "normalized": "XOSD-\u003eIO()",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:display",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay some content.\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e Int -\u003e Format -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#display",
        "fct-type": "function",
        "title": "display"
      },
      "index": {
        "description": "Display some content",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "display",
        "normalized": "XOSD-\u003eInt-\u003eFormat-\u003eIO()",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eInt-\u003eFormat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:getNumberOfLines",
      "description": {
        "fct-descr": "\u003cp\u003eGet the maximum number of lines allowed\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO Int",
        "fct-source": "src/Graphics-XOSD-Base.html#getNumberOfLines",
        "fct-type": "function",
        "title": "getNumberOfLines"
      },
      "index": {
        "description": "Get the maximum number of lines allowed",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "getNumberOfLines",
        "normalized": "XOSD-\u003eIO Int",
        "package": "xosd",
        "partial": "Number Of Lines",
        "signature": "XOSD-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:isOnScreen",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO Bool",
        "fct-source": "src/Graphics-XOSD-Base.html#isOnScreen",
        "fct-type": "function",
        "title": "isOnScreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "isOnScreen",
        "normalized": "XOSD-\u003eIO Bool",
        "package": "xosd",
        "partial": "On Screen",
        "signature": "XOSD-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:scroll",
      "description": {
        "fct-descr": "\u003cp\u003eScroll the display\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e Int -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#scroll",
        "fct-type": "function",
        "title": "scroll"
      },
      "index": {
        "description": "Scroll the display",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "scroll",
        "normalized": "XOSD-\u003eInt-\u003eIO()",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setBarLength",
      "description": {
        "fct-descr": "\u003cp\u003eSet length of percentage and slider bar\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e Int -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setBarLength",
        "fct-type": "function",
        "title": "setBarLength"
      },
      "index": {
        "description": "Set length of percentage and slider bar",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setBarLength",
        "normalized": "XOSD-\u003eInt-\u003eIO()",
        "package": "xosd",
        "partial": "Bar Length",
        "signature": "XOSD-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setColor",
      "description": {
        "fct-descr": "\u003cp\u003eChange the colour of the display\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e String -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setColor",
        "fct-type": "function",
        "title": "setColor"
      },
      "index": {
        "description": "Change the colour of the display",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setColor",
        "normalized": "XOSD-\u003eString-\u003eIO()",
        "package": "xosd",
        "partial": "Color",
        "signature": "XOSD-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setFont",
      "description": {
        "fct-descr": "\u003cp\u003eChange the text-display font\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e String -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setFont",
        "fct-type": "function",
        "title": "setFont"
      },
      "index": {
        "description": "Change the text-display font",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setFont",
        "normalized": "XOSD-\u003eString-\u003eIO()",
        "package": "xosd",
        "partial": "Font",
        "signature": "XOSD-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setHAlign",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e HAlign -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setHAlign",
        "fct-type": "function",
        "title": "setHAlign"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setHAlign",
        "normalized": "XOSD-\u003eHAlign-\u003eIO()",
        "package": "xosd",
        "partial": "HAlign",
        "signature": "XOSD-\u003eHAlign-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setHidden",
      "description": {
        "fct-descr": "\u003cp\u003eHide the display\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setHidden",
        "fct-type": "function",
        "title": "setHidden"
      },
      "index": {
        "description": "Hide the display",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setHidden",
        "normalized": "XOSD-\u003eIO()",
        "package": "xosd",
        "partial": "Hidden",
        "signature": "XOSD-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setHorizontalOffset",
      "description": {
        "fct-descr": "\u003cp\u003eChange the number of pixels the display is offset from the position\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e Int -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setHorizontalOffset",
        "fct-type": "function",
        "title": "setHorizontalOffset"
      },
      "index": {
        "description": "Change the number of pixels the display is offset from the position",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setHorizontalOffset",
        "normalized": "XOSD-\u003eInt-\u003eIO()",
        "package": "xosd",
        "partial": "Horizontal Offset",
        "signature": "XOSD-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setOutlineColor",
      "description": {
        "fct-descr": "\u003cp\u003eChange the colour of the outline\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e String -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setOutlineColor",
        "fct-type": "function",
        "title": "setOutlineColor"
      },
      "index": {
        "description": "Change the colour of the outline",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setOutlineColor",
        "normalized": "XOSD-\u003eString-\u003eIO()",
        "package": "xosd",
        "partial": "Outline Color",
        "signature": "XOSD-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setOutlineOffset",
      "description": {
        "fct-descr": "\u003cp\u003eChange the offset of the text outline-\n The outline is drawn over the shadow.\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e Int -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setOutlineOffset",
        "fct-type": "function",
        "title": "setOutlineOffset"
      },
      "index": {
        "description": "Change the offset of the text outline The outline is drawn over the shadow",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setOutlineOffset",
        "normalized": "XOSD-\u003eInt-\u003eIO()",
        "package": "xosd",
        "partial": "Outline Offset",
        "signature": "XOSD-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setShadowColor",
      "description": {
        "fct-descr": "\u003cp\u003eChange the colour of the shadow\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e String -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setShadowColor",
        "fct-type": "function",
        "title": "setShadowColor"
      },
      "index": {
        "description": "Change the colour of the shadow",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setShadowColor",
        "normalized": "XOSD-\u003eString-\u003eIO()",
        "package": "xosd",
        "partial": "Shadow Color",
        "signature": "XOSD-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setShadowOffset",
      "description": {
        "fct-descr": "\u003cp\u003eChange the offset of the text shadow\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e Int -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setShadowOffset",
        "fct-type": "function",
        "title": "setShadowOffset"
      },
      "index": {
        "description": "Change the offset of the text shadow",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setShadowOffset",
        "normalized": "XOSD-\u003eInt-\u003eIO()",
        "package": "xosd",
        "partial": "Shadow Offset",
        "signature": "XOSD-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eChange the time before display is hidden.\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e Int -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setTimeout",
        "fct-type": "function",
        "title": "setTimeout"
      },
      "index": {
        "description": "Change the time before display is hidden",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setTimeout",
        "normalized": "XOSD-\u003eInt-\u003eIO()",
        "package": "xosd",
        "partial": "Timeout",
        "signature": "XOSD-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setVAlign",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e VAlign -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setVAlign",
        "fct-type": "function",
        "title": "setVAlign"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setVAlign",
        "normalized": "XOSD-\u003eVAlign-\u003eIO()",
        "package": "xosd",
        "partial": "VAlign",
        "signature": "XOSD-\u003eVAlign-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setVerticalOffset",
      "description": {
        "fct-descr": "\u003cp\u003eChange the number of pixels the display is offset from the position\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e Int -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setVerticalOffset",
        "fct-type": "function",
        "title": "setVerticalOffset"
      },
      "index": {
        "description": "Change the number of pixels the display is offset from the position",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setVerticalOffset",
        "normalized": "XOSD-\u003eInt-\u003eIO()",
        "package": "xosd",
        "partial": "Vertical Offset",
        "signature": "XOSD-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setVisible",
      "description": {
        "fct-descr": "\u003cp\u003eShow the display after being hidden\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#setVisible",
        "fct-type": "function",
        "title": "setVisible"
      },
      "index": {
        "description": "Show the display after being hidden",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "setVisible",
        "normalized": "XOSD-\u003eIO()",
        "package": "xosd",
        "partial": "Visible",
        "signature": "XOSD-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:toXOSDFormat",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate abstract to concrete formatting types\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "Format -\u003e XOSD_Format",
        "fct-source": "src/Graphics-XOSD-Base.html#toXOSDFormat",
        "fct-type": "function",
        "title": "toXOSDFormat"
      },
      "index": {
        "description": "Translate abstract to concrete formatting types",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "toXOSDFormat",
        "normalized": "Format-\u003eXOSD_Format",
        "package": "xosd",
        "partial": "XOSDFormat",
        "signature": "Format-\u003eXOSD_Format"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:toXOSDHAlign",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate abstract to concrete formatting types\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "HAlign -\u003e XOSD_HAlign",
        "fct-source": "src/Graphics-XOSD-Base.html#toXOSDHAlign",
        "fct-type": "function",
        "title": "toXOSDHAlign"
      },
      "index": {
        "description": "Translate abstract to concrete formatting types",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "toXOSDHAlign",
        "normalized": "HAlign-\u003eXOSD_HAlign",
        "package": "xosd",
        "partial": "XOSDHAlign",
        "signature": "HAlign-\u003eXOSD_HAlign"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:toXOSDVAlign",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate abstract to concrete formatting types\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "VAlign -\u003e XOSD_VAlign",
        "fct-source": "src/Graphics-XOSD-Base.html#toXOSDVAlign",
        "fct-type": "function",
        "title": "toXOSDVAlign"
      },
      "index": {
        "description": "Translate abstract to concrete formatting types",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "toXOSDVAlign",
        "normalized": "VAlign-\u003eXOSD_VAlign",
        "package": "xosd",
        "partial": "XOSDVAlign",
        "signature": "VAlign-\u003eXOSD_VAlign"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003eWait until nothing is displayed. Blocks the process until no longer visible.\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "Wait until nothing is displayed Blocks the process until no longer visible",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "wait",
        "normalized": "XOSD-\u003eIO()",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosdEitherIf",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an error (encapsulated in Either) with the current String in \u003ccode\u003e\u003ca\u003exosd_error\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "(a -\u003e Bool) -\u003e IO a -\u003e IO (Either String a)",
        "fct-source": "src/Graphics-XOSD-Base.html#xosdEitherIf",
        "fct-type": "function",
        "title": "xosdEitherIf"
      },
      "index": {
        "description": "Throw an error encapsulated in Either with the current String in xosd error",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosdEitherIf",
        "normalized": "(a-\u003eBool)-\u003eIO a-\u003eIO(Either String a)",
        "package": "xosd",
        "partial": "Either If",
        "signature": "(a-\u003eBool)-\u003eIO a-\u003eIO(Either String a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosdError",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an error with the current String in \u003ccode\u003e\u003ca\u003exosd_error\u003c/a\u003e\u003c/code\u003e unconditionally\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "IO a",
        "fct-source": "src/Graphics-XOSD-Base.html#xosdError",
        "fct-type": "function",
        "title": "xosdError"
      },
      "index": {
        "description": "Throw an error with the current String in xosd error unconditionally",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosdError",
        "normalized": "",
        "package": "xosd",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosdErrorIf",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an error with the current String in \u003ccode\u003e\u003ca\u003exosd_error\u003c/a\u003e\u003c/code\u003e if predicate is True\n when applied to result of action.\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "(a -\u003e Bool) -\u003e IO a -\u003e IO a",
        "fct-source": "src/Graphics-XOSD-Base.html#xosdErrorIf",
        "fct-type": "function",
        "title": "xosdErrorIf"
      },
      "index": {
        "description": "Throw an error with the current String in xosd error if predicate is True when applied to result of action",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosdErrorIf",
        "normalized": "(a-\u003eBool)-\u003eIO a-\u003eIO a",
        "package": "xosd",
        "partial": "Error If",
        "signature": "(a-\u003eBool)-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_create",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "CInt -\u003e IO XOSD",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_create",
        "fct-type": "function",
        "title": "xosd_create"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_create",
        "normalized": "CInt-\u003eIO XOSD",
        "package": "xosd",
        "partial": "",
        "signature": "CInt-\u003eIO XOSD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_destroy",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_destroy",
        "fct-type": "function",
        "title": "xosd_destroy"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_destroy",
        "normalized": "XOSD-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_display_percent",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CInt -\u003e XOSD_Format -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_display_percent",
        "fct-type": "function",
        "title": "xosd_display_percent"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_display_percent",
        "normalized": "XOSD-\u003eCInt-\u003eXOSD_Format-\u003eCInt-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCInt-\u003eXOSD_Format-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_display_slider",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CInt -\u003e XOSD_Format -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_display_slider",
        "fct-type": "function",
        "title": "xosd_display_slider"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_display_slider",
        "normalized": "XOSD-\u003eCInt-\u003eXOSD_Format-\u003eCInt-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCInt-\u003eXOSD_Format-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_display_string",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CInt -\u003e XOSD_Format -\u003e CString -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_display_string",
        "fct-type": "function",
        "title": "xosd_display_string"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_display_string",
        "normalized": "XOSD-\u003eCInt-\u003eXOSD_Format-\u003eCString-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCInt-\u003eXOSD_Format-\u003eCString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_error",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "IO CString",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_error",
        "fct-type": "function",
        "title": "xosd_error"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_error",
        "normalized": "",
        "package": "xosd",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_get_colour",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e Ptr CInt -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_get_colour",
        "fct-type": "function",
        "title": "xosd_get_colour"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_get_colour",
        "normalized": "XOSD-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_get_number_lines",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_get_number_lines",
        "fct-type": "function",
        "title": "xosd_get_number_lines"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_get_number_lines",
        "normalized": "XOSD-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_hide",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_hide",
        "fct-type": "function",
        "title": "xosd_hide"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_hide",
        "normalized": "XOSD-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_is_onscreen",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_is_onscreen",
        "fct-type": "function",
        "title": "xosd_is_onscreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_is_onscreen",
        "normalized": "XOSD-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_scroll",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_scroll",
        "fct-type": "function",
        "title": "xosd_scroll"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_scroll",
        "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_align",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_set_align",
        "fct-type": "function",
        "title": "xosd_set_align"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_set_align",
        "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_bar_length",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_set_bar_length",
        "fct-type": "function",
        "title": "xosd_set_bar_length"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_set_bar_length",
        "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_colour",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CString -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_set_colour",
        "fct-type": "function",
        "title": "xosd_set_colour"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_set_colour",
        "normalized": "XOSD-\u003eCString-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_font",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CString -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_set_font",
        "fct-type": "function",
        "title": "xosd_set_font"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_set_font",
        "normalized": "XOSD-\u003eCString-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_horizontal_offset",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_set_horizontal_offset",
        "fct-type": "function",
        "title": "xosd_set_horizontal_offset"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_set_horizontal_offset",
        "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_outline_colour",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CString -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_set_outline_colour",
        "fct-type": "function",
        "title": "xosd_set_outline_colour"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_set_outline_colour",
        "normalized": "XOSD-\u003eCString-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_outline_offset",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_set_outline_offset",
        "fct-type": "function",
        "title": "xosd_set_outline_offset"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_set_outline_offset",
        "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_pos",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_set_pos",
        "fct-type": "function",
        "title": "xosd_set_pos"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_set_pos",
        "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_shadow_colour",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CString -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_set_shadow_colour",
        "fct-type": "function",
        "title": "xosd_set_shadow_colour"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_set_shadow_colour",
        "normalized": "XOSD-\u003eCString-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_shadow_offset",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_set_shadow_offset",
        "fct-type": "function",
        "title": "xosd_set_shadow_offset"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_set_shadow_offset",
        "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_timeout",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_set_timeout",
        "fct-type": "function",
        "title": "xosd_set_timeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_set_timeout",
        "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_vertical_offset",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_set_vertical_offset",
        "fct-type": "function",
        "title": "xosd_set_vertical_offset"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_set_vertical_offset",
        "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_show",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_show",
        "fct-type": "function",
        "title": "xosd_show"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_show",
        "normalized": "XOSD-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_wait_until_no_display",
      "description": {
        "fct-module": "Graphics.XOSD.Base",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO CInt",
        "fct-source": "src/Graphics-XOSD-Base.html#xosd_wait_until_no_display",
        "fct-type": "function",
        "title": "xosd_wait_until_no_display"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD Base",
        "module": "Graphics.XOSD.Base",
        "name": "xosd_wait_until_no_display",
        "normalized": "XOSD-\u003eIO CInt",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 6.10, GHC 7.6\n\u003c/p\u003e\u003cp\u003eBindings to xosd, the X on-screen display library\n xosd is a library for displaying an on-screen display (like the one\n on many TVs) on your X display.\n\u003c/p\u003e\u003cpre\u003e runXOSD [ Timeout 3\n          , VAlign VAlignMiddle\n          , HAlign HAlignCenter\n          , Font \"-adobe-helvetica-bold-r-*-*-34-*-*-*-*-*-*-*\"\n          , Color \"LimeGreen\"\n          , Display (String \"TEST\")] \n      (const $ return ())\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "module",
        "fct-source": "src/Graphics-XOSD.html",
        "fct-type": "module",
        "title": "XOSD"
      },
      "index": {
        "description": "Tested with GHC GHC Bindings to xosd the on-screen display library xosd is library for displaying an on-screen display like the one on many TVs on your display runXOSD Timeout VAlign VAlignMiddle HAlign HAlignCenter Font adobe-helvetica-bold-r Color LimeGreen Display String TEST const return",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "XOSD",
        "normalized": "",
        "package": "xosd",
        "partial": "XOSD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#t:Attribute",
      "description": {
        "fct-descr": "\u003cp\u003eAttributes that can be set on an XOSD object\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "data",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "data",
        "title": "Attribute"
      },
      "index": {
        "description": "Attributes that can be set on an XOSD object",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "Attribute",
        "normalized": "",
        "package": "xosd",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#t:Format",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of possible display formats\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "data",
        "fct-source": "src/Graphics-XOSD-Base.html#Format",
        "fct-type": "data",
        "title": "Format"
      },
      "index": {
        "description": "The type of possible display formats",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "Format",
        "normalized": "",
        "package": "xosd",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#t:HAlign",
      "description": {
        "fct-descr": "\u003cp\u003eValid screen positions (vertical alignment)\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "data",
        "fct-source": "src/Graphics-XOSD-Base.html#HAlign",
        "fct-type": "data",
        "title": "HAlign"
      },
      "index": {
        "description": "Valid screen positions vertical alignment",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "HAlign",
        "normalized": "",
        "package": "xosd",
        "partial": "HAlign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#t:VAlign",
      "description": {
        "fct-descr": "\u003cp\u003eValid screen positions (vertical alignment)\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "data",
        "fct-source": "src/Graphics-XOSD-Base.html#VAlign",
        "fct-type": "data",
        "title": "VAlign"
      },
      "index": {
        "description": "Valid screen positions vertical alignment",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "VAlign",
        "normalized": "",
        "package": "xosd",
        "partial": "VAlign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#t:XOSD",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract X on-screen display \u003ca\u003eobject\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAn xosd window can be used to display textual or numerical data on a\n X11 display in a unmanaged, shaped window that appears to be\n transparent.  It  provides a similar effect to the on-screen display\n of many televisions and video recorders\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "type",
        "fct-source": "src/Graphics-XOSD-Base.html#XOSD",
        "fct-type": "type",
        "title": "XOSD"
      },
      "index": {
        "description": "An abstract on-screen display object An xosd window can be used to display textual or numerical data on X11 display in unmanaged shaped window that appears to be transparent It provides similar effect to the on-screen display of many televisions and video recorders",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "XOSD",
        "normalized": "",
        "package": "xosd",
        "partial": "XOSD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:BarLength",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "BarLength !Int",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "BarLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "BarLength",
        "normalized": "",
        "package": "xosd",
        "partial": "Bar Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Color",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "Color String",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "Color",
        "normalized": "",
        "package": "xosd",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Display",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "Display !Format",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "Display"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "Display",
        "normalized": "",
        "package": "xosd",
        "partial": "Display",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Font",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "Font String",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "Font"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "Font",
        "normalized": "",
        "package": "xosd",
        "partial": "Font",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:HAlign",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "HAlign !HAlign",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "HAlign"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "HAlign",
        "normalized": "",
        "package": "xosd",
        "partial": "HAlign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:HAlignCenter",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "HAlignCenter",
        "fct-source": "src/Graphics-XOSD-Base.html#HAlign",
        "fct-type": "function",
        "title": "HAlignCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "HAlignCenter",
        "normalized": "",
        "package": "xosd",
        "partial": "HAlign Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:HAlignLeft",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "HAlignLeft",
        "fct-source": "src/Graphics-XOSD-Base.html#HAlign",
        "fct-type": "function",
        "title": "HAlignLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "HAlignLeft",
        "normalized": "",
        "package": "xosd",
        "partial": "HAlign Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:HAlignRight",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "HAlignRight",
        "fct-source": "src/Graphics-XOSD-Base.html#HAlign",
        "fct-type": "function",
        "title": "HAlignRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "HAlignRight",
        "normalized": "",
        "package": "xosd",
        "partial": "HAlign Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:HOffset",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "HOffset !Int",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "HOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "HOffset",
        "normalized": "",
        "package": "xosd",
        "partial": "HOffset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Hidden",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "Hidden",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "Hidden"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "Hidden",
        "normalized": "",
        "package": "xosd",
        "partial": "Hidden",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Lines",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "Lines !Int",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "Lines"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "Lines",
        "normalized": "",
        "package": "xosd",
        "partial": "Lines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:OutlineColor",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "OutlineColor String",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "OutlineColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "OutlineColor",
        "normalized": "",
        "package": "xosd",
        "partial": "Outline Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:OutlineOffset",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "OutlineOffset !Int",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "OutlineOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "OutlineOffset",
        "normalized": "",
        "package": "xosd",
        "partial": "Outline Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Percent",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "Percent !Int",
        "fct-source": "src/Graphics-XOSD-Base.html#Format",
        "fct-type": "function",
        "title": "Percent"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "Percent",
        "normalized": "",
        "package": "xosd",
        "partial": "Percent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Scroll",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "Scroll !Int",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "Scroll"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "Scroll",
        "normalized": "",
        "package": "xosd",
        "partial": "Scroll",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:ShadowColor",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "ShadowColor String",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "ShadowColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "ShadowColor",
        "normalized": "",
        "package": "xosd",
        "partial": "Shadow Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:ShadowOffset",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "ShadowOffset !Int",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "ShadowOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "ShadowOffset",
        "normalized": "",
        "package": "xosd",
        "partial": "Shadow Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Slider",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "Slider !Int",
        "fct-source": "src/Graphics-XOSD-Base.html#Format",
        "fct-type": "function",
        "title": "Slider"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "Slider",
        "normalized": "",
        "package": "xosd",
        "partial": "Slider",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:String",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "String String",
        "fct-source": "src/Graphics-XOSD-Base.html#Format",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "String",
        "normalized": "",
        "package": "xosd",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Timeout",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "Timeout !Int",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "Timeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "Timeout",
        "normalized": "",
        "package": "xosd",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:VAlign",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "VAlign !VAlign",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "VAlign"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "VAlign",
        "normalized": "",
        "package": "xosd",
        "partial": "VAlign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:VAlignBottom",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "VAlignBottom",
        "fct-source": "src/Graphics-XOSD-Base.html#VAlign",
        "fct-type": "function",
        "title": "VAlignBottom"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "VAlignBottom",
        "normalized": "",
        "package": "xosd",
        "partial": "VAlign Bottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:VAlignMiddle",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "VAlignMiddle",
        "fct-source": "src/Graphics-XOSD-Base.html#VAlign",
        "fct-type": "function",
        "title": "VAlignMiddle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "VAlignMiddle",
        "normalized": "",
        "package": "xosd",
        "partial": "VAlign Middle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:VAlignTop",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "VAlignTop",
        "fct-source": "src/Graphics-XOSD-Base.html#VAlign",
        "fct-type": "function",
        "title": "VAlignTop"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "VAlignTop",
        "normalized": "",
        "package": "xosd",
        "partial": "VAlign Top",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:VOffset",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "VOffset !Int",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "VOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "VOffset",
        "normalized": "",
        "package": "xosd",
        "partial": "VOffset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Visible",
      "description": {
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "Visible",
        "fct-source": "src/Graphics-XOSD.html#Attribute",
        "fct-type": "function",
        "title": "Visible"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "Visible",
        "normalized": "",
        "package": "xosd",
        "partial": "Visible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:destroy",
      "description": {
        "fct-descr": "\u003cp\u003exosd_uninit destroys an existing xosd window, freeing the memory.\n This is an unsafe function: as destroying an xosd object twice will\n likely cause bad things to happen, so don't do that.\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#destroy",
        "fct-type": "function",
        "title": "destroy"
      },
      "index": {
        "description": "xosd uninit destroys an existing xosd window freeing the memory This is an unsafe function as destroying an xosd object twice will likely cause bad things to happen so don do that",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "destroy",
        "normalized": "XOSD-\u003eIO()",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:display",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay some content.\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e Int -\u003e Format -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#display",
        "fct-type": "function",
        "title": "display"
      },
      "index": {
        "description": "Display some content",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "display",
        "normalized": "XOSD-\u003eInt-\u003eFormat-\u003eIO()",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eInt-\u003eFormat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:initialize",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new XOSD object with given attributes.\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "[Attribute] -\u003e IO XOSD",
        "fct-source": "src/Graphics-XOSD.html#initialize",
        "fct-type": "function",
        "title": "initialize"
      },
      "index": {
        "description": "Create new XOSD object with given attributes",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "initialize",
        "normalized": "[Attribute]-\u003eIO XOSD",
        "package": "xosd",
        "partial": "",
        "signature": "[Attribute]-\u003eIO XOSD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:runXOSD",
      "description": {
        "fct-descr": "\u003cp\u003eRun some code with an X on-screen display attached.\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "[Attribute] -\u003e (XOSD -\u003e IO ()) -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD.html#runXOSD",
        "fct-type": "function",
        "title": "runXOSD"
      },
      "index": {
        "description": "Run some code with an on-screen display attached",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "runXOSD",
        "normalized": "[Attribute]-\u003e(XOSD-\u003eIO())-\u003eIO()",
        "package": "xosd",
        "partial": "XOSD",
        "signature": "[Attribute]-\u003e(XOSD-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:scroll",
      "description": {
        "fct-descr": "\u003cp\u003eScroll the display\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e Int -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#scroll",
        "fct-type": "function",
        "title": "scroll"
      },
      "index": {
        "description": "Scroll the display",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "scroll",
        "normalized": "XOSD-\u003eInt-\u003eIO()",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eSet a list of attributes\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e [Attribute] -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Set list of attributes",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "set",
        "normalized": "XOSD-\u003e[Attribute]-\u003eIO()",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003e[Attribute]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003eWait until nothing is displayed. Blocks the process until no longer visible.\n\u003c/p\u003e",
        "fct-module": "Graphics.XOSD",
        "fct-package": "xosd",
        "fct-signature": "XOSD -\u003e IO ()",
        "fct-source": "src/Graphics-XOSD-Base.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "Wait until nothing is displayed Blocks the process until no longer visible",
        "hierarchy": "Graphics XOSD",
        "module": "Graphics.XOSD",
        "name": "wait",
        "normalized": "XOSD-\u003eIO()",
        "package": "xosd",
        "partial": "",
        "signature": "XOSD-\u003eIO()"
      }
    }
  }
]