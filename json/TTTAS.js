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
        "word": "TTTAS"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for Typed Transformations of Typed Abstract Syntax.\n\u003c/p\u003e\u003cp\u003eThe library is documented in the paper: \u003cem\u003eTyped Transformations of Typed Abstract Syntax\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eBibtex entry: \u003ca\u003ehttp://www.cs.uu.nl/wiki/bin/viewfile/Center/TTTAS?rev=1;filename=TTTAS.bib\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eFor more documentation see the TTTAS webpage: \n    \u003ca\u003ehttp://www.cs.uu.nl/wiki/bin/view/Center/TTTAS\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "TTTAS",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html",
          "type": "module"
        },
        "index": {
          "description": "Library for Typed Transformations of Typed Abstract Syntax The library is documented in the paper Typed Transformations of Typed Abstract Syntax Bibtex entry http www.cs.uu.nl wiki bin viewfile Center TTTAS rev filename TTTAS.bib For more documentation see the TTTAS webpage http www.cs.uu.nl wiki bin view Center TTTAS",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "TTTAS",
          "package": "TTTAS",
          "partial": "TTTAS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Arrow2",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Arrow2",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Arrow2",
          "package": "TTTAS",
          "partial": "Arrow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:Arrow2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "ArrowLoop2",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#ArrowLoop2",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "ArrowLoop2",
          "package": "TTTAS",
          "partial": "Arrow Loop",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:ArrowLoop2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003eEnv term use def\u003c/code\u003e represents a sequence of\n   instantiations of type \u003ccode\u003eforall a. term a use\u003c/code\u003e, where\n   all the instances of \u003ccode\u003ea\u003c/code\u003e are stored in the type parameter\n   \u003ccode\u003edef\u003c/code\u003e. The type \u003ccode\u003euse\u003c/code\u003e is a sequence containing the \n   types to which may be referred from within terms of type\n   \u003ccode\u003eterm a use\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Env",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Env",
          "type": "data"
        },
        "index": {
          "description": "The type Env term use def represents sequence of instantiations of type forall term use where all the instances of are stored in the type parameter def The type use is sequence containing the types to which may be referred from within terms of type term use",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Env",
          "package": "TTTAS",
          "partial": "Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEqual\u003c/a\u003e\u003c/code\u003e type encodes type equality. \n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Equal",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Equal",
          "type": "data"
        },
        "index": {
          "description": "The Equal type encodes type equality",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Equal",
          "package": "TTTAS",
          "partial": "Equal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the types \u003ccode\u003edef\u003c/code\u003e and \u003ccode\u003euse\u003c/code\u003e of an \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e coincide,\n   we can be sure that the references in the terms do not\n   point to values outside the environment but point\n   to terms representing the right type. This kind of\n   environment is the \u003cem\u003efinal environment\u003c/em\u003e of a transformation.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "FinalEnv",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#FinalEnv",
          "type": "type"
        },
        "index": {
          "description": "When the types def and use of an Env coincide we can be sure that the references in the terms do not point to values outside the environment but point to terms representing the right type This kind of environment is the final environment of transformation",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "FinalEnv",
          "package": "TTTAS",
          "partial": "Final Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:FinalEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "List",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#List",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "List",
          "package": "TTTAS",
          "partial": "List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Pair",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Pair",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Pair",
          "package": "TTTAS",
          "partial": "Pair",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e type for represents typed indices which are\n   labeled with both the type of value to which they\n   refer and the type of the environment (a nested\n   Cartesian product, growing to the right) in which \n   this value lives.\n  The constructor \u003ccode\u003e\u003ca\u003eZero\u003c/a\u003e\u003c/code\u003e expresses that the first\n   element of the environment has to be of type \u003ccode\u003ea\u003c/code\u003e.\n  The constructor \u003ccode\u003e\u003ca\u003eSuc\u003c/a\u003e\u003c/code\u003e does not care about the type\n   of the first element in the environment, \n   being polymorphic in the type \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Ref",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Ref",
          "type": "data"
        },
        "index": {
          "description": "The Ref type for represents typed indices which are labeled with both the type of value to which they refer and the type of the environment nested Cartesian product growing to the right in which this value lives The constructor Zero expresses that the first element of the environment has to be of type The constructor Suc does not care about the type of the first element in the environment being polymorphic in the type",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Ref",
          "package": "TTTAS",
          "partial": "Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e is the type of the result of \"running\" a \u003ccode\u003e\u003ca\u003eTrafo\u003c/a\u003e\u003c/code\u003e. \n   Because \u003ccode\u003es\u003c/code\u003e could be anything we have to hide it using existential quantification.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Result",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The type Result is the type of the result of running Trafo Because could be anything we have to hide it using existential quantification",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Result",
          "package": "TTTAS",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e encodes a \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e-transformer. It is usually used\n   to transform references from an actual environment to \n   the final one.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "T",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#T",
          "type": "newtype"
        },
        "index": {
          "description": "The type encodes Ref transformer It is usually used to transform references from an actual environment to the final one",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "T",
          "package": "TTTAS",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003e\u003ca\u003eTrafo\u003c/a\u003e\u003c/code\u003e is the type of the transformation steps on a heterogeneous collection.\n   The argument \u003ccode\u003em\u003c/code\u003e stands for the type of the meta-data.  \n   A |Trafo| takes the meta-data on the current environment |env1| as input and \n   yields  meta-data for the (possibly extended) environment |env2|.\n   The type \u003ccode\u003et\u003c/code\u003e is the type of the terms stored in the environment.\n   The type variable \u003ccode\u003es\u003c/code\u003e represents the type of the final result, which we do expose. \n   Its role is similar to the \u003ccode\u003es\u003c/code\u003e in the type \u003ccode\u003eST s a\u003c/code\u003e.\n   The arguments \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e are the Arrow's input and output, respectively.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Trafo",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Trafo",
          "type": "data"
        },
        "index": {
          "description": "The type Trafo is the type of the transformation steps on heterogeneous collection The argument stands for the type of the meta-data Trafo takes the meta-data on the current environment env1 as input and yields meta-data for the possibly extended environment env2 The type is the type of the terms stored in the environment The type variable represents the type of the final result which we do expose Its role is similar to the in the type ST The arguments and are the Arrow input and output respectively",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Trafo",
          "package": "TTTAS",
          "partial": "Trafo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:Trafo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative version of \u003ccode\u003e\u003ca\u003eTrafo\u003c/a\u003e\u003c/code\u003e where the universal quantification \n   over |s| is moved inside the quantification over |env2|.\n   Note that the type variables |a| and |b| are now labelled with |s|, \n   and hence have kind |(* -\u003e *)|.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Trafo2",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Trafo2",
          "type": "data"
        },
        "index": {
          "description": "Alternative version of Trafo where the universal quantification over is moved inside the quantification over env2 Note that the type variables and are now labelled with and hence have kind",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Trafo2",
          "package": "TTTAS",
          "partial": "Trafo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:Trafo2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003e\u003ca\u003eTrafoE\u003c/a\u003e\u003c/code\u003e is used to introduce an existential quantifier into\n   the definition of \u003ccode\u003e\u003ca\u003eTrafo\u003c/a\u003e\u003c/code\u003e.  \n   It can be seen that a \u003ccode\u003e\u003ca\u003eTrafo\u003c/a\u003e\u003c/code\u003e is a function taking as arguments: the input (\u003ccode\u003ea\u003c/code\u003e),\n   a \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e-transformer (\u003ccode\u003eT env2 s\u003c/code\u003e) from the environment constructed in this step \n   to the final environment, the environment (\u003ccode\u003eEnv t s env1\u003c/code\u003e) where the current \n   transformation starts and a function (\u003ccode\u003eFinalEnv t s -\u003e FinalEnv t s\u003c/code\u003e) to update \n   (modify) the final environment. The function returns: the output (\u003ccode\u003eb\u003c/code\u003e), \n   a \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e-transformer (\u003ccode\u003eT env1 s\u003c/code\u003e) from the initial environment of this step to the final \n   environment, the environment (\u003ccode\u003eEnv t s env2\u003c/code\u003e) constructed in this step and a function \n   (\u003ccode\u003eFinalEnv t s -\u003e FinalEnv t s\u003c/code\u003e) to update (modify) the final environment.\n   NOTE: The function (\u003ccode\u003eFinalEnv t s -\u003e FinalEnv t s\u003c/code\u003e) was introduced in version 0.3. \n   It's carried throw the transformation steps and can be modified (composed to another function)\n   using the function \u003ccode\u003e\u003ca\u003eupdateFinalEnv\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "TrafoE",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#TrafoE",
          "type": "data"
        },
        "index": {
          "description": "The type TrafoE is used to introduce an existential quantifier into the definition of Trafo It can be seen that Trafo is function taking as arguments the input Ref transformer env2 from the environment constructed in this step to the final environment the environment Env env1 where the current transformation starts and function FinalEnv FinalEnv to update modify the final environment The function returns the output Ref transformer env1 from the initial environment of this step to the final environment the environment Env env2 constructed in this step and function FinalEnv FinalEnv to update modify the final environment NOTE The function FinalEnv FinalEnv was introduced in version It carried throw the transformation steps and can be modified composed to another function using the function updateFinalEnv",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "TrafoE",
          "package": "TTTAS",
          "partial": "Trafo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:TrafoE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "TrafoE2",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#TrafoE2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "TrafoE2",
          "package": "TTTAS",
          "partial": "Trafo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:TrafoE2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Unit",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Unit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Unit",
          "package": "TTTAS",
          "partial": "Unit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "UpdFinalEnv",
          "package": "TTTAS",
          "source": "src/Language-AbstractSyntax-TTTAS.html#UpdFinalEnv",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "UpdFinalEnv",
          "package": "TTTAS",
          "partial": "Upd Final Env",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#t:UpdFinalEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "(&&&&)",
          "package": "TTTAS",
          "signature": "arr a b -\u003e arr a b' -\u003e arr a (Pair b b')",
          "source": "src/Language-AbstractSyntax-TTTAS.html#%26%26%26%26",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "(&&&&) &&&&",
          "normalized": "a b c-\u003ea b d-\u003ea b(Pair c d)",
          "package": "TTTAS",
          "signature": "arr a b-\u003earr a b'-\u003earr a(Pair b b')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:-38--38--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "(****)",
          "package": "TTTAS",
          "signature": "arr a b -\u003e arr a' b' -\u003e arr (Pair a a') (Pair b b')",
          "source": "src/Language-AbstractSyntax-TTTAS.html#%2A%2A%2A%2A",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "(****) ****",
          "normalized": "a b c-\u003ea d e-\u003ea(Pair b d)(Pair c e)",
          "package": "TTTAS",
          "signature": "arr a b-\u003earr a' b'-\u003earr(Pair a a')(Pair b b')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:-42--42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "(\u003e\u003e\u003e\u003e)",
          "package": "TTTAS",
          "signature": "cat a b -\u003e cat b c -\u003e cat a c",
          "source": "src/Language-AbstractSyntax-TTTAS.html#%3E%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "(\u003e\u003e\u003e\u003e) \u003e\u003e\u003e\u003e",
          "normalized": "a b c-\u003ea c d-\u003ea b d",
          "package": "TTTAS",
          "signature": "cat a b-\u003ecat b c-\u003ecat a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:-62--62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Empty",
          "package": "TTTAS",
          "signature": "Env t use ()",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Empty",
          "normalized": "Env a b()",
          "package": "TTTAS",
          "partial": "Empty",
          "signature": "Env t use()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Eq",
          "package": "TTTAS",
          "signature": "Equal a a",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Eq",
          "package": "TTTAS",
          "partial": "Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Ext",
          "package": "TTTAS",
          "signature": "Env t use def' -\u003e t a use -\u003e Env t use (def', a)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Ext",
          "normalized": "Env a b c-\u003ea d b-\u003eEnv a b(c,d)",
          "package": "TTTAS",
          "partial": "Ext",
          "signature": "Env t use def'-\u003et a use-\u003eEnv t use(def',a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:Ext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "List",
          "package": "TTTAS",
          "signature": "List [a s]",
          "source": "src/Language-AbstractSyntax-TTTAS.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "List",
          "normalized": "List[a b]",
          "package": "TTTAS",
          "partial": "List",
          "signature": "List[a s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "P",
          "package": "TTTAS",
          "signature": "P (a s, b s)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Pair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "P",
          "normalized": "P(a b,c b)",
          "package": "TTTAS",
          "signature": "P(a s,b s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Result",
          "package": "TTTAS",
          "signature": "forall s . Result (m s) (b s) (FinalEnv t s)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Result",
          "package": "TTTAS",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Suc",
          "package": "TTTAS",
          "signature": "Ref a env' -\u003e Ref a (env', b)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Suc",
          "normalized": "Ref a b-\u003eRef a(b,c)",
          "package": "TTTAS",
          "partial": "Suc",
          "signature": "Ref a env'-\u003eRef a(env',b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:Suc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "T",
          "package": "TTTAS",
          "signature": "T",
          "source": "src/Language-AbstractSyntax-TTTAS.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "T",
          "package": "TTTAS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Trafo",
          "package": "TTTAS",
          "signature": "Trafo (forall env1.  m env1 -\u003e TrafoE m t s env1 a b)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Trafo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Trafo",
          "normalized": "Trafo(a b c b-\u003eTrafoE c d e b f g)",
          "package": "TTTAS",
          "partial": "Trafo",
          "signature": "Trafo(forall env m env-\u003eTrafoE m t s env a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:Trafo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Trafo2",
          "package": "TTTAS",
          "signature": "Trafo2 (forall env1.  m env1 -\u003e TrafoE2 m t env1 a b)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Trafo2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Trafo2",
          "normalized": "Trafo(a b c b-\u003eTrafoE c d b e f)",
          "package": "TTTAS",
          "partial": "Trafo",
          "signature": "Trafo(forall env m env-\u003eTrafoE m t env a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:Trafo2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "TrafoE",
          "package": "TTTAS",
          "signature": "forall env2 . TrafoE (m env2) (a -\u003e T env2 s -\u003e Env t s env1 -\u003e (FinalEnv t s -\u003e FinalEnv t s) -\u003e (b, T env1 s, Env t s env2, FinalEnv t s -\u003e FinalEnv t s))",
          "source": "src/Language-AbstractSyntax-TTTAS.html#TrafoE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "TrafoE",
          "normalized": "a b TrafoE(c b)(d-\u003eT b e-\u003eEnv f e b-\u003e(FinalEnv f e-\u003eFinalEnv f e)-\u003e(g,T b e,Env f e b,FinalEnv f e-\u003eFinalEnv f e))",
          "package": "TTTAS",
          "partial": "Trafo",
          "signature": "forall env TrafoE(m env)(a-\u003eT env s-\u003eEnv t s env-\u003e(FinalEnv t s-\u003eFinalEnv t s)-\u003e(b,T env s,Env t s env,FinalEnv t s-\u003eFinalEnv t s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:TrafoE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "TrafoE2",
          "package": "TTTAS",
          "signature": "forall env2 . TrafoE2 (m env2) (forall s.  a s -\u003e T env2 s -\u003e Env t s env1 -\u003e UpdFinalEnv t s -\u003e (b s, T env1 s, Env t s env2, UpdFinalEnv t s))",
          "source": "src/Language-AbstractSyntax-TTTAS.html#TrafoE2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "TrafoE2",
          "normalized": "a b TrafoE(c b)(a d e f-\u003eT b f-\u003eEnv g f b-\u003eUpdFinalEnv g f-\u003e(h f,T b f,Env g f b,UpdFinalEnv g f))",
          "package": "TTTAS",
          "partial": "Trafo",
          "signature": "forall env TrafoE(m env)(forall s. a s-\u003eT env s-\u003eEnv t s env-\u003eUpdFinalEnv t s-\u003e(b s,T env s,Env t s env,UpdFinalEnv t s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:TrafoE2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Unit",
          "package": "TTTAS",
          "signature": "Unit",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Unit",
          "package": "TTTAS",
          "partial": "Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Upd",
          "package": "TTTAS",
          "signature": "Upd (FinalEnv t s -\u003e FinalEnv t s)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#UpdFinalEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Upd",
          "normalized": "Upd(FinalEnv a b-\u003eFinalEnv a b)",
          "package": "TTTAS",
          "partial": "Upd",
          "signature": "Upd(FinalEnv t s-\u003eFinalEnv t s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:Upd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Zero",
          "package": "TTTAS",
          "signature": "Ref a (env', a)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#Ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "Zero",
          "normalized": "Ref a(b,a)",
          "package": "TTTAS",
          "partial": "Zero",
          "signature": "Ref a(env',a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "arr2",
          "package": "TTTAS",
          "signature": "(forall s.  a s -\u003e b s) -\u003e arr a b",
          "source": "src/Language-AbstractSyntax-TTTAS.html#arr2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "arr2",
          "normalized": "(a b c d-\u003ee d)-\u003ef c e",
          "package": "TTTAS",
          "signature": "(forall s. a s-\u003eb s)-\u003earr a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:arr2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ecastSRef\u003c/a\u003e\u003c/code\u003e  returns a \u003ccode\u003e\u003ca\u003eTrafoE\u003c/a\u003e\u003c/code\u003e that casts the reference \n   passed as parameter (in the constructed environment) to one in the final environment.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "castSRef",
          "package": "TTTAS",
          "signature": "m e -\u003e Ref a e -\u003e TrafoE m t s e x (Ref a s)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#castSRef",
          "type": "function"
        },
        "index": {
          "description": "The function castSRef returns TrafoE that casts the reference passed as parameter in the constructed environment to one in the final environment",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "castSRef",
          "normalized": "a b-\u003eRef c b-\u003eTrafoE a d e b f(Ref c e)",
          "package": "TTTAS",
          "partial": "SRef",
          "signature": "m e-\u003eRef a e-\u003eTrafoE m t s e x(Ref a s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:castSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eextEnv\u003c/a\u003e\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eTrafoE\u003c/a\u003e\u003c/code\u003e that extends the current environment.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "extEnv",
          "package": "TTTAS",
          "signature": "m (e, a) -\u003e TrafoE m t s e (t a s) (Ref a s)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#extEnv",
          "type": "function"
        },
        "index": {
          "description": "The function extEnv returns TrafoE that extends the current environment",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "extEnv",
          "normalized": "a(b,c)-\u003eTrafoE a d e b(d c e)(Ref c e)",
          "package": "TTTAS",
          "partial": "Env",
          "signature": "m(e,a)-\u003eTrafoE m t s e(t a s)(Ref a s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:extEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "first2",
          "package": "TTTAS",
          "signature": "arr a b -\u003e arr (Pair a c) (Pair b c)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#first2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "first2",
          "normalized": "a b c-\u003ea(Pair b d)(Pair c d)",
          "package": "TTTAS",
          "signature": "arr a b-\u003earr(Pair a c)(Pair b c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:first2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e returns the element indexed in the\n   environment parameter by the \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e parameter. The types\n   guarantee that the lookup succeeds.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "lookup",
          "package": "TTTAS",
          "signature": "Ref a env -\u003e env -\u003e a",
          "source": "src/Language-AbstractSyntax-TTTAS.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "The function lookup returns the element indexed in the environment parameter by the Ref parameter The types guarantee that the lookup succeeds",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "lookup",
          "normalized": "Ref a b-\u003eb-\u003ea",
          "package": "TTTAS",
          "signature": "Ref a env-\u003eenv-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "lookupEnv",
          "package": "TTTAS",
          "signature": "Ref a env -\u003e Env t s env -\u003e t a s",
          "source": "src/Language-AbstractSyntax-TTTAS.html#lookupEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "lookupEnv",
          "normalized": "Ref a b-\u003eEnv c d b-\u003ec a d",
          "package": "TTTAS",
          "partial": "Env",
          "signature": "Ref a env-\u003eEnv t s env-\u003et a s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:lookupEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "loop2",
          "package": "TTTAS",
          "signature": "arr (Pair a c) (Pair b c) -\u003e arr a b",
          "source": "src/Language-AbstractSyntax-TTTAS.html#loop2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "loop2",
          "normalized": "a(Pair b c)(Pair d c)-\u003ea b d",
          "package": "TTTAS",
          "signature": "arr(Pair a c)(Pair b c)-\u003earr a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:loop2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e compares two references for equality.\n   If they refer to the same element in the environment\n   the value \u003ccode\u003eJust Eq\u003c/code\u003e is returned, expressing the fact that\n   the types of the referred values are the same too.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "match",
          "package": "TTTAS",
          "signature": "Ref a env -\u003e Ref b env -\u003e Maybe (Equal a b)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#match",
          "type": "function"
        },
        "index": {
          "description": "The function match compares two references for equality If they refer to the same element in the environment the value Just Eq is returned expressing the fact that the types of the referred values are the same too",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "match",
          "normalized": "Ref a b-\u003eRef c b-\u003eMaybe(Equal a c)",
          "package": "TTTAS",
          "signature": "Ref a env-\u003eRef b env-\u003eMaybe(Equal a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Trafo \u003ccode\u003e\u003ca\u003enewSRef\u003c/a\u003e\u003c/code\u003e takes a typed term as input, adds it to the environment \n    and yields a reference pointing to this value.\n    No meta-information on the environment is recorded by \u003ccode\u003e\u003ca\u003enewSRef\u003c/a\u003e\u003c/code\u003e;\n    therefore we use the type \u003ccode\u003e\u003ca\u003eUnit\u003c/a\u003e\u003c/code\u003e for the meta-data.  \n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "newSRef",
          "package": "TTTAS",
          "signature": "Trafo Unit t s (t a s) (Ref a s)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#newSRef",
          "type": "function"
        },
        "index": {
          "description": "The Trafo newSRef takes typed term as input adds it to the environment and yields reference pointing to this value No meta-information on the environment is recorded by newSRef therefore we use the type Unit for the meta-data",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "newSRef",
          "package": "TTTAS",
          "partial": "SRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:newSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Trafo2 \u003ccode\u003e\u003ca\u003enewSRef2\u003c/a\u003e\u003c/code\u003e takes a typed term as input, adds it to the environment \n    and yields a reference pointing to this value.\n    No meta-information on the environment is recorded by \u003ccode\u003e\u003ca\u003enewSRef2\u003c/a\u003e\u003c/code\u003e;\n    therefore we use the type \u003ccode\u003e\u003ca\u003eUnit\u003c/a\u003e\u003c/code\u003e for the meta-data.  \n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "newSRef2",
          "package": "TTTAS",
          "signature": "Trafo2 Unit t (t a) (Ref a)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#newSRef2",
          "type": "function"
        },
        "index": {
          "description": "The Trafo2 newSRef2 takes typed term as input adds it to the environment and yields reference pointing to this value No meta-information on the environment is recorded by newSRef2 therefore we use the type Unit for the meta-data",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "newSRef2",
          "package": "TTTAS",
          "partial": "SRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:newSRef2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003erunTrafo\u003c/a\u003e\u003c/code\u003e takes as arguments the \u003ccode\u003e\u003ca\u003eTrafo\u003c/a\u003e\u003c/code\u003e we want to run, meta-information \n   for the empty environment, and an input value. \n   The result of \u003ccode\u003e\u003ca\u003erunTrafo\u003c/a\u003e\u003c/code\u003e (type \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e) is the final environment (\u003ccode\u003eEnv t s s\u003c/code\u003e) together \n   with the resulting meta-data (\u003ccode\u003em s\u003c/code\u003e), and the output value (\u003ccode\u003eb s\u003c/code\u003e). \n   The rank-2 type for \u003ccode\u003e\u003ca\u003erunTrafo\u003c/a\u003e\u003c/code\u003e ensures that transformation steps cannot make \n   any assumptions about the type of final environment (\u003ccode\u003es\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "runTrafo",
          "package": "TTTAS",
          "signature": "(forall s.  Trafo m t s a (b s)) -\u003e m () -\u003e a -\u003e Result m t b",
          "source": "src/Language-AbstractSyntax-TTTAS.html#runTrafo",
          "type": "function"
        },
        "index": {
          "description": "The function runTrafo takes as arguments the Trafo we want to run meta-information for the empty environment and an input value The result of runTrafo type Result is the final environment Env together with the resulting meta-data and the output value The rank-2 type for runTrafo ensures that transformation steps cannot make any assumptions about the type of final environment",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "runTrafo",
          "normalized": "(a b Trafo c d e f(g e))-\u003ec()-\u003ef-\u003eResult c d g",
          "package": "TTTAS",
          "partial": "Trafo",
          "signature": "(forall s. Trafo m t s a(b s))-\u003em()-\u003ea-\u003eResult m t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:runTrafo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003erunTrafo2\u003c/a\u003e\u003c/code\u003e takes as arguments the \u003ccode\u003e\u003ca\u003eTrafo2\u003c/a\u003e\u003c/code\u003e we want to run, meta-information \n   for the empty environment, and an input value. \n   The result of \u003ccode\u003e\u003ca\u003erunTrafo2\u003c/a\u003e\u003c/code\u003e (type \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e) is the final environment (\u003ccode\u003eEnv t s s\u003c/code\u003e) together \n   with the resulting meta-data (\u003ccode\u003em s\u003c/code\u003e), and the output value (\u003ccode\u003eb s\u003c/code\u003e). \n   The rank-2 type for \u003ccode\u003e\u003ca\u003erunTrafo2\u003c/a\u003e\u003c/code\u003e ensures that transformation steps cannot make \n   any assumptions about the type of final environment (\u003ccode\u003es\u003c/code\u003e).\n   It is an alternative version of \u003ccode\u003e\u003ca\u003erunTrafo\u003c/a\u003e\u003c/code\u003e which does not use\n   \u003ccode\u003e\u003ca\u003eunsafeCoerce\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "runTrafo2",
          "package": "TTTAS",
          "signature": "Trafo2 m t a b -\u003e m () -\u003e (forall s.  a s) -\u003e Result m t b",
          "source": "src/Language-AbstractSyntax-TTTAS.html#runTrafo2",
          "type": "function"
        },
        "index": {
          "description": "The function runTrafo2 takes as arguments the Trafo2 we want to run meta-information for the empty environment and an input value The result of runTrafo2 type Result is the final environment Env together with the resulting meta-data and the output value The rank-2 type for runTrafo2 ensures that transformation steps cannot make any assumptions about the type of final environment It is an alternative version of runTrafo which does not use unsafeCoerce",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "runTrafo2",
          "normalized": "Trafo a b c d-\u003ea()-\u003e(e f c g)-\u003eResult a b d",
          "package": "TTTAS",
          "partial": "Trafo",
          "signature": "Trafo m t a b-\u003em()-\u003e(forall s. a s)-\u003eResult m t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:runTrafo2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "second2",
          "package": "TTTAS",
          "signature": "arr a b -\u003e arr (Pair c a) (Pair c b)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#second2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "second2",
          "normalized": "a b c-\u003ea(Pair d b)(Pair d c)",
          "package": "TTTAS",
          "signature": "arr a b-\u003earr(Pair c a)(Pair c b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:second2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe combinator \u003ccode\u003e\u003ca\u003esequenceA\u003c/a\u003e\u003c/code\u003e sequentially composes a list\n   of \u003ccode\u003e\u003ca\u003eTrafo\u003c/a\u003e\u003c/code\u003es into a \u003ccode\u003e\u003ca\u003eTrafo\u003c/a\u003e\u003c/code\u003e that yields a list of outputs.\n   Its use is analogous to the combinator \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e combinator\n   for \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "sequenceA",
          "package": "TTTAS",
          "signature": "[Trafo m t s a b] -\u003e Trafo m t s a [b]",
          "source": "src/Language-AbstractSyntax-TTTAS.html#sequenceA",
          "type": "function"
        },
        "index": {
          "description": "The combinator sequenceA sequentially composes list of Trafo into Trafo that yields list of outputs Its use is analogous to the combinator sequence combinator for Monad",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "sequenceA",
          "normalized": "[Trafo a b c d e]-\u003eTrafo a b c d[e]",
          "package": "TTTAS",
          "signature": "[Trafo m t s a b]-\u003eTrafo m t s a[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:sequenceA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe combinator \u003ccode\u003e\u003ca\u003esequenceA2\u003c/a\u003e\u003c/code\u003e sequentially composes a list\n   of \u003ccode\u003e\u003ca\u003eTrafo2\u003c/a\u003e\u003c/code\u003es into a \u003ccode\u003e\u003ca\u003eTrafo2\u003c/a\u003e\u003c/code\u003e that yields a \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e of outputs.\n   Its use is analogous to the combinator \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e combinator\n   for \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "sequenceA2",
          "package": "TTTAS",
          "signature": "[Trafo2 m t a b] -\u003e Trafo2 m t a (List b)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#sequenceA2",
          "type": "function"
        },
        "index": {
          "description": "The combinator sequenceA2 sequentially composes list of Trafo2 into Trafo2 that yields List of outputs Its use is analogous to the combinator sequence combinator for Monad",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "sequenceA2",
          "normalized": "[Trafo a b c d]-\u003eTrafo a b c(List d)",
          "package": "TTTAS",
          "signature": "[Trafo m t a b]-\u003eTrafo m t a(List b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:sequenceA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "unT",
          "package": "TTTAS",
          "signature": "forall x.  Ref x e -\u003e Ref x s",
          "source": "src/Language-AbstractSyntax-TTTAS.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "unT",
          "normalized": "a b Ref c d-\u003eRef c e",
          "package": "TTTAS",
          "signature": "forall x. Ref x e-\u003eRef x s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:unT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e takes an additional function as\n   argument, which is used to update the value the \n   reference addresses.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "update",
          "package": "TTTAS",
          "signature": "(a -\u003e a) -\u003e Ref a env -\u003e env -\u003e env",
          "source": "src/Language-AbstractSyntax-TTTAS.html#update",
          "type": "function"
        },
        "index": {
          "description": "The function update takes an additional function as argument which is used to update the value the reference addresses",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "update",
          "normalized": "(a-\u003ea)-\u003eRef a b-\u003eb-\u003eb",
          "package": "TTTAS",
          "signature": "(a-\u003ea)-\u003eRef a env-\u003eenv-\u003eenv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "updateEnv",
          "package": "TTTAS",
          "signature": "(t a s -\u003e t a s) -\u003e Ref a env -\u003e Env t s env -\u003e Env t s env",
          "source": "src/Language-AbstractSyntax-TTTAS.html#updateEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "updateEnv",
          "normalized": "(a b c-\u003ea b c)-\u003eRef b d-\u003eEnv a c d-\u003eEnv a c d",
          "package": "TTTAS",
          "partial": "Env",
          "signature": "(t a s-\u003et a s)-\u003eRef a env-\u003eEnv t s env-\u003eEnv t s env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:updateEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eupdateFinalEnv\u003c/a\u003e\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eTrafo\u003c/a\u003e\u003c/code\u003e that introduces a function\n   (\u003ccode\u003eFinalEnv t s -\u003e FinalEnv t s\u003c/code\u003e) to update the final environment.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "updateFinalEnv",
          "package": "TTTAS",
          "signature": "Trafo m t s (FinalEnv t s -\u003e FinalEnv t s) ()",
          "source": "src/Language-AbstractSyntax-TTTAS.html#updateFinalEnv",
          "type": "function"
        },
        "index": {
          "description": "The function updateFinalEnv returns Trafo that introduces function FinalEnv FinalEnv to update the final environment",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "updateFinalEnv",
          "normalized": "Trafo a b c(FinalEnv b c-\u003eFinalEnv b c)()",
          "package": "TTTAS",
          "partial": "Final Env",
          "signature": "Trafo m t s(FinalEnv t s-\u003eFinalEnv t s)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:updateFinalEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eupdateFinalEnv2\u003c/a\u003e\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eTrafo2\u003c/a\u003e\u003c/code\u003e that introduces a function\n   (\u003ccode\u003e(UpdFinalEnv t)\u003c/code\u003e) to update the final environment.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "updateFinalEnv2",
          "package": "TTTAS",
          "signature": "Trafo2 m t (UpdFinalEnv t) Unit",
          "source": "src/Language-AbstractSyntax-TTTAS.html#updateFinalEnv2",
          "type": "function"
        },
        "index": {
          "description": "The function updateFinalEnv2 returns Trafo2 that introduces function UpdFinalEnv to update the final environment",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "updateFinalEnv2",
          "package": "TTTAS",
          "partial": "Final Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:updateFinalEnv2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eupdateSRef\u003c/a\u003e\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eTrafoE\u003c/a\u003e\u003c/code\u003e that updates the value pointed\n   by the reference passed as parameter into the current environment.\n\u003c/p\u003e",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "updateSRef",
          "package": "TTTAS",
          "signature": "m e -\u003e Ref a e -\u003e (i -\u003e t a s -\u003e t a s) -\u003e TrafoE m t s e i (Ref a s)",
          "source": "src/Language-AbstractSyntax-TTTAS.html#updateSRef",
          "type": "function"
        },
        "index": {
          "description": "The function updateSRef returns TrafoE that updates the value pointed by the reference passed as parameter into the current environment",
          "hierarchy": "Language AbstractSyntax TTTAS",
          "module": "Language.AbstractSyntax.TTTAS",
          "name": "updateSRef",
          "normalized": "a b-\u003eRef c b-\u003e(d-\u003ee c f-\u003ee c f)-\u003eTrafoE a e f b d(Ref c f)",
          "package": "TTTAS",
          "partial": "SRef",
          "signature": "m e-\u003eRef a e-\u003e(i-\u003et a s-\u003et a s)-\u003eTrafoE m t s e i(Ref a s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TTTAS/docs/Language-AbstractSyntax-TTTAS.html#v:updateSRef"
      }
    }
  ]
]