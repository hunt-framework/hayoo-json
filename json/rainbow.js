[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandles colors and special effects for text. Internally this\n module uses the Haskell terminfo library, which links against the\n UNIX library of the same name, so it should work with a wide\n variety of UNIX terminals.\n\u003c/p\u003e\u003cp\u003eThe building block of Rainbow is the \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e. Each \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e comes with\n a \u003ccode\u003e\u003ca\u003eTextSpec\u003c/a\u003e\u003c/code\u003e, which specifies how the text should look on 8-color\n and on 256-color terminals. The \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e is a full specification; that\n is, although \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003es are typically printed one after the other, the\n appearance of one \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e does not affect the appearance of the next\n \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou have full freedom to specify different attributes and colors\n for 8 and 256 color terminals; for instance, you can have text\n appear red on an 8-color terminal but blue on a 256-color terminal.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, so you can combine them using the usual\n monoid functions, including \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e. You can create a \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e with\n text using \u003ccode\u003efromString\u003c/code\u003e, but this library is much more usable if\n you enable the OverloadedStrings GHC extension:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\u003c/pre\u003e\u003cp\u003eand all future examples assume you have enabled OverloadedStrings.\n\u003c/p\u003e\u003cp\u003eHere are some basic examples:\n\u003c/p\u003e\u003cpre\u003e putChunkLn $ \"Some blue text\" \u003c\u003e f_blue\n putChunkLn $ \"Blue on red background\" \u003c\u003e f_blue \u003c\u003e b_red\n putChunkLn $ \"Blue on red, foreground bold\" \u003c\u003e f_blue \u003c\u003e b_red \u003c\u003e bold\n\u003c/pre\u003e\u003cp\u003eBut what makes Rainbow a little more interesting is that you can\n also specify output for 256-color terminals. To use these examples,\n be sure your TERM environment variable is set to something that\n supports 256 colors (like \u003ccode\u003exterm-256color\u003c/code\u003e) before you start GHCi:\n\u003c/p\u003e\u003cpre\u003e putChunkLn $ \"Blue on 8-color terminal, red on 256-color terminal\"\n            \u003c\u003e c8_f_blue \u003c\u003e c256_f_red\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003emappend\u003c/code\u003e multiple chunks that change the same property, the\n rightmost one \"wins\":\n\u003c/p\u003e\u003cpre\u003e putChunkLn $ \"This will be blue\" \u003c\u003e f_red \u003c\u003e f_blue\n\u003c/pre\u003e\u003cp\u003eThis property comes in handy if you want to specify a default color\n for 8- and 256-color terminals, then a more specific shade for a\n 256-color terminal:\n\u003c/p\u003e\u003cpre\u003e putChunkLn $ \"Pink\" \u003c\u003e f_red \u003c\u003e c256_f_201\n\u003c/pre\u003e\u003cp\u003eHowever, if you use \u003ccode\u003emappend\u003c/code\u003e to add additional \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003es that have\n text, the text will be appended:\n\u003c/p\u003e\u003cpre\u003e putChunkLn $ f_green \u003c\u003e \"You will see this text \"\n              \u003c\u003e \"and this text too, but it will all be blue\"\n              \u003c\u003e f_blue\n\u003c/pre\u003e\u003cp\u003eAlthough one chunk can have different colors on 8- and 256-color\n terminals, it cannot have different colors on the same\n terminal. That is, if you want to print some text in one color and\n some text in another color, make two chunks.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Rainbow.html",
        "fct-type": "module",
        "title": "Rainbow"
      },
      "index": {
        "description": "Handles colors and special effects for text Internally this module uses the Haskell terminfo library which links against the UNIX library of the same name so it should work with wide variety of UNIX terminals The building block of Rainbow is the Chunk Each Chunk comes with TextSpec which specifies how the text should look on color and on color terminals The Chunk is full specification that is although Chunk are typically printed one after the other the appearance of one Chunk does not affect the appearance of the next Chunk You have full freedom to specify different attributes and colors for and color terminals for instance you can have text appear red on an color terminal but blue on color terminal Chunk is Monoid so you can combine them using the usual monoid functions including You can create Chunk with text using fromString but this library is much more usable if you enable the OverloadedStrings GHC extension LANGUAGE OverloadedStrings and all future examples assume you have enabled OverloadedStrings Here are some basic examples putChunkLn Some blue text blue putChunkLn Blue on red background blue red putChunkLn Blue on red foreground bold blue red bold But what makes Rainbow little more interesting is that you can also specify output for color terminals To use these examples be sure your TERM environment variable is set to something that supports colors like xterm-256color before you start GHCi putChunkLn Blue on color terminal red on color terminal c8 blue c256 red If mappend multiple chunks that change the same property the rightmost one wins putChunkLn This will be blue red blue This property comes in handy if you want to specify default color for and color terminals then more specific shade for color terminal putChunkLn Pink red c256 However if you use mappend to add additional Chunk that have text the text will be appended putChunkLn green You will see this text and this text too but it will all be blue blue Although one chunk can have different colors on and color terminals it cannot have different colors on the same terminal That is if you want to print some text in one color and some text in another color make two chunks",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Rainbow",
        "normalized": "",
        "package": "rainbow",
        "partial": "Rainbow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Background256",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Rainbow.html#Background256",
        "fct-type": "type",
        "title": "Background256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Background256",
        "normalized": "",
        "package": "rainbow",
        "partial": "Background",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Background8",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Rainbow.html#Background8",
        "fct-type": "type",
        "title": "Background8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Background8",
        "normalized": "",
        "package": "rainbow",
        "partial": "Background",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Chunk",
      "description": {
        "fct-descr": "\u003cp\u003eA chunk is some textual data coupled with a description of what\n color the text is, attributes like whether it is bold or\n underlined, etc. The chunk knows what foreground and background\n colors and what attributes to use for both an 8 color terminal and\n a 256 color terminal.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Rainbow.html#Chunk",
        "fct-type": "data",
        "title": "Chunk"
      },
      "index": {
        "description": "chunk is some textual data coupled with description of what color the text is attributes like whether it is bold or underlined etc The chunk knows what foreground and background colors and what attributes to use for both an color terminal and color terminal",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Chunk",
        "normalized": "",
        "package": "rainbow",
        "partial": "Chunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Foreground256",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Rainbow.html#Foreground256",
        "fct-type": "type",
        "title": "Foreground256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Foreground256",
        "normalized": "",
        "package": "rainbow",
        "partial": "Foreground",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Foreground8",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Rainbow.html#Foreground8",
        "fct-type": "type",
        "title": "Foreground8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Foreground8",
        "normalized": "",
        "package": "rainbow",
        "partial": "Foreground",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:IsString",
      "description": {
        "fct-descr": "\u003cp\u003eClass for string-like datastructures; used by the overloaded string\n   extension (-foverloaded-strings in GHC).\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "IsString"
      },
      "index": {
        "description": "Class for string-like datastructures used by the overloaded string extension foverloaded-strings in GHC",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "IsString",
        "normalized": "",
        "package": "rainbow",
        "partial": "Is String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Monoid",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Monoid"
      },
      "index": {
        "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Monoid",
        "normalized": "",
        "package": "rainbow",
        "partial": "Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Style256",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes text appearance (foreground and background colors, as\n well as other attributes such as bold) for a 256 color terminal.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Rainbow.html#Style256",
        "fct-type": "data",
        "title": "Style256"
      },
      "index": {
        "description": "Describes text appearance foreground and background colors as well as other attributes such as bold for color terminal",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Style256",
        "normalized": "",
        "package": "rainbow",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Style8",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes text appearance (foreground and background colors, as\n well as other attributes such as bold) for an 8 color terminal.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Rainbow.html#Style8",
        "fct-type": "data",
        "title": "Style8"
      },
      "index": {
        "description": "Describes text appearance foreground and background colors as well as other attributes such as bold for an color terminal",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Style8",
        "normalized": "",
        "package": "rainbow",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:StyleCommon",
      "description": {
        "fct-descr": "\u003cp\u003eStyle elements that apply in both 8 and 256 color\n terminals. However, the elements are described separately for 8 and\n 256 color terminals, so that the text appearance can change\n depending on how many colors a terminal has.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Rainbow.html#StyleCommon",
        "fct-type": "data",
        "title": "StyleCommon"
      },
      "index": {
        "description": "Style elements that apply in both and color terminals However the elements are described separately for and color terminals so that the text appearance can change depending on how many colors terminal has",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "StyleCommon",
        "normalized": "",
        "package": "rainbow",
        "partial": "Style Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Term",
      "description": {
        "fct-descr": "\u003cp\u003eWhich terminal definition to use.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Rainbow.html#Term",
        "fct-type": "data",
        "title": "Term"
      },
      "index": {
        "description": "Which terminal definition to use",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Term",
        "normalized": "",
        "package": "rainbow",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:TextSpec",
      "description": {
        "fct-descr": "\u003cp\u003eThe TextSpec bundles together the styles for the 8 and 256 color\n terminals, so that the text can be portrayed on any terminal.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Rainbow.html#TextSpec",
        "fct-type": "data",
        "title": "TextSpec"
      },
      "index": {
        "description": "The TextSpec bundles together the styles for the and color terminals so that the text can be portrayed on any terminal",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "TextSpec",
        "normalized": "",
        "package": "rainbow",
        "partial": "Text Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "An infix synonym for mappend",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "rainbow",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:Chunk",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#Chunk",
        "fct-type": "function",
        "title": "Chunk"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Chunk",
        "normalized": "",
        "package": "rainbow",
        "partial": "Chunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:Dumb",
      "description": {
        "fct-descr": "\u003cp\u003eUsing this terminal should always succeed. This suppresses all\n colors. Uesful if output is not going to a TTY, or if you just do\n not like colors.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Dumb",
        "fct-source": "src/System-Console-Rainbow.html#Term",
        "fct-type": "function",
        "title": "Dumb"
      },
      "index": {
        "description": "Using this terminal should always succeed This suppresses all colors Uesful if output is not going to TTY or if you just do not like colors",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Dumb",
        "normalized": "",
        "package": "rainbow",
        "partial": "Dumb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:Style256",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Style256",
        "fct-source": "src/System-Console-Rainbow.html#Style256",
        "fct-type": "function",
        "title": "Style256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Style256",
        "normalized": "",
        "package": "rainbow",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:Style8",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Style8",
        "fct-source": "src/System-Console-Rainbow.html#Style8",
        "fct-type": "function",
        "title": "Style8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "Style8",
        "normalized": "",
        "package": "rainbow",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:StyleCommon",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "StyleCommon",
        "fct-source": "src/System-Console-Rainbow.html#StyleCommon",
        "fct-type": "function",
        "title": "StyleCommon"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "StyleCommon",
        "normalized": "",
        "package": "rainbow",
        "partial": "Style Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:TermName",
      "description": {
        "fct-descr": "\u003cp\u003eUse the terminal with this given name. You might get this from\n the TERM environment variable, or set it explicitly. A runtime\n error will result if the terminfo database does not have a\n definition for this terminal. If this terminal supports 256\n colors, then 256 colors are used. If this terminal supports less\n than 256 colors, but at least 8 colors, then 8 colors are\n used. Otherwise, no colors are used.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "TermName String",
        "fct-source": "src/System-Console-Rainbow.html#Term",
        "fct-type": "function",
        "title": "TermName"
      },
      "index": {
        "description": "Use the terminal with this given name You might get this from the TERM environment variable or set it explicitly runtime error will result if the terminfo database does not have definition for this terminal If this terminal supports colors then colors are used If this terminal supports less than colors but at least colors then colors are used Otherwise no colors are used",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "TermName",
        "normalized": "",
        "package": "rainbow",
        "partial": "Term Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:TextSpec",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "TextSpec",
        "fct-source": "src/System-Console-Rainbow.html#TextSpec",
        "fct-type": "function",
        "title": "TextSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "TextSpec",
        "normalized": "",
        "package": "rainbow",
        "partial": "Text Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_background256",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Background256",
        "fct-source": "src/System-Console-Rainbow.html#Style256",
        "fct-type": "function",
        "title": "_background256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_background256",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_background8",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Background8",
        "fct-source": "src/System-Console-Rainbow.html#Style8",
        "fct-type": "function",
        "title": "_background8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_background8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_common256",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "StyleCommon",
        "fct-source": "src/System-Console-Rainbow.html#Style256",
        "fct-type": "function",
        "title": "_common256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_common256",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_common8",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "StyleCommon",
        "fct-source": "src/System-Console-Rainbow.html#Style8",
        "fct-type": "function",
        "title": "_common8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_common8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_foreground256",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Foreground256",
        "fct-source": "src/System-Console-Rainbow.html#Style256",
        "fct-type": "function",
        "title": "_foreground256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_foreground256",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_foreground8",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Foreground8",
        "fct-source": "src/System-Console-Rainbow.html#Style8",
        "fct-type": "function",
        "title": "_foreground8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_foreground8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_scBold",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Last Bool",
        "fct-source": "src/System-Console-Rainbow.html#StyleCommon",
        "fct-type": "function",
        "title": "_scBold"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_scBold",
        "normalized": "",
        "package": "rainbow",
        "partial": "Bold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_scFlash",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Last Bool",
        "fct-source": "src/System-Console-Rainbow.html#StyleCommon",
        "fct-type": "function",
        "title": "_scFlash"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_scFlash",
        "normalized": "",
        "package": "rainbow",
        "partial": "Flash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_scInverse",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Last Bool",
        "fct-source": "src/System-Console-Rainbow.html#StyleCommon",
        "fct-type": "function",
        "title": "_scInverse"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_scInverse",
        "normalized": "",
        "package": "rainbow",
        "partial": "Inverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_scUnderline",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Last Bool",
        "fct-source": "src/System-Console-Rainbow.html#StyleCommon",
        "fct-type": "function",
        "title": "_scUnderline"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_scUnderline",
        "normalized": "",
        "package": "rainbow",
        "partial": "Underline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_style256",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Style256",
        "fct-source": "src/System-Console-Rainbow.html#TextSpec",
        "fct-type": "function",
        "title": "_style256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_style256",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_style8",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Style8",
        "fct-source": "src/System-Console-Rainbow.html#TextSpec",
        "fct-type": "function",
        "title": "_style8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_style8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_text",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Text",
        "fct-source": "src/System-Console-Rainbow.html#Chunk",
        "fct-type": "function",
        "title": "_text"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_text",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:_textSpec",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "TextSpec",
        "fct-source": "src/System-Console-Rainbow.html#Chunk",
        "fct-type": "function",
        "title": "_textSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "_textSpec",
        "normalized": "",
        "package": "rainbow",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_black",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#b_black",
        "fct-type": "function",
        "title": "b_black"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "b_black",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_blue",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#b_blue",
        "fct-type": "function",
        "title": "b_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "b_blue",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_cyan",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#b_cyan",
        "fct-type": "function",
        "title": "b_cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "b_cyan",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_default",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#b_default",
        "fct-type": "function",
        "title": "b_default"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "b_default",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_green",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#b_green",
        "fct-type": "function",
        "title": "b_green"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "b_green",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_magenta",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#b_magenta",
        "fct-type": "function",
        "title": "b_magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "b_magenta",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_red",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#b_red",
        "fct-type": "function",
        "title": "b_red"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "b_red",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_white",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#b_white",
        "fct-type": "function",
        "title": "b_white"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "b_white",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_yellow",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#b_yellow",
        "fct-type": "function",
        "title": "b_yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "b_yellow",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:background256",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Lens' Style256 Background256",
        "fct-source": "src/System-Console-Rainbow.html#background256",
        "fct-type": "function",
        "title": "background256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "background256",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:background8",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Lens' Style8 Background8",
        "fct-source": "src/System-Console-Rainbow.html#background8",
        "fct-type": "function",
        "title": "background8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "background8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:bold",
      "description": {
        "fct-descr": "\u003cp\u003eBold. What actually happens when you use Bold is going to depend\n on your terminal. For example, xterm allows you actually use a bold\n font for bold, if you have one. Otherwise, it might simulate bold\n by using overstriking. Another possibility is that your terminal\n might use a different color to indicate bold. For more details (at\n least for xterm), look at xterm (1) and search for \u003ccode\u003eboldColors\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf your terminal uses a different color for bold, this allows an\n 8-color terminal to really have 16 colors.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#bold",
        "fct-type": "function",
        "title": "bold"
      },
      "index": {
        "description": "Bold What actually happens when you use Bold is going to depend on your terminal For example xterm allows you actually use bold font for bold if you have one Otherwise it might simulate bold by using overstriking Another possibility is that your terminal might use different color to indicate bold For more details at least for xterm look at xterm and search for boldColors If your terminal uses different color for bold this allows an color terminal to really have colors",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "bold",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:bold256",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#bold256",
        "fct-type": "function",
        "title": "bold256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "bold256",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:bold256off",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#bold256off",
        "fct-type": "function",
        "title": "bold256off"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "bold256off",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:bold8",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#bold8",
        "fct-type": "function",
        "title": "bold8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "bold8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:bold8off",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#bold8off",
        "fct-type": "function",
        "title": "bold8off"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "bold8off",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:boldOff",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#boldOff",
        "fct-type": "function",
        "title": "boldOff"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "boldOff",
        "normalized": "",
        "package": "rainbow",
        "partial": "Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_0",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_0",
        "fct-type": "function",
        "title": "c256_b_0"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_0",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_1",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_1",
        "fct-type": "function",
        "title": "c256_b_1"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_1",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_10",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_10",
        "fct-type": "function",
        "title": "c256_b_10"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_10",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_100",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_100",
        "fct-type": "function",
        "title": "c256_b_100"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_100",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_101",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_101",
        "fct-type": "function",
        "title": "c256_b_101"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_101",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_102",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_102",
        "fct-type": "function",
        "title": "c256_b_102"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_102",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_103",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_103",
        "fct-type": "function",
        "title": "c256_b_103"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_103",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_104",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_104",
        "fct-type": "function",
        "title": "c256_b_104"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_104",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_105",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_105",
        "fct-type": "function",
        "title": "c256_b_105"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_105",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_106",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_106",
        "fct-type": "function",
        "title": "c256_b_106"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_106",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_107",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_107",
        "fct-type": "function",
        "title": "c256_b_107"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_107",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_108",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_108",
        "fct-type": "function",
        "title": "c256_b_108"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_108",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_109",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_109",
        "fct-type": "function",
        "title": "c256_b_109"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_109",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_11",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_11",
        "fct-type": "function",
        "title": "c256_b_11"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_11",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_110",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_110",
        "fct-type": "function",
        "title": "c256_b_110"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_110",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_111",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_111",
        "fct-type": "function",
        "title": "c256_b_111"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_111",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_112",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_112",
        "fct-type": "function",
        "title": "c256_b_112"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_112",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_113",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_113",
        "fct-type": "function",
        "title": "c256_b_113"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_113",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_114",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_114",
        "fct-type": "function",
        "title": "c256_b_114"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_114",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_115",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_115",
        "fct-type": "function",
        "title": "c256_b_115"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_115",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_116",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_116",
        "fct-type": "function",
        "title": "c256_b_116"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_116",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_117",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_117",
        "fct-type": "function",
        "title": "c256_b_117"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_117",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_118",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_118",
        "fct-type": "function",
        "title": "c256_b_118"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_118",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_119",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_119",
        "fct-type": "function",
        "title": "c256_b_119"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_119",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_12",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_12",
        "fct-type": "function",
        "title": "c256_b_12"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_12",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_120",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_120",
        "fct-type": "function",
        "title": "c256_b_120"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_120",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_121",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_121",
        "fct-type": "function",
        "title": "c256_b_121"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_121",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_122",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_122",
        "fct-type": "function",
        "title": "c256_b_122"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_122",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_123",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_123",
        "fct-type": "function",
        "title": "c256_b_123"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_123",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_124",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_124",
        "fct-type": "function",
        "title": "c256_b_124"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_124",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_125",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_125",
        "fct-type": "function",
        "title": "c256_b_125"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_125",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_126",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_126",
        "fct-type": "function",
        "title": "c256_b_126"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_126",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_127",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_127",
        "fct-type": "function",
        "title": "c256_b_127"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_127",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_128",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_128",
        "fct-type": "function",
        "title": "c256_b_128"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_128",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_129",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_129",
        "fct-type": "function",
        "title": "c256_b_129"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_129",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_13",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_13",
        "fct-type": "function",
        "title": "c256_b_13"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_13",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_130",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_130",
        "fct-type": "function",
        "title": "c256_b_130"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_130",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_131",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_131",
        "fct-type": "function",
        "title": "c256_b_131"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_131",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_132",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_132",
        "fct-type": "function",
        "title": "c256_b_132"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_132",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_133",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_133",
        "fct-type": "function",
        "title": "c256_b_133"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_133",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_134",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_134",
        "fct-type": "function",
        "title": "c256_b_134"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_134",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_135",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_135",
        "fct-type": "function",
        "title": "c256_b_135"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_135",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_136",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_136",
        "fct-type": "function",
        "title": "c256_b_136"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_136",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_137",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_137",
        "fct-type": "function",
        "title": "c256_b_137"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_137",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_138",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_138",
        "fct-type": "function",
        "title": "c256_b_138"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_138",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_139",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_139",
        "fct-type": "function",
        "title": "c256_b_139"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_139",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_14",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_14",
        "fct-type": "function",
        "title": "c256_b_14"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_14",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_140",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_140",
        "fct-type": "function",
        "title": "c256_b_140"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_140",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_141",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_141",
        "fct-type": "function",
        "title": "c256_b_141"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_141",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_142",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_142",
        "fct-type": "function",
        "title": "c256_b_142"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_142",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_143",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_143",
        "fct-type": "function",
        "title": "c256_b_143"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_143",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_144",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_144",
        "fct-type": "function",
        "title": "c256_b_144"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_144",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_145",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_145",
        "fct-type": "function",
        "title": "c256_b_145"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_145",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_146",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_146",
        "fct-type": "function",
        "title": "c256_b_146"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_146",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_147",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_147",
        "fct-type": "function",
        "title": "c256_b_147"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_147",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_148",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_148",
        "fct-type": "function",
        "title": "c256_b_148"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_148",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_149",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_149",
        "fct-type": "function",
        "title": "c256_b_149"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_149",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_15",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_15",
        "fct-type": "function",
        "title": "c256_b_15"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_15",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_150",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_150",
        "fct-type": "function",
        "title": "c256_b_150"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_150",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_151",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_151",
        "fct-type": "function",
        "title": "c256_b_151"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_151",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_152",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_152",
        "fct-type": "function",
        "title": "c256_b_152"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_152",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_153",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_153",
        "fct-type": "function",
        "title": "c256_b_153"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_153",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_154",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_154",
        "fct-type": "function",
        "title": "c256_b_154"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_154",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_155",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_155",
        "fct-type": "function",
        "title": "c256_b_155"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_155",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_156",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_156",
        "fct-type": "function",
        "title": "c256_b_156"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_156",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_157",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_157",
        "fct-type": "function",
        "title": "c256_b_157"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_157",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_158",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_158",
        "fct-type": "function",
        "title": "c256_b_158"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_158",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_159",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_159",
        "fct-type": "function",
        "title": "c256_b_159"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_159",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_16",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_16",
        "fct-type": "function",
        "title": "c256_b_16"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_16",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_160",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_160",
        "fct-type": "function",
        "title": "c256_b_160"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_160",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_161",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_161",
        "fct-type": "function",
        "title": "c256_b_161"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_161",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_162",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_162",
        "fct-type": "function",
        "title": "c256_b_162"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_162",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_163",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_163",
        "fct-type": "function",
        "title": "c256_b_163"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_163",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_164",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_164",
        "fct-type": "function",
        "title": "c256_b_164"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_164",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_165",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_165",
        "fct-type": "function",
        "title": "c256_b_165"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_165",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_166",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_166",
        "fct-type": "function",
        "title": "c256_b_166"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_166",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_167",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_167",
        "fct-type": "function",
        "title": "c256_b_167"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_167",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_168",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_168",
        "fct-type": "function",
        "title": "c256_b_168"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_168",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_169",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_169",
        "fct-type": "function",
        "title": "c256_b_169"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_169",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_17",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_17",
        "fct-type": "function",
        "title": "c256_b_17"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_17",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_170",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_170",
        "fct-type": "function",
        "title": "c256_b_170"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_170",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_171",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_171",
        "fct-type": "function",
        "title": "c256_b_171"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_171",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_172",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_172",
        "fct-type": "function",
        "title": "c256_b_172"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_172",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_173",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_173",
        "fct-type": "function",
        "title": "c256_b_173"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_173",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_174",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_174",
        "fct-type": "function",
        "title": "c256_b_174"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_174",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_175",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_175",
        "fct-type": "function",
        "title": "c256_b_175"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_175",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_176",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_176",
        "fct-type": "function",
        "title": "c256_b_176"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_176",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_177",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_177",
        "fct-type": "function",
        "title": "c256_b_177"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_177",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_178",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_178",
        "fct-type": "function",
        "title": "c256_b_178"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_178",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_179",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_179",
        "fct-type": "function",
        "title": "c256_b_179"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_179",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_18",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_18",
        "fct-type": "function",
        "title": "c256_b_18"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_18",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_180",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_180",
        "fct-type": "function",
        "title": "c256_b_180"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_180",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_181",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_181",
        "fct-type": "function",
        "title": "c256_b_181"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_181",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_182",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_182",
        "fct-type": "function",
        "title": "c256_b_182"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_182",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_183",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_183",
        "fct-type": "function",
        "title": "c256_b_183"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_183",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_184",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_184",
        "fct-type": "function",
        "title": "c256_b_184"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_184",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_185",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_185",
        "fct-type": "function",
        "title": "c256_b_185"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_185",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_186",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_186",
        "fct-type": "function",
        "title": "c256_b_186"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_186",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_187",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_187",
        "fct-type": "function",
        "title": "c256_b_187"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_187",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_188",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_188",
        "fct-type": "function",
        "title": "c256_b_188"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_188",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_189",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_189",
        "fct-type": "function",
        "title": "c256_b_189"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_189",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_19",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_19",
        "fct-type": "function",
        "title": "c256_b_19"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_19",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_190",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_190",
        "fct-type": "function",
        "title": "c256_b_190"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_190",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_191",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_191",
        "fct-type": "function",
        "title": "c256_b_191"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_191",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_192",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_192",
        "fct-type": "function",
        "title": "c256_b_192"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_192",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_193",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_193",
        "fct-type": "function",
        "title": "c256_b_193"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_193",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_194",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_194",
        "fct-type": "function",
        "title": "c256_b_194"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_194",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_195",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_195",
        "fct-type": "function",
        "title": "c256_b_195"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_195",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_196",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_196",
        "fct-type": "function",
        "title": "c256_b_196"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_196",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_197",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_197",
        "fct-type": "function",
        "title": "c256_b_197"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_197",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_198",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_198",
        "fct-type": "function",
        "title": "c256_b_198"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_198",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_199",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_199",
        "fct-type": "function",
        "title": "c256_b_199"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_199",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_2",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_2",
        "fct-type": "function",
        "title": "c256_b_2"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_2",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_20",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_20",
        "fct-type": "function",
        "title": "c256_b_20"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_20",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_200",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_200",
        "fct-type": "function",
        "title": "c256_b_200"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_200",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_201",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_201",
        "fct-type": "function",
        "title": "c256_b_201"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_201",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_202",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_202",
        "fct-type": "function",
        "title": "c256_b_202"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_202",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_203",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_203",
        "fct-type": "function",
        "title": "c256_b_203"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_203",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_204",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_204",
        "fct-type": "function",
        "title": "c256_b_204"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_204",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_205",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_205",
        "fct-type": "function",
        "title": "c256_b_205"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_205",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_206",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_206",
        "fct-type": "function",
        "title": "c256_b_206"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_206",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_207",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_207",
        "fct-type": "function",
        "title": "c256_b_207"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_207",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_208",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_208",
        "fct-type": "function",
        "title": "c256_b_208"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_208",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_209",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_209",
        "fct-type": "function",
        "title": "c256_b_209"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_209",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_21",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_21",
        "fct-type": "function",
        "title": "c256_b_21"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_21",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_210",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_210",
        "fct-type": "function",
        "title": "c256_b_210"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_210",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_211",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_211",
        "fct-type": "function",
        "title": "c256_b_211"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_211",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_212",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_212",
        "fct-type": "function",
        "title": "c256_b_212"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_212",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_213",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_213",
        "fct-type": "function",
        "title": "c256_b_213"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_213",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_214",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_214",
        "fct-type": "function",
        "title": "c256_b_214"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_214",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_215",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_215",
        "fct-type": "function",
        "title": "c256_b_215"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_215",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_216",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_216",
        "fct-type": "function",
        "title": "c256_b_216"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_216",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_217",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_217",
        "fct-type": "function",
        "title": "c256_b_217"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_217",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_218",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_218",
        "fct-type": "function",
        "title": "c256_b_218"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_218",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_219",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_219",
        "fct-type": "function",
        "title": "c256_b_219"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_219",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_22",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_22",
        "fct-type": "function",
        "title": "c256_b_22"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_22",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_220",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_220",
        "fct-type": "function",
        "title": "c256_b_220"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_220",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_221",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_221",
        "fct-type": "function",
        "title": "c256_b_221"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_221",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_222",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_222",
        "fct-type": "function",
        "title": "c256_b_222"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_222",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_223",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_223",
        "fct-type": "function",
        "title": "c256_b_223"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_223",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_224",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_224",
        "fct-type": "function",
        "title": "c256_b_224"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_224",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_225",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_225",
        "fct-type": "function",
        "title": "c256_b_225"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_225",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_226",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_226",
        "fct-type": "function",
        "title": "c256_b_226"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_226",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_227",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_227",
        "fct-type": "function",
        "title": "c256_b_227"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_227",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_228",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_228",
        "fct-type": "function",
        "title": "c256_b_228"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_228",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_229",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_229",
        "fct-type": "function",
        "title": "c256_b_229"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_229",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_23",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_23",
        "fct-type": "function",
        "title": "c256_b_23"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_23",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_230",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_230",
        "fct-type": "function",
        "title": "c256_b_230"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_230",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_231",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_231",
        "fct-type": "function",
        "title": "c256_b_231"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_231",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_232",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_232",
        "fct-type": "function",
        "title": "c256_b_232"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_232",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_233",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_233",
        "fct-type": "function",
        "title": "c256_b_233"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_233",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_234",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_234",
        "fct-type": "function",
        "title": "c256_b_234"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_234",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_235",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_235",
        "fct-type": "function",
        "title": "c256_b_235"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_235",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_236",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_236",
        "fct-type": "function",
        "title": "c256_b_236"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_236",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_237",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_237",
        "fct-type": "function",
        "title": "c256_b_237"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_237",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_238",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_238",
        "fct-type": "function",
        "title": "c256_b_238"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_238",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_239",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_239",
        "fct-type": "function",
        "title": "c256_b_239"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_239",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_24",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_24",
        "fct-type": "function",
        "title": "c256_b_24"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_24",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_240",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_240",
        "fct-type": "function",
        "title": "c256_b_240"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_240",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_241",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_241",
        "fct-type": "function",
        "title": "c256_b_241"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_241",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_242",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_242",
        "fct-type": "function",
        "title": "c256_b_242"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_242",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_243",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_243",
        "fct-type": "function",
        "title": "c256_b_243"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_243",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_244",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_244",
        "fct-type": "function",
        "title": "c256_b_244"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_244",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_245",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_245",
        "fct-type": "function",
        "title": "c256_b_245"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_245",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_246",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_246",
        "fct-type": "function",
        "title": "c256_b_246"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_246",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_247",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_247",
        "fct-type": "function",
        "title": "c256_b_247"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_247",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_248",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_248",
        "fct-type": "function",
        "title": "c256_b_248"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_248",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_249",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_249",
        "fct-type": "function",
        "title": "c256_b_249"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_249",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_25",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_25",
        "fct-type": "function",
        "title": "c256_b_25"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_25",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_250",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_250",
        "fct-type": "function",
        "title": "c256_b_250"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_250",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_251",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_251",
        "fct-type": "function",
        "title": "c256_b_251"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_251",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_252",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_252",
        "fct-type": "function",
        "title": "c256_b_252"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_252",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_253",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_253",
        "fct-type": "function",
        "title": "c256_b_253"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_253",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_254",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_254",
        "fct-type": "function",
        "title": "c256_b_254"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_254",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_255",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_255",
        "fct-type": "function",
        "title": "c256_b_255"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_255",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_26",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_26",
        "fct-type": "function",
        "title": "c256_b_26"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_26",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_27",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_27",
        "fct-type": "function",
        "title": "c256_b_27"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_27",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_28",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_28",
        "fct-type": "function",
        "title": "c256_b_28"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_28",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_29",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_29",
        "fct-type": "function",
        "title": "c256_b_29"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_29",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_3",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_3",
        "fct-type": "function",
        "title": "c256_b_3"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_3",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_30",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_30",
        "fct-type": "function",
        "title": "c256_b_30"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_30",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_31",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_31",
        "fct-type": "function",
        "title": "c256_b_31"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_31",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_32",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_32",
        "fct-type": "function",
        "title": "c256_b_32"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_32",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_33",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_33",
        "fct-type": "function",
        "title": "c256_b_33"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_33",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_34",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_34",
        "fct-type": "function",
        "title": "c256_b_34"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_34",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_35",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_35",
        "fct-type": "function",
        "title": "c256_b_35"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_35",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_36",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_36",
        "fct-type": "function",
        "title": "c256_b_36"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_36",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_37",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_37",
        "fct-type": "function",
        "title": "c256_b_37"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_37",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_38",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_38",
        "fct-type": "function",
        "title": "c256_b_38"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_38",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_39",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_39",
        "fct-type": "function",
        "title": "c256_b_39"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_39",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_4",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_4",
        "fct-type": "function",
        "title": "c256_b_4"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_4",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_40",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_40",
        "fct-type": "function",
        "title": "c256_b_40"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_40",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_41",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_41",
        "fct-type": "function",
        "title": "c256_b_41"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_41",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_42",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_42",
        "fct-type": "function",
        "title": "c256_b_42"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_42",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_43",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_43",
        "fct-type": "function",
        "title": "c256_b_43"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_43",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_44",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_44",
        "fct-type": "function",
        "title": "c256_b_44"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_44",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_45",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_45",
        "fct-type": "function",
        "title": "c256_b_45"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_45",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_46",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_46",
        "fct-type": "function",
        "title": "c256_b_46"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_46",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_47",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_47",
        "fct-type": "function",
        "title": "c256_b_47"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_47",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_48",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_48",
        "fct-type": "function",
        "title": "c256_b_48"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_48",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_49",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_49",
        "fct-type": "function",
        "title": "c256_b_49"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_49",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_5",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_5",
        "fct-type": "function",
        "title": "c256_b_5"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_5",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_50",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_50",
        "fct-type": "function",
        "title": "c256_b_50"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_50",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_51",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_51",
        "fct-type": "function",
        "title": "c256_b_51"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_51",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_52",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_52",
        "fct-type": "function",
        "title": "c256_b_52"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_52",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_53",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_53",
        "fct-type": "function",
        "title": "c256_b_53"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_53",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_54",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_54",
        "fct-type": "function",
        "title": "c256_b_54"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_54",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_55",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_55",
        "fct-type": "function",
        "title": "c256_b_55"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_55",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_56",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_56",
        "fct-type": "function",
        "title": "c256_b_56"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_56",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_57",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_57",
        "fct-type": "function",
        "title": "c256_b_57"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_57",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_58",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_58",
        "fct-type": "function",
        "title": "c256_b_58"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_58",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_59",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_59",
        "fct-type": "function",
        "title": "c256_b_59"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_59",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_6",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_6",
        "fct-type": "function",
        "title": "c256_b_6"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_6",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_60",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_60",
        "fct-type": "function",
        "title": "c256_b_60"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_60",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_61",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_61",
        "fct-type": "function",
        "title": "c256_b_61"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_61",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_62",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_62",
        "fct-type": "function",
        "title": "c256_b_62"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_62",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_63",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_63",
        "fct-type": "function",
        "title": "c256_b_63"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_63",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_64",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_64",
        "fct-type": "function",
        "title": "c256_b_64"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_64",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_65",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_65",
        "fct-type": "function",
        "title": "c256_b_65"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_65",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_66",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_66",
        "fct-type": "function",
        "title": "c256_b_66"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_66",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_67",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_67",
        "fct-type": "function",
        "title": "c256_b_67"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_67",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_68",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_68",
        "fct-type": "function",
        "title": "c256_b_68"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_68",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_69",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_69",
        "fct-type": "function",
        "title": "c256_b_69"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_69",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_7",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_7",
        "fct-type": "function",
        "title": "c256_b_7"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_7",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_70",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_70",
        "fct-type": "function",
        "title": "c256_b_70"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_70",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_71",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_71",
        "fct-type": "function",
        "title": "c256_b_71"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_71",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_72",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_72",
        "fct-type": "function",
        "title": "c256_b_72"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_72",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_73",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_73",
        "fct-type": "function",
        "title": "c256_b_73"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_73",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_74",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_74",
        "fct-type": "function",
        "title": "c256_b_74"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_74",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_75",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_75",
        "fct-type": "function",
        "title": "c256_b_75"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_75",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_76",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_76",
        "fct-type": "function",
        "title": "c256_b_76"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_76",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_77",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_77",
        "fct-type": "function",
        "title": "c256_b_77"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_77",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_78",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_78",
        "fct-type": "function",
        "title": "c256_b_78"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_78",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_79",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_79",
        "fct-type": "function",
        "title": "c256_b_79"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_79",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_8",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_8",
        "fct-type": "function",
        "title": "c256_b_8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_80",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_80",
        "fct-type": "function",
        "title": "c256_b_80"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_80",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_81",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_81",
        "fct-type": "function",
        "title": "c256_b_81"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_81",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_82",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_82",
        "fct-type": "function",
        "title": "c256_b_82"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_82",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_83",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_83",
        "fct-type": "function",
        "title": "c256_b_83"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_83",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_84",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_84",
        "fct-type": "function",
        "title": "c256_b_84"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_84",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_85",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_85",
        "fct-type": "function",
        "title": "c256_b_85"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_85",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_86",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_86",
        "fct-type": "function",
        "title": "c256_b_86"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_86",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_87",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_87",
        "fct-type": "function",
        "title": "c256_b_87"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_87",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_88",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_88",
        "fct-type": "function",
        "title": "c256_b_88"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_88",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_89",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_89",
        "fct-type": "function",
        "title": "c256_b_89"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_89",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_9",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_9",
        "fct-type": "function",
        "title": "c256_b_9"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_9",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_90",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_90",
        "fct-type": "function",
        "title": "c256_b_90"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_90",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_91",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_91",
        "fct-type": "function",
        "title": "c256_b_91"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_91",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_92",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_92",
        "fct-type": "function",
        "title": "c256_b_92"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_92",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_93",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_93",
        "fct-type": "function",
        "title": "c256_b_93"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_93",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_94",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_94",
        "fct-type": "function",
        "title": "c256_b_94"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_94",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_95",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_95",
        "fct-type": "function",
        "title": "c256_b_95"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_95",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_96",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_96",
        "fct-type": "function",
        "title": "c256_b_96"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_96",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_97",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_97",
        "fct-type": "function",
        "title": "c256_b_97"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_97",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_98",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_98",
        "fct-type": "function",
        "title": "c256_b_98"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_98",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_99",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_99",
        "fct-type": "function",
        "title": "c256_b_99"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_99",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_black",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_black",
        "fct-type": "function",
        "title": "c256_b_black"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_black",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_blue",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_blue",
        "fct-type": "function",
        "title": "c256_b_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_blue",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_blue_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_blue_bright",
        "fct-type": "function",
        "title": "c256_b_blue_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_blue_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_cyan",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_cyan",
        "fct-type": "function",
        "title": "c256_b_cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_cyan",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_cyan_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_cyan_bright",
        "fct-type": "function",
        "title": "c256_b_cyan_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_cyan_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_default",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_default",
        "fct-type": "function",
        "title": "c256_b_default"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_default",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_green",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_green",
        "fct-type": "function",
        "title": "c256_b_green"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_green",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_green_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_green_bright",
        "fct-type": "function",
        "title": "c256_b_green_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_green_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_grey",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_grey",
        "fct-type": "function",
        "title": "c256_b_grey"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_grey",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_magenta",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_magenta",
        "fct-type": "function",
        "title": "c256_b_magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_magenta",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_magenta_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_magenta_bright",
        "fct-type": "function",
        "title": "c256_b_magenta_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_magenta_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_red",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_red",
        "fct-type": "function",
        "title": "c256_b_red"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_red",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_red_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_red_bright",
        "fct-type": "function",
        "title": "c256_b_red_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_red_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_white",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_white",
        "fct-type": "function",
        "title": "c256_b_white"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_white",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_white_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_white_bright",
        "fct-type": "function",
        "title": "c256_b_white_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_white_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_yellow",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_yellow",
        "fct-type": "function",
        "title": "c256_b_yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_yellow",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_yellow_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_b_yellow_bright",
        "fct-type": "function",
        "title": "c256_b_yellow_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_b_yellow_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_0",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_0",
        "fct-type": "function",
        "title": "c256_f_0"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_0",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_1",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_1",
        "fct-type": "function",
        "title": "c256_f_1"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_1",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_10",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_10",
        "fct-type": "function",
        "title": "c256_f_10"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_10",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_100",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_100",
        "fct-type": "function",
        "title": "c256_f_100"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_100",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_101",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_101",
        "fct-type": "function",
        "title": "c256_f_101"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_101",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_102",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_102",
        "fct-type": "function",
        "title": "c256_f_102"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_102",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_103",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_103",
        "fct-type": "function",
        "title": "c256_f_103"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_103",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_104",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_104",
        "fct-type": "function",
        "title": "c256_f_104"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_104",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_105",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_105",
        "fct-type": "function",
        "title": "c256_f_105"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_105",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_106",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_106",
        "fct-type": "function",
        "title": "c256_f_106"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_106",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_107",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_107",
        "fct-type": "function",
        "title": "c256_f_107"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_107",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_108",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_108",
        "fct-type": "function",
        "title": "c256_f_108"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_108",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_109",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_109",
        "fct-type": "function",
        "title": "c256_f_109"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_109",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_11",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_11",
        "fct-type": "function",
        "title": "c256_f_11"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_11",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_110",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_110",
        "fct-type": "function",
        "title": "c256_f_110"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_110",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_111",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_111",
        "fct-type": "function",
        "title": "c256_f_111"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_111",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_112",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_112",
        "fct-type": "function",
        "title": "c256_f_112"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_112",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_113",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_113",
        "fct-type": "function",
        "title": "c256_f_113"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_113",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_114",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_114",
        "fct-type": "function",
        "title": "c256_f_114"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_114",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_115",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_115",
        "fct-type": "function",
        "title": "c256_f_115"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_115",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_116",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_116",
        "fct-type": "function",
        "title": "c256_f_116"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_116",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_117",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_117",
        "fct-type": "function",
        "title": "c256_f_117"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_117",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_118",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_118",
        "fct-type": "function",
        "title": "c256_f_118"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_118",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_119",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_119",
        "fct-type": "function",
        "title": "c256_f_119"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_119",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_12",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_12",
        "fct-type": "function",
        "title": "c256_f_12"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_12",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_120",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_120",
        "fct-type": "function",
        "title": "c256_f_120"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_120",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_121",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_121",
        "fct-type": "function",
        "title": "c256_f_121"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_121",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_122",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_122",
        "fct-type": "function",
        "title": "c256_f_122"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_122",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_123",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_123",
        "fct-type": "function",
        "title": "c256_f_123"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_123",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_124",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_124",
        "fct-type": "function",
        "title": "c256_f_124"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_124",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_125",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_125",
        "fct-type": "function",
        "title": "c256_f_125"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_125",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_126",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_126",
        "fct-type": "function",
        "title": "c256_f_126"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_126",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_127",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_127",
        "fct-type": "function",
        "title": "c256_f_127"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_127",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_128",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_128",
        "fct-type": "function",
        "title": "c256_f_128"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_128",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_129",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_129",
        "fct-type": "function",
        "title": "c256_f_129"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_129",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_13",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_13",
        "fct-type": "function",
        "title": "c256_f_13"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_13",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_130",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_130",
        "fct-type": "function",
        "title": "c256_f_130"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_130",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_131",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_131",
        "fct-type": "function",
        "title": "c256_f_131"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_131",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_132",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_132",
        "fct-type": "function",
        "title": "c256_f_132"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_132",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_133",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_133",
        "fct-type": "function",
        "title": "c256_f_133"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_133",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_134",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_134",
        "fct-type": "function",
        "title": "c256_f_134"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_134",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_135",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_135",
        "fct-type": "function",
        "title": "c256_f_135"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_135",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_136",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_136",
        "fct-type": "function",
        "title": "c256_f_136"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_136",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_137",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_137",
        "fct-type": "function",
        "title": "c256_f_137"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_137",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_138",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_138",
        "fct-type": "function",
        "title": "c256_f_138"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_138",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_139",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_139",
        "fct-type": "function",
        "title": "c256_f_139"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_139",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_14",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_14",
        "fct-type": "function",
        "title": "c256_f_14"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_14",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_140",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_140",
        "fct-type": "function",
        "title": "c256_f_140"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_140",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_141",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_141",
        "fct-type": "function",
        "title": "c256_f_141"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_141",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_142",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_142",
        "fct-type": "function",
        "title": "c256_f_142"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_142",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_143",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_143",
        "fct-type": "function",
        "title": "c256_f_143"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_143",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_144",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_144",
        "fct-type": "function",
        "title": "c256_f_144"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_144",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_145",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_145",
        "fct-type": "function",
        "title": "c256_f_145"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_145",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_146",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_146",
        "fct-type": "function",
        "title": "c256_f_146"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_146",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_147",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_147",
        "fct-type": "function",
        "title": "c256_f_147"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_147",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_148",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_148",
        "fct-type": "function",
        "title": "c256_f_148"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_148",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_149",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_149",
        "fct-type": "function",
        "title": "c256_f_149"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_149",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_15",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_15",
        "fct-type": "function",
        "title": "c256_f_15"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_15",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_150",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_150",
        "fct-type": "function",
        "title": "c256_f_150"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_150",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_151",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_151",
        "fct-type": "function",
        "title": "c256_f_151"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_151",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_152",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_152",
        "fct-type": "function",
        "title": "c256_f_152"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_152",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_153",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_153",
        "fct-type": "function",
        "title": "c256_f_153"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_153",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_154",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_154",
        "fct-type": "function",
        "title": "c256_f_154"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_154",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_155",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_155",
        "fct-type": "function",
        "title": "c256_f_155"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_155",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_156",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_156",
        "fct-type": "function",
        "title": "c256_f_156"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_156",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_157",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_157",
        "fct-type": "function",
        "title": "c256_f_157"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_157",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_158",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_158",
        "fct-type": "function",
        "title": "c256_f_158"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_158",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_159",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_159",
        "fct-type": "function",
        "title": "c256_f_159"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_159",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_16",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_16",
        "fct-type": "function",
        "title": "c256_f_16"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_16",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_160",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_160",
        "fct-type": "function",
        "title": "c256_f_160"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_160",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_161",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_161",
        "fct-type": "function",
        "title": "c256_f_161"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_161",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_162",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_162",
        "fct-type": "function",
        "title": "c256_f_162"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_162",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_163",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_163",
        "fct-type": "function",
        "title": "c256_f_163"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_163",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_164",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_164",
        "fct-type": "function",
        "title": "c256_f_164"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_164",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_165",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_165",
        "fct-type": "function",
        "title": "c256_f_165"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_165",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_166",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_166",
        "fct-type": "function",
        "title": "c256_f_166"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_166",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_167",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_167",
        "fct-type": "function",
        "title": "c256_f_167"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_167",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_168",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_168",
        "fct-type": "function",
        "title": "c256_f_168"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_168",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_169",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_169",
        "fct-type": "function",
        "title": "c256_f_169"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_169",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_17",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_17",
        "fct-type": "function",
        "title": "c256_f_17"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_17",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_170",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_170",
        "fct-type": "function",
        "title": "c256_f_170"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_170",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_171",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_171",
        "fct-type": "function",
        "title": "c256_f_171"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_171",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_172",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_172",
        "fct-type": "function",
        "title": "c256_f_172"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_172",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_173",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_173",
        "fct-type": "function",
        "title": "c256_f_173"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_173",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_174",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_174",
        "fct-type": "function",
        "title": "c256_f_174"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_174",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_175",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_175",
        "fct-type": "function",
        "title": "c256_f_175"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_175",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_176",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_176",
        "fct-type": "function",
        "title": "c256_f_176"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_176",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_177",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_177",
        "fct-type": "function",
        "title": "c256_f_177"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_177",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_178",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_178",
        "fct-type": "function",
        "title": "c256_f_178"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_178",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_179",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_179",
        "fct-type": "function",
        "title": "c256_f_179"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_179",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_18",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_18",
        "fct-type": "function",
        "title": "c256_f_18"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_18",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_180",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_180",
        "fct-type": "function",
        "title": "c256_f_180"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_180",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_181",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_181",
        "fct-type": "function",
        "title": "c256_f_181"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_181",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_182",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_182",
        "fct-type": "function",
        "title": "c256_f_182"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_182",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_183",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_183",
        "fct-type": "function",
        "title": "c256_f_183"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_183",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_184",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_184",
        "fct-type": "function",
        "title": "c256_f_184"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_184",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_185",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_185",
        "fct-type": "function",
        "title": "c256_f_185"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_185",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_186",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_186",
        "fct-type": "function",
        "title": "c256_f_186"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_186",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_187",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_187",
        "fct-type": "function",
        "title": "c256_f_187"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_187",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_188",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_188",
        "fct-type": "function",
        "title": "c256_f_188"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_188",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_189",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_189",
        "fct-type": "function",
        "title": "c256_f_189"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_189",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_19",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_19",
        "fct-type": "function",
        "title": "c256_f_19"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_19",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_190",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_190",
        "fct-type": "function",
        "title": "c256_f_190"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_190",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_191",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_191",
        "fct-type": "function",
        "title": "c256_f_191"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_191",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_192",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_192",
        "fct-type": "function",
        "title": "c256_f_192"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_192",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_193",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_193",
        "fct-type": "function",
        "title": "c256_f_193"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_193",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_194",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_194",
        "fct-type": "function",
        "title": "c256_f_194"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_194",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_195",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_195",
        "fct-type": "function",
        "title": "c256_f_195"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_195",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_196",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_196",
        "fct-type": "function",
        "title": "c256_f_196"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_196",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_197",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_197",
        "fct-type": "function",
        "title": "c256_f_197"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_197",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_198",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_198",
        "fct-type": "function",
        "title": "c256_f_198"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_198",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_199",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_199",
        "fct-type": "function",
        "title": "c256_f_199"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_199",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_2",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_2",
        "fct-type": "function",
        "title": "c256_f_2"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_2",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_20",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_20",
        "fct-type": "function",
        "title": "c256_f_20"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_20",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_200",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_200",
        "fct-type": "function",
        "title": "c256_f_200"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_200",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_201",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_201",
        "fct-type": "function",
        "title": "c256_f_201"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_201",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_202",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_202",
        "fct-type": "function",
        "title": "c256_f_202"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_202",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_203",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_203",
        "fct-type": "function",
        "title": "c256_f_203"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_203",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_204",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_204",
        "fct-type": "function",
        "title": "c256_f_204"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_204",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_205",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_205",
        "fct-type": "function",
        "title": "c256_f_205"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_205",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_206",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_206",
        "fct-type": "function",
        "title": "c256_f_206"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_206",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_207",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_207",
        "fct-type": "function",
        "title": "c256_f_207"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_207",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_208",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_208",
        "fct-type": "function",
        "title": "c256_f_208"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_208",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_209",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_209",
        "fct-type": "function",
        "title": "c256_f_209"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_209",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_21",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_21",
        "fct-type": "function",
        "title": "c256_f_21"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_21",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_210",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_210",
        "fct-type": "function",
        "title": "c256_f_210"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_210",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_211",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_211",
        "fct-type": "function",
        "title": "c256_f_211"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_211",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_212",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_212",
        "fct-type": "function",
        "title": "c256_f_212"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_212",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_213",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_213",
        "fct-type": "function",
        "title": "c256_f_213"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_213",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_214",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_214",
        "fct-type": "function",
        "title": "c256_f_214"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_214",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_215",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_215",
        "fct-type": "function",
        "title": "c256_f_215"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_215",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_216",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_216",
        "fct-type": "function",
        "title": "c256_f_216"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_216",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_217",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_217",
        "fct-type": "function",
        "title": "c256_f_217"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_217",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_218",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_218",
        "fct-type": "function",
        "title": "c256_f_218"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_218",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_219",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_219",
        "fct-type": "function",
        "title": "c256_f_219"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_219",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_22",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_22",
        "fct-type": "function",
        "title": "c256_f_22"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_22",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_220",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_220",
        "fct-type": "function",
        "title": "c256_f_220"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_220",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_221",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_221",
        "fct-type": "function",
        "title": "c256_f_221"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_221",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_222",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_222",
        "fct-type": "function",
        "title": "c256_f_222"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_222",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_223",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_223",
        "fct-type": "function",
        "title": "c256_f_223"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_223",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_224",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_224",
        "fct-type": "function",
        "title": "c256_f_224"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_224",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_225",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_225",
        "fct-type": "function",
        "title": "c256_f_225"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_225",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_226",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_226",
        "fct-type": "function",
        "title": "c256_f_226"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_226",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_227",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_227",
        "fct-type": "function",
        "title": "c256_f_227"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_227",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_228",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_228",
        "fct-type": "function",
        "title": "c256_f_228"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_228",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_229",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_229",
        "fct-type": "function",
        "title": "c256_f_229"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_229",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_23",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_23",
        "fct-type": "function",
        "title": "c256_f_23"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_23",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_230",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_230",
        "fct-type": "function",
        "title": "c256_f_230"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_230",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_231",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_231",
        "fct-type": "function",
        "title": "c256_f_231"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_231",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_232",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_232",
        "fct-type": "function",
        "title": "c256_f_232"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_232",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_233",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_233",
        "fct-type": "function",
        "title": "c256_f_233"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_233",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_234",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_234",
        "fct-type": "function",
        "title": "c256_f_234"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_234",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_235",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_235",
        "fct-type": "function",
        "title": "c256_f_235"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_235",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_236",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_236",
        "fct-type": "function",
        "title": "c256_f_236"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_236",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_237",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_237",
        "fct-type": "function",
        "title": "c256_f_237"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_237",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_238",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_238",
        "fct-type": "function",
        "title": "c256_f_238"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_238",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_239",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_239",
        "fct-type": "function",
        "title": "c256_f_239"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_239",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_24",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_24",
        "fct-type": "function",
        "title": "c256_f_24"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_24",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_240",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_240",
        "fct-type": "function",
        "title": "c256_f_240"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_240",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_241",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_241",
        "fct-type": "function",
        "title": "c256_f_241"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_241",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_242",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_242",
        "fct-type": "function",
        "title": "c256_f_242"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_242",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_243",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_243",
        "fct-type": "function",
        "title": "c256_f_243"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_243",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_244",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_244",
        "fct-type": "function",
        "title": "c256_f_244"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_244",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_245",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_245",
        "fct-type": "function",
        "title": "c256_f_245"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_245",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_246",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_246",
        "fct-type": "function",
        "title": "c256_f_246"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_246",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_247",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_247",
        "fct-type": "function",
        "title": "c256_f_247"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_247",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_248",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_248",
        "fct-type": "function",
        "title": "c256_f_248"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_248",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_249",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_249",
        "fct-type": "function",
        "title": "c256_f_249"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_249",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_25",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_25",
        "fct-type": "function",
        "title": "c256_f_25"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_25",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_250",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_250",
        "fct-type": "function",
        "title": "c256_f_250"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_250",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_251",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_251",
        "fct-type": "function",
        "title": "c256_f_251"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_251",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_252",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_252",
        "fct-type": "function",
        "title": "c256_f_252"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_252",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_253",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_253",
        "fct-type": "function",
        "title": "c256_f_253"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_253",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_254",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_254",
        "fct-type": "function",
        "title": "c256_f_254"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_254",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_255",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_255",
        "fct-type": "function",
        "title": "c256_f_255"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_255",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_26",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_26",
        "fct-type": "function",
        "title": "c256_f_26"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_26",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_27",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_27",
        "fct-type": "function",
        "title": "c256_f_27"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_27",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_28",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_28",
        "fct-type": "function",
        "title": "c256_f_28"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_28",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_29",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_29",
        "fct-type": "function",
        "title": "c256_f_29"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_29",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_3",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_3",
        "fct-type": "function",
        "title": "c256_f_3"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_3",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_30",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_30",
        "fct-type": "function",
        "title": "c256_f_30"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_30",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_31",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_31",
        "fct-type": "function",
        "title": "c256_f_31"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_31",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_32",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_32",
        "fct-type": "function",
        "title": "c256_f_32"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_32",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_33",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_33",
        "fct-type": "function",
        "title": "c256_f_33"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_33",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_34",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_34",
        "fct-type": "function",
        "title": "c256_f_34"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_34",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_35",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_35",
        "fct-type": "function",
        "title": "c256_f_35"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_35",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_36",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_36",
        "fct-type": "function",
        "title": "c256_f_36"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_36",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_37",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_37",
        "fct-type": "function",
        "title": "c256_f_37"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_37",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_38",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_38",
        "fct-type": "function",
        "title": "c256_f_38"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_38",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_39",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_39",
        "fct-type": "function",
        "title": "c256_f_39"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_39",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_4",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_4",
        "fct-type": "function",
        "title": "c256_f_4"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_4",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_40",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_40",
        "fct-type": "function",
        "title": "c256_f_40"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_40",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_41",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_41",
        "fct-type": "function",
        "title": "c256_f_41"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_41",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_42",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_42",
        "fct-type": "function",
        "title": "c256_f_42"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_42",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_43",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_43",
        "fct-type": "function",
        "title": "c256_f_43"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_43",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_44",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_44",
        "fct-type": "function",
        "title": "c256_f_44"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_44",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_45",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_45",
        "fct-type": "function",
        "title": "c256_f_45"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_45",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_46",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_46",
        "fct-type": "function",
        "title": "c256_f_46"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_46",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_47",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_47",
        "fct-type": "function",
        "title": "c256_f_47"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_47",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_48",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_48",
        "fct-type": "function",
        "title": "c256_f_48"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_48",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_49",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_49",
        "fct-type": "function",
        "title": "c256_f_49"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_49",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_5",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_5",
        "fct-type": "function",
        "title": "c256_f_5"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_5",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_50",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_50",
        "fct-type": "function",
        "title": "c256_f_50"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_50",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_51",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_51",
        "fct-type": "function",
        "title": "c256_f_51"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_51",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_52",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_52",
        "fct-type": "function",
        "title": "c256_f_52"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_52",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_53",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_53",
        "fct-type": "function",
        "title": "c256_f_53"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_53",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_54",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_54",
        "fct-type": "function",
        "title": "c256_f_54"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_54",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_55",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_55",
        "fct-type": "function",
        "title": "c256_f_55"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_55",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_56",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_56",
        "fct-type": "function",
        "title": "c256_f_56"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_56",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_57",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_57",
        "fct-type": "function",
        "title": "c256_f_57"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_57",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_58",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_58",
        "fct-type": "function",
        "title": "c256_f_58"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_58",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_59",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_59",
        "fct-type": "function",
        "title": "c256_f_59"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_59",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_6",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_6",
        "fct-type": "function",
        "title": "c256_f_6"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_6",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_60",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_60",
        "fct-type": "function",
        "title": "c256_f_60"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_60",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_61",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_61",
        "fct-type": "function",
        "title": "c256_f_61"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_61",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_62",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_62",
        "fct-type": "function",
        "title": "c256_f_62"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_62",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_63",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_63",
        "fct-type": "function",
        "title": "c256_f_63"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_63",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_64",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_64",
        "fct-type": "function",
        "title": "c256_f_64"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_64",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_65",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_65",
        "fct-type": "function",
        "title": "c256_f_65"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_65",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_66",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_66",
        "fct-type": "function",
        "title": "c256_f_66"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_66",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_67",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_67",
        "fct-type": "function",
        "title": "c256_f_67"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_67",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_68",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_68",
        "fct-type": "function",
        "title": "c256_f_68"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_68",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_69",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_69",
        "fct-type": "function",
        "title": "c256_f_69"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_69",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_7",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_7",
        "fct-type": "function",
        "title": "c256_f_7"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_7",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_70",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_70",
        "fct-type": "function",
        "title": "c256_f_70"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_70",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_71",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_71",
        "fct-type": "function",
        "title": "c256_f_71"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_71",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_72",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_72",
        "fct-type": "function",
        "title": "c256_f_72"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_72",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_73",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_73",
        "fct-type": "function",
        "title": "c256_f_73"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_73",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_74",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_74",
        "fct-type": "function",
        "title": "c256_f_74"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_74",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_75",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_75",
        "fct-type": "function",
        "title": "c256_f_75"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_75",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_76",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_76",
        "fct-type": "function",
        "title": "c256_f_76"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_76",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_77",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_77",
        "fct-type": "function",
        "title": "c256_f_77"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_77",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_78",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_78",
        "fct-type": "function",
        "title": "c256_f_78"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_78",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_79",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_79",
        "fct-type": "function",
        "title": "c256_f_79"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_79",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_8",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_8",
        "fct-type": "function",
        "title": "c256_f_8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_80",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_80",
        "fct-type": "function",
        "title": "c256_f_80"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_80",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_81",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_81",
        "fct-type": "function",
        "title": "c256_f_81"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_81",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_82",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_82",
        "fct-type": "function",
        "title": "c256_f_82"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_82",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_83",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_83",
        "fct-type": "function",
        "title": "c256_f_83"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_83",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_84",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_84",
        "fct-type": "function",
        "title": "c256_f_84"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_84",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_85",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_85",
        "fct-type": "function",
        "title": "c256_f_85"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_85",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_86",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_86",
        "fct-type": "function",
        "title": "c256_f_86"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_86",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_87",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_87",
        "fct-type": "function",
        "title": "c256_f_87"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_87",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_88",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_88",
        "fct-type": "function",
        "title": "c256_f_88"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_88",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_89",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_89",
        "fct-type": "function",
        "title": "c256_f_89"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_89",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_9",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_9",
        "fct-type": "function",
        "title": "c256_f_9"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_9",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_90",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_90",
        "fct-type": "function",
        "title": "c256_f_90"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_90",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_91",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_91",
        "fct-type": "function",
        "title": "c256_f_91"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_91",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_92",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_92",
        "fct-type": "function",
        "title": "c256_f_92"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_92",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_93",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_93",
        "fct-type": "function",
        "title": "c256_f_93"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_93",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_94",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_94",
        "fct-type": "function",
        "title": "c256_f_94"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_94",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_95",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_95",
        "fct-type": "function",
        "title": "c256_f_95"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_95",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_96",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_96",
        "fct-type": "function",
        "title": "c256_f_96"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_96",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_97",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_97",
        "fct-type": "function",
        "title": "c256_f_97"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_97",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_98",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_98",
        "fct-type": "function",
        "title": "c256_f_98"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_98",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_99",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_99",
        "fct-type": "function",
        "title": "c256_f_99"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_99",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_black",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_black",
        "fct-type": "function",
        "title": "c256_f_black"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_black",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_blue",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_blue",
        "fct-type": "function",
        "title": "c256_f_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_blue",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_blue_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_blue_bright",
        "fct-type": "function",
        "title": "c256_f_blue_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_blue_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_cyan",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_cyan",
        "fct-type": "function",
        "title": "c256_f_cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_cyan",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_cyan_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_cyan_bright",
        "fct-type": "function",
        "title": "c256_f_cyan_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_cyan_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_default",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_default",
        "fct-type": "function",
        "title": "c256_f_default"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_default",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_green",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_green",
        "fct-type": "function",
        "title": "c256_f_green"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_green",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_green_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_green_bright",
        "fct-type": "function",
        "title": "c256_f_green_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_green_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_grey",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_grey",
        "fct-type": "function",
        "title": "c256_f_grey"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_grey",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_magenta",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_magenta",
        "fct-type": "function",
        "title": "c256_f_magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_magenta",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_magenta_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_magenta_bright",
        "fct-type": "function",
        "title": "c256_f_magenta_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_magenta_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_red",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_red",
        "fct-type": "function",
        "title": "c256_f_red"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_red",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_red_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_red_bright",
        "fct-type": "function",
        "title": "c256_f_red_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_red_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_white",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_white",
        "fct-type": "function",
        "title": "c256_f_white"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_white",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_white_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_white_bright",
        "fct-type": "function",
        "title": "c256_f_white_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_white_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_yellow",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_yellow",
        "fct-type": "function",
        "title": "c256_f_yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_yellow",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_yellow_bright",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c256_f_yellow_bright",
        "fct-type": "function",
        "title": "c256_f_yellow_bright"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c256_f_yellow_bright",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_black",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_b_black",
        "fct-type": "function",
        "title": "c8_b_black"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_b_black",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_blue",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_b_blue",
        "fct-type": "function",
        "title": "c8_b_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_b_blue",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_cyan",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_b_cyan",
        "fct-type": "function",
        "title": "c8_b_cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_b_cyan",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_default",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_b_default",
        "fct-type": "function",
        "title": "c8_b_default"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_b_default",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_green",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_b_green",
        "fct-type": "function",
        "title": "c8_b_green"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_b_green",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_magenta",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_b_magenta",
        "fct-type": "function",
        "title": "c8_b_magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_b_magenta",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_red",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_b_red",
        "fct-type": "function",
        "title": "c8_b_red"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_b_red",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_white",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_b_white",
        "fct-type": "function",
        "title": "c8_b_white"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_b_white",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_yellow",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_b_yellow",
        "fct-type": "function",
        "title": "c8_b_yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_b_yellow",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_black",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_f_black",
        "fct-type": "function",
        "title": "c8_f_black"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_f_black",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_blue",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_f_blue",
        "fct-type": "function",
        "title": "c8_f_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_f_blue",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_cyan",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_f_cyan",
        "fct-type": "function",
        "title": "c8_f_cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_f_cyan",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_default",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_f_default",
        "fct-type": "function",
        "title": "c8_f_default"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_f_default",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_green",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_f_green",
        "fct-type": "function",
        "title": "c8_f_green"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_f_green",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_magenta",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_f_magenta",
        "fct-type": "function",
        "title": "c8_f_magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_f_magenta",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_red",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_f_red",
        "fct-type": "function",
        "title": "c8_f_red"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_f_red",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_white",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_f_white",
        "fct-type": "function",
        "title": "c8_f_white"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_f_white",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_yellow",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#c8_f_yellow",
        "fct-type": "function",
        "title": "c8_f_yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "c8_f_yellow",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:common256",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Lens' Style256 StyleCommon",
        "fct-source": "src/System-Console-Rainbow.html#common256",
        "fct-type": "function",
        "title": "common256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "common256",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:common8",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Lens' Style8 StyleCommon",
        "fct-source": "src/System-Console-Rainbow.html#common8",
        "fct-type": "function",
        "title": "common8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "common8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_black",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#f_black",
        "fct-type": "function",
        "title": "f_black"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "f_black",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_blue",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#f_blue",
        "fct-type": "function",
        "title": "f_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "f_blue",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_cyan",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#f_cyan",
        "fct-type": "function",
        "title": "f_cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "f_cyan",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_default",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#f_default",
        "fct-type": "function",
        "title": "f_default"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "f_default",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_green",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#f_green",
        "fct-type": "function",
        "title": "f_green"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "f_green",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_magenta",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#f_magenta",
        "fct-type": "function",
        "title": "f_magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "f_magenta",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_red",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#f_red",
        "fct-type": "function",
        "title": "f_red"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "f_red",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_white",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#f_white",
        "fct-type": "function",
        "title": "f_white"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "f_white",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_yellow",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#f_yellow",
        "fct-type": "function",
        "title": "f_yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "f_yellow",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:flash",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#flash",
        "fct-type": "function",
        "title": "flash"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "flash",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:flash256",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#flash256",
        "fct-type": "function",
        "title": "flash256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "flash256",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:flash256off",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#flash256off",
        "fct-type": "function",
        "title": "flash256off"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "flash256off",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:flash8",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#flash8",
        "fct-type": "function",
        "title": "flash8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "flash8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:flash8off",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#flash8off",
        "fct-type": "function",
        "title": "flash8off"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "flash8off",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:flashOff",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#flashOff",
        "fct-type": "function",
        "title": "flashOff"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "flashOff",
        "normalized": "",
        "package": "rainbow",
        "partial": "Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:foreground256",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Lens' Style256 Foreground256",
        "fct-source": "src/System-Console-Rainbow.html#foreground256",
        "fct-type": "function",
        "title": "foreground256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "foreground256",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:foreground8",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Lens' Style8 Foreground8",
        "fct-source": "src/System-Console-Rainbow.html#foreground8",
        "fct-type": "function",
        "title": "foreground8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "foreground8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:fromString",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "String -\u003e a",
        "fct-type": "method",
        "title": "fromString"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "fromString",
        "normalized": "String-\u003ea",
        "package": "rainbow",
        "partial": "String",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:hPutChunk",
      "description": {
        "fct-descr": "\u003cp\u003ePrint one chunk at a time, to a handle\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Handle -\u003e Chunk -\u003e IO ()",
        "fct-source": "src/System-Console-Rainbow.html#hPutChunk",
        "fct-type": "function",
        "title": "hPutChunk"
      },
      "index": {
        "description": "Print one chunk at time to handle",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "hPutChunk",
        "normalized": "Handle-\u003eChunk-\u003eIO()",
        "package": "rainbow",
        "partial": "Put Chunk",
        "signature": "Handle-\u003eChunk-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:hPutChunkLn",
      "description": {
        "fct-descr": "\u003cp\u003ePrint one chunk at a time, to a handle, append a newline\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Handle -\u003e Chunk -\u003e IO ()",
        "fct-source": "src/System-Console-Rainbow.html#hPutChunkLn",
        "fct-type": "function",
        "title": "hPutChunkLn"
      },
      "index": {
        "description": "Print one chunk at time to handle append newline",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "hPutChunkLn",
        "normalized": "Handle-\u003eChunk-\u003eIO()",
        "package": "rainbow",
        "partial": "Put Chunk Ln",
        "signature": "Handle-\u003eChunk-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:hPutChunks",
      "description": {
        "fct-descr": "\u003cp\u003eSends a list of chunks to the given handle for printing. Sets up\n the terminal (this only needs to be done once.) Lazily processes\n the list of Chunk. See \u003ccode\u003e\u003ca\u003eputChunks\u003c/a\u003e\u003c/code\u003e for notes on how many colors\n are used.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Handle -\u003e Term -\u003e [Chunk] -\u003e IO ()",
        "fct-source": "src/System-Console-Rainbow.html#hPutChunks",
        "fct-type": "function",
        "title": "hPutChunks"
      },
      "index": {
        "description": "Sends list of chunks to the given handle for printing Sets up the terminal this only needs to be done once Lazily processes the list of Chunk See putChunks for notes on how many colors are used",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "hPutChunks",
        "normalized": "Handle-\u003eTerm-\u003e[Chunk]-\u003eIO()",
        "package": "rainbow",
        "partial": "Put Chunks",
        "signature": "Handle-\u003eTerm-\u003e[Chunk]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:inverse",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#inverse",
        "fct-type": "function",
        "title": "inverse"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "inverse",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:inverse256",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#inverse256",
        "fct-type": "function",
        "title": "inverse256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "inverse256",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:inverse256off",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#inverse256off",
        "fct-type": "function",
        "title": "inverse256off"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "inverse256off",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:inverse8",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#inverse8",
        "fct-type": "function",
        "title": "inverse8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "inverse8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:inverse8off",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#inverse8off",
        "fct-type": "function",
        "title": "inverse8off"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "inverse8off",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:inverseOff",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#inverseOff",
        "fct-type": "function",
        "title": "inverseOff"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "inverseOff",
        "normalized": "",
        "package": "rainbow",
        "partial": "Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:mappend",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "mappend"
      },
      "index": {
        "description": "An associative operation",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "mappend",
        "normalized": "a-\u003ea-\u003ea",
        "package": "rainbow",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:mconcat",
      "description": {
        "fct-descr": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "[a] -\u003e a",
        "fct-type": "method",
        "title": "mconcat"
      },
      "index": {
        "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "mconcat",
        "normalized": "[a]-\u003ea",
        "package": "rainbow",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:mempty",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "a",
        "fct-type": "method",
        "title": "mempty"
      },
      "index": {
        "description": "Identity of mappend",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "mempty",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:putChunk",
      "description": {
        "fct-descr": "\u003cp\u003ePrint one chunk at a time, to standard output\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk -\u003e IO ()",
        "fct-source": "src/System-Console-Rainbow.html#putChunk",
        "fct-type": "function",
        "title": "putChunk"
      },
      "index": {
        "description": "Print one chunk at time to standard output",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "putChunk",
        "normalized": "Chunk-\u003eIO()",
        "package": "rainbow",
        "partial": "Chunk",
        "signature": "Chunk-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:putChunkLn",
      "description": {
        "fct-descr": "\u003cp\u003ePrint one chunk at a time, to standard output, append a newline\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk -\u003e IO ()",
        "fct-source": "src/System-Console-Rainbow.html#putChunkLn",
        "fct-type": "function",
        "title": "putChunkLn"
      },
      "index": {
        "description": "Print one chunk at time to standard output append newline",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "putChunkLn",
        "normalized": "Chunk-\u003eIO()",
        "package": "rainbow",
        "partial": "Chunk Ln",
        "signature": "Chunk-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:putChunks",
      "description": {
        "fct-descr": "\u003cp\u003eSends a list of chunks to standard output for printing. Sets up\n the terminal (this only needs to be done once.) Lazily processes\n the list of Chunk.\n\u003c/p\u003e\u003cp\u003eWhich colors are used depends upon the \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e. If it is \u003ccode\u003e\u003ca\u003eDumb\u003c/a\u003e\u003c/code\u003e,\n then no colors are used on output. If the \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e is specified with\n \u003ccode\u003e\u003ca\u003eTermName\u003c/a\u003e\u003c/code\u003e, the UNIX terminfo library is used to determine how many\n colors the terminal supports. If it supports at least 256 colors,\n then 256 colors are used. If it supports at least 8 colors but less\n than 256 colors, then 256 colors are used. Otherwise, no colors are\n used. A runtime error will occur if the \u003ccode\u003e\u003ca\u003eTermName\u003c/a\u003e\u003c/code\u003e is not found in\n the system terminal database.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Term -\u003e [Chunk] -\u003e IO ()",
        "fct-source": "src/System-Console-Rainbow.html#putChunks",
        "fct-type": "function",
        "title": "putChunks"
      },
      "index": {
        "description": "Sends list of chunks to standard output for printing Sets up the terminal this only needs to be done once Lazily processes the list of Chunk Which colors are used depends upon the Term If it is Dumb then no colors are used on output If the Term is specified with TermName the UNIX terminfo library is used to determine how many colors the terminal supports If it supports at least colors then colors are used If it supports at least colors but less than colors then colors are used Otherwise no colors are used runtime error will occur if the TermName is not found in the system terminal database",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "putChunks",
        "normalized": "Term-\u003e[Chunk]-\u003eIO()",
        "package": "rainbow",
        "partial": "Chunks",
        "signature": "Term-\u003e[Chunk]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:scBold",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Lens' StyleCommon (Last Bool)",
        "fct-source": "src/System-Console-Rainbow.html#scBold",
        "fct-type": "function",
        "title": "scBold"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "scBold",
        "normalized": "",
        "package": "rainbow",
        "partial": "Bold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:scFlash",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Lens' StyleCommon (Last Bool)",
        "fct-source": "src/System-Console-Rainbow.html#scFlash",
        "fct-type": "function",
        "title": "scFlash"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "scFlash",
        "normalized": "",
        "package": "rainbow",
        "partial": "Flash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:scInverse",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Lens' StyleCommon (Last Bool)",
        "fct-source": "src/System-Console-Rainbow.html#scInverse",
        "fct-type": "function",
        "title": "scInverse"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "scInverse",
        "normalized": "",
        "package": "rainbow",
        "partial": "Inverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:scUnderline",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Lens' StyleCommon (Last Bool)",
        "fct-source": "src/System-Console-Rainbow.html#scUnderline",
        "fct-type": "function",
        "title": "scUnderline"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "scUnderline",
        "normalized": "",
        "package": "rainbow",
        "partial": "Underline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:smartTermFromEnv",
      "description": {
        "fct-descr": "\u003cp\u003eGets the terminal definition from the environment. If the first\n argument is True, the terminal is always obtained from the\n environment. If it is False, the terminal is only obtained from the\n environment if the given handle is not a terminal; otherwise, Dumb\n is returned.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Bool-\u003e Handle-\u003e IO Term",
        "fct-type": "function",
        "title": "smartTermFromEnv"
      },
      "index": {
        "description": "Gets the terminal definition from the environment If the first argument is True the terminal is always obtained from the environment If it is False the terminal is only obtained from the environment if the given handle is not terminal otherwise Dumb is returned",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "smartTermFromEnv",
        "normalized": "Bool-\u003eHandle-\u003eIO Term",
        "package": "rainbow",
        "partial": "Term From Env",
        "signature": "Bool-\u003eHandle-\u003eIO Term"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:termFromEnv",
      "description": {
        "fct-descr": "\u003cp\u003eGets the terminal definition from the environment. If the\n environment does not have a TERM veriable, use \u003ccode\u003e\u003ca\u003eDumb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "IO Term",
        "fct-source": "src/System-Console-Rainbow.html#termFromEnv",
        "fct-type": "function",
        "title": "termFromEnv"
      },
      "index": {
        "description": "Gets the terminal definition from the environment If the environment does not have TERM veriable use Dumb",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "termFromEnv",
        "normalized": "",
        "package": "rainbow",
        "partial": "From Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:text",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Lens' Chunk Text",
        "fct-source": "src/System-Console-Rainbow.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "text",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:textSpec",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Lens' Chunk TextSpec",
        "fct-source": "src/System-Console-Rainbow.html#textSpec",
        "fct-type": "function",
        "title": "textSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "textSpec",
        "normalized": "",
        "package": "rainbow",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:underline",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#underline",
        "fct-type": "function",
        "title": "underline"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "underline",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:underline256",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#underline256",
        "fct-type": "function",
        "title": "underline256"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "underline256",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:underline256off",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#underline256off",
        "fct-type": "function",
        "title": "underline256off"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "underline256off",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:underline8",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#underline8",
        "fct-type": "function",
        "title": "underline8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "underline8",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:underline8off",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#underline8off",
        "fct-type": "function",
        "title": "underline8off"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "underline8off",
        "normalized": "",
        "package": "rainbow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:underlineOff",
      "description": {
        "fct-module": "System.Console.Rainbow",
        "fct-package": "rainbow",
        "fct-signature": "Chunk",
        "fct-source": "src/System-Console-Rainbow.html#underlineOff",
        "fct-type": "function",
        "title": "underlineOff"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Rainbow",
        "module": "System.Console.Rainbow",
        "name": "underlineOff",
        "normalized": "",
        "package": "rainbow",
        "partial": "Off",
        "signature": ""
      }
    }
  }
]