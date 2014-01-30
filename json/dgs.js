[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a quick and dirty interface to Dragon Go Server's robot interface, as\noutlined at \u003ca\u003ehttp://www.dragongoserver.net/faq.php?read=t&cat=215#Entry219\u003c/a\u003e.\nIt does almost no sanity-checking of things you send it, nor does it do very\nmuch error-checking on the things Dragon sends back.  Use with caution.\n\u003c/p\u003e\u003cp\u003eHere are some sample interactions from ghci, with a fictitious password:\n\u003c/p\u003e\u003cpre\u003e *Network.DGS\u003e browseDGS (silence \u003e\u003e login development \"smartypants\" \"password\")\n LoginSuccess\n *Network.DGS\u003e browseDGS (silence \u003e\u003e statusUID production 4155) \u003e\u003e= mapM_ print\n (453881,\"jedge42\",False,\"2009-12-21 03:14 GMT\",\"F: 30d 1h\")\n (532927,\"bartnix\",False,\"2009-12-20 06:06 GMT\",\"F: 21d 13h\")\n *Network.DGS\u003e browseDGS (silence \u003e\u003e statusUser production \"dmwit\") \u003e\u003e= mapM_ print\n (453881,\"jedge42\",False,\"2009-12-21 03:14 GMT\",\"F: 30d 1h\")\n (532927,\"bartnix\",False,\"2009-12-20 06:06 GMT\",\"F: 21d 13h\")\n *Network.DGS\u003e :{\n *Network.DGS| browseDGS $ do {\n *Network.DGS|   silence;\n *Network.DGS|   login development \"smartypants\" \"password\";\n *Network.DGS|   (_, (gid, _, black, _, _):_) \u003c- status development;\n *Network.DGS|   move development gid black (16, 18) (17, 16)\n *Network.DGS|   }\n *Network.DGS| :}\n MoveSuccess\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "module",
        "fct-source": "src/Network-DGS.html",
        "fct-type": "module",
        "title": "DGS"
      },
      "index": {
        "description": "This is quick and dirty interface to Dragon Go Server robot interface as outlined at http www.dragongoserver.net faq.php read cat Entry219 It does almost no sanity-checking of things you send it nor does it do very much error-checking on the things Dragon sends back Use with caution Here are some sample interactions from ghci with fictitious password Network.DGS browseDGS silence login development smartypants password LoginSuccess Network.DGS browseDGS silence statusUID production mapM print jedge42 False GMT bartnix False GMT Network.DGS browseDGS silence statusUser production dmwit mapM print jedge42 False GMT bartnix False GMT Network.DGS Network.DGS browseDGS do Network.DGS silence Network.DGS login development smartypants password Network.DGS gid black status development Network.DGS move development gid black Network.DGS Network.DGS MoveSuccess",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "DGS",
        "normalized": "",
        "package": "dgs",
        "partial": "DGS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#t:DGS",
      "description": {
        "fct-descr": "\u003cp\u003ea convenient type synonym for HTTP's browser monad\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "newtype",
        "fct-source": "src/Network-DGS.html#DGS",
        "fct-type": "newtype",
        "title": "DGS"
      },
      "index": {
        "description": "convenient type synonym for HTTP browser monad",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "DGS",
        "normalized": "",
        "package": "dgs",
        "partial": "DGS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#t:Game",
      "description": {
        "fct-descr": "\u003cp\u003e(game ID, username of the opponent, current player is black?, date, time remaining)\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "type",
        "fct-source": "src/Network-DGS.html#Game",
        "fct-type": "type",
        "title": "Game"
      },
      "index": {
        "description": "game ID username of the opponent current player is black date time remaining",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "Game",
        "normalized": "",
        "package": "dgs",
        "partial": "Game",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#t:LoginResult",
      "description": {
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "data",
        "fct-source": "src/Network-DGS.html#LoginResult",
        "fct-type": "data",
        "title": "LoginResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "LoginResult",
        "normalized": "",
        "package": "dgs",
        "partial": "Login Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003e(message ID, username of the sender, subject, date)\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "type",
        "fct-source": "src/Network-DGS.html#Message",
        "fct-type": "type",
        "title": "Message"
      },
      "index": {
        "description": "message ID username of the sender subject date",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "Message",
        "normalized": "",
        "package": "dgs",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#t:MoveResult",
      "description": {
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "data",
        "fct-source": "src/Network-DGS.html#MoveResult",
        "fct-type": "data",
        "title": "MoveResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "MoveResult",
        "normalized": "",
        "package": "dgs",
        "partial": "Move Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003e0-indexed x/y coordinates that start at the top left\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "type",
        "fct-source": "src/Network-DGS.html#Point",
        "fct-type": "type",
        "title": "Point"
      },
      "index": {
        "description": "indexed coordinates that start at the top left",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "Point",
        "normalized": "",
        "package": "dgs",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:DGS",
      "description": {
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "DGS",
        "fct-source": "src/Network-DGS.html#DGS",
        "fct-type": "function",
        "title": "DGS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "DGS",
        "normalized": "",
        "package": "dgs",
        "partial": "DGS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:DatabaseCorrupted",
      "description": {
        "fct-descr": "\u003cp\u003eor a bad game ID\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "DatabaseCorrupted",
        "fct-source": "src/Network-DGS.html#MoveResult",
        "fct-type": "function",
        "title": "DatabaseCorrupted"
      },
      "index": {
        "description": "or bad game ID",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "DatabaseCorrupted",
        "normalized": "",
        "package": "dgs",
        "partial": "Database Corrupted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:IllegalPosition",
      "description": {
        "fct-descr": "\u003cp\u003eko, playing on top of another stone, playing off the board\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "IllegalPosition",
        "fct-source": "src/Network-DGS.html#MoveResult",
        "fct-type": "function",
        "title": "IllegalPosition"
      },
      "index": {
        "description": "ko playing on top of another stone playing off the board",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "IllegalPosition",
        "normalized": "",
        "package": "dgs",
        "partial": "Illegal Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:LoginProblem",
      "description": {
        "fct-descr": "\u003cp\u003eit's a bug in the library if one of these ever gets built\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "LoginProblem String",
        "fct-source": "src/Network-DGS.html#LoginResult",
        "fct-type": "function",
        "title": "LoginProblem"
      },
      "index": {
        "description": "it bug in the library if one of these ever gets built",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "LoginProblem",
        "normalized": "",
        "package": "dgs",
        "partial": "Login Problem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:LoginSuccess",
      "description": {
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "LoginSuccess",
        "fct-source": "src/Network-DGS.html#LoginResult",
        "fct-type": "function",
        "title": "LoginSuccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "LoginSuccess",
        "normalized": "",
        "package": "dgs",
        "partial": "Login Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:MoveAlreadyPlayed",
      "description": {
        "fct-descr": "\u003cp\u003eor the previous move didn't match reality\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "MoveAlreadyPlayed",
        "fct-source": "src/Network-DGS.html#MoveResult",
        "fct-type": "function",
        "title": "MoveAlreadyPlayed"
      },
      "index": {
        "description": "or the previous move didn match reality",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "MoveAlreadyPlayed",
        "normalized": "",
        "package": "dgs",
        "partial": "Move Already Played",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:MoveProblem",
      "description": {
        "fct-descr": "\u003cp\u003eit's a bug in the library if one of these ever gets built\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "MoveProblem String",
        "fct-source": "src/Network-DGS.html#MoveResult",
        "fct-type": "function",
        "title": "MoveProblem"
      },
      "index": {
        "description": "it bug in the library if one of these ever gets built",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "MoveProblem",
        "normalized": "",
        "package": "dgs",
        "partial": "Move Problem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:MoveSuccess",
      "description": {
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "MoveSuccess",
        "fct-source": "src/Network-DGS.html#MoveResult",
        "fct-type": "function",
        "title": "MoveSuccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "MoveSuccess",
        "normalized": "",
        "package": "dgs",
        "partial": "Move Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:NoGameNumber",
      "description": {
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "NoGameNumber",
        "fct-source": "src/Network-DGS.html#MoveResult",
        "fct-type": "function",
        "title": "NoGameNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "NoGameNumber",
        "normalized": "",
        "package": "dgs",
        "partial": "No Game Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:NotLoggedIn",
      "description": {
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "NotLoggedIn",
        "fct-source": "src/Network-DGS.html#MoveResult",
        "fct-type": "function",
        "title": "NotLoggedIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "NotLoggedIn",
        "normalized": "",
        "package": "dgs",
        "partial": "Not Logged In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:NotYourTurn",
      "description": {
        "fct-descr": "\u003cp\u003eor you're not playing in the game, or you claimed to be the wrong color\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "NotYourTurn",
        "fct-source": "src/Network-DGS.html#MoveResult",
        "fct-type": "function",
        "title": "NotYourTurn"
      },
      "index": {
        "description": "or you re not playing in the game or you claimed to be the wrong color",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "NotYourTurn",
        "normalized": "",
        "package": "dgs",
        "partial": "Not Your Turn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:WrongPassword",
      "description": {
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "WrongPassword",
        "fct-source": "src/Network-DGS.html#LoginResult",
        "fct-type": "function",
        "title": "WrongPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "WrongPassword",
        "normalized": "",
        "package": "dgs",
        "partial": "Wrong Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:WrongUsername",
      "description": {
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "WrongUsername",
        "fct-source": "src/Network-DGS.html#LoginResult",
        "fct-type": "function",
        "title": "WrongUsername"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "WrongUsername",
        "normalized": "",
        "package": "dgs",
        "partial": "Wrong Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:browseDGS",
      "description": {
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "DGS a -\u003e IO a",
        "fct-source": "src/Network-DGS.html#browseDGS",
        "fct-type": "function",
        "title": "browseDGS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "browseDGS",
        "normalized": "DGS a-\u003eIO a",
        "package": "dgs",
        "partial": "DGS",
        "signature": "DGS a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:development",
      "description": {
        "fct-descr": "\u003cp\u003ethe address of the development server, \u003ccode\u003e\"dragongoserver.sourceforge.net\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "String",
        "fct-source": "src/Network-DGS.html#development",
        "fct-type": "function",
        "title": "development"
      },
      "index": {
        "description": "the address of the development server dragongoserver.sourceforge.net",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "development",
        "normalized": "",
        "package": "dgs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:login",
      "description": {
        "fct-descr": "\u003cp\u003esome commands either require you to be logged in, or will give additional\n information if you log in\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "String-\u003e String-\u003e String-\u003e DGS LoginResult",
        "fct-type": "function",
        "title": "login"
      },
      "index": {
        "description": "some commands either require you to be logged in or will give additional information if you log in",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "login",
        "normalized": "String-\u003eString-\u003eString-\u003eDGS LoginResult",
        "package": "dgs",
        "partial": "",
        "signature": "String-\u003eString-\u003eString-\u003eDGS LoginResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:move",
      "description": {
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "String-\u003e Integer-\u003e Bool-\u003e Point-\u003e Point-\u003e DGS MoveResult",
        "fct-type": "function",
        "title": "move"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "move",
        "normalized": "String-\u003eInteger-\u003eBool-\u003ePoint-\u003ePoint-\u003eDGS MoveResult",
        "package": "dgs",
        "partial": "",
        "signature": "String-\u003eInteger-\u003eBool-\u003ePoint-\u003ePoint-\u003eDGS MoveResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:production",
      "description": {
        "fct-descr": "\u003cp\u003ethe address of the most well-known public server, \u003ccode\u003e\"www.dragongoserver.net\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "String",
        "fct-source": "src/Network-DGS.html#production",
        "fct-type": "function",
        "title": "production"
      },
      "index": {
        "description": "the address of the most well-known public server www.dragongoserver.net",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "production",
        "normalized": "",
        "package": "dgs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:runDGS",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "BrowserAction (HandleStream String) a",
        "fct-source": "src/Network-DGS.html#DGS",
        "fct-type": "function",
        "title": "runDGS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "runDGS",
        "normalized": "",
        "package": "dgs",
        "partial": "DGS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:sgf",
      "description": {
        "fct-descr": "\u003cp\u003eyou can only get private comments if you are logged in; if you are not\n logged in, this will succeed, but a request for private comments will be\n ignored, and you'll get an SGF with only the public comments\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "String-\u003e Integer-\u003e Bool-\u003e DGS String",
        "fct-type": "function",
        "title": "sgf"
      },
      "index": {
        "description": "you can only get private comments if you are logged in if you are not logged in this will succeed but request for private comments will be ignored and you ll get an SGF with only the public comments",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "sgf",
        "normalized": "String-\u003eInteger-\u003eBool-\u003eDGS String",
        "package": "dgs",
        "partial": "",
        "signature": "String-\u003eInteger-\u003eBool-\u003eDGS String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:silence",
      "description": {
        "fct-descr": "\u003cp\u003eby default, HTTP's browser chatters a lot on stdout; this action turns off\n the chatter\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "DGS ()",
        "fct-source": "src/Network-DGS.html#silence",
        "fct-type": "function",
        "title": "silence"
      },
      "index": {
        "description": "by default HTTP browser chatters lot on stdout this action turns off the chatter",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "silence",
        "normalized": "DGS()",
        "package": "dgs",
        "partial": "",
        "signature": "DGS()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:status",
      "description": {
        "fct-descr": "\u003cp\u003eget the inbox and games list of whoever is currently logged in; this will\n return \u003ccode\u003e([], [])\u003c/code\u003e if you are not logged in\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "String-\u003e DGS ([Message], [Game])",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "get the inbox and games list of whoever is currently logged in this will return if you are not logged in",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "status",
        "normalized": "String-\u003eDGS([Message],[Game])",
        "package": "dgs",
        "partial": "",
        "signature": "String-\u003eDGS([Message],[Game])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:statusUID",
      "description": {
        "fct-descr": "\u003cp\u003eget the games list of an arbitrary user; this will give the same results\n whether or not you are logged in\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "String-\u003e Integer-\u003e DGS [Game]",
        "fct-type": "function",
        "title": "statusUID"
      },
      "index": {
        "description": "get the games list of an arbitrary user this will give the same results whether or not you are logged in",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "statusUID",
        "normalized": "String-\u003eInteger-\u003eDGS[Game]",
        "package": "dgs",
        "partial": "UID",
        "signature": "String-\u003eInteger-\u003eDGS[Game]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dgs/docs/Network-DGS.html#v:statusUser",
      "description": {
        "fct-descr": "\u003cp\u003eget the games list of an arbitrary user this will give the same results\n whether or not you are logged in\n\u003c/p\u003e",
        "fct-module": "Network.DGS",
        "fct-package": "dgs",
        "fct-signature": "String-\u003e String-\u003e DGS [Game]",
        "fct-type": "function",
        "title": "statusUser"
      },
      "index": {
        "description": "get the games list of an arbitrary user this will give the same results whether or not you are logged in",
        "hierarchy": "Network DGS",
        "module": "Network.DGS",
        "name": "statusUser",
        "normalized": "String-\u003eString-\u003eDGS[Game]",
        "package": "dgs",
        "partial": "User",
        "signature": "String-\u003eString-\u003eDGS[Game]"
      }
    }
  }
]