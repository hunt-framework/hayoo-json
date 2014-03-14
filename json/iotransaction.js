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
        "word": "iotransaction"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides facilities for building \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions in such a way that, if one \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action in a sequence\nthrows an exception, the effects of previous actions will be undone.\n\u003c/p\u003e\u003cp\u003eHere's an example of how to use this module.  Suppose you have two files that, every so often, must be updated\nfrom some external data source.  The new contents for a particular file are retrieved from the external data\nsource via a function \u003ccode\u003egetNewContents :: \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  \u003ccode\u003egetNewContents\u003c/code\u003e could throw an exception, as \ncould any of the other \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions that we invoke, and if an exception is thrown while the files are being updated,\nwe want all changes made so far to either of the files to be rolled back.  Using this module, we could do this thus:\n\u003c/p\u003e\u003cpre\u003e import Control.MonadTransaction\n import System.IO\n import System.FilePath.Posix\n \n getNewContents :: FilePath -\u003e IO String\n getNewContents path = ...\n \n updateFile :: FilePath -\u003e UndoableIO ()\n updateFile path = do -- get current contents\n                      oldContents \u003c- doAction $ readFile path\n \n                      -- get new contents from external data source\n                      newContents \u003c- doAction $ getNewContents path\n \n                      -- write new contents\n                      doAction $ writeFile path newContents\n \n                      -- add an undo action that rewrites the old contents\n                      addUndoer $ writeFile path oldContents\n \n main :: IO ()\n main = exec $ do updateFile \"file1\"\n                  updateFile \"file2\"\n\u003c/pre\u003e\u003cp\u003eIn this code, we use the following from this module: the \u003ccode\u003e\u003ca\u003eUndoableIO\u003c/a\u003e\u003c/code\u003e monad, and the functions \u003ccode\u003e\u003ca\u003edoAction\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eaddUndoer\u003c/a\u003e\u003c/code\u003e,\nand \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eUndoableIO\u003c/a\u003e\u003c/code\u003e monad is like a context for combining \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions together into a transaction.  Inside\n\u003ccode\u003e\u003ca\u003eUndoableIO\u003c/a\u003e\u003c/code\u003e, we invoke \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions using the function \u003ccode\u003e\u003ca\u003edoAction\u003c/a\u003e\u003c/code\u003e.  When executed, these actions will be sequenced as they would\nbe if they had been combined as usual inside the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  When we invoke an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action whose effect should be undone if an\nexception occurs later, we add an \"undoer\" --- that is, an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action that undoes the effect --- using the function\n\u003ccode\u003e\u003ca\u003eaddUndoer\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eUndoableIO\u003c/a\u003e\u003c/code\u003e maintains a stack of undoers, and if an exception occurs during execution, the undoers will\nbe executed in the reverse of the order in which they were added, and then the exception will be rethrown.\n\u003c/p\u003e\u003cp\u003eSo, in \u003ccode\u003eupdateFile\u003c/code\u003e we use \u003ccode\u003e\u003ca\u003edoAction\u003c/a\u003e\u003c/code\u003e to call \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions that read from and write to the files and retrieve strings from the \nexternal data source, and at the end we add an undoer that restores the original contents.  In \u003ccode\u003emain\u003c/code\u003e, we combine the \u003ccode\u003e\u003ca\u003eUndoableIO\u003c/a\u003e\u003c/code\u003e\nactions returned by two calls to \u003ccode\u003eupdateFile\u003c/code\u003e into one.  We pass the resulting \u003ccode\u003e\u003ca\u003eUndoableIO\u003c/a\u003e\u003c/code\u003e action to \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, which\nconverts it into an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.  If an exception occurs when this \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action is executed, then any changes so far made to the\nfiles will be undone using the undoers added by \u003ccode\u003eupdateFile\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.IoTransaction",
          "name": "IoTransaction",
          "package": "iotransaction",
          "source": "src/Control-IoTransaction.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides facilities for building IO actions in such way that if one IO action in sequence throws an exception the effects of previous actions will be undone Here an example of how to use this module Suppose you have two files that every so often must be updated from some external data source The new contents for particular file are retrieved from the external data source via function getNewContents FilePath IO String getNewContents could throw an exception as could any of the other IO actions that we invoke and if an exception is thrown while the files are being updated we want all changes made so far to either of the files to be rolled back Using this module we could do this thus import Control.MonadTransaction import System.IO import System.FilePath.Posix getNewContents FilePath IO String getNewContents path updateFile FilePath UndoableIO updateFile path do get current contents oldContents doAction readFile path get new contents from external data source newContents doAction getNewContents path write new contents doAction writeFile path newContents add an undo action that rewrites the old contents addUndoer writeFile path oldContents main IO main exec do updateFile file1 updateFile file2 In this code we use the following from this module the UndoableIO monad and the functions doAction addUndoer and exec The UndoableIO monad is like context for combining IO actions together into transaction Inside UndoableIO we invoke IO actions using the function doAction When executed these actions will be sequenced as they would be if they had been combined as usual inside the IO monad When we invoke an IO action whose effect should be undone if an exception occurs later we add an undoer that is an IO action that undoes the effect using the function addUndoer UndoableIO maintains stack of undoers and if an exception occurs during execution the undoers will be executed in the reverse of the order in which they were added and then the exception will be rethrown So in updateFile we use doAction to call IO actions that read from and write to the files and retrieve strings from the external data source and at the end we add an undoer that restores the original contents In main we combine the UndoableIO actions returned by two calls to updateFile into one We pass the resulting UndoableIO action to exec which converts it into an IO action If an exception occurs when this IO action is executed then any changes so far made to the files will be undone using the undoers added by updateFile",
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "IoTransaction",
          "package": "iotransaction",
          "partial": "Io Transaction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eExceptionalMonad\u003c/code\u003e is a monad that in which \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003es can be thrown and caught.\n\u003c/p\u003e\u003cp\u003eA monad \u003ccode\u003em\u003c/code\u003e must implement \u003ccode\u003eExceptionalMonad\u003c/code\u003e in order to work with \u003ccode\u003e\u003ca\u003eUndoableM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.IoTransaction",
          "name": "ExceptionalMonad",
          "package": "iotransaction",
          "source": "src/Control-IoTransaction.html#ExceptionalMonad",
          "type": "class"
        },
        "index": {
          "description": "An ExceptionalMonad is monad that in which Exception can be thrown and caught monad must implement ExceptionalMonad in order to work with UndoableM",
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "ExceptionalMonad",
          "package": "iotransaction",
          "partial": "Exceptional Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#t:ExceptionalMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IoTransaction",
          "name": "ManualUndo",
          "package": "iotransaction",
          "source": "src/Control-IoTransaction.html#ManualUndo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "ManualUndo",
          "package": "iotransaction",
          "partial": "Manual Undo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#t:ManualUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \"undoable action\" is a wrapper for an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action (the \"doer\") that combines it with another\n\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action (the \"undoer\") that undoes the effects of the first one.\n\u003c/p\u003e\u003cp\u003eUndoable actions are monads, and when sequenced together they act like transactions involving \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operations.\nAs undoable actions are sequenced together, their doers are also sequenced together and their undoers\nare placed into a stack.  When the doers are executed, if one of them throws an exception, the undoers\nso far added to the stack are executed in reverse the reverse of the order in which they were added to the stack,\nand then the exception is rethrown; no other doers (or undoers) are executed.  If no exception is thrown, none of\nthe undoers are executed.\n\u003c/p\u003e",
          "module": "Control.IoTransaction",
          "name": "UndoableIO",
          "package": "iotransaction",
          "source": "src/Control-IoTransaction.html#UndoableIO",
          "type": "type"
        },
        "index": {
          "description": "An undoable action is wrapper for an IO action the doer that combines it with another IO action the undoer that undoes the effects of the first one Undoable actions are monads and when sequenced together they act like transactions involving IO operations As undoable actions are sequenced together their doers are also sequenced together and their undoers are placed into stack When the doers are executed if one of them throws an exception the undoers so far added to the stack are executed in reverse the reverse of the order in which they were added to the stack and then the exception is rethrown no other doers or undoers are executed If no exception is thrown none of the undoers are executed",
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "UndoableIO",
          "package": "iotransaction",
          "partial": "Undoable IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#t:UndoableIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for combining other, side-effectual monads in a transaction\nthat can be rolled back if an exception is thrown.  \u003ccode\u003em\u003c/code\u003e must implement\n\u003ccode\u003eExceptionalMonad\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis type is for implementing transactions and should not be used directly\nby code that uses transactions.\n\u003c/p\u003e",
          "module": "Control.IoTransaction",
          "name": "UndoableM",
          "package": "iotransaction",
          "source": "src/Control-IoTransaction.html#UndoableM",
          "type": "data"
        },
        "index": {
          "description": "monad for combining other side-effectual monads in transaction that can be rolled back if an exception is thrown must implement ExceptionalMonad This type is for implementing transactions and should not be used directly by code that uses transactions",
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "UndoableM",
          "package": "iotransaction",
          "partial": "Undoable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#t:UndoableM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IoTransaction",
          "name": "Do",
          "package": "iotransaction",
          "signature": "Do (m (a, m ()))",
          "source": "src/Control-IoTransaction.html#UndoableM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "Do",
          "normalized": "Do(a(b,a()))",
          "package": "iotransaction",
          "partial": "Do",
          "signature": "Do(m(a,m()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:Do"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IoTransaction",
          "name": "ManualUndo",
          "package": "iotransaction",
          "signature": "ManualUndo",
          "source": "src/Control-IoTransaction.html#ManualUndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "ManualUndo",
          "package": "iotransaction",
          "partial": "Manual Undo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:ManualUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an undoer to the undoer stack.\n\u003c/p\u003e",
          "module": "Control.IoTransaction",
          "name": "addUndoer",
          "package": "iotransaction",
          "signature": "IO ()-\u003e UndoableIO ()",
          "type": "function"
        },
        "index": {
          "description": "Add an undoer to the undoer stack",
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "addUndoer",
          "normalized": "IO()-\u003eUndoableIO()",
          "package": "iotransaction",
          "partial": "Undoer",
          "signature": "IO()-\u003eUndoableIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:addUndoer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IoTransaction",
          "name": "addUndoerM",
          "package": "iotransaction",
          "signature": "m () -\u003e UndoableM m ()",
          "source": "src/Control-IoTransaction.html#addUndoerM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "addUndoerM",
          "normalized": "a()-\u003eUndoableM a()",
          "package": "iotransaction",
          "partial": "Undoer",
          "signature": "m()-\u003eUndoableM m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:addUndoerM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch an exception.\n\u003c/p\u003e",
          "module": "Control.IoTransaction",
          "name": "catchM",
          "package": "iotransaction",
          "signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
          "source": "src/Control-IoTransaction.html#catchM",
          "type": "method"
        },
        "index": {
          "description": "Catch an exception",
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "catchM",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "iotransaction",
          "signature": "m a-\u003e(e-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:catchM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an undoable action without any undoer.\n\u003c/p\u003e\u003cp\u003eThis undoable action will not add any undoer to the undoer stack.\n\u003c/p\u003e",
          "module": "Control.IoTransaction",
          "name": "doAction",
          "package": "iotransaction",
          "signature": "IO a-\u003e UndoableIO a",
          "type": "function"
        },
        "index": {
          "description": "Make an undoable action without any undoer This undoable action will not add any undoer to the undoer stack",
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "doAction",
          "normalized": "IO a-\u003eUndoableIO a",
          "package": "iotransaction",
          "partial": "Action",
          "signature": "IO a-\u003eUndoableIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:doAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IoTransaction",
          "name": "doActionM",
          "package": "iotransaction",
          "signature": "m a -\u003e UndoableM m a",
          "source": "src/Control-IoTransaction.html#doActionM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "doActionM",
          "normalized": "a b-\u003eUndoableM a b",
          "package": "iotransaction",
          "partial": "Action",
          "signature": "m a-\u003eUndoableM m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:doActionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eUndoableIO\u003c/a\u003e\u003c/code\u003e action into an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action that invokes\nthe actions (and the undoers if necessary) that were added to the\n\u003ccode\u003e\u003ca\u003eUndoableIO\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Control.IoTransaction",
          "name": "exec",
          "package": "iotransaction",
          "signature": "UndoableIO a -\u003e IO a",
          "source": "src/Control-IoTransaction.html#exec",
          "type": "function"
        },
        "index": {
          "description": "Convert an UndoableIO action into an IO action that invokes the actions and the undoers if necessary that were added to the UndoableIO action",
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "exec",
          "normalized": "UndoableIO a-\u003eIO a",
          "package": "iotransaction",
          "signature": "UndoableIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IoTransaction",
          "name": "execM",
          "package": "iotransaction",
          "signature": "UndoableM m a -\u003e m a",
          "source": "src/Control-IoTransaction.html#execM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "execM",
          "normalized": "UndoableM a b-\u003ea b",
          "package": "iotransaction",
          "signature": "UndoableM m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:execM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an undoable action.\n\u003c/p\u003e",
          "module": "Control.IoTransaction",
          "name": "makeUndoable",
          "package": "iotransaction",
          "signature": "IO a-\u003e IO ()-\u003e UndoableIO a",
          "type": "function"
        },
        "index": {
          "description": "Make an undoable action",
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "makeUndoable",
          "normalized": "IO a-\u003eIO()-\u003eUndoableIO a",
          "package": "iotransaction",
          "partial": "Undoable",
          "signature": "IO a-\u003eIO()-\u003eUndoableIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:makeUndoable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IoTransaction",
          "name": "makeUndoableM",
          "package": "iotransaction",
          "signature": "m a -\u003e m () -\u003e UndoableM m a",
          "source": "src/Control-IoTransaction.html#makeUndoableM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "makeUndoableM",
          "normalized": "a b-\u003ea()-\u003eUndoableM a b",
          "package": "iotransaction",
          "partial": "Undoable",
          "signature": "m a-\u003em()-\u003eUndoableM m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:makeUndoableM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop execution, run the actions on the undoer stack, and throw \u003ccode\u003e\u003ca\u003eManualUndo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.IoTransaction",
          "name": "rollback",
          "package": "iotransaction",
          "signature": "UndoableIO ()",
          "source": "src/Control-IoTransaction.html#rollback",
          "type": "function"
        },
        "index": {
          "description": "Stop execution run the actions on the undoer stack and throw ManualUndo",
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "rollback",
          "normalized": "UndoableIO()",
          "package": "iotransaction",
          "signature": "UndoableIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:rollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.IoTransaction",
          "name": "rollbackM",
          "package": "iotransaction",
          "signature": "UndoableM m ()",
          "source": "src/Control-IoTransaction.html#rollbackM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "rollbackM",
          "normalized": "UndoableM a()",
          "package": "iotransaction",
          "signature": "UndoableM m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:rollbackM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception.\n\u003c/p\u003e",
          "module": "Control.IoTransaction",
          "name": "throwM",
          "package": "iotransaction",
          "signature": "e -\u003e m a",
          "source": "src/Control-IoTransaction.html#throwM",
          "type": "method"
        },
        "index": {
          "description": "Throw an exception",
          "hierarchy": "Control IoTransaction",
          "module": "Control.IoTransaction",
          "name": "throwM",
          "normalized": "a-\u003eb c",
          "package": "iotransaction",
          "signature": "e-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iotransaction/docs/Control-IoTransaction.html#v:throwM"
      }
    }
  ]
]