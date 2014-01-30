[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#",
      "description": {
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-Daemonize.html",
        "fct-type": "module",
        "title": "Daemonize"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "Daemonize",
        "normalized": "",
        "package": "hdaemonize-buildfix",
        "partial": "Daemonize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#t:CreateDaemon",
      "description": {
        "fct-descr": "\u003cp\u003eThe details of any given daemon are fixed by the \u003ccode\u003e\u003ca\u003eCreateDaemon\u003c/a\u003e\u003c/code\u003e\n record passed to \u003ccode\u003e\u003ca\u003eserviced\u003c/a\u003e\u003c/code\u003e.  You can also take a predefined form\n of \u003ccode\u003e\u003ca\u003eCreateDaemon\u003c/a\u003e\u003c/code\u003e, such as \u003ccode\u003e\u003ca\u003esimpleDaemon\u003c/a\u003e\u003c/code\u003e below, and set what\n options you want, rather than defining the whole record yourself.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "data",
        "fct-source": "src/System-Posix-Daemonize.html#CreateDaemon",
        "fct-type": "data",
        "title": "CreateDaemon"
      },
      "index": {
        "description": "The details of any given daemon are fixed by the CreateDaemon record passed to serviced You can also take predefined form of CreateDaemon such as simpleDaemon below and set what options you want rather than defining the whole record yourself",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "CreateDaemon",
        "normalized": "",
        "package": "hdaemonize-buildfix",
        "partial": "Create Daemon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:CreateDaemon",
      "description": {
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "CreateDaemon",
        "fct-source": "src/System-Posix-Daemonize.html#CreateDaemon",
        "fct-type": "function",
        "title": "CreateDaemon"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "CreateDaemon",
        "normalized": "",
        "package": "hdaemonize-buildfix",
        "partial": "Create Daemon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:daemonize",
      "description": {
        "fct-descr": "\u003cp\u003eTurning a process into a daemon involves a fixed set of\n operations on unix systems, described in section 13.3 of Stevens\n and Rago, \u003ca\u003eAdvanced Programming in the Unix Environment.\u003c/a\u003e  Since\n they are fixed, they can be written as a single function,\n \u003ccode\u003e\u003ca\u003edaemonize\u003c/a\u003e\u003c/code\u003e taking an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action which represents the daemon's\n actual activity.\n\u003c/p\u003e\u003cp\u003eBriefly, \u003ccode\u003e\u003ca\u003edaemonize\u003c/a\u003e\u003c/code\u003e sets the file creation mask to 0, forks twice,\n changed the working directory to \u003ccode\u003e/\u003c/code\u003e, closes stdin, stdout, and\n stderr, blocks \u003ccode\u003e\u003ca\u003esigHUP\u003c/a\u003e\u003c/code\u003e, and runs its argument.  Strictly, it\n should close all open file descriptors, but this is not possible in\n a sensible way in Haskell.\n\u003c/p\u003e\u003cp\u003eThe most trivial daemon would be\n\u003c/p\u003e\u003cpre\u003e daemonize (forever $ return ())\n\u003c/pre\u003e\u003cp\u003ewhich does nothing until killed.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "IO () -\u003e IO ()",
        "fct-source": "src/System-Posix-Daemonize.html#daemonize",
        "fct-type": "function",
        "title": "daemonize"
      },
      "index": {
        "description": "Turning process into daemon involves fixed set of operations on unix systems described in section of Stevens and Rago Advanced Programming in the Unix Environment Since they are fixed they can be written as single function daemonize taking an IO action which represents the daemon actual activity Briefly daemonize sets the file creation mask to forks twice changed the working directory to closes stdin stdout and stderr blocks sigHUP and runs its argument Strictly it should close all open file descriptors but this is not possible in sensible way in Haskell The most trivial daemon would be daemonize forever return which does nothing until killed",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "daemonize",
        "normalized": "IO()-\u003eIO()",
        "package": "hdaemonize-buildfix",
        "partial": "",
        "signature": "IO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:exitCleanly",
      "description": {
        "fct-descr": "\u003cp\u003eUse this function when the daemon should terminate normally.  It\n logs a message, and exits with status 0.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "m a",
        "fct-source": "src/System-Posix-Daemonize.html#exitCleanly",
        "fct-type": "function",
        "title": "exitCleanly"
      },
      "index": {
        "description": "Use this function when the daemon should terminate normally It logs message and exits with status",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "exitCleanly",
        "normalized": "",
        "package": "hdaemonize-buildfix",
        "partial": "Cleanly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:fatalError",
      "description": {
        "fct-descr": "\u003cp\u003eWhen you encounter an error where the only sane way to handle it\n is to write an error to the log and die messily, use fatalError.\n This is a good candidate for things like not being able to find\n configuration files on startup.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "String -\u003e m a",
        "fct-source": "src/System-Posix-Daemonize.html#fatalError",
        "fct-type": "function",
        "title": "fatalError"
      },
      "index": {
        "description": "When you encounter an error where the only sane way to handle it is to write an error to the log and die messily use fatalError This is good candidate for things like not being able to find configuration files on startup",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "fatalError",
        "normalized": "String-\u003ea b",
        "package": "hdaemonize-buildfix",
        "partial": "Error",
        "signature": "String-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e is the group the daemon should\n try to run as, and works the same way as\n the user field.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-Posix-Daemonize.html#CreateDaemon",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "group is the group the daemon should try to run as and works the same way as the user field",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "group",
        "normalized": "",
        "package": "hdaemonize-buildfix",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the daemon, which is used as\n the name for the PID file, as the name that\n appears in the system logs, and as the user\n and group the daemon tries to run as if\n none are explicitly specified.  In general,\n this should be \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, in which case the\n system defaults to the name of the\n executable file containing the daemon.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-Posix-Daemonize.html#CreateDaemon",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "The name of the daemon which is used as the name for the PID file as the name that appears in the system logs and as the user and group the daemon tries to run as if none are explicitly specified In general this should be Nothing in which case the system defaults to the name of the executable file containing the daemon",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "name",
        "normalized": "",
        "package": "hdaemonize-buildfix",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:pidfileDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eThe directory where the\n daemon should write and look\n for the PID file.  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n means \u003ccode\u003e\u003cem\u003evar\u003c/em\u003erun\u003c/code\u003e.  Unless you\n have a good reason to do\n otherwise, leave this as\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/System-Posix-Daemonize.html#CreateDaemon",
        "fct-type": "function",
        "title": "pidfileDirectory"
      },
      "index": {
        "description": "The directory where the daemon should write and look for the PID file Nothing means var run Unless you have good reason to do otherwise leave this as Nothing",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "pidfileDirectory",
        "normalized": "",
        "package": "hdaemonize-buildfix",
        "partial": "Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:privilegedAction",
      "description": {
        "fct-descr": "\u003cp\u003eAn action to be run as root, before\n permissions are dropped, e.g., binding\n a trusted port.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "IO a",
        "fct-source": "src/System-Posix-Daemonize.html#CreateDaemon",
        "fct-type": "function",
        "title": "privilegedAction"
      },
      "index": {
        "description": "An action to be run as root before permissions are dropped e.g binding trusted port",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "privilegedAction",
        "normalized": "",
        "package": "hdaemonize-buildfix",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:program",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual guts of the daemon, more or less\n the \u003ccode\u003emain\u003c/code\u003e function.  Its argument is the result\n of running \u003ccode\u003e\u003ca\u003eprivilegedAction\u003c/a\u003e\u003c/code\u003e before dropping\n privileges.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/System-Posix-Daemonize.html#CreateDaemon",
        "fct-type": "function",
        "title": "program"
      },
      "index": {
        "description": "The actual guts of the daemon more or less the main function Its argument is the result of running privilegedAction before dropping privileges",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "program",
        "normalized": "a-\u003eIO()",
        "package": "hdaemonize-buildfix",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:serviced",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eserviced\u003c/a\u003e\u003c/code\u003e turns a program into a UNIX daemon (system service)\n   ready to be deployed to \u003cem\u003eetc\u003c/em\u003erc.d or similar startup folder.  It\n   is meant to be used in the \u003ccode\u003emain\u003c/code\u003e function of a program, such as\n\u003c/p\u003e\u003cpre\u003e serviced simpleDaemon\n\u003c/pre\u003e\u003cp\u003eThe resulting program takes one of three arguments: \u003ccode\u003estart\u003c/code\u003e,\n   \u003ccode\u003estop\u003c/code\u003e, and \u003ccode\u003erestart\u003c/code\u003e.  All control the status of a daemon by\n   looking for a file containing a text string holding the PID of\n   any running instance.  Conventionally, this file is in\n   \u003ccode\u003e\u003cem\u003evar\u003c/em\u003erun/$name.pid\u003c/code\u003e, where $name is the executable's name.  For\n   obvious reasons, this file is known as a PID file.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003estart\u003c/code\u003e makes the program write a PID file.  If the file already\n   exists, it refuses to start, guaranteeing there is only one\n   instance of the daemon at any time.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003estop\u003c/code\u003e read the PID file, and terminates the process whose pid is\n   written therein.  First it does a soft kill, SIGTERM, giving the\n   daemon a chance to shut down cleanly, then three seconds later a\n   hard kill which the daemon cannot catch or escape.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003erestart\u003c/code\u003e is simple \u003ccode\u003estop\u003c/code\u003e followed by \u003ccode\u003estart\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eserviced\u003c/a\u003e\u003c/code\u003e also tries to drop privileges.  If you don't specify a\n   user the daemon should run as, it will try to switch to a user\n   with the same name as the daemon, and otherwise to user \u003ccode\u003edaemon\u003c/code\u003e.\n   It goes through the same sequence for group.  Just to complicate\n   matters, the name of the daemon is by default the name of the\n   executable file, but can again be set to something else in the\n   \u003ccode\u003e\u003ca\u003eCreateDaemon\u003c/a\u003e\u003c/code\u003e record.\n\u003c/p\u003e\u003cp\u003eFinally, exceptions in the program are caught, logged to syslog,\n   and the program restarted.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "CreateDaemon a -\u003e IO ()",
        "fct-source": "src/System-Posix-Daemonize.html#serviced",
        "fct-type": "function",
        "title": "serviced"
      },
      "index": {
        "description": "serviced turns program into UNIX daemon system service ready to be deployed to etc rc.d or similar startup folder It is meant to be used in the main function of program such as serviced simpleDaemon The resulting program takes one of three arguments start stop and restart All control the status of daemon by looking for file containing text string holding the PID of any running instance Conventionally this file is in var run name.pid where name is the executable name For obvious reasons this file is known as PID file start makes the program write PID file If the file already exists it refuses to start guaranteeing there is only one instance of the daemon at any time stop read the PID file and terminates the process whose pid is written therein First it does soft kill SIGTERM giving the daemon chance to shut down cleanly then three seconds later hard kill which the daemon cannot catch or escape restart is simple stop followed by start serviced also tries to drop privileges If you don specify user the daemon should run as it will try to switch to user with the same name as the daemon and otherwise to user daemon It goes through the same sequence for group Just to complicate matters the name of the daemon is by default the name of the executable file but can again be set to something else in the CreateDaemon record Finally exceptions in the program are caught logged to syslog and the program restarted",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "serviced",
        "normalized": "CreateDaemon a-\u003eIO()",
        "package": "hdaemonize-buildfix",
        "partial": "",
        "signature": "CreateDaemon a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:simpleDaemon",
      "description": {
        "fct-descr": "\u003cp\u003eThe simplest possible instance of \u003ccode\u003e\u003ca\u003eCreateDaemon\u003c/a\u003e\u003c/code\u003e is \n\u003c/p\u003e\u003cpre\u003e CreateDaemon {\n  privilegedAction = return ()\n  program = const $ forever $ return ()\n  name = Nothing,\n  user = Nothing,\n  group = Nothing,\n  syslogOptions = [],\n  pidfileDirectory = Nothing,\n }\n\u003c/pre\u003e\u003cp\u003ewhich does nothing forever with all default settings.  We give it a\n name, \u003ccode\u003e\u003ca\u003esimpleDaemon\u003c/a\u003e\u003c/code\u003e, since you may want to use it as a template\n and modify only the fields that you need.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "CreateDaemon ()",
        "fct-source": "src/System-Posix-Daemonize.html#simpleDaemon",
        "fct-type": "function",
        "title": "simpleDaemon"
      },
      "index": {
        "description": "The simplest possible instance of CreateDaemon is CreateDaemon privilegedAction return program const forever return name Nothing user Nothing group Nothing syslogOptions pidfileDirectory Nothing which does nothing forever with all default settings We give it name simpleDaemon since you may want to use it as template and modify only the fields that you need",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "simpleDaemon",
        "normalized": "CreateDaemon()",
        "package": "hdaemonize-buildfix",
        "partial": "Daemon",
        "signature": "CreateDaemon()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:syslogOptions",
      "description": {
        "fct-descr": "\u003cp\u003eThe options the daemon should set on\n syslog.  You can safely leave this as \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "[Option]",
        "fct-source": "src/System-Posix-Daemonize.html#CreateDaemon",
        "fct-type": "function",
        "title": "syslogOptions"
      },
      "index": {
        "description": "The options the daemon should set on syslog You can safely leave this as",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "syslogOptions",
        "normalized": "[Option]",
        "package": "hdaemonize-buildfix",
        "partial": "Options",
        "signature": "[Option]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdaemonize-buildfix/docs/System-Posix-Daemonize.html#v:user",
      "description": {
        "fct-descr": "\u003cp\u003eMost daemons are initially run as root,\n and try to change to another user so they\n have fewer privileges and represent less of\n a security threat.  This field specifies\n which user it should try to run as.  If it\n is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, or if the user does not exist\n on the system, it next tries to become a\n user with the same name as the daemon, and\n if that fails, the user \u003ccode\u003edaemon\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Daemonize",
        "fct-package": "hdaemonize-buildfix",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-Posix-Daemonize.html#CreateDaemon",
        "fct-type": "function",
        "title": "user"
      },
      "index": {
        "description": "Most daemons are initially run as root and try to change to another user so they have fewer privileges and represent less of security threat This field specifies which user it should try to run as If it is Nothing or if the user does not exist on the system it next tries to become user with the same name as the daemon and if that fails the user daemon",
        "hierarchy": "System Posix Daemonize",
        "module": "System.Posix.Daemonize",
        "name": "user",
        "normalized": "",
        "package": "hdaemonize-buildfix",
        "partial": "",
        "signature": ""
      }
    }
  }
]