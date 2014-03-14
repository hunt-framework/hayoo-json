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
        "word": "FunGEn"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the main module of FunGEN (Functional Game Engine), which re-exports the rest.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "Fungen",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen.html",
          "type": "module"
        },
        "index": {
          "description": "This is the main module of FunGEN Functional Game Engine which re-exports the rest",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Fungen",
          "package": "FunGEn",
          "partial": "Fungen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewidth, height and data of bitmap\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "AwbfBitmap",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Types.html#AwbfBitmap",
          "type": "type"
        },
        "index": {
          "description": "width height and data of bitmap",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "AwbfBitmap",
          "package": "FunGEn",
          "partial": "Awbf Bitmap",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:AwbfBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bitmap fonts available in GLUT. The exact bitmap to be used is\n defined by the standard X glyph bitmaps for the X font with the given name.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "BitmapFont",
          "package": "FunGEn",
          "type": "data"
        },
        "index": {
          "description": "The bitmap fonts available in GLUT The exact bitmap to be used is defined by the standard glyph bitmaps for the font with the given name",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "BitmapFont",
          "package": "FunGEn",
          "partial": "Bitmap Font",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:BitmapFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecolor in RGB format\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "ColorList3",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Types.html#ColorList3",
          "type": "type"
        },
        "index": {
          "description": "color in RGB format",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "ColorList3",
          "package": "FunGEn",
          "partial": "Color List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:ColorList3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "FilePictureList",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Loader.html#FilePictureList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "FilePictureList",
          "package": "FunGEn",
          "partial": "File Picture List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:FilePictureList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "FillMode",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Objects.html#FillMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "FillMode",
          "package": "FunGEn",
          "partial": "Fill Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:FillMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA game has the type \u003ccode\u003eGame t s u v\u003c/code\u003e, where \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e t is the type of the game special attributes\n\u003c/li\u003e\u003cli\u003e s is the type of the object special attributes\n\u003c/li\u003e\u003cli\u003e u is the type of the game levels (state)\n\u003c/li\u003e\u003cli\u003e v is the type of the map tile special attribute, in case we use a Tile Map as the background of our game\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor a mnemonic, uh...\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e t - \u003cem\u003eT\u003c/em\u003eop-level game attribute type,\n\u003c/li\u003e\u003cli\u003e s - \u003cem\u003eS\u003c/em\u003eprite object attribute type,\n\u003c/li\u003e\u003cli\u003e u - \u003cem\u003eU\u003c/em\u003epdating game state type,\n\u003c/li\u003e\u003cli\u003e v - \u003cem\u003eV\u003c/em\u003eicinity (map tile) attribute type.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eInternally, a Game consists of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003egameMap       :: IORef (GameMap v)         -- a map (background)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003egameState     :: IORef u                   -- initial game state\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003egameFlags     :: IORef GameFlags           -- initial game flags\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eobjManagers   :: IORef [(ObjectManager s)] -- some object managers\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003etextList      :: IORef [Text]              -- some texts\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003equadricObj    :: QuadricPrimitive          -- a quadric thing\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ewindowConfig  :: IORef WindowConfig        -- a config for the main window\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003egameAttribute :: IORef t                   -- a game attribute\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003epictureList   :: IORef [TextureObject]     -- some pictures\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003efpsInfo       :: IORef (Int,Int,Float)     -- only for debugging\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "Game",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Game.html#Game",
          "type": "data"
        },
        "index": {
          "description": "game has the type Game where is the type of the game special attributes is the type of the object special attributes is the type of the game levels state is the type of the map tile special attribute in case we use Tile Map as the background of our game For mnemonic uh op-level game attribute type prite object attribute type pdating game state type icinity map tile attribute type Internally Game consists of gameMap IORef GameMap map background gameState IORef initial game state gameFlags IORef GameFlags initial game flags objManagers IORef ObjectManager some object managers textList IORef Text some texts quadricObj QuadricPrimitive quadric thing windowConfig IORef WindowConfig config for the main window gameAttribute IORef game attribute pictureList IORef TextureObject some pictures fpsInfo IORef Int Int Float only for debugging",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Game",
          "package": "FunGEn",
          "partial": "Game",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:Game"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "GameMap",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Map.html#GameMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "GameMap",
          "package": "FunGEn",
          "partial": "Game Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:GameMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "GameObject",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Objects.html#GameObject",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "GameObject",
          "package": "FunGEn",
          "partial": "Game Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:GameObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIOGame is the monad in which game actions run. An IOGame action\n takes a Game (with type parameters \u003ccode\u003et s u v\u003c/code\u003e), performs some IO,\n and returns an updated Game along with a result value (\u003ccode\u003ea\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003enewtype IOGame t s u v a = IOG (Game  t s u v -\u003e IO (Game t s u v,a))\u003c/pre\u003e\u003cp\u003eThe name IOGame was chosen to remind that each action deals with a\n Game, but an IO operation can also be performed between game\n actions (such as the reading of a file or printing something in the\n prompt).\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "IOGame",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Game.html#IOGame",
          "type": "data"
        },
        "index": {
          "description": "IOGame is the monad in which game actions run An IOGame action takes Game with type parameters performs some IO and returns an updated Game along with result value newtype IOGame IOG Game IO Game The name IOGame was chosen to remind that each action deals with Game but an IO operation can also be performed between game actions such as the reading of file or printing something in the prompt",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "IOGame",
          "package": "FunGEn",
          "partial": "IOGame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:IOGame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from an input event to an input handler.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "InputBinding",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Input.html#InputBinding",
          "type": "type"
        },
        "index": {
          "description": "mapping from an input event to an input handler",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "InputBinding",
          "package": "FunGEn",
          "partial": "Input Binding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:InputBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA FunGEn input handler is like an IOGame (game action) that takes\n two extra arguments: the current keyboard modifiers state, and the\n current mouse position. (For a StillDown event, these will be the\n original state and position from the Press event.)\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "InputHandler",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Input.html#InputHandler",
          "type": "type"
        },
        "index": {
          "description": "FunGEn input handler is like an IOGame game action that takes two extra arguments the current keyboard modifiers state and the current mouse position For StillDown event these will be the original state and position from the Press event",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "InputHandler",
          "package": "FunGEn",
          "partial": "Input Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:InputHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einvisible colors (in RGB) of bitmap\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "InvList",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Types.html#InvList",
          "type": "type"
        },
        "index": {
          "description": "invisible colors in RGB of bitmap",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "InvList",
          "package": "FunGEn",
          "partial": "Inv List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:InvList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalized view of keys\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "Key",
          "package": "FunGEn",
          "type": "data"
        },
        "index": {
          "description": "generalized view of keys",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Key",
          "package": "FunGEn",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyEvent",
          "package": "FunGEn",
          "source": "src/Graphics-UI-GLUT-Input.html#KeyEvent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyEvent",
          "package": "FunGEn",
          "partial": "Key Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:KeyEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state of the keyboard modifiers\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "Modifiers",
          "package": "FunGEn",
          "type": "data"
        },
        "index": {
          "description": "The state of the keyboard modifiers",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Modifiers",
          "package": "FunGEn",
          "partial": "Modifiers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:Modifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMouse buttons, including a wheel\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "MouseButton",
          "package": "FunGEn",
          "type": "data"
        },
        "index": {
          "description": "Mouse buttons including wheel",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "MouseButton",
          "package": "FunGEn",
          "partial": "Mouse Button",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:MouseButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "ObjectManager",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Objects.html#ObjectManager",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "ObjectManager",
          "package": "FunGEn",
          "partial": "Object Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:ObjectManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "ObjectPicture",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Objects.html#ObjectPicture",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "ObjectPicture",
          "package": "FunGEn",
          "partial": "Object Picture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:ObjectPicture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea bidimensional point in space\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "Point2D",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Types.html#Point2D",
          "type": "type"
        },
        "index": {
          "description": "bidimensional point in space",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Point2D",
          "package": "FunGEn",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:Point2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2-dimensional position, measured in pixels.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "Position",
          "package": "FunGEn",
          "type": "data"
        },
        "index": {
          "description": "dimensional position measured in pixels",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Position",
          "package": "FunGEn",
          "partial": "Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "Primitive",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Objects.html#Primitive",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Primitive",
          "package": "FunGEn",
          "partial": "Primitive",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:Primitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by \u003ccode\u003e\u003ca\u003efunInit\u003c/a\u003e\u003c/code\u003e to configure the main loop's timing strategy.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "RefreshType",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Timer.html#RefreshType",
          "type": "data"
        },
        "index": {
          "description": "Used by funInit to configure the main loop timing strategy",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "RefreshType",
          "package": "FunGEn",
          "partial": "Refresh Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:RefreshType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial keys\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "SpecialKey",
          "package": "FunGEn",
          "type": "data"
        },
        "index": {
          "description": "Special keys",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "SpecialKey",
          "package": "FunGEn",
          "partial": "Special Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:SpecialKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString to be printed, font, screen position, color RGB.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "Text",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Text.html#Text",
          "type": "type"
        },
        "index": {
          "description": "String to be printed font screen position color RGB",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Text",
          "package": "FunGEn",
          "partial": "Text",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "Tile",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Map.html#Tile",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Tile",
          "package": "FunGEn",
          "partial": "Tile",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:Tile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "TileMatrix",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Map.html#TileMatrix",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "TileMatrix",
          "package": "FunGEn",
          "partial": "Tile Matrix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:TileMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eposition, size and name of the window\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "WindowConfig",
          "package": "FunGEn",
          "source": "src/Graphics-UI-Fungen-Types.html#WindowConfig",
          "type": "type"
        },
        "index": {
          "description": "position size and name of the window",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "WindowConfig",
          "package": "FunGEn",
          "partial": "Window Config",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#t:WindowConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "AdditionalButton",
          "package": "FunGEn",
          "signature": "AdditionalButton Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "AdditionalButton",
          "package": "FunGEn",
          "partial": "Additional Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:AdditionalButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "Basic",
          "package": "FunGEn",
          "signature": "Basic Primitive",
          "source": "src/Graphics-UI-Fungen-Objects.html#ObjectPicture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Basic",
          "package": "FunGEn",
          "partial": "Basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Basic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.UI.Fungen\",\"Graphics.UI.GLUT.Input\"]",
          "name": "Char",
          "package": "FunGEn",
          "signature": "Char Char",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Char\",\"http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#v:Char\"]"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Char",
          "package": "FunGEn",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "Circle",
          "package": "FunGEn",
          "signature": "Circle GLdouble GLfloat GLfloat GLfloat FillMode",
          "source": "src/Graphics-UI-Fungen-Objects.html#Primitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Circle",
          "package": "FunGEn",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "Filled",
          "package": "FunGEn",
          "signature": "Filled",
          "source": "src/Graphics-UI-Fungen-Objects.html#FillMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Filled",
          "package": "FunGEn",
          "partial": "Filled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Filled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed width font with every character fitting in an 8\n   by 13 pixel rectangle.\n   (\u003ccode\u003e-misc-fixed-medium-r-normal--13-120-75-75-C-80-iso8859-1\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "Fixed8By13",
          "package": "FunGEn",
          "signature": "Fixed8By13",
          "type": "function"
        },
        "index": {
          "description": "fixed width font with every character fitting in an by pixel rectangle misc-fixed-medium-r-normal--13-120-75-75-C-80-iso8859-1",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Fixed8By13",
          "package": "FunGEn",
          "partial": "Fixed By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Fixed8By13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed width font with every character fitting in an 9\n   by 15 pixel rectangle.\n   (\u003ccode\u003e-misc-fixed-medium-r-normal--15-140-75-75-C-90-iso8859-1\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "Fixed9By15",
          "package": "FunGEn",
          "signature": "Fixed9By15",
          "type": "function"
        },
        "index": {
          "description": "fixed width font with every character fitting in an by pixel rectangle misc-fixed-medium-r-normal--15-140-75-75-C-90-iso8859-1",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Fixed9By15",
          "package": "FunGEn",
          "partial": "Fixed By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Fixed9By15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 10-point proportional spaced Helvetica font.\n   (\u003ccode\u003e-adobe-helvetica-medium-r-normal--10-100-75-75-p-56-iso8859-1\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "Helvetica10",
          "package": "FunGEn",
          "signature": "Helvetica10",
          "type": "function"
        },
        "index": {
          "description": "point proportional spaced Helvetica font adobe-helvetica-medium-r-normal--10-100-75-75-p-56-iso8859-1",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Helvetica10",
          "package": "FunGEn",
          "partial": "Helvetica",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Helvetica10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 12-point proportional spaced Helvetica font.\n   (\u003ccode\u003e-adobe-helvetica-medium-r-normal--12-120-75-75-p-67-iso8859-1\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "Helvetica12",
          "package": "FunGEn",
          "signature": "Helvetica12",
          "type": "function"
        },
        "index": {
          "description": "point proportional spaced Helvetica font adobe-helvetica-medium-r-normal--12-120-75-75-p-67-iso8859-1",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Helvetica12",
          "package": "FunGEn",
          "partial": "Helvetica",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Helvetica12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 18-point proportional spaced Helvetica font.\n   (\u003ccode\u003e-adobe-helvetica-medium-r-normal--18-180-75-75-p-98-iso8859-1\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "Helvetica18",
          "package": "FunGEn",
          "signature": "Helvetica18",
          "type": "function"
        },
        "index": {
          "description": "point proportional spaced Helvetica font adobe-helvetica-medium-r-normal--18-180-75-75-p-98-iso8859-1",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Helvetica18",
          "package": "FunGEn",
          "partial": "Helvetica",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Helvetica18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "Idle",
          "package": "FunGEn",
          "signature": "Idle",
          "source": "src/Graphics-UI-Fungen-Timer.html#RefreshType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Idle",
          "package": "FunGEn",
          "partial": "Idle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Idle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyBegin",
          "package": "FunGEn",
          "signature": "KeyBegin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyBegin",
          "package": "FunGEn",
          "partial": "Key Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyDelete",
          "package": "FunGEn",
          "signature": "KeyDelete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyDelete",
          "package": "FunGEn",
          "partial": "Key Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyDown",
          "package": "FunGEn",
          "signature": "KeyDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyDown",
          "package": "FunGEn",
          "partial": "Key Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyEnd",
          "package": "FunGEn",
          "signature": "KeyEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyEnd",
          "package": "FunGEn",
          "partial": "Key End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyF1",
          "package": "FunGEn",
          "signature": "KeyF1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyF1",
          "package": "FunGEn",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyF1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyF10",
          "package": "FunGEn",
          "signature": "KeyF10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyF10",
          "package": "FunGEn",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyF10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyF11",
          "package": "FunGEn",
          "signature": "KeyF11",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyF11",
          "package": "FunGEn",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyF11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyF12",
          "package": "FunGEn",
          "signature": "KeyF12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyF12",
          "package": "FunGEn",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyF12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyF2",
          "package": "FunGEn",
          "signature": "KeyF2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyF2",
          "package": "FunGEn",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyF2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyF3",
          "package": "FunGEn",
          "signature": "KeyF3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyF3",
          "package": "FunGEn",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyF3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyF4",
          "package": "FunGEn",
          "signature": "KeyF4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyF4",
          "package": "FunGEn",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyF4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyF5",
          "package": "FunGEn",
          "signature": "KeyF5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyF5",
          "package": "FunGEn",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyF5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyF6",
          "package": "FunGEn",
          "signature": "KeyF6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyF6",
          "package": "FunGEn",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyF6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyF7",
          "package": "FunGEn",
          "signature": "KeyF7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyF7",
          "package": "FunGEn",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyF7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyF8",
          "package": "FunGEn",
          "signature": "KeyF8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyF8",
          "package": "FunGEn",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyF9",
          "package": "FunGEn",
          "signature": "KeyF9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyF9",
          "package": "FunGEn",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyF9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyHome",
          "package": "FunGEn",
          "signature": "KeyHome",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyHome",
          "package": "FunGEn",
          "partial": "Key Home",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyInsert",
          "package": "FunGEn",
          "signature": "KeyInsert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyInsert",
          "package": "FunGEn",
          "partial": "Key Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyLeft",
          "package": "FunGEn",
          "signature": "KeyLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyLeft",
          "package": "FunGEn",
          "partial": "Key Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyNumLock",
          "package": "FunGEn",
          "signature": "KeyNumLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyNumLock",
          "package": "FunGEn",
          "partial": "Key Num Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyNumLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyPageDown",
          "package": "FunGEn",
          "signature": "KeyPageDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyPageDown",
          "package": "FunGEn",
          "partial": "Key Page Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyPageDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyPageUp",
          "package": "FunGEn",
          "signature": "KeyPageUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyPageUp",
          "package": "FunGEn",
          "partial": "Key Page Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyPageUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyRight",
          "package": "FunGEn",
          "signature": "KeyRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyRight",
          "package": "FunGEn",
          "partial": "Key Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyUnknown",
          "package": "FunGEn",
          "signature": "KeyUnknown Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyUnknown",
          "package": "FunGEn",
          "partial": "Key Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "KeyUp",
          "package": "FunGEn",
          "signature": "KeyUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "KeyUp",
          "package": "FunGEn",
          "partial": "Key Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:KeyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "LeftButton",
          "package": "FunGEn",
          "signature": "LeftButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "LeftButton",
          "package": "FunGEn",
          "partial": "Left Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:LeftButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "MiddleButton",
          "package": "FunGEn",
          "signature": "MiddleButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "MiddleButton",
          "package": "FunGEn",
          "partial": "Middle Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:MiddleButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "Modifiers",
          "package": "FunGEn",
          "signature": "Modifiers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Modifiers",
          "package": "FunGEn",
          "partial": "Modifiers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Modifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.UI.Fungen\",\"Graphics.UI.GLUT.Input\"]",
          "name": "MouseButton",
          "package": "FunGEn",
          "signature": "MouseButton MouseButton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:MouseButton\",\"http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#v:MouseButton\"]"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "MouseButton",
          "package": "FunGEn",
          "partial": "Mouse Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:MouseButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "Polyg",
          "package": "FunGEn",
          "signature": "Polyg [Point2D] GLfloat GLfloat GLfloat FillMode",
          "source": "src/Graphics-UI-Fungen-Objects.html#Primitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Polyg",
          "normalized": "Polyg[Point D]GLfloat GLfloat GLfloat FillMode",
          "package": "FunGEn",
          "partial": "Polyg",
          "signature": "Polyg[Point D]GLfloat GLfloat GLfloat FillMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Polyg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "Position",
          "package": "FunGEn",
          "signature": "Position !GLint !GLint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Position",
          "package": "FunGEn",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.UI.Fungen\",\"Graphics.UI.GLUT.Input\"]",
          "name": "Press",
          "package": "FunGEn",
          "signature": "Press",
          "source": "src/Graphics-UI-GLUT-Input.html#KeyEvent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Press\",\"http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#v:Press\"]"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Press",
          "package": "FunGEn",
          "partial": "Press",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Press"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.UI.Fungen\",\"Graphics.UI.GLUT.Input\"]",
          "name": "Release",
          "package": "FunGEn",
          "signature": "Release",
          "source": "src/Graphics-UI-GLUT-Input.html#KeyEvent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Release\",\"http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#v:Release\"]"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Release",
          "package": "FunGEn",
          "partial": "Release",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "RightButton",
          "package": "FunGEn",
          "signature": "RightButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "RightButton",
          "package": "FunGEn",
          "partial": "Right Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:RightButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.UI.Fungen\",\"Graphics.UI.GLUT.Input\"]",
          "name": "SpecialKey",
          "package": "FunGEn",
          "signature": "SpecialKey SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:SpecialKey\",\"http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#v:SpecialKey\"]"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "SpecialKey",
          "package": "FunGEn",
          "partial": "Special Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:SpecialKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.UI.Fungen\",\"Graphics.UI.GLUT.Input\"]",
          "name": "StillDown",
          "package": "FunGEn",
          "signature": "StillDown",
          "source": "src/Graphics-UI-GLUT-Input.html#KeyEvent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:StillDown\",\"http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#v:StillDown\"]"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "StillDown",
          "package": "FunGEn",
          "partial": "Still Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:StillDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "Tex",
          "package": "FunGEn",
          "signature": "Tex (GLdouble, GLdouble) Int",
          "source": "src/Graphics-UI-Fungen-Objects.html#ObjectPicture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Tex",
          "normalized": "Tex(GLdouble,GLdouble)Int",
          "package": "FunGEn",
          "partial": "Tex",
          "signature": "Tex(GLdouble,GLdouble)Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Tex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "Timer",
          "package": "FunGEn",
          "signature": "Timer Int",
          "source": "src/Graphics-UI-Fungen-Timer.html#RefreshType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Timer",
          "package": "FunGEn",
          "partial": "Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 10-point proportional spaced Times Roman font.\n   (\u003ccode\u003e-adobe-times-medium-r-normal--10-100-75-75-p-54-iso8859-1\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "TimesRoman10",
          "package": "FunGEn",
          "signature": "TimesRoman10",
          "type": "function"
        },
        "index": {
          "description": "point proportional spaced Times Roman font adobe-times-medium-r-normal--10-100-75-75-p-54-iso8859-1",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "TimesRoman10",
          "package": "FunGEn",
          "partial": "Times Roman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:TimesRoman10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 24-point proportional spaced Times Roman font.\n   (\u003ccode\u003e-adobe-times-medium-r-normal--24-240-75-75-p-124-iso8859-1\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "TimesRoman24",
          "package": "FunGEn",
          "signature": "TimesRoman24",
          "type": "function"
        },
        "index": {
          "description": "point proportional spaced Times Roman font adobe-times-medium-r-normal--24-240-75-75-p-124-iso8859-1",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "TimesRoman24",
          "package": "FunGEn",
          "partial": "Times Roman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:TimesRoman24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "Unfilled",
          "package": "FunGEn",
          "signature": "Unfilled",
          "source": "src/Graphics-UI-Fungen-Objects.html#FillMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "Unfilled",
          "package": "FunGEn",
          "partial": "Unfilled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:Unfilled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "WheelDown",
          "package": "FunGEn",
          "signature": "WheelDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "WheelDown",
          "package": "FunGEn",
          "partial": "Wheel Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:WheelDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "WheelUp",
          "package": "FunGEn",
          "signature": "WheelUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "WheelUp",
          "package": "FunGEn",
          "partial": "Wheel Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:WheelUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eto be used when no invisibility must be added when loading a file\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "addNoInvisibility",
          "package": "FunGEn",
          "signature": "[FilePath] -\u003e [(FilePath, Maybe ColorList3)]",
          "source": "src/Graphics-UI-Fungen-Util.html#addNoInvisibility",
          "type": "function"
        },
        "index": {
          "description": "to be used when no invisibility must be added when loading file",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "addNoInvisibility",
          "normalized": "[FilePath]-\u003e[(FilePath,Maybe ColorList)]",
          "package": "FunGEn",
          "partial": "No Invisibility",
          "signature": "[FilePath]-\u003e[(FilePath,Maybe ColorList)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:addNoInvisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadds an object to a previously created group\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "addObjectsToGroup",
          "package": "FunGEn",
          "signature": "[GameObject s] -\u003e String -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#addObjectsToGroup",
          "type": "function"
        },
        "index": {
          "description": "adds an object to previously created group",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "addObjectsToGroup",
          "normalized": "[GameObject a]-\u003eString-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "Objects To Group",
          "signature": "[GameObject s]-\u003eString-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:addObjectsToGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "addObjectsToManager",
          "package": "FunGEn",
          "signature": "[GameObject t] -\u003e String -\u003e [ObjectManager t] -\u003e [ObjectManager t]",
          "source": "src/Graphics-UI-Fungen-Objects.html#addObjectsToManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "addObjectsToManager",
          "normalized": "[GameObject a]-\u003eString-\u003e[ObjectManager a]-\u003e[ObjectManager a]",
          "package": "FunGEn",
          "partial": "Objects To Manager",
          "signature": "[GameObject t]-\u003eString-\u003e[ObjectManager t]-\u003e[ObjectManager t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:addObjectsToManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadds an object to a new group\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "addObjectsToNewGroup",
          "package": "FunGEn",
          "signature": "[GameObject s] -\u003e String -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#addObjectsToNewGroup",
          "type": "function"
        },
        "index": {
          "description": "adds an object to new group",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "addObjectsToNewGroup",
          "normalized": "[GameObject a]-\u003eString-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "Objects To New Group",
          "signature": "[GameObject s]-\u003eString-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:addObjectsToNewGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "alt",
          "package": "FunGEn",
          "signature": "KeyState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "alt",
          "package": "FunGEn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "bindTexture",
          "package": "FunGEn",
          "signature": "TextureTarget -\u003e TextureObject -\u003e IO ()",
          "source": "src/Graphics-UI-Fungen-Util.html#bindTexture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "bindTexture",
          "normalized": "TextureTarget-\u003eTextureObject-\u003eIO()",
          "package": "FunGEn",
          "partial": "Texture",
          "signature": "TextureTarget-\u003eTextureObject-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:bindTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclear the screen\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "clearGameScreen",
          "package": "FunGEn",
          "signature": "GLclampf -\u003e GLclampf -\u003e GLclampf -\u003e IO ()",
          "source": "src/Graphics-UI-Fungen-Map.html#clearGameScreen",
          "type": "function"
        },
        "index": {
          "description": "clear the screen",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "clearGameScreen",
          "normalized": "GLclampf-\u003eGLclampf-\u003eGLclampf-\u003eIO()",
          "package": "FunGEn",
          "partial": "Game Screen",
          "signature": "GLclampf-\u003eGLclampf-\u003eGLclampf-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:clearGameScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epaint the whole screen with a specified RGB color\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "clearScreen",
          "package": "FunGEn",
          "signature": "GLclampf -\u003e GLclampf -\u003e GLclampf -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#clearScreen",
          "type": "function"
        },
        "index": {
          "description": "paint the whole screen with specified RGB color",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "clearScreen",
          "normalized": "GLclampf-\u003eGLclampf-\u003eGLclampf-\u003eIOGame a b c d()",
          "package": "FunGEn",
          "partial": "Screen",
          "signature": "GLclampf-\u003eGLclampf-\u003eGLclampf-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:clearScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a PreColorMap\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "colorMap",
          "package": "FunGEn",
          "signature": "GLclampf -\u003e GLclampf -\u003e GLclampf -\u003e GLdouble -\u003e GLdouble -\u003e GameMap t",
          "source": "src/Graphics-UI-Fungen-Map.html#colorMap",
          "type": "function"
        },
        "index": {
          "description": "creates PreColorMap",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "colorMap",
          "normalized": "GLclampf-\u003eGLclampf-\u003eGLclampf-\u003eGLdouble-\u003eGLdouble-\u003eGameMap a",
          "package": "FunGEn",
          "partial": "Map",
          "signature": "GLclampf-\u003eGLclampf-\u003eGLclampf-\u003eGLdouble-\u003eGLdouble-\u003eGameMap t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:colorMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "createGame",
          "package": "FunGEn",
          "signature": "GameMap v -\u003e [ObjectManager s] -\u003e WindowConfig -\u003e u -\u003e t -\u003e FilePictureList -\u003e IO (Game t s u v)",
          "source": "src/Graphics-UI-Fungen-Game.html#createGame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "createGame",
          "normalized": "GameMap a-\u003e[ObjectManager b]-\u003eWindowConfig-\u003ec-\u003ed-\u003eFilePictureList-\u003eIO(Game d b c a)",
          "package": "FunGEn",
          "partial": "Game",
          "signature": "GameMap v-\u003e[ObjectManager s]-\u003eWindowConfig-\u003eu-\u003et-\u003eFilePictureList-\u003eIO(Game t s u v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:createGame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "ctrl",
          "package": "FunGEn",
          "signature": "KeyState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "ctrl",
          "package": "FunGEn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:ctrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "destroyGameObject",
          "package": "FunGEn",
          "signature": "String -\u003e String -\u003e [ObjectManager t] -\u003e [ObjectManager t]",
          "source": "src/Graphics-UI-Fungen-Objects.html#destroyGameObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "destroyGameObject",
          "normalized": "String-\u003eString-\u003e[ObjectManager a]-\u003e[ObjectManager a]",
          "package": "FunGEn",
          "partial": "Game Object",
          "signature": "String-\u003eString-\u003e[ObjectManager t]-\u003e[ObjectManager t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:destroyGameObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edestroys an object from the game\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "destroyObject",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#destroyObject",
          "type": "function"
        },
        "index": {
          "description": "destroys an object from the game",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "destroyObject",
          "normalized": "GameObject a-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "Object",
          "signature": "GameObject s-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:destroyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edestroys objects from the game\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "destroyObjects",
          "package": "FunGEn",
          "signature": "[GameObject s] -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#destroyObjects",
          "type": "function"
        },
        "index": {
          "description": "destroys objects from the game",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "destroyObjects",
          "normalized": "[GameObject a]-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "Objects",
          "signature": "[GameObject s]-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:destroyObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "disableGameFlags",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#disableGameFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "disableGameFlags",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "Game Flags",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:disableGameFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "disableMapDrawing",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#disableMapDrawing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "disableMapDrawing",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "Map Drawing",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:disableMapDrawing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "disableObjectsDrawing",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#disableObjectsDrawing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "disableObjectsDrawing",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "Objects Drawing",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:disableObjectsDrawing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "disableObjectsMoving",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#disableObjectsMoving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "disableObjectsMoving",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "Objects Moving",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:disableObjectsMoving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a fungen Game and IOGame step action, generate a GLUT\n display callback that steps the game and renders its resulting\n state. \u003ccode\u003e\u003ca\u003efunInit\u003c/a\u003e\u003c/code\u003e runs this automatically.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "display",
          "package": "FunGEn",
          "signature": "Game t s u v -\u003e IOGame t s u v () -\u003e DisplayCallback",
          "source": "src/Graphics-UI-Fungen-Display.html#display",
          "type": "function"
        },
        "index": {
          "description": "Given fungen Game and IOGame step action generate GLUT display callback that steps the game and renders its resulting state funInit runs this automatically",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "display",
          "normalized": "Game a b c d-\u003eIOGame a b c d()-\u003eDisplayCallback",
          "package": "FunGEn",
          "signature": "Game t s u v-\u003eIOGame t s u v()-\u003eDisplayCallback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edraws all visible objects\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "drawAllObjects",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#drawAllObjects",
          "type": "function"
        },
        "index": {
          "description": "draws all visible objects",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "drawAllObjects",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "All Objects",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:drawAllObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edraw the background map\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "drawGameMap",
          "package": "FunGEn",
          "signature": "GameMap t -\u003e Point2D -\u003e [TextureObject] -\u003e IO ()",
          "source": "src/Graphics-UI-Fungen-Map.html#drawGameMap",
          "type": "function"
        },
        "index": {
          "description": "draw the background map",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "drawGameMap",
          "normalized": "GameMap a-\u003ePoint D-\u003e[TextureObject]-\u003eIO()",
          "package": "FunGEn",
          "partial": "Game Map",
          "signature": "GameMap t-\u003ePoint D-\u003e[TextureObject]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:drawGameMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "drawGameObject",
          "package": "FunGEn",
          "signature": "GameObject t -\u003e QuadricPrimitive -\u003e [TextureObject] -\u003e IO ()",
          "source": "src/Graphics-UI-Fungen-Objects.html#drawGameObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "drawGameObject",
          "normalized": "GameObject a-\u003eQuadricPrimitive-\u003e[TextureObject]-\u003eIO()",
          "package": "FunGEn",
          "partial": "Game Object",
          "signature": "GameObject t-\u003eQuadricPrimitive-\u003e[TextureObject]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:drawGameObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "drawGameObjects",
          "package": "FunGEn",
          "signature": "[ObjectManager t] -\u003e QuadricPrimitive -\u003e [TextureObject] -\u003e IO ()",
          "source": "src/Graphics-UI-Fungen-Objects.html#drawGameObjects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "drawGameObjects",
          "normalized": "[ObjectManager a]-\u003eQuadricPrimitive-\u003e[TextureObject]-\u003eIO()",
          "package": "FunGEn",
          "partial": "Game Objects",
          "signature": "[ObjectManager t]-\u003eQuadricPrimitive-\u003e[TextureObject]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:drawGameObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edraws the background map\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "drawMap",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#drawMap",
          "type": "function"
        },
        "index": {
          "description": "draws the background map",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "drawMap",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "Map",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:drawMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edraw one object\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "drawObject",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#drawObject",
          "type": "function"
        },
        "index": {
          "description": "draw one object",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "drawObject",
          "normalized": "GameObject a-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "Object",
          "signature": "GameObject s-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:drawObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "dropGLsizei",
          "package": "FunGEn",
          "signature": "GLsizei -\u003e [a] -\u003e [a]",
          "source": "src/Graphics-UI-Fungen-Util.html#dropGLsizei",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "dropGLsizei",
          "normalized": "GLsizei-\u003e[a]-\u003e[a]",
          "package": "FunGEn",
          "partial": "GLsizei",
          "signature": "GLsizei-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:dropGLsizei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "enableGameFlags",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#enableGameFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "enableGameFlags",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "Game Flags",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:enableGameFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "enableMapDrawing",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#enableMapDrawing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "enableMapDrawing",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "Map Drawing",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:enableMapDrawing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "enableObjectsDrawing",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#enableObjectsDrawing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "enableObjectsDrawing",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "Objects Drawing",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:enableObjectsDrawing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "enableObjectsMoving",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#enableObjectsMoving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "enableObjectsMoving",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "Objects Moving",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:enableObjectsMoving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns an object of the game, given its name and is object manager name\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "findObject",
          "package": "FunGEn",
          "signature": "String -\u003e String -\u003e IOGame t s u v (GameObject s)",
          "source": "src/Graphics-UI-Fungen-Game.html#findObject",
          "type": "function"
        },
        "index": {
          "description": "returns an object of the game given its name and is object manager name",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "findObject",
          "normalized": "String-\u003eString-\u003eIOGame a b c d(GameObject b)",
          "package": "FunGEn",
          "partial": "Object",
          "signature": "String-\u003eString-\u003eIOGame t s u v(GameObject s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:findObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "findObjectFromId",
          "package": "FunGEn",
          "signature": "GameObject t -\u003e [ObjectManager t] -\u003e GameObject t",
          "source": "src/Graphics-UI-Fungen-Objects.html#findObjectFromId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "findObjectFromId",
          "normalized": "GameObject a-\u003e[ObjectManager a]-\u003eGameObject a",
          "package": "FunGEn",
          "partial": "Object From Id",
          "signature": "GameObject t-\u003e[ObjectManager t]-\u003eGameObject t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:findObjectFromId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns an object manager of the game, given its name (internal use)\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "findObjectManager",
          "package": "FunGEn",
          "signature": "String -\u003e IOGame t s u v (ObjectManager s)",
          "source": "src/Graphics-UI-Fungen-Game.html#findObjectManager",
          "type": "function"
        },
        "index": {
          "description": "returns an object manager of the game given its name internal use",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "findObjectManager",
          "normalized": "String-\u003eIOGame a b c d(ObjectManager b)",
          "package": "FunGEn",
          "partial": "Object Manager",
          "signature": "String-\u003eIOGame t s u v(ObjectManager s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:findObjectManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExit the program successfully (from within a game action).\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "funExit",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Init.html#funExit",
          "type": "function"
        },
        "index": {
          "description": "Exit the program successfully from within game action",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "funExit",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "Exit",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:funExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a FunGEn game and start it running.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "funInit",
          "package": "FunGEn",
          "signature": "WindowConfig-\u003e GameMap v-\u003e [ObjectManager s]-\u003e u-\u003e t-\u003e [InputBinding t s u v]-\u003e IOGame t s u v ()-\u003e RefreshType-\u003e FilePictureList-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Build FunGEn game and start it running",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "funInit",
          "normalized": "WindowConfig-\u003eGameMap a-\u003e[ObjectManager b]-\u003ec-\u003ed-\u003e[InputBinding d b c a]-\u003eIOGame d b c a()-\u003eRefreshType-\u003eFilePictureList-\u003eIO()",
          "package": "FunGEn",
          "partial": "Init",
          "signature": "WindowConfig-\u003eGameMap v-\u003e[ObjectManager s]-\u003eu-\u003et-\u003e[InputBinding t s u v]-\u003eIOGame t s u v()-\u003eRefreshType-\u003eFilePictureList-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:funInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialise the input system, which keeps a list of input event to\n action bindings and executes the the proper actions automatically.\n Returns a function for adding bindings (GLUT's - should return the\n FunGEn-aware one instead ?), and another which should be called\n periodically (eg from refresh) to trigger still-down actions.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "funInitInput",
          "package": "FunGEn",
          "signature": "[InputBinding t s u v] -\u003e Game t s u v -\u003e IO (KeyBinder, StillDownHandler)",
          "source": "src/Graphics-UI-Fungen-Input.html#funInitInput",
          "type": "function"
        },
        "index": {
          "description": "Initialise the input system which keeps list of input event to action bindings and executes the the proper actions automatically Returns function for adding bindings GLUT should return the FunGEn-aware one instead and another which should be called periodically eg from refresh to trigger still-down actions",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "funInitInput",
          "normalized": "[InputBinding a b c d]-\u003eGame a b c d-\u003eIO(KeyBinder,StillDownHandler)",
          "package": "FunGEn",
          "partial": "Init Input",
          "signature": "[InputBinding t s u v]-\u003eGame t s u v-\u003eIO(KeyBinder,StillDownHandler)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:funInitInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getCurrentMap",
          "package": "FunGEn",
          "signature": "GameMap t -\u003e GameMap t",
          "source": "src/Graphics-UI-Fungen-Map.html#getCurrentMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getCurrentMap",
          "normalized": "GameMap a-\u003eGameMap a",
          "package": "FunGEn",
          "partial": "Current Map",
          "signature": "GameMap t-\u003eGameMap t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getCurrentMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getGameAttribute",
          "package": "FunGEn",
          "signature": "IOGame t s u v t",
          "source": "src/Graphics-UI-Fungen-Game.html#getGameAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getGameAttribute",
          "package": "FunGEn",
          "partial": "Game Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getGameAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getGameFlags",
          "package": "FunGEn",
          "signature": "IOGame t s u v GameFlags",
          "source": "src/Graphics-UI-Fungen-Game.html#getGameFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getGameFlags",
          "package": "FunGEn",
          "partial": "Game Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getGameFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectAsleep",
          "package": "FunGEn",
          "signature": "GameObject t -\u003e Bool",
          "source": "src/Graphics-UI-Fungen-Objects.html#getGameObjectAsleep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectAsleep",
          "normalized": "GameObject a-\u003eBool",
          "package": "FunGEn",
          "partial": "Game Object Asleep",
          "signature": "GameObject t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getGameObjectAsleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectAttribute",
          "package": "FunGEn",
          "signature": "GameObject t -\u003e t",
          "source": "src/Graphics-UI-Fungen-Objects.html#getGameObjectAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectAttribute",
          "normalized": "GameObject a-\u003ea",
          "package": "FunGEn",
          "partial": "Game Object Attribute",
          "signature": "GameObject t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getGameObjectAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectId",
          "package": "FunGEn",
          "signature": "GameObject t -\u003e Integer",
          "source": "src/Graphics-UI-Fungen-Objects.html#getGameObjectId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectId",
          "normalized": "GameObject a-\u003eInteger",
          "package": "FunGEn",
          "partial": "Game Object Id",
          "signature": "GameObject t-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getGameObjectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectManagerName",
          "package": "FunGEn",
          "signature": "GameObject t -\u003e String",
          "source": "src/Graphics-UI-Fungen-Objects.html#getGameObjectManagerName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectManagerName",
          "normalized": "GameObject a-\u003eString",
          "package": "FunGEn",
          "partial": "Game Object Manager Name",
          "signature": "GameObject t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getGameObjectManagerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectName",
          "package": "FunGEn",
          "signature": "GameObject t -\u003e String",
          "source": "src/Graphics-UI-Fungen-Objects.html#getGameObjectName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectName",
          "normalized": "GameObject a-\u003eString",
          "package": "FunGEn",
          "partial": "Game Object Name",
          "signature": "GameObject t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getGameObjectName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectPosition",
          "package": "FunGEn",
          "signature": "GameObject t -\u003e (GLdouble, GLdouble)",
          "source": "src/Graphics-UI-Fungen-Objects.html#getGameObjectPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectPosition",
          "normalized": "GameObject a-\u003e(GLdouble,GLdouble)",
          "package": "FunGEn",
          "partial": "Game Object Position",
          "signature": "GameObject t-\u003e(GLdouble,GLdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getGameObjectPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectSize",
          "package": "FunGEn",
          "signature": "GameObject t -\u003e (GLdouble, GLdouble)",
          "source": "src/Graphics-UI-Fungen-Objects.html#getGameObjectSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectSize",
          "normalized": "GameObject a-\u003e(GLdouble,GLdouble)",
          "package": "FunGEn",
          "partial": "Game Object Size",
          "signature": "GameObject t-\u003e(GLdouble,GLdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getGameObjectSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectSpeed",
          "package": "FunGEn",
          "signature": "GameObject t -\u003e (GLdouble, GLdouble)",
          "source": "src/Graphics-UI-Fungen-Objects.html#getGameObjectSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getGameObjectSpeed",
          "normalized": "GameObject a-\u003e(GLdouble,GLdouble)",
          "package": "FunGEn",
          "partial": "Game Object Speed",
          "signature": "GameObject t-\u003e(GLdouble,GLdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getGameObjectSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getGameState",
          "package": "FunGEn",
          "signature": "IOGame t s u v u",
          "source": "src/Graphics-UI-Fungen-Game.html#getGameState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getGameState",
          "package": "FunGEn",
          "partial": "Game State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getGameState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getMapSize",
          "package": "FunGEn",
          "signature": "GameMap t -\u003e Point2D",
          "source": "src/Graphics-UI-Fungen-Map.html#getMapSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getMapSize",
          "normalized": "GameMap a-\u003ePoint D",
          "package": "FunGEn",
          "partial": "Map Size",
          "signature": "GameMap t-\u003ePoint D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getMapSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebecause an object can have its sleeping status modified, it is necessary\n to search through the managers to find it, otherwise this functions won't be safe.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectAsleep",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#getObjectAsleep",
          "type": "function"
        },
        "index": {
          "description": "because an object can have its sleeping status modified it is necessary to search through the managers to find it otherwise this functions won be safe",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectAsleep",
          "normalized": "GameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Object Asleep",
          "signature": "GameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getObjectAsleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebecause an object can have its attribute modified, it is necessary\n to search through the managers to find it, otherwise this functions won't be safe.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectAttribute",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v s",
          "source": "src/Graphics-UI-Fungen-Game.html#getObjectAttribute",
          "type": "function"
        },
        "index": {
          "description": "because an object can have its attribute modified it is necessary to search through the managers to find it otherwise this functions won be safe",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectAttribute",
          "normalized": "GameObject a-\u003eIOGame b a c d a",
          "package": "FunGEn",
          "partial": "Object Attribute",
          "signature": "GameObject s-\u003eIOGame t s u v s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getObjectAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebecause an object can have its group (manager) name modified, it is necessary\n to search through the managers to find it, otherwise this functions won't be safe.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectGroupName",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v String",
          "source": "src/Graphics-UI-Fungen-Game.html#getObjectGroupName",
          "type": "function"
        },
        "index": {
          "description": "because an object can have its group manager name modified it is necessary to search through the managers to find it otherwise this functions won be safe",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectGroupName",
          "normalized": "GameObject a-\u003eIOGame b a c d String",
          "package": "FunGEn",
          "partial": "Object Group Name",
          "signature": "GameObject s-\u003eIOGame t s u v String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getObjectGroupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getObjectManagerCounter",
          "package": "FunGEn",
          "signature": "ObjectManager t -\u003e Integer",
          "source": "src/Graphics-UI-Fungen-Objects.html#getObjectManagerCounter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectManagerCounter",
          "normalized": "ObjectManager a-\u003eInteger",
          "package": "FunGEn",
          "partial": "Object Manager Counter",
          "signature": "ObjectManager t-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getObjectManagerCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getObjectManagerName",
          "package": "FunGEn",
          "signature": "ObjectManager t -\u003e String",
          "source": "src/Graphics-UI-Fungen-Objects.html#getObjectManagerName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectManagerName",
          "normalized": "ObjectManager a-\u003eString",
          "package": "FunGEn",
          "partial": "Object Manager Name",
          "signature": "ObjectManager t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getObjectManagerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getObjectManagerObjects",
          "package": "FunGEn",
          "signature": "ObjectManager t -\u003e [GameObject t]",
          "source": "src/Graphics-UI-Fungen-Objects.html#getObjectManagerObjects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectManagerObjects",
          "normalized": "ObjectManager a-\u003e[GameObject a]",
          "package": "FunGEn",
          "partial": "Object Manager Objects",
          "signature": "ObjectManager t-\u003e[GameObject t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getObjectManagerObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getObjectManagers",
          "package": "FunGEn",
          "signature": "IOGame t s u v [ObjectManager s]",
          "source": "src/Graphics-UI-Fungen-Game.html#getObjectManagers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectManagers",
          "normalized": "IOGame a b c d[ObjectManager b]",
          "package": "FunGEn",
          "partial": "Object Managers",
          "signature": "IOGame t s u v[ObjectManager s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getObjectManagers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethere is no need to search through the managers, because the name of an object is\n never modified so the result of this function will always be safe.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectName",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v String",
          "source": "src/Graphics-UI-Fungen-Game.html#getObjectName",
          "type": "function"
        },
        "index": {
          "description": "there is no need to search through the managers because the name of an object is never modified so the result of this function will always be safe",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectName",
          "normalized": "GameObject a-\u003eIOGame b a c d String",
          "package": "FunGEn",
          "partial": "Object Name",
          "signature": "GameObject s-\u003eIOGame t s u v String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getObjectName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebecause an object can have its position modified, it is necessary\n to search through the managers to find it, otherwise this functions won't be safe.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectPosition",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v (GLdouble, GLdouble)",
          "source": "src/Graphics-UI-Fungen-Game.html#getObjectPosition",
          "type": "function"
        },
        "index": {
          "description": "because an object can have its position modified it is necessary to search through the managers to find it otherwise this functions won be safe",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectPosition",
          "normalized": "GameObject a-\u003eIOGame b a c d(GLdouble,GLdouble)",
          "package": "FunGEn",
          "partial": "Object Position",
          "signature": "GameObject s-\u003eIOGame t s u v(GLdouble,GLdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getObjectPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebecause an object can have its size modified, it is necessary\n to search through the managers to find it, otherwise this functions won't be safe.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectSize",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v (GLdouble, GLdouble)",
          "source": "src/Graphics-UI-Fungen-Game.html#getObjectSize",
          "type": "function"
        },
        "index": {
          "description": "because an object can have its size modified it is necessary to search through the managers to find it otherwise this functions won be safe",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectSize",
          "normalized": "GameObject a-\u003eIOGame b a c d(GLdouble,GLdouble)",
          "package": "FunGEn",
          "partial": "Object Size",
          "signature": "GameObject s-\u003eIOGame t s u v(GLdouble,GLdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getObjectSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebecause an object can have its speed modified, it is necessary\n to search through the managers to find it, otherwise this functions won't be safe.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectSpeed",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v (GLdouble, GLdouble)",
          "source": "src/Graphics-UI-Fungen-Game.html#getObjectSpeed",
          "type": "function"
        },
        "index": {
          "description": "because an object can have its speed modified it is necessary to search through the managers to find it otherwise this functions won be safe",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectSpeed",
          "normalized": "GameObject a-\u003eIOGame b a c d(GLdouble,GLdouble)",
          "package": "FunGEn",
          "partial": "Object Speed",
          "signature": "GameObject s-\u003eIOGame t s u v(GLdouble,GLdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getObjectSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns the list of all objects from the group whose name is given\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectsFromGroup",
          "package": "FunGEn",
          "signature": "String -\u003e IOGame t s u v [GameObject s]",
          "source": "src/Graphics-UI-Fungen-Game.html#getObjectsFromGroup",
          "type": "function"
        },
        "index": {
          "description": "returns the list of all objects from the group whose name is given",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getObjectsFromGroup",
          "normalized": "String-\u003eIOGame a b c d[GameObject b]",
          "package": "FunGEn",
          "partial": "Objects From Group",
          "signature": "String-\u003eIOGame t s u v[GameObject s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getObjectsFromGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getTileBlocked",
          "package": "FunGEn",
          "signature": "Tile t -\u003e Bool",
          "source": "src/Graphics-UI-Fungen-Map.html#getTileBlocked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getTileBlocked",
          "normalized": "Tile a-\u003eBool",
          "package": "FunGEn",
          "partial": "Tile Blocked",
          "signature": "Tile t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getTileBlocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns a mapTile, given its index (x,y) in the tile map\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "getTileFromIndex",
          "package": "FunGEn",
          "signature": "(Int, Int) -\u003e IOGame t s u v (Tile v)",
          "source": "src/Graphics-UI-Fungen-Game.html#getTileFromIndex",
          "type": "function"
        },
        "index": {
          "description": "returns mapTile given its index in the tile map",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getTileFromIndex",
          "normalized": "(Int,Int)-\u003eIOGame a b c d(Tile d)",
          "package": "FunGEn",
          "partial": "Tile From Index",
          "signature": "(Int,Int)-\u003eIOGame t s u v(Tile v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getTileFromIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns a mapTile, given its pixel position (x,y) in the screen\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "getTileFromWindowPosition",
          "package": "FunGEn",
          "signature": "(GLdouble, GLdouble) -\u003e IOGame t s u v (Tile v)",
          "source": "src/Graphics-UI-Fungen-Game.html#getTileFromWindowPosition",
          "type": "function"
        },
        "index": {
          "description": "returns mapTile given its pixel position in the screen",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getTileFromWindowPosition",
          "normalized": "(GLdouble,GLdouble)-\u003eIOGame a b c d(Tile d)",
          "package": "FunGEn",
          "partial": "Tile From Window Position",
          "signature": "(GLdouble,GLdouble)-\u003eIOGame t s u v(Tile v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getTileFromWindowPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getTileMapScroll",
          "package": "FunGEn",
          "signature": "GameMap t -\u003e Point2D",
          "source": "src/Graphics-UI-Fungen-Map.html#getTileMapScroll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getTileMapScroll",
          "normalized": "GameMap a-\u003ePoint D",
          "package": "FunGEn",
          "partial": "Tile Map Scroll",
          "signature": "GameMap t-\u003ePoint D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getTileMapScroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getTileMapSize",
          "package": "FunGEn",
          "signature": "GameMap t -\u003e Point2D",
          "source": "src/Graphics-UI-Fungen-Map.html#getTileMapSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getTileMapSize",
          "normalized": "GameMap a-\u003ePoint D",
          "package": "FunGEn",
          "partial": "Tile Map Size",
          "signature": "GameMap t-\u003ePoint D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getTileMapSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getTileMapTileMatrix",
          "package": "FunGEn",
          "signature": "GameMap t -\u003e TileMatrix t",
          "source": "src/Graphics-UI-Fungen-Map.html#getTileMapTileMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getTileMapTileMatrix",
          "normalized": "GameMap a-\u003eTileMatrix a",
          "package": "FunGEn",
          "partial": "Tile Map Tile Matrix",
          "signature": "GameMap t-\u003eTileMatrix t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getTileMapTileMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getTileMapTileSize",
          "package": "FunGEn",
          "signature": "GameMap t -\u003e Point2D",
          "source": "src/Graphics-UI-Fungen-Map.html#getTileMapTileSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getTileMapTileSize",
          "normalized": "GameMap a-\u003ePoint D",
          "package": "FunGEn",
          "partial": "Tile Map Tile Size",
          "signature": "GameMap t-\u003ePoint D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getTileMapTileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getTileMoveCost",
          "package": "FunGEn",
          "signature": "Tile t -\u003e Float",
          "source": "src/Graphics-UI-Fungen-Map.html#getTileMoveCost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getTileMoveCost",
          "normalized": "Tile a-\u003eFloat",
          "package": "FunGEn",
          "partial": "Tile Move Cost",
          "signature": "Tile t-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getTileMoveCost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getTilePictureIndex",
          "package": "FunGEn",
          "signature": "Tile t -\u003e Int",
          "source": "src/Graphics-UI-Fungen-Map.html#getTilePictureIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getTilePictureIndex",
          "normalized": "Tile a-\u003eInt",
          "package": "FunGEn",
          "partial": "Tile Picture Index",
          "signature": "Tile t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getTilePictureIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "getTileSpecialAttribute",
          "package": "FunGEn",
          "signature": "Tile t -\u003e t",
          "source": "src/Graphics-UI-Fungen-Map.html#getTileSpecialAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "getTileSpecialAttribute",
          "normalized": "Tile a-\u003ea",
          "package": "FunGEn",
          "partial": "Tile Special Attribute",
          "signature": "Tile t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:getTileSpecialAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "inv2color3",
          "package": "FunGEn",
          "signature": "InvList -\u003e Maybe ColorList3",
          "source": "src/Graphics-UI-Fungen-Util.html#inv2color3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "inv2color3",
          "normalized": "InvList-\u003eMaybe ColorList",
          "package": "FunGEn",
          "signature": "InvList-\u003eMaybe ColorList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:inv2color3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "isEmpty",
          "package": "FunGEn",
          "signature": "[a] -\u003e Bool",
          "source": "src/Graphics-UI-Fungen-Util.html#isEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "isEmpty",
          "normalized": "[a]-\u003eBool",
          "package": "FunGEn",
          "partial": "Empty",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "isMultiMap",
          "package": "FunGEn",
          "signature": "GameMap t -\u003e Bool",
          "source": "src/Graphics-UI-Fungen-Map.html#isMultiMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "isMultiMap",
          "normalized": "GameMap a-\u003eBool",
          "package": "FunGEn",
          "partial": "Multi Map",
          "signature": "GameMap t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:isMultiMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "isTileMap",
          "package": "FunGEn",
          "signature": "GameMap t -\u003e Bool",
          "source": "src/Graphics-UI-Fungen-Map.html#isTileMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "isTileMap",
          "normalized": "GameMap a-\u003eBool",
          "package": "FunGEn",
          "partial": "Tile Map",
          "signature": "GameMap t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:isTileMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "liftIOtoIOGame",
          "package": "FunGEn",
          "signature": "IO a -\u003e IOGame t s u v a",
          "source": "src/Graphics-UI-Fungen-Game.html#liftIOtoIOGame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "liftIOtoIOGame",
          "normalized": "IO a-\u003eIOGame b c d e a",
          "package": "FunGEn",
          "partial": "IOto IOGame",
          "signature": "IO a-\u003eIOGame t s u v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:liftIOtoIOGame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "liftIOtoIOGame'",
          "package": "FunGEn",
          "signature": "(a -\u003e IO ()) -\u003e a -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#liftIOtoIOGame%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "liftIOtoIOGame'",
          "normalized": "(a-\u003eIO())-\u003ea-\u003eIOGame b c d e()",
          "package": "FunGEn",
          "partial": "IOto IOGame'",
          "signature": "(a-\u003eIO())-\u003ea-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:liftIOtoIOGame-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads a bitmap from a file.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "loadBitmap",
          "package": "FunGEn",
          "signature": "FilePath -\u003e Maybe ColorList3 -\u003e IO AwbfBitmap",
          "source": "src/Graphics-UI-Fungen-Loader.html#loadBitmap",
          "type": "function"
        },
        "index": {
          "description": "Loads bitmap from file",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "loadBitmap",
          "normalized": "FilePath-\u003eMaybe ColorList-\u003eIO AwbfBitmap",
          "package": "FunGEn",
          "partial": "Bitmap",
          "signature": "FilePath-\u003eMaybe ColorList-\u003eIO AwbfBitmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:loadBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads n bitmaps from n files.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "loadBitmapList",
          "package": "FunGEn",
          "signature": "[(FilePath, Maybe ColorList3)] -\u003e IO [AwbfBitmap]",
          "source": "src/Graphics-UI-Fungen-Loader.html#loadBitmapList",
          "type": "function"
        },
        "index": {
          "description": "Loads bitmaps from files",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "loadBitmapList",
          "normalized": "[(FilePath,Maybe ColorList)]-\u003eIO[AwbfBitmap]",
          "package": "FunGEn",
          "partial": "Bitmap List",
          "signature": "[(FilePath,Maybe ColorList)]-\u003eIO[AwbfBitmap]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:loadBitmapList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "make0",
          "package": "FunGEn",
          "signature": "Int -\u003e String",
          "source": "src/Graphics-UI-Fungen-Util.html#make0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "make0",
          "normalized": "Int-\u003eString",
          "package": "FunGEn",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:make0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the max indexes of a matrix (assumed that its lines have the same length)\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "matrixSize",
          "package": "FunGEn",
          "signature": "[[a]] -\u003e (Int, Int)",
          "source": "src/Graphics-UI-Fungen-Util.html#matrixSize",
          "type": "function"
        },
        "index": {
          "description": "return the max indexes of matrix assumed that its lines have the same length",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "matrixSize",
          "normalized": "[[a]]-\u003e(Int,Int)",
          "package": "FunGEn",
          "partial": "Size",
          "signature": "[[a]]-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:matrixSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "matrixToList",
          "package": "FunGEn",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Graphics-UI-Fungen-Util.html#matrixToList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "matrixToList",
          "normalized": "[[a]]-\u003e[a]",
          "package": "FunGEn",
          "partial": "To List",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:matrixToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echanges objects position according to its speed\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "moveAllObjects",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#moveAllObjects",
          "type": "function"
        },
        "index": {
          "description": "changes objects position according to its speed",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "moveAllObjects",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "All Objects",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:moveAllObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "moveGameObjects",
          "package": "FunGEn",
          "signature": "[ObjectManager t] -\u003e [ObjectManager t]",
          "source": "src/Graphics-UI-Fungen-Objects.html#moveGameObjects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "moveGameObjects",
          "normalized": "[ObjectManager a]-\u003e[ObjectManager a]",
          "package": "FunGEn",
          "partial": "Game Objects",
          "signature": "[ObjectManager t]-\u003e[ObjectManager t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:moveGameObjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a multimap\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "multiMap",
          "package": "FunGEn",
          "signature": "[GameMap t] -\u003e Int -\u003e GameMap t",
          "source": "src/Graphics-UI-Fungen-Map.html#multiMap",
          "type": "function"
        },
        "index": {
          "description": "creates multimap",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "multiMap",
          "normalized": "[GameMap a]-\u003eInt-\u003eGameMap a",
          "package": "FunGEn",
          "partial": "Map",
          "signature": "[GameMap t]-\u003eInt-\u003eGameMap t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:multiMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "object",
          "package": "FunGEn",
          "signature": "String -\u003e ObjectPicture -\u003e Bool -\u003e (GLdouble, GLdouble) -\u003e (GLdouble, GLdouble) -\u003e t -\u003e GameObject t",
          "source": "src/Graphics-UI-Fungen-Objects.html#object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "object",
          "normalized": "String-\u003eObjectPicture-\u003eBool-\u003e(GLdouble,GLdouble)-\u003e(GLdouble,GLdouble)-\u003ea-\u003eGameObject a",
          "package": "FunGEn",
          "signature": "String-\u003eObjectPicture-\u003eBool-\u003e(GLdouble,GLdouble)-\u003e(GLdouble,GLdouble)-\u003et-\u003eGameObject t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echecks the collision between an object and the bottom of the map\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "objectBottomMapCollision",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#objectBottomMapCollision",
          "type": "function"
        },
        "index": {
          "description": "checks the collision between an object and the bottom of the map",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectBottomMapCollision",
          "normalized": "GameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Bottom Map Collision",
          "signature": "GameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectBottomMapCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echecks the collision between an object and the bottom of the map in the next game cicle\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "objectBottomMapFutureCollision",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#objectBottomMapFutureCollision",
          "type": "function"
        },
        "index": {
          "description": "checks the collision between an object and the bottom of the map in the next game cicle",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectBottomMapFutureCollision",
          "normalized": "GameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Bottom Map Future Collision",
          "signature": "GameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectBottomMapFutureCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "objectGroup",
          "package": "FunGEn",
          "signature": "String -\u003e [GameObject t] -\u003e ObjectManager t",
          "source": "src/Graphics-UI-Fungen-Objects.html#objectGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectGroup",
          "normalized": "String-\u003e[GameObject a]-\u003eObjectManager a",
          "package": "FunGEn",
          "partial": "Group",
          "signature": "String-\u003e[GameObject t]-\u003eObjectManager t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echecks the collision between an object and the left side of the map\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "objectLeftMapCollision",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#objectLeftMapCollision",
          "type": "function"
        },
        "index": {
          "description": "checks the collision between an object and the left side of the map",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectLeftMapCollision",
          "normalized": "GameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Left Map Collision",
          "signature": "GameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectLeftMapCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echecks the collision between an object and the left side of the map in the next game cicle\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "objectLeftMapFutureCollision",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#objectLeftMapFutureCollision",
          "type": "function"
        },
        "index": {
          "description": "checks the collision between an object and the left side of the map in the next game cicle",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectLeftMapFutureCollision",
          "normalized": "GameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Left Map Future Collision",
          "signature": "GameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectLeftMapFutureCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "objectListObjectCollision",
          "package": "FunGEn",
          "signature": "[GameObject s] -\u003e GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#objectListObjectCollision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectListObjectCollision",
          "normalized": "[GameObject a]-\u003eGameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "List Object Collision",
          "signature": "[GameObject s]-\u003eGameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectListObjectCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "objectListObjectFutureCollision",
          "package": "FunGEn",
          "signature": "[GameObject s] -\u003e GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#objectListObjectFutureCollision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectListObjectFutureCollision",
          "normalized": "[GameObject a]-\u003eGameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "List Object Future Collision",
          "signature": "[GameObject s]-\u003eGameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectListObjectFutureCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echecks the collision between an object and the right side of the map\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "objectRightMapCollision",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#objectRightMapCollision",
          "type": "function"
        },
        "index": {
          "description": "checks the collision between an object and the right side of the map",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectRightMapCollision",
          "normalized": "GameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Right Map Collision",
          "signature": "GameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectRightMapCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echecks the collision between an object and the right side of the map in the next game cicle\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "objectRightMapFutureCollision",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#objectRightMapFutureCollision",
          "type": "function"
        },
        "index": {
          "description": "checks the collision between an object and the right side of the map in the next game cicle",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectRightMapFutureCollision",
          "normalized": "GameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Right Map Future Collision",
          "signature": "GameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectRightMapFutureCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echecks the collision between an object and the top of the map\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "objectTopMapCollision",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#objectTopMapCollision",
          "type": "function"
        },
        "index": {
          "description": "checks the collision between an object and the top of the map",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectTopMapCollision",
          "normalized": "GameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Top Map Collision",
          "signature": "GameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectTopMapCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echecks the collision between an object and the top of the map in the next game cicle\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "objectTopMapFutureCollision",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#objectTopMapFutureCollision",
          "type": "function"
        },
        "index": {
          "description": "checks the collision between an object and the top of the map in the next game cicle",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectTopMapFutureCollision",
          "normalized": "GameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Top Map Future Collision",
          "signature": "GameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectTopMapFutureCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echecks the collision between two objects\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "objectsCollision",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#objectsCollision",
          "type": "function"
        },
        "index": {
          "description": "checks the collision between two objects",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectsCollision",
          "normalized": "GameObject a-\u003eGameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Collision",
          "signature": "GameObject s-\u003eGameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectsCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echecks the collision between two objects in the next game cicle\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "objectsFutureCollision",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#objectsFutureCollision",
          "type": "function"
        },
        "index": {
          "description": "checks the collision between two objects in the next game cicle",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "objectsFutureCollision",
          "normalized": "GameObject a-\u003eGameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Future Collision",
          "signature": "GameObject s-\u003eGameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:objectsFutureCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "ord2",
          "package": "FunGEn",
          "signature": "Char -\u003e GLubyte",
          "source": "src/Graphics-UI-Fungen-Util.html#ord2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "ord2",
          "normalized": "Char-\u003eGLubyte",
          "package": "FunGEn",
          "signature": "Char-\u003eGLubyte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:ord2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "pathAndInv2color3List",
          "package": "FunGEn",
          "signature": "(FilePath, InvList) -\u003e (FilePath, Maybe ColorList3)",
          "source": "src/Graphics-UI-Fungen-Util.html#pathAndInv2color3List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "pathAndInv2color3List",
          "normalized": "(FilePath,InvList)-\u003e(FilePath,Maybe ColorList)",
          "package": "FunGEn",
          "partial": "And Inv List",
          "signature": "(FilePath,InvList)-\u003e(FilePath,Maybe ColorList)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:pathAndInv2color3List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "point2DtoVertex3",
          "package": "FunGEn",
          "signature": "[Point2D] -\u003e [Vertex3 GLdouble]",
          "source": "src/Graphics-UI-Fungen-Util.html#point2DtoVertex3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "point2DtoVertex3",
          "normalized": "[Point D]-\u003e[Vertex GLdouble]",
          "package": "FunGEn",
          "partial": "Dto Vertex",
          "signature": "[Point D]-\u003e[Vertex GLdouble]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:point2DtoVertex3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "pointsObjectCollision",
          "package": "FunGEn",
          "signature": "GLdouble -\u003e GLdouble -\u003e GLdouble -\u003e GLdouble -\u003e GameObject s -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#pointsObjectCollision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "pointsObjectCollision",
          "normalized": "GLdouble-\u003eGLdouble-\u003eGLdouble-\u003eGLdouble-\u003eGameObject a-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Object Collision",
          "signature": "GLdouble-\u003eGLdouble-\u003eGLdouble-\u003eGLdouble-\u003eGameObject s-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:pointsObjectCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "pointsObjectListCollision",
          "package": "FunGEn",
          "signature": "GLdouble -\u003e GLdouble -\u003e GLdouble -\u003e GLdouble -\u003e [GameObject s] -\u003e IOGame t s u v Bool",
          "source": "src/Graphics-UI-Fungen-Game.html#pointsObjectListCollision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "pointsObjectListCollision",
          "normalized": "GLdouble-\u003eGLdouble-\u003eGLdouble-\u003eGLdouble-\u003e[GameObject a]-\u003eIOGame b a c d Bool",
          "package": "FunGEn",
          "partial": "Object List Collision",
          "signature": "GLdouble-\u003eGLdouble-\u003eGLdouble-\u003eGLdouble-\u003e[GameObject s]-\u003eIOGame t s u v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:pointsObjectListCollision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "pow2",
          "package": "FunGEn",
          "signature": "GLsizei -\u003e GLsizei",
          "source": "src/Graphics-UI-Fungen-Util.html#pow2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "pow2",
          "normalized": "GLsizei-\u003eGLsizei",
          "package": "FunGEn",
          "signature": "GLsizei-\u003eGLsizei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:pow2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprints a string in the prompt\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "printOnPrompt",
          "package": "FunGEn",
          "signature": "a -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#printOnPrompt",
          "type": "function"
        },
        "index": {
          "description": "prints string in the prompt",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "printOnPrompt",
          "normalized": "a-\u003eIOGame b c d e()",
          "package": "FunGEn",
          "partial": "On Prompt",
          "signature": "a-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:printOnPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprints a string in the current window\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "printOnScreen",
          "package": "FunGEn",
          "signature": "String -\u003e BitmapFont -\u003e (GLdouble, GLdouble) -\u003e GLclampf -\u003e GLclampf -\u003e GLclampf -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#printOnScreen",
          "type": "function"
        },
        "index": {
          "description": "prints string in the current window",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "printOnScreen",
          "normalized": "String-\u003eBitmapFont-\u003e(GLdouble,GLdouble)-\u003eGLclampf-\u003eGLclampf-\u003eGLclampf-\u003eIOGame a b c d()",
          "package": "FunGEn",
          "partial": "On Screen",
          "signature": "String-\u003eBitmapFont-\u003e(GLdouble,GLdouble)-\u003eGLclampf-\u003eGLclampf-\u003eGLclampf-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:printOnScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einternal use of the engine\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "printText",
          "package": "FunGEn",
          "signature": "IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#printText",
          "type": "function"
        },
        "index": {
          "description": "internal use of the engine",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "printText",
          "normalized": "IOGame a b c d()",
          "package": "FunGEn",
          "partial": "Text",
          "signature": "IOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:printText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay these texts on screen.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "putGameText",
          "package": "FunGEn",
          "signature": "[Text] -\u003e IO ()",
          "source": "src/Graphics-UI-Fungen-Text.html#putGameText",
          "type": "function"
        },
        "index": {
          "description": "Display these texts on screen",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "putGameText",
          "normalized": "[Text]-\u003eIO()",
          "package": "FunGEn",
          "partial": "Game Text",
          "signature": "[Text]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:putGameText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "racMod",
          "package": "FunGEn",
          "signature": "GLdouble -\u003e GLdouble -\u003e GLdouble",
          "source": "src/Graphics-UI-Fungen-Util.html#racMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "racMod",
          "normalized": "GLdouble-\u003eGLdouble-\u003eGLdouble",
          "package": "FunGEn",
          "partial": "Mod",
          "signature": "GLdouble-\u003eGLdouble-\u003eGLdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:racMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "randDouble",
          "package": "FunGEn",
          "signature": "(Double, Double) -\u003e IO Double",
          "source": "src/Graphics-UI-Fungen-Util.html#randDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "randDouble",
          "normalized": "(Double,Double)-\u003eIO Double",
          "package": "FunGEn",
          "partial": "Double",
          "signature": "(Double,Double)-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:randDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "randFloat",
          "package": "FunGEn",
          "signature": "(Float, Float) -\u003e IO Float",
          "source": "src/Graphics-UI-Fungen-Util.html#randFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "randFloat",
          "normalized": "(Float,Float)-\u003eIO Float",
          "package": "FunGEn",
          "partial": "Float",
          "signature": "(Float,Float)-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:randFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "randInt",
          "package": "FunGEn",
          "signature": "(Int, Int) -\u003e IO Int",
          "source": "src/Graphics-UI-Fungen-Util.html#randInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "randInt",
          "normalized": "(Int,Int)-\u003eIO Int",
          "package": "FunGEn",
          "partial": "Int",
          "signature": "(Int,Int)-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:randInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "randomDouble",
          "package": "FunGEn",
          "signature": "(Double, Double) -\u003e IOGame t s u v Double",
          "source": "src/Graphics-UI-Fungen-Game.html#randomDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "randomDouble",
          "normalized": "(Double,Double)-\u003eIOGame a b c d Double",
          "package": "FunGEn",
          "partial": "Double",
          "signature": "(Double,Double)-\u003eIOGame t s u v Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:randomDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "randomFloat",
          "package": "FunGEn",
          "signature": "(Float, Float) -\u003e IOGame t s u v Float",
          "source": "src/Graphics-UI-Fungen-Game.html#randomFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "randomFloat",
          "normalized": "(Float,Float)-\u003eIOGame a b c d Float",
          "package": "FunGEn",
          "partial": "Float",
          "signature": "(Float,Float)-\u003eIOGame t s u v Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:randomFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "randomInt",
          "package": "FunGEn",
          "signature": "(Int, Int) -\u003e IOGame t s u v Int",
          "source": "src/Graphics-UI-Fungen-Game.html#randomInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "randomInt",
          "normalized": "(Int,Int)-\u003eIOGame a b c d Int",
          "package": "FunGEn",
          "partial": "Int",
          "signature": "(Int,Int)-\u003eIOGame t s u v Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:randomInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereplaces an object by a new one, given the old object and the function that must be applied to it.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "replaceObject",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e (GameObject s -\u003e GameObject s) -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#replaceObject",
          "type": "function"
        },
        "index": {
          "description": "replaces an object by new one given the old object and the function that must be applied to it",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "replaceObject",
          "normalized": "GameObject a-\u003e(GameObject a-\u003eGameObject a)-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "Object",
          "signature": "GameObject s-\u003e(GameObject s-\u003eGameObject s)-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:replaceObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "reverseXSpeed",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#reverseXSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "reverseXSpeed",
          "normalized": "GameObject a-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "XSpeed",
          "signature": "GameObject s-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:reverseXSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "reverseYSpeed",
          "package": "FunGEn",
          "signature": "GameObject s -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#reverseYSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "reverseYSpeed",
          "normalized": "GameObject a-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "YSpeed",
          "signature": "GameObject s-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:reverseYSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "runIOGame",
          "package": "FunGEn",
          "signature": "IOGame t s u v a -\u003e Game t s u v -\u003e IO (Game t s u v, a)",
          "source": "src/Graphics-UI-Fungen-Game.html#runIOGame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "runIOGame",
          "normalized": "IOGame a b c d e-\u003eGame a b c d-\u003eIO(Game a b c d,e)",
          "package": "FunGEn",
          "partial": "IOGame",
          "signature": "IOGame t s u v a-\u003eGame t s u v-\u003eIO(Game t s u v,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:runIOGame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "runIOGameM",
          "package": "FunGEn",
          "signature": "IOGame t s u v a -\u003e Game t s u v -\u003e IO ()",
          "source": "src/Graphics-UI-Fungen-Game.html#runIOGameM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "runIOGameM",
          "normalized": "IOGame a b c d e-\u003eGame a b c d-\u003eIO()",
          "package": "FunGEn",
          "partial": "IOGame",
          "signature": "IOGame t s u v a-\u003eGame t s u v-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:runIOGameM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "searchGameObject",
          "package": "FunGEn",
          "signature": "String -\u003e ObjectManager t -\u003e GameObject t",
          "source": "src/Graphics-UI-Fungen-Objects.html#searchGameObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "searchGameObject",
          "normalized": "String-\u003eObjectManager a-\u003eGameObject a",
          "package": "FunGEn",
          "partial": "Game Object",
          "signature": "String-\u003eObjectManager t-\u003eGameObject t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:searchGameObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "searchObjectManager",
          "package": "FunGEn",
          "signature": "String -\u003e [ObjectManager t] -\u003e ObjectManager t",
          "source": "src/Graphics-UI-Fungen-Objects.html#searchObjectManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "searchObjectManager",
          "normalized": "String-\u003e[ObjectManager a]-\u003eObjectManager a",
          "package": "FunGEn",
          "partial": "Object Manager",
          "signature": "String-\u003e[ObjectManager t]-\u003eObjectManager t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:searchObjectManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the current map for a MultiMap\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "setCurrentMapIndex",
          "package": "FunGEn",
          "signature": "Int -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#setCurrentMapIndex",
          "type": "function"
        },
        "index": {
          "description": "set the current map for MultiMap",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "setCurrentMapIndex",
          "normalized": "Int-\u003eIOGame a b c d()",
          "package": "FunGEn",
          "partial": "Current Map Index",
          "signature": "Int-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:setCurrentMapIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "setGameAttribute",
          "package": "FunGEn",
          "signature": "t -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#setGameAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "setGameAttribute",
          "normalized": "a-\u003eIOGame a b c d()",
          "package": "FunGEn",
          "partial": "Game Attribute",
          "signature": "t-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:setGameAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "setGameFlags",
          "package": "FunGEn",
          "signature": "GameFlags -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#setGameFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "setGameFlags",
          "normalized": "GameFlags-\u003eIOGame a b c d()",
          "package": "FunGEn",
          "partial": "Game Flags",
          "signature": "GameFlags-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:setGameFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "setGameState",
          "package": "FunGEn",
          "signature": "u -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#setGameState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "setGameState",
          "normalized": "a-\u003eIOGame b c a d()",
          "package": "FunGEn",
          "partial": "Game State",
          "signature": "u-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:setGameState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echanges the sleeping status of an object, given its new status\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "setObjectAsleep",
          "package": "FunGEn",
          "signature": "Bool -\u003e GameObject s -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#setObjectAsleep",
          "type": "function"
        },
        "index": {
          "description": "changes the sleeping status of an object given its new status",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "setObjectAsleep",
          "normalized": "Bool-\u003eGameObject a-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "Object Asleep",
          "signature": "Bool-\u003eGameObject s-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:setObjectAsleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echanges the attribute of an object, given its new attribute\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "setObjectAttribute",
          "package": "FunGEn",
          "signature": "s -\u003e GameObject s -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#setObjectAttribute",
          "type": "function"
        },
        "index": {
          "description": "changes the attribute of an object given its new attribute",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "setObjectAttribute",
          "normalized": "a-\u003eGameObject a-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "Object Attribute",
          "signature": "s-\u003eGameObject s-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:setObjectAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echanges the current picture of a multitextured object\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "setObjectCurrentPicture",
          "package": "FunGEn",
          "signature": "Int -\u003e GameObject s -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#setObjectCurrentPicture",
          "type": "function"
        },
        "index": {
          "description": "changes the current picture of multitextured object",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "setObjectCurrentPicture",
          "normalized": "Int-\u003eGameObject a-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "Object Current Picture",
          "signature": "Int-\u003eGameObject s-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:setObjectCurrentPicture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "setObjectManagers",
          "package": "FunGEn",
          "signature": "[ObjectManager s] -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#setObjectManagers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "setObjectManagers",
          "normalized": "[ObjectManager a]-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "Object Managers",
          "signature": "[ObjectManager s]-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:setObjectManagers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echanges the position of an object, given its new position\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "setObjectPosition",
          "package": "FunGEn",
          "signature": "(GLdouble, GLdouble) -\u003e GameObject s -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#setObjectPosition",
          "type": "function"
        },
        "index": {
          "description": "changes the position of an object given its new position",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "setObjectPosition",
          "normalized": "(GLdouble,GLdouble)-\u003eGameObject a-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "Object Position",
          "signature": "(GLdouble,GLdouble)-\u003eGameObject s-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:setObjectPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echanges the speed of an object, given its new speed\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "setObjectSpeed",
          "package": "FunGEn",
          "signature": "(GLdouble, GLdouble) -\u003e GameObject s -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#setObjectSpeed",
          "type": "function"
        },
        "index": {
          "description": "changes the speed of an object given its new speed",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "setObjectSpeed",
          "normalized": "(GLdouble,GLdouble)-\u003eGameObject a-\u003eIOGame b a c d()",
          "package": "FunGEn",
          "partial": "Object Speed",
          "signature": "(GLdouble,GLdouble)-\u003eGameObject s-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:setObjectSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the current timing strategy.\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "setRefresh",
          "package": "FunGEn",
          "signature": "RefreshType -\u003e StillDownHandler -\u003e IO ()",
          "source": "src/Graphics-UI-Fungen-Timer.html#setRefresh",
          "type": "function"
        },
        "index": {
          "description": "Change the current timing strategy",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "setRefresh",
          "normalized": "RefreshType-\u003eStillDownHandler-\u003eIO()",
          "package": "FunGEn",
          "partial": "Refresh",
          "signature": "RefreshType-\u003eStillDownHandler-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:setRefresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "shift",
          "package": "FunGEn",
          "signature": "KeyState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "shift",
          "package": "FunGEn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "shiftLeft",
          "package": "FunGEn",
          "signature": "String -\u003e Int -\u003e String",
          "source": "src/Graphics-UI-Fungen-Util.html#shiftLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "shiftLeft",
          "normalized": "String-\u003eInt-\u003eString",
          "package": "FunGEn",
          "partial": "Left",
          "signature": "String-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:shiftLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshows the frame rate (or frame per seconds) \n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "showFPS",
          "package": "FunGEn",
          "signature": "BitmapFont -\u003e (GLdouble, GLdouble) -\u003e GLclampf -\u003e GLclampf -\u003e GLclampf -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#showFPS",
          "type": "function"
        },
        "index": {
          "description": "shows the frame rate or frame per seconds",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "showFPS",
          "normalized": "BitmapFont-\u003e(GLdouble,GLdouble)-\u003eGLclampf-\u003eGLclampf-\u003eGLclampf-\u003eIOGame a b c d()",
          "package": "FunGEn",
          "partial": "FPS",
          "signature": "BitmapFont-\u003e(GLdouble,GLdouble)-\u003eGLclampf-\u003eGLclampf-\u003eGLclampf-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:showFPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "texCoord2",
          "package": "FunGEn",
          "signature": "GLdouble -\u003e GLdouble -\u003e IO ()",
          "source": "src/Graphics-UI-Fungen-Util.html#texCoord2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "texCoord2",
          "normalized": "GLdouble-\u003eGLdouble-\u003eIO()",
          "package": "FunGEn",
          "partial": "Coord",
          "signature": "GLdouble-\u003eGLdouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:texCoord2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "texStuff",
          "package": "FunGEn",
          "signature": "[TextureObject] -\u003e [AwbfBitmap] -\u003e IO ()",
          "source": "src/Graphics-UI-Fungen-Util.html#texStuff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "texStuff",
          "normalized": "[TextureObject]-\u003e[AwbfBitmap]-\u003eIO()",
          "package": "FunGEn",
          "partial": "Stuff",
          "signature": "[TextureObject]-\u003e[AwbfBitmap]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:texStuff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a PreTextureMap\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "textureMap",
          "package": "FunGEn",
          "signature": "Int -\u003e GLdouble -\u003e GLdouble -\u003e GLdouble -\u003e GLdouble -\u003e GameMap t",
          "source": "src/Graphics-UI-Fungen-Map.html#textureMap",
          "type": "function"
        },
        "index": {
          "description": "creates PreTextureMap",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "textureMap",
          "normalized": "Int-\u003eGLdouble-\u003eGLdouble-\u003eGLdouble-\u003eGLdouble-\u003eGameMap a",
          "package": "FunGEn",
          "partial": "Map",
          "signature": "Int-\u003eGLdouble-\u003eGLdouble-\u003eGLdouble-\u003eGLdouble-\u003eGameMap t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:textureMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a PreTileMap, cheking if the tileMatrix given is valid and automatically defining the map size\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "tileMap",
          "package": "FunGEn",
          "signature": "TileMatrix t -\u003e GLdouble -\u003e GLdouble -\u003e GameMap t",
          "source": "src/Graphics-UI-Fungen-Map.html#tileMap",
          "type": "function"
        },
        "index": {
          "description": "creates PreTileMap cheking if the tileMatrix given is valid and automatically defining the map size",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "tileMap",
          "normalized": "TileMatrix a-\u003eGLdouble-\u003eGLdouble-\u003eGameMap a",
          "package": "FunGEn",
          "partial": "Map",
          "signature": "TileMatrix t-\u003eGLdouble-\u003eGLdouble-\u003eGameMap t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:tileMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "toBinary",
          "package": "FunGEn",
          "signature": "Int -\u003e String",
          "source": "src/Graphics-UI-Fungen-Util.html#toBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "toBinary",
          "normalized": "Int-\u003eString",
          "package": "FunGEn",
          "partial": "Binary",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:toBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "toDecimal",
          "package": "FunGEn",
          "signature": "String -\u003e GLsizei",
          "source": "src/Graphics-UI-Fungen-Util.html#toDecimal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "toDecimal",
          "normalized": "String-\u003eGLsizei",
          "package": "FunGEn",
          "partial": "Decimal",
          "signature": "String-\u003eGLsizei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:toDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "toRad",
          "package": "FunGEn",
          "signature": "Float -\u003e Float",
          "source": "src/Graphics-UI-Fungen-Util.html#toRad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "toRad",
          "normalized": "Float-\u003eFloat",
          "package": "FunGEn",
          "partial": "Rad",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:toRad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "unless",
          "package": "FunGEn",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "source": "src/Graphics-UI-Fungen-Util.html#unless",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "unless",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "FunGEn",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "updateCurrentIndex",
          "package": "FunGEn",
          "signature": "GameMap t -\u003e Int -\u003e GameMap t",
          "source": "src/Graphics-UI-Fungen-Map.html#updateCurrentIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "updateCurrentIndex",
          "normalized": "GameMap a-\u003eInt-\u003eGameMap a",
          "package": "FunGEn",
          "partial": "Current Index",
          "signature": "GameMap t-\u003eInt-\u003eGameMap t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:updateCurrentIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "updateCurrentMap",
          "package": "FunGEn",
          "signature": "GameMap t -\u003e GameMap t -\u003e GameMap t",
          "source": "src/Graphics-UI-Fungen-Map.html#updateCurrentMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "updateCurrentMap",
          "normalized": "GameMap a-\u003eGameMap a-\u003eGameMap a",
          "package": "FunGEn",
          "partial": "Current Map",
          "signature": "GameMap t-\u003eGameMap t-\u003eGameMap t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:updateCurrentMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "updateObject",
          "package": "FunGEn",
          "signature": "(GameObject t -\u003e GameObject t) -\u003e Integer -\u003e String -\u003e [ObjectManager t] -\u003e [ObjectManager t]",
          "source": "src/Graphics-UI-Fungen-Objects.html#updateObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "updateObject",
          "normalized": "(GameObject a-\u003eGameObject a)-\u003eInteger-\u003eString-\u003e[ObjectManager a]-\u003e[ObjectManager a]",
          "package": "FunGEn",
          "partial": "Object",
          "signature": "(GameObject t-\u003eGameObject t)-\u003eInteger-\u003eString-\u003e[ObjectManager t]-\u003e[ObjectManager t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:updateObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "updateObjectAsleep",
          "package": "FunGEn",
          "signature": "Bool -\u003e GameObject t -\u003e GameObject t",
          "source": "src/Graphics-UI-Fungen-Objects.html#updateObjectAsleep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "updateObjectAsleep",
          "normalized": "Bool-\u003eGameObject a-\u003eGameObject a",
          "package": "FunGEn",
          "partial": "Object Asleep",
          "signature": "Bool-\u003eGameObject t-\u003eGameObject t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:updateObjectAsleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "updateObjectAttribute",
          "package": "FunGEn",
          "signature": "t -\u003e GameObject t -\u003e GameObject t",
          "source": "src/Graphics-UI-Fungen-Objects.html#updateObjectAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "updateObjectAttribute",
          "normalized": "a-\u003eGameObject a-\u003eGameObject a",
          "package": "FunGEn",
          "partial": "Object Attribute",
          "signature": "t-\u003eGameObject t-\u003eGameObject t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:updateObjectAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "updateObjectPicture",
          "package": "FunGEn",
          "signature": "Int -\u003e Int -\u003e GameObject t -\u003e GameObject t",
          "source": "src/Graphics-UI-Fungen-Objects.html#updateObjectPicture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "updateObjectPicture",
          "normalized": "Int-\u003eInt-\u003eGameObject a-\u003eGameObject a",
          "package": "FunGEn",
          "partial": "Object Picture",
          "signature": "Int-\u003eInt-\u003eGameObject t-\u003eGameObject t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:updateObjectPicture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "updateObjectPosition",
          "package": "FunGEn",
          "signature": "(GLdouble, GLdouble) -\u003e GameObject t -\u003e GameObject t",
          "source": "src/Graphics-UI-Fungen-Objects.html#updateObjectPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "updateObjectPosition",
          "normalized": "(GLdouble,GLdouble)-\u003eGameObject a-\u003eGameObject a",
          "package": "FunGEn",
          "partial": "Object Position",
          "signature": "(GLdouble,GLdouble)-\u003eGameObject t-\u003eGameObject t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:updateObjectPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "updateObjectSize",
          "package": "FunGEn",
          "signature": "(GLdouble, GLdouble) -\u003e GameObject t -\u003e GameObject t",
          "source": "src/Graphics-UI-Fungen-Objects.html#updateObjectSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "updateObjectSize",
          "normalized": "(GLdouble,GLdouble)-\u003eGameObject a-\u003eGameObject a",
          "package": "FunGEn",
          "partial": "Object Size",
          "signature": "(GLdouble,GLdouble)-\u003eGameObject t-\u003eGameObject t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:updateObjectSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "updateObjectSpeed",
          "package": "FunGEn",
          "signature": "(GLdouble, GLdouble) -\u003e GameObject t -\u003e GameObject t",
          "source": "src/Graphics-UI-Fungen-Objects.html#updateObjectSpeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "updateObjectSpeed",
          "normalized": "(GLdouble,GLdouble)-\u003eGameObject a-\u003eGameObject a",
          "package": "FunGEn",
          "partial": "Object Speed",
          "signature": "(GLdouble,GLdouble)-\u003eGameObject t-\u003eGameObject t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:updateObjectSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "vertex3",
          "package": "FunGEn",
          "signature": "GLdouble -\u003e GLdouble -\u003e GLdouble -\u003e IO ()",
          "source": "src/Graphics-UI-Fungen-Util.html#vertex3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "vertex3",
          "normalized": "GLdouble-\u003eGLdouble-\u003eGLdouble-\u003eIO()",
          "package": "FunGEn",
          "signature": "GLdouble-\u003eGLdouble-\u003eGLdouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:vertex3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelay for N  seconds while continuing essential game functions\n\u003c/p\u003e",
          "module": "Graphics.UI.Fungen",
          "name": "wait",
          "package": "FunGEn",
          "signature": "Int -\u003e IOGame t s u v ()",
          "source": "src/Graphics-UI-Fungen-Game.html#wait",
          "type": "function"
        },
        "index": {
          "description": "delay for seconds while continuing essential game functions",
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "wait",
          "normalized": "Int-\u003eIOGame a b c d()",
          "package": "FunGEn",
          "signature": "Int-\u003eIOGame t s u v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Fungen",
          "name": "when",
          "package": "FunGEn",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "source": "src/Graphics-UI-Fungen-Util.html#when",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Fungen",
          "module": "Graphics.UI.Fungen",
          "name": "when",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "FunGEn",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-Fungen.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGLUT-based keyboard/mouse handling.\n\u003c/p\u003e\u003cp\u003eSven Panne 2000 \u003ca\u003eSven.Panne@informatik.uni-muenchen.de\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis provides a \u003ca\u003estill down\u003c/a\u003e event in addition to GLUT's key/mouse\nbutton up/down events, and manages bindings from input events to actions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.GLUT.Input",
          "name": "Input",
          "package": "FunGEn",
          "source": "src/Graphics-UI-GLUT-Input.html",
          "type": "module"
        },
        "index": {
          "description": "GLUT-based keyboard mouse handling Sven Panne Sven.Panne@informatik.uni-muenchen.de This provides still down event in addition to GLUT key mouse button up down events and manages bindings from input events to actions",
          "hierarchy": "Graphics UI GLUT Input",
          "module": "Graphics.UI.GLUT.Input",
          "name": "Input",
          "package": "FunGEn",
          "partial": "Input",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLUT.Input",
          "name": "InputHandler",
          "package": "FunGEn",
          "source": "src/Graphics-UI-GLUT-Input.html#InputHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI GLUT Input",
          "module": "Graphics.UI.GLUT.Input",
          "name": "InputHandler",
          "package": "FunGEn",
          "partial": "Input Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#t:InputHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalized view of keys\n\u003c/p\u003e",
          "module": "Graphics.UI.GLUT.Input",
          "name": "Key",
          "package": "FunGEn",
          "type": "data"
        },
        "index": {
          "description": "generalized view of keys",
          "hierarchy": "Graphics UI GLUT Input",
          "module": "Graphics.UI.GLUT.Input",
          "name": "Key",
          "package": "FunGEn",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLUT.Input",
          "name": "KeyBinder",
          "package": "FunGEn",
          "source": "src/Graphics-UI-GLUT-Input.html#KeyBinder",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI GLUT Input",
          "module": "Graphics.UI.GLUT.Input",
          "name": "KeyBinder",
          "package": "FunGEn",
          "partial": "Key Binder",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#t:KeyBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLUT.Input",
          "name": "KeyEvent",
          "package": "FunGEn",
          "source": "src/Graphics-UI-GLUT-Input.html#KeyEvent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI GLUT Input",
          "module": "Graphics.UI.GLUT.Input",
          "name": "KeyEvent",
          "package": "FunGEn",
          "partial": "Key Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#t:KeyEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLUT.Input",
          "name": "StillDownHandler",
          "package": "FunGEn",
          "source": "src/Graphics-UI-GLUT-Input.html#StillDownHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI GLUT Input",
          "module": "Graphics.UI.GLUT.Input",
          "name": "StillDownHandler",
          "package": "FunGEn",
          "partial": "Still Down Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#t:StillDownHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialise the input system, which keeps a list of input event to\n action bindings and executes the the proper actions automatically.\n Returns a function for adding bindings, and another which should be\n called periodically (eg from refresh) to trigger still-down actions.\n\u003c/p\u003e",
          "module": "Graphics.UI.GLUT.Input",
          "name": "glutInitInput",
          "package": "FunGEn",
          "signature": "IO (KeyBinder, StillDownHandler)",
          "source": "src/Graphics-UI-GLUT-Input.html#glutInitInput",
          "type": "function"
        },
        "index": {
          "description": "Initialise the input system which keeps list of input event to action bindings and executes the the proper actions automatically Returns function for adding bindings and another which should be called periodically eg from refresh to trigger still-down actions",
          "hierarchy": "Graphics UI GLUT Input",
          "module": "Graphics.UI.GLUT.Input",
          "name": "glutInitInput",
          "normalized": "IO(KeyBinder,StillDownHandler)",
          "package": "FunGEn",
          "partial": "Init Input",
          "signature": "IO(KeyBinder,StillDownHandler)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FunGEn/docs/Graphics-UI-GLUT-Input.html#v:glutInitInput"
      }
    }
  ]
]