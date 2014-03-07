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
        "word": "crystalfontz"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hardware.LCD.CFA635",
          "name": "CFA635",
          "package": "crystalfontz",
          "source": "src/Hardware-LCD-CFA635.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "CFA635",
          "package": "crystalfontz",
          "partial": "CFA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an open LCD device.  Abstract.\n\u003c/p\u003e",
          "module": "Hardware.LCD.CFA635",
          "name": "LCD",
          "package": "crystalfontz",
          "source": "src/Hardware-LCD-CFA635.html#LCD",
          "type": "data"
        },
        "index": {
          "description": "Represents an open LCD device Abstract",
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "LCD",
          "package": "crystalfontz",
          "partial": "LCD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#t:LCD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hardware.LCD.CFA635",
          "name": "Pos",
          "package": "crystalfontz",
          "source": "src/Hardware-LCD-CFA635.html#Pos",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "Pos",
          "package": "crystalfontz",
          "partial": "Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hardware.LCD.CFA635",
          "name": "Pos",
          "package": "crystalfontz",
          "signature": "Pos Int Int",
          "source": "src/Hardware-LCD-CFA635.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "Pos",
          "package": "crystalfontz",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet backlight brightness. 0 is off, 100 is full on.\n\u003c/p\u003e",
          "module": "Hardware.LCD.CFA635",
          "name": "backlight",
          "package": "crystalfontz",
          "signature": "LCD -\u003e Int -\u003e IO ()",
          "source": "src/Hardware-LCD-CFA635.html#backlight",
          "type": "function"
        },
        "index": {
          "description": "Set backlight brightness is off is full on",
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "backlight",
          "normalized": "LCD-\u003eInt-\u003eIO()",
          "package": "crystalfontz",
          "signature": "LCD-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#v:backlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the screen.\n\u003c/p\u003e",
          "module": "Hardware.LCD.CFA635",
          "name": "clear",
          "package": "crystalfontz",
          "signature": "LCD -\u003e IO ()",
          "source": "src/Hardware-LCD-CFA635.html#clear",
          "type": "function"
        },
        "index": {
          "description": "Clear the screen",
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "clear",
          "normalized": "LCD-\u003eIO()",
          "package": "crystalfontz",
          "signature": "LCD-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn off all indicator LEDs.\n\u003c/p\u003e",
          "module": "Hardware.LCD.CFA635",
          "name": "clearLEDs",
          "package": "crystalfontz",
          "signature": "LCD -\u003e IO ()",
          "source": "src/Hardware-LCD-CFA635.html#clearLEDs",
          "type": "function"
        },
        "index": {
          "description": "Turn off all indicator LEDs",
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "clearLEDs",
          "normalized": "LCD-\u003eIO()",
          "package": "crystalfontz",
          "partial": "LEDs",
          "signature": "LCD-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#v:clearLEDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the LCD file.  Maybe use \u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithLCD\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instead?\n\u003c/p\u003e",
          "module": "Hardware.LCD.CFA635",
          "name": "close",
          "package": "crystalfontz",
          "signature": "LCD -\u003e IO ()",
          "source": "src/Hardware-LCD-CFA635.html#close",
          "type": "function"
        },
        "index": {
          "description": "Close the LCD file Maybe use withLCD instead",
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "close",
          "normalized": "LCD-\u003eIO()",
          "package": "crystalfontz",
          "signature": "LCD-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet contrast. 0 is light, 254 is dark, 95 is recommended.\n\u003c/p\u003e",
          "module": "Hardware.LCD.CFA635",
          "name": "contrast",
          "package": "crystalfontz",
          "signature": "LCD -\u003e Int -\u003e IO ()",
          "source": "src/Hardware-LCD-CFA635.html#contrast",
          "type": "function"
        },
        "index": {
          "description": "Set contrast is light is dark is recommended",
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "contrast",
          "normalized": "LCD-\u003eInt-\u003eIO()",
          "package": "crystalfontz",
          "signature": "LCD-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#v:contrast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the cursor style.  Valid styles are from \u003ccode\u003e[0..4]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hardware.LCD.CFA635",
          "name": "cursorStyle",
          "package": "crystalfontz",
          "signature": "LCD -\u003e Int -\u003e IO ()",
          "source": "src/Hardware-LCD-CFA635.html#cursorStyle",
          "type": "function"
        },
        "index": {
          "description": "Set the cursor style Valid styles are from",
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "cursorStyle",
          "normalized": "LCD-\u003eInt-\u003eIO()",
          "package": "crystalfontz",
          "partial": "Style",
          "signature": "LCD-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#v:cursorStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the cursor.\n\u003c/p\u003e",
          "module": "Hardware.LCD.CFA635",
          "name": "move",
          "package": "crystalfontz",
          "signature": "LCD -\u003e Pos -\u003e IO ()",
          "source": "src/Hardware-LCD-CFA635.html#move",
          "type": "function"
        },
        "index": {
          "description": "Move the cursor",
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "move",
          "normalized": "LCD-\u003ePos-\u003eIO()",
          "package": "crystalfontz",
          "signature": "LCD-\u003ePos-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen the LCD at a particular device file.\n   Maybe use \u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithLCD\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instead?\n\u003c/p\u003e",
          "module": "Hardware.LCD.CFA635",
          "name": "open",
          "package": "crystalfontz",
          "signature": "FilePath -\u003e IO LCD",
          "source": "src/Hardware-LCD-CFA635.html#open",
          "type": "function"
        },
        "index": {
          "description": "Open the LCD at particular device file Maybe use withLCD instead",
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "open",
          "normalized": "FilePath-\u003eIO LCD",
          "package": "crystalfontz",
          "signature": "FilePath-\u003eIO LCD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn on or off an indicator LED.  Valid indices are from \u003ccode\u003e[0..7]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hardware.LCD.CFA635",
          "name": "setLED",
          "package": "crystalfontz",
          "signature": "LCD -\u003e Int -\u003e Bool -\u003e IO ()",
          "source": "src/Hardware-LCD-CFA635.html#setLED",
          "type": "function"
        },
        "index": {
          "description": "Turn on or off an indicator LED Valid indices are from",
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "setLED",
          "normalized": "LCD-\u003eInt-\u003eBool-\u003eIO()",
          "package": "crystalfontz",
          "partial": "LED",
          "signature": "LCD-\u003eInt-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#v:setLED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e action with a connection to an LCD.\n\u003c/p\u003e",
          "module": "Hardware.LCD.CFA635",
          "name": "withLCD",
          "package": "crystalfontz",
          "signature": "FilePath -\u003e (LCD -\u003e IO a) -\u003e IO a",
          "source": "src/Hardware-LCD-CFA635.html#withLCD",
          "type": "function"
        },
        "index": {
          "description": "Run an IO action with connection to an LCD",
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "withLCD",
          "normalized": "FilePath-\u003e(LCD-\u003eIO a)-\u003eIO a",
          "package": "crystalfontz",
          "partial": "LCD",
          "signature": "FilePath-\u003e(LCD-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#v:withLCD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to the LCD at a specified position.\n\u003c/p\u003e",
          "module": "Hardware.LCD.CFA635",
          "name": "write",
          "package": "crystalfontz",
          "signature": "LCD -\u003e Pos -\u003e String -\u003e IO ()",
          "source": "src/Hardware-LCD-CFA635.html#write",
          "type": "function"
        },
        "index": {
          "description": "Write to the LCD at specified position",
          "hierarchy": "Hardware LCD CFA635",
          "module": "Hardware.LCD.CFA635",
          "name": "write",
          "normalized": "LCD-\u003ePos-\u003eString-\u003eIO()",
          "package": "crystalfontz",
          "signature": "LCD-\u003ePos-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crystalfontz/docs/Hardware-LCD-CFA635.html#v:write"
      }
    }
  ]
]