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
        "word": "Theora"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module calls the libtheora C library to generate video ogg files from YCbCr images.\n  As explained on \u003ca\u003ehttp://theora.org/doc/libtheora-1.0/group__encfuncs.html\u003c/a\u003e, the basic steps\n  for creating a video are the following :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e create in an \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e record\n\u003c/li\u003e\u003cli\u003e call \u003ccode\u003e\u003ca\u003eencodeAlloc\u003c/a\u003e\u003c/code\u003e on it\n\u003c/li\u003e\u003cli\u003e call \u003ccode\u003e\u003ca\u003eflushHeader\u003c/a\u003e\u003c/code\u003e until it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e For each uncompressed frame, submit it with \u003ccode\u003e\u003ca\u003eencodeIn\u003c/a\u003e\u003c/code\u003e, then retrieve potential packets \n with \u003ccode\u003e\u003ca\u003eencodeOut\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Theora.Encoding",
          "name": "Encoding",
          "package": "Theora",
          "source": "src/Theora-Encoding.html",
          "type": "module"
        },
        "index": {
          "description": "This module calls the libtheora library to generate video ogg files from YCbCr images As explained on http theora.org doc libtheora-1.0 group encfuncs.html the basic steps for creating video are the following create in an Info record call encodeAlloc on it call flushHeader until it returns Nothing For each uncompressed frame submit it with encodeIn then retrieve potential packets with encodeOut",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "Encoding",
          "package": "Theora",
          "partial": "Encoding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "ColorSpace",
          "package": "Theora",
          "source": "src/Theora-Encoding.html#ColorSpace",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "ColorSpace",
          "package": "Theora",
          "partial": "Color Space",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:ColorSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "Comment",
          "package": "Theora",
          "source": "src/Theora-Encoding.html#Comment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "Comment",
          "package": "Theora",
          "partial": "Comment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "ImgPlane",
          "package": "Theora",
          "source": "src/Theora-Encoding.html#ImgPlane",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "ImgPlane",
          "package": "Theora",
          "partial": "Img Plane",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:ImgPlane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "Info",
          "package": "Theora",
          "source": "src/Theora-Encoding.html#Info",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "Info",
          "package": "Theora",
          "partial": "Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "OggPacket",
          "package": "Theora",
          "source": "src/Theora-Encoding.html#OggPacket",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "OggPacket",
          "package": "Theora",
          "partial": "Ogg Packet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:OggPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "OggPage",
          "package": "Theora",
          "source": "src/Theora-Encoding.html#OggPage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "OggPage",
          "package": "Theora",
          "partial": "Ogg Page",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:OggPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheora supports 4 different pixel formats, listed in \n  \u003ca\u003ehttp://theora.org/doc/Theora.pdf\u003c/a\u003e. YCbCr chroma frames (Cb and Cr) may be resized for\n  compression (see \u003ca\u003ehttp://en.wikipedia.org/Ycbcr\u003c/a\u003e). The resulting pixel formats\n  are as follows :\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "PixelFmt",
          "package": "Theora",
          "source": "src/Theora-Encoding.html#PixelFmt",
          "type": "data"
        },
        "index": {
          "description": "Theora supports different pixel formats listed in http theora.org doc Theora.pdf YCbCr chroma frames Cb and Cr may be resized for compression see http en.wikipedia.org Ycbcr The resulting pixel formats are as follows",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "PixelFmt",
          "package": "Theora",
          "partial": "Pixel Fmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:PixelFmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eYCbCrBuffer\u003c/a\u003e\u003c/code\u003e is the type of raw YCbCr frames\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "YCbCrBuffer",
          "package": "Theora",
          "source": "src/Theora-Encoding.html#YCbCrBuffer",
          "type": "data"
        },
        "index": {
          "description": "YCbCrBuffer is the type of raw YCbCr frames",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "YCbCrBuffer",
          "package": "Theora",
          "partial": "YCb Cr Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:YCbCrBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "Comment",
          "package": "Theora",
          "signature": "Comment",
          "source": "src/Theora-Encoding.html#Comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "Comment",
          "package": "Theora",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "Info",
          "package": "Theora",
          "signature": "Info",
          "source": "src/Theora-Encoding.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "Info",
          "package": "Theora",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color space designed for PAL/SECAM content\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "ItuRec470BG",
          "package": "Theora",
          "signature": "ItuRec470BG",
          "source": "src/Theora-Encoding.html#ColorSpace",
          "type": "function"
        },
        "index": {
          "description": "color space designed for PAL SECAM content",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "ItuRec470BG",
          "package": "Theora",
          "partial": "Itu Rec BG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:ItuRec470BG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA color space designed for NTSC content\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "ItuRec470M",
          "package": "Theora",
          "signature": "ItuRec470M",
          "source": "src/Theora-Encoding.html#ColorSpace",
          "type": "function"
        },
        "index": {
          "description": "color space designed for NTSC content",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "ItuRec470M",
          "package": "Theora",
          "partial": "Itu Rec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:ItuRec470M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChroma decimation by 2 in both directions\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "Pf420",
          "package": "Theora",
          "signature": "Pf420",
          "source": "src/Theora-Encoding.html#PixelFmt",
          "type": "function"
        },
        "index": {
          "description": "Chroma decimation by in both directions",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "Pf420",
          "package": "Theora",
          "partial": "Pf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:Pf420"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChroma decimation by 2 in the \u003cem\u003ex\u003c/em\u003e direction\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "Pf422",
          "package": "Theora",
          "signature": "Pf422",
          "source": "src/Theora-Encoding.html#PixelFmt",
          "type": "function"
        },
        "index": {
          "description": "Chroma decimation by in the direction",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "Pf422",
          "package": "Theora",
          "partial": "Pf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:Pf422"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo chroma decimation\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "Pf444",
          "package": "Theora",
          "signature": "Pf444",
          "source": "src/Theora-Encoding.html#PixelFmt",
          "type": "function"
        },
        "index": {
          "description": "No chroma decimation",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "Pf444",
          "package": "Theora",
          "partial": "Pf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:Pf444"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "Unspecified",
          "package": "Theora",
          "signature": "Unspecified",
          "source": "src/Theora-Encoding.html#ColorSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "Unspecified",
          "package": "Theora",
          "partial": "Unspecified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:Unspecified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "YCbCr",
          "package": "Theora",
          "signature": "YCbCr",
          "source": "src/Theora-Encoding.html#YCbCrBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "YCbCr",
          "package": "Theora",
          "partial": "YCb Cr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:YCbCr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe Cb plane\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "cb",
          "package": "Theora",
          "signature": "ImgPlane",
          "source": "src/Theora-Encoding.html#YCbCrBuffer",
          "type": "function"
        },
        "index": {
          "description": "the Cb plane",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "cb",
          "package": "Theora",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:cb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "colorSpace",
          "package": "Theora",
          "signature": "ColorSpace",
          "source": "src/Theora-Encoding.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "colorSpace",
          "package": "Theora",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:colorSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe Cr plane\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "cr",
          "package": "Theora",
          "signature": "ImgPlane",
          "source": "src/Theora-Encoding.html#YCbCrBuffer",
          "type": "function"
        },
        "index": {
          "description": "the Cr plane",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "cr",
          "package": "Theora",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:cr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes an encoder (\u003ccode\u003eEncCtx\u003c/code\u003e) instance out of an \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e record\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "encodeAlloc",
          "package": "Theora",
          "signature": "Info -\u003e IO (Maybe EncCtx)",
          "source": "src/Theora-Encoding.html#encodeAlloc",
          "type": "function"
        },
        "index": {
          "description": "Makes an encoder EncCtx instance out of an Info record",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "encodeAlloc",
          "normalized": "Info-\u003eIO(Maybe EncCtx)",
          "package": "Theora",
          "partial": "Alloc",
          "signature": "Info-\u003eIO(Maybe EncCtx)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:encodeAlloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a frame for encoding\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "encodeIn",
          "package": "Theora",
          "signature": "EncCtx -\u003e YCbCrBuffer -\u003e IO ()",
          "source": "src/Theora-Encoding.html#encodeIn",
          "type": "function"
        },
        "index": {
          "description": "Submits frame for encoding",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "encodeIn",
          "normalized": "EncCtx-\u003eYCbCrBuffer-\u003eIO()",
          "package": "Theora",
          "partial": "In",
          "signature": "EncCtx-\u003eYCbCrBuffer-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:encodeIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve all the ready encoded packets\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "encodeOut",
          "package": "Theora",
          "signature": "EncCtx -\u003e Bool -\u003e IO [OggPacket]",
          "source": "src/Theora-Encoding.html#encodeOut",
          "type": "function"
        },
        "index": {
          "description": "Retrieve all the ready encoded packets",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "encodeOut",
          "normalized": "EncCtx-\u003eBool-\u003eIO[OggPacket]",
          "package": "Theora",
          "partial": "Out",
          "signature": "EncCtx-\u003eBool-\u003eIO[OggPacket]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:encodeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the last header packets. This function should be called before\n encoding actual video.\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "flushHeader",
          "package": "Theora",
          "signature": "EncCtx -\u003e Comment -\u003e IO [OggPacket]",
          "source": "src/Theora-Encoding.html#flushHeader",
          "type": "function"
        },
        "index": {
          "description": "Returns the last header packets This function should be called before encoding actual video",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "flushHeader",
          "normalized": "EncCtx-\u003eComment-\u003eIO[OggPacket]",
          "package": "Theora",
          "partial": "Header",
          "signature": "EncCtx-\u003eComment-\u003eIO[OggPacket]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:flushHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "frameHeight",
          "package": "Theora",
          "signature": "Int32",
          "source": "src/Theora-Encoding.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "frameHeight",
          "package": "Theora",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:frameHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "frameWidth",
          "package": "Theora",
          "signature": "Int32",
          "source": "src/Theora-Encoding.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "frameWidth",
          "package": "Theora",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:frameWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "keyframeGranuleShift",
          "package": "Theora",
          "signature": "CInt",
          "source": "src/Theora-Encoding.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "keyframeGranuleShift",
          "package": "Theora",
          "partial": "Granule Shift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:keyframeGranuleShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializes an Ogg container stream\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "newOggStreamState",
          "package": "Theora",
          "signature": "Int -\u003e IO OggStreamState",
          "source": "src/Theora-Encoding.html#newOggStreamState",
          "type": "function"
        },
        "index": {
          "description": "Initializes an Ogg container stream",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "newOggStreamState",
          "normalized": "Int-\u003eIO OggStreamState",
          "package": "Theora",
          "partial": "Ogg Stream State",
          "signature": "Int-\u003eIO OggStreamState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:newOggStreamState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new YCbCrBuffer object\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "newYCbCr",
          "package": "Theora",
          "signature": "Int -\u003e Int -\u003e PixelFmt -\u003e IO YCbCrBuffer",
          "source": "src/Theora-Encoding.html#newYCbCr",
          "type": "function"
        },
        "index": {
          "description": "Allocate new YCbCrBuffer object",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "newYCbCr",
          "normalized": "Int-\u003eInt-\u003ePixelFmt-\u003eIO YCbCrBuffer",
          "package": "Theora",
          "partial": "YCb Cr",
          "signature": "Int-\u003eInt-\u003ePixelFmt-\u003eIO YCbCrBuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:newYCbCr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "picHeight",
          "package": "Theora",
          "signature": "Int32",
          "source": "src/Theora-Encoding.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "picHeight",
          "package": "Theora",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:picHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "picWidth",
          "package": "Theora",
          "signature": "Int32",
          "source": "src/Theora-Encoding.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "picWidth",
          "package": "Theora",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:picWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "picX",
          "package": "Theora",
          "signature": "Int32",
          "source": "src/Theora-Encoding.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "picX",
          "package": "Theora",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:picX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "picY",
          "package": "Theora",
          "signature": "Int32",
          "source": "src/Theora-Encoding.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "picY",
          "package": "Theora",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:picY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "pixelFmt",
          "package": "Theora",
          "signature": "PixelFmt",
          "source": "src/Theora-Encoding.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "pixelFmt",
          "package": "Theora",
          "partial": "Fmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:pixelFmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "quality",
          "package": "Theora",
          "signature": "CInt",
          "source": "src/Theora-Encoding.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "quality",
          "package": "Theora",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:quality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the last pages of the stream\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "streamFlush",
          "package": "Theora",
          "signature": "OggStreamState -\u003e IO (Maybe OggPage)",
          "source": "src/Theora-Encoding.html#streamFlush",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the last pages of the stream",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "streamFlush",
          "normalized": "OggStreamState-\u003eIO(Maybe OggPage)",
          "package": "Theora",
          "partial": "Flush",
          "signature": "OggStreamState-\u003eIO(Maybe OggPage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:streamFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits an encoded packet into the streams\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "streamPacketIn",
          "package": "Theora",
          "signature": "OggStreamState -\u003e OggPacket -\u003e IO ()",
          "source": "src/Theora-Encoding.html#streamPacketIn",
          "type": "function"
        },
        "index": {
          "description": "Submits an encoded packet into the streams",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "streamPacketIn",
          "normalized": "OggStreamState-\u003eOggPacket-\u003eIO()",
          "package": "Theora",
          "partial": "Packet In",
          "signature": "OggStreamState-\u003eOggPacket-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:streamPacketIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an outputable Ogg page               \n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "streamPageOut",
          "package": "Theora",
          "signature": "OggStreamState -\u003e IO (Maybe OggPage)",
          "source": "src/Theora-Encoding.html#streamPageOut",
          "type": "function"
        },
        "index": {
          "description": "Get an outputable Ogg page",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "streamPageOut",
          "normalized": "OggStreamState-\u003eIO(Maybe OggPage)",
          "package": "Theora",
          "partial": "Page Out",
          "signature": "OggStreamState-\u003eIO(Maybe OggPage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:streamPageOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Theora.Encoding",
          "name": "targetBitRate",
          "package": "Theora",
          "signature": "CInt",
          "source": "src/Theora-Encoding.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "targetBitRate",
          "package": "Theora",
          "partial": "Bit Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:targetBitRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYour comments\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "user",
          "package": "Theora",
          "signature": "[String]",
          "source": "src/Theora-Encoding.html#Comment",
          "type": "function"
        },
        "index": {
          "description": "Your comments",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "user",
          "normalized": "[String]",
          "package": "Theora",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the encoder, i.e. your application\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "vendor",
          "package": "Theora",
          "signature": "String",
          "source": "src/Theora-Encoding.html#Comment",
          "type": "function"
        },
        "index": {
          "description": "Name of the encoder i.e your application",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "vendor",
          "package": "Theora",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:vendor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe Y plane\n\u003c/p\u003e",
          "module": "Theora.Encoding",
          "name": "y",
          "package": "Theora",
          "signature": "ImgPlane",
          "source": "src/Theora-Encoding.html#YCbCrBuffer",
          "type": "function"
        },
        "index": {
          "description": "the plane",
          "hierarchy": "Theora Encoding",
          "module": "Theora.Encoding",
          "name": "y",
          "package": "Theora",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:y"
      }
    }
  ]
]