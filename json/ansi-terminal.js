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
        "word": "ansi-terminal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides ANSI terminal support for Windows and ANSI terminal software running on a Unix-like operating system.\n\u003c/p\u003e\u003cp\u003eThe ANSI escape codes are described at \u003ca\u003ehttp://en.wikipedia.org/wiki/ANSI_escape_code\u003c/a\u003e and provide a rich range of\n functionality for terminal control, which includes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Colored text output, with control over both foreground and background colors\n\u003c/li\u003e\u003cli\u003e Hiding or showing the cursor\n\u003c/li\u003e\u003cli\u003e Moving the cursor around\n\u003c/li\u003e\u003cli\u003e Clearing parts of the screen\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe most frequently used parts of this ANSI command set are exposed with a platform independent interface by\n this module.  Every function exported comes in three flavours:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Vanilla: has an \u003ccode\u003eIO ()\u003c/code\u003e type and doesn't take a \u003ccode\u003eHandle\u003c/code\u003e.  This just outputs the ANSI command directly on\n    to the terminal corresponding to stdout.  Commands issued like this should work as you expect on both Windows\n    and Unix.\n\u003c/li\u003e\u003cli\u003e Chocolate: has an \u003ccode\u003eIO ()\u003c/code\u003e type but takes a \u003ccode\u003eHandle\u003c/code\u003e.  This outputs the ANSI command on the terminal corresponding\n    to the supplied handle.  Commands issued like this should also work as your expect on both Windows and Unix.\n\u003c/li\u003e\u003cli\u003e Strawberry: has a \u003ccode\u003eString\u003c/code\u003e type and just consists of an escape code which can be added to any other bit of text\n    before being output.  This version of the API is often convenient to use, but due to fundamental limitations in\n    Windows ANSI terminal support will only work on Unix.  On Windows these codes will always be the empty string,\n    so it is possible to use them portably for e.g. coloring console output on the understanding that you will only\n    see colors if you are running on a Unix-like operating system.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "System.Console.ANSI",
          "name": "ANSI",
          "package": "ansi-terminal",
          "source": "src/System-Console-ANSI.html",
          "type": "module"
        },
        "index": {
          "description": "Provides ANSI terminal support for Windows and ANSI terminal software running on Unix-like operating system The ANSI escape codes are described at http en.wikipedia.org wiki ANSI escape code and provide rich range of functionality for terminal control which includes Colored text output with control over both foreground and background colors Hiding or showing the cursor Moving the cursor around Clearing parts of the screen The most frequently used parts of this ANSI command set are exposed with platform independent interface by this module Every function exported comes in three flavours Vanilla has an IO type and doesn take Handle This just outputs the ANSI command directly on to the terminal corresponding to stdout Commands issued like this should work as you expect on both Windows and Unix Chocolate has an IO type but takes Handle This outputs the ANSI command on the terminal corresponding to the supplied handle Commands issued like this should also work as your expect on both Windows and Unix Strawberry has String type and just consists of an escape code which can be added to any other bit of text before being output This version of the API is often convenient to use but due to fundamental limitations in Windows ANSI terminal support will only work on Unix On Windows these codes will always be the empty string so it is possible to use them portably for e.g coloring console output on the understanding that you will only see colors if you are running on Unix-like operating system",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "ANSI",
          "package": "ansi-terminal",
          "partial": "ANSI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eANSI blink speeds: values other than \u003ccode\u003e\u003ca\u003eNoBlink\u003c/a\u003e\u003c/code\u003e are not widely supported\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "BlinkSpeed",
          "package": "ansi-terminal",
          "source": "src/System-Console-ANSI-Common.html#BlinkSpeed",
          "type": "data"
        },
        "index": {
          "description": "ANSI blink speeds values other than NoBlink are not widely supported",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "BlinkSpeed",
          "package": "ansi-terminal",
          "partial": "Blink Speed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:BlinkSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eANSI colors: come in various intensities, which are controlled by \u003ccode\u003e\u003ca\u003eColorIntensity\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "Color",
          "package": "ansi-terminal",
          "source": "src/System-Console-ANSI-Common.html#Color",
          "type": "data"
        },
        "index": {
          "description": "ANSI colors come in various intensities which are controlled by ColorIntensity",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Color",
          "package": "ansi-terminal",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eANSI colors come in two intensities\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "ColorIntensity",
          "package": "ansi-terminal",
          "source": "src/System-Console-ANSI-Common.html#ColorIntensity",
          "type": "data"
        },
        "index": {
          "description": "ANSI colors come in two intensities",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "ColorIntensity",
          "package": "ansi-terminal",
          "partial": "Color Intensity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:ColorIntensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eANSI general console intensity: usually treated as setting the font style (e.g. \u003ccode\u003e\u003ca\u003eBoldIntensity\u003c/a\u003e\u003c/code\u003e causes text to be bold)\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "ConsoleIntensity",
          "package": "ansi-terminal",
          "source": "src/System-Console-ANSI-Common.html#ConsoleIntensity",
          "type": "data"
        },
        "index": {
          "description": "ANSI general console intensity usually treated as setting the font style e.g BoldIntensity causes text to be bold",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "ConsoleIntensity",
          "package": "ansi-terminal",
          "partial": "Console Intensity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:ConsoleIntensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eANSI colors can be set on two different layers\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "ConsoleLayer",
          "package": "ansi-terminal",
          "source": "src/System-Console-ANSI-Common.html#ConsoleLayer",
          "type": "data"
        },
        "index": {
          "description": "ANSI colors can be set on two different layers",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "ConsoleLayer",
          "package": "ansi-terminal",
          "partial": "Console Layer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:ConsoleLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eANSI Select Graphic Rendition command\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "SGR",
          "package": "ansi-terminal",
          "source": "src/System-Console-ANSI-Common.html#SGR",
          "type": "data"
        },
        "index": {
          "description": "ANSI Select Graphic Rendition command",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "SGR",
          "package": "ansi-terminal",
          "partial": "SGR",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:SGR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eANSI text underlining\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "Underlining",
          "package": "ansi-terminal",
          "source": "src/System-Console-ANSI-Common.html#Underlining",
          "type": "data"
        },
        "index": {
          "description": "ANSI text underlining",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Underlining",
          "package": "ansi-terminal",
          "partial": "Underlining",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#t:Underlining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "Background",
          "package": "ansi-terminal",
          "signature": "Background",
          "source": "src/System-Console-ANSI-Common.html#ConsoleLayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Background",
          "package": "ansi-terminal",
          "partial": "Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Background"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "Black",
          "package": "ansi-terminal",
          "signature": "Black",
          "source": "src/System-Console-ANSI-Common.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Black",
          "package": "ansi-terminal",
          "partial": "Black",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "Blue",
          "package": "ansi-terminal",
          "signature": "Blue",
          "source": "src/System-Console-ANSI-Common.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Blue",
          "package": "ansi-terminal",
          "partial": "Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "BoldIntensity",
          "package": "ansi-terminal",
          "signature": "BoldIntensity",
          "source": "src/System-Console-ANSI-Common.html#ConsoleIntensity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "BoldIntensity",
          "package": "ansi-terminal",
          "partial": "Bold Intensity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:BoldIntensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "Cyan",
          "package": "ansi-terminal",
          "signature": "Cyan",
          "source": "src/System-Console-ANSI-Common.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Cyan",
          "package": "ansi-terminal",
          "partial": "Cyan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot widely supported\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "DoubleUnderline",
          "package": "ansi-terminal",
          "signature": "DoubleUnderline",
          "source": "src/System-Console-ANSI-Common.html#Underlining",
          "type": "function"
        },
        "index": {
          "description": "Not widely supported",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "DoubleUnderline",
          "package": "ansi-terminal",
          "partial": "Double Underline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:DoubleUnderline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "Dull",
          "package": "ansi-terminal",
          "signature": "Dull",
          "source": "src/System-Console-ANSI-Common.html#ColorIntensity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Dull",
          "package": "ansi-terminal",
          "partial": "Dull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Dull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot widely supported: sometimes treated as concealing text\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "FaintIntensity",
          "package": "ansi-terminal",
          "signature": "FaintIntensity",
          "source": "src/System-Console-ANSI-Common.html#ConsoleIntensity",
          "type": "function"
        },
        "index": {
          "description": "Not widely supported sometimes treated as concealing text",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "FaintIntensity",
          "package": "ansi-terminal",
          "partial": "Faint Intensity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:FaintIntensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "Foreground",
          "package": "ansi-terminal",
          "signature": "Foreground",
          "source": "src/System-Console-ANSI-Common.html#ConsoleLayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Foreground",
          "package": "ansi-terminal",
          "partial": "Foreground",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Foreground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "Green",
          "package": "ansi-terminal",
          "signature": "Green",
          "source": "src/System-Console-ANSI-Common.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Green",
          "package": "ansi-terminal",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "Magenta",
          "package": "ansi-terminal",
          "signature": "Magenta",
          "source": "src/System-Console-ANSI-Common.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Magenta",
          "package": "ansi-terminal",
          "partial": "Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "NoBlink",
          "package": "ansi-terminal",
          "signature": "NoBlink",
          "source": "src/System-Console-ANSI-Common.html#BlinkSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "NoBlink",
          "package": "ansi-terminal",
          "partial": "No Blink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:NoBlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "NoUnderline",
          "package": "ansi-terminal",
          "signature": "NoUnderline",
          "source": "src/System-Console-ANSI-Common.html#Underlining",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "NoUnderline",
          "package": "ansi-terminal",
          "partial": "No Underline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:NoUnderline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "NormalIntensity",
          "package": "ansi-terminal",
          "signature": "NormalIntensity",
          "source": "src/System-Console-ANSI-Common.html#ConsoleIntensity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "NormalIntensity",
          "package": "ansi-terminal",
          "partial": "Normal Intensity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:NormalIntensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore than 150 blinks per minute\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "RapidBlink",
          "package": "ansi-terminal",
          "signature": "RapidBlink",
          "source": "src/System-Console-ANSI-Common.html#BlinkSpeed",
          "type": "function"
        },
        "index": {
          "description": "More than blinks per minute",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "RapidBlink",
          "package": "ansi-terminal",
          "partial": "Rapid Blink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:RapidBlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "Red",
          "package": "ansi-terminal",
          "signature": "Red",
          "source": "src/System-Console-ANSI-Common.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Red",
          "package": "ansi-terminal",
          "partial": "Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "Reset",
          "package": "ansi-terminal",
          "signature": "Reset",
          "source": "src/System-Console-ANSI-Common.html#SGR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Reset",
          "package": "ansi-terminal",
          "partial": "Reset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Reset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "SetBlinkSpeed",
          "package": "ansi-terminal",
          "signature": "SetBlinkSpeed BlinkSpeed",
          "source": "src/System-Console-ANSI-Common.html#SGR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "SetBlinkSpeed",
          "package": "ansi-terminal",
          "partial": "Set Blink Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetBlinkSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "SetColor",
          "package": "ansi-terminal",
          "signature": "SetColor ConsoleLayer ColorIntensity Color",
          "source": "src/System-Console-ANSI-Common.html#SGR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "SetColor",
          "package": "ansi-terminal",
          "partial": "Set Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "SetConsoleIntensity",
          "package": "ansi-terminal",
          "signature": "SetConsoleIntensity ConsoleIntensity",
          "source": "src/System-Console-ANSI-Common.html#SGR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "SetConsoleIntensity",
          "package": "ansi-terminal",
          "partial": "Set Console Intensity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetConsoleIntensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot widely supported: sometimes treated as swapping foreground and background\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "SetItalicized",
          "package": "ansi-terminal",
          "signature": "SetItalicized Bool",
          "source": "src/System-Console-ANSI-Common.html#SGR",
          "type": "function"
        },
        "index": {
          "description": "Not widely supported sometimes treated as swapping foreground and background",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "SetItalicized",
          "package": "ansi-terminal",
          "partial": "Set Italicized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetItalicized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "SetSwapForegroundBackground",
          "package": "ansi-terminal",
          "signature": "SetSwapForegroundBackground Bool",
          "source": "src/System-Console-ANSI-Common.html#SGR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "SetSwapForegroundBackground",
          "package": "ansi-terminal",
          "partial": "Set Swap Foreground Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetSwapForegroundBackground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "SetUnderlining",
          "package": "ansi-terminal",
          "signature": "SetUnderlining Underlining",
          "source": "src/System-Console-ANSI-Common.html#SGR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "SetUnderlining",
          "package": "ansi-terminal",
          "partial": "Set Underlining",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetUnderlining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot widely supported\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "SetVisible",
          "package": "ansi-terminal",
          "signature": "SetVisible Bool",
          "source": "src/System-Console-ANSI-Common.html#SGR",
          "type": "function"
        },
        "index": {
          "description": "Not widely supported",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "SetVisible",
          "package": "ansi-terminal",
          "partial": "Set Visible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SetVisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "SingleUnderline",
          "package": "ansi-terminal",
          "signature": "SingleUnderline",
          "source": "src/System-Console-ANSI-Common.html#Underlining",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "SingleUnderline",
          "package": "ansi-terminal",
          "partial": "Single Underline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SingleUnderline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess than 150 blinks per minute\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "SlowBlink",
          "package": "ansi-terminal",
          "signature": "SlowBlink",
          "source": "src/System-Console-ANSI-Common.html#BlinkSpeed",
          "type": "function"
        },
        "index": {
          "description": "Less than blinks per minute",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "SlowBlink",
          "package": "ansi-terminal",
          "partial": "Slow Blink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:SlowBlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "Vivid",
          "package": "ansi-terminal",
          "signature": "Vivid",
          "source": "src/System-Console-ANSI-Common.html#ColorIntensity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Vivid",
          "package": "ansi-terminal",
          "partial": "Vivid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Vivid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "White",
          "package": "ansi-terminal",
          "signature": "White",
          "source": "src/System-Console-ANSI-Common.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "White",
          "package": "ansi-terminal",
          "partial": "White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:White"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "Yellow",
          "package": "ansi-terminal",
          "signature": "Yellow",
          "source": "src/System-Console-ANSI-Common.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "Yellow",
          "package": "ansi-terminal",
          "partial": "Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:Yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToLineBeginning",
          "package": "ansi-terminal",
          "signature": "IO ()",
          "source": "src/System-Console-ANSI-Unix.html#clearFromCursorToLineBeginning",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToLineBeginning",
          "normalized": "IO()",
          "package": "ansi-terminal",
          "partial": "From Cursor To Line Beginning",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToLineBeginning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToLineBeginningCode",
          "package": "ansi-terminal",
          "signature": "String",
          "source": "src/System-Console-ANSI-Unix.html#clearFromCursorToLineBeginningCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToLineBeginningCode",
          "package": "ansi-terminal",
          "partial": "From Cursor To Line Beginning Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToLineBeginningCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToLineEnd",
          "package": "ansi-terminal",
          "signature": "IO ()",
          "source": "src/System-Console-ANSI-Unix.html#clearFromCursorToLineEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToLineEnd",
          "normalized": "IO()",
          "package": "ansi-terminal",
          "partial": "From Cursor To Line End",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToLineEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToLineEndCode",
          "package": "ansi-terminal",
          "signature": "String",
          "source": "src/System-Console-ANSI-Unix.html#clearFromCursorToLineEndCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToLineEndCode",
          "package": "ansi-terminal",
          "partial": "From Cursor To Line End Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToLineEndCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToScreenBeginning",
          "package": "ansi-terminal",
          "signature": "IO ()",
          "source": "src/System-Console-ANSI-Unix.html#clearFromCursorToScreenBeginning",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToScreenBeginning",
          "normalized": "IO()",
          "package": "ansi-terminal",
          "partial": "From Cursor To Screen Beginning",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToScreenBeginning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToScreenBeginningCode",
          "package": "ansi-terminal",
          "signature": "String",
          "source": "src/System-Console-ANSI-Unix.html#clearFromCursorToScreenBeginningCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToScreenBeginningCode",
          "package": "ansi-terminal",
          "partial": "From Cursor To Screen Beginning Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToScreenBeginningCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToScreenEnd",
          "package": "ansi-terminal",
          "signature": "IO ()",
          "source": "src/System-Console-ANSI-Unix.html#clearFromCursorToScreenEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToScreenEnd",
          "normalized": "IO()",
          "package": "ansi-terminal",
          "partial": "From Cursor To Screen End",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToScreenEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToScreenEndCode",
          "package": "ansi-terminal",
          "signature": "String",
          "source": "src/System-Console-ANSI-Unix.html#clearFromCursorToScreenEndCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "clearFromCursorToScreenEndCode",
          "package": "ansi-terminal",
          "partial": "From Cursor To Screen End Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearFromCursorToScreenEndCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "clearLine",
          "package": "ansi-terminal",
          "signature": "IO ()",
          "source": "src/System-Console-ANSI-Unix.html#clearLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "clearLine",
          "normalized": "IO()",
          "package": "ansi-terminal",
          "partial": "Line",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "clearLineCode",
          "package": "ansi-terminal",
          "signature": "String",
          "source": "src/System-Console-ANSI-Unix.html#clearLineCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "clearLineCode",
          "package": "ansi-terminal",
          "partial": "Line Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearLineCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "clearScreen",
          "package": "ansi-terminal",
          "signature": "IO ()",
          "source": "src/System-Console-ANSI-Unix.html#clearScreen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "clearScreen",
          "normalized": "IO()",
          "package": "ansi-terminal",
          "partial": "Screen",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "clearScreenCode",
          "package": "ansi-terminal",
          "signature": "String",
          "source": "src/System-Console-ANSI-Unix.html#clearScreenCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "clearScreenCode",
          "package": "ansi-terminal",
          "partial": "Screen Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:clearScreenCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "cursorBackward",
          "package": "ansi-terminal",
          "signature": "Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "cursorBackward",
          "normalized": "Int-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Backward",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorBackward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "cursorBackwardCode",
          "package": "ansi-terminal",
          "signature": "Int-\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "cursorBackwardCode",
          "normalized": "Int-\u003eString",
          "package": "ansi-terminal",
          "partial": "Backward Code",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorBackwardCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "cursorDown",
          "package": "ansi-terminal",
          "signature": "Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "cursorDown",
          "normalized": "Int-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Down",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "cursorDownCode",
          "package": "ansi-terminal",
          "signature": "Int-\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "cursorDownCode",
          "normalized": "Int-\u003eString",
          "package": "ansi-terminal",
          "partial": "Down Code",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorDownCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "cursorDownLine",
          "package": "ansi-terminal",
          "signature": "Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "cursorDownLine",
          "normalized": "Int-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Down Line",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorDownLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "cursorDownLineCode",
          "package": "ansi-terminal",
          "signature": "Int-\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "cursorDownLineCode",
          "normalized": "Int-\u003eString",
          "package": "ansi-terminal",
          "partial": "Down Line Code",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorDownLineCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "cursorForward",
          "package": "ansi-terminal",
          "signature": "Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "cursorForward",
          "normalized": "Int-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Forward",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "cursorForwardCode",
          "package": "ansi-terminal",
          "signature": "Int-\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "cursorForwardCode",
          "normalized": "Int-\u003eString",
          "package": "ansi-terminal",
          "partial": "Forward Code",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorForwardCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "cursorUp",
          "package": "ansi-terminal",
          "signature": "Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "cursorUp",
          "normalized": "Int-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Up",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "cursorUpCode",
          "package": "ansi-terminal",
          "signature": "Int-\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "cursorUpCode",
          "normalized": "Int-\u003eString",
          "package": "ansi-terminal",
          "partial": "Up Code",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorUpCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "cursorUpLine",
          "package": "ansi-terminal",
          "signature": "Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "cursorUpLine",
          "normalized": "Int-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Up Line",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorUpLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "cursorUpLineCode",
          "package": "ansi-terminal",
          "signature": "Int-\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "cursorUpLineCode",
          "normalized": "Int-\u003eString",
          "package": "ansi-terminal",
          "partial": "Up Line Code",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:cursorUpLineCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hClearFromCursorToLineBeginning",
          "package": "ansi-terminal",
          "signature": "Handle -\u003e IO ()",
          "source": "src/System-Console-ANSI-Unix.html#hClearFromCursorToLineBeginning",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hClearFromCursorToLineBeginning",
          "normalized": "Handle-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Clear From Cursor To Line Beginning",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hClearFromCursorToLineBeginning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hClearFromCursorToLineEnd",
          "package": "ansi-terminal",
          "signature": "Handle -\u003e IO ()",
          "source": "src/System-Console-ANSI-Unix.html#hClearFromCursorToLineEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hClearFromCursorToLineEnd",
          "normalized": "Handle-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Clear From Cursor To Line End",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hClearFromCursorToLineEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hClearFromCursorToScreenBeginning",
          "package": "ansi-terminal",
          "signature": "Handle -\u003e IO ()",
          "source": "src/System-Console-ANSI-Unix.html#hClearFromCursorToScreenBeginning",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hClearFromCursorToScreenBeginning",
          "normalized": "Handle-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Clear From Cursor To Screen Beginning",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hClearFromCursorToScreenBeginning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hClearFromCursorToScreenEnd",
          "package": "ansi-terminal",
          "signature": "Handle -\u003e IO ()",
          "source": "src/System-Console-ANSI-Unix.html#hClearFromCursorToScreenEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hClearFromCursorToScreenEnd",
          "normalized": "Handle-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Clear From Cursor To Screen End",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hClearFromCursorToScreenEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hClearLine",
          "package": "ansi-terminal",
          "signature": "Handle -\u003e IO ()",
          "source": "src/System-Console-ANSI-Unix.html#hClearLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hClearLine",
          "normalized": "Handle-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Clear Line",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hClearLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hClearScreen",
          "package": "ansi-terminal",
          "signature": "Handle -\u003e IO ()",
          "source": "src/System-Console-ANSI-Unix.html#hClearScreen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hClearScreen",
          "normalized": "Handle-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Clear Screen",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hClearScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hCursorBackward",
          "package": "ansi-terminal",
          "signature": "Handle-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hCursorBackward",
          "normalized": "Handle-\u003eInt-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Cursor Backward",
          "signature": "Handle-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hCursorBackward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hCursorDown",
          "package": "ansi-terminal",
          "signature": "Handle-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hCursorDown",
          "normalized": "Handle-\u003eInt-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Cursor Down",
          "signature": "Handle-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hCursorDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hCursorDownLine",
          "package": "ansi-terminal",
          "signature": "Handle-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hCursorDownLine",
          "normalized": "Handle-\u003eInt-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Cursor Down Line",
          "signature": "Handle-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hCursorDownLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hCursorForward",
          "package": "ansi-terminal",
          "signature": "Handle-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hCursorForward",
          "normalized": "Handle-\u003eInt-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Cursor Forward",
          "signature": "Handle-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hCursorForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hCursorUp",
          "package": "ansi-terminal",
          "signature": "Handle-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hCursorUp",
          "normalized": "Handle-\u003eInt-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Cursor Up",
          "signature": "Handle-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hCursorUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hCursorUpLine",
          "package": "ansi-terminal",
          "signature": "Handle-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hCursorUpLine",
          "normalized": "Handle-\u003eInt-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Cursor Up Line",
          "signature": "Handle-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hCursorUpLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hHideCursor",
          "package": "ansi-terminal",
          "signature": "Handle -\u003e IO ()",
          "source": "src/System-Console-ANSI-Unix.html#hHideCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hHideCursor",
          "normalized": "Handle-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Hide Cursor",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hHideCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScroll the displayed information up or down the terminal: not widely supported\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "hScrollPageDown",
          "package": "ansi-terminal",
          "signature": "Handle-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Scroll the displayed information up or down the terminal not widely supported",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hScrollPageDown",
          "normalized": "Handle-\u003eInt-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Scroll Page Down",
          "signature": "Handle-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hScrollPageDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScroll the displayed information up or down the terminal: not widely supported\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "hScrollPageUp",
          "package": "ansi-terminal",
          "signature": "Handle-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Scroll the displayed information up or down the terminal not widely supported",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hScrollPageUp",
          "normalized": "Handle-\u003eInt-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Scroll Page Up",
          "signature": "Handle-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hScrollPageUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hSetCursorColumn",
          "package": "ansi-terminal",
          "signature": "Handle-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hSetCursorColumn",
          "normalized": "Handle-\u003eInt-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Set Cursor Column",
          "signature": "Handle-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hSetCursorColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hSetCursorPosition",
          "package": "ansi-terminal",
          "signature": "Handle-\u003e Int-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hSetCursorPosition",
          "normalized": "Handle-\u003eInt-\u003eInt-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Set Cursor Position",
          "signature": "Handle-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hSetCursorPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Select Graphic Rendition mode\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "hSetSGR",
          "package": "ansi-terminal",
          "signature": "Handle-\u003e [SGR]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the Select Graphic Rendition mode",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hSetSGR",
          "normalized": "Handle-\u003e[SGR]-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Set SGR",
          "signature": "Handle-\u003e[SGR]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hSetSGR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the terminal window title\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "hSetTitle",
          "package": "ansi-terminal",
          "signature": "Handle-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the terminal window title",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hSetTitle",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Set Title",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hSetTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hShowCursor",
          "package": "ansi-terminal",
          "signature": "Handle -\u003e IO ()",
          "source": "src/System-Console-ANSI-Unix.html#hShowCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hShowCursor",
          "normalized": "Handle-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Show Cursor",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hShowCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hideCursor",
          "package": "ansi-terminal",
          "signature": "IO ()",
          "source": "src/System-Console-ANSI-Unix.html#hideCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hideCursor",
          "normalized": "IO()",
          "package": "ansi-terminal",
          "partial": "Cursor",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hideCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "hideCursorCode",
          "package": "ansi-terminal",
          "signature": "String",
          "source": "src/System-Console-ANSI-Unix.html#hideCursorCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "hideCursorCode",
          "package": "ansi-terminal",
          "partial": "Cursor Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:hideCursorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScroll the displayed information up or down the terminal: not widely supported\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "scrollPageDown",
          "package": "ansi-terminal",
          "signature": "Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Scroll the displayed information up or down the terminal not widely supported",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "scrollPageDown",
          "normalized": "Int-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Page Down",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:scrollPageDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScroll the displayed information up or down the terminal: not widely supported\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "scrollPageDownCode",
          "package": "ansi-terminal",
          "signature": "Int-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Scroll the displayed information up or down the terminal not widely supported",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "scrollPageDownCode",
          "normalized": "Int-\u003eString",
          "package": "ansi-terminal",
          "partial": "Page Down Code",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:scrollPageDownCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScroll the displayed information up or down the terminal: not widely supported\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "scrollPageUp",
          "package": "ansi-terminal",
          "signature": "Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Scroll the displayed information up or down the terminal not widely supported",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "scrollPageUp",
          "normalized": "Int-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Page Up",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:scrollPageUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScroll the displayed information up or down the terminal: not widely supported\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "scrollPageUpCode",
          "package": "ansi-terminal",
          "signature": "Int-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Scroll the displayed information up or down the terminal not widely supported",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "scrollPageUpCode",
          "normalized": "Int-\u003eString",
          "package": "ansi-terminal",
          "partial": "Page Up Code",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:scrollPageUpCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "setCursorColumn",
          "package": "ansi-terminal",
          "signature": "Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "setCursorColumn",
          "normalized": "Int-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Cursor Column",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setCursorColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "setCursorColumnCode",
          "package": "ansi-terminal",
          "signature": "Int-\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "setCursorColumnCode",
          "normalized": "Int-\u003eString",
          "package": "ansi-terminal",
          "partial": "Cursor Column Code",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setCursorColumnCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "setCursorPosition",
          "package": "ansi-terminal",
          "signature": "Int-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "setCursorPosition",
          "normalized": "Int-\u003eInt-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Cursor Position",
          "signature": "Int-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setCursorPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "setCursorPositionCode",
          "package": "ansi-terminal",
          "signature": "Int-\u003e Int-\u003e String",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "setCursorPositionCode",
          "normalized": "Int-\u003eInt-\u003eString",
          "package": "ansi-terminal",
          "partial": "Cursor Position Code",
          "signature": "Int-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setCursorPositionCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Select Graphic Rendition mode\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "setSGR",
          "package": "ansi-terminal",
          "signature": "[SGR]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the Select Graphic Rendition mode",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "setSGR",
          "normalized": "[SGR]-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "SGR",
          "signature": "[SGR]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setSGR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Select Graphic Rendition mode\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "setSGRCode",
          "package": "ansi-terminal",
          "signature": "[SGR]-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Set the Select Graphic Rendition mode",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "setSGRCode",
          "normalized": "[SGR]-\u003eString",
          "package": "ansi-terminal",
          "partial": "SGRCode",
          "signature": "[SGR]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setSGRCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the terminal window title\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "setTitle",
          "package": "ansi-terminal",
          "signature": "String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the terminal window title",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "setTitle",
          "normalized": "String-\u003eIO()",
          "package": "ansi-terminal",
          "partial": "Title",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the terminal window title\n\u003c/p\u003e\u003cp\u003eThanks to Brandon S. Allbery and Curt Sampson for pointing me in the right direction on xterm title setting on haskell-cafe.\n The \u003ca\u003e0\u003c/a\u003e signifies that both the title and \u003ca\u003eicon\u003c/a\u003e text should be set: i.e. the text for the window in the Start bar (or similar)\n as well as that in the actual window title.  This is chosen for consistent behaviour between Unixes and Windows.\n\u003c/p\u003e",
          "module": "System.Console.ANSI",
          "name": "setTitleCode",
          "package": "ansi-terminal",
          "signature": "String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Set the terminal window title Thanks to Brandon Allbery and Curt Sampson for pointing me in the right direction on xterm title setting on haskell-cafe The signifies that both the title and icon text should be set i.e the text for the window in the Start bar or similar as well as that in the actual window title This is chosen for consistent behaviour between Unixes and Windows",
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "setTitleCode",
          "normalized": "String-\u003eString",
          "package": "ansi-terminal",
          "partial": "Title Code",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:setTitleCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "showCursor",
          "package": "ansi-terminal",
          "signature": "IO ()",
          "source": "src/System-Console-ANSI-Unix.html#showCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "showCursor",
          "normalized": "IO()",
          "package": "ansi-terminal",
          "partial": "Cursor",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:showCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ANSI",
          "name": "showCursorCode",
          "package": "ansi-terminal",
          "signature": "String",
          "source": "src/System-Console-ANSI-Unix.html#showCursorCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ANSI",
          "module": "System.Console.ANSI",
          "name": "showCursorCode",
          "package": "ansi-terminal",
          "partial": "Cursor Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ansi-terminal/docs/System-Console-ANSI.html#v:showCursorCode"
      }
    }
  ]
]