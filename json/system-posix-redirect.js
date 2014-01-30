[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-posix-redirect/docs/System-Posix-Redirect.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMisbehaved third-party libraries (usually not written in Haskell)\nmay print error messages directly to stdout or stderr when we would\nactually like to capture them and propagate them as a normal exception.\nIn such cases, it would be useful to temporarily override those file\ndescriptors to point to a pipe that we control.\n\u003c/p\u003e\u003cp\u003eThis module is not portable and not thread safe.  However, it can\nsafely manage arbitrarily large amounts of data, as it spins off another\nthread to read from the pipe created; therefore, you must use -threaded\nto compile a program with this.  If you are making a foreign call,\nyou must ensure that the foreign call is marked safe or there is a\npossibility of deadlock.\n\u003c/p\u003e\u003cp\u003eWhile this module is an interesting novelty, it is the module author's\nopinion that it is not a sustainable method for making C libraries\nbehave properly, primarily due to its unportability (this trick does not\nappear to be possible on Windows).  Use at your own risk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.Redirect",
        "fct-package": "system-posix-redirect",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-Redirect.html",
        "fct-type": "module",
        "title": "Redirect"
      },
      "index": {
        "description": "Misbehaved third-party libraries usually not written in Haskell may print error messages directly to stdout or stderr when we would actually like to capture them and propagate them as normal exception In such cases it would be useful to temporarily override those file descriptors to point to pipe that we control This module is not portable and not thread safe However it can safely manage arbitrarily large amounts of data as it spins off another thread to read from the pipe created therefore you must use threaded to compile program with this If you are making foreign call you must ensure that the foreign call is marked safe or there is possibility of deadlock While this module is an interesting novelty it is the module author opinion that it is not sustainable method for making libraries behave properly primarily due to its unportability this trick does not appear to be possible on Windows Use at your own risk",
        "hierarchy": "System Posix Redirect",
        "module": "System.Posix.Redirect",
        "name": "Redirect",
        "normalized": "",
        "package": "system-posix-redirect",
        "partial": "Redirect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-posix-redirect/docs/System-Posix-Redirect.html#v:redirectStderr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eredirectStderr\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e redirects standard error during the execution\n of \u003ccode\u003ef\u003c/code\u003e into a pipe passed as the first argument to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Redirect",
        "fct-package": "system-posix-redirect",
        "fct-signature": "IO a -\u003e IO (ByteString, a)",
        "fct-source": "src/System-Posix-Redirect.html#redirectStderr",
        "fct-type": "function",
        "title": "redirectStderr"
      },
      "index": {
        "description": "redirectStderr redirects standard error during the execution of into pipe passed as the first argument to",
        "hierarchy": "System Posix Redirect",
        "module": "System.Posix.Redirect",
        "name": "redirectStderr",
        "normalized": "IO a-\u003eIO(ByteString,a)",
        "package": "system-posix-redirect",
        "partial": "Stderr",
        "signature": "IO a-\u003eIO(ByteString,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-posix-redirect/docs/System-Posix-Redirect.html#v:redirectStdout",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eredirectStdout\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e redirects standard output during the execution\n of \u003ccode\u003ef\u003c/code\u003e into a pipe passed as the first argument to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Redirect",
        "fct-package": "system-posix-redirect",
        "fct-signature": "IO a -\u003e IO (ByteString, a)",
        "fct-source": "src/System-Posix-Redirect.html#redirectStdout",
        "fct-type": "function",
        "title": "redirectStdout"
      },
      "index": {
        "description": "redirectStdout redirects standard output during the execution of into pipe passed as the first argument to",
        "hierarchy": "System Posix Redirect",
        "module": "System.Posix.Redirect",
        "name": "redirectStdout",
        "normalized": "IO a-\u003eIO(ByteString,a)",
        "package": "system-posix-redirect",
        "partial": "Stdout",
        "signature": "IO a-\u003eIO(ByteString,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-posix-redirect/docs/System-Posix-Redirect.html#v:redirectWriteHandle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eredirectWriteHandle\u003c/a\u003e\u003c/code\u003e oldFd oldHandle oldCHandle f\u003c/code\u003e executes the\n computation \u003ccode\u003ef\u003c/code\u003e, passing as an argument a handle which is the read\n end of a pipe that \u003ccode\u003efd\u003c/code\u003e now points to.  This function appropriately\n flushes the Haskell \u003ccode\u003eoldHandle\u003c/code\u003e and the C \u003ccode\u003eoldCHandle\u003c/code\u003e before\n and after \u003ccode\u003ef\u003c/code\u003e's execution.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Redirect",
        "fct-package": "system-posix-redirect",
        "fct-signature": "Fd -\u003e Handle -\u003e Ptr FILE -\u003e IO a -\u003e IO (ByteString, a)",
        "fct-source": "src/System-Posix-Redirect.html#redirectWriteHandle",
        "fct-type": "function",
        "title": "redirectWriteHandle"
      },
      "index": {
        "description": "redirectWriteHandle oldFd oldHandle oldCHandle executes the computation passing as an argument handle which is the read end of pipe that fd now points to This function appropriately flushes the Haskell oldHandle and the oldCHandle before and after execution",
        "hierarchy": "System Posix Redirect",
        "module": "System.Posix.Redirect",
        "name": "redirectWriteHandle",
        "normalized": "Fd-\u003eHandle-\u003ePtr FILE-\u003eIO a-\u003eIO(ByteString,a)",
        "package": "system-posix-redirect",
        "partial": "Write Handle",
        "signature": "Fd-\u003eHandle-\u003ePtr FILE-\u003eIO a-\u003eIO(ByteString,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-posix-redirect/docs/System-Posix-Redirect.html#v:unsafeRedirectWriteFd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003eunsafeRedirectFd\u003c/code\u003e fd f\u003c/code\u003e executes the computation \u003ccode\u003ef\u003c/code\u003e, passing as\n an argument a handle which is the read end of a pipe that\n \u003ccode\u003efd\u003c/code\u003e now points to.  When the computation is done, the original file\n descriptor is restored.  Use with care: if there are any file\n handles with this descriptor that have unflushed buffers, they will\n not flush to the old file descriptor, but the new file descriptor.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Redirect",
        "fct-package": "system-posix-redirect",
        "fct-signature": "Fd -\u003e IO a -\u003e IO (ByteString, a)",
        "fct-source": "src/System-Posix-Redirect.html#unsafeRedirectWriteFd",
        "fct-type": "function",
        "title": "unsafeRedirectWriteFd"
      },
      "index": {
        "description": "unsafeRedirectFd fd executes the computation passing as an argument handle which is the read end of pipe that fd now points to When the computation is done the original file descriptor is restored Use with care if there are any file handles with this descriptor that have unflushed buffers they will not flush to the old file descriptor but the new file descriptor",
        "hierarchy": "System Posix Redirect",
        "module": "System.Posix.Redirect",
        "name": "unsafeRedirectWriteFd",
        "normalized": "Fd-\u003eIO a-\u003eIO(ByteString,a)",
        "package": "system-posix-redirect",
        "partial": "Redirect Write Fd",
        "signature": "Fd-\u003eIO a-\u003eIO(ByteString,a)"
      }
    }
  }
]