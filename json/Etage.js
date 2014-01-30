[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Delay.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which delays received \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es before sending them further. In this way network can have a simple\nkind of memory (state) without a need of special \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es. You \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003e it in \u003ccode\u003e\u003ca\u003eIncubation\u003c/a\u003e\u003c/code\u003e by using something like:\n\u003c/p\u003e\u003cpre\u003e nerveDelay \u003c- (growNeuron :: NerveBoth (DelayNeuron IInteger)) (\\o -\u003e o { delay = 2 })\n\u003c/pre\u003e\u003cp\u003eSometimes the same effect can be achieved by using a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e as a queue and using \u003ccode\u003e\u003ca\u003efuseWith\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003efuse\u003c/a\u003e\u003c/code\u003e) to synchronize (and thus\ndelay) \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es. For example, the following two programs both output Fibonacci sequence:\n\u003c/p\u003e\u003cpre\u003e incubate $ do\n   nerveDump \u003c- (growNeuron :: NerveOnlyFor DumpNeuron) (\\o -\u003e o { showInsteadOfDump = True })\n   nerveDelay \u003c- (growNeuron :: NerveBoth (DelayNeuron IInteger)) defaultOptions\n   nerveSum \u003c- (growNeuron :: NerveBoth (FunctionNeuron IIntegerList IInteger)) (\\o -\u003e o { function = \\t -\u003e (: []) . IValue t . sum . list })\n   nerveFused \u003c- [TranslatableFrom nerveDelay, TranslatableFrom nerveSum] `fuseWith` (listFuser :: ImpulseTime -\u003e [IInteger] -\u003e [IIntegerList])\n   \n   nerveSum `attachTo` [TranslatableFor nerveDelay, TranslatableFor nerveDump]\n   nerveFused `attachTo` [TranslatableFor nerveSum]\n   \n   liftIO $ do\n     t \u003c- getCurrentImpulseTime\n     sendFromNeuron nerveSum $ IValue t 1\n     sendFromNeuron nerveDelay $ IValue t 0\n\u003c/pre\u003e\u003cpre\u003e incubate $ do\n   nerveDump \u003c- (growNeuron :: NerveOnlyFor DumpNeuron) (\\o -\u003e o { showInsteadOfDump = True })\n   nerveSum \u003c- (growNeuron :: NerveBoth (FunctionNeuron IIntegerList IInteger)) (\\o -\u003e o { function = \\t -\u003e (: []) . IValue t . sum . list })\n   \n   liftIO $ do\n     t \u003c- getCurrentImpulseTime\n     sendFromNeuron nerveSum $ IValue t 0\n   \n   nerveSum' \u003c- liftIO $ branchNerveFrom nerveSum\n   nerveFused \u003c- [TranslatableFrom nerveSum, TranslatableFrom nerveSum'] `fuseWith` (listFuser :: ImpulseTime -\u003e [IInteger] -\u003e [IIntegerList])\n   \n   nerveSum `attachTo` [TranslatableFor nerveDump]\n   nerveFused `attachTo` [TranslatableFor nerveSum]\n   \n   liftIO $ do\n     t \u003c- getCurrentImpulseTime\n     sendFromNeuron nerveSum $ IValue t 1\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e processes all \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es it receives.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Etage.Delay",
        "fct-package": "Etage",
        "fct-signature": "module",
        "fct-source": "src/Control-Etage-Delay.html",
        "fct-type": "module",
        "title": "Delay"
      },
      "index": {
        "description": "This module defines Neuron which delays received Impulse before sending them further In this way network can have simple kind of memory state without need of special Neuron You grow it in Incubation by using something like nerveDelay growNeuron NerveBoth DelayNeuron IInteger delay Sometimes the same effect can be achieved by using Nerve as queue and using fuseWith or fuse to synchronize and thus delay Impulse For example the following two programs both output Fibonacci sequence incubate do nerveDump growNeuron NerveOnlyFor DumpNeuron showInsteadOfDump True nerveDelay growNeuron NerveBoth DelayNeuron IInteger defaultOptions nerveSum growNeuron NerveBoth FunctionNeuron IIntegerList IInteger function IValue sum list nerveFused TranslatableFrom nerveDelay TranslatableFrom nerveSum fuseWith listFuser ImpulseTime IInteger IIntegerList nerveSum attachTo TranslatableFor nerveDelay TranslatableFor nerveDump nerveFused attachTo TranslatableFor nerveSum liftIO do getCurrentImpulseTime sendFromNeuron nerveSum IValue sendFromNeuron nerveDelay IValue incubate do nerveDump growNeuron NerveOnlyFor DumpNeuron showInsteadOfDump True nerveSum growNeuron NerveBoth FunctionNeuron IIntegerList IInteger function IValue sum list liftIO do getCurrentImpulseTime sendFromNeuron nerveSum IValue nerveSum liftIO branchNerveFrom nerveSum nerveFused TranslatableFrom nerveSum TranslatableFrom nerveSum fuseWith listFuser ImpulseTime IInteger IIntegerList nerveSum attachTo TranslatableFor nerveDump nerveFused attachTo TranslatableFor nerveSum liftIO do getCurrentImpulseTime sendFromNeuron nerveSum IValue This Neuron processes all Impulse it receives",
        "hierarchy": "Control Etage Delay",
        "module": "Control.Etage.Delay",
        "name": "Delay",
        "normalized": "",
        "package": "Etage",
        "partial": "Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Delay.html#t:DelayForImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es for \u003ccode\u003e\u003ca\u003eDelayNeuron\u003c/a\u003e\u003c/code\u003e, of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Delay",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Delay.html#DelayForImpulse",
        "fct-type": "type",
        "title": "DelayForImpulse"
      },
      "index": {
        "description": "Impulse for DelayNeuron of type",
        "hierarchy": "Control Etage Delay",
        "module": "Control.Etage.Delay",
        "name": "DelayForImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Delay For Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Delay.html#t:DelayFromImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003e\u003ca\u003eDelayNeuron\u003c/a\u003e\u003c/code\u003e, of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Delay",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Delay.html#DelayFromImpulse",
        "fct-type": "type",
        "title": "DelayFromImpulse"
      },
      "index": {
        "description": "Impulse from DelayNeuron of type",
        "hierarchy": "Control Etage Delay",
        "module": "Control.Etage.Delay",
        "name": "DelayFromImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Delay From Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Delay.html#t:DelayNeuron",
      "description": {
        "fct-module": "Control.Etage.Delay",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Delay.html#DelayNeuron",
        "fct-type": "data",
        "title": "DelayNeuron"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage Delay",
        "module": "Control.Etage.Delay",
        "name": "DelayNeuron",
        "normalized": "",
        "package": "Etage",
        "partial": "Delay Neuron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Delay.html#t:DelayOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for \u003ccode\u003e\u003ca\u003eDelayNeuron\u003c/a\u003e\u003c/code\u003e. This option is defined:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003edelay :: \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e For how many \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es should received \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es be delayed before sending them. Default value is 1.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Control.Etage.Delay",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Delay.html#DelayOptions",
        "fct-type": "type",
        "title": "DelayOptions"
      },
      "index": {
        "description": "Options for DelayNeuron This option is defined delay Int For how many Impulse should received Impulse be delayed before sending them Default value is",
        "hierarchy": "Control Etage Delay",
        "module": "Control.Etage.Delay",
        "name": "DelayOptions",
        "normalized": "",
        "package": "Etage",
        "partial": "Delay Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Dump.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which dumps all \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es it receives. You \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003e it in \u003ccode\u003e\u003ca\u003eIncubation\u003c/a\u003e\u003c/code\u003e by using something like:\n\u003c/p\u003e\u003cpre\u003e nerveDump \u003c- (growNeuron :: NerveOnlyFor DumpNeuron) (\\o -\u003e o { showInsteadOfDump = True })\n\u003c/pre\u003e\u003cp\u003eIt is an example of a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which can recieve any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e type. It processes all \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es it receives.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Etage.Dump",
        "fct-package": "Etage",
        "fct-signature": "module",
        "fct-source": "src/Control-Etage-Dump.html",
        "fct-type": "module",
        "title": "Dump"
      },
      "index": {
        "description": "This module defines Neuron which dumps all Impulse it receives You grow it in Incubation by using something like nerveDump growNeuron NerveOnlyFor DumpNeuron showInsteadOfDump True It is an example of Neuron which can recieve any Impulse type It processes all Impulse it receives",
        "hierarchy": "Control Etage Dump",
        "module": "Control.Etage.Dump",
        "name": "Dump",
        "normalized": "",
        "package": "Etage",
        "partial": "Dump",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Dump.html#t:DumpForImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es for \u003ccode\u003e\u003ca\u003eDumpNeuron\u003c/a\u003e\u003c/code\u003e. This \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e can recieve any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e type, \u003ccode\u003e\u003ca\u003eAnyImpulse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Dump",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Dump.html#DumpForImpulse",
        "fct-type": "type",
        "title": "DumpForImpulse"
      },
      "index": {
        "description": "Impulse for DumpNeuron This Neuron can recieve any Impulse type AnyImpulse",
        "hierarchy": "Control Etage Dump",
        "module": "Control.Etage.Dump",
        "name": "DumpForImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Dump For Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Dump.html#t:DumpFromImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003e\u003ca\u003eDumpNeuron\u003c/a\u003e\u003c/code\u003e. This \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e does not define any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es it would send, \u003ccode\u003e\u003ca\u003eNoImpulse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Dump",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Dump.html#DumpFromImpulse",
        "fct-type": "type",
        "title": "DumpFromImpulse"
      },
      "index": {
        "description": "Impulse from DumpNeuron This Neuron does not define any Impulse it would send NoImpulse",
        "hierarchy": "Control Etage Dump",
        "module": "Control.Etage.Dump",
        "name": "DumpFromImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Dump From Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Dump.html#t:DumpNeuron",
      "description": {
        "fct-module": "Control.Etage.Dump",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Dump.html#DumpNeuron",
        "fct-type": "data",
        "title": "DumpNeuron"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage Dump",
        "module": "Control.Etage.Dump",
        "name": "DumpNeuron",
        "normalized": "",
        "package": "Etage",
        "partial": "Dump Neuron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Dump.html#t:DumpOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for \u003ccode\u003e\u003ca\u003eDumpNeuron\u003c/a\u003e\u003c/code\u003e. Those options are defined:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ehandle :: \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e to which it dumps. Default is \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eshowInsteadOfDump :: \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Should it use \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e when dumping \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es? By default it dumps \u003ccode\u003e\u003ca\u003eimpulseTime\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003eimpulseValue\u003c/a\u003e\u003c/code\u003e values.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eprefix :: \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Prefix to use when dumping. Default is no prefix.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Control.Etage.Dump",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Dump.html#DumpOptions",
        "fct-type": "type",
        "title": "DumpOptions"
      },
      "index": {
        "description": "Options for DumpNeuron Those options are defined handle Handle Handle to which it dumps Default is stdout showInsteadOfDump Bool Should it use show when dumping Impulse By default it dumps impulseTime and impulseValue values prefix String Prefix to use when dumping Default is no prefix",
        "hierarchy": "Control Etage Dump",
        "module": "Control.Etage.Dump",
        "name": "DumpOptions",
        "normalized": "",
        "package": "Etage",
        "partial": "Dump Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Fail.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a simple \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which just fails (throws a \u003ccode\u003e\u003ca\u003eDissolvingException\u003c/a\u003e\u003c/code\u003e) in \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003eing phase. It can be used to test\nerror recovery and cleanup in \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003eing phase or early stages of \u003ccode\u003e\u003ca\u003elive\u003c/a\u003e\u003c/code\u003eing phase in other \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es by using something like:\n\u003c/p\u003e\u003cpre\u003e _ \u003c- (growNeuron :: NerveNone FailNeuron) (\\o -\u003e o { delay = 10000000 })\n\u003c/pre\u003e\u003cp\u003esomewhere among (or after) \u003ccode\u003e\u003ca\u003egrowNeuron\u003c/a\u003e\u003c/code\u003e calls for other \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es in \u003ccode\u003e\u003ca\u003eIncubation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e does not process any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Etage.Fail",
        "fct-package": "Etage",
        "fct-signature": "module",
        "fct-source": "src/Control-Etage-Fail.html",
        "fct-type": "module",
        "title": "Fail"
      },
      "index": {
        "description": "This module defines simple Neuron which just fails throws DissolvingException in grow ing phase It can be used to test error recovery and cleanup in grow ing phase or early stages of live ing phase in other Neuron by using something like growNeuron NerveNone FailNeuron delay somewhere among or after growNeuron calls for other Neuron in Incubation This Neuron does not process any Impulse",
        "hierarchy": "Control Etage Fail",
        "module": "Control.Etage.Fail",
        "name": "Fail",
        "normalized": "",
        "package": "Etage",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Fail.html#t:FailForImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es for \u003ccode\u003e\u003ca\u003eFailNeuron\u003c/a\u003e\u003c/code\u003e. This \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e does not define any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es it would receive, \u003ccode\u003e\u003ca\u003eNoImpulse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Fail",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Fail.html#FailForImpulse",
        "fct-type": "type",
        "title": "FailForImpulse"
      },
      "index": {
        "description": "Impulse for FailNeuron This Neuron does not define any Impulse it would receive NoImpulse",
        "hierarchy": "Control Etage Fail",
        "module": "Control.Etage.Fail",
        "name": "FailForImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Fail For Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Fail.html#t:FailFromImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003e\u003ca\u003eFailNeuron\u003c/a\u003e\u003c/code\u003e. This \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e does not define any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es it would send, \u003ccode\u003e\u003ca\u003eNoImpulse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Fail",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Fail.html#FailFromImpulse",
        "fct-type": "type",
        "title": "FailFromImpulse"
      },
      "index": {
        "description": "Impulse from FailNeuron This Neuron does not define any Impulse it would send NoImpulse",
        "hierarchy": "Control Etage Fail",
        "module": "Control.Etage.Fail",
        "name": "FailFromImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Fail From Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Fail.html#t:FailNeuron",
      "description": {
        "fct-module": "Control.Etage.Fail",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Fail.html#FailNeuron",
        "fct-type": "data",
        "title": "FailNeuron"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage Fail",
        "module": "Control.Etage.Fail",
        "name": "FailNeuron",
        "normalized": "",
        "package": "Etage",
        "partial": "Fail Neuron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Fail.html#t:FailOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for \u003ccode\u003e\u003ca\u003eFailNeuron\u003c/a\u003e\u003c/code\u003e. This option is defined:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003edelay :: \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The delay in microseconds before \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e fails. Default is no delay.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Control.Etage.Fail",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Fail.html#FailOptions",
        "fct-type": "type",
        "title": "FailOptions"
      },
      "index": {
        "description": "Options for FailNeuron This option is defined delay Int The delay in microseconds before Neuron fails Default is no delay",
        "hierarchy": "Control Etage Fail",
        "module": "Control.Etage.Fail",
        "name": "FailOptions",
        "normalized": "",
        "package": "Etage",
        "partial": "Fail Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Function.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which applies a given function to received \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es. As Haskell is a lazy language this does\nnot mean that the result will be immediately (fully) evaluated but that it will be evaluated when (and if) the result will be\nneeded (probably in some other \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e). You \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003e it in \u003ccode\u003e\u003ca\u003eIncubation\u003c/a\u003e\u003c/code\u003e by using something like:\n\u003c/p\u003e\u003cpre\u003e nerveFunction \u003c- (growNeuron :: NerveBoth (FunctionNeuron AnyImpulse IRational)) (\\o -\u003e o { function = \\t -\u003e (: []) . IValue t . sum . impulseValue })\n\u003c/pre\u003e\u003cp\u003eThis example can receive any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e type (\u003ccode\u003e\u003ca\u003eAnyImpulse\u003c/a\u003e\u003c/code\u003e) and returns \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e of its data payload (as given by \u003ccode\u003e\u003ca\u003eimpulseValue\u003c/a\u003e\u003c/code\u003e)\nas \u003ccode\u003e\u003ca\u003eIRational\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eThe following example calculates the greatest common divisor (\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e incubate $ do\n   let gcd t IList { list = (a:b:is) } = let r = a `mod` b in if r == 0 then [IList t (b:is)] else [IList t (b:r:is)]\n       gcd _ _ = []\n   \n   nerveDump \u003c- (growNeuron :: NerveOnlyFor DumpNeuron) (\\o -\u003e o { showInsteadOfDump = True })\n   nerveSum \u003c- (growNeuron :: NerveBoth (FunctionNeuron IIntegerList IIntegerList)) (\\o -\u003e o { function = gcd })\n   \n   nerveSum `attachTo` [TranslatableFor nerveSum, TranslatableFor nerveDump]\n   \n   liftIO $ do\n     t \u003c- getCurrentImpulseTime\n     sendForNeuron nerveSum $ IList t [110, 80, 5]\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e is an example of a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e with both receiving and sending \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es types parametrized. It processes only the newest \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es it receives, when\nthey get queued, so \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es are dropped if load is too high.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Etage.Function",
        "fct-package": "Etage",
        "fct-signature": "module",
        "fct-source": "src/Control-Etage-Function.html",
        "fct-type": "module",
        "title": "Function"
      },
      "index": {
        "description": "This module defines Neuron which applies given function to received Impulse As Haskell is lazy language this does not mean that the result will be immediately fully evaluated but that it will be evaluated when and if the result will be needed probably in some other Neuron You grow it in Incubation by using something like nerveFunction growNeuron NerveBoth FunctionNeuron AnyImpulse IRational function IValue sum impulseValue This example can receive any Impulse type AnyImpulse and returns sum of its data payload as given by impulseValue as IRational type The following example calculates the greatest common divisor gcd incubate do let gcd IList list is let mod in if then IList is else IList is gcd nerveDump growNeuron NerveOnlyFor DumpNeuron showInsteadOfDump True nerveSum growNeuron NerveBoth FunctionNeuron IIntegerList IIntegerList function gcd nerveSum attachTo TranslatableFor nerveSum TranslatableFor nerveDump liftIO do getCurrentImpulseTime sendForNeuron nerveSum IList This Neuron is an example of Neuron with both receiving and sending Impulse types parametrized It processes only the newest Impulse it receives when they get queued so Impulse are dropped if load is too high",
        "hierarchy": "Control Etage Function",
        "module": "Control.Etage.Function",
        "name": "Function",
        "normalized": "",
        "package": "Etage",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Function.html#t:FunctionForImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es for \u003ccode\u003e\u003ca\u003eFunctionNeuron\u003c/a\u003e\u003c/code\u003e, of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Function",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Function.html#FunctionForImpulse",
        "fct-type": "type",
        "title": "FunctionForImpulse"
      },
      "index": {
        "description": "Impulse for FunctionNeuron of type",
        "hierarchy": "Control Etage Function",
        "module": "Control.Etage.Function",
        "name": "FunctionForImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Function For Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Function.html#t:FunctionFromImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003e\u003ca\u003eFunctionNeuron\u003c/a\u003e\u003c/code\u003e, of type \u003ccode\u003ej\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Function",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Function.html#FunctionFromImpulse",
        "fct-type": "type",
        "title": "FunctionFromImpulse"
      },
      "index": {
        "description": "Impulse from FunctionNeuron of type",
        "hierarchy": "Control Etage Function",
        "module": "Control.Etage.Function",
        "name": "FunctionFromImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Function From Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Function.html#t:FunctionNeuron",
      "description": {
        "fct-module": "Control.Etage.Function",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Function.html#FunctionNeuron",
        "fct-type": "data",
        "title": "FunctionNeuron"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage Function",
        "module": "Control.Etage.Function",
        "name": "FunctionNeuron",
        "normalized": "",
        "package": "Etage",
        "partial": "Function Neuron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Function.html#t:FunctionOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for \u003ccode\u003e\u003ca\u003eFunctionNeuron\u003c/a\u003e\u003c/code\u003e. This option is defined:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003efunction :: \u003ccode\u003e\u003ca\u003eImpulseTime\u003c/a\u003e\u003c/code\u003e -\u003e i -\u003e [j]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The function to apply to recieved \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es. Resulting \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es are send\nin the list order. Default is to always return an empty list.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Control.Etage.Function",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Function.html#FunctionOptions",
        "fct-type": "type",
        "title": "FunctionOptions"
      },
      "index": {
        "description": "Options for FunctionNeuron This option is defined function ImpulseTime The function to apply to recieved Impulse Resulting Impulse are send in the list order Default is to always return an empty list",
        "hierarchy": "Control Etage Function",
        "module": "Control.Etage.Function",
        "name": "FunctionOptions",
        "normalized": "",
        "package": "Etage",
        "partial": "Function Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Sequence.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which generates values based on a given sequence at a given interval.\nIf it reaches the end of a sequence it initiates \u003ccode\u003e\u003ca\u003edissolving\u003c/a\u003e\u003c/code\u003e.\nYou \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003e default version of it, which gives you an infinite source of random \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es at random interval of maximum length of 1\nsecond, in \u003ccode\u003e\u003ca\u003eIncubation\u003c/a\u003e\u003c/code\u003e by using something like:\n\u003c/p\u003e\u003cpre\u003e nerveRandom \u003c- (growNeuron :: NerveOnlyFrom (SequenceNeuron Int)) defaultOptions\n\u003c/pre\u003e\u003cp\u003eor for an infinite source of ones with same random interval:\n\u003c/p\u003e\u003cpre\u003e nerveOnes \u003c- (growNeuron :: NerveOnlyFrom (SequenceNeuron Int)) (\\o -\u003e o { valueSource = repeat 1 })\n\u003c/pre\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e is an example of a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e with a parametrized type. Check also \u003ca\u003eControl.Etage.Function\u003c/a\u003e for a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e with both receiving\nand sending \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es types parametrized. It does not process any (receiving) \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Etage.Sequence",
        "fct-package": "Etage",
        "fct-signature": "module",
        "fct-source": "src/Control-Etage-Sequence.html",
        "fct-type": "module",
        "title": "Sequence"
      },
      "index": {
        "description": "This module defines Neuron which generates values based on given sequence at given interval If it reaches the end of sequence it initiates dissolving You grow default version of it which gives you an infinite source of random Int at random interval of maximum length of second in Incubation by using something like nerveRandom growNeuron NerveOnlyFrom SequenceNeuron Int defaultOptions or for an infinite source of ones with same random interval nerveOnes growNeuron NerveOnlyFrom SequenceNeuron Int valueSource repeat This Neuron is an example of Neuron with parametrized type Check also Control.Etage.Function for Neuron with both receiving and sending Impulse types parametrized It does not process any receiving Impulse",
        "hierarchy": "Control Etage Sequence",
        "module": "Control.Etage.Sequence",
        "name": "Sequence",
        "normalized": "",
        "package": "Etage",
        "partial": "Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Sequence.html#t:SequenceForImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es for \u003ccode\u003e\u003ca\u003eSequenceNeuron\u003c/a\u003e\u003c/code\u003e. This \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e does not define any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es it would receive, \u003ccode\u003e\u003ca\u003eNoImpulse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Sequence",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Sequence.html#SequenceForImpulse",
        "fct-type": "type",
        "title": "SequenceForImpulse"
      },
      "index": {
        "description": "Impulse for SequenceNeuron This Neuron does not define any Impulse it would receive NoImpulse",
        "hierarchy": "Control Etage Sequence",
        "module": "Control.Etage.Sequence",
        "name": "SequenceForImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Sequence For Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Sequence.html#t:SequenceFromImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003e\u003ca\u003eSequenceNeuron\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIValue\u003c/a\u003e\u003c/code\u003e v\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Sequence",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Sequence.html#SequenceFromImpulse",
        "fct-type": "type",
        "title": "SequenceFromImpulse"
      },
      "index": {
        "description": "Impulse from SequenceNeuron IValue",
        "hierarchy": "Control Etage Sequence",
        "module": "Control.Etage.Sequence",
        "name": "SequenceFromImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Sequence From Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Sequence.html#t:SequenceNeuron",
      "description": {
        "fct-module": "Control.Etage.Sequence",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Sequence.html#SequenceNeuron",
        "fct-type": "data",
        "title": "SequenceNeuron"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage Sequence",
        "module": "Control.Etage.Sequence",
        "name": "SequenceNeuron",
        "normalized": "",
        "package": "Etage",
        "partial": "Sequence Neuron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Sequence.html#t:SequenceOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for \u003ccode\u003e\u003ca\u003eSequenceNeuron\u003c/a\u003e\u003c/code\u003e. Those options are defined:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003evalueSource :: [v]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The list of values to send. If the end of the list is reached, \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e initiates \u003ccode\u003e\u003ca\u003edissolving\u003c/a\u003e\u003c/code\u003e. Default\nis an infinite list of values of type \u003ccode\u003ev\u003c/code\u003e generated by the \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e random generator.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eintervalSource :: [\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The list of intervals between values. It is defined as a delay in microseconds before the next value\nis send. If the end of the list is reached, \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e initiates \u003ccode\u003e\u003ca\u003edissolving\u003c/a\u003e\u003c/code\u003e. Default is a list of random delays with maximum\nlength of 1 second generated by the \u003ccode\u003e\u003ca\u003eStdGen\u003c/a\u003e\u003c/code\u003e random generator.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Control.Etage.Sequence",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Sequence.html#SequenceOptions",
        "fct-type": "type",
        "title": "SequenceOptions"
      },
      "index": {
        "description": "Options for SequenceNeuron Those options are defined valueSource The list of values to send If the end of the list is reached Neuron initiates dissolving Default is an infinite list of values of type generated by the StdGen random generator intervalSource Int The list of intervals between values It is defined as delay in microseconds before the next value is send If the end of the list is reached Neuron initiates dissolving Default is list of random delays with maximum length of second generated by the StdGen random generator",
        "hierarchy": "Control Etage Sequence",
        "module": "Control.Etage.Sequence",
        "name": "SequenceOptions",
        "normalized": "",
        "package": "Etage",
        "partial": "Sequence Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Timeout.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a simple \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which initiates \u003ccode\u003e\u003ca\u003edissolving\u003c/a\u003e\u003c/code\u003e after a given delay. It can be used to limit execution time of\nthe network. You \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003e it in \u003ccode\u003e\u003ca\u003eIncubation\u003c/a\u003e\u003c/code\u003e by using something like:\n\u003c/p\u003e\u003cpre\u003e _ \u003c- (growNeuron :: NerveNone TimeoutNeuron) (\\o -\u003e o { timeout = 10000000 })\n\u003c/pre\u003e\u003cp\u003esomewhere among (best at the end) \u003ccode\u003e\u003ca\u003egrowNeuron\u003c/a\u003e\u003c/code\u003e calls for other \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es in \u003ccode\u003e\u003ca\u003eIncubation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is an example of a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which does not \u003ccode\u003e\u003ca\u003elive\u003c/a\u003e\u003c/code\u003e indefinitely (until an exception) but \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003es after some time (by using\n\u003ccode\u003e\u003ca\u003edissolving\u003c/a\u003e\u003c/code\u003e). It does not process any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Etage.Timeout",
        "fct-package": "Etage",
        "fct-signature": "module",
        "fct-source": "src/Control-Etage-Timeout.html",
        "fct-type": "module",
        "title": "Timeout"
      },
      "index": {
        "description": "This module defines simple Neuron which initiates dissolving after given delay It can be used to limit execution time of the network You grow it in Incubation by using something like growNeuron NerveNone TimeoutNeuron timeout somewhere among best at the end growNeuron calls for other Neuron in Incubation It is an example of Neuron which does not live indefinitely until an exception but dissolve after some time by using dissolving It does not process any Impulse",
        "hierarchy": "Control Etage Timeout",
        "module": "Control.Etage.Timeout",
        "name": "Timeout",
        "normalized": "",
        "package": "Etage",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Timeout.html#t:TimeoutForImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es for \u003ccode\u003e\u003ca\u003eTimeoutNeuron\u003c/a\u003e\u003c/code\u003e. This \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e does not define any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es it would receive, \u003ccode\u003e\u003ca\u003eNoImpulse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Timeout",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Timeout.html#TimeoutForImpulse",
        "fct-type": "type",
        "title": "TimeoutForImpulse"
      },
      "index": {
        "description": "Impulse for TimeoutNeuron This Neuron does not define any Impulse it would receive NoImpulse",
        "hierarchy": "Control Etage Timeout",
        "module": "Control.Etage.Timeout",
        "name": "TimeoutForImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Timeout For Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Timeout.html#t:TimeoutFromImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003e\u003ca\u003eTimeoutNeuron\u003c/a\u003e\u003c/code\u003e. This \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e does not define any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es it would send, \u003ccode\u003e\u003ca\u003eNoImpulse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Timeout",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Timeout.html#TimeoutFromImpulse",
        "fct-type": "type",
        "title": "TimeoutFromImpulse"
      },
      "index": {
        "description": "Impulse from TimeoutNeuron This Neuron does not define any Impulse it would send NoImpulse",
        "hierarchy": "Control Etage Timeout",
        "module": "Control.Etage.Timeout",
        "name": "TimeoutFromImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Timeout From Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Timeout.html#t:TimeoutNeuron",
      "description": {
        "fct-module": "Control.Etage.Timeout",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Timeout.html#TimeoutNeuron",
        "fct-type": "data",
        "title": "TimeoutNeuron"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage Timeout",
        "module": "Control.Etage.Timeout",
        "name": "TimeoutNeuron",
        "normalized": "",
        "package": "Etage",
        "partial": "Timeout Neuron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Timeout.html#t:TimeoutOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for \u003ccode\u003e\u003ca\u003eTimeoutNeuron\u003c/a\u003e\u003c/code\u003e. This option is defined:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003etimeout :: \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The length of the delay in microseconds before initiating \u003ccode\u003e\u003ca\u003edissolving\u003c/a\u003e\u003c/code\u003e. Default is 60 seconds.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Control.Etage.Timeout",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Timeout.html#TimeoutOptions",
        "fct-type": "type",
        "title": "TimeoutOptions"
      },
      "index": {
        "description": "Options for TimeoutNeuron This option is defined timeout Int The length of the delay in microseconds before initiating dissolving Default is seconds",
        "hierarchy": "Control Etage Timeout",
        "module": "Control.Etage.Timeout",
        "name": "TimeoutOptions",
        "normalized": "",
        "package": "Etage",
        "partial": "Timeout Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Worker.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a worker \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which evaluates \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions it receives. It is useful to offload lengthly \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions\ninto another thread. In the case of too many queued \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions they are silently dropped and only newest ones are evaluated.\nYou \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003e it in \u003ccode\u003e\u003ca\u003eIncubation\u003c/a\u003e\u003c/code\u003e by using something like:\n\u003c/p\u003e\u003cpre\u003e nerveWorker \u003c- (growNeuron :: NerveOnlyFor WorkerNeuron) defaultOptions\n\u003c/pre\u003e\u003cp\u003eIt is an example of a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which defines \u003ccode\u003e\u003ca\u003egetNeuronMapCapability\u003c/a\u003e\u003c/code\u003e. It processes only the newest \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es it receives, when\nthey get queued, so \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es are dropped if load is too high.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Etage.Worker",
        "fct-package": "Etage",
        "fct-signature": "module",
        "fct-source": "src/Control-Etage-Worker.html",
        "fct-type": "module",
        "title": "Worker"
      },
      "index": {
        "description": "This module defines worker Neuron which evaluates IO actions it receives It is useful to offload lengthly IO actions into another thread In the case of too many queued IO actions they are silently dropped and only newest ones are evaluated You grow it in Incubation by using something like nerveWorker growNeuron NerveOnlyFor WorkerNeuron defaultOptions It is an example of Neuron which defines getNeuronMapCapability It processes only the newest Impulse it receives when they get queued so Impulse are dropped if load is too high",
        "hierarchy": "Control Etage Worker",
        "module": "Control.Etage.Worker",
        "name": "Worker",
        "normalized": "",
        "package": "Etage",
        "partial": "Worker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Worker.html#t:WorkType",
      "description": {
        "fct-descr": "\u003cp\u003eType of work this worker \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e evaluates.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Worker",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Worker.html#WorkType",
        "fct-type": "type",
        "title": "WorkType"
      },
      "index": {
        "description": "Type of work this worker Neuron evaluates",
        "hierarchy": "Control Etage Worker",
        "module": "Control.Etage.Worker",
        "name": "WorkType",
        "normalized": "",
        "package": "Etage",
        "partial": "Work Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Worker.html#t:WorkerForImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es for \u003ccode\u003e\u003ca\u003eWorkerNeuron\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Worker",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Worker.html#WorkerForImpulse",
        "fct-type": "data",
        "title": "WorkerForImpulse"
      },
      "index": {
        "description": "Impulse for WorkerNeuron",
        "hierarchy": "Control Etage Worker",
        "module": "Control.Etage.Worker",
        "name": "WorkerForImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Worker For Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Worker.html#t:WorkerFromImpulse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003e\u003ca\u003eWorkerNeuron\u003c/a\u003e\u003c/code\u003e. This \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e does not define any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es it would send, \u003ccode\u003e\u003ca\u003eNoImpulse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Worker",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Worker.html#WorkerFromImpulse",
        "fct-type": "type",
        "title": "WorkerFromImpulse"
      },
      "index": {
        "description": "Impulse from WorkerNeuron This Neuron does not define any Impulse it would send NoImpulse",
        "hierarchy": "Control Etage Worker",
        "module": "Control.Etage.Worker",
        "name": "WorkerFromImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Worker From Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Worker.html#t:WorkerNeuron",
      "description": {
        "fct-module": "Control.Etage.Worker",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Worker.html#WorkerNeuron",
        "fct-type": "data",
        "title": "WorkerNeuron"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage Worker",
        "module": "Control.Etage.Worker",
        "name": "WorkerNeuron",
        "normalized": "",
        "package": "Etage",
        "partial": "Worker Neuron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Worker.html#t:WorkerOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for \u003ccode\u003e\u003ca\u003eWorkerNeuron\u003c/a\u003e\u003c/code\u003e. This option is defined:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003emapOnCapability :: \u003ccode\u003e\u003ca\u003eNeuronMapCapability\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e How to map the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e on capabilities (OS threads). With this option you can fix\nmultiple \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es on the same capability (for example, by generating one value with \u003ccode\u003e\u003ca\u003emkNeuronMapOnRandomCapability\u003c/a\u003e\u003c/code\u003e and using\nit for all those \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es) which is sometimes necessary when dealing with external (FFI) libraries. Default value\nis \u003ccode\u003e\u003ca\u003eNeuronFreelyMapOnCapability\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Control.Etage.Worker",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Worker.html#WorkerOptions",
        "fct-type": "type",
        "title": "WorkerOptions"
      },
      "index": {
        "description": "Options for WorkerNeuron This option is defined mapOnCapability NeuronMapCapability How to map the Neuron on capabilities OS threads With this option you can fix multiple Neuron on the same capability for example by generating one value with mkNeuronMapOnRandomCapability and using it for all those Neuron which is sometimes necessary when dealing with external FFI libraries Default value is NeuronFreelyMapOnCapability",
        "hierarchy": "Control Etage Worker",
        "module": "Control.Etage.Worker",
        "name": "WorkerOptions",
        "normalized": "",
        "package": "Etage",
        "partial": "Worker Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Worker.html#v:Work",
      "description": {
        "fct-module": "Control.Etage.Worker",
        "fct-package": "Etage",
        "fct-signature": "Work",
        "fct-source": "src/Control-Etage-Worker.html#WorkerForImpulse",
        "fct-type": "function",
        "title": "Work"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage Worker",
        "module": "Control.Etage.Worker",
        "name": "Work",
        "normalized": "",
        "package": "Etage",
        "partial": "Work",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Worker.html#v:impulseTimestamp",
      "description": {
        "fct-descr": "\u003cp\u003eTime when the action was enqueued for evaluation in the \u003ccode\u003e\u003ca\u003eWorkerNeuron\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Worker",
        "fct-package": "Etage",
        "fct-signature": "ImpulseTime",
        "fct-source": "src/Control-Etage-Worker.html#WorkerForImpulse",
        "fct-type": "function",
        "title": "impulseTimestamp"
      },
      "index": {
        "description": "Time when the action was enqueued for evaluation in the WorkerNeuron",
        "hierarchy": "Control Etage Worker",
        "module": "Control.Etage.Worker",
        "name": "impulseTimestamp",
        "normalized": "",
        "package": "Etage",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage-Worker.html#v:work",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueued action.\n\u003c/p\u003e",
        "fct-module": "Control.Etage.Worker",
        "fct-package": "Etage",
        "fct-signature": "WorkType",
        "fct-source": "src/Control-Etage-Worker.html#WorkerForImpulse",
        "fct-type": "function",
        "title": "work"
      },
      "index": {
        "description": "Enqueued action",
        "hierarchy": "Control Etage Worker",
        "module": "Control.Etage.Worker",
        "name": "work",
        "normalized": "",
        "package": "Etage",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis data-flow framework consists mainly of \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es which are data processing units in data-flow network, receiving and sending\n\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es over bidirectional \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003eed to each other. \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es are best \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003en in \u003ccode\u003e\u003ca\u003eIncubation\u003c/a\u003e\u003c/code\u003e monad, which takes care of\nproper \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003eing and \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing of \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es. It comes with some example \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es but you should probably define your own.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "module",
        "fct-source": "src/Control-Etage.html",
        "fct-type": "module",
        "title": "Etage"
      },
      "index": {
        "description": "This data-flow framework consists mainly of Neuron which are data processing units in data-flow network receiving and sending Impulse over bidirectional Nerve attach ed to each other Neuron and Nerve are best grow in Incubation monad which takes care of proper grow ing and dissolve ing of Neuron It comes with some example Neuron but you should probably define your own",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "Etage",
        "normalized": "",
        "package": "Etage",
        "partial": "Etage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:AnyImpulse",
      "description": {
        "fct-descr": "\u003cp\u003eAn existentially quantified type encompassing all \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es. Useful when \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e should send or receive any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Externals.html#AnyImpulse",
        "fct-type": "data",
        "title": "AnyImpulse"
      },
      "index": {
        "description": "An existentially quantified type encompassing all Impulse Useful when Neuron should send or receive any Impulse type",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "AnyImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Any Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:AxonConductive",
      "description": {
        "fct-descr": "\u003cp\u003eIs axon (one direction of a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e) conductive? Yes, it is.\n\u003c/p\u003e\u003cp\u003eThis is type checked and enforced. If you define axon as conductive you have to make make sure that \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es send along it are\nreally read somewhere, otherwise a memory leak will occur.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Internals.html#AxonConductive",
        "fct-type": "data",
        "title": "AxonConductive"
      },
      "index": {
        "description": "Is axon one direction of Nerve conductive Yes it is This is type checked and enforced If you define axon as conductive you have to make make sure that Impulse send along it are really read somewhere otherwise memory leak will occur",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "AxonConductive",
        "normalized": "",
        "package": "Etage",
        "partial": "Axon Conductive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:AxonNonConductive",
      "description": {
        "fct-descr": "\u003cp\u003eIs axon (one direction of a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e) conductive? No, it is not.\n\u003c/p\u003e\u003cp\u003eThis is type checked and enforced. It is useful to specify nonconductive axons when you are not interested in \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from a\nparticular axon (direction), making sure there will not be a memory leak because \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es would pile up.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Internals.html#AxonNonConductive",
        "fct-type": "data",
        "title": "AxonNonConductive"
      },
      "index": {
        "description": "Is axon one direction of Nerve conductive No it is not This is type checked and enforced It is useful to specify nonconductive axons when you are not interested in Impulse from particular axon direction making sure there will not be memory leak because Impulse would pile up",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "AxonNonConductive",
        "normalized": "",
        "package": "Etage",
        "partial": "Axon Non Conductive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:BothNerve",
      "description": {
        "fct-descr": "\u003cp\u003eAn existentially quantified type encompassing all \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es which are conductive in both directions.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Internals.html#BothNerve",
        "fct-type": "data",
        "title": "BothNerve"
      },
      "index": {
        "description": "An existentially quantified type encompassing all Nerve which are conductive in both directions",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "BothNerve",
        "normalized": "",
        "package": "Etage",
        "partial": "Both Nerve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:DissolveException",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception which initiates \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing of a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. Should be thrown outside the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. For\nthrowing inside the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e use \u003ccode\u003e\u003ca\u003eDissolvingException\u003c/a\u003e\u003c/code\u003e (or simply \u003ccode\u003e\u003ca\u003edissolving\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Externals.html#DissolveException",
        "fct-type": "data",
        "title": "DissolveException"
      },
      "index": {
        "description": "An exception which initiates dissolve ing of Neuron Should be thrown outside the Neuron to the Neuron For throwing inside the Neuron use DissolvingException or simply dissolving",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "DissolveException",
        "normalized": "",
        "package": "Etage",
        "partial": "Dissolve Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:DissolvingException",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception which initiates \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing of a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. Should be thrown inside the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e with passing its \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e value as\nargument (as passed to \u003ccode\u003e\u003ca\u003elive\u003c/a\u003e\u003c/code\u003e method). For throwing outside the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e use \u003ccode\u003e\u003ca\u003eDissolveException\u003c/a\u003e\u003c/code\u003e (or simply \u003ccode\u003e\u003ca\u003edetach\u003c/a\u003e\u003c/code\u003e and others).\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Externals.html#DissolvingException",
        "fct-type": "data",
        "title": "DissolvingException"
      },
      "index": {
        "description": "An exception which initiates dissolve ing of Neuron Should be thrown inside the Neuron with passing its Neuron value as argument as passed to live method For throwing outside the Neuron use DissolveException or simply detach and others",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "DissolvingException",
        "normalized": "",
        "package": "Etage",
        "partial": "Dissolving Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:ForNerve",
      "description": {
        "fct-descr": "\u003cp\u003eAn existentially quantified type encompassing all \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es which are conductive to a \u003ccode\u003eNeuron\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Internals.html#ForNerve",
        "fct-type": "data",
        "title": "ForNerve"
      },
      "index": {
        "description": "An existentially quantified type encompassing all Nerve which are conductive to Neuron",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "ForNerve",
        "normalized": "",
        "package": "Etage",
        "partial": "For Nerve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:FromNerve",
      "description": {
        "fct-descr": "\u003cp\u003eAn existentially quantified type encompassing all \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es which are conductive from a \u003ccode\u003eNeuron\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Internals.html#FromNerve",
        "fct-type": "data",
        "title": "FromNerve"
      },
      "index": {
        "description": "An existentially quantified type encompassing all Nerve which are conductive from Neuron",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "FromNerve",
        "normalized": "",
        "package": "Etage",
        "partial": "From Nerve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:IInteger",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIValue\u003c/a\u003e\u003c/code\u003e type with \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Externals.html#IInteger",
        "fct-type": "type",
        "title": "IInteger"
      },
      "index": {
        "description": "IValue type with value as Integer type",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "IInteger",
        "normalized": "",
        "package": "Etage",
        "partial": "IInteger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:IIntegerList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIList\u003c/a\u003e\u003c/code\u003e type with \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e having \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e type values.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Externals.html#IIntegerList",
        "fct-type": "type",
        "title": "IIntegerList"
      },
      "index": {
        "description": "IList type with list having Integer type values",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "IIntegerList",
        "normalized": "",
        "package": "Etage",
        "partial": "IInteger List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:IList",
      "description": {
        "fct-descr": "\u003cp\u003eBasic \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e data type holding a \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e of values.\n\u003c/p\u003e\u003cp\u003eOrdered first by \u003ccode\u003e\u003ca\u003eimpulseListTimestamp\u003c/a\u003e\u003c/code\u003e and then by \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e. Equal only if both \u003ccode\u003e\u003ca\u003eimpulseListTimestamp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e are equal.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Externals.html#IList",
        "fct-type": "data",
        "title": "IList"
      },
      "index": {
        "description": "Basic Impulse data type holding list of values Ordered first by impulseListTimestamp and then by list Equal only if both impulseListTimestamp and list are equal",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "IList",
        "normalized": "",
        "package": "Etage",
        "partial": "IList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:IRational",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIValue\u003c/a\u003e\u003c/code\u003e type with \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Externals.html#IRational",
        "fct-type": "type",
        "title": "IRational"
      },
      "index": {
        "description": "IValue type with value as Rational type",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "IRational",
        "normalized": "",
        "package": "Etage",
        "partial": "IRational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:IRationalList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIList\u003c/a\u003e\u003c/code\u003e type with \u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e having \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e type values.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Externals.html#IRationalList",
        "fct-type": "type",
        "title": "IRationalList"
      },
      "index": {
        "description": "IList type with list having Rational type values",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "IRationalList",
        "normalized": "",
        "package": "Etage",
        "partial": "IRational List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:IValue",
      "description": {
        "fct-descr": "\u003cp\u003eBasic \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e data type holding a \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOrdered first by \u003ccode\u003e\u003ca\u003eimpulseValueTimestamp\u003c/a\u003e\u003c/code\u003e and then by \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e. Equal only if both \u003ccode\u003e\u003ca\u003eimpulseValueTimestamp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e are equal.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Externals.html#IValue",
        "fct-type": "data",
        "title": "IValue"
      },
      "index": {
        "description": "Basic Impulse data type holding value Ordered first by impulseValueTimestamp and then by value Equal only if both impulseValueTimestamp and value are equal",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "IValue",
        "normalized": "",
        "package": "Etage",
        "partial": "IValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:Impulse",
      "description": {
        "fct-descr": "\u003cp\u003eType class with common methods for impulses send over \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es and processed in \u003ccode\u003eNeuron\u003c/code\u003es so that it is possible to define\n\u003ccode\u003eNeuron\u003c/code\u003es which operate on any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e type by using \u003ccode\u003eAnyImpulse\u003c/code\u003e type as their receiving \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es type. An example of\nsuch \u003ccode\u003eNeuron\u003c/code\u003e is \u003ca\u003eControl.Etage.Dump\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "class",
        "fct-source": "src/Control-Etage-Internals.html#Impulse",
        "fct-type": "class",
        "title": "Impulse"
      },
      "index": {
        "description": "Type class with common methods for impulses send over Nerve and processed in Neuron so that it is possible to define Neuron which operate on any Impulse type by using AnyImpulse type as their receiving Impulse type An example of such Neuron is Control.Etage.Dump",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "Impulse",
        "normalized": "",
        "package": "Etage",
        "partial": "Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:ImpulseTime",
      "description": {
        "fct-descr": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e timestamp. You can use \u003ccode\u003egetCurrentImpulseTime\u003c/code\u003e for timestamp representing current time.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Internals.html#ImpulseTime",
        "fct-type": "type",
        "title": "ImpulseTime"
      },
      "index": {
        "description": "Type of Impulse timestamp You can use getCurrentImpulseTime for timestamp representing current time",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "ImpulseTime",
        "normalized": "",
        "package": "Etage",
        "partial": "Impulse Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:ImpulseTranslator",
      "description": {
        "fct-descr": "\u003cp\u003eThis type class defines a method for translating between \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "class",
        "fct-source": "src/Control-Etage-Externals.html#ImpulseTranslator",
        "fct-type": "class",
        "title": "ImpulseTranslator"
      },
      "index": {
        "description": "This type class defines method for translating between Impulse types",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "ImpulseTranslator",
        "normalized": "",
        "package": "Etage",
        "partial": "Impulse Translator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:ImpulseValue",
      "description": {
        "fct-descr": "\u003cp\u003eType of a general representation of \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e values (data payload). Currently it is just a list of \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Internals.html#ImpulseValue",
        "fct-type": "type",
        "title": "ImpulseValue"
      },
      "index": {
        "description": "Type of general representation of Impulse values data payload Currently it is just list of Rational values",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "ImpulseValue",
        "normalized": "",
        "package": "Etage",
        "partial": "Impulse Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:Incubation",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIncubation\u003c/a\u003e\u003c/code\u003e monad type. It makes sure network is \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003en properly and that everything is cleaned up as necessary.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Incubator.html#Incubation",
        "fct-type": "data",
        "title": "Incubation"
      },
      "index": {
        "description": "An Incubation monad type It makes sure network is grow properly and that everything is cleaned up as necessary",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "Incubation",
        "normalized": "",
        "package": "Etage",
        "partial": "Incubation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:LiveNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eType representing a \u003ccode\u003elive\u003c/code\u003e \u003ccode\u003eNeuron\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Internals.html#LiveNeuron",
        "fct-type": "data",
        "title": "LiveNeuron"
      },
      "index": {
        "description": "Type representing live Neuron",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "LiveNeuron",
        "normalized": "",
        "package": "Etage",
        "partial": "Live Neuron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:Nerve",
      "description": {
        "fct-descr": "\u003cp\u003eType representing a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e between \u003ccode\u003eNeuron\u003c/code\u003es. It is bi-directional (from and to a \u003ccode\u003eNeuron\u003c/code\u003e, each direction being one axon) and you\ncan specify type of \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es traveling along the axon and its conductivity (with AxonConductive or\nAxonNonConductive).\n\u003c/p\u003e\u003cp\u003eYou mostly do not need to specify this type manually if you are using \u003ccode\u003egrowNeuron\u003c/code\u003e and one of \u003ccode\u003eNerveBoth\u003c/code\u003e, \u003ccode\u003eNerveNone\u003c/code\u003e,\n\u003ccode\u003eNerveOnlyFrom\u003c/code\u003e and \u003ccode\u003eNerveOnlyFor\u003c/code\u003e types.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Internals.html#Nerve",
        "fct-type": "data",
        "title": "Nerve"
      },
      "index": {
        "description": "Type representing Nerve between Neuron It is bi-directional from and to Neuron each direction being one axon and you can specify type of Impulse traveling along the axon and its conductivity with AxonConductive or AxonNonConductive You mostly do not need to specify this type manually if you are using growNeuron and one of NerveBoth NerveNone NerveOnlyFrom and NerveOnlyFor types",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "Nerve",
        "normalized": "",
        "package": "Etage",
        "partial": "Nerve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:NerveBoth",
      "description": {
        "fct-descr": "\u003cp\u003eType which helps you define (fix) a type of the \u003ccode\u003e\u003ca\u003egrowNeuron\u003c/a\u003e\u003c/code\u003e function so that compiler knows whith \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e instance to choose.\nIt takes type of the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e you want to \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003e as an argument and specifies a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e which is conductive in both directions.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Incubator.html#NerveBoth",
        "fct-type": "type",
        "title": "NerveBoth"
      },
      "index": {
        "description": "Type which helps you define fix type of the growNeuron function so that compiler knows whith Neuron instance to choose It takes type of the Neuron you want to grow as an argument and specifies Nerve which is conductive in both directions",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "NerveBoth",
        "normalized": "",
        "package": "Etage",
        "partial": "Nerve Both",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:NerveNone",
      "description": {
        "fct-descr": "\u003cp\u003eType which helps you define (fix) a type of the \u003ccode\u003e\u003ca\u003egrowNeuron\u003c/a\u003e\u003c/code\u003e function so that compiler knows whith \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e instance to choose.\nIt takes type of the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e you want to \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003e as an argument and specifies a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e which is not conductive in any directions.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Incubator.html#NerveNone",
        "fct-type": "type",
        "title": "NerveNone"
      },
      "index": {
        "description": "Type which helps you define fix type of the growNeuron function so that compiler knows whith Neuron instance to choose It takes type of the Neuron you want to grow as an argument and specifies Nerve which is not conductive in any directions",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "NerveNone",
        "normalized": "",
        "package": "Etage",
        "partial": "Nerve None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:NerveOnlyFor",
      "description": {
        "fct-descr": "\u003cp\u003eType which helps you define (fix) a type of the \u003ccode\u003e\u003ca\u003egrowNeuron\u003c/a\u003e\u003c/code\u003e function so that compiler knows whith \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e instance to choose.\nIt takes type of the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e you want to \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003e as an argument and specifies a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e which is conductive only in the direction to the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Incubator.html#NerveOnlyFor",
        "fct-type": "type",
        "title": "NerveOnlyFor"
      },
      "index": {
        "description": "Type which helps you define fix type of the growNeuron function so that compiler knows whith Neuron instance to choose It takes type of the Neuron you want to grow as an argument and specifies Nerve which is conductive only in the direction to the Neuron",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "NerveOnlyFor",
        "normalized": "",
        "package": "Etage",
        "partial": "Nerve Only For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:NerveOnlyFrom",
      "description": {
        "fct-descr": "\u003cp\u003eType which helps you define (fix) a type of the \u003ccode\u003e\u003ca\u003egrowNeuron\u003c/a\u003e\u003c/code\u003e function so that compiler knows whith \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e instance to choose.\nIt takes type of the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e you want to \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003e as an argument and specifies a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e which is conductive only in the direction from the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "type",
        "fct-source": "src/Control-Etage-Incubator.html#NerveOnlyFrom",
        "fct-type": "type",
        "title": "NerveOnlyFrom"
      },
      "index": {
        "description": "Type which helps you define fix type of the growNeuron function so that compiler knows whith Neuron instance to choose It takes type of the Neuron you want to grow as an argument and specifies Nerve which is conductive only in the direction from the Neuron",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "NerveOnlyFrom",
        "normalized": "",
        "package": "Etage",
        "partial": "Nerve Only From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:Neuron",
      "description": {
        "fct-descr": "\u003cp\u003eA type class which defines common methods and data types of \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "class",
        "fct-source": "src/Control-Etage-Externals.html#Neuron",
        "fct-type": "class",
        "title": "Neuron"
      },
      "index": {
        "description": "type class which defines common methods and data types of Neuron",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "Neuron",
        "normalized": "",
        "package": "Etage",
        "partial": "Neuron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:NeuronMapCapability",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es can be mapped to capabilities (OS threads) in different ways. The best is to let Haskell decide the best capability\n(and also move \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es among them as necessary) by using \u003ccode\u003e\u003ca\u003eNeuronFreelyMapOnCapability\u003c/a\u003e\u003c/code\u003e value, but sometimes because of an external\n(FFI) library limitations you have to map \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e to a fixed capability, you can use \u003ccode\u003e\u003ca\u003eNeuronMapOnCapability\u003c/a\u003e\u003c/code\u003e for that.\n\u003c/p\u003e\u003cp\u003eSometimes it is not important to which capability you map a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e, just that few \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es are mapped to the same. You can\nuse \u003ccode\u003e\u003ca\u003emkNeuronMapOnRandomCapability\u003c/a\u003e\u003c/code\u003e to create such \u003ccode\u003e\u003ca\u003eNeuronMapCapability\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Externals.html#NeuronMapCapability",
        "fct-type": "data",
        "title": "NeuronMapCapability"
      },
      "index": {
        "description": "Neuron can be mapped to capabilities OS threads in different ways The best is to let Haskell decide the best capability and also move Neuron among them as necessary by using NeuronFreelyMapOnCapability value but sometimes because of an external FFI library limitations you have to map Neuron to fixed capability you can use NeuronMapOnCapability for that Sometimes it is not important to which capability you map Neuron just that few Neuron are mapped to the same You can use mkNeuronMapOnRandomCapability to create such NeuronMapCapability value",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "NeuronMapCapability",
        "normalized": "",
        "package": "Etage",
        "partial": "Neuron Map Capability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:NoImpulse",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e data type. Useful when \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e does not send or receive \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Externals.html#NoImpulse",
        "fct-type": "data",
        "title": "NoImpulse"
      },
      "index": {
        "description": "Empty Impulse data type Useful when Neuron does not send or receive Impulse",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "NoImpulse",
        "normalized": "",
        "package": "Etage",
        "partial": "No Impulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:TranslatableFor",
      "description": {
        "fct-descr": "\u003cp\u003eAn existentially quantified type encompassing all \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es which can be \u003ccode\u003e\u003ca\u003etranslate\u003c/a\u003e\u003c/code\u003ed from the same \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e type. Used in\n\u003ccode\u003eattachTo\u003c/code\u003e (and \u003ccode\u003epropagate\u003c/code\u003e) to list all \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es to which you want a given \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003e to (and \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es to\n\u003ccode\u003epropagate\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Externals.html#TranslatableFor",
        "fct-type": "data",
        "title": "TranslatableFor"
      },
      "index": {
        "description": "An existentially quantified type encompassing all Nerve which can be translate from the same Impulse type Used in attachTo and propagate to list all Nerve to which you want given Nerve to attach to and Impulse to propagate",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "TranslatableFor",
        "normalized": "",
        "package": "Etage",
        "partial": "Translatable For",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#t:TranslatableFrom",
      "description": {
        "fct-descr": "\u003cp\u003eAn existentially quantified type encompassing all \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es which can be \u003ccode\u003e\u003ca\u003etranslate\u003c/a\u003e\u003c/code\u003ed to the same \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e type. Used in\n\u003ccode\u003efuseWith\u003c/code\u003e (and \u003ccode\u003efuse\u003c/code\u003e) to list all \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es from which you want to \u003ccode\u003efuse\u003c/code\u003e \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "data",
        "fct-source": "src/Control-Etage-Externals.html#TranslatableFrom",
        "fct-type": "data",
        "title": "TranslatableFrom"
      },
      "index": {
        "description": "An existentially quantified type encompassing all Nerve which can be translate to the same Impulse type Used in fuseWith and fuse to list all Nerve from which you want to fuse Impulse",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "TranslatableFrom",
        "normalized": "",
        "package": "Etage",
        "partial": "Translatable From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:AnyImpulse",
      "description": {
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "i -\u003e AnyImpulse",
        "fct-source": "src/Control-Etage-Externals.html#AnyImpulse",
        "fct-type": "function",
        "title": "AnyImpulse"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "AnyImpulse",
        "normalized": "a-\u003eAnyImpulse",
        "package": "Etage",
        "partial": "Any Impulse",
        "signature": "i-\u003eAnyImpulse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:BothNerve",
      "description": {
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from AxonConductive for AxonConductive -\u003e BothNerve",
        "fct-source": "src/Control-Etage-Internals.html#BothNerve",
        "fct-type": "function",
        "title": "BothNerve"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "BothNerve",
        "normalized": "Nerve a AxonConductive b AxonConductive-\u003eBothNerve",
        "package": "Etage",
        "partial": "Both Nerve",
        "signature": "Nerve from AxonConductive for AxonConductive-\u003eBothNerve"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:ForNerve",
      "description": {
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for AxonConductive -\u003e ForNerve",
        "fct-source": "src/Control-Etage-Internals.html#ForNerve",
        "fct-type": "function",
        "title": "ForNerve"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "ForNerve",
        "normalized": "Nerve a b c AxonConductive-\u003eForNerve",
        "package": "Etage",
        "partial": "For Nerve",
        "signature": "Nerve from fromConductivity for AxonConductive-\u003eForNerve"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:FromNerve",
      "description": {
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from AxonConductive for forConductivity -\u003e FromNerve",
        "fct-source": "src/Control-Etage-Internals.html#FromNerve",
        "fct-type": "function",
        "title": "FromNerve"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "FromNerve",
        "normalized": "Nerve a AxonConductive b c-\u003eFromNerve",
        "package": "Etage",
        "partial": "From Nerve",
        "signature": "Nerve from AxonConductive for forConductivity-\u003eFromNerve"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:IList",
      "description": {
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "IList",
        "fct-source": "src/Control-Etage-Externals.html#IList",
        "fct-type": "function",
        "title": "IList"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "IList",
        "normalized": "",
        "package": "Etage",
        "partial": "IList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:IValue",
      "description": {
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "IValue",
        "fct-source": "src/Control-Etage-Externals.html#IValue",
        "fct-type": "function",
        "title": "IValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "IValue",
        "normalized": "",
        "package": "Etage",
        "partial": "IValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:NeuronFreelyMapOnCapability",
      "description": {
        "fct-descr": "\u003cp\u003eLet Haskell decide on which capability is best to map a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e at a given time.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "NeuronFreelyMapOnCapability",
        "fct-source": "src/Control-Etage-Externals.html#NeuronMapCapability",
        "fct-type": "function",
        "title": "NeuronFreelyMapOnCapability"
      },
      "index": {
        "description": "Let Haskell decide on which capability is best to map Neuron at given time",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "NeuronFreelyMapOnCapability",
        "normalized": "",
        "package": "Etage",
        "partial": "Neuron Freely Map On Capability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:NeuronMapOnCapability",
      "description": {
        "fct-descr": "\u003cp\u003eMap a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e to fixed capability.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "NeuronMapOnCapability Int",
        "fct-source": "src/Control-Etage-Externals.html#NeuronMapCapability",
        "fct-type": "function",
        "title": "NeuronMapOnCapability"
      },
      "index": {
        "description": "Map Neuron to fixed capability",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "NeuronMapOnCapability",
        "normalized": "",
        "package": "Etage",
        "partial": "Neuron Map On Capability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:TranslatableFor",
      "description": {
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for AxonConductive -\u003e TranslatableFor i",
        "fct-source": "src/Control-Etage-Externals.html#TranslatableFor",
        "fct-type": "function",
        "title": "TranslatableFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "TranslatableFor",
        "normalized": "Nerve a b c AxonConductive-\u003eTranslatableFor d",
        "package": "Etage",
        "partial": "Translatable For",
        "signature": "Nerve from fromConductivity for AxonConductive-\u003eTranslatableFor i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:TranslatableFrom",
      "description": {
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from AxonConductive for forConductivity -\u003e TranslatableFrom i",
        "fct-source": "src/Control-Etage-Externals.html#TranslatableFrom",
        "fct-type": "function",
        "title": "TranslatableFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "TranslatableFrom",
        "normalized": "Nerve a AxonConductive b c-\u003eTranslatableFrom d",
        "package": "Etage",
        "partial": "Translatable From",
        "signature": "Nerve from AxonConductive for forConductivity-\u003eTranslatableFrom i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:attach",
      "description": {
        "fct-descr": "\u003cp\u003eThis method should take care of \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003eing a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e with a given \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003eed to it. It takes a function which\n changes default options and returns a \u003ccode\u003e\u003ca\u003eLiveNeuron\u003c/a\u003e\u003c/code\u003e value which can be used for \u003ccode\u003e\u003ca\u003edetach\u003c/a\u003e\u003c/code\u003eing (and thus \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing) the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e.\n It should create a thread for a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003elive\u003c/a\u003e\u003c/code\u003e in and it should assure proper cleanup and \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing.\n\u003c/p\u003e\u003cp\u003eBy default it calls \u003ccode\u003e\u003ca\u003eattach'\u003c/a\u003e\u003c/code\u003e to do all that.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "(NeuronOptions n -\u003e NeuronOptions n) -\u003e Nerve (NeuronFromImpulse n) fromConductivity (NeuronForImpulse n) forConductivity -\u003e IO LiveNeuron",
        "fct-source": "src/Control-Etage-Externals.html#attach",
        "fct-type": "method",
        "title": "attach"
      },
      "index": {
        "description": "This method should take care of grow ing Neuron with given Nerve attach ed to it It takes function which changes default options and returns LiveNeuron value which can be used for detach ing and thus dissolve ing the Neuron It should create thread for Neuron to live in and it should assure proper cleanup and dissolve ing By default it calls attach to do all that",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "attach",
        "normalized": "(NeuronOptions a-\u003eNeuronOptions a)-\u003eNerve(NeuronFromImpulse a)b(NeuronForImpulse a)c-\u003eIO LiveNeuron",
        "package": "Etage",
        "partial": "",
        "signature": "(NeuronOptions n-\u003eNeuronOptions n)-\u003eNerve(NeuronFromImpulse n)fromConductivity(NeuronForImpulse n)forConductivity-\u003eIO LiveNeuron"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:attach-39-",
      "description": {
        "fct-descr": "\u003cp\u003eDefault implementation for \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003e method. It takes a function which changes default options and returns a \u003ccode\u003e\u003ca\u003eLiveNeuron\u003c/a\u003e\u003c/code\u003e value\nwhich can be used for \u003ccode\u003e\u003ca\u003edetach\u003c/a\u003e\u003c/code\u003eing (and thus \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing) the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt changes default options according to a given function, creates thread for a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e to live in based on \u003ccode\u003e\u003ca\u003egetNeuronMapCapability\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003es a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e, runs \u003ccode\u003e\u003ca\u003elive\u003c/a\u003e\u003c/code\u003e and prepares everything for cleanup with \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e, whether because \u003ccode\u003e\u003ca\u003elive\u003c/a\u003e\u003c/code\u003e finished or because of an\nexception. In the later case it rethrows an exception in the parent \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e (or in \u003ccode\u003eIncubation\u003c/code\u003e). It also signals the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e\nhas \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003ed for \u003ccode\u003e\u003ca\u003edetachAndWait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edetachManyAndWait\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "(NeuronOptions n -\u003e NeuronOptions n) -\u003e Nerve (NeuronFromImpulse n) fromConductivity (NeuronForImpulse n) forConductivity -\u003e IO LiveNeuron",
        "fct-source": "src/Control-Etage-Externals.html#attach%27",
        "fct-type": "function",
        "title": "attach'"
      },
      "index": {
        "description": "Default implementation for attach method It takes function which changes default options and returns LiveNeuron value which can be used for detach ing and thus dissolve ing the Neuron It changes default options according to given function creates thread for Neuron to live in based on getNeuronMapCapability grow Neuron runs live and prepares everything for cleanup with dissolve whether because live finished or because of an exception In the later case it rethrows an exception in the parent Neuron or in Incubation It also signals the Neuron has dissolve for detachAndWait and detachManyAndWait",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "attach'",
        "normalized": "(NeuronOptions a-\u003eNeuronOptions a)-\u003eNerve(NeuronFromImpulse a)b(NeuronForImpulse a)c-\u003eIO LiveNeuron",
        "package": "Etage",
        "partial": "",
        "signature": "(NeuronOptions n-\u003eNeuronOptions n)-\u003eNerve(NeuronFromImpulse n)fromConductivity(NeuronForImpulse n)forConductivity-\u003eIO LiveNeuron"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:attachTo",
      "description": {
        "fct-descr": "\u003cp\u003eAttaches a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e to other \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es so that \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es send from the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e over the first \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e are received by \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es\nof other \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es. \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es are \u003ccode\u003e\u003ca\u003epropagate\u003c/a\u003e\u003c/code\u003ed only in this direction, not in the other. If you want also the other direction use\n\u003ccode\u003e\u003ca\u003eattachTo\u003c/a\u003e\u003c/code\u003e again for that direction. \u003ccode\u003e\u003ca\u003eattachTo\u003c/a\u003e\u003c/code\u003e takes care of all the details (like branching \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es as necessary).\n\u003c/p\u003e\u003cp\u003eBe careful if you are attaching the same \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e multiple times as some \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es might already been \u003ccode\u003e\u003ca\u003epropagate\u003c/a\u003e\u003c/code\u003ed and thus are not\navailable anymore to later attached \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es. Just list all destination \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es the first time.\n\u003c/p\u003e\u003cp\u003eInternally it uses \u003ccode\u003e\u003ca\u003epropagate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from AxonConductive for forConductivity -\u003e [TranslatableFor from] -\u003e Incubation ()",
        "fct-source": "src/Control-Etage-Incubator.html#attachTo",
        "fct-type": "function",
        "title": "attachTo"
      },
      "index": {
        "description": "Attaches Nerve to other Nerve so that Impulse send from the Neuron over the first Nerve are received by Neuron of other Nerve Impulse are propagate only in this direction not in the other If you want also the other direction use attachTo again for that direction attachTo takes care of all the details like branching Nerve as necessary Be careful if you are attaching the same Nerve multiple times as some Impulse might already been propagate and thus are not available anymore to later attached Nerve Just list all destination Nerve the first time Internally it uses propagate",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "attachTo",
        "normalized": "Nerve a AxonConductive b c-\u003e[TranslatableFor a]-\u003eIncubation()",
        "package": "Etage",
        "partial": "To",
        "signature": "Nerve from AxonConductive for forConductivity-\u003e[TranslatableFor from]-\u003eIncubation()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:branchNerveBoth",
      "description": {
        "fct-descr": "\u003cp\u003eBranches \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e on both sides. Same as both \u003ccode\u003e\u003ca\u003ebranchNerveFor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebranchNerveFrom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from AxonConductive for AxonConductive -\u003e IO (Nerve from AxonConductive for AxonConductive)",
        "fct-source": "src/Control-Etage-Incubator.html#branchNerveBoth",
        "fct-type": "function",
        "title": "branchNerveBoth"
      },
      "index": {
        "description": "Branches Nerve on both sides Same as both branchNerveFor and branchNerveFrom",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "branchNerveBoth",
        "normalized": "Nerve a AxonConductive b AxonConductive-\u003eIO(Nerve a AxonConductive b AxonConductive)",
        "package": "Etage",
        "partial": "Nerve Both",
        "signature": "Nerve from AxonConductive for AxonConductive-\u003eIO(Nerve from AxonConductive for AxonConductive)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:branchNerveFor",
      "description": {
        "fct-descr": "\u003cp\u003eBranches \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e side. This allows multiple \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es to be attached to it and still receive all \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es\n(otherwise just the first \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which would read from a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e would receive a given \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e).\nOnly new \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from a moment of branching on are conducted over new the branch, old \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es are not reconducted.\nBranching can be applied multiple times.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for AxonConductive -\u003e IO (Nerve from fromConductivity for AxonConductive)",
        "fct-source": "src/Control-Etage-Incubator.html#branchNerveFor",
        "fct-type": "function",
        "title": "branchNerveFor"
      },
      "index": {
        "description": "Branches Nerve on the Neuron side This allows multiple Neuron to be attached to it and still receive all Impulse otherwise just the first Neuron which would read from Nerve would receive given Impulse Only new Impulse from moment of branching on are conducted over new the branch old Impulse are not reconducted Branching can be applied multiple times",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "branchNerveFor",
        "normalized": "Nerve a b c AxonConductive-\u003eIO(Nerve a b c AxonConductive)",
        "package": "Etage",
        "partial": "Nerve For",
        "signature": "Nerve from fromConductivity for AxonConductive-\u003eIO(Nerve from fromConductivity for AxonConductive)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:branchNerveFrom",
      "description": {
        "fct-descr": "\u003cp\u003eBranches \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e on the other (non-\u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e) side. This allows using the same \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e at multiple parts of the network (program)\nand still receive all \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e at all parts of the network (otherwise just the first read from a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e would\nreceive a given \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e).\nOnly new \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from a moment of branching on are conducted over the new branch, old \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es are not reconducted.\nBranching can be applied multiple times.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from AxonConductive for forConductivity -\u003e IO (Nerve from AxonConductive for forConductivity)",
        "fct-source": "src/Control-Etage-Incubator.html#branchNerveFrom",
        "fct-type": "function",
        "title": "branchNerveFrom"
      },
      "index": {
        "description": "Branches Nerve on the other non Neuron side This allows using the same Nerve at multiple parts of the network program and still receive all Impulse from Neuron at all parts of the network otherwise just the first read from Nerve would receive given Impulse Only new Impulse from moment of branching on are conducted over the new branch old Impulse are not reconducted Branching can be applied multiple times",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "branchNerveFrom",
        "normalized": "Nerve a AxonConductive b c-\u003eIO(Nerve a AxonConductive b c)",
        "package": "Etage",
        "partial": "Nerve From",
        "signature": "Nerve from AxonConductive for forConductivity-\u003eIO(Nerve from AxonConductive for forConductivity)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:cross",
      "description": {
        "fct-descr": "\u003cp\u003eCrosses axons around in a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e. Useful probably only when you want to \u003ccode\u003eattachTo\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e so that it looks as \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es are comming\nfrom a \u003ccode\u003eNeuron\u003c/code\u003e and are not send to a \u003ccode\u003eNeuron\u003c/code\u003e. So in this case you are \u003ccode\u003eattach\u003c/code\u003eing \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e in a direction away from a \u003ccode\u003eNeuron\u003c/code\u003e and not\ntowards it, what is a default.\n\u003c/p\u003e\u003cp\u003eFor example, you can do something like this:\n\u003c/p\u003e\u003cpre\u003e nerveDump \u003c- (growNeuron :: NerveOnlyFor DumpNeuron) defaultOptions\n nerveOnes \u003c- (growNeuron :: NerveOnlyFrom (SequenceNeuron Int)) (\\o -\u003e o { valueSource = repeat 1 })\n nerveTwos \u003c- (growNeuron :: NerveOnlyFrom (SequenceNeuron Int)) (\\o -\u003e o { valueSource = repeat 2 })\n \n nerveOnes `attachTo` [TranslatableFor (cross nerveTwos)]\n nerveTwos `attachTo` [TranslatableFor nerveDump]\n\u003c/pre\u003e\u003cp\u003eOf course in this example you could simply \u003ccode\u003eattachTo\u003c/code\u003e both \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es to \u003ca\u003eControl.Etage.Dump\u003c/a\u003e \u003ccode\u003eNeuron\u003c/code\u003e. So \u003ccode\u003e\u003ca\u003ecross\u003c/a\u003e\u003c/code\u003e is probably useful\nonly when using \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es unattached to its \u003ccode\u003eNeuron\u003c/code\u003e (made by \u003ccode\u003e\u003ca\u003egrowNerve\u003c/a\u003e\u003c/code\u003e, for example) and/or when using such \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es with\n\u003ccode\u003eNeuron\u003c/code\u003es which operate on how \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es are \u003ccode\u003epropagate\u003c/code\u003ed (or \u003ccode\u003efuse\u003c/code\u003ed).\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for forConductivity -\u003e Nerve for forConductivity from fromConductivity",
        "fct-source": "src/Control-Etage-Internals.html#cross",
        "fct-type": "function",
        "title": "cross"
      },
      "index": {
        "description": "Crosses axons around in Nerve Useful probably only when you want to attachTo Nerve so that it looks as Impulse are comming from Neuron and are not send to Neuron So in this case you are attach ing Nerve in direction away from Neuron and not towards it what is default For example you can do something like this nerveDump growNeuron NerveOnlyFor DumpNeuron defaultOptions nerveOnes growNeuron NerveOnlyFrom SequenceNeuron Int valueSource repeat nerveTwos growNeuron NerveOnlyFrom SequenceNeuron Int valueSource repeat nerveOnes attachTo TranslatableFor cross nerveTwos nerveTwos attachTo TranslatableFor nerveDump Of course in this example you could simply attachTo both Nerve to Control.Etage.Dump Neuron So cross is probably useful only when using Nerve unattached to its Neuron made by growNerve for example and or when using such Nerve with Neuron which operate on how Impulse are propagate or fuse",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "cross",
        "normalized": "Nerve a b c d-\u003eNerve c d a b",
        "package": "Etage",
        "partial": "",
        "signature": "Nerve from fromConductivity for forConductivity-\u003eNerve for forConductivity from fromConductivity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:defaultOptions",
      "description": {
        "fct-descr": "\u003cp\u003eFunction which can be used as an argument to \u003ccode\u003egrowNeuron\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003e which leaves default options as they are.\n\u003c/p\u003e\u003cp\u003eIn fact it is just an \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003eentity function.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "NeuronOptions n -\u003e NeuronOptions n",
        "fct-source": "src/Control-Etage-Externals.html#defaultOptions",
        "fct-type": "function",
        "title": "defaultOptions"
      },
      "index": {
        "description": "Function which can be used as an argument to growNeuron or attach which leaves default options as they are In fact it is just an id entity function",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "defaultOptions",
        "normalized": "NeuronOptions a-\u003eNeuronOptions a",
        "package": "Etage",
        "partial": "Options",
        "signature": "NeuronOptions n-\u003eNeuronOptions n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:detach",
      "description": {
        "fct-descr": "\u003cp\u003eInitiates \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing of a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e by throwing a \u003ccode\u003e\u003ca\u003eDissolveException\u003c/a\u003e\u003c/code\u003e. To be used outside of a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "LiveNeuron -\u003e IO ()",
        "fct-source": "src/Control-Etage-Externals.html#detach",
        "fct-type": "function",
        "title": "detach"
      },
      "index": {
        "description": "Initiates dissolve ing of Neuron by throwing DissolveException To be used outside of Neuron",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "detach",
        "normalized": "LiveNeuron-\u003eIO()",
        "package": "Etage",
        "partial": "",
        "signature": "LiveNeuron-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:detachAndWait",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003edetachAndWait\u003c/a\u003e\u003c/code\u003e but it also waits \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e to finish \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "LiveNeuron -\u003e IO ()",
        "fct-source": "src/Control-Etage-Externals.html#detachAndWait",
        "fct-type": "function",
        "title": "detachAndWait"
      },
      "index": {
        "description": "Similar to detachAndWait but it also waits Neuron to finish dissolve ing",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "detachAndWait",
        "normalized": "LiveNeuron-\u003eIO()",
        "package": "Etage",
        "partial": "And Wait",
        "signature": "LiveNeuron-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:detachMany",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003edetach\u003c/a\u003e\u003c/code\u003e but for many \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es at the same time. It initiates \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing in the list order.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "[LiveNeuron] -\u003e IO ()",
        "fct-source": "src/Control-Etage-Externals.html#detachMany",
        "fct-type": "function",
        "title": "detachMany"
      },
      "index": {
        "description": "Similar to detach but for many Neuron at the same time It initiates dissolve ing in the list order",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "detachMany",
        "normalized": "[LiveNeuron]-\u003eIO()",
        "package": "Etage",
        "partial": "Many",
        "signature": "[LiveNeuron]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:detachManyAndWait",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003edetachAndWait\u003c/a\u003e\u003c/code\u003e but for many \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es at the same time. It first initiates \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing in the list order and then\nwait for all \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es to finish \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "[LiveNeuron] -\u003e IO ()",
        "fct-source": "src/Control-Etage-Externals.html#detachManyAndWait",
        "fct-type": "function",
        "title": "detachManyAndWait"
      },
      "index": {
        "description": "Similar to detachAndWait but for many Neuron at the same time It first initiates dissolve ing in the list order and then wait for all Neuron to finish dissolve ing",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "detachManyAndWait",
        "normalized": "[LiveNeuron]-\u003eIO()",
        "package": "Etage",
        "partial": "Many And Wait",
        "signature": "[LiveNeuron]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:dissolve",
      "description": {
        "fct-descr": "\u003cp\u003eIn this phase everything should be cleaned up and deinitialized. If you have \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003en child \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es you should take care\n here to \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e them too. You can use \u003ccode\u003e\u003ca\u003edetachAndWait\u003c/a\u003e\u003c/code\u003e for that (or \u003ccode\u003e\u003ca\u003edetachManyAndWait\u003c/a\u003e\u003c/code\u003e if you have more of them).\n By default it does nothing.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "n -\u003e IO ()",
        "fct-source": "src/Control-Etage-Externals.html#dissolve",
        "fct-type": "method",
        "title": "dissolve"
      },
      "index": {
        "description": "In this phase everything should be cleaned up and deinitialized If you have grow child Neuron you should take care here to dissolve them too You can use detachAndWait for that or detachManyAndWait if you have more of them By default it does nothing",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "dissolve",
        "normalized": "a-\u003eIO()",
        "package": "Etage",
        "partial": "",
        "signature": "n-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:dissolving",
      "description": {
        "fct-descr": "\u003cp\u003eInitiates \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing of a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e by throwing a \u003ccode\u003e\u003ca\u003eDissolvingException\u003c/a\u003e\u003c/code\u003e. To be used inside a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e to maybe prematurely\nfinish its life but more importantly to initiate \u003ccode\u003e\u003ca\u003edissolve\u003c/a\u003e\u003c/code\u003e-ing in the parent \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e (or in \u003ccode\u003eIncubation\u003c/code\u003e). As an argument\nit is accustomed to pass a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e value as passed to \u003ccode\u003e\u003ca\u003elive\u003c/a\u003e\u003c/code\u003e method.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "n -\u003e IO a",
        "fct-source": "src/Control-Etage-Externals.html#dissolving",
        "fct-type": "function",
        "title": "dissolving"
      },
      "index": {
        "description": "Initiates dissolve ing of Neuron by throwing DissolvingException To be used inside Neuron to maybe prematurely finish its life but more importantly to initiate dissolve ing in the parent Neuron or in Incubation As an argument it is accustomed to pass Neuron value as passed to live method",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "dissolving",
        "normalized": "a-\u003eIO b",
        "package": "Etage",
        "partial": "",
        "signature": "n-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:fuse",
      "description": {
        "fct-descr": "\u003cp\u003eIt \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003es an internal \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which \u003ccode\u003e\u003ca\u003efuse\u003c/a\u003e\u003c/code\u003es \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es received from given \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es using the given function, sending them over\nthe resulting \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003en \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etranslate\u003c/a\u003e\u003c/code\u003e-ing received \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es as necessary.\n\u003c/p\u003e\u003cp\u003eThe important aspect of \u003ccode\u003e\u003ca\u003efuse\u003c/a\u003e\u003c/code\u003e-ing is its synchronization behavior, as it requires exactly one \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e from each given \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e at\na time to \u003ccode\u003e\u003ca\u003efuse\u003c/a\u003e\u003c/code\u003e them together. So it is important that all given \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es have more or less the equal density of \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es, otherwise\nqueues of some \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es will grow unproportionally because of the stalled \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es, causing at least a memory leak.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eimpulseFuser\u003c/code\u003e helper function can maybe help you with defining fusing function. \u003ccode\u003efuseWith\u003c/code\u003e uses type of the given function to construct\ntype of the resulting \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e so probably too polymorphic type will give you problems.\n\u003c/p\u003e\u003cp\u003eCheck \u003ccode\u003efuseWith\u003c/code\u003e for a more high-level function (of \u003ccode\u003eIncubation\u003c/code\u003e) taking care of all the details (like branching \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es as necessary).\nUse this function only if you are dealing with \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003eing and \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003eing of \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es directly.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "[TranslatableFrom i] -\u003e (ImpulseTime -\u003e [i] -\u003e [j]) -\u003e IO (Nerve (FuseFromImpulse i j) AxonConductive (FuseForImpulse i j) AxonNonConductive)",
        "fct-source": "src/Control-Etage-Fuse.html#fuse",
        "fct-type": "function",
        "title": "fuse"
      },
      "index": {
        "description": "It grow an internal Neuron which fuse Impulse received from given Nerve using the given function sending them over the resulting grow Nerve translate ing received Impulse as necessary The important aspect of fuse ing is its synchronization behavior as it requires exactly one Impulse from each given Nerve at time to fuse them together So it is important that all given Nerve have more or less the equal density of Impulse otherwise queues of some Nerve will grow unproportionally because of the stalled Impulse causing at least memory leak impulseFuser helper function can maybe help you with defining fusing function fuseWith uses type of the given function to construct type of the resulting Nerve so probably too polymorphic type will give you problems Check fuseWith for more high-level function of Incubation taking care of all the details like branching Nerve as necessary Use this function only if you are dealing with grow ing and attach ing of Nerve directly",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "fuse",
        "normalized": "[TranslatableFrom a]-\u003e(ImpulseTime-\u003e[a]-\u003e[b])-\u003eIO(Nerve(FuseFromImpulse a b)AxonConductive(FuseForImpulse a b)AxonNonConductive)",
        "package": "Etage",
        "partial": "",
        "signature": "[TranslatableFrom i]-\u003e(ImpulseTime-\u003e[i]-\u003e[j])-\u003eIO(Nerve(FuseFromImpulse i j)AxonConductive(FuseForImpulse i j)AxonNonConductive)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:fuseWith",
      "description": {
        "fct-descr": "\u003cp\u003eFuses \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es received from given \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es using the given function, sending them over the resulting \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003en \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e. \n\u003ccode\u003e\u003ca\u003efuseWith\u003c/a\u003e\u003c/code\u003e takes care of all the details (like branching \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es as necessary).\n\u003c/p\u003e\u003cp\u003eThe important aspect of \u003ccode\u003e\u003ca\u003efuse\u003c/a\u003e\u003c/code\u003e-ing is its synchronization behavior, as it requires exactly one \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e from each given \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e at\na time to \u003ccode\u003e\u003ca\u003efuse\u003c/a\u003e\u003c/code\u003e them together. So it is important that all given \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es have more or less the equal density of \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es, otherwise\nqueues of some \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es will grow unproportionally because of the stalled \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es, causing at least a memory leak.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eimpulseFuser\u003c/code\u003e helper function can maybe help you with defining fusing function. \u003ccode\u003e\u003ca\u003efuseWith\u003c/a\u003e\u003c/code\u003e uses type of the given function to construct\ntype of the resulting \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e so probably too polymorphic type will give you problems.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003e\u003ca\u003efuse\u003c/a\u003e\u003c/code\u003e-ing by \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003eing two \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es together can be achived like this:\n\u003c/p\u003e\u003cpre\u003e incubate $ do\n   nerveRandom1 \u003c- (growNeuron :: NerveOnlyFrom (SequenceNeuron Int)) defaultOptions\n   nerveRandom2 \u003c- (growNeuron :: NerveOnlyFrom (SequenceNeuron Int)) defaultOptions\n   nerveDump \u003c- (growNeuron :: NerveOnlyFor DumpNeuron) defaultOptions\n   \n   nerveFused \u003c- [TranslatableFrom nerveRandom1, TranslatableFrom nerveRandom2] `fuseWith` (impulseFuser ((: []) . sum . concat))\n   \n   nerveFused `attachTo` [TranslatableFor nerveDump]\n\u003c/pre\u003e\u003cp\u003eInternally it uses \u003ccode\u003e\u003ca\u003efuse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "[TranslatableFrom i] -\u003e (ImpulseTime -\u003e [i] -\u003e [j]) -\u003e Incubation (Nerve (FuseFromImpulse i j) AxonConductive (FuseForImpulse i j) AxonNonConductive)",
        "fct-source": "src/Control-Etage-Incubator.html#fuseWith",
        "fct-type": "function",
        "title": "fuseWith"
      },
      "index": {
        "description": "Fuses Impulse received from given Nerve using the given function sending them over the resulting grow Nerve fuseWith takes care of all the details like branching Nerve as necessary The important aspect of fuse ing is its synchronization behavior as it requires exactly one Impulse from each given Nerve at time to fuse them together So it is important that all given Nerve have more or less the equal density of Impulse otherwise queues of some Nerve will grow unproportionally because of the stalled Impulse causing at least memory leak impulseFuser helper function can maybe help you with defining fusing function fuseWith uses type of the given function to construct type of the resulting Nerve so probably too polymorphic type will give you problems For example fuse ing by sum ing two Impulse together can be achived like this incubate do nerveRandom1 growNeuron NerveOnlyFrom SequenceNeuron Int defaultOptions nerveRandom2 growNeuron NerveOnlyFrom SequenceNeuron Int defaultOptions nerveDump growNeuron NerveOnlyFor DumpNeuron defaultOptions nerveFused TranslatableFrom nerveRandom1 TranslatableFrom nerveRandom2 fuseWith impulseFuser sum concat nerveFused attachTo TranslatableFor nerveDump Internally it uses fuse",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "fuseWith",
        "normalized": "[TranslatableFrom a]-\u003e(ImpulseTime-\u003e[a]-\u003e[b])-\u003eIncubation(Nerve(FuseFromImpulse a b)AxonConductive(FuseForImpulse a b)AxonNonConductive)",
        "package": "Etage",
        "partial": "With",
        "signature": "[TranslatableFrom i]-\u003e(ImpulseTime-\u003e[i]-\u003e[j])-\u003eIncubation(Nerve(FuseFromImpulse i j)AxonConductive(FuseForImpulse i j)AxonNonConductive)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:fuserFun",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function for use with \u003ccode\u003efuseWith\u003c/code\u003e (and \u003ccode\u003efuse\u003c/code\u003e) which wraps given function with \u003ccode\u003e\u003ca\u003eimpulseValue\u003c/a\u003e\u003c/code\u003e before it and \u003ccode\u003e\u003ca\u003eIValue\u003c/a\u003e\u003c/code\u003e after.\n\u003c/p\u003e\u003cp\u003eFor example, you can define a fusing function which makes a \u003ccode\u003e\u003ca\u003eproduct\u003c/a\u003e\u003c/code\u003e of fusing \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es (more precisely their data payload):\n\u003c/p\u003e\u003cpre\u003e impulseFuser ((: []) . product . concat)\n\u003c/pre\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "([ImpulseValue] -\u003e [r]) -\u003e ImpulseTime -\u003e [AnyImpulse] -\u003e [IValue r]",
        "fct-source": "src/Control-Etage-Externals.html#fuserFun",
        "fct-type": "function",
        "title": "fuserFun"
      },
      "index": {
        "description": "Helper function for use with fuseWith and fuse which wraps given function with impulseValue before it and IValue after For example you can define fusing function which makes product of fusing Impulse more precisely their data payload impulseFuser product concat",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "fuserFun",
        "normalized": "([ImpulseValue]-\u003e[a])-\u003eImpulseTime-\u003e[AnyImpulse]-\u003e[IValue a]",
        "package": "Etage",
        "partial": "Fun",
        "signature": "([ImpulseValue]-\u003e[r])-\u003eImpulseTime-\u003e[AnyImpulse]-\u003e[IValue r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:getContentsForNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a lazy list of \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es for a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e does not need to be conductive,\nit will block indefinitely (until an exception) in this case.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for forConductivity -\u003e IO [for]",
        "fct-source": "src/Control-Etage-Externals.html#getContentsForNeuron",
        "fct-type": "function",
        "title": "getContentsForNeuron"
      },
      "index": {
        "description": "Returns lazy list of Impulse for Neuron Nerve does not need to be conductive it will block indefinitely until an exception in this case",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "getContentsForNeuron",
        "normalized": "Nerve a b c d-\u003eIO[c]",
        "package": "Etage",
        "partial": "Contents For Neuron",
        "signature": "Nerve from fromConductivity for forConductivity-\u003eIO[for]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:getContentsFromNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a lazy list of \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e has to be conductive.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from AxonConductive for forConductivity -\u003e IO [from]",
        "fct-source": "src/Control-Etage-Externals.html#getContentsFromNeuron",
        "fct-type": "function",
        "title": "getContentsFromNeuron"
      },
      "index": {
        "description": "Returns lazy list of Impulse from Neuron Nerve has to be conductive",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "getContentsFromNeuron",
        "normalized": "Nerve a AxonConductive b c-\u003eIO[a]",
        "package": "Etage",
        "partial": "Contents From Neuron",
        "signature": "Nerve from AxonConductive for forConductivity-\u003eIO[from]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:getCurrentImpulseTime",
      "description": {
        "fct-descr": "\u003cp\u003eReturns current time. Useful when creating new \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "IO ImpulseTime",
        "fct-source": "src/Control-Etage-Externals.html#getCurrentImpulseTime",
        "fct-type": "function",
        "title": "getCurrentImpulseTime"
      },
      "index": {
        "description": "Returns current time Useful when creating new Impulse",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "getCurrentImpulseTime",
        "normalized": "",
        "package": "Etage",
        "partial": "Current Impulse Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:getForNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eGets an \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. It blocks until an \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e is available. \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e does not need to be conductive,\nit will block indefinitely (until an exception) in this case.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for forConductivity -\u003e IO for",
        "fct-source": "src/Control-Etage-Externals.html#getForNeuron",
        "fct-type": "function",
        "title": "getForNeuron"
      },
      "index": {
        "description": "Gets an Impulse for Neuron It blocks until an Impulse is available Nerve does not need to be conductive it will block indefinitely until an exception in this case",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "getForNeuron",
        "normalized": "Nerve a b c d-\u003eIO c",
        "package": "Etage",
        "partial": "For Neuron",
        "signature": "Nerve from fromConductivity for forConductivity-\u003eIO for"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:getFromNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eGets an \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. It blocks until an \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e is available. \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e has to be conductive.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from AxonConductive for forConductivity -\u003e IO from",
        "fct-source": "src/Control-Etage-Externals.html#getFromNeuron",
        "fct-type": "function",
        "title": "getFromNeuron"
      },
      "index": {
        "description": "Gets an Impulse from Neuron It blocks until an Impulse is available Nerve has to be conductive",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "getFromNeuron",
        "normalized": "Nerve a AxonConductive b c-\u003eIO a",
        "package": "Etage",
        "partial": "From Neuron",
        "signature": "Nerve from AxonConductive for forConductivity-\u003eIO from"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:getNeuronMapCapability",
      "description": {
        "fct-descr": "\u003cp\u003eMethod which returns how should \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e be mapped on capabilities (OS threads). By default returns\n \u003ccode\u003e\u003ca\u003eNeuronFreelyMapOnCapability\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "NeuronOptions n -\u003e NeuronMapCapability",
        "fct-source": "src/Control-Etage-Externals.html#getNeuronMapCapability",
        "fct-type": "method",
        "title": "getNeuronMapCapability"
      },
      "index": {
        "description": "Method which returns how should Neuron be mapped on capabilities OS threads By default returns NeuronFreelyMapOnCapability",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "getNeuronMapCapability",
        "normalized": "NeuronOptions a-\u003eNeuronMapCapability",
        "package": "Etage",
        "partial": "Neuron Map Capability",
        "signature": "NeuronOptions n-\u003eNeuronMapCapability"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:getNewestForNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ewaitAndSlurpForNeuron\u003c/a\u003e\u003c/code\u003e but it will return only the newest \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e for every \u003ccode\u003e\u003ca\u003eNeuronForImpulse\u003c/a\u003e\u003c/code\u003e data type constructor.\nThis is the same as \u003ccode\u003ehead \u003c$\u003e waitAndSlurpForNeuron\u003c/code\u003e iff \u003ccode\u003e\u003ca\u003eNeuronForImpulse\u003c/a\u003e\u003c/code\u003e has only one constructor defined. Otherwise it can\nreturn multiple \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es, for each constructor one.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for forConductivity -\u003e IO [for]",
        "fct-source": "src/Control-Etage-Externals.html#getNewestForNeuron",
        "fct-type": "function",
        "title": "getNewestForNeuron"
      },
      "index": {
        "description": "Similar to waitAndSlurpForNeuron but it will return only the newest Impulse for every NeuronForImpulse data type constructor This is the same as head waitAndSlurpForNeuron iff NeuronForImpulse has only one constructor defined Otherwise it can return multiple Impulse for each constructor one",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "getNewestForNeuron",
        "normalized": "Nerve a b c d-\u003eIO[c]",
        "package": "Etage",
        "partial": "Newest For Neuron",
        "signature": "Nerve from fromConductivity for forConductivity-\u003eIO[for]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:grow",
      "description": {
        "fct-descr": "\u003cp\u003eThe first phase in a life-cycle of a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003e. In this phase everything should be prepared and initialized.\n It returns a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e value which is then passed to next phases. If you want to use \u003ccode\u003e\u003ca\u003eNeuronOptions\u003c/a\u003e\u003c/code\u003e also in those phases\n you should store them in the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e value. By default returns \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "NeuronOptions n -\u003e IO n",
        "fct-source": "src/Control-Etage-Externals.html#grow",
        "fct-type": "method",
        "title": "grow"
      },
      "index": {
        "description": "The first phase in life-cycle of Neuron is to grow In this phase everything should be prepared and initialized It returns Neuron value which is then passed to next phases If you want to use NeuronOptions also in those phases you should store them in the Neuron value By default returns undefined",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "grow",
        "normalized": "NeuronOptions a-\u003eIO a",
        "package": "Etage",
        "partial": "",
        "signature": "NeuronOptions n-\u003eIO n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:growNerve",
      "description": {
        "fct-descr": "\u003cp\u003eGrows an unattached \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e. By specifying type of the \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e you can specify conductivity of both directions (which is then\ntype checked for consistency around the program) and thus specify which \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es you are interested in (and thus limit possible\nmemory leak). With type of \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es this \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e is capable of conducting you can also specify which \u003ccode\u003eNeuron\u003c/code\u003e you are interested\nin \u003ccode\u003egrow\u003c/code\u003eing on the one end of the \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, you could grow a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e for \u003ca\u003eControl.Etage.Sequence\u003c/a\u003e \u003ccode\u003eNeuron\u003c/code\u003e and \u003ccode\u003eNeuron\u003c/code\u003e itself like this:\n\u003c/p\u003e\u003cpre\u003e nerve \u003c- growNerve :: IO (Nerve (SequenceFromImpulse Int) AxonConductive (SequenceForImpulse Int) AxonNonConductive)\n neuron \u003c- attach defaultOptions nerve\n\u003c/pre\u003e\u003cp\u003eand for example print all \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es as they are coming in:\n\u003c/p\u003e\u003cpre\u003e print =\u003c\u003c getContentsFromNeuron nerve\n\u003c/pre\u003e\u003cp\u003eCheck \u003ccode\u003egrowNeuron\u003c/code\u003e for a more high-level function (of \u003ccode\u003eIncubation\u003c/code\u003e) which both \u003ccode\u003egrow\u003c/code\u003es a \u003ccode\u003eNeuron\u003c/code\u003e and corresponding \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e taking\ncare of all the details. Use this function only if you need decoupled \u003ccode\u003egrow\u003c/code\u003eing.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "IO (Nerve from fromConductivity for forConductivity)",
        "fct-source": "src/Control-Etage-Internals.html#growNerve",
        "fct-type": "function",
        "title": "growNerve"
      },
      "index": {
        "description": "Grows an unattached Nerve By specifying type of the Nerve you can specify conductivity of both directions which is then type checked for consistency around the program and thus specify which Impulse you are interested in and thus limit possible memory leak With type of Impulse this Nerve is capable of conducting you can also specify which Neuron you are interested in grow ing on the one end of the Nerve For example you could grow Nerve for Control.Etage.Sequence Neuron and Neuron itself like this nerve growNerve IO Nerve SequenceFromImpulse Int AxonConductive SequenceForImpulse Int AxonNonConductive neuron attach defaultOptions nerve and for example print all Impulse as they are coming in print getContentsFromNeuron nerve Check growNeuron for more high-level function of Incubation which both grow Neuron and corresponding Nerve taking care of all the details Use this function only if you need decoupled grow ing",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "growNerve",
        "normalized": "",
        "package": "Etage",
        "partial": "Nerve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:growNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eGrows a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e, taking a function which changes default options and returning a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003eed to the \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInternally it combines \u003ccode\u003e\u003ca\u003egrowNerve\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "(NeuronOptions n -\u003e NeuronOptions n) -\u003e Incubation (Nerve (NeuronFromImpulse n) fromConductivity (NeuronForImpulse n) forConductivity)",
        "fct-source": "src/Control-Etage-Incubator.html#growNeuron",
        "fct-type": "function",
        "title": "growNeuron"
      },
      "index": {
        "description": "Grows Neuron taking function which changes default options and returning Nerve attach ed to the Neuron Internally it combines growNerve and attach",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "growNeuron",
        "normalized": "(NeuronOptions a-\u003eNeuronOptions a)-\u003eIncubation(Nerve(NeuronFromImpulse a)b(NeuronForImpulse a)c)",
        "package": "Etage",
        "partial": "Neuron",
        "signature": "(NeuronOptions n-\u003eNeuronOptions n)-\u003eIncubation(Nerve(NeuronFromImpulse n)fromConductivity(NeuronForImpulse n)forConductivity)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:impulseCompare",
      "description": {
        "fct-descr": "\u003cp\u003eThis function defines ordering between \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es as ordering first by \u003ccode\u003e\u003ca\u003eimpulseTime\u003c/a\u003e\u003c/code\u003e values and then by \u003ccode\u003e\u003ca\u003eimpulseValue\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "i -\u003e j -\u003e Ordering",
        "fct-source": "src/Control-Etage-Externals.html#impulseCompare",
        "fct-type": "function",
        "title": "impulseCompare"
      },
      "index": {
        "description": "This function defines ordering between Impulse as ordering first by impulseTime values and then by impulseValue values",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "impulseCompare",
        "normalized": "a-\u003eb-\u003eOrdering",
        "package": "Etage",
        "partial": "Compare",
        "signature": "i-\u003ej-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:impulseEq",
      "description": {
        "fct-descr": "\u003cp\u003eThis function defines equality between \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es as equality of \u003ccode\u003e\u003ca\u003eimpulseTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eimpulseValue\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "i -\u003e j -\u003e Bool",
        "fct-source": "src/Control-Etage-Externals.html#impulseEq",
        "fct-type": "function",
        "title": "impulseEq"
      },
      "index": {
        "description": "This function defines equality between Impulse as equality of impulseTime and impulseValue values",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "impulseEq",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "Etage",
        "partial": "Eq",
        "signature": "i-\u003ej-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:impulseListTimestamp",
      "description": {
        "fct-descr": "\u003cp\u003eTime when the \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e was created/finalized.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "ImpulseTime",
        "fct-source": "src/Control-Etage-Externals.html#IList",
        "fct-type": "function",
        "title": "impulseListTimestamp"
      },
      "index": {
        "description": "Time when the Impulse was created finalized",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "impulseListTimestamp",
        "normalized": "",
        "package": "Etage",
        "partial": "List Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:impulseTime",
      "description": {
        "fct-descr": "\u003cp\u003eThis method should return a timestamp when the \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e was created/finalized what should be the moment just before it is send\n over the \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e, the moment it formed into its final form and started leaving the \u003ccode\u003eNeuron\u003c/code\u003e. As Haskell is a lazy language this\n does not mean that at that moment all values the \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e defines are really already evaluated (they are evaluated when they are\n needed, probably in some other \u003ccode\u003eNeuron\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eYou can do something like:\n\u003c/p\u003e\u003cpre\u003e time \u003c- getCurrentImpulseTime\n sendFromNeuron nerve YourImpulse { impulseTimestamp = time, ... }\n\u003c/pre\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "i -\u003e ImpulseTime",
        "fct-source": "src/Control-Etage-Internals.html#impulseTime",
        "fct-type": "method",
        "title": "impulseTime"
      },
      "index": {
        "description": "This method should return timestamp when the Impulse was created finalized what should be the moment just before it is send over the Nerve the moment it formed into its final form and started leaving the Neuron As Haskell is lazy language this does not mean that at that moment all values the Impulse defines are really already evaluated they are evaluated when they are needed probably in some other Neuron You can do something like time getCurrentImpulseTime sendFromNeuron nerve YourImpulse impulseTimestamp time",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "impulseTime",
        "normalized": "a-\u003eImpulseTime",
        "package": "Etage",
        "partial": "Time",
        "signature": "i-\u003eImpulseTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:impulseValue",
      "description": {
        "fct-descr": "\u003cp\u003eThis method should return all values (data payload) the \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e defines. Currently order and format is not yet finalized so\n it is just a list of \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e values in some order (for now it probably should be the order in which the values are defined\n in the \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e constructor).\n\u003c/p\u003e\u003cp\u003eIt is meant to allow general \u003ccode\u003eNeurons\u003c/code\u003e which can work on any \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e type to be developed. For example \u003ccode\u003eNeuron\u003c/code\u003es which\n implement some machine learning or data mining algorithms. It is on purpose that values are cleared of any semantic\n meaning so algorithms have better chance not to get in touch with some unintended domain specific knowledge.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "i -\u003e ImpulseValue",
        "fct-source": "src/Control-Etage-Internals.html#impulseValue",
        "fct-type": "method",
        "title": "impulseValue"
      },
      "index": {
        "description": "This method should return all values data payload the Impulse defines Currently order and format is not yet finalized so it is just list of Rational values in some order for now it probably should be the order in which the values are defined in the Impulse constructor It is meant to allow general Neurons which can work on any Impulse type to be developed For example Neuron which implement some machine learning or data mining algorithms It is on purpose that values are cleared of any semantic meaning so algorithms have better chance not to get in touch with some unintended domain specific knowledge",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "impulseValue",
        "normalized": "a-\u003eImpulseValue",
        "package": "Etage",
        "partial": "Value",
        "signature": "i-\u003eImpulseValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:impulseValueTimestamp",
      "description": {
        "fct-descr": "\u003cp\u003eTime when the \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e was created/finalized.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "ImpulseTime",
        "fct-source": "src/Control-Etage-Externals.html#IValue",
        "fct-type": "function",
        "title": "impulseValueTimestamp"
      },
      "index": {
        "description": "Time when the Impulse was created finalized",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "impulseValueTimestamp",
        "normalized": "",
        "package": "Etage",
        "partial": "Value Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:incubate",
      "description": {
        "fct-descr": "\u003cp\u003eRuns an \u003ccode\u003e\u003ca\u003eIncubation\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003eing \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003eing \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es and after that waiting for them to finish and cleanup.\nIt rethrows any exception which might have been thrown.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Incubation () -\u003e IO ()",
        "fct-source": "src/Control-Etage-Incubator.html#incubate",
        "fct-type": "function",
        "title": "incubate"
      },
      "index": {
        "description": "Runs an Incubation grow ing Neuron and attach ing Nerve and after that waiting for them to finish and cleanup It rethrows any exception which might have been thrown",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "incubate",
        "normalized": "Incubation()-\u003eIO()",
        "package": "Etage",
        "partial": "",
        "signature": "Incubation()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:list",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e of values of the \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "[r]",
        "fct-source": "src/Control-Etage-Externals.html#IList",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "list of values of the Impulse",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "list",
        "normalized": "[a]",
        "package": "Etage",
        "partial": "",
        "signature": "[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:listFuser",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function for use with \u003ccode\u003efuseWith\u003c/code\u003e (and \u003ccode\u003efuse\u003c/code\u003e) which converts a list of \u003ccode\u003e\u003ca\u003eIValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es to a \u003ccode\u003e\u003ca\u003eIList\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e. If given list is empty no\nresulting \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e is made.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "ImpulseTime -\u003e [IValue r] -\u003e [IList r]",
        "fct-source": "src/Control-Etage-Externals.html#listFuser",
        "fct-type": "function",
        "title": "listFuser"
      },
      "index": {
        "description": "Helper function for use with fuseWith and fuse which converts list of IValue Impulse to IList Impulse If given list is empty no resulting Impulse is made",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "listFuser",
        "normalized": "ImpulseTime-\u003e[IValue a]-\u003e[IList a]",
        "package": "Etage",
        "partial": "Fuser",
        "signature": "ImpulseTime-\u003e[IValue r]-\u003e[IList r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:live",
      "description": {
        "fct-descr": "\u003cp\u003eAfter \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003eing \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elive\u003c/a\u003e\u003c/code\u003es. This is a phase in which it should read \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from its \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e and send them back,\n as defined by its logic/purpose. Some \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es only read, some only send, some do both or none.\n\u003c/p\u003e\u003cp\u003eMost \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es do never finish this phase on its own (only by exception), but if your \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e does, consider using \u003ccode\u003e\u003ca\u003edissolving\u003c/a\u003e\u003c/code\u003e\n at the end which initiates dissolving also elsewhere in the network (or in the parent \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e, if it has one). Examples\n of such \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es are \u003ca\u003eControl.Etage.Timeout\u003c/a\u003e and \u003ca\u003eControl.Etage.Sequence\u003c/a\u003e (once a given sequence ends).\n\u003c/p\u003e\u003cp\u003eBy default it blocks indefinitely (until an exception).\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve (NeuronFromImpulse n) fromConductivity (NeuronForImpulse n) forConductivity -\u003e n -\u003e IO ()",
        "fct-source": "src/Control-Etage-Externals.html#live",
        "fct-type": "method",
        "title": "live"
      },
      "index": {
        "description": "After grow ing Neuron live This is phase in which it should read Impulse from its Nerve and send them back as defined by its logic purpose Some Neuron only read some only send some do both or none Most Neuron do never finish this phase on its own only by exception but if your Neuron does consider using dissolving at the end which initiates dissolving also elsewhere in the network or in the parent Neuron if it has one Examples of such Neuron are Control.Etage.Timeout and Control.Etage.Sequence once given sequence ends By default it blocks indefinitely until an exception",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "live",
        "normalized": "Nerve(NeuronFromImpulse a)b(NeuronForImpulse a)c-\u003ea-\u003eIO()",
        "package": "Etage",
        "partial": "",
        "signature": "Nerve(NeuronFromImpulse n)fromConductivity(NeuronForImpulse n)forConductivity-\u003en-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:maybeGetForNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003egetForNeuron\u003c/a\u003e\u003c/code\u003e just that it does not block if \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e is not available. \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e does not need to be conductive,\nit will always return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e in this case.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for forConductivity -\u003e IO (Maybe for)",
        "fct-source": "src/Control-Etage-Externals.html#maybeGetForNeuron",
        "fct-type": "function",
        "title": "maybeGetForNeuron"
      },
      "index": {
        "description": "Similar to getForNeuron just that it does not block if Impulse is not available Nerve does not need to be conductive it will always return Nothing in this case",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "maybeGetForNeuron",
        "normalized": "Nerve a b c d-\u003eIO(Maybe c)",
        "package": "Etage",
        "partial": "Get For Neuron",
        "signature": "Nerve from fromConductivity for forConductivity-\u003eIO(Maybe for)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:maybeGetFromNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003egetFromNeuron\u003c/a\u003e\u003c/code\u003e just that it does not block if \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e is not available.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from AxonConductive for forConductivity -\u003e IO (Maybe from)",
        "fct-source": "src/Control-Etage-Externals.html#maybeGetFromNeuron",
        "fct-type": "function",
        "title": "maybeGetFromNeuron"
      },
      "index": {
        "description": "Similar to getFromNeuron just that it does not block if Impulse is not available",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "maybeGetFromNeuron",
        "normalized": "Nerve a AxonConductive b c-\u003eIO(Maybe a)",
        "package": "Etage",
        "partial": "Get From Neuron",
        "signature": "Nerve from AxonConductive for forConductivity-\u003eIO(Maybe from)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:mkDefaultOptions",
      "description": {
        "fct-descr": "\u003cp\u003eMethod which returns default values for options. By default returns \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "IO (NeuronOptions n)",
        "fct-source": "src/Control-Etage-Externals.html#mkDefaultOptions",
        "fct-type": "method",
        "title": "mkDefaultOptions"
      },
      "index": {
        "description": "Method which returns default values for options By default returns undefined",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "mkDefaultOptions",
        "normalized": "",
        "package": "Etage",
        "partial": "Default Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:mkNeuronMapOnRandomCapability",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eNeuronMapOnCapability\u003c/a\u003e\u003c/code\u003e value with a chosen capability picked by random. Useful when you have to map few \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es to the\nsame capability (because of an eternal (FFI) library limitations) but it does not matter to which one. So you create this value\nand pass it as an option to all those \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es, making sure that they will return it with their \u003ccode\u003e\u003ca\u003egetNeuronMapCapability\u003c/a\u003e\u003c/code\u003e method.\nFor example, sometimes you have to assure that both your \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e and \u003ca\u003eControl.Etage.Worker\u003c/a\u003e \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e are running on the same\ncapability so that you can correctly offload lengthly IO actions to it. This makes both \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es in fact still running in one\nthread (which is often a limitation of external libraries), Haskell taking care of interleaving \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es IO actions.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "IO NeuronMapCapability",
        "fct-source": "src/Control-Etage-Externals.html#mkNeuronMapOnRandomCapability",
        "fct-type": "function",
        "title": "mkNeuronMapOnRandomCapability"
      },
      "index": {
        "description": "Creates NeuronMapOnCapability value with chosen capability picked by random Useful when you have to map few Neuron to the same capability because of an eternal FFI library limitations but it does not matter to which one So you create this value and pass it as an option to all those Neuron making sure that they will return it with their getNeuronMapCapability method For example sometimes you have to assure that both your Neuron and Control.Etage.Worker Neuron are running on the same capability so that you can correctly offload lengthly IO actions to it This makes both Neuron in fact still running in one thread which is often limitation of external libraries Haskell taking care of interleaving Neuron IO actions",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "mkNeuronMapOnRandomCapability",
        "normalized": "",
        "package": "Etage",
        "partial": "Neuron Map On Random Capability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:prepareEnvironment",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function which does some common initialization. Currently it sets \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e buffering to \u003ccode\u003e\u003ca\u003eLineBuffering\u003c/a\u003e\u003c/code\u003e so that when\nmultiple \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003es print to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e output is not mixed. It also installs handlers for \u003ccode\u003e\u003ca\u003ekeyboardSignal\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esoftwareTermination\u003c/a\u003e\u003c/code\u003e\nsignals so that cleanup in \u003ccode\u003eIncubation\u003c/code\u003e works as expected.\n\u003c/p\u003e\u003cp\u003eUsing it has also an useful side-effect of Haskell not throwing \u003ccode\u003e\u003ca\u003eBlockedIndefinitelyOnMVar\u003c/a\u003e\u003c/code\u003e exceptions when the network runs out.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "IO ()",
        "fct-source": "src/Control-Etage-Externals.html#prepareEnvironment",
        "fct-type": "function",
        "title": "prepareEnvironment"
      },
      "index": {
        "description": "Helper function which does some common initialization Currently it sets stderr buffering to LineBuffering so that when multiple Neuron print to stderr output is not mixed It also installs handlers for keyboardSignal and softwareTermination signals so that cleanup in Incubation works as expected Using it has also an useful side-effect of Haskell not throwing BlockedIndefinitelyOnMVar exceptions when the network runs out",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "prepareEnvironment",
        "normalized": "IO()",
        "package": "Etage",
        "partial": "Environment",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:propagate",
      "description": {
        "fct-descr": "\u003cp\u003eIt \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003es an internal \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e which \u003ccode\u003e\u003ca\u003epropagate\u003c/a\u003e\u003c/code\u003es \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from a given \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e to other \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003etranslate\u003c/a\u003e\u003c/code\u003e-ing as necessary.\n\u003c/p\u003e\u003cp\u003eBe careful if you are \u003ccode\u003e\u003ca\u003epropagate\u003c/a\u003e\u003c/code\u003e-ing the same \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e multiple times as some \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es might already been \u003ccode\u003e\u003ca\u003epropagate\u003c/a\u003e\u003c/code\u003ed and thus are not\navailable anymore to later \u003ccode\u003e\u003ca\u003epropagate\u003c/a\u003e\u003c/code\u003ed \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es. Just list all destination \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es the first time.\n\u003c/p\u003e\u003cp\u003eCheck \u003ccode\u003eattachTo\u003c/code\u003e for a more high-level function (of \u003ccode\u003eIncubation\u003c/code\u003e) taking care of all the details (like branching \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es as necessary).\nUse this function only if you are dealing with \u003ccode\u003e\u003ca\u003egrow\u003c/a\u003e\u003c/code\u003eing and \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003eing of \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003es directly.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from AxonConductive for forConductivity -\u003e [TranslatableFor from] -\u003e IO ()",
        "fct-source": "src/Control-Etage-Propagate.html#propagate",
        "fct-type": "function",
        "title": "propagate"
      },
      "index": {
        "description": "It grow an internal Neuron which propagate Impulse from given Nerve to other Nerve translate ing as necessary Be careful if you are propagate ing the same Nerve multiple times as some Impulse might already been propagate and thus are not available anymore to later propagate Nerve Just list all destination Nerve the first time Check attachTo for more high-level function of Incubation taking care of all the details like branching Nerve as necessary Use this function only if you are dealing with grow ing and attach ing of Nerve directly",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "propagate",
        "normalized": "Nerve a AxonConductive b c-\u003e[TranslatableFor a]-\u003eIO()",
        "package": "Etage",
        "partial": "",
        "signature": "Nerve from AxonConductive for forConductivity-\u003e[TranslatableFor from]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:sendForNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eSends an \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e has to be conductive.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for AxonConductive -\u003e for -\u003e IO ()",
        "fct-source": "src/Control-Etage-Externals.html#sendForNeuron",
        "fct-type": "function",
        "title": "sendForNeuron"
      },
      "index": {
        "description": "Sends an Impulse to Neuron Nerve has to be conductive",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "sendForNeuron",
        "normalized": "Nerve a b c AxonConductive-\u003ec-\u003eIO()",
        "package": "Etage",
        "partial": "For Neuron",
        "signature": "Nerve from fromConductivity for AxonConductive-\u003efor-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:sendFromNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eSends an \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e does not need to be conductive, \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e will be silently dropped in this case.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for forConductivity -\u003e from -\u003e IO ()",
        "fct-source": "src/Control-Etage-Externals.html#sendFromNeuron",
        "fct-type": "function",
        "title": "sendFromNeuron"
      },
      "index": {
        "description": "Sends an Impulse from Neuron Nerve does not need to be conductive Impulse will be silently dropped in this case",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "sendFromNeuron",
        "normalized": "Nerve a b c d-\u003ea-\u003eIO()",
        "package": "Etage",
        "partial": "From Neuron",
        "signature": "Nerve from fromConductivity for forConductivity-\u003efrom-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:sendListForNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eSends all \u003ccode\u003eImpulses\u003c/code\u003e from a given list to a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e has to be conductive.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for AxonConductive -\u003e [for] -\u003e IO ()",
        "fct-source": "src/Control-Etage-Externals.html#sendListForNeuron",
        "fct-type": "function",
        "title": "sendListForNeuron"
      },
      "index": {
        "description": "Sends all Impulses from given list to Neuron Nerve has to be conductive",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "sendListForNeuron",
        "normalized": "Nerve a b c AxonConductive-\u003e[c]-\u003eIO()",
        "package": "Etage",
        "partial": "List For Neuron",
        "signature": "Nerve from fromConductivity for AxonConductive-\u003e[for]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:sendListFromNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eSends all \u003ccode\u003eImpulses\u003c/code\u003e from a given list to a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e does not need to be conductive, \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es will be silently\ndropped in this case.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for forConductivity -\u003e [from] -\u003e IO ()",
        "fct-source": "src/Control-Etage-Externals.html#sendListFromNeuron",
        "fct-type": "function",
        "title": "sendListFromNeuron"
      },
      "index": {
        "description": "Sends all Impulses from given list to Neuron Nerve does not need to be conductive Impulse will be silently dropped in this case",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "sendListFromNeuron",
        "normalized": "Nerve a b c d-\u003e[a]-\u003eIO()",
        "package": "Etage",
        "partial": "List From Neuron",
        "signature": "Nerve from fromConductivity for forConductivity-\u003e[from]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:slurpForNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eGets all immediately available \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es for a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. There could be no \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es available and thus the result is an empty\nlist. Oldest \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e is the last in the list. \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e does not need to be conductive, it will always return an empty list\nin this case.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for forConductivity -\u003e IO [for]",
        "fct-source": "src/Control-Etage-Externals.html#slurpForNeuron",
        "fct-type": "function",
        "title": "slurpForNeuron"
      },
      "index": {
        "description": "Gets all immediately available Impulse for Neuron There could be no Impulse available and thus the result is an empty list Oldest Impulse is the last in the list Nerve does not need to be conductive it will always return an empty list in this case",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "slurpForNeuron",
        "normalized": "Nerve a b c d-\u003eIO[c]",
        "package": "Etage",
        "partial": "For Neuron",
        "signature": "Nerve from fromConductivity for forConductivity-\u003eIO[for]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:slurpFromNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eGets all immediately available \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es from a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e. There could be no \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es available and thus the result is an empty\nlist. Oldest \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e is the last in the list. \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e has to be conductive.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from AxonConductive for forConductivity -\u003e IO [from]",
        "fct-source": "src/Control-Etage-Externals.html#slurpFromNeuron",
        "fct-type": "function",
        "title": "slurpFromNeuron"
      },
      "index": {
        "description": "Gets all immediately available Impulse from Neuron There could be no Impulse available and thus the result is an empty list Oldest Impulse is the last in the list Nerve has to be conductive",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "slurpFromNeuron",
        "normalized": "Nerve a AxonConductive b c-\u003eIO[a]",
        "package": "Etage",
        "partial": "From Neuron",
        "signature": "Nerve from AxonConductive for forConductivity-\u003eIO[from]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etranslate\u003c/a\u003e\u003c/code\u003e gets an \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e of one type and returns a list of \u003ccode\u003eImpulses\u003c/code\u003e of another type.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es should be translated meaningfully, translating values as possible and filling others with reasonable defaults.\n Timestamp should be just copied (translation should be seen as an instantaneous operation as it is a byproduct of type\n constraints and chosen description format of \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es and not something found otherwise in a network.\n Time spend in translation should be seen as a part of time spend in sending of an \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e along a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOne \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e can be translated into multiple other \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es as sometimes some \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es are higher level than other.\n (Translating multiple \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es into one \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e requires keeping a state and should be done in a \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e.) The order is\n important as first \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003es in the list are send first along a \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "i -\u003e [j]",
        "fct-source": "src/Control-Etage-Externals.html#translate",
        "fct-type": "method",
        "title": "translate"
      },
      "index": {
        "description": "translate gets an Impulse of one type and returns list of Impulses of another type Impulse should be translated meaningfully translating values as possible and filling others with reasonable defaults Timestamp should be just copied translation should be seen as an instantaneous operation as it is byproduct of type constraints and chosen description format of Impulse and not something found otherwise in network Time spend in translation should be seen as part of time spend in sending of an Impulse along Nerve One Impulse can be translated into multiple other Impulse as sometimes some Impulse are higher level than other Translating multiple Impulse into one Impulse requires keeping state and should be done in Neuron The order is important as first Impulse in the list are send first along Nerve",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "translate",
        "normalized": "a-\u003e[b]",
        "package": "Etage",
        "partial": "",
        "signature": "i-\u003e[j]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:translateAndSend",
      "description": {
        "fct-descr": "\u003cp\u003eTranslates (if necessary \u003ccode\u003e\u003ca\u003eImpulseTranslator\u003c/a\u003e\u003c/code\u003e exists) an \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e and sends translation to \u003ccode\u003e\u003ca\u003eNeuron\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for AxonConductive -\u003e i -\u003e IO ()",
        "fct-source": "src/Control-Etage-Externals.html#translateAndSend",
        "fct-type": "function",
        "title": "translateAndSend"
      },
      "index": {
        "description": "Translates if necessary ImpulseTranslator exists an Impulse and sends translation to Neuron",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "translateAndSend",
        "normalized": "Nerve a b c AxonConductive-\u003ed-\u003eIO()",
        "package": "Etage",
        "partial": "And Send",
        "signature": "Nerve from fromConductivity for AxonConductive-\u003ei-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "r",
        "fct-source": "src/Control-Etage-Externals.html#IValue",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "value of the Impulse",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "value",
        "normalized": "",
        "package": "Etage",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:waitAndSlurpForNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eslurpForNeuron\u003c/a\u003e\u003c/code\u003e but it waits for at least one \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eNerve\u003c/a\u003e\u003c/code\u003e does not need to be conductive,\nit will block indefinitely (until an exception) in this case.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from fromConductivity for forConductivity -\u003e IO [for]",
        "fct-source": "src/Control-Etage-Externals.html#waitAndSlurpForNeuron",
        "fct-type": "function",
        "title": "waitAndSlurpForNeuron"
      },
      "index": {
        "description": "Similar to slurpForNeuron but it waits for at least one Impulse Nerve does not need to be conductive it will block indefinitely until an exception in this case",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "waitAndSlurpForNeuron",
        "normalized": "Nerve a b c d-\u003eIO[c]",
        "package": "Etage",
        "partial": "And Slurp For Neuron",
        "signature": "Nerve from fromConductivity for forConductivity-\u003eIO[for]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Etage/docs/Control-Etage.html#v:waitAndSlurpFromNeuron",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eslurpFromNeuron\u003c/a\u003e\u003c/code\u003e but it waits for at least one \u003ccode\u003e\u003ca\u003eImpulse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Etage",
        "fct-package": "Etage",
        "fct-signature": "Nerve from AxonConductive for forConductivity -\u003e IO [from]",
        "fct-source": "src/Control-Etage-Externals.html#waitAndSlurpFromNeuron",
        "fct-type": "function",
        "title": "waitAndSlurpFromNeuron"
      },
      "index": {
        "description": "Similar to slurpFromNeuron but it waits for at least one Impulse",
        "hierarchy": "Control Etage",
        "module": "Control.Etage",
        "name": "waitAndSlurpFromNeuron",
        "normalized": "Nerve a AxonConductive b c-\u003eIO[a]",
        "package": "Etage",
        "partial": "And Slurp From Neuron",
        "signature": "Nerve from AxonConductive for forConductivity-\u003eIO[from]"
      }
    }
  }
]