[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loop-while/docs/Control-Monad-LoopWhile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing a monad transformer for performing while loops.  There\n is nothing here that can't be built using if-then-else, but it can allow you\n to express control more succinctly.\n\u003c/p\u003e\u003cp\u003eFor example, here is a loop that executes until a certain time is reached:\n\u003c/p\u003e\u003cpre\u003e loop $ do lift performAction\n           t \u003c- lift getTime\n           while (t \u003c endTime)\n\u003c/pre\u003e\u003cp\u003eThis would commonly be called a do-while loop in other languages.  But the while\n statement does not have to be at the end of the loop:\n\u003c/p\u003e\u003cpre\u003e loop $ do lift performAction\n           t \u003c- lift getTime\n           while (t \u003c endTime)\n           lift $ putStrLn (\"Cur Time: \" ++ show t)\n\u003c/pre\u003e\u003cp\u003eThis is sometimes known as do-while-do.  Note that like other monad\n transformers, you'll either need to explicitly lift the actions from the\n transformed monad, or use an mtl-style type-class to do so.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.LoopWhile",
        "fct-package": "loop-while",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-LoopWhile.html",
        "fct-type": "module",
        "title": "LoopWhile"
      },
      "index": {
        "description": "module containing monad transformer for performing while loops There is nothing here that can be built using if-then-else but it can allow you to express control more succinctly For example here is loop that executes until certain time is reached loop do lift performAction lift getTime while endTime This would commonly be called do-while loop in other languages But the while statement does not have to be at the end of the loop loop do lift performAction lift getTime while endTime lift putStrLn Cur Time show This is sometimes known as do-while-do Note that like other monad transformers you ll either need to explicitly lift the actions from the transformed monad or use an mtl-style type-class to do so",
        "hierarchy": "Control Monad LoopWhile",
        "module": "Control.Monad.LoopWhile",
        "name": "LoopWhile",
        "normalized": "",
        "package": "loop-while",
        "partial": "Loop While",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loop-while/docs/Control-Monad-LoopWhile.html#t:LoopWhileT",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer for easier looping.  See \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewhile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.LoopWhile",
        "fct-package": "loop-while",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-LoopWhile.html#LoopWhileT",
        "fct-type": "data",
        "title": "LoopWhileT"
      },
      "index": {
        "description": "monad transformer for easier looping See loop and while",
        "hierarchy": "Control Monad LoopWhile",
        "module": "Control.Monad.LoopWhile",
        "name": "LoopWhileT",
        "normalized": "",
        "package": "loop-while",
        "partial": "Loop While",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loop-while/docs/Control-Monad-LoopWhile.html#v:loop",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given action in a loop, executing it repeatedly until a \u003ccode\u003e\u003ca\u003ewhile\u003c/a\u003e\u003c/code\u003e\n statement inside it has a False condition.  If you use \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e without \u003ccode\u003e\u003ca\u003ewhile\u003c/a\u003e\u003c/code\u003e,\n the effect is the same as \u003ccode\u003eforever\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.LoopWhile",
        "fct-package": "loop-while",
        "fct-signature": "LoopWhileT m a -\u003e m ()",
        "fct-source": "src/Control-Monad-LoopWhile.html#loop",
        "fct-type": "function",
        "title": "loop"
      },
      "index": {
        "description": "Runs the given action in loop executing it repeatedly until while statement inside it has False condition If you use loop without while the effect is the same as forever",
        "hierarchy": "Control Monad LoopWhile",
        "module": "Control.Monad.LoopWhile",
        "name": "loop",
        "normalized": "LoopWhileT a b-\u003ea()",
        "package": "loop-while",
        "partial": "",
        "signature": "LoopWhileT m a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loop-while/docs/Control-Monad-LoopWhile.html#v:while",
      "description": {
        "fct-descr": "\u003cp\u003eContinues executing the loop if the given value is True.  If the value\n is False, the loop is broken immediately, and control returns to the\n caller of the \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e statement.  Thus you can build pre-condition,\n post-condition, and \"mid-condition\" loops, placing the condition wherever\n you like.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.LoopWhile",
        "fct-package": "loop-while",
        "fct-signature": "Bool -\u003e LoopWhileT m ()",
        "fct-source": "src/Control-Monad-LoopWhile.html#while",
        "fct-type": "function",
        "title": "while"
      },
      "index": {
        "description": "Continues executing the loop if the given value is True If the value is False the loop is broken immediately and control returns to the caller of the loop statement Thus you can build pre-condition post-condition and mid-condition loops placing the condition wherever you like",
        "hierarchy": "Control Monad LoopWhile",
        "module": "Control.Monad.LoopWhile",
        "name": "while",
        "normalized": "Bool-\u003eLoopWhileT a()",
        "package": "loop-while",
        "partial": "",
        "signature": "Bool-\u003eLoopWhileT m()"
      }
    }
  }
]