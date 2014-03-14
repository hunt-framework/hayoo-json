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
        "word": "CC-delcont-ref"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonad transformer for multi-prompt delimited control\n\u003c/p\u003e\u003cp\u003eThis library implements the superset of the interface described in\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \"\u003cem\u003eA Monadic Framework for Delimited Continuations\u003c/em\u003e\",\n     R. Kent Dybvig, Simon Peyton Jones, and Amr Sabry\n     JFP, v17, N6, pp. 687--730, 2007.\n     \u003ca\u003ehttp://www.cs.indiana.edu/cgi-bin/techreports/TRNNN.cgi?trnum=TR615\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis code is the straightforward implementation of the\n definitional machine described in the above paper. To be precise,\n we implement an equivalent machine, where captured continuations are\n always sandwiched between two prompts. This equivalence as\n well as the trick to make it all well-typed are described in\n the FLOPS 2010 paper. Therefore, to the great extent\n this code is the straightforward translation of delimcc from OCaml.\n The parallel stack of delimcc is the \u003ccode\u003ereal\u003c/code\u003e stack now (containing\n parts of the real continuation, that is).\n\u003c/p\u003e\u003cp\u003eThis code implements, in CPS, what amounts to a segmented stack\n (the technique of implementing call/cc efficiently, first described in\n Hieb, Dybvig and Bruggeman's PLDI 1990 paper).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.CC.CCRef",
          "name": "CCRef",
          "package": "CC-delcont-ref",
          "source": "src/Control-Monad-CC-CCRef.html",
          "type": "module"
        },
        "index": {
          "description": "Monad transformer for multi-prompt delimited control This library implements the superset of the interface described in Monadic Framework for Delimited Continuations Kent Dybvig Simon Peyton Jones and Amr Sabry JFP v17 N6 pp http www.cs.indiana.edu cgi-bin techreports TRNNN.cgi trnum TR615 This code is the straightforward implementation of the definitional machine described in the above paper To be precise we implement an equivalent machine where captured continuations are always sandwiched between two prompts This equivalence as well as the trick to make it all well-typed are described in the FLOPS paper Therefore to the great extent this code is the straightforward translation of delimcc from OCaml The parallel stack of delimcc is the real stack now containing parts of the real continuation that is This code implements in CPS what amounts to segmented stack the technique of implementing call cc efficiently first described in Hieb Dybvig and Bruggeman PLDI paper",
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "CCRef",
          "package": "CC-delcont-ref",
          "partial": "CCRef",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimited-continuation monad transformer\n The (CC m) monad is the Cont monad with the answer-type (),\n combined with the persistent-state monad. The state PTop is the\n `parallel stack' of delimcc, which is the real stack now. \n The base monad m must support reference cells, that is,\n be a member of the type class Mutation.\n Since we need reference cells anyway, we represent the persistent\n state as a reference cell PTop, which is passed as the environment.\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCRef",
          "name": "CC",
          "package": "CC-delcont-ref",
          "source": "src/Control-Monad-CC-CCRef.html#CC",
          "type": "data"
        },
        "index": {
          "description": "Delimited-continuation monad transformer The CC monad is the Cont monad with the answer-type combined with the persistent-state monad The state PTop is the parallel stack of delimcc which is the real stack now The base monad must support reference cells that is be member of the type class Mutation Since we need reference cells anyway we represent the persistent state as reference cell PTop which is passed as the environment",
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "CC",
          "package": "CC-delcont-ref",
          "partial": "CC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#t:CC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCRef",
          "name": "Mutation",
          "package": "CC-delcont-ref",
          "source": "src/Mutation.html#Mutation",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "Mutation",
          "package": "CC-delcont-ref",
          "partial": "Mutation",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#t:Mutation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of prompts is just like that in OCaml's delimcc\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCRef",
          "name": "Prompt",
          "package": "CC-delcont-ref",
          "source": "src/Control-Monad-CC-CCRef.html#Prompt",
          "type": "data"
        },
        "index": {
          "description": "The type of prompts is just like that in OCaml delimcc",
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "Prompt",
          "package": "CC-delcont-ref",
          "partial": "Prompt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#t:Prompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe context between two exception frames: The captured sub-continuation\n It is a fragment of the parallel stack: a list of PFrames in inverse order.\n Since we are in the Cont monad, there is no \u003ccode\u003ereal\u003c/code\u003e stack:\n the type Ekfragment  is ()\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCRef",
          "name": "SubCont",
          "package": "CC-delcont-ref",
          "source": "src/Control-Monad-CC-CCRef.html#SubCont",
          "type": "data"
        },
        "index": {
          "description": "The context between two exception frames The captured sub-continuation It is fragment of the parallel stack list of PFrames in inverse order Since we are in the Cont monad there is no real stack the type Ekfragment is",
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "SubCont",
          "package": "CC-delcont-ref",
          "partial": "Sub Cont",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#t:SubCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient variation of take_subcont, which does not capture\n any continuation.\n This code makes it clear that abort is essentially raise.\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCRef",
          "name": "abortP",
          "package": "CC-delcont-ref",
          "signature": "Prompt m w -\u003e CC m w -\u003e CC m any",
          "source": "src/Control-Monad-CC-CCRef.html#abortP",
          "type": "function"
        },
        "index": {
          "description": "An efficient variation of take subcont which does not capture any continuation This code makes it clear that abort is essentially raise",
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "abortP",
          "normalized": "Prompt a b-\u003eCC a b-\u003eCC a c",
          "package": "CC-delcont-ref",
          "signature": "Prompt m w-\u003eCC m w-\u003eCC m any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:abortP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCRef",
          "name": "controlP",
          "package": "CC-delcont-ref",
          "signature": "Prompt m w -\u003e ((a -\u003e CC m w) -\u003e CC m w) -\u003e CC m a",
          "source": "src/Control-Monad-CC-CCRef.html#controlP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "controlP",
          "normalized": "Prompt a b-\u003e((c-\u003eCC a b)-\u003eCC a b)-\u003eCC a c",
          "package": "CC-delcont-ref",
          "signature": "Prompt m w-\u003e((a-\u003eCC m w)-\u003eCC m w)-\u003eCC m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:controlP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck to see if a prompt is set\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCRef",
          "name": "isPromptSet",
          "package": "CC-delcont-ref",
          "signature": "Prompt m w -\u003e CC m Bool",
          "source": "src/Control-Monad-CC-CCRef.html#isPromptSet",
          "type": "function"
        },
        "index": {
          "description": "Check to see if prompt is set",
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "isPromptSet",
          "normalized": "Prompt a b-\u003eCC a Bool",
          "package": "CC-delcont-ref",
          "partial": "Prompt Set",
          "signature": "Prompt m w-\u003eCC m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:isPromptSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCRef",
          "name": "newPrompt",
          "package": "CC-delcont-ref",
          "signature": "CC m (Prompt m a)",
          "source": "src/Control-Monad-CC-CCRef.html#newPrompt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "newPrompt",
          "package": "CC-delcont-ref",
          "partial": "Prompt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:newPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCRef",
          "name": "newRef",
          "package": "CC-delcont-ref",
          "signature": "a -\u003e m (Ref m a)",
          "source": "src/Mutation.html#newRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "newRef",
          "normalized": "a-\u003eb(Ref b a)",
          "package": "CC-delcont-ref",
          "partial": "Ref",
          "signature": "a-\u003em(Ref m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn optimization: pushing the _delimited_ continuation.\n This is the optimization of the pattern\n\u003c/p\u003e\u003cpre\u003e     pushPrompt (subcont_pb sk) (pushSubcont sk m)\n\u003c/pre\u003e\u003cp\u003ecorresponding to pushing the continuation captured by shift/shift0. \n The latter continuation always has the delimiter at the end.\n Indeed shift can be implemented more efficiently as a primitive\n rather than via push_prompt/control combination...\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCRef",
          "name": "pushDelimSubCont",
          "package": "CC-delcont-ref",
          "signature": "SubCont m a b -\u003e CC m a -\u003e CC m b",
          "source": "src/Control-Monad-CC-CCRef.html#pushDelimSubCont",
          "type": "function"
        },
        "index": {
          "description": "An optimization pushing the delimited continuation This is the optimization of the pattern pushPrompt subcont pb sk pushSubcont sk corresponding to pushing the continuation captured by shift shift0 The latter continuation always has the delimiter at the end Indeed shift can be implemented more efficiently as primitive rather than via push prompt control combination",
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "pushDelimSubCont",
          "normalized": "SubCont a b c-\u003eCC a b-\u003eCC a c",
          "package": "CC-delcont-ref",
          "partial": "Delim Sub Cont",
          "signature": "SubCont m a b-\u003eCC m a-\u003eCC m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:pushDelimSubCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCRef",
          "name": "pushPrompt",
          "package": "CC-delcont-ref",
          "signature": "Prompt m w -\u003e CC m w -\u003e CC m w",
          "source": "src/Control-Monad-CC-CCRef.html#pushPrompt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "pushPrompt",
          "normalized": "Prompt a b-\u003eCC a b-\u003eCC a b",
          "package": "CC-delcont-ref",
          "partial": "Prompt",
          "signature": "Prompt m w-\u003eCC m w-\u003eCC m w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:pushPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCRef",
          "name": "pushSubCont",
          "package": "CC-delcont-ref",
          "signature": "SubCont m a b -\u003e CC m a -\u003e CC m b",
          "source": "src/Control-Monad-CC-CCRef.html#pushSubCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "pushSubCont",
          "normalized": "SubCont a b c-\u003eCC a b-\u003eCC a c",
          "package": "CC-delcont-ref",
          "partial": "Sub Cont",
          "signature": "SubCont m a b-\u003eCC m a-\u003eCC m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:pushSubCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCRef",
          "name": "readRef",
          "package": "CC-delcont-ref",
          "signature": "Ref m a -\u003e m a",
          "source": "src/Mutation.html#readRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "readRef",
          "normalized": "Ref a b-\u003ea b",
          "package": "CC-delcont-ref",
          "partial": "Ref",
          "signature": "Ref m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:readRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCRef",
          "name": "runCC",
          "package": "CC-delcont-ref",
          "signature": "CC m a -\u003e m a",
          "source": "src/Control-Monad-CC-CCRef.html#runCC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "runCC",
          "normalized": "CC a b-\u003ea b",
          "package": "CC-delcont-ref",
          "partial": "CC",
          "signature": "CC m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:runCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCRef",
          "name": "shift0P",
          "package": "CC-delcont-ref",
          "signature": "Prompt m w -\u003e ((a -\u003e CC m w) -\u003e CC m w) -\u003e CC m a",
          "source": "src/Control-Monad-CC-CCRef.html#shift0P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "shift0P",
          "normalized": "Prompt a b-\u003e((c-\u003eCC a b)-\u003eCC a b)-\u003eCC a c",
          "package": "CC-delcont-ref",
          "signature": "Prompt m w-\u003e((a-\u003eCC m w)-\u003eCC m w)-\u003eCC m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:shift0P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCRef",
          "name": "shiftP",
          "package": "CC-delcont-ref",
          "signature": "Prompt m w -\u003e ((a -\u003e CC m w) -\u003e CC m w) -\u003e CC m a",
          "source": "src/Control-Monad-CC-CCRef.html#shiftP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "shiftP",
          "normalized": "Prompt a b-\u003e((c-\u003eCC a b)-\u003eCC a b)-\u003eCC a c",
          "package": "CC-delcont-ref",
          "signature": "Prompt m w-\u003e((a-\u003eCC m w)-\u003eCC m w)-\u003eCC m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:shiftP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCRef",
          "name": "takeSubCont",
          "package": "CC-delcont-ref",
          "signature": "Prompt m b -\u003e (SubCont m a b -\u003e CC m b) -\u003e CC m a",
          "source": "src/Control-Monad-CC-CCRef.html#takeSubCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "takeSubCont",
          "normalized": "Prompt a b-\u003e(SubCont a c b-\u003eCC a b)-\u003eCC a c",
          "package": "CC-delcont-ref",
          "partial": "Sub Cont",
          "signature": "Prompt m b-\u003e(SubCont m a b-\u003eCC m b)-\u003eCC m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:takeSubCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCRef",
          "name": "writeRef",
          "package": "CC-delcont-ref",
          "signature": "Ref m a -\u003e a -\u003e m ()",
          "source": "src/Mutation.html#writeRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad CC CCRef",
          "module": "Control.Monad.CC.CCRef",
          "name": "writeRef",
          "normalized": "Ref a b-\u003eb-\u003ea()",
          "package": "CC-delcont-ref",
          "partial": "Ref",
          "signature": "Ref m a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-ref/docs/Control-Monad-CC-CCRef.html#v:writeRef"
      }
    }
  ]
]