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
        "word": "buster"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandle exceptions slightly more gracefully than the Haskell runtime does.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "App.Behaviours.Exception",
          "name": "Exception",
          "package": "buster",
          "source": "src/App-Behaviours-Exception.html",
          "type": "module"
        },
        "index": {
          "description": "Handle exceptions slightly more gracefully than the Haskell runtime does",
          "hierarchy": "App Behaviours Exception",
          "module": "App.Behaviours.Exception",
          "name": "Exception",
          "package": "buster",
          "partial": "Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-Exception.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle exceptions by completely ignoring them. Not recommended, really, but hey, who am I to judge?\n\u003c/p\u003e",
          "module": "App.Behaviours.Exception",
          "name": "disregardExceptionsFromSource",
          "package": "buster",
          "signature": "String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-Exception.html#disregardExceptionsFromSource",
          "type": "function"
        },
        "index": {
          "description": "Handle exceptions by completely ignoring them Not recommended really but hey who am to judge",
          "hierarchy": "App Behaviours Exception",
          "module": "App.Behaviours.Exception",
          "name": "disregardExceptionsFromSource",
          "normalized": "String-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "Exceptions From Source",
          "signature": "String-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-Exception.html#v:disregardExceptionsFromSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle exceptions by completely ignoring them. Not recommended, really, but hey, who am I to judge?\n\u003c/p\u003e",
          "module": "App.Behaviours.Exception",
          "name": "disregardExceptionsNamed",
          "package": "buster",
          "signature": "String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-Exception.html#disregardExceptionsNamed",
          "type": "function"
        },
        "index": {
          "description": "Handle exceptions by completely ignoring them Not recommended really but hey who am to judge",
          "hierarchy": "App Behaviours Exception",
          "module": "App.Behaviours.Exception",
          "name": "disregardExceptionsNamed",
          "normalized": "String-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "Exceptions Named",
          "signature": "String-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-Exception.html#v:disregardExceptionsNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle exceptions by printing them to a handle and then completely ignoring them.\n\u003c/p\u003e",
          "module": "App.Behaviours.Exception",
          "name": "logAndDisregardExceptionsFromSource",
          "package": "buster",
          "signature": "Handle -\u003e String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-Exception.html#logAndDisregardExceptionsFromSource",
          "type": "function"
        },
        "index": {
          "description": "Handle exceptions by printing them to handle and then completely ignoring them",
          "hierarchy": "App Behaviours Exception",
          "module": "App.Behaviours.Exception",
          "name": "logAndDisregardExceptionsFromSource",
          "normalized": "Handle-\u003eString-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "And Disregard Exceptions From Source",
          "signature": "Handle-\u003eString-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-Exception.html#v:logAndDisregardExceptionsFromSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle exceptions by printing them to handle and then completely ignoring them\n\u003c/p\u003e",
          "module": "App.Behaviours.Exception",
          "name": "logAndDisregardExceptionsNamed",
          "package": "buster",
          "signature": "Handle -\u003e String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-Exception.html#logAndDisregardExceptionsNamed",
          "type": "function"
        },
        "index": {
          "description": "Handle exceptions by printing them to handle and then completely ignoring them",
          "hierarchy": "App Behaviours Exception",
          "module": "App.Behaviours.Exception",
          "name": "logAndDisregardExceptionsNamed",
          "normalized": "Handle-\u003eString-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "And Disregard Exceptions Named",
          "signature": "Handle-\u003eString-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-Exception.html#v:logAndDisregardExceptionsNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle exceptions by printing them to stdout and then completely ignoring them.\n\u003c/p\u003e",
          "module": "App.Behaviours.Exception",
          "name": "printAndDisregardExceptionsFromSource",
          "package": "buster",
          "signature": "String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-Exception.html#printAndDisregardExceptionsFromSource",
          "type": "function"
        },
        "index": {
          "description": "Handle exceptions by printing them to stdout and then completely ignoring them",
          "hierarchy": "App Behaviours Exception",
          "module": "App.Behaviours.Exception",
          "name": "printAndDisregardExceptionsFromSource",
          "normalized": "String-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "And Disregard Exceptions From Source",
          "signature": "String-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-Exception.html#v:printAndDisregardExceptionsFromSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle exceptions by printing them to stdout and then completely ignoring them\n\u003c/p\u003e",
          "module": "App.Behaviours.Exception",
          "name": "printAndDisregardExceptionsNamed",
          "package": "buster",
          "signature": "String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-Exception.html#printAndDisregardExceptionsNamed",
          "type": "function"
        },
        "index": {
          "description": "Handle exceptions by printing them to stdout and then completely ignoring them",
          "hierarchy": "App Behaviours Exception",
          "module": "App.Behaviours.Exception",
          "name": "printAndDisregardExceptionsNamed",
          "normalized": "String-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "And Disregard Exceptions Named",
          "signature": "String-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-Exception.html#v:printAndDisregardExceptionsNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBork the program when an unhandled exception makes it to this behaviour.\n   Catches all events with the group \"Exception\" and throws them as one big exception.\n\u003c/p\u003e",
          "module": "App.Behaviours.Exception",
          "name": "unhandledExceptionBehaviour",
          "package": "buster",
          "signature": "Behaviour [EData a]",
          "source": "src/App-Behaviours-Exception.html#unhandledExceptionBehaviour",
          "type": "function"
        },
        "index": {
          "description": "Bork the program when an unhandled exception makes it to this behaviour Catches all events with the group Exception and throws them as one big exception",
          "hierarchy": "App Behaviours Exception",
          "module": "App.Behaviours.Exception",
          "name": "unhandledExceptionBehaviour",
          "normalized": "Behaviour[EData a]",
          "package": "buster",
          "partial": "Exception Behaviour",
          "signature": "Behaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-Exception.html#v:unhandledExceptionBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module handles read, write, encode, and decode of files.  It also cleanly handles exceptions\n   by introducing Exception events that are handlable by the behaviours in \u003ca\u003eApp.Behaviours.Exception\u003c/a\u003e\n   which exit your program gracefully, or by your own user defined exception handlers.\n\u003c/p\u003e\u003cp\u003eIt can handle datatypes \u003ccode\u003eEData a\u003c/code\u003e with Binary, Show, and Read instances as well.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "App.Behaviours.FileOps",
          "name": "FileOps",
          "package": "buster",
          "source": "src/App-Behaviours-FileOps.html",
          "type": "module"
        },
        "index": {
          "description": "This module handles read write encode and decode of files It also cleanly handles exceptions by introducing Exception events that are handlable by the behaviours in App.Behaviours.Exception which exit your program gracefully or by your own user defined exception handlers It can handle datatypes EData with Binary Show and Read instances as well",
          "hierarchy": "App Behaviours FileOps",
          "module": "App.Behaviours.FileOps",
          "name": "FileOps",
          "package": "buster",
          "partial": "File Ops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-FileOps.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edecodeFileBehaviour name datatype\u003c/code\u003e looks for any event with the name \u003cem\u003ename\u003c/em\u003e and reads the file\n   into an event following the pattern:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e name: same as filename.\n\u003c/li\u003e\u003cli\u003e group: same as name of the behaviour, \u003ccode\u003ename\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e source: \"ReadSource\"\n\u003c/li\u003e\u003cli\u003e timespan: Persistent\n\u003c/li\u003e\u003cli\u003e eventdata: the file, read in and processed using \u003ccode\u003e\u003ca\u003edecodeFile\u003c/a\u003e\u003c/code\u003e to be of the\n        datatype that corresponds to the constructor in the \u003ccode\u003edatatype\u003c/code\u003e parameter.  The constructor\n        itself need not be serialized.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNOTE: This function can only be used with \u003ccode\u003eEData a\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e instance.  For event\n  data without a read instance, use \u003ccode\u003e\u003ca\u003edecodeFileBehaviourNB\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "App.Behaviours.FileOps",
          "name": "decodeFileBehaviour",
          "package": "buster",
          "signature": "String -\u003e EData a -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-FileOps.html#decodeFileBehaviour",
          "type": "function"
        },
        "index": {
          "description": "decodeFileBehaviour name datatype looks for any event with the name name and reads the file into an event following the pattern name same as filename group same as name of the behaviour name source ReadSource timespan Persistent eventdata the file read in and processed using decodeFile to be of the datatype that corresponds to the constructor in the datatype parameter The constructor itself need not be serialized NOTE This function can only be used with EData where has Binary instance For event data without read instance use decodeFileBehaviourNB",
          "hierarchy": "App Behaviours FileOps",
          "module": "App.Behaviours.FileOps",
          "name": "decodeFileBehaviour",
          "normalized": "String-\u003eEData a-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "File Behaviour",
          "signature": "String-\u003eEData a-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-FileOps.html#v:decodeFileBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereadFileBehaviour name datatype\u003c/code\u003e looks for any event with the name \u003cem\u003ename\u003c/em\u003e and reads the file\n   into an event following the pattern:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e name: same as filename.\n\u003c/li\u003e\u003cli\u003e group: same as name of the behaviour, \u003ccode\u003ename\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e source: \"ReadSource\"\n\u003c/li\u003e\u003cli\u003e timespan: Persistent\n\u003c/li\u003e\u003cli\u003e eventdata: the file, read in and processed using \u003ccode\u003eread\u003c/code\u003e to be of the datatype that\n        corresponds to the constructor in the \u003ccode\u003edatatype\u003c/code\u003e parameter.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNOTE: Attempting to read datatype \u003ccode\u003eEOther a\u003c/code\u003e using this will cause the program to raise an\n  Event with \"Exception\" as the group.\n\u003c/p\u003e",
          "module": "App.Behaviours.FileOps",
          "name": "decodeFileBehaviourNB",
          "package": "buster",
          "signature": "String -\u003e EData a -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-FileOps.html#decodeFileBehaviourNB",
          "type": "function"
        },
        "index": {
          "description": "readFileBehaviour name datatype looks for any event with the name name and reads the file into an event following the pattern name same as filename group same as name of the behaviour name source ReadSource timespan Persistent eventdata the file read in and processed using read to be of the datatype that corresponds to the constructor in the datatype parameter NOTE Attempting to read datatype EOther using this will cause the program to raise an Event with Exception as the group",
          "hierarchy": "App Behaviours FileOps",
          "module": "App.Behaviours.FileOps",
          "name": "decodeFileBehaviourNB",
          "normalized": "String-\u003eEData a-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "File Behaviour NB",
          "signature": "String-\u003eEData a-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-FileOps.html#v:decodeFileBehaviourNB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewriteFileBehaviour\u003c/code\u003e looks for \"WriteFile\" named events with event data corresponding to\n   \u003ccode\u003e[EString filepath,\u003c/code\u003e \u003cem\u003edata constructor\u003c/em\u003e \u003ccode\u003econtents]\u003c/code\u003e and removes them from the bus, writing\n   the file named \u003ccode\u003efilepath\u003c/code\u003e.  Any error is placed on the bus with an Exception event with\n    \"WriteFile\" as the source.\n\u003c/p\u003e\u003cp\u003eNOTE: This can only be used with an EData a where a has a \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "App.Behaviours.FileOps",
          "name": "encodeFileBehaviour",
          "package": "buster",
          "signature": "Behaviour [EData a]",
          "source": "src/App-Behaviours-FileOps.html#encodeFileBehaviour",
          "type": "function"
        },
        "index": {
          "description": "writeFileBehaviour looks for WriteFile named events with event data corresponding to EString filepath data constructor contents and removes them from the bus writing the file named filepath Any error is placed on the bus with an Exception event with WriteFile as the source NOTE This can only be used with an EData where has Binary instance",
          "hierarchy": "App Behaviours FileOps",
          "module": "App.Behaviours.FileOps",
          "name": "encodeFileBehaviour",
          "normalized": "Behaviour[EData a]",
          "package": "buster",
          "partial": "File Behaviour",
          "signature": "Behaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-FileOps.html#v:encodeFileBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewriteFileBehaviour\u003c/code\u003e looks for \"WriteFile\" named events with event data corresponding to\n   \u003ccode\u003e[EString filepath,\u003c/code\u003e \u003cem\u003edata constructor\u003c/em\u003e \u003ccode\u003econtents]\u003c/code\u003e and removes them from the bus, writing\n   the file named \u003ccode\u003efilepath\u003c/code\u003e.  Any error is placed on the bus with an Exception event with\n    \"WriteFile\" as the source.\n\u003c/p\u003e\u003cp\u003eNOTE: Attempting to encode 'EOther a' using this will raise an Exception.\n\u003c/p\u003e",
          "module": "App.Behaviours.FileOps",
          "name": "encodeFileBehaviourNB",
          "package": "buster",
          "signature": "Behaviour [EData a]",
          "source": "src/App-Behaviours-FileOps.html#encodeFileBehaviourNB",
          "type": "function"
        },
        "index": {
          "description": "writeFileBehaviour looks for WriteFile named events with event data corresponding to EString filepath data constructor contents and removes them from the bus writing the file named filepath Any error is placed on the bus with an Exception event with WriteFile as the source NOTE Attempting to encode EOther using this will raise an Exception",
          "hierarchy": "App Behaviours FileOps",
          "module": "App.Behaviours.FileOps",
          "name": "encodeFileBehaviourNB",
          "normalized": "Behaviour[EData a]",
          "package": "buster",
          "partial": "File Behaviour NB",
          "signature": "Behaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-FileOps.html#v:encodeFileBehaviourNB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereadFileBehaviour name datatype\u003c/code\u003e looks for any event with the name \u003cem\u003ename\u003c/em\u003e and reads the file\n   into an event following the pattern:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e name: same as filename.\n\u003c/li\u003e\u003cli\u003e group: same as name of the behaviour, \u003ccode\u003ename\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e source: \"ReadSource\"\n\u003c/li\u003e\u003cli\u003e timespan: Persistent\n\u003c/li\u003e\u003cli\u003e eventdata: the file, read in and processed using \u003ccode\u003eread\u003c/code\u003e to be of the datatype that\n        corresponds to the constructor in the \u003ccode\u003edatatype\u003c/code\u003e parameter.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNOTE: This function can only be used with \u003ccode\u003eEData a\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance.  For event\n  data without a read instance, use \u003ccode\u003e\u003ca\u003ereadFileBehaviourNR\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "App.Behaviours.FileOps",
          "name": "readFileBehaviour",
          "package": "buster",
          "signature": "String -\u003e EData a -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-FileOps.html#readFileBehaviour",
          "type": "function"
        },
        "index": {
          "description": "readFileBehaviour name datatype looks for any event with the name name and reads the file into an event following the pattern name same as filename group same as name of the behaviour name source ReadSource timespan Persistent eventdata the file read in and processed using read to be of the datatype that corresponds to the constructor in the datatype parameter NOTE This function can only be used with EData where has Read instance For event data without read instance use readFileBehaviourNR",
          "hierarchy": "App Behaviours FileOps",
          "module": "App.Behaviours.FileOps",
          "name": "readFileBehaviour",
          "normalized": "String-\u003eEData a-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "File Behaviour",
          "signature": "String-\u003eEData a-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-FileOps.html#v:readFileBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereadFileBehaviourNR name datatype\u003c/code\u003e looks for any event with the name \u003cem\u003ename\u003c/em\u003e and reads the file\n   into an event following the pattern:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e name: same as filename.\n\u003c/li\u003e\u003cli\u003e group: same as name of the behaviour, \u003ccode\u003ename\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e source: \"ReadSource\"\n\u003c/li\u003e\u003cli\u003e timespan: Persistent\n\u003c/li\u003e\u003cli\u003e eventdata: the file, read in and processed using \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e to be of the datatype that\n        corresponds to the constructor in the \u003ccode\u003edatatype\u003c/code\u003e parameter.  The constructor itself should\n        not be serialized.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNOTE: Attempting to read datatype \u003ccode\u003eEOther a\u003c/code\u003e using this will cause the program to emit an\n  event with \"Exception\" as the group and \u003cem\u003ename\u003c/em\u003e as the source.\n\u003c/p\u003e",
          "module": "App.Behaviours.FileOps",
          "name": "readFileBehaviourNR",
          "package": "buster",
          "signature": "String -\u003e EData a -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-FileOps.html#readFileBehaviourNR",
          "type": "function"
        },
        "index": {
          "description": "readFileBehaviourNR name datatype looks for any event with the name name and reads the file into an event following the pattern name same as filename group same as name of the behaviour name source ReadSource timespan Persistent eventdata the file read in and processed using read to be of the datatype that corresponds to the constructor in the datatype parameter The constructor itself should not be serialized NOTE Attempting to read datatype EOther using this will cause the program to emit an event with Exception as the group and name as the source",
          "hierarchy": "App Behaviours FileOps",
          "module": "App.Behaviours.FileOps",
          "name": "readFileBehaviourNR",
          "normalized": "String-\u003eEData a-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "File Behaviour NR",
          "signature": "String-\u003eEData a-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-FileOps.html#v:readFileBehaviourNR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewriteFileBehaviour\u003c/code\u003e looks for \"WriteFile\" named events with event data corresponding to\n   \u003ccode\u003e[EString filepath,\u003c/code\u003e \u003cem\u003edata constructor\u003c/em\u003e \u003ccode\u003econtents]\u003c/code\u003e and removes them from the bus, writing\n   the file named \u003ccode\u003efilepath\u003c/code\u003e.  Any error is placed on the bus with an Exception event with\n    \"WriteFile\" as the source.\n\u003c/p\u003e\u003cp\u003eNOTE: Attempting to encode 'EOther a' using this will raise an Exception.\n\u003c/p\u003e",
          "module": "App.Behaviours.FileOps",
          "name": "writeFileBehaviour",
          "package": "buster",
          "signature": "Behaviour [EData a]",
          "source": "src/App-Behaviours-FileOps.html#writeFileBehaviour",
          "type": "function"
        },
        "index": {
          "description": "writeFileBehaviour looks for WriteFile named events with event data corresponding to EString filepath data constructor contents and removes them from the bus writing the file named filepath Any error is placed on the bus with an Exception event with WriteFile as the source NOTE Attempting to encode EOther using this will raise an Exception",
          "hierarchy": "App Behaviours FileOps",
          "module": "App.Behaviours.FileOps",
          "name": "writeFileBehaviour",
          "normalized": "Behaviour[EData a]",
          "package": "buster",
          "partial": "File Behaviour",
          "signature": "Behaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-FileOps.html#v:writeFileBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewriteFileBehaviour\u003c/code\u003e looks for \"WriteFile\" named events with event data corresponding to\n   \u003ccode\u003e[EString filepath,\u003c/code\u003e \u003cem\u003edata constructor\u003c/em\u003e \u003ccode\u003econtents]\u003c/code\u003e and removes them from the bus, writing\n   the file named \u003ccode\u003efilepath\u003c/code\u003e.  Any error is placed on the bus with an Exception event with\n    \"WriteFile\" as the source.\n\u003c/p\u003e",
          "module": "App.Behaviours.FileOps",
          "name": "writeFileBehaviourNS",
          "package": "buster",
          "signature": "Behaviour [EData a]",
          "source": "src/App-Behaviours-FileOps.html#writeFileBehaviourNS",
          "type": "function"
        },
        "index": {
          "description": "writeFileBehaviour looks for WriteFile named events with event data corresponding to EString filepath data constructor contents and removes them from the bus writing the file named filepath Any error is placed on the bus with an Exception event with WriteFile as the source",
          "hierarchy": "App Behaviours FileOps",
          "module": "App.Behaviours.FileOps",
          "name": "writeFileBehaviourNS",
          "normalized": "Behaviour[EData a]",
          "package": "buster",
          "partial": "File Behaviour NS",
          "signature": "Behaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-FileOps.html#v:writeFileBehaviourNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.PrintEvents",
          "name": "PrintEvents",
          "package": "buster",
          "source": "src/App-Behaviours-PrintEvents.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "App Behaviours PrintEvents",
          "module": "App.Behaviours.PrintEvents",
          "name": "PrintEvents",
          "package": "buster",
          "partial": "Print Events",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-PrintEvents.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.PrintEvents",
          "name": "checkpoint",
          "package": "buster",
          "signature": "String -\u003e Behaviour a",
          "source": "src/App-Behaviours-PrintEvents.html#checkpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours PrintEvents",
          "module": "App.Behaviours.PrintEvents",
          "name": "checkpoint",
          "normalized": "String-\u003eBehaviour a",
          "package": "buster",
          "signature": "String-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-PrintEvents.html#v:checkpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.PrintEvents",
          "name": "logEventGroupBehaviour",
          "package": "buster",
          "signature": "Handle -\u003e String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-PrintEvents.html#logEventGroupBehaviour",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours PrintEvents",
          "module": "App.Behaviours.PrintEvents",
          "name": "logEventGroupBehaviour",
          "normalized": "Handle-\u003eString-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "Event Group Behaviour",
          "signature": "Handle-\u003eString-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-PrintEvents.html#v:logEventGroupBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.PrintEvents",
          "name": "logEventNameBehaviour",
          "package": "buster",
          "signature": "Handle -\u003e String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-PrintEvents.html#logEventNameBehaviour",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours PrintEvents",
          "module": "App.Behaviours.PrintEvents",
          "name": "logEventNameBehaviour",
          "normalized": "Handle-\u003eString-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "Event Name Behaviour",
          "signature": "Handle-\u003eString-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-PrintEvents.html#v:logEventNameBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.PrintEvents",
          "name": "logEventSourceBehaviour",
          "package": "buster",
          "signature": "Handle -\u003e String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-PrintEvents.html#logEventSourceBehaviour",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours PrintEvents",
          "module": "App.Behaviours.PrintEvents",
          "name": "logEventSourceBehaviour",
          "normalized": "Handle-\u003eString-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "Event Source Behaviour",
          "signature": "Handle-\u003eString-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-PrintEvents.html#v:logEventSourceBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.PrintEvents",
          "name": "logEventsBehaviour",
          "package": "buster",
          "signature": "Handle -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-PrintEvents.html#logEventsBehaviour",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours PrintEvents",
          "module": "App.Behaviours.PrintEvents",
          "name": "logEventsBehaviour",
          "normalized": "Handle-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "Events Behaviour",
          "signature": "Handle-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-PrintEvents.html#v:logEventsBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.PrintEvents",
          "name": "printEventGroupBehaviour",
          "package": "buster",
          "signature": "String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-PrintEvents.html#printEventGroupBehaviour",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours PrintEvents",
          "module": "App.Behaviours.PrintEvents",
          "name": "printEventGroupBehaviour",
          "normalized": "String-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "Event Group Behaviour",
          "signature": "String-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-PrintEvents.html#v:printEventGroupBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.PrintEvents",
          "name": "printEventNameBehaviour",
          "package": "buster",
          "signature": "String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-PrintEvents.html#printEventNameBehaviour",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours PrintEvents",
          "module": "App.Behaviours.PrintEvents",
          "name": "printEventNameBehaviour",
          "normalized": "String-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "Event Name Behaviour",
          "signature": "String-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-PrintEvents.html#v:printEventNameBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.PrintEvents",
          "name": "printEventSourceBehaviour",
          "package": "buster",
          "signature": "String -\u003e Behaviour [EData a]",
          "source": "src/App-Behaviours-PrintEvents.html#printEventSourceBehaviour",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours PrintEvents",
          "module": "App.Behaviours.PrintEvents",
          "name": "printEventSourceBehaviour",
          "normalized": "String-\u003eBehaviour[EData a]",
          "package": "buster",
          "partial": "Event Source Behaviour",
          "signature": "String-\u003eBehaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-PrintEvents.html#v:printEventSourceBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.PrintEvents",
          "name": "printEventsBehaviour",
          "package": "buster",
          "signature": "Behaviour [EData a]",
          "source": "src/App-Behaviours-PrintEvents.html#printEventsBehaviour",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours PrintEvents",
          "module": "App.Behaviours.PrintEvents",
          "name": "printEventsBehaviour",
          "normalized": "Behaviour[EData a]",
          "package": "buster",
          "partial": "Events Behaviour",
          "signature": "Behaviour[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-PrintEvents.html#v:printEventsBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Behaviours.PrintEvents",
          "name": "printQNameBehaviour",
          "package": "buster",
          "signature": "Behaviour a",
          "source": "src/App-Behaviours-PrintEvents.html#printQNameBehaviour",
          "type": "function"
        },
        "index": {
          "hierarchy": "App Behaviours PrintEvents",
          "module": "App.Behaviours.PrintEvents",
          "name": "printQNameBehaviour",
          "package": "buster",
          "partial": "QName Behaviour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Behaviours-PrintEvents.html#v:printQNameBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNot exactly the FRP model, but rather a model of a large application with\n   heterogenous data and many inputs and outputs.  An application is in its\n   essence a collection of widgets and behaviours and events with a bus.\n   The bus holds events and manages the event timeline.  Behaviours and\n   widgets are continuous. Widgets applied to the bus make insertions and\n   never deletions. Behaviours applied to the bus make insertions and deletions.\n\u003c/p\u003e\u003cp\u003eBehaviours are composable using combinators that set one Behaviour as either\n   behind, in front, or beside another behaviour on the bus.  The in front and\n   behind combinators  establish that the behaviour \u003ca\u003ebehind\u003c/a\u003e the others\n   sees the results of the other behaviours' application to the bus. The beside\n   combinator says that the combinators see the same bus.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "App.DebugEventBus",
          "name": "DebugEventBus",
          "package": "buster",
          "source": "src/App-DebugEventBus.html",
          "type": "module"
        },
        "index": {
          "description": "Not exactly the FRP model but rather model of large application with heterogenous data and many inputs and outputs An application is in its essence collection of widgets and behaviours and events with bus The bus holds events and manages the event timeline Behaviours and widgets are continuous Widgets applied to the bus make insertions and never deletions Behaviours applied to the bus make insertions and deletions Behaviours are composable using combinators that set one Behaviour as either behind in front or beside another behaviour on the bus The in front and behind combinators establish that the behaviour behind the others sees the results of the other behaviours application to the bus The beside combinator says that the combinators see the same bus",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "DebugEventBus",
          "package": "buster",
          "partial": "Debug Event Bus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the final value of a Future.  Blocks until the value is available\n\u003c/p\u003e\u003cp\u003eThe type of a Behaviour.  A behaviour maps the bus to a list of differences to apply to the bus\n   before the next Behaviour's sample of time.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "Behaviour",
          "package": "buster",
          "source": "src/App-DebugEventBus.html#Behaviour",
          "type": "type"
        },
        "index": {
          "description": "Obtain the final value of Future Blocks until the value is available The type of Behaviour behaviour maps the bus to list of differences to apply to the bus before the next Behaviour sample of time",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Behaviour",
          "package": "buster",
          "partial": "Behaviour",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#t:Behaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a discrete sample of continuous time.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "Bus",
          "package": "buster",
          "source": "src/App-DebugEventBus.html#Bus",
          "type": "data"
        },
        "index": {
          "description": "The type of discrete sample of continuous time",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Bus",
          "package": "buster",
          "partial": "Bus",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#t:Bus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "BusIterationChanges",
          "package": "buster",
          "source": "src/App-DebugEventBus.html#BusIterationChanges",
          "type": "data"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "BusIterationChanges",
          "package": "buster",
          "partial": "Bus Iteration Changes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#t:BusIterationChanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines time in terms of the differences from time t0 to the next instant. This is the type\n   returned by Behaviours to describe time directly after the Behaviour.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "Diff",
          "package": "buster",
          "source": "src/App-DebugEventBus.html#Diff",
          "type": "data"
        },
        "index": {
          "description": "Defines time in terms of the differences from time t0 to the next instant This is the type returned by Behaviours to describe time directly after the Behaviour",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Diff",
          "package": "buster",
          "partial": "Diff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#t:Diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the data attachable to events.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "EData",
          "package": "buster",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "data"
        },
        "index": {
          "description": "Defines the data attachable to events",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EData",
          "package": "buster",
          "partial": "EData",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#t:EData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn discrete event in time\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "Event",
          "package": "buster",
          "source": "src/App-DebugEventBus.html#Event",
          "type": "data"
        },
        "index": {
          "description": "An discrete event in time",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Event",
          "package": "buster",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of future events..\n   A behaviour doesn't know about the time that it assigns events, only that they exist\n   at some point after the time that the Behaviour sampled.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "Future",
          "package": "buster",
          "source": "src/App-DebugEventBus.html#Future",
          "type": "type"
        },
        "index": {
          "description": "The type of future events behaviour doesn know about the time that it assigns events only that they exist at some point after the time that the Behaviour sampled",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Future",
          "package": "buster",
          "partial": "Future",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#t:Future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the amount of time that an event exists.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "TimeSpan",
          "package": "buster",
          "source": "src/App-DebugEventBus.html#TimeSpan",
          "type": "data"
        },
        "index": {
          "description": "Defines the amount of time that an event exists",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "TimeSpan",
          "package": "buster",
          "partial": "Time Span",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#t:TimeSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of widgets.\n   A widget is an input-only way to assign Events to time.  A mouse is a widget.  A keyboard is a\n   widget.  A webcam is a widget, and so on.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "Widget",
          "package": "buster",
          "source": "src/App-DebugEventBus.html#Widget",
          "type": "type"
        },
        "index": {
          "description": "The type of widgets widget is an input-only way to assign Events to time mouse is widget keyboard is widget webcam is widget and so on",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Widget",
          "package": "buster",
          "partial": "Widget",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#t:Widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe beside behaviour combinator. All behaviours that are side-by-side see the same bus.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "(|~|)",
          "package": "buster",
          "signature": "Behaviour a -\u003e Behaviour a -\u003e Behaviour a",
          "source": "src/App-DebugEventBus.html#%7C~%7C",
          "type": "function"
        },
        "index": {
          "description": "the beside behaviour combinator All behaviours that are side-by-side see the same bus",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "(|~|) |~|",
          "normalized": "Behaviour a-\u003eBehaviour a-\u003eBehaviour a",
          "package": "buster",
          "signature": "Behaviour a-\u003eBehaviour a-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:-124--126--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe in front of behaviour combinator. behaviour 1 is in front of behaviour 0, so behavour 0 will see the bus filtered through behaviour 1\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "(\u003c~\u003c)",
          "package": "buster",
          "signature": "Behaviour a -\u003e Behaviour a -\u003e Behaviour a",
          "source": "src/App-DebugEventBus.html#%3C~%3C",
          "type": "function"
        },
        "index": {
          "description": "the in front of behaviour combinator behaviour is in front of behaviour so behavour will see the bus filtered through behaviour",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "(\u003c~\u003c) \u003c~\u003c",
          "normalized": "Behaviour a-\u003eBehaviour a-\u003eBehaviour a",
          "package": "buster",
          "signature": "Behaviour a-\u003eBehaviour a-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:-60--126--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe behind behaviour combinator. behaviour 0 is behind behaviour 1, so behaviour 0 will see the bus filtered through behaviour 1\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "(\u003e~\u003e)",
          "package": "buster",
          "signature": "Behaviour a -\u003e Behaviour a -\u003e Behaviour a",
          "source": "src/App-DebugEventBus.html#%3E~%3E",
          "type": "function"
        },
        "index": {
          "description": "the behind behaviour combinator behaviour is behind behaviour so behaviour will see the bus filtered through behaviour",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "(\u003e~\u003e) \u003e~\u003e",
          "normalized": "Behaviour a-\u003eBehaviour a-\u003eBehaviour a",
          "package": "buster",
          "signature": "Behaviour a-\u003eBehaviour a-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:-62--126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "Bus",
          "package": "buster",
          "signature": "Bus",
          "source": "src/App-DebugEventBus.html#Bus",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Bus",
          "package": "buster",
          "partial": "Bus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:Bus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "Click",
          "package": "buster",
          "signature": "Click",
          "source": "src/App-DebugEventBus.html#BusIterationChanges",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Click",
          "package": "buster",
          "partial": "Click",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:Click"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "Deleted",
          "package": "buster",
          "signature": "Deleted String String String String String",
          "source": "src/App-DebugEventBus.html#BusIterationChanges",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Deleted",
          "package": "buster",
          "partial": "Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:Deleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime t1 contains all events at time t0 minus this event.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "Deletion",
          "package": "buster",
          "signature": "Deletion (Event a)",
          "source": "src/App-DebugEventBus.html#Diff",
          "type": "function"
        },
        "index": {
          "description": "Time t1 contains all events at time t0 minus this event",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Deletion",
          "package": "buster",
          "partial": "Deletion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:Deletion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EAssoc",
          "package": "buster",
          "signature": "EAssoc (String, EData a)",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EAssoc",
          "normalized": "EAssoc(String,EData a)",
          "package": "buster",
          "partial": "EAssoc",
          "signature": "EAssoc(String,EData a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EAssocL",
          "package": "buster",
          "signature": "EAssocL [(String, EData a)]",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EAssocL",
          "normalized": "EAssocL[(String,EData a)]",
          "package": "buster",
          "partial": "EAssoc",
          "signature": "EAssocL[(String,EData a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EAssocL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EBool",
          "package": "buster",
          "signature": "EBool Bool",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EBool",
          "package": "buster",
          "partial": "EBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EBoolL",
          "package": "buster",
          "signature": "EBoolL [Bool]",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EBoolL",
          "normalized": "EBoolL[Bool]",
          "package": "buster",
          "partial": "EBool",
          "signature": "EBoolL[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EBoolL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EByteString",
          "package": "buster",
          "signature": "EByteString ByteString",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EByteString",
          "package": "buster",
          "partial": "EByte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EByteStringL",
          "package": "buster",
          "signature": "EByteStringL [ByteString]",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EByteStringL",
          "normalized": "EByteStringL[ByteString]",
          "package": "buster",
          "partial": "EByte String",
          "signature": "EByteStringL[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EByteStringL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EChar",
          "package": "buster",
          "signature": "EChar Char",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EChar",
          "package": "buster",
          "partial": "EChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EDouble",
          "package": "buster",
          "signature": "EDouble Double",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EDouble",
          "package": "buster",
          "partial": "EDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EDoubleL",
          "package": "buster",
          "signature": "EDoubleL [Double]",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EDoubleL",
          "normalized": "EDoubleL[Double]",
          "package": "buster",
          "partial": "EDouble",
          "signature": "EDoubleL[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EDoubleL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EInt",
          "package": "buster",
          "signature": "EInt Int",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EInt",
          "package": "buster",
          "partial": "EInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EIntL",
          "package": "buster",
          "signature": "EIntL [Int]",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EIntL",
          "normalized": "EIntL[Int]",
          "package": "buster",
          "partial": "EInt",
          "signature": "EIntL[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EIntL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "ELByteString",
          "package": "buster",
          "signature": "ELByteString ByteString",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "ELByteString",
          "package": "buster",
          "partial": "ELByte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:ELByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "ELByteStringL",
          "package": "buster",
          "signature": "ELByteStringL [ByteString]",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "ELByteStringL",
          "normalized": "ELByteStringL[ByteString]",
          "package": "buster",
          "partial": "ELByte String",
          "signature": "ELByteStringL[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:ELByteStringL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EOther",
          "package": "buster",
          "signature": "EOther a",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EOther",
          "package": "buster",
          "partial": "EOther",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EOtherL",
          "package": "buster",
          "signature": "EOtherL [a]",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EOtherL",
          "normalized": "EOtherL[a]",
          "package": "buster",
          "partial": "EOther",
          "signature": "EOtherL[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EOtherL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EString",
          "package": "buster",
          "signature": "EString String",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EString",
          "package": "buster",
          "partial": "EString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "EStringL",
          "package": "buster",
          "signature": "EStringL [String]",
          "source": "src/App-DebugEventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "EStringL",
          "normalized": "EStringL[String]",
          "package": "buster",
          "partial": "EString",
          "signature": "EStringL[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:EStringL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe time of the event's inception.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "Event",
          "package": "buster",
          "signature": "Event",
          "source": "src/App-DebugEventBus.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The time of the event inception",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Event",
          "package": "buster",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "Inserted",
          "package": "buster",
          "signature": "Inserted String String String String String",
          "source": "src/App-DebugEventBus.html#BusIterationChanges",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Inserted",
          "package": "buster",
          "partial": "Inserted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:Inserted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime t1 contains all events at time t0 plus this event.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "Insertion",
          "package": "buster",
          "signature": "Insertion (Event a)",
          "source": "src/App-DebugEventBus.html#Diff",
          "type": "function"
        },
        "index": {
          "description": "Time t1 contains all events at time t0 plus this event",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Insertion",
          "package": "buster",
          "partial": "Insertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:Insertion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "InstrumentedBehaviour",
          "package": "buster",
          "signature": "InstrumentedBehaviour String",
          "source": "src/App-DebugEventBus.html#Diff",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "InstrumentedBehaviour",
          "package": "buster",
          "partial": "Instrumented Behaviour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:InstrumentedBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event exists for a certain number of samples of time from its inception.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "Iterations",
          "package": "buster",
          "signature": "Iterations Int",
          "source": "src/App-DebugEventBus.html#TimeSpan",
          "type": "function"
        },
        "index": {
          "description": "The event exists for certain number of samples of time from its inception",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Iterations",
          "package": "buster",
          "partial": "Iterations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:Iterations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event exists forever\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "Persistent",
          "package": "buster",
          "signature": "Persistent",
          "source": "src/App-DebugEventBus.html#TimeSpan",
          "type": "function"
        },
        "index": {
          "description": "The event exists forever",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Persistent",
          "package": "buster",
          "partial": "Persistent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:Persistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event exists for a specified amount of real time\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "Time",
          "package": "buster",
          "signature": "Time DiffTime",
          "source": "src/App-DebugEventBus.html#TimeSpan",
          "type": "function"
        },
        "index": {
          "description": "The event exists for specified amount of real time",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "Time",
          "package": "buster",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an event to time within the bus\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "addEvent",
          "package": "buster",
          "signature": "Event a -\u003e Bus a -\u003e Bus a",
          "source": "src/App-DebugEventBus.html#addEvent",
          "type": "function"
        },
        "index": {
          "description": "Add an event to time within the bus",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "addEvent",
          "normalized": "Event a-\u003eBus a-\u003eBus a",
          "package": "buster",
          "partial": "Event",
          "signature": "Event a-\u003eBus a-\u003eBus a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:addEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite loop of behaviours and widgets over time, sampled forward.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "bus",
          "package": "buster",
          "signature": "[Widget a] -\u003e IO b -\u003e Behaviour a -\u003e IO ()",
          "source": "src/App-DebugEventBus.html#bus",
          "type": "function"
        },
        "index": {
          "description": "An infinite loop of behaviours and widgets over time sampled forward",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "bus",
          "normalized": "[Widget a]-\u003eIO b-\u003eBehaviour a-\u003eIO()",
          "package": "buster",
          "signature": "[Widget a]-\u003eIO b-\u003eBehaviour a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:bus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample time and apply the behaviour to that sample.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "busIteration",
          "package": "buster",
          "signature": "MVar (Bus a) -\u003e Behaviour a -\u003e IO ()",
          "source": "src/App-DebugEventBus.html#busIteration",
          "type": "function"
        },
        "index": {
          "description": "Sample time and apply the behaviour to that sample",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "busIteration",
          "normalized": "MVar(Bus a)-\u003eBehaviour a-\u003eIO()",
          "package": "buster",
          "partial": "Iteration",
          "signature": "MVar(Bus a)-\u003eBehaviour a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:busIteration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "consumeEventGroup",
          "package": "buster",
          "signature": "String -\u003e Behaviour a",
          "source": "src/App-DebugEventBus.html#consumeEventGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "consumeEventGroup",
          "normalized": "String-\u003eBehaviour a",
          "package": "buster",
          "partial": "Event Group",
          "signature": "String-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:consumeEventGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given group at the current time and output their deletions as Diffs as\n   well as any additional Diffs returned by the behaviour.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "consumeEventGroupCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#consumeEventGroupCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given group at the current time and output their deletions as Diffs as well as any additional Diffs returned by the behaviour",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "consumeEventGroupCollectivelyWith",
          "normalized": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Event Group Collectively With",
          "signature": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:consumeEventGroupCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "consumeEventGroupWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#consumeEventGroupWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "consumeEventGroupWith",
          "normalized": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Event Group With",
          "signature": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:consumeEventGroupWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "consumeEventsFromSource",
          "package": "buster",
          "signature": "String -\u003e Behaviour a",
          "source": "src/App-DebugEventBus.html#consumeEventsFromSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "consumeEventsFromSource",
          "normalized": "String-\u003eBehaviour a",
          "package": "buster",
          "partial": "Events From Source",
          "signature": "String-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:consumeEventsFromSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given source at the current time and output their deletions as Diffs as\n   well as any additional Diffs returned by the behaviour.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "consumeEventsFromSourceCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#consumeEventsFromSourceCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given source at the current time and output their deletions as Diffs as well as any additional Diffs returned by the behaviour",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "consumeEventsFromSourceCollectivelyWith",
          "normalized": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Events From Source Collectively With",
          "signature": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:consumeEventsFromSourceCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "consumeEventsFromSourceWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#consumeEventsFromSourceWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "consumeEventsFromSourceWith",
          "normalized": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Events From Source With",
          "signature": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:consumeEventsFromSourceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "consumeFullyQualifiedEvent",
          "package": "buster",
          "signature": "String -\u003e String -\u003e String -\u003e Behaviour a",
          "source": "src/App-DebugEventBus.html#consumeFullyQualifiedEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "consumeFullyQualifiedEvent",
          "normalized": "String-\u003eString-\u003eString-\u003eBehaviour a",
          "package": "buster",
          "partial": "Fully Qualified Event",
          "signature": "String-\u003eString-\u003eString-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:consumeFullyQualifiedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a single fully qualified event at the current time and output their deletions as Diffs as\n   well as any additional Diffs returned by the behaviour.  Parameter order is bus, group, source, name\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "consumeFullyQualifiedEventWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e String -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#consumeFullyQualifiedEventWith",
          "type": "function"
        },
        "index": {
          "description": "Sample single fully qualified event at the current time and output their deletions as Diffs as well as any additional Diffs returned by the behaviour Parameter order is bus group source name",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "consumeFullyQualifiedEventWith",
          "normalized": "Bus a-\u003eString-\u003eString-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Fully Qualified Event With",
          "signature": "Bus a-\u003eString-\u003eString-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:consumeFullyQualifiedEventWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "consumeNamedEvents",
          "package": "buster",
          "signature": "String -\u003e Behaviour a",
          "source": "src/App-DebugEventBus.html#consumeNamedEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "consumeNamedEvents",
          "normalized": "String-\u003eBehaviour a",
          "package": "buster",
          "partial": "Named Events",
          "signature": "String-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:consumeNamedEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given name at the current time and output their deletions as Diffs as\n   well as any additional Diffs returned by the behaviour.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "consumeNamedEventsCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#consumeNamedEventsCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given name at the current time and output their deletions as Diffs as well as any additional Diffs returned by the behaviour",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "consumeNamedEventsCollectivelyWith",
          "normalized": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Named Events Collectively With",
          "signature": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:consumeNamedEventsCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "consumeNamedEventsWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#consumeNamedEventsWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "consumeNamedEventsWith",
          "normalized": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Named Events With",
          "signature": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:consumeNamedEventsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "currentProducerConsumer",
          "package": "buster",
          "signature": "Maybe String",
          "source": "src/App-DebugEventBus.html#Bus",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "currentProducerConsumer",
          "package": "buster",
          "partial": "Producer Consumer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:currentProducerConsumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "days",
          "package": "buster",
          "signature": "Integer -\u003e TimeSpan",
          "source": "src/App-DebugEventBus.html#days",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "days",
          "normalized": "Integer-\u003eTimeSpan",
          "package": "buster",
          "signature": "Integer-\u003eTimeSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:days"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "debugout",
          "package": "buster",
          "signature": "Handle",
          "source": "src/App-DebugEventBus.html#Bus",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "debugout",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:debugout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty bus\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "emptyBus",
          "package": "buster",
          "signature": "Bus a",
          "source": "src/App-DebugEventBus.html#emptyBus",
          "type": "function"
        },
        "index": {
          "description": "The empty bus",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "emptyBus",
          "package": "buster",
          "partial": "Bus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:emptyBus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unique name of an event.  Group + src + name = the fully qualified name FQN of the event.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "ename",
          "package": "buster",
          "signature": "String",
          "source": "src/App-DebugEventBus.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The unique name of an event Group src name the fully qualified name FQN of the event",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "ename",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:ename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "eventByQName",
          "package": "buster",
          "signature": "String -\u003e String -\u003e String -\u003e Bus a -\u003e Maybe (Event a)",
          "source": "src/App-DebugEventBus.html#eventByQName",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "eventByQName",
          "normalized": "String-\u003eString-\u003eString-\u003eBus a-\u003eMaybe(Event a)",
          "package": "buster",
          "partial": "By QName",
          "signature": "String-\u003eString-\u003eString-\u003eBus a-\u003eMaybe(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:eventByQName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data attached to the event.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "eventdata",
          "package": "buster",
          "signature": "a",
          "source": "src/App-DebugEventBus.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The data attached to the event",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "eventdata",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:eventdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "eventsByGroup",
          "package": "buster",
          "signature": "String -\u003e Bus a -\u003e Set (Event a)",
          "source": "src/App-DebugEventBus.html#eventsByGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "eventsByGroup",
          "normalized": "String-\u003eBus a-\u003eSet(Event a)",
          "package": "buster",
          "partial": "By Group",
          "signature": "String-\u003eBus a-\u003eSet(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:eventsByGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "eventsByName",
          "package": "buster",
          "signature": "String -\u003e Bus a -\u003e Set (Event a)",
          "source": "src/App-DebugEventBus.html#eventsByName",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "eventsByName",
          "normalized": "String-\u003eBus a-\u003eSet(Event a)",
          "package": "buster",
          "partial": "By Name",
          "signature": "String-\u003eBus a-\u003eSet(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:eventsByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "eventsBySource",
          "package": "buster",
          "signature": "String -\u003e Bus a -\u003e Set (Event a)",
          "source": "src/App-DebugEventBus.html#eventsBySource",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "eventsBySource",
          "normalized": "String-\u003eBus a-\u003eSet(Event a)",
          "package": "buster",
          "partial": "By Source",
          "signature": "String-\u003eBus a-\u003eSet(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:eventsBySource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe map of FQNs to events.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "fullyQualifiedMap",
          "package": "buster",
          "signature": "Map (String, String, String) (Event a)",
          "source": "src/App-DebugEventBus.html#Bus",
          "type": "function"
        },
        "index": {
          "description": "The map of FQNs to events",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "fullyQualifiedMap",
          "normalized": "Map(String,String,String)(Event a)",
          "package": "buster",
          "partial": "Qualified Map",
          "signature": "Map(String,String,String)(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:fullyQualifiedMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn IO action sometime in the future.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "future",
          "package": "buster",
          "signature": "Bus a -\u003e IO [Diff a] -\u003e Future a",
          "source": "src/App-DebugEventBus.html#future",
          "type": "function"
        },
        "index": {
          "description": "An IO action sometime in the future",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "future",
          "normalized": "Bus a-\u003eIO[Diff a]-\u003eFuture a",
          "package": "buster",
          "signature": "Bus a-\u003eIO[Diff a]-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe group of an event.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "group",
          "package": "buster",
          "signature": "String",
          "source": "src/App-DebugEventBus.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The group of an event",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "group",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe map of just Event.group to events.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "groupMap",
          "package": "buster",
          "signature": "Map String (Set (Event a))",
          "source": "src/App-DebugEventBus.html#Bus",
          "type": "function"
        },
        "index": {
          "description": "The map of just Event.group to events",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "groupMap",
          "package": "buster",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:groupMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "hours",
          "package": "buster",
          "signature": "Integer -\u003e TimeSpan",
          "source": "src/App-DebugEventBus.html#hours",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "hours",
          "normalized": "Integer-\u003eTimeSpan",
          "package": "buster",
          "signature": "Integer-\u003eTimeSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:hours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "minutes",
          "package": "buster",
          "signature": "Integer -\u003e TimeSpan",
          "source": "src/App-DebugEventBus.html#minutes",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "minutes",
          "normalized": "Integer-\u003eTimeSpan",
          "package": "buster",
          "signature": "Integer-\u003eTimeSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:minutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "modifyEvent",
          "package": "buster",
          "signature": "Event a -\u003e (Event a -\u003e Event a) -\u003e [Diff a]",
          "source": "src/App-DebugEventBus.html#modifyEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "modifyEvent",
          "normalized": "Event a-\u003e(Event a-\u003eEvent a)-\u003e[Diff a]",
          "package": "buster",
          "partial": "Event",
          "signature": "Event a-\u003e(Event a-\u003eEvent a)-\u003e[Diff a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:modifyEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "modifyEventData",
          "package": "buster",
          "signature": "Event a -\u003e (a -\u003e a) -\u003e [Diff a]",
          "source": "src/App-DebugEventBus.html#modifyEventData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "modifyEventData",
          "normalized": "Event a-\u003e(a-\u003ea)-\u003e[Diff a]",
          "package": "buster",
          "partial": "Event Data",
          "signature": "Event a-\u003e(a-\u003ea)-\u003e[Diff a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:modifyEventData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe map of just Event.name to events.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "nameMap",
          "package": "buster",
          "signature": "Map String (Set (Event a))",
          "source": "src/App-DebugEventBus.html#Bus",
          "type": "function"
        },
        "index": {
          "description": "The map of just Event.name to events",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "nameMap",
          "package": "buster",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:nameMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "once",
          "package": "buster",
          "signature": "TimeSpan",
          "source": "src/App-DebugEventBus.html#once",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "once",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe null Behaviour.  Samples the bus and adds and deletes nothing.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "passthrough",
          "package": "buster",
          "signature": "Behaviour a",
          "source": "src/App-DebugEventBus.html#passthrough",
          "type": "function"
        },
        "index": {
          "description": "The null Behaviour Samples the bus and adds and deletes nothing",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "passthrough",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:passthrough"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a behaviour to the collection of all events on the bus at once\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "pollAllEventsCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#pollAllEventsCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Apply behaviour to the collection of all events on the bus at once",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "pollAllEventsCollectivelyWith",
          "normalized": "Bus a-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "All Events Collectively With",
          "signature": "Bus a-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:pollAllEventsCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a behaviour to all events in the bus, one event at a time.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "pollAllEventsWith",
          "package": "buster",
          "signature": "Bus a -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#pollAllEventsWith",
          "type": "function"
        },
        "index": {
          "description": "Apply behaviour to all events in the bus one event at time",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "pollAllEventsWith",
          "normalized": "Bus a-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "All Events With",
          "signature": "Bus a-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:pollAllEventsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given group and apply a Behaviour\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "pollEventGroupCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#pollEventGroupCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given group and apply Behaviour",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "pollEventGroupCollectivelyWith",
          "normalized": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Event Group Collectively With",
          "signature": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:pollEventGroupCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a gien group and apply a Behaviour to each.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "pollEventGroupWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#pollEventGroupWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with gien group and apply Behaviour to each",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "pollEventGroupWith",
          "normalized": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Event Group With",
          "signature": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:pollEventGroupWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given source and apply a Behaviour\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "pollEventsFromSourceCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#pollEventsFromSourceCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given source and apply Behaviour",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "pollEventsFromSourceCollectivelyWith",
          "normalized": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Events From Source Collectively With",
          "signature": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:pollEventsFromSourceCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given source and apply a Behaviour to each.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "pollEventsFromSourceWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#pollEventsFromSourceWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given source and apply Behaviour to each",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "pollEventsFromSourceWith",
          "normalized": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Events From Source With",
          "signature": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:pollEventsFromSourceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a single fully qualified event and output some Diffs.\n   Parameter order is bus, group, source, name.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "pollFullyQualifiedEventWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e String -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#pollFullyQualifiedEventWith",
          "type": "function"
        },
        "index": {
          "description": "Sample single fully qualified event and output some Diffs Parameter order is bus group source name",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "pollFullyQualifiedEventWith",
          "normalized": "Bus a-\u003eString-\u003eString-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Fully Qualified Event With",
          "signature": "Bus a-\u003eString-\u003eString-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:pollFullyQualifiedEventWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given name and apply a Behaviour\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "pollNamedEventsCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#pollNamedEventsCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given name and apply Behaviour",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "pollNamedEventsCollectivelyWith",
          "normalized": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Named Events Collectively With",
          "signature": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:pollNamedEventsCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given name and apply a Behaviour to each\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "pollNamedEventsWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-DebugEventBus.html#pollNamedEventsWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given name and apply Behaviour to each",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "pollNamedEventsWith",
          "normalized": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Named Events With",
          "signature": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:pollNamedEventsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign an event to time given some event data and a TimeSpan.\n\u003c/p\u003e\u003cpre\u003eproduce group source nm timetolive edata\u003c/pre\u003e",
          "module": "App.DebugEventBus",
          "name": "produce",
          "package": "buster",
          "signature": "String -\u003e String -\u003e String -\u003e TimeSpan -\u003e a -\u003e IO (Diff a)",
          "source": "src/App-DebugEventBus.html#produce",
          "type": "function"
        },
        "index": {
          "description": "Assign an event to time given some event data and TimeSpan produce group source nm timetolive edata",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "produce",
          "normalized": "String-\u003eString-\u003eString-\u003eTimeSpan-\u003ea-\u003eIO(Diff a)",
          "package": "buster",
          "signature": "String-\u003eString-\u003eString-\u003eTimeSpan-\u003ea-\u003eIO(Diff a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:produce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign an event to time from a widget.\n\u003c/p\u003e\u003cpre\u003eproduce' group source nm timetolive edata bus\u003c/pre\u003e",
          "module": "App.DebugEventBus",
          "name": "produce'",
          "package": "buster",
          "signature": "String -\u003e String -\u003e String -\u003e TimeSpan -\u003e a -\u003e MVar (Bus a) -\u003e IO ()",
          "source": "src/App-DebugEventBus.html#produce%27",
          "type": "function"
        },
        "index": {
          "description": "Assign an event to time from widget produce group source nm timetolive edata bus",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "produce'",
          "normalized": "String-\u003eString-\u003eString-\u003eTimeSpan-\u003ea-\u003eMVar(Bus a)-\u003eIO()",
          "package": "buster",
          "signature": "String-\u003eString-\u003eString-\u003eTimeSpan-\u003ea-\u003eMVar(Bus a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:produce-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow without risking running into an unshowable type.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "safeShow",
          "package": "buster",
          "signature": "Maybe Int -\u003e EData a -\u003e String",
          "source": "src/App-DebugEventBus.html#safeShow",
          "type": "function"
        },
        "index": {
          "description": "Show without risking running into an unshowable type",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "safeShow",
          "normalized": "Maybe Int-\u003eEData a-\u003eString",
          "package": "buster",
          "partial": "Show",
          "signature": "Maybe Int-\u003eEData a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:safeShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "seconds",
          "package": "buster",
          "signature": "Integer -\u003e TimeSpan",
          "source": "src/App-DebugEventBus.html#seconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "seconds",
          "normalized": "Integer-\u003eTimeSpan",
          "package": "buster",
          "signature": "Integer-\u003eTimeSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe behaviour or widget that assigned the event to time.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "src",
          "package": "buster",
          "signature": "String",
          "source": "src/App-DebugEventBus.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The behaviour or widget that assigned the event to time",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "src",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:src"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe map of just Event.src to events.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "srcMap",
          "package": "buster",
          "signature": "Map String (Set (Event a))",
          "source": "src/App-DebugEventBus.html#Bus",
          "type": "function"
        },
        "index": {
          "description": "The map of just Event.src to events",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "srcMap",
          "package": "buster",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:srcMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.DebugEventBus",
          "name": "time",
          "package": "buster",
          "signature": "UTCTime",
          "source": "src/App-DebugEventBus.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "time",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe timespan from \u003ca\u003etime\u003c/a\u003e that an event exists.\n\u003c/p\u003e",
          "module": "App.DebugEventBus",
          "name": "timespan",
          "package": "buster",
          "signature": "TimeSpan",
          "source": "src/App-DebugEventBus.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The timespan from time that an event exists",
          "hierarchy": "App DebugEventBus",
          "module": "App.DebugEventBus",
          "name": "timespan",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-DebugEventBus.html#v:timespan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNot exactly the FRP model, but rather a model of a large application with\n   heterogenous data and many inputs and outputs.  An application is in its\n   essence a collection of widgets and behaviours and events with a bus.\n   The bus holds events and manages the event timeline.  Behaviours and\n   widgets are continuous. Widgets applied to the bus make insertions and\n   never deletions. Behaviours applied to the bus make insertions and deletions.\n\u003c/p\u003e\u003cp\u003eBehaviours are composable using combinators that set one Behaviour as either\n   behind, in front, or beside another behaviour on the bus.  The in front and\n   behind combinators  establish that the behaviour \u003ca\u003ebehind\u003c/a\u003e the others\n   sees the results of the other behaviours' application to the bus. The beside\n   combinator says that the combinators see the same bus.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "App.EventBus",
          "name": "EventBus",
          "package": "buster",
          "source": "src/App-EventBus.html",
          "type": "module"
        },
        "index": {
          "description": "Not exactly the FRP model but rather model of large application with heterogenous data and many inputs and outputs An application is in its essence collection of widgets and behaviours and events with bus The bus holds events and manages the event timeline Behaviours and widgets are continuous Widgets applied to the bus make insertions and never deletions Behaviours applied to the bus make insertions and deletions Behaviours are composable using combinators that set one Behaviour as either behind in front or beside another behaviour on the bus The in front and behind combinators establish that the behaviour behind the others sees the results of the other behaviours application to the bus The beside combinator says that the combinators see the same bus",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EventBus",
          "package": "buster",
          "partial": "Event Bus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the final value of a Future.  Blocks until the value is available\n\u003c/p\u003e\u003cp\u003eThe type of a Behaviour.  A behaviour maps the bus to a list of differences to apply to the bus\n   before the next Behaviour's sample of time.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Behaviour",
          "package": "buster",
          "source": "src/App-EventBus.html#Behaviour",
          "type": "type"
        },
        "index": {
          "description": "Obtain the final value of Future Blocks until the value is available The type of Behaviour behaviour maps the bus to list of differences to apply to the bus before the next Behaviour sample of time",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Behaviour",
          "package": "buster",
          "partial": "Behaviour",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#t:Behaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a discrete sample of continuous time.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Bus",
          "package": "buster",
          "source": "src/App-EventBus.html#Bus",
          "type": "data"
        },
        "index": {
          "description": "The type of discrete sample of continuous time",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Bus",
          "package": "buster",
          "partial": "Bus",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#t:Bus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines time in terms of the differences from time t0 to the next instant. This is the type\n   returned by Behaviours to describe time directly after the Behaviour.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Diff",
          "package": "buster",
          "source": "src/App-EventBus.html#Diff",
          "type": "data"
        },
        "index": {
          "description": "Defines time in terms of the differences from time t0 to the next instant This is the type returned by Behaviours to describe time directly after the Behaviour",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Diff",
          "package": "buster",
          "partial": "Diff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#t:Diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the data attachable to events.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "EData",
          "package": "buster",
          "source": "src/App-EventBus.html#EData",
          "type": "data"
        },
        "index": {
          "description": "Defines the data attachable to events",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EData",
          "package": "buster",
          "partial": "EData",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#t:EData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn discrete event in time\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Event",
          "package": "buster",
          "source": "src/App-EventBus.html#Event",
          "type": "data"
        },
        "index": {
          "description": "An discrete event in time",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Event",
          "package": "buster",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of future events..\n   A behaviour doesn't know about the time that it assigns events, only that they exist\n   at some point after the time that the Behaviour sampled.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Future",
          "package": "buster",
          "source": "src/App-EventBus.html#Future",
          "type": "type"
        },
        "index": {
          "description": "The type of future events behaviour doesn know about the time that it assigns events only that they exist at some point after the time that the Behaviour sampled",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Future",
          "package": "buster",
          "partial": "Future",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#t:Future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the amount of time that an event exists.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "TimeSpan",
          "package": "buster",
          "source": "src/App-EventBus.html#TimeSpan",
          "type": "data"
        },
        "index": {
          "description": "Defines the amount of time that an event exists",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "TimeSpan",
          "package": "buster",
          "partial": "Time Span",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#t:TimeSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of widgets.\n   A widget is an input-only way to assign Events to time.  A mouse is a widget.  A keyboard is a\n   widget.  A webcam is a widget, and so on.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Widget",
          "package": "buster",
          "source": "src/App-EventBus.html#Widget",
          "type": "type"
        },
        "index": {
          "description": "The type of widgets widget is an input-only way to assign Events to time mouse is widget keyboard is widget webcam is widget and so on",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Widget",
          "package": "buster",
          "partial": "Widget",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#t:Widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe beside behaviour combinator. All behaviours that are side-by-side see the same bus.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "(|~|)",
          "package": "buster",
          "signature": "Behaviour a -\u003e Behaviour a -\u003e Behaviour a",
          "source": "src/App-EventBus.html#%7C~%7C",
          "type": "function"
        },
        "index": {
          "description": "the beside behaviour combinator All behaviours that are side-by-side see the same bus",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "(|~|) |~|",
          "normalized": "Behaviour a-\u003eBehaviour a-\u003eBehaviour a",
          "package": "buster",
          "signature": "Behaviour a-\u003eBehaviour a-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:-124--126--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe in front of behaviour combinator. behaviour 1 is in front of behaviour 0, so behavour 0 will see the bus filtered through behaviour 1\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "(\u003c~\u003c)",
          "package": "buster",
          "signature": "Behaviour a -\u003e Behaviour a -\u003e Behaviour a",
          "source": "src/App-EventBus.html#%3C~%3C",
          "type": "function"
        },
        "index": {
          "description": "the in front of behaviour combinator behaviour is in front of behaviour so behavour will see the bus filtered through behaviour",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "(\u003c~\u003c) \u003c~\u003c",
          "normalized": "Behaviour a-\u003eBehaviour a-\u003eBehaviour a",
          "package": "buster",
          "signature": "Behaviour a-\u003eBehaviour a-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:-60--126--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe behind behaviour combinator. behaviour 0 is behind behaviour 1, so behaviour 0 will see the bus filtered through behaviour 1\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "(\u003e~\u003e)",
          "package": "buster",
          "signature": "Behaviour a -\u003e Behaviour a -\u003e Behaviour a",
          "source": "src/App-EventBus.html#%3E~%3E",
          "type": "function"
        },
        "index": {
          "description": "the behind behaviour combinator behaviour is behind behaviour so behaviour will see the bus filtered through behaviour",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "(\u003e~\u003e) \u003e~\u003e",
          "normalized": "Behaviour a-\u003eBehaviour a-\u003eBehaviour a",
          "package": "buster",
          "signature": "Behaviour a-\u003eBehaviour a-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:-62--126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe map of FQNs to events.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Bus",
          "package": "buster",
          "signature": "Bus",
          "source": "src/App-EventBus.html#Bus",
          "type": "function"
        },
        "index": {
          "description": "The map of FQNs to events",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Bus",
          "package": "buster",
          "partial": "Bus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:Bus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime t1 contains all events at time t0 minus this event.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Deletion",
          "package": "buster",
          "signature": "Deletion (Event a)",
          "source": "src/App-EventBus.html#Diff",
          "type": "function"
        },
        "index": {
          "description": "Time t1 contains all events at time t0 minus this event",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Deletion",
          "package": "buster",
          "partial": "Deletion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:Deletion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EAssoc",
          "package": "buster",
          "signature": "EAssoc (String, EData a)",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EAssoc",
          "normalized": "EAssoc(String,EData a)",
          "package": "buster",
          "partial": "EAssoc",
          "signature": "EAssoc(String,EData a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EAssocL",
          "package": "buster",
          "signature": "EAssocL [(String, EData a)]",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EAssocL",
          "normalized": "EAssocL[(String,EData a)]",
          "package": "buster",
          "partial": "EAssoc",
          "signature": "EAssocL[(String,EData a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EAssocL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EBool",
          "package": "buster",
          "signature": "EBool Bool",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EBool",
          "package": "buster",
          "partial": "EBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EBoolL",
          "package": "buster",
          "signature": "EBoolL [Bool]",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EBoolL",
          "normalized": "EBoolL[Bool]",
          "package": "buster",
          "partial": "EBool",
          "signature": "EBoolL[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EBoolL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EByteString",
          "package": "buster",
          "signature": "EByteString ByteString",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EByteString",
          "package": "buster",
          "partial": "EByte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EByteStringL",
          "package": "buster",
          "signature": "EByteStringL [ByteString]",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EByteStringL",
          "normalized": "EByteStringL[ByteString]",
          "package": "buster",
          "partial": "EByte String",
          "signature": "EByteStringL[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EByteStringL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EChar",
          "package": "buster",
          "signature": "EChar Char",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EChar",
          "package": "buster",
          "partial": "EChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EDouble",
          "package": "buster",
          "signature": "EDouble Double",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EDouble",
          "package": "buster",
          "partial": "EDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EDoubleL",
          "package": "buster",
          "signature": "EDoubleL [Double]",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EDoubleL",
          "normalized": "EDoubleL[Double]",
          "package": "buster",
          "partial": "EDouble",
          "signature": "EDoubleL[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EDoubleL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EInt",
          "package": "buster",
          "signature": "EInt Int",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EInt",
          "package": "buster",
          "partial": "EInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EIntL",
          "package": "buster",
          "signature": "EIntL [Int]",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EIntL",
          "normalized": "EIntL[Int]",
          "package": "buster",
          "partial": "EInt",
          "signature": "EIntL[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EIntL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "ELByteString",
          "package": "buster",
          "signature": "ELByteString ByteString",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "ELByteString",
          "package": "buster",
          "partial": "ELByte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:ELByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "ELByteStringL",
          "package": "buster",
          "signature": "ELByteStringL [ByteString]",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "ELByteStringL",
          "normalized": "ELByteStringL[ByteString]",
          "package": "buster",
          "partial": "ELByte String",
          "signature": "ELByteStringL[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:ELByteStringL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EOther",
          "package": "buster",
          "signature": "EOther a",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EOther",
          "package": "buster",
          "partial": "EOther",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EOtherL",
          "package": "buster",
          "signature": "EOtherL [a]",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EOtherL",
          "normalized": "EOtherL[a]",
          "package": "buster",
          "partial": "EOther",
          "signature": "EOtherL[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EOtherL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EString",
          "package": "buster",
          "signature": "EString String",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EString",
          "package": "buster",
          "partial": "EString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "EStringL",
          "package": "buster",
          "signature": "EStringL [String]",
          "source": "src/App-EventBus.html#EData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "EStringL",
          "normalized": "EStringL[String]",
          "package": "buster",
          "partial": "EString",
          "signature": "EStringL[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:EStringL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe time of the event's inception.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Event",
          "package": "buster",
          "signature": "Event",
          "source": "src/App-EventBus.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The time of the event inception",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Event",
          "package": "buster",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime t1 contains all events at time t0 plus this event.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Insertion",
          "package": "buster",
          "signature": "Insertion (Event a)",
          "source": "src/App-EventBus.html#Diff",
          "type": "function"
        },
        "index": {
          "description": "Time t1 contains all events at time t0 plus this event",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Insertion",
          "package": "buster",
          "partial": "Insertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:Insertion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event exists for a certain number of samples of time from its inception.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Iterations",
          "package": "buster",
          "signature": "Iterations Int",
          "source": "src/App-EventBus.html#TimeSpan",
          "type": "function"
        },
        "index": {
          "description": "The event exists for certain number of samples of time from its inception",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Iterations",
          "package": "buster",
          "partial": "Iterations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:Iterations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event exists forever\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Persistent",
          "package": "buster",
          "signature": "Persistent",
          "source": "src/App-EventBus.html#TimeSpan",
          "type": "function"
        },
        "index": {
          "description": "The event exists forever",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Persistent",
          "package": "buster",
          "partial": "Persistent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:Persistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event exists for a specified amount of real time\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "Time",
          "package": "buster",
          "signature": "Time DiffTime",
          "source": "src/App-EventBus.html#TimeSpan",
          "type": "function"
        },
        "index": {
          "description": "The event exists for specified amount of real time",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "Time",
          "package": "buster",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an event to time within the bus\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "addEvent",
          "package": "buster",
          "signature": "Event a -\u003e Bus a -\u003e Bus a",
          "source": "src/App-EventBus.html#addEvent",
          "type": "function"
        },
        "index": {
          "description": "Add an event to time within the bus",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "addEvent",
          "normalized": "Event a-\u003eBus a-\u003eBus a",
          "package": "buster",
          "partial": "Event",
          "signature": "Event a-\u003eBus a-\u003eBus a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:addEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite loop of behaviours and widgets over time, sampled forward.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "bus",
          "package": "buster",
          "signature": "[Widget a] -\u003e IO b -\u003e Behaviour a -\u003e IO ()",
          "source": "src/App-EventBus.html#bus",
          "type": "function"
        },
        "index": {
          "description": "An infinite loop of behaviours and widgets over time sampled forward",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "bus",
          "normalized": "[Widget a]-\u003eIO b-\u003eBehaviour a-\u003eIO()",
          "package": "buster",
          "signature": "[Widget a]-\u003eIO b-\u003eBehaviour a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:bus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample time and apply the behaviour to that sample.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "busIteration",
          "package": "buster",
          "signature": "MVar (Bus a) -\u003e Behaviour a -\u003e IO ()",
          "source": "src/App-EventBus.html#busIteration",
          "type": "function"
        },
        "index": {
          "description": "Sample time and apply the behaviour to that sample",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "busIteration",
          "normalized": "MVar(Bus a)-\u003eBehaviour a-\u003eIO()",
          "package": "buster",
          "partial": "Iteration",
          "signature": "MVar(Bus a)-\u003eBehaviour a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:busIteration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "consumeEventGroup",
          "package": "buster",
          "signature": "String -\u003e Behaviour a",
          "source": "src/App-EventBus.html#consumeEventGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "consumeEventGroup",
          "normalized": "String-\u003eBehaviour a",
          "package": "buster",
          "partial": "Event Group",
          "signature": "String-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:consumeEventGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given group at the current time and output their deletions as Diffs as\n   well as any additional Diffs returned by the behaviour.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "consumeEventGroupCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#consumeEventGroupCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given group at the current time and output their deletions as Diffs as well as any additional Diffs returned by the behaviour",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "consumeEventGroupCollectivelyWith",
          "normalized": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Event Group Collectively With",
          "signature": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:consumeEventGroupCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "consumeEventGroupWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#consumeEventGroupWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "consumeEventGroupWith",
          "normalized": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Event Group With",
          "signature": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:consumeEventGroupWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "consumeEventsFromSource",
          "package": "buster",
          "signature": "String -\u003e Behaviour a",
          "source": "src/App-EventBus.html#consumeEventsFromSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "consumeEventsFromSource",
          "normalized": "String-\u003eBehaviour a",
          "package": "buster",
          "partial": "Events From Source",
          "signature": "String-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:consumeEventsFromSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given source at the current time and output their deletions as Diffs as\n   well as any additional Diffs returned by the behaviour.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "consumeEventsFromSourceCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#consumeEventsFromSourceCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given source at the current time and output their deletions as Diffs as well as any additional Diffs returned by the behaviour",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "consumeEventsFromSourceCollectivelyWith",
          "normalized": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Events From Source Collectively With",
          "signature": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:consumeEventsFromSourceCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "consumeEventsFromSourceWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#consumeEventsFromSourceWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "consumeEventsFromSourceWith",
          "normalized": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Events From Source With",
          "signature": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:consumeEventsFromSourceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "consumeFullyQualifiedEvent",
          "package": "buster",
          "signature": "String -\u003e String -\u003e String -\u003e Behaviour a",
          "source": "src/App-EventBus.html#consumeFullyQualifiedEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "consumeFullyQualifiedEvent",
          "normalized": "String-\u003eString-\u003eString-\u003eBehaviour a",
          "package": "buster",
          "partial": "Fully Qualified Event",
          "signature": "String-\u003eString-\u003eString-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:consumeFullyQualifiedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a single fully qualified event at the current time and output their deletions as Diffs as\n   well as any additional Diffs returned by the behaviour.  Parameter order is bus, group, source, name\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "consumeFullyQualifiedEventWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e String -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#consumeFullyQualifiedEventWith",
          "type": "function"
        },
        "index": {
          "description": "Sample single fully qualified event at the current time and output their deletions as Diffs as well as any additional Diffs returned by the behaviour Parameter order is bus group source name",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "consumeFullyQualifiedEventWith",
          "normalized": "Bus a-\u003eString-\u003eString-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Fully Qualified Event With",
          "signature": "Bus a-\u003eString-\u003eString-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:consumeFullyQualifiedEventWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "consumeNamedEvents",
          "package": "buster",
          "signature": "String -\u003e Behaviour a",
          "source": "src/App-EventBus.html#consumeNamedEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "consumeNamedEvents",
          "normalized": "String-\u003eBehaviour a",
          "package": "buster",
          "partial": "Named Events",
          "signature": "String-\u003eBehaviour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:consumeNamedEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given name at the current time and output their deletions as Diffs as\n   well as any additional Diffs returned by the behaviour.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "consumeNamedEventsCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#consumeNamedEventsCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given name at the current time and output their deletions as Diffs as well as any additional Diffs returned by the behaviour",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "consumeNamedEventsCollectivelyWith",
          "normalized": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Named Events Collectively With",
          "signature": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:consumeNamedEventsCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "consumeNamedEventsWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#consumeNamedEventsWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "consumeNamedEventsWith",
          "normalized": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Named Events With",
          "signature": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:consumeNamedEventsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "days",
          "package": "buster",
          "signature": "Integer -\u003e TimeSpan",
          "source": "src/App-EventBus.html#days",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "days",
          "normalized": "Integer-\u003eTimeSpan",
          "package": "buster",
          "signature": "Integer-\u003eTimeSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:days"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty bus\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "emptyBus",
          "package": "buster",
          "signature": "Bus a",
          "source": "src/App-EventBus.html#emptyBus",
          "type": "function"
        },
        "index": {
          "description": "The empty bus",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "emptyBus",
          "package": "buster",
          "partial": "Bus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:emptyBus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unique name of an event.  Group + src + name = the fully qualified name FQN of the event.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "ename",
          "package": "buster",
          "signature": "String",
          "source": "src/App-EventBus.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The unique name of an event Group src name the fully qualified name FQN of the event",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "ename",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:ename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "eventByQName",
          "package": "buster",
          "signature": "String -\u003e String -\u003e String -\u003e Bus a -\u003e Maybe (Event a)",
          "source": "src/App-EventBus.html#eventByQName",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "eventByQName",
          "normalized": "String-\u003eString-\u003eString-\u003eBus a-\u003eMaybe(Event a)",
          "package": "buster",
          "partial": "By QName",
          "signature": "String-\u003eString-\u003eString-\u003eBus a-\u003eMaybe(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:eventByQName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data attached to the event.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "eventdata",
          "package": "buster",
          "signature": "a",
          "source": "src/App-EventBus.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The data attached to the event",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "eventdata",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:eventdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "eventsByGroup",
          "package": "buster",
          "signature": "String -\u003e Bus a -\u003e Set (Event a)",
          "source": "src/App-EventBus.html#eventsByGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "eventsByGroup",
          "normalized": "String-\u003eBus a-\u003eSet(Event a)",
          "package": "buster",
          "partial": "By Group",
          "signature": "String-\u003eBus a-\u003eSet(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:eventsByGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "eventsByName",
          "package": "buster",
          "signature": "String -\u003e Bus a -\u003e Set (Event a)",
          "source": "src/App-EventBus.html#eventsByName",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "eventsByName",
          "normalized": "String-\u003eBus a-\u003eSet(Event a)",
          "package": "buster",
          "partial": "By Name",
          "signature": "String-\u003eBus a-\u003eSet(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:eventsByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "eventsBySource",
          "package": "buster",
          "signature": "String -\u003e Bus a -\u003e Set (Event a)",
          "source": "src/App-EventBus.html#eventsBySource",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "eventsBySource",
          "normalized": "String-\u003eBus a-\u003eSet(Event a)",
          "package": "buster",
          "partial": "By Source",
          "signature": "String-\u003eBus a-\u003eSet(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:eventsBySource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "fullyQualifiedMap",
          "package": "buster",
          "signature": "Map (String, String, String) (Event a)",
          "source": "src/App-EventBus.html#Bus",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "fullyQualifiedMap",
          "normalized": "Map(String,String,String)(Event a)",
          "package": "buster",
          "partial": "Qualified Map",
          "signature": "Map(String,String,String)(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:fullyQualifiedMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn IO action sometime in the future.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "future",
          "package": "buster",
          "signature": "Bus a -\u003e IO [Diff a] -\u003e Future a",
          "source": "src/App-EventBus.html#future",
          "type": "function"
        },
        "index": {
          "description": "An IO action sometime in the future",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "future",
          "normalized": "Bus a-\u003eIO[Diff a]-\u003eFuture a",
          "package": "buster",
          "signature": "Bus a-\u003eIO[Diff a]-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe group of an event.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "group",
          "package": "buster",
          "signature": "String",
          "source": "src/App-EventBus.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The group of an event",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "group",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe map of just Event.group to events.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "groupMap",
          "package": "buster",
          "signature": "Map String (Set (Event a))",
          "source": "src/App-EventBus.html#Bus",
          "type": "function"
        },
        "index": {
          "description": "The map of just Event.group to events",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "groupMap",
          "package": "buster",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:groupMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "hours",
          "package": "buster",
          "signature": "Integer -\u003e TimeSpan",
          "source": "src/App-EventBus.html#hours",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "hours",
          "normalized": "Integer-\u003eTimeSpan",
          "package": "buster",
          "signature": "Integer-\u003eTimeSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:hours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "minutes",
          "package": "buster",
          "signature": "Integer -\u003e TimeSpan",
          "source": "src/App-EventBus.html#minutes",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "minutes",
          "normalized": "Integer-\u003eTimeSpan",
          "package": "buster",
          "signature": "Integer-\u003eTimeSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:minutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "modifyEvent",
          "package": "buster",
          "signature": "Event a -\u003e (Event a -\u003e Event a) -\u003e [Diff a]",
          "source": "src/App-EventBus.html#modifyEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "modifyEvent",
          "normalized": "Event a-\u003e(Event a-\u003eEvent a)-\u003e[Diff a]",
          "package": "buster",
          "partial": "Event",
          "signature": "Event a-\u003e(Event a-\u003eEvent a)-\u003e[Diff a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:modifyEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "modifyEventData",
          "package": "buster",
          "signature": "Event a -\u003e (a -\u003e a) -\u003e [Diff a]",
          "source": "src/App-EventBus.html#modifyEventData",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "modifyEventData",
          "normalized": "Event a-\u003e(a-\u003ea)-\u003e[Diff a]",
          "package": "buster",
          "partial": "Event Data",
          "signature": "Event a-\u003e(a-\u003ea)-\u003e[Diff a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:modifyEventData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe map of just Event.name to events.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "nameMap",
          "package": "buster",
          "signature": "Map String (Set (Event a))",
          "source": "src/App-EventBus.html#Bus",
          "type": "function"
        },
        "index": {
          "description": "The map of just Event.name to events",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "nameMap",
          "package": "buster",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:nameMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "once",
          "package": "buster",
          "signature": "TimeSpan",
          "source": "src/App-EventBus.html#once",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "once",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe null Behaviour.  Samples the bus and adds and deletes nothing.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "passthrough",
          "package": "buster",
          "signature": "Behaviour a",
          "source": "src/App-EventBus.html#passthrough",
          "type": "function"
        },
        "index": {
          "description": "The null Behaviour Samples the bus and adds and deletes nothing",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "passthrough",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:passthrough"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a behaviour to the collection of all events on the bus at once\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "pollAllEventsCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#pollAllEventsCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Apply behaviour to the collection of all events on the bus at once",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "pollAllEventsCollectivelyWith",
          "normalized": "Bus a-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "All Events Collectively With",
          "signature": "Bus a-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:pollAllEventsCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a behaviour to all events in the bus, one event at a time.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "pollAllEventsWith",
          "package": "buster",
          "signature": "Bus a -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#pollAllEventsWith",
          "type": "function"
        },
        "index": {
          "description": "Apply behaviour to all events in the bus one event at time",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "pollAllEventsWith",
          "normalized": "Bus a-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "All Events With",
          "signature": "Bus a-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:pollAllEventsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given group and apply a Behaviour\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "pollEventGroupCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#pollEventGroupCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given group and apply Behaviour",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "pollEventGroupCollectivelyWith",
          "normalized": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Event Group Collectively With",
          "signature": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:pollEventGroupCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a gien group and apply a Behaviour to each.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "pollEventGroupWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#pollEventGroupWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with gien group and apply Behaviour to each",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "pollEventGroupWith",
          "normalized": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Event Group With",
          "signature": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:pollEventGroupWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given source and apply a Behaviour\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "pollEventsFromSourceCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#pollEventsFromSourceCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given source and apply Behaviour",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "pollEventsFromSourceCollectivelyWith",
          "normalized": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Events From Source Collectively With",
          "signature": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:pollEventsFromSourceCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given source and apply a Behaviour to each.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "pollEventsFromSourceWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#pollEventsFromSourceWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given source and apply Behaviour to each",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "pollEventsFromSourceWith",
          "normalized": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Events From Source With",
          "signature": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:pollEventsFromSourceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a single fully qualified event and output some Diffs.\n   Parameter order is bus, group, source, name.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "pollFullyQualifiedEventWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e String -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#pollFullyQualifiedEventWith",
          "type": "function"
        },
        "index": {
          "description": "Sample single fully qualified event and output some Diffs Parameter order is bus group source name",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "pollFullyQualifiedEventWith",
          "normalized": "Bus a-\u003eString-\u003eString-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Fully Qualified Event With",
          "signature": "Bus a-\u003eString-\u003eString-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:pollFullyQualifiedEventWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given name and apply a Behaviour\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "pollNamedEventsCollectivelyWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Set (Event a) -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#pollNamedEventsCollectivelyWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given name and apply Behaviour",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "pollNamedEventsCollectivelyWith",
          "normalized": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Named Events Collectively With",
          "signature": "Bus a-\u003eString-\u003e(Set(Event a)-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:pollNamedEventsCollectivelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample all events with a given name and apply a Behaviour to each\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "pollNamedEventsWith",
          "package": "buster",
          "signature": "Bus a -\u003e String -\u003e (Event a -\u003e IO [Diff a]) -\u003e Future a",
          "source": "src/App-EventBus.html#pollNamedEventsWith",
          "type": "function"
        },
        "index": {
          "description": "Sample all events with given name and apply Behaviour to each",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "pollNamedEventsWith",
          "normalized": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "package": "buster",
          "partial": "Named Events With",
          "signature": "Bus a-\u003eString-\u003e(Event a-\u003eIO[Diff a])-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:pollNamedEventsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign an event to time given some event data and a TimeSpan.\n\u003c/p\u003e\u003cpre\u003eproduce group source nm timetolive edata\u003c/pre\u003e",
          "module": "App.EventBus",
          "name": "produce",
          "package": "buster",
          "signature": "String -\u003e String -\u003e String -\u003e TimeSpan -\u003e a -\u003e IO (Diff a)",
          "source": "src/App-EventBus.html#produce",
          "type": "function"
        },
        "index": {
          "description": "Assign an event to time given some event data and TimeSpan produce group source nm timetolive edata",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "produce",
          "normalized": "String-\u003eString-\u003eString-\u003eTimeSpan-\u003ea-\u003eIO(Diff a)",
          "package": "buster",
          "signature": "String-\u003eString-\u003eString-\u003eTimeSpan-\u003ea-\u003eIO(Diff a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:produce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign an event to time from a widget.\n\u003c/p\u003e\u003cpre\u003eproduce' group source nm timetolive edata bus\u003c/pre\u003e",
          "module": "App.EventBus",
          "name": "produce'",
          "package": "buster",
          "signature": "String -\u003e String -\u003e String -\u003e TimeSpan -\u003e a -\u003e MVar (Bus a) -\u003e IO ()",
          "source": "src/App-EventBus.html#produce%27",
          "type": "function"
        },
        "index": {
          "description": "Assign an event to time from widget produce group source nm timetolive edata bus",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "produce'",
          "normalized": "String-\u003eString-\u003eString-\u003eTimeSpan-\u003ea-\u003eMVar(Bus a)-\u003eIO()",
          "package": "buster",
          "signature": "String-\u003eString-\u003eString-\u003eTimeSpan-\u003ea-\u003eMVar(Bus a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:produce-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow without risking running into an unshowable type.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "safeShow",
          "package": "buster",
          "signature": "Maybe Int -\u003e EData a -\u003e String",
          "source": "src/App-EventBus.html#safeShow",
          "type": "function"
        },
        "index": {
          "description": "Show without risking running into an unshowable type",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "safeShow",
          "normalized": "Maybe Int-\u003eEData a-\u003eString",
          "package": "buster",
          "partial": "Show",
          "signature": "Maybe Int-\u003eEData a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:safeShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "seconds",
          "package": "buster",
          "signature": "Integer -\u003e TimeSpan",
          "source": "src/App-EventBus.html#seconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "seconds",
          "normalized": "Integer-\u003eTimeSpan",
          "package": "buster",
          "signature": "Integer-\u003eTimeSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe behaviour or widget that assigned the event to time.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "src",
          "package": "buster",
          "signature": "String",
          "source": "src/App-EventBus.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The behaviour or widget that assigned the event to time",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "src",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:src"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe map of just Event.src to events.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "srcMap",
          "package": "buster",
          "signature": "Map String (Set (Event a))",
          "source": "src/App-EventBus.html#Bus",
          "type": "function"
        },
        "index": {
          "description": "The map of just Event.src to events",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "srcMap",
          "package": "buster",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:srcMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.EventBus",
          "name": "time",
          "package": "buster",
          "signature": "UTCTime",
          "source": "src/App-EventBus.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "time",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe timespan from \u003ca\u003etime\u003c/a\u003e that an event exists.\n\u003c/p\u003e",
          "module": "App.EventBus",
          "name": "timespan",
          "package": "buster",
          "signature": "TimeSpan",
          "source": "src/App-EventBus.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The timespan from time that an event exists",
          "hierarchy": "App EventBus",
          "module": "App.EventBus",
          "name": "timespan",
          "package": "buster",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-EventBus.html#v:timespan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "App.Widgets.Environment",
          "name": "Environment",
          "package": "buster",
          "source": "src/App-Widgets-Environment.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "App Widgets Environment",
          "module": "App.Widgets.Environment",
          "name": "Environment",
          "package": "buster",
          "partial": "Environment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Widgets-Environment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlace the command line arguments on the bus as an Event following the pattern\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e name : argv\n\u003c/li\u003e\u003cli\u003e group : Environment\n\u003c/li\u003e\u003cli\u003e source : CommandLineArgsWidget\n\u003c/li\u003e\u003cli\u003e timespan : Persistent\n\u003c/li\u003e\u003cli\u003e data : EStringL of the command line args\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "App.Widgets.Environment",
          "name": "commandLineArgsWidget",
          "package": "buster",
          "signature": "Widget [EData a]",
          "source": "src/App-Widgets-Environment.html#commandLineArgsWidget",
          "type": "function"
        },
        "index": {
          "description": "Place the command line arguments on the bus as an Event following the pattern name argv group Environment source CommandLineArgsWidget timespan Persistent data EStringL of the command line args",
          "hierarchy": "App Widgets Environment",
          "module": "App.Widgets.Environment",
          "name": "commandLineArgsWidget",
          "normalized": "Widget[EData a]",
          "package": "buster",
          "partial": "Line Args Widget",
          "signature": "Widget[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Widgets-Environment.html#v:commandLineArgsWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a config file and place it on the bus as individual events for each config item following the pattern:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e name : config item name\n\u003c/li\u003e\u003cli\u003e group : Environment\n\u003c/li\u003e\u003cli\u003e source : \u003cem\u003efilename\u003c/em\u003e.ConfigFileWidget\n\u003c/li\u003e\u003cli\u003e timespan : Persistent\n\u003c/li\u003e\u003cli\u003e data : EString config item value\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eConfig files follow a fairly simple grammar:\n\u003c/p\u003e\u003cp\u003eConfigFile := [ConfigLine]\n\u003c/p\u003e\u003cp\u003eConfigLine := \u003ca\u003ekey\u003c/a\u003e spaces = spaces \u003ca\u003evalue\u003c/a\u003e endl | CommentLine | BlankLine\n\u003c/p\u003e\u003cp\u003eCommentLine := # anychars endl\n\u003c/p\u003e\u003cp\u003eBlankLine := spaces endl\n\u003c/p\u003e",
          "module": "App.Widgets.Environment",
          "name": "configFileWidget",
          "package": "buster",
          "signature": "String -\u003e Widget [EData a]",
          "source": "src/App-Widgets-Environment.html#configFileWidget",
          "type": "function"
        },
        "index": {
          "description": "Read config file and place it on the bus as individual events for each config item following the pattern name config item name group Environment source filename ConfigFileWidget timespan Persistent data EString config item value Config files follow fairly simple grammar ConfigFile ConfigLine ConfigLine key spaces spaces value endl CommentLine BlankLine CommentLine anychars endl BlankLine spaces endl",
          "hierarchy": "App Widgets Environment",
          "module": "App.Widgets.Environment",
          "name": "configFileWidget",
          "normalized": "String-\u003eWidget[EData a]",
          "package": "buster",
          "partial": "File Widget",
          "signature": "String-\u003eWidget[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Widgets-Environment.html#v:configFileWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in all environment variables and place them on the bus individually as events following the pattern:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e name : variable name\n\u003c/li\u003e\u003cli\u003e group : Environment\n\u003c/li\u003e\u003cli\u003e source : EnvironmentWidget\n\u003c/li\u003e\u003cli\u003e timespan : Persistent\n\u003c/li\u003e\u003cli\u003e data : EString variable value\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "App.Widgets.Environment",
          "name": "environmentWidget",
          "package": "buster",
          "signature": "Widget [EData a]",
          "source": "src/App-Widgets-Environment.html#environmentWidget",
          "type": "function"
        },
        "index": {
          "description": "Read in all environment variables and place them on the bus individually as events following the pattern name variable name group Environment source EnvironmentWidget timespan Persistent data EString variable value",
          "hierarchy": "App Widgets Environment",
          "module": "App.Widgets.Environment",
          "name": "environmentWidget",
          "normalized": "Widget[EData a]",
          "package": "buster",
          "partial": "Widget",
          "signature": "Widget[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Widgets-Environment.html#v:environmentWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the program name as an event on the bus using the following pattern:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e name : ProgramName\n\u003c/li\u003e\u003cli\u003e group : Environment\n\u003c/li\u003e\u003cli\u003e source : ProgramNameWidget\n\u003c/li\u003e\u003cli\u003e timespan : Persistent\n\u003c/li\u003e\u003cli\u003e data : EString progran name\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "App.Widgets.Environment",
          "name": "progNameWidget",
          "package": "buster",
          "signature": "Widget [EData a]",
          "source": "src/App-Widgets-Environment.html#progNameWidget",
          "type": "function"
        },
        "index": {
          "description": "Set the program name as an event on the bus using the following pattern name ProgramName group Environment source ProgramNameWidget timespan Persistent data EString progran name",
          "hierarchy": "App Widgets Environment",
          "module": "App.Widgets.Environment",
          "name": "progNameWidget",
          "normalized": "Widget[EData a]",
          "package": "buster",
          "partial": "Name Widget",
          "signature": "Widget[EData a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Widgets-Environment.html#v:progNameWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWidgets for sending a heartbeat out onto the bus to be caught by other behaviours.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "App.Widgets.Pacer",
          "name": "Pacer",
          "package": "buster",
          "source": "src/App-Widgets-Pacer.html",
          "type": "module"
        },
        "index": {
          "description": "Widgets for sending heartbeat out onto the bus to be caught by other behaviours",
          "hierarchy": "App Widgets Pacer",
          "module": "App.Widgets.Pacer",
          "name": "Pacer",
          "package": "buster",
          "partial": "Pacer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Widgets-Pacer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epaceMicrosecondsWidget timeout timername bus\u003c/code\u003e\n |\n | Send a heartbeat event out every \u003cem\u003etimeout\u003c/em\u003e microseconds to the bus\n\u003c/p\u003e",
          "module": "App.Widgets.Pacer",
          "name": "paceMicrosecondsWidget",
          "package": "buster",
          "signature": "Int -\u003e String -\u003e Widget [a]",
          "source": "src/App-Widgets-Pacer.html#paceMicrosecondsWidget",
          "type": "function"
        },
        "index": {
          "description": "paceMicrosecondsWidget timeout timername bus Send heartbeat event out every timeout microseconds to the bus",
          "hierarchy": "App Widgets Pacer",
          "module": "App.Widgets.Pacer",
          "name": "paceMicrosecondsWidget",
          "normalized": "Int-\u003eString-\u003eWidget[a]",
          "package": "buster",
          "partial": "Microseconds Widget",
          "signature": "Int-\u003eString-\u003eWidget[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Widgets-Pacer.html#v:paceMicrosecondsWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epaceMillisecondsWidget timeout timername bus\u003c/code\u003e\n |\n | Send a heartbeat event out every \u003cem\u003etimeout\u003c/em\u003e milliseconds to the bus\n\u003c/p\u003e",
          "module": "App.Widgets.Pacer",
          "name": "paceMillisecondsWidget",
          "package": "buster",
          "signature": "Int -\u003e String -\u003e Widget [a]",
          "source": "src/App-Widgets-Pacer.html#paceMillisecondsWidget",
          "type": "function"
        },
        "index": {
          "description": "paceMillisecondsWidget timeout timername bus Send heartbeat event out every timeout milliseconds to the bus",
          "hierarchy": "App Widgets Pacer",
          "module": "App.Widgets.Pacer",
          "name": "paceMillisecondsWidget",
          "normalized": "Int-\u003eString-\u003eWidget[a]",
          "package": "buster",
          "partial": "Milliseconds Widget",
          "signature": "Int-\u003eString-\u003eWidget[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Widgets-Pacer.html#v:paceMillisecondsWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epaceSecondsWidget timeout timername bus\u003c/code\u003e\n |\n | Send a heartbeat event out every \u003cem\u003etimeout\u003c/em\u003e seconds to the bus\n\u003c/p\u003e",
          "module": "App.Widgets.Pacer",
          "name": "paceSecondsWidget",
          "package": "buster",
          "signature": "Double -\u003e String -\u003e Widget [a]",
          "source": "src/App-Widgets-Pacer.html#paceSecondsWidget",
          "type": "function"
        },
        "index": {
          "description": "paceSecondsWidget timeout timername bus Send heartbeat event out every timeout seconds to the bus",
          "hierarchy": "App Widgets Pacer",
          "module": "App.Widgets.Pacer",
          "name": "paceSecondsWidget",
          "normalized": "Double-\u003eString-\u003eWidget[a]",
          "package": "buster",
          "partial": "Seconds Widget",
          "signature": "Double-\u003eString-\u003eWidget[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/buster/docs/App-Widgets-Pacer.html#v:paceSecondsWidget"
      }
    }
  ]
]