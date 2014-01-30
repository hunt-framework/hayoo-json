[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#",
      "description": {
        "fct-module": "Text.ProjectTemplate",
        "fct-package": "project-template",
        "fct-signature": "module",
        "fct-source": "src/Text-ProjectTemplate.html",
        "fct-type": "module",
        "title": "ProjectTemplate"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProjectTemplate",
        "module": "Text.ProjectTemplate",
        "name": "ProjectTemplate",
        "normalized": "",
        "package": "project-template",
        "partial": "Project Template",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#t:FileReceiver",
      "description": {
        "fct-descr": "\u003cp\u003eThe first argument to \u003ccode\u003e\u003ca\u003eunpackTemplate\u003c/a\u003e\u003c/code\u003e, specifying how to receive a file.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Text.ProjectTemplate",
        "fct-package": "project-template",
        "fct-signature": "type",
        "fct-source": "src/Text-ProjectTemplate.html#FileReceiver",
        "fct-type": "type",
        "title": "FileReceiver"
      },
      "index": {
        "description": "The first argument to unpackTemplate specifying how to receive file Since",
        "hierarchy": "Text ProjectTemplate",
        "module": "Text.ProjectTemplate",
        "name": "FileReceiver",
        "normalized": "",
        "package": "project-template",
        "partial": "File Receiver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#t:ProjectTemplateException",
      "description": {
        "fct-descr": "\u003cp\u003eExceptions that can be thrown.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Text.ProjectTemplate",
        "fct-package": "project-template",
        "fct-signature": "data",
        "fct-source": "src/Text-ProjectTemplate.html#ProjectTemplateException",
        "fct-type": "data",
        "title": "ProjectTemplateException"
      },
      "index": {
        "description": "Exceptions that can be thrown Since",
        "hierarchy": "Text ProjectTemplate",
        "module": "Text.ProjectTemplate",
        "name": "ProjectTemplateException",
        "normalized": "",
        "package": "project-template",
        "partial": "Project Template Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#v:BinaryLoopNeedsOneLine",
      "description": {
        "fct-module": "Text.ProjectTemplate",
        "fct-package": "project-template",
        "fct-signature": "BinaryLoopNeedsOneLine",
        "fct-source": "src/Text-ProjectTemplate.html#ProjectTemplateException",
        "fct-type": "function",
        "title": "BinaryLoopNeedsOneLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProjectTemplate",
        "module": "Text.ProjectTemplate",
        "name": "BinaryLoopNeedsOneLine",
        "normalized": "",
        "package": "project-template",
        "partial": "Binary Loop Needs One Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#v:InvalidInput",
      "description": {
        "fct-module": "Text.ProjectTemplate",
        "fct-package": "project-template",
        "fct-signature": "InvalidInput Text",
        "fct-source": "src/Text-ProjectTemplate.html#ProjectTemplateException",
        "fct-type": "function",
        "title": "InvalidInput"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProjectTemplate",
        "module": "Text.ProjectTemplate",
        "name": "InvalidInput",
        "normalized": "",
        "package": "project-template",
        "partial": "Invalid Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#v:createTemplate",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a template file from a stream of file/contents combinations.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Text.ProjectTemplate",
        "fct-package": "project-template",
        "fct-signature": "Conduit (FilePath, m ByteString) m ByteString",
        "fct-source": "src/Text-ProjectTemplate.html#createTemplate",
        "fct-type": "function",
        "title": "createTemplate"
      },
      "index": {
        "description": "Create template file from stream of file contents combinations Since",
        "hierarchy": "Text ProjectTemplate",
        "module": "Text.ProjectTemplate",
        "name": "createTemplate",
        "normalized": "Conduit(FilePath,a ByteString)a ByteString",
        "package": "project-template",
        "partial": "Template",
        "signature": "Conduit(FilePath,m ByteString)m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#v:receiveFS",
      "description": {
        "fct-descr": "\u003cp\u003eReceive files to the given folder on the filesystem.\n\u003c/p\u003e\u003cpre\u003e unpackTemplate (receiveFS \"some-destination\") (T.replace \"PROJECTNAME\" \"foo\")\n\u003c/pre\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Text.ProjectTemplate",
        "fct-package": "project-template",
        "fct-signature": "FilePath-\u003e FileReceiver m",
        "fct-type": "function",
        "title": "receiveFS"
      },
      "index": {
        "description": "Receive files to the given folder on the filesystem unpackTemplate receiveFS some-destination T.replace PROJECTNAME foo Since",
        "hierarchy": "Text ProjectTemplate",
        "module": "Text.ProjectTemplate",
        "name": "receiveFS",
        "normalized": "FilePath-\u003eFileReceiver a",
        "package": "project-template",
        "partial": "FS",
        "signature": "FilePath-\u003eFileReceiver m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#v:receiveMem",
      "description": {
        "fct-descr": "\u003cp\u003eReceive files to a \u003ccode\u003eWriter\u003c/code\u003e monad in memory.\n\u003c/p\u003e\u003cpre\u003e execWriter $ runExceptionT_ $ src $$ unpackTemplate receiveMem id\n\u003c/pre\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Text.ProjectTemplate",
        "fct-package": "project-template",
        "fct-signature": "FileReceiver m",
        "fct-source": "src/Text-ProjectTemplate.html#receiveMem",
        "fct-type": "function",
        "title": "receiveMem"
      },
      "index": {
        "description": "Receive files to Writer monad in memory execWriter runExceptionT src unpackTemplate receiveMem id Since",
        "hierarchy": "Text ProjectTemplate",
        "module": "Text.ProjectTemplate",
        "name": "receiveMem",
        "normalized": "",
        "package": "project-template",
        "partial": "Mem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/project-template/docs/Text-ProjectTemplate.html#v:unpackTemplate",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack a template to some destination. Destination is provided by the\n first argument.\n\u003c/p\u003e\u003cp\u003eThe second argument allows you to modify the incoming stream, usually to\n replace variables. For example, to replace PROJECTNAME with myproject, you\n could use:\n\u003c/p\u003e\u003cpre\u003e Data.Text.replace \"PROJECTNAME\" \"myproject\"\n\u003c/pre\u003e\u003cp\u003eNote that this will affect both file contents and file names.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
        "fct-module": "Text.ProjectTemplate",
        "fct-package": "project-template",
        "fct-signature": "(FilePath -\u003e Sink ByteString m ())-\u003e (Text -\u003e Text)-\u003e Sink ByteString m ()",
        "fct-type": "function",
        "title": "unpackTemplate"
      },
      "index": {
        "description": "Unpack template to some destination Destination is provided by the first argument The second argument allows you to modify the incoming stream usually to replace variables For example to replace PROJECTNAME with myproject you could use Data.Text.replace PROJECTNAME myproject Note that this will affect both file contents and file names Since",
        "hierarchy": "Text ProjectTemplate",
        "module": "Text.ProjectTemplate",
        "name": "unpackTemplate",
        "normalized": "(FilePath-\u003eSink ByteString a())-\u003e(Text-\u003eText)-\u003eSink ByteString a()",
        "package": "project-template",
        "partial": "Template",
        "signature": "(FilePath-\u003eSink ByteString m())-\u003e(Text-\u003eText)-\u003eSink ByteString m()"
      }
    }
  }
]