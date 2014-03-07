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
        "word": "reform"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a type-indexed / parameterized version of the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e classes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "Indexed",
          "package": "reform",
          "source": "src/Control-Applicative-Indexed.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides type-indexed parameterized version of the Functor and Applicative classes",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "Indexed",
          "package": "reform",
          "partial": "Indexed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea class for a 'type-indexed' or \u003ccode\u003eparamaterized\u003c/code\u003e applicative functors\n\u003c/p\u003e\u003cp\u003enote: not sure what the most correct name is for this class, or if\n it exists in a well supported library already.\n\u003c/p\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "IndexedApplicative",
          "package": "reform",
          "source": "src/Control-Applicative-Indexed.html#IndexedApplicative",
          "type": "class"
        },
        "index": {
          "description": "class for type-indexed or paramaterized applicative functors note not sure what the most correct name is for this class or if it exists in well supported library already",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "IndexedApplicative",
          "package": "reform",
          "partial": "Indexed Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#t:IndexedApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea class for a 'type-indexed' or \u003ccode\u003eparamaterized\u003c/code\u003e functor\n\u003c/p\u003e\u003cp\u003enote: not sure what the most correct name is for this class, or if\n it exists in a well supported library already.\n\u003c/p\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "IndexedFunctor",
          "package": "reform",
          "source": "src/Control-Applicative-Indexed.html#IndexedFunctor",
          "type": "class"
        },
        "index": {
          "description": "class for type-indexed or paramaterized functor note not sure what the most correct name is for this class or if it exists in well supported library already",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "IndexedFunctor",
          "package": "reform",
          "partial": "Indexed Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#t:IndexedFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea wrapper which lifts a value with an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance so that it can be used as an \u003ccode\u003e\u003ca\u003eIndexedFunctor\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eIndexedApplicative\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e d :: WrappedApplicative Maybe y Char\n d = WrappedApplicative (Just succ) \u003c\u003c*\u003e\u003e WrappedApplicative (Just 'c')\n\u003c/pre\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "WrappedApplicative",
          "package": "reform",
          "source": "src/Control-Applicative-Indexed.html#WrappedApplicative",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper which lifts value with an Applicative instance so that it can be used as an IndexedFunctor or IndexedApplicative WrappedApplicative Maybe Char WrappedApplicative Just succ WrappedApplicative Just",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "WrappedApplicative",
          "package": "reform",
          "partial": "Wrapped Applicative",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#t:WrappedApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "(*\u003e\u003e)",
          "package": "reform",
          "signature": "f x a -\u003e f y b -\u003e f y b",
          "source": "src/Control-Applicative-Indexed.html#%2A%3E%3E",
          "type": "method"
        },
        "index": {
          "description": "similar to",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "(*\u003e\u003e) *\u003e\u003e",
          "normalized": "a b c-\u003ea d e-\u003ea d e",
          "package": "reform",
          "signature": "f x a-\u003ef y b-\u003ef y b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:-42--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e. An alias for \u003ccode\u003eimap id\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "(\u003c\u003c$\u003e\u003e)",
          "package": "reform",
          "signature": "(a -\u003e b) -\u003e f y a -\u003e f y b",
          "source": "src/Control-Applicative-Indexed.html#%3C%3C%24%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "similar to An alias for imap id",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "(\u003c\u003c$\u003e\u003e) \u003c\u003c$\u003e\u003e",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "reform",
          "signature": "(a-\u003eb)-\u003ef y a-\u003ef y b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:-60--60--36--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "(\u003c\u003c*)",
          "package": "reform",
          "signature": "f x a -\u003e f y b -\u003e f x a",
          "source": "src/Control-Applicative-Indexed.html#%3C%3C%2A",
          "type": "method"
        },
        "index": {
          "description": "similar to",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "(\u003c\u003c*) \u003c\u003c*",
          "normalized": "a b c-\u003ea d e-\u003ea b c",
          "package": "reform",
          "signature": "f x a-\u003ef y b-\u003ef x a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:-60--60--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003e\u003c\u003c*\u003e\u003e\u003c/a\u003e\u003c/code\u003e with the arguments reversed.\n\u003c/p\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "(\u003c\u003c**\u003e\u003e)",
          "package": "reform",
          "signature": "f x a -\u003e f (x -\u003e y) (a -\u003e b) -\u003e f y b",
          "source": "src/Control-Applicative-Indexed.html#%3C%3C%2A%2A%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "variant of with the arguments reversed",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "(\u003c\u003c**\u003e\u003e) \u003c\u003c**\u003e\u003e",
          "normalized": "a b c-\u003ea(b-\u003ed)(c-\u003ee)-\u003ea d e",
          "package": "reform",
          "signature": "f x a-\u003ef(x-\u003ey)(a-\u003eb)-\u003ef y b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:-60--60--42--42--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "(\u003c\u003c*\u003e\u003e)",
          "package": "reform",
          "signature": "f (x -\u003e y) (a -\u003e b) -\u003e f x a -\u003e f y b",
          "source": "src/Control-Applicative-Indexed.html#%3C%3C%2A%3E%3E",
          "type": "method"
        },
        "index": {
          "description": "similar to",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "(\u003c\u003c*\u003e\u003e) \u003c\u003c*\u003e\u003e",
          "normalized": "a(b-\u003ec)(d-\u003ee)-\u003ea b d-\u003ea c e",
          "package": "reform",
          "signature": "f(x-\u003ey)(a-\u003eb)-\u003ef x a-\u003ef y b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:-60--60--42--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Applicative.Indexed",
          "name": "WrappedApplicative",
          "package": "reform",
          "signature": "WrappedApplicative",
          "source": "src/Control-Applicative-Indexed.html#WrappedApplicative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "WrappedApplicative",
          "package": "reform",
          "partial": "Wrapped Applicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:WrappedApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eimap is similar to fmap\n\u003c/p\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "imap",
          "package": "reform",
          "signature": "imap",
          "source": "src/Control-Applicative-Indexed.html#imap",
          "type": "method"
        },
        "index": {
          "description": "imap is similar to fmap",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "imap",
          "package": "reform",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "ipure",
          "package": "reform",
          "signature": "x -\u003e a -\u003e f x a",
          "source": "src/Control-Applicative-Indexed.html#ipure",
          "type": "method"
        },
        "index": {
          "description": "similar to pure",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "ipure",
          "normalized": "a-\u003eb-\u003ec a b",
          "package": "reform",
          "signature": "x-\u003ea-\u003ef x a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:ipure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function to actions.\n This function may be used as a value for \u003ccode\u003e\u003ca\u003eimap\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eIndexedFunctor\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "liftIA",
          "package": "reform",
          "signature": "(a -\u003e b) -\u003e (x -\u003e y) -\u003e f a x -\u003e f b y",
          "source": "src/Control-Applicative-Indexed.html#liftIA",
          "type": "function"
        },
        "index": {
          "description": "Lift function to actions This function may be used as value for imap in IndexedFunctor instance",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "liftIA",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003ee a c-\u003ee b d",
          "package": "reform",
          "partial": "IA",
          "signature": "(a-\u003eb)-\u003e(x-\u003ey)-\u003ef a x-\u003ef b y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:liftIA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a binary function to actions.\n\u003c/p\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "liftIA2",
          "package": "reform",
          "signature": "(a -\u003e b -\u003e c) -\u003e (x -\u003e y -\u003e z) -\u003e f a x -\u003e f b y -\u003e f c z",
          "source": "src/Control-Applicative-Indexed.html#liftIA2",
          "type": "function"
        },
        "index": {
          "description": "Lift binary function to actions",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "liftIA2",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ee-\u003ef)-\u003eg a d-\u003eg b e-\u003eg c f",
          "package": "reform",
          "partial": "IA",
          "signature": "(a-\u003eb-\u003ec)-\u003e(x-\u003ey-\u003ez)-\u003ef a x-\u003ef b y-\u003ef c z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:liftIA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a binary function to actions.\n\u003c/p\u003e",
          "module": "Control.Applicative.Indexed",
          "name": "liftIA3",
          "package": "reform",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (w -\u003e x -\u003e y -\u003e z) -\u003e f a w -\u003e f b x -\u003e f c y -\u003e f d z",
          "source": "src/Control-Applicative-Indexed.html#liftIA3",
          "type": "function"
        },
        "index": {
          "description": "Lift binary function to actions",
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "liftIA3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(e-\u003ef-\u003eg-\u003eh)-\u003ei a e-\u003ei b f-\u003ei c g-\u003ei d h",
          "package": "reform",
          "partial": "IA",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(w-\u003ex-\u003ey-\u003ez)-\u003ef a w-\u003ef b x-\u003ef c y-\u003ef d z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:liftIA3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Applicative.Indexed",
          "name": "unwrapApplicative",
          "package": "reform",
          "signature": "f a",
          "source": "src/Control-Applicative-Indexed.html#WrappedApplicative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Applicative Indexed",
          "module": "Control.Applicative.Indexed",
          "name": "unwrapApplicative",
          "package": "reform",
          "partial": "Applicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:unwrapApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains two classes. \u003ccode\u003e\u003ca\u003eFormInput\u003c/a\u003e\u003c/code\u003e is a class which is parameterized over the \u003ccode\u003einput\u003c/code\u003e type used to represent form data in different web frameworks. There should be one instance for each framework, such as Happstack, Snap, WAI, etc.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFormError\u003c/a\u003e\u003c/code\u003e class is used to map error messages into an application specific error type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Reform.Backend",
          "name": "Backend",
          "package": "reform",
          "source": "src/Text-Reform-Backend.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains two classes FormInput is class which is parameterized over the input type used to represent form data in different web frameworks There should be one instance for each framework such as Happstack Snap WAI etc The FormError class is used to map error messages into an application specific error type",
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "Backend",
          "package": "reform",
          "partial": "Backend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean error type used to represent errors that are common to all backends\n\u003c/p\u003e\u003cp\u003eThese errors should only occur if there is a bug in the reform-*\n packages. Perhaps we should make them an \u003ccode\u003eException\u003c/code\u003e so that we can\n get rid of the \u003ccode\u003e\u003ca\u003eFormError\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.Reform.Backend",
          "name": "CommonFormError",
          "package": "reform",
          "source": "src/Text-Reform-Backend.html#CommonFormError",
          "type": "data"
        },
        "index": {
          "description": "an error type used to represent errors that are common to all backends These errors should only occur if there is bug in the reform packages Perhaps we should make them an Exception so that we can get rid of the FormError class",
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "CommonFormError",
          "package": "reform",
          "partial": "Common Form Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#t:CommonFormError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Class to lift a \u003ccode\u003e\u003ca\u003eCommonFormError\u003c/a\u003e\u003c/code\u003e into an application-specific error type\n\u003c/p\u003e",
          "module": "Text.Reform.Backend",
          "name": "FormError",
          "package": "reform",
          "source": "src/Text-Reform-Backend.html#FormError",
          "type": "class"
        },
        "index": {
          "description": "Class to lift CommonFormError into an application-specific error type",
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "FormError",
          "package": "reform",
          "partial": "Form Error",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#t:FormError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass which all backends should implement.\n\u003c/p\u003e",
          "module": "Text.Reform.Backend",
          "name": "FormInput",
          "package": "reform",
          "source": "src/Text-Reform-Backend.html#FormInput",
          "type": "class"
        },
        "index": {
          "description": "Class which all backends should implement",
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "FormInput",
          "package": "reform",
          "partial": "Form Input",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#t:FormInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Backend",
          "name": "InputMissing",
          "package": "reform",
          "signature": "InputMissing FormId",
          "source": "src/Text-Reform-Backend.html#CommonFormError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "InputMissing",
          "package": "reform",
          "partial": "Input Missing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:InputMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Backend",
          "name": "MissingDefaultValue",
          "package": "reform",
          "signature": "MissingDefaultValue",
          "source": "src/Text-Reform-Backend.html#CommonFormError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "MissingDefaultValue",
          "package": "reform",
          "partial": "Missing Default Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:MissingDefaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Backend",
          "name": "MultiFilesFound",
          "package": "reform",
          "signature": "MultiFilesFound input",
          "source": "src/Text-Reform-Backend.html#CommonFormError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "MultiFilesFound",
          "package": "reform",
          "partial": "Multi Files Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:MultiFilesFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Backend",
          "name": "MultiStringsFound",
          "package": "reform",
          "signature": "MultiStringsFound input",
          "source": "src/Text-Reform-Backend.html#CommonFormError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "MultiStringsFound",
          "package": "reform",
          "partial": "Multi Strings Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:MultiStringsFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Backend",
          "name": "NoFileFound",
          "package": "reform",
          "signature": "NoFileFound input",
          "source": "src/Text-Reform-Backend.html#CommonFormError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "NoFileFound",
          "package": "reform",
          "partial": "No File Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:NoFileFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Backend",
          "name": "NoStringFound",
          "package": "reform",
          "signature": "NoStringFound input",
          "source": "src/Text-Reform-Backend.html#CommonFormError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "NoStringFound",
          "package": "reform",
          "partial": "No String Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:NoStringFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Backend",
          "name": "commonFormError",
          "package": "reform",
          "signature": "CommonFormError (ErrorInputType e) -\u003e e",
          "source": "src/Text-Reform-Backend.html#commonFormError",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "commonFormError",
          "normalized": "CommonFormError(ErrorInputType a)-\u003ea",
          "package": "reform",
          "partial": "Form Error",
          "signature": "CommonFormError(ErrorInputType e)-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:commonFormError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esome default error messages for \u003ccode\u003e\u003ca\u003eCommonFormError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Backend",
          "name": "commonFormErrorStr",
          "package": "reform",
          "signature": "(input -\u003e String)-\u003e CommonFormError input-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "some default error messages for CommonFormError",
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "commonFormErrorStr",
          "normalized": "(a-\u003eString)-\u003eCommonFormError a-\u003eString",
          "package": "reform",
          "partial": "Form Error Str",
          "signature": "(input-\u003eString)-\u003eCommonFormError input-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:commonFormErrorStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a file descriptor for an uploaded file\n\u003c/p\u003e",
          "module": "Text.Reform.Backend",
          "name": "getInputFile",
          "package": "reform",
          "signature": "input -\u003e Either error (FileType input)",
          "source": "src/Text-Reform-Backend.html#getInputFile",
          "type": "method"
        },
        "index": {
          "description": "Get file descriptor for an uploaded file",
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "getInputFile",
          "normalized": "a-\u003eEither b(FileType a)",
          "package": "reform",
          "partial": "Input File",
          "signature": "input-\u003eEither error(FileType input)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:getInputFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the input into a string. This is used for simple text fields\n among other things\n\u003c/p\u003e",
          "module": "Text.Reform.Backend",
          "name": "getInputString",
          "package": "reform",
          "signature": "input -\u003e Either error String",
          "source": "src/Text-Reform-Backend.html#getInputString",
          "type": "method"
        },
        "index": {
          "description": "Parse the input into string This is used for simple text fields among other things",
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "getInputString",
          "normalized": "a-\u003eEither b String",
          "package": "reform",
          "partial": "Input String",
          "signature": "input-\u003eEither error String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:getInputString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould be implemented\n\u003c/p\u003e",
          "module": "Text.Reform.Backend",
          "name": "getInputStrings",
          "package": "reform",
          "signature": "input -\u003e [String]",
          "source": "src/Text-Reform-Backend.html#getInputStrings",
          "type": "method"
        },
        "index": {
          "description": "Should be implemented",
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "getInputStrings",
          "normalized": "a-\u003e[String]",
          "package": "reform",
          "partial": "Input Strings",
          "signature": "input-\u003e[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:getInputStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the input value into \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Backend",
          "name": "getInputText",
          "package": "reform",
          "signature": "input -\u003e Either error Text",
          "source": "src/Text-Reform-Backend.html#getInputText",
          "type": "method"
        },
        "index": {
          "description": "Parse the input value into Text",
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "getInputText",
          "normalized": "a-\u003eEither b Text",
          "package": "reform",
          "partial": "Input Text",
          "signature": "input-\u003eEither error Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:getInputText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan be overriden for efficiency concerns\n\u003c/p\u003e",
          "module": "Text.Reform.Backend",
          "name": "getInputTexts",
          "package": "reform",
          "signature": "input -\u003e [Text]",
          "source": "src/Text-Reform-Backend.html#getInputTexts",
          "type": "method"
        },
        "index": {
          "description": "Can be overriden for efficiency concerns",
          "hierarchy": "Text Reform Backend",
          "module": "Text.Reform.Backend",
          "name": "getInputTexts",
          "normalized": "a-\u003e[Text]",
          "package": "reform",
          "partial": "Input Texts",
          "signature": "input-\u003e[Text]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:getInputTexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e type, its instances, core manipulation functions, and a bunch of helper utilities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Reform.Core",
          "name": "Core",
          "package": "reform",
          "source": "src/Text-Reform-Core.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the Form type its instances core manipulation functions and bunch of helper utilities",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "Core",
          "package": "reform",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe environment is where you get the actual input per form.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNoEnvironment\u003c/a\u003e\u003c/code\u003e constructor is typically used when generating a\n view for a GET request, where no data has yet been submitted. This\n will cause the input elements to use their supplied default values.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003eNoEnviroment\u003c/code\u003e is different than supplying an empty environment.\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "Environment",
          "package": "reform",
          "source": "src/Text-Reform-Core.html#Environment",
          "type": "data"
        },
        "index": {
          "description": "The environment is where you get the actual input per form The NoEnvironment constructor is typically used when generating view for GET request where no data has yet been submitted This will cause the input elements to use their supplied default values Note that NoEnviroment is different than supplying an empty environment",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "Environment",
          "package": "reform",
          "partial": "Environment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#t:Environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e contains a \u003ccode\u003e\u003ca\u003eView\u003c/a\u003e\u003c/code\u003e combined with a validation function\n which will attempt to extract a value from submitted form data.\n\u003c/p\u003e\u003cp\u003eIt is highly parameterized, allowing it work in a wide variety of\n different configurations. You will likely want to make a type alias\n that is specific to your application to make type signatures more\n manageable.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003em\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A monad which can be used by the validator\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003einput\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A framework specific type for representing the raw key/value pairs from the form data\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eerror\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A application specific type for error messages\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eview\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The type of data being generated for the view (HSP, Blaze Html, Heist, etc)\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eproof\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A type which names what has been proved about the return value. \u003ccode\u003e()\u003c/code\u003e means nothing has been proved.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ea\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Value return by form when it is successfully decoded, validated, etc.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThis type is very similar to the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e type from\n \u003ccode\u003edigestive-functors \u003c= 0.2\u003c/code\u003e. If \u003ccode\u003eproof\u003c/code\u003e is \u003ccode\u003e()\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e is an\n applicative functor and can be used almost exactly like\n \u003ccode\u003edigestive-functors \u003c= 0.2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "Form",
          "package": "reform",
          "source": "src/Text-Reform-Core.html#Form",
          "type": "newtype"
        },
        "index": {
          "description": "Form contains View combined with validation function which will attempt to extract value from submitted form data It is highly parameterized allowing it work in wide variety of different configurations You will likely want to make type alias that is specific to your application to make type signatures more manageable monad which can be used by the validator input framework specific type for representing the raw key value pairs from the form data error application specific type for error messages view The type of data being generated for the view HSP Blaze Html Heist etc proof type which names what has been proved about the return value means nothing has been proved Value return by form when it is successfully decoded validated etc This type is very similar to the Form type from digestive-functors If proof is then Form is an applicative functor and can be used almost exactly like digestive-functors",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "Form",
          "package": "reform",
          "partial": "Form",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#t:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einner state used by \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "FormState",
          "package": "reform",
          "source": "src/Text-Reform-Core.html#FormState",
          "type": "type"
        },
        "index": {
          "description": "inner state used by Form",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "FormState",
          "package": "reform",
          "partial": "Form State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#t:FormState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProved records a value, the location that value came from, and something that was proved about the value.\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "Proved",
          "package": "reform",
          "source": "src/Text-Reform-Core.html#Proved",
          "type": "data"
        },
        "index": {
          "description": "Proved records value the location that value came from and something that was proved about the value",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "Proved",
          "package": "reform",
          "partial": "Proved",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#t:Proved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused to represent whether a value was found in the form\n submission data, missing from the form submission data, or expected\n that the default value should be used\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "Value",
          "package": "reform",
          "source": "src/Text-Reform-Core.html#Value",
          "type": "data"
        },
        "index": {
          "description": "used to represent whether value was found in the form submission data missing from the form submission data or expected that the default value should be used",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "Value",
          "package": "reform",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA view represents a visual representation of a form. It is composed of a\n function which takes a list of all errors and then produces a new view\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "View",
          "package": "reform",
          "source": "src/Text-Reform-Core.html#View",
          "type": "newtype"
        },
        "index": {
          "description": "view represents visual representation of form It is composed of function which takes list of all errors and then produces new view",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "View",
          "package": "reform",
          "partial": "View",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a unit form to the left. This is useful for adding labels or error\n fields.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eForms\u003c/code\u003e on the left and right hand side will share the same\n \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e. This is useful for elements like \u003ccode\u003e\u003clabel\n for=\"someid\"\u003e\u003c/code\u003e, which need to refer to the id of another\n element.\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "(++\u003e)",
          "package": "reform",
          "signature": "Form m input error view () () -\u003e Form m input error view proof a -\u003e Form m input error view proof a",
          "source": "src/Text-Reform-Core.html#%2B%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Append unit form to the left This is useful for adding labels or error fields The Forms on the left and right hand side will share the same FormId This is useful for elements like label for someid which need to refer to the id of another element",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "(++\u003e) ++\u003e",
          "normalized": "Form a b c d()()-\u003eForm a b c d e f-\u003eForm a b c d e f",
          "package": "reform",
          "signature": "Form m input error view()()-\u003eForm m input error view proof a-\u003eForm m input error view proof a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:-43--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a unit form to the right. See \u003ccode\u003e\u003ca\u003e++\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "(\u003c++)",
          "package": "reform",
          "signature": "Form m input error view proof a -\u003e Form m input error view () () -\u003e Form m input error view proof a",
          "source": "src/Text-Reform-Core.html#%3C%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Append unit form to the right See",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "(\u003c++) \u003c++",
          "normalized": "Form a b c d e f-\u003eForm a b c d()()-\u003eForm a b c d e f",
          "package": "reform",
          "signature": "Form m input error view proof a-\u003eForm m input error view()()-\u003eForm m input error view proof a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:-60--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "Default",
          "package": "reform",
          "signature": "Default",
          "source": "src/Text-Reform-Core.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "Default",
          "package": "reform",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "Environment",
          "package": "reform",
          "signature": "Environment (FormId -\u003e m (Value input))",
          "source": "src/Text-Reform-Core.html#Environment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "Environment",
          "normalized": "Environment(FormId-\u003ea(Value b))",
          "package": "reform",
          "partial": "Environment",
          "signature": "Environment(FormId-\u003em(Value input))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:Environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "Form",
          "package": "reform",
          "signature": "Form",
          "source": "src/Text-Reform-Core.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "Form",
          "package": "reform",
          "partial": "Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "Found",
          "package": "reform",
          "signature": "Found a",
          "source": "src/Text-Reform-Core.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "Found",
          "package": "reform",
          "partial": "Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:Found"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "Missing",
          "package": "reform",
          "signature": "Missing",
          "source": "src/Text-Reform-Core.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "Missing",
          "package": "reform",
          "partial": "Missing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:Missing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "NoEnvironment",
          "package": "reform",
          "signature": "NoEnvironment",
          "source": "src/Text-Reform-Core.html#Environment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "NoEnvironment",
          "package": "reform",
          "partial": "No Environment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:NoEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "Proved",
          "package": "reform",
          "signature": "Proved",
          "source": "src/Text-Reform-Core.html#Proved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "Proved",
          "package": "reform",
          "partial": "Proved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:Proved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "View",
          "package": "reform",
          "signature": "View",
          "source": "src/Text-Reform-Core.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "View",
          "package": "reform",
          "partial": "View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "bracketState",
          "package": "reform",
          "signature": "FormState m input a -\u003e FormState m input a",
          "source": "src/Text-Reform-Core.html#bracketState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "bracketState",
          "normalized": "FormState a b c-\u003eFormState a b c",
          "package": "reform",
          "partial": "State",
          "signature": "FormState m input a-\u003eFormState m input a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:bracketState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a form\n\u003c/p\u003e\u003cp\u003eReturns:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eLeft view\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e on failure. The \u003ccode\u003eview\u003c/code\u003e will have already been applied to the errors.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eRight a\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e on success.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Text.Reform.Core",
          "name": "eitherForm",
          "package": "reform",
          "signature": "Environment m input-\u003e Text-\u003e Form m input error view proof a-\u003e m (Either view a)",
          "type": "function"
        },
        "index": {
          "description": "Evaluate form Returns Left view on failure The view will have already been applied to the errors Right on success",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "eitherForm",
          "normalized": "Environment a b-\u003eText-\u003eForm a b c d e f-\u003ea(Either d f)",
          "package": "reform",
          "partial": "Form",
          "signature": "Environment m input-\u003eText-\u003eForm m input error view proof a-\u003em(Either view a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:eitherForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function: returns the current \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e. This will only make sense\n if the form is not composed\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "getFormId",
          "package": "reform",
          "signature": "FormState m i FormId",
          "source": "src/Text-Reform-Core.html#getFormId",
          "type": "function"
        },
        "index": {
          "description": "Utility function returns the current FormId This will only make sense if the form is not composed",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "getFormId",
          "package": "reform",
          "partial": "Form Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:getFormId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function: Get the current input\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "getFormInput",
          "package": "reform",
          "signature": "FormState m input (Value input)",
          "source": "src/Text-Reform-Core.html#getFormInput",
          "type": "function"
        },
        "index": {
          "description": "Utility function Get the current input",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "getFormInput",
          "package": "reform",
          "partial": "Form Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:getFormInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function: Gets the input of an arbitrary \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "getFormInput'",
          "package": "reform",
          "signature": "FormId -\u003e FormState m input (Value input)",
          "source": "src/Text-Reform-Core.html#getFormInput%27",
          "type": "function"
        },
        "index": {
          "description": "Utility function Gets the input of an arbitrary FormId",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "getFormInput'",
          "normalized": "FormId-\u003eFormState a b(Value b)",
          "package": "reform",
          "partial": "Form Input'",
          "signature": "FormId-\u003eFormState m input(Value input)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:getFormInput-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function: Get the current range\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "getFormRange",
          "package": "reform",
          "signature": "FormState m i FormRange",
          "source": "src/Text-Reform-Core.html#getFormRange",
          "type": "function"
        },
        "index": {
          "description": "Utility function Get the current range",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "getFormRange",
          "package": "reform",
          "partial": "Form Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:getFormRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function: increment the current \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "incFormId",
          "package": "reform",
          "signature": "FormState m i ()",
          "source": "src/Text-Reform-Core.html#incFormId",
          "type": "function"
        },
        "index": {
          "description": "Utility function increment the current FormId",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "incFormId",
          "normalized": "FormState a b()",
          "package": "reform",
          "partial": "Form Id",
          "signature": "FormState m i()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:incFormId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the view of a form using a simple function\n\u003c/p\u003e\u003cp\u003eThis is useful for wrapping a form inside of a \u003cfieldset\u003e or other markup element.\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "mapView",
          "package": "reform",
          "signature": "(view -\u003e view')-\u003e Form m input error view proof a-\u003e Form m input error view' proof a",
          "type": "function"
        },
        "index": {
          "description": "Change the view of form using simple function This is useful for wrapping form inside of fieldset or other markup element",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "mapView",
          "normalized": "(a-\u003eb)-\u003eForm c d e a f g-\u003eForm c d e b f g",
          "package": "reform",
          "partial": "View",
          "signature": "(view-\u003eview')-\u003eForm m input error view proof a-\u003eForm m input error view' proof a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:mapView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility Function: turn a view and return value into a successful \u003ccode\u003e\u003ca\u003eFormState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "mkOk",
          "package": "reform",
          "signature": "FormId -\u003e view -\u003e a -\u003e FormState m input (View error view, m (Result error (Proved () a)))",
          "source": "src/Text-Reform-Core.html#mkOk",
          "type": "function"
        },
        "index": {
          "description": "Utility Function turn view and return value into successful FormState",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "mkOk",
          "normalized": "FormId-\u003ea-\u003eb-\u003eFormState c d(View e a,c(Result e(Proved()b)))",
          "package": "reform",
          "partial": "Ok",
          "signature": "FormId-\u003eview-\u003ea-\u003eFormState m input(View error view,m(Result error(Proved()a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:mkOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "pos",
          "package": "reform",
          "signature": "FormRange",
          "source": "src/Text-Reform-Core.html#Proved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "pos",
          "package": "reform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "proofs",
          "package": "reform",
          "signature": "proofs",
          "source": "src/Text-Reform-Core.html#Proved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "proofs",
          "package": "reform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:proofs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a form\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "runForm",
          "package": "reform",
          "signature": "Environment m input -\u003e Text -\u003e Form m input error view proof a -\u003e m (View error view, m (Result error (Proved proof a)))",
          "source": "src/Text-Reform-Core.html#runForm",
          "type": "function"
        },
        "index": {
          "description": "Run form",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "runForm",
          "normalized": "Environment a b-\u003eText-\u003eForm a b c d e f-\u003ea(View c d,a(Result c(Proved e f)))",
          "package": "reform",
          "partial": "Form",
          "signature": "Environment m input-\u003eText-\u003eForm m input error view proof a-\u003em(View error view,m(Result error(Proved proof a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:runForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a form\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "runForm'",
          "package": "reform",
          "signature": "Environment m input -\u003e Text -\u003e Form m input error view proof a -\u003e m (view, Maybe a)",
          "source": "src/Text-Reform-Core.html#runForm%27",
          "type": "function"
        },
        "index": {
          "description": "Run form",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "runForm'",
          "normalized": "Environment a b-\u003eText-\u003eForm a b c d e f-\u003ea(d,Maybe f)",
          "package": "reform",
          "partial": "Form'",
          "signature": "Environment m input-\u003eText-\u003eForm m input error view proof a-\u003em(view,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:runForm-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "unForm",
          "package": "reform",
          "signature": "FormState m input (View error view, m (Result error (Proved proof a)))",
          "source": "src/Text-Reform-Core.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "unForm",
          "normalized": "FormState a b(View c d,a(Result c(Proved e f)))",
          "package": "reform",
          "partial": "Form",
          "signature": "FormState m input(View error view,m(Result error(Proved proof a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:unForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "unProved",
          "package": "reform",
          "signature": "a",
          "source": "src/Text-Reform-Core.html#Proved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "unProved",
          "package": "reform",
          "partial": "Proved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:unProved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Core",
          "name": "unView",
          "package": "reform",
          "signature": "[(FormRange, error)] -\u003e v",
          "source": "src/Text-Reform-Core.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "unView",
          "normalized": "[(FormRange,a)]-\u003eb",
          "package": "reform",
          "partial": "View",
          "signature": "[(FormRange,error)]-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:unView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility Function: trivially prove nothing about ()\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "unitProved",
          "package": "reform",
          "signature": "FormId -\u003e Proved () ()",
          "source": "src/Text-Reform-Core.html#unitProved",
          "type": "function"
        },
        "index": {
          "description": "Utility Function trivially prove nothing about",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "unitProved",
          "normalized": "FormId-\u003eProved()()",
          "package": "reform",
          "partial": "Proved",
          "signature": "FormId-\u003eProved()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:unitProved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e from some \u003ccode\u003eview\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is typically used to turn markup like \u003ccode\u003e\u003cbr\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "view",
          "package": "reform",
          "signature": "view-\u003e Form m input error view () ()",
          "type": "function"
        },
        "index": {
          "description": "create Form from some view This is typically used to turn markup like br into Form",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "view",
          "normalized": "a-\u003eForm b c d a()()",
          "package": "reform",
          "signature": "view-\u003eForm m input error view()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust evaluate the form to a view. This usually maps to a GET request in the\n browser.\n\u003c/p\u003e",
          "module": "Text.Reform.Core",
          "name": "viewForm",
          "package": "reform",
          "signature": "Text-\u003e Form m input error view proof a-\u003e m view",
          "type": "function"
        },
        "index": {
          "description": "Just evaluate the form to view This usually maps to GET request in the browser",
          "hierarchy": "Text Reform Core",
          "module": "Text.Reform.Core",
          "name": "viewForm",
          "normalized": "Text-\u003eForm a b c d e f-\u003ea d",
          "package": "reform",
          "partial": "Form",
          "signature": "Text-\u003eForm m input error view proof a-\u003em view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:viewForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides helper functions for HTML input elements. These helper functions are not specific to any particular web framework or html library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Reform.Generalized",
          "name": "Generalized",
          "package": "reform",
          "source": "src/Text-Reform-Generalized.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides helper functions for HTML input elements These helper functions are not specific to any particular web framework or html library",
          "hierarchy": "Text Reform Generalized",
          "module": "Text.Reform.Generalized",
          "name": "Generalized",
          "package": "reform",
          "partial": "Generalized",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003eerrors\u003c/a\u003e\u003c/code\u003e but includes error messages from children of the form as well.\n\u003c/p\u003e",
          "module": "Text.Reform.Generalized",
          "name": "childErrors",
          "package": "reform",
          "signature": "([error] -\u003e view) -\u003e Form m input error view () ()",
          "source": "src/Text-Reform-Generalized.html#childErrors",
          "type": "function"
        },
        "index": {
          "description": "similar to errors but includes error messages from children of the form as well",
          "hierarchy": "Text Reform Generalized",
          "module": "Text.Reform.Generalized",
          "name": "childErrors",
          "normalized": "([a]-\u003eb)-\u003eForm c d a b()()",
          "package": "reform",
          "partial": "Errors",
          "signature": "([error]-\u003eview)-\u003eForm m input error view()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:childErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused to add a list of error messages to a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis function automatically takes care of extracting only the\n errors that are relevent to the form element it is attached to via\n \u003ccode\u003e\u003ca\u003e\u003c++\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e++\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Reform.Generalized",
          "name": "errors",
          "package": "reform",
          "signature": "([error] -\u003e view)-\u003e Form m input error view () ()",
          "type": "function"
        },
        "index": {
          "description": "used to add list of error messages to Form This function automatically takes care of extracting only the errors that are relevent to the form element it is attached to via or",
          "hierarchy": "Text Reform Generalized",
          "module": "Text.Reform.Generalized",
          "name": "errors",
          "normalized": "([a]-\u003eb)-\u003eForm c d a b()()",
          "package": "reform",
          "signature": "([error]-\u003eview)-\u003eForm m input error view()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused for constructing elements like \u003ccode\u003e\u003cinput type=\"text\"\u003e\u003c/code\u003e, which return a single input value.\n\u003c/p\u003e",
          "module": "Text.Reform.Generalized",
          "name": "input",
          "package": "reform",
          "signature": "(input -\u003e Either error a) -\u003e (FormId -\u003e a -\u003e view) -\u003e a -\u003e Form m input error view () a",
          "source": "src/Text-Reform-Generalized.html#input",
          "type": "function"
        },
        "index": {
          "description": "used for constructing elements like input type text which return single input value",
          "hierarchy": "Text Reform Generalized",
          "module": "Text.Reform.Generalized",
          "name": "input",
          "normalized": "(a-\u003eEither b c)-\u003e(FormId-\u003ec-\u003ed)-\u003ec-\u003eForm e a b d()c",
          "package": "reform",
          "signature": "(input-\u003eEither error a)-\u003e(FormId-\u003ea-\u003eview)-\u003ea-\u003eForm m input error view()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eradio buttons, single \u003ccode\u003e\u003cselect\u003e\u003c/code\u003e boxes\n\u003c/p\u003e",
          "module": "Text.Reform.Generalized",
          "name": "inputChoice",
          "package": "reform",
          "signature": "(a -\u003e Bool)-\u003e [(a, lbl)]-\u003e (FormId -\u003e [(FormId, Int, lbl, Bool)] -\u003e view)-\u003e Form m input error view () a",
          "type": "function"
        },
        "index": {
          "description": "radio buttons single select boxes",
          "hierarchy": "Text Reform Generalized",
          "module": "Text.Reform.Generalized",
          "name": "inputChoice",
          "normalized": "(a-\u003eBool)-\u003e[(a,b)]-\u003e(FormId-\u003e[(FormId,Int,b,Bool)]-\u003ec)-\u003eForm d e f c()a",
          "package": "reform",
          "partial": "Choice",
          "signature": "(a-\u003eBool)-\u003e[(a,lbl)]-\u003e(FormId-\u003e[(FormId,Int,lbl,Bool)]-\u003eview)-\u003eForm m input error view()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:inputChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eradio buttons, single \u003ccode\u003e\u003cselect\u003e\u003c/code\u003e boxes\n\u003c/p\u003e",
          "module": "Text.Reform.Generalized",
          "name": "inputChoiceForms",
          "package": "reform",
          "signature": "a-\u003e [(Form m input error view proof a, lbl)]-\u003e (FormId -\u003e [(FormId, Int, FormId, view, lbl, Bool)] -\u003e view)-\u003e Form m input error view proof a",
          "type": "function"
        },
        "index": {
          "description": "radio buttons single select boxes",
          "hierarchy": "Text Reform Generalized",
          "module": "Text.Reform.Generalized",
          "name": "inputChoiceForms",
          "normalized": "a-\u003e[(Form b c d e f a,g)]-\u003e(FormId-\u003e[(FormId,Int,FormId,e,g,Bool)]-\u003ee)-\u003eForm b c d e f a",
          "package": "reform",
          "partial": "Choice Forms",
          "signature": "a-\u003e[(Form m input error view proof a,lbl)]-\u003e(FormId-\u003e[(FormId,Int,FormId,view,lbl,Bool)]-\u003eview)-\u003eForm m input error view proof a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:inputChoiceForms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused for \u003ccode\u003e\u003cinput type=\"file\"\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Generalized",
          "name": "inputFile",
          "package": "reform",
          "signature": "(FormId -\u003e view) -\u003e Form m input error view () (FileType input)",
          "source": "src/Text-Reform-Generalized.html#inputFile",
          "type": "function"
        },
        "index": {
          "description": "used for input type file",
          "hierarchy": "Text Reform Generalized",
          "module": "Text.Reform.Generalized",
          "name": "inputFile",
          "normalized": "(FormId-\u003ea)-\u003eForm b c d a()(FileType c)",
          "package": "reform",
          "partial": "File",
          "signature": "(FormId-\u003eview)-\u003eForm m input error view()(FileType input)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:inputFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused for elements like \u003ccode\u003e\u003cinput type=\"submit\"\u003e\u003c/code\u003e which are not always present in the form submission data.\n\u003c/p\u003e",
          "module": "Text.Reform.Generalized",
          "name": "inputMaybe",
          "package": "reform",
          "signature": "(input -\u003e Either error a) -\u003e (FormId -\u003e a -\u003e view) -\u003e a -\u003e Form m input error view () (Maybe a)",
          "source": "src/Text-Reform-Generalized.html#inputMaybe",
          "type": "function"
        },
        "index": {
          "description": "used for elements like input type submit which are not always present in the form submission data",
          "hierarchy": "Text Reform Generalized",
          "module": "Text.Reform.Generalized",
          "name": "inputMaybe",
          "normalized": "(a-\u003eEither b c)-\u003e(FormId-\u003ec-\u003ed)-\u003ec-\u003eForm e a b d()(Maybe c)",
          "package": "reform",
          "partial": "Maybe",
          "signature": "(input-\u003eEither error a)-\u003e(FormId-\u003ea-\u003eview)-\u003ea-\u003eForm m input error view()(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:inputMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused for groups of checkboxes, \u003ccode\u003e\u003cselect multiple=\"multiple\"\u003e\u003c/code\u003e boxes\n\u003c/p\u003e",
          "module": "Text.Reform.Generalized",
          "name": "inputMulti",
          "package": "reform",
          "signature": "[(a, lbl)]-\u003e (FormId -\u003e [(FormId, Int, lbl, Bool)] -\u003e view)-\u003e (a -\u003e Bool)-\u003e Form m input error view () [a]",
          "type": "function"
        },
        "index": {
          "description": "used for groups of checkboxes select multiple multiple boxes",
          "hierarchy": "Text Reform Generalized",
          "module": "Text.Reform.Generalized",
          "name": "inputMulti",
          "normalized": "[(a,b)]-\u003e(FormId-\u003e[(FormId,Int,b,Bool)]-\u003ec)-\u003e(a-\u003eBool)-\u003eForm d e f c()[a]",
          "package": "reform",
          "partial": "Multi",
          "signature": "[(a,lbl)]-\u003e(FormId-\u003e[(FormId,Int,lbl,Bool)]-\u003eview)-\u003e(a-\u003eBool)-\u003eForm m input error view()[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:inputMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused for elements like \u003ccode\u003e\u003cinput type=\"reset\"\u003e\u003c/code\u003e which take a value, but are never present in the form data set.\n\u003c/p\u003e",
          "module": "Text.Reform.Generalized",
          "name": "inputNoData",
          "package": "reform",
          "signature": "(FormId -\u003e a -\u003e view) -\u003e a -\u003e Form m input error view () ()",
          "source": "src/Text-Reform-Generalized.html#inputNoData",
          "type": "function"
        },
        "index": {
          "description": "used for elements like input type reset which take value but are never present in the form data set",
          "hierarchy": "Text Reform Generalized",
          "module": "Text.Reform.Generalized",
          "name": "inputNoData",
          "normalized": "(FormId-\u003ea-\u003eb)-\u003ea-\u003eForm c d e b()()",
          "package": "reform",
          "partial": "No Data",
          "signature": "(FormId-\u003ea-\u003eview)-\u003ea-\u003eForm m input error view()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:inputNoData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused to create \u003ccode\u003e\u003clabel\u003e\u003c/code\u003e elements\n\u003c/p\u003e",
          "module": "Text.Reform.Generalized",
          "name": "label",
          "package": "reform",
          "signature": "(FormId -\u003e view) -\u003e Form m input error view () ()",
          "source": "src/Text-Reform-Generalized.html#label",
          "type": "function"
        },
        "index": {
          "description": "used to create label elements",
          "hierarchy": "Text Reform Generalized",
          "module": "Text.Reform.Generalized",
          "name": "label",
          "normalized": "(FormId-\u003ea)-\u003eForm b c d a()()",
          "package": "reform",
          "signature": "(FormId-\u003eview)-\u003eForm m input error view()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e type, some proofs, and some helper functions.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e does three things:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e verifies that the input value meets some criteria\n - optionally transforms the input value to another value while preserving that criteria\n - puts the proof name in type-signature where the type-checker can use it\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Text.Reform.Proof",
          "name": "Proof",
          "package": "reform",
          "source": "src/Text-Reform-Proof.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the Proof type some proofs and some helper functions Proof does three things verifies that the input value meets some criteria optionally transforms the input value to another value while preserving that criteria puts the proof name in type-signature where the type-checker can use it",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "Proof",
          "package": "reform",
          "partial": "Proof",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproof that a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a decimal number\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "Decimal",
          "package": "reform",
          "source": "src/Text-Reform-Proof.html#Decimal",
          "type": "data"
        },
        "index": {
          "description": "proof that String is decimal number",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "Decimal",
          "package": "reform",
          "partial": "Decimal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#t:Decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproof that a list is not empty\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "NotNull",
          "package": "reform",
          "source": "src/Text-Reform-Proof.html#NotNull",
          "type": "data"
        },
        "index": {
          "description": "proof that list is not empty",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "NotNull",
          "package": "reform",
          "partial": "Not Null",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#t:NotNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e attempts to prove something about a value.\n\u003c/p\u003e\u003cp\u003eIf successful, it can also transform the value to a new value. The\n proof should hold for the new value as well.\n\u003c/p\u003e\u003cp\u003eGenerally, each \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e has a unique data-type associated with it\n which names the proof, such as:\n\u003c/p\u003e\u003cpre\u003e data NotNull = NotNull\n\u003c/pre\u003e",
          "module": "Text.Reform.Proof",
          "name": "Proof",
          "package": "reform",
          "source": "src/Text-Reform-Proof.html#Proof",
          "type": "data"
        },
        "index": {
          "description": "Proof attempts to prove something about value If successful it can also transform the value to new value The proof should hold for the new value as well Generally each Proof has unique data-type associated with it which names the proof such as data NotNull NotNull",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "Proof",
          "package": "reform",
          "partial": "Proof",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#t:Proof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproof that a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a Real/Fractional number\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "RealFractional",
          "package": "reform",
          "source": "src/Text-Reform-Proof.html#RealFractional",
          "type": "data"
        },
        "index": {
          "description": "proof that String is Real Fractional number",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "RealFractional",
          "package": "reform",
          "partial": "Real Fractional",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#t:RealFractional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproof that a number is also (allowed to be) signed\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "Signed",
          "package": "reform",
          "source": "src/Text-Reform-Proof.html#Signed",
          "type": "data"
        },
        "index": {
          "description": "proof that number is also allowed to be signed",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "Signed",
          "package": "reform",
          "partial": "Signed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#t:Signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Proof",
          "name": "Decimal",
          "package": "reform",
          "signature": "Decimal",
          "source": "src/Text-Reform-Proof.html#Decimal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "Decimal",
          "package": "reform",
          "partial": "Decimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:Decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Proof",
          "name": "NotNull",
          "package": "reform",
          "signature": "NotNull",
          "source": "src/Text-Reform-Proof.html#NotNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "NotNull",
          "package": "reform",
          "partial": "Not Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:NotNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Proof",
          "name": "Proof",
          "package": "reform",
          "signature": "Proof",
          "source": "src/Text-Reform-Proof.html#Proof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "Proof",
          "package": "reform",
          "partial": "Proof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:Proof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Proof",
          "name": "RealFractional",
          "package": "reform",
          "signature": "RealFractional",
          "source": "src/Text-Reform-Proof.html#RealFractional",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "RealFractional",
          "package": "reform",
          "partial": "Real Fractional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:RealFractional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Proof",
          "name": "Signed",
          "package": "reform",
          "signature": "Signed a",
          "source": "src/Text-Reform-Proof.html#Signed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "Signed",
          "package": "reform",
          "partial": "Signed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:Signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread an unsigned number in decimal notation\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "decimal",
          "package": "reform",
          "signature": "(String -\u003e error)-\u003e Proof m error Decimal String i",
          "type": "function"
        },
        "index": {
          "description": "read an unsigned number in decimal notation",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "decimal",
          "normalized": "(String-\u003ea)-\u003eProof b a Decimal String c",
          "package": "reform",
          "signature": "(String-\u003eerror)-\u003eProof m error Decimal String i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprove that a list is not empty\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "notNullProof",
          "package": "reform",
          "signature": "error -\u003e Proof m error NotNull [a] [a]",
          "source": "src/Text-Reform-Proof.html#notNullProof",
          "type": "function"
        },
        "index": {
          "description": "prove that list is not empty",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "notNullProof",
          "normalized": "a-\u003eProof b a NotNull[c][c]",
          "package": "reform",
          "partial": "Null Proof",
          "signature": "error-\u003eProof m error NotNull[a][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:notNullProof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction which provides the proof\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "proofFunction",
          "package": "reform",
          "signature": "a -\u003e m (Either error b)",
          "source": "src/Text-Reform-Proof.html#Proof",
          "type": "function"
        },
        "index": {
          "description": "function which provides the proof",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "proofFunction",
          "normalized": "a-\u003eb(Either c d)",
          "package": "reform",
          "partial": "Function",
          "signature": "a-\u003em(Either error b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:proofFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename of the thing to prove\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "proofName",
          "package": "reform",
          "signature": "proof",
          "source": "src/Text-Reform-Proof.html#Proof",
          "type": "function"
        },
        "index": {
          "description": "name of the thing to prove",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "proofName",
          "package": "reform",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:proofName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply a \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "prove",
          "package": "reform",
          "signature": "Form m input error view q a -\u003e Proof m error proof a b -\u003e Form m input error view proof b",
          "source": "src/Text-Reform-Proof.html#prove",
          "type": "function"
        },
        "index": {
          "description": "apply Proof to Form",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "prove",
          "normalized": "Form a b c d e f-\u003eProof a c g f h-\u003eForm a b c d g h",
          "package": "reform",
          "signature": "Form m input error view q a-\u003eProof m error proof a b-\u003eForm m input error view proof b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:prove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread \u003ccode\u003e\u003ca\u003eRealFrac\u003c/a\u003e\u003c/code\u003e number\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "realFrac",
          "package": "reform",
          "signature": "(String -\u003e error) -\u003e Proof m error RealFractional String a",
          "source": "src/Text-Reform-Proof.html#realFrac",
          "type": "function"
        },
        "index": {
          "description": "read RealFrac number",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "realFrac",
          "normalized": "(String-\u003ea)-\u003eProof b a RealFractional String c",
          "package": "reform",
          "partial": "Frac",
          "signature": "(String-\u003eerror)-\u003eProof m error RealFractional String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:realFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a signed \u003ccode\u003e\u003ca\u003eRealFrac\u003c/a\u003e\u003c/code\u003e number\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "realFracSigned",
          "package": "reform",
          "signature": "(String -\u003e error) -\u003e Proof m error (Signed RealFractional) String a",
          "source": "src/Text-Reform-Proof.html#realFracSigned",
          "type": "function"
        },
        "index": {
          "description": "read signed RealFrac number",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "realFracSigned",
          "normalized": "(String-\u003ea)-\u003eProof b a(Signed RealFractional)String c",
          "package": "reform",
          "partial": "Frac Signed",
          "signature": "(String-\u003eerror)-\u003eProof m error(Signed RealFractional)String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:realFracSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread signed decimal number\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "signedDecimal",
          "package": "reform",
          "signature": "(String -\u003e error) -\u003e Proof m error (Signed Decimal) String i",
          "source": "src/Text-Reform-Proof.html#signedDecimal",
          "type": "function"
        },
        "index": {
          "description": "read signed decimal number",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "signedDecimal",
          "normalized": "(String-\u003ea)-\u003eProof b a(Signed Decimal)String c",
          "package": "reform",
          "partial": "Decimal",
          "signature": "(String-\u003eerror)-\u003eProof m error(Signed Decimal)String i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:signedDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e using a \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e, and the replace the proof with \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is useful when you want just want classic digestive-functors behaviour.\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "transform",
          "package": "reform",
          "signature": "Form m input error view anyProof a -\u003e Proof m error proof a b -\u003e Form m input error view () b",
          "source": "src/Text-Reform-Proof.html#transform",
          "type": "function"
        },
        "index": {
          "description": "transform Form using Proof and the replace the proof with This is useful when you want just want classic digestive-functors behaviour",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "transform",
          "normalized": "Form a b c d e f-\u003eProof a c g f h-\u003eForm a b c d()h",
          "package": "reform",
          "signature": "Form m input error view anyProof a-\u003eProof m error proof a b-\u003eForm m input error view()b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e result using an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "transformEither",
          "package": "reform",
          "signature": "Form m input error view anyProof a -\u003e (a -\u003e Either error b) -\u003e Form m input error view () b",
          "source": "src/Text-Reform-Proof.html#transformEither",
          "type": "function"
        },
        "index": {
          "description": "transform the Form result using an Either function",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "transformEither",
          "normalized": "Form a b c d e f-\u003e(f-\u003eEither c g)-\u003eForm a b c d()g",
          "package": "reform",
          "partial": "Either",
          "signature": "Form m input error view anyProof a-\u003e(a-\u003eEither error b)-\u003eForm m input error view()b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:transformEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e result using a monadic \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.Reform.Proof",
          "name": "transformEitherM",
          "package": "reform",
          "signature": "Form m input error view anyProof a -\u003e (a -\u003e m (Either error b)) -\u003e Form m input error view () b",
          "source": "src/Text-Reform-Proof.html#transformEitherM",
          "type": "function"
        },
        "index": {
          "description": "transform the Form result using monadic Either function",
          "hierarchy": "Text Reform Proof",
          "module": "Text.Reform.Proof",
          "name": "transformEitherM",
          "normalized": "Form a b c d e f-\u003e(f-\u003ea(Either c g))-\u003eForm a b c d()g",
          "package": "reform",
          "partial": "Either",
          "signature": "Form m input error view anyProof a-\u003e(a-\u003em(Either error b))-\u003eForm m input error view()b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:transformEitherM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for the core result type, and related functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Reform.Result",
          "name": "Result",
          "package": "reform",
          "source": "src/Text-Reform-Result.html",
          "type": "module"
        },
        "index": {
          "description": "Module for the core result type and related functions",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "Result",
          "package": "reform",
          "partial": "Result",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ID used to identify forms\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "FormId",
          "package": "reform",
          "source": "src/Text-Reform-Result.html#FormId",
          "type": "data"
        },
        "index": {
          "description": "An ID used to identify forms",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "FormId",
          "package": "reform",
          "partial": "Form Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#t:FormId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA range of ID's to specify a group of forms\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "FormRange",
          "package": "reform",
          "source": "src/Text-Reform-Result.html#FormRange",
          "type": "data"
        },
        "index": {
          "description": "range of ID to specify group of forms",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "FormRange",
          "package": "reform",
          "partial": "Form Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#t:FormRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for failing computations\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "Result",
          "package": "reform",
          "source": "src/Text-Reform-Result.html#Result",
          "type": "data"
        },
        "index": {
          "description": "Type for failing computations",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "Result",
          "package": "reform",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Result",
          "name": "Error",
          "package": "reform",
          "signature": "Error [(FormRange, e)]",
          "source": "src/Text-Reform-Result.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "Error",
          "normalized": "Error[(FormRange,a)]",
          "package": "reform",
          "partial": "Error",
          "signature": "Error[(FormRange,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Result",
          "name": "FormRange",
          "package": "reform",
          "signature": "FormRange FormId FormId",
          "source": "src/Text-Reform-Result.html#FormRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "FormRange",
          "package": "reform",
          "partial": "Form Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:FormRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform.Result",
          "name": "Ok",
          "package": "reform",
          "signature": "Ok ok",
          "source": "src/Text-Reform-Result.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "Ok",
          "package": "reform",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStack indicating field. Head is most specific to this item\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "formIdList",
          "package": "reform",
          "signature": "FormId -\u003e [Integer]",
          "source": "src/Text-Reform-Result.html#formIdList",
          "type": "function"
        },
        "index": {
          "description": "Stack indicating field Head is most specific to this item",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "formIdList",
          "normalized": "FormId-\u003e[Integer]",
          "package": "reform",
          "partial": "Id List",
          "signature": "FormId-\u003e[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:formIdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e discarding the error message on \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "getResult",
          "package": "reform",
          "signature": "Result e ok -\u003e Maybe ok",
          "source": "src/Text-Reform-Result.html#getResult",
          "type": "function"
        },
        "index": {
          "description": "convert Result to Maybe discarding the error message on Error",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "getResult",
          "normalized": "Result a b-\u003eMaybe b",
          "package": "reform",
          "partial": "Result",
          "signature": "Result e ok-\u003eMaybe ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:getResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement a form ID\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "incrementFormId",
          "package": "reform",
          "signature": "FormId -\u003e FormId",
          "source": "src/Text-Reform-Result.html#incrementFormId",
          "type": "function"
        },
        "index": {
          "description": "Increment form ID",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "incrementFormId",
          "normalized": "FormId-\u003eFormId",
          "package": "reform",
          "partial": "Form Id",
          "signature": "FormId-\u003eFormId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:incrementFormId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e is contained in a \u003ccode\u003e\u003ca\u003eFormRange\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "isInRange",
          "package": "reform",
          "signature": "FormId-\u003e FormRange-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if FormId is contained in FormRange",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "isInRange",
          "normalized": "FormId-\u003eFormRange-\u003eBool",
          "package": "reform",
          "partial": "In Range",
          "signature": "FormId-\u003eFormRange-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:isInRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a \u003ccode\u003e\u003ca\u003eFormRange\u003c/a\u003e\u003c/code\u003e is contained in another \u003ccode\u003e\u003ca\u003eFormRange\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "isSubRange",
          "package": "reform",
          "signature": "FormRange-\u003e FormRange-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if FormRange is contained in another FormRange",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "isSubRange",
          "normalized": "FormRange-\u003eFormRange-\u003eBool",
          "package": "reform",
          "partial": "Sub Range",
          "signature": "FormRange-\u003eFormRange-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:isSubRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emap a function over the \u003ccode\u003e[Integer]\u003c/code\u003e inside a \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "mapId",
          "package": "reform",
          "signature": "([Integer] -\u003e [Integer]) -\u003e FormId -\u003e FormId",
          "source": "src/Text-Reform-Result.html#mapId",
          "type": "function"
        },
        "index": {
          "description": "map function over the Integer inside FormId",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "mapId",
          "normalized": "([Integer]-\u003e[Integer])-\u003eFormId-\u003eFormId",
          "package": "reform",
          "partial": "Id",
          "signature": "([Integer]-\u003e[Integer])-\u003eFormId-\u003eFormId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:mapId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect the errors originating from this form or from any of the children of\n this form\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "retainChildErrors",
          "package": "reform",
          "signature": "FormRange -\u003e [(FormRange, e)] -\u003e [e]",
          "source": "src/Text-Reform-Result.html#retainChildErrors",
          "type": "function"
        },
        "index": {
          "description": "Select the errors originating from this form or from any of the children of this form",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "retainChildErrors",
          "normalized": "FormRange-\u003e[(FormRange,a)]-\u003e[a]",
          "package": "reform",
          "partial": "Child Errors",
          "signature": "FormRange-\u003e[(FormRange,e)]-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:retainChildErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect the errors for a certain range\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "retainErrors",
          "package": "reform",
          "signature": "FormRange -\u003e [(FormRange, e)] -\u003e [e]",
          "source": "src/Text-Reform-Result.html#retainErrors",
          "type": "function"
        },
        "index": {
          "description": "Select the errors for certain range",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "retainErrors",
          "normalized": "FormRange-\u003e[(FormRange,a)]-\u003e[a]",
          "package": "reform",
          "partial": "Errors",
          "signature": "FormRange-\u003e[(FormRange,e)]-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:retainErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a \u003ccode\u003e\u003ca\u003eFormRange\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "unitRange",
          "package": "reform",
          "signature": "FormId -\u003e FormRange",
          "source": "src/Text-Reform-Result.html#unitRange",
          "type": "function"
        },
        "index": {
          "description": "create FormRange from FormId",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "unitRange",
          "normalized": "FormId-\u003eFormRange",
          "package": "reform",
          "partial": "Range",
          "signature": "FormId-\u003eFormRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:unitRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe zero ID, i.e. the first ID that is usable\n\u003c/p\u003e",
          "module": "Text.Reform.Result",
          "name": "zeroId",
          "package": "reform",
          "signature": "String -\u003e FormId",
          "source": "src/Text-Reform-Result.html#zeroId",
          "type": "function"
        },
        "index": {
          "description": "The zero ID i.e the first ID that is usable",
          "hierarchy": "Text Reform Result",
          "module": "Text.Reform.Result",
          "name": "zeroId",
          "normalized": "String-\u003eFormId",
          "package": "reform",
          "partial": "Id",
          "signature": "String-\u003eFormId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:zeroId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Reform",
          "name": "Reform",
          "package": "reform",
          "source": "src/Text-Reform.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Reform",
          "module": "Text.Reform",
          "name": "Reform",
          "package": "reform",
          "partial": "Reform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform.html#"
      }
    }
  ]
]