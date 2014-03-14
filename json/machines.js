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
        "word": "machines"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide a notion of fanout wherein a single input is passed to\n several consumers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Machine.Fanout",
          "name": "Fanout",
          "package": "machines",
          "source": "src/Data-Machine-Fanout.html",
          "type": "module"
        },
        "index": {
          "description": "Provide notion of fanout wherein single input is passed to several consumers",
          "hierarchy": "Data Machine Fanout",
          "module": "Data.Machine.Fanout",
          "name": "Fanout",
          "package": "machines",
          "partial": "Fanout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Fanout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShare inputs with each of a list of processes in lockstep. Any\n values yielded by the processes are combined into a single yield\n from the composite process.\n\u003c/p\u003e",
          "module": "Data.Machine.Fanout",
          "name": "fanout",
          "package": "machines",
          "signature": "[ProcessT m a r] -\u003e ProcessT m a r",
          "source": "src/Data-Machine-Fanout.html#fanout",
          "type": "function"
        },
        "index": {
          "description": "Share inputs with each of list of processes in lockstep Any values yielded by the processes are combined into single yield from the composite process",
          "hierarchy": "Data Machine Fanout",
          "module": "Data.Machine.Fanout",
          "name": "fanout",
          "normalized": "[ProcessT a b c]-\u003eProcessT a b c",
          "package": "machines",
          "signature": "[ProcessT m a r]-\u003eProcessT m a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Fanout.html#v:fanout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShare inputs with each of a list of processes in lockstep. If\n none of the processes yields a value, the composite process will\n itself yield \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e. The idea is to provide a handle on steps\n only executed for their side effects. For instance, if you want to\n run a collection of \u003ccode\u003e\u003ca\u003eProcessT\u003c/a\u003e\u003c/code\u003es that await but don't yield some\n number of times, you can use 'fanOutSteps . map (fmap (const ()))'\n followed by a \u003ccode\u003e\u003ca\u003etaking\u003c/a\u003e\u003c/code\u003e process.\n\u003c/p\u003e",
          "module": "Data.Machine.Fanout",
          "name": "fanoutSteps",
          "package": "machines",
          "signature": "[ProcessT m a r] -\u003e ProcessT m a r",
          "source": "src/Data-Machine-Fanout.html#fanoutSteps",
          "type": "function"
        },
        "index": {
          "description": "Share inputs with each of list of processes in lockstep If none of the processes yields value the composite process will itself yield mempty The idea is to provide handle on steps only executed for their side effects For instance if you want to run collection of ProcessT that await but don yield some number of times you can use fanOutSteps map fmap const followed by taking process",
          "hierarchy": "Data Machine Fanout",
          "module": "Data.Machine.Fanout",
          "name": "fanoutSteps",
          "normalized": "[ProcessT a b c]-\u003eProcessT a b c",
          "package": "machines",
          "partial": "Steps",
          "signature": "[ProcessT m a r]-\u003eProcessT m a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Fanout.html#v:fanoutSteps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Is",
          "name": "Is",
          "package": "machines",
          "source": "src/Data-Machine-Is.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Machine Is",
          "module": "Data.Machine.Is",
          "name": "Is",
          "package": "machines",
          "partial": "Is",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Is.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWitnessed type equality\n\u003c/p\u003e",
          "module": "Data.Machine.Is",
          "name": "Is",
          "package": "machines",
          "source": "src/Data-Machine-Is.html#Is",
          "type": "data"
        },
        "index": {
          "description": "Witnessed type equality",
          "hierarchy": "Data Machine Is",
          "module": "Data.Machine.Is",
          "name": "Is",
          "package": "machines",
          "partial": "Is",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Is.html#t:Is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Is",
          "name": "Refl",
          "package": "machines",
          "signature": "Is a a",
          "source": "src/Data-Machine-Is.html#Is",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Is",
          "module": "Data.Machine.Is",
          "name": "Refl",
          "package": "machines",
          "partial": "Refl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Is.html#v:Refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Mealy_machine\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Machine.Mealy",
          "name": "Mealy",
          "package": "machines",
          "source": "src/Data-Machine-Mealy.html",
          "type": "module"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Mealy machine",
          "hierarchy": "Data Machine Mealy",
          "module": "Data.Machine.Mealy",
          "name": "Mealy",
          "package": "machines",
          "partial": "Mealy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Mealy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMealy\u003c/a\u003e\u003c/code\u003e machines\n\u003c/p\u003e",
          "module": "Data.Machine.Mealy",
          "name": "Mealy",
          "package": "machines",
          "source": "src/Data-Machine-Mealy.html#Mealy",
          "type": "newtype"
        },
        "index": {
          "description": "Mealy machines",
          "hierarchy": "Data Machine Mealy",
          "module": "Data.Machine.Mealy",
          "name": "Mealy",
          "package": "machines",
          "partial": "Mealy",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Mealy.html#t:Mealy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Mealy",
          "name": "Mealy",
          "package": "machines",
          "signature": "Mealy",
          "source": "src/Data-Machine-Mealy.html#Mealy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Mealy",
          "module": "Data.Machine.Mealy",
          "name": "Mealy",
          "package": "machines",
          "partial": "Mealy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Mealy.html#v:Mealy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulate history.\n\u003c/p\u003e",
          "module": "Data.Machine.Mealy",
          "name": "logMealy",
          "package": "machines",
          "signature": "Mealy a a",
          "source": "src/Data-Machine-Mealy.html#logMealy",
          "type": "function"
        },
        "index": {
          "description": "Accumulate history",
          "hierarchy": "Data Machine Mealy",
          "module": "Data.Machine.Mealy",
          "name": "logMealy",
          "package": "machines",
          "partial": "Mealy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Mealy.html#v:logMealy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Mealy",
          "name": "runMealy",
          "package": "machines",
          "signature": "a -\u003e (b, Mealy a b)",
          "source": "src/Data-Machine-Mealy.html#Mealy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Mealy",
          "module": "Data.Machine.Mealy",
          "name": "runMealy",
          "normalized": "a-\u003e(b,Mealy a b)",
          "package": "machines",
          "partial": "Mealy",
          "signature": "a-\u003e(b,Mealy a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Mealy.html#v:runMealy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMealy\u003c/a\u003e\u003c/code\u003e machine modeled with explicit state.\n\u003c/p\u003e",
          "module": "Data.Machine.Mealy",
          "name": "unfoldMealy",
          "package": "machines",
          "signature": "(s -\u003e a -\u003e (b, s)) -\u003e s -\u003e Mealy a b",
          "source": "src/Data-Machine-Mealy.html#unfoldMealy",
          "type": "function"
        },
        "index": {
          "description": "Mealy machine modeled with explicit state",
          "hierarchy": "Data Machine Mealy",
          "module": "Data.Machine.Mealy",
          "name": "unfoldMealy",
          "normalized": "(a-\u003eb-\u003e(c,a))-\u003ea-\u003eMealy b c",
          "package": "machines",
          "partial": "Mealy",
          "signature": "(s-\u003ea-\u003e(b,s))-\u003es-\u003eMealy a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Mealy.html#v:unfoldMealy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Moore_machine\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Machine.Moore",
          "name": "Moore",
          "package": "machines",
          "source": "src/Data-Machine-Moore.html",
          "type": "module"
        },
        "index": {
          "description": "http en.wikipedia.org wiki Moore machine",
          "hierarchy": "Data Machine Moore",
          "module": "Data.Machine.Moore",
          "name": "Moore",
          "package": "machines",
          "partial": "Moore",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Moore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMoore\u003c/a\u003e\u003c/code\u003e machines\n\u003c/p\u003e",
          "module": "Data.Machine.Moore",
          "name": "Moore",
          "package": "machines",
          "source": "src/Data-Machine-Moore.html#Moore",
          "type": "data"
        },
        "index": {
          "description": "Moore machines",
          "hierarchy": "Data Machine Moore",
          "module": "Data.Machine.Moore",
          "name": "Moore",
          "package": "machines",
          "partial": "Moore",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Moore.html#t:Moore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Moore",
          "name": "Moore",
          "package": "machines",
          "signature": "Moore b (a -\u003e Moore a b)",
          "source": "src/Data-Machine-Moore.html#Moore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Moore",
          "module": "Data.Machine.Moore",
          "name": "Moore",
          "normalized": "Moore a(b-\u003eMoore b a)",
          "package": "machines",
          "partial": "Moore",
          "signature": "Moore b(a-\u003eMoore a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Moore.html#v:Moore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulate the input as a sequence.\n\u003c/p\u003e",
          "module": "Data.Machine.Moore",
          "name": "logMoore",
          "package": "machines",
          "signature": "Moore m m",
          "source": "src/Data-Machine-Moore.html#logMoore",
          "type": "function"
        },
        "index": {
          "description": "Accumulate the input as sequence",
          "hierarchy": "Data Machine Moore",
          "module": "Data.Machine.Moore",
          "name": "logMoore",
          "package": "machines",
          "partial": "Moore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Moore.html#v:logMoore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a Moore machine from a state valuation and transition function\n\u003c/p\u003e",
          "module": "Data.Machine.Moore",
          "name": "unfoldMoore",
          "package": "machines",
          "signature": "(s -\u003e (b, a -\u003e s)) -\u003e s -\u003e Moore a b",
          "source": "src/Data-Machine-Moore.html#unfoldMoore",
          "type": "function"
        },
        "index": {
          "description": "Construct Moore machine from state valuation and transition function",
          "hierarchy": "Data Machine Moore",
          "module": "Data.Machine.Moore",
          "name": "unfoldMoore",
          "normalized": "(a-\u003e(b,c-\u003ea))-\u003ea-\u003eMoore c b",
          "package": "machines",
          "partial": "Moore",
          "signature": "(s-\u003e(b,a-\u003es))-\u003es-\u003eMoore a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Moore.html#v:unfoldMoore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Plan",
          "name": "Plan",
          "package": "machines",
          "source": "src/Data-Machine-Plan.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Machine Plan",
          "module": "Data.Machine.Plan",
          "name": "Plan",
          "package": "machines",
          "partial": "Plan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Plan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e k o a\u003c/code\u003e is a specification for a pure \u003ccode\u003eMachine\u003c/code\u003e, that reads inputs selected by \u003ccode\u003ek\u003c/code\u003e\n with types based on \u003ccode\u003ei\u003c/code\u003e, writes values of type \u003ccode\u003eo\u003c/code\u003e, and has intermediate results of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePlanT\u003c/a\u003e\u003c/code\u003e k o a\u003c/code\u003e can be used as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePlanT\u003c/a\u003e\u003c/code\u003e k o m a\u003c/code\u003e for any \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is perhaps easier to think of \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e in its un-cps'ed form, which would\n look like:\n\u003c/p\u003e\u003cpre\u003e\n data \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e k o a\n   = Done a\n   | Yield o (Plan k o a)\n   | forall z. Await (z -\u003e Plan k o a) (k z) (Plan k o a)\n   | Fail\n\u003c/pre\u003e",
          "module": "Data.Machine.Plan",
          "name": "Plan",
          "package": "machines",
          "source": "src/Data-Machine-Plan.html#Plan",
          "type": "type"
        },
        "index": {
          "description": "Plan is specification for pure Machine that reads inputs selected by with types based on writes values of type and has intermediate results of type PlanT can be used as PlanT for any Monad It is perhaps easier to think of Plan in its un-cps ed form which would look like data Plan Done Yield Plan forall Await Plan Plan Fail",
          "hierarchy": "Data Machine Plan",
          "module": "Data.Machine.Plan",
          "name": "Plan",
          "package": "machines",
          "partial": "Plan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Plan.html#t:Plan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou can \u003ccode\u003econstruct\u003c/code\u003e a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003ePlanT\u003c/a\u003e\u003c/code\u003e), turning it into a\n \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003eMachineT\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Machine.Plan",
          "name": "PlanT",
          "package": "machines",
          "source": "src/Data-Machine-Plan.html#PlanT",
          "type": "newtype"
        },
        "index": {
          "description": "You can construct Plan or PlanT turning it into Machine or MachineT",
          "hierarchy": "Data Machine Plan",
          "module": "Data.Machine.Plan",
          "name": "PlanT",
          "package": "machines",
          "partial": "Plan",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Plan.html#t:PlanT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Plan",
          "name": "PlanT",
          "package": "machines",
          "signature": "PlanT",
          "source": "src/Data-Machine-Plan.html#PlanT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Plan",
          "module": "Data.Machine.Plan",
          "name": "PlanT",
          "package": "machines",
          "partial": "Plan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Plan.html#v:PlanT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for input.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eawaits\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Machine.Plan",
          "name": "await",
          "package": "machines",
          "signature": "Plan (k i) o i",
          "source": "src/Data-Machine-Plan.html#await",
          "type": "function"
        },
        "index": {
          "description": "Wait for input await awaits id",
          "hierarchy": "Data Machine Plan",
          "module": "Data.Machine.Plan",
          "name": "await",
          "package": "machines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Plan.html#v:await"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a particular input.\n\u003c/p\u003e\u003cpre\u003e\n awaits \u003ccode\u003eL\u003c/code\u003e  :: \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eT\u003c/code\u003e a b) o a\n awaits \u003ccode\u003eR\u003c/code\u003e  :: \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003eT\u003c/code\u003e a b) o b\n awaits \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eIs\u003c/a\u003e\u003c/code\u003e i) o i\n\u003c/pre\u003e",
          "module": "Data.Machine.Plan",
          "name": "awaits",
          "package": "machines",
          "signature": "k i -\u003e Plan k o i",
          "source": "src/Data-Machine-Plan.html#awaits",
          "type": "function"
        },
        "index": {
          "description": "Wait for particular input awaits Plan awaits Plan awaits id Plan Is",
          "hierarchy": "Data Machine Plan",
          "module": "Data.Machine.Plan",
          "name": "awaits",
          "normalized": "a b-\u003ePlan a c b",
          "package": "machines",
          "signature": "k i-\u003ePlan k o i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Plan.html#v:awaits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e without reference to a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Machine.Plan",
          "name": "runPlan",
          "package": "machines",
          "signature": "PlanT k o Identity a -\u003e (a -\u003e r) -\u003e (o -\u003e r -\u003e r) -\u003e (forall z.  (z -\u003e r) -\u003e k z -\u003e r -\u003e r) -\u003e r -\u003e r",
          "source": "src/Data-Machine-Plan.html#runPlan",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct Plan without reference to Monad",
          "hierarchy": "Data Machine Plan",
          "module": "Data.Machine.Plan",
          "name": "runPlan",
          "normalized": "PlanT a b Identity c-\u003e(c-\u003ed)-\u003e(b-\u003ed-\u003ed)-\u003e(e f(g-\u003ed)-\u003ea g-\u003ed-\u003ed)-\u003ed-\u003ed",
          "package": "machines",
          "partial": "Plan",
          "signature": "PlanT k o Identity a-\u003e(a-\u003er)-\u003e(o-\u003er-\u003er)-\u003e(forall z.(z-\u003er)-\u003ek z-\u003er-\u003er)-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Plan.html#v:runPlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Plan",
          "name": "runPlanT",
          "package": "machines",
          "signature": "forall r.  (a -\u003e m r) -\u003e (o -\u003e m r -\u003e m r) -\u003e (forall z.  (z -\u003e m r) -\u003e k z -\u003e m r -\u003e m r) -\u003e m r -\u003e m r",
          "source": "src/Data-Machine-Plan.html#PlanT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Plan",
          "module": "Data.Machine.Plan",
          "name": "runPlanT",
          "normalized": "a b(c-\u003ed e)-\u003e(f-\u003ed e-\u003ed e)-\u003e(a g(h-\u003ed e)-\u003ei h-\u003ed e-\u003ed e)-\u003ed e-\u003ed e",
          "package": "machines",
          "partial": "Plan",
          "signature": "forall r.(a-\u003em r)-\u003e(o-\u003em r-\u003em r)-\u003e(forall z.(z-\u003em r)-\u003ek z-\u003em r-\u003em r)-\u003em r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Plan.html#v:runPlanT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003estop\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Machine.Plan",
          "name": "stop",
          "package": "machines",
          "signature": "Plan k o a",
          "source": "src/Data-Machine-Plan.html#stop",
          "type": "function"
        },
        "index": {
          "description": "stop empty",
          "hierarchy": "Data Machine Plan",
          "module": "Data.Machine.Plan",
          "name": "stop",
          "package": "machines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Plan.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a result.\n\u003c/p\u003e",
          "module": "Data.Machine.Plan",
          "name": "yield",
          "package": "machines",
          "signature": "o -\u003e Plan k o ()",
          "source": "src/Data-Machine-Plan.html#yield",
          "type": "function"
        },
        "index": {
          "description": "Output result",
          "hierarchy": "Data Machine Plan",
          "module": "Data.Machine.Plan",
          "name": "yield",
          "normalized": "a-\u003ePlan b a()",
          "package": "machines",
          "signature": "o-\u003ePlan k o()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Plan.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Process",
          "name": "Process",
          "package": "machines",
          "source": "src/Data-Machine-Process.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "Process",
          "package": "machines",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAutomaton\u003c/a\u003e\u003c/code\u003e is can be automatically lifted into a \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "Automaton",
          "package": "machines",
          "source": "src/Data-Machine-Process.html#Automaton",
          "type": "class"
        },
        "index": {
          "description": "An Automaton is can be automatically lifted into Process",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "Automaton",
          "package": "machines",
          "partial": "Automaton",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#t:Automaton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e is a stream transducer that can consume values of type \u003ccode\u003ea\u003c/code\u003e\n from its input, and produce values of type \u003ccode\u003eb\u003c/code\u003e for its output.\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "Process",
          "package": "machines",
          "source": "src/Data-Machine-Process.html#Process",
          "type": "type"
        },
        "index": {
          "description": "Process is stream transducer that can consume values of type from its input and produce values of type for its output",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "Process",
          "package": "machines",
          "partial": "Process",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProcessT\u003c/a\u003e\u003c/code\u003e m a b\u003c/code\u003e is a stream transducer that can consume values of type \u003ccode\u003ea\u003c/code\u003e\n from its input, and produce values of type \u003ccode\u003eb\u003c/code\u003e and has side-effects in the\n \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "ProcessT",
          "package": "machines",
          "source": "src/Data-Machine-Process.html#ProcessT",
          "type": "type"
        },
        "index": {
          "description": "ProcessT is stream transducer that can consume values of type from its input and produce values of type and has side-effects in the Monad",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "ProcessT",
          "package": "machines",
          "partial": "Process",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#t:ProcessT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlipped (\u003ccode\u003e\u003ca\u003e\u003c~\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "(~\u003e)",
          "package": "machines",
          "signature": "MachineT m k b -\u003e ProcessT m b c -\u003e MachineT m k c",
          "source": "src/Data-Machine-Process.html#~%3E",
          "type": "function"
        },
        "index": {
          "description": "Flipped",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "(~\u003e) ~\u003e",
          "normalized": "MachineT a b c-\u003eProcessT a c d-\u003eMachineT a b d",
          "package": "machines",
          "signature": "MachineT m k b-\u003eProcessT m b c-\u003eMachineT m k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a new \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e by adding a \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e to the output of an old \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n (\u003ccode\u003e\u003ca\u003e\u003c~\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e b c -\u003e \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e a b -\u003e \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e a c\n (\u003ccode\u003e\u003ca\u003e\u003c~\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e c d -\u003e \u003ccode\u003e\u003ca\u003eTee\u003c/a\u003e\u003c/code\u003e a b c -\u003e \u003ccode\u003e\u003ca\u003eTee\u003c/a\u003e\u003c/code\u003e a b d\n (\u003ccode\u003e\u003ca\u003e\u003c~\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e b c -\u003e \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e k b -\u003e \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e k c\n\u003c/pre\u003e",
          "module": "Data.Machine.Process",
          "name": "(\u003c~)",
          "package": "machines",
          "signature": "ProcessT m b c -\u003e MachineT m k b -\u003e MachineT m k c",
          "source": "src/Data-Machine-Process.html#%3C~",
          "type": "function"
        },
        "index": {
          "description": "Build new Machine by adding Process to the output of an old Machine Process Process Process Process Tee Tee Process Machine Machine",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "(\u003c~) \u003c~",
          "normalized": "ProcessT a b c-\u003eMachineT a d b-\u003eMachineT a d c",
          "package": "machines",
          "signature": "ProcessT m b c-\u003eMachineT m k b-\u003eMachineT m k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:-60--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak each input into pieces that are fed downstream\n individually.\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "asParts",
          "package": "machines",
          "signature": "Process (f a) a",
          "source": "src/Data-Machine-Process.html#asParts",
          "type": "function"
        },
        "index": {
          "description": "Break each input into pieces that are fed downstream individually",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "asParts",
          "package": "machines",
          "partial": "Parts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:asParts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Process",
          "name": "auto",
          "package": "machines",
          "signature": "k a b -\u003e Process a b",
          "source": "src/Data-Machine-Process.html#auto",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "auto",
          "normalized": "a b c-\u003eProcess b c",
          "package": "machines",
          "signature": "k a b-\u003eProcess a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:auto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a monadic function to each element of a \u003ccode\u003e\u003ca\u003eProcessT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "autoM",
          "package": "machines",
          "signature": "(a -\u003e m b) -\u003e ProcessT m a b",
          "source": "src/Data-Machine-Process.html#autoM",
          "type": "function"
        },
        "index": {
          "description": "Apply monadic function to each element of ProcessT",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "autoM",
          "normalized": "(a-\u003eb c)-\u003eProcessT b a c",
          "package": "machines",
          "signature": "(a-\u003em b)-\u003eProcessT m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:autoM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChunk up the input into \u003ccode\u003en\u003c/code\u003e element lists.\n\u003c/p\u003e\u003cp\u003eAvoids returning empty lists and deals with the truncation of the last group.\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "buffered",
          "package": "machines",
          "signature": "Int -\u003e Process a [a]",
          "source": "src/Data-Machine-Process.html#buffered",
          "type": "function"
        },
        "index": {
          "description": "Chunk up the input into element lists Avoids returning empty lists and deals with the truncation of the last group",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "buffered",
          "normalized": "Int-\u003eProcess a[a]",
          "package": "machines",
          "signature": "Int-\u003eProcess a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:buffered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e that drops the first \u003ccode\u003en\u003c/code\u003e, then repeats the rest.\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "dropping",
          "package": "machines",
          "signature": "Int -\u003e Process a a",
          "source": "src/Data-Machine-Process.html#dropping",
          "type": "function"
        },
        "index": {
          "description": "Process that drops the first then repeats the rest",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "dropping",
          "normalized": "Int-\u003eProcess a a",
          "package": "machines",
          "signature": "Int-\u003eProcess a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:dropping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e that drops elements while a predicate holds\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "droppingWhile",
          "package": "machines",
          "signature": "(a -\u003e Bool) -\u003e Process a a",
          "source": "src/Data-Machine-Process.html#droppingWhile",
          "type": "function"
        },
        "index": {
          "description": "Process that drops elements while predicate holds",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "droppingWhile",
          "normalized": "(a-\u003eBool)-\u003eProcess a a",
          "package": "machines",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eProcess a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:droppingWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe trivial \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e that simply repeats each input it receives.\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "echo",
          "package": "machines",
          "signature": "Process a a",
          "source": "src/Data-Machine-Process.html#echo",
          "type": "function"
        },
        "index": {
          "description": "The trivial Process that simply repeats each input it receives",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "echo",
          "package": "machines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e that only passes through inputs that match a predicate.\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "filtered",
          "package": "machines",
          "signature": "(a -\u003e Bool) -\u003e Process a a",
          "source": "src/Data-Machine-Process.html#filtered",
          "type": "function"
        },
        "index": {
          "description": "Process that only passes through inputs that match predicate",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "filtered",
          "normalized": "(a-\u003eBool)-\u003eProcess a a",
          "package": "machines",
          "signature": "(a-\u003eBool)-\u003eProcess a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:filtered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e from a left-folding operation.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e, but only yielding the final value.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e :: (a -\u003e b -\u003e a) -\u003e a -\u003e Process b a\n\u003c/pre\u003e",
          "module": "Data.Machine.Process",
          "name": "fold",
          "package": "machines",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Machine (k b) a",
          "source": "src/Data-Machine-Process.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Construct Process from left-folding operation Like scan but only yielding the final value fold Process",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMachine(c b)a",
          "package": "machines",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eMachine(k b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e that prepends the elements of a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e onto its input, then repeats its input from there.\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "prepended",
          "package": "machines",
          "signature": "f a -\u003e Process a a",
          "source": "src/Data-Machine-Process.html#prepended",
          "type": "function"
        },
        "index": {
          "description": "Process that prepends the elements of Foldable onto its input then repeats its input from there",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "prepended",
          "normalized": "a b-\u003eProcess b b",
          "package": "machines",
          "signature": "f a-\u003eProcess a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:prepended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a machine into a process, with a little bit of help.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eprocess\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e a c -\u003e \u003ccode\u003e\u003ca\u003eTee\u003c/a\u003e\u003c/code\u003e a b c\n \u003ccode\u003e\u003ca\u003eprocess\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e b c -\u003e \u003ccode\u003e\u003ca\u003eTee\u003c/a\u003e\u003c/code\u003e a b c\n \u003ccode\u003e\u003ca\u003eprocess\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e a b -\u003e \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e a b\n\u003c/pre\u003e",
          "module": "Data.Machine.Process",
          "name": "process",
          "package": "machines",
          "signature": "(forall a.  k a -\u003e i -\u003e a) -\u003e MachineT m k o -\u003e ProcessT m i o",
          "source": "src/Data-Machine-Process.html#process",
          "type": "function"
        },
        "index": {
          "description": "Convert machine into process with little bit of help process Process Tee process Process Tee process id Process Process",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "process",
          "normalized": "(a b c d-\u003ee-\u003ed)-\u003eMachineT f c g-\u003eProcessT f e g",
          "package": "machines",
          "signature": "(forall a. k a-\u003ei-\u003ea)-\u003eMachineT m k o-\u003eProcessT m i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e from a left-scanning operation.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e, but yielding intermediate values.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e :: (a -\u003e b -\u003e a) -\u003e a -\u003e Process b a\n\u003c/pre\u003e",
          "module": "Data.Machine.Process",
          "name": "scan",
          "package": "machines",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Machine (k b) a",
          "source": "src/Data-Machine-Process.html#scan",
          "type": "function"
        },
        "index": {
          "description": "Construct Process from left-scanning operation Like fold but yielding intermediate values scan Process",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "scan",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMachine(c b)a",
          "package": "machines",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eMachine(k b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esinkPart_ toParts sink\u003c/code\u003e creates a process that uses the\n \u003ccode\u003etoParts\u003c/code\u003e function to break input into a tuple of \u003ccode\u003e(passAlong,\n sinkPart)\u003c/code\u003e for which the second projection is given to the supplied\n \u003ccode\u003esink\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProcessT\u003c/a\u003e\u003c/code\u003e (that produces no output) while the first\n projection is passed down the pipeline.\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "sinkPart_",
          "package": "machines",
          "signature": "(a -\u003e (b, c)) -\u003e ProcessT m c Void -\u003e ProcessT m a b",
          "source": "src/Data-Machine-Process.html#sinkPart_",
          "type": "function"
        },
        "index": {
          "description": "sinkPart toParts sink creates process that uses the toParts function to break input into tuple of passAlong sinkPart for which the second projection is given to the supplied sink ProcessT that produces no output while the first projection is passed down the pipeline",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "sinkPart_",
          "normalized": "(a-\u003e(b,c))-\u003eProcessT d c Void-\u003eProcessT d a b",
          "package": "machines",
          "partial": "Part",
          "signature": "(a-\u003e(b,c))-\u003eProcessT m c Void-\u003eProcessT m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:sinkPart_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e some input.\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "supply",
          "package": "machines",
          "signature": "[a] -\u003e ProcessT m a b -\u003e ProcessT m a b",
          "source": "src/Data-Machine-Process.html#supply",
          "type": "function"
        },
        "index": {
          "description": "Feed Process some input",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "supply",
          "normalized": "[a]-\u003eProcessT b a c-\u003eProcessT b a c",
          "package": "machines",
          "signature": "[a]-\u003eProcessT m a b-\u003eProcessT m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:supply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e that passes through the first \u003ccode\u003en\u003c/code\u003e elements from its input then stops\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "taking",
          "package": "machines",
          "signature": "Int -\u003e Process a a",
          "source": "src/Data-Machine-Process.html#taking",
          "type": "function"
        },
        "index": {
          "description": "Process that passes through the first elements from its input then stops",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "taking",
          "normalized": "Int-\u003eProcess a a",
          "package": "machines",
          "signature": "Int-\u003eProcess a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:taking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e that passes through elements until a predicate ceases to hold, then stops\n\u003c/p\u003e",
          "module": "Data.Machine.Process",
          "name": "takingWhile",
          "package": "machines",
          "signature": "(a -\u003e Bool) -\u003e Process a a",
          "source": "src/Data-Machine-Process.html#takingWhile",
          "type": "function"
        },
        "index": {
          "description": "Process that passes through elements until predicate ceases to hold then stops",
          "hierarchy": "Data Machine Process",
          "module": "Data.Machine.Process",
          "name": "takingWhile",
          "normalized": "(a-\u003eBool)-\u003eProcess a a",
          "package": "machines",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eProcess a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Process.html#v:takingWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Source",
          "name": "Source",
          "package": "machines",
          "source": "src/Data-Machine-Source.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Machine Source",
          "module": "Data.Machine.Source",
          "name": "Source",
          "package": "machines",
          "partial": "Source",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Source.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e never reads from its inputs.\n\u003c/p\u003e",
          "module": "Data.Machine.Source",
          "name": "Source",
          "package": "machines",
          "source": "src/Data-Machine-Source.html#Source",
          "type": "type"
        },
        "index": {
          "description": "Source never reads from its inputs",
          "hierarchy": "Data Machine Source",
          "module": "Data.Machine.Source",
          "name": "Source",
          "package": "machines",
          "partial": "Source",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Source.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSourceT\u003c/a\u003e\u003c/code\u003e never reads from its inputs, but may have monadic side-effects.\n\u003c/p\u003e",
          "module": "Data.Machine.Source",
          "name": "SourceT",
          "package": "machines",
          "source": "src/Data-Machine-Source.html#SourceT",
          "type": "type"
        },
        "index": {
          "description": "SourceT never reads from its inputs but may have monadic side-effects",
          "hierarchy": "Data Machine Source",
          "module": "Data.Machine.Source",
          "name": "SourceT",
          "package": "machines",
          "partial": "Source",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Source.html#t:SourceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou can transform a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlternately you can view this as capping the \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e end of a \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e,\n yielding a new \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecap\u003c/a\u003e\u003c/code\u003e l r = l \u003ccode\u003e\u003ca\u003e\u003c~\u003c/a\u003e\u003c/code\u003e r\u003c/pre\u003e",
          "module": "Data.Machine.Source",
          "name": "cap",
          "package": "machines",
          "signature": "Process a b -\u003e Source a -\u003e Source b",
          "source": "src/Data-Machine-Source.html#cap",
          "type": "function"
        },
        "index": {
          "description": "You can transform Source with Process Alternately you can view this as capping the Source end of Process yielding new Source cap",
          "hierarchy": "Data Machine Source",
          "module": "Data.Machine.Source",
          "name": "cap",
          "normalized": "Process a b-\u003eSource a-\u003eSource b",
          "package": "machines",
          "signature": "Process a b-\u003eSource a-\u003eSource b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Source.html#v:cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop through a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e container over and over.\n\u003c/p\u003e",
          "module": "Data.Machine.Source",
          "name": "cycled",
          "package": "machines",
          "signature": "f b -\u003e Source b",
          "source": "src/Data-Machine-Source.html#cycled",
          "type": "function"
        },
        "index": {
          "description": "Loop through Foldable container over and over",
          "hierarchy": "Data Machine Source",
          "module": "Data.Machine.Source",
          "name": "cycled",
          "normalized": "a b-\u003eSource b",
          "package": "machines",
          "signature": "f b-\u003eSource b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Source.html#v:cycled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat the same value, over and over.\n\u003c/p\u003e",
          "module": "Data.Machine.Source",
          "name": "repeated",
          "package": "machines",
          "signature": "o -\u003e Source o",
          "source": "src/Data-Machine-Source.html#repeated",
          "type": "function"
        },
        "index": {
          "description": "Repeat the same value over and over",
          "hierarchy": "Data Machine Source",
          "module": "Data.Machine.Source",
          "name": "repeated",
          "normalized": "a-\u003eSource a",
          "package": "machines",
          "signature": "o-\u003eSource o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Source.html#v:repeated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e from any \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e container.\n\u003c/p\u003e",
          "module": "Data.Machine.Source",
          "name": "source",
          "package": "machines",
          "signature": "f b -\u003e Source b",
          "source": "src/Data-Machine-Source.html#source",
          "type": "function"
        },
        "index": {
          "description": "Generate Source from any Foldable container",
          "hierarchy": "Data Machine Source",
          "module": "Data.Machine.Source",
          "name": "source",
          "normalized": "a b-\u003eSource b",
          "package": "machines",
          "signature": "f b-\u003eSource b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Source.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Tee",
          "name": "Tee",
          "package": "machines",
          "source": "src/Data-Machine-Tee.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Machine Tee",
          "module": "Data.Machine.Tee",
          "name": "Tee",
          "package": "machines",
          "partial": "Tee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Tee.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe input descriptor for a \u003ccode\u003e\u003ca\u003eTee\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eTeeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Machine.Tee",
          "name": "T",
          "package": "machines",
          "source": "src/Data-Machine-Tee.html#T",
          "type": "data"
        },
        "index": {
          "description": "The input descriptor for Tee or TeeT",
          "hierarchy": "Data Machine Tee",
          "module": "Data.Machine.Tee",
          "name": "T",
          "package": "machines",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Tee.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e that can read from two input stream in a deterministic manner.\n\u003c/p\u003e",
          "module": "Data.Machine.Tee",
          "name": "Tee",
          "package": "machines",
          "source": "src/Data-Machine-Tee.html#Tee",
          "type": "type"
        },
        "index": {
          "description": "Machine that can read from two input stream in deterministic manner",
          "hierarchy": "Data Machine Tee",
          "module": "Data.Machine.Tee",
          "name": "Tee",
          "package": "machines",
          "partial": "Tee",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Tee.html#t:Tee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e that can read from two input stream in a deterministic manner with monadic side-effects.\n\u003c/p\u003e",
          "module": "Data.Machine.Tee",
          "name": "TeeT",
          "package": "machines",
          "source": "src/Data-Machine-Tee.html#TeeT",
          "type": "type"
        },
        "index": {
          "description": "Machine that can read from two input stream in deterministic manner with monadic side-effects",
          "hierarchy": "Data Machine Tee",
          "module": "Data.Machine.Tee",
          "name": "TeeT",
          "package": "machines",
          "partial": "Tee",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Tee.html#t:TeeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Tee",
          "name": "L",
          "package": "machines",
          "signature": "T a b a",
          "source": "src/Data-Machine-Tee.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Tee",
          "module": "Data.Machine.Tee",
          "name": "L",
          "package": "machines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Tee.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Tee",
          "name": "R",
          "package": "machines",
          "signature": "T a b b",
          "source": "src/Data-Machine-Tee.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Tee",
          "module": "Data.Machine.Tee",
          "name": "R",
          "package": "machines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Tee.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecompose a pipe onto the left input of a tee.\n\u003c/p\u003e",
          "module": "Data.Machine.Tee",
          "name": "addL",
          "package": "machines",
          "signature": "ProcessT m a b -\u003e TeeT m b c d -\u003e TeeT m a c d",
          "source": "src/Data-Machine-Tee.html#addL",
          "type": "function"
        },
        "index": {
          "description": "Precompose pipe onto the left input of tee",
          "hierarchy": "Data Machine Tee",
          "module": "Data.Machine.Tee",
          "name": "addL",
          "normalized": "ProcessT a b c-\u003eTeeT a c d e-\u003eTeeT a b d e",
          "package": "machines",
          "signature": "ProcessT m a b-\u003eTeeT m b c d-\u003eTeeT m a c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Tee.html#v:addL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecompose a pipe onto the right input of a tee.\n\u003c/p\u003e",
          "module": "Data.Machine.Tee",
          "name": "addR",
          "package": "machines",
          "signature": "ProcessT m b c -\u003e TeeT m a c d -\u003e TeeT m a b d",
          "source": "src/Data-Machine-Tee.html#addR",
          "type": "function"
        },
        "index": {
          "description": "Precompose pipe onto the right input of tee",
          "hierarchy": "Data Machine Tee",
          "module": "Data.Machine.Tee",
          "name": "addR",
          "normalized": "ProcessT a b c-\u003eTeeT a d c e-\u003eTeeT a d b e",
          "package": "machines",
          "signature": "ProcessT m b c-\u003eTeeT m a c d-\u003eTeeT m a b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Tee.html#v:addR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTie off one input of a tee by connecting it to a known source.\n\u003c/p\u003e",
          "module": "Data.Machine.Tee",
          "name": "capL",
          "package": "machines",
          "signature": "SourceT m a -\u003e TeeT m a b c -\u003e ProcessT m b c",
          "source": "src/Data-Machine-Tee.html#capL",
          "type": "function"
        },
        "index": {
          "description": "Tie off one input of tee by connecting it to known source",
          "hierarchy": "Data Machine Tee",
          "module": "Data.Machine.Tee",
          "name": "capL",
          "normalized": "SourceT a b-\u003eTeeT a b c d-\u003eProcessT a c d",
          "package": "machines",
          "signature": "SourceT m a-\u003eTeeT m a b c-\u003eProcessT m b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Tee.html#v:capL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTie off one input of a tee by connecting it to a known source.\n\u003c/p\u003e",
          "module": "Data.Machine.Tee",
          "name": "capR",
          "package": "machines",
          "signature": "SourceT m b -\u003e TeeT m a b c -\u003e ProcessT m a c",
          "source": "src/Data-Machine-Tee.html#capR",
          "type": "function"
        },
        "index": {
          "description": "Tie off one input of tee by connecting it to known source",
          "hierarchy": "Data Machine Tee",
          "module": "Data.Machine.Tee",
          "name": "capR",
          "normalized": "SourceT a b-\u003eTeeT a c b d-\u003eProcessT a c d",
          "package": "machines",
          "signature": "SourceT m b-\u003eTeeT m a b c-\u003eProcessT m a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Tee.html#v:capR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a pair of pipes onto the front of a Tee.\n\u003c/p\u003e",
          "module": "Data.Machine.Tee",
          "name": "tee",
          "package": "machines",
          "signature": "ProcessT m a a' -\u003e ProcessT m b b' -\u003e TeeT m a' b' c -\u003e TeeT m a b c",
          "source": "src/Data-Machine-Tee.html#tee",
          "type": "function"
        },
        "index": {
          "description": "Compose pair of pipes onto the front of Tee",
          "hierarchy": "Data Machine Tee",
          "module": "Data.Machine.Tee",
          "name": "tee",
          "normalized": "ProcessT a b c-\u003eProcessT a d e-\u003eTeeT a c e f-\u003eTeeT a b d f",
          "package": "machines",
          "signature": "ProcessT m a a'-\u003eProcessT m b b'-\u003eTeeT m a' b' c-\u003eTeeT m a b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Tee.html#v:tee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Type",
          "name": "Type",
          "package": "machines",
          "source": "src/Data-Machine-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "Type",
          "package": "machines",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn input type that supports merging requests from multiple machines.\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "Appliance",
          "package": "machines",
          "source": "src/Data-Machine-Type.html#Appliance",
          "type": "class"
        },
        "index": {
          "description": "An input type that supports merging requests from multiple machines",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "Appliance",
          "package": "machines",
          "partial": "Appliance",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#t:Appliance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e reads from a number of inputs and may yield results before stopping.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e can be used as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMachineT\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e for any \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "Machine",
          "package": "machines",
          "source": "src/Data-Machine-Type.html#Machine",
          "type": "type"
        },
        "index": {
          "description": "Machine reads from number of inputs and may yield results before stopping Machine can be used as MachineT for any Monad",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "Machine",
          "package": "machines",
          "partial": "Machine",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#t:Machine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMachineT\u003c/a\u003e\u003c/code\u003e reads from a number of inputs and may yield results before stopping\n with monadic side-effects.\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "MachineT",
          "package": "machines",
          "source": "src/Data-Machine-Type.html#MachineT",
          "type": "newtype"
        },
        "index": {
          "description": "MachineT reads from number of inputs and may yield results before stopping with monadic side-effects",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "MachineT",
          "package": "machines",
          "partial": "Machine",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#t:MachineT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the base functor for a \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMachineT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: A \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e is usually constructed from \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e, so it does not need to be CPS'd.\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "Step",
          "package": "machines",
          "source": "src/Data-Machine-Type.html#Step",
          "type": "data"
        },
        "index": {
          "description": "This is the base functor for Machine or MachineT Note Machine is usually constructed from Plan so it does not need to be CPS",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "Step",
          "package": "machines",
          "partial": "Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#t:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Type",
          "name": "Await",
          "package": "machines",
          "signature": "forall t . Await (t -\u003e r) (k t) r",
          "source": "src/Data-Machine-Type.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "Await",
          "normalized": "a b Await(b-\u003ec)(d b)c",
          "package": "machines",
          "partial": "Await",
          "signature": "forall t Await(t-\u003er)(k t)r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:Await"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Type",
          "name": "MachineT",
          "package": "machines",
          "signature": "MachineT",
          "source": "src/Data-Machine-Type.html#MachineT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "MachineT",
          "package": "machines",
          "partial": "Machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:MachineT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Type",
          "name": "Stop",
          "package": "machines",
          "signature": "Stop",
          "source": "src/Data-Machine-Type.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "Stop",
          "package": "machines",
          "partial": "Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:Stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Type",
          "name": "Yield",
          "package": "machines",
          "signature": "Yield o r",
          "source": "src/Data-Machine-Type.html#Step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "Yield",
          "package": "machines",
          "partial": "Yield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:Yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Type",
          "name": "applied",
          "package": "machines",
          "signature": "MachineT m k (a -\u003e b) -\u003e MachineT m k a -\u003e MachineT m k b",
          "source": "src/Data-Machine-Type.html#applied",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "applied",
          "normalized": "MachineT a b(c-\u003ed)-\u003eMachineT a b c-\u003eMachineT a b d",
          "package": "machines",
          "signature": "MachineT m k(a-\u003eb)-\u003eMachineT m k a-\u003eMachineT m k b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:applied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a machine until it stops, and then yield answers according to the supplied model.\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "before",
          "package": "machines",
          "signature": "MachineT m k o -\u003e PlanT k o m a -\u003e MachineT m k o",
          "source": "src/Data-Machine-Type.html#before",
          "type": "function"
        },
        "index": {
          "description": "Evaluate machine until it stops and then yield answers according to the supplied model",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "before",
          "normalized": "MachineT a b c-\u003ePlanT b c a d-\u003eMachineT a b c",
          "package": "machines",
          "signature": "MachineT m k o-\u003ePlanT k o m a-\u003eMachineT m k o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a machine to a model.\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "construct",
          "package": "machines",
          "signature": "PlanT k o m a -\u003e MachineT m k o",
          "source": "src/Data-Machine-Type.html#construct",
          "type": "function"
        },
        "index": {
          "description": "Compile machine to model",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "construct",
          "normalized": "PlanT a b c d-\u003eMachineT c a b",
          "package": "machines",
          "signature": "PlanT k o m a-\u003eMachineT m k o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:construct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Type",
          "name": "deconstruct",
          "package": "machines",
          "signature": "MachineT m k (Either a o) -\u003e PlanT k o m a",
          "source": "src/Data-Machine-Type.html#deconstruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "deconstruct",
          "normalized": "MachineT a b(Either c d)-\u003ePlanT b d a c",
          "package": "machines",
          "signature": "MachineT m k(Either a o)-\u003ePlanT k o m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:deconstruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack a \u003ccode\u003e\u003ca\u003eStep\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "encased",
          "package": "machines",
          "signature": "Step k o (MachineT m k o) -\u003e MachineT m k o",
          "source": "src/Data-Machine-Type.html#encased",
          "type": "function"
        },
        "index": {
          "description": "Pack Step of Machine into Machine",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "encased",
          "normalized": "Step a b(MachineT c a b)-\u003eMachineT c a b",
          "package": "machines",
          "signature": "Step k o(MachineT m k o)-\u003eMachineT m k o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:encased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a function to produce and mark a yielded value as the\n terminal value of a \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e. All yielded values for which the\n given function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e are yielded down the pipeline, but\n the first value for which the function returns a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value will\n be returned by a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e created via \u003ccode\u003e\u003ca\u003edeconstruct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "finishWith",
          "package": "machines",
          "signature": "(o -\u003e Maybe r) -\u003e MachineT m k o -\u003e MachineT m k (Either r o)",
          "source": "src/Data-Machine-Type.html#finishWith",
          "type": "function"
        },
        "index": {
          "description": "Use function to produce and mark yielded value as the terminal value of Machine All yielded values for which the given function returns Nothing are yielded down the pipeline but the first value for which the function returns Just value will be returned by Plan created via deconstruct",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "finishWith",
          "normalized": "(a-\u003eMaybe b)-\u003eMachineT c d a-\u003eMachineT c d(Either b a)",
          "package": "machines",
          "partial": "With",
          "signature": "(o-\u003eMaybe r)-\u003eMachineT m k o-\u003eMachineT m k(Either r o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:finishWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect different kinds of machines.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efit\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Machine.Type",
          "name": "fit",
          "package": "machines",
          "signature": "(forall a.  k a -\u003e k' a) -\u003e MachineT m k o -\u003e MachineT m k' o",
          "source": "src/Data-Machine-Type.html#fit",
          "type": "function"
        },
        "index": {
          "description": "Connect different kinds of machines fit id id",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "fit",
          "normalized": "(a b c d-\u003ee d)-\u003eMachineT f c g-\u003eMachineT f e g",
          "package": "machines",
          "signature": "(forall a. k a-\u003ek' a)-\u003eMachineT m k o-\u003eMachineT m k' o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:fit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Type",
          "name": "fitM",
          "package": "machines",
          "signature": "(forall a.  m a -\u003e m' a) -\u003e MachineT m k o -\u003e MachineT m' k o",
          "source": "src/Data-Machine-Type.html#fitM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "fitM",
          "normalized": "(a b c d-\u003ee d)-\u003eMachineT c f g-\u003eMachineT e f g",
          "package": "machines",
          "signature": "(forall a. m a-\u003em' a)-\u003eMachineT m k o-\u003eMachineT m' k o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:fitM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a handle, ignore all other inputs and just stream input from that handle.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e a a\n \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eL\u003c/a\u003e\u003c/code\u003e  :: \u003ccode\u003e\u003ca\u003eTee\u003c/a\u003e\u003c/code\u003e a b a\n \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e  :: \u003ccode\u003e\u003ca\u003eTee\u003c/a\u003e\u003c/code\u003e a b b\n \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e  :: \u003ccode\u003e\u003ca\u003eWye\u003c/a\u003e\u003c/code\u003e a b a\n \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eY\u003c/a\u003e\u003c/code\u003e  :: \u003ccode\u003e\u003ca\u003eWye\u003c/a\u003e\u003c/code\u003e a b b\n \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eZ\u003c/a\u003e\u003c/code\u003e  :: \u003ccode\u003e\u003ca\u003eWye\u003c/a\u003e\u003c/code\u003e a b (Either a b)\n\u003c/pre\u003e",
          "module": "Data.Machine.Type",
          "name": "pass",
          "package": "machines",
          "signature": "k o -\u003e Machine k o",
          "source": "src/Data-Machine-Type.html#pass",
          "type": "function"
        },
        "index": {
          "description": "Given handle ignore all other inputs and just stream input from that handle pass id Process pass Tee pass Tee pass Wye pass Wye pass Wye Either",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "pass",
          "normalized": "a b-\u003eMachine a b",
          "package": "machines",
          "signature": "k o-\u003eMachine k o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a model that runs a machine until it stops, then start it up again.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erepeatedly\u003c/a\u003e\u003c/code\u003e m = \u003ccode\u003e\u003ca\u003econstruct\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eforever\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e",
          "module": "Data.Machine.Type",
          "name": "repeatedly",
          "package": "machines",
          "signature": "PlanT k o m a -\u003e MachineT m k o",
          "source": "src/Data-Machine-Type.html#repeatedly",
          "type": "function"
        },
        "index": {
          "description": "Generates model that runs machine until it stops then start it up again repeatedly construct forever",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "repeatedly",
          "normalized": "PlanT a b c d-\u003eMachineT c a b",
          "package": "machines",
          "signature": "PlanT k o m a-\u003eMachineT m k o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:repeatedly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a pure machine and extract an answer.\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "run",
          "package": "machines",
          "signature": "MachineT Identity k b -\u003e [b]",
          "source": "src/Data-Machine-Type.html#run",
          "type": "function"
        },
        "index": {
          "description": "Run pure machine and extract an answer",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "run",
          "normalized": "MachineT Identity a b-\u003e[b]",
          "package": "machines",
          "signature": "MachineT Identity k b-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunMachine\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003erunIdentity\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003erunMachineT\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Machine.Type",
          "name": "runMachine",
          "package": "machines",
          "signature": "MachineT Identity k o -\u003e Step k o (MachineT Identity k o)",
          "source": "src/Data-Machine-Type.html#runMachine",
          "type": "function"
        },
        "index": {
          "description": "runMachine runIdentity runMachineT",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "runMachine",
          "normalized": "MachineT Identity a b-\u003eStep a b(MachineT Identity a b)",
          "package": "machines",
          "partial": "Machine",
          "signature": "MachineT Identity k o-\u003eStep k o(MachineT Identity k o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:runMachine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Type",
          "name": "runMachineT",
          "package": "machines",
          "signature": "m (Step k o (MachineT m k o))",
          "source": "src/Data-Machine-Type.html#MachineT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "runMachineT",
          "package": "machines",
          "partial": "Machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:runMachineT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop feeding input into model and extract an answer\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "runT",
          "package": "machines",
          "signature": "MachineT m k b -\u003e m [b]",
          "source": "src/Data-Machine-Type.html#runT",
          "type": "function"
        },
        "index": {
          "description": "Stop feeding input into model and extract an answer",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "runT",
          "normalized": "MachineT a b c-\u003ea[c]",
          "package": "machines",
          "signature": "MachineT m k b-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:runT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop feeding input into model, taking only the effects.\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "runT_",
          "package": "machines",
          "signature": "MachineT m k b -\u003e m ()",
          "source": "src/Data-Machine-Type.html#runT_",
          "type": "function"
        },
        "index": {
          "description": "Stop feeding input into model taking only the effects",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "runT_",
          "normalized": "MachineT a b c-\u003ea()",
          "package": "machines",
          "signature": "MachineT m k b-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:runT_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a stopped \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "stopped",
          "package": "machines",
          "signature": "Machine k b",
          "source": "src/Data-Machine-Type.html#stopped",
          "type": "function"
        },
        "index": {
          "description": "This is stopped Machine",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "stopped",
          "package": "machines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:stopped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a predicate to mark a yielded value as the terminal value of\n this \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e. This is useful in combination with \u003ccode\u003e\u003ca\u003edeconstruct\u003c/a\u003e\u003c/code\u003e to\n combine \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Machine.Type",
          "name": "tagDone",
          "package": "machines",
          "signature": "(o -\u003e Bool) -\u003e MachineT m k o -\u003e MachineT m k (Either o o)",
          "source": "src/Data-Machine-Type.html#tagDone",
          "type": "function"
        },
        "index": {
          "description": "Use predicate to mark yielded value as the terminal value of this Machine This is useful in combination with deconstruct to combine Plan",
          "hierarchy": "Data Machine Type",
          "module": "Data.Machine.Type",
          "name": "tagDone",
          "normalized": "(a-\u003eBool)-\u003eMachineT b c a-\u003eMachineT b c(Either a a)",
          "package": "machines",
          "partial": "Done",
          "signature": "(o-\u003eBool)-\u003eMachineT m k o-\u003eMachineT m k(Either o o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Type.html#v:tagDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Unread",
          "name": "Unread",
          "package": "machines",
          "source": "src/Data-Machine-Unread.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Machine Unread",
          "module": "Data.Machine.Unread",
          "name": "Unread",
          "package": "machines",
          "partial": "Unread",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Unread.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a simple process type that knows how to push back input.\n\u003c/p\u003e",
          "module": "Data.Machine.Unread",
          "name": "Unread",
          "package": "machines",
          "source": "src/Data-Machine-Unread.html#Unread",
          "type": "data"
        },
        "index": {
          "description": "This is simple process type that knows how to push back input",
          "hierarchy": "Data Machine Unread",
          "module": "Data.Machine.Unread",
          "name": "Unread",
          "package": "machines",
          "partial": "Unread",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Unread.html#t:Unread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Unread",
          "name": "Read",
          "package": "machines",
          "signature": "Unread a a",
          "source": "src/Data-Machine-Unread.html#Unread",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Unread",
          "module": "Data.Machine.Unread",
          "name": "Read",
          "package": "machines",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Unread.html#v:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Unread",
          "name": "Unread",
          "package": "machines",
          "signature": "a -\u003e Unread a ()",
          "source": "src/Data-Machine-Unread.html#Unread",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Unread",
          "module": "Data.Machine.Unread",
          "name": "Unread",
          "normalized": "a-\u003eUnread a()",
          "package": "machines",
          "partial": "Unread",
          "signature": "a-\u003eUnread a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Unread.html#v:Unread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeek at the next value in the input stream without consuming it\n\u003c/p\u003e",
          "module": "Data.Machine.Unread",
          "name": "peek",
          "package": "machines",
          "signature": "Plan (Unread a) b a",
          "source": "src/Data-Machine-Unread.html#peek",
          "type": "function"
        },
        "index": {
          "description": "Peek at the next value in the input stream without consuming it",
          "hierarchy": "Data Machine Unread",
          "module": "Data.Machine.Unread",
          "name": "peek",
          "package": "machines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Unread.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush back into the input stream\n\u003c/p\u003e",
          "module": "Data.Machine.Unread",
          "name": "unread",
          "package": "machines",
          "signature": "a -\u003e Plan (Unread a) b ()",
          "source": "src/Data-Machine-Unread.html#unread",
          "type": "function"
        },
        "index": {
          "description": "Push back into the input stream",
          "hierarchy": "Data Machine Unread",
          "module": "Data.Machine.Unread",
          "name": "unread",
          "normalized": "a-\u003ePlan(Unread a)b()",
          "package": "machines",
          "signature": "a-\u003ePlan(Unread a)b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Unread.html#v:unread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Wye",
          "name": "Wye",
          "package": "machines",
          "source": "src/Data-Machine-Wye.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Machine Wye",
          "module": "Data.Machine.Wye",
          "name": "Wye",
          "package": "machines",
          "partial": "Wye",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Wye.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e that can read from two input stream in a non-deterministic manner.\n\u003c/p\u003e",
          "module": "Data.Machine.Wye",
          "name": "Wye",
          "package": "machines",
          "source": "src/Data-Machine-Wye.html#Wye",
          "type": "type"
        },
        "index": {
          "description": "Machine that can read from two input stream in non-deterministic manner",
          "hierarchy": "Data Machine Wye",
          "module": "Data.Machine.Wye",
          "name": "Wye",
          "package": "machines",
          "partial": "Wye",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Wye.html#t:Wye"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e that can read from two input stream in a non-deterministic manner with monadic side-effects.\n\u003c/p\u003e",
          "module": "Data.Machine.Wye",
          "name": "WyeT",
          "package": "machines",
          "source": "src/Data-Machine-Wye.html#WyeT",
          "type": "type"
        },
        "index": {
          "description": "Machine that can read from two input stream in non-deterministic manner with monadic side-effects",
          "hierarchy": "Data Machine Wye",
          "module": "Data.Machine.Wye",
          "name": "WyeT",
          "package": "machines",
          "partial": "Wye",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Wye.html#t:WyeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe input descriptor for a \u003ccode\u003e\u003ca\u003eWye\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eWyeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Machine.Wye",
          "name": "Y",
          "package": "machines",
          "source": "src/Data-Machine-Wye.html#Y",
          "type": "data"
        },
        "index": {
          "description": "The input descriptor for Wye or WyeT",
          "hierarchy": "Data Machine Wye",
          "module": "Data.Machine.Wye",
          "name": "Y",
          "package": "machines",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Wye.html#t:Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Wye",
          "name": "X",
          "package": "machines",
          "signature": "Y a b a",
          "source": "src/Data-Machine-Wye.html#Y",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Wye",
          "module": "Data.Machine.Wye",
          "name": "X",
          "package": "machines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Wye.html#v:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Wye",
          "name": "Y",
          "package": "machines",
          "signature": "Y a b b",
          "source": "src/Data-Machine-Wye.html#Y",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Wye",
          "module": "Data.Machine.Wye",
          "name": "Y",
          "package": "machines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Wye.html#v:Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine.Wye",
          "name": "Z",
          "package": "machines",
          "signature": "Y a b (Either a b)",
          "source": "src/Data-Machine-Wye.html#Y",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Machine Wye",
          "module": "Data.Machine.Wye",
          "name": "Z",
          "package": "machines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Wye.html#v:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecompose a pipe onto the left input of a wye.\n\u003c/p\u003e",
          "module": "Data.Machine.Wye",
          "name": "addX",
          "package": "machines",
          "signature": "ProcessT m a b -\u003e WyeT m b c d -\u003e WyeT m a c d",
          "source": "src/Data-Machine-Wye.html#addX",
          "type": "function"
        },
        "index": {
          "description": "Precompose pipe onto the left input of wye",
          "hierarchy": "Data Machine Wye",
          "module": "Data.Machine.Wye",
          "name": "addX",
          "normalized": "ProcessT a b c-\u003eWyeT a c d e-\u003eWyeT a b d e",
          "package": "machines",
          "signature": "ProcessT m a b-\u003eWyeT m b c d-\u003eWyeT m a c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Wye.html#v:addX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecompose a pipe onto the right input of a tee.\n\u003c/p\u003e",
          "module": "Data.Machine.Wye",
          "name": "addY",
          "package": "machines",
          "signature": "ProcessT m b c -\u003e WyeT m a c d -\u003e WyeT m a b d",
          "source": "src/Data-Machine-Wye.html#addY",
          "type": "function"
        },
        "index": {
          "description": "Precompose pipe onto the right input of tee",
          "hierarchy": "Data Machine Wye",
          "module": "Data.Machine.Wye",
          "name": "addY",
          "normalized": "ProcessT a b c-\u003eWyeT a d c e-\u003eWyeT a d b e",
          "package": "machines",
          "signature": "ProcessT m b c-\u003eWyeT m a c d-\u003eWyeT m a b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Wye.html#v:addY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTie off one input of a tee by connecting it to a known source.\n\u003c/p\u003e",
          "module": "Data.Machine.Wye",
          "name": "capX",
          "package": "machines",
          "signature": "SourceT m a -\u003e WyeT m a b c -\u003e ProcessT m b c",
          "source": "src/Data-Machine-Wye.html#capX",
          "type": "function"
        },
        "index": {
          "description": "Tie off one input of tee by connecting it to known source",
          "hierarchy": "Data Machine Wye",
          "module": "Data.Machine.Wye",
          "name": "capX",
          "normalized": "SourceT a b-\u003eWyeT a b c d-\u003eProcessT a c d",
          "package": "machines",
          "signature": "SourceT m a-\u003eWyeT m a b c-\u003eProcessT m b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Wye.html#v:capX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTie off one input of a tee by connecting it to a known source.\n\u003c/p\u003e",
          "module": "Data.Machine.Wye",
          "name": "capY",
          "package": "machines",
          "signature": "SourceT m b -\u003e WyeT m a b c -\u003e ProcessT m a c",
          "source": "src/Data-Machine-Wye.html#capY",
          "type": "function"
        },
        "index": {
          "description": "Tie off one input of tee by connecting it to known source",
          "hierarchy": "Data Machine Wye",
          "module": "Data.Machine.Wye",
          "name": "capY",
          "normalized": "SourceT a b-\u003eWyeT a c b d-\u003eProcessT a c d",
          "package": "machines",
          "signature": "SourceT m b-\u003eWyeT m a b c-\u003eProcessT m a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Wye.html#v:capY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a pair of pipes onto the front of a \u003ccode\u003e\u003ca\u003eWye\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePrecompose a \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e onto each input of a \u003ccode\u003e\u003ca\u003eWye\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003eWyeT\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis is left biased in that it tries to draw values from the \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e input whenever they are\n available, and only draws from the \u003ccode\u003e\u003ca\u003eY\u003c/a\u003e\u003c/code\u003e input when \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e would block.\n\u003c/p\u003e",
          "module": "Data.Machine.Wye",
          "name": "wye",
          "package": "machines",
          "signature": "ProcessT m a a' -\u003e ProcessT m b b' -\u003e WyeT m a' b' c -\u003e WyeT m a b c",
          "source": "src/Data-Machine-Wye.html#wye",
          "type": "function"
        },
        "index": {
          "description": "Compose pair of pipes onto the front of Wye Precompose Process onto each input of Wye or WyeT This is left biased in that it tries to draw values from the input whenever they are available and only draws from the input when would block",
          "hierarchy": "Data Machine Wye",
          "module": "Data.Machine.Wye",
          "name": "wye",
          "normalized": "ProcessT a b c-\u003eProcessT a d e-\u003eWyeT a c e f-\u003eWyeT a b d f",
          "package": "machines",
          "signature": "ProcessT m a a'-\u003eProcessT m b b'-\u003eWyeT m a' b' c-\u003eWyeT m a b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine-Wye.html#v:wye"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Machine",
          "name": "Machine",
          "package": "machines",
          "source": "src/Data-Machine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Machine",
          "module": "Data.Machine",
          "name": "Machine",
          "package": "machines",
          "partial": "Machine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/machines/docs/Data-Machine.html#"
      }
    }
  ]
]