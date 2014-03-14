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
        "word": "fastirc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module helps you with doing input and output on IRC connections\n or even log files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.FastIRC.IO",
          "name": "IO",
          "package": "fastirc",
          "source": "src/Network-FastIRC-IO.html",
          "type": "module"
        },
        "index": {
          "description": "This module helps you with doing input and output on IRC connections or even log files",
          "hierarchy": "Network FastIRC IO",
          "module": "Network.FastIRC.IO",
          "name": "IO",
          "package": "fastirc",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an IRC message string.\n\u003c/p\u003e",
          "module": "Network.FastIRC.IO",
          "name": "hGetIRCLine",
          "package": "fastirc",
          "signature": "Handle -\u003e IO MsgString",
          "source": "src/Network-FastIRC-IO.html#hGetIRCLine",
          "type": "function"
        },
        "index": {
          "description": "Read an IRC message string",
          "hierarchy": "Network FastIRC IO",
          "module": "Network.FastIRC.IO",
          "name": "hGetIRCLine",
          "normalized": "Handle-\u003eIO MsgString",
          "package": "fastirc",
          "partial": "Get IRCLine",
          "signature": "Handle-\u003eIO MsgString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-IO.html#v:hGetIRCLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next valid IRC message.\n\u003c/p\u003e",
          "module": "Network.FastIRC.IO",
          "name": "hGetMessage",
          "package": "fastirc",
          "signature": "Handle -\u003e IO Message",
          "source": "src/Network-FastIRC-IO.html#hGetMessage",
          "type": "function"
        },
        "index": {
          "description": "Read the next valid IRC message",
          "hierarchy": "Network FastIRC IO",
          "module": "Network.FastIRC.IO",
          "name": "hGetMessage",
          "normalized": "Handle-\u003eIO Message",
          "package": "fastirc",
          "partial": "Get Message",
          "signature": "Handle-\u003eIO Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-IO.html#v:hGetMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an IRC command with no origin.\n\u003c/p\u003e",
          "module": "Network.FastIRC.IO",
          "name": "hPutCommand",
          "package": "fastirc",
          "signature": "Handle -\u003e Command -\u003e IO ()",
          "source": "src/Network-FastIRC-IO.html#hPutCommand",
          "type": "function"
        },
        "index": {
          "description": "Write an IRC command with no origin",
          "hierarchy": "Network FastIRC IO",
          "module": "Network.FastIRC.IO",
          "name": "hPutCommand",
          "normalized": "Handle-\u003eCommand-\u003eIO()",
          "package": "fastirc",
          "partial": "Put Command",
          "signature": "Handle-\u003eCommand-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-IO.html#v:hPutCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an IRC message.\n\u003c/p\u003e",
          "module": "Network.FastIRC.IO",
          "name": "hPutMessage",
          "package": "fastirc",
          "signature": "Handle -\u003e Message -\u003e IO ()",
          "source": "src/Network-FastIRC-IO.html#hPutMessage",
          "type": "function"
        },
        "index": {
          "description": "Write an IRC message",
          "hierarchy": "Network FastIRC IO",
          "module": "Network.FastIRC.IO",
          "name": "hPutMessage",
          "normalized": "Handle-\u003eMessage-\u003eIO()",
          "package": "fastirc",
          "partial": "Put Message",
          "signature": "Handle-\u003eMessage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-IO.html#v:hPutMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser and printer for IRC messages.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.FastIRC.Messages",
          "name": "Messages",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Messages.html",
          "type": "module"
        },
        "index": {
          "description": "Parser and printer for IRC messages",
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "Messages",
          "package": "fastirc",
          "partial": "Messages",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for IRC commands.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Messages",
          "name": "Command",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "data"
        },
        "index": {
          "description": "Data type for IRC commands",
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "Command",
          "package": "fastirc",
          "partial": "Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for IRC messages.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Messages",
          "name": "Message",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Messages.html#Message",
          "type": "data"
        },
        "index": {
          "description": "Data type for IRC messages",
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "Message",
          "package": "fastirc",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "JoinCmd",
          "package": "fastirc",
          "signature": "JoinCmd (Map ChannelName (Maybe ChannelKey))",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "JoinCmd",
          "package": "fastirc",
          "partial": "Join Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:JoinCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "KickCmd",
          "package": "fastirc",
          "signature": "KickCmd (Set ChannelName) (Set NickName) (Maybe CommandArg)",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "KickCmd",
          "package": "fastirc",
          "partial": "Kick Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:KickCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "Message",
          "package": "fastirc",
          "signature": "Message",
          "source": "src/Network-FastIRC-Messages.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "Message",
          "package": "fastirc",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "ModeCmd",
          "package": "fastirc",
          "signature": "ModeCmd (Maybe (TargetName, CommandArg, [CommandArg]))",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "ModeCmd",
          "normalized": "ModeCmd(Maybe(TargetName,CommandArg,[CommandArg]))",
          "package": "fastirc",
          "partial": "Mode Cmd",
          "signature": "ModeCmd(Maybe(TargetName,CommandArg,[CommandArg]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:ModeCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "NickCmd",
          "package": "fastirc",
          "signature": "NickCmd NickName (Maybe Int)",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "NickCmd",
          "package": "fastirc",
          "partial": "Nick Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:NickCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "NoticeCmd",
          "package": "fastirc",
          "signature": "NoticeCmd (Set TargetName) CommandArg",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "NoticeCmd",
          "package": "fastirc",
          "partial": "Notice Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:NoticeCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary numeric command.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Messages",
          "name": "NumericCmd",
          "package": "fastirc",
          "signature": "NumericCmd Integer [CommandArg]",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "description": "Arbitrary numeric command",
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "NumericCmd",
          "normalized": "NumericCmd Integer[CommandArg]",
          "package": "fastirc",
          "partial": "Numeric Cmd",
          "signature": "NumericCmd Integer[CommandArg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:NumericCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "PartCmd",
          "package": "fastirc",
          "signature": "PartCmd (Set ChannelName) (Maybe CommandArg)",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "PartCmd",
          "package": "fastirc",
          "partial": "Part Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:PartCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "PassCmd",
          "package": "fastirc",
          "signature": "PassCmd CommandArg",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "PassCmd",
          "package": "fastirc",
          "partial": "Pass Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:PassCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "PingCmd",
          "package": "fastirc",
          "signature": "PingCmd ServerName (Maybe ServerName)",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "PingCmd",
          "package": "fastirc",
          "partial": "Ping Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:PingCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "PongCmd",
          "package": "fastirc",
          "signature": "PongCmd ServerName (Maybe ServerName)",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "PongCmd",
          "package": "fastirc",
          "partial": "Pong Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:PongCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "PrivMsgCmd",
          "package": "fastirc",
          "signature": "PrivMsgCmd (Set TargetName) CommandArg",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "PrivMsgCmd",
          "package": "fastirc",
          "partial": "Priv Msg Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:PrivMsgCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "QuitCmd",
          "package": "fastirc",
          "signature": "QuitCmd (Maybe CommandArg)",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "QuitCmd",
          "package": "fastirc",
          "partial": "Quit Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:QuitCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary string command.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Messages",
          "name": "StringCmd",
          "package": "fastirc",
          "signature": "StringCmd CommandName [CommandArg]",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "description": "Arbitrary string command",
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "StringCmd",
          "normalized": "StringCmd CommandName[CommandArg]",
          "package": "fastirc",
          "partial": "String Cmd",
          "signature": "StringCmd CommandName[CommandArg]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:StringCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "TopicCmd",
          "package": "fastirc",
          "signature": "TopicCmd ChannelName (Maybe CommandArg)",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "TopicCmd",
          "package": "fastirc",
          "partial": "Topic Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:TopicCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Messages",
          "name": "UserCmd",
          "package": "fastirc",
          "signature": "UserCmd UserName CommandArg CommandArg CommandArg",
          "source": "src/Network-FastIRC-Messages.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "UserCmd",
          "package": "fastirc",
          "partial": "User Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:UserCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for IRC commands and their arguments.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Messages",
          "name": "commandParser",
          "package": "fastirc",
          "signature": "Parser Command",
          "source": "src/Network-FastIRC-Messages.html#commandParser",
          "type": "function"
        },
        "index": {
          "description": "Parser for IRC commands and their arguments",
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "commandParser",
          "package": "fastirc",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:commandParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for IRC messages.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Messages",
          "name": "messageParser",
          "package": "fastirc",
          "signature": "Parser Message",
          "source": "src/Network-FastIRC-Messages.html#messageParser",
          "type": "function"
        },
        "index": {
          "description": "Parser for IRC messages",
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "messageParser",
          "package": "fastirc",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:messageParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage command or numeric.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Messages",
          "name": "msgCommand",
          "package": "fastirc",
          "signature": "Command",
          "source": "src/Network-FastIRC-Messages.html#Message",
          "type": "function"
        },
        "index": {
          "description": "Message command or numeric",
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "msgCommand",
          "package": "fastirc",
          "partial": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:msgCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage origin (user/server).\n\u003c/p\u003e",
          "module": "Network.FastIRC.Messages",
          "name": "msgOrigin",
          "package": "fastirc",
          "signature": "(Maybe UserSpec)",
          "source": "src/Network-FastIRC-Messages.html#Message",
          "type": "function"
        },
        "index": {
          "description": "Message origin user server",
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "msgOrigin",
          "package": "fastirc",
          "partial": "Origin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:msgOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003emessageParser\u003c/a\u003e\u003c/code\u003e parser.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Messages",
          "name": "readMessage",
          "package": "fastirc",
          "signature": "MsgString -\u003e Maybe Message",
          "source": "src/Network-FastIRC-Messages.html#readMessage",
          "type": "function"
        },
        "index": {
          "description": "Run the messageParser parser",
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "readMessage",
          "normalized": "MsgString-\u003eMaybe Message",
          "package": "fastirc",
          "partial": "Message",
          "signature": "MsgString-\u003eMaybe Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:readMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eCommand\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  If you need to specify an\n origin for the command, you should use \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e together with\n \u003ccode\u003e\u003ca\u003eshowMessage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Messages",
          "name": "showCommand",
          "package": "fastirc",
          "signature": "Command -\u003e MsgString",
          "source": "src/Network-FastIRC-Messages.html#showCommand",
          "type": "function"
        },
        "index": {
          "description": "Turn Command into ByteString If you need to specify an origin for the command you should use Message together with showMessage",
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "showCommand",
          "normalized": "Command-\u003eMsgString",
          "package": "fastirc",
          "partial": "Command",
          "signature": "Command-\u003eMsgString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:showCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Messages",
          "name": "showMessage",
          "package": "fastirc",
          "signature": "Message -\u003e MsgString",
          "source": "src/Network-FastIRC-Messages.html#showMessage",
          "type": "function"
        },
        "index": {
          "description": "Turn Message into ByteString",
          "hierarchy": "Network FastIRC Messages",
          "module": "Network.FastIRC.Messages",
          "name": "showMessage",
          "normalized": "Message-\u003eMsgString",
          "package": "fastirc",
          "partial": "Message",
          "signature": "Message-\u003eMsgString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Messages.html#v:showMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for dealing with sets of IRC servers.  Note that servers\n are compared case-insensitively.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.FastIRC.ServerSet",
          "name": "ServerSet",
          "package": "fastirc",
          "source": "src/Network-FastIRC-ServerSet.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for dealing with sets of IRC servers Note that servers are compared case-insensitively",
          "hierarchy": "Network FastIRC ServerSet",
          "module": "Network.FastIRC.ServerSet",
          "name": "ServerSet",
          "package": "fastirc",
          "partial": "Server Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-ServerSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of servers.  This data type uses \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e internally, but\n the strings are handled case-insensitively.\n\u003c/p\u003e",
          "module": "Network.FastIRC.ServerSet",
          "name": "ServerSet",
          "package": "fastirc",
          "source": "src/Network-FastIRC-ServerSet.html#ServerSet",
          "type": "data"
        },
        "index": {
          "description": "set of servers This data type uses Set internally but the strings are handled case-insensitively",
          "hierarchy": "Network FastIRC ServerSet",
          "module": "Network.FastIRC.ServerSet",
          "name": "ServerSet",
          "package": "fastirc",
          "partial": "Server Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-ServerSet.html#t:ServerSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a server to a \u003ccode\u003e\u003ca\u003eServerSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.FastIRC.ServerSet",
          "name": "addServer",
          "package": "fastirc",
          "signature": "ServerName -\u003e ServerSet -\u003e ServerSet",
          "source": "src/Network-FastIRC-ServerSet.html#addServer",
          "type": "function"
        },
        "index": {
          "description": "Add server to ServerSet",
          "hierarchy": "Network FastIRC ServerSet",
          "module": "Network.FastIRC.ServerSet",
          "name": "addServer",
          "normalized": "ServerName-\u003eServerSet-\u003eServerSet",
          "package": "fastirc",
          "partial": "Server",
          "signature": "ServerName-\u003eServerSet-\u003eServerSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-ServerSet.html#v:addServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a server from a \u003ccode\u003e\u003ca\u003eServerSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.FastIRC.ServerSet",
          "name": "delServer",
          "package": "fastirc",
          "signature": "ServerName -\u003e ServerSet -\u003e ServerSet",
          "source": "src/Network-FastIRC-ServerSet.html#delServer",
          "type": "function"
        },
        "index": {
          "description": "Remove server from ServerSet",
          "hierarchy": "Network FastIRC ServerSet",
          "module": "Network.FastIRC.ServerSet",
          "name": "delServer",
          "normalized": "ServerName-\u003eServerSet-\u003eServerSet",
          "package": "fastirc",
          "partial": "Server",
          "signature": "ServerName-\u003eServerSet-\u003eServerSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-ServerSet.html#v:delServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty set of servers.\n\u003c/p\u003e",
          "module": "Network.FastIRC.ServerSet",
          "name": "emptyServers",
          "package": "fastirc",
          "signature": "ServerSet",
          "source": "src/Network-FastIRC-ServerSet.html#emptyServers",
          "type": "function"
        },
        "index": {
          "description": "Empty set of servers",
          "hierarchy": "Network FastIRC ServerSet",
          "module": "Network.FastIRC.ServerSet",
          "name": "emptyServers",
          "package": "fastirc",
          "partial": "Servers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-ServerSet.html#v:emptyServers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether specified server is in the set.\n\u003c/p\u003e",
          "module": "Network.FastIRC.ServerSet",
          "name": "isServer",
          "package": "fastirc",
          "signature": "ServerName -\u003e ServerSet -\u003e Bool",
          "source": "src/Network-FastIRC-ServerSet.html#isServer",
          "type": "function"
        },
        "index": {
          "description": "Check whether specified server is in the set",
          "hierarchy": "Network FastIRC ServerSet",
          "module": "Network.FastIRC.ServerSet",
          "name": "isServer",
          "normalized": "ServerName-\u003eServerSet-\u003eBool",
          "package": "fastirc",
          "partial": "Server",
          "signature": "ServerName-\u003eServerSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-ServerSet.html#v:isServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild from list.\n\u003c/p\u003e",
          "module": "Network.FastIRC.ServerSet",
          "name": "serversFromList",
          "package": "fastirc",
          "signature": "[ServerName] -\u003e ServerSet",
          "source": "src/Network-FastIRC-ServerSet.html#serversFromList",
          "type": "function"
        },
        "index": {
          "description": "Build from list",
          "hierarchy": "Network FastIRC ServerSet",
          "module": "Network.FastIRC.ServerSet",
          "name": "serversFromList",
          "normalized": "[ServerName]-\u003eServerSet",
          "package": "fastirc",
          "partial": "From List",
          "signature": "[ServerName]-\u003eServerSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-ServerSet.html#v:serversFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to list.\n\u003c/p\u003e",
          "module": "Network.FastIRC.ServerSet",
          "name": "serversToList",
          "package": "fastirc",
          "signature": "ServerSet -\u003e [ServerName]",
          "source": "src/Network-FastIRC-ServerSet.html#serversToList",
          "type": "function"
        },
        "index": {
          "description": "Convert to list",
          "hierarchy": "Network FastIRC ServerSet",
          "module": "Network.FastIRC.ServerSet",
          "name": "serversToList",
          "normalized": "ServerSet-\u003e[ServerName]",
          "package": "fastirc",
          "partial": "To List",
          "signature": "ServerSet-\u003e[ServerName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-ServerSet.html#v:serversToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a framework for IRC client software.\n Essentially it consists of a dumb bot, which connects to and stays on\n an IRC server waiting for commands.\n\u003c/p\u003e\u003cp\u003eUsing the \u003ccode\u003e\u003ca\u003eonEvent\u003c/a\u003e\u003c/code\u003e function (or the convenience functions\n \u003ccode\u003e\u003ca\u003eonConnect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eonDisconnect\u003c/a\u003e\u003c/code\u003e, etc.) you can attach event handlers to\n certain events.  These event handlers are run in the \u003ccode\u003e\u003ca\u003eBot\u003c/a\u003e\u003c/code\u003e monad,\n which encapsulates the current state of the bot.\n\u003c/p\u003e\u003cp\u003ePlease note that even though unlikely you should expect that parts of\n this interface will be changed in future revisions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.FastIRC.Session",
          "name": "Session",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Session.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements framework for IRC client software Essentially it consists of dumb bot which connects to and stays on an IRC server waiting for commands Using the onEvent function or the convenience functions onConnect onDisconnect etc you can attach event handlers to certain events These event handlers are run in the Bot monad which encapsulates the current state of the bot Please note that even though unlikely you should expect that parts of this interface will be changed in future revisions",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "Session",
          "package": "fastirc",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBot monad.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "Bot",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Session.html#Bot",
          "type": "type"
        },
        "index": {
          "description": "Bot monad",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "Bot",
          "package": "fastirc",
          "partial": "Bot",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#t:Bot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommands to be sent to the bot.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "BotCommand",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Session.html#BotCommand",
          "type": "data"
        },
        "index": {
          "description": "Commands to be sent to the bot",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotCommand",
          "package": "fastirc",
          "partial": "Bot Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#t:BotCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuntime bot information.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "BotInfo",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Session.html#BotInfo",
          "type": "data"
        },
        "index": {
          "description": "Runtime bot information",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotInfo",
          "package": "fastirc",
          "partial": "Bot Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#t:BotInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBot session descriptor.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "BotSession",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Session.html#BotSession",
          "type": "data"
        },
        "index": {
          "description": "Bot session descriptor",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotSession",
          "package": "fastirc",
          "partial": "Bot Session",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#t:BotSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bot event.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "Event",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Session.html#Event",
          "type": "data"
        },
        "index": {
          "description": "bot event",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "Event",
          "package": "fastirc",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent handler identifier.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "EventHandler",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Session.html#EventHandler",
          "type": "type"
        },
        "index": {
          "description": "Event handler identifier",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "EventHandler",
          "package": "fastirc",
          "partial": "Event Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#t:EventHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters for an IRC client connection.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "Params",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Session.html#Params",
          "type": "data"
        },
        "index": {
          "description": "Parameters for an IRC client connection",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "Params",
          "package": "fastirc",
          "partial": "Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#t:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an event handler.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "BotAddHandler",
          "package": "fastirc",
          "signature": "BotAddHandler (EventHandler -\u003e IO ()) (Event -\u003e Bot ())",
          "source": "src/Network-FastIRC-Session.html#BotCommand",
          "type": "function"
        },
        "index": {
          "description": "Add an event handler",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotAddHandler",
          "normalized": "BotAddHandler(EventHandler-\u003eIO())(Event-\u003eBot())",
          "package": "fastirc",
          "partial": "Bot Add Handler",
          "signature": "BotAddHandler(EventHandler-\u003eIO())(Event-\u003eBot())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:BotAddHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDispatch simulated event.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "BotDispatch",
          "package": "fastirc",
          "signature": "BotDispatch Event",
          "source": "src/Network-FastIRC-Session.html#BotCommand",
          "type": "function"
        },
        "index": {
          "description": "Dispatch simulated event",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotDispatch",
          "package": "fastirc",
          "partial": "Bot Dispatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:BotDispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimulate an error.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "BotError",
          "package": "fastirc",
          "signature": "BotError String",
          "source": "src/Network-FastIRC-Session.html#BotCommand",
          "type": "function"
        },
        "index": {
          "description": "Simulate an error",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotError",
          "package": "fastirc",
          "partial": "Bot Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:BotError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Session",
          "name": "BotInfo",
          "package": "fastirc",
          "signature": "BotInfo",
          "source": "src/Network-FastIRC-Session.html#BotInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotInfo",
          "package": "fastirc",
          "partial": "Bot Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:BotInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a quit message.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "BotQuit",
          "package": "fastirc",
          "signature": "BotQuit (Maybe CommandArg)",
          "source": "src/Network-FastIRC-Session.html#BotCommand",
          "type": "function"
        },
        "index": {
          "description": "Send quit message",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotQuit",
          "package": "fastirc",
          "partial": "Bot Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:BotQuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimulate receiving of a message.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "BotRecv",
          "package": "fastirc",
          "signature": "BotRecv Message",
          "source": "src/Network-FastIRC-Session.html#BotCommand",
          "type": "function"
        },
        "index": {
          "description": "Simulate receiving of message",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotRecv",
          "package": "fastirc",
          "partial": "Bot Recv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:BotRecv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a command to the IRC server.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "BotSendCmd",
          "package": "fastirc",
          "signature": "BotSendCmd Command",
          "source": "src/Network-FastIRC-Session.html#BotCommand",
          "type": "function"
        },
        "index": {
          "description": "Send command to the IRC server",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotSendCmd",
          "package": "fastirc",
          "partial": "Bot Send Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:BotSendCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a message to the IRC server.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "BotSendMsg",
          "package": "fastirc",
          "signature": "BotSendMsg Message",
          "source": "src/Network-FastIRC-Session.html#BotCommand",
          "type": "function"
        },
        "index": {
          "description": "Send message to the IRC server",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotSendMsg",
          "package": "fastirc",
          "partial": "Bot Send Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:BotSendMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a raw string to the IRC server.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "BotSendString",
          "package": "fastirc",
          "signature": "BotSendString MsgString",
          "source": "src/Network-FastIRC-Session.html#BotCommand",
          "type": "function"
        },
        "index": {
          "description": "Send raw string to the IRC server",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotSendString",
          "package": "fastirc",
          "partial": "Bot Send String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:BotSendString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmediately kill the bot.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "BotTerminate",
          "package": "fastirc",
          "signature": "BotTerminate",
          "source": "src/Network-FastIRC-Session.html#BotCommand",
          "type": "function"
        },
        "index": {
          "description": "Immediately kill the bot",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "BotTerminate",
          "package": "fastirc",
          "partial": "Bot Terminate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:BotTerminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBot connected.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "ConnectedEvent",
          "package": "fastirc",
          "signature": "ConnectedEvent",
          "source": "src/Network-FastIRC-Session.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Bot connected",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "ConnectedEvent",
          "package": "fastirc",
          "partial": "Connected Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:ConnectedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBot disconnected (either error or on demand).\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "DisconnectedEvent",
          "package": "fastirc",
          "signature": "DisconnectedEvent",
          "source": "src/Network-FastIRC-Session.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Bot disconnected either error or on demand",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "DisconnectedEvent",
          "package": "fastirc",
          "partial": "Disconnected Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:DisconnectedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection failed or disconnected on error.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "ErrorEvent",
          "package": "fastirc",
          "signature": "ErrorEvent String",
          "source": "src/Network-FastIRC-Session.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Connection failed or disconnected on error",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "ErrorEvent",
          "package": "fastirc",
          "partial": "Error Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:ErrorEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBot logged in (received numeric 001).\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "LoggedInEvent",
          "package": "fastirc",
          "signature": "LoggedInEvent",
          "source": "src/Network-FastIRC-Session.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Bot logged in received numeric",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "LoggedInEvent",
          "package": "fastirc",
          "partial": "Logged In Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:LoggedInEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceived message from server.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "MessageEvent",
          "package": "fastirc",
          "signature": "MessageEvent Message",
          "source": "src/Network-FastIRC-Session.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Received message from server",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "MessageEvent",
          "package": "fastirc",
          "partial": "Message Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:MessageEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Session",
          "name": "Params",
          "package": "fastirc",
          "signature": "Params",
          "source": "src/Network-FastIRC-Session.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "Params",
          "package": "fastirc",
          "partial": "Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBot disconnected on demand.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "QuitEvent",
          "package": "fastirc",
          "signature": "QuitEvent",
          "source": "src/Network-FastIRC-Session.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Bot disconnected on demand",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "QuitEvent",
          "package": "fastirc",
          "partial": "Quit Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:QuitEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Session",
          "name": "botCurrentNick",
          "package": "fastirc",
          "signature": "Maybe NickName",
          "source": "src/Network-FastIRC-Session.html#BotInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "botCurrentNick",
          "package": "fastirc",
          "partial": "Current Nick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:botCurrentNick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIRC nick name generator.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "botGetNick",
          "package": "fastirc",
          "signature": "IO NickName",
          "source": "src/Network-FastIRC-Session.html#Params",
          "type": "function"
        },
        "index": {
          "description": "IRC nick name generator",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "botGetNick",
          "package": "fastirc",
          "partial": "Get Nick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:botGetNick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIRC real name generator.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "botGetRealName",
          "package": "fastirc",
          "signature": "IO RealName",
          "source": "src/Network-FastIRC-Session.html#Params",
          "type": "function"
        },
        "index": {
          "description": "IRC real name generator",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "botGetRealName",
          "package": "fastirc",
          "partial": "Get Real Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:botGetRealName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIRC user name generator.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "botGetUser",
          "package": "fastirc",
          "signature": "IO UserName",
          "source": "src/Network-FastIRC-Session.html#Params",
          "type": "function"
        },
        "index": {
          "description": "IRC user name generator",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "botGetUser",
          "package": "fastirc",
          "partial": "Get User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:botGetUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIRC server password.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "botPassword",
          "package": "fastirc",
          "signature": "Maybe CommandArg",
          "source": "src/Network-FastIRC-Session.html#Params",
          "type": "function"
        },
        "index": {
          "description": "IRC server password",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "botPassword",
          "package": "fastirc",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:botPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIRC server address.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "botServerAddr",
          "package": "fastirc",
          "signature": "Address",
          "source": "src/Network-FastIRC-Session.html#Params",
          "type": "function"
        },
        "index": {
          "description": "IRC server address",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "botServerAddr",
          "package": "fastirc",
          "partial": "Server Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:botServerAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet current bot information.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "getBotInfo",
          "package": "fastirc",
          "signature": "Bot BotInfo",
          "source": "src/Network-FastIRC-Session.html#getBotInfo",
          "type": "function"
        },
        "index": {
          "description": "Get current bot information",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "getBotInfo",
          "package": "fastirc",
          "partial": "Bot Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:getBotInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a command to the IRC server.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "ircSendCmd",
          "package": "fastirc",
          "signature": "BotSession -\u003e Command -\u003e IO ()",
          "source": "src/Network-FastIRC-Session.html#ircSendCmd",
          "type": "function"
        },
        "index": {
          "description": "Send command to the IRC server",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "ircSendCmd",
          "normalized": "BotSession-\u003eCommand-\u003eIO()",
          "package": "fastirc",
          "partial": "Send Cmd",
          "signature": "BotSession-\u003eCommand-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:ircSendCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a message (with origin) to the IRC server.  Note that IRC\n servers ignore the origin prefix, so in general you would want to use\n \u003ccode\u003e\u003ca\u003eircSendCmd\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "ircSendMsg",
          "package": "fastirc",
          "signature": "BotSession -\u003e Message -\u003e IO ()",
          "source": "src/Network-FastIRC-Session.html#ircSendMsg",
          "type": "function"
        },
        "index": {
          "description": "Send message with origin to the IRC server Note that IRC servers ignore the origin prefix so in general you would want to use ircSendCmd instead",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "ircSendMsg",
          "normalized": "BotSession-\u003eMessage-\u003eIO()",
          "package": "fastirc",
          "partial": "Send Msg",
          "signature": "BotSession-\u003eMessage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:ircSendMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a raw message string to the IRC server.  This is what most IRC\n clients call /quote.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "ircSendString",
          "package": "fastirc",
          "signature": "BotSession -\u003e MsgString -\u003e IO ()",
          "source": "src/Network-FastIRC-Session.html#ircSendString",
          "type": "function"
        },
        "index": {
          "description": "Send raw message string to the IRC server This is what most IRC clients call quote",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "ircSendString",
          "normalized": "BotSession-\u003eMsgString-\u003eIO()",
          "package": "fastirc",
          "partial": "Send String",
          "signature": "BotSession-\u003eMsgString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:ircSendString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to run on connect.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "onConnect",
          "package": "fastirc",
          "signature": "BotSession -\u003e Bot () -\u003e IO EventHandler",
          "source": "src/Network-FastIRC-Session.html#onConnect",
          "type": "function"
        },
        "index": {
          "description": "Action to run on connect",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "onConnect",
          "normalized": "BotSession-\u003eBot()-\u003eIO EventHandler",
          "package": "fastirc",
          "partial": "Connect",
          "signature": "BotSession-\u003eBot()-\u003eIO EventHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:onConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to run on disconnect.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "onDisconnect",
          "package": "fastirc",
          "signature": "BotSession -\u003e Bot () -\u003e IO EventHandler",
          "source": "src/Network-FastIRC-Session.html#onDisconnect",
          "type": "function"
        },
        "index": {
          "description": "Action to run on disconnect",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "onDisconnect",
          "normalized": "BotSession-\u003eBot()-\u003eIO EventHandler",
          "package": "fastirc",
          "partial": "Disconnect",
          "signature": "BotSession-\u003eBot()-\u003eIO EventHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:onDisconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to run on error (connection failed/aborted).\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "onError",
          "package": "fastirc",
          "signature": "BotSession -\u003e (String -\u003e Bot ()) -\u003e IO EventHandler",
          "source": "src/Network-FastIRC-Session.html#onError",
          "type": "function"
        },
        "index": {
          "description": "Action to run on error connection failed aborted",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "onError",
          "normalized": "BotSession-\u003e(String-\u003eBot())-\u003eIO EventHandler",
          "package": "fastirc",
          "partial": "Error",
          "signature": "BotSession-\u003e(String-\u003eBot())-\u003eIO EventHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:onError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an event handler.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "onEvent",
          "package": "fastirc",
          "signature": "BotSession -\u003e (Event -\u003e Bot ()) -\u003e IO EventHandler",
          "source": "src/Network-FastIRC-Session.html#onEvent",
          "type": "function"
        },
        "index": {
          "description": "Add an event handler",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "onEvent",
          "normalized": "BotSession-\u003e(Event-\u003eBot())-\u003eIO EventHandler",
          "package": "fastirc",
          "partial": "Event",
          "signature": "BotSession-\u003e(Event-\u003eBot())-\u003eIO EventHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:onEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to run after login (numeric 001 received).\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "onLoggedIn",
          "package": "fastirc",
          "signature": "BotSession -\u003e Bot () -\u003e IO EventHandler",
          "source": "src/Network-FastIRC-Session.html#onLoggedIn",
          "type": "function"
        },
        "index": {
          "description": "Action to run after login numeric received",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "onLoggedIn",
          "normalized": "BotSession-\u003eBot()-\u003eIO EventHandler",
          "package": "fastirc",
          "partial": "Logged In",
          "signature": "BotSession-\u003eBot()-\u003eIO EventHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:onLoggedIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to run when a message arrives.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "onMessage",
          "package": "fastirc",
          "signature": "BotSession -\u003e (Message -\u003e Bot ()) -\u003e IO EventHandler",
          "source": "src/Network-FastIRC-Session.html#onMessage",
          "type": "function"
        },
        "index": {
          "description": "Action to run when message arrives",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "onMessage",
          "normalized": "BotSession-\u003e(Message-\u003eBot())-\u003eIO EventHandler",
          "package": "fastirc",
          "partial": "Message",
          "signature": "BotSession-\u003e(Message-\u003eBot())-\u003eIO EventHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:onMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to run on quit.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "onQuit",
          "package": "fastirc",
          "signature": "BotSession -\u003e Bot () -\u003e IO EventHandler",
          "source": "src/Network-FastIRC-Session.html#onQuit",
          "type": "function"
        },
        "index": {
          "description": "Action to run on quit",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "onQuit",
          "normalized": "BotSession-\u003eBot()-\u003eIO EventHandler",
          "package": "fastirc",
          "partial": "Quit",
          "signature": "BotSession-\u003eBot()-\u003eIO EventHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:onQuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend bot command to a bot.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "sendBotCmd",
          "package": "fastirc",
          "signature": "BotSession -\u003e BotCommand -\u003e IO ()",
          "source": "src/Network-FastIRC-Session.html#sendBotCmd",
          "type": "function"
        },
        "index": {
          "description": "Send bot command to bot",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "sendBotCmd",
          "normalized": "BotSession-\u003eBotCommand-\u003eIO()",
          "package": "fastirc",
          "partial": "Bot Cmd",
          "signature": "BotSession-\u003eBotCommand-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:sendBotCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaunch an IRC bot.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Session",
          "name": "startBot",
          "package": "fastirc",
          "signature": "Params -\u003e IO (Either IOError BotSession)",
          "source": "src/Network-FastIRC-Session.html#startBot",
          "type": "function"
        },
        "index": {
          "description": "Launch an IRC bot",
          "hierarchy": "Network FastIRC Session",
          "module": "Network.FastIRC.Session",
          "name": "startBot",
          "normalized": "Params-\u003eIO(Either IOError BotSession)",
          "package": "fastirc",
          "partial": "Bot",
          "signature": "Params-\u003eIO(Either IOError BotSession)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Session.html#v:startBot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA number of convenient type aliases.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.FastIRC.Types",
          "name": "Types",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Types.html",
          "type": "module"
        },
        "index": {
          "description": "number of convenient type aliases",
          "hierarchy": "Network FastIRC Types",
          "module": "Network.FastIRC.Types",
          "name": "Types",
          "package": "fastirc",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Types",
          "name": "ChannelKey",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Types.html#ChannelKey",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network FastIRC Types",
          "module": "Network.FastIRC.Types",
          "name": "ChannelKey",
          "package": "fastirc",
          "partial": "Channel Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Types.html#t:ChannelKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Types",
          "name": "ChannelName",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Types.html#ChannelName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network FastIRC Types",
          "module": "Network.FastIRC.Types",
          "name": "ChannelName",
          "package": "fastirc",
          "partial": "Channel Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Types.html#t:ChannelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Types",
          "name": "CommandArg",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Types.html#CommandArg",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network FastIRC Types",
          "module": "Network.FastIRC.Types",
          "name": "CommandArg",
          "package": "fastirc",
          "partial": "Command Arg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Types.html#t:CommandArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Types",
          "name": "CommandName",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Types.html#CommandName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network FastIRC Types",
          "module": "Network.FastIRC.Types",
          "name": "CommandName",
          "package": "fastirc",
          "partial": "Command Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Types.html#t:CommandName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Types",
          "name": "HostName",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Types.html#HostName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network FastIRC Types",
          "module": "Network.FastIRC.Types",
          "name": "HostName",
          "package": "fastirc",
          "partial": "Host Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Types.html#t:HostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Types",
          "name": "MsgString",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Types.html#MsgString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network FastIRC Types",
          "module": "Network.FastIRC.Types",
          "name": "MsgString",
          "package": "fastirc",
          "partial": "Msg String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Types.html#t:MsgString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Types",
          "name": "NickName",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Types.html#NickName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network FastIRC Types",
          "module": "Network.FastIRC.Types",
          "name": "NickName",
          "package": "fastirc",
          "partial": "Nick Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Types.html#t:NickName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Types",
          "name": "RealName",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Types.html#RealName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network FastIRC Types",
          "module": "Network.FastIRC.Types",
          "name": "RealName",
          "package": "fastirc",
          "partial": "Real Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Types.html#t:RealName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Types",
          "name": "ServerName",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Types.html#ServerName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network FastIRC Types",
          "module": "Network.FastIRC.Types",
          "name": "ServerName",
          "package": "fastirc",
          "partial": "Server Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Types.html#t:ServerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Types",
          "name": "TargetName",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Types.html#TargetName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network FastIRC Types",
          "module": "Network.FastIRC.Types",
          "name": "TargetName",
          "package": "fastirc",
          "partial": "Target Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Types.html#t:TargetName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastIRC.Types",
          "name": "UserName",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Types.html#UserName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network FastIRC Types",
          "module": "Network.FastIRC.Types",
          "name": "UserName",
          "package": "fastirc",
          "partial": "User Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Types.html#t:UserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module includes parsers for IRC users.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.FastIRC.Users",
          "name": "Users",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Users.html",
          "type": "module"
        },
        "index": {
          "description": "This module includes parsers for IRC users",
          "hierarchy": "Network FastIRC Users",
          "module": "Network.FastIRC.Users",
          "name": "Users",
          "package": "fastirc",
          "partial": "Users",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Users.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIRC user or server.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Users",
          "name": "UserSpec",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Users.html#UserSpec",
          "type": "data"
        },
        "index": {
          "description": "IRC user or server",
          "hierarchy": "Network FastIRC Users",
          "module": "Network.FastIRC.Users",
          "name": "UserSpec",
          "package": "fastirc",
          "partial": "User Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Users.html#t:UserSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNickname.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Users",
          "name": "Nick",
          "package": "fastirc",
          "signature": "Nick NickName",
          "source": "src/Network-FastIRC-Users.html#UserSpec",
          "type": "function"
        },
        "index": {
          "description": "Nickname",
          "hierarchy": "Network FastIRC Users",
          "module": "Network.FastIRC.Users",
          "name": "Nick",
          "package": "fastirc",
          "partial": "Nick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Users.html#v:Nick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNickname, username and hostname.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Users",
          "name": "User",
          "package": "fastirc",
          "signature": "User NickName UserName HostName",
          "source": "src/Network-FastIRC-Users.html#UserSpec",
          "type": "function"
        },
        "index": {
          "description": "Nickname username and hostname",
          "hierarchy": "Network FastIRC Users",
          "module": "Network.FastIRC.Users",
          "name": "User",
          "package": "fastirc",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Users.html#v:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eUserSpec\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in a format suitable to be\n sent to the IRC server.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Users",
          "name": "showUserSpec",
          "package": "fastirc",
          "signature": "UserSpec -\u003e MsgString",
          "source": "src/Network-FastIRC-Users.html#showUserSpec",
          "type": "function"
        },
        "index": {
          "description": "Turn UserSpec into ByteString in format suitable to be sent to the IRC server",
          "hierarchy": "Network FastIRC Users",
          "module": "Network.FastIRC.Users",
          "name": "showUserSpec",
          "normalized": "UserSpec-\u003eMsgString",
          "package": "fastirc",
          "partial": "User Spec",
          "signature": "UserSpec-\u003eMsgString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Users.html#v:showUserSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a given nickname is a server.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Users",
          "name": "userIsServer",
          "package": "fastirc",
          "signature": "UserSpec -\u003e ServerSet -\u003e Bool",
          "source": "src/Network-FastIRC-Users.html#userIsServer",
          "type": "function"
        },
        "index": {
          "description": "Check whether given nickname is server",
          "hierarchy": "Network FastIRC Users",
          "module": "Network.FastIRC.Users",
          "name": "userIsServer",
          "normalized": "UserSpec-\u003eServerSet-\u003eBool",
          "package": "fastirc",
          "partial": "Is Server",
          "signature": "UserSpec-\u003eServerSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Users.html#v:userIsServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for IRC users and servers.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Users",
          "name": "userParser",
          "package": "fastirc",
          "signature": "Parser UserSpec",
          "source": "src/Network-FastIRC-Users.html#userParser",
          "type": "function"
        },
        "index": {
          "description": "Parser for IRC users and servers",
          "hierarchy": "Network FastIRC Users",
          "module": "Network.FastIRC.Users",
          "name": "userParser",
          "package": "fastirc",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Users.html#v:userParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for parsing IRC messages.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "Utils",
          "package": "fastirc",
          "source": "src/Network-FastIRC-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions for parsing IRC messages",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "Utils",
          "package": "fastirc",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter predicate for channel passwords.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "isChanPwdChar",
          "package": "fastirc",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-FastIRC-Utils.html#isChanPwdChar",
          "type": "function"
        },
        "index": {
          "description": "Character predicate for channel passwords",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "isChanPwdChar",
          "normalized": "Char-\u003eBool",
          "package": "fastirc",
          "partial": "Chan Pwd Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#v:isChanPwdChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter predicate for channel names.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "isChannelChar",
          "package": "fastirc",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-FastIRC-Utils.html#isChannelChar",
          "type": "function"
        },
        "index": {
          "description": "Character predicate for channel names",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "isChannelChar",
          "normalized": "Char-\u003eBool",
          "package": "fastirc",
          "partial": "Channel Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#v:isChannelChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter predicate for IRC commands.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "isCommandChar",
          "package": "fastirc",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-FastIRC-Utils.html#isCommandChar",
          "type": "function"
        },
        "index": {
          "description": "Character predicate for IRC commands",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "isCommandChar",
          "normalized": "Char-\u003eBool",
          "package": "fastirc",
          "partial": "Command Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#v:isCommandChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter predicate for IRC user hostnames.  In the string \u003ccode\u003ex!y@z\u003c/code\u003e\n the substring \u003ccode\u003ez\u003c/code\u003e is the user's hostname.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "isHostChar",
          "package": "fastirc",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-FastIRC-Utils.html#isHostChar",
          "type": "function"
        },
        "index": {
          "description": "Character predicate for IRC user hostnames In the string y@z the substring is the user hostname",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "isHostChar",
          "normalized": "Char-\u003eBool",
          "package": "fastirc",
          "partial": "Host Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#v:isHostChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter predicate for IRC end of line characters.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "isIRCEOLChar",
          "package": "fastirc",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-FastIRC-Utils.html#isIRCEOLChar",
          "type": "function"
        },
        "index": {
          "description": "Character predicate for IRC end of line characters",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "isIRCEOLChar",
          "normalized": "Char-\u003eBool",
          "package": "fastirc",
          "partial": "IRCEOLChar",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#v:isIRCEOLChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter predicate for IRC tokens.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "isIRCTokChar",
          "package": "fastirc",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-FastIRC-Utils.html#isIRCTokChar",
          "type": "function"
        },
        "index": {
          "description": "Character predicate for IRC tokens",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "isIRCTokChar",
          "normalized": "Char-\u003eBool",
          "package": "fastirc",
          "partial": "IRCTok Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#v:isIRCTokChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter predicate for IRC messages.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "isMessageChar",
          "package": "fastirc",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-FastIRC-Utils.html#isMessageChar",
          "type": "function"
        },
        "index": {
          "description": "Character predicate for IRC messages",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "isMessageChar",
          "normalized": "Char-\u003eBool",
          "package": "fastirc",
          "partial": "Message Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#v:isMessageChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter predicate for IRC nicknames.  This function considers\n high bytes (0x80 to 0xFF) and most nonstandard ASCII bytes as valid,\n because most modern IRC daemons allow nonstandard nicknames.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "isNickChar",
          "package": "fastirc",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-FastIRC-Utils.html#isNickChar",
          "type": "function"
        },
        "index": {
          "description": "Character predicate for IRC nicknames This function considers high bytes x80 to xFF and most nonstandard ASCII bytes as valid because most modern IRC daemons allow nonstandard nicknames",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "isNickChar",
          "normalized": "Char-\u003eBool",
          "package": "fastirc",
          "partial": "Nick Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#v:isNickChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter predicate for IRC servers.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "isServerChar",
          "package": "fastirc",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-FastIRC-Utils.html#isServerChar",
          "type": "function"
        },
        "index": {
          "description": "Character predicate for IRC servers",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "isServerChar",
          "normalized": "Char-\u003eBool",
          "package": "fastirc",
          "partial": "Server Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#v:isServerChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter predicate for IRC usernames.  In the string \u003ccode\u003ex!y@z\u003c/code\u003e the\n substring \u003ccode\u003ey\u003c/code\u003e is the user's username.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "isUserChar",
          "package": "fastirc",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-FastIRC-Utils.html#isUserChar",
          "type": "function"
        },
        "index": {
          "description": "Character predicate for IRC usernames In the string y@z the substring is the user username",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "isUserChar",
          "normalized": "Char-\u003eBool",
          "package": "fastirc",
          "partial": "User Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#v:isUserChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter predicate for nicknames, usernames and hostnames.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "isUserSpecChar",
          "package": "fastirc",
          "signature": "Char -\u003e Bool",
          "source": "src/Network-FastIRC-Utils.html#isUserSpecChar",
          "type": "function"
        },
        "index": {
          "description": "Character predicate for nicknames usernames and hostnames",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "isUserSpecChar",
          "normalized": "Char-\u003eBool",
          "package": "fastirc",
          "partial": "User Spec Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#v:isUserSpecChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser completely.\n\u003c/p\u003e",
          "module": "Network.FastIRC.Utils",
          "name": "parseComplete",
          "package": "fastirc",
          "signature": "Parser a -\u003e ByteString -\u003e Maybe a",
          "source": "src/Network-FastIRC-Utils.html#parseComplete",
          "type": "function"
        },
        "index": {
          "description": "Run parser completely",
          "hierarchy": "Network FastIRC Utils",
          "module": "Network.FastIRC.Utils",
          "name": "parseComplete",
          "normalized": "Parser a-\u003eByteString-\u003eMaybe a",
          "package": "fastirc",
          "partial": "Complete",
          "signature": "Parser a-\u003eByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC-Utils.html#v:parseComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast IRC parsing and connection library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.FastIRC",
          "name": "FastIRC",
          "package": "fastirc",
          "source": "src/Network-FastIRC.html",
          "type": "module"
        },
        "index": {
          "description": "Fast IRC parsing and connection library",
          "hierarchy": "Network FastIRC",
          "module": "Network.FastIRC",
          "name": "FastIRC",
          "package": "fastirc",
          "partial": "Fast IRC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fastirc/docs/Network-FastIRC.html#"
      }
    }
  ]
]