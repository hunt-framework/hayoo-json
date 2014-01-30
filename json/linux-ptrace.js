[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSadly, only the OS thread which performed the ptrace_attach is allowed\n to mess with the traced process. This means that users of this module will\n need to forkOS or runInBoundThread in order to get reliable behaviour.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "module",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html",
        "fct-type": "module",
        "title": "Syscall"
      },
      "index": {
        "description": "Sadly only the OS thread which performed the ptrace attach is allowed to mess with the traced process This means that users of this module will need to forkOS or runInBoundThread in order to get reliable behaviour",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "Syscall",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Syscall",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#t:RemotePtr",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "data",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#RemotePtr",
        "fct-type": "data",
        "title": "RemotePtr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "RemotePtr",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Remote Ptr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:castRemotePtr",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "RemotePtr t -\u003e RemotePtr a",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#castRemotePtr",
        "fct-type": "function",
        "title": "castRemotePtr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "castRemotePtr",
        "normalized": "RemotePtr a-\u003eRemotePtr b",
        "package": "linux-ptrace",
        "partial": "Remote Ptr",
        "signature": "RemotePtr t-\u003eRemotePtr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_attach",
      "description": {
        "fct-descr": "\u003cp\u003eAttach to a process.\n FIXME: handle EPERM. return IO Bool?\n\u003c/p\u003e",
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_attach",
        "fct-type": "function",
        "title": "ptrace_attach"
      },
      "index": {
        "description": "Attach to process FIXME handle EPERM return IO Bool",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_attach",
        "normalized": "CPid-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_cont",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e Maybe Signal -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_cont",
        "fct-type": "function",
        "title": "ptrace_cont"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_cont",
        "normalized": "CPid-\u003eMaybe Signal-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eMaybe Signal-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_detach",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e Maybe Signal -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_detach",
        "fct-type": "function",
        "title": "ptrace_detach"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_detach",
        "normalized": "CPid-\u003eMaybe Signal-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eMaybe Signal-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_geteventmsg",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e IO CULong",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_geteventmsg",
        "fct-type": "function",
        "title": "ptrace_geteventmsg"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_geteventmsg",
        "normalized": "CPid-\u003eIO CULong",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eIO CULong"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_getregs",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e IO Regs",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_getregs",
        "fct-type": "function",
        "title": "ptrace_getregs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_getregs",
        "normalized": "CPid-\u003eIO Regs",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eIO Regs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_kill",
      "description": {
        "fct-descr": "\u003cp\u003eSend the traced process a SIGKILL.\n\u003c/p\u003e",
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_kill",
        "fct-type": "function",
        "title": "ptrace_kill"
      },
      "index": {
        "description": "Send the traced process SIGKILL",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_kill",
        "normalized": "CPid-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_peekdata",
      "description": {
        "fct-descr": "\u003cp\u003eRead a word from the traced process.\n\u003c/p\u003e",
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e RemotePtr Word -\u003e IO Word",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_peekdata",
        "fct-type": "function",
        "title": "ptrace_peekdata"
      },
      "index": {
        "description": "Read word from the traced process",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_peekdata",
        "normalized": "CPid-\u003eRemotePtr Word-\u003eIO Word",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eRemotePtr Word-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_peektext",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e RemotePtr Word -\u003e IO Word",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_peektext",
        "fct-type": "function",
        "title": "ptrace_peektext"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_peektext",
        "normalized": "CPid-\u003eRemotePtr Word-\u003eIO Word",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eRemotePtr Word-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_peekuser",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e RemotePtr Word -\u003e IO Word",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_peekuser",
        "fct-type": "function",
        "title": "ptrace_peekuser"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_peekuser",
        "normalized": "CPid-\u003eRemotePtr Word-\u003eIO Word",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eRemotePtr Word-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_pokedata",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a word to the traced process.\n\u003c/p\u003e",
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e RemotePtr Word -\u003e Word -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_pokedata",
        "fct-type": "function",
        "title": "ptrace_pokedata"
      },
      "index": {
        "description": "Write word to the traced process",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_pokedata",
        "normalized": "CPid-\u003eRemotePtr Word-\u003eWord-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eRemotePtr Word-\u003eWord-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_poketext",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e RemotePtr Word -\u003e Word -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_poketext",
        "fct-type": "function",
        "title": "ptrace_poketext"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_poketext",
        "normalized": "CPid-\u003eRemotePtr Word-\u003eWord-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eRemotePtr Word-\u003eWord-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_pokeuser",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e RemotePtr Word -\u003e Word -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_pokeuser",
        "fct-type": "function",
        "title": "ptrace_pokeuser"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_pokeuser",
        "normalized": "CPid-\u003eRemotePtr Word-\u003eWord-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eRemotePtr Word-\u003eWord-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_setoptions",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e [Option] -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_setoptions",
        "fct-type": "function",
        "title": "ptrace_setoptions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_setoptions",
        "normalized": "CPid-\u003e[Option]-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003e[Option]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_setregs",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e Regs -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_setregs",
        "fct-type": "function",
        "title": "ptrace_setregs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_setregs",
        "normalized": "CPid-\u003eRegs-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eRegs-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_singlestep",
      "description": {
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e Maybe Signal -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_singlestep",
        "fct-type": "function",
        "title": "ptrace_singlestep"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_singlestep",
        "normalized": "CPid-\u003eMaybe Signal-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eMaybe Signal-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_syscall",
      "description": {
        "fct-descr": "\u003cp\u003eContinue the traced process, possibly with a signal.\n\u003c/p\u003e",
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e Maybe Signal -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_syscall",
        "fct-type": "function",
        "title": "ptrace_syscall"
      },
      "index": {
        "description": "Continue the traced process possibly with signal",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_syscall",
        "normalized": "CPid-\u003eMaybe Signal-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "CPid-\u003eMaybe Signal-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_traceme",
      "description": {
        "fct-descr": "\u003cp\u003eInvoke the ptrace system call with various arguments.\n\u003c/p\u003e\u003cp\u003ePerform one of the PTRACE_PEEK* operations.\n\u003c/p\u003e\u003cp\u003ePerform one of the PTRACE_POKE* operations.\n\u003c/p\u003e\u003cp\u003ePerform one of the PTRACE_GET* operations.\n\u003c/p\u003e\u003cp\u003ePerform one of the PTRACE_SET* operations.\n\u003c/p\u003e\u003cp\u003eResume a traced process.\n\u003c/p\u003e\u003cp\u003eAttach the parent process to this process.\n\u003c/p\u003e",
        "fct-module": "System.Linux.Ptrace.Syscall",
        "fct-package": "linux-ptrace",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#ptrace_traceme",
        "fct-type": "function",
        "title": "ptrace_traceme"
      },
      "index": {
        "description": "Invoke the ptrace system call with various arguments Perform one of the PTRACE PEEK operations Perform one of the PTRACE POKE operations Perform one of the PTRACE GET operations Perform one of the PTRACE SET operations Resume traced process Attach the parent process to this process",
        "hierarchy": "System Linux Ptrace Syscall",
        "module": "System.Linux.Ptrace.Syscall",
        "name": "ptrace_traceme",
        "normalized": "IO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#",
      "description": {
        "fct-module": "System.Linux.Ptrace.Types",
        "fct-package": "linux-ptrace",
        "fct-signature": "module",
        "fct-source": "src/System-Linux-Ptrace-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Types",
        "module": "System.Linux.Ptrace.Types",
        "name": "Types",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#t:Csiginfo_t",
      "description": {
        "fct-module": "System.Linux.Ptrace.Types",
        "fct-package": "linux-ptrace",
        "fct-signature": "data",
        "fct-source": "src/System-Linux-Ptrace-Types.html#Csiginfo_t",
        "fct-type": "data",
        "title": "Csiginfo_t"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Types",
        "module": "System.Linux.Ptrace.Types",
        "name": "Csiginfo_t",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Csiginfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#t:Cuser_fpregs_struct",
      "description": {
        "fct-module": "System.Linux.Ptrace.Types",
        "fct-package": "linux-ptrace",
        "fct-signature": "data",
        "fct-source": "src/System-Linux-Ptrace-Types.html#Cuser_fpregs_struct",
        "fct-type": "data",
        "title": "Cuser_fpregs_struct"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Types",
        "module": "System.Linux.Ptrace.Types",
        "name": "Cuser_fpregs_struct",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Cuser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#t:Regs",
      "description": {
        "fct-module": "System.Linux.Ptrace.Types",
        "fct-package": "linux-ptrace",
        "fct-signature": "data",
        "fct-source": "src/System-Linux-Ptrace-Types.html#Regs",
        "fct-type": "data",
        "title": "Regs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Types",
        "module": "System.Linux.Ptrace.Types",
        "name": "Regs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Regs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#t:X86Regs",
      "description": {
        "fct-module": "System.Linux.Ptrace.Types",
        "fct-package": "linux-ptrace",
        "fct-signature": "data",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "data",
        "title": "X86Regs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Types",
        "module": "System.Linux.Ptrace.Types",
        "name": "X86Regs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Regs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#t:X86_64Regs",
      "description": {
        "fct-module": "System.Linux.Ptrace.Types",
        "fct-package": "linux-ptrace",
        "fct-signature": "data",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "data",
        "title": "X86_64Regs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Types",
        "module": "System.Linux.Ptrace.Types",
        "name": "X86_64Regs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Regs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#v:X86",
      "description": {
        "fct-module": "System.Linux.Ptrace.Types",
        "fct-package": "linux-ptrace",
        "fct-signature": "X86 X86Regs",
        "fct-source": "src/System-Linux-Ptrace-Types.html#Regs",
        "fct-type": "function",
        "title": "X86"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Types",
        "module": "System.Linux.Ptrace.Types",
        "name": "X86",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#v:X86_64",
      "description": {
        "fct-module": "System.Linux.Ptrace.Types",
        "fct-package": "linux-ptrace",
        "fct-signature": "X86_64 X86_64Regs",
        "fct-source": "src/System-Linux-Ptrace-Types.html#Regs",
        "fct-type": "function",
        "title": "X86_64"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace Types",
        "module": "System.Linux.Ptrace.Types",
        "name": "X86_64",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#",
      "description": {
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "module",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html",
        "fct-type": "module",
        "title": "X86Regs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "X86Regs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Regs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#t:X86Regs",
      "description": {
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "data",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "data",
        "title": "X86Regs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "X86Regs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Regs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:X86Regs",
      "description": {
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "X86Regs",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "X86Regs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "X86Regs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Regs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:eax",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "eax"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "eax",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:ebp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "ebp"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "ebp",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:ebx",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "ebx"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "ebx",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:ecx",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "ecx"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "ecx",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:edi",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "edi"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "edi",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:edx",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "edx"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "edx",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:eflags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "eflags"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "eflags",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:eip",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "eip"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "eip",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:esi",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "esi"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "esi",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:esp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "esp"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "esp",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:orig_eax",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "orig_eax"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "orig_eax",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:xcs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "xcs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "xcs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:xds",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "xds"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "xds",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:xes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "xes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "xes",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:xfs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "xfs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "xfs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:xgs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "xgs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "xgs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:xss",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word32",
        "fct-source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
        "fct-type": "function",
        "title": "xss"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86Regs",
        "module": "System.Linux.Ptrace.X86Regs",
        "name": "xss",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#",
      "description": {
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "module",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html",
        "fct-type": "module",
        "title": "X86_64Regs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "X86_64Regs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Regs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#t:X86_64Regs",
      "description": {
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "data",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "data",
        "title": "X86_64Regs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "X86_64Regs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Regs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:X86_64Regs",
      "description": {
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "X86_64Regs",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "X86_64Regs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "X86_64Regs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Regs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:cs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "cs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "cs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:ds",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "ds"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "ds",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:eflags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "eflags"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "eflags",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:es",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "es"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "es",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:fs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "fs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "fs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:fs_base",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "fs_base"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "fs_base",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:gs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "gs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "gs",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:gs_base",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "gs_base"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "gs_base",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:orig_rax",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "orig_rax"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "orig_rax",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r10",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "r10"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "r10",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r11",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "r11"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "r11",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r12",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "r12"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "r12",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r13",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "r13"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "r13",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r14",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "r14"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "r14",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r15",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "r15"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "r15",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r8",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "r8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "r8",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r9",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "r9"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "r9",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rax",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "rax"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "rax",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rbp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "rbp"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "rbp",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rbx",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "rbx"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "rbx",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rcx",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "rcx"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "rcx",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rdi",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "rdi"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "rdi",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rdx",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "rdx"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "rdx",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rip",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "rip"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "rip",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rsi",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "rsi"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "rsi",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rsp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "rsp"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "rsp",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:ss",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Linux.Ptrace.X86_64Regs",
        "fct-package": "linux-ptrace",
        "fct-signature": "Word64",
        "fct-source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
        "fct-type": "function",
        "title": "ss"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace X86_64Regs",
        "module": "System.Linux.Ptrace.X86_64Regs",
        "name": "ss",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#",
      "description": {
        "fct-module": "System.Linux.Ptrace",
        "fct-package": "linux-ptrace",
        "fct-signature": "module",
        "fct-source": "src/System-Linux-Ptrace.html",
        "fct-type": "module",
        "title": "Ptrace"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace",
        "module": "System.Linux.Ptrace",
        "name": "Ptrace",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Ptrace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#t:RemotePtr",
      "description": {
        "fct-module": "System.Linux.Ptrace",
        "fct-package": "linux-ptrace",
        "fct-signature": "data",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#RemotePtr",
        "fct-type": "data",
        "title": "RemotePtr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace",
        "module": "System.Linux.Ptrace",
        "name": "RemotePtr",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Remote Ptr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#t:TracedProcess",
      "description": {
        "fct-module": "System.Linux.Ptrace",
        "fct-package": "linux-ptrace",
        "fct-signature": "data",
        "fct-source": "src/System-Linux-Ptrace.html#TracedProcess",
        "fct-type": "data",
        "title": "TracedProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace",
        "module": "System.Linux.Ptrace",
        "name": "TracedProcess",
        "normalized": "",
        "package": "linux-ptrace",
        "partial": "Traced Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:castRemotePtr",
      "description": {
        "fct-module": "System.Linux.Ptrace",
        "fct-package": "linux-ptrace",
        "fct-signature": "RemotePtr t -\u003e RemotePtr a",
        "fct-source": "src/System-Linux-Ptrace-Syscall.html#castRemotePtr",
        "fct-type": "function",
        "title": "castRemotePtr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace",
        "module": "System.Linux.Ptrace",
        "name": "castRemotePtr",
        "normalized": "RemotePtr a-\u003eRemotePtr b",
        "package": "linux-ptrace",
        "partial": "Remote Ptr",
        "signature": "RemotePtr t-\u003eRemotePtr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:continue",
      "description": {
        "fct-descr": "\u003cp\u003eAttach to a new process\ntraceForkExec :: IO () -\u003e FilePath -\u003e [String] -\u003e IO TracedProcess\ntraceForkExec setup file argv = do\n  pid \u003ca\u003e- fork (setup \u003c/a\u003e\u003e ptrace_traceme \u003e\u003e execvp file argv)\n  waitpid pid\n  return $ TracedProcess pid\n\u003c/p\u003e\u003cp\u003eContinue a process until it hits a signal\n FIXME: return info about the signal\n\u003c/p\u003e",
        "fct-module": "System.Linux.Ptrace",
        "fct-package": "linux-ptrace",
        "fct-signature": "TracedProcess -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace.html#continue",
        "fct-type": "function",
        "title": "continue"
      },
      "index": {
        "description": "Attach to new process traceForkExec IO FilePath String IO TracedProcess traceForkExec setup file argv do pid fork setup ptrace traceme execvp file argv waitpid pid return TracedProcess pid Continue process until it hits signal FIXME return info about the signal",
        "hierarchy": "System Linux Ptrace",
        "module": "System.Linux.Ptrace",
        "name": "continue",
        "normalized": "TracedProcess-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "TracedProcess-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:detach",
      "description": {
        "fct-module": "System.Linux.Ptrace",
        "fct-package": "linux-ptrace",
        "fct-signature": "TracedProcess -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace.html#detach",
        "fct-type": "function",
        "title": "detach"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace",
        "module": "System.Linux.Ptrace",
        "name": "detach",
        "normalized": "TracedProcess-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "TracedProcess-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:peek",
      "description": {
        "fct-module": "System.Linux.Ptrace",
        "fct-package": "linux-ptrace",
        "fct-signature": "TracedProcess -\u003e RemotePtr a -\u003e IO a",
        "fct-source": "src/System-Linux-Ptrace.html#peek",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace",
        "module": "System.Linux.Ptrace",
        "name": "peek",
        "normalized": "TracedProcess-\u003eRemotePtr a-\u003eIO a",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "TracedProcess-\u003eRemotePtr a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:peekBytes",
      "description": {
        "fct-module": "System.Linux.Ptrace",
        "fct-package": "linux-ptrace",
        "fct-signature": "TracedProcess -\u003e RemotePtr a -\u003e Int -\u003e IO ByteString",
        "fct-source": "src/System-Linux-Ptrace.html#peekBytes",
        "fct-type": "function",
        "title": "peekBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace",
        "module": "System.Linux.Ptrace",
        "name": "peekBytes",
        "normalized": "TracedProcess-\u003eRemotePtr a-\u003eInt-\u003eIO ByteString",
        "package": "linux-ptrace",
        "partial": "Bytes",
        "signature": "TracedProcess-\u003eRemotePtr a-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:pid",
      "description": {
        "fct-module": "System.Linux.Ptrace",
        "fct-package": "linux-ptrace",
        "fct-signature": "TracedProcess -\u003e CPid",
        "fct-source": "src/System-Linux-Ptrace.html#pid",
        "fct-type": "function",
        "title": "pid"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace",
        "module": "System.Linux.Ptrace",
        "name": "pid",
        "normalized": "TracedProcess-\u003eCPid",
        "package": "linux-ptrace",
        "partial": "",
        "signature": "TracedProcess-\u003eCPid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:pokeBytes",
      "description": {
        "fct-module": "System.Linux.Ptrace",
        "fct-package": "linux-ptrace",
        "fct-signature": "TracedProcess -\u003e RemotePtr a -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/System-Linux-Ptrace.html#pokeBytes",
        "fct-type": "function",
        "title": "pokeBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Linux Ptrace",
        "module": "System.Linux.Ptrace",
        "name": "pokeBytes",
        "normalized": "TracedProcess-\u003eRemotePtr a-\u003eByteString-\u003eIO()",
        "package": "linux-ptrace",
        "partial": "Bytes",
        "signature": "TracedProcess-\u003eRemotePtr a-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:traceProcess",
      "description": {
        "fct-descr": "\u003cp\u003eAttach to an existing process\n\u003c/p\u003e",
        "fct-module": "System.Linux.Ptrace",
        "fct-package": "linux-ptrace",
        "fct-signature": "CPid -\u003e IO TracedProcess",
        "fct-source": "src/System-Linux-Ptrace.html#traceProcess",
        "fct-type": "function",
        "title": "traceProcess"
      },
      "index": {
        "description": "Attach to an existing process",
        "hierarchy": "System Linux Ptrace",
        "module": "System.Linux.Ptrace",
        "name": "traceProcess",
        "normalized": "CPid-\u003eIO TracedProcess",
        "package": "linux-ptrace",
        "partial": "Process",
        "signature": "CPid-\u003eIO TracedProcess"
      }
    }
  }
]