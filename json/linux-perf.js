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
        "word": "linux-perf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library to parse and pretty print the contents of \u003ccode\u003eperf.data\u003c/code\u003e file,\n the output of the \u003ccode\u003eperf record\u003c/code\u003e command on\n Linux (Linux performance counter information).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "Parse",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "library to parse and pretty print the contents of perf.data file the output of the perf record command on Linux Linux performance counter information",
          "hierarchy": "Profiling Linux Perf Parse",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "Parse",
          "package": "linux-perf",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the \u003ca\u003eEventID\u003c/a\u003es from the input file handle.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "readAttributeIDs",
          "package": "linux-perf",
          "signature": "Handle-\u003e FileAttr-\u003e IO [EventID]",
          "type": "function"
        },
        "index": {
          "description": "Read the EventID from the input file handle",
          "hierarchy": "Profiling Linux Perf Parse",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "readAttributeIDs",
          "normalized": "Handle-\u003eFileAttr-\u003eIO[EventID]",
          "package": "linux-perf",
          "partial": "Attribute IDs",
          "signature": "Handle-\u003eFileAttr-\u003eIO[EventID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#v:readAttributeIDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the perf event attributes from the input file handle.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "readAttributes",
          "package": "linux-perf",
          "signature": "Handle-\u003e FileHeader-\u003e IO [FileAttr]",
          "type": "function"
        },
        "index": {
          "description": "Read the perf event attributes from the input file handle",
          "hierarchy": "Profiling Linux Perf Parse",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "readAttributes",
          "normalized": "Handle-\u003eFileHeader-\u003eIO[FileAttr]",
          "package": "linux-perf",
          "partial": "Attributes",
          "signature": "Handle-\u003eFileHeader-\u003eIO[FileAttr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#v:readAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an event record from the input file handle.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "readEvent",
          "package": "linux-perf",
          "signature": "Handle-\u003e ByteCount64-\u003e SampleTypeBitMap-\u003e IO Event",
          "type": "function"
        },
        "index": {
          "description": "Read an event record from the input file handle",
          "hierarchy": "Profiling Linux Perf Parse",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "readEvent",
          "normalized": "Handle-\u003eByteCount-\u003eSampleTypeBitMap-\u003eIO Event",
          "package": "linux-perf",
          "partial": "Event",
          "signature": "Handle-\u003eByteCount-\u003eSampleTypeBitMap-\u003eIO Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#v:readEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an \u003ca\u003eEventHeader\u003c/a\u003e from the input file handle.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "readEventHeader",
          "package": "linux-perf",
          "signature": "Handle-\u003e ByteCount64-\u003e IO EventHeader",
          "type": "function"
        },
        "index": {
          "description": "Read an EventHeader from the input file handle",
          "hierarchy": "Profiling Linux Perf Parse",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "readEventHeader",
          "normalized": "Handle-\u003eByteCount-\u003eIO EventHeader",
          "package": "linux-perf",
          "partial": "Event Header",
          "signature": "Handle-\u003eByteCount-\u003eIO EventHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#v:readEventHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the event type information from the input file handle.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "readEventTypes",
          "package": "linux-perf",
          "signature": "Handle-\u003e FileHeader-\u003e IO [TraceEventType]",
          "type": "function"
        },
        "index": {
          "description": "Read the event type information from the input file handle",
          "hierarchy": "Profiling Linux Perf Parse",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "readEventTypes",
          "normalized": "Handle-\u003eFileHeader-\u003eIO[TraceEventType]",
          "package": "linux-perf",
          "partial": "Event Types",
          "signature": "Handle-\u003eFileHeader-\u003eIO[TraceEventType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#v:readEventTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the perf data \u003ca\u003eFileHeader\u003c/a\u003e from the input file handle.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "readHeader",
          "package": "linux-perf",
          "signature": "Handle-\u003e IO FileHeader",
          "type": "function"
        },
        "index": {
          "description": "Read the perf data FileHeader from the input file handle",
          "hierarchy": "Profiling Linux Perf Parse",
          "module": "Profiling.Linux.Perf.Parse",
          "name": "readHeader",
          "normalized": "Handle-\u003eIO FileHeader",
          "package": "linux-perf",
          "partial": "Header",
          "signature": "Handle-\u003eIO FileHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Parse.html#v:readHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printing utilities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Profiling.Linux.Perf.Pretty",
          "name": "Pretty",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty printing utilities",
          "hierarchy": "Profiling Linux Perf Pretty",
          "module": "Profiling.Linux.Perf.Pretty",
          "name": "Pretty",
          "package": "linux-perf",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing interface.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Pretty",
          "name": "Pretty",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Pretty.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "Pretty printing interface",
          "hierarchy": "Profiling Linux Perf Pretty",
          "module": "Profiling.Linux.Perf.Pretty",
          "name": "Pretty",
          "package": "linux-perf",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Pretty.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a document for a value.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Pretty",
          "name": "pretty",
          "package": "linux-perf",
          "signature": "a -\u003e Doc",
          "source": "src/Profiling-Linux-Perf-Pretty.html#pretty",
          "type": "method"
        },
        "index": {
          "description": "Generate document for value",
          "hierarchy": "Profiling Linux Perf Pretty",
          "module": "Profiling.Linux.Perf.Pretty",
          "name": "pretty",
          "normalized": "a-\u003eDoc",
          "package": "linux-perf",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Pretty.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender an instance of \u003ca\u003ePretty\u003c/a\u003e as a \u003ca\u003eString\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Pretty",
          "name": "prettyString",
          "package": "linux-perf",
          "signature": "a -\u003e String",
          "source": "src/Profiling-Linux-Perf-Pretty.html#prettyString",
          "type": "function"
        },
        "index": {
          "description": "Render an instance of Pretty as String",
          "hierarchy": "Profiling Linux Perf Pretty",
          "module": "Profiling.Linux.Perf.Pretty",
          "name": "prettyString",
          "normalized": "a-\u003eString",
          "package": "linux-perf",
          "partial": "String",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Pretty.html#v:prettyString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender an instance of \u003ca\u003eBits\u003c/a\u003e as a \u003ca\u003eString\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Pretty",
          "name": "showBits",
          "package": "linux-perf",
          "signature": "a -\u003e String",
          "source": "src/Profiling-Linux-Perf-Pretty.html#showBits",
          "type": "function"
        },
        "index": {
          "description": "Render an instance of Bits as String",
          "hierarchy": "Profiling Linux Perf Pretty",
          "module": "Profiling.Linux.Perf.Pretty",
          "name": "showBits",
          "normalized": "a-\u003eString",
          "package": "linux-perf",
          "partial": "Bits",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Pretty.html#v:showBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for representing the parsed contents of a \u003ccode\u003eperf.data\u003c/code\u003e file output\n the \u003ccode\u003eperf record\u003c/code\u003e command on Linux (Linux performance counter information).\n\u003c/p\u003e\u003cp\u003eThere is an intentional close correspondence between the types in this\n module and the representation in the C implementation of perf.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Types",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types for representing the parsed contents of perf.data file output the perf record command on Linux Linux performance counter information There is an intentional close correspondence between the types in this module and the representation in the implementation of perf",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Types",
          "package": "linux-perf",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 16 bit measurement in bytes. For example the size of an object, or an offset.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ByteCount16",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#ByteCount16",
          "type": "newtype"
        },
        "index": {
          "description": "bit measurement in bytes For example the size of an object or an offset",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ByteCount16",
          "package": "linux-perf",
          "partial": "Byte Count",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:ByteCount16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 32 bit measurement in bytes. For example the size of an object, or an offset.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ByteCount32",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#ByteCount32",
          "type": "newtype"
        },
        "index": {
          "description": "bit measurement in bytes For example the size of an object or an offset",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ByteCount32",
          "package": "linux-perf",
          "partial": "Byte Count",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:ByteCount32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 64 bit measurement in bytes. For example the size of an object, or an offset.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ByteCount64",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#ByteCount64",
          "type": "newtype"
        },
        "index": {
          "description": "bit measurement in bytes For example the size of an object or an offset",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ByteCount64",
          "package": "linux-perf",
          "partial": "Byte Count",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:ByteCount64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Single event record.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Event",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Single event record",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Event",
          "package": "linux-perf",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds with the \u003ccode\u003eperf_event_attr\u003c/code\u003e struct in \u003ccode\u003einclude/linux/perf_event.h\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventAttr",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "data"
        },
        "index": {
          "description": "Corresponds with the perf event attr struct in include linux perf event.h",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventAttr",
          "package": "linux-perf",
          "partial": "Event Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee struct \u003ccode\u003eperf_event_attr\u003c/code\u003e in \u003ccode\u003elinux/perf_event.h\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventAttrFlag",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "data"
        },
        "index": {
          "description": "See struct perf event attr in linux perf event.h",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventAttrFlag",
          "package": "linux-perf",
          "partial": "Event Attr Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventAttrFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitfield in \u003ccode\u003eperf_event_header-\u003emisc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventCPUMode",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#EventCPUMode",
          "type": "data"
        },
        "index": {
          "description": "bitfield in perf event header misc",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventCPUMode",
          "package": "linux-perf",
          "partial": "Event CPUMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventCPUMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds with the \u003ccode\u003eperf_event_header\u003c/code\u003e struct in \u003ccode\u003e\u003cperf source\u003e/util/perf_event.h\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventHeader",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#EventHeader",
          "type": "data"
        },
        "index": {
          "description": "Corresponds with the perf event header struct in perf source util perf event.h",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventHeader",
          "package": "linux-perf",
          "partial": "Event Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent ID.\n Not really an identity. This number is used to link\n an event to an event type. Multiple events can have the same EventID,\n which means they all have the same event type.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventID",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#EventID",
          "type": "newtype"
        },
        "index": {
          "description": "Event ID Not really an identity This number is used to link an event to an event type Multiple events can have the same EventID which means they all have the same event type",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventID",
          "package": "linux-perf",
          "partial": "Event ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventPayload",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "data"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventPayload",
          "package": "linux-perf",
          "partial": "Event Payload",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds with the enum \u003ccode\u003eperf_type_id\u003c/code\u003e in \u003ccode\u003einclude/linux/perf_event.h\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventSource",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#EventSource",
          "type": "data"
        },
        "index": {
          "description": "Corresponds with the enum perf type id in include linux perf event.h",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventSource",
          "package": "linux-perf",
          "partial": "Event Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding of the \u003ccode\u003eperf_event_header-\u003etype\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventType",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#EventType",
          "type": "data"
        },
        "index": {
          "description": "Encoding of the perf event header type",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventType",
          "package": "linux-perf",
          "partial": "Event Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent type ID (magic unique number of an event type).\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventTypeID",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#EventTypeID",
          "type": "newtype"
        },
        "index": {
          "description": "Event type ID magic unique number of an event type",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventTypeID",
          "package": "linux-perf",
          "partial": "Event Type ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:EventTypeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLayout of event attribute and attribute ids.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "FileAttr",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#FileAttr",
          "type": "data"
        },
        "index": {
          "description": "Layout of event attribute and attribute ids",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "FileAttr",
          "package": "linux-perf",
          "partial": "File Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:FileAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds with the \u003ccode\u003eperf_file_header\u003c/code\u003e struct in \u003ccode\u003e\u003cperf source\u003e/util/header.h\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "FileHeader",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
          "type": "data"
        },
        "index": {
          "description": "Corresponds with the perf file header struct in perf source util header.h",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "FileHeader",
          "package": "linux-perf",
          "partial": "File Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:FileHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds with the \u003ccode\u003eperf_file_section\u003c/code\u003e struct in \u003ccode\u003e\u003cperf source\u003e/util/header.h\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "FileSection",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#FileSection",
          "type": "data"
        },
        "index": {
          "description": "Corresponds with the perf file section struct in perf source util header.h",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "FileSection",
          "package": "linux-perf",
          "partial": "File Section",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:FileSection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess ID.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PID",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#PID",
          "type": "newtype"
        },
        "index": {
          "description": "Process ID",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PID",
          "package": "linux-perf",
          "partial": "PID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:PID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe various parts of the perf.data file collected together.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfData",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#PerfData",
          "type": "data"
        },
        "index": {
          "description": "The various parts of the perf.data file collected together",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfData",
          "package": "linux-perf",
          "partial": "Perf Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:PerfData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about what is stored in a sample event.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "SampleFormat",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
          "type": "data"
        },
        "index": {
          "description": "Information about what is stored in sample event",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "SampleFormat",
          "package": "linux-perf",
          "partial": "Sample Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:SampleFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmap encoding information about the content of sample events.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "SampleTypeBitMap",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleTypeBitMap",
          "type": "newtype"
        },
        "index": {
          "description": "bitmap encoding information about the content of sample events",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "SampleTypeBitMap",
          "package": "linux-perf",
          "partial": "Sample Type Bit Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:SampleTypeBitMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThread ID.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "TID",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#TID",
          "type": "newtype"
        },
        "index": {
          "description": "Thread ID",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "TID",
          "package": "linux-perf",
          "partial": "TID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:TID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeasurement of time passed in nanoseconds since a given point.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "TimeStamp",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#TimeStamp",
          "type": "newtype"
        },
        "index": {
          "description": "Measurement of time passed in nanoseconds since given point",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "TimeStamp",
          "package": "linux-perf",
          "partial": "Time Stamp",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:TimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity and printable name of an event type.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "TraceEventType",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf-Types.html#TraceEventType",
          "type": "data"
        },
        "index": {
          "description": "Identity and printable name of an event type",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "TraceEventType",
          "package": "linux-perf",
          "partial": "Trace Event Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#t:TraceEventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprecise_ip, See also \u003ccode\u003ePERF_RECORD_MISC_EXACT_IP\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ArbitrarySkid",
          "package": "linux-perf",
          "signature": "ArbitrarySkid",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "precise ip See also PERF RECORD MISC EXACT IP",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ArbitrarySkid",
          "package": "linux-perf",
          "partial": "Arbitrary Skid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ArbitrarySkid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "ByteCount16",
          "package": "linux-perf",
          "signature": "ByteCount16",
          "source": "src/Profiling-Linux-Perf-Types.html#ByteCount16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ByteCount16",
          "package": "linux-perf",
          "partial": "Byte Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ByteCount16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "ByteCount32",
          "package": "linux-perf",
          "signature": "ByteCount32",
          "source": "src/Profiling-Linux-Perf-Types.html#ByteCount32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ByteCount32",
          "package": "linux-perf",
          "partial": "Byte Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ByteCount32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "ByteCount64",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#ByteCount64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ByteCount64",
          "package": "linux-perf",
          "partial": "Byte Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ByteCount64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einclude comm data\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Comm",
          "package": "linux-perf",
          "signature": "Comm",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "include comm data",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Comm",
          "package": "linux-perf",
          "partial": "Comm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Comm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "CommEvent",
          "package": "linux-perf",
          "signature": "CommEvent",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "CommEvent",
          "package": "linux-perf",
          "partial": "Comm Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:CommEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprecise_ip, See also \u003ccode\u003ePERF_RECORD_MISC_EXACT_IP\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "CompulsoryZeroSkid",
          "package": "linux-perf",
          "signature": "CompulsoryZeroSkid",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "precise ip See also PERF RECORD MISC EXACT IP",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "CompulsoryZeroSkid",
          "package": "linux-perf",
          "partial": "Compulsory Zero Skid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:CompulsoryZeroSkid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprecise_ip, See also \u003ccode\u003ePERF_RECORD_MISC_EXACT_IP\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ConstantSkid",
          "package": "linux-perf",
          "signature": "ConstantSkid",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "precise ip See also PERF RECORD MISC EXACT IP",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ConstantSkid",
          "package": "linux-perf",
          "partial": "Constant Skid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ConstantSkid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoff by default\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Disabled",
          "package": "linux-perf",
          "signature": "Disabled",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "off by default",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Disabled",
          "package": "linux-perf",
          "partial": "Disabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Disabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enext exec enables\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EnableOnExec",
          "package": "linux-perf",
          "signature": "EnableOnExec",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "next exec enables",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EnableOnExec",
          "package": "linux-perf",
          "partial": "Enable On Exec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:EnableOnExec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "Event",
          "package": "linux-perf",
          "signature": "Event",
          "source": "src/Profiling-Linux-Perf-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Event",
          "package": "linux-perf",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventAttr",
          "package": "linux-perf",
          "signature": "EventAttr",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventAttr",
          "package": "linux-perf",
          "partial": "Event Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:EventAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventHeader",
          "package": "linux-perf",
          "signature": "EventHeader",
          "source": "src/Profiling-Linux-Perf-Types.html#EventHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventHeader",
          "package": "linux-perf",
          "partial": "Event Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:EventHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventID",
          "package": "linux-perf",
          "signature": "EventID",
          "source": "src/Profiling-Linux-Perf-Types.html#EventID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventID",
          "package": "linux-perf",
          "partial": "Event ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:EventID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventTypeID",
          "package": "linux-perf",
          "signature": "EventTypeID",
          "source": "src/Profiling-Linux-Perf-Types.html#EventTypeID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "EventTypeID",
          "package": "linux-perf",
          "partial": "Event Type ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:EventTypeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003editto hypervisor\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ExcludeHV",
          "package": "linux-perf",
          "signature": "ExcludeHV",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "ditto hypervisor",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ExcludeHV",
          "package": "linux-perf",
          "partial": "Exclude HV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ExcludeHV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edon't count when idle\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ExcludeIdle",
          "package": "linux-perf",
          "signature": "ExcludeIdle",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "don count when idle",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ExcludeIdle",
          "package": "linux-perf",
          "partial": "Exclude Idle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ExcludeIdle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003editto kernel\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ExcludeKernel",
          "package": "linux-perf",
          "signature": "ExcludeKernel",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "ditto kernel",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ExcludeKernel",
          "package": "linux-perf",
          "partial": "Exclude Kernel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ExcludeKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edon't count user\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ExcludeUser",
          "package": "linux-perf",
          "signature": "ExcludeUser",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "don count user",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ExcludeUser",
          "package": "linux-perf",
          "partial": "Exclude User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ExcludeUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eonly group on PMU\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Exclusive",
          "package": "linux-perf",
          "signature": "Exclusive",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "only group on PMU",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Exclusive",
          "package": "linux-perf",
          "partial": "Exclusive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Exclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "ExitEvent",
          "package": "linux-perf",
          "signature": "ExitEvent",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ExitEvent",
          "package": "linux-perf",
          "partial": "Exit Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ExitEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "FileAttr",
          "package": "linux-perf",
          "signature": "FileAttr",
          "source": "src/Profiling-Linux-Perf-Types.html#FileAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "FileAttr",
          "package": "linux-perf",
          "partial": "File Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:FileAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "FileHeader",
          "package": "linux-perf",
          "signature": "FileHeader",
          "source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "FileHeader",
          "package": "linux-perf",
          "partial": "File Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:FileHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "FileSection",
          "package": "linux-perf",
          "signature": "FileSection",
          "source": "src/Profiling-Linux-Perf-Types.html#FileSection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "FileSection",
          "package": "linux-perf",
          "partial": "File Section",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:FileSection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "ForkEvent",
          "package": "linux-perf",
          "signature": "ForkEvent",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ForkEvent",
          "package": "linux-perf",
          "partial": "Fork Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ForkEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse freq, not period\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Freq",
          "package": "linux-perf",
          "signature": "Freq",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "use freq not period",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Freq",
          "package": "linux-perf",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echildren inherit it\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Inherit",
          "package": "linux-perf",
          "signature": "Inherit",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "children inherit it",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Inherit",
          "package": "linux-perf",
          "partial": "Inherit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Inherit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eper task counts\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "InheritStat",
          "package": "linux-perf",
          "signature": "InheritStat",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "per task counts",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "InheritStat",
          "package": "linux-perf",
          "partial": "Inherit Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:InheritStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "LostEvent",
          "package": "linux-perf",
          "signature": "LostEvent",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "LostEvent",
          "package": "linux-perf",
          "partial": "Lost Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:LostEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einclude mmap data\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Mmap",
          "package": "linux-perf",
          "signature": "Mmap",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "include mmap data",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Mmap",
          "package": "linux-perf",
          "partial": "Mmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Mmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enon-exec mmap data\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "MmapData",
          "package": "linux-perf",
          "signature": "MmapData",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "non-exec mmap data",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "MmapData",
          "package": "linux-perf",
          "partial": "Mmap Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:MmapData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "MmapEvent",
          "package": "linux-perf",
          "signature": "MmapEvent",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "MmapEvent",
          "package": "linux-perf",
          "partial": "Mmap Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:MmapEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_COMM",
          "package": "linux-perf",
          "signature": "PERF_RECORD_COMM",
          "source": "src/Profiling-Linux-Perf-Types.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_COMM",
          "package": "linux-perf",
          "partial": "PERF RECORD COMM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_COMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_CPUMODE_UNKNOWN",
          "package": "linux-perf",
          "signature": "PERF_RECORD_CPUMODE_UNKNOWN",
          "source": "src/Profiling-Linux-Perf-Types.html#EventCPUMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_CPUMODE_UNKNOWN",
          "package": "linux-perf",
          "partial": "PERF RECORD CPUMODE UNKNOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_CPUMODE_UNKNOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_EXIT",
          "package": "linux-perf",
          "signature": "PERF_RECORD_EXIT",
          "source": "src/Profiling-Linux-Perf-Types.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_EXIT",
          "package": "linux-perf",
          "partial": "PERF RECORD EXIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_EXIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_FORK",
          "package": "linux-perf",
          "signature": "PERF_RECORD_FORK",
          "source": "src/Profiling-Linux-Perf-Types.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_FORK",
          "package": "linux-perf",
          "partial": "PERF RECORD FORK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_FORK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_LOST",
          "package": "linux-perf",
          "signature": "PERF_RECORD_LOST",
          "source": "src/Profiling-Linux-Perf-Types.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_LOST",
          "package": "linux-perf",
          "partial": "PERF RECORD LOST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_LOST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_MISC_HYPERVISOR",
          "package": "linux-perf",
          "signature": "PERF_RECORD_MISC_HYPERVISOR",
          "source": "src/Profiling-Linux-Perf-Types.html#EventCPUMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_MISC_HYPERVISOR",
          "package": "linux-perf",
          "partial": "PERF RECORD MISC HYPERVISOR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_MISC_HYPERVISOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_MISC_KERNEL",
          "package": "linux-perf",
          "signature": "PERF_RECORD_MISC_KERNEL",
          "source": "src/Profiling-Linux-Perf-Types.html#EventCPUMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_MISC_KERNEL",
          "package": "linux-perf",
          "partial": "PERF RECORD MISC KERNEL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_MISC_KERNEL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e2\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_MISC_USER",
          "package": "linux-perf",
          "signature": "PERF_RECORD_MISC_USER",
          "source": "src/Profiling-Linux-Perf-Types.html#EventCPUMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_MISC_USER",
          "package": "linux-perf",
          "partial": "PERF RECORD MISC USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_MISC_USER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_MMAP",
          "package": "linux-perf",
          "signature": "PERF_RECORD_MMAP",
          "source": "src/Profiling-Linux-Perf-Types.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_MMAP",
          "package": "linux-perf",
          "partial": "PERF RECORD MMAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_MMAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_READ",
          "package": "linux-perf",
          "signature": "PERF_RECORD_READ",
          "source": "src/Profiling-Linux-Perf-Types.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_READ",
          "package": "linux-perf",
          "partial": "PERF RECORD READ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_READ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_SAMPLE",
          "package": "linux-perf",
          "signature": "PERF_RECORD_SAMPLE",
          "source": "src/Profiling-Linux-Perf-Types.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_SAMPLE",
          "package": "linux-perf",
          "partial": "PERF RECORD SAMPLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_SAMPLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_THROTTLE",
          "package": "linux-perf",
          "signature": "PERF_RECORD_THROTTLE",
          "source": "src/Profiling-Linux-Perf-Types.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_THROTTLE",
          "package": "linux-perf",
          "partial": "PERF RECORD THROTTLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_THROTTLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_UNKNOWN",
          "package": "linux-perf",
          "signature": "PERF_RECORD_UNKNOWN Int",
          "source": "src/Profiling-Linux-Perf-Types.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_UNKNOWN",
          "package": "linux-perf",
          "partial": "PERF RECORD UNKNOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_UNKNOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_UNTHROTTLE",
          "package": "linux-perf",
          "signature": "PERF_RECORD_UNTHROTTLE",
          "source": "src/Profiling-Linux-Perf-Types.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_RECORD_UNTHROTTLE",
          "package": "linux-perf",
          "partial": "PERF RECORD UNTHROTTLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_RECORD_UNTHROTTLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1U \u003c\u003c 3\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_ADDR",
          "package": "linux-perf",
          "signature": "PERF_SAMPLE_ADDR",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_ADDR",
          "package": "linux-perf",
          "partial": "PERF SAMPLE ADDR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_ADDR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1U \u003c\u003c 5\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_CALLCHAIN",
          "package": "linux-perf",
          "signature": "PERF_SAMPLE_CALLCHAIN",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_CALLCHAIN",
          "package": "linux-perf",
          "partial": "PERF SAMPLE CALLCHAIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_CALLCHAIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1U \u003c\u003c 7\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_CPU",
          "package": "linux-perf",
          "signature": "PERF_SAMPLE_CPU",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_CPU",
          "package": "linux-perf",
          "partial": "PERF SAMPLE CPU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_CPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1U \u003c\u003c 6\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_ID",
          "package": "linux-perf",
          "signature": "PERF_SAMPLE_ID",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_ID",
          "package": "linux-perf",
          "partial": "PERF SAMPLE ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1U \u003c\u003c 0\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_IP",
          "package": "linux-perf",
          "signature": "PERF_SAMPLE_IP",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_IP",
          "package": "linux-perf",
          "partial": "PERF SAMPLE IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_IP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1U \u003c\u003c 8\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_PERIOD",
          "package": "linux-perf",
          "signature": "PERF_SAMPLE_PERIOD",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_PERIOD",
          "package": "linux-perf",
          "partial": "PERF SAMPLE PERIOD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_PERIOD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1U \u003c\u003c 10\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_RAW",
          "package": "linux-perf",
          "signature": "PERF_SAMPLE_RAW",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_RAW",
          "package": "linux-perf",
          "partial": "PERF SAMPLE RAW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_RAW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1U \u003c\u003c 4\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_READ",
          "package": "linux-perf",
          "signature": "PERF_SAMPLE_READ",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_READ",
          "package": "linux-perf",
          "partial": "PERF SAMPLE READ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_READ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1U \u003c\u003c 9\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_STREAM_ID",
          "package": "linux-perf",
          "signature": "PERF_SAMPLE_STREAM_ID",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_STREAM_ID",
          "package": "linux-perf",
          "partial": "PERF SAMPLE STREAM ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_STREAM_ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1U \u003c\u003c 1\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_TID",
          "package": "linux-perf",
          "signature": "PERF_SAMPLE_TID",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_TID",
          "package": "linux-perf",
          "partial": "PERF SAMPLE TID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_TID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1U \u003c\u003c 2\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_TIME",
          "package": "linux-perf",
          "signature": "PERF_SAMPLE_TIME",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PERF_SAMPLE_TIME",
          "package": "linux-perf",
          "partial": "PERF SAMPLE TIME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PERF_SAMPLE_TIME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PID",
          "package": "linux-perf",
          "signature": "PID",
          "source": "src/Profiling-Linux-Perf-Types.html#PID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PID",
          "package": "linux-perf",
          "partial": "PID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfData",
          "package": "linux-perf",
          "signature": "PerfData",
          "source": "src/Profiling-Linux-Perf-Types.html#PerfData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfData",
          "package": "linux-perf",
          "partial": "Perf Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e5\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeBreakpoint",
          "package": "linux-perf",
          "signature": "PerfTypeBreakpoint",
          "source": "src/Profiling-Linux-Perf-Types.html#EventSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeBreakpoint",
          "package": "linux-perf",
          "partial": "Perf Type Breakpoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeBreakpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeHardware",
          "package": "linux-perf",
          "signature": "PerfTypeHardware",
          "source": "src/Profiling-Linux-Perf-Types.html#EventSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeHardware",
          "package": "linux-perf",
          "partial": "Perf Type Hardware",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeHardware"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeHwCache",
          "package": "linux-perf",
          "signature": "PerfTypeHwCache",
          "source": "src/Profiling-Linux-Perf-Types.html#EventSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeHwCache",
          "package": "linux-perf",
          "partial": "Perf Type Hw Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeHwCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e4\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeRaw",
          "package": "linux-perf",
          "signature": "PerfTypeRaw",
          "source": "src/Profiling-Linux-Perf-Types.html#EventSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeRaw",
          "package": "linux-perf",
          "partial": "Perf Type Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeSoftware",
          "package": "linux-perf",
          "signature": "PerfTypeSoftware",
          "source": "src/Profiling-Linux-Perf-Types.html#EventSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeSoftware",
          "package": "linux-perf",
          "partial": "Perf Type Software",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeSoftware"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e2\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeTracePoint",
          "package": "linux-perf",
          "signature": "PerfTypeTracePoint",
          "source": "src/Profiling-Linux-Perf-Types.html#EventSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeTracePoint",
          "package": "linux-perf",
          "partial": "Perf Type Trace Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeTracePoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeUnknown",
          "package": "linux-perf",
          "signature": "PerfTypeUnknown",
          "source": "src/Profiling-Linux-Perf-Types.html#EventSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "PerfTypeUnknown",
          "package": "linux-perf",
          "partial": "Perf Type Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:PerfTypeUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emust always be on PMU\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Pinned",
          "package": "linux-perf",
          "signature": "Pinned",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "must always be on PMU",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Pinned",
          "package": "linux-perf",
          "partial": "Pinned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Pinned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "ReadEvent",
          "package": "linux-perf",
          "signature": "ReadEvent",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ReadEvent",
          "package": "linux-perf",
          "partial": "Read Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ReadEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprecise_ip, See also \u003ccode\u003ePERF_RECORD_MISC_EXACT_IP\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "RequestedZeroSkid",
          "package": "linux-perf",
          "signature": "RequestedZeroSkid",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "precise ip See also PERF RECORD MISC EXACT IP",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "RequestedZeroSkid",
          "package": "linux-perf",
          "partial": "Requested Zero Skid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:RequestedZeroSkid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "SampleEvent",
          "package": "linux-perf",
          "signature": "SampleEvent",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "SampleEvent",
          "package": "linux-perf",
          "partial": "Sample Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:SampleEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esample_type all events\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "SampleIdAll",
          "package": "linux-perf",
          "signature": "SampleIdAll",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "sample type all events",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "SampleIdAll",
          "package": "linux-perf",
          "partial": "Sample Id All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:SampleIdAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "SampleTypeBitMap",
          "package": "linux-perf",
          "signature": "SampleTypeBitMap",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleTypeBitMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "SampleTypeBitMap",
          "package": "linux-perf",
          "partial": "Sample Type Bit Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:SampleTypeBitMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "TID",
          "package": "linux-perf",
          "signature": "TID",
          "source": "src/Profiling-Linux-Perf-Types.html#TID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "TID",
          "package": "linux-perf",
          "partial": "TID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:TID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etrace fork/exit\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Task",
          "package": "linux-perf",
          "signature": "Task",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "trace fork exit",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "Task",
          "package": "linux-perf",
          "partial": "Task",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:Task"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "ThrottleEvent",
          "package": "linux-perf",
          "signature": "ThrottleEvent",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ThrottleEvent",
          "package": "linux-perf",
          "partial": "Throttle Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ThrottleEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "TimeStamp",
          "package": "linux-perf",
          "signature": "TimeStamp",
          "source": "src/Profiling-Linux-Perf-Types.html#TimeStamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "TimeStamp",
          "package": "linux-perf",
          "partial": "Time Stamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:TimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "TraceEventType",
          "package": "linux-perf",
          "signature": "TraceEventType",
          "source": "src/Profiling-Linux-Perf-Types.html#TraceEventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "TraceEventType",
          "package": "linux-perf",
          "partial": "Trace Event Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:TraceEventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "UnThrottleEvent",
          "package": "linux-perf",
          "signature": "UnThrottleEvent",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "UnThrottleEvent",
          "package": "linux-perf",
          "partial": "Un Throttle Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:UnThrottleEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unrecognised event was encountered.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "UnknownEvent",
          "package": "linux-perf",
          "signature": "UnknownEvent",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "An unrecognised event was encountered",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "UnknownEvent",
          "package": "linux-perf",
          "partial": "Unknown Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:UnknownEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewakeup_watermark\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "WaterMark",
          "package": "linux-perf",
          "signature": "WaterMark",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "wakeup watermark",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "WaterMark",
          "package": "linux-perf",
          "partial": "Water Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:WaterMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "byteCount16",
          "package": "linux-perf",
          "signature": "Word16",
          "source": "src/Profiling-Linux-Perf-Types.html#ByteCount16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "byteCount16",
          "package": "linux-perf",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:byteCount16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "byteCount32",
          "package": "linux-perf",
          "signature": "Word32",
          "source": "src/Profiling-Linux-Perf-Types.html#ByteCount32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "byteCount32",
          "package": "linux-perf",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:byteCount32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "byteCount64",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#ByteCount64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "byteCount64",
          "package": "linux-perf",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:byteCount64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_bp_addr_or_config1",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_bp_addr_or_config1",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_bp_addr_or_config1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_bp_len_or_config2",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_bp_len_or_config2",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_bp_len_or_config2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_bp_type",
          "package": "linux-perf",
          "signature": "Word32",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_bp_type",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_bp_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink to .event id of perf trace event type.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_config",
          "package": "linux-perf",
          "signature": "EventTypeID",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "function"
        },
        "index": {
          "description": "Link to event id of perf trace event type",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_config",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_flags",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_flags",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_read_format",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_read_format",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_read_format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of events when a sample is generated if .freq\n is not set or frequency for sampling if .freq is set.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_sample_period_or_freq",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "function"
        },
        "index": {
          "description": "Number of events when sample is generated if freq is not set or frequency for sampling if freq is set",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_sample_period_or_freq",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_sample_period_or_freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about what is stored in the sampling record.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_sample_type",
          "package": "linux-perf",
          "signature": "SampleTypeBitMap",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "function"
        },
        "index": {
          "description": "Information about what is stored in the sampling record",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_sample_type",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_sample_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the attr structure, for fwd/bwd compat.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_size",
          "package": "linux-perf",
          "signature": "ByteCount32",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "function"
        },
        "index": {
          "description": "Size of the attr structure for fwd bwd compat",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_size",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMajor type: hardware\u003cem\u003esoftware\u003c/em\u003etracepoint/etc.\n defined as enum perf_type_id in include\u003cem\u003elinux\u003c/em\u003eperf_event.h\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_type",
          "package": "linux-perf",
          "signature": "EventSource",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "function"
        },
        "index": {
          "description": "Major type hardware software tracepoint etc defined as enum perf type id in include linux perf event.h",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_type",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWakeup every n events or bytes before wakeup.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_wakeup_events_or_watermark",
          "package": "linux-perf",
          "signature": "Word32",
          "source": "src/Profiling-Linux-Perf-Types.html#EventAttr",
          "type": "function"
        },
        "index": {
          "description": "Wakeup every events or bytes before wakeup",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ea_wakeup_events_or_watermark",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ea_wakeup_events_or_watermark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eh_misc",
          "package": "linux-perf",
          "signature": "Word16",
          "source": "src/Profiling-Linux-Perf-Types.html#EventHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eh_misc",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eh_misc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eh_size",
          "package": "linux-perf",
          "signature": "ByteCount16",
          "source": "src/Profiling-Linux-Perf-Types.html#EventHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eh_size",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eh_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eh_type",
          "package": "linux-perf",
          "signature": "EventType",
          "source": "src/Profiling-Linux-Perf-Types.html#EventHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eh_type",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eh_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the structure of the event.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ev_header",
          "package": "linux-perf",
          "signature": "EventHeader",
          "source": "src/Profiling-Linux-Perf-Types.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Information about the structure of the event",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ev_header",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ev_header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event data.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ev_payload",
          "package": "linux-perf",
          "signature": "EventPayload",
          "source": "src/Profiling-Linux-Perf-Types.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The event data",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "ev_payload",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:ev_payload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventID",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventID",
          "package": "linux-perf",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename of the application\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_CommName",
          "package": "linux-perf",
          "signature": "ByteString",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "name of the application",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_CommName",
          "package": "linux-perf",
          "partial": "Payload Comm Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_CommName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_Lost",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_Lost",
          "package": "linux-perf",
          "partial": "Payload Lost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_Lost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebinary file using this range\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_MmapFilename",
          "package": "linux-perf",
          "signature": "ByteString",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "binary file using this range",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_MmapFilename",
          "package": "linux-perf",
          "partial": "Payload Mmap Filename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_MmapFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esize of memory range\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_MmapLen",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "size of memory range",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_MmapLen",
          "package": "linux-perf",
          "partial": "Payload Mmap Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_MmapLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epage offset\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_MmapPgoff",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "page offset",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_MmapPgoff",
          "package": "linux-perf",
          "partial": "Payload Mmap Pgoff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_MmapPgoff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart of memory range\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_MmapStart",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "start of memory range",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_MmapStart",
          "package": "linux-perf",
          "partial": "Payload Mmap Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_MmapStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_ReadTimeEnabled",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_ReadTimeEnabled",
          "package": "linux-perf",
          "partial": "Payload Read Time Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_ReadTimeEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_ReadTimeRunning",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_ReadTimeRunning",
          "package": "linux-perf",
          "partial": "Payload Read Time Running",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_ReadTimeRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_ReadValue",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_ReadValue",
          "package": "linux-perf",
          "partial": "Payload Read Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_ReadValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleAddr",
          "package": "linux-perf",
          "signature": "Maybe Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleAddr",
          "package": "linux-perf",
          "partial": "Payload Sample Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCPU ID.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleCPU",
          "package": "linux-perf",
          "signature": "Maybe Word32",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "CPU ID",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleCPU",
          "package": "linux-perf",
          "partial": "Payload Sample CPU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleCPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent ID.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleID",
          "package": "linux-perf",
          "signature": "Maybe EventID",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "Event ID",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleID",
          "package": "linux-perf",
          "partial": "Payload Sample ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstruction pointer.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleIP",
          "package": "linux-perf",
          "signature": "Maybe Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "Instruction pointer",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleIP",
          "package": "linux-perf",
          "partial": "Payload Sample IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess ID.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SamplePID",
          "package": "linux-perf",
          "signature": "Maybe PID",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "Process ID",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SamplePID",
          "package": "linux-perf",
          "partial": "Payload Sample PID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SamplePID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuration of sample.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SamplePeriod",
          "package": "linux-perf",
          "signature": "Maybe Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "Duration of sample",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SamplePeriod",
          "package": "linux-perf",
          "partial": "Payload Sample Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SamplePeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleStreamID",
          "package": "linux-perf",
          "signature": "Maybe Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleStreamID",
          "package": "linux-perf",
          "partial": "Payload Sample Stream ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleStreamID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThread ID.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleTID",
          "package": "linux-perf",
          "signature": "Maybe TID",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "Thread ID",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleTID",
          "package": "linux-perf",
          "partial": "Payload Sample TID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleTID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimestamp.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleTime",
          "package": "linux-perf",
          "signature": "Maybe TimeStamp",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "Timestamp",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_SampleTime",
          "package": "linux-perf",
          "partial": "Payload Sample Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_SampleTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_id",
          "package": "linux-perf",
          "signature": "EventID",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_id",
          "package": "linux-perf",
          "partial": "Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocess id\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_pid",
          "package": "linux-perf",
          "signature": "PID",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "process id",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_pid",
          "package": "linux-perf",
          "partial": "Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_pid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparent proecess id\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_ppid",
          "package": "linux-perf",
          "signature": "PID",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "parent proecess id",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_ppid",
          "package": "linux-perf",
          "partial": "Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_ppid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparent thread id\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_ptid",
          "package": "linux-perf",
          "signature": "TID",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "parent thread id",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_ptid",
          "package": "linux-perf",
          "partial": "Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_ptid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_stream_id",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_stream_id",
          "package": "linux-perf",
          "partial": "Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_stream_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethread id\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_tid",
          "package": "linux-perf",
          "signature": "TID",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "thread id",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_tid",
          "package": "linux-perf",
          "partial": "Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_tid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etimestamp\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_time",
          "package": "linux-perf",
          "signature": "TimeStamp",
          "source": "src/Profiling-Linux-Perf-Types.html#EventPayload",
          "type": "function"
        },
        "index": {
          "description": "timestamp",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventPayload_time",
          "package": "linux-perf",
          "partial": "Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventPayload_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventTypeID",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#EventTypeID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "eventTypeID",
          "package": "linux-perf",
          "partial": "Type ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:eventTypeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe attribute payload.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fa_attr",
          "package": "linux-perf",
          "signature": "EventAttr",
          "source": "src/Profiling-Linux-Perf-Types.html#FileAttr",
          "type": "function"
        },
        "index": {
          "description": "The attribute payload",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fa_attr",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fa_attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile offset to the ids section.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fa_ids_offset",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#FileAttr",
          "type": "function"
        },
        "index": {
          "description": "File offset to the ids section",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fa_ids_offset",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fa_ids_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the ids section in bytes.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fa_ids_size",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#FileAttr",
          "type": "function"
        },
        "index": {
          "description": "Size of the ids section in bytes",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fa_ids_size",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fa_ids_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitfield.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_adds_features",
          "package": "linux-perf",
          "signature": "[Word32]",
          "source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "Bitfield",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_adds_features",
          "normalized": "[Word]",
          "package": "linux-perf",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_adds_features"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of one attribute section.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_attr_size",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "Size of one attribute section",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_attr_size",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_attr_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile offset to the attribute section.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_attrs_offset",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "File offset to the attribute section",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_attrs_offset",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_attrs_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the attribute section in bytes.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_attrs_size",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "Size of the attribute section in bytes",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_attrs_size",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_attrs_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile offset to the data section.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_data_offset",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "File offset to the data section",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_data_offset",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_data_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the data section in bytes.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_data_size",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "Size of the data section in bytes",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_data_size",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_data_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile offset to the event section.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_event_offset",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "File offset to the event section",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_event_offset",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_event_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the event section in bytes.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_event_size",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "Size of the event section in bytes",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_event_size",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_event_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of (this) header.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_size",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#FileHeader",
          "type": "function"
        },
        "index": {
          "description": "Size of this header",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "fh_size",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:fh_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon attributes of events.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "perfData_attrs",
          "package": "linux-perf",
          "signature": "[FileAttr]",
          "source": "src/Profiling-Linux-Perf-Types.html#PerfData",
          "type": "function"
        },
        "index": {
          "description": "Common attributes of events",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "perfData_attrs",
          "normalized": "[FileAttr]",
          "package": "linux-perf",
          "partial": "Data",
          "signature": "[FileAttr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:perfData_attrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event payload.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "perfData_events",
          "package": "linux-perf",
          "signature": "[Event]",
          "source": "src/Profiling-Linux-Perf-Types.html#PerfData",
          "type": "function"
        },
        "index": {
          "description": "The event payload",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "perfData_events",
          "normalized": "[Event]",
          "package": "linux-perf",
          "partial": "Data",
          "signature": "[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:perfData_events"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile header explains the structure of the file.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "perfData_fileHeader",
          "package": "linux-perf",
          "signature": "FileHeader",
          "source": "src/Profiling-Linux-Perf-Types.html#PerfData",
          "type": "function"
        },
        "index": {
          "description": "File header explains the structure of the file",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "perfData_fileHeader",
          "package": "linux-perf",
          "partial": "Data Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:perfData_fileHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent identifiers to be associated with the event attributes.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "perfData_idss",
          "package": "linux-perf",
          "signature": "[[EventID]]",
          "source": "src/Profiling-Linux-Perf-Types.html#PerfData",
          "type": "function"
        },
        "index": {
          "description": "Event identifiers to be associated with the event attributes",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "perfData_idss",
          "normalized": "[[EventID]]",
          "package": "linux-perf",
          "partial": "Data",
          "signature": "[[EventID]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:perfData_idss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent type information.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "perfData_types",
          "package": "linux-perf",
          "signature": "[TraceEventType]",
          "source": "src/Profiling-Linux-Perf-Types.html#PerfData",
          "type": "function"
        },
        "index": {
          "description": "Event type information",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "perfData_types",
          "normalized": "[TraceEventType]",
          "package": "linux-perf",
          "partial": "Data",
          "signature": "[TraceEventType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:perfData_types"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "pid",
          "package": "linux-perf",
          "signature": "Word32",
          "source": "src/Profiling-Linux-Perf-Types.html#PID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "pid",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:pid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "sampleTypeBitMap",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#SampleTypeBitMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "sampleTypeBitMap",
          "package": "linux-perf",
          "partial": "Type Bit Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:sampleTypeBitMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile offset to the section.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "sec_offset",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#FileSection",
          "type": "function"
        },
        "index": {
          "description": "File offset to the section",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "sec_offset",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:sec_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the section in bytes.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "sec_size",
          "package": "linux-perf",
          "signature": "ByteCount64",
          "source": "src/Profiling-Linux-Perf-Types.html#FileSection",
          "type": "function"
        },
        "index": {
          "description": "Size of the section in bytes",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "sec_size",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:sec_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis entry belongs to the perf event attr entry where .config\n has the same value as this id.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "te_event_id",
          "package": "linux-perf",
          "signature": "EventTypeID",
          "source": "src/Profiling-Linux-Perf-Types.html#TraceEventType",
          "type": "function"
        },
        "index": {
          "description": "This entry belongs to the perf event attr entry where config has the same value as this id",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "te_event_id",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:te_event_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "te_name",
          "package": "linux-perf",
          "signature": "ByteString",
          "source": "src/Profiling-Linux-Perf-Types.html#TraceEventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "te_name",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:te_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a given EventAttrFlag is set.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf.Types",
          "name": "testEventAttrFlag",
          "package": "linux-perf",
          "signature": "Word64 -\u003e EventAttrFlag -\u003e Bool",
          "source": "src/Profiling-Linux-Perf-Types.html#testEventAttrFlag",
          "type": "function"
        },
        "index": {
          "description": "Test if given EventAttrFlag is set",
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "testEventAttrFlag",
          "normalized": "Word-\u003eEventAttrFlag-\u003eBool",
          "package": "linux-perf",
          "partial": "Event Attr Flag",
          "signature": "Word-\u003eEventAttrFlag-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:testEventAttrFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "tid",
          "package": "linux-perf",
          "signature": "Word32",
          "source": "src/Profiling-Linux-Perf-Types.html#TID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "tid",
          "package": "linux-perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:tid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf.Types",
          "name": "timeStamp",
          "package": "linux-perf",
          "signature": "Word64",
          "source": "src/Profiling-Linux-Perf-Types.html#TimeStamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf Types",
          "module": "Profiling.Linux.Perf.Types",
          "name": "timeStamp",
          "package": "linux-perf",
          "partial": "Stamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf-Types.html#v:timeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA higher-level interface to the perf data file parsing code.\n\u003c/p\u003e\u003cp\u003eBelow is an example program which reads and parses a perf.data file and then\n dumps the contents to standard output:\n\u003c/p\u003e\u003cpre\u003e\nmodule Main where\n\nimport Profiling.Linux.Perf (readAndDisplay, OutputStyle (..))\nimport System.Environment (getArgs)\n\nmain :: IO ()\nmain = do\n  args \u003c- getArgs\n  case args of\n     [] -\u003e return ()\n     (file:_) -\u003e readAndDisplay Dump file\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "Perf",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf.html",
          "type": "module"
        },
        "index": {
          "description": "higher-level interface to the perf data file parsing code Below is an example program which reads and parses perf.data file and then dumps the contents to standard output module Main where import Profiling.Linux.Perf readAndDisplay OutputStyle import System.Environment getArgs main IO main do args getArgs case args of return file readAndDisplay Dump file",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "Perf",
          "package": "linux-perf",
          "partial": "Perf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle to use for printing the event data.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "OutputStyle",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf.html#OutputStyle",
          "type": "data"
        },
        "index": {
          "description": "Style to use for printing the event data",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "OutputStyle",
          "package": "linux-perf",
          "partial": "Output Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#t:OutputStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType information for of event.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "TypeInfo",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf.html#TypeInfo",
          "type": "data"
        },
        "index": {
          "description": "Type information for of event",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "TypeInfo",
          "package": "linux-perf",
          "partial": "Type Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#t:TypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociate events with their event types.\n Events are (usually) tagged with an \u003ca\u003eEventID\u003c/a\u003e. Many events can share the same\n \u003ca\u003eEventID\u003c/a\u003e. Each \u003ca\u003eEventID\u003c/a\u003e is associated with exactly one event type, which includes\n the name of the event, an \u003ca\u003eEventSource\u003c/a\u003e and an \u003ca\u003eEventTypeID\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "TypeMap",
          "package": "linux-perf",
          "source": "src/Profiling-Linux-Perf.html#TypeMap",
          "type": "type"
        },
        "index": {
          "description": "Associate events with their event types Events are usually tagged with an EventID Many events can share the same EventID Each EventID is associated with exactly one event type which includes the name of the event an EventSource and an EventTypeID",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "TypeMap",
          "package": "linux-perf",
          "partial": "Type Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#t:TypeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput full details of the data file preserving the original order of the events.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "Dump",
          "package": "linux-perf",
          "signature": "Dump",
          "source": "src/Profiling-Linux-Perf.html#OutputStyle",
          "type": "function"
        },
        "index": {
          "description": "Output full details of the data file preserving the original order of the events",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "Dump",
          "package": "linux-perf",
          "partial": "Dump",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:Dump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput command and sample events in time order with event type annotations.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "Trace",
          "package": "linux-perf",
          "signature": "Trace",
          "source": "src/Profiling-Linux-Perf.html#OutputStyle",
          "type": "function"
        },
        "index": {
          "description": "Output command and sample events in time order with event type annotations",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "Trace",
          "package": "linux-perf",
          "partial": "Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Linux.Perf",
          "name": "TypeInfo",
          "package": "linux-perf",
          "signature": "TypeInfo",
          "source": "src/Profiling-Linux-Perf.html#TypeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "TypeInfo",
          "package": "linux-perf",
          "partial": "Type Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:TypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the components of the perf.data file under the specified style.\n Don't create a single big \u003ccode\u003eDoc\u003c/code\u003e or \u003ccode\u003eString\u003c/code\u003e to avoid stack overflows.\n Instead, lazily print events as they are rendered.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "display",
          "package": "linux-perf",
          "signature": "OutputStyle -\u003e PerfData -\u003e IO ()",
          "source": "src/Profiling-Linux-Perf.html#display",
          "type": "function"
        },
        "index": {
          "description": "Render the components of the perf.data file under the specified style Don create single big Doc or String to avoid stack overflows Instead lazily print events as they are rendered",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "display",
          "normalized": "OutputStyle-\u003ePerfData-\u003eIO()",
          "package": "linux-perf",
          "signature": "OutputStyle-\u003ePerfData-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a map from \u003ca\u003eEventID\u003c/a\u003es to their type information.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "makeTypeMap",
          "package": "linux-perf",
          "signature": "PerfData -\u003e TypeMap",
          "source": "src/Profiling-Linux-Perf.html#makeTypeMap",
          "type": "function"
        },
        "index": {
          "description": "Build map from EventID to their type information",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "makeTypeMap",
          "normalized": "PerfData-\u003eTypeMap",
          "package": "linux-perf",
          "partial": "Type Map",
          "signature": "PerfData-\u003eTypeMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:makeTypeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the contents of the perf.data file and render it\n on stdout in a specified style.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "readAndDisplay",
          "package": "linux-perf",
          "signature": "OutputStyle -\u003e FilePath -\u003e IO ()",
          "source": "src/Profiling-Linux-Perf.html#readAndDisplay",
          "type": "function"
        },
        "index": {
          "description": "Read the contents of the perf.data file and render it on stdout in specified style",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "readAndDisplay",
          "normalized": "OutputStyle-\u003eFilePath-\u003eIO()",
          "package": "linux-perf",
          "partial": "And Display",
          "signature": "OutputStyle-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:readAndDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead and parse the perf.data file into its constituent components.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "readPerfData",
          "package": "linux-perf",
          "signature": "FilePath -\u003e IO PerfData",
          "source": "src/Profiling-Linux-Perf.html#readPerfData",
          "type": "function"
        },
        "index": {
          "description": "Read and parse the perf.data file into its constituent components",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "readPerfData",
          "normalized": "FilePath-\u003eIO PerfData",
          "package": "linux-perf",
          "partial": "Perf Data",
          "signature": "FilePath-\u003eIO PerfData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:readPerfData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort a list of events in ascending time order.\n Events without a timestamp are treated as having a timestamp of 0,\n which places them at the start of the sorted output.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "sortEventsOnTime",
          "package": "linux-perf",
          "signature": "[Event] -\u003e [Event]",
          "source": "src/Profiling-Linux-Perf.html#sortEventsOnTime",
          "type": "function"
        },
        "index": {
          "description": "Sort list of events in ascending time order Events without timestamp are treated as having timestamp of which places them at the start of the sorted output",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "sortEventsOnTime",
          "normalized": "[Event]-\u003e[Event]",
          "package": "linux-perf",
          "partial": "Events On Time",
          "signature": "[Event]-\u003e[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:sortEventsOnTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique number of this type of event.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "typeInfo_id",
          "package": "linux-perf",
          "signature": "EventTypeID",
          "source": "src/Profiling-Linux-Perf.html#TypeInfo",
          "type": "function"
        },
        "index": {
          "description": "Unique number of this type of event",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "typeInfo_id",
          "package": "linux-perf",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:typeInfo_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrintable name of the event source.\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "typeInfo_name",
          "package": "linux-perf",
          "signature": "String",
          "source": "src/Profiling-Linux-Perf.html#TypeInfo",
          "type": "function"
        },
        "index": {
          "description": "Printable name of the event source",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "typeInfo_name",
          "package": "linux-perf",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:typeInfo_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKind of the event source (hardware, software, tracepoint etc.).\n\u003c/p\u003e",
          "module": "Profiling.Linux.Perf",
          "name": "typeInfo_source",
          "package": "linux-perf",
          "signature": "EventSource",
          "source": "src/Profiling-Linux-Perf.html#TypeInfo",
          "type": "function"
        },
        "index": {
          "description": "Kind of the event source hardware software tracepoint etc",
          "hierarchy": "Profiling Linux Perf",
          "module": "Profiling.Linux.Perf",
          "name": "typeInfo_source",
          "package": "linux-perf",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-perf/docs/Profiling-Linux-Perf.html#v:typeInfo_source"
      }
    }
  ]
]