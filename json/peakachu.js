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
        "word": "peakachu"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MVar.YC",
          "name": "YC",
          "package": "peakachu",
          "source": "src/Control-Concurrent-MVar-YC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent MVar YC",
          "module": "Control.Concurrent.MVar.YC",
          "name": "YC",
          "package": "peakachu",
          "partial": "YC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Control-Concurrent-MVar-YC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MVar.YC",
          "name": "modifyMVarPure",
          "package": "peakachu",
          "signature": "MVar a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/Control-Concurrent-MVar-YC.html#modifyMVarPure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MVar YC",
          "module": "Control.Concurrent.MVar.YC",
          "name": "modifyMVarPure",
          "normalized": "MVar a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "peakachu",
          "partial": "MVar Pure",
          "signature": "MVar a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Control-Concurrent-MVar-YC.html#v:modifyMVarPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MVar.YC",
          "name": "writeMVar",
          "package": "peakachu",
          "signature": "MVar a -\u003e a -\u003e IO ()",
          "source": "src/Control-Concurrent-MVar-YC.html#writeMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MVar YC",
          "module": "Control.Concurrent.MVar.YC",
          "name": "writeMVar",
          "normalized": "MVar a-\u003ea-\u003eIO()",
          "package": "peakachu",
          "partial": "MVar",
          "signature": "MVar a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Control-Concurrent-MVar-YC.html#v:writeMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA FilterCategory is a Category that supports mapMaybeC.\n\u003c/p\u003e\u003cp\u003eIn Peakachu, both Program and Backend are instances of FilterCategory.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.FilterCategory",
          "name": "FilterCategory",
          "package": "peakachu",
          "source": "src/Control-FilterCategory.html",
          "type": "module"
        },
        "index": {
          "description": "FilterCategory is Category that supports mapMaybeC In Peakachu both Program and Backend are instances of FilterCategory",
          "hierarchy": "Control FilterCategory",
          "module": "Control.FilterCategory",
          "name": "FilterCategory",
          "package": "peakachu",
          "partial": "Filter Category",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Control-FilterCategory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FilterCategory",
          "name": "FilterCategory",
          "package": "peakachu",
          "source": "src/Control-FilterCategory.html#FilterCategory",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control FilterCategory",
          "module": "Control.FilterCategory",
          "name": "FilterCategory",
          "package": "peakachu",
          "partial": "Filter Category",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Control-FilterCategory.html#t:FilterCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FilterCategory",
          "name": "arrC",
          "package": "peakachu",
          "signature": "(a -\u003e b) -\u003e cat a b",
          "source": "src/Control-FilterCategory.html#arrC",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control FilterCategory",
          "module": "Control.FilterCategory",
          "name": "arrC",
          "normalized": "(a-\u003eb)-\u003ec a b",
          "package": "peakachu",
          "signature": "(a-\u003eb)-\u003ecat a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Control-FilterCategory.html#v:arrC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FilterCategory",
          "name": "filterC",
          "package": "peakachu",
          "signature": "(a -\u003e Bool) -\u003e cat a a",
          "source": "src/Control-FilterCategory.html#filterC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control FilterCategory",
          "module": "Control.FilterCategory",
          "name": "filterC",
          "normalized": "(a-\u003eBool)-\u003eb a a",
          "package": "peakachu",
          "signature": "(a-\u003eBool)-\u003ecat a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Control-FilterCategory.html#v:filterC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FilterCategory",
          "name": "flattenC",
          "package": "peakachu",
          "signature": "cat [a] a",
          "source": "src/Control-FilterCategory.html#flattenC",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control FilterCategory",
          "module": "Control.FilterCategory",
          "name": "flattenC",
          "normalized": "a[b]b",
          "package": "peakachu",
          "signature": "cat[a]a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Control-FilterCategory.html#v:flattenC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FilterCategory",
          "name": "genericFlattenC",
          "package": "peakachu",
          "signature": "cat (f a) a",
          "source": "src/Control-FilterCategory.html#genericFlattenC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control FilterCategory",
          "module": "Control.FilterCategory",
          "name": "genericFlattenC",
          "package": "peakachu",
          "partial": "Flatten",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Control-FilterCategory.html#v:genericFlattenC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.FilterCategory",
          "name": "mapMaybeC",
          "package": "peakachu",
          "signature": "(a -\u003e Maybe b) -\u003e cat a b",
          "source": "src/Control-FilterCategory.html#mapMaybeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control FilterCategory",
          "module": "Control.FilterCategory",
          "name": "mapMaybeC",
          "normalized": "(a-\u003eMaybe b)-\u003ec a b",
          "package": "peakachu",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003ecat a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Control-FilterCategory.html#v:mapMaybeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eADT getters generation with Template Haskell\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n data Blah a = NoBlah | YesBlah a | ManyBlah a Int\n $(mkADTGetters ''Blah)\n\u003c/pre\u003e\u003cp\u003eGenerates\n\u003c/p\u003e\u003cpre\u003e gNoBlah :: Blah a -\u003e Maybe ()\n gYesBlah :: Blah a -\u003e Maybe a\n gManyBlah :: Blah a -\u003e Maybe (a, Int)\n\u003c/pre\u003e\u003cp\u003eWhere\n\u003c/p\u003e\u003cpre\u003e gYesBlah (YesBlah a) = Just a\n gYesBlah _ = Nothing\n\u003c/pre\u003e\u003cp\u003eetc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ADT.Getters",
          "name": "Getters",
          "package": "peakachu",
          "source": "src/Data-ADT-Getters.html",
          "type": "module"
        },
        "index": {
          "description": "ADT getters generation with Template Haskell Example LANGUAGE TemplateHaskell data Blah NoBlah YesBlah ManyBlah Int mkADTGetters Blah Generates gNoBlah Blah Maybe gYesBlah Blah Maybe gManyBlah Blah Maybe Int Where gYesBlah YesBlah Just gYesBlah Nothing etc",
          "hierarchy": "Data ADT Getters",
          "module": "Data.ADT.Getters",
          "name": "Getters",
          "package": "peakachu",
          "partial": "Getters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Data-ADT-Getters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ADT.Getters",
          "name": "mkADTGetters",
          "package": "peakachu",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Data-ADT-Getters.html#mkADTGetters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ADT Getters",
          "module": "Data.ADT.Getters",
          "name": "mkADTGetters",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "peakachu",
          "partial": "ADTGetters",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Data-ADT-Getters.html#v:mkADTGetters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn/with newtype functions generation with Template Haskell.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n import Control.Applicative (Applicative(..), ZipList(..))\n import Data.Newtype (mkWithNewTypeFuncs)\n\n $(mkWithNewtypeFuncs [2] ''ZipList)\n\n \u003e withZipList2 (\u003c*\u003e) [(+3), (*3)] [6, 7]\n [9, 21]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Newtype",
          "name": "Newtype",
          "package": "peakachu",
          "source": "src/Data-Newtype.html",
          "type": "module"
        },
        "index": {
          "description": "In with newtype functions generation with Template Haskell Example LANGUAGE TemplateHaskell import Control.Applicative Applicative ZipList import Data.Newtype mkWithNewTypeFuncs mkWithNewtypeFuncs ZipList withZipList2",
          "hierarchy": "Data Newtype",
          "module": "Data.Newtype",
          "name": "Newtype",
          "package": "peakachu",
          "partial": "Newtype",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Data-Newtype.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Newtype",
          "name": "mkInNewtypeFuncs",
          "package": "peakachu",
          "signature": "[Int] -\u003e Name -\u003e Q [Dec]",
          "source": "src/Data-Newtype.html#mkInNewtypeFuncs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Newtype",
          "module": "Data.Newtype",
          "name": "mkInNewtypeFuncs",
          "normalized": "[Int]-\u003eName-\u003eQ[Dec]",
          "package": "peakachu",
          "partial": "In Newtype Funcs",
          "signature": "[Int]-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Data-Newtype.html#v:mkInNewtypeFuncs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Newtype",
          "name": "mkWithNewtypeFuncs",
          "package": "peakachu",
          "signature": "[Int] -\u003e Name -\u003e Q [Dec]",
          "source": "src/Data-Newtype.html#mkWithNewtypeFuncs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Newtype",
          "module": "Data.Newtype",
          "name": "mkWithNewtypeFuncs",
          "normalized": "[Int]-\u003eName-\u003eQ[Dec]",
          "package": "peakachu",
          "partial": "With Newtype Funcs",
          "signature": "[Int]-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/Data-Newtype.html#v:mkWithNewtypeFuncs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.File",
          "name": "File",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-File.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend File",
          "module": "FRP.Peakachu.Backend.File",
          "name": "File",
          "package": "peakachu",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.File",
          "name": "FileToProgram",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-File.html#FileToProgram",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend File",
          "module": "FRP.Peakachu.Backend.File",
          "name": "FileToProgram",
          "package": "peakachu",
          "partial": "File To Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-File.html#t:FileToProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.File",
          "name": "ProgramToFile",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-File.html#ProgramToFile",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend File",
          "module": "FRP.Peakachu.Backend.File",
          "name": "ProgramToFile",
          "package": "peakachu",
          "partial": "Program To File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-File.html#t:ProgramToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.File",
          "name": "FileData",
          "package": "peakachu",
          "signature": "FileData String a",
          "source": "src/FRP-Peakachu-Backend-File.html#FileToProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend File",
          "module": "FRP.Peakachu.Backend.File",
          "name": "FileData",
          "package": "peakachu",
          "partial": "File Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-File.html#v:FileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.File",
          "name": "FileError",
          "package": "peakachu",
          "signature": "FileError a",
          "source": "src/FRP-Peakachu-Backend-File.html#FileToProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend File",
          "module": "FRP.Peakachu.Backend.File",
          "name": "FileError",
          "package": "peakachu",
          "partial": "File Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-File.html#v:FileError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.File",
          "name": "ReadFile",
          "package": "peakachu",
          "signature": "ReadFile FilePath a",
          "source": "src/FRP-Peakachu-Backend-File.html#ProgramToFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend File",
          "module": "FRP.Peakachu.Backend.File",
          "name": "ReadFile",
          "package": "peakachu",
          "partial": "Read File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-File.html#v:ReadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.File",
          "name": "WriteFile",
          "package": "peakachu",
          "signature": "WriteFile FilePath String a",
          "source": "src/FRP-Peakachu-Backend-File.html#ProgramToFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend File",
          "module": "FRP.Peakachu.Backend.File",
          "name": "WriteFile",
          "package": "peakachu",
          "partial": "Write File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-File.html#v:WriteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.File",
          "name": "fileB",
          "package": "peakachu",
          "signature": "Backend (ProgramToFile a) (FileToProgram a)",
          "source": "src/FRP-Peakachu-Backend-File.html#fileB",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend File",
          "module": "FRP.Peakachu.Backend.File",
          "name": "fileB",
          "package": "peakachu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-File.html#v:fileB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.File",
          "name": "gFileData",
          "package": "peakachu",
          "signature": "forall a[ac86].  FileToProgram a[ac86] -\u003e Maybe (String, a[ac86])",
          "source": "src/FRP-Peakachu-Backend-File.html#gFileData",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend File",
          "module": "FRP.Peakachu.Backend.File",
          "name": "gFileData",
          "normalized": "a b[c]FileToProgram b[c]-\u003eMaybe(String,b[c])",
          "package": "peakachu",
          "partial": "File Data",
          "signature": "forall a[ac]FileToProgram a[ac]-\u003eMaybe(String,a[ac])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-File.html#v:gFileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.File",
          "name": "gFileError",
          "package": "peakachu",
          "signature": "forall a[ac86].  FileToProgram a[ac86] -\u003e Maybe a[ac86]",
          "source": "src/FRP-Peakachu-Backend-File.html#gFileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend File",
          "module": "FRP.Peakachu.Backend.File",
          "name": "gFileError",
          "normalized": "a b[c]FileToProgram b[c]-\u003eMaybe b[c]",
          "package": "peakachu",
          "partial": "File Error",
          "signature": "forall a[ac]FileToProgram a[ac]-\u003eMaybe a[ac]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-File.html#v:gFileError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eADT getter functions for GLUT data types.\n\u003c/p\u003e\u003cp\u003eUseful for filtering GLUT events in the Maybe monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Peakachu.Backend.GLUT.Getters",
          "name": "Getters",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-GLUT-Getters.html",
          "type": "module"
        },
        "index": {
          "description": "ADT getter functions for GLUT data types Useful for filtering GLUT events in the Maybe monad",
          "hierarchy": "FRP Peakachu Backend GLUT Getters",
          "module": "FRP.Peakachu.Backend.GLUT.Getters",
          "name": "Getters",
          "package": "peakachu",
          "partial": "Getters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT-Getters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT.Getters",
          "name": "gChar",
          "package": "peakachu",
          "signature": "Key -\u003e Maybe Char",
          "source": "src/FRP-Peakachu-Backend-GLUT-Getters.html#gChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT Getters",
          "module": "FRP.Peakachu.Backend.GLUT.Getters",
          "name": "gChar",
          "normalized": "Key-\u003eMaybe Char",
          "package": "peakachu",
          "partial": "Char",
          "signature": "Key-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT-Getters.html#v:gChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT.Getters",
          "name": "gDown",
          "package": "peakachu",
          "signature": "KeyState -\u003e Maybe ()",
          "source": "src/FRP-Peakachu-Backend-GLUT-Getters.html#gDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT Getters",
          "module": "FRP.Peakachu.Backend.GLUT.Getters",
          "name": "gDown",
          "normalized": "KeyState-\u003eMaybe()",
          "package": "peakachu",
          "partial": "Down",
          "signature": "KeyState-\u003eMaybe()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT-Getters.html#v:gDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT.Getters",
          "name": "gMouseButton",
          "package": "peakachu",
          "signature": "Key -\u003e Maybe MouseButton",
          "source": "src/FRP-Peakachu-Backend-GLUT-Getters.html#gMouseButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT Getters",
          "module": "FRP.Peakachu.Backend.GLUT.Getters",
          "name": "gMouseButton",
          "normalized": "Key-\u003eMaybe MouseButton",
          "package": "peakachu",
          "partial": "Mouse Button",
          "signature": "Key-\u003eMaybe MouseButton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT-Getters.html#v:gMouseButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT.Getters",
          "name": "gSpecialKey",
          "package": "peakachu",
          "signature": "Key -\u003e Maybe SpecialKey",
          "source": "src/FRP-Peakachu-Backend-GLUT-Getters.html#gSpecialKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT Getters",
          "module": "FRP.Peakachu.Backend.GLUT.Getters",
          "name": "gSpecialKey",
          "normalized": "Key-\u003eMaybe SpecialKey",
          "package": "peakachu",
          "partial": "Special Key",
          "signature": "Key-\u003eMaybe SpecialKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT-Getters.html#v:gSpecialKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT.Getters",
          "name": "gUp",
          "package": "peakachu",
          "signature": "KeyState -\u003e Maybe ()",
          "source": "src/FRP-Peakachu-Backend-GLUT-Getters.html#gUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT Getters",
          "module": "FRP.Peakachu.Backend.GLUT.Getters",
          "name": "gUp",
          "normalized": "KeyState-\u003eMaybe()",
          "package": "peakachu",
          "partial": "Up",
          "signature": "KeyState-\u003eMaybe()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT-Getters.html#v:gUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "GLUT",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-GLUT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "GLUT",
          "package": "peakachu",
          "partial": "GLUT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "GlutToProgram",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#GlutToProgram",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "GlutToProgram",
          "package": "peakachu",
          "partial": "Glut To Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#t:GlutToProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "Image",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#Image",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "Image",
          "package": "peakachu",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "ProgramToGlut",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#ProgramToGlut",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "ProgramToGlut",
          "package": "peakachu",
          "partial": "Program To Glut",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#t:ProgramToGlut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "DrawImage",
          "package": "peakachu",
          "signature": "DrawImage Image",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#ProgramToGlut",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "DrawImage",
          "package": "peakachu",
          "partial": "Draw Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:DrawImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "IdleEvent",
          "package": "peakachu",
          "signature": "IdleEvent",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#GlutToProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "IdleEvent",
          "package": "peakachu",
          "partial": "Idle Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:IdleEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "Image",
          "package": "peakachu",
          "signature": "Image",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "Image",
          "package": "peakachu",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "KeyboardMouseEvent",
          "package": "peakachu",
          "signature": "KeyboardMouseEvent Key KeyState Modifiers Position",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#GlutToProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "KeyboardMouseEvent",
          "package": "peakachu",
          "partial": "Keyboard Mouse Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:KeyboardMouseEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "MouseMotionEvent",
          "package": "peakachu",
          "signature": "MouseMotionEvent GLfloat GLfloat",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#GlutToProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "MouseMotionEvent",
          "package": "peakachu",
          "partial": "Mouse Motion Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:MouseMotionEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "SetTimer",
          "package": "peakachu",
          "signature": "SetTimer Timeout a",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#ProgramToGlut",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "SetTimer",
          "package": "peakachu",
          "partial": "Set Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:SetTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "TimerEvent",
          "package": "peakachu",
          "signature": "TimerEvent a",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#GlutToProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "TimerEvent",
          "package": "peakachu",
          "partial": "Timer Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:TimerEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "gIdleEvent",
          "package": "peakachu",
          "signature": "forall a[ad0W].  GlutToProgram a[ad0W] -\u003e Maybe ()",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#gIdleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "gIdleEvent",
          "normalized": "a b[c W]GlutToProgram b[c W]-\u003eMaybe()",
          "package": "peakachu",
          "partial": "Idle Event",
          "signature": "forall a[ad W]GlutToProgram a[ad W]-\u003eMaybe()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:gIdleEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "gKeyboardMouseEvent",
          "package": "peakachu",
          "signature": "forall a[ad0W].  GlutToProgram a[ad0W] -\u003e Maybe (Key, KeyState, Modifiers, Position)",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#gKeyboardMouseEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "gKeyboardMouseEvent",
          "normalized": "a b[c W]GlutToProgram b[c W]-\u003eMaybe(Key,KeyState,Modifiers,Position)",
          "package": "peakachu",
          "partial": "Keyboard Mouse Event",
          "signature": "forall a[ad W]GlutToProgram a[ad W]-\u003eMaybe(Key,KeyState,Modifiers,Position)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:gKeyboardMouseEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "gMouseMotionEvent",
          "package": "peakachu",
          "signature": "forall a[ad0W].  GlutToProgram a[ad0W] -\u003e Maybe (GLfloat, GLfloat)",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#gMouseMotionEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "gMouseMotionEvent",
          "normalized": "a b[c W]GlutToProgram b[c W]-\u003eMaybe(GLfloat,GLfloat)",
          "package": "peakachu",
          "partial": "Mouse Motion Event",
          "signature": "forall a[ad W]GlutToProgram a[ad W]-\u003eMaybe(GLfloat,GLfloat)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:gMouseMotionEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "gTimerEvent",
          "package": "peakachu",
          "signature": "forall a[ad0W].  GlutToProgram a[ad0W] -\u003e Maybe a[ad0W]",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#gTimerEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "gTimerEvent",
          "normalized": "a b[c W]GlutToProgram b[c W]-\u003eMaybe b[c W]",
          "package": "peakachu",
          "partial": "Timer Event",
          "signature": "forall a[ad W]GlutToProgram a[ad W]-\u003eMaybe a[ad W]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:gTimerEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "glut",
          "package": "peakachu",
          "signature": "Backend (ProgramToGlut a) (GlutToProgram a)",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#glut",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "glut",
          "package": "peakachu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:glut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "runImage",
          "package": "peakachu",
          "signature": "IO ()",
          "source": "src/FRP-Peakachu-Backend-GLUT.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend GLUT",
          "module": "FRP.Peakachu.Backend.GLUT",
          "name": "runImage",
          "normalized": "IO()",
          "package": "peakachu",
          "partial": "Image",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-GLUT.html#v:runImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "Internal",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "Internal",
          "package": "peakachu",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "MainLoop",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-Internal.html#MainLoop",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "MainLoop",
          "package": "peakachu",
          "partial": "Main Loop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#t:MainLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "ParallelIO",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-Internal.html#ParallelIO",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "ParallelIO",
          "package": "peakachu",
          "partial": "Parallel IO",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#t:ParallelIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "Sink",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-Internal.html#Sink",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "Sink",
          "package": "peakachu",
          "partial": "Sink",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#t:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "MainLoop",
          "package": "peakachu",
          "signature": "MainLoop",
          "source": "src/FRP-Peakachu-Backend-Internal.html#MainLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "MainLoop",
          "package": "peakachu",
          "partial": "Main Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#v:MainLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "ParIO",
          "package": "peakachu",
          "signature": "ParIO",
          "source": "src/FRP-Peakachu-Backend-Internal.html#ParallelIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "ParIO",
          "package": "peakachu",
          "partial": "Par IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#v:ParIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "Sink",
          "package": "peakachu",
          "signature": "Sink",
          "source": "src/FRP-Peakachu-Backend-Internal.html#Sink",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "Sink",
          "package": "peakachu",
          "partial": "Sink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#v:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "mlInit",
          "package": "peakachu",
          "signature": "IO ()",
          "source": "src/FRP-Peakachu-Backend-Internal.html#MainLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "mlInit",
          "normalized": "IO()",
          "package": "peakachu",
          "partial": "Init",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#v:mlInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "mlQuit",
          "package": "peakachu",
          "signature": "IO ()",
          "source": "src/FRP-Peakachu-Backend-Internal.html#MainLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "mlQuit",
          "normalized": "IO()",
          "package": "peakachu",
          "partial": "Quit",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#v:mlQuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "mlRun",
          "package": "peakachu",
          "signature": "Maybe ParallelIO",
          "source": "src/FRP-Peakachu-Backend-Internal.html#MainLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "mlRun",
          "package": "peakachu",
          "partial": "Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#v:mlRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "runParIO",
          "package": "peakachu",
          "signature": "IO ()",
          "source": "src/FRP-Peakachu-Backend-Internal.html#ParallelIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "runParIO",
          "normalized": "IO()",
          "package": "peakachu",
          "partial": "Par IO",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#v:runParIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "sinkConsume",
          "package": "peakachu",
          "signature": "a -\u003e IO ()",
          "source": "src/FRP-Peakachu-Backend-Internal.html#Sink",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "sinkConsume",
          "normalized": "a-\u003eIO()",
          "package": "peakachu",
          "partial": "Consume",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#v:sinkConsume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "sinkMainLoop",
          "package": "peakachu",
          "signature": "MainLoop",
          "source": "src/FRP-Peakachu-Backend-Internal.html#Sink",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Internal",
          "module": "FRP.Peakachu.Backend.Internal",
          "name": "sinkMainLoop",
          "package": "peakachu",
          "partial": "Main Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Internal.html#v:sinkMainLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Peakachu backend to write output to the console\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Peakachu.Backend.StdIO",
          "name": "StdIO",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-StdIO.html",
          "type": "module"
        },
        "index": {
          "description": "Peakachu backend to write output to the console",
          "hierarchy": "FRP Peakachu Backend StdIO",
          "module": "FRP.Peakachu.Backend.StdIO",
          "name": "StdIO",
          "package": "peakachu",
          "partial": "Std IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-StdIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Peakachu equivalent to \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e.\n Prints all output lines from the program, and feeds\n input lines from the user to the program.\n\u003c/p\u003e",
          "module": "FRP.Peakachu.Backend.StdIO",
          "name": "interactB",
          "package": "peakachu",
          "signature": "Backend String String",
          "source": "src/FRP-Peakachu-Backend-StdIO.html#interactB",
          "type": "function"
        },
        "index": {
          "description": "The Peakachu equivalent to interact Prints all output lines from the program and feeds input lines from the user to the program",
          "hierarchy": "FRP Peakachu Backend StdIO",
          "module": "FRP.Peakachu.Backend.StdIO",
          "name": "interactB",
          "package": "peakachu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-StdIO.html#v:interactB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.StdIO",
          "name": "stdoutB",
          "package": "peakachu",
          "signature": "Backend String ()",
          "source": "src/FRP-Peakachu-Backend-StdIO.html#stdoutB",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend StdIO",
          "module": "FRP.Peakachu.Backend.StdIO",
          "name": "stdoutB",
          "normalized": "Backend String()",
          "package": "peakachu",
          "signature": "Backend String()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-StdIO.html#v:stdoutB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Peakachu backend to get the time\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Peakachu.Backend.Time",
          "name": "Time",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend-Time.html",
          "type": "module"
        },
        "index": {
          "description": "Peakachu backend to get the time",
          "hierarchy": "FRP Peakachu Backend Time",
          "module": "FRP.Peakachu.Backend.Time",
          "name": "Time",
          "package": "peakachu",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend.Time",
          "name": "getTimeB",
          "package": "peakachu",
          "signature": "Backend a (UTCTime, a)",
          "source": "src/FRP-Peakachu-Backend-Time.html#getTimeB",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend Time",
          "module": "FRP.Peakachu.Backend.Time",
          "name": "getTimeB",
          "normalized": "Backend a(UTCTime,a)",
          "package": "peakachu",
          "partial": "Time",
          "signature": "Backend a(UTCTime,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend-Time.html#v:getTimeB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend",
          "name": "Backend",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend",
          "module": "FRP.Peakachu.Backend",
          "name": "Backend",
          "package": "peakachu",
          "partial": "Backend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend",
          "name": "Backend",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Backend.html#Backend",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend",
          "module": "FRP.Peakachu.Backend",
          "name": "Backend",
          "package": "peakachu",
          "partial": "Backend",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend.html#t:Backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend",
          "name": "Backend",
          "package": "peakachu",
          "signature": "Backend",
          "source": "src/FRP-Peakachu-Backend.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend",
          "module": "FRP.Peakachu.Backend",
          "name": "Backend",
          "package": "peakachu",
          "partial": "Backend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend.html#v:Backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Backend",
          "name": "runBackend",
          "package": "peakachu",
          "signature": "(backToProg -\u003e IO ()) -\u003e IO (Sink progToBack)",
          "source": "src/FRP-Peakachu-Backend.html#Backend",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Backend",
          "module": "FRP.Peakachu.Backend",
          "name": "runBackend",
          "normalized": "(a-\u003eIO())-\u003eIO(Sink b)",
          "package": "peakachu",
          "partial": "Backend",
          "signature": "(backToProg-\u003eIO())-\u003eIO(Sink progToBack)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Backend.html#v:runBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eProgram a b\u003c/code\u003e is a pure representation of a computer program,\n which accepts inputs of type \u003ccode\u003ea\u003c/code\u003e, and outputs values of type \u003ccode\u003eb\u003c/code\u003e.\n It may also terminate. It can output zero or more \u003ccode\u003eb\u003c/code\u003e values after each \u003ccode\u003ea\u003c/code\u003e input.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A simple stateless input-output-loop can be created from a function\n   with \u003ccode\u003e\u003ca\u003earrC\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e A simple stateful input-output-loop can be created using \u003ccode\u003e\u003ca\u003escanlP\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Outputs can be filtered using \u003ccode\u003efilterC\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ePrograms may also be composed together in several ways using common type-classes\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003e: \u003ccode\u003eProgram a b -\u003e Program b c -\u003e Program a c\u003c/code\u003e. One program's outputs are fed\n   to another program as input.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e: \u003ccode\u003eProgram a b -\u003e Program a b -\u003e Program a b\u003c/code\u003e. Both programs run in parallel processing the same input. Resulting Program outputs both's outputs.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e: \u003ccode\u003eProgram a (b -\u003e c) -\u003e Program a b -\u003e Program a c\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Alternative \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e: \u003ccode\u003e\u003ca\u003eAppendProgram\u003c/a\u003e\u003c/code\u003e is a newtype wrapper whose \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance runs one program after the other finishes (like \u003ccode\u003eZipList\u003c/code\u003e offers an alternative \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance for lists). It's also a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e ant its monadic bind allows us to invoke inner programs based on an outer program's outputs.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "FRP.Peakachu.Program",
          "name": "Program",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Program.html",
          "type": "module"
        },
        "index": {
          "description": "Program is pure representation of computer program which accepts inputs of type and outputs values of type It may also terminate It can output zero or more values after each input simple stateless input-output-loop can be created from function with arrC simple stateful input-output-loop can be created using scanlP Outputs can be filtered using filterC Programs may also be composed together in several ways using common type-classes Category Program Program Program One program outputs are fed to another program as input Monoid Program Program Program Both programs run in parallel processing the same input Resulting Program outputs both outputs Applicative Program Program Program Alternative MonadPlus AppendProgram is newtype wrapper whose Monoid instance runs one program after the other finishes like ZipList offers an alternative Applicative instance for lists It also Monad ant its monadic bind allows us to invoke inner programs based on an outer program outputs",
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "Program",
          "package": "peakachu",
          "partial": "Program",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Program",
          "name": "AppendProgram",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Program.html#AppendProgram",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "AppendProgram",
          "package": "peakachu",
          "partial": "Append Program",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#t:AppendProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA computer program\n\u003c/p\u003e",
          "module": "FRP.Peakachu.Program",
          "name": "Program",
          "package": "peakachu",
          "source": "src/FRP-Peakachu-Program.html#Program",
          "type": "data"
        },
        "index": {
          "description": "computer program",
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "Program",
          "package": "peakachu",
          "partial": "Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Program",
          "name": "AppendProg",
          "package": "peakachu",
          "signature": "AppendProg",
          "source": "src/FRP-Peakachu-Program.html#AppendProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "AppendProg",
          "package": "peakachu",
          "partial": "Append Prog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:AppendProg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Program",
          "name": "Program",
          "package": "peakachu",
          "signature": "Program",
          "source": "src/FRP-Peakachu-Program.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "Program",
          "package": "peakachu",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay the outputs of a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "FRP.Peakachu.Program",
          "name": "delayP",
          "package": "peakachu",
          "signature": "i -\u003e Program a a",
          "source": "src/FRP-Peakachu-Program.html#delayP",
          "type": "function"
        },
        "index": {
          "description": "Delay the outputs of Program",
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "delayP",
          "normalized": "a-\u003eProgram b b",
          "package": "peakachu",
          "signature": "i-\u003eProgram a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:delayP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA program that terminates immediately\n\u003c/p\u003e",
          "module": "FRP.Peakachu.Program",
          "name": "emptyP",
          "package": "peakachu",
          "signature": "Program a b",
          "source": "src/FRP-Peakachu-Program.html#emptyP",
          "type": "function"
        },
        "index": {
          "description": "program that terminates immediately",
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "emptyP",
          "package": "peakachu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:emptyP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed some outputs of a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e to itself\n\u003c/p\u003e",
          "module": "FRP.Peakachu.Program",
          "name": "loopbackP",
          "package": "peakachu",
          "signature": "Program a (Either a b) -\u003e Program a b",
          "source": "src/FRP-Peakachu-Program.html#loopbackP",
          "type": "function"
        },
        "index": {
          "description": "Feed some outputs of Program to itself",
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "loopbackP",
          "normalized": "Program a(Either a b)-\u003eProgram a b",
          "package": "peakachu",
          "signature": "Program a(Either a b)-\u003eProgram a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:loopbackP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a partial function \u003ccode\u003e(a -\u003e Maybe b)\u003c/code\u003e, output its most recent result on an input.\n\u003c/p\u003e",
          "module": "FRP.Peakachu.Program",
          "name": "lstP",
          "package": "peakachu",
          "signature": "(a -\u003e Maybe b) -\u003e Program a b",
          "source": "src/FRP-Peakachu-Program.html#lstP",
          "type": "function"
        },
        "index": {
          "description": "Given partial function Maybe output its most recent result on an input",
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "lstP",
          "normalized": "(a-\u003eMaybe b)-\u003eProgram a b",
          "package": "peakachu",
          "signature": "(a-\u003eMaybe b)-\u003eProgram a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:lstP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a partial function \u003ccode\u003e(a -\u003e Maybe b)\u003c/code\u003e and a start value, output its most recent result on an input.\n\u003c/p\u003e",
          "module": "FRP.Peakachu.Program",
          "name": "lstPs",
          "package": "peakachu",
          "signature": "Maybe b -\u003e (a -\u003e Maybe b) -\u003e Program a b",
          "source": "src/FRP-Peakachu-Program.html#lstPs",
          "type": "function"
        },
        "index": {
          "description": "Given partial function Maybe and start value output its most recent result on an input",
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "lstPs",
          "normalized": "Maybe a-\u003e(b-\u003eMaybe a)-\u003eProgram b a",
          "package": "peakachu",
          "partial": "Ps",
          "signature": "Maybe b-\u003e(a-\u003eMaybe b)-\u003eProgram a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:lstPs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Program",
          "name": "progMore",
          "package": "peakachu",
          "signature": "Maybe (a -\u003e Program a b)",
          "source": "src/FRP-Peakachu-Program.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "progMore",
          "normalized": "Maybe(a-\u003eProgram a b)",
          "package": "peakachu",
          "partial": "More",
          "signature": "Maybe(a-\u003eProgram a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:progMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Program",
          "name": "progVals",
          "package": "peakachu",
          "signature": "[b]",
          "source": "src/FRP-Peakachu-Program.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "progVals",
          "normalized": "[a]",
          "package": "peakachu",
          "partial": "Vals",
          "signature": "[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:progVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Program",
          "name": "runAppendProg",
          "package": "peakachu",
          "signature": "Program a b",
          "source": "src/FRP-Peakachu-Program.html#AppendProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "runAppendProg",
          "package": "peakachu",
          "partial": "Append Prog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:runAppendProg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a stateful input-output-loop from a simple function\n\u003c/p\u003e",
          "module": "FRP.Peakachu.Program",
          "name": "scanlP",
          "package": "peakachu",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Program a b",
          "source": "src/FRP-Peakachu-Program.html#scanlP",
          "type": "function"
        },
        "index": {
          "description": "Create stateful input-output-loop from simple function",
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "scanlP",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eProgram b a",
          "package": "peakachu",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eProgram a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:scanlP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA program that outputs a value and immediately terminates\n\u003c/p\u003e",
          "module": "FRP.Peakachu.Program",
          "name": "singleValueP",
          "package": "peakachu",
          "signature": "Program a ()",
          "source": "src/FRP-Peakachu-Program.html#singleValueP",
          "type": "function"
        },
        "index": {
          "description": "program that outputs value and immediately terminates",
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "singleValueP",
          "normalized": "Program a()",
          "package": "peakachu",
          "partial": "Value",
          "signature": "Program a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:singleValueP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate when a predicate on input fails\n\u003c/p\u003e",
          "module": "FRP.Peakachu.Program",
          "name": "takeWhileP",
          "package": "peakachu",
          "signature": "(a -\u003e Bool) -\u003e Program a a",
          "source": "src/FRP-Peakachu-Program.html#takeWhileP",
          "type": "function"
        },
        "index": {
          "description": "Terminate when predicate on input fails",
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "takeWhileP",
          "normalized": "(a-\u003eBool)-\u003eProgram a a",
          "package": "peakachu",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eProgram a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:takeWhileP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Program",
          "name": "withAppendProgram1",
          "package": "peakachu",
          "signature": "forall a0 b0 a1 b1.  (AppendProgram a0 b0 -\u003e AppendProgram a1 b1) -\u003e Program a0 b0 -\u003e Program a1 b1",
          "source": "src/FRP-Peakachu-Program.html#withAppendProgram1",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "withAppendProgram1",
          "normalized": "a b c b c(AppendProgram b c-\u003eAppendProgram b c)-\u003eProgram b c-\u003eProgram b c",
          "package": "peakachu",
          "partial": "Append Program",
          "signature": "forall a b a b(AppendProgram a b-\u003eAppendProgram a b)-\u003eProgram a b-\u003eProgram a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:withAppendProgram1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu.Program",
          "name": "withAppendProgram2",
          "package": "peakachu",
          "signature": "forall a0 b0 a1 b1 a2 b2.  (AppendProgram a0 b0 -\u003e AppendProgram a1 b1 -\u003e AppendProgram a2 b2) -\u003e Program a0 b0 -\u003e Program a1 b1 -\u003e Program a2 b2",
          "source": "src/FRP-Peakachu-Program.html#withAppendProgram2",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu Program",
          "module": "FRP.Peakachu.Program",
          "name": "withAppendProgram2",
          "normalized": "a b c b c b c(AppendProgram b c-\u003eAppendProgram b c-\u003eAppendProgram b c)-\u003eProgram b c-\u003eProgram b c-\u003eProgram b c",
          "package": "peakachu",
          "partial": "Append Program",
          "signature": "forall a b a b a b(AppendProgram a b-\u003eAppendProgram a b-\u003eAppendProgram a b)-\u003eProgram a b-\u003eProgram a b-\u003eProgram a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu-Program.html#v:withAppendProgram2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu",
          "name": "Peakachu",
          "package": "peakachu",
          "source": "src/FRP-Peakachu.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Peakachu",
          "module": "FRP.Peakachu",
          "name": "Peakachu",
          "package": "peakachu",
          "partial": "Peakachu",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu",
          "name": "processList",
          "package": "peakachu",
          "signature": "Program a b -\u003e l a -\u003e l b",
          "source": "src/FRP-Peakachu.html#processList",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu",
          "module": "FRP.Peakachu",
          "name": "processList",
          "normalized": "Program a b-\u003ec a-\u003ec b",
          "package": "peakachu",
          "partial": "List",
          "signature": "Program a b-\u003el a-\u003el b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu.html#v:processList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003eVerbose\u003c/a\u003e version of \u003ccode\u003e\u003ca\u003eprocessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe program's outputs after each input are grouped together\n\u003c/p\u003e",
          "module": "FRP.Peakachu",
          "name": "processListV",
          "package": "peakachu",
          "signature": "Program a b -\u003e l a -\u003e l [b]",
          "source": "src/FRP-Peakachu.html#processListV",
          "type": "function"
        },
        "index": {
          "description": "Verbose version of processList The program outputs after each input are grouped together",
          "hierarchy": "FRP Peakachu",
          "module": "FRP.Peakachu",
          "name": "processListV",
          "normalized": "Program a b-\u003ec a-\u003ec[b]",
          "package": "peakachu",
          "partial": "List",
          "signature": "Program a b-\u003el a-\u003el[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu.html#v:processListV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Peakachu",
          "name": "runProgram",
          "package": "peakachu",
          "signature": "Backend o i -\u003e Program i o -\u003e IO ()",
          "source": "src/FRP-Peakachu.html#runProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Peakachu",
          "module": "FRP.Peakachu",
          "name": "runProgram",
          "normalized": "Backend a b-\u003eProgram b a-\u003eIO()",
          "package": "peakachu",
          "partial": "Program",
          "signature": "Backend o i-\u003eProgram i o-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/peakachu/docs/FRP-Peakachu.html#v:runProgram"
      }
    }
  ]
]