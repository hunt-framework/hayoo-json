[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a wrapper for the module \u003ca\u003eShelly\u003c/a\u003e. \n The only difference is a main type \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e. In this module \n \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e contains a list of results. Actual definition of the type \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e is:\n\u003c/p\u003e\u003cpre\u003e import qualified Shelly as S\n\n newtype Sh a = Sh { unSh :: S.Sh [a] }\n\u003c/pre\u003e\u003cp\u003eThis definition can simplify some filesystem commands. \n A monad bind operator becomes a pipe operator and we can write\n\u003c/p\u003e\u003cpre\u003e findExt ext = findWhen (pure . hasExt ext)\n\n main :: IO ()\n main = shs $ do\n     mkdir \"new\"\n     findExt \"hs\"  \".\" \u003e\u003e= flip cp \"new\"\n     findExt \"cpp\" \".\" \u003e\u003e= rm_f \n     liftIO $ putStrLn \"done\"\n\u003c/pre\u003e\u003cp\u003eMonad methods \u003ca\u003ereturn\u003c/a\u003e and \u003ca\u003e\u003e\u003e=\u003c/a\u003e behave like methods for\n \u003ccode\u003eListT Shelly.Sh\u003c/code\u003e, but \u003ca\u003e\u003e\u003e\u003c/a\u003e forgets the number of \n the empty effects. So the last line prints \u003ccode\u003e\"done\"\u003c/code\u003e only once. \n\u003c/p\u003e\u003cp\u003eDocumentation in this module mostly just reference documentation from\n the main \u003ca\u003eShelly\u003c/a\u003e module.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n {-# LANGUAGE ExtendedDefaultRules #-}\n {-# OPTIONS_GHC -fno-warn-type-defaults #-}\n import Shelly\n import Data.Text as T\n default (T.Text)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "module",
        "fct-source": "src/Shelly-Pipe.html",
        "fct-type": "module",
        "title": "Pipe"
      },
      "index": {
        "description": "This module is wrapper for the module Shelly The only difference is main type Sh In this module Sh contains list of results Actual definition of the type Sh is import qualified Shelly as newtype Sh Sh unSh S.Sh This definition can simplify some filesystem commands monad bind operator becomes pipe operator and we can write findExt ext findWhen pure hasExt ext main IO main shs do mkdir new findExt hs flip cp new findExt cpp rm liftIO putStrLn done Monad methods return and behave like methods for ListT Shelly.Sh but forgets the number of the empty effects So the last line prints done only once Documentation in this module mostly just reference documentation from the main Shelly module LANGUAGE OverloadedStrings LANGUAGE ExtendedDefaultRules OPTIONS GHC fno-warn-type-defaults import Shelly import Data.Text as default T.Text",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "Pipe",
        "normalized": "",
        "package": "shelly",
        "partial": "Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#t:FilePath",
      "description": {
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "FilePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "FilePath",
        "normalized": "",
        "package": "shelly",
        "partial": "File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#t:FoldCallback",
      "description": {
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "type",
        "fct-source": "src/Shelly.html#FoldCallback",
        "fct-type": "type",
        "title": "FoldCallback"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "FoldCallback",
        "normalized": "",
        "package": "shelly",
        "partial": "Fold Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#t:Sh",
      "description": {
        "fct-descr": "\u003cp\u003eThis type is a simple wrapper for a type \u003ccode\u003eShelly.Sh\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e contains a list of results. \n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "data",
        "fct-source": "src/Shelly-Pipe.html#Sh",
        "fct-type": "data",
        "title": "Sh"
      },
      "index": {
        "description": "This type is simple wrapper for type Shelly.Sh Sh contains list of results",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "Sh",
        "normalized": "",
        "package": "shelly",
        "partial": "Sh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#t:ShellyHandler",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eShellyHandler\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "data",
        "fct-source": "src/Shelly-Pipe.html#ShellyHandler",
        "fct-type": "data",
        "title": "ShellyHandler"
      },
      "index": {
        "description": "see ShellyHandler",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "ShellyHandler",
        "normalized": "",
        "package": "shelly",
        "partial": "Shelly Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:-45--124--45-",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003e-|-\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh Text -\u003e Sh b -\u003e Sh b",
        "fct-source": "src/Shelly-Pipe.html#-%7C-",
        "fct-type": "function",
        "title": "(-|-)"
      },
      "index": {
        "description": "see",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "(-|-) -|-",
        "normalized": "Sh Text-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh Text-\u003eSh b-\u003eSh b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:-60--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-type": "function",
        "title": "(\u003c$\u003e)"
      },
      "index": {
        "description": "An infix synonym for fmap",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "(\u003c$\u003e) \u003c$\u003e",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "shelly",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003euses System.FilePath.CurrentOS, but can automatically convert a Text\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "filepath1 -\u003e filepath2 -\u003e FilePath",
        "fct-source": "src/Shelly.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "uses System.FilePath.CurrentOS but can automatically convert Text",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "a-\u003ea-\u003eFilePath",
        "package": "shelly",
        "partial": "",
        "signature": "filepath-\u003efilepath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:-60-.-62-",
      "description": {
        "fct-descr": "\u003cp\u003euses System.FilePath.CurrentOS, but can automatically convert a Text\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "filepath -\u003e Text -\u003e FilePath",
        "fct-source": "src/Shelly.html#%3C.%3E",
        "fct-type": "function",
        "title": "(\u003c.\u003e)"
      },
      "index": {
        "description": "uses System.FilePath.CurrentOS but can automatically convert Text",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "(\u003c.\u003e) \u003c.\u003e",
        "normalized": "a-\u003eText-\u003eFilePath",
        "package": "shelly",
        "partial": "",
        "signature": "filepath-\u003eText-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:ShellyHandler",
      "description": {
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "ShellyHandler (e -\u003e Sh a)",
        "fct-source": "src/Shelly-Pipe.html#ShellyHandler",
        "fct-type": "function",
        "title": "ShellyHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "ShellyHandler",
        "normalized": "ShellyHandler(a-\u003eSh b)",
        "package": "shelly",
        "partial": "Shelly Handler",
        "signature": "ShellyHandler(e-\u003eSh a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:absPath",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eabsPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Pipe.html#absPath",
        "fct-type": "function",
        "title": "absPath"
      },
      "index": {
        "description": "see absPath",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "absPath",
        "normalized": "FilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "Path",
        "signature": "FilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:appendToPath",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eappendToPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#appendToPath",
        "fct-type": "function",
        "title": "appendToPath"
      },
      "index": {
        "description": "see appendToPath",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "appendToPath",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "To Path",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:appendfile",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#appendfile",
        "fct-type": "function",
        "title": "appendfile"
      },
      "index": {
        "description": "see appendFile",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "appendfile",
        "normalized": "FilePath-\u003eText-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eText-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:canonic",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecanonic\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Pipe.html#canonic",
        "fct-type": "function",
        "title": "canonic"
      },
      "index": {
        "description": "see canonic",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "canonic",
        "normalized": "FilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:canonicalize",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecanonicalize\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Pipe.html#canonicalize",
        "fct-type": "function",
        "title": "canonicalize"
      },
      "index": {
        "description": "see canonicalize",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "canonicalize",
        "normalized": "FilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:catch_sh",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecatch_sh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e (e -\u003e Sh a) -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#catch_sh",
        "fct-type": "function",
        "title": "catch_sh"
      },
      "index": {
        "description": "see catch sh",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "catch_sh",
        "normalized": "Sh a-\u003e(b-\u003eSh a)-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003e(e-\u003eSh a)-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:catchany",
      "description": {
        "fct-descr": "\u003cp\u003eA helper to catch any exception (same as\n \u003ccode\u003e... \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e (e :: SomeException) -\u003e ...\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "IO a -\u003e (SomeException -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Shelly-Base.html#catchany",
        "fct-type": "function",
        "title": "catchany"
      },
      "index": {
        "description": "helper to catch any exception same as catch SomeException",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "catchany",
        "normalized": "IO a-\u003e(SomeException-\u003eIO a)-\u003eIO a",
        "package": "shelly",
        "partial": "",
        "signature": "IO a-\u003e(SomeException-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:catchany_sh",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecatchany_sh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e (SomeException -\u003e Sh a) -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#catchany_sh",
        "fct-type": "function",
        "title": "catchany_sh"
      },
      "index": {
        "description": "see catchany sh",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "catchany_sh",
        "normalized": "Sh a-\u003e(SomeException-\u003eSh a)-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003e(SomeException-\u003eSh a)-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:catches_sh",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecatches_sh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e [ShellyHandler a] -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#catches_sh",
        "fct-type": "function",
        "title": "catches_sh"
      },
      "index": {
        "description": "see catches sh",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "catches_sh",
        "normalized": "Sh a-\u003e[ShellyHandler a]-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003e[ShellyHandler a]-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:cd",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#cd",
        "fct-type": "function",
        "title": "cd"
      },
      "index": {
        "description": "see cd",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "cd",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:chdir",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003echdir\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#chdir",
        "fct-type": "function",
        "title": "chdir"
      },
      "index": {
        "description": "see chdir",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "chdir",
        "normalized": "FilePath-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:cmd",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e result",
        "fct-source": "src/Shelly-Pipe.html#cmd",
        "fct-type": "function",
        "title": "cmd"
      },
      "index": {
        "description": "see cmd",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "cmd",
        "normalized": "FilePath-\u003ea",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eresult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:command",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e [Text] -\u003e Sh Text",
        "fct-source": "src/Shelly-Pipe.html#command",
        "fct-type": "function",
        "title": "command"
      },
      "index": {
        "description": "see command",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "command",
        "normalized": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:command1",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecommand1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e Text -\u003e [Text] -\u003e Sh Text",
        "fct-source": "src/Shelly-Pipe.html#command1",
        "fct-type": "function",
        "title": "command1"
      },
      "index": {
        "description": "see command1",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "command1",
        "normalized": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:command1_",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecommand1_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e Text -\u003e [Text] -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#command1_",
        "fct-type": "function",
        "title": "command1_"
      },
      "index": {
        "description": "see command1",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "command1_",
        "normalized": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:command_",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecommand_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e [Text] -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#command_",
        "fct-type": "function",
        "title": "command_"
      },
      "index": {
        "description": "see command",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "command_",
        "normalized": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:cp",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#cp",
        "fct-type": "function",
        "title": "cp"
      },
      "index": {
        "description": "see cp",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "cp",
        "normalized": "FilePath-\u003eFilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:cp_r",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ecp_r\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#cp_r",
        "fct-type": "function",
        "title": "cp_r"
      },
      "index": {
        "description": "see cp",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "cp_r",
        "normalized": "FilePath-\u003eFilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:echo",
      "description": {
        "fct-descr": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#echo",
        "fct-type": "function",
        "title": "echo"
      },
      "index": {
        "description": "Echo text to standard error when using err variants output The variants do not print final newline",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "echo",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:echo_err",
      "description": {
        "fct-descr": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#echo_err",
        "fct-type": "function",
        "title": "echo_err"
      },
      "index": {
        "description": "Echo text to standard error when using err variants output The variants do not print final newline",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "echo_err",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:echo_n",
      "description": {
        "fct-descr": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#echo_n",
        "fct-type": "function",
        "title": "echo_n"
      },
      "index": {
        "description": "Echo text to standard error when using err variants output The variants do not print final newline",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "echo_n",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:echo_n_err",
      "description": {
        "fct-descr": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#echo_n_err",
        "fct-type": "function",
        "title": "echo_n_err"
      },
      "index": {
        "description": "Echo text to standard error when using err variants output The variants do not print final newline",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "echo_n_err",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:errExit",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eerrExit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#errExit",
        "fct-type": "function",
        "title": "errExit"
      },
      "index": {
        "description": "see errExit",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "errExit",
        "normalized": "Bool-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "Exit",
        "signature": "Bool-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:errorExit",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eerrorExit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#errorExit",
        "fct-type": "function",
        "title": "errorExit"
      },
      "index": {
        "description": "see errorExit",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "errorExit",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "Exit",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:escaping",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eescaping\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#escaping",
        "fct-type": "function",
        "title": "escaping"
      },
      "index": {
        "description": "see escaping",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "escaping",
        "normalized": "Bool-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:exit",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Int -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#exit",
        "fct-type": "function",
        "title": "exit"
      },
      "index": {
        "description": "see exit",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "exit",
        "normalized": "Int-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Int-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:finally_sh",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efinally_sh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Sh b -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#finally_sh",
        "fct-type": "function",
        "title": "finally_sh"
      },
      "index": {
        "description": "see finally sh",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "finally_sh",
        "normalized": "Sh a-\u003eSh b-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eSh b-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Pipe.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "see find",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "find",
        "normalized": "FilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:findDirFilter",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efindDirFilter\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "(FilePath -\u003e Sh Bool) -\u003e FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Pipe.html#findDirFilter",
        "fct-type": "function",
        "title": "findDirFilter"
      },
      "index": {
        "description": "see findDirFilter",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "findDirFilter",
        "normalized": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "Dir Filter",
        "signature": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:findDirFilterWhen",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efindDirFilterWhen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "(FilePath -\u003e Sh Bool)-\u003e (FilePath -\u003e Sh Bool)-\u003e FilePath-\u003e Sh FilePath",
        "fct-type": "function",
        "title": "findDirFilterWhen"
      },
      "index": {
        "description": "see findDirFilterWhen",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "findDirFilterWhen",
        "normalized": "(FilePath-\u003eSh Bool)-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "Dir Filter When",
        "signature": "(FilePath-\u003eSh Bool)-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:findFold",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efindFold\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "(a -\u003e FilePath -\u003e Sh a) -\u003e a -\u003e FilePath -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#findFold",
        "fct-type": "function",
        "title": "findFold"
      },
      "index": {
        "description": "see findFold",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "findFold",
        "normalized": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003eFilePath-\u003eSh a",
        "package": "shelly",
        "partial": "Fold",
        "signature": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003eFilePath-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:findFoldDirFilter",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efindFoldDirFilterWhen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "(a -\u003e FilePath -\u003e Sh a) -\u003e a -\u003e (FilePath -\u003e Sh Bool) -\u003e FilePath -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#findFoldDirFilter",
        "fct-type": "function",
        "title": "findFoldDirFilter"
      },
      "index": {
        "description": "see findFoldDirFilterWhen",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "findFoldDirFilter",
        "normalized": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh a",
        "package": "shelly",
        "partial": "Fold Dir Filter",
        "signature": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:findWhen",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003efindWhen\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "(FilePath -\u003e Sh Bool) -\u003e FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Pipe.html#findWhen",
        "fct-type": "function",
        "title": "findWhen"
      },
      "index": {
        "description": "see findWhen",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "findWhen",
        "normalized": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "When",
        "signature": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:fromText",
      "description": {
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e FilePath",
        "fct-source": "src/Shelly.html#fromText",
        "fct-type": "function",
        "title": "fromText"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "fromText",
        "normalized": "Text-\u003eFilePath",
        "package": "shelly",
        "partial": "Text",
        "signature": "Text-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:get",
      "description": {
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh State",
        "fct-source": "src/Shelly-Pipe.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "get",
        "normalized": "",
        "package": "shelly",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:get_env",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eget_env\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh (Maybe Text)",
        "fct-source": "src/Shelly-Pipe.html#get_env",
        "fct-type": "function",
        "title": "get_env"
      },
      "index": {
        "description": "see get env",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "get_env",
        "normalized": "Text-\u003eSh(Maybe Text)",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh(Maybe Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:get_env_def",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use fromMaybe DEFAULT get_env\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003esee \u003ccode\u003e\u003ca\u003eget_env_def\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Text -\u003e Sh Text",
        "fct-source": "src/Shelly-Pipe.html#get_env_def",
        "fct-type": "function",
        "title": "get_env_def"
      },
      "index": {
        "description": "Deprecated use fromMaybe DEFAULT get env see get env def",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "get_env_def",
        "normalized": "Text-\u003eText-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eText-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:get_env_text",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eget_env_text\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh Text",
        "fct-source": "src/Shelly-Pipe.html#get_env_text",
        "fct-type": "function",
        "title": "get_env_text"
      },
      "index": {
        "description": "see get env text",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "get_env_text",
        "normalized": "Text-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:hasExt",
      "description": {
        "fct-descr": "\u003cp\u003eflipped hasExtension for Text\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e FilePath -\u003e Bool",
        "fct-source": "src/Shelly.html#hasExt",
        "fct-type": "function",
        "title": "hasExt"
      },
      "index": {
        "description": "flipped hasExtension for Text",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "hasExt",
        "normalized": "Text-\u003eFilePath-\u003eBool",
        "package": "shelly",
        "partial": "Ext",
        "signature": "Text-\u003eFilePath-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:inspect",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003einspect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "s -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#inspect",
        "fct-type": "function",
        "title": "inspect"
      },
      "index": {
        "description": "see inspect",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "inspect",
        "normalized": "a-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "s-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:inspect_err",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003einspect_err\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "s -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#inspect_err",
        "fct-type": "function",
        "title": "inspect_err"
      },
      "index": {
        "description": "see inspect err",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "inspect_err",
        "normalized": "a-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "s-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:lastExitCode",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003elastExitCode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh Int",
        "fct-source": "src/Shelly-Pipe.html#lastExitCode",
        "fct-type": "function",
        "title": "lastExitCode"
      },
      "index": {
        "description": "see lastExitCode",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "lastExitCode",
        "normalized": "",
        "package": "shelly",
        "partial": "Exit Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:lastStderr",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003elastStderr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh Text",
        "fct-source": "src/Shelly-Pipe.html#lastStderr",
        "fct-type": "function",
        "title": "lastStderr"
      },
      "index": {
        "description": "see lastStderr",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "lastStderr",
        "normalized": "",
        "package": "shelly",
        "partial": "Stderr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "forall a.  IO a -\u003e m a",
        "fct-type": "function",
        "title": "liftIO"
      },
      "index": {
        "description": "Lift computation from the IO monad",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "liftIO",
        "normalized": "a b IO c-\u003ed c",
        "package": "shelly",
        "partial": "IO",
        "signature": "forall a. IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:liftSh",
      "description": {
        "fct-descr": "\u003cp\u003eTransform result as list. It can be useful for filtering. \n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "([a] -\u003e [b]) -\u003e Sh a -\u003e Sh b",
        "fct-source": "src/Shelly-Pipe.html#liftSh",
        "fct-type": "function",
        "title": "liftSh"
      },
      "index": {
        "description": "Transform result as list It can be useful for filtering",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "liftSh",
        "normalized": "([a]-\u003e[b])-\u003eSh a-\u003eSh b",
        "package": "shelly",
        "partial": "Sh",
        "signature": "([a]-\u003e[b])-\u003eSh a-\u003eSh b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:ls",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003els\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Pipe.html#ls",
        "fct-type": "function",
        "title": "ls"
      },
      "index": {
        "description": "see ls",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "ls",
        "normalized": "FilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:lsT",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003elsT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Text",
        "fct-source": "src/Shelly-Pipe.html#lsT",
        "fct-type": "function",
        "title": "lsT"
      },
      "index": {
        "description": "see lsT",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "lsT",
        "normalized": "FilePath-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:mkdir",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003emkdir\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#mkdir",
        "fct-type": "function",
        "title": "mkdir"
      },
      "index": {
        "description": "see mkdir",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "mkdir",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:mkdirTree",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003emkdirTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Tree FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#mkdirTree",
        "fct-type": "function",
        "title": "mkdirTree"
      },
      "index": {
        "description": "see mkdirTree",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "mkdirTree",
        "normalized": "Tree FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "Tree",
        "signature": "Tree FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:mkdir_p",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003emkdir_p\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#mkdir_p",
        "fct-type": "function",
        "title": "mkdir_p"
      },
      "index": {
        "description": "see mkdir",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "mkdir_p",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:mv",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003emv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#mv",
        "fct-type": "function",
        "title": "mv"
      },
      "index": {
        "description": "see mv",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "mv",
        "normalized": "FilePath-\u003eFilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:print_commands",
      "description": {
        "fct-descr": "\u003cp\u003esee 'S.print_commands\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#print_commands",
        "fct-type": "function",
        "title": "print_commands"
      },
      "index": {
        "description": "see S.print commands",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "print_commands",
        "normalized": "Bool-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:print_stdout",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eprint_stdout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#print_stdout",
        "fct-type": "function",
        "title": "print_stdout"
      },
      "index": {
        "description": "see print stdout",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "print_stdout",
        "normalized": "Bool-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:put",
      "description": {
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "State -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "put",
        "normalized": "State-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "State-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:pwd",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003epwd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh FilePath",
        "fct-source": "src/Shelly-Pipe.html#pwd",
        "fct-type": "function",
        "title": "pwd"
      },
      "index": {
        "description": "see pwd",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "pwd",
        "normalized": "",
        "package": "shelly",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:quietExit",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003equietExit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Int -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#quietExit",
        "fct-type": "function",
        "title": "quietExit"
      },
      "index": {
        "description": "see quietExit",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "quietExit",
        "normalized": "Int-\u003eSh()",
        "package": "shelly",
        "partial": "Exit",
        "signature": "Int-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:readBinary",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ereadBinary\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ByteString",
        "fct-source": "src/Shelly-Pipe.html#readBinary",
        "fct-type": "function",
        "title": "readBinary"
      },
      "index": {
        "description": "see readBinary",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "readBinary",
        "normalized": "FilePath-\u003eSh ByteString",
        "package": "shelly",
        "partial": "Binary",
        "signature": "FilePath-\u003eSh ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:readfile",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Text",
        "fct-source": "src/Shelly-Pipe.html#readfile",
        "fct-type": "function",
        "title": "readfile"
      },
      "index": {
        "description": "see readFile",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "readfile",
        "normalized": "FilePath-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:relPath",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erelPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Pipe.html#relPath",
        "fct-type": "function",
        "title": "relPath"
      },
      "index": {
        "description": "see relPath",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "relPath",
        "normalized": "FilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "Path",
        "signature": "FilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:relativeTo",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erelativeTo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath-\u003e FilePath-\u003e Sh FilePath",
        "fct-type": "function",
        "title": "relativeTo"
      },
      "index": {
        "description": "see relativeTo",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "relativeTo",
        "normalized": "FilePath-\u003eFilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "To",
        "signature": "FilePath-\u003eFilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:rm",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#rm",
        "fct-type": "function",
        "title": "rm"
      },
      "index": {
        "description": "see rm",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "rm",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:rm_f",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erm_f\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#rm_f",
        "fct-type": "function",
        "title": "rm_f"
      },
      "index": {
        "description": "see rm",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "rm_f",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:rm_rf",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erm_rf\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#rm_rf",
        "fct-type": "function",
        "title": "rm_rf"
      },
      "index": {
        "description": "see rm rf",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "rm_rf",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:roll",
      "description": {
        "fct-descr": "\u003cp\u003ePack list of results. It performs \u003ccode\u003econcat\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh [a] -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#roll",
        "fct-type": "function",
        "title": "roll"
      },
      "index": {
        "description": "Pack list of results It performs concat inside Sh",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "roll",
        "normalized": "Sh[a]-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh[a]-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e Sh Text",
        "fct-source": "src/Shelly-Pipe.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "see run",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "run",
        "normalized": "FilePath-\u003e[Text]-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:runFoldLines",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erunFoldLines\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "a -\u003e FoldCallback a -\u003e FilePath -\u003e [Text] -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#runFoldLines",
        "fct-type": "function",
        "title": "runFoldLines"
      },
      "index": {
        "description": "see runFoldLines",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "runFoldLines",
        "normalized": "a-\u003eFoldCallback a-\u003eFilePath-\u003e[Text]-\u003eSh a",
        "package": "shelly",
        "partial": "Fold Lines",
        "signature": "a-\u003eFoldCallback a-\u003eFilePath-\u003e[Text]-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:run_",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003erun_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#run_",
        "fct-type": "function",
        "title": "run_"
      },
      "index": {
        "description": "see run",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "run_",
        "normalized": "FilePath-\u003e[Text]-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:setStdin",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003esetStdin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#setStdin",
        "fct-type": "function",
        "title": "setStdin"
      },
      "index": {
        "description": "see setStdin",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "setStdin",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "Stdin",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:setenv",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003esetenv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#setenv",
        "fct-type": "function",
        "title": "setenv"
      },
      "index": {
        "description": "see setenv",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "setenv",
        "normalized": "Text-\u003eText-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eText-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:shelly",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eshelly\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e m [a]",
        "fct-source": "src/Shelly-Pipe.html#shelly",
        "fct-type": "function",
        "title": "shelly"
      },
      "index": {
        "description": "see shelly",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "shelly",
        "normalized": "Sh a-\u003eb[a]",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:shellyNoDir",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eshellyNoDir\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e m [a]",
        "fct-source": "src/Shelly-Pipe.html#shellyNoDir",
        "fct-type": "function",
        "title": "shellyNoDir"
      },
      "index": {
        "description": "see shellyNoDir",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "shellyNoDir",
        "normalized": "Sh a-\u003eb[a]",
        "package": "shelly",
        "partial": "No Dir",
        "signature": "Sh a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:show_command",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eshow_command\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e Text",
        "fct-source": "src/Shelly-Pipe.html#show_command",
        "fct-type": "function",
        "title": "show_command"
      },
      "index": {
        "description": "see show command",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "show_command",
        "normalized": "FilePath-\u003e[Text]-\u003eText",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:shs",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms \u003ccode\u003e\u003ca\u003eshelly\u003c/a\u003e\u003c/code\u003e and then an empty action \u003ccode\u003ereturn ()\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh () -\u003e m ()",
        "fct-source": "src/Shelly-Pipe.html#shs",
        "fct-type": "function",
        "title": "shs"
      },
      "index": {
        "description": "Performs shelly and then an empty action return",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "shs",
        "normalized": "Sh()-\u003ea()",
        "package": "shelly",
        "partial": "",
        "signature": "Sh()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:shsNoDir",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms \u003ccode\u003e\u003ca\u003eshellyNoDir\u003c/a\u003e\u003c/code\u003e and then an empty action \u003ccode\u003ereturn ()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh () -\u003e m ()",
        "fct-source": "src/Shelly-Pipe.html#shsNoDir",
        "fct-type": "function",
        "title": "shsNoDir"
      },
      "index": {
        "description": "Performs shellyNoDir and then an empty action return",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "shsNoDir",
        "normalized": "Sh()-\u003ea()",
        "package": "shelly",
        "partial": "No Dir",
        "signature": "Sh()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:silently",
      "description": {
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#silently",
        "fct-type": "function",
        "title": "silently"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "silently",
        "normalized": "Sh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:sshPairs",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003esshPairs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e [(FilePath, [Text])] -\u003e Sh Text",
        "fct-source": "src/Shelly-Pipe.html#sshPairs",
        "fct-type": "function",
        "title": "sshPairs"
      },
      "index": {
        "description": "see sshPairs",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "sshPairs",
        "normalized": "Text-\u003e[(FilePath,[Text])]-\u003eSh Text",
        "package": "shelly",
        "partial": "Pairs",
        "signature": "Text-\u003e[(FilePath,[Text])]-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:sshPairs_",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003esshPairs_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e [(FilePath, [Text])] -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#sshPairs_",
        "fct-type": "function",
        "title": "sshPairs_"
      },
      "index": {
        "description": "see sshPairs",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "sshPairs_",
        "normalized": "Text-\u003e[(FilePath,[Text])]-\u003eSh()",
        "package": "shelly",
        "partial": "Pairs",
        "signature": "Text-\u003e[(FilePath,[Text])]-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:sub",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003esub\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#sub",
        "fct-type": "function",
        "title": "sub"
      },
      "index": {
        "description": "see sub",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "sub",
        "normalized": "Sh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:tag",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etag\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Text -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "see tag",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "tag",
        "normalized": "Sh a-\u003eText-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eText-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:terror",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eterror\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#terror",
        "fct-type": "function",
        "title": "terror"
      },
      "index": {
        "description": "see terror",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "terror",
        "normalized": "Text-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:test_d",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etest_d\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Bool",
        "fct-source": "src/Shelly-Pipe.html#test_d",
        "fct-type": "function",
        "title": "test_d"
      },
      "index": {
        "description": "see test",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "test_d",
        "normalized": "FilePath-\u003eSh Bool",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:test_e",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etest_e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Bool",
        "fct-source": "src/Shelly-Pipe.html#test_e",
        "fct-type": "function",
        "title": "test_e"
      },
      "index": {
        "description": "see test",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "test_e",
        "normalized": "FilePath-\u003eSh Bool",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:test_f",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etest_f\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Bool",
        "fct-source": "src/Shelly-Pipe.html#test_f",
        "fct-type": "function",
        "title": "test_f"
      },
      "index": {
        "description": "see test",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "test_f",
        "normalized": "FilePath-\u003eSh Bool",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:test_s",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etest_s\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Bool",
        "fct-source": "src/Shelly-Pipe.html#test_s",
        "fct-type": "function",
        "title": "test_s"
      },
      "index": {
        "description": "see test",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "test_s",
        "normalized": "FilePath-\u003eSh Bool",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:time",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etime\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Sh (Double, a)",
        "fct-source": "src/Shelly-Pipe.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "see time",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "time",
        "normalized": "Sh a-\u003eSh(Double,a)",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eSh(Double,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:toTextIgnore",
      "description": {
        "fct-descr": "\u003cp\u003esilently uses the Right or Left value of \u003ca\u003eFilesystem.Path.CurrentOS.toText\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Text",
        "fct-source": "src/Shelly-Base.html#toTextIgnore",
        "fct-type": "function",
        "title": "toTextIgnore"
      },
      "index": {
        "description": "silently uses the Right or Left value of Filesystem.Path.CurrentOS.toText",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "toTextIgnore",
        "normalized": "FilePath-\u003eText",
        "package": "shelly",
        "partial": "Text Ignore",
        "signature": "FilePath-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:toTextWarn",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etoTextWarn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Text",
        "fct-source": "src/Shelly-Pipe.html#toTextWarn",
        "fct-type": "function",
        "title": "toTextWarn"
      },
      "index": {
        "description": "see toTextWarn",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "toTextWarn",
        "normalized": "FilePath-\u003eSh Text",
        "package": "shelly",
        "partial": "Text Warn",
        "signature": "FilePath-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:touchfile",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etouchFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#touchfile",
        "fct-type": "function",
        "title": "touchfile"
      },
      "index": {
        "description": "see touchFile",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "touchfile",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "see trace",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "trace",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:tracing",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003etracing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#tracing",
        "fct-type": "function",
        "title": "tracing"
      },
      "index": {
        "description": "see tracing",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "tracing",
        "normalized": "Bool-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:unless",
      "description": {
        "fct-descr": "\u003cp\u003eThe reverse of \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e m () -\u003e m ()",
        "fct-type": "function",
        "title": "unless"
      },
      "index": {
        "description": "The reverse of when",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "unless",
        "normalized": "Bool-\u003ea()-\u003ea()",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:unlessM",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic-conditional version of the \u003ccode\u003e\u003ca\u003eunless\u003c/a\u003e\u003c/code\u003e guard.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "m Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Shelly.html#unlessM",
        "fct-type": "function",
        "title": "unlessM"
      },
      "index": {
        "description": "monadic-conditional version of the unless guard",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "unlessM",
        "normalized": "a Bool-\u003ea()-\u003ea()",
        "package": "shelly",
        "partial": "",
        "signature": "m Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:unroll",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack list of results.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Sh [a]",
        "fct-source": "src/Shelly-Pipe.html#unroll",
        "fct-type": "function",
        "title": "unroll"
      },
      "index": {
        "description": "Unpack list of results",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "unroll",
        "normalized": "Sh a-\u003eSh[a]",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eSh[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:verbosely",
      "description": {
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#verbosely",
        "fct-type": "function",
        "title": "verbosely"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "verbosely",
        "normalized": "Sh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:when",
      "description": {
        "fct-descr": "\u003cp\u003eConditional execution of monadic expressions. For example, \n\u003c/p\u003e\u003cpre\u003e       when debug (putStr \"Debugging\\n\")\n\u003c/pre\u003e\u003cp\u003ewill output the string \u003ccode\u003eDebugging\\n\u003c/code\u003e if the Boolean value \u003ccode\u003edebug\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nand otherwise do nothing.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e m () -\u003e m ()",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "Conditional execution of monadic expressions For example when debug putStr Debugging will output the string Debugging if the Boolean value debug is True and otherwise do nothing",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "when",
        "normalized": "Bool-\u003ea()-\u003ea()",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:whenM",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic-conditional version of the \u003ca\u003ewhen\u003c/a\u003e guard.\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "m Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Shelly-Base.html#whenM",
        "fct-type": "function",
        "title": "whenM"
      },
      "index": {
        "description": "monadic-conditional version of the when guard",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "whenM",
        "normalized": "a Bool-\u003ea()-\u003ea()",
        "package": "shelly",
        "partial": "",
        "signature": "m Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:which",
      "description": {
        "fct-descr": "\u003cp\u003esee 'S.which\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh (Maybe FilePath)",
        "fct-source": "src/Shelly-Pipe.html#which",
        "fct-type": "function",
        "title": "which"
      },
      "index": {
        "description": "see S.which",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "which",
        "normalized": "FilePath-\u003eSh(Maybe FilePath)",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh(Maybe FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:withTmpDir",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ewithTmpDir\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "(FilePath -\u003e Sh a) -\u003e Sh a",
        "fct-source": "src/Shelly-Pipe.html#withTmpDir",
        "fct-type": "function",
        "title": "withTmpDir"
      },
      "index": {
        "description": "see withTmpDir",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "withTmpDir",
        "normalized": "(FilePath-\u003eSh a)-\u003eSh a",
        "package": "shelly",
        "partial": "Tmp Dir",
        "signature": "(FilePath-\u003eSh a)-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly-Pipe.html#v:writefile",
      "description": {
        "fct-descr": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly.Pipe",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Pipe.html#writefile",
        "fct-type": "function",
        "title": "writefile"
      },
      "index": {
        "description": "see writeFile",
        "hierarchy": "Shelly Pipe",
        "module": "Shelly.Pipe",
        "name": "writefile",
        "normalized": "FilePath-\u003eText-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eText-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for shell-like programming in Haskell.\n Shelly's focus is entirely on ease of use for those coming from shell scripting.\n However, it also tries to use modern libraries and techniques to keep things efficient.\n\u003c/p\u003e\u003cp\u003eThe functionality provided by\n this module is (unlike standard Haskell filesystem functionality)\n thread-safe: each Sh maintains its own environment and its own working\n directory.\n\u003c/p\u003e\u003cp\u003eRecommended usage includes putting the following at the top of your program,\n otherwise you will likely need either type annotations or type conversions\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n {-# LANGUAGE ExtendedDefaultRules #-}\n {-# OPTIONS_GHC -fno-warn-type-defaults #-}\n import Shelly\n import qualified Data.Text as T\n default (T.Text)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "module",
        "fct-source": "src/Shelly.html",
        "fct-type": "module",
        "title": "Shelly"
      },
      "index": {
        "description": "module for shell-like programming in Haskell Shelly focus is entirely on ease of use for those coming from shell scripting However it also tries to use modern libraries and techniques to keep things efficient The functionality provided by this module is unlike standard Haskell filesystem functionality thread-safe each Sh maintains its own environment and its own working directory Recommended usage includes putting the following at the top of your program otherwise you will likely need either type annotations or type conversions LANGUAGE OverloadedStrings LANGUAGE ExtendedDefaultRules OPTIONS GHC fno-warn-type-defaults import Shelly import qualified Data.Text as default T.Text",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "Shelly",
        "normalized": "",
        "package": "shelly",
        "partial": "Shelly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:CmdArg",
      "description": {
        "fct-descr": "\u003cp\u003eArgument converter for the variadic argument version of \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e called \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e.\n Useful for a type signature of a function that uses \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "class",
        "fct-source": "src/Shelly.html#CmdArg",
        "fct-type": "class",
        "title": "CmdArg"
      },
      "index": {
        "description": "Argument converter for the variadic argument version of run called cmd Useful for type signature of function that uses cmd",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "CmdArg",
        "normalized": "",
        "package": "shelly",
        "partial": "Cmd Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:FilePath",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "FilePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "FilePath",
        "normalized": "",
        "package": "shelly",
        "partial": "File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:FoldCallback",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "type",
        "fct-source": "src/Shelly.html#FoldCallback",
        "fct-type": "type",
        "title": "FoldCallback"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "FoldCallback",
        "normalized": "",
        "package": "shelly",
        "partial": "Fold Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:Sh",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "data",
        "fct-source": "src/Shelly-Base.html#Sh",
        "fct-type": "data",
        "title": "Sh"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "Sh",
        "normalized": "",
        "package": "shelly",
        "partial": "Sh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:ShIO",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Sh instead of ShIO\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eShIO is Deprecated in favor of \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e, which is easier to type.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "type",
        "fct-source": "src/Shelly-Base.html#ShIO",
        "fct-type": "type",
        "title": "ShIO"
      },
      "index": {
        "description": "Deprecated Use Sh instead of ShIO ShIO is Deprecated in favor of Sh which is easier to type",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "ShIO",
        "normalized": "",
        "package": "shelly",
        "partial": "Sh IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:ShellCmd",
      "description": {
        "fct-descr": "\u003cp\u003eFor the variadic function \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003epartially applied variadic functions require type signatures\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "class",
        "fct-source": "src/Shelly.html#ShellCmd",
        "fct-type": "class",
        "title": "ShellCmd"
      },
      "index": {
        "description": "For the variadic function cmd partially applied variadic functions require type signatures",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "ShellCmd",
        "normalized": "",
        "package": "shelly",
        "partial": "Shell Cmd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:ShellyHandler",
      "description": {
        "fct-descr": "\u003cp\u003eYou need to wrap exception handlers with this when using \u003ccode\u003e\u003ca\u003ecatches_sh\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "data",
        "fct-source": "src/Shelly.html#ShellyHandler",
        "fct-type": "data",
        "title": "ShellyHandler"
      },
      "index": {
        "description": "You need to wrap exception handlers with this when using catches sh",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "ShellyHandler",
        "normalized": "",
        "package": "shelly",
        "partial": "Shelly Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:StdHandle",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "data",
        "fct-source": "src/Shelly-Base.html#StdHandle",
        "fct-type": "data",
        "title": "StdHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "StdHandle",
        "normalized": "",
        "package": "shelly",
        "partial": "Std Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#t:StdStream",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "StdStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "StdStream",
        "normalized": "",
        "package": "shelly",
        "partial": "Std Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:-45--124--45-",
      "description": {
        "fct-descr": "\u003cp\u003ePipe operator. set the stdout the first command as the stdin of the second.\n This does not create a shell-level pipe, but hopefully it will in the future.\n To create a shell level pipe you can set \u003ccode\u003eescaping False\u003c/code\u003e and use a pipe \u003ccode\u003e|\u003c/code\u003e character in a command.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh Text -\u003e Sh b -\u003e Sh b",
        "fct-source": "src/Shelly.html#-%7C-",
        "fct-type": "function",
        "title": "(-|-)"
      },
      "index": {
        "description": "Pipe operator set the stdout the first command as the stdin of the second This does not create shell-level pipe but hopefully it will in the future To create shell level pipe you can set escaping False and use pipe character in command",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "(-|-) -|-",
        "normalized": "Sh Text-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh Text-\u003eSh b-\u003eSh b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:-60--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-type": "function",
        "title": "(\u003c$\u003e)"
      },
      "index": {
        "description": "An infix synonym for fmap",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "(\u003c$\u003e) \u003c$\u003e",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "shelly",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003euses System.FilePath.CurrentOS, but can automatically convert a Text\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "filepath1 -\u003e filepath2 -\u003e FilePath",
        "fct-source": "src/Shelly.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "uses System.FilePath.CurrentOS but can automatically convert Text",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "a-\u003ea-\u003eFilePath",
        "package": "shelly",
        "partial": "",
        "signature": "filepath-\u003efilepath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:-60-.-62-",
      "description": {
        "fct-descr": "\u003cp\u003euses System.FilePath.CurrentOS, but can automatically convert a Text\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "filepath -\u003e Text -\u003e FilePath",
        "fct-source": "src/Shelly.html#%3C.%3E",
        "fct-type": "function",
        "title": "(\u003c.\u003e)"
      },
      "index": {
        "description": "uses System.FilePath.CurrentOS but can automatically convert Text",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "(\u003c.\u003e) \u003c.\u003e",
        "normalized": "a-\u003eText-\u003eFilePath",
        "package": "shelly",
        "partial": "",
        "signature": "filepath-\u003eText-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:CreatePipe",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new pipe.  The returned\n \u003ccode\u003eHandle\u003c/code\u003e will use the default encoding\n and newline translation mode (just\n like \u003ccode\u003eHandle\u003c/code\u003es created by \u003ccode\u003eopenFile\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "CreatePipe",
        "fct-type": "function",
        "title": "CreatePipe"
      },
      "index": {
        "description": "Create new pipe The returned Handle will use the default encoding and newline translation mode just like Handle created by openFile",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "CreatePipe",
        "normalized": "",
        "package": "shelly",
        "partial": "Create Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:ErrorHandle",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "ErrorHandle StdStream",
        "fct-source": "src/Shelly-Base.html#StdHandle",
        "fct-type": "function",
        "title": "ErrorHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "ErrorHandle",
        "normalized": "",
        "package": "shelly",
        "partial": "Error Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:InHandle",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "InHandle StdStream",
        "fct-source": "src/Shelly-Base.html#StdHandle",
        "fct-type": "function",
        "title": "InHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "InHandle",
        "normalized": "",
        "package": "shelly",
        "partial": "In Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:Inherit",
      "description": {
        "fct-descr": "\u003cp\u003eInherit Handle from parent\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Inherit",
        "fct-type": "function",
        "title": "Inherit"
      },
      "index": {
        "description": "Inherit Handle from parent",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "Inherit",
        "normalized": "",
        "package": "shelly",
        "partial": "Inherit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:OutHandle",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "OutHandle StdStream",
        "fct-source": "src/Shelly-Base.html#StdHandle",
        "fct-type": "function",
        "title": "OutHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "OutHandle",
        "normalized": "",
        "package": "shelly",
        "partial": "Out Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:ShellyHandler",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "ShellyHandler (e -\u003e Sh a)",
        "fct-source": "src/Shelly.html#ShellyHandler",
        "fct-type": "function",
        "title": "ShellyHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "ShellyHandler",
        "normalized": "ShellyHandler(a-\u003eSh b)",
        "package": "shelly",
        "partial": "Shelly Handler",
        "signature": "ShellyHandler(e-\u003eSh a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:UseHandle",
      "description": {
        "fct-descr": "\u003cp\u003eUse the supplied Handle\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "UseHandle Handle",
        "fct-type": "function",
        "title": "UseHandle"
      },
      "index": {
        "description": "Use the supplied Handle",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "UseHandle",
        "normalized": "",
        "package": "shelly",
        "partial": "Use Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:absPath",
      "description": {
        "fct-descr": "\u003cp\u003eMake a relative path absolute by combining with the working directory.\n An absolute path is returned as is.\n To create a relative path, use \u003ccode\u003e\u003ca\u003erelPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Base.html#absPath",
        "fct-type": "function",
        "title": "absPath"
      },
      "index": {
        "description": "Make relative path absolute by combining with the working directory An absolute path is returned as is To create relative path use relPath",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "absPath",
        "normalized": "FilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "Path",
        "signature": "FilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:appendToPath",
      "description": {
        "fct-descr": "\u003cp\u003eadd the filepath onto the PATH env variable\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly.html#appendToPath",
        "fct-type": "function",
        "title": "appendToPath"
      },
      "index": {
        "description": "add the filepath onto the PATH env variable",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "appendToPath",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "To Path",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:appendfile",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a Lazy Text to a file.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Text -\u003e Sh ()",
        "fct-source": "src/Shelly.html#appendfile",
        "fct-type": "function",
        "title": "appendfile"
      },
      "index": {
        "description": "Append Lazy Text to file",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "appendfile",
        "normalized": "FilePath-\u003eText-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eText-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:bracket_sh",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e (a -\u003e Sh b) -\u003e (a -\u003e Sh c) -\u003e Sh c",
        "fct-source": "src/Shelly.html#bracket_sh",
        "fct-type": "function",
        "title": "bracket_sh"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "bracket_sh",
        "normalized": "Sh a-\u003e(a-\u003eSh b)-\u003e(a-\u003eSh c)-\u003eSh c",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003e(a-\u003eSh b)-\u003e(a-\u003eSh c)-\u003eSh c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:canonic",
      "description": {
        "fct-descr": "\u003cp\u003emakes an absolute path.\n Like \u003ccode\u003e\u003ca\u003ecanonicalize\u003c/a\u003e\u003c/code\u003e, but on an exception returns \u003ccode\u003e\u003ca\u003eabsPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Base.html#canonic",
        "fct-type": "function",
        "title": "canonic"
      },
      "index": {
        "description": "makes an absolute path Like canonicalize but on an exception returns absPath",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "canonic",
        "normalized": "FilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:canonicalize",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a (reasonably) canonic file path to a filesystem object. Based on\n \u003ca\u003ecanonicalizePath\u003c/a\u003e in system-fileio.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Base.html#canonicalize",
        "fct-type": "function",
        "title": "canonicalize"
      },
      "index": {
        "description": "Obtain reasonably canonic file path to filesystem object Based on canonicalizePath in system-fileio",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "canonicalize",
        "normalized": "FilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:catch_sh",
      "description": {
        "fct-descr": "\u003cp\u003eSame as a normal \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e but specialized for the Sh monad.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e (e -\u003e Sh a) -\u003e Sh a",
        "fct-source": "src/Shelly.html#catch_sh",
        "fct-type": "function",
        "title": "catch_sh"
      },
      "index": {
        "description": "Same as normal catch but specialized for the Sh monad",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "catch_sh",
        "normalized": "Sh a-\u003e(b-\u003eSh a)-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003e(e-\u003eSh a)-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:catchany",
      "description": {
        "fct-descr": "\u003cp\u003eA helper to catch any exception (same as\n \u003ccode\u003e... \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e (e :: SomeException) -\u003e ...\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "IO a -\u003e (SomeException -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Shelly-Base.html#catchany",
        "fct-type": "function",
        "title": "catchany"
      },
      "index": {
        "description": "helper to catch any exception same as catch SomeException",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "catchany",
        "normalized": "IO a-\u003e(SomeException-\u003eIO a)-\u003eIO a",
        "package": "shelly",
        "partial": "",
        "signature": "IO a-\u003e(SomeException-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:catchany_sh",
      "description": {
        "fct-descr": "\u003cp\u003eCatch an exception in the Sh monad.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e (SomeException -\u003e Sh a) -\u003e Sh a",
        "fct-source": "src/Shelly.html#catchany_sh",
        "fct-type": "function",
        "title": "catchany_sh"
      },
      "index": {
        "description": "Catch an exception in the Sh monad",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "catchany_sh",
        "normalized": "Sh a-\u003e(SomeException-\u003eSh a)-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003e(SomeException-\u003eSh a)-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:catches_sh",
      "description": {
        "fct-descr": "\u003cp\u003eSame as a normal \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e, but specialized for the \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e [ShellyHandler a] -\u003e Sh a",
        "fct-source": "src/Shelly.html#catches_sh",
        "fct-type": "function",
        "title": "catches_sh"
      },
      "index": {
        "description": "Same as normal catches but specialized for the Sh monad",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "catches_sh",
        "normalized": "Sh a-\u003e[ShellyHandler a]-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003e[ShellyHandler a]-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:cd",
      "description": {
        "fct-descr": "\u003cp\u003eChange current working directory of Sh. This does *not* change the\n working directory of the process we are running it. Instead, Sh keeps\n track of its own working directory and builds absolute paths internally\n instead of passing down relative paths.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly.html#cd",
        "fct-type": "function",
        "title": "cd"
      },
      "index": {
        "description": "Change current working directory of Sh This does not change the working directory of the process we are running it Instead Sh keeps track of its own working directory and builds absolute paths internally instead of passing down relative paths",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "cd",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:chdir",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecd\u003c/a\u003e\u003c/code\u003e, execute a Sh action in the new directory and then pop back to the original directory\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly.html#chdir",
        "fct-type": "function",
        "title": "chdir"
      },
      "index": {
        "description": "cd execute Sh action in the new directory and then pop back to the original directory",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "chdir",
        "normalized": "FilePath-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:cmd",
      "description": {
        "fct-descr": "\u003cp\u003evariadic argument version of \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.\n Please see the documenation for \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe syntax is more convenient, but more importantly it also allows the use of a FilePath as a command argument.\n So an argument can be a Text or a FilePath without manual conversions.\n a FilePath is automatically converted to Text with \u003ccode\u003e\u003ca\u003etoTextIgnore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConvenient usage of \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e requires the following:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n {-# LANGUAGE ExtendedDefaultRules #-}\n {-# OPTIONS_GHC -fno-warn-type-defaults #-}\n import Shelly\n import qualified Data.Text as T\n default (T.Text)\n\u003c/pre\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e result",
        "fct-source": "src/Shelly.html#cmd",
        "fct-type": "function",
        "title": "cmd"
      },
      "index": {
        "description": "variadic argument version of run Please see the documenation for run The syntax is more convenient but more importantly it also allows the use of FilePath as command argument So an argument can be Text or FilePath without manual conversions FilePath is automatically converted to Text with toTextIgnore Convenient usage of cmd requires the following LANGUAGE OverloadedStrings LANGUAGE ExtendedDefaultRules OPTIONS GHC fno-warn-type-defaults import Shelly import qualified Data.Text as default T.Text",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "cmd",
        "normalized": "FilePath-\u003ea",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eresult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:cmdAll",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e t",
        "fct-source": "src/Shelly.html#cmdAll",
        "fct-type": "method",
        "title": "cmdAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "cmdAll",
        "normalized": "FilePath-\u003e[Text]-\u003ea",
        "package": "shelly",
        "partial": "All",
        "signature": "FilePath-\u003e[Text]-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:command",
      "description": {
        "fct-descr": "\u003cp\u003ebind some arguments to run for re-use. Example:\n\u003c/p\u003e\u003cpre\u003e monit = command \"monit\" [\"-c\", \"monitrc\"]\n monit [\"stop\", \"program\"]\n\u003c/pre\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e [Text] -\u003e Sh Text",
        "fct-source": "src/Shelly.html#command",
        "fct-type": "function",
        "title": "command"
      },
      "index": {
        "description": "bind some arguments to run for re-use Example monit command monit monitrc monit stop program",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "command",
        "normalized": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:command1",
      "description": {
        "fct-descr": "\u003cp\u003ebind some arguments to run for re-use, and require 1 argument. Example:\n\u003c/p\u003e\u003cpre\u003e git = command1 \"git\" []; git \"pull\" [\"origin\", \"master\"]\n\u003c/pre\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e Text -\u003e [Text] -\u003e Sh Text",
        "fct-source": "src/Shelly.html#command1",
        "fct-type": "function",
        "title": "command1"
      },
      "index": {
        "description": "bind some arguments to run for re-use and require argument Example git command1 git git pull origin master",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "command1",
        "normalized": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:command1_",
      "description": {
        "fct-descr": "\u003cp\u003ebind some arguments to run for re-use, and require 1 argument. Example:\n\u003c/p\u003e\u003cpre\u003e git_ = command1_ \"git\" []; git \"pull\" [\"origin\", \"master\"]\n\u003c/pre\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e Text -\u003e [Text] -\u003e Sh ()",
        "fct-source": "src/Shelly.html#command1_",
        "fct-type": "function",
        "title": "command1_"
      },
      "index": {
        "description": "bind some arguments to run for re-use and require argument Example git command1 git git pull origin master",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "command1_",
        "normalized": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003eText-\u003e[Text]-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:command_",
      "description": {
        "fct-descr": "\u003cp\u003ebind some arguments to \u003ccode\u003e\u003ca\u003erun_\u003c/a\u003e\u003c/code\u003e for re-use. Example:\n\u003c/p\u003e\u003cpre\u003e monit_ = command_ \"monit\" [\"-c\", \"monitrc\"]\n monit_ [\"stop\", \"program\"]\n\u003c/pre\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e [Text] -\u003e Sh ()",
        "fct-source": "src/Shelly.html#command_",
        "fct-type": "function",
        "title": "command_"
      },
      "index": {
        "description": "bind some arguments to run for re-use Example monit command monit monitrc monit stop program",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "command_",
        "normalized": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003e[Text]-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:cp",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a file. The second path could be a directory, in which case the\n original file name is used, in that directory.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly.html#cp",
        "fct-type": "function",
        "title": "cp"
      },
      "index": {
        "description": "Copy file The second path could be directory in which case the original file name is used in that directory",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "cp",
        "normalized": "FilePath-\u003eFilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:cp_r",
      "description": {
        "fct-descr": "\u003cp\u003eCopy a file, or a directory recursively.\n uses \u003ccode\u003e\u003ca\u003ecp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly.html#cp_r",
        "fct-type": "function",
        "title": "cp_r"
      },
      "index": {
        "description": "Copy file or directory recursively uses cp",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "cp_r",
        "normalized": "FilePath-\u003eFilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:echo",
      "description": {
        "fct-descr": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Base.html#echo",
        "fct-type": "function",
        "title": "echo"
      },
      "index": {
        "description": "Echo text to standard error when using err variants output The variants do not print final newline",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "echo",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:echo_err",
      "description": {
        "fct-descr": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Base.html#echo_err",
        "fct-type": "function",
        "title": "echo_err"
      },
      "index": {
        "description": "Echo text to standard error when using err variants output The variants do not print final newline",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "echo_err",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:echo_n",
      "description": {
        "fct-descr": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Base.html#echo_n",
        "fct-type": "function",
        "title": "echo_n"
      },
      "index": {
        "description": "Echo text to standard error when using err variants output The variants do not print final newline",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "echo_n",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:echo_n_err",
      "description": {
        "fct-descr": "\u003cp\u003eEcho text to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Base.html#echo_n_err",
        "fct-type": "function",
        "title": "echo_n_err"
      },
      "index": {
        "description": "Echo text to standard error when using err variants output The variants do not print final newline",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "echo_n_err",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:errExit",
      "description": {
        "fct-descr": "\u003cp\u003enamed after bash -e errexit. Defaults to \u003ccode\u003eTrue\u003c/code\u003e.\n When \u003ccode\u003eTrue\u003c/code\u003e, throw an exception on a non-zero exit code.\n When \u003ccode\u003eFalse\u003c/code\u003e, ignore a non-zero exit code.\n Not recommended to set to \u003ccode\u003eFalse\u003c/code\u003e unless you are specifically checking the error code with \u003ccode\u003e\u003ca\u003elastExitCode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly.html#errExit",
        "fct-type": "function",
        "title": "errExit"
      },
      "index": {
        "description": "named after bash errexit Defaults to True When True throw an exception on non-zero exit code When False ignore non-zero exit code Not recommended to set to False unless you are specifically checking the error code with lastExitCode",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "errExit",
        "normalized": "Bool-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "Exit",
        "signature": "Bool-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:errorExit",
      "description": {
        "fct-descr": "\u003cp\u003eecho a message and exit with status 1\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh a",
        "fct-source": "src/Shelly.html#errorExit",
        "fct-type": "function",
        "title": "errorExit"
      },
      "index": {
        "description": "echo message and exit with status",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "errorExit",
        "normalized": "Text-\u003eSh a",
        "package": "shelly",
        "partial": "Exit",
        "signature": "Text-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:escaping",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a sub-Sh with shell character escaping on or off.\n Defaults to \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSetting to \u003ccode\u003eFalse\u003c/code\u003e allows for shell wildcard such as * to be expanded by the shell along with any other special shell characters.\n As a side-effect, setting to \u003ccode\u003eFalse\u003c/code\u003e causes changes to \u003ccode\u003ePATH\u003c/code\u003e to be ignored:\n see the \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e documentation.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly.html#escaping",
        "fct-type": "function",
        "title": "escaping"
      },
      "index": {
        "description": "Create sub-Sh with shell character escaping on or off Defaults to True Setting to False allows for shell wildcard such as to be expanded by the shell along with any other special shell characters As side-effect setting to False causes changes to PATH to be ignored see the run documentation",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "escaping",
        "normalized": "Bool-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:exit",
      "description": {
        "fct-descr": "\u003cp\u003eexit 0 means no errors, all other codes are error conditions\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Int -\u003e Sh a",
        "fct-source": "src/Shelly.html#exit",
        "fct-type": "function",
        "title": "exit"
      },
      "index": {
        "description": "exit means no errors all other codes are error conditions",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "exit",
        "normalized": "Int-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Int-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:finally_sh",
      "description": {
        "fct-descr": "\u003cp\u003eSame as a normal \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e but specialized for the \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Sh b -\u003e Sh a",
        "fct-source": "src/Shelly.html#finally_sh",
        "fct-type": "function",
        "title": "finally_sh"
      },
      "index": {
        "description": "Same as normal finally but specialized for the Sh monad",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "finally_sh",
        "normalized": "Sh a-\u003eSh b-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eSh b-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eList directory recursively (like the POSIX utility \u003ca\u003efind\u003c/a\u003e).\n listing is relative if the path given is relative.\n If you want to filter out some results or fold over them you can do that with the returned files.\n A more efficient approach is to use one of the other find functions.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh [FilePath]",
        "fct-source": "src/Shelly-Find.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "List directory recursively like the POSIX utility find listing is relative if the path given is relative If you want to filter out some results or fold over them you can do that with the returned files more efficient approach is to use one of the other find functions",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "find",
        "normalized": "FilePath-\u003eSh[FilePath]",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:findDirFilter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e that filters out directories as it finds\n Filtering out directories can make a find much more efficient by avoiding entire trees of files.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "(FilePath -\u003e Sh Bool) -\u003e FilePath -\u003e Sh [FilePath]",
        "fct-source": "src/Shelly-Find.html#findDirFilter",
        "fct-type": "function",
        "title": "findDirFilter"
      },
      "index": {
        "description": "find that filters out directories as it finds Filtering out directories can make find much more efficient by avoiding entire trees of files",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "findDirFilter",
        "normalized": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh[FilePath]",
        "package": "shelly",
        "partial": "Dir Filter",
        "signature": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:findDirFilterWhen",
      "description": {
        "fct-descr": "\u003cp\u003esimilar \u003ccode\u003e\u003ca\u003efindWhen\u003c/a\u003e\u003c/code\u003e, but also filter out directories\n Alternatively, similar to \u003ccode\u003e\u003ca\u003efindDirFilter\u003c/a\u003e\u003c/code\u003e, but also filter out files\n Filtering out directories makes the find much more efficient\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "(FilePath -\u003e Sh Bool)-\u003e (FilePath -\u003e Sh Bool)-\u003e FilePath-\u003e Sh [FilePath]",
        "fct-type": "function",
        "title": "findDirFilterWhen"
      },
      "index": {
        "description": "similar findWhen but also filter out directories Alternatively similar to findDirFilter but also filter out files Filtering out directories makes the find much more efficient",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "findDirFilterWhen",
        "normalized": "(FilePath-\u003eSh Bool)-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh[FilePath]",
        "package": "shelly",
        "partial": "Dir Filter When",
        "signature": "(FilePath-\u003eSh Bool)-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:findFold",
      "description": {
        "fct-descr": "\u003cp\u003eFold an arbitrary folding function over files froma a \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e.\n Like \u003ccode\u003e\u003ca\u003efindWhen\u003c/a\u003e\u003c/code\u003e but use a more general fold rather than a filter.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "(a -\u003e FilePath -\u003e Sh a) -\u003e a -\u003e FilePath -\u003e Sh a",
        "fct-source": "src/Shelly-Find.html#findFold",
        "fct-type": "function",
        "title": "findFold"
      },
      "index": {
        "description": "Fold an arbitrary folding function over files froma find Like findWhen but use more general fold rather than filter",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "findFold",
        "normalized": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003eFilePath-\u003eSh a",
        "package": "shelly",
        "partial": "Fold",
        "signature": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003eFilePath-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:findFoldDirFilter",
      "description": {
        "fct-descr": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003efindDirFilterWhen\u003c/a\u003e\u003c/code\u003e but use a folding function rather than a filter\n The most general finder: you likely want a more specific one\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "(a -\u003e FilePath -\u003e Sh a) -\u003e a -\u003e (FilePath -\u003e Sh Bool) -\u003e FilePath -\u003e Sh a",
        "fct-source": "src/Shelly-Find.html#findFoldDirFilter",
        "fct-type": "function",
        "title": "findFoldDirFilter"
      },
      "index": {
        "description": "like findDirFilterWhen but use folding function rather than filter The most general finder you likely want more specific one",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "findFoldDirFilter",
        "normalized": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh a",
        "package": "shelly",
        "partial": "Fold Dir Filter",
        "signature": "(a-\u003eFilePath-\u003eSh a)-\u003ea-\u003e(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:findWhen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e that filters the found files as it finds.\n Files must satisfy the given filter to be returned in the result.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "(FilePath -\u003e Sh Bool) -\u003e FilePath -\u003e Sh [FilePath]",
        "fct-source": "src/Shelly-Find.html#findWhen",
        "fct-type": "function",
        "title": "findWhen"
      },
      "index": {
        "description": "find that filters the found files as it finds Files must satisfy the given filter to be returned in the result",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "findWhen",
        "normalized": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh[FilePath]",
        "package": "shelly",
        "partial": "When",
        "signature": "(FilePath-\u003eSh Bool)-\u003eFilePath-\u003eSh[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:fromText",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e FilePath",
        "fct-source": "src/Shelly.html#fromText",
        "fct-type": "function",
        "title": "fromText"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "fromText",
        "normalized": "Text-\u003eFilePath",
        "package": "shelly",
        "partial": "Text",
        "signature": "Text-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:get",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh State",
        "fct-source": "src/Shelly-Base.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "get",
        "normalized": "",
        "package": "shelly",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:get_env",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the current value of an environment variable.\n if non-existant or empty text, will be Nothing\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh (Maybe Text)",
        "fct-source": "src/Shelly.html#get_env",
        "fct-type": "function",
        "title": "get_env"
      },
      "index": {
        "description": "Fetch the current value of an environment variable if non-existant or empty text will be Nothing",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "get_env",
        "normalized": "Text-\u003eSh(Maybe Text)",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh(Maybe Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:get_env_all",
      "description": {
        "fct-descr": "\u003cp\u003eget the full environment\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh [(String, String)]",
        "fct-source": "src/Shelly.html#get_env_all",
        "fct-type": "function",
        "title": "get_env_all"
      },
      "index": {
        "description": "get the full environment",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "get_env_all",
        "normalized": "Sh[(String,String)]",
        "package": "shelly",
        "partial": "",
        "signature": "Sh[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:get_env_def",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use fromMaybe DEFAULT get_env\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eFetch the current value of an environment variable. Both empty and\n non-existent variables give the default Text value as a result\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Text -\u003e Sh Text",
        "fct-source": "src/Shelly.html#get_env_def",
        "fct-type": "function",
        "title": "get_env_def"
      },
      "index": {
        "description": "Deprecated use fromMaybe DEFAULT get env Fetch the current value of an environment variable Both empty and non-existent variables give the default Text value as result",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "get_env_def",
        "normalized": "Text-\u003eText-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eText-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:get_env_text",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the current value of an environment variable. Both empty and\n non-existent variables give empty string as a result.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh Text",
        "fct-source": "src/Shelly.html#get_env_text",
        "fct-type": "function",
        "title": "get_env_text"
      },
      "index": {
        "description": "Fetch the current value of an environment variable Both empty and non-existent variables give empty string as result",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "get_env_text",
        "normalized": "Text-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:get_environment",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use get_env_all\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh [(String, String)]",
        "fct-source": "src/Shelly.html#get_environment",
        "fct-type": "function",
        "title": "get_environment"
      },
      "index": {
        "description": "Deprecated use get env all",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "get_environment",
        "normalized": "Sh[(String,String)]",
        "package": "shelly",
        "partial": "",
        "signature": "Sh[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:getenv",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use get_env or get_env_text\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003edeprecated\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh Text",
        "fct-source": "src/Shelly.html#getenv",
        "fct-type": "function",
        "title": "getenv"
      },
      "index": {
        "description": "Deprecated use get env or get env text deprecated",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "getenv",
        "normalized": "Text-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:hasExt",
      "description": {
        "fct-descr": "\u003cp\u003eflipped hasExtension for Text\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e FilePath -\u003e Bool",
        "fct-source": "src/Shelly.html#hasExt",
        "fct-type": "function",
        "title": "hasExt"
      },
      "index": {
        "description": "flipped hasExtension for Text",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "hasExt",
        "normalized": "Text-\u003eFilePath-\u003eBool",
        "package": "shelly",
        "partial": "Ext",
        "signature": "Text-\u003eFilePath-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:inspect",
      "description": {
        "fct-descr": "\u003cp\u003ea print lifted into \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "s -\u003e Sh ()",
        "fct-source": "src/Shelly-Base.html#inspect",
        "fct-type": "function",
        "title": "inspect"
      },
      "index": {
        "description": "print lifted into Sh",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "inspect",
        "normalized": "a-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "s-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:inspect_err",
      "description": {
        "fct-descr": "\u003cp\u003ea print lifted into \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e using stderr\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "s -\u003e Sh ()",
        "fct-source": "src/Shelly-Base.html#inspect_err",
        "fct-type": "function",
        "title": "inspect_err"
      },
      "index": {
        "description": "print lifted into Sh using stderr",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "inspect_err",
        "normalized": "a-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "s-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:lastExitCode",
      "description": {
        "fct-descr": "\u003cp\u003eThe exit code from the last command.\n Unless you set \u003ccode\u003e\u003ca\u003eerrExit\u003c/a\u003e\u003c/code\u003e to False you won't get a chance to use this: a non-zero exit code will throw an exception.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh Int",
        "fct-source": "src/Shelly.html#lastExitCode",
        "fct-type": "function",
        "title": "lastExitCode"
      },
      "index": {
        "description": "The exit code from the last command Unless you set errExit to False you won get chance to use this non-zero exit code will throw an exception",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "lastExitCode",
        "normalized": "",
        "package": "shelly",
        "partial": "Exit Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:lastStderr",
      "description": {
        "fct-descr": "\u003cp\u003eThe output of last external command. See \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh Text",
        "fct-source": "src/Shelly.html#lastStderr",
        "fct-type": "function",
        "title": "lastStderr"
      },
      "index": {
        "description": "The output of last external command See run",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "lastStderr",
        "normalized": "",
        "package": "shelly",
        "partial": "Stderr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "forall a.  IO a -\u003e m a",
        "fct-type": "function",
        "title": "liftIO"
      },
      "index": {
        "description": "Lift computation from the IO monad",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "liftIO",
        "normalized": "a b IO c-\u003ed c",
        "package": "shelly",
        "partial": "IO",
        "signature": "forall a. IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:ls",
      "description": {
        "fct-descr": "\u003cp\u003eList directory contents. Does *not* include \".\" and \"..\", but it does\n include (other) hidden files.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh [FilePath]",
        "fct-source": "src/Shelly-Base.html#ls",
        "fct-type": "function",
        "title": "ls"
      },
      "index": {
        "description": "List directory contents Does not include and but it does include other hidden files",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "ls",
        "normalized": "FilePath-\u003eSh[FilePath]",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:lsT",
      "description": {
        "fct-descr": "\u003cp\u003eGet back [Text] instead of [FilePath]\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh [Text]",
        "fct-source": "src/Shelly.html#lsT",
        "fct-type": "function",
        "title": "lsT"
      },
      "index": {
        "description": "Get back Text instead of FilePath",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "lsT",
        "normalized": "FilePath-\u003eSh[Text]",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:mkdir",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new directory (fails if the directory exists).\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly.html#mkdir",
        "fct-type": "function",
        "title": "mkdir"
      },
      "index": {
        "description": "Create new directory fails if the directory exists",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "mkdir",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:mkdirTree",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new directory tree. You can describe a bunch of directories as\n a tree and this function will create all subdirectories. An example:\n\u003c/p\u003e\u003cpre\u003e exec = mkTree $\n           \"package\" # [\n                \"src\" # [\n                    \"Data\" # leaves [\"Tree\", \"List\", \"Set\", \"Map\"]\n                ],\n                \"test\" # leaves [\"QuickCheck\", \"HUnit\"],\n                \"dist/doc/html\" # []\n            ]\n         where (#) = Node\n               leaves = map (# [])\n\u003c/pre\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Tree FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly.html#mkdirTree",
        "fct-type": "function",
        "title": "mkdirTree"
      },
      "index": {
        "description": "Create new directory tree You can describe bunch of directories as tree and this function will create all subdirectories An example exec mkTree package src Data leaves Tree List Set Map test leaves QuickCheck HUnit dist doc html where Node leaves map",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "mkdirTree",
        "normalized": "Tree FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "Tree",
        "signature": "Tree FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:mkdir_p",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new directory, including parents (succeeds if the directory\n already exists).\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly.html#mkdir_p",
        "fct-type": "function",
        "title": "mkdir_p"
      },
      "index": {
        "description": "Create new directory including parents succeeds if the directory already exists",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "mkdir_p",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:mv",
      "description": {
        "fct-descr": "\u003cp\u003eMove a file. The second path could be a directory, in which case the\n original file is moved into that directory.\n wraps system-fileio \u003ccode\u003e\u003ca\u003erename\u003c/a\u003e\u003c/code\u003e, which may not work across FS boundaries\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly.html#mv",
        "fct-type": "function",
        "title": "mv"
      },
      "index": {
        "description": "Move file The second path could be directory in which case the original file is moved into that directory wraps system-fileio rename which may not work across FS boundaries",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "mv",
        "normalized": "FilePath-\u003eFilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:path",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use absPath, canonic, or relPath instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003edeprecated\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Base.html#path",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "Deprecated use absPath canonic or relPath instead deprecated",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "path",
        "normalized": "FilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:print_commands",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a sub-Sh with command echoing on or off\n Defaults to False, set to True by \u003ccode\u003e\u003ca\u003everbosely\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly.html#print_commands",
        "fct-type": "function",
        "title": "print_commands"
      },
      "index": {
        "description": "Create sub-Sh with command echoing on or off Defaults to False set to True by verbosely",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "print_commands",
        "normalized": "Bool-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:print_stderr",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a sub-Sh with stderr printing on or off\n Defaults to True.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly.html#print_stderr",
        "fct-type": "function",
        "title": "print_stderr"
      },
      "index": {
        "description": "Create sub-Sh with stderr printing on or off Defaults to True",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "print_stderr",
        "normalized": "Bool-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:print_stdout",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a sub-Sh with stdout printing on or off\n Defaults to True.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly.html#print_stdout",
        "fct-type": "function",
        "title": "print_stdout"
      },
      "index": {
        "description": "Create sub-Sh with stdout printing on or off Defaults to True",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "print_stdout",
        "normalized": "Bool-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:put",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "State -\u003e Sh ()",
        "fct-source": "src/Shelly.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "put",
        "normalized": "State-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "State-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:pwd",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the current (Sh) working directory.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh FilePath",
        "fct-source": "src/Shelly.html#pwd",
        "fct-type": "function",
        "title": "pwd"
      },
      "index": {
        "description": "Obtain the current Sh working directory",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "pwd",
        "normalized": "",
        "package": "shelly",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:quietExit",
      "description": {
        "fct-descr": "\u003cp\u003efor exiting with status \u003e 0 without printing debug information\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Int -\u003e Sh a",
        "fct-source": "src/Shelly.html#quietExit",
        "fct-type": "function",
        "title": "quietExit"
      },
      "index": {
        "description": "for exiting with status without printing debug information",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "quietExit",
        "normalized": "Int-\u003eSh a",
        "package": "shelly",
        "partial": "Exit",
        "signature": "Int-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:readBinary",
      "description": {
        "fct-descr": "\u003cp\u003ewraps ByteSting readFile\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ByteString",
        "fct-source": "src/Shelly.html#readBinary",
        "fct-type": "function",
        "title": "readBinary"
      },
      "index": {
        "description": "wraps ByteSting readFile",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "readBinary",
        "normalized": "FilePath-\u003eSh ByteString",
        "package": "shelly",
        "partial": "Binary",
        "signature": "FilePath-\u003eSh ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:readfile",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Text",
        "fct-source": "src/Shelly.html#readfile",
        "fct-type": "function",
        "title": "readfile"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "readfile",
        "normalized": "FilePath-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:relPath",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a relative path relative to the current Sh working directory.\n An absolute path is returned as is.\n To create an absolute path, use \u003ccode\u003e\u003ca\u003eabsPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh FilePath",
        "fct-source": "src/Shelly-Base.html#relPath",
        "fct-type": "function",
        "title": "relPath"
      },
      "index": {
        "description": "Makes relative path relative to the current Sh working directory An absolute path is returned as is To create an absolute path use absPath",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "relPath",
        "normalized": "FilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "Path",
        "signature": "FilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:relativeTo",
      "description": {
        "fct-descr": "\u003cp\u003emake the second path relative to the first\n Uses \u003ccode\u003e\u003ca\u003estripPrefix\u003c/a\u003e\u003c/code\u003e, but will canonicalize the paths if necessary\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath-\u003e FilePath-\u003e Sh FilePath",
        "fct-type": "function",
        "title": "relativeTo"
      },
      "index": {
        "description": "make the second path relative to the first Uses stripPrefix but will canonicalize the paths if necessary",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "relativeTo",
        "normalized": "FilePath-\u003eFilePath-\u003eSh FilePath",
        "package": "shelly",
        "partial": "To",
        "signature": "FilePath-\u003eFilePath-\u003eSh FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:rm",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a file.\n Does fail if the file does not exist (use \u003ccode\u003e\u003ca\u003erm_f\u003c/a\u003e\u003c/code\u003e instead) or is not a file.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly.html#rm",
        "fct-type": "function",
        "title": "rm"
      },
      "index": {
        "description": "Remove file Does fail if the file does not exist use rm instead or is not file",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "rm",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:rm_f",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a file. Does not fail if the file does not exist.\n Does fail if the file is not a file.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly.html#rm_f",
        "fct-type": "function",
        "title": "rm_f"
      },
      "index": {
        "description": "Remove file Does not fail if the file does not exist Does fail if the file is not file",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "rm_f",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:rm_rf",
      "description": {
        "fct-descr": "\u003cp\u003eA swiss army cannon for removing things. Actually this goes farther than a\n normal rm -rf, as it will circumvent permission problems for the files we\n own. Use carefully.\n Uses \u003ccode\u003e\u003ca\u003eremoveTree\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly.html#rm_rf",
        "fct-type": "function",
        "title": "rm_rf"
      },
      "index": {
        "description": "swiss army cannon for removing things Actually this goes farther than normal rm rf as it will circumvent permission problems for the files we own Use carefully Uses removeTree",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "rm_rf",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an external command.\n Takes the command name and arguments.\n\u003c/p\u003e\u003cp\u003eYou may prefer using \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e instead, which is a variadic argument version\n of this function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e are collected. The \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e is returned as\n a result of \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e, and complete stderr output is available after the fact using\n \u003ccode\u003e\u003ca\u003elastStderr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eAll of the stdout output will be loaded into memory.\n You can avoid this if you don't need stdout by using \u003ccode\u003e\u003ca\u003erun_\u003c/a\u003e\u003c/code\u003e,\n If you want to avoid the memory and need to process the output then use \u003ccode\u003e\u003ca\u003erunFoldLines\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erunHandle\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erunHandles\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBy default shell characters are escaped and\n the command name is a name of a program that can be found via \u003ccode\u003ePATH\u003c/code\u003e.\n Shelly will look through the \u003ccode\u003ePATH\u003c/code\u003e itself to find the command.\n\u003c/p\u003e\u003cp\u003eWhen \u003ccode\u003e\u003ca\u003eescaping\u003c/a\u003e\u003c/code\u003e is set to \u003ccode\u003eFalse\u003c/code\u003e, shell characters are allowed.\n Since there is no longer a guarantee that a single program name is\n given, Shelly cannot look in the \u003ccode\u003ePATH\u003c/code\u003e for it.\n a \u003ccode\u003ePATH\u003c/code\u003e modified by setenv is not taken into account when finding the exe name.\n Instead the original Haskell program \u003ccode\u003ePATH\u003c/code\u003e is used.\n On a Posix system the \u003ccode\u003eenv\u003c/code\u003e command can be used to make the \u003ccode\u003e\u003ca\u003esetenv\u003c/a\u003e\u003c/code\u003e PATH used when \u003ccode\u003e\u003ca\u003eescaping\u003c/a\u003e\u003c/code\u003e is set to False. \u003ccode\u003eenv echo hello\u003c/code\u003e instead of \u003ccode\u003eecho hello\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e Sh Text",
        "fct-source": "src/Shelly.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Execute an external command Takes the command name and arguments You may prefer using cmd instead which is variadic argument version of this function stdout and stderr are collected The stdout is returned as result of run and complete stderr output is available after the fact using lastStderr All of the stdout output will be loaded into memory You can avoid this if you don need stdout by using run If you want to avoid the memory and need to process the output then use runFoldLines or runHandle or runHandles By default shell characters are escaped and the command name is name of program that can be found via PATH Shelly will look through the PATH itself to find the command When escaping is set to False shell characters are allowed Since there is no longer guarantee that single program name is given Shelly cannot look in the PATH for it PATH modified by setenv is not taken into account when finding the exe name Instead the original Haskell program PATH is used On Posix system the env command can be used to make the setenv PATH used when escaping is set to False env echo hello instead of echo hello",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "run",
        "normalized": "FilePath-\u003e[Text]-\u003eSh Text",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:runFoldLines",
      "description": {
        "fct-descr": "\u003cp\u003eused by \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e. fold over stdout line-by-line as it is read to avoid keeping it in memory\n stderr is still being placed in memory under the assumption it is always relatively small\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "a -\u003e FoldCallback a -\u003e FilePath -\u003e [Text] -\u003e Sh a",
        "fct-source": "src/Shelly.html#runFoldLines",
        "fct-type": "function",
        "title": "runFoldLines"
      },
      "index": {
        "description": "used by run fold over stdout line-by-line as it is read to avoid keeping it in memory stderr is still being placed in memory under the assumption it is always relatively small",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "runFoldLines",
        "normalized": "a-\u003eFoldCallback a-\u003eFilePath-\u003e[Text]-\u003eSh a",
        "package": "shelly",
        "partial": "Fold Lines",
        "signature": "a-\u003eFoldCallback a-\u003eFilePath-\u003e[Text]-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:runHandle",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e but gives the raw stdout handle in a callback.\n If you want even more control, use \u003ccode\u003e\u003ca\u003erunHandles\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath-\u003e [Text]-\u003e (Handle -\u003e Sh a)-\u003e Sh a",
        "fct-type": "function",
        "title": "runHandle"
      },
      "index": {
        "description": "Similar to run but gives the raw stdout handle in callback If you want even more control use runHandles",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "runHandle",
        "normalized": "FilePath-\u003e[Text]-\u003e(Handle-\u003eSh a)-\u003eSh a",
        "package": "shelly",
        "partial": "Handle",
        "signature": "FilePath-\u003e[Text]-\u003e(Handle-\u003eSh a)-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:runHandles",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e but gives direct access to all input and output handles.\n\u003c/p\u003e\u003cp\u003eBe careful when using the optional input handles.\n If you specify Inherit for a handle then attempting to access the handle in your\n callback is an error\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath-\u003e [Text]-\u003e [StdHandle]-\u003e (Handle -\u003e Handle -\u003e Handle -\u003e Sh a)-\u003e Sh a",
        "fct-type": "function",
        "title": "runHandles"
      },
      "index": {
        "description": "Similar to run but gives direct access to all input and output handles Be careful when using the optional input handles If you specify Inherit for handle then attempting to access the handle in your callback is an error",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "runHandles",
        "normalized": "FilePath-\u003e[Text]-\u003e[StdHandle]-\u003e(Handle-\u003eHandle-\u003eHandle-\u003eSh a)-\u003eSh a",
        "package": "shelly",
        "partial": "Handles",
        "signature": "FilePath-\u003e[Text]-\u003e[StdHandle]-\u003e(Handle-\u003eHandle-\u003eHandle-\u003eSh a)-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:run_",
      "description": {
        "fct-descr": "\u003cp\u003ethe same as \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e, but return \u003ccode\u003e()\u003c/code\u003e instead of the stdout content\n stdout will be read and discarded line-by-line\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e Sh ()",
        "fct-source": "src/Shelly.html#run_",
        "fct-type": "function",
        "title": "run_"
      },
      "index": {
        "description": "the same as run but return instead of the stdout content stdout will be read and discarded line-by-line",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "run_",
        "normalized": "FilePath-\u003e[Text]-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:setStdin",
      "description": {
        "fct-descr": "\u003cp\u003eset the stdin to be used and cleared by the next \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly.html#setStdin",
        "fct-type": "function",
        "title": "setStdin"
      },
      "index": {
        "description": "set the stdin to be used and cleared by the next run",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "setStdin",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "Stdin",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:setenv",
      "description": {
        "fct-descr": "\u003cp\u003eSet an environment variable. The environment is maintained in Sh\n internally, and is passed to any external commands to be executed.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Text -\u003e Sh ()",
        "fct-source": "src/Shelly.html#setenv",
        "fct-type": "function",
        "title": "setenv"
      },
      "index": {
        "description": "Set an environment variable The environment is maintained in Sh internally and is passed to any external commands to be executed",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "setenv",
        "normalized": "Text-\u003eText-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eText-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:shelly",
      "description": {
        "fct-descr": "\u003cp\u003eEnter a Sh from (Monad)IO. The environment and working directories are\n inherited from the current process-wide values. Any subsequent changes in\n processwide working directory or environment are not reflected in the\n running Sh.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e m a",
        "fct-source": "src/Shelly.html#shelly",
        "fct-type": "function",
        "title": "shelly"
      },
      "index": {
        "description": "Enter Sh from Monad IO The environment and working directories are inherited from the current process-wide values Any subsequent changes in processwide working directory or environment are not reflected in the running Sh",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "shelly",
        "normalized": "Sh a-\u003eb a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:shellyNoDir",
      "description": {
        "fct-descr": "\u003cp\u003eUsing this entry point does not create a \u003ccode\u003e.shelly\u003c/code\u003e directory in the case\n of failure. Instead it logs directly into the standard error stream (\u003ccode\u003estderr\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e m a",
        "fct-source": "src/Shelly.html#shellyNoDir",
        "fct-type": "function",
        "title": "shellyNoDir"
      },
      "index": {
        "description": "Using this entry point does not create shelly directory in the case of failure Instead it logs directly into the standard error stream stderr",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "shellyNoDir",
        "normalized": "Sh a-\u003eb a",
        "package": "shelly",
        "partial": "No Dir",
        "signature": "Sh a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:show_command",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e [Text] -\u003e Text",
        "fct-source": "src/Shelly.html#show_command",
        "fct-type": "function",
        "title": "show_command"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "show_command",
        "normalized": "FilePath-\u003e[Text]-\u003eText",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003e[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:silently",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a sub-Sh in which external command outputs are not echoed and\n commands are not printed.\n See \u003ccode\u003e\u003ca\u003esub\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Sh a",
        "fct-source": "src/Shelly.html#silently",
        "fct-type": "function",
        "title": "silently"
      },
      "index": {
        "description": "Create sub-Sh in which external command outputs are not echoed and commands are not printed See sub",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "silently",
        "normalized": "Sh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:sleep",
      "description": {
        "fct-descr": "\u003cp\u003ethreadDelay wrapper that uses seconds\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Int -\u003e Sh ()",
        "fct-source": "src/Shelly.html#sleep",
        "fct-type": "function",
        "title": "sleep"
      },
      "index": {
        "description": "threadDelay wrapper that uses seconds",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "sleep",
        "normalized": "Int-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Int-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:sshPairs",
      "description": {
        "fct-descr": "\u003cp\u003erun commands over SSH.\n An ssh executable is expected in your path.\n Commands are in the same form as \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e, but given as pairs\n\u003c/p\u003e\u003cpre\u003e sshPairs \"server-name\" [(\"cd\", \"dir\"), (\"rm\",[\"-r\",\"dir2\"])]\n\u003c/pre\u003e\u003cp\u003eThis interface is crude, but it works for now.\n\u003c/p\u003e\u003cp\u003ePlease note this sets \u003ccode\u003e\u003ca\u003eescaping\u003c/a\u003e\u003c/code\u003e to False: the commands will not be shell escaped.\n Internally the list of commands are combined with the string \u003ccode\u003e&&\u003c/code\u003e before given to ssh.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e [(FilePath, [Text])] -\u003e Sh Text",
        "fct-source": "src/Shelly.html#sshPairs",
        "fct-type": "function",
        "title": "sshPairs"
      },
      "index": {
        "description": "run commands over SSH An ssh executable is expected in your path Commands are in the same form as run but given as pairs sshPairs server-name cd dir rm dir2 This interface is crude but it works for now Please note this sets escaping to False the commands will not be shell escaped Internally the list of commands are combined with the string before given to ssh",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "sshPairs",
        "normalized": "Text-\u003e[(FilePath,[Text])]-\u003eSh Text",
        "package": "shelly",
        "partial": "Pairs",
        "signature": "Text-\u003e[(FilePath,[Text])]-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:sshPairs_",
      "description": {
        "fct-descr": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003esshPairs\u003c/a\u003e\u003c/code\u003e, but returns ()\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e [(FilePath, [Text])] -\u003e Sh ()",
        "fct-source": "src/Shelly.html#sshPairs_",
        "fct-type": "function",
        "title": "sshPairs_"
      },
      "index": {
        "description": "same as sshPairs but returns",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "sshPairs_",
        "normalized": "Text-\u003e[(FilePath,[Text])]-\u003eSh()",
        "package": "shelly",
        "partial": "Pairs",
        "signature": "Text-\u003e[(FilePath,[Text])]-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:sub",
      "description": {
        "fct-descr": "\u003cp\u003eEnter a sub-Sh that inherits the environment\n The original state will be restored when the sub-Sh completes.\n Exceptions are propagated normally.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Sh a",
        "fct-source": "src/Shelly.html#sub",
        "fct-type": "function",
        "title": "sub"
      },
      "index": {
        "description": "Enter sub-Sh that inherits the environment The original state will be restored when the sub-Sh completes Exceptions are propagated normally",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "sub",
        "normalized": "Sh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:tag",
      "description": {
        "fct-descr": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e, but use it combinator style\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Text -\u003e Sh a",
        "fct-source": "src/Shelly.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "same as trace but use it combinator style",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "tag",
        "normalized": "Sh a-\u003eText-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eText-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:terror",
      "description": {
        "fct-descr": "\u003cp\u003efail that takes a Text\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh a",
        "fct-source": "src/Shelly.html#terror",
        "fct-type": "function",
        "title": "terror"
      },
      "index": {
        "description": "fail that takes Text",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "terror",
        "normalized": "Text-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:test_d",
      "description": {
        "fct-descr": "\u003cp\u003eDoes a path point to an existing directory?\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Bool",
        "fct-source": "src/Shelly-Base.html#test_d",
        "fct-type": "function",
        "title": "test_d"
      },
      "index": {
        "description": "Does path point to an existing directory",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "test_d",
        "normalized": "FilePath-\u003eSh Bool",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:test_e",
      "description": {
        "fct-descr": "\u003cp\u003eDoes a path point to an existing filesystem object?\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Bool",
        "fct-source": "src/Shelly.html#test_e",
        "fct-type": "function",
        "title": "test_e"
      },
      "index": {
        "description": "Does path point to an existing filesystem object",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "test_e",
        "normalized": "FilePath-\u003eSh Bool",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:test_f",
      "description": {
        "fct-descr": "\u003cp\u003eDoes a path point to an existing file?\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Bool",
        "fct-source": "src/Shelly.html#test_f",
        "fct-type": "function",
        "title": "test_f"
      },
      "index": {
        "description": "Does path point to an existing file",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "test_f",
        "normalized": "FilePath-\u003eSh Bool",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:test_s",
      "description": {
        "fct-descr": "\u003cp\u003eDoes a path point to a symlink?\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Bool",
        "fct-source": "src/Shelly-Base.html#test_s",
        "fct-type": "function",
        "title": "test_s"
      },
      "index": {
        "description": "Does path point to symlink",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "test_s",
        "normalized": "FilePath-\u003eSh Bool",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:time",
      "description": {
        "fct-descr": "\u003cp\u003eRun a Sh computation and collect timing  information.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Sh (Double, a)",
        "fct-source": "src/Shelly.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "Run Sh computation and collect timing information",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "time",
        "normalized": "Sh a-\u003eSh(Double,a)",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eSh(Double,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:toTextArg",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "a -\u003e Text",
        "fct-source": "src/Shelly.html#toTextArg",
        "fct-type": "method",
        "title": "toTextArg"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "toTextArg",
        "normalized": "a-\u003eText",
        "package": "shelly",
        "partial": "Text Arg",
        "signature": "a-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:toTextIgnore",
      "description": {
        "fct-descr": "\u003cp\u003esilently uses the Right or Left value of \u003ca\u003eFilesystem.Path.CurrentOS.toText\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Text",
        "fct-source": "src/Shelly-Base.html#toTextIgnore",
        "fct-type": "function",
        "title": "toTextIgnore"
      },
      "index": {
        "description": "silently uses the Right or Left value of Filesystem.Path.CurrentOS.toText",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "toTextIgnore",
        "normalized": "FilePath-\u003eText",
        "package": "shelly",
        "partial": "Text Ignore",
        "signature": "FilePath-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:toTextWarn",
      "description": {
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh Text",
        "fct-source": "src/Shelly.html#toTextWarn",
        "fct-type": "function",
        "title": "toTextWarn"
      },
      "index": {
        "description": "",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "toTextWarn",
        "normalized": "FilePath-\u003eSh Text",
        "package": "shelly",
        "partial": "Text Warn",
        "signature": "FilePath-\u003eSh Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:touchfile",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate a file, creating (a blank file) if it does not exist.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh ()",
        "fct-source": "src/Shelly.html#touchfile",
        "fct-type": "function",
        "title": "touchfile"
      },
      "index": {
        "description": "Update file creating blank file if it does not exist",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "touchfile",
        "normalized": "FilePath-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003einternally log what occurred.\n Log will be re-played on failure.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Text -\u003e Sh ()",
        "fct-source": "src/Shelly-Base.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "internally log what occurred Log will be re-played on failure",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "trace",
        "normalized": "Text-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "Text-\u003eSh()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:tracing",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a sub-Sh where commands are not traced\n Defaults to True.\n You should only set to False temporarily for very specific reasons\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e Sh a -\u003e Sh a",
        "fct-source": "src/Shelly.html#tracing",
        "fct-type": "function",
        "title": "tracing"
      },
      "index": {
        "description": "Create sub-Sh where commands are not traced Defaults to True You should only set to False temporarily for very specific reasons",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "tracing",
        "normalized": "Bool-\u003eSh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003eSh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:transferFoldHandleLines",
      "description": {
        "fct-descr": "\u003cp\u003eTransfer from one handle to another\n For example, send contents of a process output to stdout.\n does not close the write handle.\n\u003c/p\u003e\u003cp\u003eAlso, fold over the contents being streamed line by line\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "a -\u003e FoldCallback a -\u003e Handle -\u003e Handle -\u003e IO a",
        "fct-source": "src/Shelly.html#transferFoldHandleLines",
        "fct-type": "function",
        "title": "transferFoldHandleLines"
      },
      "index": {
        "description": "Transfer from one handle to another For example send contents of process output to stdout does not close the write handle Also fold over the contents being streamed line by line",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "transferFoldHandleLines",
        "normalized": "a-\u003eFoldCallback a-\u003eHandle-\u003eHandle-\u003eIO a",
        "package": "shelly",
        "partial": "Fold Handle Lines",
        "signature": "a-\u003eFoldCallback a-\u003eHandle-\u003eHandle-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:transferLinesAndCombine",
      "description": {
        "fct-descr": "\u003cp\u003eTransfer from one handle to another\n For example, send contents of a process output to stdout.\n does not close the write handle.\n\u003c/p\u003e\u003cp\u003eAlso, return the complete contents being streamed line by line.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Handle -\u003e Handle -\u003e IO Text",
        "fct-source": "src/Shelly.html#transferLinesAndCombine",
        "fct-type": "function",
        "title": "transferLinesAndCombine"
      },
      "index": {
        "description": "Transfer from one handle to another For example send contents of process output to stdout does not close the write handle Also return the complete contents being streamed line by line",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "transferLinesAndCombine",
        "normalized": "Handle-\u003eHandle-\u003eIO Text",
        "package": "shelly",
        "partial": "Lines And Combine",
        "signature": "Handle-\u003eHandle-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:unless",
      "description": {
        "fct-descr": "\u003cp\u003eThe reverse of \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e m () -\u003e m ()",
        "fct-type": "function",
        "title": "unless"
      },
      "index": {
        "description": "The reverse of when",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "unless",
        "normalized": "Bool-\u003ea()-\u003ea()",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:unlessM",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic-conditional version of the \u003ccode\u003e\u003ca\u003eunless\u003c/a\u003e\u003c/code\u003e guard.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "m Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Shelly.html#unlessM",
        "fct-type": "function",
        "title": "unlessM"
      },
      "index": {
        "description": "monadic-conditional version of the unless guard",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "unlessM",
        "normalized": "a Bool-\u003ea()-\u003ea()",
        "package": "shelly",
        "partial": "",
        "signature": "m Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:verbosely",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a sub-Sh in which external command outputs are echoed and\n Executed commands are printed\n See \u003ccode\u003e\u003ca\u003esub\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Sh a -\u003e Sh a",
        "fct-source": "src/Shelly.html#verbosely",
        "fct-type": "function",
        "title": "verbosely"
      },
      "index": {
        "description": "Create sub-Sh in which external command outputs are echoed and Executed commands are printed See sub",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "verbosely",
        "normalized": "Sh a-\u003eSh a",
        "package": "shelly",
        "partial": "",
        "signature": "Sh a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:when",
      "description": {
        "fct-descr": "\u003cp\u003eConditional execution of monadic expressions. For example, \n\u003c/p\u003e\u003cpre\u003e       when debug (putStr \"Debugging\\n\")\n\u003c/pre\u003e\u003cp\u003ewill output the string \u003ccode\u003eDebugging\\n\u003c/code\u003e if the Boolean value \u003ccode\u003edebug\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nand otherwise do nothing.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "Bool -\u003e m () -\u003e m ()",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "Conditional execution of monadic expressions For example when debug putStr Debugging will output the string Debugging if the Boolean value debug is True and otherwise do nothing",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "when",
        "normalized": "Bool-\u003ea()-\u003ea()",
        "package": "shelly",
        "partial": "",
        "signature": "Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:whenM",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic-conditional version of the \u003ca\u003ewhen\u003c/a\u003e guard.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "m Bool -\u003e m () -\u003e m ()",
        "fct-source": "src/Shelly-Base.html#whenM",
        "fct-type": "function",
        "title": "whenM"
      },
      "index": {
        "description": "monadic-conditional version of the when guard",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "whenM",
        "normalized": "a Bool-\u003ea()-\u003ea()",
        "package": "shelly",
        "partial": "",
        "signature": "m Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:which",
      "description": {
        "fct-descr": "\u003cp\u003eGet a full path to an executable by looking at the \u003ccode\u003ePATH\u003c/code\u003e environement\n variable. Windows normally looks in additional places besides the\n \u003ccode\u003ePATH\u003c/code\u003e: this does not duplicate that behavior.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Sh (Maybe FilePath)",
        "fct-source": "src/Shelly.html#which",
        "fct-type": "function",
        "title": "which"
      },
      "index": {
        "description": "Get full path to an executable by looking at the PATH environement variable Windows normally looks in additional places besides the PATH this does not duplicate that behavior",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "which",
        "normalized": "FilePath-\u003eSh(Maybe FilePath)",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eSh(Maybe FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:withTmpDir",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a temporary directory and pass it as a parameter to a Sh\n computation. The directory is nuked afterwards.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "(FilePath -\u003e Sh a) -\u003e Sh a",
        "fct-source": "src/Shelly.html#withTmpDir",
        "fct-type": "function",
        "title": "withTmpDir"
      },
      "index": {
        "description": "Create temporary directory and pass it as parameter to Sh computation The directory is nuked afterwards",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "withTmpDir",
        "normalized": "(FilePath-\u003eSh a)-\u003eSh a",
        "package": "shelly",
        "partial": "Tmp Dir",
        "signature": "(FilePath-\u003eSh a)-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly/docs/Shelly.html#v:writefile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Lazy Text to a file.\n\u003c/p\u003e",
        "fct-module": "Shelly",
        "fct-package": "shelly",
        "fct-signature": "FilePath -\u003e Text -\u003e Sh ()",
        "fct-source": "src/Shelly.html#writefile",
        "fct-type": "function",
        "title": "writefile"
      },
      "index": {
        "description": "Write Lazy Text to file",
        "hierarchy": "Shelly",
        "module": "Shelly",
        "name": "writefile",
        "normalized": "FilePath-\u003eText-\u003eSh()",
        "package": "shelly",
        "partial": "",
        "signature": "FilePath-\u003eText-\u003eSh()"
      }
    }
  }
]