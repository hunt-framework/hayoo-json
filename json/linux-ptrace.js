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
        "word": "linux-ptrace"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSadly, only the OS thread which performed the ptrace_attach is allowed\n to mess with the traced process. This means that users of this module will\n need to forkOS or runInBoundThread in order to get reliable behaviour.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "Syscall",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-Syscall.html",
          "type": "module"
        },
        "index": {
          "description": "Sadly only the OS thread which performed the ptrace attach is allowed to mess with the traced process This means that users of this module will need to forkOS or runInBoundThread in order to get reliable behaviour",
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "Syscall",
          "package": "linux-ptrace",
          "partial": "Syscall",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Syscall",
          "name": "RemotePtr",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-Syscall.html#RemotePtr",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "RemotePtr",
          "package": "linux-ptrace",
          "partial": "Remote Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#t:RemotePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Linux.Ptrace.Syscall\",\"System.Linux.Ptrace\"]",
          "name": "castRemotePtr",
          "package": "linux-ptrace",
          "signature": "RemotePtr t -\u003e RemotePtr a",
          "source": "src/System-Linux-Ptrace-Syscall.html#castRemotePtr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:castRemotePtr\",\"http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:castRemotePtr\"]"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "castRemotePtr",
          "normalized": "RemotePtr a-\u003eRemotePtr b",
          "package": "linux-ptrace",
          "partial": "Remote Ptr",
          "signature": "RemotePtr t-\u003eRemotePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:castRemotePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach to a process.\n FIXME: handle EPERM. return IO Bool?\n\u003c/p\u003e",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_attach",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e IO ()",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_attach",
          "type": "function"
        },
        "index": {
          "description": "Attach to process FIXME handle EPERM return IO Bool",
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_attach",
          "normalized": "CPid-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_attach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_cont",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e Maybe Signal -\u003e IO ()",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_cont",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_cont",
          "normalized": "CPid-\u003eMaybe Signal-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eMaybe Signal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_detach",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e Maybe Signal -\u003e IO ()",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_detach",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_detach",
          "normalized": "CPid-\u003eMaybe Signal-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eMaybe Signal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_detach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_geteventmsg",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e IO CULong",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_geteventmsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_geteventmsg",
          "normalized": "CPid-\u003eIO CULong",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eIO CULong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_geteventmsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_getregs",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e IO Regs",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_getregs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_getregs",
          "normalized": "CPid-\u003eIO Regs",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eIO Regs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_getregs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the traced process a SIGKILL.\n\u003c/p\u003e",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_kill",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e IO ()",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_kill",
          "type": "function"
        },
        "index": {
          "description": "Send the traced process SIGKILL",
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_kill",
          "normalized": "CPid-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a word from the traced process.\n\u003c/p\u003e",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_peekdata",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e RemotePtr Word -\u003e IO Word",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_peekdata",
          "type": "function"
        },
        "index": {
          "description": "Read word from the traced process",
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_peekdata",
          "normalized": "CPid-\u003eRemotePtr Word-\u003eIO Word",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eRemotePtr Word-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_peekdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_peektext",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e RemotePtr Word -\u003e IO Word",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_peektext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_peektext",
          "normalized": "CPid-\u003eRemotePtr Word-\u003eIO Word",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eRemotePtr Word-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_peektext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_peekuser",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e RemotePtr Word -\u003e IO Word",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_peekuser",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_peekuser",
          "normalized": "CPid-\u003eRemotePtr Word-\u003eIO Word",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eRemotePtr Word-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_peekuser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a word to the traced process.\n\u003c/p\u003e",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_pokedata",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e RemotePtr Word -\u003e Word -\u003e IO ()",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_pokedata",
          "type": "function"
        },
        "index": {
          "description": "Write word to the traced process",
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_pokedata",
          "normalized": "CPid-\u003eRemotePtr Word-\u003eWord-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eRemotePtr Word-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_pokedata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_poketext",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e RemotePtr Word -\u003e Word -\u003e IO ()",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_poketext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_poketext",
          "normalized": "CPid-\u003eRemotePtr Word-\u003eWord-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eRemotePtr Word-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_poketext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_pokeuser",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e RemotePtr Word -\u003e Word -\u003e IO ()",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_pokeuser",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_pokeuser",
          "normalized": "CPid-\u003eRemotePtr Word-\u003eWord-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eRemotePtr Word-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_pokeuser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_setoptions",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e [Option] -\u003e IO ()",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_setoptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_setoptions",
          "normalized": "CPid-\u003e[Option]-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "CPid-\u003e[Option]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_setoptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_setregs",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e Regs -\u003e IO ()",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_setregs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_setregs",
          "normalized": "CPid-\u003eRegs-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eRegs-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_setregs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_singlestep",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e Maybe Signal -\u003e IO ()",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_singlestep",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_singlestep",
          "normalized": "CPid-\u003eMaybe Signal-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eMaybe Signal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_singlestep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinue the traced process, possibly with a signal.\n\u003c/p\u003e",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_syscall",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e Maybe Signal -\u003e IO ()",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_syscall",
          "type": "function"
        },
        "index": {
          "description": "Continue the traced process possibly with signal",
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_syscall",
          "normalized": "CPid-\u003eMaybe Signal-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "CPid-\u003eMaybe Signal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_syscall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke the ptrace system call with various arguments.\n\u003c/p\u003e\u003cp\u003ePerform one of the PTRACE_PEEK* operations.\n\u003c/p\u003e\u003cp\u003ePerform one of the PTRACE_POKE* operations.\n\u003c/p\u003e\u003cp\u003ePerform one of the PTRACE_GET* operations.\n\u003c/p\u003e\u003cp\u003ePerform one of the PTRACE_SET* operations.\n\u003c/p\u003e\u003cp\u003eResume a traced process.\n\u003c/p\u003e\u003cp\u003eAttach the parent process to this process.\n\u003c/p\u003e",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_traceme",
          "package": "linux-ptrace",
          "signature": "IO ()",
          "source": "src/System-Linux-Ptrace-Syscall.html#ptrace_traceme",
          "type": "function"
        },
        "index": {
          "description": "Invoke the ptrace system call with various arguments Perform one of the PTRACE PEEK operations Perform one of the PTRACE POKE operations Perform one of the PTRACE GET operations Perform one of the PTRACE SET operations Resume traced process Attach the parent process to this process",
          "hierarchy": "System Linux Ptrace Syscall",
          "module": "System.Linux.Ptrace.Syscall",
          "name": "ptrace_traceme",
          "normalized": "IO()",
          "package": "linux-ptrace",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Syscall.html#v:ptrace_traceme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Types",
          "name": "Types",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Types",
          "module": "System.Linux.Ptrace.Types",
          "name": "Types",
          "package": "linux-ptrace",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Types",
          "name": "Csiginfo_t",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-Types.html#Csiginfo_t",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Types",
          "module": "System.Linux.Ptrace.Types",
          "name": "Csiginfo_t",
          "package": "linux-ptrace",
          "partial": "Csiginfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#t:Csiginfo_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Types",
          "name": "Cuser_fpregs_struct",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-Types.html#Cuser_fpregs_struct",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Types",
          "module": "System.Linux.Ptrace.Types",
          "name": "Cuser_fpregs_struct",
          "package": "linux-ptrace",
          "partial": "Cuser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#t:Cuser_fpregs_struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Types",
          "name": "Regs",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-Types.html#Regs",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Types",
          "module": "System.Linux.Ptrace.Types",
          "name": "Regs",
          "package": "linux-ptrace",
          "partial": "Regs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#t:Regs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Types",
          "name": "X86Regs",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Types",
          "module": "System.Linux.Ptrace.Types",
          "name": "X86Regs",
          "package": "linux-ptrace",
          "partial": "Regs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#t:X86Regs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Types",
          "name": "X86_64Regs",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Types",
          "module": "System.Linux.Ptrace.Types",
          "name": "X86_64Regs",
          "package": "linux-ptrace",
          "partial": "Regs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#t:X86_64Regs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Types",
          "name": "X86",
          "package": "linux-ptrace",
          "signature": "X86 X86Regs",
          "source": "src/System-Linux-Ptrace-Types.html#Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Types",
          "module": "System.Linux.Ptrace.Types",
          "name": "X86",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#v:X86"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.Types",
          "name": "X86_64",
          "package": "linux-ptrace",
          "signature": "X86_64 X86_64Regs",
          "source": "src/System-Linux-Ptrace-Types.html#Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace Types",
          "module": "System.Linux.Ptrace.Types",
          "name": "X86_64",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-Types.html#v:X86_64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "X86Regs",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-X86Regs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "X86Regs",
          "package": "linux-ptrace",
          "partial": "Regs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "X86Regs",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "X86Regs",
          "package": "linux-ptrace",
          "partial": "Regs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#t:X86Regs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "X86Regs",
          "package": "linux-ptrace",
          "signature": "X86Regs",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "X86Regs",
          "package": "linux-ptrace",
          "partial": "Regs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:X86Regs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "eax",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "eax",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:eax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "ebp",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "ebp",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:ebp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "ebx",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "ebx",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:ebx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "ecx",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "ecx",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:ecx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "edi",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "edi",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:edi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "edx",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "edx",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:edx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "eflags",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "eflags",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:eflags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "eip",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "eip",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:eip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "esi",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "esi",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:esi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "esp",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "esp",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:esp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "orig_eax",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "orig_eax",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:orig_eax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "xcs",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "xcs",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:xcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "xds",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "xds",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:xds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "xes",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "xes",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:xes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "xfs",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "xfs",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:xfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "xgs",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "xgs",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:xgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "xss",
          "package": "linux-ptrace",
          "signature": "Word32",
          "source": "src/System-Linux-Ptrace-X86Regs.html#X86Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86Regs",
          "module": "System.Linux.Ptrace.X86Regs",
          "name": "xss",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86Regs.html#v:xss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "X86_64Regs",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "X86_64Regs",
          "package": "linux-ptrace",
          "partial": "Regs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "X86_64Regs",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "X86_64Regs",
          "package": "linux-ptrace",
          "partial": "Regs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#t:X86_64Regs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "X86_64Regs",
          "package": "linux-ptrace",
          "signature": "X86_64Regs",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "X86_64Regs",
          "package": "linux-ptrace",
          "partial": "Regs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:X86_64Regs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "cs",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "cs",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:cs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "ds",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "ds",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:ds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "eflags",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "eflags",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:eflags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "es",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "es",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:es"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "fs",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "fs",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:fs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "fs_base",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "fs_base",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:fs_base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "gs",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "gs",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:gs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "gs_base",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "gs_base",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:gs_base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "orig_rax",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "orig_rax",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:orig_rax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r10",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r10",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r11",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r11",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r12",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r12",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r13",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r13",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r14",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r14",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r15",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r15",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r8",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r8",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r9",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "r9",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:r9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rax",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rax",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rbp",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rbp",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rbp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rbx",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rbx",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rbx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rcx",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rcx",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rcx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rdi",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rdi",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rdi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rdx",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rdx",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rip",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rip",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rsi",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rsi",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rsi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rsp",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "rsp",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:rsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "ss",
          "package": "linux-ptrace",
          "signature": "Word64",
          "source": "src/System-Linux-Ptrace-X86_64Regs.html#X86_64Regs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace X86_64Regs",
          "module": "System.Linux.Ptrace.X86_64Regs",
          "name": "ss",
          "package": "linux-ptrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace-X86_64Regs.html#v:ss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace",
          "name": "Ptrace",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Linux Ptrace",
          "module": "System.Linux.Ptrace",
          "name": "Ptrace",
          "package": "linux-ptrace",
          "partial": "Ptrace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace",
          "name": "RemotePtr",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace-Syscall.html#RemotePtr",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Linux Ptrace",
          "module": "System.Linux.Ptrace",
          "name": "RemotePtr",
          "package": "linux-ptrace",
          "partial": "Remote Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#t:RemotePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace",
          "name": "TracedProcess",
          "package": "linux-ptrace",
          "source": "src/System-Linux-Ptrace.html#TracedProcess",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Linux Ptrace",
          "module": "System.Linux.Ptrace",
          "name": "TracedProcess",
          "package": "linux-ptrace",
          "partial": "Traced Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#t:TracedProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach to a new process\ntraceForkExec :: IO () -\u003e FilePath -\u003e [String] -\u003e IO TracedProcess\ntraceForkExec setup file argv = do\n  pid \u003ca\u003e- fork (setup \u003c/a\u003e\u003e ptrace_traceme \u003e\u003e execvp file argv)\n  waitpid pid\n  return $ TracedProcess pid\n\u003c/p\u003e\u003cp\u003eContinue a process until it hits a signal\n FIXME: return info about the signal\n\u003c/p\u003e",
          "module": "System.Linux.Ptrace",
          "name": "continue",
          "package": "linux-ptrace",
          "signature": "TracedProcess -\u003e IO ()",
          "source": "src/System-Linux-Ptrace.html#continue",
          "type": "function"
        },
        "index": {
          "description": "Attach to new process traceForkExec IO FilePath String IO TracedProcess traceForkExec setup file argv do pid fork setup ptrace traceme execvp file argv waitpid pid return TracedProcess pid Continue process until it hits signal FIXME return info about the signal",
          "hierarchy": "System Linux Ptrace",
          "module": "System.Linux.Ptrace",
          "name": "continue",
          "normalized": "TracedProcess-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "TracedProcess-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace",
          "name": "detach",
          "package": "linux-ptrace",
          "signature": "TracedProcess -\u003e IO ()",
          "source": "src/System-Linux-Ptrace.html#detach",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace",
          "module": "System.Linux.Ptrace",
          "name": "detach",
          "normalized": "TracedProcess-\u003eIO()",
          "package": "linux-ptrace",
          "signature": "TracedProcess-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:detach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace",
          "name": "peek",
          "package": "linux-ptrace",
          "signature": "TracedProcess -\u003e RemotePtr a -\u003e IO a",
          "source": "src/System-Linux-Ptrace.html#peek",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace",
          "module": "System.Linux.Ptrace",
          "name": "peek",
          "normalized": "TracedProcess-\u003eRemotePtr a-\u003eIO a",
          "package": "linux-ptrace",
          "signature": "TracedProcess-\u003eRemotePtr a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace",
          "name": "peekBytes",
          "package": "linux-ptrace",
          "signature": "TracedProcess -\u003e RemotePtr a -\u003e Int -\u003e IO ByteString",
          "source": "src/System-Linux-Ptrace.html#peekBytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace",
          "module": "System.Linux.Ptrace",
          "name": "peekBytes",
          "normalized": "TracedProcess-\u003eRemotePtr a-\u003eInt-\u003eIO ByteString",
          "package": "linux-ptrace",
          "partial": "Bytes",
          "signature": "TracedProcess-\u003eRemotePtr a-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:peekBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace",
          "name": "pid",
          "package": "linux-ptrace",
          "signature": "TracedProcess -\u003e CPid",
          "source": "src/System-Linux-Ptrace.html#pid",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace",
          "module": "System.Linux.Ptrace",
          "name": "pid",
          "normalized": "TracedProcess-\u003eCPid",
          "package": "linux-ptrace",
          "signature": "TracedProcess-\u003eCPid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:pid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Ptrace",
          "name": "pokeBytes",
          "package": "linux-ptrace",
          "signature": "TracedProcess -\u003e RemotePtr a -\u003e ByteString -\u003e IO ()",
          "source": "src/System-Linux-Ptrace.html#pokeBytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Ptrace",
          "module": "System.Linux.Ptrace",
          "name": "pokeBytes",
          "normalized": "TracedProcess-\u003eRemotePtr a-\u003eByteString-\u003eIO()",
          "package": "linux-ptrace",
          "partial": "Bytes",
          "signature": "TracedProcess-\u003eRemotePtr a-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:pokeBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach to an existing process\n\u003c/p\u003e",
          "module": "System.Linux.Ptrace",
          "name": "traceProcess",
          "package": "linux-ptrace",
          "signature": "CPid -\u003e IO TracedProcess",
          "source": "src/System-Linux-Ptrace.html#traceProcess",
          "type": "function"
        },
        "index": {
          "description": "Attach to an existing process",
          "hierarchy": "System Linux Ptrace",
          "module": "System.Linux.Ptrace",
          "name": "traceProcess",
          "normalized": "CPid-\u003eIO TracedProcess",
          "package": "linux-ptrace",
          "partial": "Process",
          "signature": "CPid-\u003eIO TracedProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-ptrace/docs/System-Linux-Ptrace.html#v:traceProcess"
      }
    }
  ]
]