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
        "word": "explicit-iomodes"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes.Unsafe",
          "name": "Unsafe",
          "package": "explicit-iomodes",
          "source": "src/System-IO-ExplicitIOModes-Unsafe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes Unsafe",
          "module": "System.IO.ExplicitIOModes.Unsafe",
          "name": "Unsafe",
          "package": "explicit-iomodes",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the regular \u003ccode\u003eSystem.IO.\u003c/code\u003e\u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes.Unsafe",
          "name": "regularHandle",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e Handle",
          "source": "src/System-IO-ExplicitIOModes-Internal.html#regularHandle",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the regular System.IO Handle",
          "hierarchy": "System IO ExplicitIOModes Unsafe",
          "module": "System.IO.ExplicitIOModes.Unsafe",
          "name": "regularHandle",
          "normalized": "Handle a-\u003eHandle",
          "package": "explicit-iomodes",
          "partial": "Handle",
          "signature": "Handle ioMode-\u003eHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes-Unsafe.html#v:regularHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes.Unsafe",
          "name": "wrap",
          "package": "explicit-iomodes",
          "signature": "(Handle -\u003e α) -\u003e Handle ioMode -\u003e α",
          "source": "src/System-IO-ExplicitIOModes-Unsafe.html#wrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes Unsafe",
          "module": "System.IO.ExplicitIOModes.Unsafe",
          "name": "wrap",
          "normalized": "(Handle-\u003ea)-\u003eHandle b-\u003ea",
          "package": "explicit-iomodes",
          "signature": "(Handle-\u003eα)-\u003eHandle ioMode-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes-Unsafe.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes.Unsafe",
          "name": "wrap2",
          "package": "explicit-iomodes",
          "signature": "(Handle -\u003e β -\u003e α) -\u003e Handle ioMode -\u003e β -\u003e α",
          "source": "src/System-IO-ExplicitIOModes-Unsafe.html#wrap2",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes Unsafe",
          "module": "System.IO.ExplicitIOModes.Unsafe",
          "name": "wrap2",
          "normalized": "(Handle-\u003ea-\u003eb)-\u003eHandle c-\u003ea-\u003eb",
          "package": "explicit-iomodes",
          "signature": "(Handle-\u003eβ-\u003eα)-\u003eHandle ioMode-\u003eβ-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes-Unsafe.html#v:wrap2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e to a file which is parameterized with the\n IOMode the handle is in. All operations on handles explicitly specify the\n needed IOMode. This way it is impossible to read from a write-only handle or\n write to a read-only handle for example.\n\u003c/p\u003e\u003cp\u003eThis modules re-exports everything from \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e so you can just replace:\n \u003ccode\u003eimport System.IO\u003c/code\u003e with: \u003ccode\u003eimport System.IO.ExplicitIOModes\u003c/code\u003e, change some type\n signatures and expect everything to type-check.\n\u003c/p\u003e\u003cp\u003eThere's one exception to this last statement: If you are using the standard\n handles \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e in a mode which isn't their default\n mode (\u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e) you\n have to \u003ccode\u003e\u003ca\u003ecast\u003c/a\u003e\u003c/code\u003e these handles to the expected IOMode.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "ExplicitIOModes",
          "package": "explicit-iomodes",
          "source": "src/System-IO-ExplicitIOModes.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports Handle to file which is parameterized with the IOMode the handle is in All operations on handles explicitly specify the needed IOMode This way it is impossible to read from write-only handle or write to read-only handle for example This modules re-exports everything from IO so you can just replace import System.IO with import System.IO.ExplicitIOModes change some type signatures and expect everything to type-check There one exception to this last statement If you are using the standard handles stdin stdout or stderr in mode which isn their default mode ReadMode for stdin and WriteMode for stdout and stderr you have to cast these handles to the expected IOMode",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "ExplicitIOModes",
          "package": "explicit-iomodes",
          "partial": "Explicit IOModes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite only by appending.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "AppendMode",
          "package": "explicit-iomodes",
          "source": "src/System-IO-ExplicitIOModes.html#AppendMode",
          "type": "data"
        },
        "index": {
          "description": "Write only by appending",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "AppendMode",
          "package": "explicit-iomodes",
          "partial": "Append Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:AppendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThree kinds of buffering are supported: line-buffering, \n block-buffering or no-buffering.  These modes have the following\n effects. For output, items are written out, or \u003cem\u003eflushed\u003c/em\u003e,\n from the internal buffer according to the buffer mode:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eline-buffering\u003c/em\u003e: the entire output buffer is flushed\n    whenever a newline is output, the buffer overflows, \n    a \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e is issued, or the handle is closed.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eblock-buffering\u003c/em\u003e: the entire buffer is written out whenever it\n    overflows, a \u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e is issued, or the handle is closed.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eno-buffering\u003c/em\u003e: output is written immediately, and never stored\n    in the buffer.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn implementation is free to flush the buffer more frequently,\n but not less frequently, than specified above.\n The output buffer is emptied as soon as it has been written out.\n\u003c/p\u003e\u003cp\u003eSimilarly, input occurs according to the buffer mode for the handle:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eline-buffering\u003c/em\u003e: when the buffer for the handle is not empty,\n    the next item is obtained from the buffer; otherwise, when the\n    buffer is empty, characters up to and including the next newline\n    character are read into the buffer.  No characters are available\n    until the newline character is available or the buffer is full.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eblock-buffering\u003c/em\u003e: when the buffer for the handle becomes empty,\n    the next block of data is read into the buffer.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eno-buffering\u003c/em\u003e: the next input item is read and returned.\n    The \u003ccode\u003e\u003ca\u003ehLookAhead\u003c/a\u003e\u003c/code\u003e operation implies that even a no-buffered\n    handle may require a one-character buffer.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe default buffering mode when a handle is opened is\n implementation-dependent and may depend on the file system object\n which is attached to that handle.\n For most implementations, physical files will normally be block-buffered \n and terminals will normally be line-buffered.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "BufferMode",
          "package": "explicit-iomodes",
          "type": "data"
        },
        "index": {
          "description": "Three kinds of buffering are supported line-buffering block-buffering or no-buffering These modes have the following effects For output items are written out or flushed from the internal buffer according to the buffer mode line-buffering the entire output buffer is flushed whenever newline is output the buffer overflows hFlush is issued or the handle is closed block-buffering the entire buffer is written out whenever it overflows hFlush is issued or the handle is closed no-buffering output is written immediately and never stored in the buffer An implementation is free to flush the buffer more frequently but not less frequently than specified above The output buffer is emptied as soon as it has been written out Similarly input occurs according to the buffer mode for the handle line-buffering when the buffer for the handle is not empty the next item is obtained from the buffer otherwise when the buffer is empty characters up to and including the next newline character are read into the buffer No characters are available until the newline character is available or the buffer is full block-buffering when the buffer for the handle becomes empty the next block of data is read into the buffer no-buffering the next input item is read and returned The hLookAhead operation implies that even no-buffered handle may require one-character buffer The default buffering mode when handle is opened is implementation-dependent and may depend on the file system object which is attached to that handle For most implementations physical files will normally be block-buffered and terminals will normally be line-buffered",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "BufferMode",
          "package": "explicit-iomodes",
          "partial": "Buffer Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:BufferMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "CheckMode",
          "package": "explicit-iomodes",
          "source": "src/System-IO-ExplicitIOModes.html#CheckMode",
          "type": "class"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "CheckMode",
          "package": "explicit-iomodes",
          "partial": "Check Mode",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:CheckMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "FilePath",
          "package": "explicit-iomodes",
          "type": "type"
        },
        "index": {
          "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "FilePath",
          "package": "explicit-iomodes",
          "partial": "File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle to a file with an explicit IOMode.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "Handle",
          "package": "explicit-iomodes",
          "source": "src/System-IO-ExplicitIOModes-Internal.html#Handle",
          "type": "data"
        },
        "index": {
          "description": "handle to file with an explicit IOMode Wraps System.IO Handle",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "Handle",
          "package": "explicit-iomodes",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "HandlePosn",
          "package": "explicit-iomodes",
          "type": "data"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "HandlePosn",
          "package": "explicit-iomodes",
          "partial": "Handle Posn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:HandlePosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a computation which, when performed,\ndoes some I/O before returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere is really only one way to \"perform\" an I/O action: bind it to\n\u003ccode\u003eMain.main\u003c/code\u003e in your program.  When your program is run, the I/O will\nbe performed.  It isn't possible to perform I/O from an arbitrary\nfunction, unless that function is itself in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and called\nat some point, directly or indirectly, from \u003ccode\u003eMain.main\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is a monad, so \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions can be combined using either the do-notation\nor the \u003ccode\u003e\u003e\u003e\u003c/code\u003e and \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operations from the \u003ccode\u003eMonad\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "IO",
          "package": "explicit-iomodes",
          "type": "data"
        },
        "index": {
          "description": "value of type IO is computation which when performed does some before returning value of type There is really only one way to perform an action bind it to Main.main in your program When your program is run the will be performed It isn possible to perform from an arbitrary function unless that function is itself in the IO monad and called at some point directly or indirectly from Main.main IO is monad so IO actions can be combined using either the do-notation or the and operations from the Monad class",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "IO",
          "package": "explicit-iomodes",
          "partial": "IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:IO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe IOMode GADT which for each constructor specifies the associated IOMode\n type.\n\u003c/p\u003e\u003cp\u003eAlso see: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eIOMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "IOMode",
          "package": "explicit-iomodes",
          "source": "src/System-IO-ExplicitIOModes.html#IOMode",
          "type": "data"
        },
        "index": {
          "description": "The IOMode GADT which for each constructor specifies the associated IOMode type Also see System.IO IOMode",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "IOMode",
          "package": "explicit-iomodes",
          "partial": "IOMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:IOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "MkIOMode",
          "package": "explicit-iomodes",
          "source": "src/System-IO-ExplicitIOModes.html#MkIOMode",
          "type": "class"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "MkIOMode",
          "package": "explicit-iomodes",
          "partial": "Mk IOMode",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:MkIOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe representation of a newline in the external file or stream.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "Newline",
          "package": "explicit-iomodes",
          "type": "data"
        },
        "index": {
          "description": "The representation of newline in the external file or stream",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "Newline",
          "package": "explicit-iomodes",
          "partial": "Newline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:Newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the translation, if any, of newline characters between\n internal Strings and the external file or stream.  Haskell Strings\n are assumed to represent newlines with the '\\n' character; the\n newline mode specifies how to translate '\\n' on output, and what to\n translate into '\\n' on input.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "NewlineMode",
          "package": "explicit-iomodes",
          "type": "data"
        },
        "index": {
          "description": "Specifies the translation if any of newline characters between internal Strings and the external file or stream Haskell Strings are assumed to represent newlines with the character the newline mode specifies how to translate on output and what to translate into on input",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "NewlineMode",
          "package": "explicit-iomodes",
          "partial": "Newline Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:NewlineMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead only.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "ReadMode",
          "package": "explicit-iomodes",
          "source": "src/System-IO-ExplicitIOModes.html#ReadMode",
          "type": "data"
        },
        "index": {
          "description": "Read only",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "ReadMode",
          "package": "explicit-iomodes",
          "partial": "Read Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:ReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of readable IO mode types.\n\u003c/p\u003e\u003cp\u003eNote the super class \u003ccode\u003eReadModesPrivate\u003c/code\u003e. This type class is not exported by\n this module which ensures you can't accidentally make another type (like\n \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eAppendMode\u003c/a\u003e\u003c/code\u003e) an instance of \u003ccode\u003e\u003ca\u003eReadModes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "ReadModes",
          "package": "explicit-iomodes",
          "source": "src/System-IO-ExplicitIOModes.html#ReadModes",
          "type": "class"
        },
        "index": {
          "description": "Class of readable IO mode types Note the super class ReadModesPrivate This type class is not exported by this module which ensures you can accidentally make another type like WriteMode or AppendMode an instance of ReadModes",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "ReadModes",
          "package": "explicit-iomodes",
          "partial": "Read Modes",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:ReadModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth read and write.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "ReadWriteMode",
          "package": "explicit-iomodes",
          "source": "src/System-IO-ExplicitIOModes.html#ReadWriteMode",
          "type": "data"
        },
        "index": {
          "description": "Both read and write",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "ReadWriteMode",
          "package": "explicit-iomodes",
          "partial": "Read Write Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:ReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mode that determines the effect of \u003ccode\u003ehSeek\u003c/code\u003e \u003ccode\u003ehdl mode i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "SeekMode",
          "package": "explicit-iomodes",
          "type": "data"
        },
        "index": {
          "description": "mode that determines the effect of hSeek hdl mode",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "SeekMode",
          "package": "explicit-iomodes",
          "partial": "Seek Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:SeekMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e is a specification of a conversion scheme\n between sequences of bytes and sequences of Unicode characters.\n\u003c/p\u003e\u003cp\u003eFor example, UTF-8 is an encoding of Unicode characters into a sequence\n of bytes.  The \u003ccode\u003e\u003ca\u003eTextEncoding\u003c/a\u003e\u003c/code\u003e for UTF-8 is \u003ccode\u003eutf8\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "TextEncoding",
          "package": "explicit-iomodes",
          "type": "data"
        },
        "index": {
          "description": "TextEncoding is specification of conversion scheme between sequences of bytes and sequences of Unicode characters For example UTF-8 is an encoding of Unicode characters into sequence of bytes The TextEncoding for UTF-8 is utf8",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "TextEncoding",
          "package": "explicit-iomodes",
          "partial": "Text Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:TextEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite only.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "WriteMode",
          "package": "explicit-iomodes",
          "source": "src/System-IO-ExplicitIOModes.html#WriteMode",
          "type": "data"
        },
        "index": {
          "description": "Write only",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "WriteMode",
          "package": "explicit-iomodes",
          "partial": "Write Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:WriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of writable IO mode types.\n\u003c/p\u003e\u003cp\u003eNote the super class \u003ccode\u003eWriteModesPrivate\u003c/code\u003e. This type class is not exported by\n this module which ensures you can't accidentally make another type (like\n \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e) an instance of \u003ccode\u003e\u003ca\u003eWriteModes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "WriteModes",
          "package": "explicit-iomodes",
          "source": "src/System-IO-ExplicitIOModes.html#WriteModes",
          "type": "class"
        },
        "index": {
          "description": "Class of writable IO mode types Note the super class WriteModesPrivate This type class is not exported by this module which ensures you can accidentally make another type like ReadMode an instance of WriteModes",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "WriteModes",
          "package": "explicit-iomodes",
          "partial": "Write Modes",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#t:WriteModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "AbsoluteSeek",
          "package": "explicit-iomodes",
          "signature": "AbsoluteSeek",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "AbsoluteSeek",
          "package": "explicit-iomodes",
          "partial": "Absolute Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:AbsoluteSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "AppendMode",
          "package": "explicit-iomodes",
          "signature": "IOMode AppendMode",
          "source": "src/System-IO-ExplicitIOModes.html#IOMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "AppendMode",
          "package": "explicit-iomodes",
          "partial": "Append Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:AppendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblock-buffering should be enabled if possible.\n The size of the buffer is \u003ccode\u003en\u003c/code\u003e items if the argument\n is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e and is otherwise implementation-dependent.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "BlockBuffering",
          "package": "explicit-iomodes",
          "signature": "BlockBuffering (Maybe Int)",
          "type": "function"
        },
        "index": {
          "description": "block-buffering should be enabled if possible The size of the buffer is items if the argument is Just and is otherwise implementation-dependent",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "BlockBuffering",
          "package": "explicit-iomodes",
          "partial": "Block Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:BlockBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\\r\\n'\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "CRLF",
          "package": "explicit-iomodes",
          "signature": "CRLF",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "CRLF",
          "package": "explicit-iomodes",
          "partial": "CRLF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:CRLF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'\\n'\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "LF",
          "package": "explicit-iomodes",
          "signature": "LF",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "LF",
          "package": "explicit-iomodes",
          "partial": "LF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:LF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eline-buffering should be enabled if possible.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "LineBuffering",
          "package": "explicit-iomodes",
          "signature": "LineBuffering",
          "type": "function"
        },
        "index": {
          "description": "line-buffering should be enabled if possible",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "LineBuffering",
          "package": "explicit-iomodes",
          "partial": "Line Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:LineBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "NewlineMode",
          "package": "explicit-iomodes",
          "signature": "NewlineMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "NewlineMode",
          "package": "explicit-iomodes",
          "partial": "Newline Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:NewlineMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebuffering is disabled if possible.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "NoBuffering",
          "package": "explicit-iomodes",
          "signature": "NoBuffering",
          "type": "function"
        },
        "index": {
          "description": "buffering is disabled if possible",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "NoBuffering",
          "package": "explicit-iomodes",
          "partial": "No Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:NoBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "ReadMode",
          "package": "explicit-iomodes",
          "signature": "IOMode ReadMode",
          "source": "src/System-IO-ExplicitIOModes.html#IOMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "ReadMode",
          "package": "explicit-iomodes",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:ReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "ReadWriteMode",
          "package": "explicit-iomodes",
          "signature": "IOMode ReadWriteMode",
          "source": "src/System-IO-ExplicitIOModes.html#IOMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "ReadWriteMode",
          "package": "explicit-iomodes",
          "partial": "Read Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:ReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the current position.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "RelativeSeek",
          "package": "explicit-iomodes",
          "signature": "RelativeSeek",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to offset from the current position",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "RelativeSeek",
          "package": "explicit-iomodes",
          "partial": "Relative Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:RelativeSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the end of the file.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "SeekFromEnd",
          "package": "explicit-iomodes",
          "signature": "SeekFromEnd",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to offset from the end of the file",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "SeekFromEnd",
          "package": "explicit-iomodes",
          "partial": "Seek From End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:SeekFromEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "WriteMode",
          "package": "explicit-iomodes",
          "signature": "IOMode WriteMode",
          "source": "src/System-IO-ExplicitIOModes.html#IOMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "WriteMode",
          "package": "explicit-iomodes",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:WriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function appends the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e write a literal string\n to a file.  To write a value of any printable type, as with \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e,\n use the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e function to convert the value to a string first.\n\u003c/p\u003e\u003cpre\u003e main = appendFile \"squares\" (show [(x,x*x) | x \u003c- [0,0.1..2]])\n\u003c/pre\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "appendFile",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation appendFile file str function appends the string str to the file file Note that writeFile and appendFile write literal string to file To write value of any printable type as with print use the show function to convert the value to string first main appendFile squares show",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "appendFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the IOMode of a handle if the handle supports it.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "cast",
          "package": "explicit-iomodes",
          "signature": "Handle anyIOMode -\u003e IO (Maybe (Handle castedIOMode))",
          "source": "src/System-IO-ExplicitIOModes.html#cast",
          "type": "function"
        },
        "index": {
          "description": "Cast the IOMode of handle if the handle supports it",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "cast",
          "normalized": "Handle a-\u003eIO(Maybe(Handle b))",
          "package": "explicit-iomodes",
          "signature": "Handle anyIOMode-\u003eIO(Maybe(Handle castedIOMode))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn encoding in which Unicode code points are translated to bytes\n by taking the code point modulo 256.  When decoding, bytes are\n translated directly into the equivalent code point.\n\u003c/p\u003e\u003cp\u003eThis encoding never fails in either direction.  However, encoding\n discards information, so encode followed by decode is not the\n identity.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "char8",
          "package": "explicit-iomodes",
          "signature": "TextEncoding",
          "type": "function"
        },
        "index": {
          "description": "An encoding in which Unicode code points are translated to bytes by taking the code point modulo When decoding bytes are translated directly into the equivalent code point This encoding never fails in either direction However encoding discards information so encode followed by decode is not the identity",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "char8",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:char8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "fixIO",
          "package": "explicit-iomodes",
          "signature": "(a -\u003e IO a) -\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "fixIO",
          "normalized": "(a-\u003eIO a)-\u003eIO a",
          "package": "explicit-iomodes",
          "partial": "IO",
          "signature": "(a-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:fixIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a character from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "getChar",
          "package": "explicit-iomodes",
          "signature": "IO Char",
          "type": "function"
        },
        "index": {
          "description": "Read character from the standard input device same as hGetChar stdin",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "getChar",
          "package": "explicit-iomodes",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:getChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e operation returns all user input as a single string,\n which is read lazily as it is needed\n (same as \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "getContents",
          "package": "explicit-iomodes",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "The getContents operation returns all user input as single string which is read lazily as it is needed same as hGetContents stdin",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "getContents",
          "package": "explicit-iomodes",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "getLine",
          "package": "explicit-iomodes",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "Read line from the standard input device same as hGetLine stdin",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "getLine",
          "package": "explicit-iomodes",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hClose",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hClose",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hClose",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hClose",
          "normalized": "Handle a-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Close",
          "signature": "Handle ioMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehFileSize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hFileSize",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Integer",
          "source": "src/System-IO-ExplicitIOModes.html#hFileSize",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hFileSize",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hFileSize",
          "normalized": "Handle a-\u003eIO Integer",
          "package": "explicit-iomodes",
          "partial": "File Size",
          "signature": "Handle ioMode-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehFlush\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hFlush",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hFlush",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hFlush",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hFlush",
          "normalized": "Handle a-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Flush",
          "signature": "Handle ioMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetBuf",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e Ptr α -\u003e Int -\u003e IO Int",
          "source": "src/System-IO-ExplicitIOModes.html#hGetBuf",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hGetBuf",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetBuf",
          "normalized": "Handle a-\u003ePtr b-\u003eInt-\u003eIO Int",
          "package": "explicit-iomodes",
          "partial": "Get Buf",
          "signature": "Handle ioMode-\u003ePtr α-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hGetBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetBufNonBlocking\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetBufNonBlocking",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e Ptr α -\u003e Int -\u003e IO Int",
          "source": "src/System-IO-ExplicitIOModes.html#hGetBufNonBlocking",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hGetBufNonBlocking",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetBufNonBlocking",
          "normalized": "Handle a-\u003ePtr b-\u003eInt-\u003eIO Int",
          "package": "explicit-iomodes",
          "partial": "Get Buf Non Blocking",
          "signature": "Handle ioMode-\u003ePtr α-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hGetBufNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetBufSome\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetBufSome",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e Ptr α -\u003e Int -\u003e IO Int",
          "source": "src/System-IO-ExplicitIOModes.html#hGetBufSome",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hGetBufSome",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetBufSome",
          "normalized": "Handle a-\u003ePtr b-\u003eInt-\u003eIO Int",
          "package": "explicit-iomodes",
          "partial": "Get Buf Some",
          "signature": "Handle ioMode-\u003ePtr α-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hGetBufSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetBuffering\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetBuffering",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO BufferMode",
          "source": "src/System-IO-ExplicitIOModes.html#hGetBuffering",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hGetBuffering",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetBuffering",
          "normalized": "Handle a-\u003eIO BufferMode",
          "package": "explicit-iomodes",
          "partial": "Get Buffering",
          "signature": "Handle ioMode-\u003eIO BufferMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hGetBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetChar",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Char",
          "source": "src/System-IO-ExplicitIOModes.html#hGetChar",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hGetChar",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetChar",
          "normalized": "Handle a-\u003eIO Char",
          "package": "explicit-iomodes",
          "partial": "Get Char",
          "signature": "Handle ioMode-\u003eIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hGetChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetContents",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO String",
          "source": "src/System-IO-ExplicitIOModes.html#hGetContents",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hGetContents",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetContents",
          "normalized": "Handle a-\u003eIO String",
          "package": "explicit-iomodes",
          "partial": "Get Contents",
          "signature": "Handle ioMode-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetEcho\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetEcho",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Bool",
          "source": "src/System-IO-ExplicitIOModes.html#hGetEcho",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hGetEcho",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetEcho",
          "normalized": "Handle a-\u003eIO Bool",
          "package": "explicit-iomodes",
          "partial": "Get Echo",
          "signature": "Handle ioMode-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hGetEcho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetEncoding",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO (Maybe TextEncoding)",
          "source": "src/System-IO-ExplicitIOModes.html#hGetEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetEncoding",
          "normalized": "Handle a-\u003eIO(Maybe TextEncoding)",
          "package": "explicit-iomodes",
          "partial": "Get Encoding",
          "signature": "Handle ioMode-\u003eIO(Maybe TextEncoding)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hGetEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetLine",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO String",
          "source": "src/System-IO-ExplicitIOModes.html#hGetLine",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hGetLine",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetLine",
          "normalized": "Handle a-\u003eIO String",
          "package": "explicit-iomodes",
          "partial": "Get Line",
          "signature": "Handle ioMode-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetPosn",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO HandlePosn",
          "source": "src/System-IO-ExplicitIOModes.html#hGetPosn",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hGetPosn",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hGetPosn",
          "normalized": "Handle a-\u003eIO HandlePosn",
          "package": "explicit-iomodes",
          "partial": "Get Posn",
          "signature": "Handle ioMode-\u003eIO HandlePosn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hGetPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsClosed\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsClosed",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Bool",
          "source": "src/System-IO-ExplicitIOModes.html#hIsClosed",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hIsClosed",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsClosed",
          "normalized": "Handle a-\u003eIO Bool",
          "package": "explicit-iomodes",
          "partial": "Is Closed",
          "signature": "Handle ioMode-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hIsClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsEOF\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsEOF",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Bool",
          "source": "src/System-IO-ExplicitIOModes.html#hIsEOF",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hIsEOF",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsEOF",
          "normalized": "Handle a-\u003eIO Bool",
          "package": "explicit-iomodes",
          "partial": "Is EOF",
          "signature": "Handle ioMode-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hIsEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsOpen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsOpen",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Bool",
          "source": "src/System-IO-ExplicitIOModes.html#hIsOpen",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hIsOpen",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsOpen",
          "normalized": "Handle a-\u003eIO Bool",
          "package": "explicit-iomodes",
          "partial": "Is Open",
          "signature": "Handle ioMode-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hIsOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsReadable\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsReadable",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Bool",
          "source": "src/System-IO-ExplicitIOModes.html#hIsReadable",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hIsReadable",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsReadable",
          "normalized": "Handle a-\u003eIO Bool",
          "package": "explicit-iomodes",
          "partial": "Is Readable",
          "signature": "Handle ioMode-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hIsReadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsSeekable\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsSeekable",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Bool",
          "source": "src/System-IO-ExplicitIOModes.html#hIsSeekable",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hIsSeekable",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsSeekable",
          "normalized": "Handle a-\u003eIO Bool",
          "package": "explicit-iomodes",
          "partial": "Is Seekable",
          "signature": "Handle ioMode-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hIsSeekable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsTerminalDevice\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsTerminalDevice",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Bool",
          "source": "src/System-IO-ExplicitIOModes.html#hIsTerminalDevice",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hIsTerminalDevice",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsTerminalDevice",
          "normalized": "Handle a-\u003eIO Bool",
          "package": "explicit-iomodes",
          "partial": "Is Terminal Device",
          "signature": "Handle ioMode-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hIsTerminalDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehIsWritable\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsWritable",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Bool",
          "source": "src/System-IO-ExplicitIOModes.html#hIsWritable",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hIsWritable",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hIsWritable",
          "normalized": "Handle a-\u003eIO Bool",
          "package": "explicit-iomodes",
          "partial": "Is Writable",
          "signature": "Handle ioMode-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hIsWritable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehLookAhead\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hLookAhead",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Char",
          "source": "src/System-IO-ExplicitIOModes.html#hLookAhead",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hLookAhead",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hLookAhead",
          "normalized": "Handle a-\u003eIO Char",
          "package": "explicit-iomodes",
          "partial": "Look Ahead",
          "signature": "Handle ioMode-\u003eIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hLookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehPrint\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hPrint",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e α -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hPrint",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hPrint",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hPrint",
          "normalized": "Handle a-\u003eb-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Print",
          "signature": "Handle ioMode-\u003eα-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehPutBuf\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hPutBuf",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e Ptr α -\u003e Int -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hPutBuf",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hPutBuf",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hPutBuf",
          "normalized": "Handle a-\u003ePtr b-\u003eInt-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Put Buf",
          "signature": "Handle ioMode-\u003ePtr α-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hPutBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehPutBufNonBlocking\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hPutBufNonBlocking",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e Ptr α -\u003e Int -\u003e IO Int",
          "source": "src/System-IO-ExplicitIOModes.html#hPutBufNonBlocking",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hPutBufNonBlocking",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hPutBufNonBlocking",
          "normalized": "Handle a-\u003ePtr b-\u003eInt-\u003eIO Int",
          "package": "explicit-iomodes",
          "partial": "Put Buf Non Blocking",
          "signature": "Handle ioMode-\u003ePtr α-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hPutBufNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hPutChar",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e Char -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hPutChar",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hPutChar",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hPutChar",
          "normalized": "Handle a-\u003eChar-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Put Char",
          "signature": "Handle ioMode-\u003eChar-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hPutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hPutStr",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e String -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hPutStr",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hPutStr",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hPutStr",
          "normalized": "Handle a-\u003eString-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Put Str",
          "signature": "Handle ioMode-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehPutStrLn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hPutStrLn",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e String -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hPutStrLn",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hPutStrLn",
          "normalized": "Handle a-\u003eString-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Put Str Ln",
          "signature": "Handle ioMode-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehReady\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hReady",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Bool",
          "source": "src/System-IO-ExplicitIOModes.html#hReady",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hReady",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hReady",
          "normalized": "Handle a-\u003eIO Bool",
          "package": "explicit-iomodes",
          "partial": "Ready",
          "signature": "Handle ioMode-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSeek\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSeek",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e SeekMode -\u003e Integer -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hSeek",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hSeek",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSeek",
          "normalized": "Handle a-\u003eSeekMode-\u003eInteger-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Seek",
          "signature": "Handle ioMode-\u003eSeekMode-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetBinaryMode",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e Bool -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hSetBinaryMode",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hSetBinaryMode",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetBinaryMode",
          "normalized": "Handle a-\u003eBool-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Set Binary Mode",
          "signature": "Handle ioMode-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hSetBinaryMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSetBuffering\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetBuffering",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e BufferMode -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hSetBuffering",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hSetBuffering",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetBuffering",
          "normalized": "Handle a-\u003eBufferMode-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Set Buffering",
          "signature": "Handle ioMode-\u003eBufferMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hSetBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSetEcho\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetEcho",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e Bool -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hSetEcho",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hSetEcho",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetEcho",
          "normalized": "Handle a-\u003eBool-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Set Echo",
          "signature": "Handle ioMode-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hSetEcho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetEncoding",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e TextEncoding -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hSetEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetEncoding",
          "normalized": "Handle a-\u003eTextEncoding-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Set Encoding",
          "signature": "Handle ioMode-\u003eTextEncoding-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hSetEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehSetFileSize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetFileSize",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e Integer -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hSetFileSize",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hSetFileSize",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetFileSize",
          "normalized": "Handle a-\u003eInteger-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Set File Size",
          "signature": "Handle ioMode-\u003eInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hSetFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetNewlineMode",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e NewlineMode -\u003e IO ()",
          "source": "src/System-IO-ExplicitIOModes.html#hSetNewlineMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetNewlineMode",
          "normalized": "Handle a-\u003eNewlineMode-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Set Newline Mode",
          "signature": "Handle ioMode-\u003eNewlineMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hSetNewlineMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a call to \u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns a position \u003ccode\u003ep\u003c/code\u003e,\n then computation \u003ccode\u003e\u003ca\u003ehSetPosn\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e sets the position of \u003ccode\u003ehdl\u003c/code\u003e\n to the position it held at the time of the call to \u003ccode\u003e\u003ca\u003ehGetPosn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisPermissionError\u003c/code\u003e if a system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetPosn",
          "package": "explicit-iomodes",
          "signature": "HandlePosn -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "If call to hGetPosn hdl returns position then computation hSetPosn sets the position of hdl to the position it held at the time of the call to hGetPosn This operation may fail with isPermissionError if system resource limit would be exceeded",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hSetPosn",
          "normalized": "HandlePosn-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Set Posn",
          "signature": "HandlePosn-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hSetPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehShow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hShow",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO String",
          "source": "src/System-IO-ExplicitIOModes.html#hShow",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hShow",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hShow",
          "normalized": "Handle a-\u003eIO String",
          "package": "explicit-iomodes",
          "partial": "Show",
          "signature": "Handle ioMode-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehTell\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hTell",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e IO Integer",
          "source": "src/System-IO-ExplicitIOModes.html#hTell",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hTell",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hTell",
          "normalized": "Handle a-\u003eIO Integer",
          "package": "explicit-iomodes",
          "partial": "Tell",
          "signature": "Handle ioMode-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hTell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ehWaitForInput\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "hWaitForInput",
          "package": "explicit-iomodes",
          "signature": "Handle ioMode -\u003e Int -\u003e IO Bool",
          "source": "src/System-IO-ExplicitIOModes.html#hWaitForInput",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO hWaitForInput",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "hWaitForInput",
          "normalized": "Handle a-\u003eInt-\u003eIO Bool",
          "package": "explicit-iomodes",
          "partial": "Wait For Input",
          "signature": "Handle ioMode-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:hWaitForInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe representation of newlines on input\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "inputNL",
          "package": "explicit-iomodes",
          "signature": "Newline",
          "type": "function"
        },
        "index": {
          "description": "the representation of newlines on input",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "inputNL",
          "package": "explicit-iomodes",
          "partial": "NL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:inputNL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e function takes a function of type \u003ccode\u003eString-\u003eString\u003c/code\u003e\n as its argument.  The entire input from the standard input device is\n passed to this function as its argument, and the resulting string is\n output on the standard output device.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "interact",
          "package": "explicit-iomodes",
          "signature": "(String -\u003e String) -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The interact function takes function of type String String as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "interact",
          "normalized": "(String-\u003eString)-\u003eIO()",
          "package": "explicit-iomodes",
          "signature": "(String-\u003eString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eisEOF\u003c/a\u003e\u003c/code\u003e is identical to \u003ccode\u003e\u003ca\u003ehIsEOF\u003c/a\u003e\u003c/code\u003e,\n except that it works only on \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "isEOF",
          "package": "explicit-iomodes",
          "signature": "IO Bool",
          "type": "function"
        },
        "index": {
          "description": "The computation isEOF is identical to hIsEOF except that it works only on stdin",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "isEOF",
          "package": "explicit-iomodes",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:isEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Latin1 (ISO8859-1) encoding.  This encoding maps bytes\n directly to the first 256 Unicode code points, and is thus not a\n complete Unicode encoding.  An attempt to write a character greater than\n '\\255' to a \u003ccode\u003eHandle\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003elatin1\u003c/a\u003e\u003c/code\u003e encoding will result in an error.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "latin1",
          "package": "explicit-iomodes",
          "signature": "TextEncoding",
          "type": "function"
        },
        "index": {
          "description": "The Latin1 ISO8859-1 encoding This encoding maps bytes directly to the first Unicode code points and is thus not complete Unicode encoding An attempt to write character greater than to Handle using the latin1 encoding will result in an error",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "latin1",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:latin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Unicode encoding of the current locale\n\u003c/p\u003e\u003cp\u003eThis is the initial locale encoding: if it has been subsequently changed by\n \u003ccode\u003e\u003ca\u003esetLocaleEncoding\u003c/a\u003e\u003c/code\u003e this value will not reflect that change.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "localeEncoding",
          "package": "explicit-iomodes",
          "signature": "TextEncoding",
          "type": "function"
        },
        "index": {
          "description": "The Unicode encoding of the current locale This is the initial locale encoding if it has been subsequently changed by setLocaleEncoding this value will not reflect that change",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "localeEncoding",
          "package": "explicit-iomodes",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:localeEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn overloaded IOMode constructor.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "mkIOMode",
          "package": "explicit-iomodes",
          "signature": "IOMode ioMode",
          "source": "src/System-IO-ExplicitIOModes.html#mkIOMode",
          "type": "method"
        },
        "index": {
          "description": "An overloaded IOMode constructor",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "mkIOMode",
          "package": "explicit-iomodes",
          "partial": "IOMode",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:mkIOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up the named Unicode encoding.  May fail with \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eisDoesNotExistError\u003c/code\u003e if the encoding is unknown\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe set of known encodings is system-dependent, but includes at least:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eUTF-8\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUTF-16\u003c/code\u003e, \u003ccode\u003eUTF-16BE\u003c/code\u003e, \u003ccode\u003eUTF-16LE\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUTF-32\u003c/code\u003e, \u003ccode\u003eUTF-32BE\u003c/code\u003e, \u003ccode\u003eUTF-32LE\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOn systems using GNU iconv (e.g. Linux), there is additional\n notation for specifying how illegal characters are handled:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a suffix of \u003ccode\u003e//IGNORE\u003c/code\u003e, e.g. \u003ccode\u003eUTF-8//IGNORE\u003c/code\u003e, will cause \n    all illegal sequences on input to be ignored, and on output\n    will drop all code points that have no representation in the\n    target encoding.\n\u003c/li\u003e\u003cli\u003e a suffix of \u003ccode\u003e//TRANSLIT\u003c/code\u003e will choose a replacement character\n    for illegal sequences or code points.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOn Windows, you can access supported code pages with the prefix\n \u003ccode\u003eCP\u003c/code\u003e; for example, \u003ccode\u003e\"CP1250\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "mkTextEncoding",
          "package": "explicit-iomodes",
          "signature": "String -\u003e IO TextEncoding",
          "type": "function"
        },
        "index": {
          "description": "Look up the named Unicode encoding May fail with isDoesNotExistError if the encoding is unknown The set of known encodings is system-dependent but includes at least UTF-8 UTF-16 UTF-16BE UTF-16LE UTF-32 UTF-32BE UTF-32LE On systems using GNU iconv e.g Linux there is additional notation for specifying how illegal characters are handled suffix of IGNORE e.g UTF-8 IGNORE will cause all illegal sequences on input to be ignored and on output will drop all code points that have no representation in the target encoding suffix of TRANSLIT will choose replacement character for illegal sequences or code points On Windows you can access supported code pages with the prefix CP for example CP1250",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "mkTextEncoding",
          "normalized": "String-\u003eIO TextEncoding",
          "package": "explicit-iomodes",
          "partial": "Text Encoding",
          "signature": "String-\u003eIO TextEncoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:mkTextEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe native newline representation for the current platform: \u003ccode\u003e\u003ca\u003eLF\u003c/a\u003e\u003c/code\u003e\n on Unix systems, \u003ccode\u003e\u003ca\u003eCRLF\u003c/a\u003e\u003c/code\u003e on Windows.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "nativeNewline",
          "package": "explicit-iomodes",
          "signature": "Newline",
          "type": "function"
        },
        "index": {
          "description": "The native newline representation for the current platform LF on Unix systems CRLF on Windows",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "nativeNewline",
          "package": "explicit-iomodes",
          "partial": "Newline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:nativeNewline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the native newline representation on both input and output\n\u003c/p\u003e\u003cpre\u003e nativeNewlineMode  = NewlineMode { inputNL  = nativeNewline\n                                    outputNL = nativeNewline }\n\u003c/pre\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "nativeNewlineMode",
          "package": "explicit-iomodes",
          "signature": "NewlineMode",
          "type": "function"
        },
        "index": {
          "description": "Use the native newline representation on both input and output nativeNewlineMode NewlineMode inputNL nativeNewline outputNL nativeNewline",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "nativeNewlineMode",
          "package": "explicit-iomodes",
          "partial": "Newline Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:nativeNewlineMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo no newline translation at all.\n\u003c/p\u003e\u003cpre\u003e noNewlineTranslation  = NewlineMode { inputNL  = LF, outputNL = LF }\n\u003c/pre\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "noNewlineTranslation",
          "package": "explicit-iomodes",
          "signature": "NewlineMode",
          "type": "function"
        },
        "index": {
          "description": "Do no newline translation at all noNewlineTranslation NewlineMode inputNL LF outputNL LF",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "noNewlineTranslation",
          "package": "explicit-iomodes",
          "partial": "Newline Translation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:noNewlineTranslation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "openBinaryFile",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e IOMode ioMode -\u003e IO (Handle ioMode)",
          "source": "src/System-IO-ExplicitIOModes.html#openBinaryFile",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO openBinaryFile",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "openBinaryFile",
          "normalized": "FilePath-\u003eIOMode a-\u003eIO(Handle a)",
          "package": "explicit-iomodes",
          "partial": "Binary File",
          "signature": "FilePath-\u003eIOMode ioMode-\u003eIO(Handle ioMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:openBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that: \u003ccode\u003eopenBinaryFile' fp = \u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e fp \u003ccode\u003e\u003ca\u003emkIOMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "openBinaryFile'",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e IO (Handle ioMode)",
          "source": "src/System-IO-ExplicitIOModes.html#openBinaryFile%27",
          "type": "function"
        },
        "index": {
          "description": "Note that openBinaryFile fp openBinaryFile fp mkIOMode",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "openBinaryFile'",
          "normalized": "FilePath-\u003eIO(Handle a)",
          "package": "explicit-iomodes",
          "partial": "Binary File'",
          "signature": "FilePath-\u003eIO(Handle ioMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:openBinaryFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eopenBinaryTempFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "openBinaryTempFile",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e String -\u003e IO (FilePath, Handle ReadWriteMode)",
          "source": "src/System-IO-ExplicitIOModes.html#openBinaryTempFile",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO openBinaryTempFile",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "openBinaryTempFile",
          "normalized": "FilePath-\u003eString-\u003eIO(FilePath,Handle ReadWriteMode)",
          "package": "explicit-iomodes",
          "partial": "Binary Temp File",
          "signature": "FilePath-\u003eString-\u003eIO(FilePath,Handle ReadWriteMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:openBinaryTempFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "openBinaryTempFileWithDefaultPermissions",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e String -\u003e IO (FilePath, Handle ReadWriteMode)",
          "source": "src/System-IO-ExplicitIOModes.html#openBinaryTempFileWithDefaultPermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "openBinaryTempFileWithDefaultPermissions",
          "normalized": "FilePath-\u003eString-\u003eIO(FilePath,Handle ReadWriteMode)",
          "package": "explicit-iomodes",
          "partial": "Binary Temp File With Default Permissions",
          "signature": "FilePath-\u003eString-\u003eIO(FilePath,Handle ReadWriteMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:openBinaryTempFileWithDefaultPermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "openFile",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e IOMode ioMode -\u003e IO (Handle ioMode)",
          "source": "src/System-IO-ExplicitIOModes.html#openFile",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO openFile",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "openFile",
          "normalized": "FilePath-\u003eIOMode a-\u003eIO(Handle a)",
          "package": "explicit-iomodes",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode ioMode-\u003eIO(Handle ioMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:openFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a file without explicitly specifying the IOMode. The IOMode is\n inferred from the type of the resulting \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003eopenFile' fp = \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e fp \u003ccode\u003e\u003ca\u003emkIOMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "openFile'",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e IO (Handle ioMode)",
          "source": "src/System-IO-ExplicitIOModes.html#openFile%27",
          "type": "function"
        },
        "index": {
          "description": "Open file without explicitly specifying the IOMode The IOMode is inferred from the type of the resulting Handle Note that openFile fp openFile fp mkIOMode",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "openFile'",
          "normalized": "FilePath-\u003eIO(Handle a)",
          "package": "explicit-iomodes",
          "partial": "File'",
          "signature": "FilePath-\u003eIO(Handle ioMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:openFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eopenTempFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "openTempFile",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e String -\u003e IO (FilePath, Handle ReadWriteMode)",
          "source": "src/System-IO-ExplicitIOModes.html#openTempFile",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO openTempFile",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "openTempFile",
          "normalized": "FilePath-\u003eString-\u003eIO(FilePath,Handle ReadWriteMode)",
          "package": "explicit-iomodes",
          "partial": "Temp File",
          "signature": "FilePath-\u003eString-\u003eIO(FilePath,Handle ReadWriteMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:openTempFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.ExplicitIOModes",
          "name": "openTempFileWithDefaultPermissions",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e String -\u003e IO (FilePath, Handle ReadWriteMode)",
          "source": "src/System-IO-ExplicitIOModes.html#openTempFileWithDefaultPermissions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "openTempFileWithDefaultPermissions",
          "normalized": "FilePath-\u003eString-\u003eIO(FilePath,Handle ReadWriteMode)",
          "package": "explicit-iomodes",
          "partial": "Temp File With Default Permissions",
          "signature": "FilePath-\u003eString-\u003eIO(FilePath,Handle ReadWriteMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:openTempFileWithDefaultPermissions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe representation of newlines on output\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "outputNL",
          "package": "explicit-iomodes",
          "signature": "Newline",
          "type": "function"
        },
        "index": {
          "description": "the representation of newlines on output",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "outputNL",
          "package": "explicit-iomodes",
          "partial": "NL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:outputNL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e function outputs a value of any printable type to the\n standard output device.\n Printable types are those that are instances of class \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e; \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e\n converts values to strings for output using the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e operation and\n adds a newline.\n\u003c/p\u003e\u003cp\u003eFor example, a program to print the first 20 integers and their\n powers of 2 could be written as:\n\u003c/p\u003e\u003cpre\u003e main = print ([(n, 2^n) | n \u003c- [0..19]])\n\u003c/pre\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "print",
          "package": "explicit-iomodes",
          "signature": "a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The print function outputs value of any printable type to the standard output device Printable types are those that are instances of class Show print converts values to strings for output using the show operation and adds newline For example program to print the first integers and their powers of could be written as main print",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "print",
          "normalized": "a-\u003eIO()",
          "package": "explicit-iomodes",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "putChar",
          "package": "explicit-iomodes",
          "signature": "Char -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write character to the standard output device same as hPutChar stdout",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "putChar",
          "normalized": "Char-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Char",
          "signature": "Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:putChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "putStr",
          "package": "explicit-iomodes",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write string to the standard output device same as hPutStr stdout",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "putStr",
          "normalized": "String-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "putStrLn",
          "package": "explicit-iomodes",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as putStr but adds newline character",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "putStrLn",
          "normalized": "String-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a string.\n The file is read lazily, on demand, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "readFile",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "The readFile function reads file and returns the contents of the file as string The file is read lazily on demand as with getContents",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "explicit-iomodes",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e function is similar to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e except that it signals\n parse failure to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad instead of terminating the program.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "readIO",
          "package": "explicit-iomodes",
          "signature": "String -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "The readIO function is similar to read except that it signals parse failure to the IO monad instead of terminating the program",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "readIO",
          "normalized": "String-\u003eIO a",
          "package": "explicit-iomodes",
          "partial": "IO",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:readIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e function combines \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "readLn",
          "package": "explicit-iomodes",
          "signature": "IO a",
          "type": "function"
        },
        "index": {
          "description": "The readLn function combines getLine and readIO",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "readLn",
          "package": "explicit-iomodes",
          "partial": "Ln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:readLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the regular \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003eIOMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "regularIOMode",
          "package": "explicit-iomodes",
          "signature": "IOMode ioMode -\u003e IOMode",
          "source": "src/System-IO-ExplicitIOModes.html#regularIOMode",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the regular System.IO IOMode",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "regularIOMode",
          "normalized": "IOMode a-\u003eIOMode",
          "package": "explicit-iomodes",
          "partial": "IOMode",
          "signature": "IOMode ioMode-\u003eIOMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:regularIOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "stderr",
          "package": "explicit-iomodes",
          "signature": "Handle WriteMode",
          "source": "src/System-IO-ExplicitIOModes.html#stderr",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO stderr",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "stderr",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "stdin",
          "package": "explicit-iomodes",
          "signature": "Handle ReadMode",
          "source": "src/System-IO-ExplicitIOModes.html#stdin",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO stdin",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "stdin",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:stdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "stdout",
          "package": "explicit-iomodes",
          "signature": "Handle WriteMode",
          "source": "src/System-IO-ExplicitIOModes.html#stdout",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO stdout",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "stdout",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap '\\r\\n' into '\\n' on input, and '\\n' to the native newline\n represetnation on output.  This mode can be used on any platform, and\n works with text files using any newline convention.  The downside is\n that \u003ccode\u003ereadFile \u003e\u003e= writeFile\u003c/code\u003e might yield a different file.\n\u003c/p\u003e\u003cpre\u003e universalNewlineMode  = NewlineMode { inputNL  = CRLF, \n                                       outputNL = nativeNewline }\n\u003c/pre\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "universalNewlineMode",
          "package": "explicit-iomodes",
          "signature": "NewlineMode",
          "type": "function"
        },
        "index": {
          "description": "Map into on input and to the native newline represetnation on output This mode can be used on any platform and works with text files using any newline convention The downside is that readFile writeFile might yield different file universalNewlineMode NewlineMode inputNL CRLF outputNL nativeNewline",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "universalNewlineMode",
          "package": "explicit-iomodes",
          "partial": "Newline Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:universalNewlineMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe UTF-16 Unicode encoding (a byte-order-mark should be used to\n indicate endianness).\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf16",
          "package": "explicit-iomodes",
          "signature": "TextEncoding",
          "type": "function"
        },
        "index": {
          "description": "The UTF-16 Unicode encoding byte-order-mark should be used to indicate endianness",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf16",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:utf16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe UTF-16 Unicode encoding (big-endian)\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf16be",
          "package": "explicit-iomodes",
          "signature": "TextEncoding",
          "type": "function"
        },
        "index": {
          "description": "The UTF-16 Unicode encoding big-endian",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf16be",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:utf16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe UTF-16 Unicode encoding (litte-endian)\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf16le",
          "package": "explicit-iomodes",
          "signature": "TextEncoding",
          "type": "function"
        },
        "index": {
          "description": "The UTF-16 Unicode encoding litte-endian",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf16le",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:utf16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe UTF-32 Unicode encoding (a byte-order-mark should be used to\n indicate endianness).\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf32",
          "package": "explicit-iomodes",
          "signature": "TextEncoding",
          "type": "function"
        },
        "index": {
          "description": "The UTF-32 Unicode encoding byte-order-mark should be used to indicate endianness",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf32",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:utf32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe UTF-32 Unicode encoding (big-endian)\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf32be",
          "package": "explicit-iomodes",
          "signature": "TextEncoding",
          "type": "function"
        },
        "index": {
          "description": "The UTF-32 Unicode encoding big-endian",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf32be",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:utf32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe UTF-32 Unicode encoding (litte-endian)\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf32le",
          "package": "explicit-iomodes",
          "signature": "TextEncoding",
          "type": "function"
        },
        "index": {
          "description": "The UTF-32 Unicode encoding litte-endian",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf32le",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:utf32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe UTF-8 Unicode encoding\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf8",
          "package": "explicit-iomodes",
          "signature": "TextEncoding",
          "type": "function"
        },
        "index": {
          "description": "The UTF-8 Unicode encoding",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf8",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:utf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe UTF-8 Unicode encoding, with a byte-order-mark (BOM; the byte\n sequence 0xEF 0xBB 0xBF).  This encoding behaves like \u003ccode\u003e\u003ca\u003eutf8\u003c/a\u003e\u003c/code\u003e,\n except that on input, the BOM sequence is ignored at the beginning\n of the stream, and on output, the BOM sequence is prepended.\n\u003c/p\u003e\u003cp\u003eThe byte-order-mark is strictly unnecessary in UTF-8, but is\n sometimes used to identify the encoding of a file.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf8_bom",
          "package": "explicit-iomodes",
          "signature": "TextEncoding",
          "type": "function"
        },
        "index": {
          "description": "The UTF-8 Unicode encoding with byte-order-mark BOM the byte sequence xEF xBB xBF This encoding behaves like utf8 except that on input the BOM sequence is ignored at the beginning of the stream and on output the BOM sequence is prepended The byte-order-mark is strictly unnecessary in UTF-8 but is sometimes used to identify the encoding of file",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "utf8_bom",
          "package": "explicit-iomodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:utf8_bom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ewithBinaryFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "withBinaryFile",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e IOMode ioMode -\u003e (Handle ioMode -\u003e IO α) -\u003e IO α",
          "source": "src/System-IO-ExplicitIOModes.html#withBinaryFile",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO withBinaryFile",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "withBinaryFile",
          "normalized": "FilePath-\u003eIOMode a-\u003e(Handle a-\u003eIO b)-\u003eIO b",
          "package": "explicit-iomodes",
          "partial": "Binary File",
          "signature": "FilePath-\u003eIOMode ioMode-\u003e(Handle ioMode-\u003eIO α)-\u003eIO α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:withBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that: \u003ccode\u003ewithBinaryFile' fp = \u003ccode\u003e\u003ca\u003ewithBinaryFile\u003c/a\u003e\u003c/code\u003e fp \u003ccode\u003e\u003ca\u003emkIOMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "withBinaryFile'",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e (Handle ioMode -\u003e IO α) -\u003e IO α",
          "source": "src/System-IO-ExplicitIOModes.html#withBinaryFile%27",
          "type": "function"
        },
        "index": {
          "description": "Note that withBinaryFile fp withBinaryFile fp mkIOMode",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "withBinaryFile'",
          "normalized": "FilePath-\u003e(Handle a-\u003eIO b)-\u003eIO b",
          "package": "explicit-iomodes",
          "partial": "Binary File'",
          "signature": "FilePath-\u003e(Handle ioMode-\u003eIO α)-\u003eIO α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:withBinaryFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps: \u003ccode\u003eSystem.IO.\u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "withFile",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e IOMode ioMode -\u003e (Handle ioMode -\u003e IO α) -\u003e IO α",
          "source": "src/System-IO-ExplicitIOModes.html#withFile",
          "type": "function"
        },
        "index": {
          "description": "Wraps System.IO withFile",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "withFile",
          "normalized": "FilePath-\u003eIOMode a-\u003e(Handle a-\u003eIO b)-\u003eIO b",
          "package": "explicit-iomodes",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode ioMode-\u003e(Handle ioMode-\u003eIO α)-\u003eIO α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:withFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that: \u003ccode\u003ewithFile' fp = \u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e fp \u003ccode\u003e\u003ca\u003emkIOMode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "withFile'",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e (Handle ioMode -\u003e IO α) -\u003e IO α",
          "source": "src/System-IO-ExplicitIOModes.html#withFile%27",
          "type": "function"
        },
        "index": {
          "description": "Note that withFile fp withFile fp mkIOMode",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "withFile'",
          "normalized": "FilePath-\u003e(Handle a-\u003eIO b)-\u003eIO b",
          "package": "explicit-iomodes",
          "partial": "File'",
          "signature": "FilePath-\u003e(Handle ioMode-\u003eIO α)-\u003eIO α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:withFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function writes the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.ExplicitIOModes",
          "name": "writeFile",
          "package": "explicit-iomodes",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation writeFile file str function writes the string str to the file file",
          "hierarchy": "System IO ExplicitIOModes",
          "module": "System.IO.ExplicitIOModes",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "explicit-iomodes",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-iomodes/docs/System-IO-ExplicitIOModes.html#v:writeFile"
      }
    }
  ]
]