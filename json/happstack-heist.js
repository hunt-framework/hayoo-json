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
        "word": "happstack-heist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides support for serving compiled Heist templates using Happstack.\n\u003c/p\u003e\u003cp\u003eThe primary function provided by this module is:\n\u003c/p\u003e\u003cp\u003eheistServe :: (Happstack m) =\u003e HeistState m -\u003e m Response\n\u003c/p\u003e\u003cp\u003eIt also provides the \u003ccode\u003e\u003ca\u003einitHeistCompiled\u003c/a\u003e\u003c/code\u003e helper function for\n creating a \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e. Though you are free to use other functions\n from the Heist library instead.\n\u003c/p\u003e\u003cp\u003eHere is a simple example:\n\u003c/p\u003e\u003cpre\u003e module Main where\n\n import Control.Applicative    ((\u003c$\u003e))\n import Control.Monad          (msum)\n import qualified Data.Text    as T\n import Happstack.Server       (dir, nullConf, nullDir, simpleHTTP, seeOther, toResponse)\n import Happstack.Server.Heist (heistServe, initHeistCompiled)\n import Heist                  ((##), getParamNode, noSplices)\n import Heist.Compiled         (Splice, yieldRuntimeText)\n import qualified Text.XmlHtml as X\n\n -- | factorial splice\n factSplice :: (Monad m) =\u003e Splice m\n factSplice =\n     do intStr \u003c- T.unpack . X.nodeText \u003c$\u003e getParamNode\n        let res = yieldRuntimeText $\n                    do case reads intStr of\n                         [(n,[])] -\u003e\n                             return (T.pack $ show $ product [1..(n :: Integer)])\n                         _ -\u003e\n                             return (T.pack $ \"Unable to parse \" ++ intStr ++ \" as an Integer.\")\n        return $ res\n\n main :: IO ()\n main =\n   do heistState \u003c- do\n        r \u003c- initHeistCompiled (T.pack \"fact\" ## factSplice) noSplices \".\"\n        case r of\n          (Left e) -\u003e error $ unlines e\n          (Right heistState) -\u003e return $ heistState\n      simpleHTTP nullConf $ msum\n        [ dir \"heist\" $ heistServe heistState\n        , nullDir \u003e\u003e seeOther \"/heist/factorial\" (toResponse \"/heist/factorial\")\n        ]\n\u003c/pre\u003e\u003cp\u003eIt uses the following template file (\u003ccode\u003efactorial.tpl\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e\n \u003chtml\u003e\n   \u003chead\u003e\n     \u003ctitle\u003eFactorial Page\u003c/title\u003e\n   \u003c/head\u003e\n   \u003cbody\u003e\n     \u003ch1\u003eFactorial Page\u003c/h1\u003e\n     \u003cp\u003eThe factorial of 6 is \u003cfact\u003e6\u003c/fact\u003e\u003c/p\u003e\n   \u003c/body\u003e\n \u003c/html\u003e\n\u003c/pre\u003e\u003cp\u003eFor more information on using Compiled Heist Templates see:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://snapframework.com/docs/tutorials/compiled-splices\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAnd also see the Heist Section of the Happstack Crash Course:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://happstack.com/docs/crashcourse/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Heist",
          "name": "Heist",
          "package": "happstack-heist",
          "source": "src/Happstack-Server-Heist.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides support for serving compiled Heist templates using Happstack The primary function provided by this module is heistServe Happstack HeistState Response It also provides the initHeistCompiled helper function for creating HeistState Though you are free to use other functions from the Heist library instead Here is simple example module Main where import Control.Applicative import Control.Monad msum import qualified Data.Text as import Happstack.Server dir nullConf nullDir simpleHTTP seeOther toResponse import Happstack.Server.Heist heistServe initHeistCompiled import Heist getParamNode noSplices import Heist.Compiled Splice yieldRuntimeText import qualified Text.XmlHtml as factorial splice factSplice Monad Splice factSplice do intStr T.unpack X.nodeText getParamNode let res yieldRuntimeText do case reads intStr of return T.pack show product Integer return T.pack Unable to parse intStr as an Integer return res main IO main do heistState do initHeistCompiled T.pack fact factSplice noSplices case of Left error unlines Right heistState return heistState simpleHTTP nullConf msum dir heist heistServe heistState nullDir seeOther heist factorial toResponse heist factorial It uses the following template file factorial.tpl html head title Factorial Page title head body h1 Factorial Page h1 The factorial of is fact fact body html For more information on using Compiled Heist Templates see http snapframework.com docs tutorials compiled-splices And also see the Heist Section of the Happstack Crash Course http happstack.com docs crashcourse",
          "hierarchy": "Happstack Server Heist",
          "module": "Happstack.Server.Heist",
          "name": "Heist",
          "package": "happstack-heist",
          "partial": "Heist",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-heist/docs/Happstack-Server-Heist.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Heist",
          "name": "heistServe",
          "package": "happstack-heist",
          "signature": "HeistState m -\u003e m Response",
          "source": "src/Happstack-Server-Heist.html#heistServe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Heist",
          "module": "Happstack.Server.Heist",
          "name": "heistServe",
          "normalized": "HeistState a-\u003ea Response",
          "package": "happstack-heist",
          "partial": "Serve",
          "signature": "HeistState m-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-heist/docs/Happstack-Server-Heist.html#v:heistServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Heist",
          "name": "initHeistCompiled",
          "package": "happstack-heist",
          "signature": "Splices (Splice n)-\u003e Splices (AttrSplice n)-\u003e FilePath-\u003e m (Either [String] (HeistState n))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Heist",
          "module": "Happstack.Server.Heist",
          "name": "initHeistCompiled",
          "normalized": "Splices(Splice a)-\u003eSplices(AttrSplice a)-\u003eFilePath-\u003eb(Either[String](HeistState a))",
          "package": "happstack-heist",
          "partial": "Heist Compiled",
          "signature": "Splices(Splice n)-\u003eSplices(AttrSplice n)-\u003eFilePath-\u003em(Either[String](HeistState n))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-heist/docs/Happstack-Server-Heist.html#v:initHeistCompiled"
      }
    }
  ]
]