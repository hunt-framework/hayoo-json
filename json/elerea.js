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
        "word": "elerea"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis version differs from the simple one in adding associated freeze\ncontrol signals ('clocks') to stateful entities to be able to pause\nentire subnetworks without having to write all the low-level logic\nexplicitly.  The clocks are fixed to signals upon their creation, and\nthe \u003ccode\u003e\u003ca\u003ewithClock\u003c/a\u003e\u003c/code\u003e function can be used to specify the common clock for\nthe signals created in a given generator.\n\u003c/p\u003e\u003cp\u003eA clock signal affects \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e elements the following way: if the\nclock signal is true, the delay works as usual, otherwise it remembers\nits current output and throws away its current input.  If we consider\nsignals to be functions of time (natural numbers), the behaviour of\ndelay can be described by the following function:\n\u003c/p\u003e\u003cpre\u003e delay x0 s (t_start,clk) t_sample\n   | t_start == t_sample = x0\n   | t_start \u003c t_sample  = if clk t_sample\n                             then s (t_sample-1)\n                             else delay x0 s t_start s_clock (t_sample-1)\n   | otherwise           = error \"stream doesn't exist yet\"\n\u003c/pre\u003e\u003cp\u003eA simple example to create counters operating at different rates using\nthe same generator:\n\u003c/p\u003e\u003cpre\u003e divisibleBy n x = x `mod` n == 0\n\n counter = stateful 0 (+1)\n\n drift = do\n   time \u003c- counter\n   c1 \u003c- withClock (divisibleBy 2 \u003c$\u003e time) counter\n   c2 \u003c- withClock (divisibleBy 3 \u003c$\u003e time) counter\n   return ((,) \u003c$\u003e c1 \u003c*\u003e c2)\n\u003c/pre\u003e\u003cp\u003eNote that if you want to slow down the drift system defined above, the\nnaive approach might lead to surprising results:\n\u003c/p\u003e\u003cpre\u003e slowDrift = do\n   time \u003c- counter\n   withClock (divisibleBy 2 \u003c$\u003e time) drift\n\u003c/pre\u003e\u003cp\u003eThe problem is that the clocks are also slowed down, and their spikes\ndouble in length.  This may or may not be what you want.  To overcome\nthis problem, we can define a clock oblivious edge detector to be used\nwithin the definition of \u003ccode\u003edrift\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e edge = withClock (pure True) . transfer False (\\b b' -\u003e b && not b')\n\n drift = do\n   time \u003c- counter\n   t2 \u003c- edge (divisibleBy 2 \u003c$\u003e time)\n   t3 \u003c- edge (divisibleBy 3 \u003c$\u003e time)\n   c1 \u003c- withClock t2 counter\n   c2 \u003c- withClock t3 counter\n   return ((,) \u003c$\u003e c1 \u003c*\u003e c2)\n\u003c/pre\u003e\u003cp\u003eThis works because the \u003ccode\u003e\u003ca\u003ewithClock\u003c/a\u003e\u003c/code\u003e function overrides any clock\nimposed on the generator from outside.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "Clocked",
          "package": "elerea",
          "source": "src/FRP-Elerea-Clocked.html",
          "type": "module"
        },
        "index": {
          "description": "This version differs from the simple one in adding associated freeze control signals clocks to stateful entities to be able to pause entire subnetworks without having to write all the low-level logic explicitly The clocks are fixed to signals upon their creation and the withClock function can be used to specify the common clock for the signals created in given generator clock signal affects delay elements the following way if the clock signal is true the delay works as usual otherwise it remembers its current output and throws away its current input If we consider signals to be functions of time natural numbers the behaviour of delay can be described by the following function delay x0 start clk sample start sample x0 start sample if clk sample then sample-1 else delay x0 start clock sample-1 otherwise error stream doesn exist yet simple example to create counters operating at different rates using the same generator divisibleBy mod counter stateful drift do time counter c1 withClock divisibleBy time counter c2 withClock divisibleBy time counter return c1 c2 Note that if you want to slow down the drift system defined above the naive approach might lead to surprising results slowDrift do time counter withClock divisibleBy time drift The problem is that the clocks are also slowed down and their spikes double in length This may or may not be what you want To overcome this problem we can define clock oblivious edge detector to be used within the definition of drift edge withClock pure True transfer False not drift do time counter t2 edge divisibleBy time t3 edge divisibleBy time c1 withClock t2 counter c2 withClock t3 counter return c1 c2 This works because the withClock function overrides any clock imposed on the generator from outside",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "Clocked",
          "package": "elerea",
          "partial": "Clocked",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal represents a value changing over time.  It can be\n thought of as a function of type \u003ccode\u003eNat -\u003e a\u003c/code\u003e, where the argument is\n the sampling time, and the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance agrees with the\n intuition (bind corresponds to extracting the current sample).\n Signals and the values they carry are denoted the following way in\n the documentation:\n\u003c/p\u003e\u003cpre\u003e s = \u003c\u003cs0 s1 s2 ...\u003e\u003e\n\u003c/pre\u003e\u003cp\u003eThis says that \u003ccode\u003es\u003c/code\u003e is a signal that reads \u003ccode\u003es0\u003c/code\u003e during the first\n sampling, \u003ccode\u003es1\u003c/code\u003e during the second and so on.  You can also think of\n \u003ccode\u003es\u003c/code\u003e as the following function:\n\u003c/p\u003e\u003cpre\u003e s t_sample = [s0,s1,s2,...] !! t_sample\n\u003c/pre\u003e\u003cp\u003eSignals are constrained to be sampled sequentially, there is no\n random access.  The only way to observe their output is through\n \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "Signal",
          "package": "elerea",
          "source": "src/FRP-Elerea-Clocked.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "signal represents value changing over time It can be thought of as function of type Nat where the argument is the sampling time and the Monad instance agrees with the intuition bind corresponds to extracting the current sample Signals and the values they carry are denoted the following way in the documentation s0 s1 s2 This says that is signal that reads s0 during the first sampling s1 during the second and so on You can also think of as the following function sample s0 s1 s2 sample Signals are constrained to be sampled sequentially there is no random access The only way to observe their output is through start",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "Signal",
          "package": "elerea",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal generator is the only source of stateful signals.  It\n can be thought of as a function of type \u003ccode\u003eNat -\u003e a\u003c/code\u003e, where the\n result is an arbitrary data structure that can potentially contain\n new signals, and the argument is the creation time of these new\n signals.  It exposes the \u003ccode\u003e\u003ca\u003eMonadFix\u003c/a\u003e\u003c/code\u003e interface, which makes it\n possible to define signals in terms of each other.  Unlike the\n simple variant, the denotation of signal generators differs from\n that of signals.  We will use the following notation for\n generators:\n\u003c/p\u003e\u003cpre\u003e g = \u003c|g0 g1 g2 ...|\u003e\n\u003c/pre\u003e\u003cp\u003eJust like signals, generators behave as functions of time, but they\n can also refer to the clock signal:\n\u003c/p\u003e\u003cpre\u003e g t_start s_clock = [g0,g1,g2,...] !! t_start\n\u003c/pre\u003e\u003cp\u003eThe conceptual difference between the two notions is that signals\n are passed a sampling time, while generators expect a start time\n that will be the creation time of all the freshly generated\n signals in the resulting structure.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "SignalGen",
          "package": "elerea",
          "source": "src/FRP-Elerea-Clocked.html#SignalGen",
          "type": "data"
        },
        "index": {
          "description": "signal generator is the only source of stateful signals It can be thought of as function of type Nat where the result is an arbitrary data structure that can potentially contain new signals and the argument is the creation time of these new signals It exposes the MonadFix interface which makes it possible to define signals in terms of each other Unlike the simple variant the denotation of signal generators differs from that of signals We will use the following notation for generators g0 g1 g2 Just like signals generators behave as functions of time but they can also refer to the clock signal start clock g0 g1 g2 start The conceptual difference between the two notions is that signals are passed sampling time while generators expect start time that will be the creation time of all the freshly generated signals in the resulting structure",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "SignalGen",
          "package": "elerea",
          "partial": "Signal Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#t:SignalGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e combinator is the elementary building block for\n adding state to the signal network by constructing delayed versions\n of a signal that emit a given value at creation time and the\n previous output of the signal afterwards.\n\u003c/p\u003e\u003cp\u003eThe clock signal associated to the generator affects \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e\n elements the following way: if the clock signal is true, the delay\n works as usual, otherwise it remembers its current output and\n throws away its current input.  If we consider signals to be\n functions of time (natural numbers), the behaviour of delay can be\n described by the following function:\n\u003c/p\u003e\u003cpre\u003e delay x0 s t_start s_clock t_sample\n   | t_start == t_sample = x0\n   | t_start \u003c t_sample  = if s_clock t_sample\n                             then s (t_sample-1)\n                             else delay x0 s t_start s_clock (t_sample-1)\n   | otherwise           = error \"stream doesn't exist yet\"\n\u003c/pre\u003e\u003cp\u003eThe way signal generators are extracted by \u003ccode\u003e\u003ca\u003egenerator\u003c/a\u003e\u003c/code\u003e ensures that\n the error can never happen.\n\u003c/p\u003e\u003cp\u003eExample (requires the \u003ccode\u003eDoRec\u003c/code\u003e extension):\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ do\n         rec let fib'' = liftA2 (+) fib' fib\n             fib' \u003c- delay 1 fib''\n             fib \u003c- delay 1 fib'\n         return fib\n     res \u003c- replicateM 7 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [1,1,2,3,5,8,13]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "delay",
          "package": "elerea",
          "signature": "a-\u003e Signal a-\u003e SignalGen (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "The delay combinator is the elementary building block for adding state to the signal network by constructing delayed versions of signal that emit given value at creation time and the previous output of the signal afterwards The clock signal associated to the generator affects delay elements the following way if the clock signal is true the delay works as usual otherwise it remembers its current output and throws away its current input If we consider signals to be functions of time natural numbers the behaviour of delay can be described by the following function delay x0 start clock sample start sample x0 start sample if clock sample then sample-1 else delay x0 start clock sample-1 otherwise error stream doesn exist yet The way signal generators are extracted by generator ensures that the error can never happen Example requires the DoRec extension do smp start do rec let fib liftA2 fib fib fib delay fib fib delay fib return fib res replicateM smp print res Output",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "delay",
          "normalized": "a-\u003eSignal a-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003eSignal a-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that executes a given IO action once at every sampling.\n\u003c/p\u003e\u003cp\u003eIn essence, this combinator provides cooperative multitasking\n capabilities, and its primary purpose is to assist library writers\n in wrapping effectful APIs as conceptually pure signals.  If there\n are several effectful signals in the system, their order of\n execution is undefined and should not be relied on.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ do\n         ref \u003c- execute $ newIORef 0\n         effectful $ do\n             x \u003c- readIORef ref\n             putStrLn $ \"Count: \" ++ show x\n             writeIORef ref $! x+1\n             return ()\n     replicateM_ 5 smp\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e Count: 0\n Count: 1\n Count: 2\n Count: 3\n Count: 4\n\u003c/pre\u003e\u003cp\u003eAnother example (requires mersenne-random):\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ effectful $ return randomIO :: IO (IO Double)\n     res \u003c- replicateM 5 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [0.12067753390401374,0.8658877349182655,0.7159264443196786,0.1756941896012891,0.9513646060896676]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "effectful",
          "package": "elerea",
          "signature": "IO a-\u003e SignalGen (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "signal that executes given IO action once at every sampling In essence this combinator provides cooperative multitasking capabilities and its primary purpose is to assist library writers in wrapping effectful APIs as conceptually pure signals If there are several effectful signals in the system their order of execution is undefined and should not be relied on Example do smp start do ref execute newIORef effectful do readIORef ref putStrLn Count show writeIORef ref return replicateM smp Output Count Count Count Count Count Another example requires mersenne-random do smp start effectful return randomIO IO IO Double res replicateM smp print res Output",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "effectful",
          "normalized": "IO a-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "IO a-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:effectful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that executes a parametric IO action once at every\n sampling.  The parameter is supplied by another signal at every\n sampling step.\n\u003c/p\u003e",
          "module": "[\"FRP.Elerea.Clocked\",\"FRP.Elerea.Simple\"]",
          "name": "effectful1",
          "package": "elerea",
          "signature": "(t -\u003e IO a)-\u003e Signal t-\u003e SignalGen (Signal a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:effectful1\",\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:effectful1\"]"
        },
        "index": {
          "description": "signal that executes parametric IO action once at every sampling The parameter is supplied by another signal at every sampling step",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "effectful1",
          "normalized": "(a-\u003eIO b)-\u003eSignal a-\u003eSignalGen(Signal b)",
          "package": "elerea",
          "signature": "(t-\u003eIO a)-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:effectful1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eeffectful1\u003c/a\u003e\u003c/code\u003e, but with two parameter signals.\n\u003c/p\u003e",
          "module": "[\"FRP.Elerea.Clocked\",\"FRP.Elerea.Simple\"]",
          "name": "effectful2",
          "package": "elerea",
          "signature": "(t1 -\u003e t2 -\u003e IO a)-\u003e Signal t1-\u003e Signal t2-\u003e SignalGen (Signal a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:effectful2\",\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:effectful2\"]"
        },
        "index": {
          "description": "Like effectful1 but with two parameter signals",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "effectful2",
          "normalized": "(a-\u003ea-\u003eIO b)-\u003eSignal a-\u003eSignal a-\u003eSignalGen(Signal b)",
          "package": "elerea",
          "signature": "(t-\u003et-\u003eIO a)-\u003eSignal t-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:effectful2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eeffectful1\u003c/a\u003e\u003c/code\u003e, but with three parameter signals.\n\u003c/p\u003e",
          "module": "[\"FRP.Elerea.Clocked\",\"FRP.Elerea.Simple\"]",
          "name": "effectful3",
          "package": "elerea",
          "signature": "(t1 -\u003e t2 -\u003e t3 -\u003e IO a)-\u003e Signal t1-\u003e Signal t2-\u003e Signal t3-\u003e SignalGen (Signal a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:effectful3\",\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:effectful3\"]"
        },
        "index": {
          "description": "Like effectful1 but with three parameter signals",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "effectful3",
          "normalized": "(a-\u003ea-\u003ea-\u003eIO b)-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignalGen(Signal b)",
          "package": "elerea",
          "signature": "(t-\u003et-\u003et-\u003eIO a)-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:effectful3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eeffectful1\u003c/a\u003e\u003c/code\u003e, but with four parameter signals.\n\u003c/p\u003e",
          "module": "[\"FRP.Elerea.Clocked\",\"FRP.Elerea.Simple\"]",
          "name": "effectful4",
          "package": "elerea",
          "signature": "(t1 -\u003e t2 -\u003e t3 -\u003e t4 -\u003e IO a)-\u003e Signal t1-\u003e Signal t2-\u003e Signal t3-\u003e Signal t4-\u003e SignalGen (Signal a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:effectful4\",\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:effectful4\"]"
        },
        "index": {
          "description": "Like effectful1 but with four parameter signals",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "effectful4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eIO b)-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignalGen(Signal b)",
          "package": "elerea",
          "signature": "(t-\u003et-\u003et-\u003et-\u003eIO a)-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:effectful4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn IO action executed in the \u003ccode\u003e\u003ca\u003eSignalGen\u003c/a\u003e\u003c/code\u003e monad. Can be used as\n \u003ccode\u003eliftIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "execute",
          "package": "elerea",
          "signature": "IO a -\u003e SignalGen a",
          "source": "src/FRP-Elerea-Clocked.html#execute",
          "type": "function"
        },
        "index": {
          "description": "An IO action executed in the SignalGen monad Can be used as liftIO",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "execute",
          "normalized": "IO a-\u003eSignalGen a",
          "package": "elerea",
          "signature": "IO a-\u003eSignalGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that can be directly fed through the sink function\n returned.  This can be used to attach the network to the outer\n world.  The signal always yields the value last written to the\n sink.  In other words, if the sink is written less frequently than\n the network sampled, the output remains the same during several\n samples.  If values are pushed in the sink more frequently, only\n the last one before sampling is visible on the output.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     (sig,snk) \u003c- external 4\n     smp \u003c- start (return sig)\n     r1 \u003c- smp\n     r2 \u003c- smp\n     snk 7\n     r3 \u003c- smp\n     snk 9\n     snk 2\n     r4 \u003c- smp\n     print [r1,r2,r3,r4]\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [4,4,7,2]\n\u003c/pre\u003e",
          "module": "[\"FRP.Elerea.Clocked\",\"FRP.Elerea.Simple\"]",
          "name": "external",
          "package": "elerea",
          "signature": "a-\u003e IO (Signal a, a -\u003e IO ())",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:external\",\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:external\"]"
        },
        "index": {
          "description": "signal that can be directly fed through the sink function returned This can be used to attach the network to the outer world The signal always yields the value last written to the sink In other words if the sink is written less frequently than the network sampled the output remains the same during several samples If values are pushed in the sink more frequently only the last one before sampling is visible on the output Example do sig snk external smp start return sig r1 smp r2 smp snk r3 smp snk snk r4 smp print r1 r2 r3 r4 Output",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "external",
          "normalized": "a-\u003eIO(Signal a,a-\u003eIO())",
          "package": "elerea",
          "signature": "a-\u003eIO(Signal a,a-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:external"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event-like signal that can be fed through the sink function\n returned.  The signal carries a list of values fed in since the\n last sampling (always synchronised to the top-level samplings\n regardless of any associated clock), i.e. it is constantly \u003ccode\u003e[]\u003c/code\u003e if\n the sink is never invoked.  The order of elements is reversed, so\n the last value passed to the sink is the head of the list.  Note\n that unlike \u003ccode\u003e\u003ca\u003eexternal\u003c/a\u003e\u003c/code\u003e this function only returns a generator to be\n used within the expression constructing the top-level stream, and\n this generator can only be used once.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     (gen,snk) \u003c- externalMulti\n     smp \u003c- start gen\n     r1 \u003c- smp\n     snk 7\n     r2 \u003c- smp\n     r3 \u003c- smp\n     snk 9\n     snk 2\n     r4 \u003c- smp\n     print [r1,r2,r3,r4]\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [[],[7],[],[2,9]]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "externalMulti",
          "package": "elerea",
          "signature": "IO (SignalGen (Signal [a]), a -\u003e IO ())",
          "type": "function"
        },
        "index": {
          "description": "An event-like signal that can be fed through the sink function returned The signal carries list of values fed in since the last sampling always synchronised to the top-level samplings regardless of any associated clock i.e it is constantly if the sink is never invoked The order of elements is reversed so the last value passed to the sink is the head of the list Note that unlike external this function only returns generator to be used within the expression constructing the top-level stream and this generator can only be used once Example do gen snk externalMulti smp start gen r1 smp snk r2 smp r3 smp snk snk r4 smp print r1 r2 r3 r4 Output",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "externalMulti",
          "normalized": "IO(SignalGen(Signal[a]),a-\u003eIO())",
          "package": "elerea",
          "partial": "Multi",
          "signature": "IO(SignalGen(Signal[a]),a-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:externalMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reactive signal that takes the value to output from a signal\n generator carried by its input with the sampling time provided as\n the start time for the generated structure.  It is possible to\n create new signals in the monad, which is the key to defining\n dynamic data-flow networks.\n\u003c/p\u003e\u003cpre\u003e generator \u003c\u003c \u003c|x00 x01 x02 ...|\u003e\n              \u003c|x10 x11 x12 ...|\u003e\n              \u003c|x20 x21 x22 ...|\u003e\n              ...\n           \u003e\u003e = \u003c| \u003c\u003cx00 x11 x22 ...\u003e\u003e\n                   \u003c\u003cx00 x11 x22 ...\u003e\u003e\n                   \u003c\u003cx00 x11 x22 ...\u003e\u003e\n                   ...\n                |\u003e\n\u003c/pre\u003e\u003cp\u003eIt can be thought of as the following function:\n\u003c/p\u003e\u003cpre\u003e generator g t_start s_clock t_sample = g t_sample s_clock t_sample\n\u003c/pre\u003e\u003cp\u003eIt has to live in the \u003ccode\u003e\u003ca\u003eSignalGen\u003c/a\u003e\u003c/code\u003e monad, because it needs to\n maintain an internal state to be able to cache the current sample\n for efficiency reasons. However, this state is not carried between\n samples, therefore start time doesn't matter and can be ignored.\n Also, even though it does not make use of the clock itself, part of\n its job is to distribute it among the newly generated signals.\n\u003c/p\u003e\u003cp\u003eRefer to the longer example at the bottom of \u003ca\u003eFRP.Elerea.Simple\u003c/a\u003e to\n see how it can be used.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "generator",
          "package": "elerea",
          "signature": "Signal (SignalGen a)-\u003e SignalGen (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "reactive signal that takes the value to output from signal generator carried by its input with the sampling time provided as the start time for the generated structure It is possible to create new signals in the monad which is the key to defining dynamic data-flow networks generator x00 x01 x02 x10 x11 x12 x20 x21 x22 x00 x11 x22 x00 x11 x22 x00 x11 x22 It can be thought of as the following function generator start clock sample sample clock sample It has to live in the SignalGen monad because it needs to maintain an internal state to be able to cache the current sample for efficiency reasons However this state is not carried between samples therefore start time doesn matter and can be ignored Also even though it does not make use of the clock itself part of its job is to distribute it among the newly generated signals Refer to the longer example at the bottom of FRP.Elerea.Simple to see how it can be used",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "generator",
          "normalized": "Signal(SignalGen a)-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "Signal(SignalGen a)-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003ewithClock (pure True)\u003c/code\u003e, but more efficient.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "global",
          "package": "elerea",
          "signature": "SignalGen a -\u003e SignalGen a",
          "source": "src/FRP-Elerea-Clocked.html#global",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to withClock pure True but more efficient",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "global",
          "normalized": "SignalGen a-\u003eSignalGen a",
          "package": "elerea",
          "signature": "SignalGen a-\u003eSignalGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:global"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoising combinator.  It can be used to cache results of\n applicative combinators in case they are used in several places.\n Unlike in the simple variant, it is not observationally equivalent\n to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eSignalGen\u003c/a\u003e\u003c/code\u003e monad, because it only samples its\n input signal when the associated clock ticks.  The \u003ccode\u003ememo\u003c/code\u003e\n combinator can be modelled by the following function:\n\u003c/p\u003e\u003cpre\u003e memo s t_start s_clock t_sample\n   | s_clock t_sample = s t_sample\n   | otherwise        = memo s t_start s_clock (t_sample-1)\n\u003c/pre\u003e\u003cp\u003eFor instance, if \u003ccode\u003es = f \u003c$\u003e s'\u003c/code\u003e, then \u003ccode\u003ef\u003c/code\u003e will be recalculated\n once for each sampling of \u003ccode\u003es\u003c/code\u003e.  This can be avoided by writing \u003ccode\u003es\n \u003c- memo (f \u003c$\u003e s')\u003c/code\u003e instead.  However, \u003ccode\u003e\u003ca\u003ememo\u003c/a\u003e\u003c/code\u003e incurs a small\n overhead, therefore it should not be used blindly.\n\u003c/p\u003e\u003cp\u003eAll the functions defined in this module return memoised signals.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "memo",
          "package": "elerea",
          "signature": "Signal a-\u003e SignalGen (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "Memoising combinator It can be used to cache results of applicative combinators in case they are used in several places Unlike in the simple variant it is not observationally equivalent to return in the SignalGen monad because it only samples its input signal when the associated clock ticks The memo combinator can be modelled by the following function memo start clock sample clock sample sample otherwise memo start clock sample-1 For instance if then will be recalculated once for each sampling of This can be avoided by writing memo instead However memo incurs small overhead therefore it should not be used blindly All the functions defined in this module return memoised signals",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "memo",
          "normalized": "Signal a-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "Signal a-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formal conversion from signals to signal generators, which\n effectively allows for retrieving the current value of a previously\n created signal within a generator.  This includes both signals\n defined in an external scope as well as those created earlier in\n the same generator.  It can be modelled by the following function:\n\u003c/p\u003e\u003cpre\u003e snapshot s t_start s_clock = s t_start\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "snapshot",
          "package": "elerea",
          "signature": "Signal a -\u003e SignalGen a",
          "source": "src/FRP-Elerea-Clocked.html#snapshot",
          "type": "function"
        },
        "index": {
          "description": "formal conversion from signals to signal generators which effectively allows for retrieving the current value of previously created signal within generator This includes both signals defined in an external scope as well as those created earlier in the same generator It can be modelled by the following function snapshot start clock start",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "snapshot",
          "normalized": "Signal a-\u003eSignalGen a",
          "package": "elerea",
          "signature": "Signal a-\u003eSignalGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:snapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbedding a signal into an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e environment.  Repeated calls to\n the computation returned cause the whole network to be updated, and\n the current sample of the top-level signal is produced as a\n result. This is the only way to extract a signal generator outside\n the network, and it is equivalent to passing zero to the function\n representing the generator.  The clock associated with the\n top-level signal ticks at every sampling point.  In general:\n\u003c/p\u003e\u003cpre\u003e replicateM n =\u003c\u003c start \u003c|\u003c\u003cx0 x1 x2 x3 ...\u003e\u003e ...|\u003e == take n [x0,x1,x2,x3,...]\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start (stateful 3 (+2))\n     res \u003c- replicateM 5 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [3,5,7,9,11]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "start",
          "package": "elerea",
          "signature": "SignalGen (Signal a)-\u003e IO (IO a)",
          "type": "function"
        },
        "index": {
          "description": "Embedding signal into an IO environment Repeated calls to the computation returned cause the whole network to be updated and the current sample of the top-level signal is produced as result This is the only way to extract signal generator outside the network and it is equivalent to passing zero to the function representing the generator The clock associated with the top-level signal ticks at every sampling point In general replicateM start x0 x1 x2 x3 take x0 x1 x2 x3 Example do smp start stateful res replicateM smp print res Output",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "start",
          "normalized": "SignalGen(Signal a)-\u003eIO(IO a)",
          "package": "elerea",
          "signature": "SignalGen(Signal a)-\u003eIO(IO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure stateful signal.  The initial state is the first output,\n and every subsequent state is derived from the preceding one by\n applying a pure transformation.  It is affected by the associated\n clock like \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e: no transformation is performed in the absence\n of a tick; see the example at the top.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start (stateful \"x\" ('x':))\n     res \u003c- replicateM 5 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [\"x\",\"xx\",\"xxx\",\"xxxx\",\"xxxxx\"]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "stateful",
          "package": "elerea",
          "signature": "a-\u003e (a -\u003e a)-\u003e SignalGen (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "pure stateful signal The initial state is the first output and every subsequent state is derived from the preceding one by applying pure transformation It is affected by the associated clock like delay no transformation is performed in the absence of tick see the example at the top Example do smp start stateful res replicateM smp print res Output xx xxx xxxx xxxxx",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "stateful",
          "normalized": "a-\u003e(a-\u003ea)-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(a-\u003ea)-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:stateful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stateful transfer function.  The current input affects the\n current output, i.e. the initial state given in the first argument\n is considered to appear before the first output, and can never be\n observed, and subsequent states are determined by combining the\n preceding state with the current output of the input signal using\n the function supplied.  It is affected by the associated clock like\n \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e: no transformation is performed in the absence of a tick;\n see the example at the top.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ do\n         cnt \u003c- stateful 1 (+1)\n         transfer 10 (+) cnt\n     res \u003c- replicateM 5 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [11,13,16,20,25]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "transfer",
          "package": "elerea",
          "signature": "a-\u003e (t -\u003e a -\u003e a)-\u003e Signal t-\u003e SignalGen (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "stateful transfer function The current input affects the current output i.e the initial state given in the first argument is considered to appear before the first output and can never be observed and subsequent states are determined by combining the preceding state with the current output of the input signal using the function supplied It is affected by the associated clock like delay no transformation is performed in the absence of tick see the example at the top Example do smp start do cnt stateful transfer cnt res replicateM smp print res Output",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "transfer",
          "normalized": "a-\u003e(b-\u003ea-\u003ea)-\u003eSignal b-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(t-\u003ea-\u003ea)-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:transfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variation of \u003ccode\u003e\u003ca\u003etransfer\u003c/a\u003e\u003c/code\u003e with two input signals.\n\u003c/p\u003e",
          "module": "[\"FRP.Elerea.Clocked\",\"FRP.Elerea.Simple\"]",
          "name": "transfer2",
          "package": "elerea",
          "signature": "a-\u003e (t1 -\u003e t2 -\u003e a -\u003e a)-\u003e Signal t1-\u003e Signal t2-\u003e SignalGen (Signal a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:transfer2\",\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:transfer2\"]"
        },
        "index": {
          "description": "variation of transfer with two input signals",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "transfer2",
          "normalized": "a-\u003e(b-\u003eb-\u003ea-\u003ea)-\u003eSignal b-\u003eSignal b-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(t-\u003et-\u003ea-\u003ea)-\u003eSignal t-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:transfer2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variation of \u003ccode\u003e\u003ca\u003etransfer\u003c/a\u003e\u003c/code\u003e with three input signals.\n\u003c/p\u003e",
          "module": "[\"FRP.Elerea.Clocked\",\"FRP.Elerea.Simple\"]",
          "name": "transfer3",
          "package": "elerea",
          "signature": "a-\u003e (t1 -\u003e t2 -\u003e t3 -\u003e a -\u003e a)-\u003e Signal t1-\u003e Signal t2-\u003e Signal t3-\u003e SignalGen (Signal a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:transfer3\",\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:transfer3\"]"
        },
        "index": {
          "description": "variation of transfer with three input signals",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "transfer3",
          "normalized": "a-\u003e(b-\u003eb-\u003eb-\u003ea-\u003ea)-\u003eSignal b-\u003eSignal b-\u003eSignal b-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(t-\u003et-\u003et-\u003ea-\u003ea)-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:transfer3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variation of \u003ccode\u003e\u003ca\u003etransfer\u003c/a\u003e\u003c/code\u003e with four input signals.\n\u003c/p\u003e",
          "module": "[\"FRP.Elerea.Clocked\",\"FRP.Elerea.Simple\"]",
          "name": "transfer4",
          "package": "elerea",
          "signature": "a-\u003e (t1 -\u003e t2 -\u003e t3 -\u003e t4 -\u003e a -\u003e a)-\u003e Signal t1-\u003e Signal t2-\u003e Signal t3-\u003e Signal t4-\u003e SignalGen (Signal a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:transfer4\",\"http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:transfer4\"]"
        },
        "index": {
          "description": "variation of transfer with four input signals",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "transfer4",
          "normalized": "a-\u003e(b-\u003eb-\u003eb-\u003eb-\u003ea-\u003ea)-\u003eSignal b-\u003eSignal b-\u003eSignal b-\u003eSignal b-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(t-\u003et-\u003et-\u003et-\u003ea-\u003ea)-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:transfer4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that is true exactly once: the first time the input\n signal is true.  Afterwards, it is constantly false, and it holds\n no reference to the input signal.  Note that \u003ccode\u003e\u003ca\u003euntil\u003c/a\u003e\u003c/code\u003e always follows\n the master clock, i.e. the fastest one, therefore it never creates\n a long spike of \u003ccode\u003eTrue\u003c/code\u003e.  For instance (assuming the rest of the\n input is constantly \u003ccode\u003eFalse\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e until \u003c\u003cFalse False True True False True ...\u003e\u003e =\n     \u003c| \u003c\u003cFalse False True  False False False False False False False ...\u003e\u003e\n        \u003c\u003c ---  False True  False False False False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---  True  False False False False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---   ---  True  False False False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---   ---   ---  False True  False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---   ---   ---   ---  True  False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---   ---   ---   ---   ---  False False False False ...\u003e\u003e\n        ...\n     |\u003e\n\u003c/pre\u003e\u003cp\u003eIt is observationally equivalent to the following expression (which\n would hold onto \u003ccode\u003es\u003c/code\u003e forever):\n\u003c/p\u003e\u003cpre\u003e until s = global $ do\n     step \u003c- transfer False (||) s\n     dstep \u003c- delay False step\n     memo (liftA2 (/=) step dstep)\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ do\n         cnt \u003c- stateful 0 (+1)\n         tick \u003c- until ((\u003e=3) \u003c$\u003e cnt)\n         return $ liftA2 (,) cnt tick\n     res \u003c- replicateM 6 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [(0,False),(1,False),(2,False),(3,True),(4,False),(5,False)]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "until",
          "package": "elerea",
          "signature": "Signal Bool-\u003e SignalGen (Signal Bool)",
          "type": "function"
        },
        "index": {
          "description": "signal that is true exactly once the first time the input signal is true Afterwards it is constantly false and it holds no reference to the input signal Note that until always follows the master clock i.e the fastest one therefore it never creates long spike of True For instance assuming the rest of the input is constantly False until False False True True False True False False True False False False False False False False False True False False False False False False False True False False False False False False False True False False False False False False False True False False False False True False False False False False False False False It is observationally equivalent to the following expression which would hold onto forever until global do step transfer False dstep delay False step memo liftA2 step dstep Example do smp start do cnt stateful tick until cnt return liftA2 cnt tick res replicateM smp print res Output False False False True False False",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "until",
          "normalized": "Signal Bool-\u003eSignalGen(Signal Bool)",
          "package": "elerea",
          "signature": "Signal Bool-\u003eSignalGen(Signal Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverride the clock used in a generator.  Note that clocks don't\n interact unless one is used in the definition of the other, i.e. it\n is possible to provide a fast clock within a generator with a slow\n associated clock.  It is equivalent to the following function:\n\u003c/p\u003e\u003cpre\u003e withClock s g t_start s_clock = g t_start s\n\u003c/pre\u003e\u003cp\u003eFor instance, the following equivalence holds:\n\u003c/p\u003e\u003cpre\u003e withClock (pure False) (stateful x f) == pure x\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Clocked",
          "name": "withClock",
          "package": "elerea",
          "signature": "Signal Bool -\u003e SignalGen a -\u003e SignalGen a",
          "source": "src/FRP-Elerea-Clocked.html#withClock",
          "type": "function"
        },
        "index": {
          "description": "Override the clock used in generator Note that clocks don interact unless one is used in the definition of the other i.e it is possible to provide fast clock within generator with slow associated clock It is equivalent to the following function withClock start clock start For instance the following equivalence holds withClock pure False stateful pure",
          "hierarchy": "FRP Elerea Clocked",
          "module": "FRP.Elerea.Clocked",
          "name": "withClock",
          "normalized": "Signal Bool-\u003eSignalGen a-\u003eSignalGen a",
          "package": "elerea",
          "partial": "Clock",
          "signature": "Signal Bool-\u003eSignalGen a-\u003eSignalGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Clocked.html#v:withClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides leak-free and referentially transparent\nhigher-order discrete signals.  Unlike in \u003ca\u003eFRP.Elerea.Simple\u003c/a\u003e, the\nsampling action has an extra argument that will be globally\ndistributed to every node and can be used to update the state.  For\ninstance, it can hold the time step between the two samplings, but it\ncould also encode all the external input to the system.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Elerea.Param",
          "name": "Param",
          "package": "elerea",
          "source": "src/FRP-Elerea-Param.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides leak-free and referentially transparent higher-order discrete signals Unlike in FRP.Elerea.Simple the sampling action has an extra argument that will be globally distributed to every node and can be used to update the state For instance it can hold the time step between the two samplings but it could also encode all the external input to the system",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "Param",
          "package": "elerea",
          "partial": "Param",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal represents a value changing over time.  It can be\n thought of as a function of type \u003ccode\u003eNat -\u003e a\u003c/code\u003e, where the argument is\n the sampling time, and the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance agrees with the\n intuition (bind corresponds to extracting the current sample).\n Signals and the values they carry are denoted the following way in\n the documentation:\n\u003c/p\u003e\u003cpre\u003e s = \u003c\u003cs0 s1 s2 ...\u003e\u003e\n\u003c/pre\u003e\u003cp\u003eThis says that \u003ccode\u003es\u003c/code\u003e is a signal that reads \u003ccode\u003es0\u003c/code\u003e during the first\n sampling, \u003ccode\u003es1\u003c/code\u003e during the second and so on.  You can also think of\n \u003ccode\u003es\u003c/code\u003e as the following function:\n\u003c/p\u003e\u003cpre\u003e s t_sample = [s0,s1,s2,...] !! t_sample\n\u003c/pre\u003e\u003cp\u003eSignals are constrained to be sampled sequentially, there is no\n random access.  The only way to observe their output is through\n \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "Signal",
          "package": "elerea",
          "source": "src/FRP-Elerea-Param.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "signal represents value changing over time It can be thought of as function of type Nat where the argument is the sampling time and the Monad instance agrees with the intuition bind corresponds to extracting the current sample Signals and the values they carry are denoted the following way in the documentation s0 s1 s2 This says that is signal that reads s0 during the first sampling s1 during the second and so on You can also think of as the following function sample s0 s1 s2 sample Signals are constrained to be sampled sequentially there is no random access The only way to observe their output is through start",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "Signal",
          "package": "elerea",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal generator is the only source of stateful signals.  It\n can be thought of as a function of type \u003ccode\u003eNat -\u003e Signal p -\u003e a\u003c/code\u003e,\n where the result is an arbitrary data structure that can\n potentially contain new signals, the first argument is the creation\n time of these new signals, and the second is a globally accessible\n input signal.  It exposes the \u003ccode\u003e\u003ca\u003eMonadFix\u003c/a\u003e\u003c/code\u003e interface, which makes it\n possible to define signals in terms of each other.  Unlike the\n simple variant, the denotation of signal generators differs from\n that of signals.  We will use the following notation for\n generators:\n\u003c/p\u003e\u003cpre\u003e g = \u003c|g0 g1 g2 ...|\u003e\n\u003c/pre\u003e\u003cp\u003eJust like signals, generators behave as functions of time, but they\n can also refer to the input signal:\n\u003c/p\u003e\u003cpre\u003e g t_start s_input = [g0,g1,g2,...] !! t_start\n\u003c/pre\u003e\u003cp\u003eThe conceptual difference between the two notions is that signals\n are passed a sampling time, while generators expect a start time\n that will be the creation time of all the freshly generated\n signals in the resulting structure.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "SignalGen",
          "package": "elerea",
          "source": "src/FRP-Elerea-Param.html#SignalGen",
          "type": "data"
        },
        "index": {
          "description": "signal generator is the only source of stateful signals It can be thought of as function of type Nat Signal where the result is an arbitrary data structure that can potentially contain new signals the first argument is the creation time of these new signals and the second is globally accessible input signal It exposes the MonadFix interface which makes it possible to define signals in terms of each other Unlike the simple variant the denotation of signal generators differs from that of signals We will use the following notation for generators g0 g1 g2 Just like signals generators behave as functions of time but they can also refer to the input signal start input g0 g1 g2 start The conceptual difference between the two notions is that signals are passed sampling time while generators expect start time that will be the creation time of all the freshly generated signals in the resulting structure",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "SignalGen",
          "package": "elerea",
          "partial": "Signal Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#t:SignalGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e combinator is the elementary building block for\n adding state to the signal network by constructing delayed versions\n of a signal that emit a given value at creation time and the\n previous output of the signal afterwards (\u003ccode\u003e--\u003c/code\u003e is undefined):\n\u003c/p\u003e\u003cpre\u003e delay x0 s = \u003c| \u003c\u003cx0 s0 s1 s2 s3 ...\u003e\u003e\n                 \u003c\u003c-- x0 s1 s2 s3 ...\u003e\u003e\n                 \u003c\u003c-- -- x0 s2 s3 ...\u003e\u003e\n                 \u003c\u003c-- -- -- x0 s3 ...\u003e\u003e\n                 ...\n              |\u003e\n\u003c/pre\u003e\u003cp\u003eIt can be thought of as the following function (which should also\n make it clear why the return value is \u003ccode\u003e\u003ca\u003eSignalGen\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e delay x0 s t_start s_input t_sample\n   | t_start == t_sample = x0\n   | t_start \u003c t_sample  = s (t_sample-1)\n   | otherwise           = error \\\"Premature sample!\\\"\n\u003c/pre\u003e\u003cp\u003eThe way signal generators are extracted by \u003ccode\u003e\u003ca\u003egenerator\u003c/a\u003e\u003c/code\u003e ensures that\n the error can never happen.  It is also clear that the behaviour of\n \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e is not affected in any way by the global input.\n\u003c/p\u003e\u003cp\u003eExample (requires the \u003ccode\u003eDoRec\u003c/code\u003e extension):\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ do\n         rec let fib'' = liftA2 (+) fib' fib\n             fib' \u003c- delay 1 fib''\n             fib \u003c- delay 1 fib'\n         return fib\n     res \u003c- replicateM 7 (smp undefined)\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [1,1,2,3,5,8,13]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Param",
          "name": "delay",
          "package": "elerea",
          "signature": "a-\u003e Signal a-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "The delay combinator is the elementary building block for adding state to the signal network by constructing delayed versions of signal that emit given value at creation time and the previous output of the signal afterwards is undefined delay x0 x0 s0 s1 s2 s3 x0 s1 s2 s3 x0 s2 s3 x0 s3 It can be thought of as the following function which should also make it clear why the return value is SignalGen delay x0 start input sample start sample x0 start sample sample-1 otherwise error Premature sample The way signal generators are extracted by generator ensures that the error can never happen It is also clear that the behaviour of delay is not affected in any way by the global input Example requires the DoRec extension do smp start do rec let fib liftA2 fib fib fib delay fib fib delay fib return fib res replicateM smp undefined print res Output",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "delay",
          "normalized": "a-\u003eSignal a-\u003eSignalGen b(Signal a)",
          "package": "elerea",
          "signature": "a-\u003eSignal a-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that executes a given IO action once at every sampling.\n\u003c/p\u003e\u003cp\u003eIn essence, this combinator provides cooperative multitasking\n capabilities, and its primary purpose is to assist library writers\n in wrapping effectful APIs as conceptually pure signals.  If there\n are several effectful signals in the system, their order of\n execution is undefined and should not be relied on.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     act \u003c- start $ do\n         ref \u003c- execute $ newIORef 0\n         let accum n = do\n                 x \u003c- readIORef ref\n                 putStrLn $ \"Accumulator: \" ++ show x\n                 writeIORef ref $! x+n\n                 return ()\n         effectful1 accum =\u003c\u003c input\n     forM_ [4,9,2,1,5] act\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e Accumulator: 0\n Accumulator: 4\n Accumulator: 13\n Accumulator: 15\n Accumulator: 16\n\u003c/pre\u003e\u003cp\u003eAnother example (requires mersenne-random):\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ effectful randomIO :: IO (IO Double)\n     res \u003c- replicateM 5 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [0.12067753390401374,0.8658877349182655,0.7159264443196786,0.1756941896012891,0.9513646060896676]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Param",
          "name": "effectful",
          "package": "elerea",
          "signature": "IO a-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "signal that executes given IO action once at every sampling In essence this combinator provides cooperative multitasking capabilities and its primary purpose is to assist library writers in wrapping effectful APIs as conceptually pure signals If there are several effectful signals in the system their order of execution is undefined and should not be relied on Example do act start do ref execute newIORef let accum do readIORef ref putStrLn Accumulator show writeIORef ref return effectful1 accum input forM act Output Accumulator Accumulator Accumulator Accumulator Accumulator Another example requires mersenne-random do smp start effectful randomIO IO IO Double res replicateM smp print res Output",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "effectful",
          "normalized": "IO a-\u003eSignalGen b(Signal a)",
          "package": "elerea",
          "signature": "IO a-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:effectful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that executes a parametric IO action once at every\n sampling.  The parameter is supplied by another signal at every\n sampling step.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "effectful1",
          "package": "elerea",
          "signature": "(t -\u003e IO a)-\u003e Signal t-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "signal that executes parametric IO action once at every sampling The parameter is supplied by another signal at every sampling step",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "effectful1",
          "normalized": "(a-\u003eIO b)-\u003eSignal a-\u003eSignalGen c(Signal b)",
          "package": "elerea",
          "signature": "(t-\u003eIO a)-\u003eSignal t-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:effectful1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eeffectful1\u003c/a\u003e\u003c/code\u003e, but with two parameter signals.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "effectful2",
          "package": "elerea",
          "signature": "(t1 -\u003e t2 -\u003e IO a)-\u003e Signal t1-\u003e Signal t2-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "Like effectful1 but with two parameter signals",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "effectful2",
          "normalized": "(a-\u003ea-\u003eIO b)-\u003eSignal a-\u003eSignal a-\u003eSignalGen c(Signal b)",
          "package": "elerea",
          "signature": "(t-\u003et-\u003eIO a)-\u003eSignal t-\u003eSignal t-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:effectful2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eeffectful1\u003c/a\u003e\u003c/code\u003e, but with three parameter signals.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "effectful3",
          "package": "elerea",
          "signature": "(t1 -\u003e t2 -\u003e t3 -\u003e IO a)-\u003e Signal t1-\u003e Signal t2-\u003e Signal t3-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "Like effectful1 but with three parameter signals",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "effectful3",
          "normalized": "(a-\u003ea-\u003ea-\u003eIO b)-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignalGen c(Signal b)",
          "package": "elerea",
          "signature": "(t-\u003et-\u003et-\u003eIO a)-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:effectful3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eeffectful1\u003c/a\u003e\u003c/code\u003e, but with four parameter signals.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "effectful4",
          "package": "elerea",
          "signature": "(t1 -\u003e t2 -\u003e t3 -\u003e t4 -\u003e IO a)-\u003e Signal t1-\u003e Signal t2-\u003e Signal t3-\u003e Signal t4-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "Like effectful1 but with four parameter signals",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "effectful4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eIO b)-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignal a-\u003eSignalGen c(Signal b)",
          "package": "elerea",
          "signature": "(t-\u003et-\u003et-\u003et-\u003eIO a)-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:effectful4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a generator with an overridden input signal.  It is\n equivalent to the following function:\n\u003c/p\u003e\u003cpre\u003e embed s g t_start s_input = g t_start s\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ do\n         sig \u003c- input\n         embed (sig*2) $ do\n             sig \u003c- input\n             return (sig+1)\n     res \u003c- forM [4,1,3,5,2,8,6] smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [9,3,7,11,5,17,13]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Param",
          "name": "embed",
          "package": "elerea",
          "signature": "Signal p' -\u003e SignalGen p' a -\u003e SignalGen p a",
          "source": "src/FRP-Elerea-Param.html#embed",
          "type": "function"
        },
        "index": {
          "description": "Embed generator with an overridden input signal It is equivalent to the following function embed start input start Example do smp start do sig input embed sig do sig input return sig res forM smp print res Output",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "embed",
          "normalized": "Signal a-\u003eSignalGen a b-\u003eSignalGen c b",
          "package": "elerea",
          "signature": "Signal p'-\u003eSignalGen p' a-\u003eSignalGen p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn IO action executed in the \u003ccode\u003e\u003ca\u003eSignalGen\u003c/a\u003e\u003c/code\u003e monad. Can be used as\n \u003ccode\u003eliftIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "execute",
          "package": "elerea",
          "signature": "IO a -\u003e SignalGen p a",
          "source": "src/FRP-Elerea-Param.html#execute",
          "type": "function"
        },
        "index": {
          "description": "An IO action executed in the SignalGen monad Can be used as liftIO",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "execute",
          "normalized": "IO a-\u003eSignalGen b a",
          "package": "elerea",
          "signature": "IO a-\u003eSignalGen p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that can be directly fed through the sink function\n returned.  This can be used to attach the network to the outer\n world.  Note that this is optional, as all the input of the network\n can be fed in through the global parameter, although that is not\n really convenient for many signals.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "external",
          "package": "elerea",
          "signature": "a-\u003e IO (Signal a, a -\u003e IO ())",
          "type": "function"
        },
        "index": {
          "description": "signal that can be directly fed through the sink function returned This can be used to attach the network to the outer world Note that this is optional as all the input of the network can be fed in through the global parameter although that is not really convenient for many signals",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "external",
          "normalized": "a-\u003eIO(Signal a,a-\u003eIO())",
          "package": "elerea",
          "signature": "a-\u003eIO(Signal a,a-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:external"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event-like signal that can be fed through the sink function\n returned.  The signal carries a list of values fed in since the\n last sampling, i.e. it is constantly [] if the sink is never\n invoked.  The order of elements is reversed, so the last value\n passed to the sink is the head of the list.  Note that unlike\n \u003ccode\u003e\u003ca\u003eexternal\u003c/a\u003e\u003c/code\u003e this function only returns a generator to be used within\n the expression constructing the top-level stream, and this\n generator can only be used once.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "externalMulti",
          "package": "elerea",
          "signature": "IO (SignalGen p (Signal [a]), a -\u003e IO ())",
          "type": "function"
        },
        "index": {
          "description": "An event-like signal that can be fed through the sink function returned The signal carries list of values fed in since the last sampling i.e it is constantly if the sink is never invoked The order of elements is reversed so the last value passed to the sink is the head of the list Note that unlike external this function only returns generator to be used within the expression constructing the top-level stream and this generator can only be used once",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "externalMulti",
          "normalized": "IO(SignalGen a(Signal[b]),b-\u003eIO())",
          "package": "elerea",
          "partial": "Multi",
          "signature": "IO(SignalGen p(Signal[a]),a-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:externalMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reactive signal that takes the value to output from a signal\n generator carried by its input with the sampling time provided as\n the start time for the generated structure.  It is possible to\n create new signals in the monad, which is the key to defining\n dynamic data-flow networks.\n\u003c/p\u003e\u003cpre\u003e generator \u003c\u003c \u003c|x00 x01 x02 ...|\u003e\n              \u003c|x10 x11 x12 ...|\u003e\n              \u003c|x20 x21 x22 ...|\u003e\n              ...\n           \u003e\u003e = \u003c| \u003c\u003cx00 x11 x22 ...\u003e\u003e\n                   \u003c\u003cx00 x11 x22 ...\u003e\u003e\n                   \u003c\u003cx00 x11 x22 ...\u003e\u003e\n                   ...\n                |\u003e\n\u003c/pre\u003e\u003cp\u003eIt can be thought of as the following function:\n\u003c/p\u003e\u003cpre\u003e generator g t_start s_input t_sample = g t_sample t_sample s_input\n\u003c/pre\u003e\u003cp\u003eIt has to live in the \u003ccode\u003e\u003ca\u003eSignalGen\u003c/a\u003e\u003c/code\u003e monad, because it needs to\n maintain an internal state to be able to cache the current sample\n for efficiency reasons. However, this state is not carried between\n samples, therefore start time doesn't matter and can be ignored.\n Also, even though it does not make use of the global input itself,\n part of its job is to distribute it among the newly generated\n signals.\n\u003c/p\u003e\u003cp\u003eRefer to the longer example at the bottom of \u003ca\u003eFRP.Elerea.Simple\u003c/a\u003e to\n see how it can be used.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "generator",
          "package": "elerea",
          "signature": "Signal (SignalGen p a)-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "reactive signal that takes the value to output from signal generator carried by its input with the sampling time provided as the start time for the generated structure It is possible to create new signals in the monad which is the key to defining dynamic data-flow networks generator x00 x01 x02 x10 x11 x12 x20 x21 x22 x00 x11 x22 x00 x11 x22 x00 x11 x22 It can be thought of as the following function generator start input sample sample sample input It has to live in the SignalGen monad because it needs to maintain an internal state to be able to cache the current sample for efficiency reasons However this state is not carried between samples therefore start time doesn matter and can be ignored Also even though it does not make use of the global input itself part of its job is to distribute it among the newly generated signals Refer to the longer example at the bottom of FRP.Elerea.Simple to see how it can be used",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "generator",
          "normalized": "Signal(SignalGen a b)-\u003eSignalGen a(Signal b)",
          "package": "elerea",
          "signature": "Signal(SignalGen p a)-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe common input signal that is fed through the function returned\n by \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, unless we are in an \u003ccode\u003e\u003ca\u003eembed\u003c/a\u003e\u003c/code\u003eded generator.  It is\n equivalent to the following function:\n\u003c/p\u003e\u003cpre\u003e input t_start s_input = s_input\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ do\n         sig \u003c- input\n         return (sig*2)\n     res \u003c- forM [4,1,3,5,2,8,6] smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [8,2,6,10,4,16,12]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Param",
          "name": "input",
          "package": "elerea",
          "signature": "SignalGen p (Signal p)",
          "source": "src/FRP-Elerea-Param.html#input",
          "type": "function"
        },
        "index": {
          "description": "The common input signal that is fed through the function returned by start unless we are in an embed ded generator It is equivalent to the following function input start input input Example do smp start do sig input return sig res forM smp print res Output",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "input",
          "package": "elerea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoising combinator.  It can be used to cache results of\n applicative combinators in case they are used in several places.\n It is observationally equivalent to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eSignalGen\u003c/a\u003e\u003c/code\u003e\n monad.\n\u003c/p\u003e\u003cpre\u003e memo s = \u003c|s s s s ...|\u003e\n\u003c/pre\u003e\u003cp\u003eFor instance, if \u003ccode\u003es = f \u003c$\u003e s'\u003c/code\u003e, then \u003ccode\u003ef\u003c/code\u003e will be recalculated\n once for each sampling of \u003ccode\u003es\u003c/code\u003e.  This can be avoided by writing \u003ccode\u003es\n \u003c- memo (f \u003c$\u003e s')\u003c/code\u003e instead.  However, \u003ccode\u003e\u003ca\u003ememo\u003c/a\u003e\u003c/code\u003e incurs a small\n overhead, therefore it should not be used blindly.\n\u003c/p\u003e\u003cp\u003eAll the functions defined in this module return memoised signals.\n Just like \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e, it is independent of the global input.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "memo",
          "package": "elerea",
          "signature": "Signal a-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "Memoising combinator It can be used to cache results of applicative combinators in case they are used in several places It is observationally equivalent to return in the SignalGen monad memo For instance if then will be recalculated once for each sampling of This can be avoided by writing memo instead However memo incurs small overhead therefore it should not be used blindly All the functions defined in this module return memoised signals Just like delay it is independent of the global input",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "memo",
          "normalized": "Signal a-\u003eSignalGen b(Signal a)",
          "package": "elerea",
          "signature": "Signal a-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formal conversion from signals to signal generators, which\n effectively allows for retrieving the current value of a previously\n created signal within a generator.  This includes both signals\n defined in an external scope as well as those created earlier in\n the same generator.  It can be modelled by the following function:\n\u003c/p\u003e\u003cpre\u003e snapshot s t_start s_input = s t_start\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Param",
          "name": "snapshot",
          "package": "elerea",
          "signature": "Signal a -\u003e SignalGen p a",
          "source": "src/FRP-Elerea-Param.html#snapshot",
          "type": "function"
        },
        "index": {
          "description": "formal conversion from signals to signal generators which effectively allows for retrieving the current value of previously created signal within generator This includes both signals defined in an external scope as well as those created earlier in the same generator It can be modelled by the following function snapshot start input start",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "snapshot",
          "normalized": "Signal a-\u003eSignalGen b a",
          "package": "elerea",
          "signature": "Signal a-\u003eSignalGen p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:snapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbedding a signal into an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e environment.  Repeated calls to\n the computation returned cause the whole network to be updated, and\n the current sample of the top-level signal is produced as a result.\n The computation accepts a global parameter that will be distributed\n to all signals.  For instance, this can be the time step, if we\n want to model continuous-time signals.  This is the only way to\n extract a signal generator outside the network, and it is\n equivalent to passing zero to the function representing the\n generator.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start (stateful 10 (+))\n     res \u003c- forM [5,3,2,9,4] smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [10,15,18,20,29]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Param",
          "name": "start",
          "package": "elerea",
          "signature": "SignalGen p (Signal a)-\u003e IO (p -\u003e IO a)",
          "type": "function"
        },
        "index": {
          "description": "Embedding signal into an IO environment Repeated calls to the computation returned cause the whole network to be updated and the current sample of the top-level signal is produced as result The computation accepts global parameter that will be distributed to all signals For instance this can be the time step if we want to model continuous-time signals This is the only way to extract signal generator outside the network and it is equivalent to passing zero to the function representing the generator Example do smp start stateful res forM smp print res Output",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "start",
          "normalized": "SignalGen a(Signal b)-\u003eIO(a-\u003eIO b)",
          "package": "elerea",
          "signature": "SignalGen p(Signal a)-\u003eIO(p-\u003eIO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA direct stateful transformation of the input.  The initial state\n is the first output, and every following output is calculated from\n the previous one and the value of the global parameter (which might\n have been overridden by \u003ccode\u003e\u003ca\u003eembed\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start (stateful \"\" (:))\n     res \u003c- forM \"olleh~\" smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [\"\",\"o\",\"lo\",\"llo\",\"ello\",\"hello\"]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Param",
          "name": "stateful",
          "package": "elerea",
          "signature": "a-\u003e (p -\u003e a -\u003e a)-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "direct stateful transformation of the input The initial state is the first output and every following output is calculated from the previous one and the value of the global parameter which might have been overridden by embed Example do smp start stateful res forM olleh smp print res Output lo llo ello hello",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "stateful",
          "normalized": "a-\u003e(b-\u003ea-\u003ea)-\u003eSignalGen b(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(p-\u003ea-\u003ea)-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:stateful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stateful transfer function.  The current input affects the\n current output, i.e. the initial state given in the first argument\n is considered to appear before the first output, and can never be\n observed.  Every output is derived from the current value of the\n input signal, the global parameter (which might have been\n overridden by \u003ccode\u003e\u003ca\u003eembed\u003c/a\u003e\u003c/code\u003e) and the previous output.  It is equivalent\n to the following expression:\n\u003c/p\u003e\u003cp\u003eExample (assuming a delta time is passed to the sampling function\n in each step):\n\u003c/p\u003e\u003cpre\u003e integral x0 s = transfer x0 (\\dt v x -\u003e x+dt*v)\n\u003c/pre\u003e\u003cp\u003eExample for using the above:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start (integral 3 (pure 2))\n     res \u003c- replicateM 7 (smp 0.1)\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [3.2,3.4,3.6,3.8,4.0,4.2,4.4]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Param",
          "name": "transfer",
          "package": "elerea",
          "signature": "a-\u003e (p -\u003e t -\u003e a -\u003e a)-\u003e Signal t-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "stateful transfer function The current input affects the current output i.e the initial state given in the first argument is considered to appear before the first output and can never be observed Every output is derived from the current value of the input signal the global parameter which might have been overridden by embed and the previous output It is equivalent to the following expression Example assuming delta time is passed to the sampling function in each step integral x0 transfer x0 dt dt Example for using the above do smp start integral pure res replicateM smp print res Output",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "transfer",
          "normalized": "a-\u003e(b-\u003ec-\u003ea-\u003ea)-\u003eSignal c-\u003eSignalGen b(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(p-\u003et-\u003ea-\u003ea)-\u003eSignal t-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:transfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variation of \u003ccode\u003e\u003ca\u003etransfer\u003c/a\u003e\u003c/code\u003e with two input signals.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "transfer2",
          "package": "elerea",
          "signature": "a-\u003e (p -\u003e t1 -\u003e t2 -\u003e a -\u003e a)-\u003e Signal t1-\u003e Signal t2-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "variation of transfer with two input signals",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "transfer2",
          "normalized": "a-\u003e(b-\u003ec-\u003ec-\u003ea-\u003ea)-\u003eSignal c-\u003eSignal c-\u003eSignalGen b(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(p-\u003et-\u003et-\u003ea-\u003ea)-\u003eSignal t-\u003eSignal t-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:transfer2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variation of \u003ccode\u003e\u003ca\u003etransfer\u003c/a\u003e\u003c/code\u003e with three input signals.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "transfer3",
          "package": "elerea",
          "signature": "a-\u003e (p -\u003e t1 -\u003e t2 -\u003e t3 -\u003e a -\u003e a)-\u003e Signal t1-\u003e Signal t2-\u003e Signal t3-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "variation of transfer with three input signals",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "transfer3",
          "normalized": "a-\u003e(b-\u003ec-\u003ec-\u003ec-\u003ea-\u003ea)-\u003eSignal c-\u003eSignal c-\u003eSignal c-\u003eSignalGen b(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(p-\u003et-\u003et-\u003et-\u003ea-\u003ea)-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:transfer3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variation of \u003ccode\u003e\u003ca\u003etransfer\u003c/a\u003e\u003c/code\u003e with four input signals.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Param",
          "name": "transfer4",
          "package": "elerea",
          "signature": "a-\u003e (p -\u003e t1 -\u003e t2 -\u003e t3 -\u003e t4 -\u003e a -\u003e a)-\u003e Signal t1-\u003e Signal t2-\u003e Signal t3-\u003e Signal t4-\u003e SignalGen p (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "variation of transfer with four input signals",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "transfer4",
          "normalized": "a-\u003e(b-\u003ec-\u003ec-\u003ec-\u003ec-\u003ea-\u003ea)-\u003eSignal c-\u003eSignal c-\u003eSignal c-\u003eSignal c-\u003eSignalGen b(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(p-\u003et-\u003et-\u003et-\u003et-\u003ea-\u003ea)-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignalGen p(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:transfer4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that is true exactly once: the first time the input\n signal is true.  Afterwards, it is constantly false, and it holds\n no reference to the input signal.  For instance (assuming the rest\n of the input is constantly \u003ccode\u003eFalse\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e until \u003c\u003cFalse False True True False True ...\u003e\u003e =\n     \u003c| \u003c\u003cFalse False True  False False False False False False False ...\u003e\u003e\n        \u003c\u003c ---  False True  False False False False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---  True  False False False False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---   ---  True  False False False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---   ---   ---  False True  False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---   ---   ---   ---  True  False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---   ---   ---   ---   ---  False False False False ...\u003e\u003e\n        ...\n     |\u003e\n\u003c/pre\u003e\u003cp\u003eIt is observationally equivalent to the following expression (which\n would hold onto \u003ccode\u003es\u003c/code\u003e forever):\n\u003c/p\u003e\u003cpre\u003e until s = do\n     step \u003c- transfer False (const (||)) s\n     dstep \u003c- delay False step\n     memo (liftA2 (/=) step dstep)\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ do\n         accum \u003c- stateful 0 (+)\n         tick \u003c- until ((\u003e=10) \u003c$\u003e accum)\n         return $ liftA2 (,) accum tick\n     res \u003c- forM [4,1,3,5,2,8,6] smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [(0,False),(4,False),(5,False),(8,False),(13,True),(15,False),(23,False)]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Param",
          "name": "until",
          "package": "elerea",
          "signature": "Signal Bool-\u003e SignalGen p (Signal Bool)",
          "type": "function"
        },
        "index": {
          "description": "signal that is true exactly once the first time the input signal is true Afterwards it is constantly false and it holds no reference to the input signal For instance assuming the rest of the input is constantly False until False False True True False True False False True False False False False False False False False True False False False False False False False True False False False False False False False True False False False False False False False True False False False False True False False False False False False False False It is observationally equivalent to the following expression which would hold onto forever until do step transfer False const dstep delay False step memo liftA2 step dstep Example do smp start do accum stateful tick until accum return liftA2 accum tick res forM smp print res Output False False False False True False False",
          "hierarchy": "FRP Elerea Param",
          "module": "FRP.Elerea.Param",
          "name": "until",
          "normalized": "Signal Bool-\u003eSignalGen a(Signal Bool)",
          "package": "elerea",
          "signature": "Signal Bool-\u003eSignalGen p(Signal Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Param.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the reference implementation for the pure subset\nof the simple variant of Elerea.  I/O embedding is substituted by\nconversion from and to lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "Pure",
          "package": "elerea",
          "source": "src/FRP-Elerea-Simple-Pure.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the reference implementation for the pure subset of the simple variant of Elerea embedding is substituted by conversion from and to lists",
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "Pure",
          "package": "elerea",
          "partial": "Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "Signal",
          "package": "elerea",
          "source": "src/FRP-Elerea-Simple-Pure.html#Signal",
          "type": "type"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "Signal",
          "package": "elerea",
          "partial": "Signal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "SignalGen",
          "package": "elerea",
          "source": "src/FRP-Elerea-Simple-Pure.html#SignalGen",
          "type": "type"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "SignalGen",
          "package": "elerea",
          "partial": "Signal Gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#t:SignalGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "delay",
          "package": "elerea",
          "signature": "a -\u003e Signal a -\u003e SignalGen (Signal a)",
          "source": "src/FRP-Elerea-Simple-Pure.html#delay",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "delay",
          "normalized": "a-\u003eSignal a-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003eSignal a-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "fromList",
          "package": "elerea",
          "signature": "[a] -\u003e Signal a",
          "source": "src/FRP-Elerea-Simple-Pure.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "fromList",
          "normalized": "[a]-\u003eSignal a",
          "package": "elerea",
          "partial": "List",
          "signature": "[a]-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "generator",
          "package": "elerea",
          "signature": "Signal (SignalGen a) -\u003e SignalGen (Signal a)",
          "source": "src/FRP-Elerea-Simple-Pure.html#generator",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "generator",
          "normalized": "Signal(SignalGen a)-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "Signal(SignalGen a)-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "memo",
          "package": "elerea",
          "signature": "Signal a -\u003e SignalGen (Signal a)",
          "source": "src/FRP-Elerea-Simple-Pure.html#memo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "memo",
          "normalized": "Signal a-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "Signal a-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "snapshot",
          "package": "elerea",
          "signature": "Signal a -\u003e SignalGen a",
          "source": "src/FRP-Elerea-Simple-Pure.html#snapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "snapshot",
          "normalized": "Signal a-\u003eSignalGen a",
          "package": "elerea",
          "signature": "Signal a-\u003eSignalGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:snapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "start",
          "package": "elerea",
          "signature": "SignalGen (Signal a) -\u003e [a]",
          "source": "src/FRP-Elerea-Simple-Pure.html#start",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "start",
          "normalized": "SignalGen(Signal a)-\u003e[a]",
          "package": "elerea",
          "signature": "SignalGen(Signal a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "stateful",
          "package": "elerea",
          "signature": "a -\u003e (a -\u003e a) -\u003e SignalGen (Signal a)",
          "source": "src/FRP-Elerea-Simple-Pure.html#stateful",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "stateful",
          "normalized": "a-\u003e(a-\u003ea)-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(a-\u003ea)-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:stateful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "toList",
          "package": "elerea",
          "signature": "Signal a -\u003e [a]",
          "source": "src/FRP-Elerea-Simple-Pure.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "toList",
          "normalized": "Signal a-\u003e[a]",
          "package": "elerea",
          "partial": "List",
          "signature": "Signal a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "transfer",
          "package": "elerea",
          "signature": "a -\u003e (t -\u003e a -\u003e a) -\u003e Signal t -\u003e SignalGen (Signal a)",
          "source": "src/FRP-Elerea-Simple-Pure.html#transfer",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "transfer",
          "normalized": "a-\u003e(b-\u003ea-\u003ea)-\u003eSignal b-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(t-\u003ea-\u003ea)-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:transfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "transfer2",
          "package": "elerea",
          "signature": "a -\u003e (t1 -\u003e t2 -\u003e a -\u003e a) -\u003e Signal t1 -\u003e Signal t2 -\u003e SignalGen (Signal a)",
          "source": "src/FRP-Elerea-Simple-Pure.html#transfer2",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "transfer2",
          "normalized": "a-\u003e(b-\u003eb-\u003ea-\u003ea)-\u003eSignal b-\u003eSignal b-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(t-\u003et-\u003ea-\u003ea)-\u003eSignal t-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:transfer2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "transfer3",
          "package": "elerea",
          "signature": "a -\u003e (t1 -\u003e t2 -\u003e t3 -\u003e a -\u003e a) -\u003e Signal t1 -\u003e Signal t2 -\u003e Signal t3 -\u003e SignalGen (Signal a)",
          "source": "src/FRP-Elerea-Simple-Pure.html#transfer3",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "transfer3",
          "normalized": "a-\u003e(b-\u003eb-\u003eb-\u003ea-\u003ea)-\u003eSignal b-\u003eSignal b-\u003eSignal b-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(t-\u003et-\u003et-\u003ea-\u003ea)-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:transfer3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.Simple.Pure",
          "name": "transfer4",
          "package": "elerea",
          "signature": "a -\u003e (t1 -\u003e t2 -\u003e t3 -\u003e t4 -\u003e a -\u003e a) -\u003e Signal t1 -\u003e Signal t2 -\u003e Signal t3 -\u003e Signal t4 -\u003e SignalGen (Signal a)",
          "source": "src/FRP-Elerea-Simple-Pure.html#transfer4",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "transfer4",
          "normalized": "a-\u003e(b-\u003eb-\u003eb-\u003eb-\u003ea-\u003ea)-\u003eSignal b-\u003eSignal b-\u003eSignal b-\u003eSignal b-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(t-\u003et-\u003et-\u003et-\u003ea-\u003ea)-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:transfer4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003euntil\u003c/a\u003e\u003c/code\u003e p f\u003c/code\u003e yields the result of applying \u003ccode\u003ef\u003c/code\u003e until \u003ccode\u003ep\u003c/code\u003e holds.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "until",
          "package": "elerea",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "until yields the result of applying until holds",
          "hierarchy": "FRP Elerea Simple Pure",
          "module": "FRP.Elerea.Simple.Pure",
          "name": "until",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "elerea",
          "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple-Pure.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides leak-free and referentially transparent\nhigher-order discrete signals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "Simple",
          "package": "elerea",
          "source": "src/FRP-Elerea-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides leak-free and referentially transparent higher-order discrete signals",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "Simple",
          "package": "elerea",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal represents a value changing over time.  It can be\n thought of as a function of type \u003ccode\u003eNat -\u003e a\u003c/code\u003e, where the argument is\n the sampling time, and the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance agrees with the\n intuition (bind corresponds to extracting the current sample).\n Signals and the values they carry are denoted the following way in\n the documentation:\n\u003c/p\u003e\u003cpre\u003e s = \u003c\u003cs0 s1 s2 ...\u003e\u003e\n\u003c/pre\u003e\u003cp\u003eThis says that \u003ccode\u003es\u003c/code\u003e is a signal that reads \u003ccode\u003es0\u003c/code\u003e during the first\n sampling, \u003ccode\u003es1\u003c/code\u003e during the second and so on.  You can also think of\n \u003ccode\u003es\u003c/code\u003e as the following function:\n\u003c/p\u003e\u003cpre\u003e s t_sample = [s0,s1,s2,...] !! t_sample\n\u003c/pre\u003e\u003cp\u003eSignals are constrained to be sampled sequentially, there is no\n random access.  The only way to observe their output is through\n \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "Signal",
          "package": "elerea",
          "source": "src/FRP-Elerea-Simple.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "signal represents value changing over time It can be thought of as function of type Nat where the argument is the sampling time and the Monad instance agrees with the intuition bind corresponds to extracting the current sample Signals and the values they carry are denoted the following way in the documentation s0 s1 s2 This says that is signal that reads s0 during the first sampling s1 during the second and so on You can also think of as the following function sample s0 s1 s2 sample Signals are constrained to be sampled sequentially there is no random access The only way to observe their output is through start",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "Signal",
          "package": "elerea",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal generator is the only source of stateful signals.  It\n can be thought of as a function of type \u003ccode\u003eNat -\u003e a\u003c/code\u003e, where the\n result is an arbitrary data structure that can potentially contain\n new signals, and the argument is the creation time of these new\n signals.  It exposes the \u003ccode\u003e\u003ca\u003eMonadFix\u003c/a\u003e\u003c/code\u003e interface, which makes it\n possible to define signals in terms of each other.  The denotation\n of signal generators happens to be the same as that of signals, but\n this partly accidental (it does not hold in the other variants), so\n we will use a separate notation for generators:\n\u003c/p\u003e\u003cpre\u003e g = \u003c|g0 g1 g2 ...|\u003e\n\u003c/pre\u003e\u003cp\u003eJust like signals, generators behave as functions of time:\n\u003c/p\u003e\u003cpre\u003e g t_start = [g0,g1,g2,...] !! t_start\n\u003c/pre\u003e\u003cp\u003eThe conceptual difference between the two notions is that signals\n are passed a sampling time, while generators expect a start time\n that will be the creation time of all the freshly generated\n signals in the resulting structure.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "SignalGen",
          "package": "elerea",
          "source": "src/FRP-Elerea-Simple.html#SignalGen",
          "type": "data"
        },
        "index": {
          "description": "signal generator is the only source of stateful signals It can be thought of as function of type Nat where the result is an arbitrary data structure that can potentially contain new signals and the argument is the creation time of these new signals It exposes the MonadFix interface which makes it possible to define signals in terms of each other The denotation of signal generators happens to be the same as that of signals but this partly accidental it does not hold in the other variants so we will use separate notation for generators g0 g1 g2 Just like signals generators behave as functions of time start g0 g1 g2 start The conceptual difference between the two notions is that signals are passed sampling time while generators expect start time that will be the creation time of all the freshly generated signals in the resulting structure",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "SignalGen",
          "package": "elerea",
          "partial": "Signal Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#t:SignalGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e combinator is the elementary building block for\n adding state to the signal network by constructing delayed versions\n of a signal that emit a given value at creation time and the\n previous output of the signal afterwards (\u003ccode\u003e--\u003c/code\u003e is undefined):\n\u003c/p\u003e\u003cpre\u003e delay x0 s = \u003c| \u003c\u003cx0 s0 s1 s2 s3 ...\u003e\u003e\n                 \u003c\u003c-- x0 s1 s2 s3 ...\u003e\u003e\n                 \u003c\u003c-- -- x0 s2 s3 ...\u003e\u003e\n                 \u003c\u003c-- -- -- x0 s3 ...\u003e\u003e\n                 ...\n              |\u003e\n\u003c/pre\u003e\u003cp\u003eIt can be thought of as the following function (which should also\n make it clear why the return value is \u003ccode\u003e\u003ca\u003eSignalGen\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e delay x0 s t_start t_sample\n   | t_start == t_sample = x0\n   | t_start \u003c t_sample  = s (t_sample-1)\n   | otherwise           = error \\\"Premature sample!\\\"\n\u003c/pre\u003e\u003cp\u003eThe way signal generators are extracted by \u003ccode\u003e\u003ca\u003egenerator\u003c/a\u003e\u003c/code\u003e ensures that\n the error can never happen.\n\u003c/p\u003e\u003cp\u003eExample (requires the \u003ccode\u003eDoRec\u003c/code\u003e extension):\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ do\n         rec let fib'' = liftA2 (+) fib' fib\n             fib' \u003c- delay 1 fib''\n             fib \u003c- delay 1 fib'\n         return fib\n     res \u003c- replicateM 7 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [1,1,2,3,5,8,13]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "delay",
          "package": "elerea",
          "signature": "a-\u003e Signal a-\u003e SignalGen (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "The delay combinator is the elementary building block for adding state to the signal network by constructing delayed versions of signal that emit given value at creation time and the previous output of the signal afterwards is undefined delay x0 x0 s0 s1 s2 s3 x0 s1 s2 s3 x0 s2 s3 x0 s3 It can be thought of as the following function which should also make it clear why the return value is SignalGen delay x0 start sample start sample x0 start sample sample-1 otherwise error Premature sample The way signal generators are extracted by generator ensures that the error can never happen Example requires the DoRec extension do smp start do rec let fib liftA2 fib fib fib delay fib fib delay fib return fib res replicateM smp print res Output",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "delay",
          "normalized": "a-\u003eSignal a-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003eSignal a-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that executes a given IO action once at every sampling.\n\u003c/p\u003e\u003cp\u003eIn essence, this combinator provides cooperative multitasking\n capabilities, and its primary purpose is to assist library writers\n in wrapping effectful APIs as conceptually pure signals.  If there\n are several effectful signals in the system, their order of\n execution is undefined and should not be relied on.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ do\n         ref \u003c- execute $ newIORef 0\n         effectful $ do\n             x \u003c- readIORef ref\n             putStrLn $ \"Count: \" ++ show x\n             writeIORef ref $! x+1\n             return ()\n     replicateM_ 5 smp\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e Count: 0\n Count: 1\n Count: 2\n Count: 3\n Count: 4\n\u003c/pre\u003e\u003cp\u003eAnother example (requires mersenne-random):\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ effectful randomIO :: IO (IO Double)\n     res \u003c- replicateM 5 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [0.12067753390401374,0.8658877349182655,0.7159264443196786,0.1756941896012891,0.9513646060896676]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "effectful",
          "package": "elerea",
          "signature": "IO a-\u003e SignalGen (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "signal that executes given IO action once at every sampling In essence this combinator provides cooperative multitasking capabilities and its primary purpose is to assist library writers in wrapping effectful APIs as conceptually pure signals If there are several effectful signals in the system their order of execution is undefined and should not be relied on Example do smp start do ref execute newIORef effectful do readIORef ref putStrLn Count show writeIORef ref return replicateM smp Output Count Count Count Count Count Another example requires mersenne-random do smp start effectful randomIO IO IO Double res replicateM smp print res Output",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "effectful",
          "normalized": "IO a-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "IO a-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:effectful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn IO action executed in the \u003ccode\u003e\u003ca\u003eSignalGen\u003c/a\u003e\u003c/code\u003e monad. Can be used as\n \u003ccode\u003eliftIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "execute",
          "package": "elerea",
          "signature": "IO a -\u003e SignalGen a",
          "source": "src/FRP-Elerea-Simple.html#execute",
          "type": "function"
        },
        "index": {
          "description": "An IO action executed in the SignalGen monad Can be used as liftIO",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "execute",
          "normalized": "IO a-\u003eSignalGen a",
          "package": "elerea",
          "signature": "IO a-\u003eSignalGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event-like signal that can be fed through the sink function\n returned.  The signal carries a list of values fed in since the\n last sampling, i.e. it is constantly \u003ccode\u003e[]\u003c/code\u003e if the sink is never\n invoked.  The order of elements is reversed, so the last value\n passed to the sink is the head of the list.  Note that unlike\n \u003ccode\u003e\u003ca\u003eexternal\u003c/a\u003e\u003c/code\u003e this function only returns a generator to be used within\n the expression constructing the top-level stream, and this\n generator can only be used once.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     (gen,snk) \u003c- externalMulti\n     smp \u003c- start gen\n     r1 \u003c- smp\n     snk 7\n     r2 \u003c- smp\n     r3 \u003c- smp\n     snk 9\n     snk 2\n     r4 \u003c- smp\n     print [r1,r2,r3,r4]\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [[],[7],[],[2,9]]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "externalMulti",
          "package": "elerea",
          "signature": "IO (SignalGen (Signal [a]), a -\u003e IO ())",
          "type": "function"
        },
        "index": {
          "description": "An event-like signal that can be fed through the sink function returned The signal carries list of values fed in since the last sampling i.e it is constantly if the sink is never invoked The order of elements is reversed so the last value passed to the sink is the head of the list Note that unlike external this function only returns generator to be used within the expression constructing the top-level stream and this generator can only be used once Example do gen snk externalMulti smp start gen r1 smp snk r2 smp r3 smp snk snk r4 smp print r1 r2 r3 r4 Output",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "externalMulti",
          "normalized": "IO(SignalGen(Signal[a]),a-\u003eIO())",
          "package": "elerea",
          "partial": "Multi",
          "signature": "IO(SignalGen(Signal[a]),a-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:externalMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reactive signal that takes the value to output from a signal\n generator carried by its input with the sampling time provided as\n the start time for the generated structure.  It is possible to\n create new signals in the monad, which is the key to defining\n dynamic data-flow networks.\n\u003c/p\u003e\u003cpre\u003e generator \u003c\u003c \u003c|x00 x01 x02 ...|\u003e\n              \u003c|x10 x11 x12 ...|\u003e\n              \u003c|x20 x21 x22 ...|\u003e\n              ...\n           \u003e\u003e = \u003c| \u003c\u003cx00 x11 x22 ...\u003e\u003e\n                   \u003c\u003cx00 x11 x22 ...\u003e\u003e\n                   \u003c\u003cx00 x11 x22 ...\u003e\u003e\n                   ...\n                |\u003e\n\u003c/pre\u003e\u003cp\u003eIt can be thought of as the following function:\n\u003c/p\u003e\u003cpre\u003e generator g t_start t_sample = g t_sample t_sample\n\u003c/pre\u003e\u003cp\u003eIt has to live in the \u003ccode\u003e\u003ca\u003eSignalGen\u003c/a\u003e\u003c/code\u003e monad, because it needs to\n maintain an internal state to be able to cache the current sample\n for efficiency reasons. However, this state is not carried between\n samples, therefore start time doesn't matter and can be ignored.\n\u003c/p\u003e\u003cp\u003eRefer to the longer example at the bottom to see how it can be\n used.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "generator",
          "package": "elerea",
          "signature": "Signal (SignalGen a)-\u003e SignalGen (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "reactive signal that takes the value to output from signal generator carried by its input with the sampling time provided as the start time for the generated structure It is possible to create new signals in the monad which is the key to defining dynamic data-flow networks generator x00 x01 x02 x10 x11 x12 x20 x21 x22 x00 x11 x22 x00 x11 x22 x00 x11 x22 It can be thought of as the following function generator start sample sample sample It has to live in the SignalGen monad because it needs to maintain an internal state to be able to cache the current sample for efficiency reasons However this state is not carried between samples therefore start time doesn matter and can be ignored Refer to the longer example at the bottom to see how it can be used",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "generator",
          "normalized": "Signal(SignalGen a)-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "Signal(SignalGen a)-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoising combinator.  It can be used to cache results of\n applicative combinators in case they are used in several places.\n It is observationally equivalent to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eSignalGen\u003c/a\u003e\u003c/code\u003e\n monad.\n\u003c/p\u003e\u003cpre\u003e memo s = \u003c|s s s s ...|\u003e\n\u003c/pre\u003e\u003cp\u003eFor instance, if \u003ccode\u003es = f \u003c$\u003e s'\u003c/code\u003e, then \u003ccode\u003ef\u003c/code\u003e will be recalculated\n once for each sampling of \u003ccode\u003es\u003c/code\u003e.  This can be avoided by writing \u003ccode\u003es\n \u003c- memo (f \u003c$\u003e s')\u003c/code\u003e instead.  However, \u003ccode\u003e\u003ca\u003ememo\u003c/a\u003e\u003c/code\u003e incurs a small\n overhead, therefore it should not be used blindly.\n\u003c/p\u003e\u003cp\u003eAll the functions defined in this module return memoised signals.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "memo",
          "package": "elerea",
          "signature": "Signal a-\u003e SignalGen (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "Memoising combinator It can be used to cache results of applicative combinators in case they are used in several places It is observationally equivalent to return in the SignalGen monad memo For instance if then will be recalculated once for each sampling of This can be avoided by writing memo instead However memo incurs small overhead therefore it should not be used blindly All the functions defined in this module return memoised signals",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "memo",
          "normalized": "Signal a-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "Signal a-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA formal conversion from signals to signal generators, which\n effectively allows for retrieving the current value of a previously\n created signal within a generator.  This includes both signals\n defined in an external scope as well as those created earlier in\n the same generator.  In the model, it corresponds to the identity\n function.\n\u003c/p\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "snapshot",
          "package": "elerea",
          "signature": "Signal a -\u003e SignalGen a",
          "source": "src/FRP-Elerea-Simple.html#snapshot",
          "type": "function"
        },
        "index": {
          "description": "formal conversion from signals to signal generators which effectively allows for retrieving the current value of previously created signal within generator This includes both signals defined in an external scope as well as those created earlier in the same generator In the model it corresponds to the identity function",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "snapshot",
          "normalized": "Signal a-\u003eSignalGen a",
          "package": "elerea",
          "signature": "Signal a-\u003eSignalGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:snapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbedding a signal into an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e environment.  Repeated calls to\n the computation returned cause the whole network to be updated, and\n the current sample of the top-level signal is produced as a\n result. This is the only way to extract a signal generator outside\n the network, and it is equivalent to passing zero to the function\n representing the generator.  In general:\n\u003c/p\u003e\u003cpre\u003e replicateM n =\u003c\u003c start \u003c|\u003c\u003cx0 x1 x2 x3 ...\u003e\u003e ...|\u003e == take n [x0,x1,x2,x3,...]\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start (stateful 3 (+2))\n     res \u003c- replicateM 5 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [3,5,7,9,11]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "start",
          "package": "elerea",
          "signature": "SignalGen (Signal a)-\u003e IO (IO a)",
          "type": "function"
        },
        "index": {
          "description": "Embedding signal into an IO environment Repeated calls to the computation returned cause the whole network to be updated and the current sample of the top-level signal is produced as result This is the only way to extract signal generator outside the network and it is equivalent to passing zero to the function representing the generator In general replicateM start x0 x1 x2 x3 take x0 x1 x2 x3 Example do smp start stateful res replicateM smp print res Output",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "start",
          "normalized": "SignalGen(Signal a)-\u003eIO(IO a)",
          "package": "elerea",
          "signature": "SignalGen(Signal a)-\u003eIO(IO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure stateful signal.  The initial state is the first output,\n and every subsequent state is derived from the preceding one by\n applying a pure transformation.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start (stateful \"x\" ('x':))\n     res \u003c- replicateM 5 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [\"x\",\"xx\",\"xxx\",\"xxxx\",\"xxxxx\"]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "stateful",
          "package": "elerea",
          "signature": "a-\u003e (a -\u003e a)-\u003e SignalGen (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "pure stateful signal The initial state is the first output and every subsequent state is derived from the preceding one by applying pure transformation Example do smp start stateful res replicateM smp print res Output xx xxx xxxx xxxxx",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "stateful",
          "normalized": "a-\u003e(a-\u003ea)-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(a-\u003ea)-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:stateful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stateful transfer function.  The current input affects the\n current output, i.e. the initial state given in the first argument\n is considered to appear before the first output, and can never be\n observed, and subsequent states are determined by combining the\n preceding state with the current output of the input signal using\n the function supplied.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ do\n         cnt \u003c- stateful 1 (+1)\n         transfer 10 (+) cnt\n     res \u003c- replicateM 5 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [11,13,16,20,25]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "transfer",
          "package": "elerea",
          "signature": "a-\u003e (t -\u003e a -\u003e a)-\u003e Signal t-\u003e SignalGen (Signal a)",
          "type": "function"
        },
        "index": {
          "description": "stateful transfer function The current input affects the current output i.e the initial state given in the first argument is considered to appear before the first output and can never be observed and subsequent states are determined by combining the preceding state with the current output of the input signal using the function supplied Example do smp start do cnt stateful transfer cnt res replicateM smp print res Output",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "transfer",
          "normalized": "a-\u003e(b-\u003ea-\u003ea)-\u003eSignal b-\u003eSignalGen(Signal a)",
          "package": "elerea",
          "signature": "a-\u003e(t-\u003ea-\u003ea)-\u003eSignal t-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:transfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that is true exactly once: the first time the input\n signal is true.  Afterwards, it is constantly false, and it holds\n no reference to the input signal.  For instance (assuming the rest\n of the input is constantly \u003ccode\u003eFalse\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e until \u003c\u003cFalse False True True False True ...\u003e\u003e =\n     \u003c| \u003c\u003cFalse False True  False False False False False False False ...\u003e\u003e\n        \u003c\u003c ---  False True  False False False False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---  True  False False False False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---   ---  True  False False False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---   ---   ---  False True  False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---   ---   ---   ---  True  False False False False ...\u003e\u003e\n        \u003c\u003c ---   ---   ---   ---   ---   ---  False False False False ...\u003e\u003e\n        ...\n     |\u003e\n\u003c/pre\u003e\u003cp\u003eIt is observationally equivalent to the following expression (which\n would hold onto \u003ccode\u003es\u003c/code\u003e forever):\n\u003c/p\u003e\u003cpre\u003e until s = do\n     step \u003c- transfer False (||) s\n     dstep \u003c- delay False step\n     memo (liftA2 (/=) step dstep)\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     smp \u003c- start $ do\n         cnt \u003c- stateful 0 (+1)\n         tick \u003c- until ((\u003e=3) \u003c$\u003e cnt)\n         return $ liftA2 (,) cnt tick\n     res \u003c- replicateM 6 smp\n     print res\n\u003c/pre\u003e\u003cp\u003eOutput:\n\u003c/p\u003e\u003cpre\u003e [(0,False),(1,False),(2,False),(3,True),(4,False),(5,False)]\n\u003c/pre\u003e",
          "module": "FRP.Elerea.Simple",
          "name": "until",
          "package": "elerea",
          "signature": "Signal Bool-\u003e SignalGen (Signal Bool)",
          "type": "function"
        },
        "index": {
          "description": "signal that is true exactly once the first time the input signal is true Afterwards it is constantly false and it holds no reference to the input signal For instance assuming the rest of the input is constantly False until False False True True False True False False True False False False False False False False False True False False False False False False False True False False False False False False False True False False False False False False False True False False False False True False False False False False False False False It is observationally equivalent to the following expression which would hold onto forever until do step transfer False dstep delay False step memo liftA2 step dstep Example do smp start do cnt stateful tick until cnt return liftA2 cnt tick res replicateM smp print res Output False False False True False False",
          "hierarchy": "FRP Elerea Simple",
          "module": "FRP.Elerea.Simple",
          "name": "until",
          "normalized": "Signal Bool-\u003eSignalGen(Signal Bool)",
          "package": "elerea",
          "signature": "Signal Bool-\u003eSignalGen(Signal Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea-Simple.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eElerea (Eventless reactivity) is a tiny discrete time FRP\nimplementation without the notion of event-based switching and\nsampling, with first-class signals (time-varying values).  Reactivity\nis provided through various higher-order constructs that also allow\nthe user to work with arbitrary time-varying structures containing\nlive signals.  Signals have precise and simple denotational semantics.\n\u003c/p\u003e\u003cp\u003eStateful signals can be safely generated at any time through a monadic\ninterface, while stateless combinators can be used in a purely\napplicative style.  Elerea signals can be defined recursively, and\nexternal input is trivial to attach.  The library comes in three major\nvariants, one of which you need to import:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eFRP.Elerea.Simple\u003c/a\u003e: signals are plain discrete streams isomorphic\nto functions over natural numbers;\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eFRP.Elerea.Param\u003c/a\u003e: adds a globally accessible input signal for\nconvenience;\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eFRP.Elerea.Clocked\u003c/a\u003e: adds the ability to freeze whole subnetworks\nat will.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eElerea is a minimal library that defines only some basic primitives,\nand you are advised to install \u003ccode\u003eelerea-examples\u003c/code\u003e as well to get an\nidea how to build non-trivial systems with it.  The examples are\nseparated in order to minimise the dependencies of the core library.\nThe \u003ccode\u003edow\u003c/code\u003e package contains a full game built on top of the simple\nvariant.\n\u003c/p\u003e\u003cp\u003eThe basic idea of the implementation is described in the WFLP 2010\npaper \u003cem\u003eEfficient and Compositional Higher-Order Streams\u003c/em\u003e\n(\u003ca\u003ehttp://sgate.emt.bme.hu/documents/patai/publications/PataiWFLP2010.pdf\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eIn short, the basic idea is to define completely dynamic data-flow\nnetworks through a pure combinator-style monadic interface.  The\nnetwork can be turned into an I/O action that samples it sequentially\nby the \u003ccode\u003estart\u003c/code\u003e function.  Under the hood, the network is represented\nby mutable variables whose interconnections are encapsulated in\nclosures, and consistency is ensured by a two-phase update process\n(essentially double buffering).  The library keeps track of the\nvariables through weak pointers, so all of the live variables can be\nupdated (this is necessary to ensure referential transparency), and\nunused ones can be garbage collected.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Elerea",
          "name": "Elerea",
          "package": "elerea",
          "source": "src/FRP-Elerea.html",
          "type": "module"
        },
        "index": {
          "description": "Elerea Eventless reactivity is tiny discrete time FRP implementation without the notion of event-based switching and sampling with first-class signals time-varying values Reactivity is provided through various higher-order constructs that also allow the user to work with arbitrary time-varying structures containing live signals Signals have precise and simple denotational semantics Stateful signals can be safely generated at any time through monadic interface while stateless combinators can be used in purely applicative style Elerea signals can be defined recursively and external input is trivial to attach The library comes in three major variants one of which you need to import FRP.Elerea.Simple signals are plain discrete streams isomorphic to functions over natural numbers FRP.Elerea.Param adds globally accessible input signal for convenience FRP.Elerea.Clocked adds the ability to freeze whole subnetworks at will Elerea is minimal library that defines only some basic primitives and you are advised to install elerea-examples as well to get an idea how to build non-trivial systems with it The examples are separated in order to minimise the dependencies of the core library The dow package contains full game built on top of the simple variant The basic idea of the implementation is described in the WFLP paper Efficient and Compositional Higher-Order Streams http sgate.emt.bme.hu documents patai publications PataiWFLP2010.pdf In short the basic idea is to define completely dynamic data-flow networks through pure combinator-style monadic interface The network can be turned into an action that samples it sequentially by the start function Under the hood the network is represented by mutable variables whose interconnections are encapsulated in closures and consistency is ensured by two-phase update process essentially double buffering The library keeps track of the variables through weak pointers so all of the live variables can be updated this is necessary to ensure referential transparency and unused ones can be garbage collected",
          "hierarchy": "FRP Elerea",
          "module": "FRP.Elerea",
          "name": "Elerea",
          "package": "elerea",
          "partial": "Elerea",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/elerea/docs/FRP-Elerea.html#"
      }
    }
  ]
]