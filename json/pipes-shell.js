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
        "word": "pipes-shell"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a few functions to use unix-y shell commands\n as \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eThe output \u003ccode\u003eByteString\u003c/code\u003es from \u003ccode\u003e\u003ca\u003epipeCmdEnv\u003c/a\u003e\u003c/code\u003e and friends are not line-wise, but chunk-wise. To get proper lines use the pipes-binary and the upcoming pipes-text machinery.\n\u003c/p\u003e\u003cp\u003eAll code examples in this module assume following qualified imports:\n Pipes.Prelude as P, Pipes.ByteString as PBS, Data.ByteString.Char8 as BSC\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Shell",
          "name": "Shell",
          "package": "pipes-shell",
          "source": "src/Pipes-Shell.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains few functions to use unix-y shell commands as Pipe The output ByteString from pipeCmdEnv and friends are not line-wise but chunk-wise To get proper lines use the pipes-binary and the upcoming pipes-text machinery All code examples in this module assume following qualified imports Pipes.Prelude as Pipes.ByteString as PBS Data.ByteString.Char8 as BSC",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "Shell",
          "package": "pipes-shell",
          "partial": "Shell",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ad-hoc typeclass to get the varadic arguments and DWIM behavoir of \u003ccode\u003e\u003ca\u003ecmdEnv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "Cmd",
          "package": "pipes-shell",
          "source": "src/Pipes-Shell.html#Cmd",
          "type": "class"
        },
        "index": {
          "description": "An ad-hoc typeclass to get the varadic arguments and DWIM behavoir of cmdEnv",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "Cmd",
          "package": "pipes-shell",
          "partial": "Cmd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#t:Cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ad-hoc typeclass to get the varadic arguments and DWIM behavoir of \u003ccode\u003e\u003ca\u003ecmd'\u003c/a\u003e\u003c/code\u003e.\n This class is seperate from \u003ccode\u003e\u003ca\u003eCmd\u003c/a\u003e\u003c/code\u003e to make the return types work out.\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "Cmd'",
          "package": "pipes-shell",
          "source": "src/Pipes-Shell.html#Cmd%27",
          "type": "class"
        },
        "index": {
          "description": "An ad-hoc typeclass to get the varadic arguments and DWIM behavoir of cmd This class is seperate from Cmd to make the return types work out",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "Cmd'",
          "package": "pipes-shell",
          "partial": "Cmd'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#t:Cmd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003e\u003e-\u003e\u003c/a\u003e\u003c/code\u003e but marks the end of the left pipe with \u003ccode\u003e\u003ca\u003emarkEnd\u003c/a\u003e\u003c/code\u003e.\n It's needed because \u003ccode\u003e\u003ca\u003epipeCmdEnv\u003c/a\u003e\u003c/code\u003e has to know when the upstream \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e finishes.\n\u003c/p\u003e\u003cp\u003eThe basic rule is:\n\u003c/p\u003e\u003cpre\u003e Replace every \u003ccode\u003e\u003ca\u003e\u003e-\u003e\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003e\u003e?\u003e\u003c/a\u003e\u003c/code\u003e when it's in front of \u003ccode\u003e\u003ca\u003epipeCmdEnv\u003c/a\u003e\u003c/code\u003e or similar.\u003c/pre\u003e",
          "module": "Pipes.Shell",
          "name": "(\u003e?\u003e)",
          "package": "pipes-shell",
          "signature": "Proxy a' a () b m r -\u003e Proxy () (Maybe b) c' c m r -\u003e Proxy a' a c' c m r",
          "source": "src/Pipes-Shell.html#%3E%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "Like but marks the end of the left pipe with markEnd It needed because pipeCmdEnv has to know when the upstream Pipe finishes The basic rule is Replace every with when it in front of pipeCmdEnv or similar",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "(\u003e?\u003e) \u003e?\u003e",
          "normalized": "Proxy a b()c d e-\u003eProxy()(Maybe c)f g d e-\u003eProxy a b f g d e",
          "package": "pipes-shell",
          "signature": "Proxy a' a()b m r-\u003eProxy()(Maybe b)c' c m r-\u003eProxy a' a c' c m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:-62--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecmdEnv\u003c/a\u003e\u003c/code\u003e but doesn't set enviorment varaibles\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "cmd",
          "package": "pipes-shell",
          "signature": "String -\u003e cmd",
          "source": "src/Pipes-Shell.html#cmd",
          "type": "method"
        },
        "index": {
          "description": "Like cmdEnv but doesn set enviorment varaibles",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "cmd",
          "normalized": "String-\u003ea",
          "package": "pipes-shell",
          "signature": "String-\u003ecmd",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e but uses \u003ccode\u003e\u003ca\u003eignoreErr\u003c/a\u003e\u003c/code\u003e automatically.\n So it's like \u003ccode\u003e\u003ca\u003epipeCmd'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eproducerCmd'\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003econsumerCmd\u003c/a\u003e\u003c/code\u003e depending on context.\n It supports the same style of varadic arguments as \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "cmd'",
          "package": "pipes-shell",
          "signature": "String -\u003e cmd",
          "source": "src/Pipes-Shell.html#cmd%27",
          "type": "method"
        },
        "index": {
          "description": "Like cmd but uses ignoreErr automatically So it like pipeCmd producerCmd or consumerCmd depending on context It supports the same style of varadic arguments as cmd",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "cmd'",
          "normalized": "String-\u003ea",
          "package": "pipes-shell",
          "signature": "String-\u003ecmd",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:cmd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipeCmdEnv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eproducerCmdEnv\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003econsumerCmdEnv\u003c/a\u003e\u003c/code\u003e depending on the context.\n It also supports varadic arguments.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cp\u003eAs \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunShell $ yield (BSC.pack \"aaa\") \u003e?\u003e cmd \"tr 'a' 'A'\" \u003e-\u003e ignoreErr \u003e-\u003e PBS.stdout\n\u003c/code\u003e\u003c/strong\u003eAAA\n\u003c/pre\u003e\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunShell $ cmd \"ls\" \u003e-\u003e ignoreErr \u003e-\u003e PBS.stdout\n\u003c/code\u003e\u003c/strong\u003e\u003coutput from ls on the current directory\u003e\n\u003c/pre\u003e\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunShell $ yield (BSC.pack \"aaa\") \u003e?\u003e cmd \"cat \u003e test.file\"\n\u003c/code\u003e\u003c/strong\u003e\u003ca new file with \"aaa\" in it\u003e\n\u003c/pre\u003e",
          "module": "Pipes.Shell",
          "name": "cmdEnv",
          "package": "pipes-shell",
          "signature": "Maybe [(String, String)] -\u003e String -\u003e cmd",
          "source": "src/Pipes-Shell.html#cmdEnv",
          "type": "method"
        },
        "index": {
          "description": "Like pipeCmdEnv producerCmdEnv or consumerCmdEnv depending on the context It also supports varadic arguments Examples As Pipe runShell yield BSC.pack aaa cmd tr ignoreErr PBS.stdout AAA As Producer runShell cmd ls ignoreErr PBS.stdout output from ls on the current directory As Consumer runShell yield BSC.pack aaa cmd cat test.file new file with aaa in it",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "cmdEnv",
          "normalized": "Maybe[(String,String)]-\u003eString-\u003ea",
          "package": "pipes-shell",
          "partial": "Env",
          "signature": "Maybe[(String,String)]-\u003eString-\u003ecmd",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:cmdEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econsumerCmdEnv\u003c/a\u003e\u003c/code\u003e but doesn't set enviorment varaibles\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "consumerCmd",
          "package": "pipes-shell",
          "signature": "String -\u003e Consumer (Maybe ByteString) m ()",
          "source": "src/Pipes-Shell.html#consumerCmd",
          "type": "function"
        },
        "index": {
          "description": "Like consumerCmdEnv but doesn set enviorment varaibles",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "consumerCmd",
          "normalized": "String-\u003eConsumer(Maybe ByteString)a()",
          "package": "pipes-shell",
          "partial": "Cmd",
          "signature": "String-\u003eConsumer(Maybe ByteString)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:consumerCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipeCmd\u003c/a\u003e\u003c/code\u003e but closes the output end immediately.\n\u003c/p\u003e\u003cp\u003eUseful for command line tools like \u003ccode\u003e cat \u003e test.file \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "consumerCmdEnv",
          "package": "pipes-shell",
          "signature": "Maybe [(String, String)] -\u003e String -\u003e Consumer (Maybe ByteString) m ()",
          "source": "src/Pipes-Shell.html#consumerCmdEnv",
          "type": "function"
        },
        "index": {
          "description": "Like pipeCmd but closes the output end immediately Useful for command line tools like cat test.file",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "consumerCmdEnv",
          "normalized": "Maybe[(String,String)]-\u003eString-\u003eConsumer(Maybe ByteString)a()",
          "package": "pipes-shell",
          "partial": "Cmd Env",
          "signature": "Maybe[(String,String)]-\u003eString-\u003eConsumer(Maybe ByteString)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:consumerCmdEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore stderr from a \u003ccode\u003e\u003ca\u003epipeCmd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "ignoreErr",
          "package": "pipes-shell",
          "signature": "Pipe (Either ByteString ByteString) ByteString m ()",
          "source": "src/Pipes-Shell.html#ignoreErr",
          "type": "function"
        },
        "index": {
          "description": "Ignore stderr from pipeCmd",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "ignoreErr",
          "normalized": "Pipe(Either ByteString ByteString)ByteString a()",
          "package": "pipes-shell",
          "partial": "Err",
          "signature": "Pipe(Either ByteString ByteString)ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:ignoreErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore stdout from a \u003ccode\u003e\u003ca\u003epipeCmd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "ignoreOut",
          "package": "pipes-shell",
          "signature": "Pipe (Either ByteString ByteString) ByteString m ()",
          "source": "src/Pipes-Shell.html#ignoreOut",
          "type": "function"
        },
        "index": {
          "description": "Ignore stdout from pipeCmd",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "ignoreOut",
          "normalized": "Pipe(Either ByteString ByteString)ByteString a()",
          "package": "pipes-shell",
          "partial": "Out",
          "signature": "Pipe(Either ByteString ByteString)ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:ignoreOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark the end of a pipe.\n It wraps all values in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and yields *one* \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e after the upstream pipefinished.\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "markEnd",
          "package": "pipes-shell",
          "signature": "Proxy a' a b' b m r -\u003e Proxy a' a b' (Maybe b) m r",
          "source": "src/Pipes-Shell.html#markEnd",
          "type": "function"
        },
        "index": {
          "description": "Mark the end of pipe It wraps all values in Just and yields one Nothing after the upstream pipefinished",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "markEnd",
          "normalized": "Proxy a b c d e f-\u003eProxy a b c(Maybe d)e f",
          "package": "pipes-shell",
          "partial": "End",
          "signature": "Proxy a' a b' b m r-\u003eProxy a' a b'(Maybe b)m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:markEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipeCmdEnv\u003c/a\u003e\u003c/code\u003e but doesn't set enviorment varaibles\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "pipeCmd",
          "package": "pipes-shell",
          "signature": "String -\u003e Pipe (Maybe ByteString) (Either ByteString ByteString) m ()",
          "source": "src/Pipes-Shell.html#pipeCmd",
          "type": "function"
        },
        "index": {
          "description": "Like pipeCmdEnv but doesn set enviorment varaibles",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "pipeCmd",
          "normalized": "String-\u003ePipe(Maybe ByteString)(Either ByteString ByteString)a()",
          "package": "pipes-shell",
          "partial": "Cmd",
          "signature": "String-\u003ePipe(Maybe ByteString)(Either ByteString ByteString)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:pipeCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipeCmd\u003c/a\u003e\u003c/code\u003e but ignores stderr\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "pipeCmd'",
          "package": "pipes-shell",
          "signature": "String -\u003e Pipe (Maybe ByteString) ByteString m ()",
          "source": "src/Pipes-Shell.html#pipeCmd%27",
          "type": "function"
        },
        "index": {
          "description": "Like pipeCmd but ignores stderr",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "pipeCmd'",
          "normalized": "String-\u003ePipe(Maybe ByteString)ByteString a()",
          "package": "pipes-shell",
          "partial": "Cmd'",
          "signature": "String-\u003ePipe(Maybe ByteString)ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:pipeCmd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the workhorse of this package.\n\u003c/p\u003e\u003cp\u003eIt provides the direct interface from a shell command string to a proper\n \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunShell $ yield (BSC.pack \"aaa\") \u003e?\u003e pipeCmdEnv Nothing \"tr 'a' 'A'\" \u003e-\u003e PBS.stdout\n\u003c/code\u003e\u003c/strong\u003eAAA\n\u003c/pre\u003e",
          "module": "Pipes.Shell",
          "name": "pipeCmdEnv",
          "package": "pipes-shell",
          "signature": "Maybe [(String, String)] -\u003e String -\u003e Pipe (Maybe ByteString) (Either ByteString ByteString) m ()",
          "source": "src/Pipes-Shell.html#pipeCmdEnv",
          "type": "function"
        },
        "index": {
          "description": "This is the workhorse of this package It provides the direct interface from shell command string to proper Pipe runShell yield BSC.pack aaa pipeCmdEnv Nothing tr PBS.stdout AAA",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "pipeCmdEnv",
          "normalized": "Maybe[(String,String)]-\u003eString-\u003ePipe(Maybe ByteString)(Either ByteString ByteString)a()",
          "package": "pipes-shell",
          "partial": "Cmd Env",
          "signature": "Maybe[(String,String)]-\u003eString-\u003ePipe(Maybe ByteString)(Either ByteString ByteString)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:pipeCmdEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eproducerCmdEnv\u003c/a\u003e\u003c/code\u003e but doesn't set enviorment varaibles\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "producerCmd",
          "package": "pipes-shell",
          "signature": "String -\u003e Producer (Either ByteString ByteString) m ()",
          "source": "src/Pipes-Shell.html#producerCmd",
          "type": "function"
        },
        "index": {
          "description": "Like producerCmdEnv but doesn set enviorment varaibles",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "producerCmd",
          "normalized": "String-\u003eProducer(Either ByteString ByteString)a()",
          "package": "pipes-shell",
          "partial": "Cmd",
          "signature": "String-\u003eProducer(Either ByteString ByteString)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:producerCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eproducerCmd\u003c/a\u003e\u003c/code\u003e but ignores stderr\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "producerCmd'",
          "package": "pipes-shell",
          "signature": "String -\u003e Producer ByteString m ()",
          "source": "src/Pipes-Shell.html#producerCmd%27",
          "type": "function"
        },
        "index": {
          "description": "Like producerCmd but ignores stderr",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "producerCmd'",
          "normalized": "String-\u003eProducer ByteString a()",
          "package": "pipes-shell",
          "partial": "Cmd'",
          "signature": "String-\u003eProducer ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:producerCmd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epipeCmdEnv\u003c/a\u003e\u003c/code\u003e but closes the input end immediately.\n\u003c/p\u003e\u003cp\u003eUseful for command line tools like \u003ccode\u003e ls \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "producerCmdEnv",
          "package": "pipes-shell",
          "signature": "Maybe [(String, String)] -\u003e String -\u003e Producer (Either ByteString ByteString) m ()",
          "source": "src/Pipes-Shell.html#producerCmdEnv",
          "type": "function"
        },
        "index": {
          "description": "Like pipeCmdEnv but closes the input end immediately Useful for command line tools like ls",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "producerCmdEnv",
          "normalized": "Maybe[(String,String)]-\u003eString-\u003eProducer(Either ByteString ByteString)a()",
          "package": "pipes-shell",
          "partial": "Cmd Env",
          "signature": "Maybe[(String,String)]-\u003eString-\u003eProducer(Either ByteString ByteString)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:producerCmdEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple run function for \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003es that live in \u003ccode\u003e\u003ca\u003eSafeT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Shell",
          "name": "runShell",
          "package": "pipes-shell",
          "signature": "Effect (SafeT IO) r -\u003e IO r",
          "source": "src/Pipes-Shell.html#runShell",
          "type": "function"
        },
        "index": {
          "description": "simple run function for Pipe that live in SafeT IO",
          "hierarchy": "Pipes Shell",
          "module": "Pipes.Shell",
          "name": "runShell",
          "normalized": "Effect(SafeT IO)a-\u003eIO a",
          "package": "pipes-shell",
          "partial": "Shell",
          "signature": "Effect(SafeT IO)r-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-shell/docs/Pipes-Shell.html#v:runShell"
      }
    }
  ]
]