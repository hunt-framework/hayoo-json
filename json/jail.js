[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Jail.html",
        "fct-type": "module",
        "title": "Jail"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "Jail",
        "normalized": "",
        "package": "jail",
        "partial": "Jail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:BufferMode",
      "description": {
        "fct-descr": "\u003cp\u003eThree kinds of buffering are supported: line-buffering, \n block-buffering or no-buffering.  These modes have the following\n effects. For output, items are written out, or \u003cem\u003eflushed\u003c/em\u003e,\n from the internal buffer according to the buffer mode:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eline-buffering\u003c/em\u003e: the entire output buffer is flushed\n    whenever a newline is output, the buffer overflows, \n    a System.IO.hFlush is issued, or the handle is closed.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eblock-buffering\u003c/em\u003e: the entire buffer is written out whenever it\n    overflows, a System.IO.hFlush is issued, or the handle is closed.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eno-buffering\u003c/em\u003e: output is written immediately, and never stored\n    in the buffer.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn implementation is free to flush the buffer more frequently,\n but not less frequently, than specified above.\n The output buffer is emptied as soon as it has been written out.\n\u003c/p\u003e\u003cp\u003eSimilarly, input occurs according to the buffer mode for the handle:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eline-buffering\u003c/em\u003e: when the buffer for the handle is not empty,\n    the next item is obtained from the buffer; otherwise, when the\n    buffer is empty, characters up to and including the next newline\n    character are read into the buffer.  No characters are available\n    until the newline character is available or the buffer is full.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eblock-buffering\u003c/em\u003e: when the buffer for the handle becomes empty,\n    the next block of data is read into the buffer.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eno-buffering\u003c/em\u003e: the next input item is read and returned.\n    The System.IO.hLookAhead operation implies that even a no-buffered\n    handle may require a one-character buffer.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe default buffering mode when a handle is opened is\n implementation-dependent and may depend on the file system object\n which is attached to that handle.\n For most implementations, physical files will normally be block-buffered \n and terminals will normally be line-buffered.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "BufferMode"
      },
      "index": {
        "description": "Three kinds of buffering are supported line-buffering block-buffering or no-buffering These modes have the following effects For output items are written out or flushed from the internal buffer according to the buffer mode line-buffering the entire output buffer is flushed whenever newline is output the buffer overflows System.IO.hFlush is issued or the handle is closed block-buffering the entire buffer is written out whenever it overflows System.IO.hFlush is issued or the handle is closed no-buffering output is written immediately and never stored in the buffer An implementation is free to flush the buffer more frequently but not less frequently than specified above The output buffer is emptied as soon as it has been written out Similarly input occurs according to the buffer mode for the handle line-buffering when the buffer for the handle is not empty the next item is obtained from the buffer otherwise when the buffer is empty characters up to and including the next newline character are read into the buffer No characters are available until the newline character is available or the buffer is full block-buffering when the buffer for the handle becomes empty the next block of data is read into the buffer no-buffering the next input item is read and returned The System.IO.hLookAhead operation implies that even no-buffered handle may require one-character buffer The default buffering mode when handle is opened is implementation-dependent and may depend on the file system object which is attached to that handle For most implementations physical files will normally be block-buffered and terminals will normally be line-buffered",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "BufferMode",
        "normalized": "",
        "package": "jail",
        "partial": "Buffer Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:FilePath",
      "description": {
        "fct-descr": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "FilePath"
      },
      "index": {
        "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "FilePath",
        "normalized": "",
        "package": "jail",
        "partial": "File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:Handle",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell defines operations to read and write characters from and to files,\n represented by values of type \u003ccode\u003eHandle\u003c/code\u003e.  Each value of this type is a\n \u003cem\u003ehandle\u003c/em\u003e: a record used by the Haskell run-time system to \u003cem\u003emanage\u003c/em\u003e I/O\n with file system objects.  A handle has at least the following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e whether it manages input or output or both;\n\u003c/li\u003e\u003cli\u003e whether it is \u003cem\u003eopen\u003c/em\u003e, \u003cem\u003eclosed\u003c/em\u003e or \u003cem\u003esemi-closed\u003c/em\u003e;\n\u003c/li\u003e\u003cli\u003e whether the object is seekable;\n\u003c/li\u003e\u003cli\u003e whether buffering is disabled, or enabled on a line or block basis;\n\u003c/li\u003e\u003cli\u003e a buffer (whose length may be zero).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMost handles will also have a current I/O position indicating where the next\n input or output operation will occur.  A handle is \u003cem\u003ereadable\u003c/em\u003e if it\n manages only input or both input and output; likewise, it is \u003cem\u003ewritable\u003c/em\u003e if\n it manages only output or both input and output.  A handle is \u003cem\u003eopen\u003c/em\u003e when\n first allocated.\n Once it is closed it can no longer be used for either input or output,\n though an implementation cannot re-use its storage while references\n remain to it.  Handles are in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e classes.  The string\n produced by showing a handle is system dependent; it should include\n enough information to identify the handle for debugging.  A handle is\n equal according to \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e only to itself; no attempt\n is made to compare the internal state of different handles for equality.\n\u003c/p\u003e\u003cp\u003eGHC note: a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e will be automatically closed when the garbage\n collector detects that it has become unreferenced by the program.\n However, relying on this behaviour is not generally recommended:\n the garbage collector is unpredictable.  If possible, use explicit\n an explicit hClose to close \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es when they are no longer\n required.  GHC does not currently attempt to free up file\n descriptors when they have run out, it is your responsibility to\n ensure that this doesn't happen.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Handle"
      },
      "index": {
        "description": "Haskell defines operations to read and write characters from and to files represented by values of type Handle Each value of this type is handle record used by the Haskell run-time system to manage with file system objects handle has at least the following properties whether it manages input or output or both whether it is open closed or semi-closed whether the object is seekable whether buffering is disabled or enabled on line or block basis buffer whose length may be zero Most handles will also have current position indicating where the next input or output operation will occur handle is readable if it manages only input or both input and output likewise it is writable if it manages only output or both input and output handle is open when first allocated Once it is closed it can no longer be used for either input or output though an implementation cannot re-use its storage while references remain to it Handles are in the Show and Eq classes The string produced by showing handle is system dependent it should include enough information to identify the handle for debugging handle is equal according to only to itself no attempt is made to compare the internal state of different handles for equality GHC note Handle will be automatically closed when the garbage collector detects that it has become unreferenced by the program However relying on this behaviour is not generally recommended the garbage collector is unpredictable If possible use explicit an explicit hClose to close Handle when they are no longer required GHC does not currently attempt to free up file descriptors when they have run out it is your responsibility to ensure that this doesn happen",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "Handle",
        "normalized": "",
        "package": "jail",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:HandlePosn",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "HandlePosn"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "HandlePosn",
        "normalized": "",
        "package": "jail",
        "partial": "Handle Posn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:IO",
      "description": {
        "fct-descr": "\u003cp\u003eThe jailed IO monad.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "data",
        "fct-source": "src/System-IO-Jail.html#IO",
        "fct-type": "data",
        "title": "IO"
      },
      "index": {
        "description": "The jailed IO monad",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "IO",
        "normalized": "",
        "package": "jail",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:IOMode",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IOMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "IOMode",
        "normalized": "",
        "package": "jail",
        "partial": "IOMode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:JailIO",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e, but for jailed computations.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "class",
        "fct-source": "src/System-IO-Jail.html#JailIO",
        "fct-type": "class",
        "title": "JailIO"
      },
      "index": {
        "description": "Like MonadIO but for jailed computations",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "JailIO",
        "normalized": "",
        "package": "jail",
        "partial": "Jail IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:SeekMode",
      "description": {
        "fct-descr": "\u003cp\u003eA mode that determines the effect of hSeek \u003ccode\u003ehdl mode i\u003c/code\u003e, as follows:\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SeekMode"
      },
      "index": {
        "description": "mode that determines the effect of hSeek hdl mode as follows",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "SeekMode",
        "normalized": "",
        "package": "jail",
        "partial": "Seek Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:AbsoluteSeek",
      "description": {
        "fct-descr": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "AbsoluteSeek",
        "fct-type": "function",
        "title": "AbsoluteSeek"
      },
      "index": {
        "description": "the position of hdl is set to",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "AbsoluteSeek",
        "normalized": "",
        "package": "jail",
        "partial": "Absolute Seek",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:AppendMode",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "AppendMode",
        "fct-type": "function",
        "title": "AppendMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "AppendMode",
        "normalized": "",
        "package": "jail",
        "partial": "Append Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:BlockBuffering",
      "description": {
        "fct-descr": "\u003cp\u003eblock-buffering should be enabled if possible.\n The size of the buffer is \u003ccode\u003en\u003c/code\u003e items if the argument\n is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e and is otherwise implementation-dependent.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "BlockBuffering (Maybe Int)",
        "fct-type": "function",
        "title": "BlockBuffering"
      },
      "index": {
        "description": "block-buffering should be enabled if possible The size of the buffer is items if the argument is Just and is otherwise implementation-dependent",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "BlockBuffering",
        "normalized": "",
        "package": "jail",
        "partial": "Block Buffering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:LineBuffering",
      "description": {
        "fct-descr": "\u003cp\u003eline-buffering should be enabled if possible.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "LineBuffering",
        "fct-type": "function",
        "title": "LineBuffering"
      },
      "index": {
        "description": "line-buffering should be enabled if possible",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "LineBuffering",
        "normalized": "",
        "package": "jail",
        "partial": "Line Buffering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:NoBuffering",
      "description": {
        "fct-descr": "\u003cp\u003ebuffering is disabled if possible.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "NoBuffering",
        "fct-type": "function",
        "title": "NoBuffering"
      },
      "index": {
        "description": "buffering is disabled if possible",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "NoBuffering",
        "normalized": "",
        "package": "jail",
        "partial": "No Buffering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:ReadMode",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "ReadMode",
        "fct-type": "function",
        "title": "ReadMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "ReadMode",
        "normalized": "",
        "package": "jail",
        "partial": "Read Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:ReadWriteMode",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "ReadWriteMode",
        "fct-type": "function",
        "title": "ReadWriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "ReadWriteMode",
        "normalized": "",
        "package": "jail",
        "partial": "Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:RelativeSeek",
      "description": {
        "fct-descr": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the current position.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "RelativeSeek",
        "fct-type": "function",
        "title": "RelativeSeek"
      },
      "index": {
        "description": "the position of hdl is set to offset from the current position",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "RelativeSeek",
        "normalized": "",
        "package": "jail",
        "partial": "Relative Seek",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:SeekFromEnd",
      "description": {
        "fct-descr": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the end of the file.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "SeekFromEnd",
        "fct-type": "function",
        "title": "SeekFromEnd"
      },
      "index": {
        "description": "the position of hdl is set to offset from the end of the file",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "SeekFromEnd",
        "normalized": "",
        "package": "jail",
        "partial": "Seek From End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:WriteMode",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "WriteMode",
        "fct-type": "function",
        "title": "WriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "WriteMode",
        "normalized": "",
        "package": "jail",
        "partial": "Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:appendFile",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#appendFile",
        "fct-type": "function",
        "title": "appendFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "appendFile",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "jail",
        "partial": "File",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:getChar",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "IO Char",
        "fct-source": "src/System-IO-Jail.html#getChar",
        "fct-type": "function",
        "title": "getChar"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "getChar",
        "normalized": "",
        "package": "jail",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:getContents",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "IO String",
        "fct-source": "src/System-IO-Jail.html#getContents",
        "fct-type": "function",
        "title": "getContents"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "getContents",
        "normalized": "",
        "package": "jail",
        "partial": "Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:getLine",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "IO String",
        "fct-source": "src/System-IO-Jail.html#getLine",
        "fct-type": "function",
        "title": "getLine"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "getLine",
        "normalized": "",
        "package": "jail",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hClose",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hClose",
        "fct-type": "function",
        "title": "hClose"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hClose",
        "normalized": "Handle-\u003eIO()",
        "package": "jail",
        "partial": "Close",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hFileSize",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Integer",
        "fct-source": "src/System-IO-Jail.html#hFileSize",
        "fct-type": "function",
        "title": "hFileSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hFileSize",
        "normalized": "Handle-\u003eIO Integer",
        "package": "jail",
        "partial": "File Size",
        "signature": "Handle-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hFlush",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hFlush",
        "fct-type": "function",
        "title": "hFlush"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hFlush",
        "normalized": "Handle-\u003eIO()",
        "package": "jail",
        "partial": "Flush",
        "signature": "Handle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetBuf",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e Ptr a -\u003e Int -\u003e IO Int",
        "fct-source": "src/System-IO-Jail.html#hGetBuf",
        "fct-type": "function",
        "title": "hGetBuf"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hGetBuf",
        "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eIO Int",
        "package": "jail",
        "partial": "Get Buf",
        "signature": "Handle-\u003ePtr a-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetBufNonBlocking",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e Ptr a -\u003e Int -\u003e IO Int",
        "fct-source": "src/System-IO-Jail.html#hGetBufNonBlocking",
        "fct-type": "function",
        "title": "hGetBufNonBlocking"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hGetBufNonBlocking",
        "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eIO Int",
        "package": "jail",
        "partial": "Get Buf Non Blocking",
        "signature": "Handle-\u003ePtr a-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetBuffering",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO BufferMode",
        "fct-source": "src/System-IO-Jail.html#hGetBuffering",
        "fct-type": "function",
        "title": "hGetBuffering"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hGetBuffering",
        "normalized": "Handle-\u003eIO BufferMode",
        "package": "jail",
        "partial": "Get Buffering",
        "signature": "Handle-\u003eIO BufferMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetChar",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Char",
        "fct-source": "src/System-IO-Jail.html#hGetChar",
        "fct-type": "function",
        "title": "hGetChar"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hGetChar",
        "normalized": "Handle-\u003eIO Char",
        "package": "jail",
        "partial": "Get Char",
        "signature": "Handle-\u003eIO Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetContents",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO String",
        "fct-source": "src/System-IO-Jail.html#hGetContents",
        "fct-type": "function",
        "title": "hGetContents"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hGetContents",
        "normalized": "Handle-\u003eIO String",
        "package": "jail",
        "partial": "Get Contents",
        "signature": "Handle-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetEcho",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Bool",
        "fct-source": "src/System-IO-Jail.html#hGetEcho",
        "fct-type": "function",
        "title": "hGetEcho"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hGetEcho",
        "normalized": "Handle-\u003eIO Bool",
        "package": "jail",
        "partial": "Get Echo",
        "signature": "Handle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetLine",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO String",
        "fct-source": "src/System-IO-Jail.html#hGetLine",
        "fct-type": "function",
        "title": "hGetLine"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hGetLine",
        "normalized": "Handle-\u003eIO String",
        "package": "jail",
        "partial": "Get Line",
        "signature": "Handle-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetPosn",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO HandlePosn",
        "fct-source": "src/System-IO-Jail.html#hGetPosn",
        "fct-type": "function",
        "title": "hGetPosn"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hGetPosn",
        "normalized": "Handle-\u003eIO HandlePosn",
        "package": "jail",
        "partial": "Get Posn",
        "signature": "Handle-\u003eIO HandlePosn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsClosed",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Bool",
        "fct-source": "src/System-IO-Jail.html#hIsClosed",
        "fct-type": "function",
        "title": "hIsClosed"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hIsClosed",
        "normalized": "Handle-\u003eIO Bool",
        "package": "jail",
        "partial": "Is Closed",
        "signature": "Handle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsEOF",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Bool",
        "fct-source": "src/System-IO-Jail.html#hIsEOF",
        "fct-type": "function",
        "title": "hIsEOF"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hIsEOF",
        "normalized": "Handle-\u003eIO Bool",
        "package": "jail",
        "partial": "Is EOF",
        "signature": "Handle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsOpen",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Bool",
        "fct-source": "src/System-IO-Jail.html#hIsOpen",
        "fct-type": "function",
        "title": "hIsOpen"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hIsOpen",
        "normalized": "Handle-\u003eIO Bool",
        "package": "jail",
        "partial": "Is Open",
        "signature": "Handle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsReadable",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Bool",
        "fct-source": "src/System-IO-Jail.html#hIsReadable",
        "fct-type": "function",
        "title": "hIsReadable"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hIsReadable",
        "normalized": "Handle-\u003eIO Bool",
        "package": "jail",
        "partial": "Is Readable",
        "signature": "Handle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsSeekable",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Bool",
        "fct-source": "src/System-IO-Jail.html#hIsSeekable",
        "fct-type": "function",
        "title": "hIsSeekable"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hIsSeekable",
        "normalized": "Handle-\u003eIO Bool",
        "package": "jail",
        "partial": "Is Seekable",
        "signature": "Handle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsTerminalDevice",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Bool",
        "fct-source": "src/System-IO-Jail.html#hIsTerminalDevice",
        "fct-type": "function",
        "title": "hIsTerminalDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hIsTerminalDevice",
        "normalized": "Handle-\u003eIO Bool",
        "package": "jail",
        "partial": "Is Terminal Device",
        "signature": "Handle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsWritable",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Bool",
        "fct-source": "src/System-IO-Jail.html#hIsWritable",
        "fct-type": "function",
        "title": "hIsWritable"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hIsWritable",
        "normalized": "Handle-\u003eIO Bool",
        "package": "jail",
        "partial": "Is Writable",
        "signature": "Handle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hLookAhead",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Char",
        "fct-source": "src/System-IO-Jail.html#hLookAhead",
        "fct-type": "function",
        "title": "hLookAhead"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hLookAhead",
        "normalized": "Handle-\u003eIO Char",
        "package": "jail",
        "partial": "Look Ahead",
        "signature": "Handle-\u003eIO Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hPrint",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e a -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hPrint",
        "fct-type": "function",
        "title": "hPrint"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hPrint",
        "normalized": "Handle-\u003ea-\u003eIO()",
        "package": "jail",
        "partial": "Print",
        "signature": "Handle-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hPutBuf",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e Ptr a -\u003e Int -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hPutBuf",
        "fct-type": "function",
        "title": "hPutBuf"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hPutBuf",
        "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eIO()",
        "package": "jail",
        "partial": "Put Buf",
        "signature": "Handle-\u003ePtr a-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hPutBufNonBlocking",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e Ptr a -\u003e Int -\u003e IO Int",
        "fct-source": "src/System-IO-Jail.html#hPutBufNonBlocking",
        "fct-type": "function",
        "title": "hPutBufNonBlocking"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hPutBufNonBlocking",
        "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eIO Int",
        "package": "jail",
        "partial": "Put Buf Non Blocking",
        "signature": "Handle-\u003ePtr a-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hPutChar",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e Char -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hPutChar",
        "fct-type": "function",
        "title": "hPutChar"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hPutChar",
        "normalized": "Handle-\u003eChar-\u003eIO()",
        "package": "jail",
        "partial": "Put Char",
        "signature": "Handle-\u003eChar-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hPutStr",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hPutStr",
        "fct-type": "function",
        "title": "hPutStr"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hPutStr",
        "normalized": "Handle-\u003eString-\u003eIO()",
        "package": "jail",
        "partial": "Put Str",
        "signature": "Handle-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hPutStrLn",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hPutStrLn",
        "fct-type": "function",
        "title": "hPutStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hPutStrLn",
        "normalized": "Handle-\u003eString-\u003eIO()",
        "package": "jail",
        "partial": "Put Str Ln",
        "signature": "Handle-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hReady",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Bool",
        "fct-source": "src/System-IO-Jail.html#hReady",
        "fct-type": "function",
        "title": "hReady"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hReady",
        "normalized": "Handle-\u003eIO Bool",
        "package": "jail",
        "partial": "Ready",
        "signature": "Handle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hSeek",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e SeekMode -\u003e Integer -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hSeek",
        "fct-type": "function",
        "title": "hSeek"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hSeek",
        "normalized": "Handle-\u003eSeekMode-\u003eInteger-\u003eIO()",
        "package": "jail",
        "partial": "Seek",
        "signature": "Handle-\u003eSeekMode-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hSetBinaryMode",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e Bool -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hSetBinaryMode",
        "fct-type": "function",
        "title": "hSetBinaryMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hSetBinaryMode",
        "normalized": "Handle-\u003eBool-\u003eIO()",
        "package": "jail",
        "partial": "Set Binary Mode",
        "signature": "Handle-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hSetBuffering",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e BufferMode -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hSetBuffering",
        "fct-type": "function",
        "title": "hSetBuffering"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hSetBuffering",
        "normalized": "Handle-\u003eBufferMode-\u003eIO()",
        "package": "jail",
        "partial": "Set Buffering",
        "signature": "Handle-\u003eBufferMode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hSetEcho",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e Bool -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hSetEcho",
        "fct-type": "function",
        "title": "hSetEcho"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hSetEcho",
        "normalized": "Handle-\u003eBool-\u003eIO()",
        "package": "jail",
        "partial": "Set Echo",
        "signature": "Handle-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hSetFileSize",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e Integer -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hSetFileSize",
        "fct-type": "function",
        "title": "hSetFileSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hSetFileSize",
        "normalized": "Handle-\u003eInteger-\u003eIO()",
        "package": "jail",
        "partial": "Set File Size",
        "signature": "Handle-\u003eInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hSetPosn",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "HandlePosn -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#hSetPosn",
        "fct-type": "function",
        "title": "hSetPosn"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hSetPosn",
        "normalized": "HandlePosn-\u003eIO()",
        "package": "jail",
        "partial": "Set Posn",
        "signature": "HandlePosn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hShow",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO String",
        "fct-source": "src/System-IO-Jail.html#hShow",
        "fct-type": "function",
        "title": "hShow"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hShow",
        "normalized": "Handle-\u003eIO String",
        "package": "jail",
        "partial": "Show",
        "signature": "Handle-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hTell",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e IO Integer",
        "fct-source": "src/System-IO-Jail.html#hTell",
        "fct-type": "function",
        "title": "hTell"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hTell",
        "normalized": "Handle-\u003eIO Integer",
        "package": "jail",
        "partial": "Tell",
        "signature": "Handle-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hWaitForInput",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle -\u003e Int -\u003e IO Bool",
        "fct-source": "src/System-IO-Jail.html#hWaitForInput",
        "fct-type": "function",
        "title": "hWaitForInput"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "hWaitForInput",
        "normalized": "Handle-\u003eInt-\u003eIO Bool",
        "package": "jail",
        "partial": "Wait For Input",
        "signature": "Handle-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:interact",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "(String -\u003e String) -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#interact",
        "fct-type": "function",
        "title": "interact"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "interact",
        "normalized": "(String-\u003eString)-\u003eIO()",
        "package": "jail",
        "partial": "",
        "signature": "(String-\u003eString)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:isEOF",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-IO-Jail.html#isEOF",
        "fct-type": "function",
        "title": "isEOF"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "isEOF",
        "normalized": "",
        "package": "jail",
        "partial": "EOF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:jailIO",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/System-IO-Jail.html#jailIO",
        "fct-type": "method",
        "title": "jailIO"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "jailIO",
        "normalized": "IO a-\u003eb a",
        "package": "jail",
        "partial": "IO",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:openBinaryFile",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "FilePath -\u003e IOMode -\u003e IO Handle",
        "fct-source": "src/System-IO-Jail.html#openBinaryFile",
        "fct-type": "function",
        "title": "openBinaryFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "openBinaryFile",
        "normalized": "FilePath-\u003eIOMode-\u003eIO Handle",
        "package": "jail",
        "partial": "Binary File",
        "signature": "FilePath-\u003eIOMode-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:openBinaryTempFile",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "FilePath -\u003e String -\u003e IO (FilePath, Handle)",
        "fct-source": "src/System-IO-Jail.html#openBinaryTempFile",
        "fct-type": "function",
        "title": "openBinaryTempFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "openBinaryTempFile",
        "normalized": "FilePath-\u003eString-\u003eIO(FilePath,Handle)",
        "package": "jail",
        "partial": "Binary Temp File",
        "signature": "FilePath-\u003eString-\u003eIO(FilePath,Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:openFile",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "FilePath -\u003e IOMode -\u003e IO Handle",
        "fct-source": "src/System-IO-Jail.html#openFile",
        "fct-type": "function",
        "title": "openFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "openFile",
        "normalized": "FilePath-\u003eIOMode-\u003eIO Handle",
        "package": "jail",
        "partial": "File",
        "signature": "FilePath-\u003eIOMode-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:openTempFile",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "FilePath -\u003e String -\u003e IO (FilePath, Handle)",
        "fct-source": "src/System-IO-Jail.html#openTempFile",
        "fct-type": "function",
        "title": "openTempFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "openTempFile",
        "normalized": "FilePath-\u003eString-\u003eIO(FilePath,Handle)",
        "package": "jail",
        "partial": "Temp File",
        "signature": "FilePath-\u003eString-\u003eIO(FilePath,Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:print",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#print",
        "fct-type": "function",
        "title": "print"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "print",
        "normalized": "a-\u003eIO()",
        "package": "jail",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:putChar",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Char -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#putChar",
        "fct-type": "function",
        "title": "putChar"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "putChar",
        "normalized": "Char-\u003eIO()",
        "package": "jail",
        "partial": "Char",
        "signature": "Char-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:putStr",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#putStr",
        "fct-type": "function",
        "title": "putStr"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "putStr",
        "normalized": "String-\u003eIO()",
        "package": "jail",
        "partial": "Str",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:putStrLn",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "putStrLn",
        "normalized": "String-\u003eIO()",
        "package": "jail",
        "partial": "Str Ln",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:readFile",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "FilePath -\u003e IO String",
        "fct-source": "src/System-IO-Jail.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "readFile",
        "normalized": "FilePath-\u003eIO String",
        "package": "jail",
        "partial": "File",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:readIO",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "String -\u003e IO a",
        "fct-source": "src/System-IO-Jail.html#readIO",
        "fct-type": "function",
        "title": "readIO"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "readIO",
        "normalized": "String-\u003eIO a",
        "package": "jail",
        "partial": "IO",
        "signature": "String-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:readLn",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "IO a",
        "fct-source": "src/System-IO-Jail.html#readLn",
        "fct-type": "function",
        "title": "readLn"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "readLn",
        "normalized": "",
        "package": "jail",
        "partial": "Ln",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRun a jailed IO computation. The IO computation will be able to access all\nfiles that are within the specified jail directory. All file accesses outside\nthe jail directory will be refused. Only file handles opened from within the\njailed computation and the handles from the white list will be accessible to\nthe operations requiring a file handle. No smuggling in of foreign handles,\nborder patrol is very strict. When the jail path is specified as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e no\nfile access will be possible at all, this means the computation can only rely\non the white listed handles.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Maybe FilePath-\u003e [Handle]-\u003e IO a-\u003e IO a",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Run jailed IO computation The IO computation will be able to access all files that are within the specified jail directory All file accesses outside the jail directory will be refused Only file handles opened from within the jailed computation and the handles from the white list will be accessible to the operations requiring file handle No smuggling in of foreign handles border patrol is very strict When the jail path is specified as Nothing no file access will be possible at all this means the computation can only rely on the white listed handles",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "run",
        "normalized": "Maybe FilePath-\u003e[Handle]-\u003eIO a-\u003eIO a",
        "package": "jail",
        "partial": "",
        "signature": "Maybe FilePath-\u003e[Handle]-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:stderr",
      "description": {
        "fct-descr": "\u003cp\u003eA handle managing output to the Haskell program's standard error channel.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle",
        "fct-type": "function",
        "title": "stderr"
      },
      "index": {
        "description": "handle managing output to the Haskell program standard error channel",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "stderr",
        "normalized": "",
        "package": "jail",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:stdin",
      "description": {
        "fct-descr": "\u003cp\u003eA handle managing input from the Haskell program's standard input channel.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle",
        "fct-type": "function",
        "title": "stdin"
      },
      "index": {
        "description": "handle managing input from the Haskell program standard input channel",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "stdin",
        "normalized": "",
        "package": "jail",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:stdout",
      "description": {
        "fct-descr": "\u003cp\u003eA handle managing output to the Haskell program's standard output channel.\n\u003c/p\u003e",
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "Handle",
        "fct-type": "function",
        "title": "stdout"
      },
      "index": {
        "description": "handle managing output to the Haskell program standard output channel",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "stdout",
        "normalized": "",
        "package": "jail",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:withBinaryFile",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-IO-Jail.html#withBinaryFile",
        "fct-type": "function",
        "title": "withBinaryFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "withBinaryFile",
        "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
        "package": "jail",
        "partial": "Binary File",
        "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:withFile",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-IO-Jail.html#withFile",
        "fct-type": "function",
        "title": "withFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "withFile",
        "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
        "package": "jail",
        "partial": "File",
        "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:writeFile",
      "description": {
        "fct-module": "System.IO.Jail",
        "fct-package": "jail",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-Jail.html#writeFile",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Jail",
        "module": "System.IO.Jail",
        "name": "writeFile",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "jail",
        "partial": "File",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  }
]