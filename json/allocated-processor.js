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
        "word": "allocated-processor"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFramework for expressing monadic actions that require initialization and finalization.\n This module provides a \u003cem\u003efunctional\u003c/em\u003e interface for defining and chaining a series of processors.\n\u003c/p\u003e\u003cp\u003eMotivating example: in the IO monad, bindings to C libraries that use functions such as: f(foo *src, foo\n *dst), where the pointer \u003ccode\u003edst\u003c/code\u003e must be pre-allocated. In this case we normally do:\n\u003c/p\u003e\u003cpre\u003e foo *dst = allocateFoo();\n ... \n while (something) {\n    f(src, dst);\n    ...\n }\n releaseFoo(dst);\n\u003c/pre\u003e\u003cp\u003eYou can use the \u003ccode\u003e\u003ca\u003erunUntil\u003c/a\u003e\u003c/code\u003e function below to emulate that loop.\n\u003c/p\u003e\u003cp\u003eProcessor is an instance of Category, Functor, Applicative and Arrow. \n\u003c/p\u003e\u003cp\u003eIn addition to the general type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProcessor\u003c/a\u003e\u003c/code\u003e m a b\u003c/code\u003e, this module also defines (and gives a semantic model\n for) \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProcessor\u003c/a\u003e\u003c/code\u003e IO a b\u003c/code\u003e, which has synonym \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIOProcessor\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Processor",
          "name": "Processor",
          "package": "allocated-processor",
          "source": "src/Control-Processor.html",
          "type": "module"
        },
        "index": {
          "description": "Framework for expressing monadic actions that require initialization and finalization This module provides functional interface for defining and chaining series of processors Motivating example in the IO monad bindings to libraries that use functions such as foo src foo dst where the pointer dst must be pre-allocated In this case we normally do foo dst allocateFoo while something src dst releaseFoo dst You can use the runUntil function below to emulate that loop Processor is an instance of Category Functor Applicative and Arrow In addition to the general type Processor this module also defines and gives semantic model for Processor IO which has synonym IOProcessor",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "Processor",
          "package": "allocated-processor",
          "partial": "Processor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe semantic model for \u003ccode\u003e\u003ca\u003eIOProcessor\u003c/a\u003e\u003c/code\u003e is a function:\n\u003c/p\u003e\u003cpre\u003e [[ 'IOProcessor' a b ]] = a -\u003e b\n\u003c/pre\u003e\u003cp\u003eTo satisfy this model, the Processor value (the implementation) must obey the rules:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The processing function (\u003ccode\u003ea -\u003e x -\u003e m x\u003c/code\u003e) must act as if purely, so that indeed for a given input the\n       output is always the same. One particular thing to be careful with is that the output does not depend\n       on time (for example, you shouldn't use IOProcessor to implement an input device). The \u003ccode\u003eIOSource\u003c/code\u003e type\n       is defined exactly for time-dependent processors. For pointer typed inputs and outputs, see next law.\n\u003c/li\u003e\u003cli\u003e For processors that work on pointers, \u003ccode\u003e[[ Ptr t ]] = t\u003c/code\u003e. This is guaranteed by the following\n       implementation constraints for \u003ccode\u003eIOProcessor a b\u003c/code\u003e:\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003ea\u003c/code\u003e is a pointer type (\u003ccode\u003ea = Ptr p\u003c/code\u003e), then the processor must NOT write (modify) the referenced data.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003eb\u003c/code\u003e is a pointer, the memory it points to (and its allocation status) is only allowed to change\n          by the processor that created it (in the processing and releasing functions). In a way this\n          generalizes the first constraint.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eNote, that unlike \u003ca\u003eYampa\u003c/a\u003e, this model does not allow transformations of the type \u003ccode\u003e(Time -\u003e a) -\u003e (Time -\u003e\n b)\u003c/code\u003e. The reason is that I want to prevent arbitrary time access (whether causal or not). This limitation\n means that everything is essentially \u003ca\u003epoint-wise\u003c/a\u003e in time. To allow memory-full operations under this\n model, \u003ccode\u003e\u003ca\u003escanlT\u003c/a\u003e\u003c/code\u003e is defined. See \u003ca\u003ehttp://www.ee.bgu.ac.il/~noamle/_downloads/gaccum.pdf\u003c/a\u003e for more about\n arbitrary time access.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "IOProcessor",
          "package": "allocated-processor",
          "source": "src/Control-Processor.html#IOProcessor",
          "type": "type"
        },
        "index": {
          "description": "The semantic model for IOProcessor is function IOProcessor To satisfy this model the Processor value the implementation must obey the rules The processing function must act as if purely so that indeed for given input the output is always the same One particular thing to be careful with is that the output does not depend on time for example you shouldn use IOProcessor to implement an input device The IOSource type is defined exactly for time-dependent processors For pointer typed inputs and outputs see next law For processors that work on pointers Ptr This is guaranteed by the following implementation constraints for IOProcessor If is pointer type Ptr then the processor must NOT write modify the referenced data If is pointer the memory it points to and its allocation status is only allowed to change by the processor that created it in the processing and releasing functions In way this generalizes the first constraint Note that unlike Yampa this model does not allow transformations of the type Time Time The reason is that want to prevent arbitrary time access whether causal or not This limitation means that everything is essentially point-wise in time To allow memory-full operations under this model scanlT is defined See http www.ee.bgu.ac.il noamle downloads gaccum.pdf for more about arbitrary time access",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "IOProcessor",
          "package": "allocated-processor",
          "partial": "IOProcessor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#t:IOProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTODO: What's the semantic model for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIOSink\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "IOSink",
          "package": "allocated-processor",
          "source": "src/Control-Processor.html#IOSink",
          "type": "type"
        },
        "index": {
          "description": "TODO What the semantic model for IOSink",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "IOSink",
          "package": "allocated-processor",
          "partial": "IOSink",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#t:IOSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eIOSource\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e is the type of time-dependent processors, such that:\n\u003c/p\u003e\u003cpre\u003e [[ 'IOSource' a b ]] = (a, Time) -\u003e b\n\u003c/pre\u003e\u003cp\u003eThus, it is ok to implement a processing action that outputs arbitrary time-dependent values during runtime\n regardless of input. (Although the more useful case is to calculate something from the input \u003ccode\u003ea\u003c/code\u003e that is\n also time-dependent. The \u003ccode\u003ea\u003c/code\u003e input is often not required and in those cases \u003ccode\u003ea = ()\u003c/code\u003e is used.\n\u003c/p\u003e\u003cp\u003eNotice that this means that IOSource doesn't qualify as an \u003ccode\u003e\u003ca\u003eIOProcessor\u003c/a\u003e\u003c/code\u003e. However, currently the\n implementation \u003cem\u003edoes NOT\u003c/em\u003e enforce this, i.e. IOSource is not a newtype; I don't know how to implement it\n correctly. Also, one question is whether primitives like \u003ca\u003echain\u003c/a\u003e will have to disallow placing \u003ccode\u003e\u003ca\u003eIOSource\u003c/a\u003e\u003c/code\u003e\n as the second element in a chain. Maybe they should, maybe they shouldn't.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "IOSource",
          "package": "allocated-processor",
          "source": "src/Control-Processor.html#IOSource",
          "type": "type"
        },
        "index": {
          "description": "IOSource is the type of time-dependent processors such that IOSource Time Thus it is ok to implement processing action that outputs arbitrary time-dependent values during runtime regardless of input Although the more useful case is to calculate something from the input that is also time-dependent The input is often not required and in those cases is used Notice that this means that IOSource doesn qualify as an IOProcessor However currently the implementation does NOT enforce this i.e IOSource is not newtype don know how to implement it correctly Also one question is whether primitives like chain will have to disallow placing IOSource as the second element in chain Maybe they should maybe they shouldn",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "IOSource",
          "package": "allocated-processor",
          "partial": "IOSource",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#t:IOSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of Processors\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e, \u003ccode\u003eb\u003c/code\u003e = the input and output types of the processor (think a -\u003e b)\n\u003c/li\u003e\u003cli\u003e x = type of internal state (existentially quantified)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe arguments to the constructor are:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003ccode\u003ea -\u003e x -\u003em x\u003c/code\u003e - Processing function: Takes input and internal state, and returns new internal state.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea -\u003e m x\u003c/code\u003e - Allocator for internal state (this is run only once): Takes (usually the first) input, and returns initial internal state.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ex -\u003e m b\u003c/code\u003e - Convertor from state x to output b: Takes internal state and returns the output.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ex -\u003e m ()\u003c/code\u003e - Releaser for internal state (finalizer, run once): Run after processor is done being used, to release the internal state.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eTODO: re-define in terms that don't need the \u003ccode\u003ex\u003c/code\u003e existential (and the allocator), using a\n continuation-style processing function.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "Processor",
          "package": "allocated-processor",
          "source": "src/Control-Processor.html#Processor",
          "type": "data"
        },
        "index": {
          "description": "The type of Processors the input and output types of the processor think type of internal state existentially quantified The arguments to the constructor are Processing function Takes input and internal state and returns new internal state Allocator for internal state this is run only once Takes usually the first input and returns initial internal state Convertor from state to output Takes internal state and returns the output Releaser for internal state finalizer run once Run after processor is done being used to release the internal state TODO re-define in terms that don need the existential and the allocator using continuation-style processing function",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "Processor",
          "package": "allocated-processor",
          "partial": "Processor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#t:Processor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'f --\u003c g' means: split f and feed it into g. Useful for feeding parallelized (***'d) processors.\n For example, a --\u003ca\u003e (b *** c) = a \u003c/a\u003e\u003e\u003e (b &&& c)\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "(--\u003c)",
          "package": "allocated-processor",
          "signature": "cat a a1 -\u003e cat (a1, a1) c -\u003e cat a c",
          "source": "src/Control-Processor.html#--%3C",
          "type": "function"
        },
        "index": {
          "description": "means split and feed it into Useful for feeding parallelized processors For example",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "(--\u003c) --\u003c",
          "normalized": "a b b-\u003ea(b,b)c-\u003ea b c",
          "package": "allocated-processor",
          "signature": "cat a a-\u003ecat(a,a)c-\u003ecat a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:-45--45--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Processor",
          "name": "Processor",
          "package": "allocated-processor",
          "signature": "(a -\u003e x -\u003e m x) -\u003e (a -\u003e m x) -\u003e (x -\u003e m b) -\u003e (x -\u003e m ()) -\u003e Processor m a b",
          "source": "src/Control-Processor.html#Processor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "Processor",
          "normalized": "(a-\u003eb-\u003ec b)-\u003e(a-\u003ec b)-\u003e(b-\u003ec d)-\u003e(b-\u003ec())-\u003eProcessor c a d",
          "package": "allocated-processor",
          "partial": "Processor",
          "signature": "(a-\u003ex-\u003em x)-\u003e(a-\u003em x)-\u003e(x-\u003em b)-\u003e(x-\u003em())-\u003eProcessor m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:Processor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChains two processors serially, so one feeds the next.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "chain",
          "package": "allocated-processor",
          "signature": "Processor m a b' -\u003e Processor m b' b -\u003e Processor m a b",
          "source": "src/Control-Processor.html#chain",
          "type": "function"
        },
        "index": {
          "description": "Chains two processors serially so one feeds the next",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "chain",
          "normalized": "Processor a b c-\u003eProcessor a c d-\u003eProcessor a b d",
          "package": "allocated-processor",
          "signature": "Processor m a b'-\u003eProcessor m b' b-\u003eProcessor m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:chain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferentiate of time-dependent values, using \u003ccode\u003e\u003ca\u003escanlT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "differentiate",
          "package": "allocated-processor",
          "signature": "m (Scalar v) -\u003e Processor m a v -\u003e Processor m a v",
          "source": "src/Control-Processor.html#differentiate",
          "type": "function"
        },
        "index": {
          "description": "Differentiate of time-dependent values using scanlT",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "differentiate",
          "normalized": "a(Scalar b)-\u003eProcessor a c b-\u003eProcessor a c b",
          "package": "allocated-processor",
          "signature": "m(Scalar v)-\u003eProcessor m a v-\u003eProcessor m a v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:differentiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Processor",
          "name": "discreteConv",
          "package": "allocated-processor",
          "signature": "[Scalar a] -\u003e [a] -\u003e a",
          "source": "src/Control-Processor.html#discreteConv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "discreteConv",
          "normalized": "[Scalar a]-\u003e[a]-\u003ea",
          "package": "allocated-processor",
          "partial": "Conv",
          "signature": "[Scalar a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:discreteConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity processor: output = input. Semantically, [[ empty ]] = id\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "empty",
          "package": "allocated-processor",
          "signature": "Processor m a a",
          "source": "src/Control-Processor.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The identity processor output input Semantically empty id",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "empty",
          "package": "allocated-processor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinite impulse response\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "fir",
          "package": "allocated-processor",
          "signature": "[Scalar v] -\u003e t -\u003e m t -\u003e Processor m a v -\u003e Processor m a v",
          "source": "src/Control-Processor.html#fir",
          "type": "function"
        },
        "index": {
          "description": "Finite impulse response",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "fir",
          "normalized": "[Scalar a]-\u003eb-\u003ec b-\u003eProcessor c d a-\u003eProcessor c d a",
          "package": "allocated-processor",
          "signature": "[Scalar v]-\u003et-\u003em t-\u003eProcessor m a v-\u003eProcessor m a v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:fir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a processor that: given two processors, gives source as input to both processors and runs them\n independently, and after both have have finished, outputs their combined outputs.\n\u003c/p\u003e\u003cp\u003eSemantic meaning, using Arrow's (&&&) operator:\n [[ forkJoin ]] = &&& \n Or, considering the Applicative instance of functions (which are the semantic meanings of a processor):\n [[ forkJoin ]] = liftA2 (,)\n Alternative implementation to consider: f &&& g = (,) \u003ca\u003e&\u003c/a\u003e f \u003ca\u003e*\u003c/a\u003e g\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "forkJoin",
          "package": "allocated-processor",
          "signature": "Processor m a b -\u003e Processor m a b' -\u003e Processor m a (b, b')",
          "source": "src/Control-Processor.html#forkJoin",
          "type": "function"
        },
        "index": {
          "description": "Constructs processor that given two processors gives source as input to both processors and runs them independently and after both have have finished outputs their combined outputs Semantic meaning using Arrow operator forkJoin Or considering the Applicative instance of functions which are the semantic meanings of processor forkJoin liftA2 Alternative implementation to consider",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "forkJoin",
          "normalized": "Processor a b c-\u003eProcessor a b d-\u003eProcessor a b(c,d)",
          "package": "allocated-processor",
          "partial": "Join",
          "signature": "Processor m a b-\u003eProcessor m a b'-\u003eProcessor m a(b,b')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:forkJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHolds a Maybe-valued processor and reports the time passed since last value was seen.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "holdMaybe",
          "package": "allocated-processor",
          "signature": "b -\u003e m t -\u003e Processor m a (Maybe b) -\u003e Processor m a (b, t)",
          "source": "src/Control-Processor.html#holdMaybe",
          "type": "function"
        },
        "index": {
          "description": "Holds Maybe-valued processor and reports the time passed since last value was seen",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "holdMaybe",
          "normalized": "a-\u003eb c-\u003eProcessor b d(Maybe a)-\u003eProcessor b d(a,c)",
          "package": "allocated-processor",
          "partial": "Maybe",
          "signature": "b-\u003em t-\u003eProcessor m a(Maybe b)-\u003eProcessor m a(b,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:holdMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegration of time-dependent values, using \u003ccode\u003e\u003ca\u003escanlT\u003c/a\u003e\u003c/code\u003e, implemented by trapezoidal approximation.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "integrate",
          "package": "allocated-processor",
          "signature": "m (Scalar v) -\u003e Processor m a v -\u003e Processor m a v",
          "source": "src/Control-Processor.html#integrate",
          "type": "function"
        },
        "index": {
          "description": "Integration of time-dependent values using scanlT implemented by trapezoidal approximation",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "integrate",
          "normalized": "a(Scalar b)-\u003eProcessor a c b-\u003eProcessor a c b",
          "package": "allocated-processor",
          "signature": "m(Scalar v)-\u003eProcessor m a v-\u003eProcessor m a v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:integrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRunning maximum of a processor's values\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "maxP",
          "package": "allocated-processor",
          "signature": "m t -\u003e b -\u003e Processor m a b -\u003e Processor m a b",
          "source": "src/Control-Processor.html#maxP",
          "type": "function"
        },
        "index": {
          "description": "Running maximum of processor values",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "maxP",
          "normalized": "a b-\u003ec-\u003eProcessor a d c-\u003eProcessor a d c",
          "package": "allocated-processor",
          "signature": "m t-\u003eb-\u003eProcessor m a b-\u003eProcessor m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:maxP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRunning minimum of a processor's values\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "minP",
          "package": "allocated-processor",
          "signature": "m t -\u003e b -\u003e Processor m a b -\u003e Processor m a b",
          "source": "src/Control-Processor.html#minP",
          "type": "function"
        },
        "index": {
          "description": "Running minimum of processor values",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "minP",
          "normalized": "a b-\u003ec-\u003eProcessor a d c-\u003eProcessor a d c",
          "package": "allocated-processor",
          "signature": "m t-\u003eb-\u003eProcessor m a b-\u003eProcessor m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:minP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Processor",
          "name": "nStepsMemory",
          "package": "allocated-processor",
          "signature": "Int -\u003e ([(t, b)] -\u003e c) -\u003e (t, b) -\u003e c -\u003e m t -\u003e Processor m a b -\u003e Processor m a c",
          "source": "src/Control-Processor.html#nStepsMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "nStepsMemory",
          "normalized": "Int-\u003e([(a,b)]-\u003ec)-\u003e(a,b)-\u003ec-\u003ed a-\u003eProcessor d e b-\u003eProcessor d e c",
          "package": "allocated-processor",
          "partial": "Steps Memory",
          "signature": "Int-\u003e([(t,b)]-\u003ec)-\u003e(t,b)-\u003ec-\u003em t-\u003eProcessor m a b-\u003eProcessor m a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:nStepsMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA processor that represents two sub-processors in parallel (although the current implementation runs them\n sequentially, but that may change in the future)\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "parallel",
          "package": "allocated-processor",
          "signature": "Processor m a b -\u003e Processor m c d -\u003e Processor m (a, c) (b, d)",
          "source": "src/Control-Processor.html#parallel",
          "type": "function"
        },
        "index": {
          "description": "processor that represents two sub-processors in parallel although the current implementation runs them sequentially but that may change in the future",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "parallel",
          "normalized": "Processor a b c-\u003eProcessor a d e-\u003eProcessor a(b,d)(c,e)",
          "package": "allocated-processor",
          "signature": "Processor m a b-\u003eProcessor m c d-\u003eProcessor m(a,c)(b,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTODO: do we need this? we're exporting the data constructor anyway for now, so maybe we don't.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "processor",
          "package": "allocated-processor",
          "signature": "(a -\u003e x -\u003e m x) -\u003e (a -\u003e m x) -\u003e (x -\u003e m b) -\u003e (x -\u003e m ()) -\u003e Processor m a b",
          "source": "src/Control-Processor.html#processor",
          "type": "function"
        },
        "index": {
          "description": "TODO do we need this we re exporting the data constructor anyway for now so maybe we don",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "processor",
          "normalized": "(a-\u003eb-\u003ec b)-\u003e(a-\u003ec b)-\u003e(b-\u003ec d)-\u003e(b-\u003ec())-\u003eProcessor c a d",
          "package": "allocated-processor",
          "signature": "(a-\u003ex-\u003em x)-\u003e(a-\u003em x)-\u003e(x-\u003em b)-\u003e(x-\u003em())-\u003eProcessor m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:processor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eholdMaybe\u003c/a\u003e\u003c/code\u003e-type processor, reverts back to a default value if no input was \n seen for more than a given time limit\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "revertAfterT",
          "package": "allocated-processor",
          "signature": "t -\u003e b -\u003e Processor m a (b, t) -\u003e Processor m a b",
          "source": "src/Control-Processor.html#revertAfterT",
          "type": "function"
        },
        "index": {
          "description": "Given holdMaybe type processor reverts back to default value if no input was seen for more than given time limit",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "revertAfterT",
          "normalized": "a-\u003eb-\u003eProcessor c d(b,a)-\u003eProcessor c d b",
          "package": "allocated-processor",
          "partial": "After",
          "signature": "t-\u003eb-\u003eProcessor m a(b,t)-\u003eProcessor m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:revertAfterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the processor once: allocates, processes, converts to output, and deallocates.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "run",
          "package": "allocated-processor",
          "signature": "Processor m a b -\u003e a -\u003e m b",
          "source": "src/Control-Processor.html#run",
          "type": "function"
        },
        "index": {
          "description": "Runs the processor once allocates processes converts to output and deallocates",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "run",
          "normalized": "Processor a b c-\u003eb-\u003ea c",
          "package": "allocated-processor",
          "signature": "Processor m a b-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeeps running the processing function in a loop until a predicate on the output is true.\n Useful for processors whose main function is after the allocation and before deallocation.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "runUntil",
          "package": "allocated-processor",
          "signature": "Processor m a b -\u003e a -\u003e (b -\u003e m Bool) -\u003e m b",
          "source": "src/Control-Processor.html#runUntil",
          "type": "function"
        },
        "index": {
          "description": "Keeps running the processing function in loop until predicate on the output is true Useful for processors whose main function is after the allocation and before deallocation",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "runUntil",
          "normalized": "Processor a b c-\u003eb-\u003e(c-\u003ea Bool)-\u003ea c",
          "package": "allocated-processor",
          "partial": "Until",
          "signature": "Processor m a b-\u003ea-\u003e(b-\u003em Bool)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:runUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the processor once, but passes the processing + conversion action to the given function.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "runWith",
          "package": "allocated-processor",
          "signature": "(m b -\u003e m b') -\u003e Processor m a b -\u003e a -\u003e m b'",
          "source": "src/Control-Processor.html#runWith",
          "type": "function"
        },
        "index": {
          "description": "Runs the processor once but passes the processing conversion action to the given function",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "runWith",
          "normalized": "(a b-\u003ea c)-\u003eProcessor a d b-\u003ed-\u003ea c",
          "package": "allocated-processor",
          "partial": "With",
          "signature": "(m b-\u003em b')-\u003eProcessor m a b-\u003ea-\u003em b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:runWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escanlT provides the primitive for performing memory-full operations on time-dependent processors, as\n | described in \u003ca\u003ehttp://www.ee.bgu.ac.il/~noamle/_downloads/gaccum.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUntested\u003c/em\u003e, and also doesn't implement the \u003ca\u003elimit as dt -\u003e 0\u003c/a\u003e part of the model. Currently the precision of\n the approximation is set by the samplerate (how many times per second the resulting processor is run, the\n more the better for precision).\n\u003c/p\u003e\u003cp\u003escanlT and all its uses are probably most (or only?) useful in the context of Processor IO. However for\n generality it is defined here on arbitrary Processor m.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eProcessor m a b\u003c/code\u003e argument should really be time-dependent during runtime, so it's model can't be \u003ccode\u003ea -\u003e\n b\u003c/code\u003e. Thus it is most logical to use only \u003ccode\u003e\u003ca\u003eIOSource\u003c/a\u003e\u003c/code\u003e types for the processor argument.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "scanlT",
          "package": "allocated-processor",
          "signature": "m t -\u003e (b -\u003e b -\u003e t -\u003e c -\u003e c) -\u003e c -\u003e Processor m a b -\u003e Processor m a c",
          "source": "src/Control-Processor.html#scanlT",
          "type": "function"
        },
        "index": {
          "description": "scanlT provides the primitive for performing memory-full operations on time-dependent processors as described in http www.ee.bgu.ac.il noamle downloads gaccum.pdf Untested and also doesn implement the limit as dt part of the model Currently the precision of the approximation is set by the samplerate how many times per second the resulting processor is run the more the better for precision scanlT and all its uses are probably most or only useful in the context of Processor IO However for generality it is defined here on arbitrary Processor The Processor argument should really be time-dependent during runtime so it model can be Thus it is most logical to use only IOSource types for the processor argument",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "scanlT",
          "normalized": "a b-\u003e(c-\u003ec-\u003eb-\u003ed-\u003ed)-\u003ed-\u003eProcessor a e c-\u003eProcessor a e d",
          "package": "allocated-processor",
          "signature": "m t-\u003e(b-\u003eb-\u003et-\u003ec-\u003ec)-\u003ec-\u003eProcessor m a b-\u003eProcessor m a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:scanlT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits (duplicates) the output of a functor, or on this case a processor.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "split",
          "package": "allocated-processor",
          "signature": "f a -\u003e f (a, a)",
          "source": "src/Control-Processor.html#split",
          "type": "function"
        },
        "index": {
          "description": "Splits duplicates the output of functor or on this case processor",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "split",
          "normalized": "a b-\u003ea(b,b)",
          "package": "allocated-processor",
          "signature": "f a-\u003ef(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Processor",
          "name": "trace",
          "package": "allocated-processor",
          "signature": "IOProcessor a a",
          "source": "src/Control-Processor.html#trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "trace",
          "package": "allocated-processor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a processor that operates around an inner processor. \n\u003c/p\u003e\u003cp\u003eUseful for sharing resources between two actions, a pre and a post action.\n\u003c/p\u003e\u003cp\u003eThe outer processor has \u003cem\u003etwo\u003c/em\u003e processing functions, pre: \u003ccode\u003ea-\u003eb\u003c/code\u003e and post: \u003ccode\u003ec-\u003ed\u003c/code\u003e. The last argument is the\n inner processor, \u003ccode\u003eProcessor b c\u003c/code\u003e.  Thus, the resulting processor takes the \u003ccode\u003ea\u003c/code\u003e, processes it into a \u003ccode\u003eb\u003c/code\u003e,\n feeds that through the inner processor to get a \u003ccode\u003ec\u003c/code\u003e, and finally post-processes the \u003ccode\u003ec\u003c/code\u003e into a \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eExample scenario\u003c/em\u003e: A singleton hardware device context, that cannot be duplicated or allocated more than\n once. You need to both read and write to that device. It's not possible to create two processors, one for\n reads and one for writes, because they need to use the same allocation (the device context). With\n wrapPrcessor you can have the read as the pre-processing and write as the post-processing. Let's call the\n result of calling wrapProcessor except the last argument, \u003ca\u003emyDeviceProcessor\u003c/a\u003e. Thus, you have:\n\u003c/p\u003e\u003cpre\u003e  [[ myDeviceProcessor innerProc ]] = read \u003e\u003e\u003e innerProc \u003e\u003e\u003e write\n\u003c/pre\u003e\u003cp\u003eTODO: Find a more general / elegant solution to the \u003ca\u003eshared resource\u003c/a\u003e problem.\n\u003c/p\u003e",
          "module": "Control.Processor",
          "name": "wrapProcessor",
          "package": "allocated-processor",
          "signature": "(a -\u003e x -\u003e m x) -\u003e (c -\u003e x -\u003e m x) -\u003e (a -\u003e m x) -\u003e (x -\u003e m b) -\u003e (x -\u003e m d) -\u003e (x -\u003e m ()) -\u003e Processor m b c -\u003e Processor m a d",
          "source": "src/Control-Processor.html#wrapProcessor",
          "type": "function"
        },
        "index": {
          "description": "Creates processor that operates around an inner processor Useful for sharing resources between two actions pre and post action The outer processor has two processing functions pre and post The last argument is the inner processor Processor Thus the resulting processor takes the processes it into feeds that through the inner processor to get and finally post-processes the into Example scenario singleton hardware device context that cannot be duplicated or allocated more than once You need to both read and write to that device It not possible to create two processors one for reads and one for writes because they need to use the same allocation the device context With wrapPrcessor you can have the read as the pre-processing and write as the post-processing Let call the result of calling wrapProcessor except the last argument myDeviceProcessor Thus you have myDeviceProcessor innerProc read innerProc write TODO Find more general elegant solution to the shared resource problem",
          "hierarchy": "Control Processor",
          "module": "Control.Processor",
          "name": "wrapProcessor",
          "normalized": "(a-\u003eb-\u003ec b)-\u003e(d-\u003eb-\u003ec b)-\u003e(a-\u003ec b)-\u003e(b-\u003ec e)-\u003e(b-\u003ec f)-\u003e(b-\u003ec())-\u003eProcessor c e d-\u003eProcessor c a f",
          "package": "allocated-processor",
          "partial": "Processor",
          "signature": "(a-\u003ex-\u003em x)-\u003e(c-\u003ex-\u003em x)-\u003e(a-\u003em x)-\u003e(x-\u003em b)-\u003e(x-\u003em d)-\u003e(x-\u003em())-\u003eProcessor m b c-\u003eProcessor m a d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Control-Processor.html#v:wrapProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.ForeignPtrWrap",
          "name": "ForeignPtrWrap",
          "package": "allocated-processor",
          "source": "src/Foreign-ForeignPtrWrap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign ForeignPtrWrap",
          "module": "Foreign.ForeignPtrWrap",
          "name": "ForeignPtrWrap",
          "package": "allocated-processor",
          "partial": "Foreign Ptr Wrap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Foreign-ForeignPtrWrap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFails if the ptr is nullPtr\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtrWrap",
          "name": "checkPtr",
          "package": "allocated-processor",
          "signature": "IO (Ptr a) -\u003e IO (Ptr a)",
          "source": "src/Foreign-ForeignPtrWrap.html#checkPtr",
          "type": "function"
        },
        "index": {
          "description": "Fails if the ptr is nullPtr",
          "hierarchy": "Foreign ForeignPtrWrap",
          "module": "Foreign.ForeignPtrWrap",
          "name": "checkPtr",
          "normalized": "IO(Ptr a)-\u003eIO(Ptr a)",
          "package": "allocated-processor",
          "partial": "Ptr",
          "signature": "IO(Ptr a)-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Foreign-ForeignPtrWrap.html#v:checkPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for newForeignPtr that handles nullPtrs, and can be chained to an IO Ptr creator.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e myPtrCreator = (createForeignPtr deallocFunc) . allocFunc\n\u003c/pre\u003e\u003cp\u003ewhere, allocFunc :: a-\u003eb-\u003ec-\u003e...-\u003e IO (Ptr z)\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtrWrap",
          "name": "createForeignPtr",
          "package": "allocated-processor",
          "signature": "FunPtr (Ptr a -\u003e IO ()) -\u003e IO (Ptr a) -\u003e IO (ForeignPtr a)",
          "source": "src/Foreign-ForeignPtrWrap.html#createForeignPtr",
          "type": "function"
        },
        "index": {
          "description": "wrapper for newForeignPtr that handles nullPtrs and can be chained to an IO Ptr creator Example usage myPtrCreator createForeignPtr deallocFunc allocFunc where allocFunc IO Ptr",
          "hierarchy": "Foreign ForeignPtrWrap",
          "module": "Foreign.ForeignPtrWrap",
          "name": "createForeignPtr",
          "normalized": "FunPtr(Ptr a-\u003eIO())-\u003eIO(Ptr a)-\u003eIO(ForeignPtr a)",
          "package": "allocated-processor",
          "partial": "Foreign Ptr",
          "signature": "FunPtr(Ptr a-\u003eIO())-\u003eIO(Ptr a)-\u003eIO(ForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Foreign-ForeignPtrWrap.html#v:createForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames a failure\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtrWrap",
          "name": "errorName",
          "package": "allocated-processor",
          "signature": "String -\u003e IO a -\u003e IO a",
          "source": "src/Foreign-ForeignPtrWrap.html#errorName",
          "type": "function"
        },
        "index": {
          "description": "Names failure",
          "hierarchy": "Foreign ForeignPtrWrap",
          "module": "Foreign.ForeignPtrWrap",
          "name": "errorName",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "allocated-processor",
          "partial": "Name",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/allocated-processor/docs/Foreign-ForeignPtrWrap.html#v:errorName"
      }
    }
  ]
]