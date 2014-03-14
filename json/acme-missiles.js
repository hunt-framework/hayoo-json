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
        "word": "acme-missiles"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Missiles.STM",
          "name": "STM",
          "package": "acme-missiles",
          "source": "src/Acme-Missiles-STM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Acme Missiles STM",
          "module": "Acme.Missiles.STM",
          "name": "STM",
          "package": "acme-missiles",
          "partial": "STM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-missiles/docs/Acme-Missiles-STM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaunch missiles within an \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e computation.  Even if the memory\n transaction is retried, only one salvo of missiles will be launched.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eimport Acme.Missiles\nimport Control.Concurrent\nimport Control.Concurrent.STM\n\nmain :: IO ()\nmain = withMissilesDo $ do\n    xv \u003c- atomically $ newTVar (2 :: Int)\n    yv \u003c- atomically $ newTVar (1 :: Int)\n    atomically $ do\n        x \u003c- readTVar xv\n        y \u003c- readTVar yv\n        if x \u003e y\n            then launchMissilesSTM\n            else return ()\n    threadDelay 100000\n\u003c/pre\u003e",
          "module": "Acme.Missiles.STM",
          "name": "launchMissilesSTM",
          "package": "acme-missiles",
          "signature": "STM ()",
          "source": "src/Acme-Missiles-STM.html#launchMissilesSTM",
          "type": "function"
        },
        "index": {
          "description": "Launch missiles within an STM computation Even if the memory transaction is retried only one salvo of missiles will be launched Example import Acme.Missiles import Control.Concurrent import Control.Concurrent.STM main IO main withMissilesDo do xv atomically newTVar Int yv atomically newTVar Int atomically do readTVar xv readTVar yv if then launchMissilesSTM else return threadDelay",
          "hierarchy": "Acme Missiles STM",
          "module": "Acme.Missiles.STM",
          "name": "launchMissilesSTM",
          "normalized": "STM()",
          "package": "acme-missiles",
          "partial": "Missiles STM",
          "signature": "STM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-missiles/docs/Acme-Missiles-STM.html#v:launchMissilesSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform initialization needed to launch missiles in the \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Acme.Missiles.STM",
          "name": "withMissilesDo",
          "package": "acme-missiles",
          "signature": "IO a -\u003e IO a",
          "source": "src/Acme-Missiles-STM.html#withMissilesDo",
          "type": "function"
        },
        "index": {
          "description": "Perform initialization needed to launch missiles in the STM monad",
          "hierarchy": "Acme Missiles STM",
          "module": "Acme.Missiles.STM",
          "name": "withMissilesDo",
          "normalized": "IO a-\u003eIO a",
          "package": "acme-missiles",
          "partial": "Missiles Do",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-missiles/docs/Acme-Missiles-STM.html#v:withMissilesDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elaunchMissiles\u003c/a\u003e\u003c/code\u003e action, as mentioned in:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eBeautiful concurrency\u003c/em\u003e, by Simon Peyton Jones, to appear in\n     \"Beautiful code\", ed Greg Wilson, O'Reilly 2007.\n     \u003ca\u003ehttp://research.microsoft.com/en-us/um/people/simonpj/papers/stm/index.htm#beautiful\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Acme.Missiles",
          "name": "Missiles",
          "package": "acme-missiles",
          "source": "src/Acme-Missiles.html",
          "type": "module"
        },
        "index": {
          "description": "The launchMissiles action as mentioned in Beautiful concurrency by Simon Peyton Jones to appear in Beautiful code ed Greg Wilson Reilly http research.microsoft.com en-us um people simonpj papers stm index.htm beautiful",
          "hierarchy": "Acme Missiles",
          "module": "Acme.Missiles",
          "name": "Missiles",
          "package": "acme-missiles",
          "partial": "Missiles",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-missiles/docs/Acme-Missiles.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCause serious international side effects.\n\u003c/p\u003e",
          "module": "Acme.Missiles",
          "name": "launchMissiles",
          "package": "acme-missiles",
          "signature": "IO ()",
          "source": "src/Acme-Missiles.html#launchMissiles",
          "type": "function"
        },
        "index": {
          "description": "Cause serious international side effects",
          "hierarchy": "Acme Missiles",
          "module": "Acme.Missiles",
          "name": "launchMissiles",
          "normalized": "IO()",
          "package": "acme-missiles",
          "partial": "Missiles",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-missiles/docs/Acme-Missiles.html#v:launchMissiles"
      }
    }
  ]
]