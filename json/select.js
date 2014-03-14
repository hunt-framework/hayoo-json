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
        "word": "select"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure interface to \u003ccode\u003efd_set\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs far as I can tell, the data structure and functions in\n \u003ca\u003eSystem.Posix.IO.Select.FdSet\u003c/a\u003e are referentially transparent, and\n it should be OK to escape the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad. However, POSIX requires\n that all operations on \u003ccode\u003efd_set\u003c/code\u003es are done with \u003cem\u003evalid\u003c/em\u003e file\n descriptors. This can potentially be hard to ensure with lazy\n evaluation in a pure setting, so for now this module bears the\n unsafe label. On Linux, invalid file descriptors \u003cem\u003eseem\u003c/em\u003e to be just\n fine.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eSystem.Posix.IO.Select.FdSet\u003c/a\u003e for documentation in\n  general. All functions here essentially just add\n  \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "Unsafe",
          "package": "select",
          "source": "src/System-Posix-IO-Select-FdSet-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "Pure interface to fd set As far as can tell the data structure and functions in System.Posix.IO.Select.FdSet are referentially transparent and it should be OK to escape the IO monad However POSIX requires that all operations on fd set are done with valid file descriptors This can potentially be hard to ensure with lazy evaluation in pure setting so for now this module bears the unsafe label On Linux invalid file descriptors seem to be just fine See System.Posix.IO.Select.FdSet for documentation in general All functions here essentially just add unsafePerformIO",
          "hierarchy": "System Posix IO Select FdSet Unsafe",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "Unsafe",
          "package": "select",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "FdSet",
          "package": "select",
          "source": "src/System-Posix-IO-Select-FdSet-Internal.html#FdSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix IO Select FdSet Unsafe",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "FdSet",
          "package": "select",
          "partial": "Fd Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet-Unsafe.html#t:FdSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "elem",
          "package": "select",
          "signature": "Fd -\u003e FdSet -\u003e Bool",
          "source": "src/System-Posix-IO-Select-FdSet-Unsafe.html#elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select FdSet Unsafe",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "elem",
          "normalized": "Fd-\u003eFdSet-\u003eBool",
          "package": "select",
          "signature": "Fd-\u003eFdSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet-Unsafe.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "empty",
          "package": "select",
          "signature": "FdSet",
          "source": "src/System-Posix-IO-Select-FdSet-Unsafe.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select FdSet Unsafe",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "empty",
          "package": "select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet-Unsafe.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "fromList",
          "package": "select",
          "signature": "[Fd] -\u003e FdSet",
          "source": "src/System-Posix-IO-Select-FdSet-Unsafe.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select FdSet Unsafe",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "fromList",
          "normalized": "[Fd]-\u003eFdSet",
          "package": "select",
          "partial": "List",
          "signature": "[Fd]-\u003eFdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet-Unsafe.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "inList",
          "package": "select",
          "signature": "[Fd] -\u003e FdSet -\u003e [Fd]",
          "source": "src/System-Posix-IO-Select-FdSet-Unsafe.html#inList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select FdSet Unsafe",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "inList",
          "normalized": "[Fd]-\u003eFdSet-\u003e[Fd]",
          "package": "select",
          "partial": "List",
          "signature": "[Fd]-\u003eFdSet-\u003e[Fd]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet-Unsafe.html#v:inList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "insert",
          "package": "select",
          "signature": "Fd -\u003e FdSet -\u003e FdSet",
          "source": "src/System-Posix-IO-Select-FdSet-Unsafe.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select FdSet Unsafe",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "insert",
          "normalized": "Fd-\u003eFdSet-\u003eFdSet",
          "package": "select",
          "signature": "Fd-\u003eFdSet-\u003eFdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet-Unsafe.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "insertList",
          "package": "select",
          "signature": "[Fd] -\u003e FdSet -\u003e FdSet",
          "source": "src/System-Posix-IO-Select-FdSet-Unsafe.html#insertList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select FdSet Unsafe",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "insertList",
          "normalized": "[Fd]-\u003eFdSet-\u003eFdSet",
          "package": "select",
          "partial": "List",
          "signature": "[Fd]-\u003eFdSet-\u003eFdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet-Unsafe.html#v:insertList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "remove",
          "package": "select",
          "signature": "Fd -\u003e FdSet -\u003e FdSet",
          "source": "src/System-Posix-IO-Select-FdSet-Unsafe.html#remove",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select FdSet Unsafe",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "remove",
          "normalized": "Fd-\u003eFdSet-\u003eFdSet",
          "package": "select",
          "signature": "Fd-\u003eFdSet-\u003eFdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet-Unsafe.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "removeList",
          "package": "select",
          "signature": "[Fd] -\u003e FdSet -\u003e FdSet",
          "source": "src/System-Posix-IO-Select-FdSet-Unsafe.html#removeList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select FdSet Unsafe",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "removeList",
          "normalized": "[Fd]-\u003eFdSet-\u003eFdSet",
          "package": "select",
          "partial": "List",
          "signature": "[Fd]-\u003eFdSet-\u003eFdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet-Unsafe.html#v:removeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis converts an \u003ccode\u003eFdSet\u003c/code\u003e to a list by testing every file\n descriptor in range for membership, which tends to involve invalid\n file descriptors, giving undefined behavior according to POSIX. Use\n \u003ccode\u003e\u003ca\u003einList\u003c/a\u003e\u003c/code\u003e if possible.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "unsafeToList",
          "package": "select",
          "signature": "FdSet -\u003e [Fd]",
          "source": "src/System-Posix-IO-Select-FdSet-Unsafe.html#unsafeToList",
          "type": "function"
        },
        "index": {
          "description": "This converts an FdSet to list by testing every file descriptor in range for membership which tends to involve invalid file descriptors giving undefined behavior according to POSIX Use inList if possible",
          "hierarchy": "System Posix IO Select FdSet Unsafe",
          "module": "System.Posix.IO.Select.FdSet.Unsafe",
          "name": "unsafeToList",
          "normalized": "FdSet-\u003e[Fd]",
          "package": "select",
          "partial": "To List",
          "signature": "FdSet-\u003e[Fd]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet-Unsafe.html#v:unsafeToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to \u003ccode\u003efd_set\u003c/code\u003e. See \u003ccode\u003eselect(2)\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003eThe type \u003ccode\u003e\u003ca\u003eFdSet\u003c/a\u003e\u003c/code\u003e is opaque, but is implemented internally as a\n pointer to an \u003ccode\u003efd_set\u003c/code\u003e. All operations on \u003ccode\u003e\u003ca\u003eFdSet\u003c/a\u003e\u003c/code\u003es must adhere to\n the requirements of \u003ccode\u003eFD_CLR\u003c/code\u003e, \u003ccode\u003eFD_ISSET\u003c/code\u003e, \u003ccode\u003eFD_SET\u003c/code\u003e and \u003ccode\u003eFD_ZERO\u003c/code\u003e\n (see \u003ccode\u003eselect(2)\u003c/code\u003e). This includes requiring \u003cem\u003evalid\u003c/em\u003e file descriptors\n for all operations. Most functions in this module are kept in the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad to make it easier to guarantee validity of the file\n descriptors, but since invalid ones seem to work fine in practice\n (at least on Linux), the module\n \u003ca\u003eSystem.Posix.IO.Select.FdSet.Unsafe\u003c/a\u003e provides a non-\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n interface.\n\u003c/p\u003e\u003cp\u003eFunctions that return an \u003ccode\u003e\u003ca\u003eFdSet\u003c/a\u003e\u003c/code\u003e, such as \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, copy the\n underlying \u003ccode\u003efd_set\u003c/code\u003e in order to be referentially transparent.\n\u003c/p\u003e\u003cp\u003eIn the documentation that follows, a file descriptor is said to be\n \u003cem\u003ein range\u003c/em\u003e if it is non-negative and strictly smaller than the\n system-defined \u003ccode\u003eFD_SETSIZE\u003c/code\u003e. Many functions silently ignore file\n descriptors that are not in range.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "FdSet",
          "package": "select",
          "source": "src/System-Posix-IO-Select-FdSet.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to fd set See select The type FdSet is opaque but is implemented internally as pointer to an fd set All operations on FdSet must adhere to the requirements of FD CLR FD ISSET FD SET and FD ZERO see select This includes requiring valid file descriptors for all operations Most functions in this module are kept in the IO monad to make it easier to guarantee validity of the file descriptors but since invalid ones seem to work fine in practice at least on Linux the module System.Posix.IO.Select.FdSet.Unsafe provides non IO interface Functions that return an FdSet such as insert copy the underlying fd set in order to be referentially transparent In the documentation that follows file descriptor is said to be in range if it is non-negative and strictly smaller than the system-defined FD SETSIZE Many functions silently ignore file descriptors that are not in range",
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "FdSet",
          "package": "select",
          "partial": "Fd Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.FdSet",
          "name": "FdSet",
          "package": "select",
          "source": "src/System-Posix-IO-Select-FdSet-Internal.html#FdSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "FdSet",
          "package": "select",
          "partial": "Fd Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#t:FdSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis file descriptor is at least as large as the largest in the\n set. If no file descriptors have ever been removed from the set,\n the value is \u003cem\u003ethe largest\u003c/em\u003e in the set, but this assumption may not\n hold after removals or other operations.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "bound",
          "package": "select",
          "signature": "FdSet -\u003e Fd",
          "source": "src/System-Posix-IO-Select-FdSet.html#bound",
          "type": "function"
        },
        "index": {
          "description": "This file descriptor is at least as large as the largest in the set If no file descriptors have ever been removed from the set the value is the largest in the set but this assumption may not hold after removals or other operations",
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "bound",
          "normalized": "FdSet-\u003eFd",
          "package": "select",
          "signature": "FdSet-\u003eFd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#v:bound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy an \u003ccode\u003eFdSet\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "duplicate",
          "package": "select",
          "signature": "FdSet -\u003e IO FdSet",
          "source": "src/System-Posix-IO-Select-FdSet.html#duplicate",
          "type": "function"
        },
        "index": {
          "description": "Copy an FdSet",
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "duplicate",
          "normalized": "FdSet-\u003eIO FdSet",
          "package": "select",
          "signature": "FdSet-\u003eIO FdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#v:duplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest for membership. Recall that POSIX allows undefined behavior\n if the file descriptor is not valid (it does, however, seem to work\n fine on Linux).\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "elem",
          "package": "select",
          "signature": "Fd -\u003e FdSet -\u003e IO Bool",
          "source": "src/System-Posix-IO-Select-FdSet.html#elem",
          "type": "function"
        },
        "index": {
          "description": "Test for membership Recall that POSIX allows undefined behavior if the file descriptor is not valid it does however seem to work fine on Linux",
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "elem",
          "normalized": "Fd-\u003eFdSet-\u003eIO Bool",
          "package": "select",
          "signature": "Fd-\u003eFdSet-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty \u003ccode\u003eFdSet\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "empty",
          "package": "select",
          "signature": "IO FdSet",
          "source": "src/System-Posix-IO-Select-FdSet.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty FdSet",
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "empty",
          "package": "select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003eFdSet\u003c/code\u003e from a list of file descriptors. File\n descriptors not in range (see above) are silently ignored.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "fromList",
          "package": "select",
          "signature": "[Fd] -\u003e IO FdSet",
          "source": "src/System-Posix-IO-Select-FdSet.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create an FdSet from list of file descriptors File descriptors not in range see above are silently ignored",
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "fromList",
          "normalized": "[Fd]-\u003eIO FdSet",
          "package": "select",
          "partial": "List",
          "signature": "[Fd]-\u003eIO FdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003einList\u003c/a\u003e\u003c/code\u003e fds fdset\u003c/code\u003e gives a list of all file descriptors in\n \u003ccode\u003efd\u003c/code\u003e that are in \u003ccode\u003efdset\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "inList",
          "package": "select",
          "signature": "[Fd] -\u003e FdSet -\u003e IO [Fd]",
          "source": "src/System-Posix-IO-Select-FdSet.html#inList",
          "type": "function"
        },
        "index": {
          "description": "inList fds fdset gives list of all file descriptors in fd that are in fdset",
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "inList",
          "normalized": "[Fd]-\u003eFdSet-\u003eIO[Fd]",
          "package": "select",
          "partial": "List",
          "signature": "[Fd]-\u003eFdSet-\u003eIO[Fd]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#v:inList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a file descriptor is in range (see introduction).\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "inRange",
          "package": "select",
          "signature": "Fd -\u003e Bool",
          "source": "src/System-Posix-IO-Select-FdSet.html#inRange",
          "type": "function"
        },
        "index": {
          "description": "Test if file descriptor is in range see introduction",
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "inRange",
          "normalized": "Fd-\u003eBool",
          "package": "select",
          "partial": "Range",
          "signature": "Fd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a file descriptor.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "insert",
          "package": "select",
          "signature": "Fd -\u003e FdSet -\u003e IO FdSet",
          "source": "src/System-Posix-IO-Select-FdSet.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert file descriptor",
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "insert",
          "normalized": "Fd-\u003eFdSet-\u003eIO FdSet",
          "package": "select",
          "signature": "Fd-\u003eFdSet-\u003eIO FdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert multiple file descriptors. This is more efficient than\n multiple \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003es (only a single copy of the set is made).\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "insertList",
          "package": "select",
          "signature": "[Fd] -\u003e FdSet -\u003e IO FdSet",
          "source": "src/System-Posix-IO-Select-FdSet.html#insertList",
          "type": "function"
        },
        "index": {
          "description": "Insert multiple file descriptors This is more efficient than multiple insert only single copy of the set is made",
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "insertList",
          "normalized": "[Fd]-\u003eFdSet-\u003eIO FdSet",
          "package": "select",
          "partial": "List",
          "signature": "[Fd]-\u003eFdSet-\u003eIO FdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#v:insertList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a file descriptor.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "remove",
          "package": "select",
          "signature": "Fd -\u003e FdSet -\u003e IO FdSet",
          "source": "src/System-Posix-IO-Select-FdSet.html#remove",
          "type": "function"
        },
        "index": {
          "description": "Remove file descriptor",
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "remove",
          "normalized": "Fd-\u003eFdSet-\u003eIO FdSet",
          "package": "select",
          "signature": "Fd-\u003eFdSet-\u003eIO FdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove multiple file descriptors. This is more efficient than\n multiple \u003ccode\u003e\u003ca\u003eremove\u003c/a\u003e\u003c/code\u003es (only a single copy of the set is made).\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "removeList",
          "package": "select",
          "signature": "[Fd] -\u003e FdSet -\u003e IO FdSet",
          "source": "src/System-Posix-IO-Select-FdSet.html#removeList",
          "type": "function"
        },
        "index": {
          "description": "Remove multiple file descriptors This is more efficient than multiple remove only single copy of the set is made",
          "hierarchy": "System Posix IO Select FdSet",
          "module": "System.Posix.IO.Select.FdSet",
          "name": "removeList",
          "normalized": "[Fd]-\u003eFdSet-\u003eIO FdSet",
          "package": "select",
          "partial": "List",
          "signature": "[Fd]-\u003eFdSet-\u003eIO FdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-FdSet.html#v:removeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.IO.Select.Types",
          "name": "Types",
          "package": "select",
          "source": "src/System-Posix-IO-Select-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Various types",
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "Types",
          "package": "select",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003estruct timeval\u003c/code\u003e (see \u003ccode\u003eselect(2)\u003c/code\u003e). The\n first argument corresponds to \u003ccode\u003etv_sec\u003c/code\u003e, the second to \u003ccode\u003etv_usec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.Types",
          "name": "CTimeval",
          "package": "select",
          "source": "src/System-Posix-IO-Select-Types.html#CTimeval",
          "type": "data"
        },
        "index": {
          "description": "Storable instance for struct timeval see select The first argument corresponds to tv sec the second to tv usec",
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "CTimeval",
          "package": "select",
          "partial": "CTimeval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#t:CTimeval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstraction for the return value of \u003ccode\u003eselect\u003c/code\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e means\n that \u003ccode\u003eselect\u003c/code\u003e returned an error, while \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e means it\n timed out. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eReady\u003c/a\u003e\u003c/code\u003e n rfds wfds efds\u003c/code\u003e specifies that it returned\n because the file descriptors in \u003ccode\u003erfds\u003c/code\u003e, \u003ccode\u003ewfds\u003c/code\u003e and \u003ccode\u003eefds\u003c/code\u003e are ready\n in their respective ways (see \u003ccode\u003eselect(2)\u003c/code\u003e), with \u003ccode\u003en\u003c/code\u003e descriptors in\n total.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.Types",
          "name": "Result",
          "package": "select",
          "source": "src/System-Posix-IO-Select-Types.html#Result",
          "type": "data"
        },
        "index": {
          "description": "Abstraction for the return value of select Error means that select returned an error while Timeout means it timed out Ready rfds wfds efds specifies that it returned because the file descriptors in rfds wfds and efds are ready in their respective ways see select with descriptors in total",
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "Result",
          "package": "select",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA timeout of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNever\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e tells \u003ccode\u003eselect(2)\u003c/code\u003e to never time out, while\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e sets a finite timeout.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.Types",
          "name": "Timeout",
          "package": "select",
          "source": "src/System-Posix-IO-Select-Types.html#Timeout",
          "type": "data"
        },
        "index": {
          "description": "timeout of Never tells select to never time out while Time sets finite timeout",
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "Timeout",
          "package": "select",
          "partial": "Timeout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#t:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.Types",
          "name": "CTimeval",
          "package": "select",
          "signature": "CTimeval CLong CLong",
          "source": "src/System-Posix-IO-Select-Types.html#CTimeval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "CTimeval",
          "package": "select",
          "partial": "CTimeval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#v:CTimeval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.Types",
          "name": "Error",
          "package": "select",
          "signature": "Error",
          "source": "src/System-Posix-IO-Select-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "Error",
          "package": "select",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.Types",
          "name": "Never",
          "package": "select",
          "signature": "Never",
          "source": "src/System-Posix-IO-Select-Types.html#Timeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "Never",
          "package": "select",
          "partial": "Never",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#v:Never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.Types",
          "name": "Ready",
          "package": "select",
          "signature": "Ready CInt FdSet FdSet FdSet",
          "source": "src/System-Posix-IO-Select-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "Ready",
          "package": "select",
          "partial": "Ready",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#v:Ready"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.Types",
          "name": "Time",
          "package": "select",
          "signature": "Time CTimeval",
          "source": "src/System-Posix-IO-Select-Types.html#Timeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "Time",
          "package": "select",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#v:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.IO.Select.Types",
          "name": "Timeout",
          "package": "select",
          "signature": "Timeout",
          "source": "src/System-Posix-IO-Select-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "Timeout",
          "package": "select",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#v:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efinite\u003c/a\u003e\u003c/code\u003e s us\u003c/code\u003e tells \u003ccode\u003eselect\u003c/code\u003e to time out after \u003ccode\u003es\u003c/code\u003e seconds and\n \u003ccode\u003eus\u003c/code\u003e microseconds.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.Types",
          "name": "finite",
          "package": "select",
          "signature": "CLong -\u003e CLong -\u003e Timeout",
          "source": "src/System-Posix-IO-Select-Types.html#finite",
          "type": "function"
        },
        "index": {
          "description": "finite us tells select to time out after seconds and us microseconds",
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "finite",
          "normalized": "CLong-\u003eCLong-\u003eTimeout",
          "package": "select",
          "signature": "CLong-\u003eCLong-\u003eTimeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#v:finite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe total number of ready file descriptors across all three sets.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.Types",
          "name": "numReady",
          "package": "select",
          "signature": "Result -\u003e CInt",
          "source": "src/System-Posix-IO-Select-Types.html#numReady",
          "type": "function"
        },
        "index": {
          "description": "The total number of ready file descriptors across all three sets",
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "numReady",
          "normalized": "Result-\u003eCInt",
          "package": "select",
          "partial": "Ready",
          "signature": "Result-\u003eCInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#v:numReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file descriptors having exceptional conditions.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.Types",
          "name": "readyException",
          "package": "select",
          "signature": "Result -\u003e FdSet",
          "source": "src/System-Posix-IO-Select-Types.html#readyException",
          "type": "function"
        },
        "index": {
          "description": "The file descriptors having exceptional conditions",
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "readyException",
          "normalized": "Result-\u003eFdSet",
          "package": "select",
          "partial": "Exception",
          "signature": "Result-\u003eFdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#v:readyException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file descriptors ready for reading.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.Types",
          "name": "readyRead",
          "package": "select",
          "signature": "Result -\u003e FdSet",
          "source": "src/System-Posix-IO-Select-Types.html#readyRead",
          "type": "function"
        },
        "index": {
          "description": "The file descriptors ready for reading",
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "readyRead",
          "normalized": "Result-\u003eFdSet",
          "package": "select",
          "partial": "Read",
          "signature": "Result-\u003eFdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#v:readyRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file descriptors ready for writing.\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select.Types",
          "name": "readyWrite",
          "package": "select",
          "signature": "Result -\u003e FdSet",
          "source": "src/System-Posix-IO-Select-Types.html#readyWrite",
          "type": "function"
        },
        "index": {
          "description": "The file descriptors ready for writing",
          "hierarchy": "System Posix IO Select Types",
          "module": "System.Posix.IO.Select.Types",
          "name": "readyWrite",
          "normalized": "Result-\u003eFdSet",
          "package": "select",
          "partial": "Write",
          "signature": "Result-\u003eFdSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select-Types.html#v:readyWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to \u003ccode\u003eselect(2)\u003c/code\u003e. The arguments to the functions exposed\n here must fulfill the same requirements as the arguments for\n \u003ccode\u003eselect\u003c/code\u003e itself; see the man page.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eselect\u003c/code\u003e call made by any of these functions is interrupted\n (\u003ccode\u003eselect\u003c/code\u003e returning \u003ccode\u003e-1\u003c/code\u003e and \u003ccode\u003eerrno\u003c/code\u003e being \u003ccode\u003eEINTR\u003c/code\u003e) before the\n given time has elapsed, the call will be retried. If the specified\n amount of time has passed and \u003ccode\u003eselect\u003c/code\u003e is still being interrupted,\n the functions below will make one last attempt with timeout\n zero. If that call too is interrupted, behavior will be as if\n \u003ccode\u003eselect\u003c/code\u003e returned an error.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.IO.Select",
          "name": "Select",
          "package": "select",
          "source": "src/System-Posix-IO-Select.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to select The arguments to the functions exposed here must fulfill the same requirements as the arguments for select itself see the man page If the select call made by any of these functions is interrupted select returning and errno being EINTR before the given time has elapsed the call will be retried If the specified amount of time has passed and select is still being interrupted the functions below will make one last attempt with timeout zero If that call too is interrupted behavior will be as if select returned an error",
          "hierarchy": "System Posix IO Select",
          "module": "System.Posix.IO.Select",
          "name": "Select",
          "package": "select",
          "partial": "Select",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first \u003ccode\u003e\u003ca\u003eFdSet\u003c/a\u003e\u003c/code\u003e is watched for readiness to read, the second\n for readiness to write, and the third for exceptions. The \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e\n argument specifies when \u003ccode\u003eselect\u003c/code\u003e should time out (if at all). \n\u003c/p\u003e",
          "module": "System.Posix.IO.Select",
          "name": "select",
          "package": "select",
          "signature": "FdSet -\u003e FdSet -\u003e FdSet -\u003e Timeout -\u003e IO Result",
          "source": "src/System-Posix-IO-Select.html#select",
          "type": "function"
        },
        "index": {
          "description": "The first FdSet is watched for readiness to read the second for readiness to write and the third for exceptions The Timeout argument specifies when select should time out if at all",
          "hierarchy": "System Posix IO Select",
          "module": "System.Posix.IO.Select",
          "name": "select",
          "normalized": "FdSet-\u003eFdSet-\u003eFdSet-\u003eTimeout-\u003eIO Result",
          "package": "select",
          "signature": "FdSet-\u003eFdSet-\u003eFdSet-\u003eTimeout-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simpler version of \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e that uses file descriptor lists\n instead of \u003ccode\u003e\u003ca\u003eFdSet\u003c/a\u003e\u003c/code\u003es. \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned in case \u003ccode\u003eselect\u003c/code\u003e gives\n an error, otherwise \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (rfds, wfds, efds)\u003c/code\u003e is returned, where\n \u003ccode\u003erfds\u003c/code\u003e, \u003ccode\u003ewfds\u003c/code\u003e and \u003ccode\u003eefds\u003c/code\u003e are lists of ready file descriptors (they\n may be empty, such as in the case of \u003ccode\u003eselect\u003c/code\u003e timing out).\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select",
          "name": "select'",
          "package": "select",
          "signature": "[Fd] -\u003e [Fd] -\u003e [Fd] -\u003e Timeout -\u003e IO (Maybe ([Fd], [Fd], [Fd]))",
          "source": "src/System-Posix-IO-Select.html#select%27",
          "type": "function"
        },
        "index": {
          "description": "simpler version of select that uses file descriptor lists instead of FdSet Nothing is returned in case select gives an error otherwise Just rfds wfds efds is returned where rfds wfds and efds are lists of ready file descriptors they may be empty such as in the case of select timing out",
          "hierarchy": "System Posix IO Select",
          "module": "System.Posix.IO.Select",
          "name": "select'",
          "normalized": "[Fd]-\u003e[Fd]-\u003e[Fd]-\u003eTimeout-\u003eIO(Maybe([Fd],[Fd],[Fd]))",
          "package": "select",
          "signature": "[Fd]-\u003e[Fd]-\u003e[Fd]-\u003eTimeout-\u003eIO(Maybe([Fd],[Fd],[Fd]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select.html#v:select-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis simpler version of \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e takes the same arguments as\n \u003ccode\u003e\u003ca\u003eselect'\u003c/a\u003e\u003c/code\u003e, but only returns the return value of \u003ccode\u003eselect(2)\u003c/code\u003e itself\n (i.e. \u003ccode\u003e-1\u003c/code\u003e on error, otherwise the number of ready file descriptors\n in total).\n\u003c/p\u003e",
          "module": "System.Posix.IO.Select",
          "name": "select''",
          "package": "select",
          "signature": "[Fd] -\u003e [Fd] -\u003e [Fd] -\u003e Timeout -\u003e IO CInt",
          "source": "src/System-Posix-IO-Select.html#select%27%27",
          "type": "function"
        },
        "index": {
          "description": "This simpler version of select takes the same arguments as select but only returns the return value of select itself i.e on error otherwise the number of ready file descriptors in total",
          "hierarchy": "System Posix IO Select",
          "module": "System.Posix.IO.Select",
          "name": "select''",
          "normalized": "[Fd]-\u003e[Fd]-\u003e[Fd]-\u003eTimeout-\u003eIO CInt",
          "package": "select",
          "signature": "[Fd]-\u003e[Fd]-\u003e[Fd]-\u003eTimeout-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/select/docs/System-Posix-IO-Select.html#v:select-39--39-"
      }
    }
  ]
]