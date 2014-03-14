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
        "word": "shelly"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a wrapper for the module \u003ca\u003eShelly\u003c/a\u003e. \n The only difference is a main type \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e. In this module \n \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e contains a list of results. Actual definition of the type \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e is:\n\u003c/p\u003e\u003cpre\u003e import qualified Shelly as S\n\n newtype Sh a = Sh { unSh :: S.Sh [a] }\n\u003c/pre\u003e\u003cp\u003eThis definition can simplify some filesystem commands. \n A monad bind operator becomes a pipe operator and we can write\n\u003c/p\u003e\u003cpre\u003e findExt ext = findWhen (pure . hasExt ext)\n\n main :: IO ()\n main = shs $ do\n     mkdir \"new\"\n     findExt \"hs\"  \".\" \u003e\u003e= flip cp \"new\"\n     findExt \"cpp\" \".\" \u003e\u003e= rm_f \n     liftIO $ putStrLn \"done\"\n\u003c/pre\u003e\u003cp\u003eMonad methods \u003ca\u003ereturn\u003c/a\u003e and \u003ca\u003e\u003e\u003e=\u003c/a\u003e behave like methods for\n \u003ccode\u003eListT Shelly.Sh\u003c/code\u003e, but \u003ca\u003e\u003e\u003e\u003c/a\u003e forgets the number of \n the empty effects. So the last line prints \u003ccode\u003e\"done\"\u003c/code\u003e only once. \n\u003c/p\u003e\u003cp\u003eDocumentation in this module mostly just reference documentation from\n the main \u003ca\u003eShelly\u003c/a\u003e module.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n {-# LANGUAGE ExtendedDefaultRules #-}\n {-# OPTIONS_GHC -fno-warn-type-defaults #-}\n import Shelly\n import Data.Text as T\n default (T.Text)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Shelly.Pipe",
          "name": "Pipe",
          "package": "shelly",
          "source": "src/Shelly-Pipe.html",
          "type": "module"
        },
        "index": {
          "description": "This module is wrapper for the module Shelly The only difference is main type Sh In this module Sh contains list of results Actual definition of the type Sh is import qualified Shelly as newtype Sh Sh unSh S.Sh This definition can simplify some filesystem commands monad bind operator becomes pipe operator and we can write findExt ext findWhen pure hasExt ext main IO main shs do mkdir new findExt hs flip cp new findExt cpp rm liftIO putStrLn done Monad methods return and behave like methods for ListT Shelly.Sh but forgets the number of the empty effects So the last line prints done only once Documentation in this module mostly just reference documentation from the main Shelly module LANGUAGE OverloadedStrings LANGUAGE ExtendedDefaultRules OPTIONS GHC fno-warn-type-defaults import Shelly import Data.Text as default T.Text",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "Pipe",
          "package": "shelly",
          "partial": "Pipe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly.Pipe",
          "name": "FilePath",
          "package": "shelly",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "FilePath",
          "package": "shelly",
          "partial": "File Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly.Pipe",
          "name": "FoldCallback",
          "package": "shelly",
          "source": "src/Shelly.html#FoldCallback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "FoldCallback",
          "package": "shelly",
          "partial": "Fold Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#t:FoldCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type is a simple wrapper for a type \u003ccode\u003eShelly.Sh\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e contains a list of results. \n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "Sh",
          "package": "shelly",
          "source": "src/Shelly-Pipe.html#Sh",
          "type": "data"
        },
        "index": {
          "description": "This type is simple wrapper for type Shelly.Sh Sh contains list of results",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "Sh",
          "package": "shelly",
          "partial": "Sh",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#t:Sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eShellyHandler\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "ShellyHandler",
          "package": "shelly",
          "source": "src/Shelly-Pipe.html#ShellyHandler",
          "type": "data"
        },
        "index": {
          "description": "see ShellyHandler",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "ShellyHandler",
          "package": "shelly",
          "partial": "Shelly Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#t:ShellyHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003e-|-\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "(-|-)",
          "package": "shelly",
          "signature": "Sh Text -\u003e Sh b -\u003e Sh b",
          "source": "src/Shelly-Pipe.html#-%7C-",
          "type": "function"
        },
        "index": {
          "description": "see",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "(-|-) -|-",
          "normalized": "Sh Text-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "Sh Text-\u003eSh b-\u003eSh b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:-45--124--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Shelly.Pipe\",\"Shelly\"]",
          "name": "(\u003c$\u003e)",
          "package": "shelly",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:-60--36--62-\",\"http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:-60--36--62-\"]"
        },
        "index": {
          "description": "An infix synonym for fmap",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "shelly",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euses System.FilePath.CurrentOS, but can automatically convert a Text\n\u003c/p\u003e",
          "module": "[\"Shelly.Pipe\",\"Shelly\"]",
          "name": "(\u003c/\u003e)",
          "package": "shelly",
          "signature": "filepath1 -\u003e filepath2 -\u003e FilePath",
          "source": "src/Shelly.html#%3C%2F%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:-60--47--62-\",\"http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:-60--47--62-\"]"
        },
        "index": {
          "description": "uses System.FilePath.CurrentOS but can automatically convert Text",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "a-\u003ea-\u003eFilePath",
          "package": "shelly",
          "signature": "filepath-\u003efilepath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euses System.FilePath.CurrentOS, but can automatically convert a Text\n\u003c/p\u003e",
          "module": "[\"Shelly.Pipe\",\"Shelly\"]",
          "name": "(\u003c.\u003e)",
          "package": "shelly",
          "signature": "filepath -\u003e Text -\u003e FilePath",
          "source": "src/Shelly.html#%3C.%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:-60-.-62-\",\"http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:-60-.-62-\"]"
        },
        "index": {
          "description": "uses System.FilePath.CurrentOS but can automatically convert Text",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "a-\u003eText-\u003eFilePath",
          "package": "shelly",
          "signature": "filepath-\u003eText-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly.Pipe",
          "name": "ShellyHandler",
          "package": "shelly",
          "signature": "ShellyHandler (e -\u003e Sh a)",
          "source": "src/Shelly-Pipe.html#ShellyHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "ShellyHandler",
          "normalized": "ShellyHandler(a-\u003eSh b)",
          "package": "shelly",
          "partial": "Shelly Handler",
          "signature": "ShellyHandler(e-\u003eSh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:ShellyHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eabsPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "absPath",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Pipe.html#absPath",
          "type": "function"
        },
        "index": {
          "description": "see absPath",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "absPath",
          "normalized": "FilePath-\u003eSh FilePath",
          "package": "shelly",
          "partial": "Path",
          "signature": "FilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:absPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eappendToPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "appendToPath",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#appendToPath",
          "type": "function"
        },
        "index": {
          "description": "see appendToPath",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "appendToPath",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "partial": "To Path",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:appendToPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "appendfile",
          "package": "shelly",
          "signature": "FilePath -\u003e Text -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#appendfile",
          "type": "function"
        },
        "index": {
          "description": "see appendFile",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "appendfile",
          "normalized": "FilePath-\u003eText-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eText-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:appendfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecanonic\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "canonic",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Pipe.html#canonic",
          "type": "function"
        },
        "index": {
          "description": "see canonic",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "canonic",
          "normalized": "FilePath-\u003eSh FilePath",
          "package": "shelly",
          "signature": "FilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:canonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecanonicalize\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "canonicalize",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Pipe.html#canonicalize",
          "type": "function"
        },
        "index": {
          "description": "see canonicalize",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "canonicalize",
          "normalized": "FilePath-\u003eSh FilePath",
          "package": "shelly",
          "signature": "FilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:canonicalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecatch_sh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "catch_sh",
          "package": "shelly",
          "signature": "Sh a -\u003e (e -\u003e Sh a) -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#catch_sh",
          "type": "function"
        },
        "index": {
          "description": "see catch sh",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "catch_sh",
          "normalized": "Sh a-\u003e(b-\u003eSh a)-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003e(e-\u003eSh a)-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:catch_sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper to catch any exception (same as\n \u003ccode\u003e... \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e (e :: SomeException) -\u003e ...\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Shelly.Pipe\",\"Shelly\"]",
          "name": "catchany",
          "package": "shelly",
          "signature": "IO a -\u003e (SomeException -\u003e IO a) -\u003e IO a",
          "source": "src/Shelly-Base.html#catchany",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:catchany\",\"http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:catchany\"]"
        },
        "index": {
          "description": "helper to catch any exception same as catch SomeException",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "catchany",
          "normalized": "IO a-\u003e(SomeException-\u003eIO a)-\u003eIO a",
          "package": "shelly",
          "signature": "IO a-\u003e(SomeException-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:catchany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecatchany_sh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "catchany_sh",
          "package": "shelly",
          "signature": "Sh a -\u003e (SomeException -\u003e Sh a) -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#catchany_sh",
          "type": "function"
        },
        "index": {
          "description": "see catchany sh",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "catchany_sh",
          "normalized": "Sh a-\u003e(SomeException-\u003eSh a)-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003e(SomeException-\u003eSh a)-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:catchany_sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecatches_sh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "catches_sh",
          "package": "shelly",
          "signature": "Sh a -\u003e [ShellyHandler a] -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#catches_sh",
          "type": "function"
        },
        "index": {
          "description": "see catches sh",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "catches_sh",
          "normalized": "Sh a-\u003e[ShellyHandler a]-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003e[ShellyHandler a]-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:catches_sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "cd",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#cd",
          "type": "function"
        },
        "index": {
          "description": "see cd",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "cd",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:cd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003echdir\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "chdir",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#chdir",
          "type": "function"
        },
        "index": {
          "description": "see chdir",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "chdir",
          "normalized": "FilePath-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "FilePath-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:chdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "cmd",
          "package": "shelly",
          "signature": "FilePath -\u003e result",
          "source": "src/Shelly-Pipe.html#cmd",
          "type": "function"
        },
        "index": {
          "description": "see cmd",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "cmd",
          "normalized": "FilePath-\u003ea",
          "package": "shelly",
          "signature": "FilePath-\u003eresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "command",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e [Text] -\u003e Sh Text",
          "source": "src/Shelly-Pipe.html#command",
          "type": "function"
        },
        "index": {
          "description": "see command",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "command",
          "normalized": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh Text",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecommand1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "command1",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e Text -\u003e [Text] -\u003e Sh Text",
          "source": "src/Shelly-Pipe.html#command1",
          "type": "function"
        },
        "index": {
          "description": "see command1",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "command1",
          "normalized": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh Text",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:command1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecommand1_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "command1_",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e Text -\u003e [Text] -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#command1_",
          "type": "function"
        },
        "index": {
          "description": "see command1",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "command1_",
          "normalized": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:command1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecommand_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "command_",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e [Text] -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#command_",
          "type": "function"
        },
        "index": {
          "description": "see command",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "command_",
          "normalized": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:command_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "cp",
          "package": "shelly",
          "signature": "FilePath -\u003e FilePath -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#cp",
          "type": "function"
        },
        "index": {
          "description": "see cp",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "cp",
          "normalized": "FilePath-\u003eFilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eFilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:cp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecp_r\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "cp_r",
          "package": "shelly",
          "signature": "FilePath -\u003e FilePath -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#cp_r",
          "type": "function"
        },
        "index": {
          "description": "see cp",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "cp_r",
          "normalized": "FilePath-\u003eFilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eFilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:cp_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "echo",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#echo",
          "type": "function"
        },
        "index": {
          "description": "Echo text to standard error when using err variants output The variants do not print final newline",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "echo",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "echo_err",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#echo_err",
          "type": "function"
        },
        "index": {
          "description": "Echo text to standard error when using err variants output The variants do not print final newline",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "echo_err",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:echo_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "echo_n",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#echo_n",
          "type": "function"
        },
        "index": {
          "description": "Echo text to standard error when using err variants output The variants do not print final newline",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "echo_n",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:echo_n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "echo_n_err",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#echo_n_err",
          "type": "function"
        },
        "index": {
          "description": "Echo text to standard error when using err variants output The variants do not print final newline",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "echo_n_err",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:echo_n_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eerrExit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "errExit",
          "package": "shelly",
          "signature": "Bool -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#errExit",
          "type": "function"
        },
        "index": {
          "description": "see errExit",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "errExit",
          "normalized": "Bool-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "partial": "Exit",
          "signature": "Bool-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:errExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eerrorExit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "errorExit",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#errorExit",
          "type": "function"
        },
        "index": {
          "description": "see errorExit",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "errorExit",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "partial": "Exit",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:errorExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eescaping\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "escaping",
          "package": "shelly",
          "signature": "Bool -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#escaping",
          "type": "function"
        },
        "index": {
          "description": "see escaping",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "escaping",
          "normalized": "Bool-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "Bool-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:escaping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "exit",
          "package": "shelly",
          "signature": "Int -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#exit",
          "type": "function"
        },
        "index": {
          "description": "see exit",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "exit",
          "normalized": "Int-\u003eSh()",
          "package": "shelly",
          "signature": "Int-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efinally_sh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "finally_sh",
          "package": "shelly",
          "signature": "Sh a -\u003e Sh b -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#finally_sh",
          "type": "function"
        },
        "index": {
          "description": "see finally sh",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "finally_sh",
          "normalized": "Sh a-\u003eSh b-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003eSh b-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:finally_sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "find",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Pipe.html#find",
          "type": "function"
        },
        "index": {
          "description": "see find",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "find",
          "normalized": "FilePath-\u003eSh FilePath",
          "package": "shelly",
          "signature": "FilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efindDirFilter\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "findDirFilter",
          "package": "shelly",
          "signature": "(FilePath -\u003e Sh Bool) -\u003e FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Pipe.html#findDirFilter",
          "type": "function"
        },
        "index": {
          "description": "see findDirFilter",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "findDirFilter",
          "normalized": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh FilePath",
          "package": "shelly",
          "partial": "Dir Filter",
          "signature": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:findDirFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efindDirFilterWhen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "findDirFilterWhen",
          "package": "shelly",
          "signature": "(FilePath -\u003e Sh Bool)-\u003e (FilePath -\u003e Sh Bool)-\u003e FilePath-\u003e Sh FilePath",
          "type": "function"
        },
        "index": {
          "description": "see findDirFilterWhen",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "findDirFilterWhen",
          "normalized": "(FilePath-\u003eSh Bool)-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh FilePath",
          "package": "shelly",
          "partial": "Dir Filter When",
          "signature": "(FilePath-\u003eSh Bool)-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:findDirFilterWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efindFold\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "findFold",
          "package": "shelly",
          "signature": "(a -\u003e FilePath -\u003e Sh a) -\u003e a -\u003e FilePath -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#findFold",
          "type": "function"
        },
        "index": {
          "description": "see findFold",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "findFold",
          "normalized": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003eFilePath-\u003eSh a",
          "package": "shelly",
          "partial": "Fold",
          "signature": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003eFilePath-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:findFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efindFoldDirFilterWhen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "findFoldDirFilter",
          "package": "shelly",
          "signature": "(a -\u003e FilePath -\u003e Sh a) -\u003e a -\u003e (FilePath -\u003e Sh Bool) -\u003e FilePath -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#findFoldDirFilter",
          "type": "function"
        },
        "index": {
          "description": "see findFoldDirFilterWhen",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "findFoldDirFilter",
          "normalized": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh a",
          "package": "shelly",
          "partial": "Fold Dir Filter",
          "signature": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:findFoldDirFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efindWhen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "findWhen",
          "package": "shelly",
          "signature": "(FilePath -\u003e Sh Bool) -\u003e FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Pipe.html#findWhen",
          "type": "function"
        },
        "index": {
          "description": "see findWhen",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "findWhen",
          "normalized": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh FilePath",
          "package": "shelly",
          "partial": "When",
          "signature": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:findWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert human&#8208;readable text into a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function ignores the user&#8217;s locale, and assumes all file paths\n are encoded in UTF8. If you need to create file paths with an unusual or\n obscure encoding, encode them manually and then use \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
          "module": "[\"Shelly.Pipe\",\"Shelly\"]",
          "name": "fromText",
          "package": "shelly",
          "signature": "Text -\u003e FilePath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:fromText\",\"http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:fromText\"]"
        },
        "index": {
          "description": "Convert human readable text into FilePath This function ignores the user locale and assumes all file paths are encoded in UTF8 If you need to create file paths with an unusual or obscure encoding encode them manually and then use decode Since",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "fromText",
          "normalized": "Text-\u003eFilePath",
          "package": "shelly",
          "partial": "Text",
          "signature": "Text-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:fromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly.Pipe",
          "name": "get",
          "package": "shelly",
          "signature": "Sh State",
          "source": "src/Shelly-Pipe.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "get",
          "package": "shelly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eget_env\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "get_env",
          "package": "shelly",
          "signature": "Text -\u003e Sh (Maybe Text)",
          "source": "src/Shelly-Pipe.html#get_env",
          "type": "function"
        },
        "index": {
          "description": "see get env",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "get_env",
          "normalized": "Text-\u003eSh(Maybe Text)",
          "package": "shelly",
          "signature": "Text-\u003eSh(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:get_env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use fromMaybe DEFAULT get_env\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003esee \u003ccode\u003e\u003ca\u003eget_env_def\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "get_env_def",
          "package": "shelly",
          "signature": "Text -\u003e Text -\u003e Sh Text",
          "source": "src/Shelly-Pipe.html#get_env_def",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use fromMaybe DEFAULT get env see get env def",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "get_env_def",
          "normalized": "Text-\u003eText-\u003eSh Text",
          "package": "shelly",
          "signature": "Text-\u003eText-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:get_env_def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eget_env_text\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "get_env_text",
          "package": "shelly",
          "signature": "Text -\u003e Sh Text",
          "source": "src/Shelly-Pipe.html#get_env_text",
          "type": "function"
        },
        "index": {
          "description": "see get env text",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "get_env_text",
          "normalized": "Text-\u003eSh Text",
          "package": "shelly",
          "signature": "Text-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:get_env_text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflipped hasExtension for Text\n\u003c/p\u003e",
          "module": "[\"Shelly.Pipe\",\"Shelly\"]",
          "name": "hasExt",
          "package": "shelly",
          "signature": "Text -\u003e FilePath -\u003e Bool",
          "source": "src/Shelly.html#hasExt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:hasExt\",\"http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:hasExt\"]"
        },
        "index": {
          "description": "flipped hasExtension for Text",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "hasExt",
          "normalized": "Text-\u003eFilePath-\u003eBool",
          "package": "shelly",
          "partial": "Ext",
          "signature": "Text-\u003eFilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:hasExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003einspect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "inspect",
          "package": "shelly",
          "signature": "s -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#inspect",
          "type": "function"
        },
        "index": {
          "description": "see inspect",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "inspect",
          "normalized": "a-\u003eSh()",
          "package": "shelly",
          "signature": "s-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:inspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003einspect_err\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "inspect_err",
          "package": "shelly",
          "signature": "s -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#inspect_err",
          "type": "function"
        },
        "index": {
          "description": "see inspect err",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "inspect_err",
          "normalized": "a-\u003eSh()",
          "package": "shelly",
          "signature": "s-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:inspect_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003elastExitCode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "lastExitCode",
          "package": "shelly",
          "signature": "Sh Int",
          "source": "src/Shelly-Pipe.html#lastExitCode",
          "type": "function"
        },
        "index": {
          "description": "see lastExitCode",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "lastExitCode",
          "package": "shelly",
          "partial": "Exit Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:lastExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003elastStderr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "lastStderr",
          "package": "shelly",
          "signature": "Sh Text",
          "source": "src/Shelly-Pipe.html#lastStderr",
          "type": "function"
        },
        "index": {
          "description": "see lastStderr",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "lastStderr",
          "package": "shelly",
          "partial": "Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:lastStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "[\"Shelly.Pipe\",\"Shelly\"]",
          "name": "liftIO",
          "package": "shelly",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:liftIO\",\"http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:liftIO\"]"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "shelly",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform result as list. It can be useful for filtering. \n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "liftSh",
          "package": "shelly",
          "signature": "([a] -\u003e [b]) -\u003e Sh a -\u003e Sh b",
          "source": "src/Shelly-Pipe.html#liftSh",
          "type": "function"
        },
        "index": {
          "description": "Transform result as list It can be useful for filtering",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "liftSh",
          "normalized": "([a]-\u003e[b])-\u003eSh a-\u003eSh b",
          "package": "shelly",
          "partial": "Sh",
          "signature": "([a]-\u003e[b])-\u003eSh a-\u003eSh b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:liftSh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003els\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "ls",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Pipe.html#ls",
          "type": "function"
        },
        "index": {
          "description": "see ls",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "ls",
          "normalized": "FilePath-\u003eSh FilePath",
          "package": "shelly",
          "signature": "FilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:ls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003elsT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "lsT",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Text",
          "source": "src/Shelly-Pipe.html#lsT",
          "type": "function"
        },
        "index": {
          "description": "see lsT",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "lsT",
          "normalized": "FilePath-\u003eSh Text",
          "package": "shelly",
          "signature": "FilePath-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:lsT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003emkdir\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "mkdir",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#mkdir",
          "type": "function"
        },
        "index": {
          "description": "see mkdir",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "mkdir",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:mkdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003emkdirTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "mkdirTree",
          "package": "shelly",
          "signature": "Tree FilePath -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#mkdirTree",
          "type": "function"
        },
        "index": {
          "description": "see mkdirTree",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "mkdirTree",
          "normalized": "Tree FilePath-\u003eSh()",
          "package": "shelly",
          "partial": "Tree",
          "signature": "Tree FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:mkdirTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003emkdir_p\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "mkdir_p",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#mkdir_p",
          "type": "function"
        },
        "index": {
          "description": "see mkdir",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "mkdir_p",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:mkdir_p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003emv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "mv",
          "package": "shelly",
          "signature": "FilePath -\u003e FilePath -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#mv",
          "type": "function"
        },
        "index": {
          "description": "see mv",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "mv",
          "normalized": "FilePath-\u003eFilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eFilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:mv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee 'S.print_commands\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "print_commands",
          "package": "shelly",
          "signature": "Bool -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#print_commands",
          "type": "function"
        },
        "index": {
          "description": "see S.print commands",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "print_commands",
          "normalized": "Bool-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "Bool-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:print_commands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eprint_stdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "print_stdout",
          "package": "shelly",
          "signature": "Bool -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#print_stdout",
          "type": "function"
        },
        "index": {
          "description": "see print stdout",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "print_stdout",
          "normalized": "Bool-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "Bool-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:print_stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly.Pipe",
          "name": "put",
          "package": "shelly",
          "signature": "State -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "put",
          "normalized": "State-\u003eSh()",
          "package": "shelly",
          "signature": "State-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003epwd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "pwd",
          "package": "shelly",
          "signature": "Sh FilePath",
          "source": "src/Shelly-Pipe.html#pwd",
          "type": "function"
        },
        "index": {
          "description": "see pwd",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "pwd",
          "package": "shelly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:pwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003equietExit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "quietExit",
          "package": "shelly",
          "signature": "Int -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#quietExit",
          "type": "function"
        },
        "index": {
          "description": "see quietExit",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "quietExit",
          "normalized": "Int-\u003eSh()",
          "package": "shelly",
          "partial": "Exit",
          "signature": "Int-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:quietExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ereadBinary\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "readBinary",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ByteString",
          "source": "src/Shelly-Pipe.html#readBinary",
          "type": "function"
        },
        "index": {
          "description": "see readBinary",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "readBinary",
          "normalized": "FilePath-\u003eSh ByteString",
          "package": "shelly",
          "partial": "Binary",
          "signature": "FilePath-\u003eSh ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:readBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "readfile",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Text",
          "source": "src/Shelly-Pipe.html#readfile",
          "type": "function"
        },
        "index": {
          "description": "see readFile",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "readfile",
          "normalized": "FilePath-\u003eSh Text",
          "package": "shelly",
          "signature": "FilePath-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:readfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erelPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "relPath",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Pipe.html#relPath",
          "type": "function"
        },
        "index": {
          "description": "see relPath",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "relPath",
          "normalized": "FilePath-\u003eSh FilePath",
          "package": "shelly",
          "partial": "Path",
          "signature": "FilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:relPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erelativeTo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "relativeTo",
          "package": "shelly",
          "signature": "FilePath-\u003e FilePath-\u003e Sh FilePath",
          "type": "function"
        },
        "index": {
          "description": "see relativeTo",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "relativeTo",
          "normalized": "FilePath-\u003eFilePath-\u003eSh FilePath",
          "package": "shelly",
          "partial": "To",
          "signature": "FilePath-\u003eFilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:relativeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "rm",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#rm",
          "type": "function"
        },
        "index": {
          "description": "see rm",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "rm",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:rm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erm_f\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "rm_f",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#rm_f",
          "type": "function"
        },
        "index": {
          "description": "see rm",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "rm_f",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:rm_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erm_rf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "rm_rf",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#rm_rf",
          "type": "function"
        },
        "index": {
          "description": "see rm rf",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "rm_rf",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:rm_rf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack list of results. It performs \u003ccode\u003econcat\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "roll",
          "package": "shelly",
          "signature": "Sh [a] -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#roll",
          "type": "function"
        },
        "index": {
          "description": "Pack list of results It performs concat inside Sh",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "roll",
          "normalized": "Sh[a]-\u003eSh a",
          "package": "shelly",
          "signature": "Sh[a]-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "run",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e Sh Text",
          "source": "src/Shelly-Pipe.html#run",
          "type": "function"
        },
        "index": {
          "description": "see run",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "run",
          "normalized": "FilePath-\u003e[Text]-\u003eSh Text",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erunFoldLines\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "runFoldLines",
          "package": "shelly",
          "signature": "a -\u003e FoldCallback a -\u003e FilePath -\u003e [Text] -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#runFoldLines",
          "type": "function"
        },
        "index": {
          "description": "see runFoldLines",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "runFoldLines",
          "normalized": "a-\u003eFoldCallback a-\u003eFilePath-\u003e[Text]-\u003eSh a",
          "package": "shelly",
          "partial": "Fold Lines",
          "signature": "a-\u003eFoldCallback a-\u003eFilePath-\u003e[Text]-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:runFoldLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erun_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "run_",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#run_",
          "type": "function"
        },
        "index": {
          "description": "see run",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "run_",
          "normalized": "FilePath-\u003e[Text]-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:run_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003esetStdin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "setStdin",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#setStdin",
          "type": "function"
        },
        "index": {
          "description": "see setStdin",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "setStdin",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "partial": "Stdin",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:setStdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003esetenv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "setenv",
          "package": "shelly",
          "signature": "Text -\u003e Text -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#setenv",
          "type": "function"
        },
        "index": {
          "description": "see setenv",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "setenv",
          "normalized": "Text-\u003eText-\u003eSh()",
          "package": "shelly",
          "signature": "Text-\u003eText-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:setenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eshelly\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "shelly",
          "package": "shelly",
          "signature": "Sh a -\u003e m [a]",
          "source": "src/Shelly-Pipe.html#shelly",
          "type": "function"
        },
        "index": {
          "description": "see shelly",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "shelly",
          "normalized": "Sh a-\u003eb[a]",
          "package": "shelly",
          "signature": "Sh a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:shelly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eshellyNoDir\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "shellyNoDir",
          "package": "shelly",
          "signature": "Sh a -\u003e m [a]",
          "source": "src/Shelly-Pipe.html#shellyNoDir",
          "type": "function"
        },
        "index": {
          "description": "see shellyNoDir",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "shellyNoDir",
          "normalized": "Sh a-\u003eb[a]",
          "package": "shelly",
          "partial": "No Dir",
          "signature": "Sh a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:shellyNoDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eshow_command\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "show_command",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e Text",
          "source": "src/Shelly-Pipe.html#show_command",
          "type": "function"
        },
        "index": {
          "description": "see show command",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "show_command",
          "normalized": "FilePath-\u003e[Text]-\u003eText",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:show_command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms \u003ccode\u003e\u003ca\u003eshelly\u003c/a\u003e\u003c/code\u003e and then an empty action \u003ccode\u003ereturn ()\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "shs",
          "package": "shelly",
          "signature": "Sh () -\u003e m ()",
          "source": "src/Shelly-Pipe.html#shs",
          "type": "function"
        },
        "index": {
          "description": "Performs shelly and then an empty action return",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "shs",
          "normalized": "Sh()-\u003ea()",
          "package": "shelly",
          "signature": "Sh()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:shs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms \u003ccode\u003e\u003ca\u003eshellyNoDir\u003c/a\u003e\u003c/code\u003e and then an empty action \u003ccode\u003ereturn ()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "shsNoDir",
          "package": "shelly",
          "signature": "Sh () -\u003e m ()",
          "source": "src/Shelly-Pipe.html#shsNoDir",
          "type": "function"
        },
        "index": {
          "description": "Performs shellyNoDir and then an empty action return",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "shsNoDir",
          "normalized": "Sh()-\u003ea()",
          "package": "shelly",
          "partial": "No Dir",
          "signature": "Sh()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:shsNoDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly.Pipe",
          "name": "silently",
          "package": "shelly",
          "signature": "Sh a -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#silently",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "silently",
          "normalized": "Sh a-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:silently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003esshPairs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "sshPairs",
          "package": "shelly",
          "signature": "Text -\u003e [(FilePath, [Text])] -\u003e Sh Text",
          "source": "src/Shelly-Pipe.html#sshPairs",
          "type": "function"
        },
        "index": {
          "description": "see sshPairs",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "sshPairs",
          "normalized": "Text-\u003e[(FilePath,[Text])]-\u003eSh Text",
          "package": "shelly",
          "partial": "Pairs",
          "signature": "Text-\u003e[(FilePath,[Text])]-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:sshPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003esshPairs_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "sshPairs_",
          "package": "shelly",
          "signature": "Text -\u003e [(FilePath, [Text])] -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#sshPairs_",
          "type": "function"
        },
        "index": {
          "description": "see sshPairs",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "sshPairs_",
          "normalized": "Text-\u003e[(FilePath,[Text])]-\u003eSh()",
          "package": "shelly",
          "partial": "Pairs",
          "signature": "Text-\u003e[(FilePath,[Text])]-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:sshPairs_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003esub\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "sub",
          "package": "shelly",
          "signature": "Sh a -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#sub",
          "type": "function"
        },
        "index": {
          "description": "see sub",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "sub",
          "normalized": "Sh a-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "tag",
          "package": "shelly",
          "signature": "Sh a -\u003e Text -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#tag",
          "type": "function"
        },
        "index": {
          "description": "see tag",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "tag",
          "normalized": "Sh a-\u003eText-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003eText-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eterror\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "terror",
          "package": "shelly",
          "signature": "Text -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#terror",
          "type": "function"
        },
        "index": {
          "description": "see terror",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "terror",
          "normalized": "Text-\u003eSh a",
          "package": "shelly",
          "signature": "Text-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:terror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etest_d\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "test_d",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Bool",
          "source": "src/Shelly-Pipe.html#test_d",
          "type": "function"
        },
        "index": {
          "description": "see test",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "test_d",
          "normalized": "FilePath-\u003eSh Bool",
          "package": "shelly",
          "signature": "FilePath-\u003eSh Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:test_d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etest_e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "test_e",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Bool",
          "source": "src/Shelly-Pipe.html#test_e",
          "type": "function"
        },
        "index": {
          "description": "see test",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "test_e",
          "normalized": "FilePath-\u003eSh Bool",
          "package": "shelly",
          "signature": "FilePath-\u003eSh Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:test_e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etest_f\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "test_f",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Bool",
          "source": "src/Shelly-Pipe.html#test_f",
          "type": "function"
        },
        "index": {
          "description": "see test",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "test_f",
          "normalized": "FilePath-\u003eSh Bool",
          "package": "shelly",
          "signature": "FilePath-\u003eSh Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:test_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etest_s\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "test_s",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Bool",
          "source": "src/Shelly-Pipe.html#test_s",
          "type": "function"
        },
        "index": {
          "description": "see test",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "test_s",
          "normalized": "FilePath-\u003eSh Bool",
          "package": "shelly",
          "signature": "FilePath-\u003eSh Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:test_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etime\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "time",
          "package": "shelly",
          "signature": "Sh a -\u003e Sh (Double, a)",
          "source": "src/Shelly-Pipe.html#time",
          "type": "function"
        },
        "index": {
          "description": "see time",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "time",
          "normalized": "Sh a-\u003eSh(Double,a)",
          "package": "shelly",
          "signature": "Sh a-\u003eSh(Double,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esilently uses the Right or Left value of \u003ca\u003eFilesystem.Path.CurrentOS.toText\u003c/a\u003e\n\u003c/p\u003e",
          "module": "[\"Shelly.Pipe\",\"Shelly\"]",
          "name": "toTextIgnore",
          "package": "shelly",
          "signature": "FilePath -\u003e Text",
          "source": "src/Shelly-Base.html#toTextIgnore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:toTextIgnore\",\"http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:toTextIgnore\"]"
        },
        "index": {
          "description": "silently uses the Right or Left value of Filesystem.Path.CurrentOS.toText",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "toTextIgnore",
          "normalized": "FilePath-\u003eText",
          "package": "shelly",
          "partial": "Text Ignore",
          "signature": "FilePath-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:toTextIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etoTextWarn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "toTextWarn",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Text",
          "source": "src/Shelly-Pipe.html#toTextWarn",
          "type": "function"
        },
        "index": {
          "description": "see toTextWarn",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "toTextWarn",
          "normalized": "FilePath-\u003eSh Text",
          "package": "shelly",
          "partial": "Text Warn",
          "signature": "FilePath-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:toTextWarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etouchFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "touchfile",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#touchfile",
          "type": "function"
        },
        "index": {
          "description": "see touchFile",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "touchfile",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:touchfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "trace",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#trace",
          "type": "function"
        },
        "index": {
          "description": "see trace",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "trace",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etracing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "tracing",
          "package": "shelly",
          "signature": "Bool -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#tracing",
          "type": "function"
        },
        "index": {
          "description": "see tracing",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "tracing",
          "normalized": "Bool-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "Bool-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:tracing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reverse of \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Shelly.Pipe\",\"Shelly\"]",
          "name": "unless",
          "package": "shelly",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:unless\",\"http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:unless\"]"
        },
        "index": {
          "description": "The reverse of when",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "unless",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "shelly",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic-conditional version of the \u003ccode\u003e\u003ca\u003eunless\u003c/a\u003e\u003c/code\u003e guard.\n\u003c/p\u003e",
          "module": "[\"Shelly.Pipe\",\"Shelly\"]",
          "name": "unlessM",
          "package": "shelly",
          "signature": "m Bool -\u003e m () -\u003e m ()",
          "source": "src/Shelly.html#unlessM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:unlessM\",\"http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:unlessM\"]"
        },
        "index": {
          "description": "monadic-conditional version of the unless guard",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "unlessM",
          "normalized": "a Bool-\u003ea()-\u003ea()",
          "package": "shelly",
          "signature": "m Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:unlessM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack list of results.\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "unroll",
          "package": "shelly",
          "signature": "Sh a -\u003e Sh [a]",
          "source": "src/Shelly-Pipe.html#unroll",
          "type": "function"
        },
        "index": {
          "description": "Unpack list of results",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "unroll",
          "normalized": "Sh a-\u003eSh[a]",
          "package": "shelly",
          "signature": "Sh a-\u003eSh[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:unroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly.Pipe",
          "name": "verbosely",
          "package": "shelly",
          "signature": "Sh a -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#verbosely",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "verbosely",
          "normalized": "Sh a-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:verbosely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional execution of monadic expressions. For example, \n\u003c/p\u003e\u003cpre\u003e       when debug (putStr \"Debugging\\n\")\n\u003c/pre\u003e\u003cp\u003ewill output the string \u003ccode\u003eDebugging\\n\u003c/code\u003e if the Boolean value \u003ccode\u003edebug\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nand otherwise do nothing.\n\u003c/p\u003e",
          "module": "[\"Shelly.Pipe\",\"Shelly\"]",
          "name": "when",
          "package": "shelly",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:when\",\"http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:when\"]"
        },
        "index": {
          "description": "Conditional execution of monadic expressions For example when debug putStr Debugging will output the string Debugging if the Boolean value debug is True and otherwise do nothing",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "when",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "shelly",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic-conditional version of the \u003ca\u003ewhen\u003c/a\u003e guard.\n\u003c/p\u003e",
          "module": "[\"Shelly.Pipe\",\"Shelly\"]",
          "name": "whenM",
          "package": "shelly",
          "signature": "m Bool -\u003e m () -\u003e m ()",
          "source": "src/Shelly-Base.html#whenM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:whenM\",\"http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:whenM\"]"
        },
        "index": {
          "description": "monadic-conditional version of the when guard",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "whenM",
          "normalized": "a Bool-\u003ea()-\u003ea()",
          "package": "shelly",
          "signature": "m Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:whenM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee 'S.which\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "which",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh (Maybe FilePath)",
          "source": "src/Shelly-Pipe.html#which",
          "type": "function"
        },
        "index": {
          "description": "see S.which",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "which",
          "normalized": "FilePath-\u003eSh(Maybe FilePath)",
          "package": "shelly",
          "signature": "FilePath-\u003eSh(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:which"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ewithTmpDir\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "withTmpDir",
          "package": "shelly",
          "signature": "(FilePath -\u003e Sh a) -\u003e Sh a",
          "source": "src/Shelly-Pipe.html#withTmpDir",
          "type": "function"
        },
        "index": {
          "description": "see withTmpDir",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "withTmpDir",
          "normalized": "(FilePath-\u003eSh a)-\u003eSh a",
          "package": "shelly",
          "partial": "Tmp Dir",
          "signature": "(FilePath-\u003eSh a)-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:withTmpDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly.Pipe",
          "name": "writefile",
          "package": "shelly",
          "signature": "FilePath -\u003e Text -\u003e Sh ()",
          "source": "src/Shelly-Pipe.html#writefile",
          "type": "function"
        },
        "index": {
          "description": "see writeFile",
          "hierarchy": "Shelly Pipe",
          "module": "Shelly.Pipe",
          "name": "writefile",
          "normalized": "FilePath-\u003eText-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eText-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:writefile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for shell-like programming in Haskell.\n Shelly's focus is entirely on ease of use for those coming from shell scripting.\n However, it also tries to use modern libraries and techniques to keep things efficient.\n\u003c/p\u003e\u003cp\u003eThe functionality provided by\n this module is (unlike standard Haskell filesystem functionality)\n thread-safe: each Sh maintains its own environment and its own working\n directory.\n\u003c/p\u003e\u003cp\u003eRecommended usage includes putting the following at the top of your program,\n otherwise you will likely need either type annotations or type conversions\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n {-# LANGUAGE ExtendedDefaultRules #-}\n {-# OPTIONS_GHC -fno-warn-type-defaults #-}\n import Shelly\n import qualified Data.Text as T\n default (T.Text)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Shelly",
          "name": "Shelly",
          "package": "shelly",
          "source": "src/Shelly.html",
          "type": "module"
        },
        "index": {
          "description": "module for shell-like programming in Haskell Shelly focus is entirely on ease of use for those coming from shell scripting However it also tries to use modern libraries and techniques to keep things efficient The functionality provided by this module is unlike standard Haskell filesystem functionality thread-safe each Sh maintains its own environment and its own working directory Recommended usage includes putting the following at the top of your program otherwise you will likely need either type annotations or type conversions LANGUAGE OverloadedStrings LANGUAGE ExtendedDefaultRules OPTIONS GHC fno-warn-type-defaults import Shelly import qualified Data.Text as default T.Text",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "Shelly",
          "package": "shelly",
          "partial": "Shelly",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArgument converter for the variadic argument version of \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e called \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e.\n Useful for a type signature of a function that uses \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "CmdArg",
          "package": "shelly",
          "source": "src/Shelly.html#CmdArg",
          "type": "class"
        },
        "index": {
          "description": "Argument converter for the variadic argument version of run called cmd Useful for type signature of function that uses cmd",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "CmdArg",
          "package": "shelly",
          "partial": "Cmd Arg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:CmdArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "FilePath",
          "package": "shelly",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "FilePath",
          "package": "shelly",
          "partial": "File Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "FoldCallback",
          "package": "shelly",
          "source": "src/Shelly.html#FoldCallback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "FoldCallback",
          "package": "shelly",
          "partial": "Fold Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:FoldCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "Sh",
          "package": "shelly",
          "source": "src/Shelly-Base.html#Sh",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "Sh",
          "package": "shelly",
          "partial": "Sh",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:Sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Sh instead of ShIO\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eShIO is Deprecated in favor of \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e, which is easier to type.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "ShIO",
          "package": "shelly",
          "source": "src/Shelly-Base.html#ShIO",
          "type": "type"
        },
        "index": {
          "description": "Deprecated Use Sh instead of ShIO ShIO is Deprecated in favor of Sh which is easier to type",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "ShIO",
          "package": "shelly",
          "partial": "Sh IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:ShIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor the variadic function \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003epartially applied variadic functions require type signatures\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "ShellCmd",
          "package": "shelly",
          "source": "src/Shelly.html#ShellCmd",
          "type": "class"
        },
        "index": {
          "description": "For the variadic function cmd partially applied variadic functions require type signatures",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "ShellCmd",
          "package": "shelly",
          "partial": "Shell Cmd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:ShellCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou need to wrap exception handlers with this when using \u003ccode\u003e\u003ca\u003ecatches_sh\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "ShellyHandler",
          "package": "shelly",
          "source": "src/Shelly.html#ShellyHandler",
          "type": "data"
        },
        "index": {
          "description": "You need to wrap exception handlers with this when using catches sh",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "ShellyHandler",
          "package": "shelly",
          "partial": "Shelly Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:ShellyHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "StdHandle",
          "package": "shelly",
          "source": "src/Shelly-Base.html#StdHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "StdHandle",
          "package": "shelly",
          "partial": "Std Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:StdHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "StdStream",
          "package": "shelly",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "StdStream",
          "package": "shelly",
          "partial": "Std Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:StdStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePipe operator. set the stdout the first command as the stdin of the second.\n This does not create a shell-level pipe, but hopefully it will in the future.\n To create a shell level pipe you can set \u003ccode\u003eescaping False\u003c/code\u003e and use a pipe \u003ccode\u003e|\u003c/code\u003e character in a command.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "(-|-)",
          "package": "shelly",
          "signature": "Sh Text -\u003e Sh b -\u003e Sh b",
          "source": "src/Shelly.html#-%7C-",
          "type": "function"
        },
        "index": {
          "description": "Pipe operator set the stdout the first command as the stdin of the second This does not create shell-level pipe but hopefully it will in the future To create shell level pipe you can set escaping False and use pipe character in command",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "(-|-) -|-",
          "normalized": "Sh Text-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "Sh Text-\u003eSh b-\u003eSh b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:-45--124--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new pipe.  The returned\n \u003ccode\u003eHandle\u003c/code\u003e will use the default encoding\n and newline translation mode (just\n like \u003ccode\u003eHandle\u003c/code\u003es created by \u003ccode\u003eopenFile\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "CreatePipe",
          "package": "shelly",
          "signature": "CreatePipe",
          "type": "function"
        },
        "index": {
          "description": "Create new pipe The returned Handle will use the default encoding and newline translation mode just like Handle created by openFile",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "CreatePipe",
          "package": "shelly",
          "partial": "Create Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:CreatePipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "ErrorHandle",
          "package": "shelly",
          "signature": "ErrorHandle StdStream",
          "source": "src/Shelly-Base.html#StdHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "ErrorHandle",
          "package": "shelly",
          "partial": "Error Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:ErrorHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "InHandle",
          "package": "shelly",
          "signature": "InHandle StdStream",
          "source": "src/Shelly-Base.html#StdHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "InHandle",
          "package": "shelly",
          "partial": "In Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:InHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInherit Handle from parent\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "Inherit",
          "package": "shelly",
          "signature": "Inherit",
          "type": "function"
        },
        "index": {
          "description": "Inherit Handle from parent",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "Inherit",
          "package": "shelly",
          "partial": "Inherit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:Inherit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "OutHandle",
          "package": "shelly",
          "signature": "OutHandle StdStream",
          "source": "src/Shelly-Base.html#StdHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "OutHandle",
          "package": "shelly",
          "partial": "Out Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:OutHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "ShellyHandler",
          "package": "shelly",
          "signature": "ShellyHandler (e -\u003e Sh a)",
          "source": "src/Shelly.html#ShellyHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "ShellyHandler",
          "normalized": "ShellyHandler(a-\u003eSh b)",
          "package": "shelly",
          "partial": "Shelly Handler",
          "signature": "ShellyHandler(e-\u003eSh a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:ShellyHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the supplied Handle\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "UseHandle",
          "package": "shelly",
          "signature": "UseHandle Handle",
          "type": "function"
        },
        "index": {
          "description": "Use the supplied Handle",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "UseHandle",
          "package": "shelly",
          "partial": "Use Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:UseHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a relative path absolute by combining with the working directory.\n An absolute path is returned as is.\n To create a relative path, use \u003ccode\u003e\u003ca\u003erelPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "absPath",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Base.html#absPath",
          "type": "function"
        },
        "index": {
          "description": "Make relative path absolute by combining with the working directory An absolute path is returned as is To create relative path use relPath",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "absPath",
          "normalized": "FilePath-\u003eSh FilePath",
          "package": "shelly",
          "partial": "Path",
          "signature": "FilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:absPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd the filepath onto the PATH env variable\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "appendToPath",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly.html#appendToPath",
          "type": "function"
        },
        "index": {
          "description": "add the filepath onto the PATH env variable",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "appendToPath",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "partial": "To Path",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:appendToPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a Lazy Text to a file.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "appendfile",
          "package": "shelly",
          "signature": "FilePath -\u003e Text -\u003e Sh ()",
          "source": "src/Shelly.html#appendfile",
          "type": "function"
        },
        "index": {
          "description": "Append Lazy Text to file",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "appendfile",
          "normalized": "FilePath-\u003eText-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eText-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:appendfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003espawn an asynchronous action with a copy of the current state\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "asyncSh",
          "package": "shelly",
          "signature": "Sh a -\u003e Sh (Async a)",
          "source": "src/Shelly.html#asyncSh",
          "type": "function"
        },
        "index": {
          "description": "spawn an asynchronous action with copy of the current state",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "asyncSh",
          "normalized": "Sh a-\u003eSh(Async a)",
          "package": "shelly",
          "partial": "Sh",
          "signature": "Sh a-\u003eSh(Async a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:asyncSh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "bracket_sh",
          "package": "shelly",
          "signature": "Sh a -\u003e (a -\u003e Sh b) -\u003e (a -\u003e Sh c) -\u003e Sh c",
          "source": "src/Shelly.html#bracket_sh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "bracket_sh",
          "normalized": "Sh a-\u003e(a-\u003eSh b)-\u003e(a-\u003eSh c)-\u003eSh c",
          "package": "shelly",
          "signature": "Sh a-\u003e(a-\u003eSh b)-\u003e(a-\u003eSh c)-\u003eSh c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:bracket_sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emakes an absolute path.\n Like \u003ccode\u003e\u003ca\u003ecanonicalize\u003c/a\u003e\u003c/code\u003e, but on an exception returns \u003ccode\u003e\u003ca\u003eabsPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "canonic",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Base.html#canonic",
          "type": "function"
        },
        "index": {
          "description": "makes an absolute path Like canonicalize but on an exception returns absPath",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "canonic",
          "normalized": "FilePath-\u003eSh FilePath",
          "package": "shelly",
          "signature": "FilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:canonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a (reasonably) canonic file path to a filesystem object. Based on\n \u003ca\u003ecanonicalizePath\u003c/a\u003e in system-fileio.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "canonicalize",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Base.html#canonicalize",
          "type": "function"
        },
        "index": {
          "description": "Obtain reasonably canonic file path to filesystem object Based on canonicalizePath in system-fileio",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "canonicalize",
          "normalized": "FilePath-\u003eSh FilePath",
          "package": "shelly",
          "signature": "FilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:canonicalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as a normal \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e but specialized for the Sh monad.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "catch_sh",
          "package": "shelly",
          "signature": "Sh a -\u003e (e -\u003e Sh a) -\u003e Sh a",
          "source": "src/Shelly.html#catch_sh",
          "type": "function"
        },
        "index": {
          "description": "Same as normal catch but specialized for the Sh monad",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "catch_sh",
          "normalized": "Sh a-\u003e(b-\u003eSh a)-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003e(e-\u003eSh a)-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:catch_sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch any exception in the Sh monad.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "catchany_sh",
          "package": "shelly",
          "signature": "Sh a -\u003e (SomeException -\u003e Sh a) -\u003e Sh a",
          "source": "src/Shelly.html#catchany_sh",
          "type": "function"
        },
        "index": {
          "description": "Catch any exception in the Sh monad",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "catchany_sh",
          "normalized": "Sh a-\u003e(SomeException-\u003eSh a)-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003e(SomeException-\u003eSh a)-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:catchany_sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as a normal \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e, but specialized for the \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "catches_sh",
          "package": "shelly",
          "signature": "Sh a -\u003e [ShellyHandler a] -\u003e Sh a",
          "source": "src/Shelly.html#catches_sh",
          "type": "function"
        },
        "index": {
          "description": "Same as normal catches but specialized for the Sh monad",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "catches_sh",
          "normalized": "Sh a-\u003e[ShellyHandler a]-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003e[ShellyHandler a]-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:catches_sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange current working directory of Sh. This does *not* change the\n working directory of the process we are running it. Instead, Sh keeps\n track of its own working directory and builds absolute paths internally\n instead of passing down relative paths.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "cd",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly.html#cd",
          "type": "function"
        },
        "index": {
          "description": "Change current working directory of Sh This does not change the working directory of the process we are running it Instead Sh keeps track of its own working directory and builds absolute paths internally instead of passing down relative paths",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "cd",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:cd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecd\u003c/a\u003e\u003c/code\u003e, execute a Sh action in the new directory and then pop back to the original directory\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "chdir",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly.html#chdir",
          "type": "function"
        },
        "index": {
          "description": "cd execute Sh action in the new directory and then pop back to the original directory",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "chdir",
          "normalized": "FilePath-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "FilePath-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:chdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariadic argument version of \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.\n Please see the documenation for \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe syntax is more convenient, but more importantly it also allows the use of a FilePath as a command argument.\n So an argument can be a Text or a FilePath without manual conversions.\n a FilePath is automatically converted to Text with \u003ccode\u003e\u003ca\u003etoTextIgnore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConvenient usage of \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e requires the following:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n {-# LANGUAGE ExtendedDefaultRules #-}\n {-# OPTIONS_GHC -fno-warn-type-defaults #-}\n import Shelly\n import qualified Data.Text as T\n default (T.Text)\n\u003c/pre\u003e",
          "module": "Shelly",
          "name": "cmd",
          "package": "shelly",
          "signature": "FilePath -\u003e result",
          "source": "src/Shelly.html#cmd",
          "type": "function"
        },
        "index": {
          "description": "variadic argument version of run Please see the documenation for run The syntax is more convenient but more importantly it also allows the use of FilePath as command argument So an argument can be Text or FilePath without manual conversions FilePath is automatically converted to Text with toTextIgnore Convenient usage of cmd requires the following LANGUAGE OverloadedStrings LANGUAGE ExtendedDefaultRules OPTIONS GHC fno-warn-type-defaults import Shelly import qualified Data.Text as default T.Text",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "cmd",
          "normalized": "FilePath-\u003ea",
          "package": "shelly",
          "signature": "FilePath-\u003eresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "cmdAll",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e t",
          "source": "src/Shelly.html#cmdAll",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "cmdAll",
          "normalized": "FilePath-\u003e[Text]-\u003ea",
          "package": "shelly",
          "partial": "All",
          "signature": "FilePath-\u003e[Text]-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:cmdAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebind some arguments to run for re-use. Example:\n\u003c/p\u003e\u003cpre\u003e monit = command \"monit\" [\"-c\", \"monitrc\"]\n monit [\"stop\", \"program\"]\n\u003c/pre\u003e",
          "module": "Shelly",
          "name": "command",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e [Text] -\u003e Sh Text",
          "source": "src/Shelly.html#command",
          "type": "function"
        },
        "index": {
          "description": "bind some arguments to run for re-use Example monit command monit monitrc monit stop program",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "command",
          "normalized": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh Text",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebind some arguments to run for re-use, and require 1 argument. Example:\n\u003c/p\u003e\u003cpre\u003e git = command1 \"git\" []; git \"pull\" [\"origin\", \"master\"]\n\u003c/pre\u003e",
          "module": "Shelly",
          "name": "command1",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e Text -\u003e [Text] -\u003e Sh Text",
          "source": "src/Shelly.html#command1",
          "type": "function"
        },
        "index": {
          "description": "bind some arguments to run for re-use and require argument Example git command1 git git pull origin master",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "command1",
          "normalized": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh Text",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:command1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebind some arguments to run for re-use, and require 1 argument. Example:\n\u003c/p\u003e\u003cpre\u003e git_ = command1_ \"git\" []; git \"pull\" [\"origin\", \"master\"]\n\u003c/pre\u003e",
          "module": "Shelly",
          "name": "command1_",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e Text -\u003e [Text] -\u003e Sh ()",
          "source": "src/Shelly.html#command1_",
          "type": "function"
        },
        "index": {
          "description": "bind some arguments to run for re-use and require argument Example git command1 git git pull origin master",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "command1_",
          "normalized": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:command1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebind some arguments to \u003ccode\u003e\u003ca\u003erun_\u003c/a\u003e\u003c/code\u003e for re-use. Example:\n\u003c/p\u003e\u003cpre\u003e monit_ = command_ \"monit\" [\"-c\", \"monitrc\"]\n monit_ [\"stop\", \"program\"]\n\u003c/pre\u003e",
          "module": "Shelly",
          "name": "command_",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e [Text] -\u003e Sh ()",
          "source": "src/Shelly.html#command_",
          "type": "function"
        },
        "index": {
          "description": "bind some arguments to run for re-use Example monit command monit monitrc monit stop program",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "command_",
          "normalized": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:command_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a file. The second path could be a directory, in which case the\n original file name is used, in that directory.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "cp",
          "package": "shelly",
          "signature": "FilePath -\u003e FilePath -\u003e Sh ()",
          "source": "src/Shelly.html#cp",
          "type": "function"
        },
        "index": {
          "description": "Copy file The second path could be directory in which case the original file name is used in that directory",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "cp",
          "normalized": "FilePath-\u003eFilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eFilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:cp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a file, or a directory recursively.\n uses \u003ccode\u003e\u003ca\u003ecp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "cp_r",
          "package": "shelly",
          "signature": "FilePath -\u003e FilePath -\u003e Sh ()",
          "source": "src/Shelly.html#cp_r",
          "type": "function"
        },
        "index": {
          "description": "Copy file or directory recursively uses cp",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "cp_r",
          "normalized": "FilePath-\u003eFilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eFilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:cp_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "echo",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly-Base.html#echo",
          "type": "function"
        },
        "index": {
          "description": "Echo text to standard error when using err variants output The variants do not print final newline",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "echo",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "echo_err",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly-Base.html#echo_err",
          "type": "function"
        },
        "index": {
          "description": "Echo text to standard error when using err variants output The variants do not print final newline",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "echo_err",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:echo_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "echo_n",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly-Base.html#echo_n",
          "type": "function"
        },
        "index": {
          "description": "Echo text to standard error when using err variants output The variants do not print final newline",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "echo_n",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:echo_n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "echo_n_err",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly-Base.html#echo_n_err",
          "type": "function"
        },
        "index": {
          "description": "Echo text to standard error when using err variants output The variants do not print final newline",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "echo_n_err",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:echo_n_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enamed after bash -e errexit. Defaults to \u003ccode\u003eTrue\u003c/code\u003e.\n When \u003ccode\u003eTrue\u003c/code\u003e, throw an exception on a non-zero exit code.\n When \u003ccode\u003eFalse\u003c/code\u003e, ignore a non-zero exit code.\n Not recommended to set to \u003ccode\u003eFalse\u003c/code\u003e unless you are specifically checking the error code with \u003ccode\u003e\u003ca\u003elastExitCode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "errExit",
          "package": "shelly",
          "signature": "Bool -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly.html#errExit",
          "type": "function"
        },
        "index": {
          "description": "named after bash errexit Defaults to True When True throw an exception on non-zero exit code When False ignore non-zero exit code Not recommended to set to False unless you are specifically checking the error code with lastExitCode",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "errExit",
          "normalized": "Bool-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "partial": "Exit",
          "signature": "Bool-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:errExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eecho a message and exit with status 1\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "errorExit",
          "package": "shelly",
          "signature": "Text -\u003e Sh a",
          "source": "src/Shelly.html#errorExit",
          "type": "function"
        },
        "index": {
          "description": "echo message and exit with status",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "errorExit",
          "normalized": "Text-\u003eSh a",
          "package": "shelly",
          "partial": "Exit",
          "signature": "Text-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:errorExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sub-Sh with shell character escaping on or off.\n Defaults to \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSetting to \u003ccode\u003eFalse\u003c/code\u003e allows for shell wildcard such as * to be expanded by the shell along with any other special shell characters.\n As a side-effect, setting to \u003ccode\u003eFalse\u003c/code\u003e causes changes to \u003ccode\u003ePATH\u003c/code\u003e to be ignored:\n see the \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e documentation.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "escaping",
          "package": "shelly",
          "signature": "Bool -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly.html#escaping",
          "type": "function"
        },
        "index": {
          "description": "Create sub-Sh with shell character escaping on or off Defaults to True Setting to False allows for shell wildcard such as to be expanded by the shell along with any other special shell characters As side-effect setting to False causes changes to PATH to be ignored see the run documentation",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "escaping",
          "normalized": "Bool-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "Bool-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:escaping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexit 0 means no errors, all other codes are error conditions\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "exit",
          "package": "shelly",
          "signature": "Int -\u003e Sh a",
          "source": "src/Shelly.html#exit",
          "type": "function"
        },
        "index": {
          "description": "exit means no errors all other codes are error conditions",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "exit",
          "normalized": "Int-\u003eSh a",
          "package": "shelly",
          "signature": "Int-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as a normal \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e but specialized for the \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "finally_sh",
          "package": "shelly",
          "signature": "Sh a -\u003e Sh b -\u003e Sh a",
          "source": "src/Shelly.html#finally_sh",
          "type": "function"
        },
        "index": {
          "description": "Same as normal finally but specialized for the Sh monad",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "finally_sh",
          "normalized": "Sh a-\u003eSh b-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003eSh b-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:finally_sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList directory recursively (like the POSIX utility \u003ca\u003efind\u003c/a\u003e).\n listing is relative if the path given is relative.\n If you want to filter out some results or fold over them you can do that with the returned files.\n A more efficient approach is to use one of the other find functions.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "find",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh [FilePath]",
          "source": "src/Shelly-Find.html#find",
          "type": "function"
        },
        "index": {
          "description": "List directory recursively like the POSIX utility find listing is relative if the path given is relative If you want to filter out some results or fold over them you can do that with the returned files more efficient approach is to use one of the other find functions",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "find",
          "normalized": "FilePath-\u003eSh[FilePath]",
          "package": "shelly",
          "signature": "FilePath-\u003eSh[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e that filters out directories as it finds\n Filtering out directories can make a find much more efficient by avoiding entire trees of files.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "findDirFilter",
          "package": "shelly",
          "signature": "(FilePath -\u003e Sh Bool) -\u003e FilePath -\u003e Sh [FilePath]",
          "source": "src/Shelly-Find.html#findDirFilter",
          "type": "function"
        },
        "index": {
          "description": "find that filters out directories as it finds Filtering out directories can make find much more efficient by avoiding entire trees of files",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "findDirFilter",
          "normalized": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh[FilePath]",
          "package": "shelly",
          "partial": "Dir Filter",
          "signature": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:findDirFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar \u003ccode\u003e\u003ca\u003efindWhen\u003c/a\u003e\u003c/code\u003e, but also filter out directories\n Alternatively, similar to \u003ccode\u003e\u003ca\u003efindDirFilter\u003c/a\u003e\u003c/code\u003e, but also filter out files\n Filtering out directories makes the find much more efficient\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "findDirFilterWhen",
          "package": "shelly",
          "signature": "(FilePath -\u003e Sh Bool)-\u003e (FilePath -\u003e Sh Bool)-\u003e FilePath-\u003e Sh [FilePath]",
          "type": "function"
        },
        "index": {
          "description": "similar findWhen but also filter out directories Alternatively similar to findDirFilter but also filter out files Filtering out directories makes the find much more efficient",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "findDirFilterWhen",
          "normalized": "(FilePath-\u003eSh Bool)-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh[FilePath]",
          "package": "shelly",
          "partial": "Dir Filter When",
          "signature": "(FilePath-\u003eSh Bool)-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:findDirFilterWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold an arbitrary folding function over files froma a \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e.\n Like \u003ccode\u003e\u003ca\u003efindWhen\u003c/a\u003e\u003c/code\u003e but use a more general fold rather than a filter.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "findFold",
          "package": "shelly",
          "signature": "(a -\u003e FilePath -\u003e Sh a) -\u003e a -\u003e FilePath -\u003e Sh a",
          "source": "src/Shelly-Find.html#findFold",
          "type": "function"
        },
        "index": {
          "description": "Fold an arbitrary folding function over files froma find Like findWhen but use more general fold rather than filter",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "findFold",
          "normalized": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003eFilePath-\u003eSh a",
          "package": "shelly",
          "partial": "Fold",
          "signature": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003eFilePath-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:findFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003efindDirFilterWhen\u003c/a\u003e\u003c/code\u003e but use a folding function rather than a filter\n The most general finder: you likely want a more specific one\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "findFoldDirFilter",
          "package": "shelly",
          "signature": "(a -\u003e FilePath -\u003e Sh a) -\u003e a -\u003e (FilePath -\u003e Sh Bool) -\u003e FilePath -\u003e Sh a",
          "source": "src/Shelly-Find.html#findFoldDirFilter",
          "type": "function"
        },
        "index": {
          "description": "like findDirFilterWhen but use folding function rather than filter The most general finder you likely want more specific one",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "findFoldDirFilter",
          "normalized": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh a",
          "package": "shelly",
          "partial": "Fold Dir Filter",
          "signature": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:findFoldDirFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e that filters the found files as it finds.\n Files must satisfy the given filter to be returned in the result.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "findWhen",
          "package": "shelly",
          "signature": "(FilePath -\u003e Sh Bool) -\u003e FilePath -\u003e Sh [FilePath]",
          "source": "src/Shelly-Find.html#findWhen",
          "type": "function"
        },
        "index": {
          "description": "find that filters the found files as it finds Files must satisfy the given filter to be returned in the result",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "findWhen",
          "normalized": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh[FilePath]",
          "package": "shelly",
          "partial": "When",
          "signature": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:findWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "get",
          "package": "shelly",
          "signature": "Sh State",
          "source": "src/Shelly-Base.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "get",
          "package": "shelly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the current value of an environment variable.\n if non-existant or empty text, will be Nothing\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "get_env",
          "package": "shelly",
          "signature": "Text -\u003e Sh (Maybe Text)",
          "source": "src/Shelly.html#get_env",
          "type": "function"
        },
        "index": {
          "description": "Fetch the current value of an environment variable if non-existant or empty text will be Nothing",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "get_env",
          "normalized": "Text-\u003eSh(Maybe Text)",
          "package": "shelly",
          "signature": "Text-\u003eSh(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:get_env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the full environment\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "get_env_all",
          "package": "shelly",
          "signature": "Sh [(String, String)]",
          "source": "src/Shelly.html#get_env_all",
          "type": "function"
        },
        "index": {
          "description": "get the full environment",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "get_env_all",
          "normalized": "Sh[(String,String)]",
          "package": "shelly",
          "signature": "Sh[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:get_env_all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use fromMaybe DEFAULT get_env\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eFetch the current value of an environment variable. Both empty and\n non-existent variables give the default Text value as a result\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "get_env_def",
          "package": "shelly",
          "signature": "Text -\u003e Text -\u003e Sh Text",
          "source": "src/Shelly.html#get_env_def",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use fromMaybe DEFAULT get env Fetch the current value of an environment variable Both empty and non-existent variables give the default Text value as result",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "get_env_def",
          "normalized": "Text-\u003eText-\u003eSh Text",
          "package": "shelly",
          "signature": "Text-\u003eText-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:get_env_def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the current value of an environment variable. Both empty and\n non-existent variables give empty string as a result.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "get_env_text",
          "package": "shelly",
          "signature": "Text -\u003e Sh Text",
          "source": "src/Shelly.html#get_env_text",
          "type": "function"
        },
        "index": {
          "description": "Fetch the current value of an environment variable Both empty and non-existent variables give empty string as result",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "get_env_text",
          "normalized": "Text-\u003eSh Text",
          "package": "shelly",
          "signature": "Text-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:get_env_text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use get_env_all\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shelly",
          "name": "get_environment",
          "package": "shelly",
          "signature": "Sh [(String, String)]",
          "source": "src/Shelly.html#get_environment",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use get env all",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "get_environment",
          "normalized": "Sh[(String,String)]",
          "package": "shelly",
          "signature": "Sh[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:get_environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use get_env or get_env_text\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003edeprecated\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "getenv",
          "package": "shelly",
          "signature": "Text -\u003e Sh Text",
          "source": "src/Shelly.html#getenv",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use get env or get env text deprecated",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "getenv",
          "normalized": "Text-\u003eSh Text",
          "package": "shelly",
          "signature": "Text-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:getenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as a normal \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e but specialized for the Sh monad.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "handle_sh",
          "package": "shelly",
          "signature": "Sh a -\u003e (e -\u003e Sh a) -\u003e Sh a",
          "source": "src/Shelly.html#handle_sh",
          "type": "function"
        },
        "index": {
          "description": "Same as normal catch but specialized for the Sh monad",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "handle_sh",
          "normalized": "Sh a-\u003e(b-\u003eSh a)-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003e(e-\u003eSh a)-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:handle_sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle an exception in the Sh monad.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "handleany_sh",
          "package": "shelly",
          "signature": "Sh a -\u003e (SomeException -\u003e Sh a) -\u003e Sh a",
          "source": "src/Shelly.html#handleany_sh",
          "type": "function"
        },
        "index": {
          "description": "Handle an exception in the Sh monad",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "handleany_sh",
          "normalized": "Sh a-\u003e(SomeException-\u003eSh a)-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003e(SomeException-\u003eSh a)-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:handleany_sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea print lifted into \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "inspect",
          "package": "shelly",
          "signature": "s -\u003e Sh ()",
          "source": "src/Shelly-Base.html#inspect",
          "type": "function"
        },
        "index": {
          "description": "print lifted into Sh",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "inspect",
          "normalized": "a-\u003eSh()",
          "package": "shelly",
          "signature": "s-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:inspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea print lifted into \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e using stderr\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "inspect_err",
          "package": "shelly",
          "signature": "s -\u003e Sh ()",
          "source": "src/Shelly-Base.html#inspect_err",
          "type": "function"
        },
        "index": {
          "description": "print lifted into Sh using stderr",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "inspect_err",
          "normalized": "a-\u003eSh()",
          "package": "shelly",
          "signature": "s-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:inspect_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe exit code from the last command.\n Unless you set \u003ccode\u003e\u003ca\u003eerrExit\u003c/a\u003e\u003c/code\u003e to False you won't get a chance to use this: a non-zero exit code will throw an exception.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "lastExitCode",
          "package": "shelly",
          "signature": "Sh Int",
          "source": "src/Shelly.html#lastExitCode",
          "type": "function"
        },
        "index": {
          "description": "The exit code from the last command Unless you set errExit to False you won get chance to use this non-zero exit code will throw an exception",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "lastExitCode",
          "package": "shelly",
          "partial": "Exit Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:lastExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe output of last external command. See \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "lastStderr",
          "package": "shelly",
          "signature": "Sh Text",
          "source": "src/Shelly.html#lastStderr",
          "type": "function"
        },
        "index": {
          "description": "The output of last external command See run",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "lastStderr",
          "package": "shelly",
          "partial": "Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:lastStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList directory contents. Does *not* include \".\" and \"..\", but it does\n include (other) hidden files.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "ls",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh [FilePath]",
          "source": "src/Shelly-Base.html#ls",
          "type": "function"
        },
        "index": {
          "description": "List directory contents Does not include and but it does include other hidden files",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "ls",
          "normalized": "FilePath-\u003eSh[FilePath]",
          "package": "shelly",
          "signature": "FilePath-\u003eSh[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:ls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet back [Text] instead of [FilePath]\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "lsT",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh [Text]",
          "source": "src/Shelly.html#lsT",
          "type": "function"
        },
        "index": {
          "description": "Get back Text instead of FilePath",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "lsT",
          "normalized": "FilePath-\u003eSh[Text]",
          "package": "shelly",
          "signature": "FilePath-\u003eSh[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:lsT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new directory (fails if the directory exists).\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "mkdir",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly.html#mkdir",
          "type": "function"
        },
        "index": {
          "description": "Create new directory fails if the directory exists",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "mkdir",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:mkdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new directory tree. You can describe a bunch of directories as\n a tree and this function will create all subdirectories. An example:\n\u003c/p\u003e\u003cpre\u003e exec = mkTree $\n           \"package\" # [\n                \"src\" # [\n                    \"Data\" # leaves [\"Tree\", \"List\", \"Set\", \"Map\"]\n                ],\n                \"test\" # leaves [\"QuickCheck\", \"HUnit\"],\n                \"dist/doc/html\" # []\n            ]\n         where (#) = Node\n               leaves = map (# [])\n\u003c/pre\u003e",
          "module": "Shelly",
          "name": "mkdirTree",
          "package": "shelly",
          "signature": "Tree FilePath -\u003e Sh ()",
          "source": "src/Shelly.html#mkdirTree",
          "type": "function"
        },
        "index": {
          "description": "Create new directory tree You can describe bunch of directories as tree and this function will create all subdirectories An example exec mkTree package src Data leaves Tree List Set Map test leaves QuickCheck HUnit dist doc html where Node leaves map",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "mkdirTree",
          "normalized": "Tree FilePath-\u003eSh()",
          "package": "shelly",
          "partial": "Tree",
          "signature": "Tree FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:mkdirTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new directory, including parents (succeeds if the directory\n already exists).\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "mkdir_p",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly.html#mkdir_p",
          "type": "function"
        },
        "index": {
          "description": "Create new directory including parents succeeds if the directory already exists",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "mkdir_p",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:mkdir_p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a file. The second path could be a directory, in which case the\n original file is moved into that directory.\n wraps system-fileio \u003ccode\u003e\u003ca\u003erename\u003c/a\u003e\u003c/code\u003e, which may not work across FS boundaries\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "mv",
          "package": "shelly",
          "signature": "FilePath -\u003e FilePath -\u003e Sh ()",
          "source": "src/Shelly.html#mv",
          "type": "function"
        },
        "index": {
          "description": "Move file The second path could be directory in which case the original file is moved into that directory wraps system-fileio rename which may not work across FS boundaries",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "mv",
          "normalized": "FilePath-\u003eFilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eFilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:mv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use absPath, canonic, or relPath instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003edeprecated\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "path",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Base.html#path",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use absPath canonic or relPath instead deprecated",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "path",
          "normalized": "FilePath-\u003eSh FilePath",
          "package": "shelly",
          "signature": "FilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sub-Sh with command echoing on or off\n Defaults to False, set to True by \u003ccode\u003e\u003ca\u003everbosely\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "print_commands",
          "package": "shelly",
          "signature": "Bool -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly.html#print_commands",
          "type": "function"
        },
        "index": {
          "description": "Create sub-Sh with command echoing on or off Defaults to False set to True by verbosely",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "print_commands",
          "normalized": "Bool-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "Bool-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:print_commands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sub-Sh with stderr printing on or off\n Defaults to True.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "print_stderr",
          "package": "shelly",
          "signature": "Bool -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly.html#print_stderr",
          "type": "function"
        },
        "index": {
          "description": "Create sub-Sh with stderr printing on or off Defaults to True",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "print_stderr",
          "normalized": "Bool-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "Bool-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:print_stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sub-Sh with stdout printing on or off\n Defaults to True.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "print_stdout",
          "package": "shelly",
          "signature": "Bool -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly.html#print_stdout",
          "type": "function"
        },
        "index": {
          "description": "Create sub-Sh with stdout printing on or off Defaults to True",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "print_stdout",
          "normalized": "Bool-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "Bool-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:print_stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "put",
          "package": "shelly",
          "signature": "State -\u003e Sh ()",
          "source": "src/Shelly.html#put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "put",
          "normalized": "State-\u003eSh()",
          "package": "shelly",
          "signature": "State-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the current (Sh) working directory.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "pwd",
          "package": "shelly",
          "signature": "Sh FilePath",
          "source": "src/Shelly.html#pwd",
          "type": "function"
        },
        "index": {
          "description": "Obtain the current Sh working directory",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "pwd",
          "package": "shelly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:pwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor exiting with status \u003e 0 without printing debug information\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "quietExit",
          "package": "shelly",
          "signature": "Int -\u003e Sh a",
          "source": "src/Shelly.html#quietExit",
          "type": "function"
        },
        "index": {
          "description": "for exiting with status without printing debug information",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "quietExit",
          "normalized": "Int-\u003eSh a",
          "package": "shelly",
          "partial": "Exit",
          "signature": "Int-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:quietExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewraps ByteSting readFile\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "readBinary",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ByteString",
          "source": "src/Shelly.html#readBinary",
          "type": "function"
        },
        "index": {
          "description": "wraps ByteSting readFile",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "readBinary",
          "normalized": "FilePath-\u003eSh ByteString",
          "package": "shelly",
          "partial": "Binary",
          "signature": "FilePath-\u003eSh ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:readBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "readfile",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Text",
          "source": "src/Shelly.html#readfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "readfile",
          "normalized": "FilePath-\u003eSh Text",
          "package": "shelly",
          "signature": "FilePath-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:readfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a relative path relative to the current Sh working directory.\n An absolute path is returned as is.\n To create an absolute path, use \u003ccode\u003e\u003ca\u003eabsPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "relPath",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh FilePath",
          "source": "src/Shelly-Base.html#relPath",
          "type": "function"
        },
        "index": {
          "description": "Makes relative path relative to the current Sh working directory An absolute path is returned as is To create an absolute path use absPath",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "relPath",
          "normalized": "FilePath-\u003eSh FilePath",
          "package": "shelly",
          "partial": "Path",
          "signature": "FilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:relPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake the second path relative to the first\n Uses \u003ccode\u003e\u003ca\u003estripPrefix\u003c/a\u003e\u003c/code\u003e, but will canonicalize the paths if necessary\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "relativeTo",
          "package": "shelly",
          "signature": "FilePath-\u003e FilePath-\u003e Sh FilePath",
          "type": "function"
        },
        "index": {
          "description": "make the second path relative to the first Uses stripPrefix but will canonicalize the paths if necessary",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "relativeTo",
          "normalized": "FilePath-\u003eFilePath-\u003eSh FilePath",
          "package": "shelly",
          "partial": "To",
          "signature": "FilePath-\u003eFilePath-\u003eSh FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:relativeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a file.\n Does fail if the file does not exist (use \u003ccode\u003e\u003ca\u003erm_f\u003c/a\u003e\u003c/code\u003e instead) or is not a file.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "rm",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly.html#rm",
          "type": "function"
        },
        "index": {
          "description": "Remove file Does fail if the file does not exist use rm instead or is not file",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "rm",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:rm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a file. Does not fail if the file does not exist.\n Does fail if the file is not a file.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "rm_f",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly.html#rm_f",
          "type": "function"
        },
        "index": {
          "description": "Remove file Does not fail if the file does not exist Does fail if the file is not file",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "rm_f",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:rm_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA swiss army cannon for removing things. Actually this goes farther than a\n normal rm -rf, as it will circumvent permission problems for the files we\n own. Use carefully.\n Uses \u003ccode\u003e\u003ca\u003eremoveTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "rm_rf",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly.html#rm_rf",
          "type": "function"
        },
        "index": {
          "description": "swiss army cannon for removing things Actually this goes farther than normal rm rf as it will circumvent permission problems for the files we own Use carefully Uses removeTree",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "rm_rf",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:rm_rf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an external command.\n Takes the command name and arguments.\n\u003c/p\u003e\u003cp\u003eYou may prefer using \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e instead, which is a variadic argument version\n of this function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e are collected. The \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e is returned as\n a result of \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e, and complete stderr output is available after the fact using\n \u003ccode\u003e\u003ca\u003elastStderr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eAll of the stdout output will be loaded into memory.\n You can avoid this if you don't need stdout by using \u003ccode\u003e\u003ca\u003erun_\u003c/a\u003e\u003c/code\u003e,\n If you want to avoid the memory and need to process the output then use \u003ccode\u003e\u003ca\u003erunFoldLines\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erunHandle\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erunHandles\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBy default shell characters are escaped and\n the command name is a name of a program that can be found via \u003ccode\u003ePATH\u003c/code\u003e.\n Shelly will look through the \u003ccode\u003ePATH\u003c/code\u003e itself to find the command.\n\u003c/p\u003e\u003cp\u003eWhen \u003ccode\u003e\u003ca\u003eescaping\u003c/a\u003e\u003c/code\u003e is set to \u003ccode\u003eFalse\u003c/code\u003e, shell characters are allowed.\n Since there is no longer a guarantee that a single program name is\n given, Shelly cannot look in the \u003ccode\u003ePATH\u003c/code\u003e for it.\n a \u003ccode\u003ePATH\u003c/code\u003e modified by setenv is not taken into account when finding the exe name.\n Instead the original Haskell program \u003ccode\u003ePATH\u003c/code\u003e is used.\n On a Posix system the \u003ccode\u003eenv\u003c/code\u003e command can be used to make the \u003ccode\u003e\u003ca\u003esetenv\u003c/a\u003e\u003c/code\u003e PATH used when \u003ccode\u003e\u003ca\u003eescaping\u003c/a\u003e\u003c/code\u003e is set to False. \u003ccode\u003eenv echo hello\u003c/code\u003e instead of \u003ccode\u003eecho hello\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "run",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e Sh Text",
          "source": "src/Shelly.html#run",
          "type": "function"
        },
        "index": {
          "description": "Execute an external command Takes the command name and arguments You may prefer using cmd instead which is variadic argument version of this function stdout and stderr are collected The stdout is returned as result of run and complete stderr output is available after the fact using lastStderr All of the stdout output will be loaded into memory You can avoid this if you don need stdout by using run If you want to avoid the memory and need to process the output then use runFoldLines or runHandle or runHandles By default shell characters are escaped and the command name is name of program that can be found via PATH Shelly will look through the PATH itself to find the command When escaping is set to False shell characters are allowed Since there is no longer guarantee that single program name is given Shelly cannot look in the PATH for it PATH modified by setenv is not taken into account when finding the exe name Instead the original Haskell program PATH is used On Posix system the env command can be used to make the setenv PATH used when escaping is set to False env echo hello instead of echo hello",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "run",
          "normalized": "FilePath-\u003e[Text]-\u003eSh Text",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused by \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e. fold over stdout line-by-line as it is read to avoid keeping it in memory\n stderr is still being placed in memory under the assumption it is always relatively small\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "runFoldLines",
          "package": "shelly",
          "signature": "a -\u003e FoldCallback a -\u003e FilePath -\u003e [Text] -\u003e Sh a",
          "source": "src/Shelly.html#runFoldLines",
          "type": "function"
        },
        "index": {
          "description": "used by run fold over stdout line-by-line as it is read to avoid keeping it in memory stderr is still being placed in memory under the assumption it is always relatively small",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "runFoldLines",
          "normalized": "a-\u003eFoldCallback a-\u003eFilePath-\u003e[Text]-\u003eSh a",
          "package": "shelly",
          "partial": "Fold Lines",
          "signature": "a-\u003eFoldCallback a-\u003eFilePath-\u003e[Text]-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:runFoldLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e but gives the raw stdout handle in a callback.\n If you want even more control, use \u003ccode\u003e\u003ca\u003erunHandles\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "runHandle",
          "package": "shelly",
          "signature": "FilePath-\u003e [Text]-\u003e (Handle -\u003e Sh a)-\u003e Sh a",
          "type": "function"
        },
        "index": {
          "description": "Similar to run but gives the raw stdout handle in callback If you want even more control use runHandles",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "runHandle",
          "normalized": "FilePath-\u003e[Text]-\u003e(Handle-\u003eSh a)-\u003eSh a",
          "package": "shelly",
          "partial": "Handle",
          "signature": "FilePath-\u003e[Text]-\u003e(Handle-\u003eSh a)-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:runHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e but gives direct access to all input and output handles.\n\u003c/p\u003e\u003cp\u003eBe careful when using the optional input handles.\n If you specify Inherit for a handle then attempting to access the handle in your\n callback is an error\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "runHandles",
          "package": "shelly",
          "signature": "FilePath-\u003e [Text]-\u003e [StdHandle]-\u003e (Handle -\u003e Handle -\u003e Handle -\u003e Sh a)-\u003e Sh a",
          "type": "function"
        },
        "index": {
          "description": "Similar to run but gives direct access to all input and output handles Be careful when using the optional input handles If you specify Inherit for handle then attempting to access the handle in your callback is an error",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "runHandles",
          "normalized": "FilePath-\u003e[Text]-\u003e[StdHandle]-\u003e(Handle-\u003eHandle-\u003eHandle-\u003eSh a)-\u003eSh a",
          "package": "shelly",
          "partial": "Handles",
          "signature": "FilePath-\u003e[Text]-\u003e[StdHandle]-\u003e(Handle-\u003eHandle-\u003eHandle-\u003eSh a)-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:runHandles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe same as \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e, but return \u003ccode\u003e()\u003c/code\u003e instead of the stdout content\n stdout will be read and discarded line-by-line\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "run_",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e Sh ()",
          "source": "src/Shelly.html#run_",
          "type": "function"
        },
        "index": {
          "description": "the same as run but return instead of the stdout content stdout will be read and discarded line-by-line",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "run_",
          "normalized": "FilePath-\u003e[Text]-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:run_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the stdin to be used and cleared by the next \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "setStdin",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly.html#setStdin",
          "type": "function"
        },
        "index": {
          "description": "set the stdin to be used and cleared by the next run",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "setStdin",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "partial": "Stdin",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:setStdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an environment variable. The environment is maintained in Sh\n internally, and is passed to any external commands to be executed.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "setenv",
          "package": "shelly",
          "signature": "Text -\u003e Text -\u003e Sh ()",
          "source": "src/Shelly.html#setenv",
          "type": "function"
        },
        "index": {
          "description": "Set an environment variable The environment is maintained in Sh internally and is passed to any external commands to be executed",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "setenv",
          "normalized": "Text-\u003eText-\u003eSh()",
          "package": "shelly",
          "signature": "Text-\u003eText-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:setenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnter a Sh from (Monad)IO. The environment and working directories are\n inherited from the current process-wide values. Any subsequent changes in\n processwide working directory or environment are not reflected in the\n running Sh.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "shelly",
          "package": "shelly",
          "signature": "Sh a -\u003e m a",
          "source": "src/Shelly.html#shelly",
          "type": "function"
        },
        "index": {
          "description": "Enter Sh from Monad IO The environment and working directories are inherited from the current process-wide values Any subsequent changes in processwide working directory or environment are not reflected in the running Sh",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "shelly",
          "normalized": "Sh a-\u003eb a",
          "package": "shelly",
          "signature": "Sh a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:shelly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing this entry point does not create a \u003ccode\u003e.shelly\u003c/code\u003e directory in the case\n of failure. Instead it logs directly into the standard error stream (\u003ccode\u003estderr\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "shellyNoDir",
          "package": "shelly",
          "signature": "Sh a -\u003e m a",
          "source": "src/Shelly.html#shellyNoDir",
          "type": "function"
        },
        "index": {
          "description": "Using this entry point does not create shelly directory in the case of failure Instead it logs directly into the standard error stream stderr",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "shellyNoDir",
          "normalized": "Sh a-\u003eb a",
          "package": "shelly",
          "partial": "No Dir",
          "signature": "Sh a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:shellyNoDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "show_command",
          "package": "shelly",
          "signature": "FilePath -\u003e [Text] -\u003e Text",
          "source": "src/Shelly.html#show_command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "show_command",
          "normalized": "FilePath-\u003e[Text]-\u003eText",
          "package": "shelly",
          "signature": "FilePath-\u003e[Text]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:show_command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sub-Sh in which external command outputs are not echoed and\n commands are not printed.\n See \u003ccode\u003e\u003ca\u003esub\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "silently",
          "package": "shelly",
          "signature": "Sh a -\u003e Sh a",
          "source": "src/Shelly.html#silently",
          "type": "function"
        },
        "index": {
          "description": "Create sub-Sh in which external command outputs are not echoed and commands are not printed See sub",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "silently",
          "normalized": "Sh a-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:silently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethreadDelay wrapper that uses seconds\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "sleep",
          "package": "shelly",
          "signature": "Int -\u003e Sh ()",
          "source": "src/Shelly.html#sleep",
          "type": "function"
        },
        "index": {
          "description": "threadDelay wrapper that uses seconds",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "sleep",
          "normalized": "Int-\u003eSh()",
          "package": "shelly",
          "signature": "Int-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:sleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun commands over SSH.\n An ssh executable is expected in your path.\n Commands are in the same form as \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e, but given as pairs\n\u003c/p\u003e\u003cpre\u003e sshPairs \"server-name\" [(\"cd\", \"dir\"), (\"rm\",[\"-r\",\"dir2\"])]\n\u003c/pre\u003e\u003cp\u003eThis interface is crude, but it works for now.\n\u003c/p\u003e\u003cp\u003ePlease note this sets \u003ccode\u003e\u003ca\u003eescaping\u003c/a\u003e\u003c/code\u003e to False: the commands will not be shell escaped.\n Internally the list of commands are combined with the string \u003ccode\u003e&&\u003c/code\u003e before given to ssh.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "sshPairs",
          "package": "shelly",
          "signature": "Text -\u003e [(FilePath, [Text])] -\u003e Sh Text",
          "source": "src/Shelly.html#sshPairs",
          "type": "function"
        },
        "index": {
          "description": "run commands over SSH An ssh executable is expected in your path Commands are in the same form as run but given as pairs sshPairs server-name cd dir rm dir2 This interface is crude but it works for now Please note this sets escaping to False the commands will not be shell escaped Internally the list of commands are combined with the string before given to ssh",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "sshPairs",
          "normalized": "Text-\u003e[(FilePath,[Text])]-\u003eSh Text",
          "package": "shelly",
          "partial": "Pairs",
          "signature": "Text-\u003e[(FilePath,[Text])]-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:sshPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003esshPairs\u003c/a\u003e\u003c/code\u003e, but returns ()\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "sshPairs_",
          "package": "shelly",
          "signature": "Text -\u003e [(FilePath, [Text])] -\u003e Sh ()",
          "source": "src/Shelly.html#sshPairs_",
          "type": "function"
        },
        "index": {
          "description": "same as sshPairs but returns",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "sshPairs_",
          "normalized": "Text-\u003e[(FilePath,[Text])]-\u003eSh()",
          "package": "shelly",
          "partial": "Pairs",
          "signature": "Text-\u003e[(FilePath,[Text])]-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:sshPairs_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnter a sub-Sh that inherits the environment\n The original state will be restored when the sub-Sh completes.\n Exceptions are propagated normally.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "sub",
          "package": "shelly",
          "signature": "Sh a -\u003e Sh a",
          "source": "src/Shelly.html#sub",
          "type": "function"
        },
        "index": {
          "description": "Enter sub-Sh that inherits the environment The original state will be restored when the sub-Sh completes Exceptions are propagated normally",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "sub",
          "normalized": "Sh a-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e, but use it combinator style\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "tag",
          "package": "shelly",
          "signature": "Sh a -\u003e Text -\u003e Sh a",
          "source": "src/Shelly.html#tag",
          "type": "function"
        },
        "index": {
          "description": "same as trace but use it combinator style",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "tag",
          "normalized": "Sh a-\u003eText-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003eText-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efail that takes a Text\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "terror",
          "package": "shelly",
          "signature": "Text -\u003e Sh a",
          "source": "src/Shelly.html#terror",
          "type": "function"
        },
        "index": {
          "description": "fail that takes Text",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "terror",
          "normalized": "Text-\u003eSh a",
          "package": "shelly",
          "signature": "Text-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:terror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a path point to an existing directory?\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "test_d",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Bool",
          "source": "src/Shelly-Base.html#test_d",
          "type": "function"
        },
        "index": {
          "description": "Does path point to an existing directory",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "test_d",
          "normalized": "FilePath-\u003eSh Bool",
          "package": "shelly",
          "signature": "FilePath-\u003eSh Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:test_d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a path point to an existing filesystem object?\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "test_e",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Bool",
          "source": "src/Shelly.html#test_e",
          "type": "function"
        },
        "index": {
          "description": "Does path point to an existing filesystem object",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "test_e",
          "normalized": "FilePath-\u003eSh Bool",
          "package": "shelly",
          "signature": "FilePath-\u003eSh Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:test_e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a path point to an existing file?\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "test_f",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Bool",
          "source": "src/Shelly.html#test_f",
          "type": "function"
        },
        "index": {
          "description": "Does path point to an existing file",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "test_f",
          "normalized": "FilePath-\u003eSh Bool",
          "package": "shelly",
          "signature": "FilePath-\u003eSh Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:test_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that a file is in the PATH and also executable\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "test_px",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Bool",
          "source": "src/Shelly.html#test_px",
          "type": "function"
        },
        "index": {
          "description": "Test that file is in the PATH and also executable",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "test_px",
          "normalized": "FilePath-\u003eSh Bool",
          "package": "shelly",
          "signature": "FilePath-\u003eSh Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:test_px"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a path point to a symlink?\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "test_s",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Bool",
          "source": "src/Shelly-Base.html#test_s",
          "type": "function"
        },
        "index": {
          "description": "Does path point to symlink",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "test_s",
          "normalized": "FilePath-\u003eSh Bool",
          "package": "shelly",
          "signature": "FilePath-\u003eSh Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:test_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Sh computation and collect timing  information.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "time",
          "package": "shelly",
          "signature": "Sh a -\u003e Sh (Double, a)",
          "source": "src/Shelly.html#time",
          "type": "function"
        },
        "index": {
          "description": "Run Sh computation and collect timing information",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "time",
          "normalized": "Sh a-\u003eSh(Double,a)",
          "package": "shelly",
          "signature": "Sh a-\u003eSh(Double,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "toTextArg",
          "package": "shelly",
          "signature": "a -\u003e Text",
          "source": "src/Shelly.html#toTextArg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "toTextArg",
          "normalized": "a-\u003eText",
          "package": "shelly",
          "partial": "Text Arg",
          "signature": "a-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:toTextArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly",
          "name": "toTextWarn",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh Text",
          "source": "src/Shelly.html#toTextWarn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "toTextWarn",
          "normalized": "FilePath-\u003eSh Text",
          "package": "shelly",
          "partial": "Text Warn",
          "signature": "FilePath-\u003eSh Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:toTextWarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate a file, creating (a blank file) if it does not exist.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "touchfile",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh ()",
          "source": "src/Shelly.html#touchfile",
          "type": "function"
        },
        "index": {
          "description": "Update file creating blank file if it does not exist",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "touchfile",
          "normalized": "FilePath-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:touchfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einternally log what occurred.\n Log will be re-played on failure.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "trace",
          "package": "shelly",
          "signature": "Text -\u003e Sh ()",
          "source": "src/Shelly-Base.html#trace",
          "type": "function"
        },
        "index": {
          "description": "internally log what occurred Log will be re-played on failure",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "trace",
          "normalized": "Text-\u003eSh()",
          "package": "shelly",
          "signature": "Text-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sub-Sh where commands are not traced\n Defaults to True.\n You should only set to False temporarily for very specific reasons\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "tracing",
          "package": "shelly",
          "signature": "Bool -\u003e Sh a -\u003e Sh a",
          "source": "src/Shelly.html#tracing",
          "type": "function"
        },
        "index": {
          "description": "Create sub-Sh where commands are not traced Defaults to True You should only set to False temporarily for very specific reasons",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "tracing",
          "normalized": "Bool-\u003eSh a-\u003eSh a",
          "package": "shelly",
          "signature": "Bool-\u003eSh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:tracing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransfer from one handle to another\n For example, send contents of a process output to stdout.\n does not close the write handle.\n\u003c/p\u003e\u003cp\u003eAlso, fold over the contents being streamed line by line\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "transferFoldHandleLines",
          "package": "shelly",
          "signature": "a -\u003e FoldCallback a -\u003e Handle -\u003e Handle -\u003e IO a",
          "source": "src/Shelly.html#transferFoldHandleLines",
          "type": "function"
        },
        "index": {
          "description": "Transfer from one handle to another For example send contents of process output to stdout does not close the write handle Also fold over the contents being streamed line by line",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "transferFoldHandleLines",
          "normalized": "a-\u003eFoldCallback a-\u003eHandle-\u003eHandle-\u003eIO a",
          "package": "shelly",
          "partial": "Fold Handle Lines",
          "signature": "a-\u003eFoldCallback a-\u003eHandle-\u003eHandle-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:transferFoldHandleLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransfer from one handle to another\n For example, send contents of a process output to stdout.\n does not close the write handle.\n\u003c/p\u003e\u003cp\u003eAlso, return the complete contents being streamed line by line.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "transferLinesAndCombine",
          "package": "shelly",
          "signature": "Handle -\u003e Handle -\u003e IO Text",
          "source": "src/Shelly.html#transferLinesAndCombine",
          "type": "function"
        },
        "index": {
          "description": "Transfer from one handle to another For example send contents of process output to stdout does not close the write handle Also return the complete contents being streamed line by line",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "transferLinesAndCombine",
          "normalized": "Handle-\u003eHandle-\u003eIO Text",
          "package": "shelly",
          "partial": "Lines And Combine",
          "signature": "Handle-\u003eHandle-\u003eIO Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:transferLinesAndCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sub-Sh in which external command outputs are echoed and\n Executed commands are printed\n See \u003ccode\u003e\u003ca\u003esub\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "verbosely",
          "package": "shelly",
          "signature": "Sh a -\u003e Sh a",
          "source": "src/Shelly.html#verbosely",
          "type": "function"
        },
        "index": {
          "description": "Create sub-Sh in which external command outputs are echoed and Executed commands are printed See sub",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "verbosely",
          "normalized": "Sh a-\u003eSh a",
          "package": "shelly",
          "signature": "Sh a-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:verbosely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a full path to an executable by looking at the \u003ccode\u003ePATH\u003c/code\u003e environement\n variable. Windows normally looks in additional places besides the\n \u003ccode\u003ePATH\u003c/code\u003e: this does not duplicate that behavior.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "which",
          "package": "shelly",
          "signature": "FilePath -\u003e Sh (Maybe FilePath)",
          "source": "src/Shelly.html#which",
          "type": "function"
        },
        "index": {
          "description": "Get full path to an executable by looking at the PATH environement variable Windows normally looks in additional places besides the PATH this does not duplicate that behavior",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "which",
          "normalized": "FilePath-\u003eSh(Maybe FilePath)",
          "package": "shelly",
          "signature": "FilePath-\u003eSh(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:which"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temporary directory and pass it as a parameter to a Sh\n computation. The directory is nuked afterwards.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "withTmpDir",
          "package": "shelly",
          "signature": "(FilePath -\u003e Sh a) -\u003e Sh a",
          "source": "src/Shelly.html#withTmpDir",
          "type": "function"
        },
        "index": {
          "description": "Create temporary directory and pass it as parameter to Sh computation The directory is nuked afterwards",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "withTmpDir",
          "normalized": "(FilePath-\u003eSh a)-\u003eSh a",
          "package": "shelly",
          "partial": "Tmp Dir",
          "signature": "(FilePath-\u003eSh a)-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:withTmpDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Lazy Text to a file.\n\u003c/p\u003e",
          "module": "Shelly",
          "name": "writefile",
          "package": "shelly",
          "signature": "FilePath -\u003e Text -\u003e Sh ()",
          "source": "src/Shelly.html#writefile",
          "type": "function"
        },
        "index": {
          "description": "Write Lazy Text to file",
          "hierarchy": "Shelly",
          "module": "Shelly",
          "name": "writefile",
          "normalized": "FilePath-\u003eText-\u003eSh()",
          "package": "shelly",
          "signature": "FilePath-\u003eText-\u003eSh()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:writefile"
      }
    }
  ]
]