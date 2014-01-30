[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a few functions to use unix-y shell commands\n as \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eThe output \u003ccode\u003eByteString\u003c/code\u003es from \u003ccode\u003e\u003ca\u003epipeCmdEnv\u003c/a\u003e\u003c/code\u003e and friends are not line-wise, but chunk-wise. To get proper lines use the pipes-binary and the upcoming pipes-text machinery.\n\u003c/p\u003e\u003cp\u003eAll code examples in this module assume following qualified imports:\n Pipes.Prelude as P, Pipes.ByteString as PBS, Data.ByteString.Char8 as BSC\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Shell.html",
        "fct-type": "module",
        "title": "Shell"
      },
      "index": {
        "description": "This module contains few functions to use unix-y shell commands as Pipe The output ByteString from pipeCmdEnv and friends are not line-wise but chunk-wise To get proper lines use the pipes-binary and the upcoming pipes-text machinery All code examples in this module assume following qualified imports Pipes.Prelude as Pipes.ByteString as PBS Data.ByteString.Char8 as BSC",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "Shell",
        "normalized": "",
        "package": "pipes-shell",
        "partial": "Shell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#t:Cmd",
      "description": {
        "fct-descr": "\u003cp\u003eAn ad-hoc typeclass to get the varadic arguments and DWIM behavoir of \u003ccode\u003e\u003ca\u003ecmdEnv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "class",
        "fct-source": "src/Pipes-Shell.html#Cmd",
        "fct-type": "class",
        "title": "Cmd"
      },
      "index": {
        "description": "An ad-hoc typeclass to get the varadic arguments and DWIM behavoir of cmdEnv",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "Cmd",
        "normalized": "",
        "package": "pipes-shell",
        "partial": "Cmd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#t:Cmd-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAn ad-hoc typeclass to get the varadic arguments and DWIM behavoir of \u003ccode\u003e\u003ca\u003ecmd'\u003c/a\u003e\u003c/code\u003e.\n This class is seperate from \u003ccode\u003e\u003ca\u003eCmd\u003c/a\u003e\u003c/code\u003e to make the return types work out.\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "class",
        "fct-source": "src/Pipes-Shell.html#Cmd%27",
        "fct-type": "class",
        "title": "Cmd'"
      },
      "index": {
        "description": "An ad-hoc typeclass to get the varadic arguments and DWIM behavoir of cmd This class is seperate from Cmd to make the return types work out",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "Cmd'",
        "normalized": "",
        "package": "pipes-shell",
        "partial": "Cmd'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:-62--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003e\u003e-\u003e\u003c/a\u003e\u003c/code\u003e but marks the end of the left pipe with \u003ccode\u003e\u003ca\u003emarkEnd\u003c/a\u003e\u003c/code\u003e.\n It's needed because \u003ccode\u003e\u003ca\u003epipeCmdEnv\u003c/a\u003e\u003c/code\u003e has to know when the upstream \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e finishes.\n\u003c/p\u003e\u003cp\u003eThe basic rule is:\n\u003c/p\u003e\u003cpre\u003e Replace every \u003ccode\u003e\u003ca\u003e\u003e-\u003e\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003e\u003e?\u003e\u003c/a\u003e\u003c/code\u003e when it's in front of \u003ccode\u003e\u003ca\u003epipeCmdEnv\u003c/a\u003e\u003c/code\u003e or similar.\u003c/pre\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "Proxy a' a () b m r -\u003e Proxy () (Maybe b) c' c m r -\u003e Proxy a' a c' c m r",
        "fct-source": "src/Pipes-Shell.html#%3E%3F%3E",
        "fct-type": "function",
        "title": "(\u003e?\u003e)"
      },
      "index": {
        "description": "Like but marks the end of the left pipe with markEnd It needed because pipeCmdEnv has to know when the upstream Pipe finishes The basic rule is Replace every with when it in front of pipeCmdEnv or similar",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "(\u003e?\u003e) \u003e?\u003e",
        "normalized": "Proxy a b()c d e-\u003eProxy()(Maybe c)f g d e-\u003eProxy a b f g d e",
        "package": "pipes-shell",
        "partial": "",
        "signature": "Proxy a' a()b m r-\u003eProxy()(Maybe b)c' c m r-\u003eProxy a' a c' c m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:cmd",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecmdEnv\u003c/a\u003e\u003c/code\u003e but doesn't set enviorment varaibles\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "String -\u003e cmd",
        "fct-source": "src/Pipes-Shell.html#cmd",
        "fct-type": "method",
        "title": "cmd"
      },
      "index": {
        "description": "Like cmdEnv but doesn set enviorment varaibles",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "cmd",
        "normalized": "String-\u003ea",
        "package": "pipes-shell",
        "partial": "",
        "signature": "String-\u003ecmd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:cmd-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e but uses \u003ccode\u003e\u003ca\u003eignoreErr\u003c/a\u003e\u003c/code\u003e automatically.\n So it's like \u003ccode\u003e\u003ca\u003epipeCmd'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eproducerCmd'\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003econsumerCmd\u003c/a\u003e\u003c/code\u003e depending on context.\n It supports the same style of varadic arguments as \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "String -\u003e cmd",
        "fct-source": "src/Pipes-Shell.html#cmd%27",
        "fct-type": "method",
        "title": "cmd'"
      },
      "index": {
        "description": "Like cmd but uses ignoreErr automatically So it like pipeCmd producerCmd or consumerCmd depending on context It supports the same style of varadic arguments as cmd",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "cmd'",
        "normalized": "String-\u003ea",
        "package": "pipes-shell",
        "partial": "",
        "signature": "String-\u003ecmd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:cmdEnv",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipeCmdEnv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eproducerCmdEnv\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003econsumerCmdEnv\u003c/a\u003e\u003c/code\u003e depending on the context.\n It also supports varadic arguments.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cp\u003eAs \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunShell $ yield (BSC.pack \"aaa\") \u003e?\u003e cmd \"tr 'a' 'A'\" \u003e-\u003e ignoreErr \u003e-\u003e PBS.stdout\n\u003c/code\u003e\u003c/strong\u003eAAA\n\u003c/pre\u003e\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunShell $ cmd \"ls\" \u003e-\u003e ignoreErr \u003e-\u003e PBS.stdout\n\u003c/code\u003e\u003c/strong\u003e\u003coutput from ls on the current directory\u003e\n\u003c/pre\u003e\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunShell $ yield (BSC.pack \"aaa\") \u003e?\u003e cmd \"cat \u003e test.file\"\n\u003c/code\u003e\u003c/strong\u003e\u003ca new file with \"aaa\" in it\u003e\n\u003c/pre\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "Maybe [(String, String)] -\u003e String -\u003e cmd",
        "fct-source": "src/Pipes-Shell.html#cmdEnv",
        "fct-type": "method",
        "title": "cmdEnv"
      },
      "index": {
        "description": "Like pipeCmdEnv producerCmdEnv or consumerCmdEnv depending on the context It also supports varadic arguments Examples As Pipe runShell yield BSC.pack aaa cmd tr ignoreErr PBS.stdout AAA As Producer runShell cmd ls ignoreErr PBS.stdout output from ls on the current directory As Consumer runShell yield BSC.pack aaa cmd cat test.file new file with aaa in it",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "cmdEnv",
        "normalized": "Maybe[(String,String)]-\u003eString-\u003ea",
        "package": "pipes-shell",
        "partial": "Env",
        "signature": "Maybe[(String,String)]-\u003eString-\u003ecmd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:consumerCmd",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econsumerCmdEnv\u003c/a\u003e\u003c/code\u003e but doesn't set enviorment varaibles\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "String -\u003e Consumer (Maybe ByteString) m ()",
        "fct-source": "src/Pipes-Shell.html#consumerCmd",
        "fct-type": "function",
        "title": "consumerCmd"
      },
      "index": {
        "description": "Like consumerCmdEnv but doesn set enviorment varaibles",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "consumerCmd",
        "normalized": "String-\u003eConsumer(Maybe ByteString)a()",
        "package": "pipes-shell",
        "partial": "Cmd",
        "signature": "String-\u003eConsumer(Maybe ByteString)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:consumerCmdEnv",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipeCmd\u003c/a\u003e\u003c/code\u003e but closes the output end immediately.\n\u003c/p\u003e\u003cp\u003eUseful for command line tools like \u003ccode\u003e cat \u003e test.file \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "Maybe [(String, String)] -\u003e String -\u003e Consumer (Maybe ByteString) m ()",
        "fct-source": "src/Pipes-Shell.html#consumerCmdEnv",
        "fct-type": "function",
        "title": "consumerCmdEnv"
      },
      "index": {
        "description": "Like pipeCmd but closes the output end immediately Useful for command line tools like cat test.file",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "consumerCmdEnv",
        "normalized": "Maybe[(String,String)]-\u003eString-\u003eConsumer(Maybe ByteString)a()",
        "package": "pipes-shell",
        "partial": "Cmd Env",
        "signature": "Maybe[(String,String)]-\u003eString-\u003eConsumer(Maybe ByteString)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:ignoreErr",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore stderr from a \u003ccode\u003e\u003ca\u003epipeCmd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "Pipe (Either ByteString ByteString) ByteString m ()",
        "fct-source": "src/Pipes-Shell.html#ignoreErr",
        "fct-type": "function",
        "title": "ignoreErr"
      },
      "index": {
        "description": "Ignore stderr from pipeCmd",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "ignoreErr",
        "normalized": "Pipe(Either ByteString ByteString)ByteString a()",
        "package": "pipes-shell",
        "partial": "Err",
        "signature": "Pipe(Either ByteString ByteString)ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:ignoreOut",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore stdout from a \u003ccode\u003e\u003ca\u003epipeCmd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "Pipe (Either ByteString ByteString) ByteString m ()",
        "fct-source": "src/Pipes-Shell.html#ignoreOut",
        "fct-type": "function",
        "title": "ignoreOut"
      },
      "index": {
        "description": "Ignore stdout from pipeCmd",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "ignoreOut",
        "normalized": "Pipe(Either ByteString ByteString)ByteString a()",
        "package": "pipes-shell",
        "partial": "Out",
        "signature": "Pipe(Either ByteString ByteString)ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:markEnd",
      "description": {
        "fct-descr": "\u003cp\u003eMark the end of a pipe.\n It wraps all values in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and yields *one* \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e after the upstream pipefinished.\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "Proxy a' a b' b m r -\u003e Proxy a' a b' (Maybe b) m r",
        "fct-source": "src/Pipes-Shell.html#markEnd",
        "fct-type": "function",
        "title": "markEnd"
      },
      "index": {
        "description": "Mark the end of pipe It wraps all values in Just and yields one Nothing after the upstream pipefinished",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "markEnd",
        "normalized": "Proxy a b c d e f-\u003eProxy a b c(Maybe d)e f",
        "package": "pipes-shell",
        "partial": "End",
        "signature": "Proxy a' a b' b m r-\u003eProxy a' a b'(Maybe b)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:pipeCmd",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipeCmdEnv\u003c/a\u003e\u003c/code\u003e but doesn't set enviorment varaibles\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "String -\u003e Pipe (Maybe ByteString) (Either ByteString ByteString) m ()",
        "fct-source": "src/Pipes-Shell.html#pipeCmd",
        "fct-type": "function",
        "title": "pipeCmd"
      },
      "index": {
        "description": "Like pipeCmdEnv but doesn set enviorment varaibles",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "pipeCmd",
        "normalized": "String-\u003ePipe(Maybe ByteString)(Either ByteString ByteString)a()",
        "package": "pipes-shell",
        "partial": "Cmd",
        "signature": "String-\u003ePipe(Maybe ByteString)(Either ByteString ByteString)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:pipeCmd-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipeCmd\u003c/a\u003e\u003c/code\u003e but ignores stderr\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "String -\u003e Pipe (Maybe ByteString) ByteString m ()",
        "fct-source": "src/Pipes-Shell.html#pipeCmd%27",
        "fct-type": "function",
        "title": "pipeCmd'"
      },
      "index": {
        "description": "Like pipeCmd but ignores stderr",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "pipeCmd'",
        "normalized": "String-\u003ePipe(Maybe ByteString)ByteString a()",
        "package": "pipes-shell",
        "partial": "Cmd'",
        "signature": "String-\u003ePipe(Maybe ByteString)ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:pipeCmdEnv",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the workhorse of this package.\n\u003c/p\u003e\u003cp\u003eIt provides the direct interface from a shell command string to a proper\n \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunShell $ yield (BSC.pack \"aaa\") \u003e?\u003e pipeCmdEnv Nothing \"tr 'a' 'A'\" \u003e-\u003e PBS.stdout\n\u003c/code\u003e\u003c/strong\u003eAAA\n\u003c/pre\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "Maybe [(String, String)] -\u003e String -\u003e Pipe (Maybe ByteString) (Either ByteString ByteString) m ()",
        "fct-source": "src/Pipes-Shell.html#pipeCmdEnv",
        "fct-type": "function",
        "title": "pipeCmdEnv"
      },
      "index": {
        "description": "This is the workhorse of this package It provides the direct interface from shell command string to proper Pipe runShell yield BSC.pack aaa pipeCmdEnv Nothing tr PBS.stdout AAA",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "pipeCmdEnv",
        "normalized": "Maybe[(String,String)]-\u003eString-\u003ePipe(Maybe ByteString)(Either ByteString ByteString)a()",
        "package": "pipes-shell",
        "partial": "Cmd Env",
        "signature": "Maybe[(String,String)]-\u003eString-\u003ePipe(Maybe ByteString)(Either ByteString ByteString)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:producerCmd",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eproducerCmdEnv\u003c/a\u003e\u003c/code\u003e but doesn't set enviorment varaibles\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "String -\u003e Producer (Either ByteString ByteString) m ()",
        "fct-source": "src/Pipes-Shell.html#producerCmd",
        "fct-type": "function",
        "title": "producerCmd"
      },
      "index": {
        "description": "Like producerCmdEnv but doesn set enviorment varaibles",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "producerCmd",
        "normalized": "String-\u003eProducer(Either ByteString ByteString)a()",
        "package": "pipes-shell",
        "partial": "Cmd",
        "signature": "String-\u003eProducer(Either ByteString ByteString)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:producerCmd-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eproducerCmd\u003c/a\u003e\u003c/code\u003e but ignores stderr\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "String -\u003e Producer ByteString m ()",
        "fct-source": "src/Pipes-Shell.html#producerCmd%27",
        "fct-type": "function",
        "title": "producerCmd'"
      },
      "index": {
        "description": "Like producerCmd but ignores stderr",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "producerCmd'",
        "normalized": "String-\u003eProducer ByteString a()",
        "package": "pipes-shell",
        "partial": "Cmd'",
        "signature": "String-\u003eProducer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:producerCmdEnv",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipeCmdEnv\u003c/a\u003e\u003c/code\u003e but closes the input end immediately.\n\u003c/p\u003e\u003cp\u003eUseful for command line tools like \u003ccode\u003e ls \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "Maybe [(String, String)] -\u003e String -\u003e Producer (Either ByteString ByteString) m ()",
        "fct-source": "src/Pipes-Shell.html#producerCmdEnv",
        "fct-type": "function",
        "title": "producerCmdEnv"
      },
      "index": {
        "description": "Like pipeCmdEnv but closes the input end immediately Useful for command line tools like ls",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "producerCmdEnv",
        "normalized": "Maybe[(String,String)]-\u003eString-\u003eProducer(Either ByteString ByteString)a()",
        "package": "pipes-shell",
        "partial": "Cmd Env",
        "signature": "Maybe[(String,String)]-\u003eString-\u003eProducer(Either ByteString ByteString)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:runShell",
      "description": {
        "fct-descr": "\u003cp\u003eA simple run function for \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003es that live in \u003ccode\u003e\u003ca\u003eSafeT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Shell",
        "fct-package": "pipes-shell",
        "fct-signature": "Effect (SafeT IO) r -\u003e IO r",
        "fct-source": "src/Pipes-Shell.html#runShell",
        "fct-type": "function",
        "title": "runShell"
      },
      "index": {
        "description": "simple run function for Pipe that live in SafeT IO",
        "hierarchy": "Pipes Shell",
        "module": "Pipes.Shell",
        "name": "runShell",
        "normalized": "Effect(SafeT IO)a-\u003eIO a",
        "package": "pipes-shell",
        "partial": "Shell",
        "signature": "Effect(SafeT IO)r-\u003eIO r"
      }
    }
  }
]