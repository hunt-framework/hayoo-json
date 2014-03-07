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
        "word": "restricted-workers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe implementation of security restrictions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Restricted.Limits",
          "name": "Limits",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Limits.html",
          "type": "module"
        },
        "index": {
          "description": "The implementation of security restrictions",
          "hierarchy": "System Restricted Limits",
          "module": "System.Restricted.Limits",
          "name": "Limits",
          "package": "restricted-workers",
          "partial": "Limits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the uid of the current process\n\u003c/p\u003e",
          "module": "System.Restricted.Limits",
          "name": "changeUserID",
          "package": "restricted-workers",
          "signature": "UserID -\u003e IO ()",
          "source": "src/System-Restricted-Limits.html#changeUserID",
          "type": "function"
        },
        "index": {
          "description": "Change the uid of the current process",
          "hierarchy": "System Restricted Limits",
          "module": "System.Restricted.Limits",
          "name": "changeUserID",
          "normalized": "UserID-\u003eIO()",
          "package": "restricted-workers",
          "partial": "User ID",
          "signature": "UserID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:changeUserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the chroot jail\n\u003c/p\u003e",
          "module": "System.Restricted.Limits",
          "name": "chroot",
          "package": "restricted-workers",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Restricted-Limits.html#chroot",
          "type": "function"
        },
        "index": {
          "description": "Set the chroot jail",
          "hierarchy": "System Restricted Limits",
          "module": "System.Restricted.Limits",
          "name": "chroot",
          "normalized": "FilePath-\u003eIO()",
          "package": "restricted-workers",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:chroot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaits for a certain period of time\n and then kills the process\n\u003c/p\u003e",
          "module": "System.Restricted.Limits",
          "name": "processTimeout",
          "package": "restricted-workers",
          "signature": "ProcessID-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Waits for certain period of time and then kills the process",
          "hierarchy": "System Restricted Limits",
          "module": "System.Restricted.Limits",
          "name": "processTimeout",
          "normalized": "ProcessID-\u003eInt-\u003eIO()",
          "package": "restricted-workers",
          "partial": "Timeout",
          "signature": "ProcessID-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:processTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a process to a cgroup\n\u003c/p\u003e",
          "module": "System.Restricted.Limits",
          "name": "setCGroup",
          "package": "restricted-workers",
          "signature": "LimitSettings-\u003e ProcessID-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Add process to cgroup",
          "hierarchy": "System Restricted Limits",
          "module": "System.Restricted.Limits",
          "name": "setCGroup",
          "normalized": "LimitSettings-\u003eProcessID-\u003eIO()",
          "package": "restricted-workers",
          "partial": "CGroup",
          "signature": "LimitSettings-\u003eProcessID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:setCGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the \u003ccode\u003e\u003ca\u003eLimitSettings\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Restricted.Limits",
          "name": "setLimits",
          "package": "restricted-workers",
          "signature": "LimitSettings -\u003e IO ()",
          "source": "src/System-Restricted-Limits.html#setLimits",
          "type": "function"
        },
        "index": {
          "description": "Apply the LimitSettings",
          "hierarchy": "System Restricted Limits",
          "module": "System.Restricted.Limits",
          "name": "setLimits",
          "normalized": "LimitSettings-\u003eIO()",
          "package": "restricted-workers",
          "partial": "Limits",
          "signature": "LimitSettings-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:setLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet rlimits using setrlimit syscall\n\u003c/p\u003e",
          "module": "System.Restricted.Limits",
          "name": "setRLimits",
          "package": "restricted-workers",
          "signature": "RLimits -\u003e IO ()",
          "source": "src/System-Restricted-Limits.html#setRLimits",
          "type": "function"
        },
        "index": {
          "description": "Set rlimits using setrlimit syscall",
          "hierarchy": "System Restricted Limits",
          "module": "System.Restricted.Limits",
          "name": "setRLimits",
          "normalized": "RLimits-\u003eIO()",
          "package": "restricted-workers",
          "partial": "RLimits",
          "signature": "RLimits-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:setRLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the security context.\n To be more precise, it only sets up the type.\n Example usage:\n\u003c/p\u003e\u003cpre\u003e setupSELinuxCntx \"my_restricted_t\"\n\u003c/pre\u003e",
          "module": "System.Restricted.Limits",
          "name": "setupSELinuxCntx",
          "package": "restricted-workers",
          "signature": "SecurityContext -\u003e IO ()",
          "source": "src/System-Restricted-Limits.html#setupSELinuxCntx",
          "type": "function"
        },
        "index": {
          "description": "Set the security context To be more precise it only sets up the type Example usage setupSELinuxCntx my restricted",
          "hierarchy": "System Restricted Limits",
          "module": "System.Restricted.Limits",
          "name": "setupSELinuxCntx",
          "normalized": "SecurityContext-\u003eIO()",
          "package": "restricted-workers",
          "partial": "SELinux Cntx",
          "signature": "SecurityContext-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:setupSELinuxCntx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Restricted.Types",
          "name": "Types",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "Types",
          "package": "restricted-workers",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatastructure that holds the information about restrictions and\n   limitations for the worker process\n\u003c/p\u003e",
          "module": "System.Restricted.Types",
          "name": "LimitSettings",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Types.html#LimitSettings",
          "type": "data"
        },
        "index": {
          "description": "Datastructure that holds the information about restrictions and limitations for the worker process",
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "LimitSettings",
          "package": "restricted-workers",
          "partial": "Limit Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#t:LimitSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResource limits\n\u003c/p\u003e",
          "module": "System.Restricted.Types",
          "name": "RLimits",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Types.html#RLimits",
          "type": "data"
        },
        "index": {
          "description": "Resource limits",
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "RLimits",
          "package": "restricted-workers",
          "partial": "RLimits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#t:RLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Restricted.Types",
          "name": "LimitSettings",
          "package": "restricted-workers",
          "signature": "LimitSettings",
          "source": "src/System-Restricted-Types.html#LimitSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "LimitSettings",
          "package": "restricted-workers",
          "partial": "Limit Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:LimitSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Restricted.Types",
          "name": "RLimits",
          "package": "restricted-workers",
          "signature": "RLimits",
          "source": "src/System-Restricted-Types.html#RLimits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "RLimits",
          "package": "restricted-workers",
          "partial": "RLimits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:RLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filepath to the \u003ccode\u003etasks\u003c/code\u003e file for the desired cgroup.\n\u003c/p\u003e\u003cp\u003eFor example, if I have mounted the \u003ccode\u003ecpu\u003c/code\u003e controller at\n \u003ccode\u003e\u003cem\u003ecgroups\u003c/em\u003ecpu/\u003c/code\u003e and I want the evaluator to be running in the\n cgroup \u003ccode\u003eidiaworkers\u003c/code\u003e then the \u003ccode\u003e\u003ca\u003ecgroupPath\u003c/a\u003e\u003c/code\u003e would be\n \u003ccode\u003e\u003cem\u003ecgroups\u003c/em\u003ecpu/idiaworkers\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Restricted.Types",
          "name": "cgroupPath",
          "package": "restricted-workers",
          "signature": "Maybe FilePath",
          "source": "src/System-Restricted-Types.html#LimitSettings",
          "type": "function"
        },
        "index": {
          "description": "filepath to the tasks file for the desired cgroup For example if have mounted the cpu controller at cgroups cpu and want the evaluator to be running in the cgroup idiaworkers then the cgroupPath would be cgroups cpu idiaworkers",
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "cgroupPath",
          "package": "restricted-workers",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:cgroupPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe directory that the evaluator process will be \u003ccode\u003echroot\u003c/code\u003eed\n into. Please note that if chroot is applied, all the pathes\n in \u003ccode\u003eEvalSettings\u003c/code\u003e will be calculated relatively to this\n value.\n\u003c/p\u003e",
          "module": "System.Restricted.Types",
          "name": "chrootPath",
          "package": "restricted-workers",
          "signature": "Maybe FilePath",
          "source": "src/System-Restricted-Types.html#LimitSettings",
          "type": "function"
        },
        "index": {
          "description": "The directory that the evaluator process will be chroot ed into Please note that if chroot is applied all the pathes in EvalSettings will be calculated relatively to this value",
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "chrootPath",
          "package": "restricted-workers",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:chrootPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Restricted.Types",
          "name": "coreFileSizeLimit",
          "package": "restricted-workers",
          "signature": "ResourceLimits",
          "source": "src/System-Restricted-Types.html#RLimits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "coreFileSizeLimit",
          "package": "restricted-workers",
          "partial": "File Size Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:coreFileSizeLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Restricted.Types",
          "name": "cpuTimeLimit",
          "package": "restricted-workers",
          "signature": "ResourceLimits",
          "source": "src/System-Restricted-Types.html#RLimits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "cpuTimeLimit",
          "package": "restricted-workers",
          "partial": "Time Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:cpuTimeLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Restricted.Types",
          "name": "dataSizeLimit",
          "package": "restricted-workers",
          "signature": "ResourceLimits",
          "source": "src/System-Restricted-Types.html#RLimits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "dataSizeLimit",
          "package": "restricted-workers",
          "partial": "Size Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:dataSizeLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault \u003ccode\u003e\u003ca\u003eLimitSettings\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Restricted.Types",
          "name": "defaultLimits",
          "package": "restricted-workers",
          "signature": "LimitSettings",
          "source": "src/System-Restricted-Types.html#defaultLimits",
          "type": "function"
        },
        "index": {
          "description": "Default LimitSettings",
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "defaultLimits",
          "package": "restricted-workers",
          "partial": "Limits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:defaultLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Restricted.Types",
          "name": "fileSizeLimit",
          "package": "restricted-workers",
          "signature": "ResourceLimits",
          "source": "src/System-Restricted-Types.html#RLimits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "fileSizeLimit",
          "package": "restricted-workers",
          "partial": "Size Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:fileSizeLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess priority for the \u003ccode\u003enice\u003c/code\u003e syscall.\n -20 is the highest, 20 is the lowest\n\u003c/p\u003e",
          "module": "System.Restricted.Types",
          "name": "niceness",
          "package": "restricted-workers",
          "signature": "Int",
          "source": "src/System-Restricted-Types.html#LimitSettings",
          "type": "function"
        },
        "index": {
          "description": "Process priority for the nice syscall is the highest is the lowest",
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "niceness",
          "package": "restricted-workers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:niceness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Restricted.Types",
          "name": "openFilesLimit",
          "package": "restricted-workers",
          "signature": "ResourceLimits",
          "source": "src/System-Restricted-Types.html#RLimits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "openFilesLimit",
          "package": "restricted-workers",
          "partial": "Files Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:openFilesLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe UID that will be set after the call to chroot.\n\u003c/p\u003e",
          "module": "System.Restricted.Types",
          "name": "processUid",
          "package": "restricted-workers",
          "signature": "Maybe UserID",
          "source": "src/System-Restricted-Types.html#LimitSettings",
          "type": "function"
        },
        "index": {
          "description": "The UID that will be set after the call to chroot",
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "processUid",
          "package": "restricted-workers",
          "partial": "Uid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:processUid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResource limits for the \u003ccode\u003esetrlimit\u003c/code\u003e syscall\n\u003c/p\u003e",
          "module": "System.Restricted.Types",
          "name": "rlimits",
          "package": "restricted-workers",
          "signature": "Maybe RLimits",
          "source": "src/System-Restricted-Types.html#LimitSettings",
          "type": "function"
        },
        "index": {
          "description": "Resource limits for the setrlimit syscall",
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "rlimits",
          "package": "restricted-workers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:rlimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSELinux security context under which the worker\n process will be running.\n\u003c/p\u003e",
          "module": "System.Restricted.Types",
          "name": "secontext",
          "package": "restricted-workers",
          "signature": "Maybe SecurityContext",
          "source": "src/System-Restricted-Types.html#LimitSettings",
          "type": "function"
        },
        "index": {
          "description": "SELinux security context under which the worker process will be running",
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "secontext",
          "package": "restricted-workers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:secontext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Restricted.Types",
          "name": "stackSizeLimit",
          "package": "restricted-workers",
          "signature": "ResourceLimits",
          "source": "src/System-Restricted-Types.html#RLimits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "stackSizeLimit",
          "package": "restricted-workers",
          "partial": "Size Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:stackSizeLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum time for which the code is allowed to run\n (in seconds)\n\u003c/p\u003e",
          "module": "System.Restricted.Types",
          "name": "timeout",
          "package": "restricted-workers",
          "signature": "Int",
          "source": "src/System-Restricted-Types.html#LimitSettings",
          "type": "function"
        },
        "index": {
          "description": "Maximum time for which the code is allowed to run in seconds",
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "timeout",
          "package": "restricted-workers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Restricted.Types",
          "name": "totalMemoryLimit",
          "package": "restricted-workers",
          "signature": "ResourceLimits",
          "source": "src/System-Restricted-Types.html#RLimits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Restricted Types",
          "module": "System.Restricted.Types",
          "name": "totalMemoryLimit",
          "package": "restricted-workers",
          "partial": "Memory Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:totalMemoryLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary exposing internal functions uses by \u003ccode\u003e\u003ca\u003eWorker\u003c/a\u003e\u003c/code\u003e\n useful work writing your own workers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Restricted.Worker.Internal",
          "name": "Internal",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Library exposing internal functions uses by Worker useful work writing your own workers",
          "hierarchy": "System Restricted Worker Internal",
          "module": "System.Restricted.Worker.Internal",
          "name": "Internal",
          "package": "restricted-workers",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the worker's socket and return a handle\n\u003c/p\u003e",
          "module": "[\"System.Restricted.Worker.Internal\",\"System.Restricted.Worker\"]",
          "name": "connectToWorker",
          "package": "restricted-workers",
          "signature": "Worker a -\u003e IO Handle",
          "source": "src/System-Restricted-Worker-Internal.html#connectToWorker",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:connectToWorker\",\"http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#v:connectToWorker\"]"
        },
        "index": {
          "description": "Connect to the worker socket and return handle",
          "hierarchy": "System Restricted Worker Internal",
          "module": "System.Restricted.Worker.Internal",
          "name": "connectToWorker",
          "normalized": "Worker a-\u003eIO Handle",
          "package": "restricted-workers",
          "partial": "To Worker",
          "signature": "Worker a-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:connectToWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a worker process\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Internal",
          "name": "forkWorker",
          "package": "restricted-workers",
          "signature": "Worker a-\u003e Maybe (IO Handle)-\u003e (Socket -\u003e IO ())-\u003e IO ProcessID",
          "type": "function"
        },
        "index": {
          "description": "Fork worker process",
          "hierarchy": "System Restricted Worker Internal",
          "module": "System.Restricted.Worker.Internal",
          "name": "forkWorker",
          "normalized": "Worker a-\u003eMaybe(IO Handle)-\u003e(Socket-\u003eIO())-\u003eIO ProcessID",
          "package": "restricted-workers",
          "partial": "Worker",
          "signature": "Worker a-\u003eMaybe(IO Handle)-\u003e(Socket-\u003eIO())-\u003eIO ProcessID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:forkWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill a worker. Takes an initialized worker,\n returns non-initialized one.\n\u003c/p\u003e",
          "module": "[\"System.Restricted.Worker.Internal\",\"System.Restricted.Worker\"]",
          "name": "killWorker",
          "package": "restricted-workers",
          "signature": "Worker a -\u003e IO (Worker a)",
          "source": "src/System-Restricted-Worker-Internal.html#killWorker",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:killWorker\",\"http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#v:killWorker\"]"
        },
        "index": {
          "description": "Kill worker Takes an initialized worker returns non-initialized one",
          "hierarchy": "System Restricted Worker Internal",
          "module": "System.Restricted.Worker.Internal",
          "name": "killWorker",
          "normalized": "Worker a-\u003eIO(Worker a)",
          "package": "restricted-workers",
          "partial": "Worker",
          "signature": "Worker a-\u003eIO(Worker a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:killWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new unix socket\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Internal",
          "name": "mkSock",
          "package": "restricted-workers",
          "signature": "FilePath -\u003e IO Socket",
          "source": "src/System-Restricted-Worker-Internal.html#mkSock",
          "type": "function"
        },
        "index": {
          "description": "Create new unix socket",
          "hierarchy": "System Restricted Worker Internal",
          "module": "System.Restricted.Worker.Internal",
          "name": "mkSock",
          "normalized": "FilePath-\u003eIO Socket",
          "package": "restricted-workers",
          "partial": "Sock",
          "signature": "FilePath-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:mkSock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether the process is alive\n \u003cem\u003ehacky\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Internal",
          "name": "processAlive",
          "package": "restricted-workers",
          "signature": "ProcessID -\u003e IO Bool",
          "source": "src/System-Restricted-Worker-Internal.html#processAlive",
          "type": "function"
        },
        "index": {
          "description": "Checks whether the process is alive hacky",
          "hierarchy": "System Restricted Worker Internal",
          "module": "System.Restricted.Worker.Internal",
          "name": "processAlive",
          "normalized": "ProcessID-\u003eIO Bool",
          "package": "restricted-workers",
          "partial": "Alive",
          "signature": "ProcessID-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:processAlive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a file if it exists. Should be thread-safe.\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Internal",
          "name": "removeFileIfExists",
          "package": "restricted-workers",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Restricted-Worker-Internal.html#removeFileIfExists",
          "type": "function"
        },
        "index": {
          "description": "Remove file if it exists Should be thread-safe",
          "hierarchy": "System Restricted Worker Internal",
          "module": "System.Restricted.Worker.Internal",
          "name": "removeFileIfExists",
          "normalized": "FilePath-\u003eIO()",
          "package": "restricted-workers",
          "partial": "File If Exists",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:removeFileIfExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether the worker is alive\n\u003c/p\u003e",
          "module": "[\"System.Restricted.Worker.Internal\",\"System.Restricted.Worker\"]",
          "name": "workerAlive",
          "package": "restricted-workers",
          "signature": "Worker a -\u003e IO Bool",
          "source": "src/System-Restricted-Worker-Internal.html#workerAlive",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:workerAlive\",\"http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#v:workerAlive\"]"
        },
        "index": {
          "description": "Checks whether the worker is alive",
          "hierarchy": "System Restricted Worker Internal",
          "module": "System.Restricted.Worker.Internal",
          "name": "workerAlive",
          "normalized": "Worker a-\u003eIO Bool",
          "package": "restricted-workers",
          "partial": "Alive",
          "signature": "Worker a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:workerAlive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaits for a certain period of time\n and then kills the worker\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Internal",
          "name": "workerTimeout",
          "package": "restricted-workers",
          "signature": "Worker a-\u003e Int-\u003e IO (Worker a)",
          "type": "function"
        },
        "index": {
          "description": "Waits for certain period of time and then kills the worker",
          "hierarchy": "System Restricted Worker Internal",
          "module": "System.Restricted.Worker.Internal",
          "name": "workerTimeout",
          "normalized": "Worker a-\u003eInt-\u003eIO(Worker a)",
          "package": "restricted-workers",
          "partial": "Timeout",
          "signature": "Worker a-\u003eInt-\u003eIO(Worker a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:workerTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA non-stripped pooling abstraction that restarts workers\n Some got has been taken from \u003ccode\u003e\u003ca\u003ePool\u003c/a\u003e\u003c/code\u003e by bos\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Restricted.Worker.Pool",
          "name": "Pool",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker-Pool.html",
          "type": "module"
        },
        "index": {
          "description": "non-stripped pooling abstraction that restarts workers Some got has been taken from Pool by bos",
          "hierarchy": "System Restricted Worker Pool",
          "module": "System.Restricted.Worker.Pool",
          "name": "Pool",
          "package": "restricted-workers",
          "partial": "Pool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple pool for workers. Workers are restarted from time to time\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Pool",
          "name": "WorkersPool",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker-Pool.html#WorkersPool",
          "type": "data"
        },
        "index": {
          "description": "simple pool for workers Workers are restarted from time to time",
          "hierarchy": "System Restricted Worker Pool",
          "module": "System.Restricted.Worker.Pool",
          "name": "WorkersPool",
          "package": "restricted-workers",
          "partial": "Workers Pool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#t:WorkersPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy a worker. Frees up space in the pool\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Pool",
          "name": "destroyWorker",
          "package": "restricted-workers",
          "signature": "WorkersPool a -\u003e Worker a -\u003e IO ()",
          "source": "src/System-Restricted-Worker-Pool.html#destroyWorker",
          "type": "function"
        },
        "index": {
          "description": "Destroy worker Frees up space in the pool",
          "hierarchy": "System Restricted Worker Pool",
          "module": "System.Restricted.Worker.Pool",
          "name": "destroyWorker",
          "normalized": "WorkersPool a-\u003eWorker a-\u003eIO()",
          "package": "restricted-workers",
          "partial": "Worker",
          "signature": "WorkersPool a-\u003eWorker a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#v:destroyWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new workers pool\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Pool",
          "name": "mkPool",
          "package": "restricted-workers",
          "signature": "(Int -\u003e WMonad a (Worker a, RestartWorker IO a))-\u003e Int-\u003e Int-\u003e WMonad a (WorkersPool a)",
          "type": "function"
        },
        "index": {
          "description": "Create new workers pool",
          "hierarchy": "System Restricted Worker Pool",
          "module": "System.Restricted.Worker.Pool",
          "name": "mkPool",
          "normalized": "(Int-\u003eWMonad a(Worker a,RestartWorker IO a))-\u003eInt-\u003eInt-\u003eWMonad a(WorkersPool a)",
          "package": "restricted-workers",
          "partial": "Pool",
          "signature": "(Int-\u003eWMonad a(Worker a,RestartWorker IO a))-\u003eInt-\u003eInt-\u003eWMonad a(WorkersPool a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#v:mkPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut the worker back in pool\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Pool",
          "name": "putWorker",
          "package": "restricted-workers",
          "signature": "WorkersPool a -\u003e (Worker a, RestartWorker IO a) -\u003e IO ()",
          "source": "src/System-Restricted-Worker-Pool.html#putWorker",
          "type": "function"
        },
        "index": {
          "description": "Put the worker back in pool",
          "hierarchy": "System Restricted Worker Pool",
          "module": "System.Restricted.Worker.Pool",
          "name": "putWorker",
          "normalized": "WorkersPool a-\u003e(Worker a,RestartWorker IO a)-\u003eIO()",
          "package": "restricted-workers",
          "partial": "Worker",
          "signature": "WorkersPool a-\u003e(Worker a,RestartWorker IO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#v:putWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake worker from the pool.\n The caller is responsible for putting the worker back into the pool\n or destroying it with \u003ccode\u003e\u003ca\u003edestroyWorker\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Pool",
          "name": "takeWorker",
          "package": "restricted-workers",
          "signature": "WorkersPool a -\u003e WMonad a (Worker a, RestartWorker IO a)",
          "source": "src/System-Restricted-Worker-Pool.html#takeWorker",
          "type": "function"
        },
        "index": {
          "description": "Take worker from the pool The caller is responsible for putting the worker back into the pool or destroying it with destroyWorker",
          "hierarchy": "System Restricted Worker Pool",
          "module": "System.Restricted.Worker.Pool",
          "name": "takeWorker",
          "normalized": "WorkersPool a-\u003eWMonad a(Worker a,RestartWorker IO a)",
          "package": "restricted-workers",
          "partial": "Worker",
          "signature": "WorkersPool a-\u003eWMonad a(Worker a,RestartWorker IO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#v:takeWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etakeWorker\u003c/a\u003e\u003c/code\u003e + \u003ccode\u003e\u003ca\u003eputWorker\u003c/a\u003e\u003c/code\u003e but takes care of the exception handling for you\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Pool",
          "name": "withWorker",
          "package": "restricted-workers",
          "signature": "WorkersPool a -\u003e ((Worker a, RestartWorker IO a) -\u003e m b) -\u003e m b",
          "source": "src/System-Restricted-Worker-Pool.html#withWorker",
          "type": "function"
        },
        "index": {
          "description": "Like takeWorker putWorker but takes care of the exception handling for you",
          "hierarchy": "System Restricted Worker Pool",
          "module": "System.Restricted.Worker.Pool",
          "name": "withWorker",
          "normalized": "WorkersPool a-\u003e((Worker a,RestartWorker IO a)-\u003eb c)-\u003eb c",
          "package": "restricted-workers",
          "partial": "Worker",
          "signature": "WorkersPool a-\u003e((Worker a,RestartWorker IO a)-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#v:withWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple protocol for sending serializable data over handles\n\u003c/p\u003e\u003cp\u003ePlease note that this is a very simple implementation that works\n fine for most of that data, however, the size of the data you might\n send at one go is limited to MAX_WORD32 bytes. We use \u003ccode\u003ecereal\u003c/code\u003e for\n serialization.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Restricted.Worker.Protocol",
          "name": "Protocol",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker-Protocol.html",
          "type": "module"
        },
        "index": {
          "description": "simple protocol for sending serializable data over handles Please note that this is very simple implementation that works fine for most of that data however the size of the data you might send at one go is limited to MAX WORD32 bytes We use cereal for serialization",
          "hierarchy": "System Restricted Worker Protocol",
          "module": "System.Restricted.Worker.Protocol",
          "name": "Protocol",
          "package": "restricted-workers",
          "partial": "Protocol",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of the deserialization\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Protocol",
          "name": "DecodeResult",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker-Protocol.html#DecodeResult",
          "type": "type"
        },
        "index": {
          "description": "Result of the deserialization",
          "hierarchy": "System Restricted Worker Protocol",
          "module": "System.Restricted.Worker.Protocol",
          "name": "DecodeResult",
          "package": "restricted-workers",
          "partial": "Decode Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#t:DecodeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception type used by \u003ccode\u003e\u003ca\u003eProtocol\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Protocol",
          "name": "ProtocolException",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker-Types.html#ProtocolException",
          "type": "data"
        },
        "index": {
          "description": "An exception type used by Protocol",
          "hierarchy": "System Restricted Worker Protocol",
          "module": "System.Restricted.Worker.Protocol",
          "name": "ProtocolException",
          "package": "restricted-workers",
          "partial": "Protocol Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#t:ProtocolException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere has been an error during the conversion step\n\u003c/p\u003e",
          "module": "[\"System.Restricted.Worker.Protocol\",\"System.Restricted.Worker.Types\"]",
          "name": "ConversionException",
          "package": "restricted-workers",
          "signature": "ConversionException String",
          "source": "src/System-Restricted-Worker-Types.html#ProtocolException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#v:ConversionException\",\"http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:ConversionException\"]"
        },
        "index": {
          "description": "There has been an error during the conversion step",
          "hierarchy": "System Restricted Worker Protocol",
          "module": "System.Restricted.Worker.Protocol",
          "name": "ConversionException",
          "package": "restricted-workers",
          "partial": "Conversion Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#v:ConversionException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere has been an error while using the handler\n\u003c/p\u003e",
          "module": "[\"System.Restricted.Worker.Protocol\",\"System.Restricted.Worker.Types\"]",
          "name": "HandleException",
          "package": "restricted-workers",
          "signature": "HandleException IOException",
          "source": "src/System-Restricted-Worker-Types.html#ProtocolException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#v:HandleException\",\"http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:HandleException\"]"
        },
        "index": {
          "description": "There has been an error while using the handler",
          "hierarchy": "System Restricted Worker Protocol",
          "module": "System.Restricted.Worker.Protocol",
          "name": "HandleException",
          "package": "restricted-workers",
          "partial": "Handle Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#v:HandleException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the data from a handle and deserialize it.\n May throw \u003ccode\u003e\u003ca\u003eProtocolException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Protocol",
          "name": "getData",
          "package": "restricted-workers",
          "signature": "Handle -\u003e IO a",
          "source": "src/System-Restricted-Worker-Protocol.html#getData",
          "type": "function"
        },
        "index": {
          "description": "Read the data from handle and deserialize it May throw ProtocolException",
          "hierarchy": "System Restricted Worker Protocol",
          "module": "System.Restricted.Worker.Protocol",
          "name": "getData",
          "normalized": "Handle-\u003eIO a",
          "package": "restricted-workers",
          "partial": "Data",
          "signature": "Handle-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#v:getData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafe version of \u003ccode\u003e\u003ca\u003egetData\u003c/a\u003e\u003c/code\u003e that doesn't throw \u003ccode\u003e\u003ca\u003eProtocolException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Protocol",
          "name": "getDataSafe",
          "package": "restricted-workers",
          "signature": "Handle -\u003e IO (DecodeResult a)",
          "source": "src/System-Restricted-Worker-Protocol.html#getDataSafe",
          "type": "function"
        },
        "index": {
          "description": "Safe version of getData that doesn throw ProtocolException",
          "hierarchy": "System Restricted Worker Protocol",
          "module": "System.Restricted.Worker.Protocol",
          "name": "getDataSafe",
          "normalized": "Handle-\u003eIO(DecodeResult a)",
          "package": "restricted-workers",
          "partial": "Data Safe",
          "signature": "Handle-\u003eIO(DecodeResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#v:getDataSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend some serialiazable data over a handle.\n Returns \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e representing the encoded data. May throw\n \u003ccode\u003e\u003ca\u003eProtocolException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Protocol",
          "name": "sendData",
          "package": "restricted-workers",
          "signature": "Handle -\u003e a -\u003e IO ByteString",
          "source": "src/System-Restricted-Worker-Protocol.html#sendData",
          "type": "function"
        },
        "index": {
          "description": "Send some serialiazable data over handle Returns ByteString representing the encoded data May throw ProtocolException",
          "hierarchy": "System Restricted Worker Protocol",
          "module": "System.Restricted.Worker.Protocol",
          "name": "sendData",
          "normalized": "Handle-\u003ea-\u003eIO ByteString",
          "package": "restricted-workers",
          "partial": "Data",
          "signature": "Handle-\u003ea-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#v:sendData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWorker can be in one of three states\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eUninitialized\u003c/dt\u003e\u003cdd\u003e Uninitialized worker is a worker that has a name,\n    a socket, possibly \u003ccode\u003e\u003ca\u003eWData\u003c/a\u003e\u003c/code\u003e but has not been forker\n\u003c/dd\u003e\u003cdt\u003eInitialized\u003c/dt\u003e\u003cdd\u003e Initialized worker has an associated forker process.\n\u003c/dd\u003e\u003cdt\u003eActive\u003c/dt\u003e\u003cdd\u003e A worker is active if it's initialized and it's being used\n    a client. Active/inactive workers are managed by a \u003ccode\u003eWorkersPool\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "System.Restricted.Worker.Types",
          "name": "Types",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Worker can be in one of three states Uninitialized Uninitialized worker is worker that has name socket possibly WData but has not been forker Initialized Initialized worker has an associated forker process Active worker is active if it initialized and it being used client Active inactive workers are managed by WorkersPool",
          "hierarchy": "System Restricted Worker Types",
          "module": "System.Restricted.Worker.Types",
          "name": "Types",
          "package": "restricted-workers",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple type of worker that executes IO actions\n\u003c/p\u003e\u003cp\u003eThe definition of the \u003ccode\u003e\u003ca\u003eWorkerData\u003c/a\u003e\u003c/code\u003e instance for IOWorker looks like this:\n\u003c/p\u003e\u003cpre\u003e\n  instance WorkerData IOWorker where\n      type WData IOWorker = ()\n      type WMonad IOWorker = IO\n\u003c/pre\u003e",
          "module": "System.Restricted.Worker.Types",
          "name": "IOWorker",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker-Types.html#IOWorker",
          "type": "data"
        },
        "index": {
          "description": "simple type of worker that executes IO actions The definition of the WorkerData instance for IOWorker looks like this instance WorkerData IOWorker where type WData IOWorker type WMonad IOWorker IO",
          "hierarchy": "System Restricted Worker Types",
          "module": "System.Restricted.Worker.Types",
          "name": "IOWorker",
          "package": "restricted-workers",
          "partial": "IOWorker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#t:IOWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception type used by \u003ccode\u003e\u003ca\u003eProtocol\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Types",
          "name": "ProtocolException",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker-Types.html#ProtocolException",
          "type": "data"
        },
        "index": {
          "description": "An exception type used by Protocol",
          "hierarchy": "System Restricted Worker Types",
          "module": "System.Restricted.Worker.Types",
          "name": "ProtocolException",
          "package": "restricted-workers",
          "partial": "Protocol Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#t:ProtocolException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA worker restarting function\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Types",
          "name": "RestartWorker",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker-Types.html#RestartWorker",
          "type": "type"
        },
        "index": {
          "description": "worker restarting function",
          "hierarchy": "System Restricted Worker Types",
          "module": "System.Restricted.Worker.Types",
          "name": "RestartWorker",
          "package": "restricted-workers",
          "partial": "Restart Worker",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#t:RestartWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA datatype representing a worker of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Types",
          "name": "Worker",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker-Types.html#Worker",
          "type": "data"
        },
        "index": {
          "description": "datatype representing worker of type",
          "hierarchy": "System Restricted Worker Types",
          "module": "System.Restricted.Worker.Types",
          "name": "Worker",
          "package": "restricted-workers",
          "partial": "Worker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#t:Worker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes of data attached to a worker.\n This might be a configuration file, a size of the packet, session data, etc.\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Types",
          "name": "WorkerData",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker-Types.html#WorkerData",
          "type": "class"
        },
        "index": {
          "description": "Types of data attached to worker This might be configuration file size of the packet session data etc",
          "hierarchy": "System Restricted Worker Types",
          "module": "System.Restricted.Worker.Types",
          "name": "WorkerData",
          "package": "restricted-workers",
          "partial": "Worker Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#t:WorkerData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Restricted.Worker.Types",
          "name": "Worker",
          "package": "restricted-workers",
          "signature": "Worker",
          "source": "src/System-Restricted-Worker-Types.html#Worker",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Restricted Worker Types",
          "module": "System.Restricted.Worker.Types",
          "name": "Worker",
          "package": "restricted-workers",
          "partial": "Worker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:Worker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the worker is initialized\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Types",
          "name": "initialized",
          "package": "restricted-workers",
          "signature": "Worker a -\u003e Bool",
          "source": "src/System-Restricted-Worker-Types.html#initialized",
          "type": "function"
        },
        "index": {
          "description": "Check whether the worker is initialized",
          "hierarchy": "System Restricted Worker Types",
          "module": "System.Restricted.Worker.Types",
          "name": "initialized",
          "normalized": "Worker a-\u003eBool",
          "package": "restricted-workers",
          "signature": "Worker a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:initialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecurity restrictions for the worker\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Types",
          "name": "workerLimits",
          "package": "restricted-workers",
          "signature": "LimitSettings",
          "source": "src/System-Restricted-Worker-Types.html#Worker",
          "type": "function"
        },
        "index": {
          "description": "Security restrictions for the worker",
          "hierarchy": "System Restricted Worker Types",
          "module": "System.Restricted.Worker.Types",
          "name": "workerLimits",
          "package": "restricted-workers",
          "partial": "Limits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:workerLimits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the worker\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Types",
          "name": "workerName",
          "package": "restricted-workers",
          "signature": "String",
          "source": "src/System-Restricted-Worker-Types.html#Worker",
          "type": "function"
        },
        "index": {
          "description": "Name of the worker",
          "hierarchy": "System Restricted Worker Types",
          "module": "System.Restricted.Worker.Types",
          "name": "workerName",
          "package": "restricted-workers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:workerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'Just pid' if the worker's process ID is \u003ccode\u003epid\u003c/code\u003e,\n Nothing' if the worker is not active/initialized\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Types",
          "name": "workerPid",
          "package": "restricted-workers",
          "signature": "Maybe ProcessID",
          "source": "src/System-Restricted-Worker-Types.html#Worker",
          "type": "function"
        },
        "index": {
          "description": "Just pid if the worker process ID is pid Nothing if the worker is not active initialized",
          "hierarchy": "System Restricted Worker Types",
          "module": "System.Restricted.Worker.Types",
          "name": "workerPid",
          "package": "restricted-workers",
          "partial": "Pid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:workerPid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filepath to the Unix socket that will be\n used for communicating with the worker.\n If the file is already present it will be unliked\n during the initializatin step\n\u003c/p\u003e",
          "module": "System.Restricted.Worker.Types",
          "name": "workerSocket",
          "package": "restricted-workers",
          "signature": "FilePath",
          "source": "src/System-Restricted-Worker-Types.html#Worker",
          "type": "function"
        },
        "index": {
          "description": "filepath to the Unix socket that will be used for communicating with the worker If the file is already present it will be unliked during the initializatin step",
          "hierarchy": "System Restricted Worker Types",
          "module": "System.Restricted.Worker.Types",
          "name": "workerSocket",
          "package": "restricted-workers",
          "partial": "Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:workerSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain entry point of the library\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Restricted.Worker",
          "name": "Worker",
          "package": "restricted-workers",
          "source": "src/System-Restricted-Worker.html",
          "type": "module"
        },
        "index": {
          "description": "Main entry point of the library",
          "hierarchy": "System Restricted Worker",
          "module": "System.Restricted.Worker",
          "name": "Worker",
          "package": "restricted-workers",
          "partial": "Worker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an uninitialized worker\n\u003c/p\u003e",
          "module": "System.Restricted.Worker",
          "name": "mkDefaultWorker",
          "package": "restricted-workers",
          "signature": "String -\u003e FilePath -\u003e LimitSettings -\u003e Worker a",
          "source": "src/System-Restricted-Worker.html#mkDefaultWorker",
          "type": "function"
        },
        "index": {
          "description": "Create an uninitialized worker",
          "hierarchy": "System Restricted Worker",
          "module": "System.Restricted.Worker",
          "name": "mkDefaultWorker",
          "normalized": "String-\u003eFilePath-\u003eLimitSettings-\u003eWorker a",
          "package": "restricted-workers",
          "partial": "Default Worker",
          "signature": "String-\u003eFilePath-\u003eLimitSettings-\u003eWorker a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#v:mkDefaultWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a worker of type \u003ccode\u003e\u003ca\u003eIOWorker\u003c/a\u003e\u003c/code\u003e\n The callback function is called every time a connectino is established\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estartIOWorker \"test\" \"/tmp/test.sock\" $ \\h -\u003e hPutStrLn h \"hello, world\"\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
          "module": "System.Restricted.Worker",
          "name": "startIOWorker",
          "package": "restricted-workers",
          "signature": "String-\u003e LimitSettings-\u003e FilePath-\u003e (Handle -\u003e IO ())-\u003e IO (Worker IOWorker, RestartWorker IO IOWorker)",
          "type": "function"
        },
        "index": {
          "description": "Start worker of type IOWorker The callback function is called every time connectino is established startIOWorker test tmp test.sock hPutStrLn hello world",
          "hierarchy": "System Restricted Worker",
          "module": "System.Restricted.Worker",
          "name": "startIOWorker",
          "normalized": "String-\u003eLimitSettings-\u003eFilePath-\u003e(Handle-\u003eIO())-\u003eIO(Worker IOWorker,RestartWorker IO IOWorker)",
          "package": "restricted-workers",
          "partial": "IOWorker",
          "signature": "String-\u003eLimitSettings-\u003eFilePath-\u003e(Handle-\u003eIO())-\u003eIO(Worker IOWorker,RestartWorker IO IOWorker)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#v:startIOWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a general type of worker.\n\u003c/p\u003e\u003cp\u003eThe pre-forking action is a monadic action that will be run prior to\n  calling \u003ccode\u003e\u003ca\u003eforkWorker\u003c/a\u003e\u003c/code\u003e. It might be some initialization code, running the\n  DB query, anything you want. The resulting \u003ccode\u003e\u003ca\u003eWData\u003c/a\u003e\u003c/code\u003e will be passed to\n  the callback.\n\u003c/p\u003e\u003cp\u003eThe socket that is passed to the callback is a server socket.\n\u003c/p\u003e",
          "module": "System.Restricted.Worker",
          "name": "startWorker",
          "package": "restricted-workers",
          "signature": "String-\u003e FilePath-\u003e Maybe (IO Handle)-\u003e LimitSettings-\u003e WMonad w (WData w)-\u003e (WData w -\u003e Socket -\u003e IO ())-\u003e WMonad w (Worker w, RestartWorker m w)",
          "type": "function"
        },
        "index": {
          "description": "Start general type of worker The pre-forking action is monadic action that will be run prior to calling forkWorker It might be some initialization code running the DB query anything you want The resulting WData will be passed to the callback The socket that is passed to the callback is server socket",
          "hierarchy": "System Restricted Worker",
          "module": "System.Restricted.Worker",
          "name": "startWorker",
          "normalized": "String-\u003eFilePath-\u003eMaybe(IO Handle)-\u003eLimitSettings-\u003eWMonad a(WData a)-\u003e(WData a-\u003eSocket-\u003eIO())-\u003eWMonad a(Worker a,RestartWorker b a)",
          "package": "restricted-workers",
          "partial": "Worker",
          "signature": "String-\u003eFilePath-\u003eMaybe(IO Handle)-\u003eLimitSettings-\u003eWMonad w(WData w)-\u003e(WData w-\u003eSocket-\u003eIO())-\u003eWMonad w(Worker w,RestartWorker m w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#v:startWorker"
      }
    }
  ]
]