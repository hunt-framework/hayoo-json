[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eUnsafe\u003c/em\u003e functions for retrieving the native \u003ccode\u003eHandle\u003c/code\u003e from a regional file\n handle and for lifting operations on \u003ccode\u003eHandles\u003c/code\u003e to \u003ccode\u003eRegionalFileHandles\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThese operations are unsafe because they allow you to close regional file\n handles before exiting their region. So they enable you to perform \u003ccode\u003eIO\u003c/code\u003e with\n already closed handles.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.SaferFileHandles.Unsafe",
        "fct-package": "safer-file-handles",
        "fct-signature": "module",
        "fct-source": "src/System-IO-SaferFileHandles-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "Unsafe functions for retrieving the native Handle from regional file handle and for lifting operations on Handles to RegionalFileHandles These operations are unsafe because they allow you to close regional file handles before exiting their region So they enable you to perform IO with already closed handles",
        "hierarchy": "System IO SaferFileHandles Unsafe",
        "module": "System.IO.SaferFileHandles.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles-Unsafe.html#v:sanitizeIOError",
      "description": {
        "fct-descr": "\u003cp\u003eModify thrown \u003ccode\u003eIOErrors\u003c/code\u003e in the given computation by erasing the\n \u003ccode\u003eioe_handle\u003c/code\u003e field in the \u003ccode\u003eIOError\u003c/code\u003e which may contain the \u003ccode\u003eHandle\u003c/code\u003e which\n caused the \u003ccode\u003eIOError\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eI use this to ensure that \u003ccode\u003eHandles\u003c/code\u003e don't \u003cem\u003eleak\u003c/em\u003e out the region via\n exceptions.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles.Unsafe",
        "fct-package": "safer-file-handles",
        "fct-signature": "IO α -\u003e IO α",
        "fct-source": "src/System-IO-SaferFileHandles-Unsafe.html#sanitizeIOError",
        "fct-type": "function",
        "title": "sanitizeIOError"
      },
      "index": {
        "description": "Modify thrown IOErrors in the given computation by erasing the ioe handle field in the IOError which may contain the Handle which caused the IOError use this to ensure that Handles don leak out the region via exceptions",
        "hierarchy": "System IO SaferFileHandles Unsafe",
        "module": "System.IO.SaferFileHandles.Unsafe",
        "name": "sanitizeIOError",
        "normalized": "IO a-\u003eIO a",
        "package": "safer-file-handles",
        "partial": "IOError",
        "signature": "IO α-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles-Unsafe.html#v:unsafeHandle",
      "description": {
        "fct-module": "System.IO.SaferFileHandles.Unsafe",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode r -\u003e Handle ioMode",
        "fct-source": "src/System-IO-SaferFileHandles-Internal.html#unsafeHandle",
        "fct-type": "function",
        "title": "unsafeHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles Unsafe",
        "module": "System.IO.SaferFileHandles.Unsafe",
        "name": "unsafeHandle",
        "normalized": "a b c-\u003eHandle b",
        "package": "safer-file-handles",
        "partial": "Handle",
        "signature": "handle ioMode r-\u003eHandle ioMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles-Unsafe.html#v:wrap",
      "description": {
        "fct-module": "System.IO.SaferFileHandles.Unsafe",
        "fct-package": "safer-file-handles",
        "fct-signature": "(Handle ioMode -\u003e IO α) -\u003e handle ioMode r -\u003e m α",
        "fct-source": "src/System-IO-SaferFileHandles-Unsafe.html#wrap",
        "fct-type": "function",
        "title": "wrap"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles Unsafe",
        "module": "System.IO.SaferFileHandles.Unsafe",
        "name": "wrap",
        "normalized": "(Handle a-\u003eIO b)-\u003ec a d-\u003ee b",
        "package": "safer-file-handles",
        "partial": "",
        "signature": "(Handle ioMode-\u003eIO α)-\u003ehandle ioMode r-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles-Unsafe.html#v:wrap2",
      "description": {
        "fct-module": "System.IO.SaferFileHandles.Unsafe",
        "fct-package": "safer-file-handles",
        "fct-signature": "(Handle ioMode -\u003e β -\u003e IO α) -\u003e handle ioMode r -\u003e β -\u003e m α",
        "fct-source": "src/System-IO-SaferFileHandles-Unsafe.html#wrap2",
        "fct-type": "function",
        "title": "wrap2"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles Unsafe",
        "module": "System.IO.SaferFileHandles.Unsafe",
        "name": "wrap2",
        "normalized": "(Handle a-\u003eb-\u003eIO c)-\u003ed a e-\u003eb-\u003ef c",
        "package": "safer-file-handles",
        "partial": "",
        "signature": "(Handle ioMode-\u003eβ-\u003eIO α)-\u003ehandle ioMode r-\u003eβ-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles-Unsafe.html#v:wrap3",
      "description": {
        "fct-module": "System.IO.SaferFileHandles.Unsafe",
        "fct-package": "safer-file-handles",
        "fct-signature": "(Handle ioMode -\u003e γ -\u003e β -\u003e IO α) -\u003e handle ioMode r -\u003e γ -\u003e β -\u003e m α",
        "fct-source": "src/System-IO-SaferFileHandles-Unsafe.html#wrap3",
        "fct-type": "function",
        "title": "wrap3"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles Unsafe",
        "module": "System.IO.SaferFileHandles.Unsafe",
        "name": "wrap3",
        "normalized": "(Handle a-\u003eb-\u003ec-\u003eIO d)-\u003ee a f-\u003eb-\u003ec-\u003eg d",
        "package": "safer-file-handles",
        "partial": "",
        "signature": "(Handle ioMode-\u003eγ-\u003eβ-\u003eIO α)-\u003ehandle ioMode r-\u003eγ-\u003eβ-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe contributions of this module are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This module extends the \u003ccode\u003eregions\u003c/code\u003e library with the ability to open files in\n a \u003ccode\u003e\u003ca\u003eRegionT\u003c/a\u003e\u003c/code\u003e. When the region terminates, all opened resources will be closed\n automatically. The main advantage of regions is that the handles to the\n opened resources can not be returned from the region. This ensures no I/O\n with closed resources is possible. The primary technique used in \u003ccode\u003eregions\u003c/code\u003e is\n called \"Lightweight monadic regions\" which was invented by Oleg Kiselyov\n and Chung-chieh Shan. See:\n \u003ca\u003ehttp://okmij.org/ftp/Haskell/regions.html#light-weight\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Secondly this module provides all the file operations of \u003ccode\u003eSystem.IO\u003c/code\u003e lifted\n to the region monad.\n\u003c/li\u003e\u003cli\u003e Third, filepaths that are given to functions like \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e are created\n and manipulated in a type-safe way using the \u003ccode\u003epathtype\u003c/code\u003e package.\n\u003c/li\u003e\u003cli\u003e The final contribution of this module is that file handles are\n parameterised with the IOMode in which the file was opened. This can be\n either \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAppendMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e. All\n operations on files explicitly specify the needed IOMode using the\n \u003ccode\u003e\u003ca\u003eReadModes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWriteModes\u003c/a\u003e\u003c/code\u003e type classes. This way it is impossible to read\n from a write-only handle or write to a read-only handle for example.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee the \u003ccode\u003esafer-file-handles-examples\u003c/code\u003e package for examples how to use this\n package:\n\u003c/p\u003e\u003cpre\u003egit clone \u003ca\u003ehttps://github.com/basvandijk/safer-file-handles-examples\u003c/a\u003e\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e This module also provides functions from \u003ccode\u003eSystem.IO\u003c/code\u003e which don't\n directly work with file handles like \u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e for\n example. These functions implicitly use the standard handles. I actually\n provide more general versions of these that work in any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e. It could\n be argued that these functions don't belong in this module because they don't\n have anything to do with regions and explicit IOModes. However I provide them\n as a convenience. But be warned that in the future these lifted functions may\n move to their own package!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "module",
        "fct-source": "src/System-IO-SaferFileHandles.html",
        "fct-type": "module",
        "title": "SaferFileHandles"
      },
      "index": {
        "description": "The contributions of this module are as follows This module extends the regions library with the ability to open files in RegionT When the region terminates all opened resources will be closed automatically The main advantage of regions is that the handles to the opened resources can not be returned from the region This ensures no with closed resources is possible The primary technique used in regions is called Lightweight monadic regions which was invented by Oleg Kiselyov and Chung-chieh Shan See http okmij.org ftp Haskell regions.html light-weight Secondly this module provides all the file operations of System.IO lifted to the region monad Third filepaths that are given to functions like openFile are created and manipulated in type-safe way using the pathtype package The final contribution of this module is that file handles are parameterised with the IOMode in which the file was opened This can be either ReadMode WriteMode AppendMode or ReadWriteMode All operations on files explicitly specify the needed IOMode using the ReadModes and WriteModes type classes This way it is impossible to read from write-only handle or write to read-only handle for example See the safer-file-handles-examples package for examples how to use this package git clone https github.com basvandijk safer-file-handles-examples NOTE This module also provides functions from System.IO which don directly work with file handles like putStrLn or getLine for example These functions implicitly use the standard handles actually provide more general versions of these that work in any MonadIO It could be argued that these functions don belong in this module because they don have anything to do with regions and explicit IOModes However provide them as convenience But be warned that in the future these lifted functions may move to their own package",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "SaferFileHandles",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Safer File Handles",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:AppendMode",
      "description": {
        "fct-descr": "\u003cp\u003eWrite only by appending.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "AppendMode"
      },
      "index": {
        "description": "Write only by appending",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "AppendMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Append Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:BufferMode",
      "description": {
        "fct-descr": "\u003cp\u003eThree kinds of buffering are supported: line-buffering, \n block-buffering or no-buffering.  These modes have the following\n effects. For output, items are written out, or \u003cem\u003eflushed\u003c/em\u003e,\n from the internal buffer according to the buffer mode:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eline-buffering\u003c/em\u003e: the entire output buffer is flushed\n    whenever a newline is output, the buffer overflows, \n    a \u003ccode\u003eSystem.IO.hFlush\u003c/code\u003e is issued, or the handle is closed.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eblock-buffering\u003c/em\u003e: the entire buffer is written out whenever it\n    overflows, a \u003ccode\u003eSystem.IO.hFlush\u003c/code\u003e is issued, or the handle is closed.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eno-buffering\u003c/em\u003e: output is written immediately, and never stored\n    in the buffer.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn implementation is free to flush the buffer more frequently,\n but not less frequently, than specified above.\n The output buffer is emptied as soon as it has been written out.\n\u003c/p\u003e\u003cp\u003eSimilarly, input occurs according to the buffer mode for the handle:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eline-buffering\u003c/em\u003e: when the buffer for the handle is not empty,\n    the next item is obtained from the buffer; otherwise, when the\n    buffer is empty, characters up to and including the next newline\n    character are read into the buffer.  No characters are available\n    until the newline character is available or the buffer is full.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eblock-buffering\u003c/em\u003e: when the buffer for the handle becomes empty,\n    the next block of data is read into the buffer.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eno-buffering\u003c/em\u003e: the next input item is read and returned.\n    The \u003ccode\u003eSystem.IO.hLookAhead\u003c/code\u003e operation implies that even a no-buffered\n    handle may require a one-character buffer.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe default buffering mode when a handle is opened is\n implementation-dependent and may depend on the file system object\n which is attached to that handle.\n For most implementations, physical files will normally be block-buffered \n and terminals will normally be line-buffered.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "BufferMode"
      },
      "index": {
        "description": "Three kinds of buffering are supported line-buffering block-buffering or no-buffering These modes have the following effects For output items are written out or flushed from the internal buffer according to the buffer mode line-buffering the entire output buffer is flushed whenever newline is output the buffer overflows System.IO.hFlush is issued or the handle is closed block-buffering the entire buffer is written out whenever it overflows System.IO.hFlush is issued or the handle is closed no-buffering output is written immediately and never stored in the buffer An implementation is free to flush the buffer more frequently but not less frequently than specified above The output buffer is emptied as soon as it has been written out Similarly input occurs according to the buffer mode for the handle line-buffering when the buffer for the handle is not empty the next item is obtained from the buffer otherwise when the buffer is empty characters up to and including the next newline character are read into the buffer No characters are available until the newline character is available or the buffer is full block-buffering when the buffer for the handle becomes empty the next block of data is read into the buffer no-buffering the next input item is read and returned The System.IO.hLookAhead operation implies that even no-buffered handle may require one-character buffer The default buffering mode when handle is opened is implementation-dependent and may depend on the file system object which is attached to that handle For most implementations physical files will normally be block-buffered and terminals will normally be line-buffered",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "BufferMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Buffer Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:FileHandle",
      "description": {
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "class",
        "fct-source": "src/System-IO-SaferFileHandles-Internal.html#FileHandle",
        "fct-type": "class",
        "title": "FileHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "FileHandle",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "File Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:HandlePosn",
      "description": {
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "HandlePosn"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "HandlePosn",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Handle Posn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:IOMode",
      "description": {
        "fct-descr": "\u003cp\u003eThe IOMode GADT which for each constructor specifies the associated IOMode\n type.\n\u003c/p\u003e\u003cp\u003eAlso see: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eIOMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IOMode"
      },
      "index": {
        "description": "The IOMode GADT which for each constructor specifies the associated IOMode type Also see System.IO IOMode",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "IOMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "IOMode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:MkIOMode",
      "description": {
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MkIOMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "MkIOMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Mk IOMode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:Newline",
      "description": {
        "fct-descr": "\u003cp\u003eThe representation of a newline in the external file or stream.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Newline"
      },
      "index": {
        "description": "The representation of newline in the external file or stream",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "Newline",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Newline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:NewlineMode",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies the translation, if any, of newline characters between\n internal Strings and the external file or stream.  Haskell Strings\n are assumed to represent newlines with the '\\n' character; the\n newline mode specifies how to translate '\\n' on output, and what to\n translate into '\\n' on input.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "NewlineMode"
      },
      "index": {
        "description": "Specifies the translation if any of newline characters between internal Strings and the external file or stream Haskell Strings are assumed to represent newlines with the character the newline mode specifies how to translate on output and what to translate into on input",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "NewlineMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Newline Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:ReadMode",
      "description": {
        "fct-descr": "\u003cp\u003eRead only.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ReadMode"
      },
      "index": {
        "description": "Read only",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "ReadMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Read Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:ReadModes",
      "description": {
        "fct-descr": "\u003cp\u003eClass of readable IO mode types.\n\u003c/p\u003e\u003cp\u003eNote the super class \u003ccode\u003eReadModesPrivate\u003c/code\u003e. This type class is not exported by\n this module which ensures you can't accidentally make another type (like\n \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eAppendMode\u003c/a\u003e\u003c/code\u003e) an instance of \u003ccode\u003e\u003ca\u003eReadModes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "ReadModes"
      },
      "index": {
        "description": "Class of readable IO mode types Note the super class ReadModesPrivate This type class is not exported by this module which ensures you can accidentally make another type like WriteMode or AppendMode an instance of ReadModes",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "ReadModes",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Read Modes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:ReadWriteMode",
      "description": {
        "fct-descr": "\u003cp\u003eBoth read and write.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ReadWriteMode"
      },
      "index": {
        "description": "Both read and write",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "ReadWriteMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:RegionalFileHandle",
      "description": {
        "fct-descr": "\u003cp\u003eA regional handle to an opened file parameterized by the \u003ccode\u003e\u003ca\u003eIOMode\u003c/a\u003e\u003c/code\u003e in which\n you opened the file and the region in which it was created.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-source": "src/System-IO-SaferFileHandles-Internal.html#RegionalFileHandle",
        "fct-type": "data",
        "title": "RegionalFileHandle"
      },
      "index": {
        "description": "regional handle to an opened file parameterized by the IOMode in which you opened the file and the region in which it was created",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "RegionalFileHandle",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Regional File Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:SeekMode",
      "description": {
        "fct-descr": "\u003cp\u003eA mode that determines the effect of \u003ccode\u003ehSeek\u003c/code\u003e \u003ccode\u003ehdl mode i\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SeekMode"
      },
      "index": {
        "description": "mode that determines the effect of hSeek hdl mode",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "SeekMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Seek Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:StdFileHandle",
      "description": {
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-source": "src/System-IO-SaferFileHandles.html#StdFileHandle",
        "fct-type": "data",
        "title": "StdFileHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "StdFileHandle",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Std File Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:Template",
      "description": {
        "fct-descr": "\u003cp\u003eThe template of a temporary file path.\n\u003c/p\u003e\u003cp\u003eIf the template is \"foo.ext\" then the created file will be \"fooXXX.ext\"\n where XXX is some random number.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "type",
        "fct-source": "src/System-IO-SaferFileHandles.html#Template",
        "fct-type": "type",
        "title": "Template"
      },
      "index": {
        "description": "The template of temporary file path If the template is foo.ext then the created file will be fooXXX.ext where XXX is some random number",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "Template",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:TextEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e is a specification of a conversion scheme\n between sequences of bytes and sequences of Unicode characters.\n\u003c/p\u003e\u003cp\u003eFor example, UTF-8 is an encoding of Unicode characters into a sequence\n of bytes.  The \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e for UTF-8 is \u003ccode\u003eutf8\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "TextEncoding"
      },
      "index": {
        "description": "TextEncoding is specification of conversion scheme between sequences of bytes and sequences of Unicode characters For example UTF-8 is an encoding of Unicode characters into sequence of bytes The TextEncoding for UTF-8 is utf8",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "TextEncoding",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Text Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:WriteMode",
      "description": {
        "fct-descr": "\u003cp\u003eWrite only.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "WriteMode"
      },
      "index": {
        "description": "Write only",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "WriteMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#t:WriteModes",
      "description": {
        "fct-descr": "\u003cp\u003eClass of writable IO mode types.\n\u003c/p\u003e\u003cp\u003eNote the super class \u003ccode\u003eWriteModesPrivate\u003c/code\u003e. This type class is not exported by\n this module which ensures you can't accidentally make another type (like\n \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e) an instance of \u003ccode\u003e\u003ca\u003eWriteModes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "WriteModes"
      },
      "index": {
        "description": "Class of writable IO mode types Note the super class WriteModesPrivate This type class is not exported by this module which ensures you can accidentally make another type like ReadMode an instance of WriteModes",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "WriteModes",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Write Modes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:AbsoluteSeek",
      "description": {
        "fct-descr": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "AbsoluteSeek",
        "fct-type": "function",
        "title": "AbsoluteSeek"
      },
      "index": {
        "description": "the position of hdl is set to",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "AbsoluteSeek",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Absolute Seek",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:AppendMode",
      "description": {
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "IOMode AppendMode",
        "fct-type": "function",
        "title": "AppendMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "AppendMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Append Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:BlockBuffering",
      "description": {
        "fct-descr": "\u003cp\u003eblock-buffering should be enabled if possible.\n The size of the buffer is \u003ccode\u003en\u003c/code\u003e items if the argument\n is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e and is otherwise implementation-dependent.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "BlockBuffering (Maybe Int)",
        "fct-type": "function",
        "title": "BlockBuffering"
      },
      "index": {
        "description": "block-buffering should be enabled if possible The size of the buffer is items if the argument is Just and is otherwise implementation-dependent",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "BlockBuffering",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Block Buffering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:CRLF",
      "description": {
        "fct-descr": "\u003cp\u003e'\\r\\n'\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "CRLF",
        "fct-type": "function",
        "title": "CRLF"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "CRLF",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "CRLF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:LF",
      "description": {
        "fct-descr": "\u003cp\u003e'\\n'\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "LF",
        "fct-type": "function",
        "title": "LF"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "LF",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "LF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:LineBuffering",
      "description": {
        "fct-descr": "\u003cp\u003eline-buffering should be enabled if possible.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "LineBuffering",
        "fct-type": "function",
        "title": "LineBuffering"
      },
      "index": {
        "description": "line-buffering should be enabled if possible",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "LineBuffering",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Line Buffering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:NewlineMode",
      "description": {
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "NewlineMode",
        "fct-type": "function",
        "title": "NewlineMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "NewlineMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Newline Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:NoBuffering",
      "description": {
        "fct-descr": "\u003cp\u003ebuffering is disabled if possible.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "NoBuffering",
        "fct-type": "function",
        "title": "NoBuffering"
      },
      "index": {
        "description": "buffering is disabled if possible",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "NoBuffering",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "No Buffering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:ReadMode",
      "description": {
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "IOMode ReadMode",
        "fct-type": "function",
        "title": "ReadMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "ReadMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Read Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:ReadWriteMode",
      "description": {
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "IOMode ReadWriteMode",
        "fct-type": "function",
        "title": "ReadWriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "ReadWriteMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Read Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:RelativeSeek",
      "description": {
        "fct-descr": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the current position.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "RelativeSeek",
        "fct-type": "function",
        "title": "RelativeSeek"
      },
      "index": {
        "description": "the position of hdl is set to offset from the current position",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "RelativeSeek",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Relative Seek",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:SeekFromEnd",
      "description": {
        "fct-descr": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the end of the file.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "SeekFromEnd",
        "fct-type": "function",
        "title": "SeekFromEnd"
      },
      "index": {
        "description": "the position of hdl is set to offset from the end of the file",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "SeekFromEnd",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Seek From End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:WriteMode",
      "description": {
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "IOMode WriteMode",
        "fct-type": "function",
        "title": "WriteMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "WriteMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Write Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:cast",
      "description": {
        "fct-descr": "\u003cp\u003eCast the IOMode of a handle if the handle supports it.\n\u003c/p\u003e\u003cp\u003eThis function is used in combination with the standard handles.\nWhen you know the IOMode of a handle is different from its default IOMode you\ncan cast it to the right one.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "StdFileHandle anyIOMode pr -\u003e cr (Maybe (StdFileHandle castedIOMode pr))",
        "fct-source": "src/System-IO-SaferFileHandles.html#cast",
        "fct-type": "function",
        "title": "cast"
      },
      "index": {
        "description": "Cast the IOMode of handle if the handle supports it This function is used in combination with the standard handles When you know the IOMode of handle is different from its default IOMode you can cast it to the right one",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "cast",
        "normalized": "StdFileHandle a b-\u003ec(Maybe(StdFileHandle d b))",
        "package": "safer-file-handles",
        "partial": "",
        "signature": "StdFileHandle anyIOMode pr-\u003ecr(Maybe(StdFileHandle castedIOMode pr))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:getChar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003egetChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "m Char",
        "fct-source": "src/System-IO-SaferFileHandles.html#getChar",
        "fct-type": "function",
        "title": "getChar"
      },
      "index": {
        "description": "Generalizes System.IO getChar to any MonadIO",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "getChar",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:getContents",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "m String",
        "fct-source": "src/System-IO-SaferFileHandles.html#getContents",
        "fct-type": "function",
        "title": "getContents"
      },
      "index": {
        "description": "Generalizes System.IO getContents to any MonadIO",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "getContents",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:getLine",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "m String",
        "fct-source": "src/System-IO-SaferFileHandles.html#getLine",
        "fct-type": "function",
        "title": "getLine"
      },
      "index": {
        "description": "Generalizes System.IO getLine to any MonadIO",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "getLine",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hFileSize",
      "description": {
        "fct-descr": "\u003cp\u003eFor a handle \u003ccode\u003ehdl\u003c/code\u003e which attached to a physical file,\n \u003ccode\u003e\u003ca\u003ehFileSize\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the size of that file in 8-bit bytes.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehFileSize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Integer",
        "fct-source": "src/System-IO-SaferFileHandles.html#hFileSize",
        "fct-type": "function",
        "title": "hFileSize"
      },
      "index": {
        "description": "For handle hdl which attached to physical file hFileSize hdl returns the size of that file in bit bytes Wraps System.IO hFileSize",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hFileSize",
        "normalized": "a b c-\u003ed Integer",
        "package": "safer-file-handles",
        "partial": "File Size",
        "signature": "handle ioMode pr-\u003ecr Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hFlush",
      "description": {
        "fct-descr": "\u003cp\u003eThe action \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e causes any items buffered for output in handle\n \u003ccode\u003ehdl\u003c/code\u003e to be sent immediately to the operating system.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisFullError\u003c/a\u003e\u003c/code\u003e if the device is full;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if a system resource limit would be exceeded. It is\n  unspecified whether the characters in the buffer are discarded or retained\n  under these circumstances.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hFlush",
        "fct-type": "function",
        "title": "hFlush"
      },
      "index": {
        "description": "The action hFlush hdl causes any items buffered for output in handle hdl to be sent immediately to the operating system This operation may fail with isFullError if the device is full isPermissionError if system resource limit would be exceeded It is unspecified whether the characters in the buffer are discarded or retained under these circumstances Wraps System.IO hFlush",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hFlush",
        "normalized": "a b c-\u003ed()",
        "package": "safer-file-handles",
        "partial": "Flush",
        "signature": "handle ioMode pr-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hGetBuf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl buf count\u003c/code\u003e reads data from the handle \u003ccode\u003ehdl\u003c/code\u003e\n into the buffer \u003ccode\u003ebuf\u003c/code\u003e until either EOF is reached or\n \u003ccode\u003ecount\u003c/code\u003e 8-bit bytes have been read.\n It returns the number of bytes actually read.  This may be zero if\n EOF was reached before any data was read (or if \u003ccode\u003ecount\u003c/code\u003e is zero).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e ignores whatever \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e the handle is\n currently using, and reads bytes directly from the underlying IO device.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e never raises an EOF exception, instead it returns a value\n smaller than \u003ccode\u003ecount\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the handle is a pipe or socket, and the writing end\n is closed, \u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e will behave as if EOF was reached.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e ignores the prevailing \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e on the\n handle, and reads bytes directly.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr1 -\u003e pointer α pr2 -\u003e Int -\u003e cr Int",
        "fct-source": "src/System-IO-SaferFileHandles.html#hGetBuf",
        "fct-type": "function",
        "title": "hGetBuf"
      },
      "index": {
        "description": "hGetBuf hdl buf count reads data from the handle hdl into the buffer buf until either EOF is reached or count bit bytes have been read It returns the number of bytes actually read This may be zero if EOF was reached before any data was read or if count is zero hGetBuf ignores whatever TextEncoding the handle is currently using and reads bytes directly from the underlying IO device hGetBuf never raises an EOF exception instead it returns value smaller than count If the handle is pipe or socket and the writing end is closed hGetBuf will behave as if EOF was reached hGetBuf ignores the prevailing TextEncoding and NewlineMode on the handle and reads bytes directly Wraps System.IO hGetBuf",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hGetBuf",
        "normalized": "a b c-\u003ed e c-\u003eInt-\u003ef Int",
        "package": "safer-file-handles",
        "partial": "Get Buf",
        "signature": "handle ioMode pr-\u003epointer α pr-\u003eInt-\u003ecr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hGetBufNonBlocking",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetBufNonBlocking\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl buf count\u003c/code\u003e reads data from the handle \u003ccode\u003ehdl\u003c/code\u003e\n into the buffer \u003ccode\u003ebuf\u003c/code\u003e until either EOF is reached, or\n \u003ccode\u003ecount\u003c/code\u003e 8-bit bytes have been read, or there is no more data available\n to read immediately.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetBufNonBlocking\u003c/a\u003e\u003c/code\u003e is identical to \u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e, except that it will\n never block waiting for data to become available, instead it returns\n only whatever data is available.  To wait for data to arrive before\n calling \u003ccode\u003e\u003ca\u003ehGetBufNonBlocking\u003c/a\u003e\u003c/code\u003e, use \u003ccode\u003e\u003ca\u003ehWaitForInput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetBufNonBlocking\u003c/a\u003e\u003c/code\u003e ignores whatever \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e the handle\n is currently using, and reads bytes directly from the underlying IO device.\n\u003c/p\u003e\u003cp\u003eIf the handle is a pipe or socket, and the writing end\n is closed, \u003ccode\u003e\u003ca\u003ehGetBufNonBlocking\u003c/a\u003e\u003c/code\u003e will behave as if EOF was reached.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetBufNonBlocking\u003c/a\u003e\u003c/code\u003e ignores the prevailing \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e\n on the handle, and reads bytes directly.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetBufNonBlocking\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr1 -\u003e pointer α pr2 -\u003e Int -\u003e cr Int",
        "fct-source": "src/System-IO-SaferFileHandles.html#hGetBufNonBlocking",
        "fct-type": "function",
        "title": "hGetBufNonBlocking"
      },
      "index": {
        "description": "hGetBufNonBlocking hdl buf count reads data from the handle hdl into the buffer buf until either EOF is reached or count bit bytes have been read or there is no more data available to read immediately hGetBufNonBlocking is identical to hGetBuf except that it will never block waiting for data to become available instead it returns only whatever data is available To wait for data to arrive before calling hGetBufNonBlocking use hWaitForInput hGetBufNonBlocking ignores whatever TextEncoding the handle is currently using and reads bytes directly from the underlying IO device If the handle is pipe or socket and the writing end is closed hGetBufNonBlocking will behave as if EOF was reached hGetBufNonBlocking ignores the prevailing TextEncoding and NewlineMode on the handle and reads bytes directly Wraps System.IO hGetBufNonBlocking",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hGetBufNonBlocking",
        "normalized": "a b c-\u003ed e c-\u003eInt-\u003ef Int",
        "package": "safer-file-handles",
        "partial": "Get Buf Non Blocking",
        "signature": "handle ioMode pr-\u003epointer α pr-\u003eInt-\u003ecr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hGetBufSome",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetBufSome\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl buf count\u003c/code\u003e reads data from the handle \u003ccode\u003ehdl\u003c/code\u003e\n into the buffer \u003ccode\u003ebuf\u003c/code\u003e.  If there is any data available to read,\n then \u003ccode\u003e\u003ca\u003ehGetBufSome\u003c/a\u003e\u003c/code\u003e returns it immediately; it only blocks if there\n is no data to be read.\n\u003c/p\u003e\u003cp\u003eIt returns the number of bytes actually read.  This may be zero if\n EOF was reached before any data was read (or if \u003ccode\u003ecount\u003c/code\u003e is zero).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetBufSome\u003c/a\u003e\u003c/code\u003e never raises an EOF exception, instead it returns a value\n smaller than \u003ccode\u003ecount\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the handle is a pipe or socket, and the writing end\n is closed, \u003ccode\u003e\u003ca\u003ehGetBufSome\u003c/a\u003e\u003c/code\u003e will behave as if EOF was reached.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetBufSome\u003c/a\u003e\u003c/code\u003e ignores the prevailing \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e\n on the handle, and reads bytes directly.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetBufSome\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr1 -\u003e pointer α pr2 -\u003e Int -\u003e cr Int",
        "fct-source": "src/System-IO-SaferFileHandles.html#hGetBufSome",
        "fct-type": "function",
        "title": "hGetBufSome"
      },
      "index": {
        "description": "hGetBufSome hdl buf count reads data from the handle hdl into the buffer buf If there is any data available to read then hGetBufSome returns it immediately it only blocks if there is no data to be read It returns the number of bytes actually read This may be zero if EOF was reached before any data was read or if count is zero hGetBufSome never raises an EOF exception instead it returns value smaller than count If the handle is pipe or socket and the writing end is closed hGetBufSome will behave as if EOF was reached hGetBufSome ignores the prevailing TextEncoding and NewlineMode on the handle and reads bytes directly Wraps System.IO hGetBufSome",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hGetBufSome",
        "normalized": "a b c-\u003ed e c-\u003eInt-\u003ef Int",
        "package": "safer-file-handles",
        "partial": "Get Buf Some",
        "signature": "handle ioMode pr-\u003epointer α pr-\u003eInt-\u003ecr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hGetBuffering",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetBuffering\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the current buffering mode for\n \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetBuffering\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr BufferMode",
        "fct-source": "src/System-IO-SaferFileHandles.html#hGetBuffering",
        "fct-type": "function",
        "title": "hGetBuffering"
      },
      "index": {
        "description": "Computation hGetBuffering hdl returns the current buffering mode for hdl Wraps System.IO hGetBuffering",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hGetBuffering",
        "normalized": "a b c-\u003ed BufferMode",
        "package": "safer-file-handles",
        "partial": "Get Buffering",
        "signature": "handle ioMode pr-\u003ecr BufferMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hGetChar",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e reads a character from the file or\n channel managed by \u003ccode\u003ehdl\u003c/code\u003e, blocking until a character is available.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Char",
        "fct-source": "src/System-IO-SaferFileHandles.html#hGetChar",
        "fct-type": "function",
        "title": "hGetChar"
      },
      "index": {
        "description": "Computation hGetChar hdl reads character from the file or channel managed by hdl blocking until character is available This operation may fail with isEOFError if the end of file has been reached Wraps System.IO hGetChar",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hGetChar",
        "normalized": "a b c-\u003ed Char",
        "package": "safer-file-handles",
        "partial": "Get Char",
        "signature": "handle ioMode pr-\u003ecr Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the list of characters\n corresponding to the unread portion of the channel or file managed\n by \u003ccode\u003ehdl\u003c/code\u003e, which is put into an intermediate state, \u003cem\u003esemi-closed\u003c/em\u003e.\n In this state, \u003ccode\u003ehdl\u003c/code\u003e is effectively closed,\n but items are read from \u003ccode\u003ehdl\u003c/code\u003e on demand and accumulated in a special\n list returned by \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAny operation that fails because a handle is closed,\n also fails if a handle is semi-closed.\n A semi-closed handle becomes closed:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if its corresponding region terminates;\n\u003c/li\u003e\u003cli\u003e if an I/O error occurs when reading an item from the handle;\n\u003c/li\u003e\u003cli\u003e or once the entire contents of the handle has been read.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOnce a semi-closed handle becomes closed, the contents of the\n associated list becomes fixed.  The contents of this final list is\n only partially specified: it will contain at least all the items of\n the stream that were evaluated prior to the handle becoming closed.\n\u003c/p\u003e\u003cp\u003eAny I/O errors encountered while a handle is semi-closed are simply\n discarded.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr String",
        "fct-source": "src/System-IO-SaferFileHandles.html#hGetContents",
        "fct-type": "function",
        "title": "hGetContents"
      },
      "index": {
        "description": "Computation hGetContents hdl returns the list of characters corresponding to the unread portion of the channel or file managed by hdl which is put into an intermediate state semi-closed In this state hdl is effectively closed but items are read from hdl on demand and accumulated in special list returned by hGetContents hdl Any operation that fails because handle is closed also fails if handle is semi-closed semi-closed handle becomes closed if its corresponding region terminates if an error occurs when reading an item from the handle or once the entire contents of the handle has been read Once semi-closed handle becomes closed the contents of the associated list becomes fixed The contents of this final list is only partially specified it will contain at least all the items of the stream that were evaluated prior to the handle becoming closed Any errors encountered while handle is semi-closed are simply discarded This operation may fail with isEOFError if the end of file has been reached Wraps System.IO hGetContents",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hGetContents",
        "normalized": "a b c-\u003ed String",
        "package": "safer-file-handles",
        "partial": "Get Contents",
        "signature": "handle ioMode pr-\u003ecr String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hGetEcho",
      "description": {
        "fct-descr": "\u003cp\u003eGet the echoing status of a handle connected to a terminal.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetEcho\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Bool",
        "fct-source": "src/System-IO-SaferFileHandles.html#hGetEcho",
        "fct-type": "function",
        "title": "hGetEcho"
      },
      "index": {
        "description": "Get the echoing status of handle connected to terminal Wraps System.IO hGetEcho",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hGetEcho",
        "normalized": "a b c-\u003ed Bool",
        "package": "safer-file-handles",
        "partial": "Get Echo",
        "signature": "handle ioMode pr-\u003ecr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hGetEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e for the specified handle,\n or \u003ccode\u003eNothing\u003c/code\u003e if the handle is in binary mode.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e remembers nothing about the state of the\n encoder/decoder in use on this handle. For example, if the\n encoding in use is UTF-16, then using \u003ccode\u003e\u003ca\u003ehGetEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehSetEncoding\u003c/a\u003e\u003c/code\u003e to\n save and restore the encoding may result in an extra byte-order-mark being\n written to the file.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetEncoding\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr (Maybe TextEncoding)",
        "fct-source": "src/System-IO-SaferFileHandles.html#hGetEncoding",
        "fct-type": "function",
        "title": "hGetEncoding"
      },
      "index": {
        "description": "Return the current TextEncoding for the specified handle or Nothing if the handle is in binary mode Note that the TextEncoding remembers nothing about the state of the encoder decoder in use on this handle For example if the encoding in use is UTF-16 then using hGetEncoding and hSetEncoding to save and restore the encoding may result in an extra byte-order-mark being written to the file Wraps System.IO hGetEncoding",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hGetEncoding",
        "normalized": "a b c-\u003ed(Maybe TextEncoding)",
        "package": "safer-file-handles",
        "partial": "Get Encoding",
        "signature": "handle ioMode pr-\u003ecr(Maybe TextEncoding)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hGetLine",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e reads a line from the file or\n channel managed by \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file is encountered when reading\n    the \u003cem\u003efirst\u003c/em\u003e character of the line.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e encounters end-of-file at any other point while reading\n in a line, it is treated as a line terminator and the (partial)\n line is returned.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr String",
        "fct-source": "src/System-IO-SaferFileHandles.html#hGetLine",
        "fct-type": "function",
        "title": "hGetLine"
      },
      "index": {
        "description": "Computation hGetLine hdl reads line from the file or channel managed by hdl This operation may fail with isEOFError if the end of file is encountered when reading the first character of the line If hGetLine encounters end-of-file at any other point while reading in line it is treated as line terminator and the partial line is returned Wraps System.IO hGetLine",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hGetLine",
        "normalized": "a b c-\u003ed String",
        "package": "safer-file-handles",
        "partial": "Get Line",
        "signature": "handle ioMode pr-\u003ecr String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hGetPosn",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the current I/O position of \u003ccode\u003ehdl\u003c/code\u003e as\n a value of the abstract type \u003ccode\u003e\u003ca\u003eHandlePosn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr HandlePosn",
        "fct-source": "src/System-IO-SaferFileHandles.html#hGetPosn",
        "fct-type": "function",
        "title": "hGetPosn"
      },
      "index": {
        "description": "Computation hGetPosn hdl returns the current position of hdl as value of the abstract type HandlePosn Wraps System.IO hGetPosn",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hGetPosn",
        "normalized": "a b c-\u003ed HandlePosn",
        "package": "safer-file-handles",
        "partial": "Get Posn",
        "signature": "handle ioMode pr-\u003ecr HandlePosn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hIsClosed",
      "description": {
        "fct-descr": "\u003cp\u003eNote that this operation should always return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e since the \u003ccode\u003eregions\u003c/code\u003e\n framework ensures that handles are never closed. This function is used only\n for testing the correctness of this library.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsClosed\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Bool",
        "fct-source": "src/System-IO-SaferFileHandles.html#hIsClosed",
        "fct-type": "function",
        "title": "hIsClosed"
      },
      "index": {
        "description": "Note that this operation should always return False since the regions framework ensures that handles are never closed This function is used only for testing the correctness of this library Wraps System.IO hIsClosed",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hIsClosed",
        "normalized": "a b c-\u003ed Bool",
        "package": "safer-file-handles",
        "partial": "Is Closed",
        "signature": "handle ioMode pr-\u003ecr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hIsEOF",
      "description": {
        "fct-descr": "\u003cp\u003eFor a readable handle \u003ccode\u003ehdl\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehIsEOF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if no further input can be taken from \u003ccode\u003ehdl\u003c/code\u003e or for a\n physical file, if the current I/O position is equal to the length of\n the file.  Otherwise, it returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNOTE: \u003ccode\u003e\u003ca\u003ehIsEOF\u003c/a\u003e\u003c/code\u003e may block, because it is the same as calling\n \u003ccode\u003e\u003ca\u003ehLookAhead\u003c/a\u003e\u003c/code\u003e and checking for an EOF exception.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsEOF\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Bool",
        "fct-source": "src/System-IO-SaferFileHandles.html#hIsEOF",
        "fct-type": "function",
        "title": "hIsEOF"
      },
      "index": {
        "description": "For readable handle hdl hIsEOF hdl returns True if no further input can be taken from hdl or for physical file if the current position is equal to the length of the file Otherwise it returns False NOTE hIsEOF may block because it is the same as calling hLookAhead and checking for an EOF exception Wraps System.IO hIsEOF",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hIsEOF",
        "normalized": "a b c-\u003ed Bool",
        "package": "safer-file-handles",
        "partial": "Is EOF",
        "signature": "handle ioMode pr-\u003ecr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hIsOpen",
      "description": {
        "fct-descr": "\u003cp\u003eNote that this operation should always return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e since the \u003ccode\u003eregions\u003c/code\u003e\n framework ensures that handles are always open. This function is used only\n for testing the correctness of this library.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsOpen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Bool",
        "fct-source": "src/System-IO-SaferFileHandles.html#hIsOpen",
        "fct-type": "function",
        "title": "hIsOpen"
      },
      "index": {
        "description": "Note that this operation should always return True since the regions framework ensures that handles are always open This function is used only for testing the correctness of this library Wraps System.IO hIsOpen",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hIsOpen",
        "normalized": "a b c-\u003ed Bool",
        "package": "safer-file-handles",
        "partial": "Is Open",
        "signature": "handle ioMode pr-\u003ecr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hIsReadable",
      "description": {
        "fct-descr": "\u003cp\u003eNote that this operation should always return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for IOModes which have\n an instance for \u003ccode\u003e\u003ca\u003eReadModes\u003c/a\u003e\u003c/code\u003e. This function is used only for testing the\n correctness of this library.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsReadable\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Bool",
        "fct-source": "src/System-IO-SaferFileHandles.html#hIsReadable",
        "fct-type": "function",
        "title": "hIsReadable"
      },
      "index": {
        "description": "Note that this operation should always return True for IOModes which have an instance for ReadModes This function is used only for testing the correctness of this library Wraps System.IO hIsReadable",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hIsReadable",
        "normalized": "a b c-\u003ed Bool",
        "package": "safer-file-handles",
        "partial": "Is Readable",
        "signature": "handle ioMode pr-\u003ecr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hIsSeekable",
      "description": {
        "fct-descr": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsSeekable\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Bool",
        "fct-source": "src/System-IO-SaferFileHandles.html#hIsSeekable",
        "fct-type": "function",
        "title": "hIsSeekable"
      },
      "index": {
        "description": "Wraps System.IO hIsSeekable",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hIsSeekable",
        "normalized": "a b c-\u003ed Bool",
        "package": "safer-file-handles",
        "partial": "Is Seekable",
        "signature": "handle ioMode pr-\u003ecr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hIsTerminalDevice",
      "description": {
        "fct-descr": "\u003cp\u003eIs the handle connected to a terminal?\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsTerminalDevice\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Bool",
        "fct-source": "src/System-IO-SaferFileHandles.html#hIsTerminalDevice",
        "fct-type": "function",
        "title": "hIsTerminalDevice"
      },
      "index": {
        "description": "Is the handle connected to terminal Wraps System.IO hIsTerminalDevice",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hIsTerminalDevice",
        "normalized": "a b c-\u003ed Bool",
        "package": "safer-file-handles",
        "partial": "Is Terminal Device",
        "signature": "handle ioMode pr-\u003ecr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hIsWritable",
      "description": {
        "fct-descr": "\u003cp\u003eNote that this operation should always return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for IOModes which have\n an instance for \u003ccode\u003e\u003ca\u003eWriteModes\u003c/a\u003e\u003c/code\u003e. This function is used only for testing the\n correctness of this library.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsWritable\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Bool",
        "fct-source": "src/System-IO-SaferFileHandles.html#hIsWritable",
        "fct-type": "function",
        "title": "hIsWritable"
      },
      "index": {
        "description": "Note that this operation should always return True for IOModes which have an instance for WriteModes This function is used only for testing the correctness of this library Wraps System.IO hIsWritable",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hIsWritable",
        "normalized": "a b c-\u003ed Bool",
        "package": "safer-file-handles",
        "partial": "Is Writable",
        "signature": "handle ioMode pr-\u003ecr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hLookAhead",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehLookAhead\u003c/a\u003e\u003c/code\u003e returns the next character from the handle\n without removing it from the input buffer, blocking until a character\n is available.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehLookAhead\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Char",
        "fct-source": "src/System-IO-SaferFileHandles.html#hLookAhead",
        "fct-type": "function",
        "title": "hLookAhead"
      },
      "index": {
        "description": "Computation hLookAhead returns the next character from the handle without removing it from the input buffer blocking until character is available This operation may fail with isEOFError if the end of file has been reached Wraps System.IO hLookAhead",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hLookAhead",
        "normalized": "a b c-\u003ed Char",
        "package": "safer-file-handles",
        "partial": "Look Ahead",
        "signature": "handle ioMode pr-\u003ecr Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hPrint",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPrint\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl t\u003c/code\u003e writes the string representation of \u003ccode\u003et\u003c/code\u003e\n given by the \u003ccode\u003eshows\u003c/code\u003e function to the file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e\n and appends a newline.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisFullError\u003c/a\u003e\u003c/code\u003e if the device is full; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if another system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehPrint\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e α -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hPrint",
        "fct-type": "function",
        "title": "hPrint"
      },
      "index": {
        "description": "Computation hPrint hdl writes the string representation of given by the shows function to the file or channel managed by hdl and appends newline This operation may fail with isFullError if the device is full or isPermissionError if another system resource limit would be exceeded Wraps System.IO hPrint",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hPrint",
        "normalized": "a b c-\u003ed-\u003ee()",
        "package": "safer-file-handles",
        "partial": "Print",
        "signature": "handle ioMode pr-\u003eα-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hPutBuf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehPutBuf\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl buf count\u003c/code\u003e writes \u003ccode\u003ecount\u003c/code\u003e 8-bit bytes from the\n buffer \u003ccode\u003ebuf\u003c/code\u003e to the handle \u003ccode\u003ehdl\u003c/code\u003e.  It returns ().\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehPutBuf\u003c/a\u003e\u003c/code\u003e ignores any text encoding that applies to the handle,\n writing the bytes directly to the underlying file or device.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehPutBuf\u003c/a\u003e\u003c/code\u003e ignores the prevailing \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e on the handle, and writes bytes directly.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eResourceVanished\u003c/code\u003e if the handle is a pipe or socket, and the\n    reading end is closed.  (If this is a POSIX system, and the program\n    has not asked to ignore SIGPIPE, then a SIGPIPE may be delivered\n    instead, whose default action is to terminate the program).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehPutBuf\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr1 -\u003e pointer α pr2 -\u003e Int -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hPutBuf",
        "fct-type": "function",
        "title": "hPutBuf"
      },
      "index": {
        "description": "hPutBuf hdl buf count writes count bit bytes from the buffer buf to the handle hdl It returns hPutBuf ignores any text encoding that applies to the handle writing the bytes directly to the underlying file or device hPutBuf ignores the prevailing TextEncoding and NewlineMode on the handle and writes bytes directly This operation may fail with ResourceVanished if the handle is pipe or socket and the reading end is closed If this is POSIX system and the program has not asked to ignore SIGPIPE then SIGPIPE may be delivered instead whose default action is to terminate the program Wraps System.IO hPutBuf",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hPutBuf",
        "normalized": "a b c-\u003ed e c-\u003eInt-\u003ef()",
        "package": "safer-file-handles",
        "partial": "Put Buf",
        "signature": "handle ioMode pr-\u003epointer α pr-\u003eInt-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hPutBufNonBlocking",
      "description": {
        "fct-descr": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehPutBufNonBlocking\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr1 -\u003e pointer α pr2 -\u003e Int -\u003e cr Int",
        "fct-source": "src/System-IO-SaferFileHandles.html#hPutBufNonBlocking",
        "fct-type": "function",
        "title": "hPutBufNonBlocking"
      },
      "index": {
        "description": "Wraps System.IO hPutBufNonBlocking",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hPutBufNonBlocking",
        "normalized": "a b c-\u003ed e c-\u003eInt-\u003ef Int",
        "package": "safer-file-handles",
        "partial": "Put Buf Non Blocking",
        "signature": "handle ioMode pr-\u003epointer α pr-\u003eInt-\u003ecr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hPutChar",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl ch\u003c/code\u003e writes the character \u003ccode\u003ech\u003c/code\u003e to the\n file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e.  Characters may be buffered if\n buffering is enabled for \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisFullError\u003c/a\u003e\u003c/code\u003e if the device is full; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if another system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e Char -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hPutChar",
        "fct-type": "function",
        "title": "hPutChar"
      },
      "index": {
        "description": "Computation hPutChar hdl ch writes the character ch to the file or channel managed by hdl Characters may be buffered if buffering is enabled for hdl This operation may fail with isFullError if the device is full or isPermissionError if another system resource limit would be exceeded Wraps System.IO hPutChar",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hPutChar",
        "normalized": "a b c-\u003eChar-\u003ed()",
        "package": "safer-file-handles",
        "partial": "Put Char",
        "signature": "handle ioMode pr-\u003eChar-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hPutStr",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl s\u003c/code\u003e writes the string\n \u003ccode\u003es\u003c/code\u003e to the file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisFullError\u003c/a\u003e\u003c/code\u003e if the device is full; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if another system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e String -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hPutStr",
        "fct-type": "function",
        "title": "hPutStr"
      },
      "index": {
        "description": "Computation hPutStr hdl writes the string to the file or channel managed by hdl This operation may fail with isFullError if the device is full or isPermissionError if another system resource limit would be exceeded Wraps System.IO hPutStr",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hPutStr",
        "normalized": "a b c-\u003eString-\u003ed()",
        "package": "safer-file-handles",
        "partial": "Put Str",
        "signature": "handle ioMode pr-\u003eString-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehPutStrLn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e String -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hPutStrLn",
        "fct-type": "function",
        "title": "hPutStrLn"
      },
      "index": {
        "description": "The same as hPutStr but adds newline character Wraps System.IO hPutStrLn",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hPutStrLn",
        "normalized": "a b c-\u003eString-\u003ed()",
        "package": "safer-file-handles",
        "partial": "Put Str Ln",
        "signature": "handle ioMode pr-\u003eString-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hReady",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehReady\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e indicates whether at least one item is\n available for input from handle \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehReady\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Bool",
        "fct-source": "src/System-IO-SaferFileHandles.html#hReady",
        "fct-type": "function",
        "title": "hReady"
      },
      "index": {
        "description": "Computation hReady hdl indicates whether at least one item is available for input from handle hdl This operation may fail with isEOFError if the end of file has been reached Wraps System.IO hReady",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hReady",
        "normalized": "a b c-\u003ed Bool",
        "package": "safer-file-handles",
        "partial": "Ready",
        "signature": "handle ioMode pr-\u003ecr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hSeek",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl mode i\u003c/code\u003e sets the position of handle \u003ccode\u003ehdl\u003c/code\u003e\n depending on \u003ccode\u003emode\u003c/code\u003e. The offset \u003ccode\u003ei\u003c/code\u003e is given in terms of 8-bit bytes.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ehdl\u003c/code\u003e is block- or line-buffered, then seeking to a position which is not\n in the current buffer will first cause any items in the output buffer to be\n written to the device, and then cause the input buffer to be discarded.  Some\n handles may not be seekable (see \u003ccode\u003e\u003ca\u003ehIsSeekable\u003c/a\u003e\u003c/code\u003e), or only support a subset of\n the possible positioning operations (for instance, it may only be possible to\n seek to the end of a tape, or to a positive offset from the beginning or\n current position).\n It is not possible to set a negative I/O position, or\n for a physical file, an I/O position beyond the current end-of-file.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if a system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e SeekMode -\u003e Integer -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hSeek",
        "fct-type": "function",
        "title": "hSeek"
      },
      "index": {
        "description": "Computation hSeek hdl mode sets the position of handle hdl depending on mode The offset is given in terms of bit bytes If hdl is block or line-buffered then seeking to position which is not in the current buffer will first cause any items in the output buffer to be written to the device and then cause the input buffer to be discarded Some handles may not be seekable see hIsSeekable or only support subset of the possible positioning operations for instance it may only be possible to seek to the end of tape or to positive offset from the beginning or current position It is not possible to set negative position or for physical file an position beyond the current end-of-file This operation may fail with isPermissionError if system resource limit would be exceeded Wraps System.IO hSeek",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hSeek",
        "normalized": "a b c-\u003eSeekMode-\u003eInteger-\u003ed()",
        "package": "safer-file-handles",
        "partial": "Seek",
        "signature": "handle ioMode pr-\u003eSeekMode-\u003eInteger-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hSetBinaryMode",
      "description": {
        "fct-descr": "\u003cp\u003eSelect binary mode (\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e) or text mode (\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e) on a open handle.\n (See also \u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eThis has the same effect as calling \u003ccode\u003e\u003ca\u003ehSetEncoding\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003elatin1\u003c/a\u003e\u003c/code\u003e, together\n with \u003ccode\u003e\u003ca\u003ehSetNewlineMode\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003enoNewlineTranslation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e Bool -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hSetBinaryMode",
        "fct-type": "function",
        "title": "hSetBinaryMode"
      },
      "index": {
        "description": "Select binary mode True or text mode False on open handle See also openBinaryFile This has the same effect as calling hSetEncoding with latin1 together with hSetNewlineMode with noNewlineTranslation Wraps System.IO hSetBinaryMode",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hSetBinaryMode",
        "normalized": "a b c-\u003eBool-\u003ed()",
        "package": "safer-file-handles",
        "partial": "Set Binary Mode",
        "signature": "handle ioMode pr-\u003eBool-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hSetBuffering",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehSetBuffering\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl mode\u003c/code\u003e sets the mode of buffering for\n handle \u003ccode\u003ehdl\u003c/code\u003e on subsequent reads and writes.\n\u003c/p\u003e\u003cp\u003eIf the buffer mode is changed from \u003ccode\u003e\u003ca\u003eBlockBuffering\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eLineBuffering\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eNoBuffering\u003c/a\u003e\u003c/code\u003e, then\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if \u003ccode\u003ehdl\u003c/code\u003e is writable, the buffer is flushed as for \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e if \u003ccode\u003ehdl\u003c/code\u003e is not writable, the contents of the buffer is discarded.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if the handle has already been used for reading\n    or writing and the implementation does not allow the buffering mode\n    to be changed.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSetBuffering\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e BufferMode -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hSetBuffering",
        "fct-type": "function",
        "title": "hSetBuffering"
      },
      "index": {
        "description": "Computation hSetBuffering hdl mode sets the mode of buffering for handle hdl on subsequent reads and writes If the buffer mode is changed from BlockBuffering or LineBuffering to NoBuffering then if hdl is writable the buffer is flushed as for hFlush if hdl is not writable the contents of the buffer is discarded This operation may fail with isPermissionError if the handle has already been used for reading or writing and the implementation does not allow the buffering mode to be changed Wraps System.IO hSetBuffering",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hSetBuffering",
        "normalized": "a b c-\u003eBufferMode-\u003ed()",
        "package": "safer-file-handles",
        "partial": "Set Buffering",
        "signature": "handle ioMode pr-\u003eBufferMode-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hSetEcho",
      "description": {
        "fct-descr": "\u003cp\u003eSet the echoing status of a handle connected to a terminal.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSetEcho\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e Bool -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hSetEcho",
        "fct-type": "function",
        "title": "hSetEcho"
      },
      "index": {
        "description": "Set the echoing status of handle connected to terminal Wraps System.IO hSetEcho",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hSetEcho",
        "normalized": "a b c-\u003eBool-\u003ed()",
        "package": "safer-file-handles",
        "partial": "Set Echo",
        "signature": "handle ioMode pr-\u003eBool-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hSetEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eThe action \u003ccode\u003e\u003ca\u003ehSetEncoding\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e \u003ccode\u003eencoding\u003c/code\u003e changes the text encoding for\n the handle \u003ccode\u003ehdl\u003c/code\u003e to \u003ccode\u003eencoding\u003c/code\u003e.  The default encoding when a\n handle is created is \u003ccode\u003e\u003ca\u003elocaleEncoding\u003c/a\u003e\u003c/code\u003e, namely the default\n encoding for the current locale.\n\u003c/p\u003e\u003cp\u003eTo create a handle with no encoding at all, use\n \u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e. To stop further encoding or decoding on an existing\n handle, use \u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehSetEncoding\u003c/a\u003e\u003c/code\u003e may need to flush buffered data in order to change\n the encoding.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSetEncoding\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e TextEncoding -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hSetEncoding",
        "fct-type": "function",
        "title": "hSetEncoding"
      },
      "index": {
        "description": "The action hSetEncoding hdl encoding changes the text encoding for the handle hdl to encoding The default encoding when handle is created is localeEncoding namely the default encoding for the current locale To create handle with no encoding at all use openBinaryFile To stop further encoding or decoding on an existing handle use hSetBinaryMode hSetEncoding may need to flush buffered data in order to change the encoding Wraps System.IO hSetEncoding",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hSetEncoding",
        "normalized": "a b c-\u003eTextEncoding-\u003ed()",
        "package": "safer-file-handles",
        "partial": "Set Encoding",
        "signature": "handle ioMode pr-\u003eTextEncoding-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hSetFileSize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehSetFileSize\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e \u003ccode\u003esize\u003c/code\u003e truncates the physical file with handle \u003ccode\u003ehdl\u003c/code\u003e\n to \u003ccode\u003esize\u003c/code\u003e bytes.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSetFileSize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e Integer -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hSetFileSize",
        "fct-type": "function",
        "title": "hSetFileSize"
      },
      "index": {
        "description": "hSetFileSize hdl size truncates the physical file with handle hdl to size bytes Wraps System.IO hSetFileSize",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hSetFileSize",
        "normalized": "a b c-\u003eInteger-\u003ed()",
        "package": "safer-file-handles",
        "partial": "Set File Size",
        "signature": "handle ioMode pr-\u003eInteger-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hSetNewlineMode",
      "description": {
        "fct-descr": "\u003cp\u003eSet the \u003ccode\u003e\u003ca\u003eNewlineMode\u003c/a\u003e\u003c/code\u003e on the specified handle.\n\u003c/p\u003e\u003cp\u003eAll buffered data is flushed first.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSetNewlineMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e NewlineMode -\u003e cr ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hSetNewlineMode",
        "fct-type": "function",
        "title": "hSetNewlineMode"
      },
      "index": {
        "description": "Set the NewlineMode on the specified handle All buffered data is flushed first Wraps System.IO hSetNewlineMode",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hSetNewlineMode",
        "normalized": "a b c-\u003eNewlineMode-\u003ed()",
        "package": "safer-file-handles",
        "partial": "Set Newline Mode",
        "signature": "handle ioMode pr-\u003eNewlineMode-\u003ecr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hSetPosn",
      "description": {
        "fct-descr": "\u003cp\u003eIf a call to \u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns a position \u003ccode\u003ep\u003c/code\u003e, then computation\n \u003ccode\u003e\u003ca\u003ehSetPosn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e sets the position of \u003ccode\u003ehdl\u003c/code\u003e to the position it held at the time\n of the call to \u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if a system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSetPosn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "HandlePosn -\u003e m ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#hSetPosn",
        "fct-type": "function",
        "title": "hSetPosn"
      },
      "index": {
        "description": "If call to hGetPosn hdl returns position then computation hSetPosn sets the position of hdl to the position it held at the time of the call to hGetPosn This operation may fail with isPermissionError if system resource limit would be exceeded Wraps System.IO hSetPosn",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hSetPosn",
        "normalized": "HandlePosn-\u003ea()",
        "package": "safer-file-handles",
        "partial": "Set Posn",
        "signature": "HandlePosn-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hShow",
      "description": {
        "fct-descr": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehShow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr String",
        "fct-source": "src/System-IO-SaferFileHandles.html#hShow",
        "fct-type": "function",
        "title": "hShow"
      },
      "index": {
        "description": "Wraps System.IO hShow",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hShow",
        "normalized": "a b c-\u003ed String",
        "package": "safer-file-handles",
        "partial": "Show",
        "signature": "handle ioMode pr-\u003ecr String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hTell",
      "description": {
        "fct-descr": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehTell\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e cr Integer",
        "fct-source": "src/System-IO-SaferFileHandles.html#hTell",
        "fct-type": "function",
        "title": "hTell"
      },
      "index": {
        "description": "Wraps System.IO hTell",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hTell",
        "normalized": "a b c-\u003ed Integer",
        "package": "safer-file-handles",
        "partial": "Tell",
        "signature": "handle ioMode pr-\u003ecr Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:hWaitForInput",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehWaitForInput\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl t\u003c/code\u003e\n waits until input is available on handle \u003ccode\u003ehdl\u003c/code\u003e.\n It returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e as soon as input is available on \u003ccode\u003ehdl\u003c/code\u003e,\n or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if no input is available within \u003ccode\u003et\u003c/code\u003e milliseconds.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003et\u003c/code\u003e is less than zero, then \u003ccode\u003ehWaitForInput\u003c/code\u003e waits indefinitely.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNOTE for GHC users: unless you use the \u003ccode\u003e-threaded\u003c/code\u003e flag,\n \u003ccode\u003ehWaitForInput t\u003c/code\u003e where \u003ccode\u003et \u003e= 0\u003c/code\u003e will block all other Haskell\n threads for the duration of the call.  It behaves like a\n \u003ccode\u003esafe\u003c/code\u003e foreign call in this respect.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehWaitForInput\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "handle ioMode pr -\u003e Int -\u003e cr Bool",
        "fct-source": "src/System-IO-SaferFileHandles.html#hWaitForInput",
        "fct-type": "function",
        "title": "hWaitForInput"
      },
      "index": {
        "description": "Computation hWaitForInput hdl waits until input is available on handle hdl It returns True as soon as input is available on hdl or False if no input is available within milliseconds If is less than zero then hWaitForInput waits indefinitely This operation may fail with isEOFError if the end of file has been reached NOTE for GHC users unless you use the threaded flag hWaitForInput where will block all other Haskell threads for the duration of the call It behaves like safe foreign call in this respect Wraps System.IO hWaitForInput",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "hWaitForInput",
        "normalized": "a b c-\u003eInt-\u003ed Bool",
        "package": "safer-file-handles",
        "partial": "Wait For Input",
        "signature": "handle ioMode pr-\u003eInt-\u003ecr Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:inputNL",
      "description": {
        "fct-descr": "\u003cp\u003ethe representation of newlines on input\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "Newline",
        "fct-type": "function",
        "title": "inputNL"
      },
      "index": {
        "description": "the representation of newlines on input",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "inputNL",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "NL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:interact",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "(String -\u003e String) -\u003e m ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#interact",
        "fct-type": "function",
        "title": "interact"
      },
      "index": {
        "description": "Generalizes System.IO interact to any MonadIO",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "interact",
        "normalized": "(String-\u003eString)-\u003ea()",
        "package": "safer-file-handles",
        "partial": "",
        "signature": "(String-\u003eString)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:isEOF",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eisEOF\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "m Bool",
        "fct-source": "src/System-IO-SaferFileHandles.html#isEOF",
        "fct-type": "function",
        "title": "isEOF"
      },
      "index": {
        "description": "Generalizes System.IO isEOF to any MonadIO",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "isEOF",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "EOF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:latin1",
      "description": {
        "fct-descr": "\u003cp\u003eThe Latin1 (ISO8859-1) encoding.  This encoding maps bytes\n directly to the first 256 Unicode code points, and is thus not a\n complete Unicode encoding.  An attempt to write a character greater than\n '\\255' to a \u003ccode\u003eHandle\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003elatin1\u003c/a\u003e\u003c/code\u003e encoding will result in an error.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "TextEncoding",
        "fct-type": "function",
        "title": "latin1"
      },
      "index": {
        "description": "The Latin1 ISO8859-1 encoding This encoding maps bytes directly to the first Unicode code points and is thus not complete Unicode encoding An attempt to write character greater than to Handle using the latin1 encoding will result in an error",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "latin1",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:localeEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eThe Unicode encoding of the current locale\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "TextEncoding",
        "fct-type": "function",
        "title": "localeEncoding"
      },
      "index": {
        "description": "The Unicode encoding of the current locale",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "localeEncoding",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:mkIOMode",
      "description": {
        "fct-descr": "\u003cp\u003eAn overloaded IOMode constructor.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "IOMode ioMode",
        "fct-type": "method",
        "title": "mkIOMode"
      },
      "index": {
        "description": "An overloaded IOMode constructor",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "mkIOMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "IOMode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:mkTextEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003emkTextEncoding\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "String -\u003e m TextEncoding",
        "fct-source": "src/System-IO-SaferFileHandles.html#mkTextEncoding",
        "fct-type": "function",
        "title": "mkTextEncoding"
      },
      "index": {
        "description": "Generalizes System.IO mkTextEncoding to any MonadIO",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "mkTextEncoding",
        "normalized": "String-\u003ea TextEncoding",
        "package": "safer-file-handles",
        "partial": "Text Encoding",
        "signature": "String-\u003em TextEncoding"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:nativeNewline",
      "description": {
        "fct-descr": "\u003cp\u003eThe native newline representation for the current platform: \u003ccode\u003e\u003ca\u003eLF\u003c/a\u003e\u003c/code\u003e\n on Unix systems, \u003ccode\u003e\u003ca\u003eCRLF\u003c/a\u003e\u003c/code\u003e on Windows.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "Newline",
        "fct-type": "function",
        "title": "nativeNewline"
      },
      "index": {
        "description": "The native newline representation for the current platform LF on Unix systems CRLF on Windows",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "nativeNewline",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Newline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:nativeNewlineMode",
      "description": {
        "fct-descr": "\u003cp\u003eUse the native newline representation on both input and output\n\u003c/p\u003e\u003cpre\u003e nativeNewlineMode  = NewlineMode { inputNL  = nativeNewline\n                                    outputNL = nativeNewline }\n\u003c/pre\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "NewlineMode",
        "fct-type": "function",
        "title": "nativeNewlineMode"
      },
      "index": {
        "description": "Use the native newline representation on both input and output nativeNewlineMode NewlineMode inputNL nativeNewline outputNL nativeNewline",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "nativeNewlineMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Newline Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:noNewlineTranslation",
      "description": {
        "fct-descr": "\u003cp\u003eDo no newline translation at all.\n\u003c/p\u003e\u003cpre\u003e noNewlineTranslation  = NewlineMode { inputNL  = LF, outputNL = LF }\n\u003c/pre\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "NewlineMode",
        "fct-type": "function",
        "title": "noNewlineTranslation"
      },
      "index": {
        "description": "Do no newline translation at all noNewlineTranslation NewlineMode inputNL LF outputNL LF",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "noNewlineTranslation",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Newline Translation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:openBinaryFile",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e, but open the file in binary mode.\n\u003c/p\u003e\u003cp\u003eOn Windows, reading a file in text mode (which is the default) will translate\n CRLF to LF, and writing will translate LF to CRLF. This is usually what you\n want with text files.  With binary files this is undesirable; also, as usual\n under Microsoft operating systems, text mode treats control-Z as EOF. Binary\n mode turns off all special treatment of end-of-line and end-of-file\n characters.  (See also \u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eThis provides a safer replacement for \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "FilePath ar -\u003e IOMode ioMode -\u003e RegionT s pr (RegionalFileHandle ioMode (RegionT s pr))",
        "fct-source": "src/System-IO-SaferFileHandles.html#openBinaryFile",
        "fct-type": "function",
        "title": "openBinaryFile"
      },
      "index": {
        "description": "Like openFile but open the file in binary mode On Windows reading file in text mode which is the default will translate CRLF to LF and writing will translate LF to CRLF This is usually what you want with text files With binary files this is undesirable also as usual under Microsoft operating systems text mode treats control-Z as EOF Binary mode turns off all special treatment of end-of-line and end-of-file characters See also hSetBinaryMode This provides safer replacement for System.IO openBinaryFile",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "openBinaryFile",
        "normalized": "FilePath a-\u003eIOMode b-\u003eRegionT c d(RegionalFileHandle b(RegionT c d))",
        "package": "safer-file-handles",
        "partial": "Binary File",
        "signature": "FilePath ar-\u003eIOMode ioMode-\u003eRegionT s pr(RegionalFileHandle ioMode(RegionT s pr))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:openBinaryFile-39-",
      "description": {
        "fct-descr": "\u003cp\u003eNote that: \u003ccode\u003eopenBinaryFile' filePath = \u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e filePath \u003ccode\u003e\u003ca\u003emkIOMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "FilePath ar -\u003e RegionT s pr (RegionalFileHandle ioMode (RegionT s pr))",
        "fct-source": "src/System-IO-SaferFileHandles.html#openBinaryFile%27",
        "fct-type": "function",
        "title": "openBinaryFile'"
      },
      "index": {
        "description": "Note that openBinaryFile filePath openBinaryFile filePath mkIOMode",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "openBinaryFile'",
        "normalized": "FilePath a-\u003eRegionT b c(RegionalFileHandle d(RegionT b c))",
        "package": "safer-file-handles",
        "partial": "Binary File'",
        "signature": "FilePath ar-\u003eRegionT s pr(RegionalFileHandle ioMode(RegionT s pr))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:openBinaryTempFile",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eopenTempFile\u003c/a\u003e\u003c/code\u003e, but opens the file in binary mode. See\n \u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e for more comments.\n\u003c/p\u003e\u003cp\u003eThis provides a safer replacement for \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eopenBinaryTempFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "DirPath ar -\u003e Template -\u003e RegionT s pr (AbsFile, RegionalFileHandle ReadWriteMode (RegionT s pr))",
        "fct-source": "src/System-IO-SaferFileHandles.html#openBinaryTempFile",
        "fct-type": "function",
        "title": "openBinaryTempFile"
      },
      "index": {
        "description": "Like openTempFile but opens the file in binary mode See openBinaryFile for more comments This provides safer replacement for System.IO openBinaryTempFile",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "openBinaryTempFile",
        "normalized": "DirPath a-\u003eTemplate-\u003eRegionT b c(AbsFile,RegionalFileHandle ReadWriteMode(RegionT b c))",
        "package": "safer-file-handles",
        "partial": "Binary Temp File",
        "signature": "DirPath ar-\u003eTemplate-\u003eRegionT s pr(AbsFile,RegionalFileHandle ReadWriteMode(RegionT s pr))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:openBinaryTempFileWithDefaultPermissions",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eopenBinaryTempFile\u003c/a\u003e\u003c/code\u003e, but uses the default file permissions.\n\u003c/p\u003e\u003cp\u003eThis provides a safer replacement for\n \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eopenBinaryTempFileWithDefaultPermissions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "DirPath ar -\u003e Template -\u003e RegionT s pr (AbsFile, RegionalFileHandle ReadWriteMode (RegionT s pr))",
        "fct-source": "src/System-IO-SaferFileHandles.html#openBinaryTempFileWithDefaultPermissions",
        "fct-type": "function",
        "title": "openBinaryTempFileWithDefaultPermissions"
      },
      "index": {
        "description": "Like openBinaryTempFile but uses the default file permissions This provides safer replacement for System.IO openBinaryTempFileWithDefaultPermissions",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "openBinaryTempFileWithDefaultPermissions",
        "normalized": "DirPath a-\u003eTemplate-\u003eRegionT b c(AbsFile,RegionalFileHandle ReadWriteMode(RegionT b c))",
        "package": "safer-file-handles",
        "partial": "Binary Temp File With Default Permissions",
        "signature": "DirPath ar-\u003eTemplate-\u003eRegionT s pr(AbsFile,RegionalFileHandle ReadWriteMode(RegionT s pr))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:openFile",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efilePath ioMode\u003c/code\u003e allocates and returns a new,\nregional file handle to manage the file identified by \u003ccode\u003efilePath\u003c/code\u003e. It provides a\nsafer replacement for \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the file does not exist and it is opened for output, it should be created as\na new file. If \u003ccode\u003eioMode\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e and the file already exists, then it\nshould be truncated to zero length.  Some operating systems delete empty files,\nso there is no guarantee that the file will exist following an \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e with\n\u003ccode\u003eioMode\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e unless it is subsequently written to successfully.  The\nhandle is positioned at the end of the file if \u003ccode\u003eioMode\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eAppendMode\u003c/a\u003e\u003c/code\u003e, and\notherwise at the beginning (in which case its internal position is 0). The\ninitial buffer mode is implementation-dependent.\n\u003c/p\u003e\u003cp\u003eNote that the returned regional file handle is parameterized by the region in\nwhich it was created. This ensures that handles can never escape their\nregion. And it also allows operations on handles to be executed in a child\nregion of the region in which the handle was created.\n\u003c/p\u003e\u003cp\u003eNote that if you do wish to return a handle from the region in which it was\ncreated you have to duplicate the handle by applying \u003ccode\u003e\u003ca\u003edup\u003c/a\u003e\u003c/code\u003e to it.\n\u003c/p\u003e\u003cp\u003eFinally note that the returned regional file handle is also parameterized by the\nIOMode in which you opened the file. All operations on files explicitly specify\nthe needed IOMode using the \u003ccode\u003e\u003ca\u003eReadModes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWriteModes\u003c/a\u003e\u003c/code\u003e type classes. This way\nit is impossible to read from a write-only handle or write to a read-only handle\nfor example.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisAlreadyInUseError\u003c/a\u003e\u003c/code\u003e if the file is already open and cannot be reopened;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisDoesNotExistError\u003c/a\u003e\u003c/code\u003e if the file does not exist; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if the user does not have permission to open the file.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote: if you will be working with files containing binary data, you'll want to\nbe using \u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "FilePath ar -\u003e IOMode ioMode -\u003e RegionT s pr (RegionalFileHandle ioMode (RegionT s pr))",
        "fct-source": "src/System-IO-SaferFileHandles.html#openFile",
        "fct-type": "function",
        "title": "openFile"
      },
      "index": {
        "description": "Computation openFile filePath ioMode allocates and returns new regional file handle to manage the file identified by filePath It provides safer replacement for System.IO openFile If the file does not exist and it is opened for output it should be created as new file If ioMode is WriteMode and the file already exists then it should be truncated to zero length Some operating systems delete empty files so there is no guarantee that the file will exist following an openFile with ioMode WriteMode unless it is subsequently written to successfully The handle is positioned at the end of the file if ioMode is AppendMode and otherwise at the beginning in which case its internal position is The initial buffer mode is implementation-dependent Note that the returned regional file handle is parameterized by the region in which it was created This ensures that handles can never escape their region And it also allows operations on handles to be executed in child region of the region in which the handle was created Note that if you do wish to return handle from the region in which it was created you have to duplicate the handle by applying dup to it Finally note that the returned regional file handle is also parameterized by the IOMode in which you opened the file All operations on files explicitly specify the needed IOMode using the ReadModes and WriteModes type classes This way it is impossible to read from write-only handle or write to read-only handle for example This operation may fail with isAlreadyInUseError if the file is already open and cannot be reopened isDoesNotExistError if the file does not exist or isPermissionError if the user does not have permission to open the file Note if you will be working with files containing binary data you ll want to be using openBinaryFile",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "openFile",
        "normalized": "FilePath a-\u003eIOMode b-\u003eRegionT c d(RegionalFileHandle b(RegionT c d))",
        "package": "safer-file-handles",
        "partial": "File",
        "signature": "FilePath ar-\u003eIOMode ioMode-\u003eRegionT s pr(RegionalFileHandle ioMode(RegionT s pr))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:openFile-39-",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a file without explicitly specifying the IOMode. The IOMode is\n inferred from the type of the resulting \u003ccode\u003e\u003ca\u003eRegionalFileHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003eopenFile' fp = \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e fp \u003ccode\u003e\u003ca\u003emkIOMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "FilePath ar -\u003e RegionT s pr (RegionalFileHandle ioMode (RegionT s pr))",
        "fct-source": "src/System-IO-SaferFileHandles.html#openFile%27",
        "fct-type": "function",
        "title": "openFile'"
      },
      "index": {
        "description": "Open file without explicitly specifying the IOMode The IOMode is inferred from the type of the resulting RegionalFileHandle Note that openFile fp openFile fp mkIOMode",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "openFile'",
        "normalized": "FilePath a-\u003eRegionT b c(RegionalFileHandle d(RegionT b c))",
        "package": "safer-file-handles",
        "partial": "File'",
        "signature": "FilePath ar-\u003eRegionT s pr(RegionalFileHandle ioMode(RegionT s pr))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:openTempFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe function creates a temporary file in \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e. The created file\n isn't deleted automatically, so you need to delete it manually.\n\u003c/p\u003e\u003cp\u003eThe file is created with permissions such that only the current\n user can read/write it.\n\u003c/p\u003e\u003cp\u003eWith some exceptions (see below), the file will be created securely in the\n sense that an attacker should not be able to cause \u003ccode\u003e\u003ca\u003eopenTempFile\u003c/a\u003e\u003c/code\u003e to\n overwrite another file on the filesystem using your credentials, by putting\n symbolic links (on Unix) in the place where the temporary file is to be\n created.  On Unix the \u003ccode\u003eO_CREAT\u003c/code\u003e and \u003ccode\u003eO_EXCL\u003c/code\u003e flags are used to prevent this\n attack, but note that \u003ccode\u003eO_EXCL\u003c/code\u003e is sometimes not supported on NFS filesystems,\n so if you rely on this behaviour it is best to use local filesystems only.\n\u003c/p\u003e\u003cp\u003eThis provides a safer replacement for \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eopenTempFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "DirPath ar-\u003e Template-\u003e RegionT s pr (AbsFile, RegionalFileHandle ReadWriteMode (RegionT s pr))",
        "fct-type": "function",
        "title": "openTempFile"
      },
      "index": {
        "description": "The function creates temporary file in ReadWriteMode The created file isn deleted automatically so you need to delete it manually The file is created with permissions such that only the current user can read write it With some exceptions see below the file will be created securely in the sense that an attacker should not be able to cause openTempFile to overwrite another file on the filesystem using your credentials by putting symbolic links on Unix in the place where the temporary file is to be created On Unix the CREAT and EXCL flags are used to prevent this attack but note that EXCL is sometimes not supported on NFS filesystems so if you rely on this behaviour it is best to use local filesystems only This provides safer replacement for System.IO openTempFile",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "openTempFile",
        "normalized": "DirPath a-\u003eTemplate-\u003eRegionT b c(AbsFile,RegionalFileHandle ReadWriteMode(RegionT b c))",
        "package": "safer-file-handles",
        "partial": "Temp File",
        "signature": "DirPath ar-\u003eTemplate-\u003eRegionT s pr(AbsFile,RegionalFileHandle ReadWriteMode(RegionT s pr))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:openTempFileWithDefaultPermissions",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eopenTempFile\u003c/a\u003e\u003c/code\u003e, but uses the default file permissions.\n\u003c/p\u003e\u003cp\u003eThis provides a safer replacement for\n \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eopenTempFileWithDefaultPermissions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "DirPath ar -\u003e Template -\u003e RegionT s pr (AbsFile, RegionalFileHandle ReadWriteMode (RegionT s pr))",
        "fct-source": "src/System-IO-SaferFileHandles.html#openTempFileWithDefaultPermissions",
        "fct-type": "function",
        "title": "openTempFileWithDefaultPermissions"
      },
      "index": {
        "description": "Like openTempFile but uses the default file permissions This provides safer replacement for System.IO openTempFileWithDefaultPermissions",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "openTempFileWithDefaultPermissions",
        "normalized": "DirPath a-\u003eTemplate-\u003eRegionT b c(AbsFile,RegionalFileHandle ReadWriteMode(RegionT b c))",
        "package": "safer-file-handles",
        "partial": "Temp File With Default Permissions",
        "signature": "DirPath ar-\u003eTemplate-\u003eRegionT s pr(AbsFile,RegionalFileHandle ReadWriteMode(RegionT s pr))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:outputNL",
      "description": {
        "fct-descr": "\u003cp\u003ethe representation of newlines on output\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "Newline",
        "fct-type": "function",
        "title": "outputNL"
      },
      "index": {
        "description": "the representation of newlines on output",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "outputNL",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "NL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:print",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "α -\u003e m ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#print",
        "fct-type": "function",
        "title": "print"
      },
      "index": {
        "description": "Generalizes System.IO print to any MonadIO",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "print",
        "normalized": "a-\u003eb()",
        "package": "safer-file-handles",
        "partial": "",
        "signature": "α-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:putChar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eputChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "Char -\u003e m ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#putChar",
        "fct-type": "function",
        "title": "putChar"
      },
      "index": {
        "description": "Generalizes System.IO putChar to any MonadIO",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "putChar",
        "normalized": "Char-\u003ea()",
        "package": "safer-file-handles",
        "partial": "Char",
        "signature": "Char-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:putStr",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#putStr",
        "fct-type": "function",
        "title": "putStr"
      },
      "index": {
        "description": "Generalizes System.IO putStr to any MonadIO",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "putStr",
        "normalized": "String-\u003ea()",
        "package": "safer-file-handles",
        "partial": "Str",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:putStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/System-IO-SaferFileHandles.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "Generalizes System.IO putStrLn to any MonadIO",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "putStrLn",
        "normalized": "String-\u003ea()",
        "package": "safer-file-handles",
        "partial": "Str Ln",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:readIO",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "String -\u003e m α",
        "fct-source": "src/System-IO-SaferFileHandles.html#readIO",
        "fct-type": "function",
        "title": "readIO"
      },
      "index": {
        "description": "Generalizes System.IO readIO to any MonadIO",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "readIO",
        "normalized": "String-\u003ea b",
        "package": "safer-file-handles",
        "partial": "IO",
        "signature": "String-\u003em α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:readLn",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralizes \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "m α",
        "fct-source": "src/System-IO-SaferFileHandles.html#readLn",
        "fct-type": "function",
        "title": "readLn"
      },
      "index": {
        "description": "Generalizes System.IO readLn to any MonadIO",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "readLn",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Ln",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:stderr",
      "description": {
        "fct-descr": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "StdFileHandle WriteMode RootRegion",
        "fct-source": "src/System-IO-SaferFileHandles.html#stderr",
        "fct-type": "function",
        "title": "stderr"
      },
      "index": {
        "description": "Wraps System.IO stderr",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "stderr",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:stdin",
      "description": {
        "fct-descr": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "StdFileHandle ReadMode RootRegion",
        "fct-source": "src/System-IO-SaferFileHandles.html#stdin",
        "fct-type": "function",
        "title": "stdin"
      },
      "index": {
        "description": "Wraps System.IO stdin",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "stdin",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:stdout",
      "description": {
        "fct-descr": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "StdFileHandle WriteMode RootRegion",
        "fct-source": "src/System-IO-SaferFileHandles.html#stdout",
        "fct-type": "function",
        "title": "stdout"
      },
      "index": {
        "description": "Wraps System.IO stdout",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "stdout",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:universalNewlineMode",
      "description": {
        "fct-descr": "\u003cp\u003eMap '\\r\\n' into '\\n' on input, and '\\n' to the native newline\n represetnation on output.  This mode can be used on any platform, and\n works with text files using any newline convention.  The downside is\n that \u003ccode\u003ereadFile \u003e\u003e= writeFile\u003c/code\u003e might yield a different file.\n\u003c/p\u003e\u003cpre\u003e universalNewlineMode  = NewlineMode { inputNL  = CRLF, \n                                       outputNL = nativeNewline }\n\u003c/pre\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "NewlineMode",
        "fct-type": "function",
        "title": "universalNewlineMode"
      },
      "index": {
        "description": "Map into on input and to the native newline represetnation on output This mode can be used on any platform and works with text files using any newline convention The downside is that readFile writeFile might yield different file universalNewlineMode NewlineMode inputNL CRLF outputNL nativeNewline",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "universalNewlineMode",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "Newline Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:utf16",
      "description": {
        "fct-descr": "\u003cp\u003eThe UTF-16 Unicode encoding (a byte-order-mark should be used to\n indicate endianness).\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "TextEncoding",
        "fct-type": "function",
        "title": "utf16"
      },
      "index": {
        "description": "The UTF-16 Unicode encoding byte-order-mark should be used to indicate endianness",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "utf16",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:utf16be",
      "description": {
        "fct-descr": "\u003cp\u003eThe UTF-16 Unicode encoding (big-endian)\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "TextEncoding",
        "fct-type": "function",
        "title": "utf16be"
      },
      "index": {
        "description": "The UTF-16 Unicode encoding big-endian",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "utf16be",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:utf16le",
      "description": {
        "fct-descr": "\u003cp\u003eThe UTF-16 Unicode encoding (litte-endian)\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "TextEncoding",
        "fct-type": "function",
        "title": "utf16le"
      },
      "index": {
        "description": "The UTF-16 Unicode encoding litte-endian",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "utf16le",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:utf32",
      "description": {
        "fct-descr": "\u003cp\u003eThe UTF-32 Unicode encoding (a byte-order-mark should be used to\n indicate endianness).\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "TextEncoding",
        "fct-type": "function",
        "title": "utf32"
      },
      "index": {
        "description": "The UTF-32 Unicode encoding byte-order-mark should be used to indicate endianness",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "utf32",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:utf32be",
      "description": {
        "fct-descr": "\u003cp\u003eThe UTF-32 Unicode encoding (big-endian)\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "TextEncoding",
        "fct-type": "function",
        "title": "utf32be"
      },
      "index": {
        "description": "The UTF-32 Unicode encoding big-endian",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "utf32be",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:utf32le",
      "description": {
        "fct-descr": "\u003cp\u003eThe UTF-32 Unicode encoding (litte-endian)\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "TextEncoding",
        "fct-type": "function",
        "title": "utf32le"
      },
      "index": {
        "description": "The UTF-32 Unicode encoding litte-endian",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "utf32le",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:utf8",
      "description": {
        "fct-descr": "\u003cp\u003eThe UTF-8 Unicode encoding\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "TextEncoding",
        "fct-type": "function",
        "title": "utf8"
      },
      "index": {
        "description": "The UTF-8 Unicode encoding",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "utf8",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:utf8_bom",
      "description": {
        "fct-descr": "\u003cp\u003eThe UTF-8 Unicode encoding, with a byte-order-mark (BOM; the byte\n sequence 0xEF 0xBB 0xBF).  This encoding behaves like \u003ccode\u003e\u003ca\u003eutf8\u003c/a\u003e\u003c/code\u003e,\n except that on input, the BOM sequence is ignored at the beginning\n of the stream, and on output, the BOM sequence is prepended.\n\u003c/p\u003e\u003cp\u003eThe byte-order-mark is strictly unnecessary in UTF-8, but is\n sometimes used to identify the encoding of a file.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "TextEncoding",
        "fct-type": "function",
        "title": "utf8_bom"
      },
      "index": {
        "description": "The UTF-8 Unicode encoding with byte-order-mark BOM the byte sequence xEF xBB xBF This encoding behaves like utf8 except that on input the BOM sequence is ignored at the beginning of the stream and on output the BOM sequence is prepended The byte-order-mark is strictly unnecessary in UTF-8 but is sometimes used to identify the encoding of file",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "utf8_bom",
        "normalized": "",
        "package": "safer-file-handles",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:withBinaryFile",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function which opens a file in binary mode, applies the given\ncontinuation function to the resulting regional file handle and runs the\nresulting region. This provides a safer replacement for\n\u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ewithBinaryFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "FilePath ar -\u003e IOMode ioMode -\u003e (forall s.  RegionalFileHandle ioMode (RegionT s pr) -\u003e RegionT s pr α) -\u003e pr α",
        "fct-source": "src/System-IO-SaferFileHandles.html#withBinaryFile",
        "fct-type": "function",
        "title": "withBinaryFile"
      },
      "index": {
        "description": "convenience function which opens file in binary mode applies the given continuation function to the resulting regional file handle and runs the resulting region This provides safer replacement for System.IO withBinaryFile",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "withBinaryFile",
        "normalized": "FilePath a-\u003eIOMode b-\u003e(c d RegionalFileHandle b(RegionT e f)-\u003eRegionT e f g)-\u003ef g",
        "package": "safer-file-handles",
        "partial": "Binary File",
        "signature": "FilePath ar-\u003eIOMode ioMode-\u003e(forall s. RegionalFileHandle ioMode(RegionT s pr)-\u003eRegionT s pr α)-\u003epr α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:withBinaryFile-39-",
      "description": {
        "fct-descr": "\u003cp\u003eNote that: \u003ccode\u003ewithBinaryFile' filePath = \u003ccode\u003e\u003ca\u003ewithBinaryFile\u003c/a\u003e\u003c/code\u003e filePath \u003ccode\u003e\u003ca\u003emkIOMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "FilePath ar -\u003e (forall s.  RegionalFileHandle ioMode (RegionT s pr) -\u003e RegionT s pr α) -\u003e pr α",
        "fct-source": "src/System-IO-SaferFileHandles.html#withBinaryFile%27",
        "fct-type": "function",
        "title": "withBinaryFile'"
      },
      "index": {
        "description": "Note that withBinaryFile filePath withBinaryFile filePath mkIOMode",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "withBinaryFile'",
        "normalized": "FilePath a-\u003e(b c RegionalFileHandle d(RegionT e f)-\u003eRegionT e f g)-\u003ef g",
        "package": "safer-file-handles",
        "partial": "Binary File'",
        "signature": "FilePath ar-\u003e(forall s. RegionalFileHandle ioMode(RegionT s pr)-\u003eRegionT s pr α)-\u003epr α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:withFile",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function which opens a file, applies the given continuation\nfunction to the resulting regional file handle and runs the resulting\nregion. This provides a safer safer replacement for \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "FilePath ar -\u003e IOMode ioMode -\u003e (forall s.  RegionalFileHandle ioMode (RegionT s pr) -\u003e RegionT s pr α) -\u003e pr α",
        "fct-source": "src/System-IO-SaferFileHandles.html#withFile",
        "fct-type": "function",
        "title": "withFile"
      },
      "index": {
        "description": "Convenience function which opens file applies the given continuation function to the resulting regional file handle and runs the resulting region This provides safer safer replacement for System.IO withFile",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "withFile",
        "normalized": "FilePath a-\u003eIOMode b-\u003e(c d RegionalFileHandle b(RegionT e f)-\u003eRegionT e f g)-\u003ef g",
        "package": "safer-file-handles",
        "partial": "File",
        "signature": "FilePath ar-\u003eIOMode ioMode-\u003e(forall s. RegionalFileHandle ioMode(RegionT s pr)-\u003eRegionT s pr α)-\u003epr α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safer-file-handles/docs/System-IO-SaferFileHandles.html#v:withFile-39-",
      "description": {
        "fct-descr": "\u003cp\u003eNote that: \u003ccode\u003ewithFile' filePath = \u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e filePath \u003ccode\u003e\u003ca\u003emkIOMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.SaferFileHandles",
        "fct-package": "safer-file-handles",
        "fct-signature": "FilePath ar -\u003e (forall s.  RegionalFileHandle ioMode (RegionT s pr) -\u003e RegionT s pr α) -\u003e pr α",
        "fct-source": "src/System-IO-SaferFileHandles.html#withFile%27",
        "fct-type": "function",
        "title": "withFile'"
      },
      "index": {
        "description": "Note that withFile filePath withFile filePath mkIOMode",
        "hierarchy": "System IO SaferFileHandles",
        "module": "System.IO.SaferFileHandles",
        "name": "withFile'",
        "normalized": "FilePath a-\u003e(b c RegionalFileHandle d(RegionT e f)-\u003eRegionT e f g)-\u003ef g",
        "package": "safer-file-handles",
        "partial": "File'",
        "signature": "FilePath ar-\u003e(forall s. RegionalFileHandle ioMode(RegionT s pr)-\u003eRegionT s pr α)-\u003epr α"
      }
    }
  }
]