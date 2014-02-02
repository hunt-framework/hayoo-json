[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module extends the \u003ccode\u003esafe\u003c/code\u003e library's functions with corresponding\n    versions compatible with \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e, and also provides a few\n    \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e-compatible functions missing from \u003ccode\u003esafe\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eI suffix the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e-compatible functions with \u003ccode\u003eErr\u003c/code\u003e and prefix the\n    \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e-compatible functions with \u003ccode\u003etry\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this library re-exports the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e compatible functions from\n    \u003ccode\u003esafe\u003c/code\u003e in the \u003ca\u003eControl.Error\u003c/a\u003e module, so they are not provided here.\n\u003c/p\u003e\u003cp\u003eThe '\u003ccode\u003eZ\u003c/code\u003e'-suffixed functions generalize the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e functions to also work\n    with anything that implements \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e, including:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Lists\n\u003c/li\u003e\u003cli\u003e Most parsers\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e (if the left value is a \u003ccode\u003eMonoid\u003c/code\u003e)\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "module",
        "fct-source": "src/Control-Error-Safe.html",
        "fct-type": "module",
        "title": "Safe"
      },
      "index": {
        "description": "This module extends the safe library functions with corresponding versions compatible with Either and EitherT and also provides few Maybe compatible functions missing from safe suffix the Either compatible functions with Err and prefix the EitherT compatible functions with try Note that this library re-exports the Maybe compatible functions from safe in the Control.Error module so they are not provided here The suffixed functions generalize the Maybe functions to also work with anything that implements MonadPlus including Lists Most parsers EitherT if the left value is Monoid",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "Safe",
        "normalized": "",
        "package": "errors",
        "partial": "Safe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:assertErr",
      "description": {
        "fct-descr": "\u003cp\u003eAn assertion that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e Bool -\u003e Either e ()",
        "fct-source": "src/Control-Error-Safe.html#assertErr",
        "fct-type": "function",
        "title": "assertErr"
      },
      "index": {
        "description": "An assertion that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "assertErr",
        "normalized": "a-\u003eBool-\u003eEither a()",
        "package": "errors",
        "partial": "Err",
        "signature": "e-\u003eBool-\u003eEither e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:assertMay",
      "description": {
        "fct-descr": "\u003cp\u003eAn assertion that fails in the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "Bool -\u003e Maybe ()",
        "fct-source": "src/Control-Error-Safe.html#assertMay",
        "fct-type": "function",
        "title": "assertMay"
      },
      "index": {
        "description": "An assertion that fails in the Maybe monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "assertMay",
        "normalized": "Bool-\u003eMaybe()",
        "package": "errors",
        "partial": "May",
        "signature": "Bool-\u003eMaybe()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:assertZ",
      "description": {
        "fct-descr": "\u003cp\u003eAn assertion that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "Bool -\u003e m ()",
        "fct-source": "src/Control-Error-Safe.html#assertZ",
        "fct-type": "function",
        "title": "assertZ"
      },
      "index": {
        "description": "An assertion that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "assertZ",
        "normalized": "Bool-\u003ea()",
        "package": "errors",
        "partial": "",
        "signature": "Bool-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:atErr",
      "description": {
        "fct-descr": "\u003cp\u003eA (\u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e) that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e Int -\u003e Either e a",
        "fct-source": "src/Control-Error-Safe.html#atErr",
        "fct-type": "function",
        "title": "atErr"
      },
      "index": {
        "description": "that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "atErr",
        "normalized": "a-\u003e[b]-\u003eInt-\u003eEither a b",
        "package": "errors",
        "partial": "Err",
        "signature": "e-\u003e[a]-\u003eInt-\u003eEither e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:atZ",
      "description": {
        "fct-descr": "\u003cp\u003eA (\u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e) that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "[a] -\u003e Int -\u003e m a",
        "fct-source": "src/Control-Error-Safe.html#atZ",
        "fct-type": "function",
        "title": "atZ"
      },
      "index": {
        "description": "that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "atZ",
        "normalized": "[a]-\u003eInt-\u003eb a",
        "package": "errors",
        "partial": "",
        "signature": "[a]-\u003eInt-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:foldl1Err",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e Either e a",
        "fct-source": "src/Control-Error-Safe.html#foldl1Err",
        "fct-type": "function",
        "title": "foldl1Err"
      },
      "index": {
        "description": "foldl1 that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "foldl1Err",
        "normalized": "a-\u003e(b-\u003eb-\u003eb)-\u003e[b]-\u003eEither a b",
        "package": "errors",
        "partial": "Err",
        "signature": "e-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003eEither e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:foldl1Err-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003efoldl1'\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e Either e a",
        "fct-source": "src/Control-Error-Safe.html#foldl1Err%27",
        "fct-type": "function",
        "title": "foldl1Err'"
      },
      "index": {
        "description": "foldl1 that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "foldl1Err'",
        "normalized": "a-\u003e(b-\u003eb-\u003eb)-\u003e[b]-\u003eEither a b",
        "package": "errors",
        "partial": "Err'",
        "signature": "e-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003eEither e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:foldl1Z",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e m a",
        "fct-source": "src/Control-Error-Safe.html#foldl1Z",
        "fct-type": "function",
        "title": "foldl1Z"
      },
      "index": {
        "description": "foldl1 that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "foldl1Z",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eb a",
        "package": "errors",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:foldl1Z-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003efoldl1'\u003c/code\u003e that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e m a",
        "fct-source": "src/Control-Error-Safe.html#foldl1Z%27",
        "fct-type": "function",
        "title": "foldl1Z'"
      },
      "index": {
        "description": "foldl1 that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "foldl1Z'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eb a",
        "package": "errors",
        "partial": "Z'",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:foldr1Err",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e Either e a",
        "fct-source": "src/Control-Error-Safe.html#foldr1Err",
        "fct-type": "function",
        "title": "foldr1Err"
      },
      "index": {
        "description": "foldr1 that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "foldr1Err",
        "normalized": "a-\u003e(b-\u003eb-\u003eb)-\u003e[b]-\u003eEither a b",
        "package": "errors",
        "partial": "Err",
        "signature": "e-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003eEither e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:foldr1Z",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e m a",
        "fct-source": "src/Control-Error-Safe.html#foldr1Z",
        "fct-type": "function",
        "title": "foldr1Z"
      },
      "index": {
        "description": "foldr1 that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "foldr1Z",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eb a",
        "package": "errors",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:headErr",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e Either e a",
        "fct-source": "src/Control-Error-Safe.html#headErr",
        "fct-type": "function",
        "title": "headErr"
      },
      "index": {
        "description": "head that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "headErr",
        "normalized": "a-\u003e[b]-\u003eEither a b",
        "package": "errors",
        "partial": "Err",
        "signature": "e-\u003e[a]-\u003eEither e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:headZ",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "[a] -\u003e m a",
        "fct-source": "src/Control-Error-Safe.html#headZ",
        "fct-type": "function",
        "title": "headZ"
      },
      "index": {
        "description": "head that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "headZ",
        "normalized": "[a]-\u003eb a",
        "package": "errors",
        "partial": "",
        "signature": "[a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:initErr",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e Either e [a]",
        "fct-source": "src/Control-Error-Safe.html#initErr",
        "fct-type": "function",
        "title": "initErr"
      },
      "index": {
        "description": "An init that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "initErr",
        "normalized": "a-\u003e[b]-\u003eEither a[b]",
        "package": "errors",
        "partial": "Err",
        "signature": "e-\u003e[a]-\u003eEither e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:initZ",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "[a] -\u003e m [a]",
        "fct-source": "src/Control-Error-Safe.html#initZ",
        "fct-type": "function",
        "title": "initZ"
      },
      "index": {
        "description": "An init that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "initZ",
        "normalized": "[a]-\u003eb[a]",
        "package": "errors",
        "partial": "",
        "signature": "[a]-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:justErr",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003efromJust\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e Maybe a -\u003e Either e a",
        "fct-source": "src/Control-Error-Safe.html#justErr",
        "fct-type": "function",
        "title": "justErr"
      },
      "index": {
        "description": "fromJust that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "justErr",
        "normalized": "a-\u003eMaybe b-\u003eEither a b",
        "package": "errors",
        "partial": "Err",
        "signature": "e-\u003eMaybe a-\u003eEither e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:justZ",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003efromJust\u003c/code\u003e that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "Maybe a -\u003e m a",
        "fct-source": "src/Control-Error-Safe.html#justZ",
        "fct-type": "function",
        "title": "justZ"
      },
      "index": {
        "description": "fromJust that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "justZ",
        "normalized": "Maybe a-\u003eb a",
        "package": "errors",
        "partial": "",
        "signature": "Maybe a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:lastErr",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e Either e a",
        "fct-source": "src/Control-Error-Safe.html#lastErr",
        "fct-type": "function",
        "title": "lastErr"
      },
      "index": {
        "description": "last that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "lastErr",
        "normalized": "a-\u003e[b]-\u003eEither a b",
        "package": "errors",
        "partial": "Err",
        "signature": "e-\u003e[a]-\u003eEither e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:lastZ",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "[a] -\u003e m a",
        "fct-source": "src/Control-Error-Safe.html#lastZ",
        "fct-type": "function",
        "title": "lastZ"
      },
      "index": {
        "description": "last that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "lastZ",
        "normalized": "[a]-\u003eb a",
        "package": "errors",
        "partial": "",
        "signature": "[a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:maximumErr",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e Either e a",
        "fct-source": "src/Control-Error-Safe.html#maximumErr",
        "fct-type": "function",
        "title": "maximumErr"
      },
      "index": {
        "description": "maximum that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "maximumErr",
        "normalized": "a-\u003e[b]-\u003eEither a b",
        "package": "errors",
        "partial": "Err",
        "signature": "e-\u003e[a]-\u003eEither e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:maximumZ",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "[a] -\u003e m a",
        "fct-source": "src/Control-Error-Safe.html#maximumZ",
        "fct-type": "function",
        "title": "maximumZ"
      },
      "index": {
        "description": "maximum that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "maximumZ",
        "normalized": "[a]-\u003eb a",
        "package": "errors",
        "partial": "",
        "signature": "[a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:minimumErr",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e Either e a",
        "fct-source": "src/Control-Error-Safe.html#minimumErr",
        "fct-type": "function",
        "title": "minimumErr"
      },
      "index": {
        "description": "minimum that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "minimumErr",
        "normalized": "a-\u003e[b]-\u003eEither a b",
        "package": "errors",
        "partial": "Err",
        "signature": "e-\u003e[a]-\u003eEither e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:minimumZ",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "[a] -\u003e m a",
        "fct-source": "src/Control-Error-Safe.html#minimumZ",
        "fct-type": "function",
        "title": "minimumZ"
      },
      "index": {
        "description": "minimum that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "minimumZ",
        "normalized": "[a]-\u003eb a",
        "package": "errors",
        "partial": "",
        "signature": "[a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:readErr",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e String -\u003e Either e a",
        "fct-source": "src/Control-Error-Safe.html#readErr",
        "fct-type": "function",
        "title": "readErr"
      },
      "index": {
        "description": "read that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "readErr",
        "normalized": "a-\u003eString-\u003eEither a b",
        "package": "errors",
        "partial": "Err",
        "signature": "e-\u003eString-\u003eEither e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:readZ",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "String -\u003e m a",
        "fct-source": "src/Control-Error-Safe.html#readZ",
        "fct-type": "function",
        "title": "readZ"
      },
      "index": {
        "description": "read that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "readZ",
        "normalized": "String-\u003ea b",
        "package": "errors",
        "partial": "",
        "signature": "String-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:rightMay",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003efromRight\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "Either e a -\u003e Maybe a",
        "fct-source": "src/Control-Error-Safe.html#rightMay",
        "fct-type": "function",
        "title": "rightMay"
      },
      "index": {
        "description": "fromRight that fails in the Maybe monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "rightMay",
        "normalized": "Either a b-\u003eMaybe b",
        "package": "errors",
        "partial": "May",
        "signature": "Either e a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:rightZ",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003efromRight\u003c/code\u003e that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "Either e a -\u003e m a",
        "fct-source": "src/Control-Error-Safe.html#rightZ",
        "fct-type": "function",
        "title": "rightZ"
      },
      "index": {
        "description": "fromRight that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "rightZ",
        "normalized": "Either a b-\u003ec b",
        "package": "errors",
        "partial": "",
        "signature": "Either e a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tailErr",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e Either e [a]",
        "fct-source": "src/Control-Error-Safe.html#tailErr",
        "fct-type": "function",
        "title": "tailErr"
      },
      "index": {
        "description": "tail that fails in the Either monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tailErr",
        "normalized": "a-\u003e[b]-\u003eEither a[b]",
        "package": "errors",
        "partial": "Err",
        "signature": "e-\u003e[a]-\u003eEither e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tailZ",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e that fails using \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "[a] -\u003e m [a]",
        "fct-source": "src/Control-Error-Safe.html#tailZ",
        "fct-type": "function",
        "title": "tailZ"
      },
      "index": {
        "description": "tail that fails using mzero",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tailZ",
        "normalized": "[a]-\u003eb[a]",
        "package": "errors",
        "partial": "",
        "signature": "[a]-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryAssert",
      "description": {
        "fct-descr": "\u003cp\u003eAn assertion that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e Bool -\u003e EitherT e m ()",
        "fct-source": "src/Control-Error-Safe.html#tryAssert",
        "fct-type": "function",
        "title": "tryAssert"
      },
      "index": {
        "description": "An assertion that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryAssert",
        "normalized": "a-\u003eBool-\u003eEitherT a b()",
        "package": "errors",
        "partial": "Assert",
        "signature": "e-\u003eBool-\u003eEitherT e m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryAt",
      "description": {
        "fct-descr": "\u003cp\u003eA (\u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e) that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e Int -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Safe.html#tryAt",
        "fct-type": "function",
        "title": "tryAt"
      },
      "index": {
        "description": "that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryAt",
        "normalized": "a-\u003e[b]-\u003eInt-\u003eEitherT a c b",
        "package": "errors",
        "partial": "At",
        "signature": "e-\u003e[a]-\u003eInt-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryFoldl1",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Safe.html#tryFoldl1",
        "fct-type": "function",
        "title": "tryFoldl1"
      },
      "index": {
        "description": "foldl1 that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryFoldl1",
        "normalized": "a-\u003e(b-\u003eb-\u003eb)-\u003e[b]-\u003eEitherT a c b",
        "package": "errors",
        "partial": "Foldl",
        "signature": "e-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryFoldl1-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003efoldl1'\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Safe.html#tryFoldl1%27",
        "fct-type": "function",
        "title": "tryFoldl1'"
      },
      "index": {
        "description": "foldl1 that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryFoldl1'",
        "normalized": "a-\u003e(b-\u003eb-\u003eb)-\u003e[b]-\u003eEitherT a c b",
        "package": "errors",
        "partial": "Foldl",
        "signature": "e-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryFoldr1",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Safe.html#tryFoldr1",
        "fct-type": "function",
        "title": "tryFoldr1"
      },
      "index": {
        "description": "foldr1 that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryFoldr1",
        "normalized": "a-\u003e(b-\u003eb-\u003eb)-\u003e[b]-\u003eEitherT a c b",
        "package": "errors",
        "partial": "Foldr",
        "signature": "e-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryHead",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Safe.html#tryHead",
        "fct-type": "function",
        "title": "tryHead"
      },
      "index": {
        "description": "head that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryHead",
        "normalized": "a-\u003e[b]-\u003eEitherT a c b",
        "package": "errors",
        "partial": "Head",
        "signature": "e-\u003e[a]-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryInit",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e EitherT e m [a]",
        "fct-source": "src/Control-Error-Safe.html#tryInit",
        "fct-type": "function",
        "title": "tryInit"
      },
      "index": {
        "description": "An init that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryInit",
        "normalized": "a-\u003e[b]-\u003eEitherT a c[b]",
        "package": "errors",
        "partial": "Init",
        "signature": "e-\u003e[a]-\u003eEitherT e m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryJust",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003efromJust\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e Maybe a -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Safe.html#tryJust",
        "fct-type": "function",
        "title": "tryJust"
      },
      "index": {
        "description": "fromJust that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryJust",
        "normalized": "a-\u003eMaybe b-\u003eEitherT a c b",
        "package": "errors",
        "partial": "Just",
        "signature": "e-\u003eMaybe a-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryLast",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Safe.html#tryLast",
        "fct-type": "function",
        "title": "tryLast"
      },
      "index": {
        "description": "last that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryLast",
        "normalized": "a-\u003e[b]-\u003eEitherT a c b",
        "package": "errors",
        "partial": "Last",
        "signature": "e-\u003e[a]-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryMaximum",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Safe.html#tryMaximum",
        "fct-type": "function",
        "title": "tryMaximum"
      },
      "index": {
        "description": "maximum that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryMaximum",
        "normalized": "a-\u003e[b]-\u003eEitherT a c b",
        "package": "errors",
        "partial": "Maximum",
        "signature": "e-\u003e[a]-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryMinimum",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Safe.html#tryMinimum",
        "fct-type": "function",
        "title": "tryMinimum"
      },
      "index": {
        "description": "minimum that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryMinimum",
        "normalized": "a-\u003e[b]-\u003eEitherT a c b",
        "package": "errors",
        "partial": "Minimum",
        "signature": "e-\u003e[a]-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryRead",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e String -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Safe.html#tryRead",
        "fct-type": "function",
        "title": "tryRead"
      },
      "index": {
        "description": "read that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryRead",
        "normalized": "a-\u003eString-\u003eEitherT a b c",
        "package": "errors",
        "partial": "Read",
        "signature": "e-\u003eString-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryRight",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003efromRight\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "Either e a -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Safe.html#tryRight",
        "fct-type": "function",
        "title": "tryRight"
      },
      "index": {
        "description": "fromRight that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryRight",
        "normalized": "Either a b-\u003eEitherT a c b",
        "package": "errors",
        "partial": "Right",
        "signature": "Either e a-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Safe.html#v:tryTail",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e that fails in the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Safe",
        "fct-package": "errors",
        "fct-signature": "e -\u003e [a] -\u003e EitherT e m [a]",
        "fct-source": "src/Control-Error-Safe.html#tryTail",
        "fct-type": "function",
        "title": "tryTail"
      },
      "index": {
        "description": "tail that fails in the EitherT monad",
        "hierarchy": "Control Error Safe",
        "module": "Control.Error.Safe",
        "name": "tryTail",
        "normalized": "a-\u003e[b]-\u003eEitherT a c[b]",
        "package": "errors",
        "partial": "Tail",
        "signature": "e-\u003e[a]-\u003eEitherT e m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Script.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUse this module if you like to write simple scripts with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-based\n    errors, but you prefer to use \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e to handle errors rather than\n    \u003ccode\u003eControl.Exception\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e import Control.Error\n\n main = runScript $ do\n     str \u003c- scriptIO getLine\n     n   \u003c- tryRead \"Read failed\" str\n     scriptIO $ print (n + 1)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Error.Script",
        "fct-package": "errors",
        "fct-signature": "module",
        "fct-source": "src/Control-Error-Script.html",
        "fct-type": "module",
        "title": "Script"
      },
      "index": {
        "description": "Use this module if you like to write simple scripts with String based errors but you prefer to use EitherT to handle errors rather than Control.Exception import Control.Error main runScript do str scriptIO getLine tryRead Read failed str scriptIO print",
        "hierarchy": "Control Error Script",
        "module": "Control.Error.Script",
        "name": "Script",
        "normalized": "",
        "package": "errors",
        "partial": "Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Script.html#t:Script",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action that can fail with a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e error message\n\u003c/p\u003e",
        "fct-module": "Control.Error.Script",
        "fct-package": "errors",
        "fct-signature": "type",
        "fct-source": "src/Control-Error-Script.html#Script",
        "fct-type": "type",
        "title": "Script"
      },
      "index": {
        "description": "An IO action that can fail with String error message",
        "hierarchy": "Control Error Script",
        "module": "Control.Error.Script",
        "name": "Script",
        "normalized": "",
        "package": "errors",
        "partial": "Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Script.html#v:runScript",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e\u003cp\u003ePrints the first error to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e and exits with \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Script",
        "fct-package": "errors",
        "fct-signature": "Script a -\u003e IO a",
        "fct-source": "src/Control-Error-Script.html#runScript",
        "fct-type": "function",
        "title": "runScript"
      },
      "index": {
        "description": "Runs the Script monad Prints the first error to stderr and exits with exitFailure",
        "hierarchy": "Control Error Script",
        "module": "Control.Error.Script",
        "name": "runScript",
        "normalized": "Script a-\u003eIO a",
        "package": "errors",
        "partial": "Script",
        "signature": "Script a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Script.html#v:scriptIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escriptIO\u003c/a\u003e\u003c/code\u003e resembles \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e, except it catches all exceptions and converts\n    them to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003escriptIO\u003c/a\u003e\u003c/code\u003e is compatible with the \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Error.Script",
        "fct-package": "errors",
        "fct-signature": "IO a -\u003e EitherT String m a",
        "fct-source": "src/Control-Error-Script.html#scriptIO",
        "fct-type": "function",
        "title": "scriptIO"
      },
      "index": {
        "description": "scriptIO resembles lift except it catches all exceptions and converts them to String Note that scriptIO is compatible with the Script monad",
        "hierarchy": "Control Error Script",
        "module": "Control.Error.Script",
        "name": "scriptIO",
        "normalized": "IO a-\u003eEitherT String b a",
        "package": "errors",
        "partial": "IO",
        "signature": "IO a-\u003eEitherT String m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports miscellaneous error-handling functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "module",
        "fct-source": "src/Control-Error-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "This module exports miscellaneous error-handling functions",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "Util",
        "normalized": "",
        "package": "errors",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#t:AllE",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e computations and succeed if all of them succeed\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003es all successes or failures\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Error-Util.html#AllE",
        "fct-type": "newtype",
        "title": "AllE"
      },
      "index": {
        "description": "Run multiple Either computations and succeed if all of them succeed mappend all successes or failures",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "AllE",
        "normalized": "",
        "package": "errors",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#t:AnyE",
      "description": {
        "fct-descr": "\u003cp\u003eRun multiple \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e computations and succeed if any of them succeed\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003es all successes or failures\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Error-Util.html#AnyE",
        "fct-type": "newtype",
        "title": "AnyE"
      },
      "index": {
        "description": "Run multiple Either computations and succeed if any of them succeed mappend all successes or failures",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "AnyE",
        "normalized": "",
        "package": "errors",
        "partial": "Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:-33--63-",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an applicative \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value into the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "m (Maybe a) -\u003e e -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Util.html#%21%3F",
        "fct-type": "function",
        "title": "(!?)"
      },
      "index": {
        "description": "Convert an applicative Maybe value into the EitherT monad",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "(!?) !?",
        "normalized": "a(Maybe b)-\u003ec-\u003eEitherT c a b",
        "package": "errors",
        "partial": "",
        "signature": "m(Maybe a)-\u003ee-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:-63--63-",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value into the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "Maybe a -\u003e e -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Util.html#%3F%3F",
        "fct-type": "function",
        "title": "(??)"
      },
      "index": {
        "description": "Convert Maybe value into the EitherT monad",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "(??) ??",
        "normalized": "Maybe a-\u003eb-\u003eEitherT b c a",
        "package": "errors",
        "partial": "",
        "signature": "Maybe a-\u003ee-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:AllE",
      "description": {
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "AllE",
        "fct-source": "src/Control-Error-Util.html#AllE",
        "fct-type": "function",
        "title": "AllE"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "AllE",
        "normalized": "",
        "package": "errors",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:AnyE",
      "description": {
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "AnyE",
        "fct-source": "src/Control-Error-Util.html#AnyE",
        "fct-type": "function",
        "title": "AnyE"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "AnyE",
        "normalized": "",
        "package": "errors",
        "partial": "Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:err",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to standard error\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Control-Error-Util.html#err",
        "fct-type": "function",
        "title": "err"
      },
      "index": {
        "description": "Write string to standard error",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "err",
        "normalized": "String-\u003eIO()",
        "package": "errors",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:errLn",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string with a newline to standard error\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Control-Error-Util.html#errLn",
        "fct-type": "function",
        "title": "errLn"
      },
      "index": {
        "description": "Write string with newline to standard error",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "errLn",
        "normalized": "String-\u003eIO()",
        "package": "errors",
        "partial": "Ln",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:failWith",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value into the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e\u003cp\u003eNamed version of (\u003ccode\u003e\u003ca\u003e??\u003c/a\u003e\u003c/code\u003e) with arguments flipped\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "e -\u003e Maybe a -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Util.html#failWith",
        "fct-type": "function",
        "title": "failWith"
      },
      "index": {
        "description": "Convert Maybe value into the EitherT monad Named version of with arguments flipped",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "failWith",
        "normalized": "a-\u003eMaybe b-\u003eEitherT a c b",
        "package": "errors",
        "partial": "With",
        "signature": "e-\u003eMaybe a-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:failWithM",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an applicative \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value into the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e\u003cp\u003eNamed version of (\u003ccode\u003e\u003ca\u003e!?\u003c/a\u003e\u003c/code\u003e) with arguments flipped\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "e -\u003e m (Maybe a) -\u003e EitherT e m a",
        "fct-source": "src/Control-Error-Util.html#failWithM",
        "fct-type": "function",
        "title": "failWithM"
      },
      "index": {
        "description": "Convert an applicative Maybe value into the EitherT monad Named version of with arguments flipped",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "failWithM",
        "normalized": "a-\u003eb(Maybe c)-\u003eEitherT a b c",
        "package": "errors",
        "partial": "With",
        "signature": "e-\u003em(Maybe a)-\u003eEitherT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:fmapR",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e specialized to \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e, given a name symmetric to \u003ccode\u003e\u003ca\u003efmapL\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "(a -\u003e b) -\u003e Either l a -\u003e Either l b",
        "fct-source": "src/Control-Error-Util.html#fmapR",
        "fct-type": "function",
        "title": "fmapR"
      },
      "index": {
        "description": "fmap specialized to Either given name symmetric to fmapL",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "fmapR",
        "normalized": "(a-\u003eb)-\u003eEither c a-\u003eEither c b",
        "package": "errors",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eEither l a-\u003eEither l b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:fmapRT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e specialized to \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e, given a name symmetric to \u003ccode\u003e\u003ca\u003efmapLT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "(a -\u003e b) -\u003e EitherT l m a -\u003e EitherT l m b",
        "fct-source": "src/Control-Error-Util.html#fmapRT",
        "fct-type": "function",
        "title": "fmapRT"
      },
      "index": {
        "description": "fmap specialized to EitherT given name symmetric to fmapLT",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "fmapRT",
        "normalized": "(a-\u003eb)-\u003eEitherT c d a-\u003eEitherT c d b",
        "package": "errors",
        "partial": "RT",
        "signature": "(a-\u003eb)-\u003eEitherT l m a-\u003eEitherT l m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:hoistMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "Maybe b -\u003e MaybeT m b",
        "fct-source": "src/Control-Error-Util.html#hoistMaybe",
        "fct-type": "function",
        "title": "hoistMaybe"
      },
      "index": {
        "description": "Lift Maybe to the MaybeT monad",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "hoistMaybe",
        "normalized": "Maybe a-\u003eMaybeT b a",
        "package": "errors",
        "partial": "Maybe",
        "signature": "Maybe b-\u003eMaybeT m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:hush",
      "description": {
        "fct-descr": "\u003cp\u003eSuppress the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e value of an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "Either a b -\u003e Maybe b",
        "fct-source": "src/Control-Error-Util.html#hush",
        "fct-type": "function",
        "title": "hush"
      },
      "index": {
        "description": "Suppress the Left value of an Either",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "hush",
        "normalized": "Either a b-\u003eMaybe b",
        "package": "errors",
        "partial": "",
        "signature": "Either a b-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:hushT",
      "description": {
        "fct-descr": "\u003cp\u003eSuppress the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e value of an \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "EitherT a m b -\u003e MaybeT m b",
        "fct-source": "src/Control-Error-Util.html#hushT",
        "fct-type": "function",
        "title": "hushT"
      },
      "index": {
        "description": "Suppress the Left value of an EitherT",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "hushT",
        "normalized": "EitherT a b c-\u003eMaybeT b c",
        "package": "errors",
        "partial": "",
        "signature": "EitherT a m b-\u003eMaybeT m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:isLeft",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether argument is a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Control-Error-Util.html#isLeft",
        "fct-type": "function",
        "title": "isLeft"
      },
      "index": {
        "description": "Returns whether argument is Left",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "isLeft",
        "normalized": "Either a b-\u003eBool",
        "package": "errors",
        "partial": "Left",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:isRight",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether argument is a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Control-Error-Util.html#isRight",
        "fct-type": "function",
        "title": "isRight"
      },
      "index": {
        "description": "Returns whether argument is Right",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "isRight",
        "normalized": "Either a b-\u003eBool",
        "package": "errors",
        "partial": "Right",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:just",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and equivalent to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "a -\u003e MaybeT m a",
        "fct-source": "src/Control-Error-Util.html#just",
        "fct-type": "function",
        "title": "just"
      },
      "index": {
        "description": "Analogous to Just and equivalent to return",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "just",
        "normalized": "a-\u003eMaybeT b a",
        "package": "errors",
        "partial": "",
        "signature": "a-\u003eMaybeT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:maybeT",
      "description": {
        "fct-descr": "\u003cp\u003eCase analysis for \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eUse the first argument if the \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e computation fails, otherwise apply\n    the function to the successful result.\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "m b -\u003e (a -\u003e m b) -\u003e MaybeT m a -\u003e m b",
        "fct-source": "src/Control-Error-Util.html#maybeT",
        "fct-type": "function",
        "title": "maybeT"
      },
      "index": {
        "description": "Case analysis for MaybeT Use the first argument if the MaybeT computation fails otherwise apply the function to the successful result",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "maybeT",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003eMaybeT a c-\u003ea b",
        "package": "errors",
        "partial": "",
        "signature": "m b-\u003e(a-\u003em b)-\u003eMaybeT m a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:note",
      "description": {
        "fct-descr": "\u003cp\u003eTag the \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e value of a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "a -\u003e Maybe b -\u003e Either a b",
        "fct-source": "src/Control-Error-Util.html#note",
        "fct-type": "function",
        "title": "note"
      },
      "index": {
        "description": "Tag the Nothing value of Maybe",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "note",
        "normalized": "a-\u003eMaybe b-\u003eEither a b",
        "package": "errors",
        "partial": "",
        "signature": "a-\u003eMaybe b-\u003eEither a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:noteT",
      "description": {
        "fct-descr": "\u003cp\u003eTag the \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e value of a \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "a -\u003e MaybeT m b -\u003e EitherT a m b",
        "fct-source": "src/Control-Error-Util.html#noteT",
        "fct-type": "function",
        "title": "noteT"
      },
      "index": {
        "description": "Tag the Nothing value of MaybeT",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "noteT",
        "normalized": "a-\u003eMaybeT b c-\u003eEitherT a b c",
        "package": "errors",
        "partial": "",
        "signature": "a-\u003eMaybeT m b-\u003eEitherT a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:nothing",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and equivalent to \u003ccode\u003emzero\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "MaybeT m a",
        "fct-source": "src/Control-Error-Util.html#nothing",
        "fct-type": "function",
        "title": "nothing"
      },
      "index": {
        "description": "Analogous to Nothing and equivalent to mzero",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "nothing",
        "normalized": "",
        "package": "errors",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:runAllE",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "Either e r",
        "fct-source": "src/Control-Error-Util.html#AllE",
        "fct-type": "function",
        "title": "runAllE"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "runAllE",
        "normalized": "",
        "package": "errors",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:runAnyE",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "Either e r",
        "fct-source": "src/Control-Error-Util.html#AnyE",
        "fct-type": "function",
        "title": "runAnyE"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "runAnyE",
        "normalized": "",
        "package": "errors",
        "partial": "Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:syncIO",
      "description": {
        "fct-descr": "\u003cp\u003eCatch all exceptions, except for asynchronous exceptions found in \u003ccode\u003ebase\u003c/code\u003e\n    and convert them to the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "IO a -\u003e EitherT SomeException m a",
        "fct-source": "src/Control-Error-Util.html#syncIO",
        "fct-type": "function",
        "title": "syncIO"
      },
      "index": {
        "description": "Catch all exceptions except for asynchronous exceptions found in base and convert them to the EitherT monad",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "syncIO",
        "normalized": "IO a-\u003eEitherT SomeException b a",
        "package": "errors",
        "partial": "IO",
        "signature": "IO a-\u003eEitherT SomeException m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error-Util.html#v:tryIO",
      "description": {
        "fct-descr": "\u003cp\u003eCatch \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003es and convert them to the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Control.Error.Util",
        "fct-package": "errors",
        "fct-signature": "IO a -\u003e EitherT IOException m a",
        "fct-source": "src/Control-Error-Util.html#tryIO",
        "fct-type": "function",
        "title": "tryIO"
      },
      "index": {
        "description": "Catch IOException and convert them to the EitherT monad",
        "hierarchy": "Control Error Util",
        "module": "Control.Error.Util",
        "name": "tryIO",
        "normalized": "IO a-\u003eEitherT IOException b a",
        "package": "errors",
        "partial": "IO",
        "signature": "IO a-\u003eEitherT IOException m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Control-Error.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImport this module in your code to access the entire library's\n    functionality:\n\u003c/p\u003e\u003cpre\u003e import Control.Error\n\u003c/pre\u003e\u003cp\u003eThis module exports the entire library as well as useful exports from other\n    standard error-handling libraries:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eControl.Error.Safe\u003c/a\u003e: Generalizes the \u003ccode\u003esafe\u003c/code\u003e library, including \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e,\n      \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003eMonadPlus\u003c/code\u003e variations on total functions\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eControl.Error.Script\u003c/a\u003e: Support for simple scripts that catch all errors\n      and transform them to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eControl.Error.Util\u003c/a\u003e: Utility functions and conversions between common\n      error-handling types\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eControl.Monad.Trans.Either\u003c/code\u003e: The \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e monad transformer\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eControl.Monad.Trans.Maybe\u003c/code\u003e: The \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e monad transformer\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eData.Either\u003c/code\u003e: \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e utility functions\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.EitherR\u003c/a\u003e: throw and catch functions, and their corresponding\n      \"success\" monads\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eData.Maybe\u003c/code\u003e: \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e utility functions\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eSafe\u003c/code\u003e: Total versions of partial Prelude functions\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module does not re-export partial functions from other libraries.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Error",
        "fct-package": "errors",
        "fct-signature": "module",
        "fct-source": "src/Control-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "Import this module in your code to access the entire library functionality import Control.Error This module exports the entire library as well as useful exports from other standard error-handling libraries Control.Error.Safe Generalizes the safe library including Either EitherT and MonadPlus variations on total functions Control.Error.Script Support for simple scripts that catch all errors and transform them to String Control.Error.Util Utility functions and conversions between common error-handling types Control.Monad.Trans.Either The EitherT monad transformer Control.Monad.Trans.Maybe The MaybeT monad transformer Data.Either Either utility functions Data.EitherR throw and catch functions and their corresponding success monads Data.Maybe Maybe utility functions Safe Total versions of partial Prelude functions This module does not re-export partial functions from other libraries",
        "hierarchy": "Control Error",
        "module": "Control.Error",
        "name": "Error",
        "normalized": "",
        "package": "errors",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides \u003ccode\u003e\u003ca\u003ethrowE\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecatchE\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.  These two\n    functions reside here because \u003ccode\u003e\u003ca\u003ethrowE\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecatchE\u003c/a\u003e\u003c/code\u003e correspond to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n    and (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e) for the flipped \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad: \u003ccode\u003e\u003ca\u003eEitherR\u003c/a\u003e\u003c/code\u003e.  Similarly, this\n    module defines \u003ccode\u003e\u003ca\u003ethrowT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecatchT\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e, which correspond to the\n    \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e operations for \u003ccode\u003e\u003ca\u003eEitherRT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThese throw and catch functions improve upon \u003ccode\u003eMonadError\u003c/code\u003e because:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ecatch\u003c/code\u003e is more general and allows you to change the left value's type\n\u003c/li\u003e\u003cli\u003e They are Haskell98\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMore advanced users can use \u003ccode\u003e\u003ca\u003eEitherR\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEitherRT\u003c/a\u003e\u003c/code\u003e to program in an\n    entirely symmetric \"success monad\" where exceptional results are the norm\n    and successful results terminate the computation.  This allows you to chain\n    error-handlers using \u003ccode\u003edo\u003c/code\u003e notation and pass around exceptional values of\n    varying types until you can finally recover from the error:\n\u003c/p\u003e\u003cpre\u003e runEitherRT $ do\n     e2   \u003c- ioExceptionHandler e1\n     bool \u003c- arithmeticExceptionhandler e2\n     when bool $ lift $ putStrLn \"DEBUG: Arithmetic handler did something\"\n\u003c/pre\u003e\u003cp\u003eIf any of the above error handlers \u003ccode\u003e\u003ca\u003esucceed\u003c/a\u003e\u003c/code\u003e, no other handlers are tried.\n\u003c/p\u003e\u003cp\u003eIf you choose not to typefully distinguish between the error and sucess\n    monad, then use \u003ccode\u003e\u003ca\u003eflipE\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eflipET\u003c/a\u003e\u003c/code\u003e, which swap the type variables without\n    changing the type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "module",
        "fct-source": "src/Data-EitherR.html",
        "fct-type": "module",
        "title": "EitherR"
      },
      "index": {
        "description": "This module provides throwE and catchE for Either These two functions reside here because throwE and catchE correspond to return and for the flipped Either monad EitherR Similarly this module defines throwT and catchT for EitherT which correspond to the Monad operations for EitherRT These throw and catch functions improve upon MonadError because catch is more general and allows you to change the left value type They are Haskell98 More advanced users can use EitherR and EitherRT to program in an entirely symmetric success monad where exceptional results are the norm and successful results terminate the computation This allows you to chain error-handlers using do notation and pass around exceptional values of varying types until you can finally recover from the error runEitherRT do e2 ioExceptionHandler e1 bool arithmeticExceptionhandler e2 when bool lift putStrLn DEBUG Arithmetic handler did something If any of the above error handlers succeed no other handlers are tried If you choose not to typefully distinguish between the error and sucess monad then use flipE and flipET which swap the type variables without changing the type",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "EitherR",
        "normalized": "",
        "package": "errors",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#t:EitherR",
      "description": {
        "fct-descr": "\u003cp\u003eIf \"\u003ccode\u003eEither e r\u003c/code\u003e\" is the error monad, then \"\u003ccode\u003eEitherR r e\u003c/code\u003e\" is the\n    corresponding success monad, where:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003ethrowE\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003ecatchE\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Successful results abort the computation\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "newtype",
        "fct-source": "src/Data-EitherR.html#EitherR",
        "fct-type": "newtype",
        "title": "EitherR"
      },
      "index": {
        "description": "If Either is the error monad then EitherR is the corresponding success monad where return is throwE is catchE Successful results abort the computation",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "EitherR",
        "normalized": "",
        "package": "errors",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#t:EitherRT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEitherR\u003c/a\u003e\u003c/code\u003e converted into a monad transformer\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "newtype",
        "fct-source": "src/Data-EitherR.html#EitherRT",
        "fct-type": "newtype",
        "title": "EitherRT"
      },
      "index": {
        "description": "EitherR converted into monad transformer",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "EitherRT",
        "normalized": "",
        "package": "errors",
        "partial": "Either RT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:EitherR",
      "description": {
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "EitherR",
        "fct-source": "src/Data-EitherR.html#EitherR",
        "fct-type": "function",
        "title": "EitherR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "EitherR",
        "normalized": "",
        "package": "errors",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:EitherRT",
      "description": {
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "EitherRT",
        "fct-source": "src/Data-EitherR.html#EitherRT",
        "fct-type": "function",
        "title": "EitherRT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "EitherRT",
        "normalized": "",
        "package": "errors",
        "partial": "Either RT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:catchE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecatchE\u003c/a\u003e\u003c/code\u003e in the error monad corresponds to (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e) in the success monad\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "Either a r -\u003e (a -\u003e Either b r) -\u003e Either b r",
        "fct-source": "src/Data-EitherR.html#catchE",
        "fct-type": "function",
        "title": "catchE"
      },
      "index": {
        "description": "catchE in the error monad corresponds to in the success monad",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "catchE",
        "normalized": "Either a b-\u003e(a-\u003eEither c b)-\u003eEither c b",
        "package": "errors",
        "partial": "",
        "signature": "Either a r-\u003e(a-\u003eEither b r)-\u003eEither b r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:catchT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecatchT\u003c/a\u003e\u003c/code\u003e in the error monad corresponds to (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e) in the success monad\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "EitherT a m r -\u003e (a -\u003e EitherT b m r) -\u003e EitherT b m r",
        "fct-source": "src/Data-EitherR.html#catchT",
        "fct-type": "function",
        "title": "catchT"
      },
      "index": {
        "description": "catchT in the error monad corresponds to in the success monad",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "catchT",
        "normalized": "EitherT a b c-\u003e(a-\u003eEitherT d b c)-\u003eEitherT d b c",
        "package": "errors",
        "partial": "",
        "signature": "EitherT a m r-\u003e(a-\u003eEitherT b m r)-\u003eEitherT b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:flipE",
      "description": {
        "fct-descr": "\u003cp\u003eFlip the type variables of \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "Either a b -\u003e Either b a",
        "fct-source": "src/Data-EitherR.html#flipE",
        "fct-type": "function",
        "title": "flipE"
      },
      "index": {
        "description": "Flip the type variables of Either",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "flipE",
        "normalized": "Either a b-\u003eEither b a",
        "package": "errors",
        "partial": "",
        "signature": "Either a b-\u003eEither b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:flipET",
      "description": {
        "fct-descr": "\u003cp\u003eFlip the type variables of an \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "EitherT a m b -\u003e EitherT b m a",
        "fct-source": "src/Data-EitherR.html#flipET",
        "fct-type": "function",
        "title": "flipET"
      },
      "index": {
        "description": "Flip the type variables of an EitherT",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "flipET",
        "normalized": "EitherT a b c-\u003eEitherT c b a",
        "package": "errors",
        "partial": "ET",
        "signature": "EitherT a m b-\u003eEitherT b m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:fmapL",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e value of an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "(a -\u003e b) -\u003e Either a r -\u003e Either b r",
        "fct-source": "src/Data-EitherR.html#fmapL",
        "fct-type": "function",
        "title": "fmapL"
      },
      "index": {
        "description": "Map function over the Left value of an Either",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "fmapL",
        "normalized": "(a-\u003eb)-\u003eEither a c-\u003eEither b c",
        "package": "errors",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eEither a r-\u003eEither b r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:fmapLT",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e value of an \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "(a -\u003e b) -\u003e EitherT a m r -\u003e EitherT b m r",
        "fct-source": "src/Data-EitherR.html#fmapLT",
        "fct-type": "function",
        "title": "fmapLT"
      },
      "index": {
        "description": "Map function over the Left value of an EitherT",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "fmapLT",
        "normalized": "(a-\u003eb)-\u003eEitherT a c d-\u003eEitherT b c d",
        "package": "errors",
        "partial": "LT",
        "signature": "(a-\u003eb)-\u003eEitherT a m r-\u003eEitherT b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:handleE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecatchE\u003c/a\u003e\u003c/code\u003e with the arguments flipped\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "(a -\u003e Either b r) -\u003e Either a r -\u003e Either b r",
        "fct-source": "src/Data-EitherR.html#handleE",
        "fct-type": "function",
        "title": "handleE"
      },
      "index": {
        "description": "catchE with the arguments flipped",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "handleE",
        "normalized": "(a-\u003eEither b c)-\u003eEither a c-\u003eEither b c",
        "package": "errors",
        "partial": "",
        "signature": "(a-\u003eEither b r)-\u003eEither a r-\u003eEither b r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:handleT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecatchT\u003c/a\u003e\u003c/code\u003e with the arguments flipped\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "(a -\u003e EitherT b m r) -\u003e EitherT a m r -\u003e EitherT b m r",
        "fct-source": "src/Data-EitherR.html#handleT",
        "fct-type": "function",
        "title": "handleT"
      },
      "index": {
        "description": "catchT with the arguments flipped",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "handleT",
        "normalized": "(a-\u003eEitherT b c d)-\u003eEitherT a c d-\u003eEitherT b c d",
        "package": "errors",
        "partial": "",
        "signature": "(a-\u003eEitherT b m r)-\u003eEitherT a m r-\u003eEitherT b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:runEitherR",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "Either e r",
        "fct-source": "src/Data-EitherR.html#EitherR",
        "fct-type": "function",
        "title": "runEitherR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "runEitherR",
        "normalized": "",
        "package": "errors",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:runEitherRT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "EitherT e m r",
        "fct-source": "src/Data-EitherR.html#EitherRT",
        "fct-type": "function",
        "title": "runEitherRT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "runEitherRT",
        "normalized": "",
        "package": "errors",
        "partial": "Either RT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:succeed",
      "description": {
        "fct-descr": "\u003cp\u003eComplete error handling, returning a result\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "r -\u003e EitherR r e",
        "fct-source": "src/Data-EitherR.html#succeed",
        "fct-type": "function",
        "title": "succeed"
      },
      "index": {
        "description": "Complete error handling returning result",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "succeed",
        "normalized": "a-\u003eEitherR a b",
        "package": "errors",
        "partial": "",
        "signature": "r-\u003eEitherR r e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:succeedT",
      "description": {
        "fct-descr": "\u003cp\u003eComplete error handling, returning a result\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "r -\u003e EitherRT r m e",
        "fct-source": "src/Data-EitherR.html#succeedT",
        "fct-type": "function",
        "title": "succeedT"
      },
      "index": {
        "description": "Complete error handling returning result",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "succeedT",
        "normalized": "a-\u003eEitherRT a b c",
        "package": "errors",
        "partial": "",
        "signature": "r-\u003eEitherRT r m e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:throwE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ethrowE\u003c/a\u003e\u003c/code\u003e in the error monad corresponds to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e in the success monad\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "e -\u003e Either e r",
        "fct-source": "src/Data-EitherR.html#throwE",
        "fct-type": "function",
        "title": "throwE"
      },
      "index": {
        "description": "throwE in the error monad corresponds to return in the success monad",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "throwE",
        "normalized": "a-\u003eEither a b",
        "package": "errors",
        "partial": "",
        "signature": "e-\u003eEither e r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/errors/docs/Data-EitherR.html#v:throwT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ethrowT\u003c/a\u003e\u003c/code\u003e in the error monad corresponds to \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e in the success monad\n\u003c/p\u003e",
        "fct-module": "Data.EitherR",
        "fct-package": "errors",
        "fct-signature": "e -\u003e EitherT e m r",
        "fct-source": "src/Data-EitherR.html#throwT",
        "fct-type": "function",
        "title": "throwT"
      },
      "index": {
        "description": "throwT in the error monad corresponds to return in the success monad",
        "hierarchy": "Data EitherR",
        "module": "Data.EitherR",
        "name": "throwT",
        "normalized": "a-\u003eEitherT a b c",
        "package": "errors",
        "partial": "",
        "signature": "e-\u003eEitherT e m r"
      }
    }
  }
]