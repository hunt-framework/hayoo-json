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
        "word": "coroutine-object"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIO event driverzo\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "Driver",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Driver.html",
          "type": "module"
        },
        "index": {
          "description": "IO event driverzo",
          "hierarchy": "Control Monad Trans Crtn Driver",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "Driver",
          "package": "coroutine-object",
          "partial": "Driver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Driver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edriver \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "Driver",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Driver.html#Driver",
          "type": "type"
        },
        "index": {
          "description": "driver",
          "hierarchy": "Control Monad Trans Crtn Driver",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "Driver",
          "package": "coroutine-object",
          "partial": "Driver",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Driver.html#t:Driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edriver client \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "DrvClient",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Driver.html#DrvClient",
          "type": "type"
        },
        "index": {
          "description": "driver client",
          "hierarchy": "Control Monad Trans Crtn Driver",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "DrvClient",
          "package": "coroutine-object",
          "partial": "Drv Client",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Driver.html#t:DrvClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esignature of IO event driver\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "DrvOp",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Driver.html#DrvOp",
          "type": "data"
        },
        "index": {
          "description": "signature of IO event driver",
          "hierarchy": "Control Monad Trans Crtn Driver",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "DrvOp",
          "package": "coroutine-object",
          "partial": "Drv Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Driver.html#t:DrvOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "Dispatch",
          "package": "coroutine-object",
          "signature": "DrvOp e e (Maybe (ActionOrder e))",
          "source": "src/Control-Monad-Trans-Crtn-Driver.html#DrvOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Driver",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "Dispatch",
          "package": "coroutine-object",
          "partial": "Dispatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Driver.html#v:Dispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "dispatch",
          "package": "coroutine-object",
          "signature": "e -\u003e DrvClient e m (Maybe (ActionOrder e))",
          "source": "src/Control-Monad-Trans-Crtn-Driver.html#dispatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Driver",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "dispatch",
          "normalized": "a-\u003eDrvClient a b(Maybe(ActionOrder a))",
          "package": "coroutine-object",
          "signature": "e-\u003eDrvClient e m(Maybe(ActionOrder e))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Driver.html#v:dispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebasic driver \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "driver",
          "package": "coroutine-object",
          "signature": "LogServer (SObjBT (DrvOp e) m) () -\u003e SObjT (WorldOp e (SObjBT (DrvOp e) m)) (SObjBT (DrvOp e) m) () -\u003e Driver e m ()",
          "source": "src/Control-Monad-Trans-Crtn-Driver.html#driver",
          "type": "function"
        },
        "index": {
          "description": "basic driver",
          "hierarchy": "Control Monad Trans Crtn Driver",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "driver",
          "normalized": "LogServer(SObjBT(DrvOp a)b)()-\u003eSObjT(WorldOp a(SObjBT(DrvOp a)b))(SObjBT(DrvOp a)b)()-\u003eDriver a b()",
          "package": "coroutine-object",
          "signature": "LogServer(SObjBT(DrvOp e)m)()-\u003eSObjT(WorldOp e(SObjBT(DrvOp e)m))(SObjBT(DrvOp e)m)()-\u003eDriver e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Driver.html#v:driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvenience routine for driver \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "fire",
          "package": "coroutine-object",
          "signature": "e -\u003e EStT (Driver e m ()) m (Maybe (ActionOrder e))",
          "source": "src/Control-Monad-Trans-Crtn-Driver.html#fire",
          "type": "function"
        },
        "index": {
          "description": "convenience routine for driver",
          "hierarchy": "Control Monad Trans Crtn Driver",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "fire",
          "normalized": "a-\u003eEStT(Driver a b())b(Maybe(ActionOrder a))",
          "package": "coroutine-object",
          "signature": "e-\u003eEStT(Driver e m())m(Maybe(ActionOrder e))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Driver.html#v:fire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea single feedback step of multiple event dispatch\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "multiDispatch",
          "package": "coroutine-object",
          "signature": "(LogServer (SObjBT (DrvOp e) m) (), World e (SObjBT (DrvOp e) m) ()) -\u003e [EvOrAct e] -\u003e SObjBT (DrvOp e) m (LogServer (SObjBT (DrvOp e) m) (), World e (SObjBT (DrvOp e) m) (), [EvOrAct e])",
          "source": "src/Control-Monad-Trans-Crtn-Driver.html#multiDispatch",
          "type": "function"
        },
        "index": {
          "description": "single feedback step of multiple event dispatch",
          "hierarchy": "Control Monad Trans Crtn Driver",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "multiDispatch",
          "normalized": "(LogServer(SObjBT(DrvOp a)b)(),World a(SObjBT(DrvOp a)b)())-\u003e[EvOrAct a]-\u003eSObjBT(DrvOp a)b(LogServer(SObjBT(DrvOp a)b)(),World a(SObjBT(DrvOp a)b)(),[EvOrAct a])",
          "package": "coroutine-object",
          "partial": "Dispatch",
          "signature": "(LogServer(SObjBT(DrvOp e)m)(),World e(SObjBT(DrvOp e)m)())-\u003e[EvOrAct e]-\u003eSObjBT(DrvOp e)m(LogServer(SObjBT(DrvOp e)m)(),World e(SObjBT(DrvOp e)m)(),[EvOrAct e])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Driver.html#v:multiDispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efull multiple event dispatch with feedback\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "multiDispatchTillEnd",
          "package": "coroutine-object",
          "signature": "(LogServer (SObjBT (DrvOp e) m) (), World e (SObjBT (DrvOp e) m) ()) -\u003e [EvOrAct e] -\u003e SObjBT (DrvOp e) m (LogServer (SObjBT (DrvOp e) m) (), World e (SObjBT (DrvOp e) m) ())",
          "source": "src/Control-Monad-Trans-Crtn-Driver.html#multiDispatchTillEnd",
          "type": "function"
        },
        "index": {
          "description": "full multiple event dispatch with feedback",
          "hierarchy": "Control Monad Trans Crtn Driver",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "multiDispatchTillEnd",
          "normalized": "(LogServer(SObjBT(DrvOp a)b)(),World a(SObjBT(DrvOp a)b)())-\u003e[EvOrAct a]-\u003eSObjBT(DrvOp a)b(LogServer(SObjBT(DrvOp a)b)(),World a(SObjBT(DrvOp a)b)())",
          "package": "coroutine-object",
          "partial": "Dispatch Till End",
          "signature": "(LogServer(SObjBT(DrvOp e)m)(),World e(SObjBT(DrvOp e)m)())-\u003e[EvOrAct e]-\u003eSObjBT(DrvOp e)m(LogServer(SObjBT(DrvOp e)m)(),World e(SObjBT(DrvOp e)m)())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Driver.html#v:multiDispatchTillEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esingle event dispatch \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "singleDispatch",
          "package": "coroutine-object",
          "signature": "Either (ActionOrder e) e -\u003e (LogServer (SObjBT (DrvOp e) m) (), World e (SObjBT (DrvOp e) m) (), [EvOrAct e]) -\u003e SObjBT (DrvOp e) m (LogServer (SObjBT (DrvOp e) m) (), World e (SObjBT (DrvOp e) m) (), [EvOrAct e])",
          "source": "src/Control-Monad-Trans-Crtn-Driver.html#singleDispatch",
          "type": "function"
        },
        "index": {
          "description": "single event dispatch",
          "hierarchy": "Control Monad Trans Crtn Driver",
          "module": "Control.Monad.Trans.Crtn.Driver",
          "name": "singleDispatch",
          "normalized": "Either(ActionOrder a)a-\u003e(LogServer(SObjBT(DrvOp a)b)(),World a(SObjBT(DrvOp a)b)(),[EvOrAct a])-\u003eSObjBT(DrvOp a)b(LogServer(SObjBT(DrvOp a)b)(),World a(SObjBT(DrvOp a)b)(),[EvOrAct a])",
          "package": "coroutine-object",
          "partial": "Dispatch",
          "signature": "Either(ActionOrder e)e-\u003e(LogServer(SObjBT(DrvOp e)m)(),World e(SObjBT(DrvOp e)m)(),[EvOrAct e])-\u003eSObjBT(DrvOp e)m(LogServer(SObjBT(DrvOp e)m)(),World e(SObjBT(DrvOp e)m)(),[EvOrAct e])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Driver.html#v:singleDispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ecoroutine that can be interpreted as an object\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Crtn.Event",
          "name": "Event",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Event.html",
          "type": "module"
        },
        "index": {
          "description": "coroutine that can be interpreted as an object",
          "hierarchy": "Control Monad Trans Crtn Event",
          "module": "Control.Monad.Trans.Crtn.Event",
          "name": "Event",
          "package": "coroutine-object",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaction order \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Event",
          "name": "ActionOrder",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Event.html#ActionOrder",
          "type": "data"
        },
        "index": {
          "description": "action order",
          "hierarchy": "Control Monad Trans Crtn Event",
          "module": "Control.Monad.Trans.Crtn.Event",
          "name": "ActionOrder",
          "package": "coroutine-object",
          "partial": "Action Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Event.html#t:ActionOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eevent or action\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Event",
          "name": "EvOrAct",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Event.html#EvOrAct",
          "type": "type"
        },
        "index": {
          "description": "event or action",
          "hierarchy": "Control Monad Trans Crtn Event",
          "module": "Control.Monad.Trans.Crtn.Event",
          "name": "EvOrAct",
          "package": "coroutine-object",
          "partial": "Ev Or Act",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Event.html#t:EvOrAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Event",
          "name": "ActionOrder",
          "package": "coroutine-object",
          "signature": "ActionOrder ((e -\u003e IO ()) -\u003e IO e)",
          "source": "src/Control-Monad-Trans-Crtn-Event.html#ActionOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Event",
          "module": "Control.Monad.Trans.Crtn.Event",
          "name": "ActionOrder",
          "normalized": "ActionOrder((a-\u003eIO())-\u003eIO a)",
          "package": "coroutine-object",
          "partial": "Action Order",
          "signature": "ActionOrder((e-\u003eIO())-\u003eIO e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Event.html#v:ActionOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon event handling \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Crtn.EventHandler",
          "name": "EventHandler",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-EventHandler.html",
          "type": "module"
        },
        "index": {
          "description": "Common event handling",
          "hierarchy": "Control Monad Trans Crtn EventHandler",
          "module": "Control.Monad.Trans.Crtn.EventHandler",
          "name": "EventHandler",
          "package": "coroutine-object",
          "partial": "Event Handler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-EventHandler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.EventHandler",
          "name": "eventHandler",
          "package": "coroutine-object",
          "signature": "MVar (Maybe (Driver e IO ())) -\u003e e -\u003e IO ()",
          "source": "src/Control-Monad-Trans-Crtn-EventHandler.html#eventHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn EventHandler",
          "module": "Control.Monad.Trans.Crtn.EventHandler",
          "name": "eventHandler",
          "normalized": "MVar(Maybe(Driver a IO()))-\u003ea-\u003eIO()",
          "package": "coroutine-object",
          "partial": "Handler",
          "signature": "MVar(Maybe(Driver e IO()))-\u003ee-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-EventHandler.html#v:eventHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003especial actor for IO action \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Crtn.IOActor",
          "name": "IOActor",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-IOActor.html",
          "type": "module"
        },
        "index": {
          "description": "special actor for IO action",
          "hierarchy": "Control Monad Trans Crtn IOActor",
          "module": "Control.Monad.Trans.Crtn.IOActor",
          "name": "IOActor",
          "package": "coroutine-object",
          "partial": "IOActor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-IOActor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.IOActor",
          "name": "IOActor",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-IOActor.html#IOActor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn IOActor",
          "module": "Control.Monad.Trans.Crtn.IOActor",
          "name": "IOActor",
          "package": "coroutine-object",
          "partial": "IOActor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-IOActor.html#t:IOActor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efirst is \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.IOActor",
          "name": "IOOp",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-IOActor.html#IOOp",
          "type": "data"
        },
        "index": {
          "description": "first is",
          "hierarchy": "Control Monad Trans Crtn IOActor",
          "module": "Control.Monad.Trans.Crtn.IOActor",
          "name": "IOOp",
          "package": "coroutine-object",
          "partial": "IOOp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-IOActor.html#t:IOOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.IOActor",
          "name": "DoIOAction",
          "package": "coroutine-object",
          "signature": "IOOp e ((e -\u003e IO ()) -\u003e IO ()) (Either String ())",
          "source": "src/Control-Monad-Trans-Crtn-IOActor.html#IOOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn IOActor",
          "module": "Control.Monad.Trans.Crtn.IOActor",
          "name": "DoIOAction",
          "normalized": "IOOp a((a-\u003eIO())-\u003eIO())(Either String())",
          "package": "coroutine-object",
          "partial": "Do IOAction",
          "signature": "IOOp e((e-\u003eIO())-\u003eIO())(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-IOActor.html#v:DoIOAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.IOActor",
          "name": "doIOAction",
          "package": "coroutine-object",
          "signature": "((e -\u003e IO ()) -\u003e IO ()) -\u003e CObjT (IOOp e) m (Either String ())",
          "source": "src/Control-Monad-Trans-Crtn-IOActor.html#doIOAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn IOActor",
          "module": "Control.Monad.Trans.Crtn.IOActor",
          "name": "doIOAction",
          "normalized": "((a-\u003eIO())-\u003eIO())-\u003eCObjT(IOOp a)b(Either String())",
          "package": "coroutine-object",
          "partial": "IOAction",
          "signature": "((e-\u003eIO())-\u003eIO())-\u003eCObjT(IOOp e)m(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-IOActor.html#v:doIOAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.IOActor",
          "name": "ioactorgen",
          "package": "coroutine-object",
          "signature": "(e -\u003e IO ()) -\u003e SObjT (IOOp e) m ()",
          "source": "src/Control-Monad-Trans-Crtn-IOActor.html#ioactorgen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn IOActor",
          "module": "Control.Monad.Trans.Crtn.IOActor",
          "name": "ioactorgen",
          "normalized": "(a-\u003eIO())-\u003eSObjT(IOOp a)b()",
          "package": "coroutine-object",
          "signature": "(e-\u003eIO())-\u003eSObjT(IOOp e)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-IOActor.html#v:ioactorgen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Logger.Simple",
          "name": "Simple",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Logger-Simple.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Logger Simple",
          "module": "Control.Monad.Trans.Crtn.Logger.Simple",
          "name": "Simple",
          "package": "coroutine-object",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Logger-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Logger.Simple",
          "name": "loggerW",
          "package": "coroutine-object",
          "signature": "Int -\u003e LogServer m ()",
          "source": "src/Control-Monad-Trans-Crtn-Logger-Simple.html#loggerW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Logger Simple",
          "module": "Control.Monad.Trans.Crtn.Logger.Simple",
          "name": "loggerW",
          "normalized": "Int-\u003eLogServer a()",
          "package": "coroutine-object",
          "signature": "Int-\u003eLogServer m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Logger-Simple.html#v:loggerW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Logger.Simple",
          "name": "simplelogger",
          "package": "coroutine-object",
          "signature": "LogServer m ()",
          "source": "src/Control-Monad-Trans-Crtn-Logger-Simple.html#simplelogger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Logger Simple",
          "module": "Control.Monad.Trans.Crtn.Logger.Simple",
          "name": "simplelogger",
          "normalized": "LogServer a()",
          "package": "coroutine-object",
          "signature": "LogServer m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Logger-Simple.html#v:simplelogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003edescribe logger\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "Logger",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Logger.html",
          "type": "module"
        },
        "index": {
          "description": "describe logger",
          "hierarchy": "Control Monad Trans Crtn Logger",
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "Logger",
          "package": "coroutine-object",
          "partial": "Logger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Logger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "LogClient",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Logger.html#LogClient",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Logger",
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "LogClient",
          "package": "coroutine-object",
          "partial": "Log Client",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Logger.html#t:LogClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "LogInput",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Logger.html#LogInput",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Logger",
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "LogInput",
          "package": "coroutine-object",
          "partial": "Log Input",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Logger.html#t:LogInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "LogOp",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Logger.html#LogOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Logger",
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "LogOp",
          "package": "coroutine-object",
          "partial": "Log Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Logger.html#t:LogOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "LogServer",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Logger.html#LogServer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Logger",
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "LogServer",
          "package": "coroutine-object",
          "partial": "Log Server",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Logger.html#t:LogServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "MonadLog",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Logger.html#MonadLog",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Logger",
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "MonadLog",
          "package": "coroutine-object",
          "partial": "Monad Log",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Logger.html#t:MonadLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "WriteLog",
          "package": "coroutine-object",
          "signature": "LogOp String ()",
          "source": "src/Control-Monad-Trans-Crtn-Logger.html#LogOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Logger",
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "WriteLog",
          "normalized": "LogOp String()",
          "package": "coroutine-object",
          "partial": "Write Log",
          "signature": "LogOp String()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Logger.html#v:WriteLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "scribe",
          "package": "coroutine-object",
          "signature": "String -\u003e m ()",
          "source": "src/Control-Monad-Trans-Crtn-Logger.html#scribe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Logger",
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "scribe",
          "normalized": "String-\u003ea()",
          "package": "coroutine-object",
          "signature": "String-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Logger.html#v:scribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "writeLog",
          "package": "coroutine-object",
          "signature": "String -\u003e LogClient m ()",
          "source": "src/Control-Monad-Trans-Crtn-Logger.html#writeLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Logger",
          "module": "Control.Monad.Trans.Crtn.Logger",
          "name": "writeLog",
          "normalized": "String-\u003eLogClient a()",
          "package": "coroutine-object",
          "partial": "Log",
          "signature": "String-\u003eLogClient m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Logger.html#v:writeLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ecoroutine that can be interpreted as an object\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "Object",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Object.html",
          "type": "module"
        },
        "index": {
          "description": "coroutine that can be interpreted as an object",
          "hierarchy": "Control Monad Trans Crtn Object",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "Object",
          "package": "coroutine-object",
          "partial": "Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Object.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einput of method of an object with signature s \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "Arg",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Object.html#Arg",
          "type": "data"
        },
        "index": {
          "description": "input of method of an object with signature",
          "hierarchy": "Control Monad Trans Crtn Object",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "Arg",
          "package": "coroutine-object",
          "partial": "Arg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Object.html#t:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient object\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "CObjT",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Object.html#CObjT",
          "type": "type"
        },
        "index": {
          "description": "Client object",
          "hierarchy": "Control Monad Trans Crtn Object",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "CObjT",
          "package": "coroutine-object",
          "partial": "CObj",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Object.html#t:CObjT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvenient error state monad for object  \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "EStT",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Object.html#EStT",
          "type": "type"
        },
        "index": {
          "description": "convenient error state monad for object",
          "hierarchy": "Control Monad Trans Crtn Object",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "EStT",
          "package": "coroutine-object",
          "partial": "ESt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Object.html#t:EStT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput of methdo of an object with signature s \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "Res",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Object.html#Res",
          "type": "data"
        },
        "index": {
          "description": "output of methdo of an object with signature",
          "hierarchy": "Control Monad Trans Crtn Object",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "Res",
          "package": "coroutine-object",
          "partial": "Res",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Object.html#t:Res"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer object base coroutine\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "SObjBT",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Object.html#SObjBT",
          "type": "type"
        },
        "index": {
          "description": "Server object base coroutine",
          "hierarchy": "Control Monad Trans Crtn Object",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "SObjBT",
          "package": "coroutine-object",
          "partial": "SObj BT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Object.html#t:SObjBT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer object\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "SObjT",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Object.html#SObjT",
          "type": "type"
        },
        "index": {
          "description": "Server object",
          "hierarchy": "Control Monad Trans Crtn Object",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "SObjT",
          "package": "coroutine-object",
          "partial": "SObj",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Object.html#t:SObjT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "Arg",
          "package": "coroutine-object",
          "signature": "forall i o . Arg (s i o) i",
          "source": "src/Control-Monad-Trans-Crtn-Object.html#Arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Object",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "Arg",
          "package": "coroutine-object",
          "partial": "Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Object.html#v:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "Ign",
          "package": "coroutine-object",
          "signature": "Ign",
          "source": "src/Control-Monad-Trans-Crtn-Object.html#Res",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Object",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "Ign",
          "package": "coroutine-object",
          "partial": "Ign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Object.html#v:Ign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "Res",
          "package": "coroutine-object",
          "signature": "forall i o . Res (s i o) o",
          "source": "src/Control-Monad-Trans-Crtn-Object.html#Res",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Object",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "Res",
          "package": "coroutine-object",
          "partial": "Res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Object.html#v:Res"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "query",
          "package": "coroutine-object",
          "signature": "CObjT s m r -\u003e EStT (SObjT s m ()) m r",
          "source": "src/Control-Monad-Trans-Crtn-Object.html#query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Object",
          "module": "Control.Monad.Trans.Crtn.Object",
          "name": "query",
          "normalized": "CObjT a b c-\u003eEStT(SObjT a b())b c",
          "package": "coroutine-object",
          "signature": "CObjT s m r-\u003eEStT(SObjT s m())m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Object.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "Queue",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Queue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Queue",
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "Queue",
          "package": "coroutine-object",
          "partial": "Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Queue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "Queue",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-Queue.html#Queue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Queue",
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "Queue",
          "package": "coroutine-object",
          "partial": "Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Queue.html#t:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "Queue",
          "package": "coroutine-object",
          "signature": "Queue",
          "source": "src/Control-Monad-Trans-Crtn-Queue.html#Queue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Queue",
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "Queue",
          "package": "coroutine-object",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Queue.html#v:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "bqueue",
          "package": "coroutine-object",
          "signature": "[a]",
          "source": "src/Control-Monad-Trans-Crtn-Queue.html#Queue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Queue",
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "bqueue",
          "normalized": "[a]",
          "package": "coroutine-object",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Queue.html#v:bqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "dequeue",
          "package": "coroutine-object",
          "signature": "Queue a -\u003e (Queue a, Maybe a)",
          "source": "src/Control-Monad-Trans-Crtn-Queue.html#dequeue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Queue",
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "dequeue",
          "normalized": "Queue a-\u003e(Queue a,Maybe a)",
          "package": "coroutine-object",
          "signature": "Queue a-\u003e(Queue a,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Queue.html#v:dequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "emptyQueue",
          "package": "coroutine-object",
          "signature": "Queue a",
          "source": "src/Control-Monad-Trans-Crtn-Queue.html#emptyQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Queue",
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "emptyQueue",
          "package": "coroutine-object",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Queue.html#v:emptyQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "enqueue",
          "package": "coroutine-object",
          "signature": "a -\u003e Queue a -\u003e Queue a",
          "source": "src/Control-Monad-Trans-Crtn-Queue.html#enqueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Queue",
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "enqueue",
          "normalized": "a-\u003eQueue a-\u003eQueue a",
          "package": "coroutine-object",
          "signature": "a-\u003eQueue a-\u003eQueue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Queue.html#v:enqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "fqueue",
          "package": "coroutine-object",
          "signature": "[a]",
          "source": "src/Control-Monad-Trans-Crtn-Queue.html#Queue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn Queue",
          "module": "Control.Monad.Trans.Crtn.Queue",
          "name": "fqueue",
          "normalized": "[a]",
          "package": "coroutine-object",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-Queue.html#v:fqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003edescribe world object\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "World",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-World.html",
          "type": "module"
        },
        "index": {
          "description": "describe world object",
          "hierarchy": "Control Monad Trans Crtn World",
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "World",
          "package": "coroutine-object",
          "partial": "World",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-World.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "World",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-World.html#World",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn World",
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "World",
          "package": "coroutine-object",
          "partial": "World",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-World.html#t:World"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "WorldOp",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn-World.html#WorldOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn World",
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "WorldOp",
          "package": "coroutine-object",
          "partial": "World Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-World.html#t:WorldOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "FlushLog",
          "package": "coroutine-object",
          "signature": "WorldOp e m (LogServer m ()) (LogServer m ())",
          "source": "src/Control-Monad-Trans-Crtn-World.html#WorldOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn World",
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "FlushLog",
          "normalized": "WorldOp a b(LogServer b())(LogServer b())",
          "package": "coroutine-object",
          "partial": "Flush Log",
          "signature": "WorldOp e m(LogServer m())(LogServer m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-World.html#v:FlushLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "FlushQueue",
          "package": "coroutine-object",
          "signature": "WorldOp e m () [Either (ActionOrder e) e]",
          "source": "src/Control-Monad-Trans-Crtn-World.html#WorldOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn World",
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "FlushQueue",
          "normalized": "WorldOp a b()[Either(ActionOrder a)a]",
          "package": "coroutine-object",
          "partial": "Flush Queue",
          "signature": "WorldOp e m()[Either(ActionOrder e)e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-World.html#v:FlushQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "GiveEvent",
          "package": "coroutine-object",
          "signature": "WorldOp e m e ()",
          "source": "src/Control-Monad-Trans-Crtn-World.html#WorldOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn World",
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "GiveEvent",
          "normalized": "WorldOp a b a()",
          "package": "coroutine-object",
          "partial": "Give Event",
          "signature": "WorldOp e m e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-World.html#v:GiveEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "flushLog",
          "package": "coroutine-object",
          "signature": "LogServer m () -\u003e CObjT (WorldOp e m) m (LogServer m ())",
          "source": "src/Control-Monad-Trans-Crtn-World.html#flushLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn World",
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "flushLog",
          "normalized": "LogServer a()-\u003eCObjT(WorldOp b a)a(LogServer a())",
          "package": "coroutine-object",
          "partial": "Log",
          "signature": "LogServer m()-\u003eCObjT(WorldOp e m)m(LogServer m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-World.html#v:flushLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "flushQueue",
          "package": "coroutine-object",
          "signature": "CObjT (WorldOp e m) m [Either (ActionOrder e) e]",
          "source": "src/Control-Monad-Trans-Crtn-World.html#flushQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn World",
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "flushQueue",
          "normalized": "CObjT(WorldOp a b)b[Either(ActionOrder a)a]",
          "package": "coroutine-object",
          "partial": "Queue",
          "signature": "CObjT(WorldOp e m)m[Either(ActionOrder e)e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-World.html#v:flushQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "giveEvent",
          "package": "coroutine-object",
          "signature": "e -\u003e CObjT (WorldOp e m) m ()",
          "source": "src/Control-Monad-Trans-Crtn-World.html#giveEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn World",
          "module": "Control.Monad.Trans.Crtn.World",
          "name": "giveEvent",
          "normalized": "a-\u003eCObjT(WorldOp a b)b()",
          "package": "coroutine-object",
          "partial": "Event",
          "signature": "e-\u003eCObjT(WorldOp e m)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn-World.html#v:giveEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003edefinition of coroutine\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "Crtn",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn.html",
          "type": "module"
        },
        "index": {
          "description": "definition of coroutine",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "Crtn",
          "package": "coroutine-object",
          "partial": "Crtn",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eawait command functor for consumer coroutine\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "Awt",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn.html#Awt",
          "type": "newtype"
        },
        "index": {
          "description": "await command functor for consumer coroutine",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "Awt",
          "package": "coroutine-object",
          "partial": "Awt",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#t:Awt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoroutine type is regarded as a Client type \n   which can be paired with Server type with opposite request \n   and answer type.  \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "CliT",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn.html#CliT",
          "type": "type"
        },
        "index": {
          "description": "Coroutine type is regarded as Client type which can be paired with Server type with opposite request and answer type",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "CliT",
          "package": "coroutine-object",
          "partial": "Cli",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#t:CliT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsumer type is a single-sided coroutine which only gets an input \n   without producing output. \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "CnsmT",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn.html#CnsmT",
          "type": "type"
        },
        "index": {
          "description": "Consumer type is single-sided coroutine which only gets an input without producing output",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "CnsmT",
          "package": "coroutine-object",
          "partial": "Cnsm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#t:CnsmT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype for coroutine status after execution\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "CrtnErr",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn.html#CrtnErr",
          "type": "data"
        },
        "index": {
          "description": "type for coroutine status after execution",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "CrtnErr",
          "package": "coroutine-object",
          "partial": "Crtn Err",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#t:CrtnErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral symmetric bidirectional coroutine\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "CrtnT",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn.html#CrtnT",
          "type": "type"
        },
        "index": {
          "description": "general symmetric bidirectional coroutine",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "CrtnT",
          "package": "coroutine-object",
          "partial": "Crtn",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#t:CrtnT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerator type is single-sided coroutine which only gives an output \n   without getting any request. \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "GenT",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn.html#GenT",
          "type": "type"
        },
        "index": {
          "description": "Generator type is single-sided coroutine which only gives an output without getting any request",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "GenT",
          "package": "coroutine-object",
          "partial": "Gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#t:GenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecommand functor of general bidirectional coroutine\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "Rqst",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn.html#Rqst",
          "type": "data"
        },
        "index": {
          "description": "command functor of general bidirectional coroutine",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "Rqst",
          "package": "coroutine-object",
          "partial": "Rqst",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#t:Rqst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer type \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "SrvT",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn.html#SrvT",
          "type": "type"
        },
        "index": {
          "description": "Server type",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "SrvT",
          "package": "coroutine-object",
          "partial": "Srv",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#t:SrvT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eyield command functor\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "Yld",
          "package": "coroutine-object",
          "source": "src/Control-Monad-Trans-Crtn.html#Yld",
          "type": "data"
        },
        "index": {
          "description": "yield command functor",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "Yld",
          "package": "coroutine-object",
          "partial": "Yld",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#t:Yld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econnecting server and client in error monad\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "(\u003c==|)",
          "package": "coroutine-object",
          "signature": "SrvT req ans m r'-\u003e CliT req ans m r-\u003e m (Either CrtnErr (SrvT req ans m r', r))",
          "type": "function"
        },
        "index": {
          "description": "connecting server and client in error monad",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "(\u003c==|) \u003c==|",
          "normalized": "SrvT a b c d-\u003eCliT a b c e-\u003ec(Either CrtnErr(SrvT a b c d,e))",
          "package": "coroutine-object",
          "signature": "SrvT req ans m r'-\u003eCliT req ans m r-\u003em(Either CrtnErr(SrvT req ans m r',r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#v:-60--61--61--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn",
          "name": "Awt",
          "package": "coroutine-object",
          "signature": "Awt (a -\u003e x)",
          "source": "src/Control-Monad-Trans-Crtn.html#Awt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "Awt",
          "normalized": "Awt(a-\u003eb)",
          "package": "coroutine-object",
          "partial": "Awt",
          "signature": "Awt(a-\u003ex)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#v:Awt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn",
          "name": "Other",
          "package": "coroutine-object",
          "signature": "Other String",
          "source": "src/Control-Monad-Trans-Crtn.html#CrtnErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "Other",
          "package": "coroutine-object",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#v:Other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn",
          "name": "Rqst",
          "package": "coroutine-object",
          "signature": "Rqst req (ans -\u003e x)",
          "source": "src/Control-Monad-Trans-Crtn.html#Rqst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "Rqst",
          "normalized": "Rqst a(b-\u003ec)",
          "package": "coroutine-object",
          "partial": "Rqst",
          "signature": "Rqst req(ans-\u003ex)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#v:Rqst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn",
          "name": "ServerFinished",
          "package": "coroutine-object",
          "signature": "ServerFinished",
          "source": "src/Control-Monad-Trans-Crtn.html#CrtnErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "ServerFinished",
          "package": "coroutine-object",
          "partial": "Server Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#v:ServerFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Crtn",
          "name": "Yld",
          "package": "coroutine-object",
          "signature": "Yld o x",
          "source": "src/Control-Monad-Trans-Crtn.html#Yld",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "Yld",
          "package": "coroutine-object",
          "partial": "Yld",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#v:Yld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprimitive coroutine action awaiting an input\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "await",
          "package": "coroutine-object",
          "signature": "CnsmT a m a",
          "source": "src/Control-Monad-Trans-Crtn.html#await",
          "type": "function"
        },
        "index": {
          "description": "primitive coroutine action awaiting an input",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "await",
          "package": "coroutine-object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#v:await"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecombine state and free monad with base state monad transformer \n   with a base monad m to free monad with the base monad m\n   Think this as fusing down the state monad  \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "mapStateDown",
          "package": "coroutine-object",
          "signature": "s -\u003e FreeT f (StateT s m) a -\u003e FreeT f m a",
          "source": "src/Control-Monad-Trans-Crtn.html#mapStateDown",
          "type": "function"
        },
        "index": {
          "description": "combine state and free monad with base state monad transformer with base monad to free monad with the base monad Think this as fusing down the state monad",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "mapStateDown",
          "normalized": "a-\u003eFreeT b(StateT a c)d-\u003eFreeT b c d",
          "package": "coroutine-object",
          "partial": "State Down",
          "signature": "s-\u003eFreeT f(StateT s m)a-\u003eFreeT f m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#v:mapStateDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprimitive request coroutine  \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "request",
          "package": "coroutine-object",
          "signature": "req -\u003e CrtnT req ans m ans",
          "source": "src/Control-Monad-Trans-Crtn.html#request",
          "type": "function"
        },
        "index": {
          "description": "primitive request coroutine",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "request",
          "normalized": "a-\u003eCrtnT a b c b",
          "package": "coroutine-object",
          "signature": "req-\u003eCrtnT req ans m ans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprimitive coroutine action yielding an output\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Crtn",
          "name": "yield",
          "package": "coroutine-object",
          "signature": "o -\u003e GenT o m ()",
          "source": "src/Control-Monad-Trans-Crtn.html#yield",
          "type": "function"
        },
        "index": {
          "description": "primitive coroutine action yielding an output",
          "hierarchy": "Control Monad Trans Crtn",
          "module": "Control.Monad.Trans.Crtn",
          "name": "yield",
          "normalized": "a-\u003eGenT a b()",
          "package": "coroutine-object",
          "signature": "o-\u003eGenT o m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coroutine-object/docs/Control-Monad-Trans-Crtn.html#v:yield"
      }
    }
  ]
]