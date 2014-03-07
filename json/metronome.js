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
        "word": "metronome"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnifying functions of TVar's and TChans in STM and IO via atomically.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STMOrIO",
          "name": "STMOrIO",
          "package": "metronome",
          "source": "src/Control-Concurrent-STMOrIO.html",
          "type": "module"
        },
        "index": {
          "description": "Unifying functions of TVar and TChans in STM and IO via atomically",
          "hierarchy": "Control Concurrent STMOrIO",
          "module": "Control.Concurrent.STMOrIO",
          "name": "STMOrIO",
          "package": "metronome",
          "partial": "STMOr IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/Control-Concurrent-STMOrIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclass to uniform reading and writing \n\u003c/p\u003e",
          "module": "Control.Concurrent.STMOrIO",
          "name": "RW",
          "package": "metronome",
          "source": "src/Control-Concurrent-STMOrIO.html#RW",
          "type": "class"
        },
        "index": {
          "description": "class to uniform reading and writing",
          "hierarchy": "Control Concurrent STMOrIO",
          "module": "Control.Concurrent.STMOrIO",
          "name": "RW",
          "package": "metronome",
          "partial": "RW",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/Control-Concurrent-STMOrIO.html#t:RW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euniforming class for STM or IO\n\u003c/p\u003e",
          "module": "Control.Concurrent.STMOrIO",
          "name": "STMOrIO",
          "package": "metronome",
          "source": "src/Control-Concurrent-STMOrIO.html#STMOrIO",
          "type": "class"
        },
        "index": {
          "description": "uniforming class for STM or IO",
          "hierarchy": "Control Concurrent STMOrIO",
          "module": "Control.Concurrent.STMOrIO",
          "name": "STMOrIO",
          "package": "metronome",
          "partial": "STMOr IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/Control-Concurrent-STMOrIO.html#t:STMOrIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enew TChan\n\u003c/p\u003e",
          "module": "Control.Concurrent.STMOrIO",
          "name": "chan",
          "package": "metronome",
          "signature": "a-\u003e m (TChan a)",
          "type": "function"
        },
        "index": {
          "description": "new TChan",
          "hierarchy": "Control Concurrent STMOrIO",
          "module": "Control.Concurrent.STMOrIO",
          "name": "chan",
          "normalized": "a-\u003eb(TChan a)",
          "package": "metronome",
          "signature": "a-\u003em(TChan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/Control-Concurrent-STMOrIO.html#v:chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodify a cell z under STM or IO\n\u003c/p\u003e",
          "module": "Control.Concurrent.STMOrIO",
          "name": "md",
          "package": "metronome",
          "signature": "z a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Concurrent-STMOrIO.html#md",
          "type": "function"
        },
        "index": {
          "description": "modify cell under STM or IO",
          "hierarchy": "Control Concurrent STMOrIO",
          "module": "Control.Concurrent.STMOrIO",
          "name": "md",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "metronome",
          "signature": "z a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/Control-Concurrent-STMOrIO.html#v:md"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a z\n\u003c/p\u003e",
          "module": "Control.Concurrent.STMOrIO",
          "name": "rd",
          "package": "metronome",
          "signature": "z a -\u003e m a",
          "source": "src/Control-Concurrent-STMOrIO.html#rd",
          "type": "method"
        },
        "index": {
          "description": "read",
          "hierarchy": "Control Concurrent STMOrIO",
          "module": "Control.Concurrent.STMOrIO",
          "name": "rd",
          "normalized": "a b-\u003ec b",
          "package": "metronome",
          "signature": "z a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/Control-Concurrent-STMOrIO.html#v:rd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STMOrIO",
          "name": "stmorio",
          "package": "metronome",
          "signature": "STM a -\u003e m a",
          "source": "src/Control-Concurrent-STMOrIO.html#stmorio",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent STMOrIO",
          "module": "Control.Concurrent.STMOrIO",
          "name": "stmorio",
          "normalized": "STM a-\u003eb a",
          "package": "metronome",
          "signature": "STM a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/Control-Concurrent-STMOrIO.html#v:stmorio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enew TVar \n\u003c/p\u003e",
          "module": "Control.Concurrent.STMOrIO",
          "name": "var",
          "package": "metronome",
          "signature": "a-\u003e m (TVar a)",
          "type": "function"
        },
        "index": {
          "description": "new TVar",
          "hierarchy": "Control Concurrent STMOrIO",
          "module": "Control.Concurrent.STMOrIO",
          "name": "var",
          "normalized": "a-\u003eb(TVar a)",
          "package": "metronome",
          "signature": "a-\u003em(TVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/Control-Concurrent-STMOrIO.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodify a z\n\u003c/p\u003e",
          "module": "Control.Concurrent.STMOrIO",
          "name": "wr",
          "package": "metronome",
          "signature": "z a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-STMOrIO.html#wr",
          "type": "method"
        },
        "index": {
          "description": "modify",
          "hierarchy": "Control Concurrent STMOrIO",
          "module": "Control.Concurrent.STMOrIO",
          "name": "wr",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "metronome",
          "signature": "z a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/Control-Concurrent-STMOrIO.html#v:wr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA wrapper module around \u003ca\u003eSystem.Metronome\u003c/a\u003e with easy functions.\n\u003c/p\u003e\u003cp\u003eIn this snippet we run a metronome and attach 4 tracks to it. \n\u003c/p\u003e\u003cp\u003eFirst track ticks every 2 metronome ticks printing \".\" 5 times. \n\u003c/p\u003e\u003cp\u003eSecond track ticks at each metronome tick. Forever it reads a string from a variable, \n it checks first track for actions finished, and push other 5 actions on the first, each printing the string read.\n\u003c/p\u003e\u003cp\u003eThird track ticks every 14 metronome ticks and forever modifies the string in the variable.\n\u003c/p\u003e\u003cp\u003eFourth track ticks every 100 metronome ticks , it does nothing on first action , kill all tracks , including itself and the metronome,\n and wake up main thread on the second.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DoRec #-}\n \n import System.IO\n import System.Metronome.Practical\n import Control.Concurrent.STMOrIO\n import Control.Monad\n \n main = do\n       hSetBuffering stdout NoBuffering\n       (m,f) \u003c- dummyMetronome 0.1\n       c \u003c- dummyTrack f 2 0 $ replicate 5 $ return $ putStr \".\"\n       v \u003c- var \"!\"  \n       c2 \u003c- dummyTrack f 1 0 . repeat . noIO $ do\n                 as \u003c- getActions c\n                 vl \u003c- rd v\n                 when (null as) . setActions c . replicate 5 . return $ putStr vl\n       c3 \u003c- dummyTrack f 14 0 . repeat . noIO . md v $ map succ\n       end \u003c- chan ()\n       rec {c4 \u003c- dummyTrack f 100 0 . map noIO $ [return (), mapM_ kill [c,c2,c3,c4] \u003e\u003e kill m \u003e\u003e wr end ()]}\n       mapM_ run [c,c2,c3,c4]\n       rd end\n       hSetBuffering stdout LineBuffering \n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Metronome.Practical",
          "name": "Practical",
          "package": "metronome",
          "source": "src/System-Metronome-Practical.html",
          "type": "module"
        },
        "index": {
          "description": "wrapper module around System.Metronome with easy functions In this snippet we run metronome and attach tracks to it First track ticks every metronome ticks printing times Second track ticks at each metronome tick Forever it reads string from variable it checks first track for actions finished and push other actions on the first each printing the string read Third track ticks every metronome ticks and forever modifies the string in the variable Fourth track ticks every metronome ticks it does nothing on first action kill all tracks including itself and the metronome and wake up main thread on the second LANGUAGE DoRec import System.IO import System.Metronome.Practical import Control.Concurrent.STMOrIO import Control.Monad main do hSetBuffering stdout NoBuffering dummyMetronome dummyTrack replicate return putStr var c2 dummyTrack repeat noIO do as getActions vl rd when null as setActions replicate return putStr vl c3 dummyTrack repeat noIO md map succ end chan rec c4 dummyTrack map noIO return mapM kill c2 c3 c4 kill wr end mapM run c2 c3 c4 rd end hSetBuffering stdout LineBuffering",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "Practical",
          "package": "metronome",
          "partial": "Practical",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate and fork a running metronome.\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "dummyMetronome",
          "package": "metronome",
          "signature": "MTime-\u003e IO (Control Metronome, TrackForker)",
          "type": "function"
        },
        "index": {
          "description": "create and fork running metronome",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "dummyMetronome",
          "normalized": "MTime-\u003eIO(Control Metronome,TrackForker)",
          "package": "metronome",
          "partial": "Metronome",
          "signature": "MTime-\u003eIO(Control Metronome,TrackForker)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:dummyMetronome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate and fork a stopped track by a metronome\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "dummyTrack",
          "package": "metronome",
          "signature": "TrackForker-\u003e Frequency-\u003e Priority-\u003e [Action]-\u003e IO (Control Track)",
          "type": "function"
        },
        "index": {
          "description": "create and fork stopped track by metronome",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "dummyTrack",
          "normalized": "TrackForker-\u003eFrequency-\u003ePriority-\u003e[Action]-\u003eIO(Control Track)",
          "package": "metronome",
          "partial": "Track",
          "signature": "TrackForker-\u003eFrequency-\u003ePriority-\u003e[Action]-\u003eIO(Control Track)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:dummyTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread the remaining actions of a track\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "getActions",
          "package": "metronome",
          "signature": "Control Track -\u003e m [Action]",
          "source": "src/System-Metronome-Practical.html#getActions",
          "type": "function"
        },
        "index": {
          "description": "read the remaining actions of track",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "getActions",
          "normalized": "Control Track-\u003ea[Action]",
          "package": "metronome",
          "partial": "Actions",
          "signature": "Control Track-\u003em[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:getActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ekill a thread\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "kill",
          "package": "metronome",
          "signature": "Control a -\u003e m ()",
          "source": "src/System-Metronome-Practical.html#kill",
          "type": "function"
        },
        "index": {
          "description": "kill thread",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "kill",
          "normalized": "Control a-\u003eb()",
          "package": "metronome",
          "signature": "Control a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emute / unmute a track\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "modMute",
          "package": "metronome",
          "signature": "Control Track -\u003e m ()",
          "source": "src/System-Metronome-Practical.html#modMute",
          "type": "function"
        },
        "index": {
          "description": "mute unmute track",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "modMute",
          "normalized": "Control Track-\u003ea()",
          "package": "metronome",
          "partial": "Mute",
          "signature": "Control Track-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:modMute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodify the ticks count from track start, shifting the next ticks relative to metronome ticks\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "modPhase",
          "package": "metronome",
          "signature": "Control Track -\u003e (Ticks -\u003e Ticks) -\u003e m ()",
          "source": "src/System-Metronome-Practical.html#modPhase",
          "type": "function"
        },
        "index": {
          "description": "modify the ticks count from track start shifting the next ticks relative to metronome ticks",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "modPhase",
          "normalized": "Control Track-\u003e(Ticks-\u003eTicks)-\u003ea()",
          "package": "metronome",
          "partial": "Phase",
          "signature": "Control Track-\u003e(Ticks-\u003eTicks)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:modPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einvert the running flag of a thread \n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "modRunning",
          "package": "metronome",
          "signature": "Control a -\u003e m ()",
          "source": "src/System-Metronome-Practical.html#modRunning",
          "type": "function"
        },
        "index": {
          "description": "invert the running flag of thread",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "modRunning",
          "normalized": "Control a-\u003eb()",
          "package": "metronome",
          "partial": "Running",
          "signature": "Control a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:modRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the actions scheduled for the next metronome tick\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "modScheduled",
          "package": "metronome",
          "signature": "Control Metronome -\u003e ([(Priority, Action)] -\u003e [(Priority, Action)]) -\u003e m ()",
          "source": "src/System-Metronome-Practical.html#modScheduled",
          "type": "function"
        },
        "index": {
          "description": "change the actions scheduled for the next metronome tick",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "modScheduled",
          "normalized": "Control Metronome-\u003e([(Priority,Action)]-\u003e[(Priority,Action)])-\u003ea()",
          "package": "metronome",
          "partial": "Scheduled",
          "signature": "Control Metronome-\u003e([(Priority,Action)]-\u003e[(Priority,Action)])-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:modScheduled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno IO as result of the STM action\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "noIO",
          "package": "metronome",
          "signature": "STM () -\u003e STM (IO ())",
          "source": "src/System-Metronome-Practical.html#noIO",
          "type": "function"
        },
        "index": {
          "description": "no IO as result of the STM action",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "noIO",
          "normalized": "STM()-\u003eSTM(IO())",
          "package": "metronome",
          "partial": "IO",
          "signature": "STM()-\u003eSTM(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:noIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun a thread\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "run",
          "package": "metronome",
          "signature": "Control a -\u003e m ()",
          "source": "src/System-Metronome-Practical.html#run",
          "type": "function"
        },
        "index": {
          "description": "run thread",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "run",
          "normalized": "Control a-\u003eb()",
          "package": "metronome",
          "signature": "Control a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the track actions\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "setActions",
          "package": "metronome",
          "signature": "Control Track -\u003e [Action] -\u003e m ()",
          "source": "src/System-Metronome-Practical.html#setActions",
          "type": "function"
        },
        "index": {
          "description": "set the track actions",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "setActions",
          "normalized": "Control Track-\u003e[Action]-\u003ea()",
          "package": "metronome",
          "partial": "Actions",
          "signature": "Control Track-\u003e[Action]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:setActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the track frequency\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "setFrequency",
          "package": "metronome",
          "signature": "Control Track -\u003e Frequency -\u003e m ()",
          "source": "src/System-Metronome-Practical.html#setFrequency",
          "type": "function"
        },
        "index": {
          "description": "set the track frequency",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "setFrequency",
          "normalized": "Control Track-\u003eFrequency-\u003ea()",
          "package": "metronome",
          "partial": "Frequency",
          "signature": "Control Track-\u003eFrequency-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:setFrequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset a track priority\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "setPriority",
          "package": "metronome",
          "signature": "Control Track -\u003e Priority -\u003e m ()",
          "source": "src/System-Metronome-Practical.html#setPriority",
          "type": "function"
        },
        "index": {
          "description": "set track priority",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "setPriority",
          "normalized": "Control Track-\u003ePriority-\u003ea()",
          "package": "metronome",
          "partial": "Priority",
          "signature": "Control Track-\u003ePriority-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:setPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the next  ticking times for a metronome\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "setTicks",
          "package": "metronome",
          "signature": "Control Metronome -\u003e [MTime] -\u003e m ()",
          "source": "src/System-Metronome-Practical.html#setTicks",
          "type": "function"
        },
        "index": {
          "description": "set the next ticking times for metronome",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "setTicks",
          "normalized": "Control Metronome-\u003e[MTime]-\u003ea()",
          "package": "metronome",
          "partial": "Ticks",
          "signature": "Control Metronome-\u003e[MTime]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:setTicks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estop a thread\n\u003c/p\u003e",
          "module": "System.Metronome.Practical",
          "name": "stop",
          "package": "metronome",
          "signature": "Control a -\u003e m ()",
          "source": "src/System-Metronome-Practical.html#stop",
          "type": "function"
        },
        "index": {
          "description": "stop thread",
          "hierarchy": "System Metronome Practical",
          "module": "System.Metronome.Practical",
          "name": "stop",
          "normalized": "Control a-\u003eb()",
          "package": "metronome",
          "signature": "Control a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome-Practical.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eSynchronized execution of sequences of actions, controlled in STM\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eAll data structures are made accessible via \u003ca\u003eData.Lens\u003c/a\u003e abstraction.\n\u003c/p\u003e\u003cp\u003eActions to be executed are of type \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e = STM (IO ()). At each tick, the scheduled actions are ordered by priority, \n binded as STM actions ignoring the retrying ones. The results, being IO actions are executed in that order.\n\u003c/p\u003e\u003cp\u003eEvery \u003ccode\u003e\u003ca\u003eTrack\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMetronome\u003c/a\u003e\u003c/code\u003e lives in its own thread and can be stopped or killed as such, setting a flag in its state. \n\u003c/p\u003e\u003cp\u003eTrack and metronome state are exposed in TVar value to be modified at will. The only closed and inaccessible value is the synchronizing channel, \n written by the metronome and waited by tracks.\n The \u003ccode\u003e\u003ca\u003eTrackForker\u003c/a\u003e\u003c/code\u003e returned by a metronome function is closing this channel and it's the only way to fork a track.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eSystem.Metronome.Practical\u003c/a\u003e for an simple wrapper around this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Metronome",
          "name": "Metronome",
          "package": "metronome",
          "source": "src/System-Metronome.html",
          "type": "module"
        },
        "index": {
          "description": "Synchronized execution of sequences of actions controlled in STM All data structures are made accessible via Data.Lens abstraction Actions to be executed are of type Action STM IO At each tick the scheduled actions are ordered by priority binded as STM actions ignoring the retrying ones The results being IO actions are executed in that order Every Track and Metronome lives in its own thread and can be stopped or killed as such setting flag in its state Track and metronome state are exposed in TVar value to be modified at will The only closed and inaccessible value is the synchronizing channel written by the metronome and waited by tracks The TrackForker returned by metronome function is closing this channel and it the only way to fork track See System.Metronome.Practical for an simple wrapper around this module",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "Metronome",
          "package": "metronome",
          "partial": "Metronome",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack effect interface. Write in STM the collective and spit out the IO action to be executed when all STMs for this tick are done or retried\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "Action",
          "package": "metronome",
          "source": "src/System-Metronome.html#Action",
          "type": "type"
        },
        "index": {
          "description": "Track effect interface Write in STM the collective and spit out the IO action to be executed when all STMs for this tick are done or retried",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "Action",
          "package": "metronome",
          "partial": "Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Thread value cell in STM\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "Control",
          "package": "metronome",
          "source": "src/System-Metronome.html#Control",
          "type": "type"
        },
        "index": {
          "description": "Thread value cell in STM",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "Control",
          "package": "metronome",
          "partial": "Control",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#t:Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of metronome ticks between two track ticks\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "Frequency",
          "package": "metronome",
          "source": "src/System-Metronome.html#Frequency",
          "type": "type"
        },
        "index": {
          "description": "Number of metronome ticks between two track ticks",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "Frequency",
          "package": "metronome",
          "partial": "Frequency",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#t:Frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime, in seconds\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "MTime",
          "package": "metronome",
          "source": "src/System-Metronome.html#MTime",
          "type": "type"
        },
        "index": {
          "description": "Time in seconds",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "MTime",
          "package": "metronome",
          "partial": "MTime",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#t:MTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState of a metronome\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "Metronome",
          "package": "metronome",
          "source": "src/System-Metronome.html#Metronome",
          "type": "data"
        },
        "index": {
          "description": "State of metronome",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "Metronome",
          "package": "metronome",
          "partial": "Metronome",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#t:Metronome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePriority values between tracks under the same metronome.\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "Priority",
          "package": "metronome",
          "source": "src/System-Metronome.html#Priority",
          "type": "type"
        },
        "index": {
          "description": "Priority values between tracks under the same metronome",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "Priority",
          "package": "metronome",
          "partial": "Priority",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#t:Priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esupporting values with \u003ccode\u003e\u003ca\u003erunning\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ealive\u003c/a\u003e\u003c/code\u003e flag\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "Thread",
          "package": "metronome",
          "source": "src/System-Metronome.html#Thread",
          "type": "data"
        },
        "index": {
          "description": "supporting values with running and alive flag",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "Thread",
          "package": "metronome",
          "partial": "Thread",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#t:Thread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of elapsed ticks\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "Ticks",
          "package": "metronome",
          "source": "src/System-Metronome.html#Ticks",
          "type": "type"
        },
        "index": {
          "description": "Number of elapsed ticks",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "Ticks",
          "package": "metronome",
          "partial": "Ticks",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#t:Ticks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState of a track.\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "Track",
          "package": "metronome",
          "source": "src/System-Metronome.html#Track",
          "type": "data"
        },
        "index": {
          "description": "State of track",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "Track",
          "package": "metronome",
          "partial": "Track",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#t:Track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action to fork a new track from a track state.\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "TrackForker",
          "package": "metronome",
          "source": "src/System-Metronome.html#TrackForker",
          "type": "type"
        },
        "index": {
          "description": "The action to fork new track from track state",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "TrackForker",
          "package": "metronome",
          "partial": "Track Forker",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#t:TrackForker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "Metronome",
          "package": "metronome",
          "signature": "Metronome",
          "source": "src/System-Metronome.html#Metronome",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "Metronome",
          "package": "metronome",
          "partial": "Metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:Metronome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "Thread",
          "package": "metronome",
          "signature": "Thread",
          "source": "src/System-Metronome.html#Thread",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "Thread",
          "package": "metronome",
          "partial": "Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:Thread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "Track",
          "package": "metronome",
          "signature": "Track",
          "source": "src/System-Metronome.html#Track",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "Track",
          "package": "metronome",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:Track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe actions left to be run\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "_actions",
          "package": "metronome",
          "signature": "[Action]",
          "source": "src/System-Metronome.html#Track",
          "type": "function"
        },
        "index": {
          "description": "the actions left to be run",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "_actions",
          "normalized": "[Action]",
          "package": "metronome",
          "signature": "[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:_actions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset to false to require kill thread\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "_alive",
          "package": "metronome",
          "signature": "Bool",
          "source": "src/System-Metronome.html#Thread",
          "type": "function"
        },
        "index": {
          "description": "set to false to require kill thread",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "_alive",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:_alive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecore data\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "_core",
          "package": "metronome",
          "signature": "a",
          "source": "src/System-Metronome.html#Thread",
          "type": "function"
        },
        "index": {
          "description": "core data",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "_core",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:_core"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalling frequency relative to metronome ticks frequency\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "_frequency",
          "package": "metronome",
          "signature": "Frequency",
          "source": "src/System-Metronome.html#Track",
          "type": "function"
        },
        "index": {
          "description": "calling frequency relative to metronome ticks frequency",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "_frequency",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:_frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emuted flag, when True, actions are not scheduled, just skipped\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "_muted",
          "package": "metronome",
          "signature": "Bool",
          "source": "src/System-Metronome.html#Track",
          "type": "function"
        },
        "index": {
          "description": "muted flag when True actions are not scheduled just skipped",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "_muted",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:_muted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epriority of this track among its peers\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "_priority",
          "package": "metronome",
          "signature": "Priority",
          "source": "src/System-Metronome.html#Track",
          "type": "function"
        },
        "index": {
          "description": "priority of this track among its peers",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "_priority",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:_priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estopped or running flag\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "_running",
          "package": "metronome",
          "signature": "Bool",
          "source": "src/System-Metronome.html#Thread",
          "type": "function"
        },
        "index": {
          "description": "stopped or running flag",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "_running",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:_running"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eactions scheduled for the tick to come\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "_schedule",
          "package": "metronome",
          "signature": "[(Priority, Action)]",
          "source": "src/System-Metronome.html#Metronome",
          "type": "function"
        },
        "index": {
          "description": "actions scheduled for the tick to come",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "_schedule",
          "normalized": "[(Priority,Action)]",
          "package": "metronome",
          "signature": "[(Priority,Action)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:_schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of ticks elapsed from  the track fork\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "_sync",
          "package": "metronome",
          "signature": "Ticks",
          "source": "src/System-Metronome.html#Track",
          "type": "function"
        },
        "index": {
          "description": "the number of ticks elapsed from the track fork",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "_sync",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:_sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enext ticking times\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "_ticks",
          "package": "metronome",
          "signature": "[MTime]",
          "source": "src/System-Metronome.html#Metronome",
          "type": "function"
        },
        "index": {
          "description": "next ticking times",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "_ticks",
          "normalized": "[MTime]",
          "package": "metronome",
          "signature": "[MTime]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:_ticks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "actions",
          "package": "metronome",
          "signature": "Lens Track [Action]",
          "source": "src/System-Metronome.html#actions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "actions",
          "normalized": "Lens Track[Action]",
          "package": "metronome",
          "signature": "Lens Track[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:actions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "alive",
          "package": "metronome",
          "signature": "forall a.  Lens (Thread a) Bool",
          "source": "src/System-Metronome.html#alive",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "alive",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:alive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "core",
          "package": "metronome",
          "signature": "forall a.  Lens (Thread a) a",
          "source": "src/System-Metronome.html#core",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "core",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:core"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "frequency",
          "package": "metronome",
          "signature": "Lens Track Frequency",
          "source": "src/System-Metronome.html#frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "frequency",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a metronome from its initial state\n\u003c/p\u003e",
          "module": "System.Metronome",
          "name": "metronome",
          "package": "metronome",
          "signature": "Control Metronome-\u003e IO TrackForker",
          "type": "function"
        },
        "index": {
          "description": "Fork metronome from its initial state",
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "metronome",
          "normalized": "Control Metronome-\u003eIO TrackForker",
          "package": "metronome",
          "signature": "Control Metronome-\u003eIO TrackForker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:metronome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "muted",
          "package": "metronome",
          "signature": "Lens Track Bool",
          "source": "src/System-Metronome.html#muted",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "muted",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:muted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "priority",
          "package": "metronome",
          "signature": "Lens Track Priority",
          "source": "src/System-Metronome.html#priority",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "priority",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "running",
          "package": "metronome",
          "signature": "forall a.  Lens (Thread a) Bool",
          "source": "src/System-Metronome.html#running",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "running",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:running"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "schedule",
          "package": "metronome",
          "signature": "Lens Metronome [(Priority, Action)]",
          "source": "src/System-Metronome.html#schedule",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "schedule",
          "normalized": "Lens Metronome[(Priority,Action)]",
          "package": "metronome",
          "signature": "Lens Metronome[(Priority,Action)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "sync",
          "package": "metronome",
          "signature": "Lens Track Ticks",
          "source": "src/System-Metronome.html#sync",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "sync",
          "package": "metronome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Metronome",
          "name": "ticks",
          "package": "metronome",
          "signature": "Lens Metronome [MTime]",
          "source": "src/System-Metronome.html#ticks",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Metronome",
          "module": "System.Metronome",
          "name": "ticks",
          "normalized": "Lens Metronome[MTime]",
          "package": "metronome",
          "signature": "Lens Metronome[MTime]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/metronome/docs/System-Metronome.html#v:ticks"
      }
    }
  ]
]