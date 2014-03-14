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
        "word": "project-template"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProjectTemplate",
          "name": "ProjectTemplate",
          "package": "project-template",
          "source": "src/Text-ProjectTemplate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ProjectTemplate",
          "module": "Text.ProjectTemplate",
          "name": "ProjectTemplate",
          "package": "project-template",
          "partial": "Project Template",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first argument to \u003ccode\u003e\u003ca\u003eunpackTemplate\u003c/a\u003e\u003c/code\u003e, specifying how to receive a file.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Text.ProjectTemplate",
          "name": "FileReceiver",
          "package": "project-template",
          "source": "src/Text-ProjectTemplate.html#FileReceiver",
          "type": "type"
        },
        "index": {
          "description": "The first argument to unpackTemplate specifying how to receive file Since",
          "hierarchy": "Text ProjectTemplate",
          "module": "Text.ProjectTemplate",
          "name": "FileReceiver",
          "package": "project-template",
          "partial": "File Receiver",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#t:FileReceiver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExceptions that can be thrown.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Text.ProjectTemplate",
          "name": "ProjectTemplateException",
          "package": "project-template",
          "source": "src/Text-ProjectTemplate.html#ProjectTemplateException",
          "type": "data"
        },
        "index": {
          "description": "Exceptions that can be thrown Since",
          "hierarchy": "Text ProjectTemplate",
          "module": "Text.ProjectTemplate",
          "name": "ProjectTemplateException",
          "package": "project-template",
          "partial": "Project Template Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#t:ProjectTemplateException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProjectTemplate",
          "name": "BinaryLoopNeedsOneLine",
          "package": "project-template",
          "signature": "BinaryLoopNeedsOneLine",
          "source": "src/Text-ProjectTemplate.html#ProjectTemplateException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProjectTemplate",
          "module": "Text.ProjectTemplate",
          "name": "BinaryLoopNeedsOneLine",
          "package": "project-template",
          "partial": "Binary Loop Needs One Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#v:BinaryLoopNeedsOneLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProjectTemplate",
          "name": "InvalidInput",
          "package": "project-template",
          "signature": "InvalidInput Text",
          "source": "src/Text-ProjectTemplate.html#ProjectTemplateException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProjectTemplate",
          "module": "Text.ProjectTemplate",
          "name": "InvalidInput",
          "package": "project-template",
          "partial": "Invalid Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#v:InvalidInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a template file from a stream of file/contents combinations.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Text.ProjectTemplate",
          "name": "createTemplate",
          "package": "project-template",
          "signature": "Conduit (FilePath, m ByteString) m ByteString",
          "source": "src/Text-ProjectTemplate.html#createTemplate",
          "type": "function"
        },
        "index": {
          "description": "Create template file from stream of file contents combinations Since",
          "hierarchy": "Text ProjectTemplate",
          "module": "Text.ProjectTemplate",
          "name": "createTemplate",
          "normalized": "Conduit(FilePath,a ByteString)a ByteString",
          "package": "project-template",
          "partial": "Template",
          "signature": "Conduit(FilePath,m ByteString)m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#v:createTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive files to the given folder on the filesystem.\n\u003c/p\u003e\u003cpre\u003e unpackTemplate (receiveFS \"some-destination\") (T.replace \"PROJECTNAME\" \"foo\")\n\u003c/pre\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Text.ProjectTemplate",
          "name": "receiveFS",
          "package": "project-template",
          "signature": "FilePath-\u003e FileReceiver m",
          "type": "function"
        },
        "index": {
          "description": "Receive files to the given folder on the filesystem unpackTemplate receiveFS some-destination T.replace PROJECTNAME foo Since",
          "hierarchy": "Text ProjectTemplate",
          "module": "Text.ProjectTemplate",
          "name": "receiveFS",
          "normalized": "FilePath-\u003eFileReceiver a",
          "package": "project-template",
          "partial": "FS",
          "signature": "FilePath-\u003eFileReceiver m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#v:receiveFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive files to a \u003ccode\u003eWriter\u003c/code\u003e monad in memory.\n\u003c/p\u003e\u003cpre\u003e execWriter $ runExceptionT_ $ src $$ unpackTemplate receiveMem id\n\u003c/pre\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Text.ProjectTemplate",
          "name": "receiveMem",
          "package": "project-template",
          "signature": "FileReceiver m",
          "source": "src/Text-ProjectTemplate.html#receiveMem",
          "type": "function"
        },
        "index": {
          "description": "Receive files to Writer monad in memory execWriter runExceptionT src unpackTemplate receiveMem id Since",
          "hierarchy": "Text ProjectTemplate",
          "module": "Text.ProjectTemplate",
          "name": "receiveMem",
          "package": "project-template",
          "partial": "Mem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#v:receiveMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack a template to some destination. Destination is provided by the\n first argument.\n\u003c/p\u003e\u003cp\u003eThe second argument allows you to modify the incoming stream, usually to\n replace variables. For example, to replace PROJECTNAME with myproject, you\n could use:\n\u003c/p\u003e\u003cpre\u003e Data.Text.replace \"PROJECTNAME\" \"myproject\"\n\u003c/pre\u003e\u003cp\u003eNote that this will affect both file contents and file names.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Text.ProjectTemplate",
          "name": "unpackTemplate",
          "package": "project-template",
          "signature": "(FilePath -\u003e Sink ByteString m ())-\u003e (Text -\u003e Text)-\u003e Sink ByteString m ()",
          "type": "function"
        },
        "index": {
          "description": "Unpack template to some destination Destination is provided by the first argument The second argument allows you to modify the incoming stream usually to replace variables For example to replace PROJECTNAME with myproject you could use Data.Text.replace PROJECTNAME myproject Note that this will affect both file contents and file names Since",
          "hierarchy": "Text ProjectTemplate",
          "module": "Text.ProjectTemplate",
          "name": "unpackTemplate",
          "normalized": "(FilePath-\u003eSink ByteString a())-\u003e(Text-\u003eText)-\u003eSink ByteString a()",
          "package": "project-template",
          "partial": "Template",
          "signature": "(FilePath-\u003eSink ByteString m())-\u003e(Text-\u003eText)-\u003eSink ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#v:unpackTemplate"
      }
    }
  ]
]