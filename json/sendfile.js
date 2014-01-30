[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Handle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandle-based versions of some of the functions exported by\n Network.Socket.SendFile. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Socket.SendFile.Handle",
        "fct-package": "sendfile",
        "fct-signature": "module",
        "fct-source": "src/Network-Socket-SendFile-Handle.html",
        "fct-type": "module",
        "title": "Handle"
      },
      "index": {
        "description": "Handle-based versions of some of the functions exported by Network.Socket.SendFile",
        "hierarchy": "Network Socket SendFile Handle",
        "module": "Network.Socket.SendFile.Handle",
        "name": "Handle",
        "normalized": "",
        "package": "sendfile",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Handle.html#t:ByteCount",
      "description": {
        "fct-descr": "\u003cp\u003eThe length (in bytes) which should be sent\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Handle",
        "fct-package": "sendfile",
        "fct-signature": "type",
        "fct-source": "src/Network-Socket-SendFile.html#ByteCount",
        "fct-type": "type",
        "title": "ByteCount"
      },
      "index": {
        "description": "The length in bytes which should be sent",
        "hierarchy": "Network Socket SendFile Handle",
        "module": "Network.Socket.SendFile.Handle",
        "name": "ByteCount",
        "normalized": "",
        "package": "sendfile",
        "partial": "Byte Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Handle.html#t:Iter",
      "description": {
        "fct-descr": "\u003cp\u003eAn iteratee for sendfile\n\u003c/p\u003e\u003cp\u003eIn general, a whole file is not sent by a single call to\n sendfile(), but a series of calls which send successive pieces.\n\u003c/p\u003e\u003cp\u003eThe high-level API in this sendfile library has calls which will\n send the entire file (or an entire requested offset+length), before\n returning.\n\u003c/p\u003e\u003cp\u003eHowever, there are instances where you want to be a bit more\n involved in the sending loop. For example, if you want to tickle a\n timeout after each chunk is sent or update a progress bar.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e type gives you that power with out requiring you to\n manage all the low-level details of the sendfile loop. The\n interface is simple and consistant across all platforms.\n\u003c/p\u003e\u003cp\u003eA call to sendfile() can result in three different states:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e the requested number of bytes for that iteration was sent\n  successfully, there are more bytes left to send.\n\u003c/li\u003e\u003cli\u003e some (possibly 0) bytes were sent, but the file descriptor\n  would now block if more bytes were written. There are more bytes\n  left to send.\n\u003c/li\u003e\u003cli\u003e All the bytes were sent, and there is nothing left to send.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eWe handle these three cases by using a type with three\n constructors:\n\u003c/p\u003e\u003cpre\u003e\n  data Iter\n      = Sent       Int64    (IO Iter)\n      | WouldBlock Int64 Fd (IO Iter)\n      | Done       Int64             \n\u003c/pre\u003e\u003cp\u003eAll three constructors provide an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e which represents the\n number of bytes sent for that particular iteration. (Not the total\n byte count).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSent\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWouldBlock\u003c/a\u003e\u003c/code\u003e constructors provide \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e as their\n final argument. Running this IO action will send the next block of\n data.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eWouldBlock\u003c/a\u003e\u003c/code\u003e constructor also provides the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e for the output\n socket. You should not send anymore data until the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e would not\n block. The easiest way to do that is to use \u003ccode\u003e\u003ca\u003ethreadWaitWrite\u003c/a\u003e\u003c/code\u003e to\n suspend the thread until the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e is available.\n\u003c/p\u003e\u003cp\u003eA very simple function to drive the Iter might look like:\n\u003c/p\u003e\u003cpre\u003e\n runIter :: IO Iter -\u003e IO ()\n runIter iter =\n    do r \u003c- iter\n       case r of\n         (Done _n)      -\u003e return ()\n         (Sent _n cont) -\u003e runIter cont\n         (WouldBlock _n fd cont) -\u003e \n             do threadWaitWrite fd\n                runIter cont\n\u003c/pre\u003e\u003cp\u003eYou would use it as the first argument to a *IterWith function, e.g.\n\u003c/p\u003e\u003cpre\u003e\n  sendFileIterWith runIter outputSocket \"/path/to/file\" 2^16 \n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003erunIter\u003c/a\u003e\u003c/code\u003e function provided by this module is similar, but also returns the total number of bytes sent.\n\u003c/p\u003e\u003cp\u003eNOTE: You must not use the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e or the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e after the call\n to *IterWith has returned. When the *IterWith functions return,\n the file descriptors may be closed due to finalizers running.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Handle",
        "fct-package": "sendfile",
        "fct-signature": "data",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#Iter",
        "fct-type": "data",
        "title": "Iter"
      },
      "index": {
        "description": "An iteratee for sendfile In general whole file is not sent by single call to sendfile but series of calls which send successive pieces The high-level API in this sendfile library has calls which will send the entire file or an entire requested offset length before returning However there are instances where you want to be bit more involved in the sending loop For example if you want to tickle timeout after each chunk is sent or update progress bar The Iter type gives you that power with out requiring you to manage all the low-level details of the sendfile loop The interface is simple and consistant across all platforms call to sendfile can result in three different states the requested number of bytes for that iteration was sent successfully there are more bytes left to send some possibly bytes were sent but the file descriptor would now block if more bytes were written There are more bytes left to send All the bytes were sent and there is nothing left to send We handle these three cases by using type with three constructors data Iter Sent Int64 IO Iter WouldBlock Int64 Fd IO Iter Done Int64 All three constructors provide an Int64 which represents the number of bytes sent for that particular iteration Not the total byte count The Sent and WouldBlock constructors provide IO Iter as their final argument Running this IO action will send the next block of data The WouldBlock constructor also provides the Fd for the output socket You should not send anymore data until the Fd would not block The easiest way to do that is to use threadWaitWrite to suspend the thread until the Fd is available very simple function to drive the Iter might look like runIter IO Iter IO runIter iter do iter case of Done return Sent cont runIter cont WouldBlock fd cont do threadWaitWrite fd runIter cont You would use it as the first argument to IterWith function e.g sendFileIterWith runIter outputSocket path to file The runIter function provided by this module is similar but also returns the total number of bytes sent NOTE You must not use the Fd or the IO Iter after the call to IterWith has returned When the IterWith functions return the file descriptors may be closed due to finalizers running",
        "hierarchy": "Network Socket SendFile Handle",
        "module": "Network.Socket.SendFile.Handle",
        "name": "Iter",
        "normalized": "",
        "package": "sendfile",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Handle.html#t:Offset",
      "description": {
        "fct-descr": "\u003cp\u003eThe file offset (in bytes) to start from\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Handle",
        "fct-package": "sendfile",
        "fct-signature": "type",
        "fct-source": "src/Network-Socket-SendFile.html#Offset",
        "fct-type": "type",
        "title": "Offset"
      },
      "index": {
        "description": "The file offset in bytes to start from",
        "hierarchy": "Network Socket SendFile Handle",
        "module": "Network.Socket.SendFile.Handle",
        "name": "Offset",
        "normalized": "",
        "package": "sendfile",
        "partial": "Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Handle.html#v:Done",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes sent, no more to send\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Handle",
        "fct-package": "sendfile",
        "fct-signature": "Done Int64",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#Iter",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "number of bytes sent no more to send",
        "hierarchy": "Network Socket SendFile Handle",
        "module": "Network.Socket.SendFile.Handle",
        "name": "Done",
        "normalized": "",
        "package": "sendfile",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Handle.html#v:Sent",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes sent this pass and a continuation to send more\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Handle",
        "fct-package": "sendfile",
        "fct-signature": "Sent Int64 (IO Iter)",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#Iter",
        "fct-type": "function",
        "title": "Sent"
      },
      "index": {
        "description": "number of bytes sent this pass and continuation to send more",
        "hierarchy": "Network Socket SendFile Handle",
        "module": "Network.Socket.SendFile.Handle",
        "name": "Sent",
        "normalized": "",
        "package": "sendfile",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Handle.html#v:WouldBlock",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes sent, Fd that blocked, continuation to send more. NOTE: The Fd should not be used outside the running of the Iter as it may be freed when the Iter is done\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Handle",
        "fct-package": "sendfile",
        "fct-signature": "WouldBlock Int64 Fd (IO Iter)",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#Iter",
        "fct-type": "function",
        "title": "WouldBlock"
      },
      "index": {
        "description": "number of bytes sent Fd that blocked continuation to send more NOTE The Fd should not be used outside the running of the Iter as it may be freed when the Iter is done",
        "hierarchy": "Network Socket SendFile Handle",
        "module": "Network.Socket.SendFile.Handle",
        "name": "WouldBlock",
        "normalized": "",
        "package": "sendfile",
        "partial": "Would Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Handle.html#v:runIter",
      "description": {
        "fct-descr": "\u003cp\u003eA simple function to drive the *IterWith functions.\n It returns the total number of bytes sent.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Handle",
        "fct-package": "sendfile",
        "fct-signature": "IO Iter -\u003e IO Int64",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#runIter",
        "fct-type": "function",
        "title": "runIter"
      },
      "index": {
        "description": "simple function to drive the IterWith functions It returns the total number of bytes sent",
        "hierarchy": "Network Socket SendFile Handle",
        "module": "Network.Socket.SendFile.Handle",
        "name": "runIter",
        "normalized": "IO Iter-\u003eIO Int",
        "package": "sendfile",
        "partial": "Iter",
        "signature": "IO Iter-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Handle.html#v:sendFile",
      "description": {
        "fct-descr": "\u003cp\u003eSimple sendFile - give it a Socket and a Handle, and it sends the entire\n file through the socket.\n\u003c/p\u003e\u003cp\u003eWARNING: This function will raise \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eIllegalOperation\u003c/code\u003e\n if the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e is not for an \u003ccode\u003eFd\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Handle",
        "fct-package": "sendfile",
        "fct-signature": "Socket -\u003e Handle -\u003e IO ()",
        "fct-source": "src/Network-Socket-SendFile-Handle.html#sendFile",
        "fct-type": "function",
        "title": "sendFile"
      },
      "index": {
        "description": "Simple sendFile give it Socket and Handle and it sends the entire file through the socket WARNING This function will raise IOError IllegalOperation if the Handle is not for an Fd",
        "hierarchy": "Network Socket SendFile Handle",
        "module": "Network.Socket.SendFile.Handle",
        "name": "sendFile",
        "normalized": "Socket-\u003eHandle-\u003eIO()",
        "package": "sendfile",
        "partial": "File",
        "signature": "Socket-\u003eHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Handle.html#v:sendFile-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA sendFile that allows the user to send a subset of the file associated\n with the given handle.\n\u003c/p\u003e\u003cp\u003eWARNING: This function will raise \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eIllegalOperation\u003c/code\u003e\n if the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e is not for an \u003ccode\u003eFd\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Handle",
        "fct-package": "sendfile",
        "fct-signature": "Socket -\u003e Handle -\u003e Offset -\u003e ByteCount -\u003e IO ()",
        "fct-source": "src/Network-Socket-SendFile-Handle.html#sendFile%27",
        "fct-type": "function",
        "title": "sendFile'"
      },
      "index": {
        "description": "sendFile that allows the user to send subset of the file associated with the given handle WARNING This function will raise IOError IllegalOperation if the Handle is not for an Fd",
        "hierarchy": "Network Socket SendFile Handle",
        "module": "Network.Socket.SendFile.Handle",
        "name": "sendFile'",
        "normalized": "Socket-\u003eHandle-\u003eOffset-\u003eByteCount-\u003eIO()",
        "package": "sendfile",
        "partial": "File'",
        "signature": "Socket-\u003eHandle-\u003eOffset-\u003eByteCount-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Handle.html#v:sendFileIterWith",
      "description": {
        "fct-descr": "\u003cp\u003eA more interactive version of sendFile, which accepts a callback function\n in addition to the socket and handle.  The callback will be called for each\n chunk of data the sendFileIterWith function acts on.\n\u003c/p\u003e\u003cp\u003eWARNING: This function will raise \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eIllegalOperation\u003c/code\u003e\n if the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e is not for an \u003ccode\u003eFd\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Handle",
        "fct-package": "sendfile",
        "fct-signature": "(IO Iter -\u003e IO a) -\u003e Socket -\u003e Handle -\u003e ByteCount -\u003e IO a",
        "fct-source": "src/Network-Socket-SendFile-Handle.html#sendFileIterWith",
        "fct-type": "function",
        "title": "sendFileIterWith"
      },
      "index": {
        "description": "more interactive version of sendFile which accepts callback function in addition to the socket and handle The callback will be called for each chunk of data the sendFileIterWith function acts on WARNING This function will raise IOError IllegalOperation if the Handle is not for an Fd",
        "hierarchy": "Network Socket SendFile Handle",
        "module": "Network.Socket.SendFile.Handle",
        "name": "sendFileIterWith",
        "normalized": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eHandle-\u003eByteCount-\u003eIO a",
        "package": "sendfile",
        "partial": "File Iter With",
        "signature": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eHandle-\u003eByteCount-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Handle.html#v:sendFileIterWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA more powerful version of sendFileIterWith, which allows the sending of a\n subset of the given file.\n\u003c/p\u003e\u003cp\u003eWARNING: This function will raise \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eIllegalOperation\u003c/code\u003e\n if the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e is not for an \u003ccode\u003eFd\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Handle",
        "fct-package": "sendfile",
        "fct-signature": "(IO Iter -\u003e IO a) -\u003e Socket -\u003e Handle -\u003e ByteCount -\u003e Offset -\u003e ByteCount -\u003e IO a",
        "fct-source": "src/Network-Socket-SendFile-Handle.html#sendFileIterWith%27",
        "fct-type": "function",
        "title": "sendFileIterWith'"
      },
      "index": {
        "description": "more powerful version of sendFileIterWith which allows the sending of subset of the given file WARNING This function will raise IOError IllegalOperation if the Handle is not for an Fd",
        "hierarchy": "Network Socket SendFile Handle",
        "module": "Network.Socket.SendFile.Handle",
        "name": "sendFileIterWith'",
        "normalized": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eHandle-\u003eByteCount-\u003eOffset-\u003eByteCount-\u003eIO a",
        "package": "sendfile",
        "partial": "File Iter With'",
        "signature": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eHandle-\u003eByteCount-\u003eOffset-\u003eByteCount-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Iter.html#",
      "description": {
        "fct-module": "Network.Socket.SendFile.Iter",
        "fct-package": "sendfile",
        "fct-signature": "module",
        "fct-source": "src/Network-Socket-SendFile-Iter.html",
        "fct-type": "module",
        "title": "Iter"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Iter",
        "module": "Network.Socket.SendFile.Iter",
        "name": "Iter",
        "normalized": "",
        "package": "sendfile",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Iter.html#t:Iter",
      "description": {
        "fct-descr": "\u003cp\u003eAn iteratee for sendfile\n\u003c/p\u003e\u003cp\u003eIn general, a whole file is not sent by a single call to\n sendfile(), but a series of calls which send successive pieces.\n\u003c/p\u003e\u003cp\u003eThe high-level API in this sendfile library has calls which will\n send the entire file (or an entire requested offset+length), before\n returning.\n\u003c/p\u003e\u003cp\u003eHowever, there are instances where you want to be a bit more\n involved in the sending loop. For example, if you want to tickle a\n timeout after each chunk is sent or update a progress bar.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e type gives you that power with out requiring you to\n manage all the low-level details of the sendfile loop. The\n interface is simple and consistant across all platforms.\n\u003c/p\u003e\u003cp\u003eA call to sendfile() can result in three different states:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e the requested number of bytes for that iteration was sent\n  successfully, there are more bytes left to send.\n\u003c/li\u003e\u003cli\u003e some (possibly 0) bytes were sent, but the file descriptor\n  would now block if more bytes were written. There are more bytes\n  left to send.\n\u003c/li\u003e\u003cli\u003e All the bytes were sent, and there is nothing left to send.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eWe handle these three cases by using a type with three\n constructors:\n\u003c/p\u003e\u003cpre\u003e\n  data Iter\n      = Sent       Int64    (IO Iter)\n      | WouldBlock Int64 Fd (IO Iter)\n      | Done       Int64             \n\u003c/pre\u003e\u003cp\u003eAll three constructors provide an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e which represents the\n number of bytes sent for that particular iteration. (Not the total\n byte count).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSent\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWouldBlock\u003c/a\u003e\u003c/code\u003e constructors provide \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e as their\n final argument. Running this IO action will send the next block of\n data.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eWouldBlock\u003c/a\u003e\u003c/code\u003e constructor also provides the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e for the output\n socket. You should not send anymore data until the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e would not\n block. The easiest way to do that is to use \u003ccode\u003e\u003ca\u003ethreadWaitWrite\u003c/a\u003e\u003c/code\u003e to\n suspend the thread until the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e is available.\n\u003c/p\u003e\u003cp\u003eA very simple function to drive the Iter might look like:\n\u003c/p\u003e\u003cpre\u003e\n runIter :: IO Iter -\u003e IO ()\n runIter iter =\n    do r \u003c- iter\n       case r of\n         (Done _n)      -\u003e return ()\n         (Sent _n cont) -\u003e runIter cont\n         (WouldBlock _n fd cont) -\u003e \n             do threadWaitWrite fd\n                runIter cont\n\u003c/pre\u003e\u003cp\u003eYou would use it as the first argument to a *IterWith function, e.g.\n\u003c/p\u003e\u003cpre\u003e\n  sendFileIterWith runIter outputSocket \"/path/to/file\" 2^16 \n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003erunIter\u003c/a\u003e\u003c/code\u003e function provided by this module is similar, but also returns the total number of bytes sent.\n\u003c/p\u003e\u003cp\u003eNOTE: You must not use the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e or the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e after the call\n to *IterWith has returned. When the *IterWith functions return,\n the file descriptors may be closed due to finalizers running.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Iter",
        "fct-package": "sendfile",
        "fct-signature": "data",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#Iter",
        "fct-type": "data",
        "title": "Iter"
      },
      "index": {
        "description": "An iteratee for sendfile In general whole file is not sent by single call to sendfile but series of calls which send successive pieces The high-level API in this sendfile library has calls which will send the entire file or an entire requested offset length before returning However there are instances where you want to be bit more involved in the sending loop For example if you want to tickle timeout after each chunk is sent or update progress bar The Iter type gives you that power with out requiring you to manage all the low-level details of the sendfile loop The interface is simple and consistant across all platforms call to sendfile can result in three different states the requested number of bytes for that iteration was sent successfully there are more bytes left to send some possibly bytes were sent but the file descriptor would now block if more bytes were written There are more bytes left to send All the bytes were sent and there is nothing left to send We handle these three cases by using type with three constructors data Iter Sent Int64 IO Iter WouldBlock Int64 Fd IO Iter Done Int64 All three constructors provide an Int64 which represents the number of bytes sent for that particular iteration Not the total byte count The Sent and WouldBlock constructors provide IO Iter as their final argument Running this IO action will send the next block of data The WouldBlock constructor also provides the Fd for the output socket You should not send anymore data until the Fd would not block The easiest way to do that is to use threadWaitWrite to suspend the thread until the Fd is available very simple function to drive the Iter might look like runIter IO Iter IO runIter iter do iter case of Done return Sent cont runIter cont WouldBlock fd cont do threadWaitWrite fd runIter cont You would use it as the first argument to IterWith function e.g sendFileIterWith runIter outputSocket path to file The runIter function provided by this module is similar but also returns the total number of bytes sent NOTE You must not use the Fd or the IO Iter after the call to IterWith has returned When the IterWith functions return the file descriptors may be closed due to finalizers running",
        "hierarchy": "Network Socket SendFile Iter",
        "module": "Network.Socket.SendFile.Iter",
        "name": "Iter",
        "normalized": "",
        "package": "sendfile",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Iter.html#v:Done",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes sent, no more to send\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Iter",
        "fct-package": "sendfile",
        "fct-signature": "Done Int64",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#Iter",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "number of bytes sent no more to send",
        "hierarchy": "Network Socket SendFile Iter",
        "module": "Network.Socket.SendFile.Iter",
        "name": "Done",
        "normalized": "",
        "package": "sendfile",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Iter.html#v:Sent",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes sent this pass and a continuation to send more\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Iter",
        "fct-package": "sendfile",
        "fct-signature": "Sent Int64 (IO Iter)",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#Iter",
        "fct-type": "function",
        "title": "Sent"
      },
      "index": {
        "description": "number of bytes sent this pass and continuation to send more",
        "hierarchy": "Network Socket SendFile Iter",
        "module": "Network.Socket.SendFile.Iter",
        "name": "Sent",
        "normalized": "",
        "package": "sendfile",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Iter.html#v:WouldBlock",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes sent, Fd that blocked, continuation to send more. NOTE: The Fd should not be used outside the running of the Iter as it may be freed when the Iter is done\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Iter",
        "fct-package": "sendfile",
        "fct-signature": "WouldBlock Int64 Fd (IO Iter)",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#Iter",
        "fct-type": "function",
        "title": "WouldBlock"
      },
      "index": {
        "description": "number of bytes sent Fd that blocked continuation to send more NOTE The Fd should not be used outside the running of the Iter as it may be freed when the Iter is done",
        "hierarchy": "Network Socket SendFile Iter",
        "module": "Network.Socket.SendFile.Iter",
        "name": "WouldBlock",
        "normalized": "",
        "package": "sendfile",
        "partial": "Would Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Iter.html#v:runIter",
      "description": {
        "fct-descr": "\u003cp\u003eA simple function to drive the *IterWith functions.\n It returns the total number of bytes sent.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile.Iter",
        "fct-package": "sendfile",
        "fct-signature": "IO Iter -\u003e IO Int64",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#runIter",
        "fct-type": "function",
        "title": "runIter"
      },
      "index": {
        "description": "simple function to drive the IterWith functions It returns the total number of bytes sent",
        "hierarchy": "Network Socket SendFile Iter",
        "module": "Network.Socket.SendFile.Iter",
        "name": "runIter",
        "normalized": "IO Iter-\u003eIO Int",
        "package": "sendfile",
        "partial": "Iter",
        "signature": "IO Iter-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "module",
        "fct-source": "src/Network-Socket-SendFile-Portable.html",
        "fct-type": "module",
        "title": "Portable"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "Portable",
        "normalized": "",
        "package": "sendfile",
        "partial": "Portable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:sendFile",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "Socket -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Network-Socket-SendFile-Portable.html#sendFile",
        "fct-type": "function",
        "title": "sendFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "sendFile",
        "normalized": "Socket-\u003eFilePath-\u003eIO()",
        "package": "sendfile",
        "partial": "File",
        "signature": "Socket-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:sendFile-39-",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "Socket -\u003e FilePath -\u003e Integer -\u003e Integer -\u003e IO ()",
        "fct-source": "src/Network-Socket-SendFile-Portable.html#sendFile%27",
        "fct-type": "function",
        "title": "sendFile'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "sendFile'",
        "normalized": "Socket-\u003eFilePath-\u003eInteger-\u003eInteger-\u003eIO()",
        "package": "sendfile",
        "partial": "File'",
        "signature": "Socket-\u003eFilePath-\u003eInteger-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:sendFile-39--39-",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "Socket -\u003e Handle -\u003e Integer -\u003e Integer -\u003e IO ()",
        "fct-source": "src/Network-Socket-SendFile-Portable.html#sendFile%27%27",
        "fct-type": "function",
        "title": "sendFile''"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "sendFile''",
        "normalized": "Socket-\u003eHandle-\u003eInteger-\u003eInteger-\u003eIO()",
        "package": "sendfile",
        "partial": "File''",
        "signature": "Socket-\u003eHandle-\u003eInteger-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:sendFileIterWith",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "(IO Iter -\u003e IO a) -\u003e Socket -\u003e FilePath -\u003e Integer -\u003e IO a",
        "fct-source": "src/Network-Socket-SendFile-Portable.html#sendFileIterWith",
        "fct-type": "function",
        "title": "sendFileIterWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "sendFileIterWith",
        "normalized": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eFilePath-\u003eInteger-\u003eIO a",
        "package": "sendfile",
        "partial": "File Iter With",
        "signature": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eFilePath-\u003eInteger-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:sendFileIterWith-39-",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "(IO Iter -\u003e IO a) -\u003e Socket -\u003e FilePath -\u003e Integer -\u003e Integer -\u003e Integer -\u003e IO a",
        "fct-source": "src/Network-Socket-SendFile-Portable.html#sendFileIterWith%27",
        "fct-type": "function",
        "title": "sendFileIterWith'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "sendFileIterWith'",
        "normalized": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eFilePath-\u003eInteger-\u003eInteger-\u003eInteger-\u003eIO a",
        "package": "sendfile",
        "partial": "File Iter With'",
        "signature": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eFilePath-\u003eInteger-\u003eInteger-\u003eInteger-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:sendFileIterWith-39--39-",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "(IO Iter -\u003e IO a) -\u003e Socket -\u003e Handle -\u003e Integer -\u003e Integer -\u003e Integer -\u003e IO a",
        "fct-source": "src/Network-Socket-SendFile-Portable.html#sendFileIterWith%27%27",
        "fct-type": "function",
        "title": "sendFileIterWith''"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "sendFileIterWith''",
        "normalized": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eHandle-\u003eInteger-\u003eInteger-\u003eInteger-\u003eIO a",
        "package": "sendfile",
        "partial": "File Iter With''",
        "signature": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eHandle-\u003eInteger-\u003eInteger-\u003eInteger-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:sendFileMode",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "String",
        "fct-source": "src/Network-Socket-SendFile-Portable.html#sendFileMode",
        "fct-type": "function",
        "title": "sendFileMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "sendFileMode",
        "normalized": "",
        "package": "sendfile",
        "partial": "File Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:unsafeSendFile",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "Handle -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Network-Socket-SendFile-Portable.html#unsafeSendFile",
        "fct-type": "function",
        "title": "unsafeSendFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "unsafeSendFile",
        "normalized": "Handle-\u003eFilePath-\u003eIO()",
        "package": "sendfile",
        "partial": "Send File",
        "signature": "Handle-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:unsafeSendFile-39-",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "Handle-\u003e FilePath-\u003e Integer-\u003e Integer-\u003e IO ()",
        "fct-type": "function",
        "title": "unsafeSendFile'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "unsafeSendFile'",
        "normalized": "Handle-\u003eFilePath-\u003eInteger-\u003eInteger-\u003eIO()",
        "package": "sendfile",
        "partial": "Send File'",
        "signature": "Handle-\u003eFilePath-\u003eInteger-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:unsafeSendFile-39--39-",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "Handle -\u003e Handle -\u003e Integer -\u003e Integer -\u003e IO ()",
        "fct-source": "src/Network-Socket-SendFile-Portable.html#unsafeSendFile%27%27",
        "fct-type": "function",
        "title": "unsafeSendFile''"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "unsafeSendFile''",
        "normalized": "Handle-\u003eHandle-\u003eInteger-\u003eInteger-\u003eIO()",
        "package": "sendfile",
        "partial": "Send File''",
        "signature": "Handle-\u003eHandle-\u003eInteger-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:unsafeSendFileIterWith",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "(IO Iter -\u003e IO a) -\u003e Handle -\u003e FilePath -\u003e Integer -\u003e IO a",
        "fct-source": "src/Network-Socket-SendFile-Portable.html#unsafeSendFileIterWith",
        "fct-type": "function",
        "title": "unsafeSendFileIterWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "unsafeSendFileIterWith",
        "normalized": "(IO Iter-\u003eIO a)-\u003eHandle-\u003eFilePath-\u003eInteger-\u003eIO a",
        "package": "sendfile",
        "partial": "Send File Iter With",
        "signature": "(IO Iter-\u003eIO a)-\u003eHandle-\u003eFilePath-\u003eInteger-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:unsafeSendFileIterWith-39-",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "(IO Iter -\u003e IO a)-\u003e Handle-\u003e FilePath-\u003e Integer-\u003e Integer-\u003e Integer-\u003e IO a",
        "fct-type": "function",
        "title": "unsafeSendFileIterWith'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "unsafeSendFileIterWith'",
        "normalized": "(IO Iter-\u003eIO a)-\u003eHandle-\u003eFilePath-\u003eInteger-\u003eInteger-\u003eInteger-\u003eIO a",
        "package": "sendfile",
        "partial": "Send File Iter With'",
        "signature": "(IO Iter-\u003eIO a)-\u003eHandle-\u003eFilePath-\u003eInteger-\u003eInteger-\u003eInteger-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile-Portable.html#v:unsafeSendFileIterWith-39--39-",
      "description": {
        "fct-module": "Network.Socket.SendFile.Portable",
        "fct-package": "sendfile",
        "fct-signature": "(IO Iter -\u003e IO a) -\u003e Handle -\u003e Handle -\u003e Integer -\u003e Integer -\u003e Integer -\u003e IO a",
        "fct-source": "src/Network-Socket-SendFile-Portable.html#unsafeSendFileIterWith%27%27",
        "fct-type": "function",
        "title": "unsafeSendFileIterWith''"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Socket SendFile Portable",
        "module": "Network.Socket.SendFile.Portable",
        "name": "unsafeSendFileIterWith''",
        "normalized": "(IO Iter-\u003eIO a)-\u003eHandle-\u003eHandle-\u003eInteger-\u003eInteger-\u003eInteger-\u003eIO a",
        "package": "sendfile",
        "partial": "Send File Iter With''",
        "signature": "(IO Iter-\u003eIO a)-\u003eHandle-\u003eHandle-\u003eInteger-\u003eInteger-\u003eInteger-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA cross-platform wrapper for sendfile -- this implements an available operating-system call if supported, otherwise it falls back to a portable haskell implementation.\n\u003c/p\u003e\u003cp\u003eTwo interfaces are provided for both the unsafe and safe sets of functions. The first interface accepts an output socket/handle and the path of the file you want to send; sendFile and unsafeSendFile comprise this interface. The second interface accepts an output socket/handle, a handle to the file you want to send, an offset, and the number of bytes you want to send; sendFile' and unsafeSendFile' comprise this interface.\n\u003c/p\u003e\u003cp\u003eFor consistent read/write behavior with either sendFile' or unsafeSendFile', the input handle should be opened in Binary mode rather than Text mode.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "module",
        "fct-source": "src/Network-Socket-SendFile.html",
        "fct-type": "module",
        "title": "SendFile"
      },
      "index": {
        "description": "cross-platform wrapper for sendfile this implements an available operating-system call if supported otherwise it falls back to portable haskell implementation Two interfaces are provided for both the unsafe and safe sets of functions The first interface accepts an output socket handle and the path of the file you want to send sendFile and unsafeSendFile comprise this interface The second interface accepts an output socket handle handle to the file you want to send an offset and the number of bytes you want to send sendFile and unsafeSendFile comprise this interface For consistent read write behavior with either sendFile or unsafeSendFile the input handle should be opened in Binary mode rather than Text mode",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "SendFile",
        "normalized": "",
        "package": "sendfile",
        "partial": "Send File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#t:ByteCount",
      "description": {
        "fct-descr": "\u003cp\u003eThe length (in bytes) which should be sent\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "type",
        "fct-source": "src/Network-Socket-SendFile.html#ByteCount",
        "fct-type": "type",
        "title": "ByteCount"
      },
      "index": {
        "description": "The length in bytes which should be sent",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "ByteCount",
        "normalized": "",
        "package": "sendfile",
        "partial": "Byte Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#t:Iter",
      "description": {
        "fct-descr": "\u003cp\u003eAn iteratee for sendfile\n\u003c/p\u003e\u003cp\u003eIn general, a whole file is not sent by a single call to\n sendfile(), but a series of calls which send successive pieces.\n\u003c/p\u003e\u003cp\u003eThe high-level API in this sendfile library has calls which will\n send the entire file (or an entire requested offset+length), before\n returning.\n\u003c/p\u003e\u003cp\u003eHowever, there are instances where you want to be a bit more\n involved in the sending loop. For example, if you want to tickle a\n timeout after each chunk is sent or update a progress bar.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e type gives you that power with out requiring you to\n manage all the low-level details of the sendfile loop. The\n interface is simple and consistant across all platforms.\n\u003c/p\u003e\u003cp\u003eA call to sendfile() can result in three different states:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e the requested number of bytes for that iteration was sent\n  successfully, there are more bytes left to send.\n\u003c/li\u003e\u003cli\u003e some (possibly 0) bytes were sent, but the file descriptor\n  would now block if more bytes were written. There are more bytes\n  left to send.\n\u003c/li\u003e\u003cli\u003e All the bytes were sent, and there is nothing left to send.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eWe handle these three cases by using a type with three\n constructors:\n\u003c/p\u003e\u003cpre\u003e\n  data Iter\n      = Sent       Int64    (IO Iter)\n      | WouldBlock Int64 Fd (IO Iter)\n      | Done       Int64             \n\u003c/pre\u003e\u003cp\u003eAll three constructors provide an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e which represents the\n number of bytes sent for that particular iteration. (Not the total\n byte count).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSent\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWouldBlock\u003c/a\u003e\u003c/code\u003e constructors provide \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e as their\n final argument. Running this IO action will send the next block of\n data.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eWouldBlock\u003c/a\u003e\u003c/code\u003e constructor also provides the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e for the output\n socket. You should not send anymore data until the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e would not\n block. The easiest way to do that is to use \u003ccode\u003e\u003ca\u003ethreadWaitWrite\u003c/a\u003e\u003c/code\u003e to\n suspend the thread until the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e is available.\n\u003c/p\u003e\u003cp\u003eA very simple function to drive the Iter might look like:\n\u003c/p\u003e\u003cpre\u003e\n runIter :: IO Iter -\u003e IO ()\n runIter iter =\n    do r \u003c- iter\n       case r of\n         (Done _n)      -\u003e return ()\n         (Sent _n cont) -\u003e runIter cont\n         (WouldBlock _n fd cont) -\u003e \n             do threadWaitWrite fd\n                runIter cont\n\u003c/pre\u003e\u003cp\u003eYou would use it as the first argument to a *IterWith function, e.g.\n\u003c/p\u003e\u003cpre\u003e\n  sendFileIterWith runIter outputSocket \"/path/to/file\" 2^16 \n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003erunIter\u003c/a\u003e\u003c/code\u003e function provided by this module is similar, but also returns the total number of bytes sent.\n\u003c/p\u003e\u003cp\u003eNOTE: You must not use the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e or the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e after the call\n to *IterWith has returned. When the *IterWith functions return,\n the file descriptors may be closed due to finalizers running.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "data",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#Iter",
        "fct-type": "data",
        "title": "Iter"
      },
      "index": {
        "description": "An iteratee for sendfile In general whole file is not sent by single call to sendfile but series of calls which send successive pieces The high-level API in this sendfile library has calls which will send the entire file or an entire requested offset length before returning However there are instances where you want to be bit more involved in the sending loop For example if you want to tickle timeout after each chunk is sent or update progress bar The Iter type gives you that power with out requiring you to manage all the low-level details of the sendfile loop The interface is simple and consistant across all platforms call to sendfile can result in three different states the requested number of bytes for that iteration was sent successfully there are more bytes left to send some possibly bytes were sent but the file descriptor would now block if more bytes were written There are more bytes left to send All the bytes were sent and there is nothing left to send We handle these three cases by using type with three constructors data Iter Sent Int64 IO Iter WouldBlock Int64 Fd IO Iter Done Int64 All three constructors provide an Int64 which represents the number of bytes sent for that particular iteration Not the total byte count The Sent and WouldBlock constructors provide IO Iter as their final argument Running this IO action will send the next block of data The WouldBlock constructor also provides the Fd for the output socket You should not send anymore data until the Fd would not block The easiest way to do that is to use threadWaitWrite to suspend the thread until the Fd is available very simple function to drive the Iter might look like runIter IO Iter IO runIter iter do iter case of Done return Sent cont runIter cont WouldBlock fd cont do threadWaitWrite fd runIter cont You would use it as the first argument to IterWith function e.g sendFileIterWith runIter outputSocket path to file The runIter function provided by this module is similar but also returns the total number of bytes sent NOTE You must not use the Fd or the IO Iter after the call to IterWith has returned When the IterWith functions return the file descriptors may be closed due to finalizers running",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "Iter",
        "normalized": "",
        "package": "sendfile",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#t:Offset",
      "description": {
        "fct-descr": "\u003cp\u003eThe file offset (in bytes) to start from\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "type",
        "fct-source": "src/Network-Socket-SendFile.html#Offset",
        "fct-type": "type",
        "title": "Offset"
      },
      "index": {
        "description": "The file offset in bytes to start from",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "Offset",
        "normalized": "",
        "package": "sendfile",
        "partial": "Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:Done",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes sent, no more to send\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "Done Int64",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#Iter",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "number of bytes sent no more to send",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "Done",
        "normalized": "",
        "package": "sendfile",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:Sent",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes sent this pass and a continuation to send more\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "Sent Int64 (IO Iter)",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#Iter",
        "fct-type": "function",
        "title": "Sent"
      },
      "index": {
        "description": "number of bytes sent this pass and continuation to send more",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "Sent",
        "normalized": "",
        "package": "sendfile",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:WouldBlock",
      "description": {
        "fct-descr": "\u003cp\u003enumber of bytes sent, Fd that blocked, continuation to send more. NOTE: The Fd should not be used outside the running of the Iter as it may be freed when the Iter is done\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "WouldBlock Int64 Fd (IO Iter)",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#Iter",
        "fct-type": "function",
        "title": "WouldBlock"
      },
      "index": {
        "description": "number of bytes sent Fd that blocked continuation to send more NOTE The Fd should not be used outside the running of the Iter as it may be freed when the Iter is done",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "WouldBlock",
        "normalized": "",
        "package": "sendfile",
        "partial": "Would Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:runIter",
      "description": {
        "fct-descr": "\u003cp\u003eA simple function to drive the *IterWith functions.\n It returns the total number of bytes sent.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "IO Iter -\u003e IO Int64",
        "fct-source": "src/Network-Socket-SendFile-Iter.html#runIter",
        "fct-type": "function",
        "title": "runIter"
      },
      "index": {
        "description": "simple function to drive the IterWith functions It returns the total number of bytes sent",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "runIter",
        "normalized": "IO Iter-\u003eIO Int",
        "package": "sendfile",
        "partial": "Iter",
        "signature": "IO Iter-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:sendFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe simplest interface. Simply give it an output \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to the input file.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "Socket-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "sendFile"
      },
      "index": {
        "description": "The simplest interface Simply give it an output Socket and the FilePath to the input file",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "sendFile",
        "normalized": "Socket-\u003eFilePath-\u003eIO()",
        "package": "sendfile",
        "partial": "File",
        "signature": "Socket-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:sendFile-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA more powerful interface than sendFile which accepts a starting offset, and the bytecount to send; the offset and the count must be a positive integer. The initial position of the input file handle matters not since the offset is absolute, and the final position may be different depending on the platform -- no assumptions can be made.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "Socket-\u003e FilePath-\u003e Offset-\u003e ByteCount-\u003e IO ()",
        "fct-type": "function",
        "title": "sendFile'"
      },
      "index": {
        "description": "more powerful interface than sendFile which accepts starting offset and the bytecount to send the offset and the count must be positive integer The initial position of the input file handle matters not since the offset is absolute and the final position may be different depending on the platform no assumptions can be made",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "sendFile'",
        "normalized": "Socket-\u003eFilePath-\u003eOffset-\u003eByteCount-\u003eIO()",
        "package": "sendfile",
        "partial": "File'",
        "signature": "Socket-\u003eFilePath-\u003eOffset-\u003eByteCount-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:sendFileIterWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe simplest interface. Simply give it an output \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to the input file.\n\u003c/p\u003e\u003cp\u003eThis variant takes a function to drive the iteration loop. See \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "(IO Iter -\u003e IO a)-\u003e Socket-\u003e FilePath-\u003e ByteCount-\u003e IO a",
        "fct-type": "function",
        "title": "sendFileIterWith"
      },
      "index": {
        "description": "The simplest interface Simply give it an output Socket and the FilePath to the input file This variant takes function to drive the iteration loop See Iter for more information",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "sendFileIterWith",
        "normalized": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eFilePath-\u003eByteCount-\u003eIO a",
        "package": "sendfile",
        "partial": "File Iter With",
        "signature": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eFilePath-\u003eByteCount-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:sendFileIterWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA more powerful interface than sendFile which accepts a starting offset, and the bytecount to send; the offset and the count must be a positive integer. The initial position of the input file handle matters not since the offset is absolute, and the final position may be different depending on the platform -- no assumptions can be made.\n\u003c/p\u003e\u003cp\u003eThis variant takes a function to drive the iteration loop. See \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "(IO Iter -\u003e IO a)-\u003e Socket-\u003e FilePath-\u003e ByteCount-\u003e Offset-\u003e ByteCount-\u003e IO a",
        "fct-type": "function",
        "title": "sendFileIterWith'"
      },
      "index": {
        "description": "more powerful interface than sendFile which accepts starting offset and the bytecount to send the offset and the count must be positive integer The initial position of the input file handle matters not since the offset is absolute and the final position may be different depending on the platform no assumptions can be made This variant takes function to drive the iteration loop See Iter for more information",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "sendFileIterWith'",
        "normalized": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eFilePath-\u003eByteCount-\u003eOffset-\u003eByteCount-\u003eIO a",
        "package": "sendfile",
        "partial": "File Iter With'",
        "signature": "(IO Iter-\u003eIO a)-\u003eSocket-\u003eFilePath-\u003eByteCount-\u003eOffset-\u003eByteCount-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:sendFileMode",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the mode that sendfile was compiled with. Mainly for debugging use.\n Possible values are \u003ccode\u003eWIN32_SENDFILE\u003c/code\u003e, \u003ccode\u003eLINUX_SENDFILE\u003c/code\u003e, \u003ccode\u003eFREEBSD_SENDFILE\u003c/code\u003e,\n \u003ccode\u003eDARWIN_SENDFILE\u003c/code\u003e, and \u003ccode\u003ePORTABLE_SENDFILE\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "sendFileMode"
      },
      "index": {
        "description": "Returns the mode that sendfile was compiled with Mainly for debugging use Possible values are WIN32 SENDFILE LINUX SENDFILE FREEBSD SENDFILE DARWIN SENDFILE and PORTABLE SENDFILE",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "sendFileMode",
        "normalized": "",
        "package": "sendfile",
        "partial": "File Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:unsafeSendFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe unsafe version of sendFile which accepts a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e instead of a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e for the output.  It will flush the output handle before sending any file data.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "Handle-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "unsafeSendFile"
      },
      "index": {
        "description": "The unsafe version of sendFile which accepts Handle instead of Socket for the output It will flush the output handle before sending any file data",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "unsafeSendFile",
        "normalized": "Handle-\u003eFilePath-\u003eIO()",
        "package": "sendfile",
        "partial": "Send File",
        "signature": "Handle-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:unsafeSendFile-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe unsafe version of sendFile' which accepts a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e instead of a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e for the output. It will flush the output handle before sending any file data.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "Handle-\u003e FilePath-\u003e Offset-\u003e ByteCount-\u003e IO ()",
        "fct-type": "function",
        "title": "unsafeSendFile'"
      },
      "index": {
        "description": "The unsafe version of sendFile which accepts Handle instead of Socket for the output It will flush the output handle before sending any file data",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "unsafeSendFile'",
        "normalized": "Handle-\u003eFilePath-\u003eOffset-\u003eByteCount-\u003eIO()",
        "package": "sendfile",
        "partial": "Send File'",
        "signature": "Handle-\u003eFilePath-\u003eOffset-\u003eByteCount-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:unsafeSendFileIterWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe unsafe version of sendFile which accepts a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e instead of a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e for the output.  It will flush the output handle before sending any file data.\n\u003c/p\u003e\u003cp\u003eThis variant takes a function to drive the iteration loop. See \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "(IO Iter -\u003e IO a)-\u003e Handle-\u003e FilePath-\u003e ByteCount-\u003e IO a",
        "fct-type": "function",
        "title": "unsafeSendFileIterWith"
      },
      "index": {
        "description": "The unsafe version of sendFile which accepts Handle instead of Socket for the output It will flush the output handle before sending any file data This variant takes function to drive the iteration loop See Iter for more information",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "unsafeSendFileIterWith",
        "normalized": "(IO Iter-\u003eIO a)-\u003eHandle-\u003eFilePath-\u003eByteCount-\u003eIO a",
        "package": "sendfile",
        "partial": "Send File Iter With",
        "signature": "(IO Iter-\u003eIO a)-\u003eHandle-\u003eFilePath-\u003eByteCount-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sendfile/docs/Network-Socket-SendFile.html#v:unsafeSendFileIterWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe unsafe version of sendFile' which accepts a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e instead of a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e for the output. It will flush the output handle before sending any file data.\n\u003c/p\u003e\u003cp\u003eThis variant takes a function to drive the iteration loop. See \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.SendFile",
        "fct-package": "sendfile",
        "fct-signature": "(IO Iter -\u003e IO a)-\u003e Handle-\u003e FilePath-\u003e ByteCount-\u003e Offset-\u003e ByteCount-\u003e IO a",
        "fct-type": "function",
        "title": "unsafeSendFileIterWith'"
      },
      "index": {
        "description": "The unsafe version of sendFile which accepts Handle instead of Socket for the output It will flush the output handle before sending any file data This variant takes function to drive the iteration loop See Iter for more information",
        "hierarchy": "Network Socket SendFile",
        "module": "Network.Socket.SendFile",
        "name": "unsafeSendFileIterWith'",
        "normalized": "(IO Iter-\u003eIO a)-\u003eHandle-\u003eFilePath-\u003eByteCount-\u003eOffset-\u003eByteCount-\u003eIO a",
        "package": "sendfile",
        "partial": "Send File Iter With'",
        "signature": "(IO Iter-\u003eIO a)-\u003eHandle-\u003eFilePath-\u003eByteCount-\u003eOffset-\u003eByteCount-\u003eIO a"
      }
    }
  }
]