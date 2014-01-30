[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe implementation of security restrictions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Restricted.Limits",
        "fct-package": "restricted-workers",
        "fct-signature": "module",
        "fct-source": "src/System-Restricted-Limits.html",
        "fct-type": "module",
        "title": "Limits"
      },
      "index": {
        "description": "The implementation of security restrictions",
        "hierarchy": "System Restricted Limits",
        "module": "System.Restricted.Limits",
        "name": "Limits",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Limits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:changeUserID",
      "description": {
        "fct-descr": "\u003cp\u003eChange the uid of the current process\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Limits",
        "fct-package": "restricted-workers",
        "fct-signature": "UserID -\u003e IO ()",
        "fct-source": "src/System-Restricted-Limits.html#changeUserID",
        "fct-type": "function",
        "title": "changeUserID"
      },
      "index": {
        "description": "Change the uid of the current process",
        "hierarchy": "System Restricted Limits",
        "module": "System.Restricted.Limits",
        "name": "changeUserID",
        "normalized": "UserID-\u003eIO()",
        "package": "restricted-workers",
        "partial": "User ID",
        "signature": "UserID-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:chroot",
      "description": {
        "fct-descr": "\u003cp\u003eSet the chroot jail\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Limits",
        "fct-package": "restricted-workers",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Restricted-Limits.html#chroot",
        "fct-type": "function",
        "title": "chroot"
      },
      "index": {
        "description": "Set the chroot jail",
        "hierarchy": "System Restricted Limits",
        "module": "System.Restricted.Limits",
        "name": "chroot",
        "normalized": "FilePath-\u003eIO()",
        "package": "restricted-workers",
        "partial": "",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:processTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eWaits for a certain period of time\n and then kills the process\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Limits",
        "fct-package": "restricted-workers",
        "fct-signature": "ProcessID-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "processTimeout"
      },
      "index": {
        "description": "Waits for certain period of time and then kills the process",
        "hierarchy": "System Restricted Limits",
        "module": "System.Restricted.Limits",
        "name": "processTimeout",
        "normalized": "ProcessID-\u003eInt-\u003eIO()",
        "package": "restricted-workers",
        "partial": "Timeout",
        "signature": "ProcessID-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:setCGroup",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a process to a cgroup\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Limits",
        "fct-package": "restricted-workers",
        "fct-signature": "LimitSettings-\u003e ProcessID-\u003e IO ()",
        "fct-type": "function",
        "title": "setCGroup"
      },
      "index": {
        "description": "Add process to cgroup",
        "hierarchy": "System Restricted Limits",
        "module": "System.Restricted.Limits",
        "name": "setCGroup",
        "normalized": "LimitSettings-\u003eProcessID-\u003eIO()",
        "package": "restricted-workers",
        "partial": "CGroup",
        "signature": "LimitSettings-\u003eProcessID-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:setLimits",
      "description": {
        "fct-descr": "\u003cp\u003eApply the \u003ccode\u003e\u003ca\u003eLimitSettings\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Limits",
        "fct-package": "restricted-workers",
        "fct-signature": "LimitSettings -\u003e IO ()",
        "fct-source": "src/System-Restricted-Limits.html#setLimits",
        "fct-type": "function",
        "title": "setLimits"
      },
      "index": {
        "description": "Apply the LimitSettings",
        "hierarchy": "System Restricted Limits",
        "module": "System.Restricted.Limits",
        "name": "setLimits",
        "normalized": "LimitSettings-\u003eIO()",
        "package": "restricted-workers",
        "partial": "Limits",
        "signature": "LimitSettings-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:setRLimits",
      "description": {
        "fct-descr": "\u003cp\u003eSet rlimits using setrlimit syscall\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Limits",
        "fct-package": "restricted-workers",
        "fct-signature": "RLimits -\u003e IO ()",
        "fct-source": "src/System-Restricted-Limits.html#setRLimits",
        "fct-type": "function",
        "title": "setRLimits"
      },
      "index": {
        "description": "Set rlimits using setrlimit syscall",
        "hierarchy": "System Restricted Limits",
        "module": "System.Restricted.Limits",
        "name": "setRLimits",
        "normalized": "RLimits-\u003eIO()",
        "package": "restricted-workers",
        "partial": "RLimits",
        "signature": "RLimits-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Limits.html#v:setupSELinuxCntx",
      "description": {
        "fct-descr": "\u003cp\u003eSet the security context.\n To be more precise, it only sets up the type.\n Example usage:\n\u003c/p\u003e\u003cpre\u003e setupSELinuxCntx \"my_restricted_t\"\n\u003c/pre\u003e",
        "fct-module": "System.Restricted.Limits",
        "fct-package": "restricted-workers",
        "fct-signature": "SecurityContext -\u003e IO ()",
        "fct-source": "src/System-Restricted-Limits.html#setupSELinuxCntx",
        "fct-type": "function",
        "title": "setupSELinuxCntx"
      },
      "index": {
        "description": "Set the security context To be more precise it only sets up the type Example usage setupSELinuxCntx my restricted",
        "hierarchy": "System Restricted Limits",
        "module": "System.Restricted.Limits",
        "name": "setupSELinuxCntx",
        "normalized": "SecurityContext-\u003eIO()",
        "package": "restricted-workers",
        "partial": "SELinux Cntx",
        "signature": "SecurityContext-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#",
      "description": {
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "module",
        "fct-source": "src/System-Restricted-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "Types",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#t:LimitSettings",
      "description": {
        "fct-descr": "\u003cp\u003eDatastructure that holds the information about restrictions and\n   limitations for the worker process\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "data",
        "fct-source": "src/System-Restricted-Types.html#LimitSettings",
        "fct-type": "data",
        "title": "LimitSettings"
      },
      "index": {
        "description": "Datastructure that holds the information about restrictions and limitations for the worker process",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "LimitSettings",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Limit Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#t:RLimits",
      "description": {
        "fct-descr": "\u003cp\u003eResource limits\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "data",
        "fct-source": "src/System-Restricted-Types.html#RLimits",
        "fct-type": "data",
        "title": "RLimits"
      },
      "index": {
        "description": "Resource limits",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "RLimits",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "RLimits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:LimitSettings",
      "description": {
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "LimitSettings",
        "fct-source": "src/System-Restricted-Types.html#LimitSettings",
        "fct-type": "function",
        "title": "LimitSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "LimitSettings",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Limit Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:RLimits",
      "description": {
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "RLimits",
        "fct-source": "src/System-Restricted-Types.html#RLimits",
        "fct-type": "function",
        "title": "RLimits"
      },
      "index": {
        "description": "",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "RLimits",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "RLimits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:cgroupPath",
      "description": {
        "fct-descr": "\u003cp\u003eA filepath to the \u003ccode\u003etasks\u003c/code\u003e file for the desired cgroup.\n\u003c/p\u003e\u003cp\u003eFor example, if I have mounted the \u003ccode\u003ecpu\u003c/code\u003e controller at\n \u003ccode\u003e\u003cem\u003ecgroups\u003c/em\u003ecpu/\u003c/code\u003e and I want the evaluator to be running in the\n cgroup \u003ccode\u003eidiaworkers\u003c/code\u003e then the \u003ccode\u003e\u003ca\u003ecgroupPath\u003c/a\u003e\u003c/code\u003e would be\n \u003ccode\u003e\u003cem\u003ecgroups\u003c/em\u003ecpu/idiaworkers\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/System-Restricted-Types.html#LimitSettings",
        "fct-type": "function",
        "title": "cgroupPath"
      },
      "index": {
        "description": "filepath to the tasks file for the desired cgroup For example if have mounted the cpu controller at cgroups cpu and want the evaluator to be running in the cgroup idiaworkers then the cgroupPath would be cgroups cpu idiaworkers",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "cgroupPath",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:chrootPath",
      "description": {
        "fct-descr": "\u003cp\u003eThe directory that the evaluator process will be \u003ccode\u003echroot\u003c/code\u003eed\n into. Please note that if chroot is applied, all the pathes\n in \u003ccode\u003eEvalSettings\u003c/code\u003e will be calculated relatively to this\n value.\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/System-Restricted-Types.html#LimitSettings",
        "fct-type": "function",
        "title": "chrootPath"
      },
      "index": {
        "description": "The directory that the evaluator process will be chroot ed into Please note that if chroot is applied all the pathes in EvalSettings will be calculated relatively to this value",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "chrootPath",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:coreFileSizeLimit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "ResourceLimits",
        "fct-source": "src/System-Restricted-Types.html#RLimits",
        "fct-type": "function",
        "title": "coreFileSizeLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "coreFileSizeLimit",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "File Size Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:cpuTimeLimit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "ResourceLimits",
        "fct-source": "src/System-Restricted-Types.html#RLimits",
        "fct-type": "function",
        "title": "cpuTimeLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "cpuTimeLimit",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Time Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:dataSizeLimit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "ResourceLimits",
        "fct-source": "src/System-Restricted-Types.html#RLimits",
        "fct-type": "function",
        "title": "dataSizeLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "dataSizeLimit",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Size Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:defaultLimits",
      "description": {
        "fct-descr": "\u003cp\u003eDefault \u003ccode\u003e\u003ca\u003eLimitSettings\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "LimitSettings",
        "fct-source": "src/System-Restricted-Types.html#defaultLimits",
        "fct-type": "function",
        "title": "defaultLimits"
      },
      "index": {
        "description": "Default LimitSettings",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "defaultLimits",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Limits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:fileSizeLimit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "ResourceLimits",
        "fct-source": "src/System-Restricted-Types.html#RLimits",
        "fct-type": "function",
        "title": "fileSizeLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "fileSizeLimit",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Size Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:niceness",
      "description": {
        "fct-descr": "\u003cp\u003eProcess priority for the \u003ccode\u003enice\u003c/code\u003e syscall.\n -20 is the highest, 20 is the lowest\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "Int",
        "fct-source": "src/System-Restricted-Types.html#LimitSettings",
        "fct-type": "function",
        "title": "niceness"
      },
      "index": {
        "description": "Process priority for the nice syscall is the highest is the lowest",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "niceness",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:openFilesLimit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "ResourceLimits",
        "fct-source": "src/System-Restricted-Types.html#RLimits",
        "fct-type": "function",
        "title": "openFilesLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "openFilesLimit",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Files Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:processUid",
      "description": {
        "fct-descr": "\u003cp\u003eThe UID that will be set after the call to chroot.\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "Maybe UserID",
        "fct-source": "src/System-Restricted-Types.html#LimitSettings",
        "fct-type": "function",
        "title": "processUid"
      },
      "index": {
        "description": "The UID that will be set after the call to chroot",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "processUid",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Uid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:rlimits",
      "description": {
        "fct-descr": "\u003cp\u003eResource limits for the \u003ccode\u003esetrlimit\u003c/code\u003e syscall\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "Maybe RLimits",
        "fct-source": "src/System-Restricted-Types.html#LimitSettings",
        "fct-type": "function",
        "title": "rlimits"
      },
      "index": {
        "description": "Resource limits for the setrlimit syscall",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "rlimits",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:secontext",
      "description": {
        "fct-descr": "\u003cp\u003eSELinux security context under which the worker\n process will be running.\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "Maybe SecurityContext",
        "fct-source": "src/System-Restricted-Types.html#LimitSettings",
        "fct-type": "function",
        "title": "secontext"
      },
      "index": {
        "description": "SELinux security context under which the worker process will be running",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "secontext",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:stackSizeLimit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "ResourceLimits",
        "fct-source": "src/System-Restricted-Types.html#RLimits",
        "fct-type": "function",
        "title": "stackSizeLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "stackSizeLimit",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Size Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:timeout",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum time for which the code is allowed to run\n (in seconds)\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "Int",
        "fct-source": "src/System-Restricted-Types.html#LimitSettings",
        "fct-type": "function",
        "title": "timeout"
      },
      "index": {
        "description": "Maximum time for which the code is allowed to run in seconds",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "timeout",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Types.html#v:totalMemoryLimit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Restricted.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "ResourceLimits",
        "fct-source": "src/System-Restricted-Types.html#RLimits",
        "fct-type": "function",
        "title": "totalMemoryLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "System Restricted Types",
        "module": "System.Restricted.Types",
        "name": "totalMemoryLimit",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Memory Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary exposing internal functions uses by \u003ccode\u003e\u003ca\u003eWorker\u003c/a\u003e\u003c/code\u003e\n useful work writing your own workers\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Restricted.Worker.Internal",
        "fct-package": "restricted-workers",
        "fct-signature": "module",
        "fct-source": "src/System-Restricted-Worker-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Library exposing internal functions uses by Worker useful work writing your own workers",
        "hierarchy": "System Restricted Worker Internal",
        "module": "System.Restricted.Worker.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:connectToWorker",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to the worker's socket and return a handle\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Internal",
        "fct-package": "restricted-workers",
        "fct-signature": "Worker a -\u003e IO Handle",
        "fct-source": "src/System-Restricted-Worker-Internal.html#connectToWorker",
        "fct-type": "function",
        "title": "connectToWorker"
      },
      "index": {
        "description": "Connect to the worker socket and return handle",
        "hierarchy": "System Restricted Worker Internal",
        "module": "System.Restricted.Worker.Internal",
        "name": "connectToWorker",
        "normalized": "Worker a-\u003eIO Handle",
        "package": "restricted-workers",
        "partial": "To Worker",
        "signature": "Worker a-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:forkWorker",
      "description": {
        "fct-descr": "\u003cp\u003eFork a worker process\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Internal",
        "fct-package": "restricted-workers",
        "fct-signature": "Worker a-\u003e Maybe (IO Handle)-\u003e (Socket -\u003e IO ())-\u003e IO ProcessID",
        "fct-type": "function",
        "title": "forkWorker"
      },
      "index": {
        "description": "Fork worker process",
        "hierarchy": "System Restricted Worker Internal",
        "module": "System.Restricted.Worker.Internal",
        "name": "forkWorker",
        "normalized": "Worker a-\u003eMaybe(IO Handle)-\u003e(Socket-\u003eIO())-\u003eIO ProcessID",
        "package": "restricted-workers",
        "partial": "Worker",
        "signature": "Worker a-\u003eMaybe(IO Handle)-\u003e(Socket-\u003eIO())-\u003eIO ProcessID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:killWorker",
      "description": {
        "fct-descr": "\u003cp\u003eKill a worker. Takes an initialized worker,\n returns non-initialized one.\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Internal",
        "fct-package": "restricted-workers",
        "fct-signature": "Worker a -\u003e IO (Worker a)",
        "fct-source": "src/System-Restricted-Worker-Internal.html#killWorker",
        "fct-type": "function",
        "title": "killWorker"
      },
      "index": {
        "description": "Kill worker Takes an initialized worker returns non-initialized one",
        "hierarchy": "System Restricted Worker Internal",
        "module": "System.Restricted.Worker.Internal",
        "name": "killWorker",
        "normalized": "Worker a-\u003eIO(Worker a)",
        "package": "restricted-workers",
        "partial": "Worker",
        "signature": "Worker a-\u003eIO(Worker a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:mkSock",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new unix socket\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Internal",
        "fct-package": "restricted-workers",
        "fct-signature": "FilePath -\u003e IO Socket",
        "fct-source": "src/System-Restricted-Worker-Internal.html#mkSock",
        "fct-type": "function",
        "title": "mkSock"
      },
      "index": {
        "description": "Create new unix socket",
        "hierarchy": "System Restricted Worker Internal",
        "module": "System.Restricted.Worker.Internal",
        "name": "mkSock",
        "normalized": "FilePath-\u003eIO Socket",
        "package": "restricted-workers",
        "partial": "Sock",
        "signature": "FilePath-\u003eIO Socket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:processAlive",
      "description": {
        "fct-descr": "\u003cp\u003eChecks whether the process is alive\n \u003cem\u003ehacky\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Internal",
        "fct-package": "restricted-workers",
        "fct-signature": "ProcessID -\u003e IO Bool",
        "fct-source": "src/System-Restricted-Worker-Internal.html#processAlive",
        "fct-type": "function",
        "title": "processAlive"
      },
      "index": {
        "description": "Checks whether the process is alive hacky",
        "hierarchy": "System Restricted Worker Internal",
        "module": "System.Restricted.Worker.Internal",
        "name": "processAlive",
        "normalized": "ProcessID-\u003eIO Bool",
        "package": "restricted-workers",
        "partial": "Alive",
        "signature": "ProcessID-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:removeFileIfExists",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a file if it exists. Should be thread-safe.\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Internal",
        "fct-package": "restricted-workers",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/System-Restricted-Worker-Internal.html#removeFileIfExists",
        "fct-type": "function",
        "title": "removeFileIfExists"
      },
      "index": {
        "description": "Remove file if it exists Should be thread-safe",
        "hierarchy": "System Restricted Worker Internal",
        "module": "System.Restricted.Worker.Internal",
        "name": "removeFileIfExists",
        "normalized": "FilePath-\u003eIO()",
        "package": "restricted-workers",
        "partial": "File If Exists",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:workerAlive",
      "description": {
        "fct-descr": "\u003cp\u003eChecks whether the worker is alive\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Internal",
        "fct-package": "restricted-workers",
        "fct-signature": "Worker a -\u003e IO Bool",
        "fct-source": "src/System-Restricted-Worker-Internal.html#workerAlive",
        "fct-type": "function",
        "title": "workerAlive"
      },
      "index": {
        "description": "Checks whether the worker is alive",
        "hierarchy": "System Restricted Worker Internal",
        "module": "System.Restricted.Worker.Internal",
        "name": "workerAlive",
        "normalized": "Worker a-\u003eIO Bool",
        "package": "restricted-workers",
        "partial": "Alive",
        "signature": "Worker a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Internal.html#v:workerTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eWaits for a certain period of time\n and then kills the worker\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Internal",
        "fct-package": "restricted-workers",
        "fct-signature": "Worker a-\u003e Int-\u003e IO (Worker a)",
        "fct-type": "function",
        "title": "workerTimeout"
      },
      "index": {
        "description": "Waits for certain period of time and then kills the worker",
        "hierarchy": "System Restricted Worker Internal",
        "module": "System.Restricted.Worker.Internal",
        "name": "workerTimeout",
        "normalized": "Worker a-\u003eInt-\u003eIO(Worker a)",
        "package": "restricted-workers",
        "partial": "Timeout",
        "signature": "Worker a-\u003eInt-\u003eIO(Worker a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA non-stripped pooling abstraction that restarts workers\n Some got has been taken from \u003ccode\u003e\u003ca\u003ePool\u003c/a\u003e\u003c/code\u003e by bos\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Restricted.Worker.Pool",
        "fct-package": "restricted-workers",
        "fct-signature": "module",
        "fct-source": "src/System-Restricted-Worker-Pool.html",
        "fct-type": "module",
        "title": "Pool"
      },
      "index": {
        "description": "non-stripped pooling abstraction that restarts workers Some got has been taken from Pool by bos",
        "hierarchy": "System Restricted Worker Pool",
        "module": "System.Restricted.Worker.Pool",
        "name": "Pool",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#t:WorkersPool",
      "description": {
        "fct-descr": "\u003cp\u003eA simple pool for workers. Workers are restarted from time to time\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Pool",
        "fct-package": "restricted-workers",
        "fct-signature": "data",
        "fct-source": "src/System-Restricted-Worker-Pool.html#WorkersPool",
        "fct-type": "data",
        "title": "WorkersPool"
      },
      "index": {
        "description": "simple pool for workers Workers are restarted from time to time",
        "hierarchy": "System Restricted Worker Pool",
        "module": "System.Restricted.Worker.Pool",
        "name": "WorkersPool",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Workers Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#v:destroyWorker",
      "description": {
        "fct-descr": "\u003cp\u003eDestroy a worker. Frees up space in the pool\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Pool",
        "fct-package": "restricted-workers",
        "fct-signature": "WorkersPool a -\u003e Worker a -\u003e IO ()",
        "fct-source": "src/System-Restricted-Worker-Pool.html#destroyWorker",
        "fct-type": "function",
        "title": "destroyWorker"
      },
      "index": {
        "description": "Destroy worker Frees up space in the pool",
        "hierarchy": "System Restricted Worker Pool",
        "module": "System.Restricted.Worker.Pool",
        "name": "destroyWorker",
        "normalized": "WorkersPool a-\u003eWorker a-\u003eIO()",
        "package": "restricted-workers",
        "partial": "Worker",
        "signature": "WorkersPool a-\u003eWorker a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#v:mkPool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new workers pool\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Pool",
        "fct-package": "restricted-workers",
        "fct-signature": "(Int -\u003e WMonad a (Worker a, RestartWorker IO a))-\u003e Int-\u003e Int-\u003e WMonad a (WorkersPool a)",
        "fct-type": "function",
        "title": "mkPool"
      },
      "index": {
        "description": "Create new workers pool",
        "hierarchy": "System Restricted Worker Pool",
        "module": "System.Restricted.Worker.Pool",
        "name": "mkPool",
        "normalized": "(Int-\u003eWMonad a(Worker a,RestartWorker IO a))-\u003eInt-\u003eInt-\u003eWMonad a(WorkersPool a)",
        "package": "restricted-workers",
        "partial": "Pool",
        "signature": "(Int-\u003eWMonad a(Worker a,RestartWorker IO a))-\u003eInt-\u003eInt-\u003eWMonad a(WorkersPool a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#v:putWorker",
      "description": {
        "fct-descr": "\u003cp\u003ePut the worker back in pool\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Pool",
        "fct-package": "restricted-workers",
        "fct-signature": "WorkersPool a -\u003e (Worker a, RestartWorker IO a) -\u003e IO ()",
        "fct-source": "src/System-Restricted-Worker-Pool.html#putWorker",
        "fct-type": "function",
        "title": "putWorker"
      },
      "index": {
        "description": "Put the worker back in pool",
        "hierarchy": "System Restricted Worker Pool",
        "module": "System.Restricted.Worker.Pool",
        "name": "putWorker",
        "normalized": "WorkersPool a-\u003e(Worker a,RestartWorker IO a)-\u003eIO()",
        "package": "restricted-workers",
        "partial": "Worker",
        "signature": "WorkersPool a-\u003e(Worker a,RestartWorker IO a)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#v:takeWorker",
      "description": {
        "fct-descr": "\u003cp\u003eTake worker from the pool.\n The caller is responsible for putting the worker back into the pool\n or destroying it with \u003ccode\u003e\u003ca\u003edestroyWorker\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Pool",
        "fct-package": "restricted-workers",
        "fct-signature": "WorkersPool a -\u003e WMonad a (Worker a, RestartWorker IO a)",
        "fct-source": "src/System-Restricted-Worker-Pool.html#takeWorker",
        "fct-type": "function",
        "title": "takeWorker"
      },
      "index": {
        "description": "Take worker from the pool The caller is responsible for putting the worker back into the pool or destroying it with destroyWorker",
        "hierarchy": "System Restricted Worker Pool",
        "module": "System.Restricted.Worker.Pool",
        "name": "takeWorker",
        "normalized": "WorkersPool a-\u003eWMonad a(Worker a,RestartWorker IO a)",
        "package": "restricted-workers",
        "partial": "Worker",
        "signature": "WorkersPool a-\u003eWMonad a(Worker a,RestartWorker IO a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Pool.html#v:withWorker",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etakeWorker\u003c/a\u003e\u003c/code\u003e + \u003ccode\u003e\u003ca\u003eputWorker\u003c/a\u003e\u003c/code\u003e but takes care of the exception handling for you\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Pool",
        "fct-package": "restricted-workers",
        "fct-signature": "WorkersPool a -\u003e ((Worker a, RestartWorker IO a) -\u003e m b) -\u003e m b",
        "fct-source": "src/System-Restricted-Worker-Pool.html#withWorker",
        "fct-type": "function",
        "title": "withWorker"
      },
      "index": {
        "description": "Like takeWorker putWorker but takes care of the exception handling for you",
        "hierarchy": "System Restricted Worker Pool",
        "module": "System.Restricted.Worker.Pool",
        "name": "withWorker",
        "normalized": "WorkersPool a-\u003e((Worker a,RestartWorker IO a)-\u003eb c)-\u003eb c",
        "package": "restricted-workers",
        "partial": "Worker",
        "signature": "WorkersPool a-\u003e((Worker a,RestartWorker IO a)-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple protocol for sending serializable data over handles\n\u003c/p\u003e\u003cp\u003ePlease note that this is a very simple implementation that works\n fine for most of that data, however, the size of the data you might\n send at one go is limited to MAX_WORD32 bytes. We use \u003ccode\u003ecereal\u003c/code\u003e for\n serialization.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Restricted.Worker.Protocol",
        "fct-package": "restricted-workers",
        "fct-signature": "module",
        "fct-source": "src/System-Restricted-Worker-Protocol.html",
        "fct-type": "module",
        "title": "Protocol"
      },
      "index": {
        "description": "simple protocol for sending serializable data over handles Please note that this is very simple implementation that works fine for most of that data however the size of the data you might send at one go is limited to MAX WORD32 bytes We use cereal for serialization",
        "hierarchy": "System Restricted Worker Protocol",
        "module": "System.Restricted.Worker.Protocol",
        "name": "Protocol",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Protocol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#t:DecodeResult",
      "description": {
        "fct-descr": "\u003cp\u003eResult of the deserialization\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Protocol",
        "fct-package": "restricted-workers",
        "fct-signature": "type",
        "fct-source": "src/System-Restricted-Worker-Protocol.html#DecodeResult",
        "fct-type": "type",
        "title": "DecodeResult"
      },
      "index": {
        "description": "Result of the deserialization",
        "hierarchy": "System Restricted Worker Protocol",
        "module": "System.Restricted.Worker.Protocol",
        "name": "DecodeResult",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Decode Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#t:ProtocolException",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception type used by \u003ccode\u003e\u003ca\u003eProtocol\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Protocol",
        "fct-package": "restricted-workers",
        "fct-signature": "data",
        "fct-source": "src/System-Restricted-Worker-Types.html#ProtocolException",
        "fct-type": "data",
        "title": "ProtocolException"
      },
      "index": {
        "description": "An exception type used by Protocol",
        "hierarchy": "System Restricted Worker Protocol",
        "module": "System.Restricted.Worker.Protocol",
        "name": "ProtocolException",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Protocol Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#v:ConversionException",
      "description": {
        "fct-descr": "\u003cp\u003eThere has been an error during the conversion step\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Protocol",
        "fct-package": "restricted-workers",
        "fct-signature": "ConversionException String",
        "fct-source": "src/System-Restricted-Worker-Types.html#ProtocolException",
        "fct-type": "function",
        "title": "ConversionException"
      },
      "index": {
        "description": "There has been an error during the conversion step",
        "hierarchy": "System Restricted Worker Protocol",
        "module": "System.Restricted.Worker.Protocol",
        "name": "ConversionException",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Conversion Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#v:HandleException",
      "description": {
        "fct-descr": "\u003cp\u003eThere has been an error while using the handler\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Protocol",
        "fct-package": "restricted-workers",
        "fct-signature": "HandleException IOException",
        "fct-source": "src/System-Restricted-Worker-Types.html#ProtocolException",
        "fct-type": "function",
        "title": "HandleException"
      },
      "index": {
        "description": "There has been an error while using the handler",
        "hierarchy": "System Restricted Worker Protocol",
        "module": "System.Restricted.Worker.Protocol",
        "name": "HandleException",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Handle Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#v:getData",
      "description": {
        "fct-descr": "\u003cp\u003eRead the data from a handle and deserialize it.\n May throw \u003ccode\u003e\u003ca\u003eProtocolException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Protocol",
        "fct-package": "restricted-workers",
        "fct-signature": "Handle -\u003e IO a",
        "fct-source": "src/System-Restricted-Worker-Protocol.html#getData",
        "fct-type": "function",
        "title": "getData"
      },
      "index": {
        "description": "Read the data from handle and deserialize it May throw ProtocolException",
        "hierarchy": "System Restricted Worker Protocol",
        "module": "System.Restricted.Worker.Protocol",
        "name": "getData",
        "normalized": "Handle-\u003eIO a",
        "package": "restricted-workers",
        "partial": "Data",
        "signature": "Handle-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#v:getDataSafe",
      "description": {
        "fct-descr": "\u003cp\u003eSafe version of \u003ccode\u003e\u003ca\u003egetData\u003c/a\u003e\u003c/code\u003e that doesn't throw \u003ccode\u003e\u003ca\u003eProtocolException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Protocol",
        "fct-package": "restricted-workers",
        "fct-signature": "Handle -\u003e IO (DecodeResult a)",
        "fct-source": "src/System-Restricted-Worker-Protocol.html#getDataSafe",
        "fct-type": "function",
        "title": "getDataSafe"
      },
      "index": {
        "description": "Safe version of getData that doesn throw ProtocolException",
        "hierarchy": "System Restricted Worker Protocol",
        "module": "System.Restricted.Worker.Protocol",
        "name": "getDataSafe",
        "normalized": "Handle-\u003eIO(DecodeResult a)",
        "package": "restricted-workers",
        "partial": "Data Safe",
        "signature": "Handle-\u003eIO(DecodeResult a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Protocol.html#v:sendData",
      "description": {
        "fct-descr": "\u003cp\u003eSend some serialiazable data over a handle.\n Returns \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e representing the encoded data. May throw\n \u003ccode\u003e\u003ca\u003eProtocolException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Protocol",
        "fct-package": "restricted-workers",
        "fct-signature": "Handle -\u003e a -\u003e IO ByteString",
        "fct-source": "src/System-Restricted-Worker-Protocol.html#sendData",
        "fct-type": "function",
        "title": "sendData"
      },
      "index": {
        "description": "Send some serialiazable data over handle Returns ByteString representing the encoded data May throw ProtocolException",
        "hierarchy": "System Restricted Worker Protocol",
        "module": "System.Restricted.Worker.Protocol",
        "name": "sendData",
        "normalized": "Handle-\u003ea-\u003eIO ByteString",
        "package": "restricted-workers",
        "partial": "Data",
        "signature": "Handle-\u003ea-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWorker can be in one of three states\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eUninitialized\u003c/dt\u003e\u003cdd\u003e Uninitialized worker is a worker that has a name,\n    a socket, possibly \u003ccode\u003e\u003ca\u003eWData\u003c/a\u003e\u003c/code\u003e but has not been forker\n\u003c/dd\u003e\u003cdt\u003eInitialized\u003c/dt\u003e\u003cdd\u003e Initialized worker has an associated forker process.\n\u003c/dd\u003e\u003cdt\u003eActive\u003c/dt\u003e\u003cdd\u003e A worker is active if it's initialized and it's being used\n    a client. Active/inactive workers are managed by a \u003ccode\u003eWorkersPool\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "module",
        "fct-source": "src/System-Restricted-Worker-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Worker can be in one of three states Uninitialized Uninitialized worker is worker that has name socket possibly WData but has not been forker Initialized Initialized worker has an associated forker process Active worker is active if it initialized and it being used client Active inactive workers are managed by WorkersPool",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "Types",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#t:IOWorker",
      "description": {
        "fct-descr": "\u003cp\u003eA simple type of worker that executes IO actions\n\u003c/p\u003e\u003cp\u003eThe definition of the \u003ccode\u003e\u003ca\u003eWorkerData\u003c/a\u003e\u003c/code\u003e instance for IOWorker looks like this:\n\u003c/p\u003e\u003cpre\u003e\n  instance WorkerData IOWorker where\n      type WData IOWorker = ()\n      type WMonad IOWorker = IO\n\u003c/pre\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "data",
        "fct-source": "src/System-Restricted-Worker-Types.html#IOWorker",
        "fct-type": "data",
        "title": "IOWorker"
      },
      "index": {
        "description": "simple type of worker that executes IO actions The definition of the WorkerData instance for IOWorker looks like this instance WorkerData IOWorker where type WData IOWorker type WMonad IOWorker IO",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "IOWorker",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "IOWorker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#t:ProtocolException",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception type used by \u003ccode\u003e\u003ca\u003eProtocol\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "data",
        "fct-source": "src/System-Restricted-Worker-Types.html#ProtocolException",
        "fct-type": "data",
        "title": "ProtocolException"
      },
      "index": {
        "description": "An exception type used by Protocol",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "ProtocolException",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Protocol Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#t:RestartWorker",
      "description": {
        "fct-descr": "\u003cp\u003eA worker restarting function\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "type",
        "fct-source": "src/System-Restricted-Worker-Types.html#RestartWorker",
        "fct-type": "type",
        "title": "RestartWorker"
      },
      "index": {
        "description": "worker restarting function",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "RestartWorker",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Restart Worker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#t:Worker",
      "description": {
        "fct-descr": "\u003cp\u003eA datatype representing a worker of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "data",
        "fct-source": "src/System-Restricted-Worker-Types.html#Worker",
        "fct-type": "data",
        "title": "Worker"
      },
      "index": {
        "description": "datatype representing worker of type",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "Worker",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Worker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#t:WorkerData",
      "description": {
        "fct-descr": "\u003cp\u003eTypes of data attached to a worker.\n This might be a configuration file, a size of the packet, session data, etc.\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "class",
        "fct-source": "src/System-Restricted-Worker-Types.html#WorkerData",
        "fct-type": "class",
        "title": "WorkerData"
      },
      "index": {
        "description": "Types of data attached to worker This might be configuration file size of the packet session data etc",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "WorkerData",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Worker Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:ConversionException",
      "description": {
        "fct-descr": "\u003cp\u003eThere has been an error during the conversion step\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "ConversionException String",
        "fct-source": "src/System-Restricted-Worker-Types.html#ProtocolException",
        "fct-type": "function",
        "title": "ConversionException"
      },
      "index": {
        "description": "There has been an error during the conversion step",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "ConversionException",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Conversion Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:HandleException",
      "description": {
        "fct-descr": "\u003cp\u003eThere has been an error while using the handler\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "HandleException IOException",
        "fct-source": "src/System-Restricted-Worker-Types.html#ProtocolException",
        "fct-type": "function",
        "title": "HandleException"
      },
      "index": {
        "description": "There has been an error while using the handler",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "HandleException",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Handle Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:Worker",
      "description": {
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "Worker",
        "fct-source": "src/System-Restricted-Worker-Types.html#Worker",
        "fct-type": "function",
        "title": "Worker"
      },
      "index": {
        "description": "",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "Worker",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Worker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:initialized",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether the worker is initialized\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "Worker a -\u003e Bool",
        "fct-source": "src/System-Restricted-Worker-Types.html#initialized",
        "fct-type": "function",
        "title": "initialized"
      },
      "index": {
        "description": "Check whether the worker is initialized",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "initialized",
        "normalized": "Worker a-\u003eBool",
        "package": "restricted-workers",
        "partial": "",
        "signature": "Worker a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:workerLimits",
      "description": {
        "fct-descr": "\u003cp\u003eSecurity restrictions for the worker\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "LimitSettings",
        "fct-source": "src/System-Restricted-Worker-Types.html#Worker",
        "fct-type": "function",
        "title": "workerLimits"
      },
      "index": {
        "description": "Security restrictions for the worker",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "workerLimits",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Limits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:workerName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the worker\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "String",
        "fct-source": "src/System-Restricted-Worker-Types.html#Worker",
        "fct-type": "function",
        "title": "workerName"
      },
      "index": {
        "description": "Name of the worker",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "workerName",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:workerPid",
      "description": {
        "fct-descr": "\u003cp\u003e'Just pid' if the worker's process ID is \u003ccode\u003epid\u003c/code\u003e,\n Nothing' if the worker is not active/initialized\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "Maybe ProcessID",
        "fct-source": "src/System-Restricted-Worker-Types.html#Worker",
        "fct-type": "function",
        "title": "workerPid"
      },
      "index": {
        "description": "Just pid if the worker process ID is pid Nothing if the worker is not active initialized",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "workerPid",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Pid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker-Types.html#v:workerSocket",
      "description": {
        "fct-descr": "\u003cp\u003eA filepath to the Unix socket that will be\n used for communicating with the worker.\n If the file is already present it will be unliked\n during the initializatin step\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker.Types",
        "fct-package": "restricted-workers",
        "fct-signature": "FilePath",
        "fct-source": "src/System-Restricted-Worker-Types.html#Worker",
        "fct-type": "function",
        "title": "workerSocket"
      },
      "index": {
        "description": "filepath to the Unix socket that will be used for communicating with the worker If the file is already present it will be unliked during the initializatin step",
        "hierarchy": "System Restricted Worker Types",
        "module": "System.Restricted.Worker.Types",
        "name": "workerSocket",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain entry point of the library\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Restricted.Worker",
        "fct-package": "restricted-workers",
        "fct-signature": "module",
        "fct-source": "src/System-Restricted-Worker.html",
        "fct-type": "module",
        "title": "Worker"
      },
      "index": {
        "description": "Main entry point of the library",
        "hierarchy": "System Restricted Worker",
        "module": "System.Restricted.Worker",
        "name": "Worker",
        "normalized": "",
        "package": "restricted-workers",
        "partial": "Worker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#v:connectToWorker",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to the worker's socket and return a handle\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker",
        "fct-package": "restricted-workers",
        "fct-signature": "Worker a -\u003e IO Handle",
        "fct-source": "src/System-Restricted-Worker-Internal.html#connectToWorker",
        "fct-type": "function",
        "title": "connectToWorker"
      },
      "index": {
        "description": "Connect to the worker socket and return handle",
        "hierarchy": "System Restricted Worker",
        "module": "System.Restricted.Worker",
        "name": "connectToWorker",
        "normalized": "Worker a-\u003eIO Handle",
        "package": "restricted-workers",
        "partial": "To Worker",
        "signature": "Worker a-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#v:killWorker",
      "description": {
        "fct-descr": "\u003cp\u003eKill a worker. Takes an initialized worker,\n returns non-initialized one.\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker",
        "fct-package": "restricted-workers",
        "fct-signature": "Worker a -\u003e IO (Worker a)",
        "fct-source": "src/System-Restricted-Worker-Internal.html#killWorker",
        "fct-type": "function",
        "title": "killWorker"
      },
      "index": {
        "description": "Kill worker Takes an initialized worker returns non-initialized one",
        "hierarchy": "System Restricted Worker",
        "module": "System.Restricted.Worker",
        "name": "killWorker",
        "normalized": "Worker a-\u003eIO(Worker a)",
        "package": "restricted-workers",
        "partial": "Worker",
        "signature": "Worker a-\u003eIO(Worker a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#v:mkDefaultWorker",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an uninitialized worker\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker",
        "fct-package": "restricted-workers",
        "fct-signature": "String -\u003e FilePath -\u003e LimitSettings -\u003e Worker a",
        "fct-source": "src/System-Restricted-Worker.html#mkDefaultWorker",
        "fct-type": "function",
        "title": "mkDefaultWorker"
      },
      "index": {
        "description": "Create an uninitialized worker",
        "hierarchy": "System Restricted Worker",
        "module": "System.Restricted.Worker",
        "name": "mkDefaultWorker",
        "normalized": "String-\u003eFilePath-\u003eLimitSettings-\u003eWorker a",
        "package": "restricted-workers",
        "partial": "Default Worker",
        "signature": "String-\u003eFilePath-\u003eLimitSettings-\u003eWorker a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#v:startIOWorker",
      "description": {
        "fct-descr": "\u003cp\u003eStart a worker of type \u003ccode\u003e\u003ca\u003eIOWorker\u003c/a\u003e\u003c/code\u003e\n The callback function is called every time a connectino is established\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estartIOWorker \"test\" \"/tmp/test.sock\" $ \\h -\u003e hPutStrLn h \"hello, world\"\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "System.Restricted.Worker",
        "fct-package": "restricted-workers",
        "fct-signature": "String-\u003e LimitSettings-\u003e FilePath-\u003e (Handle -\u003e IO ())-\u003e IO (Worker IOWorker, RestartWorker IO IOWorker)",
        "fct-type": "function",
        "title": "startIOWorker"
      },
      "index": {
        "description": "Start worker of type IOWorker The callback function is called every time connectino is established startIOWorker test tmp test.sock hPutStrLn hello world",
        "hierarchy": "System Restricted Worker",
        "module": "System.Restricted.Worker",
        "name": "startIOWorker",
        "normalized": "String-\u003eLimitSettings-\u003eFilePath-\u003e(Handle-\u003eIO())-\u003eIO(Worker IOWorker,RestartWorker IO IOWorker)",
        "package": "restricted-workers",
        "partial": "IOWorker",
        "signature": "String-\u003eLimitSettings-\u003eFilePath-\u003e(Handle-\u003eIO())-\u003eIO(Worker IOWorker,RestartWorker IO IOWorker)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#v:startWorker",
      "description": {
        "fct-descr": "\u003cp\u003eStart a general type of worker.\n\u003c/p\u003e\u003cp\u003eThe pre-forking action is a monadic action that will be run prior to\n  calling \u003ccode\u003e\u003ca\u003eforkWorker\u003c/a\u003e\u003c/code\u003e. It might be some initialization code, running the\n  DB query, anything you want. The resulting \u003ccode\u003e\u003ca\u003eWData\u003c/a\u003e\u003c/code\u003e will be passed to\n  the callback.\n\u003c/p\u003e\u003cp\u003eThe socket that is passed to the callback is a server socket.\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker",
        "fct-package": "restricted-workers",
        "fct-signature": "String-\u003e FilePath-\u003e Maybe (IO Handle)-\u003e LimitSettings-\u003e WMonad w (WData w)-\u003e (WData w -\u003e Socket -\u003e IO ())-\u003e WMonad w (Worker w, RestartWorker m w)",
        "fct-type": "function",
        "title": "startWorker"
      },
      "index": {
        "description": "Start general type of worker The pre-forking action is monadic action that will be run prior to calling forkWorker It might be some initialization code running the DB query anything you want The resulting WData will be passed to the callback The socket that is passed to the callback is server socket",
        "hierarchy": "System Restricted Worker",
        "module": "System.Restricted.Worker",
        "name": "startWorker",
        "normalized": "String-\u003eFilePath-\u003eMaybe(IO Handle)-\u003eLimitSettings-\u003eWMonad a(WData a)-\u003e(WData a-\u003eSocket-\u003eIO())-\u003eWMonad a(Worker a,RestartWorker b a)",
        "package": "restricted-workers",
        "partial": "Worker",
        "signature": "String-\u003eFilePath-\u003eMaybe(IO Handle)-\u003eLimitSettings-\u003eWMonad w(WData w)-\u003e(WData w-\u003eSocket-\u003eIO())-\u003eWMonad w(Worker w,RestartWorker m w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/restricted-workers/docs/System-Restricted-Worker.html#v:workerAlive",
      "description": {
        "fct-descr": "\u003cp\u003eChecks whether the worker is alive\n\u003c/p\u003e",
        "fct-module": "System.Restricted.Worker",
        "fct-package": "restricted-workers",
        "fct-signature": "Worker a -\u003e IO Bool",
        "fct-source": "src/System-Restricted-Worker-Internal.html#workerAlive",
        "fct-type": "function",
        "title": "workerAlive"
      },
      "index": {
        "description": "Checks whether the worker is alive",
        "hierarchy": "System Restricted Worker",
        "module": "System.Restricted.Worker",
        "name": "workerAlive",
        "normalized": "Worker a-\u003eIO Bool",
        "package": "restricted-workers",
        "partial": "Alive",
        "signature": "Worker a-\u003eIO Bool"
      }
    }
  }
]