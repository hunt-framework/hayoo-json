[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acme-missiles/docs/Acme-Missiles-STM.html#",
      "description": {
        "fct-module": "Acme.Missiles.STM",
        "fct-package": "acme-missiles",
        "fct-signature": "module",
        "fct-source": "src/Acme-Missiles-STM.html",
        "fct-type": "module",
        "title": "STM"
      },
      "index": {
        "description": "",
        "hierarchy": "Acme Missiles STM",
        "module": "Acme.Missiles.STM",
        "name": "STM",
        "normalized": "",
        "package": "acme-missiles",
        "partial": "STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acme-missiles/docs/Acme-Missiles-STM.html#v:launchMissilesSTM",
      "description": {
        "fct-descr": "\u003cp\u003eLaunch missiles within an \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e computation.  Even if the memory\n transaction is retried, only one salvo of missiles will be launched.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eimport Acme.Missiles\nimport Control.Concurrent\nimport Control.Concurrent.STM\n\nmain :: IO ()\nmain = withMissilesDo $ do\n    xv \u003c- atomically $ newTVar (2 :: Int)\n    yv \u003c- atomically $ newTVar (1 :: Int)\n    atomically $ do\n        x \u003c- readTVar xv\n        y \u003c- readTVar yv\n        if x \u003e y\n            then launchMissilesSTM\n            else return ()\n    threadDelay 100000\n\u003c/pre\u003e",
        "fct-module": "Acme.Missiles.STM",
        "fct-package": "acme-missiles",
        "fct-signature": "STM ()",
        "fct-source": "src/Acme-Missiles-STM.html#launchMissilesSTM",
        "fct-type": "function",
        "title": "launchMissilesSTM"
      },
      "index": {
        "description": "Launch missiles within an STM computation Even if the memory transaction is retried only one salvo of missiles will be launched Example import Acme.Missiles import Control.Concurrent import Control.Concurrent.STM main IO main withMissilesDo do xv atomically newTVar Int yv atomically newTVar Int atomically do readTVar xv readTVar yv if then launchMissilesSTM else return threadDelay",
        "hierarchy": "Acme Missiles STM",
        "module": "Acme.Missiles.STM",
        "name": "launchMissilesSTM",
        "normalized": "STM()",
        "package": "acme-missiles",
        "partial": "Missiles STM",
        "signature": "STM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acme-missiles/docs/Acme-Missiles-STM.html#v:withMissilesDo",
      "description": {
        "fct-descr": "\u003cp\u003ePerform initialization needed to launch missiles in the \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Acme.Missiles.STM",
        "fct-package": "acme-missiles",
        "fct-signature": "IO a -\u003e IO a",
        "fct-source": "src/Acme-Missiles-STM.html#withMissilesDo",
        "fct-type": "function",
        "title": "withMissilesDo"
      },
      "index": {
        "description": "Perform initialization needed to launch missiles in the STM monad",
        "hierarchy": "Acme Missiles STM",
        "module": "Acme.Missiles.STM",
        "name": "withMissilesDo",
        "normalized": "IO a-\u003eIO a",
        "package": "acme-missiles",
        "partial": "Missiles Do",
        "signature": "IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acme-missiles/docs/Acme-Missiles.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elaunchMissiles\u003c/a\u003e\u003c/code\u003e action, as mentioned in:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eBeautiful concurrency\u003c/em\u003e, by Simon Peyton Jones, to appear in\n     \"Beautiful code\", ed Greg Wilson, O'Reilly 2007.\n     \u003ca\u003ehttp://research.microsoft.com/en-us/um/people/simonpj/papers/stm/index.htm#beautiful\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Acme.Missiles",
        "fct-package": "acme-missiles",
        "fct-signature": "module",
        "fct-source": "src/Acme-Missiles.html",
        "fct-type": "module",
        "title": "Missiles"
      },
      "index": {
        "description": "The launchMissiles action as mentioned in Beautiful concurrency by Simon Peyton Jones to appear in Beautiful code ed Greg Wilson Reilly http research.microsoft.com en-us um people simonpj papers stm index.htm beautiful",
        "hierarchy": "Acme Missiles",
        "module": "Acme.Missiles",
        "name": "Missiles",
        "normalized": "",
        "package": "acme-missiles",
        "partial": "Missiles",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/acme-missiles/docs/Acme-Missiles.html#v:launchMissiles",
      "description": {
        "fct-descr": "\u003cp\u003eCause serious international side effects.\n\u003c/p\u003e",
        "fct-module": "Acme.Missiles",
        "fct-package": "acme-missiles",
        "fct-signature": "IO ()",
        "fct-source": "src/Acme-Missiles.html#launchMissiles",
        "fct-type": "function",
        "title": "launchMissiles"
      },
      "index": {
        "description": "Cause serious international side effects",
        "hierarchy": "Acme Missiles",
        "module": "Acme.Missiles",
        "name": "launchMissiles",
        "normalized": "IO()",
        "package": "acme-missiles",
        "partial": "Missiles",
        "signature": "IO()"
      }
    }
  }
]