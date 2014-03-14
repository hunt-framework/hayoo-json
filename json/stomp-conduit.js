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
        "word": "stomp-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides Conduit interfaces\n for the stomp-queue library.\n The interfaces create or receive\n streams of messages instead of single messages.\n This approach aims to simplify the integration\n of messaging into applications by means of well-defined\n streaming interfaces. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Stompl.Client.Conduit",
          "name": "Conduit",
          "package": "stomp-conduit",
          "type": "module"
        },
        "index": {
          "description": "This module provides Conduit interfaces for the stomp-queue library The interfaces create or receive streams of messages instead of single messages This approach aims to simplify the integration of messaging into applications by means of well-defined streaming interfaces",
          "hierarchy": "Network Mom Stompl Client Conduit",
          "module": "Network.Mom.Stompl.Client.Conduit",
          "name": "Conduit",
          "package": "stomp-conduit",
          "partial": "Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stomp-conduit/docs/Network-Mom-Stompl-Client-Conduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a multipart message to a \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e queue\n   and returns a \u003ccode\u003eConsumer\u003c/code\u003e of type o.\n   The function terminates, when the stream ends.\n   The last segment is sent with the header (\"__last__\", \"true\").\n   Note that multipart messages are not foreseen by the standard.\n\u003c/p\u003e\u003cp\u003eFor parameters, please refer to \u003ccode\u003e\u003ca\u003eqSink\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Client.Conduit",
          "name": "qMultiSink",
          "package": "stomp-conduit",
          "signature": "Writer o -\u003e Type -\u003e [Header] -\u003e Consumer o m ()",
          "type": "function"
        },
        "index": {
          "description": "Writes multipart message to Writer queue and returns Consumer of type The function terminates when the stream ends The last segment is sent with the header last true Note that multipart messages are not foreseen by the standard For parameters please refer to qSink",
          "hierarchy": "Network Mom Stompl Client Conduit",
          "module": "Network.Mom.Stompl.Client.Conduit",
          "name": "qMultiSink",
          "normalized": "Writer a-\u003eType-\u003e[Header]-\u003eConsumer a b()",
          "package": "stomp-conduit",
          "partial": "Multi Sink",
          "signature": "Writer o-\u003eType-\u003e[Header]-\u003eConsumer o m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stomp-conduit/docs/Network-Mom-Stompl-Client-Conduit.html#v:qMultiSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads from a \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e queue with timeout \n   and returns a \u003ccode\u003eProducer\u003c/code\u003e of type \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e i.\n   The function ends when the timeout expires \n   or  after having received a segment that is marked as the last one.\n   Note that multipart messages are not foreseen by the standard.\n   \u003ccode\u003e\u003ca\u003eqMultiSink\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eqMultiSource\u003c/a\u003e\u003c/code\u003e use a header named \"__last__\"\n   to label the last segment of a multipart message.\n\u003c/p\u003e\u003cp\u003eFor parameters, please refer to \u003ccode\u003e\u003ca\u003eqSource\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Network.Mom.Stompl.Client.Conduit",
          "name": "qMultiSource",
          "package": "stomp-conduit",
          "signature": "Reader i -\u003e Int -\u003e Producer m (Message i)",
          "type": "function"
        },
        "index": {
          "description": "Reads from Reader queue with timeout and returns Producer of type Message The function ends when the timeout expires or after having received segment that is marked as the last one Note that multipart messages are not foreseen by the standard qMultiSink and qMultiSource use header named last to label the last segment of multipart message For parameters please refer to qSource",
          "hierarchy": "Network Mom Stompl Client Conduit",
          "module": "Network.Mom.Stompl.Client.Conduit",
          "name": "qMultiSource",
          "normalized": "Reader a-\u003eInt-\u003eProducer b(Message a)",
          "package": "stomp-conduit",
          "partial": "Multi Source",
          "signature": "Reader i-\u003eInt-\u003eProducer m(Message i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stomp-conduit/docs/Network-Mom-Stompl-Client-Conduit.html#v:qMultiSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a stream of messages to a \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e queue\n   and returns a \u003ccode\u003eConsumer\u003c/code\u003e of type o.\n   The function terminates, when the stream ends.\n\u003c/p\u003e\u003cp\u003eParameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e o: The output interface, a Stomp \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eType\u003c/code\u003e: The mime type of the message content.\n\u003c/li\u003e\u003cli\u003e [\u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e]: Headers to add to each message.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Client.Conduit",
          "name": "qSink",
          "package": "stomp-conduit",
          "signature": "Writer o -\u003e Type -\u003e [Header] -\u003e Consumer o m ()",
          "type": "function"
        },
        "index": {
          "description": "Writes stream of messages to Writer queue and returns Consumer of type The function terminates when the stream ends Parameters Writer The output interface Stomp Writer Type The mime type of the message content Header Headers to add to each message",
          "hierarchy": "Network Mom Stompl Client Conduit",
          "module": "Network.Mom.Stompl.Client.Conduit",
          "name": "qSink",
          "normalized": "Writer a-\u003eType-\u003e[Header]-\u003eConsumer a b()",
          "package": "stomp-conduit",
          "partial": "Sink",
          "signature": "Writer o-\u003eType-\u003e[Header]-\u003eConsumer o m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stomp-conduit/docs/Network-Mom-Stompl-Client-Conduit.html#v:qSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads from a \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e queue with timeout \n   and returns a \u003ccode\u003eProducer\u003c/code\u003e of type \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e i.\n\u003c/p\u003e\u003cp\u003eThe function ends iff the timeout expires \n   and loops infinitely otherwise.\n\u003c/p\u003e\u003cp\u003eParameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e i: The input interface, a Stomp \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e. \n\u003c/li\u003e\u003cli\u003e Int: Timeout in microseconds\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Stompl.Client.Conduit",
          "name": "qSource",
          "package": "stomp-conduit",
          "signature": "Reader i -\u003e Int -\u003e Producer m (Message i)",
          "type": "function"
        },
        "index": {
          "description": "Reads from Reader queue with timeout and returns Producer of type Message The function ends iff the timeout expires and loops infinitely otherwise Parameters Reader The input interface Stomp Reader Int Timeout in microseconds",
          "hierarchy": "Network Mom Stompl Client Conduit",
          "module": "Network.Mom.Stompl.Client.Conduit",
          "name": "qSource",
          "normalized": "Reader a-\u003eInt-\u003eProducer b(Message a)",
          "package": "stomp-conduit",
          "partial": "Source",
          "signature": "Reader i-\u003eInt-\u003eProducer m(Message i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stomp-conduit/docs/Network-Mom-Stompl-Client-Conduit.html#v:qSource"
      }
    }
  ]
]