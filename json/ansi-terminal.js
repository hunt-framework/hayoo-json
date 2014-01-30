[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides ANSI terminal support for Windows and ANSI terminal software running on a Unix-like operating system.\n\u003c/p\u003e\u003cp\u003eThe ANSI escape codes are described at \u003ca\u003ehttp://en.wikipedia.org/wiki/ANSI_escape_code\u003c/a\u003e and provide a rich range of\n functionality for terminal control, which includes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Colored text output, with control over both foreground and background colors\n\u003c/li\u003e\u003cli\u003e Hiding or showing the cursor\n\u003c/li\u003e\u003cli\u003e Moving the cursor around\n\u003c/li\u003e\u003cli\u003e Clearing parts of the screen\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe most frequently used parts of this ANSI command set are exposed with a platform independent interface by\n this module.  Every function exported comes in three flavours:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Vanilla: has an \u003ccode\u003eIO ()\u003c/code\u003e type and doesn't take a \u003ccode\u003eHandle\u003c/code\u003e.  This just outputs the ANSI command directly on\n    to the terminal corresponding to stdout.  Commands issued like this should work as you expect on both Windows\n    and Unix.\n\u003c/li\u003e\u003cli\u003e Chocolate: has an \u003ccode\u003eIO ()\u003c/code\u003e type but takes a \u003ccode\u003eHandle\u003c/code\u003e.  This outputs the ANSI command on the terminal corresponding\n    to the supplied handle.  Commands issued like this should also work as your expect on both Windows and Unix.\n\u003c/li\u003e\u003cli\u003e Strawberry: has a \u003ccode\u003eString\u003c/code\u003e type and just consists of an escape code which can be added to any other bit of text\n    before being output.  This version of the API is often convenient to use, but due to fundamental limitations in\n    Windows ANSI terminal support will only work on Unix.  On Windows these codes will always be the empty string,\n    so it is possible to use them portably for e.g. coloring console output on the understanding that you will only\n    see colors if you are running on a Unix-like operating system.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "module",
        "fct-source": "src/System-Console-ANSI.html",
        "fct-type": "module",
        "title": "ANSI"
      },
      "index": {
        "description": "Provides ANSI terminal support for Windows and ANSI terminal software running on Unix-like operating system The ANSI escape codes are described at http en.wikipedia.org wiki ANSI escape code and provide rich range of functionality for terminal control which includes Colored text output with control over both foreground and background colors Hiding or showing the cursor Moving the cursor around Clearing parts of the screen The most frequently used parts of this ANSI command set are exposed with platform independent interface by this module Every function exported comes in three flavours Vanilla has an IO type and doesn take Handle This just outputs the ANSI command directly on to the terminal corresponding to stdout Commands issued like this should work as you expect on both Windows and Unix Chocolate has an IO type but takes Handle This outputs the ANSI command on the terminal corresponding to the supplied handle Commands issued like this should also work as your expect on both Windows and Unix Strawberry has String type and just consists of an escape code which can be added to any other bit of text before being output This version of the API is often convenient to use but due to fundamental limitations in Windows ANSI terminal support will only work on Unix On Windows these codes will always be the empty string so it is possible to use them portably for e.g coloring console output on the understanding that you will only see colors if you are running on Unix-like operating system",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "ANSI",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "ANSI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:BlinkSpeed",
      "description": {
        "fct-descr": "\u003cp\u003eANSI blink speeds: values other than \u003ccode\u003e\u003ca\u003eNoBlink\u003c/a\u003e\u003c/code\u003e are not widely supported\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ANSI-Common.html#BlinkSpeed",
        "fct-type": "data",
        "title": "BlinkSpeed"
      },
      "index": {
        "description": "ANSI blink speeds values other than NoBlink are not widely supported",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "BlinkSpeed",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Blink Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eANSI colors: come in various intensities, which are controlled by \u003ccode\u003e\u003ca\u003eColorIntensity\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ANSI-Common.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "ANSI colors come in various intensities which are controlled by ColorIntensity",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Color",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:ColorIntensity",
      "description": {
        "fct-descr": "\u003cp\u003eANSI colors come in two intensities\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ANSI-Common.html#ColorIntensity",
        "fct-type": "data",
        "title": "ColorIntensity"
      },
      "index": {
        "description": "ANSI colors come in two intensities",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "ColorIntensity",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Color Intensity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:ConsoleIntensity",
      "description": {
        "fct-descr": "\u003cp\u003eANSI general console intensity: usually treated as setting the font style (e.g. \u003ccode\u003e\u003ca\u003eBoldIntensity\u003c/a\u003e\u003c/code\u003e causes text to be bold)\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ANSI-Common.html#ConsoleIntensity",
        "fct-type": "data",
        "title": "ConsoleIntensity"
      },
      "index": {
        "description": "ANSI general console intensity usually treated as setting the font style e.g BoldIntensity causes text to be bold",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "ConsoleIntensity",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Console Intensity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:ConsoleLayer",
      "description": {
        "fct-descr": "\u003cp\u003eANSI colors can be set on two different layers\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ANSI-Common.html#ConsoleLayer",
        "fct-type": "data",
        "title": "ConsoleLayer"
      },
      "index": {
        "description": "ANSI colors can be set on two different layers",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "ConsoleLayer",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Console Layer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:SGR",
      "description": {
        "fct-descr": "\u003cp\u003eANSI Select Graphic Rendition command\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ANSI-Common.html#SGR",
        "fct-type": "data",
        "title": "SGR"
      },
      "index": {
        "description": "ANSI Select Graphic Rendition command",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "SGR",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "SGR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:Underlining",
      "description": {
        "fct-descr": "\u003cp\u003eANSI text underlining\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "data",
        "fct-source": "src/System-Console-ANSI-Common.html#Underlining",
        "fct-type": "data",
        "title": "Underlining"
      },
      "index": {
        "description": "ANSI text underlining",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Underlining",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Underlining",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Background",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Background",
        "fct-source": "src/System-Console-ANSI-Common.html#ConsoleLayer",
        "fct-type": "function",
        "title": "Background"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Background",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Background",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Black",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Black",
        "fct-source": "src/System-Console-ANSI-Common.html#Color",
        "fct-type": "function",
        "title": "Black"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Black",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Black",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Blue",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Blue",
        "fct-source": "src/System-Console-ANSI-Common.html#Color",
        "fct-type": "function",
        "title": "Blue"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Blue",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:BoldIntensity",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "BoldIntensity",
        "fct-source": "src/System-Console-ANSI-Common.html#ConsoleIntensity",
        "fct-type": "function",
        "title": "BoldIntensity"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "BoldIntensity",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Bold Intensity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Cyan",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Cyan",
        "fct-source": "src/System-Console-ANSI-Common.html#Color",
        "fct-type": "function",
        "title": "Cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Cyan",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Cyan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:DoubleUnderline",
      "description": {
        "fct-descr": "\u003cp\u003eNot widely supported\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "DoubleUnderline",
        "fct-source": "src/System-Console-ANSI-Common.html#Underlining",
        "fct-type": "function",
        "title": "DoubleUnderline"
      },
      "index": {
        "description": "Not widely supported",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "DoubleUnderline",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Double Underline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Dull",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Dull",
        "fct-source": "src/System-Console-ANSI-Common.html#ColorIntensity",
        "fct-type": "function",
        "title": "Dull"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Dull",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Dull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:FaintIntensity",
      "description": {
        "fct-descr": "\u003cp\u003eNot widely supported: sometimes treated as concealing text\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "FaintIntensity",
        "fct-source": "src/System-Console-ANSI-Common.html#ConsoleIntensity",
        "fct-type": "function",
        "title": "FaintIntensity"
      },
      "index": {
        "description": "Not widely supported sometimes treated as concealing text",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "FaintIntensity",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Faint Intensity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Foreground",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Foreground",
        "fct-source": "src/System-Console-ANSI-Common.html#ConsoleLayer",
        "fct-type": "function",
        "title": "Foreground"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Foreground",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Foreground",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Green",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Green",
        "fct-source": "src/System-Console-ANSI-Common.html#Color",
        "fct-type": "function",
        "title": "Green"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Green",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Magenta",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Magenta",
        "fct-source": "src/System-Console-ANSI-Common.html#Color",
        "fct-type": "function",
        "title": "Magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Magenta",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Magenta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:NoBlink",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "NoBlink",
        "fct-source": "src/System-Console-ANSI-Common.html#BlinkSpeed",
        "fct-type": "function",
        "title": "NoBlink"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "NoBlink",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "No Blink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:NoUnderline",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "NoUnderline",
        "fct-source": "src/System-Console-ANSI-Common.html#Underlining",
        "fct-type": "function",
        "title": "NoUnderline"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "NoUnderline",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "No Underline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:NormalIntensity",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "NormalIntensity",
        "fct-source": "src/System-Console-ANSI-Common.html#ConsoleIntensity",
        "fct-type": "function",
        "title": "NormalIntensity"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "NormalIntensity",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Normal Intensity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:RapidBlink",
      "description": {
        "fct-descr": "\u003cp\u003eMore than 150 blinks per minute\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "RapidBlink",
        "fct-source": "src/System-Console-ANSI-Common.html#BlinkSpeed",
        "fct-type": "function",
        "title": "RapidBlink"
      },
      "index": {
        "description": "More than blinks per minute",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "RapidBlink",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Rapid Blink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Red",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Red",
        "fct-source": "src/System-Console-ANSI-Common.html#Color",
        "fct-type": "function",
        "title": "Red"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Red",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Reset",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Reset",
        "fct-source": "src/System-Console-ANSI-Common.html#SGR",
        "fct-type": "function",
        "title": "Reset"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Reset",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Reset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetBlinkSpeed",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "SetBlinkSpeed BlinkSpeed",
        "fct-source": "src/System-Console-ANSI-Common.html#SGR",
        "fct-type": "function",
        "title": "SetBlinkSpeed"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "SetBlinkSpeed",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Set Blink Speed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetColor",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "SetColor ConsoleLayer ColorIntensity Color",
        "fct-source": "src/System-Console-ANSI-Common.html#SGR",
        "fct-type": "function",
        "title": "SetColor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "SetColor",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Set Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetConsoleIntensity",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "SetConsoleIntensity ConsoleIntensity",
        "fct-source": "src/System-Console-ANSI-Common.html#SGR",
        "fct-type": "function",
        "title": "SetConsoleIntensity"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "SetConsoleIntensity",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Set Console Intensity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetItalicized",
      "description": {
        "fct-descr": "\u003cp\u003eNot widely supported: sometimes treated as swapping foreground and background\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "SetItalicized Bool",
        "fct-source": "src/System-Console-ANSI-Common.html#SGR",
        "fct-type": "function",
        "title": "SetItalicized"
      },
      "index": {
        "description": "Not widely supported sometimes treated as swapping foreground and background",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "SetItalicized",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Set Italicized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetSwapForegroundBackground",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "SetSwapForegroundBackground Bool",
        "fct-source": "src/System-Console-ANSI-Common.html#SGR",
        "fct-type": "function",
        "title": "SetSwapForegroundBackground"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "SetSwapForegroundBackground",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Set Swap Foreground Background",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetUnderlining",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "SetUnderlining Underlining",
        "fct-source": "src/System-Console-ANSI-Common.html#SGR",
        "fct-type": "function",
        "title": "SetUnderlining"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "SetUnderlining",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Set Underlining",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetVisible",
      "description": {
        "fct-descr": "\u003cp\u003eNot widely supported\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "SetVisible Bool",
        "fct-source": "src/System-Console-ANSI-Common.html#SGR",
        "fct-type": "function",
        "title": "SetVisible"
      },
      "index": {
        "description": "Not widely supported",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "SetVisible",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Set Visible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SingleUnderline",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "SingleUnderline",
        "fct-source": "src/System-Console-ANSI-Common.html#Underlining",
        "fct-type": "function",
        "title": "SingleUnderline"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "SingleUnderline",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Single Underline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SlowBlink",
      "description": {
        "fct-descr": "\u003cp\u003eLess than 150 blinks per minute\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "SlowBlink",
        "fct-source": "src/System-Console-ANSI-Common.html#BlinkSpeed",
        "fct-type": "function",
        "title": "SlowBlink"
      },
      "index": {
        "description": "Less than blinks per minute",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "SlowBlink",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Slow Blink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Vivid",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Vivid",
        "fct-source": "src/System-Console-ANSI-Common.html#ColorIntensity",
        "fct-type": "function",
        "title": "Vivid"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Vivid",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Vivid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:White",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "White",
        "fct-source": "src/System-Console-ANSI-Common.html#Color",
        "fct-type": "function",
        "title": "White"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "White",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "White",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Yellow",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Yellow",
        "fct-source": "src/System-Console-ANSI-Common.html#Color",
        "fct-type": "function",
        "title": "Yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "Yellow",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Yellow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToLineBeginning",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#clearFromCursorToLineBeginning",
        "fct-type": "function",
        "title": "clearFromCursorToLineBeginning"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "clearFromCursorToLineBeginning",
        "normalized": "IO()",
        "package": "ansi-terminal",
        "partial": "From Cursor To Line Beginning",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToLineBeginningCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "String",
        "fct-source": "src/System-Console-ANSI-Unix.html#clearFromCursorToLineBeginningCode",
        "fct-type": "function",
        "title": "clearFromCursorToLineBeginningCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "clearFromCursorToLineBeginningCode",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "From Cursor To Line Beginning Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToLineEnd",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#clearFromCursorToLineEnd",
        "fct-type": "function",
        "title": "clearFromCursorToLineEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "clearFromCursorToLineEnd",
        "normalized": "IO()",
        "package": "ansi-terminal",
        "partial": "From Cursor To Line End",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToLineEndCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "String",
        "fct-source": "src/System-Console-ANSI-Unix.html#clearFromCursorToLineEndCode",
        "fct-type": "function",
        "title": "clearFromCursorToLineEndCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "clearFromCursorToLineEndCode",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "From Cursor To Line End Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToScreenBeginning",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#clearFromCursorToScreenBeginning",
        "fct-type": "function",
        "title": "clearFromCursorToScreenBeginning"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "clearFromCursorToScreenBeginning",
        "normalized": "IO()",
        "package": "ansi-terminal",
        "partial": "From Cursor To Screen Beginning",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToScreenBeginningCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "String",
        "fct-source": "src/System-Console-ANSI-Unix.html#clearFromCursorToScreenBeginningCode",
        "fct-type": "function",
        "title": "clearFromCursorToScreenBeginningCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "clearFromCursorToScreenBeginningCode",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "From Cursor To Screen Beginning Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToScreenEnd",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#clearFromCursorToScreenEnd",
        "fct-type": "function",
        "title": "clearFromCursorToScreenEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "clearFromCursorToScreenEnd",
        "normalized": "IO()",
        "package": "ansi-terminal",
        "partial": "From Cursor To Screen End",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToScreenEndCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "String",
        "fct-source": "src/System-Console-ANSI-Unix.html#clearFromCursorToScreenEndCode",
        "fct-type": "function",
        "title": "clearFromCursorToScreenEndCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "clearFromCursorToScreenEndCode",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "From Cursor To Screen End Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearLine",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#clearLine",
        "fct-type": "function",
        "title": "clearLine"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "clearLine",
        "normalized": "IO()",
        "package": "ansi-terminal",
        "partial": "Line",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearLineCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "String",
        "fct-source": "src/System-Console-ANSI-Unix.html#clearLineCode",
        "fct-type": "function",
        "title": "clearLineCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "clearLineCode",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Line Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearScreen",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#clearScreen",
        "fct-type": "function",
        "title": "clearScreen"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "clearScreen",
        "normalized": "IO()",
        "package": "ansi-terminal",
        "partial": "Screen",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearScreenCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "String",
        "fct-source": "src/System-Console-ANSI-Unix.html#clearScreenCode",
        "fct-type": "function",
        "title": "clearScreenCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "clearScreenCode",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Screen Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorBackward",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e IO ()",
        "fct-type": "function",
        "title": "cursorBackward"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "cursorBackward",
        "normalized": "Int-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Backward",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorBackwardCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e String",
        "fct-type": "function",
        "title": "cursorBackwardCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "cursorBackwardCode",
        "normalized": "Int-\u003eString",
        "package": "ansi-terminal",
        "partial": "Backward Code",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorDown",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e IO ()",
        "fct-type": "function",
        "title": "cursorDown"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "cursorDown",
        "normalized": "Int-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Down",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorDownCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e String",
        "fct-type": "function",
        "title": "cursorDownCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "cursorDownCode",
        "normalized": "Int-\u003eString",
        "package": "ansi-terminal",
        "partial": "Down Code",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorDownLine",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e IO ()",
        "fct-type": "function",
        "title": "cursorDownLine"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "cursorDownLine",
        "normalized": "Int-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Down Line",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorDownLineCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e String",
        "fct-type": "function",
        "title": "cursorDownLineCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "cursorDownLineCode",
        "normalized": "Int-\u003eString",
        "package": "ansi-terminal",
        "partial": "Down Line Code",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorForward",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e IO ()",
        "fct-type": "function",
        "title": "cursorForward"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "cursorForward",
        "normalized": "Int-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Forward",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorForwardCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e String",
        "fct-type": "function",
        "title": "cursorForwardCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "cursorForwardCode",
        "normalized": "Int-\u003eString",
        "package": "ansi-terminal",
        "partial": "Forward Code",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorUp",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e IO ()",
        "fct-type": "function",
        "title": "cursorUp"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "cursorUp",
        "normalized": "Int-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Up",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorUpCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e String",
        "fct-type": "function",
        "title": "cursorUpCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "cursorUpCode",
        "normalized": "Int-\u003eString",
        "package": "ansi-terminal",
        "partial": "Up Code",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorUpLine",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e IO ()",
        "fct-type": "function",
        "title": "cursorUpLine"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "cursorUpLine",
        "normalized": "Int-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Up Line",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorUpLineCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e String",
        "fct-type": "function",
        "title": "cursorUpLineCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "cursorUpLineCode",
        "normalized": "Int-\u003eString",
        "package": "ansi-terminal",
        "partial": "Up Line Code",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hClearFromCursorToLineBeginning",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#hClearFromCursorToLineBeginning",
        "fct-type": "function",
        "title": "hClearFromCursorToLineBeginning"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hClearFromCursorToLineBeginning",
        "normalized": "Handle-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Clear From Cursor To Line Beginning",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hClearFromCursorToLineEnd",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#hClearFromCursorToLineEnd",
        "fct-type": "function",
        "title": "hClearFromCursorToLineEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hClearFromCursorToLineEnd",
        "normalized": "Handle-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Clear From Cursor To Line End",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hClearFromCursorToScreenBeginning",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#hClearFromCursorToScreenBeginning",
        "fct-type": "function",
        "title": "hClearFromCursorToScreenBeginning"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hClearFromCursorToScreenBeginning",
        "normalized": "Handle-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Clear From Cursor To Screen Beginning",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hClearFromCursorToScreenEnd",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#hClearFromCursorToScreenEnd",
        "fct-type": "function",
        "title": "hClearFromCursorToScreenEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hClearFromCursorToScreenEnd",
        "normalized": "Handle-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Clear From Cursor To Screen End",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hClearLine",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#hClearLine",
        "fct-type": "function",
        "title": "hClearLine"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hClearLine",
        "normalized": "Handle-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Clear Line",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hClearScreen",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#hClearScreen",
        "fct-type": "function",
        "title": "hClearScreen"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hClearScreen",
        "normalized": "Handle-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Clear Screen",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hCursorBackward",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "hCursorBackward"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hCursorBackward",
        "normalized": "Handle-\u003eInt-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Cursor Backward",
        "signature": "Handle-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hCursorDown",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "hCursorDown"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hCursorDown",
        "normalized": "Handle-\u003eInt-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Cursor Down",
        "signature": "Handle-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hCursorDownLine",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "hCursorDownLine"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hCursorDownLine",
        "normalized": "Handle-\u003eInt-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Cursor Down Line",
        "signature": "Handle-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hCursorForward",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "hCursorForward"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hCursorForward",
        "normalized": "Handle-\u003eInt-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Cursor Forward",
        "signature": "Handle-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hCursorUp",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "hCursorUp"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hCursorUp",
        "normalized": "Handle-\u003eInt-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Cursor Up",
        "signature": "Handle-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hCursorUpLine",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "hCursorUpLine"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hCursorUpLine",
        "normalized": "Handle-\u003eInt-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Cursor Up Line",
        "signature": "Handle-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hHideCursor",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#hHideCursor",
        "fct-type": "function",
        "title": "hHideCursor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hHideCursor",
        "normalized": "Handle-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Hide Cursor",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hScrollPageDown",
      "description": {
        "fct-descr": "\u003cp\u003eScroll the displayed information up or down the terminal: not widely supported\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "hScrollPageDown"
      },
      "index": {
        "description": "Scroll the displayed information up or down the terminal not widely supported",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hScrollPageDown",
        "normalized": "Handle-\u003eInt-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Scroll Page Down",
        "signature": "Handle-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hScrollPageUp",
      "description": {
        "fct-descr": "\u003cp\u003eScroll the displayed information up or down the terminal: not widely supported\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "hScrollPageUp"
      },
      "index": {
        "description": "Scroll the displayed information up or down the terminal not widely supported",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hScrollPageUp",
        "normalized": "Handle-\u003eInt-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Scroll Page Up",
        "signature": "Handle-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hSetCursorColumn",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "hSetCursorColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hSetCursorColumn",
        "normalized": "Handle-\u003eInt-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Set Cursor Column",
        "signature": "Handle-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hSetCursorPosition",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle-\u003e Int-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "hSetCursorPosition"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hSetCursorPosition",
        "normalized": "Handle-\u003eInt-\u003eInt-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Set Cursor Position",
        "signature": "Handle-\u003eInt-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hSetSGR",
      "description": {
        "fct-descr": "\u003cp\u003eSet the Select Graphic Rendition mode\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle-\u003e [SGR]-\u003e IO ()",
        "fct-type": "function",
        "title": "hSetSGR"
      },
      "index": {
        "description": "Set the Select Graphic Rendition mode",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hSetSGR",
        "normalized": "Handle-\u003e[SGR]-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Set SGR",
        "signature": "Handle-\u003e[SGR]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hSetTitle",
      "description": {
        "fct-descr": "\u003cp\u003eSet the terminal window title\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "hSetTitle"
      },
      "index": {
        "description": "Set the terminal window title",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hSetTitle",
        "normalized": "Handle-\u003eString-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Set Title",
        "signature": "Handle-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hShowCursor",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#hShowCursor",
        "fct-type": "function",
        "title": "hShowCursor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hShowCursor",
        "normalized": "Handle-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Show Cursor",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hideCursor",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#hideCursor",
        "fct-type": "function",
        "title": "hideCursor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hideCursor",
        "normalized": "IO()",
        "package": "ansi-terminal",
        "partial": "Cursor",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hideCursorCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "String",
        "fct-source": "src/System-Console-ANSI-Unix.html#hideCursorCode",
        "fct-type": "function",
        "title": "hideCursorCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "hideCursorCode",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Cursor Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:scrollPageDown",
      "description": {
        "fct-descr": "\u003cp\u003eScroll the displayed information up or down the terminal: not widely supported\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e IO ()",
        "fct-type": "function",
        "title": "scrollPageDown"
      },
      "index": {
        "description": "Scroll the displayed information up or down the terminal not widely supported",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "scrollPageDown",
        "normalized": "Int-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Page Down",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:scrollPageDownCode",
      "description": {
        "fct-descr": "\u003cp\u003eScroll the displayed information up or down the terminal: not widely supported\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e String",
        "fct-type": "function",
        "title": "scrollPageDownCode"
      },
      "index": {
        "description": "Scroll the displayed information up or down the terminal not widely supported",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "scrollPageDownCode",
        "normalized": "Int-\u003eString",
        "package": "ansi-terminal",
        "partial": "Page Down Code",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:scrollPageUp",
      "description": {
        "fct-descr": "\u003cp\u003eScroll the displayed information up or down the terminal: not widely supported\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e IO ()",
        "fct-type": "function",
        "title": "scrollPageUp"
      },
      "index": {
        "description": "Scroll the displayed information up or down the terminal not widely supported",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "scrollPageUp",
        "normalized": "Int-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Page Up",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:scrollPageUpCode",
      "description": {
        "fct-descr": "\u003cp\u003eScroll the displayed information up or down the terminal: not widely supported\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e String",
        "fct-type": "function",
        "title": "scrollPageUpCode"
      },
      "index": {
        "description": "Scroll the displayed information up or down the terminal not widely supported",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "scrollPageUpCode",
        "normalized": "Int-\u003eString",
        "package": "ansi-terminal",
        "partial": "Page Up Code",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setCursorColumn",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e IO ()",
        "fct-type": "function",
        "title": "setCursorColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "setCursorColumn",
        "normalized": "Int-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Cursor Column",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setCursorColumnCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e String",
        "fct-type": "function",
        "title": "setCursorColumnCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "setCursorColumnCode",
        "normalized": "Int-\u003eString",
        "package": "ansi-terminal",
        "partial": "Cursor Column Code",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setCursorPosition",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "setCursorPosition"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "setCursorPosition",
        "normalized": "Int-\u003eInt-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Cursor Position",
        "signature": "Int-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setCursorPositionCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "Int-\u003e Int-\u003e String",
        "fct-type": "function",
        "title": "setCursorPositionCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "setCursorPositionCode",
        "normalized": "Int-\u003eInt-\u003eString",
        "package": "ansi-terminal",
        "partial": "Cursor Position Code",
        "signature": "Int-\u003eInt-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setSGR",
      "description": {
        "fct-descr": "\u003cp\u003eSet the Select Graphic Rendition mode\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "[SGR]-\u003e IO ()",
        "fct-type": "function",
        "title": "setSGR"
      },
      "index": {
        "description": "Set the Select Graphic Rendition mode",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "setSGR",
        "normalized": "[SGR]-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "SGR",
        "signature": "[SGR]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setSGRCode",
      "description": {
        "fct-descr": "\u003cp\u003eSet the Select Graphic Rendition mode\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "[SGR]-\u003e String",
        "fct-type": "function",
        "title": "setSGRCode"
      },
      "index": {
        "description": "Set the Select Graphic Rendition mode",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "setSGRCode",
        "normalized": "[SGR]-\u003eString",
        "package": "ansi-terminal",
        "partial": "SGRCode",
        "signature": "[SGR]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setTitle",
      "description": {
        "fct-descr": "\u003cp\u003eSet the terminal window title\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "String-\u003e IO ()",
        "fct-type": "function",
        "title": "setTitle"
      },
      "index": {
        "description": "Set the terminal window title",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "setTitle",
        "normalized": "String-\u003eIO()",
        "package": "ansi-terminal",
        "partial": "Title",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setTitleCode",
      "description": {
        "fct-descr": "\u003cp\u003eSet the terminal window title\n\u003c/p\u003e\u003cp\u003eThanks to Brandon S. Allbery and Curt Sampson for pointing me in the right direction on xterm title setting on haskell-cafe.\n The \u003ca\u003e0\u003c/a\u003e signifies that both the title and \u003ca\u003eicon\u003c/a\u003e text should be set: i.e. the text for the window in the Start bar (or similar)\n as well as that in the actual window title.  This is chosen for consistent behaviour between Unixes and Windows.\n\u003c/p\u003e",
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "String-\u003e String",
        "fct-type": "function",
        "title": "setTitleCode"
      },
      "index": {
        "description": "Set the terminal window title Thanks to Brandon Allbery and Curt Sampson for pointing me in the right direction on xterm title setting on haskell-cafe The signifies that both the title and icon text should be set i.e the text for the window in the Start bar or similar as well as that in the actual window title This is chosen for consistent behaviour between Unixes and Windows",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "setTitleCode",
        "normalized": "String-\u003eString",
        "package": "ansi-terminal",
        "partial": "Title Code",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:showCursor",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-ANSI-Unix.html#showCursor",
        "fct-type": "function",
        "title": "showCursor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "showCursor",
        "normalized": "IO()",
        "package": "ansi-terminal",
        "partial": "Cursor",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:showCursorCode",
      "description": {
        "fct-module": "System.Console.ANSI",
        "fct-package": "ansi-terminal",
        "fct-signature": "String",
        "fct-source": "src/System-Console-ANSI-Unix.html#showCursorCode",
        "fct-type": "function",
        "title": "showCursorCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console ANSI",
        "module": "System.Console.ANSI",
        "name": "showCursorCode",
        "normalized": "",
        "package": "ansi-terminal",
        "partial": "Cursor Code",
        "signature": ""
      }
    }
  }
]