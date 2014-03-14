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
        "word": "happstack-fay"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe server-side half of a typed AJAX communication channel.\n\u003c/p\u003e\u003cp\u003eTo use this library, you could start by defining a type in a file that\ncan be shared between the Haskell Server and Fay client. For example:\n\u003c/p\u003e\u003cpre\u003e\n    data Command\n        = SendGuess Guess (ResponseType (Maybe Row))\n        | FetchBoard (ResponseType (Maybe Board))\n        deriving (Read, Show, Data, Typeable)\n    instance Foreign Command\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eResponseType\u003c/a\u003e\u003c/code\u003e argument specifies what type each command should\nreturn. Using GADTs would be cleaner, but Fay does not support GADTs\nyet.\n\u003c/p\u003e\u003cp\u003eIn the server, you would then have a route that handles ajax requests such as:\n\u003c/p\u003e\u003cpre\u003e\n    , dir \u003ca\u003eajax\u003c/a\u003e     $ handleCommand (commandR acid)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ecommandR\u003c/code\u003e would then call functions to handle the various requests:\n\u003c/p\u003e\u003cpre\u003e\n-- | handle an AJAX request\ncommandR :: AcidState Games\n         -\u003e Command\n         -\u003e ServerPart Response\ncommandR acid cmd =\n    case cmd of\n      (SendGuess guess rt) -\u003e fayResponse rt $ sendGuessC acid guess\n      (FetchBoard rt)      -\u003e fayResponse rt $ fetchBoardC acid\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ecommandR\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003efayResponse\u003c/a\u003e\u003c/code\u003e to convert the value returned by each\ncommand handler to a valid Fay value. Note that it takes\n\u003ccode\u003e\u003ca\u003eResponseType\u003c/a\u003e\u003c/code\u003e argument and passes it to \u003ccode\u003e\u003ca\u003efayResponse\u003c/a\u003e\u003c/code\u003e. This is how we\nensure that each commend handler is returning the right type.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003eAJAX\u003c/code\u003e from the \u003ccode\u003ehappstack-client-fay\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Fay",
          "name": "Fay",
          "package": "happstack-fay",
          "source": "src/Happstack-Fay.html",
          "type": "module"
        },
        "index": {
          "description": "The server-side half of typed AJAX communication channel To use this library you could start by defining type in file that can be shared between the Haskell Server and Fay client For example data Command SendGuess Guess ResponseType Maybe Row FetchBoard ResponseType Maybe Board deriving Read Show Data Typeable instance Foreign Command The ResponseType argument specifies what type each command should return Using GADTs would be cleaner but Fay does not support GADTs yet In the server you would then have route that handles ajax requests such as dir ajax handleCommand commandR acid commandR would then call functions to handle the various requests handle an AJAX request commandR AcidState Games Command ServerPart Response commandR acid cmd case cmd of SendGuess guess rt fayResponse rt sendGuessC acid guess FetchBoard rt fayResponse rt fetchBoardC acid commandR uses fayResponse to convert the value returned by each command handler to valid Fay value Note that it takes ResponseType argument and passes it to fayResponse This is how we ensure that each commend handler is returning the right type See also AJAX from the happstack-client-fay package",
          "hierarchy": "Happstack Fay",
          "module": "Happstack.Fay",
          "name": "Fay",
          "package": "happstack-fay",
          "partial": "Fay",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-fay/docs/Happstack-Fay.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert the return value to a fay response.\n\u003c/p\u003e",
          "module": "Happstack.Fay",
          "name": "fayResponse",
          "package": "happstack-fay",
          "signature": "ResponseType a-\u003e m a-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "convert the return value to fay response",
          "hierarchy": "Happstack Fay",
          "module": "Happstack.Fay",
          "name": "fayResponse",
          "normalized": "ResponseType a-\u003eb a-\u003eb Response",
          "package": "happstack-fay",
          "partial": "Response",
          "signature": "ResponseType a-\u003em a-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-fay/docs/Happstack-Fay.html#v:fayResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecode the \u003ccode\u003ecmd\u003c/code\u003e and call the response handler.\n\u003c/p\u003e\u003cp\u003eSee also: \u003ccode\u003e\u003ca\u003efayResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Fay",
          "name": "handleCommand",
          "package": "happstack-fay",
          "signature": "(cmd -\u003e m Response) -\u003e m Response",
          "source": "src/Happstack-Fay.html#handleCommand",
          "type": "function"
        },
        "index": {
          "description": "decode the cmd and call the response handler See also fayResponse",
          "hierarchy": "Happstack Fay",
          "module": "Happstack.Fay",
          "name": "handleCommand",
          "normalized": "(a-\u003eb Response)-\u003eb Response",
          "package": "happstack-fay",
          "partial": "Command",
          "signature": "(cmd-\u003em Response)-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-fay/docs/Happstack-Fay.html#v:handleCommand"
      }
    }
  ]
]