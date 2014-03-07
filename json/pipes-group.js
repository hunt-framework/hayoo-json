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
        "word": "pipes-group"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003epipes-group\u003c/code\u003e builds upon \u003ccode\u003epipes\u003c/code\u003e to establish idioms for grouping streams\n    into sub-streams without collecting elements into memory.  This tutorial\n    assumes familiarity with \u003ccode\u003epipes\u003c/code\u003e and \u003ccode\u003epipes-parse\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Group.Tutorial",
          "name": "Tutorial",
          "package": "pipes-group",
          "source": "src/Pipes-Group-Tutorial.html",
          "type": "module"
        },
        "index": {
          "description": "pipes-group builds upon pipes to establish idioms for grouping streams into sub-streams without collecting elements into memory This tutorial assumes familiarity with pipes and pipes-parse",
          "hierarchy": "Pipes Group Tutorial",
          "module": "Pipes.Group.Tutorial",
          "name": "Tutorial",
          "package": "pipes-group",
          "partial": "Tutorial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group-Tutorial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eElement-agnostic grouping utilities for \u003ccode\u003epipes\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ePipes.Group.Tutorial\u003c/a\u003e for an extended tutorial\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Group",
          "name": "Group",
          "package": "pipes-group",
          "source": "src/Pipes-Group.html",
          "type": "module"
        },
        "index": {
          "description": "Element-agnostic grouping utilities for pipes See Pipes.Group.Tutorial for an extended tutorial",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "Group",
          "package": "pipes-group",
          "partial": "Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003echunksOf\u003c/a\u003e\u003c/code\u003e is an splits a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es of fixed\n    length\n\u003c/p\u003e",
          "module": "Pipes.Group",
          "name": "chunksOf",
          "package": "pipes-group",
          "signature": "Int -\u003e Lens' (Producer a m x) (FreeT (Producer a m) m x)",
          "source": "src/Pipes-Group.html#chunksOf",
          "type": "function"
        },
        "index": {
          "description": "chunksOf is an splits Producer into FreeT of Producer of fixed length",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "chunksOf",
          "normalized": "Int-\u003eLens'(Producer a b c)(FreeT(Producer a b)b c)",
          "package": "pipes-group",
          "partial": "Of",
          "signature": "Int-\u003eLens'(Producer a m x)(FreeT(Producer a m)m x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#v:chunksOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited stream of \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es into a single \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Group",
          "name": "concats",
          "package": "pipes-group",
          "signature": "FreeT (Producer a m) m x -\u003e Producer a m x",
          "source": "src/Pipes-Group.html#concats",
          "type": "function"
        },
        "index": {
          "description": "Join FreeT delimited stream of Producer into single Producer",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "concats",
          "normalized": "FreeT(Producer a b)b c-\u003eProducer a b c",
          "package": "pipes-group",
          "signature": "FreeT(Producer a m)m x-\u003eProducer a m x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#v:concats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(drops n)\u003c/code\u003e peels off the first \u003ccode\u003en\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e layers of a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eUse carefully: the peeling off is not free.   This runs the first \u003ccode\u003en\u003c/code\u003e\n    layers, just discarding everything they produce.\n\u003c/p\u003e",
          "module": "Pipes.Group",
          "name": "drops",
          "package": "pipes-group",
          "signature": "Int -\u003e FreeT (Producer a m) m x -\u003e FreeT (Producer a m) m x",
          "source": "src/Pipes-Group.html#drops",
          "type": "function"
        },
        "index": {
          "description": "drops peels off the first Producer layers of FreeT Use carefully the peeling off is not free This runs the first layers just discarding everything they produce",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "drops",
          "normalized": "Int-\u003eFreeT(Producer a b)b c-\u003eFreeT(Producer a b)b c",
          "package": "pipes-group",
          "signature": "Int-\u003eFreeT(Producer a m)m x-\u003eFreeT(Producer a m)m x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#v:drops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold each \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e purely folds\n     :: Monad m =\u003e Fold a b -\u003e FreeT (Producer a m) m r -\u003e Producer b m r\n\u003c/pre\u003e",
          "module": "Pipes.Group",
          "name": "folds",
          "package": "pipes-group",
          "signature": "(x -\u003e a -\u003e x)-\u003e x-\u003e (x -\u003e b)-\u003e FreeT (Producer a m) m r-\u003e Producer b m r",
          "type": "function"
        },
        "index": {
          "description": "Fold each Producer of FreeT purely folds Monad Fold FreeT Producer Producer",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "folds",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(a-\u003ec)-\u003eFreeT(Producer b d)d e-\u003eProducer c d e",
          "package": "pipes-group",
          "signature": "(x-\u003ea-\u003ex)-\u003ex-\u003e(x-\u003eb)-\u003eFreeT(Producer a m)m r-\u003eProducer b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#v:folds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold each \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e, monadically\n\u003c/p\u003e\u003cpre\u003e impurely foldsM\n     :: Monad m =\u003e FoldM a b -\u003e FreeT (Producer a m) m r -\u003e Producer b m r\n\u003c/pre\u003e",
          "module": "Pipes.Group",
          "name": "foldsM",
          "package": "pipes-group",
          "signature": "(x -\u003e a -\u003e m x)-\u003e m x-\u003e (x -\u003e m b)-\u003e FreeT (Producer a m) m r-\u003e Producer b m r",
          "type": "function"
        },
        "index": {
          "description": "Fold each Producer of FreeT monadically impurely foldsM Monad FoldM FreeT Producer Producer",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "foldsM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ec a-\u003e(a-\u003ec d)-\u003eFreeT(Producer b c)c e-\u003eProducer d c e",
          "package": "pipes-group",
          "signature": "(x-\u003ea-\u003em x)-\u003em x-\u003e(x-\u003em b)-\u003eFreeT(Producer a m)m r-\u003eProducer b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#v:foldsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egroupsBy\u003c/a\u003e\u003c/code\u003e, where the equality predicate is (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Pipes.Group",
          "name": "groups",
          "package": "pipes-group",
          "signature": "Lens' (Producer a m x) (FreeT (Producer a m) m x)",
          "source": "src/Pipes-Group.html#groups",
          "type": "function"
        },
        "index": {
          "description": "Like groupsBy where the equality predicate is",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "groups",
          "package": "pipes-group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#v:groups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egroupsBy\u003c/a\u003e\u003c/code\u003e splits a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es grouped using\n    the given equality predicate\n\u003c/p\u003e",
          "module": "Pipes.Group",
          "name": "groupsBy",
          "package": "pipes-group",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e Lens' (Producer a m x) (FreeT (Producer a m) m x)",
          "source": "src/Pipes-Group.html#groupsBy",
          "type": "function"
        },
        "index": {
          "description": "groupsBy splits Producer into FreeT of Producer grouped using the given equality predicate",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "groupsBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eLens'(Producer a b c)(FreeT(Producer a b)b c)",
          "package": "pipes-group",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003eLens'(Producer a m x)(FreeT(Producer a m)m x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#v:groupsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens to transform each individual functor layer of a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e over individually = maps  -- ... with a less general type\n\u003c/pre\u003e",
          "module": "Pipes.Group",
          "name": "individually",
          "package": "pipes-group",
          "signature": "Setter (FreeT f m x) (FreeT g m x) (f (FreeT f m x)) (g (FreeT f m x))",
          "source": "src/Pipes-Group.html#individually",
          "type": "function"
        },
        "index": {
          "description": "Lens to transform each individual functor layer of FreeT over individually maps with less general type",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "individually",
          "package": "pipes-group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#v:individually"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited stream of \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es into a single \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e by\n    intercalating a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e in between them\n\u003c/p\u003e",
          "module": "Pipes.Group",
          "name": "intercalates",
          "package": "pipes-group",
          "signature": "Producer a m () -\u003e FreeT (Producer a m) m x -\u003e Producer a m x",
          "source": "src/Pipes-Group.html#intercalates",
          "type": "function"
        },
        "index": {
          "description": "Join FreeT delimited stream of Producer into single Producer by intercalating Producer in between them",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "intercalates",
          "normalized": "Producer a b()-\u003eFreeT(Producer a b)b c-\u003eProducer a b c",
          "package": "pipes-group",
          "signature": "Producer a m()-\u003eFreeT(Producer a m)m x-\u003eProducer a m x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#v:intercalates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform each individual functor layer of a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eYou can think of this as:\n\u003c/p\u003e\u003cpre\u003e maps\n     :: (forall r . Producer a m r -\u003e Producer b m r)\n     -\u003e FreeT (Producer a m) m x -\u003e FreeT (Producer b m) m x\n\u003c/pre\u003e\u003cp\u003eThis is just a synonym for \u003ccode\u003e\u003ca\u003etransFreeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Group",
          "name": "maps",
          "package": "pipes-group",
          "signature": "(forall r.  f r -\u003e g r) -\u003e FreeT f m x -\u003e FreeT g m x",
          "source": "src/Pipes-Group.html#maps",
          "type": "function"
        },
        "index": {
          "description": "Transform each individual functor layer of FreeT You can think of this as maps forall Producer Producer FreeT Producer FreeT Producer This is just synonym for transFreeT",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "maps",
          "normalized": "(a b c d-\u003ee d)-\u003eFreeT c f g-\u003eFreeT e f g",
          "package": "pipes-group",
          "signature": "(forall r. f r-\u003eg r)-\u003eFreeT f m x-\u003eFreeT g m x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#v:maps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(takes n)\u003c/code\u003e only keeps the first \u003ccode\u003en\u003c/code\u003e functor layers of a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eYou can think of this as:\n\u003c/p\u003e\u003cpre\u003e takes\n     :: (Functor f, Monad m)\n     =\u003e Int -\u003e FreeT (Producer a m) m () -\u003e FreeT (Producer a m) m ()\n\u003c/pre\u003e",
          "module": "Pipes.Group",
          "name": "takes",
          "package": "pipes-group",
          "signature": "Int -\u003e FreeT f m () -\u003e FreeT f m ()",
          "source": "src/Pipes-Group.html#takes",
          "type": "function"
        },
        "index": {
          "description": "takes only keeps the first functor layers of FreeT You can think of this as takes Functor Monad Int FreeT Producer FreeT Producer",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "takes",
          "normalized": "Int-\u003eFreeT a b()-\u003eFreeT a b()",
          "package": "pipes-group",
          "signature": "Int-\u003eFreeT f m()-\u003eFreeT f m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#v:takes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(takes' n)\u003c/code\u003e only keeps the first \u003ccode\u003en\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es of a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etakes'\u003c/a\u003e\u003c/code\u003e differs from \u003ccode\u003e\u003ca\u003etakes\u003c/a\u003e\u003c/code\u003e by draining unused \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es in order\n    to preserve the return value.  This makes it a suitable argument for \u003ccode\u003e\u003ca\u003emaps\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Group",
          "name": "takes'",
          "package": "pipes-group",
          "signature": "Int -\u003e FreeT (Producer a m) m x -\u003e FreeT (Producer a m) m x",
          "source": "src/Pipes-Group.html#takes%27",
          "type": "function"
        },
        "index": {
          "description": "takes only keeps the first Producer of FreeT takes differs from takes by draining unused Producer in order to preserve the return value This makes it suitable argument for maps",
          "hierarchy": "Pipes Group",
          "module": "Pipes.Group",
          "name": "takes'",
          "normalized": "Int-\u003eFreeT(Producer a b)b c-\u003eFreeT(Producer a b)b c",
          "package": "pipes-group",
          "signature": "Int-\u003eFreeT(Producer a m)m x-\u003eFreeT(Producer a m)m x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-group/docs/Pipes-Group.html#v:takes-39-"
      }
    }
  ]
]