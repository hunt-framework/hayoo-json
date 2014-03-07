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
        "word": "xosd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 6.10, GHC 7.6\n\u003c/p\u003e\u003cp\u003eBindings to xosd, the X on-screen display library\n xosd is a library for displaying an on-screen display (like the one\n on many TVs) on your X display.\n\u003c/p\u003e\u003cp\u003eAn example using the lowest level C layer:\n\u003c/p\u003e\u003cpre\u003e do x \u003c- create 1\n    setFont x \"-adobe-helvetica-bold-r-*-*-34-*-*-*-*-*-*-*\"\n    setColor x \"LimeGreen\"\n    display x 0 (String \"Screen 1\")\n\u003c/pre\u003e\u003cp\u003erunXOSD [Timeout 10, VAlign VAlignMiddle, HAlign HAlignCenter, Font\n \u003ca\u003e-adobe-helvetica-bold-r-*-*-34-*-*-*-*-*-*-*\u003c/a\u003e, Color \u003ca\u003eLimeGreen\u003c/a\u003e,\n Display (String \u003ca\u003eTEST\u003c/a\u003e)] (x -\u003e sequence_ [ display x 0 (String (show\n i)) \u003e\u003e Control.Concurrent.threadDelay (10^4) | i \u003c- [1..] ])\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "Base",
          "package": "xosd",
          "source": "src/Graphics-XOSD-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC GHC Bindings to xosd the on-screen display library xosd is library for displaying an on-screen display like the one on many TVs on your display An example using the lowest level layer do create setFont adobe-helvetica-bold-r setColor LimeGreen display String Screen runXOSD Timeout VAlign VAlignMiddle HAlign HAlignCenter Font adobe-helvetica-bold-r Color LimeGreen Display String TEST sequence display String show Control.Concurrent.threadDelay",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "Base",
          "package": "xosd",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of possible display formats\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "Format",
          "package": "xosd",
          "source": "src/Graphics-XOSD-Base.html#Format",
          "type": "data"
        },
        "index": {
          "description": "The type of possible display formats",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "Format",
          "package": "xosd",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid screen positions (vertical alignment)\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "HAlign",
          "package": "xosd",
          "source": "src/Graphics-XOSD-Base.html#HAlign",
          "type": "data"
        },
        "index": {
          "description": "Valid screen positions vertical alignment",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "HAlign",
          "package": "xosd",
          "partial": "HAlign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#t:HAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid screen positions (vertical alignment)\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "VAlign",
          "package": "xosd",
          "source": "src/Graphics-XOSD-Base.html#VAlign",
          "type": "data"
        },
        "index": {
          "description": "Valid screen positions vertical alignment",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "VAlign",
          "package": "xosd",
          "partial": "VAlign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#t:VAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract X on-screen display \u003ca\u003eobject\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAn xosd window can be used to display textual or numerical data on a\n X11 display in a unmanaged, shaped window that appears to be\n transparent.  It  provides a similar effect to the on-screen display\n of many televisions and video recorders\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "XOSD",
          "package": "xosd",
          "source": "src/Graphics-XOSD-Base.html#XOSD",
          "type": "type"
        },
        "index": {
          "description": "An abstract on-screen display object An xosd window can be used to display textual or numerical data on X11 display in unmanaged shaped window that appears to be transparent It provides similar effect to the on-screen display of many televisions and video recorders",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "XOSD",
          "package": "xosd",
          "partial": "XOSD",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#t:XOSD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "HAlignCenter",
          "package": "xosd",
          "signature": "HAlignCenter",
          "source": "src/Graphics-XOSD-Base.html#HAlign",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:HAlignCenter\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:HAlignCenter\"]"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "HAlignCenter",
          "package": "xosd",
          "partial": "HAlign Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:HAlignCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "HAlignLeft",
          "package": "xosd",
          "signature": "HAlignLeft",
          "source": "src/Graphics-XOSD-Base.html#HAlign",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:HAlignLeft\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:HAlignLeft\"]"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "HAlignLeft",
          "package": "xosd",
          "partial": "HAlign Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:HAlignLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "HAlignRight",
          "package": "xosd",
          "signature": "HAlignRight",
          "source": "src/Graphics-XOSD-Base.html#HAlign",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:HAlignRight\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:HAlignRight\"]"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "HAlignRight",
          "package": "xosd",
          "partial": "HAlign Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:HAlignRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "Percent",
          "package": "xosd",
          "signature": "Percent !Int",
          "source": "src/Graphics-XOSD-Base.html#Format",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:Percent\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Percent\"]"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "Percent",
          "package": "xosd",
          "partial": "Percent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:Percent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "Slider",
          "package": "xosd",
          "signature": "Slider !Int",
          "source": "src/Graphics-XOSD-Base.html#Format",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:Slider\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Slider\"]"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "Slider",
          "package": "xosd",
          "partial": "Slider",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:Slider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "String",
          "package": "xosd",
          "signature": "String String",
          "source": "src/Graphics-XOSD-Base.html#Format",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:String\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:String\"]"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "String",
          "package": "xosd",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "VAlignBottom",
          "package": "xosd",
          "signature": "VAlignBottom",
          "source": "src/Graphics-XOSD-Base.html#VAlign",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:VAlignBottom\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:VAlignBottom\"]"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "VAlignBottom",
          "package": "xosd",
          "partial": "VAlign Bottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:VAlignBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "VAlignMiddle",
          "package": "xosd",
          "signature": "VAlignMiddle",
          "source": "src/Graphics-XOSD-Base.html#VAlign",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:VAlignMiddle\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:VAlignMiddle\"]"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "VAlignMiddle",
          "package": "xosd",
          "partial": "VAlign Middle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:VAlignMiddle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "VAlignTop",
          "package": "xosd",
          "signature": "VAlignTop",
          "source": "src/Graphics-XOSD-Base.html#VAlign",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:VAlignTop\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:VAlignTop\"]"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "VAlignTop",
          "package": "xosd",
          "partial": "VAlign Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:VAlignTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new xosd window.\n The argument is the maximum number of lines of text that the window can display.\n Throw an exception on failure.\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "create",
          "package": "xosd",
          "signature": "Int -\u003e IO XOSD",
          "source": "src/Graphics-XOSD-Base.html#create",
          "type": "function"
        },
        "index": {
          "description": "Create new xosd window The argument is the maximum number of lines of text that the window can display Throw an exception on failure",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "create",
          "normalized": "Int-\u003eIO XOSD",
          "package": "xosd",
          "signature": "Int-\u003eIO XOSD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003exosd_uninit destroys an existing xosd window, freeing the memory.\n This is an unsafe function: as destroying an xosd object twice will\n likely cause bad things to happen, so don't do that.\n\u003c/p\u003e",
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "destroy",
          "package": "xosd",
          "signature": "XOSD -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#destroy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:destroy\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:destroy\"]"
        },
        "index": {
          "description": "xosd uninit destroys an existing xosd window freeing the memory This is an unsafe function as destroying an xosd object twice will likely cause bad things to happen so don do that",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "destroy",
          "normalized": "XOSD-\u003eIO()",
          "package": "xosd",
          "signature": "XOSD-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:destroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay some content.\n\u003c/p\u003e",
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "display",
          "package": "xosd",
          "signature": "XOSD -\u003e Int -\u003e Format -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#display",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:display\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:display\"]"
        },
        "index": {
          "description": "Display some content",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "display",
          "normalized": "XOSD-\u003eInt-\u003eFormat-\u003eIO()",
          "package": "xosd",
          "signature": "XOSD-\u003eInt-\u003eFormat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the maximum number of lines allowed\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "getNumberOfLines",
          "package": "xosd",
          "signature": "XOSD -\u003e IO Int",
          "source": "src/Graphics-XOSD-Base.html#getNumberOfLines",
          "type": "function"
        },
        "index": {
          "description": "Get the maximum number of lines allowed",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "getNumberOfLines",
          "normalized": "XOSD-\u003eIO Int",
          "package": "xosd",
          "partial": "Number Of Lines",
          "signature": "XOSD-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:getNumberOfLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "isOnScreen",
          "package": "xosd",
          "signature": "XOSD -\u003e IO Bool",
          "source": "src/Graphics-XOSD-Base.html#isOnScreen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "isOnScreen",
          "normalized": "XOSD-\u003eIO Bool",
          "package": "xosd",
          "partial": "On Screen",
          "signature": "XOSD-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:isOnScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScroll the display\n\u003c/p\u003e",
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "scroll",
          "package": "xosd",
          "signature": "XOSD -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#scroll",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:scroll\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:scroll\"]"
        },
        "index": {
          "description": "Scroll the display",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "scroll",
          "normalized": "XOSD-\u003eInt-\u003eIO()",
          "package": "xosd",
          "signature": "XOSD-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:scroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet length of percentage and slider bar\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "setBarLength",
          "package": "xosd",
          "signature": "XOSD -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setBarLength",
          "type": "function"
        },
        "index": {
          "description": "Set length of percentage and slider bar",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setBarLength",
          "normalized": "XOSD-\u003eInt-\u003eIO()",
          "package": "xosd",
          "partial": "Bar Length",
          "signature": "XOSD-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setBarLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the colour of the display\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "setColor",
          "package": "xosd",
          "signature": "XOSD -\u003e String -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setColor",
          "type": "function"
        },
        "index": {
          "description": "Change the colour of the display",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setColor",
          "normalized": "XOSD-\u003eString-\u003eIO()",
          "package": "xosd",
          "partial": "Color",
          "signature": "XOSD-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the text-display font\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "setFont",
          "package": "xosd",
          "signature": "XOSD -\u003e String -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setFont",
          "type": "function"
        },
        "index": {
          "description": "Change the text-display font",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setFont",
          "normalized": "XOSD-\u003eString-\u003eIO()",
          "package": "xosd",
          "partial": "Font",
          "signature": "XOSD-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "setHAlign",
          "package": "xosd",
          "signature": "XOSD -\u003e HAlign -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setHAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setHAlign",
          "normalized": "XOSD-\u003eHAlign-\u003eIO()",
          "package": "xosd",
          "partial": "HAlign",
          "signature": "XOSD-\u003eHAlign-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setHAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHide the display\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "setHidden",
          "package": "xosd",
          "signature": "XOSD -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setHidden",
          "type": "function"
        },
        "index": {
          "description": "Hide the display",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setHidden",
          "normalized": "XOSD-\u003eIO()",
          "package": "xosd",
          "partial": "Hidden",
          "signature": "XOSD-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the number of pixels the display is offset from the position\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "setHorizontalOffset",
          "package": "xosd",
          "signature": "XOSD -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setHorizontalOffset",
          "type": "function"
        },
        "index": {
          "description": "Change the number of pixels the display is offset from the position",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setHorizontalOffset",
          "normalized": "XOSD-\u003eInt-\u003eIO()",
          "package": "xosd",
          "partial": "Horizontal Offset",
          "signature": "XOSD-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setHorizontalOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the colour of the outline\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "setOutlineColor",
          "package": "xosd",
          "signature": "XOSD -\u003e String -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setOutlineColor",
          "type": "function"
        },
        "index": {
          "description": "Change the colour of the outline",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setOutlineColor",
          "normalized": "XOSD-\u003eString-\u003eIO()",
          "package": "xosd",
          "partial": "Outline Color",
          "signature": "XOSD-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setOutlineColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the offset of the text outline-\n The outline is drawn over the shadow.\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "setOutlineOffset",
          "package": "xosd",
          "signature": "XOSD -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setOutlineOffset",
          "type": "function"
        },
        "index": {
          "description": "Change the offset of the text outline The outline is drawn over the shadow",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setOutlineOffset",
          "normalized": "XOSD-\u003eInt-\u003eIO()",
          "package": "xosd",
          "partial": "Outline Offset",
          "signature": "XOSD-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setOutlineOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the colour of the shadow\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "setShadowColor",
          "package": "xosd",
          "signature": "XOSD -\u003e String -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setShadowColor",
          "type": "function"
        },
        "index": {
          "description": "Change the colour of the shadow",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setShadowColor",
          "normalized": "XOSD-\u003eString-\u003eIO()",
          "package": "xosd",
          "partial": "Shadow Color",
          "signature": "XOSD-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setShadowColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the offset of the text shadow\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "setShadowOffset",
          "package": "xosd",
          "signature": "XOSD -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setShadowOffset",
          "type": "function"
        },
        "index": {
          "description": "Change the offset of the text shadow",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setShadowOffset",
          "normalized": "XOSD-\u003eInt-\u003eIO()",
          "package": "xosd",
          "partial": "Shadow Offset",
          "signature": "XOSD-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setShadowOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the time before display is hidden.\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "setTimeout",
          "package": "xosd",
          "signature": "XOSD -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setTimeout",
          "type": "function"
        },
        "index": {
          "description": "Change the time before display is hidden",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setTimeout",
          "normalized": "XOSD-\u003eInt-\u003eIO()",
          "package": "xosd",
          "partial": "Timeout",
          "signature": "XOSD-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "setVAlign",
          "package": "xosd",
          "signature": "XOSD -\u003e VAlign -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setVAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setVAlign",
          "normalized": "XOSD-\u003eVAlign-\u003eIO()",
          "package": "xosd",
          "partial": "VAlign",
          "signature": "XOSD-\u003eVAlign-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setVAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the number of pixels the display is offset from the position\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "setVerticalOffset",
          "package": "xosd",
          "signature": "XOSD -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setVerticalOffset",
          "type": "function"
        },
        "index": {
          "description": "Change the number of pixels the display is offset from the position",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setVerticalOffset",
          "normalized": "XOSD-\u003eInt-\u003eIO()",
          "package": "xosd",
          "partial": "Vertical Offset",
          "signature": "XOSD-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setVerticalOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the display after being hidden\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "setVisible",
          "package": "xosd",
          "signature": "XOSD -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#setVisible",
          "type": "function"
        },
        "index": {
          "description": "Show the display after being hidden",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "setVisible",
          "normalized": "XOSD-\u003eIO()",
          "package": "xosd",
          "partial": "Visible",
          "signature": "XOSD-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:setVisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate abstract to concrete formatting types\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "toXOSDFormat",
          "package": "xosd",
          "signature": "Format -\u003e XOSD_Format",
          "source": "src/Graphics-XOSD-Base.html#toXOSDFormat",
          "type": "function"
        },
        "index": {
          "description": "Translate abstract to concrete formatting types",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "toXOSDFormat",
          "normalized": "Format-\u003eXOSD_Format",
          "package": "xosd",
          "partial": "XOSDFormat",
          "signature": "Format-\u003eXOSD_Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:toXOSDFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate abstract to concrete formatting types\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "toXOSDHAlign",
          "package": "xosd",
          "signature": "HAlign -\u003e XOSD_HAlign",
          "source": "src/Graphics-XOSD-Base.html#toXOSDHAlign",
          "type": "function"
        },
        "index": {
          "description": "Translate abstract to concrete formatting types",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "toXOSDHAlign",
          "normalized": "HAlign-\u003eXOSD_HAlign",
          "package": "xosd",
          "partial": "XOSDHAlign",
          "signature": "HAlign-\u003eXOSD_HAlign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:toXOSDHAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate abstract to concrete formatting types\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "toXOSDVAlign",
          "package": "xosd",
          "signature": "VAlign -\u003e XOSD_VAlign",
          "source": "src/Graphics-XOSD-Base.html#toXOSDVAlign",
          "type": "function"
        },
        "index": {
          "description": "Translate abstract to concrete formatting types",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "toXOSDVAlign",
          "normalized": "VAlign-\u003eXOSD_VAlign",
          "package": "xosd",
          "partial": "XOSDVAlign",
          "signature": "VAlign-\u003eXOSD_VAlign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:toXOSDVAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait until nothing is displayed. Blocks the process until no longer visible.\n\u003c/p\u003e",
          "module": "[\"Graphics.XOSD.Base\",\"Graphics.XOSD\"]",
          "name": "wait",
          "package": "xosd",
          "signature": "XOSD -\u003e IO ()",
          "source": "src/Graphics-XOSD-Base.html#wait",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:wait\",\"http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:wait\"]"
        },
        "index": {
          "description": "Wait until nothing is displayed Blocks the process until no longer visible",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "wait",
          "normalized": "XOSD-\u003eIO()",
          "package": "xosd",
          "signature": "XOSD-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an error (encapsulated in Either) with the current String in \u003ccode\u003e\u003ca\u003exosd_error\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "xosdEitherIf",
          "package": "xosd",
          "signature": "(a -\u003e Bool) -\u003e IO a -\u003e IO (Either String a)",
          "source": "src/Graphics-XOSD-Base.html#xosdEitherIf",
          "type": "function"
        },
        "index": {
          "description": "Throw an error encapsulated in Either with the current String in xosd error",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosdEitherIf",
          "normalized": "(a-\u003eBool)-\u003eIO a-\u003eIO(Either String a)",
          "package": "xosd",
          "partial": "Either If",
          "signature": "(a-\u003eBool)-\u003eIO a-\u003eIO(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosdEitherIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an error with the current String in \u003ccode\u003e\u003ca\u003exosd_error\u003c/a\u003e\u003c/code\u003e unconditionally\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "xosdError",
          "package": "xosd",
          "signature": "IO a",
          "source": "src/Graphics-XOSD-Base.html#xosdError",
          "type": "function"
        },
        "index": {
          "description": "Throw an error with the current String in xosd error unconditionally",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosdError",
          "package": "xosd",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosdError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an error with the current String in \u003ccode\u003e\u003ca\u003exosd_error\u003c/a\u003e\u003c/code\u003e if predicate is True\n when applied to result of action.\n\u003c/p\u003e",
          "module": "Graphics.XOSD.Base",
          "name": "xosdErrorIf",
          "package": "xosd",
          "signature": "(a -\u003e Bool) -\u003e IO a -\u003e IO a",
          "source": "src/Graphics-XOSD-Base.html#xosdErrorIf",
          "type": "function"
        },
        "index": {
          "description": "Throw an error with the current String in xosd error if predicate is True when applied to result of action",
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosdErrorIf",
          "normalized": "(a-\u003eBool)-\u003eIO a-\u003eIO a",
          "package": "xosd",
          "partial": "Error If",
          "signature": "(a-\u003eBool)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosdErrorIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_create",
          "package": "xosd",
          "signature": "CInt -\u003e IO XOSD",
          "source": "src/Graphics-XOSD-Base.html#xosd_create",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_create",
          "normalized": "CInt-\u003eIO XOSD",
          "package": "xosd",
          "signature": "CInt-\u003eIO XOSD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_destroy",
          "package": "xosd",
          "signature": "XOSD -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_destroy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_destroy",
          "normalized": "XOSD-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_destroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_display_percent",
          "package": "xosd",
          "signature": "XOSD -\u003e CInt -\u003e XOSD_Format -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_display_percent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_display_percent",
          "normalized": "XOSD-\u003eCInt-\u003eXOSD_Format-\u003eCInt-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCInt-\u003eXOSD_Format-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_display_percent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_display_slider",
          "package": "xosd",
          "signature": "XOSD -\u003e CInt -\u003e XOSD_Format -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_display_slider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_display_slider",
          "normalized": "XOSD-\u003eCInt-\u003eXOSD_Format-\u003eCInt-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCInt-\u003eXOSD_Format-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_display_slider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_display_string",
          "package": "xosd",
          "signature": "XOSD -\u003e CInt -\u003e XOSD_Format -\u003e CString -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_display_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_display_string",
          "normalized": "XOSD-\u003eCInt-\u003eXOSD_Format-\u003eCString-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCInt-\u003eXOSD_Format-\u003eCString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_display_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_error",
          "package": "xosd",
          "signature": "IO CString",
          "source": "src/Graphics-XOSD-Base.html#xosd_error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_error",
          "package": "xosd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_get_colour",
          "package": "xosd",
          "signature": "XOSD -\u003e Ptr CInt -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_get_colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_get_colour",
          "normalized": "XOSD-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_get_colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_get_number_lines",
          "package": "xosd",
          "signature": "XOSD -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_get_number_lines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_get_number_lines",
          "normalized": "XOSD-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_get_number_lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_hide",
          "package": "xosd",
          "signature": "XOSD -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_hide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_hide",
          "normalized": "XOSD-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_hide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_is_onscreen",
          "package": "xosd",
          "signature": "XOSD -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_is_onscreen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_is_onscreen",
          "normalized": "XOSD-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_is_onscreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_scroll",
          "package": "xosd",
          "signature": "XOSD -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_scroll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_scroll",
          "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_scroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_align",
          "package": "xosd",
          "signature": "XOSD -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_set_align",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_align",
          "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_bar_length",
          "package": "xosd",
          "signature": "XOSD -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_set_bar_length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_bar_length",
          "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_bar_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_colour",
          "package": "xosd",
          "signature": "XOSD -\u003e CString -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_set_colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_colour",
          "normalized": "XOSD-\u003eCString-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_font",
          "package": "xosd",
          "signature": "XOSD -\u003e CString -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_set_font",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_font",
          "normalized": "XOSD-\u003eCString-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_horizontal_offset",
          "package": "xosd",
          "signature": "XOSD -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_set_horizontal_offset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_horizontal_offset",
          "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_horizontal_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_outline_colour",
          "package": "xosd",
          "signature": "XOSD -\u003e CString -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_set_outline_colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_outline_colour",
          "normalized": "XOSD-\u003eCString-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_outline_colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_outline_offset",
          "package": "xosd",
          "signature": "XOSD -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_set_outline_offset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_outline_offset",
          "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_outline_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_pos",
          "package": "xosd",
          "signature": "XOSD -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_set_pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_pos",
          "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_shadow_colour",
          "package": "xosd",
          "signature": "XOSD -\u003e CString -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_set_shadow_colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_shadow_colour",
          "normalized": "XOSD-\u003eCString-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_shadow_colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_shadow_offset",
          "package": "xosd",
          "signature": "XOSD -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_set_shadow_offset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_shadow_offset",
          "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_shadow_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_timeout",
          "package": "xosd",
          "signature": "XOSD -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_set_timeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_timeout",
          "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_vertical_offset",
          "package": "xosd",
          "signature": "XOSD -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_set_vertical_offset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_set_vertical_offset",
          "normalized": "XOSD-\u003eCInt-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_set_vertical_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_show",
          "package": "xosd",
          "signature": "XOSD -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_show",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_show",
          "normalized": "XOSD-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD.Base",
          "name": "xosd_wait_until_no_display",
          "package": "xosd",
          "signature": "XOSD -\u003e IO CInt",
          "source": "src/Graphics-XOSD-Base.html#xosd_wait_until_no_display",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD Base",
          "module": "Graphics.XOSD.Base",
          "name": "xosd_wait_until_no_display",
          "normalized": "XOSD-\u003eIO CInt",
          "package": "xosd",
          "signature": "XOSD-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD-Base.html#v:xosd_wait_until_no_display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with: GHC 6.10, GHC 7.6\n\u003c/p\u003e\u003cp\u003eBindings to xosd, the X on-screen display library\n xosd is a library for displaying an on-screen display (like the one\n on many TVs) on your X display.\n\u003c/p\u003e\u003cpre\u003e runXOSD [ Timeout 3\n          , VAlign VAlignMiddle\n          , HAlign HAlignCenter\n          , Font \"-adobe-helvetica-bold-r-*-*-34-*-*-*-*-*-*-*\"\n          , Color \"LimeGreen\"\n          , Display (String \"TEST\")] \n      (const $ return ())\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Graphics.XOSD",
          "name": "XOSD",
          "package": "xosd",
          "source": "src/Graphics-XOSD.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC GHC Bindings to xosd the on-screen display library xosd is library for displaying an on-screen display like the one on many TVs on your display runXOSD Timeout VAlign VAlignMiddle HAlign HAlignCenter Font adobe-helvetica-bold-r Color LimeGreen Display String TEST const return",
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "XOSD",
          "package": "xosd",
          "partial": "XOSD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttributes that can be set on an XOSD object\n\u003c/p\u003e",
          "module": "Graphics.XOSD",
          "name": "Attribute",
          "package": "xosd",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "data"
        },
        "index": {
          "description": "Attributes that can be set on an XOSD object",
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "Attribute",
          "package": "xosd",
          "partial": "Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of possible display formats\n\u003c/p\u003e",
          "module": "Graphics.XOSD",
          "name": "Format",
          "package": "xosd",
          "source": "src/Graphics-XOSD-Base.html#Format",
          "type": "data"
        },
        "index": {
          "description": "The type of possible display formats",
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "Format",
          "package": "xosd",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid screen positions (vertical alignment)\n\u003c/p\u003e",
          "module": "Graphics.XOSD",
          "name": "HAlign",
          "package": "xosd",
          "source": "src/Graphics-XOSD-Base.html#HAlign",
          "type": "data"
        },
        "index": {
          "description": "Valid screen positions vertical alignment",
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "HAlign",
          "package": "xosd",
          "partial": "HAlign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#t:HAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid screen positions (vertical alignment)\n\u003c/p\u003e",
          "module": "Graphics.XOSD",
          "name": "VAlign",
          "package": "xosd",
          "source": "src/Graphics-XOSD-Base.html#VAlign",
          "type": "data"
        },
        "index": {
          "description": "Valid screen positions vertical alignment",
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "VAlign",
          "package": "xosd",
          "partial": "VAlign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#t:VAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract X on-screen display \u003ca\u003eobject\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAn xosd window can be used to display textual or numerical data on a\n X11 display in a unmanaged, shaped window that appears to be\n transparent.  It  provides a similar effect to the on-screen display\n of many televisions and video recorders\n\u003c/p\u003e",
          "module": "Graphics.XOSD",
          "name": "XOSD",
          "package": "xosd",
          "source": "src/Graphics-XOSD-Base.html#XOSD",
          "type": "type"
        },
        "index": {
          "description": "An abstract on-screen display object An xosd window can be used to display textual or numerical data on X11 display in unmanaged shaped window that appears to be transparent It provides similar effect to the on-screen display of many televisions and video recorders",
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "XOSD",
          "package": "xosd",
          "partial": "XOSD",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#t:XOSD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "BarLength",
          "package": "xosd",
          "signature": "BarLength !Int",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "BarLength",
          "package": "xosd",
          "partial": "Bar Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:BarLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "Color",
          "package": "xosd",
          "signature": "Color String",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "Color",
          "package": "xosd",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "Display",
          "package": "xosd",
          "signature": "Display !Format",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "Display",
          "package": "xosd",
          "partial": "Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "Font",
          "package": "xosd",
          "signature": "Font String",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "Font",
          "package": "xosd",
          "partial": "Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "HAlign",
          "package": "xosd",
          "signature": "HAlign !HAlign",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "HAlign",
          "package": "xosd",
          "partial": "HAlign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:HAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "HOffset",
          "package": "xosd",
          "signature": "HOffset !Int",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "HOffset",
          "package": "xosd",
          "partial": "HOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:HOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "Hidden",
          "package": "xosd",
          "signature": "Hidden",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "Hidden",
          "package": "xosd",
          "partial": "Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Hidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "Lines",
          "package": "xosd",
          "signature": "Lines !Int",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "Lines",
          "package": "xosd",
          "partial": "Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "OutlineColor",
          "package": "xosd",
          "signature": "OutlineColor String",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "OutlineColor",
          "package": "xosd",
          "partial": "Outline Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:OutlineColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "OutlineOffset",
          "package": "xosd",
          "signature": "OutlineOffset !Int",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "OutlineOffset",
          "package": "xosd",
          "partial": "Outline Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:OutlineOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "Scroll",
          "package": "xosd",
          "signature": "Scroll !Int",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "Scroll",
          "package": "xosd",
          "partial": "Scroll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Scroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "ShadowColor",
          "package": "xosd",
          "signature": "ShadowColor String",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "ShadowColor",
          "package": "xosd",
          "partial": "Shadow Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:ShadowColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "ShadowOffset",
          "package": "xosd",
          "signature": "ShadowOffset !Int",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "ShadowOffset",
          "package": "xosd",
          "partial": "Shadow Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:ShadowOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "Timeout",
          "package": "xosd",
          "signature": "Timeout !Int",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "Timeout",
          "package": "xosd",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "VAlign",
          "package": "xosd",
          "signature": "VAlign !VAlign",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "VAlign",
          "package": "xosd",
          "partial": "VAlign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:VAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "VOffset",
          "package": "xosd",
          "signature": "VOffset !Int",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "VOffset",
          "package": "xosd",
          "partial": "VOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:VOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XOSD",
          "name": "Visible",
          "package": "xosd",
          "signature": "Visible",
          "source": "src/Graphics-XOSD.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "Visible",
          "package": "xosd",
          "partial": "Visible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:Visible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new XOSD object with given attributes.\n\u003c/p\u003e",
          "module": "Graphics.XOSD",
          "name": "initialize",
          "package": "xosd",
          "signature": "[Attribute] -\u003e IO XOSD",
          "source": "src/Graphics-XOSD.html#initialize",
          "type": "function"
        },
        "index": {
          "description": "Create new XOSD object with given attributes",
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "initialize",
          "normalized": "[Attribute]-\u003eIO XOSD",
          "package": "xosd",
          "signature": "[Attribute]-\u003eIO XOSD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun some code with an X on-screen display attached.\n\u003c/p\u003e",
          "module": "Graphics.XOSD",
          "name": "runXOSD",
          "package": "xosd",
          "signature": "[Attribute] -\u003e (XOSD -\u003e IO ()) -\u003e IO ()",
          "source": "src/Graphics-XOSD.html#runXOSD",
          "type": "function"
        },
        "index": {
          "description": "Run some code with an on-screen display attached",
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "runXOSD",
          "normalized": "[Attribute]-\u003e(XOSD-\u003eIO())-\u003eIO()",
          "package": "xosd",
          "partial": "XOSD",
          "signature": "[Attribute]-\u003e(XOSD-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:runXOSD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a list of attributes\n\u003c/p\u003e",
          "module": "Graphics.XOSD",
          "name": "set",
          "package": "xosd",
          "signature": "XOSD -\u003e [Attribute] -\u003e IO ()",
          "source": "src/Graphics-XOSD.html#set",
          "type": "function"
        },
        "index": {
          "description": "Set list of attributes",
          "hierarchy": "Graphics XOSD",
          "module": "Graphics.XOSD",
          "name": "set",
          "normalized": "XOSD-\u003e[Attribute]-\u003eIO()",
          "package": "xosd",
          "signature": "XOSD-\u003e[Attribute]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xosd/docs/Graphics-XOSD.html#v:set"
      }
    }
  ]
]