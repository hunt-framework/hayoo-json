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
        "word": "gtk-toy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Gtk Toy Framework is a wrapper over Gtk for conveniently creating \n applications which draw things and use the mouse or keyboard.\n\u003c/p\u003e\u003cp\u003eIt handles the minutiae of setting up the Gtk window and canvas, and\n processes mouse and keyboard inputs into more palatable data structures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "Toy",
          "package": "gtk-toy",
          "source": "src/Graphics-UI-Gtk-Toy.html",
          "type": "module"
        },
        "index": {
          "description": "The Gtk Toy Framework is wrapper over Gtk for conveniently creating applications which draw things and use the mouse or keyboard It handles the minutiae of setting up the Gtk window and canvas and processes mouse and keyboard inputs into more palatable data structures",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "Toy",
          "package": "gtk-toy",
          "partial": "Toy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Toy",
          "name": "GtkInteractive",
          "package": "gtk-toy",
          "source": "src/Graphics-UI-Gtk-Toy.html#GtkInteractive",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "GtkInteractive",
          "package": "gtk-toy",
          "partial": "Gtk Interactive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#t:GtkInteractive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Toy",
          "name": "InputState",
          "package": "gtk-toy",
          "source": "src/Graphics-UI-Gtk-Toy.html#InputState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "InputState",
          "package": "gtk-toy",
          "partial": "Input State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#t:InputState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for things which change within an interactive context.  The default\n   method implementations do nothing.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "Interactive",
          "package": "gtk-toy",
          "source": "src/Graphics-UI-Gtk-Toy.html#Interactive",
          "type": "class"
        },
        "index": {
          "description": "class for things which change within an interactive context The default method implementations do nothing",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "Interactive",
          "package": "gtk-toy",
          "partial": "Interactive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#t:Interactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eKeyEvent\u003c/code\u003e tuple specifies whether the key was pressed or not, and\n   which key was pressed.  \u003ccode\u003eRight Char\u003c/code\u003e is yielded for keys which would\n   normally correspond to character insertions, while \u003ccode\u003eLeft String\u003c/code\u003e provides\n   GTK-convention names for the rest.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "KeyEvent",
          "package": "gtk-toy",
          "source": "src/Graphics-UI-Gtk-Toy.html#KeyEvent",
          "type": "type"
        },
        "index": {
          "description": "KeyEvent tuple specifies whether the key was pressed or not and which key was pressed Right Char is yielded for keys which would normally correspond to character insertions while Left String provides GTK-convention names for the rest",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "KeyEvent",
          "package": "gtk-toy",
          "partial": "Key Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#t:KeyEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the most recent key-state transition.\n   The tuple contains whether the button was pressed,\n   at what time in msec, and with which GTK modifiers.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "KeyInfo",
          "package": "gtk-toy",
          "source": "src/Graphics-UI-Gtk-Toy.html#KeyInfo",
          "type": "type"
        },
        "index": {
          "description": "Information about the most recent key-state transition The tuple contains whether the button was pressed at what time in msec and with which GTK modifiers",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "KeyInfo",
          "package": "gtk-toy",
          "partial": "Key Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#t:KeyInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map of GTK keynames to last-received event regarding each respective\n   key.  This can be interpreted as the current keyboard state - a key is\n   down if it was last seen being pressed.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "KeyTable",
          "package": "gtk-toy",
          "source": "src/Graphics-UI-Gtk-Toy.html#KeyTable",
          "type": "type"
        },
        "index": {
          "description": "map of GTK keynames to last-received event regarding each respective key This can be interpreted as the current keyboard state key is down if it was last seen being pressed",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "KeyTable",
          "package": "gtk-toy",
          "partial": "Key Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#t:KeyTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eMouseEvent\u003c/code\u003e is \u003ccode\u003eNothing\u003c/code\u003e if it's a mouse motion event, and otherwise\n   provides mouse press information.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "MouseEvent",
          "package": "gtk-toy",
          "source": "src/Graphics-UI-Gtk-Toy.html#MouseEvent",
          "type": "type"
        },
        "index": {
          "description": "MouseEvent is Nothing if it mouse motion event and otherwise provides mouse press information",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "MouseEvent",
          "package": "gtk-toy",
          "partial": "Mouse Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#t:MouseEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Toy",
          "name": "InputState",
          "package": "gtk-toy",
          "signature": "InputState",
          "source": "src/Graphics-UI-Gtk-Toy.html#InputState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "InputState",
          "package": "gtk-toy",
          "partial": "Input State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:InputState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edisplay\u003c/code\u003e is called when the rendering needs to be refreshed.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "display",
          "package": "gtk-toy",
          "signature": "DrawWindow -\u003e InputState -\u003e a -\u003e IO a",
          "source": "src/Graphics-UI-Gtk-Toy.html#display",
          "type": "method"
        },
        "index": {
          "description": "display is called when the rendering needs to be refreshed",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "display",
          "normalized": "DrawWindow-\u003eInputState-\u003ea-\u003eIO a",
          "package": "gtk-toy",
          "signature": "DrawWindow-\u003eInputState-\u003ea-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets whether the named key is held down.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "keyHeld",
          "package": "gtk-toy",
          "signature": "String -\u003e InputState -\u003e Bool",
          "source": "src/Graphics-UI-Gtk-Toy.html#keyHeld",
          "type": "function"
        },
        "index": {
          "description": "Gets whether the named key is held down",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "keyHeld",
          "normalized": "String-\u003eInputState-\u003eBool",
          "package": "gtk-toy",
          "partial": "Held",
          "signature": "String-\u003eInputState-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:keyHeld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe information for the most recent key event of the named key.  \n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "keyInfo",
          "package": "gtk-toy",
          "signature": "String -\u003e InputState -\u003e Maybe KeyInfo",
          "source": "src/Graphics-UI-Gtk-Toy.html#keyInfo",
          "type": "function"
        },
        "index": {
          "description": "the information for the most recent key event of the named key",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "keyInfo",
          "normalized": "String-\u003eInputState-\u003eMaybe KeyInfo",
          "package": "gtk-toy",
          "partial": "Info",
          "signature": "String-\u003eInputState-\u003eMaybe KeyInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:keyInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap from key-name to most recent event\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "keyTable",
          "package": "gtk-toy",
          "signature": "KeyTable",
          "source": "src/Graphics-UI-Gtk-Toy.html#InputState",
          "type": "function"
        },
        "index": {
          "description": "Map from key-name to most recent event",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "keyTable",
          "package": "gtk-toy",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:keyTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ekeyboard\u003c/code\u003e is called on key-presses.  \n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "keyboard",
          "package": "gtk-toy",
          "signature": "KeyEvent -\u003e InputState -\u003e a -\u003e IO a",
          "source": "src/Graphics-UI-Gtk-Toy.html#keyboard",
          "type": "method"
        },
        "index": {
          "description": "keyboard is called on key-presses",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "keyboard",
          "normalized": "KeyEvent-\u003eInputState-\u003ea-\u003eIO a",
          "package": "gtk-toy",
          "signature": "KeyEvent-\u003eInputState-\u003ea-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:keyboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emouse\u003c/code\u003e is called when the mouse moves or presses occur.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "mouse",
          "package": "gtk-toy",
          "signature": "MouseEvent -\u003e InputState -\u003e a -\u003e IO a",
          "source": "src/Graphics-UI-Gtk-Toy.html#mouse",
          "type": "method"
        },
        "index": {
          "description": "mouse is called when the mouse moves or presses occur",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "mouse",
          "normalized": "MouseEvent-\u003eInputState-\u003ea-\u003eIO a",
          "package": "gtk-toy",
          "signature": "MouseEvent-\u003eInputState-\u003ea-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:mouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the indicated mouse button is considered pressed in the InputState.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "mouseHeld",
          "package": "gtk-toy",
          "signature": "Int -\u003e InputState -\u003e Bool",
          "source": "src/Graphics-UI-Gtk-Toy.html#mouseHeld",
          "type": "function"
        },
        "index": {
          "description": "Whether the indicated mouse button is considered pressed in the InputState",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "mouseHeld",
          "normalized": "Int-\u003eInputState-\u003eBool",
          "package": "gtk-toy",
          "partial": "Held",
          "signature": "Int-\u003eInputState-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:mouseHeld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most recent mouse position\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "mousePos",
          "package": "gtk-toy",
          "signature": "(Double, Double)",
          "source": "src/Graphics-UI-Gtk-Toy.html#InputState",
          "type": "function"
        },
        "index": {
          "description": "The most recent mouse position",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "mousePos",
          "normalized": "(Double,Double)",
          "package": "gtk-toy",
          "partial": "Pos",
          "signature": "(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:mousePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA definition for the keyboard handler that just calls \u003ca\u003equitToy\u003c/a\u003e when\n   Escape is pressed.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "quitKeyboard",
          "package": "gtk-toy",
          "signature": "KeyEvent -\u003e InputState -\u003e a -\u003e IO a",
          "source": "src/Graphics-UI-Gtk-Toy.html#quitKeyboard",
          "type": "function"
        },
        "index": {
          "description": "definition for the keyboard handler that just calls quitToy when Escape is pressed",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "quitKeyboard",
          "normalized": "KeyEvent-\u003eInputState-\u003ea-\u003eIO a",
          "package": "gtk-toy",
          "partial": "Keyboard",
          "signature": "KeyEvent-\u003eInputState-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:quitKeyboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike it says on the can.  This is a synonym for \u003ccode\u003eGraphics.UI.Gtk.mainQuit\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "quitToy",
          "package": "gtk-toy",
          "signature": "IO ()",
          "source": "src/Graphics-UI-Gtk-Toy.html#quitToy",
          "type": "function"
        },
        "index": {
          "description": "Like it says on the can This is synonym for Graphics.UI.Gtk.mainQuit",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "quitToy",
          "normalized": "IO()",
          "package": "gtk-toy",
          "partial": "Toy",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:quitToy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain program entrypoint. This is how you turn an instance of Interactive\n   into an application.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "runToy",
          "package": "gtk-toy",
          "signature": "a -\u003e IO ()",
          "source": "src/Graphics-UI-Gtk-Toy.html#runToy",
          "type": "function"
        },
        "index": {
          "description": "Main program entrypoint This is how you turn an instance of Interactive into an application",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "runToy",
          "normalized": "a-\u003eIO()",
          "package": "gtk-toy",
          "partial": "Toy",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:runToy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a diagram projection to a function for Interactive \u003ccode\u003e\u003ca\u003edisplay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "simpleDisplay",
          "package": "gtk-toy",
          "signature": "(DrawWindow -\u003e a -\u003e a) -\u003e DrawWindow -\u003e InputState -\u003e a -\u003e IO a",
          "source": "src/Graphics-UI-Gtk-Toy.html#simpleDisplay",
          "type": "function"
        },
        "index": {
          "description": "Converts diagram projection to function for Interactive display",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "simpleDisplay",
          "normalized": "(DrawWindow-\u003ea-\u003ea)-\u003eDrawWindow-\u003eInputState-\u003ea-\u003eIO a",
          "package": "gtk-toy",
          "partial": "Display",
          "signature": "(DrawWindow-\u003ea-\u003ea)-\u003eDrawWindow-\u003eInputState-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:simpleDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a function which responds to key-presses, and transforms state\n   accordingly to a function for Interactive \u003ccode\u003e\u003ca\u003ekeyboard\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "simpleKeyboard",
          "package": "gtk-toy",
          "signature": "(KeyEvent -\u003e a -\u003e a) -\u003e KeyEvent -\u003e InputState -\u003e a -\u003e IO a",
          "source": "src/Graphics-UI-Gtk-Toy.html#simpleKeyboard",
          "type": "function"
        },
        "index": {
          "description": "Converts function which responds to key-presses and transforms state accordingly to function for Interactive keyboard",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "simpleKeyboard",
          "normalized": "(KeyEvent-\u003ea-\u003ea)-\u003eKeyEvent-\u003eInputState-\u003ea-\u003eIO a",
          "package": "gtk-toy",
          "partial": "Keyboard",
          "signature": "(KeyEvent-\u003ea-\u003ea)-\u003eKeyEvent-\u003eInputState-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:simpleKeyboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a function which responds to mouse-presses, and transforms state\n   accordingly to a function for Interactive \u003ccode\u003e\u003ca\u003emouse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "simpleMouse",
          "package": "gtk-toy",
          "signature": "(MouseEvent -\u003e (Double, Double) -\u003e a -\u003e a) -\u003e MouseEvent -\u003e InputState -\u003e a -\u003e IO a",
          "source": "src/Graphics-UI-Gtk-Toy.html#simpleMouse",
          "type": "function"
        },
        "index": {
          "description": "Converts function which responds to mouse-presses and transforms state accordingly to function for Interactive mouse",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "simpleMouse",
          "normalized": "(MouseEvent-\u003e(Double,Double)-\u003ea-\u003ea)-\u003eMouseEvent-\u003eInputState-\u003ea-\u003eIO a",
          "package": "gtk-toy",
          "partial": "Mouse",
          "signature": "(MouseEvent-\u003e(Double,Double)-\u003ea-\u003ea)-\u003eMouseEvent-\u003eInputState-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:simpleMouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a pure state transform to a function for Interactive \u003ccode\u003e\u003ca\u003etick\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "simpleTick",
          "package": "gtk-toy",
          "signature": "(a -\u003e a) -\u003e InputState -\u003e a -\u003e IO (a, Bool)",
          "source": "src/Graphics-UI-Gtk-Toy.html#simpleTick",
          "type": "function"
        },
        "index": {
          "description": "Converts pure state transform to function for Interactive tick",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "simpleTick",
          "normalized": "(a-\u003ea)-\u003eInputState-\u003ea-\u003eIO(a,Bool)",
          "package": "gtk-toy",
          "partial": "Tick",
          "signature": "(a-\u003ea)-\u003eInputState-\u003ea-\u003eIO(a,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:simpleTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etick\u003c/code\u003e is (ideally) called every 30ms.  The bool result indicates if the\n   graphics need to be refreshed.\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "tick",
          "package": "gtk-toy",
          "signature": "InputState -\u003e a -\u003e IO (a, Bool)",
          "source": "src/Graphics-UI-Gtk-Toy.html#tick",
          "type": "method"
        },
        "index": {
          "description": "tick is ideally called every ms The bool result indicates if the graphics need to be refreshed",
          "hierarchy": "Graphics UI Gtk Toy",
          "module": "Graphics.UI.Gtk.Toy",
          "name": "tick",
          "normalized": "InputState-\u003ea-\u003eIO(a,Bool)",
          "package": "gtk-toy",
          "signature": "InputState-\u003ea-\u003eIO(a,Bool)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gtk-toy/docs/Graphics-UI-Gtk-Toy.html#v:tick"
      }
    }
  ]
]