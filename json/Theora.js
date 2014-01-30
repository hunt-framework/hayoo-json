[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module calls the libtheora C library to generate video ogg files from YCbCr images.\n  As explained on \u003ca\u003ehttp://theora.org/doc/libtheora-1.0/group__encfuncs.html\u003c/a\u003e, the basic steps\n  for creating a video are the following :\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e create in an \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e record\n\u003c/li\u003e\u003cli\u003e call \u003ccode\u003e\u003ca\u003eencodeAlloc\u003c/a\u003e\u003c/code\u003e on it\n\u003c/li\u003e\u003cli\u003e call \u003ccode\u003e\u003ca\u003eflushHeader\u003c/a\u003e\u003c/code\u003e until it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e For each uncompressed frame, submit it with \u003ccode\u003e\u003ca\u003eencodeIn\u003c/a\u003e\u003c/code\u003e, then retrieve potential packets \n with \u003ccode\u003e\u003ca\u003eencodeOut\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "module",
        "fct-source": "src/Theora-Encoding.html",
        "fct-type": "module",
        "title": "Encoding"
      },
      "index": {
        "description": "This module calls the libtheora library to generate video ogg files from YCbCr images As explained on http theora.org doc libtheora-1.0 group encfuncs.html the basic steps for creating video are the following create in an Info record call encodeAlloc on it call flushHeader until it returns Nothing For each uncompressed frame submit it with encodeIn then retrieve potential packets with encodeOut",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "Encoding",
        "normalized": "",
        "package": "Theora",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:ColorSpace",
      "description": {
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "data",
        "fct-source": "src/Theora-Encoding.html#ColorSpace",
        "fct-type": "data",
        "title": "ColorSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "ColorSpace",
        "normalized": "",
        "package": "Theora",
        "partial": "Color Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:Comment",
      "description": {
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "data",
        "fct-source": "src/Theora-Encoding.html#Comment",
        "fct-type": "data",
        "title": "Comment"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "Comment",
        "normalized": "",
        "package": "Theora",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:ImgPlane",
      "description": {
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "data",
        "fct-source": "src/Theora-Encoding.html#ImgPlane",
        "fct-type": "data",
        "title": "ImgPlane"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "ImgPlane",
        "normalized": "",
        "package": "Theora",
        "partial": "Img Plane",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:Info",
      "description": {
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "data",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "data",
        "title": "Info"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "Info",
        "normalized": "",
        "package": "Theora",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:OggPacket",
      "description": {
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "data",
        "fct-source": "src/Theora-Encoding.html#OggPacket",
        "fct-type": "data",
        "title": "OggPacket"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "OggPacket",
        "normalized": "",
        "package": "Theora",
        "partial": "Ogg Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:OggPage",
      "description": {
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "data",
        "fct-source": "src/Theora-Encoding.html#OggPage",
        "fct-type": "data",
        "title": "OggPage"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "OggPage",
        "normalized": "",
        "package": "Theora",
        "partial": "Ogg Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:PixelFmt",
      "description": {
        "fct-descr": "\u003cp\u003eTheora supports 4 different pixel formats, listed in \n  \u003ca\u003ehttp://theora.org/doc/Theora.pdf\u003c/a\u003e. YCbCr chroma frames (Cb and Cr) may be resized for\n  compression (see \u003ca\u003ehttp://en.wikipedia.org/Ycbcr\u003c/a\u003e). The resulting pixel formats\n  are as follows :\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "data",
        "fct-source": "src/Theora-Encoding.html#PixelFmt",
        "fct-type": "data",
        "title": "PixelFmt"
      },
      "index": {
        "description": "Theora supports different pixel formats listed in http theora.org doc Theora.pdf YCbCr chroma frames Cb and Cr may be resized for compression see http en.wikipedia.org Ycbcr The resulting pixel formats are as follows",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "PixelFmt",
        "normalized": "",
        "package": "Theora",
        "partial": "Pixel Fmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#t:YCbCrBuffer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eYCbCrBuffer\u003c/a\u003e\u003c/code\u003e is the type of raw YCbCr frames\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "data",
        "fct-source": "src/Theora-Encoding.html#YCbCrBuffer",
        "fct-type": "data",
        "title": "YCbCrBuffer"
      },
      "index": {
        "description": "YCbCrBuffer is the type of raw YCbCr frames",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "YCbCrBuffer",
        "normalized": "",
        "package": "Theora",
        "partial": "YCb Cr Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:Comment",
      "description": {
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Comment",
        "fct-source": "src/Theora-Encoding.html#Comment",
        "fct-type": "function",
        "title": "Comment"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "Comment",
        "normalized": "",
        "package": "Theora",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:Info",
      "description": {
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Info",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "function",
        "title": "Info"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "Info",
        "normalized": "",
        "package": "Theora",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:ItuRec470BG",
      "description": {
        "fct-descr": "\u003cp\u003eA color space designed for PAL/SECAM content\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "ItuRec470BG",
        "fct-source": "src/Theora-Encoding.html#ColorSpace",
        "fct-type": "function",
        "title": "ItuRec470BG"
      },
      "index": {
        "description": "color space designed for PAL SECAM content",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "ItuRec470BG",
        "normalized": "",
        "package": "Theora",
        "partial": "Itu Rec BG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:ItuRec470M",
      "description": {
        "fct-descr": "\u003cp\u003eA color space designed for NTSC content\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "ItuRec470M",
        "fct-source": "src/Theora-Encoding.html#ColorSpace",
        "fct-type": "function",
        "title": "ItuRec470M"
      },
      "index": {
        "description": "color space designed for NTSC content",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "ItuRec470M",
        "normalized": "",
        "package": "Theora",
        "partial": "Itu Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:Pf420",
      "description": {
        "fct-descr": "\u003cp\u003eChroma decimation by 2 in both directions\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Pf420",
        "fct-source": "src/Theora-Encoding.html#PixelFmt",
        "fct-type": "function",
        "title": "Pf420"
      },
      "index": {
        "description": "Chroma decimation by in both directions",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "Pf420",
        "normalized": "",
        "package": "Theora",
        "partial": "Pf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:Pf422",
      "description": {
        "fct-descr": "\u003cp\u003eChroma decimation by 2 in the \u003cem\u003ex\u003c/em\u003e direction\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Pf422",
        "fct-source": "src/Theora-Encoding.html#PixelFmt",
        "fct-type": "function",
        "title": "Pf422"
      },
      "index": {
        "description": "Chroma decimation by in the direction",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "Pf422",
        "normalized": "",
        "package": "Theora",
        "partial": "Pf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:Pf444",
      "description": {
        "fct-descr": "\u003cp\u003eNo chroma decimation\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Pf444",
        "fct-source": "src/Theora-Encoding.html#PixelFmt",
        "fct-type": "function",
        "title": "Pf444"
      },
      "index": {
        "description": "No chroma decimation",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "Pf444",
        "normalized": "",
        "package": "Theora",
        "partial": "Pf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:Unspecified",
      "description": {
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Unspecified",
        "fct-source": "src/Theora-Encoding.html#ColorSpace",
        "fct-type": "function",
        "title": "Unspecified"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "Unspecified",
        "normalized": "",
        "package": "Theora",
        "partial": "Unspecified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:YCbCr",
      "description": {
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "YCbCr",
        "fct-source": "src/Theora-Encoding.html#YCbCrBuffer",
        "fct-type": "function",
        "title": "YCbCr"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "YCbCr",
        "normalized": "",
        "package": "Theora",
        "partial": "YCb Cr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:cb",
      "description": {
        "fct-descr": "\u003cp\u003ethe Cb plane\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "ImgPlane",
        "fct-source": "src/Theora-Encoding.html#YCbCrBuffer",
        "fct-type": "function",
        "title": "cb"
      },
      "index": {
        "description": "the Cb plane",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "cb",
        "normalized": "",
        "package": "Theora",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:colorSpace",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "ColorSpace",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "function",
        "title": "colorSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "colorSpace",
        "normalized": "",
        "package": "Theora",
        "partial": "Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:cr",
      "description": {
        "fct-descr": "\u003cp\u003ethe Cr plane\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "ImgPlane",
        "fct-source": "src/Theora-Encoding.html#YCbCrBuffer",
        "fct-type": "function",
        "title": "cr"
      },
      "index": {
        "description": "the Cr plane",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "cr",
        "normalized": "",
        "package": "Theora",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:encodeAlloc",
      "description": {
        "fct-descr": "\u003cp\u003eMakes an encoder (\u003ccode\u003eEncCtx\u003c/code\u003e) instance out of an \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e record\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Info -\u003e IO (Maybe EncCtx)",
        "fct-source": "src/Theora-Encoding.html#encodeAlloc",
        "fct-type": "function",
        "title": "encodeAlloc"
      },
      "index": {
        "description": "Makes an encoder EncCtx instance out of an Info record",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "encodeAlloc",
        "normalized": "Info-\u003eIO(Maybe EncCtx)",
        "package": "Theora",
        "partial": "Alloc",
        "signature": "Info-\u003eIO(Maybe EncCtx)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:encodeIn",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits a frame for encoding\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "EncCtx -\u003e YCbCrBuffer -\u003e IO ()",
        "fct-source": "src/Theora-Encoding.html#encodeIn",
        "fct-type": "function",
        "title": "encodeIn"
      },
      "index": {
        "description": "Submits frame for encoding",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "encodeIn",
        "normalized": "EncCtx-\u003eYCbCrBuffer-\u003eIO()",
        "package": "Theora",
        "partial": "In",
        "signature": "EncCtx-\u003eYCbCrBuffer-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:encodeOut",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve all the ready encoded packets\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "EncCtx -\u003e Bool -\u003e IO [OggPacket]",
        "fct-source": "src/Theora-Encoding.html#encodeOut",
        "fct-type": "function",
        "title": "encodeOut"
      },
      "index": {
        "description": "Retrieve all the ready encoded packets",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "encodeOut",
        "normalized": "EncCtx-\u003eBool-\u003eIO[OggPacket]",
        "package": "Theora",
        "partial": "Out",
        "signature": "EncCtx-\u003eBool-\u003eIO[OggPacket]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:flushHeader",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the last header packets. This function should be called before\n encoding actual video.\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "EncCtx -\u003e Comment -\u003e IO [OggPacket]",
        "fct-source": "src/Theora-Encoding.html#flushHeader",
        "fct-type": "function",
        "title": "flushHeader"
      },
      "index": {
        "description": "Returns the last header packets This function should be called before encoding actual video",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "flushHeader",
        "normalized": "EncCtx-\u003eComment-\u003eIO[OggPacket]",
        "package": "Theora",
        "partial": "Header",
        "signature": "EncCtx-\u003eComment-\u003eIO[OggPacket]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:frameHeight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Int32",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "function",
        "title": "frameHeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "frameHeight",
        "normalized": "",
        "package": "Theora",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:frameWidth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Int32",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "function",
        "title": "frameWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "frameWidth",
        "normalized": "",
        "package": "Theora",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:keyframeGranuleShift",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "CInt",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "function",
        "title": "keyframeGranuleShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "keyframeGranuleShift",
        "normalized": "",
        "package": "Theora",
        "partial": "Granule Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:newOggStreamState",
      "description": {
        "fct-descr": "\u003cp\u003eInitializes an Ogg container stream\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Int -\u003e IO OggStreamState",
        "fct-source": "src/Theora-Encoding.html#newOggStreamState",
        "fct-type": "function",
        "title": "newOggStreamState"
      },
      "index": {
        "description": "Initializes an Ogg container stream",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "newOggStreamState",
        "normalized": "Int-\u003eIO OggStreamState",
        "package": "Theora",
        "partial": "Ogg Stream State",
        "signature": "Int-\u003eIO OggStreamState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:newYCbCr",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate a new YCbCrBuffer object\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Int -\u003e Int -\u003e PixelFmt -\u003e IO YCbCrBuffer",
        "fct-source": "src/Theora-Encoding.html#newYCbCr",
        "fct-type": "function",
        "title": "newYCbCr"
      },
      "index": {
        "description": "Allocate new YCbCrBuffer object",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "newYCbCr",
        "normalized": "Int-\u003eInt-\u003ePixelFmt-\u003eIO YCbCrBuffer",
        "package": "Theora",
        "partial": "YCb Cr",
        "signature": "Int-\u003eInt-\u003ePixelFmt-\u003eIO YCbCrBuffer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:picHeight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Int32",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "function",
        "title": "picHeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "picHeight",
        "normalized": "",
        "package": "Theora",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:picWidth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Int32",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "function",
        "title": "picWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "picWidth",
        "normalized": "",
        "package": "Theora",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:picX",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Int32",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "function",
        "title": "picX"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "picX",
        "normalized": "",
        "package": "Theora",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:picY",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "Int32",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "function",
        "title": "picY"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "picY",
        "normalized": "",
        "package": "Theora",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:pixelFmt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "PixelFmt",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "function",
        "title": "pixelFmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "pixelFmt",
        "normalized": "",
        "package": "Theora",
        "partial": "Fmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:quality",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "CInt",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "function",
        "title": "quality"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "quality",
        "normalized": "",
        "package": "Theora",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:streamFlush",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the last pages of the stream\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "OggStreamState -\u003e IO (Maybe OggPage)",
        "fct-source": "src/Theora-Encoding.html#streamFlush",
        "fct-type": "function",
        "title": "streamFlush"
      },
      "index": {
        "description": "Retrieve the last pages of the stream",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "streamFlush",
        "normalized": "OggStreamState-\u003eIO(Maybe OggPage)",
        "package": "Theora",
        "partial": "Flush",
        "signature": "OggStreamState-\u003eIO(Maybe OggPage)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:streamPacketIn",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits an encoded packet into the streams\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "OggStreamState -\u003e OggPacket -\u003e IO ()",
        "fct-source": "src/Theora-Encoding.html#streamPacketIn",
        "fct-type": "function",
        "title": "streamPacketIn"
      },
      "index": {
        "description": "Submits an encoded packet into the streams",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "streamPacketIn",
        "normalized": "OggStreamState-\u003eOggPacket-\u003eIO()",
        "package": "Theora",
        "partial": "Packet In",
        "signature": "OggStreamState-\u003eOggPacket-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:streamPageOut",
      "description": {
        "fct-descr": "\u003cp\u003eGet an outputable Ogg page               \n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "OggStreamState -\u003e IO (Maybe OggPage)",
        "fct-source": "src/Theora-Encoding.html#streamPageOut",
        "fct-type": "function",
        "title": "streamPageOut"
      },
      "index": {
        "description": "Get an outputable Ogg page",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "streamPageOut",
        "normalized": "OggStreamState-\u003eIO(Maybe OggPage)",
        "package": "Theora",
        "partial": "Page Out",
        "signature": "OggStreamState-\u003eIO(Maybe OggPage)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:targetBitRate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "CInt",
        "fct-source": "src/Theora-Encoding.html#Info",
        "fct-type": "function",
        "title": "targetBitRate"
      },
      "index": {
        "description": "",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "targetBitRate",
        "normalized": "",
        "package": "Theora",
        "partial": "Bit Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:user",
      "description": {
        "fct-descr": "\u003cp\u003eYour comments\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "[String]",
        "fct-source": "src/Theora-Encoding.html#Comment",
        "fct-type": "function",
        "title": "user"
      },
      "index": {
        "description": "Your comments",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "user",
        "normalized": "[String]",
        "package": "Theora",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:vendor",
      "description": {
        "fct-descr": "\u003cp\u003eName of the encoder, i.e. your application\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "String",
        "fct-source": "src/Theora-Encoding.html#Comment",
        "fct-type": "function",
        "title": "vendor"
      },
      "index": {
        "description": "Name of the encoder i.e your application",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "vendor",
        "normalized": "",
        "package": "Theora",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Theora/docs/Theora-Encoding.html#v:y",
      "description": {
        "fct-descr": "\u003cp\u003ethe Y plane\n\u003c/p\u003e",
        "fct-module": "Theora.Encoding",
        "fct-package": "Theora",
        "fct-signature": "ImgPlane",
        "fct-source": "src/Theora-Encoding.html#YCbCrBuffer",
        "fct-type": "function",
        "title": "y"
      },
      "index": {
        "description": "the plane",
        "hierarchy": "Theora Encoding",
        "module": "Theora.Encoding",
        "name": "y",
        "normalized": "",
        "package": "Theora",
        "partial": "",
        "signature": ""
      }
    }
  }
]