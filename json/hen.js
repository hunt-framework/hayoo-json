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
        "word": "hen"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides every special exception that can be raised in Mid and\n High-level interfaces.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Xen.Errors",
          "name": "Errors",
          "package": "hen",
          "source": "src/System-Xen-Errors.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides every special exception that can be raised in Mid and High-level interfaces",
          "hierarchy": "System Xen Errors",
          "module": "System.Xen.Errors",
          "name": "Errors",
          "package": "hen",
          "partial": "Errors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Errors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis error can be raised if any error occured during receiving the list,\n for example: try to to fetch a list in domU.\n\u003c/p\u003e",
          "module": "System.Xen.Errors",
          "name": "DomainGetInfoError",
          "package": "hen",
          "source": "src/System-Xen-Errors.html#DomainGetInfoError",
          "type": "data"
        },
        "index": {
          "description": "This error can be raised if any error occured during receiving the list for example try to to fetch list in domU",
          "hierarchy": "System Xen Errors",
          "module": "System.Xen.Errors",
          "name": "DomainGetInfoError",
          "package": "hen",
          "partial": "Domain Get Info Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Errors.html#t:DomainGetInfoError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis error can be raised if peecked value of\n \u003ccode\u003e\u003ca\u003eDomainShutdownReason\u003c/a\u003e\u003c/code\u003e is not expected.\n\u003c/p\u003e",
          "module": "System.Xen.Errors",
          "name": "InvalidDomainShutdownReason",
          "package": "hen",
          "source": "src/System-Xen-Errors.html#InvalidDomainShutdownReason",
          "type": "data"
        },
        "index": {
          "description": "This error can be raised if peecked value of DomainShutdownReason is not expected",
          "hierarchy": "System Xen Errors",
          "module": "System.Xen.Errors",
          "name": "InvalidDomainShutdownReason",
          "package": "hen",
          "partial": "Invalid Domain Shutdown Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Errors.html#t:InvalidDomainShutdownReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis error can be raised if handle can not be opened, insufficient rights\n for example.\n\u003c/p\u003e",
          "module": "System.Xen.Errors",
          "name": "XcHandleOpenError",
          "package": "hen",
          "source": "src/System-Xen-Errors.html#XcHandleOpenError",
          "type": "data"
        },
        "index": {
          "description": "This error can be raised if handle can not be opened insufficient rights for example",
          "hierarchy": "System Xen Errors",
          "module": "System.Xen.Errors",
          "name": "XcHandleOpenError",
          "package": "hen",
          "partial": "Xc Handle Open Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Errors.html#t:XcHandleOpenError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Errors\",\"System.Xen\"]",
          "name": "DomainGetInfoError",
          "package": "hen",
          "signature": "DomainGetInfoError Errno",
          "source": "src/System-Xen-Errors.html#DomainGetInfoError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Errors.html#v:DomainGetInfoError\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainGetInfoError\"]"
        },
        "index": {
          "hierarchy": "System Xen Errors",
          "module": "System.Xen.Errors",
          "name": "DomainGetInfoError",
          "package": "hen",
          "partial": "Domain Get Info Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Errors.html#v:DomainGetInfoError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeeked value\n\u003c/p\u003e",
          "module": "[\"System.Xen.Errors\",\"System.Xen\"]",
          "name": "InvalidDomainShutdownReason",
          "package": "hen",
          "signature": "InvalidDomainShutdownReason CInt",
          "source": "src/System-Xen-Errors.html#InvalidDomainShutdownReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Errors.html#v:InvalidDomainShutdownReason\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:InvalidDomainShutdownReason\"]"
        },
        "index": {
          "description": "Peeked value",
          "hierarchy": "System Xen Errors",
          "module": "System.Xen.Errors",
          "name": "InvalidDomainShutdownReason",
          "package": "hen",
          "partial": "Invalid Domain Shutdown Reason",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Errors.html#v:InvalidDomainShutdownReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Errors\",\"System.Xen\"]",
          "name": "XcHandleOpenError",
          "package": "hen",
          "signature": "XcHandleOpenError Errno",
          "source": "src/System-Xen-Errors.html#XcHandleOpenError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Errors.html#v:XcHandleOpenError\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:XcHandleOpenError\"]"
        },
        "index": {
          "hierarchy": "System Xen Errors",
          "module": "System.Xen.Errors",
          "name": "XcHandleOpenError",
          "package": "hen",
          "partial": "Xc Handle Open Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Errors.html#v:XcHandleOpenError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003egetErrno\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Xen.Errors",
          "name": "getErrno",
          "package": "hen",
          "signature": "m Errno",
          "source": "src/System-Xen-Errors.html#getErrno",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of getErrno",
          "hierarchy": "System Xen Errors",
          "module": "System.Xen.Errors",
          "name": "getErrno",
          "package": "hen",
          "partial": "Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Errors.html#v:getErrno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Xen.High.Internal",
          "name": "Internal",
          "package": "hen",
          "source": "src/System-Xen-High-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Xen High Internal",
          "module": "System.Xen.High.Internal",
          "name": "Internal",
          "package": "hen",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Xen.High.Internal",
          "name": "MonadXen",
          "package": "hen",
          "source": "src/System-Xen-High-Internal.html#MonadXen",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Xen High Internal",
          "module": "System.Xen.High.Internal",
          "name": "MonadXen",
          "package": "hen",
          "partial": "Monad Xen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High-Internal.html#t:MonadXen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost simple \u003ccode\u003e\u003ca\u003eXenT\u003c/a\u003e\u003c/code\u003e implementation.\n\u003c/p\u003e",
          "module": "System.Xen.High.Internal",
          "name": "Xen",
          "package": "hen",
          "source": "src/System-Xen-High-Internal.html#Xen",
          "type": "type"
        },
        "index": {
          "description": "Most simple XenT implementation",
          "hierarchy": "System Xen High Internal",
          "module": "System.Xen.High.Internal",
          "name": "Xen",
          "package": "hen",
          "partial": "Xen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High-Internal.html#t:Xen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Xen transformer. This transformers keeps connection to the Xen\n hypervisor interface.\n\u003c/p\u003e",
          "module": "System.Xen.High.Internal",
          "name": "XenT",
          "package": "hen",
          "source": "src/System-Xen-High-Internal.html#XenT",
          "type": "newtype"
        },
        "index": {
          "description": "Xen transformer This transformers keeps connection to the Xen hypervisor interface",
          "hierarchy": "System Xen High Internal",
          "module": "System.Xen.High.Internal",
          "name": "XenT",
          "package": "hen",
          "partial": "Xen",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High-Internal.html#t:XenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Xen.High.Internal",
          "name": "XenT",
          "package": "hen",
          "signature": "XenT",
          "source": "src/System-Xen-High-Internal.html#XenT",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Xen High Internal",
          "module": "System.Xen.High.Internal",
          "name": "XenT",
          "package": "hen",
          "partial": "Xen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High-Internal.html#v:XenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen new connection to the hypervisor, run any \u003ccode\u003eXen\u003c/code\u003e action and close\n connection if nessesary. This function can fail with \u003ccode\u003eEither SomeException\u003c/code\u003e with\n \u003ccode\u003e\u003ca\u003eXcHandleOpenError\u003c/a\u003e\u003c/code\u003e and any error of providing \u003ccode\u003eXen\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "[\"System.Xen.High.Internal\",\"System.Xen.High\",\"System.Xen\"]",
          "name": "runXenT",
          "package": "hen",
          "signature": "XenT m a -\u003e m (Either SomeException a)",
          "source": "src/System-Xen-High-Internal.html#runXenT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-High-Internal.html#v:runXenT\",\"http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#v:runXenT\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:runXenT\"]"
        },
        "index": {
          "description": "Open new connection to the hypervisor run any Xen action and close connection if nessesary This function can fail with Either SomeException with XcHandleOpenError and any error of providing Xen action",
          "hierarchy": "System Xen High Internal",
          "module": "System.Xen.High.Internal",
          "name": "runXenT",
          "normalized": "XenT a b-\u003ea(Either SomeException b)",
          "package": "hen",
          "partial": "Xen",
          "signature": "XenT m a-\u003em(Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High-Internal.html#v:runXenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Xen.High.Internal",
          "name": "unXenT",
          "package": "hen",
          "signature": "ReaderT XcHandle m a",
          "source": "src/System-Xen-High-Internal.html#XenT",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Xen High Internal",
          "module": "System.Xen.High.Internal",
          "name": "unXenT",
          "package": "hen",
          "partial": "Xen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High-Internal.html#v:unXenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for creating high-level interface functions from mid-level.\n Generally high-level function is just \u003ccode\u003ehighLevel = withXenHandle midLevel\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Xen.High.Internal",
          "name": "withXenHandle",
          "package": "hen",
          "signature": "(XcHandle -\u003e m a) -\u003e m a",
          "source": "src/System-Xen-High-Internal.html#withXenHandle",
          "type": "method"
        },
        "index": {
          "description": "Helper function for creating high-level interface functions from mid-level Generally high-level function is just highLevel withXenHandle midLevel",
          "hierarchy": "System Xen High Internal",
          "module": "System.Xen.High.Internal",
          "name": "withXenHandle",
          "normalized": "(XcHandle-\u003ea b)-\u003ea b",
          "package": "hen",
          "partial": "Xen Handle",
          "signature": "(XcHandle-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High-Internal.html#v:withXenHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigh-level interface to \u003ccode\u003eXenCtrl\u003c/code\u003e. Contains \u003ccode\u003e\u003ca\u003eXen\u003c/a\u003e\u003c/code\u003e monad and provides a safe way\n to run any \u003ccode\u003e\u003ca\u003eXen\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Xen.High",
          "name": "High",
          "package": "hen",
          "source": "src/System-Xen-High.html",
          "type": "module"
        },
        "index": {
          "description": "High-level interface to XenCtrl Contains Xen monad and provides safe way to run any Xen computation",
          "hierarchy": "System Xen High",
          "module": "System.Xen.High",
          "name": "High",
          "package": "hen",
          "partial": "High",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost simple \u003ccode\u003e\u003ca\u003eXenT\u003c/a\u003e\u003c/code\u003e implementation.\n\u003c/p\u003e",
          "module": "System.Xen.High",
          "name": "Xen",
          "package": "hen",
          "source": "src/System-Xen-High-Internal.html#Xen",
          "type": "type"
        },
        "index": {
          "description": "Most simple XenT implementation",
          "hierarchy": "System Xen High",
          "module": "System.Xen.High",
          "name": "Xen",
          "package": "hen",
          "partial": "Xen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#t:Xen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Xen transformer. This transformers keeps connection to the Xen\n hypervisor interface.\n\u003c/p\u003e",
          "module": "System.Xen.High",
          "name": "XenT",
          "package": "hen",
          "source": "src/System-Xen-High-Internal.html#XenT",
          "type": "data"
        },
        "index": {
          "description": "Xen transformer This transformers keeps connection to the Xen hypervisor interface",
          "hierarchy": "System Xen High",
          "module": "System.Xen.High",
          "name": "XenT",
          "package": "hen",
          "partial": "Xen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#t:XenT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy a domain.  Destroying a domain removes the domain completely from memory.\n This function should be called after \u003ccode\u003e\u003ca\u003edomainShutdown\u003c/a\u003e\u003c/code\u003e to free up the domain resources.\n\u003c/p\u003e",
          "module": "[\"System.Xen.High\",\"System.Xen\"]",
          "name": "domainDestroy",
          "package": "hen",
          "signature": "DomId -\u003e m Bool",
          "source": "src/System-Xen-High.html#domainDestroy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#v:domainDestroy\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainDestroy\"]"
        },
        "index": {
          "description": "Destroy domain Destroying domain removes the domain completely from memory This function should be called after domainShutdown to free up the domain resources",
          "hierarchy": "System Xen High",
          "module": "System.Xen.High",
          "name": "domainDestroy",
          "normalized": "DomId-\u003ea Bool",
          "package": "hen",
          "partial": "Destroy",
          "signature": "DomId-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#v:domainDestroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a lift of domains, this function can fail with\n \u003ccode\u003e\u003ca\u003eInvalidDomainShutdownReason\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eDomainGetInfoError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Xen.High\",\"System.Xen\"]",
          "name": "domainGetInfo",
          "package": "hen",
          "signature": "m [DomainInfo]",
          "source": "src/System-Xen-High.html#domainGetInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#v:domainGetInfo\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainGetInfo\"]"
        },
        "index": {
          "description": "Returns lift of domains this function can fail with InvalidDomainShutdownReason and DomainGetInfoError",
          "hierarchy": "System Xen High",
          "module": "System.Xen.High",
          "name": "domainGetInfo",
          "normalized": "a[DomainInfo]",
          "package": "hen",
          "partial": "Get Info",
          "signature": "m[DomainInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#v:domainGetInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePause domain. A paused domain still exists in memory\n however it does not receive any timeslices from the hypervisor.\n\u003c/p\u003e",
          "module": "[\"System.Xen.High\",\"System.Xen\"]",
          "name": "domainPause",
          "package": "hen",
          "signature": "DomId -\u003e m Bool",
          "source": "src/System-Xen-High.html#domainPause",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#v:domainPause\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainPause\"]"
        },
        "index": {
          "description": "Pause domain paused domain still exists in memory however it does not receive any timeslices from the hypervisor",
          "hierarchy": "System Xen High",
          "module": "System.Xen.High",
          "name": "domainPause",
          "normalized": "DomId-\u003ea Bool",
          "package": "hen",
          "partial": "Pause",
          "signature": "DomId-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#v:domainPause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShutdown domain. This is intended for use in fully-virtualized domains where\n this operation is analogous to the sched_op operations in a paravirtualized domain.\n\u003c/p\u003e",
          "module": "[\"System.Xen.High\",\"System.Xen\"]",
          "name": "domainShutdown",
          "package": "hen",
          "signature": "DomId -\u003e DomainShutdownReason -\u003e m Bool",
          "source": "src/System-Xen-High.html#domainShutdown",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#v:domainShutdown\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainShutdown\"]"
        },
        "index": {
          "description": "Shutdown domain This is intended for use in fully-virtualized domains where this operation is analogous to the sched op operations in paravirtualized domain",
          "hierarchy": "System Xen High",
          "module": "System.Xen.High",
          "name": "domainShutdown",
          "normalized": "DomId-\u003eDomainShutdownReason-\u003ea Bool",
          "package": "hen",
          "partial": "Shutdown",
          "signature": "DomId-\u003eDomainShutdownReason-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#v:domainShutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpause a domain. The domain should have been previously paused.\n\u003c/p\u003e",
          "module": "[\"System.Xen.High\",\"System.Xen\"]",
          "name": "domainUnpause",
          "package": "hen",
          "signature": "DomId -\u003e m Bool",
          "source": "src/System-Xen-High.html#domainUnpause",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#v:domainUnpause\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainUnpause\"]"
        },
        "index": {
          "description": "Unpause domain The domain should have been previously paused",
          "hierarchy": "System Xen High",
          "module": "System.Xen.High",
          "name": "domainUnpause",
          "normalized": "DomId-\u003ea Bool",
          "package": "hen",
          "partial": "Unpause",
          "signature": "DomId-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-High.html#v:domainUnpause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level interface to \u003ccode\u003eXenCtrl\u003c/code\u003e. Each function defined in this module is\n a ffi call to corresponding c function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Xen.Low",
          "name": "Low",
          "package": "hen",
          "source": "src/System-Xen-Low.html",
          "type": "module"
        },
        "index": {
          "description": "Low-level interface to XenCtrl Each function defined in this module is ffi call to corresponding function",
          "hierarchy": "System Xen Low",
          "module": "System.Xen.Low",
          "name": "Low",
          "package": "hen",
          "partial": "Low",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Low.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function will destroy a domain. Destroying a domain removes the domain\n completely from memory. This function should be called after sending the\n domain a SHUTDOWN control message to free up the domain resources.\n\u003c/p\u003e",
          "module": "System.Xen.Low",
          "name": "xc_domain_destroy",
          "package": "hen",
          "signature": "XcHandle-\u003e DomId-\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "description": "This function will destroy domain Destroying domain removes the domain completely from memory This function should be called after sending the domain SHUTDOWN control message to free up the domain resources",
          "hierarchy": "System Xen Low",
          "module": "System.Xen.Low",
          "name": "xc_domain_destroy",
          "normalized": "XcHandle-\u003eDomId-\u003eIO CInt",
          "package": "hen",
          "signature": "XcHandle-\u003eDomId-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Low.html#v:xc_domain_destroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function will return information about one or more domains. It is\n designed to iterate over the list of domains. If a single domain is\n requested, this function will return the next domain in the list - if\n one exists. It is, therefore, important in this case to make sure the\n domain requested was the one returned.\n\u003c/p\u003e",
          "module": "System.Xen.Low",
          "name": "xc_domain_getinfo",
          "package": "hen",
          "signature": "XcHandle-\u003e DomId-\u003e CUInt-\u003e Ptr DomainInfo-\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "description": "This function will return information about one or more domains It is designed to iterate over the list of domains If single domain is requested this function will return the next domain in the list if one exists It is therefore important in this case to make sure the domain requested was the one returned",
          "hierarchy": "System Xen Low",
          "module": "System.Xen.Low",
          "name": "xc_domain_getinfo",
          "normalized": "XcHandle-\u003eDomId-\u003eCUInt-\u003ePtr DomainInfo-\u003eIO CInt",
          "package": "hen",
          "signature": "XcHandle-\u003eDomId-\u003eCUInt-\u003ePtr DomainInfo-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Low.html#v:xc_domain_getinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function pauses a domain. A paused domain still exists in memory\n however it does not receive any timeslices from the hypervisor.\n\u003c/p\u003e",
          "module": "System.Xen.Low",
          "name": "xc_domain_pause",
          "package": "hen",
          "signature": "XcHandle-\u003e DomId-\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "description": "This function pauses domain paused domain still exists in memory however it does not receive any timeslices from the hypervisor",
          "hierarchy": "System Xen Low",
          "module": "System.Xen.Low",
          "name": "xc_domain_pause",
          "normalized": "XcHandle-\u003eDomId-\u003eIO CInt",
          "package": "hen",
          "signature": "XcHandle-\u003eDomId-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Low.html#v:xc_domain_pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function will shutdown a domain. This is intended for use in\n fully-virtualized domains where this operation is analogous to the\n sched_op operations in a paravirtualized domain.\n\u003c/p\u003e",
          "module": "System.Xen.Low",
          "name": "xc_domain_shutdown",
          "package": "hen",
          "signature": "XcHandle-\u003e DomId-\u003e CInt-\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "description": "This function will shutdown domain This is intended for use in fully-virtualized domains where this operation is analogous to the sched op operations in paravirtualized domain",
          "hierarchy": "System Xen Low",
          "module": "System.Xen.Low",
          "name": "xc_domain_shutdown",
          "normalized": "XcHandle-\u003eDomId-\u003eCInt-\u003eIO CInt",
          "package": "hen",
          "signature": "XcHandle-\u003eDomId-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Low.html#v:xc_domain_shutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function unpauses a domain. The domain should have been previously paused.\n\u003c/p\u003e",
          "module": "System.Xen.Low",
          "name": "xc_domain_unpause",
          "package": "hen",
          "signature": "XcHandle-\u003e DomId-\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "description": "This function unpauses domain The domain should have been previously paused",
          "hierarchy": "System Xen Low",
          "module": "System.Xen.Low",
          "name": "xc_domain_unpause",
          "normalized": "XcHandle-\u003eDomId-\u003eIO CInt",
          "package": "hen",
          "signature": "XcHandle-\u003eDomId-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Low.html#v:xc_domain_unpause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function closes an open hypervisor interface. This function can fail if the\n handle does not represent an open interface or if there were problems closing the\n interface. In the latter case the interface is still closed.\n\u003c/p\u003e",
          "module": "System.Xen.Low",
          "name": "xc_interface_close",
          "package": "hen",
          "signature": "XcHandle -\u003e IO CInt",
          "source": "src/System-Xen-Low.html#xc_interface_close",
          "type": "function"
        },
        "index": {
          "description": "This function closes an open hypervisor interface This function can fail if the handle does not represent an open interface or if there were problems closing the interface In the latter case the interface is still closed",
          "hierarchy": "System Xen Low",
          "module": "System.Xen.Low",
          "name": "xc_interface_close",
          "normalized": "XcHandle-\u003eIO CInt",
          "package": "hen",
          "signature": "XcHandle-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Low.html#v:xc_interface_close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function opens the handle to the hypervisor interface. Each successful call\n  to this function should have a corresponding call to \u003ccode\u003e\u003ca\u003exc_interface_close\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Xen.Low",
          "name": "xc_interface_open",
          "package": "hen",
          "signature": "CInt-\u003e CInt-\u003e CInt-\u003e IO XcHandle",
          "type": "function"
        },
        "index": {
          "description": "This function opens the handle to the hypervisor interface Each successful call to this function should have corresponding call to xc interface close",
          "hierarchy": "System Xen Low",
          "module": "System.Xen.Low",
          "name": "xc_interface_open",
          "normalized": "CInt-\u003eCInt-\u003eCInt-\u003eIO XcHandle",
          "package": "hen",
          "signature": "CInt-\u003eCInt-\u003eCInt-\u003eIO XcHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Low.html#v:xc_interface_open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMid-level interface to \u003ccode\u003eXenCtrl\u003c/code\u003e. Functions that provided by this module are\n version-independent from \u003ccode\u003eXen\u003c/code\u003e and raise real exceptions instead of confusing\n error codes and \u003ccode\u003eerrno\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Xen.Mid",
          "name": "Mid",
          "package": "hen",
          "source": "src/System-Xen-Mid.html",
          "type": "module"
        },
        "index": {
          "description": "Mid-level interface to XenCtrl Functions that provided by this module are version-independent from Xen and raise real exceptions instead of confusing error codes and errno",
          "hierarchy": "System Xen Mid",
          "module": "System.Xen.Mid",
          "name": "Mid",
          "package": "hen",
          "partial": "Mid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Mid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy a domain.  Destroying a domain removes the domain completely from memory.\n This function should be called after \u003ccode\u003e\u003ca\u003edomainShutdown\u003c/a\u003e\u003c/code\u003e to free up the domain resources.\n\u003c/p\u003e",
          "module": "System.Xen.Mid",
          "name": "domainDestroy",
          "package": "hen",
          "signature": "DomId -\u003e XcHandle -\u003e m Bool",
          "source": "src/System-Xen-Mid.html#domainDestroy",
          "type": "function"
        },
        "index": {
          "description": "Destroy domain Destroying domain removes the domain completely from memory This function should be called after domainShutdown to free up the domain resources",
          "hierarchy": "System Xen Mid",
          "module": "System.Xen.Mid",
          "name": "domainDestroy",
          "normalized": "DomId-\u003eXcHandle-\u003ea Bool",
          "package": "hen",
          "partial": "Destroy",
          "signature": "DomId-\u003eXcHandle-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Mid.html#v:domainDestroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of currently runing domains, 1024 maximum, can fail with\n \u003ccode\u003e\u003ca\u003eInvalidDomainShutdownReason\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eDomainGetInfoError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Xen.Mid",
          "name": "domainGetInfo",
          "package": "hen",
          "signature": "XcHandle -\u003e m (t DomainInfo)",
          "source": "src/System-Xen-Mid.html#domainGetInfo",
          "type": "function"
        },
        "index": {
          "description": "Returns list of currently runing domains maximum can fail with InvalidDomainShutdownReason and DomainGetInfoError",
          "hierarchy": "System Xen Mid",
          "module": "System.Xen.Mid",
          "name": "domainGetInfo",
          "normalized": "XcHandle-\u003ea(b DomainInfo)",
          "package": "hen",
          "partial": "Get Info",
          "signature": "XcHandle-\u003em(t DomainInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Mid.html#v:domainGetInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePause domain. A paused domain still exists in memory\n however it does not receive any timeslices from the hypervisor.\n\u003c/p\u003e",
          "module": "System.Xen.Mid",
          "name": "domainPause",
          "package": "hen",
          "signature": "DomId -\u003e XcHandle -\u003e m Bool",
          "source": "src/System-Xen-Mid.html#domainPause",
          "type": "function"
        },
        "index": {
          "description": "Pause domain paused domain still exists in memory however it does not receive any timeslices from the hypervisor",
          "hierarchy": "System Xen Mid",
          "module": "System.Xen.Mid",
          "name": "domainPause",
          "normalized": "DomId-\u003eXcHandle-\u003ea Bool",
          "package": "hen",
          "partial": "Pause",
          "signature": "DomId-\u003eXcHandle-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Mid.html#v:domainPause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShutdown domain. This is intended for use in fully-virtualized domains where\n this operation is analogous to the sched_op operations in a paravirtualized domain.\n\u003c/p\u003e",
          "module": "System.Xen.Mid",
          "name": "domainShutdown",
          "package": "hen",
          "signature": "DomId -\u003e DomainShutdownReason -\u003e XcHandle -\u003e m Bool",
          "source": "src/System-Xen-Mid.html#domainShutdown",
          "type": "function"
        },
        "index": {
          "description": "Shutdown domain This is intended for use in fully-virtualized domains where this operation is analogous to the sched op operations in paravirtualized domain",
          "hierarchy": "System Xen Mid",
          "module": "System.Xen.Mid",
          "name": "domainShutdown",
          "normalized": "DomId-\u003eDomainShutdownReason-\u003eXcHandle-\u003ea Bool",
          "package": "hen",
          "partial": "Shutdown",
          "signature": "DomId-\u003eDomainShutdownReason-\u003eXcHandle-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Mid.html#v:domainShutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpause a domain. The domain should have been previously paused.\n\u003c/p\u003e",
          "module": "System.Xen.Mid",
          "name": "domainUnpause",
          "package": "hen",
          "signature": "DomId -\u003e XcHandle -\u003e m Bool",
          "source": "src/System-Xen-Mid.html#domainUnpause",
          "type": "function"
        },
        "index": {
          "description": "Unpause domain The domain should have been previously paused",
          "hierarchy": "System Xen Mid",
          "module": "System.Xen.Mid",
          "name": "domainUnpause",
          "normalized": "DomId-\u003eXcHandle-\u003ea Bool",
          "package": "hen",
          "partial": "Unpause",
          "signature": "DomId-\u003eXcHandle-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Mid.html#v:domainUnpause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose an open hypervisor interface, ignores all possible errors but all the\n same can fail with segfault or sutin.\n\u003c/p\u003e",
          "module": "System.Xen.Mid",
          "name": "interfaceClose",
          "package": "hen",
          "signature": "XcHandle -\u003e m ()",
          "source": "src/System-Xen-Mid.html#interfaceClose",
          "type": "function"
        },
        "index": {
          "description": "Close an open hypervisor interface ignores all possible errors but all the same can fail with segfault or sutin",
          "hierarchy": "System Xen Mid",
          "module": "System.Xen.Mid",
          "name": "interfaceClose",
          "normalized": "XcHandle-\u003ea()",
          "package": "hen",
          "partial": "Close",
          "signature": "XcHandle-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Mid.html#v:interfaceClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen the connection to the hypervisor interface, can fail with\n \u003ccode\u003e\u003ca\u003eXcHandleOpenError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Xen.Mid",
          "name": "interfaceOpen",
          "package": "hen",
          "signature": "m XcHandle",
          "source": "src/System-Xen-Mid.html#interfaceOpen",
          "type": "function"
        },
        "index": {
          "description": "Open the connection to the hypervisor interface can fail with XcHandleOpenError",
          "hierarchy": "System Xen Mid",
          "module": "System.Xen.Mid",
          "name": "interfaceOpen",
          "package": "hen",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Mid.html#v:interfaceOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for working with \u003ccode\u003eXenCtrl\u003c/code\u003e data and accoring \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Xen.Types",
          "name": "Types",
          "package": "hen",
          "source": "src/System-Xen-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types for working with XenCtrl data and accoring Storable instances",
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "Types",
          "package": "hen",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDomain id, wrapper around \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Xen.Types",
          "name": "DomId",
          "package": "hen",
          "source": "src/System-Xen-Types.html#DomId",
          "type": "newtype"
        },
        "index": {
          "description": "Domain id wrapper around Word32",
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomId",
          "package": "hen",
          "partial": "Dom Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#t:DomId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDomain flags. It's translated from xc_dominfo structure, so it's possible to\n be mutual exclusion flags in one domain, e.g. \u003ccode\u003e\u003ca\u003eDomainFlagShutdown\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eDomainFlagRunning\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Xen.Types",
          "name": "DomainFlag",
          "package": "hen",
          "source": "src/System-Xen-Types.html#DomainFlag",
          "type": "data"
        },
        "index": {
          "description": "Domain flags It translated from xc dominfo structure so it possible to be mutual exclusion flags in one domain e.g DomainFlagShutdown and DomainFlagRunning",
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainFlag",
          "package": "hen",
          "partial": "Domain Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#t:DomainFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a single domain.\n\u003c/p\u003e",
          "module": "System.Xen.Types",
          "name": "DomainInfo",
          "package": "hen",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "data"
        },
        "index": {
          "description": "Information about single domain",
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainInfo",
          "package": "hen",
          "partial": "Domain Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#t:DomainInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDomain shutdown reason it's only meaningful if domain has \u003ccode\u003e\u003ca\u003eDomainFlagShutdown\u003c/a\u003e\u003c/code\u003e\n flag.\n\u003c/p\u003e",
          "module": "System.Xen.Types",
          "name": "DomainShutdownReason",
          "package": "hen",
          "source": "src/System-Xen-Types.html#DomainShutdownReason",
          "type": "data"
        },
        "index": {
          "description": "Domain shutdown reason it only meaningful if domain has DomainFlagShutdown flag",
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainShutdownReason",
          "package": "hen",
          "partial": "Domain Shutdown Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#t:DomainShutdownReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry point of the hypervisor interface connection, it's a file descriptor\n in xen 3 and pointer to corresponging structure in xen 4.\n\u003c/p\u003e",
          "module": "System.Xen.Types",
          "name": "XcHandle",
          "package": "hen",
          "source": "src/System-Xen-Types.html#XcHandle",
          "type": "newtype"
        },
        "index": {
          "description": "Entry point of the hypervisor interface connection it file descriptor in xen and pointer to corresponging structure in xen",
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "XcHandle",
          "package": "hen",
          "partial": "Xc Handle",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#t:XcHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomId",
          "package": "hen",
          "signature": "DomId",
          "source": "src/System-Xen-Types.html#DomId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomId\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomId\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomId",
          "package": "hen",
          "partial": "Dom Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainFlagBlocked",
          "package": "hen",
          "signature": "DomainFlagBlocked",
          "source": "src/System-Xen-Types.html#DomainFlag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagBlocked\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainFlagBlocked\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainFlagBlocked",
          "package": "hen",
          "partial": "Domain Flag Blocked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagBlocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainFlagCrashed",
          "package": "hen",
          "signature": "DomainFlagCrashed",
          "source": "src/System-Xen-Types.html#DomainFlag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagCrashed\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainFlagCrashed\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainFlagCrashed",
          "package": "hen",
          "partial": "Domain Flag Crashed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagCrashed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainFlagDebugged",
          "package": "hen",
          "signature": "DomainFlagDebugged",
          "source": "src/System-Xen-Types.html#DomainFlag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagDebugged\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainFlagDebugged\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainFlagDebugged",
          "package": "hen",
          "partial": "Domain Flag Debugged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagDebugged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainFlagDying",
          "package": "hen",
          "signature": "DomainFlagDying",
          "source": "src/System-Xen-Types.html#DomainFlag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagDying\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainFlagDying\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainFlagDying",
          "package": "hen",
          "partial": "Domain Flag Dying",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagDying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainFlagHVM",
          "package": "hen",
          "signature": "DomainFlagHVM",
          "source": "src/System-Xen-Types.html#DomainFlag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagHVM\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainFlagHVM\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainFlagHVM",
          "package": "hen",
          "partial": "Domain Flag HVM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagHVM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainFlagPaused",
          "package": "hen",
          "signature": "DomainFlagPaused",
          "source": "src/System-Xen-Types.html#DomainFlag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagPaused\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainFlagPaused\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainFlagPaused",
          "package": "hen",
          "partial": "Domain Flag Paused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagPaused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainFlagRunning",
          "package": "hen",
          "signature": "DomainFlagRunning",
          "source": "src/System-Xen-Types.html#DomainFlag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagRunning\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainFlagRunning\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainFlagRunning",
          "package": "hen",
          "partial": "Domain Flag Running",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainFlagShutdown",
          "package": "hen",
          "signature": "DomainFlagShutdown",
          "source": "src/System-Xen-Types.html#DomainFlag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagShutdown\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainFlagShutdown\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainFlagShutdown",
          "package": "hen",
          "partial": "Domain Flag Shutdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainFlagShutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainInfo",
          "package": "hen",
          "signature": "DomainInfo",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainInfo\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainInfo\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainInfo",
          "package": "hen",
          "partial": "Domain Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainShutdownReasonCrash",
          "package": "hen",
          "signature": "DomainShutdownReasonCrash",
          "source": "src/System-Xen-Types.html#DomainShutdownReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainShutdownReasonCrash\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainShutdownReasonCrash\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainShutdownReasonCrash",
          "package": "hen",
          "partial": "Domain Shutdown Reason Crash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainShutdownReasonCrash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainShutdownReasonPoweroff",
          "package": "hen",
          "signature": "DomainShutdownReasonPoweroff",
          "source": "src/System-Xen-Types.html#DomainShutdownReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainShutdownReasonPoweroff\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainShutdownReasonPoweroff\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainShutdownReasonPoweroff",
          "package": "hen",
          "partial": "Domain Shutdown Reason Poweroff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainShutdownReasonPoweroff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainShutdownReasonReboot",
          "package": "hen",
          "signature": "DomainShutdownReasonReboot",
          "source": "src/System-Xen-Types.html#DomainShutdownReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainShutdownReasonReboot\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainShutdownReasonReboot\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainShutdownReasonReboot",
          "package": "hen",
          "partial": "Domain Shutdown Reason Reboot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainShutdownReasonReboot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainShutdownReasonSuspend",
          "package": "hen",
          "signature": "DomainShutdownReasonSuspend",
          "source": "src/System-Xen-Types.html#DomainShutdownReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainShutdownReasonSuspend\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainShutdownReasonSuspend\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainShutdownReasonSuspend",
          "package": "hen",
          "partial": "Domain Shutdown Reason Suspend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainShutdownReasonSuspend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "DomainShutdownReasonWatchdog",
          "package": "hen",
          "signature": "DomainShutdownReasonWatchdog",
          "source": "src/System-Xen-Types.html#DomainShutdownReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainShutdownReasonWatchdog\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:DomainShutdownReasonWatchdog\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "DomainShutdownReasonWatchdog",
          "package": "hen",
          "partial": "Domain Shutdown Reason Watchdog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:DomainShutdownReasonWatchdog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Xen.Types",
          "name": "XcHandle",
          "package": "hen",
          "signature": "XcHandle CIntPtr",
          "source": "src/System-Xen-Types.html#XcHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "XcHandle",
          "package": "hen",
          "partial": "Xc Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:XcHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoCpuPool",
          "package": "hen",
          "signature": "Word32",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoCpuPool\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoCpuPool\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoCpuPool",
          "package": "hen",
          "partial": "Info Cpu Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoCpuPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoCpuTime",
          "package": "hen",
          "signature": "Word64",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoCpuTime\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoCpuTime\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoCpuTime",
          "package": "hen",
          "partial": "Info Cpu Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoCpuTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoDomHandle",
          "package": "hen",
          "signature": "UUID",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoDomHandle\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoDomHandle\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoDomHandle",
          "package": "hen",
          "partial": "Info Dom Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoDomHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoFlags",
          "package": "hen",
          "signature": "(BitSet DomainFlag)",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoFlags\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoFlags\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoFlags",
          "package": "hen",
          "partial": "Info Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoId",
          "package": "hen",
          "signature": "DomId",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoId\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoId\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoId",
          "package": "hen",
          "partial": "Info Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoMaxMemKb",
          "package": "hen",
          "signature": "Word32",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoMaxMemKb\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoMaxMemKb\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoMaxMemKb",
          "package": "hen",
          "partial": "Info Max Mem Kb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoMaxMemKb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoMaxVcpuId",
          "package": "hen",
          "signature": "Word32",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoMaxVcpuId\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoMaxVcpuId\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoMaxVcpuId",
          "package": "hen",
          "partial": "Info Max Vcpu Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoMaxVcpuId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoNubmerOfOnlineVcpus",
          "package": "hen",
          "signature": "Word32",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoNubmerOfOnlineVcpus\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoNubmerOfOnlineVcpus\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoNubmerOfOnlineVcpus",
          "package": "hen",
          "partial": "Info Nubmer Of Online Vcpus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoNubmerOfOnlineVcpus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoNumberOfPages",
          "package": "hen",
          "signature": "Word32",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoNumberOfPages\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoNumberOfPages\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoNumberOfPages",
          "package": "hen",
          "partial": "Info Number Of Pages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoNumberOfPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoNumberOfSharedPages",
          "package": "hen",
          "signature": "Word32",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoNumberOfSharedPages\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoNumberOfSharedPages\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoNumberOfSharedPages",
          "package": "hen",
          "partial": "Info Number Of Shared Pages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoNumberOfSharedPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoSharedInfoFrame",
          "package": "hen",
          "signature": "Word32",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoSharedInfoFrame\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoSharedInfoFrame\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoSharedInfoFrame",
          "package": "hen",
          "partial": "Info Shared Info Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoSharedInfoFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoShutdownReason",
          "package": "hen",
          "signature": "(Maybe DomainShutdownReason)",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoShutdownReason\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoShutdownReason\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoShutdownReason",
          "package": "hen",
          "partial": "Info Shutdown Reason",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoShutdownReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "domainInfoSsidRef",
          "package": "hen",
          "signature": "Word32",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoSsidRef\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:domainInfoSsidRef\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "domainInfoSsidRef",
          "package": "hen",
          "partial": "Info Ssid Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:domainInfoSsidRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Xen.Types\",\"System.Xen\"]",
          "name": "unDomId",
          "package": "hen",
          "signature": "Word32",
          "source": "src/System-Xen-Types.html#DomId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:unDomId\",\"http://hackage.haskell.org/package/hen/docs/System-Xen.html#v:unDomId\"]"
        },
        "index": {
          "hierarchy": "System Xen Types",
          "module": "System.Xen.Types",
          "name": "unDomId",
          "package": "hen",
          "partial": "Dom Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen-Types.html#v:unDomId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell bidings to Xen hypervisor interface. There are three interface levels\n in this library:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Low-level interface. \u003ca\u003eSystem.Xen.Low\u003c/a\u003e. It just provides bindings to c-calls.\n\u003c/li\u003e\u003cli\u003e Mid-level interface. \u003ca\u003eSystem.Xen.Mid\u003c/a\u003e. Contains helper functions and allow to\n     use your favorite \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e High-level interface. \u003ca\u003eSystem.Xen.High\u003c/a\u003e. Contains \u003ccode\u003e\u003ca\u003eXen\u003c/a\u003e\u003c/code\u003e monad and provides a\n     safe way to run any \u003ccode\u003e\u003ca\u003eXen\u003c/a\u003e\u003c/code\u003e computation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eLast one is also re-exported by current module and intend for common usage.\n Usage example:\n\u003c/p\u003e\u003cpre\u003e module Main (main) where\n\n import System.Xen (runXenT, domainGetInfo)\n\n main :: IO ()\n main = print =\u003c\u003c runXenT domainGetInfo\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Xen",
          "name": "Xen",
          "package": "hen",
          "source": "src/System-Xen.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell bidings to Xen hypervisor interface There are three interface levels in this library Low-level interface System.Xen.Low It just provides bindings to c-calls Mid-level interface System.Xen.Mid Contains helper functions and allow to use your favorite Monad High-level interface System.Xen.High Contains Xen monad and provides safe way to run any Xen computation Last one is also re-exported by current module and intend for common usage Usage example module Main main where import System.Xen runXenT domainGetInfo main IO main print runXenT domainGetInfo",
          "hierarchy": "System Xen",
          "module": "System.Xen",
          "name": "Xen",
          "package": "hen",
          "partial": "Xen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDomain id, wrapper around \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Xen",
          "name": "DomId",
          "package": "hen",
          "source": "src/System-Xen-Types.html#DomId",
          "type": "newtype"
        },
        "index": {
          "description": "Domain id wrapper around Word32",
          "hierarchy": "System Xen",
          "module": "System.Xen",
          "name": "DomId",
          "package": "hen",
          "partial": "Dom Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen.html#t:DomId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDomain flags. It's translated from xc_dominfo structure, so it's possible to\n be mutual exclusion flags in one domain, e.g. \u003ccode\u003e\u003ca\u003eDomainFlagShutdown\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eDomainFlagRunning\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Xen",
          "name": "DomainFlag",
          "package": "hen",
          "source": "src/System-Xen-Types.html#DomainFlag",
          "type": "data"
        },
        "index": {
          "description": "Domain flags It translated from xc dominfo structure so it possible to be mutual exclusion flags in one domain e.g DomainFlagShutdown and DomainFlagRunning",
          "hierarchy": "System Xen",
          "module": "System.Xen",
          "name": "DomainFlag",
          "package": "hen",
          "partial": "Domain Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen.html#t:DomainFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis error can be raised if any error occured during receiving the list,\n for example: try to to fetch a list in domU.\n\u003c/p\u003e",
          "module": "System.Xen",
          "name": "DomainGetInfoError",
          "package": "hen",
          "source": "src/System-Xen-Errors.html#DomainGetInfoError",
          "type": "data"
        },
        "index": {
          "description": "This error can be raised if any error occured during receiving the list for example try to to fetch list in domU",
          "hierarchy": "System Xen",
          "module": "System.Xen",
          "name": "DomainGetInfoError",
          "package": "hen",
          "partial": "Domain Get Info Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen.html#t:DomainGetInfoError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a single domain.\n\u003c/p\u003e",
          "module": "System.Xen",
          "name": "DomainInfo",
          "package": "hen",
          "source": "src/System-Xen-Types.html#DomainInfo",
          "type": "data"
        },
        "index": {
          "description": "Information about single domain",
          "hierarchy": "System Xen",
          "module": "System.Xen",
          "name": "DomainInfo",
          "package": "hen",
          "partial": "Domain Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen.html#t:DomainInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDomain shutdown reason it's only meaningful if domain has \u003ccode\u003e\u003ca\u003eDomainFlagShutdown\u003c/a\u003e\u003c/code\u003e\n flag.\n\u003c/p\u003e",
          "module": "System.Xen",
          "name": "DomainShutdownReason",
          "package": "hen",
          "source": "src/System-Xen-Types.html#DomainShutdownReason",
          "type": "data"
        },
        "index": {
          "description": "Domain shutdown reason it only meaningful if domain has DomainFlagShutdown flag",
          "hierarchy": "System Xen",
          "module": "System.Xen",
          "name": "DomainShutdownReason",
          "package": "hen",
          "partial": "Domain Shutdown Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen.html#t:DomainShutdownReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis error can be raised if peecked value of\n \u003ccode\u003e\u003ca\u003eDomainShutdownReason\u003c/a\u003e\u003c/code\u003e is not expected.\n\u003c/p\u003e",
          "module": "System.Xen",
          "name": "InvalidDomainShutdownReason",
          "package": "hen",
          "source": "src/System-Xen-Errors.html#InvalidDomainShutdownReason",
          "type": "data"
        },
        "index": {
          "description": "This error can be raised if peecked value of DomainShutdownReason is not expected",
          "hierarchy": "System Xen",
          "module": "System.Xen",
          "name": "InvalidDomainShutdownReason",
          "package": "hen",
          "partial": "Invalid Domain Shutdown Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen.html#t:InvalidDomainShutdownReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis error can be raised if handle can not be opened, insufficient rights\n for example.\n\u003c/p\u003e",
          "module": "System.Xen",
          "name": "XcHandleOpenError",
          "package": "hen",
          "source": "src/System-Xen-Errors.html#XcHandleOpenError",
          "type": "data"
        },
        "index": {
          "description": "This error can be raised if handle can not be opened insufficient rights for example",
          "hierarchy": "System Xen",
          "module": "System.Xen",
          "name": "XcHandleOpenError",
          "package": "hen",
          "partial": "Xc Handle Open Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen.html#t:XcHandleOpenError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost simple \u003ccode\u003e\u003ca\u003eXenT\u003c/a\u003e\u003c/code\u003e implementation.\n\u003c/p\u003e",
          "module": "System.Xen",
          "name": "Xen",
          "package": "hen",
          "source": "src/System-Xen-High-Internal.html#Xen",
          "type": "type"
        },
        "index": {
          "description": "Most simple XenT implementation",
          "hierarchy": "System Xen",
          "module": "System.Xen",
          "name": "Xen",
          "package": "hen",
          "partial": "Xen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen.html#t:Xen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Xen transformer. This transformers keeps connection to the Xen\n hypervisor interface.\n\u003c/p\u003e",
          "module": "System.Xen",
          "name": "XenT",
          "package": "hen",
          "source": "src/System-Xen-High-Internal.html#XenT",
          "type": "data"
        },
        "index": {
          "description": "Xen transformer This transformers keeps connection to the Xen hypervisor interface",
          "hierarchy": "System Xen",
          "module": "System.Xen",
          "name": "XenT",
          "package": "hen",
          "partial": "Xen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hen/docs/System-Xen.html#t:XenT"
      }
    }
  ]
]