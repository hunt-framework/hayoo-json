[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc-happstack/docs/Network-JMacroRPC-Happstack.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHappstack backend for JMacro-RPC.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e \n module Main where\n import Network.JMacroRPC.Happstack\n import Happstack.Server\n import Language.Javascript.JMacro\n import Control.Concurrent\n import Network.JMacroRPC.Base\n import Text.XHtml hiding(dir)\n import Control.Monad.Trans(lift)\n\n jsScript f = script (primHtml f) ! [thetype \"text/javascript\"]\n jsScript' = jsScript . show . renderJs\n\n testPage :: IO (ServerPartT IO Response)\n testPage = mkConversationPageNoCulling pageFun (newMVar (1::Int)) jRpcs\n     where pageFun js = return $ toResponse $\n                        (header \u003c\u003c [script ! [src \"https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\"] \u003c\u003c noHtml]) +++\n                        jsScript' js +++\n                        jsScript' ([jmacro|$(\\\n                                      {\n                                            var b = $(\"\u003cbutton\u003eclick me!\u003c/button\u003e\");\n                                            $(\"body\").append(b);\n                                            b.click(\\ {\n                                                var c = getCounter();\n                                                alert (\"counter is: \" + c);\n                                            });\n                                      });\n                                   |]);\n           jRpcs = [getCounterRPC]\n           getCounterRPC =\n               toJsonConvRPC \"getCounter\" $ \\s -\u003e (lift $ retRight =\u003c\u003c modifyMVar s (\\i -\u003e return (i+1,i)) :: ServerPartT IO (Either String Int))\n\n retRight :: a -\u003e IO (Either String a)\n retRight = return . Right\n\n main = simpleHTTP nullConf =\u003c\u003c testPage\n\u003c/pre\u003e\u003cp\u003eEvery invocation of this page (including from the same browser) will have a distinct, stateful, counter, stored server-side.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.JMacroRPC.Happstack",
        "fct-package": "jmacro-rpc-happstack",
        "fct-signature": "module",
        "fct-source": "src/Network-JMacroRPC-Happstack.html",
        "fct-type": "module",
        "title": "Happstack"
      },
      "index": {
        "description": "Happstack backend for JMacro-RPC Example usage module Main where import Network.JMacroRPC.Happstack import Happstack.Server import Language.Javascript.JMacro import Control.Concurrent import Network.JMacroRPC.Base import Text.XHtml hiding dir import Control.Monad.Trans lift jsScript script primHtml thetype text javascript jsScript jsScript show renderJs testPage IO ServerPartT IO Response testPage mkConversationPageNoCulling pageFun newMVar Int jRpcs where pageFun js return toResponse header script src https ajax.googleapis.com ajax libs jquery jquery.min.js noHtml jsScript js jsScript jmacro var button click me button body append b.click var getCounter alert counter is jRpcs getCounterRPC getCounterRPC toJsonConvRPC getCounter lift retRight modifyMVar return ServerPartT IO Either String Int retRight IO Either String retRight return Right main simpleHTTP nullConf testPage Every invocation of this page including from the same browser will have distinct stateful counter stored server-side",
        "hierarchy": "Network JMacroRPC Happstack",
        "module": "Network.JMacroRPC.Happstack",
        "name": "Happstack",
        "normalized": "",
        "package": "jmacro-rpc-happstack",
        "partial": "Happstack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc-happstack/docs/Network-JMacroRPC-Happstack.html#v:mkConversationPage",
      "description": {
        "fct-descr": "\u003cp\u003eThis general handler allows explicit culling of conversation state.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Happstack",
        "fct-package": "jmacro-rpc-happstack",
        "fct-signature": "IO timestamp-\u003e (IntMap (timestamp, s) -\u003e IO (IntMap (timestamp, s)))-\u003e (JStat -\u003e ServerPartT m Response)-\u003e IO s-\u003e [JsonRPC (ServerPartT m) s]-\u003e IO (ServerPartT m Response)",
        "fct-type": "function",
        "title": "mkConversationPage"
      },
      "index": {
        "description": "This general handler allows explicit culling of conversation state",
        "hierarchy": "Network JMacroRPC Happstack",
        "module": "Network.JMacroRPC.Happstack",
        "name": "mkConversationPage",
        "normalized": "IO a-\u003e(IntMap(a,b)-\u003eIO(IntMap(a,b)))-\u003e(JStat-\u003eServerPartT c Response)-\u003eIO b-\u003e[JsonRPC(ServerPartT c)b]-\u003eIO(ServerPartT c Response)",
        "package": "jmacro-rpc-happstack",
        "partial": "Conversation Page",
        "signature": "IO timestamp-\u003e(IntMap(timestamp,s)-\u003eIO(IntMap(timestamp,s)))-\u003e(JStat-\u003eServerPartT m Response)-\u003eIO s-\u003e[JsonRPC(ServerPartT m)s]-\u003eIO(ServerPartT m Response)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc-happstack/docs/Network-JMacroRPC-Happstack.html#v:mkConversationPageNoCulling",
      "description": {
        "fct-descr": "\u003cp\u003eThis simple handler allows conversation state to grow without bounds.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Happstack",
        "fct-package": "jmacro-rpc-happstack",
        "fct-signature": "(JStat -\u003e ServerPartT m Response) -\u003e IO s -\u003e [JsonRPC (ServerPartT m) s] -\u003e IO (ServerPartT m Response)",
        "fct-source": "src/Network-JMacroRPC-Happstack.html#mkConversationPageNoCulling",
        "fct-type": "function",
        "title": "mkConversationPageNoCulling"
      },
      "index": {
        "description": "This simple handler allows conversation state to grow without bounds",
        "hierarchy": "Network JMacroRPC Happstack",
        "module": "Network.JMacroRPC.Happstack",
        "name": "mkConversationPageNoCulling",
        "normalized": "(JStat-\u003eServerPartT a Response)-\u003eIO b-\u003e[JsonRPC(ServerPartT a)b]-\u003eIO(ServerPartT a Response)",
        "package": "jmacro-rpc-happstack",
        "partial": "Conversation Page No Culling",
        "signature": "(JStat-\u003eServerPartT m Response)-\u003eIO s-\u003e[JsonRPC(ServerPartT m)s]-\u003eIO(ServerPartT m Response)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc-happstack/docs/Network-JMacroRPC-Happstack.html#v:panelToPage",
      "description": {
        "fct-descr": "\u003cp\u003eRender a Panel as a \u003ccode\u003eServerPartT m Response\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Happstack",
        "fct-package": "jmacro-rpc-happstack",
        "fct-signature": "String -\u003e Panel (ServerPartT m) -\u003e ServerPartT m Response",
        "fct-source": "src/Network-JMacroRPC-Happstack.html#panelToPage",
        "fct-type": "function",
        "title": "panelToPage"
      },
      "index": {
        "description": "Render Panel as ServerPartT Response",
        "hierarchy": "Network JMacroRPC Happstack",
        "module": "Network.JMacroRPC.Happstack",
        "name": "panelToPage",
        "normalized": "String-\u003ePanel(ServerPartT a)-\u003eServerPartT a Response",
        "package": "jmacro-rpc-happstack",
        "partial": "To Page",
        "signature": "String-\u003ePanel(ServerPartT m)-\u003eServerPartT m Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc-happstack/docs/Network-JMacroRPC-Happstack.html#v:serveRpcs",
      "description": {
        "fct-module": "Network.JMacroRPC.Happstack",
        "fct-package": "jmacro-rpc-happstack",
        "fct-signature": "(Int -\u003e ServerPartT m s) -\u003e [JsonRPC (ServerPartT m) s] -\u003e ServerPartT m Response",
        "fct-source": "src/Network-JMacroRPC-Happstack.html#serveRpcs",
        "fct-type": "function",
        "title": "serveRpcs"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Happstack",
        "module": "Network.JMacroRPC.Happstack",
        "name": "serveRpcs",
        "normalized": "(Int-\u003eServerPartT a b)-\u003e[JsonRPC(ServerPartT a)b]-\u003eServerPartT a Response",
        "package": "jmacro-rpc-happstack",
        "partial": "Rpcs",
        "signature": "(Int-\u003eServerPartT m s)-\u003e[JsonRPC(ServerPartT m)s]-\u003eServerPartT m Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc-happstack/docs/Network-JMacroRPC-Happstack.html#v:serveSimpleRpcs",
      "description": {
        "fct-module": "Network.JMacroRPC.Happstack",
        "fct-package": "jmacro-rpc-happstack",
        "fct-signature": "[JsonRPC (ServerPartT m) ()] -\u003e ServerPartT m Response",
        "fct-source": "src/Network-JMacroRPC-Happstack.html#serveSimpleRpcs",
        "fct-type": "function",
        "title": "serveSimpleRpcs"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Happstack",
        "module": "Network.JMacroRPC.Happstack",
        "name": "serveSimpleRpcs",
        "normalized": "[JsonRPC(ServerPartT a)()]-\u003eServerPartT a Response",
        "package": "jmacro-rpc-happstack",
        "partial": "Simple Rpcs",
        "signature": "[JsonRPC(ServerPartT m)()]-\u003eServerPartT m Response"
      }
    }
  }
]