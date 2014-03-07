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
        "word": "simple-sendfile"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCross platform library for the sendfile system call.\n  This library tries to call minimum system calls which\n  are the bottleneck of web servers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Sendfile",
          "name": "Sendfile",
          "package": "simple-sendfile",
          "source": "src/Network-Sendfile.html",
          "type": "module"
        },
        "index": {
          "description": "Cross platform library for the sendfile system call This library tries to call minimum system calls which are the bottleneck of web servers",
          "hierarchy": "Network Sendfile",
          "module": "Network.Sendfile",
          "name": "Sendfile",
          "package": "simple-sendfile",
          "partial": "Sendfile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile range for \u003ccode\u003esendfile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Sendfile",
          "name": "FileRange",
          "package": "simple-sendfile",
          "source": "src/Network-Sendfile-Types.html#FileRange",
          "type": "data"
        },
        "index": {
          "description": "File range for sendfile",
          "hierarchy": "Network Sendfile",
          "module": "Network.Sendfile",
          "name": "FileRange",
          "package": "simple-sendfile",
          "partial": "File Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#t:FileRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Sendfile",
          "name": "EntireFile",
          "package": "simple-sendfile",
          "signature": "EntireFile",
          "source": "src/Network-Sendfile-Types.html#FileRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Sendfile",
          "module": "Network.Sendfile",
          "name": "EntireFile",
          "package": "simple-sendfile",
          "partial": "Entire File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:EntireFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Sendfile",
          "name": "PartOfFile",
          "package": "simple-sendfile",
          "signature": "PartOfFile",
          "source": "src/Network-Sendfile-Types.html#FileRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Sendfile",
          "module": "Network.Sendfile",
          "name": "PartOfFile",
          "package": "simple-sendfile",
          "partial": "Part Of File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:PartOfFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Sendfile",
          "name": "rangeLength",
          "package": "simple-sendfile",
          "signature": "Integer",
          "source": "src/Network-Sendfile-Types.html#FileRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Sendfile",
          "module": "Network.Sendfile",
          "name": "rangeLength",
          "package": "simple-sendfile",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:rangeLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Sendfile",
          "name": "rangeOffset",
          "package": "simple-sendfile",
          "signature": "Integer",
          "source": "src/Network-Sendfile-Types.html#FileRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Sendfile",
          "module": "Network.Sendfile",
          "name": "rangeOffset",
          "package": "simple-sendfile",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:rangeOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple binding for sendfile() of Linux.\n Used system calls:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e EntireFile -- open(), stat(), sendfile(), and close()\n\u003c/li\u003e\u003cli\u003e PartOfFile -- open(), sendfile(), and close()\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the size of the file is unknown when sending the entire file,\n specifying PartOfFile is much faster.\n\u003c/p\u003e\u003cp\u003eThe fourth action argument is called when a file is sent as chunks.\n Chucking is inevitable if the socket is non-blocking (this is the\n default) and the file is large. The action is called after a chunk\n is sent and bofore waiting the socket to be ready for writing.\n\u003c/p\u003e",
          "module": "Network.Sendfile",
          "name": "sendfile",
          "package": "simple-sendfile",
          "signature": "Socket -\u003e FilePath -\u003e FileRange -\u003e IO () -\u003e IO ()",
          "source": "src/Network-Sendfile-Linux.html#sendfile",
          "type": "function"
        },
        "index": {
          "description": "Simple binding for sendfile of Linux Used system calls EntireFile open stat sendfile and close PartOfFile open sendfile and close If the size of the file is unknown when sending the entire file specifying PartOfFile is much faster The fourth action argument is called when file is sent as chunks Chucking is inevitable if the socket is non-blocking this is the default and the file is large The action is called after chunk is sent and bofore waiting the socket to be ready for writing",
          "hierarchy": "Network Sendfile",
          "module": "Network.Sendfile",
          "name": "sendfile",
          "normalized": "Socket-\u003eFilePath-\u003eFileRange-\u003eIO()-\u003eIO()",
          "package": "simple-sendfile",
          "signature": "Socket-\u003eFilePath-\u003eFileRange-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:sendfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple binding for sendfile() of Linux.\n Used system calls:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e EntireFile -- stat() and sendfile()\n\u003c/li\u003e\u003cli\u003e PartOfFile -- sendfile()\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the size of the file is unknown when sending the entire file,\n specifying PartOfFile is much faster.\n\u003c/p\u003e\u003cp\u003eThe fourth action argument is called when a file is sent as chunks.\n Chucking is inevitable if the socket is non-blocking (this is the\n default) and the file is large. The action is called after a chunk\n is sent and bofore waiting the socket to be ready for writing.\n\u003c/p\u003e",
          "module": "Network.Sendfile",
          "name": "sendfileFd",
          "package": "simple-sendfile",
          "signature": "Socket -\u003e Fd -\u003e FileRange -\u003e IO () -\u003e IO ()",
          "source": "src/Network-Sendfile-Linux.html#sendfileFd",
          "type": "function"
        },
        "index": {
          "description": "Simple binding for sendfile of Linux Used system calls EntireFile stat and sendfile PartOfFile sendfile If the size of the file is unknown when sending the entire file specifying PartOfFile is much faster The fourth action argument is called when file is sent as chunks Chucking is inevitable if the socket is non-blocking this is the default and the file is large The action is called after chunk is sent and bofore waiting the socket to be ready for writing",
          "hierarchy": "Network Sendfile",
          "module": "Network.Sendfile",
          "name": "sendfileFd",
          "normalized": "Socket-\u003eFd-\u003eFileRange-\u003eIO()-\u003eIO()",
          "package": "simple-sendfile",
          "partial": "Fd",
          "signature": "Socket-\u003eFd-\u003eFileRange-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:sendfileFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple binding for send() and sendfile() of Linux.\n Used system calls:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e EntireFile -- send(), stat() and sendfile()\n\u003c/li\u003e\u003cli\u003e PartOfFile -- send() and sendfile()\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe fifth header is sent with send() + the MSG_MORE flag. If the\n file is small enough, the header and the file is send in a single\n TCP packet.\n\u003c/p\u003e\u003cp\u003eIf the size of the file is unknown when sending the entire file,\n specifying PartOfFile is much faster.\n\u003c/p\u003e\u003cp\u003eThe fourth action argument is called when a file is sent as chunks.\n Chucking is inevitable if the socket is non-blocking (this is the\n default) and the file is large. The action is called after a chunk\n is sent and bofore waiting the socket to be ready for writing.\n\u003c/p\u003e",
          "module": "Network.Sendfile",
          "name": "sendfileFdWithHeader",
          "package": "simple-sendfile",
          "signature": "Socket -\u003e Fd -\u003e FileRange -\u003e IO () -\u003e [ByteString] -\u003e IO ()",
          "source": "src/Network-Sendfile-Linux.html#sendfileFdWithHeader",
          "type": "function"
        },
        "index": {
          "description": "Simple binding for send and sendfile of Linux Used system calls EntireFile send stat and sendfile PartOfFile send and sendfile The fifth header is sent with send the MSG MORE flag If the file is small enough the header and the file is send in single TCP packet If the size of the file is unknown when sending the entire file specifying PartOfFile is much faster The fourth action argument is called when file is sent as chunks Chucking is inevitable if the socket is non-blocking this is the default and the file is large The action is called after chunk is sent and bofore waiting the socket to be ready for writing",
          "hierarchy": "Network Sendfile",
          "module": "Network.Sendfile",
          "name": "sendfileFdWithHeader",
          "normalized": "Socket-\u003eFd-\u003eFileRange-\u003eIO()-\u003e[ByteString]-\u003eIO()",
          "package": "simple-sendfile",
          "partial": "Fd With Header",
          "signature": "Socket-\u003eFd-\u003eFileRange-\u003eIO()-\u003e[ByteString]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:sendfileFdWithHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple binding for send() and sendfile() of Linux.\n Used system calls:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e EntireFile -- send(), open(), stat(), sendfile(), and close()\n\u003c/li\u003e\u003cli\u003e PartOfFile -- send(), open(), sendfile(), and close()\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe fifth header is sent with send() + the MSG_MORE flag. If the\n file is small enough, the header and the file is send in a single\n TCP packet.\n\u003c/p\u003e\u003cp\u003eIf the size of the file is unknown when sending the entire file,\n specifying PartOfFile is much faster.\n\u003c/p\u003e\u003cp\u003eThe fourth action argument is called when a file is sent as chunks.\n Chucking is inevitable if the socket is non-blocking (this is the\n default) and the file is large. The action is called after a chunk\n is sent and bofore waiting the socket to be ready for writing.\n\u003c/p\u003e",
          "module": "Network.Sendfile",
          "name": "sendfileWithHeader",
          "package": "simple-sendfile",
          "signature": "Socket -\u003e FilePath -\u003e FileRange -\u003e IO () -\u003e [ByteString] -\u003e IO ()",
          "source": "src/Network-Sendfile-Linux.html#sendfileWithHeader",
          "type": "function"
        },
        "index": {
          "description": "Simple binding for send and sendfile of Linux Used system calls EntireFile send open stat sendfile and close PartOfFile send open sendfile and close The fifth header is sent with send the MSG MORE flag If the file is small enough the header and the file is send in single TCP packet If the size of the file is unknown when sending the entire file specifying PartOfFile is much faster The fourth action argument is called when file is sent as chunks Chucking is inevitable if the socket is non-blocking this is the default and the file is large The action is called after chunk is sent and bofore waiting the socket to be ready for writing",
          "hierarchy": "Network Sendfile",
          "module": "Network.Sendfile",
          "name": "sendfileWithHeader",
          "normalized": "Socket-\u003eFilePath-\u003eFileRange-\u003eIO()-\u003e[ByteString]-\u003eIO()",
          "package": "simple-sendfile",
          "partial": "With Header",
          "signature": "Socket-\u003eFilePath-\u003eFileRange-\u003eIO()-\u003e[ByteString]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sendfile/docs/Network-Sendfile.html#v:sendfileWithHeader"
      }
    }
  ]
]