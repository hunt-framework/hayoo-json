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
        "word": "kure-your-boilerplate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a Template Haskell based generator for the many data-type specific\n functions that KURE want users to write. KURE Your Boilerplate (KYB) attempts to make\n writing these function easy. Eventually, there will be a small DSL for effects inside the \n generated functions.\n\u003c/p\u003e\u003cp\u003eUnfortunately, you still need to write the \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e instance by hand, because of the use of\n type families, a feature that post-dates Template Haskell. You also need to write\n the single MyGeneric datatype, which is considered documentation of what you want \n KYB to do.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ekureYourBoilerplate\u003c/a\u003e\u003c/code\u003e generates a \u003ccode\u003e\u003ca\u003eWalker\u003c/a\u003e\u003c/code\u003e instance for every data-type mentioned in your Generic,\n a \u003ccode\u003e\u003ca\u003eWalker\u003c/a\u003e\u003c/code\u003e instance for the Generic type itself, \n and the following for every constructor in every data-structure that is mentioned in Generic. \n For exmaple if a constructor is called \u003ccode\u003eFoo\u003c/code\u003e, and has type \u003ccode\u003eFoo :: A -\u003e B -\u003e C\u003c/code\u003e, we generate\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003efooR :: (...) =\u003e R A -\u003e R B -\u003e R C --\u003c/code\u003e congruence over \u003ccode\u003eFoo\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003efooU :: (...,Monoid r) =\u003e T A r -\u003e T B r -\u003e T C r --\u003c/code\u003e unify the interesting arguments of a \u003ccode\u003eFoo\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003efooG :: (...) =\u003e R C --\u003c/code\u003e guard for the constructor \u003ccode\u003eFoo\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003efooP :: (...) =\u003e (A -\u003e B -\u003e T C a) -\u003e T C a --\u003c/code\u003e pattern matching on \u003ccode\u003eFoo\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ewithFoo :: (...,Failable f) =\u003e (A -\u003e B -\u003e f a) -\u003e C -\u003e f a --\u003c/code\u003e application and pattern matching on \u003ccode\u003eFoo\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHere, R is short for a 'Rewrite m dec', and 'T is short for 'Translate m dec'.\n\u003c/p\u003e\u003cp\u003eAn example of use is\n\u003c/p\u003e\u003cpre\u003e $(kureYourBoilerplate ''MyGeneric [(''Id,''())])\n\u003c/pre\u003e\u003cp\u003eWhich means \u003ccode\u003eMyGeneric\u003c/code\u003e is my universal type, \u003ccode\u003eId\u003c/code\u003e is my monad, and \u003ccode\u003e()\u003c/code\u003e is my monoid.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.KURE.Boilerplate",
          "name": "Boilerplate",
          "package": "kure-your-boilerplate",
          "source": "src/Language-KURE-Boilerplate.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains Template Haskell based generator for the many data-type specific functions that KURE want users to write KURE Your Boilerplate KYB attempts to make writing these function easy Eventually there will be small DSL for effects inside the generated functions Unfortunately you still need to write the Term instance by hand because of the use of type families feature that post-dates Template Haskell You also need to write the single MyGeneric datatype which is considered documentation of what you want KYB to do kureYourBoilerplate generates Walker instance for every data-type mentioned in your Generic Walker instance for the Generic type itself and the following for every constructor in every data-structure that is mentioned in Generic For exmaple if constructor is called Foo and has type Foo we generate fooR congruence over Foo fooU Monoid unify the interesting arguments of Foo fooG guard for the constructor Foo fooP pattern matching on Foo withFoo Failable application and pattern matching on Foo Here is short for Rewrite dec and is short for Translate dec An example of use is kureYourBoilerplate MyGeneric Id Which means MyGeneric is my universal type Id is my monad and is my monoid",
          "hierarchy": "Language KURE Boilerplate",
          "module": "Language.KURE.Boilerplate",
          "name": "Boilerplate",
          "package": "kure-your-boilerplate",
          "partial": "Boilerplate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kure-your-boilerplate/docs/Language-KURE-Boilerplate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ekureYourBoilerplate\u003c/a\u003e\u003c/code\u003e generates a number of functions for each data-type mentioned in\n our given Generic data-type, which we need to provide for KURE, as well as the\n Walker instance.\n\u003c/p\u003e\u003cp\u003eThe first argument is the name of the Generic data-structure, which you need to write by hand.\n If you provide the name of a type synonym as the first argument, then KYB assumes that you are acting\n over a single data-type, i.e. you generic is your AST type.\n If you provide the name of a data-type  (the typical use-case), then this function generates\n code for every conceptual sub-type of the provided data-type.\n\u003c/p\u003e\u003cp\u003eThe second argument is the monad over which you will be parameterizing your rewrite rules,\n and the third argument is the monoid over which you will be parameterizing.\n\u003c/p\u003e",
          "module": "Language.KURE.Boilerplate",
          "name": "kureYourBoilerplate",
          "package": "kure-your-boilerplate",
          "signature": "Name -\u003e [(Name, Name)] -\u003e Q [Dec]",
          "source": "src/Language-KURE-Boilerplate.html#kureYourBoilerplate",
          "type": "function"
        },
        "index": {
          "description": "kureYourBoilerplate generates number of functions for each data-type mentioned in our given Generic data-type which we need to provide for KURE as well as the Walker instance The first argument is the name of the Generic data-structure which you need to write by hand If you provide the name of type synonym as the first argument then KYB assumes that you are acting over single data-type i.e you generic is your AST type If you provide the name of data-type the typical use-case then this function generates code for every conceptual sub-type of the provided data-type The second argument is the monad over which you will be parameterizing your rewrite rules and the third argument is the monoid over which you will be parameterizing",
          "hierarchy": "Language KURE Boilerplate",
          "module": "Language.KURE.Boilerplate",
          "name": "kureYourBoilerplate",
          "normalized": "Name-\u003e[(Name,Name)]-\u003eQ[Dec]",
          "package": "kure-your-boilerplate",
          "partial": "Your Boilerplate",
          "signature": "Name-\u003e[(Name,Name)]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kure-your-boilerplate/docs/Language-KURE-Boilerplate.html#v:kureYourBoilerplate"
      }
    }
  ]
]