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
        "word": "DSTM"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.STM.DSTM",
          "name": "DSTM",
          "package": "DSTM",
          "source": "src/Control-Distributed-STM-DSTM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "DSTM",
          "package": "DSTM",
          "partial": "DSTM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eDist\u003c/a\u003e\u003c/code\u003e defines the distribution property of \u003ccode\u003eTVar\u003c/code\u003e values. Any \n TVar value must implement class \u003ccode\u003e\u003ca\u003eDist\u003c/a\u003e\u003c/code\u003e. All basic data types exported by\n the Prelude are instances of \u003ccode\u003e\u003ca\u003eDist\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eDist\u003c/a\u003e\u003c/code\u003e may be derived for any data\n type whose constituents are also instances of \u003ccode\u003e\u003ca\u003eDist\u003c/a\u003e\u003c/code\u003e. Any custom-typed TVar\n value type should implement \u003ccode\u003e\u003ca\u003efinTVars\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eregTVars\u003c/a\u003e\u003c/code\u003e to do nothing and \n return '()'.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003efinTVars\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eregTVars\u003c/a\u003e\u003c/code\u003e should never be called by the application\n itself!\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "Dist",
          "package": "DSTM",
          "source": "src/Control-Distributed-STM-Dist.html#Dist",
          "type": "class"
        },
        "index": {
          "description": "The class Dist defines the distribution property of TVar values Any TVar value must implement class Dist All basic data types exported by the Prelude are instances of Dist and Dist may be derived for any data type whose constituents are also instances of Dist Any custom-typed TVar value type should implement finTVars and regTVars to do nothing and return Note that finTVars and regTVars should never be called by the application itself",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "Dist",
          "package": "DSTM",
          "partial": "Dist",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad supporting atomic memory transactions\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "STM",
          "package": "DSTM",
          "source": "src/Control-Distributed-STM-STM.html#STM",
          "type": "data"
        },
        "index": {
          "description": "monad supporting atomic memory transactions",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "STM",
          "package": "DSTM",
          "partial": "STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#t:STM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSomeDistTVarException\u003c/a\u003e\u003c/code\u003e is the abstract exception type which is thrown\n by the DSTM library when either \u003ccode\u003ereadTVar\u003c/code\u003e or \u003ccode\u003ewriteTVar\u003c/code\u003e is called on an\n unreachable TVar.\n A TVar becomes unreachable when the process hosting the TVar becomes\n unreachable. \n An atomic transaction using a TVar which becomes unreachable during the \n execution of \u003ccode\u003eatomic\u003c/code\u003e may either execute completely (without the unreachable\n TVar(s)) or execute not at all depending on transaction states. In either\n case an exception of type \u003ccode\u003e\u003ca\u003eSomeDistTVarException\u003c/a\u003e\u003c/code\u003e is raised.\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "SomeDistTVarException",
          "package": "DSTM",
          "source": "src/Control-Distributed-STM-EnvAddr.html#SomeDistTVarException",
          "type": "data"
        },
        "index": {
          "description": "SomeDistTVarException is the abstract exception type which is thrown by the DSTM library when either readTVar or writeTVar is called on an unreachable TVar TVar becomes unreachable when the process hosting the TVar becomes unreachable An atomic transaction using TVar which becomes unreachable during the execution of atomic may either execute completely without the unreachable TVar or execute not at all depending on transaction states In either case an exception of type SomeDistTVarException is raised",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "SomeDistTVarException",
          "package": "DSTM",
          "partial": "Some Dist TVar Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#t:SomeDistTVarException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShared memory locations that support atomic memory transactions. Between\n different nodes memory is shared using transparent process communication.\n (TVars are called \u003ccode\u003ehost TVars\u003c/code\u003e when they reside on the process where they\n have been created by calling \u003ccode\u003enewTVar\u003c/code\u003e. They are called \u003ccode\u003elink TVars\u003c/code\u003e on \n other processes)\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "TVar",
          "package": "DSTM",
          "source": "src/Control-Distributed-STM-TVar.html#TVar",
          "type": "data"
        },
        "index": {
          "description": "Shared memory locations that support atomic memory transactions Between different nodes memory is shared using transparent process communication TVars are called host TVars when they reside on the process where they have been created by calling newTVar They are called link TVars on other processes",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "TVar",
          "package": "DSTM",
          "partial": "TVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#t:TVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a series of STM actions atomically\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "atomic",
          "package": "DSTM",
          "signature": "STM a -\u003e IO a",
          "source": "src/Control-Distributed-STM-DSTM.html#atomic",
          "type": "function"
        },
        "index": {
          "description": "Perform series of STM actions atomically",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "atomic",
          "normalized": "STM a-\u003eIO a",
          "package": "DSTM",
          "signature": "STM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:atomic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException handling within STM actions\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "catch",
          "package": "DSTM",
          "signature": "STM a -\u003e (SomeException -\u003e STM a) -\u003e STM a",
          "source": "src/Control-Distributed-STM-DSTM.html#catch",
          "type": "function"
        },
        "index": {
          "description": "Exception handling within STM actions",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "catch",
          "normalized": "STM a-\u003e(SomeException-\u003eSTM a)-\u003eSTM a",
          "package": "DSTM",
          "signature": "STM a-\u003e(SomeException-\u003eSTM a)-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ederegisterTVar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eserver name\u003c/code\u003e removes \u003ccode\u003ename\u003c/code\u003e from \u003ccode\u003eserver\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "deregisterTVar",
          "package": "DSTM",
          "signature": "String -\u003e String -\u003e IO ()",
          "source": "src/Control-Distributed-STM-NameService.html#deregisterTVar",
          "type": "function"
        },
        "index": {
          "description": "deregisterTVar server name removes name from server",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "deregisterTVar",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "DSTM",
          "partial": "TVar",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:deregisterTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not call finTVars yourself!\n\u003c/p\u003e\u003cp\u003efinTVars installs finalizers at all link TVars in \u003ccode\u003ea\u003c/code\u003e which send messages\n to their host TVars to remove them from the host TVar link count after the\n link TVars have been garbage collected\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "finTVars",
          "package": "DSTM",
          "signature": "a -\u003e IO ()",
          "source": "src/Control-Distributed-STM-Dist.html#finTVars",
          "type": "method"
        },
        "index": {
          "description": "Do not call finTVars yourself finTVars installs finalizers at all link TVars in which send messages to their host TVars to remove them from the host TVar link count after the link TVars have been garbage collected",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "finTVars",
          "normalized": "a-\u003eIO()",
          "package": "DSTM",
          "partial": "TVars",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:finTVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default name server for the process running the main function. \n Usually it is \u003ccode\u003elocalhost\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "gDefaultNameServer",
          "package": "DSTM",
          "signature": "String",
          "source": "src/Control-Distributed-STM-NameService.html#gDefaultNameServer",
          "type": "function"
        },
        "index": {
          "description": "The default name server for the process running the main function Usually it is localhost",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "gDefaultNameServer",
          "package": "DSTM",
          "partial": "Default Name Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:gDefaultNameServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eisDistErrTVar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ee\u003c/code\u003e \u003ccode\u003etVar\u003c/code\u003e checks whether \u003ccode\u003etVar\u003c/code\u003e is unreachable when \n exception \u003ccode\u003ee\u003c/code\u003e had been raised. It returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the exception raised \n denotes \u003ccode\u003etVar\u003c/code\u003e as unreachable, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise. A TVar returning \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e \n once will never return a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e check result.\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "isDistErrTVar",
          "package": "DSTM",
          "signature": "SomeDistTVarException -\u003e TVar a -\u003e Bool",
          "source": "src/Control-Distributed-STM-TVar.html#isDistErrTVar",
          "type": "function"
        },
        "index": {
          "description": "isDistErrTVar tVar checks whether tVar is unreachable when exception had been raised It returns True if the exception raised denotes tVar as unreachable False otherwise TVar returning True once will never return False check result",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "isDistErrTVar",
          "normalized": "SomeDistTVarException-\u003eTVar a-\u003eBool",
          "package": "DSTM",
          "partial": "Dist Err TVar",
          "signature": "SomeDistTVarException-\u003eTVar a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:isDistErrTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookupTVar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eserver name\u003c/code\u003e returns (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003etVar\u003c/code\u003e) if a \u003ccode\u003etVar\u003c/code\u003e registration\n of \u003ccode\u003ename\u003c/code\u003e exists on \u003ccode\u003eserver\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "lookupTVar",
          "package": "DSTM",
          "signature": "String -\u003e String -\u003e IO (Maybe (TVar a))",
          "source": "src/Control-Distributed-STM-NameService.html#lookupTVar",
          "type": "function"
        },
        "index": {
          "description": "lookupTVar server name returns Just tVar if tVar registration of name exists on server Nothing otherwise",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "lookupTVar",
          "normalized": "String-\u003eString-\u003eIO(Maybe(TVar a))",
          "package": "DSTM",
          "partial": "TVar",
          "signature": "String-\u003eString-\u003eIO(Maybe(TVar a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:lookupTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.STM.DSTM",
          "name": "nameService",
          "package": "DSTM",
          "signature": "String -\u003e IO ()",
          "source": "src/Control-Distributed-STM-NameService.html#nameService",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "nameService",
          "normalized": "String-\u003eIO()",
          "package": "DSTM",
          "partial": "Service",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:nameService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new TVar holding a value supplied\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "newTVar",
          "package": "DSTM",
          "signature": "a -\u003e STM (TVar a)",
          "source": "src/Control-Distributed-STM-DSTM.html#newTVar",
          "type": "function"
        },
        "index": {
          "description": "Create new TVar holding value supplied",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "newTVar",
          "normalized": "a-\u003eSTM(TVar a)",
          "package": "DSTM",
          "partial": "TVar",
          "signature": "a-\u003eSTM(TVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:newTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two alternative STM actions. If the first action completes without\n retrying then it forms the result of the orElse. Otherwise, if the first\n action retries, then the second action is tried in its place. If both\n actions retry then the orElse as a whole retries\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "orElse",
          "package": "DSTM",
          "signature": "STM a -\u003e STM a -\u003e STM a",
          "source": "src/Control-Distributed-STM-DSTM.html#orElse",
          "type": "function"
        },
        "index": {
          "description": "Compose two alternative STM actions If the first action completes without retrying then it forms the result of the orElse Otherwise if the first action retries then the second action is tried in its place If both actions retry then the orElse as whole retries",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "orElse",
          "normalized": "STM a-\u003eSTM a-\u003eSTM a",
          "package": "DSTM",
          "partial": "Else",
          "signature": "STM a-\u003eSTM a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current value stored in a TVar\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "readTVar",
          "package": "DSTM",
          "signature": "TVar a -\u003e STM a",
          "source": "src/Control-Distributed-STM-DSTM.html#readTVar",
          "type": "function"
        },
        "index": {
          "description": "Return the current value stored in TVar",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "readTVar",
          "normalized": "TVar a-\u003eSTM a",
          "package": "DSTM",
          "partial": "TVar",
          "signature": "TVar a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:readTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not call regTVars yourself!\n\u003c/p\u003e\u003cp\u003eregTVars registers all TVars within \u003ccode\u003ea\u003c/code\u003e with a host TVar link count before \n the TVars in \u003ccode\u003ea\u003c/code\u003e are sent to remote nodes\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "regTVars",
          "package": "DSTM",
          "signature": "EnvAddr -\u003e a -\u003e IO ()",
          "source": "src/Control-Distributed-STM-Dist.html#regTVars",
          "type": "method"
        },
        "index": {
          "description": "Do not call regTVars yourself regTVars registers all TVars within with host TVar link count before the TVars in are sent to remote nodes",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "regTVars",
          "normalized": "EnvAddr-\u003ea-\u003eIO()",
          "package": "DSTM",
          "partial": "TVars",
          "signature": "EnvAddr-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:regTVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eregisterTVar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eserver tVar name\u003c/code\u003e registers \u003ccode\u003etVar\u003c/code\u003e with \u003ccode\u003ename\u003c/code\u003e onto \u003ccode\u003eserver\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "registerTVar",
          "package": "DSTM",
          "signature": "String -\u003e TVar a -\u003e String -\u003e IO ()",
          "source": "src/Control-Distributed-STM-NameService.html#registerTVar",
          "type": "function"
        },
        "index": {
          "description": "registerTVar server tVar name registers tVar with name onto server",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "registerTVar",
          "normalized": "String-\u003eTVar a-\u003eString-\u003eIO()",
          "package": "DSTM",
          "partial": "TVar",
          "signature": "String-\u003eTVar a-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:registerTVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetry execution of the current memory transaction because it has seen \n values in TVars which mean that it should not continue (e.g. the TVars\n represent a shared buffer that is now empty). The implementation may block\n the thread until one of the TVars that it has read from has been udpated.\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "retry",
          "package": "DSTM",
          "signature": "STM a",
          "source": "src/Control-Distributed-STM-DSTM.html#retry",
          "type": "function"
        },
        "index": {
          "description": "Retry execution of the current memory transaction because it has seen values in TVars which mean that it should not continue e.g the TVars represent shared buffer that is now empty The implementation may block the thread until one of the TVars that it has read from has been udpated",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "retry",
          "package": "DSTM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estartDist\u003c/a\u003e\u003c/code\u003e enables inter process communication and exception handling and\n then executes the given main function \n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "startDist",
          "package": "DSTM",
          "signature": "IO ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "startDist enables inter process communication and exception handling and then executes the given main function",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "startDist",
          "normalized": "IO()-\u003eIO()",
          "package": "DSTM",
          "partial": "Dist",
          "signature": "IO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:startDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception within an STM action\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "throw",
          "package": "DSTM",
          "signature": "SomeException -\u003e STM a",
          "source": "src/Control-Distributed-STM-DSTM.html#throw",
          "type": "function"
        },
        "index": {
          "description": "Throw an exception within an STM action",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "throw",
          "normalized": "SomeException-\u003eSTM a",
          "package": "DSTM",
          "signature": "SomeException-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the supplied value into a TVar\n\u003c/p\u003e",
          "module": "Control.Distributed.STM.DSTM",
          "name": "writeTVar",
          "package": "DSTM",
          "signature": "TVar a -\u003e a -\u003e STM ()",
          "source": "src/Control-Distributed-STM-DSTM.html#writeTVar",
          "type": "function"
        },
        "index": {
          "description": "Write the supplied value into TVar",
          "hierarchy": "Control Distributed STM DSTM",
          "module": "Control.Distributed.STM.DSTM",
          "name": "writeTVar",
          "normalized": "TVar a-\u003ea-\u003eSTM()",
          "package": "DSTM",
          "partial": "TVar",
          "signature": "TVar a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DSTM/docs/Control-Distributed-STM-DSTM.html#v:writeTVar"
      }
    }
  ]
]