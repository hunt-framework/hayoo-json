[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Debug.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eA typeclass for printing debug output.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Common.Debug",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Common-Debug.html",
        "fct-type": "module",
        "title": "Debug"
      },
      "index": {
        "description": "Version typeclass for printing debug output",
        "hierarchy": "Holumbus Common Debug",
        "module": "Holumbus.Common.Debug",
        "name": "Debug",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Debug.html#t:Debug",
      "description": {
        "fct-module": "Holumbus.Common.Debug",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "class",
        "fct-source": "src/Holumbus-Common-Debug.html#Debug",
        "fct-type": "class",
        "title": "Debug"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Common Debug",
        "module": "Holumbus.Common.Debug",
        "name": "Debug",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Debug.html#v:getDebug",
      "description": {
        "fct-module": "Holumbus.Common.Debug",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "m -\u003e IO String",
        "fct-source": "src/Holumbus-Common-Debug.html#getDebug",
        "fct-type": "method",
        "title": "getDebug"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Common Debug",
        "module": "Holumbus.Common.Debug",
        "name": "getDebug",
        "normalized": "a-\u003eIO String",
        "package": "Holumbus-Distribution",
        "partial": "Debug",
        "signature": "m-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Debug.html#v:printDebug",
      "description": {
        "fct-descr": "\u003cp\u003eJust print out some debug output.  \n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.Debug",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "m -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-Debug.html#printDebug",
        "fct-type": "method",
        "title": "printDebug"
      },
      "index": {
        "description": "Just print out some debug output",
        "hierarchy": "Holumbus Common Debug",
        "module": "Holumbus.Common.Debug",
        "name": "printDebug",
        "normalized": "a-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Debug",
        "signature": "m-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eSome nice helper functions for strict file writing, appending and\n  reading. All read-functions are strict, in the sense that\n  the whole file is read at once and the content is stored into memory.\n  So you won't have any semi-closed handles which might bring you in trouble\n  from time to time. The files are immedialty closed after the reading.\n  This Module can handle four filetypes: XML-Files, List-Files,\n  Binary-Files and Text-Files.\n\u003c/p\u003e\u003cp\u003eXML-Files:\n  Normal textfiles, but the content is stored as a xml-representation. For\n  the pickling, we use the HXT-Library \n  (see http://www.fh-wedel.de/~si/HXmlToolbox/)\n\u003c/p\u003e\u003cp\u003eList-Files:\n  Binary-Files, which store a list of data-objects. The main difference\n  between Binary-Files and List-Files is, that you can append data to a\n  List-File which will be automatically concatenated to the existing list.\n  If you try this with a normal Binary-File, you'll get only the original\n  list and the appended data will be lost.\n\u003c/p\u003e\u003cp\u003eBinary-Files:\n  Normal binary files, for the encoding and decoding, we use the Haskell\n  binary-package.\n\u003c/p\u003e\u003cp\u003eText-Files:\n  Normal text files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Common-FileHandling.html",
        "fct-type": "module",
        "title": "FileHandling"
      },
      "index": {
        "description": "Version Some nice helper functions for strict file writing appending and reading All read-functions are strict in the sense that the whole file is read at once and the content is stored into memory So you won have any semi-closed handles which might bring you in trouble from time to time The files are immedialty closed after the reading This Module can handle four filetypes XML-Files List-Files Binary-Files and Text-Files XML-Files Normal textfiles but the content is stored as xml-representation For the pickling we use the HXT-Library see http www.fh-wedel.de si HXmlToolbox List-Files Binary-Files which store list of data-objects The main difference between Binary-Files and List-Files is that you can append data to List-File which will be automatically concatenated to the existing list If you try this with normal Binary-File you ll get only the original list and the appended data will be lost Binary-Files Normal binary files for the encoding and decoding we use the Haskell binary-package Text-Files Normal text files",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "FileHandling",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "File Handling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:appendToBinFile",
      "description": {
        "fct-descr": "\u003cp\u003eAppend data to a binary file, this doesn't mean, that the contents\n   are really concatenated when you read the file.    \n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-FileHandling.html#appendToBinFile",
        "fct-type": "function",
        "title": "appendToBinFile"
      },
      "index": {
        "description": "Append data to binary file this doesn mean that the contents are really concatenated when you read the file",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "appendToBinFile",
        "normalized": "FilePath-\u003eByteString-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "To Bin File",
        "signature": "FilePath-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:appendToListFile",
      "description": {
        "fct-descr": "\u003cp\u003eAppends data to a list file.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e [a] -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-FileHandling.html#appendToListFile",
        "fct-type": "function",
        "title": "appendToListFile"
      },
      "index": {
        "description": "Appends data to list file",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "appendToListFile",
        "normalized": "FilePath-\u003e[a]-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "To List File",
        "signature": "FilePath-\u003e[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:appendToTextFile",
      "description": {
        "fct-descr": "\u003cp\u003eAppends a string to a text file.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-FileHandling.html#appendToTextFile",
        "fct-type": "function",
        "title": "appendToTextFile"
      },
      "index": {
        "description": "Appends string to text file",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "appendToTextFile",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "To Text File",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:listToByteString",
      "description": {
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[a] -\u003e ByteString",
        "fct-source": "src/Holumbus-Common-FileHandling.html#listToByteString",
        "fct-type": "function",
        "title": "listToByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "listToByteString",
        "normalized": "[a]-\u003eByteString",
        "package": "Holumbus-Distribution",
        "partial": "To Byte String",
        "signature": "[a]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:loadFromXmlFile",
      "description": {
        "fct-descr": "\u003cp\u003eLoads an XML-File and parses the content to a specified datatype.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e IO a",
        "fct-source": "src/Holumbus-Common-FileHandling.html#loadFromXmlFile",
        "fct-type": "function",
        "title": "loadFromXmlFile"
      },
      "index": {
        "description": "Loads an XML-File and parses the content to specified datatype",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "loadFromXmlFile",
        "normalized": "FilePath-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "From Xml File",
        "signature": "FilePath-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:parseByteStringToList",
      "description": {
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ByteString -\u003e [a]",
        "fct-source": "src/Holumbus-Common-FileHandling.html#parseByteStringToList",
        "fct-type": "function",
        "title": "parseByteStringToList"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "parseByteStringToList",
        "normalized": "ByteString-\u003e[a]",
        "package": "Holumbus-Distribution",
        "partial": "Byte String To List",
        "signature": "ByteString-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:readFromBinFile",
      "description": {
        "fct-descr": "\u003cp\u003eReads the data from a binary file as a bytestring.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e IO ByteString",
        "fct-source": "src/Holumbus-Common-FileHandling.html#readFromBinFile",
        "fct-type": "function",
        "title": "readFromBinFile"
      },
      "index": {
        "description": "Reads the data from binary file as bytestring",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "readFromBinFile",
        "normalized": "FilePath-\u003eIO ByteString",
        "package": "Holumbus-Distribution",
        "partial": "From Bin File",
        "signature": "FilePath-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:readFromListFile",
      "description": {
        "fct-descr": "\u003cp\u003ereads from a list file.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e IO [a]",
        "fct-source": "src/Holumbus-Common-FileHandling.html#readFromListFile",
        "fct-type": "function",
        "title": "readFromListFile"
      },
      "index": {
        "description": "reads from list file",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "readFromListFile",
        "normalized": "FilePath-\u003eIO[a]",
        "package": "Holumbus-Distribution",
        "partial": "From List File",
        "signature": "FilePath-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:readFromTextFile",
      "description": {
        "fct-descr": "\u003cp\u003eStrict file reading by Simon Marlow.\n found on\n http://users.aber.ac.uk/afc/stricthaskell.html\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e IO String",
        "fct-source": "src/Holumbus-Common-FileHandling.html#readFromTextFile",
        "fct-type": "function",
        "title": "readFromTextFile"
      },
      "index": {
        "description": "Strict file reading by Simon Marlow found on http users.aber.ac.uk afc stricthaskell.html",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "readFromTextFile",
        "normalized": "FilePath-\u003eIO String",
        "package": "Holumbus-Distribution",
        "partial": "From Text File",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:saveToXmlFile",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a dataset to XML and saves the XML-string into a file.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e a -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-FileHandling.html#saveToXmlFile",
        "fct-type": "function",
        "title": "saveToXmlFile"
      },
      "index": {
        "description": "Converts dataset to XML and saves the XML-string into file",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "saveToXmlFile",
        "normalized": "FilePath-\u003ea-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "To Xml File",
        "signature": "FilePath-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:writeToBinFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data to a binary file.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-FileHandling.html#writeToBinFile",
        "fct-type": "function",
        "title": "writeToBinFile"
      },
      "index": {
        "description": "Write data to binary file",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "writeToBinFile",
        "normalized": "FilePath-\u003eByteString-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "To Bin File",
        "signature": "FilePath-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:writeToListFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrites data to a list file.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e [a] -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-FileHandling.html#writeToListFile",
        "fct-type": "function",
        "title": "writeToListFile"
      },
      "index": {
        "description": "Writes data to list file",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "writeToListFile",
        "normalized": "FilePath-\u003e[a]-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "To List File",
        "signature": "FilePath-\u003e[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-FileHandling.html#v:writeToTextFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a sting to a text file.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.FileHandling",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-FileHandling.html#writeToTextFile",
        "fct-type": "function",
        "title": "writeToTextFile"
      },
      "index": {
        "description": "Writes sting to text file",
        "hierarchy": "Holumbus Common FileHandling",
        "module": "Holumbus.Common.FileHandling",
        "name": "writeToTextFile",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "To Text File",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Logging.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eIn this part of the Holumbus-Framework, we use hslogging. With this, we are\n  able to activate and deactivate some nice debugging-Output.\n  This is the global configuration for the logging-output. Of cource, if you\n  want to use this output, you have to invoke initializeLogging.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Common.Logging",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Common-Logging.html",
        "fct-type": "module",
        "title": "Logging"
      },
      "index": {
        "description": "Version In this part of the Holumbus-Framework we use hslogging With this we are able to activate and deactivate some nice debugging-Output This is the global configuration for the logging-output Of cource if you want to use this output you have to invoke initializeLogging",
        "hierarchy": "Holumbus Common Logging",
        "module": "Holumbus.Common.Logging",
        "name": "Logging",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Logging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Logging.html#v:initializeFileLogging",
      "description": {
        "fct-descr": "\u003cp\u003econfigures the logging-parameters for the Holumbus-Framework\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.Logging",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e [(String, Priority)] -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-Logging.html#initializeFileLogging",
        "fct-type": "function",
        "title": "initializeFileLogging"
      },
      "index": {
        "description": "configures the logging-parameters for the Holumbus-Framework",
        "hierarchy": "Holumbus Common Logging",
        "module": "Holumbus.Common.Logging",
        "name": "initializeFileLogging",
        "normalized": "FilePath-\u003e[(String,Priority)]-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "File Logging",
        "signature": "FilePath-\u003e[(String,Priority)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Logging.html#v:initializeLogging",
      "description": {
        "fct-descr": "\u003cp\u003econfigures the logging-parameters for the Holumbus-Framework\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.Logging",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[(String, Priority)] -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-Logging.html#initializeLogging",
        "fct-type": "function",
        "title": "initializeLogging"
      },
      "index": {
        "description": "configures the logging-parameters for the Holumbus-Framework",
        "hierarchy": "Holumbus Common Logging",
        "module": "Holumbus.Common.Logging",
        "name": "initializeLogging",
        "normalized": "[(String,Priority)]-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Logging",
        "signature": "[(String,Priority)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Threading.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eOperations to start and stop threads which will not be killed when a regular\n  exception occurs. In this case, the thread will continue working. Such a \n  thread can only be killed by the stop-method. This whole thing is a wrapper\n  around the normal lightweight thread functions.\n\u003c/p\u003e\u003cp\u003eThe created threads execute a function in an infinite loop. This is the\n  normal usecase for message dispatcher threads.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Common.Threading",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Common-Threading.html",
        "fct-type": "module",
        "title": "Threading"
      },
      "index": {
        "description": "Version Operations to start and stop threads which will not be killed when regular exception occurs In this case the thread will continue working Such thread can only be killed by the stop-method This whole thing is wrapper around the normal lightweight thread functions The created threads execute function in an infinite loop This is the normal usecase for message dispatcher threads",
        "hierarchy": "Holumbus Common Threading",
        "module": "Holumbus.Common.Threading",
        "name": "Threading",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Threading",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Threading.html#t:Thread",
      "description": {
        "fct-descr": "\u003cp\u003eThe thread datatype\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.Threading",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Common-Threading.html#Thread",
        "fct-type": "type",
        "title": "Thread"
      },
      "index": {
        "description": "The thread datatype",
        "hierarchy": "Holumbus Common Threading",
        "module": "Holumbus.Common.Threading",
        "name": "Thread",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Threading.html#v:newThread",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new thread object. The thread will not be running.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.Threading",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "IO Thread",
        "fct-source": "src/Holumbus-Common-Threading.html#newThread",
        "fct-type": "function",
        "title": "newThread"
      },
      "index": {
        "description": "Creates new thread object The thread will not be running",
        "hierarchy": "Holumbus Common Threading",
        "module": "Holumbus.Common.Threading",
        "name": "newThread",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Threading.html#v:setThreadAction",
      "description": {
        "fct-descr": "\u003cp\u003eSets the action function, which will be executed in each cycle\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.Threading",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "IO () -\u003e Thread -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-Threading.html#setThreadAction",
        "fct-type": "function",
        "title": "setThreadAction"
      },
      "index": {
        "description": "Sets the action function which will be executed in each cycle",
        "hierarchy": "Holumbus Common Threading",
        "module": "Holumbus.Common.Threading",
        "name": "setThreadAction",
        "normalized": "IO()-\u003eThread-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Thread Action",
        "signature": "IO()-\u003eThread-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Threading.html#v:setThreadDelay",
      "description": {
        "fct-descr": "\u003cp\u003eSets the delay between two loop cycles. Default value: no delay.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.Threading",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int -\u003e Thread -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-Threading.html#setThreadDelay",
        "fct-type": "function",
        "title": "setThreadDelay"
      },
      "index": {
        "description": "Sets the delay between two loop cycles Default value no delay",
        "hierarchy": "Holumbus Common Threading",
        "module": "Holumbus.Common.Threading",
        "name": "setThreadDelay",
        "normalized": "Int-\u003eThread-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Thread Delay",
        "signature": "Int-\u003eThread-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Threading.html#v:setThreadErrorHandler",
      "description": {
        "fct-descr": "\u003cp\u003eSets the error handler. It is activated, when the action function\n   will raise an exception.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.Threading",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "IO () -\u003e Thread -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-Threading.html#setThreadErrorHandler",
        "fct-type": "function",
        "title": "setThreadErrorHandler"
      },
      "index": {
        "description": "Sets the error handler It is activated when the action function will raise an exception",
        "hierarchy": "Holumbus Common Threading",
        "module": "Holumbus.Common.Threading",
        "name": "setThreadErrorHandler",
        "normalized": "IO()-\u003eThread-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Thread Error Handler",
        "signature": "IO()-\u003eThread-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Threading.html#v:startThread",
      "description": {
        "fct-descr": "\u003cp\u003eStarts the thread.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.Threading",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Thread -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-Threading.html#startThread",
        "fct-type": "function",
        "title": "startThread"
      },
      "index": {
        "description": "Starts the thread",
        "hierarchy": "Holumbus Common Threading",
        "module": "Holumbus.Common.Threading",
        "name": "startThread",
        "normalized": "Thread-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Thread",
        "signature": "Thread-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Threading.html#v:stopThread",
      "description": {
        "fct-descr": "\u003cp\u003eStops the thread. If the thread itself wants to stop from within the action\n   function, the current cycle will be executed till the end. So statements\n   after this function will still be executed.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.Threading",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Thread -\u003e IO ()",
        "fct-source": "src/Holumbus-Common-Threading.html#stopThread",
        "fct-type": "function",
        "title": "stopThread"
      },
      "index": {
        "description": "Stops the thread If the thread itself wants to stop from within the action function the current cycle will be executed till the end So statements after this function will still be executed",
        "hierarchy": "Holumbus Common Threading",
        "module": "Holumbus.Common.Threading",
        "name": "stopThread",
        "normalized": "Thread-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Thread",
        "signature": "Thread-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eSome nice functions, needed everywhere.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Common.Utils",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Common-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Version Some nice functions needed everywhere",
        "hierarchy": "Holumbus Common Utils",
        "module": "Holumbus.Common.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Utils.html#v:decodeMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eparses something from a maybe bytestring, if Nothing, then Nothing\n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.Utils",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Maybe ByteString -\u003e Maybe a",
        "fct-source": "src/Holumbus-Common-Utils.html#decodeMaybe",
        "fct-type": "function",
        "title": "decodeMaybe"
      },
      "index": {
        "description": "parses something from maybe bytestring if Nothing then Nothing",
        "hierarchy": "Holumbus Common Utils",
        "module": "Holumbus.Common.Utils",
        "name": "decodeMaybe",
        "normalized": "Maybe ByteString-\u003eMaybe a",
        "package": "Holumbus-Distribution",
        "partial": "Maybe",
        "signature": "Maybe ByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Utils.html#v:filterEmptyList",
      "description": {
        "fct-module": "Holumbus.Common.Utils",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Maybe [k] -\u003e [k]",
        "fct-source": "src/Holumbus-Common-Utils.html#filterEmptyList",
        "fct-type": "function",
        "title": "filterEmptyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Common Utils",
        "module": "Holumbus.Common.Utils",
        "name": "filterEmptyList",
        "normalized": "Maybe[a]-\u003e[a]",
        "package": "Holumbus-Distribution",
        "partial": "Empty List",
        "signature": "Maybe[k]-\u003e[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Utils.html#v:handleAll",
      "description": {
        "fct-module": "Holumbus.Common.Utils",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "(SomeException -\u003e IO a) -\u003e IO a -\u003e IO a",
        "fct-source": "src/Holumbus-Common-Utils.html#handleAll",
        "fct-type": "function",
        "title": "handleAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Common Utils",
        "module": "Holumbus.Common.Utils",
        "name": "handleAll",
        "normalized": "(SomeException-\u003eIO a)-\u003eIO a-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "All",
        "signature": "(SomeException-\u003eIO a)-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Utils.html#v:prettyRecordLine",
      "description": {
        "fct-descr": "\u003cp\u003eFor the nice output of key-value-pairs \n\u003c/p\u003e",
        "fct-module": "Holumbus.Common.Utils",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int -\u003e a -\u003e b -\u003e String",
        "fct-source": "src/Holumbus-Common-Utils.html#prettyRecordLine",
        "fct-type": "function",
        "title": "prettyRecordLine"
      },
      "index": {
        "description": "For the nice output of key-value-pairs",
        "hierarchy": "Holumbus Common Utils",
        "module": "Holumbus.Common.Utils",
        "name": "prettyRecordLine",
        "normalized": "Int-\u003ea-\u003eb-\u003eString",
        "package": "Holumbus-Distribution",
        "partial": "Record Line",
        "signature": "Int-\u003ea-\u003eb-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Common-Utils.html#v:setEmptyList",
      "description": {
        "fct-module": "Holumbus.Common.Utils",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[k] -\u003e Maybe [k]",
        "fct-source": "src/Holumbus-Common-Utils.html#setEmptyList",
        "fct-type": "function",
        "title": "setEmptyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Common Utils",
        "module": "Holumbus.Common.Utils",
        "name": "setEmptyList",
        "normalized": "[a]-\u003eMaybe[a]",
        "package": "Holumbus-Distribution",
        "partial": "Empty List",
        "signature": "[k]-\u003eMaybe[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-Console.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module provides a tiny and nice implementation of a little command \n  shell. It can be feed with individual commands and provides a simple but\n  powerful way to interact with your program. The following functions are\n  implemented by default:\n    exit - exit the console loop\n    help - print a nice help\n\u003c/p\u003e\u003cp\u003eThere was a little \u003ca\u003ebug\u003c/a\u003e with the System.Console.Readline package. When\n  we use this option, we make a foreign call... and the Haskell library\n  documentation say this about concurrency and GHC:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eIf you don't use the -threaded option, then the runtime does not make \n  use of multiple OS threads. Foreign calls will block all other running \n  Haskell threads until the call returns.\n  The System.IO library still does multiplexing, so there can be multiple\n  threads doing IO, and this is handled internally by the runtime using \n  select.\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eWe make a foreign call, which is not in the System.IO library, so we\n  have to work with -threaded when we want a fancy command history.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Console.Console",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Console-Console.html",
        "fct-type": "module",
        "title": "Console"
      },
      "index": {
        "description": "Version This module provides tiny and nice implementation of little command shell It can be feed with individual commands and provides simple but powerful way to interact with your program The following functions are implemented by default exit exit the console loop help print nice help There was little bug with the System.Console.Readline package When we use this option we make foreign call and the Haskell library documentation say this about concurrency and GHC If you don use the threaded option then the runtime does not make use of multiple OS threads Foreign calls will block all other running Haskell threads until the call returns The System.IO library still does multiplexing so there can be multiple threads doing IO and this is handled internally by the runtime using select We make foreign call which is not in the System.IO library so we have to work with threaded when we want fancy command history",
        "hierarchy": "Holumbus Console Console",
        "module": "Holumbus.Console.Console",
        "name": "Console",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Console",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-Console.html#t:ConsoleData",
      "description": {
        "fct-descr": "\u003cp\u003eMap which contains all commands that the user can execute\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.Console",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Console-Console.html#ConsoleData",
        "fct-type": "type",
        "title": "ConsoleData"
      },
      "index": {
        "description": "Map which contains all commands that the user can execute",
        "hierarchy": "Holumbus Console Console",
        "module": "Holumbus.Console.Console",
        "name": "ConsoleData",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Console Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-Console.html#v:addConsoleCommand",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a new console command to the function, an existing command with the\n   same name will be overwritten\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.Console",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String-\u003e ConsoleFunction a-\u003e String-\u003e ConsoleData a-\u003e ConsoleData a",
        "fct-type": "function",
        "title": "addConsoleCommand"
      },
      "index": {
        "description": "Adds new console command to the function an existing command with the same name will be overwritten",
        "hierarchy": "Holumbus Console Console",
        "module": "Holumbus.Console.Console",
        "name": "addConsoleCommand",
        "normalized": "String-\u003eConsoleFunction a-\u003eString-\u003eConsoleData a-\u003eConsoleData a",
        "package": "Holumbus-Distribution",
        "partial": "Console Command",
        "signature": "String-\u003eConsoleFunction a-\u003eString-\u003eConsoleData a-\u003eConsoleData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-Console.html#v:handleUserInput",
      "description": {
        "fct-descr": "\u003cp\u003eThe main loop. You know... read stdin, parse the input, execute command.\n   You can quit it by the exit-command.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.Console",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ConsoleData a -\u003e a -\u003e IO ()",
        "fct-source": "src/Holumbus-Console-Console.html#handleUserInput",
        "fct-type": "function",
        "title": "handleUserInput"
      },
      "index": {
        "description": "The main loop You know read stdin parse the input execute command You can quit it by the exit-command",
        "hierarchy": "Holumbus Console Console",
        "module": "Holumbus.Console.Console",
        "name": "handleUserInput",
        "normalized": "ConsoleData a-\u003ea-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "User Input",
        "signature": "ConsoleData a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-Console.html#v:initializeConsole",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new console datatype\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.Console",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ConsoleData a",
        "fct-source": "src/Holumbus-Console-Console.html#initializeConsole",
        "fct-type": "function",
        "title": "initializeConsole"
      },
      "index": {
        "description": "Creates new console datatype",
        "hierarchy": "Holumbus Console Console",
        "module": "Holumbus.Console.Console",
        "name": "initializeConsole",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Console",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-Console.html#v:nextOption",
      "description": {
        "fct-descr": "\u003cp\u003egets the next option from the command line as string\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.Console",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[String] -\u003e IO (Maybe String, [String])",
        "fct-source": "src/Holumbus-Console-Console.html#nextOption",
        "fct-type": "function",
        "title": "nextOption"
      },
      "index": {
        "description": "gets the next option from the command line as string",
        "hierarchy": "Holumbus Console Console",
        "module": "Holumbus.Console.Console",
        "name": "nextOption",
        "normalized": "[String]-\u003eIO(Maybe String,[String])",
        "package": "Holumbus-Distribution",
        "partial": "Option",
        "signature": "[String]-\u003eIO(Maybe String,[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-Console.html#v:parseOption",
      "description": {
        "fct-descr": "\u003cp\u003eSimple \u003ca\u003eparser\u003c/a\u003e for the commandline...\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.Console",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[String] -\u003e IO (Maybe a, [String])",
        "fct-source": "src/Holumbus-Console-Console.html#parseOption",
        "fct-type": "function",
        "title": "parseOption"
      },
      "index": {
        "description": "Simple parser for the commandline",
        "hierarchy": "Holumbus Console Console",
        "module": "Holumbus.Console.Console",
        "name": "parseOption",
        "normalized": "[String]-\u003eIO(Maybe a,[String])",
        "package": "Holumbus-Distribution",
        "partial": "Option",
        "signature": "[String]-\u003eIO(Maybe a,[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-ServerConsole.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module provides a tiny and nice implementation of a little command \n  shell with communcation over a socket.\n\u003c/p\u003e\u003cp\u003eIt is basically a copy of Holumbus.Console.Console with some changes to fit network communication.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Console.ServerConsole",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Console-ServerConsole.html",
        "fct-type": "module",
        "title": "ServerConsole"
      },
      "index": {
        "description": "Version This module provides tiny and nice implementation of little command shell with communcation over socket It is basically copy of Holumbus.Console.Console with some changes to fit network communication",
        "hierarchy": "Holumbus Console ServerConsole",
        "module": "Holumbus.Console.ServerConsole",
        "name": "ServerConsole",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Server Console",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-ServerConsole.html#t:ConsoleData",
      "description": {
        "fct-descr": "\u003cp\u003eMap which contains all commands that the user can execute\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.ServerConsole",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Console-ServerConsole.html#ConsoleData",
        "fct-type": "type",
        "title": "ConsoleData"
      },
      "index": {
        "description": "Map which contains all commands that the user can execute",
        "hierarchy": "Holumbus Console ServerConsole",
        "module": "Holumbus.Console.ServerConsole",
        "name": "ConsoleData",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Console Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-ServerConsole.html#v:addConsoleCommand",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a new console command to the function, an existing command with the\n   same name will be overwritten\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.ServerConsole",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String-\u003e ConsoleFunction a-\u003e String-\u003e ConsoleData a-\u003e ConsoleData a",
        "fct-type": "function",
        "title": "addConsoleCommand"
      },
      "index": {
        "description": "Adds new console command to the function an existing command with the same name will be overwritten",
        "hierarchy": "Holumbus Console ServerConsole",
        "module": "Holumbus.Console.ServerConsole",
        "name": "addConsoleCommand",
        "normalized": "String-\u003eConsoleFunction a-\u003eString-\u003eConsoleData a-\u003eConsoleData a",
        "package": "Holumbus-Distribution",
        "partial": "Console Command",
        "signature": "String-\u003eConsoleFunction a-\u003eString-\u003eConsoleData a-\u003eConsoleData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-ServerConsole.html#v:defaultaction",
      "description": {
        "fct-descr": "\u003cp\u003eThis defaultimplementaion can be used if a simple INput -\u003e Process command -\u003e output patern is used\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.ServerConsole",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ConsoleData a -\u003e a -\u003e String -\u003e ServerAction String",
        "fct-source": "src/Holumbus-Console-ServerConsole.html#defaultaction",
        "fct-type": "function",
        "title": "defaultaction"
      },
      "index": {
        "description": "This defaultimplementaion can be used if simple INput Process command output patern is used",
        "hierarchy": "Holumbus Console ServerConsole",
        "module": "Holumbus.Console.ServerConsole",
        "name": "defaultaction",
        "normalized": "ConsoleData a-\u003ea-\u003eString-\u003eServerAction String",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "ConsoleData a-\u003ea-\u003eString-\u003eServerAction String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-ServerConsole.html#v:defaultconverter",
      "description": {
        "fct-descr": "\u003cp\u003edefault string to a converter. Converts the input lines into desired format. Here String\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.ServerConsole",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "LineConverter String",
        "fct-source": "src/Holumbus-Console-ServerConsole.html#defaultconverter",
        "fct-type": "function",
        "title": "defaultconverter"
      },
      "index": {
        "description": "default string to converter Converts the input lines into desired format Here String",
        "hierarchy": "Holumbus Console ServerConsole",
        "module": "Holumbus.Console.ServerConsole",
        "name": "defaultconverter",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-ServerConsole.html#v:initializeConsole",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new console datatype\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.ServerConsole",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ConsoleData a",
        "fct-source": "src/Holumbus-Console-ServerConsole.html#initializeConsole",
        "fct-type": "function",
        "title": "initializeConsole"
      },
      "index": {
        "description": "Creates new console datatype",
        "hierarchy": "Holumbus Console ServerConsole",
        "module": "Holumbus.Console.ServerConsole",
        "name": "initializeConsole",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Console",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-ServerConsole.html#v:nextOption",
      "description": {
        "fct-descr": "\u003cp\u003egets the next option from the command line as string\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.ServerConsole",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[String] -\u003e IO (Maybe String, [String])",
        "fct-source": "src/Holumbus-Console-ServerConsole.html#nextOption",
        "fct-type": "function",
        "title": "nextOption"
      },
      "index": {
        "description": "gets the next option from the command line as string",
        "hierarchy": "Holumbus Console ServerConsole",
        "module": "Holumbus.Console.ServerConsole",
        "name": "nextOption",
        "normalized": "[String]-\u003eIO(Maybe String,[String])",
        "package": "Holumbus-Distribution",
        "partial": "Option",
        "signature": "[String]-\u003eIO(Maybe String,[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-ServerConsole.html#v:parseOption",
      "description": {
        "fct-descr": "\u003cp\u003eSimple \u003ca\u003eparser\u003c/a\u003e for the commandline...\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.ServerConsole",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[String] -\u003e IO (Maybe a, [String])",
        "fct-source": "src/Holumbus-Console-ServerConsole.html#parseOption",
        "fct-type": "function",
        "title": "parseOption"
      },
      "index": {
        "description": "Simple parser for the commandline",
        "hierarchy": "Holumbus Console ServerConsole",
        "module": "Holumbus.Console.ServerConsole",
        "name": "parseOption",
        "normalized": "[String]-\u003eIO(Maybe a,[String])",
        "package": "Holumbus-Distribution",
        "partial": "Option",
        "signature": "[String]-\u003eIO(Maybe a,[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Console-ServerConsole.html#v:startServerConsole",
      "description": {
        "fct-descr": "\u003cp\u003eStarts the server listening\n\u003c/p\u003e",
        "fct-module": "Holumbus.Console.ServerConsole",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ConsoleData a-\u003e a-\u003e Int-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "startServerConsole"
      },
      "index": {
        "description": "Starts the server listening",
        "hierarchy": "Holumbus Console ServerConsole",
        "module": "Holumbus.Console.ServerConsole",
        "name": "startServerConsole",
        "normalized": "ConsoleData a-\u003ea-\u003eInt-\u003eString-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Server Console",
        "signature": "ConsoleData a-\u003ea-\u003eInt-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eA map of key-value-pairs. The values are hold in a list, so adding the same\n  key-value-pair twice to the map, will result in storing the value twice.\n  Even the sequence of adding the values will be saved.\n\u003c/p\u003e\u003cp\u003eThe name AccuMap is from accumulation map. You can use this map to easily\n  storing all you key-value-pairs. After that you can all values-lists by\n  key. Unlike the MultiMap, you don't lose the information of identical values\n  and their order of adding.\n\u003c/p\u003e\u003cp\u003eMost functions are inspired by the Data.Map type. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Data-AccuMap.html",
        "fct-type": "module",
        "title": "AccuMap"
      },
      "index": {
        "description": "Version map of key-value-pairs The values are hold in list so adding the same key-value-pair twice to the map will result in storing the value twice Even the sequence of adding the values will be saved The name AccuMap is from accumulation map You can use this map to easily storing all you key-value-pairs After that you can all values-lists by key Unlike the MultiMap you don lose the information of identical values and their order of adding Most functions are inspired by the Data.Map type",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "AccuMap",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Accu Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#t:AccuMap",
      "description": {
        "fct-descr": "\u003cp\u003ethe AccuMap datatype\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Data-AccuMap.html#AccuMap",
        "fct-type": "data",
        "title": "AccuMap"
      },
      "index": {
        "description": "the AccuMap datatype",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "AccuMap",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Accu Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#v:deleteKey",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a key and all its values from the AccuMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "k -\u003e AccuMap k a -\u003e AccuMap k a",
        "fct-source": "src/Holumbus-Data-AccuMap.html#deleteKey",
        "fct-type": "function",
        "title": "deleteKey"
      },
      "index": {
        "description": "Deletes key and all its values from the AccuMap",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "deleteKey",
        "normalized": "a-\u003eAccuMap a b-\u003eAccuMap a b",
        "package": "Holumbus-Distribution",
        "partial": "Key",
        "signature": "k-\u003eAccuMap k a-\u003eAccuMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an empty AccuMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "AccuMap k a",
        "fct-source": "src/Holumbus-Data-AccuMap.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Creates an empty AccuMap",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "empty",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an AccuMap from a list.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[(k, [a])] -\u003e AccuMap k a",
        "fct-source": "src/Holumbus-Data-AccuMap.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creates an AccuMap from list",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "fromList",
        "normalized": "[(a,[b])]-\u003eAccuMap a b",
        "package": "Holumbus-Distribution",
        "partial": "List",
        "signature": "[(k,[a])]-\u003eAccuMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#v:fromTupleList",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an AccuMap from a tuple list.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[(k, a)] -\u003e AccuMap k a",
        "fct-source": "src/Holumbus-Data-AccuMap.html#fromTupleList",
        "fct-type": "function",
        "title": "fromTupleList"
      },
      "index": {
        "description": "Creates an AccuMap from tuple list",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "fromTupleList",
        "normalized": "[(a,b)]-\u003eAccuMap a b",
        "package": "Holumbus-Distribution",
        "partial": "Tuple List",
        "signature": "[(k,a)]-\u003eAccuMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a key-value-pair to the AccuMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "k -\u003e a -\u003e AccuMap k a -\u003e AccuMap k a",
        "fct-source": "src/Holumbus-Data-AccuMap.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert key-value-pair to the AccuMap",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eAccuMap a b-\u003eAccuMap a b",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "k-\u003ea-\u003eAccuMap k a-\u003eAccuMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#v:insertList",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a key and a list of values to the AccuMap.\n   Faster than adding all pair one by one.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "k -\u003e [a] -\u003e AccuMap k a -\u003e AccuMap k a",
        "fct-source": "src/Holumbus-Data-AccuMap.html#insertList",
        "fct-type": "function",
        "title": "insertList"
      },
      "index": {
        "description": "Insert key and list of values to the AccuMap Faster than adding all pair one by one",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "insertList",
        "normalized": "a-\u003e[b]-\u003eAccuMap a b-\u003eAccuMap a b",
        "package": "Holumbus-Distribution",
        "partial": "List",
        "signature": "k-\u003e[a]-\u003eAccuMap k a-\u003eAccuMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eGet the list of values for one key. If the key doesn't exists,\n   an empty list is returned.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "k -\u003e AccuMap k a -\u003e [a]",
        "fct-source": "src/Holumbus-Data-AccuMap.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Get the list of values for one key If the key doesn exists an empty list is returned",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "lookup",
        "normalized": "a-\u003eAccuMap a b-\u003e[b]",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "k-\u003eAccuMap k a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eTest, if the key is in the AccuMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "k -\u003e AccuMap k a -\u003e Bool",
        "fct-source": "src/Holumbus-Data-AccuMap.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Test if the key is in the AccuMap",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "member",
        "normalized": "a-\u003eAccuMap a b-\u003eBool",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "k-\u003eAccuMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eTest, if AccuMap is empty.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "AccuMap k a -\u003e Bool",
        "fct-source": "src/Holumbus-Data-AccuMap.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Test if AccuMap is empty",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "null",
        "normalized": "AccuMap a b-\u003eBool",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "AccuMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms an AccuMap to a list.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "AccuMap k a -\u003e [(k, [a])]",
        "fct-source": "src/Holumbus-Data-AccuMap.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Transforms an AccuMap to list",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "toList",
        "normalized": "AccuMap a b-\u003e[(a,[b])]",
        "package": "Holumbus-Distribution",
        "partial": "List",
        "signature": "AccuMap k a-\u003e[(k,[a])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-AccuMap.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two AccuMaps, the ordering of the two maps is\n   significant for the order of the values-elements.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.AccuMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "AccuMap k a -\u003e AccuMap k a -\u003e AccuMap k a",
        "fct-source": "src/Holumbus-Data-AccuMap.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Combines two AccuMaps the ordering of the two maps is significant for the order of the values-elements",
        "hierarchy": "Holumbus Data AccuMap",
        "module": "Holumbus.Data.AccuMap",
        "name": "union",
        "normalized": "AccuMap a b-\u003eAccuMap a b-\u003eAccuMap a b",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "AccuMap k a-\u003eAccuMap k a-\u003eAccuMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThe KeyMap is derived from the Data.Map type. The keys of the Map are\n  strings and the values can be arbitrary data objects. But you don't have to\n  specify the keys because every value-object is able to create it's own\n  key via the \u003ca\u003eKey\u003c/a\u003e typeclass.\n\u003c/p\u003e\u003cp\u003eFrom the functionality, the KeyMap stands between a set and a Map. If you\n  want to insert an element to the map, it behaves like a set. You don't need \n  an additionnal key and it makes no different if you insert an object multiple\n  times. If you want to access the objects in the KeyMap, you can lookup them\n  via the key, so in this case this container behaves like an ordinary map.\n\u003c/p\u003e\u003cp\u003eThe functions for this container are named after the standard Map and Set\n  functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Data-KeyMap.html",
        "fct-type": "module",
        "title": "KeyMap"
      },
      "index": {
        "description": "Version The KeyMap is derived from the Data.Map type The keys of the Map are strings and the values can be arbitrary data objects But you don have to specify the keys because every value-object is able to create it own key via the Key typeclass From the functionality the KeyMap stands between set and Map If you want to insert an element to the map it behaves like set You don need an additionnal key and it makes no different if you insert an object multiple times If you want to access the objects in the KeyMap you can lookup them via the key so in this case this container behaves like an ordinary map The functions for this container are named after the standard Map and Set functions",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "KeyMap",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Key Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eEvery element of this map has to implement a key-function. which\n   gives us the key of the element\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "class",
        "fct-source": "src/Holumbus-Data-KeyMap.html#Key",
        "fct-type": "class",
        "title": "Key"
      },
      "index": {
        "description": "Every element of this map has to implement key-function which gives us the key of the element",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "Key",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#t:KeyMap",
      "description": {
        "fct-descr": "\u003cp\u003eThe KeyMap datatype.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Data-KeyMap.html#KeyMap",
        "fct-type": "data",
        "title": "KeyMap"
      },
      "index": {
        "description": "The KeyMap datatype",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "KeyMap",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Key Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:deleteElem",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a single elemet from the KeyMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "a -\u003e KeyMap a -\u003e KeyMap a",
        "fct-source": "src/Holumbus-Data-KeyMap.html#deleteElem",
        "fct-type": "function",
        "title": "deleteElem"
      },
      "index": {
        "description": "Deletes single elemet from the KeyMap",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "deleteElem",
        "normalized": "a-\u003eKeyMap a-\u003eKeyMap a",
        "package": "Holumbus-Distribution",
        "partial": "Elem",
        "signature": "a-\u003eKeyMap a-\u003eKeyMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:deleteKey",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a whole key from the KeyMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e KeyMap a -\u003e KeyMap a",
        "fct-source": "src/Holumbus-Data-KeyMap.html#deleteKey",
        "fct-type": "function",
        "title": "deleteKey"
      },
      "index": {
        "description": "Deletes whole key from the KeyMap",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "deleteKey",
        "normalized": "String-\u003eKeyMap a-\u003eKeyMap a",
        "package": "Holumbus-Distribution",
        "partial": "Key",
        "signature": "String-\u003eKeyMap a-\u003eKeyMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003eGet all different values in the map without regarding their keys.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "KeyMap a -\u003e [a]",
        "fct-source": "src/Holumbus-Data-KeyMap.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Get all different values in the map without regarding their keys",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "elems",
        "normalized": "KeyMap a-\u003e[a]",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "KeyMap a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty KeyMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "KeyMap a",
        "fct-source": "src/Holumbus-Data-KeyMap.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty KeyMap",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "empty",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a KeyMap from a list of keys.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[a] -\u003e KeyMap a",
        "fct-source": "src/Holumbus-Data-KeyMap.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creates KeyMap from list of keys",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "fromList",
        "normalized": "[a]-\u003eKeyMap a",
        "package": "Holumbus-Distribution",
        "partial": "List",
        "signature": "[a]-\u003eKeyMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:getKey",
      "description": {
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "n -\u003e String",
        "fct-source": "src/Holumbus-Data-KeyMap.html#getKey",
        "fct-type": "method",
        "title": "getKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "getKey",
        "normalized": "a-\u003eString",
        "package": "Holumbus-Distribution",
        "partial": "Key",
        "signature": "n-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts an element in the KeyMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "a -\u003e KeyMap a -\u003e KeyMap a",
        "fct-source": "src/Holumbus-Data-KeyMap.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Inserts an element in the KeyMap",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "insert",
        "normalized": "a-\u003eKeyMap a-\u003eKeyMap a",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "a-\u003eKeyMap a-\u003eKeyMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003eGet all different keys from the map.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "KeyMap a -\u003e [String]",
        "fct-source": "src/Holumbus-Data-KeyMap.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Get all different keys from the map",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "keys",
        "normalized": "KeyMap a-\u003e[String]",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "KeyMap a-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eGets all different elements for one key or an empty set.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e KeyMap a -\u003e m a",
        "fct-source": "src/Holumbus-Data-KeyMap.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Gets all different elements for one key or an empty set",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "lookup",
        "normalized": "String-\u003eKeyMap a-\u003eb a",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "String-\u003eKeyMap a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:memberElem",
      "description": {
        "fct-descr": "\u003cp\u003eTest, if a data object is in the KeyMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "a -\u003e KeyMap a -\u003e Bool",
        "fct-source": "src/Holumbus-Data-KeyMap.html#memberElem",
        "fct-type": "function",
        "title": "memberElem"
      },
      "index": {
        "description": "Test if data object is in the KeyMap",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "memberElem",
        "normalized": "a-\u003eKeyMap a-\u003eBool",
        "package": "Holumbus-Distribution",
        "partial": "Elem",
        "signature": "a-\u003eKeyMap a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:memberKey",
      "description": {
        "fct-descr": "\u003cp\u003eTest, if a key is in the KeyMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e KeyMap a -\u003e Bool",
        "fct-source": "src/Holumbus-Data-KeyMap.html#memberKey",
        "fct-type": "function",
        "title": "memberKey"
      },
      "index": {
        "description": "Test if key is in the KeyMap",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "memberKey",
        "normalized": "String-\u003eKeyMap a-\u003eBool",
        "package": "Holumbus-Distribution",
        "partial": "Key",
        "signature": "String-\u003eKeyMap a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eTest, if the MultiMap is empty.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "KeyMap a -\u003e Bool",
        "fct-source": "src/Holumbus-Data-KeyMap.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Test if the MultiMap is empty",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "null",
        "normalized": "KeyMap a-\u003eBool",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "KeyMap a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as toList, but the keys are in ascending order.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "KeyMap a -\u003e [a]",
        "fct-source": "src/Holumbus-Data-KeyMap.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "The same as toList but the keys are in ascending order",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "toAscList",
        "normalized": "KeyMap a-\u003e[a]",
        "package": "Holumbus-Distribution",
        "partial": "Asc List",
        "signature": "KeyMap a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-KeyMap.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a KeyMap to a list of keys.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.KeyMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "KeyMap a -\u003e [a]",
        "fct-source": "src/Holumbus-Data-KeyMap.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Transforms KeyMap to list of keys",
        "hierarchy": "Holumbus Data KeyMap",
        "module": "Holumbus.Data.KeyMap",
        "name": "toList",
        "normalized": "KeyMap a-\u003e[a]",
        "package": "Holumbus-Distribution",
        "partial": "List",
        "signature": "KeyMap a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module provides a MultiMap, that means a Map, which can hold\n  multiple values for one key, but every distinct value is only stores once.\n  So adding the same key-value-pair twice will only create one new entry in\n  the map.\n\u003c/p\u003e\u003cp\u003eThis Map is helpfull to examine how many different key-values-pairs you\n  have in your application.\n\u003c/p\u003e\u003cp\u003eMost of the functions are borrowed from Data.Map \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Data-MultiMap.html",
        "fct-type": "module",
        "title": "MultiMap"
      },
      "index": {
        "description": "Version This module provides MultiMap that means Map which can hold multiple values for one key but every distinct value is only stores once So adding the same key-value-pair twice will only create one new entry in the map This Map is helpfull to examine how many different key-values-pairs you have in your application Most of the functions are borrowed from Data.Map",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "MultiMap",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Multi Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#t:MultiMap",
      "description": {
        "fct-descr": "\u003cp\u003eA MultiMap, it can hold more (different!!!) Elements for one key.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Data-MultiMap.html#MultiMap",
        "fct-type": "data",
        "title": "MultiMap"
      },
      "index": {
        "description": "MultiMap it can hold more different Elements for one key",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "MultiMap",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Multi Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes an Element from the Map, if the data in Nothing, the whole key is\n   deleted.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "k -\u003e Maybe a -\u003e MultiMap k a -\u003e MultiMap k a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Deletes an Element from the Map if the data in Nothing the whole key is deleted",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "delete",
        "normalized": "a-\u003eMaybe b-\u003eMultiMap a b-\u003eMultiMap a b",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "k-\u003eMaybe a-\u003eMultiMap k a-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:deleteAllElems",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes all Elements (*,a) (slow!!!).\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "a -\u003e MultiMap k a -\u003e MultiMap k a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#deleteAllElems",
        "fct-type": "function",
        "title": "deleteAllElems"
      },
      "index": {
        "description": "Deletes all Elements slow",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "deleteAllElems",
        "normalized": "a-\u003eMultiMap b a-\u003eMultiMap b a",
        "package": "Holumbus-Distribution",
        "partial": "All Elems",
        "signature": "a-\u003eMultiMap k a-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:deleteElem",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a single Element from the map.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "k -\u003e a -\u003e MultiMap k a -\u003e MultiMap k a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#deleteElem",
        "fct-type": "function",
        "title": "deleteElem"
      },
      "index": {
        "description": "Deletes single Element from the map",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "deleteElem",
        "normalized": "a-\u003eb-\u003eMultiMap a b-\u003eMultiMap a b",
        "package": "Holumbus-Distribution",
        "partial": "Elem",
        "signature": "k-\u003ea-\u003eMultiMap k a-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:deleteKey",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a whole key from the map.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "k -\u003e MultiMap k a -\u003e MultiMap k a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#deleteKey",
        "fct-type": "function",
        "title": "deleteKey"
      },
      "index": {
        "description": "Deletes whole key from the map",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "deleteKey",
        "normalized": "a-\u003eMultiMap a b-\u003eMultiMap a b",
        "package": "Holumbus-Distribution",
        "partial": "Key",
        "signature": "k-\u003eMultiMap k a-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003eGet all different values in the map without regarding their keys.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "MultiMap k a -\u003e Set a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Get all different values in the map without regarding their keys",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "elems",
        "normalized": "MultiMap a b-\u003eSet b",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "MultiMap k a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty MultiMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "MultiMap k a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty MultiMap",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "empty",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:filterElements",
      "description": {
        "fct-descr": "\u003cp\u003eLike lookup keys, but an empty input list will give all elements back,\n   not the empty set.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[k] -\u003e MultiMap k a -\u003e Set a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#filterElements",
        "fct-type": "function",
        "title": "filterElements"
      },
      "index": {
        "description": "Like lookup keys but an empty input list will give all elements back not the empty set",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "filterElements",
        "normalized": "[a]-\u003eMultiMap a b-\u003eSet b",
        "package": "Holumbus-Distribution",
        "partial": "Elements",
        "signature": "[k]-\u003eMultiMap k a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a MultiMap from a list of pairs (key,set value).\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[(k, Set a)] -\u003e MultiMap k a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creates MultiMap from list of pairs key set value",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "fromList",
        "normalized": "[(a,Set b)]-\u003eMultiMap a b",
        "package": "Holumbus-Distribution",
        "partial": "List",
        "signature": "[(k,Set a)]-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:fromTupleList",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a MultiMap from a list of tuples.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[(k, a)] -\u003e MultiMap k a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#fromTupleList",
        "fct-type": "function",
        "title": "fromTupleList"
      },
      "index": {
        "description": "Creates MultiMap from list of tuples",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "fromTupleList",
        "normalized": "[(a,b)]-\u003eMultiMap a b",
        "package": "Holumbus-Distribution",
        "partial": "Tuple List",
        "signature": "[(k,a)]-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts an element in the MultiMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "k -\u003e a -\u003e MultiMap k a -\u003e MultiMap k a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Inserts an element in the MultiMap",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eMultiMap a b-\u003eMultiMap a b",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "k-\u003ea-\u003eMultiMap k a-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:insertKeys",
      "description": {
        "fct-descr": "\u003cp\u003eInserts multiple keys with the same values.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "[k] -\u003e Set a -\u003e MultiMap k a -\u003e MultiMap k a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#insertKeys",
        "fct-type": "function",
        "title": "insertKeys"
      },
      "index": {
        "description": "Inserts multiple keys with the same values",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "insertKeys",
        "normalized": "[a]-\u003eSet b-\u003eMultiMap a b-\u003eMultiMap a b",
        "package": "Holumbus-Distribution",
        "partial": "Keys",
        "signature": "[k]-\u003eSet a-\u003eMultiMap k a-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:insertSet",
      "description": {
        "fct-descr": "\u003cp\u003eInserts multiple elements in a set to the MultiMap.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "k -\u003e Set a -\u003e MultiMap k a -\u003e MultiMap k a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#insertSet",
        "fct-type": "function",
        "title": "insertSet"
      },
      "index": {
        "description": "Inserts multiple elements in set to the MultiMap",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "insertSet",
        "normalized": "a-\u003eSet b-\u003eMultiMap a b-\u003eMultiMap a b",
        "package": "Holumbus-Distribution",
        "partial": "Set",
        "signature": "k-\u003eSet a-\u003eMultiMap k a-\u003eMultiMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003eGet all different keys from the map.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "MultiMap k a -\u003e Set k",
        "fct-source": "src/Holumbus-Data-MultiMap.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Get all different keys from the map",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "keys",
        "normalized": "MultiMap a b-\u003eSet a",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "MultiMap k a-\u003eSet k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eGets all different elements for one key or an empty set.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "k -\u003e MultiMap k a -\u003e Set a",
        "fct-source": "src/Holumbus-Data-MultiMap.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Gets all different elements for one key or an empty set",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "lookup",
        "normalized": "a-\u003eMultiMap a b-\u003eSet b",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "k-\u003eMultiMap k a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eTest, if a key is in the Map.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "k -\u003e MultiMap k a -\u003e Bool",
        "fct-source": "src/Holumbus-Data-MultiMap.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Test if key is in the Map",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "member",
        "normalized": "a-\u003eMultiMap a b-\u003eBool",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "k-\u003eMultiMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eTest, if the MultiMap is empty.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "MultiMap k a -\u003e Bool",
        "fct-source": "src/Holumbus-Data-MultiMap.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Test if the MultiMap is empty",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "null",
        "normalized": "MultiMap a b-\u003eBool",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "MultiMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as toList, but the keys are in ascending order.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "MultiMap k a -\u003e [(k, Set a)]",
        "fct-source": "src/Holumbus-Data-MultiMap.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "The same as toList but the keys are in ascending order",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "toAscList",
        "normalized": "MultiMap a b-\u003e[(a,Set b)]",
        "package": "Holumbus-Distribution",
        "partial": "Asc List",
        "signature": "MultiMap k a-\u003e[(k,Set a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Data-MultiMap.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a MultiMap to a list of pairs (key,set value).\n\u003c/p\u003e",
        "fct-module": "Holumbus.Data.MultiMap",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "MultiMap k a -\u003e [(k, Set a)]",
        "fct-source": "src/Holumbus-Data-MultiMap.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Transforms MultiMap to list of pairs key set value",
        "hierarchy": "Holumbus Data MultiMap",
        "module": "Holumbus.Data.MultiMap",
        "name": "toList",
        "normalized": "MultiMap a b-\u003e[(a,Set b)]",
        "package": "Holumbus-Distribution",
        "partial": "List",
        "signature": "MultiMap k a-\u003e[(k,Set a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DChan.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module offers a distributed channel datatype (DChan).\n\u003c/p\u003e\u003cp\u003eIt is similar to Control.Concurrent.Chan, except that you can use it\n  between multiple processes on different computers. You can access a\n  DChan (reading and writing) from your local process as well as from\n  another one.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Distribution.DChan",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Distribution-DChan.html",
        "fct-type": "module",
        "title": "DChan"
      },
      "index": {
        "description": "Version This module offers distributed channel datatype DChan It is similar to Control.Concurrent.Chan except that you can use it between multiple processes on different computers You can access DChan reading and writing from your local process as well as from another one",
        "hierarchy": "Holumbus Distribution DChan",
        "module": "Holumbus.Distribution.DChan",
        "name": "DChan",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DChan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DChan.html#t:DChan",
      "description": {
        "fct-descr": "\u003cp\u003eThe DChan datatype.\n   Notice that this datatype implements the Data.Binary typeclass.\n   That means that you can pass a DChan, so that another computer\n   can access the channel.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DChan",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DChan.html#DChan",
        "fct-type": "data",
        "title": "DChan"
      },
      "index": {
        "description": "The DChan datatype Notice that this datatype implements the Data.Binary typeclass That means that you can pass DChan so that another computer can access the channel",
        "hierarchy": "Holumbus Distribution DChan",
        "module": "Holumbus.Distribution.DChan",
        "name": "DChan",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DChan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DChan.html#v:closeDChan",
      "description": {
        "fct-descr": "\u003cp\u003eCloses a DChan object, could not be used anymore after this call.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DChan",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DChan a -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DChan.html#closeDChan",
        "fct-type": "function",
        "title": "closeDChan"
      },
      "index": {
        "description": "Closes DChan object could not be used anymore after this call",
        "hierarchy": "Holumbus Distribution DChan",
        "module": "Holumbus.Distribution.DChan",
        "name": "closeDChan",
        "normalized": "DChan a-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "DChan",
        "signature": "DChan a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DChan.html#v:isEmptyDChan",
      "description": {
        "fct-descr": "\u003cp\u003eTests, if a DChan is empty.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DChan",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DChan a -\u003e IO Bool",
        "fct-source": "src/Holumbus-Distribution-DChan.html#isEmptyDChan",
        "fct-type": "function",
        "title": "isEmptyDChan"
      },
      "index": {
        "description": "Tests if DChan is empty",
        "hierarchy": "Holumbus Distribution DChan",
        "module": "Holumbus.Distribution.DChan",
        "name": "isEmptyDChan",
        "normalized": "DChan a-\u003eIO Bool",
        "package": "Holumbus-Distribution",
        "partial": "Empty DChan",
        "signature": "DChan a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DChan.html#v:newDChan",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new DChan on the local computer. The first parameter\n   is the name of the Channel which could be used in other processes to\n   access this stream. If you leave it empty, a random Id will be created.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DChan",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e IO (DChan a)",
        "fct-source": "src/Holumbus-Distribution-DChan.html#newDChan",
        "fct-type": "function",
        "title": "newDChan"
      },
      "index": {
        "description": "Creates new DChan on the local computer The first parameter is the name of the Channel which could be used in other processes to access this stream If you leave it empty random Id will be created",
        "hierarchy": "Holumbus Distribution DChan",
        "module": "Holumbus.Distribution.DChan",
        "name": "newDChan",
        "normalized": "String-\u003eIO(DChan a)",
        "package": "Holumbus-Distribution",
        "partial": "DChan",
        "signature": "String-\u003eIO(DChan a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DChan.html#v:newRemoteDChan",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a reference to a DChan which was created in a different\n   process.\n   The first parameter is the name of the resource and the second one\n   the name of the node.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DChan",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e String -\u003e IO (DChan a)",
        "fct-source": "src/Holumbus-Distribution-DChan.html#newRemoteDChan",
        "fct-type": "function",
        "title": "newRemoteDChan"
      },
      "index": {
        "description": "Creates reference to DChan which was created in different process The first parameter is the name of the resource and the second one the name of the node",
        "hierarchy": "Holumbus Distribution DChan",
        "module": "Holumbus.Distribution.DChan",
        "name": "newRemoteDChan",
        "normalized": "String-\u003eString-\u003eIO(DChan a)",
        "package": "Holumbus-Distribution",
        "partial": "Remote DChan",
        "signature": "String-\u003eString-\u003eIO(DChan a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DChan.html#v:readDChan",
      "description": {
        "fct-descr": "\u003cp\u003eReads data from a DChan, blocks if DChan is empty.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DChan",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DChan a -\u003e IO a",
        "fct-source": "src/Holumbus-Distribution-DChan.html#readDChan",
        "fct-type": "function",
        "title": "readDChan"
      },
      "index": {
        "description": "Reads data from DChan blocks if DChan is empty",
        "hierarchy": "Holumbus Distribution DChan",
        "module": "Holumbus.Distribution.DChan",
        "name": "readDChan",
        "normalized": "DChan a-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "DChan",
        "signature": "DChan a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DChan.html#v:tryReadDChan",
      "description": {
        "fct-descr": "\u003cp\u003eTries to read data from a DChan, if the DChan is empty,\n   the function return with Nothing.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DChan",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DChan a -\u003e IO (Maybe a)",
        "fct-source": "src/Holumbus-Distribution-DChan.html#tryReadDChan",
        "fct-type": "function",
        "title": "tryReadDChan"
      },
      "index": {
        "description": "Tries to read data from DChan if the DChan is empty the function return with Nothing",
        "hierarchy": "Holumbus Distribution DChan",
        "module": "Holumbus.Distribution.DChan",
        "name": "tryReadDChan",
        "normalized": "DChan a-\u003eIO(Maybe a)",
        "package": "Holumbus-Distribution",
        "partial": "Read DChan",
        "signature": "DChan a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DChan.html#v:tryWaitReadDChan",
      "description": {
        "fct-descr": "\u003cp\u003eReads data from a DChan. If the channel is empty, it waits\n   for a given time (in microseconds) an returns immediately\n   when new data arrives, otherwise it return Nothing.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DChan",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DChan a -\u003e Int -\u003e IO (Maybe a)",
        "fct-source": "src/Holumbus-Distribution-DChan.html#tryWaitReadDChan",
        "fct-type": "function",
        "title": "tryWaitReadDChan"
      },
      "index": {
        "description": "Reads data from DChan If the channel is empty it waits for given time in microseconds an returns immediately when new data arrives otherwise it return Nothing",
        "hierarchy": "Holumbus Distribution DChan",
        "module": "Holumbus.Distribution.DChan",
        "name": "tryWaitReadDChan",
        "normalized": "DChan a-\u003eInt-\u003eIO(Maybe a)",
        "package": "Holumbus-Distribution",
        "partial": "Wait Read DChan",
        "signature": "DChan a-\u003eInt-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DChan.html#v:writeDChan",
      "description": {
        "fct-descr": "\u003cp\u003eWrites data to a DChan.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DChan",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DChan a -\u003e a -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DChan.html#writeDChan",
        "fct-type": "function",
        "title": "writeDChan"
      },
      "index": {
        "description": "Writes data to DChan",
        "hierarchy": "Holumbus Distribution DChan",
        "module": "Holumbus.Distribution.DChan",
        "name": "writeDChan",
        "normalized": "DChan a-\u003ea-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "DChan",
        "signature": "DChan a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DFunction.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module offers distributed functions.\n\u003c/p\u003e\u003cp\u003eThis idea behind this is to implement RPC based on DNodes. You specify\n  a function which could be called from other programs and register this\n  as a resource in your local DNode. Then the foreign DNodes can create\n  a link to this function an execute it. The function parameters will be\n  serialized and send to the local DNode. There the parameters are deserialized\n  and the function will be called. After this the return-value will be send\n  back to the calling node. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Distribution.DFunction",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Distribution-DFunction.html",
        "fct-type": "module",
        "title": "DFunction"
      },
      "index": {
        "description": "Version This module offers distributed functions This idea behind this is to implement RPC based on DNodes You specify function which could be called from other programs and register this as resource in your local DNode Then the foreign DNodes can create link to this function an execute it The function parameters will be serialized and send to the local DNode There the parameters are deserialized and the function will be called After this the return-value will be send back to the calling node",
        "hierarchy": "Holumbus Distribution DFunction",
        "module": "Holumbus.Distribution.DFunction",
        "name": "DFunction",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DFunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DFunction.html#t:BinaryFunction",
      "description": {
        "fct-descr": "\u003cp\u003eBinary function typeclass. You can only use functions whose parameters\n   and return value are serializable. The idea of this typeclass comes from\n   the haxr library by Bjorn Bringert (http:\u003cem/\u003ewww.haskell.org\u003cem\u003ehaskellwiki\u003c/em\u003eHaXR)\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DFunction",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "class",
        "fct-source": "src/Holumbus-Distribution-DFunction.html#BinaryFunction",
        "fct-type": "class",
        "title": "BinaryFunction"
      },
      "index": {
        "description": "Binary function typeclass You can only use functions whose parameters and return value are serializable The idea of this typeclass comes from the haxr library by Bjorn Bringert http www.haskell.org haskellwiki HaXR",
        "hierarchy": "Holumbus Distribution DFunction",
        "module": "Holumbus.Distribution.DFunction",
        "name": "BinaryFunction",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Binary Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DFunction.html#t:DFunction",
      "description": {
        "fct-descr": "\u003cp\u003eThe DFunction datatype. This is more like a reference to\n   a function located on a different node. You can call this\n   function via the accessDFunction function.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DFunction",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DFunction.html#DFunction",
        "fct-type": "data",
        "title": "DFunction"
      },
      "index": {
        "description": "The DFunction datatype This is more like reference to function located on different node You can call this function via the accessDFunction function",
        "hierarchy": "Holumbus Distribution DFunction",
        "module": "Holumbus.Distribution.DFunction",
        "name": "DFunction",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DFunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DFunction.html#v:accessDFunction",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a DFunction object to a normal function which could be called and passed around.\n   Because you have network tranfer everytime you call the function, this might throw a\n   DistributedException when the foreign node becomes unreachable.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DFunction",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DFunction a -\u003e a",
        "fct-source": "src/Holumbus-Distribution-DFunction.html#accessDFunction",
        "fct-type": "function",
        "title": "accessDFunction"
      },
      "index": {
        "description": "Transforms DFunction object to normal function which could be called and passed around Because you have network tranfer everytime you call the function this might throw DistributedException when the foreign node becomes unreachable",
        "hierarchy": "Holumbus Distribution DFunction",
        "module": "Holumbus.Distribution.DFunction",
        "name": "accessDFunction",
        "normalized": "DFunction a-\u003ea",
        "package": "Holumbus-Distribution",
        "partial": "DFunction",
        "signature": "DFunction a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DFunction.html#v:closeDFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCloses a DFunction reference.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DFunction",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DFunction a -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DFunction.html#closeDFunction",
        "fct-type": "function",
        "title": "closeDFunction"
      },
      "index": {
        "description": "Closes DFunction reference",
        "hierarchy": "Holumbus Distribution DFunction",
        "module": "Holumbus.Distribution.DFunction",
        "name": "closeDFunction",
        "normalized": "DFunction a-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "DFunction",
        "signature": "DFunction a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DFunction.html#v:newDFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new distributed function. Only functions which are registered\n   at the local node can be called from the outside. The string parameter\n   specifies the name of the function which could the used by other nodes\n   to call it. If you leave it empty, a random name will be generated.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DFunction",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e a -\u003e IO (DFunction a)",
        "fct-source": "src/Holumbus-Distribution-DFunction.html#newDFunction",
        "fct-type": "function",
        "title": "newDFunction"
      },
      "index": {
        "description": "Creates new distributed function Only functions which are registered at the local node can be called from the outside The string parameter specifies the name of the function which could the used by other nodes to call it If you leave it empty random name will be generated",
        "hierarchy": "Holumbus Distribution DFunction",
        "module": "Holumbus.Distribution.DFunction",
        "name": "newDFunction",
        "normalized": "String-\u003ea-\u003eIO(DFunction a)",
        "package": "Holumbus-Distribution",
        "partial": "DFunction",
        "signature": "String-\u003ea-\u003eIO(DFunction a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DFunction.html#v:newRemoteDFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCreated a reference to a function on a remote node. The first parameter\n   is the name of the function, the second parameter is the name of the node.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DFunction",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e String -\u003e IO (DFunction a)",
        "fct-source": "src/Holumbus-Distribution-DFunction.html#newRemoteDFunction",
        "fct-type": "function",
        "title": "newRemoteDFunction"
      },
      "index": {
        "description": "Created reference to function on remote node The first parameter is the name of the function the second parameter is the name of the node",
        "hierarchy": "Holumbus Distribution DFunction",
        "module": "Holumbus.Distribution.DFunction",
        "name": "newRemoteDFunction",
        "normalized": "String-\u003eString-\u003eIO(DFunction a)",
        "package": "Holumbus-Distribution",
        "partial": "Remote DFunction",
        "signature": "String-\u003eString-\u003eIO(DFunction a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DMVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module offers the distributed MVar datatype.\n\u003c/p\u003e\u003cp\u003eThe datatype behaves just like a normal MVar, but the content of the\n  variable may be stored on a different DNode. When accessing the DMVar,\n  the content will be fetched from the external node and written back.\n\u003c/p\u003e\u003cp\u003eIt is guaranteed, that only one node at a time can take the content\n  of the DMVar. Just like normal DMVars, you can produce deadlocks.\n\u003c/p\u003e\u003cp\u003eWhen a node dies which holds the content of a DMVar, the node which\n  created the variable will reset its value to the last known value.\n\u003c/p\u003e\u003cp\u003eIf the owner dies, the other nodes cannot access the content of the\n  DMVar any more.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Distribution.DMVar",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Distribution-DMVar.html",
        "fct-type": "module",
        "title": "DMVar"
      },
      "index": {
        "description": "Version This module offers the distributed MVar datatype The datatype behaves just like normal MVar but the content of the variable may be stored on different DNode When accessing the DMVar the content will be fetched from the external node and written back It is guaranteed that only one node at time can take the content of the DMVar Just like normal DMVars you can produce deadlocks When node dies which holds the content of DMVar the node which created the variable will reset its value to the last known value If the owner dies the other nodes cannot access the content of the DMVar any more",
        "hierarchy": "Holumbus Distribution DMVar",
        "module": "Holumbus.Distribution.DMVar",
        "name": "DMVar",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DMVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DMVar.html#t:DMVar",
      "description": {
        "fct-descr": "\u003cp\u003eThe DMVar datatype.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DMVar",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DMVar.html#DMVar",
        "fct-type": "data",
        "title": "DMVar"
      },
      "index": {
        "description": "The DMVar datatype",
        "hierarchy": "Holumbus Distribution DMVar",
        "module": "Holumbus.Distribution.DMVar",
        "name": "DMVar",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DMVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DMVar.html#v:closeDMVar",
      "description": {
        "fct-descr": "\u003cp\u003eCloses a DMVar\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DMVar",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DMVar a -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DMVar.html#closeDMVar",
        "fct-type": "function",
        "title": "closeDMVar"
      },
      "index": {
        "description": "Closes DMVar",
        "hierarchy": "Holumbus Distribution DMVar",
        "module": "Holumbus.Distribution.DMVar",
        "name": "closeDMVar",
        "normalized": "DMVar a-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "DMVar",
        "signature": "DMVar a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DMVar.html#v:newDMVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new local DMVar with a start value.\n   The string parameter specifies the name of the variable.\n   If you leave it empty, a random value will be generated.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DMVar",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e a -\u003e IO (DMVar a)",
        "fct-source": "src/Holumbus-Distribution-DMVar.html#newDMVar",
        "fct-type": "function",
        "title": "newDMVar"
      },
      "index": {
        "description": "Creates new local DMVar with start value The string parameter specifies the name of the variable If you leave it empty random value will be generated",
        "hierarchy": "Holumbus Distribution DMVar",
        "module": "Holumbus.Distribution.DMVar",
        "name": "newDMVar",
        "normalized": "String-\u003ea-\u003eIO(DMVar a)",
        "package": "Holumbus-Distribution",
        "partial": "DMVar",
        "signature": "String-\u003ea-\u003eIO(DMVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DMVar.html#v:newEmptyDMVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new empty local DMVar. The string parameter specifies the name of\n   the variable. If you leave it empty, a random value will be generated.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DMVar",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e IO (DMVar a)",
        "fct-source": "src/Holumbus-Distribution-DMVar.html#newEmptyDMVar",
        "fct-type": "function",
        "title": "newEmptyDMVar"
      },
      "index": {
        "description": "Creates new empty local DMVar The string parameter specifies the name of the variable If you leave it empty random value will be generated",
        "hierarchy": "Holumbus Distribution DMVar",
        "module": "Holumbus.Distribution.DMVar",
        "name": "newEmptyDMVar",
        "normalized": "String-\u003eIO(DMVar a)",
        "package": "Holumbus-Distribution",
        "partial": "Empty DMVar",
        "signature": "String-\u003eIO(DMVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DMVar.html#v:newRemoteDMVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a reference to an external DMVar.\n   The first parameter is the name of the resource and the second one\n   the name of the node.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DMVar",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e String -\u003e IO (DMVar a)",
        "fct-source": "src/Holumbus-Distribution-DMVar.html#newRemoteDMVar",
        "fct-type": "function",
        "title": "newRemoteDMVar"
      },
      "index": {
        "description": "Creates reference to an external DMVar The first parameter is the name of the resource and the second one the name of the node",
        "hierarchy": "Holumbus Distribution DMVar",
        "module": "Holumbus.Distribution.DMVar",
        "name": "newRemoteDMVar",
        "normalized": "String-\u003eString-\u003eIO(DMVar a)",
        "package": "Holumbus-Distribution",
        "partial": "Remote DMVar",
        "signature": "String-\u003eString-\u003eIO(DMVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DMVar.html#v:putDMVar",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a value to the DMvar. Blocks if the Variable is not empty.\n   This may throw an exception if the owner of the variable is unreachable.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DMVar",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DMVar a -\u003e a -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DMVar.html#putDMVar",
        "fct-type": "function",
        "title": "putDMVar"
      },
      "index": {
        "description": "Writes value to the DMvar Blocks if the Variable is not empty This may throw an exception if the owner of the variable is unreachable",
        "hierarchy": "Holumbus Distribution DMVar",
        "module": "Holumbus.Distribution.DMVar",
        "name": "putDMVar",
        "normalized": "DMVar a-\u003ea-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "DMVar",
        "signature": "DMVar a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DMVar.html#v:readDMVar",
      "description": {
        "fct-descr": "\u003cp\u003eReads the content of a DMVar. Blocks if the Variable is empty.\n   This may throw an exception if the owner of the variable is unreachable.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DMVar",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DMVar a -\u003e IO a",
        "fct-source": "src/Holumbus-Distribution-DMVar.html#readDMVar",
        "fct-type": "function",
        "title": "readDMVar"
      },
      "index": {
        "description": "Reads the content of DMVar Blocks if the Variable is empty This may throw an exception if the owner of the variable is unreachable",
        "hierarchy": "Holumbus Distribution DMVar",
        "module": "Holumbus.Distribution.DMVar",
        "name": "readDMVar",
        "normalized": "DMVar a-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "DMVar",
        "signature": "DMVar a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DMVar.html#v:takeDMVar",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the content of a DMVar. Blocks if the Variable is empty.\n   This may throw an exception if the owner of the variable is unreachable.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DMVar",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DMVar a -\u003e IO a",
        "fct-source": "src/Holumbus-Distribution-DMVar.html#takeDMVar",
        "fct-type": "function",
        "title": "takeDMVar"
      },
      "index": {
        "description": "Takes the content of DMVar Blocks if the Variable is empty This may throw an exception if the owner of the variable is unreachable",
        "hierarchy": "Holumbus Distribution DMVar",
        "module": "Holumbus.Distribution.DMVar",
        "name": "takeDMVar",
        "normalized": "DMVar a-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "DMVar",
        "signature": "DMVar a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThe main module for the implementation of the distributed data structures.\n  It contains the DNode-datatype which is needed to register new local and\n  remote resources. The main datatypes (Ids, Handlers, etc.) are also defined\n  here.\n\u003c/p\u003e\u003cp\u003eThe module should only be used from within this library. User applications\n  should refer to Holumbus.Distribution.DNode.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Version The main module for the implementation of the distributed data structures It contains the DNode-datatype which is needed to register new local and remote resources The main datatypes Ids Handlers etc are also defined here The module should only be used from within this library User applications should refer to Holumbus.Distribution.DNode",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "Base",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#t:DHandlerId",
      "description": {
        "fct-descr": "\u003cp\u003eThe Id of a handler, is needed to stop the handler from further execution.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DHandlerId",
        "fct-type": "data",
        "title": "DHandlerId"
      },
      "index": {
        "description": "The Id of handler is needed to stop the handler from further execution",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DHandlerId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DHandler Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#t:DNodeAddress",
      "description": {
        "fct-descr": "\u003cp\u003eThe DNode address.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeAddress",
        "fct-type": "data",
        "title": "DNodeAddress"
      },
      "index": {
        "description": "The DNode address",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DNodeAddress",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DNode Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#t:DNodeConfig",
      "description": {
        "fct-descr": "\u003cp\u003eThe configuration of a DNode. You need it to create a DNode and you can \n   use this data type it to alter its properties. This type is public to\n   allow users to create their own configuration.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "data",
        "title": "DNodeConfig"
      },
      "index": {
        "description": "The configuration of DNode You need it to create DNode and you can use this data type it to alter its properties This type is public to allow users to create their own configuration",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DNodeConfig",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DNode Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#t:DNodeId",
      "description": {
        "fct-descr": "\u003cp\u003eThe DNode identifier.\n   Every DNode has an Id, this could be named or randomly created. The id \n   could not be used to address a DNode directly over a Network connection \n   because the physical references are missing. The DNodeId is meant to \n   create a declarative reference which could be used to lookup purposes. \n   Think of the DNodeId as a domain name, without a DNS-Server to resolve \n   the physical address, it is worthless to establish a communication. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeId",
        "fct-type": "data",
        "title": "DNodeId"
      },
      "index": {
        "description": "The DNode identifier Every DNode has an Id this could be named or randomly created The id could not be used to address DNode directly over Network connection because the physical references are missing The DNodeId is meant to create declarative reference which could be used to lookup purposes Think of the DNodeId as domain name without DNS-Server to resolve the physical address it is worthless to establish communication",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DNodeId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DNode Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#t:DResourceAddress",
      "description": {
        "fct-descr": "\u003cp\u003eThe DResource address\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DResourceAddress",
        "fct-type": "data",
        "title": "DResourceAddress"
      },
      "index": {
        "description": "The DResource address",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DResourceAddress",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DResource Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#t:DResourceDispatcher",
      "description": {
        "fct-descr": "\u003cp\u003eThe DResource callback functions\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DResourceDispatcher",
        "fct-type": "type",
        "title": "DResourceDispatcher"
      },
      "index": {
        "description": "The DResource callback functions",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DResourceDispatcher",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DResource Dispatcher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#t:DResourceEntry",
      "description": {
        "fct-descr": "\u003cp\u003eThe container for the DResources\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DResourceEntry",
        "fct-type": "data",
        "title": "DResourceEntry"
      },
      "index": {
        "description": "The container for the DResources",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DResourceEntry",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DResource Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#t:DResourceId",
      "description": {
        "fct-descr": "\u003cp\u003eThe DResource Id.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DResourceId",
        "fct-type": "data",
        "title": "DResourceId"
      },
      "index": {
        "description": "The DResource Id",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DResourceId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DResource Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#t:DResourceType",
      "description": {
        "fct-descr": "\u003cp\u003eThe ressouce type, it is used to separate between different kinds of\n   resources. The resource type is generated by the programmer of a\n   resource\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DResourceType",
        "fct-type": "data",
        "title": "DResourceType"
      },
      "index": {
        "description": "The ressouce type it is used to separate between different kinds of resources The resource type is generated by the programmer of resource",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DResourceType",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DResource Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#t:DistributedException",
      "description": {
        "fct-descr": "\u003cp\u003eThe exception type, used by distributed communication\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DistributedException",
        "fct-type": "data",
        "title": "DistributedException"
      },
      "index": {
        "description": "The exception type used by distributed communication",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DistributedException",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Distributed Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:DNodeConfig",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DNodeConfig",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "function",
        "title": "DNodeConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DNodeConfig",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DNode Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:DResourceEntry",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DResourceEntry",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DResourceEntry",
        "fct-type": "function",
        "title": "DResourceEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DResourceEntry",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DResource Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:DistributedException",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DistributedException",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DistributedException",
        "fct-type": "function",
        "title": "DistributedException"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "DistributedException",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Distributed Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:addForeignDNode",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a foreign DNode to the list of known DNodes.\n   Only DNodes in this list could be reached by the local node.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DNodeAddress -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#addForeignDNode",
        "fct-type": "function",
        "title": "addForeignDNode"
      },
      "index": {
        "description": "Add foreign DNode to the list of known DNodes Only DNodes in this list could be reached by the local node",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "addForeignDNode",
        "normalized": "DNodeAddress-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Foreign DNode",
        "signature": "DNodeAddress-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:addForeignDNodeHandler",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a handler function which periodically checks the existences (or non-existence)\n   of other DNodes. The first parameter indicates the type of the handler.\n   If you want to install a handler which is fired when a Node becomes reachable (positive trigger),\n   it needs to be true. If you want to monitor the event when a specific node disappears,\n   pass false.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Bool -\u003e DNodeId -\u003e DHandlerFunction -\u003e IO (Maybe DHandlerId)",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#addForeignDNodeHandler",
        "fct-type": "function",
        "title": "addForeignDNodeHandler"
      },
      "index": {
        "description": "Adds handler function which periodically checks the existences or non-existence of other DNodes The first parameter indicates the type of the handler If you want to install handler which is fired when Node becomes reachable positive trigger it needs to be true If you want to monitor the event when specific node disappears pass false",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "addForeignDNodeHandler",
        "normalized": "Bool-\u003eDNodeId-\u003eDHandlerFunction-\u003eIO(Maybe DHandlerId)",
        "package": "Holumbus-Distribution",
        "partial": "Foreign DNode Handler",
        "signature": "Bool-\u003eDNodeId-\u003eDHandlerFunction-\u003eIO(Maybe DHandlerId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:addForeignDResourceHandler",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a handler function which periodically checks the existences (or non-existence)\n   of resources on other DNodes. The first parameter indicates the type of the handler.\n   If you want to install a handler which is fired when a Node becomes reachable (positive trigger),\n   it needs to be true. If you want to monitor the event when a specific node disappears,\n   pass false.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Bool -\u003e DResourceAddress -\u003e DHandlerFunction -\u003e IO (Maybe DHandlerId)",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#addForeignDResourceHandler",
        "fct-type": "function",
        "title": "addForeignDResourceHandler"
      },
      "index": {
        "description": "Adds handler function which periodically checks the existences or non-existence of resources on other DNodes The first parameter indicates the type of the handler If you want to install handler which is fired when Node becomes reachable positive trigger it needs to be true If you want to monitor the event when specific node disappears pass false",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "addForeignDResourceHandler",
        "normalized": "Bool-\u003eDResourceAddress-\u003eDHandlerFunction-\u003eIO(Maybe DHandlerId)",
        "package": "Holumbus-Distribution",
        "partial": "Foreign DResource Handler",
        "signature": "Bool-\u003eDResourceAddress-\u003eDHandlerFunction-\u003eIO(Maybe DHandlerId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:addLocalResource",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DResourceAddress -\u003e DResourceEntry -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#addLocalResource",
        "fct-type": "function",
        "title": "addLocalResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "addLocalResource",
        "normalized": "DResourceAddress-\u003eDResourceEntry-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Local Resource",
        "signature": "DResourceAddress-\u003eDResourceEntry-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:checkForeignDNode",
      "description": {
        "fct-descr": "\u003cp\u003eManually Checks, if another DNode is reachable. Returns true if this is the case,\n   otherwise false. Always returns, does not throw an exception caused by network failures.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DNodeId -\u003e IO Bool",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#checkForeignDNode",
        "fct-type": "function",
        "title": "checkForeignDNode"
      },
      "index": {
        "description": "Manually Checks if another DNode is reachable Returns true if this is the case otherwise false Always returns does not throw an exception caused by network failures",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "checkForeignDNode",
        "normalized": "DNodeId-\u003eIO Bool",
        "package": "Holumbus-Distribution",
        "partial": "Foreign DNode",
        "signature": "DNodeId-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:defaultDNodeConfig",
      "description": {
        "fct-descr": "\u003cp\u003eA good default configuration. To create an unnamed node, just leave the\n   string empty. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e DNodeConfig",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#defaultDNodeConfig",
        "fct-type": "function",
        "title": "defaultDNodeConfig"
      },
      "index": {
        "description": "good default configuration To create an unnamed node just leave the string empty",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "defaultDNodeConfig",
        "normalized": "String-\u003eDNodeConfig",
        "package": "Holumbus-Distribution",
        "partial": "DNode Config",
        "signature": "String-\u003eDNodeConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:deinitDNode",
      "description": {
        "fct-descr": "\u003cp\u003edeinitializes a DNode\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#deinitDNode",
        "fct-type": "function",
        "title": "deinitDNode"
      },
      "index": {
        "description": "deinitializes DNode",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "deinitDNode",
        "normalized": "IO()",
        "package": "Holumbus-Distribution",
        "partial": "DNode",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:delForeignDNode",
      "description": {
        "fct-descr": "\u003cp\u003eremoves a foreign DNode entry. You should clean up the foreign DNode\n   entries.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DNodeId -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#delForeignDNode",
        "fct-type": "function",
        "title": "delForeignDNode"
      },
      "index": {
        "description": "removes foreign DNode entry You should clean up the foreign DNode entries",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "delForeignDNode",
        "normalized": "DNodeId-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Foreign DNode",
        "signature": "DNodeId-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:delForeignHandler",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a Handler from the system, will not be called anymore.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DHandlerId -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#delForeignHandler",
        "fct-type": "function",
        "title": "delForeignHandler"
      },
      "index": {
        "description": "Deletes Handler from the system will not be called anymore",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "delForeignHandler",
        "normalized": "DHandlerId-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Foreign Handler",
        "signature": "DHandlerId-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:delForeignResource",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DResourceAddress -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#delForeignResource",
        "fct-type": "function",
        "title": "delForeignResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "delForeignResource",
        "normalized": "DResourceAddress-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Foreign Resource",
        "signature": "DResourceAddress-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:delLocalResource",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DResourceAddress -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#delLocalResource",
        "fct-type": "function",
        "title": "delLocalResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "delLocalResource",
        "normalized": "DResourceAddress-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Local Resource",
        "signature": "DResourceAddress-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:distEx_fct",
      "description": {
        "fct-descr": "\u003cp\u003ethe function in which the exception was thrown\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DistributedException",
        "fct-type": "function",
        "title": "distEx_fct"
      },
      "index": {
        "description": "the function in which the exception was thrown",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "distEx_fct",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Ex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:distEx_mod",
      "description": {
        "fct-descr": "\u003cp\u003ethe module in which the exception was thrown\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DistributedException",
        "fct-type": "function",
        "title": "distEx_mod"
      },
      "index": {
        "description": "the module in which the exception was thrown",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "distEx_mod",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Ex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:distEx_msg",
      "description": {
        "fct-descr": "\u003cp\u003ethe message of the exception\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DistributedException",
        "fct-type": "function",
        "title": "distEx_msg"
      },
      "index": {
        "description": "the message of the exception",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "distEx_msg",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Ex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:dnc_AccessDelay",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "function",
        "title": "dnc_AccessDelay"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "dnc_AccessDelay",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Access Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:dnc_MaxPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "function",
        "title": "dnc_MaxPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "dnc_MaxPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Max Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:dnc_MinPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "function",
        "title": "dnc_MinPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "dnc_MinPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Min Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:dnc_Name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "function",
        "title": "dnc_Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "dnc_Name",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:dnc_PingDelay",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "function",
        "title": "dnc_PingDelay"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "dnc_PingDelay",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Ping Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:dre_Dispatcher",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DResourceDispatcher",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DResourceEntry",
        "fct-type": "function",
        "title": "dre_Dispatcher"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "dre_Dispatcher",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Dispatcher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:genLocalResourceAddress",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DResourceType -\u003e String -\u003e IO DResourceAddress",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#genLocalResourceAddress",
        "fct-type": "function",
        "title": "genLocalResourceAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "genLocalResourceAddress",
        "normalized": "DResourceType-\u003eString-\u003eIO DResourceAddress",
        "package": "Holumbus-Distribution",
        "partial": "Local Resource Address",
        "signature": "DResourceType-\u003eString-\u003eIO DResourceAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:getByteStringMessage",
      "description": {
        "fct-descr": "\u003cp\u003eReads data from a stream. We define, that the first line of the message\n   is the message header which tells us how much bytes we have to read.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Handle -\u003e IO ByteString",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html#getByteStringMessage",
        "fct-type": "function",
        "title": "getByteStringMessage"
      },
      "index": {
        "description": "Reads data from stream We define that the first line of the message is the message header which tells us how much bytes we have to read",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "getByteStringMessage",
        "normalized": "Handle-\u003eIO ByteString",
        "package": "Holumbus-Distribution",
        "partial": "Byte String Message",
        "signature": "Handle-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:getDNodeData",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "IO DNodeData",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#getDNodeData",
        "fct-type": "function",
        "title": "getDNodeData"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "getDNodeData",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DNode Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:initDNode",
      "description": {
        "fct-descr": "\u003cp\u003eInitializes the DNode of the program. You have to call this function\n   once BEFORE you can use other functions. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DNodeConfig -\u003e IO DNodeId",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#initDNode",
        "fct-type": "function",
        "title": "initDNode"
      },
      "index": {
        "description": "Initializes the DNode of the program You have to call this function once BEFORE you can use other functions",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "initDNode",
        "normalized": "DNodeConfig-\u003eIO DNodeId",
        "package": "Holumbus-Distribution",
        "partial": "DNode",
        "signature": "DNodeConfig-\u003eIO DNodeId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:mkDNodeAddress",
      "description": {
        "fct-descr": "\u003cp\u003euse this to make a new DNodeAddress\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e HostName -\u003e Int -\u003e DNodeAddress",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#mkDNodeAddress",
        "fct-type": "function",
        "title": "mkDNodeAddress"
      },
      "index": {
        "description": "use this to make new DNodeAddress",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "mkDNodeAddress",
        "normalized": "String-\u003eHostName-\u003eInt-\u003eDNodeAddress",
        "package": "Holumbus-Distribution",
        "partial": "DNode Address",
        "signature": "String-\u003eHostName-\u003eInt-\u003eDNodeAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:mkDNodeId",
      "description": {
        "fct-descr": "\u003cp\u003eUse this to make a new DNodeId from a String\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e DNodeId",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#mkDNodeId",
        "fct-type": "function",
        "title": "mkDNodeId"
      },
      "index": {
        "description": "Use this to make new DNodeId from String",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "mkDNodeId",
        "normalized": "String-\u003eDNodeId",
        "package": "Holumbus-Distribution",
        "partial": "DNode Id",
        "signature": "String-\u003eDNodeId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:mkDResourceAddress",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DResourceType -\u003e String -\u003e String -\u003e DResourceAddress",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#mkDResourceAddress",
        "fct-type": "function",
        "title": "mkDResourceAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "mkDResourceAddress",
        "normalized": "DResourceType-\u003eString-\u003eString-\u003eDResourceAddress",
        "package": "Holumbus-Distribution",
        "partial": "DResource Address",
        "signature": "DResourceType-\u003eString-\u003eString-\u003eDResourceAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:mkDResourceType",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e DResourceType",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#mkDResourceType",
        "fct-type": "function",
        "title": "mkDResourceType"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "mkDResourceType",
        "normalized": "String-\u003eDResourceType",
        "package": "Holumbus-Distribution",
        "partial": "DResource Type",
        "signature": "String-\u003eDResourceType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:putByteStringMessage",
      "description": {
        "fct-descr": "\u003cp\u003ePuts a bytestring to a handle. But to make the reading easier, we write\n   the length of the data as a message-header to the handle, too. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ByteString -\u003e Handle -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html#putByteStringMessage",
        "fct-type": "function",
        "title": "putByteStringMessage"
      },
      "index": {
        "description": "Puts bytestring to handle But to make the reading easier we write the length of the data as message-header to the handle too",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "putByteStringMessage",
        "normalized": "ByteString-\u003eHandle-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Byte String Message",
        "signature": "ByteString-\u003eHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:safeAccessForeignResource",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DResourceAddress -\u003e (Handle -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#safeAccessForeignResource",
        "fct-type": "function",
        "title": "safeAccessForeignResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "safeAccessForeignResource",
        "normalized": "DResourceAddress-\u003e(Handle-\u003eIO a)-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "Access Foreign Resource",
        "signature": "DResourceAddress-\u003e(Handle-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Base.html#v:unsafeAccessForeignResource",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Base",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DResourceAddress -\u003e (Handle -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#unsafeAccessForeignResource",
        "fct-type": "function",
        "title": "unsafeAccessForeignResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Base",
        "module": "Holumbus.Distribution.DNode.Base",
        "name": "unsafeAccessForeignResource",
        "normalized": "DResourceAddress-\u003e(Handle-\u003eIO a)-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "Access Foreign Resource",
        "signature": "DResourceAddress-\u003e(Handle-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Network.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThe Server-Module for the Holumbus framework.\n\u003c/p\u003e\u003cp\u003eIt contains the lowlevel functions, like the socket handling (opening, \n  reading, writing, ...).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Network",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html",
        "fct-type": "module",
        "title": "Network"
      },
      "index": {
        "description": "Version The Server-Module for the Holumbus framework It contains the lowlevel functions like the socket handling opening reading writing",
        "hierarchy": "Holumbus Distribution DNode Network",
        "module": "Holumbus.Distribution.DNode.Network",
        "name": "Network",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Network.html#t:HandlerFunction",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Network",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html#HandlerFunction",
        "fct-type": "type",
        "title": "HandlerFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Network",
        "module": "Holumbus.Distribution.DNode.Network",
        "name": "HandlerFunction",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Handler Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Network.html#t:SocketServer",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Network",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html#SocketServer",
        "fct-type": "data",
        "title": "SocketServer"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Network",
        "module": "Holumbus.Distribution.DNode.Network",
        "name": "SocketServer",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Socket Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Network.html#v:getByteStringMessage",
      "description": {
        "fct-descr": "\u003cp\u003eReads data from a stream. We define, that the first line of the message\n   is the message header which tells us how much bytes we have to read.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Network",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Handle -\u003e IO ByteString",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html#getByteStringMessage",
        "fct-type": "function",
        "title": "getByteStringMessage"
      },
      "index": {
        "description": "Reads data from stream We define that the first line of the message is the message header which tells us how much bytes we have to read",
        "hierarchy": "Holumbus Distribution DNode Network",
        "module": "Holumbus.Distribution.DNode.Network",
        "name": "getByteStringMessage",
        "normalized": "Handle-\u003eIO ByteString",
        "package": "Holumbus-Distribution",
        "partial": "Byte String Message",
        "signature": "Handle-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Network.html#v:getSocketServerName",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Network",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SocketServer -\u003e HostName",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html#getSocketServerName",
        "fct-type": "function",
        "title": "getSocketServerName"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Network",
        "module": "Holumbus.Distribution.DNode.Network",
        "name": "getSocketServerName",
        "normalized": "SocketServer-\u003eHostName",
        "package": "Holumbus-Distribution",
        "partial": "Socket Server Name",
        "signature": "SocketServer-\u003eHostName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Network.html#v:getSocketServerPort",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Network",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SocketServer -\u003e PortNumber",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html#getSocketServerPort",
        "fct-type": "function",
        "title": "getSocketServerPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Network",
        "module": "Holumbus.Distribution.DNode.Network",
        "name": "getSocketServerPort",
        "normalized": "SocketServer-\u003ePortNumber",
        "package": "Holumbus-Distribution",
        "partial": "Socket Server Port",
        "signature": "SocketServer-\u003ePortNumber"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Network.html#v:performMaybeSendRequest",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Network",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "HandlerFunction a -\u003e HostName -\u003e PortNumber -\u003e IO (Maybe a)",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html#performMaybeSendRequest",
        "fct-type": "function",
        "title": "performMaybeSendRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Network",
        "module": "Holumbus.Distribution.DNode.Network",
        "name": "performMaybeSendRequest",
        "normalized": "HandlerFunction a-\u003eHostName-\u003ePortNumber-\u003eIO(Maybe a)",
        "package": "Holumbus-Distribution",
        "partial": "Maybe Send Request",
        "signature": "HandlerFunction a-\u003eHostName-\u003ePortNumber-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Network.html#v:performSafeSendRequest",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Network",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "HandlerFunction a -\u003e a -\u003e HostName -\u003e PortNumber -\u003e IO a",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html#performSafeSendRequest",
        "fct-type": "function",
        "title": "performSafeSendRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Network",
        "module": "Holumbus.Distribution.DNode.Network",
        "name": "performSafeSendRequest",
        "normalized": "HandlerFunction a-\u003ea-\u003eHostName-\u003ePortNumber-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "Safe Send Request",
        "signature": "HandlerFunction a-\u003ea-\u003eHostName-\u003ePortNumber-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Network.html#v:performUnsafeSendRequest",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode.Network",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "HandlerFunction a -\u003e HostName -\u003e PortNumber -\u003e IO a",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html#performUnsafeSendRequest",
        "fct-type": "function",
        "title": "performUnsafeSendRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode Network",
        "module": "Holumbus.Distribution.DNode.Network",
        "name": "performUnsafeSendRequest",
        "normalized": "HandlerFunction a-\u003eHostName-\u003ePortNumber-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "Unsafe Send Request",
        "signature": "HandlerFunction a-\u003eHostName-\u003ePortNumber-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Network.html#v:putByteStringMessage",
      "description": {
        "fct-descr": "\u003cp\u003ePuts a bytestring to a handle. But to make the reading easier, we write\n   the length of the data as a message-header to the handle, too. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Network",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ByteString -\u003e Handle -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html#putByteStringMessage",
        "fct-type": "function",
        "title": "putByteStringMessage"
      },
      "index": {
        "description": "Puts bytestring to handle But to make the reading easier we write the length of the data as message-header to the handle too",
        "hierarchy": "Holumbus Distribution DNode Network",
        "module": "Holumbus.Distribution.DNode.Network",
        "name": "putByteStringMessage",
        "normalized": "ByteString-\u003eHandle-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Byte String Message",
        "signature": "ByteString-\u003eHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Network.html#v:startSocketServer",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new (unix-)socket and starts the listener in its own thread.\n   You'll get a reference to the listener Thread, so you can kill it with\n   stopSocketServer.\n   It is also possible to give a range of PortNumbers on which the socket\n   will be opened. The first portnumber available will be taken.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Network",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "HandlerFunction ()-\u003e Int-\u003e Int-\u003e IO (Maybe SocketServer)",
        "fct-type": "function",
        "title": "startSocketServer"
      },
      "index": {
        "description": "Creates new unix socket and starts the listener in its own thread You ll get reference to the listener Thread so you can kill it with stopSocketServer It is also possible to give range of PortNumbers on which the socket will be opened The first portnumber available will be taken",
        "hierarchy": "Holumbus Distribution DNode Network",
        "module": "Holumbus.Distribution.DNode.Network",
        "name": "startSocketServer",
        "normalized": "HandlerFunction()-\u003eInt-\u003eInt-\u003eIO(Maybe SocketServer)",
        "package": "Holumbus-Distribution",
        "partial": "Socket Server",
        "signature": "HandlerFunction()-\u003eInt-\u003eInt-\u003eIO(Maybe SocketServer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode-Network.html#v:stopSocketServer",
      "description": {
        "fct-descr": "\u003cp\u003eStops a socker server by its internal thread id.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode.Network",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SocketServer -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Network.html#stopSocketServer",
        "fct-type": "function",
        "title": "stopSocketServer"
      },
      "index": {
        "description": "Stops socker server by its internal thread id",
        "hierarchy": "Holumbus Distribution DNode Network",
        "module": "Holumbus.Distribution.DNode.Network",
        "name": "stopSocketServer",
        "normalized": "SocketServer-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Socket Server",
        "signature": "SocketServer-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003ePublic interface of the DNode datatype. See Holumbus.Distribution.DNode.Base\n  for further documentation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Distribution-DNode.html",
        "fct-type": "module",
        "title": "DNode"
      },
      "index": {
        "description": "Version Public interface of the DNode datatype See Holumbus.Distribution.DNode.Base for further documentation",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "DNode",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#t:DHandlerId",
      "description": {
        "fct-descr": "\u003cp\u003eThe Id of a handler, is needed to stop the handler from further execution.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DHandlerId",
        "fct-type": "data",
        "title": "DHandlerId"
      },
      "index": {
        "description": "The Id of handler is needed to stop the handler from further execution",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "DHandlerId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DHandler Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#t:DNodeAddress",
      "description": {
        "fct-descr": "\u003cp\u003eThe DNode address.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeAddress",
        "fct-type": "data",
        "title": "DNodeAddress"
      },
      "index": {
        "description": "The DNode address",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "DNodeAddress",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DNode Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#t:DNodeConfig",
      "description": {
        "fct-descr": "\u003cp\u003eThe configuration of a DNode. You need it to create a DNode and you can \n   use this data type it to alter its properties. This type is public to\n   allow users to create their own configuration.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "data",
        "title": "DNodeConfig"
      },
      "index": {
        "description": "The configuration of DNode You need it to create DNode and you can use this data type it to alter its properties This type is public to allow users to create their own configuration",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "DNodeConfig",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DNode Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#t:DNodeId",
      "description": {
        "fct-descr": "\u003cp\u003eThe DNode identifier.\n   Every DNode has an Id, this could be named or randomly created. The id \n   could not be used to address a DNode directly over a Network connection \n   because the physical references are missing. The DNodeId is meant to \n   create a declarative reference which could be used to lookup purposes. \n   Think of the DNodeId as a domain name, without a DNS-Server to resolve \n   the physical address, it is worthless to establish a communication. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeId",
        "fct-type": "data",
        "title": "DNodeId"
      },
      "index": {
        "description": "The DNode identifier Every DNode has an Id this could be named or randomly created The id could not be used to address DNode directly over Network connection because the physical references are missing The DNodeId is meant to create declarative reference which could be used to lookup purposes Think of the DNodeId as domain name without DNS-Server to resolve the physical address it is worthless to establish communication",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "DNodeId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DNode Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#t:DistributedException",
      "description": {
        "fct-descr": "\u003cp\u003eThe exception type, used by distributed communication\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DistributedException",
        "fct-type": "data",
        "title": "DistributedException"
      },
      "index": {
        "description": "The exception type used by distributed communication",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "DistributedException",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Distributed Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:DNodeConfig",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DNodeConfig",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "function",
        "title": "DNodeConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "DNodeConfig",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DNode Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:DistributedException",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DistributedException",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DistributedException",
        "fct-type": "function",
        "title": "DistributedException"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "DistributedException",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Distributed Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:addForeignDNode",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a foreign DNode to the list of known DNodes.\n   Only DNodes in this list could be reached by the local node.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DNodeAddress -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#addForeignDNode",
        "fct-type": "function",
        "title": "addForeignDNode"
      },
      "index": {
        "description": "Add foreign DNode to the list of known DNodes Only DNodes in this list could be reached by the local node",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "addForeignDNode",
        "normalized": "DNodeAddress-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Foreign DNode",
        "signature": "DNodeAddress-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:addForeignDNodeHandler",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a handler function which periodically checks the existences (or non-existence)\n   of other DNodes. The first parameter indicates the type of the handler.\n   If you want to install a handler which is fired when a Node becomes reachable (positive trigger),\n   it needs to be true. If you want to monitor the event when a specific node disappears,\n   pass false.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Bool -\u003e DNodeId -\u003e DHandlerFunction -\u003e IO (Maybe DHandlerId)",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#addForeignDNodeHandler",
        "fct-type": "function",
        "title": "addForeignDNodeHandler"
      },
      "index": {
        "description": "Adds handler function which periodically checks the existences or non-existence of other DNodes The first parameter indicates the type of the handler If you want to install handler which is fired when Node becomes reachable positive trigger it needs to be true If you want to monitor the event when specific node disappears pass false",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "addForeignDNodeHandler",
        "normalized": "Bool-\u003eDNodeId-\u003eDHandlerFunction-\u003eIO(Maybe DHandlerId)",
        "package": "Holumbus-Distribution",
        "partial": "Foreign DNode Handler",
        "signature": "Bool-\u003eDNodeId-\u003eDHandlerFunction-\u003eIO(Maybe DHandlerId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:addForeignDResourceHandler",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a handler function which periodically checks the existences (or non-existence)\n   of resources on other DNodes. The first parameter indicates the type of the handler.\n   If you want to install a handler which is fired when a Node becomes reachable (positive trigger),\n   it needs to be true. If you want to monitor the event when a specific node disappears,\n   pass false.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Bool -\u003e DResourceAddress -\u003e DHandlerFunction -\u003e IO (Maybe DHandlerId)",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#addForeignDResourceHandler",
        "fct-type": "function",
        "title": "addForeignDResourceHandler"
      },
      "index": {
        "description": "Adds handler function which periodically checks the existences or non-existence of resources on other DNodes The first parameter indicates the type of the handler If you want to install handler which is fired when Node becomes reachable positive trigger it needs to be true If you want to monitor the event when specific node disappears pass false",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "addForeignDResourceHandler",
        "normalized": "Bool-\u003eDResourceAddress-\u003eDHandlerFunction-\u003eIO(Maybe DHandlerId)",
        "package": "Holumbus-Distribution",
        "partial": "Foreign DResource Handler",
        "signature": "Bool-\u003eDResourceAddress-\u003eDHandlerFunction-\u003eIO(Maybe DHandlerId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:checkForeignDNode",
      "description": {
        "fct-descr": "\u003cp\u003eManually Checks, if another DNode is reachable. Returns true if this is the case,\n   otherwise false. Always returns, does not throw an exception caused by network failures.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DNodeId -\u003e IO Bool",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#checkForeignDNode",
        "fct-type": "function",
        "title": "checkForeignDNode"
      },
      "index": {
        "description": "Manually Checks if another DNode is reachable Returns true if this is the case otherwise false Always returns does not throw an exception caused by network failures",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "checkForeignDNode",
        "normalized": "DNodeId-\u003eIO Bool",
        "package": "Holumbus-Distribution",
        "partial": "Foreign DNode",
        "signature": "DNodeId-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:defaultDNodeConfig",
      "description": {
        "fct-descr": "\u003cp\u003eA good default configuration. To create an unnamed node, just leave the\n   string empty. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e DNodeConfig",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#defaultDNodeConfig",
        "fct-type": "function",
        "title": "defaultDNodeConfig"
      },
      "index": {
        "description": "good default configuration To create an unnamed node just leave the string empty",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "defaultDNodeConfig",
        "normalized": "String-\u003eDNodeConfig",
        "package": "Holumbus-Distribution",
        "partial": "DNode Config",
        "signature": "String-\u003eDNodeConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:deinitDNode",
      "description": {
        "fct-descr": "\u003cp\u003edeinitializes a DNode\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#deinitDNode",
        "fct-type": "function",
        "title": "deinitDNode"
      },
      "index": {
        "description": "deinitializes DNode",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "deinitDNode",
        "normalized": "IO()",
        "package": "Holumbus-Distribution",
        "partial": "DNode",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:delForeignDNode",
      "description": {
        "fct-descr": "\u003cp\u003eremoves a foreign DNode entry. You should clean up the foreign DNode\n   entries.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DNodeId -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#delForeignDNode",
        "fct-type": "function",
        "title": "delForeignDNode"
      },
      "index": {
        "description": "removes foreign DNode entry You should clean up the foreign DNode entries",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "delForeignDNode",
        "normalized": "DNodeId-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Foreign DNode",
        "signature": "DNodeId-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:delForeignHandler",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a Handler from the system, will not be called anymore.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DHandlerId -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#delForeignHandler",
        "fct-type": "function",
        "title": "delForeignHandler"
      },
      "index": {
        "description": "Deletes Handler from the system will not be called anymore",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "delForeignHandler",
        "normalized": "DHandlerId-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Foreign Handler",
        "signature": "DHandlerId-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:distEx_fct",
      "description": {
        "fct-descr": "\u003cp\u003ethe function in which the exception was thrown\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DistributedException",
        "fct-type": "function",
        "title": "distEx_fct"
      },
      "index": {
        "description": "the function in which the exception was thrown",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "distEx_fct",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Ex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:distEx_mod",
      "description": {
        "fct-descr": "\u003cp\u003ethe module in which the exception was thrown\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DistributedException",
        "fct-type": "function",
        "title": "distEx_mod"
      },
      "index": {
        "description": "the module in which the exception was thrown",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "distEx_mod",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Ex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:distEx_msg",
      "description": {
        "fct-descr": "\u003cp\u003ethe message of the exception\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DistributedException",
        "fct-type": "function",
        "title": "distEx_msg"
      },
      "index": {
        "description": "the message of the exception",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "distEx_msg",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Ex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:dnc_AccessDelay",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "function",
        "title": "dnc_AccessDelay"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "dnc_AccessDelay",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Access Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:dnc_MaxPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "function",
        "title": "dnc_MaxPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "dnc_MaxPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Max Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:dnc_MinPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "function",
        "title": "dnc_MinPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "dnc_MinPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Min Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:dnc_Name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "function",
        "title": "dnc_Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "dnc_Name",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:dnc_PingDelay",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#DNodeConfig",
        "fct-type": "function",
        "title": "dnc_PingDelay"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "dnc_PingDelay",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Ping Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:getDNodeData",
      "description": {
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "IO DNodeData",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#getDNodeData",
        "fct-type": "function",
        "title": "getDNodeData"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "getDNodeData",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DNode Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:initDNode",
      "description": {
        "fct-descr": "\u003cp\u003eInitializes the DNode of the program. You have to call this function\n   once BEFORE you can use other functions. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DNodeConfig -\u003e IO DNodeId",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#initDNode",
        "fct-type": "function",
        "title": "initDNode"
      },
      "index": {
        "description": "Initializes the DNode of the program You have to call this function once BEFORE you can use other functions",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "initDNode",
        "normalized": "DNodeConfig-\u003eIO DNodeId",
        "package": "Holumbus-Distribution",
        "partial": "DNode",
        "signature": "DNodeConfig-\u003eIO DNodeId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:mkDNodeAddress",
      "description": {
        "fct-descr": "\u003cp\u003euse this to make a new DNodeAddress\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e HostName -\u003e Int -\u003e DNodeAddress",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#mkDNodeAddress",
        "fct-type": "function",
        "title": "mkDNodeAddress"
      },
      "index": {
        "description": "use this to make new DNodeAddress",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "mkDNodeAddress",
        "normalized": "String-\u003eHostName-\u003eInt-\u003eDNodeAddress",
        "package": "Holumbus-Distribution",
        "partial": "DNode Address",
        "signature": "String-\u003eHostName-\u003eInt-\u003eDNodeAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DNode.html#v:mkDNodeId",
      "description": {
        "fct-descr": "\u003cp\u003eUse this to make a new DNodeId from a String\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DNode",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e DNodeId",
        "fct-source": "src/Holumbus-Distribution-DNode-Base.html#mkDNodeId",
        "fct-type": "function",
        "title": "mkDNodeId"
      },
      "index": {
        "description": "Use this to make new DNodeId from String",
        "hierarchy": "Holumbus Distribution DNode",
        "module": "Holumbus.Distribution.DNode",
        "name": "mkDNodeId",
        "normalized": "String-\u003eDNodeId",
        "package": "Holumbus-Distribution",
        "partial": "DNode Id",
        "signature": "String-\u003eDNodeId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module offers distributed streams and ports.\n\u003c/p\u003e\u003cp\u003eBecause a DChan allows external read access, the idea came up to\n  split a DChan into two parts: a stream and a port. A stream only allows\n  you to read data from it. The read-access is limited to the local process which\n  created the stream. To send data to a stream, you need a port. This can be used\n  on forgein nodes to send data to your local stream.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html",
        "fct-type": "module",
        "title": "DStreamPort"
      },
      "index": {
        "description": "Version This module offers distributed streams and ports Because DChan allows external read access the idea came up to split DChan into two parts stream and port stream only allows you to read data from it The read-access is limited to the local process which created the stream To send data to stream you need port This can be used on forgein nodes to send data to your local stream",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "DStreamPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DStream Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#t:DPort",
      "description": {
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#DPort",
        "fct-type": "data",
        "title": "DPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "DPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DPort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#t:DStream",
      "description": {
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#DStream",
        "fct-type": "data",
        "title": "DStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "DStream",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DStream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#t:StreamPortMessage",
      "description": {
        "fct-descr": "\u003cp\u003eMessage Datatype.\n   We are sending additional information, to do debugging\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#StreamPortMessage",
        "fct-type": "data",
        "title": "StreamPortMessage"
      },
      "index": {
        "description": "Message Datatype We are sending additional information to do debugging",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "StreamPortMessage",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Stream Port Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:StreamPortMessage",
      "description": {
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "StreamPortMessage",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#StreamPortMessage",
        "fct-type": "function",
        "title": "StreamPortMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "StreamPortMessage",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Stream Port Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:closeDStream",
      "description": {
        "fct-descr": "\u003cp\u003eCloses a stream.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DStream a -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#closeDStream",
        "fct-type": "function",
        "title": "closeDStream"
      },
      "index": {
        "description": "Closes stream",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "closeDStream",
        "normalized": "DStream a-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "DStream",
        "signature": "DStream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:isEmptyDStream",
      "description": {
        "fct-descr": "\u003cp\u003eTests, if a stream has no more data to read.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DStream a -\u003e IO Bool",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#isEmptyDStream",
        "fct-type": "function",
        "title": "isEmptyDStream"
      },
      "index": {
        "description": "Tests if stream has no more data to read",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "isEmptyDStream",
        "normalized": "DStream a-\u003eIO Bool",
        "package": "Holumbus-Distribution",
        "partial": "Empty DStream",
        "signature": "DStream a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:newDPort",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new port from a streamname and its socketId.\n   The first parameter is the name of the resource and the second one\n   the name of the node.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e String -\u003e IO (DPort a)",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#newDPort",
        "fct-type": "function",
        "title": "newDPort"
      },
      "index": {
        "description": "Creates new port from streamname and its socketId The first parameter is the name of the resource and the second one the name of the node",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "newDPort",
        "normalized": "String-\u003eString-\u003eIO(DPort a)",
        "package": "Holumbus-Distribution",
        "partial": "DPort",
        "signature": "String-\u003eString-\u003eIO(DPort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:newDPortFromStream",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new Port, which is bound to a stream.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DStream a -\u003e IO (DPort a)",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#newDPortFromStream",
        "fct-type": "function",
        "title": "newDPortFromStream"
      },
      "index": {
        "description": "Creates new Port which is bound to stream",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "newDPortFromStream",
        "normalized": "DStream a-\u003eIO(DPort a)",
        "package": "Holumbus-Distribution",
        "partial": "DPort From Stream",
        "signature": "DStream a-\u003eIO(DPort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:newDStream",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new local stream.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e IO (DStream a)",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#newDStream",
        "fct-type": "function",
        "title": "newDStream"
      },
      "index": {
        "description": "Creates new local stream",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "newDStream",
        "normalized": "String-\u003eIO(DStream a)",
        "package": "Holumbus-Distribution",
        "partial": "DStream",
        "signature": "String-\u003eIO(DStream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReads the data packet of the next message from a stream.\n   If stream is empty, this function will block until a new message arrives.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DStream a -\u003e IO a",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Reads the data packet of the next message from stream If stream is empty this function will block until new message arrives",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "receive",
        "normalized": "DStream a-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "DStream a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:receiveMsg",
      "description": {
        "fct-descr": "\u003cp\u003eReads the next message from a stream (data packet + message header).\n   If stream is empty, this function will block until a new message arrives.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DStream a -\u003e IO (StreamPortMessage a)",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#receiveMsg",
        "fct-type": "function",
        "title": "receiveMsg"
      },
      "index": {
        "description": "Reads the next message from stream data packet message header If stream is empty this function will block until new message arrives",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "receiveMsg",
        "normalized": "DStream a-\u003eIO(StreamPortMessage a)",
        "package": "Holumbus-Distribution",
        "partial": "Msg",
        "signature": "DStream a-\u003eIO(StreamPortMessage a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend data to the stream of the port.\n   The data is send via network, if the stream is located on an external\n   processor\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DPort a -\u003e a -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send data to the stream of the port The data is send via network if the stream is located on an external processor",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "send",
        "normalized": "DPort a-\u003ea-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "DPort a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:sendWithGeneric",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ca\u003esend\u003c/a\u003e, but here we can give some generic data (e.g. a port for reply \n   messages).\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DPort a -\u003e a -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#sendWithGeneric",
        "fct-type": "function",
        "title": "sendWithGeneric"
      },
      "index": {
        "description": "Like send but here we can give some generic data e.g port for reply messages",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "sendWithGeneric",
        "normalized": "DPort a-\u003ea-\u003eByteString-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "With Generic",
        "signature": "DPort a-\u003ea-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:sendWithMaybeGeneric",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ca\u003esendWithGeneric\u003c/a\u003e, but the generic data is optional\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DPort a -\u003e a -\u003e Maybe ByteString -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#sendWithMaybeGeneric",
        "fct-type": "function",
        "title": "sendWithMaybeGeneric"
      },
      "index": {
        "description": "Like sendWithGeneric but the generic data is optional",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "sendWithMaybeGeneric",
        "normalized": "DPort a-\u003ea-\u003eMaybe ByteString-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "With Maybe Generic",
        "signature": "DPort a-\u003ea-\u003eMaybe ByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:spm_Data",
      "description": {
        "fct-descr": "\u003cp\u003ethe data  \n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "!a",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#StreamPortMessage",
        "fct-type": "function",
        "title": "spm_Data"
      },
      "index": {
        "description": "the data",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "spm_Data",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:spm_Generic",
      "description": {
        "fct-descr": "\u003cp\u003esome generic data -- could be another port\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "!(Maybe ByteString)",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#StreamPortMessage",
        "fct-type": "function",
        "title": "spm_Generic"
      },
      "index": {
        "description": "some generic data could be another port",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "spm_Generic",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:tryReceive",
      "description": {
        "fct-descr": "\u003cp\u003eReads the data packet of the next message from a stream.\n   If stream is empty, this function will immediately return with Nothing.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DStream a -\u003e IO (Maybe a)",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#tryReceive",
        "fct-type": "function",
        "title": "tryReceive"
      },
      "index": {
        "description": "Reads the data packet of the next message from stream If stream is empty this function will immediately return with Nothing",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "tryReceive",
        "normalized": "DStream a-\u003eIO(Maybe a)",
        "package": "Holumbus-Distribution",
        "partial": "Receive",
        "signature": "DStream a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:tryReceiveMsg",
      "description": {
        "fct-descr": "\u003cp\u003eReads the next message from a stream (data packet + message header).\n   If stream is empty, this function will immediately return with Nothing.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DStream a -\u003e IO (Maybe (StreamPortMessage a))",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#tryReceiveMsg",
        "fct-type": "function",
        "title": "tryReceiveMsg"
      },
      "index": {
        "description": "Reads the next message from stream data packet message header If stream is empty this function will immediately return with Nothing",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "tryReceiveMsg",
        "normalized": "DStream a-\u003eIO(Maybe(StreamPortMessage a))",
        "package": "Holumbus-Distribution",
        "partial": "Receive Msg",
        "signature": "DStream a-\u003eIO(Maybe(StreamPortMessage a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:tryWaitReceive",
      "description": {
        "fct-descr": "\u003cp\u003eReads the data packet of the next message from a stream.\n   If stream is empty, this function will wait for new messages until the \n   time is up and if no message has arrived, return with Nothing.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DStream a -\u003e Int -\u003e IO (Maybe a)",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#tryWaitReceive",
        "fct-type": "function",
        "title": "tryWaitReceive"
      },
      "index": {
        "description": "Reads the data packet of the next message from stream If stream is empty this function will wait for new messages until the time is up and if no message has arrived return with Nothing",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "tryWaitReceive",
        "normalized": "DStream a-\u003eInt-\u003eIO(Maybe a)",
        "package": "Holumbus-Distribution",
        "partial": "Wait Receive",
        "signature": "DStream a-\u003eInt-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:tryWaitReceiveMsg",
      "description": {
        "fct-descr": "\u003cp\u003eReads the next message from a stream (data packet + message header).\n   If stream is empty, this function will wait for new messages until the \n   time is up and if no message has arrived, return with Nothing.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DStream a -\u003e Int -\u003e IO (Maybe (StreamPortMessage a))",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#tryWaitReceiveMsg",
        "fct-type": "function",
        "title": "tryWaitReceiveMsg"
      },
      "index": {
        "description": "Reads the next message from stream data packet message header If stream is empty this function will wait for new messages until the time is up and if no message has arrived return with Nothing",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "tryWaitReceiveMsg",
        "normalized": "DStream a-\u003eInt-\u003eIO(Maybe(StreamPortMessage a))",
        "package": "Holumbus-Distribution",
        "partial": "Wait Receive Msg",
        "signature": "DStream a-\u003eInt-\u003eIO(Maybe(StreamPortMessage a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DStreamPort.html#v:withStream",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulates a stream.\n   A new stream is created, then some user-action is done an after that the\n   stream is closed. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DStreamPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "(DStream a -\u003e IO b) -\u003e IO b",
        "fct-source": "src/Holumbus-Distribution-DStreamPort.html#withStream",
        "fct-type": "function",
        "title": "withStream"
      },
      "index": {
        "description": "Encapsulates stream new stream is created then some user-action is done an after that the stream is closed",
        "hierarchy": "Holumbus Distribution DStreamPort",
        "module": "Holumbus.Distribution.DStreamPort",
        "name": "withStream",
        "normalized": "(DStream a-\u003eIO b)-\u003eIO b",
        "package": "Holumbus-Distribution",
        "partial": "Stream",
        "signature": "(DStream a-\u003eIO b)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DValue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module offers the distrubted value datatype.\n\u003c/p\u003e\u003cp\u003eA DValue is like a distributed MVar, but is can only be\n  set once on the local node. If the value is set, it cannot be\n  changed any more.\n\u003c/p\u003e\u003cp\u003eI don't know if this is useful at all, so the implementation is not\n  quite finished an some things could be improved.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Distribution.DValue",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Distribution-DValue.html",
        "fct-type": "module",
        "title": "DValue"
      },
      "index": {
        "description": "Version This module offers the distrubted value datatype DValue is like distributed MVar but is can only be set once on the local node If the value is set it cannot be changed any more don know if this is useful at all so the implementation is not quite finished an some things could be improved",
        "hierarchy": "Holumbus Distribution DValue",
        "module": "Holumbus.Distribution.DValue",
        "name": "DValue",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DValue.html#t:DValue",
      "description": {
        "fct-module": "Holumbus.Distribution.DValue",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Distribution-DValue.html#DValue",
        "fct-type": "data",
        "title": "DValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Distribution DValue",
        "module": "Holumbus.Distribution.DValue",
        "name": "DValue",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "DValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DValue.html#v:closeDValue",
      "description": {
        "fct-descr": "\u003cp\u003eCloses a DValue.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DValue",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DValue a -\u003e IO ()",
        "fct-source": "src/Holumbus-Distribution-DValue.html#closeDValue",
        "fct-type": "function",
        "title": "closeDValue"
      },
      "index": {
        "description": "Closes DValue",
        "hierarchy": "Holumbus Distribution DValue",
        "module": "Holumbus.Distribution.DValue",
        "name": "closeDValue",
        "normalized": "DValue a-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "DValue",
        "signature": "DValue a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DValue.html#v:getDValue",
      "description": {
        "fct-descr": "\u003cp\u003eGets value. It will only access the network on the first\n   time and my throw an exception. It returns always (Just a)\n    but this may change in the future, so the type sticks to (Maybe a)\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DValue",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "DValue a -\u003e IO (Maybe a)",
        "fct-source": "src/Holumbus-Distribution-DValue.html#getDValue",
        "fct-type": "function",
        "title": "getDValue"
      },
      "index": {
        "description": "Gets value It will only access the network on the first time and my throw an exception It returns always Just but this may change in the future so the type sticks to Maybe",
        "hierarchy": "Holumbus Distribution DValue",
        "module": "Holumbus.Distribution.DValue",
        "name": "getDValue",
        "normalized": "DValue a-\u003eIO(Maybe a)",
        "package": "Holumbus-Distribution",
        "partial": "DValue",
        "signature": "DValue a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DValue.html#v:newDValue",
      "description": {
        "fct-descr": "\u003cp\u003eCreates new DValue on the local DNode. The first parameter\n   is the name of the value which could be used in other processes to\n   access this stream. If you leave it empty, a random Id will be created.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DValue",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e a -\u003e IO (DValue a)",
        "fct-source": "src/Holumbus-Distribution-DValue.html#newDValue",
        "fct-type": "function",
        "title": "newDValue"
      },
      "index": {
        "description": "Creates new DValue on the local DNode The first parameter is the name of the value which could be used in other processes to access this stream If you leave it empty random Id will be created",
        "hierarchy": "Holumbus Distribution DValue",
        "module": "Holumbus.Distribution.DValue",
        "name": "newDValue",
        "normalized": "String-\u003ea-\u003eIO(DValue a)",
        "package": "Holumbus-Distribution",
        "partial": "DValue",
        "signature": "String-\u003ea-\u003eIO(DValue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Distribution-DValue.html#v:newRemoteDValue",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new DValue.\n   The first parameter is the name of the resource and the second one\n   the name of the node.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Distribution.DValue",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e String -\u003e IO (DValue a)",
        "fct-source": "src/Holumbus-Distribution-DValue.html#newRemoteDValue",
        "fct-type": "function",
        "title": "newRemoteDValue"
      },
      "index": {
        "description": "Creates new DValue The first parameter is the name of the resource and the second one the name of the node",
        "hierarchy": "Holumbus Distribution DValue",
        "module": "Holumbus.Distribution.DValue",
        "name": "newRemoteDValue",
        "normalized": "String-\u003eString-\u003eIO(DValue a)",
        "package": "Holumbus-Distribution",
        "partial": "Remote DValue",
        "signature": "String-\u003eString-\u003eIO(DValue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module implements an abstract client server model. The clients register\n  at the server and check from time to time if the server still exists. If not,\n  the client searches for a new server.\n  The server on the other hand, keeps a list with all clients and checks, if\n  each client is reachable. If not, the client is deleted from the list.\n\u003c/p\u003e\u003cp\u003eThis abstract network model helps us to implement a basic distrubuted system\n  with a central server and many attached clients which get little tasks from\n  the server. Because this model alone would be very unfunctional, the user is\n  able to define his own functions which will be handled by the server or the\n  client. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Network-Communication.html",
        "fct-type": "module",
        "title": "Communication"
      },
      "index": {
        "description": "Version This module implements an abstract client server model The clients register at the server and check from time to time if the server still exists If not the client searches for new server The server on the other hand keeps list with all clients and checks if each client is reachable If not the client is deleted from the list This abstract network model helps us to implement basic distrubuted system with central server and many attached clients which get little tasks from the server Because this model alone would be very unfunctional the user is able to define his own functions which will be handled by the server or the client",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "Communication",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Communication",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#t:Client",
      "description": {
        "fct-descr": "\u003cp\u003eOnly a wrapper around an MVar.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Communication.html#Client",
        "fct-type": "data",
        "title": "Client"
      },
      "index": {
        "description": "Only wrapper around an MVar",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "Client",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#t:ClientClass",
      "description": {
        "fct-descr": "\u003cp\u003eThe request-functions a client has to implement.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "class",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientClass",
        "fct-type": "class",
        "title": "ClientClass"
      },
      "index": {
        "description": "The request-functions client has to implement",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ClientClass",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Client Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#t:ClientData",
      "description": {
        "fct-descr": "\u003cp\u003eClient datatype.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientData",
        "fct-type": "data",
        "title": "ClientData"
      },
      "index": {
        "description": "Client datatype",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ClientData",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Client Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#t:ClientInfo",
      "description": {
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientInfo",
        "fct-type": "data",
        "title": "ClientInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ClientInfo",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Client Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#t:ClientPort",
      "description": {
        "fct-descr": "\u003cp\u003eJust a wrapper around a port.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientPort",
        "fct-type": "data",
        "title": "ClientPort"
      },
      "index": {
        "description": "Just wrapper around port",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ClientPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Client Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#t:IdType",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the client id.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Network-Communication.html#IdType",
        "fct-type": "type",
        "title": "IdType"
      },
      "index": {
        "description": "The type of the client id",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "IdType",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Id Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#t:PortNumber",
      "description": {
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "PortNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "PortNumber",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#t:Server",
      "description": {
        "fct-descr": "\u003cp\u003eThe server.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Communication.html#Server",
        "fct-type": "data",
        "title": "Server"
      },
      "index": {
        "description": "The server",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "Server",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#t:ServerPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe ServerPort is only a wrapper for a Port-Datatype.  \n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Communication.html#ServerPort",
        "fct-type": "data",
        "title": "ServerPort"
      },
      "index": {
        "description": "The ServerPort is only wrapper for Port-Datatype",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ServerPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Server Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#t:SocketId",
      "description": {
        "fct-descr": "\u003cp\u003eAll data, that is needed to address a socket.\n   Contains the hostname and the portNumber.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Core.html#SocketId",
        "fct-type": "data",
        "title": "SocketId"
      },
      "index": {
        "description": "All data that is needed to address socket Contains the hostname and the portNumber",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "SocketId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Socket Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#t:StreamName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a stream.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Network-Port.html#StreamName",
        "fct-type": "type",
        "title": "StreamName"
      },
      "index": {
        "description": "The name of stream",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "StreamName",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Stream Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:Client",
      "description": {
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Client (MVar ClientData)",
        "fct-source": "src/Holumbus-Network-Communication.html#Client",
        "fct-type": "function",
        "title": "Client"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "Client",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:ClientData",
      "description": {
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ClientData",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientData",
        "fct-type": "function",
        "title": "ClientData"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ClientData",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Client Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:ClientInfo",
      "description": {
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ClientInfo",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientInfo",
        "fct-type": "function",
        "title": "ClientInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ClientInfo",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Client Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:ClientPort",
      "description": {
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ClientPort (Port ClientRequestMessage)",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientPort",
        "fct-type": "function",
        "title": "ClientPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ClientPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Client Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:cd_Id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Maybe IdType",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientData",
        "fct-type": "function",
        "title": "cd_Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "cd_Id",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:cd_LifeValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientData",
        "fct-type": "function",
        "title": "cd_LifeValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "cd_LifeValue",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Life Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:cd_OwnPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Port ClientRequestMessage",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientData",
        "fct-type": "function",
        "title": "cd_OwnPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "cd_OwnPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Own Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:cd_OwnStream",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Stream ClientRequestMessage",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientData",
        "fct-type": "function",
        "title": "cd_OwnStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "cd_OwnStream",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Own Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:cd_PingThreadId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Thread",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientData",
        "fct-type": "function",
        "title": "cd_PingThreadId"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "cd_PingThreadId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Ping Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:cd_ServerPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ServerPort",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientData",
        "fct-type": "function",
        "title": "cd_ServerPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "cd_ServerPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Server Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:cd_ServerThreadId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Thread",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientData",
        "fct-type": "function",
        "title": "cd_ServerThreadId"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "cd_ServerThreadId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Server Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:cd_SiteId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SiteId",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientData",
        "fct-type": "function",
        "title": "cd_SiteId"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "cd_SiteId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Site Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:ci_Id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientInfo",
        "fct-type": "function",
        "title": "ci_Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ci_Id",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:ci_LifeValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientInfo",
        "fct-type": "function",
        "title": "ci_LifeValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ci_LifeValue",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Life Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:ci_PingThreadId",
      "description": {
        "fct-descr": "\u003cp\u003ethe threadId of the ping-Process (needed to stop it)\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Thread",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientInfo",
        "fct-type": "function",
        "title": "ci_PingThreadId"
      },
      "index": {
        "description": "the threadId of the ping-Process needed to stop it",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ci_PingThreadId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Ping Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:ci_Port",
      "description": {
        "fct-descr": "\u003cp\u003ethe port of the client\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ClientPort",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientInfo",
        "fct-type": "function",
        "title": "ci_Port"
      },
      "index": {
        "description": "the port of the client",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ci_Port",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:ci_Site",
      "description": {
        "fct-descr": "\u003cp\u003eSiteId (Hostname,PID) of the client process\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SiteId",
        "fct-source": "src/Holumbus-Network-Communication.html#ClientInfo",
        "fct-type": "function",
        "title": "ci_Site"
      },
      "index": {
        "description": "SiteId Hostname PID of the client process",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "ci_Site",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:closeClient",
      "description": {
        "fct-descr": "\u003cp\u003eCloses the client.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Client -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-Communication.html#closeClient",
        "fct-type": "function",
        "title": "closeClient"
      },
      "index": {
        "description": "Closes the client",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "closeClient",
        "normalized": "Client-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Client",
        "signature": "Client-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:closeServer",
      "description": {
        "fct-descr": "\u003cp\u003eCloses the server.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Server -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-Communication.html#closeServer",
        "fct-type": "function",
        "title": "closeServer"
      },
      "index": {
        "description": "Closes the server",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "closeServer",
        "normalized": "Server-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Server",
        "signature": "Server-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:getAllClientInfos",
      "description": {
        "fct-descr": "\u003cp\u003eGets a list with all registered clients (on the Server).\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Server -\u003e IO [ClientInfo]",
        "fct-source": "src/Holumbus-Network-Communication.html#getAllClientInfos",
        "fct-type": "function",
        "title": "getAllClientInfos"
      },
      "index": {
        "description": "Gets list with all registered clients on the Server",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "getAllClientInfos",
        "normalized": "Server-\u003eIO[ClientInfo]",
        "package": "Holumbus-Distribution",
        "partial": "All Client Infos",
        "signature": "Server-\u003eIO[ClientInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:getClientId",
      "description": {
        "fct-descr": "\u003cp\u003eGet the ID of the client.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "c -\u003e IO (Maybe IdType)",
        "fct-source": "src/Holumbus-Network-Communication.html#getClientId",
        "fct-type": "method",
        "title": "getClientId"
      },
      "index": {
        "description": "Get the ID of the client",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "getClientId",
        "normalized": "a-\u003eIO(Maybe IdType)",
        "package": "Holumbus-Distribution",
        "partial": "Client Id",
        "signature": "c-\u003eIO(Maybe IdType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:getClientInfo",
      "description": {
        "fct-descr": "\u003cp\u003eGets the ClientPort from a ClientId (on the Server).\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "IdType -\u003e Server -\u003e IO (Maybe ClientInfo)",
        "fct-source": "src/Holumbus-Network-Communication.html#getClientInfo",
        "fct-type": "function",
        "title": "getClientInfo"
      },
      "index": {
        "description": "Gets the ClientPort from ClientId on the Server",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "getClientInfo",
        "normalized": "IdType-\u003eServer-\u003eIO(Maybe ClientInfo)",
        "package": "Holumbus-Distribution",
        "partial": "Client Info",
        "signature": "IdType-\u003eServer-\u003eIO(Maybe ClientInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:getServerPort",
      "description": {
        "fct-descr": "\u003cp\u003eGets the server port the client wants to connect to.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "c -\u003e IO ServerPort",
        "fct-source": "src/Holumbus-Network-Communication.html#getServerPort",
        "fct-type": "method",
        "title": "getServerPort"
      },
      "index": {
        "description": "Gets the server port the client wants to connect to",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "getServerPort",
        "normalized": "a-\u003eIO ServerPort",
        "package": "Holumbus-Distribution",
        "partial": "Server Port",
        "signature": "c-\u003eIO ServerPort"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:newClient",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new client, it needs the StreamName and optional \n   the SocketId of the server.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "StreamName-\u003e Maybe SocketId-\u003e (a -\u003e IO (Maybe b))-\u003e IO Client",
        "fct-type": "function",
        "title": "newClient"
      },
      "index": {
        "description": "Creates new client it needs the StreamName and optional the SocketId of the server",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "newClient",
        "normalized": "StreamName-\u003eMaybe SocketId-\u003e(a-\u003eIO(Maybe b))-\u003eIO Client",
        "package": "Holumbus-Distribution",
        "partial": "Client",
        "signature": "StreamName-\u003eMaybe SocketId-\u003e(a-\u003eIO(Maybe b))-\u003eIO Client"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:newServer",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new server.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "StreamName-\u003e Maybe PortNumber-\u003e (a -\u003e IO (Maybe b))-\u003e Maybe RegistrationAction-\u003e Maybe RegistrationAction-\u003e IO Server",
        "fct-type": "function",
        "title": "newServer"
      },
      "index": {
        "description": "Creates new server",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "newServer",
        "normalized": "StreamName-\u003eMaybe PortNumber-\u003e(a-\u003eIO(Maybe b))-\u003eMaybe RegistrationAction-\u003eMaybe RegistrationAction-\u003eIO Server",
        "package": "Holumbus-Distribution",
        "partial": "Server",
        "signature": "StreamName-\u003eMaybe PortNumber-\u003e(a-\u003eIO(Maybe b))-\u003eMaybe RegistrationAction-\u003eMaybe RegistrationAction-\u003eIO Server"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:newServerPort",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new ServerPort.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "StreamName -\u003e Maybe SocketId -\u003e IO ServerPort",
        "fct-source": "src/Holumbus-Network-Communication.html#newServerPort",
        "fct-type": "function",
        "title": "newServerPort"
      },
      "index": {
        "description": "Creates new ServerPort",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "newServerPort",
        "normalized": "StreamName-\u003eMaybe SocketId-\u003eIO ServerPort",
        "package": "Holumbus-Distribution",
        "partial": "Server Port",
        "signature": "StreamName-\u003eMaybe SocketId-\u003eIO ServerPort"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:pingClient",
      "description": {
        "fct-descr": "\u003cp\u003eCheck, if the client is responding.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "IdType -\u003e c -\u003e IO Bool",
        "fct-source": "src/Holumbus-Network-Communication.html#pingClient",
        "fct-type": "method",
        "title": "pingClient"
      },
      "index": {
        "description": "Check if the client is responding",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "pingClient",
        "normalized": "IdType-\u003ea-\u003eIO Bool",
        "package": "Holumbus-Distribution",
        "partial": "Client",
        "signature": "IdType-\u003ec-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:sendRequestToClient",
      "description": {
        "fct-descr": "\u003cp\u003eSends a request from the server to the client an handles the response or\n   invokes a user-defined handler.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ClientPort-\u003e Int-\u003e a-\u003e (b -\u003e IO (Maybe c))-\u003e IO c",
        "fct-type": "function",
        "title": "sendRequestToClient"
      },
      "index": {
        "description": "Sends request from the server to the client an handles the response or invokes user-defined handler",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "sendRequestToClient",
        "normalized": "ClientPort-\u003eInt-\u003ea-\u003e(b-\u003eIO(Maybe c))-\u003eIO c",
        "package": "Holumbus-Distribution",
        "partial": "Request To Client",
        "signature": "ClientPort-\u003eInt-\u003ea-\u003e(b-\u003eIO(Maybe c))-\u003eIO c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:sendRequestToServer",
      "description": {
        "fct-descr": "\u003cp\u003eSends a request from the client to the server an handles the response or\n   invokes a user-defined handler.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ServerPort-\u003e Int-\u003e a-\u003e (b -\u003e IO (Maybe c))-\u003e IO c",
        "fct-type": "function",
        "title": "sendRequestToServer"
      },
      "index": {
        "description": "Sends request from the client to the server an handles the response or invokes user-defined handler",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "sendRequestToServer",
        "normalized": "ServerPort-\u003eInt-\u003ea-\u003e(b-\u003eIO(Maybe c))-\u003eIO c",
        "package": "Holumbus-Distribution",
        "partial": "Request To Server",
        "signature": "ServerPort-\u003eInt-\u003ea-\u003e(b-\u003eIO(Maybe c))-\u003eIO c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:time30",
      "description": {
        "fct-descr": "\u003cp\u003e30 seconds\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Network-Port.html#time30",
        "fct-type": "function",
        "title": "time30"
      },
      "index": {
        "description": "seconds",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "time30",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:time60",
      "description": {
        "fct-descr": "\u003cp\u003e60 seconds\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Network-Port.html#time60",
        "fct-type": "function",
        "title": "time60"
      },
      "index": {
        "description": "seconds",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "time60",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Communication.html#v:timeIndefinitely",
      "description": {
        "fct-descr": "\u003cp\u003eWait how long it takes\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Communication",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Network-Port.html#timeIndefinitely",
        "fct-type": "function",
        "title": "timeIndefinitely"
      },
      "index": {
        "description": "Wait how long it takes",
        "hierarchy": "Holumbus Network Communication",
        "module": "Holumbus.Network.Communication",
        "name": "timeIndefinitely",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Indefinitely",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThe Server-Module for the Holumbus framework.\n\u003c/p\u003e\u003cp\u003eIt contains the lowlevel functions, like the socket handling (opening, \n  reading, writing, ...).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Network.Core",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Network-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "Version The Server-Module for the Holumbus framework It contains the lowlevel functions like the socket handling opening reading writing",
        "hierarchy": "Holumbus Network Core",
        "module": "Holumbus.Network.Core",
        "name": "Core",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Core.html#t:SocketId",
      "description": {
        "fct-descr": "\u003cp\u003eAll data, that is needed to address a socket.\n   Contains the hostname and the portNumber.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Core",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Core.html#SocketId",
        "fct-type": "data",
        "title": "SocketId"
      },
      "index": {
        "description": "All data that is needed to address socket Contains the hostname and the portNumber",
        "hierarchy": "Holumbus Network Core",
        "module": "Holumbus.Network.Core",
        "name": "SocketId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Socket Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Core.html#t:ThreadIdException",
      "description": {
        "fct-module": "Holumbus.Network.Core",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Core.html#ThreadIdException",
        "fct-type": "data",
        "title": "ThreadIdException"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Core",
        "module": "Holumbus.Network.Core",
        "name": "ThreadIdException",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Thread Id Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Core.html#v:SocketId",
      "description": {
        "fct-module": "Holumbus.Network.Core",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SocketId HostName PortNumber",
        "fct-source": "src/Holumbus-Network-Core.html#SocketId",
        "fct-type": "function",
        "title": "SocketId"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Core",
        "module": "Holumbus.Network.Core",
        "name": "SocketId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Socket Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Core.html#v:ThreadIdException",
      "description": {
        "fct-module": "Holumbus.Network.Core",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ThreadIdException ThreadId",
        "fct-source": "src/Holumbus-Network-Core.html#ThreadIdException",
        "fct-type": "function",
        "title": "ThreadIdException"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Core",
        "module": "Holumbus.Network.Core",
        "name": "ThreadIdException",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Thread Id Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Core.html#v:getMessage",
      "description": {
        "fct-descr": "\u003cp\u003eReads data from a stream. We define, that the first line of the message\n   is the message header which tells us how much bytes we have to read.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Core",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Handle -\u003e IO ByteString",
        "fct-source": "src/Holumbus-Network-Core.html#getMessage",
        "fct-type": "function",
        "title": "getMessage"
      },
      "index": {
        "description": "Reads data from stream We define that the first line of the message is the message header which tells us how much bytes we have to read",
        "hierarchy": "Holumbus Network Core",
        "module": "Holumbus.Network.Core",
        "name": "getMessage",
        "normalized": "Handle-\u003eIO ByteString",
        "package": "Holumbus-Distribution",
        "partial": "Message",
        "signature": "Handle-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Core.html#v:performMaybeSendRequest",
      "description": {
        "fct-module": "Holumbus.Network.Core",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "(Handle -\u003e IO a) -\u003e HostName -\u003e PortNumber -\u003e IO (Maybe a)",
        "fct-source": "src/Holumbus-Network-Core.html#performMaybeSendRequest",
        "fct-type": "function",
        "title": "performMaybeSendRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Core",
        "module": "Holumbus.Network.Core",
        "name": "performMaybeSendRequest",
        "normalized": "(Handle-\u003eIO a)-\u003eHostName-\u003ePortNumber-\u003eIO(Maybe a)",
        "package": "Holumbus-Distribution",
        "partial": "Maybe Send Request",
        "signature": "(Handle-\u003eIO a)-\u003eHostName-\u003ePortNumber-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Core.html#v:performSafeSendRequest",
      "description": {
        "fct-module": "Holumbus.Network.Core",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "(Handle -\u003e IO a) -\u003e a -\u003e HostName -\u003e PortNumber -\u003e IO a",
        "fct-source": "src/Holumbus-Network-Core.html#performSafeSendRequest",
        "fct-type": "function",
        "title": "performSafeSendRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Core",
        "module": "Holumbus.Network.Core",
        "name": "performSafeSendRequest",
        "normalized": "(Handle-\u003eIO a)-\u003ea-\u003eHostName-\u003ePortNumber-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "Safe Send Request",
        "signature": "(Handle-\u003eIO a)-\u003ea-\u003eHostName-\u003ePortNumber-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Core.html#v:performUnsafeSendRequest",
      "description": {
        "fct-module": "Holumbus.Network.Core",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "(Handle -\u003e IO a) -\u003e HostName -\u003e PortNumber -\u003e IO a",
        "fct-source": "src/Holumbus-Network-Core.html#performUnsafeSendRequest",
        "fct-type": "function",
        "title": "performUnsafeSendRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Core",
        "module": "Holumbus.Network.Core",
        "name": "performUnsafeSendRequest",
        "normalized": "(Handle-\u003eIO a)-\u003eHostName-\u003ePortNumber-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "Unsafe Send Request",
        "signature": "(Handle-\u003eIO a)-\u003eHostName-\u003ePortNumber-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Core.html#v:putMessage",
      "description": {
        "fct-descr": "\u003cp\u003ePuts a bytestring to a handle. But to make the reading easier, we write\n   the length of the data as a message-header to the handle, too. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Core",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ByteString -\u003e Handle -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-Core.html#putMessage",
        "fct-type": "function",
        "title": "putMessage"
      },
      "index": {
        "description": "Puts bytestring to handle But to make the reading easier we write the length of the data as message-header to the handle too",
        "hierarchy": "Holumbus Network Core",
        "module": "Holumbus.Network.Core",
        "name": "putMessage",
        "normalized": "ByteString-\u003eHandle-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Message",
        "signature": "ByteString-\u003eHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Core.html#v:sendRequest",
      "description": {
        "fct-descr": "\u003cp\u003eSend the query to a server and merge the result with the global result.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Core",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "(Handle -\u003e IO a) -\u003e HostName -\u003e PortNumber -\u003e IO a",
        "fct-source": "src/Holumbus-Network-Core.html#sendRequest",
        "fct-type": "function",
        "title": "sendRequest"
      },
      "index": {
        "description": "Send the query to server and merge the result with the global result",
        "hierarchy": "Holumbus Network Core",
        "module": "Holumbus.Network.Core",
        "name": "sendRequest",
        "normalized": "(Handle-\u003eIO a)-\u003eHostName-\u003ePortNumber-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "Request",
        "signature": "(Handle-\u003eIO a)-\u003eHostName-\u003ePortNumber-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Core.html#v:startSocket",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new (unix-)socket and starts the listener in its own thread.\n   You'll get the threadId of the listener Thread, so you can kill it.\n   It is also possible to give a range of PortNumbers on which the socket\n   will be opened. The first portnumber available will be taken.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Core",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "ServerDispatcher-\u003e PortNumber-\u003e PortNumber-\u003e IO (Maybe (ThreadId, HostName, PortNumber))",
        "fct-type": "function",
        "title": "startSocket"
      },
      "index": {
        "description": "Creates new unix socket and starts the listener in its own thread You ll get the threadId of the listener Thread so you can kill it It is also possible to give range of PortNumbers on which the socket will be opened The first portnumber available will be taken",
        "hierarchy": "Holumbus Network Core",
        "module": "Holumbus.Network.Core",
        "name": "startSocket",
        "normalized": "ServerDispatcher-\u003ePortNumber-\u003ePortNumber-\u003eIO(Maybe(ThreadId,HostName,PortNumber))",
        "package": "Holumbus-Distribution",
        "partial": "Socket",
        "signature": "ServerDispatcher-\u003ePortNumber-\u003ePortNumber-\u003eIO(Maybe(ThreadId,HostName,PortNumber))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-DoWithServer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module provides an interface to start a server listeing on a tcp socket.\n  ( Module is based on simple tcp server found here http:\u003cem/\u003esequence.complete.org\u003cem\u003enode\u003c/em\u003e258 )\n\u003c/p\u003e\u003cp\u003eYou have to implement 2 functions\n       type ServerAction  a = a -\u003e Client a -\u003e [Client a] -\u003e IO [Client a]\n\u003c/p\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cp\u003etype LineConverter a = String -\u003e a\n\u003c/p\u003e\u003cp\u003eto start a server use the\n     doWithServer :: (Show a) =\u003e Int -\u003e ServerAction a -\u003e LineConverter a -\u003e String -\u003e IO ()\n   function.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Network.DoWithServer",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Network-DoWithServer.html",
        "fct-type": "module",
        "title": "DoWithServer"
      },
      "index": {
        "description": "Version This module provides an interface to start server listeing on tcp socket Module is based on simple tcp server found here http sequence.complete.org node You have to implement functions type ServerAction Client Client IO Client and type LineConverter String to start server use the doWithServer Show Int ServerAction LineConverter String IO function",
        "hierarchy": "Holumbus Network DoWithServer",
        "module": "Holumbus.Network.DoWithServer",
        "name": "DoWithServer",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Do With Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-DoWithServer.html#t:Client",
      "description": {
        "fct-descr": "\u003cp\u003ethe connecting client type\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.DoWithServer",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-DoWithServer.html#Client",
        "fct-type": "data",
        "title": "Client"
      },
      "index": {
        "description": "the connecting client type",
        "hierarchy": "Holumbus Network DoWithServer",
        "module": "Holumbus.Network.DoWithServer",
        "name": "Client",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-DoWithServer.html#t:LineConverter",
      "description": {
        "fct-descr": "\u003cp\u003econverts the string read by hGetLine to your datatype\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.DoWithServer",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Network-DoWithServer.html#LineConverter",
        "fct-type": "type",
        "title": "LineConverter"
      },
      "index": {
        "description": "converts the string read by hGetLine to your datatype",
        "hierarchy": "Holumbus Network DoWithServer",
        "module": "Holumbus.Network.DoWithServer",
        "name": "LineConverter",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Line Converter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-DoWithServer.html#t:ServerAction",
      "description": {
        "fct-descr": "\u003cp\u003etype for call back function that is executed within server cycle\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.DoWithServer",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Network-DoWithServer.html#ServerAction",
        "fct-type": "type",
        "title": "ServerAction"
      },
      "index": {
        "description": "type for call back function that is executed within server cycle",
        "hierarchy": "Holumbus Network DoWithServer",
        "module": "Holumbus.Network.DoWithServer",
        "name": "ServerAction",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Server Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-DoWithServer.html#v:Client",
      "description": {
        "fct-module": "Holumbus.Network.DoWithServer",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Client (TChan a) Handle HostName PortNumber",
        "fct-source": "src/Holumbus-Network-DoWithServer.html#Client",
        "fct-type": "function",
        "title": "Client"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network DoWithServer",
        "module": "Holumbus.Network.DoWithServer",
        "name": "Client",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-DoWithServer.html#v:doWithServer",
      "description": {
        "fct-descr": "\u003cp\u003eexecute a ServerAction wrapped by the tcp server\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.DoWithServer",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int -\u003e ServerAction a -\u003e LineConverter a -\u003e String -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-DoWithServer.html#doWithServer",
        "fct-type": "function",
        "title": "doWithServer"
      },
      "index": {
        "description": "execute ServerAction wrapped by the tcp server",
        "hierarchy": "Holumbus Network DoWithServer",
        "module": "Holumbus.Network.DoWithServer",
        "name": "doWithServer",
        "normalized": "Int-\u003eServerAction a-\u003eLineConverter a-\u003eString-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "With Server",
        "signature": "Int-\u003eServerAction a-\u003eLineConverter a-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Messages.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eGeneral functions for the transmission of messages over the Holumbus-Ports.\n  You don't need these functions, but they make your life much easier.\n\u003c/p\u003e\u003cp\u003eThe mailbox concept doesn't deal with the request and response scheme\n  very well, but with this module, all the boring stuff is solved. The function\n  performPortAction will do everything for you. If you find it boring to write\n  a seperate listener-thread for every mailbox you want to read from, you\n  might look at the startRequestDispatcher and stopRequestDispatcher functions. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Network.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Network-Messages.html",
        "fct-type": "module",
        "title": "Messages"
      },
      "index": {
        "description": "Version General functions for the transmission of messages over the Holumbus-Ports You don need these functions but they make your life much easier The mailbox concept doesn deal with the request and response scheme very well but with this module all the boring stuff is solved The function performPortAction will do everything for you If you find it boring to write seperate listener-thread for every mailbox you want to read from you might look at the startRequestDispatcher and stopRequestDispatcher functions",
        "hierarchy": "Holumbus Network Messages",
        "module": "Holumbus.Network.Messages",
        "name": "Messages",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Messages",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Messages.html#t:RspMsg",
      "description": {
        "fct-descr": "\u003cp\u003eThe typeclass for the response messages. We want to react if an error\n   message is received an this interface helps us to detect and create such\n   a message. The unknown message will be send back, if the server doesn't\n   understand our request.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "class",
        "fct-source": "src/Holumbus-Network-Messages.html#RspMsg",
        "fct-type": "class",
        "title": "RspMsg"
      },
      "index": {
        "description": "The typeclass for the response messages We want to react if an error message is received an this interface helps us to detect and create such message The unknown message will be send back if the server doesn understand our request",
        "hierarchy": "Holumbus Network Messages",
        "module": "Holumbus.Network.Messages",
        "name": "RspMsg",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Rsp Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Messages.html#v:getErrorMsg",
      "description": {
        "fct-module": "Holumbus.Network.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "m -\u003e String",
        "fct-source": "src/Holumbus-Network-Messages.html#getErrorMsg",
        "fct-type": "method",
        "title": "getErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Messages",
        "module": "Holumbus.Network.Messages",
        "name": "getErrorMsg",
        "normalized": "a-\u003eString",
        "package": "Holumbus-Distribution",
        "partial": "Error Msg",
        "signature": "m-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Messages.html#v:handleRequest",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a function and send its result to the specified port.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Port b-\u003e IO c-\u003e (c -\u003e b)-\u003e IO ()",
        "fct-type": "function",
        "title": "handleRequest"
      },
      "index": {
        "description": "Execute function and send its result to the specified port",
        "hierarchy": "Holumbus Network Messages",
        "module": "Holumbus.Network.Messages",
        "name": "handleRequest",
        "normalized": "Port a-\u003eIO b-\u003e(b-\u003ea)-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Request",
        "signature": "Port b-\u003eIO c-\u003e(c-\u003eb)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Messages.html#v:isError",
      "description": {
        "fct-module": "Holumbus.Network.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "m -\u003e Bool",
        "fct-source": "src/Holumbus-Network-Messages.html#isError",
        "fct-type": "method",
        "title": "isError"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Messages",
        "module": "Holumbus.Network.Messages",
        "name": "isError",
        "normalized": "a-\u003eBool",
        "package": "Holumbus-Distribution",
        "partial": "Error",
        "signature": "m-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Messages.html#v:isUnknown",
      "description": {
        "fct-module": "Holumbus.Network.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "m -\u003e Bool",
        "fct-source": "src/Holumbus-Network-Messages.html#isUnknown",
        "fct-type": "method",
        "title": "isUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Messages",
        "module": "Holumbus.Network.Messages",
        "name": "isUnknown",
        "normalized": "a-\u003eBool",
        "package": "Holumbus-Distribution",
        "partial": "Unknown",
        "signature": "m-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Messages.html#v:mkErrorMsg",
      "description": {
        "fct-module": "Holumbus.Network.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e m",
        "fct-source": "src/Holumbus-Network-Messages.html#mkErrorMsg",
        "fct-type": "method",
        "title": "mkErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Messages",
        "module": "Holumbus.Network.Messages",
        "name": "mkErrorMsg",
        "normalized": "String-\u003ea",
        "package": "Holumbus-Distribution",
        "partial": "Error Msg",
        "signature": "String-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Messages.html#v:performPortAction",
      "description": {
        "fct-descr": "\u003cp\u003eSends a request to the server (stream) and handles the response and all\n   error cases. Very helpful when simulating a request response scheme\n   with the mailboxes.                    \n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Port a-\u003e Stream b-\u003e Int-\u003e a-\u003e (b -\u003e IO (Maybe c))-\u003e IO c",
        "fct-type": "function",
        "title": "performPortAction"
      },
      "index": {
        "description": "Sends request to the server stream and handles the response and all error cases Very helpful when simulating request response scheme with the mailboxes",
        "hierarchy": "Holumbus Network Messages",
        "module": "Holumbus.Network.Messages",
        "name": "performPortAction",
        "normalized": "Port a-\u003eStream b-\u003eInt-\u003ea-\u003e(b-\u003eIO(Maybe c))-\u003eIO c",
        "package": "Holumbus-Distribution",
        "partial": "Port Action",
        "signature": "Port a-\u003eStream b-\u003eInt-\u003ea-\u003e(b-\u003eIO(Maybe c))-\u003eIO c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Messages.html#v:startRequestDispatcher",
      "description": {
        "fct-descr": "\u003cp\u003eThe server-side request dispatcher handles all incomming responses.\n   The dispatcher runs in its own thread and should not be killed by\n   any exceptions which will be raised in the handling process.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Thread-\u003e Stream a-\u003e (a -\u003e Port b -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "startRequestDispatcher"
      },
      "index": {
        "description": "The server-side request dispatcher handles all incomming responses The dispatcher runs in its own thread and should not be killed by any exceptions which will be raised in the handling process",
        "hierarchy": "Holumbus Network Messages",
        "module": "Holumbus.Network.Messages",
        "name": "startRequestDispatcher",
        "normalized": "Thread-\u003eStream a-\u003e(a-\u003ePort b-\u003eIO())-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Request Dispatcher",
        "signature": "Thread-\u003eStream a-\u003e(a-\u003ePort b-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Messages.html#v:stopRequestDispatcher",
      "description": {
        "fct-descr": "\u003cp\u003eStops the request dispatcher.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Thread -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-Messages.html#stopRequestDispatcher",
        "fct-type": "function",
        "title": "stopRequestDispatcher"
      },
      "index": {
        "description": "Stops the request dispatcher",
        "hierarchy": "Holumbus Network Messages",
        "module": "Holumbus.Network.Messages",
        "name": "stopRequestDispatcher",
        "normalized": "Thread-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Request Dispatcher",
        "signature": "Thread-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eStream and Port datatype for internal an external process communication.\n  Useful for communikation of distributed systems.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Network-Port.html",
        "fct-type": "module",
        "title": "Port"
      },
      "index": {
        "description": "Version Stream and Port datatype for internal an external process communication Useful for communikation of distributed systems",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "Port",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003eMessage Datatype.\n   We are sending additional information, to do debugging\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Port.html#Message",
        "fct-type": "data",
        "title": "Message"
      },
      "index": {
        "description": "Message Datatype We are sending additional information to do debugging",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "Message",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#t:MessageType",
      "description": {
        "fct-descr": "\u003cp\u003eMessage Type\n   Is it an internal Message or does it come from an external Node?\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Port.html#MessageType",
        "fct-type": "data",
        "title": "MessageType"
      },
      "index": {
        "description": "Message Type Is it an internal Message or does it come from an external Node",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "MessageType",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Message Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#t:Port",
      "description": {
        "fct-descr": "\u003cp\u003eThe port datatype.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Port.html#Port",
        "fct-type": "data",
        "title": "Port"
      },
      "index": {
        "description": "The port datatype",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "Port",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#t:SocketId",
      "description": {
        "fct-descr": "\u003cp\u003eAll data, that is needed to address a socket.\n   Contains the hostname and the portNumber.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Core.html#SocketId",
        "fct-type": "data",
        "title": "SocketId"
      },
      "index": {
        "description": "All data that is needed to address socket Contains the hostname and the portNumber",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "SocketId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Socket Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#t:Stream",
      "description": {
        "fct-descr": "\u003cp\u003eThe stream datatype\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Port.html#Stream",
        "fct-type": "data",
        "title": "Stream"
      },
      "index": {
        "description": "The stream datatype",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "Stream",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#t:StreamName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a stream.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Network-Port.html#StreamName",
        "fct-type": "type",
        "title": "StreamName"
      },
      "index": {
        "description": "The name of stream",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "StreamName",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Stream Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#t:StreamType",
      "description": {
        "fct-descr": "\u003cp\u003eThe stream type, determines the accessibility of a stream\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Port.html#StreamType",
        "fct-type": "data",
        "title": "StreamType"
      },
      "index": {
        "description": "The stream type determines the accessibility of stream",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "StreamType",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Stream Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:Port",
      "description": {
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Port",
        "fct-source": "src/Holumbus-Network-Port.html#Port",
        "fct-type": "function",
        "title": "Port"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "Port",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:STGlobal",
      "description": {
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "STGlobal",
        "fct-source": "src/Holumbus-Network-Port.html#StreamType",
        "fct-type": "function",
        "title": "STGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "STGlobal",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "STGlobal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:STLocal",
      "description": {
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "STLocal",
        "fct-source": "src/Holumbus-Network-Port.html#StreamType",
        "fct-type": "function",
        "title": "STLocal"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "STLocal",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "STLocal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:STPrivate",
      "description": {
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "STPrivate",
        "fct-source": "src/Holumbus-Network-Port.html#StreamType",
        "fct-type": "function",
        "title": "STPrivate"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "STPrivate",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "STPrivate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:SocketId",
      "description": {
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SocketId HostName PortNumber",
        "fct-source": "src/Holumbus-Network-Core.html#SocketId",
        "fct-type": "function",
        "title": "SocketId"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "SocketId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Socket Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:closeStream",
      "description": {
        "fct-descr": "\u003cp\u003eCloses a stream.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Stream a -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-Port.html#closeStream",
        "fct-type": "function",
        "title": "closeStream"
      },
      "index": {
        "description": "Closes stream",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "closeStream",
        "normalized": "Stream a-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Stream",
        "signature": "Stream a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:getGenericData",
      "description": {
        "fct-descr": "\u003cp\u003eGets the generic data (usually the return port) of a message.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Message a -\u003e Maybe ByteString",
        "fct-source": "src/Holumbus-Network-Port.html#getGenericData",
        "fct-type": "function",
        "title": "getGenericData"
      },
      "index": {
        "description": "Gets the generic data usually the return port of message",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "getGenericData",
        "normalized": "Message a-\u003eMaybe ByteString",
        "package": "Holumbus-Distribution",
        "partial": "Generic Data",
        "signature": "Message a-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:getMessageData",
      "description": {
        "fct-descr": "\u003cp\u003eGets the data of a message.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Message a -\u003e a",
        "fct-source": "src/Holumbus-Network-Port.html#getMessageData",
        "fct-type": "function",
        "title": "getMessageData"
      },
      "index": {
        "description": "Gets the data of message",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "getMessageData",
        "normalized": "Message a-\u003ea",
        "package": "Holumbus-Distribution",
        "partial": "Message Data",
        "signature": "Message a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:getMessageType",
      "description": {
        "fct-descr": "\u003cp\u003eGets the type of a message.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Message a -\u003e MessageType",
        "fct-source": "src/Holumbus-Network-Port.html#getMessageType",
        "fct-type": "function",
        "title": "getMessageType"
      },
      "index": {
        "description": "Gets the type of message",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "getMessageType",
        "normalized": "Message a-\u003eMessageType",
        "package": "Holumbus-Distribution",
        "partial": "Message Type",
        "signature": "Message a-\u003eMessageType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:isEmptyStream",
      "description": {
        "fct-descr": "\u003cp\u003eTest, if the stream contains new messages.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Stream a -\u003e IO Bool",
        "fct-source": "src/Holumbus-Network-Port.html#isEmptyStream",
        "fct-type": "function",
        "title": "isEmptyStream"
      },
      "index": {
        "description": "Test if the stream contains new messages",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "isEmptyStream",
        "normalized": "Stream a-\u003eIO Bool",
        "package": "Holumbus-Distribution",
        "partial": "Empty Stream",
        "signature": "Stream a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:isPortLocal",
      "description": {
        "fct-descr": "\u003cp\u003eTest, if a port is local.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Port a -\u003e IO Bool",
        "fct-source": "src/Holumbus-Network-Port.html#isPortLocal",
        "fct-type": "function",
        "title": "isPortLocal"
      },
      "index": {
        "description": "Test if port is local",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "isPortLocal",
        "normalized": "Port a-\u003eIO Bool",
        "package": "Holumbus-Distribution",
        "partial": "Port Local",
        "signature": "Port a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:newGlobalPort",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new port to a global stream, only its name is needed.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "StreamName -\u003e IO (Port a)",
        "fct-source": "src/Holumbus-Network-Port.html#newGlobalPort",
        "fct-type": "function",
        "title": "newGlobalPort"
      },
      "index": {
        "description": "Creates new port to global stream only its name is needed",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "newGlobalPort",
        "normalized": "StreamName-\u003eIO(Port a)",
        "package": "Holumbus-Distribution",
        "partial": "Global Port",
        "signature": "StreamName-\u003eIO(Port a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:newGlobalStream",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new global stream.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "StreamName -\u003e IO (Stream a)",
        "fct-source": "src/Holumbus-Network-Port.html#newGlobalStream",
        "fct-type": "function",
        "title": "newGlobalStream"
      },
      "index": {
        "description": "Creates new global stream",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "newGlobalStream",
        "normalized": "StreamName-\u003eIO(Stream a)",
        "package": "Holumbus-Distribution",
        "partial": "Global Stream",
        "signature": "StreamName-\u003eIO(Stream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:newLocalStream",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new local stream.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Maybe StreamName -\u003e IO (Stream a)",
        "fct-source": "src/Holumbus-Network-Port.html#newLocalStream",
        "fct-type": "function",
        "title": "newLocalStream"
      },
      "index": {
        "description": "Creates new local stream",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "newLocalStream",
        "normalized": "Maybe StreamName-\u003eIO(Stream a)",
        "package": "Holumbus-Distribution",
        "partial": "Local Stream",
        "signature": "Maybe StreamName-\u003eIO(Stream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:newPort",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new port from a streamname and its socketId.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "StreamName -\u003e Maybe SocketId -\u003e IO (Port a)",
        "fct-source": "src/Holumbus-Network-Port.html#newPort",
        "fct-type": "function",
        "title": "newPort"
      },
      "index": {
        "description": "Creates new port from streamname and its socketId",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "newPort",
        "normalized": "StreamName-\u003eMaybe SocketId-\u003eIO(Port a)",
        "package": "Holumbus-Distribution",
        "partial": "Port",
        "signature": "StreamName-\u003eMaybe SocketId-\u003eIO(Port a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:newPortFromStream",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new Port, which is bound to a stream.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Stream a -\u003e IO (Port a)",
        "fct-source": "src/Holumbus-Network-Port.html#newPortFromStream",
        "fct-type": "function",
        "title": "newPortFromStream"
      },
      "index": {
        "description": "Creates new Port which is bound to stream",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "newPortFromStream",
        "normalized": "Stream a-\u003eIO(Port a)",
        "package": "Holumbus-Distribution",
        "partial": "Port From Stream",
        "signature": "Stream a-\u003eIO(Port a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:newPrivateStream",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new private stream.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Maybe StreamName -\u003e IO (Stream a)",
        "fct-source": "src/Holumbus-Network-Port.html#newPrivateStream",
        "fct-type": "function",
        "title": "newPrivateStream"
      },
      "index": {
        "description": "Creates new private stream",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "newPrivateStream",
        "normalized": "Maybe StreamName-\u003eIO(Stream a)",
        "package": "Holumbus-Distribution",
        "partial": "Private Stream",
        "signature": "Maybe StreamName-\u003eIO(Stream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:newStream",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral function for creating a new stream.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "StreamType -\u003e Maybe StreamName -\u003e Maybe PortNumber -\u003e IO (Stream a)",
        "fct-source": "src/Holumbus-Network-Port.html#newStream",
        "fct-type": "function",
        "title": "newStream"
      },
      "index": {
        "description": "General function for creating new stream",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "newStream",
        "normalized": "StreamType-\u003eMaybe StreamName-\u003eMaybe PortNumber-\u003eIO(Stream a)",
        "package": "Holumbus-Distribution",
        "partial": "Stream",
        "signature": "StreamType-\u003eMaybe StreamName-\u003eMaybe PortNumber-\u003eIO(Stream a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:p_SocketId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Maybe SocketId",
        "fct-source": "src/Holumbus-Network-Port.html#Port",
        "fct-type": "function",
        "title": "p_SocketId"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "p_SocketId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Socket Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:p_StreamName",
      "description": {
        "fct-descr": "\u003cp\u003ethe name of the destination stream\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "StreamName",
        "fct-source": "src/Holumbus-Network-Port.html#Port",
        "fct-type": "function",
        "title": "p_StreamName"
      },
      "index": {
        "description": "the name of the destination stream",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "p_StreamName",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Stream Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:printStreamController",
      "description": {
        "fct-descr": "\u003cp\u003ePrints the internal data of the stream controller to stdout,\n   useful for debugging.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "IO ()",
        "fct-source": "src/Holumbus-Network-Port.html#printStreamController",
        "fct-type": "function",
        "title": "printStreamController"
      },
      "index": {
        "description": "Prints the internal data of the stream controller to stdout useful for debugging",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "printStreamController",
        "normalized": "IO()",
        "package": "Holumbus-Distribution",
        "partial": "Stream Controller",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:readPortFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eReads a port-description from a file.\n   Quite useful fpr sharing ports between programs\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e IO (Port a)",
        "fct-source": "src/Holumbus-Network-Port.html#readPortFromFile",
        "fct-type": "function",
        "title": "readPortFromFile"
      },
      "index": {
        "description": "Reads port-description from file Quite useful fpr sharing ports between programs",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "readPortFromFile",
        "normalized": "FilePath-\u003eIO(Port a)",
        "package": "Holumbus-Distribution",
        "partial": "Port From File",
        "signature": "FilePath-\u003eIO(Port a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:readStream",
      "description": {
        "fct-descr": "\u003cp\u003eReads the data packet of the next message from a stream.\n   If stream is empty, this function will block until a new message arrives.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Stream a -\u003e IO a",
        "fct-source": "src/Holumbus-Network-Port.html#readStream",
        "fct-type": "function",
        "title": "readStream"
      },
      "index": {
        "description": "Reads the data packet of the next message from stream If stream is empty this function will block until new message arrives",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "readStream",
        "normalized": "Stream a-\u003eIO a",
        "package": "Holumbus-Distribution",
        "partial": "Stream",
        "signature": "Stream a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:readStreamMsg",
      "description": {
        "fct-descr": "\u003cp\u003eReads the next message from a stream (data packet + message header).\n   If stream is empty, this function will block until a new message arrives.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Stream a -\u003e IO (Message a)",
        "fct-source": "src/Holumbus-Network-Port.html#readStreamMsg",
        "fct-type": "function",
        "title": "readStreamMsg"
      },
      "index": {
        "description": "Reads the next message from stream data packet message header If stream is empty this function will block until new message arrives",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "readStreamMsg",
        "normalized": "Stream a-\u003eIO(Message a)",
        "package": "Holumbus-Distribution",
        "partial": "Stream Msg",
        "signature": "Stream a-\u003eIO(Message a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend data to the stream of the port.\n   The data is send via network, if the stream is located on an external\n   processor\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Port a -\u003e a -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-Port.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send data to the stream of the port The data is send via network if the stream is located on an external processor",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "send",
        "normalized": "Port a-\u003ea-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": "Port a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:sendWithGeneric",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ca\u003esend\u003c/a\u003e, but here we can give some generic data (e.g. a port for reply \n   messages).\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Port a -\u003e a -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-Port.html#sendWithGeneric",
        "fct-type": "function",
        "title": "sendWithGeneric"
      },
      "index": {
        "description": "Like send but here we can give some generic data e.g port for reply messages",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "sendWithGeneric",
        "normalized": "Port a-\u003ea-\u003eByteString-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "With Generic",
        "signature": "Port a-\u003ea-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:sendWithMaybeGeneric",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ca\u003esendWithGeneric\u003c/a\u003e, but the generic data is optional\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Port a -\u003e a -\u003e Maybe ByteString -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-Port.html#sendWithMaybeGeneric",
        "fct-type": "function",
        "title": "sendWithMaybeGeneric"
      },
      "index": {
        "description": "Like sendWithGeneric but the generic data is optional",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "sendWithMaybeGeneric",
        "normalized": "Port a-\u003ea-\u003eMaybe ByteString-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "With Maybe Generic",
        "signature": "Port a-\u003ea-\u003eMaybe ByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:setPortRegistry",
      "description": {
        "fct-descr": "\u003cp\u003eSets the link to the PortRegistry in the stream controller \n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "r -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-Port.html#setPortRegistry",
        "fct-type": "function",
        "title": "setPortRegistry"
      },
      "index": {
        "description": "Sets the link to the PortRegistry in the stream controller",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "setPortRegistry",
        "normalized": "a-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry",
        "signature": "r-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:time1",
      "description": {
        "fct-descr": "\u003cp\u003eOne second\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Network-Port.html#time1",
        "fct-type": "function",
        "title": "time1"
      },
      "index": {
        "description": "One second",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "time1",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:time10",
      "description": {
        "fct-descr": "\u003cp\u003e10 seconds\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Network-Port.html#time10",
        "fct-type": "function",
        "title": "time10"
      },
      "index": {
        "description": "seconds",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "time10",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:time120",
      "description": {
        "fct-descr": "\u003cp\u003e120 seconds\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Network-Port.html#time120",
        "fct-type": "function",
        "title": "time120"
      },
      "index": {
        "description": "seconds",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "time120",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:time30",
      "description": {
        "fct-descr": "\u003cp\u003e30 seconds\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Network-Port.html#time30",
        "fct-type": "function",
        "title": "time30"
      },
      "index": {
        "description": "seconds",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "time30",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:time60",
      "description": {
        "fct-descr": "\u003cp\u003e60 seconds\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Network-Port.html#time60",
        "fct-type": "function",
        "title": "time60"
      },
      "index": {
        "description": "seconds",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "time60",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:timeIndefinitely",
      "description": {
        "fct-descr": "\u003cp\u003eWait how long it takes\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Int",
        "fct-source": "src/Holumbus-Network-Port.html#timeIndefinitely",
        "fct-type": "function",
        "title": "timeIndefinitely"
      },
      "index": {
        "description": "Wait how long it takes",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "timeIndefinitely",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Indefinitely",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:tryReadStream",
      "description": {
        "fct-descr": "\u003cp\u003eReads the data packet of the next message from a stream.\n   If stream is empty, this function will immediately return with Nothing.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Stream a -\u003e IO (Maybe a)",
        "fct-source": "src/Holumbus-Network-Port.html#tryReadStream",
        "fct-type": "function",
        "title": "tryReadStream"
      },
      "index": {
        "description": "Reads the data packet of the next message from stream If stream is empty this function will immediately return with Nothing",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "tryReadStream",
        "normalized": "Stream a-\u003eIO(Maybe a)",
        "package": "Holumbus-Distribution",
        "partial": "Read Stream",
        "signature": "Stream a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:tryReadStreamMsg",
      "description": {
        "fct-descr": "\u003cp\u003eReads the next message from a stream (data packet + message header).\n   If stream is empty, this function will immediately return with Nothing.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Stream a -\u003e IO (Maybe (Message a))",
        "fct-source": "src/Holumbus-Network-Port.html#tryReadStreamMsg",
        "fct-type": "function",
        "title": "tryReadStreamMsg"
      },
      "index": {
        "description": "Reads the next message from stream data packet message header If stream is empty this function will immediately return with Nothing",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "tryReadStreamMsg",
        "normalized": "Stream a-\u003eIO(Maybe(Message a))",
        "package": "Holumbus-Distribution",
        "partial": "Read Stream Msg",
        "signature": "Stream a-\u003eIO(Maybe(Message a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:tryWaitReadStream",
      "description": {
        "fct-descr": "\u003cp\u003eReads the data packet of the next message from a stream.\n   If stream is empty, this function will wait for new messages until the \n   time is up and if no message has arrived, return with Nothing.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Stream a -\u003e Int -\u003e IO (Maybe a)",
        "fct-source": "src/Holumbus-Network-Port.html#tryWaitReadStream",
        "fct-type": "function",
        "title": "tryWaitReadStream"
      },
      "index": {
        "description": "Reads the data packet of the next message from stream If stream is empty this function will wait for new messages until the time is up and if no message has arrived return with Nothing",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "tryWaitReadStream",
        "normalized": "Stream a-\u003eInt-\u003eIO(Maybe a)",
        "package": "Holumbus-Distribution",
        "partial": "Wait Read Stream",
        "signature": "Stream a-\u003eInt-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:tryWaitReadStreamMsg",
      "description": {
        "fct-descr": "\u003cp\u003eReads the next message from a stream (data packet + message header).\n   If stream is empty, this function will wait for new messages until the \n   time is up and if no message has arrived, return with Nothing.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Stream a -\u003e Int -\u003e IO (Maybe (Message a))",
        "fct-source": "src/Holumbus-Network-Port.html#tryWaitReadStreamMsg",
        "fct-type": "function",
        "title": "tryWaitReadStreamMsg"
      },
      "index": {
        "description": "Reads the next message from stream data packet message header If stream is empty this function will wait for new messages until the time is up and if no message has arrived return with Nothing",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "tryWaitReadStreamMsg",
        "normalized": "Stream a-\u003eInt-\u003eIO(Maybe(Message a))",
        "package": "Holumbus-Distribution",
        "partial": "Wait Read Stream Msg",
        "signature": "Stream a-\u003eInt-\u003eIO(Maybe(Message a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:withStream",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulates a stream.\n   A new stream is created, then some user-action is done an after that the\n   stream is closed. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "(Stream a -\u003e IO b) -\u003e IO b",
        "fct-source": "src/Holumbus-Network-Port.html#withStream",
        "fct-type": "function",
        "title": "withStream"
      },
      "index": {
        "description": "Encapsulates stream new stream is created then some user-action is done an after that the stream is closed",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "withStream",
        "normalized": "(Stream a-\u003eIO b)-\u003eIO b",
        "package": "Holumbus-Distribution",
        "partial": "Stream",
        "signature": "(Stream a-\u003eIO b)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Port.html#v:writePortToFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrites a port-description to a file.\n   Quite useful fpr sharing ports between programs\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Port",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "Port a -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-Port.html#writePortToFile",
        "fct-type": "function",
        "title": "writePortToFile"
      },
      "index": {
        "description": "Writes port-description to file Quite useful fpr sharing ports between programs",
        "hierarchy": "Holumbus Network Port",
        "module": "Holumbus.Network.Port",
        "name": "writePortToFile",
        "normalized": "Port a-\u003eFilePath-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Port To File",
        "signature": "Port a-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis modules defines the messages from and to the PortRegistry.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html",
        "fct-type": "module",
        "title": "Messages"
      },
      "index": {
        "description": "Version This modules defines the messages from and to the PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "Messages",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Messages",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#t:PortRegistryRequestMessage",
      "description": {
        "fct-descr": "\u003cp\u003eThe messages TO the PortRegistry.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryRequestMessage",
        "fct-type": "data",
        "title": "PortRegistryRequestMessage"
      },
      "index": {
        "description": "The messages TO the PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PortRegistryRequestMessage",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Request Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#t:PortRegistryRequestPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe Port for the messages TO the PortRegistry.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryRequestPort",
        "fct-type": "type",
        "title": "PortRegistryRequestPort"
      },
      "index": {
        "description": "The Port for the messages TO the PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PortRegistryRequestPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Request Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#t:PortRegistryRequestStream",
      "description": {
        "fct-descr": "\u003cp\u003eThe Stream for the messages TO the PortRegistry.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryRequestStream",
        "fct-type": "type",
        "title": "PortRegistryRequestStream"
      },
      "index": {
        "description": "The Stream for the messages TO the PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PortRegistryRequestStream",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Request Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#t:PortRegistryResponseMessage",
      "description": {
        "fct-descr": "\u003cp\u003eThe messages FROM the PortRegistry.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryResponseMessage",
        "fct-type": "data",
        "title": "PortRegistryResponseMessage"
      },
      "index": {
        "description": "The messages FROM the PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PortRegistryResponseMessage",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Response Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#t:PortRegistryResponsePort",
      "description": {
        "fct-descr": "\u003cp\u003eThe Port for the messages FROM the PortRegistry.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryResponsePort",
        "fct-type": "type",
        "title": "PortRegistryResponsePort"
      },
      "index": {
        "description": "The Port for the messages FROM the PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PortRegistryResponsePort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Response Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#t:PortRegistryResponseStream",
      "description": {
        "fct-descr": "\u003cp\u003eThe Stream for the messages FROM the PortRegistry.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryResponseStream",
        "fct-type": "type",
        "title": "PortRegistryResponseStream"
      },
      "index": {
        "description": "The Stream for the messages FROM the PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PortRegistryResponseStream",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Response Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#v:PRReqGetPorts",
      "description": {
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PRReqGetPorts",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryRequestMessage",
        "fct-type": "function",
        "title": "PRReqGetPorts"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PRReqGetPorts",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "PRReq Get Ports",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#v:PRReqLookup",
      "description": {
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PRReqLookup StreamName",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryRequestMessage",
        "fct-type": "function",
        "title": "PRReqLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PRReqLookup",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "PRReq Lookup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#v:PRReqRegister",
      "description": {
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PRReqRegister StreamName SocketId",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryRequestMessage",
        "fct-type": "function",
        "title": "PRReqRegister"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PRReqRegister",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "PRReq Register",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#v:PRReqUnknown",
      "description": {
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PRReqUnknown",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryRequestMessage",
        "fct-type": "function",
        "title": "PRReqUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PRReqUnknown",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "PRReq Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#v:PRReqUnregister",
      "description": {
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PRReqUnregister StreamName",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryRequestMessage",
        "fct-type": "function",
        "title": "PRReqUnregister"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PRReqUnregister",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "PRReq Unregister",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#v:PRRspError",
      "description": {
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PRRspError String",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryResponseMessage",
        "fct-type": "function",
        "title": "PRRspError"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PRRspError",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "PRRsp Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#v:PRRspGetPorts",
      "description": {
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PRRspGetPorts [(String, SocketId)]",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryResponseMessage",
        "fct-type": "function",
        "title": "PRRspGetPorts"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PRRspGetPorts",
        "normalized": "PRRspGetPorts[(String,SocketId)]",
        "package": "Holumbus-Distribution",
        "partial": "PRRsp Get Ports",
        "signature": "PRRspGetPorts[(String,SocketId)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#v:PRRspLookup",
      "description": {
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PRRspLookup (Maybe SocketId)",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryResponseMessage",
        "fct-type": "function",
        "title": "PRRspLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PRRspLookup",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "PRRsp Lookup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#v:PRRspSuccess",
      "description": {
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PRRspSuccess",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryResponseMessage",
        "fct-type": "function",
        "title": "PRRspSuccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PRRspSuccess",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "PRRsp Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-Messages.html#v:PRRspUnknown",
      "description": {
        "fct-module": "Holumbus.Network.PortRegistry.Messages",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PRRspUnknown",
        "fct-source": "src/Holumbus-Network-PortRegistry-Messages.html#PortRegistryResponseMessage",
        "fct-type": "function",
        "title": "PRRspUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Holumbus Network PortRegistry Messages",
        "module": "Holumbus.Network.PortRegistry.Messages",
        "name": "PRRspUnknown",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "PRRsp Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-PortRegistryData.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module contains the main datatype for the PortRegistry.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.PortRegistryData",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Network-PortRegistry-PortRegistryData.html",
        "fct-type": "module",
        "title": "PortRegistryData"
      },
      "index": {
        "description": "Version This module contains the main datatype for the PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry PortRegistryData",
        "module": "Holumbus.Network.PortRegistry.PortRegistryData",
        "name": "PortRegistryData",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-PortRegistryData.html#t:PortRegistryData",
      "description": {
        "fct-descr": "\u003cp\u003eThe data needed by the PortRegistry\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.PortRegistryData",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-PortRegistry-PortRegistryData.html#PortRegistryData",
        "fct-type": "data",
        "title": "PortRegistryData"
      },
      "index": {
        "description": "The data needed by the PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry PortRegistryData",
        "module": "Holumbus.Network.PortRegistry.PortRegistryData",
        "name": "PortRegistryData",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-PortRegistryData.html#v:closePortRegistryData",
      "description": {
        "fct-descr": "\u003cp\u003eCloses the PortRegistry with its streams and threads.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.PortRegistryData",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PortRegistryData -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-PortRegistry-PortRegistryData.html#closePortRegistryData",
        "fct-type": "function",
        "title": "closePortRegistryData"
      },
      "index": {
        "description": "Closes the PortRegistry with its streams and threads",
        "hierarchy": "Holumbus Network PortRegistry PortRegistryData",
        "module": "Holumbus.Network.PortRegistry.PortRegistryData",
        "name": "closePortRegistryData",
        "normalized": "PortRegistryData-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Data",
        "signature": "PortRegistryData-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-PortRegistryData.html#v:getPortRegistryRequestPort",
      "description": {
        "fct-descr": "\u003cp\u003eGet the RequestPort of the PortRegistry.\n   It can be used to give access to the PortRegistry, eg. you can serialize\n   this information and transfer it over the network to grant access to the\n   clients.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.PortRegistryData",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PortRegistryData -\u003e IO PortRegistryRequestPort",
        "fct-source": "src/Holumbus-Network-PortRegistry-PortRegistryData.html#getPortRegistryRequestPort",
        "fct-type": "function",
        "title": "getPortRegistryRequestPort"
      },
      "index": {
        "description": "Get the RequestPort of the PortRegistry It can be used to give access to the PortRegistry eg you can serialize this information and transfer it over the network to grant access to the clients",
        "hierarchy": "Holumbus Network PortRegistry PortRegistryData",
        "module": "Holumbus.Network.PortRegistry.PortRegistryData",
        "name": "getPortRegistryRequestPort",
        "normalized": "PortRegistryData-\u003eIO PortRegistryRequestPort",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Request Port",
        "signature": "PortRegistryData-\u003eIO PortRegistryRequestPort"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-PortRegistryData.html#v:newPortRegistryData",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new PortRegistry.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.PortRegistryData",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "StreamName -\u003e Maybe PortNumber -\u003e IO PortRegistryData",
        "fct-source": "src/Holumbus-Network-PortRegistry-PortRegistryData.html#newPortRegistryData",
        "fct-type": "function",
        "title": "newPortRegistryData"
      },
      "index": {
        "description": "Creates new PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry PortRegistryData",
        "module": "Holumbus.Network.PortRegistry.PortRegistryData",
        "name": "newPortRegistryData",
        "normalized": "StreamName-\u003eMaybe PortNumber-\u003eIO PortRegistryData",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Data",
        "signature": "StreamName-\u003eMaybe PortNumber-\u003eIO PortRegistryData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-PortRegistryData.html#v:setPortRegistry",
      "description": {
        "fct-descr": "\u003cp\u003eSets the link to the PortRegistry in the stream controller \n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.PortRegistryData",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "r -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-Port.html#setPortRegistry",
        "fct-type": "function",
        "title": "setPortRegistry"
      },
      "index": {
        "description": "Sets the link to the PortRegistry in the stream controller",
        "hierarchy": "Holumbus Network PortRegistry PortRegistryData",
        "module": "Holumbus.Network.PortRegistry.PortRegistryData",
        "name": "setPortRegistry",
        "normalized": "a-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry",
        "signature": "r-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-PortRegistryPort.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThis module contains the Interface for external access to the PortRegistry.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.PortRegistryPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Network-PortRegistry-PortRegistryPort.html",
        "fct-type": "module",
        "title": "PortRegistryPort"
      },
      "index": {
        "description": "Version This module contains the Interface for external access to the PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry PortRegistryPort",
        "module": "Holumbus.Network.PortRegistry.PortRegistryPort",
        "name": "PortRegistryPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-PortRegistryPort.html#t:PortRegistryPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe datatype for the PortRegistry remote interface. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.PortRegistryPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-PortRegistry-PortRegistryPort.html#PortRegistryPort",
        "fct-type": "data",
        "title": "PortRegistryPort"
      },
      "index": {
        "description": "The datatype for the PortRegistry remote interface",
        "hierarchy": "Holumbus Network PortRegistry PortRegistryPort",
        "module": "Holumbus.Network.PortRegistry.PortRegistryPort",
        "name": "PortRegistryPort",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-PortRegistryPort.html#v:newPortRegistryFromData",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new PortRegistryPort from the StreamName and SocketId.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.PortRegistryPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "StreamName -\u003e SocketId -\u003e IO PortRegistryPort",
        "fct-source": "src/Holumbus-Network-PortRegistry-PortRegistryPort.html#newPortRegistryFromData",
        "fct-type": "function",
        "title": "newPortRegistryFromData"
      },
      "index": {
        "description": "Creates new PortRegistryPort from the StreamName and SocketId",
        "hierarchy": "Holumbus Network PortRegistry PortRegistryPort",
        "module": "Holumbus.Network.PortRegistry.PortRegistryPort",
        "name": "newPortRegistryFromData",
        "normalized": "StreamName-\u003eSocketId-\u003eIO PortRegistryPort",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry From Data",
        "signature": "StreamName-\u003eSocketId-\u003eIO PortRegistryPort"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-PortRegistryPort.html#v:newPortRegistryFromXmlFile",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new PortRegistryPort from a XML-File.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.PortRegistryPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "FilePath -\u003e IO PortRegistryPort",
        "fct-source": "src/Holumbus-Network-PortRegistry-PortRegistryPort.html#newPortRegistryFromXmlFile",
        "fct-type": "function",
        "title": "newPortRegistryFromXmlFile"
      },
      "index": {
        "description": "Creates new PortRegistryPort from XML-File",
        "hierarchy": "Holumbus Network PortRegistry PortRegistryPort",
        "module": "Holumbus.Network.PortRegistry.PortRegistryPort",
        "name": "newPortRegistryFromXmlFile",
        "normalized": "FilePath-\u003eIO PortRegistryPort",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry From Xml File",
        "signature": "FilePath-\u003eIO PortRegistryPort"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-PortRegistryPort.html#v:newPortRegistryPort",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new PortRegistryPort from a port-object.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.PortRegistryPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "PortRegistryRequestPort -\u003e PortRegistryPort",
        "fct-source": "src/Holumbus-Network-PortRegistry-PortRegistryPort.html#newPortRegistryPort",
        "fct-type": "function",
        "title": "newPortRegistryPort"
      },
      "index": {
        "description": "Creates new PortRegistryPort from port-object",
        "hierarchy": "Holumbus Network PortRegistry PortRegistryPort",
        "module": "Holumbus.Network.PortRegistry.PortRegistryPort",
        "name": "newPortRegistryPort",
        "normalized": "PortRegistryRequestPort-\u003ePortRegistryPort",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry Port",
        "signature": "PortRegistryRequestPort-\u003ePortRegistryPort"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry-PortRegistryPort.html#v:setPortRegistry",
      "description": {
        "fct-descr": "\u003cp\u003eSets the link to the PortRegistry in the stream controller \n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry.PortRegistryPort",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "r -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-Port.html#setPortRegistry",
        "fct-type": "function",
        "title": "setPortRegistry"
      },
      "index": {
        "description": "Sets the link to the PortRegistry in the stream controller",
        "hierarchy": "Holumbus Network PortRegistry PortRegistryPort",
        "module": "Holumbus.Network.PortRegistry.PortRegistryPort",
        "name": "setPortRegistry",
        "normalized": "a-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry",
        "signature": "r-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eThe typeclass for the PortRegistry. Contains all PortRegistry functions which\n  can accessed remotely by the clients.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Network.PortRegistry",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Network-PortRegistry.html",
        "fct-type": "module",
        "title": "PortRegistry"
      },
      "index": {
        "description": "Version The typeclass for the PortRegistry Contains all PortRegistry functions which can accessed remotely by the clients",
        "hierarchy": "Holumbus Network PortRegistry",
        "module": "Holumbus.Network.PortRegistry",
        "name": "PortRegistry",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry.html#t:GenericRegistry",
      "description": {
        "fct-descr": "\u003cp\u003eThe generic registry object.\n   This is a wrapper around an PortRegistryData or PortRegistryPort object.\n   With this additional indirection, we eliminate the distinction between\n   the port or the data object in the datatypes using the PortRegistry.\n   Therefore it is easier to get access to the registry and the code gets \n   more readable.\n   This might be a good example of hiding network-access. To the caller it\n   makes no difference, if the PortRegistry is in the same address space of\n   on another computer in the network.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-PortRegistry.html#GenericRegistry",
        "fct-type": "data",
        "title": "GenericRegistry"
      },
      "index": {
        "description": "The generic registry object This is wrapper around an PortRegistryData or PortRegistryPort object With this additional indirection we eliminate the distinction between the port or the data object in the datatypes using the PortRegistry Therefore it is easier to get access to the registry and the code gets more readable This might be good example of hiding network-access To the caller it makes no difference if the PortRegistry is in the same address space of on another computer in the network",
        "hierarchy": "Holumbus Network PortRegistry",
        "module": "Holumbus.Network.PortRegistry",
        "name": "GenericRegistry",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Generic Registry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry.html#t:PortRegistry",
      "description": {
        "fct-descr": "\u003cp\u003eThe Interface of the PortRegistry.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "class",
        "fct-source": "src/Holumbus-Network-PortRegistry.html#PortRegistry",
        "fct-type": "class",
        "title": "PortRegistry"
      },
      "index": {
        "description": "The Interface of the PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry",
        "module": "Holumbus.Network.PortRegistry",
        "name": "PortRegistry",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Port Registry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry.html#v:getPorts",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all registered ports.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "pr -\u003e IO [(String, SocketId)]",
        "fct-source": "src/Holumbus-Network-PortRegistry.html#getPorts",
        "fct-type": "method",
        "title": "getPorts"
      },
      "index": {
        "description": "Get list of all registered ports",
        "hierarchy": "Holumbus Network PortRegistry",
        "module": "Holumbus.Network.PortRegistry",
        "name": "getPorts",
        "normalized": "a-\u003eIO[(String,SocketId)]",
        "package": "Holumbus-Distribution",
        "partial": "Ports",
        "signature": "pr-\u003eIO[(String,SocketId)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry.html#v:lookupPort",
      "description": {
        "fct-descr": "\u003cp\u003eGet the socket of the port by its name.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e pr -\u003e IO (Maybe SocketId)",
        "fct-source": "src/Holumbus-Network-PortRegistry.html#lookupPort",
        "fct-type": "method",
        "title": "lookupPort"
      },
      "index": {
        "description": "Get the socket of the port by its name",
        "hierarchy": "Holumbus Network PortRegistry",
        "module": "Holumbus.Network.PortRegistry",
        "name": "lookupPort",
        "normalized": "String-\u003ea-\u003eIO(Maybe SocketId)",
        "package": "Holumbus-Distribution",
        "partial": "Port",
        "signature": "String-\u003epr-\u003eIO(Maybe SocketId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry.html#v:mkGenericRegistry",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new generic PortRegistry.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "r -\u003e GenericRegistry",
        "fct-source": "src/Holumbus-Network-PortRegistry.html#mkGenericRegistry",
        "fct-type": "function",
        "title": "mkGenericRegistry"
      },
      "index": {
        "description": "Creates new generic PortRegistry",
        "hierarchy": "Holumbus Network PortRegistry",
        "module": "Holumbus.Network.PortRegistry",
        "name": "mkGenericRegistry",
        "normalized": "a-\u003eGenericRegistry",
        "package": "Holumbus-Distribution",
        "partial": "Generic Registry",
        "signature": "r-\u003eGenericRegistry"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry.html#v:registerPort",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new port entry in the registry.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e SocketId -\u003e pr -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-PortRegistry.html#registerPort",
        "fct-type": "method",
        "title": "registerPort"
      },
      "index": {
        "description": "Creates new port entry in the registry",
        "hierarchy": "Holumbus Network PortRegistry",
        "module": "Holumbus.Network.PortRegistry",
        "name": "registerPort",
        "normalized": "String-\u003eSocketId-\u003ea-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Port",
        "signature": "String-\u003eSocketId-\u003epr-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-PortRegistry.html#v:unregisterPort",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes an entry from the registry.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.PortRegistry",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "String -\u003e pr -\u003e IO ()",
        "fct-source": "src/Holumbus-Network-PortRegistry.html#unregisterPort",
        "fct-type": "method",
        "title": "unregisterPort"
      },
      "index": {
        "description": "Deletes an entry from the registry",
        "hierarchy": "Holumbus Network PortRegistry",
        "module": "Holumbus.Network.PortRegistry",
        "name": "unregisterPort",
        "normalized": "String-\u003ea-\u003eIO()",
        "package": "Holumbus-Distribution",
        "partial": "Port",
        "signature": "String-\u003epr-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion    : 0.1\n\u003c/p\u003e\u003cp\u003eJust a little Id to help us to decide if two thread are running in the\n  same program or just on the same machine or on differen machines. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "module",
        "fct-source": "src/Holumbus-Network-Site.html",
        "fct-type": "module",
        "title": "Site"
      },
      "index": {
        "description": "Version Just little Id to help us to decide if two thread are running in the same program or just on the same machine or on differen machines",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "Site",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#t:SiteId",
      "description": {
        "fct-descr": "\u003cp\u003eThe datatype of the SiteId, it contains the hostname and a processid,\n   so it is possible to decide if two site ids belong to the same process\n   or the the same computer or are on distinct computers.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "data",
        "fct-source": "src/Holumbus-Network-Site.html#SiteId",
        "fct-type": "data",
        "title": "SiteId"
      },
      "index": {
        "description": "The datatype of the SiteId it contains the hostname and processid so it is possible to decide if two site ids belong to the same process or the the same computer or are on distinct computers",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "SiteId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Site Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#t:SiteMap",
      "description": {
        "fct-descr": "\u003cp\u003eJust a little Map to hold the SiteIds an to get the neighbout Ids.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "type",
        "fct-source": "src/Holumbus-Network-Site.html#SiteMap",
        "fct-type": "type",
        "title": "SiteMap"
      },
      "index": {
        "description": "Just little Map to hold the SiteIds an to get the neighbout Ids",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "SiteMap",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Site Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#v:addIdToMap",
      "description": {
        "fct-descr": "\u003cp\u003eAdds an id to the map.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SiteId -\u003e SiteMap -\u003e SiteMap",
        "fct-source": "src/Holumbus-Network-Site.html#addIdToMap",
        "fct-type": "function",
        "title": "addIdToMap"
      },
      "index": {
        "description": "Adds an id to the map",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "addIdToMap",
        "normalized": "SiteId-\u003eSiteMap-\u003eSiteMap",
        "package": "Holumbus-Distribution",
        "partial": "Id To Map",
        "signature": "SiteId-\u003eSiteMap-\u003eSiteMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#v:deleteHostFromMap",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a hostname an all its ids from the map.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "HostName -\u003e SiteMap -\u003e SiteMap",
        "fct-source": "src/Holumbus-Network-Site.html#deleteHostFromMap",
        "fct-type": "function",
        "title": "deleteHostFromMap"
      },
      "index": {
        "description": "Delete hostname an all its ids from the map",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "deleteHostFromMap",
        "normalized": "HostName-\u003eSiteMap-\u003eSiteMap",
        "package": "Holumbus-Distribution",
        "partial": "Host From Map",
        "signature": "HostName-\u003eSiteMap-\u003eSiteMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#v:deleteIdFromMap",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes an id from the map.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SiteId -\u003e SiteMap -\u003e SiteMap",
        "fct-source": "src/Holumbus-Network-Site.html#deleteIdFromMap",
        "fct-type": "function",
        "title": "deleteIdFromMap"
      },
      "index": {
        "description": "Deletes an id from the map",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "deleteIdFromMap",
        "normalized": "SiteId-\u003eSiteMap-\u003eSiteMap",
        "package": "Holumbus-Distribution",
        "partial": "Id From Map",
        "signature": "SiteId-\u003eSiteMap-\u003eSiteMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#v:emptySiteMap",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty SiteId-Map.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SiteMap",
        "fct-source": "src/Holumbus-Network-Site.html#emptySiteMap",
        "fct-type": "function",
        "title": "emptySiteMap"
      },
      "index": {
        "description": "Empty SiteId-Map",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "emptySiteMap",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Site Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#v:getNeighbourSiteIds",
      "description": {
        "fct-descr": "\u003cp\u003eGets all ids which are on the same host, but not\n   the original siteid itself.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SiteId -\u003e SiteMap -\u003e Set SiteId",
        "fct-source": "src/Holumbus-Network-Site.html#getNeighbourSiteIds",
        "fct-type": "function",
        "title": "getNeighbourSiteIds"
      },
      "index": {
        "description": "Gets all ids which are on the same host but not the original siteid itself",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "getNeighbourSiteIds",
        "normalized": "SiteId-\u003eSiteMap-\u003eSet SiteId",
        "package": "Holumbus-Distribution",
        "partial": "Neighbour Site Ids",
        "signature": "SiteId-\u003eSiteMap-\u003eSet SiteId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#v:getSiteHost",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the Hostname from the SiteId.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SiteId -\u003e HostName",
        "fct-source": "src/Holumbus-Network-Site.html#getSiteHost",
        "fct-type": "function",
        "title": "getSiteHost"
      },
      "index": {
        "description": "Extracts the Hostname from the SiteId",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "getSiteHost",
        "normalized": "SiteId-\u003eHostName",
        "package": "Holumbus-Distribution",
        "partial": "Site Host",
        "signature": "SiteId-\u003eHostName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#v:getSiteId",
      "description": {
        "fct-descr": "\u003cp\u003eGets the SiteId for the calling program. \n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "IO SiteId",
        "fct-source": "src/Holumbus-Network-Site.html#getSiteId",
        "fct-type": "function",
        "title": "getSiteId"
      },
      "index": {
        "description": "Gets the SiteId for the calling program",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "getSiteId",
        "normalized": "",
        "package": "Holumbus-Distribution",
        "partial": "Site Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#v:getSiteProcess",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the ProcessID from the SiteId.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SiteId -\u003e ProcessID",
        "fct-source": "src/Holumbus-Network-Site.html#getSiteProcess",
        "fct-type": "function",
        "title": "getSiteProcess"
      },
      "index": {
        "description": "Extracts the ProcessID from the SiteId",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "getSiteProcess",
        "normalized": "SiteId-\u003eProcessID",
        "package": "Holumbus-Distribution",
        "partial": "Site Process",
        "signature": "SiteId-\u003eProcessID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#v:isSameHost",
      "description": {
        "fct-descr": "\u003cp\u003eTest, if the two Ids are located on the same host.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SiteId -\u003e SiteId -\u003e Bool",
        "fct-source": "src/Holumbus-Network-Site.html#isSameHost",
        "fct-type": "function",
        "title": "isSameHost"
      },
      "index": {
        "description": "Test if the two Ids are located on the same host",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "isSameHost",
        "normalized": "SiteId-\u003eSiteId-\u003eBool",
        "package": "Holumbus-Distribution",
        "partial": "Same Host",
        "signature": "SiteId-\u003eSiteId-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#v:isSameProcess",
      "description": {
        "fct-descr": "\u003cp\u003eTest, if the two Ids are located on the same host an in the same process.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SiteId -\u003e SiteId -\u003e Bool",
        "fct-source": "src/Holumbus-Network-Site.html#isSameProcess",
        "fct-type": "function",
        "title": "isSameProcess"
      },
      "index": {
        "description": "Test if the two Ids are located on the same host an in the same process",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "isSameProcess",
        "normalized": "SiteId-\u003eSiteId-\u003eBool",
        "package": "Holumbus-Distribution",
        "partial": "Same Process",
        "signature": "SiteId-\u003eSiteId-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#v:isSiteIdMember",
      "description": {
        "fct-descr": "\u003cp\u003eTest, if the site id is already in the list.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SiteId -\u003e SiteMap -\u003e Bool",
        "fct-source": "src/Holumbus-Network-Site.html#isSiteIdMember",
        "fct-type": "function",
        "title": "isSiteIdMember"
      },
      "index": {
        "description": "Test if the site id is already in the list",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "isSiteIdMember",
        "normalized": "SiteId-\u003eSiteMap-\u003eBool",
        "package": "Holumbus-Distribution",
        "partial": "Site Id Member",
        "signature": "SiteId-\u003eSiteMap-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Holumbus-Distribution/docs/Holumbus-Network-Site.html#v:nearestId",
      "description": {
        "fct-descr": "\u003cp\u003eGets the nearest item from an Id-list compared to a given Id.\n\u003c/p\u003e",
        "fct-module": "Holumbus.Network.Site",
        "fct-package": "Holumbus-Distribution",
        "fct-signature": "SiteId -\u003e [SiteId] -\u003e Maybe SiteId",
        "fct-source": "src/Holumbus-Network-Site.html#nearestId",
        "fct-type": "function",
        "title": "nearestId"
      },
      "index": {
        "description": "Gets the nearest item from an Id-list compared to given Id",
        "hierarchy": "Holumbus Network Site",
        "module": "Holumbus.Network.Site",
        "name": "nearestId",
        "normalized": "SiteId-\u003e[SiteId]-\u003eMaybe SiteId",
        "package": "Holumbus-Distribution",
        "partial": "Id",
        "signature": "SiteId-\u003e[SiteId]-\u003eMaybe SiteId"
      }
    }
  }
]