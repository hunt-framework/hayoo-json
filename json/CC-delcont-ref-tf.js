[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonad transformer for multi-prompt delimited control\n\u003c/p\u003e\u003cp\u003eThis library implements the superset of the interface described in\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \"\u003cem\u003eA Monadic Framework for Delimited Continuations\u003c/em\u003e\",\n     R. Kent Dybvig, Simon Peyton Jones, and Amr Sabry\n     JFP, v17, N6, pp. 687--730, 2007.\n     \u003ca\u003ehttp://www.cs.indiana.edu/cgi-bin/techreports/TRNNN.cgi?trnum=TR615\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis code is the straightforward implementation of the\n definitional machine described in the above paper. To be precise,\n we implement an equivalent machine, where captured continuations are\n always sandwiched between two prompts. This equivalence as\n well as the trick to make it all well-typed are described in\n the FLOPS 2010 paper. Therefore, to the great extent\n this code is the straightforward translation of delimcc from OCaml.\n The parallel stack of delimcc is the \u003ccode\u003ereal\u003c/code\u003e stack now (containing\n parts of the real continuation, that is).\n\u003c/p\u003e\u003cp\u003eThis code implements, in CPS, what amounts to a segmented stack\n (the technique of implementing call/cc efficiently, first described in\n Hieb, Dybvig and Bruggeman's PLDI 1990 paper).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-CC-CCRef.html",
        "fct-type": "module",
        "title": "CCRef"
      },
      "index": {
        "description": "Monad transformer for multi-prompt delimited control This library implements the superset of the interface described in Monadic Framework for Delimited Continuations Kent Dybvig Simon Peyton Jones and Amr Sabry JFP v17 N6 pp http www.cs.indiana.edu cgi-bin techreports TRNNN.cgi trnum TR615 This code is the straightforward implementation of the definitional machine described in the above paper To be precise we implement an equivalent machine where captured continuations are always sandwiched between two prompts This equivalence as well as the trick to make it all well-typed are described in the FLOPS paper Therefore to the great extent this code is the straightforward translation of delimcc from OCaml The parallel stack of delimcc is the real stack now containing parts of the real continuation that is This code implements in CPS what amounts to segmented stack the technique of implementing call cc efficiently first described in Hieb Dybvig and Bruggeman PLDI paper",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "CCRef",
        "normalized": "",
        "package": "CC-delcont-ref-tf",
        "partial": "CCRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#t:CC",
      "description": {
        "fct-descr": "\u003cp\u003eDelimited-continuation monad transformer\n The (CC m) monad is the Cont monad with the answer-type (),\n combined with the persistent-state monad. The state PTop is the\n `parallel stack' of delimcc, which is the real stack now. \n The base monad m must support reference cells, that is,\n be a member of the type class MonadRef.\n Since we need reference cells anyway, we represent the persistent\n state as a reference cell PTop, which is passed as the environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC-CCRef.html#CC",
        "fct-type": "data",
        "title": "CC"
      },
      "index": {
        "description": "Delimited-continuation monad transformer The CC monad is the Cont monad with the answer-type combined with the persistent-state monad The state PTop is the parallel stack of delimcc which is the real stack now The base monad must support reference cells that is be member of the type class MonadRef Since we need reference cells anyway we represent the persistent state as reference cell PTop which is passed as the environment",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "CC",
        "normalized": "",
        "package": "CC-delcont-ref-tf",
        "partial": "CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#t:Prompt",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of prompts is just like that in OCaml's delimcc\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC-CCRef.html#Prompt",
        "fct-type": "data",
        "title": "Prompt"
      },
      "index": {
        "description": "The type of prompts is just like that in OCaml delimcc",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "Prompt",
        "normalized": "",
        "package": "CC-delcont-ref-tf",
        "partial": "Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#t:SubCont",
      "description": {
        "fct-descr": "\u003cp\u003eThe context between two exception frames: The captured sub-continuation\n It is a fragment of the parallel stack: a list of PFrames in inverse order.\n Since we are in the Cont monad, there is no \u003ccode\u003ereal\u003c/code\u003e stack:\n the type Ekfragment  is ()\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-CC-CCRef.html#SubCont",
        "fct-type": "data",
        "title": "SubCont"
      },
      "index": {
        "description": "The context between two exception frames The captured sub-continuation It is fragment of the parallel stack list of PFrames in inverse order Since we are in the Cont monad there is no real stack the type Ekfragment is",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "SubCont",
        "normalized": "",
        "package": "CC-delcont-ref-tf",
        "partial": "Sub Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#v:abortP",
      "description": {
        "fct-descr": "\u003cp\u003eAn efficient variation of take_subcont, which does not capture\n any continuation.\n This code makes it clear that abort is essentially raise.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "Prompt m w -\u003e CC m w -\u003e CC m any",
        "fct-source": "src/Control-Monad-CC-CCRef.html#abortP",
        "fct-type": "function",
        "title": "abortP"
      },
      "index": {
        "description": "An efficient variation of take subcont which does not capture any continuation This code makes it clear that abort is essentially raise",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "abortP",
        "normalized": "Prompt a b-\u003eCC a b-\u003eCC a c",
        "package": "CC-delcont-ref-tf",
        "partial": "",
        "signature": "Prompt m w-\u003eCC m w-\u003eCC m any"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#v:controlP",
      "description": {
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "Prompt m w -\u003e ((a -\u003e CC m w) -\u003e CC m w) -\u003e CC m a",
        "fct-source": "src/Control-Monad-CC-CCRef.html#controlP",
        "fct-type": "function",
        "title": "controlP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "controlP",
        "normalized": "Prompt a b-\u003e((c-\u003eCC a b)-\u003eCC a b)-\u003eCC a c",
        "package": "CC-delcont-ref-tf",
        "partial": "",
        "signature": "Prompt m w-\u003e((a-\u003eCC m w)-\u003eCC m w)-\u003eCC m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#v:isPromptSet",
      "description": {
        "fct-descr": "\u003cp\u003eCheck to see if a prompt is set\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "Prompt m w -\u003e CC m Bool",
        "fct-source": "src/Control-Monad-CC-CCRef.html#isPromptSet",
        "fct-type": "function",
        "title": "isPromptSet"
      },
      "index": {
        "description": "Check to see if prompt is set",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "isPromptSet",
        "normalized": "Prompt a b-\u003eCC a Bool",
        "package": "CC-delcont-ref-tf",
        "partial": "Prompt Set",
        "signature": "Prompt m w-\u003eCC m Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#v:newPrompt",
      "description": {
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "CC m (Prompt m a)",
        "fct-source": "src/Control-Monad-CC-CCRef.html#newPrompt",
        "fct-type": "function",
        "title": "newPrompt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "newPrompt",
        "normalized": "",
        "package": "CC-delcont-ref-tf",
        "partial": "Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#v:pushDelimSubCont",
      "description": {
        "fct-descr": "\u003cp\u003eAn optimization: pushing the _delimited_ continuation.\n This is the optimization of the pattern\n\u003c/p\u003e\u003cpre\u003e     pushPrompt (subcont_pb sk) (pushSubcont sk m)\n\u003c/pre\u003e\u003cp\u003ecorresponding to pushing the continuation captured by shift/shift0. \n The latter continuation always has the delimiter at the end.\n Indeed shift can be implemented more efficiently as a primitive\n rather than via push_prompt/control combination...\n\u003c/p\u003e",
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "SubCont m a b -\u003e CC m a -\u003e CC m b",
        "fct-source": "src/Control-Monad-CC-CCRef.html#pushDelimSubCont",
        "fct-type": "function",
        "title": "pushDelimSubCont"
      },
      "index": {
        "description": "An optimization pushing the delimited continuation This is the optimization of the pattern pushPrompt subcont pb sk pushSubcont sk corresponding to pushing the continuation captured by shift shift0 The latter continuation always has the delimiter at the end Indeed shift can be implemented more efficiently as primitive rather than via push prompt control combination",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "pushDelimSubCont",
        "normalized": "SubCont a b c-\u003eCC a b-\u003eCC a c",
        "package": "CC-delcont-ref-tf",
        "partial": "Delim Sub Cont",
        "signature": "SubCont m a b-\u003eCC m a-\u003eCC m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#v:pushPrompt",
      "description": {
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "Prompt m w -\u003e CC m w -\u003e CC m w",
        "fct-source": "src/Control-Monad-CC-CCRef.html#pushPrompt",
        "fct-type": "function",
        "title": "pushPrompt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "pushPrompt",
        "normalized": "Prompt a b-\u003eCC a b-\u003eCC a b",
        "package": "CC-delcont-ref-tf",
        "partial": "Prompt",
        "signature": "Prompt m w-\u003eCC m w-\u003eCC m w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#v:pushSubCont",
      "description": {
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "SubCont m a b -\u003e CC m a -\u003e CC m b",
        "fct-source": "src/Control-Monad-CC-CCRef.html#pushSubCont",
        "fct-type": "function",
        "title": "pushSubCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "pushSubCont",
        "normalized": "SubCont a b c-\u003eCC a b-\u003eCC a c",
        "package": "CC-delcont-ref-tf",
        "partial": "Sub Cont",
        "signature": "SubCont m a b-\u003eCC m a-\u003eCC m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#v:runCC",
      "description": {
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "CC m a -\u003e m a",
        "fct-source": "src/Control-Monad-CC-CCRef.html#runCC",
        "fct-type": "function",
        "title": "runCC"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "runCC",
        "normalized": "CC a b-\u003ea b",
        "package": "CC-delcont-ref-tf",
        "partial": "CC",
        "signature": "CC m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#v:shift0P",
      "description": {
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "Prompt m w -\u003e ((a -\u003e CC m w) -\u003e CC m w) -\u003e CC m a",
        "fct-source": "src/Control-Monad-CC-CCRef.html#shift0P",
        "fct-type": "function",
        "title": "shift0P"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "shift0P",
        "normalized": "Prompt a b-\u003e((c-\u003eCC a b)-\u003eCC a b)-\u003eCC a c",
        "package": "CC-delcont-ref-tf",
        "partial": "",
        "signature": "Prompt m w-\u003e((a-\u003eCC m w)-\u003eCC m w)-\u003eCC m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#v:shiftP",
      "description": {
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "Prompt m w -\u003e ((a -\u003e CC m w) -\u003e CC m w) -\u003e CC m a",
        "fct-source": "src/Control-Monad-CC-CCRef.html#shiftP",
        "fct-type": "function",
        "title": "shiftP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "shiftP",
        "normalized": "Prompt a b-\u003e((c-\u003eCC a b)-\u003eCC a b)-\u003eCC a c",
        "package": "CC-delcont-ref-tf",
        "partial": "",
        "signature": "Prompt m w-\u003e((a-\u003eCC m w)-\u003eCC m w)-\u003eCC m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CC-delcont-ref-tf/docs/Control-Monad-CC-CCRef.html#v:takeSubCont",
      "description": {
        "fct-module": "Control.Monad.CC.CCRef",
        "fct-package": "CC-delcont-ref-tf",
        "fct-signature": "Prompt m b -\u003e (SubCont m a b -\u003e CC m b) -\u003e CC m a",
        "fct-source": "src/Control-Monad-CC-CCRef.html#takeSubCont",
        "fct-type": "function",
        "title": "takeSubCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad CC CCRef",
        "module": "Control.Monad.CC.CCRef",
        "name": "takeSubCont",
        "normalized": "Prompt a b-\u003e(SubCont a c b-\u003eCC a b)-\u003eCC a c",
        "package": "CC-delcont-ref-tf",
        "partial": "Sub Cont",
        "signature": "Prompt m b-\u003e(SubCont m a b-\u003eCC m b)-\u003eCC m a"
      }
    }
  }
]