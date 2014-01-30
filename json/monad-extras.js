[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#",
      "description": {
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Extra.html",
        "fct-type": "module",
        "title": "Extra"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "Extra",
        "normalized": "",
        "package": "monad-extras",
        "partial": "Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:atomicallyM",
      "description": {
        "fct-descr": "\u003cp\u003eA transformer-friendly version of \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "STM a -\u003e m a",
        "fct-source": "src/Control-Monad-Extra.html#atomicallyM",
        "fct-type": "function",
        "title": "atomicallyM"
      },
      "index": {
        "description": "transformer-friendly version of atomically",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "atomicallyM",
        "normalized": "STM a-\u003eb a",
        "package": "monad-extras",
        "partial": "",
        "signature": "STM a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:bind",
      "description": {
        "fct-descr": "\u003cp\u003eFunction name for \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e, as \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-Monad-Extra.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "Function name for as fmap is to",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "bind",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
        "package": "monad-extras",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:discard",
      "description": {
        "fct-descr": "\u003cp\u003eDiscards a value\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Control-Monad-Extra.html#discard",
        "fct-type": "function",
        "title": "discard"
      },
      "index": {
        "description": "Discards value",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "discard",
        "normalized": "a-\u003eb()",
        "package": "monad-extras",
        "partial": "",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:doCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function if all you want to use is\n   \u003ccode\u003e\u003ca\u003ecallCC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "((r -\u003e ContT r m b) -\u003e ContT r m r) -\u003e m r",
        "fct-source": "src/Control-Monad-Extra.html#doCallCC",
        "fct-type": "function",
        "title": "doCallCC"
      },
      "index": {
        "description": "Convenience function if all you want to use is callCC",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "doCallCC",
        "normalized": "((a-\u003eContT a b c)-\u003eContT a b a)-\u003eb a",
        "package": "monad-extras",
        "partial": "Call CC",
        "signature": "((r-\u003eContT r m b)-\u003eContT r m r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:embed",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a transformer (Kleisli) arrow as an arrow in the base monad\n   returning a mutated transformer state.  If you do not want the\n   transformation and your base monad is IO, use \u003ccode\u003e\u003ca\u003eembedIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e m b) -\u003e m (a -\u003e base (StM m b))",
        "fct-source": "src/Control-Monad-Extra.html#embed",
        "fct-type": "function",
        "title": "embed"
      },
      "index": {
        "description": "Embed transformer Kleisli arrow as an arrow in the base monad returning mutated transformer state If you do not want the transformation and your base monad is IO use embedIO",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "embed",
        "normalized": "(a-\u003eb c)-\u003eb(a-\u003ed(StM b c))",
        "package": "monad-extras",
        "partial": "",
        "signature": "(a-\u003em b)-\u003em(a-\u003ebase(StM m b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:embedIO",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an IO action that closes over the current monad transformer, but\n   throws away any residual effects within that transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e m b) -\u003e m (a -\u003e IO b)",
        "fct-source": "src/Control-Monad-Extra.html#embedIO",
        "fct-type": "function",
        "title": "embedIO"
      },
      "index": {
        "description": "Return an IO action that closes over the current monad transformer but throws away any residual effects within that transformer",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "embedIO",
        "normalized": "(a-\u003eb c)-\u003eb(a-\u003eIO c)",
        "package": "monad-extras",
        "partial": "IO",
        "signature": "(a-\u003em b)-\u003em(a-\u003eIO b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:embedIO2",
      "description": {
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e b -\u003e m r) -\u003e m (a -\u003e b -\u003e IO r)",
        "fct-source": "src/Control-Monad-Extra.html#embedIO2",
        "fct-type": "function",
        "title": "embedIO2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "embedIO2",
        "normalized": "(a-\u003eb-\u003ec d)-\u003ec(a-\u003eb-\u003eIO d)",
        "package": "monad-extras",
        "partial": "IO",
        "signature": "(a-\u003eb-\u003em r)-\u003em(a-\u003eb-\u003eIO r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:embedIO3",
      "description": {
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e m r) -\u003e m (a -\u003e b -\u003e c -\u003e IO r)",
        "fct-source": "src/Control-Monad-Extra.html#embedIO3",
        "fct-type": "function",
        "title": "embedIO3"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "embedIO3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed e)-\u003ed(a-\u003eb-\u003ec-\u003eIO e)",
        "package": "monad-extras",
        "partial": "IO",
        "signature": "(a-\u003eb-\u003ec-\u003em r)-\u003em(a-\u003eb-\u003ec-\u003eIO r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:embedIO4",
      "description": {
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e m r) -\u003e m (a -\u003e b -\u003e c -\u003e d -\u003e IO r)",
        "fct-source": "src/Control-Monad-Extra.html#embedIO4",
        "fct-type": "function",
        "title": "embedIO4"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "embedIO4",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee f)-\u003ee(a-\u003eb-\u003ec-\u003ed-\u003eIO f)",
        "package": "monad-extras",
        "partial": "IO",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003em r)-\u003em(a-\u003eb-\u003ec-\u003ed-\u003eIO r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:embedIO5",
      "description": {
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e m r) -\u003e m (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e IO r)",
        "fct-source": "src/Control-Monad-Extra.html#embedIO5",
        "fct-type": "function",
        "title": "embedIO5"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "embedIO5",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef g)-\u003ef(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003eIO g)",
        "package": "monad-extras",
        "partial": "IO",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003em r)-\u003em(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003eIO r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:embedIO6",
      "description": {
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e m r) -\u003e m (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e IO r)",
        "fct-source": "src/Control-Monad-Extra.html#embedIO6",
        "fct-type": "function",
        "title": "embedIO6"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "embedIO6",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg h)-\u003eg(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eIO h)",
        "package": "monad-extras",
        "partial": "IO",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003em r)-\u003em(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eIO r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:embedIO7",
      "description": {
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e m r) -\u003e m (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e IO r)",
        "fct-source": "src/Control-Monad-Extra.html#embedIO7",
        "fct-type": "function",
        "title": "embedIO7"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "embedIO7",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh i)-\u003eh(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eIO i)",
        "package": "monad-extras",
        "partial": "IO",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003em r)-\u003em(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eIO r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:embedIO8",
      "description": {
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e m r) -\u003e m (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e IO r)",
        "fct-source": "src/Control-Monad-Extra.html#embedIO8",
        "fct-type": "function",
        "title": "embedIO8"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "embedIO8",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei j)-\u003ei(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003eIO j)",
        "package": "monad-extras",
        "partial": "IO",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003em r)-\u003em(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003eIO r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:embedIO9",
      "description": {
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i -\u003e m r) -\u003e m (a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i -\u003e IO r)",
        "fct-source": "src/Control-Monad-Extra.html#embedIO9",
        "fct-type": "function",
        "title": "embedIO9"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "embedIO9",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei-\u003ej k)-\u003ej(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei-\u003eIO k)",
        "package": "monad-extras",
        "partial": "IO",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei-\u003em r)-\u003em(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei-\u003eIO r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:io",
      "description": {
        "fct-descr": "\u003cp\u003eShort-hand for \u003ccode\u003eliftIO\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/Control-Monad-Extra.html#io",
        "fct-type": "function",
        "title": "io"
      },
      "index": {
        "description": "Short-hand for liftIO",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "io",
        "normalized": "IO a-\u003eb a",
        "package": "monad-extras",
        "partial": "",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a continuation that one can jump back to within \u003ccode\u003e\u003ca\u003eContT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eflip runContT return $ do { k \u003c- label; ...; k }\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "ContT r m (ContT r m a)",
        "fct-source": "src/Control-Monad-Extra.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "Return continuation that one can jump back to within ContT flip runContT return do label",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "label",
        "normalized": "",
        "package": "monad-extras",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:liftMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value into the \u003ccode\u003eMaybeT\u003c/code\u003e monad transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "Maybe a -\u003e m a",
        "fct-source": "src/Control-Monad-Extra.html#liftMaybe",
        "fct-type": "function",
        "title": "liftMaybe"
      },
      "index": {
        "description": "Lift Maybe value into the MaybeT monad transformer",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "liftMaybe",
        "normalized": "Maybe a-\u003eb a",
        "package": "monad-extras",
        "partial": "Maybe",
        "signature": "Maybe a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:mapMaybeM",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic version of \u003ccode\u003emapMaybe :: (a -\u003e Maybe b) -\u003e [a] -\u003e [b]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e m (Maybe b)) -\u003e [a] -\u003e m [b]",
        "fct-source": "src/Control-Monad-Extra.html#mapMaybeM",
        "fct-type": "function",
        "title": "mapMaybeM"
      },
      "index": {
        "description": "monadic version of mapMaybe Maybe",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "mapMaybeM",
        "normalized": "(a-\u003eb(Maybe c))-\u003e[a]-\u003eb[c]",
        "package": "monad-extras",
        "partial": "Maybe",
        "signature": "(a-\u003em(Maybe b))-\u003e[a]-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:nom",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eom\u003c/a\u003e\u003c/code\u003e which changes the roles of the 2nd and 3rd arguments.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enom mapM_ print $ return [True]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ print =\u003c\u003c return [True]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e a -\u003e m b -\u003e m c",
        "fct-source": "src/Control-Monad-Extra.html#nom",
        "fct-type": "function",
        "title": "nom"
      },
      "index": {
        "description": "Variant of om which changes the roles of the nd and rd arguments nom mapM print return True True mapM print return True True",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "nom",
        "normalized": "(a-\u003eb-\u003ec d)-\u003ea-\u003ec b-\u003ec d",
        "package": "monad-extras",
        "partial": "",
        "signature": "(a-\u003eb-\u003em c)-\u003ea-\u003em b-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:obvious",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003epure ()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "f ()",
        "fct-source": "src/Control-Monad-Extra.html#obvious",
        "fct-type": "function",
        "title": "obvious"
      },
      "index": {
        "description": "Synonym for pure",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "obvious",
        "normalized": "a()",
        "package": "monad-extras",
        "partial": "",
        "signature": "f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:om",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator for working with monadic values:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eom when (return True) $ print \"Hello\"\n\u003c/code\u003e\u003c/strong\u003e\"Hello\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ereturn True \u003e\u003e= flip when (print \"Hello\")\n\u003c/code\u003e\u003c/strong\u003e\"Hello\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eom forM_ (return [True]) print\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eflip forM_ print =\u003c\u003c return [True]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ print =\u003c\u003c return [True]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cp\u003eSubsumes the need for individual functions for \u003ccode\u003ewhenM\u003c/code\u003e, \u003ccode\u003eunlessM\u003c/code\u003e, etc.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e m a -\u003e b -\u003e m c",
        "fct-source": "src/Control-Monad-Extra.html#om",
        "fct-type": "function",
        "title": "om"
      },
      "index": {
        "description": "Combinator for working with monadic values om when return True print Hello Hello return True flip when print Hello Hello om forM return True print True flip forM print return True True mapM print return True True Subsumes the need for individual functions for whenM unlessM etc",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "om",
        "normalized": "(a-\u003eb-\u003ec d)-\u003ec a-\u003eb-\u003ec d",
        "package": "monad-extras",
        "partial": "",
        "signature": "(a-\u003eb-\u003em c)-\u003em a-\u003eb-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:sequenceUntil",
      "description": {
        "fct-descr": "\u003cp\u003eDraw monadic actions from a list until one of them yields a value\n   satisfying the predicate, and then return all the values up to and\n   including the first that succeeds in a list within that monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e Bool) -\u003e [m a] -\u003e m [a]",
        "fct-source": "src/Control-Monad-Extra.html#sequenceUntil",
        "fct-type": "function",
        "title": "sequenceUntil"
      },
      "index": {
        "description": "Draw monadic actions from list until one of them yields value satisfying the predicate and then return all the values up to and including the first that succeeds in list within that monad",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "sequenceUntil",
        "normalized": "(a-\u003eBool)-\u003e[b a]-\u003eb[a]",
        "package": "monad-extras",
        "partial": "Until",
        "signature": "(a-\u003eBool)-\u003e[m a]-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:sequenceWhile",
      "description": {
        "fct-descr": "\u003cp\u003eDraw monadic actions from a list until one of them yields a value\n   failing the predicate, and then return all the passing values\n   (discarding the final, failing value) in a list within that\n   monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "(a -\u003e Bool) -\u003e [m a] -\u003e m [a]",
        "fct-source": "src/Control-Monad-Extra.html#sequenceWhile",
        "fct-type": "function",
        "title": "sequenceWhile"
      },
      "index": {
        "description": "Draw monadic actions from list until one of them yields value failing the predicate and then return all the passing values discarding the final failing value in list within that monad",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "sequenceWhile",
        "normalized": "(a-\u003eBool)-\u003e[b a]-\u003eb[a]",
        "package": "monad-extras",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003e[m a]-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-extras/docs/Control-Monad-Extra.html#v:skip",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003ereturn ()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Extra",
        "fct-package": "monad-extras",
        "fct-signature": "m ()",
        "fct-source": "src/Control-Monad-Extra.html#skip",
        "fct-type": "function",
        "title": "skip"
      },
      "index": {
        "description": "Synonym for return",
        "hierarchy": "Control Monad Extra",
        "module": "Control.Monad.Extra",
        "name": "skip",
        "normalized": "a()",
        "package": "monad-extras",
        "partial": "",
        "signature": "m()"
      }
    }
  }
]