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
        "word": "jmacro-rpc-snap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSnap backend for JMacro-RPC.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e \n module Main where\n import Network.JMacroRPC.Snap\n import Snap.Http.Server\n import Snap.Core\n import Language.Javascript.JMacro\n import Control.Concurrent\n import Control.Monad.Trans\n import Network.JMacroRPC.Base\n import Text.XHtml hiding(dir)\n import qualified Data.Text as T\n\n jsScript f = script (primHtml f) ! [thetype \"text/javascript\"]\n jsScript' = jsScript . show . renderJs\n\n testPage = mkConversationPageNoCulling pageFun (newMVar (1::Int)) jRpcs\n     where pageFun :: JStat -\u003e  Snap ()\n           pageFun js = writeText $ T.pack $ show $\n                        (header \u003c\u003c [script ! [src \"https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\"] \u003c\u003c noHtml]) +++\n                        jsScript' js +++\n                        jsScript' ([jmacro|$(\\\n                                      {\n                                            var b = $(\"\u003cbutton\u003eclick me!\u003c/button\u003e\");\n                                            $(\"body\").append(b);\n                                            b.click(\\ {\n                                                var c = getCounter();\n                                                alert (\"counter is: \" + c);\n                                            });\n                                      });\n                                   |]);\n           jRpcs = [getCounterRPC]\n           getCounterRPC =\n               toJsonConvRPC \"getCounter\" $ \\s -\u003e (liftIO $ retRight =\u003c\u003c modifyMVar s (\\i -\u003e return (i+1,i)) :: Snap (Either String Int))\n\n retRight :: a -\u003e IO (Either String a)\n retRight = return . Right\n\n main = quickHttpServe =\u003c\u003c testPage\n\u003c/pre\u003e\u003cp\u003eEvery invocation of this page (including from the same browser) will have a distinct, stateful, counter, stored server-side.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.JMacroRPC.Snap",
          "name": "Snap",
          "package": "jmacro-rpc-snap",
          "source": "src/Network-JMacroRPC-Snap.html",
          "type": "module"
        },
        "index": {
          "description": "Snap backend for JMacro-RPC Example usage module Main where import Network.JMacroRPC.Snap import Snap.Http.Server import Snap.Core import Language.Javascript.JMacro import Control.Concurrent import Control.Monad.Trans import Network.JMacroRPC.Base import Text.XHtml hiding dir import qualified Data.Text as jsScript script primHtml thetype text javascript jsScript jsScript show renderJs testPage mkConversationPageNoCulling pageFun newMVar Int jRpcs where pageFun JStat Snap pageFun js writeText T.pack show header script src https ajax.googleapis.com ajax libs jquery jquery.min.js noHtml jsScript js jsScript jmacro var button click me button body append b.click var getCounter alert counter is jRpcs getCounterRPC getCounterRPC toJsonConvRPC getCounter liftIO retRight modifyMVar return Snap Either String Int retRight IO Either String retRight return Right main quickHttpServe testPage Every invocation of this page including from the same browser will have distinct stateful counter stored server-side",
          "hierarchy": "Network JMacroRPC Snap",
          "module": "Network.JMacroRPC.Snap",
          "name": "Snap",
          "package": "jmacro-rpc-snap",
          "partial": "Snap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc-snap/docs/Network-JMacroRPC-Snap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis general handler allows explicit culling of conversation state.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Snap",
          "name": "mkConversationPage",
          "package": "jmacro-rpc-snap",
          "signature": "IO timestamp-\u003e (IntMap (timestamp, s) -\u003e IO (IntMap (timestamp, s)))-\u003e (JStat -\u003e m ())-\u003e IO s-\u003e [JsonRPC m s]-\u003e IO (m ())",
          "type": "function"
        },
        "index": {
          "description": "This general handler allows explicit culling of conversation state",
          "hierarchy": "Network JMacroRPC Snap",
          "module": "Network.JMacroRPC.Snap",
          "name": "mkConversationPage",
          "normalized": "IO a-\u003e(IntMap(a,b)-\u003eIO(IntMap(a,b)))-\u003e(JStat-\u003ec())-\u003eIO b-\u003e[JsonRPC c b]-\u003eIO(c())",
          "package": "jmacro-rpc-snap",
          "partial": "Conversation Page",
          "signature": "IO timestamp-\u003e(IntMap(timestamp,s)-\u003eIO(IntMap(timestamp,s)))-\u003e(JStat-\u003em())-\u003eIO s-\u003e[JsonRPC m s]-\u003eIO(m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc-snap/docs/Network-JMacroRPC-Snap.html#v:mkConversationPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis simple handler allows conversation state to grow without bounds.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Snap",
          "name": "mkConversationPageNoCulling",
          "package": "jmacro-rpc-snap",
          "signature": "(JStat -\u003e m ()) -\u003e IO s -\u003e [JsonRPC m s] -\u003e IO (m ())",
          "source": "src/Network-JMacroRPC-Snap.html#mkConversationPageNoCulling",
          "type": "function"
        },
        "index": {
          "description": "This simple handler allows conversation state to grow without bounds",
          "hierarchy": "Network JMacroRPC Snap",
          "module": "Network.JMacroRPC.Snap",
          "name": "mkConversationPageNoCulling",
          "normalized": "(JStat-\u003ea())-\u003eIO b-\u003e[JsonRPC a b]-\u003eIO(a())",
          "package": "jmacro-rpc-snap",
          "partial": "Conversation Page No Culling",
          "signature": "(JStat-\u003em())-\u003eIO s-\u003e[JsonRPC m s]-\u003eIO(m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc-snap/docs/Network-JMacroRPC-Snap.html#v:mkConversationPageNoCulling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Panel into a Snap resource.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Snap",
          "name": "panelToPage",
          "package": "jmacro-rpc-snap",
          "signature": "String -\u003e Panel Snap -\u003e Snap ()",
          "source": "src/Network-JMacroRPC-Snap.html#panelToPage",
          "type": "function"
        },
        "index": {
          "description": "Convert Panel into Snap resource",
          "hierarchy": "Network JMacroRPC Snap",
          "module": "Network.JMacroRPC.Snap",
          "name": "panelToPage",
          "normalized": "String-\u003ePanel Snap-\u003eSnap()",
          "package": "jmacro-rpc-snap",
          "partial": "To Page",
          "signature": "String-\u003ePanel Snap-\u003eSnap()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc-snap/docs/Network-JMacroRPC-Snap.html#v:panelToPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a set of json rpcs.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Snap",
          "name": "serveRpcs",
          "package": "jmacro-rpc-snap",
          "signature": "(Int -\u003e m s) -\u003e [JsonRPC m s] -\u003e m ()",
          "source": "src/Network-JMacroRPC-Snap.html#serveRpcs",
          "type": "function"
        },
        "index": {
          "description": "Provide set of json rpcs",
          "hierarchy": "Network JMacroRPC Snap",
          "module": "Network.JMacroRPC.Snap",
          "name": "serveRpcs",
          "normalized": "(Int-\u003ea b)-\u003e[JsonRPC a b]-\u003ea()",
          "package": "jmacro-rpc-snap",
          "partial": "Rpcs",
          "signature": "(Int-\u003em s)-\u003e[JsonRPC m s]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc-snap/docs/Network-JMacroRPC-Snap.html#v:serveRpcs"
      }
    }
  ]
]