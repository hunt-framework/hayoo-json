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
        "word": "hArduino"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLCD (Liquid Crystal Display) parts supported by hArduino. The Haskell code\n below has partly been implemented following the Arduino LiquidCrystal project\n source code: \u003ca\u003ehttp://code.google.com/p/arduino/source/browse/trunk/libraries/LiquidCrystal/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe Hitachi44780 data sheet is at: \u003ca\u003ehttp://lcd-linux.sourceforge.net/pdfdocs/hd44780.pdf\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eFor an example program using this library, see \u003ca\u003eSystem.Hardware.Arduino.SamplePrograms.LCD\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "LCD",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html",
          "type": "module"
        },
        "index": {
          "description": "LCD Liquid Crystal Display parts supported by hArduino The Haskell code below has partly been implemented following the Arduino LiquidCrystal project source code http code.google.com arduino source browse trunk libraries LiquidCrystal The Hitachi44780 data sheet is at http lcd-linux.sourceforge.net pdfdocs hd44780.pdf For an example program using this library see System.Hardware.Arduino.SamplePrograms.LCD",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "LCD",
          "package": "hArduino",
          "partial": "LCD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLCD's connected to the board\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "LCD",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Data.html#LCD",
          "type": "data"
        },
        "index": {
          "description": "LCD connected to the board",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "LCD",
          "package": "hArduino",
          "partial": "LCD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#t:LCD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHitachi LCD controller: See: \u003ca\u003ehttp://en.wikipedia.org/wiki/Hitachi_HD44780_LCD_controller\u003c/a\u003e.\n We model only the 4-bit variant, with RS and EN lines only. (The most common Arduino usage.)\n The data sheet can be seen at: \u003ca\u003ehttp://lcd-linux.sourceforge.net/pdfdocs/hd44780.pdf\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "LCDController",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Data.html#LCDController",
          "type": "data"
        },
        "index": {
          "description": "Hitachi LCD controller See http en.wikipedia.org wiki Hitachi HD44780 LCD controller We model only the bit variant with RS and EN lines only The most common Arduino usage The data sheet can be seen at http lcd-linux.sourceforge.net pdfdocs hd44780.pdf",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "LCDController",
          "package": "hArduino",
          "partial": "LCDController",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#t:LCDController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract symbol type for user created symbols\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "LCDSymbol",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#LCDSymbol",
          "type": "data"
        },
        "index": {
          "description": "An abstract symbol type for user created symbols",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "LCDSymbol",
          "package": "hArduino",
          "partial": "LCDSymbol",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#t:LCDSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "Hitachi44780",
          "package": "hArduino",
          "signature": "Hitachi44780",
          "source": "src/System-Hardware-Arduino-Data.html#LCDController",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "Hitachi44780",
          "package": "hArduino",
          "partial": "Hitachi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:Hitachi44780"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet to True if 5x10 dots are used\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "dotMode5x10",
          "package": "hArduino",
          "signature": "Bool",
          "source": "src/System-Hardware-Arduino-Data.html#LCDController",
          "type": "function"
        },
        "index": {
          "description": "Set to True if x10 dots are used",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "dotMode5x10",
          "package": "hArduino",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:dotMode5x10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn off auto-scrolling. See the comments for \u003ccode\u003e\u003ca\u003elcdAutoScrollOn\u003c/a\u003e\u003c/code\u003e for details. When turned\n off (which is the default), you will \u003cem\u003enot\u003c/em\u003e see the characters at the end of your strings that\n do not fit into the display.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdAutoScrollOff",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdAutoScrollOff",
          "type": "function"
        },
        "index": {
          "description": "Turn off auto-scrolling See the comments for lcdAutoScrollOn for details When turned off which is the default you will not see the characters at the end of your strings that do not fit into the display",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdAutoScrollOff",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Auto Scroll Off",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdAutoScrollOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn on auto-scrolling. In the context of the Hitachi44780 controller, this means that\n each time a letter is added, all the text is moved one space to the left. This can be\n confusing at first: It does \u003cem\u003enot\u003c/em\u003e mean that your strings will continuously scroll:\n It just means that if you write a string whose length exceeds the column-count\n of your LCD, then you'll see the tail-end of it. (Of course, this will create a scrolling\n effect as the string is being printed character by character.)\n\u003c/p\u003e\u003cp\u003eHaving said that, it is easy to program a scrolling string program: Simply write your string\n by calling \u003ccode\u003e\u003ca\u003elcdWrite\u003c/a\u003e\u003c/code\u003e, and then use the \u003ccode\u003e\u003ca\u003elcdScrollDisplayLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elcdScrollDisplayRight\u003c/a\u003e\u003c/code\u003e functions\n with appropriate delays to simulate the scrolling.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdAutoScrollOn",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdAutoScrollOn",
          "type": "function"
        },
        "index": {
          "description": "Turn on auto-scrolling In the context of the Hitachi44780 controller this means that each time letter is added all the text is moved one space to the left This can be confusing at first It does not mean that your strings will continuously scroll It just means that if you write string whose length exceeds the column-count of your LCD then you ll see the tail-end of it Of course this will create scrolling effect as the string is being printed character by character Having said that it is easy to program scrolling string program Simply write your string by calling lcdWrite and then use the lcdScrollDisplayLeft and lcdScrollDisplayRight functions with appropriate delays to simulate the scrolling",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdAutoScrollOn",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Auto Scroll On",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdAutoScrollOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not blink the cursor\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdBlinkOff",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdBlinkOff",
          "type": "function"
        },
        "index": {
          "description": "Do not blink the cursor",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdBlinkOff",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Blink Off",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdBlinkOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlink the cursor\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdBlinkOn",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdBlinkOn",
          "type": "function"
        },
        "index": {
          "description": "Blink the cursor",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdBlinkOn",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Blink On",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdBlinkOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the LCD\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdClear",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdClear",
          "type": "function"
        },
        "index": {
          "description": "Clear the LCD",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdClear",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Clear",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of cols (typically 16 or 20, upto 40)\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdCols",
          "package": "hArduino",
          "signature": "Int",
          "source": "src/System-Hardware-Arduino-Data.html#LCDController",
          "type": "function"
        },
        "index": {
          "description": "Number of cols typically or upto",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdCols",
          "package": "hArduino",
          "partial": "Cols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a custom symbol for later display. Note that controllers\n have limited capability for such symbols, typically storing no more\n than 8. The behavior is undefined if you create more symbols than your\n LCD can handle.\n\u003c/p\u003e\u003cp\u003eThe input is a simple description of the glyph, as a list of precisely 8\n strings, each of which must have 5 characters. Any space character is\n interpreted as a empty pixel, any non-space is a full pixel, corresponding\n to the pixel in the 5x8 characters we have on the LCD.  For instance, here's\n a happy-face glyph you can use:\n\u003c/p\u003e\u003cpre\u003e\n   [ \"     \"\n   , \"@   @\"\n   , \"     \"\n   , \"     \"\n   , \"@   @\"\n   , \" @@@ \"\n   , \"     \"\n   , \"     \"\n   ]\n\n\u003c/pre\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdCreateSymbol",
          "package": "hArduino",
          "signature": "LCD -\u003e [String] -\u003e Arduino LCDSymbol",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdCreateSymbol",
          "type": "function"
        },
        "index": {
          "description": "Create custom symbol for later display Note that controllers have limited capability for such symbols typically storing no more than The behavior is undefined if you create more symbols than your LCD can handle The input is simple description of the glyph as list of precisely strings each of which must have characters Any space character is interpreted as empty pixel any non-space is full pixel corresponding to the pixel in the x8 characters we have on the LCD For instance here happy-face glyph you can use",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdCreateSymbol",
          "normalized": "LCD-\u003e[String]-\u003eArduino LCDSymbol",
          "package": "hArduino",
          "partial": "Create Symbol",
          "signature": "LCD-\u003e[String]-\u003eArduino LCDSymbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdCreateSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHide the cursor. Note that a blinking cursor cannot be hidden, you must first\n turn off blinking.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdCursorOff",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdCursorOff",
          "type": "function"
        },
        "index": {
          "description": "Hide the cursor Note that blinking cursor cannot be hidden you must first turn off blinking",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdCursorOff",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Cursor Off",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdCursorOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the cursor\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdCursorOn",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdCursorOn",
          "type": "function"
        },
        "index": {
          "description": "Show the cursor",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdCursorOn",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Cursor On",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdCursorOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHitachi pin \u003ccode\u003e11\u003c/code\u003e: Data line \u003ccode\u003e4\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdD4",
          "package": "hArduino",
          "signature": "Pin",
          "source": "src/System-Hardware-Arduino-Data.html#LCDController",
          "type": "function"
        },
        "index": {
          "description": "Hitachi pin Data line",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdD4",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdD4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHitachi pin \u003ccode\u003e12\u003c/code\u003e: Data line \u003ccode\u003e5\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdD5",
          "package": "hArduino",
          "signature": "Pin",
          "source": "src/System-Hardware-Arduino-Data.html#LCDController",
          "type": "function"
        },
        "index": {
          "description": "Hitachi pin Data line",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdD5",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHitachi pin \u003ccode\u003e13\u003c/code\u003e: Data line \u003ccode\u003e6\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdD6",
          "package": "hArduino",
          "signature": "Pin",
          "source": "src/System-Hardware-Arduino-Data.html#LCDController",
          "type": "function"
        },
        "index": {
          "description": "Hitachi pin Data line",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdD6",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdD6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHitachi pin \u003ccode\u003e14\u003c/code\u003e: Data line \u003ccode\u003e7\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdD7",
          "package": "hArduino",
          "signature": "Pin",
          "source": "src/System-Hardware-Arduino-Data.html#LCDController",
          "type": "function"
        },
        "index": {
          "description": "Hitachi pin Data line",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdD7",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdD7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn the display off. Note that turning the display off does not mean you are\n powering it down. It simply means that the characters will not be shown until\n you turn it back on using \u003ccode\u003e\u003ca\u003elcdDisplayOn\u003c/a\u003e\u003c/code\u003e. (Also, the contents will \u003cem\u003enot\u003c/em\u003e be\n forgotten when you call this function.) Therefore, this function is useful\n for temporarily hiding the display contents.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdDisplayOff",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdDisplayOff",
          "type": "function"
        },
        "index": {
          "description": "Turn the display off Note that turning the display off does not mean you are powering it down It simply means that the characters will not be shown until you turn it back on using lcdDisplayOn Also the contents will not be forgotten when you call this function Therefore this function is useful for temporarily hiding the display contents",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdDisplayOff",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Display Off",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdDisplayOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn the display on\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdDisplayOn",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdDisplayOn",
          "type": "function"
        },
        "index": {
          "description": "Turn the display on",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdDisplayOn",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Display On",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdDisplayOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHitachi pin \u003ccode\u003e 6\u003c/code\u003e: Enable\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdEN",
          "package": "hArduino",
          "signature": "Pin",
          "source": "src/System-Hardware-Arduino-Data.html#LCDController",
          "type": "function"
        },
        "index": {
          "description": "Hitachi pin Enable",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdEN",
          "package": "hArduino",
          "partial": "EN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdEN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlash contents of the LCD screen\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdFlash",
          "package": "hArduino",
          "signature": "LCD-\u003e Int-\u003e Int-\u003e Arduino ()",
          "type": "function"
        },
        "index": {
          "description": "Flash contents of the LCD screen",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdFlash",
          "normalized": "LCD-\u003eInt-\u003eInt-\u003eArduino()",
          "package": "hArduino",
          "partial": "Flash",
          "signature": "LCD-\u003eInt-\u003eInt-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdFlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the cursor to home position\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdHome",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdHome",
          "type": "function"
        },
        "index": {
          "description": "Send the cursor to home position",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdHome",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Home",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess an internally stored symbol, one that is not available via its ASCII equivalent. See\n the Hitachi datasheet for possible values: \u003ca\u003ehttp://lcd-linux.sourceforge.net/pdfdocs/hd44780.pdf\u003c/a\u003e, Table 4 on page 17.\n\u003c/p\u003e\u003cp\u003eFor instance, to access the symbol right-arrow:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Locate it in the above table: Right-arrow is at the second-to-last row, 7th character from left.\n\u003c/li\u003e\u003cli\u003e Check the upper/higher bits as specified in the table: For Right-arrow, upper bits are \u003ccode\u003e0111\u003c/code\u003e and the\n     lower bits are \u003ccode\u003e1110\u003c/code\u003e; which gives us the code \u003ccode\u003e01111110\u003c/code\u003e, or \u003ccode\u003e0x7E\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e So, right-arrow can be accessed by symbol code \u003ccode\u003e\u003ca\u003elcdInternalSymbol\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e0x7E\u003c/code\u003e, which will give us a \u003ccode\u003e\u003ca\u003eLCDSymbol\u003c/a\u003e\u003c/code\u003e value\n   that can be passed to the \u003ccode\u003e\u003ca\u003elcdWriteSymbol\u003c/a\u003e\u003c/code\u003e function. The code would look like this: \u003ccode\u003elcdWriteSymbol lcd (lcdInternalSymbol 0x7E)\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdInternalSymbol",
          "package": "hArduino",
          "signature": "Word8 -\u003e LCDSymbol",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdInternalSymbol",
          "type": "function"
        },
        "index": {
          "description": "Access an internally stored symbol one that is not available via its ASCII equivalent See the Hitachi datasheet for possible values http lcd-linux.sourceforge.net pdfdocs hd44780.pdf Table on page For instance to access the symbol right-arrow Locate it in the above table Right-arrow is at the second-to-last row th character from left Check the upper higher bits as specified in the table For Right-arrow upper bits are and the lower bits are which gives us the code or x7E So right-arrow can be accessed by symbol code lcdInternalSymbol x7E which will give us LCDSymbol value that can be passed to the lcdWriteSymbol function The code would look like this lcdWriteSymbol lcd lcdInternalSymbol x7E",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdInternalSymbol",
          "normalized": "Word-\u003eLCDSymbol",
          "package": "hArduino",
          "partial": "Internal Symbol",
          "signature": "Word-\u003eLCDSymbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdInternalSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet writing direction: Left to Right\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdLeftToRight",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdLeftToRight",
          "type": "function"
        },
        "index": {
          "description": "Set writing direction Left to Right",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdLeftToRight",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Left To Right",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdLeftToRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHitachi pin \u003ccode\u003e 4\u003c/code\u003e: Register-select\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdRS",
          "package": "hArduino",
          "signature": "Pin",
          "source": "src/System-Hardware-Arduino-Data.html#LCDController",
          "type": "function"
        },
        "index": {
          "description": "Hitachi pin Register-select",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdRS",
          "package": "hArduino",
          "partial": "RS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister an LCD controller. When registration is complete, the LCD will be initialized so that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Set display ON (Use \u003ccode\u003e\u003ca\u003elcdDisplayOn\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003elcdDisplayOff\u003c/a\u003e\u003c/code\u003e to change.)\n\u003c/li\u003e\u003cli\u003e Set cursor OFF (Use \u003ccode\u003e\u003ca\u003elcdCursorOn\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003elcdCursorOff\u003c/a\u003e\u003c/code\u003e to change.)\n\u003c/li\u003e\u003cli\u003e Set blink OFF  (Use \u003ccode\u003e\u003ca\u003elcdBlinkOn\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003elcdBlinkOff\u003c/a\u003e\u003c/code\u003e to change.)\n\u003c/li\u003e\u003cli\u003e Clear display (Use \u003ccode\u003e\u003ca\u003elcdClear\u003c/a\u003e\u003c/code\u003e to clear, \u003ccode\u003e\u003ca\u003elcdWrite\u003c/a\u003e\u003c/code\u003e to display text.)\n\u003c/li\u003e\u003cli\u003e Set entry mode left to write (Use \u003ccode\u003e\u003ca\u003elcdLeftToRight\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003elcdRightToLeft\u003c/a\u003e\u003c/code\u003e to control.)\n\u003c/li\u003e\u003cli\u003e Set autoscrolling OFF (Use \u003ccode\u003e\u003ca\u003elcdAutoScrollOff\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003elcdAutoScrollOn\u003c/a\u003e\u003c/code\u003e to control.)\n\u003c/li\u003e\u003cli\u003e Put the cursor into home position (Use \u003ccode\u003e\u003ca\u003elcdSetCursor\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003elcdHome\u003c/a\u003e\u003c/code\u003e to move around.)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdRegister",
          "package": "hArduino",
          "signature": "LCDController -\u003e Arduino LCD",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdRegister",
          "type": "function"
        },
        "index": {
          "description": "Register an LCD controller When registration is complete the LCD will be initialized so that Set display ON Use lcdDisplayOn lcdDisplayOff to change Set cursor OFF Use lcdCursorOn lcdCursorOff to change Set blink OFF Use lcdBlinkOn lcdBlinkOff to change Clear display Use lcdClear to clear lcdWrite to display text Set entry mode left to write Use lcdLeftToRight lcdRightToLeft to control Set autoscrolling OFF Use lcdAutoScrollOff lcdAutoScrollOn to control Put the cursor into home position Use lcdSetCursor or lcdHome to move around",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdRegister",
          "normalized": "LCDController-\u003eArduino LCD",
          "package": "hArduino",
          "partial": "Register",
          "signature": "LCDController-\u003eArduino LCD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdRegister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet writing direction: Right to Left\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdRightToLeft",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdRightToLeft",
          "type": "function"
        },
        "index": {
          "description": "Set writing direction Right to Left",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdRightToLeft",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Right To Left",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdRightToLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of rows (typically 1 or 2, upto 4)\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdRows",
          "package": "hArduino",
          "signature": "Int",
          "source": "src/System-Hardware-Arduino-Data.html#LCDController",
          "type": "function"
        },
        "index": {
          "description": "Number of rows typically or upto",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdRows",
          "package": "hArduino",
          "partial": "Rows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScroll the display to the left by 1 character. Project idea: Using a tilt sensor, scroll the contents of the display\n left/right depending on the tilt. \n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdScrollDisplayLeft",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdScrollDisplayLeft",
          "type": "function"
        },
        "index": {
          "description": "Scroll the display to the left by character Project idea Using tilt sensor scroll the contents of the display left right depending on the tilt",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdScrollDisplayLeft",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Scroll Display Left",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdScrollDisplayLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScroll the display to the right by 1 character\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdScrollDisplayRight",
          "package": "hArduino",
          "signature": "LCD -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdScrollDisplayRight",
          "type": "function"
        },
        "index": {
          "description": "Scroll the display to the right by character",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdScrollDisplayRight",
          "normalized": "LCD-\u003eArduino()",
          "package": "hArduino",
          "partial": "Scroll Display Right",
          "signature": "LCD-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdScrollDisplayRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the cursor location. The pair of arguments is the new column and row numbers\n respectively:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The first value is the column, the second is the row. (This is counter-intuitive, but\n     is in line with what the standard Arduino programmers do, so we follow the same convention.)\n\u003c/li\u003e\u003cli\u003e Counting starts at 0 (both for column and row no)\n\u003c/li\u003e\u003cli\u003e If the new location is out-of-bounds of your LCD, we will put it the cursor to the closest\n     possible location on the LCD.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdSetCursor",
          "package": "hArduino",
          "signature": "LCD -\u003e (Int, Int) -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdSetCursor",
          "type": "function"
        },
        "index": {
          "description": "Set the cursor location The pair of arguments is the new column and row numbers respectively The first value is the column the second is the row This is counter-intuitive but is in line with what the standard Arduino programmers do so we follow the same convention Counting starts at both for column and row no If the new location is out-of-bounds of your LCD we will put it the cursor to the closest possible location on the LCD",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdSetCursor",
          "normalized": "LCD-\u003e(Int,Int)-\u003eArduino()",
          "package": "hArduino",
          "partial": "Set Cursor",
          "signature": "LCD-\u003e(Int,Int)-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdSetCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string on the LCD at the current cursor position\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdWrite",
          "package": "hArduino",
          "signature": "LCD -\u003e String -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdWrite",
          "type": "function"
        },
        "index": {
          "description": "Write string on the LCD at the current cursor position",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdWrite",
          "normalized": "LCD-\u003eString-\u003eArduino()",
          "package": "hArduino",
          "partial": "Write",
          "signature": "LCD-\u003eString-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a user created symbol on the LCD. (See \u003ccode\u003e\u003ca\u003elcdCreateSymbol\u003c/a\u003e\u003c/code\u003e for details.)\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdWriteSymbol",
          "package": "hArduino",
          "signature": "LCD -\u003e LCDSymbol -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-LCD.html#lcdWriteSymbol",
          "type": "function"
        },
        "index": {
          "description": "Display user created symbol on the LCD See lcdCreateSymbol for details",
          "hierarchy": "System Hardware Arduino Parts LCD",
          "module": "System.Hardware.Arduino.Parts.LCD",
          "name": "lcdWriteSymbol",
          "normalized": "LCD-\u003eLCDSymbol-\u003eArduino()",
          "package": "hArduino",
          "partial": "Write Symbol",
          "signature": "LCD-\u003eLCDSymbol-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-LCD.html#v:lcdWriteSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstractions for piezo speakers. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Piezo",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html",
          "type": "module"
        },
        "index": {
          "description": "Abstractions for piezo speakers",
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Piezo",
          "package": "hArduino",
          "partial": "Piezo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBeat counts\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Duration",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Duration",
          "type": "data"
        },
        "index": {
          "description": "Beat counts",
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Duration",
          "package": "hArduino",
          "partial": "Duration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#t:Duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMusical notes, notes around middle-C\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Note",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Note",
          "type": "data"
        },
        "index": {
          "description": "Musical notes notes around middle-C",
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Note",
          "package": "hArduino",
          "partial": "Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA piezo speaker. Note that this type is abstract, use \u003ccode\u003e\u003ca\u003espeaker\u003c/a\u003e\u003c/code\u003e to\n create an instance.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Piezo",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Piezo",
          "type": "data"
        },
        "index": {
          "description": "piezo speaker Note that this type is abstract use speaker to create an instance",
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Piezo",
          "package": "hArduino",
          "partial": "Piezo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#t:Piezo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "A",
          "package": "hArduino",
          "signature": "A",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "A",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "B",
          "package": "hArduino",
          "signature": "B",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "B",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "C",
          "package": "hArduino",
          "signature": "C",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "C",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "D",
          "package": "hArduino",
          "signature": "D",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "D",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "E",
          "package": "hArduino",
          "signature": "E",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "E",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Eight",
          "package": "hArduino",
          "signature": "Eight",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Eight",
          "package": "hArduino",
          "partial": "Eight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:Eight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "F",
          "package": "hArduino",
          "signature": "F",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "F",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "G",
          "package": "hArduino",
          "signature": "G",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "G",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:G"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Half",
          "package": "hArduino",
          "signature": "Half",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Half",
          "package": "hArduino",
          "partial": "Half",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:Half"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Quarter",
          "package": "hArduino",
          "signature": "Quarter",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Quarter",
          "package": "hArduino",
          "partial": "Quarter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:Quarter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "R",
          "package": "hArduino",
          "signature": "R",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "R",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Whole",
          "package": "hArduino",
          "signature": "Whole",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "Whole",
          "package": "hArduino",
          "partial": "Whole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:Whole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay the given note for the duration\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "playNote",
          "package": "hArduino",
          "signature": "Piezo -\u003e (Note, Duration) -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#playNote",
          "type": "function"
        },
        "index": {
          "description": "Play the given note for the duration",
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "playNote",
          "normalized": "Piezo-\u003e(Note,Duration)-\u003eArduino()",
          "package": "hArduino",
          "partial": "Note",
          "signature": "Piezo-\u003e(Note,Duration)-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:playNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay a sequence of notes with given durations:\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "playNotes",
          "package": "hArduino",
          "signature": "Piezo -\u003e [(Note, Duration)] -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#playNotes",
          "type": "function"
        },
        "index": {
          "description": "Play sequence of notes with given durations",
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "playNotes",
          "normalized": "Piezo-\u003e[(Note,Duration)]-\u003eArduino()",
          "package": "hArduino",
          "partial": "Notes",
          "signature": "Piezo-\u003e[(Note,Duration)]-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:playNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRest for a given duration:\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "rest",
          "package": "hArduino",
          "signature": "Piezo -\u003e Duration -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#rest",
          "type": "function"
        },
        "index": {
          "description": "Rest for given duration",
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "rest",
          "normalized": "Piezo-\u003eDuration-\u003eArduino()",
          "package": "hArduino",
          "signature": "Piezo-\u003eDuration-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn the speaker off\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "silence",
          "package": "hArduino",
          "signature": "Piezo -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-Piezo.html#silence",
          "type": "function"
        },
        "index": {
          "description": "Turn the speaker off",
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "silence",
          "normalized": "Piezo-\u003eArduino()",
          "package": "hArduino",
          "signature": "Piezo-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:silence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a piezo speaker instance.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "speaker",
          "package": "hArduino",
          "signature": "Int-\u003e Pin-\u003e Arduino Piezo",
          "type": "function"
        },
        "index": {
          "description": "Create piezo speaker instance",
          "hierarchy": "System Hardware Arduino Parts Piezo",
          "module": "System.Hardware.Arduino.Parts.Piezo",
          "name": "speaker",
          "normalized": "Int-\u003ePin-\u003eArduino Piezo",
          "package": "hArduino",
          "signature": "Int-\u003ePin-\u003eArduino Piezo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Piezo.html#v:speaker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstractions for servo motors. See \u003ca\u003eSystem.Hardware.Arduino.SamplePrograms.Servo\u003c/a\u003e for\n example uses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.Parts.Servo",
          "name": "Servo",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts-Servo.html",
          "type": "module"
        },
        "index": {
          "description": "Abstractions for servo motors See System.Hardware.Arduino.SamplePrograms.Servo for example uses",
          "hierarchy": "System Hardware Arduino Parts Servo",
          "module": "System.Hardware.Arduino.Parts.Servo",
          "name": "Servo",
          "package": "hArduino",
          "partial": "Servo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Servo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA servo motor. Note that this type is abstract, use \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003e to\n create an instance.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.Servo",
          "name": "Servo",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts-Servo.html#Servo",
          "type": "data"
        },
        "index": {
          "description": "servo motor Note that this type is abstract use attach to create an instance",
          "hierarchy": "System Hardware Arduino Parts Servo",
          "module": "System.Hardware.Arduino.Parts.Servo",
          "name": "Servo",
          "package": "hArduino",
          "partial": "Servo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Servo.html#t:Servo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a servo motor instance. The default values for the min/max angle pulse-widths, while typical,\n may need to be adjusted based on the specs of the actual servo motor. Check the data-sheet for your\n servo to find the proper values. The default values of \u003ccode\u003e544\u003c/code\u003e and \u003ccode\u003e2400\u003c/code\u003e microseconds are typical, so you might\n want to start by passing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for both parameters and adjusting as necessary.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.Servo",
          "name": "attach",
          "package": "hArduino",
          "signature": "Pin-\u003e Maybe Int-\u003e Maybe Int-\u003e Arduino Servo",
          "type": "function"
        },
        "index": {
          "description": "Create servo motor instance The default values for the min max angle pulse-widths while typical may need to be adjusted based on the specs of the actual servo motor Check the data-sheet for your servo to find the proper values The default values of and microseconds are typical so you might want to start by passing Nothing for both parameters and adjusting as necessary",
          "hierarchy": "System Hardware Arduino Parts Servo",
          "module": "System.Hardware.Arduino.Parts.Servo",
          "name": "attach",
          "normalized": "Pin-\u003eMaybe Int-\u003eMaybe Int-\u003eArduino Servo",
          "package": "hArduino",
          "signature": "Pin-\u003eMaybe Int-\u003eMaybe Int-\u003eArduino Servo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Servo.html#v:attach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the angle of the servo. The argument should be a number between 0 and 180,\n indicating the desired angle setting in degrees.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.Servo",
          "name": "setAngle",
          "package": "hArduino",
          "signature": "Servo -\u003e Int -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-Servo.html#setAngle",
          "type": "function"
        },
        "index": {
          "description": "Set the angle of the servo The argument should be number between and indicating the desired angle setting in degrees",
          "hierarchy": "System Hardware Arduino Parts Servo",
          "module": "System.Hardware.Arduino.Parts.Servo",
          "name": "setAngle",
          "normalized": "Servo-\u003eInt-\u003eArduino()",
          "package": "hArduino",
          "partial": "Angle",
          "signature": "Servo-\u003eInt-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-Servo.html#v:setAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCharacter to 7-segment display conversion.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.Parts.SevenSegmentCodes",
          "name": "SevenSegmentCodes",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts-SevenSegmentCodes.html",
          "type": "module"
        },
        "index": {
          "description": "Character to segment display conversion",
          "hierarchy": "System Hardware Arduino Parts SevenSegmentCodes",
          "module": "System.Hardware.Arduino.Parts.SevenSegmentCodes",
          "name": "SevenSegmentCodes",
          "package": "hArduino",
          "partial": "Seven Segment Codes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-SevenSegmentCodes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a character to a bit-pattern, suitable for display on a seven-segment display. \n Note that most characters are just not representable in a 7-segment display, in which\n case we map it to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. However, some substitutions are done, for instance '(' is\n displayed the same as '['.\n\u003c/p\u003e\u003cp\u003eThe return value is a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e, although only 7-bits are used; the least significant bit will\n always be 0. With the traditional coding, the bits correspond to segments ABCDEFG0, i.e.,\n most-significant-bit will be for segment A, next for segment B, and so on.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.SevenSegmentCodes",
          "name": "char2SS",
          "package": "hArduino",
          "signature": "Char -\u003e Maybe Word8",
          "source": "src/System-Hardware-Arduino-Parts-SevenSegmentCodes.html#char2SS",
          "type": "function"
        },
        "index": {
          "description": "Convert character to bit-pattern suitable for display on seven-segment display Note that most characters are just not representable in segment display in which case we map it to Nothing However some substitutions are done for instance is displayed the same as The return value is Word8 although only bits are used the least significant bit will always be With the traditional coding the bits correspond to segments ABCDEFG0 i.e most-significant-bit will be for segment next for segment and so on",
          "hierarchy": "System Hardware Arduino Parts SevenSegmentCodes",
          "module": "System.Hardware.Arduino.Parts.SevenSegmentCodes",
          "name": "char2SS",
          "normalized": "Char-\u003eMaybe Word",
          "package": "hArduino",
          "partial": "SS",
          "signature": "Char-\u003eMaybe Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-SevenSegmentCodes.html#v:char2SS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstractions for shift-register IC parts.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "ShiftRegisters",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html",
          "type": "module"
        },
        "index": {
          "description": "Abstractions for shift-register IC parts",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "ShiftRegisters",
          "package": "hArduino",
          "partial": "Shift Registers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Texas-Instruments 74HC595 8-bit shift register with 3-state\n outputs. Data sheet: \u003ca\u003ehttp://www.ti.com/lit/ds/symlink/sn74hc595.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a versatile 8-bit shift-register with separate serial and register\n clocks, allowing shifting to be done while the output remains untouched. We\n model all control pins provided. Note that the enable and clear lines are\n negated.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "SR_74HC595",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#SR_74HC595",
          "type": "data"
        },
        "index": {
          "description": "The Texas-Instruments HC595 bit shift register with state outputs Data sheet http www.ti.com lit ds symlink sn74hc595.pdf This is versatile bit shift-register with separate serial and register clocks allowing shifting to be done while the output remains untouched We model all control pins provided Note that the enable and clear lines are negated",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "SR_74HC595",
          "package": "hArduino",
          "partial": "SR HC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#t:SR_74HC595"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shift-register class as supported by the hArduino library.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "ShiftRegister",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#ShiftRegister",
          "type": "class"
        },
        "index": {
          "description": "shift-register class as supported by the hArduino library",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "ShiftRegister",
          "package": "hArduino",
          "partial": "Shift Register",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#t:ShiftRegister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "SR_74HC595",
          "package": "hArduino",
          "signature": "SR_74HC595",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#SR_74HC595",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "SR_74HC595",
          "package": "hArduino",
          "partial": "SR HC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:SR_74HC595"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the contents\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "clear",
          "package": "hArduino",
          "signature": "a -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#clear",
          "type": "method"
        },
        "index": {
          "description": "Clear the contents",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "clear",
          "normalized": "a-\u003eArduino()",
          "package": "hArduino",
          "signature": "a-\u003eArduino()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData sheet (typically a URL)\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "dataSheet",
          "package": "hArduino",
          "signature": "a -\u003e String",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#dataSheet",
          "type": "method"
        },
        "index": {
          "description": "Data sheet typically URL",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "dataSheet",
          "normalized": "a-\u003eString",
          "package": "hArduino",
          "partial": "Sheet",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:dataSheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisable the output, putting it into high-impedance state\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "disable",
          "package": "hArduino",
          "signature": "a -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#disable",
          "type": "method"
        },
        "index": {
          "description": "Disable the output putting it into high-impedance state",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "disable",
          "normalized": "a-\u003eArduino()",
          "package": "hArduino",
          "signature": "a-\u003eArduino()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:disable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable the output, getting it out of the high-impedance state\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "enable",
          "package": "hArduino",
          "signature": "a -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#enable",
          "type": "method"
        },
        "index": {
          "description": "Enable the output getting it out of the high-impedance state",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "enable",
          "normalized": "a-\u003eArduino()",
          "package": "hArduino",
          "signature": "a-\u003eArduino()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:enable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the shift-register\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "initialize",
          "package": "hArduino",
          "signature": "a -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#initialize",
          "type": "method"
        },
        "index": {
          "description": "Initialize the shift-register",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "initialize",
          "normalized": "a-\u003eArduino()",
          "package": "hArduino",
          "signature": "a-\u003eArduino()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChip Pins: 15, 1-7, and 8: Sequence of output bits, connect only if reading is necessary\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "mbBits",
          "package": "hArduino",
          "signature": "Maybe [Pin]",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#SR_74HC595",
          "type": "function"
        },
        "index": {
          "description": "Chip Pins and Sequence of output bits connect only if reading is necessary",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "mbBits",
          "normalized": "Maybe[Pin]",
          "package": "hArduino",
          "partial": "Bits",
          "signature": "Maybe[Pin]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:mbBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChip Pin: 10: Negated clear-data\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "nClear",
          "package": "hArduino",
          "signature": "Pin",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#SR_74HC595",
          "type": "function"
        },
        "index": {
          "description": "Chip Pin Negated clear-data",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "nClear",
          "package": "hArduino",
          "partial": "Clear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:nClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChip Pin: 13: Negated output-enable\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "nEnable",
          "package": "hArduino",
          "signature": "Pin",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#SR_74HC595",
          "type": "function"
        },
        "index": {
          "description": "Chip Pin Negated output-enable",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "nEnable",
          "package": "hArduino",
          "partial": "Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:nEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay name\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "name",
          "package": "hArduino",
          "signature": "a -\u003e String",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#name",
          "type": "method"
        },
        "index": {
          "description": "Display name",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "name",
          "normalized": "a-\u003eString",
          "package": "hArduino",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush a single bit down the shift-register\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "push",
          "package": "hArduino",
          "signature": "a -\u003e Bool -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#push",
          "type": "method"
        },
        "index": {
          "description": "Push single bit down the shift-register",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "push",
          "normalized": "a-\u003eBool-\u003eArduino()",
          "package": "hArduino",
          "signature": "a-\u003eBool-\u003eArduino()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChip Pin: 12: Register clock, positive triggered\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "rClock",
          "package": "hArduino",
          "signature": "Pin",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#SR_74HC595",
          "type": "function"
        },
        "index": {
          "description": "Chip Pin Register clock positive triggered",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "rClock",
          "package": "hArduino",
          "partial": "Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:rClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the current value stored\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "read",
          "package": "hArduino",
          "signature": "a -\u003e Arduino [Bool]",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#read",
          "type": "method"
        },
        "index": {
          "description": "Read the current value stored",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "read",
          "normalized": "a-\u003eArduino[Bool]",
          "package": "hArduino",
          "signature": "a-\u003eArduino[Bool]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChip Pin: 11: Serial clock, positive triggered\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "sClock",
          "package": "hArduino",
          "signature": "Pin",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#SR_74HC595",
          "type": "function"
        },
        "index": {
          "description": "Chip Pin Serial clock positive triggered",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "sClock",
          "package": "hArduino",
          "partial": "Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:sClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChip Pin: 14: Serial input\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "serial",
          "package": "hArduino",
          "signature": "Pin",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#SR_74HC595",
          "type": "function"
        },
        "index": {
          "description": "Chip Pin Serial input",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "serial",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapacity\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "size",
          "package": "hArduino",
          "signature": "a -\u003e Int",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#size",
          "type": "method"
        },
        "index": {
          "description": "Capacity",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "size",
          "normalized": "a-\u003eInt",
          "package": "hArduino",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore the pushed-in values in the storage register\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "store",
          "package": "hArduino",
          "signature": "a -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Parts-ShiftRegisters.html#store",
          "type": "method"
        },
        "index": {
          "description": "Store the pushed-in values in the storage register",
          "hierarchy": "System Hardware Arduino Parts ShiftRegisters",
          "module": "System.Hardware.Arduino.Parts.ShiftRegisters",
          "name": "store",
          "normalized": "a-\u003eArduino()",
          "package": "hArduino",
          "signature": "a-\u003eArduino()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts-ShiftRegisters.html#v:store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModels of various Hardware components\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.Parts",
          "name": "Parts",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Parts.html",
          "type": "module"
        },
        "index": {
          "description": "Models of various Hardware components",
          "hierarchy": "System Hardware Arduino Parts",
          "module": "System.Hardware.Arduino.Parts",
          "name": "Parts",
          "package": "hArduino",
          "partial": "Parts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-Parts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReads the value of an analog input, controlled by a 10K potentiometer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Analog",
          "name": "Analog",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Analog.html",
          "type": "module"
        },
        "index": {
          "description": "Reads the value of an analog input controlled by potentiometer",
          "hierarchy": "System Hardware Arduino SamplePrograms Analog",
          "module": "System.Hardware.Arduino.SamplePrograms.Analog",
          "name": "Analog",
          "package": "hArduino",
          "partial": "Analog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Analog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of an analog input line. We will print the value\n on the screen, and also blink a led on the Arduino based on the\n value. The smaller the value, the faster the blink.\n\u003c/p\u003e\u003cp\u003eThe circuit simply has a 10K potentiometer between 5V and GND, with\n the wiper line connected to analog input 3. We also have a led between\n pin 13 and GND.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/Analog.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Analog",
          "name": "analogVal",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Analog.html#analogVal",
          "type": "function"
        },
        "index": {
          "description": "Read the value of an analog input line We will print the value on the screen and also blink led on the Arduino based on the value The smaller the value the faster the blink The circuit simply has potentiometer between and GND with the wiper line connected to analog input We also have led between pin and GND",
          "hierarchy": "System Hardware Arduino SamplePrograms Analog",
          "module": "System.Hardware.Arduino.SamplePrograms.Analog",
          "name": "analogVal",
          "normalized": "IO()",
          "package": "hArduino",
          "partial": "Val",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Analog.html#v:analogVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003cem\u003ehello world\u003c/em\u003e of the arduino world, blinking the led.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Blink",
          "name": "Blink",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Blink.html",
          "type": "module"
        },
        "index": {
          "description": "The hello world of the arduino world blinking the led",
          "hierarchy": "System Hardware Arduino SamplePrograms Blink",
          "module": "System.Hardware.Arduino.SamplePrograms.Blink",
          "name": "Blink",
          "package": "hArduino",
          "partial": "Blink",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Blink.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlink the led connected to port 13 on the Arduino UNO board.\n\u003c/p\u003e\u003cp\u003eNote that you do not need any other components to run this example: Just hook\n up your Arduino to the computer and make sure StandardFirmata is running on it.\n However, you can connect a LED between Pin13 and GND if you want to blink an\n external led as well, as depicted below:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/Blink.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Blink",
          "name": "blink",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Blink.html#blink",
          "type": "function"
        },
        "index": {
          "description": "Blink the led connected to port on the Arduino UNO board Note that you do not need any other components to run this example Just hook up your Arduino to the computer and make sure StandardFirmata is running on it However you can connect LED between Pin13 and GND if you want to blink an external led as well as depicted below",
          "hierarchy": "System Hardware Arduino SamplePrograms Blink",
          "module": "System.Hardware.Arduino.SamplePrograms.Blink",
          "name": "blink",
          "normalized": "IO()",
          "package": "hArduino",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Blink.html#v:blink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReads the value of a push-button and displays it's status continuously\n on the computer screen and by lighting a led on the Arduino as long as\n the button is pressed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Button",
          "name": "Button",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Button.html",
          "type": "module"
        },
        "index": {
          "description": "Reads the value of push-button and displays it status continuously on the computer screen and by lighting led on the Arduino as long as the button is pressed",
          "hierarchy": "System Hardware Arduino SamplePrograms Button",
          "module": "System.Hardware.Arduino.SamplePrograms.Button",
          "name": "Button",
          "package": "hArduino",
          "partial": "Button",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Button.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of a push-button (NO - normally open)\n connected to input pin 2 on the Arduino. We will continuously\n monitor and print the value as it changes. Also, we'll turn\n the led on pin 13 on when the switch is pressed.\n\u003c/p\u003e\u003cp\u003eThe wiring is straightforward: Simply put a push-button between\n digital input 2 and +5V, guarded by a 10K resistor:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/Button.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Button",
          "name": "button",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Button.html#button",
          "type": "function"
        },
        "index": {
          "description": "Read the value of push-button NO normally open connected to input pin on the Arduino We will continuously monitor and print the value as it changes Also we ll turn the led on pin on when the switch is pressed The wiring is straightforward Simply put push-button between digital input and guarded by resistor",
          "hierarchy": "System Hardware Arduino SamplePrograms Button",
          "module": "System.Hardware.Arduino.SamplePrograms.Button",
          "name": "button",
          "normalized": "IO()",
          "package": "hArduino",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Button.html#v:button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDemonstrates using two push-buttons to count up and down.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Counter",
          "name": "Counter",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Counter.html",
          "type": "module"
        },
        "index": {
          "description": "Demonstrates using two push-buttons to count up and down",
          "hierarchy": "System Hardware Arduino SamplePrograms Counter",
          "module": "System.Hardware.Arduino.SamplePrograms.Counter",
          "name": "Counter",
          "package": "hArduino",
          "partial": "Counter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Counter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo push-button switches, controlling a counter value. We will increment\n the counter if the first one (\u003ccode\u003ebUp\u003c/code\u003e) is pressed, and decrement the value if the\n second one (\u003ccode\u003ebDown\u003c/code\u003e) is pressed. We also have a led connected to pin 13 (either use\n the internal or connect an external one), that we light up when the counter value\n is 0.\n\u003c/p\u003e\u003cp\u003eWiring is very simple: Up-button connected to pin 4, Down-button connected\n to pin 2, and a led on pin 13.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/Counter.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Counter",
          "name": "counter",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Counter.html#counter",
          "type": "function"
        },
        "index": {
          "description": "Two push-button switches controlling counter value We will increment the counter if the first one bUp is pressed and decrement the value if the second one bDown is pressed We also have led connected to pin either use the internal or connect an external one that we light up when the counter value is Wiring is very simple Up-button connected to pin Down-button connected to pin and led on pin",
          "hierarchy": "System Hardware Arduino SamplePrograms Counter",
          "module": "System.Hardware.Arduino.SamplePrograms.Counter",
          "name": "counter",
          "normalized": "IO()",
          "package": "hArduino",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Counter.html#v:counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMeasuring distance using a HC-SR04 sensor. (Data sheet: \u003ca\u003ehttp://www.micropik.com/PDF/HCSR04.pdf\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eNB. As of March 2 2013; StandardFirmata that's distributed with the Arduino-App does \u003cem\u003enot\u003c/em\u003e support the high\n accuracy pulse-in command, which is needed for this sketch.  However, there is a patch to add this\n command; see: \u003ca\u003ehttp://github.com/rwldrn/johnny-five/issues/18\u003c/a\u003e for details on how to install it. You \u003cem\u003eshould\u003c/em\u003e\n have this patched version of Firmata running on your board for this sketch to function properly.\n\u003c/p\u003e\u003cp\u003eAccuracy: Keep in mind that measurements on a platform like Arduino is always subject to\n various errors. Relying on this program for precise distance measurements would be a mistake.\n The results here should be accurate to within about half-a-centimeter, provided you stay\n within the range of HC-SR04, which is between 2 to 400 cm. For anything more precise than\n this, you'll need to use a much more sensitive sensor.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Distance",
          "name": "Distance",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Distance.html",
          "type": "module"
        },
        "index": {
          "description": "Measuring distance using HC-SR04 sensor Data sheet http www.micropik.com PDF HCSR04.pdf NB As of March StandardFirmata that distributed with the Arduino-App does not support the high accuracy pulse-in command which is needed for this sketch However there is patch to add this command see http github.com rwldrn johnny-five issues for details on how to install it You should have this patched version of Firmata running on your board for this sketch to function properly Accuracy Keep in mind that measurements on platform like Arduino is always subject to various errors Relying on this program for precise distance measurements would be mistake The results here should be accurate to within about half-a-centimeter provided you stay within the range of HC-SR04 which is between to cm For anything more precise than this you ll need to use much more sensitive sensor",
          "hierarchy": "System Hardware Arduino SamplePrograms Distance",
          "module": "System.Hardware.Arduino.SamplePrograms.Distance",
          "name": "Distance",
          "package": "hArduino",
          "partial": "Distance",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Distance.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeasure and display the distance continuously, as reported by an HC-SR04 sensor.\n\u003c/p\u003e\u003cp\u003eWiring: Simply connect VCC and GND of HC-SR04 to Arduino as usual. The \u003ccode\u003eEcho\u003c/code\u003e line on the sensor is connected\n to Arduino pin 2. The \u003ccode\u003eTrig\u003c/code\u003e line is connected on the board to the \u003ccode\u003eEcho\u003c/code\u003e line, i.e., they both connect to the\n same pin on the Arduino. We also have a led on pin 13 that we will light-up\n if the distance detected is less than 5 centimeters, indicating an impending crash!\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/Distance.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Distance",
          "name": "distance",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Distance.html#distance",
          "type": "function"
        },
        "index": {
          "description": "Measure and display the distance continuously as reported by an HC-SR04 sensor Wiring Simply connect VCC and GND of HC-SR04 to Arduino as usual The Echo line on the sensor is connected to Arduino pin The Trig line is connected on the board to the Echo line i.e they both connect to the same pin on the Arduino We also have led on pin that we will light-up if the distance detected is less than centimeters indicating an impending crash",
          "hierarchy": "System Hardware Arduino SamplePrograms Distance",
          "module": "System.Hardware.Arduino.SamplePrograms.Distance",
          "name": "distance",
          "normalized": "IO()",
          "package": "hArduino",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Distance.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSound travels 343.2 meters per seconds (\u003ca\u003ehttp://en.wikipedia.org/wiki/Speed_of_sound\u003c/a\u003e).\n The echo time is round-trip, from the sensor to the object and back. Thus, if echo is high\n for \u003ccode\u003ed\u003c/code\u003e microseconds, then the distance in centimeters is:\n\u003c/p\u003e\u003cpre\u003e\n        d * 10^-6 * 343.2 * 10^2 / 2\n      = 1.716e-2 * d\n\u003c/pre\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Distance",
          "name": "microSecondsToCentimeters",
          "package": "hArduino",
          "signature": "Int -\u003e Float",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Distance.html#microSecondsToCentimeters",
          "type": "function"
        },
        "index": {
          "description": "Sound travels meters per seconds http en.wikipedia.org wiki Speed of sound The echo time is round-trip from the sensor to the object and back Thus if echo is high for microseconds then the distance in centimeters is e-2",
          "hierarchy": "System Hardware Arduino SamplePrograms Distance",
          "module": "System.Hardware.Arduino.SamplePrograms.Distance",
          "name": "microSecondsToCentimeters",
          "normalized": "Int-\u003eFloat",
          "package": "hArduino",
          "partial": "Seconds To Centimeters",
          "signature": "Int-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Distance.html#v:microSecondsToCentimeters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA (pretty bad!) rendering of Jingle Bells on a piezo speaker\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.JingleBells",
          "name": "JingleBells",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-JingleBells.html",
          "type": "module"
        },
        "index": {
          "description": "pretty bad rendering of Jingle Bells on piezo speaker",
          "hierarchy": "System Hardware Arduino SamplePrograms JingleBells",
          "module": "System.Hardware.Arduino.SamplePrograms.JingleBells",
          "name": "JingleBells",
          "package": "hArduino",
          "partial": "Jingle Bells",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-JingleBells.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNotes for jingle-bells. Expecting a nice rendering from this encoding\n on a piezo speaker would be naive.. However, it's still recognizable!\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.JingleBells",
          "name": "jingleBells",
          "package": "hArduino",
          "signature": "[(Note, Duration)]",
          "source": "src/System-Hardware-Arduino-SamplePrograms-JingleBells.html#jingleBells",
          "type": "function"
        },
        "index": {
          "description": "Notes for jingle-bells Expecting nice rendering from this encoding on piezo speaker would be naive However it still recognizable",
          "hierarchy": "System Hardware Arduino SamplePrograms JingleBells",
          "module": "System.Hardware.Arduino.SamplePrograms.JingleBells",
          "name": "jingleBells",
          "normalized": "[(Note,Duration)]",
          "package": "hArduino",
          "partial": "Bells",
          "signature": "[(Note,Duration)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-JingleBells.html#v:jingleBells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay the jingle-bells on a PWM line, attached to pin 3. We use a \n tempo of \u003ccode\u003e75\u003c/code\u003e; which is fairly fast. For a slower rendring try \u003ccode\u003e150\u003c/code\u003e\n or higher values.\n\u003c/p\u003e\u003cp\u003eThe circuit simple has a piezo speaker attached to pin 3.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/Piezo.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.JingleBells",
          "name": "main",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-JingleBells.html#main",
          "type": "function"
        },
        "index": {
          "description": "Play the jingle-bells on PWM line attached to pin We use tempo of which is fairly fast For slower rendring try or higher values The circuit simple has piezo speaker attached to pin",
          "hierarchy": "System Hardware Arduino SamplePrograms JingleBells",
          "module": "System.Hardware.Arduino.SamplePrograms.JingleBells",
          "name": "main",
          "normalized": "IO()",
          "package": "hArduino",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-JingleBells.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic demo of an Hitachi HD44780 LCD\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.LCD",
          "name": "LCD",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-LCD.html",
          "type": "module"
        },
        "index": {
          "description": "Basic demo of an Hitachi HD44780 LCD",
          "hierarchy": "System Hardware Arduino SamplePrograms LCD",
          "module": "System.Hardware.Arduino.SamplePrograms.LCD",
          "name": "LCD",
          "package": "hArduino",
          "partial": "LCD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-LCD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe happy glyph. See \u003ccode\u003e\u003ca\u003elcdCreateSymbol\u003c/a\u003e\u003c/code\u003e for details on how to create new ones.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.LCD",
          "name": "happy",
          "package": "hArduino",
          "signature": "[String]",
          "source": "src/System-Hardware-Arduino-SamplePrograms-LCD.html#happy",
          "type": "function"
        },
        "index": {
          "description": "The happy glyph See lcdCreateSymbol for details on how to create new ones",
          "hierarchy": "System Hardware Arduino SamplePrograms LCD",
          "module": "System.Hardware.Arduino.SamplePrograms.LCD",
          "name": "happy",
          "normalized": "[String]",
          "package": "hArduino",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-LCD.html#v:happy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnections for a basic hitachi controller.\n See \u003ca\u003ehttp://en.wikipedia.org/wiki/Hitachi_HD44780_LCD_controller\u003c/a\u003e for\n pin layout. For this demo, simply connect the LCD pins to the Arduino\n as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e LCD pin \u003ccode\u003e01\u003c/code\u003e to GND\n\u003c/li\u003e\u003cli\u003e LCD pin \u003ccode\u003e02\u003c/code\u003e to +5V\n\u003c/li\u003e\u003cli\u003e LCD pin \u003ccode\u003e03\u003c/code\u003e to a 10K potentiometer's viper\n\u003c/li\u003e\u003cli\u003e LCD pin \u003ccode\u003e04\u003c/code\u003e to Arduino pin \u003ccode\u003e12\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e LCD pin \u003ccode\u003e05\u003c/code\u003e to GND\n\u003c/li\u003e\u003cli\u003e LCD pin \u003ccode\u003e06\u003c/code\u003e to Arduino pin \u003ccode\u003e11\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e LCD pin \u003ccode\u003e11\u003c/code\u003e to Arduino pin \u003ccode\u003e5\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e LCD pin \u003ccode\u003e12\u003c/code\u003e to Arduino pin \u003ccode\u003e4\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e LCD pin \u003ccode\u003e13\u003c/code\u003e to Arduino pin \u003ccode\u003e3\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e LCD pin \u003ccode\u003e14\u003c/code\u003e to Arduino pin \u003ccode\u003e2\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e [If backlight is needed] LCD pin \u003ccode\u003e15\u003c/code\u003e to +5V\n\u003c/li\u003e\u003cli\u003e [If backlight is needed] LCD pin \u003ccode\u003e16\u003c/code\u003e to GND via 220ohm resistor\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/LCD.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.LCD",
          "name": "hitachi",
          "package": "hArduino",
          "signature": "LCDController",
          "source": "src/System-Hardware-Arduino-SamplePrograms-LCD.html#hitachi",
          "type": "function"
        },
        "index": {
          "description": "Connections for basic hitachi controller See http en.wikipedia.org wiki Hitachi HD44780 LCD controller for pin layout For this demo simply connect the LCD pins to the Arduino as follows LCD pin to GND LCD pin to LCD pin to potentiometer viper LCD pin to Arduino pin LCD pin to GND LCD pin to Arduino pin LCD pin to Arduino pin LCD pin to Arduino pin LCD pin to Arduino pin LCD pin to Arduino pin If backlight is needed LCD pin to If backlight is needed LCD pin to GND via ohm resistor",
          "hierarchy": "System Hardware Arduino SamplePrograms LCD",
          "module": "System.Hardware.Arduino.SamplePrograms.LCD",
          "name": "hitachi",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-LCD.html#v:hitachi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the LCD connected to Arduino, making it show messages\n we read from the user and demonstrate other LCD control features offered\n by hArduino.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.LCD",
          "name": "lcdDemo",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-LCD.html#lcdDemo",
          "type": "function"
        },
        "index": {
          "description": "Access the LCD connected to Arduino making it show messages we read from the user and demonstrate other LCD control features offered by hArduino",
          "hierarchy": "System Hardware Arduino SamplePrograms LCD",
          "module": "System.Hardware.Arduino.SamplePrograms.LCD",
          "name": "lcdDemo",
          "normalized": "IO()",
          "package": "hArduino",
          "partial": "Demo",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-LCD.html#v:lcdDemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sad glyph. See \u003ccode\u003e\u003ca\u003elcdCreateSymbol\u003c/a\u003e\u003c/code\u003e for details on how to create new ones.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.LCD",
          "name": "sad",
          "package": "hArduino",
          "signature": "[String]",
          "source": "src/System-Hardware-Arduino-SamplePrograms-LCD.html#sad",
          "type": "function"
        },
        "index": {
          "description": "The sad glyph See lcdCreateSymbol for details on how to create new ones",
          "hierarchy": "System Hardware Arduino SamplePrograms LCD",
          "module": "System.Hardware.Arduino.SamplePrograms.LCD",
          "name": "sad",
          "normalized": "[String]",
          "package": "hArduino",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-LCD.html#v:sad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMorse code blinker. Original by Antoine R. Dumont, modified to simplify\n and fit into the existing examples structure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "Morse",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Morse.html",
          "type": "module"
        },
        "index": {
          "description": "Morse code blinker Original by Antoine Dumont modified to simplify and fit into the existing examples structure",
          "hierarchy": "System Hardware Arduino SamplePrograms Morse",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "Morse",
          "package": "hArduino",
          "partial": "Morse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Morse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dit or a dah is all we need for Morse:\n A \u003ccode\u003edit\u003c/code\u003e is a dot; and a \u003ccode\u003edah\u003c/code\u003e is a dash in the Morsian world.\n We use \u003ccode\u003e\u003ca\u003eLBreak\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWBreak\u003c/a\u003e\u003c/code\u003e to indicate a letter and a word break\n so we can insert some delay between letters and words as we\n transmit.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "Morse",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Morse.html#Morse",
          "type": "data"
        },
        "index": {
          "description": "dit or dah is all we need for Morse dit is dot and dah is dash in the Morsian world We use LBreak and WBreak to indicate letter and word break so we can insert some delay between letters and words as we transmit",
          "hierarchy": "System Hardware Arduino SamplePrograms Morse",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "Morse",
          "package": "hArduino",
          "partial": "Morse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Morse.html#t:Morse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "Dah",
          "package": "hArduino",
          "signature": "Dah",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Morse.html#Morse",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino SamplePrograms Morse",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "Dah",
          "package": "hArduino",
          "partial": "Dah",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Morse.html#v:Dah"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "Dit",
          "package": "hArduino",
          "signature": "Dit",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Morse.html#Morse",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino SamplePrograms Morse",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "Dit",
          "package": "hArduino",
          "partial": "Dit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Morse.html#v:Dit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "LBreak",
          "package": "hArduino",
          "signature": "LBreak",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Morse.html#Morse",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino SamplePrograms Morse",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "LBreak",
          "package": "hArduino",
          "partial": "LBreak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Morse.html#v:LBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "WBreak",
          "package": "hArduino",
          "signature": "WBreak",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Morse.html#Morse",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino SamplePrograms Morse",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "WBreak",
          "package": "hArduino",
          "partial": "WBreak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Morse.html#v:WBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sentence, decode it. We simply drop any letters that we\n do not have a mapping for.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "decode",
          "package": "hArduino",
          "signature": "String -\u003e [Morse]",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Morse.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Given sentence decode it We simply drop any letters that we do not have mapping for",
          "hierarchy": "System Hardware Arduino SamplePrograms Morse",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "decode",
          "normalized": "String-\u003e[Morse]",
          "package": "hArduino",
          "signature": "String-\u003e[Morse]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Morse.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMorse code dictionary\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "dict",
          "package": "hArduino",
          "signature": "[(Char, [Morse])]",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Morse.html#dict",
          "type": "function"
        },
        "index": {
          "description": "Morse code dictionary",
          "hierarchy": "System Hardware Arduino SamplePrograms Morse",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "dict",
          "normalized": "[(Char,[Morse])]",
          "package": "hArduino",
          "signature": "[(Char,[Morse])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Morse.html#v:dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple demo driver. To run this example, you only need the Arduino connected to your\n computer, no other hardware is needed. We use the internal led on pin 13. Of course,\n you can attach a led to pin 13 as well, for artistic effect.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/Blink.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "morseDemo",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Morse.html#morseDemo",
          "type": "function"
        },
        "index": {
          "description": "simple demo driver To run this example you only need the Arduino connected to your computer no other hardware is needed We use the internal led on pin Of course you can attach led to pin as well for artistic effect",
          "hierarchy": "System Hardware Arduino SamplePrograms Morse",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "morseDemo",
          "normalized": "IO()",
          "package": "hArduino",
          "partial": "Demo",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Morse.html#v:morseDemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a morsified sentence, compute the delay times. A \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e value means\n turn the led on that long, a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e value means turn it off that long.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "morsify",
          "package": "hArduino",
          "signature": "[Morse] -\u003e [Either Int Int]",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Morse.html#morsify",
          "type": "function"
        },
        "index": {
          "description": "Given morsified sentence compute the delay times Left value means turn the led on that long Right value means turn it off that long",
          "hierarchy": "System Hardware Arduino SamplePrograms Morse",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "morsify",
          "normalized": "[Morse]-\u003e[Either Int Int]",
          "package": "hArduino",
          "signature": "[Morse]-\u003e[Either Int Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Morse.html#v:morsify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinally, turn a full sentence into a sequence of blink on/off codes\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "transmit",
          "package": "hArduino",
          "signature": "Pin -\u003e String -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Morse.html#transmit",
          "type": "function"
        },
        "index": {
          "description": "Finally turn full sentence into sequence of blink on off codes",
          "hierarchy": "System Hardware Arduino SamplePrograms Morse",
          "module": "System.Hardware.Arduino.SamplePrograms.Morse",
          "name": "transmit",
          "normalized": "Pin-\u003eString-\u003eArduino()",
          "package": "hArduino",
          "signature": "Pin-\u003eString-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Morse.html#v:transmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple number guessing game on the OSEPP Keyboard shield.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThanks to David Palmer for lending me his OSEPP shield to play with!\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "NumGuess",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-NumGuess.html",
          "type": "module"
        },
        "index": {
          "description": "Simple number guessing game on the OSEPP Keyboard shield Thanks to David Palmer for lending me his OSEPP shield to play with",
          "hierarchy": "System Hardware Arduino SamplePrograms NumGuess",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "NumGuess",
          "package": "hArduino",
          "partial": "Num Guess",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-NumGuess.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere are 5 keys on the OSepp shield.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "Key",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-NumGuess.html#Key",
          "type": "data"
        },
        "index": {
          "description": "There are keys on the OSepp shield",
          "hierarchy": "System Hardware Arduino SamplePrograms NumGuess",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "Key",
          "package": "hArduino",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-NumGuess.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "KeyDown",
          "package": "hArduino",
          "signature": "KeyDown",
          "source": "src/System-Hardware-Arduino-SamplePrograms-NumGuess.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino SamplePrograms NumGuess",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "KeyDown",
          "package": "hArduino",
          "partial": "Key Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-NumGuess.html#v:KeyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "KeyLeft",
          "package": "hArduino",
          "signature": "KeyLeft",
          "source": "src/System-Hardware-Arduino-SamplePrograms-NumGuess.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino SamplePrograms NumGuess",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "KeyLeft",
          "package": "hArduino",
          "partial": "Key Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-NumGuess.html#v:KeyLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "KeyRight",
          "package": "hArduino",
          "signature": "KeyRight",
          "source": "src/System-Hardware-Arduino-SamplePrograms-NumGuess.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino SamplePrograms NumGuess",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "KeyRight",
          "package": "hArduino",
          "partial": "Key Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-NumGuess.html#v:KeyRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "KeySelect",
          "package": "hArduino",
          "signature": "KeySelect",
          "source": "src/System-Hardware-Arduino-SamplePrograms-NumGuess.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino SamplePrograms NumGuess",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "KeySelect",
          "package": "hArduino",
          "partial": "Key Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-NumGuess.html#v:KeySelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "KeyUp",
          "package": "hArduino",
          "signature": "KeyUp",
          "source": "src/System-Hardware-Arduino-SamplePrograms-NumGuess.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Arduino SamplePrograms NumGuess",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "KeyUp",
          "package": "hArduino",
          "partial": "Key Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-NumGuess.html#v:KeyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry to the classing number guessing game. Simply initialize the\n shield and call our game function.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "guessGame",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-NumGuess.html#guessGame",
          "type": "function"
        },
        "index": {
          "description": "Entry to the classing number guessing game Simply initialize the shield and call our game function",
          "hierarchy": "System Hardware Arduino SamplePrograms NumGuess",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "guessGame",
          "normalized": "IO()",
          "package": "hArduino",
          "partial": "Game",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-NumGuess.html#v:guessGame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the shield. This is essentially simply registering the\n lcd with the HArduino library. In addition, we return two values to\n the user:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A function to control the back-light\n\u003c/li\u003e\u003cli\u003e A function to read (if any) key-pressed\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "initOSepp",
          "package": "hArduino",
          "signature": "Arduino (LCD, Bool -\u003e Arduino (), Arduino (Maybe Key))",
          "source": "src/System-Hardware-Arduino-SamplePrograms-NumGuess.html#initOSepp",
          "type": "function"
        },
        "index": {
          "description": "Initialize the shield This is essentially simply registering the lcd with the HArduino library In addition we return two values to the user function to control the back-light function to read if any key-pressed",
          "hierarchy": "System Hardware Arduino SamplePrograms NumGuess",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "initOSepp",
          "normalized": "Arduino(LCD,Bool-\u003eArduino(),Arduino(Maybe Key))",
          "package": "hArduino",
          "partial": "OSepp",
          "signature": "Arduino(LCD,Bool-\u003eArduino(),Arduino(Maybe Key))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-NumGuess.html#v:initOSepp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber guessing game, as a simple LCD demo. User thinks of a number\n between \u003ccode\u003e0\u003c/code\u003e and \u003ccode\u003e1000\u003c/code\u003e, and the Arduino guesses it.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "numGuess",
          "package": "hArduino",
          "signature": "LCD -\u003e (Bool -\u003e Arduino ()) -\u003e Arduino (Maybe Key) -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-NumGuess.html#numGuess",
          "type": "function"
        },
        "index": {
          "description": "Number guessing game as simple LCD demo User thinks of number between and and the Arduino guesses it",
          "hierarchy": "System Hardware Arduino SamplePrograms NumGuess",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "numGuess",
          "normalized": "LCD-\u003e(Bool-\u003eArduino())-\u003eArduino(Maybe Key)-\u003eArduino()",
          "package": "hArduino",
          "partial": "Guess",
          "signature": "LCD-\u003e(Bool-\u003eArduino())-\u003eArduino(Maybe Key)-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-NumGuess.html#v:numGuess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe OSepp LCD Shield is a 16x2 LCD using a Hitachi Controller\n Furthermore, it has backlight, and 5 buttons. The hook-up is\n quite straightforward, using our existing Hitachi44780 controller\n as an example. More information on this shield can be found at:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://osepp.com/products/shield-arduino-compatible/16x2-lcd-display-keypad-shield/\u003c/a\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "osepp",
          "package": "hArduino",
          "signature": "LCDController",
          "source": "src/System-Hardware-Arduino-SamplePrograms-NumGuess.html#osepp",
          "type": "function"
        },
        "index": {
          "description": "The OSepp LCD Shield is x2 LCD using Hitachi Controller Furthermore it has backlight and buttons The hook-up is quite straightforward using our existing Hitachi44780 controller as an example More information on this shield can be found at http osepp.com products shield-arduino-compatible x2-lcd-display-keypad-shield",
          "hierarchy": "System Hardware Arduino SamplePrograms NumGuess",
          "module": "System.Hardware.Arduino.SamplePrograms.NumGuess",
          "name": "osepp",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-NumGuess.html#v:osepp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDemonstrates \u003ccode\u003e\u003ca\u003epulseIn_hostTiming\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epulseOut_hostTiming\u003c/a\u003e\u003c/code\u003e functions, sending\n and receiving pulses to/from the board.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Pulse",
          "name": "Pulse",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Pulse.html",
          "type": "module"
        },
        "index": {
          "description": "Demonstrates pulseIn hostTiming and pulseOut hostTiming functions sending and receiving pulses to from the board",
          "hierarchy": "System Hardware Arduino SamplePrograms Pulse",
          "module": "System.Hardware.Arduino.SamplePrograms.Pulse",
          "name": "Pulse",
          "package": "hArduino",
          "partial": "Pulse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Pulse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the amount of time a push-button is connected to\n input pin 2 on the Arduino. We will wait for at most 5 seconds,\n as a further demonstration of the time-out facility. Note that the\n timing is done on the host side, so this measurement is inherently\n inaccurate.\n\u003c/p\u003e\u003cp\u003eThe wiring is straightforward: Simply put a push-button between\n digital input 2 and +5V, guarded by a 10K resistor:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/PulseIn.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Pulse",
          "name": "pulseInDemo",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Pulse.html#pulseInDemo",
          "type": "function"
        },
        "index": {
          "description": "Computes the amount of time push-button is connected to input pin on the Arduino We will wait for at most seconds as further demonstration of the time-out facility Note that the timing is done on the host side so this measurement is inherently inaccurate The wiring is straightforward Simply put push-button between digital input and guarded by resistor",
          "hierarchy": "System Hardware Arduino SamplePrograms Pulse",
          "module": "System.Hardware.Arduino.SamplePrograms.Pulse",
          "name": "pulseInDemo",
          "normalized": "IO()",
          "package": "hArduino",
          "partial": "In Demo",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Pulse.html#v:pulseInDemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend pulses on a led as requested by the user. Note that the timing is computed\n on the host side, thus the duration of the pulse is subject to some error due to\n the Firmata communication overhead.\n\u003c/p\u003e\u003cp\u003eWiring: Simply a led on pin 13:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/Blink.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Pulse",
          "name": "pulseOutDemo",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Pulse.html#pulseOutDemo",
          "type": "function"
        },
        "index": {
          "description": "Send pulses on led as requested by the user Note that the timing is computed on the host side thus the duration of the pulse is subject to some error due to the Firmata communication overhead Wiring Simply led on pin",
          "hierarchy": "System Hardware Arduino SamplePrograms Pulse",
          "module": "System.Hardware.Arduino.SamplePrograms.Pulse",
          "name": "pulseOutDemo",
          "normalized": "IO()",
          "package": "hArduino",
          "partial": "Out Demo",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Pulse.html#v:pulseOutDemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDemonstrates basic Servo motor control\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Servo",
          "name": "Servo",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Servo.html",
          "type": "module"
        },
        "index": {
          "description": "Demonstrates basic Servo motor control",
          "hierarchy": "System Hardware Arduino SamplePrograms Servo",
          "module": "System.Hardware.Arduino.SamplePrograms.Servo",
          "name": "Servo",
          "package": "hArduino",
          "partial": "Servo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Servo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl a servo, by executing user requests of blade movement.  We allow 3 user commands:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003el\u003c/code\u003e to swipe from angle-0 to 180;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e to swipe from angle-180 to 0;\n\u003c/li\u003e\u003cli\u003e Or any number between \u003ccode\u003e0\u003c/code\u003e to \u003ccode\u003e180\u003c/code\u003e, which puts the servo to the desired position.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAlmost any servo motor would work with this example, though you should make sure to adjust min/max pulse durations\n in the \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003e command to match the datasheet of the servo you have. In this example, we have used the HS-55 feather\n servo (\u003ca\u003ehttp://www.servocity.com/html/hs-55_sub-micro.html\u003c/a\u003e), which has the values 600 to 2400 micro-seconds.\n\u003c/p\u003e\u003cp\u003eTo connect the servo to the Arduino, simply connect the VCC (red) and the GND (black) appropriately, and the signal line (white)\n to any SERVO capable pin, in this example we're using pin number 9:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/Servo.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Servo",
          "name": "servo",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Servo.html#servo",
          "type": "function"
        },
        "index": {
          "description": "Control servo by executing user requests of blade movement We allow user commands to swipe from angle-0 to to swipe from angle-180 to Or any number between to which puts the servo to the desired position Almost any servo motor would work with this example though you should make sure to adjust min max pulse durations in the attach command to match the datasheet of the servo you have In this example we have used the HS-55 feather servo http www.servocity.com html hs-55 sub-micro.html which has the values to micro-seconds To connect the servo to the Arduino simply connect the VCC red and the GND black appropriately and the signal line white to any SERVO capable pin in this example we re using pin number",
          "hierarchy": "System Hardware Arduino SamplePrograms Servo",
          "module": "System.Hardware.Arduino.SamplePrograms.Servo",
          "name": "servo",
          "normalized": "IO()",
          "package": "hArduino",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Servo.html#v:servo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl a servo, as guided by the input read from a potentiometer. The set-up is similar to the \u003ccode\u003e\u003ca\u003eservo\u003c/a\u003e\u003c/code\u003e example\n above, except instead of querying the user for the angle, we use the readings from a potentiometer connected to\n analog input number 2. We used a 10 KOhm potentiometer, but other pots would work just as well too:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/ServoAnalog.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.Servo",
          "name": "servoAnalog",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-Servo.html#servoAnalog",
          "type": "function"
        },
        "index": {
          "description": "Control servo as guided by the input read from potentiometer The set-up is similar to the servo example above except instead of querying the user for the angle we use the readings from potentiometer connected to analog input number We used KOhm potentiometer but other pots would work just as well too",
          "hierarchy": "System Hardware Arduino SamplePrograms Servo",
          "module": "System.Hardware.Arduino.SamplePrograms.Servo",
          "name": "servoAnalog",
          "normalized": "IO()",
          "package": "hArduino",
          "partial": "Analog",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-Servo.html#v:servoAnalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eControl a single seven-segment display, echoing user's key presses\n on it verbatim. We use a shift-register to reduce the number of\n pins we need on the Arduino to control the display.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.SevenSegment",
          "name": "SevenSegment",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-SamplePrograms-SevenSegment.html",
          "type": "module"
        },
        "index": {
          "description": "Control single seven-segment display echoing user key presses on it verbatim We use shift-register to reduce the number of pins we need on the Arduino to control the display",
          "hierarchy": "System Hardware Arduino SamplePrograms SevenSegment",
          "module": "System.Hardware.Arduino.SamplePrograms.SevenSegment",
          "name": "SevenSegment",
          "package": "hArduino",
          "partial": "Seven Segment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-SevenSegment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeven-segment display demo. For each key-press, we display an equivalent pattern\n on the connected 7-segment-display. Note that most characters are not-mappable, so\n we use approximations if available. We use a shift-register to reduce the pin\n requirements on the Arduino, setting the bits serially.\n\u003c/p\u003e\u003cp\u003eParts:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The seven-segment digit we use is a common-cathode single-digit display, such as\n     TDSG5150 (\u003ca\u003ehttp://www.vishay.com/docs/83126/83126.pdf\u003c/a\u003e), or Microvity's IS121,\n     but almost any such digit would do. Just pay attention to the line-connections,\n     and do not forget the limiting resistors: 220 ohm's should do nicely.\n\u003c/li\u003e\u003cli\u003e The shift-register is Texas-Instruments 74HC595: \u003ca\u003ehttp://www.ti.com/lit/ds/symlink/sn74hc595.pdf\u003c/a\u003e.\n     Make sure to connect the register output lines to the seven-segment displays with the corresponding\n     letters. That is, shift-registers \u003ccode\u003eQ_A\u003c/code\u003e (Chip-pin 15) should connect to segment \u003ccode\u003eA\u003c/code\u003e; \u003ccode\u003eQ_B\u003c/code\u003e (Chip-pin 1)\n     to segment \u003ccode\u003eB\u003c/code\u003e, and so on. We do not use the shift-register \u003ccode\u003eQ_H'\u003c/code\u003e (Chip-pin 9) in this design.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cimg src=\"http://github.com/LeventErkok/hArduino/raw/master/System/Hardware/Arduino/SamplePrograms/Schematics/SevenSegment.png\"/\u003e\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.SevenSegment",
          "name": "sevenSegment",
          "package": "hArduino",
          "signature": "IO ()",
          "source": "src/System-Hardware-Arduino-SamplePrograms-SevenSegment.html#sevenSegment",
          "type": "function"
        },
        "index": {
          "description": "Seven-segment display demo For each key-press we display an equivalent pattern on the connected segment-display Note that most characters are not-mappable so we use approximations if available We use shift-register to reduce the pin requirements on the Arduino setting the bits serially Parts The seven-segment digit we use is common-cathode single-digit display such as TDSG5150 http www.vishay.com docs pdf or Microvity IS121 but almost any such digit would do Just pay attention to the line-connections and do not forget the limiting resistors ohm should do nicely The shift-register is Texas-Instruments HC595 http www.ti.com lit ds symlink sn74hc595.pdf Make sure to connect the register output lines to the seven-segment displays with the corresponding letters That is shift-registers Chip-pin should connect to segment Chip-pin to segment and so on We do not use the shift-register Chip-pin in this design",
          "hierarchy": "System Hardware Arduino SamplePrograms SevenSegment",
          "module": "System.Hardware.Arduino.SamplePrograms.SevenSegment",
          "name": "sevenSegment",
          "normalized": "IO()",
          "package": "hArduino",
          "partial": "Segment",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-SevenSegment.html#v:sevenSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnections for the Texas Instruments 74HC595 shift-register. Datasheet: \u003ca\u003ehttp://www.ti.com/lit/ds/symlink/sn74hc595.pdf\u003c/a\u003e.\n In our circuit, we merely use pins 8 thru 12 on the Arduino to control the \u003ccode\u003e\u003ca\u003eserial\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eenable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erClock\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esClock\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003enClear\u003c/a\u003e\u003c/code\u003e\n lines, respectively. Since we do not need to read the output of the shift-register, we leave the \u003ccode\u003ebits\u003c/code\u003e field unconnected.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino.SamplePrograms.SevenSegment",
          "name": "sr",
          "package": "hArduino",
          "signature": "SR_74HC595",
          "source": "src/System-Hardware-Arduino-SamplePrograms-SevenSegment.html#sr",
          "type": "function"
        },
        "index": {
          "description": "Connections for the Texas Instruments HC595 shift-register Datasheet http www.ti.com lit ds symlink sn74hc595.pdf In our circuit we merely use pins thru on the Arduino to control the serial enable rClock sClock and nClear lines respectively Since we do not need to read the output of the shift-register we leave the bits field unconnected",
          "hierarchy": "System Hardware Arduino SamplePrograms SevenSegment",
          "module": "System.Hardware.Arduino.SamplePrograms.SevenSegment",
          "name": "sr",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino-SamplePrograms-SevenSegment.html#v:sr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ehArduino allows Haskell programs to control Arduino boards (\u003ca\u003ehttp://www.arduino.cc\u003c/a\u003e)\n and peripherals, using the Firmata protocol (\u003ca\u003ehttp://firmata.org\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eFor details, see: \u003ca\u003ehttp://leventerkok.github.com/hArduino\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Arduino",
          "name": "Arduino",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino.html",
          "type": "module"
        },
        "index": {
          "description": "hArduino allows Haskell programs to control Arduino boards http www.arduino.cc and peripherals using the Firmata protocol http firmata.org For details see http leventerkok.github.com hArduino",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "Arduino",
          "package": "hArduino",
          "partial": "Arduino",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Arduino monad.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "Arduino",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Data.html#Arduino",
          "type": "data"
        },
        "index": {
          "description": "The Arduino monad",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "Arduino",
          "package": "hArduino",
          "partial": "Arduino",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#t:Arduino"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pin on the Arduino, as specified by the user via \u003ccode\u003e\u003ca\u003epin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edigital\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eanalog\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "Pin",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Data.html#Pin",
          "type": "data"
        },
        "index": {
          "description": "pin on the Arduino as specified by the user via pin digital and analog functions",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "Pin",
          "package": "hArduino",
          "partial": "Pin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#t:Pin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe mode for a pin.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "PinMode",
          "package": "hArduino",
          "source": "src/System-Hardware-Arduino-Data.html#PinMode",
          "type": "data"
        },
        "index": {
          "description": "The mode for pin",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "PinMode",
          "package": "hArduino",
          "partial": "Pin Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#t:PinMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalog input\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "ANALOG",
          "package": "hArduino",
          "signature": "ANALOG",
          "source": "src/System-Hardware-Arduino-Data.html#PinMode",
          "type": "function"
        },
        "index": {
          "description": "Analog input",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "ANALOG",
          "package": "hArduino",
          "partial": "ANALOG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:ANALOG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI2C (Inter-Integrated-Circuit) connection\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "I2C",
          "package": "hArduino",
          "signature": "I2C",
          "source": "src/System-Hardware-Arduino-Data.html#PinMode",
          "type": "function"
        },
        "index": {
          "description": "I2C Inter-Integrated-Circuit connection",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "I2C",
          "package": "hArduino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:I2C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDigital input\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "INPUT",
          "package": "hArduino",
          "signature": "INPUT",
          "source": "src/System-Hardware-Arduino-Data.html#PinMode",
          "type": "function"
        },
        "index": {
          "description": "Digital input",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "INPUT",
          "package": "hArduino",
          "partial": "INPUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:INPUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDigital output\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "OUTPUT",
          "package": "hArduino",
          "signature": "OUTPUT",
          "source": "src/System-Hardware-Arduino-Data.html#PinMode",
          "type": "function"
        },
        "index": {
          "description": "Digital output",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "OUTPUT",
          "package": "hArduino",
          "partial": "OUTPUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:OUTPUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePWM (Pulse-Width-Modulation) output \n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "PWM",
          "package": "hArduino",
          "signature": "PWM",
          "source": "src/System-Hardware-Arduino-Data.html#PinMode",
          "type": "function"
        },
        "index": {
          "description": "PWM Pulse-Width-Modulation output",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "PWM",
          "package": "hArduino",
          "partial": "PWM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:PWM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServo Motor controller\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "SERVO",
          "package": "hArduino",
          "signature": "SERVO",
          "source": "src/System-Hardware-Arduino-Data.html#PinMode",
          "type": "function"
        },
        "index": {
          "description": "Servo Motor controller",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "SERVO",
          "package": "hArduino",
          "partial": "SERVO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:SERVO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift controller\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "SHIFT",
          "package": "hArduino",
          "signature": "SHIFT",
          "source": "src/System-Hardware-Arduino-Data.html#PinMode",
          "type": "function"
        },
        "index": {
          "description": "Shift controller",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "SHIFT",
          "package": "hArduino",
          "partial": "SHIFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:SHIFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an analog pin on the board. For instance, to refer to analog pin no 0\n simply use \u003ccode\u003e\u003ca\u003eanalog\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eanalog\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e0\u003c/code\u003e on an Arduino UNO will be appropriately adjusted\n internally to refer to pin 14, since UNO has 13 digital pins, while on an\n Arduino MEGA, it will refer to internal pin 55, since MEGA has 54 digital pins;\n and similarly for other boards depending on their capabilities.\n (Also see the note on \u003ccode\u003e\u003ca\u003epin\u003c/a\u003e\u003c/code\u003e for pin mappings.)\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "analog",
          "package": "hArduino",
          "signature": "Word8 -\u003e Pin",
          "source": "src/System-Hardware-Arduino-Data.html#analog",
          "type": "function"
        },
        "index": {
          "description": "Declare an analog pin on the board For instance to refer to analog pin no simply use analog Note that analog on an Arduino UNO will be appropriately adjusted internally to refer to pin since UNO has digital pins while on an Arduino MEGA it will refer to internal pin since MEGA has digital pins and similarly for other boards depending on their capabilities Also see the note on pin for pin mappings",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "analog",
          "normalized": "Word-\u003ePin",
          "package": "hArduino",
          "signature": "Word-\u003ePin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:analog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of a pin in analog mode; this is a non-blocking call, immediately\n returning the last sampled value. It returns \u003ccode\u003e0\u003c/code\u003e if the voltage on the pin\n is 0V, and \u003ccode\u003e1023\u003c/code\u003e if it is 5V, properly scaled. (See \u003ccode\u003e\u003ca\u003esetAnalogSamplingInterval\u003c/a\u003e\u003c/code\u003e for\n sampling frequency.)\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "analogRead",
          "package": "hArduino",
          "signature": "Pin -\u003e Arduino Int",
          "source": "src/System-Hardware-Arduino-Firmata.html#analogRead",
          "type": "function"
        },
        "index": {
          "description": "Read the value of pin in analog mode this is non-blocking call immediately returning the last sampled value It returns if the voltage on the pin is and if it is properly scaled See setAnalogSamplingInterval for sampling frequency",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "analogRead",
          "normalized": "Pin-\u003eArduino Int",
          "package": "hArduino",
          "partial": "Read",
          "signature": "Pin-\u003eArduino Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:analogRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a PWM analog value to a pin. The argument is an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, indicating the duty cycle.\n \u003ccode\u003e0\u003c/code\u003e means off; \u003ccode\u003e255\u003c/code\u003e means always on. Intermediate values will create a square wave\n on that pin with the given duty-cycle\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "analogWrite",
          "package": "hArduino",
          "signature": "Pin -\u003e Int -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Firmata.html#analogWrite",
          "type": "function"
        },
        "index": {
          "description": "Write PWM analog value to pin The argument is an Int indicating the duty cycle means off means always on Intermediate values will create square wave on that pin with the given duty-cycle",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "analogWrite",
          "normalized": "Pin-\u003eInt-\u003eArduino()",
          "package": "hArduino",
          "partial": "Write",
          "signature": "Pin-\u003eInt-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:analogWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay the computaton for a given number of milli-seconds\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "delay",
          "package": "hArduino",
          "signature": "Int -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Firmata.html#delay",
          "type": "function"
        },
        "index": {
          "description": "Delay the computaton for given number of milli-seconds",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "delay",
          "normalized": "Int-\u003eArduino()",
          "package": "hArduino",
          "signature": "Int-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an digital pin on the board. For instance, to refer to digital pin no 12\n use \u003ccode\u003e\u003ca\u003edigital\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e12\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "digital",
          "package": "hArduino",
          "signature": "Word8 -\u003e Pin",
          "source": "src/System-Hardware-Arduino-Data.html#digital",
          "type": "function"
        },
        "index": {
          "description": "Declare an digital pin on the board For instance to refer to digital pin no use digital",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "digital",
          "normalized": "Word-\u003ePin",
          "package": "hArduino",
          "signature": "Word-\u003ePin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:digital"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of a pin in digital mode; this is a non-blocking call, returning\n the current value immediately. See \u003ccode\u003e\u003ca\u003ewaitFor\u003c/a\u003e\u003c/code\u003e for a version that waits for a change\n in the pin first.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "digitalRead",
          "package": "hArduino",
          "signature": "Pin -\u003e Arduino Bool",
          "source": "src/System-Hardware-Arduino-Firmata.html#digitalRead",
          "type": "function"
        },
        "index": {
          "description": "Read the value of pin in digital mode this is non-blocking call returning the current value immediately See waitFor for version that waits for change in the pin first",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "digitalRead",
          "normalized": "Pin-\u003eArduino Bool",
          "package": "hArduino",
          "partial": "Read",
          "signature": "Pin-\u003eArduino Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:digitalRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet or clear a digital pin on the board\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "digitalWrite",
          "package": "hArduino",
          "signature": "Pin -\u003e Bool -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Firmata.html#digitalWrite",
          "type": "function"
        },
        "index": {
          "description": "Set or clear digital pin on the board",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "digitalWrite",
          "normalized": "Pin-\u003eBool-\u003eArduino()",
          "package": "hArduino",
          "partial": "Write",
          "signature": "Pin-\u003eBool-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:digitalWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a pin by its index. For maximum portability, prefer \u003ccode\u003e\u003ca\u003edigital\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eanalog\u003c/a\u003e\u003c/code\u003e functions, which will adjust pin indexes properly based on\n which board the program is running on at run-time, as Arduino boards\n differ in their pin numbers. This function is provided for cases where\n a pin is used in mixed-mode, i.e., both for digital and analog purposes,\n as Arduino does not really distinguish pin usage. In these cases, the\n user has the proof obligation to make sure that the index used is supported\n on the board with appropriate capabilities.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "pin",
          "package": "hArduino",
          "signature": "Word8 -\u003e Pin",
          "source": "src/System-Hardware-Arduino-Data.html#pin",
          "type": "function"
        },
        "index": {
          "description": "Declare pin by its index For maximum portability prefer digital and analog functions which will adjust pin indexes properly based on which board the program is running on at run-time as Arduino boards differ in their pin numbers This function is provided for cases where pin is used in mixed-mode i.e both for digital and analog purposes as Arduino does not really distinguish pin usage In these cases the user has the proof obligation to make sure that the index used is supported on the board with appropriate capabilities",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "pin",
          "normalized": "Word-\u003ePin",
          "package": "hArduino",
          "signature": "Word-\u003ePin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:pin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn on/off internal pull-up resistor on an input pin\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "pullUpResistor",
          "package": "hArduino",
          "signature": "Pin -\u003e Bool -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Firmata.html#pullUpResistor",
          "type": "function"
        },
        "index": {
          "description": "Turn on off internal pull-up resistor on an input pin",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "pullUpResistor",
          "normalized": "Pin-\u003eBool-\u003eArduino()",
          "package": "hArduino",
          "partial": "Up Resistor",
          "signature": "Pin-\u003eBool-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:pullUpResistor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend down a pulse, and measure how long the pin reports a corresponding pulse, with a potential time-out. The call \u003ccode\u003epulse p v duration mbTimeOut\u003c/code\u003e\n does the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Set the pin to value \u003ccode\u003ev\u003c/code\u003e for \u003ccode\u003eduration\u003c/code\u003e microseconds.\n\u003c/li\u003e\u003cli\u003e Waits 2 microseconds\n\u003c/li\u003e\u003cli\u003e Waits until pin \u003ccode\u003ep\u003c/code\u003e has value \u003ccode\u003enot v\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Returns, in micro-seconds, the duration the pin stayed \u003ccode\u003ev\u003c/code\u003e, counting from the 2 microsecond wait.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTime-out parameter is used as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003embTimeOut\u003c/code\u003e is \u003ccode\u003eNothing\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003epulse\u003c/a\u003e\u003c/code\u003e will wait until the pin attains the value required and so long as it holds it.\n    Note that very-long time-out values are unlikely to be accurate.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003embTimeOut\u003c/code\u003e is \u003ccode\u003eJust t\u003c/code\u003e then, \u003ccode\u003e\u003ca\u003epulse\u003c/a\u003e\u003c/code\u003e will stop if the above procedure does not complete within the given micro-seconds.\n    In this case, the overall return value is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNB. Both the time-out value and the return value are given in micro-seconds.\n\u003c/p\u003e\u003cp\u003eNB. As of March 2 2013; StandardFirmata that's distributed with the Arduino-App does \u003cem\u003enot\u003c/em\u003e support the Pulse-In command.\n However, there is a patch to add this command; see: \u003ca\u003ehttp://github.com/rwldrn/johnny-five/issues/18\u003c/a\u003e for details.\n If you want to use hArduino's \u003ccode\u003epulseIn\u003c/code\u003e command, then you \u003cem\u003ehave\u003c/em\u003e to install the above patch. Also see the function\n \u003ccode\u003epulseIn_hostOnly\u003c/code\u003e, which works with the distributed StandardFirmata: It implements a version that is not as\n accurate in its timing, but might be sufficient if high precision is not required.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "pulse",
          "package": "hArduino",
          "signature": "Pin -\u003e Bool -\u003e Int -\u003e Maybe Int -\u003e Arduino (Maybe Int)",
          "source": "src/System-Hardware-Arduino-Firmata.html#pulse",
          "type": "function"
        },
        "index": {
          "description": "Send down pulse and measure how long the pin reports corresponding pulse with potential time-out The call pulse duration mbTimeOut does the following Set the pin to value for duration microseconds Waits microseconds Waits until pin has value not Returns in micro-seconds the duration the pin stayed counting from the microsecond wait Time-out parameter is used as follows If mbTimeOut is Nothing then pulse will wait until the pin attains the value required and so long as it holds it Note that very-long time-out values are unlikely to be accurate If mbTimeOut is Just then pulse will stop if the above procedure does not complete within the given micro-seconds In this case the overall return value is Nothing NB Both the time-out value and the return value are given in micro-seconds NB As of March StandardFirmata that distributed with the Arduino-App does not support the Pulse-In command However there is patch to add this command see http github.com rwldrn johnny-five issues for details If you want to use hArduino pulseIn command then you have to install the above patch Also see the function pulseIn hostOnly which works with the distributed StandardFirmata It implements version that is not as accurate in its timing but might be sufficient if high precision is not required",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "pulse",
          "normalized": "Pin-\u003eBool-\u003eInt-\u003eMaybe Int-\u003eArduino(Maybe Int)",
          "package": "hArduino",
          "signature": "Pin-\u003eBool-\u003eInt-\u003eMaybe Int-\u003eArduino(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:pulse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003ehostOnly\u003c/em\u003e version of pulse-in on a digital-pin. Use this function only for cases where the\n precision required only matters for the host, not for the board. That is, due to the inherent\n delays involved in Firmata communication, the timing will \u003cem\u003enot\u003c/em\u003e be accurate, and should not\n be expected to work uniformly over different boards. Similar comments apply for \u003ccode\u003e\u003ca\u003epulseOut_hostTiming\u003c/a\u003e\u003c/code\u003e\n as well. See the function \u003ccode\u003e\u003ca\u003epulse\u003c/a\u003e\u003c/code\u003e for a more accurate version.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "pulseIn_hostTiming",
          "package": "hArduino",
          "signature": "Pin -\u003e Bool -\u003e Maybe Int -\u003e Arduino (Maybe Int)",
          "source": "src/System-Hardware-Arduino-Firmata.html#pulseIn_hostTiming",
          "type": "function"
        },
        "index": {
          "description": "hostOnly version of pulse-in on digital-pin Use this function only for cases where the precision required only matters for the host not for the board That is due to the inherent delays involved in Firmata communication the timing will not be accurate and should not be expected to work uniformly over different boards Similar comments apply for pulseOut hostTiming as well See the function pulse for more accurate version",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "pulseIn_hostTiming",
          "normalized": "Pin-\u003eBool-\u003eMaybe Int-\u003eArduino(Maybe Int)",
          "package": "hArduino",
          "partial": "In Timing",
          "signature": "Pin-\u003eBool-\u003eMaybe Int-\u003eArduino(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:pulseIn_hostTiming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003ehostOnly\u003c/em\u003e version of pulse-out on a digital-pin. Use this function only for cases where the\n precision required only matters for the host, not for the board. That is, due to the inherent\n delays involved in Firmata communication, the timing will \u003cem\u003enot\u003c/em\u003e be accurate, and should not\n be expected to work uniformly over different boards. Similar comments apply for \u003ccode\u003e\u003ca\u003epulseIn_hostTiming\u003c/a\u003e\u003c/code\u003e\n as well. See the function \u003ccode\u003e\u003ca\u003epulse\u003c/a\u003e\u003c/code\u003e for a more accurate version.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "pulseOut_hostTiming",
          "package": "hArduino",
          "signature": "Pin-\u003e Bool-\u003e Int-\u003e Int-\u003e Arduino ()",
          "type": "function"
        },
        "index": {
          "description": "hostOnly version of pulse-out on digital-pin Use this function only for cases where the precision required only matters for the host not for the board That is due to the inherent delays involved in Firmata communication the timing will not be accurate and should not be expected to work uniformly over different boards Similar comments apply for pulseIn hostTiming as well See the function pulse for more accurate version",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "pulseOut_hostTiming",
          "normalized": "Pin-\u003eBool-\u003eInt-\u003eInt-\u003eArduino()",
          "package": "hArduino",
          "partial": "Out Timing",
          "signature": "Pin-\u003eBool-\u003eInt-\u003eInt-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:pulseOut_hostTiming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the Firmata firmware version running on the Arduino. The first\n component is the major, second is the minor. The final value is a human\n readable identifier for the particular board.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "queryFirmware",
          "package": "hArduino",
          "signature": "Arduino (Word8, Word8, String)",
          "source": "src/System-Hardware-Arduino-Firmata.html#queryFirmware",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the Firmata firmware version running on the Arduino The first component is the major second is the minor The final value is human readable identifier for the particular board",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "queryFirmware",
          "normalized": "Arduino(Word,Word,String)",
          "package": "hArduino",
          "partial": "Firmware",
          "signature": "Arduino(Word,Word,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:queryFirmware"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the analog sampling interval, in milliseconds. Arduino uses a default of 19ms to sample analog and I2C\n signals, which is fine for many applications, but can be modified if needed. The argument\n should be a number between \u003ccode\u003e10\u003c/code\u003e and \u003ccode\u003e16384\u003c/code\u003e; \u003ccode\u003e10\u003c/code\u003e being the minumum sampling interval supported by Arduino\n and \u003ccode\u003e16383\u003c/code\u003e being the largest value we can represent in 14 bits that this message can handle. (Note that\n the largest value is just about \u003ccode\u003e16\u003c/code\u003e seconds, which is plenty infrequent for all practical needs.)\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "setAnalogSamplingInterval",
          "package": "hArduino",
          "signature": "Int -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Firmata.html#setAnalogSamplingInterval",
          "type": "function"
        },
        "index": {
          "description": "Set the analog sampling interval in milliseconds Arduino uses default of ms to sample analog and I2C signals which is fine for many applications but can be modified if needed The argument should be number between and being the minumum sampling interval supported by Arduino and being the largest value we can represent in bits that this message can handle Note that the largest value is just about seconds which is plenty infrequent for all practical needs",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "setAnalogSamplingInterval",
          "normalized": "Int-\u003eArduino()",
          "package": "hArduino",
          "partial": "Analog Sampling Interval",
          "signature": "Int-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:setAnalogSamplingInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the mode on a particular pin on the board\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "setPinMode",
          "package": "hArduino",
          "signature": "Pin -\u003e PinMode -\u003e Arduino ()",
          "source": "src/System-Hardware-Arduino-Firmata.html#setPinMode",
          "type": "function"
        },
        "index": {
          "description": "Set the mode on particular pin on the board",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "setPinMode",
          "normalized": "Pin-\u003ePinMode-\u003eArduino()",
          "package": "hArduino",
          "partial": "Pin Mode",
          "signature": "Pin-\u003ePinMode-\u003eArduino()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:setPinMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime a given action, result is measured in micro-seconds.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "time",
          "package": "hArduino",
          "signature": "Arduino a -\u003e Arduino (Int, a)",
          "source": "src/System-Hardware-Arduino-Firmata.html#time",
          "type": "function"
        },
        "index": {
          "description": "Time given action result is measured in micro-seconds",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "time",
          "normalized": "Arduino a-\u003eArduino(Int,a)",
          "package": "hArduino",
          "signature": "Arduino a-\u003eArduino(Int,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime-out a given action. Time-out amount is in micro-seconds.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "timeOut",
          "package": "hArduino",
          "signature": "Int -\u003e Arduino a -\u003e Arduino (Maybe a)",
          "source": "src/System-Hardware-Arduino-Firmata.html#timeOut",
          "type": "function"
        },
        "index": {
          "description": "Time-out given action Time-out amount is in micro-seconds",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "timeOut",
          "normalized": "Int-\u003eArduino a-\u003eArduino(Maybe a)",
          "package": "hArduino",
          "partial": "Out",
          "signature": "Int-\u003eArduino a-\u003eArduino(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:timeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a change in any of the given pins. Once a change is detected, all the new values are\n returned. Similar to \u003ccode\u003e\u003ca\u003ewaitFor\u003c/a\u003e\u003c/code\u003e, but is useful when we are watching multiple digital inputs.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "waitAny",
          "package": "hArduino",
          "signature": "[Pin] -\u003e Arduino [Bool]",
          "source": "src/System-Hardware-Arduino-Firmata.html#waitAny",
          "type": "function"
        },
        "index": {
          "description": "Wait for change in any of the given pins Once change is detected all the new values are returned Similar to waitFor but is useful when we are watching multiple digital inputs",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "waitAny",
          "normalized": "[Pin]-\u003eArduino[Bool]",
          "package": "hArduino",
          "partial": "Any",
          "signature": "[Pin]-\u003eArduino[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:waitAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for any of the given pins to go from low to high. If all of the pins are high to start\n with, then we first wait for one of them to go low, and then wait for one of them to go back high.\n Returns the new values.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "waitAnyHigh",
          "package": "hArduino",
          "signature": "[Pin] -\u003e Arduino [Bool]",
          "source": "src/System-Hardware-Arduino-Firmata.html#waitAnyHigh",
          "type": "function"
        },
        "index": {
          "description": "Wait for any of the given pins to go from low to high If all of the pins are high to start with then we first wait for one of them to go low and then wait for one of them to go back high Returns the new values",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "waitAnyHigh",
          "normalized": "[Pin]-\u003eArduino[Bool]",
          "package": "hArduino",
          "partial": "Any High",
          "signature": "[Pin]-\u003eArduino[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:waitAnyHigh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for any of the given pins to go from high to low. If all of the pins are low to start\n with, then we first wait for one of them to go high, and then wait for one of them to go back low.\n Returns the new values.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "waitAnyLow",
          "package": "hArduino",
          "signature": "[Pin] -\u003e Arduino [Bool]",
          "source": "src/System-Hardware-Arduino-Firmata.html#waitAnyLow",
          "type": "function"
        },
        "index": {
          "description": "Wait for any of the given pins to go from high to low If all of the pins are low to start with then we first wait for one of them to go high and then wait for one of them to go back low Returns the new values",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "waitAnyLow",
          "normalized": "[Pin]-\u003eArduino[Bool]",
          "package": "hArduino",
          "partial": "Any Low",
          "signature": "[Pin]-\u003eArduino[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:waitAnyLow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a change in the value of the digital input pin. Returns the new value.\n Note that this is a blocking call. For a non-blocking version, see \u003ccode\u003e\u003ca\u003edigitalRead\u003c/a\u003e\u003c/code\u003e, which returns the current\n value of a pin immediately.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "waitFor",
          "package": "hArduino",
          "signature": "Pin -\u003e Arduino Bool",
          "source": "src/System-Hardware-Arduino-Firmata.html#waitFor",
          "type": "function"
        },
        "index": {
          "description": "Wait for change in the value of the digital input pin Returns the new value Note that this is blocking call For non-blocking version see digitalRead which returns the current value of pin immediately",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "waitFor",
          "normalized": "Pin-\u003eArduino Bool",
          "package": "hArduino",
          "partial": "For",
          "signature": "Pin-\u003eArduino Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:waitFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the Haskell program to control the board:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The file path argument should point to the device file that is\n      associated with the board. (\u003ccode\u003eCOM1\u003c/code\u003e on Windows,\n      '/dev/cu.usbmodemfd131' on Mac, etc.)\n\u003c/li\u003e\u003cli\u003e The boolean argument controls verbosity. It should remain\n      \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e unless you have communication issues. The print-out\n      is typically less-than-useful, but it might point to the root\n      cause of the problem.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee \u003ca\u003eSystem.Hardware.Arduino.Examples.Blink\u003c/a\u003e for a simple example.\n\u003c/p\u003e",
          "module": "System.Hardware.Arduino",
          "name": "withArduino",
          "package": "hArduino",
          "signature": "Bool-\u003e FilePath-\u003e Arduino ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Run the Haskell program to control the board The file path argument should point to the device file that is associated with the board COM1 on Windows dev cu.usbmodemfd131 on Mac etc The boolean argument controls verbosity It should remain False unless you have communication issues The print-out is typically less-than-useful but it might point to the root cause of the problem See System.Hardware.Arduino.Examples.Blink for simple example",
          "hierarchy": "System Hardware Arduino",
          "module": "System.Hardware.Arduino",
          "name": "withArduino",
          "normalized": "Bool-\u003eFilePath-\u003eArduino()-\u003eIO()",
          "package": "hArduino",
          "partial": "Arduino",
          "signature": "Bool-\u003eFilePath-\u003eArduino()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hArduino/docs/System-Hardware-Arduino.html#v:withArduino"
      }
    }
  ]
]