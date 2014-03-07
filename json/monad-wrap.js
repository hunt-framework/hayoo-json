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
        "word": "monad-wrap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MultiLift",
          "name": "MultiLift",
          "package": "monad-wrap",
          "source": "src/Control-Monad-MultiLift.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad MultiLift",
          "module": "Control.Monad.MultiLift",
          "name": "MultiLift",
          "package": "monad-wrap",
          "partial": "Multi Lift",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-MultiLift.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMultiLift\u003c/a\u003e\u003c/code\u003e provides an \u003ccode\u003e\u003ca\u003emlift\u003c/a\u003e\u003c/code\u003e method that invokes the \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n method of \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e multiple times, based on the requested\n argument and result type.  You will usually have to specify the\n type of the argument explicitly.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003emlift\u003c/a\u003e\u003c/code\u003e only works with up to 9 levels of nested monad\n transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.MultiLift",
          "name": "MultiLift",
          "package": "monad-wrap",
          "source": "src/Control-Monad-MultiLift.html#MultiLift",
          "type": "class"
        },
        "index": {
          "description": "MultiLift provides an mlift method that invokes the lift method of MonadTrans multiple times based on the requested argument and result type You will usually have to specify the type of the argument explicitly Note that mlift only works with up to levels of nested monad transformer",
          "hierarchy": "Control Monad MultiLift",
          "module": "Control.Monad.MultiLift",
          "name": "MultiLift",
          "package": "monad-wrap",
          "partial": "Multi Lift",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-MultiLift.html#t:MultiLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MultiLift",
          "name": "mlift",
          "package": "monad-wrap",
          "signature": "mIn a -\u003e mOut a",
          "source": "src/Control-Monad-MultiLift.html#mlift",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad MultiLift",
          "module": "Control.Monad.MultiLift",
          "name": "mlift",
          "normalized": "a b-\u003ec b",
          "package": "monad-wrap",
          "signature": "mIn a-\u003emOut a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-MultiLift.html#v:mlift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MultiWrap",
          "name": "MultiWrap",
          "package": "monad-wrap",
          "source": "src/Control-Monad-MultiWrap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad MultiWrap",
          "module": "Control.Monad.MultiWrap",
          "name": "MultiWrap",
          "package": "monad-wrap",
          "partial": "Multi Wrap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-MultiWrap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMultiWrap\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003eMonadWrapIO\u003c/code\u003e, but for monads created by\n \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e transformers.  This is useful, if, for example, you\n implement your own monad, \u003ccode\u003eReaderTLike\u003c/code\u003e, that is like a \u003ccode\u003eReaderT\u003c/code\u003e\n except that you don't want to make it a member of the \u003ccode\u003eMonadReader\u003c/code\u003e\n class because you are already using \u003ccode\u003eMonadReader\u003c/code\u003e for some\n different state (or because you are implementing a library and the\n user of the library should be free to use \u003ccode\u003eReaderT\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eAs long as \u003ccode\u003eReaderTLike\u003c/code\u003e is a member of the \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e class and\n assuming you have a \u003ccode\u003elocalLike\u003c/code\u003e function equivalent to \u003ccode\u003elocal\u003c/code\u003e, you\n should be able to run things like:\n\u003c/p\u003e\u003cpre\u003e    mwrap (localLike modifyConfig :: ReaderTLike IO a -\u003e ReaderTLike IO a)\n          someComputation\n\u003c/pre\u003e\u003cp\u003eYou will generally have to specify the type of the wrap function or\n computation explicitly, but as long as you specify the type,\n \u003ccode\u003e\u003ca\u003emwrap\u003c/a\u003e\u003c/code\u003e saves you from keeping track of how many nested levels of\n transformer you have and from having to invoke \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e repeatedly.\n\u003c/p\u003e\u003cp\u003eNote one difference from \u003ccode\u003e\u003ca\u003eMonadWrap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eMonadWrapIO\u003c/code\u003e is that\n \u003ccode\u003e\u003ca\u003emresult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emresultF\u003c/a\u003e\u003c/code\u003e require an extra argument so as to specify\n the inner monad in which you want to supply the result.  (E.g., in\n the case of using \u003ccode\u003ecatch\u003c/code\u003e to produce a different return value in\n case of exceptions, the inner monad would be \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, and the extra\n argument might be supplied as \u003ccode\u003e(undefined :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e Type)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eMultiWrap\u003c/a\u003e\u003c/code\u003e only works for up to 9 levels of nested\n monad transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.MultiWrap",
          "name": "MultiWrap",
          "package": "monad-wrap",
          "source": "src/Control-Monad-MultiWrap.html#MultiWrap",
          "type": "class"
        },
        "index": {
          "description": "MultiWrap is like MonadWrapIO but for monads created by MonadTrans transformers This is useful if for example you implement your own monad ReaderTLike that is like ReaderT except that you don want to make it member of the MonadReader class because you are already using MonadReader for some different state or because you are implementing library and the user of the library should be free to use ReaderT As long as ReaderTLike is member of the MonadTrans class and assuming you have localLike function equivalent to local you should be able to run things like mwrap localLike modifyConfig ReaderTLike IO ReaderTLike IO someComputation You will generally have to specify the type of the wrap function or computation explicitly but as long as you specify the type mwrap saves you from keeping track of how many nested levels of transformer you have and from having to invoke wrap repeatedly Note one difference from MonadWrap and MonadWrapIO is that mresult and mresultF require an extra argument so as to specify the inner monad in which you want to supply the result E.g in the case of using catch to produce different return value in case of exceptions the inner monad would be IO and the extra argument might be supplied as undefined IO Type Note that MultiWrap only works for up to levels of nested monad transformer",
          "hierarchy": "Control Monad MultiWrap",
          "module": "Control.Monad.MultiWrap",
          "name": "MultiWrap",
          "package": "monad-wrap",
          "partial": "Multi Wrap",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-MultiWrap.html#t:MultiWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MultiWrap",
          "name": "mresult",
          "package": "monad-wrap",
          "signature": "mIn b -\u003e a -\u003e mOut r",
          "source": "src/Control-Monad-MultiWrap.html#mresult",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad MultiWrap",
          "module": "Control.Monad.MultiWrap",
          "name": "mresult",
          "normalized": "a b-\u003ec-\u003ed e",
          "package": "monad-wrap",
          "signature": "mIn b-\u003ea-\u003emOut r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-MultiWrap.html#v:mresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MultiWrap",
          "name": "mresultF",
          "package": "monad-wrap",
          "signature": "mresultF",
          "source": "src/Control-Monad-MultiWrap.html#mresultF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad MultiWrap",
          "module": "Control.Monad.MultiWrap",
          "name": "mresultF",
          "package": "monad-wrap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-MultiWrap.html#v:mresultF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MultiWrap",
          "name": "mwrap",
          "package": "monad-wrap",
          "signature": "(mIn r -\u003e mIn r) -\u003e mOut a -\u003e mOut a",
          "source": "src/Control-Monad-MultiWrap.html#mwrap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad MultiWrap",
          "module": "Control.Monad.MultiWrap",
          "name": "mwrap",
          "normalized": "(a b-\u003ea b)-\u003ec d-\u003ec d",
          "package": "monad-wrap",
          "signature": "(mIn r-\u003emIn r)-\u003emOut a-\u003emOut a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-MultiWrap.html#v:mwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass of monad transformers whose computations can be wrapped by\n   functions such as \u003ccode\u003ecatch\u003c/code\u003e and \u003ccode\u003efinally\u003c/code\u003e that operate on inner\n   monadic types.  This works for all standard monad transformers\n   except for \u003ccode\u003eContT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe main method in this module is \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e, which wraps a function on\n   one monad around a transformed version of that monad.  This is\n   useful in many situations, but it is important to keep in mind that\n   this will affect the semantics of the monad.  For example, if you\n   wrap \u003ccode\u003eforkIO\u003c/code\u003e around a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e X \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e monad, it will fork the\n   state of the monad into two independently updated copies of the\n   state, one for each thread.  Similarly, if you wrap \u003ccode\u003ecatch\u003c/code\u003e around\n   a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e X \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e monad, you can catch an exception and return a\n   value, but the writer state will be re-wound to the point at which\n   you computed the result value (using \u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eresultF\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Wrap",
          "name": "Wrap",
          "package": "monad-wrap",
          "source": "src/Control-Monad-Wrap.html",
          "type": "module"
        },
        "index": {
          "description": "Class of monad transformers whose computations can be wrapped by functions such as catch and finally that operate on inner monadic types This works for all standard monad transformers except for ContT The main method in this module is wrap which wraps function on one monad around transformed version of that monad This is useful in many situations but it is important to keep in mind that this will affect the semantics of the monad For example if you wrap forkIO around StateT IO monad it will fork the state of the monad into two independently updated copies of the state one for each thread Similarly if you wrap catch around WriterT IO monad you can catch an exception and return value but the writer state will be re-wound to the point at which you computed the result value using result or resultF",
          "hierarchy": "Control Monad Wrap",
          "module": "Control.Monad.Wrap",
          "name": "Wrap",
          "package": "monad-wrap",
          "partial": "Wrap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-Wrap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Wrap",
          "name": "MonadWrap",
          "package": "monad-wrap",
          "source": "src/Control-Monad-Wrap.html#MonadWrap",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Wrap",
          "module": "Control.Monad.Wrap",
          "name": "MonadWrap",
          "package": "monad-wrap",
          "partial": "Monad Wrap",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-Wrap.html#t:MonadWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes the wrapping function passed as the first argument\n of \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e needs to produce its own return value rather than\n passing one straight through.  This is the case with \u003ccode\u003ecatch\u003c/code\u003e.\n To do this, use \u003ccode\u003eresult\u003c/code\u003e to tranlate a pure value into the\n inner-monad value required by the outer monad transformer.\n\u003c/p\u003e\u003cp\u003e(Note that \u003ccode\u003eresult\u003c/code\u003e is basically a pure transofmation, but it\n produces a value in the outer monad primarily just so that it\n can infer from context what type of result to produce.  The\n pure value returned must be lifted into the inner monad with\n \u003ccode\u003ereturn\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eresult\u003c/code\u003e is perhaps best illustrated by example.  With a\n single level of nesting, use something like:\n\u003c/p\u003e\u003cpre\u003e    err \u003c- result Nothing\n    wrap (handle (\\(SomeException _) -\u003e return err))\n          $ liftM Just $ someIOComputation\n\u003c/pre\u003e\u003cp\u003eFor multiple levels of nesting, you will need to invoke\n \u003ccode\u003eresult\u003c/code\u003e multiple times, e.g.:\n\u003c/p\u003e\u003cpre\u003e    outerErr \u003c- result Nothing\n    innerErr \u003c- lift $ result outerErr\n    wrap (wrap (handle (\\(SomeException _) -\u003e return innerErr)))\n          $ liftM Just $ someIOComputation\n\u003c/pre\u003e\u003cp\u003eNote the use of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e so as to compute the inner result\n transformation in the inner monad.  Further levels of nesting\n require increasing numbers of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eIt is important to keep in mind that where you invoke \u003ccode\u003eresult\u003c/code\u003e\n (or \u003ccode\u003e\u003ca\u003eresultF\u003c/a\u003e\u003c/code\u003e) may affect the result.  For instance, with the\n \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e transformer, if you return a value\n computed with \u003ccode\u003eresult\u003c/code\u003e, the state will be re-wound to the\n point at which you called \u003ccode\u003eresult\u003c/code\u003e, discarding any changes that\n may have taken place in the mean time.\n\u003c/p\u003e",
          "module": "Control.Monad.Wrap",
          "name": "result",
          "package": "monad-wrap",
          "signature": "a -\u003e t m r",
          "source": "src/Control-Monad-Wrap.html#result",
          "type": "method"
        },
        "index": {
          "description": "Sometimes the wrapping function passed as the first argument of wrap needs to produce its own return value rather than passing one straight through This is the case with catch To do this use result to tranlate pure value into the inner-monad value required by the outer monad transformer Note that result is basically pure transofmation but it produces value in the outer monad primarily just so that it can infer from context what type of result to produce The pure value returned must be lifted into the inner monad with return result is perhaps best illustrated by example With single level of nesting use something like err result Nothing wrap handle SomeException return err liftM Just someIOComputation For multiple levels of nesting you will need to invoke result multiple times e.g outerErr result Nothing innerErr lift result outerErr wrap wrap handle SomeException return innerErr liftM Just someIOComputation Note the use of lift so as to compute the inner result transformation in the inner monad Further levels of nesting require increasing numbers of lift It is important to keep in mind that where you invoke result or resultF may affect the result For instance with the StateT or WriterT transformer if you return value computed with result the state will be re-wound to the point at which you called result discarding any changes that may have taken place in the mean time",
          "hierarchy": "Control Monad Wrap",
          "module": "Control.Monad.Wrap",
          "name": "result",
          "normalized": "a-\u003eb c d",
          "package": "monad-wrap",
          "signature": "a-\u003et m r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-Wrap.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eresultF\u003c/code\u003e returns a function that can be used to perform the\n same transformation as \u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e.  This is necessary if you need\n to compute the result type dynamically within the wrapping\n function.  \u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e can be implemented in terms of \u003ccode\u003eresultF\u003c/code\u003e\n as:\n\u003c/p\u003e\u003cpre\u003e  result a = do f \u003c- resultF\n                return (f a)\n\u003c/pre\u003e\u003cp\u003eThe example given above for \u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e could altenratively have\n been implemented as:\n\u003c/p\u003e\u003cpre\u003e    fout \u003c- resultF\n    fin \u003c- lift resultF\n    let f = fin . fout\n    wrap (wrap (handle (\\(SomeException _) -\u003e return $ f Nothing)))\n          $ liftM Just $ someIOComputation\n\u003c/pre\u003e\u003cp\u003eNote that the order of composition is \u003ccode\u003ef = fin . fout\u003c/code\u003e, and\n \u003cem\u003enot\u003c/em\u003e \u003ccode\u003ef = fout . fin\u003c/code\u003e.  This is because types and result\n values nest in opposite directions with monad transformers.\n Even though \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is the inner monad in a type such as\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e, running any computation of this\n type produces a value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e ((), \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Wrap",
          "name": "resultF",
          "package": "monad-wrap",
          "signature": "t m (a -\u003e r)",
          "source": "src/Control-Monad-Wrap.html#resultF",
          "type": "method"
        },
        "index": {
          "description": "resultF returns function that can be used to perform the same transformation as result This is necessary if you need to compute the result type dynamically within the wrapping function result can be implemented in terms of resultF as result do resultF return The example given above for result could altenratively have been implemented as fout resultF fin lift resultF let fin fout wrap wrap handle SomeException return Nothing liftM Just someIOComputation Note that the order of composition is fin fout and not fout fin This is because types and result values nest in opposite directions with monad transformers Even though IO is the inner monad in type such as WriterT String IO running any computation of this type produces value of type IO String",
          "hierarchy": "Control Monad Wrap",
          "module": "Control.Monad.Wrap",
          "name": "resultF",
          "normalized": "a b(c-\u003ed)",
          "package": "monad-wrap",
          "signature": "t m(a-\u003er)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-Wrap.html#v:resultF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is called to wrap a computation in a tansformed\n monad, \u003ccode\u003et m\u003c/code\u003e, with a function that expects an argument and\n returns a result of the inner monadic type, \u003ccode\u003em\u003c/code\u003e.  The canonical\n example of this is using a monad transformer such as \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e,\n having a computation \u003ccode\u003ex :: \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e MyConfig \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, and\n wanting to wrap a function such as\n \u003ccode\u003e\u003ccode\u003efinally\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e b -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e\n around \u003ccode\u003ex\u003c/code\u003e to run a \u003ccode\u003ecleanup\u003c/code\u003e function even when an\n exception is thrown.  If \u003ccode\u003ex\u003c/code\u003e invokes a \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e function such\n as \u003ccode\u003eask\u003c/code\u003e, this cannot be accomplished with the ordinary monad\n transformer method \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e.  Instead, it can be achieved with:\n\u003c/p\u003e\u003cpre\u003e    wrap (\\op -\u003e op `finally` cleanup) x\n\u003c/pre\u003e\u003cp\u003eIf the inner monad is nested within multiple levels of\n transformer, you can invoke \u003ccode\u003ewrap\u003c/code\u003e multiple times, e.g.:\n\u003c/p\u003e\u003cpre\u003e    wrap (wrap (\\op -\u003e op `finally` cleanup)) x\n\u003c/pre\u003e",
          "module": "Control.Monad.Wrap",
          "name": "wrap",
          "package": "monad-wrap",
          "signature": "(m r -\u003e m r) -\u003e t m a -\u003e t m a",
          "source": "src/Control-Monad-Wrap.html#wrap",
          "type": "method"
        },
        "index": {
          "description": "This function is called to wrap computation in tansformed monad with function that expects an argument and returns result of the inner monadic type The canonical example of this is using monad transformer such as ReaderT having computation ReaderT MyConfig IO and wanting to wrap function such as finally IO IO around to run cleanup function even when an exception is thrown If invokes ReaderT function such as ask this cannot be accomplished with the ordinary monad transformer method lift Instead it can be achieved with wrap op op finally cleanup If the inner monad is nested within multiple levels of transformer you can invoke wrap multiple times e.g wrap wrap op op finally cleanup",
          "hierarchy": "Control Monad Wrap",
          "module": "Control.Monad.Wrap",
          "name": "wrap",
          "normalized": "(a b-\u003ea b)-\u003ec a d-\u003ec a d",
          "package": "monad-wrap",
          "signature": "(m r-\u003em r)-\u003et m a-\u003et m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-Wrap.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadWrapBase\u003c/a\u003e\u003c/code\u003e is a generalized version of \u003ccode\u003eMonadWrapIO\u003c/code\u003e to work\n around transformed versions of other base monads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.WrapBase",
          "name": "WrapBase",
          "package": "monad-wrap",
          "source": "src/Control-Monad-WrapBase.html",
          "type": "module"
        },
        "index": {
          "description": "MonadWrapBase is generalized version of MonadWrapIO to work around transformed versions of other base monads",
          "hierarchy": "Control Monad WrapBase",
          "module": "Control.Monad.WrapBase",
          "name": "WrapBase",
          "package": "monad-wrap",
          "partial": "Wrap Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-WrapBase.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.WrapBase",
          "name": "MonadWrapBase",
          "package": "monad-wrap",
          "source": "src/Control-Monad-WrapBase.html#MonadWrapBase",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad WrapBase",
          "module": "Control.Monad.WrapBase",
          "name": "MonadWrapBase",
          "package": "monad-wrap",
          "partial": "Monad Wrap Base",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-WrapBase.html#t:MonadWrapBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.WrapBase",
          "name": "resultBase",
          "package": "monad-wrap",
          "signature": "a -\u003e m r",
          "source": "src/Control-Monad-WrapBase.html#resultBase",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad WrapBase",
          "module": "Control.Monad.WrapBase",
          "name": "resultBase",
          "normalized": "a-\u003eb c",
          "package": "monad-wrap",
          "partial": "Base",
          "signature": "a-\u003em r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-WrapBase.html#v:resultBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.WrapBase",
          "name": "resultFBase",
          "package": "monad-wrap",
          "signature": "m (a -\u003e r)",
          "source": "src/Control-Monad-WrapBase.html#resultFBase",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad WrapBase",
          "module": "Control.Monad.WrapBase",
          "name": "resultFBase",
          "normalized": "a(b-\u003ec)",
          "package": "monad-wrap",
          "partial": "FBase",
          "signature": "m(a-\u003er)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-WrapBase.html#v:resultFBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.WrapBase",
          "name": "wrapBase",
          "package": "monad-wrap",
          "signature": "(b r -\u003e b r) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-WrapBase.html#wrapBase",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad WrapBase",
          "module": "Control.Monad.WrapBase",
          "name": "wrapBase",
          "normalized": "(a b-\u003ea b)-\u003ec d-\u003ec d",
          "package": "monad-wrap",
          "partial": "Base",
          "signature": "(b r-\u003eb r)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-WrapBase.html#v:wrapBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.WrapIO",
          "name": "WrapIO",
          "package": "monad-wrap",
          "source": "src/Control-Monad-WrapIO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad WrapIO",
          "module": "Control.Monad.WrapIO",
          "name": "WrapIO",
          "package": "monad-wrap",
          "partial": "Wrap IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-WrapIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadWrapIO is analogous to \u003ccode\u003e\u003ca\u003eMonadWrap\u003c/a\u003e\u003c/code\u003e, but where the wrapping\n function is always of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e r -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e r\u003c/code\u003e.  The point of\n \u003ccode\u003eMonadWrapIO\u003c/code\u003e is to go through as many nested monad transformers as\n necessary to reach the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, so you don't have to keep track\n of where you are in terms of monad nesting depth.\n\u003c/p\u003e",
          "module": "Control.Monad.WrapIO",
          "name": "MonadWrapIO",
          "package": "monad-wrap",
          "source": "src/Control-Monad-WrapIO.html#MonadWrapIO",
          "type": "class"
        },
        "index": {
          "description": "MonadWrapIO is analogous to MonadWrap but where the wrapping function is always of type IO IO The point of MonadWrapIO is to go through as many nested monad transformers as necessary to reach the IO monad so you don have to keep track of where you are in terms of monad nesting depth",
          "hierarchy": "Control Monad WrapIO",
          "module": "Control.Monad.WrapIO",
          "name": "MonadWrapIO",
          "package": "monad-wrap",
          "partial": "Monad Wrap IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-WrapIO.html#t:MonadWrapIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eresultFIO\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003eresultF\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003eliftIO\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.WrapIO",
          "name": "resultFIO",
          "package": "monad-wrap",
          "signature": "m (a -\u003e r)",
          "source": "src/Control-Monad-WrapIO.html#resultFIO",
          "type": "method"
        },
        "index": {
          "description": "resultFIO is to resultF as liftIO is to lift",
          "hierarchy": "Control Monad WrapIO",
          "module": "Control.Monad.WrapIO",
          "name": "resultFIO",
          "normalized": "a(b-\u003ec)",
          "package": "monad-wrap",
          "partial": "FIO",
          "signature": "m(a-\u003er)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-WrapIO.html#v:resultFIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eresultIO\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003eliftIO\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.WrapIO",
          "name": "resultIO",
          "package": "monad-wrap",
          "signature": "a -\u003e m r",
          "source": "src/Control-Monad-WrapIO.html#resultIO",
          "type": "method"
        },
        "index": {
          "description": "resultIO is to result as liftIO is to lift",
          "hierarchy": "Control Monad WrapIO",
          "module": "Control.Monad.WrapIO",
          "name": "resultIO",
          "normalized": "a-\u003eb c",
          "package": "monad-wrap",
          "partial": "IO",
          "signature": "a-\u003em r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-WrapIO.html#v:resultIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewrapIO\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003eliftIO\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.WrapIO",
          "name": "wrapIO",
          "package": "monad-wrap",
          "signature": "(IO r -\u003e IO r) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-WrapIO.html#wrapIO",
          "type": "method"
        },
        "index": {
          "description": "wrapIO is to wrap as liftIO is to lift",
          "hierarchy": "Control Monad WrapIO",
          "module": "Control.Monad.WrapIO",
          "name": "wrapIO",
          "normalized": "(IO a-\u003eIO a)-\u003eb c-\u003eb c",
          "package": "monad-wrap",
          "partial": "IO",
          "signature": "(IO r-\u003eIO r)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-wrap/docs/Control-Monad-WrapIO.html#v:wrapIO"
      }
    }
  ]
]