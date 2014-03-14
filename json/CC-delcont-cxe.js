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
        "word": "CC-delcont-cxe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis file is the CPS version of \u003ca\u003ehttp://hackage.haskell.org/package/CC-delcont-exc\u003c/a\u003e's Control.Monad.CC.CCExc, implementing the identical\n interface\n\u003c/p\u003e\u003cp\u003eMonad transformer for multi-prompt delimited control\n It implements the superset of the interface described in\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \"\u003cem\u003eA Monadic Framework for Delimited Continuations\u003c/em\u003e\",\n     R. Kent Dybvig, Simon Peyton Jones, and Amr Sabry\n     JFP, v17, N6, pp. 687--730, 2007.\n     \u003ca\u003ehttp://www.cs.indiana.edu/cgi-bin/techreports/TRNNN.cgi?trnum=TR615\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe first main difference is the use of generalized prompts, which\n do not have to be created with new_prompt and therefore can be defined\n at top level. That removes one of the main practical drawbacks of\n Dybvig et al implementations: the necessity to carry around the prompts\n throughout all the code.\n\u003c/p\u003e\u003cp\u003eThe delimited continuation monad is parameterized by the flavor\n of generalized prompts. The end of this code defines several flavors;\n the library users may define their own. User-defined flavors are \n especially useful when user's code uses a small closed set of answer-types. \n Flavors PP and PD below are more general, assuming the set of possible\n answer-types is open and Typeable. If the user wishes to create several\n distinct prompts with the same answer-types, the user should use\n the flavor of prompts accepting an integral prompt identifier, such as PD.\n Prompts of the flavor PD correspond to the prompts in Dybvig, Peyton Jones,\n Sabry framework. If the user wishes to generate unique prompts, the user\n should arrange himself for the generation of unique integers\n (using a state monad, for example). On the other hand, the user\n can differentiate answer-types using `newtype.' The latter can\n only produce the set of distinct prompts that is fixed at run-time.\n Sometimes that is sufficient. There is not need to create a gensym\n monad then.\n\u003c/p\u003e\u003cp\u003eSee Control.Monad.CC.CCExc for further comments about the implementation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "CCCxe",
          "package": "CC-delcont-cxe",
          "source": "src/Control-Monad-CC-CCCxe.html",
          "type": "module"
        },
        "index": {
          "description": "This file is the CPS version of http hackage.haskell.org package CC-delcont-exc Control.Monad.CC.CCExc implementing the identical interface Monad transformer for multi-prompt delimited control It implements the superset of the interface described in Monadic Framework for Delimited Continuations Kent Dybvig Simon Peyton Jones and Amr Sabry JFP v17 N6 pp http www.cs.indiana.edu cgi-bin techreports TRNNN.cgi trnum TR615 The first main difference is the use of generalized prompts which do not have to be created with new prompt and therefore can be defined at top level That removes one of the main practical drawbacks of Dybvig et al implementations the necessity to carry around the prompts throughout all the code The delimited continuation monad is parameterized by the flavor of generalized prompts The end of this code defines several flavors the library users may define their own User-defined flavors are especially useful when user code uses small closed set of answer-types Flavors PP and PD below are more general assuming the set of possible answer-types is open and Typeable If the user wishes to create several distinct prompts with the same answer-types the user should use the flavor of prompts accepting an integral prompt identifier such as PD Prompts of the flavor PD correspond to the prompts in Dybvig Peyton Jones Sabry framework If the user wishes to generate unique prompts the user should arrange himself for the generation of unique integers using state monad for example On the other hand the user can differentiate answer-types using newtype The latter can only produce the set of distinct prompts that is fixed at run-time Sometimes that is sufficient There is not need to create gensym monad then See Control.Monad.CC.CCExc for further comments about the implementation",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "CCCxe",
          "package": "CC-delcont-cxe",
          "partial": "CCCxe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimited-continuation monad transformer\n It is parameterized by the prompt flavor p\n The first argument is the regular (success) continuation,\n the second argument is the bubble, or a resumable exception\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "CC",
          "package": "CC-delcont-cxe",
          "source": "src/Control-Monad-CC-CCCxe.html#CC",
          "type": "data"
        },
        "index": {
          "description": "Delimited-continuation monad transformer It is parameterized by the prompt flavor The first argument is the regular success continuation the second argument is the bubble or resumable exception",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "CC",
          "package": "CC-delcont-cxe",
          "partial": "CC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#t:CC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of control operator's body\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "CCT",
          "package": "CC-delcont-cxe",
          "source": "src/Control-Monad-CC-CCCxe.html#CCT",
          "type": "type"
        },
        "index": {
          "description": "The type of control operator body",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "CCT",
          "package": "CC-delcont-cxe",
          "partial": "CCT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#t:CCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrompts for the closed set of answer-types\n The following prompt flavor P2, for two answer-types w1 and w2,\n is given as an example. Typically, a programmer would define their\n own variant data type with variants for the answer-types that occur\n in their program.\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "P2",
          "package": "CC-delcont-cxe",
          "source": "src/Control-Monad-CC-CCCxe.html#P2",
          "type": "data"
        },
        "index": {
          "description": "Prompts for the closed set of answer-types The following prompt flavor P2 for two answer-types w1 and w2 is given as an example Typically programmer would define their own variant data type with variants for the answer-types that occur in their program",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "P2",
          "package": "CC-delcont-cxe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#t:P2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen set of answer types, with an additional distinction (given by\n integer identifiers)\n This prompt flavor corresponds to the prompts in the Dybvig, Peyton-Jones,\n Sabry framework (modulo the Typeable constraint).\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "PD",
          "package": "CC-delcont-cxe",
          "source": "src/Control-Monad-CC-CCCxe.html#PD",
          "type": "data"
        },
        "index": {
          "description": "Open set of answer types with an additional distinction given by integer identifiers This prompt flavor corresponds to the prompts in the Dybvig Peyton-Jones Sabry framework modulo the Typeable constraint",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "PD",
          "package": "CC-delcont-cxe",
          "partial": "PD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#t:PD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as PP but with the phantom parameter c\n The parameter is useful to statically enforce various constrains\n (statically pass some information between shift and reset)\n The prompt PP is too \u003ccode\u003edynamic\u003c/code\u003e: all errors are detected dynamically\n See Generator2.hs for an example\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "PM",
          "package": "CC-delcont-cxe",
          "source": "src/Control-Monad-CC-CCCxe.html#PM",
          "type": "data"
        },
        "index": {
          "description": "The same as PP but with the phantom parameter The parameter is useful to statically enforce various constrains statically pass some information between shift and reset The prompt PP is too dynamic all errors are detected dynamically See Generator2.hs for an example",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "PM",
          "package": "CC-delcont-cxe",
          "partial": "PM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#t:PM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrompts for the open set of answer-types\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "PP",
          "package": "CC-delcont-cxe",
          "source": "src/Control-Monad-CC-CCCxe.html#PP",
          "type": "data"
        },
        "index": {
          "description": "Prompts for the open set of answer-types",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "PP",
          "package": "CC-delcont-cxe",
          "partial": "PP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#t:PP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe extreme case: prompts for the single answer-type w.\n The monad (CC PS) then is the monad for regular (single-prompt) \n delimited continuations\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "PS",
          "package": "CC-delcont-cxe",
          "source": "src/Control-Monad-CC-CCCxe.html#PS",
          "type": "data"
        },
        "index": {
          "description": "The extreme case prompts for the single answer-type The monad CC PS then is the monad for regular single-prompt delimited continuations",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "PS",
          "package": "CC-delcont-cxe",
          "partial": "PS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#t:PS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized prompts for the answer-type w: an injection-projection pair\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "Prompt",
          "package": "CC-delcont-cxe",
          "source": "src/Control-Monad-CC-CCCxe.html#Prompt",
          "type": "type"
        },
        "index": {
          "description": "Generalized prompts for the answer-type an injection-projection pair",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "Prompt",
          "package": "CC-delcont-cxe",
          "partial": "Prompt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#t:Prompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe captured sub-continuation\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "SubCont",
          "package": "CC-delcont-cxe",
          "source": "src/Control-Monad-CC-CCCxe.html#SubCont",
          "type": "type"
        },
        "index": {
          "description": "The captured sub-continuation",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "SubCont",
          "package": "CC-delcont-cxe",
          "partial": "Sub Cont",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#t:SubCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCCxe",
          "name": "abortP",
          "package": "CC-delcont-cxe",
          "signature": "Prompt p m w -\u003e CC p m w -\u003e CC p m any",
          "source": "src/Control-Monad-CC-CCCxe.html#abortP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "abortP",
          "normalized": "Prompt a b c-\u003eCC a b c-\u003eCC a b d",
          "package": "CC-delcont-cxe",
          "signature": "Prompt p m w-\u003eCC p m w-\u003eCC p m any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:abortP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is often helpful, for clarity of error messages, to specify the \n answer-type associated with the prompt explicitly (rather than relying \n on the type inference to figure that out). The following function\n is useful for that purpose.\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "as_prompt_type",
          "package": "CC-delcont-cxe",
          "signature": "Prompt p m w -\u003e w -\u003e Prompt p m w",
          "source": "src/Control-Monad-CC-CCCxe.html#as_prompt_type",
          "type": "function"
        },
        "index": {
          "description": "It is often helpful for clarity of error messages to specify the answer-type associated with the prompt explicitly rather than relying on the type inference to figure that out The following function is useful for that purpose",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "as_prompt_type",
          "normalized": "Prompt a b c-\u003ec-\u003ePrompt a b c",
          "package": "CC-delcont-cxe",
          "signature": "Prompt p m w-\u003ew-\u003ePrompt p m w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:as_prompt_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCCxe",
          "name": "controlP",
          "package": "CC-delcont-cxe",
          "signature": "Prompt p m w -\u003e ((a -\u003e CC p m w) -\u003e CC p m w) -\u003e CC p m a",
          "source": "src/Control-Monad-CC-CCCxe.html#controlP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "controlP",
          "normalized": "Prompt a b c-\u003e((d-\u003eCC a b c)-\u003eCC a b c)-\u003eCC a b d",
          "package": "CC-delcont-cxe",
          "signature": "Prompt p m w-\u003e((a-\u003eCC p m w)-\u003eCC p m w)-\u003eCC p m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:controlP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCCxe",
          "name": "newPrompt",
          "package": "CC-delcont-cxe",
          "signature": "Int -\u003e Prompt PD m w",
          "source": "src/Control-Monad-CC-CCCxe.html#newPrompt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "newPrompt",
          "normalized": "Int-\u003ePrompt PD a b",
          "package": "CC-delcont-cxe",
          "partial": "Prompt",
          "signature": "Int-\u003ePrompt PD m w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:newPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere are two generalized prompts of the flavor P2\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "p2L",
          "package": "CC-delcont-cxe",
          "signature": "Prompt (P2 w1 w2) m w1",
          "source": "src/Control-Monad-CC-CCCxe.html#p2L",
          "type": "function"
        },
        "index": {
          "description": "There are two generalized prompts of the flavor P2",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "p2L",
          "package": "CC-delcont-cxe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:p2L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCCxe",
          "name": "p2R",
          "package": "CC-delcont-cxe",
          "signature": "Prompt (P2 w1 w2) m w2",
          "source": "src/Control-Monad-CC-CCCxe.html#p2R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "p2R",
          "package": "CC-delcont-cxe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:p2R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCCxe",
          "name": "pm",
          "package": "CC-delcont-cxe",
          "signature": "Prompt (PM c) m w",
          "source": "src/Control-Monad-CC-CCCxe.html#pm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "pm",
          "package": "CC-delcont-cxe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:pm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCCxe",
          "name": "pp",
          "package": "CC-delcont-cxe",
          "signature": "Prompt PP m w",
          "source": "src/Control-Monad-CC-CCCxe.html#pp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "pp",
          "package": "CC-delcont-cxe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCCxe",
          "name": "ps",
          "package": "CC-delcont-cxe",
          "signature": "Prompt (PS w) m w",
          "source": "src/Control-Monad-CC-CCCxe.html#ps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "ps",
          "package": "CC-delcont-cxe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCCxe",
          "name": "pushPrompt",
          "package": "CC-delcont-cxe",
          "signature": "Prompt p m w -\u003e CC p m w -\u003e CC p m w",
          "source": "src/Control-Monad-CC-CCCxe.html#pushPrompt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "pushPrompt",
          "normalized": "Prompt a b c-\u003eCC a b c-\u003eCC a b c",
          "package": "CC-delcont-cxe",
          "partial": "Prompt",
          "signature": "Prompt p m w-\u003eCC p m w-\u003eCC p m w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:pushPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the captured continuation\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "pushSubCont",
          "package": "CC-delcont-cxe",
          "signature": "SubCont p m a b -\u003e CC p m a -\u003e CC p m b",
          "source": "src/Control-Monad-CC-CCCxe.html#pushSubCont",
          "type": "function"
        },
        "index": {
          "description": "Apply the captured continuation",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "pushSubCont",
          "normalized": "SubCont a b c d-\u003eCC a b c-\u003eCC a b d",
          "package": "CC-delcont-cxe",
          "partial": "Sub Cont",
          "signature": "SubCont p m a b-\u003eCC p m a-\u003eCC p m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:pushSubCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCCxe",
          "name": "runCC",
          "package": "CC-delcont-cxe",
          "signature": "(* -\u003e *) -\u003e * -\u003e *) m a -\u003e m a",
          "source": "src/Control-Monad-CC-CCCxe.html#runCC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "runCC",
          "normalized": "(*-\u003e*)-\u003e*-\u003e*)a b-\u003ea b",
          "package": "CC-delcont-cxe",
          "partial": "CC",
          "signature": "(*-\u003e*)-\u003e*-\u003e*)m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:runCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCCxe",
          "name": "shift0P",
          "package": "CC-delcont-cxe",
          "signature": "Prompt p m w -\u003e ((a -\u003e CC p m w) -\u003e CC p m w) -\u003e CC p m a",
          "source": "src/Control-Monad-CC-CCCxe.html#shift0P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "shift0P",
          "normalized": "Prompt a b c-\u003e((d-\u003eCC a b c)-\u003eCC a b c)-\u003eCC a b d",
          "package": "CC-delcont-cxe",
          "signature": "Prompt p m w-\u003e((a-\u003eCC p m w)-\u003eCC p m w)-\u003eCC p m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:shift0P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CC.CCCxe",
          "name": "shiftP",
          "package": "CC-delcont-cxe",
          "signature": "Prompt p m w -\u003e ((a -\u003e CC p m w) -\u003e CC p m w) -\u003e CC p m a",
          "source": "src/Control-Monad-CC-CCCxe.html#shiftP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "shiftP",
          "normalized": "Prompt a b c-\u003e((d-\u003eCC a b c)-\u003eCC a b c)-\u003eCC a b d",
          "package": "CC-delcont-cxe",
          "signature": "Prompt p m w-\u003e((a-\u003eCC p m w)-\u003eCC p m w)-\u003eCC p m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:shiftP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the initial bubble\n\u003c/p\u003e",
          "module": "Control.Monad.CC.CCCxe",
          "name": "takeSubCont",
          "package": "CC-delcont-cxe",
          "signature": "Prompt p m w -\u003e CCT p m x w -\u003e CC p m x",
          "source": "src/Control-Monad-CC-CCCxe.html#takeSubCont",
          "type": "function"
        },
        "index": {
          "description": "Create the initial bubble",
          "hierarchy": "Control Monad CC CCCxe",
          "module": "Control.Monad.CC.CCCxe",
          "name": "takeSubCont",
          "normalized": "Prompt a b c-\u003eCCT a b d c-\u003eCC a b d",
          "package": "CC-delcont-cxe",
          "partial": "Sub Cont",
          "signature": "Prompt p m w-\u003eCCT p m x w-\u003eCC p m x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CC-delcont-cxe/docs/Control-Monad-CC-CCCxe.html#v:takeSubCont"
      }
    }
  ]
]