[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a type-indexed / parameterized version of the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e classes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "module",
        "fct-source": "src/Control-Applicative-Indexed.html",
        "fct-type": "module",
        "title": "Indexed"
      },
      "index": {
        "description": "This module provides type-indexed parameterized version of the Functor and Applicative classes",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "Indexed",
        "normalized": "",
        "package": "reform",
        "partial": "Indexed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#t:IndexedApplicative",
      "description": {
        "fct-descr": "\u003cp\u003ea class for a 'type-indexed' or \u003ccode\u003eparamaterized\u003c/code\u003e applicative functors\n\u003c/p\u003e\u003cp\u003enote: not sure what the most correct name is for this class, or if\n it exists in a well supported library already.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "class",
        "fct-source": "src/Control-Applicative-Indexed.html#IndexedApplicative",
        "fct-type": "class",
        "title": "IndexedApplicative"
      },
      "index": {
        "description": "class for type-indexed or paramaterized applicative functors note not sure what the most correct name is for this class or if it exists in well supported library already",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "IndexedApplicative",
        "normalized": "",
        "package": "reform",
        "partial": "Indexed Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#t:IndexedFunctor",
      "description": {
        "fct-descr": "\u003cp\u003ea class for a 'type-indexed' or \u003ccode\u003eparamaterized\u003c/code\u003e functor\n\u003c/p\u003e\u003cp\u003enote: not sure what the most correct name is for this class, or if\n it exists in a well supported library already.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "class",
        "fct-source": "src/Control-Applicative-Indexed.html#IndexedFunctor",
        "fct-type": "class",
        "title": "IndexedFunctor"
      },
      "index": {
        "description": "class for type-indexed or paramaterized functor note not sure what the most correct name is for this class or if it exists in well supported library already",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "IndexedFunctor",
        "normalized": "",
        "package": "reform",
        "partial": "Indexed Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#t:WrappedApplicative",
      "description": {
        "fct-descr": "\u003cp\u003ea wrapper which lifts a value with an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance so that it can be used as an \u003ccode\u003e\u003ca\u003eIndexedFunctor\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eIndexedApplicative\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e d :: WrappedApplicative Maybe y Char\n d = WrappedApplicative (Just succ) \u003c\u003c*\u003e\u003e WrappedApplicative (Just 'c')\n\u003c/pre\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Applicative-Indexed.html#WrappedApplicative",
        "fct-type": "newtype",
        "title": "WrappedApplicative"
      },
      "index": {
        "description": "wrapper which lifts value with an Applicative instance so that it can be used as an IndexedFunctor or IndexedApplicative WrappedApplicative Maybe Char WrappedApplicative Just succ WrappedApplicative Just",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "WrappedApplicative",
        "normalized": "",
        "package": "reform",
        "partial": "Wrapped Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:-42--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "f x a -\u003e f y b -\u003e f y b",
        "fct-source": "src/Control-Applicative-Indexed.html#%2A%3E%3E",
        "fct-type": "method",
        "title": "(*\u003e\u003e)"
      },
      "index": {
        "description": "similar to",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "(*\u003e\u003e) *\u003e\u003e",
        "normalized": "a b c-\u003ea d e-\u003ea d e",
        "package": "reform",
        "partial": "",
        "signature": "f x a-\u003ef y b-\u003ef y b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:-60--60--36--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e. An alias for \u003ccode\u003eimap id\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "(a -\u003e b) -\u003e f y a -\u003e f y b",
        "fct-source": "src/Control-Applicative-Indexed.html#%3C%3C%24%3E%3E",
        "fct-type": "function",
        "title": "(\u003c\u003c$\u003e\u003e)"
      },
      "index": {
        "description": "similar to An alias for imap id",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "(\u003c\u003c$\u003e\u003e) \u003c\u003c$\u003e\u003e",
        "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
        "package": "reform",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef y a-\u003ef y b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:-60--60--42-",
      "description": {
        "fct-descr": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "f x a -\u003e f y b -\u003e f x a",
        "fct-source": "src/Control-Applicative-Indexed.html#%3C%3C%2A",
        "fct-type": "method",
        "title": "(\u003c\u003c*)"
      },
      "index": {
        "description": "similar to",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "(\u003c\u003c*) \u003c\u003c*",
        "normalized": "a b c-\u003ea d e-\u003ea b c",
        "package": "reform",
        "partial": "",
        "signature": "f x a-\u003ef y b-\u003ef x a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:-60--60--42--42--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003e\u003c\u003c*\u003e\u003e\u003c/a\u003e\u003c/code\u003e with the arguments reversed.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "f x a -\u003e f (x -\u003e y) (a -\u003e b) -\u003e f y b",
        "fct-source": "src/Control-Applicative-Indexed.html#%3C%3C%2A%2A%3E%3E",
        "fct-type": "function",
        "title": "(\u003c\u003c**\u003e\u003e)"
      },
      "index": {
        "description": "variant of with the arguments reversed",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "(\u003c\u003c**\u003e\u003e) \u003c\u003c**\u003e\u003e",
        "normalized": "a b c-\u003ea(b-\u003ed)(c-\u003ee)-\u003ea d e",
        "package": "reform",
        "partial": "",
        "signature": "f x a-\u003ef(x-\u003ey)(a-\u003eb)-\u003ef y b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:-60--60--42--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "f (x -\u003e y) (a -\u003e b) -\u003e f x a -\u003e f y b",
        "fct-source": "src/Control-Applicative-Indexed.html#%3C%3C%2A%3E%3E",
        "fct-type": "method",
        "title": "(\u003c\u003c*\u003e\u003e)"
      },
      "index": {
        "description": "similar to",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "(\u003c\u003c*\u003e\u003e) \u003c\u003c*\u003e\u003e",
        "normalized": "a(b-\u003ec)(d-\u003ee)-\u003ea b d-\u003ea c e",
        "package": "reform",
        "partial": "",
        "signature": "f(x-\u003ey)(a-\u003eb)-\u003ef x a-\u003ef y b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:WrappedApplicative",
      "description": {
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "WrappedApplicative",
        "fct-source": "src/Control-Applicative-Indexed.html#WrappedApplicative",
        "fct-type": "function",
        "title": "WrappedApplicative"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "WrappedApplicative",
        "normalized": "",
        "package": "reform",
        "partial": "Wrapped Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:imap",
      "description": {
        "fct-descr": "\u003cp\u003eimap is similar to fmap\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "imap",
        "fct-source": "src/Control-Applicative-Indexed.html#imap",
        "fct-type": "method",
        "title": "imap"
      },
      "index": {
        "description": "imap is similar to fmap",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "imap",
        "normalized": "",
        "package": "reform",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:ipure",
      "description": {
        "fct-descr": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "x -\u003e a -\u003e f x a",
        "fct-source": "src/Control-Applicative-Indexed.html#ipure",
        "fct-type": "method",
        "title": "ipure"
      },
      "index": {
        "description": "similar to pure",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "ipure",
        "normalized": "a-\u003eb-\u003ec a b",
        "package": "reform",
        "partial": "",
        "signature": "x-\u003ea-\u003ef x a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:liftIA",
      "description": {
        "fct-descr": "\u003cp\u003eLift a function to actions.\n This function may be used as a value for \u003ccode\u003e\u003ca\u003eimap\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eIndexedFunctor\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "(a -\u003e b) -\u003e (x -\u003e y) -\u003e f a x -\u003e f b y",
        "fct-source": "src/Control-Applicative-Indexed.html#liftIA",
        "fct-type": "function",
        "title": "liftIA"
      },
      "index": {
        "description": "Lift function to actions This function may be used as value for imap in IndexedFunctor instance",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "liftIA",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003ee a c-\u003ee b d",
        "package": "reform",
        "partial": "IA",
        "signature": "(a-\u003eb)-\u003e(x-\u003ey)-\u003ef a x-\u003ef b y"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:liftIA2",
      "description": {
        "fct-descr": "\u003cp\u003eLift a binary function to actions.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e (x -\u003e y -\u003e z) -\u003e f a x -\u003e f b y -\u003e f c z",
        "fct-source": "src/Control-Applicative-Indexed.html#liftIA2",
        "fct-type": "function",
        "title": "liftIA2"
      },
      "index": {
        "description": "Lift binary function to actions",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "liftIA2",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ee-\u003ef)-\u003eg a d-\u003eg b e-\u003eg c f",
        "package": "reform",
        "partial": "IA",
        "signature": "(a-\u003eb-\u003ec)-\u003e(x-\u003ey-\u003ez)-\u003ef a x-\u003ef b y-\u003ef c z"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:liftIA3",
      "description": {
        "fct-descr": "\u003cp\u003eLift a binary function to actions.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (w -\u003e x -\u003e y -\u003e z) -\u003e f a w -\u003e f b x -\u003e f c y -\u003e f d z",
        "fct-source": "src/Control-Applicative-Indexed.html#liftIA3",
        "fct-type": "function",
        "title": "liftIA3"
      },
      "index": {
        "description": "Lift binary function to actions",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "liftIA3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(e-\u003ef-\u003eg-\u003eh)-\u003ei a e-\u003ei b f-\u003ei c g-\u003ei d h",
        "package": "reform",
        "partial": "IA",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(w-\u003ex-\u003ey-\u003ez)-\u003ef a w-\u003ef b x-\u003ef c y-\u003ef d z"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Control-Applicative-Indexed.html#v:unwrapApplicative",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Applicative.Indexed",
        "fct-package": "reform",
        "fct-signature": "f a",
        "fct-source": "src/Control-Applicative-Indexed.html#WrappedApplicative",
        "fct-type": "function",
        "title": "unwrapApplicative"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Indexed",
        "module": "Control.Applicative.Indexed",
        "name": "unwrapApplicative",
        "normalized": "",
        "package": "reform",
        "partial": "Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains two classes. \u003ccode\u003e\u003ca\u003eFormInput\u003c/a\u003e\u003c/code\u003e is a class which is parameterized over the \u003ccode\u003einput\u003c/code\u003e type used to represent form data in different web frameworks. There should be one instance for each framework, such as Happstack, Snap, WAI, etc.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFormError\u003c/a\u003e\u003c/code\u003e class is used to map error messages into an application specific error type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "module",
        "fct-source": "src/Text-Reform-Backend.html",
        "fct-type": "module",
        "title": "Backend"
      },
      "index": {
        "description": "This module contains two classes FormInput is class which is parameterized over the input type used to represent form data in different web frameworks There should be one instance for each framework such as Happstack Snap WAI etc The FormError class is used to map error messages into an application specific error type",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "Backend",
        "normalized": "",
        "package": "reform",
        "partial": "Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#t:CommonFormError",
      "description": {
        "fct-descr": "\u003cp\u003ean error type used to represent errors that are common to all backends\n\u003c/p\u003e\u003cp\u003eThese errors should only occur if there is a bug in the reform-*\n packages. Perhaps we should make them an \u003ccode\u003eException\u003c/code\u003e so that we can\n get rid of the \u003ccode\u003e\u003ca\u003eFormError\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "data",
        "fct-source": "src/Text-Reform-Backend.html#CommonFormError",
        "fct-type": "data",
        "title": "CommonFormError"
      },
      "index": {
        "description": "an error type used to represent errors that are common to all backends These errors should only occur if there is bug in the reform packages Perhaps we should make them an Exception so that we can get rid of the FormError class",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "CommonFormError",
        "normalized": "",
        "package": "reform",
        "partial": "Common Form Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#t:FormError",
      "description": {
        "fct-descr": "\u003cp\u003eA Class to lift a \u003ccode\u003e\u003ca\u003eCommonFormError\u003c/a\u003e\u003c/code\u003e into an application-specific error type\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "class",
        "fct-source": "src/Text-Reform-Backend.html#FormError",
        "fct-type": "class",
        "title": "FormError"
      },
      "index": {
        "description": "Class to lift CommonFormError into an application-specific error type",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "FormError",
        "normalized": "",
        "package": "reform",
        "partial": "Form Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#t:FormInput",
      "description": {
        "fct-descr": "\u003cp\u003eClass which all backends should implement.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "class",
        "fct-source": "src/Text-Reform-Backend.html#FormInput",
        "fct-type": "class",
        "title": "FormInput"
      },
      "index": {
        "description": "Class which all backends should implement",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "FormInput",
        "normalized": "",
        "package": "reform",
        "partial": "Form Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:InputMissing",
      "description": {
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "InputMissing FormId",
        "fct-source": "src/Text-Reform-Backend.html#CommonFormError",
        "fct-type": "function",
        "title": "InputMissing"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "InputMissing",
        "normalized": "",
        "package": "reform",
        "partial": "Input Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:MissingDefaultValue",
      "description": {
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "MissingDefaultValue",
        "fct-source": "src/Text-Reform-Backend.html#CommonFormError",
        "fct-type": "function",
        "title": "MissingDefaultValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "MissingDefaultValue",
        "normalized": "",
        "package": "reform",
        "partial": "Missing Default Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:MultiFilesFound",
      "description": {
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "MultiFilesFound input",
        "fct-source": "src/Text-Reform-Backend.html#CommonFormError",
        "fct-type": "function",
        "title": "MultiFilesFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "MultiFilesFound",
        "normalized": "",
        "package": "reform",
        "partial": "Multi Files Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:MultiStringsFound",
      "description": {
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "MultiStringsFound input",
        "fct-source": "src/Text-Reform-Backend.html#CommonFormError",
        "fct-type": "function",
        "title": "MultiStringsFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "MultiStringsFound",
        "normalized": "",
        "package": "reform",
        "partial": "Multi Strings Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:NoFileFound",
      "description": {
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "NoFileFound input",
        "fct-source": "src/Text-Reform-Backend.html#CommonFormError",
        "fct-type": "function",
        "title": "NoFileFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "NoFileFound",
        "normalized": "",
        "package": "reform",
        "partial": "No File Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:NoStringFound",
      "description": {
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "NoStringFound input",
        "fct-source": "src/Text-Reform-Backend.html#CommonFormError",
        "fct-type": "function",
        "title": "NoStringFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "NoStringFound",
        "normalized": "",
        "package": "reform",
        "partial": "No String Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:commonFormError",
      "description": {
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "CommonFormError (ErrorInputType e) -\u003e e",
        "fct-source": "src/Text-Reform-Backend.html#commonFormError",
        "fct-type": "method",
        "title": "commonFormError"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "commonFormError",
        "normalized": "CommonFormError(ErrorInputType a)-\u003ea",
        "package": "reform",
        "partial": "Form Error",
        "signature": "CommonFormError(ErrorInputType e)-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:commonFormErrorStr",
      "description": {
        "fct-descr": "\u003cp\u003esome default error messages for \u003ccode\u003e\u003ca\u003eCommonFormError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "(input -\u003e String)-\u003e CommonFormError input-\u003e String",
        "fct-type": "function",
        "title": "commonFormErrorStr"
      },
      "index": {
        "description": "some default error messages for CommonFormError",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "commonFormErrorStr",
        "normalized": "(a-\u003eString)-\u003eCommonFormError a-\u003eString",
        "package": "reform",
        "partial": "Form Error Str",
        "signature": "(input-\u003eString)-\u003eCommonFormError input-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:getInputFile",
      "description": {
        "fct-descr": "\u003cp\u003eGet a file descriptor for an uploaded file\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "input -\u003e Either error (FileType input)",
        "fct-source": "src/Text-Reform-Backend.html#getInputFile",
        "fct-type": "method",
        "title": "getInputFile"
      },
      "index": {
        "description": "Get file descriptor for an uploaded file",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "getInputFile",
        "normalized": "a-\u003eEither b(FileType a)",
        "package": "reform",
        "partial": "Input File",
        "signature": "input-\u003eEither error(FileType input)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:getInputString",
      "description": {
        "fct-descr": "\u003cp\u003eParse the input into a string. This is used for simple text fields\n among other things\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "input -\u003e Either error String",
        "fct-source": "src/Text-Reform-Backend.html#getInputString",
        "fct-type": "method",
        "title": "getInputString"
      },
      "index": {
        "description": "Parse the input into string This is used for simple text fields among other things",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "getInputString",
        "normalized": "a-\u003eEither b String",
        "package": "reform",
        "partial": "Input String",
        "signature": "input-\u003eEither error String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:getInputStrings",
      "description": {
        "fct-descr": "\u003cp\u003eShould be implemented\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "input -\u003e [String]",
        "fct-source": "src/Text-Reform-Backend.html#getInputStrings",
        "fct-type": "method",
        "title": "getInputStrings"
      },
      "index": {
        "description": "Should be implemented",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "getInputStrings",
        "normalized": "a-\u003e[String]",
        "package": "reform",
        "partial": "Input Strings",
        "signature": "input-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:getInputText",
      "description": {
        "fct-descr": "\u003cp\u003eParse the input value into \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "input -\u003e Either error Text",
        "fct-source": "src/Text-Reform-Backend.html#getInputText",
        "fct-type": "method",
        "title": "getInputText"
      },
      "index": {
        "description": "Parse the input value into Text",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "getInputText",
        "normalized": "a-\u003eEither b Text",
        "package": "reform",
        "partial": "Input Text",
        "signature": "input-\u003eEither error Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Backend.html#v:getInputTexts",
      "description": {
        "fct-descr": "\u003cp\u003eCan be overriden for efficiency concerns\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Backend",
        "fct-package": "reform",
        "fct-signature": "input -\u003e [Text]",
        "fct-source": "src/Text-Reform-Backend.html#getInputTexts",
        "fct-type": "method",
        "title": "getInputTexts"
      },
      "index": {
        "description": "Can be overriden for efficiency concerns",
        "hierarchy": "Text Reform Backend",
        "module": "Text.Reform.Backend",
        "name": "getInputTexts",
        "normalized": "a-\u003e[Text]",
        "package": "reform",
        "partial": "Input Texts",
        "signature": "input-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e type, its instances, core manipulation functions, and a bunch of helper utilities.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "module",
        "fct-source": "src/Text-Reform-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "This module defines the Form type its instances core manipulation functions and bunch of helper utilities",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "Core",
        "normalized": "",
        "package": "reform",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#t:Environment",
      "description": {
        "fct-descr": "\u003cp\u003eThe environment is where you get the actual input per form.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNoEnvironment\u003c/a\u003e\u003c/code\u003e constructor is typically used when generating a\n view for a GET request, where no data has yet been submitted. This\n will cause the input elements to use their supplied default values.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003eNoEnviroment\u003c/code\u003e is different than supplying an empty environment.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "data",
        "fct-source": "src/Text-Reform-Core.html#Environment",
        "fct-type": "data",
        "title": "Environment"
      },
      "index": {
        "description": "The environment is where you get the actual input per form The NoEnvironment constructor is typically used when generating view for GET request where no data has yet been submitted This will cause the input elements to use their supplied default values Note that NoEnviroment is different than supplying an empty environment",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "Environment",
        "normalized": "",
        "package": "reform",
        "partial": "Environment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#t:Form",
      "description": {
        "fct-descr": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e contains a \u003ccode\u003e\u003ca\u003eView\u003c/a\u003e\u003c/code\u003e combined with a validation function\n which will attempt to extract a value from submitted form data.\n\u003c/p\u003e\u003cp\u003eIt is highly parameterized, allowing it work in a wide variety of\n different configurations. You will likely want to make a type alias\n that is specific to your application to make type signatures more\n manageable.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003em\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A monad which can be used by the validator\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003einput\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A framework specific type for representing the raw key/value pairs from the form data\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eerror\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A application specific type for error messages\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eview\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The type of data being generated for the view (HSP, Blaze Html, Heist, etc)\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eproof\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A type which names what has been proved about the return value. \u003ccode\u003e()\u003c/code\u003e means nothing has been proved.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ea\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Value return by form when it is successfully decoded, validated, etc.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThis type is very similar to the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e type from\n \u003ccode\u003edigestive-functors \u003c= 0.2\u003c/code\u003e. If \u003ccode\u003eproof\u003c/code\u003e is \u003ccode\u003e()\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e is an\n applicative functor and can be used almost exactly like\n \u003ccode\u003edigestive-functors \u003c= 0.2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "newtype",
        "fct-source": "src/Text-Reform-Core.html#Form",
        "fct-type": "newtype",
        "title": "Form"
      },
      "index": {
        "description": "Form contains View combined with validation function which will attempt to extract value from submitted form data It is highly parameterized allowing it work in wide variety of different configurations You will likely want to make type alias that is specific to your application to make type signatures more manageable monad which can be used by the validator input framework specific type for representing the raw key value pairs from the form data error application specific type for error messages view The type of data being generated for the view HSP Blaze Html Heist etc proof type which names what has been proved about the return value means nothing has been proved Value return by form when it is successfully decoded validated etc This type is very similar to the Form type from digestive-functors If proof is then Form is an applicative functor and can be used almost exactly like digestive-functors",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "Form",
        "normalized": "",
        "package": "reform",
        "partial": "Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#t:FormState",
      "description": {
        "fct-descr": "\u003cp\u003einner state used by \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "type",
        "fct-source": "src/Text-Reform-Core.html#FormState",
        "fct-type": "type",
        "title": "FormState"
      },
      "index": {
        "description": "inner state used by Form",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "FormState",
        "normalized": "",
        "package": "reform",
        "partial": "Form State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#t:Proved",
      "description": {
        "fct-descr": "\u003cp\u003eProved records a value, the location that value came from, and something that was proved about the value.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "data",
        "fct-source": "src/Text-Reform-Core.html#Proved",
        "fct-type": "data",
        "title": "Proved"
      },
      "index": {
        "description": "Proved records value the location that value came from and something that was proved about the value",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "Proved",
        "normalized": "",
        "package": "reform",
        "partial": "Proved",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eused to represent whether a value was found in the form\n submission data, missing from the form submission data, or expected\n that the default value should be used\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "data",
        "fct-source": "src/Text-Reform-Core.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "used to represent whether value was found in the form submission data missing from the form submission data or expected that the default value should be used",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "Value",
        "normalized": "",
        "package": "reform",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#t:View",
      "description": {
        "fct-descr": "\u003cp\u003eA view represents a visual representation of a form. It is composed of a\n function which takes a list of all errors and then produces a new view\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "newtype",
        "fct-source": "src/Text-Reform-Core.html#View",
        "fct-type": "newtype",
        "title": "View"
      },
      "index": {
        "description": "view represents visual representation of form It is composed of function which takes list of all errors and then produces new view",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "View",
        "normalized": "",
        "package": "reform",
        "partial": "View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:-43--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a unit form to the left. This is useful for adding labels or error\n fields.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eForms\u003c/code\u003e on the left and right hand side will share the same\n \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e. This is useful for elements like \u003ccode\u003e\u003clabel\n for=\"someid\"\u003e\u003c/code\u003e, which need to refer to the id of another\n element.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "Form m input error view () () -\u003e Form m input error view proof a -\u003e Form m input error view proof a",
        "fct-source": "src/Text-Reform-Core.html#%2B%2B%3E",
        "fct-type": "function",
        "title": "(++\u003e)"
      },
      "index": {
        "description": "Append unit form to the left This is useful for adding labels or error fields The Forms on the left and right hand side will share the same FormId This is useful for elements like label for someid which need to refer to the id of another element",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "(++\u003e) ++\u003e",
        "normalized": "Form a b c d()()-\u003eForm a b c d e f-\u003eForm a b c d e f",
        "package": "reform",
        "partial": "",
        "signature": "Form m input error view()()-\u003eForm m input error view proof a-\u003eForm m input error view proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:-60--43--43-",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a unit form to the right. See \u003ccode\u003e\u003ca\u003e++\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "Form m input error view proof a -\u003e Form m input error view () () -\u003e Form m input error view proof a",
        "fct-source": "src/Text-Reform-Core.html#%3C%2B%2B",
        "fct-type": "function",
        "title": "(\u003c++)"
      },
      "index": {
        "description": "Append unit form to the right See",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "(\u003c++) \u003c++",
        "normalized": "Form a b c d e f-\u003eForm a b c d()()-\u003eForm a b c d e f",
        "package": "reform",
        "partial": "",
        "signature": "Form m input error view proof a-\u003eForm m input error view()()-\u003eForm m input error view proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:Default",
      "description": {
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "Default",
        "fct-source": "src/Text-Reform-Core.html#Value",
        "fct-type": "function",
        "title": "Default"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "Default",
        "normalized": "",
        "package": "reform",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:Environment",
      "description": {
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "Environment (FormId -\u003e m (Value input))",
        "fct-source": "src/Text-Reform-Core.html#Environment",
        "fct-type": "function",
        "title": "Environment"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "Environment",
        "normalized": "Environment(FormId-\u003ea(Value b))",
        "package": "reform",
        "partial": "Environment",
        "signature": "Environment(FormId-\u003em(Value input))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:Form",
      "description": {
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "Form",
        "fct-source": "src/Text-Reform-Core.html#Form",
        "fct-type": "function",
        "title": "Form"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "Form",
        "normalized": "",
        "package": "reform",
        "partial": "Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:Found",
      "description": {
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "Found a",
        "fct-source": "src/Text-Reform-Core.html#Value",
        "fct-type": "function",
        "title": "Found"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "Found",
        "normalized": "",
        "package": "reform",
        "partial": "Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:Missing",
      "description": {
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "Missing",
        "fct-source": "src/Text-Reform-Core.html#Value",
        "fct-type": "function",
        "title": "Missing"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "Missing",
        "normalized": "",
        "package": "reform",
        "partial": "Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:NoEnvironment",
      "description": {
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "NoEnvironment",
        "fct-source": "src/Text-Reform-Core.html#Environment",
        "fct-type": "function",
        "title": "NoEnvironment"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "NoEnvironment",
        "normalized": "",
        "package": "reform",
        "partial": "No Environment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:Proved",
      "description": {
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "Proved",
        "fct-source": "src/Text-Reform-Core.html#Proved",
        "fct-type": "function",
        "title": "Proved"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "Proved",
        "normalized": "",
        "package": "reform",
        "partial": "Proved",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:View",
      "description": {
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "View",
        "fct-source": "src/Text-Reform-Core.html#View",
        "fct-type": "function",
        "title": "View"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "View",
        "normalized": "",
        "package": "reform",
        "partial": "View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:bracketState",
      "description": {
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "FormState m input a -\u003e FormState m input a",
        "fct-source": "src/Text-Reform-Core.html#bracketState",
        "fct-type": "function",
        "title": "bracketState"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "bracketState",
        "normalized": "FormState a b c-\u003eFormState a b c",
        "package": "reform",
        "partial": "State",
        "signature": "FormState m input a-\u003eFormState m input a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:eitherForm",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a form\n\u003c/p\u003e\u003cp\u003eReturns:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eLeft view\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e on failure. The \u003ccode\u003eview\u003c/code\u003e will have already been applied to the errors.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eRight a\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e on success.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "Environment m input-\u003e Text-\u003e Form m input error view proof a-\u003e m (Either view a)",
        "fct-type": "function",
        "title": "eitherForm"
      },
      "index": {
        "description": "Evaluate form Returns Left view on failure The view will have already been applied to the errors Right on success",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "eitherForm",
        "normalized": "Environment a b-\u003eText-\u003eForm a b c d e f-\u003ea(Either d f)",
        "package": "reform",
        "partial": "Form",
        "signature": "Environment m input-\u003eText-\u003eForm m input error view proof a-\u003em(Either view a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:getFormId",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function: returns the current \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e. This will only make sense\n if the form is not composed\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "FormState m i FormId",
        "fct-source": "src/Text-Reform-Core.html#getFormId",
        "fct-type": "function",
        "title": "getFormId"
      },
      "index": {
        "description": "Utility function returns the current FormId This will only make sense if the form is not composed",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "getFormId",
        "normalized": "",
        "package": "reform",
        "partial": "Form Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:getFormInput",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function: Get the current input\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "FormState m input (Value input)",
        "fct-source": "src/Text-Reform-Core.html#getFormInput",
        "fct-type": "function",
        "title": "getFormInput"
      },
      "index": {
        "description": "Utility function Get the current input",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "getFormInput",
        "normalized": "",
        "package": "reform",
        "partial": "Form Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:getFormInput-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function: Gets the input of an arbitrary \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "FormId -\u003e FormState m input (Value input)",
        "fct-source": "src/Text-Reform-Core.html#getFormInput%27",
        "fct-type": "function",
        "title": "getFormInput'"
      },
      "index": {
        "description": "Utility function Gets the input of an arbitrary FormId",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "getFormInput'",
        "normalized": "FormId-\u003eFormState a b(Value b)",
        "package": "reform",
        "partial": "Form Input'",
        "signature": "FormId-\u003eFormState m input(Value input)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:getFormRange",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function: Get the current range\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "FormState m i FormRange",
        "fct-source": "src/Text-Reform-Core.html#getFormRange",
        "fct-type": "function",
        "title": "getFormRange"
      },
      "index": {
        "description": "Utility function Get the current range",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "getFormRange",
        "normalized": "",
        "package": "reform",
        "partial": "Form Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:incFormId",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function: increment the current \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "FormState m i ()",
        "fct-source": "src/Text-Reform-Core.html#incFormId",
        "fct-type": "function",
        "title": "incFormId"
      },
      "index": {
        "description": "Utility function increment the current FormId",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "incFormId",
        "normalized": "FormState a b()",
        "package": "reform",
        "partial": "Form Id",
        "signature": "FormState m i()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:mapView",
      "description": {
        "fct-descr": "\u003cp\u003eChange the view of a form using a simple function\n\u003c/p\u003e\u003cp\u003eThis is useful for wrapping a form inside of a \u003cfieldset\u003e or other markup element.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "(view -\u003e view')-\u003e Form m input error view proof a-\u003e Form m input error view' proof a",
        "fct-type": "function",
        "title": "mapView"
      },
      "index": {
        "description": "Change the view of form using simple function This is useful for wrapping form inside of fieldset or other markup element",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "mapView",
        "normalized": "(a-\u003eb)-\u003eForm c d e a f g-\u003eForm c d e b f g",
        "package": "reform",
        "partial": "View",
        "signature": "(view-\u003eview')-\u003eForm m input error view proof a-\u003eForm m input error view' proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:mkOk",
      "description": {
        "fct-descr": "\u003cp\u003eUtility Function: turn a view and return value into a successful \u003ccode\u003e\u003ca\u003eFormState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "FormId -\u003e view -\u003e a -\u003e FormState m input (View error view, m (Result error (Proved () a)))",
        "fct-source": "src/Text-Reform-Core.html#mkOk",
        "fct-type": "function",
        "title": "mkOk"
      },
      "index": {
        "description": "Utility Function turn view and return value into successful FormState",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "mkOk",
        "normalized": "FormId-\u003ea-\u003eb-\u003eFormState c d(View e a,c(Result e(Proved()b)))",
        "package": "reform",
        "partial": "Ok",
        "signature": "FormId-\u003eview-\u003ea-\u003eFormState m input(View error view,m(Result error(Proved()a)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:pos",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "FormRange",
        "fct-source": "src/Text-Reform-Core.html#Proved",
        "fct-type": "function",
        "title": "pos"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "pos",
        "normalized": "",
        "package": "reform",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:proofs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "proofs",
        "fct-source": "src/Text-Reform-Core.html#Proved",
        "fct-type": "function",
        "title": "proofs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "proofs",
        "normalized": "",
        "package": "reform",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:runForm",
      "description": {
        "fct-descr": "\u003cp\u003eRun a form\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "Environment m input -\u003e Text -\u003e Form m input error view proof a -\u003e m (View error view, m (Result error (Proved proof a)))",
        "fct-source": "src/Text-Reform-Core.html#runForm",
        "fct-type": "function",
        "title": "runForm"
      },
      "index": {
        "description": "Run form",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "runForm",
        "normalized": "Environment a b-\u003eText-\u003eForm a b c d e f-\u003ea(View c d,a(Result c(Proved e f)))",
        "package": "reform",
        "partial": "Form",
        "signature": "Environment m input-\u003eText-\u003eForm m input error view proof a-\u003em(View error view,m(Result error(Proved proof a)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:runForm-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRun a form\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "Environment m input -\u003e Text -\u003e Form m input error view proof a -\u003e m (view, Maybe a)",
        "fct-source": "src/Text-Reform-Core.html#runForm%27",
        "fct-type": "function",
        "title": "runForm'"
      },
      "index": {
        "description": "Run form",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "runForm'",
        "normalized": "Environment a b-\u003eText-\u003eForm a b c d e f-\u003ea(d,Maybe f)",
        "package": "reform",
        "partial": "Form'",
        "signature": "Environment m input-\u003eText-\u003eForm m input error view proof a-\u003em(view,Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:unForm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "FormState m input (View error view, m (Result error (Proved proof a)))",
        "fct-source": "src/Text-Reform-Core.html#Form",
        "fct-type": "function",
        "title": "unForm"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "unForm",
        "normalized": "FormState a b(View c d,a(Result c(Proved e f)))",
        "package": "reform",
        "partial": "Form",
        "signature": "FormState m input(View error view,m(Result error(Proved proof a)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:unProved",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "a",
        "fct-source": "src/Text-Reform-Core.html#Proved",
        "fct-type": "function",
        "title": "unProved"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "unProved",
        "normalized": "",
        "package": "reform",
        "partial": "Proved",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:unView",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "[(FormRange, error)] -\u003e v",
        "fct-source": "src/Text-Reform-Core.html#View",
        "fct-type": "function",
        "title": "unView"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "unView",
        "normalized": "[(FormRange,a)]-\u003eb",
        "package": "reform",
        "partial": "View",
        "signature": "[(FormRange,error)]-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:unitProved",
      "description": {
        "fct-descr": "\u003cp\u003eUtility Function: trivially prove nothing about ()\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "FormId -\u003e Proved () ()",
        "fct-source": "src/Text-Reform-Core.html#unitProved",
        "fct-type": "function",
        "title": "unitProved"
      },
      "index": {
        "description": "Utility Function trivially prove nothing about",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "unitProved",
        "normalized": "FormId-\u003eProved()()",
        "package": "reform",
        "partial": "Proved",
        "signature": "FormId-\u003eProved()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:view",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e from some \u003ccode\u003eview\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is typically used to turn markup like \u003ccode\u003e\u003cbr\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "view-\u003e Form m input error view () ()",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "create Form from some view This is typically used to turn markup like br into Form",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "view",
        "normalized": "a-\u003eForm b c d a()()",
        "package": "reform",
        "partial": "",
        "signature": "view-\u003eForm m input error view()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Core.html#v:viewForm",
      "description": {
        "fct-descr": "\u003cp\u003eJust evaluate the form to a view. This usually maps to a GET request in the\n browser.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Core",
        "fct-package": "reform",
        "fct-signature": "Text-\u003e Form m input error view proof a-\u003e m view",
        "fct-type": "function",
        "title": "viewForm"
      },
      "index": {
        "description": "Just evaluate the form to view This usually maps to GET request in the browser",
        "hierarchy": "Text Reform Core",
        "module": "Text.Reform.Core",
        "name": "viewForm",
        "normalized": "Text-\u003eForm a b c d e f-\u003ea d",
        "package": "reform",
        "partial": "Form",
        "signature": "Text-\u003eForm m input error view proof a-\u003em view"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides helper functions for HTML input elements. These helper functions are not specific to any particular web framework or html library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Reform.Generalized",
        "fct-package": "reform",
        "fct-signature": "module",
        "fct-source": "src/Text-Reform-Generalized.html",
        "fct-type": "module",
        "title": "Generalized"
      },
      "index": {
        "description": "This module provides helper functions for HTML input elements These helper functions are not specific to any particular web framework or html library",
        "hierarchy": "Text Reform Generalized",
        "module": "Text.Reform.Generalized",
        "name": "Generalized",
        "normalized": "",
        "package": "reform",
        "partial": "Generalized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:childErrors",
      "description": {
        "fct-descr": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003eerrors\u003c/a\u003e\u003c/code\u003e but includes error messages from children of the form as well.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Generalized",
        "fct-package": "reform",
        "fct-signature": "([error] -\u003e view) -\u003e Form m input error view () ()",
        "fct-source": "src/Text-Reform-Generalized.html#childErrors",
        "fct-type": "function",
        "title": "childErrors"
      },
      "index": {
        "description": "similar to errors but includes error messages from children of the form as well",
        "hierarchy": "Text Reform Generalized",
        "module": "Text.Reform.Generalized",
        "name": "childErrors",
        "normalized": "([a]-\u003eb)-\u003eForm c d a b()()",
        "package": "reform",
        "partial": "Errors",
        "signature": "([error]-\u003eview)-\u003eForm m input error view()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:errors",
      "description": {
        "fct-descr": "\u003cp\u003eused to add a list of error messages to a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis function automatically takes care of extracting only the\n errors that are relevent to the form element it is attached to via\n \u003ccode\u003e\u003ca\u003e\u003c++\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e++\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Generalized",
        "fct-package": "reform",
        "fct-signature": "([error] -\u003e view)-\u003e Form m input error view () ()",
        "fct-type": "function",
        "title": "errors"
      },
      "index": {
        "description": "used to add list of error messages to Form This function automatically takes care of extracting only the errors that are relevent to the form element it is attached to via or",
        "hierarchy": "Text Reform Generalized",
        "module": "Text.Reform.Generalized",
        "name": "errors",
        "normalized": "([a]-\u003eb)-\u003eForm c d a b()()",
        "package": "reform",
        "partial": "",
        "signature": "([error]-\u003eview)-\u003eForm m input error view()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:input",
      "description": {
        "fct-descr": "\u003cp\u003eused for constructing elements like \u003ccode\u003e\u003cinput type=\"text\"\u003e\u003c/code\u003e, which return a single input value.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Generalized",
        "fct-package": "reform",
        "fct-signature": "(input -\u003e Either error a) -\u003e (FormId -\u003e a -\u003e view) -\u003e a -\u003e Form m input error view () a",
        "fct-source": "src/Text-Reform-Generalized.html#input",
        "fct-type": "function",
        "title": "input"
      },
      "index": {
        "description": "used for constructing elements like input type text which return single input value",
        "hierarchy": "Text Reform Generalized",
        "module": "Text.Reform.Generalized",
        "name": "input",
        "normalized": "(a-\u003eEither b c)-\u003e(FormId-\u003ec-\u003ed)-\u003ec-\u003eForm e a b d()c",
        "package": "reform",
        "partial": "",
        "signature": "(input-\u003eEither error a)-\u003e(FormId-\u003ea-\u003eview)-\u003ea-\u003eForm m input error view()a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:inputChoice",
      "description": {
        "fct-descr": "\u003cp\u003eradio buttons, single \u003ccode\u003e\u003cselect\u003e\u003c/code\u003e boxes\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Generalized",
        "fct-package": "reform",
        "fct-signature": "(a -\u003e Bool)-\u003e [(a, lbl)]-\u003e (FormId -\u003e [(FormId, Int, lbl, Bool)] -\u003e view)-\u003e Form m input error view () a",
        "fct-type": "function",
        "title": "inputChoice"
      },
      "index": {
        "description": "radio buttons single select boxes",
        "hierarchy": "Text Reform Generalized",
        "module": "Text.Reform.Generalized",
        "name": "inputChoice",
        "normalized": "(a-\u003eBool)-\u003e[(a,b)]-\u003e(FormId-\u003e[(FormId,Int,b,Bool)]-\u003ec)-\u003eForm d e f c()a",
        "package": "reform",
        "partial": "Choice",
        "signature": "(a-\u003eBool)-\u003e[(a,lbl)]-\u003e(FormId-\u003e[(FormId,Int,lbl,Bool)]-\u003eview)-\u003eForm m input error view()a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:inputChoiceForms",
      "description": {
        "fct-descr": "\u003cp\u003eradio buttons, single \u003ccode\u003e\u003cselect\u003e\u003c/code\u003e boxes\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Generalized",
        "fct-package": "reform",
        "fct-signature": "a-\u003e [(Form m input error view proof a, lbl)]-\u003e (FormId -\u003e [(FormId, Int, FormId, view, lbl, Bool)] -\u003e view)-\u003e Form m input error view proof a",
        "fct-type": "function",
        "title": "inputChoiceForms"
      },
      "index": {
        "description": "radio buttons single select boxes",
        "hierarchy": "Text Reform Generalized",
        "module": "Text.Reform.Generalized",
        "name": "inputChoiceForms",
        "normalized": "a-\u003e[(Form b c d e f a,g)]-\u003e(FormId-\u003e[(FormId,Int,FormId,e,g,Bool)]-\u003ee)-\u003eForm b c d e f a",
        "package": "reform",
        "partial": "Choice Forms",
        "signature": "a-\u003e[(Form m input error view proof a,lbl)]-\u003e(FormId-\u003e[(FormId,Int,FormId,view,lbl,Bool)]-\u003eview)-\u003eForm m input error view proof a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:inputFile",
      "description": {
        "fct-descr": "\u003cp\u003eused for \u003ccode\u003e\u003cinput type=\"file\"\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Generalized",
        "fct-package": "reform",
        "fct-signature": "(FormId -\u003e view) -\u003e Form m input error view () (FileType input)",
        "fct-source": "src/Text-Reform-Generalized.html#inputFile",
        "fct-type": "function",
        "title": "inputFile"
      },
      "index": {
        "description": "used for input type file",
        "hierarchy": "Text Reform Generalized",
        "module": "Text.Reform.Generalized",
        "name": "inputFile",
        "normalized": "(FormId-\u003ea)-\u003eForm b c d a()(FileType c)",
        "package": "reform",
        "partial": "File",
        "signature": "(FormId-\u003eview)-\u003eForm m input error view()(FileType input)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:inputMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eused for elements like \u003ccode\u003e\u003cinput type=\"submit\"\u003e\u003c/code\u003e which are not always present in the form submission data.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Generalized",
        "fct-package": "reform",
        "fct-signature": "(input -\u003e Either error a) -\u003e (FormId -\u003e a -\u003e view) -\u003e a -\u003e Form m input error view () (Maybe a)",
        "fct-source": "src/Text-Reform-Generalized.html#inputMaybe",
        "fct-type": "function",
        "title": "inputMaybe"
      },
      "index": {
        "description": "used for elements like input type submit which are not always present in the form submission data",
        "hierarchy": "Text Reform Generalized",
        "module": "Text.Reform.Generalized",
        "name": "inputMaybe",
        "normalized": "(a-\u003eEither b c)-\u003e(FormId-\u003ec-\u003ed)-\u003ec-\u003eForm e a b d()(Maybe c)",
        "package": "reform",
        "partial": "Maybe",
        "signature": "(input-\u003eEither error a)-\u003e(FormId-\u003ea-\u003eview)-\u003ea-\u003eForm m input error view()(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:inputMulti",
      "description": {
        "fct-descr": "\u003cp\u003eused for groups of checkboxes, \u003ccode\u003e\u003cselect multiple=\"multiple\"\u003e\u003c/code\u003e boxes\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Generalized",
        "fct-package": "reform",
        "fct-signature": "[(a, lbl)]-\u003e (FormId -\u003e [(FormId, Int, lbl, Bool)] -\u003e view)-\u003e (a -\u003e Bool)-\u003e Form m input error view () [a]",
        "fct-type": "function",
        "title": "inputMulti"
      },
      "index": {
        "description": "used for groups of checkboxes select multiple multiple boxes",
        "hierarchy": "Text Reform Generalized",
        "module": "Text.Reform.Generalized",
        "name": "inputMulti",
        "normalized": "[(a,b)]-\u003e(FormId-\u003e[(FormId,Int,b,Bool)]-\u003ec)-\u003e(a-\u003eBool)-\u003eForm d e f c()[a]",
        "package": "reform",
        "partial": "Multi",
        "signature": "[(a,lbl)]-\u003e(FormId-\u003e[(FormId,Int,lbl,Bool)]-\u003eview)-\u003e(a-\u003eBool)-\u003eForm m input error view()[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:inputNoData",
      "description": {
        "fct-descr": "\u003cp\u003eused for elements like \u003ccode\u003e\u003cinput type=\"reset\"\u003e\u003c/code\u003e which take a value, but are never present in the form data set.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Generalized",
        "fct-package": "reform",
        "fct-signature": "(FormId -\u003e a -\u003e view) -\u003e a -\u003e Form m input error view () ()",
        "fct-source": "src/Text-Reform-Generalized.html#inputNoData",
        "fct-type": "function",
        "title": "inputNoData"
      },
      "index": {
        "description": "used for elements like input type reset which take value but are never present in the form data set",
        "hierarchy": "Text Reform Generalized",
        "module": "Text.Reform.Generalized",
        "name": "inputNoData",
        "normalized": "(FormId-\u003ea-\u003eb)-\u003ea-\u003eForm c d e b()()",
        "package": "reform",
        "partial": "No Data",
        "signature": "(FormId-\u003ea-\u003eview)-\u003ea-\u003eForm m input error view()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Generalized.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003eused to create \u003ccode\u003e\u003clabel\u003e\u003c/code\u003e elements\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Generalized",
        "fct-package": "reform",
        "fct-signature": "(FormId -\u003e view) -\u003e Form m input error view () ()",
        "fct-source": "src/Text-Reform-Generalized.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "used to create label elements",
        "hierarchy": "Text Reform Generalized",
        "module": "Text.Reform.Generalized",
        "name": "label",
        "normalized": "(FormId-\u003ea)-\u003eForm b c d a()()",
        "package": "reform",
        "partial": "",
        "signature": "(FormId-\u003eview)-\u003eForm m input error view()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e type, some proofs, and some helper functions.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e does three things:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e verifies that the input value meets some criteria\n - optionally transforms the input value to another value while preserving that criteria\n - puts the proof name in type-signature where the type-checker can use it\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "module",
        "fct-source": "src/Text-Reform-Proof.html",
        "fct-type": "module",
        "title": "Proof"
      },
      "index": {
        "description": "This module defines the Proof type some proofs and some helper functions Proof does three things verifies that the input value meets some criteria optionally transforms the input value to another value while preserving that criteria puts the proof name in type-signature where the type-checker can use it",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "Proof",
        "normalized": "",
        "package": "reform",
        "partial": "Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#t:Decimal",
      "description": {
        "fct-descr": "\u003cp\u003eproof that a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a decimal number\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "data",
        "fct-source": "src/Text-Reform-Proof.html#Decimal",
        "fct-type": "data",
        "title": "Decimal"
      },
      "index": {
        "description": "proof that String is decimal number",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "Decimal",
        "normalized": "",
        "package": "reform",
        "partial": "Decimal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#t:NotNull",
      "description": {
        "fct-descr": "\u003cp\u003eproof that a list is not empty\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "data",
        "fct-source": "src/Text-Reform-Proof.html#NotNull",
        "fct-type": "data",
        "title": "NotNull"
      },
      "index": {
        "description": "proof that list is not empty",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "NotNull",
        "normalized": "",
        "package": "reform",
        "partial": "Not Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#t:Proof",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e attempts to prove something about a value.\n\u003c/p\u003e\u003cp\u003eIf successful, it can also transform the value to a new value. The\n proof should hold for the new value as well.\n\u003c/p\u003e\u003cp\u003eGenerally, each \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e has a unique data-type associated with it\n which names the proof, such as:\n\u003c/p\u003e\u003cpre\u003e data NotNull = NotNull\n\u003c/pre\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "data",
        "fct-source": "src/Text-Reform-Proof.html#Proof",
        "fct-type": "data",
        "title": "Proof"
      },
      "index": {
        "description": "Proof attempts to prove something about value If successful it can also transform the value to new value The proof should hold for the new value as well Generally each Proof has unique data-type associated with it which names the proof such as data NotNull NotNull",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "Proof",
        "normalized": "",
        "package": "reform",
        "partial": "Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#t:RealFractional",
      "description": {
        "fct-descr": "\u003cp\u003eproof that a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a Real/Fractional number\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "data",
        "fct-source": "src/Text-Reform-Proof.html#RealFractional",
        "fct-type": "data",
        "title": "RealFractional"
      },
      "index": {
        "description": "proof that String is Real Fractional number",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "RealFractional",
        "normalized": "",
        "package": "reform",
        "partial": "Real Fractional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#t:Signed",
      "description": {
        "fct-descr": "\u003cp\u003eproof that a number is also (allowed to be) signed\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "data",
        "fct-source": "src/Text-Reform-Proof.html#Signed",
        "fct-type": "data",
        "title": "Signed"
      },
      "index": {
        "description": "proof that number is also allowed to be signed",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "Signed",
        "normalized": "",
        "package": "reform",
        "partial": "Signed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:Decimal",
      "description": {
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "Decimal",
        "fct-source": "src/Text-Reform-Proof.html#Decimal",
        "fct-type": "function",
        "title": "Decimal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "Decimal",
        "normalized": "",
        "package": "reform",
        "partial": "Decimal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:NotNull",
      "description": {
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "NotNull",
        "fct-source": "src/Text-Reform-Proof.html#NotNull",
        "fct-type": "function",
        "title": "NotNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "NotNull",
        "normalized": "",
        "package": "reform",
        "partial": "Not Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:Proof",
      "description": {
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "Proof",
        "fct-source": "src/Text-Reform-Proof.html#Proof",
        "fct-type": "function",
        "title": "Proof"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "Proof",
        "normalized": "",
        "package": "reform",
        "partial": "Proof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:RealFractional",
      "description": {
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "RealFractional",
        "fct-source": "src/Text-Reform-Proof.html#RealFractional",
        "fct-type": "function",
        "title": "RealFractional"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "RealFractional",
        "normalized": "",
        "package": "reform",
        "partial": "Real Fractional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:Signed",
      "description": {
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "Signed a",
        "fct-source": "src/Text-Reform-Proof.html#Signed",
        "fct-type": "function",
        "title": "Signed"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "Signed",
        "normalized": "",
        "package": "reform",
        "partial": "Signed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:decimal",
      "description": {
        "fct-descr": "\u003cp\u003eread an unsigned number in decimal notation\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "(String -\u003e error)-\u003e Proof m error Decimal String i",
        "fct-type": "function",
        "title": "decimal"
      },
      "index": {
        "description": "read an unsigned number in decimal notation",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "decimal",
        "normalized": "(String-\u003ea)-\u003eProof b a Decimal String c",
        "package": "reform",
        "partial": "",
        "signature": "(String-\u003eerror)-\u003eProof m error Decimal String i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:notNullProof",
      "description": {
        "fct-descr": "\u003cp\u003eprove that a list is not empty\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "error -\u003e Proof m error NotNull [a] [a]",
        "fct-source": "src/Text-Reform-Proof.html#notNullProof",
        "fct-type": "function",
        "title": "notNullProof"
      },
      "index": {
        "description": "prove that list is not empty",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "notNullProof",
        "normalized": "a-\u003eProof b a NotNull[c][c]",
        "package": "reform",
        "partial": "Null Proof",
        "signature": "error-\u003eProof m error NotNull[a][a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:proofFunction",
      "description": {
        "fct-descr": "\u003cp\u003efunction which provides the proof\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "a -\u003e m (Either error b)",
        "fct-source": "src/Text-Reform-Proof.html#Proof",
        "fct-type": "function",
        "title": "proofFunction"
      },
      "index": {
        "description": "function which provides the proof",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "proofFunction",
        "normalized": "a-\u003eb(Either c d)",
        "package": "reform",
        "partial": "Function",
        "signature": "a-\u003em(Either error b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:proofName",
      "description": {
        "fct-descr": "\u003cp\u003ename of the thing to prove\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "proof",
        "fct-source": "src/Text-Reform-Proof.html#Proof",
        "fct-type": "function",
        "title": "proofName"
      },
      "index": {
        "description": "name of the thing to prove",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "proofName",
        "normalized": "",
        "package": "reform",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:prove",
      "description": {
        "fct-descr": "\u003cp\u003eapply a \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "Form m input error view q a -\u003e Proof m error proof a b -\u003e Form m input error view proof b",
        "fct-source": "src/Text-Reform-Proof.html#prove",
        "fct-type": "function",
        "title": "prove"
      },
      "index": {
        "description": "apply Proof to Form",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "prove",
        "normalized": "Form a b c d e f-\u003eProof a c g f h-\u003eForm a b c d g h",
        "package": "reform",
        "partial": "",
        "signature": "Form m input error view q a-\u003eProof m error proof a b-\u003eForm m input error view proof b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:realFrac",
      "description": {
        "fct-descr": "\u003cp\u003eread \u003ccode\u003e\u003ca\u003eRealFrac\u003c/a\u003e\u003c/code\u003e number\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "(String -\u003e error) -\u003e Proof m error RealFractional String a",
        "fct-source": "src/Text-Reform-Proof.html#realFrac",
        "fct-type": "function",
        "title": "realFrac"
      },
      "index": {
        "description": "read RealFrac number",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "realFrac",
        "normalized": "(String-\u003ea)-\u003eProof b a RealFractional String c",
        "package": "reform",
        "partial": "Frac",
        "signature": "(String-\u003eerror)-\u003eProof m error RealFractional String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:realFracSigned",
      "description": {
        "fct-descr": "\u003cp\u003eread a signed \u003ccode\u003e\u003ca\u003eRealFrac\u003c/a\u003e\u003c/code\u003e number\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "(String -\u003e error) -\u003e Proof m error (Signed RealFractional) String a",
        "fct-source": "src/Text-Reform-Proof.html#realFracSigned",
        "fct-type": "function",
        "title": "realFracSigned"
      },
      "index": {
        "description": "read signed RealFrac number",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "realFracSigned",
        "normalized": "(String-\u003ea)-\u003eProof b a(Signed RealFractional)String c",
        "package": "reform",
        "partial": "Frac Signed",
        "signature": "(String-\u003eerror)-\u003eProof m error(Signed RealFractional)String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:signedDecimal",
      "description": {
        "fct-descr": "\u003cp\u003eread signed decimal number\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "(String -\u003e error) -\u003e Proof m error (Signed Decimal) String i",
        "fct-source": "src/Text-Reform-Proof.html#signedDecimal",
        "fct-type": "function",
        "title": "signedDecimal"
      },
      "index": {
        "description": "read signed decimal number",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "signedDecimal",
        "normalized": "(String-\u003ea)-\u003eProof b a(Signed Decimal)String c",
        "package": "reform",
        "partial": "Decimal",
        "signature": "(String-\u003eerror)-\u003eProof m error(Signed Decimal)String i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:transform",
      "description": {
        "fct-descr": "\u003cp\u003etransform a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e using a \u003ccode\u003e\u003ca\u003eProof\u003c/a\u003e\u003c/code\u003e, and the replace the proof with \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is useful when you want just want classic digestive-functors behaviour.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "Form m input error view anyProof a -\u003e Proof m error proof a b -\u003e Form m input error view () b",
        "fct-source": "src/Text-Reform-Proof.html#transform",
        "fct-type": "function",
        "title": "transform"
      },
      "index": {
        "description": "transform Form using Proof and the replace the proof with This is useful when you want just want classic digestive-functors behaviour",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "transform",
        "normalized": "Form a b c d e f-\u003eProof a c g f h-\u003eForm a b c d()h",
        "package": "reform",
        "partial": "",
        "signature": "Form m input error view anyProof a-\u003eProof m error proof a b-\u003eForm m input error view()b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:transformEither",
      "description": {
        "fct-descr": "\u003cp\u003etransform the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e result using an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "Form m input error view anyProof a -\u003e (a -\u003e Either error b) -\u003e Form m input error view () b",
        "fct-source": "src/Text-Reform-Proof.html#transformEither",
        "fct-type": "function",
        "title": "transformEither"
      },
      "index": {
        "description": "transform the Form result using an Either function",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "transformEither",
        "normalized": "Form a b c d e f-\u003e(f-\u003eEither c g)-\u003eForm a b c d()g",
        "package": "reform",
        "partial": "Either",
        "signature": "Form m input error view anyProof a-\u003e(a-\u003eEither error b)-\u003eForm m input error view()b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Proof.html#v:transformEitherM",
      "description": {
        "fct-descr": "\u003cp\u003etransform the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e result using a monadic \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Proof",
        "fct-package": "reform",
        "fct-signature": "Form m input error view anyProof a -\u003e (a -\u003e m (Either error b)) -\u003e Form m input error view () b",
        "fct-source": "src/Text-Reform-Proof.html#transformEitherM",
        "fct-type": "function",
        "title": "transformEitherM"
      },
      "index": {
        "description": "transform the Form result using monadic Either function",
        "hierarchy": "Text Reform Proof",
        "module": "Text.Reform.Proof",
        "name": "transformEitherM",
        "normalized": "Form a b c d e f-\u003e(f-\u003ea(Either c g))-\u003eForm a b c d()g",
        "package": "reform",
        "partial": "Either",
        "signature": "Form m input error view anyProof a-\u003e(a-\u003em(Either error b))-\u003eForm m input error view()b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for the core result type, and related functions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "module",
        "fct-source": "src/Text-Reform-Result.html",
        "fct-type": "module",
        "title": "Result"
      },
      "index": {
        "description": "Module for the core result type and related functions",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "Result",
        "normalized": "",
        "package": "reform",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#t:FormId",
      "description": {
        "fct-descr": "\u003cp\u003eAn ID used to identify forms\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "data",
        "fct-source": "src/Text-Reform-Result.html#FormId",
        "fct-type": "data",
        "title": "FormId"
      },
      "index": {
        "description": "An ID used to identify forms",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "FormId",
        "normalized": "",
        "package": "reform",
        "partial": "Form Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#t:FormRange",
      "description": {
        "fct-descr": "\u003cp\u003eA range of ID's to specify a group of forms\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "data",
        "fct-source": "src/Text-Reform-Result.html#FormRange",
        "fct-type": "data",
        "title": "FormRange"
      },
      "index": {
        "description": "range of ID to specify group of forms",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "FormRange",
        "normalized": "",
        "package": "reform",
        "partial": "Form Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eType for failing computations\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "data",
        "fct-source": "src/Text-Reform-Result.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "Type for failing computations",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "Result",
        "normalized": "",
        "package": "reform",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:Error",
      "description": {
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "Error [(FormRange, e)]",
        "fct-source": "src/Text-Reform-Result.html#Result",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "Error",
        "normalized": "Error[(FormRange,a)]",
        "package": "reform",
        "partial": "Error",
        "signature": "Error[(FormRange,e)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:FormRange",
      "description": {
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "FormRange FormId FormId",
        "fct-source": "src/Text-Reform-Result.html#FormRange",
        "fct-type": "function",
        "title": "FormRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "FormRange",
        "normalized": "",
        "package": "reform",
        "partial": "Form Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:Ok",
      "description": {
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "Ok ok",
        "fct-source": "src/Text-Reform-Result.html#Result",
        "fct-type": "function",
        "title": "Ok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "Ok",
        "normalized": "",
        "package": "reform",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:formIdList",
      "description": {
        "fct-descr": "\u003cp\u003eStack indicating field. Head is most specific to this item\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "FormId -\u003e [Integer]",
        "fct-source": "src/Text-Reform-Result.html#formIdList",
        "fct-type": "function",
        "title": "formIdList"
      },
      "index": {
        "description": "Stack indicating field Head is most specific to this item",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "formIdList",
        "normalized": "FormId-\u003e[Integer]",
        "package": "reform",
        "partial": "Id List",
        "signature": "FormId-\u003e[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:getResult",
      "description": {
        "fct-descr": "\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e discarding the error message on \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "Result e ok -\u003e Maybe ok",
        "fct-source": "src/Text-Reform-Result.html#getResult",
        "fct-type": "function",
        "title": "getResult"
      },
      "index": {
        "description": "convert Result to Maybe discarding the error message on Error",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "getResult",
        "normalized": "Result a b-\u003eMaybe b",
        "package": "reform",
        "partial": "Result",
        "signature": "Result e ok-\u003eMaybe ok"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:incrementFormId",
      "description": {
        "fct-descr": "\u003cp\u003eIncrement a form ID\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "FormId -\u003e FormId",
        "fct-source": "src/Text-Reform-Result.html#incrementFormId",
        "fct-type": "function",
        "title": "incrementFormId"
      },
      "index": {
        "description": "Increment form ID",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "incrementFormId",
        "normalized": "FormId-\u003eFormId",
        "package": "reform",
        "partial": "Form Id",
        "signature": "FormId-\u003eFormId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:isInRange",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e is contained in a \u003ccode\u003e\u003ca\u003eFormRange\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "FormId-\u003e FormRange-\u003e Bool",
        "fct-type": "function",
        "title": "isInRange"
      },
      "index": {
        "description": "Check if FormId is contained in FormRange",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "isInRange",
        "normalized": "FormId-\u003eFormRange-\u003eBool",
        "package": "reform",
        "partial": "In Range",
        "signature": "FormId-\u003eFormRange-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:isSubRange",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a \u003ccode\u003e\u003ca\u003eFormRange\u003c/a\u003e\u003c/code\u003e is contained in another \u003ccode\u003e\u003ca\u003eFormRange\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "FormRange-\u003e FormRange-\u003e Bool",
        "fct-type": "function",
        "title": "isSubRange"
      },
      "index": {
        "description": "Check if FormRange is contained in another FormRange",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "isSubRange",
        "normalized": "FormRange-\u003eFormRange-\u003eBool",
        "package": "reform",
        "partial": "Sub Range",
        "signature": "FormRange-\u003eFormRange-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:mapId",
      "description": {
        "fct-descr": "\u003cp\u003emap a function over the \u003ccode\u003e[Integer]\u003c/code\u003e inside a \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "([Integer] -\u003e [Integer]) -\u003e FormId -\u003e FormId",
        "fct-source": "src/Text-Reform-Result.html#mapId",
        "fct-type": "function",
        "title": "mapId"
      },
      "index": {
        "description": "map function over the Integer inside FormId",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "mapId",
        "normalized": "([Integer]-\u003e[Integer])-\u003eFormId-\u003eFormId",
        "package": "reform",
        "partial": "Id",
        "signature": "([Integer]-\u003e[Integer])-\u003eFormId-\u003eFormId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:retainChildErrors",
      "description": {
        "fct-descr": "\u003cp\u003eSelect the errors originating from this form or from any of the children of\n this form\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "FormRange -\u003e [(FormRange, e)] -\u003e [e]",
        "fct-source": "src/Text-Reform-Result.html#retainChildErrors",
        "fct-type": "function",
        "title": "retainChildErrors"
      },
      "index": {
        "description": "Select the errors originating from this form or from any of the children of this form",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "retainChildErrors",
        "normalized": "FormRange-\u003e[(FormRange,a)]-\u003e[a]",
        "package": "reform",
        "partial": "Child Errors",
        "signature": "FormRange-\u003e[(FormRange,e)]-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:retainErrors",
      "description": {
        "fct-descr": "\u003cp\u003eSelect the errors for a certain range\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "FormRange -\u003e [(FormRange, e)] -\u003e [e]",
        "fct-source": "src/Text-Reform-Result.html#retainErrors",
        "fct-type": "function",
        "title": "retainErrors"
      },
      "index": {
        "description": "Select the errors for certain range",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "retainErrors",
        "normalized": "FormRange-\u003e[(FormRange,a)]-\u003e[a]",
        "package": "reform",
        "partial": "Errors",
        "signature": "FormRange-\u003e[(FormRange,e)]-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:unitRange",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a \u003ccode\u003e\u003ca\u003eFormRange\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eFormId\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "FormId -\u003e FormRange",
        "fct-source": "src/Text-Reform-Result.html#unitRange",
        "fct-type": "function",
        "title": "unitRange"
      },
      "index": {
        "description": "create FormRange from FormId",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "unitRange",
        "normalized": "FormId-\u003eFormRange",
        "package": "reform",
        "partial": "Range",
        "signature": "FormId-\u003eFormRange"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform-Result.html#v:zeroId",
      "description": {
        "fct-descr": "\u003cp\u003eThe zero ID, i.e. the first ID that is usable\n\u003c/p\u003e",
        "fct-module": "Text.Reform.Result",
        "fct-package": "reform",
        "fct-signature": "String -\u003e FormId",
        "fct-source": "src/Text-Reform-Result.html#zeroId",
        "fct-type": "function",
        "title": "zeroId"
      },
      "index": {
        "description": "The zero ID i.e the first ID that is usable",
        "hierarchy": "Text Reform Result",
        "module": "Text.Reform.Result",
        "name": "zeroId",
        "normalized": "String-\u003eFormId",
        "package": "reform",
        "partial": "Id",
        "signature": "String-\u003eFormId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reform/docs/Text-Reform.html#",
      "description": {
        "fct-module": "Text.Reform",
        "fct-package": "reform",
        "fct-signature": "module",
        "fct-source": "src/Text-Reform.html",
        "fct-type": "module",
        "title": "Reform"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Reform",
        "module": "Text.Reform",
        "name": "Reform",
        "normalized": "",
        "package": "reform",
        "partial": "Reform",
        "signature": ""
      }
    }
  }
]