[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sink/docs/Data-Sink.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003es are a more flexible alternative to lazy I/O\n(\u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e). Lazy I/O conflates evaluation with execution;\na value obtained from \u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e can perform side-effects\nduring the evaluation of pure code. Like lazy I/O, a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e provides a\nway to obtain the value of the result of an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action before the\naction has been executed, but unlike lazy I/O, it does not enable pure\ncode to perform side-effects. Instead, the value is explicitly\nassigned by a later \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action; repeated attempts to assign the value\nof a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e fail. The catch is that this explicit assignment must\noccur before the value is forced, so just like with lazy I/O, you\ncan't get away with completely ignoring evaluation order without\nintroducing bugs. However, violating this condition does not violate\npurity because if the value is forced before it has been assigned, it\nis .\n\u003c/p\u003e\u003cp\u003eIn practice, using \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003es instead of \u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e requires a\nbit more \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e boilerplate. The main practical difference is that while\n\u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e requires you to reason about effects from the\npoint of view of pure code, \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003es require you to reason about\nevaluation order of pure code from the point of view of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e; the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nportion of your program will have to be aware of what data is\nnecessary to produce *for* your pure code in order to be able to\nconsume the output it expects *from* your pure code.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Sink",
        "fct-package": "sink",
        "fct-signature": "module",
        "fct-source": "src/Data-Sink.html",
        "fct-type": "module",
        "title": "Sink"
      },
      "index": {
        "description": "Sink are more flexible alternative to lazy unsafeInterleaveIO Lazy conflates evaluation with execution value obtained from unsafeInterleaveIO can perform side-effects during the evaluation of pure code Like lazy Sink provides way to obtain the value of the result of an IO action before the action has been executed but unlike lazy it does not enable pure code to perform side-effects Instead the value is explicitly assigned by later IO action repeated attempts to assign the value of Sink fail The catch is that this explicit assignment must occur before the value is forced so just like with lazy you can get away with completely ignoring evaluation order without introducing bugs However violating this condition does not violate purity because if the value is forced before it has been assigned it is In practice using Sink instead of unsafeInterleaveIO requires bit more IO boilerplate The main practical difference is that while unsafeInterleaveIO requires you to reason about effects from the point of view of pure code Sink require you to reason about evaluation order of pure code from the point of view of IO the IO portion of your program will have to be aware of what data is necessary to produce for your pure code in order to be able to consume the output it expects from your pure code",
        "hierarchy": "Data Sink",
        "module": "Data.Sink",
        "name": "Sink",
        "normalized": "",
        "package": "sink",
        "partial": "Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sink/docs/Data-Sink.html#t:MultipleWrites",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception that is thrown by \u003ccode\u003e\u003ca\u003ewriteSink\u003c/a\u003e\u003c/code\u003e if you attempt to\n write to a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e more than once.\n\u003c/p\u003e",
        "fct-module": "Data.Sink",
        "fct-package": "sink",
        "fct-signature": "data",
        "fct-source": "src/Data-Sink.html#MultipleWrites",
        "fct-type": "data",
        "title": "MultipleWrites"
      },
      "index": {
        "description": "An exception that is thrown by writeSink if you attempt to write to Sink more than once",
        "hierarchy": "Data Sink",
        "module": "Data.Sink",
        "name": "MultipleWrites",
        "normalized": "",
        "package": "sink",
        "partial": "Multiple Writes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sink/docs/Data-Sink.html#t:Sink",
      "description": {
        "fct-descr": "\u003cp\u003eA write-once reference\n\u003c/p\u003e",
        "fct-module": "Data.Sink",
        "fct-package": "sink",
        "fct-signature": "data",
        "fct-source": "src/Data-Sink.html#Sink",
        "fct-type": "data",
        "title": "Sink"
      },
      "index": {
        "description": "write-once reference",
        "hierarchy": "Data Sink",
        "module": "Data.Sink",
        "name": "Sink",
        "normalized": "",
        "package": "sink",
        "partial": "Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sink/docs/Data-Sink.html#v:MultipleWrites",
      "description": {
        "fct-module": "Data.Sink",
        "fct-package": "sink",
        "fct-signature": "MultipleWrites",
        "fct-source": "src/Data-Sink.html#MultipleWrites",
        "fct-type": "function",
        "title": "MultipleWrites"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Sink",
        "module": "Data.Sink",
        "name": "MultipleWrites",
        "normalized": "",
        "package": "sink",
        "partial": "Multiple Writes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sink/docs/Data-Sink.html#v:newSink",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e with a default error message.\n\u003c/p\u003e",
        "fct-module": "Data.Sink",
        "fct-package": "sink",
        "fct-signature": "IO (Sink a, a)",
        "fct-source": "src/Data-Sink.html#newSink",
        "fct-type": "function",
        "title": "newSink"
      },
      "index": {
        "description": "Create new Sink with default error message",
        "hierarchy": "Data Sink",
        "module": "Data.Sink",
        "name": "newSink",
        "normalized": "IO(Sink a,a)",
        "package": "sink",
        "partial": "Sink",
        "signature": "IO(Sink a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sink/docs/Data-Sink.html#v:newSinkMsg",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e and a pure value. If you force the value\n before writing to the \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e, the value is . If you write to the\n \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e before forcing the value, the value will be whatever you\n wrote to the \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument is an error message in\n case you force the value before writing to the \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Sink",
        "fct-package": "sink",
        "fct-signature": "String -\u003e IO (Sink a, a)",
        "fct-source": "src/Data-Sink.html#newSinkMsg",
        "fct-type": "function",
        "title": "newSinkMsg"
      },
      "index": {
        "description": "Create new Sink and pure value If you force the value before writing to the Sink the value is If you write to the Sink before forcing the value the value will be whatever you wrote to the Sink The String argument is an error message in case you force the value before writing to the Sink",
        "hierarchy": "Data Sink",
        "module": "Data.Sink",
        "name": "newSinkMsg",
        "normalized": "String-\u003eIO(Sink a,a)",
        "package": "sink",
        "partial": "Sink Msg",
        "signature": "String-\u003eIO(Sink a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sink/docs/Data-Sink.html#v:tryWriteSink",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to assign a value to a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e. If the \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e was\n previously unwritten, write the value and return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, otherwise\n keep the old value and return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e. This is an atomic (thread\n safe) operation.\n\u003c/p\u003e",
        "fct-module": "Data.Sink",
        "fct-package": "sink",
        "fct-signature": "Sink a -\u003e a -\u003e IO Bool",
        "fct-source": "src/Data-Sink.html#tryWriteSink",
        "fct-type": "function",
        "title": "tryWriteSink"
      },
      "index": {
        "description": "Attempt to assign value to Sink If the Sink was previously unwritten write the value and return True otherwise keep the old value and return False This is an atomic thread safe operation",
        "hierarchy": "Data Sink",
        "module": "Data.Sink",
        "name": "tryWriteSink",
        "normalized": "Sink a-\u003ea-\u003eIO Bool",
        "package": "sink",
        "partial": "Write Sink",
        "signature": "Sink a-\u003ea-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sink/docs/Data-Sink.html#v:writeSink",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to assign a value to a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e. If the \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e had already\n been written to, throw a \u003ccode\u003e\u003ca\u003eMultipleWrites\u003c/a\u003e\u003c/code\u003e exception. This is an\n atomic (thread safe) operation.\n\u003c/p\u003e",
        "fct-module": "Data.Sink",
        "fct-package": "sink",
        "fct-signature": "Sink a -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-Sink.html#writeSink",
        "fct-type": "function",
        "title": "writeSink"
      },
      "index": {
        "description": "Attempt to assign value to Sink If the Sink had already been written to throw MultipleWrites exception This is an atomic thread safe operation",
        "hierarchy": "Data Sink",
        "module": "Data.Sink",
        "name": "writeSink",
        "normalized": "Sink a-\u003ea-\u003eIO()",
        "package": "sink",
        "partial": "Sink",
        "signature": "Sink a-\u003ea-\u003eIO()"
      }
    }
  }
]