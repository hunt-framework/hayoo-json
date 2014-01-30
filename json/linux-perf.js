[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library to parse and pretty print the contents of \u003ccode\u003eperf.data\u003c/code\u003e file,\n the output of the \u003ccode\u003eperf record\u003c/code\u003e command on\n Linux (Linux performance counter information).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Profiling.Linux.Perf.Parse",
        "fct-package": "linux-perf",
        "fct-signature": "module",
        "fct-source": "src/Profiling-Linux-Perf-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "library to parse and pretty print the contents of perf.data file the output of the perf record command on Linux Linux performance counter information",
        "hierarchy": "Profiling Linux Perf Parse",
        "module": "Profiling.Linux.Perf.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#v:readAttributeIDs",
      "description": {
        "fct-descr": "\u003cp\u003eRead the \u003ca\u003eEventID\u003c/a\u003es from the input file handle.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Parse",
        "fct-package": "linux-perf",
        "fct-signature": "Handle-\u003e FileAttr-\u003e IO [EventID]",
        "fct-type": "function",
        "title": "readAttributeIDs"
      },
      "index": {
        "description": "Read the EventID from the input file handle",
        "hierarchy": "Profiling Linux Perf Parse",
        "module": "Profiling.Linux.Perf.Parse",
        "name": "readAttributeIDs",
        "normalized": "Handle-\u003eFileAttr-\u003eIO[EventID]",
        "package": "linux-perf",
        "partial": "Attribute IDs",
        "signature": "Handle-\u003eFileAttr-\u003eIO[EventID]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#v:readAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eRead the perf event attributes from the input file handle.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Parse",
        "fct-package": "linux-perf",
        "fct-signature": "Handle-\u003e FileHeader-\u003e IO [FileAttr]",
        "fct-type": "function",
        "title": "readAttributes"
      },
      "index": {
        "description": "Read the perf event attributes from the input file handle",
        "hierarchy": "Profiling Linux Perf Parse",
        "module": "Profiling.Linux.Perf.Parse",
        "name": "readAttributes",
        "normalized": "Handle-\u003eFileHeader-\u003eIO[FileAttr]",
        "package": "linux-perf",
        "partial": "Attributes",
        "signature": "Handle-\u003eFileHeader-\u003eIO[FileAttr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#v:readEvent",
      "description": {
        "fct-descr": "\u003cp\u003eRead an event record from the input file handle.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Parse",
        "fct-package": "linux-perf",
        "fct-signature": "Handle-\u003e ByteCount64-\u003e SampleTypeBitMap-\u003e IO Event",
        "fct-type": "function",
        "title": "readEvent"
      },
      "index": {
        "description": "Read an event record from the input file handle",
        "hierarchy": "Profiling Linux Perf Parse",
        "module": "Profiling.Linux.Perf.Parse",
        "name": "readEvent",
        "normalized": "Handle-\u003eByteCount-\u003eSampleTypeBitMap-\u003eIO Event",
        "package": "linux-perf",
        "partial": "Event",
        "signature": "Handle-\u003eByteCount-\u003eSampleTypeBitMap-\u003eIO Event"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#v:readEventHeader",
      "description": {
        "fct-descr": "\u003cp\u003eRead an \u003ca\u003eEventHeader\u003c/a\u003e from the input file handle.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Parse",
        "fct-package": "linux-perf",
        "fct-signature": "Handle-\u003e ByteCount64-\u003e IO EventHeader",
        "fct-type": "function",
        "title": "readEventHeader"
      },
      "index": {
        "description": "Read an EventHeader from the input file handle",
        "hierarchy": "Profiling Linux Perf Parse",
        "module": "Profiling.Linux.Perf.Parse",
        "name": "readEventHeader",
        "normalized": "Handle-\u003eByteCount-\u003eIO EventHeader",
        "package": "linux-perf",
        "partial": "Event Header",
        "signature": "Handle-\u003eByteCount-\u003eIO EventHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#v:readEventTypes",
      "description": {
        "fct-descr": "\u003cp\u003eRead the event type information from the input file handle.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Parse",
        "fct-package": "linux-perf",
        "fct-signature": "Handle-\u003e FileHeader-\u003e IO [TraceEventType]",
        "fct-type": "function",
        "title": "readEventTypes"
      },
      "index": {
        "description": "Read the event type information from the input file handle",
        "hierarchy": "Profiling Linux Perf Parse",
        "module": "Profiling.Linux.Perf.Parse",
        "name": "readEventTypes",
        "normalized": "Handle-\u003eFileHeader-\u003eIO[TraceEventType]",
        "package": "linux-perf",
        "partial": "Event Types",
        "signature": "Handle-\u003eFileHeader-\u003eIO[TraceEventType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#v:readHeader",
      "description": {
        "fct-descr": "\u003cp\u003eRead the perf data \u003ca\u003eFileHeader\u003c/a\u003e from the input file handle.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Parse",
        "fct-package": "linux-perf",
        "fct-signature": "Handle-\u003e IO FileHeader",
        "fct-type": "function",
        "title": "readHeader"
      },
      "index": {
        "description": "Read the perf data FileHeader from the input file handle",
        "hierarchy": "Profiling Linux Perf Parse",
        "module": "Profiling.Linux.Perf.Parse",
        "name": "readHeader",
        "normalized": "Handle-\u003eIO FileHeader",
        "package": "linux-perf",
        "partial": "Header",
        "signature": "Handle-\u003eIO FileHeader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Pretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printing utilities.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Profiling.Linux.Perf.Pretty",
        "fct-package": "linux-perf",
        "fct-signature": "module",
        "fct-source": "src/Profiling-Linux-Perf-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "Pretty printing utilities",
        "hierarchy": "Profiling Linux Perf Pretty",
        "module": "Profiling.Linux.Perf.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Pretty.html#t:Pretty",
      "description": {
        "fct-descr": "\u003cp\u003ePretty printing interface.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Pretty",
        "fct-package": "linux-perf",
        "fct-signature": "class",
        "fct-source": "src/Profiling-Linux-Perf-Pretty.html#Pretty",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "Pretty printing interface",
        "hierarchy": "Profiling Linux Perf Pretty",
        "module": "Profiling.Linux.Perf.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Pretty.html#v:pretty",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a document for a value.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Pretty",
        "fct-package": "linux-perf",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Profiling-Linux-Perf-Pretty.html#pretty",
        "fct-type": "method",
        "title": "pretty"
      },
      "index": {
        "description": "Generate document for value",
        "hierarchy": "Profiling Linux Perf Pretty",
        "module": "Profiling.Linux.Perf.Pretty",
        "name": "pretty",
        "normalized": "a-\u003eDoc",
        "package": "linux-perf",
        "partial": "",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Pretty.html#v:prettyString",
      "description": {
        "fct-descr": "\u003cp\u003eRender an instance of \u003ca\u003ePretty\u003c/a\u003e as a \u003ca\u003eString\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Pretty",
        "fct-package": "linux-perf",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Profiling-Linux-Perf-Pretty.html#prettyString",
        "fct-type": "function",
        "title": "prettyString"
      },
      "index": {
        "description": "Render an instance of Pretty as String",
        "hierarchy": "Profiling Linux Perf Pretty",
        "module": "Profiling.Linux.Perf.Pretty",
        "name": "prettyString",
        "normalized": "a-\u003eString",
        "package": "linux-perf",
        "partial": "String",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Pretty.html#v:showBits",
      "description": {
        "fct-descr": "\u003cp\u003eRender an instance of \u003ca\u003eBits\u003c/a\u003e as a \u003ca\u003eString\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Pretty",
        "fct-package": "linux-perf",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Profiling-Linux-Perf-Pretty.html#showBits",
        "fct-type": "function",
        "title": "showBits"
      },
      "index": {
        "description": "Render an instance of Bits as String",
        "hierarchy": "Profiling Linux Perf Pretty",
        "module": "Profiling.Linux.Perf.Pretty",
        "name": "showBits",
        "normalized": "a-\u003eString",
        "package": "linux-perf",
        "partial": "Bits",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for representing the parsed contents of a \u003ccode\u003eperf.data\u003c/code\u003e file output\n the \u003ccode\u003eperf record\u003c/code\u003e command on Linux (Linux performance counter information).\n\u003c/p\u003e\u003cp\u003eThere is an intentional close correspondence between the types in this\n module and the representation in the C implementation of perf.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "module",
        "fct-source": "src/Profiling-Linux-Perf-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Types for representing the parsed contents of perf.data file output the perf record command on Linux Linux performance counter information There is an intentional close correspondence between the types in this module and the representation in the implementation of perf",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "Types",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:ByteCount16",
      "description": {
        "fct-descr": "\u003cp\u003eA 16 bit measurement in bytes. For example the size of an object, or an offset.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "newtype",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#ByteCount16",
        "fct-type": "newtype",
        "title": "ByteCount16"
      },
      "index": {
        "description": "bit measurement in bytes For example the size of an object or an offset",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ByteCount16",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Byte Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:ByteCount32",
      "description": {
        "fct-descr": "\u003cp\u003eA 32 bit measurement in bytes. For example the size of an object, or an offset.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "newtype",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#ByteCount32",
        "fct-type": "newtype",
        "title": "ByteCount32"
      },
      "index": {
        "description": "bit measurement in bytes For example the size of an object or an offset",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ByteCount32",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Byte Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:ByteCount64",
      "description": {
        "fct-descr": "\u003cp\u003eA 64 bit measurement in bytes. For example the size of an object, or an offset.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "newtype",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#ByteCount64",
        "fct-type": "newtype",
        "title": "ByteCount64"
      },
      "index": {
        "description": "bit measurement in bytes For example the size of an object or an offset",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ByteCount64",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Byte Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eA Single event record.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Single event record",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "Event",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventAttr",
      "description": {
        "fct-descr": "\u003cp\u003eCorresponds with the \u003ccode\u003eperf_event_attr\u003c/code\u003e struct in \u003ccode\u003einclude/linux/perf_event.h\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "data",
        "title": "EventAttr"
      },
      "index": {
        "description": "Corresponds with the perf event attr struct in include linux perf event.h",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventAttr",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventAttrFlag",
      "description": {
        "fct-descr": "\u003cp\u003eSee struct \u003ccode\u003eperf_event_attr\u003c/code\u003e in \u003ccode\u003elinux/perf_event.h\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "data",
        "title": "EventAttrFlag"
      },
      "index": {
        "description": "See struct perf event attr in linux perf event.h",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventAttrFlag",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event Attr Flag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventCPUMode",
      "description": {
        "fct-descr": "\u003cp\u003eA bitfield in \u003ccode\u003eperf_event_header-\u003emisc\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventCPUMode",
        "fct-type": "data",
        "title": "EventCPUMode"
      },
      "index": {
        "description": "bitfield in perf event header misc",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventCPUMode",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event CPUMode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventHeader",
      "description": {
        "fct-descr": "\u003cp\u003eCorresponds with the \u003ccode\u003eperf_event_header\u003c/code\u003e struct in \u003ccode\u003e\u003cperf source\u003e/util/perf_event.h\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventHeader",
        "fct-type": "data",
        "title": "EventHeader"
      },
      "index": {
        "description": "Corresponds with the perf event header struct in perf source util perf event.h",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventHeader",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventID",
      "description": {
        "fct-descr": "\u003cp\u003eEvent ID.\n Not really an identity. This number is used to link\n an event to an event type. Multiple events can have the same EventID,\n which means they all have the same event type.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "newtype",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventID",
        "fct-type": "newtype",
        "title": "EventID"
      },
      "index": {
        "description": "Event ID Not really an identity This number is used to link an event to an event type Multiple events can have the same EventID which means they all have the same event type",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventPayload",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "data",
        "title": "EventPayload"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventPayload",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventSource",
      "description": {
        "fct-descr": "\u003cp\u003eCorresponds with the enum \u003ccode\u003eperf_type_id\u003c/code\u003e in \u003ccode\u003einclude/linux/perf_event.h\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventSource",
        "fct-type": "data",
        "title": "EventSource"
      },
      "index": {
        "description": "Corresponds with the enum perf type id in include linux perf event.h",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventSource",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventType",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding of the \u003ccode\u003eperf_event_header-\u003etype\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventType",
        "fct-type": "data",
        "title": "EventType"
      },
      "index": {
        "description": "Encoding of the perf event header type",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventType",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventTypeID",
      "description": {
        "fct-descr": "\u003cp\u003eEvent type ID (magic unique number of an event type).\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "newtype",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventTypeID",
        "fct-type": "newtype",
        "title": "EventTypeID"
      },
      "index": {
        "description": "Event type ID magic unique number of an event type",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventTypeID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event Type ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:FileAttr",
      "description": {
        "fct-descr": "\u003cp\u003eLayout of event attribute and attribute ids.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileAttr",
        "fct-type": "data",
        "title": "FileAttr"
      },
      "index": {
        "description": "Layout of event attribute and attribute ids",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "FileAttr",
        "normalized": "",
        "package": "linux-perf",
        "partial": "File Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:FileHeader",
      "description": {
        "fct-descr": "\u003cp\u003eCorresponds with the \u003ccode\u003eperf_file_header\u003c/code\u003e struct in \u003ccode\u003e\u003cperf source\u003e/util/header.h\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
        "fct-type": "data",
        "title": "FileHeader"
      },
      "index": {
        "description": "Corresponds with the perf file header struct in perf source util header.h",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "FileHeader",
        "normalized": "",
        "package": "linux-perf",
        "partial": "File Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:FileSection",
      "description": {
        "fct-descr": "\u003cp\u003eCorresponds with the \u003ccode\u003eperf_file_section\u003c/code\u003e struct in \u003ccode\u003e\u003cperf source\u003e/util/header.h\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileSection",
        "fct-type": "data",
        "title": "FileSection"
      },
      "index": {
        "description": "Corresponds with the perf file section struct in perf source util header.h",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "FileSection",
        "normalized": "",
        "package": "linux-perf",
        "partial": "File Section",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:PID",
      "description": {
        "fct-descr": "\u003cp\u003eProcess ID.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "newtype",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#PID",
        "fct-type": "newtype",
        "title": "PID"
      },
      "index": {
        "description": "Process ID",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:PerfData",
      "description": {
        "fct-descr": "\u003cp\u003eThe various parts of the perf.data file collected together.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#PerfData",
        "fct-type": "data",
        "title": "PerfData"
      },
      "index": {
        "description": "The various parts of the perf.data file collected together",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PerfData",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Perf Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:SampleFormat",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about what is stored in a sample event.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
        "fct-type": "data",
        "title": "SampleFormat"
      },
      "index": {
        "description": "Information about what is stored in sample event",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "SampleFormat",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Sample Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:SampleTypeBitMap",
      "description": {
        "fct-descr": "\u003cp\u003eA bitmap encoding information about the content of sample events.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "newtype",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleTypeBitMap",
        "fct-type": "newtype",
        "title": "SampleTypeBitMap"
      },
      "index": {
        "description": "bitmap encoding information about the content of sample events",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "SampleTypeBitMap",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Sample Type Bit Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:TID",
      "description": {
        "fct-descr": "\u003cp\u003eThread ID.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "newtype",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#TID",
        "fct-type": "newtype",
        "title": "TID"
      },
      "index": {
        "description": "Thread ID",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "TID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "TID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:TimeStamp",
      "description": {
        "fct-descr": "\u003cp\u003eMeasurement of time passed in nanoseconds since a given point.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "newtype",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#TimeStamp",
        "fct-type": "newtype",
        "title": "TimeStamp"
      },
      "index": {
        "description": "Measurement of time passed in nanoseconds since given point",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "TimeStamp",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Time Stamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:TraceEventType",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity and printable name of an event type.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#TraceEventType",
        "fct-type": "data",
        "title": "TraceEventType"
      },
      "index": {
        "description": "Identity and printable name of an event type",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "TraceEventType",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Trace Event Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ArbitrarySkid",
      "description": {
        "fct-descr": "\u003cp\u003eprecise_ip, See also \u003ccode\u003ePERF_RECORD_MISC_EXACT_IP\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ArbitrarySkid",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "ArbitrarySkid"
      },
      "index": {
        "description": "precise ip See also PERF RECORD MISC EXACT IP",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ArbitrarySkid",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Arbitrary Skid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ByteCount16",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount16",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#ByteCount16",
        "fct-type": "function",
        "title": "ByteCount16"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ByteCount16",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Byte Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ByteCount32",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount32",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#ByteCount32",
        "fct-type": "function",
        "title": "ByteCount32"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ByteCount32",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Byte Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ByteCount64",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#ByteCount64",
        "fct-type": "function",
        "title": "ByteCount64"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ByteCount64",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Byte Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Comm",
      "description": {
        "fct-descr": "\u003cp\u003einclude comm data\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Comm",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "Comm"
      },
      "index": {
        "description": "include comm data",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "Comm",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Comm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:CommEvent",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "CommEvent",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "CommEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "CommEvent",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Comm Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:CompulsoryZeroSkid",
      "description": {
        "fct-descr": "\u003cp\u003eprecise_ip, See also \u003ccode\u003ePERF_RECORD_MISC_EXACT_IP\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "CompulsoryZeroSkid",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "CompulsoryZeroSkid"
      },
      "index": {
        "description": "precise ip See also PERF RECORD MISC EXACT IP",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "CompulsoryZeroSkid",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Compulsory Zero Skid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ConstantSkid",
      "description": {
        "fct-descr": "\u003cp\u003eprecise_ip, See also \u003ccode\u003ePERF_RECORD_MISC_EXACT_IP\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ConstantSkid",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "ConstantSkid"
      },
      "index": {
        "description": "precise ip See also PERF RECORD MISC EXACT IP",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ConstantSkid",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Constant Skid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Disabled",
      "description": {
        "fct-descr": "\u003cp\u003eoff by default\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Disabled",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "Disabled"
      },
      "index": {
        "description": "off by default",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "Disabled",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Disabled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:EnableOnExec",
      "description": {
        "fct-descr": "\u003cp\u003enext exec enables\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EnableOnExec",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "EnableOnExec"
      },
      "index": {
        "description": "next exec enables",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EnableOnExec",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Enable On Exec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Event",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Event",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#Event",
        "fct-type": "function",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "Event",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:EventAttr",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EventAttr",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "function",
        "title": "EventAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventAttr",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:EventHeader",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EventHeader",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventHeader",
        "fct-type": "function",
        "title": "EventHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventHeader",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:EventID",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EventID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventID",
        "fct-type": "function",
        "title": "EventID"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:EventTypeID",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EventTypeID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventTypeID",
        "fct-type": "function",
        "title": "EventTypeID"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "EventTypeID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Event Type ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ExcludeHV",
      "description": {
        "fct-descr": "\u003cp\u003editto hypervisor\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ExcludeHV",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "ExcludeHV"
      },
      "index": {
        "description": "ditto hypervisor",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ExcludeHV",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Exclude HV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ExcludeIdle",
      "description": {
        "fct-descr": "\u003cp\u003edon't count when idle\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ExcludeIdle",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "ExcludeIdle"
      },
      "index": {
        "description": "don count when idle",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ExcludeIdle",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Exclude Idle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ExcludeKernel",
      "description": {
        "fct-descr": "\u003cp\u003editto kernel\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ExcludeKernel",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "ExcludeKernel"
      },
      "index": {
        "description": "ditto kernel",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ExcludeKernel",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Exclude Kernel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ExcludeUser",
      "description": {
        "fct-descr": "\u003cp\u003edon't count user\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ExcludeUser",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "ExcludeUser"
      },
      "index": {
        "description": "don count user",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ExcludeUser",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Exclude User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Exclusive",
      "description": {
        "fct-descr": "\u003cp\u003eonly group on PMU\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Exclusive",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "Exclusive"
      },
      "index": {
        "description": "only group on PMU",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "Exclusive",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Exclusive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ExitEvent",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ExitEvent",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "ExitEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ExitEvent",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Exit Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:FileAttr",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "FileAttr",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileAttr",
        "fct-type": "function",
        "title": "FileAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "FileAttr",
        "normalized": "",
        "package": "linux-perf",
        "partial": "File Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:FileHeader",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "FileHeader",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
        "fct-type": "function",
        "title": "FileHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "FileHeader",
        "normalized": "",
        "package": "linux-perf",
        "partial": "File Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:FileSection",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "FileSection",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileSection",
        "fct-type": "function",
        "title": "FileSection"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "FileSection",
        "normalized": "",
        "package": "linux-perf",
        "partial": "File Section",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ForkEvent",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ForkEvent",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "ForkEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ForkEvent",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Fork Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Freq",
      "description": {
        "fct-descr": "\u003cp\u003euse freq, not period\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Freq",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "Freq"
      },
      "index": {
        "description": "use freq not period",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "Freq",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Freq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Inherit",
      "description": {
        "fct-descr": "\u003cp\u003echildren inherit it\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Inherit",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "Inherit"
      },
      "index": {
        "description": "children inherit it",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "Inherit",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Inherit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:InheritStat",
      "description": {
        "fct-descr": "\u003cp\u003eper task counts\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "InheritStat",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "InheritStat"
      },
      "index": {
        "description": "per task counts",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "InheritStat",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Inherit Stat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:LostEvent",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "LostEvent",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "LostEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "LostEvent",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Lost Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Mmap",
      "description": {
        "fct-descr": "\u003cp\u003einclude mmap data\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Mmap",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "Mmap"
      },
      "index": {
        "description": "include mmap data",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "Mmap",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Mmap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:MmapData",
      "description": {
        "fct-descr": "\u003cp\u003enon-exec mmap data\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "MmapData",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "MmapData"
      },
      "index": {
        "description": "non-exec mmap data",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "MmapData",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Mmap Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:MmapEvent",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "MmapEvent",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "MmapEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "MmapEvent",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Mmap Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_COMM",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_COMM",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventType",
        "fct-type": "function",
        "title": "PERF_RECORD_COMM"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_COMM",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD COMM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_CPUMODE_UNKNOWN",
      "description": {
        "fct-descr": "\u003cp\u003e0\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_CPUMODE_UNKNOWN",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventCPUMode",
        "fct-type": "function",
        "title": "PERF_RECORD_CPUMODE_UNKNOWN"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_CPUMODE_UNKNOWN",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD CPUMODE UNKNOWN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_EXIT",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_EXIT",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventType",
        "fct-type": "function",
        "title": "PERF_RECORD_EXIT"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_EXIT",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD EXIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_FORK",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_FORK",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventType",
        "fct-type": "function",
        "title": "PERF_RECORD_FORK"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_FORK",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD FORK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_LOST",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_LOST",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventType",
        "fct-type": "function",
        "title": "PERF_RECORD_LOST"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_LOST",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD LOST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_MISC_HYPERVISOR",
      "description": {
        "fct-descr": "\u003cp\u003e3\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_MISC_HYPERVISOR",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventCPUMode",
        "fct-type": "function",
        "title": "PERF_RECORD_MISC_HYPERVISOR"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_MISC_HYPERVISOR",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD MISC HYPERVISOR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_MISC_KERNEL",
      "description": {
        "fct-descr": "\u003cp\u003e1\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_MISC_KERNEL",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventCPUMode",
        "fct-type": "function",
        "title": "PERF_RECORD_MISC_KERNEL"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_MISC_KERNEL",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD MISC KERNEL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_MISC_USER",
      "description": {
        "fct-descr": "\u003cp\u003e2\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_MISC_USER",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventCPUMode",
        "fct-type": "function",
        "title": "PERF_RECORD_MISC_USER"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_MISC_USER",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD MISC USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_MMAP",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_MMAP",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventType",
        "fct-type": "function",
        "title": "PERF_RECORD_MMAP"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_MMAP",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD MMAP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_READ",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_READ",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventType",
        "fct-type": "function",
        "title": "PERF_RECORD_READ"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_READ",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD READ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_SAMPLE",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_SAMPLE",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventType",
        "fct-type": "function",
        "title": "PERF_RECORD_SAMPLE"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_SAMPLE",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD SAMPLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_THROTTLE",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_THROTTLE",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventType",
        "fct-type": "function",
        "title": "PERF_RECORD_THROTTLE"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_THROTTLE",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD THROTTLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_UNKNOWN",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_UNKNOWN Int",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventType",
        "fct-type": "function",
        "title": "PERF_RECORD_UNKNOWN"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_UNKNOWN",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD UNKNOWN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_UNTHROTTLE",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_RECORD_UNTHROTTLE",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventType",
        "fct-type": "function",
        "title": "PERF_RECORD_UNTHROTTLE"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_RECORD_UNTHROTTLE",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF RECORD UNTHROTTLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_ADDR",
      "description": {
        "fct-descr": "\u003cp\u003e1U \u003c\u003c 3\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_SAMPLE_ADDR",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
        "fct-type": "function",
        "title": "PERF_SAMPLE_ADDR"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_SAMPLE_ADDR",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF SAMPLE ADDR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_CALLCHAIN",
      "description": {
        "fct-descr": "\u003cp\u003e1U \u003c\u003c 5\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_SAMPLE_CALLCHAIN",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
        "fct-type": "function",
        "title": "PERF_SAMPLE_CALLCHAIN"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_SAMPLE_CALLCHAIN",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF SAMPLE CALLCHAIN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_CPU",
      "description": {
        "fct-descr": "\u003cp\u003e1U \u003c\u003c 7\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_SAMPLE_CPU",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
        "fct-type": "function",
        "title": "PERF_SAMPLE_CPU"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_SAMPLE_CPU",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF SAMPLE CPU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_ID",
      "description": {
        "fct-descr": "\u003cp\u003e1U \u003c\u003c 6\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_SAMPLE_ID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
        "fct-type": "function",
        "title": "PERF_SAMPLE_ID"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_SAMPLE_ID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF SAMPLE ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_IP",
      "description": {
        "fct-descr": "\u003cp\u003e1U \u003c\u003c 0\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_SAMPLE_IP",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
        "fct-type": "function",
        "title": "PERF_SAMPLE_IP"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_SAMPLE_IP",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF SAMPLE IP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_PERIOD",
      "description": {
        "fct-descr": "\u003cp\u003e1U \u003c\u003c 8\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_SAMPLE_PERIOD",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
        "fct-type": "function",
        "title": "PERF_SAMPLE_PERIOD"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_SAMPLE_PERIOD",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF SAMPLE PERIOD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_RAW",
      "description": {
        "fct-descr": "\u003cp\u003e1U \u003c\u003c 10\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_SAMPLE_RAW",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
        "fct-type": "function",
        "title": "PERF_SAMPLE_RAW"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_SAMPLE_RAW",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF SAMPLE RAW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_READ",
      "description": {
        "fct-descr": "\u003cp\u003e1U \u003c\u003c 4\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_SAMPLE_READ",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
        "fct-type": "function",
        "title": "PERF_SAMPLE_READ"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_SAMPLE_READ",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF SAMPLE READ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_STREAM_ID",
      "description": {
        "fct-descr": "\u003cp\u003e1U \u003c\u003c 9\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_SAMPLE_STREAM_ID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
        "fct-type": "function",
        "title": "PERF_SAMPLE_STREAM_ID"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_SAMPLE_STREAM_ID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF SAMPLE STREAM ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_TID",
      "description": {
        "fct-descr": "\u003cp\u003e1U \u003c\u003c 1\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_SAMPLE_TID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
        "fct-type": "function",
        "title": "PERF_SAMPLE_TID"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_SAMPLE_TID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF SAMPLE TID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_TIME",
      "description": {
        "fct-descr": "\u003cp\u003e1U \u003c\u003c 2\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PERF_SAMPLE_TIME",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
        "fct-type": "function",
        "title": "PERF_SAMPLE_TIME"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PERF_SAMPLE_TIME",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PERF SAMPLE TIME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PID",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#PID",
        "fct-type": "function",
        "title": "PID"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "PID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfData",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PerfData",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#PerfData",
        "fct-type": "function",
        "title": "PerfData"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PerfData",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Perf Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeBreakpoint",
      "description": {
        "fct-descr": "\u003cp\u003e5\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PerfTypeBreakpoint",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventSource",
        "fct-type": "function",
        "title": "PerfTypeBreakpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PerfTypeBreakpoint",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Perf Type Breakpoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeHardware",
      "description": {
        "fct-descr": "\u003cp\u003e0\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PerfTypeHardware",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventSource",
        "fct-type": "function",
        "title": "PerfTypeHardware"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PerfTypeHardware",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Perf Type Hardware",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeHwCache",
      "description": {
        "fct-descr": "\u003cp\u003e3\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PerfTypeHwCache",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventSource",
        "fct-type": "function",
        "title": "PerfTypeHwCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PerfTypeHwCache",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Perf Type Hw Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeRaw",
      "description": {
        "fct-descr": "\u003cp\u003e4\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PerfTypeRaw",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventSource",
        "fct-type": "function",
        "title": "PerfTypeRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PerfTypeRaw",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Perf Type Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeSoftware",
      "description": {
        "fct-descr": "\u003cp\u003e1\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PerfTypeSoftware",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventSource",
        "fct-type": "function",
        "title": "PerfTypeSoftware"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PerfTypeSoftware",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Perf Type Software",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeTracePoint",
      "description": {
        "fct-descr": "\u003cp\u003e2\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PerfTypeTracePoint",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventSource",
        "fct-type": "function",
        "title": "PerfTypeTracePoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PerfTypeTracePoint",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Perf Type Trace Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeUnknown",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PerfTypeUnknown",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventSource",
        "fct-type": "function",
        "title": "PerfTypeUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "PerfTypeUnknown",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Perf Type Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Pinned",
      "description": {
        "fct-descr": "\u003cp\u003emust always be on PMU\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Pinned",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "Pinned"
      },
      "index": {
        "description": "must always be on PMU",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "Pinned",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Pinned",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ReadEvent",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ReadEvent",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "ReadEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ReadEvent",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Read Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:RequestedZeroSkid",
      "description": {
        "fct-descr": "\u003cp\u003eprecise_ip, See also \u003ccode\u003ePERF_RECORD_MISC_EXACT_IP\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "RequestedZeroSkid",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "RequestedZeroSkid"
      },
      "index": {
        "description": "precise ip See also PERF RECORD MISC EXACT IP",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "RequestedZeroSkid",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Requested Zero Skid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:SampleEvent",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "SampleEvent",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "SampleEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "SampleEvent",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Sample Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:SampleIdAll",
      "description": {
        "fct-descr": "\u003cp\u003esample_type all events\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "SampleIdAll",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "SampleIdAll"
      },
      "index": {
        "description": "sample type all events",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "SampleIdAll",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Sample Id All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:SampleTypeBitMap",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "SampleTypeBitMap",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleTypeBitMap",
        "fct-type": "function",
        "title": "SampleTypeBitMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "SampleTypeBitMap",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Sample Type Bit Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:TID",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "TID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#TID",
        "fct-type": "function",
        "title": "TID"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "TID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "TID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Task",
      "description": {
        "fct-descr": "\u003cp\u003etrace fork/exit\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Task",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "Task"
      },
      "index": {
        "description": "trace fork exit",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "Task",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Task",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ThrottleEvent",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ThrottleEvent",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "ThrottleEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ThrottleEvent",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Throttle Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:TimeStamp",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "TimeStamp",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#TimeStamp",
        "fct-type": "function",
        "title": "TimeStamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "TimeStamp",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Time Stamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:TraceEventType",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "TraceEventType",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#TraceEventType",
        "fct-type": "function",
        "title": "TraceEventType"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "TraceEventType",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Trace Event Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:UnThrottleEvent",
      "description": {
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "UnThrottleEvent",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "UnThrottleEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "UnThrottleEvent",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Un Throttle Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:UnknownEvent",
      "description": {
        "fct-descr": "\u003cp\u003eAn unrecognised event was encountered.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "UnknownEvent",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "UnknownEvent"
      },
      "index": {
        "description": "An unrecognised event was encountered",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "UnknownEvent",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Unknown Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:WaterMark",
      "description": {
        "fct-descr": "\u003cp\u003ewakeup_watermark\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "WaterMark",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
        "fct-type": "function",
        "title": "WaterMark"
      },
      "index": {
        "description": "wakeup watermark",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "WaterMark",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Water Mark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:byteCount16",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word16",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#ByteCount16",
        "fct-type": "function",
        "title": "byteCount16"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "byteCount16",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:byteCount32",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word32",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#ByteCount32",
        "fct-type": "function",
        "title": "byteCount32"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "byteCount32",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:byteCount64",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#ByteCount64",
        "fct-type": "function",
        "title": "byteCount64"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "byteCount64",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_bp_addr_or_config1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "function",
        "title": "ea_bp_addr_or_config1"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ea_bp_addr_or_config1",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_bp_len_or_config2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "function",
        "title": "ea_bp_len_or_config2"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ea_bp_len_or_config2",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_bp_type",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word32",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "function",
        "title": "ea_bp_type"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ea_bp_type",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_config",
      "description": {
        "fct-descr": "\u003cp\u003eLink to .event id of perf trace event type.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EventTypeID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "function",
        "title": "ea_config"
      },
      "index": {
        "description": "Link to event id of perf trace event type",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ea_config",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_flags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "function",
        "title": "ea_flags"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ea_flags",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_read_format",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "function",
        "title": "ea_read_format"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ea_read_format",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_sample_period_or_freq",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of events when a sample is generated if .freq\n is not set or frequency for sampling if .freq is set.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "function",
        "title": "ea_sample_period_or_freq"
      },
      "index": {
        "description": "Number of events when sample is generated if freq is not set or frequency for sampling if freq is set",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ea_sample_period_or_freq",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_sample_type",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about what is stored in the sampling record.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "SampleTypeBitMap",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "function",
        "title": "ea_sample_type"
      },
      "index": {
        "description": "Information about what is stored in the sampling record",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ea_sample_type",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_size",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the attr structure, for fwd/bwd compat.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount32",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "function",
        "title": "ea_size"
      },
      "index": {
        "description": "Size of the attr structure for fwd bwd compat",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ea_size",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_type",
      "description": {
        "fct-descr": "\u003cp\u003eMajor type: hardware\u003cem\u003esoftware\u003c/em\u003etracepoint/etc.\n defined as enum perf_type_id in include\u003cem\u003elinux\u003c/em\u003eperf_event.h\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EventSource",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "function",
        "title": "ea_type"
      },
      "index": {
        "description": "Major type hardware software tracepoint etc defined as enum perf type id in include linux perf event.h",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ea_type",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_wakeup_events_or_watermark",
      "description": {
        "fct-descr": "\u003cp\u003eWakeup every n events or bytes before wakeup.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word32",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
        "fct-type": "function",
        "title": "ea_wakeup_events_or_watermark"
      },
      "index": {
        "description": "Wakeup every events or bytes before wakeup",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ea_wakeup_events_or_watermark",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eh_misc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word16",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventHeader",
        "fct-type": "function",
        "title": "eh_misc"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eh_misc",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eh_size",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount16",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventHeader",
        "fct-type": "function",
        "title": "eh_size"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eh_size",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eh_type",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EventType",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventHeader",
        "fct-type": "function",
        "title": "eh_type"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eh_type",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ev_header",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about the structure of the event.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EventHeader",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#Event",
        "fct-type": "function",
        "title": "ev_header"
      },
      "index": {
        "description": "Information about the structure of the event",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ev_header",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ev_payload",
      "description": {
        "fct-descr": "\u003cp\u003eThe event data.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EventPayload",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#Event",
        "fct-type": "function",
        "title": "ev_payload"
      },
      "index": {
        "description": "The event data",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "ev_payload",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventID",
        "fct-type": "function",
        "title": "eventID"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_CommName",
      "description": {
        "fct-descr": "\u003cp\u003ename of the application\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteString",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_CommName"
      },
      "index": {
        "description": "name of the application",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_CommName",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Comm Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_Lost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_Lost"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_Lost",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Lost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_MmapFilename",
      "description": {
        "fct-descr": "\u003cp\u003ebinary file using this range\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteString",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_MmapFilename"
      },
      "index": {
        "description": "binary file using this range",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_MmapFilename",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Mmap Filename",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_MmapLen",
      "description": {
        "fct-descr": "\u003cp\u003esize of memory range\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_MmapLen"
      },
      "index": {
        "description": "size of memory range",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_MmapLen",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Mmap Len",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_MmapPgoff",
      "description": {
        "fct-descr": "\u003cp\u003epage offset\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_MmapPgoff"
      },
      "index": {
        "description": "page offset",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_MmapPgoff",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Mmap Pgoff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_MmapStart",
      "description": {
        "fct-descr": "\u003cp\u003estart of memory range\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_MmapStart"
      },
      "index": {
        "description": "start of memory range",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_MmapStart",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Mmap Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_ReadTimeEnabled",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_ReadTimeEnabled"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_ReadTimeEnabled",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Read Time Enabled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_ReadTimeRunning",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_ReadTimeRunning"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_ReadTimeRunning",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Read Time Running",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_ReadValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_ReadValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_ReadValue",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Read Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleAddr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Maybe Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_SampleAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_SampleAddr",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Sample Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleCPU",
      "description": {
        "fct-descr": "\u003cp\u003eCPU ID.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Maybe Word32",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_SampleCPU"
      },
      "index": {
        "description": "CPU ID",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_SampleCPU",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Sample CPU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleID",
      "description": {
        "fct-descr": "\u003cp\u003eEvent ID.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Maybe EventID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_SampleID"
      },
      "index": {
        "description": "Event ID",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_SampleID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Sample ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleIP",
      "description": {
        "fct-descr": "\u003cp\u003eInstruction pointer.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Maybe Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_SampleIP"
      },
      "index": {
        "description": "Instruction pointer",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_SampleIP",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Sample IP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SamplePID",
      "description": {
        "fct-descr": "\u003cp\u003eProcess ID.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Maybe PID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_SamplePID"
      },
      "index": {
        "description": "Process ID",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_SamplePID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Sample PID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SamplePeriod",
      "description": {
        "fct-descr": "\u003cp\u003eDuration of sample.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Maybe Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_SamplePeriod"
      },
      "index": {
        "description": "Duration of sample",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_SamplePeriod",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Sample Period",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleStreamID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Maybe Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_SampleStreamID"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_SampleStreamID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Sample Stream ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleTID",
      "description": {
        "fct-descr": "\u003cp\u003eThread ID.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Maybe TID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_SampleTID"
      },
      "index": {
        "description": "Thread ID",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_SampleTID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Sample TID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleTime",
      "description": {
        "fct-descr": "\u003cp\u003eTimestamp.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Maybe TimeStamp",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_SampleTime"
      },
      "index": {
        "description": "Timestamp",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_SampleTime",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload Sample Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EventID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_id",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_pid",
      "description": {
        "fct-descr": "\u003cp\u003eprocess id\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_pid"
      },
      "index": {
        "description": "process id",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_pid",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_ppid",
      "description": {
        "fct-descr": "\u003cp\u003eparent proecess id\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "PID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_ppid"
      },
      "index": {
        "description": "parent proecess id",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_ppid",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_ptid",
      "description": {
        "fct-descr": "\u003cp\u003eparent thread id\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "TID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_ptid"
      },
      "index": {
        "description": "parent thread id",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_ptid",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_stream_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_stream_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_stream_id",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_tid",
      "description": {
        "fct-descr": "\u003cp\u003ethread id\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "TID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_tid"
      },
      "index": {
        "description": "thread id",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_tid",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_time",
      "description": {
        "fct-descr": "\u003cp\u003etimestamp\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "TimeStamp",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
        "fct-type": "function",
        "title": "eventPayload_time"
      },
      "index": {
        "description": "timestamp",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventPayload_time",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Payload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventTypeID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#EventTypeID",
        "fct-type": "function",
        "title": "eventTypeID"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "eventTypeID",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Type ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fa_attr",
      "description": {
        "fct-descr": "\u003cp\u003eThe attribute payload.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EventAttr",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileAttr",
        "fct-type": "function",
        "title": "fa_attr"
      },
      "index": {
        "description": "The attribute payload",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "fa_attr",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fa_ids_offset",
      "description": {
        "fct-descr": "\u003cp\u003eFile offset to the ids section.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileAttr",
        "fct-type": "function",
        "title": "fa_ids_offset"
      },
      "index": {
        "description": "File offset to the ids section",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "fa_ids_offset",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fa_ids_size",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the ids section in bytes.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileAttr",
        "fct-type": "function",
        "title": "fa_ids_size"
      },
      "index": {
        "description": "Size of the ids section in bytes",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "fa_ids_size",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_adds_features",
      "description": {
        "fct-descr": "\u003cp\u003eBitfield.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "[Word32]",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
        "fct-type": "function",
        "title": "fh_adds_features"
      },
      "index": {
        "description": "Bitfield",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "fh_adds_features",
        "normalized": "[Word]",
        "package": "linux-perf",
        "partial": "",
        "signature": "[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_attr_size",
      "description": {
        "fct-descr": "\u003cp\u003eSize of one attribute section.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
        "fct-type": "function",
        "title": "fh_attr_size"
      },
      "index": {
        "description": "Size of one attribute section",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "fh_attr_size",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_attrs_offset",
      "description": {
        "fct-descr": "\u003cp\u003eFile offset to the attribute section.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
        "fct-type": "function",
        "title": "fh_attrs_offset"
      },
      "index": {
        "description": "File offset to the attribute section",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "fh_attrs_offset",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_attrs_size",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the attribute section in bytes.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
        "fct-type": "function",
        "title": "fh_attrs_size"
      },
      "index": {
        "description": "Size of the attribute section in bytes",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "fh_attrs_size",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_data_offset",
      "description": {
        "fct-descr": "\u003cp\u003eFile offset to the data section.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
        "fct-type": "function",
        "title": "fh_data_offset"
      },
      "index": {
        "description": "File offset to the data section",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "fh_data_offset",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_data_size",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the data section in bytes.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
        "fct-type": "function",
        "title": "fh_data_size"
      },
      "index": {
        "description": "Size of the data section in bytes",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "fh_data_size",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_event_offset",
      "description": {
        "fct-descr": "\u003cp\u003eFile offset to the event section.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
        "fct-type": "function",
        "title": "fh_event_offset"
      },
      "index": {
        "description": "File offset to the event section",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "fh_event_offset",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_event_size",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the event section in bytes.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
        "fct-type": "function",
        "title": "fh_event_size"
      },
      "index": {
        "description": "Size of the event section in bytes",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "fh_event_size",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_size",
      "description": {
        "fct-descr": "\u003cp\u003eSize of (this) header.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
        "fct-type": "function",
        "title": "fh_size"
      },
      "index": {
        "description": "Size of this header",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "fh_size",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:perfData_attrs",
      "description": {
        "fct-descr": "\u003cp\u003eCommon attributes of events.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "[FileAttr]",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#PerfData",
        "fct-type": "function",
        "title": "perfData_attrs"
      },
      "index": {
        "description": "Common attributes of events",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "perfData_attrs",
        "normalized": "[FileAttr]",
        "package": "linux-perf",
        "partial": "Data",
        "signature": "[FileAttr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:perfData_events",
      "description": {
        "fct-descr": "\u003cp\u003eThe event payload.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "[Event]",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#PerfData",
        "fct-type": "function",
        "title": "perfData_events"
      },
      "index": {
        "description": "The event payload",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "perfData_events",
        "normalized": "[Event]",
        "package": "linux-perf",
        "partial": "Data",
        "signature": "[Event]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:perfData_fileHeader",
      "description": {
        "fct-descr": "\u003cp\u003eFile header explains the structure of the file.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "FileHeader",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#PerfData",
        "fct-type": "function",
        "title": "perfData_fileHeader"
      },
      "index": {
        "description": "File header explains the structure of the file",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "perfData_fileHeader",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Data Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:perfData_idss",
      "description": {
        "fct-descr": "\u003cp\u003eEvent identifiers to be associated with the event attributes.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "[[EventID]]",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#PerfData",
        "fct-type": "function",
        "title": "perfData_idss"
      },
      "index": {
        "description": "Event identifiers to be associated with the event attributes",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "perfData_idss",
        "normalized": "[[EventID]]",
        "package": "linux-perf",
        "partial": "Data",
        "signature": "[[EventID]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:perfData_types",
      "description": {
        "fct-descr": "\u003cp\u003eEvent type information.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "[TraceEventType]",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#PerfData",
        "fct-type": "function",
        "title": "perfData_types"
      },
      "index": {
        "description": "Event type information",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "perfData_types",
        "normalized": "[TraceEventType]",
        "package": "linux-perf",
        "partial": "Data",
        "signature": "[TraceEventType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:pid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word32",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#PID",
        "fct-type": "function",
        "title": "pid"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "pid",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:sampleTypeBitMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#SampleTypeBitMap",
        "fct-type": "function",
        "title": "sampleTypeBitMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "sampleTypeBitMap",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Type Bit Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:sec_offset",
      "description": {
        "fct-descr": "\u003cp\u003eFile offset to the section.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileSection",
        "fct-type": "function",
        "title": "sec_offset"
      },
      "index": {
        "description": "File offset to the section",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "sec_offset",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:sec_size",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the section in bytes.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteCount64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#FileSection",
        "fct-type": "function",
        "title": "sec_size"
      },
      "index": {
        "description": "Size of the section in bytes",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "sec_size",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:te_event_id",
      "description": {
        "fct-descr": "\u003cp\u003eThis entry belongs to the perf event attr entry where .config\n has the same value as this id.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "EventTypeID",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#TraceEventType",
        "fct-type": "function",
        "title": "te_event_id"
      },
      "index": {
        "description": "This entry belongs to the perf event attr entry where config has the same value as this id",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "te_event_id",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:te_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "ByteString",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#TraceEventType",
        "fct-type": "function",
        "title": "te_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "te_name",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:testEventAttrFlag",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a given EventAttrFlag is set.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64 -\u003e EventAttrFlag -\u003e Bool",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#testEventAttrFlag",
        "fct-type": "function",
        "title": "testEventAttrFlag"
      },
      "index": {
        "description": "Test if given EventAttrFlag is set",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "testEventAttrFlag",
        "normalized": "Word-\u003eEventAttrFlag-\u003eBool",
        "package": "linux-perf",
        "partial": "Event Attr Flag",
        "signature": "Word-\u003eEventAttrFlag-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:tid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word32",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#TID",
        "fct-type": "function",
        "title": "tid"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "tid",
        "normalized": "",
        "package": "linux-perf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:timeStamp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Linux.Perf.Types",
        "fct-package": "linux-perf",
        "fct-signature": "Word64",
        "fct-source": "src/Profiling-Linux-Perf-Types.html#TimeStamp",
        "fct-type": "function",
        "title": "timeStamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf Types",
        "module": "Profiling.Linux.Perf.Types",
        "name": "timeStamp",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Stamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA higher-level interface to the perf data file parsing code.\n\u003c/p\u003e\u003cp\u003eBelow is an example program which reads and parses a perf.data file and then\n dumps the contents to standard output:\n\u003c/p\u003e\u003cpre\u003e\nmodule Main where\n\nimport Profiling.Linux.Perf (readAndDisplay, OutputStyle (..))\nimport System.Environment (getArgs)\n\nmain :: IO ()\nmain = do\n  args \u003c- getArgs\n  case args of\n     [] -\u003e return ()\n     (file:_) -\u003e readAndDisplay Dump file\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "module",
        "fct-source": "src/Profiling-Linux-Perf.html",
        "fct-type": "module",
        "title": "Perf"
      },
      "index": {
        "description": "higher-level interface to the perf data file parsing code Below is an example program which reads and parses perf.data file and then dumps the contents to standard output module Main where import Profiling.Linux.Perf readAndDisplay OutputStyle import System.Environment getArgs main IO main do args getArgs case args of return file readAndDisplay Dump file",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "Perf",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Perf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#t:OutputStyle",
      "description": {
        "fct-descr": "\u003cp\u003eStyle to use for printing the event data.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf.html#OutputStyle",
        "fct-type": "data",
        "title": "OutputStyle"
      },
      "index": {
        "description": "Style to use for printing the event data",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "OutputStyle",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Output Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#t:TypeInfo",
      "description": {
        "fct-descr": "\u003cp\u003eType information for of event.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Linux-Perf.html#TypeInfo",
        "fct-type": "data",
        "title": "TypeInfo"
      },
      "index": {
        "description": "Type information for of event",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "TypeInfo",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Type Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#t:TypeMap",
      "description": {
        "fct-descr": "\u003cp\u003eAssociate events with their event types.\n Events are (usually) tagged with an \u003ca\u003eEventID\u003c/a\u003e. Many events can share the same\n \u003ca\u003eEventID\u003c/a\u003e. Each \u003ca\u003eEventID\u003c/a\u003e is associated with exactly one event type, which includes\n the name of the event, an \u003ca\u003eEventSource\u003c/a\u003e and an \u003ca\u003eEventTypeID\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "type",
        "fct-source": "src/Profiling-Linux-Perf.html#TypeMap",
        "fct-type": "type",
        "title": "TypeMap"
      },
      "index": {
        "description": "Associate events with their event types Events are usually tagged with an EventID Many events can share the same EventID Each EventID is associated with exactly one event type which includes the name of the event an EventSource and an EventTypeID",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "TypeMap",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Type Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:Dump",
      "description": {
        "fct-descr": "\u003cp\u003eOutput full details of the data file preserving the original order of the events.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "Dump",
        "fct-source": "src/Profiling-Linux-Perf.html#OutputStyle",
        "fct-type": "function",
        "title": "Dump"
      },
      "index": {
        "description": "Output full details of the data file preserving the original order of the events",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "Dump",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Dump",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:Trace",
      "description": {
        "fct-descr": "\u003cp\u003eOutput command and sample events in time order with event type annotations.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "Trace",
        "fct-source": "src/Profiling-Linux-Perf.html#OutputStyle",
        "fct-type": "function",
        "title": "Trace"
      },
      "index": {
        "description": "Output command and sample events in time order with event type annotations",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "Trace",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:TypeInfo",
      "description": {
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "TypeInfo",
        "fct-source": "src/Profiling-Linux-Perf.html#TypeInfo",
        "fct-type": "function",
        "title": "TypeInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "TypeInfo",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Type Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:display",
      "description": {
        "fct-descr": "\u003cp\u003eRender the components of the perf.data file under the specified style.\n Don't create a single big \u003ccode\u003eDoc\u003c/code\u003e or \u003ccode\u003eString\u003c/code\u003e to avoid stack overflows.\n Instead, lazily print events as they are rendered.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "OutputStyle -\u003e PerfData -\u003e IO ()",
        "fct-source": "src/Profiling-Linux-Perf.html#display",
        "fct-type": "function",
        "title": "display"
      },
      "index": {
        "description": "Render the components of the perf.data file under the specified style Don create single big Doc or String to avoid stack overflows Instead lazily print events as they are rendered",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "display",
        "normalized": "OutputStyle-\u003ePerfData-\u003eIO()",
        "package": "linux-perf",
        "partial": "",
        "signature": "OutputStyle-\u003ePerfData-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:makeTypeMap",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a map from \u003ca\u003eEventID\u003c/a\u003es to their type information.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "PerfData -\u003e TypeMap",
        "fct-source": "src/Profiling-Linux-Perf.html#makeTypeMap",
        "fct-type": "function",
        "title": "makeTypeMap"
      },
      "index": {
        "description": "Build map from EventID to their type information",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "makeTypeMap",
        "normalized": "PerfData-\u003eTypeMap",
        "package": "linux-perf",
        "partial": "Type Map",
        "signature": "PerfData-\u003eTypeMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:readAndDisplay",
      "description": {
        "fct-descr": "\u003cp\u003eRead the contents of the perf.data file and render it\n on stdout in a specified style.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "OutputStyle -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Profiling-Linux-Perf.html#readAndDisplay",
        "fct-type": "function",
        "title": "readAndDisplay"
      },
      "index": {
        "description": "Read the contents of the perf.data file and render it on stdout in specified style",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "readAndDisplay",
        "normalized": "OutputStyle-\u003eFilePath-\u003eIO()",
        "package": "linux-perf",
        "partial": "And Display",
        "signature": "OutputStyle-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:readPerfData",
      "description": {
        "fct-descr": "\u003cp\u003eRead and parse the perf.data file into its constituent components.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "FilePath -\u003e IO PerfData",
        "fct-source": "src/Profiling-Linux-Perf.html#readPerfData",
        "fct-type": "function",
        "title": "readPerfData"
      },
      "index": {
        "description": "Read and parse the perf.data file into its constituent components",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "readPerfData",
        "normalized": "FilePath-\u003eIO PerfData",
        "package": "linux-perf",
        "partial": "Perf Data",
        "signature": "FilePath-\u003eIO PerfData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:sortEventsOnTime",
      "description": {
        "fct-descr": "\u003cp\u003eSort a list of events in ascending time order.\n Events without a timestamp are treated as having a timestamp of 0,\n which places them at the start of the sorted output.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "[Event] -\u003e [Event]",
        "fct-source": "src/Profiling-Linux-Perf.html#sortEventsOnTime",
        "fct-type": "function",
        "title": "sortEventsOnTime"
      },
      "index": {
        "description": "Sort list of events in ascending time order Events without timestamp are treated as having timestamp of which places them at the start of the sorted output",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "sortEventsOnTime",
        "normalized": "[Event]-\u003e[Event]",
        "package": "linux-perf",
        "partial": "Events On Time",
        "signature": "[Event]-\u003e[Event]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:typeInfo_id",
      "description": {
        "fct-descr": "\u003cp\u003eUnique number of this type of event.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "EventTypeID",
        "fct-source": "src/Profiling-Linux-Perf.html#TypeInfo",
        "fct-type": "function",
        "title": "typeInfo_id"
      },
      "index": {
        "description": "Unique number of this type of event",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "typeInfo_id",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:typeInfo_name",
      "description": {
        "fct-descr": "\u003cp\u003ePrintable name of the event source.\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "String",
        "fct-source": "src/Profiling-Linux-Perf.html#TypeInfo",
        "fct-type": "function",
        "title": "typeInfo_name"
      },
      "index": {
        "description": "Printable name of the event source",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "typeInfo_name",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:typeInfo_source",
      "description": {
        "fct-descr": "\u003cp\u003eKind of the event source (hardware, software, tracepoint etc.).\n\u003c/p\u003e",
        "fct-module": "Profiling.Linux.Perf",
        "fct-package": "linux-perf",
        "fct-signature": "EventSource",
        "fct-source": "src/Profiling-Linux-Perf.html#TypeInfo",
        "fct-type": "function",
        "title": "typeInfo_source"
      },
      "index": {
        "description": "Kind of the event source hardware software tracepoint etc",
        "hierarchy": "Profiling Linux Perf",
        "module": "Profiling.Linux.Perf",
        "name": "typeInfo_source",
        "normalized": "",
        "package": "linux-perf",
        "partial": "Info",
        "signature": ""
      }
    }
  }
]