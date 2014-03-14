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
        "word": "hsyscall"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Syscall",
          "name": "Syscall",
          "package": "hsyscall",
          "source": "src/System-Syscall.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Syscall",
          "module": "System.Syscall",
          "name": "Syscall",
          "package": "hsyscall",
          "partial": "Syscall",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsyscall/docs/System-Syscall.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Syscall",
          "name": "c_close",
          "package": "hsyscall",
          "signature": "CInt -\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Syscall",
          "module": "System.Syscall",
          "name": "c_close",
          "normalized": "CInt-\u003eIO CInt",
          "package": "hsyscall",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyscall/docs/System-Syscall.html#v:c_close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Syscall",
          "name": "c_fcntl_lock",
          "package": "hsyscall",
          "signature": "CInt -\u003e CInt -\u003e Ptr CFLock -\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Syscall",
          "module": "System.Syscall",
          "name": "c_fcntl_lock",
          "normalized": "CInt-\u003eCInt-\u003ePtr CFLock-\u003eIO CInt",
          "package": "hsyscall",
          "signature": "CInt-\u003eCInt-\u003ePtr CFLock-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyscall/docs/System-Syscall.html#v:c_fcntl_lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Syscall",
          "name": "c_fcntl_read",
          "package": "hsyscall",
          "signature": "CInt -\u003e CInt -\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Syscall",
          "module": "System.Syscall",
          "name": "c_fcntl_read",
          "normalized": "CInt-\u003eCInt-\u003eIO CInt",
          "package": "hsyscall",
          "signature": "CInt-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyscall/docs/System-Syscall.html#v:c_fcntl_read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Syscall",
          "name": "c_fcntl_write",
          "package": "hsyscall",
          "signature": "CInt -\u003e CInt -\u003e CLong -\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Syscall",
          "module": "System.Syscall",
          "name": "c_fcntl_write",
          "normalized": "CInt-\u003eCInt-\u003eCLong-\u003eIO CInt",
          "package": "hsyscall",
          "signature": "CInt-\u003eCInt-\u003eCLong-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyscall/docs/System-Syscall.html#v:c_fcntl_write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Syscall",
          "name": "c_open",
          "package": "hsyscall",
          "signature": "CFilePath -\u003e CInt -\u003e CMode -\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Syscall",
          "module": "System.Syscall",
          "name": "c_open",
          "normalized": "CFilePath-\u003eCInt-\u003eCMode-\u003eIO CInt",
          "package": "hsyscall",
          "signature": "CFilePath-\u003eCInt-\u003eCMode-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyscall/docs/System-Syscall.html#v:c_open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Syscall",
          "name": "c_read",
          "package": "hsyscall",
          "signature": "CInt -\u003e Ptr Word8 -\u003e CSize -\u003e IO CSsize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Syscall",
          "module": "System.Syscall",
          "name": "c_read",
          "normalized": "CInt-\u003ePtr Word-\u003eCSize-\u003eIO CSsize",
          "package": "hsyscall",
          "signature": "CInt-\u003ePtr Word-\u003eCSize-\u003eIO CSsize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyscall/docs/System-Syscall.html#v:c_read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA unified primitive signature for the sendfile syscall.\n\u003c/p\u003e",
          "module": "System.Syscall",
          "name": "c_sendfile",
          "package": "hsyscall",
          "signature": "Fd -\u003e Fd -\u003e COff -\u003e CSize -\u003e IO (Either Errno CSsize)",
          "source": "src/System-Syscall.html#c_sendfile",
          "type": "function"
        },
        "index": {
          "description": "unified primitive signature for the sendfile syscall",
          "hierarchy": "System Syscall",
          "module": "System.Syscall",
          "name": "c_sendfile",
          "normalized": "Fd-\u003eFd-\u003eCOff-\u003eCSize-\u003eIO(Either Errno CSsize)",
          "package": "hsyscall",
          "signature": "Fd-\u003eFd-\u003eCOff-\u003eCSize-\u003eIO(Either Errno CSsize)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyscall/docs/System-Syscall.html#v:c_sendfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Syscall",
          "name": "c_stat",
          "package": "hsyscall",
          "signature": "CFilePath -\u003e Ptr CStat -\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Syscall",
          "module": "System.Syscall",
          "name": "c_stat",
          "normalized": "CFilePath-\u003ePtr CStat-\u003eIO CInt",
          "package": "hsyscall",
          "signature": "CFilePath-\u003ePtr CStat-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyscall/docs/System-Syscall.html#v:c_stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Syscall",
          "name": "c_write",
          "package": "hsyscall",
          "signature": "CInt -\u003e Ptr Word8 -\u003e CSize -\u003e IO CSsize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Syscall",
          "module": "System.Syscall",
          "name": "c_write",
          "normalized": "CInt-\u003ePtr Word-\u003eCSize-\u003eIO CSsize",
          "package": "hsyscall",
          "signature": "CInt-\u003ePtr Word-\u003eCSize-\u003eIO CSsize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyscall/docs/System-Syscall.html#v:c_write"
      }
    }
  ]
]