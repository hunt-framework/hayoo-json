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
        "word": "hogg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Chain",
          "name": "Chain",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Chain.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Chain",
          "module": "Codec.Container.Ogg.Chain",
          "name": "Chain",
          "package": "hogg",
          "partial": "Chain",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Chain.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA section of a chained Ogg physical bitstream. This corresponds to\n an entire song or video, and most Ogg files in the wild contain only\n a single chain.\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Chain",
          "name": "OggChain",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Chain.html#OggChain",
          "type": "data"
        },
        "index": {
          "description": "section of chained Ogg physical bitstream This corresponds to an entire song or video and most Ogg files in the wild contain only single chain",
          "hierarchy": "Codec Container Ogg Chain",
          "module": "Codec.Container.Ogg.Chain",
          "name": "OggChain",
          "package": "hogg",
          "partial": "Ogg Chain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Chain.html#t:OggChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Chain",
          "name": "OggChain",
          "package": "hogg",
          "signature": "OggChain",
          "source": "src/Codec-Container-Ogg-Chain.html#OggChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Chain",
          "module": "Codec.Container.Ogg.Chain",
          "name": "OggChain",
          "package": "hogg",
          "partial": "Ogg Chain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Chain.html#v:OggChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a Skeleton logical bitstream to an OggChain\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Chain",
          "name": "chainAddSkeleton",
          "package": "hogg",
          "signature": "OggChain -\u003e IO OggChain",
          "source": "src/Codec-Container-Ogg-Chain.html#chainAddSkeleton",
          "type": "function"
        },
        "index": {
          "description": "Add Skeleton logical bitstream to an OggChain",
          "hierarchy": "Codec Container Ogg Chain",
          "module": "Codec.Container.Ogg.Chain",
          "name": "chainAddSkeleton",
          "normalized": "OggChain-\u003eIO OggChain",
          "package": "hogg",
          "partial": "Add Skeleton",
          "signature": "OggChain-\u003eIO OggChain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Chain.html#v:chainAddSkeleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Chain",
          "name": "chainPackets",
          "package": "hogg",
          "signature": "[OggPacket]",
          "source": "src/Codec-Container-Ogg-Chain.html#OggChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Chain",
          "module": "Codec.Container.Ogg.Chain",
          "name": "chainPackets",
          "normalized": "[OggPacket]",
          "package": "hogg",
          "partial": "Packets",
          "signature": "[OggPacket]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Chain.html#v:chainPackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Chain",
          "name": "chainPages",
          "package": "hogg",
          "signature": "[OggPage]",
          "source": "src/Codec-Container-Ogg-Chain.html#OggChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Chain",
          "module": "Codec.Container.Ogg.Chain",
          "name": "chainPages",
          "normalized": "[OggPage]",
          "package": "hogg",
          "partial": "Pages",
          "signature": "[OggPage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Chain.html#v:chainPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a ByteString into a list of OggChains\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Chain",
          "name": "chainScan",
          "package": "hogg",
          "signature": "ByteString -\u003e [OggChain]",
          "source": "src/Codec-Container-Ogg-Chain.html#chainScan",
          "type": "function"
        },
        "index": {
          "description": "Parse ByteString into list of OggChains",
          "hierarchy": "Codec Container Ogg Chain",
          "module": "Codec.Container.Ogg.Chain",
          "name": "chainScan",
          "normalized": "ByteString-\u003e[OggChain]",
          "package": "hogg",
          "partial": "Scan",
          "signature": "ByteString-\u003e[OggChain]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Chain.html#v:chainScan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Chain",
          "name": "chainTracks",
          "package": "hogg",
          "signature": "[OggTrack]",
          "source": "src/Codec-Container-Ogg-Chain.html#OggChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Chain",
          "module": "Codec.Container.Ogg.Chain",
          "name": "chainTracks",
          "normalized": "[OggTrack]",
          "package": "hogg",
          "partial": "Tracks",
          "signature": "[OggTrack]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Chain.html#v:chainTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Chop",
          "name": "Chop",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Chop.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Chop",
          "module": "Codec.Container.Ogg.Chop",
          "name": "Chop",
          "package": "hogg",
          "partial": "Chop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Chop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChop a bitstream, do NOT add a Skeleton bitstream\n | chop start end chain\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Chop",
          "name": "chop",
          "package": "hogg",
          "signature": "Maybe Timestamp -\u003e Maybe Timestamp -\u003e OggChain -\u003e IO OggChain",
          "source": "src/Codec-Container-Ogg-Chop.html#chop",
          "type": "function"
        },
        "index": {
          "description": "Chop bitstream do NOT add Skeleton bitstream chop start end chain",
          "hierarchy": "Codec Container Ogg Chop",
          "module": "Codec.Container.Ogg.Chop",
          "name": "chop",
          "normalized": "Maybe Timestamp-\u003eMaybe Timestamp-\u003eOggChain-\u003eIO OggChain",
          "package": "hogg",
          "signature": "Maybe Timestamp-\u003eMaybe Timestamp-\u003eOggChain-\u003eIO OggChain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Chop.html#v:chop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChop a bitstream, adding a Skeleton bitstream\n | chopWithSkel start end chain\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Chop",
          "name": "chopWithSkel",
          "package": "hogg",
          "signature": "Maybe Timestamp -\u003e Maybe Timestamp -\u003e OggChain -\u003e IO OggChain",
          "source": "src/Codec-Container-Ogg-Chop.html#chopWithSkel",
          "type": "function"
        },
        "index": {
          "description": "Chop bitstream adding Skeleton bitstream chopWithSkel start end chain",
          "hierarchy": "Codec Container Ogg Chop",
          "module": "Codec.Container.Ogg.Chop",
          "name": "chopWithSkel",
          "normalized": "Maybe Timestamp-\u003eMaybe Timestamp-\u003eOggChain-\u003eIO OggChain",
          "package": "hogg",
          "partial": "With Skel",
          "signature": "Maybe Timestamp-\u003eMaybe Timestamp-\u003eOggChain-\u003eIO OggChain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Chop.html#v:chopWithSkel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "ContentType",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-ContentType.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "ContentType",
          "package": "hogg",
          "partial": "Content Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData: ContentType\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "ContentType",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-ContentType.html#ContentType",
          "type": "data"
        },
        "index": {
          "description": "Data ContentType",
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "ContentType",
          "package": "hogg",
          "partial": "Content Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#t:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass: ContentTyped\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "ContentTyped",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-ContentType.html#ContentTyped",
          "type": "class"
        },
        "index": {
          "description": "Typeclass ContentTyped",
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "ContentTyped",
          "package": "hogg",
          "partial": "Content Typed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#t:ContentTyped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "ContentType",
          "package": "hogg",
          "signature": "ContentType",
          "source": "src/Codec-Container-Ogg-ContentType.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "ContentType",
          "package": "hogg",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "celt",
          "package": "hogg",
          "signature": "ContentType",
          "source": "src/Codec-Container-Ogg-ContentType.html#celt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "celt",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:celt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "cmml",
          "package": "hogg",
          "signature": "ContentType",
          "source": "src/Codec-Container-Ogg-ContentType.html#cmml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "cmml",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:cmml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "contentTypeEq",
          "package": "hogg",
          "signature": "a -\u003e b -\u003e Bool",
          "source": "src/Codec-Container-Ogg-ContentType.html#contentTypeEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "contentTypeEq",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "hogg",
          "partial": "Type Eq",
          "signature": "a-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:contentTypeEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "contentTypeIs",
          "package": "hogg",
          "signature": "ContentType -\u003e a -\u003e Bool",
          "source": "src/Codec-Container-Ogg-ContentType.html#contentTypeIs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "contentTypeIs",
          "normalized": "ContentType-\u003ea-\u003eBool",
          "package": "hogg",
          "partial": "Type Is",
          "signature": "ContentType-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:contentTypeIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "contentTypeOf",
          "package": "hogg",
          "signature": "a -\u003e Maybe ContentType",
          "source": "src/Codec-Container-Ogg-ContentType.html#contentTypeOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "contentTypeOf",
          "normalized": "a-\u003eMaybe ContentType",
          "package": "hogg",
          "partial": "Type Of",
          "signature": "a-\u003eMaybe ContentType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:contentTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup a list of ContentTyped items by their Content-Type\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "demuxByContentType",
          "package": "hogg",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Codec-Container-Ogg-ContentType.html#demuxByContentType",
          "type": "function"
        },
        "index": {
          "description": "Group list of ContentTyped items by their Content-Type",
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "demuxByContentType",
          "normalized": "[a]-\u003e[[a]]",
          "package": "hogg",
          "partial": "By Content Type",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:demuxByContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "flac",
          "package": "hogg",
          "signature": "ContentType",
          "source": "src/Codec-Container-Ogg-ContentType.html#flac",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "flac",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:flac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "granulerate",
          "package": "hogg",
          "signature": "ContentType -\u003e ByteString -\u003e Maybe Granulerate",
          "source": "src/Codec-Container-Ogg-ContentType.html#granulerate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "granulerate",
          "normalized": "ContentType-\u003eByteString-\u003eMaybe Granulerate",
          "package": "hogg",
          "signature": "ContentType-\u003eByteString-\u003eMaybe Granulerate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:granulerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "granulerateF",
          "package": "hogg",
          "signature": "Maybe (ByteString -\u003e Granulerate)",
          "source": "src/Codec-Container-Ogg-ContentType.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "granulerateF",
          "normalized": "Maybe(ByteString-\u003eGranulerate)",
          "package": "hogg",
          "signature": "Maybe(ByteString-\u003eGranulerate)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:granulerateF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "granuleshift",
          "package": "hogg",
          "signature": "ContentType -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Codec-Container-Ogg-ContentType.html#granuleshift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "granuleshift",
          "normalized": "ContentType-\u003eByteString-\u003eMaybe Int",
          "package": "hogg",
          "signature": "ContentType-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:granuleshift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "granuleshiftF",
          "package": "hogg",
          "signature": "Maybe (ByteString -\u003e Int)",
          "source": "src/Codec-Container-Ogg-ContentType.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "granuleshiftF",
          "normalized": "Maybe(ByteString-\u003eInt)",
          "package": "hogg",
          "signature": "Maybe(ByteString-\u003eInt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:granuleshiftF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "headers",
          "package": "hogg",
          "signature": "ByteString -\u003e Int",
          "source": "src/Codec-Container-Ogg-ContentType.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "headers",
          "normalized": "ByteString-\u003eInt",
          "package": "hogg",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "identify",
          "package": "hogg",
          "signature": "ByteString -\u003e Maybe ContentType",
          "source": "src/Codec-Container-Ogg-ContentType.html#identify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "identify",
          "normalized": "ByteString-\u003eMaybe ContentType",
          "package": "hogg",
          "signature": "ByteString-\u003eMaybe ContentType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:identify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "identifyP",
          "package": "hogg",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Codec-Container-Ogg-ContentType.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "identifyP",
          "normalized": "ByteString-\u003eBool",
          "package": "hogg",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:identifyP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "knownContentTypes",
          "package": "hogg",
          "signature": "[String]",
          "source": "src/Codec-Container-Ogg-ContentType.html#knownContentTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "knownContentTypes",
          "normalized": "[String]",
          "package": "hogg",
          "partial": "Content Types",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:knownContentTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "label",
          "package": "hogg",
          "signature": "String",
          "source": "src/Codec-Container-Ogg-ContentType.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "label",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "metadata",
          "package": "hogg",
          "signature": "ByteString -\u003e MessageHeaders",
          "source": "src/Codec-Container-Ogg-ContentType.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "metadata",
          "normalized": "ByteString-\u003eMessageHeaders",
          "package": "hogg",
          "signature": "ByteString-\u003eMessageHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:metadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "mime",
          "package": "hogg",
          "signature": "[String]",
          "source": "src/Codec-Container-Ogg-ContentType.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "mime",
          "normalized": "[String]",
          "package": "hogg",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:mime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "parseType",
          "package": "hogg",
          "signature": "String -\u003e Maybe ContentType",
          "source": "src/Codec-Container-Ogg-ContentType.html#parseType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "parseType",
          "normalized": "String-\u003eMaybe ContentType",
          "package": "hogg",
          "partial": "Type",
          "signature": "String-\u003eMaybe ContentType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:parseType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "preroll",
          "package": "hogg",
          "signature": "Int",
          "source": "src/Codec-Container-Ogg-ContentType.html#ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "preroll",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:preroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "skeleton",
          "package": "hogg",
          "signature": "ContentType",
          "source": "src/Codec-Container-Ogg-ContentType.html#skeleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "skeleton",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:skeleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "speex",
          "package": "hogg",
          "signature": "ContentType",
          "source": "src/Codec-Container-Ogg-ContentType.html#speex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "speex",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:speex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "theora",
          "package": "hogg",
          "signature": "ContentType",
          "source": "src/Codec-Container-Ogg-ContentType.html#theora",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "theora",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:theora"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.ContentType",
          "name": "vorbis",
          "package": "hogg",
          "signature": "ContentType",
          "source": "src/Codec-Container-Ogg-ContentType.html#vorbis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg ContentType",
          "module": "Codec.Container.Ogg.ContentType",
          "name": "vorbis",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-ContentType.html#v:vorbis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Granulepos",
          "name": "Granulepos",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Granulepos.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Granulepos",
          "module": "Codec.Container.Ogg.Granulepos",
          "name": "Granulepos",
          "package": "hogg",
          "partial": "Granulepos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Granulepos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Granulepos",
          "name": "Granulepos",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Granulepos.html#Granulepos",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Granulepos",
          "module": "Codec.Container.Ogg.Granulepos",
          "name": "Granulepos",
          "package": "hogg",
          "partial": "Granulepos",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Granulepos.html#t:Granulepos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Granulepos",
          "name": "Granulepos",
          "package": "hogg",
          "signature": "Granulepos (Maybe Word64)",
          "source": "src/Codec-Container-Ogg-Granulepos.html#Granulepos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Granulepos",
          "module": "Codec.Container.Ogg.Granulepos",
          "name": "Granulepos",
          "package": "hogg",
          "partial": "Granulepos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Granulepos.html#v:Granulepos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Granulepos",
          "name": "gpPack",
          "package": "hogg",
          "signature": "Word64 -\u003e Granulepos",
          "source": "src/Codec-Container-Ogg-Granulepos.html#gpPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Granulepos",
          "module": "Codec.Container.Ogg.Granulepos",
          "name": "gpPack",
          "normalized": "Word-\u003eGranulepos",
          "package": "hogg",
          "partial": "Pack",
          "signature": "Word-\u003eGranulepos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Granulepos.html#v:gpPack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Granulepos",
          "name": "gpUnpack",
          "package": "hogg",
          "signature": "Granulepos -\u003e Word64",
          "source": "src/Codec-Container-Ogg-Granulepos.html#gpUnpack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Granulepos",
          "module": "Codec.Container.Ogg.Granulepos",
          "name": "gpUnpack",
          "normalized": "Granulepos-\u003eWord",
          "package": "hogg",
          "partial": "Unpack",
          "signature": "Granulepos-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Granulepos.html#v:gpUnpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Granulerate",
          "name": "Granulerate",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Granulerate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Granulerate",
          "module": "Codec.Container.Ogg.Granulerate",
          "name": "Granulerate",
          "package": "hogg",
          "partial": "Granulerate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Granulerate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Granulerate",
          "name": "Granulerate",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Granulerate.html#Granulerate",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Granulerate",
          "module": "Codec.Container.Ogg.Granulerate",
          "name": "Granulerate",
          "package": "hogg",
          "partial": "Granulerate",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Granulerate.html#t:Granulerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Granulerate",
          "name": "Granulerate",
          "package": "hogg",
          "signature": "Granulerate Rational",
          "source": "src/Codec-Container-Ogg-Granulerate.html#Granulerate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Granulerate",
          "module": "Codec.Container.Ogg.Granulerate",
          "name": "Granulerate",
          "package": "hogg",
          "partial": "Granulerate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Granulerate.html#v:Granulerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Granulerate",
          "name": "fracRate",
          "package": "hogg",
          "signature": "Integer -\u003e Integer -\u003e Granulerate",
          "source": "src/Codec-Container-Ogg-Granulerate.html#fracRate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Granulerate",
          "module": "Codec.Container.Ogg.Granulerate",
          "name": "fracRate",
          "normalized": "Integer-\u003eInteger-\u003eGranulerate",
          "package": "hogg",
          "partial": "Rate",
          "signature": "Integer-\u003eInteger-\u003eGranulerate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Granulerate.html#v:fracRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Granulerate",
          "name": "intRate",
          "package": "hogg",
          "signature": "Integer -\u003e Granulerate",
          "source": "src/Codec-Container-Ogg-Granulerate.html#intRate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Granulerate",
          "module": "Codec.Container.Ogg.Granulerate",
          "name": "intRate",
          "normalized": "Integer-\u003eGranulerate",
          "package": "hogg",
          "partial": "Rate",
          "signature": "Integer-\u003eGranulerate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Granulerate.html#v:intRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Headers",
          "name": "Headers",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Headers.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Headers",
          "module": "Codec.Container.Ogg.Headers",
          "name": "Headers",
          "package": "hogg",
          "partial": "Headers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Headers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Headers",
          "name": "processHeaders",
          "package": "hogg",
          "signature": "([OggPage] -\u003e [OggPage]) -\u003e [OggPage] -\u003e [OggPage]",
          "source": "src/Codec-Container-Ogg-Headers.html#processHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Headers",
          "module": "Codec.Container.Ogg.Headers",
          "name": "processHeaders",
          "normalized": "([OggPage]-\u003e[OggPage])-\u003e[OggPage]-\u003e[OggPage]",
          "package": "hogg",
          "partial": "Headers",
          "signature": "([OggPage]-\u003e[OggPage])-\u003e[OggPage]-\u003e[OggPage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Headers.html#v:processHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Packet",
          "name": "Packet",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Packet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "Packet",
          "package": "hogg",
          "partial": "Packet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Packet",
          "name": "OggPacket",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Packet.html#OggPacket",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "OggPacket",
          "package": "hogg",
          "partial": "Ogg Packet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#t:OggPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Packet",
          "name": "OggSegment",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Packet.html#OggSegment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "OggSegment",
          "package": "hogg",
          "partial": "Ogg Segment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#t:OggSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Packet",
          "name": "OggPacket",
          "package": "hogg",
          "signature": "OggPacket",
          "source": "src/Codec-Container-Ogg-Packet.html#OggPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "OggPacket",
          "package": "hogg",
          "partial": "Ogg Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:OggPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Packet",
          "name": "OggSegment",
          "package": "hogg",
          "signature": "OggSegment",
          "source": "src/Codec-Container-Ogg-Packet.html#OggSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "OggSegment",
          "package": "hogg",
          "partial": "Ogg Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:OggSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetBOS",
          "package": "hogg",
          "signature": "Bool",
          "source": "src/Codec-Container-Ogg-Packet.html#OggPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetBOS",
          "package": "hogg",
          "partial": "BOS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:packetBOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetData",
          "package": "hogg",
          "signature": "ByteString",
          "source": "src/Codec-Container-Ogg-Packet.html#OggPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetData",
          "package": "hogg",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:packetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetEOS",
          "package": "hogg",
          "signature": "Bool",
          "source": "src/Codec-Container-Ogg-Packet.html#OggPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetEOS",
          "package": "hogg",
          "partial": "EOS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:packetEOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetGranulepos",
          "package": "hogg",
          "signature": "Granulepos",
          "source": "src/Codec-Container-Ogg-Packet.html#OggPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetGranulepos",
          "package": "hogg",
          "partial": "Granulepos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:packetGranulepos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetSegments",
          "package": "hogg",
          "signature": "(Maybe [OggSegment])",
          "source": "src/Codec-Container-Ogg-Packet.html#OggPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetSegments",
          "normalized": "(Maybe[OggSegment])",
          "package": "hogg",
          "partial": "Segments",
          "signature": "(Maybe[OggSegment])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:packetSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a dump of a packet, as used by \u003ca\u003ehogg dump\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetToBS",
          "package": "hogg",
          "signature": "OggPacket -\u003e ByteString",
          "source": "src/Codec-Container-Ogg-Packet.html#packetToBS",
          "type": "function"
        },
        "index": {
          "description": "Create dump of packet as used by hogg dump",
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetToBS",
          "normalized": "OggPacket-\u003eByteString",
          "package": "hogg",
          "partial": "To BS",
          "signature": "OggPacket-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:packetToBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetTrack",
          "package": "hogg",
          "signature": "OggTrack",
          "source": "src/Codec-Container-Ogg-Packet.html#OggPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetTrack",
          "package": "hogg",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:packetTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack packets into pages\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetsToPages",
          "package": "hogg",
          "signature": "[OggPacket] -\u003e [OggPage]",
          "source": "src/Codec-Container-Ogg-Packet.html#packetsToPages",
          "type": "function"
        },
        "index": {
          "description": "Pack packets into pages",
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "packetsToPages",
          "normalized": "[OggPacket]-\u003e[OggPage]",
          "package": "hogg",
          "partial": "To Pages",
          "signature": "[OggPacket]-\u003e[OggPage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:packetsToPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull the packets out of pages\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Packet",
          "name": "pagesToPackets",
          "package": "hogg",
          "signature": "[OggPage] -\u003e [OggPacket]",
          "source": "src/Codec-Container-Ogg-Packet.html#pagesToPackets",
          "type": "function"
        },
        "index": {
          "description": "Pull the packets out of pages",
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "pagesToPackets",
          "normalized": "[OggPage]-\u003e[OggPacket]",
          "package": "hogg",
          "partial": "To Packets",
          "signature": "[OggPage]-\u003e[OggPacket]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:pagesToPackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether or not the segment ends a page\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Packet",
          "name": "segmentEndsPage",
          "package": "hogg",
          "signature": "Bool",
          "source": "src/Codec-Container-Ogg-Packet.html#OggSegment",
          "type": "function"
        },
        "index": {
          "description": "whether or not the segment ends page",
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "segmentEndsPage",
          "package": "hogg",
          "partial": "Ends Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:segmentEndsPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Packet",
          "name": "segmentLength",
          "package": "hogg",
          "signature": "Int",
          "source": "src/Codec-Container-Ogg-Packet.html#OggSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "segmentLength",
          "package": "hogg",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:segmentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epage index (NOT seqno) of this segment\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Packet",
          "name": "segmentPageIx",
          "package": "hogg",
          "signature": "Int",
          "source": "src/Codec-Container-Ogg-Packet.html#OggSegment",
          "type": "function"
        },
        "index": {
          "description": "page index NOT seqno of this segment",
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "segmentPageIx",
          "package": "hogg",
          "partial": "Page Ix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:segmentPageIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a packet which spans a single page, ie. consists of only\n one segment\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Packet",
          "name": "uncutPacket",
          "package": "hogg",
          "signature": "ByteString -\u003e OggTrack -\u003e Granulepos -\u003e OggPacket",
          "source": "src/Codec-Container-Ogg-Packet.html#uncutPacket",
          "type": "function"
        },
        "index": {
          "description": "Create packet which spans single page ie consists of only one segment",
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "uncutPacket",
          "normalized": "ByteString-\u003eOggTrack-\u003eGranulepos-\u003eOggPacket",
          "package": "hogg",
          "partial": "Packet",
          "signature": "ByteString-\u003eOggTrack-\u003eGranulepos-\u003eOggPacket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:uncutPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a page which contains only a single complete packet\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Packet",
          "name": "uncutPage",
          "package": "hogg",
          "signature": "ByteString -\u003e OggTrack -\u003e Granulepos -\u003e OggPage",
          "source": "src/Codec-Container-Ogg-Packet.html#uncutPage",
          "type": "function"
        },
        "index": {
          "description": "Create page which contains only single complete packet",
          "hierarchy": "Codec Container Ogg Packet",
          "module": "Codec.Container.Ogg.Packet",
          "name": "uncutPage",
          "normalized": "ByteString-\u003eOggTrack-\u003eGranulepos-\u003eOggPage",
          "package": "hogg",
          "partial": "Page",
          "signature": "ByteString-\u003eOggTrack-\u003eGranulepos-\u003eOggPage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Packet.html#v:uncutPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Page",
          "name": "Page",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Page.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "Page",
          "package": "hogg",
          "partial": "Page",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Page",
          "name": "OggPage",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Page.html#OggPage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "OggPage",
          "package": "hogg",
          "partial": "Ogg Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#t:OggPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Page",
          "name": "OggPage",
          "package": "hogg",
          "signature": "OggPage",
          "source": "src/Codec-Container-Ogg-Page.html#OggPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "OggPage",
          "package": "hogg",
          "partial": "Ogg Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:OggPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Page",
          "name": "pageBOS",
          "package": "hogg",
          "signature": "Bool",
          "source": "src/Codec-Container-Ogg-Page.html#OggPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageBOS",
          "package": "hogg",
          "partial": "BOS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageBOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the number of packets completed by this page\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageCompletedPackets",
          "package": "hogg",
          "signature": "OggPage -\u003e Int",
          "source": "src/Codec-Container-Ogg-Page.html#pageCompletedPackets",
          "type": "function"
        },
        "index": {
          "description": "Determine the number of packets completed by this page",
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageCompletedPackets",
          "normalized": "OggPage-\u003eInt",
          "package": "hogg",
          "partial": "Completed Packets",
          "signature": "OggPage-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageCompletedPackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Page",
          "name": "pageContinued",
          "package": "hogg",
          "signature": "Bool",
          "source": "src/Codec-Container-Ogg-Page.html#OggPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageContinued",
          "package": "hogg",
          "partial": "Continued",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageContinued"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Page",
          "name": "pageEOS",
          "package": "hogg",
          "signature": "Bool",
          "source": "src/Codec-Container-Ogg-Page.html#OggPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageEOS",
          "package": "hogg",
          "partial": "EOS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageEOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Page",
          "name": "pageGranulepos",
          "package": "hogg",
          "signature": "Granulepos",
          "source": "src/Codec-Container-Ogg-Page.html#OggPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageGranulepos",
          "package": "hogg",
          "partial": "Granulepos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageGranulepos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Page",
          "name": "pageIncomplete",
          "package": "hogg",
          "signature": "Bool",
          "source": "src/Codec-Container-Ogg-Page.html#OggPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageIncomplete",
          "package": "hogg",
          "partial": "Incomplete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageIncomplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the keygranule of a page\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageKeyGranule",
          "package": "hogg",
          "signature": "OggPage -\u003e Maybe Integer",
          "source": "src/Codec-Container-Ogg-Page.html#pageKeyGranule",
          "type": "function"
        },
        "index": {
          "description": "Determine the keygranule of page",
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageKeyGranule",
          "normalized": "OggPage-\u003eMaybe Integer",
          "package": "hogg",
          "partial": "Key Granule",
          "signature": "OggPage-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageKeyGranule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the length in bytes of a page that would be written\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageLength",
          "package": "hogg",
          "signature": "OggPage -\u003e Int",
          "source": "src/Codec-Container-Ogg-Page.html#pageLength",
          "type": "function"
        },
        "index": {
          "description": "Determine the length in bytes of page that would be written",
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageLength",
          "normalized": "OggPage-\u003eInt",
          "package": "hogg",
          "partial": "Length",
          "signature": "OggPage-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Page",
          "name": "pageOffset",
          "package": "hogg",
          "signature": "Int64",
          "source": "src/Codec-Container-Ogg-Page.html#OggPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageOffset",
          "package": "hogg",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a list of data bytes into Ogg pages\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageScan",
          "package": "hogg",
          "signature": "ByteString -\u003e ([OggTrack], [OggPage], ByteString)",
          "source": "src/Codec-Container-Ogg-Page.html#pageScan",
          "type": "function"
        },
        "index": {
          "description": "Read list of data bytes into Ogg pages",
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageScan",
          "normalized": "ByteString-\u003e([OggTrack],[OggPage],ByteString)",
          "package": "hogg",
          "partial": "Scan",
          "signature": "ByteString-\u003e([OggTrack],[OggPage],ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageScan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Page",
          "name": "pageSegments",
          "package": "hogg",
          "signature": "[ByteString]",
          "source": "src/Codec-Container-Ogg-Page.html#OggPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageSegments",
          "normalized": "[ByteString]",
          "package": "hogg",
          "partial": "Segments",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Page",
          "name": "pageSeqno",
          "package": "hogg",
          "signature": "Word32",
          "source": "src/Codec-Container-Ogg-Page.html#OggPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageSeqno",
          "package": "hogg",
          "partial": "Seqno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageSeqno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Page",
          "name": "pageTrack",
          "package": "hogg",
          "signature": "OggTrack",
          "source": "src/Codec-Container-Ogg-Page.html#OggPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageTrack",
          "package": "hogg",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a binary representation of an Ogg page\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageWrite",
          "package": "hogg",
          "signature": "OggPage -\u003e ByteString",
          "source": "src/Codec-Container-Ogg-Page.html#pageWrite",
          "type": "function"
        },
        "index": {
          "description": "Construct binary representation of an Ogg page",
          "hierarchy": "Codec Container Ogg Page",
          "module": "Codec.Container.Ogg.Page",
          "name": "pageWrite",
          "normalized": "OggPage-\u003eByteString",
          "package": "hogg",
          "partial": "Write",
          "signature": "OggPage-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Page.html#v:pageWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "RawPage",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-RawPage.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "RawPage",
          "package": "hogg",
          "partial": "Raw Page",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "OggRawPage",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-RawPage.html#OggRawPage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "OggRawPage",
          "package": "hogg",
          "partial": "Ogg Raw Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#t:OggRawPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "OggRawPage",
          "package": "hogg",
          "signature": "OggRawPage",
          "source": "src/Codec-Container-Ogg-RawPage.html#OggRawPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "OggRawPage",
          "package": "hogg",
          "partial": "Ogg Raw Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:OggRawPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "pageMarker",
          "package": "hogg",
          "signature": "ByteString",
          "source": "src/Codec-Container-Ogg-RawPage.html#pageMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "pageMarker",
          "package": "hogg",
          "partial": "Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:pageMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOgg version supported by this library\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "pageVersion",
          "package": "hogg",
          "signature": "Word8",
          "source": "src/Codec-Container-Ogg-RawPage.html#pageVersion",
          "type": "function"
        },
        "index": {
          "description": "Ogg version supported by this library",
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "pageVersion",
          "package": "hogg",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:pageVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageBody",
          "package": "hogg",
          "signature": "ByteString",
          "source": "src/Codec-Container-Ogg-RawPage.html#OggRawPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageBody",
          "package": "hogg",
          "partial": "Page Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:rawPageBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageBuild",
          "package": "hogg",
          "signature": "ByteString -\u003e (OggRawPage, Int64)",
          "source": "src/Codec-Container-Ogg-RawPage.html#rawPageBuild",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageBuild",
          "normalized": "ByteString-\u003e(OggRawPage,Int)",
          "package": "hogg",
          "partial": "Page Build",
          "signature": "ByteString-\u003e(OggRawPage,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:rawPageBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageCRC",
          "package": "hogg",
          "signature": "Word32",
          "source": "src/Codec-Container-Ogg-RawPage.html#OggRawPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageCRC",
          "package": "hogg",
          "partial": "Page CRC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:rawPageCRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageGranulepos",
          "package": "hogg",
          "signature": "Word64",
          "source": "src/Codec-Container-Ogg-RawPage.html#OggRawPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageGranulepos",
          "package": "hogg",
          "partial": "Page Granulepos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:rawPageGranulepos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageHType",
          "package": "hogg",
          "signature": "Word8",
          "source": "src/Codec-Container-Ogg-RawPage.html#OggRawPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageHType",
          "package": "hogg",
          "partial": "Page HType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:rawPageHType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageNumseg",
          "package": "hogg",
          "signature": "Int",
          "source": "src/Codec-Container-Ogg-RawPage.html#OggRawPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageNumseg",
          "package": "hogg",
          "partial": "Page Numseg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:rawPageNumseg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageScan",
          "package": "hogg",
          "signature": "ByteString -\u003e [OggRawPage]",
          "source": "src/Codec-Container-Ogg-RawPage.html#rawPageScan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageScan",
          "normalized": "ByteString-\u003e[OggRawPage]",
          "package": "hogg",
          "partial": "Page Scan",
          "signature": "ByteString-\u003e[OggRawPage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:rawPageScan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageSegtab",
          "package": "hogg",
          "signature": "[Int]",
          "source": "src/Codec-Container-Ogg-RawPage.html#OggRawPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageSegtab",
          "normalized": "[Int]",
          "package": "hogg",
          "partial": "Page Segtab",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:rawPageSegtab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageSeqno",
          "package": "hogg",
          "signature": "Word32",
          "source": "src/Codec-Container-Ogg-RawPage.html#OggRawPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageSeqno",
          "package": "hogg",
          "partial": "Page Seqno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:rawPageSeqno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageSerialno",
          "package": "hogg",
          "signature": "Word32",
          "source": "src/Codec-Container-Ogg-RawPage.html#OggRawPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageSerialno",
          "package": "hogg",
          "partial": "Page Serialno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:rawPageSerialno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageVersion",
          "package": "hogg",
          "signature": "Word8",
          "source": "src/Codec-Container-Ogg-RawPage.html#OggRawPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg RawPage",
          "module": "Codec.Container.Ogg.RawPage",
          "name": "rawPageVersion",
          "package": "hogg",
          "partial": "Page Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-RawPage.html#v:rawPageVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Serial",
          "name": "Serial",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Serial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Serial",
          "module": "Codec.Container.Ogg.Serial",
          "name": "Serial",
          "package": "hogg",
          "partial": "Serial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Serial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Serial",
          "name": "Serial",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Serial.html#Serial",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Serial",
          "module": "Codec.Container.Ogg.Serial",
          "name": "Serial",
          "package": "hogg",
          "partial": "Serial",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Serial.html#t:Serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass: Serialled\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Serial",
          "name": "Serialled",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Serial.html#Serialled",
          "type": "class"
        },
        "index": {
          "description": "Typeclass Serialled",
          "hierarchy": "Codec Container Ogg Serial",
          "module": "Codec.Container.Ogg.Serial",
          "name": "Serialled",
          "package": "hogg",
          "partial": "Serialled",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Serial.html#t:Serialled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDemux\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Serial",
          "name": "demux",
          "package": "hogg",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Codec-Container-Ogg-Serial.html#demux",
          "type": "function"
        },
        "index": {
          "description": "Demux",
          "hierarchy": "Codec Container Ogg Serial",
          "module": "Codec.Container.Ogg.Serial",
          "name": "demux",
          "normalized": "[a]-\u003e[[a]]",
          "package": "hogg",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Serial.html#v:demux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a serial number\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Serial",
          "name": "genSerial",
          "package": "hogg",
          "signature": "IO Serial",
          "source": "src/Codec-Container-Ogg-Serial.html#genSerial",
          "type": "function"
        },
        "index": {
          "description": "Generate serial number",
          "hierarchy": "Codec Container Ogg Serial",
          "module": "Codec.Container.Ogg.Serial",
          "name": "genSerial",
          "package": "hogg",
          "partial": "Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Serial.html#v:genSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Serial",
          "name": "serialOf",
          "package": "hogg",
          "signature": "a -\u003e Serial",
          "source": "src/Codec-Container-Ogg-Serial.html#serialOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Serial",
          "module": "Codec.Container.Ogg.Serial",
          "name": "serialOf",
          "normalized": "a-\u003eSerial",
          "package": "hogg",
          "partial": "Of",
          "signature": "a-\u003eSerial",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Serial.html#v:serialOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "Skeleton",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Skeleton.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "Skeleton",
          "package": "hogg",
          "partial": "Skeleton",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "OggFisbone",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFisbone",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "OggFisbone",
          "package": "hogg",
          "partial": "Ogg Fisbone",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#t:OggFisbone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "OggFishead",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFishead",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "OggFishead",
          "package": "hogg",
          "partial": "Ogg Fishead",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#t:OggFishead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "OggFisbone",
          "package": "hogg",
          "signature": "OggFisbone",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFisbone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "OggFisbone",
          "package": "hogg",
          "partial": "Ogg Fisbone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:OggFisbone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "OggFishead",
          "package": "hogg",
          "signature": "OggFishead",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFishead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "OggFishead",
          "package": "hogg",
          "partial": "Ogg Fishead",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:OggFishead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "emptyFishead",
          "package": "hogg",
          "signature": "OggFishead",
          "source": "src/Codec-Container-Ogg-Skeleton.html#emptyFishead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "emptyFishead",
          "package": "hogg",
          "partial": "Fishead",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:emptyFishead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneGranulerate",
          "package": "hogg",
          "signature": "Granulerate",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFisbone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneGranulerate",
          "package": "hogg",
          "partial": "Granulerate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisboneGranulerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneGranuleshift",
          "package": "hogg",
          "signature": "Int",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFisbone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneGranuleshift",
          "package": "hogg",
          "partial": "Granuleshift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisboneGranuleshift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneMsgHeaders",
          "package": "hogg",
          "signature": "MessageHeaders",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFisbone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneMsgHeaders",
          "package": "hogg",
          "partial": "Msg Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisboneMsgHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneNHeaders",
          "package": "hogg",
          "signature": "Int",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFisbone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneNHeaders",
          "package": "hogg",
          "partial": "NHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisboneNHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisbonePreroll",
          "package": "hogg",
          "signature": "Word32",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFisbone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisbonePreroll",
          "package": "hogg",
          "partial": "Preroll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisbonePreroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneSerialno",
          "package": "hogg",
          "signature": "Serial",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFisbone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneSerialno",
          "package": "hogg",
          "partial": "Serialno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisboneSerialno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneStartgranule",
          "package": "hogg",
          "signature": "Word64",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFisbone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneStartgranule",
          "package": "hogg",
          "partial": "Startgranule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisboneStartgranule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneToPacket",
          "package": "hogg",
          "signature": "OggTrack -\u003e OggFisbone -\u003e OggPacket",
          "source": "src/Codec-Container-Ogg-Skeleton.html#fisboneToPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneToPacket",
          "normalized": "OggTrack-\u003eOggFisbone-\u003eOggPacket",
          "package": "hogg",
          "partial": "To Packet",
          "signature": "OggTrack-\u003eOggFisbone-\u003eOggPacket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisboneToPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneToPage",
          "package": "hogg",
          "signature": "OggTrack -\u003e OggFisbone -\u003e OggPage",
          "source": "src/Codec-Container-Ogg-Skeleton.html#fisboneToPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisboneToPage",
          "normalized": "OggTrack-\u003eOggFisbone-\u003eOggPage",
          "package": "hogg",
          "partial": "To Page",
          "signature": "OggTrack-\u003eOggFisbone-\u003eOggPage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisboneToPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisheadBasetime",
          "package": "hogg",
          "signature": "Timestamp",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFishead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisheadBasetime",
          "package": "hogg",
          "partial": "Basetime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisheadBasetime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisheadPrestime",
          "package": "hogg",
          "signature": "Timestamp",
          "source": "src/Codec-Container-Ogg-Skeleton.html#OggFishead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisheadPrestime",
          "package": "hogg",
          "partial": "Prestime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisheadPrestime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisheadToPacket",
          "package": "hogg",
          "signature": "OggTrack -\u003e OggFishead -\u003e OggPacket",
          "source": "src/Codec-Container-Ogg-Skeleton.html#fisheadToPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisheadToPacket",
          "normalized": "OggTrack-\u003eOggFishead-\u003eOggPacket",
          "package": "hogg",
          "partial": "To Packet",
          "signature": "OggTrack-\u003eOggFishead-\u003eOggPacket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisheadToPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisheadToPage",
          "package": "hogg",
          "signature": "OggTrack -\u003e OggFishead -\u003e OggPage",
          "source": "src/Codec-Container-Ogg-Skeleton.html#fisheadToPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "fisheadToPage",
          "normalized": "OggTrack-\u003eOggFishead-\u003eOggPage",
          "package": "hogg",
          "partial": "To Page",
          "signature": "OggTrack-\u003eOggFishead-\u003eOggPage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:fisheadToPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "packetToFisbone",
          "package": "hogg",
          "signature": "OggPacket -\u003e Maybe OggFisbone",
          "source": "src/Codec-Container-Ogg-Skeleton.html#packetToFisbone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "packetToFisbone",
          "normalized": "OggPacket-\u003eMaybe OggFisbone",
          "package": "hogg",
          "partial": "To Fisbone",
          "signature": "OggPacket-\u003eMaybe OggFisbone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:packetToFisbone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "packetToFishead",
          "package": "hogg",
          "signature": "OggPacket -\u003e Maybe OggFishead",
          "source": "src/Codec-Container-Ogg-Skeleton.html#packetToFishead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "packetToFishead",
          "normalized": "OggPacket-\u003eMaybe OggFishead",
          "package": "hogg",
          "partial": "To Fishead",
          "signature": "OggPacket-\u003eMaybe OggFishead",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:packetToFishead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "pageToFisbone",
          "package": "hogg",
          "signature": "OggPage -\u003e Maybe OggFisbone",
          "source": "src/Codec-Container-Ogg-Skeleton.html#pageToFisbone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "pageToFisbone",
          "normalized": "OggPage-\u003eMaybe OggFisbone",
          "package": "hogg",
          "partial": "To Fisbone",
          "signature": "OggPage-\u003eMaybe OggFisbone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:pageToFisbone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "pageToFishead",
          "package": "hogg",
          "signature": "OggPage -\u003e Maybe OggFishead",
          "source": "src/Codec-Container-Ogg-Skeleton.html#pageToFishead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "pageToFishead",
          "normalized": "OggPage-\u003eMaybe OggFishead",
          "package": "hogg",
          "partial": "To Fishead",
          "signature": "OggPage-\u003eMaybe OggFishead",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:pageToFishead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an OggFisbone from a given OggTrack\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "trackToFisbone",
          "package": "hogg",
          "signature": "OggTrack -\u003e Maybe OggFisbone",
          "source": "src/Codec-Container-Ogg-Skeleton.html#trackToFisbone",
          "type": "function"
        },
        "index": {
          "description": "Create an OggFisbone from given OggTrack",
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "trackToFisbone",
          "normalized": "OggTrack-\u003eMaybe OggFisbone",
          "package": "hogg",
          "partial": "To Fisbone",
          "signature": "OggTrack-\u003eMaybe OggFisbone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:trackToFisbone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list of OggFisbones from a list of OggTracks, not including\n | any OggTracks with unknown ContentType or Granulerate\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "tracksToFisbones",
          "package": "hogg",
          "signature": "[OggTrack] -\u003e [OggFisbone]",
          "source": "src/Codec-Container-Ogg-Skeleton.html#tracksToFisbones",
          "type": "function"
        },
        "index": {
          "description": "Create list of OggFisbones from list of OggTracks not including any OggTracks with unknown ContentType or Granulerate",
          "hierarchy": "Codec Container Ogg Skeleton",
          "module": "Codec.Container.Ogg.Skeleton",
          "name": "tracksToFisbones",
          "normalized": "[OggTrack]-\u003e[OggFisbone]",
          "package": "hogg",
          "partial": "To Fisbones",
          "signature": "[OggTrack]-\u003e[OggFisbone]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Skeleton.html#v:tracksToFisbones"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Sort",
          "name": "Sort",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Sort.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Sort",
          "module": "Codec.Container.Ogg.Sort",
          "name": "Sort",
          "package": "hogg",
          "partial": "Sort",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Sort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Sort",
          "name": "merge",
          "package": "hogg",
          "signature": "[[OggPage]] -\u003e [OggPage]",
          "source": "src/Codec-Container-Ogg-Sort.html#merge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Sort",
          "module": "Codec.Container.Ogg.Sort",
          "name": "merge",
          "normalized": "[[OggPage]]-\u003e[OggPage]",
          "package": "hogg",
          "signature": "[[OggPage]]-\u003e[OggPage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Sort.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Sort",
          "name": "sort",
          "package": "hogg",
          "signature": "[OggPage] -\u003e [OggPage]",
          "source": "src/Codec-Container-Ogg-Sort.html#sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Sort",
          "module": "Codec.Container.Ogg.Sort",
          "name": "sort",
          "normalized": "[OggPage]-\u003e[OggPage]",
          "package": "hogg",
          "signature": "[OggPage]-\u003e[OggPage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Sort.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "TimeScheme",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-TimeScheme.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "TimeScheme",
          "package": "hogg",
          "partial": "Time Scheme",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "TimeScheme",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#TimeScheme",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "TimeScheme",
          "package": "hogg",
          "partial": "Time Scheme",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#t:TimeScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "TimeScheme",
          "package": "hogg",
          "signature": "TimeScheme",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#TimeScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "TimeScheme",
          "package": "hogg",
          "partial": "Time Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:TimeScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuess the TimeScheme by rate\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "guessTimeScheme",
          "package": "hogg",
          "signature": "Rational -\u003e Maybe TimeScheme",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#guessTimeScheme",
          "type": "function"
        },
        "index": {
          "description": "Guess the TimeScheme by rate",
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "guessTimeScheme",
          "normalized": "Rational-\u003eMaybe TimeScheme",
          "package": "hogg",
          "partial": "Time Scheme",
          "signature": "Rational-\u003eMaybe TimeScheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:guessTimeScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "npt",
          "package": "hogg",
          "signature": "TimeScheme",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#npt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "npt",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:npt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte24",
          "package": "hogg",
          "signature": "TimeScheme",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#smpte24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte24",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:smpte24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte24drop",
          "package": "hogg",
          "signature": "TimeScheme",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#smpte24drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte24drop",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:smpte24drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte25",
          "package": "hogg",
          "signature": "TimeScheme",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#smpte25",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte25",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:smpte25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte25drop",
          "package": "hogg",
          "signature": "TimeScheme",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#smpte25drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte25drop",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:smpte25drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte30",
          "package": "hogg",
          "signature": "TimeScheme",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#smpte30",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte30",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:smpte30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte30drop",
          "package": "hogg",
          "signature": "TimeScheme",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#smpte30drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte30drop",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:smpte30drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte50",
          "package": "hogg",
          "signature": "TimeScheme",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#smpte50",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte50",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:smpte50"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte60",
          "package": "hogg",
          "signature": "TimeScheme",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#smpte60",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte60",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:smpte60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte60drop",
          "package": "hogg",
          "signature": "TimeScheme",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#smpte60drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "smpte60drop",
          "package": "hogg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:smpte60drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "timeSchemeName",
          "package": "hogg",
          "signature": "String",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#TimeScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "timeSchemeName",
          "package": "hogg",
          "partial": "Scheme Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:timeSchemeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "timeSchemeRate",
          "package": "hogg",
          "signature": "Rational",
          "source": "src/Codec-Container-Ogg-TimeScheme.html#TimeScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg TimeScheme",
          "module": "Codec.Container.Ogg.TimeScheme",
          "name": "timeSchemeRate",
          "package": "hogg",
          "partial": "Scheme Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-TimeScheme.html#v:timeSchemeRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "Timestamp",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Timestamp.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Timestamp",
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "Timestamp",
          "package": "hogg",
          "partial": "Timestamp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Timestamp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "Timestamp",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Timestamp.html#Timestamp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Timestamp",
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "Timestamp",
          "package": "hogg",
          "partial": "Timestamp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Timestamp.html#t:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "Timestampable",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Timestamp.html#Timestampable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Timestamp",
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "Timestampable",
          "package": "hogg",
          "partial": "Timestampable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Timestamp.html#t:Timestampable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "Timestamp",
          "package": "hogg",
          "signature": "Timestamp",
          "source": "src/Codec-Container-Ogg-Timestamp.html#Timestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Timestamp",
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "Timestamp",
          "package": "hogg",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Timestamp.html#v:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "before",
          "package": "hogg",
          "signature": "Maybe Timestamp -\u003e a -\u003e Bool",
          "source": "src/Codec-Container-Ogg-Timestamp.html#before",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Timestamp",
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "before",
          "normalized": "Maybe Timestamp-\u003ea-\u003eBool",
          "package": "hogg",
          "signature": "Maybe Timestamp-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Timestamp.html#v:before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "between",
          "package": "hogg",
          "signature": "Maybe Timestamp -\u003e Maybe Timestamp -\u003e [a] -\u003e [a]",
          "source": "src/Codec-Container-Ogg-Timestamp.html#between",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Timestamp",
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "between",
          "normalized": "Maybe Timestamp-\u003eMaybe Timestamp-\u003e[a]-\u003e[a]",
          "package": "hogg",
          "signature": "Maybe Timestamp-\u003eMaybe Timestamp-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Timestamp.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "stamp",
          "package": "hogg",
          "signature": "(Integer, Integer)",
          "source": "src/Codec-Container-Ogg-Timestamp.html#Timestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Timestamp",
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "stamp",
          "normalized": "(Integer,Integer)",
          "package": "hogg",
          "signature": "(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Timestamp.html#v:stamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "timestampOf",
          "package": "hogg",
          "signature": "a -\u003e Maybe Timestamp",
          "source": "src/Codec-Container-Ogg-Timestamp.html#timestampOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Timestamp",
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "timestampOf",
          "normalized": "a-\u003eMaybe Timestamp",
          "package": "hogg",
          "partial": "Of",
          "signature": "a-\u003eMaybe Timestamp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Timestamp.html#v:timestampOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "zeroTimestamp",
          "package": "hogg",
          "signature": "Timestamp",
          "source": "src/Codec-Container-Ogg-Timestamp.html#zeroTimestamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Timestamp",
          "module": "Codec.Container.Ogg.Timestamp",
          "name": "zeroTimestamp",
          "package": "hogg",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Timestamp.html#v:zeroTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Track",
          "name": "Track",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Track.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "Track",
          "package": "hogg",
          "partial": "Track",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass: ContentTypeImplied\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Track",
          "name": "ContentTypeImplied",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Track.html#ContentTypeImplied",
          "type": "class"
        },
        "index": {
          "description": "Typeclass ContentTypeImplied",
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "ContentTypeImplied",
          "package": "hogg",
          "partial": "Content Type Implied",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#t:ContentTypeImplied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Track",
          "name": "OggTrack",
          "package": "hogg",
          "source": "src/Codec-Container-Ogg-Track.html#OggTrack",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "OggTrack",
          "package": "hogg",
          "partial": "Ogg Track",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#t:OggTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Track",
          "name": "OggTrack",
          "package": "hogg",
          "signature": "OggTrack",
          "source": "src/Codec-Container-Ogg-Track.html#OggTrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "OggTrack",
          "package": "hogg",
          "partial": "Ogg Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:OggTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Track",
          "name": "bosToTrack",
          "package": "hogg",
          "signature": "Serial -\u003e ByteString -\u003e OggTrack",
          "source": "src/Codec-Container-Ogg-Track.html#bosToTrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "bosToTrack",
          "normalized": "Serial-\u003eByteString-\u003eOggTrack",
          "package": "hogg",
          "partial": "To Track",
          "signature": "Serial-\u003eByteString-\u003eOggTrack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:bosToTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Track",
          "name": "contentTypeImplies",
          "package": "hogg",
          "signature": "[OggTrack] -\u003e ContentType -\u003e a -\u003e Bool",
          "source": "src/Codec-Container-Ogg-Track.html#contentTypeImplies",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "contentTypeImplies",
          "normalized": "[OggTrack]-\u003eContentType-\u003ea-\u003eBool",
          "package": "hogg",
          "partial": "Type Implies",
          "signature": "[OggTrack]-\u003eContentType-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:contentTypeImplies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Track",
          "name": "gpExplain",
          "package": "hogg",
          "signature": "Granulepos -\u003e OggTrack -\u003e String",
          "source": "src/Codec-Container-Ogg-Track.html#gpExplain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "gpExplain",
          "normalized": "Granulepos-\u003eOggTrack-\u003eString",
          "package": "hogg",
          "partial": "Explain",
          "signature": "Granulepos-\u003eOggTrack-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:gpExplain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a granulepos by its track's granuleshift\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Track",
          "name": "gpSplit",
          "package": "hogg",
          "signature": "Granulepos -\u003e OggTrack -\u003e Maybe (Integer, Integer)",
          "source": "src/Codec-Container-Ogg-Track.html#gpSplit",
          "type": "function"
        },
        "index": {
          "description": "Split granulepos by its track granuleshift",
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "gpSplit",
          "normalized": "Granulepos-\u003eOggTrack-\u003eMaybe(Integer,Integer)",
          "package": "hogg",
          "partial": "Split",
          "signature": "Granulepos-\u003eOggTrack-\u003eMaybe(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:gpSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a granluepos to a count of granules\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Track",
          "name": "gpToGranules",
          "package": "hogg",
          "signature": "Granulepos -\u003e OggTrack -\u003e Maybe Integer",
          "source": "src/Codec-Container-Ogg-Track.html#gpToGranules",
          "type": "function"
        },
        "index": {
          "description": "Convert granluepos to count of granules",
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "gpToGranules",
          "normalized": "Granulepos-\u003eOggTrack-\u003eMaybe Integer",
          "package": "hogg",
          "partial": "To Granules",
          "signature": "Granulepos-\u003eOggTrack-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:gpToGranules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a granulepos to a timestamp\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Track",
          "name": "gpToTimestamp",
          "package": "hogg",
          "signature": "Granulepos -\u003e OggTrack -\u003e Maybe Timestamp",
          "source": "src/Codec-Container-Ogg-Track.html#gpToTimestamp",
          "type": "function"
        },
        "index": {
          "description": "Convert granulepos to timestamp",
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "gpToTimestamp",
          "normalized": "Granulepos-\u003eOggTrack-\u003eMaybe Timestamp",
          "package": "hogg",
          "partial": "To Timestamp",
          "signature": "Granulepos-\u003eOggTrack-\u003eMaybe Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:gpToTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA new track, with a given serialno\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Track",
          "name": "newTrack",
          "package": "hogg",
          "signature": "Serial -\u003e OggTrack",
          "source": "src/Codec-Container-Ogg-Track.html#newTrack",
          "type": "function"
        },
        "index": {
          "description": "new track with given serialno",
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "newTrack",
          "normalized": "Serial-\u003eOggTrack",
          "package": "hogg",
          "partial": "Track",
          "signature": "Serial-\u003eOggTrack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:newTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe null track\n\u003c/p\u003e",
          "module": "Codec.Container.Ogg.Track",
          "name": "nullTrack",
          "package": "hogg",
          "signature": "OggTrack",
          "source": "src/Codec-Container-Ogg-Track.html#nullTrack",
          "type": "function"
        },
        "index": {
          "description": "The null track",
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "nullTrack",
          "package": "hogg",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:nullTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Track",
          "name": "trackGranulerate",
          "package": "hogg",
          "signature": "Maybe Granulerate",
          "source": "src/Codec-Container-Ogg-Track.html#OggTrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "trackGranulerate",
          "package": "hogg",
          "partial": "Granulerate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:trackGranulerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Track",
          "name": "trackGranuleshift",
          "package": "hogg",
          "signature": "Maybe Int",
          "source": "src/Codec-Container-Ogg-Track.html#OggTrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "trackGranuleshift",
          "package": "hogg",
          "partial": "Granuleshift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:trackGranuleshift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Track",
          "name": "trackHeaders",
          "package": "hogg",
          "signature": "Int",
          "source": "src/Codec-Container-Ogg-Track.html#OggTrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "trackHeaders",
          "package": "hogg",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:trackHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Track",
          "name": "trackMetadata",
          "package": "hogg",
          "signature": "MessageHeaders",
          "source": "src/Codec-Container-Ogg-Track.html#OggTrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "trackMetadata",
          "package": "hogg",
          "partial": "Metadata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:trackMetadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Track",
          "name": "trackSerialno",
          "package": "hogg",
          "signature": "Serial",
          "source": "src/Codec-Container-Ogg-Track.html#OggTrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "trackSerialno",
          "package": "hogg",
          "partial": "Serialno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:trackSerialno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Container.Ogg.Track",
          "name": "trackType",
          "package": "hogg",
          "signature": "Maybe ContentType",
          "source": "src/Codec-Container-Ogg-Track.html#OggTrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Container Ogg Track",
          "module": "Codec.Container.Ogg.Track",
          "name": "trackType",
          "package": "hogg",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hogg/docs/Codec-Container-Ogg-Track.html#v:trackType"
      }
    }
  ]
]