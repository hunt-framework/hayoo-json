[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-pty-light/docs/System-Posix-PtyLight.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePOSIX pseudo-terminal support. The functions \u003ccode\u003e\u003ca\u003eopenPt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egrantPt\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003eunlockPt\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eptsName\u003c/a\u003e\u003c/code\u003e all correspond directly to POSIX functions,\nwhereas the \u003ccode\u003e\u003ca\u003eopenPseudoTerminal\u003c/a\u003e\u003c/code\u003e function provides more convenient\ninterface to pseudo-terminal functionality.\n\u003c/p\u003e\u003cp\u003eNote that later versions of the \u003ccode\u003eunix\u003c/code\u003e package include pseudo-terminal\nsupport in the \u003ca\u003eSystem.Posix.Terminal\u003c/a\u003e module. You should probably\nonly use this module if you need backwards compatibility with GHC\nversions earlier than 6.8, or if you want direct bindings to the\nlow-level pseudo-terminal functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.PtyLight",
        "fct-package": "unix-pty-light",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-PtyLight.html",
        "fct-type": "module",
        "title": "PtyLight"
      },
      "index": {
        "description": "POSIX pseudo-terminal support The functions openPt grantPt unlockPt and ptsName all correspond directly to POSIX functions whereas the openPseudoTerminal function provides more convenient interface to pseudo-terminal functionality Note that later versions of the unix package include pseudo-terminal support in the System.Posix.Terminal module You should probably only use this module if you need backwards compatibility with GHC versions earlier than or if you want direct bindings to the low-level pseudo-terminal functions",
        "hierarchy": "System Posix PtyLight",
        "module": "System.Posix.PtyLight",
        "name": "PtyLight",
        "normalized": "",
        "package": "unix-pty-light",
        "partial": "Pty Light",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-pty-light/docs/System-Posix-PtyLight.html#t:Fd",
      "description": {
        "fct-module": "System.Posix.PtyLight",
        "fct-package": "unix-pty-light",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Fd"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix PtyLight",
        "module": "System.Posix.PtyLight",
        "name": "Fd",
        "normalized": "",
        "package": "unix-pty-light",
        "partial": "Fd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-pty-light/docs/System-Posix-PtyLight.html#v:closeFd",
      "description": {
        "fct-descr": "\u003cp\u003eClose this file descriptor.  May throw an exception if this is an\n invalid descriptor.\n\u003c/p\u003e",
        "fct-module": "System.Posix.PtyLight",
        "fct-package": "unix-pty-light",
        "fct-signature": "Fd -\u003e IO ()",
        "fct-type": "function",
        "title": "closeFd"
      },
      "index": {
        "description": "Close this file descriptor May throw an exception if this is an invalid descriptor",
        "hierarchy": "System Posix PtyLight",
        "module": "System.Posix.PtyLight",
        "name": "closeFd",
        "normalized": "Fd-\u003eIO()",
        "package": "unix-pty-light",
        "partial": "Fd",
        "signature": "Fd-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-pty-light/docs/System-Posix-PtyLight.html#v:grantPt",
      "description": {
        "fct-descr": "\u003cp\u003eChange the ownership of the pseudo-terminal slave corresponding\nto the given master so that it belongs to and can be read/written by\nthe current process's owner.\nThis should be called before \u003ccode\u003e\u003ca\u003eunlockPt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCorresponds to \u003ccode\u003egrantpt\u003c/code\u003e from \u003ccode\u003e\u003cstdlib.h\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.PtyLight",
        "fct-package": "unix-pty-light",
        "fct-signature": "Fd -\u003e IO ()",
        "fct-source": "src/System-Posix-PtyLight.html#grantPt",
        "fct-type": "function",
        "title": "grantPt"
      },
      "index": {
        "description": "Change the ownership of the pseudo-terminal slave corresponding to the given master so that it belongs to and can be read written by the current process owner This should be called before unlockPt Corresponds to grantpt from stdlib.h",
        "hierarchy": "System Posix PtyLight",
        "module": "System.Posix.PtyLight",
        "name": "grantPt",
        "normalized": "Fd-\u003eIO()",
        "package": "unix-pty-light",
        "partial": "Pt",
        "signature": "Fd-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-pty-light/docs/System-Posix-PtyLight.html#v:oNOCTTY",
      "description": {
        "fct-descr": "\u003cp\u003ePrevents \u003ccode\u003e\u003ca\u003eopenPt\u003c/a\u003e\u003c/code\u003e from causing the terminal device to become\nthe controlling terminal for the process.\n\u003c/p\u003e\u003cp\u003eCorresponds to \u003ccode\u003eO_NOCTTY\u003c/code\u003e from \u003ccode\u003e\u003cfcntl.h\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.PtyLight",
        "fct-package": "unix-pty-light",
        "fct-signature": "CInt",
        "fct-source": "src/System-Posix-PtyLight.html#oNOCTTY",
        "fct-type": "function",
        "title": "oNOCTTY"
      },
      "index": {
        "description": "Prevents openPt from causing the terminal device to become the controlling terminal for the process Corresponds to NOCTTY from fcntl.h",
        "hierarchy": "System Posix PtyLight",
        "module": "System.Posix.PtyLight",
        "name": "oNOCTTY",
        "normalized": "",
        "package": "unix-pty-light",
        "partial": "NOCTTY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-pty-light/docs/System-Posix-PtyLight.html#v:oRDWR",
      "description": {
        "fct-descr": "\u003cp\u003eCauses \u003ccode\u003e\u003ca\u003eopenPt\u003c/a\u003e\u003c/code\u003e to open the pseudo-terminal for both reading\nand writing. (This flag is usually specified.)\n\u003c/p\u003e\u003cp\u003eCorresponds to \u003ccode\u003eO_RDWR\u003c/code\u003e from \u003ccode\u003e\u003cfcntl.h\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.PtyLight",
        "fct-package": "unix-pty-light",
        "fct-signature": "CInt",
        "fct-source": "src/System-Posix-PtyLight.html#oRDWR",
        "fct-type": "function",
        "title": "oRDWR"
      },
      "index": {
        "description": "Causes openPt to open the pseudo-terminal for both reading and writing This flag is usually specified Corresponds to RDWR from fcntl.h",
        "hierarchy": "System Posix PtyLight",
        "module": "System.Posix.PtyLight",
        "name": "oRDWR",
        "normalized": "",
        "package": "unix-pty-light",
        "partial": "RDWR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-pty-light/docs/System-Posix-PtyLight.html#v:openPseudoTerminal",
      "description": {
        "fct-descr": "\u003cp\u003eCreates, grants, and unlocks a read/write pseudo-terminal,\nreturning an open file descriptor for the master device and the\nfile-system path of the slave device.\n\u003c/p\u003e\u003cp\u003ePerforms the following actions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e opens a pseudo-terminal\n\u003c/li\u003e\u003cli\u003e grants and unlocks its slave\n\u003c/li\u003e\u003cli\u003e obtains the slave's name\n\u003c/li\u003e\u003cli\u003e returns the master's file descriptor and the slave's name\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf an exception is thrown, the master file descriptor will be closed.\nOtherwise, the caller is responsible for closing it.\n\u003c/p\u003e",
        "fct-module": "System.Posix.PtyLight",
        "fct-package": "unix-pty-light",
        "fct-signature": "IO (Fd, String)",
        "fct-source": "src/System-Posix-PtyLight.html#openPseudoTerminal",
        "fct-type": "function",
        "title": "openPseudoTerminal"
      },
      "index": {
        "description": "Creates grants and unlocks read write pseudo-terminal returning an open file descriptor for the master device and the file-system path of the slave device Performs the following actions opens pseudo-terminal grants and unlocks its slave obtains the slave name returns the master file descriptor and the slave name If an exception is thrown the master file descriptor will be closed Otherwise the caller is responsible for closing it",
        "hierarchy": "System Posix PtyLight",
        "module": "System.Posix.PtyLight",
        "name": "openPseudoTerminal",
        "normalized": "IO(Fd,String)",
        "package": "unix-pty-light",
        "partial": "Pseudo Terminal",
        "signature": "IO(Fd,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-pty-light/docs/System-Posix-PtyLight.html#v:openPt",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a pseudo-terminal master and associates it with a file\ndescriptor.\n\u003c/p\u003e\u003cp\u003eCorresponds to \u003ccode\u003eposix_openpt\u003c/code\u003e from \u003ccode\u003e\u003cstdlib.h\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.PtyLight",
        "fct-package": "unix-pty-light",
        "fct-signature": "CInt-\u003e IO Fd",
        "fct-type": "function",
        "title": "openPt"
      },
      "index": {
        "description": "Opens pseudo-terminal master and associates it with file descriptor Corresponds to posix openpt from stdlib.h",
        "hierarchy": "System Posix PtyLight",
        "module": "System.Posix.PtyLight",
        "name": "openPt",
        "normalized": "CInt-\u003eIO Fd",
        "package": "unix-pty-light",
        "partial": "Pt",
        "signature": "CInt-\u003eIO Fd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-pty-light/docs/System-Posix-PtyLight.html#v:ptsName",
      "description": {
        "fct-descr": "\u003cp\u003eObtains the name of a pseudo-terminal slave device from the\nmaster's file descriptor.\n\u003c/p\u003e\u003cp\u003eCorresponds to \u003ccode\u003eptsname\u003c/code\u003e from \u003ccode\u003e\u003cstdlib.h\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.PtyLight",
        "fct-package": "unix-pty-light",
        "fct-signature": "Fd -\u003e IO String",
        "fct-source": "src/System-Posix-PtyLight.html#ptsName",
        "fct-type": "function",
        "title": "ptsName"
      },
      "index": {
        "description": "Obtains the name of pseudo-terminal slave device from the master file descriptor Corresponds to ptsname from stdlib.h",
        "hierarchy": "System Posix PtyLight",
        "module": "System.Posix.PtyLight",
        "name": "ptsName",
        "normalized": "Fd-\u003eIO String",
        "package": "unix-pty-light",
        "partial": "Name",
        "signature": "Fd-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-pty-light/docs/System-Posix-PtyLight.html#v:unlockPt",
      "description": {
        "fct-descr": "\u003cp\u003eUnlocks the pseudo-terminal slave corresponding to the given\nmaster. This must be called before opening the slave\nside of the pseudo-terminal.\n\u003c/p\u003e\u003cp\u003eCorresponds to \u003ccode\u003eunlockpt\u003c/code\u003e from \u003ccode\u003e\u003cstdlib.h\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.PtyLight",
        "fct-package": "unix-pty-light",
        "fct-signature": "Fd -\u003e IO ()",
        "fct-source": "src/System-Posix-PtyLight.html#unlockPt",
        "fct-type": "function",
        "title": "unlockPt"
      },
      "index": {
        "description": "Unlocks the pseudo-terminal slave corresponding to the given master This must be called before opening the slave side of the pseudo-terminal Corresponds to unlockpt from stdlib.h",
        "hierarchy": "System Posix PtyLight",
        "module": "System.Posix.PtyLight",
        "name": "unlockPt",
        "normalized": "Fd-\u003eIO()",
        "package": "unix-pty-light",
        "partial": "Pt",
        "signature": "Fd-\u003eIO()"
      }
    }
  }
]