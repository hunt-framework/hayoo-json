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
        "word": "happstack-fay-ajax"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eclient-side half of a typed AJAX communication channel.\n\u003c/p\u003e\u003cp\u003eTo use this library, you could start by defining a type in a file that\ncan be shared between the Haskell Server and Fay client. For example:\n\u003c/p\u003e\u003cpre\u003e\n    data Command\n        = SendGuess Guess (ResponseType (Maybe Row))\n        | FetchBoard (ResponseType (Maybe Board))\n        deriving (Read, Show, Data, Typeable)\n    instance Foreign Command\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eResponseType\u003c/a\u003e\u003c/code\u003e argument specifies what type each command should\nreturn. Using GADTs would be cleaner, but Fay does not support GADTs\nyet.\n\u003c/p\u003e\u003cp\u003eTo execute a remote function we use the \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e\n      call \u003ca\u003e/ajax\u003c/a\u003e FetchBoard $ mboard -\u003e ...\n\u003c/pre\u003e\u003cp\u003eDue to the single-threaded nature of Javascript, we do not want to\nblock until the \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e returns a value, so we perform the AJAX request\nasynchronously. The third argument to \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e is the callback function\nto run when the response is received.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "AJAX",
          "name": "AJAX",
          "package": "happstack-fay-ajax",
          "source": "src/AJAX.html",
          "type": "module"
        },
        "index": {
          "description": "client-side half of typed AJAX communication channel To use this library you could start by defining type in file that can be shared between the Haskell Server and Fay client For example data Command SendGuess Guess ResponseType Maybe Row FetchBoard ResponseType Maybe Board deriving Read Show Data Typeable instance Foreign Command The ResponseType argument specifies what type each command should return Using GADTs would be cleaner but Fay does not support GADTs yet To execute remote function we use the call function call ajax FetchBoard mboard Due to the single-threaded nature of Javascript we do not want to block until the call returns value so we perform the AJAX request asynchronously The third argument to call is the callback function to run when the response is received",
          "hierarchy": "AJAX",
          "module": "AJAX",
          "name": "AJAX",
          "package": "happstack-fay-ajax",
          "partial": "AJAX",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-fay-ajax/docs/AJAX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the AJAX command. (internal)\n\u003c/p\u003e\u003cp\u003eYou probably want to use \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e which provides additional\n type-safety.\n\u003c/p\u003e\u003cp\u003eNote: if the server returns 404 or some other non-success exit\n code, the callback function will never be run.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "AJAX",
          "name": "ajaxCommand",
          "package": "happstack-fay-ajax",
          "signature": "String -\u003e Automatic cmd -\u003e (Automatic res -\u003e Fay ()) -\u003e Fay ()",
          "source": "src/AJAX.html#ajaxCommand",
          "type": "function"
        },
        "index": {
          "description": "Run the AJAX command internal You probably want to use call which provides additional type-safety Note if the server returns or some other non-success exit code the callback function will never be run see also call",
          "hierarchy": "AJAX",
          "module": "AJAX",
          "name": "ajaxCommand",
          "normalized": "String-\u003eAutomatic a-\u003e(Automatic b-\u003eFay())-\u003eFay()",
          "package": "happstack-fay-ajax",
          "partial": "Command",
          "signature": "String-\u003eAutomatic cmd-\u003e(Automatic res-\u003eFay())-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-fay-ajax/docs/AJAX.html#v:ajaxCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsynchronously call a command\n\u003c/p\u003e\u003cp\u003eNote: if the server returns 404 or some other non-success exit\n code, the callback function will never be run.\n\u003c/p\u003e\u003cp\u003eThis function is just a wrapper around \u003ccode\u003e\u003ca\u003eajaxCommand\u003c/a\u003e\u003c/code\u003e which uses the\n 'ResponseType res' phantom-typed parameter for added type safety.\n\u003c/p\u003e",
          "module": "AJAX",
          "name": "call",
          "package": "happstack-fay-ajax",
          "signature": "String-\u003e (ResponseType res -\u003e cmd)-\u003e (res -\u003e Fay ())-\u003e Fay ()",
          "type": "function"
        },
        "index": {
          "description": "Asynchronously call command Note if the server returns or some other non-success exit code the callback function will never be run This function is just wrapper around ajaxCommand which uses the ResponseType res phantom-typed parameter for added type safety",
          "hierarchy": "AJAX",
          "module": "AJAX",
          "name": "call",
          "normalized": "String-\u003e(ResponseType a-\u003eb)-\u003e(a-\u003eFay())-\u003eFay()",
          "package": "happstack-fay-ajax",
          "signature": "String-\u003e(ResponseType res-\u003ecmd)-\u003e(res-\u003eFay())-\u003eFay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-fay-ajax/docs/AJAX.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ResponseType",
          "name": "ResponseType",
          "package": "happstack-fay-ajax",
          "source": "src/ResponseType.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ResponseType",
          "module": "ResponseType",
          "name": "ResponseType",
          "package": "happstack-fay-ajax",
          "partial": "Response Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-fay-ajax/docs/ResponseType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResponseType\u003c/a\u003e\u003c/code\u003e is used in lieu of \u003ccode\u003eGADTs\u003c/code\u003e as a mechanism for\n specifying the expected return type of remote AJAX calls.\n\u003c/p\u003e",
          "module": "ResponseType",
          "name": "ResponseType",
          "package": "happstack-fay-ajax",
          "source": "src/ResponseType.html#ResponseType",
          "type": "data"
        },
        "index": {
          "description": "ResponseType is used in lieu of GADTs as mechanism for specifying the expected return type of remote AJAX calls",
          "hierarchy": "ResponseType",
          "module": "ResponseType",
          "name": "ResponseType",
          "package": "happstack-fay-ajax",
          "partial": "Response Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-fay-ajax/docs/ResponseType.html#t:ResponseType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ResponseType",
          "name": "ResponseType",
          "package": "happstack-fay-ajax",
          "signature": "ResponseType",
          "source": "src/ResponseType.html#ResponseType",
          "type": "function"
        },
        "index": {
          "hierarchy": "ResponseType",
          "module": "ResponseType",
          "name": "ResponseType",
          "package": "happstack-fay-ajax",
          "partial": "Response Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-fay-ajax/docs/ResponseType.html#v:ResponseType"
      }
    }
  ]
]