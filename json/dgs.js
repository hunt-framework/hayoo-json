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
        "word": "dgs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a quick and dirty interface to Dragon Go Server's robot interface, as\noutlined at \u003ca\u003ehttp://www.dragongoserver.net/faq.php?read=t&cat=215#Entry219\u003c/a\u003e.\nIt does almost no sanity-checking of things you send it, nor does it do very\nmuch error-checking on the things Dragon sends back.  Use with caution.\n\u003c/p\u003e\u003cp\u003eHere are some sample interactions from ghci, with a fictitious password:\n\u003c/p\u003e\u003cpre\u003e *Network.DGS\u003e browseDGS (silence \u003e\u003e login development \"smartypants\" \"password\")\n LoginSuccess\n *Network.DGS\u003e browseDGS (silence \u003e\u003e statusUID production 4155) \u003e\u003e= mapM_ print\n (453881,\"jedge42\",False,\"2009-12-21 03:14 GMT\",\"F: 30d 1h\")\n (532927,\"bartnix\",False,\"2009-12-20 06:06 GMT\",\"F: 21d 13h\")\n *Network.DGS\u003e browseDGS (silence \u003e\u003e statusUser production \"dmwit\") \u003e\u003e= mapM_ print\n (453881,\"jedge42\",False,\"2009-12-21 03:14 GMT\",\"F: 30d 1h\")\n (532927,\"bartnix\",False,\"2009-12-20 06:06 GMT\",\"F: 21d 13h\")\n *Network.DGS\u003e :{\n *Network.DGS| browseDGS $ do {\n *Network.DGS|   silence;\n *Network.DGS|   login development \"smartypants\" \"password\";\n *Network.DGS|   (_, (gid, _, black, _, _):_) \u003c- status development;\n *Network.DGS|   move development gid black (16, 18) (17, 16)\n *Network.DGS|   }\n *Network.DGS| :}\n MoveSuccess\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.DGS",
          "name": "DGS",
          "package": "dgs",
          "source": "src/Network-DGS.html",
          "type": "module"
        },
        "index": {
          "description": "This is quick and dirty interface to Dragon Go Server robot interface as outlined at http www.dragongoserver.net faq.php read cat Entry219 It does almost no sanity-checking of things you send it nor does it do very much error-checking on the things Dragon sends back Use with caution Here are some sample interactions from ghci with fictitious password Network.DGS browseDGS silence login development smartypants password LoginSuccess Network.DGS browseDGS silence statusUID production mapM print jedge42 False GMT bartnix False GMT Network.DGS browseDGS silence statusUser production dmwit mapM print jedge42 False GMT bartnix False GMT Network.DGS Network.DGS browseDGS do Network.DGS silence Network.DGS login development smartypants password Network.DGS gid black status development Network.DGS move development gid black Network.DGS Network.DGS MoveSuccess",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "DGS",
          "package": "dgs",
          "partial": "DGS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea convenient type synonym for HTTP's browser monad\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "DGS",
          "package": "dgs",
          "source": "src/Network-DGS.html#DGS",
          "type": "newtype"
        },
        "index": {
          "description": "convenient type synonym for HTTP browser monad",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "DGS",
          "package": "dgs",
          "partial": "DGS",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#t:DGS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(game ID, username of the opponent, current player is black?, date, time remaining)\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "Game",
          "package": "dgs",
          "source": "src/Network-DGS.html#Game",
          "type": "type"
        },
        "index": {
          "description": "game ID username of the opponent current player is black date time remaining",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "Game",
          "package": "dgs",
          "partial": "Game",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#t:Game"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DGS",
          "name": "LoginResult",
          "package": "dgs",
          "source": "src/Network-DGS.html#LoginResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "LoginResult",
          "package": "dgs",
          "partial": "Login Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#t:LoginResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(message ID, username of the sender, subject, date)\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "Message",
          "package": "dgs",
          "source": "src/Network-DGS.html#Message",
          "type": "type"
        },
        "index": {
          "description": "message ID username of the sender subject date",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "Message",
          "package": "dgs",
          "partial": "Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DGS",
          "name": "MoveResult",
          "package": "dgs",
          "source": "src/Network-DGS.html#MoveResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "MoveResult",
          "package": "dgs",
          "partial": "Move Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#t:MoveResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0-indexed x/y coordinates that start at the top left\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "Point",
          "package": "dgs",
          "source": "src/Network-DGS.html#Point",
          "type": "type"
        },
        "index": {
          "description": "indexed coordinates that start at the top left",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "Point",
          "package": "dgs",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DGS",
          "name": "DGS",
          "package": "dgs",
          "signature": "DGS",
          "source": "src/Network-DGS.html#DGS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "DGS",
          "package": "dgs",
          "partial": "DGS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:DGS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eor a bad game ID\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "DatabaseCorrupted",
          "package": "dgs",
          "signature": "DatabaseCorrupted",
          "source": "src/Network-DGS.html#MoveResult",
          "type": "function"
        },
        "index": {
          "description": "or bad game ID",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "DatabaseCorrupted",
          "package": "dgs",
          "partial": "Database Corrupted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:DatabaseCorrupted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eko, playing on top of another stone, playing off the board\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "IllegalPosition",
          "package": "dgs",
          "signature": "IllegalPosition",
          "source": "src/Network-DGS.html#MoveResult",
          "type": "function"
        },
        "index": {
          "description": "ko playing on top of another stone playing off the board",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "IllegalPosition",
          "package": "dgs",
          "partial": "Illegal Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:IllegalPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eit's a bug in the library if one of these ever gets built\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "LoginProblem",
          "package": "dgs",
          "signature": "LoginProblem String",
          "source": "src/Network-DGS.html#LoginResult",
          "type": "function"
        },
        "index": {
          "description": "it bug in the library if one of these ever gets built",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "LoginProblem",
          "package": "dgs",
          "partial": "Login Problem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:LoginProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DGS",
          "name": "LoginSuccess",
          "package": "dgs",
          "signature": "LoginSuccess",
          "source": "src/Network-DGS.html#LoginResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "LoginSuccess",
          "package": "dgs",
          "partial": "Login Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:LoginSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eor the previous move didn't match reality\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "MoveAlreadyPlayed",
          "package": "dgs",
          "signature": "MoveAlreadyPlayed",
          "source": "src/Network-DGS.html#MoveResult",
          "type": "function"
        },
        "index": {
          "description": "or the previous move didn match reality",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "MoveAlreadyPlayed",
          "package": "dgs",
          "partial": "Move Already Played",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:MoveAlreadyPlayed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eit's a bug in the library if one of these ever gets built\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "MoveProblem",
          "package": "dgs",
          "signature": "MoveProblem String",
          "source": "src/Network-DGS.html#MoveResult",
          "type": "function"
        },
        "index": {
          "description": "it bug in the library if one of these ever gets built",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "MoveProblem",
          "package": "dgs",
          "partial": "Move Problem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:MoveProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DGS",
          "name": "MoveSuccess",
          "package": "dgs",
          "signature": "MoveSuccess",
          "source": "src/Network-DGS.html#MoveResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "MoveSuccess",
          "package": "dgs",
          "partial": "Move Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:MoveSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DGS",
          "name": "NoGameNumber",
          "package": "dgs",
          "signature": "NoGameNumber",
          "source": "src/Network-DGS.html#MoveResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "NoGameNumber",
          "package": "dgs",
          "partial": "No Game Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:NoGameNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DGS",
          "name": "NotLoggedIn",
          "package": "dgs",
          "signature": "NotLoggedIn",
          "source": "src/Network-DGS.html#MoveResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "NotLoggedIn",
          "package": "dgs",
          "partial": "Not Logged In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:NotLoggedIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eor you're not playing in the game, or you claimed to be the wrong color\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "NotYourTurn",
          "package": "dgs",
          "signature": "NotYourTurn",
          "source": "src/Network-DGS.html#MoveResult",
          "type": "function"
        },
        "index": {
          "description": "or you re not playing in the game or you claimed to be the wrong color",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "NotYourTurn",
          "package": "dgs",
          "partial": "Not Your Turn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:NotYourTurn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DGS",
          "name": "WrongPassword",
          "package": "dgs",
          "signature": "WrongPassword",
          "source": "src/Network-DGS.html#LoginResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "WrongPassword",
          "package": "dgs",
          "partial": "Wrong Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:WrongPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DGS",
          "name": "WrongUsername",
          "package": "dgs",
          "signature": "WrongUsername",
          "source": "src/Network-DGS.html#LoginResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "WrongUsername",
          "package": "dgs",
          "partial": "Wrong Username",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:WrongUsername"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DGS",
          "name": "browseDGS",
          "package": "dgs",
          "signature": "DGS a -\u003e IO a",
          "source": "src/Network-DGS.html#browseDGS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "browseDGS",
          "normalized": "DGS a-\u003eIO a",
          "package": "dgs",
          "partial": "DGS",
          "signature": "DGS a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:browseDGS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe address of the development server, \u003ccode\u003e\"dragongoserver.sourceforge.net\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "development",
          "package": "dgs",
          "signature": "String",
          "source": "src/Network-DGS.html#development",
          "type": "function"
        },
        "index": {
          "description": "the address of the development server dragongoserver.sourceforge.net",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "development",
          "package": "dgs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:development"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esome commands either require you to be logged in, or will give additional\n information if you log in\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "login",
          "package": "dgs",
          "signature": "String-\u003e String-\u003e String-\u003e DGS LoginResult",
          "type": "function"
        },
        "index": {
          "description": "some commands either require you to be logged in or will give additional information if you log in",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "login",
          "normalized": "String-\u003eString-\u003eString-\u003eDGS LoginResult",
          "package": "dgs",
          "signature": "String-\u003eString-\u003eString-\u003eDGS LoginResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:login"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DGS",
          "name": "move",
          "package": "dgs",
          "signature": "String-\u003e Integer-\u003e Bool-\u003e Point-\u003e Point-\u003e DGS MoveResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "move",
          "normalized": "String-\u003eInteger-\u003eBool-\u003ePoint-\u003ePoint-\u003eDGS MoveResult",
          "package": "dgs",
          "signature": "String-\u003eInteger-\u003eBool-\u003ePoint-\u003ePoint-\u003eDGS MoveResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe address of the most well-known public server, \u003ccode\u003e\"www.dragongoserver.net\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "production",
          "package": "dgs",
          "signature": "String",
          "source": "src/Network-DGS.html#production",
          "type": "function"
        },
        "index": {
          "description": "the address of the most well-known public server www.dragongoserver.net",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "production",
          "package": "dgs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:production"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DGS",
          "name": "runDGS",
          "package": "dgs",
          "signature": "BrowserAction (HandleStream String) a",
          "source": "src/Network-DGS.html#DGS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "runDGS",
          "package": "dgs",
          "partial": "DGS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:runDGS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eyou can only get private comments if you are logged in; if you are not\n logged in, this will succeed, but a request for private comments will be\n ignored, and you'll get an SGF with only the public comments\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "sgf",
          "package": "dgs",
          "signature": "String-\u003e Integer-\u003e Bool-\u003e DGS String",
          "type": "function"
        },
        "index": {
          "description": "you can only get private comments if you are logged in if you are not logged in this will succeed but request for private comments will be ignored and you ll get an SGF with only the public comments",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "sgf",
          "normalized": "String-\u003eInteger-\u003eBool-\u003eDGS String",
          "package": "dgs",
          "signature": "String-\u003eInteger-\u003eBool-\u003eDGS String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:sgf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eby default, HTTP's browser chatters a lot on stdout; this action turns off\n the chatter\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "silence",
          "package": "dgs",
          "signature": "DGS ()",
          "source": "src/Network-DGS.html#silence",
          "type": "function"
        },
        "index": {
          "description": "by default HTTP browser chatters lot on stdout this action turns off the chatter",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "silence",
          "normalized": "DGS()",
          "package": "dgs",
          "signature": "DGS()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:silence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the inbox and games list of whoever is currently logged in; this will\n return \u003ccode\u003e([], [])\u003c/code\u003e if you are not logged in\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "status",
          "package": "dgs",
          "signature": "String-\u003e DGS ([Message], [Game])",
          "type": "function"
        },
        "index": {
          "description": "get the inbox and games list of whoever is currently logged in this will return if you are not logged in",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "status",
          "normalized": "String-\u003eDGS([Message],[Game])",
          "package": "dgs",
          "signature": "String-\u003eDGS([Message],[Game])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the games list of an arbitrary user; this will give the same results\n whether or not you are logged in\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "statusUID",
          "package": "dgs",
          "signature": "String-\u003e Integer-\u003e DGS [Game]",
          "type": "function"
        },
        "index": {
          "description": "get the games list of an arbitrary user this will give the same results whether or not you are logged in",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "statusUID",
          "normalized": "String-\u003eInteger-\u003eDGS[Game]",
          "package": "dgs",
          "partial": "UID",
          "signature": "String-\u003eInteger-\u003eDGS[Game]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:statusUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the games list of an arbitrary user this will give the same results\n whether or not you are logged in\n\u003c/p\u003e",
          "module": "Network.DGS",
          "name": "statusUser",
          "package": "dgs",
          "signature": "String-\u003e String-\u003e DGS [Game]",
          "type": "function"
        },
        "index": {
          "description": "get the games list of an arbitrary user this will give the same results whether or not you are logged in",
          "hierarchy": "Network DGS",
          "module": "Network.DGS",
          "name": "statusUser",
          "normalized": "String-\u003eString-\u003eDGS[Game]",
          "package": "dgs",
          "partial": "User",
          "signature": "String-\u003eString-\u003eDGS[Game]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:statusUser"
      }
    }
  ]
]