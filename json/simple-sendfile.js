[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCross platform library for the sendfile system call.\n  This library tries to call minimum system calls which\n  are the bottleneck of web servers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Sendfile",
        "fct-package": "simple-sendfile",
        "fct-signature": "module",
        "fct-source": "src/Network-Sendfile.html",
        "fct-type": "module",
        "title": "Sendfile"
      },
      "index": {
        "description": "Cross platform library for the sendfile system call This library tries to call minimum system calls which are the bottleneck of web servers",
        "hierarchy": "Network Sendfile",
        "module": "Network.Sendfile",
        "name": "Sendfile",
        "normalized": "",
        "package": "simple-sendfile",
        "partial": "Sendfile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#t:FileRange",
      "description": {
        "fct-descr": "\u003cp\u003eFile range for \u003ccode\u003esendfile\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Sendfile",
        "fct-package": "simple-sendfile",
        "fct-signature": "data",
        "fct-source": "src/Network-Sendfile-Types.html#FileRange",
        "fct-type": "data",
        "title": "FileRange"
      },
      "index": {
        "description": "File range for sendfile",
        "hierarchy": "Network Sendfile",
        "module": "Network.Sendfile",
        "name": "FileRange",
        "normalized": "",
        "package": "simple-sendfile",
        "partial": "File Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:EntireFile",
      "description": {
        "fct-module": "Network.Sendfile",
        "fct-package": "simple-sendfile",
        "fct-signature": "EntireFile",
        "fct-source": "src/Network-Sendfile-Types.html#FileRange",
        "fct-type": "function",
        "title": "EntireFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Sendfile",
        "module": "Network.Sendfile",
        "name": "EntireFile",
        "normalized": "",
        "package": "simple-sendfile",
        "partial": "Entire File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:PartOfFile",
      "description": {
        "fct-module": "Network.Sendfile",
        "fct-package": "simple-sendfile",
        "fct-signature": "PartOfFile",
        "fct-source": "src/Network-Sendfile-Types.html#FileRange",
        "fct-type": "function",
        "title": "PartOfFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Sendfile",
        "module": "Network.Sendfile",
        "name": "PartOfFile",
        "normalized": "",
        "package": "simple-sendfile",
        "partial": "Part Of File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:rangeLength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Sendfile",
        "fct-package": "simple-sendfile",
        "fct-signature": "Integer",
        "fct-source": "src/Network-Sendfile-Types.html#FileRange",
        "fct-type": "function",
        "title": "rangeLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Sendfile",
        "module": "Network.Sendfile",
        "name": "rangeLength",
        "normalized": "",
        "package": "simple-sendfile",
        "partial": "Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:rangeOffset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Sendfile",
        "fct-package": "simple-sendfile",
        "fct-signature": "Integer",
        "fct-source": "src/Network-Sendfile-Types.html#FileRange",
        "fct-type": "function",
        "title": "rangeOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Sendfile",
        "module": "Network.Sendfile",
        "name": "rangeOffset",
        "normalized": "",
        "package": "simple-sendfile",
        "partial": "Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:sendfile",
      "description": {
        "fct-descr": "\u003cp\u003eSimple binding for sendfile() of Linux.\n Used system calls:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e EntireFile -- open(), stat(), sendfile(), and close()\n\u003c/li\u003e\u003cli\u003e PartOfFile -- open(), sendfile(), and close()\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the size of the file is unknown when sending the entire file,\n specifying PartOfFile is much faster.\n\u003c/p\u003e\u003cp\u003eThe fourth action argument is called when a file is sent as chunks.\n Chucking is inevitable if the socket is non-blocking (this is the\n default) and the file is large. The action is called after a chunk\n is sent and bofore waiting the socket to be ready for writing.\n\u003c/p\u003e",
        "fct-module": "Network.Sendfile",
        "fct-package": "simple-sendfile",
        "fct-signature": "Socket -\u003e FilePath -\u003e FileRange -\u003e IO () -\u003e IO ()",
        "fct-source": "src/Network-Sendfile-Linux.html#sendfile",
        "fct-type": "function",
        "title": "sendfile"
      },
      "index": {
        "description": "Simple binding for sendfile of Linux Used system calls EntireFile open stat sendfile and close PartOfFile open sendfile and close If the size of the file is unknown when sending the entire file specifying PartOfFile is much faster The fourth action argument is called when file is sent as chunks Chucking is inevitable if the socket is non-blocking this is the default and the file is large The action is called after chunk is sent and bofore waiting the socket to be ready for writing",
        "hierarchy": "Network Sendfile",
        "module": "Network.Sendfile",
        "name": "sendfile",
        "normalized": "Socket-\u003eFilePath-\u003eFileRange-\u003eIO()-\u003eIO()",
        "package": "simple-sendfile",
        "partial": "",
        "signature": "Socket-\u003eFilePath-\u003eFileRange-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:sendfileFd",
      "description": {
        "fct-descr": "\u003cp\u003eSimple binding for sendfile() of Linux.\n Used system calls:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e EntireFile -- stat() and sendfile()\n\u003c/li\u003e\u003cli\u003e PartOfFile -- sendfile()\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the size of the file is unknown when sending the entire file,\n specifying PartOfFile is much faster.\n\u003c/p\u003e\u003cp\u003eThe fourth action argument is called when a file is sent as chunks.\n Chucking is inevitable if the socket is non-blocking (this is the\n default) and the file is large. The action is called after a chunk\n is sent and bofore waiting the socket to be ready for writing.\n\u003c/p\u003e",
        "fct-module": "Network.Sendfile",
        "fct-package": "simple-sendfile",
        "fct-signature": "Socket -\u003e Fd -\u003e FileRange -\u003e IO () -\u003e IO ()",
        "fct-source": "src/Network-Sendfile-Linux.html#sendfileFd",
        "fct-type": "function",
        "title": "sendfileFd"
      },
      "index": {
        "description": "Simple binding for sendfile of Linux Used system calls EntireFile stat and sendfile PartOfFile sendfile If the size of the file is unknown when sending the entire file specifying PartOfFile is much faster The fourth action argument is called when file is sent as chunks Chucking is inevitable if the socket is non-blocking this is the default and the file is large The action is called after chunk is sent and bofore waiting the socket to be ready for writing",
        "hierarchy": "Network Sendfile",
        "module": "Network.Sendfile",
        "name": "sendfileFd",
        "normalized": "Socket-\u003eFd-\u003eFileRange-\u003eIO()-\u003eIO()",
        "package": "simple-sendfile",
        "partial": "Fd",
        "signature": "Socket-\u003eFd-\u003eFileRange-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:sendfileFdWithHeader",
      "description": {
        "fct-descr": "\u003cp\u003eSimple binding for send() and sendfile() of Linux.\n Used system calls:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e EntireFile -- send(), stat() and sendfile()\n\u003c/li\u003e\u003cli\u003e PartOfFile -- send() and sendfile()\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe fifth header is sent with send() + the MSG_MORE flag. If the\n file is small enough, the header and the file is send in a single\n TCP packet.\n\u003c/p\u003e\u003cp\u003eIf the size of the file is unknown when sending the entire file,\n specifying PartOfFile is much faster.\n\u003c/p\u003e\u003cp\u003eThe fourth action argument is called when a file is sent as chunks.\n Chucking is inevitable if the socket is non-blocking (this is the\n default) and the file is large. The action is called after a chunk\n is sent and bofore waiting the socket to be ready for writing.\n\u003c/p\u003e",
        "fct-module": "Network.Sendfile",
        "fct-package": "simple-sendfile",
        "fct-signature": "Socket -\u003e Fd -\u003e FileRange -\u003e IO () -\u003e [ByteString] -\u003e IO ()",
        "fct-source": "src/Network-Sendfile-Linux.html#sendfileFdWithHeader",
        "fct-type": "function",
        "title": "sendfileFdWithHeader"
      },
      "index": {
        "description": "Simple binding for send and sendfile of Linux Used system calls EntireFile send stat and sendfile PartOfFile send and sendfile The fifth header is sent with send the MSG MORE flag If the file is small enough the header and the file is send in single TCP packet If the size of the file is unknown when sending the entire file specifying PartOfFile is much faster The fourth action argument is called when file is sent as chunks Chucking is inevitable if the socket is non-blocking this is the default and the file is large The action is called after chunk is sent and bofore waiting the socket to be ready for writing",
        "hierarchy": "Network Sendfile",
        "module": "Network.Sendfile",
        "name": "sendfileFdWithHeader",
        "normalized": "Socket-\u003eFd-\u003eFileRange-\u003eIO()-\u003e[ByteString]-\u003eIO()",
        "package": "simple-sendfile",
        "partial": "Fd With Header",
        "signature": "Socket-\u003eFd-\u003eFileRange-\u003eIO()-\u003e[ByteString]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:sendfileWithHeader",
      "description": {
        "fct-descr": "\u003cp\u003eSimple binding for send() and sendfile() of Linux.\n Used system calls:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e EntireFile -- send(), open(), stat(), sendfile(), and close()\n\u003c/li\u003e\u003cli\u003e PartOfFile -- send(), open(), sendfile(), and close()\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe fifth header is sent with send() + the MSG_MORE flag. If the\n file is small enough, the header and the file is send in a single\n TCP packet.\n\u003c/p\u003e\u003cp\u003eIf the size of the file is unknown when sending the entire file,\n specifying PartOfFile is much faster.\n\u003c/p\u003e\u003cp\u003eThe fourth action argument is called when a file is sent as chunks.\n Chucking is inevitable if the socket is non-blocking (this is the\n default) and the file is large. The action is called after a chunk\n is sent and bofore waiting the socket to be ready for writing.\n\u003c/p\u003e",
        "fct-module": "Network.Sendfile",
        "fct-package": "simple-sendfile",
        "fct-signature": "Socket -\u003e FilePath -\u003e FileRange -\u003e IO () -\u003e [ByteString] -\u003e IO ()",
        "fct-source": "src/Network-Sendfile-Linux.html#sendfileWithHeader",
        "fct-type": "function",
        "title": "sendfileWithHeader"
      },
      "index": {
        "description": "Simple binding for send and sendfile of Linux Used system calls EntireFile send open stat sendfile and close PartOfFile send open sendfile and close The fifth header is sent with send the MSG MORE flag If the file is small enough the header and the file is send in single TCP packet If the size of the file is unknown when sending the entire file specifying PartOfFile is much faster The fourth action argument is called when file is sent as chunks Chucking is inevitable if the socket is non-blocking this is the default and the file is large The action is called after chunk is sent and bofore waiting the socket to be ready for writing",
        "hierarchy": "Network Sendfile",
        "module": "Network.Sendfile",
        "name": "sendfileWithHeader",
        "normalized": "Socket-\u003eFilePath-\u003eFileRange-\u003eIO()-\u003e[ByteString]-\u003eIO()",
        "package": "simple-sendfile",
        "partial": "With Header",
        "signature": "Socket-\u003eFilePath-\u003eFileRange-\u003eIO()-\u003e[ByteString]-\u003eIO()"
      }
    }
  }
]