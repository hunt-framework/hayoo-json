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
        "word": "jail"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "Jail",
          "package": "jail",
          "source": "src/System-IO-Jail.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "Jail",
          "package": "jail",
          "partial": "Jail",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThree kinds of buffering are supported: line-buffering, \n block-buffering or no-buffering.  These modes have the following\n effects. For output, items are written out, or \u003cem\u003eflushed\u003c/em\u003e,\n from the internal buffer according to the buffer mode:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eline-buffering\u003c/em\u003e: the entire output buffer is flushed\n    whenever a newline is output, the buffer overflows, \n    a System.IO.hFlush is issued, or the handle is closed.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eblock-buffering\u003c/em\u003e: the entire buffer is written out whenever it\n    overflows, a System.IO.hFlush is issued, or the handle is closed.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eno-buffering\u003c/em\u003e: output is written immediately, and never stored\n    in the buffer.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn implementation is free to flush the buffer more frequently,\n but not less frequently, than specified above.\n The output buffer is emptied as soon as it has been written out.\n\u003c/p\u003e\u003cp\u003eSimilarly, input occurs according to the buffer mode for the handle:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eline-buffering\u003c/em\u003e: when the buffer for the handle is not empty,\n    the next item is obtained from the buffer; otherwise, when the\n    buffer is empty, characters up to and including the next newline\n    character are read into the buffer.  No characters are available\n    until the newline character is available or the buffer is full.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eblock-buffering\u003c/em\u003e: when the buffer for the handle becomes empty,\n    the next block of data is read into the buffer.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eno-buffering\u003c/em\u003e: the next input item is read and returned.\n    The System.IO.hLookAhead operation implies that even a no-buffered\n    handle may require a one-character buffer.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe default buffering mode when a handle is opened is\n implementation-dependent and may depend on the file system object\n which is attached to that handle.\n For most implementations, physical files will normally be block-buffered \n and terminals will normally be line-buffered.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "BufferMode",
          "package": "jail",
          "type": "data"
        },
        "index": {
          "description": "Three kinds of buffering are supported line-buffering block-buffering or no-buffering These modes have the following effects For output items are written out or flushed from the internal buffer according to the buffer mode line-buffering the entire output buffer is flushed whenever newline is output the buffer overflows System.IO.hFlush is issued or the handle is closed block-buffering the entire buffer is written out whenever it overflows System.IO.hFlush is issued or the handle is closed no-buffering output is written immediately and never stored in the buffer An implementation is free to flush the buffer more frequently but not less frequently than specified above The output buffer is emptied as soon as it has been written out Similarly input occurs according to the buffer mode for the handle line-buffering when the buffer for the handle is not empty the next item is obtained from the buffer otherwise when the buffer is empty characters up to and including the next newline character are read into the buffer No characters are available until the newline character is available or the buffer is full block-buffering when the buffer for the handle becomes empty the next block of data is read into the buffer no-buffering the next input item is read and returned The System.IO.hLookAhead operation implies that even no-buffered handle may require one-character buffer The default buffering mode when handle is opened is implementation-dependent and may depend on the file system object which is attached to that handle For most implementations physical files will normally be block-buffered and terminals will normally be line-buffered",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "BufferMode",
          "package": "jail",
          "partial": "Buffer Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:BufferMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "FilePath",
          "package": "jail",
          "type": "type"
        },
        "index": {
          "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "FilePath",
          "package": "jail",
          "partial": "File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell defines operations to read and write characters from and to files,\n represented by values of type \u003ccode\u003eHandle\u003c/code\u003e.  Each value of this type is a\n \u003cem\u003ehandle\u003c/em\u003e: a record used by the Haskell run-time system to \u003cem\u003emanage\u003c/em\u003e I/O\n with file system objects.  A handle has at least the following properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e whether it manages input or output or both;\n\u003c/li\u003e\u003cli\u003e whether it is \u003cem\u003eopen\u003c/em\u003e, \u003cem\u003eclosed\u003c/em\u003e or \u003cem\u003esemi-closed\u003c/em\u003e;\n\u003c/li\u003e\u003cli\u003e whether the object is seekable;\n\u003c/li\u003e\u003cli\u003e whether buffering is disabled, or enabled on a line or block basis;\n\u003c/li\u003e\u003cli\u003e a buffer (whose length may be zero).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMost handles will also have a current I/O position indicating where the next\n input or output operation will occur.  A handle is \u003cem\u003ereadable\u003c/em\u003e if it\n manages only input or both input and output; likewise, it is \u003cem\u003ewritable\u003c/em\u003e if\n it manages only output or both input and output.  A handle is \u003cem\u003eopen\u003c/em\u003e when\n first allocated.\n Once it is closed it can no longer be used for either input or output,\n though an implementation cannot re-use its storage while references\n remain to it.  Handles are in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e classes.  The string\n produced by showing a handle is system dependent; it should include\n enough information to identify the handle for debugging.  A handle is\n equal according to \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e only to itself; no attempt\n is made to compare the internal state of different handles for equality.\n\u003c/p\u003e\u003cp\u003eGHC note: a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e will be automatically closed when the garbage\n collector detects that it has become unreferenced by the program.\n However, relying on this behaviour is not generally recommended:\n the garbage collector is unpredictable.  If possible, use explicit\n an explicit hClose to close \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es when they are no longer\n required.  GHC does not currently attempt to free up file\n descriptors when they have run out, it is your responsibility to\n ensure that this doesn't happen.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "Handle",
          "package": "jail",
          "type": "data"
        },
        "index": {
          "description": "Haskell defines operations to read and write characters from and to files represented by values of type Handle Each value of this type is handle record used by the Haskell run-time system to manage with file system objects handle has at least the following properties whether it manages input or output or both whether it is open closed or semi-closed whether the object is seekable whether buffering is disabled or enabled on line or block basis buffer whose length may be zero Most handles will also have current position indicating where the next input or output operation will occur handle is readable if it manages only input or both input and output likewise it is writable if it manages only output or both input and output handle is open when first allocated Once it is closed it can no longer be used for either input or output though an implementation cannot re-use its storage while references remain to it Handles are in the Show and Eq classes The string produced by showing handle is system dependent it should include enough information to identify the handle for debugging handle is equal according to only to itself no attempt is made to compare the internal state of different handles for equality GHC note Handle will be automatically closed when the garbage collector detects that it has become unreferenced by the program However relying on this behaviour is not generally recommended the garbage collector is unpredictable If possible use explicit an explicit hClose to close Handle when they are no longer required GHC does not currently attempt to free up file descriptors when they have run out it is your responsibility to ensure that this doesn happen",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "Handle",
          "package": "jail",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "HandlePosn",
          "package": "jail",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "HandlePosn",
          "package": "jail",
          "partial": "Handle Posn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:HandlePosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe jailed IO monad.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "IO",
          "package": "jail",
          "source": "src/System-IO-Jail.html#IO",
          "type": "data"
        },
        "index": {
          "description": "The jailed IO monad",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "IO",
          "package": "jail",
          "partial": "IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:IO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "IOMode",
          "package": "jail",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "IOMode",
          "package": "jail",
          "partial": "IOMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:IOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e, but for jailed computations.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "JailIO",
          "package": "jail",
          "source": "src/System-IO-Jail.html#JailIO",
          "type": "class"
        },
        "index": {
          "description": "Like MonadIO but for jailed computations",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "JailIO",
          "package": "jail",
          "partial": "Jail IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:JailIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mode that determines the effect of hSeek \u003ccode\u003ehdl mode i\u003c/code\u003e, as follows:\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "SeekMode",
          "package": "jail",
          "type": "data"
        },
        "index": {
          "description": "mode that determines the effect of hSeek hdl mode as follows",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "SeekMode",
          "package": "jail",
          "partial": "Seek Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#t:SeekMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "AbsoluteSeek",
          "package": "jail",
          "signature": "AbsoluteSeek",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "AbsoluteSeek",
          "package": "jail",
          "partial": "Absolute Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:AbsoluteSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "AppendMode",
          "package": "jail",
          "signature": "AppendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "AppendMode",
          "package": "jail",
          "partial": "Append Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:AppendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblock-buffering should be enabled if possible.\n The size of the buffer is \u003ccode\u003en\u003c/code\u003e items if the argument\n is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e and is otherwise implementation-dependent.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "BlockBuffering",
          "package": "jail",
          "signature": "BlockBuffering (Maybe Int)",
          "type": "function"
        },
        "index": {
          "description": "block-buffering should be enabled if possible The size of the buffer is items if the argument is Just and is otherwise implementation-dependent",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "BlockBuffering",
          "package": "jail",
          "partial": "Block Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:BlockBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eline-buffering should be enabled if possible.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "LineBuffering",
          "package": "jail",
          "signature": "LineBuffering",
          "type": "function"
        },
        "index": {
          "description": "line-buffering should be enabled if possible",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "LineBuffering",
          "package": "jail",
          "partial": "Line Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:LineBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuffering is disabled if possible.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "NoBuffering",
          "package": "jail",
          "signature": "NoBuffering",
          "type": "function"
        },
        "index": {
          "description": "buffering is disabled if possible",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "NoBuffering",
          "package": "jail",
          "partial": "No Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:NoBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "ReadMode",
          "package": "jail",
          "signature": "ReadMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "ReadMode",
          "package": "jail",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:ReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "ReadWriteMode",
          "package": "jail",
          "signature": "ReadWriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "ReadWriteMode",
          "package": "jail",
          "partial": "Read Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:ReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the current position.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "RelativeSeek",
          "package": "jail",
          "signature": "RelativeSeek",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to offset from the current position",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "RelativeSeek",
          "package": "jail",
          "partial": "Relative Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:RelativeSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the end of the file.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "SeekFromEnd",
          "package": "jail",
          "signature": "SeekFromEnd",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to offset from the end of the file",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "SeekFromEnd",
          "package": "jail",
          "partial": "Seek From End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:SeekFromEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "WriteMode",
          "package": "jail",
          "signature": "WriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "WriteMode",
          "package": "jail",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:WriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "appendFile",
          "package": "jail",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/System-IO-Jail.html#appendFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "appendFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "jail",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "getChar",
          "package": "jail",
          "signature": "IO Char",
          "source": "src/System-IO-Jail.html#getChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "getChar",
          "package": "jail",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:getChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "getContents",
          "package": "jail",
          "signature": "IO String",
          "source": "src/System-IO-Jail.html#getContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "getContents",
          "package": "jail",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "getLine",
          "package": "jail",
          "signature": "IO String",
          "source": "src/System-IO-Jail.html#getLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "getLine",
          "package": "jail",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hClose",
          "package": "jail",
          "signature": "Handle -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hClose",
          "normalized": "Handle-\u003eIO()",
          "package": "jail",
          "partial": "Close",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hFileSize",
          "package": "jail",
          "signature": "Handle -\u003e IO Integer",
          "source": "src/System-IO-Jail.html#hFileSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hFileSize",
          "normalized": "Handle-\u003eIO Integer",
          "package": "jail",
          "partial": "File Size",
          "signature": "Handle-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hFlush",
          "package": "jail",
          "signature": "Handle -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hFlush",
          "normalized": "Handle-\u003eIO()",
          "package": "jail",
          "partial": "Flush",
          "signature": "Handle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hGetBuf",
          "package": "jail",
          "signature": "Handle -\u003e Ptr a -\u003e Int -\u003e IO Int",
          "source": "src/System-IO-Jail.html#hGetBuf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hGetBuf",
          "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eIO Int",
          "package": "jail",
          "partial": "Get Buf",
          "signature": "Handle-\u003ePtr a-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hGetBufNonBlocking",
          "package": "jail",
          "signature": "Handle -\u003e Ptr a -\u003e Int -\u003e IO Int",
          "source": "src/System-IO-Jail.html#hGetBufNonBlocking",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hGetBufNonBlocking",
          "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eIO Int",
          "package": "jail",
          "partial": "Get Buf Non Blocking",
          "signature": "Handle-\u003ePtr a-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetBufNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hGetBuffering",
          "package": "jail",
          "signature": "Handle -\u003e IO BufferMode",
          "source": "src/System-IO-Jail.html#hGetBuffering",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hGetBuffering",
          "normalized": "Handle-\u003eIO BufferMode",
          "package": "jail",
          "partial": "Get Buffering",
          "signature": "Handle-\u003eIO BufferMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hGetChar",
          "package": "jail",
          "signature": "Handle -\u003e IO Char",
          "source": "src/System-IO-Jail.html#hGetChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hGetChar",
          "normalized": "Handle-\u003eIO Char",
          "package": "jail",
          "partial": "Get Char",
          "signature": "Handle-\u003eIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hGetContents",
          "package": "jail",
          "signature": "Handle -\u003e IO String",
          "source": "src/System-IO-Jail.html#hGetContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO String",
          "package": "jail",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hGetEcho",
          "package": "jail",
          "signature": "Handle -\u003e IO Bool",
          "source": "src/System-IO-Jail.html#hGetEcho",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hGetEcho",
          "normalized": "Handle-\u003eIO Bool",
          "package": "jail",
          "partial": "Get Echo",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetEcho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hGetLine",
          "package": "jail",
          "signature": "Handle -\u003e IO String",
          "source": "src/System-IO-Jail.html#hGetLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO String",
          "package": "jail",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hGetPosn",
          "package": "jail",
          "signature": "Handle -\u003e IO HandlePosn",
          "source": "src/System-IO-Jail.html#hGetPosn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hGetPosn",
          "normalized": "Handle-\u003eIO HandlePosn",
          "package": "jail",
          "partial": "Get Posn",
          "signature": "Handle-\u003eIO HandlePosn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hGetPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hIsClosed",
          "package": "jail",
          "signature": "Handle -\u003e IO Bool",
          "source": "src/System-IO-Jail.html#hIsClosed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hIsClosed",
          "normalized": "Handle-\u003eIO Bool",
          "package": "jail",
          "partial": "Is Closed",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hIsEOF",
          "package": "jail",
          "signature": "Handle -\u003e IO Bool",
          "source": "src/System-IO-Jail.html#hIsEOF",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hIsEOF",
          "normalized": "Handle-\u003eIO Bool",
          "package": "jail",
          "partial": "Is EOF",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hIsOpen",
          "package": "jail",
          "signature": "Handle -\u003e IO Bool",
          "source": "src/System-IO-Jail.html#hIsOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hIsOpen",
          "normalized": "Handle-\u003eIO Bool",
          "package": "jail",
          "partial": "Is Open",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hIsReadable",
          "package": "jail",
          "signature": "Handle -\u003e IO Bool",
          "source": "src/System-IO-Jail.html#hIsReadable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hIsReadable",
          "normalized": "Handle-\u003eIO Bool",
          "package": "jail",
          "partial": "Is Readable",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsReadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hIsSeekable",
          "package": "jail",
          "signature": "Handle -\u003e IO Bool",
          "source": "src/System-IO-Jail.html#hIsSeekable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hIsSeekable",
          "normalized": "Handle-\u003eIO Bool",
          "package": "jail",
          "partial": "Is Seekable",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsSeekable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hIsTerminalDevice",
          "package": "jail",
          "signature": "Handle -\u003e IO Bool",
          "source": "src/System-IO-Jail.html#hIsTerminalDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hIsTerminalDevice",
          "normalized": "Handle-\u003eIO Bool",
          "package": "jail",
          "partial": "Is Terminal Device",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsTerminalDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hIsWritable",
          "package": "jail",
          "signature": "Handle -\u003e IO Bool",
          "source": "src/System-IO-Jail.html#hIsWritable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hIsWritable",
          "normalized": "Handle-\u003eIO Bool",
          "package": "jail",
          "partial": "Is Writable",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hIsWritable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hLookAhead",
          "package": "jail",
          "signature": "Handle -\u003e IO Char",
          "source": "src/System-IO-Jail.html#hLookAhead",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hLookAhead",
          "normalized": "Handle-\u003eIO Char",
          "package": "jail",
          "partial": "Look Ahead",
          "signature": "Handle-\u003eIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hLookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hPrint",
          "package": "jail",
          "signature": "Handle -\u003e a -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hPrint",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hPrint",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "jail",
          "partial": "Print",
          "signature": "Handle-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hPutBuf",
          "package": "jail",
          "signature": "Handle -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hPutBuf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hPutBuf",
          "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "jail",
          "partial": "Put Buf",
          "signature": "Handle-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hPutBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hPutBufNonBlocking",
          "package": "jail",
          "signature": "Handle -\u003e Ptr a -\u003e Int -\u003e IO Int",
          "source": "src/System-IO-Jail.html#hPutBufNonBlocking",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hPutBufNonBlocking",
          "normalized": "Handle-\u003ePtr a-\u003eInt-\u003eIO Int",
          "package": "jail",
          "partial": "Put Buf Non Blocking",
          "signature": "Handle-\u003ePtr a-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hPutBufNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hPutChar",
          "package": "jail",
          "signature": "Handle -\u003e Char -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hPutChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hPutChar",
          "normalized": "Handle-\u003eChar-\u003eIO()",
          "package": "jail",
          "partial": "Put Char",
          "signature": "Handle-\u003eChar-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hPutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hPutStr",
          "package": "jail",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hPutStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hPutStr",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "jail",
          "partial": "Put Str",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hPutStrLn",
          "package": "jail",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "jail",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hReady",
          "package": "jail",
          "signature": "Handle -\u003e IO Bool",
          "source": "src/System-IO-Jail.html#hReady",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hReady",
          "normalized": "Handle-\u003eIO Bool",
          "package": "jail",
          "partial": "Ready",
          "signature": "Handle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hSeek",
          "package": "jail",
          "signature": "Handle -\u003e SeekMode -\u003e Integer -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hSeek",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hSeek",
          "normalized": "Handle-\u003eSeekMode-\u003eInteger-\u003eIO()",
          "package": "jail",
          "partial": "Seek",
          "signature": "Handle-\u003eSeekMode-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hSetBinaryMode",
          "package": "jail",
          "signature": "Handle -\u003e Bool -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hSetBinaryMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hSetBinaryMode",
          "normalized": "Handle-\u003eBool-\u003eIO()",
          "package": "jail",
          "partial": "Set Binary Mode",
          "signature": "Handle-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hSetBinaryMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hSetBuffering",
          "package": "jail",
          "signature": "Handle -\u003e BufferMode -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hSetBuffering",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hSetBuffering",
          "normalized": "Handle-\u003eBufferMode-\u003eIO()",
          "package": "jail",
          "partial": "Set Buffering",
          "signature": "Handle-\u003eBufferMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hSetBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hSetEcho",
          "package": "jail",
          "signature": "Handle -\u003e Bool -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hSetEcho",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hSetEcho",
          "normalized": "Handle-\u003eBool-\u003eIO()",
          "package": "jail",
          "partial": "Set Echo",
          "signature": "Handle-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hSetEcho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hSetFileSize",
          "package": "jail",
          "signature": "Handle -\u003e Integer -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hSetFileSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hSetFileSize",
          "normalized": "Handle-\u003eInteger-\u003eIO()",
          "package": "jail",
          "partial": "Set File Size",
          "signature": "Handle-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hSetFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hSetPosn",
          "package": "jail",
          "signature": "HandlePosn -\u003e IO ()",
          "source": "src/System-IO-Jail.html#hSetPosn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hSetPosn",
          "normalized": "HandlePosn-\u003eIO()",
          "package": "jail",
          "partial": "Set Posn",
          "signature": "HandlePosn-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hSetPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hShow",
          "package": "jail",
          "signature": "Handle -\u003e IO String",
          "source": "src/System-IO-Jail.html#hShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hShow",
          "normalized": "Handle-\u003eIO String",
          "package": "jail",
          "partial": "Show",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hTell",
          "package": "jail",
          "signature": "Handle -\u003e IO Integer",
          "source": "src/System-IO-Jail.html#hTell",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hTell",
          "normalized": "Handle-\u003eIO Integer",
          "package": "jail",
          "partial": "Tell",
          "signature": "Handle-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hTell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "hWaitForInput",
          "package": "jail",
          "signature": "Handle -\u003e Int -\u003e IO Bool",
          "source": "src/System-IO-Jail.html#hWaitForInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "hWaitForInput",
          "normalized": "Handle-\u003eInt-\u003eIO Bool",
          "package": "jail",
          "partial": "Wait For Input",
          "signature": "Handle-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:hWaitForInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "interact",
          "package": "jail",
          "signature": "(String -\u003e String) -\u003e IO ()",
          "source": "src/System-IO-Jail.html#interact",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "interact",
          "normalized": "(String-\u003eString)-\u003eIO()",
          "package": "jail",
          "signature": "(String-\u003eString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "isEOF",
          "package": "jail",
          "signature": "IO Bool",
          "source": "src/System-IO-Jail.html#isEOF",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "isEOF",
          "package": "jail",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:isEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "jailIO",
          "package": "jail",
          "signature": "IO a -\u003e m a",
          "source": "src/System-IO-Jail.html#jailIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "jailIO",
          "normalized": "IO a-\u003eb a",
          "package": "jail",
          "partial": "IO",
          "signature": "IO a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:jailIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "openBinaryFile",
          "package": "jail",
          "signature": "FilePath -\u003e IOMode -\u003e IO Handle",
          "source": "src/System-IO-Jail.html#openBinaryFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "openBinaryFile",
          "normalized": "FilePath-\u003eIOMode-\u003eIO Handle",
          "package": "jail",
          "partial": "Binary File",
          "signature": "FilePath-\u003eIOMode-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:openBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "openBinaryTempFile",
          "package": "jail",
          "signature": "FilePath -\u003e String -\u003e IO (FilePath, Handle)",
          "source": "src/System-IO-Jail.html#openBinaryTempFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "openBinaryTempFile",
          "normalized": "FilePath-\u003eString-\u003eIO(FilePath,Handle)",
          "package": "jail",
          "partial": "Binary Temp File",
          "signature": "FilePath-\u003eString-\u003eIO(FilePath,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:openBinaryTempFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "openFile",
          "package": "jail",
          "signature": "FilePath -\u003e IOMode -\u003e IO Handle",
          "source": "src/System-IO-Jail.html#openFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "openFile",
          "normalized": "FilePath-\u003eIOMode-\u003eIO Handle",
          "package": "jail",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:openFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "openTempFile",
          "package": "jail",
          "signature": "FilePath -\u003e String -\u003e IO (FilePath, Handle)",
          "source": "src/System-IO-Jail.html#openTempFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "openTempFile",
          "normalized": "FilePath-\u003eString-\u003eIO(FilePath,Handle)",
          "package": "jail",
          "partial": "Temp File",
          "signature": "FilePath-\u003eString-\u003eIO(FilePath,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:openTempFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "print",
          "package": "jail",
          "signature": "a -\u003e IO ()",
          "source": "src/System-IO-Jail.html#print",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "print",
          "normalized": "a-\u003eIO()",
          "package": "jail",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "putChar",
          "package": "jail",
          "signature": "Char -\u003e IO ()",
          "source": "src/System-IO-Jail.html#putChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "putChar",
          "normalized": "Char-\u003eIO()",
          "package": "jail",
          "partial": "Char",
          "signature": "Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:putChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "putStr",
          "package": "jail",
          "signature": "String -\u003e IO ()",
          "source": "src/System-IO-Jail.html#putStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "putStr",
          "normalized": "String-\u003eIO()",
          "package": "jail",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "putStrLn",
          "package": "jail",
          "signature": "String -\u003e IO ()",
          "source": "src/System-IO-Jail.html#putStrLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "putStrLn",
          "normalized": "String-\u003eIO()",
          "package": "jail",
          "partial": "Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "readFile",
          "package": "jail",
          "signature": "FilePath -\u003e IO String",
          "source": "src/System-IO-Jail.html#readFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "jail",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "readIO",
          "package": "jail",
          "signature": "String -\u003e IO a",
          "source": "src/System-IO-Jail.html#readIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "readIO",
          "normalized": "String-\u003eIO a",
          "package": "jail",
          "partial": "IO",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:readIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "readLn",
          "package": "jail",
          "signature": "IO a",
          "source": "src/System-IO-Jail.html#readLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "readLn",
          "package": "jail",
          "partial": "Ln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:readLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a jailed IO computation. The IO computation will be able to access all\nfiles that are within the specified jail directory. All file accesses outside\nthe jail directory will be refused. Only file handles opened from within the\njailed computation and the handles from the white list will be accessible to\nthe operations requiring a file handle. No smuggling in of foreign handles,\nborder patrol is very strict. When the jail path is specified as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e no\nfile access will be possible at all, this means the computation can only rely\non the white listed handles.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "run",
          "package": "jail",
          "signature": "Maybe FilePath-\u003e [Handle]-\u003e IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Run jailed IO computation The IO computation will be able to access all files that are within the specified jail directory All file accesses outside the jail directory will be refused Only file handles opened from within the jailed computation and the handles from the white list will be accessible to the operations requiring file handle No smuggling in of foreign handles border patrol is very strict When the jail path is specified as Nothing no file access will be possible at all this means the computation can only rely on the white listed handles",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "run",
          "normalized": "Maybe FilePath-\u003e[Handle]-\u003eIO a-\u003eIO a",
          "package": "jail",
          "signature": "Maybe FilePath-\u003e[Handle]-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle managing output to the Haskell program's standard error channel.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "stderr",
          "package": "jail",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "handle managing output to the Haskell program standard error channel",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "stderr",
          "package": "jail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle managing input from the Haskell program's standard input channel.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "stdin",
          "package": "jail",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "handle managing input from the Haskell program standard input channel",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "stdin",
          "package": "jail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:stdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle managing output to the Haskell program's standard output channel.\n\u003c/p\u003e",
          "module": "System.IO.Jail",
          "name": "stdout",
          "package": "jail",
          "signature": "Handle",
          "type": "function"
        },
        "index": {
          "description": "handle managing output to the Haskell program standard output channel",
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "stdout",
          "package": "jail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "withBinaryFile",
          "package": "jail",
          "signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e IO a) -\u003e IO a",
          "source": "src/System-IO-Jail.html#withBinaryFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "withBinaryFile",
          "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "package": "jail",
          "partial": "Binary File",
          "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:withBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "withFile",
          "package": "jail",
          "signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e IO a) -\u003e IO a",
          "source": "src/System-IO-Jail.html#withFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "withFile",
          "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "package": "jail",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:withFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.Jail",
          "name": "writeFile",
          "package": "jail",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/System-IO-Jail.html#writeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO Jail",
          "module": "System.IO.Jail",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "jail",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jail/docs/System-IO-Jail.html#v:writeFile"
      }
    }
  ]
]