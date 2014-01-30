[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemonize-doublefork/docs/System-Posix-Daemon.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides \u003ccode\u003e\u003ca\u003estartDaemon\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estopDaemon\u003c/a\u003e\u003c/code\u003e to facilitate\n the creation of daemon programs.\n\u003c/p\u003e\u003cp\u003eThe problem is as follows: the user starts a program in their\n terminal, but he wants the program to relinquish control of the\n terminal immediately, and furthermore, the program (or part of it)\n should keep running even after said terminal is closed.  Examples\n of programs that behave like this are \u003ccode\u003enginx\u003c/code\u003e and \u003ccode\u003eemacs --daemon\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe correct solution is to double-fork a process.  This ensures\n that the child process is completed separated from the terminal it\n was started on.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemonize-doublefork",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-Daemon.html",
        "fct-type": "module",
        "title": "Daemon"
      },
      "index": {
        "description": "This module provides startDaemon and stopDaemon to facilitate the creation of daemon programs The problem is as follows the user starts program in their terminal but he wants the program to relinquish control of the terminal immediately and furthermore the program or part of it should keep running even after said terminal is closed Examples of programs that behave like this are nginx and emacs daemon The correct solution is to double-fork process This ensures that the child process is completed separated from the terminal it was started on",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "Daemon",
        "normalized": "",
        "package": "daemonize-doublefork",
        "partial": "Daemon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemonize-doublefork/docs/System-Posix-Daemon.html#v:becomeGroupUser",
      "description": {
        "fct-descr": "\u003cp\u003eMake the current process belong to USER and GROUP.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemonize-doublefork",
        "fct-signature": "String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "becomeGroupUser"
      },
      "index": {
        "description": "Make the current process belong to USER and GROUP",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "becomeGroupUser",
        "normalized": "String-\u003eString-\u003eIO()",
        "package": "daemonize-doublefork",
        "partial": "Group User",
        "signature": "String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemonize-doublefork/docs/System-Posix-Daemon.html#v:startDaemon",
      "description": {
        "fct-descr": "\u003cp\u003eDouble-fork to create a well behaved daemon.  If PIDFILE is\n given, check/set pidfile; if we cannot obtain a lock on the file,\n another process is already using it, so fail.  The program is\n started with \u003ccode\u003eSIGHUP\u003c/code\u003e masked; HANDLER is invoked on \u003ccode\u003eSIGHUP\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee: \u003ca\u003ehttp://www.enderunix.org/docs/eng/daemon.php\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eNote: All unnecessary fds should be close before calling this.\n\u003c/p\u003e\u003cp\u003eHANDLER is meant to allow the daemon to shutdown cleanly.  It could\n simply be:\n\u003c/p\u003e\u003cpre\u003e\n   handler = return ()\n\u003c/pre\u003e\u003cp\u003eor something more elaborate like the following, which allows one to\n perform some actions before re-raising the signal and killing the\n daemon:\n\u003c/p\u003e\u003cpre\u003e\n   handler = do\n     putStrLn \u003ca\u003eStopping daemon...\u003c/a\u003e\n     raiseSignal sigTERM\n\u003c/pre\u003e",
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemonize-doublefork",
        "fct-signature": "FilePath-\u003e IO ()-\u003e IO ()-\u003e IO ()",
        "fct-type": "function",
        "title": "startDaemon"
      },
      "index": {
        "description": "Double-fork to create well behaved daemon If PIDFILE is given check set pidfile if we cannot obtain lock on the file another process is already using it so fail The program is started with SIGHUP masked HANDLER is invoked on SIGHUP See http www.enderunix.org docs eng daemon.php Note All unnecessary fds should be close before calling this HANDLER is meant to allow the daemon to shutdown cleanly It could simply be handler return or something more elaborate like the following which allows one to perform some actions before re-raising the signal and killing the daemon handler do putStrLn Stopping daemon raiseSignal sigTERM",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "startDaemon",
        "normalized": "FilePath-\u003eIO()-\u003eIO()-\u003eIO()",
        "package": "daemonize-doublefork",
        "partial": "Daemon",
        "signature": "FilePath-\u003eIO()-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/daemonize-doublefork/docs/System-Posix-Daemon.html#v:stopDaemon",
      "description": {
        "fct-descr": "\u003cp\u003eStop the daemon identified by PIDFILE by sending it \u003ccode\u003eSIGHUP\u003c/code\u003e.  If\n the process was daemonized with \u003ccode\u003e\u003ca\u003estartDaemon\u003c/a\u003e\u003c/code\u003e, the handler\n specified there will be invoked first.  Return the pid of the\n process that was killed; if PIDFILE does not exist, return\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemon",
        "fct-package": "daemonize-doublefork",
        "fct-signature": "FilePath-\u003e IO (Maybe ProcessID)",
        "fct-type": "function",
        "title": "stopDaemon"
      },
      "index": {
        "description": "Stop the daemon identified by PIDFILE by sending it SIGHUP If the process was daemonized with startDaemon the handler specified there will be invoked first Return the pid of the process that was killed if PIDFILE does not exist return Nothing",
        "hierarchy": "System Posix Daemon",
        "module": "System.Posix.Daemon",
        "name": "stopDaemon",
        "normalized": "FilePath-\u003eIO(Maybe ProcessID)",
        "package": "daemonize-doublefork",
        "partial": "Daemon",
        "signature": "FilePath-\u003eIO(Maybe ProcessID)"
      }
    }
  }
]