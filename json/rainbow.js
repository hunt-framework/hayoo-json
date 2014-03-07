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
        "word": "rainbow"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandles colors and special effects for text. Internally this\n module uses the Haskell terminfo library, which links against the\n UNIX library of the same name, so it should work with a wide\n variety of UNIX terminals.\n\u003c/p\u003e\u003cp\u003eThe building block of Rainbow is the \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e. Each \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e comes with\n a \u003ccode\u003e\u003ca\u003eTextSpec\u003c/a\u003e\u003c/code\u003e, which specifies how the text should look on 8-color\n and on 256-color terminals. The \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e is a full specification; that\n is, although \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003es are typically printed one after the other, the\n appearance of one \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e does not affect the appearance of the next\n \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou have full freedom to specify different attributes and colors\n for 8 and 256 color terminals; for instance, you can have text\n appear red on an 8-color terminal but blue on a 256-color terminal.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, so you can combine them using the usual\n monoid functions, including \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e. You can create a \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e with\n text using \u003ccode\u003efromString\u003c/code\u003e, but this library is much more usable if\n you enable the OverloadedStrings GHC extension:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\u003c/pre\u003e\u003cp\u003eand all future examples assume you have enabled OverloadedStrings.\n\u003c/p\u003e\u003cp\u003eHere are some basic examples:\n\u003c/p\u003e\u003cpre\u003e putChunkLn $ \"Some blue text\" \u003c\u003e f_blue\n putChunkLn $ \"Blue on red background\" \u003c\u003e f_blue \u003c\u003e b_red\n putChunkLn $ \"Blue on red, foreground bold\" \u003c\u003e f_blue \u003c\u003e b_red \u003c\u003e bold\n\u003c/pre\u003e\u003cp\u003eBut what makes Rainbow a little more interesting is that you can\n also specify output for 256-color terminals. To use these examples,\n be sure your TERM environment variable is set to something that\n supports 256 colors (like \u003ccode\u003exterm-256color\u003c/code\u003e) before you start GHCi:\n\u003c/p\u003e\u003cpre\u003e putChunkLn $ \"Blue on 8-color terminal, red on 256-color terminal\"\n            \u003c\u003e c8_f_blue \u003c\u003e c256_f_red\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e multiple chunks that change the same property, the\n rightmost one \"wins\":\n\u003c/p\u003e\u003cpre\u003e putChunkLn $ \"This will be blue\" \u003c\u003e f_red \u003c\u003e f_blue\n\u003c/pre\u003e\u003cp\u003eThis property comes in handy if you want to specify a default color\n for 8- and 256-color terminals, then a more specific shade for a\n 256-color terminal:\n\u003c/p\u003e\u003cpre\u003e putChunkLn $ \"Pink\" \u003c\u003e f_red \u003c\u003e c256_f_201\n\u003c/pre\u003e\u003cp\u003eHowever, if you use \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e to add additional \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003es that have\n text, the text will be appended:\n\u003c/p\u003e\u003cpre\u003e putChunkLn $ f_green \u003c\u003e \"You will see this text \"\n              \u003c\u003e \"and this text too, but it will all be blue\"\n              \u003c\u003e f_blue\n\u003c/pre\u003e\u003cp\u003eAlthough one chunk can have different colors on 8- and 256-color\n terminals, it cannot have different colors on the same\n terminal. That is, if you want to print some text in one color and\n some text in another color, make two chunks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Rainbow",
          "name": "Rainbow",
          "package": "rainbow",
          "source": "src/System-Console-Rainbow.html",
          "type": "module"
        },
        "index": {
          "description": "Handles colors and special effects for text Internally this module uses the Haskell terminfo library which links against the UNIX library of the same name so it should work with wide variety of UNIX terminals The building block of Rainbow is the Chunk Each Chunk comes with TextSpec which specifies how the text should look on color and on color terminals The Chunk is full specification that is although Chunk are typically printed one after the other the appearance of one Chunk does not affect the appearance of the next Chunk You have full freedom to specify different attributes and colors for and color terminals for instance you can have text appear red on an color terminal but blue on color terminal Chunk is Monoid so you can combine them using the usual monoid functions including You can create Chunk with text using fromString but this library is much more usable if you enable the OverloadedStrings GHC extension LANGUAGE OverloadedStrings and all future examples assume you have enabled OverloadedStrings Here are some basic examples putChunkLn Some blue text blue putChunkLn Blue on red background blue red putChunkLn Blue on red foreground bold blue red bold But what makes Rainbow little more interesting is that you can also specify output for color terminals To use these examples be sure your TERM environment variable is set to something that supports colors like xterm-256color before you start GHCi putChunkLn Blue on color terminal red on color terminal c8 blue c256 red If mappend multiple chunks that change the same property the rightmost one wins putChunkLn This will be blue red blue This property comes in handy if you want to specify default color for and color terminals then more specific shade for color terminal putChunkLn Pink red c256 However if you use mappend to add additional Chunk that have text the text will be appended putChunkLn green You will see this text and this text too but it will all be blue blue Although one chunk can have different colors on and color terminals it cannot have different colors on the same terminal That is if you want to print some text in one color and some text in another color make two chunks",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Rainbow",
          "package": "rainbow",
          "partial": "Rainbow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "Background256",
          "package": "rainbow",
          "source": "src/System-Console-Rainbow.html#Background256",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Background256",
          "package": "rainbow",
          "partial": "Background",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Background256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "Background8",
          "package": "rainbow",
          "source": "src/System-Console-Rainbow.html#Background8",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Background8",
          "package": "rainbow",
          "partial": "Background",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Background8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chunk is some textual data coupled with a description of what\n color the text is, attributes like whether it is bold or\n underlined, etc. The chunk knows what foreground and background\n colors and what attributes to use for both an 8 color terminal and\n a 256 color terminal.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "Chunk",
          "package": "rainbow",
          "source": "src/System-Console-Rainbow.html#Chunk",
          "type": "data"
        },
        "index": {
          "description": "chunk is some textual data coupled with description of what color the text is attributes like whether it is bold or underlined etc The chunk knows what foreground and background colors and what attributes to use for both an color terminal and color terminal",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Chunk",
          "package": "rainbow",
          "partial": "Chunk",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "Foreground256",
          "package": "rainbow",
          "source": "src/System-Console-Rainbow.html#Foreground256",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Foreground256",
          "package": "rainbow",
          "partial": "Foreground",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Foreground256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "Foreground8",
          "package": "rainbow",
          "source": "src/System-Console-Rainbow.html#Foreground8",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Foreground8",
          "package": "rainbow",
          "partial": "Foreground",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Foreground8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for string-like datastructures; used by the overloaded string\n   extension (-foverloaded-strings in GHC).\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "IsString",
          "package": "rainbow",
          "type": "class"
        },
        "index": {
          "description": "Class for string-like datastructures used by the overloaded string extension foverloaded-strings in GHC",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "IsString",
          "package": "rainbow",
          "partial": "Is String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:IsString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "Monoid",
          "package": "rainbow",
          "type": "class"
        },
        "index": {
          "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Monoid",
          "package": "rainbow",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes text appearance (foreground and background colors, as\n well as other attributes such as bold) for a 256 color terminal.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "Style256",
          "package": "rainbow",
          "source": "src/System-Console-Rainbow.html#Style256",
          "type": "data"
        },
        "index": {
          "description": "Describes text appearance foreground and background colors as well as other attributes such as bold for color terminal",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Style256",
          "package": "rainbow",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Style256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes text appearance (foreground and background colors, as\n well as other attributes such as bold) for an 8 color terminal.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "Style8",
          "package": "rainbow",
          "source": "src/System-Console-Rainbow.html#Style8",
          "type": "data"
        },
        "index": {
          "description": "Describes text appearance foreground and background colors as well as other attributes such as bold for an color terminal",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Style8",
          "package": "rainbow",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Style8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle elements that apply in both 8 and 256 color\n terminals. However, the elements are described separately for 8 and\n 256 color terminals, so that the text appearance can change\n depending on how many colors a terminal has.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "StyleCommon",
          "package": "rainbow",
          "source": "src/System-Console-Rainbow.html#StyleCommon",
          "type": "data"
        },
        "index": {
          "description": "Style elements that apply in both and color terminals However the elements are described separately for and color terminals so that the text appearance can change depending on how many colors terminal has",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "StyleCommon",
          "package": "rainbow",
          "partial": "Style Common",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:StyleCommon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich terminal definition to use.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "Term",
          "package": "rainbow",
          "source": "src/System-Console-Rainbow.html#Term",
          "type": "data"
        },
        "index": {
          "description": "Which terminal definition to use",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Term",
          "package": "rainbow",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TextSpec bundles together the styles for the 8 and 256 color\n terminals, so that the text can be portrayed on any terminal.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "TextSpec",
          "package": "rainbow",
          "source": "src/System-Console-Rainbow.html#TextSpec",
          "type": "data"
        },
        "index": {
          "description": "The TextSpec bundles together the styles for the and color terminals so that the text can be portrayed on any terminal",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "TextSpec",
          "package": "rainbow",
          "partial": "Text Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#t:TextSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "(\u003c\u003e)",
          "package": "rainbow",
          "signature": "m -\u003e m -\u003e m",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for mappend",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "rainbow",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "Chunk",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#Chunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Chunk",
          "package": "rainbow",
          "partial": "Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing this terminal should always succeed. This suppresses all\n colors. Uesful if output is not going to a TTY, or if you just do\n not like colors.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "Dumb",
          "package": "rainbow",
          "signature": "Dumb",
          "source": "src/System-Console-Rainbow.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Using this terminal should always succeed This suppresses all colors Uesful if output is not going to TTY or if you just do not like colors",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Dumb",
          "package": "rainbow",
          "partial": "Dumb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:Dumb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "Style256",
          "package": "rainbow",
          "signature": "Style256",
          "source": "src/System-Console-Rainbow.html#Style256",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Style256",
          "package": "rainbow",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:Style256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "Style8",
          "package": "rainbow",
          "signature": "Style8",
          "source": "src/System-Console-Rainbow.html#Style8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "Style8",
          "package": "rainbow",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:Style8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "StyleCommon",
          "package": "rainbow",
          "signature": "StyleCommon",
          "source": "src/System-Console-Rainbow.html#StyleCommon",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "StyleCommon",
          "package": "rainbow",
          "partial": "Style Common",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:StyleCommon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the terminal with this given name. You might get this from\n the TERM environment variable, or set it explicitly. A runtime\n error will result if the terminfo database does not have a\n definition for this terminal. If this terminal supports 256\n colors, then 256 colors are used. If this terminal supports less\n than 256 colors, but at least 8 colors, then 8 colors are\n used. Otherwise, no colors are used.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "TermName",
          "package": "rainbow",
          "signature": "TermName String",
          "source": "src/System-Console-Rainbow.html#Term",
          "type": "function"
        },
        "index": {
          "description": "Use the terminal with this given name You might get this from the TERM environment variable or set it explicitly runtime error will result if the terminfo database does not have definition for this terminal If this terminal supports colors then colors are used If this terminal supports less than colors but at least colors then colors are used Otherwise no colors are used",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "TermName",
          "package": "rainbow",
          "partial": "Term Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:TermName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "TextSpec",
          "package": "rainbow",
          "signature": "TextSpec",
          "source": "src/System-Console-Rainbow.html#TextSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "TextSpec",
          "package": "rainbow",
          "partial": "Text Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:TextSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "b_black",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#b_black",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "b_black",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "b_blue",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#b_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "b_blue",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "b_cyan",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#b_cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "b_cyan",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "b_default",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#b_default",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "b_default",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "b_green",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#b_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "b_green",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "b_magenta",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#b_magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "b_magenta",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "b_red",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#b_red",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "b_red",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "b_white",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#b_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "b_white",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "b_yellow",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#b_yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "b_yellow",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:b_yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "background256",
          "package": "rainbow",
          "signature": "Background256",
          "source": "src/System-Console-Rainbow.html#Style256",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "background256",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:background256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "background8",
          "package": "rainbow",
          "signature": "Background8",
          "source": "src/System-Console-Rainbow.html#Style8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "background8",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:background8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBold. What actually happens when you use Bold is going to depend\n on your terminal. For example, xterm allows you actually use a bold\n font for bold, if you have one. Otherwise, it might simulate bold\n by using overstriking. Another possibility is that your terminal\n might use a different color to indicate bold. For more details (at\n least for xterm), look at xterm (1) and search for \u003ccode\u003eboldColors\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf your terminal uses a different color for bold, this allows an\n 8-color terminal to really have 16 colors.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "bold",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#bold",
          "type": "function"
        },
        "index": {
          "description": "Bold What actually happens when you use Bold is going to depend on your terminal For example xterm allows you actually use bold font for bold if you have one Otherwise it might simulate bold by using overstriking Another possibility is that your terminal might use different color to indicate bold For more details at least for xterm look at xterm and search for boldColors If your terminal uses different color for bold this allows an color terminal to really have colors",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "bold",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "bold256",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#bold256",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "bold256",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:bold256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "bold256off",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#bold256off",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "bold256off",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:bold256off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "bold8",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#bold8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "bold8",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:bold8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "bold8off",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#bold8off",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "bold8off",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:bold8off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "boldOff",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#boldOff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "boldOff",
          "package": "rainbow",
          "partial": "Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:boldOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_0",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_0",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_0",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_1",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_1",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_10",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_10",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_10",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_100",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_100",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_100",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_100"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_101",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_101",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_101",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_101"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_102",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_102",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_102",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_102"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_103",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_103",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_103",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_103"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_104",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_104",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_104",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_104"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_105",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_105",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_105",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_105"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_106",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_106",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_106",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_106"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_107",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_107",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_107",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_107"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_108",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_108",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_108",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_108"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_109",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_109",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_109",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_109"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_11",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_11",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_11",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_110",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_110",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_110",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_110"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_111",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_111",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_111",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_111"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_112",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_112",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_112",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_112"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_113",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_113",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_113",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_113"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_114",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_114",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_114",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_114"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_115",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_115",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_115",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_115"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_116",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_116",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_116",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_116"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_117",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_117",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_117",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_117"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_118",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_118",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_118",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_118"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_119",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_119",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_119",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_119"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_12",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_12",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_12",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_120",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_120",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_120",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_120"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_121",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_121",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_121",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_121"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_122",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_122",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_122",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_122"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_123",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_123",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_123",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_123"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_124",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_124",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_124",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_124"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_125",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_125",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_125",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_125"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_126",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_126",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_126",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_126"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_127",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_127",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_127",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_127"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_128",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_128",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_128",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_129",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_129",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_129",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_129"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_13",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_13",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_13",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_130",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_130",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_130",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_130"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_131",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_131",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_131",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_131"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_132",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_132",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_132",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_132"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_133",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_133",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_133",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_133"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_134",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_134",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_134",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_134"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_135",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_135",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_135",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_135"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_136",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_136",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_136",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_136"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_137",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_137",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_137",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_137"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_138",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_138",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_138",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_138"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_139",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_139",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_139",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_139"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_14",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_14",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_14",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_140",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_140",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_140",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_140"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_141",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_141",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_141",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_141"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_142",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_142",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_142",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_142"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_143",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_143",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_143",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_143"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_144",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_144",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_144",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_144"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_145",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_145",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_145",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_145"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_146",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_146",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_146",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_146"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_147",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_147",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_147",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_147"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_148",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_148",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_148",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_148"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_149",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_149",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_149",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_149"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_15",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_15",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_15",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_150",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_150",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_150",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_150"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_151",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_151",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_151",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_151"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_152",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_152",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_152",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_152"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_153",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_153",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_153",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_153"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_154",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_154",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_154",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_154"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_155",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_155",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_155",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_155"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_156",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_156",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_156",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_156"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_157",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_157",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_157",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_157"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_158",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_158",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_158",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_158"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_159",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_159",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_159",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_159"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_16",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_16",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_160",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_160",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_160",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_161",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_161",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_161",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_161"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_162",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_162",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_162",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_162"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_163",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_163",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_163",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_163"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_164",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_164",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_164",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_164"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_165",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_165",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_165",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_165"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_166",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_166",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_166",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_166"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_167",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_167",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_167",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_167"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_168",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_168",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_168",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_168"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_169",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_169",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_169",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_169"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_17",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_17",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_17",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_170",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_170",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_170",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_170"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_171",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_171",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_171",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_171"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_172",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_172",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_172",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_172"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_173",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_173",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_173",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_173"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_174",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_174",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_174",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_174"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_175",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_175",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_175",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_175"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_176",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_176",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_176",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_176"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_177",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_177",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_177",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_177"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_178",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_178",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_178",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_178"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_179",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_179",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_179",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_179"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_18",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_18",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_18",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_180",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_180",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_180",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_180"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_181",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_181",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_181",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_181"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_182",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_182",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_182",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_182"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_183",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_183",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_183",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_183"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_184",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_184",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_184",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_184"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_185",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_185",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_185",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_185"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_186",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_186",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_186",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_186"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_187",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_187",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_187",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_187"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_188",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_188",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_188",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_188"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_189",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_189",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_189",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_189"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_19",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_19",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_19",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_190",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_190",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_190",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_190"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_191",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_191",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_191",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_191"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_192",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_192",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_192",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_193",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_193",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_193",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_193"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_194",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_194",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_194",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_194"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_195",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_195",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_195",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_195"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_196",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_196",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_196",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_196"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_197",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_197",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_197",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_197"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_198",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_198",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_198",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_198"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_199",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_199",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_199",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_199"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_2",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_2",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_20",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_20",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_20",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_200",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_200",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_200",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_200"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_201",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_201",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_201",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_201"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_202",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_202",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_202",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_202"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_203",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_203",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_203",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_203"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_204",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_204",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_204",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_204"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_205",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_205",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_205",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_205"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_206",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_206",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_206",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_206"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_207",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_207",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_207",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_207"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_208",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_208",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_208",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_208"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_209",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_209",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_209",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_209"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_21",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_21",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_21",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_210",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_210",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_210",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_210"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_211",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_211",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_211",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_211"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_212",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_212",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_212",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_212"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_213",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_213",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_213",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_213"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_214",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_214",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_214",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_214"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_215",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_215",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_215",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_215"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_216",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_216",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_216",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_216"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_217",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_217",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_217",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_217"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_218",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_218",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_218",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_218"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_219",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_219",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_219",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_219"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_22",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_22",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_22",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_220",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_220",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_220",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_220"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_221",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_221",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_221",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_221"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_222",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_222",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_222",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_222"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_223",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_223",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_223",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_223"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_224",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_224",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_224",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_225",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_225",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_225",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_225"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_226",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_226",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_226",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_226"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_227",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_227",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_227",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_227"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_228",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_228",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_228",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_228"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_229",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_229",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_229",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_229"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_23",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_23",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_23",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_230",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_230",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_230",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_230"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_231",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_231",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_231",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_231"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_232",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_232",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_232",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_232"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_233",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_233",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_233",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_233"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_234",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_234",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_234",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_234"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_235",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_235",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_235",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_235"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_236",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_236",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_236",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_236"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_237",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_237",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_237",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_237"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_238",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_238",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_238",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_238"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_239",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_239",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_239",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_239"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_24",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_24",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_24",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_240",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_240",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_240",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_240"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_241",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_241",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_241",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_241"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_242",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_242",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_242",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_242"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_243",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_243",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_243",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_243"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_244",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_244",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_244",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_244"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_245",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_245",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_245",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_245"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_246",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_246",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_246",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_246"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_247",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_247",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_247",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_247"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_248",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_248",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_248",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_248"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_249",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_249",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_249",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_249"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_25",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_25",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_25",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_250",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_250",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_250",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_250"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_251",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_251",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_251",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_251"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_252",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_252",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_252",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_252"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_253",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_253",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_253",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_253"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_254",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_254",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_254",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_254"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_255",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_255",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_255",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_255"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_26",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_26",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_26",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_26"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_27",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_27",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_27",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_27"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_28",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_28",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_28",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_28"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_29",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_29",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_29",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_29"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_3",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_3",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_30",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_30",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_30",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_31",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_31",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_31",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_31"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_32",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_32",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_32",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_33",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_33",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_33",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_33"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_34",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_34",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_34",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_34"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_35",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_35",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_35",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_35"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_36",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_36",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_36",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_36"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_37",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_37",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_37",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_37"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_38",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_38",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_38",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_38"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_39",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_39",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_39",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_39"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_4",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_4",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_4",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_40",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_40",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_40",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_41",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_41",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_41",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_41"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_42",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_42",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_42",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_42"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_43",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_43",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_43",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_43"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_44",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_44",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_44",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_44"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_45",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_45",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_45",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_46",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_46",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_46",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_46"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_47",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_47",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_47",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_47"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_48",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_48",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_48",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_49",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_49",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_49",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_49"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_5",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_5",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_5",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_50",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_50",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_50",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_50"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_51",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_51",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_51",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_51"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_52",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_52",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_52",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_52"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_53",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_53",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_53",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_54",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_54",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_54",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_54"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_55",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_55",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_55",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_55"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_56",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_56",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_56",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_56"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_57",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_57",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_57",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_57"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_58",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_58",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_58",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_58"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_59",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_59",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_59",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_59"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_6",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_6",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_6",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_60",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_60",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_60",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_61",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_61",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_61",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_61"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_62",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_62",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_62",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_62"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_63",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_63",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_63",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_63"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_64",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_64",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_65",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_65",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_65",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_65"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_66",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_66",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_66",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_66"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_67",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_67",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_67",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_67"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_68",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_68",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_68",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_68"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_69",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_69",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_69",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_69"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_7",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_7",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_7",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_70",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_70",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_70",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_70"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_71",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_71",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_71",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_71"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_72",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_72",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_72",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_72"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_73",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_73",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_73",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_73"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_74",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_74",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_74",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_74"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_75",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_75",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_75",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_75"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_76",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_76",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_76",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_76"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_77",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_77",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_77",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_77"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_78",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_78",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_78",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_78"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_79",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_79",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_79",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_79"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_8",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_8",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_80",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_80",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_80",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_81",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_81",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_81",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_81"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_82",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_82",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_82",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_82"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_83",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_83",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_83",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_83"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_84",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_84",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_84",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_84"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_85",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_85",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_85",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_85"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_86",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_86",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_86",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_86"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_87",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_87",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_87",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_87"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_88",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_88",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_88",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_88"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_89",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_89",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_89",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_89"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_9",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_9",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_9",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_90",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_90",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_90",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_90"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_91",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_91",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_91",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_91"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_92",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_92",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_92",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_92"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_93",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_93",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_93",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_93"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_94",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_94",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_94",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_94"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_95",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_95",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_95",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_95"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_96",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_96",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_96",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_96"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_97",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_97",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_97",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_97"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_98",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_98",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_98",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_98"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_99",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_99",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_99",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_99"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_black",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_black",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_black",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_blue",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_blue",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_blue_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_blue_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_blue_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_blue_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_cyan",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_cyan",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_cyan_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_cyan_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_cyan_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_cyan_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_default",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_default",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_default",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_green",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_green",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_green_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_green_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_green_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_green_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_grey",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_grey",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_grey",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_magenta",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_magenta",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_magenta_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_magenta_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_magenta_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_magenta_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_red",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_red",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_red",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_red_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_red_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_red_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_red_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_white",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_white",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_white_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_white_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_white_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_white_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_yellow",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_yellow",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_b_yellow_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_b_yellow_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_b_yellow_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_b_yellow_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_0",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_0",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_0",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_1",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_1",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_10",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_10",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_10",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_100",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_100",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_100",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_100"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_101",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_101",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_101",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_101"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_102",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_102",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_102",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_102"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_103",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_103",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_103",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_103"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_104",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_104",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_104",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_104"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_105",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_105",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_105",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_105"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_106",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_106",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_106",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_106"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_107",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_107",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_107",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_107"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_108",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_108",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_108",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_108"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_109",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_109",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_109",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_109"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_11",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_11",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_11",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_110",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_110",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_110",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_110"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_111",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_111",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_111",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_111"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_112",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_112",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_112",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_112"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_113",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_113",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_113",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_113"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_114",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_114",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_114",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_114"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_115",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_115",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_115",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_115"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_116",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_116",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_116",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_116"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_117",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_117",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_117",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_117"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_118",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_118",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_118",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_118"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_119",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_119",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_119",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_119"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_12",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_12",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_12",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_120",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_120",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_120",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_120"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_121",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_121",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_121",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_121"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_122",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_122",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_122",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_122"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_123",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_123",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_123",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_123"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_124",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_124",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_124",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_124"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_125",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_125",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_125",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_125"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_126",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_126",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_126",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_126"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_127",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_127",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_127",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_127"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_128",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_128",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_128",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_129",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_129",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_129",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_129"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_13",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_13",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_13",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_130",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_130",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_130",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_130"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_131",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_131",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_131",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_131"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_132",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_132",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_132",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_132"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_133",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_133",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_133",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_133"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_134",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_134",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_134",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_134"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_135",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_135",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_135",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_135"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_136",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_136",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_136",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_136"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_137",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_137",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_137",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_137"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_138",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_138",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_138",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_138"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_139",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_139",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_139",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_139"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_14",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_14",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_14",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_140",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_140",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_140",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_140"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_141",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_141",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_141",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_141"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_142",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_142",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_142",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_142"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_143",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_143",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_143",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_143"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_144",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_144",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_144",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_144"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_145",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_145",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_145",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_145"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_146",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_146",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_146",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_146"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_147",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_147",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_147",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_147"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_148",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_148",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_148",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_148"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_149",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_149",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_149",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_149"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_15",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_15",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_15",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_150",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_150",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_150",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_150"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_151",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_151",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_151",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_151"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_152",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_152",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_152",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_152"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_153",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_153",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_153",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_153"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_154",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_154",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_154",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_154"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_155",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_155",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_155",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_155"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_156",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_156",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_156",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_156"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_157",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_157",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_157",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_157"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_158",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_158",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_158",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_158"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_159",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_159",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_159",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_159"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_16",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_16",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_160",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_160",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_160",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_161",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_161",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_161",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_161"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_162",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_162",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_162",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_162"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_163",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_163",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_163",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_163"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_164",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_164",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_164",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_164"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_165",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_165",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_165",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_165"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_166",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_166",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_166",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_166"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_167",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_167",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_167",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_167"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_168",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_168",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_168",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_168"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_169",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_169",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_169",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_169"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_17",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_17",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_17",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_170",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_170",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_170",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_170"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_171",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_171",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_171",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_171"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_172",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_172",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_172",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_172"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_173",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_173",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_173",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_173"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_174",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_174",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_174",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_174"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_175",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_175",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_175",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_175"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_176",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_176",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_176",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_176"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_177",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_177",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_177",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_177"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_178",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_178",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_178",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_178"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_179",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_179",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_179",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_179"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_18",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_18",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_18",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_180",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_180",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_180",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_180"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_181",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_181",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_181",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_181"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_182",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_182",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_182",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_182"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_183",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_183",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_183",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_183"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_184",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_184",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_184",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_184"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_185",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_185",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_185",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_185"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_186",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_186",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_186",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_186"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_187",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_187",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_187",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_187"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_188",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_188",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_188",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_188"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_189",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_189",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_189",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_189"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_19",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_19",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_19",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_190",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_190",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_190",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_190"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_191",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_191",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_191",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_191"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_192",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_192",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_192",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_193",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_193",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_193",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_193"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_194",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_194",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_194",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_194"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_195",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_195",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_195",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_195"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_196",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_196",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_196",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_196"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_197",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_197",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_197",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_197"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_198",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_198",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_198",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_198"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_199",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_199",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_199",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_199"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_2",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_2",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_20",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_20",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_20",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_200",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_200",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_200",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_200"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_201",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_201",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_201",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_201"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_202",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_202",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_202",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_202"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_203",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_203",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_203",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_203"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_204",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_204",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_204",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_204"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_205",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_205",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_205",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_205"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_206",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_206",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_206",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_206"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_207",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_207",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_207",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_207"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_208",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_208",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_208",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_208"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_209",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_209",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_209",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_209"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_21",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_21",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_21",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_210",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_210",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_210",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_210"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_211",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_211",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_211",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_211"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_212",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_212",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_212",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_212"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_213",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_213",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_213",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_213"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_214",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_214",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_214",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_214"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_215",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_215",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_215",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_215"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_216",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_216",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_216",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_216"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_217",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_217",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_217",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_217"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_218",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_218",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_218",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_218"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_219",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_219",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_219",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_219"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_22",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_22",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_22",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_220",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_220",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_220",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_220"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_221",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_221",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_221",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_221"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_222",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_222",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_222",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_222"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_223",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_223",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_223",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_223"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_224",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_224",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_224",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_225",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_225",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_225",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_225"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_226",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_226",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_226",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_226"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_227",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_227",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_227",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_227"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_228",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_228",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_228",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_228"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_229",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_229",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_229",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_229"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_23",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_23",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_23",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_230",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_230",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_230",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_230"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_231",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_231",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_231",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_231"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_232",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_232",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_232",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_232"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_233",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_233",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_233",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_233"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_234",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_234",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_234",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_234"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_235",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_235",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_235",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_235"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_236",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_236",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_236",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_236"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_237",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_237",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_237",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_237"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_238",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_238",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_238",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_238"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_239",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_239",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_239",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_239"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_24",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_24",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_24",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_240",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_240",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_240",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_240"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_241",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_241",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_241",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_241"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_242",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_242",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_242",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_242"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_243",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_243",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_243",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_243"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_244",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_244",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_244",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_244"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_245",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_245",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_245",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_245"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_246",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_246",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_246",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_246"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_247",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_247",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_247",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_247"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_248",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_248",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_248",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_248"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_249",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_249",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_249",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_249"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_25",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_25",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_25",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_250",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_250",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_250",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_250"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_251",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_251",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_251",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_251"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_252",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_252",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_252",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_252"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_253",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_253",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_253",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_253"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_254",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_254",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_254",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_254"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_255",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_255",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_255",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_255"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_26",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_26",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_26",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_26"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_27",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_27",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_27",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_27"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_28",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_28",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_28",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_28"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_29",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_29",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_29",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_29"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_3",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_3",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_3",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_30",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_30",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_30",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_31",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_31",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_31",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_31"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_32",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_32",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_32",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_33",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_33",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_33",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_33"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_34",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_34",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_34",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_34"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_35",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_35",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_35",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_35"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_36",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_36",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_36",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_36"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_37",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_37",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_37",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_37"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_38",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_38",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_38",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_38"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_39",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_39",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_39",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_39"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_4",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_4",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_4",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_40",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_40",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_40",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_41",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_41",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_41",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_41"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_42",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_42",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_42",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_42"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_43",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_43",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_43",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_43"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_44",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_44",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_44",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_44"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_45",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_45",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_45",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_46",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_46",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_46",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_46"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_47",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_47",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_47",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_47"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_48",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_48",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_48",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_49",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_49",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_49",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_49"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_5",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_5",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_5",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_50",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_50",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_50",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_50"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_51",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_51",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_51",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_51"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_52",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_52",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_52",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_52"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_53",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_53",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_53",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_54",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_54",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_54",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_54"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_55",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_55",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_55",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_55"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_56",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_56",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_56",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_56"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_57",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_57",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_57",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_57"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_58",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_58",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_58",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_58"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_59",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_59",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_59",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_59"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_6",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_6",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_6",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_60",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_60",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_60",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_61",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_61",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_61",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_61"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_62",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_62",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_62",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_62"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_63",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_63",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_63",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_63"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_64",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_64",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_65",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_65",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_65",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_65"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_66",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_66",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_66",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_66"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_67",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_67",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_67",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_67"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_68",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_68",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_68",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_68"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_69",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_69",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_69",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_69"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_7",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_7",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_7",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_70",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_70",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_70",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_70"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_71",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_71",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_71",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_71"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_72",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_72",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_72",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_72"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_73",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_73",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_73",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_73"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_74",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_74",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_74",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_74"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_75",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_75",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_75",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_75"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_76",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_76",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_76",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_76"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_77",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_77",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_77",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_77"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_78",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_78",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_78",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_78"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_79",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_79",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_79",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_79"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_8",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_8",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_80",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_80",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_80",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_81",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_81",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_81",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_81"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_82",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_82",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_82",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_82"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_83",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_83",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_83",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_83"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_84",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_84",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_84",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_84"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_85",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_85",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_85",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_85"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_86",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_86",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_86",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_86"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_87",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_87",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_87",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_87"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_88",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_88",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_88",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_88"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_89",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_89",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_89",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_89"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_9",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_9",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_9",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_90",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_90",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_90",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_90"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_91",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_91",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_91",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_91"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_92",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_92",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_92",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_92"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_93",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_93",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_93",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_93"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_94",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_94",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_94",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_94"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_95",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_95",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_95",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_95"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_96",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_96",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_96",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_96"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_97",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_97",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_97",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_97"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_98",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_98",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_98",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_98"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_99",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_99",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_99",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_99"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_black",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_black",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_black",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_blue",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_blue",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_blue_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_blue_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_blue_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_blue_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_cyan",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_cyan",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_cyan_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_cyan_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_cyan_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_cyan_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_default",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_default",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_default",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_green",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_green",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_green_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_green_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_green_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_green_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_grey",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_grey",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_grey",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_magenta",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_magenta",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_magenta_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_magenta_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_magenta_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_magenta_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_red",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_red",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_red",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_red_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_red_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_red_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_red_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_white",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_white",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_white_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_white_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_white_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_white_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_yellow",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_yellow",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c256_f_yellow_bright",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c256_f_yellow_bright",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c256_f_yellow_bright",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c256_f_yellow_bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_b_black",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_b_black",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_b_black",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_b_blue",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_b_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_b_blue",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_b_cyan",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_b_cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_b_cyan",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_b_default",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_b_default",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_b_default",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_b_green",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_b_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_b_green",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_b_magenta",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_b_magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_b_magenta",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_b_red",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_b_red",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_b_red",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_b_white",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_b_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_b_white",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_b_yellow",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_b_yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_b_yellow",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_b_yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_f_black",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_f_black",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_f_black",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_f_blue",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_f_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_f_blue",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_f_cyan",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_f_cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_f_cyan",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_f_default",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_f_default",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_f_default",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_f_green",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_f_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_f_green",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_f_magenta",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_f_magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_f_magenta",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_f_red",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_f_red",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_f_red",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_f_white",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_f_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_f_white",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "c8_f_yellow",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#c8_f_yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "c8_f_yellow",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:c8_f_yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "common256",
          "package": "rainbow",
          "signature": "StyleCommon",
          "source": "src/System-Console-Rainbow.html#Style256",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "common256",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:common256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "common8",
          "package": "rainbow",
          "signature": "StyleCommon",
          "source": "src/System-Console-Rainbow.html#Style8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "common8",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:common8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "f_black",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#f_black",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "f_black",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "f_blue",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#f_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "f_blue",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "f_cyan",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#f_cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "f_cyan",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "f_default",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#f_default",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "f_default",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "f_green",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#f_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "f_green",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "f_magenta",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#f_magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "f_magenta",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "f_red",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#f_red",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "f_red",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "f_white",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#f_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "f_white",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "f_yellow",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#f_yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "f_yellow",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:f_yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "flash",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#flash",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "flash",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:flash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "flash256",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#flash256",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "flash256",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:flash256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "flash256off",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#flash256off",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "flash256off",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:flash256off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "flash8",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#flash8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "flash8",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:flash8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "flash8off",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#flash8off",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "flash8off",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:flash8off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "flashOff",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#flashOff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "flashOff",
          "package": "rainbow",
          "partial": "Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:flashOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "foreground256",
          "package": "rainbow",
          "signature": "Foreground256",
          "source": "src/System-Console-Rainbow.html#Style256",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "foreground256",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:foreground256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "foreground8",
          "package": "rainbow",
          "signature": "Foreground8",
          "source": "src/System-Console-Rainbow.html#Style8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "foreground8",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:foreground8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "fromString",
          "package": "rainbow",
          "signature": "String -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "fromString",
          "normalized": "String-\u003ea",
          "package": "rainbow",
          "partial": "String",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint one chunk at a time, to a handle\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "hPutChunk",
          "package": "rainbow",
          "signature": "Handle -\u003e Chunk -\u003e IO ()",
          "source": "src/System-Console-Rainbow.html#hPutChunk",
          "type": "function"
        },
        "index": {
          "description": "Print one chunk at time to handle",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "hPutChunk",
          "normalized": "Handle-\u003eChunk-\u003eIO()",
          "package": "rainbow",
          "partial": "Put Chunk",
          "signature": "Handle-\u003eChunk-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:hPutChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint one chunk at a time, to a handle, append a newline\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "hPutChunkLn",
          "package": "rainbow",
          "signature": "Handle -\u003e Chunk -\u003e IO ()",
          "source": "src/System-Console-Rainbow.html#hPutChunkLn",
          "type": "function"
        },
        "index": {
          "description": "Print one chunk at time to handle append newline",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "hPutChunkLn",
          "normalized": "Handle-\u003eChunk-\u003eIO()",
          "package": "rainbow",
          "partial": "Put Chunk Ln",
          "signature": "Handle-\u003eChunk-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:hPutChunkLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a list of chunks to the given handle for printing. Sets up\n the terminal (this only needs to be done once.) Lazily processes\n the list of Chunk. See \u003ccode\u003e\u003ca\u003eputChunks\u003c/a\u003e\u003c/code\u003e for notes on how many colors\n are used.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "hPutChunks",
          "package": "rainbow",
          "signature": "Handle -\u003e Term -\u003e [Chunk] -\u003e IO ()",
          "source": "src/System-Console-Rainbow.html#hPutChunks",
          "type": "function"
        },
        "index": {
          "description": "Sends list of chunks to the given handle for printing Sets up the terminal this only needs to be done once Lazily processes the list of Chunk See putChunks for notes on how many colors are used",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "hPutChunks",
          "normalized": "Handle-\u003eTerm-\u003e[Chunk]-\u003eIO()",
          "package": "rainbow",
          "partial": "Put Chunks",
          "signature": "Handle-\u003eTerm-\u003e[Chunk]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:hPutChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "inverse",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#inverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "inverse",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "inverse256",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#inverse256",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "inverse256",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:inverse256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "inverse256off",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#inverse256off",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "inverse256off",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:inverse256off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "inverse8",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#inverse8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "inverse8",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:inverse8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "inverse8off",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#inverse8off",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "inverse8off",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:inverse8off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "inverseOff",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#inverseOff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "inverseOff",
          "package": "rainbow",
          "partial": "Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:inverseOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "mappend",
          "package": "rainbow",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "An associative operation",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "mappend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "rainbow",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:mappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "mconcat",
          "package": "rainbow",
          "signature": "[a] -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "mconcat",
          "normalized": "[a]-\u003ea",
          "package": "rainbow",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:mconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "mempty",
          "package": "rainbow",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "description": "Identity of mappend",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "mempty",
          "package": "rainbow",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:mempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint one chunk at a time, to standard output\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "putChunk",
          "package": "rainbow",
          "signature": "Chunk -\u003e IO ()",
          "source": "src/System-Console-Rainbow.html#putChunk",
          "type": "function"
        },
        "index": {
          "description": "Print one chunk at time to standard output",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "putChunk",
          "normalized": "Chunk-\u003eIO()",
          "package": "rainbow",
          "partial": "Chunk",
          "signature": "Chunk-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:putChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint one chunk at a time, to standard output, append a newline\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "putChunkLn",
          "package": "rainbow",
          "signature": "Chunk -\u003e IO ()",
          "source": "src/System-Console-Rainbow.html#putChunkLn",
          "type": "function"
        },
        "index": {
          "description": "Print one chunk at time to standard output append newline",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "putChunkLn",
          "normalized": "Chunk-\u003eIO()",
          "package": "rainbow",
          "partial": "Chunk Ln",
          "signature": "Chunk-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:putChunkLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a list of chunks to standard output for printing. Sets up\n the terminal (this only needs to be done once.) Lazily processes\n the list of Chunk.\n\u003c/p\u003e\u003cp\u003eWhich colors are used depends upon the \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e. If it is \u003ccode\u003e\u003ca\u003eDumb\u003c/a\u003e\u003c/code\u003e,\n then no colors are used on output. If the \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e is specified with\n \u003ccode\u003e\u003ca\u003eTermName\u003c/a\u003e\u003c/code\u003e, the UNIX terminfo library is used to determine how many\n colors the terminal supports. If it supports at least 256 colors,\n then 256 colors are used. If it supports at least 8 colors but less\n than 256 colors, then 256 colors are used. Otherwise, no colors are\n used. A runtime error will occur if the \u003ccode\u003e\u003ca\u003eTermName\u003c/a\u003e\u003c/code\u003e is not found in\n the system terminal database.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "putChunks",
          "package": "rainbow",
          "signature": "Term -\u003e [Chunk] -\u003e IO ()",
          "source": "src/System-Console-Rainbow.html#putChunks",
          "type": "function"
        },
        "index": {
          "description": "Sends list of chunks to standard output for printing Sets up the terminal this only needs to be done once Lazily processes the list of Chunk Which colors are used depends upon the Term If it is Dumb then no colors are used on output If the Term is specified with TermName the UNIX terminfo library is used to determine how many colors the terminal supports If it supports at least colors then colors are used If it supports at least colors but less than colors then colors are used Otherwise no colors are used runtime error will occur if the TermName is not found in the system terminal database",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "putChunks",
          "normalized": "Term-\u003e[Chunk]-\u003eIO()",
          "package": "rainbow",
          "partial": "Chunks",
          "signature": "Term-\u003e[Chunk]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:putChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "scBold",
          "package": "rainbow",
          "signature": "Last Bool",
          "source": "src/System-Console-Rainbow.html#StyleCommon",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "scBold",
          "package": "rainbow",
          "partial": "Bold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:scBold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "scFlash",
          "package": "rainbow",
          "signature": "Last Bool",
          "source": "src/System-Console-Rainbow.html#StyleCommon",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "scFlash",
          "package": "rainbow",
          "partial": "Flash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:scFlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "scInverse",
          "package": "rainbow",
          "signature": "Last Bool",
          "source": "src/System-Console-Rainbow.html#StyleCommon",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "scInverse",
          "package": "rainbow",
          "partial": "Inverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:scInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "scUnderline",
          "package": "rainbow",
          "signature": "Last Bool",
          "source": "src/System-Console-Rainbow.html#StyleCommon",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "scUnderline",
          "package": "rainbow",
          "partial": "Underline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:scUnderline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the terminal definition from the environment. If the first\n argument is True, the terminal is always obtained from the\n environment. If it is False, the terminal is only obtained from the\n environment if the given handle is not a terminal; otherwise, Dumb\n is returned.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "smartTermFromEnv",
          "package": "rainbow",
          "signature": "Bool-\u003e Handle-\u003e IO Term",
          "type": "function"
        },
        "index": {
          "description": "Gets the terminal definition from the environment If the first argument is True the terminal is always obtained from the environment If it is False the terminal is only obtained from the environment if the given handle is not terminal otherwise Dumb is returned",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "smartTermFromEnv",
          "normalized": "Bool-\u003eHandle-\u003eIO Term",
          "package": "rainbow",
          "partial": "Term From Env",
          "signature": "Bool-\u003eHandle-\u003eIO Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:smartTermFromEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "style256",
          "package": "rainbow",
          "signature": "Style256",
          "source": "src/System-Console-Rainbow.html#TextSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "style256",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:style256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "style8",
          "package": "rainbow",
          "signature": "Style8",
          "source": "src/System-Console-Rainbow.html#TextSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "style8",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:style8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the terminal definition from the environment. If the\n environment does not have a TERM veriable, use \u003ccode\u003e\u003ca\u003eDumb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Rainbow",
          "name": "termFromEnv",
          "package": "rainbow",
          "signature": "IO Term",
          "source": "src/System-Console-Rainbow.html#termFromEnv",
          "type": "function"
        },
        "index": {
          "description": "Gets the terminal definition from the environment If the environment does not have TERM veriable use Dumb",
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "termFromEnv",
          "package": "rainbow",
          "partial": "From Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:termFromEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "text",
          "package": "rainbow",
          "signature": "Text",
          "source": "src/System-Console-Rainbow.html#Chunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "text",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "textSpec",
          "package": "rainbow",
          "signature": "TextSpec",
          "source": "src/System-Console-Rainbow.html#Chunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "textSpec",
          "package": "rainbow",
          "partial": "Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:textSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "underline",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#underline",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "underline",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:underline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "underline256",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#underline256",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "underline256",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:underline256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "underline256off",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#underline256off",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "underline256off",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:underline256off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "underline8",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#underline8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "underline8",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:underline8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "underline8off",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#underline8off",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "underline8off",
          "package": "rainbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:underline8off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Rainbow",
          "name": "underlineOff",
          "package": "rainbow",
          "signature": "Chunk",
          "source": "src/System-Console-Rainbow.html#underlineOff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Rainbow",
          "module": "System.Console.Rainbow",
          "name": "underlineOff",
          "package": "rainbow",
          "partial": "Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rainbow/docs/System-Console-Rainbow.html#v:underlineOff"
      }
    }
  ]
]