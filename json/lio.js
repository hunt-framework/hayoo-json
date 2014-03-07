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
        "word": "lio"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements labeled \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003es.  The interface is analogous to\n\u003ca\u003eControl.Concurrent.MVar\u003c/a\u003e, but the operations take place in the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e\nmonad.  A labeled MVar, of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e l a\u003c/code\u003e, is a mutable location\nthat can be in one of two states; an \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e can be empty, or it can\nbe full (with a value of type \u003ccode\u003ea\u003c/code\u003e). The location is protected by a\nlabel of type \u003ccode\u003el\u003c/code\u003e.  As in the case of \u003ccode\u003eLIORef\u003c/code\u003es (see \u003ca\u003eLIO.LIORef\u003c/a\u003e),\nthis label is fixed and does not change according to the content\nplaced into the location.  Unlike \u003ccode\u003eLIORef\u003c/code\u003es, most operations use\n\u003ccode\u003e\u003ca\u003eguardWrite\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eguardWriteP\u003c/a\u003e\u003c/code\u003e, reflecting the fact that there is no\nsuch thing as read-only or write-only operations on an \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003es can be used to build synchronization primitives and\ncommunication channels (\u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003es themselves are single-place\nchannels).  We refer to \u003ca\u003eControl.Concurrent.MVar\u003c/a\u003e for the full\ndocumentation on MVars.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "LMVar",
          "package": "lio",
          "source": "src/LIO-Concurrent-LMVar.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements labeled MVar The interface is analogous to Control.Concurrent.MVar but the operations take place in the LIO monad labeled MVar of type LMVar is mutable location that can be in one of two states an LMVar can be empty or it can be full with value of type The location is protected by label of type As in the case of LIORef see LIO.LIORef this label is fixed and does not change according to the content placed into the location Unlike LIORef most operations use guardWrite or guardWriteP reflecting the fact that there is no such thing as read-only or write-only operations on an LMVar LMVar can be used to build synchronization primitives and communication channels LMVar themselves are single-place channels We refer to Control.Concurrent.MVar for the full documentation on MVars",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "LMVar",
          "package": "lio",
          "partial": "LMVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eLMVar\u003c/code\u003e is a labeled synchronization variable (an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e) that\n can be used by concurrent threads to communicate.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "LMVar",
          "package": "lio",
          "source": "src/LIO-Concurrent-LMVar.html#LMVar",
          "type": "type"
        },
        "index": {
          "description": "An LMVar is labeled synchronization variable an MVar that can be used by concurrent threads to communicate",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "LMVar",
          "package": "lio",
          "partial": "LMVar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#t:LMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the status of an \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e, i.e., whether it is empty. The\n function succeeds if the label of the \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e is below the current\n clearance -- the current label is raised to the join of the \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e\n label and the current label.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "isEmptyLMVar",
          "package": "lio",
          "signature": "LMVar l a -\u003e LIO l Bool",
          "source": "src/LIO-Concurrent-LMVar.html#isEmptyLMVar",
          "type": "function"
        },
        "index": {
          "description": "Check the status of an LMVar i.e whether it is empty The function succeeds if the label of the LMVar is below the current clearance the current label is raised to the join of the LMVar label and the current label",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "isEmptyLMVar",
          "normalized": "LMVar a b-\u003eLIO a Bool",
          "package": "lio",
          "partial": "Empty LMVar",
          "signature": "LMVar l a-\u003eLIO l Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:isEmptyLMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eisEmptyLMVar\u003c/a\u003e\u003c/code\u003e, but uses privileges when raising current label.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "isEmptyLMVarP",
          "package": "lio",
          "signature": "Priv p -\u003e LMVar l a -\u003e LIO l Bool",
          "source": "src/LIO-Concurrent-LMVar.html#isEmptyLMVarP",
          "type": "function"
        },
        "index": {
          "description": "Same as isEmptyLMVar but uses privileges when raising current label",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "isEmptyLMVarP",
          "normalized": "Priv a-\u003eLMVar b c-\u003eLIO b Bool",
          "package": "lio",
          "partial": "Empty LMVar",
          "signature": "Priv p-\u003eLMVar l a-\u003eLIO l Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:isEmptyLMVarP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new labeled MVar, in an empty state. Note that the supplied\n label must be above the current label and below the current clearance.\n An exception will be thrown by the underlying \u003ccode\u003e\u003ca\u003eguardAlloc\u003c/a\u003e\u003c/code\u003e if this is\n not the case.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "newEmptyLMVar",
          "package": "lio",
          "signature": "l-\u003e LIO l (LMVar l a)",
          "type": "function"
        },
        "index": {
          "description": "Create new labeled MVar in an empty state Note that the supplied label must be above the current label and below the current clearance An exception will be thrown by the underlying guardAlloc if this is not the case",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "newEmptyLMVar",
          "normalized": "a-\u003eLIO a(LMVar a b)",
          "package": "lio",
          "partial": "Empty LMVar",
          "signature": "l-\u003eLIO l(LMVar l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:newEmptyLMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003enewEmptyLMVar\u003c/a\u003e\u003c/code\u003e except it takes a set of privileges which\n are accounted for in comparing the label of the MVar to the current\n label and clearance.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "newEmptyLMVarP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e LIO l (LMVar l a)",
          "source": "src/LIO-Concurrent-LMVar.html#newEmptyLMVarP",
          "type": "function"
        },
        "index": {
          "description": "Same as newEmptyLMVar except it takes set of privileges which are accounted for in comparing the label of the MVar to the current label and clearance",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "newEmptyLMVarP",
          "normalized": "Priv a-\u003eb-\u003eLIO b(LMVar b c)",
          "package": "lio",
          "partial": "Empty LMVar",
          "signature": "Priv p-\u003el-\u003eLIO l(LMVar l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:newEmptyLMVarP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new labeled MVar, in an filled state with the supplied\n value. Note that the supplied label must be above the current label\n and below the current clearance.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "newLMVar",
          "package": "lio",
          "signature": "l-\u003e a-\u003e LIO l (LMVar l a)",
          "type": "function"
        },
        "index": {
          "description": "Create new labeled MVar in an filled state with the supplied value Note that the supplied label must be above the current label and below the current clearance",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "newLMVar",
          "normalized": "a-\u003eb-\u003eLIO a(LMVar a b)",
          "package": "lio",
          "partial": "LMVar",
          "signature": "l-\u003ea-\u003eLIO l(LMVar l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:newLMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003enewLMVar\u003c/a\u003e\u003c/code\u003e except it takes a set of privileges which are\n accounted for in comparing the label of the MVar to the current label\n and clearance.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "newLMVarP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e a -\u003e LIO l (LMVar l a)",
          "source": "src/LIO-Concurrent-LMVar.html#newLMVarP",
          "type": "function"
        },
        "index": {
          "description": "Same as newLMVar except it takes set of privileges which are accounted for in comparing the label of the MVar to the current label and clearance",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "newLMVarP",
          "normalized": "Priv a-\u003eb-\u003ec-\u003eLIO b(LMVar b c)",
          "package": "lio",
          "partial": "LMVar",
          "signature": "Priv p-\u003el-\u003ea-\u003eLIO l(LMVar l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:newLMVarP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts a value into an \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e. Note that a put consists of a read and\n a write, since it observes whether or not the \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e is empty, and so\n the current label must be the same as that of the \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e (of course,\n this is not the case when using privileges). As in the \u003ccode\u003e\u003ca\u003etakeLMVar\u003c/a\u003e\u003c/code\u003e\n case, if the label of the \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e is below the current clearance, we\n raise the current label to the join of the current label and the label\n of the MVar and put the value into the \u003ccode\u003eMVar\u003c/code\u003e.  Moreover if these IFC\n restrictions fail, the underlying \u003ccode\u003e\u003ca\u003eguardWrite\u003c/a\u003e\u003c/code\u003e throws an exception.\n If the \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e is full, \u003ccode\u003eputLMVar\u003c/code\u003e blocks.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "putLMVar",
          "package": "lio",
          "signature": "LMVar l a-\u003e a-\u003e LIO l ()",
          "type": "function"
        },
        "index": {
          "description": "Puts value into an LMVar Note that put consists of read and write since it observes whether or not the LMVar is empty and so the current label must be the same as that of the LMVar of course this is not the case when using privileges As in the takeLMVar case if the label of the LMVar is below the current clearance we raise the current label to the join of the current label and the label of the MVar and put the value into the MVar Moreover if these IFC restrictions fail the underlying guardWrite throws an exception If the LMVar is full putLMVar blocks",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "putLMVar",
          "normalized": "LMVar a b-\u003eb-\u003eLIO a()",
          "package": "lio",
          "partial": "LMVar",
          "signature": "LMVar l a-\u003ea-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:putLMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eputLMVar\u003c/a\u003e\u003c/code\u003e except \u003ccode\u003eputLMVarP\u003c/code\u003e takes a privilege object\n which is used when the current label is raised.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "putLMVarP",
          "package": "lio",
          "signature": "Priv p -\u003e LMVar l a -\u003e a -\u003e LIO l ()",
          "source": "src/LIO-Concurrent-LMVar.html#putLMVarP",
          "type": "function"
        },
        "index": {
          "description": "Same as putLMVar except putLMVarP takes privilege object which is used when the current label is raised",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "putLMVarP",
          "normalized": "Priv a-\u003eLMVar b c-\u003ec-\u003eLIO b()",
          "package": "lio",
          "partial": "LMVar",
          "signature": "Priv p-\u003eLMVar l a-\u003ea-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:putLMVarP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombination of \u003ccode\u003e\u003ca\u003etakeLMVar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputLMVar\u003c/a\u003e\u003c/code\u003e. Read the value, and\n just put it back. This operation is not atomic, and can can result\n in unexpected outcomes if another thread is simultaneously calling\n a function such as \u003ccode\u003e\u003ca\u003eputLMVar\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etryTakeLMVarP\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eisEmptyLMVar\u003c/a\u003e\u003c/code\u003e\n for this \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "readLMVar",
          "package": "lio",
          "signature": "LMVar l a -\u003e LIO l a",
          "source": "src/LIO-Concurrent-LMVar.html#readLMVar",
          "type": "function"
        },
        "index": {
          "description": "Combination of takeLMVar and putLMVar Read the value and just put it back This operation is not atomic and can can result in unexpected outcomes if another thread is simultaneously calling function such as putLMVar tryTakeLMVarP or isEmptyLMVar for this LMVar",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "readLMVar",
          "normalized": "LMVar a b-\u003eLIO a b",
          "package": "lio",
          "partial": "LMVar",
          "signature": "LMVar l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:readLMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ereadLMVar\u003c/a\u003e\u003c/code\u003e except \u003ccode\u003ereadLMVarP\u003c/code\u003e takes a privilege object\n which is used when the current label is raised.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "readLMVarP",
          "package": "lio",
          "signature": "Priv p -\u003e LMVar l a -\u003e LIO l a",
          "source": "src/LIO-Concurrent-LMVar.html#readLMVarP",
          "type": "function"
        },
        "index": {
          "description": "Same as readLMVar except readLMVarP takes privilege object which is used when the current label is raised",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "readLMVarP",
          "normalized": "Priv a-\u003eLMVar b c-\u003eLIO b c",
          "package": "lio",
          "partial": "LMVar",
          "signature": "Priv p-\u003eLMVar l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:readLMVarP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a value from an \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e, puts a new value into the \u003ccode\u003eLMvar\u003c/code\u003e,\n and returns the taken value.  Like the other \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e operations it is\n required that the label of the \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e be above the current label and\n below the current clearance. Moreover, the current label is raised to\n accommodate for the observation. The underlying \u003ccode\u003e\u003ca\u003eguardWrite\u003c/a\u003e\u003c/code\u003e throws an\n exception if this cannot be accomplished. This operation is atomic iff\n there is no other thread calling \u003ccode\u003e\u003ca\u003eputLMVar\u003c/a\u003e\u003c/code\u003e for this \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "swapLMVar",
          "package": "lio",
          "signature": "LMVar l a-\u003e a-\u003e LIO l a",
          "type": "function"
        },
        "index": {
          "description": "Takes value from an LMVar puts new value into the LMvar and returns the taken value Like the other LMVar operations it is required that the label of the LMVar be above the current label and below the current clearance Moreover the current label is raised to accommodate for the observation The underlying guardWrite throws an exception if this cannot be accomplished This operation is atomic iff there is no other thread calling putLMVar for this LMVar",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "swapLMVar",
          "normalized": "LMVar a b-\u003eb-\u003eLIO a b",
          "package": "lio",
          "partial": "LMVar",
          "signature": "LMVar l a-\u003ea-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:swapLMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eswapLMVar\u003c/a\u003e\u003c/code\u003e except \u003ccode\u003eswapLMVarP\u003c/code\u003e takes a privilege object\n which is used when the current label is raised.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "swapLMVarP",
          "package": "lio",
          "signature": "Priv p -\u003e LMVar l a -\u003e a -\u003e LIO l a",
          "source": "src/LIO-Concurrent-LMVar.html#swapLMVarP",
          "type": "function"
        },
        "index": {
          "description": "Same as swapLMVar except swapLMVarP takes privilege object which is used when the current label is raised",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "swapLMVarP",
          "normalized": "Priv a-\u003eLMVar b c-\u003ec-\u003eLIO b c",
          "package": "lio",
          "partial": "LMVar",
          "signature": "Priv p-\u003eLMVar l a-\u003ea-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:swapLMVarP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn contents of the \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e. Note that a take consists of a read\n and a write, since it observes whether or not the \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e is full, and\n thus the current label must be the same as that of the \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e (of\n course, this is not the case when using privileges).  Hence, if the\n label of the \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e is below the current clearance, we raise the\n current label to the join of the current label and the label of the\n MVar and read the contents of the \u003ccode\u003eMVar\u003c/code\u003e. The underlying guard\n \u003ccode\u003e\u003ca\u003eguardWrite\u003c/a\u003e\u003c/code\u003e will throw an exception if any of the IFC checks fail.\n Finally, like \u003ccode\u003eMVars\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e is empty, \u003ccode\u003etakeLMVar\u003c/code\u003e\n blocks.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "takeLMVar",
          "package": "lio",
          "signature": "LMVar l a -\u003e LIO l a",
          "source": "src/LIO-Concurrent-LMVar.html#takeLMVar",
          "type": "function"
        },
        "index": {
          "description": "Return contents of the LMVar Note that take consists of read and write since it observes whether or not the LMVar is full and thus the current label must be the same as that of the LMVar of course this is not the case when using privileges Hence if the label of the LMVar is below the current clearance we raise the current label to the join of the current label and the label of the MVar and read the contents of the MVar The underlying guard guardWrite will throw an exception if any of the IFC checks fail Finally like MVars if the LMVar is empty takeLMVar blocks",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "takeLMVar",
          "normalized": "LMVar a b-\u003eLIO a b",
          "package": "lio",
          "partial": "LMVar",
          "signature": "LMVar l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:takeLMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003etakeLMVar\u003c/a\u003e\u003c/code\u003e except \u003ccode\u003etakeLMVarP\u003c/code\u003e takes a privilege object\n which is used when the current label is raised.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "takeLMVarP",
          "package": "lio",
          "signature": "Priv p -\u003e LMVar l a -\u003e LIO l a",
          "source": "src/LIO-Concurrent-LMVar.html#takeLMVarP",
          "type": "function"
        },
        "index": {
          "description": "Same as takeLMVar except takeLMVarP takes privilege object which is used when the current label is raised",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "takeLMVarP",
          "normalized": "Priv a-\u003eLMVar b c-\u003eLIO b c",
          "package": "lio",
          "partial": "LMVar",
          "signature": "Priv p-\u003eLMVar l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:takeLMVarP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking version of \u003ccode\u003e\u003ca\u003eputLMVar\u003c/a\u003e\u003c/code\u003e. It returns \u003ccode\u003eTrue\u003c/code\u003e if the\n \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e was empty and the put succeeded, otherwise it returns \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "tryPutLMVar",
          "package": "lio",
          "signature": "LMVar l a -\u003e a -\u003e LIO l Bool",
          "source": "src/LIO-Concurrent-LMVar.html#tryPutLMVar",
          "type": "function"
        },
        "index": {
          "description": "Non-blocking version of putLMVar It returns True if the LMVar was empty and the put succeeded otherwise it returns False",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "tryPutLMVar",
          "normalized": "LMVar a b-\u003eb-\u003eLIO a Bool",
          "package": "lio",
          "partial": "Put LMVar",
          "signature": "LMVar l a-\u003ea-\u003eLIO l Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:tryPutLMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003etryPutLMVar\u003c/a\u003e\u003c/code\u003e, but uses privileges when raising current label.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "tryPutLMVarP",
          "package": "lio",
          "signature": "Priv p -\u003e LMVar l a -\u003e a -\u003e LIO l Bool",
          "source": "src/LIO-Concurrent-LMVar.html#tryPutLMVarP",
          "type": "function"
        },
        "index": {
          "description": "Same as tryPutLMVar but uses privileges when raising current label",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "tryPutLMVarP",
          "normalized": "Priv a-\u003eLMVar b c-\u003ec-\u003eLIO b Bool",
          "package": "lio",
          "partial": "Put LMVar",
          "signature": "Priv p-\u003eLMVar l a-\u003ea-\u003eLIO l Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:tryPutLMVarP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking version of \u003ccode\u003e\u003ca\u003etakeLMVar\u003c/a\u003e\u003c/code\u003e. It returns \u003ccode\u003eNothing\u003c/code\u003e if the\n \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e is empty, otherwise it returns \u003ccode\u003eJust\u003c/code\u003e value, emptying the\n \u003ccode\u003e\u003ca\u003eLMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "tryTakeLMVar",
          "package": "lio",
          "signature": "LMVar l a -\u003e LIO l (Maybe a)",
          "source": "src/LIO-Concurrent-LMVar.html#tryTakeLMVar",
          "type": "function"
        },
        "index": {
          "description": "Non-blocking version of takeLMVar It returns Nothing if the LMVar is empty otherwise it returns Just value emptying the LMVar",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "tryTakeLMVar",
          "normalized": "LMVar a b-\u003eLIO a(Maybe b)",
          "package": "lio",
          "partial": "Take LMVar",
          "signature": "LMVar l a-\u003eLIO l(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:tryTakeLMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003etryTakeLMVar\u003c/a\u003e\u003c/code\u003e, but uses priviliges when raising current\n label.\n\u003c/p\u003e",
          "module": "LIO.Concurrent.LMVar",
          "name": "tryTakeLMVarP",
          "package": "lio",
          "signature": "Priv p -\u003e LMVar l a -\u003e LIO l (Maybe a)",
          "source": "src/LIO-Concurrent-LMVar.html#tryTakeLMVarP",
          "type": "function"
        },
        "index": {
          "description": "Same as tryTakeLMVar but uses priviliges when raising current label",
          "hierarchy": "LIO Concurrent LMVar",
          "module": "LIO.Concurrent.LMVar",
          "name": "tryTakeLMVarP",
          "normalized": "Priv a-\u003eLMVar b c-\u003eLIO b(Maybe c)",
          "package": "lio",
          "partial": "Take LMVar",
          "signature": "Priv p-\u003eLMVar l a-\u003eLIO l(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent-LMVar.html#v:tryTakeLMVarP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides concurrency abstractions for \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e.  The most\nbasic function, \u003ccode\u003e\u003ca\u003eforkLIO\u003c/a\u003e\u003c/code\u003e, spawns a computation in a new light-weight\nthread (analogous to \u003ccode\u003eforkIO\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003elFork\u003c/a\u003e\u003c/code\u003e spawns a forked thread that returns a result other threads can\nwait for (using \u003ccode\u003e\u003ca\u003elWait\u003c/a\u003e\u003c/code\u003e).  The label of such a thread's result must be\nspecified at the time the thread is spawned with \u003ccode\u003e\u003ca\u003elFork\u003c/a\u003e\u003c/code\u003e.  Should the\n\u003ccode\u003e\u003ca\u003elFork\u003c/a\u003e\u003c/code\u003eed thread terminate with its current label be above the\nspecified result label, \u003ccode\u003e\u003ca\u003elWait\u003c/a\u003e\u003c/code\u003e will throw an exception of type\n\u003ccode\u003e\u003ca\u003eResultExceedsLabel\u003c/a\u003e\u003c/code\u003e in any thread waiting for the result.\n\u003c/p\u003e\u003cp\u003eLearing that a spawned thread has terminated by catching a\n\u003ccode\u003e\u003ca\u003eResultExceedsLabel\u003c/a\u003e\u003c/code\u003e may cause the label of the waiting thread to\nrise, possibly above the current clearance (in which case the\nexception cannot be caught).  As an alternative, \u003ccode\u003e\u003ca\u003etimedlWait\u003c/a\u003e\u003c/code\u003e\nunconditionally kills a spawned thread if it has not terminated at an\nobservable label within a certain time period.  \u003ccode\u003e\u003ca\u003etimedlWait\u003c/a\u003e\u003c/code\u003e is\nguaranteed both to terminate and not to throw exceptions that cannot\nbe caught at the current label.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LIO.Concurrent",
          "name": "Concurrent",
          "package": "lio",
          "source": "src/LIO-Concurrent.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides concurrency abstractions for LIO The most basic function forkLIO spawns computation in new light-weight thread analogous to forkIO lFork spawns forked thread that returns result other threads can wait for using lWait The label of such thread result must be specified at the time the thread is spawned with lFork Should the lFork ed thread terminate with its current label be above the specified result label lWait will throw an exception of type ResultExceedsLabel in any thread waiting for the result Learing that spawned thread has terminated by catching ResultExceedsLabel may cause the label of the waiting thread to rise possibly above the current clearance in which case the exception cannot be caught As an alternative timedlWait unconditionally kills spawned thread if it has not terminated at an observable label within certain time period timedlWait is guaranteed both to terminate and not to throw exceptions that cannot be caught at the current label",
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "Concurrent",
          "package": "lio",
          "partial": "Concurrent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eLabeledResult\u003c/code\u003e encapsulates a future result from a computation\n spawned by \u003ccode\u003elFork\u003c/code\u003e or \u003ccode\u003elForkP\u003c/code\u003e.  See \u003ca\u003eLIO.Concurrent\u003c/a\u003e for a\n description of the concurrency abstractions of LIO.\n\u003c/p\u003e",
          "module": "LIO.Concurrent",
          "name": "LabeledResult",
          "package": "lio",
          "source": "src/LIO-TCB.html#LabeledResult",
          "type": "data"
        },
        "index": {
          "description": "LabeledResult encapsulates future result from computation spawned by lFork or lForkP See LIO.Concurrent for description of the concurrency abstractions of LIO",
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "LabeledResult",
          "package": "lio",
          "partial": "Labeled Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#t:LabeledResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError raised when a computation spawned by \u003ccode\u003elFork\u003c/code\u003e terminates\n with its current label above the label of the result.\n\u003c/p\u003e",
          "module": "LIO.Concurrent",
          "name": "ResultExceedsLabel",
          "package": "lio",
          "source": "src/LIO-Error.html#ResultExceedsLabel",
          "type": "data"
        },
        "index": {
          "description": "Error raised when computation spawned by lFork terminates with its current label above the label of the result",
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "ResultExceedsLabel",
          "package": "lio",
          "partial": "Result Exceeds Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#t:ResultExceedsLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Concurrent\",\"LIO.Error\"]",
          "name": "ResultExceedsLabel",
          "package": "lio",
          "signature": "ResultExceedsLabel",
          "source": "src/LIO-Error.html#ResultExceedsLabel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:ResultExceedsLabel\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:ResultExceedsLabel\"]"
        },
        "index": {
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "ResultExceedsLabel",
          "package": "lio",
          "partial": "Result Exceeds Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:ResultExceedsLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computation in a new lightweight thread.\n\u003c/p\u003e",
          "module": "LIO.Concurrent",
          "name": "forkLIO",
          "package": "lio",
          "signature": "LIO l () -\u003e LIO l ()",
          "source": "src/LIO-Concurrent.html#forkLIO",
          "type": "function"
        },
        "index": {
          "description": "Execute an LIO computation in new lightweight thread",
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "forkLIO",
          "normalized": "LIO a()-\u003eLIO a()",
          "package": "lio",
          "partial": "LIO",
          "signature": "LIO l()-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:forkLIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabeled fork. \u003ccode\u003elFork\u003c/code\u003e allows one to invoke computations that\n would otherwise raise the current label, but without actually\n raising the label. The computation is executed in a separate thread\n and writes its result into a labeled result (whose label is\n supplied). To observe the result of the computation, or if the\n computation has terminated, one will have to call \u003ccode\u003e\u003ca\u003elWait\u003c/a\u003e\u003c/code\u003e and\n raise the current label. Of couse,  this can be postponed until the\n result is needed.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003elFork\u003c/code\u003e takes a label, which corresponds to the label of the\n result.  It is required that this label be between the current\n label and clearance as enforced by a call to \u003ccode\u003e\u003ca\u003eguardAlloc\u003c/a\u003e\u003c/code\u003e.\n Moreover, the supplied computation must not terminate with its\n label above the result label; doing so will result in an exception\n being thrown in the thread reading the result.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003elFork\u003c/code\u003e immediately returns a \u003ccode\u003e\u003ca\u003eLabeledResult\u003c/a\u003e\u003c/code\u003e, which is\n essentially a \"future\", or \"promise\". This prevents\n timing/termination attacks in which the duration of the forked\n computation affects the duration of the \u003ccode\u003elFork\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo guarantee that the computation has completed, it is important that\n some thread actually touch the future, i.e., perform an \u003ccode\u003e\u003ca\u003elWait\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.Concurrent",
          "name": "lFork",
          "package": "lio",
          "signature": "l-\u003e LIO l a-\u003e LIO l (LabeledResult l a)",
          "type": "function"
        },
        "index": {
          "description": "Labeled fork lFork allows one to invoke computations that would otherwise raise the current label but without actually raising the label The computation is executed in separate thread and writes its result into labeled result whose label is supplied To observe the result of the computation or if the computation has terminated one will have to call lWait and raise the current label Of couse this can be postponed until the result is needed lFork takes label which corresponds to the label of the result It is required that this label be between the current label and clearance as enforced by call to guardAlloc Moreover the supplied computation must not terminate with its label above the result label doing so will result in an exception being thrown in the thread reading the result Note that lFork immediately returns LabeledResult which is essentially future or promise This prevents timing termination attacks in which the duration of the forked computation affects the duration of the lFork To guarantee that the computation has completed it is important that some thread actually touch the future i.e perform an lWait",
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "lFork",
          "normalized": "a-\u003eLIO a b-\u003eLIO a(LabeledResult a b)",
          "package": "lio",
          "partial": "Fork",
          "signature": "l-\u003eLIO l a-\u003eLIO l(LabeledResult l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:lFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003elFork\u003c/a\u003e\u003c/code\u003e, but the supplied set of priviliges are accounted\n for when performing label comparisons.\n\u003c/p\u003e",
          "module": "LIO.Concurrent",
          "name": "lForkP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e LIO l a -\u003e LIO l (LabeledResult l a)",
          "source": "src/LIO-Concurrent.html#lForkP",
          "type": "function"
        },
        "index": {
          "description": "Same as lFork but the supplied set of priviliges are accounted for when performing label comparisons",
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "lForkP",
          "normalized": "Priv a-\u003eb-\u003eLIO b c-\u003eLIO b(LabeledResult b c)",
          "package": "lio",
          "partial": "Fork",
          "signature": "Priv p-\u003el-\u003eLIO l a-\u003eLIO l(LabeledResult l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:lForkP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eLabeledResult\u003c/a\u003e\u003c/code\u003e (a future), \u003ccode\u003elWait\u003c/code\u003e returns the unwrapped\n result (blocks, if necessary). For \u003ccode\u003elWait\u003c/code\u003e to succeed, the label of\n the result must be above the current label and below the current\n clearance. Moreover, before block-reading, \u003ccode\u003elWait\u003c/code\u003e raises the current\n label to the join of the current label and label of result.  An\n exception is thrown by the underlying \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e if this is not the\n case.  Additionally, if the thread terminates with an exception (for\n example if it violates clearance), the exception is rethrown by\n \u003ccode\u003elWait\u003c/code\u003e. Similarly, if the thread reads values above the result label,\n an exception is thrown in place of the result.\n\u003c/p\u003e",
          "module": "LIO.Concurrent",
          "name": "lWait",
          "package": "lio",
          "signature": "LabeledResult l a -\u003e LIO l a",
          "source": "src/LIO-Concurrent.html#lWait",
          "type": "function"
        },
        "index": {
          "description": "Given LabeledResult future lWait returns the unwrapped result blocks if necessary For lWait to succeed the label of the result must be above the current label and below the current clearance Moreover before block-reading lWait raises the current label to the join of the current label and label of result An exception is thrown by the underlying taint if this is not the case Additionally if the thread terminates with an exception for example if it violates clearance the exception is rethrown by lWait Similarly if the thread reads values above the result label an exception is thrown in place of the result",
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "lWait",
          "normalized": "LabeledResult a b-\u003eLIO a b",
          "package": "lio",
          "partial": "Wait",
          "signature": "LabeledResult l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:lWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003elWait\u003c/a\u003e\u003c/code\u003e, but uses priviliges in label checks and raises.\n\u003c/p\u003e",
          "module": "LIO.Concurrent",
          "name": "lWaitP",
          "package": "lio",
          "signature": "Priv p -\u003e LabeledResult l a -\u003e LIO l a",
          "source": "src/LIO-Concurrent.html#lWaitP",
          "type": "function"
        },
        "index": {
          "description": "Same as lWait but uses priviliges in label checks and raises",
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "lWaitP",
          "normalized": "Priv a-\u003eLabeledResult b c-\u003eLIO b c",
          "package": "lio",
          "partial": "Wait",
          "signature": "Priv p-\u003eLabeledResult l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:lWaitP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Concurrent\",\"LIO.Error\"]",
          "name": "relActualLabel",
          "package": "lio",
          "signature": "Maybe l",
          "source": "src/LIO-Error.html#ResultExceedsLabel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:relActualLabel\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:relActualLabel\"]"
        },
        "index": {
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "relActualLabel",
          "package": "lio",
          "partial": "Actual Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:relActualLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Concurrent\",\"LIO.Error\"]",
          "name": "relContext",
          "package": "lio",
          "signature": "[String]",
          "source": "src/LIO-Error.html#ResultExceedsLabel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:relContext\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:relContext\"]"
        },
        "index": {
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "relContext",
          "normalized": "[String]",
          "package": "lio",
          "partial": "Context",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:relContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Concurrent\",\"LIO.Error\"]",
          "name": "relDeclaredLabel",
          "package": "lio",
          "signature": "l",
          "source": "src/LIO-Error.html#ResultExceedsLabel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:relDeclaredLabel\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:relDeclaredLabel\"]"
        },
        "index": {
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "relDeclaredLabel",
          "package": "lio",
          "partial": "Declared Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:relDeclaredLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Concurrent\",\"LIO.Error\"]",
          "name": "relLocation",
          "package": "lio",
          "signature": "String",
          "source": "src/LIO-Error.html#ResultExceedsLabel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:relLocation\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:relLocation\"]"
        },
        "index": {
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "relLocation",
          "package": "lio",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:relLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elWait\u003c/a\u003e\u003c/code\u003e, with two differences.  First, a timeout is\n specified and the thread is unconditionally killed after this\n timeout (if it has not yet returned a value).  Second, if the\n thread's result exceeds what the calling thread can observe,\n \u003ccode\u003etimedlWait\u003c/code\u003e consumes the whole timeout and throws a\n \u003ccode\u003e\u003ca\u003eResultExceedsLabel\u003c/a\u003e\u003c/code\u003e exception you can catch (i.e., it never raises\n the label above the clearance).\n\u003c/p\u003e\u003cp\u003eBecause this function can alter the result by killing a thread, it\n requires the label of the \u003ccode\u003e\u003ca\u003eLabeledResult\u003c/a\u003e\u003c/code\u003e to be both readable and\n writable at the current label.\n\u003c/p\u003e",
          "module": "LIO.Concurrent",
          "name": "timedlWait",
          "package": "lio",
          "signature": "LabeledResult l a -\u003e Int -\u003e LIO l a",
          "source": "src/LIO-Concurrent.html#timedlWait",
          "type": "function"
        },
        "index": {
          "description": "Like lWait with two differences First timeout is specified and the thread is unconditionally killed after this timeout if it has not yet returned value Second if the thread result exceeds what the calling thread can observe timedlWait consumes the whole timeout and throws ResultExceedsLabel exception you can catch i.e it never raises the label above the clearance Because this function can alter the result by killing thread it requires the label of the LabeledResult to be both readable and writable at the current label",
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "timedlWait",
          "normalized": "LabeledResult a b-\u003eInt-\u003eLIO a b",
          "package": "lio",
          "partial": "Wait",
          "signature": "LabeledResult l a-\u003eInt-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:timedlWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003etimedlWait\u003c/a\u003e\u003c/code\u003e that takes privileges.  The privileges\n are used both to downgrade the result (if necessary), and to try\n catching any \u003ccode\u003e\u003ca\u003eResultExceedsLabel\u003c/a\u003e\u003c/code\u003e before the timeout period (if\n possible).\n\u003c/p\u003e",
          "module": "LIO.Concurrent",
          "name": "timedlWaitP",
          "package": "lio",
          "signature": "Priv p -\u003e LabeledResult l a -\u003e Int -\u003e LIO l a",
          "source": "src/LIO-Concurrent.html#timedlWaitP",
          "type": "function"
        },
        "index": {
          "description": "version of timedlWait that takes privileges The privileges are used both to downgrade the result if necessary and to try catching any ResultExceedsLabel before the timeout period if possible",
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "timedlWaitP",
          "normalized": "Priv a-\u003eLabeledResult b c-\u003eInt-\u003eLIO b c",
          "package": "lio",
          "partial": "Wait",
          "signature": "Priv p-\u003eLabeledResult l a-\u003eInt-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:timedlWaitP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003elWait\u003c/a\u003e\u003c/code\u003e, but does not block waiting for result.\n\u003c/p\u003e",
          "module": "LIO.Concurrent",
          "name": "trylWait",
          "package": "lio",
          "signature": "LabeledResult l a -\u003e LIO l (Maybe a)",
          "source": "src/LIO-Concurrent.html#trylWait",
          "type": "function"
        },
        "index": {
          "description": "Same as lWait but does not block waiting for result",
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "trylWait",
          "normalized": "LabeledResult a b-\u003eLIO a(Maybe b)",
          "package": "lio",
          "partial": "Wait",
          "signature": "LabeledResult l a-\u003eLIO l(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:trylWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003etrylWait\u003c/a\u003e\u003c/code\u003e, but uses priviliges in label checks and raises.\n\u003c/p\u003e",
          "module": "LIO.Concurrent",
          "name": "trylWaitP",
          "package": "lio",
          "signature": "Priv p -\u003e LabeledResult l a -\u003e LIO l (Maybe a)",
          "source": "src/LIO-Concurrent.html#trylWaitP",
          "type": "function"
        },
        "index": {
          "description": "Same as trylWait but uses priviliges in label checks and raises",
          "hierarchy": "LIO Concurrent",
          "module": "LIO.Concurrent",
          "name": "trylWaitP",
          "normalized": "Priv a-\u003eLabeledResult b c-\u003eLIO b(Maybe c)",
          "package": "lio",
          "partial": "Wait",
          "signature": "Priv p-\u003eLabeledResult l a-\u003eLIO l(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Concurrent.html#v:trylWaitP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the core of the Labeled IO (LIO) information\nflow control (IFC) library.  It provides a monad, \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e, that is\nintended to be used as a replacement for the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad in untrusted\ncode.  The idea is for untrusted code to provide a computation in the\n\u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad, which trusted code can then safely execute through\n\u003ccode\u003e\u003ca\u003eevalLIO\u003c/a\u003e\u003c/code\u003e and similar functions (e.g., \u003ccode\u003eevalDC\u003c/code\u003e in\n\u003ca\u003eLIO.DCLabel\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad keeps track of a \u003cem\u003ecurrent label\u003c/em\u003e\n(accessible via the \u003ccode\u003e\u003ca\u003egetLabel\u003c/a\u003e\u003c/code\u003e function) during each computation. The\ncurrent label effectively tracks the sensitivity of all the data that\nthe computation has observed.  For example, if the computation has\nread a \"secret\" mutable reference (see \u003ca\u003eLIO.LIORef\u003c/a\u003e) and then the\nresult of a \"top-secret\" thread (see \u003ca\u003eLIO.Concurrent\u003c/a\u003e) then the\ncurrent label will be at least \"top-secret\".  Labels are described\nin more detail in the documentation for \u003ca\u003eLIO.Label\u003c/a\u003e, as well as the\ndocumentation for particular label formats (such as \u003ca\u003eLIO.DCLabel\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe role of the current label is two-fold:  First, the current label\nprotects all pure values currently in scope.  For example, the current\nlabel is the label on constants (such as \u003ccode\u003e3\u003c/code\u003e and \u003ccode\u003e\"tis a string\"\u003c/code\u003e)\nas well as function arguments.  More interestingly, consider reading a\nsecret reference:\n\u003c/p\u003e\u003cpre\u003e val \u003c- readLIORef secret\n\u003c/pre\u003e\u003cp\u003eThough the label of \u003ccode\u003esecret\u003c/code\u003e may be \"secret\", \u003ccode\u003eval\u003c/code\u003e is not\nexplicitly labeled.  Hence, to protect the contents of the \u003ccode\u003eLIORef\u003c/code\u003e\nthat has been read into \u003ccode\u003eval\u003c/code\u003e, the current label must be at least\n\"secret\" before returning from \u003ccode\u003ereadLIORef\u003c/code\u003e.  More generally, if the\ncurrent label is \u003ccode\u003el_cur\u003c/code\u003e, then it is only permissible to read data\nlabeled \u003ccode\u003el_r\u003c/code\u003e if \u003ccode\u003el_r `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l_cur\u003c/code\u003e.  Note that, instead of\nthrowing an exception, reading data often just increases the current\nlabel to ensure that \u003ccode\u003el_r `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l_cur\u003c/code\u003e.  This is acomplished\nusing a function such as \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe second purpose of the current label is to prevent inforation leaks\ninto public channels. Specifically, it is only permissible to modify\nor write to data labeled \u003ccode\u003el_w\u003c/code\u003e when \u003ccode\u003el_cur`\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l_w\u003c/code\u003e. Thus,\nthe following attempt to leak the \u003ccode\u003eval\u003c/code\u003e after reading it from a secret\n\u003ccode\u003eLIORef\u003c/code\u003e would fail:\n\u003c/p\u003e\u003cpre\u003e writeLIORef public val\n\u003c/pre\u003e\u003cp\u003eIn addition to the current label, the LIO monad keeps a second label,\nthe \u003cem\u003ecurrent clearance\u003c/em\u003e (accessible via the \u003ccode\u003e\u003ca\u003egetClearance\u003c/a\u003e\u003c/code\u003e function).\nThe clearance can be used to enforce a \"need-to-know\" policy, since\nit represents the highest value the current label can be raised to.\nIn other words, if the current clearance is \u003ccode\u003el_clear\u003c/code\u003e then the\ncomputation cannot create, read or write to objects labeled \u003ccode\u003el\u003c/code\u003e such\nthat \u003ccode\u003e(l `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l_clear) == False\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LIO.Core",
          "name": "Core",
          "package": "lio",
          "source": "src/LIO-Core.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the core of the Labeled IO LIO information flow control IFC library It provides monad LIO that is intended to be used as replacement for the IO monad in untrusted code The idea is for untrusted code to provide computation in the LIO monad which trusted code can then safely execute through evalLIO and similar functions e.g evalDC in LIO.DCLabel Unlike IO the LIO monad keeps track of current label accessible via the getLabel function during each computation The current label effectively tracks the sensitivity of all the data that the computation has observed For example if the computation has read secret mutable reference see LIO.LIORef and then the result of top-secret thread see LIO.Concurrent then the current label will be at least top-secret Labels are described in more detail in the documentation for LIO.Label as well as the documentation for particular label formats such as LIO.DCLabel The role of the current label is two-fold First the current label protects all pure values currently in scope For example the current label is the label on constants such as and tis string as well as function arguments More interestingly consider reading secret reference val readLIORef secret Though the label of secret may be secret val is not explicitly labeled Hence to protect the contents of the LIORef that has been read into val the current label must be at least secret before returning from readLIORef More generally if the current label is cur then it is only permissible to read data labeled if canFlowTo cur Note that instead of throwing an exception reading data often just increases the current label to ensure that canFlowTo cur This is acomplished using function such as taint The second purpose of the current label is to prevent inforation leaks into public channels Specifically it is only permissible to modify or write to data labeled when cur canFlowTo Thus the following attempt to leak the val after reading it from secret LIORef would fail writeLIORef public val In addition to the current label the LIO monad keeps second label the current clearance accessible via the getClearance function The clearance can be used to enforce need-to-know policy since it represents the highest value the current label can be raised to In other words if the current clearance is clear then the computation cannot create read or write to objects labeled such that canFlowTo clear False",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "Core",
          "package": "lio",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParent of all label-related exceptions.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "AnyLabelError",
          "package": "lio",
          "source": "src/LIO-Error.html#AnyLabelError",
          "type": "data"
        },
        "index": {
          "description": "Parent of all label-related exceptions",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "AnyLabelError",
          "package": "lio",
          "partial": "Any Label Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#t:AnyLabelError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError indicating insufficient privileges (independent of the\n current label).  This exception is thrown by \u003ccode\u003edelegate\u003c/code\u003e, and\n should also be thrown by gates that receive insufficient privilege\n descriptions (see \u003ca\u003eLIO.Delegate\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "InsufficientPrivs",
          "package": "lio",
          "source": "src/LIO-Error.html#InsufficientPrivs",
          "type": "data"
        },
        "index": {
          "description": "Error indicating insufficient privileges independent of the current label This exception is thrown by delegate and should also be thrown by gates that receive insufficient privilege descriptions see LIO.Delegate",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "InsufficientPrivs",
          "package": "lio",
          "partial": "Insufficient Privs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#t:InsufficientPrivs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eLIO\u003c/code\u003e monad is a wrapper around \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e that keeps track of a\n \u003cem\u003ecurrent label\u003c/em\u003e and \u003cem\u003ecurrent clearance\u003c/em\u003e.  Safe code cannot execute\n arbitrary \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions from the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.  However, trusted\n runtime functions can use \u003ccode\u003e\u003ca\u003eioTCB\u003c/a\u003e\u003c/code\u003e to perform \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions (which\n they should only do after appropriately checking labels).\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "LIO",
          "package": "lio",
          "source": "src/LIO-TCB.html#LIO",
          "type": "data"
        },
        "index": {
          "description": "The LIO monad is wrapper around IO that keeps track of current label and current clearance Safe code cannot execute arbitrary IO actions from the LIO monad However trusted runtime functions can use ioTCB to perform IO actions which they should only do after appropriately checking labels",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "LIO",
          "package": "lio",
          "partial": "LIO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#t:LIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal state of an \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "LIOState",
          "package": "lio",
          "source": "src/LIO-TCB.html#LIOState",
          "type": "data"
        },
        "index": {
          "description": "Internal state of an LIO computation",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "LIOState",
          "package": "lio",
          "partial": "LIOState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#t:LIOState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain error type thrown by label failures in the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "LabelError",
          "package": "lio",
          "source": "src/LIO-Error.html#LabelError",
          "type": "data"
        },
        "index": {
          "description": "Main error type thrown by label failures in the LIO monad",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "LabelError",
          "package": "lio",
          "partial": "Label Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#t:LabelError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynonym for monad in which \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e is the base monad.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "MonadLIO",
          "package": "lio",
          "source": "src/LIO-Core.html#MonadLIO",
          "type": "class"
        },
        "index": {
          "description": "Synonym for monad in which LIO is the base monad",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "MonadLIO",
          "package": "lio",
          "partial": "Monad LIO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#t:MonadLIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "AnyLabelError",
          "package": "lio",
          "signature": "AnyLabelError e",
          "source": "src/LIO-Error.html#AnyLabelError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:AnyLabelError\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:AnyLabelError\"]"
        },
        "index": {
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "AnyLabelError",
          "package": "lio",
          "partial": "Any Label Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:AnyLabelError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "InsufficientPrivs",
          "package": "lio",
          "signature": "InsufficientPrivs",
          "source": "src/LIO-Error.html#InsufficientPrivs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:InsufficientPrivs\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:InsufficientPrivs\"]"
        },
        "index": {
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "InsufficientPrivs",
          "package": "lio",
          "partial": "Insufficient Privs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:InsufficientPrivs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Core\",\"LIO.Run\",\"LIO.TCB\"]",
          "name": "LIOState",
          "package": "lio",
          "signature": "LIOState",
          "source": "src/LIO-TCB.html#LIOState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:LIOState\",\"http://hackage.haskell.org/package/lio/docs/LIO-Run.html#v:LIOState\",\"http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:LIOState\"]"
        },
        "index": {
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "LIOState",
          "package": "lio",
          "partial": "LIOState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:LIOState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "LabelError",
          "package": "lio",
          "signature": "LabelError",
          "source": "src/LIO-Error.html#LabelError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:LabelError\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:LabelError\"]"
        },
        "index": {
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "LabelError",
          "package": "lio",
          "partial": "Label Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:LabelError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computation and some initial state, return an IO\n action which, when executed, will perform the IFC-safe LIO\n computation.\n\u003c/p\u003e\u003cp\u003eBecause untrusted code cannot execute \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations, this function\n should only be useful within trusted code.  No harm is done from\n exposing the \u003ccode\u003eevalLIO\u003c/code\u003e symbol to untrusted code.  (In general,\n untrusted code is free to produce \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations, but it cannot\n execute them.)\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003erunLIO\u003c/a\u003e\u003c/code\u003e, this function throws an exception if the\n underlying \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e action terminates with an exception.\n\u003c/p\u003e",
          "module": "[\"LIO.Core\",\"LIO.Run\"]",
          "name": "evalLIO",
          "package": "lio",
          "signature": "LIO l a -\u003e LIOState l -\u003e IO a",
          "source": "src/LIO-Run.html#evalLIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:evalLIO\",\"http://hackage.haskell.org/package/lio/docs/LIO-Run.html#v:evalLIO\"]"
        },
        "index": {
          "description": "Given an LIO computation and some initial state return an IO action which when executed will perform the IFC-safe LIO computation Because untrusted code cannot execute IO computations this function should only be useful within trusted code No harm is done from exposing the evalLIO symbol to untrusted code In general untrusted code is free to produce IO computations but it cannot execute them Unlike runLIO this function throws an exception if the underlying LIO action terminates with an exception",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "evalLIO",
          "normalized": "LIO a b-\u003eLIOState a-\u003eIO b",
          "package": "lio",
          "partial": "LIO",
          "signature": "LIO l a-\u003eLIOState l-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:evalLIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the thread's current clearance.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "getClearance",
          "package": "lio",
          "signature": "LIO l l",
          "source": "src/LIO-Core.html#getClearance",
          "type": "function"
        },
        "index": {
          "description": "Returns the thread current clearance",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "getClearance",
          "package": "lio",
          "partial": "Clearance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:getClearance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value of the thread's current label.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "getLabel",
          "package": "lio",
          "signature": "LIO l l",
          "source": "src/LIO-Core.html#getLabel",
          "type": "function"
        },
        "index": {
          "description": "Returns the value of the thread current label",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "getLabel",
          "package": "lio",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:getLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsures the label argument is between the current IO label and\n current IO clearance.  Use this function in code that allocates\n objects--untrusted code shouldn't be able to create an object\n labeled \u003ccode\u003el\u003c/code\u003e unless \u003ccode\u003eguardAlloc l\u003c/code\u003e does not throw an exception.\n Similarly use this guard in any code that writes to an\n object labeled \u003ccode\u003el\u003c/code\u003e for which the write has no observable\n side-effects.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "guardAlloc",
          "package": "lio",
          "signature": "l -\u003e LIO l ()",
          "source": "src/LIO-Core.html#guardAlloc",
          "type": "function"
        },
        "index": {
          "description": "Ensures the label argument is between the current IO label and current IO clearance Use this function in code that allocates objects--untrusted code shouldn be able to create an object labeled unless guardAlloc does not throw an exception Similarly use this guard in any code that writes to an object labeled for which the write has no observable side-effects",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "guardAlloc",
          "normalized": "a-\u003eLIO a()",
          "package": "lio",
          "partial": "Alloc",
          "signature": "l-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:guardAlloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eguardAlloc\u003c/a\u003e\u003c/code\u003e, but takes a privilege argument to be more\n permissive.  Note: privileges are \u003cem\u003eonly\u003c/em\u003e used when checking that\n the current label can flow to the target label; \u003ccode\u003eguardAllocP\u003c/code\u003e still\n always throws an exception when the target label is higher than the\n current clearance.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "guardAllocP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e LIO l ()",
          "source": "src/LIO-Core.html#guardAllocP",
          "type": "function"
        },
        "index": {
          "description": "Like guardAlloc but takes privilege argument to be more permissive Note privileges are only used when checking that the current label can flow to the target label guardAllocP still always throws an exception when the target label is higher than the current clearance",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "guardAllocP",
          "normalized": "Priv a-\u003eb-\u003eLIO b()",
          "package": "lio",
          "partial": "Alloc",
          "signature": "Priv p-\u003el-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:guardAllocP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003eguardWrite l\u003c/code\u003e in any (trusted) code before modifying an\n object labeled \u003ccode\u003el\u003c/code\u003e, for which the modification can be observed,\n i.e., the write implies a read.\n\u003c/p\u003e\u003cp\u003eThe implementation of \u003ccode\u003eguardWrite\u003c/code\u003e is straight forward:\n\u003c/p\u003e\u003cpre\u003e guardWrite l = guardAlloc l \u003e\u003e taint l\n\u003c/pre\u003e\u003cp\u003eThis guarantees that \u003ccode\u003el\u003c/code\u003e `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` the current label (and\n clearance), and that the current label `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003el\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "guardWrite",
          "package": "lio",
          "signature": "l -\u003e LIO l ()",
          "source": "src/LIO-Core.html#guardWrite",
          "type": "function"
        },
        "index": {
          "description": "Use guardWrite in any trusted code before modifying an object labeled for which the modification can be observed i.e the write implies read The implementation of guardWrite is straight forward guardWrite guardAlloc taint This guarantees that canFlowTo the current label and clearance and that the current label canFlowTo",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "guardWrite",
          "normalized": "a-\u003eLIO a()",
          "package": "lio",
          "partial": "Write",
          "signature": "l-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:guardWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eguardWrite\u003c/a\u003e\u003c/code\u003e, but takes a privilege argument to be more\n permissive.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "guardWriteP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e LIO l ()",
          "source": "src/LIO-Core.html#guardWriteP",
          "type": "function"
        },
        "index": {
          "description": "Like guardWrite but takes privilege argument to be more permissive",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "guardWriteP",
          "normalized": "Priv a-\u003eb-\u003eLIO b()",
          "package": "lio",
          "partial": "Write",
          "signature": "Priv p-\u003el-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:guardWriteP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "inspContext",
          "package": "lio",
          "signature": "[String]",
          "source": "src/LIO-Error.html#InsufficientPrivs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:inspContext\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:inspContext\"]"
        },
        "index": {
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "inspContext",
          "normalized": "[String]",
          "package": "lio",
          "partial": "Context",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:inspContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "inspFailure",
          "package": "lio",
          "signature": "String",
          "source": "src/LIO-Error.html#InsufficientPrivs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:inspFailure\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:inspFailure\"]"
        },
        "index": {
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "inspFailure",
          "package": "lio",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:inspFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "inspNeeded",
          "package": "lio",
          "signature": "p",
          "source": "src/LIO-Error.html#InsufficientPrivs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:inspNeeded\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:inspNeeded\"]"
        },
        "index": {
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "inspNeeded",
          "package": "lio",
          "partial": "Needed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:inspNeeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "inspSupplied",
          "package": "lio",
          "signature": "p",
          "source": "src/LIO-Error.html#InsufficientPrivs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:inspSupplied\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:inspSupplied\"]"
        },
        "index": {
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "inspSupplied",
          "package": "lio",
          "partial": "Supplied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:inspSupplied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotation of where the failure happened.\n\u003c/p\u003e",
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "lerrContext",
          "package": "lio",
          "signature": "[String]",
          "source": "src/LIO-Error.html#LabelError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lerrContext\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:lerrContext\"]"
        },
        "index": {
          "description": "Annotation of where the failure happened",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "lerrContext",
          "normalized": "[String]",
          "package": "lio",
          "partial": "Context",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lerrContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent clearance at time of error.\n\u003c/p\u003e",
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "lerrCurClearance",
          "package": "lio",
          "signature": "l",
          "source": "src/LIO-Error.html#LabelError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lerrCurClearance\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:lerrCurClearance\"]"
        },
        "index": {
          "description": "Current clearance at time of error",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "lerrCurClearance",
          "package": "lio",
          "partial": "Cur Clearance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lerrCurClearance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent label at time of error.\n\u003c/p\u003e",
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "lerrCurLabel",
          "package": "lio",
          "signature": "l",
          "source": "src/LIO-Error.html#LabelError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lerrCurLabel\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:lerrCurLabel\"]"
        },
        "index": {
          "description": "Current label at time of error",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "lerrCurLabel",
          "package": "lio",
          "partial": "Cur Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lerrCurLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActual function that failed.\n\u003c/p\u003e",
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "lerrFailure",
          "package": "lio",
          "signature": "String",
          "source": "src/LIO-Error.html#LabelError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lerrFailure\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:lerrFailure\"]"
        },
        "index": {
          "description": "Actual function that failed",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "lerrFailure",
          "package": "lio",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lerrFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny labels involved in error.\n\u003c/p\u003e",
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "lerrLabels",
          "package": "lio",
          "signature": "[l]",
          "source": "src/LIO-Error.html#LabelError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lerrLabels\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:lerrLabels\"]"
        },
        "index": {
          "description": "Any labels involved in error",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "lerrLabels",
          "normalized": "[a]",
          "package": "lio",
          "partial": "Labels",
          "signature": "[l]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lerrLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny privileges involved in error.\n\u003c/p\u003e",
          "module": "[\"LIO.Core\",\"LIO.Error\"]",
          "name": "lerrPrivs",
          "package": "lio",
          "signature": "[GenericPrivDesc l]",
          "source": "src/LIO-Error.html#LabelError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lerrPrivs\",\"http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:lerrPrivs\"]"
        },
        "index": {
          "description": "Any privileges involved in error",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "lerrPrivs",
          "normalized": "[GenericPrivDesc a]",
          "package": "lio",
          "partial": "Privs",
          "signature": "[GenericPrivDesc l]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lerrPrivs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "liftLIO",
          "package": "lio",
          "signature": "LIO l a -\u003e m a",
          "source": "src/LIO-Core.html#liftLIO",
          "type": "method"
        },
        "index": {
          "description": "Lift an LIO computation",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "liftLIO",
          "normalized": "LIO a b-\u003ec b",
          "package": "lio",
          "partial": "LIO",
          "signature": "LIO l a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:liftLIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent clearance.\n\u003c/p\u003e",
          "module": "[\"LIO.Core\",\"LIO.Run\",\"LIO.TCB\"]",
          "name": "lioClearance",
          "package": "lio",
          "signature": "l",
          "source": "src/LIO-TCB.html#LIOState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lioClearance\",\"http://hackage.haskell.org/package/lio/docs/LIO-Run.html#v:lioClearance\",\"http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:lioClearance\"]"
        },
        "index": {
          "description": "Current clearance",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "lioClearance",
          "package": "lio",
          "partial": "Clearance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lioClearance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent label.\n\u003c/p\u003e",
          "module": "[\"LIO.Core\",\"LIO.Run\",\"LIO.TCB\"]",
          "name": "lioLabel",
          "package": "lio",
          "signature": "l",
          "source": "src/LIO-TCB.html#LIOState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lioLabel\",\"http://hackage.haskell.org/package/lio/docs/LIO-Run.html#v:lioLabel\",\"http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:lioLabel\"]"
        },
        "index": {
          "description": "Current label",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "lioLabel",
          "package": "lio",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:lioLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e action, returning its result and the final label\n state as a pair.  Note that it returns a pair whether or not the\n \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e action throws an exception.  Forcing the result value will\n re-throw the exception, but the label state will always be valid.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eevalLIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"LIO.Core\",\"LIO.Run\"]",
          "name": "runLIO",
          "package": "lio",
          "signature": "LIO l a -\u003e LIOState l -\u003e IO (a, LIOState l)",
          "source": "src/LIO-Run.html#runLIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:runLIO\",\"http://hackage.haskell.org/package/lio/docs/LIO-Run.html#v:runLIO\"]"
        },
        "index": {
          "description": "Execute an LIO action returning its result and the final label state as pair Note that it returns pair whether or not the LIO action throws an exception Forcing the result value will re-throw the exception but the label state will always be valid See also evalLIO",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "runLIO",
          "normalized": "LIO a b-\u003eLIOState a-\u003eIO(b,LIOState a)",
          "package": "lio",
          "partial": "LIO",
          "signature": "LIO l a-\u003eLIOState l-\u003eIO(a,LIOState l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:runLIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e action and re-sets the current clearance to its\n previous value once the action returns.  In particular, if the\n action lowers the current clearance, the clearance will be restored\n upon return.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003escopeClearance\u003c/code\u003e always restores the clearance.  If\n that causes the clearance to drop below the current label, a\n \u003ccode\u003eClearanceViolation\u003c/code\u003e exception is thrown.  That exception can only\n be caught outside a second \u003ccode\u003escopeClearance\u003c/code\u003e that restores the\n clearance to higher than the current label.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "scopeClearance",
          "package": "lio",
          "signature": "LIO l a -\u003e LIO l a",
          "source": "src/LIO-Core.html#scopeClearance",
          "type": "function"
        },
        "index": {
          "description": "Runs an LIO action and re-sets the current clearance to its previous value once the action returns In particular if the action lowers the current clearance the clearance will be restored upon return Note that scopeClearance always restores the clearance If that causes the clearance to drop below the current label ClearanceViolation exception is thrown That exception can only be caught outside second scopeClearance that restores the clearance to higher than the current label",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "scopeClearance",
          "normalized": "LIO a b-\u003eLIO a b",
          "package": "lio",
          "partial": "Clearance",
          "signature": "LIO l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:scopeClearance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowers the current clearance.  The new clerance must be between\n the current label and previous current clerance.  One cannot raise\n the current label or create object with labels higher than the\n current clearance.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "setClearance",
          "package": "lio",
          "signature": "l -\u003e LIO l ()",
          "source": "src/LIO-Core.html#setClearance",
          "type": "function"
        },
        "index": {
          "description": "Lowers the current clearance The new clerance must be between the current label and previous current clerance One cannot raise the current label or create object with labels higher than the current clearance",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "setClearance",
          "normalized": "a-\u003eLIO a()",
          "package": "lio",
          "partial": "Clearance",
          "signature": "l-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:setClearance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaises the current clearance (undoing the effects of\n \u003ccode\u003e\u003ca\u003esetClearance\u003c/a\u003e\u003c/code\u003e) by exercising privileges.  If the current label is\n \u003ccode\u003el\u003c/code\u003e and current clearance is \u003ccode\u003ec\u003c/code\u003e, then \u003ccode\u003esetClearanceP p cnew\u003c/code\u003e\n succeeds only if the new clearance is can flow to the current\n clearance (modulo privileges), i.e., \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecanFlowToP\u003c/a\u003e\u003c/code\u003e p cnew c ==\n True\u003c/code\u003e.  Additionally, the current label must flow to the new\n clearance, i.e., \u003ccode\u003el `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` cnew\u003c/code\u003e == True.\n\u003c/p\u003e\u003cp\u003eSince LIO guards that are used when reading/writing data (e.g.,\n \u003ccode\u003e\u003ca\u003eguardAllocP\u003c/a\u003e\u003c/code\u003e) do not use privileges when comparing labels with the\n current clearance, code must always raise the current clearance, to\n read/write data above the current clearance.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "setClearanceP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e LIO l ()",
          "source": "src/LIO-Core.html#setClearanceP",
          "type": "function"
        },
        "index": {
          "description": "Raises the current clearance undoing the effects of setClearance by exercising privileges If the current label is and current clearance is then setClearanceP cnew succeeds only if the new clearance is can flow to the current clearance modulo privileges i.e canFlowToP cnew True Additionally the current label must flow to the new clearance i.e canFlowTo cnew True Since LIO guards that are used when reading writing data e.g guardAllocP do not use privileges when comparing labels with the current clearance code must always raise the current clearance to read write data above the current clearance",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "setClearanceP",
          "normalized": "Priv a-\u003eb-\u003eLIO b()",
          "package": "lio",
          "partial": "Clearance",
          "signature": "Priv p-\u003el-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:setClearanceP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaises the current label to the provided label, which must be\n between the current label and clearance. See \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "setLabel",
          "package": "lio",
          "signature": "l -\u003e LIO l ()",
          "source": "src/LIO-Core.html#setLabel",
          "type": "function"
        },
        "index": {
          "description": "Raises the current label to the provided label which must be between the current label and clearance See taint",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "setLabel",
          "normalized": "a-\u003eLIO a()",
          "package": "lio",
          "partial": "Label",
          "signature": "l-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:setLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the current label is \u003ccode\u003eoldLabel\u003c/code\u003e and the current clearance is\n \u003ccode\u003eclearance\u003c/code\u003e, this function allows code to raise the current label\n to any value \u003ccode\u003enewLabel\u003c/code\u003e such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecanFlowToP\u003c/a\u003e\u003c/code\u003e priv oldLabel\n newLabel && \u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e newLabel clearance\u003c/code\u003e.  (Note the privilege\n argument affects the label check, not the clearance check; call\n \u003ccode\u003e\u003ca\u003esetClearanceP\u003c/a\u003e\u003c/code\u003e first to raise the clearance.)\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "setLabelP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e LIO l ()",
          "source": "src/LIO-Core.html#setLabelP",
          "type": "function"
        },
        "index": {
          "description": "If the current label is oldLabel and the current clearance is clearance this function allows code to raise the current label to any value newLabel such that canFlowToP priv oldLabel newLabel canFlowTo newLabel clearance Note the privilege argument affects the label check not the clearance check call setClearanceP first to raise the clearance",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "setLabelP",
          "normalized": "Priv a-\u003eb-\u003eLIO b()",
          "package": "lio",
          "partial": "Label",
          "signature": "Priv p-\u003el-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:setLabelP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003etaint l\u003c/code\u003e in trusted code before observing an object labeled\n \u003ccode\u003el\u003c/code\u003e.  This will raise the current label to a value \u003ccode\u003el'\u003c/code\u003e such that\n \u003ccode\u003el `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l'\u003c/code\u003e, or throw a \u003ccode\u003e\u003ca\u003eLabelError\u003c/a\u003e\u003c/code\u003e exception if \u003ccode\u003el'\u003c/code\u003e\n would have to be higher than the current clearance.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "taint",
          "package": "lio",
          "signature": "l -\u003e LIO l ()",
          "source": "src/LIO-Core.html#taint",
          "type": "function"
        },
        "index": {
          "description": "Use taint in trusted code before observing an object labeled This will raise the current label to value such that canFlowTo or throw LabelError exception if would have to be higher than the current clearance",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "taint",
          "normalized": "a-\u003eLIO a()",
          "package": "lio",
          "signature": "l-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:taint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e, but use privileges to reduce the amount of taint\n required.  Note that \u003ccode\u003etaintP\u003c/code\u003e will never lower the current label.\n It simply uses privileges to avoid raising the label as high as\n \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e would raise it.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "taintP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e LIO l ()",
          "source": "src/LIO-Core.html#taintP",
          "type": "function"
        },
        "index": {
          "description": "Like taint but use privileges to reduce the amount of taint required Note that taintP will never lower the current label It simply uses privileges to avoid raising the label as high as taint would raise it",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "taintP",
          "normalized": "Priv a-\u003eb-\u003eLIO b()",
          "package": "lio",
          "signature": "Priv p-\u003el-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:taintP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily lowers the clearance for a computation, then restores\n it.  Equivalent to:\n\u003c/p\u003e\u003cpre\u003e\n withClearance c lio = \u003ccode\u003e\u003ca\u003escopeClearance\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003esetClearance\u003c/a\u003e\u003c/code\u003e c \u003e\u003e lio\n\u003c/pre\u003e\u003cp\u003eNote that if the computation inside \u003ccode\u003ewithClearance\u003c/code\u003e acquires any\n \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003es, it may still be able to raise its clearance above the\n supplied argument using \u003ccode\u003e\u003ca\u003esetClearanceP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.Core",
          "name": "withClearance",
          "package": "lio",
          "signature": "l -\u003e LIO l a -\u003e LIO l a",
          "source": "src/LIO-Core.html#withClearance",
          "type": "function"
        },
        "index": {
          "description": "Temporarily lowers the clearance for computation then restores it Equivalent to withClearance lio scopeClearance setClearance lio Note that if the computation inside withClearance acquires any Priv it may still be able to raise its clearance above the supplied argument using setClearanceP",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "withClearance",
          "normalized": "a-\u003eLIO a b-\u003eLIO a b",
          "package": "lio",
          "partial": "Clearance",
          "signature": "l-\u003eLIO l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:withClearance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ewithClearance\u003c/a\u003e\u003c/code\u003e that takes privileges.  Equivalent\n to:\n\u003c/p\u003e\u003cpre\u003e\n withClearanceP p c lio = \u003ccode\u003e\u003ca\u003escopeClearance\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003esetClearanceP\u003c/a\u003e\u003c/code\u003e p c \u003e\u003e lio\n\u003c/pre\u003e",
          "module": "LIO.Core",
          "name": "withClearanceP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e LIO l a -\u003e LIO l a",
          "source": "src/LIO-Core.html#withClearanceP",
          "type": "function"
        },
        "index": {
          "description": "variant of withClearance that takes privileges Equivalent to withClearanceP lio scopeClearance setClearanceP lio",
          "hierarchy": "LIO Core",
          "module": "LIO.Core",
          "name": "withClearanceP",
          "normalized": "Priv a-\u003eb-\u003eLIO b c-\u003eLIO b c",
          "package": "lio",
          "partial": "Clearance",
          "signature": "Priv p-\u003el-\u003eLIO l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Core.html#v:withClearanceP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eDisjunction Category Labels\u003c/em\u003e (\u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003es) are a label format that\nencodes authority, secrecy restrictions, and integrity properties\nusing propositional logic.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e consists of two boolean formulas over \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es.  Each\nformula is in conjunctive normal form, represented by type \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e.  The\nfirst \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003edcSecrecy\u003c/a\u003e\u003c/code\u003e) specifies what combinations of principals\nare allowed to make data public.  The second \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003edcIntegrity\u003c/a\u003e\u003c/code\u003e)\nspecifies which combinations of principals have endorsed the integrity\nof the data.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e%%\u003c/a\u003e\u003c/code\u003e operator allows one to construct a \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e by joining a\nsecrecy \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e on the left with an integrity \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e on the right.  A\n\u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e can also be directly constructed with the constructor\n\u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e.  However, \u003ccode\u003e\u003ca\u003e%%\u003c/a\u003e\u003c/code\u003e has the added convenience of accepting any\nargument types that are instances of \u003ccode\u003e\u003ca\u003eToCNF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, the following expresses data that can be exported by the\nprincipal \"Alice\" and may have been written by anybody:  \u003ccode\u003e\"Alice\"\n\u003ccode\u003e\u003ca\u003e%%\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  (\u003ccode\u003e\u003ccode\u003e\u003ca\u003etoCNF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e indicates a trivially satisfiable\nlabel component, which in this case means a label conveying no\nintegrity properties.)\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e is created using the (\u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e) and (\u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e) operators.  The\ndisjunction operator (\u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e) is used to compute a \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e equivalent to\nthe disjunciton of two \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003eStrings\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003es. For\nexample:\n\u003c/p\u003e\u003cpre\u003e\np1 = \u003ccode\u003e\u003ca\u003eprincipal\u003c/a\u003e\u003c/code\u003e \"p1\"\np2 = \u003ccode\u003e\u003ca\u003eprincipal\u003c/a\u003e\u003c/code\u003e \"p2\"\np3 = \u003ccode\u003e\u003ca\u003eprincipal\u003c/a\u003e\u003c/code\u003e \"p3\"\ne1 = p1 \u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e p2\ne2 = e1 \u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e \"p4\"\n\u003c/pre\u003e\u003cp\u003eSimilarly, the conjunction operator (\u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e) creates a \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e as a\nconjunction of \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003eDisjunction\u003c/a\u003e\u003c/code\u003es, or \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cpre\u003e\ne3 = p1 \u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e p2\ne4 = e1 \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e \"p4\" \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e p3\n\u003c/pre\u003e\u003cp\u003eNote that because a \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e formula is stored as a conjunction of\n\u003ccode\u003e\u003ca\u003eDisjunction\u003c/a\u003e\u003c/code\u003es, it is much more efficient to apply \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e to the result\nof \u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e than vice versa.  It would be logical for \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e to have higher\nfixity than \u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e.  Unfortunately, this makes formulas harder to read\n(given the convention of AND binding more tightly than OR).  Hence\n\u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e have been given the same fixity but different\nassociativities, preventing the two from being mixed in the same\nexpression without explicit parentheses.\n\u003c/p\u003e\u003cp\u003eConsider the following, example:\n\u003c/p\u003e\u003cpre\u003e\ncnf1 = (\"Alice\" \u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e \"Bob\") \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e \"Carla\"\ncnf2 = \"Alice\" \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e \"Carla\"\ndc1 = cnf1 \u003ccode\u003e\u003ca\u003e%%\u003c/a\u003e\u003c/code\u003e cnf2\ndc2 = \"Djon\" \u003ccode\u003e\u003ca\u003e%%\u003c/a\u003e\u003c/code\u003e \"Alice\"\npr = PrivTCB $ \"Alice\" \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e \"Carla\"\n\u003c/pre\u003e\u003cp\u003eThis will result in the following:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edc1\n\u003c/code\u003e\u003c/strong\u003e\"Carla\" /\\ (\"Alice\" \\/ \"Bob\") %% \"Alice\" /\\ \"Carla\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edc2\n\u003c/code\u003e\u003c/strong\u003e\"Djon\" %% \"Alice\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecanFlowTo dc1 dc2\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecanFlowToP pr dc1 dc2\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cp\u003eBecause the \u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e operators accept strings and \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es as\nwell as \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003es, it is sometimes easy to forget that strings and\n\u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es are not actually \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003es.  For example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"Alice\" /\\ \"Bob\" `speaksFor` \"Alice\" \\/ \"Bob\"\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"Alice\" `speaksFor` \"Alice\" \\/ \"Bob\"\n\u003c/code\u003e\u003c/strong\u003e\u003cinteractive\u003e:12:21:\n    Couldn't match expected type `[Char]' with actual type `CNF'\n\u003c/pre\u003e\u003cp\u003eTo convert a single string or \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e, you must use the\n\u003ccode\u003e\u003ca\u003etoCNF\u003c/a\u003e\u003c/code\u003e method:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoCNF \"Alice\" `speaksFor` \"Alice\" \\/ \"Bob\"\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "LIO.DCLabel",
          "name": "DCLabel",
          "package": "lio",
          "source": "src/LIO-DCLabel.html",
          "type": "module"
        },
        "index": {
          "description": "Disjunction Category Labels DCLabel are label format that encodes authority secrecy restrictions and integrity properties using propositional logic DCLabel consists of two boolean formulas over Principal Each formula is in conjunctive normal form represented by type CNF The first CNF dcSecrecy specifies what combinations of principals are allowed to make data public The second CNF dcIntegrity specifies which combinations of principals have endorsed the integrity of the data The operator allows one to construct DCLabel by joining secrecy CNF on the left with an integrity CNF on the right DCLabel can also be directly constructed with the constructor DCLabel However has the added convenience of accepting any argument types that are instances of ToCNF For example the following expresses data that can be exported by the principal Alice and may have been written by anybody Alice True toCNF True indicates trivially satisfiable label component which in this case means label conveying no integrity properties CNF is created using the and operators The disjunction operator is used to compute CNF equivalent to the disjunciton of two Principal Strings or CNF For example p1 principal p1 p2 principal p2 p3 principal p3 e1 p1 p2 e2 e1 p4 Similarly the conjunction operator creates CNF as conjunction of Principal String Disjunction or CNF e3 p1 p2 e4 e1 p4 p3 Note that because CNF formula is stored as conjunction of Disjunction it is much more efficient to apply to the result of than vice versa It would be logical for to have higher fixity than Unfortunately this makes formulas harder to read given the convention of AND binding more tightly than OR Hence and have been given the same fixity but different associativities preventing the two from being mixed in the same expression without explicit parentheses Consider the following example cnf1 Alice Bob Carla cnf2 Alice Carla dc1 cnf1 cnf2 dc2 Djon Alice pr PrivTCB Alice Carla This will result in the following dc1 Carla Alice Bob Alice Carla dc2 Djon Alice canFlowTo dc1 dc2 False canFlowToP pr dc1 dc2 True Because the and operators accept strings and Principal as well as CNF it is sometimes easy to forget that strings and Principal are not actually CNF For example Alice Bob speaksFor Alice Bob True Alice speaksFor Alice Bob interactive Couldn match expected type Char with actual type CNF To convert single string or Principal to CNF you must use the toCNF method toCNF Alice speaksFor Alice Bob True",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "DCLabel",
          "package": "lio",
          "partial": "DCLabel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA boolean formula in Conjunctive Normal Form.  \u003ccode\u003eCNF\u003c/code\u003e is used to\n describe \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e privileges, as well to provide each of the two\n halves of a \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "CNF",
          "package": "lio",
          "source": "src/LIO-DCLabel.html#CNF",
          "type": "data"
        },
        "index": {
          "description": "boolean formula in Conjunctive Normal Form CNF is used to describe DCLabel privileges as well to provide each of the two halves of DCLabel",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "CNF",
          "package": "lio",
          "partial": "CNF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#t:CNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main monad type alias to use for \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computations that are\n specific to \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "DC",
          "package": "lio",
          "source": "src/LIO-DCLabel.html#DC",
          "type": "type"
        },
        "index": {
          "description": "The main monad type alias to use for LIO computations that are specific to DCLabel",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "DC",
          "package": "lio",
          "partial": "DC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#t:DC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain DCLabel type.  \u003ccode\u003eDCLabel\u003c/code\u003es use \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e boolean formulas over\n principals to express authority exercised by a combination of\n principals.  A \u003ccode\u003eDCLabel\u003c/code\u003e contains two \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003es.  One, \u003ccode\u003e\u003ca\u003edcSecrecy\u003c/a\u003e\u003c/code\u003e,\n specifies the minimum authority required to make data with the\n label completely public.  The second, \u003ccode\u003e\u003ca\u003edcIntegrity\u003c/a\u003e\u003c/code\u003e, expresses the\n minimum authority that was used to endorse data with the label, or,\n for mutable objects, the minimum authority required to modify the\n object.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDCLabel\u003c/code\u003es are more conveniently expressed using the \u003ccode\u003e\u003ca\u003e%%\u003c/a\u003e\u003c/code\u003e operator,\n with \u003ccode\u003e\u003ca\u003edcSecrecy\u003c/a\u003e\u003c/code\u003e on the left and \u003ccode\u003e\u003ca\u003edcIntegrity\u003c/a\u003e\u003c/code\u003e on the right, i.e.:\n \u003ccode\u003e(\u003c/code\u003e\u003cem\u003edcSecrecyValue\u003c/em\u003e \u003ccode\u003e\u003ca\u003e%%\u003c/a\u003e\u003c/code\u003e \u003cem\u003edcIntegrityValue\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eDCLabel\u003c/code\u003es enforce the following relations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003ecnf1\u003c/code\u003e and \u003ccode\u003ecnf2\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003es describing authority, then\n   \u003ccode\u003ecnf1 `\u003ccode\u003e\u003ca\u003espeaksFor\u003c/a\u003e\u003c/code\u003e` cnf2\u003c/code\u003e if and only if \u003ccode\u003ecnf1\u003c/code\u003e logically implies\n   \u003ccode\u003ecnf2\u003c/code\u003e (often written \u003ccode\u003ecnf1 &#10233; cnf2\u003c/code\u003e).  For example,\n   \u003ccode\u003e(\"A\" \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e \"B\") `\u003ccode\u003e\u003ca\u003espeaksFor\u003c/a\u003e\u003c/code\u003e` \u003ccode\u003e\u003ca\u003etoCNF\u003c/a\u003e\u003c/code\u003e \"A\"\u003c/code\u003e, while \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoCNF\u003c/a\u003e\u003c/code\u003e\n   \"A\" `\u003ccode\u003e\u003ca\u003espeaksFor\u003c/a\u003e\u003c/code\u003e` (\"A\" \u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e \"C\")\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Given two \u003ccode\u003eDCLabel\u003c/code\u003es \u003ccode\u003edc1 = (s1 \u003ccode\u003e\u003ca\u003e%%\u003c/a\u003e\u003c/code\u003e i1)\u003c/code\u003e and \u003ccode\u003edc2 = (s2 \u003ccode\u003e\u003ca\u003e%%\u003c/a\u003e\u003c/code\u003e\n   i2)\u003c/code\u003e, \u003ccode\u003edc1 `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` dc2\u003c/code\u003e (often written \u003ccode\u003edc1\u003c/code\u003e &#8849; \u003ccode\u003edc2\u003c/code\u003e)\n   if and only if \u003ccode\u003es2 `\u003ccode\u003e\u003ca\u003espeaksFor\u003c/a\u003e\u003c/code\u003e` s1 && i1 `\u003ccode\u003e\u003ca\u003espeaksFor\u003c/a\u003e\u003c/code\u003e` i2\u003c/code\u003e.  In\n   other words, data can flow in the direction of requiring more\n   authority to make it public or removing integrity endorsements.\n\u003c/li\u003e\u003cli\u003e Given two \u003ccode\u003eDCLabel\u003c/code\u003es \u003ccode\u003edc1 = (s1 \u003ccode\u003e\u003ca\u003e%%\u003c/a\u003e\u003c/code\u003e i1)\u003c/code\u003e and \u003ccode\u003edc2 = (s2 \u003ccode\u003e\u003ca\u003e%%\u003c/a\u003e\u003c/code\u003e\n   i2)\u003c/code\u003e, and a \u003ccode\u003ep::\u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e representing privileges, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecanFlowToP\u003c/a\u003e\u003c/code\u003e p\n   dc1 dc2\u003c/code\u003e (often written \u003ccode\u003edc1\u003c/code\u003e &#8849;&#8346; \u003ccode\u003edc2\u003c/code\u003e) if and only\n   if \u003ccode\u003e(p \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e s2) `\u003ccode\u003e\u003ca\u003espeaksFor\u003c/a\u003e\u003c/code\u003e` s2 && (p \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e i1) `\u003ccode\u003e\u003ca\u003espeaksFor\u003c/a\u003e\u003c/code\u003e`\n   i2\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "LIO.DCLabel",
          "name": "DCLabel",
          "package": "lio",
          "source": "src/LIO-DCLabel.html#DCLabel",
          "type": "data"
        },
        "index": {
          "description": "Main DCLabel type DCLabel use CNF boolean formulas over principals to express authority exercised by combination of principals DCLabel contains two CNF One dcSecrecy specifies the minimum authority required to make data with the label completely public The second dcIntegrity expresses the minimum authority that was used to endorse data with the label or for mutable objects the minimum authority required to modify the object DCLabel are more conveniently expressed using the operator with dcSecrecy on the left and dcIntegrity on the right i.e dcSecrecyValue dcIntegrityValue DCLabel enforce the following relations If cnf1 and cnf2 are CNF describing authority then cnf1 speaksFor cnf2 if and only if cnf1 logically implies cnf2 often written cnf1 cnf2 For example speaksFor toCNF while toCNF speaksFor Given two DCLabel dc1 s1 i1 and dc2 s2 i2 dc1 canFlowTo dc2 often written dc1 dc2 if and only if s2 speaksFor s1 i1 speaksFor i2 In other words data can flow in the direction of requiring more authority to make it public or removing integrity endorsements Given two DCLabel dc1 s1 i1 and dc2 s2 i2 and CNF representing privileges canFlowToP dc1 dc2 often written dc1 dc2 if and only if s2 speaksFor s2 i1 speaksFor i2",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "DCLabel",
          "package": "lio",
          "partial": "DCLabel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#t:DCLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e values labeled with a \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "DCLabeled",
          "package": "lio",
          "source": "src/LIO-DCLabel.html#DCLabeled",
          "type": "type"
        },
        "index": {
          "description": "An alias for Labeled values labeled with DCLabel",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "DCLabeled",
          "package": "lio",
          "partial": "DCLabeled",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#t:DCLabeled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e privileges are expressed as a \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e of the principals\n whose authority is being exercised.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "DCPriv",
          "package": "lio",
          "source": "src/LIO-DCLabel.html#DCPriv",
          "type": "type"
        },
        "index": {
          "description": "DCLabel privileges are expressed as CNF of the principals whose authority is being exercised",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "DCPriv",
          "package": "lio",
          "partial": "DCPriv",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#t:DCPriv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a disjunction of \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es, or one clause of a\n \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e.  There is generally not much need to work directly with\n \u003ccode\u003eDisjunction\u003c/code\u003es unless you need to serialize and de-serialize them\n (by means of \u003ccode\u003e\u003ca\u003edToSet\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edFromList\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "Disjunction",
          "package": "lio",
          "source": "src/LIO-DCLabel.html#Disjunction",
          "type": "data"
        },
        "index": {
          "description": "Represents disjunction of Principal or one clause of CNF There is generally not much need to work directly with Disjunction unless you need to serialize and de-serialize them by means of dToSet and dFromList",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "Disjunction",
          "package": "lio",
          "partial": "Disjunction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#t:Disjunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003ePrincipal\u003c/code\u003e is a primitive source of authority, represented as\n a string.  The interpretation of principal strings is up to the\n application.  Reasonable schemes include encoding user names,\n domain names, and/or URLs in the \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "Principal",
          "package": "lio",
          "source": "src/LIO-DCLabel.html#Principal",
          "type": "data"
        },
        "index": {
          "description": "Principal is primitive source of authority represented as string The interpretation of principal strings is up to the application Reasonable schemes include encoding user names domain names and or URLs in the Principal type",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "Principal",
          "package": "lio",
          "partial": "Principal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#t:Principal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs a type, a \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e is always a conjunction of \u003ccode\u003e\u003ca\u003eDisjunction\u003c/a\u003e\u003c/code\u003es of\n \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es.  However, mathematically speaking, a single\n \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003e or single \u003ccode\u003e\u003ca\u003eDisjunction\u003c/a\u003e\u003c/code\u003e is also a degenerate example of\n conjunctive normal form.  Class \u003ccode\u003e\u003ca\u003eToCNF\u003c/a\u003e\u003c/code\u003e abstracts over the\n differences between these types, promoting them all to \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "ToCNF",
          "package": "lio",
          "source": "src/LIO-DCLabel.html#ToCNF",
          "type": "class"
        },
        "index": {
          "description": "As type CNF is always conjunction of Disjunction of Principal However mathematically speaking single Principal or single Disjunction is also degenerate example of conjunctive normal form Class ToCNF abstracts over the differences between these types promoting them all to CNF",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "ToCNF",
          "package": "lio",
          "partial": "To CNF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#t:ToCNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe primary way of creating a \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e.  The secrecy component\n goes on the left, while the integrity component goes on the right,\n e.g.:\n\u003c/p\u003e\u003cpre\u003e label = secrecyCNF %% integrityCNF\n\u003c/pre\u003e\u003cp\u003eUnlike the \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e constructor, the arguments can be any instance\n of \u003ccode\u003e\u003ca\u003eToCNF\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e%%\u003c/code\u003e has fixity:\n\u003c/p\u003e\u003cpre\u003e infix 6 %%\n\u003c/pre\u003e",
          "module": "LIO.DCLabel",
          "name": "(%%)",
          "package": "lio",
          "signature": "a -\u003e b -\u003e DCLabel",
          "source": "src/LIO-DCLabel.html#%25%25",
          "type": "function"
        },
        "index": {
          "description": "The primary way of creating DCLabel The secrecy component goes on the left while the integrity component goes on the right e.g label secrecyCNF integrityCNF Unlike the DCLabel constructor the arguments can be any instance of ToCNF has fixity infix",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "(%%) %%",
          "normalized": "a-\u003eb-\u003eDCLabel",
          "package": "lio",
          "signature": "a-\u003eb-\u003eDCLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:-37--37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a conjunction of two \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003es or \u003ccode\u003e\u003ca\u003eToCNF\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003cp\u003eHas fixity:\n\u003c/p\u003e\u003cpre\u003e infixr 7 /\\\n\u003c/pre\u003e",
          "module": "LIO.DCLabel",
          "name": "(/\\)",
          "package": "lio",
          "signature": "a -\u003e b -\u003e CNF",
          "source": "src/LIO-DCLabel.html#%2F%5C",
          "type": "function"
        },
        "index": {
          "description": "Compute conjunction of two CNF or ToCNF instances Has fixity infixr",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "(/\\) /\\",
          "normalized": "a-\u003eb-\u003eCNF",
          "package": "lio",
          "signature": "a-\u003eb-\u003eCNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:-47--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a disjunction of two \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003es or \u003ccode\u003e\u003ca\u003eToCNF\u003c/a\u003e\u003c/code\u003e instances.  Note\n that this can be an expensive operation if the inputs have many\n conjunctions.\n\u003c/p\u003e\u003cp\u003eThe fixity is specifically chosen so that \u003ccode\u003e\\/\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e/\\\u003c/a\u003e\u003c/code\u003e\n cannot be mixed in the same expression without parentheses:\n\u003c/p\u003e\u003cpre\u003e infixl 7 \\/\n\u003c/pre\u003e",
          "module": "LIO.DCLabel",
          "name": "(\\/)",
          "package": "lio",
          "signature": "a -\u003e b -\u003e CNF",
          "source": "src/LIO-DCLabel.html#%5C%2F",
          "type": "function"
        },
        "index": {
          "description": "Compute disjunction of two CNF or ToCNF instances Note that this can be an expensive operation if the inputs have many conjunctions The fixity is specifically chosen so that and cannot be mixed in the same expression without parentheses infixl",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "(\\/) \\/",
          "normalized": "a-\u003eb-\u003eCNF",
          "package": "lio",
          "signature": "a-\u003eb-\u003eCNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:-92--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.DCLabel",
          "name": "DCLabel",
          "package": "lio",
          "signature": "DCLabel",
          "source": "src/LIO-DCLabel.html#DCLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "DCLabel",
          "package": "lio",
          "partial": "DCLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:DCLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e that is always \u003ccode\u003eFalse\u003c/code\u003e.  If \u003ccode\u003e\u003ccode\u003e\u003ca\u003edcSecrecy\u003c/a\u003e\u003c/code\u003e = cFalse\u003c/code\u003e, then\n no combination of principals is powerful enough to make the data\n public.  For that reason, \u003ccode\u003ecFalse\u003c/code\u003e generally shouldn't appear in a\n data label.  However, it is convenient to include as the\n \u003ccode\u003e\u003ca\u003edcSecrecy\u003c/a\u003e\u003c/code\u003e component of \u003ccode\u003e\u003ca\u003elioClearance\u003c/a\u003e\u003c/code\u003e to indicate a thread may\n arbitrarily raise its label.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edcIntegrity\u003c/a\u003e\u003c/code\u003e = cFalse\u003c/code\u003e indicates impossibly much integrity--i.e.,\n data that no combination of principals is powerful enough to modify\n or have created.  Generally this is not a useful concept.\n\u003c/p\u003e\u003cp\u003eAs a privilege description, \u003ccode\u003ecFalse\u003c/code\u003e indicates impossibly high\n privileges (i.e., higher than could be achieved through any\n combination of \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es).  \u003ccode\u003ecFalse `\u003ccode\u003e\u003ca\u003espeaksFor\u003c/a\u003e\u003c/code\u003e` p\u003c/code\u003e for any\n \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e.  This can be a useful concept for bootstrapping\n privileges within the \u003ccode\u003e\u003ca\u003eDC\u003c/a\u003e\u003c/code\u003e monad itself.  For instance, the result\n of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eprivInit\u003c/a\u003e\u003c/code\u003e cFalse\u003c/code\u003e can be passed to fully-trusted \u003ccode\u003e\u003ca\u003eDC\u003c/a\u003e\u003c/code\u003e code,\n which can in turn use \u003ccode\u003edelegate\u003c/code\u003e to create arbitrary finite\n privileges to pass to less privileged code.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "cFalse",
          "package": "lio",
          "signature": "CNF",
          "source": "src/LIO-DCLabel.html#cFalse",
          "type": "function"
        },
        "index": {
          "description": "CNF that is always False If dcSecrecy cFalse then no combination of principals is powerful enough to make the data public For that reason cFalse generally shouldn appear in data label However it is convenient to include as the dcSecrecy component of lioClearance to indicate thread may arbitrarily raise its label dcIntegrity cFalse indicates impossibly much integrity--i.e data that no combination of principals is powerful enough to modify or have created Generally this is not useful concept As privilege description cFalse indicates impossibly high privileges i.e higher than could be achieved through any combination of Principal cFalse speaksFor for any CNF This can be useful concept for bootstrapping privileges within the DC monad itself For instance the result of privInit cFalse can be passed to fully-trusted DC code which can in turn use delegate to create arbitrary finite privileges to pass to less privileged code",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "cFalse",
          "package": "lio",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:cFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of \u003ccode\u003e\u003ca\u003eDisjunction\u003c/a\u003e\u003c/code\u003es into a \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e.  Mostly useful if\n you wish to de-serialize a \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "cFromList",
          "package": "lio",
          "signature": "[Disjunction] -\u003e CNF",
          "source": "src/LIO-DCLabel.html#cFromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list of Disjunction into CNF Mostly useful if you wish to de-serialize CNF",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "cFromList",
          "normalized": "[Disjunction]-\u003eCNF",
          "package": "lio",
          "partial": "From List",
          "signature": "[Disjunction]-\u003eCNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:cFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eDisjunction\u003c/a\u003e\u003c/code\u003es.  Mostly useful if\n you wish to serialize a \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "cToSet",
          "package": "lio",
          "signature": "CNF -\u003e Set Disjunction",
          "source": "src/LIO-DCLabel.html#cToSet",
          "type": "function"
        },
        "index": {
          "description": "Convert CNF to Set of Disjunction Mostly useful if you wish to serialize DCLabel",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "cToSet",
          "normalized": "CNF-\u003eSet Disjunction",
          "package": "lio",
          "partial": "To Set",
          "signature": "CNF-\u003eSet Disjunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:cToSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCNF\u003c/a\u003e\u003c/code\u003e that is always \u003ccode\u003eTrue\u003c/code\u003e--i.e., trivially satisfiable.  When\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003edcSecrecy\u003c/a\u003e\u003c/code\u003e = cTrue\u003c/code\u003e, it means data is public.  When\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003edcIntegrity\u003c/a\u003e\u003c/code\u003e = cTrue\u003c/code\u003e, it means data carries no integrity\n guarantees.  As a description of privileges, \u003ccode\u003ecTrue\u003c/code\u003e conveys no\n privileges; \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecanFlowToP\u003c/a\u003e\u003c/code\u003e cTrue l1 l2\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e l1 l2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoCNF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e = cTrue\u003c/code\u003e.  Hence \u003ccode\u003e\u003ccode\u003e\u003ca\u003edcPublic\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e\n cTrue cTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "cTrue",
          "package": "lio",
          "signature": "CNF",
          "source": "src/LIO-DCLabel.html#cTrue",
          "type": "function"
        },
        "index": {
          "description": "CNF that is always True i.e trivially satisfiable When dcSecrecy cTrue it means data is public When dcIntegrity cTrue it means data carries no integrity guarantees As description of privileges cTrue conveys no privileges canFlowToP cTrue l1 l2 is equivalent to canFlowTo l1 l2 Note that toCNF True cTrue Hence dcPublic DCLabel cTrue cTrue",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "cTrue",
          "package": "lio",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:cTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es into a \u003ccode\u003e\u003ca\u003eDisjunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "dFromList",
          "package": "lio",
          "signature": "[Principal] -\u003e Disjunction",
          "source": "src/LIO-DCLabel.html#dFromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list of Principal into Disjunction",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "dFromList",
          "normalized": "[Principal]-\u003eDisjunction",
          "package": "lio",
          "partial": "From List",
          "signature": "[Principal]-\u003eDisjunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:dFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpose the set of \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003es being ORed together in a\n \u003ccode\u003e\u003ca\u003eDisjunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "dToSet",
          "package": "lio",
          "signature": "Disjunction -\u003e Set Principal",
          "source": "src/LIO-DCLabel.html#dToSet",
          "type": "function"
        },
        "index": {
          "description": "Expose the set of Principal being ORed together in Disjunction",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "dToSet",
          "normalized": "Disjunction-\u003eSet Principal",
          "package": "lio",
          "partial": "To Set",
          "signature": "Disjunction-\u003eSet Principal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:dToSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA common default starting state, where \u003ccode\u003e\u003ccode\u003e\u003ca\u003elioLabel\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003edcPublic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ccode\u003e\u003ca\u003elioClearance\u003c/a\u003e\u003c/code\u003e = False \u003ccode\u003e\u003ca\u003e%%\u003c/a\u003e\u003c/code\u003e True\u003c/code\u003e (i.e., the highest\n possible clearance).\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "dcDefaultState",
          "package": "lio",
          "signature": "LIOState DCLabel",
          "source": "src/LIO-DCLabel.html#dcDefaultState",
          "type": "function"
        },
        "index": {
          "description": "common default starting state where lioLabel dcPublic and lioClearance False True i.e the highest possible clearance",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "dcDefaultState",
          "package": "lio",
          "partial": "Default State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:dcDefaultState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the authority with which\n immutable data was endorsed, or the\n authority required to modify mutable data.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "dcIntegrity",
          "package": "lio",
          "signature": "CNF",
          "source": "src/LIO-DCLabel.html#DCLabel",
          "type": "function"
        },
        "index": {
          "description": "Describes the authority with which immutable data was endorsed or the authority required to modify mutable data",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "dcIntegrity",
          "package": "lio",
          "partial": "Integrity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:dcIntegrity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e dcPublic = True %% True\n\u003c/pre\u003e\u003cp\u003eThis label corresponds to public data with no integrity guarantees.\n For instance, an unrestricted Internet socket should be labeled\n \u003ccode\u003edcPublic\u003c/code\u003e.  The significance of \u003ccode\u003edcPublic\u003c/code\u003e is that given data\n labeled \u003ccode\u003e(s %% i)\u003c/code\u003e, \u003ccode\u003es\u003c/code\u003e is the exact minimum authority such that\n \u003ccode\u003e(s %% i) &#8849;&#8347; dcPublic\u003c/code\u003e, while \u003ccode\u003ei\u003c/code\u003e is the exact\n minimum authority such that \u003ccode\u003edcPublic &#8849;&#7522; (s %% i)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "dcPublic",
          "package": "lio",
          "signature": "DCLabel",
          "source": "src/LIO-DCLabel.html#dcPublic",
          "type": "function"
        },
        "index": {
          "description": "dcPublic True True This label corresponds to public data with no integrity guarantees For instance an unrestricted Internet socket should be labeled dcPublic The significance of dcPublic is that given data labeled is the exact minimum authority such that dcPublic while is the exact minimum authority such that dcPublic",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "dcPublic",
          "package": "lio",
          "partial": "Public",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:dcPublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the authority required to make\n the data public.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "dcSecrecy",
          "package": "lio",
          "signature": "CNF",
          "source": "src/LIO-DCLabel.html#DCLabel",
          "type": "function"
        },
        "index": {
          "description": "Describes the authority required to make the data public",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "dcSecrecy",
          "package": "lio",
          "partial": "Secrecy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:dcSecrecy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper function for running \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e computations.\n\u003c/p\u003e\u003cpre\u003e\n evalDC dc = \u003ccode\u003e\u003ca\u003eevalLIO\u003c/a\u003e\u003c/code\u003e dc \u003ccode\u003e\u003ca\u003edcDefaultState\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "LIO.DCLabel",
          "name": "evalDC",
          "package": "lio",
          "signature": "DC a -\u003e IO a",
          "source": "src/LIO-DCLabel.html#evalDC",
          "type": "function"
        },
        "index": {
          "description": "Wrapper function for running LIO DCLabel computations evalDC dc evalLIO dc dcDefaultState",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "evalDC",
          "normalized": "DC a-\u003eIO a",
          "package": "lio",
          "partial": "DC",
          "signature": "DC a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:evalDC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a principal from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is packed into\n a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e, which will almost certainly\n give unexpected results for non-ASCII unicode code points.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "principal",
          "package": "lio",
          "signature": "String -\u003e Principal",
          "source": "src/LIO-DCLabel.html#principal",
          "type": "function"
        },
        "index": {
          "description": "Create principal from String The String is packed into ByteString using fromString which will almost certainly give unexpected results for non-ASCII unicode code points",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "principal",
          "normalized": "String-\u003ePrincipal",
          "package": "lio",
          "signature": "String-\u003ePrincipal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:principal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a principal from a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "principalBS",
          "package": "lio",
          "signature": "ByteString -\u003e Principal",
          "source": "src/LIO-DCLabel.html#principalBS",
          "type": "function"
        },
        "index": {
          "description": "Create principal from strict ByteString",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "principalBS",
          "normalized": "ByteString-\u003ePrincipal",
          "package": "lio",
          "partial": "BS",
          "signature": "ByteString-\u003ePrincipal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:principalBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the name of a principal as a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n (Use \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e to get it as a regular \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "LIO.DCLabel",
          "name": "principalName",
          "package": "lio",
          "signature": "Principal -\u003e ByteString",
          "source": "src/LIO-DCLabel.html#principalName",
          "type": "function"
        },
        "index": {
          "description": "Extract the name of principal as strict ByteString Use show to get it as regular String",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "principalName",
          "normalized": "Principal-\u003eByteString",
          "package": "lio",
          "partial": "Name",
          "signature": "Principal-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:principalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.DCLabel",
          "name": "toCNF",
          "package": "lio",
          "signature": "c -\u003e CNF",
          "source": "src/LIO-DCLabel.html#toCNF",
          "type": "method"
        },
        "index": {
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "toCNF",
          "normalized": "a-\u003eCNF",
          "package": "lio",
          "partial": "CNF",
          "signature": "c-\u003eCNF",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:toCNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDCLabel\u003c/a\u003e\u003c/code\u003e wrapper for \u003ccode\u003e\u003ca\u003etryLIO\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n tryDC dc = \u003ccode\u003e\u003ca\u003etryLIO\u003c/a\u003e\u003c/code\u003e dc \u003ccode\u003e\u003ca\u003edcDefaultState\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "LIO.DCLabel",
          "name": "tryDC",
          "package": "lio",
          "signature": "DC a -\u003e IO (Either SomeException a, LIOState DCLabel)",
          "source": "src/LIO-DCLabel.html#tryDC",
          "type": "function"
        },
        "index": {
          "description": "DCLabel wrapper for tryLIO tryDC dc tryLIO dc dcDefaultState",
          "hierarchy": "LIO DCLabel",
          "module": "LIO.DCLabel",
          "name": "tryDC",
          "normalized": "DC a-\u003eIO(Either SomeException a,LIOState DCLabel)",
          "package": "lio",
          "partial": "DC",
          "signature": "DC a-\u003eIO(Either SomeException a,LIOState DCLabel)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-DCLabel.html#v:tryDC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides two functions useful for delegating\n privileges.  The \u003ccode\u003e\u003ca\u003edelegate\u003c/a\u003e\u003c/code\u003e function creates a \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e value less\n powerful than an existing one.  \u003ccode\u003e\u003ca\u003eGate\u003c/a\u003e\u003c/code\u003es provide a mechanism for\n authenticating calls to closures that embed privileges.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LIO.Delegate",
          "name": "Delegate",
          "package": "lio",
          "source": "src/LIO-Delegate.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides two functions useful for delegating privileges The delegate function creates Priv value less powerful than an existing one Gate provide mechanism for authenticating calls to closures that embed privileges",
          "hierarchy": "LIO Delegate",
          "module": "LIO.Delegate",
          "name": "Delegate",
          "package": "lio",
          "partial": "Delegate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Delegate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Gate is a lambda abstraction from a privilege description to an\n arbitrary type \u003ccode\u003ea\u003c/code\u003e. Applying the gate is accomplished with \u003ccode\u003e\u003ca\u003ecallGate\u003c/a\u003e\u003c/code\u003e\n which takes a privilege argument that is converted to a description\n before invoking the gate computation.\n\u003c/p\u003e",
          "module": "LIO.Delegate",
          "name": "Gate",
          "package": "lio",
          "source": "src/LIO-Delegate.html#Gate",
          "type": "data"
        },
        "index": {
          "description": "Gate is lambda abstraction from privilege description to an arbitrary type Applying the gate is accomplished with callGate which takes privilege argument that is converted to description before invoking the gate computation",
          "hierarchy": "LIO Delegate",
          "module": "LIO.Delegate",
          "name": "Gate",
          "package": "lio",
          "partial": "Gate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Delegate.html#t:Gate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a gate and privilege, execute the gate computation.  It is\n important to note that \u003ccode\u003ecallGate\u003c/code\u003e invokes the gate computation with\n the privilege description and \u003cem\u003eNOT\u003c/em\u003e the privilege itself.\n\u003c/p\u003e\u003cp\u003eNote that, in general, code should \u003cem\u003enot\u003c/em\u003e provide privileges to\n functions other than \u003ccode\u003ecallGate\u003c/code\u003e when wishing to call a gate. This\n function is provided by LIO since it can be easily inspected by\n both the gate creator and caller to be doing the \"right\" thing:\n provide the privilege description corresponding to the supplied\n privilege as \"proof\" without explicitly passing in the privilege.\n\u003c/p\u003e",
          "module": "LIO.Delegate",
          "name": "callGate",
          "package": "lio",
          "signature": "Gate p a-\u003e Priv p-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Given gate and privilege execute the gate computation It is important to note that callGate invokes the gate computation with the privilege description and NOT the privilege itself Note that in general code should not provide privileges to functions other than callGate when wishing to call gate This function is provided by LIO since it can be easily inspected by both the gate creator and caller to be doing the right thing provide the privilege description corresponding to the supplied privilege as proof without explicitly passing in the privilege",
          "hierarchy": "LIO Delegate",
          "module": "LIO.Delegate",
          "name": "callGate",
          "normalized": "Gate a b-\u003ePriv a-\u003eb",
          "package": "lio",
          "partial": "Gate",
          "signature": "Gate p a-\u003ePriv p-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Delegate.html#v:callGate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edelegate\u003c/code\u003e allows you to create a new privilege object that is\n less powerful than an existing privilege object.  The first\n argument supplies actual privileges.  The second argument is a\n \u003ccode\u003e\u003ca\u003ePrivDesc\u003c/a\u003e\u003c/code\u003e describing the desired new privileges.  The call throws\n an exception unless the privilege object supplied \u003ccode\u003e\u003ca\u003espeaksFor\u003c/a\u003e\u003c/code\u003e the\n privilege object requested.\n\u003c/p\u003e\u003cp\u003eNote:  If you are looking for a way to create privileges \u003cem\u003emore\u003c/em\u003e\n powerful than ones you already have, you can use the \u003ccode\u003emappend\u003c/code\u003e\n function to combine existing privileges.\n\u003c/p\u003e",
          "module": "LIO.Delegate",
          "name": "delegate",
          "package": "lio",
          "signature": "Priv p -\u003e p -\u003e Priv p",
          "source": "src/LIO-Delegate.html#delegate",
          "type": "function"
        },
        "index": {
          "description": "delegate allows you to create new privilege object that is less powerful than an existing privilege object The first argument supplies actual privileges The second argument is PrivDesc describing the desired new privileges The call throws an exception unless the privilege object supplied speaksFor the privilege object requested Note If you are looking for way to create privileges more powerful than ones you already have you can use the mappend function to combine existing privileges",
          "hierarchy": "LIO Delegate",
          "module": "LIO.Delegate",
          "name": "delegate",
          "normalized": "Priv a-\u003ea-\u003ePriv a",
          "package": "lio",
          "signature": "Priv p-\u003ep-\u003ePriv p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Delegate.html#v:delegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a gate given a computation from a privilege description.\n Note that because of currying type \u003ccode\u003ea\u003c/code\u003e may itself be a function\n type and thus gates can take arguments in addition to the privilege\n descriptoin.\n\u003c/p\u003e",
          "module": "LIO.Delegate",
          "name": "gate",
          "package": "lio",
          "signature": "(p -\u003e a)-\u003e Gate p a",
          "type": "function"
        },
        "index": {
          "description": "Create gate given computation from privilege description Note that because of currying type may itself be function type and thus gates can take arguments in addition to the privilege descriptoin",
          "hierarchy": "LIO Delegate",
          "module": "LIO.Delegate",
          "name": "gate",
          "normalized": "(a-\u003eb)-\u003eGate a b",
          "package": "lio",
          "signature": "(p-\u003ea)-\u003eGate p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Delegate.html#v:gate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eguardGate name minPriv a\u003c/code\u003e creates a simple gate that requires\n privileges at least as high as \u003ccode\u003eminPriv\u003c/code\u003e to return the payload or\n function \u003ccode\u003ea\u003c/code\u003e.  If the privileges supplied are insufficient, an\n exception of type \u003ccode\u003e\u003ca\u003eInsufficientPrivs\u003c/a\u003e\u003c/code\u003e is thrown.  The argument\n \u003ccode\u003ename\u003c/code\u003e is used only when an exception is thrown, to make the source\n of the exception more easily traceable.\n\u003c/p\u003e\u003cpre\u003e guardGate name minPriv a = gate $ \\pd -\u003e\n   if pd `speaksFor` minPriv then a\n   else insufficientPrivs name pd minPriv\n\u003c/pre\u003e",
          "module": "LIO.Delegate",
          "name": "guardGate",
          "package": "lio",
          "signature": "String -\u003e p -\u003e a -\u003e Gate p a",
          "source": "src/LIO-Delegate.html#guardGate",
          "type": "function"
        },
        "index": {
          "description": "guardGate name minPriv creates simple gate that requires privileges at least as high as minPriv to return the payload or function If the privileges supplied are insufficient an exception of type InsufficientPrivs is thrown The argument name is used only when an exception is thrown to make the source of the exception more easily traceable guardGate name minPriv gate pd if pd speaksFor minPriv then else insufficientPrivs name pd minPriv",
          "hierarchy": "LIO Delegate",
          "module": "LIO.Delegate",
          "name": "guardGate",
          "normalized": "String-\u003ea-\u003eb-\u003eGate a b",
          "package": "lio",
          "partial": "Gate",
          "signature": "String-\u003ep-\u003ea-\u003eGate p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Delegate.html#v:guardGate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports exception types thrown in response to label\nfailures.  In addition, it provides \u003ccode\u003e\u003ca\u003ewithContext\u003c/a\u003e\u003c/code\u003e, a function that\nannotates any exceptions in the \u003ccode\u003e\u003ca\u003eAnyLabelError\u003c/a\u003e\u003c/code\u003e hierarchy that are\nthrown within a given scope.  These annotations should be used to add\nfunction names to exceptions, so as to make it easier to pinpoint the\ncause of a label error.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LIO.Error",
          "name": "Error",
          "package": "lio",
          "source": "src/LIO-Error.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports exception types thrown in response to label failures In addition it provides withContext function that annotates any exceptions in the AnyLabelError hierarchy that are thrown within given scope These annotations should be used to add function names to exceptions so as to make it easier to pinpoint the cause of label error",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "Error",
          "package": "lio",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of error messages that can be annotated with context.\n\u003c/p\u003e",
          "module": "LIO.Error",
          "name": "Annotatable",
          "package": "lio",
          "source": "src/LIO-Error.html#Annotatable",
          "type": "class"
        },
        "index": {
          "description": "Class of error messages that can be annotated with context",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "Annotatable",
          "package": "lio",
          "partial": "Annotatable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#t:Annotatable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParent of all label-related exceptions.\n\u003c/p\u003e",
          "module": "LIO.Error",
          "name": "AnyLabelError",
          "package": "lio",
          "source": "src/LIO-Error.html#AnyLabelError",
          "type": "data"
        },
        "index": {
          "description": "Parent of all label-related exceptions",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "AnyLabelError",
          "package": "lio",
          "partial": "Any Label Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#t:AnyLabelError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic privilege description for recording relevant privileges\n in exceptions.\n\u003c/p\u003e",
          "module": "LIO.Error",
          "name": "GenericPrivDesc",
          "package": "lio",
          "source": "src/LIO-Error.html#GenericPrivDesc",
          "type": "data"
        },
        "index": {
          "description": "generic privilege description for recording relevant privileges in exceptions",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "GenericPrivDesc",
          "package": "lio",
          "partial": "Generic Priv Desc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#t:GenericPrivDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError indicating insufficient privileges (independent of the\n current label).  This exception is thrown by \u003ccode\u003edelegate\u003c/code\u003e, and\n should also be thrown by gates that receive insufficient privilege\n descriptions (see \u003ca\u003eLIO.Delegate\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "LIO.Error",
          "name": "InsufficientPrivs",
          "package": "lio",
          "source": "src/LIO-Error.html#InsufficientPrivs",
          "type": "data"
        },
        "index": {
          "description": "Error indicating insufficient privileges independent of the current label This exception is thrown by delegate and should also be thrown by gates that receive insufficient privilege descriptions see LIO.Delegate",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "InsufficientPrivs",
          "package": "lio",
          "partial": "Insufficient Privs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#t:InsufficientPrivs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain error type thrown by label failures in the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "LIO.Error",
          "name": "LabelError",
          "package": "lio",
          "source": "src/LIO-Error.html#LabelError",
          "type": "data"
        },
        "index": {
          "description": "Main error type thrown by label failures in the LIO monad",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "LabelError",
          "package": "lio",
          "partial": "Label Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#t:LabelError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError raised when a computation spawned by \u003ccode\u003elFork\u003c/code\u003e terminates\n with its current label above the label of the result.\n\u003c/p\u003e",
          "module": "LIO.Error",
          "name": "ResultExceedsLabel",
          "package": "lio",
          "source": "src/LIO-Error.html#ResultExceedsLabel",
          "type": "data"
        },
        "index": {
          "description": "Error raised when computation spawned by lFork terminates with its current label above the label of the result",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "ResultExceedsLabel",
          "package": "lio",
          "partial": "Result Exceeds Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#t:ResultExceedsLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.Error",
          "name": "GenericPrivDesc",
          "package": "lio",
          "signature": "GenericPrivDesc p",
          "source": "src/LIO-Error.html#GenericPrivDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "GenericPrivDesc",
          "package": "lio",
          "partial": "Generic Priv Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:GenericPrivDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.Error",
          "name": "annotate",
          "package": "lio",
          "signature": "String -\u003e e -\u003e e",
          "source": "src/LIO-Error.html#annotate",
          "type": "method"
        },
        "index": {
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "annotate",
          "normalized": "String-\u003ea-\u003ea",
          "package": "lio",
          "signature": "String-\u003ee-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise \u003ccode\u003e\u003ca\u003eInsufficientPrivs\u003c/a\u003e\u003c/code\u003e error.\n\u003c/p\u003e",
          "module": "LIO.Error",
          "name": "insufficientPrivs",
          "package": "lio",
          "signature": "String-\u003e p-\u003e p-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Raise InsufficientPrivs error",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "insufficientPrivs",
          "normalized": "String-\u003ea-\u003ea-\u003eb",
          "package": "lio",
          "partial": "Privs",
          "signature": "String-\u003ep-\u003ep-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:insufficientPrivs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow a label-error exception.\n\u003c/p\u003e",
          "module": "LIO.Error",
          "name": "labelError",
          "package": "lio",
          "signature": "String-\u003e [l]-\u003e LIO l a",
          "type": "function"
        },
        "index": {
          "description": "Throw label-error exception",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "labelError",
          "normalized": "String-\u003e[a]-\u003eLIO a b",
          "package": "lio",
          "partial": "Error",
          "signature": "String-\u003e[l]-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:labelError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow a label-error exception.\n\u003c/p\u003e",
          "module": "LIO.Error",
          "name": "labelErrorP",
          "package": "lio",
          "signature": "String-\u003e Priv p-\u003e [l]-\u003e LIO l a",
          "type": "function"
        },
        "index": {
          "description": "Throw label-error exception",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "labelErrorP",
          "normalized": "String-\u003ePriv a-\u003e[b]-\u003eLIO b c",
          "package": "lio",
          "partial": "Error",
          "signature": "String-\u003ePriv p-\u003e[l]-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:labelErrorP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of \u003ccode\u003e\u003ca\u003efromException\u003c/a\u003e\u003c/code\u003e for children of \u003ccode\u003e\u003ca\u003eAnyLabelError\u003c/a\u003e\u003c/code\u003e in\n the exception hierarchy.\n\u003c/p\u003e",
          "module": "LIO.Error",
          "name": "lerrFromException",
          "package": "lio",
          "signature": "SomeException -\u003e Maybe e",
          "source": "src/LIO-Error.html#lerrFromException",
          "type": "function"
        },
        "index": {
          "description": "Definition of fromException for children of AnyLabelError in the exception hierarchy",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "lerrFromException",
          "normalized": "SomeException-\u003eMaybe a",
          "package": "lio",
          "partial": "From Exception",
          "signature": "SomeException-\u003eMaybe e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:lerrFromException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of \u003ccode\u003e\u003ca\u003etoException\u003c/a\u003e\u003c/code\u003e for children of \u003ccode\u003e\u003ca\u003eAnyLabelError\u003c/a\u003e\u003c/code\u003e in\n the exception hierarchy.\n\u003c/p\u003e",
          "module": "LIO.Error",
          "name": "lerrToException",
          "package": "lio",
          "signature": "e -\u003e SomeException",
          "source": "src/LIO-Error.html#lerrToException",
          "type": "function"
        },
        "index": {
          "description": "Definition of toException for children of AnyLabelError in the exception hierarchy",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "lerrToException",
          "normalized": "a-\u003eSomeException",
          "package": "lio",
          "partial": "To Exception",
          "signature": "e-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:lerrToException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes an action with a context string, which will be added to\n any label exception thrown.\n\u003c/p\u003e\u003cp\u003eNote: this function wraps an action with a \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e, and thus may\n incur a small runtime cost (though it is well under 100 ns on\n machines we benchmarked).\n\u003c/p\u003e",
          "module": "LIO.Error",
          "name": "withContext",
          "package": "lio",
          "signature": "String -\u003e LIO l a -\u003e LIO l a",
          "source": "src/LIO-Error.html#withContext",
          "type": "function"
        },
        "index": {
          "description": "Executes an action with context string which will be added to any label exception thrown Note this function wraps an action with catch and thus may incur small runtime cost though it is well under ns on machines we benchmarked",
          "hierarchy": "LIO Error",
          "module": "LIO.Error",
          "name": "withContext",
          "normalized": "String-\u003eLIO a b-\u003eLIO a b",
          "package": "lio",
          "partial": "Context",
          "signature": "String-\u003eLIO l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Error.html#v:withContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eException routines much like the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e ones in \u003ca\u003eControl.Exception\u003c/a\u003e (we\nduplicate the documentation below).  There are two differences,\nhowever.  First, LIO does not allow masking of asynchronous exceptions\n(since these are relied upon to kill a misbehaving thread).  Hence,\nroutines like \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e are not guaranteed to run if a thread is\nunconditionally killed.  Second, in a few cases (such as \u003ccode\u003elWait\u003c/code\u003e) it\nis possible for the current label to be raised above the current\nclearance as an exception is thrown, in which case these functions do\nnot catch the exception, either, since code cannot run under such\ncircumstances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LIO.Exception",
          "name": "Exception",
          "package": "lio",
          "source": "src/LIO-Exception.html",
          "type": "module"
        },
        "index": {
          "description": "Exception routines much like the IO ones in Control.Exception we duplicate the documentation below There are two differences however First LIO does not allow masking of asynchronous exceptions since these are relied upon to kill misbehaving thread Hence routines like onException are not guaranteed to run if thread is unconditionally killed Second in few cases such as lWait it is possible for the current label to be raised above the current clearance as an exception is thrown in which case these functions do not catch the exception either since code cannot run under such circumstances",
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "Exception",
          "package": "lio",
          "partial": "Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
          "module": "LIO.Exception",
          "name": "Exception",
          "package": "lio",
          "type": "class"
        },
        "index": {
          "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "Exception",
          "package": "lio",
          "partial": "Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#t:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eSomeException\u003c/code\u003e type is the root of the exception type hierarchy.\nWhen an exception of type \u003ccode\u003ee\u003c/code\u003e is thrown, behind the scenes it is\nencapsulated in a \u003ccode\u003eSomeException\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.Exception",
          "name": "SomeException",
          "package": "lio",
          "type": "data"
        },
        "index": {
          "description": "The SomeException type is the root of the exception type hierarchy When an exception of type is thrown behind the scenes it is encapsulated in SomeException",
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "SomeException",
          "package": "lio",
          "partial": "Some Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#t:SomeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.Exception",
          "name": "SomeException",
          "package": "lio",
          "signature": "e -\u003e SomeException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "SomeException",
          "normalized": "a-\u003eSomeException",
          "package": "lio",
          "partial": "Some Exception",
          "signature": "e-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#v:SomeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen you want to acquire a resource, do some work with it, and\n then release the resource, it is a good idea to use \u003ccode\u003ebracket\u003c/code\u003e,\n because bracket will install the necessary exception handler to\n release the resource in the event that an exception is raised\n during the computation. If an exception is raised, then bracket\n will re-raise the exception (after performing the release). \n\u003c/p\u003e",
          "module": "LIO.Exception",
          "name": "bracket",
          "package": "lio",
          "signature": "LIO l a-\u003e (a -\u003e LIO l c)-\u003e (a -\u003e LIO l b)-\u003e LIO l b",
          "type": "function"
        },
        "index": {
          "description": "When you want to acquire resource do some work with it and then release the resource it is good idea to use bracket because bracket will install the necessary exception handler to release the resource in the event that an exception is raised during the computation If an exception is raised then bracket will re-raise the exception after performing the release",
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "bracket",
          "normalized": "LIO a b-\u003e(b-\u003eLIO a c)-\u003e(b-\u003eLIO a d)-\u003eLIO a d",
          "package": "lio",
          "signature": "LIO l a-\u003e(a-\u003eLIO l c)-\u003e(a-\u003eLIO l b)-\u003eLIO l b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around IO catch.  The only subtlety is that code\n is not allowed to run unless the current label can flow to the\n current clearance.  Hence, if the label exceeds the clearance, the\n exception is not caught.  (Only a few conditions such as \u003ccode\u003elWait\u003c/code\u003e or\n raising the clearance within \u003ccode\u003escopeClearance\u003c/code\u003e can lead to the label\n exceeding the clarance, and an exception is always thrown at the\n time this happens.)\n\u003c/p\u003e",
          "module": "LIO.Exception",
          "name": "catch",
          "package": "lio",
          "signature": "LIO l a -\u003e (e -\u003e LIO l a) -\u003e LIO l a",
          "source": "src/LIO-Exception.html#catch",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around IO catch The only subtlety is that code is not allowed to run unless the current label can flow to the current clearance Hence if the label exceeds the clearance the exception is not caught Only few conditions such as lWait or raising the clearance within scopeClearance can lead to the label exceeding the clarance and an exception is always thrown at the time this happens",
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "catch",
          "normalized": "LIO a b-\u003e(c-\u003eLIO a b)-\u003eLIO a b",
          "package": "lio",
          "signature": "LIO l a-\u003e(e-\u003eLIO l a)-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForces its argument to be evaluated to weak head normal form when\n the resultant \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e action is executed.\n\u003c/p\u003e",
          "module": "LIO.Exception",
          "name": "evaluate",
          "package": "lio",
          "signature": "a -\u003e LIO l a",
          "source": "src/LIO-Exception.html#evaluate",
          "type": "function"
        },
        "index": {
          "description": "Forces its argument to be evaluated to weak head normal form when the resultant LIO action is executed",
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "evaluate",
          "normalized": "a-\u003eLIO b a",
          "package": "lio",
          "signature": "a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#v:evaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e where the return value from the first\n computation is not required. \n\u003c/p\u003e",
          "module": "LIO.Exception",
          "name": "finally",
          "package": "lio",
          "signature": "LIO l a -\u003e LIO l b -\u003e LIO l a",
          "source": "src/LIO-Exception.html#finally",
          "type": "function"
        },
        "index": {
          "description": "variant of bracket where the return value from the first computation is not required",
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "finally",
          "normalized": "LIO a b-\u003eLIO a c-\u003eLIO a b",
          "package": "lio",
          "signature": "LIO l a-\u003eLIO l b-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.Exception",
          "name": "fromException",
          "package": "lio",
          "signature": "SomeException -\u003e Maybe e",
          "type": "method"
        },
        "index": {
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "fromException",
          "normalized": "SomeException-\u003eMaybe a",
          "package": "lio",
          "partial": "Exception",
          "signature": "SomeException-\u003eMaybe e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#v:fromException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e with the arguments swapped around.\n\u003c/p\u003e",
          "module": "LIO.Exception",
          "name": "handle",
          "package": "lio",
          "signature": "(e -\u003e LIO l a) -\u003e LIO l a -\u003e LIO l a",
          "source": "src/LIO-Exception.html#handle",
          "type": "function"
        },
        "index": {
          "description": "version of catch with the arguments swapped around",
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "handle",
          "normalized": "(a-\u003eLIO b c)-\u003eLIO b c-\u003eLIO b c",
          "package": "lio",
          "signature": "(e-\u003eLIO l a)-\u003eLIO l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e, but only performs the final action if there was\n an exception raised by the computation. \n\u003c/p\u003e",
          "module": "LIO.Exception",
          "name": "onException",
          "package": "lio",
          "signature": "LIO l a -\u003e LIO l b -\u003e LIO l a",
          "source": "src/LIO-Exception.html#onException",
          "type": "function"
        },
        "index": {
          "description": "Like finally but only performs the final action if there was an exception raised by the computation",
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "onException",
          "normalized": "LIO a b-\u003eLIO a c-\u003eLIO a b",
          "package": "lio",
          "partial": "Exception",
          "signature": "LIO l a-\u003eLIO l b-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#v:onException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception.\n\u003c/p\u003e",
          "module": "LIO.Exception",
          "name": "throwLIO",
          "package": "lio",
          "signature": "e -\u003e LIO l a",
          "source": "src/LIO-Exception.html#throwLIO",
          "type": "function"
        },
        "index": {
          "description": "Throw an exception",
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "throwLIO",
          "normalized": "a-\u003eLIO b c",
          "package": "lio",
          "partial": "LIO",
          "signature": "e-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#v:throwLIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.Exception",
          "name": "toException",
          "package": "lio",
          "signature": "e -\u003e SomeException",
          "type": "method"
        },
        "index": {
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "toException",
          "normalized": "a-\u003eSomeException",
          "package": "lio",
          "partial": "Exception",
          "signature": "e-\u003eSomeException",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#v:toException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to catch, but returns an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result which is\n (\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e) if no exception of type \u003ccode\u003ee\u003c/code\u003e was raised, or (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003eex\u003c/code\u003e) if an exception of type \u003ccode\u003ee\u003c/code\u003e was raised and its value is \u003ccode\u003eex\u003c/code\u003e.\n If any other type of exception is raised than it will be propogated\n up to the next enclosing exception handler.\n\u003c/p\u003e",
          "module": "LIO.Exception",
          "name": "try",
          "package": "lio",
          "signature": "LIO l a -\u003e LIO l (Either a1 a)",
          "source": "src/LIO-Exception.html#try",
          "type": "function"
        },
        "index": {
          "description": "Similar to catch but returns an Either result which is Right if no exception of type was raised or Left ex if an exception of type was raised and its value is ex If any other type of exception is raised than it will be propogated up to the next enclosing exception handler",
          "hierarchy": "LIO Exception",
          "module": "LIO.Exception",
          "name": "try",
          "normalized": "LIO a b-\u003eLIO a(Either b b)",
          "package": "lio",
          "signature": "LIO l a-\u003eLIO l(Either a a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Exception.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable reference in the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad. As with other objects in LIO,\nmutable references have an associated label that is used to impose\nrestrictions on its operations. In fact, labeled references\n(\u003ccode\u003e\u003ca\u003eLIORef\u003c/a\u003e\u003c/code\u003es) are simply labeled \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003es with read and write access\nrestricted according to the label. This module is analogous to\n\u003ca\u003eData.IORef\u003c/a\u003e, but the operations take place in the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LIO.LIORef",
          "name": "LIORef",
          "package": "lio",
          "source": "src/LIO-LIORef.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable reference in the LIO monad As with other objects in LIO mutable references have an associated label that is used to impose restrictions on its operations In fact labeled references LIORef are simply labeled IORef with read and write access restricted according to the label This module is analogous to Data.IORef but the operations take place in the LIO monad",
          "hierarchy": "LIO LIORef",
          "module": "LIO.LIORef",
          "name": "LIORef",
          "package": "lio",
          "partial": "LIORef",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-LIORef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eLIORef\u003c/code\u003e is an \u003ccode\u003eIORef\u003c/code\u003e with an associated, fixed label.  The\n restriction to an immutable label comes from the fact that it is\n possible to leak information through the label itself, since we\n wish to allow \u003ccode\u003eLIORef\u003c/code\u003e to be an instance of \u003ccode\u003eLabelOf\u003c/code\u003e.  Of course,\n you can create an \u003ccode\u003eLIORef\u003c/code\u003e of \u003ccode\u003eLabeled\u003c/code\u003e to get a limited form of\n flow-sensitivity.\n\u003c/p\u003e",
          "module": "LIO.LIORef",
          "name": "LIORef",
          "package": "lio",
          "source": "src/LIO-LIORef.html#LIORef",
          "type": "type"
        },
        "index": {
          "description": "An LIORef is an IORef with an associated fixed label The restriction to an immutable label comes from the fact that it is possible to leak information through the label itself since we wish to allow LIORef to be an instance of LabelOf Of course you can create an LIORef of Labeled to get limited form of flow-sensitivity",
          "hierarchy": "LIO LIORef",
          "module": "LIO.LIORef",
          "name": "LIORef",
          "package": "lio",
          "partial": "LIORef",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-LIORef.html#t:LIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically modifies the contents of an \u003ccode\u003e\u003ca\u003eLIORef\u003c/a\u003e\u003c/code\u003e. It is required\n that the label of the reference be above the current label, but\n below the current clearance. Moreover, since this function can be\n used to directly read the value of the stored reference, the\n computation is \"tainted\" by the reference label (i.e., the\n current label is raised to the \u003ccode\u003ejoin\u003c/code\u003e of the current and reference\n labels). These checks and label raise are done by \u003ccode\u003e\u003ca\u003eguardWrite\u003c/a\u003e\u003c/code\u003e,\n which will raise a \u003ccode\u003e\u003ca\u003eLabelError\u003c/a\u003e\u003c/code\u003e exception if any of the IFC\n conditions cannot be satisfied.\n\u003c/p\u003e",
          "module": "LIO.LIORef",
          "name": "atomicModifyLIORef",
          "package": "lio",
          "signature": "LIORef l a -\u003e (a -\u003e (a, b)) -\u003e LIO l b",
          "source": "src/LIO-LIORef.html#atomicModifyLIORef",
          "type": "function"
        },
        "index": {
          "description": "Atomically modifies the contents of an LIORef It is required that the label of the reference be above the current label but below the current clearance Moreover since this function can be used to directly read the value of the stored reference the computation is tainted by the reference label i.e the current label is raised to the join of the current and reference labels These checks and label raise are done by guardWrite which will raise LabelError exception if any of the IFC conditions cannot be satisfied",
          "hierarchy": "LIO LIORef",
          "module": "LIO.LIORef",
          "name": "atomicModifyLIORef",
          "normalized": "LIORef a b-\u003e(b-\u003e(b,c))-\u003eLIO a c",
          "package": "lio",
          "partial": "Modify LIORef",
          "signature": "LIORef l a-\u003e(a-\u003e(a,b))-\u003eLIO l b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-LIORef.html#v:atomicModifyLIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eatomicModifyLIORef\u003c/a\u003e\u003c/code\u003e except \u003ccode\u003eatomicModifyLIORefP\u003c/code\u003e takes a\n set of privileges and uses \u003ccode\u003e\u003ca\u003eguardWriteP\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eguardWrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.LIORef",
          "name": "atomicModifyLIORefP",
          "package": "lio",
          "signature": "Priv p -\u003e LIORef l a -\u003e (a -\u003e (a, b)) -\u003e LIO l b",
          "source": "src/LIO-LIORef.html#atomicModifyLIORefP",
          "type": "function"
        },
        "index": {
          "description": "Same as atomicModifyLIORef except atomicModifyLIORefP takes set of privileges and uses guardWriteP instead of guardWrite",
          "hierarchy": "LIO LIORef",
          "module": "LIO.LIORef",
          "name": "atomicModifyLIORefP",
          "normalized": "Priv a-\u003eLIORef b c-\u003e(c-\u003e(c,d))-\u003eLIO b d",
          "package": "lio",
          "partial": "Modify LIORef",
          "signature": "Priv p-\u003eLIORef l a-\u003e(a-\u003e(a,b))-\u003eLIO l b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-LIORef.html#v:atomicModifyLIORefP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the contents of a labeled reference.  The mutation is\n performed by a a pure function, which, because of laziness, is not\n actually evaluated until such point as a (possibly higher-labeled)\n thread actually reads the \u003ccode\u003e\u003ca\u003eLIORef\u003c/a\u003e\u003c/code\u003e.  The caller of \u003ccode\u003emodifyLIORef\u003c/code\u003e\n learns no information about the previous contents the \u003ccode\u003e\u003ca\u003eLIORef\u003c/a\u003e\u003c/code\u003e.\n For that reason, there is no need to raise the current label.  The\n \u003ccode\u003e\u003ca\u003eLIORef\u003c/a\u003e\u003c/code\u003e's label must still lie between the current label and\n clearance, however (as enforced by \u003ccode\u003e\u003ca\u003eguardAlloc\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "LIO.LIORef",
          "name": "modifyLIORef",
          "package": "lio",
          "signature": "LIORef l a-\u003e (a -\u003e a)-\u003e LIO l ()",
          "type": "function"
        },
        "index": {
          "description": "Mutate the contents of labeled reference The mutation is performed by pure function which because of laziness is not actually evaluated until such point as possibly higher-labeled thread actually reads the LIORef The caller of modifyLIORef learns no information about the previous contents the LIORef For that reason there is no need to raise the current label The LIORef label must still lie between the current label and clearance however as enforced by guardAlloc",
          "hierarchy": "LIO LIORef",
          "module": "LIO.LIORef",
          "name": "modifyLIORef",
          "normalized": "LIORef a b-\u003e(b-\u003eb)-\u003eLIO a()",
          "package": "lio",
          "partial": "LIORef",
          "signature": "LIORef l a-\u003e(a-\u003ea)-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-LIORef.html#v:modifyLIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emodifyLIORef\u003c/a\u003e\u003c/code\u003e, but takes a privilege argument and guards\n execution with \u003ccode\u003e\u003ca\u003eguardAllocP\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eguardAlloc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.LIORef",
          "name": "modifyLIORefP",
          "package": "lio",
          "signature": "Priv p -\u003e LIORef l a -\u003e (a -\u003e a) -\u003e LIO l ()",
          "source": "src/LIO-LIORef.html#modifyLIORefP",
          "type": "function"
        },
        "index": {
          "description": "Like modifyLIORef but takes privilege argument and guards execution with guardAllocP instead of guardAlloc",
          "hierarchy": "LIO LIORef",
          "module": "LIO.LIORef",
          "name": "modifyLIORefP",
          "normalized": "Priv a-\u003eLIORef b c-\u003e(c-\u003ec)-\u003eLIO b()",
          "package": "lio",
          "partial": "LIORef",
          "signature": "Priv p-\u003eLIORef l a-\u003e(a-\u003ea)-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-LIORef.html#v:modifyLIORefP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new reference with a particularlabel.  The label\n specified must be between the thread's current label and clearance,\n as enforced by \u003ccode\u003e\u003ca\u003eguardAlloc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.LIORef",
          "name": "newLIORef",
          "package": "lio",
          "signature": "l-\u003e a-\u003e LIO l (LIORef l a)",
          "type": "function"
        },
        "index": {
          "description": "Create new reference with particularlabel The label specified must be between the thread current label and clearance as enforced by guardAlloc",
          "hierarchy": "LIO LIORef",
          "module": "LIO.LIORef",
          "name": "newLIORef",
          "normalized": "a-\u003eb-\u003eLIO a(LIORef a b)",
          "package": "lio",
          "partial": "LIORef",
          "signature": "l-\u003ea-\u003eLIO l(LIORef l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-LIORef.html#v:newLIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003enewLIORef\u003c/a\u003e\u003c/code\u003e except \u003ccode\u003enewLIORefP\u003c/code\u003e takes privileges which\n make the comparison to the current label more permissive, as\n enforced by \u003ccode\u003e\u003ca\u003eguardAllocP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.LIORef",
          "name": "newLIORefP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e a -\u003e LIO l (LIORef l a)",
          "source": "src/LIO-LIORef.html#newLIORefP",
          "type": "function"
        },
        "index": {
          "description": "Same as newLIORef except newLIORefP takes privileges which make the comparison to the current label more permissive as enforced by guardAllocP",
          "hierarchy": "LIO LIORef",
          "module": "LIO.LIORef",
          "name": "newLIORefP",
          "normalized": "Priv a-\u003eb-\u003ec-\u003eLIO b(LIORef b c)",
          "package": "lio",
          "partial": "LIORef",
          "signature": "Priv p-\u003el-\u003ea-\u003eLIO l(LIORef l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-LIORef.html#v:newLIORefP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the value of a labeled reference. A read succeeds only if\n the label of the reference is below the current\n clearance. Moreover, the current label is raised to the \u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e of\n the current label and the reference label.  To avoid failures\n (introduced by the \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e guard) use \u003ccode\u003elabelOf\u003c/code\u003e to check that a\n read will succeed.\n\u003c/p\u003e",
          "module": "LIO.LIORef",
          "name": "readLIORef",
          "package": "lio",
          "signature": "LIORef l a -\u003e LIO l a",
          "source": "src/LIO-LIORef.html#readLIORef",
          "type": "function"
        },
        "index": {
          "description": "Read the value of labeled reference read succeeds only if the label of the reference is below the current clearance Moreover the current label is raised to the lub of the current label and the reference label To avoid failures introduced by the taint guard use labelOf to check that read will succeed",
          "hierarchy": "LIO LIORef",
          "module": "LIO.LIORef",
          "name": "readLIORef",
          "normalized": "LIORef a b-\u003eLIO a b",
          "package": "lio",
          "partial": "LIORef",
          "signature": "LIORef l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-LIORef.html#v:readLIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ereadLIORef\u003c/a\u003e\u003c/code\u003e, except \u003ccode\u003ereadLIORefP\u003c/code\u003e takes a privilege\n object which is used when the current label is raised (using\n \u003ccode\u003e\u003ca\u003etaintP\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "LIO.LIORef",
          "name": "readLIORefP",
          "package": "lio",
          "signature": "Priv p -\u003e LIORef l a -\u003e LIO l a",
          "source": "src/LIO-LIORef.html#readLIORefP",
          "type": "function"
        },
        "index": {
          "description": "Same as readLIORef except readLIORefP takes privilege object which is used when the current label is raised using taintP instead of taint",
          "hierarchy": "LIO LIORef",
          "module": "LIO.LIORef",
          "name": "readLIORefP",
          "normalized": "Priv a-\u003eLIORef b c-\u003eLIO b c",
          "package": "lio",
          "partial": "LIORef",
          "signature": "Priv p-\u003eLIORef l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-LIORef.html#v:readLIORefP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value into a labeled reference. A write succeeds if\n the current label can-flow-to the label of the reference, and the\n label of the reference can-flow-to the current clearance. Otherwise,\n an exception is raised by the underlying \u003ccode\u003e\u003ca\u003eguardAlloc\u003c/a\u003e\u003c/code\u003e guard.\n\u003c/p\u003e",
          "module": "LIO.LIORef",
          "name": "writeLIORef",
          "package": "lio",
          "signature": "LIORef l a -\u003e a -\u003e LIO l ()",
          "source": "src/LIO-LIORef.html#writeLIORef",
          "type": "function"
        },
        "index": {
          "description": "Write new value into labeled reference write succeeds if the current label can-flow-to the label of the reference and the label of the reference can-flow-to the current clearance Otherwise an exception is raised by the underlying guardAlloc guard",
          "hierarchy": "LIO LIORef",
          "module": "LIO.LIORef",
          "name": "writeLIORef",
          "normalized": "LIORef a b-\u003eb-\u003eLIO a()",
          "package": "lio",
          "partial": "LIORef",
          "signature": "LIORef l a-\u003ea-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-LIORef.html#v:writeLIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewriteLIORef\u003c/a\u003e\u003c/code\u003e except \u003ccode\u003ewriteLIORefP\u003c/code\u003e takes a set of\n privileges which are accounted for in comparing the label of the\n reference to the current label.\n\u003c/p\u003e",
          "module": "LIO.LIORef",
          "name": "writeLIORefP",
          "package": "lio",
          "signature": "Priv p -\u003e LIORef l a -\u003e a -\u003e LIO l ()",
          "source": "src/LIO-LIORef.html#writeLIORefP",
          "type": "function"
        },
        "index": {
          "description": "Same as writeLIORef except writeLIORefP takes set of privileges which are accounted for in comparing the label of the reference to the current label",
          "hierarchy": "LIO LIORef",
          "module": "LIO.LIORef",
          "name": "writeLIORefP",
          "normalized": "Priv a-\u003eLIORef b c-\u003ec-\u003eLIO b()",
          "package": "lio",
          "partial": "LIORef",
          "signature": "Priv p-\u003eLIORef l a-\u003ea-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-LIORef.html#v:writeLIORefP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.Label",
          "name": "Label",
          "package": "lio",
          "source": "src/LIO-Label.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "Label",
          "package": "lio",
          "partial": "Label",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class defines the operations necessary to make a label into\n a lattice (see \u003ca\u003ehttp://en.wikipedia.org/wiki/Lattice_(order)\u003c/a\u003e).\n \u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e partially orders labels.\n \u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eglb\u003c/a\u003e\u003c/code\u003e compute the least upper bound and greatest lower\n bound of two labels, respectively.\n\u003c/p\u003e",
          "module": "LIO.Label",
          "name": "Label",
          "package": "lio",
          "source": "src/LIO-Label.html#Label",
          "type": "class"
        },
        "index": {
          "description": "This class defines the operations necessary to make label into lattice see http en.wikipedia.org wiki Lattice order canFlowTo partially orders labels lub and glb compute the least upper bound and greatest lower bound of two labels respectively",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "Label",
          "package": "lio",
          "partial": "Label",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric \u003ccode\u003e\u003ca\u003ePrivDesc\u003c/a\u003e\u003c/code\u003e used to denote the lack of privileges.  Works\n with any \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e type.  This is only a privilege description; a\n more useful symbol is \u003ccode\u003e\u003ca\u003enoPrivs\u003c/a\u003e\u003c/code\u003e, which actually embodies the\n \u003ccode\u003eNoPrivs\u003c/code\u003e privilege.\n\u003c/p\u003e",
          "module": "LIO.Label",
          "name": "NoPrivs",
          "package": "lio",
          "source": "src/LIO-Label.html#NoPrivs",
          "type": "data"
        },
        "index": {
          "description": "Generic PrivDesc used to denote the lack of privileges Works with any Label type This is only privilege description more useful symbol is noPrivs which actually embodies the NoPrivs privilege",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "NoPrivs",
          "package": "lio",
          "partial": "No Privs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#t:NoPrivs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper that can be used by trusted code to transform a\n powerless description of privileges into actual privileges.  The\n constructor, \u003ccode\u003e\u003ca\u003ePrivTCB\u003c/a\u003e\u003c/code\u003e, is dangerous as it allows creation of\n arbitrary privileges.  Hence it is only exported by the unsafe\n module \u003ca\u003eLIO.TCB\u003c/a\u003e.  A safe way to create arbitrary privileges is to\n call \u003ccode\u003eprivInit\u003c/code\u003e (see \u003ca\u003eLIO.Run\u003c/a\u003e) from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad\n before running your \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "LIO.Label",
          "name": "Priv",
          "package": "lio",
          "source": "src/LIO-TCB.html#Priv",
          "type": "data"
        },
        "index": {
          "description": "newtype wrapper that can be used by trusted code to transform powerless description of privileges into actual privileges The constructor PrivTCB is dangerous as it allows creation of arbitrary privileges Hence it is only exported by the unsafe module LIO.TCB safe way to create arbitrary privileges is to call privInit see LIO.Run from the IO monad before running your LIO computation",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "Priv",
          "package": "lio",
          "partial": "Priv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#t:Priv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class represents privilege descriptions, which define a\n pre-order on labels in which distinct labels become equivalent.\n The pre-oder implied by a privilege description is specified by the\n method \u003ccode\u003e\u003ca\u003ecanFlowToP\u003c/a\u003e\u003c/code\u003e.  In addition, this this class defines a method\n \u003ccode\u003e\u003ca\u003edowngradeP\u003c/a\u003e\u003c/code\u003e, which is important for finding least labels\n satisfying a privilege equivalence.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003edowngradeP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(The \u003ccode\u003e\u003ca\u003edowngradeP\u003c/a\u003e\u003c/code\u003e requirement represents the fact that a generic\n \u003ccode\u003e\u003ca\u003ecanFlowToP\u003c/a\u003e\u003c/code\u003e can be implemented efficiently in terms of\n \u003ccode\u003e\u003ca\u003edowngradeP\u003c/a\u003e\u003c/code\u003e, but not vice-versa.)\n\u003c/p\u003e",
          "module": "LIO.Label",
          "name": "PrivDesc",
          "package": "lio",
          "source": "src/LIO-Label.html#PrivDesc",
          "type": "class"
        },
        "index": {
          "description": "This class represents privilege descriptions which define pre-order on labels in which distinct labels become equivalent The pre-oder implied by privilege description is specified by the method canFlowToP In addition this this class defines method downgradeP which is important for finding least labels satisfying privilege equivalence Minimal complete definition downgradeP The downgradeP requirement represents the fact that generic canFlowToP can be implemented efficiently in terms of downgradeP but not vice-versa",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "PrivDesc",
          "package": "lio",
          "partial": "Priv Desc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#t:PrivDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery privilege type must be an instance of \u003ccode\u003e\u003ca\u003eSpeaksFor\u003c/a\u003e\u003c/code\u003e, which is\n a partial order specifying when one privilege value is at least as\n powerful as another.  If \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecanFlowToP\u003c/a\u003e\u003c/code\u003e p1 l1 l2\u003c/code\u003e and \u003ccode\u003ep2\n \u003ccode\u003e\u003ca\u003espeaksFor\u003c/a\u003e\u003c/code\u003e p1\u003c/code\u003e, then it should also be true that \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecanFlowToP\u003c/a\u003e\u003c/code\u003e p2\n l1 l2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs a partial order, \u003ccode\u003e\u003ca\u003eSpeaksFor\u003c/a\u003e\u003c/code\u003e should obey the reflexivity,\n antisymmetry and transitivity laws.  However, if you do not wish to\n allow delegation of a particular privilege type, you can define\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003espeaksFor\u003c/a\u003e\u003c/code\u003e _ _ = False\u003c/code\u003e (which violates the reflexivity law, but\n is reasonable when you don't want the partial order).\n\u003c/p\u003e",
          "module": "LIO.Label",
          "name": "SpeaksFor",
          "package": "lio",
          "source": "src/LIO-Label.html#SpeaksFor",
          "type": "class"
        },
        "index": {
          "description": "Every privilege type must be an instance of SpeaksFor which is partial order specifying when one privilege value is at least as powerful as another If canFlowToP p1 l1 l2 and p2 speaksFor p1 then it should also be true that canFlowToP p2 l1 l2 As partial order SpeaksFor should obey the reflexivity antisymmetry and transitivity laws However if you do not wish to allow delegation of particular privilege type you can define speaksFor False which violates the reflexivity law but is reasonable when you don want the partial order",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "SpeaksFor",
          "package": "lio",
          "partial": "Speaks For",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#t:SpeaksFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.Label",
          "name": "NoPrivs",
          "package": "lio",
          "signature": "NoPrivs",
          "source": "src/LIO-Label.html#NoPrivs",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "NoPrivs",
          "package": "lio",
          "partial": "No Privs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#v:NoPrivs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eCan-flow-to\u003c/em\u003e relation (&#8849;). An entity labeled \u003ccode\u003el1\u003c/code\u003e should\n be allowed to affect an entity \u003ccode\u003el2\u003c/code\u003e only if \u003ccode\u003el1 `canFlowTo`\n l2\u003c/code\u003e. This relation on labels is at least a partial order (see\n \u003ca\u003ehttps://en.wikipedia.org/wiki/Partially_ordered_set\u003c/a\u003e), and must\n satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Reflexivity: \u003ccode\u003el1 `canFlowTo` l1\u003c/code\u003e for any \u003ccode\u003el1\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Antisymmetry: If \u003ccode\u003el1 `canFlowTo` l2\u003c/code\u003e and\n   \u003ccode\u003el2 `canFlowTo` l1\u003c/code\u003e then \u003ccode\u003el1 = l2\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Transitivity: If \u003ccode\u003el1 `canFlowTo` l2\u003c/code\u003e and\n   \u003ccode\u003el2 `canFlowTo` l3\u003c/code\u003e then \u003ccode\u003el1 `canFlowTo` l3\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWhen used infix, has fixity:\n\u003c/p\u003e\u003cpre\u003e infix 4 `canFlowTo`\n\u003c/pre\u003e",
          "module": "LIO.Label",
          "name": "canFlowTo",
          "package": "lio",
          "signature": "l -\u003e l -\u003e Bool",
          "source": "src/LIO-Label.html#canFlowTo",
          "type": "method"
        },
        "index": {
          "description": "Can-flow-to relation An entity labeled l1 should be allowed to affect an entity l2 only if l1 canFlowTo l2 This relation on labels is at least partial order see https en.wikipedia.org wiki Partially ordered set and must satisfy the following laws Reflexivity l1 canFlowTo l1 for any l1 Antisymmetry If l1 canFlowTo l2 and l2 canFlowTo l1 then l1 l2 Transitivity If l1 canFlowTo l2 and l2 canFlowTo l3 then l1 canFlowTo l3 When used infix has fixity infix canFlowTo",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "canFlowTo",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "lio",
          "partial": "Flow To",
          "signature": "l-\u003el-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#v:canFlowTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecanFlowToP p l1 l2\u003c/code\u003e determines whether \u003ccode\u003ep\u003c/code\u003e describes\n sufficient privileges to observe data labeled \u003ccode\u003el1\u003c/code\u003e and\n subsequently write it to an object labeled \u003ccode\u003el2\u003c/code\u003e.  The function\n returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if and only if either \u003ccode\u003ecanFlowTo l1 l2\u003c/code\u003e or \u003ccode\u003el1\n and l2\u003c/code\u003e are equivalent under \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition is:\n\u003c/p\u003e\u003cpre\u003e canFlowToP p l1 l2 = downgradeP p l1 `canFlowTo` l2\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ecanFlowToP\u003c/code\u003e is a method rather than a function so that it can\n be optimized in label-specific ways.  However, custom\n definitions should behave identically to the default.\n\u003c/p\u003e",
          "module": "LIO.Label",
          "name": "canFlowToP",
          "package": "lio",
          "signature": "p -\u003e l -\u003e l -\u003e Bool",
          "source": "src/LIO-Label.html#canFlowToP",
          "type": "method"
        },
        "index": {
          "description": "canFlowToP l1 l2 determines whether describes sufficient privileges to observe data labeled l1 and subsequently write it to an object labeled l2 The function returns True if and only if either canFlowTo l1 l2 or l1 and l2 are equivalent under The default definition is canFlowToP l1 l2 downgradeP l1 canFlowTo l2 canFlowToP is method rather than function so that it can be optimized in label-specific ways However custom definitions should behave identically to the default",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "canFlowToP",
          "normalized": "a-\u003eb-\u003eb-\u003eBool",
          "package": "lio",
          "partial": "Flow To",
          "signature": "p-\u003el-\u003el-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#v:canFlowToP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrivileges are described in terms of a pre-order on labels in\n which sets of distinct labels become equivalent.  \u003ccode\u003edowngradeP p\n l\u003c/code\u003e returns the lowest of all labels equivalent to \u003ccode\u003el\u003c/code\u003e under\n privilege description \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLess formally, \u003ccode\u003edowngradeP p l\u003c/code\u003e returns a label representing\n the furthest you can downgrade data labeled \u003ccode\u003el\u003c/code\u003e given\n privileges described by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYet another way to view this function is that \u003ccode\u003edowngradeP p l\u003c/code\u003e\n returns the greatest lower bound (under \u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e) of the set\n of all labels \u003ccode\u003el'\u003c/code\u003e such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecanFlowToP\u003c/a\u003e\u003c/code\u003e p l' l\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.Label",
          "name": "downgradeP",
          "package": "lio",
          "signature": "downgradeP",
          "source": "src/LIO-Label.html#downgradeP",
          "type": "method"
        },
        "index": {
          "description": "Privileges are described in terms of pre-order on labels in which sets of distinct labels become equivalent downgradeP returns the lowest of all labels equivalent to under privilege description Less formally downgradeP returns label representing the furthest you can downgrade data labeled given privileges described by Yet another way to view this function is that downgradeP returns the greatest lower bound under canFlowTo of the set of all labels such that canFlowToP",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "downgradeP",
          "package": "lio",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#v:downgradeP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eGreatest lower bound\u003c/em\u003e, or meet, of two labels. For any two\n labels \u003ccode\u003el1\u003c/code\u003e and \u003ccode\u003el2\u003c/code\u003e, if \u003ccode\u003elmeet = l1 `glb` l2\u003c/code\u003e, it must be\n that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003elmeet `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l1\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003elmeet `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l2\u003c/code\u003e, and\n\u003c/li\u003e\u003cli\u003e There is no label \u003ccode\u003el /= lmeet\u003c/code\u003e such that \u003ccode\u003el `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l1\u003c/code\u003e,\n   \u003ccode\u003el `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l2\u003c/code\u003e, and \u003ccode\u003elmeet `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l\u003c/code\u003e.  In other\n   words \u003ccode\u003elmeet\u003c/code\u003e is the greatest element flowing to both \u003ccode\u003el1\u003c/code\u003e and\n   \u003ccode\u003el2\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWhen used infix, has fixity:\n\u003c/p\u003e\u003cpre\u003e infixl 5 `glb`\n\u003c/pre\u003e",
          "module": "LIO.Label",
          "name": "glb",
          "package": "lio",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/LIO-Label.html#glb",
          "type": "method"
        },
        "index": {
          "description": "Greatest lower bound or meet of two labels For any two labels l1 and l2 if lmeet l1 glb l2 it must be that lmeet canFlowTo l1 lmeet canFlowTo l2 and There is no label lmeet such that canFlowTo l1 canFlowTo l2 and lmeet canFlowTo In other words lmeet is the greatest element flowing to both l1 and l2 When used infix has fixity infixl glb",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "glb",
          "normalized": "a-\u003ea-\u003ea",
          "package": "lio",
          "signature": "l-\u003el-\u003el",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#v:glb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses dynamic typing to return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the type of the argument\n is \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e (for any \u003ccode\u003ea\u003c/code\u003e).  Mostly useful to prevent users from\n accidentally wrapping \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e objects inside other \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e objects or\n accidentally including real privileges in an exception.\n\u003c/p\u003e",
          "module": "LIO.Label",
          "name": "isPriv",
          "package": "lio",
          "signature": "p -\u003e Bool",
          "source": "src/LIO-Label.html#isPriv",
          "type": "function"
        },
        "index": {
          "description": "Uses dynamic typing to return True iff the type of the argument is Priv for any Mostly useful to prevent users from accidentally wrapping Priv objects inside other Priv objects or accidentally including real privileges in an exception",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "isPriv",
          "normalized": "a-\u003eBool",
          "package": "lio",
          "partial": "Priv",
          "signature": "p-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#v:isPriv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the \u003cem\u003eleast upper bound\u003c/em\u003e, or join, of two labels.  When\n data carrying two different labels is mixed together in a\n document, the \u003ccode\u003elub\u003c/code\u003e of the two labels is the lowest safe value\n with which to label the result.\n\u003c/p\u003e\u003cp\u003eMore formally, for any two labels \u003ccode\u003el1\u003c/code\u003e and \u003ccode\u003el2\u003c/code\u003e, if \u003ccode\u003eljoin = l1\n `lub` l2\u003c/code\u003e, it must be that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eL_1 `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` ljoin\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eL_2 `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` ljoin\u003c/code\u003e, and\n\u003c/li\u003e\u003cli\u003e There is no label \u003ccode\u003el /= ljoin\u003c/code\u003e such that \u003ccode\u003el1 `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l\u003c/code\u003e,\n   \u003ccode\u003el2 `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l\u003c/code\u003e, and \u003ccode\u003el `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` ljoin\u003c/code\u003e.  In other\n   words \u003ccode\u003eljoin\u003c/code\u003e is the least element to which both \u003ccode\u003el1\u003c/code\u003e and \u003ccode\u003el2\u003c/code\u003e\n   can flow.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWhen used infix, has fixity:\n\u003c/p\u003e\u003cpre\u003e infixl 5 `lub`\n\u003c/pre\u003e",
          "module": "LIO.Label",
          "name": "lub",
          "package": "lio",
          "signature": "l -\u003e l -\u003e l",
          "source": "src/LIO-Label.html#lub",
          "type": "method"
        },
        "index": {
          "description": "Compute the least upper bound or join of two labels When data carrying two different labels is mixed together in document the lub of the two labels is the lowest safe value with which to label the result More formally for any two labels l1 and l2 if ljoin l1 lub l2 it must be that canFlowTo ljoin canFlowTo ljoin and There is no label ljoin such that l1 canFlowTo l2 canFlowTo and canFlowTo ljoin In other words ljoin is the least element to which both l1 and l2 can flow When used infix has fixity infixl lub",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "lub",
          "normalized": "a-\u003ea-\u003ea",
          "package": "lio",
          "signature": "l-\u003el-\u003el",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#v:lub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e object corresponding to \u003ccode\u003e\u003ca\u003eNoPrivs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.Label",
          "name": "noPrivs",
          "package": "lio",
          "signature": "Priv NoPrivs",
          "source": "src/LIO-Label.html#noPrivs",
          "type": "function"
        },
        "index": {
          "description": "Priv object corresponding to NoPrivs",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "noPrivs",
          "package": "lio",
          "partial": "Privs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#v:noPrivs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns privileges into a powerless description of the privileges\n by unwrapping the \u003ccode\u003e\u003ca\u003ePriv\u003c/a\u003e\u003c/code\u003e newtype.\n\u003c/p\u003e",
          "module": "LIO.Label",
          "name": "privDesc",
          "package": "lio",
          "signature": "Priv a -\u003e a",
          "source": "src/LIO-Label.html#privDesc",
          "type": "function"
        },
        "index": {
          "description": "Turns privileges into powerless description of the privileges by unwrapping the Priv newtype",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "privDesc",
          "normalized": "Priv a-\u003ea",
          "package": "lio",
          "partial": "Desc",
          "signature": "Priv a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#v:privDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003espeaksFor p1 p2\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff \u003ccode\u003ep1\u003c/code\u003e subsumes all the\n privileges of \u003ccode\u003ep2\u003c/code\u003e.  In other words, it is safe for \u003ccode\u003edelegate\u003c/code\u003e to\n hand out \u003ccode\u003ep2\u003c/code\u003e to a caller who already has \u003ccode\u003ep1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHas fixity:\n\u003c/p\u003e\u003cpre\u003e infix 4 `speaksFor`\n\u003c/pre\u003e",
          "module": "LIO.Label",
          "name": "speaksFor",
          "package": "lio",
          "signature": "p -\u003e p -\u003e Bool",
          "source": "src/LIO-Label.html#speaksFor",
          "type": "method"
        },
        "index": {
          "description": "speaksFor p1 p2 returns True iff p1 subsumes all the privileges of p2 In other words it is safe for delegate to hand out p2 to caller who already has p1 Has fixity infix speaksFor",
          "hierarchy": "LIO Label",
          "module": "LIO.Label",
          "name": "speaksFor",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "lio",
          "partial": "For",
          "signature": "p-\u003ep-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Label.html#v:speaksFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA data type \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e protects access to pure values (hence, we refer\nto values of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e as \u003cem\u003elabeled values\u003c/em\u003e).  The role of\nlabeled values is to allow users to associate heterogeneous labels (see\n\u003ca\u003eLIO.Label\u003c/a\u003e) with values. Although LIO's current label protects all\nvalues in scope with the current label, \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e values allow for\nmore fine grained protection. Moreover, trusted code may easily\ninspect \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e values, for instance, when inserting values into a\ndatabase.\n\u003c/p\u003e\u003cp\u003eWithout the appropriate privileges, one cannot produce a pure\n\u003cem\u003eunlabeled\u003c/em\u003e value that depends on a secret \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e value, or\nconversely produce a high-integrity \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e value based on pure\ndata.  This module exports functions for creating labeled values\n(\u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e), using the values protected by \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e by unlabeling them\n(\u003ccode\u003e\u003ca\u003eunlabel\u003c/a\u003e\u003c/code\u003e), and changing the value of a labeled value without\ninspection (\u003ccode\u003e\u003ca\u003erelabelLabeledP\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etaintLabeled\u003c/a\u003e\u003c/code\u003e).  \n\u003c/p\u003e\u003cp\u003eTwo \u003ccode\u003eApplicative\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e-like operations are also defined for\n\u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e data, namely \u003ccode\u003e\u003ca\u003elFmap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elAp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LIO.Labeled",
          "name": "Labeled",
          "package": "lio",
          "source": "src/LIO-Labeled.html",
          "type": "module"
        },
        "index": {
          "description": "data type Labeled protects access to pure values hence we refer to values of type Label as labeled values The role of labeled values is to allow users to associate heterogeneous labels see LIO.Label with values Although LIO current label protects all values in scope with the current label Labeled values allow for more fine grained protection Moreover trusted code may easily inspect Labeled values for instance when inserting values into database Without the appropriate privileges one cannot produce pure unlabeled value that depends on secret Labeled value or conversely produce high-integrity Labeled value based on pure data This module exports functions for creating labeled values label using the values protected by Labeled by unlabeling them unlabel and changing the value of labeled value without inspection relabelLabeledP taintLabeled Two Applicative Functor like operations are also defined for Labeled data namely lFmap and lAp",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "Labeled",
          "package": "lio",
          "partial": "Labeled",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric class used to get the type of labeled objects. For,\n instance, if you wish to associate a label with a pure value (as in\n \u003ca\u003eLIO.Labeled\u003c/a\u003e), you may create a data type:\n\u003c/p\u003e\u003cpre\u003e data LVal l a = LValTCB l a\n\u003c/pre\u003e\u003cp\u003eThen, you may wish to allow untrusted code to read the label of any\n \u003ccode\u003eLVal\u003c/code\u003es but not necessarily the actual value. To do so, simply\n provide an instance for \u003ccode\u003eLabelOf\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e instance LabelOf LVal where\n   labelOf (LValTCB l a) = l\n\u003c/pre\u003e",
          "module": "LIO.Labeled",
          "name": "LabelOf",
          "package": "lio",
          "source": "src/LIO-TCB.html#LabelOf",
          "type": "class"
        },
        "index": {
          "description": "Generic class used to get the type of labeled objects For instance if you wish to associate label with pure value as in LIO.Labeled you may create data type data LVal LValTCB Then you may wish to allow untrusted code to read the label of any LVal but not necessarily the actual value To do so simply provide an instance for LabelOf instance LabelOf LVal where labelOf LValTCB",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "LabelOf",
          "package": "lio",
          "partial": "Label Of",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#t:LabelOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLabeled l a\u003c/code\u003e is a value that associates a label of type \u003ccode\u003el\u003c/code\u003e with\n a pure value of type \u003ccode\u003ea\u003c/code\u003e. Labeled values allow users to label data\n with a label other than the current label.  Note that \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e is\n an instance of \u003ccode\u003e\u003ca\u003eLabelOf\u003c/a\u003e\u003c/code\u003e, which means that only the \u003cem\u003econtents\u003c/em\u003e of a\n labeled value (the type \u003ccode\u003et\u003c/code\u003e) is kept secret, not the label.  Of\n course, if you have a \u003ccode\u003eLabeled\u003c/code\u003e within a \u003ccode\u003eLabeled\u003c/code\u003e, then the label\n on the inner value will be protected by the outer label.\n\u003c/p\u003e",
          "module": "LIO.Labeled",
          "name": "Labeled",
          "package": "lio",
          "source": "src/LIO-TCB.html#Labeled",
          "type": "data"
        },
        "index": {
          "description": "Labeled is value that associates label of type with pure value of type Labeled values allow users to label data with label other than the current label Note that Labeled is an instance of LabelOf which means that only the contents of labeled value the type is kept secret not the label Of course if you have Labeled within Labeled then the label on the inner value will be protected by the outer label",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "Labeled",
          "package": "lio",
          "partial": "Labeled",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#t:Labeled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e, apply function (wrapped by \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e) to the\n labeld value. The label of the returned value is the \u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e of the\n thread's current label, the label of the supplied function, and the\n label of the supplied value.\n\u003c/p\u003e",
          "module": "LIO.Labeled",
          "name": "lAp",
          "package": "lio",
          "signature": "Labeled l (a -\u003e b) -\u003e Labeled l a -\u003e LIO l (Labeled l b)",
          "source": "src/LIO-Labeled.html#lAp",
          "type": "function"
        },
        "index": {
          "description": "Similar to ap apply function wrapped by Labeled to the labeld value The label of the returned value is the lub of the thread current label the label of the supplied function and the label of the supplied value",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "lAp",
          "normalized": "Labeled a(b-\u003ec)-\u003eLabeled a b-\u003eLIO a(Labeled a c)",
          "package": "lio",
          "partial": "Ap",
          "signature": "Labeled l(a-\u003eb)-\u003eLabeled l a-\u003eLIO l(Labeled l b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#v:lAp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function similar to \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e values.  Applies a\n function to a \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e value without \u003ccode\u003e\u003ca\u003eunlabel\u003c/a\u003e\u003c/code\u003eing the value or\n changing the thread's current label.  The label of the result is the\n \u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e of the current label and that of the supplied \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e\n value.  Because of laziness, the actual computation on the value of\n type \u003ccode\u003ea\u003c/code\u003e will be deferred until a thread with a higher label\n actually \u003ccode\u003e\u003ca\u003eunlabel\u003c/a\u003e\u003c/code\u003es the result.\n\u003c/p\u003e",
          "module": "LIO.Labeled",
          "name": "lFmap",
          "package": "lio",
          "signature": "Labeled l a -\u003e (a -\u003e b) -\u003e LIO l (Labeled l b)",
          "source": "src/LIO-Labeled.html#lFmap",
          "type": "function"
        },
        "index": {
          "description": "function similar to fmap for Labeled values Applies function to Labeled value without unlabel ing the value or changing the thread current label The label of the result is the lub of the current label and that of the supplied Labeled value Because of laziness the actual computation on the value of type will be deferred until thread with higher label actually unlabel the result",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "lFmap",
          "normalized": "Labeled a b-\u003e(b-\u003ec)-\u003eLIO a(Labeled a c)",
          "package": "lio",
          "partial": "Fmap",
          "signature": "Labeled l a-\u003e(a-\u003eb)-\u003eLIO l(Labeled l b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#v:lFmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to construct a \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e value from a label and a pure\n value.  If the current label is \u003ccode\u003elcurrent\u003c/code\u003e and the current\n clearance is \u003ccode\u003eccurrent\u003c/code\u003e, then the label \u003ccode\u003el\u003c/code\u003e specified must satisfy\n \u003ccode\u003elcurrent `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` l && l `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` ccurrent\u003c/code\u003e. Otherwise\n an exception is thrown (see \u003ccode\u003e\u003ca\u003eguardAlloc\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "LIO.Labeled",
          "name": "label",
          "package": "lio",
          "signature": "l -\u003e a -\u003e LIO l (Labeled l a)",
          "source": "src/LIO-Labeled.html#label",
          "type": "function"
        },
        "index": {
          "description": "Function to construct Labeled value from label and pure value If the current label is lcurrent and the current clearance is ccurrent then the label specified must satisfy lcurrent canFlowTo canFlowTo ccurrent Otherwise an exception is thrown see guardAlloc",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "label",
          "normalized": "a-\u003eb-\u003eLIO a(Labeled a b)",
          "package": "lio",
          "signature": "l-\u003ea-\u003eLIO l(Labeled l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the label of a labeled value or object.  Note the label\n must be the second to last type constructor argument.\n\u003c/p\u003e",
          "module": "LIO.Labeled",
          "name": "labelOf",
          "package": "lio",
          "signature": "t l a -\u003e l",
          "source": "src/LIO-TCB.html#labelOf",
          "type": "method"
        },
        "index": {
          "description": "Get the label of labeled value or object Note the label must be the second to last type constructor argument",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "labelOf",
          "normalized": "a b c-\u003eb",
          "package": "lio",
          "partial": "Of",
          "signature": "t l a-\u003el",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#v:labelOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e value using privilege to allow the value's\n label to be below the current label.  If the current label is\n \u003ccode\u003elcurrent\u003c/code\u003e and the current clearance is \u003ccode\u003eccurrent\u003c/code\u003e, then the\n privilege \u003ccode\u003ep\u003c/code\u003e and label \u003ccode\u003el\u003c/code\u003e specified must satisfy \u003ccode\u003ecanFlowTo p\n lcurrent l\u003c/code\u003e and \u003ccode\u003el `\u003ccode\u003e\u003ca\u003ecanFlowTo\u003c/a\u003e\u003c/code\u003e` ccurrent\u003c/code\u003e.  Note that privilege is\n not used to bypass the clearance.  You must use \u003ccode\u003e\u003ca\u003esetClearanceP\u003c/a\u003e\u003c/code\u003e to\n raise the clearance first if you wish to create a \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e value\n at a higher label than the current clearance.\n\u003c/p\u003e",
          "module": "LIO.Labeled",
          "name": "labelP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e a -\u003e LIO l (Labeled l a)",
          "source": "src/LIO-Labeled.html#labelP",
          "type": "function"
        },
        "index": {
          "description": "Constructs Labeled value using privilege to allow the value label to be below the current label If the current label is lcurrent and the current clearance is ccurrent then the privilege and label specified must satisfy canFlowTo lcurrent and canFlowTo ccurrent Note that privilege is not used to bypass the clearance You must use setClearanceP to raise the clearance first if you wish to create Labeled value at higher label than the current clearance",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "labelP",
          "normalized": "Priv a-\u003eb-\u003ec-\u003eLIO b(Labeled b c)",
          "package": "lio",
          "signature": "Priv p-\u003el-\u003ea-\u003eLIO l(Labeled l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#v:labelP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelabels a \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e value to the supplied label if the given\n privileges permit it.  An exception is thrown unless the following\n two conditions hold:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The new label must be below the current clearance.\n\u003c/li\u003e\u003cli\u003e The old label and new label must be equal (modulo privileges),\n   as enforced by \u003ccode\u003e\u003ca\u003ecanFlowToP\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "LIO.Labeled",
          "name": "relabelLabeledP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e Labeled l a -\u003e LIO l (Labeled l a)",
          "source": "src/LIO-Labeled.html#relabelLabeledP",
          "type": "function"
        },
        "index": {
          "description": "Relabels Labeled value to the supplied label if the given privileges permit it An exception is thrown unless the following two conditions hold The new label must be below the current clearance The old label and new label must be equal modulo privileges as enforced by canFlowToP",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "relabelLabeledP",
          "normalized": "Priv a-\u003eb-\u003eLabeled b c-\u003eLIO b(Labeled b c)",
          "package": "lio",
          "partial": "Labeled",
          "signature": "Priv p-\u003el-\u003eLabeled l a-\u003eLIO l(Labeled l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#v:relabelLabeledP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaises the label of a \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e value to the \u003ccode\u003e\u003ca\u003elub\u003c/a\u003e\u003c/code\u003e of it's\n current label and the value supplied.  The label supplied must be\n bounded by the current label and clearance, though the resulting\n label may not be if the \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e value's label is already above\n the current thread's clearance. If the supplied label is not\n bounded then \u003ccode\u003etaintLabeled\u003c/code\u003e will throw an exception (see\n \u003ccode\u003e\u003ca\u003eguardAlloc\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "LIO.Labeled",
          "name": "taintLabeled",
          "package": "lio",
          "signature": "l -\u003e Labeled l a -\u003e LIO l (Labeled l a)",
          "source": "src/LIO-Labeled.html#taintLabeled",
          "type": "function"
        },
        "index": {
          "description": "Raises the label of Labeled value to the lub of it current label and the value supplied The label supplied must be bounded by the current label and clearance though the resulting label may not be if the Labeled value label is already above the current thread clearance If the supplied label is not bounded then taintLabeled will throw an exception see guardAlloc",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "taintLabeled",
          "normalized": "a-\u003eLabeled a b-\u003eLIO a(Labeled a b)",
          "package": "lio",
          "partial": "Labeled",
          "signature": "l-\u003eLabeled l a-\u003eLIO l(Labeled l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#v:taintLabeled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003etaintLabeled\u003c/a\u003e\u003c/code\u003e, but uses privileges when comparing the\n current label to the supplied label. In other words, this function\n can be used to lower the label of the labeled value by leveraging\n the supplied privileges.\n\u003c/p\u003e",
          "module": "LIO.Labeled",
          "name": "taintLabeledP",
          "package": "lio",
          "signature": "Priv p -\u003e l -\u003e Labeled l a -\u003e LIO l (Labeled l a)",
          "source": "src/LIO-Labeled.html#taintLabeledP",
          "type": "function"
        },
        "index": {
          "description": "Same as taintLabeled but uses privileges when comparing the current label to the supplied label In other words this function can be used to lower the label of the labeled value by leveraging the supplied privileges",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "taintLabeledP",
          "normalized": "Priv a-\u003eb-\u003eLabeled b c-\u003eLIO b(Labeled b c)",
          "package": "lio",
          "partial": "Labeled",
          "signature": "Priv p-\u003el-\u003eLabeled l a-\u003eLIO l(Labeled l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#v:taintLabeledP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWithin the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad, this function takes a \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e value and\n returns it as an unprotected value of the inner type.  For\n instance, in the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad one can say:\n\u003c/p\u003e\u003cpre\u003e x \u003c- unlabel (lx :: Labeled SomeLabelType Int)\n\u003c/pre\u003e\u003cp\u003eAnd now it is possible to use the pure value \u003ccode\u003ex :: Int\u003c/code\u003e, which was\n previously protected by a label in \u003ccode\u003elx\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eunlabel\u003c/code\u003e raises the current label as needed to reflect the fact\n that the thread's behavior can now depend on the contents of \u003ccode\u003elx\u003c/code\u003e.\n If \u003ccode\u003eunlabel\u003c/code\u003eing a value would require raising the current label\n above the current clearance, then \u003ccode\u003eunlabel\u003c/code\u003e throws an exception of\n type \u003ccode\u003e\u003ca\u003eLabelError\u003c/a\u003e\u003c/code\u003e.  You can use \u003ccode\u003e\u003ca\u003elabelOf\u003c/a\u003e\u003c/code\u003e to check beforehand\n whether \u003ccode\u003e\u003ca\u003eunlabel\u003c/a\u003e\u003c/code\u003e will succeed.\n\u003c/p\u003e",
          "module": "LIO.Labeled",
          "name": "unlabel",
          "package": "lio",
          "signature": "Labeled l a -\u003e LIO l a",
          "source": "src/LIO-Labeled.html#unlabel",
          "type": "function"
        },
        "index": {
          "description": "Within the LIO monad this function takes Labeled value and returns it as an unprotected value of the inner type For instance in the LIO monad one can say unlabel lx Labeled SomeLabelType Int And now it is possible to use the pure value Int which was previously protected by label in lx unlabel raises the current label as needed to reflect the fact that the thread behavior can now depend on the contents of lx If unlabel ing value would require raising the current label above the current clearance then unlabel throws an exception of type LabelError You can use labelOf to check beforehand whether unlabel will succeed",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "unlabel",
          "normalized": "Labeled a b-\u003eLIO a b",
          "package": "lio",
          "signature": "Labeled l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#v:unlabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the contents of a \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e value just like \u003ccode\u003e\u003ca\u003eunlabel\u003c/a\u003e\u003c/code\u003e,\n but takes a privilege argument to minimize the amount the current\n label must be raised.  The privilege is used to raise the current\n label less than might be required otherwise, but this function does\n not change the current clarance and still throws a \u003ccode\u003e\u003ca\u003eLabelError\u003c/a\u003e\u003c/code\u003e if\n the privileges supplied are insufficient to save the current label\n from needing to exceed the current clearance.\n\u003c/p\u003e",
          "module": "LIO.Labeled",
          "name": "unlabelP",
          "package": "lio",
          "signature": "Priv p -\u003e Labeled l a -\u003e LIO l a",
          "source": "src/LIO-Labeled.html#unlabelP",
          "type": "function"
        },
        "index": {
          "description": "Extracts the contents of Labeled value just like unlabel but takes privilege argument to minimize the amount the current label must be raised The privilege is used to raise the current label less than might be required otherwise but this function does not change the current clarance and still throws LabelError if the privileges supplied are insufficient to save the current label from needing to exceed the current clearance",
          "hierarchy": "LIO Labeled",
          "module": "LIO.Labeled",
          "name": "unlabelP",
          "normalized": "Priv a-\u003eLabeled b c-\u003eLIO b c",
          "package": "lio",
          "signature": "Priv p-\u003eLabeled l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Labeled.html#v:unlabelP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions to launch \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computations from\n within the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  These functions are not useful from within\n \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e code (but not harmful either, since their types are in the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad).\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported into your Main module, for\n use in invoking \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e code.  The functions are also available via\n \u003ca\u003eLIO\u003c/a\u003e and \u003ca\u003eLIO.Core\u003c/a\u003e, but those modules will clutter your namespace\n with symbols you don't need in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LIO.Run",
          "name": "Run",
          "package": "lio",
          "source": "src/LIO-Run.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions to launch LIO computations from within the IO monad These functions are not useful from within LIO code but not harmful either since their types are in the IO monad This module is intended to be imported into your Main module for use in invoking LIO code The functions are also available via LIO and LIO.Core but those modules will clutter your namespace with symbols you don need in the IO monad",
          "hierarchy": "LIO Run",
          "module": "LIO.Run",
          "name": "Run",
          "package": "lio",
          "partial": "Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Run.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal state of an \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "LIO.Run",
          "name": "LIOState",
          "package": "lio",
          "source": "src/LIO-TCB.html#LIOState",
          "type": "data"
        },
        "index": {
          "description": "Internal state of an LIO computation",
          "hierarchy": "LIO Run",
          "module": "LIO.Run",
          "name": "LIOState",
          "package": "lio",
          "partial": "LIOState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Run.html#t:LIOState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize some privileges (within the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad) that can be\n passed to \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computations run with \u003ccode\u003e\u003ca\u003erunLIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eevalLIO\u003c/a\u003e\u003c/code\u003e.  This\n is a pure function, but the result is encapsulated in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to\n make the return value inaccessible from \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e\u003cp\u003eNote the same effect can be achieved using the \u003ccode\u003e\u003ca\u003ePrivTCB\u003c/a\u003e\u003c/code\u003e\n constructor, but \u003ccode\u003e\u003ca\u003ePrivTCB\u003c/a\u003e\u003c/code\u003e is easier to misuse and is only available by\n importing \u003ca\u003eLIO.TCB\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "LIO.Run",
          "name": "privInit",
          "package": "lio",
          "signature": "p -\u003e IO (Priv p)",
          "source": "src/LIO-Run.html#privInit",
          "type": "function"
        },
        "index": {
          "description": "Initialize some privileges within the IO monad that can be passed to LIO computations run with runLIO or evalLIO This is pure function but the result is encapsulated in IO to make the return value inaccessible from LIO computations Note the same effect can be achieved using the PrivTCB constructor but PrivTCB is easier to misuse and is only available by importing LIO.TCB",
          "hierarchy": "LIO Run",
          "module": "LIO.Run",
          "name": "privInit",
          "normalized": "a-\u003eIO(Priv a)",
          "package": "lio",
          "partial": "Init",
          "signature": "p-\u003eIO(Priv p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Run.html#v:privInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003erunLIO\u003c/a\u003e\u003c/code\u003e that returns results in \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e and\n exceptions in \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e, much like the standard library \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "LIO.Run",
          "name": "tryLIO",
          "package": "lio",
          "signature": "LIO l a -\u003e LIOState l -\u003e IO (Either SomeException a, LIOState l)",
          "source": "src/LIO-Run.html#tryLIO",
          "type": "function"
        },
        "index": {
          "description": "variant of runLIO that returns results in Right and exceptions in Left much like the standard library try function",
          "hierarchy": "LIO Run",
          "module": "LIO.Run",
          "name": "tryLIO",
          "normalized": "LIO a b-\u003eLIOState a-\u003eIO(Either SomeException b,LIOState a)",
          "package": "lio",
          "partial": "LIO",
          "signature": "LIO l a-\u003eLIOState l-\u003eIO(Either SomeException a,LIOState l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-Run.html#v:tryLIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides routines for safely exposing IO functions in\n the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.  At a high level, certain IO objects such as\n handles can be associated with a label via \u003ccode\u003e\u003ca\u003eLObj\u003c/a\u003e\u003c/code\u003e, while certain\n operations can then be blessed (via \u003ccode\u003e\u003ca\u003eblessTCB\u003c/a\u003e\u003c/code\u003e) to operate on such\n \u003ccode\u003e\u003ca\u003eLObj\u003c/a\u003e\u003c/code\u003e objects.\n\u003c/p\u003e\u003cp\u003eFor example, trusted code might define the following:\n\u003c/p\u003e\u003cpre\u003e import qualified System.IO as IO\n \n type Handle = LObj DCLabel IO.Handle\n \n hPutStrLn :: LObj DCLabel IO.Handle -\u003e String -\u003e LIO DCLabel ()\n hPutStrLn h = blessTCB \"hPutStrLn\" IO.hPutStrLn h\n\n hPutStrLnP :: DCPriv -\u003e LObj DCLabel IO.Handle -\u003e String -\u003e LIO DCLabel ()\n hPutStrLnP h = blessPTCB \"hPutStrLnP\" IO.hPutStrLn h\n \n hGetLine :: LObj DCLabel IO.Handle -\u003e LIO DCLabel String\n hGetLine h = blessTCB \"hGetLine\" IO.hGetLine h\n\u003c/pre\u003e\u003cp\u003eThen application-specific trusted code can wrap a specific label\n around each \u003ccode\u003eHandle\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eLObjTCB\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LIO.TCB.LObj",
          "name": "LObj",
          "package": "lio",
          "source": "src/LIO-TCB-LObj.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides routines for safely exposing IO functions in the LIO monad At high level certain IO objects such as handles can be associated with label via LObj while certain operations can then be blessed via blessTCB to operate on such LObj objects For example trusted code might define the following import qualified System.IO as IO type Handle LObj DCLabel IO.Handle hPutStrLn LObj DCLabel IO.Handle String LIO DCLabel hPutStrLn blessTCB hPutStrLn IO.hPutStrLn hPutStrLnP DCPriv LObj DCLabel IO.Handle String LIO DCLabel hPutStrLnP blessPTCB hPutStrLnP IO.hPutStrLn hGetLine LObj DCLabel IO.Handle LIO DCLabel String hGetLine blessTCB hGetLine IO.hGetLine Then application-specific trusted code can wrap specific label around each Handle using the LObjTCB constructor",
          "hierarchy": "LIO TCB LObj",
          "module": "LIO.TCB.LObj",
          "name": "LObj",
          "package": "lio",
          "partial": "LObj",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-LObj.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for lifting \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions.\n\u003c/p\u003e",
          "module": "LIO.TCB.LObj",
          "name": "GuardIO",
          "package": "lio",
          "source": "src/LIO-TCB-LObj.html#GuardIO",
          "type": "class"
        },
        "index": {
          "description": "Class for lifting IO actions",
          "hierarchy": "LIO TCB LObj",
          "module": "LIO.TCB.LObj",
          "name": "GuardIO",
          "package": "lio",
          "partial": "Guard IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-LObj.html#t:GuardIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"\u003ccode\u003eLObj label object\u003c/code\u003e\" is a wrapper around an IO abstraction\n of type \u003ccode\u003eobject\u003c/code\u003e (such as a file handle or socket) on which it is\n safe to do \u003ccode\u003eIO\u003c/code\u003e operations in the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad when the caller can\n read and write a the label \u003ccode\u003elabel\u003c/code\u003e.  It is the job of the trusted\n code constructing such a \u003ccode\u003eLObj\u003c/code\u003e object to ensure both that the same\n IO object is only ever associated with a single label, and that the\n abstraction combined with its blessed IO operations (see\n \u003ccode\u003e\u003ca\u003eblessTCB\u003c/a\u003e\u003c/code\u003e) cannot be used to communicate with code running at\n different labels.\n\u003c/p\u003e",
          "module": "LIO.TCB.LObj",
          "name": "LObj",
          "package": "lio",
          "source": "src/LIO-TCB-LObj.html#LObj",
          "type": "data"
        },
        "index": {
          "description": "LObj label object is wrapper around an IO abstraction of type object such as file handle or socket on which it is safe to do IO operations in the LIO monad when the caller can read and write the label label It is the job of the trusted code constructing such LObj object to ensure both that the same IO object is only ever associated with single label and that the abstraction combined with its blessed IO operations see blessTCB cannot be used to communicate with code running at different labels",
          "hierarchy": "LIO TCB LObj",
          "module": "LIO.TCB.LObj",
          "name": "LObj",
          "package": "lio",
          "partial": "LObj",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-LObj.html#t:LObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.LObj",
          "name": "LObjTCB",
          "package": "lio",
          "signature": "LObjTCB !label !object",
          "source": "src/LIO-TCB-LObj.html#LObj",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB LObj",
          "module": "LIO.TCB.LObj",
          "name": "LObjTCB",
          "package": "lio",
          "partial": "LObj TCB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-LObj.html#v:LObjTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eblessTCB\u003c/a\u003e\u003c/code\u003e that produces an \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e function taking a\n privilege argument.\n\u003c/p\u003e",
          "module": "LIO.TCB.LObj",
          "name": "blessPTCB",
          "package": "lio",
          "signature": "String -\u003e (a -\u003e io) -\u003e Priv p -\u003e LObj l a -\u003e lio",
          "source": "src/LIO-TCB-LObj.html#blessPTCB",
          "type": "function"
        },
        "index": {
          "description": "variant of blessTCB that produces an LIO function taking privilege argument",
          "hierarchy": "LIO TCB LObj",
          "module": "LIO.TCB.LObj",
          "name": "blessPTCB",
          "normalized": "String-\u003e(a-\u003eb)-\u003ePriv c-\u003eLObj d a-\u003ee",
          "package": "lio",
          "partial": "PTCB",
          "signature": "String-\u003e(a-\u003eio)-\u003ePriv p-\u003eLObj l a-\u003elio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-LObj.html#v:blessPTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can be used to turn an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e function into an \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e\n one.  The \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e version expects a \u003ccode\u003e\u003ca\u003eLObj\u003c/a\u003e\u003c/code\u003e argument, and before\n performing any IO uses \u003ccode\u003e\u003ca\u003eguardWrite\u003c/a\u003e\u003c/code\u003e to check that the current label\n can write the label in the \u003ccode\u003e\u003ca\u003eLObj\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e\u003cp\u003eThe first argument should be the name of the function being defined\n with \u003ccode\u003eblessTCB\u003c/code\u003e.  Its purpose is to enhance error reporting.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003eio\u003c/code\u003e and \u003ccode\u003elio\u003c/code\u003e are function types (of up to nine\n arguments), which must be the same in all types except the monad.\n For example, if \u003ccode\u003eio\u003c/code\u003e is \u003ccode\u003eInt -\u003e String -\u003e IO ()\u003c/code\u003e, then \u003ccode\u003elio\u003c/code\u003e must\n be \u003ccode\u003eInt -\u003e String -\u003e LIO l ()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.TCB.LObj",
          "name": "blessTCB",
          "package": "lio",
          "signature": "String -\u003e (a -\u003e io) -\u003e LObj l a -\u003e lio",
          "source": "src/LIO-TCB-LObj.html#blessTCB",
          "type": "function"
        },
        "index": {
          "description": "This function can be used to turn an IO function into an LIO one The LIO version expects LObj argument and before performing any IO uses guardWrite to check that the current label can write the label in the LObj object The first argument should be the name of the function being defined with blessTCB Its purpose is to enhance error reporting Note that io and lio are function types of up to nine arguments which must be the same in all types except the monad For example if io is Int String IO then lio must be Int String LIO",
          "hierarchy": "LIO TCB LObj",
          "module": "LIO.TCB.LObj",
          "name": "blessTCB",
          "normalized": "String-\u003e(a-\u003eb)-\u003eLObj c a-\u003ed",
          "package": "lio",
          "partial": "TCB",
          "signature": "String-\u003e(a-\u003eio)-\u003eLObj l a-\u003elio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-LObj.html#v:blessTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action in the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad, executing a guard\n before calling the function.\n\u003c/p\u003e",
          "module": "LIO.TCB.LObj",
          "name": "guardIOTCB",
          "package": "lio",
          "signature": "LIO l () -\u003e io -\u003e lio",
          "source": "src/LIO-TCB-LObj.html#guardIOTCB",
          "type": "method"
        },
        "index": {
          "description": "Lifts an IO action in the LIO monad executing guard before calling the function",
          "hierarchy": "LIO TCB LObj",
          "module": "LIO.TCB.LObj",
          "name": "guardIOTCB",
          "normalized": "LIO a()-\u003eb-\u003ec",
          "package": "lio",
          "partial": "IOTCB",
          "signature": "LIO l()-\u003eio-\u003elio",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-LObj.html#v:guardIOTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelper routines for exposing \u003ccode\u003eIO\u003c/code\u003e operations on objects with\n mutable labels.  The mutable labels are implemented by type\n \u003ccode\u003e\u003ca\u003eMLabel\u003c/a\u003e\u003c/code\u003e, and have an immutable meta-label (or \"label label\")\n protecting the mutable label.\n\u003c/p\u003e\u003cp\u003eIt is reasonable to allow untrusted code to modify labels by\n exporting a type-restricted version of \u003ccode\u003e\u003ca\u003emodifyMLObjLabelP\u003c/a\u003e\u003c/code\u003e.  When\n this happens, asynchronous exceptions are sent to any other threads\n inside \u003ccode\u003e\u003ca\u003emblessTCB\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emblessPTCB\u003c/a\u003e\u003c/code\u003e if the new label revokes their\n access.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "MLObj",
          "package": "lio",
          "source": "src/LIO-TCB-MLObj.html",
          "type": "module"
        },
        "index": {
          "description": "Helper routines for exposing IO operations on objects with mutable labels The mutable labels are implemented by type MLabel and have an immutable meta-label or label label protecting the mutable label It is reasonable to allow untrusted code to modify labels by exporting type-restricted version of modifyMLObjLabelP When this happens asynchronous exceptions are sent to any other threads inside mblessTCB or mblessPTCB if the new label revokes their access",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "MLObj",
          "package": "lio",
          "partial": "MLObj",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eExternalML\u003c/a\u003e\u003c/code\u003e is for objects that communicate to the outside\n world, where extra privileges are required since once data gets\n out, so as to vouch for the fact that the other end of a socket\n won't arbitrarily downgrade data.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "ExternalML",
          "package": "lio",
          "source": "src/LIO-TCB-MLObj.html#ExternalML",
          "type": "data"
        },
        "index": {
          "description": "ExternalML is for objects that communicate to the outside world where extra privileges are required since once data gets out so as to vouch for the fact that the other end of socket won arbitrarily downgrade data",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "ExternalML",
          "package": "lio",
          "partial": "External ML",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#t:ExternalML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInternalML\u003c/a\u003e\u003c/code\u003e is for objects contained entirely within Haskell,\n such as a variable.  Raising the label can't cause data to leak.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "InternalML",
          "package": "lio",
          "source": "src/LIO-TCB-MLObj.html#InternalML",
          "type": "data"
        },
        "index": {
          "description": "InternalML is for objects contained entirely within Haskell such as variable Raising the label can cause data to leak",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "InternalML",
          "package": "lio",
          "partial": "Internal ML",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#t:InternalML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a \u003ccode\u003e\u003ccode\u003eliftIO\u003c/code\u003e\u003c/code\u003e-like function and an \u003ccode\u003eIO\u003c/code\u003e function of an\n arbitrary number of arguments (up to 10).  Applies the arguments to\n the \u003ccode\u003eIO\u003c/code\u003e function, then passed the result to its argument funciton\n to transform it into an \u003ccode\u003eLIO\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "LabelIO",
          "package": "lio",
          "source": "src/LIO-TCB-MLObj.html#LabelIO",
          "type": "class"
        },
        "index": {
          "description": "Takes liftIO like function and an IO function of an arbitrary number of arguments up to Applies the arguments to the IO function then passed the result to its argument funciton to transform it into an LIO function",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "LabelIO",
          "package": "lio",
          "partial": "Label IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#t:LabelIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIO Object with a mutable label.  By contrast with\n \u003ccode\u003e\u003ca\u003eLObj\u003c/a\u003e\u003c/code\u003e, the label on an \u003ccode\u003e\u003ca\u003eMLObj\u003c/a\u003e\u003c/code\u003e can change over time.\n If this happens, the internal \u003ccode\u003e\u003ca\u003eMLabel\u003c/a\u003e\u003c/code\u003e ensures that threads\n accessing the object receive an asynchronous exception.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "MLObj",
          "package": "lio",
          "source": "src/LIO-TCB-MLObj.html#MLObj",
          "type": "data"
        },
        "index": {
          "description": "IO Object with mutable label By contrast with LObj the label on an MLObj can change over time If this happens the internal MLabel ensures that threads accessing the object receive an asynchronous exception",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "MLObj",
          "package": "lio",
          "partial": "MLObj",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#t:MLObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable label.  Consists of a static label on the label, a\n mutable label, and a list of threads currently accessing the label.\n This is intended to be used by privileged code implementing \u003ccode\u003eIO\u003c/code\u003e\n abstractions with mutable labels.  Routines for accessing such an\n \u003ccode\u003eIO\u003c/code\u003e abstraction should perform tne \u003ccode\u003eIO\u003c/code\u003e from within a call to\n \u003ccode\u003e\u003ca\u003ewithMLabelP\u003c/a\u003e\u003c/code\u003e, to ensure an exception is raised if another thread\n revokes access with \u003ccode\u003e\u003ca\u003emodifyMLabelP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "MLabel",
          "package": "lio",
          "source": "src/LIO-TCB-MLObj.html#MLabel",
          "type": "data"
        },
        "index": {
          "description": "mutable label Consists of static label on the label mutable label and list of threads currently accessing the label This is intended to be used by privileged code implementing IO abstractions with mutable labels Routines for accessing such an IO abstraction should perform tne IO from within call to withMLabelP to ensure an exception is raised if another thread revokes access with modifyMLabelP",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "MLabel",
          "package": "lio",
          "partial": "MLabel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#t:MLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of objects with mutable labels.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "MLabelOf",
          "package": "lio",
          "source": "src/LIO-TCB-MLObj.html#MLabelOf",
          "type": "class"
        },
        "index": {
          "description": "Class of objects with mutable labels",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "MLabelOf",
          "package": "lio",
          "partial": "MLabel Of",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#t:MLabelOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of policies for when it is permissible to update an\n \u003ccode\u003e\u003ca\u003eMLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "MLabelPolicy",
          "package": "lio",
          "source": "src/LIO-TCB-MLObj.html#MLabelPolicy",
          "type": "class"
        },
        "index": {
          "description": "Class of policies for when it is permissible to update an MLabel",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "MLabelPolicy",
          "package": "lio",
          "partial": "MLabel Policy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#t:MLabelPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for \u003ccode\u003e\u003ca\u003eMLabelPolicy\u003c/a\u003e\u003c/code\u003es that don't encode any interesting\n values.  This allows \u003ccode\u003e\u003ca\u003emlObjTCB\u003c/a\u003e\u003c/code\u003e to create an \u003ccode\u003e\u003ca\u003eMLObj\u003c/a\u003e\u003c/code\u003e without\n requiring a policy argument.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "MLabelPolicyDefault",
          "package": "lio",
          "source": "src/LIO-TCB-MLObj.html#MLabelPolicyDefault",
          "type": "class"
        },
        "index": {
          "description": "Class for MLabelPolicy that don encode any interesting values This allows mlObjTCB to create an MLObj without requiring policy argument",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "MLabelPolicyDefault",
          "package": "lio",
          "partial": "MLabel Policy Default",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#t:MLabelPolicyDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.MLObj",
          "name": "ExternalML",
          "package": "lio",
          "signature": "ExternalML",
          "source": "src/LIO-TCB-MLObj.html#ExternalML",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "ExternalML",
          "package": "lio",
          "partial": "External ML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:ExternalML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.MLObj",
          "name": "InternalML",
          "package": "lio",
          "signature": "InternalML",
          "source": "src/LIO-TCB-MLObj.html#InternalML",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "InternalML",
          "package": "lio",
          "partial": "Internal ML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:InternalML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.MLObj",
          "name": "MLObjTCB",
          "package": "lio",
          "signature": "MLObjTCB !(MLabel policy l) !object",
          "source": "src/LIO-TCB-MLObj.html#MLObj",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "MLObjTCB",
          "package": "lio",
          "partial": "MLObj TCB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:MLObjTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.MLObj",
          "name": "MLabelTCB",
          "package": "lio",
          "signature": "MLabelTCB",
          "source": "src/LIO-TCB-MLObj.html#MLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "MLabelTCB",
          "package": "lio",
          "partial": "MLabel TCB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:MLabelTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.MLObj",
          "name": "labelIO",
          "package": "lio",
          "signature": "(forall r.  IO r -\u003e LIO l r) -\u003e io -\u003e lio",
          "source": "src/LIO-TCB-MLObj.html#labelIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "labelIO",
          "normalized": "(a b IO c-\u003eLIO d c)-\u003ee-\u003ef",
          "package": "lio",
          "partial": "IO",
          "signature": "(forall r. IO r-\u003eLIO l r)-\u003eio-\u003elio",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:labelIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the immutable label that controls access to the mutable\n label value of an \u003ccode\u003e\u003ca\u003eMLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "labelOfMlabel",
          "package": "lio",
          "signature": "MLabel policy l -\u003e l",
          "source": "src/LIO-TCB-MLObj.html#labelOfMlabel",
          "type": "function"
        },
        "index": {
          "description": "Returns the immutable label that controls access to the mutable label value of an MLabel",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "labelOfMlabel",
          "normalized": "MLabel a b-\u003eb",
          "package": "lio",
          "partial": "Of Mlabel",
          "signature": "MLabel policy l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:labelOfMlabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.MLObj",
          "name": "mLabelOf",
          "package": "lio",
          "signature": "t policy l a -\u003e MLabel policy l",
          "source": "src/LIO-TCB-MLObj.html#mLabelOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "mLabelOf",
          "normalized": "a b c d-\u003eMLabel b c",
          "package": "lio",
          "partial": "Label Of",
          "signature": "t policy l a-\u003eMLabel policy l",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:mLabelOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMLObj\u003c/a\u003e\u003c/code\u003e equivalent of \u003ccode\u003eblessPTCB\u003c/code\u003e in\n \u003ca\u003eLIO.TCB.LObj\u003c/a\u003e.  Use this for conveniently providing\n \u003ccode\u003eLIO\u003c/code\u003e versions of standard \u003ccode\u003eIO\u003c/code\u003e functions.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "mblessPTCB",
          "package": "lio",
          "signature": "String -\u003e (a -\u003e io) -\u003e Priv p -\u003e MLObj policy l a -\u003e lio",
          "source": "src/LIO-TCB-MLObj.html#mblessPTCB",
          "type": "function"
        },
        "index": {
          "description": "The MLObj equivalent of blessPTCB in LIO.TCB.LObj Use this for conveniently providing LIO versions of standard IO functions",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "mblessPTCB",
          "normalized": "String-\u003e(a-\u003eb)-\u003ePriv c-\u003eMLObj d e a-\u003ef",
          "package": "lio",
          "partial": "PTCB",
          "signature": "String-\u003e(a-\u003eio)-\u003ePriv p-\u003eMLObj policy l a-\u003elio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:mblessPTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMLObj\u003c/a\u003e\u003c/code\u003e equivalent of \u003ccode\u003eblessTCB\u003c/code\u003e in\n \u003ca\u003eLIO.TCB.LObj\u003c/a\u003e.  Use this for conveniently providing\n \u003ccode\u003eLIO\u003c/code\u003e versions of standard \u003ccode\u003eIO\u003c/code\u003e functions.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "mblessTCB",
          "package": "lio",
          "signature": "String -\u003e (a -\u003e io) -\u003e MLObj policy l a -\u003e lio",
          "source": "src/LIO-TCB-MLObj.html#mblessTCB",
          "type": "function"
        },
        "index": {
          "description": "The MLObj equivalent of blessTCB in LIO.TCB.LObj Use this for conveniently providing LIO versions of standard IO functions",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "mblessTCB",
          "normalized": "String-\u003e(a-\u003eb)-\u003eMLObj c d a-\u003ee",
          "package": "lio",
          "partial": "TCB",
          "signature": "String-\u003e(a-\u003eio)-\u003eMLObj policy l a-\u003elio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:mblessTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.MLObj",
          "name": "mlLabel",
          "package": "lio",
          "signature": "(IORef l)",
          "source": "src/LIO-TCB-MLObj.html#MLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "mlLabel",
          "package": "lio",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:mlLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.MLObj",
          "name": "mlLabelLabel",
          "package": "lio",
          "signature": "l",
          "source": "src/LIO-TCB-MLObj.html#MLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "mlLabelLabel",
          "package": "lio",
          "partial": "Label Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:mlLabelLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emlObjTCB\u003c/a\u003e\u003c/code\u003e ll l a\u003c/code\u003e creates an \u003ccode\u003e\u003ca\u003eMLObj\u003c/a\u003e\u003c/code\u003e wrapping some \u003ccode\u003eIO\u003c/code\u003e object\n \u003ccode\u003ea\u003c/code\u003e.  Here \u003ccode\u003ell\u003c/code\u003e is the label on the label, which remains immutable\n over the lifetime of the \u003ccode\u003e\u003ca\u003eMLObj\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003el\u003c/code\u003e is the initial value of the\n mutable lable.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "mlObjTCB",
          "package": "lio",
          "signature": "l -\u003e l -\u003e a -\u003e LIO l (MLObj policy l a)",
          "source": "src/LIO-TCB-MLObj.html#mlObjTCB",
          "type": "function"
        },
        "index": {
          "description": "mlObjTCB ll creates an MLObj wrapping some IO object Here ll is the label on the label which remains immutable over the lifetime of the MLObj is the initial value of the mutable lable",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "mlObjTCB",
          "normalized": "a-\u003ea-\u003eb-\u003eLIO a(MLObj c a b)",
          "package": "lio",
          "partial": "Obj TCB",
          "signature": "l-\u003el-\u003ea-\u003eLIO l(MLObj policy l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:mlObjTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.MLObj",
          "name": "mlPolicy",
          "package": "lio",
          "signature": "policy",
          "source": "src/LIO-TCB-MLObj.html#MLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "mlPolicy",
          "package": "lio",
          "partial": "Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:mlPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emlObjTCB\u003c/a\u003e\u003c/code\u003e, but create an \u003ccode\u003e\u003ca\u003eMLObj\u003c/a\u003e\u003c/code\u003e with a particular policy\n value.  Note that you don't need to use this for \u003ccode\u003e\u003ca\u003eExternalML\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eInternalML\u003c/a\u003e\u003c/code\u003e, as these don't have anything interesting in the\n policy value, only the type matters.  This might be useful if, for\n instance, you wished to design a new policy type that embeds a\n clearance.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "mlPolicyObjTCB",
          "package": "lio",
          "signature": "policy -\u003e l -\u003e l -\u003e a -\u003e LIO l (MLObj policy l a)",
          "source": "src/LIO-TCB-MLObj.html#mlPolicyObjTCB",
          "type": "function"
        },
        "index": {
          "description": "Like mlObjTCB but create an MLObj with particular policy value Note that you don need to use this for ExternalML and InternalML as these don have anything interesting in the policy value only the type matters This might be useful if for instance you wished to design new policy type that embeds clearance",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "mlPolicyObjTCB",
          "normalized": "a-\u003eb-\u003eb-\u003ec-\u003eLIO b(MLObj a b c)",
          "package": "lio",
          "partial": "Policy Obj TCB",
          "signature": "policy-\u003el-\u003el-\u003ea-\u003eLIO l(MLObj policy l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:mlPolicyObjTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.MLObj",
          "name": "mlUsers",
          "package": "lio",
          "signature": "(MVar (Map Unique (l -\u003e IO Bool)))",
          "source": "src/LIO-TCB-MLObj.html#MLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "mlUsers",
          "normalized": "(MVar(Map Unique(a-\u003eIO Bool)))",
          "package": "lio",
          "partial": "Users",
          "signature": "(MVar(Map Unique(l-\u003eIO Bool)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:mlUsers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.MLObj",
          "name": "mlabelPolicy",
          "package": "lio",
          "signature": "policy -\u003e p -\u003e l -\u003e l -\u003e LIO l ()",
          "source": "src/LIO-TCB-MLObj.html#mlabelPolicy",
          "type": "method"
        },
        "index": {
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "mlabelPolicy",
          "normalized": "a-\u003eb-\u003ec-\u003ec-\u003eLIO c()",
          "package": "lio",
          "partial": "Policy",
          "signature": "policy-\u003ep-\u003el-\u003el-\u003eLIO l()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:mlabelPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB.MLObj",
          "name": "mlabelPolicyDefault",
          "package": "lio",
          "signature": "policy",
          "source": "src/LIO-TCB-MLObj.html#mlabelPolicyDefault",
          "type": "method"
        },
        "index": {
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "mlabelPolicyDefault",
          "package": "lio",
          "partial": "Policy Default",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:mlabelPolicyDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the \u003ccode\u003e\u003ca\u003eMLabel\u003c/a\u003e\u003c/code\u003e within an \u003ccode\u003e\u003ca\u003eMLObj\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "modifyMLObjLabelP",
          "package": "lio",
          "signature": "Priv p -\u003e MLObj policy l a -\u003e (l -\u003e LIO l l) -\u003e LIO l ()",
          "source": "src/LIO-TCB-MLObj.html#modifyMLObjLabelP",
          "type": "function"
        },
        "index": {
          "description": "Modify the MLabel within an MLObj",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "modifyMLObjLabelP",
          "normalized": "Priv a-\u003eMLObj b c d-\u003e(c-\u003eLIO c c)-\u003eLIO c()",
          "package": "lio",
          "partial": "MLObj Label",
          "signature": "Priv p-\u003eMLObj policy l a-\u003e(l-\u003eLIO l l)-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:modifyMLObjLabelP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the mutable label in an \u003ccode\u003e\u003ca\u003eMLabel\u003c/a\u003e\u003c/code\u003e.  Raises asynchronous\n exceptions in other threads that are inside \u003ccode\u003e\u003ca\u003ewithMLabelP\u003c/a\u003e\u003c/code\u003e if the\n new label revokes their access.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "modifyMLabelP",
          "package": "lio",
          "signature": "Priv p -\u003e MLabel policy l -\u003e (l -\u003e LIO l l) -\u003e LIO l ()",
          "source": "src/LIO-TCB-MLObj.html#modifyMLabelP",
          "type": "function"
        },
        "index": {
          "description": "Change the mutable label in an MLabel Raises asynchronous exceptions in other threads that are inside withMLabelP if the new label revokes their access",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "modifyMLabelP",
          "normalized": "Priv a-\u003eMLabel b c-\u003e(c-\u003eLIO c c)-\u003eLIO c()",
          "package": "lio",
          "partial": "MLabel",
          "signature": "Priv p-\u003eMLabel policy l-\u003e(l-\u003eLIO l l)-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:modifyMLabelP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eMLabel\u003c/a\u003e\u003c/code\u003e, performing access control checks to ensure\n that the labels are within the range allowed given the current\n label and clearance, and the supplied privileges.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "newMLabelP",
          "package": "lio",
          "signature": "Priv p -\u003e policy -\u003e l -\u003e l -\u003e LIO l (MLabel policy l)",
          "source": "src/LIO-TCB-MLObj.html#newMLabelP",
          "type": "function"
        },
        "index": {
          "description": "Create an MLabel performing access control checks to ensure that the labels are within the range allowed given the current label and clearance and the supplied privileges",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "newMLabelP",
          "normalized": "Priv a-\u003eb-\u003ec-\u003ec-\u003eLIO c(MLabel b c)",
          "package": "lio",
          "partial": "MLabel",
          "signature": "Priv p-\u003epolicy-\u003el-\u003el-\u003eLIO l(MLabel policy l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:newMLabelP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetreive a snapshot of the value of a mutable label.  Of course,\n it may already have changed by the time you process it.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "readMLabelP",
          "package": "lio",
          "signature": "Priv p -\u003e MLabel policy l -\u003e LIO l l",
          "source": "src/LIO-TCB-MLObj.html#readMLabelP",
          "type": "function"
        },
        "index": {
          "description": "Retreive snapshot of the value of mutable label Of course it may already have changed by the time you process it",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "readMLabelP",
          "normalized": "Priv a-\u003eMLabel b c-\u003eLIO c c",
          "package": "lio",
          "partial": "MLabel",
          "signature": "Priv p-\u003eMLabel policy l-\u003eLIO l l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:readMLabelP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action that should be protected by a mutable label.  An\n exception is thrown if the invoking thread cannot write to the\n mutable label given the privileges.  No attempt is made to adjust\n the current label, even if doing so would make the permissions\n acceptable.\n\u003c/p\u003e\u003cp\u003eNote that if the label changes after this function has been\n invoked, an exception may be raised in the middle of the protected\n action.\n\u003c/p\u003e",
          "module": "LIO.TCB.MLObj",
          "name": "withMLabelP",
          "package": "lio",
          "signature": "Priv p -\u003e MLabel policy l -\u003e LIO l a -\u003e LIO l a",
          "source": "src/LIO-TCB-MLObj.html#withMLabelP",
          "type": "function"
        },
        "index": {
          "description": "Run an action that should be protected by mutable label An exception is thrown if the invoking thread cannot write to the mutable label given the privileges No attempt is made to adjust the current label even if doing so would make the permissions acceptable Note that if the label changes after this function has been invoked an exception may be raised in the middle of the protected action",
          "hierarchy": "LIO TCB MLObj",
          "module": "LIO.TCB.MLObj",
          "name": "withMLabelP",
          "normalized": "Priv a-\u003eMLabel b c-\u003eLIO c d-\u003eLIO c d",
          "package": "lio",
          "partial": "MLabel",
          "signature": "Priv p-\u003eMLabel policy l-\u003eLIO l a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB-MLObj.html#v:withMLabelP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports symbols that must be accessible only to trusted\ncode.  By convention, the names of such symbols always end\n\"\u003ccode\u003e...TCB\u003c/code\u003e\" (short for \"trusted computing base\").  In many cases, a\ntype is safe to export while its constructor is not.  Hence, only the\nconstructor ends \"\u003ccode\u003eTCB\u003c/code\u003e\", while the type is re-exported to safe code\n(without constructors) from \u003ca\u003eLIO.Core\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSecurity rests on the fact that untrusted code must be compiled with\n\u003ccode\u003e-XSafe\u003c/code\u003e.  Because this module is flagged unsafe, it cannot be\nimported from safe modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LIO.TCB",
          "name": "TCB",
          "package": "lio",
          "source": "src/LIO-TCB.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports symbols that must be accessible only to trusted code By convention the names of such symbols always end TCB short for trusted computing base In many cases type is safe to export while its constructor is not Hence only the constructor ends TCB while the type is re-exported to safe code without constructors from LIO.Core Security rests on the fact that untrusted code must be compiled with XSafe Because this module is flagged unsafe it cannot be imported from safe modules",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "TCB",
          "package": "lio",
          "partial": "TCB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eLIO\u003c/code\u003e monad is a wrapper around \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e that keeps track of a\n \u003cem\u003ecurrent label\u003c/em\u003e and \u003cem\u003ecurrent clearance\u003c/em\u003e.  Safe code cannot execute\n arbitrary \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions from the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.  However, trusted\n runtime functions can use \u003ccode\u003e\u003ca\u003eioTCB\u003c/a\u003e\u003c/code\u003e to perform \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions (which\n they should only do after appropriately checking labels).\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "LIO",
          "package": "lio",
          "source": "src/LIO-TCB.html#LIO",
          "type": "newtype"
        },
        "index": {
          "description": "The LIO monad is wrapper around IO that keeps track of current label and current clearance Safe code cannot execute arbitrary IO actions from the LIO monad However trusted runtime functions can use ioTCB to perform IO actions which they should only do after appropriately checking labels",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "LIO",
          "package": "lio",
          "partial": "LIO",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#t:LIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal state of an \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "LIOState",
          "package": "lio",
          "source": "src/LIO-TCB.html#LIOState",
          "type": "data"
        },
        "index": {
          "description": "Internal state of an LIO computation",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "LIOState",
          "package": "lio",
          "partial": "LIOState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#t:LIOState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus of a \u003ccode\u003e\u003ca\u003eLabeledResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "LResStatus",
          "package": "lio",
          "source": "src/LIO-TCB.html#LResStatus",
          "type": "data"
        },
        "index": {
          "description": "Status of LabeledResult",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "LResStatus",
          "package": "lio",
          "partial": "LRes Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#t:LResStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric class used to get the type of labeled objects. For,\n instance, if you wish to associate a label with a pure value (as in\n \u003ca\u003eLIO.Labeled\u003c/a\u003e), you may create a data type:\n\u003c/p\u003e\u003cpre\u003e data LVal l a = LValTCB l a\n\u003c/pre\u003e\u003cp\u003eThen, you may wish to allow untrusted code to read the label of any\n \u003ccode\u003eLVal\u003c/code\u003es but not necessarily the actual value. To do so, simply\n provide an instance for \u003ccode\u003eLabelOf\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e instance LabelOf LVal where\n   labelOf (LValTCB l a) = l\n\u003c/pre\u003e",
          "module": "LIO.TCB",
          "name": "LabelOf",
          "package": "lio",
          "source": "src/LIO-TCB.html#LabelOf",
          "type": "class"
        },
        "index": {
          "description": "Generic class used to get the type of labeled objects For instance if you wish to associate label with pure value as in LIO.Labeled you may create data type data LVal LValTCB Then you may wish to allow untrusted code to read the label of any LVal but not necessarily the actual value To do so simply provide an instance for LabelOf instance LabelOf LVal where labelOf LValTCB",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "LabelOf",
          "package": "lio",
          "partial": "Label Of",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#t:LabelOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLabeled l a\u003c/code\u003e is a value that associates a label of type \u003ccode\u003el\u003c/code\u003e with\n a pure value of type \u003ccode\u003ea\u003c/code\u003e. Labeled values allow users to label data\n with a label other than the current label.  Note that \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e is\n an instance of \u003ccode\u003e\u003ca\u003eLabelOf\u003c/a\u003e\u003c/code\u003e, which means that only the \u003cem\u003econtents\u003c/em\u003e of a\n labeled value (the type \u003ccode\u003et\u003c/code\u003e) is kept secret, not the label.  Of\n course, if you have a \u003ccode\u003eLabeled\u003c/code\u003e within a \u003ccode\u003eLabeled\u003c/code\u003e, then the label\n on the inner value will be protected by the outer label.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "Labeled",
          "package": "lio",
          "source": "src/LIO-TCB.html#Labeled",
          "type": "data"
        },
        "index": {
          "description": "Labeled is value that associates label of type with pure value of type Labeled values allow users to label data with label other than the current label Note that Labeled is an instance of LabelOf which means that only the contents of labeled value the type is kept secret not the label Of course if you have Labeled within Labeled then the label on the inner value will be protected by the outer label",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "Labeled",
          "package": "lio",
          "partial": "Labeled",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#t:Labeled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eLabeledResult\u003c/code\u003e encapsulates a future result from a computation\n spawned by \u003ccode\u003elFork\u003c/code\u003e or \u003ccode\u003elForkP\u003c/code\u003e.  See \u003ca\u003eLIO.Concurrent\u003c/a\u003e for a\n description of the concurrency abstractions of LIO.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "LabeledResult",
          "package": "lio",
          "source": "src/LIO-TCB.html#LabeledResult",
          "type": "data"
        },
        "index": {
          "description": "LabeledResult encapsulates future result from computation spawned by lFork or lForkP See LIO.Concurrent for description of the concurrency abstractions of LIO",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "LabeledResult",
          "package": "lio",
          "partial": "Labeled Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#t:LabeledResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper that can be used by trusted code to transform a\n powerless description of privileges into actual privileges.  The\n constructor, \u003ccode\u003e\u003ca\u003ePrivTCB\u003c/a\u003e\u003c/code\u003e, is dangerous as it allows creation of\n arbitrary privileges.  Hence it is only exported by the unsafe\n module \u003ca\u003eLIO.TCB\u003c/a\u003e.  A safe way to create arbitrary privileges is to\n call \u003ccode\u003eprivInit\u003c/code\u003e (see \u003ca\u003eLIO.Run\u003c/a\u003e) from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad\n before running your \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "Priv",
          "package": "lio",
          "source": "src/LIO-TCB.html#Priv",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper that can be used by trusted code to transform powerless description of privileges into actual privileges The constructor PrivTCB is dangerous as it allows creation of arbitrary privileges Hence it is only exported by the unsafe module LIO.TCB safe way to create arbitrary privileges is to call privInit see LIO.Run from the IO monad before running your LIO computation",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "Priv",
          "package": "lio",
          "partial": "Priv",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#t:Priv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt would be a security issue to make certain objects members of\n the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class.  Nonetheless it is useful to be able to examine\n such objects when debugging.  The \u003ccode\u003e\u003ca\u003eshowTCB\u003c/a\u003e\u003c/code\u003e method can be used to\n examine such objects.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "ShowTCB",
          "package": "lio",
          "source": "src/LIO-TCB.html#ShowTCB",
          "type": "class"
        },
        "index": {
          "description": "It would be security issue to make certain objects members of the Show class Nonetheless it is useful to be able to examine such objects when debugging The showTCB method can be used to examine such objects",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "ShowTCB",
          "package": "lio",
          "partial": "Show TCB",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#t:ShowTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn uncatchable exception hierarchy is used to terminate an\n untrusted thread.  Wrap the uncatchable exception in\n \u003ccode\u003e\u003ca\u003eUncatchableTCB\u003c/a\u003e\u003c/code\u003e before throwing it to the thread.  \u003ccode\u003erunLIO\u003c/code\u003e will\n subsequently unwrap the \u003ccode\u003e\u003ca\u003eUncatchableTCB\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e\u003cp\u003eNote this can be circumvented by \u003ccode\u003e\u003ca\u003emapException\u003c/a\u003e\u003c/code\u003e, which should be\n made unsafe. In the interim, auditing untrusted code for this is\n necessary.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "UncatchableTCB",
          "package": "lio",
          "source": "src/LIO-TCB.html#UncatchableTCB",
          "type": "data"
        },
        "index": {
          "description": "An uncatchable exception hierarchy is used to terminate an untrusted thread Wrap the uncatchable exception in UncatchableTCB before throwing it to the thread runLIO will subsequently unwrap the UncatchableTCB constructor Note this can be circumvented by mapException which should be made unsafe In the interim auditing untrusted code for this is necessary",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "UncatchableTCB",
          "package": "lio",
          "partial": "Uncatchable TCB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#t:UncatchableTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB",
          "name": "LIOTCB",
          "package": "lio",
          "signature": "LIOTCB (IORef (LIOState l) -\u003e IO a)",
          "source": "src/LIO-TCB.html#LIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "LIOTCB",
          "normalized": "LIOTCB(IORef(LIOState a)-\u003eIO b)",
          "package": "lio",
          "partial": "LIOTCB",
          "signature": "LIOTCB(IORef(LIOState l)-\u003eIO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:LIOTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB",
          "name": "LResEmpty",
          "package": "lio",
          "signature": "LResEmpty",
          "source": "src/LIO-TCB.html#LResStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "LResEmpty",
          "package": "lio",
          "partial": "LRes Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:LResEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB",
          "name": "LResLabelTooHigh",
          "package": "lio",
          "signature": "LResLabelTooHigh !l",
          "source": "src/LIO-TCB.html#LResStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "LResLabelTooHigh",
          "package": "lio",
          "partial": "LRes Label Too High",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:LResLabelTooHigh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB",
          "name": "LResResult",
          "package": "lio",
          "signature": "LResResult a",
          "source": "src/LIO-TCB.html#LResStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "LResResult",
          "package": "lio",
          "partial": "LRes Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:LResResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB",
          "name": "LabeledResultTCB",
          "package": "lio",
          "signature": "LabeledResultTCB",
          "source": "src/LIO-TCB.html#LabeledResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "LabeledResultTCB",
          "package": "lio",
          "partial": "Labeled Result TCB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:LabeledResultTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB",
          "name": "LabeledTCB",
          "package": "lio",
          "signature": "LabeledTCB !l t",
          "source": "src/LIO-TCB.html#Labeled",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "LabeledTCB",
          "package": "lio",
          "partial": "Labeled TCB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:LabeledTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB",
          "name": "PrivTCB",
          "package": "lio",
          "signature": "PrivTCB a",
          "source": "src/LIO-TCB.html#Priv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "PrivTCB",
          "package": "lio",
          "partial": "Priv TCB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:PrivTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB",
          "name": "UncatchableTCB",
          "package": "lio",
          "signature": "UncatchableTCB e",
          "source": "src/LIO-TCB.html#UncatchableTCB",
          "type": "function"
        },
        "index": {
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "UncatchableTCB",
          "package": "lio",
          "partial": "Uncatchable TCB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:UncatchableTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet internal state. This function is not actually unsafe, but\n to avoid future security bugs we leave all direct access to the\n internal state to trusted code.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "getLIOStateTCB",
          "package": "lio",
          "signature": "LIO l (LIOState l)",
          "source": "src/LIO-TCB.html#getLIOStateTCB",
          "type": "function"
        },
        "index": {
          "description": "Get internal state This function is not actually unsafe but to avoid future security bugs we leave all direct access to the internal state to trusted code",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "getLIOStateTCB",
          "package": "lio",
          "partial": "LIOState TCB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:getLIOStateTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation into the \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e monad.  This function is\n dangerous and should only be called after appropriate checks ensure\n the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation will not violate IFC policy.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "ioTCB",
          "package": "lio",
          "signature": "IO a -\u003e LIO l a",
          "source": "src/LIO-TCB.html#ioTCB",
          "type": "function"
        },
        "index": {
          "description": "Lifts an IO computation into the LIO monad This function is dangerous and should only be called after appropriate checks ensure the IO computation will not violate IFC policy",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "ioTCB",
          "normalized": "IO a-\u003eLIO b a",
          "package": "lio",
          "partial": "TCB",
          "signature": "IO a-\u003eLIO l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:ioTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the label of a labeled value or object.  Note the label\n must be the second to last type constructor argument.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "labelOf",
          "package": "lio",
          "signature": "t l a -\u003e l",
          "source": "src/LIO-TCB.html#labelOf",
          "type": "method"
        },
        "index": {
          "description": "Get the label of labeled value or object Note the label must be the second to last type constructor argument",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "labelOf",
          "normalized": "a b c-\u003eb",
          "package": "lio",
          "partial": "Of",
          "signature": "t l a-\u003el",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:labelOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003eMVar\u003c/code\u003e is empty until such point as \u003ccode\u003e\u003ca\u003elresStatusTCB\u003c/a\u003e\u003c/code\u003e is\n no longer \u003ccode\u003e\u003ca\u003eLResEmpty\u003c/a\u003e\u003c/code\u003e.  Hence, calling \u003ccode\u003ereadMVar\u003c/code\u003e on this field\n allows one to wait for the thread to terminate.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "lresBlockTCB",
          "package": "lio",
          "signature": "(MVar ())",
          "source": "src/LIO-TCB.html#LabeledResult",
          "type": "function"
        },
        "index": {
          "description": "This MVar is empty until such point as lresStatusTCB is no longer LResEmpty Hence calling readMVar on this field allows one to wait for the thread to terminate",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "lresBlockTCB",
          "normalized": "(MVar())",
          "package": "lio",
          "partial": "Block TCB",
          "signature": "(MVar())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:lresBlockTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel of the tresult\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "lresLabelTCB",
          "package": "lio",
          "signature": "l",
          "source": "src/LIO-TCB.html#LabeledResult",
          "type": "function"
        },
        "index": {
          "description": "Label of the tresult",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "lresLabelTCB",
          "package": "lio",
          "partial": "Label TCB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:lresLabelTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult (when it is ready), or the label at which the thread\n terminated, if that label could not flow to \u003ccode\u003e\u003ca\u003elresLabelTCB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "lresStatusTCB",
          "package": "lio",
          "signature": "(IORef (LResStatus l a))",
          "source": "src/LIO-TCB.html#LabeledResult",
          "type": "function"
        },
        "index": {
          "description": "Result when it is ready or the label at which the thread terminated if that label could not flow to lresLabelTCB",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "lresStatusTCB",
          "package": "lio",
          "partial": "Status TCB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:lresStatusTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThread executing the computation\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "lresThreadIdTCB",
          "package": "lio",
          "signature": "ThreadId",
          "source": "src/LIO-TCB.html#LabeledResult",
          "type": "function"
        },
        "index": {
          "description": "Thread executing the computation",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "lresThreadIdTCB",
          "package": "lio",
          "partial": "Thread Id TCB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:lresThreadIdTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple utility function that strips \u003ccode\u003e\u003ca\u003eUncatchableTCB\u003c/a\u003e\u003c/code\u003e from around an\n exception.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "makeCatchable",
          "package": "lio",
          "signature": "SomeException -\u003e SomeException",
          "source": "src/LIO-TCB.html#makeCatchable",
          "type": "function"
        },
        "index": {
          "description": "Simple utility function that strips UncatchableTCB from around an exception",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "makeCatchable",
          "normalized": "SomeException-\u003eSomeException",
          "package": "lio",
          "partial": "Catchable",
          "signature": "SomeException-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:makeCatchable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the internal state given some function.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "modifyLIOStateTCB",
          "package": "lio",
          "signature": "(LIOState l -\u003e LIOState l) -\u003e LIO l ()",
          "source": "src/LIO-TCB.html#modifyLIOStateTCB",
          "type": "function"
        },
        "index": {
          "description": "Update the internal state given some function",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "modifyLIOStateTCB",
          "normalized": "(LIOState a-\u003eLIOState a)-\u003eLIO a()",
          "package": "lio",
          "partial": "LIOState TCB",
          "signature": "(LIOState l-\u003eLIOState l)-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:modifyLIOStateTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet internal state.\n\u003c/p\u003e",
          "module": "LIO.TCB",
          "name": "putLIOStateTCB",
          "package": "lio",
          "signature": "LIOState l -\u003e LIO l ()",
          "source": "src/LIO-TCB.html#putLIOStateTCB",
          "type": "function"
        },
        "index": {
          "description": "Set internal state",
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "putLIOStateTCB",
          "normalized": "LIOState a-\u003eLIO a()",
          "package": "lio",
          "partial": "LIOState TCB",
          "signature": "LIOState l-\u003eLIO l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:putLIOStateTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LIO.TCB",
          "name": "showTCB",
          "package": "lio",
          "signature": "a -\u003e String",
          "source": "src/LIO-TCB.html#showTCB",
          "type": "method"
        },
        "index": {
          "hierarchy": "LIO TCB",
          "module": "LIO.TCB",
          "name": "showTCB",
          "normalized": "a-\u003eString",
          "package": "lio",
          "partial": "TCB",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO-TCB.html#v:showTCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the main module to be included by code using the Labeled IO\n(LIO) library. This module exports the core library (documented in\n\u003ca\u003eLIO.Core\u003c/a\u003e), with support for labels and privileges (documented in\n\u003ca\u003eLIO.Label\u003c/a\u003e) and labeled values (documented in \u003ca\u003eLIO.Labeled\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eCertain symbols in the LIO library, particularly those in\n\u003ca\u003eLIO.Exception\u003c/a\u003e, use the same names as their \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e equivalents in the\nsystem libraries.  Hence main modules consisting mostly of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e code\nthat simply need to run \u003ccode\u003e\u003ca\u003eLIO\u003c/a\u003e\u003c/code\u003e code should import \u003ca\u003eLIO.Run\u003c/a\u003e (or\n\u003ca\u003eLIO.DCLabel\u003c/a\u003e) to avoid polluting their namespaces.\n\u003c/p\u003e\u003cp\u003eMost code will need to use a particular label format, which needs to\nbe imported separately.  Hence, a typical set of imports for an\nuntrusted LIO module is:\n\u003c/p\u003e\u003cpre\u003e\n import \u003ca\u003eLIO\u003c/a\u003e\n import \u003ca\u003eLIO.DCLabel\u003c/a\u003e\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "LIO",
          "name": "LIO",
          "package": "lio",
          "source": "src/LIO.html",
          "type": "module"
        },
        "index": {
          "description": "This is the main module to be included by code using the Labeled IO LIO library This module exports the core library documented in LIO.Core with support for labels and privileges documented in LIO.Label and labeled values documented in LIO.Labeled Certain symbols in the LIO library particularly those in LIO.Exception use the same names as their IO equivalents in the system libraries Hence main modules consisting mostly of IO code that simply need to run LIO code should import LIO.Run or LIO.DCLabel to avoid polluting their namespaces Most code will need to use particular label format which needs to be imported separately Hence typical set of imports for an untrusted LIO module is import LIO import LIO.DCLabel",
          "hierarchy": "LIO",
          "module": "LIO",
          "name": "LIO",
          "package": "lio",
          "partial": "LIO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lio/docs/LIO.html#"
      }
    }
  ]
]